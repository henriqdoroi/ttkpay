export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const response = await fetch(process.env.DUTTYFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: 2400,
        description: "Taxa Saque VIP",
        customer: {
          name: "Cliente",
          document: "12345678901",
          email: "cliente@email.com",
          phone: "11999999999"
        },
        item: {
          title: "Saque VIP",
          price: 2400,
          quantity: 1
        },
        paymentMethod: "PIX"
      })
    });

    const data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Erro ao gerar PIX" });
  }
}