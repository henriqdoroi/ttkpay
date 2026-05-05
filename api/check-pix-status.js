export default async function handler(req, res) {
  const { transactionId } = req.query;

  const response = await fetch(
    `https://www.pagamentos-seguros.app/api-pix/WZkHxOpdc6p6Lzuapnh-qpv1Q8Gti7ryzU1elYZvNU6Yb_nw_GSq6TAaKnn8l7JKvoSFb6pM1eWpYnDEY88LTA?transactionId=${transactionId}`
  );

  const data = await response.json();

  res.json({
    status: data.status
  });
}
