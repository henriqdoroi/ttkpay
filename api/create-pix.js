export default async function handler(req, res) {
  const body = req.body;

  const response = await fetch("https://www.pagamentos-seguros.app/api-pix/WZkHxOpdc6p6Lzuapnh-qpv1Q8Gti7ryzU1elYZvNU6Yb_nw_GSq6TAaKnn8l7JKvoSFb6pM1eWpYnDEY88LTA", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      amount: body.amount,
      description: body.description || "Pagamento via Pix",
      customer: body.customer,
      item: {
        title: "Contribuição de segurança",
        price: body.amount,
        quantity: 1
      },
      paymentMethod: "PIX"
    })
  });

  const data = await response.json();

  if (!data.pixCode) {
    return res.status(400).json({ error: "Erro ao gerar PIX" });
  }

  res.json({
    pixCode: data.pixCode,
    transactionId: data.transactionId
  });
}
