export default async function handler(req, res) {
  const body = req.body;

  console.log("Webhook recebido:", body);

  if (body.status === "COMPLETED") {
    const transactionId =
      body.transactionId || body?._id?.$oid;

    console.log("PAGAMENTO CONFIRMADO:", transactionId);

    // 👉 Aqui você pode:
    // liberar acesso
    // redirecionar
    // salvar no banco
  }

  res.status(200).json({ ok: true });
}