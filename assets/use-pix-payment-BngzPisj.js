import { c as L, p as E, r, z as q, A as m } from "./index-CJ4HKgLV.js";

/**
 * Loader icon
 */
const A = L("LoaderCircle", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);

/**
 * Gera cliente fake (fallback)
 */
const T = () => {
    const n = ["João", "Maria", "Pedro", "Ana", "Carlos", "Fernanda", "Lucas", "Julia"];
    const s = ["Silva", "Santos", "Oliveira", "Souza", "Lima", "Pereira"];

    return {
        name: `${n[Math.floor(Math.random() * n.length)]} ${s[Math.floor(Math.random() * s.length)]}`,
        email: `user${Date.now()}@email.com`,
        document: String(Math.floor(1e10 + Math.random() * 89999999999)),
        phone: `11${Math.floor(9e8 + Math.random() * 99999999)}`
    };
};

/**
 * Hook principal
 */
const B = ({ amountInCents: n, redirectTo: s, customerData: g, extraState: u, description: d }) => {
    const navigate = E();

    const [loading, setLoading] = r.useState(false);
    const [pixData, setPixData] = r.useState(null);
    const [copied, setCopied] = r.useState(false);
    const [timer, setTimer] = r.useState(null);
    const [customer, setCustomer] = r.useState(g || null);

    const pollRef = r.useRef(null);
    const pixRef = r.useRef(null);
    const paidRef = r.useRef(false);

    /**
     * TIMER
     */
    r.useEffect(() => {
        if (!timer) return;

        const i = setInterval(() => {
            setTimer(t => (t ? Math.max(0, t - 1) : null));
        }, 1000);

        return () => clearInterval(i);
    }, [timer]);

    /**
     * LIMPA POLLING
     */
    r.useEffect(() => {
        return () => pollRef.current && clearInterval(pollRef.current);
    }, []);

    const formattedTimer = timer !== null
        ? `${String(Math.floor(timer / 60)).padStart(2, "0")}:${String(timer % 60).padStart(2, "0")}`
        : null;

    /**
     * POLLING STATUS
     */
    const startPolling = (transactionId, customerData) => {
        pollRef.current && clearInterval(pollRef.current);
        paidRef.current = false;

        pollRef.current = setInterval(async () => {
            if (paidRef.current) return;

            try {
                const res = await fetch(`/api/check-pix-status?transactionId=${transactionId}`);
                const data = await res.json();

                if (!data?.status) return;

                // Adicionado "paid" e "approved" para cobrir outros status comuns de gateways
                if (data.status === "COMPLETED" || data.status === "paid" || data.status === "approved") {
                    paidRef.current = true;
                    clearInterval(pollRef.current);

                    q({ value: n / 100, currency: "BRL" });

                    m({ title: "Pagamento confirmado! ✅" });

                    navigate(s, {
                        state: {
                            customerData,
                            ...u
                        }
                    });
                }
            } catch (err) {
                console.error("Polling error:", err);
            }
        }, 3000);
    };

    return {
        loading,
        pixData,
        copied,
        pixTimer: formattedTimer,
        pixRef,
        customer,

        /**
         * CRIAR PIX
         */
        handlePay: async () => {
            setLoading(true);

            try {
                const t = customer || T();
                if (!customer) setCustomer(t);

                const amountFinal = Number(n || 0);

                if (!amountFinal || isNaN(amountFinal)) {
                    throw new Error("Valor inválido");
                }

                const response = await fetch("/api/create-pix", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        amount: amountFinal,
                        value: amountFinal, // Fallback para garantir que a API receba o valor
                        transaction_amount: amountFinal / 100, // Fallback para gateways como Mercado Pago
                        customer: t,
                        description: d || "Pagamento via PIX"
                    })
                });

                const e = await response.json();

                if (!response.ok) {
                    throw new Error(e?.error || e?.message || "Erro ao gerar PIX");
                }

                if (!e?.pixCode && !e?.qr_code) {
                    throw new Error("PIX inválido retornado pelo servidor");
                }

                const P = {
                    qr_code: e.pixCode || e.qr_code,
                    qr_code_base64: e.qr_code_base64 || null,
                    transaction_id: String(e.transactionId || e.transaction_id),
                    expires_at: e.expires_at || null,
                    amount: e.amount || amountFinal
                };

                setPixData(P);
                setTimer(600);

                setTimeout(() => {
                    pixRef.current?.scrollIntoView({ behavior: "smooth" });
                }, 200);

                startPolling(P.transaction_id, t);

            } catch (err) {
                console.error("PIX ERROR:", err);

                m({
                    title: "Erro",
                    description: err.message || "Falha ao gerar PIX",
                    variant: "destructive"
                });

            } finally {
                setLoading(false);
            }
        },

        /**
         * COPIAR PIX
         */
        handleCopy: async () => {
            if (!pixData?.qr_code) return;

            try {
                await navigator.clipboard.writeText(pixData.qr_code);
                setCopied(true);

                m({ title: "Código PIX copiado!" });

                setTimeout(() => setCopied(false), 3000);

            } catch {
                m({
                    title: "Erro ao copiar",
                    variant: "destructive"
                });
            }
        }
    };
};

export { A as L, B as u };
