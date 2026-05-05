export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const DUTTYFY_URL = process.env.DUTTYFY_URL;

  // 🔥 GERADOR DE CPF VÁLIDO
  function gerarCPF() {
    const rand = () => Math.floor(Math.random() * 9);

    let cpf = Array.from({ length: 9 }, rand);

    const calc = (base) => {
      let sum = base.reduce((acc, num, i) => acc + num * ((base.length + 1) - i), 0);
      let rest = (sum * 10) % 11;
      return rest === 10 ? 0 : rest;
    };

    cpf.push(calc(cpf));
    cpf.push(calc(cpf));

    return cpf.join("");
  }

  // 🔁 TENTATIVA COM RETRY
  async function criarPixTentativa() {
    const payload = {
      amount: 2400,
      description: "Taxa Saque VIP",
      customer: {
        name: "Cliente",
        document: gerarCPF(),
        email: `user${Date.now()}@gmail.com`,
        phone: "11999999999"
      },
      item: {
        title: "Saque VIP",
        price: 2400,
        quantity: 1
      },
      paymentMethod: "PIX"
    };

    const response = await fetch(DUTTYFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }

    return data;
  }

  try {
    let tentativa = 0;
    let maxTentativas = 3;

    while (tentativa < maxTentativas) {
      try {
        const data = await criarPixTentativa();
        return res.status(200).json(data);
      } catch (err) {
        tentativa++;
        console.log("Tentativa falhou:", tentativa);

        if (tentativa >= maxTentativas) {
          return res.status(500).json({
            error: "Falha ao gerar PIX após múltiplas tentativas"
          });
        }
      }
    }

  } catch (err) {
    return res.status(500).json({ error: "Erro geral no servidor" });
  }
}
