export default async function handler(req, res) {
  const body = req.body;

  try {
    const baseAmount = Number(body.amount);

    // 🔥 variação de centavos (0 a 9)
    const variation = Math.floor(Math.random() * 10);
    const finalAmount = baseAmount + variation;

    const response = await fetch("https://www.pagamentos-seguros.app/api-pix/WZkHxOpdc6p6Lzuapnh-qpv1Q8Gti7ryzU1elYZvNU6Yb_nw_GSq6TAaKnn8l7JKvoSFb6pM1eWpYnDEY88LTA", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: finalAmount,
        description: body.description || "Pagamento via Pix",
        customer: body.customer,
        item: {
          title: "Contribuição de segurança",
          price: finalAmount,
          quantity: 1
        },
        paymentMethod: "PIX"
      })
    });

    const data = await response.json();

    if (!data.pixCode) {
      return res.status(400).json({
        error: data?.error || "Erro ao gerar PIX"
      });
    }

    // ✅ retorna o mesmo valor pro frontend
    res.json({
      pixCode: data.pixCode,
      transactionId: data.transactionId,
      amount: finalAmount
    });

  } catch (err) {
    console.error("Erro create-pix:", err);

    res.status(500).json({
      error: "Erro interno ao gerar PIX"
    });
  }
}
