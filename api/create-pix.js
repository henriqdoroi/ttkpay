let cachedAmount = null;

export default async function handler(req, res) {
  if (!cachedAmount) {
    return res.status(400).json({ error: "Valor não inicializado" });
  }

  const body = req.body;

  const response = await fetch("https://www.pagamentos-seguros.app/api-pix/WZkHxOpdc6p6Lzuapnh-qpv1Q8Gti7ryzU1elYZvNU6Yb_nw_GSq6TAaKnn8l7JKvoSFb6pM1eWpYnDEY88LTA", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      amount: cachedAmount,
      description: body.description || "Pagamento via Pix",
      customer: body.customer,
      item: {
        title: "Contribuição de segurança",
        price: cachedAmount,
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
    transactionId: data.transactionId,
    amount: cachedAmount
  });
}
