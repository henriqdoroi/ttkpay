import {c as Yn, r as c, u as Zn, R as Jn, a as St, b as Le, j as a, P as fe, _ as te, d as Wt, e as Gn, f as Qn, g as ye, h as ct, D as _n, i as $n, k as er, l as tr, m as nr, n as h, o as Be, p as qt, C as Me, X as De, q as ot, t as rr} from "./index-CJ4HKgLV.js";
import {u as ar, C as or} from "./use-go-back-w-rh7W3R.js";
import {p as Ut} from "./pix-logo-Datf-KEP.js";
import {c as sr} from "./coin-p-BTqgdHPT.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = Yn("CreditCard", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2",
    key: "ynyp8z"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10",
    key: "1b3vmo"
}]]);
var lr = Jn[" useId ".trim().toString()] || ( () => {}
)
  , cr = 0;
function Ye(e) {
    const [n,t] = c.useState(lr());
    return Zn( () => {
        e || t(r => r ?? String(cr++))
    }
    , [e]),
    e || (n ? `radix-${n}` : "")
}
var Ze = "focusScope.autoFocusOnMount"
  , Je = "focusScope.autoFocusOnUnmount"
  , Et = {
    bubbles: !1,
    cancelable: !0
}
  , ur = "FocusScope"
  , Xt = c.forwardRef( (e, n) => {
    const {loop: t=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...l} = e
      , [i,g] = c.useState(null)
      , x = St(o)
      , m = St(s)
      , d = c.useRef(null)
      , f = Le(n, u => g(u))
      , y = c.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    c.useEffect( () => {
        if (r) {
            let u = function(E) {
                if (y.paused || !i)
                    return;
                const v = E.target;
                i.contains(v) ? d.current = v : ee(d.current, {
                    select: !0
                })
            }
              , w = function(E) {
                if (y.paused || !i)
                    return;
                const v = E.relatedTarget;
                v !== null && (i.contains(v) || ee(d.current, {
                    select: !0
                }))
            }
              , p = function(E) {
                if (document.activeElement === document.body)
                    for (const T of E)
                        T.removedNodes.length > 0 && ee(i)
            };
            document.addEventListener("focusin", u),
            document.addEventListener("focusout", w);
            const S = new MutationObserver(p);
            return i && S.observe(i, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", u),
                document.removeEventListener("focusout", w),
                S.disconnect()
            }
        }
    }
    , [r, i, y.paused]),
    c.useEffect( () => {
        if (i) {
            jt.add(y);
            const u = document.activeElement;
            if (!i.contains(u)) {
                const p = new CustomEvent(Ze,Et);
                i.addEventListener(Ze, x),
                i.dispatchEvent(p),
                p.defaultPrevented || (dr(gr(Ht(i)), {
                    select: !0
                }),
                document.activeElement === u && ee(i))
            }
            return () => {
                i.removeEventListener(Ze, x),
                setTimeout( () => {
                    const p = new CustomEvent(Je,Et);
                    i.addEventListener(Je, m),
                    i.dispatchEvent(p),
                    p.defaultPrevented || ee(u ?? document.body, {
                        select: !0
                    }),
                    i.removeEventListener(Je, m),
                    jt.remove(y)
                }
                , 0)
            }
        }
    }
    , [i, x, m, y]);
    const A = c.useCallback(u => {
        if (!t && !r || y.paused)
            return;
        const w = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey
          , p = document.activeElement;
        if (w && p) {
            const S = u.currentTarget
              , [E,v] = fr(S);
            E && v ? !u.shiftKey && p === v ? (u.preventDefault(),
            t && ee(E, {
                select: !0
            })) : u.shiftKey && p === E && (u.preventDefault(),
            t && ee(v, {
                select: !0
            })) : p === S && u.preventDefault()
        }
    }
    , [t, r, y.paused]);
    return a.jsx(fe.div, {
        tabIndex: -1,
        ...l,
        ref: f,
        onKeyDown: A
    })
}
);
Xt.displayName = ur;
function dr(e, {select: n=!1}={}) {
    const t = document.activeElement;
    for (const r of e)
        if (ee(r, {
            select: n
        }),
        document.activeElement !== t)
            return
}
function fr(e) {
    const n = Ht(e)
      , t = Dt(n, e)
      , r = Dt(n.reverse(), e);
    return [t, r]
}
function Ht(e) {
    const n = []
      , t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; t.nextNode(); )
        n.push(t.currentNode);
    return n
}
function Dt(e, n) {
    for (const t of e)
        if (!mr(t, {
            upTo: n
        }))
            return t
}
function mr(e, {upTo: n}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (n !== void 0 && e === n)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function pr(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function ee(e, {select: n=!1}={}) {
    if (e && e.focus) {
        const t = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== t && pr(e) && n && e.select()
    }
}
var jt = hr();
function hr() {
    let e = [];
    return {
        add(n) {
            const t = e[0];
            n !== t && (t == null || t.pause()),
            e = At(e, n),
            e.unshift(n)
        },
        remove(n) {
            var t;
            e = At(e, n),
            (t = e[0]) == null || t.resume()
        }
    }
}
function At(e, n) {
    const t = [...e]
      , r = t.indexOf(n);
    return r !== -1 && t.splice(r, 1),
    t
}
function gr(e) {
    return e.filter(n => n.tagName !== "A")
}
var Ge = 0;
function vr() {
    c.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Tt()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? Tt()),
        Ge++,
        () => {
            Ge === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(n => n.remove()),
            Ge--
        }
    }
    , [])
}
function Tt() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var Fe = "right-scroll-bar-position"
  , Oe = "width-before-scroll-bar"
  , xr = "with-scroll-bars-hidden"
  , wr = "--removed-body-scroll-bar-size";
function Qe(e, n) {
    return typeof e == "function" ? e(n) : e && (e.current = n),
    e
}
function br(e, n) {
    var t = c.useState(function() {
        return {
            value: e,
            callback: n,
            facade: {
                get current() {
                    return t.value
                },
                set current(r) {
                    var o = t.value;
                    o !== r && (t.value = r,
                    t.callback(r, o))
                }
            }
        }
    })[0];
    return t.callback = n,
    t.facade
}
var yr = typeof window < "u" ? c.useLayoutEffect : c.useEffect
  , Rt = new WeakMap;
function Cr(e, n) {
    var t = br(null, function(r) {
        return e.forEach(function(o) {
            return Qe(o, r)
        })
    });
    return yr(function() {
        var r = Rt.get(t);
        if (r) {
            var o = new Set(r)
              , s = new Set(e)
              , l = t.current;
            o.forEach(function(i) {
                s.has(i) || Qe(i, null)
            }),
            s.forEach(function(i) {
                o.has(i) || Qe(i, l)
            })
        }
        Rt.set(t, e)
    }, [e]),
    t
}
function Nr(e) {
    return e
}
function Sr(e, n) {
    n === void 0 && (n = Nr);
    var t = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return t.length ? t[t.length - 1] : e
        },
        useMedium: function(s) {
            var l = n(s, r);
            return t.push(l),
            function() {
                t = t.filter(function(i) {
                    return i !== l
                })
            }
        },
        assignSyncMedium: function(s) {
            for (r = !0; t.length; ) {
                var l = t;
                t = [],
                l.forEach(s)
            }
            t = {
                push: function(i) {
                    return s(i)
                },
                filter: function() {
                    return t
                }
            }
        },
        assignMedium: function(s) {
            r = !0;
            var l = [];
            if (t.length) {
                var i = t;
                t = [],
                i.forEach(s),
                l = t
            }
            var g = function() {
                var m = l;
                l = [],
                m.forEach(s)
            }
              , x = function() {
                return Promise.resolve().then(g)
            };
            x(),
            t = {
                push: function(m) {
                    l.push(m),
                    x()
                },
                filter: function(m) {
                    return l = l.filter(m),
                    t
                }
            }
        }
    };
    return o
}
function Er(e) {
    e === void 0 && (e = {});
    var n = Sr(null);
    return n.options = te({
        async: !0,
        ssr: !1
    }, e),
    n
}
var Kt = function(e) {
    var n = e.sideCar
      , t = Wt(e, ["sideCar"]);
    if (!n)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = n.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return c.createElement(r, te({}, t))
};
Kt.isSideCarExport = !0;
function Dr(e, n) {
    return e.useMedium(n),
    Kt
}
var Yt = Er()
  , _e = function() {}
  , Ve = c.forwardRef(function(e, n) {
    var t = c.useRef(null)
      , r = c.useState({
        onScrollCapture: _e,
        onWheelCapture: _e,
        onTouchMoveCapture: _e
    })
      , o = r[0]
      , s = r[1]
      , l = e.forwardProps
      , i = e.children
      , g = e.className
      , x = e.removeScrollBar
      , m = e.enabled
      , d = e.shards
      , f = e.sideCar
      , y = e.noRelative
      , A = e.noIsolation
      , u = e.inert
      , w = e.allowPinchZoom
      , p = e.as
      , S = p === void 0 ? "div" : p
      , E = e.gapMode
      , v = Wt(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , T = f
      , W = Cr([t, n])
      , C = te(te({}, v), o);
    return c.createElement(c.Fragment, null, m && c.createElement(T, {
        sideCar: Yt,
        removeScrollBar: x,
        shards: d,
        noRelative: y,
        noIsolation: A,
        inert: u,
        setCallbacks: s,
        allowPinchZoom: !!w,
        lockRef: t,
        gapMode: E
    }), l ? c.cloneElement(c.Children.only(i), te(te({}, C), {
        ref: W
    })) : c.createElement(S, te({}, C, {
        className: g,
        ref: W
    }), i))
});
Ve.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Ve.classNames = {
    fullWidth: Oe,
    zeroRight: Fe
};
var jr = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function Ar() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var n = jr();
    return n && e.setAttribute("nonce", n),
    e
}
function Tr(e, n) {
    e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n))
}
function Rr(e) {
    var n = document.head || document.getElementsByTagName("head")[0];
    n.appendChild(e)
}
var Pr = function() {
    var e = 0
      , n = null;
    return {
        add: function(t) {
            e == 0 && (n = Ar()) && (Tr(n, t),
            Rr(n)),
            e++
        },
        remove: function() {
            e--,
            !e && n && (n.parentNode && n.parentNode.removeChild(n),
            n = null)
        }
    }
}
  , Ir = function() {
    var e = Pr();
    return function(n, t) {
        c.useEffect(function() {
            return e.add(n),
            function() {
                e.remove()
            }
        }, [n && t])
    }
}
  , Zt = function() {
    var e = Ir()
      , n = function(t) {
        var r = t.styles
          , o = t.dynamic;
        return e(r, o),
        null
    };
    return n
}
  , Mr = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , $e = function(e) {
    return parseInt(e || "", 10) || 0
}
  , Fr = function(e) {
    var n = window.getComputedStyle(document.body)
      , t = n[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = n[e === "padding" ? "paddingTop" : "marginTop"]
      , o = n[e === "padding" ? "paddingRight" : "marginRight"];
    return [$e(t), $e(r), $e(o)]
}
  , Or = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return Mr;
    var n = Fr(e)
      , t = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: n[0],
        top: n[1],
        right: n[2],
        gap: Math.max(0, r - t + n[2] - n[0])
    }
}
  , kr = Zt()
  , de = "data-scroll-locked"
  , Lr = function(e, n, t, r) {
    var o = e.left
      , s = e.top
      , l = e.right
      , i = e.gap;
    return t === void 0 && (t = "margin"),
    `
  .`.concat(xr, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(de, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([n && "position: relative ".concat(r, ";"), t === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `), t === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Fe, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Oe, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Fe, " .").concat(Fe, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Oe, " .").concat(Oe, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(de, `] {
    `).concat(wr, ": ").concat(i, `px;
  }
`)
}
  , Pt = function() {
    var e = parseInt(document.body.getAttribute(de) || "0", 10);
    return isFinite(e) ? e : 0
}
  , Br = function() {
    c.useEffect(function() {
        return document.body.setAttribute(de, (Pt() + 1).toString()),
        function() {
            var e = Pt() - 1;
            e <= 0 ? document.body.removeAttribute(de) : document.body.setAttribute(de, e.toString())
        }
    }, [])
}
  , Vr = function(e) {
    var n = e.noRelative
      , t = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    Br();
    var s = c.useMemo(function() {
        return Or(o)
    }, [o]);
    return c.createElement(kr, {
        styles: Lr(s, !n, o, t ? "" : "!important")
    })
}
  , st = !1;
if (typeof window < "u")
    try {
        var je = Object.defineProperty({}, "passive", {
            get: function() {
                return st = !0,
                !0
            }
        });
        window.addEventListener("test", je, je),
        window.removeEventListener("test", je, je)
    } catch {
        st = !1
    }
var le = st ? {
    passive: !1
} : !1
  , zr = function(e) {
    return e.tagName === "TEXTAREA"
}
  , Jt = function(e, n) {
    if (!(e instanceof Element))
        return !1;
    var t = window.getComputedStyle(e);
    return t[n] !== "hidden" && !(t.overflowY === t.overflowX && !zr(e) && t[n] === "visible")
}
  , Wr = function(e) {
    return Jt(e, "overflowY")
}
  , qr = function(e) {
    return Jt(e, "overflowX")
}
  , It = function(e, n) {
    var t = n.ownerDocument
      , r = n;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = Gt(e, r);
        if (o) {
            var s = Qt(e, r)
              , l = s[1]
              , i = s[2];
            if (l > i)
                return !0
        }
        r = r.parentNode
    } while (r && r !== t.body);
    return !1
}
  , Ur = function(e) {
    var n = e.scrollTop
      , t = e.scrollHeight
      , r = e.clientHeight;
    return [n, t, r]
}
  , Xr = function(e) {
    var n = e.scrollLeft
      , t = e.scrollWidth
      , r = e.clientWidth;
    return [n, t, r]
}
  , Gt = function(e, n) {
    return e === "v" ? Wr(n) : qr(n)
}
  , Qt = function(e, n) {
    return e === "v" ? Ur(n) : Xr(n)
}
  , Hr = function(e, n) {
    return e === "h" && n === "rtl" ? -1 : 1
}
  , Kr = function(e, n, t, r, o) {
    var s = Hr(e, window.getComputedStyle(n).direction)
      , l = s * r
      , i = t.target
      , g = n.contains(i)
      , x = !1
      , m = l > 0
      , d = 0
      , f = 0;
    do {
        if (!i)
            break;
        var y = Qt(e, i)
          , A = y[0]
          , u = y[1]
          , w = y[2]
          , p = u - w - s * A;
        (A || p) && Gt(e, i) && (d += p,
        f += A);
        var S = i.parentNode;
        i = S && S.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? S.host : S
    } while (!g && i !== document.body || g && (n.contains(i) || n === i));
    return (m && (Math.abs(d) < 1 || !o) || !m && (Math.abs(f) < 1 || !o)) && (x = !0),
    x
}
  , Ae = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , Mt = function(e) {
    return [e.deltaX, e.deltaY]
}
  , Ft = function(e) {
    return e && "current"in e ? e.current : e
}
  , Yr = function(e, n) {
    return e[0] === n[0] && e[1] === n[1]
}
  , Zr = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , Jr = 0
  , ce = [];
function Gr(e) {
    var n = c.useRef([])
      , t = c.useRef([0, 0])
      , r = c.useRef()
      , o = c.useState(Jr++)[0]
      , s = c.useState(Zt)[0]
      , l = c.useRef(e);
    c.useEffect(function() {
        l.current = e
    }, [e]),
    c.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var u = Gn([e.lockRef.current], (e.shards || []).map(Ft), !0).filter(Boolean);
            return u.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                u.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var i = c.useCallback(function(u, w) {
        if ("touches"in u && u.touches.length === 2 || u.type === "wheel" && u.ctrlKey)
            return !l.current.allowPinchZoom;
        var p = Ae(u), S = t.current, E = "deltaX"in u ? u.deltaX : S[0] - p[0], v = "deltaY"in u ? u.deltaY : S[1] - p[1], T, W = u.target, C = Math.abs(E) > Math.abs(v) ? "h" : "v";
        if ("touches"in u && C === "h" && W.type === "range")
            return !1;
        var P = It(C, W);
        if (!P)
            return !0;
        if (P ? T = C : (T = C === "v" ? "h" : "v",
        P = It(C, W)),
        !P)
            return !1;
        if (!r.current && "changedTouches"in u && (E || v) && (r.current = T),
        !T)
            return !0;
        var R = r.current || T;
        return Kr(R, w, u, R === "h" ? E : v, !0)
    }, [])
      , g = c.useCallback(function(u) {
        var w = u;
        if (!(!ce.length || ce[ce.length - 1] !== s)) {
            var p = "deltaY"in w ? Mt(w) : Ae(w)
              , S = n.current.filter(function(T) {
                return T.name === w.type && (T.target === w.target || w.target === T.shadowParent) && Yr(T.delta, p)
            })[0];
            if (S && S.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!S) {
                var E = (l.current.shards || []).map(Ft).filter(Boolean).filter(function(T) {
                    return T.contains(w.target)
                })
                  , v = E.length > 0 ? i(w, E[0]) : !l.current.noIsolation;
                v && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , x = c.useCallback(function(u, w, p, S) {
        var E = {
            name: u,
            delta: w,
            target: p,
            should: S,
            shadowParent: Qr(p)
        };
        n.current.push(E),
        setTimeout(function() {
            n.current = n.current.filter(function(v) {
                return v !== E
            })
        }, 1)
    }, [])
      , m = c.useCallback(function(u) {
        t.current = Ae(u),
        r.current = void 0
    }, [])
      , d = c.useCallback(function(u) {
        x(u.type, Mt(u), u.target, i(u, e.lockRef.current))
    }, [])
      , f = c.useCallback(function(u) {
        x(u.type, Ae(u), u.target, i(u, e.lockRef.current))
    }, []);
    c.useEffect(function() {
        return ce.push(s),
        e.setCallbacks({
            onScrollCapture: d,
            onWheelCapture: d,
            onTouchMoveCapture: f
        }),
        document.addEventListener("wheel", g, le),
        document.addEventListener("touchmove", g, le),
        document.addEventListener("touchstart", m, le),
        function() {
            ce = ce.filter(function(u) {
                return u !== s
            }),
            document.removeEventListener("wheel", g, le),
            document.removeEventListener("touchmove", g, le),
            document.removeEventListener("touchstart", m, le)
        }
    }, []);
    var y = e.removeScrollBar
      , A = e.inert;
    return c.createElement(c.Fragment, null, A ? c.createElement(s, {
        styles: Zr(o)
    }) : null, y ? c.createElement(Vr, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function Qr(e) {
    for (var n = null; e !== null; )
        e instanceof ShadowRoot && (n = e.host,
        e = e.host),
        e = e.parentNode;
    return n
}
const _r = Dr(Yt, Gr);
var _t = c.forwardRef(function(e, n) {
    return c.createElement(Ve, te({}, e, {
        ref: n,
        sideCar: _r
    }))
});
_t.classNames = Ve.classNames;
var $r = function(e) {
    if (typeof document > "u")
        return null;
    var n = Array.isArray(e) ? e[0] : e;
    return n.ownerDocument.body
}
  , ue = new WeakMap
  , Te = new WeakMap
  , Re = {}
  , et = 0
  , $t = function(e) {
    return e && (e.host || $t(e.parentNode))
}
  , ea = function(e, n) {
    return n.map(function(t) {
        if (e.contains(t))
            return t;
        var r = $t(t);
        return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(t) {
        return !!t
    })
}
  , ta = function(e, n, t, r) {
    var o = ea(n, Array.isArray(e) ? e : [e]);
    Re[t] || (Re[t] = new WeakMap);
    var s = Re[t]
      , l = []
      , i = new Set
      , g = new Set(o)
      , x = function(d) {
        !d || i.has(d) || (i.add(d),
        x(d.parentNode))
    };
    o.forEach(x);
    var m = function(d) {
        !d || g.has(d) || Array.prototype.forEach.call(d.children, function(f) {
            if (i.has(f))
                m(f);
            else
                try {
                    var y = f.getAttribute(r)
                      , A = y !== null && y !== "false"
                      , u = (ue.get(f) || 0) + 1
                      , w = (s.get(f) || 0) + 1;
                    ue.set(f, u),
                    s.set(f, w),
                    l.push(f),
                    u === 1 && A && Te.set(f, !0),
                    w === 1 && f.setAttribute(t, "true"),
                    A || f.setAttribute(r, "true")
                } catch (p) {
                    console.error("aria-hidden: cannot operate on ", f, p)
                }
        })
    };
    return m(n),
    i.clear(),
    et++,
    function() {
        l.forEach(function(d) {
            var f = ue.get(d) - 1
              , y = s.get(d) - 1;
            ue.set(d, f),
            s.set(d, y),
            f || (Te.has(d) || d.removeAttribute(r),
            Te.delete(d)),
            y || d.removeAttribute(t)
        }),
        et--,
        et || (ue = new WeakMap,
        ue = new WeakMap,
        Te = new WeakMap,
        Re = {})
    }
}
  , na = function(e, n, t) {
    t === void 0 && (t = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = $r(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    ta(r, o, t, "aria-hidden")) : function() {
        return null
    }
}
  , ze = "Dialog"
  , [en,so] = Qn(ze)
  , [ra,J] = en(ze)
  , tn = e => {
    const {__scopeDialog: n, children: t, open: r, defaultOpen: o, onOpenChange: s, modal: l=!0} = e
      , i = c.useRef(null)
      , g = c.useRef(null)
      , [x,m] = tr({
        prop: r,
        defaultProp: o ?? !1,
        onChange: s,
        caller: ze
    });
    return a.jsx(ra, {
        scope: n,
        triggerRef: i,
        contentRef: g,
        contentId: Ye(),
        titleId: Ye(),
        descriptionId: Ye(),
        open: x,
        onOpenChange: m,
        onOpenToggle: c.useCallback( () => m(d => !d), [m]),
        modal: l,
        children: t
    })
}
;
tn.displayName = ze;
var nn = "DialogTrigger"
  , rn = c.forwardRef( (e, n) => {
    const {__scopeDialog: t, ...r} = e
      , o = J(nn, t)
      , s = Le(n, o.triggerRef);
    return a.jsx(fe.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ft(o.open),
        ...r,
        ref: s,
        onClick: ye(e.onClick, o.onOpenToggle)
    })
}
);
rn.displayName = nn;
var ut = "DialogPortal"
  , [aa,an] = en(ut, {
    forceMount: void 0
})
  , on = e => {
    const {__scopeDialog: n, forceMount: t, children: r, container: o} = e
      , s = J(ut, n);
    return a.jsx(aa, {
        scope: n,
        forceMount: t,
        children: c.Children.map(r, l => a.jsx(ct, {
            present: t || s.open,
            children: a.jsx(nr, {
                asChild: !0,
                container: o,
                children: l
            })
        }))
    })
}
;
on.displayName = ut;
var ke = "DialogOverlay"
  , sn = c.forwardRef( (e, n) => {
    const t = an(ke, e.__scopeDialog)
      , {forceMount: r=t.forceMount, ...o} = e
      , s = J(ke, e.__scopeDialog);
    return s.modal ? a.jsx(ct, {
        present: r || s.open,
        children: a.jsx(sa, {
            ...o,
            ref: n
        })
    }) : null
}
);
sn.displayName = ke;
var oa = er("DialogOverlay.RemoveScroll")
  , sa = c.forwardRef( (e, n) => {
    const {__scopeDialog: t, ...r} = e
      , o = J(ke, t);
    return a.jsx(_t, {
        as: oa,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: a.jsx(fe.div, {
            "data-state": ft(o.open),
            ...r,
            ref: n,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })
    })
}
)
  , oe = "DialogContent"
  , ln = c.forwardRef( (e, n) => {
    const t = an(oe, e.__scopeDialog)
      , {forceMount: r=t.forceMount, ...o} = e
      , s = J(oe, e.__scopeDialog);
    return a.jsx(ct, {
        present: r || s.open,
        children: s.modal ? a.jsx(ia, {
            ...o,
            ref: n
        }) : a.jsx(la, {
            ...o,
            ref: n
        })
    })
}
);
ln.displayName = oe;
var ia = c.forwardRef( (e, n) => {
    const t = J(oe, e.__scopeDialog)
      , r = c.useRef(null)
      , o = Le(n, t.contentRef, r);
    return c.useEffect( () => {
        const s = r.current;
        if (s)
            return na(s)
    }
    , []),
    a.jsx(cn, {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ye(e.onCloseAutoFocus, s => {
            var l;
            s.preventDefault(),
            (l = t.triggerRef.current) == null || l.focus()
        }
        ),
        onPointerDownOutside: ye(e.onPointerDownOutside, s => {
            const l = s.detail.originalEvent
              , i = l.button === 0 && l.ctrlKey === !0;
            (l.button === 2 || i) && s.preventDefault()
        }
        ),
        onFocusOutside: ye(e.onFocusOutside, s => s.preventDefault())
    })
}
)
  , la = c.forwardRef( (e, n) => {
    const t = J(oe, e.__scopeDialog)
      , r = c.useRef(!1)
      , o = c.useRef(!1);
    return a.jsx(cn, {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: s => {
            var l, i;
            (l = e.onCloseAutoFocus) == null || l.call(e, s),
            s.defaultPrevented || (r.current || (i = t.triggerRef.current) == null || i.focus(),
            s.preventDefault()),
            r.current = !1,
            o.current = !1
        }
        ,
        onInteractOutside: s => {
            var g, x;
            (g = e.onInteractOutside) == null || g.call(e, s),
            s.defaultPrevented || (r.current = !0,
            s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
            const l = s.target;
            ((x = t.triggerRef.current) == null ? void 0 : x.contains(l)) && s.preventDefault(),
            s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault()
        }
    })
}
)
  , cn = c.forwardRef( (e, n) => {
    const {__scopeDialog: t, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...l} = e
      , i = J(oe, t)
      , g = c.useRef(null)
      , x = Le(n, g);
    return vr(),
    a.jsxs(a.Fragment, {
        children: [a.jsx(Xt, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: a.jsx(_n, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": ft(i.open),
                ...l,
                ref: x,
                onDismiss: () => i.onOpenChange(!1)
            })
        }), a.jsxs(a.Fragment, {
            children: [a.jsx(ca, {
                titleId: i.titleId
            }), a.jsx(da, {
                contentRef: g,
                descriptionId: i.descriptionId
            })]
        })]
    })
}
)
  , dt = "DialogTitle"
  , un = c.forwardRef( (e, n) => {
    const {__scopeDialog: t, ...r} = e
      , o = J(dt, t);
    return a.jsx(fe.h2, {
        id: o.titleId,
        ...r,
        ref: n
    })
}
);
un.displayName = dt;
var dn = "DialogDescription"
  , fn = c.forwardRef( (e, n) => {
    const {__scopeDialog: t, ...r} = e
      , o = J(dn, t);
    return a.jsx(fe.p, {
        id: o.descriptionId,
        ...r,
        ref: n
    })
}
);
fn.displayName = dn;
var mn = "DialogClose"
  , pn = c.forwardRef( (e, n) => {
    const {__scopeDialog: t, ...r} = e
      , o = J(mn, t);
    return a.jsx(fe.button, {
        type: "button",
        ...r,
        ref: n,
        onClick: ye(e.onClick, () => o.onOpenChange(!1))
    })
}
);
pn.displayName = mn;
function ft(e) {
    return e ? "open" : "closed"
}
var hn = "DialogTitleWarning"
  , [io,gn] = $n(hn, {
    contentName: oe,
    titleName: dt,
    docsSlug: "dialog"
})
  , ca = ({titleId: e}) => {
    const n = gn(hn)
      , t = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
    return c.useEffect( () => {
        e && (document.getElementById(e) || console.error(t))
    }
    , [t, e]),
    null
}
  , ua = "DialogDescriptionWarning"
  , da = ({contentRef: e, descriptionId: n}) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${gn(ua).contentName}}.`;
    return c.useEffect( () => {
        var s;
        const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
        n && o && (document.getElementById(n) || console.warn(r))
    }
    , [r, e, n]),
    null
}
  , fa = tn
  , ma = rn
  , pa = on
  , ha = sn
  , ga = ln
  , va = un
  , xa = fn
  , wa = pn;
function ba(e) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , t = document.createElement("style");
    t.type = "text/css",
    n.appendChild(t),
    t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))
}
const vn = h.createContext({
    drawerRef: {
        current: null
    },
    overlayRef: {
        current: null
    },
    onPress: () => {}
    ,
    onRelease: () => {}
    ,
    onDrag: () => {}
    ,
    onNestedDrag: () => {}
    ,
    onNestedOpenChange: () => {}
    ,
    onNestedRelease: () => {}
    ,
    openProp: void 0,
    dismissible: !1,
    isOpen: !1,
    isDragging: !1,
    keyboardIsOpen: {
        current: !1
    },
    snapPointsOffset: null,
    snapPoints: null,
    handleOnly: !1,
    modal: !1,
    shouldFade: !1,
    activeSnapPoint: null,
    onOpenChange: () => {}
    ,
    setActiveSnapPoint: () => {}
    ,
    closeDrawer: () => {}
    ,
    direction: "bottom",
    shouldScaleBackground: !1,
    setBackgroundColorOnScale: !0,
    noBodyStyles: !1,
    container: null,
    autoFocus: !1
})
  , me = () => {
    const e = h.useContext(vn);
    if (!e)
        throw new Error("useDrawerContext must be used within a Drawer.Root");
    return e
}
;
ba(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,100%,0)}}@keyframes slideFromTop{from{transform:translate3d(0,-100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,-100%,0)}}@keyframes slideFromLeft{from{transform:translate3d(-100%,0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(-100%,0,0)}}@keyframes slideFromRight{from{transform:translate3d(100%,0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(100%,0,0)}}`);
const ya = 24
  , Ca = typeof window < "u" ? c.useLayoutEffect : c.useEffect;
function Ot(...e) {
    return (...n) => {
        for (let t of e)
            typeof t == "function" && t(...n)
    }
}
function Na() {
    return mt(/^Mac/)
}
function Sa() {
    return mt(/^iPhone/)
}
function kt() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
}
function Ea() {
    return mt(/^iPad/) || Na() && navigator.maxTouchPoints > 1
}
function xn() {
    return Sa() || Ea()
}
function mt(e) {
    return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0
}
const tt = typeof document < "u" && window.visualViewport;
function Lt(e) {
    let n = window.getComputedStyle(e);
    return /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY)
}
function wn(e) {
    for (Lt(e) && (e = e.parentElement); e && !Lt(e); )
        e = e.parentElement;
    return e || document.scrollingElement || document.documentElement
}
const Da = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
let Pe = 0, nt;
function ja(e={}) {
    let {isDisabled: n} = e;
    Ca( () => {
        if (!n)
            return Pe++,
            Pe === 1 && xn() && (nt = Aa()),
            () => {
                Pe--,
                Pe === 0 && (nt == null || nt())
            }
    }
    , [n])
}
function Aa() {
    let e, n = 0, t = d => {
        e = wn(d.target),
        !(e === document.documentElement && e === document.body) && (n = d.changedTouches[0].pageY)
    }
    , r = d => {
        if (!e || e === document.documentElement || e === document.body) {
            d.preventDefault();
            return
        }
        let f = d.changedTouches[0].pageY
          , y = e.scrollTop
          , A = e.scrollHeight - e.clientHeight;
        A !== 0 && ((y <= 0 && f > n || y >= A && f < n) && d.preventDefault(),
        n = f)
    }
    , o = d => {
        let f = d.target;
        it(f) && f !== document.activeElement && (d.preventDefault(),
        f.style.transform = "translateY(-2000px)",
        f.focus(),
        requestAnimationFrame( () => {
            f.style.transform = ""
        }
        ))
    }
    , s = d => {
        let f = d.target;
        it(f) && (f.style.transform = "translateY(-2000px)",
        requestAnimationFrame( () => {
            f.style.transform = "",
            tt && (tt.height < window.innerHeight ? requestAnimationFrame( () => {
                Bt(f)
            }
            ) : tt.addEventListener("resize", () => Bt(f), {
                once: !0
            }))
        }
        ))
    }
    , l = () => {
        window.scrollTo(0, 0)
    }
    , i = window.pageXOffset, g = window.pageYOffset, x = Ot(Ta(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
    window.scrollTo(0, 0);
    let m = Ot(we(document, "touchstart", t, {
        passive: !1,
        capture: !0
    }), we(document, "touchmove", r, {
        passive: !1,
        capture: !0
    }), we(document, "touchend", o, {
        passive: !1,
        capture: !0
    }), we(document, "focus", s, !0), we(window, "scroll", l));
    return () => {
        x(),
        m(),
        window.scrollTo(i, g)
    }
}
function Ta(e, n, t) {
    let r = e.style[n];
    return e.style[n] = t,
    () => {
        e.style[n] = r
    }
}
function we(e, n, t, r) {
    return e.addEventListener(n, t, r),
    () => {
        e.removeEventListener(n, t, r)
    }
}
function Bt(e) {
    let n = document.scrollingElement || document.documentElement;
    for (; e && e !== n; ) {
        let t = wn(e);
        if (t !== document.documentElement && t !== document.body && t !== e) {
            let r = t.getBoundingClientRect().top
              , o = e.getBoundingClientRect().top
              , s = e.getBoundingClientRect().bottom;
            const l = t.getBoundingClientRect().bottom + ya;
            s > l && (t.scrollTop += o - r)
        }
        e = t.parentElement
    }
}
function it(e) {
    return e instanceof HTMLInputElement && !Da.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
}
function Ra(e, n) {
    typeof e == "function" ? e(n) : e != null && (e.current = n)
}
function Pa(...e) {
    return n => e.forEach(t => Ra(t, n))
}
function bn(...e) {
    return c.useCallback(Pa(...e), e)
}
const yn = new WeakMap;
function V(e, n, t=!1) {
    if (!e || !(e instanceof HTMLElement))
        return;
    let r = {};
    Object.entries(n).forEach( ([o,s]) => {
        if (o.startsWith("--")) {
            e.style.setProperty(o, s);
            return
        }
        r[o] = e.style[o],
        e.style[o] = s
    }
    ),
    !t && yn.set(e, r)
}
function Ia(e, n) {
    if (!e || !(e instanceof HTMLElement))
        return;
    let t = yn.get(e);
    t && (e.style[n] = t[n])
}
const z = e => {
    switch (e) {
    case "top":
    case "bottom":
        return !0;
    case "left":
    case "right":
        return !1;
    default:
        return e
    }
}
;
function Ie(e, n) {
    if (!e)
        return null;
    const t = window.getComputedStyle(e)
      , r = t.transform || t.webkitTransform || t.mozTransform;
    let o = r.match(/^matrix3d\((.+)\)$/);
    return o ? parseFloat(o[1].split(", ")[z(n) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/),
    o ? parseFloat(o[1].split(", ")[z(n) ? 5 : 4]) : null)
}
function Ma(e) {
    return 8 * (Math.log(e + 1) - 2)
}
function rt(e, n) {
    if (!e)
        return () => {}
        ;
    const t = e.style.cssText;
    return Object.assign(e.style, n),
    () => {
        e.style.cssText = t
    }
}
function Fa(...e) {
    return (...n) => {
        for (const t of e)
            typeof t == "function" && t(...n)
    }
}
const k = {
    DURATION: .5,
    EASE: [.32, .72, 0, 1]
}
  , Cn = .4
  , Oa = .25
  , ka = 100
  , Nn = 8
  , ae = 16
  , lt = 26
  , at = "vaul-dragging";
function Sn(e) {
    const n = h.useRef(e);
    return h.useEffect( () => {
        n.current = e
    }
    ),
    h.useMemo( () => (...t) => n.current == null ? void 0 : n.current.call(n, ...t), [])
}
function La({defaultProp: e, onChange: n}) {
    const t = h.useState(e)
      , [r] = t
      , o = h.useRef(r)
      , s = Sn(n);
    return h.useEffect( () => {
        o.current !== r && (s(r),
        o.current = r)
    }
    , [r, o, s]),
    t
}
function En({prop: e, defaultProp: n, onChange: t= () => {}
}) {
    const [r,o] = La({
        defaultProp: n,
        onChange: t
    })
      , s = e !== void 0
      , l = s ? e : r
      , i = Sn(t)
      , g = h.useCallback(x => {
        if (s) {
            const d = typeof x == "function" ? x(e) : x;
            d !== e && i(d)
        } else
            o(x)
    }
    , [s, e, o, i]);
    return [l, g]
}
function Ba({activeSnapPointProp: e, setActiveSnapPointProp: n, snapPoints: t, drawerRef: r, overlayRef: o, fadeFromIndex: s, onSnapPointChange: l, direction: i="bottom", container: g, snapToSequentialPoint: x}) {
    const [m,d] = En({
        prop: e,
        defaultProp: t == null ? void 0 : t[0],
        onChange: n
    })
      , [f,y] = h.useState(typeof window < "u" ? {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
    } : void 0);
    h.useEffect( () => {
        function C() {
            y({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        return window.addEventListener("resize", C),
        () => window.removeEventListener("resize", C)
    }
    , []);
    const A = h.useMemo( () => m === (t == null ? void 0 : t[t.length - 1]) || null, [t, m])
      , u = h.useMemo( () => t == null ? void 0 : t.findIndex(C => C === m), [t, m])
      , w = t && t.length > 0 && (s || s === 0) && !Number.isNaN(s) && t[s] === m || !t
      , p = h.useMemo( () => {
        const C = g ? {
            width: g.getBoundingClientRect().width,
            height: g.getBoundingClientRect().height
        } : typeof window < "u" ? {
            width: window.innerWidth,
            height: window.innerHeight
        } : {
            width: 0,
            height: 0
        };
        var P;
        return (P = t == null ? void 0 : t.map(R => {
            const U = typeof R == "string";
            let b = 0;
            if (U && (b = parseInt(R, 10)),
            z(i)) {
                const L = U ? b : f ? R * C.height : 0;
                return f ? i === "bottom" ? C.height - L : -C.height + L : L
            }
            const q = U ? b : f ? R * C.width : 0;
            return f ? i === "right" ? C.width - q : -C.width + q : q
        }
        )) != null ? P : []
    }
    , [t, f, g])
      , S = h.useMemo( () => u !== null ? p == null ? void 0 : p[u] : null, [p, u])
      , E = h.useCallback(C => {
        var P;
        const R = (P = p == null ? void 0 : p.findIndex(U => U === C)) != null ? P : null;
        l(R),
        V(r.current, {
            transition: `transform ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`,
            transform: z(i) ? `translate3d(0, ${C}px, 0)` : `translate3d(${C}px, 0, 0)`
        }),
        p && R !== p.length - 1 && R !== s && R < s ? V(o.current, {
            transition: `opacity ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`,
            opacity: "0"
        }) : V(o.current, {
            transition: `opacity ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`,
            opacity: "1"
        }),
        d(t == null ? void 0 : t[Math.max(R, 0)])
    }
    , [r.current, t, p, s, o, d]);
    h.useEffect( () => {
        if (m || e) {
            var C;
            const P = (C = t == null ? void 0 : t.findIndex(R => R === e || R === m)) != null ? C : -1;
            p && P !== -1 && typeof p[P] == "number" && E(p[P])
        }
    }
    , [m, e, t, p, E]);
    function v({draggedDistance: C, closeDrawer: P, velocity: R, dismissible: U}) {
        if (s === void 0)
            return;
        const b = i === "bottom" || i === "right" ? (S ?? 0) - C : (S ?? 0) + C
          , q = u === s - 1
          , L = u === 0
          , D = C > 0;
        if (q && V(o.current, {
            transition: `opacity ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`
        }),
        !x && R > 2 && !D) {
            U ? P() : E(p[0]);
            return
        }
        if (!x && R > 2 && D && p && t) {
            E(p[t.length - 1]);
            return
        }
        const B = p == null ? void 0 : p.reduce( (X, ne) => typeof X != "number" || typeof ne != "number" ? X : Math.abs(ne - b) < Math.abs(X - b) ? ne : X)
          , G = z(i) ? window.innerHeight : window.innerWidth;
        if (R > Cn && Math.abs(C) < G * .4) {
            const X = D ? 1 : -1;
            if (X > 0 && A) {
                E(p[t.length - 1]);
                return
            }
            if (L && X < 0 && U && P(),
            u === null)
                return;
            E(p[u + X]);
            return
        }
        E(B)
    }
    function T({draggedDistance: C}) {
        if (S === null)
            return;
        const P = i === "bottom" || i === "right" ? S - C : S + C;
        (i === "bottom" || i === "right") && P < p[p.length - 1] || (i === "top" || i === "left") && P > p[p.length - 1] || V(r.current, {
            transform: z(i) ? `translate3d(0, ${P}px, 0)` : `translate3d(${P}px, 0, 0)`
        })
    }
    function W(C, P) {
        if (!t || typeof u != "number" || !p || s === void 0)
            return null;
        const R = u === s - 1;
        if (u >= s && P)
            return 0;
        if (R && !P)
            return 1;
        if (!w && !R)
            return null;
        const b = R ? u + 1 : u - 1
          , q = R ? p[b] - p[b - 1] : p[b + 1] - p[b]
          , L = C / Math.abs(q);
        return R ? 1 - L : L
    }
    return {
        isLastSnapPoint: A,
        activeSnapPoint: m,
        shouldFade: w,
        getPercentageDragged: W,
        setActiveSnapPoint: d,
        activeSnapPointIndex: u,
        onRelease: v,
        onDrag: T,
        snapPointsOffset: p
    }
}
const Va = () => () => {}
;
function za() {
    const {direction: e, isOpen: n, shouldScaleBackground: t, setBackgroundColorOnScale: r, noBodyStyles: o} = me()
      , s = h.useRef(null)
      , l = c.useMemo( () => document.body.style.backgroundColor, []);
    function i() {
        return (window.innerWidth - lt) / window.innerWidth
    }
    h.useEffect( () => {
        if (n && t) {
            s.current && clearTimeout(s.current);
            const g = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
            if (!g)
                return;
            Fa(r && !o ? rt(document.body, {
                background: "black"
            }) : Va, rt(g, {
                transformOrigin: z(e) ? "top" : "left",
                transitionProperty: "transform, border-radius",
                transitionDuration: `${k.DURATION}s`,
                transitionTimingFunction: `cubic-bezier(${k.EASE.join(",")})`
            }));
            const x = rt(g, {
                borderRadius: `${Nn}px`,
                overflow: "hidden",
                ...z(e) ? {
                    transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
                } : {
                    transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
                }
            });
            return () => {
                x(),
                s.current = window.setTimeout( () => {
                    l ? document.body.style.background = l : document.body.style.removeProperty("background")
                }
                , k.DURATION * 1e3)
            }
        }
    }
    , [n, t, l])
}
let be = null;
function Wa({isOpen: e, modal: n, nested: t, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: s}) {
    const [l,i] = h.useState( () => typeof window < "u" ? window.location.href : "")
      , g = h.useRef(0)
      , x = h.useCallback( () => {
        if (kt() && be === null && e && !s) {
            be = {
                position: document.body.style.position,
                top: document.body.style.top,
                left: document.body.style.left,
                height: document.body.style.height,
                right: "unset"
            };
            const {scrollX: d, innerHeight: f} = window;
            document.body.style.setProperty("position", "fixed", "important"),
            Object.assign(document.body.style, {
                top: `${-g.current}px`,
                left: `${-d}px`,
                right: "0px",
                height: "auto"
            }),
            window.setTimeout( () => window.requestAnimationFrame( () => {
                const y = f - window.innerHeight;
                y && g.current >= f && (document.body.style.top = `${-(g.current + y)}px`)
            }
            ), 300)
        }
    }
    , [e])
      , m = h.useCallback( () => {
        if (kt() && be !== null && !s) {
            const d = -parseInt(document.body.style.top, 10)
              , f = -parseInt(document.body.style.left, 10);
            Object.assign(document.body.style, be),
            window.requestAnimationFrame( () => {
                if (o && l !== window.location.href) {
                    i(window.location.href);
                    return
                }
                window.scrollTo(f, d)
            }
            ),
            be = null
        }
    }
    , [l]);
    return h.useEffect( () => {
        function d() {
            g.current = window.scrollY
        }
        return d(),
        window.addEventListener("scroll", d),
        () => {
            window.removeEventListener("scroll", d)
        }
    }
    , []),
    h.useEffect( () => {
        t || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && x(),
        n || window.setTimeout( () => {
            m()
        }
        , 500)) : m())
    }
    , [e, r, l, n, t, x, m]),
    {
        restorePositionSetting: m
    }
}
function Dn({open: e, onOpenChange: n, children: t, onDrag: r, onRelease: o, snapPoints: s, shouldScaleBackground: l=!1, setBackgroundColorOnScale: i=!0, closeThreshold: g=Oa, scrollLockTimeout: x=ka, dismissible: m=!0, handleOnly: d=!1, fadeFromIndex: f=s && s.length - 1, activeSnapPoint: y, setActiveSnapPoint: A, fixed: u, modal: w=!0, onClose: p, nested: S, noBodyStyles: E, direction: v="bottom", defaultOpen: T=!1, disablePreventScroll: W=!0, snapToSequentialPoint: C=!1, preventScrollRestoration: P=!1, repositionInputs: R=!0, onAnimationEnd: U, container: b, autoFocus: q=!1}) {
    var L, D;
    const [B=!1,G] = En({
        defaultProp: T,
        prop: e,
        onChange: N => {
            n == null || n(N),
            !N && !S && Vn(),
            setTimeout( () => {
                U == null || U(N)
            }
            , k.DURATION * 1e3),
            N && !w && typeof window < "u" && window.requestAnimationFrame( () => {
                document.body.style.pointerEvents = "auto"
            }
            ),
            N || (document.body.style.pointerEvents = "auto")
        }
    })
      , [X,ne] = h.useState(!1)
      , [pe,We] = h.useState(!1)
      , [Mn,ht] = h.useState(!1)
      , se = h.useRef(null)
      , Ce = h.useRef(null)
      , qe = h.useRef(null)
      , Ue = h.useRef(null)
      , Ne = h.useRef(null)
      , he = h.useRef(!1)
      , Xe = h.useRef(null)
      , He = h.useRef(0)
      , ie = h.useRef(!1)
      , gt = h.useRef(0)
      , j = h.useRef(null)
      , vt = h.useRef(((L = j.current) == null ? void 0 : L.getBoundingClientRect().height) || 0)
      , xt = h.useRef(((D = j.current) == null ? void 0 : D.getBoundingClientRect().width) || 0)
      , Ke = h.useRef(0)
      , Fn = h.useCallback(N => {
        s && N === ve.length - 1 && (Ce.current = new Date)
    }
    , [])
      , {activeSnapPoint: On, activeSnapPointIndex: ge, setActiveSnapPoint: wt, onRelease: kn, snapPointsOffset: ve, onDrag: Ln, shouldFade: bt, getPercentageDragged: Bn} = Ba({
        snapPoints: s,
        activeSnapPointProp: y,
        setActiveSnapPointProp: A,
        drawerRef: j,
        fadeFromIndex: f,
        overlayRef: se,
        onSnapPointChange: Fn,
        direction: v,
        container: b,
        snapToSequentialPoint: C
    });
    ja({
        isDisabled: !B || pe || !w || Mn || !X || !R || !W
    });
    const {restorePositionSetting: Vn} = Wa({
        isOpen: B,
        modal: w,
        nested: S,
        hasBeenOpened: X,
        preventScrollRestoration: P,
        noBodyStyles: E
    });
    function Se() {
        return (window.innerWidth - lt) / window.innerWidth
    }
    function zn(N) {
        var I, F;
        !m && !s || j.current && !j.current.contains(N.target) || (vt.current = ((I = j.current) == null ? void 0 : I.getBoundingClientRect().height) || 0,
        xt.current = ((F = j.current) == null ? void 0 : F.getBoundingClientRect().width) || 0,
        We(!0),
        qe.current = new Date,
        xn() && window.addEventListener("touchend", () => he.current = !1, {
            once: !0
        }),
        N.target.setPointerCapture(N.pointerId),
        He.current = z(v) ? N.pageY : N.pageX)
    }
    function yt(N, I) {
        var F, O;
        let M = N;
        const Y = (F = window.getSelection()) == null ? void 0 : F.toString()
          , H = j.current ? Ie(j.current, v) : null
          , K = new Date;
        if (M.hasAttribute("data-vaul-no-drag") || M.closest("[data-vaul-no-drag]"))
            return !1;
        if (v === "right" || v === "left")
            return !0;
        if (Ce.current && K.getTime() - Ce.current.getTime() < 500)
            return !1;
        if (H !== null && (v === "bottom" ? H > 0 : H < 0))
            return !0;
        if (Y && Y.length > 0)
            return !1;
        if (K.getTime() - ((O = Ne.current) == null ? void 0 : O.getTime()) < x && H === 0 || I)
            return Ne.current = K,
            !1;
        for (; M; ) {
            if (M.scrollHeight > M.clientHeight) {
                if (M.scrollTop !== 0)
                    return Ne.current = new Date,
                    !1;
                if (M.getAttribute("role") === "dialog")
                    return !0
            }
            M = M.parentNode
        }
        return !0
    }
    function Wn(N) {
        if (j.current && pe) {
            const I = v === "bottom" || v === "right" ? 1 : -1
              , F = (He.current - (z(v) ? N.pageY : N.pageX)) * I
              , O = F > 0
              , M = s && !m && !O;
            if (M && ge === 0)
                return;
            const Y = Math.abs(F)
              , H = document.querySelector("[data-vaul-drawer-wrapper]")
              , K = v === "bottom" || v === "top" ? vt.current : xt.current;
            let Z = Y / K;
            const re = Bn(Y, O);
            if (re !== null && (Z = re),
            M && Z >= 1 || !he.current && !yt(N.target, O))
                return;
            if (j.current.classList.add(at),
            he.current = !0,
            V(j.current, {
                transition: "none"
            }),
            V(se.current, {
                transition: "none"
            }),
            s && Ln({
                draggedDistance: F
            }),
            O && !s) {
                const Q = Ma(F)
                  , Ee = Math.min(Q * -1, 0) * I;
                V(j.current, {
                    transform: z(v) ? `translate3d(0, ${Ee}px, 0)` : `translate3d(${Ee}px, 0, 0)`
                });
                return
            }
            const $ = 1 - Z;
            if ((bt || f && ge === f - 1) && (r == null || r(N, Z),
            V(se.current, {
                opacity: `${$}`,
                transition: "none"
            }, !0)),
            H && se.current && l) {
                const Q = Math.min(Se() + Z * (1 - Se()), 1)
                  , Ee = 8 - Z * 8
                  , Nt = Math.max(0, 14 - Z * 14);
                V(H, {
                    borderRadius: `${Ee}px`,
                    transform: z(v) ? `scale(${Q}) translate3d(0, ${Nt}px, 0)` : `scale(${Q}) translate3d(${Nt}px, 0, 0)`,
                    transition: "none"
                }, !0)
            }
            if (!s) {
                const Q = Y * I;
                V(j.current, {
                    transform: z(v) ? `translate3d(0, ${Q}px, 0)` : `translate3d(${Q}px, 0, 0)`
                })
            }
        }
    }
    h.useEffect( () => {
        var N;
        function I() {
            if (!j.current || !R)
                return;
            const F = document.activeElement;
            if (it(F) || ie.current) {
                var O;
                const M = ((O = window.visualViewport) == null ? void 0 : O.height) || 0
                  , Y = window.innerHeight;
                let H = Y - M;
                const K = j.current.getBoundingClientRect().height || 0
                  , Z = K > Y * .8;
                Ke.current || (Ke.current = K);
                const re = j.current.getBoundingClientRect().top;
                if (Math.abs(gt.current - H) > 60 && (ie.current = !ie.current),
                s && s.length > 0 && ve && ge) {
                    const $ = ve[ge] || 0;
                    H += $
                }
                if (gt.current = H,
                K > M || ie.current) {
                    const $ = j.current.getBoundingClientRect().height;
                    let Q = $;
                    $ > M && (Q = M - (Z ? re : lt)),
                    u ? j.current.style.height = `${$ - Math.max(H, 0)}px` : j.current.style.height = `${Math.max(Q, M - re)}px`
                } else
                    j.current.style.height = `${Ke.current}px`;
                s && s.length > 0 && !ie.current ? j.current.style.bottom = "0px" : j.current.style.bottom = `${Math.max(H, 0)}px`
            }
        }
        return (N = window.visualViewport) == null || N.addEventListener("resize", I),
        () => {
            var F;
            return (F = window.visualViewport) == null ? void 0 : F.removeEventListener("resize", I)
        }
    }
    , [ge, s, ve]);
    function xe(N) {
        qn(),
        p == null || p(),
        N || G(!1),
        setTimeout( () => {
            s && wt(s[0])
        }
        , k.DURATION * 1e3)
    }
    function Ct() {
        if (!j.current)
            return;
        const N = document.querySelector("[data-vaul-drawer-wrapper]")
          , I = Ie(j.current, v);
        V(j.current, {
            transform: "translate3d(0, 0, 0)",
            transition: `transform ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`
        }),
        V(se.current, {
            transition: `opacity ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`,
            opacity: "1"
        }),
        l && I && I > 0 && B && V(N, {
            borderRadius: `${Nn}px`,
            overflow: "hidden",
            ...z(v) ? {
                transform: `scale(${Se()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
                transformOrigin: "top"
            } : {
                transform: `scale(${Se()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
                transformOrigin: "left"
            },
            transitionProperty: "transform, border-radius",
            transitionDuration: `${k.DURATION}s`,
            transitionTimingFunction: `cubic-bezier(${k.EASE.join(",")})`
        }, !0)
    }
    function qn() {
        !pe || !j.current || (j.current.classList.remove(at),
        he.current = !1,
        We(!1),
        Ue.current = new Date)
    }
    function Un(N) {
        if (!pe || !j.current)
            return;
        j.current.classList.remove(at),
        he.current = !1,
        We(!1),
        Ue.current = new Date;
        const I = Ie(j.current, v);
        if (!yt(N.target, !1) || !I || Number.isNaN(I) || qe.current === null)
            return;
        const F = Ue.current.getTime() - qe.current.getTime()
          , O = He.current - (z(v) ? N.pageY : N.pageX)
          , M = Math.abs(O) / F;
        if (M > .05 && (ht(!0),
        setTimeout( () => {
            ht(!1)
        }
        , 200)),
        s) {
            kn({
                draggedDistance: O * (v === "bottom" || v === "right" ? 1 : -1),
                closeDrawer: xe,
                velocity: M,
                dismissible: m
            }),
            o == null || o(N, !0);
            return
        }
        if (v === "bottom" || v === "right" ? O > 0 : O < 0) {
            Ct(),
            o == null || o(N, !0);
            return
        }
        if (M > Cn) {
            xe(),
            o == null || o(N, !1);
            return
        }
        var Y;
        const H = Math.min((Y = j.current.getBoundingClientRect().height) != null ? Y : 0, window.innerHeight);
        var K;
        const Z = Math.min((K = j.current.getBoundingClientRect().width) != null ? K : 0, window.innerWidth)
          , re = v === "left" || v === "right";
        if (Math.abs(I) >= (re ? Z : H) * g) {
            xe(),
            o == null || o(N, !1);
            return
        }
        o == null || o(N, !0),
        Ct()
    }
    h.useEffect( () => (B && (V(document.documentElement, {
        scrollBehavior: "auto"
    }),
    Ce.current = new Date),
    () => {
        Ia(document.documentElement, "scrollBehavior")
    }
    ), [B]);
    function Xn(N) {
        const I = N ? (window.innerWidth - ae) / window.innerWidth : 1
          , F = N ? -ae : 0;
        Xe.current && window.clearTimeout(Xe.current),
        V(j.current, {
            transition: `transform ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`,
            transform: `scale(${I}) translate3d(0, ${F}px, 0)`
        }),
        !N && j.current && (Xe.current = setTimeout( () => {
            const O = Ie(j.current, v);
            V(j.current, {
                transition: "none",
                transform: z(v) ? `translate3d(0, ${O}px, 0)` : `translate3d(${O}px, 0, 0)`
            })
        }
        , 500))
    }
    function Hn(N, I) {
        if (I < 0)
            return;
        const F = (window.innerWidth - ae) / window.innerWidth
          , O = F + I * (1 - F)
          , M = -ae + I * ae;
        V(j.current, {
            transform: z(v) ? `scale(${O}) translate3d(0, ${M}px, 0)` : `scale(${O}) translate3d(${M}px, 0, 0)`,
            transition: "none"
        })
    }
    function Kn(N, I) {
        const F = z(v) ? window.innerHeight : window.innerWidth
          , O = I ? (F - ae) / F : 1
          , M = I ? -ae : 0;
        I && V(j.current, {
            transition: `transform ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`,
            transform: z(v) ? `scale(${O}) translate3d(0, ${M}px, 0)` : `scale(${O}) translate3d(${M}px, 0, 0)`
        })
    }
    return h.createElement(fa, {
        defaultOpen: T,
        onOpenChange: N => {
            !m && !N || (N ? ne(!0) : xe(!0),
            G(N))
        }
        ,
        open: B
    }, h.createElement(vn.Provider, {
        value: {
            activeSnapPoint: On,
            snapPoints: s,
            setActiveSnapPoint: wt,
            drawerRef: j,
            overlayRef: se,
            onOpenChange: n,
            onPress: zn,
            onRelease: Un,
            onDrag: Wn,
            dismissible: m,
            handleOnly: d,
            isOpen: B,
            isDragging: pe,
            shouldFade: bt,
            closeDrawer: xe,
            onNestedDrag: Hn,
            onNestedOpenChange: Xn,
            onNestedRelease: Kn,
            keyboardIsOpen: ie,
            modal: w,
            snapPointsOffset: ve,
            direction: v,
            shouldScaleBackground: l,
            setBackgroundColorOnScale: i,
            noBodyStyles: E,
            container: b,
            autoFocus: q
        }
    }, t))
}
const jn = h.forwardRef(function({...e}, n) {
    const {overlayRef: t, snapPoints: r, onRelease: o, shouldFade: s, isOpen: l, modal: i} = me()
      , g = bn(n, t)
      , x = r && r.length > 0;
    return i ? h.createElement(ha, {
        onMouseUp: o,
        ref: g,
        "data-vaul-overlay": "",
        "data-vaul-snap-points": l && x ? "true" : "false",
        "data-vaul-snap-points-overlay": l && s ? "true" : "false",
        ...e
    }) : (typeof window < "u" && window.requestAnimationFrame( () => {
        document.body.style.pointerEvents = "auto"
    }
    ),
    null)
});
jn.displayName = "Drawer.Overlay";
const An = h.forwardRef(function({onPointerDownOutside: e, style: n, onOpenAutoFocus: t, ...r}, o) {
    const {drawerRef: s, onPress: l, onRelease: i, onDrag: g, keyboardIsOpen: x, snapPointsOffset: m, modal: d, isOpen: f, direction: y, snapPoints: A, container: u, handleOnly: w, autoFocus: p} = me()
      , [S,E] = h.useState(!1)
      , v = bn(o, s)
      , T = h.useRef(null)
      , W = h.useRef(null)
      , C = h.useRef(!1)
      , P = A && A.length > 0;
    za();
    const R = (b, q, L=0) => {
        if (C.current)
            return !0;
        const D = Math.abs(b.y)
          , B = Math.abs(b.x)
          , G = B > D
          , X = ["bottom", "right"].includes(q) ? 1 : -1;
        if (q === "left" || q === "right") {
            if (!(b.x * X < 0) && B >= 0 && B <= L)
                return G
        } else if (!(b.y * X < 0) && D >= 0 && D <= L)
            return !G;
        return C.current = !0,
        !0
    }
    ;
    h.useEffect( () => {
        P && window.requestAnimationFrame( () => {
            E(!0)
        }
        )
    }
    , []);
    function U(b) {
        T.current = null,
        C.current = !1,
        i(b)
    }
    return h.createElement(ga, {
        "data-vaul-drawer-direction": y,
        "data-vaul-drawer": "",
        "data-vaul-delayed-snap-points": S ? "true" : "false",
        "data-vaul-snap-points": f && P ? "true" : "false",
        "data-vaul-custom-container": u ? "true" : "false",
        ...r,
        ref: v,
        style: m && m.length > 0 ? {
            "--snap-point-height": `${m[0]}px`,
            ...n
        } : n,
        onPointerDown: b => {
            w || (r.onPointerDown == null || r.onPointerDown.call(r, b),
            T.current = {
                x: b.pageX,
                y: b.pageY
            },
            l(b))
        }
        ,
        onOpenAutoFocus: b => {
            t == null || t(b),
            p || b.preventDefault()
        }
        ,
        onPointerDownOutside: b => {
            if (e == null || e(b),
            !d || b.defaultPrevented) {
                b.preventDefault();
                return
            }
            x.current && (x.current = !1)
        }
        ,
        onFocusOutside: b => {
            if (!d) {
                b.preventDefault();
                return
            }
        }
        ,
        onPointerMove: b => {
            if (W.current = b,
            w || (r.onPointerMove == null || r.onPointerMove.call(r, b),
            !T.current))
                return;
            const q = b.pageY - T.current.y
              , L = b.pageX - T.current.x
              , D = b.pointerType === "touch" ? 10 : 2;
            R({
                x: L,
                y: q
            }, y, D) ? g(b) : (Math.abs(L) > D || Math.abs(q) > D) && (T.current = null)
        }
        ,
        onPointerUp: b => {
            r.onPointerUp == null || r.onPointerUp.call(r, b),
            T.current = null,
            C.current = !1,
            i(b)
        }
        ,
        onPointerOut: b => {
            r.onPointerOut == null || r.onPointerOut.call(r, b),
            U(W.current)
        }
        ,
        onContextMenu: b => {
            r.onContextMenu == null || r.onContextMenu.call(r, b),
            U(W.current)
        }
    })
});
An.displayName = "Drawer.Content";
const qa = 250
  , Ua = 120
  , Tn = h.forwardRef(function({preventCycle: e=!1, children: n, ...t}, r) {
    const {closeDrawer: o, isDragging: s, snapPoints: l, activeSnapPoint: i, setActiveSnapPoint: g, dismissible: x, handleOnly: m, isOpen: d, onPress: f, onDrag: y} = me()
      , A = h.useRef(null)
      , u = h.useRef(!1);
    function w() {
        if (u.current) {
            E();
            return
        }
        window.setTimeout( () => {
            p()
        }
        , Ua)
    }
    function p() {
        if (s || e || u.current) {
            E();
            return
        }
        if (E(),
        (!l || l.length === 0) && x) {
            o();
            return
        }
        if (i === l[l.length - 1] && x) {
            o();
            return
        }
        const T = l.findIndex(C => C === i);
        if (T === -1)
            return;
        const W = l[T + 1];
        g(W)
    }
    function S() {
        A.current = window.setTimeout( () => {
            u.current = !0
        }
        , qa)
    }
    function E() {
        window.clearTimeout(A.current),
        u.current = !1
    }
    return h.createElement("div", {
        onClick: w,
        onPointerCancel: E,
        onPointerDown: v => {
            m && f(v),
            S()
        }
        ,
        onPointerMove: v => {
            m && y(v)
        }
        ,
        ref: r,
        "data-vaul-drawer-visible": d ? "true" : "false",
        "data-vaul-handle": "",
        "aria-hidden": "true",
        ...t
    }, h.createElement("span", {
        "data-vaul-handle-hitarea": "",
        "aria-hidden": "true"
    }, n))
});
Tn.displayName = "Drawer.Handle";
function Xa({onDrag: e, onOpenChange: n, ...t}) {
    const {onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: s} = me();
    if (!r)
        throw new Error("Drawer.NestedRoot must be placed in another drawer");
    return h.createElement(Dn, {
        nested: !0,
        onClose: () => {
            o(!1)
        }
        ,
        onDrag: (l, i) => {
            r(l, i),
            e == null || e(l, i)
        }
        ,
        onOpenChange: l => {
            l && o(l)
        }
        ,
        onRelease: s,
        ...t
    })
}
function Ha(e) {
    const n = me()
      , {container: t=n.container, ...r} = e;
    return h.createElement(pa, {
        container: t,
        ...r
    })
}
const _ = {
    Root: Dn,
    NestedRoot: Xa,
    Content: An,
    Overlay: jn,
    Trigger: ma,
    Portal: Ha,
    Handle: Tn,
    Close: wa,
    Title: va,
    Description: xa
}
  , Rn = ({shouldScaleBackground: e=!0, ...n}) => a.jsx(_.Root, {
    shouldScaleBackground: e,
    ...n
});
Rn.displayName = "Drawer";
const Pn = _.Portal
  , pt = c.forwardRef( ({className: e, ...n}, t) => a.jsx(_.Overlay, {
    ref: t,
    className: Be("fixed inset-0 z-50 bg-black/80", e),
    ...n
}));
pt.displayName = _.Overlay.displayName;
const Ka = c.forwardRef( ({className: e, children: n, ...t}, r) => a.jsxs(Pn, {
    children: [a.jsx(pt, {}), a.jsxs(_.Content, {
        ref: r,
        className: Be("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", e),
        ...t,
        children: [a.jsx("div", {
            className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"
        }), n]
    })]
}));
Ka.displayName = "DrawerContent";
const Ya = c.forwardRef( ({className: e, ...n}, t) => a.jsx(_.Title, {
    ref: t,
    className: Be("text-lg font-semibold leading-none tracking-tight", e),
    ...n
}));
Ya.displayName = _.Title.displayName;
const Za = c.forwardRef( ({className: e, ...n}, t) => a.jsx(_.Description, {
    ref: t,
    className: Be("text-sm text-muted-foreground", e),
    ...n
}));
Za.displayName = _.Description.displayName;
const In = "/assets/paypal-logo-CXd97tl4.png"
  , Vt = [{
    value: "cpf",
    label: "CPF"
}, {
    value: "email",
    label: "E-mail"
}, {
    value: "phone",
    label: "Telefone"
}, {
    value: "random",
    label: "Chave aleatória"
}]
  , Ja = ({open: e, onOpenChange: n, amount: t}) => {
    var L;
    const r = qt()
      , [o,s] = c.useState("customerData")
      , [l,i] = c.useState("")
      , [g,x] = c.useState("")
      , [m,d] = c.useState("")
      , [f,y] = c.useState("")
      , [A,u] = c.useState("")
      , [w,p] = c.useState("")
      , S = () => {
        n(!1),
        setTimeout( () => {
            s("customerData"),
            i(""),
            x(""),
            d(""),
            y(""),
            u(""),
            p("")
        }
        , 300)
    }
      , E = () => {
        s("pixKey")
    }
      , v = {
        cpf: 11,
        phone: 11,
        random: 32
    }
      , T = () => {
        if (l === "email")
            return g.trim().length >= 5 && g.includes("@");
        const D = g.replace(/\D/g, "").length
          , B = v[l];
        return B ? D === B : D >= 1
    }
      , W = () => {
        l && T() && s("confirm")
    }
      , C = () => {
        const D = m.trim()
          , B = f.replace(/\D/g, "")
          , G = A.trim()
          , X = w.replace(/\D/g, "");
        return D.length >= 3 && B.length === 11 && G.length >= 1 && X.length >= 10
    }
      , P = () => {
        C() && s("method")
    }
      , R = () => ({
        name: m.trim(),
        document: f.replace(/\D/g, ""),
        email: A.trim(),
        phone: w.replace(/\D/g, "")
    })
      , U = `R$${Number(t).toLocaleString("pt-BR", {
        minimumFractionDigits: 2
    })}`
      , b = ((L = Vt.find(D => D.value === l)) == null ? void 0 : L.label) || ""
      , q = {
        cpf: "000.000.000-00",
        email: "seuemail@exemplo.com",
        phone: "(00) 00000-0000",
        random: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    };
    return a.jsx(Rn, {
        open: e,
        onOpenChange: D => {
            D ? n(!0) : S()
        }
        ,
        children: a.jsxs(Pn, {
            children: [a.jsx(pt, {}), a.jsx("div", {
                className: "fixed inset-x-0 bottom-0 z-50 max-w-[430px] mx-auto",
                children: a.jsxs("div", {
                    className: "bg-white rounded-t-[16px] max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-300",
                    children: [o === "method" && a.jsxs(a.Fragment, {
                        children: [a.jsxs("div", {
                            className: "flex items-center justify-between px-5 pt-5 pb-3 border-b border-[#F0F0F0]",
                            children: [a.jsx(Me, {
                                size: 22,
                                className: "text-foreground cursor-pointer",
                                onClick: () => s("customerData")
                            }), a.jsx("h2", {
                                className: "font-bold text-[17px] text-foreground",
                                children: "Escolher um método de saque"
                            }), a.jsx(De, {
                                size: 22,
                                className: "text-foreground cursor-pointer",
                                onClick: S
                            })]
                        }), a.jsxs("button", {
                            onClick: E,
                            className: "w-full flex items-center px-5 py-4 border-b border-[#F0F0F0] active:bg-[#F9F9F9] transition-colors text-left",
                            children: [a.jsx("img", {
                                src: Ut,
                                alt: "Pix",
                                className: "w-[36px] h-[36px] object-contain mr-4"
                            }), a.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [a.jsx("p", {
                                    className: "font-semibold text-[15px] text-foreground",
                                    children: "PIX"
                                }), a.jsx("p", {
                                    className: "text-muted-foreground text-[13px] mt-0.5",
                                    children: "O dinheiro deve chegar em até 1 minuto"
                                })]
                            }), a.jsx("span", {
                                className: "text-muted-foreground text-[13px] mr-1",
                                children: "BRL"
                            }), a.jsx(ot, {
                                size: 18,
                                className: "text-muted-foreground"
                            })]
                        }), a.jsxs("div", {
                            className: "px-5 py-4 opacity-60",
                            children: [a.jsxs("div", {
                                className: "flex items-center",
                                children: [a.jsx("img", {
                                    src: In,
                                    alt: "PayPal",
                                    className: "w-[36px] h-[36px] object-contain mr-4"
                                }), a.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [a.jsx("p", {
                                        className: "font-semibold text-[15px] text-foreground",
                                        children: "PayPal"
                                    }), a.jsx("p", {
                                        className: "text-muted-foreground text-[13px] mt-0.5",
                                        children: "O dinheiro deve chegar de 1 a 3 dias úteis"
                                    })]
                                }), a.jsx("span", {
                                    className: "text-pink text-[13px] mr-1",
                                    children: "Inválido"
                                }), a.jsx("span", {
                                    className: "text-muted-foreground text-[13px] mr-1",
                                    children: "USD"
                                }), a.jsx(ot, {
                                    size: 18,
                                    className: "text-muted-foreground"
                                })]
                            }), a.jsx("p", {
                                className: "text-muted-foreground text-[12px] mt-2 leading-relaxed",
                                children: "Saque processado pelo TikTok no Brasil (ByteDance Brasil Tecnologia Ltda.) CNPJ: 27.415.911/0001"
                            })]
                        }), a.jsx("div", {
                            className: "h-6"
                        })]
                    }), o === "pixKey" && a.jsxs(a.Fragment, {
                        children: [a.jsxs("div", {
                            className: "flex items-center justify-between px-5 pt-5 pb-3 border-b border-[#F0F0F0]",
                            children: [a.jsx(Me, {
                                size: 22,
                                className: "text-foreground cursor-pointer",
                                onClick: () => s("method")
                            }), a.jsx("h2", {
                                className: "font-bold text-[17px] text-foreground",
                                children: "Informar chave PIX"
                            }), a.jsx(De, {
                                size: 22,
                                className: "text-foreground cursor-pointer",
                                onClick: S
                            })]
                        }), a.jsxs("div", {
                            className: "px-5 pt-4 pb-2",
                            children: [a.jsx("p", {
                                className: "text-muted-foreground text-[14px] mb-3",
                                children: "Tipo de chave"
                            }), a.jsx("div", {
                                className: "grid grid-cols-2 gap-2 mb-5",
                                children: Vt.map(D => a.jsx("button", {
                                    onClick: () => i(D.value),
                                    className: `h-[44px] rounded-[10px] border-2 text-[14px] font-semibold transition-all duration-200 ${l === D.value ? "border-pink text-pink bg-pink/5" : "border-[#E5E7EB] text-foreground"}`,
                                    children: D.label
                                }, D.value))
                            }), a.jsx("p", {
                                className: "text-muted-foreground text-[14px] mb-2",
                                children: "Sua chave PIX"
                            }), a.jsx("input", {
                                type: "text",
                                value: g,
                                onChange: D => x(D.target.value),
                                placeholder: q[l] || "Digite sua chave PIX",
                                className: "w-full h-[48px] border-2 border-[#E5E7EB] rounded-[10px] px-4 text-[16px] text-foreground placeholder:text-muted-foreground/50 focus:border-pink focus:outline-none transition-colors"
                            })]
                        }), a.jsx("div", {
                            className: "px-5 pt-4 pb-6",
                            children: a.jsx("button", {
                                onClick: W,
                                disabled: !l || !T(),
                                className: "w-full h-[52px] bg-pink text-white font-bold text-[16px] rounded-[12px] flex items-center justify-center active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed",
                                children: "Continuar"
                            })
                        })]
                    }), o === "customerData" && a.jsxs(a.Fragment, {
                        children: [a.jsxs("div", {
                            className: "flex items-center justify-between px-5 pt-5 pb-3 border-b border-[#F0F0F0]",
                            children: [a.jsx("div", {
                                className: "w-[22px]"
                            }), a.jsx("h2", {
                                className: "font-bold text-[17px] text-foreground",
                                children: "Seus dados"
                            }), a.jsx(De, {
                                size: 22,
                                className: "text-foreground cursor-pointer",
                                onClick: S
                            })]
                        }), a.jsxs("div", {
                            className: "px-5 pt-4 pb-2 space-y-4",
                            children: [a.jsx("p", {
                                className: "text-muted-foreground text-[13px] leading-relaxed",
                                children: "Preencha seus dados para verificação e processamento do saque."
                            }), a.jsxs("div", {
                                children: [a.jsx("p", {
                                    className: "text-muted-foreground text-[14px] mb-1.5",
                                    children: "Nome e sobrenome"
                                }), a.jsx("input", {
                                    type: "text",
                                    value: m,
                                    onChange: D => d(D.target.value),
                                    placeholder: "Ex: João da Silva",
                                    className: `w-full h-[48px] border-2 rounded-[10px] px-4 text-[16px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors ${m.length > 0 && m.trim().length < 3 ? "border-red-400 focus:border-red-400" : "border-[#E5E7EB] focus:border-pink"}`
                                }), m.length > 0 && m.trim().length < 3 && a.jsx("p", {
                                    className: "text-red-500 text-[11px] mt-1",
                                    children: "Informe nome e sobrenome (mínimo 3 caracteres)"
                                })]
                            }), a.jsxs("div", {
                                children: [a.jsx("p", {
                                    className: "text-muted-foreground text-[14px] mb-1.5",
                                    children: "CPF"
                                }), a.jsx("input", {
                                    type: "text",
                                    value: f,
                                    onChange: D => y(D.target.value.replace(/\D/g, "").slice(0, 11)),
                                    placeholder: "00000000000",
                                    inputMode: "numeric",
                                    maxLength: 11,
                                    className: `w-full h-[48px] border-2 rounded-[10px] px-4 text-[16px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors ${f.length > 0 && f.replace(/\D/g, "").length !== 11 ? "border-red-400 focus:border-red-400" : "border-[#E5E7EB] focus:border-pink"}`
                                }), f.length > 0 && f.replace(/\D/g, "").length !== 11 ? a.jsxs("p", {
                                    className: "text-red-500 text-[11px] mt-1",
                                    children: ["CPF deve ter 11 dígitos (", f.replace(/\D/g, "").length, "/11)"]
                                }) : a.jsx("p", {
                                    className: "text-muted-foreground text-[11px] mt-1",
                                    children: "Apenas números, 11 dígitos"
                                })]
                            }), a.jsxs("div", {
                                children: [a.jsx("p", {
                                    className: "text-muted-foreground text-[14px] mb-1.5",
                                    children: "E-mail"
                                }), a.jsx("input", {
                                    type: "email",
                                    value: A,
                                    onChange: D => u(D.target.value),
                                    placeholder: "seuemail@exemplo.com",
                                    className: "w-full h-[48px] border-2 rounded-[10px] px-4 text-[16px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors border-[#E5E7EB] focus:border-pink"
                                })]
                            }), a.jsxs("div", {
                                children: [a.jsx("p", {
                                    className: "text-muted-foreground text-[14px] mb-1.5",
                                    children: "Telefone com DDD"
                                }), a.jsx("input", {
                                    type: "text",
                                    value: w,
                                    onChange: D => p(D.target.value.replace(/\D/g, "").slice(0, 11)),
                                    placeholder: "11999999999",
                                    inputMode: "numeric",
                                    maxLength: 11,
                                    className: `w-full h-[48px] border-2 rounded-[10px] px-4 text-[16px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors ${w.length > 0 && w.replace(/\D/g, "").length < 10 ? "border-red-400 focus:border-red-400" : "border-[#E5E7EB] focus:border-pink"}`
                                }), w.length > 0 && w.replace(/\D/g, "").length < 10 ? a.jsxs("p", {
                                    className: "text-red-500 text-[11px] mt-1",
                                    children: ["Telefone deve ter pelo menos 10 dígitos (", w.replace(/\D/g, "").length, "/10)"]
                                }) : a.jsx("p", {
                                    className: "text-muted-foreground text-[11px] mt-1",
                                    children: "DDD + número, ex: 11999999999"
                                })]
                            })]
                        }), a.jsx("div", {
                            className: "px-5 pt-4 pb-6",
                            children: a.jsx("button", {
                                onClick: P,
                                disabled: !C(),
                                className: "w-full h-[52px] bg-pink text-white font-bold text-[16px] rounded-[12px] flex items-center justify-center active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed",
                                children: "Continuar"
                            })
                        })]
                    }), o === "confirm" && a.jsxs(a.Fragment, {
                        children: [a.jsxs("div", {
                            className: "flex items-center justify-between px-5 pt-5 pb-3 border-b border-[#F0F0F0]",
                            children: [a.jsx(Me, {
                                size: 22,
                                className: "text-foreground cursor-pointer",
                                onClick: () => s("pixKey")
                            }), a.jsx("h2", {
                                className: "font-bold text-[17px] text-foreground",
                                children: "Confirmar saque"
                            }), a.jsx(De, {
                                size: 22,
                                className: "text-foreground cursor-pointer",
                                onClick: S
                            })]
                        }), a.jsxs("div", {
                            className: "px-5",
                            children: [a.jsxs("div", {
                                className: "flex items-center justify-between py-4 border-b border-[#F0F0F0]",
                                children: [a.jsx("span", {
                                    className: "text-muted-foreground text-[15px]",
                                    children: "Tempo de processamento"
                                }), a.jsx("span", {
                                    className: "font-semibold text-[15px] text-foreground",
                                    children: "Até 1 minuto"
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center justify-between py-4 border-b border-[#F0F0F0]",
                                children: [a.jsx("span", {
                                    className: "text-muted-foreground text-[15px]",
                                    children: "Conta para saque"
                                }), a.jsxs("span", {
                                    className: "font-semibold text-[15px] text-foreground",
                                    children: ["PIX (", b, ")"]
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center justify-between py-4 border-b border-[#F0F0F0]",
                                children: [a.jsx("span", {
                                    className: "text-muted-foreground text-[15px]",
                                    children: "Chave PIX"
                                }), a.jsx("span", {
                                    className: "font-semibold text-[15px] text-foreground truncate max-w-[200px]",
                                    children: g
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center justify-between py-4 border-b border-[#F0F0F0]",
                                children: [a.jsx("span", {
                                    className: "text-muted-foreground text-[15px]",
                                    children: "Nome"
                                }), a.jsx("span", {
                                    className: "font-semibold text-[15px] text-foreground truncate max-w-[200px]",
                                    children: m
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center justify-between py-4 border-b border-[#F0F0F0]",
                                children: [a.jsx("span", {
                                    className: "text-muted-foreground text-[15px]",
                                    children: "Valor do saque"
                                }), a.jsx("span", {
                                    className: "font-semibold text-[15px] text-foreground",
                                    children: U
                                })]
                            })]
                        }), a.jsx("div", {
                            className: "px-5 pt-4 pb-6",
                            children: a.jsx("button", {
                                onClick: () => {
                                    const D = R();
                                    S(),
                                    r("/confirmar-saque", {
                                        state: {
                                            amount: t,
                                            pixKeyType: l,
                                            pixKey: g,
                                            customerData: D
                                        }
                                    })
                                }
                                ,
                                className: "w-full h-[52px] bg-pink text-white font-bold text-[16px] rounded-[12px] flex items-center justify-center active:scale-[0.98] transition-all duration-150",
                                children: "Confirmar para sacar"
                            })
                        })]
                    })]
                })
            })]
        })
    })
}
  , Ga = "/assets/pagbank-logo-CdK87Ixg.png"
  , Qa = "/assets/claro-logo-A9e4ycmK.png"
  , _a = "data:image/png;base64,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"
  , $a = "data:image/png;base64,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"
  , eo = "data:image/webp;base64,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"
  , to = [{
    value: "10",
    label: "R$10"
}, {
    value: "15",
    label: "R$15"
}, {
    value: "25",
    label: "R$25"
}, {
    value: "2800",
    label: "R$2.800"
}]
  , zt = (e, n=1400, t=200) => {
    const [r,o] = c.useState(0)
      , s = c.useRef(!1);
    return c.useEffect( () => {
        if (s.current)
            return;
        s.current = !0;
        const l = setTimeout( () => {
            const i = performance.now()
              , g = x => {
                const m = x - i
                  , d = Math.min(m / n, 1);
                let f;
                if (d < .15) {
                    const y = d / .15
                      , A = y * y;
                    f = Math.round(A * e * .3)
                } else if (d < .7) {
                    const y = (d - .15) / .55;
                    f = Math.round(e * (.3 + y * .6))
                } else if (d < .92) {
                    const A = 1 - (1 - (d - .7) / .22) ** 3;
                    f = Math.round(e * (.9 + A * .08))
                } else {
                    const y = (d - .92) / .08
                      , A = y * y * (3 - 2 * y);
                    f = Math.round(e * (.98 + A * .02))
                }
                o(Math.min(f, e)),
                d < 1 ? requestAnimationFrame(g) : o(e)
            }
            ;
            requestAnimationFrame(g)
        }
        , t);
        return () => clearTimeout(l)
    }
    , [e, n, t]),
    r
}
  , lo = () => {
    const e = qt()
      , n = ar()
      , [t,r] = c.useState("2800")
      , [o,s] = c.useState(!1)
      , [l,i] = c.useState(!1)
      , g = zt(2800, 1400, 300)
      , x = zt(28e3, 1400, 300);
    return c.useEffect( () => {
        const m = setTimeout( () => s(!0), 200);
        return rr({
            content_name: "RedeemRewards",
            content_type: "product"
        }),
        () => clearTimeout(m)
    }
    , []),
    a.jsxs("div", {
        className: "min-h-screen bg-[#F5F5F5] max-w-[430px] mx-auto",
        children: [a.jsxs("header", {
            className: "h-[56px] flex items-center justify-between px-4 bg-white sticky top-0 z-50 shadow-sm",
            children: [a.jsx(Me, {
                size: 24,
                className: "text-foreground cursor-pointer active:scale-90 transition-transform duration-150",
                onClick: n
            }), a.jsx("h1", {
                className: "font-bold text-[17px] text-foreground",
                children: "Resgatar recompensas"
            }), a.jsx(or, {
                size: 24,
                className: "text-foreground cursor-pointer active:scale-90 transition-transform duration-150",
                onClick: () => e("/historico")
            })]
        }), a.jsxs("div", {
            className: "mx-4 mt-3 relative transition-all duration-700 ease-out",
            style: {
                opacity: o ? 1 : 0,
                transform: o ? "translateY(0)" : "translateY(12px)"
            },
            children: [a.jsxs("div", {
                className: "bg-foreground rounded-t-[16px] p-5 pb-5 relative overflow-hidden",
                children: [a.jsx("p", {
                    className: "text-white/80 text-[14px]",
                    children: "Seu saldo"
                }), a.jsxs("p", {
                    className: "text-white text-[38px] font-extrabold leading-tight tracking-tight",
                    style: {
                        fontVariantNumeric: "tabular-nums"
                    },
                    children: ["R$ ", g.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2
                    })]
                }), a.jsxs("p", {
                    className: "text-white/60 text-[13px]",
                    style: {
                        fontVariantNumeric: "tabular-nums"
                    },
                    children: ["= ", x.toLocaleString("pt-BR"), " ponto(s)"]
                }), a.jsx("img", {
                    src: sr,
                    alt: "Moeda P",
                    width: 90,
                    height: 90,
                    className: "absolute right-4 top-3 w-[90px] h-[90px] transition-all duration-1000 ease-out",
                    style: {
                        transform: o ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)",
                        opacity: o ? 1 : 0
                    }
                })]
            }), a.jsxs("div", {
                className: "relative bg-foreground",
                children: [a.jsx("div", {
                    className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[20px] h-[20px] rounded-full bg-[#F5F5F5]"
                }), a.jsx("div", {
                    className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[20px] h-[20px] rounded-full bg-[#F5F5F5]"
                }), a.jsx("div", {
                    className: "border-t-[2px] border-dashed border-white/20 mx-5"
                })]
            }), a.jsxs("div", {
                className: "bg-foreground rounded-b-[16px] px-5 py-3 flex items-center justify-between cursor-pointer active:bg-[#333] transition-colors",
                children: [a.jsx("span", {
                    className: "text-white/70 text-[13px]",
                    children: "Suas transações: R$ 0,03"
                }), a.jsx(ot, {
                    size: 18,
                    className: "text-white/70"
                })]
            })]
        }), a.jsxs("div", {
            className: "mx-4 mt-4 bg-white rounded-[16px] p-5 transition-all duration-500 ease-out",
            style: {
                opacity: o ? 1 : 0,
                transform: o ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "200ms"
            },
            children: [a.jsx("h2", {
                className: "font-bold text-[18px] text-foreground mb-3",
                children: "Sacar dinheiro"
            }), a.jsxs("div", {
                className: "flex items-center gap-1 mb-4 flex-wrap",
                children: [a.jsx(ir, {
                    size: 18,
                    className: "text-muted-foreground"
                }), a.jsx("span", {
                    className: "text-muted-foreground text-[13px]",
                    children: "Transferência bancária"
                }), a.jsx("span", {
                    className: "text-muted-foreground text-[13px]",
                    children: "/"
                }), a.jsx("img", {
                    src: Ut,
                    alt: "Pix",
                    loading: "lazy",
                    className: "h-[18px] object-contain"
                }), a.jsx("span", {
                    className: "text-muted-foreground text-[13px]",
                    children: "/"
                }), a.jsx("img", {
                    src: Ga,
                    alt: "PagBank",
                    loading: "lazy",
                    className: "h-[16px] object-contain"
                }), a.jsx("span", {
                    className: "text-muted-foreground text-[13px]",
                    children: "/"
                }), a.jsx("img", {
                    src: In,
                    alt: "PayPal",
                    loading: "lazy",
                    className: "h-[18px] object-contain"
                })]
            }), a.jsx("div", {
                className: "grid grid-cols-4 gap-2 mb-4",
                children: to.map(m => a.jsx("button", {
                    onClick: () => r(m.value),
                    className: `relative rounded-[8px] border-2 aspect-square flex items-center justify-center text-[15px] font-bold transition-all duration-200 active:scale-95 ${t === m.value ? "border-pink text-pink bg-pink/5" : "border-[#E5E7EB] text-foreground hover:border-[#D1D5DB]"}`,
                    children: m.label
                }, m.value))
            }), a.jsx("button", {
                onClick: () => i(!0),
                className: "w-full h-[52px] bg-pink text-white font-bold text-[16px] rounded-[12px] flex items-center justify-center active:scale-[0.98] transition-all duration-150 shadow-[0_4px_14px_rgba(255,59,108,0.3)]",
                children: "Resgatar saldo"
            }), a.jsx("p", {
                className: "text-muted-foreground text-[12px] text-center mt-3 leading-relaxed",
                children: "Para sacar dinheiro, você precisa de um saldo mínimo de R$10. Os limites de saque para transações individuais e mensais podem variar conforme o país ou a região."
            })]
        }), a.jsxs("div", {
            className: "mx-4 mt-4 bg-white rounded-[16px] p-5 relative overflow-hidden transition-all duration-500 ease-out",
            style: {
                opacity: o ? 1 : 0,
                transform: o ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "350ms"
            },
            children: [a.jsxs("div", {
                className: "pr-20",
                children: [a.jsx("h2", {
                    className: "font-bold text-[18px] text-foreground mb-1",
                    children: "Obtenha Moedas para a LIVE"
                }), a.jsx("p", {
                    className: "text-muted-foreground text-[13px] leading-relaxed",
                    children: "Use Moedas para enviar presentes virtuais para seus hosts de LIVE favoritos."
                })]
            }), a.jsx("img", {
                src: eo,
                alt: "Rosa",
                loading: "lazy",
                width: 70,
                height: 70,
                className: "absolute right-4 top-3 w-[70px] h-[70px] object-contain"
            }), a.jsx("button", {
                disabled: !0,
                className: "w-full h-[52px] bg-[#D1D5DB] text-white font-bold text-[16px] rounded-[12px] flex items-center justify-center mt-4 cursor-not-allowed opacity-80",
                children: "Indisponível"
            })]
        }), a.jsxs("div", {
            className: "mx-4 mt-4 mb-6 bg-white rounded-[16px] p-5 transition-all duration-500 ease-out",
            style: {
                opacity: o ? 1 : 0,
                transform: o ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "500ms"
            },
            children: [a.jsxs("div", {
                className: "flex items-center justify-between mb-4",
                children: [a.jsx("h2", {
                    className: "font-bold text-[18px] text-foreground",
                    children: "Recarga móvel"
                }), a.jsxs("div", {
                    className: "flex items-center gap-1",
                    children: [a.jsx("img", {
                        src: Qa,
                        alt: "Claro",
                        loading: "lazy",
                        width: 24,
                        height: 24,
                        className: "h-[24px] w-[24px] object-contain rounded-full"
                    }), a.jsx("span", {
                        className: "text-muted-foreground text-[13px]",
                        children: "/"
                    }), a.jsx("img", {
                        src: _a,
                        alt: "TIM",
                        loading: "lazy",
                        width: 22,
                        height: 22,
                        className: "h-[22px] object-contain"
                    }), a.jsx("span", {
                        className: "text-muted-foreground text-[13px]",
                        children: "/"
                    }), a.jsx("img", {
                        src: $a,
                        alt: "Vivo",
                        loading: "lazy",
                        width: 20,
                        height: 20,
                        className: "h-[20px] object-contain"
                    })]
                })]
            }), a.jsxs("div", {
                className: "flex items-center border-b border-[#E5E7EB] pb-3 mb-4",
                children: [a.jsx("span", {
                    className: "text-muted-foreground text-[16px] mr-3",
                    children: "+55"
                }), a.jsx("div", {
                    className: "w-[1px] h-5 bg-[#E5E7EB] mr-3"
                }), a.jsx("span", {
                    className: "text-muted-foreground text-[16px]",
                    children: "12345678901"
                })]
            }), a.jsx("button", {
                disabled: !0,
                className: "w-full h-[52px] bg-[#D1D5DB] text-white font-bold text-[16px] rounded-[12px] flex items-center justify-center cursor-not-allowed opacity-80",
                children: "Indisponível"
            }), a.jsx("p", {
                className: "text-muted-foreground text-[12px] text-center mt-3 leading-relaxed",
                children: "Você precisa de um saldo mínimo de R$10 para recarga de celular."
            })]
        }), a.jsx(Ja, {
            open: l,
            onOpenChange: i,
            amount: t
        })]
    })
}
;
export {lo as default};
