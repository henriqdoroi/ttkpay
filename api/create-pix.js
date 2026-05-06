export default async function handler(req, res) {
  try {
    const body = req.body || {};

    const amount = Number(body.amount);

    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Valor não inicializado" });
    }

    const response = await fetch(
      "https://www.pagamentos-seguros.app/api-pix/WZkHxOpdc6p6Lzuapnh-qpv1Q8Gti7ryzU1elYZvNU6Yb_nw_GSq6TAaKnn8l7JKvoSFb6pM1eWpYnDEY88LTA",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount,
          description: body.description || "Pagamento via Pix",
          customer: body.customer,
          item: {
            title: "Contribuição de segurança",
            price: amount,
            quantity: 1
          },
          paymentMethod: "PIX"
        })
      }
    );

    const data = await response.json();

    if (!data.pixCode) {
      return res.status(400).json({ error: "Erro ao gerar PIX" });
    }

    return res.json({
      pixCode: data.pixCode,
      qr_code: data.qr_code || null,
      transactionId: data.transactionId,
      amount
    });

  } catch (err) {
    return res.status(500).json({
      error: "Erro interno no servidor"
    });
  }
}
