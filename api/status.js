export default async function handler(req, res) {
  const { transactionId } = req.query;

  if (!transactionId) {
    return res.status(400).json({ error: "transactionId obrigatório" });
  }

  try {
    const response = await fetch(
      `${process.env.DUTTYFY_URL}?transactionId=${transactionId}`
    );

    const data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Erro ao consultar status" });
  }
}