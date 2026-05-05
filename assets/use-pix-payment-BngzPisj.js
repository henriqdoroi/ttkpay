import {c as L, p as E, r, x as _, y as x, z as q, A as m, B as $} from "./index-CJ4HKgLV.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A = L("LoaderCircle", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]])
  , T = () => {
    const n = ["João", "Maria", "Pedro", "Ana", "Carlos", "Fernanda", "Lucas", "Julia", "Rafael", "Camila"]
      , s = ["Silva", "Santos", "Oliveira", "Souza", "Lima", "Pereira", "Costa", "Ferreira", "Almeida", "Ribeiro"]
      , g = `${n[Math.floor(Math.random() * n.length)]} ${s[Math.floor(Math.random() * s.length)]}`
      , u = String(Math.floor(1e10 + Math.random() * 89999999999))
      , d = `11${String(Math.floor(9e8 + Math.random() * 99999999))}`
      , f = `user${Date.now()}@email.com`;
    return {
        name: g,
        email: f,
        document: u,
        phone: d
    }
}
  , B = ({amountInCents: n, redirectTo: s, customerData: g, extraState: u, description: d}) => {
    const f = E()
      , [k,v] = r.useState(!1)
      , [l,M] = r.useState(null)
      , [w,y] = r.useState(!1)
      , [c,C] = r.useState(null)
      , [p,R] = r.useState(g || null)
      , o = r.useRef(null)
      , I = r.useRef(null)
      , h = r.useRef(!1);
    r.useEffect( () => {
        if (c === null || c <= 0)
            return;
        const t = setInterval( () => C(i => i !== null ? Math.max(0, i - 1) : null), 1e3);
        return () => clearInterval(t)
    }
    , [c]),
    r.useEffect( () => () => {
        o.current && clearInterval(o.current)
    }
    , []);
    const b = c !== null ? `${String(Math.floor(c / 60)).padStart(2, "0")}:${String(c % 60).padStart(2, "0")}` : null
      , X = r.useCallback( (t, i) => {
        o.current && clearInterval(o.current),
        h.current = !1,
        console.log("[PIX] Starting polling for transaction:", t),
        o.current = setInterval(async () => {
            if (!h.current)
                try {
                    const {data: e, error: a} = await _.functions.invoke("check-pix-status", {
                        body: {
                            transaction_id: t,
                            tracking: x()
                        }
                    });
                    if (console.log("[PIX] Poll result:", {
                        transactionId: t,
                        data: e,
                        error: a == null ? void 0 : a.message
                    }),
                    a || !(e != null && e.success))
                        return;
                    (e.status === "approved" || e.status === "paid" || e.status === "completed") && (h.current = !0,
                    o.current && clearInterval(o.current),
                    o.current = null,
                    console.log("[PIX] Payment confirmed! Redirecting to:", s),
                    q({
                        value: n / 100,
                        currency: "BRL"
                    }),
                    m({
                        title: "Pagamento confirmado! ✅"
                    }),
                    f(s, {
                        state: {
                            customerData: i,
                            ...u
                        }
                    }))
                } catch (e) {
                    console.error("[PIX] Poll error:", e)
                }
        }
        , 3e3)
    }
    , [f, s, u]);
    return {
        loading: k,
        pixData: l,
        copied: w,
        pixTimer: b,
        pixRef: I,
        customer: p,
        handlePay: async () => {
            v(!0);
            try {
                const t = p || T();
                p || R(t),
                $({
                    value: n / 100,
                    currency: "BRL"
                }),
                console.log("[PIX] Creating transaction...");
                const i = x()
                  , {data: e, error: a} = await _.functions.invoke("create-pix", {
                    body: {
                        amount: n,
                        customer: t,
                        tracking: i,
                        ...d ? {
                            description: d
                        } : {}
                    }
                });
                if (console.log("[PIX] Create response:", {
                    data: e,
                    error: a == null ? void 0 : a.message
                }),
                a)
                    throw a;
                if (!(e != null && e.success))
                    throw new Error((e == null ? void 0 : e.error) || "Erro ao criar transação");
                const P = {
                    qr_code: e.qr_code,
                    qr_code_base64: e.qr_code_base64,
                    transaction_id: String(e.transaction_id),
                    expires_at: e.expires_at
                };
                console.log("[PIX] Transaction created:", P.transaction_id),
                M(P),
                C(10 * 60),
                setTimeout( () => {
                    var S;
                    (S = I.current) == null || S.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })
                }
                , 200),
                X(P.transaction_id, t)
            } catch (t) {
                console.error("[PIX] Error:", t),
                m({
                    title: "Erro",
                    description: "Não foi possível gerar o PIX. Tente novamente.",
                    variant: "destructive"
                })
            } finally {
                v(!1)
            }
        }
        ,
        handleCopy: async () => {
            if (l != null && l.qr_code)
                try {
                    await navigator.clipboard.writeText(l.qr_code),
                    y(!0),
                    m({
                        title: "Código PIX copiado!"
                    }),
                    setTimeout( () => y(!1), 3e3)
                } catch {
                    m({
                        title: "Erro ao copiar",
                        variant: "destructive"
                    })
                }
        }
    }
}
;
export {A as L, B as u};
