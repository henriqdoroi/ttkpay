import r from "react";

// Spinner de carregamento em SVG para evitar erro de referência na exportação
const A = (props) => r.createElement("svg", {
    width: props.size || 24,
    height: props.size || 24,
    className: props.className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, [
    r.createElement("line", { x1: "12", y1: "2", x2: "12", y2: "6", key: "1" }),
    r.createElement("line", { x1: "12", y1: "18", x2: "12", y2: "22", key: "2" }),
    r.createElement("line", { x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76", key: "3" }),
    r.createElement("line", { x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07", key: "4" }),
    r.createElement("line", { x1: "2", y1: "12", x2: "6", y2: "12", key: "5" }),
    r.createElement("line", { x1: "18", y1: "12", x2: "22", y2: "12", key: "6" }),
    r.createElement("line", { x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24", key: "7" }),
    r.createElement("line", { x1: "16.24", y1: "4.93", x2: "19.07", y2: "7.76", key: "8" })
]);

const B = ({amountInCents: n, redirectTo: s, customerData: g, extraState: u, description: d}) => {
    const f = E(); // Certifique-se de que E() está definido no seu ambiente
    const [k,v] = r.useState(false);
    const [l,M] = r.useState(null);
    const [w,y] = r.useState(false);
    const [c,C] = r.useState(null);
    const [p,R] = r.useState(g || null);

    const o = r.useRef(null);
    const I = r.useRef(null);
    const h = r.useRef(false);

    r.useEffect(() => {
        if (c === null || c <= 0) return;
        const t = setInterval(() => {
            C(i => i !== null ? Math.max(0, i - 1) : null);
        }, 1000);
        return () => clearInterval(t);
    }, [c]);

    r.useEffect(() => () => {
        o.current && clearInterval(o.current);
    }, []);

    const b = c !== null
        ? `${String(Math.floor(c / 60)).padStart(2, "0")}:${String(c % 60).padStart(2, "0")}`
        : null;

    const X = r.useCallback((t, i) => {
        o.current && clearInterval(o.current);
        h.current = false;

        o.current = setInterval(async () => {
            if (h.current) return;
            try {
                const response = await fetch(`/api/check-pix-status?transactionId=${t}`);
                const e = await response.json();
                if (!e || !e.status) return;
                if (e.status === "COMPLETED") {
                    h.current = true;
                    o.current && clearInterval(o.current);
                    q({ value: n / 100, currency: "BRL" });
                    m({ title: "Pagamento confirmado! ✅" });
                    f(s, {
                        state: {
                            customerData: i,
                            ...u
                        }
                    });
                }
            } catch (err) {
                console.error("[PIX] Poll error:", err);
            }
        }, 3000);
    }, [f, s, u, n]);

    return {
        loading: k,
        pixData: l,
        copied: w,
        pixTimer: b,
        pixRef: I,
        customer: p,

        handlePay: async () => {
            v(true);
            try {
                const t = p || T();
                if (!p) R(t);

                const amountFinal = Number(n);
                if (!amountFinal || isNaN(amountFinal) || amountFinal < 100) {
                    throw new Error("Valor não inicializado");
                }

                const response = await fetch("/api/create-pix", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        amount: amountFinal,
                        customer: {
                            name: t.name,
                            email: t.email,
                            document: t.document,
                            phone: t.phone
                        },
                        description: d || "Pagamento via PIX"
                    })
                });

                const e = await response.json();
                if (!response.ok) throw new Error(e?.message || "Erro no backend");
                if (!e?.pixCode) throw new Error("PIX inválido");

                const P = {
                    qr_code: e.pixCode,
                    qr_code_base64: e.qr_code_base64 || null,
                    transaction_id: String(e.transactionId),
                    expires_at: null,
                    amount: e.amount || amountFinal // 💰 Correção: injetando o amount para o UI
                };

                M(P);
                C(10 * 60);

                setTimeout(() => {
                    I.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200);

                X(P.transaction_id, t);
            } catch (err) {
                m({
                    title: "Erro",
                    description: err.message || "Falha ao gerar PIX",
                    variant: "destructive"
                });
            } finally {
                v(false);
            }
        },

        handleCopy: async () => {
            if (l?.qr_code) {
                try {
                    await navigator.clipboard.writeText(l.qr_code);
                    y(true);
                    m({ title: "Código PIX copiado!" });
                    setTimeout(() => y(false), 3000);
                } catch {
                    m({ title: "Erro ao copiar", variant: "destructive" });
                }
            }
        }
    };
};

export { A as L, B as u };
