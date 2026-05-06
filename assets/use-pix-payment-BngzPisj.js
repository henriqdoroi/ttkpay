const B = ({amountInCents: n, redirectTo: s, customerData: g, extraState: u, description: d}) => {
    const f = E();

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

                    q({
                        value: n / 100,
                        currency: "BRL"
                    });

                    m({
                        title: "Pagamento confirmado! ✅"
                    });

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

                console.log("VALOR ENVIADO:", amountFinal);

                if (!amountFinal || isNaN(amountFinal) || amountFinal < 100) {
                    console.error("VALOR INVÁLIDO:", n);
                    throw new Error("Valor não inicializado");
                }

                const response = await fetch("/api/create-pix", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
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

                console.log("[PIX] Response:", e);

                if (!response.ok) {
                    throw new Error(e?.message || "Erro no backend");
                }

                if (!e?.pixCode) {
                    throw new Error("PIX inválido");
                }

                const P = {
                    qr_code: e.pixCode,
                    qr_code_base64: null,
                    transaction_id: String(e.transactionId),
                    expires_at: null
                };

                M(P);
                C(10 * 60);

                setTimeout(() => {
                    I.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 200);

                X(P.transaction_id, t);

            } catch (err) {
                console.error("[PIX] Error detalhado:", err);

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

                    m({
                        title: "Código PIX copiado!"
                    });

                    setTimeout(() => y(false), 3000);

                } catch {
                    m({
                        title: "Erro ao copiar",
                        variant: "destructive"
                    });
                }
            }
        }
    };
};

export { A as L, B as u };
