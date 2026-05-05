export default async function handler(req, res) {
  const body = req.body;

  const response = await fetch("SUA_URL_ENCRIPTADA_DUTTYFY", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      amount: body.amount,
      description: body.description || "Pagamento via Pix",
      customer: body.customer,
      item: {
        title: "Produto",
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