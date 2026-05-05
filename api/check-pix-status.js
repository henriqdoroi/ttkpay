export default async function handler(req, res) {
  const { transactionId } = req.query;

  const response = await fetch(
    `SUA_URL_ENCRIPTADA_DUTTYFY?transactionId=${transactionId}`
  );

  const data = await response.json();

  res.json({
    status: data.status
  });
}