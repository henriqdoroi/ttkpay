import {c as L, p as E, r, x as _, y as x, z as q, A as m, B as $} from "./index-CJ4HKgLV.js";

/**
 * @license lucide-react v0.462.0 - ISC
 */

const A = L("LoaderCircle", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);

const T = () => {
    const n = ["João", "Maria", "Pedro", "Ana", "Carlos", "Fernanda", "Lucas", "Julia", "Rafael", "Camila"];
    const s = ["Silva", "Santos", "Oliveira", "Souza", "Lima", "Pereira", "Costa", "Ferreira", "Almeida", "Ribeiro"];

    const g = `${n[Math.floor(Math.random() * n.length)]} ${s[Math.floor(Math.random() * s.length)]}`;
    const u = String(Math.floor(1e10 + Math.random() * 89999999999));
    const d = `11${String(Math.floor(9e8 + Math.random() * 99999999))}`;
    const f = `user${Date.now()}@email.com`;

    return {
        name: g,
        email: f,
        document: u,
        phone: d
    };
};

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

    // 🔁 POLLING (SEM SUPABASE)
    const X = r.useCallback((t, i) => {
        o.current && clearInterval(o.current);
        h.current = false;

        console.log("[PIX] Starting polling:", t);

        o.current = setInterval(async () => {
            if (h.current) return;

            try {
                const response = await fetch(`/api/check-pix-status?transactionId=${t}`);
                const e = await response.json();

                console.log("[PIX] Poll:", e);

                if (!e || !e.status) return;

                if (e.status === "COMPLETED") {
                    h.current = true;

                    o.current && clearInterval(o.current);
                    o.current = null;

                    console.log("[PIX] Pago!");

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

    }, [f, s, u]);

    return {
        loading: k,
        pixData: l,
        copied: w,
        pixTimer: b,
        pixRef: I,
        customer: p,

        // 🚀 CRIAR PIX (DUTTYFY)
        handlePay: async () => {
            v(true);

            try {
                const t = p || T();
                if (!p) R(t);

                $({
                    value: n / 100,
                    currency: "BRL"
                });

                console.log("[PIX] Criando PIX...");

                const response = await fetch("/api/create-pix", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        amount: n,
                        customer: t,
                        description: d
                    })
                });

                const e = await response.json();

                console.log("[PIX] Response:", e);

                if (!e || !e.pixCode) {
                    throw new Error("Erro ao gerar PIX");
                }

                const P = {
                    qr_code: e.pixCode,
                    qr_code_base64: null,
                    transaction_id: String(e.transactionId),
                    expires_at: null
                };

                console.log("[PIX] Criado:", P.transaction_id);

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
                console.error("[PIX] Error:", err);

                m({
                    title: "Erro",
                    description: "Não foi possível gerar o PIX.",
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
