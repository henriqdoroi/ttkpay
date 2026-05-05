let cachedAmount = null;

export default function handler(req, res) {
  if (!cachedAmount) {
    const base = 3222; // 32,22
    const random = Math.floor(Math.random() * 10); // 0–9 centavos
    cachedAmount = base + random;
  }

  res.json({
    amount: cachedAmount
  });
}
