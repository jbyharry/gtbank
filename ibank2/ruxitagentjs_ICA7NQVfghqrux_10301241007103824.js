/*
 Copyright and licenses see https://www.dynatrace.com/company/trust-center/customers/reports/ */
(function() {
    function La() {
        document.cookie = "".concat("__dTCookie", "=").concat("1", ";SameSite=Lax");
        var Ta = document.cookie.includes("__dTCookie");
        document.cookie = "".concat("__dTCookie", "=").concat("1", "; expires=Thu, 01-Jan-1970 00:00:01 GMT");
        return Ta
    }

    function gb() {
        return void 0 === db.dialogArguments ? navigator.cookieEnabled || La() : La()
    }

    function ob() {
        var Ta;
        if (gb()) {
            var Ua = db.dT_,
                Ya = null === Ua || void 0 === Ua ? void 0 : Ua.platformPrefix,
                Va;
            if (Va = !Ua || Ya) {
                var Qa;
                (Va = null === Ua || void 0 === Ua ? void 0 : Ua.minAgentVersion) &&
                "10301241007103824" < "".concat(Va) ? (console.log("[CookiePrefix/initConfig] Min agent version detected, and javascript agent is older - the javascript agent will not be initialized!"), Va = !1) : (Va = (null === (Qa = document.currentScript) || void 0 === Qa ? void 0 : Qa.getAttribute("data-dtconfig")) || "#CONFIGSTRING#|auto=#AUTO#|domain=#DOMAIN#|rid=RID_#REQUEST_ID#|rpid=#RESPONSE_ID#|app=#APP#", Ya && !Va.includes("cuc=".concat(Ya)) ? (console.log("[CookiePrefix/initConfig] value of platformPrefix [".concat(Ya, '] does not match the "cuc" value in the current config - initConfig will not initialize!')),
                    Va = !1) : Va = !0)
            }
            Va && (Qa = (Ta = {}, Ta.cfg = "#CONFIGSTRING#|auto=#AUTO#|domain=#DOMAIN#|rid=RID_#REQUEST_ID#|rpid=#RESPONSE_ID#|app=#APP#", Ta.iCE = gb, Ta.platformCookieOffset = null === Ua || void 0 === Ua ? void 0 : Ua.platformCookieOffset, Ta), Ya && (Qa.platformPrefix = Ya), db.dT_ = Qa)
        }
    }
    this.dT_ && dT_.prm && dT_.prm();
    var db = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0;
    if (!("documentMode" in document) || isNaN(document.documentMode)) {
        var eb = db.dT_;
        !eb || !eb.cfg && eb.platformPrefix ? ob() : eb.gCP ||
            (db.console.log("Duplicate agent injection detected, turning off redundant initConfig."), eb.di = 1)
    }
})();
(function() {
    function La(g, q, E) {
        if (E || 2 === arguments.length)
            for (var C = 0, W = q.length, M; C < W; C++) !M && C in q || (M || (M = Array.prototype.slice.call(q, 0, C)), M[C] = q[C]);
        return g.concat(M || Array.prototype.slice.call(q))
    }

    function gb(g) {
        var q;
        return function() {
            if (q) return q;
            var E, C, W, M, pb = -1 !== Jf ? Jf : (null === (C = null === (E = Wa.dT_) || void 0 === E ? void 0 : E.scv) || void 0 === C ? void 0 : C.call(E, "postfix")) || (null === (M = null === (W = Wa.dT_) || void 0 === W ? void 0 : W.gCP) || void 0 === M ? void 0 : M.call(W));
            return q = E = (Jf = pb) ? "".concat(g).concat(pb) :
                g
        }
    }

    function ob() {
        var g = 0;
        try {
            g = Math.round(Wa.performance.timeOrigin)
        } catch (q) {}
        if (0 >= g || isNaN(g) || !isFinite(g)) {
            xe.push({
                severity: "Warning",
                type: "ptoi",
                text: "performance.timeOrigin is invalid, with a value of [".concat(g, "]. Falling back to performance.timing.navigationStart")
            });
            g = 0;
            try {
                g = Wa.performance.timing.navigationStart
            } catch (q) {}
            g = 0 >= g || isNaN(g) || !isFinite(g) ? rf : g
        }
        u = g;
        t = db;
        return u
    }

    function db() {
        return u
    }

    function eb() {
        return t()
    }

    function Ta() {
        var g, q = 0;
        if (null === (g = null === Wa || void 0 === Wa ? void 0 :
                Wa.performance) || void 0 === g ? 0 : g.now) try {
            q = Math.round(Wa.performance.now())
        } catch (E) {}
        return 0 >= q || isNaN(q) || !isFinite(q) ? (new Date).getTime() - t() : q
    }

    function Ua(g, q) {
        if (!q) return "";
        var E = g + "=";
        g = q.indexOf(E);
        if (0 > g) return "";
        for (; 0 <= g;) {
            if (0 === g || " " === q.charAt(g - 1) || ";" === q.charAt(g - 1)) return E = g + E.length, g = q.indexOf(";", g), 0 <= g ? q.substring(E, g) : q.substring(E);
            g = q.indexOf(E, g + E.length)
        }
        return ""
    }

    function Ya(g) {
        return Ua(g, document.cookie)
    }

    function Va() {}

    function Qa(g, q) {
        void 0 === q && (q = document.cookie);
        return Ua(g, q)
    }

    function ab() {}

    function vb(g, q) {
        return function() {
            g.apply(q, arguments)
        }
    }

    function na(g) {
        if (!(this instanceof na)) throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof g) throw new TypeError("not a function");
        this.oa = 0;
        this.sc = !1;
        this.sa = void 0;
        this.Ia = [];
        X(g, this)
    }

    function ta(g, q) {
        for (; 3 === g.oa;) g = g.sa;
        0 === g.oa ? g.Ia.push(q) : (g.sc = !0, na.Hb(function() {
            var E = 1 === g.oa ? q.Qe : q.Re;
            if (null === E)(1 === g.oa ? Ha : Fa)(q.promise, g.sa);
            else {
                try {
                    var C = E(g.sa)
                } catch (W) {
                    Fa(q.promise,
                        W);
                    return
                }
                Ha(q.promise, C)
            }
        }))
    }

    function Ha(g, q) {
        try {
            if (q === g) throw new TypeError("A promise cannot be resolved with itself.");
            if (q && ("object" === typeof q || "function" === typeof q)) {
                var E = q.then;
                if (q instanceof na) {
                    g.oa = 3;
                    g.sa = q;
                    pa(g);
                    return
                }
                if ("function" === typeof E) {
                    X(vb(E, q), g);
                    return
                }
            }
            g.oa = 1;
            g.sa = q;
            pa(g)
        } catch (C) {
            Fa(g, C)
        }
    }

    function Fa(g, q) {
        g.oa = 2;
        g.sa = q;
        pa(g)
    }

    function pa(g) {
        2 === g.oa && 0 === g.Ia.length && na.Hb(function() {
            g.sc || na.wc(g.sa)
        });
        for (var q = 0, E = g.Ia.length; q < E; q++) ta(g, g.Ia[q]);
        g.Ia = null
    }

    function S(g,
        q, E) {
        this.Qe = "function" === typeof g ? g : null;
        this.Re = "function" === typeof q ? q : null;
        this.promise = E
    }

    function X(g, q) {
        var E = !1;
        try {
            g(function(C) {
                E || (E = !0, Ha(q, C))
            }, function(C) {
                E || (E = !0, Fa(q, C))
            })
        } catch (C) {
            E || (E = !0, Fa(q, C))
        }
    }

    function ua() {
        Q.Hb = function(g) {
            if ("string" === typeof g) throw Error("Promise polyfill called _immediateFn with string");
            g()
        };
        Q.wc = function() {};
        return Q
    }

    function la(g, q) {
        var E;
        void 0 === q && (q = []);
        if (!g || "object" !== typeof g && "function" !== typeof g) return !1;
        var C = "number" !== typeof q ? q : [],
            W = null,
            M = [];
        switch ("number" === typeof q ? q : 5) {
            case 1:
                W = "Boolean";
                break;
            case 2:
                W = "Number";
                break;
            case 3:
                W = "String";
                break;
            case 4:
                W = "Function";
                break;
            case 5:
                W = "Object";
                break;
            case 6:
                W = "Date";
                M.push("getTime");
                break;
            case 7:
                W = "Error";
                M.push("name", "message");
                break;
            case 8:
                W = "Element";
                break;
            case 9:
                W = "HTMLElement";
                break;
            case 10:
                W = "HTMLImageElement";
                M.push("complete");
                break;
            case 11:
                W = "PerformanceEntry";
                break;
            case 12:
                W = "PerformanceTiming";
                break;
            case 13:
                W = "PerformanceResourceTiming";
                break;
            case 14:
                W = "PerformanceNavigationTiming";
                break;
            case 15:
                W = "CSSRule";
                M.push("cssText", "parentStyleSheet");
                break;
            case 16:
                W = "CSSStyleSheet";
                M.push("cssRules", "insertRule");
                break;
            case 17:
                W = "Request";
                M.push("url");
                break;
            case 18:
                W = "Response";
                M.push("ok", "status", "statusText");
                break;
            case 19:
                W = "Set";
                M.push("add", "entries", "forEach");
                break;
            case 20:
                W = "Map";
                M.push("set", "entries", "forEach");
                break;
            case 21:
                W = "Worker";
                M.push("addEventListener", "postMessage", "terminate");
                break;
            case 22:
                W = "XMLHttpRequest";
                M.push("open", "send", "setRequestHeader");
                break;
            case 23:
                W =
                    "SVGScriptElement";
                M.push("ownerSVGElement", "type");
                break;
            case 24:
                W = "HTMLMetaElement";
                M.push("httpEquiv", "content", "name");
                break;
            case 25:
                W = "HTMLHeadElement";
                break;
            case 26:
                W = "ArrayBuffer";
                break;
            case 27:
                W = "ShadowRoot", M.push("host", "mode")
        }
        q = W;
        if (!q) return !1;
        M = M.length ? M : C;
        if (!C.length) try {
            if (Wa[q] && g instanceof Wa[q] || Object.prototype.toString.call(g) === "[object " + q + "]") return !0;
            if (g && g.nodeType && 1 === g.nodeType) {
                var pb = null === (E = g.ownerDocument.defaultView) || void 0 === E ? void 0 : E[q];
                if ("function" ===
                    typeof pb && g instanceof pb) return !0
            }
        } catch (Ub) {}
        for (E = 0; E < M.length; E++)
            if (C = M[E], "string" !== typeof C && "number" !== typeof C && "symbol" !== typeof C || !(C in g)) return !1;
        return !!M.length
    }

    function fa(g, q, E, C) {
        "undefined" === typeof C && (C = Ma(q, !0));
        "boolean" === typeof C && (C = Ma(q, C));
        g === Wa ? Oa && Oa(q, E, C) : xb && la(g, 21) ? bc.call(g, q, E, C) : g.addEventListener && (g === Wa.document || g === Wa.document.documentElement ? jb.call(g, q, E, C) : Oa.call(g, q, E, C));
        C = !1;
        for (var W = lc.length; 0 <= --W;) {
            var M = lc[W];
            if (M.object === g && M.event ===
                q && M.I === E) {
                C = !0;
                break
            }
        }
        C || lc.push({
            object: g,
            event: q,
            I: E
        })
    }

    function Ga(g, q, E, C) {
        for (var W = lc.length; 0 <= --W;) {
            var M = lc[W];
            if (M.object === g && M.event === q && M.I === E) {
                lc.splice(W, 1);
                break
            }
        }
        "undefined" === typeof C && (C = Ma(q, !0));
        "boolean" === typeof C && (C = Ma(q, C));
        g === Wa ? nb && nb(q, E, C) : g.removeEventListener && (g === Wa.document || g === Wa.document.documentElement ? yb.call(g, q, E, C) : nb.call(g, q, E, C))
    }

    function Ma(g, q) {
        var E = !1;
        try {
            if (Oa && Uc.includes(g)) {
                var C = Object.defineProperty({}, "passive", {
                    get: function() {
                        E = !0
                    }
                });
                Oa("test",
                    Va, C)
            }
        } catch (W) {}
        return E ? {
            passive: !0,
            capture: q
        } : q
    }

    function qa() {
        for (var g = lc, q = g.length; 0 <= --q;) {
            var E = g[q];
            Ga(E.object, E.event, E.I)
        }
        lc = []
    }

    function ra(g) {
        return "function" === typeof g && /{\s+\[native code]/.test(Function.prototype.toString.call(g))
    }

    function N(g, q) {
        for (var E, C = [], W = 2; W < arguments.length; W++) C[W - 2] = arguments[W];
        return void 0 !== Function.prototype.bind && ra(Function.prototype.bind) ? (E = Function.prototype.bind).call.apply(E, La([g, q], C, !1)) : function() {
            for (var M = 0; M < arguments.length; M++);
            return g.apply(q,
                (C || []).concat(Array.prototype.slice.call(arguments) || []))
        }
    }

    function Z() {
        if (Qc) {
            var g = new Qc;
            if (Yc)
                for (var q = 0, E = sc; q < E.length; q++) {
                    var C = E[q];
                    void 0 !== Yc[C] && (g[C] = N(Yc[C], g))
                }
            return g
        }
        return new Wa.XMLHttpRequest
    }

    function D() {
        document.cookie = "".concat("__dTCookie", "=").concat("1", ";SameSite=Lax");
        var g = document.cookie.includes("__dTCookie");
        document.cookie = "".concat("__dTCookie", "=").concat("1", "; expires=Thu, 01-Jan-1970 00:00:01 GMT");
        return g
    }

    function P() {
        return void 0 === Wa.dialogArguments ? navigator.cookieEnabled ||
            D() : D()
    }

    function Y() {
        return Wa.dT_
    }

    function ma(g) {
        g = encodeURIComponent(g);
        var q = [];
        if (g)
            for (var E = 0; E < g.length; E++) {
                var C = g.charAt(E);
                q.push(Xf[C] || C)
            }
        return q.join("")
    }

    function ea(g) {
        g.includes("^") && (g = g.split("^^").join("^"), g = g.split("^dq").join('"'), g = g.split("^rb").join(">"), g = g.split("^lb").join("<"), g = g.split("^p").join("|"), g = g.split("^e").join("="), g = g.split("^s").join(";"), g = g.split("^c").join(","), g = g.split("^bs").join("\\"));
        return g
    }

    function U() {
        return sd
    }

    function va(g) {
        sd = g
    }

    function Sa(g) {
        var q =
            G("rid"),
            E = G("rpid");
        q && (g.rid = q);
        E && (g.rpid = E)
    }

    function bb(g) {
        if (g = g.xb) {
            g = ea(g);
            try {
                sd = new RegExp(g, "i")
            } catch (q) {}
        } else sd = void 0
    }

    function Db(g) {
        return "n" === g || "s" === g || "l" === g ? ";SameSite=".concat(le[g]) : ""
    }

    function Wb(g, q, E) {
        var C = 1,
            W = 0;
        do document.cookie = g + '=""' + (q ? ";domain=" + q : "") + ";path=" + E.substring(0, C) + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;", C = E.indexOf("/", C), W++; while (-1 !== C && 5 > W)
    }

    function oa() {
        var g = (document.domain || location.hostname || "").split(".");
        return 1 >= g.length ? [] : g
    }

    function Eb(g,
        q) {
        q = "dTValidationCookieValue;path=/;domain=".concat(g).concat(Db(q));
        document.cookie = "".concat(Yf(), "=").concat(q);
        return Qa(Yf()) ? (Wb(Yf(), g, "/"), !0) : !1
    }

    function wc(g) {
        B("eao") ? ye = g : Wa.console.log("".concat(Ad, " App override configuration is not enabled! The provided app config callback method will not be invoked!"))
    }

    function Gc() {
        if (Wa.MobileAgent || Wa.dynatraceMobile) {
            var g = Ya("dtAdkSettings");
            return zb(g).privacyState || null
        }
        return null
    }

    function hb(g, q) {
        return !Rb() || Y().overloadPrevention && !ha() ?
            null : g.apply(this, q)
    }

    function Rb() {
        var g = Gc();
        return 2 === g || 1 === g ? !1 : !B("coo") || B("cooO") || ha()
    }

    function ec(g, q) {
        try {
            Wa.sessionStorage.setItem(g, q)
        } catch (E) {}
    }

    function Qb(g, q) {
        hb(ec, [g, q])
    }

    function Cc(g) {
        try {
            return Wa.sessionStorage.getItem(g)
        } catch (q) {}
        return null
    }

    function dc(g) {
        try {
            Wa.sessionStorage.removeItem(g)
        } catch (q) {}
    }

    function ic(g) {
        document.cookie = g + '="";path=/' + (G("domain") ? ";domain=" + G("domain") : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    }

    function Pb(g, q, E, C) {
        q || 0 === q ? (q = (q + "").replace(/[;\n\r]/g,
            "_"), g = g + "=" + q + ";path=/" + (G("domain") ? ";domain=" + G("domain") : ""), E && (g += ";expires=" + E.toUTCString()), g += Db(G("cssm")), C && "https:" === location.protocol && (g += ";Secure"), document.cookie = g) : ic(g)
    }

    function Kb(g, q, E, C) {
        hb(Pb, [g, q, E, C])
    }

    function Gb(g) {
        return g.includes("v_4") ? !0 : !1
    }

    function pc(g) {
        g = Qa(kd(), g);
        g || ((g = Cc(kd())) && Gb(g) ? Bb(g) : g = "");
        return Gb(g) ? g : ""
    }

    function Bb(g) {
        Kb(kd(), g, void 0, B("ssc"))
    }

    function F(g) {
        return (g = g || pc()) ? zb(g) : {
            sessionId: "",
            serverId: "",
            overloadState: 0,
            appState: {}
        }
    }

    function ka(g) {
        return F(g).serverId
    }

    function Ea(g) {
        return F(g).sessionId
    }

    function ha() {
        return navigator.userAgent.includes("RuxitSynthetic")
    }

    function wb(g) {
        var q = {},
            E = 0;
        for (g = g.split("|"); E < g.length; E++) {
            var C = g[E].split("=");
            2 === C.length && (q[C[0]] = decodeURIComponent(C[1].replace(/\+/g, " ")))
        }
        return q
    }

    function tb() {
        var g = G("csu");
        return (g.indexOf("dbg") === g.length - 3 ? g.substring(0, g.length - 3) : g) + "_" + G("app") + "_Store"
    }

    function Za(g, q, E) {
        void 0 === q && (q = {});
        var C = 0;
        for (g = g.split("|"); C < g.length; C++) {
            var W = g[C],
                M = W,
                pb = W.indexOf("="); - 1 ===
                pb ? q[M] = "1" : (M = W.substring(0, pb), q[M] = W.substring(pb + 1, W.length))
        }!E && (E = q, C = E.spc) && (g = document.createElement("textarea"), g.innerHTML = C, E.spc = g.value);
        return q
    }

    function w(g) {
        var q;
        return null !== (q = kc[g]) && void 0 !== q ? q : Id[g]
    }

    function B(g) {
        g = w(g);
        return "false" === g || "0" === g ? !1 : !!g
    }

    function J(g) {
        var q = w(g);
        q = parseInt(q);
        isNaN(q) && (q = Id[g]);
        return q
    }

    function G(g) {
        if ("app" === g) {
            a: {
                try {
                    if (ye) {
                        var q = ye();
                        if (q && "string" === typeof q && td.test(q)) {
                            var E = q;
                            break a
                        }
                        Wa.console.log("".concat(Ad, " Registered app config callback method did not return a string in the correct app id format ").concat(td) +
                            " The default app ID will be used instead! Got value: ".concat(q))
                    }
                } catch (C) {
                    Wa.console.log("".concat(Ad, " Failed to execute the registered app config callback method! The default app ID will be used instead!"), C)
                }
                E = void 0
            }
            if (E) return E
        }
        return (w(g) || "") + ""
    }

    function T(g, q) {
        kc[g] = q + ""
    }

    function H(g) {
        return kc = g
    }

    function Na(g) {
        var q = kc[g];
        q && (kc[g] = q.includes("#" + g.toUpperCase()) ? "" : q)
    }

    function ia(g) {
        var q = g.agentUri;
        (null === q || void 0 === q ? 0 : q.includes("_")) && (q = /([a-zA-Z]*)[0-9]{0,4}_([a-zA-Z_0-9]*)_[0-9]+/g.exec(q)) &&
        q.length && 2 < q.length && (g.csu = q[1], g.featureHash = q[2])
    }

    function Ia(g) {
        var q = Y().platformCookieOffset;
        if ("number" === typeof q) {
            a: {
                var E = G("cssm");
                var C = oa();
                if (C.length)
                    for (q = C.slice(q); q.length;) {
                        if (Eb(q.join("."), E)) {
                            E = q.join(".");
                            break a
                        }
                        q.shift()
                    }
                E = ""
            }
            E && (g.domain = E)
        }
        else if (E = g.domain || "", q = (q = location.hostname) && E ? q === E || q.includes("." + E, q.length - ("." + E).length) : !0, !E || !q) {
            g.domainOverride || (g.domainOriginal = g.domain || "", g.domainOverride = "".concat(location.hostname, ",").concat(E), delete g.domain);
            a: {
                C = G("cssm");
                var W = oa().reverse();
                if (W.length)
                    for (var M = W[0], pb = 1; pb <= W.length; pb++) {
                        if (Eb(M, C)) {
                            C = M;
                            break a
                        }
                        var Ub = W[pb];
                        Ub && (M = "".concat(Ub, ".").concat(M))
                    }
                C = ""
            }
            C && (g.domain = C);
            q || xe.push({
                type: "dpi",
                severity: "Warning",
                text: 'Configured domain "'.concat(E, '" is invalid for current location "').concat(location.hostname, '". Agent will use "').concat(g.domain, '" instead.')
            })
        }
    }

    function Ca(g, q) {
        Ia(g);
        var E = kc.pVO;
        E && (g.pVO = E);
        q || (g.bp = (g.bp || Id.bp) + "")
    }

    function rb(g, q) {
        if (null === g || void 0 === g || !g.attributes) return q;
        var E = q,
            C = g.attributes.getNamedItem("data-dtconfig");
        if (!C) return E;
        g = g.src;
        var W = C.value;
        C = {};
        kc.legacy = "1";
        var M = /([a-zA-Z]*)_([a-zA-Z_0-9]*)_([0-9]+)/g;
        if (g) {
            var pb = M.exec(g);
            if (null === pb || void 0 === pb ? 0 : pb.length) C.csu = pb[1], C.featureHash = pb[2], C.agentLocation = g.substring(0, g.indexOf(pb[1]) - 1), C.buildNumber = pb[3]
        }
        W && (Za(W, C, !0), W = C.agentUri, !g && W && (pb = M.exec(W), null === pb || void 0 === pb ? 0 : pb.length)) && (C.csu = pb[1]);
        Ia(C);
        if (!q) E = C;
        else if (!C.syntheticConfig) return C;
        return E
    }

    function Ab() {
        return kc
    }

    function qb(g) {
        return Id[g] === w(g)
    }

    function zb(g) {
        var q, E = {},
            C = {
                sessionId: "",
                serverId: "",
                overloadState: 0,
                appState: E
            },
            W = g.split("_");
        if (2 < W.length && 0 === W.length % 2) {
            g = +W[1];
            if (isNaN(g) || 3 > g) return C;
            g = {};
            for (var M = 2; M < W.length; M++) {
                var pb = W[M];
                pb.startsWith(Ge) ? E[pb.substring(6).toLowerCase()] = +W[M + 1] : g[pb] = W[M + 1];
                M++
            }
            g.sn ? (W = g.sn, W = W.length === id || 12 >= W.length ? W : "") : W = "hybrid";
            C.sessionId = W;
            if (g.srv) {
                a: {
                    W = g.srv.replace("-2D", "-");
                    if (!isNaN(+W) && (M = parseInt(W), -99 <= M && 99 >= M)) break a;W = ""
                }
                C.serverId =
                W
            }
            W = +g.ol;
            1 === W && Ib(ha());
            0 <= W && 2 >= W && (C.overloadState = W);
            g = +g.prv;
            isNaN(g) || (C.privacyState = 1 > g || 4 < g ? 1 : g);
            g = null === (q = G("app")) || void 0 === q ? void 0 : q.toLowerCase();
            q = E[g];
            isNaN(q) || 0 !== q || Ib(ha())
        }
        return C
    }

    function Ib(g) {
        var q = Y();
        g || (q.disabled = !0, q.overloadPrevention = !0)
    }

    function ub() {
        return Ac()
    }

    function Sb(g, q) {
        function E() {
            delete me[M];
            g.apply(this, arguments)
        }
        for (var C = [], W = 2; W < arguments.length; W++) C[W - 2] = arguments[W];
        if ("apply" in Zf) {
            C.unshift(E, q);
            var M = Zf.apply(Wa, C)
        } else M = Zf(E, q);
        me[M] = !0;
        return M
    }

    function nc(g) {
        delete me[g];
        "apply" in Oe ? Oe.call(Wa, g) : Oe(g)
    }

    function Kc(g) {
        ce.push(g)
    }

    function de(g) {
        for (var q = ce.length; q--;)
            if (ce[q] === g) {
                ce.splice(q, 1);
                break
            }
    }

    function Hc() {
        return ce
    }

    function Lc(g, q) {
        return kh(g, q)
    }

    function Mc(g) {
        Kf(g)
    }

    function Jd(g, q) {
        if (!Lf || !Cg) return "";
        g = new Lf([g], {
            type: q
        });
        return Cg(g)
    }

    function od(g, q) {
        return bf ? new bf(g, q) : void 0
    }

    function ya(g) {
        "function" === typeof g && Dg.push(g)
    }

    function I() {
        return Dg
    }

    function ca() {
        return rf
    }

    function Ba(g) {
        return function() {
            for (var q = [], E = 0; E < arguments.length; E++) q[E] = arguments[E];
            if ("number" !== typeof q[0] || !me[q[0]]) try {
                return g.apply(this, q)
            } catch (C) {
                return g(q[0])
            }
        }
    }

    function Da() {
        return xe
    }

    function za() {
        t = ob;
        Wa.performance && (Ac = function() {
            return Math.round(t() + Ta())
        });
        if (!Ac || isNaN(Ac()) || 0 >= Ac() || !isFinite(Ac())) Ac = function() {
            return (new Date).getTime()
        }
    }

    function Ja() {
        ze && (Wa.clearTimeout = Oe, Wa.clearInterval = Kf, ze = !1)
    }

    function wa(g, q) {
        try {
            Wa.localStorage.setItem(g, q)
        } catch (E) {}
    }

    function Ka(g) {
        try {
            Wa.localStorage.removeItem(g)
        } catch (q) {}
    }

    function kb(g) {
        try {
            return Wa.localStorage.getItem(g)
        } catch (q) {}
        return null
    }

    function Ra(g, q) {
        void 0 === q && (q = !1);
        Rb() ? g() : q ? Yd.push(g) : Kd.push(g)
    }

    function lb() {
        if (!B("coo") || Rb()) return !1;
        for (var g = 0, q = Kd; g < q.length; g++) Sb(q[g], 0);
        Kd = [];
        T("cooO", !0);
        g = 0;
        for (q = Yd; g < q.length; g++)(0, q[g])();
        Yd.length = 0;
        return !0
    }

    function Yb() {
        if (!B("coo") || !Rb()) return !1;
        T("cooO", !1);
        ic(kd());
        ic(ee());
        ic(Jh());
        ic("dtAdk");
        ic(dd());
        ic(md());
        try {
            dc($c()), dc(md()), Ka($c()), Ka(md()), dc(dd()), dc(kd()), Ka(tb()), Ka("dtAdk")
        } catch (g) {}
        return !0
    }

    function Ob(g, q) {
        void 0 === q && (q = document.cookie || "");
        return q.split(g + "=").length - 1
    }

    function Jb(g, q) {
        var E = Ob(g, q);
        if (1 < E) {
            q = G("domain") || Wa.location.hostname;
            var C = Wa.location.hostname,
                W = Wa.location.pathname,
                M = 0,
                pb = 0;
            Zc.add(g);
            do {
                var Ub = C.substring(M);
                if (Ub !== q || "/" !== W) {
                    Wb(g, Ub === q ? "" : Ub, W);
                    var gc = Ob(g);
                    gc < E && (Zc.add(Ub), E = gc)
                }
                M = C.indexOf(".", M) + 1;
                pb++
            } while (0 !== M && 10 > pb && 1 < E);
            G("domain") && 1 < E && Wb(g, "", W)
        }
    }

    function mc() {
        var g = document.cookie;
        Jb(ee(), g);
        Jb(kd(), g);
        Jb(md(), g);
        g = Zc.size;
        0 < g && g !== He &&
            (He = g, xe.push({
                severity: "Error",
                type: "dcn",
                text: "Duplicate cookie name".concat(1 !== g ? "s" : "", " detected: ").concat(Array.from(Zc).join(","))
            }))
    }

    function Vc() {
        Zc = new Set;
        mc();
        Kc(function(g, q, E, C) {
            0 === Zc.size || q || (g.av(C, "dCN", Array.from(Zc).join(",")), Zc.clear(), He = 0)
        })
    }

    function pd() {
        return navigator.userAgent.includes("Googlebot") || navigator.userAgent.includes("AdsBot-Google")
    }

    function qd(g) {
        var q = g,
            E = Math.pow(2, 32);
        return function() {
            q = (1664525 * q + 1013904223) % E;
            return q / E
        }
    }

    function ad(g, q) {
        return isNaN(g) ||
            isNaN(q) ? Math.floor(33 * ne()) : Math.floor(ne() * (q - g + 1)) + g
    }

    function Ud(g) {
        if (isNaN(g) || 0 > g) return "";
        var q = Wa.crypto;
        if (q && !pd()) q = q.getRandomValues(new Uint8Array(g));
        else {
            q = [];
            for (var E = 0; E < g; E++) q.push(ad(0, 32))
        }
        g = Array(g);
        for (E = 0; E < q.length; E++) {
            var C = Math.abs(q[E] % 32);
            g.push(String.fromCharCode(C + (9 >= C ? 48 : 55)))
        }
        return g.join("")
    }

    function Vd() {
        return Ld
    }

    function ed(g) {
        void 0 === g && (g = !0);
        $f = g
    }

    function fd() {
        var g = Wa.dT_;
        try {
            for (var q = Wa.parent; q && q !== Wa;) {
                var E = q.dT_,
                    C;
                if (C = !!(E && "ea" in E) && "10301241007103824" ===
                    E.version) {
                    var W = g,
                        M = E,
                        pb = !W.bcv("ac") || W.scv("app") === M.scv("app"),
                        Ub = W.scv("postfix"),
                        gc = M.scv("postfix");
                    C = pb && Ub === gc
                }
                if (C) return E.tdto();
                q = q !== q.parent ? q.parent : void 0
            }
        } catch (Sc) {}
        return g
    }

    function Rc(g, q, E) {
        var C = J("pcl");
        C = g.length - C;
        0 < C && g.splice(0, C);
        C = ka(Qa(kd(), E));
        for (var W = [], M = C ? "".concat(C, "$") : "", pb = 0; pb < g.length; pb++) {
            var Ub = g[pb];
            "-" !== Ub.D && W.push("".concat(M).concat(Ub.frameId, "h").concat(Ub.D))
        }
        g = W.join("p");
        g || ($f && (Nc(!0, "a", E), ed(!1)), g += "".concat(C, "$").concat(Ld, "h-"));
        g += "v".concat(q || ud(E));
        q = g + "e0";
        Kb(ee(), q, void 0, B("ssc"))
    }

    function Wd(g, q) {
        void 0 === q && (q = document.cookie);
        var E = Qa(ee(), q);
        q = [];
        if (E && "-" !== E) {
            var C = "";
            var W = 0;
            for (E = E.split("p"); W < E.length; W++) {
                var M = E[W],
                    pb = C;
                void 0 === pb && (pb = "");
                var Ub = M.indexOf("h");
                var gc = M.indexOf("v"),
                    Sc = M.indexOf("e");
                C = M.substring(M.indexOf("$") + 1, Ub);
                Ub = -1 !== gc ? M.substring(Ub + 1, gc) : M.substring(Ub + 1);
                pb || -1 === gc || (pb = -1 !== Sc ? M.substring(gc + 1, Sc) : M.substring(gc + 1));
                M = null;
                (gc = g) || (gc = parseInt(C.split("_")[0]), Sc = Ac() % Pe,
                    Sc < gc && (Sc += Pe), gc = gc + 9E5 > Sc);
                gc && (M = {
                    frameId: C,
                    D: "-" === Ub ? "-" : parseInt(Ub),
                    visitId: ""
                });
                C = pb;
                (Ub = M) && q.push(Ub)
            }
            for (g = 0; g < q.length; g++) q[g].visitId = C
        }
        return q
    }

    function gd(g, q) {
        var E = document.cookie;
        q = Wd(q, E);
        for (var C = !1, W = 0; W < q.length; W++) {
            var M = q[W];
            M.frameId === Ld && (M.D = g, C = !0)
        }
        C || q.push({
            frameId: Ld,
            D: g,
            visitId: ""
        });
        Rc(q, void 0, E)
    }

    function Cd() {
        return sf
    }

    function ud(g) {
        return Md(g) || Nc(!0, "c", g)
    }

    function Md(g) {
        if (da(g) <= Ac()) return Nc(!0, "t", g);
        var q = Bd(g);
        if (!q) return Nc(!0, "c", g);
        var E = Kh.exec(q);
        if (!E || 3 !== E.length || 32 !== E[1].length || isNaN(parseInt(E[2]))) return Nc(!0, "i", g);
        Qb($c(), q);
        return q
    }

    function rd(g, q) {
        var E = Ac();
        q = V(q).Pc;
        g && (q = E);
        y(E + tf + "|" + q);
        n()
    }

    function Nd(g) {
        var q = "t" + (Ac() - da(g));
        Nc(!0, q, g)
    }

    function Bd(g) {
        var q, E;
        return null !== (E = null === (q = Wd(!0, g)[0]) || void 0 === q ? void 0 : q.visitId) && void 0 !== E ? E : Cc($c())
    }

    function Dd() {
        var g = Ud(id);
        try {
            g = g.replace(/[0-9]/g, function(q) {
                return String.fromCharCode(Math.floor(2.5 * parseInt(q) + 65))
            })
        } catch (q) {
            throw la(q, 7), q;
        }
        return g + "-0"
    }

    function Xc(g,
        q) {
        var E = Wd(!1, q);
        Rc(E, g, q);
        Qb($c(), g);
        rd(!0)
    }

    function vd(g, q, E) {
        return Nc(g, q, E)
    }

    function Nc(g, q, E) {
        g && (oe = !0);
        g = Bd(E);
        E = Dd();
        Xc(E);
        if (Bd(document.cookie))
            for (var C = 0, W = Ug; C < W.length; C++)(0, W[C])(E, oe, q, g);
        return E
    }

    function fe(g) {
        Ug.push(g)
    }

    function n(g) {
        Mf && nc(Mf);
        Mf = Sb(v, da(g) - Ac())
    }

    function v() {
        var g = document.cookie;
        if (da(g) <= Ac()) return hb(Nd, [g]), !0;
        Ra(n);
        return !1
    }

    function y(g) {
        var q = N(Kb, null, md(), g, void 0, B("ssc"));
        q();
        var E = Qa(md());
        "" !== E && g !== E && (mc(), q(), g === Qa(md()) || Eg || (xe.push({
            severity: "Error",
            type: "dcn",
            text: "Could not sanitize cookies"
        }), Eg = !0));
        Qb(md(), g)
    }

    function K(g, q) {
        (q = Qa(g, q)) || (q = Cc(g) || "");
        return q
    }

    function O() {
        var g = Md() || "";
        Qb($c(), g);
        g = K(md());
        y(g);
        Ka($c());
        Ka(md())
    }

    function V(g) {
        var q = {
            Wd: 0,
            Pc: 0
        };
        if (g = K(md(), g)) try {
            var E = g.split("|");
            2 === E.length && (q.Wd = parseInt(E[0]), q.Pc = parseInt(E[1]))
        } catch (C) {}
        return q
    }

    function da(g) {
        g = V(g);
        return Math.min(g.Wd, g.Pc + Fg)
    }

    function xa(g) {
        tf = g
    }

    function $a() {
        var g = oe;
        oe = !1;
        return g
    }

    function Xa() {
        v() || rd(!1)
    }

    function mb() {
        var g = Qa(dd());
        g &&
            45 === (null === g || void 0 === g ? void 0 : g.length) || (g = kb(dd()) || Cc(dd()), 45 !== (null === g || void 0 === g ? void 0 : g.length) && (uf = !0, g = Ac() + "", g += Ud(45 - g.length)));
        Tb(g);
        return g
    }

    function Tb(g) {
        if (B("dpvc") || B("pVO")) Qb(dd(), g);
        else {
            var q = new Date;
            var E = q.getMonth() + Math.min(24, Math.max(1, J("rvcl")));
            q.setMonth(E);
            E = dd();
            hb(wa, [E, g])
        }
        Kb(dd(), g, q, B("ssc"))
    }

    function Dc() {
        return uf
    }

    function Ec(g) {
        var q = Qa(dd());
        ic(dd());
        dc(dd());
        Ka(dd());
        T("pVO", !0);
        Tb(q);
        g && hb(wa, ["dt-pVO", "1"]);
        O()
    }

    function Pc() {
        Ka("dt-pVO");
        B("pVO") &&
            (T("pVO", !1), mb());
        dc(dd());
        O()
    }

    function Ic(g, q, E, C, W) {
        var M = document.createElement("script");
        M.setAttribute("src", g);
        q && M.setAttribute("defer", "defer");
        E && (M.onload = E);
        C && (M.onerror = C);
        W && M.setAttribute("id", W);
        M.setAttribute("crossorigin", "anonymous");
        g = document.getElementsByTagName("script")[0];
        g.parentElement.insertBefore(M, g)
    }

    function Ed(g, q) {
        return Vg + "/" + (q || ge) + "_" + g + "_" + (J("buildNumber") || Y().version) + ".js"
    }

    function pe() {
        var g, q;
        try {
            null === (q = null === (g = Wa.MobileAgent) || void 0 === g ? void 0 :
                g.incrementActionCount) || void 0 === q ? void 0 : q.call(g)
        } catch (E) {}
    }

    function Ie() {
        var g, q = Wa.dT_;
        Wa.dT_ = (g = {}, g.di = 0, g.version = "10301241007103824", g.cfg = q ? q.cfg : "", g.iCE = q ? P : function() {
                return navigator.cookieEnabled
            }, g.ica = 1, g.disabled = !1, g.disabledReason = "", g.overloadPrevention = !1, g.gAST = ca, g.ww = od, g.stu = Jd, g.nw = ub, g.st = Sb, g.si = Lc, g.aBPSL = Kc, g.rBPSL = de, g.gBPSL = Hc, g.aBPSCC = ya, g.gBPSCC = I, g.buildType = "dynatrace", g.gSSV = Cc, g.sSSV = Qb, g.rSSV = dc, g.rvl = Ka, g.iVSC = Gb, g.p3SC = zb, g.dC = ic, g.sC = Kb, g.esc = ma, g.gSId =
            ka, g.gDtc = Ea, g.gSC = pc, g.sSC = Bb, g.gC = Ya, g.cRN = ad, g.cRS = Ud, g.cfgO = Ab, g.pCfg = wb, g.pCSAA = Za, g.cFHFAU = ia, g.sCD = Ca, g.bcv = B, g.ncv = J, g.scv = G, g.stcv = T, g.rplC = H, g.cLSCK = tb, g.gFId = Vd, g.gBAU = Ed, g.iS = Ic, g.eWE = Ra, g.oEIEWA = hb, g.eA = lb, g.dA = Yb, g.iNV = Dc, g.gVID = mb, g.dPV = Ec, g.ePV = Pc, g.sVIdUP = ed, g.sVTT = xa, g.sVID = Xc, g.rVID = Md, g.gVI = ud, g.gNVIdN = vd, g.gARnVF = $a, g.cAUV = Xa, g.uVT = rd, g.aNVL = fe, g.gPC = Wd, g.cPC = gd, g.sPC = Rc, g.clB = Ja, g.ct = nc, g.aRI = Sa, g.iXB = bb, g.gXBR = U, g.sXBR = va, g.de = ea, g.iEC = pe, g.rnw = Ta, g.gto = eb, g.ael = fa, g.rel = Ga,
            g.sup = Ma, g.cuel = qa, g.iAEPOO = Rb, g.iSM = ha, g.gxwp = Z, g.iIO = la, g.prm = ua, g.cI = Mc, g.gidi = Da, g.iDCV = qb, g.gCF = Qa, g.gPSMB = Gc, g.lvl = kb, g.gCP = (null === q || void 0 === q ? 0 : q.platformPrefix) ? function() {
                return q.platformPrefix || ""
            } : void 0, g.platformCookieOffset = null === q || void 0 === q ? void 0 : q.platformCookieOffset, g.tdto = fd, g.gFLAI = Cd, g.rACC = wc, g)
    }

    function lh() {
        if (B("nsfnv")) {
            var g = Qa(kd());
            if (!g.includes("".concat(Rd, "-"))) {
                var q = zb(g).serverId;
                g = g.replace("".concat(Rd).concat(q), "".concat(Rd).concat("".concat(-1 * ad(2,
                    99)).replace("-", "-2D")));
                Bb(g)
            }
        }
    }

    function ag() {
        Ra(function() {
            if (!Ea()) {
                var g = -1 * ad(2, 99),
                    q = Ud(id);
                Bb("v_4".concat(Rd).concat("".concat(g).replace("-", "-2D"), "_sn_").concat(q))
            }
        }, !0);
        fe(lh)
    }

    function Qe() {
        for (var g = [], q = 0; q < arguments.length; q++) g[q] = arguments[q];
        Wa.console.log.apply(Wa.console, g)
    }
    this.dT_ && dT_.prm && dT_.prm();
    var Wa = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        bg;
    (function(g) {
        g[g.ENABLED = 0] = "ENABLED";
        g[g.DISABLED = 1] = "DISABLED";
        g[g.DELAYED = 2] =
            "DELAYED"
    })(bg || (bg = {}));
    var vf;
    (function(g) {
        g[g.BLOCKED_BY_PERCENTAGE = 0] = "BLOCKED_BY_PERCENTAGE";
        g[g.ENABLED = 1] = "ENABLED";
        g[g.BLOCKED = 2] = "BLOCKED"
    })(vf || (vf = {}));
    var Re;
    (function(g) {
        g[g.NONE = 1] = "NONE";
        g[g.OFF = 2] = "OFF";
        g[g.PERFORMANCE = 3] = "PERFORMANCE";
        g[g.BEHAVIOR = 4] = "BEHAVIOR"
    })(Re || (Re = {}));
    var Gg;
    (function(g) {
        g.OVERLOAD_PREVENTION = "ol";
        g.PRIVACY_STATE = "prv";
        g.SERVER_ID = "srv";
        g.SESSION_ID = "sn"
    })(Gg || (Gg = {}));
    var he;
    (function(g) {
        g.DYNATRACE_MOBILE = "dynatraceMobile";
        g.MOBILE_AGENT = "MobileAgent"
    })(he ||
        (he = {}));
    var cf;
    (function(g) {
        g[g.ARRAY = 0] = "ARRAY";
        g[g.BOOLEAN = 1] = "BOOLEAN";
        g[g.NUMBER = 2] = "NUMBER";
        g[g.STRING = 3] = "STRING";
        g[g.FUNCTION = 4] = "FUNCTION";
        g[g.OBJECT = 5] = "OBJECT";
        g[g.DATE = 6] = "DATE";
        g[g.ERROR = 7] = "ERROR";
        g[g.ELEMENT = 8] = "ELEMENT";
        g[g.HTML_ELEMENT = 9] = "HTML_ELEMENT";
        g[g.HTML_IMAGE_ELEMENT = 10] = "HTML_IMAGE_ELEMENT";
        g[g.PERFORMANCE_ENTRY = 11] = "PERFORMANCE_ENTRY";
        g[g.PERFORMANCE_TIMING = 12] = "PERFORMANCE_TIMING";
        g[g.PERFORMANCE_RESOURCE_TIMING = 13] = "PERFORMANCE_RESOURCE_TIMING";
        g[g.PERFORMANCE_NAVIGATION_TIMING =
            14] = "PERFORMANCE_NAVIGATION_TIMING";
        g[g.CSS_RULE = 15] = "CSS_RULE";
        g[g.CSS_STYLE_SHEET = 16] = "CSS_STYLE_SHEET";
        g[g.REQUEST = 17] = "REQUEST";
        g[g.RESPONSE = 18] = "RESPONSE";
        g[g.SET = 19] = "SET";
        g[g.MAP = 20] = "MAP";
        g[g.WORKER = 21] = "WORKER";
        g[g.XML_HTTP_REQUEST = 22] = "XML_HTTP_REQUEST";
        g[g.SVG_SCRIPT_ELEMENT = 23] = "SVG_SCRIPT_ELEMENT";
        g[g.HTML_META_ELEMENT = 24] = "HTML_META_ELEMENT";
        g[g.HTML_HEAD_ELEMENT = 25] = "HTML_HEAD_ELEMENT";
        g[g.ARRAY_BUFFER = 26] = "ARRAY_BUFFER";
        g[g.SHADOW_ROOT = 27] = "SHADOW_ROOT"
    })(cf || (cf = {}));
    var Jf = -1,
        ee =
        gb("dtPC"),
        kd = gb("dtCookie"),
        md = gb("rxvt"),
        dd = gb("rxVisitor"),
        Yf = gb("dTValidationCookie"),
        Jh = gb("dtSa"),
        u, t, z = setTimeout;
    na.prototype["catch"] = function(g) {
        return this.then(null, g)
    };
    na.prototype.then = function(g, q) {
        var E = new this.constructor(ab);
        ta(this, new S(g, q, E));
        return E
    };
    na.prototype["finally"] = function(g) {
        var q = this.constructor;
        return this.then(function(E) {
            return q.resolve(g()).then(function() {
                return E
            })
        }, function(E) {
            return q.resolve(g()).then(function() {
                return q.reject(E)
            })
        })
    };
    na.all = function(g) {
        return new na(function(q,
            E) {
            function C(Ub, gc) {
                try {
                    if (gc && ("object" === typeof gc || "function" === typeof gc)) {
                        var Sc = gc.then;
                        if ("function" === typeof Sc) {
                            Sc.call(gc, function(Ae) {
                                C(Ub, Ae)
                            }, E);
                            return
                        }
                    }
                    W[Ub] = gc;
                    0 === --M && q(W)
                } catch (Ae) {
                    E(Ae)
                }
            }
            if (!g || "undefined" === typeof g.length) return E(new TypeError("Promise.all accepts an array"));
            var W = Array.prototype.slice.call(g);
            if (0 === W.length) return q([]);
            for (var M = W.length, pb = 0; pb < W.length; pb++) C(pb, W[pb])
        })
    };
    na.allSettled = function(g) {
        return new this(function(q, E) {
            function C(pb, Ub) {
                if (Ub &&
                    ("object" === typeof Ub || "function" === typeof Ub)) {
                    var gc = Ub.then;
                    if ("function" === typeof gc) {
                        gc.call(Ub, function(Sc) {
                            C(pb, Sc)
                        }, function(Sc) {
                            W[pb] = {
                                status: "rejected",
                                reason: Sc
                            };
                            0 === --M && q(W)
                        });
                        return
                    }
                }
                W[pb] = {
                    status: "fulfilled",
                    value: Ub
                };
                0 === --M && q(W)
            }
            if (!g || "undefined" === typeof g.length) return E(new TypeError(typeof g + " " + g + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var W = Array.prototype.slice.call(g);
            if (0 === W.length) return q([]);
            var M = W.length;
            for (E = 0; E < W.length; E++) C(E, W[E])
        })
    };
    na.resolve = function(g) {
        return g && "object" === typeof g && g.constructor === na ? g : new na(function(q) {
            q(g)
        })
    };
    na.reject = function(g) {
        return new na(function(q, E) {
            E(g)
        })
    };
    na.race = function(g) {
        return new na(function(q, E) {
            if (!g || "undefined" === typeof g.length) return E(new TypeError("Promise.race accepts an array"));
            for (var C = 0, W = g.length; C < W; C++) na.resolve(g[C]).then(q, E)
        })
    };
    na.Hb = "function" === typeof setImmediate && function(g) {
        setImmediate(g)
    } || function(g) {
        z(g, 0)
    };
    na.wc = function(g) {
        "undefined" !== typeof console &&
            console && console.warn("Possible Unhandled Promise Rejection:", g)
    };
    var Q = na,
        ja;
    (function(g) {
        g.ANCHOR = "A";
        g.BUTTON = "BUTTON";
        g.FORM = "FORM";
        g.I_FRAME = "IFRAME";
        g.IMAGE = "IMG";
        g.INPUT = "INPUT";
        g.LABEL = "LABEL";
        g.LINK = "LINK";
        g.OPTION = "OPTION";
        g.SCRIPT = "SCRIPT";
        g.SELECT = "SELECT";
        g.STYLE = "STYLE";
        g.TEXT_AREA = "TEXTAREA"
    })(ja || (ja = {}));
    var Oa, nb, jb, yb, xb = Wa.Worker,
        bc = xb && xb.prototype.addEventListener,
        lc = [],
        Uc = ["touchstart", "touchend", "scroll"],
        Qc, sc = "abort getAllResponseHeaders getResponseHeader open overrideMimeType send setRequestHeader".split(" "),
        Yc, Xf = {
            "!": "%21",
            "~": "%7E",
            "*": "%2A",
            "(": "%28",
            ")": "%29",
            "'": "%27",
            $: "%24",
            ";": "%3B",
            ",": "%2C"
        },
        sd, tc, le = (tc = {}, tc.l = "Lax", tc.s = "Strict", tc.n = "None", tc),
        Id, Ad = "[Dynatrace RUM JavaScript]",
        td = /^[a-f0-9]{12,16}$/,
        ye, id = 32,
        Je;
    (function(g) {
        g.LAX = "l";
        g.NONE = "n";
        g.NOT_SET = "0";
        g.STRICT = "s"
    })(Je || (Je = {}));
    var $c = gb("rxvisitid"),
        kc = {},
        Ge = "app-3A",
        bf = Wa.Worker,
        Lf = Wa.Blob,
        Cg = Wa.URL && Wa.URL.createObjectURL,
        Oe, Kf, Zf, kh, ze = !1,
        ce, Dg = [],
        xe = [],
        rf, cg, me = {},
        Ac, Kd = [],
        Yd = [],
        Zc, He = 0,
        ne, Be, Ld, Pe = 6E8,
        $f = !1,
        sf, Kh = /([A-Z]+)-([0-9]+)/,
        Ug = [],
        tf, Fg, oe = !1,
        Mf, Eg = !1,
        uf = !1,
        dg, Vg, ge, Rd = "".concat("_", "srv").concat("_");
    (function() {
        var g, q, E, C;
        if (!("documentMode" in document) || isNaN(document.documentMode)) {
            var W = !(null === (q = navigator.userAgent) || void 0 === q ? 0 : q.includes("RuxitSynthetic"));
            if (!Wa.dT_ || !Wa.dT_.cfg || "string" !== typeof Wa.dT_.cfg || "initialized" in Wa.dT_ && Wa.dT_.initialized)(null === (E = Wa.dT_) || void 0 === E ? 0 : E.gCP) ? Qe("[CookiePrefix/initCode] initCode with cookie prefix already initialized, not initializing initCode!") : Qe("InitConfig not found or agent already initialized! This is an injection issue."),
                Wa.dT_ && (Wa.dT_.di = 3);
            else if (W) try {
                Ie();
                var M;
                Id = (M = {}, M.ade = "", M.aew = !0, M.apn = "", M.agentLocation = "", M.agentUri = "", M.app = "", M.ac = !0, M.async = !1, M.ase = !1, M.auto = !1, M.bp = 3, M.bs = !1, M.buildNumber = 0, M.csprv = !0, M.cepl = 16E3, M.cls = !0, M.ccNcss = !1, M.coo = !1, M.cooO = !1, M.cssm = "0", M.cwtDomains = "", M.cwtUrl = "w2dax4xgw3", M.cwt = "", M.cors = !1, M.csu = "", M.cuc = "", M.cce = !1, M.cux = !1, M.postfix = "", M.dataDtConfig = "", M.debugName = "", M.dvl = 500, M.dASXH = !1, M.disableCookieManager = !1, M.dKAH = !1, M.disableLogging = !1, M.dmo = !1, M.doel = !1,
                    M.dpch = !1, M.dpvc = !1, M.disableXhrFailures = !1, M.domain = "", M.domainOverride = "", M.domainOriginal = "", M.doNotDetect = "", M.ds = !0, M.dsndb = !1, M.dsa = !1, M.dsss = !1, M.dssv = !0, M.earxa = !0, M.eao = !1, M.exp = !1, M.eni = !0, M.etc = !1, M.expw = !1, M.instr = "", M.evl = "", M.fa = !1, M.fvdi = !1, M.featureHash = "", M.hvt = 216E5, M.imm = !1, M.ign = "", M.iub = "", M.iqvn = !1, M.initializedModules = "", M.lastModification = 0, M.lupr = !0, M.lab = !1, M.legacy = !1, M.lt = !0, M.mb = "", M.md = "", M.mdp = "", M.mdl = "", M.mcepsl = 100, M.mdn = 5E3, M.mhl = 4E3, M.mpl = 1024, M.mmds = 2E4, M.msl =
                    3E4, M.bismepl = 2E3, M.mel = 200, M.mepp = 10, M.moa = 30, M.mrt = 3, M.ntd = !1, M.nsfnv = !1, M.ncw = !1, M.oat = 180, M.ote = !1, M.owasp = !1, M.pcl = 20, M.pt = !0, M.perfbv = 1, M.prfSmpl = 0, M.pVO = !1, M.peti = !1, M.raxeh = !0, M.rdnt = 0, M.nosr = !0, M.reportUrl = "dynaTraceMonitor", M.rid = "", M.ridPath = "", M.rpid = "", M.rcdec = 12096E5, M.rtl = 0, M.rtp = 2, M.rtt = 1E3, M.rtu = 200, M.rvcl = 24, M.sl = 100, M.ssc = !1, M.svNB = !1, M.srad = !0, M.srbbv = 1, M.srbw = !0, M.srdinitrec = !0, M.srmr = 100, M.srms = "1,1,,,", M.srsr = 1E5, M.srtbv = 3, M.srtd = 1, M.srtr = 500, M.srvr = "", M.srvi = 0, M.srwo = !1, M.srre =
                    "", M.srxcss = !0, M.srxicss = !0, M.srficros = !0, M.srmrc = !1, M.srsdom = !0, M.srfirrbv = !0, M.srcss = !0, M.srmcrl = 1, M.srmcrv = 10, M.st = 3E3, M.spc = "", M.syntheticConfig = !1, M.tal = 0, M.tt = 100, M.tvc = 3E3, M.uxdce = !1, M.uxdcw = 1500, M.uxrgce = !0, M.uxrgcm = "100,25,300,3;100,25,300,3", M.uam = !1, M.uana = "data-dtname,data-dtName", M.uanpi = 0, M.pui = !1, M.usrvd = !0, M.vrt = !1, M.vcfi = !0, M.vcsb = !1, M.vcit = 1E3, M.vct = 50, M.vcx = 50, M.vscl = 0, M.vncm = 1, M.vrei = "", M.xb = "", M.chw = "", M.xt = 0, M.xhb = "", M);
                var pb;
                ua();
                var Ub;
                Qc = Wa.XMLHttpRequest;
                var gc = null === (Ub =
                    Wa.XMLHttpRequest) || void 0 === Ub ? void 0 : Ub.prototype;
                if (gc)
                    for (Yc = {}, q = 0, E = sc; q < E.length; q++) {
                        var Sc = E[q];
                        void 0 !== gc[Sc] && (Yc[Sc] = gc[Sc])
                    }
                Oa = Wa.addEventListener;
                nb = Wa.removeEventListener;
                jb = Wa.document.addEventListener;
                yb = Wa.document.removeEventListener;
                Zf = Wa.setTimeout;
                kh = Wa.setInterval;
                ze || (Oe = Wa.clearTimeout, Kf = Wa.clearInterval);
                var Ae = P ? P() : navigator.cookieEnabled,
                    Nf = 1 === zb(Qa("dtAdkSettings") || (null === (pb = cg) || void 0 === pb ? void 0 : pb.getItem("dtAdkSettings")) || "").overloadState;
                if (!(!Ae || Nf ? 0 :
                        "complete" !== document.readyState || Wa.performance && Wa.performance.timing)) throw Error("Error during initCode initialization");
                try {
                    cg = Wa.localStorage
                } catch (Lh) {}
                xe = [];
                za();
                rf = Ac();
                ce = [];
                me = {};
                ze || (Wa.clearTimeout = Ba(Oe), Wa.clearInterval = Ba(Kf), ze = !0);
                var eg = Math.random(),
                    mh = Math.random();
                Be = 0 !== eg && 0 !== mh && eg !== mh;
                if (pd()) {
                    var fg = performance.getEntriesByType("navigation")[0];
                    if (fg) {
                        pb = 0;
                        for (var df in fg) {
                            var Of = +fg[df];
                            !isNaN(Of) && isFinite(Of) && (pb += Math.abs(Of))
                        }
                        var Pf = Math.floor(1E4 * pb)
                    } else Pf = Ac();
                    ne = qd(Pf)
                } else Be ? ne = Math.random : ne = qd(Ac());
                Ld = rf % Pe + "_" + parseInt(ad(0, 1E3) + "");
                a: {
                    var ef = Y().cfg;kc = {
                        reportUrl: "dynaTraceMonitor",
                        initializedModules: "",
                        csu: "dtagent",
                        dataDtConfig: "string" === typeof ef ? ef : ""
                    };Y().cfg = kc;kc.csu = "ruxitagentjs";
                    var Qf = kc.dataDtConfig;Qf && !Qf.includes("#CONFIGSTRING") && (Za(Qf, kc), Na("domain"), Na("auto"), Na("app"), ia(kc));
                    var wf = (kc.dataDtConfig || "").includes("#CONFIGSTRING") ? null : kc;
                    if (wf = rb(document.currentScript, wf))
                        for (var Mh in wf)
                            if (Object.prototype.hasOwnProperty.call(wf,
                                    Mh)) {
                                Pf = Mh;
                                var Wg = wf[Pf];
                                "undefined" !== typeof Wg && (kc[Pf] = Wg)
                            }
                    var ff = tb();
                    try {
                        var Se = (wf = cg) && wf.getItem(ff);
                        if (Se) {
                            var wd = wb(Se),
                                xd = Za(wd.config || ""),
                                gf = kc.lastModification || "0",
                                Te = parseInt((xd.lastModification || wd.lastModification || "0").substring(0, 13)),
                                hf = "string" === typeof gf ? parseInt(gf.substring(0, 13)) : gf;
                            if (!gf || Te >= hf)
                                if (xd.csu = wd.name || G("csu"), xd.featureHash = wd.featureHash || G("featureHash"), xd.agentUri && ia(xd), Ca(xd, !0), bb(xd), Sa(xd), Te > (+kc.lastModification || 0)) {
                                    var Zd = B("auto"),
                                        nh = B("legacy");
                                    kc = H(xd);
                                    kc.auto = Zd ? "1" : "0";
                                    kc.legacy = nh ? "1" : "0"
                                }
                        }
                    } catch (Lh) {}
                    Ca(kc);
                    try {
                        var gg = kc.ign;
                        if (gg && (new RegExp(gg)).test(Wa.location.href)) {
                            delete Wa.dT_;
                            var hg = !1;
                            break a
                        }
                    } catch (Lh) {}
                    if (ha()) {
                        var oh = navigator.userAgent,
                            ig = oh.lastIndexOf("RuxitSynthetic");
                        if (-1 === ig) var $d = {};
                        else {
                            var Od = oh.substring(ig + 14);
                            if (Od.includes(" c")) {
                                ff = {};
                                Se = 0;
                                for (var Hg = Od.split(" "); Se < Hg.length; Se++) {
                                    var jg = Hg[Se];
                                    if (jg.startsWith("c")) {
                                        var Ke = jg.substring(1),
                                            Xg = Ke.indexOf("="),
                                            kg = Ke.substring(0, Xg),
                                            ph = Ke.substring(Xg +
                                                1);
                                        kg && ph && (ff[kg] = ph)
                                    }
                                }
                                $d = ff
                            } else $d = {}
                        }
                        Od = void 0;
                        for (Od in $d)
                            if (Object.prototype.hasOwnProperty.call($d, Od) && $d[Od]) {
                                var Ue = $d[Od];
                                "undefined" !== typeof Ue && (kc[Od] = Ue)
                            }
                        H(kc)
                    }
                    var Nh = G("cuc"),
                        Ce, lg, xf = null === (lg = null === (Ce = Wa.dT_) || void 0 === Ce ? void 0 : Ce.gCP) || void 0 === lg ? void 0 : lg.call(Ce);
                    if (Nh && xf && Nh !== xf) throw Error("platformPrefix and cuc do not match!");hg = !0
                }
                if (!hg) throw Error("Error during config initialization");
                Vc();
                dg = Y().disabled;
                var qe;
                if (!(qe = G("agentLocation"))) a: {
                    var Ig = G("agentUri");
                    if (Ig || document.currentScript) {
                        var yf = Ig || document.currentScript.src;
                        if (yf) {
                            var Yg = yf.includes("_complete") ? 2 : 1,
                                jf = yf.lastIndexOf("/");
                            for (hg = 0; hg < Yg && -1 !== jf; hg++) yf = yf.substring(0, jf), jf = yf.lastIndexOf("/");
                            qe = yf;
                            break a
                        }
                    }
                    var oi = location.pathname;qe = oi.substring(0, oi.lastIndexOf("/"))
                }
                Vg = qe;
                ge = G("csu") || "ruxitagentjs";
                "true" !== Qa("dtUseDebugAgent") || ge.includes("dbg") || (ge = G("debugName") || ge + "dbg");
                if (!B("auto") && !B("legacy") && !dg) {
                    var Oh = G("agentUri") || Ed(G("featureHash"));
                    if (B("async") || "complete" ===
                        document.readyState) Ic(Oh, B("async"), void 0, void 0, "dtjsagent");
                    else {
                        var Zg = "".concat("dtjsagent", "dw");
                        document.write('<script id="'.concat(Zg, '" type="text/javascript" src="').concat(Oh, '">\x3c/script>'));
                        document.getElementById(Zg) || Ic(Oh, B("async"), void 0, void 0, "dtjsagent")
                    }
                }
                Qa(kd()) && T("cooO", !0);
                ag();
                T("pVO", !!kb("dt-pVO"));
                Ra(mb);
                tf = 18E5;
                Fg = J("hvt") || 216E5;
                var Ph = fd();
                sf = void 0;
                Ph && "ea" in Ph && (sf = Ph.gITAID());
                hb(gd, [sf || 1])
            } catch (Lh) {
                "platformPrefix and cuc do not match!" === Lh.message ? (qe =
                    Wa.dT_, Wa.dT_ = (g = {}, g.minAgentVersion = qe.minAgentVersion, g.platformPrefix = (null === (C = qe.gCP) || void 0 === C ? void 0 : C.call(qe)) || qe.platformPrefix, g.platformCookieOffset = qe.platformCookieOffset, g), Qe("[CookiePrefix/initCode] cuc and platformPrefix do not match, disabling agent!")) : (delete Wa.dT_, Qe("JsAgent initCode initialization failed!", Lh))
            }
        }
    })()
})();
(function() {
    function La() {
        La = Object.assign || function(a) {
            for (var b, f = 1, k = arguments.length; f < k; f++) {
                b = arguments[f];
                for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (a[p] = b[p])
            }
            return a
        };
        return La.apply(this, arguments)
    }

    function gb(a, b) {
        gb = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(f, k) {
            f.__proto__ = k
        } || function(f, k) {
            for (var p in k) Object.prototype.hasOwnProperty.call(k, p) && (f[p] = k[p])
        };
        return gb(a, b)
    }

    function ob(a, b) {
        function f() {
            this.constructor = a
        }
        if ("function" !== typeof b &&
            null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        gb(a, b);
        a.prototype = null === b ? Object.create(b) : (f.prototype = b.prototype, new f)
    }

    function db(a, b, f) {
        if (f || 2 === arguments.length)
            for (var k = 0, p = b.length, x; k < p; k++) !x && k in b || (x || (x = Array.prototype.slice.call(b, 0, k)), x[k] = b[k]);
        return a.concat(x || Array.prototype.slice.call(b))
    }

    function eb(a) {
        var b;
        return function() {
            if (b) return b;
            var f, k, p, x, L = -1 !== Aj ? Aj : (null === (k = null === (f = Fb.dT_) || void 0 === f ? void 0 : f.scv) ||
                void 0 === k ? void 0 : k.call(f, "postfix")) || (null === (x = null === (p = Fb.dT_) || void 0 === p ? void 0 : p.gCP) || void 0 === x ? void 0 : x.call(p));
            return b = f = (Aj = L) ? "".concat(a).concat(L) : a
        }
    }

    function Ta(a) {
        return !!a.interactionId
    }

    function Ua(a) {
        a.getEntries().filter(Ta).forEach(function(b) {
            pi = Math.min(pi, b.interactionId);
            qh = (Ve = Math.max(Ve, b.interactionId)) ? (Ve - pi) / 7 + 1 : 0
        })
    }

    function Ya(a) {
        function b() {
            $b.takeRecords && p($b.takeRecords())
        }

        function f() {
            fb = [];
            ib = Le ? qh : performance.interactionCount || 0
        }

        function k(Hb) {
            var vc = fb[fb.length -
                    1],
                xc = Xb[Hb.interactionId];
            if (xc || 10 > fb.length || Hb.duration > vc.latency) xc ? (xc.entries.push(Hb), xc.latency = Math.max(xc.latency, Hb.duration)) : (Hb = {
                id: Hb.interactionId,
                latency: Hb.duration,
                entries: [Hb]
            }, Xb[Hb.id] = Hb, fb.push(Hb)), fb.sort(Va), fb.splice(10).forEach(function(bd) {
                delete Xb[bd.id]
            })
        }

        function p(Hb) {
            if (Hb) {
                for (var vc = 0, xc = 0; xc < Hb.length; xc++) x(Hb[xc]) && vc++;
                if (0 === vc) L || aa.forEach(function(ie) {
                    ie({
                        entries: [],
                        latency: 8,
                        id: -1
                    })
                });
                else {
                    sa += vc;
                    var bd = fb[Math.min(fb.length - 1, Math.floor(((Le ? qh : performance.interactionCount ||
                        0) - ib) / 50))];
                    bd && (L !== bd.latency && aa.forEach(function(ie) {
                        ie(bd)
                    }), L = bd.latency)
                }
            }
        }

        function x(Hb) {
            if (40 > Hb.duration) return !1;
            if (-1 !== sb && Hb.startTime < sb) return !0;
            Hb.interactionId && k(Hb);
            "first-input" === Hb.entryType && (fb.some(function(vc) {
                return vc.entries.some(function(xc) {
                    return Hb.duration === xc.duration && Hb.startTime === xc.startTime
                })
            }) || k(Hb));
            return !0
        }
        void 0 === a && (a = 40);
        "interactionCount" in performance || Le || (Le = new PerformanceObserver(Ua), Le.observe({
            type: "event",
            buffered: !0,
            durationThreshold: 0
        }));
        var L = 0,
            aa = [],
            sa = 0,
            ib = 0,
            sb = -1,
            fb = [],
            Xb = {},
            $b = new PerformanceObserver(function(Hb) {
                p(Hb.getEntries())
            });
        $b.observe({
            type: "event",
            buffered: !0,
            durationThreshold: a
        });
        "PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && $b.observe({
            type: "first-input",
            buffered: !0
        });
        Fb.addEventListener("pageshow", f, !0);
        return {
            Mc: function() {
                b();
                return L
            },
            reset: function(Hb) {
                void 0 === Hb && (Hb = -1);
                fb = [];
                Xb = {};
                sa = L = ib = 0;
                sb = Hb
            },
            Fj: function(Hb) {
                aa.push(Hb)
            },
            Uj: function() {
                aa = [];
                Fb.removeEventListener("pageshow",
                    f, !0);
                $b.disconnect()
            },
            Fg: b,
            Ui: function() {
                return sa
            }
        }
    }

    function Va(a, b) {
        return b.latency - a.latency
    }

    function Qa() {
        return "10301241007103824"
    }

    function ab(a) {
        return !!(a && "ea" in a)
    }

    function vb(a, b) {
        var f = !a.bcv("ac") || a.scv("app") === b.scv("app");
        a = a.scv("postfix");
        b = b.scv("postfix");
        return f && a === b
    }

    function na() {
        var a = Fb.dT_;
        try {
            for (var b = Fb.parent; b && b !== Fb;) {
                var f = b.dT_;
                if (ab(f) && "10301241007103824" === f.version && vb(a, f)) return f.tdto();
                b = b !== b.parent ? b.parent : void 0
            }
        } catch (k) {}
        return a
    }

    function ta(a) {
        var b =
            a.version.startsWith("10279");
        a.tdto && !b ? (Me = a.tdto, nd = a.gFLAI) : (Me = na, a.tdto = Me, nd = function() {}, a.gFLAI = nd)
    }

    function Ha() {
        document.cookie = "".concat("__dTCookie", "=").concat("1", ";SameSite=Lax");
        var a = document.cookie.includes("__dTCookie");
        document.cookie = "".concat("__dTCookie", "=").concat("1", "; expires=Thu, 01-Jan-1970 00:00:01 GMT");
        return a
    }

    function Fa(a) {
        for (var b = [], f = 1; f < arguments.length; f++) b[f - 1] = arguments[f];
        return $i ? $i(a, b) : a.apply(this, b)
    }

    function pa(a, b, f) {
        return a.splice(b, (f || b) - b +
            1 || a.length)
    }

    function S() {
        return We
    }

    function X() {
        return Fb.dT_
    }

    function ua() {
        return kf
    }

    function la() {
        return zf
    }

    function fa() {
        return rh
    }

    function Ga() {
        var a = document.location;
        return a ? !a.href.startsWith("http") : !0
    }

    function Ma() {
        var a = navigator.userAgent || navigator.vendor || Fb.opera && Fb.opera.version() || "";
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substring(0,
                4))
    }

    function qa() {
        return "1" === navigator.doNotTrack || "yes" === navigator.doNotTrack || "1" === navigator.msDoNotTrack || "1" === Fb.doNotTrack
    }

    function ra() {
        return /(gomezagent|googlebot|adsbot-google|mediapartners-google|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|facebookexternalhit|ia_archiver)/i.test(navigator.userAgent)
    }

    function N(a) {
        if (!a || !a.includes("://")) return "";
        a = a.split("/")[2].split(":")[0].toLowerCase();
        a: {
            var b = 0;
            for (var f = hd; b < f.length; b++)
                if (a.includes(f[b])) {
                    b = !0;
                    break a
                }
            b = !1
        }
        return b ? "" : a
    }

    function Z(a) {
        var b = 0;
        if (a)
            for (var f = a.length, k = 0; k < f; k++) b = 31 * b + a.charCodeAt(k), b &= b;
        return b
    }

    function D(a, b, f) {
        $i(P, [a, b, f])
    }

    function P(a, b, f) {
        try {
            Fb.sessionStorage.setItem(a, b + "")
        } catch (k) {
            f || mg(a, b + "", void 0, Lb("ssc"))
        }
    }

    function Y(a, b, f) {
        void 0 === f && (f = !0);
        var k = !0;
        try {
            Fb.localStorage[a] = b
        } catch (p) {
            k = !1, f && mg(a, b, void 0, Lb("ssc"))
        }
        return k
    }

    function ma(a, b) {
        try {
            return Fb.sessionStorage[a] || ""
        } catch (f) {}
        return b ? "" : $g(a)
    }

    function ea(a) {
        var b = [];
        if (a)
            for (var f = 0; f < a.length; f++) {
                var k =
                    a.charAt(f),
                    p = ng[k];
                p ? b.push(p) : b.push(k)
            }
        return b.join("")
    }

    function U(a) {
        if (!a) return "";
        for (var b = "", f = 0; f < a.length; f++) {
            var k = aj[a.charAt(f) + a.charAt(f + 1)];
            k ? (b += k, f++) : b += a.charAt(f)
        }
        return b
    }

    function va(a) {
        return a ? U(a).replace(/_5F/g, "_").replace(/_25/g, "%").replace(/_7C/g, "|") : ""
    }

    function Sa(a) {
        if (!a) return "";
        a = a.replace(/_/g, "_5F").replace(/%/g, "_25").replace(/\|/g, "_7C");
        return ea(a)
    }

    function bb() {
        var a = Fb.location;
        return a ? Db(a.href) : "-"
    }

    function Db(a) {
        var b = a.indexOf("#");
        return 0 <= b ? a.substring(0,
            b) : a
    }

    function Wb(a) {
        mg("dtUseDebugAgent", a, void 0, Lb("ssc"))
    }

    function oa(a) {
        mg("dt_dbg_console", a, void 0, Lb("ssc"))
    }

    function Eb(a) {
        void 0 === a && (a = "TRACE");
        mg("dt_dbg_logfilter", "level=".concat(a, "|featureHash=|fileName="), void 0, Lb("ssc"))
    }

    function wc(a) {
        var b = a.match(/:(\d+)/);
        return b ? b[1] : a.startsWith("https") ? "443" : "80"
    }

    function Gc(a) {
        if (!a) return !1;
        a = a.trim().toLowerCase();
        a.startsWith("//") && (a = location.protocol + a);
        var b = location.href.startsWith("http");
        if (!a.startsWith("http") || !b) return !1;
        if (location.href.indexOf(location.host) !== a.indexOf(location.host.toLowerCase())) return !0;
        b = location.port || wc(location.href);
        return wc(a) !== b
    }

    function hb(a) {
        try {
            return (new URL(a, document.baseURI)).href
        } catch (b) {
            return a
        }
    }

    function Rb() {
        try {
            return Fb.location.href
        } catch (a) {}
        return ""
    }

    function ec(a) {
        if (!a) return "";
        try {
            var b = void 0,
                f = hb(a);
            if (!Fb.location) return f;
            var k = Fb.location,
                p = k.origin;
            if (!p) {
                if (!k.protocol || !k.host) return f;
                p = k.protocol + "//" + k.host
            }
            var x = b = f.substring(0, p.length + 1).toLowerCase() ===
                (p + "/").toLowerCase() ? f.substring(p.length) : f
        } catch (L) {
            x = a, a.startsWith("?") && (x = Fb.location.pathname + a)
        }
        return Qb(x, 500)
    }

    function Qb(a, b, f, k) {
        void 0 === b && (b = 100);
        void 0 === f && (f = !1);
        void 0 === k && (k = "...");
        return !a || a.length <= b ? a : f ? k + a.substring(Math.max(0, a.length - b + k.length)) : a.substring(0, Math.max(0, b - k.length)) + k
    }

    function Cc(a) {
        var b = Zb("sl");
        return Qb(a, b)
    }

    function dc(a, b, f, k) {
        if (a[k].set) {
            var p = a[k].set(b, f);
            p && p.get && p.get(b) === f && (a[k] = p)
        } else a[k][b] = f
    }

    function ic(a, b, f, k) {
        f && (f = Qb(f, Zb("mhl")),
            dc(a, b, f, k))
    }

    function Pb(a) {
        return a ? a.split("?")[0] : ""
    }

    function Kb() {
        var a = og();
        if (a) {
            var b = a.indexOf("-");
            a = -1 === b ? "" : a.substring(0, b);
            if (a) {
                b = "";
                for (var f = 0; f + 1 < a.length; f += 2) b += a.charCodeAt(f) + a.charCodeAt(f + 1) + "";
                a = Math.floor(Math.abs(1E7 * Math.sin(parseInt(b))))
            } else a = 0
        } else a = !1;
        return a
    }

    function Gb() {
        var a = qi();
        return 3 === a ? !0 : 4 === a ? !1 : !!Zb("rdnt") && qa()
    }

    function pc(a, b, f) {
        if (!a || !b) return [];
        for (var k = [], p = 0; p < a.length; p += b) {
            if (p + b <= a.length) {
                var x = a.slice(p, p + b);
                "%" === x.charAt(x.length - 1) &&
                    a.length >= p + b + 1 && (x += a.charAt(p + b), x += a.charAt(p + b + 1), p += 2);
                "%" === x.charAt(x.length - 2) && a.length >= p + b + 2 && (x += a.charAt(p + b), p += 1)
            } else x = a.slice(p);
            k.push(x)
        }
        if (f)
            for (a = k.length, b = 0; b < a; b++) k[b] = f.replace(/#index#/, b + 1 + "").replace(/#total#/, a + "") + k[b];
        return k
    }

    function Bb(a) {
        return !1 === a ? 0 : "number" === typeof a ? 2 : 1
    }

    function F(a, b) {
        void 0 === b && (b = Zb("rtu"));
        if (!a) return "";
        var f = Zb("rtp");
        if (!f || a.length > b && 2 === f) a = Pb(a);
        var k = Sa(a);
        if (k.length > b) {
            f = Sa(N(a));
            a = a.split("/");
            a = a[a.length - 1];
            var p = Sa(a);
            if (p !== f) {
                if (k = f + "/../" + p, b = k.length - b, 0 < b)
                    if (p.length > b) {
                        b = Math.max(p.length - (b + 2), 0);
                        k = Math.max(a.length - b, 0);
                        for (p = Sa(a.substring(k, a.length)); p.length > b;) k += Math.ceil((p.length - b) / 3), p = Sa(a.substring(k, a.length));
                        k = f + "/../.." + p
                    } else k = Qb(f, b, !1, ".../") + p
            } else k = Qb(k, b, !0)
        }
        return k
    }

    function ka(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function Ea(a, b) {
        var f = 1E3 * Zb("oat");
        return (null !== b && void 0 !== b ? b : ae()) + f >= a ? a : -2
    }

    function ha() {
        return X().disabled && !X().syn
    }

    function wb(a) {
        var b = X();
        b.syn || (b.disabledReason = a, b.disabled = !0)
    }

    function tb(a, b) {
        return $g(a, b) || Jg(a) || ""
    }

    function Za(a) {
        return null === a || void 0 === a ? void 0 : a.startsWith("data:")
    }

    function w(a) {
        if (Object.keys) return Object.keys(a);
        var b = [];
        if (a === Object(a))
            for (var f in a) ka(a, f) && b.push(f);
        return b
    }

    function B(a, b) {
        a = sh[a];
        a.includes(b) || a.push(b)
    }

    function J(a, b) {
        a = sh[a];
        b = a.indexOf(b); - 1 !== b && pa(a, b)
    }

    function G(a) {
        for (var b = [], f = 0, k = sh[a.kind].slice(); f < k.length; f++) {
            var p = (0, k[f])(a);
            p && b.push(p)
        }
        return b
    }

    function T() {
        var a =
            We,
            b = Qa();
        a !== b && B("DEBUG_INFO_REQUESTED", function() {
            return [{
                type: "miav",
                severity: "Warning",
                text: "Snippet version(".concat(a, ") does not match the version of the monitoring code(").concat(b, "). Consider updating your code snippet for best compatibility.")
            }]
        });
        B("DEBUG_INFO_REQUESTED", function() {
            return [{
                type: "v",
                severity: "Info",
                text: "Snippet version: ".concat(a, " ; Monitoring code:").concat(Qa())
            }]
        })
    }

    function H(a, b) {
        void 0 === b && (b = []);
        var f = Fb.dT_;
        f = (null === f || void 0 === f ? 0 : f.iIO) ? f.iIO : null;
        return !(null ===
            f || void 0 === f || !f(a, b))
    }

    function Na() {}

    function ia(a) {
        return (H(a, 9) || Ia(a)) && ("string" === typeof a.textContent || "string" === typeof a.innerText)
    }

    function Ia(a) {
        return a && a.nodeType && 1 === a.nodeType
    }

    function Ca(a) {
        return a && "INPUT" === a.nodeName
    }

    function rb(a) {
        return a && "SCRIPT" === a.nodeName
    }

    function Ab(a) {
        return "function" === typeof a && /{\s+\[native code]/.test(Function.prototype.toString.call(a))
    }

    function qb() {
        return De
    }

    function zb() {
        return Fd
    }

    function Ib() {
        return Xe
    }

    function ub() {
        return Pd
    }

    function Sb(a,
        b) {
        a ? a.id === a.La() && (Af = a) : Af = b ? null : Af
    }

    function nc() {
        for (var a = re.Ca.length - 1; 0 <= a; a--) {
            var b = re.Ca[a];
            if (b.Sc() && !b.Na || b.Na && b.Qg()) return b
        }
        return null
    }

    function Kc(a) {
        return re.actions[a]
    }

    function de() {
        var a = Me();
        if (a === X() || !ab(a) || !a.gITAID) return Gd = Hc, Gd();
        a = a.gITAID();
        Kg = a + 1;
        return a
    }

    function Hc() {
        return Kg++
    }

    function Lc() {
        return Gd()
    }

    function Mc(a) {
        return (a = Kc(a)) && a.fb ? a : null
    }

    function Jd(a) {
        return (a = "number" === typeof a ? Mc(a) : a) ? a.cb() : ""
    }

    function od(a, b, f) {
        var k = Pd;
        f && (k = Kc(f));
        if (!k) return !1;
        k.Wf(a, b);
        return !0
    }

    function ya() {
        var a = ah(!0);
        if (0 < a.length) {
            for (var b = [], f = 0; f < a.length; f++) {
                var k = a[f];
                k.frameId !== Ne() && b.push(k)
            }
            Bj(b)
        }
    }

    function I(a) {
        if (!a) return "";
        var b = Ne() + "h" + a,
            f = document.cookie,
            k = $g(Rf(), f);
        return Lb("dASXH") && k && k.includes(b) && !Ga() ? "" : bh() + "$" + Ne() + "h" + a + "v" + og(f) + "e0"
    }

    function ca(a) {
        for (var b = pg.length - 1; 0 <= b; b--)
            if (pg[b] === a) {
                pa(pg, b);
                break
            }
    }

    function Ba(a) {
        if (0 < th || a && 0 < pg.length)
            if (a = pg.length, 0 < a) return pg[a - 1];
        return 0
    }

    function Da(a, b) {
        if (Ab(Array.prototype.map)) return Array.prototype.map.call(a,
            b);
        for (var f = [], k = 0; k < a.length; k++) f.push(b(a[k], k, a));
        return f
    }

    function za() {
        return Da(bj, function(a) {
            return a.message ? "Status: ".concat(a.status, ', Message: "').concat(a.message, '"') : "Status: ".concat(a.status)
        })
    }

    function Ja(a, b, f, k, p, x) {
        void 0 === p && (p = !1);
        void 0 === x && (x = !1);
        if (p) Ka(a, b, f, k, x);
        else {
            try {
                for (p = 0; p < a.length; p++) p in a && b.call(f, a[p], p, a, function() {})
            } catch (aa) {
                var L = aa
            }
            if (k) L ? k.call(f, a, L) : k.call(f, a);
            else if (L) throw L;
        }
    }

    function wa(a, b, f, k, p) {
        void 0 === k && (k = !1);
        void 0 === p && (p = !1);
        return new Sf(function(x, L) {
            Ja(a, b, f, function(aa, sa) {
                sa ? L(sa) : x(aa)
            }, k, p)
        })
    }

    function Ka(a, b, f, k, p) {
        function x(Xb) {
            fb = Xb;
            kb(function() {
                L(Xb, sa)
            })
        }

        function L(Xb, $b) {
            if (!sb) {
                var Hb;
                try {
                    4 > b.length && ib++, Xb in $b && (Hb = b.call(f, $b[Xb], Xb, $b, function() {
                        function bd(lf) {
                            fb = lf;
                            kb(function() {
                                L(lf, sa)
                            })
                        }
                        ib++;
                        ib === $b.length && aa();
                        for (var ie = fb + 1; ie < $b.length; ie++) bd(ie)
                    }))
                } catch (bd) {
                    var vc = bd;
                    Hb = !1
                }
                Xb = function(bd) {
                    fb = bd;
                    kb(function() {
                        L(bd, sa)
                    })
                };
                for (var xc = fb + 1; xc < $b.length; xc++) Xb(xc);
                (!1 === Hb || vc) && aa(vc);
                ib !==
                    $b.length || sb || aa()
            }
        }

        function aa(Xb) {
            k && !sb && (k.apply(f, Xb ? [sa, Xb] : [sa]), sb = !0)
        }
        void 0 === p && (p = !1);
        var sa = p ? a : Array.prototype.slice.call(a),
            ib = 0,
            sb = !1,
            fb = 0;
        for (a = 0; a < sa.length; a++) x(a);
        ib === sa.length && kb(aa)
    }

    function kb(a) {
        Cj || (Cj = !0, ac(function() {
            Cj = !1;
            var b = cj;
            cj = [];
            for (var f = oc(), k = 0; k < b.length && 35 > oc() - f;) b[k](), k++;
            for (f = k; f < b.length; f++) kb(b[f])
        }, 0));
        cj.push(a)
    }

    function Ra(a, b) {
        if (Ab(Array.prototype.filter)) return Array.prototype.filter.call(a, b);
        for (var f = [], k = 0; k < a.length; k++) {
            var p = a[k];
            b(p, k, a) && f.push(p)
        }
        return f
    }

    function lb(a, b, f, k) {
        void 0 === k && (k = !1);
        return f ? new Sf(function(p, x) {
            var L = [];
            Ja(a, function(aa, sa) {
                b(aa, sa, a) && L.push(aa)
            }, null, function(aa, sa) {
                sa ? x(L) : p(L)
            }, f, k)
        }) : Sf.resolve(Ra(a, b))
    }

    function Yb(a, b) {
        void 0 === b && (b = !1);
        var f = ["i".concat(a.id), "k".concat(a.kind), "h".concat(+a.hydrated)];
        b && f.push("t".concat(+a.trigger));
        return f.join(";")
    }

    function Ob(a) {
        if (a)
            for (var b = document.getElementsByTagName("LABEL"), f = b.length, k = 0; k < f; k++) {
                var p = b[k];
                if (p && "LABEL" === p.nodeName &&
                    p.htmlFor === a) return Jb(p.innerText, p.textContent)
            }
        return ""
    }

    function Jb() {
        for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
        for (b = 0; b < a.length; b++) {
            var f = a[b];
            if ("string" === typeof f && (f = f.trim())) return f
        }
        return ""
    }

    function mc(a) {
        if (!a || a.startsWith("data:")) return "";
        a = a.split("/");
        return 0 < a.length ? a[a.length - 1].split(".")[0] : ""
    }

    function Vc(a) {
        if (a && a.split) {
            var b = a.split("/");
            if (0 < b.length && (b = b[b.length - 1].trim(), null !== b)) return b
        }
        return a || ""
    }

    function pd(a) {
        return ia(a) ? a.innerText || a.textContent :
            a.textContent
    }

    function qd(a, b) {
        var f = b.nodeName ? b.nodeName.toUpperCase() : "unknown",
            k = Ia(b) ? b.getAttribute("type") : "";
        k = "string" === typeof k ? k.toUpperCase() : "";
        var p = "";
        switch (a) {
            case 0:
                Ia(b) ? (f = "", Ca(b) && "HIDDEN" !== k && (f = !k || "BUTTON" !== k && "SUBMIT" !== k && "RESET" !== k && "IMAGE" !== k ? null : b.value, a = Ob(b.id), f = !k || "BUTTON" !== k && "SUBMIT" !== k && "RESET" !== k ? Jb(a, f) : Jb(f, a)), f || (f = Jb(pd(b))), p = f) : p = "";
                break;
            case 1:
                f = "";
                if (Ca(b) && "HIDDEN" !== k || b && "BUTTON" === b.nodeName) k = "IMAGE" === k ? b.getAttribute("alt") : null, f =
                    Jb(b.name, b.title, k);
                p = f;
                break;
            case 3:
                Ia(b) ? (b = b.className, p = H(b, ["baseVal", "animVal"]) ? b.baseVal || b.animVal || "" : b) : p = "";
                break;
            case 4:
                b = "";
                "INPUT" === f && "HIDDEN" !== k ? b = "INPUT: " + k : "A" === f ? b = "LINK" : "-" === A && (A = b = f);
                p = b;
                break;
            case 2:
                f = "", Ca(b) && "IMAGE" === k ? f = mc(b.src) : b && "A" === b.nodeName ? f = Jb(b.title, Vc(b.href)) : b && "IMG" === b.nodeName ? f = Jb(b.name, b.title, b.alt, mc(b.src)) : b && "FORM" === b.nodeName && (f = Jb(b.name, b.id, b.action)), f || (f = Jb(b.title, b.data, b.wholeText, b.id)), p = f
        }
        return p
    }

    function ad(a) {
        if (!a) return "";
        try {
            var b = a.nodeName ? a.nodeName.toUpperCase() : "unknown";
            if ("HTML" === b || "BODY" === b || "HEAD" === b || "#DOCUMENT" === b) return A;
            for (b = 0; 4 >= b; b++) {
                var f = qd(b, a);
                if (f && f !== A) return f
            }
            return ad(a.parentNode)
        } catch (k) {}
        return ""
    }

    function Ud(a, b) {
        if (!b) return "";
        var f = b.length;
        if (0 >= f || 20 < Aa) return "";
        for (var k = 0; k < f; k++) {
            var p = b[k],
                x;
            Aa++;
            if (x = Ud(a, p.childNodes)) return x;
            Aa--;
            if (x = qd(a, p)) return x
        }
        return ""
    }

    function Vd(a) {
        try {
            var b = a.nodeName ? a.nodeName.toUpperCase() : "unknown";
            if ("HTML" === b || "BODY" === b || "HEAD" ===
                b || "#DOCUMENT" === b) return "Page: " + h;
            if (a && "SELECT" === a.nodeName) {
                var f = a.nodeName ? a.nodeName.toUpperCase() : null,
                    k = Ob(a.id),
                    p = Jb(k, a.name, f),
                    x = null;
                if (!a.multiple) {
                    var L = a.options && -1 < a.selectedIndex ? a.options[a.selectedIndex] : null;
                    L && (x = Jb(L.label, L.innerText, L.textContent))
                }
                return x ? "[" + p + "] to value [" + x + "]" : p
            }
            if (a && "TEXTAREA" === a.nodeName) {
                var aa = a.nodeName ? a.nodeName.toUpperCase() : null,
                    sa = Ob(a.id);
                return Jb(sa, a.name, aa) || a.nodeName
            }
            var ib = Jb(pd(a));
            if (ib) return ib;
            Aa = 0;
            if (a.childNodes && 0 < a.childNodes.length) {
                a: {
                    for (p =
                        0; 4 >= p; p++) {
                        var sb = Ud(p, [a]);
                        if (sb) {
                            x = sb;
                            break a
                        }
                    }
                    x = ""
                }
                return x
            }
        } catch (fb) {}
        return ad(a)
    }

    function ed() {
        m = Oc("uana").split(",");
        r = Zb("uanpi") || 0
    }

    function fd() {
        return uc
    }

    function Rc(a) {
        3 === a && (Mb = []);
        uc = a
    }

    function Wd() {
        return Pa
    }

    function gd(a) {
        var b = Ra(Hd, function(f) {
            return f.timestamp <= a
        });
        return b[b.length - 1] || null
    }

    function Cd(a) {
        Array.isArray(a) ? Mb.push.apply(Mb, a) : Mb.push(a)
    }

    function ud(a, b) {
        void 0 === b && (b = Infinity);
        var f = b + 1,
            k = "",
            p = "";
        "string" === typeof a ? p = a : "object" === typeof a && a && (p = a.toString());
        a = Oc("spc") + "\t\n\r";
        for (var x = 0; x < p.length; x++) {
            var L = p[x];
            if (!a.includes(L) && (k += L, k.length >= f)) break
        }
        return Qb(k, b, !1, "...")
    }

    function Md(a) {
        var b = Qd;
        try {
            for (; b;) {
                var f;
                if (f = a.target && "string" !== typeof a.target && a.target !== b.target && "string" !== typeof b.target) a: {
                    try {
                        for (var k = a.target.parentNode; k;) {
                            if (k === b.target) {
                                f = !0;
                                break a
                            }
                            k = k.parentNode
                        }
                    } catch (p) {}
                    f = !1
                }
                f && (a = b);
                b = b.next
            }
        } catch (p) {}
        Qd = a
    }

    function rd(a) {
        var b, f = a.Fh,
            k = a.url,
            p = a.title,
            x = a.view;
        return b = {
            id: a.id,
            target: a.target,
            name: "",
            type: a.type,
            next: void 0,
            Eb: void 0,
            info: a.Vf || "-",
            start: oc(),
            kc: !1,
            uf: oc() + (f || 30),
            url: k || Rb(),
            title: p || document.title,
            aa: ""
        }, b.view = x, b.Rb = function() {
            if (!this.name) {
                if (Lb("uam")) var L = {
                    aa: "dTMasked_" + (ia(this.target) ? this.target.nodeName : "")
                };
                else {
                    var aa = this.target || "";
                    A = "-";
                    if ("string" === typeof aa) L = {
                        aa: aa
                    };
                    else if (Ia(aa)) {
                        L = Vd(aa) || A;
                        a: {
                            try {
                                for (var sa = 0; sa <= r; sa++) {
                                    for (var ib = 0, sb = m; ib < sb.length; ib++) {
                                        var fb = aa.getAttribute(sb[ib]);
                                        if (fb) {
                                            var Xb = fb;
                                            break a
                                        }
                                    }
                                    if (aa.parentElement) aa = aa.parentElement;
                                    else break
                                }
                            } catch ($b) {}
                            Xb =
                            ""
                        }
                        L = {
                            aa: L,
                            Ob: Xb
                        }
                    } else L = {
                        aa: A
                    }
                }
                Xb = Zb("sl");
                L.aa = ud(L.aa, Xb);
                L.Ob = ud(L.Ob, Xb);
                this.name = L.Ob || L.aa;
                L.Ob && (this.aa = L.aa)
            }
            return this.name
        }, b.kj = function() {
            return this.kc
        }, b.sh = function() {
            var L = this;
            do L.kc = !0, L = L.next; while (L)
        }, b
    }

    function Nd(a, b, f, k, p, x, L) {
        void 0 === L && (L = Pa);
        if (K(Bf)) return Bf.bi(a, b, f, k, p, x, L);
        var aa = rd({
            id: yd++,
            target: a,
            type: b,
            Vf: f,
            Fh: k,
            url: p,
            title: x,
            view: L
        });
        try {
            return bl && (aa.next = Qd, aa.next && (aa.next.Eb = aa), Md(aa)), aa
        } finally {
            ac(function() {
                fe(aa)
            }, aa.uf - oc())
        }
    }

    function Bd() {
        return K(Bf) ?
            Bf.gci() : Qd
    }

    function Dd() {
        return K(Bf) ? Bf.gpi() : jd
    }

    function Xc(a, b) {
        if (K(Bf)) return Bf.cii(a, b);
        b = b ? Dd() : Bd();
        if (!b) return qg[a];
        switch (a) {
            case "name":
                return b.Rb();
            case "type":
                return b.type;
            case "validUntil":
                return b.uf;
            case "start":
                return b.start;
            case "target":
                return b.target;
            case "url":
                return b.url;
            case "title":
                return b.title;
            default:
                return null
        }
    }

    function vd(a) {
        return Xc(a, !0)
    }

    function Nc(a, b) {
        return {
            timeout: a,
            url: Xc("url", b),
            name: Xc("name", b),
            startTime: Xc("start", b),
            type: Xc("type", b) || "-",
            title: Xc("title",
                b)
        }
    }

    function fe(a) {
        if (K(Bf)) Bf.ei(a);
        else if (Qd) {
            for (var b = Qd; b.next && b !== a;) b = b.next;
            b === a && (Xc("name") && (jd = Qd), b.target = void 0, b.Eb && (b.Eb.next = b.next), b.next && (b.next.Eb = b.Eb), b === Qd && (Qd = b.next))
        }
    }

    function n(a) {
        void 0 === a && (a = "");
        return a ? (Oc("doNotDetect") ? Oc("doNotDetect").split(",") : []).includes(a) : !1
    }

    function v(a, b, f) {
        if (!n(f)) {
            var k = b ? b : a;
            nk[a] = function(p) {
                var x, L;
                G((x = {}, x.kind = "GLOBAL_EVENT_FIRED", x.detail = (L = {}, L.t = a, L.e = p, L), x));
                x = Lb("ote");
                L = Lb("ase");
                var aa = "boolean" !== typeof p.isTrusted ||
                    p.isTrusted,
                    sa = p.isRuxitSynthetic;
                if (L ? sa : !x || aa) {
                    (x = p.target || p.currentTarget || p.srcElement || null) && x.shadowRoot && p.composed && p.bubbles && "function" === typeof p.composedPath && (L = p.composedPath()) && L.length && (x = L[0]);
                    a: {
                        L = x;
                        if (("KD" === k || "KU" === k) && Ca(L) && "password" !== L.type)
                            if (p = p.keyCode || p.charCode || p.code, L = +p, Lb("uam") && !isNaN(L)) {
                                if (L = String.fromCharCode(L), !("a" <= L && "z" >= L || "A" <= L && "Z" >= L || "0" <= L && "9" >= L)) {
                                    p += "";
                                    break a
                                }
                            } else {
                                p += "";
                                break a
                            }
                        p = ""
                    }
                    Nd(x, k + p, void 0, 30)
                }
            };
            Cf(document, a, nk[a])
        }
    }

    function y(a) {
        bl =
            a;
        if (!a) {
            for (a = Qd; a;) a.target = void 0, a = a.next;
            Qd = void 0
        }
    }

    function K(a) {
        return a !== X() && ab(a)
    }

    function O(a) {
        ri = a
    }

    function V(a, b) {
        var f;
        if (b <= ri) return !1;
        b = null === (f = Pd) || void 0 === f ? void 0 : f.Tb();
        f = !!b && a === b.name;
        b = Af;
        if (!b) return !f;
        a = a === b.name && (!b.B || 3E3 >= oc() - b.start);
        return !f && !a
    }

    function da(a, b) {
        if (!Lb("dsa") || !a.startsWith("false")) {
            var f = Lb("dssv"),
                k = Lb("dsss"),
                p = k && f,
                x = k && !f,
                L = f && !k;
            f = !f && !k;
            k = b ? a + "|" + b : a;
            var aa = Tf();
            p && D(aa, k);
            x && (D(aa, a), mg(aa, Lg(b || "-"), void 0, Lb("ssc")));
            L && (D(aa, b || "-"),
                mg(aa, Lg(a), void 0, Lb("ssc")));
            f && mg(aa, Lg(k), void 0, Lb("ssc"))
        }
    }

    function xa() {
        var a = null,
            b = Sd[0];
        if (b) {
            b.Ea(0);
            b.ne();
            a = b;
            for (var f = 0; f < b.subActions.length; f++) a = b.subActions[f], a.Ea(0), a.ne()
        }
        return a
    }

    function $a(a, b, f, k, p, x) {
        void 0 === a && (a = oc());
        var L = Ba(!0),
            aa = Pd || xa(),
            sa = [];
        if (!L && b && f && a) sa = [!p + "", ea(f), p || "-1", ea(b), ea(k || "-"), a, Ne(), Sa(bb()), "", "", ea(location.hash.substring(1)), ea(x || "")];
        else if (aa) {
            aa.Mb();
            var ib = aa.status;
            aa.status = 2;
            ac(function() {
                aa.status = ib
            }, 0);
            sa = ["false", ea(aa.type),
                aa.id, ea(aa.name), ea(aa.info || "-"), aa.start, Ne(), Sa(bb()), "", "", ea(location.hash.substring(1)), ea(aa.aa || "")
            ]
        }
        return sa
    }

    function Xa(a, b, f) {
        void 0 === b && (b = null);
        var k = !1,
            p = Me();
        ab(p) && (k = p.iSAC());
        if (!k || p === X()) {
            a && (da("-"), ok = []);
            k = Bd();
            if (!k) {
                var x = Dd();
                x && V(vd("name"), vd("start")) && 3E3 >= oc() - vd("validUntil") && (k = x)
            }
            x = [];
            k && !k.kc ? (k.sh(), x = $a(k.start, k.Rb(), k.type, k.info, k.D, k.aa)) : b ? x = $a(b.start, b.name, b.type, b.info, b.id, b.aa) : a && (x = $a(f));
            a = x;
            f = ok;
            1 < f.length && 1 < a.length && f[3] === a[3] && (f[2] = a[2],
                f[0] = a[0], a = f);
            a.length && (f = Pa, b = f.timestamp, k = f.group, f = [Sa(f.name), b, Sa(k || ""), ea(Yb(f, !0))], da(a.join("|"), f.join("|")), ok = a.concat(f), ab(p) && p.sSAC(!0, !0))
        }
    }

    function mb(a, b) {
        return Dj("mcepsl") ? F(b) : F(b, Zb("mcepsl"))
    }

    function Tb(a, b, f, k) {
        var p;
        void 0 === f && (f = !1);
        return "tvn" === a || "svn" === a || "tvg" === a || "svg" === a ? b : b && b.length > k ? (f && (null === (p = Fb.console) || void 0 === p ? void 0 : p.log("Truncating agent event because the size for property [".concat(a, "] exceeds size limit of ").concat(k, " characters: [").concat(b.length,
            "]"))), Qb(b, k, "lcpSel" === a)) : b
    }

    function Dc(a, b) {
        for (var f = Zb("mcepsl"), k = [], p = 0; p < b.length; p++) {
            var x = b[p],
                L = x[0],
                aa = x[1];
            x = L;
            if (0 !== uc) {
                var sa = Pa,
                    ib = sa.name,
                    sb = sa.group;
                sa = sa.timestamp;
                aa = ib && aa === ib && "tvn" === x || sb && aa === sb && ("tvg" === x || "svg" === x) || sa && aa === sa + "" && "tvt" === x ? "" : aa
            }
            x = Tb;
            ib = pk[a];
            "function" === typeof ib && (x = ib);
            "object" === typeof ib && ib[L] && (x = ib[L]);
            ib = Qb(L, f);
            (L = x(L, aa, !1, Zb("mcepsl"))) && ib && k.push([ib, L])
        }
        return k
    }

    function Ec(a, b) {
        void 0 === b && (b = 1);
        var f = [b + "", a.id + "", "_event_", a.timestamp +
            "", a.kind + ""
        ];
        a = Dc(a.kind, a.$b);
        Ja(a, function(k) {
            var p = k[1];
            f.push(ea(k[0]));
            f.push(ea(p))
        });
        return f.join("|")
    }

    function Pc(a, b, f) {
        for (var k, p, x = "", L = "", aa = 0; aa < a.length; aa++) {
            var sa = a[aa];
            sa.Oe();
            var ib = sa.Hc();
            sa.$c(f);
            x || (x = sa.cb());
            L = sa.cb();
            if ("_load_" === sa.type && (De = !0, k = uh)) {
                L = [k.id, k.name, k.type, k.info, k.frameId, k.startTime];
                k.isDelayed ? (p = "", k.anchor && (p = "#" + k.anchor), L.unshift("d"), p = ea(k.Ba + p), L.push(p, "")) : L.unshift("s");
                L.push(k.aa || "");
                if (k.ua) {
                    p = k.ua;
                    var sb = p.timestamp,
                        fb = p.group;
                    L.push(p.name);
                    L.push(sb);
                    fb && L.push(fb)
                }
                k = k.Ba;
                p = L.join("|");
                L = k;
                b.push(p);
                uh = null
            }
            sa.parentFrameActionName && (k = b, p = k.push, sb = sa.We, sa = [0, sa.Ve, ea(sa.parentFrameActionName), sb].join("|"), p.call(k, sa));
            b.push(ib)
        }
        return {
            hb: x,
            Ba: L
        }
    }

    function Ic(a, b) {
        var f, k, p = Ra(Sd, function(sa) {
                return (sa.Be() || a || b) && !sa.vh()
            }),
            x = Xe;
        if (b) {
            x = [];
            Xe = [];
            for (var L = 0; L < p.length; L++) {
                var aa = p[L];
                G((f = {}, f.kind = 2 <= aa.status ? "ACTION_BEACON_FORCED" : "ACTION_CLOSED", f.detail = (k = {}, k.a = aa.start, k.s = aa.stop, k.r = aa.La(), k.i = aa.id, k.f = !0, k.t = aa.type,
                    k.x = aa.xhrUrl, k.rt = void 0, k.xm = aa.nb, k.xe = aa.Wa, k.cs = aa.Ga, k.ce = aa.Ra, k["in"] = aa.info, k), f))
            }
            re.Ca = [];
            Sb(Pd && null !== Pd ? Pd.Tb() : null);
            Pd = null
        }
        return {
            kh: p,
            pg: x
        }
    }

    function Ed(a, b) {
        void 0 === a && (a = !1);
        void 0 === b && (b = !1);
        var f = [],
            k = Ic(b, a);
        b = k.pg;
        k = Pc(k.kh, f, a);
        a = k.hb;
        k = k.Ba;
        Ja(e, function(p) {
            f.push(Ec(p))
        });
        Sd = db([], b, !0);
        e = [];
        return {
            xc: f.join(","),
            referer: a,
            sourceUrl: k
        }
    }

    function pe(a, b, f, k) {
        for (var p = 0, x = dj().slice(); p < x.length; p++) {
            var L = x[p];
            try {
                L(a, b, f, k)
            } catch (aa) {}
        }
    }

    function Ie() {
        return qk
    }

    function lh(a) {
        a =
            ea(a);
        Xl.includes(a) || Xl.push(a)
    }

    function ag(a) {
        return Xl.includes(a)
    }

    function Qe() {
        var a = {};
        try {
            for (var b = si; b && b !== Fb;) {
                var f = b.dT_;
                ab(f) && f.version !== Qa() && (a[f.version] = 1);
                b = b !== b.parent ? b.parent : void 0
            }
        } catch (k) {}
        return a
    }

    function Wa() {
        return !Qh
    }

    function bg(a, b, f, k) {
        b = Qe();
        b = Ra(w(b), vf);
        rk.push.apply(rk, b);
        0 < b.length && (b.unshift(Qa()), a.av(k, "afv", b.join(",")))
    }

    function vf(a) {
        return !rk.includes(a)
    }

    function Re() {
        if (si && si !== Fb) {
            var a = si.dT_;
            ab(a) && a.version === Qa() && vb(X(), a) && (ch = a, a = ch.tdto(),
                ab(a) && (Qh = a))
        }
    }

    function Gg() {
        try {
            Re()
        } catch (b) {}
        zd(bg);
        var a = X();
        Qh ? (qk = Qh.pageId, a.Ue = Qh.Ue, sk = ch.gFId(), ch.Si++) : (qk = Ne(), a.Ue = document.title);
        a.pageId = qk;
        B("DEBUG_INFO_REQUESTED", function() {
            var b = Qe();
            b = w(b);
            return 0 === b.length ? null : [{
                severity: "Error",
                text: "Version of current agent ".concat(Qa(), " mismatches with version").concat(1 < b.length ? "s" : "", " ").concat(b.join(", "), " of parent frames. Make sure to use the same version on all frames to secure compatibility!"),
                type: "mpv"
            }]
        })
    }

    function he(a) {
        return a &&
            1 === a.length ? Oc("featureHash").includes(a) : !1
    }

    function cf(a, b, f, k) {
        void 0 === k && (k = Jf(a));
        var p = Fb.dT_,
            x = !!X().syn;
        b = b || !x;
        a = x && !p.iMod().includes(a);
        return b && f && (k || a)
    }

    function Jf(a) {
        var b = Fb.dT_;
        if (b.ism(a) && !b.iMod().includes(a)) return b.iMod(a), !0;
        b.ism(a) && (a = 'Module "' + a + '" already enabled!', X().gCP || Fb.console.log("WARNING: " + a));
        return !1
    }

    function ee(a) {
        var b = rg.initializedModules || "";
        a && (b += a);
        return rg.initializedModules = b
    }

    function kd(a, b) {
        void 0 === b && (b = Qa());
        var f = Oc("agentUri");
        f = f.substring(0,
            f.lastIndexOf("/"));
        var k = Oc("csu");
        "true" === dh("dtUseDebugAgent") && Fb.dT_debugger && !k.includes("dbg") && (k = Oc("debugName") || k + "dbg");
        return "".concat(f, "/").concat(k, "_").concat(a, "_").concat(b, ".js")
    }

    function md(a) {
        return rg[a]
    }

    function dd(a, b) {
        var f;
        rg[a] = b + "";
        G((f = {}, f.kind = "CONFIG_UPDATE", f.detail = rg, f))
    }

    function Yf(a) {
        var b = a.Wg,
            f = a.ud;
        return a.$f || b && "sendBeacon" in navigator && !Lb("dsndb") && !f ? Bm : rh.ff ? Cm : Yl
    }

    function Jh() {
        return ti
    }

    function u(a, b, f, k, p, x) {
        vh = !1;
        a = k || ti.Ye(a, b, f);
        return a.beacon ?
            nb(!!f, a, p, x) : 0
    }

    function t(a, b, f, k, p, x) {
        var L = Mg(tb("dtAdkSettings")).overloadState;
        Rh = L;
        if (1 === L) return 0;
        if (2 !== L) return u(a, b, f, k, p, x) || 0;
        if (f) return 0;
        ac(function() {
            t(a, b, f, k, p, x)
        }, 5E3);
        return 0
    }

    function z(a, b) {
        var f = document.cookie,
            k = Sh(f),
            p = Oc("cuc");
        Q(b, "sn", encodeURIComponent(k));
        Q(b, "latency", "0");
        Q(b, "flavor", Lb("cors") ? "cors" : "post");
        if (void 0 === b.crc) {
            var x;
            k = a.ze ? a.pd : a.tf();
            "string" === typeof k ? x = (new TextEncoder).encode(k) : x = k;
            k = -1;
            for (var L = 0; L < x.length;) k = k >>> 8 ^ sg[(k ^ x[L++]) & 255];
            x = (k ^ -1) >>> 0; - 1 !== x && (b.crc = x)
        }
        Q(b, "vi", encodeURIComponent(a.Sb("vi") || og()));
        Q(b, "bp", 3);
        Q(b, "v", ui);
        Q(b, "app", encodeURIComponent(Oc("app")));
        Q(b, "type", "js3");
        Q(b, "dtAdk", encodeURIComponent(tb("dtAdk", f)));
        Q(b, "contentType", "");
        Q(b, "modifiedSince", Zb("lastModification"));
        Q(b, "svrid", bh());
        p && (b.en = p);
        b.contentType && "srRs" === b.contentType && Q(b, "msl", Zb("msl"));
        b.end = 1
    }

    function Q(a, b, f) {
        void 0 === a[b] && (a[b] = f)
    }

    function ja(a) {
        var b = "type sn svrid flavor vi contentType modifiedSince".split(" ");
        Lb("owasp") ||
            b.push("rf");
        Lb("cors") && b.push("dtAdk");
        b.push("bp");
        Oc("app") && b.push("app");
        a.contentType && b.push("v");
        "event" === a.contentType && b.push("st"); - 1 !== a.crc && b.push("crc");
        Oc("cuc") && b.push("en");
        "srRs" === a.contentType && b.push("msl");
        b.push("end");
        return b
    }

    function Oa(a, b) {
        z(a, b);
        var f = ja(b);
        a = Oc("reportUrl");
        (f = Da(Ra(f, function(k) {
            return !!b[k]
        }), function(k) {
            return "".concat(k, "=").concat(b[k])
        }).join("&")) && (a += "?" + f);
        return a
    }

    function nb(a, b, f, k) {
        var p;
        void 0 === f && (f = !1);
        void 0 === k && (k = (p = {}, p.contentType =
            "", p));
        if (ha() || !b.beacon) return 0;
        var x = b.beacon,
            L = b.referrer || Rb();
        jb(k, L, x);
        b = bc(x);
        if (!b.length) return 0;
        var aa = Yf({
                $f: Lb("svNB"),
                Wg: a,
                ud: f
            }),
            sa = Oa(x, k);
        Ja(Da(Da(b, function(ib, sb, fb) {
            return {
                path: sa,
                hb: L,
                beacon: x,
                Ac: ib,
                eg: sb,
                fg: fb.length,
                ud: f
            }
        }), function(ib) {
            return new aa(ib)
        }), yb);
        return 2
    }

    function jb(a, b, f) {
        b = encodeURIComponent(b || "");
        Q(a, "rf", pc(b, Zb("mhl"))[0]);
        Lb("owasp") && ti.av(f, "rf", b);
        ti.av(f, "time", oc())
    }

    function yb(a) {
        return !!Fa(xb, a)
    }

    function xb(a) {
        a.send().catch(function() {})
    }

    function bc(a) {
        if (a.pd) return [a.pd];
        a = a.tf();
        var b = X().syn ? 145E3 : Zb("msl") - 40;
        var f = a.length;
        b = 0 === f % b ? Math.floor(f / b) : Math.floor(f / b) + 1;
        if (!(1 < b)) return [a];
        if (1 > b || 20 < b) return [];
        b = X().syn ? 145E3 : Zb("msl") - 40;
        f = "sid=" + oc() + "&p#index#_#total#=";
        return pc(a, b, f)
    }

    function lc(a) {
        vh ? "number" !== typeof a ? Uc() : oc() + a < wh && Uc(a) : Uc(a)
    }

    function Uc(a) {
        Uf(Zl);
        "number" === typeof a ? (wh = oc() + (a || 0), Zl = ac(t, a), vh = !0) : t()
    }

    function Qc(a, b) {
        return t(a, b, !1)
    }

    function sc(a) {
        dj().push(function(b, f, k, p) {
            a(p, f, k, p.Nb)
        })
    }

    function Yc() {
        for (var a = za(), b = [], f = 0; f <
            a.length; f++) b.push({
            severity: "Error",
            type: "be",
            text: "Beacon sending failure instance ".concat(f + 1, " of ").concat(a.length, ": ").concat(a[f])
        });
        100 === a.length && b.push({
            severity: "Error",
            type: "be",
            text: "Beacon sending failures exceeded limit of ".concat(100, " errors!")
        });
        return b
    }

    function Xf() {
        ui = parseInt(Qa());
        ti = new Ng;
        cl = 0;
        Th(function(a, b, f) {
            f && (10 > Jc.length ? Jc.push(f) : (a = Jc[10]) ? Jc[10] = +a + 1 + "" : Jc.push("1"))
        });
        Rh = Mg(tb("dtAdkSettings")).overloadState;
        B("DEBUG_INFO_REQUESTED", Yc)
    }

    function sd() {
        for (var a = !1, b = [], f = 0, k = Xe; f < k.length; f++) {
            var p = k[f];
            p.bc && 0 < p.bc && (p.Va && oc() > p.Va && (p.Va += 6E4, b.push(p)), a = !0)
        }
        0 < b.length && t(!0, !0);
        for (f = 0; f < b.length; f++) k = b[f], k.bc && k.bc--;
        a && ac(sd, 1E3)
    }

    function tc(a, b, f) {
        var k = Pd;
        k !== a && (k && !f && Sb(k), (Pd = a) ? Fa(tk, a.id, b) : ya())
    }

    function le(a) {
        var b;
        xh = null;
        var f = (null === (b = null === ch || void 0 === ch ? void 0 : ch.gca) || void 0 === b ? void 0 : b.call(ch)) || [];
        if (xh = f[f.length - 1]) a.Ve = xh.id, a.parentFrameActionName = xh.name, xh.childFrameActions ? xh.childFrameActions++ : xh.childFrameActions =
            1
    }

    function Id() {
        var a = Mg(tb("dtAdkSettings")).overloadState;
        if (Rh !== a && (Rh = a, 0 !== a)) {
            a = 0;
            for (var b = Xe; a < b.length; a++) b[a].Zc()
        }
    }

    function Ad() {
        var a = [];
        for (var b = re.Ca.length - 1; 0 <= b; b--)
            if (re.Ca[b].Be()) {
                var f = pa(re.Ca, b);
                a = a.concat(f)
            }
        b = !1;
        Id();
        f = Xe;
        for (var k = f.length - 1; 0 <= k; k--) {
            var p = f[k];
            if (p.wh) pa(f, k);
            else {
                var x = a.includes(p),
                    L = xh;
                x ? (pa(f, k), b = !0) : L && (x = ch.gca(), p.We = si && x[x.length - 1] === L ? "S" : "A", xh = null)
            }
        }
        b && lc()
    }

    function td() {
        "hidden" === document.visibilityState ? (ej = "1", ye()) : ej = "0"
    }

    function ye() {
        var a;
        G((a = {}, a.kind = "VISIBILITY_CHANGED", a.detail = ej, a))
    }

    function id(a, b, f) {
        if (Ab(Array.prototype.reduce)) return Array.prototype.reduce.call(a, b, f);
        var k = "undefined" !== typeof f;
        f = k ? f : a[0];
        if ("undefined" === typeof f) throw new TypeError("Reduce of empty array with no initial value");
        for (k = k ? 0 : 1; k < a.length; k++) f = b(f, a[k], k, a);
        return f
    }

    function Je(a, b, f, k) {
        var p = ae() + Math.round(f.startTime),
            x = p - a;
        p >= a && p <= b && 0 <= x && (null == k.rb || x < k.ed) && (k.rb = f, k.ed = x)
    }

    function $c(a, b, f) {
        return id(a, function(k, p) {
            if ("rtRequestId" in
                p) return k;
            Je(b, f, p, k);
            return k
        }, {
            rb: null,
            ed: Number.MAX_VALUE
        }).rb
    }

    function kc(a, b) {
        return Ra(a, function(f) {
            return f.initiatorType === b
        })
    }

    function Ge(a, b, f, k) {
        try {
            if (!(a && performance && performance.getEntriesByName)) return null;
            var p = hb(a);
            p.startsWith("/") ? p = location.protocol + "//" + location.host + p : p.startsWith("http") || (p = location.href.substring(0, location.href.lastIndexOf("/") + 1) + p);
            var x = performance.getEntriesByName(p);
            b && (x = kc(x, b));
            if (x.length) return f ? $c(x, f, k || Number.MAX_VALUE) : x[x.length - 1];
            x =
                performance.getEntriesByType("resource");
            b && (x = kc(x, b));
            p.includes("?") || (p += "?");
            for (var L = {
                    rb: null,
                    ed: Number.MAX_VALUE
                }, aa = x.length - 1; 0 <= aa; aa--) {
                var sa = x[aa];
                if (0 === sa.name.lastIndexOf(p, 0))
                    if (f) Je(f, k || Number.MAX_VALUE, sa, L);
                    else return sa
            }
            return L.rb
        } catch (ib) {
            return null
        }
    }

    function bf(a) {
        return fj && H(a, 13) && "navigation" !== a.entryType || H(a, ["_dtCl"])
    }

    function Lf(a) {
        return Vm && H(a, 14) || H(a, ["entryType", "requestStart"]) && "navigation" === a.entryType
    }

    function Cg(a) {
        Ye++;
        (a = Kc(a.detail.i)) && !a.ua &&
            (a.ua = Pa)
    }

    function Oe(a) {
        Ye--;
        if (a = Kc(a.detail.i)) a.Ah = gd(a.stop) || Pa;
        1 > Ye && (Hd = [])
    }

    function Kf(a, b, f) {
        var k = b[mf[a]];
        b = b.startTime;
        if (k)
            if ("yK".includes(a)) f.push(a, k);
            else if ("T" === a) "number" === typeof k && 0 > k && 0 === k % 1 && f.push(a, k);
        else {
            var p = +k >= b;
            "j" === a && gj(k, 2) && Math.abs(k - b) < Wm && (p = !1);
            var x = k;
            "uvwxACDEFNOPQRSTUX".includes(a) ? p = 0 <= +k : "number" === typeof k ? x = Math.round(k - b) : x = k;
            p && f.push(a, x)
        }
    }

    function Zf(a, b, f) {
        if (b = b[yh[a]]) {
            var k = 0 <= b;
            "j" === a && 0 === b && (k = !1);
            k && f.push(a, Math.round(b))
        }
    }

    function kh(a,
        b, f) {
        (b = b[Ej[a]]) && f.push(a, b)
    }

    function ze(a, b) {
        a = a.serverTiming;
        for (var f = {}, k = 0, p = Dm; k < p.length; k++) {
            var x = p[k];
            f[x] = ""
        }
        if (a) {
            for (k = 0; k < a.length; k++) p = a[k], p.description && !isNaN(+p.description) && (x = p.name, x in f && !f[x] && (f[x] = p.description));
            f.dtRequestID && (b.push("C"), b.push(f.dtRequestID));
            f.dtRpid && (b.push("M"), b.push(f.dtRpid));
            f.dtSInfo && (b.push("V"), b.push(f.dtSInfo));
            f.dtTao && (b.push("W"), b.push(f.dtTao))
        }
    }

    function ce(a, b, f, k) {
        var p = 0;
        for (a = w(a); p < a.length; p++) f(a[p], b, k)
    }

    function Dg() {
        if (!window.performance) return [];
        var a = null,
            b = -1,
            f = ae();
        "getEntriesByType" in performance && (a = performance.getEntriesByType("navigation")[0]) && a.type && (b = Xm[a.type]);
        a && "responseEnd" in a || (a = performance.timing); - 1 === b && (b = performance.navigation.type);
        return (!X().googleBot || X().syn) && 0 < f ? (b = ["a", b, "b", Math.round(f)], xe(a, b, f), b) : []
    }

    function xe(a, b, f) {
        if (Ym && H(a, 12) || H(a, ["navigationStart"]) && !("entryType" in a))
            for (var k in Df) {
                if (ka(Df, k)) {
                    var p = k,
                        x = a[Df[p]];
                    if (x) {
                        var L = x >= f;
                        "j" === k && x === f && (L = !1);
                        L && b.push(p, Math.round(x - f))
                    }
                }
            } else if (f =
                X(), f = f.gFU ? f.gFU() : {}, bf(a)) {
                ce(mf, a, Kf, b);
                k = b.push;
                x = k.apply;
                L = [];
                if (bf(a)) {
                    if ("xmlhttprequest" === a.initiatorType || "fetch" === a.initiatorType) {
                        var aa = "1";
                        hj[a.name] && (aa = "11", delete hj[a.name]);
                        L.push("z", aa)
                    } else hj[a.name] && (L.push("z", "01"), delete hj[a.name]);
                    aa = "";
                    "frame" === a.initiatorType ? aa = "f" : "iframe" === a.initiatorType || "subdocument" === a.initiatorType ? aa = isNaN(f[a.name]) ? "i" : "i" + f[a.name] : 0 <= (a.frameId || -1) && (aa = "r" + a.frameId);
                    aa && L.push("B", aa)
                } else hj[a.name] && (L.push("z", "01"), delete hj[a.name]);
                x.call(k, b, L);
                b.push("I", null !== (p = $l[a.initiatorType]) && void 0 !== p ? p : 0);
                ze(a, b)
            } else Lf(a) ? (ce(yh, a, Zf, b), ze(a, b)) : ce(Ej, a, kh, b)
    }

    function rf() {
        Lb("ntd") || zd(function(a, b, f, k) {
            b || Em || !a.hla(k) || (Em = !0, b = am || Dg(), a.av(k, "nt", b.join("") || "0", !0), am = void 0)
        })
    }

    function cg(a) {
        var b;
        if (!a) return null;
        var f = null === (b = a.getEntriesByType) || void 0 === b ? void 0 : b.call(a, "navigation")[0];
        Lf(f) || (f = a.timing);
        return f
    }

    function me(a, b) {
        void 0 === b && (b = !1);
        if (!a) return null;
        for (var f, k = Kd(a), p = 0, x = Zm; p < x.length; p++)
            if (f =
                Ac(a, x[p], b) || -1, 0 < f && f !== k) return Math.round(f);
        return null
    }

    function Ac(a, b, f) {
        void 0 === f && (f = !1);
        var k = cg(a);
        if (!k) return null;
        b = k[b];
        if ("number" !== typeof b || 0 === b) return null;
        a = Kd(a);
        Lf(k) ? f && (b += a) : f || (b -= a);
        return Math.round(b)
    }

    function Kd(a) {
        var b;
        return Math.round(a.timeOrigin || (null === (b = a.timing) || void 0 === b ? void 0 : b.navigationStart) || -1)
    }

    function Yd() {
        var a;
        G((a = {}, a.kind = "INSTRUMENTATION_TRIGGERED", a.detail = void 0, a))
    }

    function Zc(a) {
        var b = Xe;
        le(a);
        b.push(a);
        b = Pd;
        b !== a && (Sb(b), Pd = a);
        Sd.push(a);
        ac(sd, 5E3)
    }

    function He(a) {
        var b = a.start,
            f = a.xhrUrl,
            k = a.zd,
            p = a.Ba,
            x = a.tb;
        x = void 0 === x ? !1 : x;
        var L = a.isCustomAction;
        L = void 0 === L ? !1 : L;
        var aa = a.fb;
        aa = void 0 === aa ? !1 : aa;
        var sa = a.qf;
        sa = void 0 === sa ? -1 : sa;
        var ib = a.aa;
        ib = void 0 === ib ? "" : ib;
        var sb = a.ua,
            fb = a.Wc,
            Xb = a.id;
        a = new eh(b, a.stop || b, a.type, a.name, a.info || "", a.domNodes || -1, ne(void 0 === p ? "" : p), document.title, f || "", L, aa, x, k, sa, ib, Fm, sb, fb, Xb);
        Id();
        a.Sc() && re.Ca.push(a);
        re.actions[a.id] = a;
        Fa(vi);
        return a
    }

    function ne(a) {
        if (a) {
            var b = document.createElement("a");
            b.href = a;
            if ("file:" === b.protocol || "about:" === b.protocol || b.hostname) return b.href;
            var f = function(k, p, x, L) {
                k.av(L, "rfi", 1, !1);
                wi(f)
            };
            zd(f)
        }
        return location.href
    }

    function Be(a) {
        var b, f, k;
        a.start || (a.start = oc());
        var p = He(a);
        p.qa = ac(function() {
            if (p && (3 !== p.status || p.Vc())) {
                var L = p.start + 1E3 * Zb("oat");
                Ld(p.id, L, void 0, !0)
            }
        }, 1E3 * Zb("oat"));
        var x = null;
        switch (Bb(a.Aa)) {
            case 1:
                x = Pd;
                break;
            case 2:
                if (x = Kc(a.Aa), !x && "_load_" === a.type) return p
        }
        G((b = {}, b.kind = "ACTION_ENTERED", b.detail = (f = {}, f.i = p.id, f.a = a.start,
            f.s = 0, f.x = a.xhrUrl, f.r = x ? x.La() : p.id, f.t = p.type, f.e = null === (k = Bd()) || void 0 === k ? void 0 : k.target, f.rt = void 0, f.xm = p.nb, f.xe = p.Wa, f.cs = p.Ga, f.ce = p.Ra, f["in"] = p.info, f), b));
        "undefined" === typeof a.qf && tc(p, !1, !!x);
        if (x)
            for (x = x.Tb(), x.Nd(p), a = 0, b = Xe; a < b.length; a++) f = b[a], f.Va && f.Va > p.start + 1E4 && (f.Va = p.start + 1E4);
        else Zc(p.Hg()), nf();
        return p
    }

    function Ld(a, b, f, k) {
        var p, x;
        void 0 === k && (k = !1);
        a = Kc(a);
        var L = X();
        !b && a && "_load_" === a.name && "_load_" === a.type && L.gLVD && ((k = Ac(Fb.performance, "loadEventEnd")) ? (b =
            L.gVCP(), b = Math.max(b, k) + ae()) : b = oc(), k = !0);
        L = "number" === typeof b && (null === a || void 0 === a ? void 0 : a.isCustomAction);
        b = b || oc();
        a && (G((p = {}, p.kind = "ACTION_LEFT", p.detail = (x = {}, x.i = a.id, x.a = a.start, x.s = b, x.r = a.La(), x), p)), a.Ec(b, f, L, k), Ad());
        tc(nc(), !0)
    }

    function Pe(a, b, f) {
        var k = Pd;
        "undefined" !== typeof b && null !== b && (k = Kc(b));
        if (k) return k.Nd(a, f), !1;
        le(a);
        Sd.push(a);
        return !0
    }

    function $f(a, b, f, k, p, x, L, aa) {
        "undefined" === typeof k ? k = !0 : null === k && (k = !1);
        a = {
            name: Cc(a),
            type: b,
            start: f,
            Aa: k,
            info: p || "",
            xhrUrl: x ||
                "",
            isCustomAction: !!L
        };
        aa && (a.Ba = aa);
        return Be(a).id
    }

    function sf(a, b, f) {
        Yd();
        Ld(a, b, f)
    }

    function Kh(a, b, f, k) {
        a = He({
            type: a,
            name: Qb(b + "=" + f, Zb("mpl")),
            start: oc(),
            tb: !0
        });
        Pe(a, k);
        lc()
    }

    function Ug(a) {
        for (var b = re.Ca.slice(), f = 0; f < b.length; f++) Ld(b[f].id, a);
        return b.length
    }

    function tf(a) {
        for (var b = 0, f = Og; b < f.length; b++)
            if (f[b].D === a) return !0;
        return !1
    }

    function Fg(a) {
        if (Za(a)) return !0;
        var b = of ();
        return !!((null === b || void 0 === b ? 0 : b.exec) && a && (b.exec(a) || b.exec(hb(a))))
    }

    function oe(a, b, f, k, p, x, L) {
        void 0 === b &&
            (b = 3);
        void 0 === f && (f = "");
        void 0 === k && (k = !1);
        void 0 === p && (p = void 0);
        void 0 === x && (x = !1);
        void 0 === L && (L = !1);
        if (f && Fg(f)) return 0;
        var aa = ec(f),
            sa = Bd(),
            ib = a || "-",
            sb = Ba(!1);
        if (ld) {
            if (sb && !Kc(sb)) return 0;
            Ef = !0
        }
        sa && (sa.info = "-" === sa.info ? ib : sa.info + ", " + ib);
        !sb && (null === sa || void 0 === sa ? 0 : sa.D) && (sb = sa.D);
        f = hb(f);
        hj[f] = !0;
        a = {
            name: a,
            type: "xhr",
            start: oc(),
            info: ib,
            xhrUrl: aa,
            isCustomAction: k,
            zd: p,
            Wc: L
        };
        sb ? (sa = 0, x || (a.Aa = sb, sa = Eg(a))) : sa ? (sb = 0, 3 <= b && (sb = Mf(La(La({}, a), {
            name: sa.Rb(),
            type: sa.type,
            start: sa.start,
            info: sa.info,
            Ba: sa.url,
            Aa: !1,
            aa: sa.aa || "",
            ua: sa.view
        })), sa.D = sb, sa.kc && Xa(!0, Kc(sb))), sa = sb) : (sa = Pd) ? (sb = 0, 1 <= b && !x && (sb = Eg(La(La({}, a), {
            Aa: sa.id
        }))), sa = sb) : sa = Lb("cux") ? Mf(La(La({}, a), {
            name: "Unlinked XHR",
            type: "xhr",
            Aa: !1
        })) : 0;
        return sa
    }

    function Mf(a) {
        a: {
            var b = a.info;
            var f = a.xhrUrl;
            if (a.zd && Og.length)
                for (var k = Og.length - 1; 0 <= k; k--) {
                    var p = Og[k],
                        x = p.D,
                        L = Mc(x);
                    if (L && b && !b.startsWith(p.sg) && Pb(L.xhrUrl || "") === p.xhrUrl && p.xhrUrl === Pb(f || "")) {
                        b = x;
                        break a
                    }
                }
            b = 0
        }
        if (b) return b;a.fb = !0;
        return Be(a).id
    }

    function Eg(a) {
        var b =
            a.Aa,
            f = null;
        "number" === typeof b && (f = Mc(b));
        a.Aa = f ? f.id : !0;
        return Mf(a)
    }

    function uf(a, b, f, k) {
        void 0 === b && (b = oc());
        void 0 === k && (k = Na);
        var p = Mc(a);
        if (!p) return -1;
        p.Ge();
        return ac(function() {
            dg(a, b, f);
            k()
        }, 0)
    }

    function dg(a, b, f) {
        void 0 === b && (b = oc());
        var k = Mc(a);
        !k || f && !k.info.includes(f) && k.name !== f || (k.Ge(), ac(function() {
            if (!Ef) {
                var p = b;
                Mc(a) && Ld(a, p)
            }
        }, Fj), Yd())
    }

    function Vg(a, b) {
        if (a) {
            var f = Mc(a);
            f && (f.hd++, f.Ga || b && 4 !== b || f.uh(oc()), pg.push(a), th++)
        }
    }

    function ge(a) {
        if (a) {
            var b = Mc(a);
            b && (b.th(oc()),
                b.hd--, th--, ac(function() {
                    ca(a)
                }, 0))
        }
    }

    function Rd(a, b, f) {
        if ("number" !== typeof a || isNaN(a) || 0 > a) return !1;
        0 === a && (a = 971, b = "XHR Canceled");
        b && (b += "");
        f = Kc(f) || Pd;
        if (!f || -1 !== f.Wa || !f.fb) return !1;
        f.Wa = a;
        b && 0 < b.length && (f.nb = b);
        return !0
    }

    function g() {
        return !Lb("disableXhrFailures")
    }

    function q(a) {
        return (a = Kc(a)) && a.fb ? [a.Ga, a.Ra] : [0, 0]
    }

    function E(a, b) {
        var f = Mc(a);
        if (f) {
            var k = f.xhrUrl;
            f.hf(b);
            f = 0;
            for (var p = Og; f < p.length; f++) {
                var x = p[f];
                x.D === a && x.xhrUrl === Pb(k) && (x.xhrUrl = Pb(b))
            }
        }
    }

    function C(a) {
        return (a =
            Mc(a)) ? a.xhrUrl : ""
    }

    function W(a, b) {
        (a = Mc(a)) && a.ph(b)
    }

    function M(a, b, f, k, p) {
        void 0 === k && (k = "headers");
        void 0 === p && (p = void 0);
        a = a || {};
        b = b || a.url;
        a[k] = a[k] || {};
        f = f || a.actionId;
        var x;
        if (!(x = !a[k] || !xi())) {
            if (x = !Za(b)) x = !(Gj && b && (Gj.test(b) || Gj.test(hb(b))));
            x = !x
        }
        if (x) return a;
        var L = !(!yi || !b || !yi.test(b) && !yi.test(hb(b)));
        var aa = "";
        x = Jd(f);
        if (L) {
            aa = I(f);
            L = a;
            var sa = aa,
                ib = k,
                sb = [],
                fb = Sh(),
                Xb = bh(fb).replace("-", "-2D");
            sb.push('sn="v_4_srv_'.concat(Xb, "_sn_").concat(Hj(fb), '"'));
            sa && sb.push('pc="'.concat(sa,
                '"'));
            sb.push('v="'.concat(zi(), '"'));
            sb.push('app="'.concat(Oc("app"), '"'));
            (sa = tb("dtAdk")) && sb.push('adk="'.concat(sa, '"'));
            sb = sb.join(", ");
            sa = Zb("mhl") - sb.length - 6;
            sb += ', r="'.concat(Qb(Db(x), Math.max(sa, 0)), '"');
            dc(L, "x-dtc", sb, ib)
        }
        if (Gc(b)) return a;
        p && dc(a, "traceparent", "00-".concat(p.traceId, "-").concat(p.spanId, "-00"), k);
        p = Lb("dpch");
        f && (p || (L = a, f = aa || I(f), aa = k, f && (ic(L, "x-dtpc", f, aa), Ga() && (ic(L, "x-dtreferer", Db(Rb()), aa), ic(L, "x-host", N(b), aa)))), x && x !== Rb() && ic(a, "x-dtreferer", Db(x), k));
        Fg(b) && !p && ic(a, "x-dtpc", "ignore", k);
        return a
    }

    function pb(a) {
        a = Ai(a);
        if (!a) return null;
        try {
            return new RegExp(a, "i")
        } catch (b) {}
        return null
    }

    function Ub() {
        yi = pb(Oc("chw"));
        Gj = pb(Oc("xhb"));
        B("CONFIG_UPDATE", function() {
            yi = pb(Oc("chw"));
            Gj = pb(Oc("xhb"))
        })
    }

    function gc() {
        var a = Pd;
        return a ? a.name : ""
    }

    function Sc(a) {
        for (var b = 0, f = re.Ca; b < f.length; b++) f[b].vf = a.detail
    }

    function Ae(a) {
        var b;
        return null === (b = Kc(a)) || void 0 === b ? void 0 : b.Yf()
    }

    function Nf() {
        var a = document,
            b = a.documentElement,
            f = 0,
            k = 0,
            p = a.body;
        "number" ===
        typeof self.innerWidth ? (f = self.innerWidth, k = self.innerHeight) : a && (b.clientWidth || b.clientHeight) ? (f = b.clientWidth, k = b.clientHeight) : p && (p.clientWidth || p.clientHeight) && (f = p.clientWidth, k = p.clientHeight);
        if (0 > f || 0 > k) a = 0, rh.ie ? a = 140 : a = 10, f = Math.max(f, a), k = Math.max(k, 10);
        X().bwsW = f;
        X().bwsH = k
    }

    function eg() {
        var a = X();
        B("LOAD_END", Nf);
        zd(function(b, f, k, p) {
            if (!f) {
                f = function(sa) {
                    return 0 > sa || 2147483647 <= sa || isNaN(sa) ? 0 : sa
                };
                k = a.bwsW;
                var x = a.bwsH,
                    L = Me();
                ab(L) && (k = L.bwsW, x = L.bwsH);
                0 >= k && (Nf(), k = a.bwsW, x = a.bwsH);
                k = f(k);
                L = f(x);
                var aa = x = 0;
                b.av(p, "w", k);
                b.av(p, "h", L);
                if (k = Fb.screen) x = f(k.width), aa = f(k.height), b.av(p, "sw", x), b.av(p, "sh", aa)
            }
        })
    }

    function mh() {
        var a = 0,
            b = 0,
            f = 0,
            k = "Info",
            p = [];
        Lb("coo") && Lb("cooO") ? (a++, p.push({
            severity: "Info",
            text: "Opt-in mode is active, but dtrum.enable() has been called.",
            type: "cooeaoa"
        })) : Lb("coo") && (k = "Warning", b++, p.push({
            severity: "Warning",
            text: "Opt-in mode is active. Call dtrum.enable() to start collecting data.",
            type: "cooe"
        }));
        if (ha()) {
            b++;
            k = "Warning";
            var x = X().disabledReason,
                L = "Agent for application '".concat(Oc("app"), "' is currently disabled because of ");
            p.push({
                severity: "Warning",
                text: "".concat(L).concat(x || "a missing RUM License or RUM was disabled for this application", "."),
                type: "jsad"
            })
        }
        Lb("dsss") && (b++, k = "Warning", p.push({
            severity: "Warning",
            text: "DISABLE_SUBDOMAIN_SOURCEACTION_SUPPORT is set.",
            type: "sssd"
        }));
        a: {
            x = Oc("featureHash");L = 0;
            for (var aa = "7degijmovx".split(""); L < aa.length; L++)
                if (x.includes(aa[L])) {
                    x = !1;
                    break a
                }
            x = !0
        }
        x && (b++, k = "Warning", p.push({
            severity: "Warning",
            text: "No module(that could detect a XHR) is active!",
            type: "nxma"
        }));
        Gb() && (b++, k = "Warning", p.push({
            severity: "Warning",
            text: "Should not track is set on this browser and respected by the RUM monitoring code!",
            type: "snt"
        }));
        if (x = Oc("doNotDetect")) x = Oc("featureHash"), x = !x.includes("a") && !x.includes("l");
        x && (b++, k = "Warning", p.push({
            severity: "Warning",
            text: "Do not detect values are configured & neither module 'a' nor 'l' are active. This can result in missing user actions!",
            type: "dnt"
        }));
        Lb("ssc") && "https:" !==
            location.protocol && (f++, k = "Error", p.push({
                severity: "Error",
                text: "Secure cookies are enabled, but can't be set as the page isn't using https.",
                type: "scbip"
            }));
        return 0 < p.length ? (a = [fg(f, "Error"), fg(b, "Warning"), fg(a, "Info")], [{
            severity: k,
            text: "".concat(a.join(""), "regarding agent configuration."),
            type: "ci",
            children: p
        }]) : null
    }

    function fg(a, b) {
        return a ? "".concat(a, " ").concat(b).concat(1 < a ? "s" : "", " ") : ""
    }

    function df() {
        B("DEBUG_INFO_REQUESTED", mh);
        zd(function(a, b, f, k) {
            Lb("ssc") && "https:" !== location.protocol &&
                a.av(k, "sconsp", 1)
        })
    }

    function Of() {
        return Oc("rpid") ? "automatically" : "manually"
    }

    function Pf() {
        uk = void 0;
        rb(document.currentScript) && (Bi = document.currentScript);
        B("DEBUG_INFO_REQUESTED", function() {
            uk || (uk = Bi ? Bi.src ? Bi.dataset.dtconfig ? "OneAgent JavaScripTag ".concat(Of(), " injected") : Bi.src.includes("_complete") ? "JavaScriptTag ".concat(Of(), " injected") : Bi.getAttribute("defer") ? "CodeSnippetDeferred ".concat(Of(), " injected") : "CodeSnippetSync ".concat(Of(), " injected") : Bi.dataset.dtconfig ? "InlineCode ".concat(Of(),
                " injected") : "Couldn't detect injection mode." : "Couldn't detect injection mode.");
            return [{
                severity: "Info",
                text: uk,
                type: "im"
            }]
        })
    }

    function ef(a) {
        switch (a) {
            case 1:
                if ((a = document.currentScript) && rb(a)) {
                    a: {
                        var b, f;
                        if (document.documentElement && (a = document.documentElement.outerHTML.split(a.outerHTML), 2 === a.length)) {
                            a = (null === (f = null === (b = a[0]) || void 0 === b ? void 0 : b.split("\n")) || void 0 === f ? void 0 : f.length) + 1;
                            break a
                        }
                        a = void 0
                    }
                    return "Agent is double injected! Is it manually and automatic injected? Current used agent is near: ".concat(document.location,
                        ":").concat(a)
                }
                return "Agent is double injected! Is it manually and automatic injected?";
            case 2:
                return "Problem detected while agent initialization! Snippet couldn't initialize so can't initialize monitoring code";
            case 3:
                return "Problem detected while agent initialization! Snippet couldn't initialize as initConfig didn't initialize.";
            default:
                return ""
        }
    }

    function Qf() {
        B("DEBUG_INFO_REQUESTED", function() {
            return 0 !== X().di ? [{
                severity: "Error",
                text: ef(X().di),
                type: "di"
            }] : null
        });
        zd(function(a, b, f, k) {
            0 === X().di ||
                b || a.av(k, "di", X().di)
        })
    }

    function wf() {
        var a = [];
        Ja([{
            object: window,
            jd: "window",
            Lc: ["postMessage", "Map", "Array", "WeakMap", "MutationObserver"]
        }, {
            object: Array.prototype,
            jd: "Array.prototype",
            Lc: "forEach map filter every some find includes join reverse slice sort splice concat pop push shift unshift".split(" ")
        }, {
            object: Map.prototype,
            jd: "Map.prototype",
            Lc: ["forEach"]
        }], function(b) {
            var f = b.object,
                k = b.jd;
            b = b.Lc;
            f && Ja(b, function(p) {
                Ab(f[p]) || a.push("".concat(k, ".").concat(p))
            })
        });
        return a.length ? [{
            severity: "Warning",
            text: "The following native functions are modified: ".concat(a.join(", ")),
            type: "mnf"
        }] : null
    }

    function Mh() {
        var a;
        return G((a = {}, a.kind = "DEBUG_INFO_REQUESTED", a.detail = void 0, a)).flat()
    }

    function Wg() {
        zd(function() {
            if (!rg.disableCookieManager) {
                var a = Sh();
                if (!a || !a.includes("_srv_-")) try {
                    if (Fb.sessionStorage) {
                        var b = a,
                            f = Ij(Pg()) || "";
                        Ze(f) || (f = "");
                        if (f && "null" !== f && b !== f) {
                            var k = Mg(f).sessionId || "";
                            if ("undefined" !== typeof b && "" !== b) {
                                if ((f = b) && k) {
                                    var p = f,
                                        x = p.indexOf("_sn_");
                                    if (-1 !== x) {
                                        var L = p.indexOf("_",
                                                x + 4),
                                            aa = -1 !== L ? p.substring(x, L) : p.substring(x);
                                        aa && (p = p.replace(aa, "_sn_" + k))
                                    }
                                    f = p
                                }
                                var sa = f
                            } else sa = f;
                            b = sa
                        }
                        if (a = b) zh(a), Ee(Pg(), a)
                    }
                } catch (ib) {}
            }
        })
    }

    function ff(a) {
        B("ACTION_ENTERED", function k(f) {
            a.dtWF = k;
            f = f.detail;
            var p = f.i;
            a(p, f.a, f.r === p, f.e)
        })
    }

    function Se(a) {
        B("ACTION_LEFT", function k(f) {
            a.dtWF = k;
            f = f.detail;
            var p = f.i;
            a(p, f.s, f.r === p)
        })
    }

    function wd(a, b) {
        e.push(a);
        0 === b ? lc() : lc(2E3)
    }

    function xd(a, b, f, k, p) {
        void 0 === f && (f = !1);
        void 0 === k && (k = oc());
        void 0 === p && (p = 0);
        var x = b;
        if (1 === p && "_csprv_" === a) {
            if (0 !==
                uc) {
                x = Pa;
                var L = x.timestamp,
                    aa = x.group,
                    sa = x.trigger;
                b.push(["tvn", x.name]);
                b.push(["tvt", L + ""]);
                b.push(["tvtrg", sa + ""]);
                b.push(["tvm", Yb(x)]);
                aa && b.push(["tvg", aa])
            }
            x = b
        }
        a = {
            id: Gd(),
            timestamp: k,
            kind: a,
            $b: x
        };
        switch (Bb(f)) {
            case 1:
                (f = Pd) ? f.Ld(a): wd(a, p);
                break;
            case 2:
                (f = Kc(f)) ? f.Ld(a): wd(a, p);
                break;
            case 0:
                wd(a, p)
        }
    }

    function gf(a, b) {
        return a ? {
            oldView: a,
            newView: b
        } : {
            newView: b
        }
    }

    function Te(a, b) {
        void 0 === b && (b = Zb("vncm"));
        var f = new URL(a);
        a = f.pathname;
        f = f.hash;
        0 === b ? b = a + f : 2 === b ? (b = f || "/", b.startsWith("#") && (b =
            b.replace("#", "")), b.startsWith("/") || (b = "/" + b)) : b = a;
        return b
    }

    function hf(a, b) {
        a.name = b.name;
        b.group && (a.group = b.group);
        a.hydrated = !0
    }

    function Zd(a) {
        var b = [],
            f = a.name,
            k = a.timestamp,
            p = a.group,
            x = a.trigger;
        f && k && (b.push(["svn", f]), b.push(["svt", k + ""]), b.push(["svtrg", x + ""]), b.push(["svm", Yb(a)]));
        p && b.push(["svg", p]);
        return b
    }

    function nh(a) {
        var b = [],
            f = a.oldView,
            k = a.newView;
        f && b.push.apply(b, Zd(f));
        f = k.group;
        var p = k.trigger;
        b.push(["tvn", k.name]);
        b.push(["tvtrg", p + ""]);
        b.push(["tvm", Yb(k)]);
        f && b.push(["tvg",
            f
        ]);
        b.length && xd("_view_", b, !1, a.newView.timestamp || void 0, 1)
    }

    function gg(a) {
        De ? nh(a.detail) : Cd(a.detail)
    }

    function hg(a) {
        a.detail.i === zf && (a = Mb, a.length && (Ja(a, nh), Mb = []), J("ACTION_SENT", hg))
    }

    function oh() {
        cb = Pa = La(La({}, Pa), {
            id: ++ba,
            timestamp: oc(),
            kind: 2,
            hydrated: !1
        });
        nh({
            newView: Pa
        })
    }

    function ig() {
        Cf(Fb, "pageshow", function(a) {
            var b;
            "persisted" in a && a.persisted && G((b = {}, b.kind = "BF_CACHE_RESTORED", b.detail = void 0, b))
        })
    }

    function $d(a, b) {
        void 0 === b && (b = Zb("dvl"));
        var f;
        return function() {
            for (var k = this,
                    p = [], x = 0; x < arguments.length; x++) p[x] = arguments[x];
            void 0 !== f && Uf(f);
            f = ac(function() {
                a.apply(k, p)
            }, b)
        }
    }

    function Od() {
        if (1 === uc) {
            var a = Pa,
                b = Te(Rb());
            a = a.name;
            (a + "/" === b ? 0 : a !== b) && jg({
                name: b
            })
        }
    }

    function Hg() {
        var a, b = Pa,
            f = cb;
        b.id !== f.id && (G((a = {}, a.kind = "VIEW_STABLE", a.detail = gf(f, b), a)), cb = b)
    }

    function jg(a) {
        var b, f = Pa,
            k = La,
            p = La,
            x = Zb("rtu"),
            L = La({}, a);
        L.name = Qb(a.name, x, !0);
        a.group && (L.group = Qb(a.group, x, !0));
        Pa = a = k(p({}, L), {
            timestamp: oc(),
            id: ++ba,
            kind: 1,
            trigger: uc,
            hydrated: !1
        });
        0 < Ye && Hd.push(a);
        G((b = {}, b.kind = "VIEW_CHANGE", b.detail = gf(f, Pa), b));
        dl()
    }

    function Ke(a) {
        var b, f, k, p = null === (b = null === a || void 0 === a ? void 0 : a.detail) || void 0 === b ? void 0 : b.oldView;
        p && (a = null === (k = null === (f = null === a || void 0 === a ? void 0 : a.detail) || void 0 === f ? void 0 : f.newView) || void 0 === k ? void 0 : k.timestamp, Xg(p, 0, a))
    }

    function Xg(a, b, f) {
        var k, p = G((k = {}, k.kind = "VIEW_END", k.detail = {
            view: a,
            Dh: 1 === b
        }, k)).flat();
        0 !== p.length && (a = db(db([], p, !0), Zd(a), !0), xd("_viewend_", a, !1, f, 1))
    }

    function kg(a) {
        var b = History.prototype[a];
        b && (History.prototype[a] =
            function() {
                for (var f = [], k = 0; k < arguments.length; k++) f[k] = arguments[k];
                k = Gm.dtAWF(b, this, f);
                var p, x;
                G((p = {}, p.kind = "HISTORY_API_EVENT", p.detail = (x = {}, x.t = a, x.p = f, x), p));
                return k
            })
    }

    function ph(a, b, f, k) {
        if (!b) {
            b = Pa;
            f = b.timestamp;
            var p = b.group,
                x = b.trigger;
            a.av(k, "tvn", encodeURIComponent(ea(b.name)));
            a.av(k, "tvt", f + "");
            a.av(k, "tvm", encodeURIComponent(Yb(b)));
            a.av(k, "tvtrg", x + "");
            p && a.av(k, "tvg", encodeURIComponent(ea(p)))
        }
    }

    function Ue() {
        Jj || (Jj = document.createElement("doc:rdy"));
        if (Jj.doScroll) {
            var a = function() {
                try {
                    Jj.doScroll("left"),
                        Jj = void 0, fh = oc(), Yd()
                } catch (b) {
                    ac(a, 0)
                }
            };
            a()
        } else document.addEventListener("DOMContentLoaded", function() {
            fh = oc();
            Yd()
        }, !1)
    }

    function Nh() {
        return Kj
    }

    function Ce() {
        var a = hc,
            b = cg(Fb.performance);
        if (!b) return Math.round(a);
        var f = Lf(b) ? 6E4 >= b.domContentLoadedEventStart : 6E4 >= Math.abs(b.domLoading - a);
        if (!X().syn && !f) return a;
        f = ae();
        var k = b.redirectStart,
            p = b.fetchStart;
        b = (Lf(b) ? 0 : f) + 6E4;
        b = k ? b > k ? f : k : p ? b > p ? f : p : f;
        isFinite(b) && (a = b);
        return Math.round(a)
    }

    function lg() {
        var a = Ac(Fb.performance, "loadEventEnd", !0),
            b = oc();
        return Math.round(a || b)
    }

    function xf(a, b) {
        var f;
        Uh--;
        if (Vh && b) {
            var k = (Vh.get(b) || 1) - 1;
            k ? Vh.set(b, k) : Vh.delete(b)
        }
        if (!Uh && Wh) try {
            G((f = {}, f.kind = "LOAD_END", f.detail = void 0, f))
        } catch (p) {}
        0 >= Uh && (Wh && (b = Wh.id, am = Dg(), a = a ? Math.max(lg(), a) : lg(), f = Ac(Fb.performance, "loadEventStart", !0) || ae(), f = f < kf ? 0 : Math.round(f), a && f && a >= f ? (k = oc() - a, 5E3 < Math.abs(k) && (a += k), Ld(b, a, f)) : Ld(b), Wh = null), Ah || Ig());
        b = Me();
        b !== X() && ab(b) && b.sole()
    }

    function qe(a) {
        Uh++;
        if (Vh && a) {
            var b = Vh.get(a) || 0;
            Vh.set(a, b + 1)
        }
    }

    function Ig(a,
        b) {
        var f = Kc(zf);
        if (f) {
            var k = 0;
            Fb.performance && !a && (k = b || lg());
            k || (k = oc());
            Ld(f.id, k);
            Kj = f.stop;
            Yd()
        }
    }

    function yf() {
        Ig(1)
    }

    function Yg() {
        Ah = !0
    }

    function jf() {
        var a = Kc(zf);
        a && !Wh && (Wh = Be({
            name: "_onload_",
            type: "_load_",
            start: oc(),
            Aa: a.id
        }))
    }

    function oi() {
        if (!Ci || 0 < Uh) Ci = !0, Yd(), xf()
    }

    function Oh() {
        Yd();
        if (!ij) {
            var a = Me(),
                b = ab(a) && a !== X();
            b && a.iolm(Fb);
            jf();
            ij = !0;
            B("PAGE_LEAVING", function k() {
                Wh && b && a.sole(void 0, Fb);
                J("PAGE_LEAVING", k)
            });
            ac(oi, 0)
        }
    }

    function Zg() {
        "loaded" === document.readyState && Yd();
        "complete" ===
        document.readyState && Oh()
    }

    function Ph() {
        Yd();
        ij || ("complete" === document.readyState ? el ? t(!1, !0) : (el = !0, ac(Ph, 3E3)) : ac(Ph, 3E3))
    }

    function Lh() {
        var a;
        Xg(Pa, 1);
        var b = G((a = {}, a.kind = "PAGE_END", a.detail = void 0, a)).flat();
        0 !== b.length && (a = db(db([], b, !0), [
            ["url", Lj]
        ], !1), xd("_pageend_", a, !1, void 0, 1));
        vk(0);
        ya()
    }

    function bm() {
        vk(1)
    }

    function fl() {
        Mj = ld = !1;
        gl(!1);
        t(!1, !0, !0);
        Ef = !1
    }

    function wk(a) {
        var b = ti.Ye(!1, !0, !0);
        b.beacon && (t(!1, !0, !0, b), 1 === a && (Mj = !0))
    }

    function vk(a) {
        var b;
        if (ld && !Ef) wk(a);
        else {
            var f = oc();
            1 === a && (ld = !0, ac(function() {
                ac(fl, 2E3)
            }, 1));
            G((b = {}, b.kind = "PAGE_LEAVING", b.detail = ld, b));
            xk && Mj || Xa(1 === a, Pd, f);
            wk(a);
            Ef = !1
        }
    }

    function hl(a, b) {
        if (De || isNaN(a) || 100 > a || 1E3 < a) return !1;
        yk = {
            responseCode: a,
            message: b + ""
        };
        return !0
    }

    function il() {
        return xk
    }

    function gl(a, b) {
        xk = a;
        Uf(jj);
        b && (jj = ac(function() {
            xk = !1
        }, 2E3))
    }

    function jl() {
        function a(b) {
            zf === b.detail.i && J("ACTION_CLOSED", a)
        }
        Fb.doNotCreateLoadAction || (zf = Be({
            name: "_load_",
            type: "_load_",
            start: kf,
            id: nd() || Gd()
        }).id, Yd(), Zg());
        B("ACTION_CLOSED", a)
    }

    function Xh(a,
        b, f, k) {
        var p;
        void 0 === f && (f = !1);
        var x = (p = {}, p.msg = "", p.file = "", p.line = -1, p.column = -1, p.error = a, p.stackContainsWrapper = f, p);
        "number" === typeof b && (x.parentActionId = b);
        k && (x.source = k);
        zk(x)
    }

    function gh(a, b, f, k) {
        a[b] && Qg(f, "" + a[b], k)
    }

    function zk(a) {
        var b, f = a.error,
            k = a.msg;
        if (!(!k && !f || Nj + 1 > Zb("mepp"))) {
            Nj++;
            "string" === typeof f ? k = a.msg || f : f = f || Fb.event || {
                message: "",
                name: ""
            };
            var p = La(La({}, a), (b = {}, b.msg = k, b.error = f, b));
            b = Bd();
            var x;
            b && (x = {
                name: b.Rb(),
                type: b.type
            });
            f = p.error;
            "string" === typeof f && (f = {});
            var L = f.columnNumber || 0,
                aa = p.msg,
                sa = p.file,
                ib = p.column,
                sb = p.line;
            k = p.source;
            b = {};
            b.message = f.message || f.name || f.vj || f.description || aa || f.errorMessage || f.ki || f.data || f.xi || "Indeterminable error name";
            b.file = f.fileName || f.filename || f.sourceURL || f.Ni || f.file || sa || "";
            b.line = f.lineNumber || f.lineno || f.line || f.Pi || sb || -1;
            b.column = (f.columnNumber ? L + 1 : void 0) || f.Oi || f.colno || f.column || ib || -1;
            if (!(L = Di(f))) a: {
                try {
                    throw Error("");
                } catch (fb) {
                    if ((L = Di(fb)) && 3 < L.split(/\r\n|\r|\n/).length) {
                        L = "<generated>\n" + L;
                        break a
                    }
                }
                L = ""
            }
            x = (b.stack = L, b.userInput = x, b.code = f.xj || f.code || f.errorCode || f.status, b.timestamp = oc() - hc, b.debugInfo = "", b.type = f.name || "Error", b.source = k || "1", b);
            "Indeterminable error name" === x.message && (b = hh("msg", p.msg), b += hh("file", p.file), b += hh("line", p.line), b += hh("column", p.column), b += hh("error", p.error), x.debugInfo = b);
            x.stack && p.stackContainsWrapper && (x.stack = "<wrapper>" + x.stack);
            if (x.stack) {
                if (1200 < x.stack.length) {
                    p = "";
                    b = 0;
                    for (f = x.stack.split(/(\r\n|\n|\r)/gm); b < f.length && !(k = f[b].trim(), L =
                            k.length, 0 < L && (p = 250 < L ? p + (k.substring(0, 150) + "[...]" + k.substring(L - 100) + "\n") : p + (k + "\n")), 1200 < p.length); b++);
                    x.stack = p
                }
                x.stack = x.stack.replace(RegExp("\\|", "g"), "^p").replace(/(\r\n|\n|\r)/gm, "|")
            }
            500 < x.message.length && (x.message = x.message.substring(0, 500));
            p = x.file;
            b = x.stack;
            f = Oc("csu");
            p && b && !b.includes(f) && p.includes(f) && (x.incompleteStack = 1200 < b.length ? "stringLength" : "numLines");
            5011 !== x.code && (p = a.parentActionId, a = oc(), a = He({
                type: "_error_",
                name: ud(x.message),
                start: a,
                tb: !0
            }), p = Pe(a, p), a && (gh(x,
                "type", "_type_", a), x.file && (b = x.file, 0 <= x.line && (b += "|" + x.line), 0 <= x.column && (b += "|" + x.column), Qg("_location_", b, a)), (b = x.incompleteStack) && Qg("_istack_", b, a), gh(x, "stack", "_stack_", a), gh(x, "code", "_code_", a), gh(x, "timestamp", "_ts_", a), gh(x, "debugInfo", "_debug_", a), x.userInput && Qg("_useraction_", x.userInput.type + "|" + x.userInput.name, a), gh(x, "source", "_source_", a), p && lc()))
        }
    }

    function Di(a) {
        return a ? a.stack || a.wi || a.Pj || a.error && a.error.stack || "" : ""
    }

    function Qg(a, b, f) {
        var k = oc();
        a = He({
            type: a,
            name: ud(b),
            start: k,
            tb: !0
        });
        Pe(a, f.id, !0)
    }

    function hh(a, b) {
        a = a + "|" + (typeof b + "|");
        if (null === b) a += "null|";
        else if ("object" === typeof b)
            for (var f in b) {
                if (ka(b, f) && "stack" !== f && "error" !== f) {
                    var k = f;
                    a += f + "|";
                    var p = typeof b[k];
                    a += p + "|";
                    "object" !== p && "function" !== p && (a += b[k] + "|")
                }
            } else a += b + "|";
        return a
    }

    function Ei(a, b, f) {
        var k = oc();
        a = ud(a);
        b = He({
            type: b,
            name: a,
            start: k,
            stop: k,
            tb: !0,
            domNodes: -1
        });
        f = Pe(b, f);
        Fa(vi);
        f && lc();
        return f
    }

    function kl() {
        X().syn || (Ei("visit end", "_endVisit_", -1) ? Ff(!1, "a") : Yh())
    }

    function ll(a,
        b) {
        Nj > Zb("mepp") || (Nj++, Ei(a, "_error_", b))
    }

    function ml(a, b) {
        Ei(a, "_warning_", b)
    }

    function Ak(a, b) {
        Ei(a, "_log_", b)
    }

    function Bh(a, b, f) {
        var k = oc();
        a = He({
            type: "_rs_",
            name: Cc(a + "=" + b),
            start: k,
            tb: !0
        });
        Pe(a, f);
        lc()
    }

    function kj(a, b) {
        switch (a) {
            case "_uaps_":
                if ("string" !== typeof b) {
                    a = "value [".concat(b, "] is not a valid short string, because it is of type ").concat(typeof b, ".");
                    break
                } else a = "value is not of type 'string'. Make sure to pass in a string.";
                (b = b.length) || (a = "value is not a valid short string because it is empty.");
                var f = Zb("mpl");
                b > f && (a = "value is ".concat(b, " characters long, which is longer than the maximum of ").concat(f, " characters"));
                break;
            case "_uapl_":
                a = "value [".concat(b, "] is not a valid java long.");
                break;
            case "_uapdt_":
                a = "value [".concat(b, "] is not a valid date.");
                break;
            case "_uapdbl_":
                a = "value [".concat(b, "] is not a valid java double.");
                break;
            default:
                a = "value [".concat(b, "] is not of a supported type. Has type of ").concat(typeof b, ".")
        }
        return a
    }

    function nl(a, b) {
        return {
            failedProperties: a.Nc(),
            sentProperties: a.se(),
            info: "Number of total failed properties: ".concat(b)
        }
    }

    function rc(a) {
        return !("number" !== typeof a || isNaN(a) || 0 !== a % 1 || 0x7fffffffffffffff < a || -0x7fffffffffffffff > a)
    }

    function cm(a) {
        return !("number" !== typeof a || isNaN(a) || 1.7976931348623157E308 < a || -1.7976931348623157E308 > a)
    }

    function ol(a) {
        return "string" === typeof a && 0 !== a.trim().length && a.length <= Zb("mpl")
    }

    function Oj(a) {
        return !!a && "[object Date]" === Object.prototype.toString.call(a)
    }

    function Ch(a, b, f, k, p) {
        b && "object" === typeof b && Fi({
            data: b,
            type: "_uapl_"
        }, rc, a);
        f && "object" === typeof f && Fi({
            data: f,
            type: "_uapdt_"
        }, Oj, a);
        k && "object" === typeof k && Fi({
            data: k,
            type: "_uaps_"
        }, ol, a);
        p && "object" === typeof p && Fi({
            data: p,
            type: "_uapdbl_"
        }, cm, a)
    }

    function Fi(a, b, f) {
        var k = a.data,
            p = Gb(),
            x;
        for (x in k)
            if (ka(k, x) && 0 < x.trim().length && 50 >= x.length) {
                var L = p,
                    aa = k[x];
                null !== aa && "object" === typeof aa && ka(aa, "value") && (L = L && !aa["public"], aa = aa.value);
                b(aa) ? (L ? aa = "dT_pv" : "_uapdt_" === a.type && Oj(aa) && (aa = aa.getTime()), f.lf(a.type, x, aa)) : f.he(a.type, x, aa)
            }
    }

    function pl(a) {
        a =
            a ? Object.keys(a) : [];
        if (0 === a.length) return !1;
        for (var b = 0; b < a.length; b++)
            if (!Hm.includes(a[b])) return !1;
        return !0
    }

    function Pj(a) {
        return Da(Ra(w(a), function(b) {
            b = a[b];
            return !!(b && 0 < b.size)
        }), function(b) {
            var f = [];
            a[b].forEach(function(k, p) {
                f.push("".concat(p, ",").concat(k))
            });
            return "".concat(b, "=").concat(f.join(";"))
        }).join(";")
    }

    function Bc(a, b, f, k, p) {
        a = new Gi(a);
        pl(b) ? Ch(a, b.nj, b.Ki, b.Mj, b.mj) : Ch(a, b, f, k, p);
        return a.wg()
    }

    function Fc(a) {
        tg[a] ? tg[a]++ : tg[a] = 1
    }

    function dm() {
        Lb("ds") && (tg = {}, zd(function(a,
            b, f, k) {
            if (Lb("ds")) {
                f = "";
                for (p in tg) ka(tg, p) && (f += "".concat(f ? "|" : "").concat(p, "-").concat(tg[p]));
                var p = f;
                !b && De && p && (a.av(k, "ds", p, !1), tg = {})
            }
        }))
    }

    function ql(a, b, f, k) {
        if (Zh || lj.length) lj.length && a.av(k, "fsp", encodeURIComponent(lj.join(",")), !0), Zh && a.av(k, "sp", encodeURIComponent(Pj(Zh)), !0), Zh = void 0, lj = []
    }

    function $e(a, b, f, k) {
        var p = new Bk;
        Zh || (Zh = {});
        pl(a) ? p.Md(Zh, a) : p.Md(Zh, {
            javaLong: a,
            date: b,
            shortString: f,
            javaDouble: k
        });
        lj.push.apply(lj, p.Cg());
        a = nl(p, Bk.Gb);
        b = p.Nc();
        if (b.length)
            for (f = 0; f < b.length; f++) k =
                b[f], Ck = "Property key [" + k.key + "] was not accepted because: " + k.reason, Fb.console.log(Ck);
        (p.Gg() || b.length) && lc();
        return a
    }

    function Gf() {
        return Ck ? [{
            severity: "Info",
            text: Ck + "(Note: only last errorMessage gets reported!)",
            type: "wsp"
        }] : null
    }

    function Vb(a, b) {
        if (uc !== b) return -2;
        if (3 === b && !De) {
            var f;
            hf(Pa, a);
            hf(cb, a);
            a = gf(null === (f = uh) || void 0 === f ? void 0 : f.ua, Pa);
            Cd(a);
            return 2
        }
        f = Pa;
        if (1 === a.id && 1 === f.id && 1 === Mb.length) return hf(Mb[0].newView, a), hf(Pa, a), hf(cb, a), 2;
        if (f.name === a.name) return -1;
        jg(a);
        return 1
    }

    function Nb(a) {
        var b = +a;
        return a && !isNaN(b) && 11359836E5 < b && 41338908E5 > b ? b : oc()
    }

    function jc(a) {
        return "function" === typeof a
    }

    function yc(a, b) {
        return typeof a === b
    }

    function cd(a, b) {
        return yc(a, b) || "undefined" === typeof a || null === a
    }

    function Fe(a) {
        Fb.console.log(a)
    }

    function Wc(a, b, f) {
        Fe("".concat(a, ' "').concat(b, '" is deprecated! ').concat(f))
    }

    function cc() {
        Fe("Wrong argument types in method. Please check the documentation to fix that")
    }

    function zc() {
        Fe("Too many arguments. Please check the documentation to fix that")
    }

    function $h() {
        Fe("No action was found with provided action id argument.")
    }

    function Dk() {
        return ti.Gc()
    }

    function Ek(a, b, f, k) {
        void 0 === b && (b = !1);
        void 0 === f && (f = !1);
        rl(a, (null === k || void 0 === k ? void 0 : k.contentType) || "");
        return t(!1, !0, b, {
            referrer: Rb(),
            beacon: a
        }, f, k)
    }

    function Qj(a) {
        Fk.push(a)
    }

    function rl(a, b) {
        Ja(Fk, function(f) {
            f(a, b)
        })
    }

    function sl(a, b) {
        Rj && (Rj && !ug && (mj.observe(document, Gk), ug = !0), vg[a] || (vg[a] = [], nj = Object.keys(vg), Hi[a] = b))
    }

    function tl(a) {
        Rj && (vg[a] && (delete vg[a], delete Hi[a]), nj = Object.keys(vg),
            0 === nj.length && mj && ug && (mj.disconnect(), ug = !1))
    }

    function ul(a, b) {
        if (!ai) return null;
        bi[a] || (bi[a] = new ai(b));
        return bi[a]
    }

    function vl(a) {
        Rj && bi[a] && (bi[a].disconnect(), delete bi[a])
    }

    function wl(a) {
        return vg[a] ? vg[a] : []
    }

    function xl(a, b) {
        vg[a] = b
    }

    function yl() {
        Gk = {
            childList: !0,
            subtree: !0
        };
        ai && (mj = new ai(function(a) {
            for (var b = oc(), f = [], k = 0; k < a.length; k++) {
                var p = a[k];
                "childList" === p.type && f.push.apply(f, p.addedNodes)
            }
            if (f.length)
                for (a = {
                        time: b,
                        nodes: f
                    }, b = 0, f = nj; b < f.length; b++) k = f[b], p = Hi[k], "function" ===
                    typeof p && p(k, a), vg[k].push(a)
        }))
    }

    function zl(a, b, f, k, p, x) {
        void 0 === x && (x = "win");
        try {
            var L = oj[x] || {};
            L[b] = a[b];
            oj[x] = L;
            Object.defineProperty(a, b, {
                get: f || function() {
                    return L[b]
                },
                set: function(aa) {
                    L[b] = aa;
                    k && (aa || p) && k.apply(a, [aa])
                },
                configurable: !0
            });
            return !0
        } catch (aa) {}
        return !1
    }

    function Al(a, b, f, k) {
        if (k = k || a[b]) {
            var p = f || "win";
            try {
                delete a[b] && (a[b] = k, oj[p] && (oj[p][b] = null))
            } catch (x) {
                try {
                    Object.defineProperty(a, b, {
                        get: function() {
                            return oj[p] && oj[p][b]
                        },
                        configurable: !0
                    })
                } catch (L) {}
            }
        }
    }

    function Ii(a) {
        var b =
            Pd;
        return b && b.nc < Zb("tal") && b.ib + a <= Zb("tt") ? (b = Ba(!1), a = {
            name: "".concat("setTimeout(..., ").concat(a, ")"),
            type: "_t_",
            start: oc(),
            qf: a,
            Aa: b || !0
        }, Be(a).id) : 0
    }

    function wg(a) {
        if (a = Kc(a)) a.Ec(), ac(function() {
            Ad();
            tc(nc(), !0)
        }, 0)
    }

    function Hf(a) {
        var b = Kc(a);
        b && (b.zh(), th++, pg.push(a), tc(b))
    }

    function Sj(a) {
        var b = Kc(a);
        b && (th--, ac(function() {
            ca(a);
            b.qg();
            tc(nc(), !0)
        }, 0))
    }

    function Bl(a) {
        if (Lb("etc") || !a) Tj = a
    }

    function Uj() {
        return null === Tj || void 0 === Tj ? void 0 : Tj()
    }

    function Hk(a, b) {
        return Rd(970, a || "XHR Error",
            b)
    }

    function xg(a) {
        return Rd(971, "XHR Canceled", a)
    }

    function Vj(a) {
        return Rd(972, "XHR Timeout", a)
    }

    function Ji(a, b) {
        var f = 0 === a.time ? 0 : b - a.time;
        a.total += f;
        a.time = b;
        return a.Ee = f
    }

    function pj(a, b) {
        void 0 === b && (b = oc());
        var f = Ik[a];
        void 0 === f && (f = Ik[a] = {
            time: b,
            total: 0,
            Ee: 0
        });
        return Ji(f, b)
    }

    function Cl(a, b) {
        void 0 === b && (b = oc());
        a = Ik[a];
        if (void 0 === a) return 0;
        Ji(a, b);
        a.time = 0;
        return a.Ee
    }

    function em(a) {
        a = Ik[a];
        return void 0 === a ? 0 : a.total
    }

    function fm(a, b, f) {
        if (!a || !b) return -1;
        if (a.findIndex) return a.findIndex(b,
            f);
        for (var k = 0; k < a.length; k++)
            if (b.call(f, a[k], k, a)) return k;
        return -1
    }

    function gm(a) {
        var b = a.getAttribute("class"),
            f = 100 - a.tagName.length;
        if (!b) return "";
        b = b.trim().replace(/ +/g, ".");
        if (b.length <= f) return b;
        a = Ra(b.split("."), function(k) {
            return k.length < f
        });
        for (b = a.join("."); b.length > f && a.length;) a.pop(), b = a.join(".");
        return b
    }

    function ci(a, b) {
        if (a.id && 100 >= a.id.length) return b.unshift("#".concat(a.id)), !0;
        var f = a.nodeName.toLowerCase();
        b.unshift(f);
        var k = gm(a);
        if (k && (f += ".".concat(k), b[0] = f, fc(b))) return !0;
        k = a;
        for (var p = 1; k;) k = k.previousElementSibling, (null === k || void 0 === k ? void 0 : k.nodeName) === a.nodeName && p++;
        f += ":nth-of-type(".concat(p, ")");
        b[0] = f;
        if (fc(b)) return !0;
        k = a.previousElementSibling;
        for (p = 1; k;) k = k.previousElementSibling, ++p;
        f = f.replace(/:nth-of-type\(\d+\)/, 1 < p ? ":nth-child(".concat(p, ")") : ":first-child");
        b[0] = f;
        return fc(b)
    }

    function fc(a) {
        return 1 === document.querySelectorAll(a.join(">") || "").length
    }

    function Dl(a) {
        if (!a || !gj(a, 8) || !document.querySelectorAll) return "";
        try {
            for (var b = a, f = []; b &&
                100 >= f.join(">").length && !ci(b, f);) b = b.parentElement;
            var k = f.join(">");
            if (100 < k.length) {
                var p = a.getAttribute("class"),
                    x = a.tagName.toLowerCase();
                if (p) var L = "..." + Qb("".concat(x, ".").concat(p), 100 - x.length - 3, !1, "");
                else {
                    var aa = a.id;
                    L = aa ? "..." + Qb("#".concat(aa), 97, !1, "") : ""
                }
                var sa = L || Qb(k, 100, !0)
            } else sa = k;
            return sa
        } catch (ib) {}
        return ""
    }

    function Ki(a, b) {
        try {
            if (3 !== uc && ("__vue__" === b || "__vue_app__" === b) && Lb("usrvd") && 2 !== uc) {
                var f, k, p, x;
                var L = (null === (p = null === (k = null === (f = a.__vue_app__) || void 0 === f ? void 0 :
                    f.config) || void 0 === k ? void 0 : k.globalProperties) || void 0 === p ? void 0 : p.$router) || (null === (x = a.__vue__) || void 0 === x ? void 0 : x.$router);
                if (L) {
                    var aa = "function" === typeof L.afterEach;
                    var sa = L.currentRoute && aa ? !0 : !1
                } else sa = !1;
                if (sa) {
                    var ib, sb;
                    if (ib = (null === (sb = L.matcher) || void 0 === sb ? void 0 : sb.match) || L.resolve) {
                        var fb, Xb, $b, Hb = null !== ($b = null !== (fb = L.options.base) && void 0 !== fb ? fb : null === (Xb = L.options.history) || void 0 === Xb ? void 0 : Xb.base) && void 0 !== $b ? $b : "",
                            vc = L.options.mode;
                        Hb || "hash" !== vc || (Hb = "#");
                        var xc =
                            Hb;
                        a = Mb;
                        for (b = 0; b < a.length; b++) {
                            var bd = a[b];
                            bd.oldView && hf(bd.oldView, Dh(bd.oldView, ib, xc));
                            hf(bd.newView, Dh(bd.newView, ib, xc))
                        }
                        bd = Pa;
                        a = cb;
                        hf(bd, Dh(bd, ib, xc));
                        hf(a, Dh(a, ib, xc))
                    }
                    L.afterEach(di);
                    Rc(2)
                }
            }
        } catch (ie) {
            Rc(1)
        }
    }

    function di(a) {
        2 === uc && Vb(Rg(a), 2)
    }

    function Rg(a) {
        var b = a.matched;
        a = a.path;
        return b.length ? {
            group: b[b.length - 1].path,
            name: a
        } : {
            name: a
        }
    }

    function Dh(a, b, f) {
        var k = a.name.indexOf(f),
            p = a.name;
        p === f ? p = "/" : -1 !== k && (p = p.substring(k + f.length));
        a = La(La({}, a), {
            name: p
        });
        return La(La({}, a), Rg(b(a.name)))
    }

    function Jk(a) {
        void 0 === qj && (qj = Zb("prfSmpl") > Math.floor(1E4 * Math.random()));
        qj && (0 > pf && (pf = Zb("msl"), Cb.dT_.si(function() {
            El()
        }, 3E4), Cf(Fb, "beforeunload", function() {
            El(!0)
        })), Fl.push(a))
    }

    function rj(a) {
        var b = "";
        Ja(a.d, function(f) {
            b += "".concat(f[0]).concat("=").concat(f[1]).concat("|")
        });
        return "".concat(a.i).concat("|").concat(a.t).concat("|").concat(b.slice(0, -1))
    }

    function Gl(a, b) {
        var f = "";
        Ja(w(b[1]), function(k) {
            f += "".concat(k).concat("=").concat(b[1][k]).concat("|")
        });
        return "".concat(a).concat("|").concat(b[0]).concat("|").concat(f.slice(0, -1))
    }

    function El(a) {
        void 0 === a && (a = !1);
        Ja(Fl.splice(0), function(b) {
            if (0 === b.t) {
                var f = !1;
                for (var k = b.d, p = k.length; !f && p;) f = 0 === k[--p][1]
            } else f = !1;
            f || (b.a ? Hl(b) : Wj.push(rj(b)))
        });
        ei(a)
    }

    function Hl(a) {
        var b = a.i,
            f = Sg[b];
        f ? (f[0] += a.t, Ja(a.d, function(k) {
            f[1][k[0]] = void 0 !== f[1][k[0]] ? f[1][k[0]] + k[1] : k[1]
        })) : (Sg[b] = [a.t, {}], Ja(a.d, function(k) {
            Sg[b][1][k[0]] = k[1]
        }))
    }

    function ei(a) {
        void 0 === a && (a = !1);
        Ja(w(Sg), function(f) {
            Wj.push(Gl(f, Sg[f]))
        });
        var b = "";
        Ja(Wj, function(f, k, p) {
            if (b.length + 1 + f.length >= pf) {
                Li(b,
                    a);
                b = "";
                if (k === p.length - 1) {
                    Li("".concat(Mi).concat(f), a);
                    return
                }
                b = "".concat(Mi).concat(f)
            } else b ? b = b + "," + f : b = "".concat(Mi).concat(f);
            b.length && k === p.length - 1 && Li(b, a)
        });
        Wj = [];
        Sg = {}
    }

    function Li(a, b) {
        var f;
        void 0 === b && (b = !1);
        var k = Dk();
        ti.ar(k, a);
        Ek(k, b, !1, (f = {}, f.contentType = "perf", f))
    }

    function hm() {
        fi = Ni.connection;
        Lb("eni") && fi && zd(function(a, b, f, k) {
            !b && De && fi && (b = "".concat(fi.effectiveType || "-", "|").concat(fi.downlink || -1), fi.type && (b = "".concat(b, "|").concat(fi.type)), a.av(k, "ni", b, !1))
        })
    }

    function im(a) {
        return "longtask" ===
            (null === a || void 0 === a ? void 0 : a.entryType) && 50 < a.duration
    }

    function jm(a) {
        Oi.push({
            startTime: a.startTime,
            duration: a.duration
        })
    }

    function Vf() {
        try {
            Xj = new PerformanceObserver(function(a) {
                Ja(Ra(a.getEntries(), im), jm)
            }), Xj.observe({
                type: "longtask",
                buffered: !0
            })
        } catch (a) {}
    }

    function Kk() {
        Eh = Fh = 0;
        Pi = Qi = -5E3;
        Yj = [];
        if (Lb("cls") && se.cls) try {
            (new PerformanceObserver(function(a) {
                a = a.getEntries();
                for (var b = 0; b < a.length; b++) {
                    var f = a[b];
                    if ("layout-shift" === (null === f || void 0 === f ? void 0 : f.entryType) && !f.hadRecentInput) {
                        var k =
                            f.startTime;
                        if (0 === yg) {
                            if (5E3 < k - Qi || 1E3 < k - Pi) Qi = k, Eh = 0;
                            Pi = k;
                            Eh += f.value;
                            Fh = Math.max(Fh, Eh)
                        } else 1 === yg && Yj.push({
                            startTime: k,
                            kg: f.value
                        })
                    }
                }
            })).observe({
                type: "layout-shift",
                buffered: !0
            })
        } catch (a) {}
    }

    function Lk() {
        Zj = new Fb.PerformanceObserver(function(a) {
            a = a.getEntries();
            for (var b = 0; b < a.length; b++) {
                var f = a[b],
                    k = f.name;
                f = Math.round(f.startTime);
                "first-paint" === k && (ak = f);
                "first-contentful-paint" === k && (Mk = f)
            }
        });
        try {
            Zj.observe({
                type: "paint",
                buffered: !0
            })
        } catch (a) {
            Zj.observe({
                entryTypes: ["paint"]
            })
        }
    }

    function sj() {
        bk =
            new Fb.PerformanceObserver(function(a) {
                a = a.getEntries();
                a = a[a.length - 1];
                if (a.size > Ri) switch (Ri = a.size, yg) {
                    case 0:
                        Im = qf(a);
                        break;
                    case 1:
                        Gh.push(qf(a));
                        break;
                    case 2:
                        Kj - kf > a.startTime && (Ri = a.size, a = qf(a), xd("_wv_", [
                            ["AAI", zf + ""],
                            ["lcpE", a.Jc || "-"],
                            ["lcpSel", a.td || "-"],
                            ["lcpS", a.size + ""],
                            ["lcpT", a.Oa + ""],
                            ["lcpU", a.url || "-"],
                            ["lcpLT", a.loadTime + ""]
                        ], !1, void 0, 1))
                }
            });
        try {
            bk.observe({
                type: "largest-contentful-paint",
                buffered: !0
            })
        } catch (a) {
            bk.observe({
                entryTypes: ["largest-contentful-paint"]
            })
        }
    }

    function qf(a) {
        var b,
            f = a.startTime;
        f && (f = Ea(f));
        return {
            Oa: Math.round(f),
            loadTime: Math.round(a.loadTime),
            size: a.size,
            td: Dl(a.element) || "-",
            Jc: (null === (b = a.element) || void 0 === b ? void 0 : b.tagName) || "-",
            url: a.url || "-"
        }
    }

    function If(a) {
        var b = 0;
        for (a = a.getEntries(); b < a.length; b++) {
            var f = a[b];
            "first-input" === f.entryType && f.processingStart && f.startTime && (c = Math.round(f.startTime), d = Math.round(f.processingStart - f.startTime))
        }
        Il()
    }

    function Il() {
        2 === yg && oc() < Kj + 2E4 && xd("_wv_", [
            ["AAI", zf + ""],
            ["fIS", c + ""],
            ["fID", d + ""]
        ], !1, void 0, 1)
    }

    function km() {
        var a, b = null === (a = Fb.PerformanceObserver) || void 0 === a ? void 0 : a.supportedEntryTypes;
        return !!b && b.includes("first-input")
    }

    function lm() {
        if (km()) try {
            (new PerformanceObserver(If)).observe({
                type: "first-input",
                buffered: !0
            })
        } catch (a) {} else B("GLOBAL_EVENT_FIRED", function f(b) {
            var k = b.detail;
            b = k.e.timeStamp;
            if (!c && mm.includes(k.t) && b) {
                k = ae();
                var p = 1E12 < b;
                p && b < k ? b = !1 : (c = Math.round(p ? b - k : b), d = Math.max(0, Math.round(te() - c)), Il(), b = !0)
            } else b = !1;
            b && J("GLOBAL_EVENT_FIRED", f)
        })
    }

    function Jl(a) {
        a.Fg();
        l = a.Mc();
        a.reset(te())
    }

    function Nk(a, b) {
        return [
            ["inp", (void 0 === l || b.detail.Dh ? a.Mc() : l) + ""]
        ]
    }

    function Ok(a) {
        return [
            ["inp", a.Mc() + ""]
        ]
    }

    function ck(a) {
        a.detail.i === zf && (J("ACTION_CLOSED", ck), yg = 1)
    }

    function Pk(a) {
        var b = a.detail,
            f = b.a;
        a = b.s;
        if (b.i === zf) {
            J("ACTION_BEFORE_SEND", Pk);
            yg = 2;
            b = [];
            f = a - f;
            if (Lb("pt")) {
                if (se.lcpT) {
                    var k = Im;
                    for (var p = Gh.length - 1; 0 <= p; p--)
                        if (Gh[p].Oa < f) {
                            k = Gh[p];
                            break
                        }
                    k && 0 !== k.Oa ? k.Oa > f ? k = {
                        Oa: -6
                    } : Ri = k.size || 0 : k = {
                        Oa: -5
                    };
                    k.Jc && k.td && k.url ? b.push(["lcpE", k.Jc], ["lcpSel", k.td], ["lcpS",
                        k.size + ""
                    ], ["lcpT", k.Oa + ""], ["lcpU", k.url], ["lcpLT", k.loadTime + ""]) : b.push(["lcpT", k.Oa + ""])
                } else b.push(["lcpT", "-3"]);
                se.fcp ? b.push(["fcp", (Mk ? Mk > f ? -6 : Ea(Mk) : -5) + ""]) : b.push(["fcp", "-3"]);
                se.fp ? b.push(["fp", (ak ? ak > f ? -6 : Ea(ak) : -5) + ""]) : b.push(["fp", "-3"])
            }
            if (Lb("cls"))
                if (se.cls) {
                    k = b.push;
                    p = 0;
                    for (var x = Yj; p < x.length; p++) {
                        var L = x[p],
                            aa = L.startTime;
                        if (aa < f) {
                            if (5E3 < aa - Qi || 1E3 < aa - Pi) Qi = aa, Eh = 0;
                            Pi = aa;
                            Eh += L.kg;
                            Fh = Math.max(Fh, Eh)
                        }
                    }
                    Yj = [];
                    k.call(b, ["cls", +Fh.toFixed(4) + ""])
                } else b.push(["cls", "-3"]);
            if (Lb("lt"))
                if (se.lt) {
                    k =
                        b.push;
                    p = 0;
                    x = ae();
                    L = 0;
                    for (aa = Oi; L < aa.length; L++) {
                        var sa = aa[L],
                            ib = p + sa.duration > f;
                        x + sa.startTime + sa.duration <= a && !ib && (p += sa.duration)
                    }
                    null === Xj || void 0 === Xj ? void 0 : Xj.disconnect();
                    k.call(b, ["lt", Math.round(p) + ""])
                } else b.push(["lt", "-3"]);
            0 === c && 0 === d || b.push(["fIS", c + ""], ["fID", d + ""]);
            0 < b.length && xd("_wv_", b, zf, kf, 1)
        }
    }

    function zg() {
        try {
            if (!Fb.dT_ || !(void 0 === Fb.dialogArguments ? navigator.cookieEnabled || Ha() : Ha())) return !1;
            var a = Fb.dT_;
            a.initialized = !1;
            a.pageId = "";
            a.pageTitle = "";
            a.frameCount = 0;
            a.bwsW =
                0;
            a.bwsH = 0;
            a.syn = !1;
            a.googleBot = !1;
            a.tp = Wa;
            a.gicv = S;
            a.aFU = lh;
            a.gPId = Ie;
            a.iRO = ag;
            a.gBI = fa;
            a.iMD = Ma;
            a.cfg = md;
            a.acfgP = dd;
            a.smbi = Jf;
            a.ism = he;
            a.iMod = ee;
            a.gMu = kd;
            a.tau = hb;
            a.icr = Gc;
            a.lv = ma;
            a.sv = D;
            a.svl = Y;
            a.gh = N;
            a.aesc = ea;
            a.puesc = U;
            a.tpesc = Sa;
            a.apl = zl;
            a.rpl = Al;
            a.dbg = Wb;
            a.dbc = oa;
            a.dlf = Eb;
            a.loc = Rb;
            a.sch = M;
            a.gNTO = Kd;
            a.vAT = Ea;
            a.cVIn = Kb;
            a.sNT = Gb;
            a.gPAH = I;
            a.id = ha;
            a.ss = Qc;
            a.ssP = $e;
            a.asl = sc;
            a.sMPS = lc;
            a.gBP = Jh;
            a.cB = Dk;
            a.sB = Ek;
            a.ea = $f;
            a.la = sf;
            a.lx = dg;
            a.dlx = uf;
            a.ex = oe;
            a.ec = Vg;
            a.lc = ge;
            a.eV = kl;
            a.pe = ll;
            a.pw = ml;
            a.pl = Ak;
            a.rs = Bh;
            a.pcn = Ei;
            a.ca = ub;
            a.can = gc;
            a.isci = V;
            a.ti = Yd;
            a.las = qb;
            a.gca = Ib;
            a.gAR = Jd;
            a.gAA = Mc;
            a.sxbe = Fg;
            a.aWF = Qk.dtAWF;
            a.mx = g;
            a.mxf = Rd;
            a.mxg = Hk;
            a.mxc = xg;
            a.mxt = Vj;
            a.gITAID = Lc;
            a.re = zk;
            a.rex = Xh;
            a.bi = Nd;
            a.ei = fe;
            a.gci = Bd;
            a.gpi = Dd;
            a.cii = Xc;
            a.pii = vd;
            a.gcv = Wd;
            a.aad = y;
            a.sole = xf;
            a.iolm = qe;
            a.solb = jf;
            a.slem = Yg;
            a.lst = ua;
            a.sle = yf;
            a.gLEELF = me;
            a.gNNTV = Ac;
            a.gLAet = Nh;
            a.iSAC = il;
            a.sSAC = gl;
            a.lAID = la;
            a.maep = hl;
            a.snt = xe;
            a.aO = ul;
            a.rO = vl;
            a.aMO = sl;
            a.rMO = tl;
            a.gMN = wl;
            a.sMN = xl;
            a.eta = Ii;
            a.lta = wg;
            a.etc = Hf;
            a.ltc = Sj;
            a.cia = Ug;
            a.wst = pj;
            a.wsp =
                Cl;
            a.wtt = em;
            a.rpm = Jk;
            a.sasl = Qj;
            a.dnrui = O;
            a.aFr = Ra;
            a.fE = Ja;
            a.aM = Da;
            a.aAP = Bc;
            a.aAPY = Kh;
            a.iBt = ra;
            a.cAE = xd;
            a.addE = B;
            a.remE = J;
            a.disE = G;
            a.red = id;
            a.cUIRO = Nc;
            a.aAWC = Ae;
            a.gXACT = q;
            a.uaxu = E;
            a.gaxu = C;
            a.last = zb;
            a.aFI = fm;
            a.aur = F;
            a.oK = w;
            a.oHOP = ka;
            a.gdi = Mh;
            a.ssmbi = cf;
            a.gecsss = Dl;
            a.fEP = wa;
            a.iVRA = Ki;
            a.sNV = Vb;
            a.sVDM = Rc;
            a.gVDM = fd;
            a.fP = lb;
            a.iNF = Ab;
            a.aAPy = od;
            a.uabmr = W;
            a.cbf = $c;
            a.asyncCoreVersion = "10301241007103824";
            a.gRT = Ge;
            a.itcp = Bl;
            a.gtc = Uj;
            a.nan = ud;
            var b = X();
            ac = b.st;
            oc = b.nw;
            mg = b.sC;
            dh = b.gC;
            Lg = b.esc;
            Si = b.cLSCK;
            ah = b.gPC;
            Bj = b.sPC;
            Ze = b.iVSC;
            Mg = b.p3SC;
            Sh = b.gSC;
            zh = b.sSC;
            og = b.gVI;
            tk = b.cPC;
            Ij = b.gSSV;
            Ee = b.sSSV;
            bh = b.gSId;
            tj = b.pCfg;
            Ti = b.pCSAA;
            Ui = b.cFHFAU;
            qc = b.sCD;
            Lb = b.bcv;
            Zb = b.ncv;
            Oc = b.scv;
            Vi = b.stcv;
            Td = b.rplC;
            zd = b.aBPSL;
            dj = b.gBPSL;
            Ag = b.gBPSCC;
            Ne = b.gFId;
            $i = b.oEIEWA;
            Wi = b.iNV;
            zi = b.gVID;
            Hh = b.gARnVF;
            vi = b.cAUV;
            Yh = b.sVIdUP;
            Hj = b.gDtc;
            Xi = b.cfgO;
            We = b.version;
            wi = b.rBPSL;
            Th = b.aNVL;
            Ih = b.dPV;
            dk = b.ePV;
            uj = b.eA;
            gi = b.dA;
            hi = b.iXB;
            Ai = b.de;
            ii = b.aRI; of = b.gXBR;
            te = b.rnw;
            ae = b.gto;
            nf = b.iEC;
            Uf = b.ct;
            Cf = b.ael;
            Ff = b.gNVIdN;
            ji = b.gxwp;
            ih = b.prm;
            Yi = b.gidi;
            Dj = b.iDCV;
            $g = b.gCF;
            gj = b.iIO;
            qi = b.gPSMB;
            xi = b.iAEPOO;
            Jg = b.lvl;
            ta(b);
            b.version = Qa();
            Sf = ih();
            var f = navigator.userAgent;
            a = {
                ie: NaN,
                edge: NaN,
                ec: NaN,
                ff: NaN,
                ch: NaN,
                sf: NaN,
                msf: NaN,
                ab: NaN,
                op: NaN
            };
            try {
                b = /Firefox[\/\s](\d+\.\d+)/;
                var k = /(iPod|iPhone|iPad)/,
                    p = /AppleWebKit/;
                if (f.includes("MSIE")) {
                    var x = f.lastIndexOf("MSIE") + 5;
                    a.ie = parseInt(f.substring(x, x + 3))
                } else if (f.includes("Trident")) {
                    if (f.includes("rv:")) {
                        var L = f.lastIndexOf("rv:") + 3;
                        var aa = parseInt(f.substring(L, L + 2))
                    } else f.includes("rv ") ? (L = f.lastIndexOf("rv ") +
                        3, aa = parseInt(f.substring(L, L + 2))) : aa = NaN;
                    a.ie = aa
                } else if (f.includes("Edge")) {
                    var sa = f.lastIndexOf("Edge") + 5;
                    a.edge = parseInt(f.substring(sa, sa + 2))
                } else if (f.includes("Edg/")) {
                    var ib = f.lastIndexOf("Edg/") + 4;
                    a.ec = parseInt(f.substring(ib, ib + 2))
                } else if (b.test(f)) {
                    var sb = parseInt((f.match(b) || [])[1]);
                    a.ff = -1 === sb ? 0 : sb
                } else if (f.includes("Android")) {
                    var fb = f.indexOf("Android") + 8;
                    a.ab = parseFloat(f.substring(fb, fb + 3))
                } else if (f.match(k) && f.match(p)) a.msf = parseFloat((f.match(/(?:OS |Version\/)([0-9]+)(?:[_.][0-9])*/) || [])[1]);
                else if ("Safari" !== navigator.appName && !f.includes("Safari") || f.includes("Chrom"))
                    if (Fb.opera) a.op = parseInt(Fb.opera.version().split(".")[0]);
                    else if (f.includes("OPR/")) a.op = parseInt((f.match(/OPR\/([0-9]*\.[0-9]*)/) || [])[1]);
                else {
                    var Xb;
                    var $b = +(null === (Xb = /Chrome\/([0-9]{1,4})/.exec(f)) || void 0 === Xb ? NaN : Xb[1]) || NaN;
                    a.ch = $b
                } else {
                    var Hb = f.substring(f.lastIndexOf("Version/")).match(/Version\/([0-9]+(\.[0-9]*)?)/);
                    a.sf = Hb ? parseInt(Hb[1]) : NaN
                }
            } catch ($m) {}
            rh = a;
            X().syn = f.includes("RuxitSynthetic");
            X().googleBot = f.includes("Googlebot");
            var vc, xc = Fb.dT_,
                bd = Qa();
            bd !== xc.version && (null === (vc = Fb.console) || void 0 === vc ? void 0 : vc.log("WARNING: Snippet version [" + xc.version + "] and monitoring code [" + bd + "] versions do not match! Please update your code snippet to ensure compatibility."));
            xc.version = "10301241007103824";
            hc = xc.agentStartTime || xc.gAST();
            if (!xc || xc.initialized) return !1;
            f = 0;
            for (var ie = w(sh); f < ie.length; f++) sh[ie[f]] = [];
            T();
            Gg();
            rg = Xi ? Xi() : X().cfg;
            rg.initializedModules = "";
            hi(rg);
            Xf();
            ie = 0;
            rh.sf ? ie = 100 : rh.msf && (ie = 1E3);
            Fj = ie;
            re = {
                actions: {},
                Ca: []
            };
            Gd = de;
            Kg = 1;
            Jm = 0;
            Xe = [];
            Sd = [];
            Pd = null;
            Sb(null, !0);
            Og = [];
            Ub();
            Fd = 0;
            B("VISIBILITY_CHANGED", Sc);
            h = Vc(Rb());
            ed();
            B("CONFIG_UPDATE", ed);
            nk = {};
            Bf = Me();
            jd = Qd = void 0;
            yd = 0;
            bl = !0;
            Lb("imm") && Ma() || (v("click", "C", "clk"), v("mousedown", "D", "mdw"), v("mouseup", "U", "mup"));
            v("dblclick", "CC", "dcl");
            v("keydown", "KD", "kyd");
            v("keyup", "KU", "kyu");
            v("scroll", "S", "scr");
            v("touchstart", "TS", "tcs");
            v("touchend", "TE", "tce");
            v("change", "H", "chg");
            if (Oc("ade")) {
                var lf =
                    Oc("ade").split(",");
                if (lf && 0 < lf.length)
                    for (ie = 0; ie < lf.length; ie++) v(lf[ie])
            }
            Kj = 0;
            a: {
                var Rk = document.getElementsByTagName("meta"),
                    Km = Zb("mrt");
                for (lf = 0; lf < Rk.length; lf++) {
                    var ek = Rk[lf],
                        nm = ek.getAttribute("http-equiv");
                    if (nm && "refresh" === nm.toLowerCase()) {
                        var om = ek.getAttribute("content");
                        if (parseInt((om && om.split(";") || [])[0]) <= Km) {
                            var fk = !0;
                            break a
                        }
                    }
                }
                fk = !1
            }
            fk && qe();
            "undefined" !== typeof WeakMap && (Vh = new WeakMap);
            var Sk = document.location,
                Lm = Me();
            Sk && ab(Lm) && Lm.aFU(Sk.href);
            var vj = Oc("rid");
            if (!vj ||
                "RID_" === vj) {
                Rk = Vi;
                var wj = Oc("ridPath"),
                    Kl = wj ? wj : Fb.location.pathname,
                    jh = Fb.location.search;
                jh && jh.length && jh.startsWith("?") && (jh = jh.substring(1));
                wj = jh;
                var je = 31 + Z(Kl);
                je = 31 * je + Z(wj);
                Rk("rid", "RID_" + (je & je))
            }
            Cf(Fb, "beforeunload", bm);
            Cf(Fb, "pagehide", Lh);
            Cf(document, "readystatechange", Zg);
            ac(Ph, 3E3);
            Cf(Fb, "load", Oh);
            kf = Ce();
            fk = !fk;
            var ki = Me();
            if (ab(ki)) {
                var xj = ki.sSAC;
                xj && xj(!1);
                var be = (Lb("dsss") ? ma(Tf()) : decodeURIComponent($g(Tf()))).split("|");
                if (12 === be.length) {
                    var gk = Lb("dsss"),
                        Mm = Lb("dssv");
                    xj = "";
                    !gk && Mm ? xj = ma(Tf(), !0) : gk && !Mm && (xj = decodeURIComponent($g(Tf())));
                    var Tk = xj.split("|");
                    if (4 === Tk.length) {
                        var Ll = Tk[1],
                            ue = Tk[2],
                            Nm = Tk[3];
                        be.push(Tk[0]);
                        be.push(Ll);
                        be.push(ue || "");
                        be.push(Nm)
                    }
                }
                var Uk = be.join("|");
                fk && da("-");
                if (Uk && "-" !== Uk) {
                    var ke = Uk.split("|");
                    if (16 === ke.length || 12 === ke.length) {
                        var Vk = parseInt(ke[5]);
                        be = kf - Vk;
                        if (-10 < be && 6E4 >= be) {
                            be = {
                                id: -1,
                                kind: -1,
                                hydrated: !1,
                                trigger: -1
                            };
                            gk = 0;
                            for (var hk = U(ke[15]).split(";"); gk < hk.length; gk++) {
                                var Ml = hk[gk],
                                    Nl = Ml.substring(1);
                                switch (Ml.charAt(0)) {
                                    case "i":
                                        be.id = +Nl;
                                        break;
                                    case "k":
                                        be.kind = +Nl;
                                        break;
                                    case "h":
                                        be.hydrated = !!+Nl;
                                        break;
                                    case "t":
                                        be.trigger = +Nl
                                }
                            }
                            var Wk = {
                                isDelayed: "true" == ke[0],
                                type: ke[1],
                                id: parseInt(ke[2]),
                                name: ke[3],
                                info: ke[4],
                                startTime: Vk,
                                frameId: ke[6],
                                Ba: va(ke[7]),
                                anchor: ke[10],
                                aa: ke[11],
                                ua: void 0
                            };
                            16 === ke.length && (Wk.ua = {
                                name: va(ke[12]),
                                timestamp: parseInt(ke[13]),
                                group: va(ke[14]),
                                trigger: be.trigger,
                                kind: be.kind,
                                hydrated: be.hydrated,
                                id: be.id
                            });
                            ke = !1;
                            X() !== ki && (ke = ki.iRO(Wk.Ba));
                            !document.referrer || Wk.Ba === document.referrer || Wk.Ba === document.location.href ||
                                ke ? uh = Wk : da(Uk)
                        } else da("-")
                    }
                }
            }
            try {
                Rc(1);
                cb = Pa = {
                    id: ++ba,
                    name: Te(Rb()),
                    timestamp: kf,
                    kind: 0,
                    trigger: uc,
                    hydrated: !1
                };
                ig();
                var Ol, Xk = null === (Ol = uh) || void 0 === Ol ? void 0 : Ol.ua,
                    pm = gf(Xk, Pa);
                Cd(pm);
                B("VIEW_STABLE", gg);
                B("ACTION_ENTERED", Cg);
                B("ACTION_BEFORE_SEND", Oe);
                B("ACTION_SENT", hg);
                B("BF_CACHE_RESTORED", oh);
                dl = $d(Hg);
                B("HISTORY_API_EVENT", Od);
                Cf(Fb, "popstate", Od);
                Cf(Fb, "hashchange", Od);
                try {
                    kg("pushState"), kg("replaceState")
                } catch ($m) {}
                zd(ph);
                B("VIEW_STABLE", Ke);
                Lj = Rb()
            } catch ($m) {}
            Ue();
            jl();
            eg();
            Wg();
            rf();
            hm();
            ej = "0";
            var Yk = document.visibilityState;
            Yk ? ("hidden" === Yk && (ej = "1"), Cf(document, "visibilitychange", td)) : ej = "2";
            ye();
            yg = 0;
            var yj = !!Fb.PerformanceObserver;
            se.cls = !(!yj || !Fb.LayoutShift);
            se.fcp = !(!yj || !Fb.PerformancePaintTiming);
            se.fp = !(!yj || !Fb.PerformancePaintTiming);
            se.lcpT = !(!yj || !Fb.LargestContentfulPaint);
            se.lt = !(!yj || !Fb.PerformanceLongTaskTiming);
            Lb("pt") && (se.fp && Lk(), se.lcpT && sj());
            Kk();
            Oi = [];
            Lb("lt") && se.lt && Vf();
            lm();
            var qm, Pl, Ql, an = Fb.PerformanceEventTiming && "interactionId" in Fb.PerformanceEventTiming.prototype,
                Om = null === (Ql = null === (Pl = null === (qm = Fb.PerformanceObserver) || void 0 === qm ? void 0 : qm.supportedEntryTypes) || void 0 === Pl ? void 0 : Pl.includes) || void 0 === Ql ? void 0 : Ql.call(Pl, "event");
            if (an && Om) {
                var Rl = Ya();
                B("VIEW_CHANGE", Jl.bind(null, Rl));
                B("VIEW_END", Nk.bind(null, Rl));
                var rm = Ya();
                B("PAGE_END", Ok.bind(null, rm))
            }
            B("ACTION_CLOSED", ck);
            B("ACTION_BEFORE_SEND", Pk);
            dm();
            yl();
            zd(ql);
            B("DEBUG_INFO_REQUESTED", Gf);
            Pf();
            df();
            B("DEBUG_INFO_REQUESTED", Yi);
            Qf();
            B("DEBUG_INFO_REQUESTED", wf);
            if ("undefined" === typeof Fb.dT_) var dn = !1;
            else "undefined" === typeof Fb.dtrum && (Fb.dtrum = new Sl), dn = !0;
            if (!dn) return !1;
            var bn = X();
            bn.initialized = !0;
            "function" === typeof bn.initCallback && bn.initCallback()
        } catch ($m) {
            return !1
        }
        return !0
    }
    var Sf = this.dT_ && dT_.prm && dT_.prm() || window.Promise,
        Cb = "undefined" !== typeof window ? window : self,
        Fb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        Ni = Fb.navigator,
        Wf = {
            u: "transferSize",
            v: "encodedBodySize",
            w: "decodedBodySize",
            L: "workerStart",
            M: "dtRpid",
            V: "dtSInfo",
            W: "dtTao",
            X: "responseStatus"
        },
        Ej = {
            x: "statuscode",
            y: "ip",
            A: "failedResource",
            C: "requestId",
            E: "relevance",
            F: "relevantArea",
            K: "isCritical",
            N: "vcIrrelevanceReason",
            O: "imageWidth",
            P: "imageHeight",
            Q: "imageNaturalWidth",
            R: "imageNaturalHeight",
            S: "onloadTime",
            T: "rtRequestId",
            U: "certExpDate"
        },
        Bg = {
            o: "domInteractive",
            p: "domContentLoadedEventStart",
            q: "domContentLoadedEventEnd",
            r: "domComplete",
            s: "loadEventStart",
            t: "loadEventEnd"
        },
        af = {
            c: "redirectStart",
            d: "redirectEnd",
            e: "fetchStart",
            f: "domainLookupStart",
            g: "domainLookupEnd",
            h: "connectStart",
            i: "connectEnd",
            j: "secureConnectionStart",
            k: "requestStart",
            l: "responseStart",
            m: "responseEnd"
        },
        Df = La(La(La({}, af), {
            n: "domLoading"
        }), Bg),
        yh = La(La(La({}, af), Bg), Wf),
        mf = La(La(La({}, af), Wf), Ej);
    La(La(La({}, mf), Df), yh);
    var ve;
    (function(a) {
        a[a.ENABLED = 0] = "ENABLED";
        a[a.DISABLED = 1] = "DISABLED";
        a[a.DELAYED = 2] = "DELAYED"
    })(ve || (ve = {}));
    var ik;
    (function(a) {
        a[a.BLOCKED_BY_PERCENTAGE = 0] = "BLOCKED_BY_PERCENTAGE";
        a[a.ENABLED = 1] = "ENABLED";
        a[a.BLOCKED = 2] = "BLOCKED"
    })(ik || (ik = {}));
    var jk;
    (function(a) {
        a[a.NONE = 1] = "NONE";
        a[a.OFF = 2] = "OFF";
        a[a.PERFORMANCE = 3] = "PERFORMANCE";
        a[a.BEHAVIOR = 4] = "BEHAVIOR"
    })(jk || (jk = {}));
    var Tg;
    (function(a) {
        a.OVERLOAD_PREVENTION = "ol";
        a.PRIVACY_STATE = "prv";
        a.SERVER_ID = "srv";
        a.SESSION_ID = "sn"
    })(Tg || (Tg = {}));
    var Zk;
    (function(a) {
        a.DYNATRACE_MOBILE = "dynatraceMobile";
        a.MOBILE_AGENT = "MobileAgent"
    })(Zk || (Zk = {}));
    var kk;
    (function(a) {
        a[a.ARRAY = 0] = "ARRAY";
        a[a.BOOLEAN = 1] = "BOOLEAN";
        a[a.NUMBER = 2] = "NUMBER";
        a[a.STRING = 3] = "STRING";
        a[a.FUNCTION = 4] = "FUNCTION";
        a[a.OBJECT = 5] = "OBJECT";
        a[a.DATE = 6] = "DATE";
        a[a.ERROR =
            7] = "ERROR";
        a[a.ELEMENT = 8] = "ELEMENT";
        a[a.HTML_ELEMENT = 9] = "HTML_ELEMENT";
        a[a.HTML_IMAGE_ELEMENT = 10] = "HTML_IMAGE_ELEMENT";
        a[a.PERFORMANCE_ENTRY = 11] = "PERFORMANCE_ENTRY";
        a[a.PERFORMANCE_TIMING = 12] = "PERFORMANCE_TIMING";
        a[a.PERFORMANCE_RESOURCE_TIMING = 13] = "PERFORMANCE_RESOURCE_TIMING";
        a[a.PERFORMANCE_NAVIGATION_TIMING = 14] = "PERFORMANCE_NAVIGATION_TIMING";
        a[a.CSS_RULE = 15] = "CSS_RULE";
        a[a.CSS_STYLE_SHEET = 16] = "CSS_STYLE_SHEET";
        a[a.REQUEST = 17] = "REQUEST";
        a[a.RESPONSE = 18] = "RESPONSE";
        a[a.SET = 19] = "SET";
        a[a.MAP = 20] =
            "MAP";
        a[a.WORKER = 21] = "WORKER";
        a[a.XML_HTTP_REQUEST = 22] = "XML_HTTP_REQUEST";
        a[a.SVG_SCRIPT_ELEMENT = 23] = "SVG_SCRIPT_ELEMENT";
        a[a.HTML_META_ELEMENT = 24] = "HTML_META_ELEMENT";
        a[a.HTML_HEAD_ELEMENT = 25] = "HTML_HEAD_ELEMENT";
        a[a.ARRAY_BUFFER = 26] = "ARRAY_BUFFER";
        a[a.SHADOW_ROOT = 27] = "SHADOW_ROOT"
    })(kk || (kk = {}));
    var Aj = -1,
        Rf = eb("dtPC"),
        Pg = eb("dtCookie");
    eb("rxvt");
    eb("rxVisitor");
    eb("dTValidationCookie");
    var Tf = eb("dtSa"),
        sg = function() {
            for (var a, b = [], f = 0; 256 > f; f++) {
                a = f;
                for (var k = 0; 8 > k; k++) a = a & 1 ? 3988292384 ^ a >>> 1 :
                    a >>> 1;
                b[f] = a
            }
            return b
        }(),
        qh = 0,
        pi = Infinity,
        Ve = 0,
        Le, Me, nd, ac, oc, mg, dh, Lg, Si, ah, Bj, Ze, Mg, Sh, zh, og, tk, Ij, Ee, bh, tj, Ti, Ui, qc, Lb, Zb, Oc, Vi, Td, zd, dj, Ag, Ne, $i, Wi, zi, Hh, vi, Yh, Hj, Xi, wi, Th, Ih, dk, uj, gi, hi, Ai, ii, of , te, ae, nf, Uf, Cf, Ff, ji, ih, Yi, Dj, $g, gj, qi, xi, Jg, We, hc, Ef = !1,
        kf = -1,
        zf, Jc = [],
        ld = !1,
        fh, yk, Rh, rh, hd = "^><%/\\(){}[]".split(""),
        ng = {
            "^": "^^",
            "|": "^p",
            ",": "^c",
            ";": "^s"
        },
        aj = function(a) {
            var b = {},
                f;
            for (f in a) ka(a, f) && (b[a[f]] = f);
            return b
        }(ng),
        Tc, sh = (Tc = {}, Tc.CONFIG_UPDATE = [], Tc.ACTION_CLOSED = [], Tc.ACTION_BEACON_FORCED = [], Tc.ACTION_BEFORE_SEND = [], Tc.ACTION_SENT = [], Tc.ACTION_ENTERED = [], Tc.ACTION_LEFT = [], Tc.VIEW_CHANGE = [], Tc.VIEW_STABLE = [], Tc.DEBUG_INFO_REQUESTED = [], Tc.CSS_TRANSMISSION_STARTED = [], Tc.VISUALLY_COMPLETE = [], Tc.GLOBAL_EVENT_FIRED = [], Tc.HISTORY_API_EVENT = [], Tc.VISIBILITY_CHANGED = [], Tc.LOAD_END = [], Tc.INSTRUMENTATION_TRIGGERED = [], Tc.PAGE_LEAVING = [], Tc.HTTP_RESPONSE = [], Tc.OPT_IN_STATE_CHANGED = [], Tc.PAGE_END = [], Tc.VIEW_END = [], Tc.BF_CACHE_RESTORED = [], Tc.REQUEST_STARTED = [], Tc.REQUEST_COMPLETED = [], Tc),
        Xd;
    (function(a) {
        a.ANCHOR =
            "A";
        a.BUTTON = "BUTTON";
        a.FORM = "FORM";
        a.I_FRAME = "IFRAME";
        a.IMAGE = "IMG";
        a.INPUT = "INPUT";
        a.LABEL = "LABEL";
        a.LINK = "LINK";
        a.OPTION = "OPTION";
        a.SCRIPT = "SCRIPT";
        a.SELECT = "SELECT";
        a.STYLE = "STYLE";
        a.TEXT_AREA = "TEXTAREA"
    })(Xd || (Xd = {}));
    var De = !1,
        Fd = 0,
        Xe = [],
        Sd = [],
        Pd, Af, re, Kg = 1,
        Gd = de,
        th = 0,
        pg = [],
        zj = !0,
        bj = [],
        cj = [],
        Cj = !1,
        e = [],
        h, m = [],
        r = 0,
        A = "-",
        R;
    (function(a) {
        a[a.LABEL = 0] = "LABEL";
        a[a.NAME = 1] = "NAME";
        a[a.OTHER = 2] = "OTHER";
        a[a.CLASS = 3] = "CLASS";
        a[a.TAG = 4] = "TAG"
    })(R || (R = {}));
    var Aa = 0,
        ba = 0,
        Pa, cb, Mb = [],
        uc = 0,
        Ye = 0,
        Hd = [],
        we, qg =
        (we = {}, we.name = "", we.type = "", we.validUntil = 0, we.start = 0, we.target = void 0, we.url = "", we.title = "", we.view = void 0, we),
        Qd, jd, yd, bl, Bf, nk, ri = -1,
        uh = null,
        ok = [],
        li, lk, Tl, sm, pk = (li = {}, li._csprv_ = (lk = {}, lk.blockedURL = mb, lk.documentURL = mb, lk.referrer = mb, lk.sourceFile = mb, lk), li._customerror_ = function(a, b) {
            return "name" === a ? Tb(a, b, !0, 1E3) : Tb(a, b, !0, Zb("mcepsl"))
        }, li._vc_ = (Tl = {}, Tl.VE = function(a, b) {
            return b
        }, Tl), li._dj_ = function(a, b) {
            return b
        }, li._wv_ = (sm = {}, sm.lcpU = mb, sm), li),
        cl, mi = function() {
            function a() {
                this.id =
                    ++cl;
                this.Fb = [];
                this.ze = this.Nb = !1;
                this.pc = []
            }
            a.prototype.Uf = function(b) {
                this.Fb.push(b)
            };
            a.prototype.fh = function(b) {
                for (var f = 0; f < this.Fb.length; f++)
                    if (this.Fb[f] === b) {
                        pa(this.Fb, f);
                        break
                    }
            };
            a.prototype.kb = function(b, f, k, p) {
                for (var x = 0, L = this.Fb; x < L.length; x++)(0, L[x])(b, f, k, p)
            };
            a.prototype.Xf = function(b) {
                this.pd = b;
                "string" !== typeof b && (this.ze = !0)
            };
            a.prototype.Y = function(b, f, k) {
                void 0 === k && (k = !1);
                this.Nb = this.Nb || k;
                this.pc.push([b, f])
            };
            a.prototype.Za = function(b, f, k) {
                f && this.Y(b, f, k)
            };
            a.prototype.Sb =
                function(b) {
                    for (var f = 0, k = this.pc; f < k.length; f++) {
                        var p = k[f];
                        if (p[0] === b) return p[1]
                    }
                    return ""
                };
            a.prototype.tf = function() {
                for (var b = [], f = 0, k = this.pc; f < k.length; f++) {
                    var p = k[f];
                    b.push("$", p[0], "=", p[1])
                }
                return b.join("")
            };
            a.prototype.raw = function() {
                return this.pc
            };
            return a
        }(),
        Qh, sk, ch, si = Fb.parent,
        Xl = [],
        rk = [],
        qk = "",
        Ng = function() {
            function a() {}
            a.prototype.Gc = function() {
                return new mi
            };
            a.prototype.Zg = function(b, f) {
                if (zj) return null;
                var k = this.Gc();
                Lb("bs") && k.Y("bs", "1", !1);
                Fa(pe, this, b, f, k);
                return k.Nb ?
                    k : null
            };
            a.prototype.Sf = function(b, f, k, p) {
                k.Za("isUnload", p ? "1" : "", !1);
                k.Za("latC", "0", !1);
                k.Za("app", Oc("app"), !1);
                k.Y("vi", og(), !1);
                k.Za("dnt", qa() ? "1" : "", !1);
                k.Y("fId", Ne(), !1);
                p = Qa();
                var x = We;
                k.Y("v", p, !1);
                x !== p && k.Y("iv", x, !1);
                b || (p = zi(), this.av(k, "vID", p), this.ha(k) && Wi() && this.av(k, "nV", "1"));
                !b && f && Hh() && k.Y("nVAT", "1", !1);
                b = k.Za;
                f = encodeURIComponent;
                p = Jc;
                Jc = [];
                b.call(k, "vcr", f(p.join(",")))
            };
            a.prototype.ag = function(b) {
                var f = yk;
                f && De && (b.Y("responseCode", f.responseCode, !1), b.Za("responseMessage",
                    Lg(f.message), !1), yk = void 0)
            };
            a.prototype.Ye = function(b, f, k) {
                void 0 === b && (b = !1);
                void 0 === f && (f = !1);
                void 0 === k && (k = !1);
                if (b) {
                    var p = [];
                    for (var x = "", L = "", aa = {
                            Bb: 0
                        }, sa = 0, ib = Xe; sa < ib.length; sa++) {
                        var sb = ib[sa];
                        var fb = sb;
                        var Xb = aa;
                        if (fb.be(Xb.Bb)) var $b = fb = !0;
                        else Xb.Bb++, $b = fb.be(Xb.Bb + fb.Cb), $b || (Xb.Bb += fb.Cb), fb = !1;
                        if (!fb) {
                            x || (x = sb.cb());
                            L = sb.cb();
                            if (sb.parentFrameActionName) {
                                fb = p;
                                Xb = fb.push;
                                var Hb = sb.We;
                                Hb = [0, sb.Ve, ea(sb.parentFrameActionName), Hb].join("|");
                                Xb.call(fb, Hb)
                            }
                            p.push(sb.Hc($b))
                        }
                    }
                    p = {
                        xc: p.join(","),
                        referer: x,
                        sourceUrl: L
                    }
                } else p = Ed(f, k);
                if (x = 0 < p.xc.length) {
                    L = this.Gc();
                    L.Y("a", Lg(p.xc), !0);
                    Oc("domainOverride") && (L.Y("dO", Oc("domainOverride"), !1), Vi("domainOverride", ""));
                    Lb("bs") && L.Y("bs", "1", !1);
                    b && L.Y("PV", "1", !1);
                    X().pageId !== Ne() && L.Y("pId", X().pageId, !1);
                    sk && L.Y("pFId", sk, !1);
                    L.Y("rId", Oc("rid"), !1);
                    L.Y("rpId", Oc("rpid"), !1);
                    if (!b) {
                        a: {
                            aa = (sa = Fb.performance) ? sa.timing : !1;
                            if (sa && aa && (sa = aa.domComplete, aa = aa.domContentLoadedEventEnd, sa || aa)) {
                                aa = sa ? sa : aa;
                                break a
                            }
                            aa = fh
                        }
                        aa && L.Y("domR", aa, !1);this.ag(L)
                    }
                    Ba(k) &&
                        L.Y("unload", "xhr", !1);
                    Fa(pe, this, b, f, L);
                    zj = !1
                } else L = this.Zg(b, f);
                L && (this.bg(p.sourceUrl, L), this.Sf(b, x, L, k));
                return {
                    beacon: L,
                    referrer: p.referer
                }
            };
            a.prototype.bg = function(b, f) {
                var k = Rb();
                f.Y("url", encodeURIComponent(k), !1);
                f.Y("title", Lg(ud(document.title, 100)), !1);
                var p = f.Sb("a");
                p = p && (p.startsWith("s") || p.startsWith("d"));
                b && b !== k && !p && f.Y("sUrl", encodeURIComponent(b), !1)
            };
            a.prototype.av = function(b, f, k, p, x) {
                k = "function" === typeof k ? k() : k;
                "undefined" !== typeof k && null !== k && "" !== k && b.Y(f + (x ? x : ""),
                    k, p)
            };
            a.prototype.ha = function(b) {
                return !!b.Sb("a")
            };
            a.prototype.hla = function(b) {
                return b.Sb("a").includes("_load_")
            };
            a.prototype.ar = function(b, f) {
                b.Xf(f)
            };
            a.prototype.aBRL = function(b, f) {
                b.Uf(f)
            };
            a.prototype.rBRL = function(b, f) {
                b.fh(f)
            };
            return a
        }(),
        Ul = function(a) {
            function b(f) {
                var k = a.call(this) || this;
                k.status = f;
                return k
            }
            ob(b, a);
            return b
        }(Error),
        tm = function(a) {
            function b(f) {
                var k = f.message,
                    p = f.Ja,
                    x = f.Bc;
                f = a.call(this, f.status) || this;
                f.message = k || "";
                f.Ja = p;
                f.Bc = x;
                return f
            }
            ob(b, a);
            return b
        }(Ul),
        rg, um = [],
        Vl;
    (function(a) {
        a.ENABLED = "enabled";
        a.NAME = "name"
    })(Vl || (Vl = {}));
    var Pm;
    (function(a) {
        a.FAIL = "fail";
        a.SUCCESS = "success"
    })(Pm || (Pm = {}));
    var Qm;
    (function(a) {
        a.STREAM = "application/octet-stream";
        a.TEXT = "text/plain;charset=UTF-8"
    })(Qm || (Qm = {}));
    var vm = function() {
            function a(b) {
                this.wa = b;
                this.Vd = b.ud ? "application/octet-stream" : "text/plain;charset=UTF-8"
            }
            a.prototype.send = function() {
                for (var b = this.wa.path, f = 0; f < um.length; f++)(0, um[f])(b);
                return this.vd().then(this.Eg.bind(this)).catch(this.Dg.bind(this))
            };
            a.prototype.qe = function() {
                return Qb(this.wa.hb, Zb("mhl"))
            };
            a.prototype.kf = function() {
                var b = this.wa.hb;
                return !!b && b !== Rb() && !Lb("cors")
            };
            a.prototype.kb = function(b, f) {
                var k = this.wa,
                    p = k.eg,
                    x = k.fg;
                k = k.beacon;
                try {
                    k.kb(b, f, p, x)
                } catch (L) {}
            };
            a.prototype.hg = function(b) {
                if (!("object" === typeof b && b && "status" in b && gj(b, 7))) {
                    b = "object" === typeof b && b && "message" in b ? b.message : "";
                    var f;
                    if (f = this.Ja()) f = rh, f = !!(f.sf || f.msf || f.ff) && "sendBeacon" in navigator && !Lb("dsndb");
                    b = new tm({
                        status: 0,
                        message: b,
                        Ja: f,
                        Bc: this.wa
                    })
                }
                return b
            };
            a.prototype.Eg = function(b) {
                var f = b.body;
                b = b.status;
                this.ee("success", f || b);
                if (f) {
                    b = (null === f || void 0 === f ? void 0 : f.split("|")) || [];
                    b.splice(0, 1);
                    for (var k = 0; k < b.length; k++) {
                        var p = f,
                            x = b[k].split("="),
                            L = x[0];
                        x = x[1];
                        if (L === Pg() || "sn" === L) {
                            if (p = decodeURIComponent(x), Ze(p)) {
                                zh(p);
                                p = Pg();
                                try {
                                    Fb.sessionStorage.removeItem(p)
                                } catch (vc) {}
                            }
                        } else if ("name" === L) {
                            L = void 0;
                            try {
                                if (!Lb("eao")) {
                                    var aa = Si(),
                                        sa = Fb.localStorage.getItem(aa),
                                        ib = Oc("cuc");
                                    x = 0;
                                    if (sa) {
                                        var sb = tj(sa),
                                            fb = Ti(sb.config || "", sb);
                                        sb.name && (fb.csu =
                                            sb.name);
                                        x = parseInt(fb.lastModification || "0")
                                    }
                                    var Xb = tj(p),
                                        $b = Ti(Xb.config || "");
                                    if (!ib || !$b.cuc || ib === $b.cuc) {
                                        $b.csu = Xb.name || Oc("csu");
                                        var Hb = parseInt($b.lastModification || "0");
                                        Hb > x && (Fb.localStorage.setItem(aa, p), Ui($b), qc($b, !0), hi($b), ii($b), Hb > +(rg.lastModification || 0) && (rg = Td($b), G((L = {}, L.kind = "CONFIG_UPDATE", L.detail = rg, L))))
                                    }
                                }
                            } catch (vc) {}
                        } else "enabled" === L && "false" === x && wb("Cost Control")
                    }
                }
            };
            a.prototype.ee = function(b, f) {
                for (var k = 0, p = Ag(); k < p.length; k++)(0, p[k])(this.wa.beacon, b, f)
            };
            a.prototype.Dg =
                function(b) {
                    b = this.hg(b);
                    100 <= bj.length || bj.push(b);
                    this.ee("fail", b.status);
                    if (429 === b.status) {
                        var f = 0;
                        for (b = Xe; f < b.length; f++) b[f].Zc();
                        wb("Overload Prevention");
                        return Sf.resolve()
                    }
                    if (!ld) try {
                        f = Si(), Fb.localStorage.removeItem(f)
                    } catch (k) {}
                    return b.Ja ? Sf.reject(b) : Sf.resolve()
                };
            return a
        }(),
        cn = Fb.fetch,
        Yl = function(a) {
            function b(f) {
                var k, p = a.call(this, f) || this;
                f = f.Ac;
                var x = (k = {}, k["Content-Type"] = p.Vd, k);
                p.kf() && (x["x-dtreferer"] = p.qe());
                p.af = {
                    method: "POST",
                    credentials: "same-origin",
                    headers: x,
                    body: f,
                    keepalive: "string" === typeof f && 65536 > f.length
                };
                p.Ig();
                return p
            }
            ob(b, a);
            b.prototype.Ig = function() {
                var f = Zb("xt");
                if (f) {
                    var k = new AbortController;
                    Cb.dT_.st(k.abort.bind(k), f);
                    this.af.signal = k.signal
                }
            };
            b.prototype.vd = function() {
                try {
                    return cn(this.wa.path, this.af).then(this.Ag.bind(this))
                } catch (f) {
                    return Sf.reject(f)
                }
            };
            b.prototype.Ag = function(f) {
                this.kb(XMLHttpRequest.DONE, f.status);
                if (!f.ok || 200 !== f.status) throw new Ul(f.status);
                return f.text().then(function(k) {
                    return {
                        body: k,
                        status: f.status
                    }
                })
            };
            b.prototype.Ja =
                function() {
                    return !0
                };
            return b
        }(vm),
        Bm = function(a) {
            function b(f) {
                return a.call(this, f) || this
            }
            ob(b, a);
            b.prototype.vd = function() {
                var f = this.wa,
                    k = f.path;
                f = f.Ac;
                var p = !1;
                try {
                    p = navigator.sendBeacon(k, f || "")
                } catch (x) {}
                if (!p) return this.kb(XMLHttpRequest.DONE, 0), Sf.reject(new Ul(0));
                this.kb(XMLHttpRequest.DONE, 200);
                return Sf.resolve({
                    status: 200,
                    body: void 0
                })
            };
            b.prototype.Ja = function() {
                return !1
            };
            return b
        }(vm),
        Cm = function(a) {
            function b(f) {
                f = a.call(this, f) || this;
                var k = Zb("xt");
                if (!k) return f;
                f.rc.timeout = k;
                f.rc.ontimeout = f.Of.bind(f);
                return f
            }
            ob(b, a);
            b.prototype.Of = function() {
                try {
                    this.rc.abort()
                } catch (f) {}
            };
            b.prototype.Ja = function() {
                return !0
            };
            return b
        }(function(a) {
            function b(f) {
                f = a.call(this, f) || this;
                f.rc = ji();
                return f
            }
            ob(b, a);
            b.prototype.vd = function() {
                var f = this.wa,
                    k = f.path,
                    p = f.Ac,
                    x = this;
                return new Sf(function(L, aa) {
                    var sa = x.rc;
                    sa.open("POST", k, !0);
                    sa.setRequestHeader("Content-Type", x.Vd);
                    x.kf() && sa.setRequestHeader("x-dtreferer", x.qe());
                    sa.addEventListener("readystatechange", function() {
                        x.kb(sa.readyState,
                            sa.status);
                        sa.readyState === XMLHttpRequest.DONE && (200 === sa.status ? L({
                            body: sa.responseText,
                            status: sa.status
                        }) : aa(new tm({
                            status: sa.status,
                            Ja: !0,
                            Bc: x.wa
                        })))
                    });
                    sa.send(p)
                })
            };
            return b
        }(vm)),
        vh = !1,
        Zl, wh, ti, ui, xh, Fm = {
            ig: Ad
        },
        ej, Jm = 0,
        Rm;
    (function(a) {
        a.INITIATOR_TYPE = "initiatorType";
        a.START_TIME = "startTime"
    })(Rm || (Rm = {}));
    var fj = "function" === typeof PerformanceResourceTiming || "object" === typeof PerformanceResourceTiming,
        Vm = "function" === typeof PerformanceNavigationTiming || "object" === typeof PerformanceNavigationTiming,
        Ym = "function" === typeof PerformanceTiming || "object" === typeof PerformanceTiming,
        hj = {},
        Wm = Math.pow(2, -52),
        Dm = ["dtRpid", "dtSInfo", "dtTao", "dtRequestID"],
        $l = {
            unknown: 0,
            xmlhttprequest: 1,
            fetch: 2,
            beacon: 3,
            iframe: 4,
            frame: 5,
            subdocument: 6,
            img: 7,
            image: 8,
            css: 9,
            svg: 10,
            link: 11,
            script: 12,
            input: 13,
            body: 14,
            object: 15,
            embed: 16,
            source: 17,
            audio: 18,
            video: 19,
            track: 20,
            eventsource: 21,
            other: 22,
            icon: 23
        },
        Xm = {
            navigate: 0,
            reload: 1,
            back_forward: 2,
            prerender: 3
        },
        Em = !1,
        am, wm = ["_warning_", "_error_", "_log_", "_rs_"],
        eh = function() {
            function a(b,
                f, k, p, x, L, aa, sa, ib, sb, fb, Xb, $b, Hb, vc, xc, bd, ie, lf) {
                void 0 === $b && ($b = {
                    readyState: -1,
                    status: -1
                });
                void 0 === Hb && (Hb = -1);
                void 0 === lf && (lf = Gd());
                this.start = b;
                this.stop = f;
                this.type = k;
                this.name = p;
                this.info = x;
                this.domNodes = L;
                this.hb = aa;
                this.title = sa;
                this.isCustomAction = sb;
                this.fb = fb;
                this.zd = $b;
                this.aa = vc;
                this.Qf = xc;
                this.Wc = ie;
                this.id = lf;
                this.depth = 1;
                this.ib = this.nc = 0;
                this.qa = -1;
                this.hd = this.Cb = 0;
                this.Wa = -1;
                this.nb = "";
                this.subActions = [];
                this.Pd = [];
                this.$b = [];
                this.errors = [];
                this.status = 0;
                this.qc = [];
                this.childFrameActions =
                    0;
                this.Xc = !1;
                this.Ra = this.Ga = 0;
                this.B = !1;
                this.Zb = 0;
                this.xhrUrl = "";
                this.oe = !1;
                this.hf(ib);
                this.vf = ej;
                this.Ea(f);
                this.status = Xb ? 3 : 0;
                this.Na = 0 <= Hb;
                this.ib = Math.max(Hb, 0);
                bd && (this.ua = bd)
            }
            a.prototype.cb = function() {
                return this.parent ? this.parent.cb() : this.hb
            };
            a.prototype.La = function() {
                return this.parent ? this.parent.La() : this.id
            };
            a.prototype.Ea = function(b) {
                this.oe || (this.stop = b, Fd = Math.max(Fd, this.stop))
            };
            a.prototype.ne = function() {
                this.oe = !0
            };
            a.prototype.Nd = function(b, f) {
                void 0 === f && (f = !1);
                (3 !== this.status ||
                    f) && b && b.name && (b.depth = this.depth + 1, this.subActions.push(b), b.Sc() && (this.Zb++, this.we(1)), b.parent = this, b.Na || this.Mb(), b.ib += this.ib, b.nc = this.nc + +b.Na)
            };
            a.prototype.Be = function() {
                return 3 === this.status && !this.Vc()
            };
            a.prototype.close = function(b, f, k, p) {
                var x, L;
                void 0 === p && (p = !1);
                this.domNodes = document.getElementsByTagName("*").length;
                this.start = f || this.start;
                f = !1;
                var aa = this.start,
                    sa = this.stop,
                    ib = this.id,
                    sb = this.Zb;
                b && (this.Ea(Math.max(b, aa, sa)), k && (f = !0));
                if (sb) return this.status = 1, !1;
                if (3 ===
                    this.status) return !1;
                this.status = 3;
                G((x = {}, x.kind = "ACTION_CLOSED", x.detail = (L = {}, L.s = sa, L.a = aa, L.r = this.La(), L.i = ib, L.f = p, L.t = this.type, L.x = this.xhrUrl, L.dne = f, L.rt = void 0, L.cs = this.Ga, L.ce = this.Ra, L.xe = this.Wa, L.xm = this.nb, L["in"] = this.info, L), x));
                return !0
            };
            a.prototype.Yd = function() {
                this.Cb--;
                this.parent && this.parent.Yd()
            };
            a.prototype.Ec = function(b, f, k, p) {
                var x = this;
                void 0 === p && (p = !1);
                if (this.close(b, f, k, p)) {
                    var L = this.parent;
                    if (L) {
                        L.Zb--;
                        this.Uc() || L.Yd();
                        var aa = L.stop;
                        L.Ea(Math.max(this.stop, aa));
                        ac(function() {
                            x.jg(L, aa)
                        }, 0);
                        1 === L.status && L.Ec(b)
                    }
                }
            };
            a.prototype.jg = function(b, f) {
                this.Na && (Uf(this.qa), b.stop === this.stop && (b.stop = f), b.hh(this), delete re.actions[this.id])
            };
            a.prototype.be = function(b) {
                return b + 1 > Zb("moa") && !this.Uc()
            };
            a.prototype.tg = function() {
                var b = this.bestMatchingResource || Ge(this.xhrUrl, "fetch" === this.info ? "fetch" : "xmlhttprequest", this.start, 3 === this.status ? this.stop : 0);
                return bf(b) ? b : null
            };
            a.prototype.oh = function() {
                var b = this.tg();
                if (!b || 0 >= b.startTime) return [];
                this.He(b);
                var f = ["b", ae() + Math.round(b.startTime)];
                xe(b, f, b.startTime);
                return f
            };
            a.prototype.Oe = function() {
                for (var b, f, k = this.start, p = this.stop, x = this.id, L = 0, aa = this.subActions; L < aa.length; L++) aa[L].Oe();
                G((b = {}, b.kind = "ACTION_BEFORE_SEND", b.detail = (f = {}, f.s = p, f.a = k, f.i = x, f.r = this.La(), f), b))
            };
            a.prototype.$c = function(b) {
                for (var f, k, p = this.start, x = this.stop, L = this.id, aa = this.type, sa = this.xhrUrl, ib = this.Ga, sb = this.Ra, fb = this.nb, Xb = this.Wa, $b = this.fc, Hb = 0, vc = this.subActions; Hb < vc.length; Hb++) vc[Hb].$c(b);
                G((f = {}, f.kind = "ACTION_SENT", f.detail = (k = {}, k.s = x, k.a = p, k.r = this.La(), k.i = L, k.f = b, k.t = aa, k.x = sa, k.rt = $b, k.cs = ib, k.ce = sb, k.xm = fb, k.xe = Xb, k["in"] = this.info, k), f));
                Uf(this.qa);
                delete re.actions[this.id];
                this.B = !0
            };
            a.prototype.Zc = function() {
                this.wh = !0;
                Ja(this.subActions, function(b) {
                    b.Zc()
                })
            };
            a.prototype.Vc = function() {
                return !!this.qc.length
            };
            a.prototype.Hg = function() {
                this.Va = this.start + 1E4;
                this.bc = 100;
                return this
            };
            a.prototype.zh = function() {
                this.Ch = oc()
            };
            a.prototype.qg = function() {
                this.rf = oc()
            };
            a.prototype.Qg =
                function() {
                    return !!this.Ch && !this.rf
                };
            a.prototype.Sc = function() {
                return 1 === this.status || 0 === this.status
            };
            a.prototype.Tb = function() {
                return (this.Na && 3 === this.status || this.fb && !(0 < this.hd)) && this.parent ? this.parent.Tb() : this
            };
            a.prototype.Hc = function(b) {
                var f = this.depth,
                    k = this.Pd,
                    p = this.subActions;
                this.domNodes || (this.domNodes = document.getElementsByTagName("*").length);
                var x = [];
                Ja(k, function(L) {
                    x.push(Ec(L, f + 1))
                });
                for (k = 0; k < p.length && !b; k++) x.push(p[k].Hc());
                x.unshift(this.Ha());
                return x.join(",")
            };
            a.prototype.Ha =
                function() {
                    var b = this.stop,
                        f = this.start,
                        k = this.id,
                        p = this.type,
                        x = this.info,
                        L = this.status,
                        aa = this.name,
                        sa = [];
                    sa[0] = this.depth + "";
                    sa[1] = k + "";
                    sa[2] = ea(aa);
                    sa[3] = ea(p);
                    sa[4] = ea(x) || "-";
                    sa[5] = f + "";
                    sa[6] = (3 === L ? b : 0) + "";
                    b = 0;
                    for (f = this.zg(); b < f.length; b++)
                        if (k = f[b], p = k[1]) p = "string" === typeof p ? ea(p) : "boolean" === typeof p ? +p + "" : p + "", sa.push(k[0] + "", p);
                    return sa.join("|")
                };
            a.prototype.zg = function() {
                var b = this.xhrUrl,
                    f = this.Ra,
                    k = this.Ga,
                    p = this.start,
                    x = this.name,
                    L = this.Wa,
                    aa = this.nb,
                    sa = this.ua,
                    ib = this.Ah,
                    sb = this.vf,
                    fb = this.$b.slice();
                fb.push(["dn", this.domNodes], ["cfa", this.childFrameActions], ["xu", b], ["ica", this.isCustomAction], ["gn", this.aa]);
                var Xb = fb.push,
                    $b = Xb.apply;
                var Hb = [];
                if (0 !== uc) {
                    var vc = Pa,
                        xc = vc.name,
                        bd = vc.timestamp;
                    vc = vc.group;
                    sa && (sa.name !== xc && Hb.push(["svn", sa.name]), sa.timestamp !== bd && Hb.push(["svt", sa.timestamp]), sa.group && sa.group !== vc && Hb.push(["svg", sa.group]), Hb.push(["svtrg", sa.trigger]), Hb.push(["svm", Yb(sa)]));
                    ib && (ib.name !== xc && Hb.push(["tvn", ib.name]), ib.timestamp !== bd && Hb.push(["tvt",
                        ib.timestamp
                    ]), ib.group && ib.group !== vc && Hb.push(["tvg", ib.group]), Hb.push(["tvtrg", ib.trigger]), Hb.push(["tvm", Yb(ib)]))
                }
                $b.call(Xb, fb, Hb);
                b && !Lb("ntd") && fb.push(["xrt", this.oh().join("")]);
                "_load_" === x && "undefined" !== typeof document && fb.push(["lr", document.referrer]);
                "0" !== sb && fb.push(["bg", sb]);
                k && f && (0 < k ? fb.push(["xcs", k - p]) : fb.push(["xcs", k]), 0 < f ? fb.push(["xce", f - p]) : fb.push(["xce", f])); - 1 !== L && fb.push(["rc", L]);
                aa && fb.push(["rm", aa]);
                this.fc && this.stop < this.fc.responseEnd && this.Wc && fb.push(["sd",
                    1
                ]);
                return fb
            };
            a.prototype.vh = function() {
                return 3600001 <= oc() - this.start ? (this.$c(!1), !0) : !1
            };
            a.prototype.hf = function(b) {
                this.xhrUrl = b.trim()
            };
            a.prototype.ph = function(b) {
                this.bestMatchingResource = b;
                this.He(b)
            };
            a.prototype.He = function(b) {
                !bf(b) || this.fc === b || "rtRequestId" in b || (b.rtRequestId = --Jm, this.fc = b)
            };
            a.prototype.Mb = function() {
                this.Na && (this.Na = !1, this.Ea(this.rf || this.stop), this.ib = this.nc = 0, this.parent && this.parent.Mb())
            };
            a.prototype.Ld = function(b) {
                this.Mb();
                this.Ea(Math.max(b.timestamp, this.stop));
                for (var f = this.parent; f;) f.Ea(Math.max(f.stop, this.stop)), f = f.parent;
                this.Pd.push(b)
            };
            a.prototype.Yf = function() {
                function b(k) {
                    var p;
                    void 0 === k && (k = -1);
                    pa(f.qc, f.qc.indexOf(b));
                    f.Ea(Math.max(k, f.stop));
                    f.Vc() || (null === (p = f.Qf) || void 0 === p ? void 0 : p.ig())
                }
                var f = this;
                this.qc.push(b);
                return b
            };
            a.prototype.Wf = function(b, f) {
                this.$b.push([b, f])
            };
            a.prototype.Ge = function() {
                this.Xc = !0
            };
            a.prototype.uh = function(b) {
                this.Xc || (b > this.stop && 3 === this.status ? this.Ga = -6 : this.Ga = b)
            };
            a.prototype.th = function(b) {
                this.Xc ||
                    (b > this.stop && 3 === this.status ? this.Ra = -6 : this.Ra = b)
            };
            a.prototype.we = function(b) {
                this.Cb += b;
                var f = 3 === this.status;
                f && (this.status = 1);
                this.parent && (f && (this.Uc() || b++, this.parent.Zb++), this.parent.we(b))
            };
            a.prototype.Uc = function() {
                return wm.includes(this.type)
            };
            a.prototype.hh = function(b) {
                for (var f = this.subActions, k = f.length - 1; 0 <= k; k--)
                    if (f[k] === b) {
                        pa(f, k);
                        b.parent = void 0;
                        break
                    }
            };
            return a
        }(),
        Zm = "loadEventEnd loadEventStart domComplete domContentLoadedEventEnd domContentLoadedEventStart domInteractive responseEnd".split(" "),
        Wl, Og = [],
        Qk = (Wl = {}, Wl.dtAWF = function(a, b, f, k, p, x) {
            k && !tf(k) ? (Og.push({
                xhrUrl: ec(Pb(p || "")),
                D: k,
                sg: x || ""
            }), a = a.apply(b, f || []), "g" === x ? ac(function() {
                for (var L = 0; L < Og.length; L++)
                    if (Og[L].D === k) {
                        pa(Og, L);
                        break
                    }
            }, 0) : Og.pop()) : a = a.apply(b, f || []);
            return a
        }, Wl),
        Fj, Zi;
    (function(a) {
        a[a.ERROR = 970] = "ERROR";
        a[a.CANCELED = 971] = "CANCELED";
        a[a.TIMEOUT = 972] = "TIMEOUT"
    })(Zi || (Zi = {}));
    var yi = null,
        Gj = null,
        Bi = void 0,
        uk = void 0,
        xm;
    (function(a) {
        a[a.BOTH = 0] = "BOTH";
        a[a.PATH = 1] = "PATH";
        a[a.HASH = 2] = "HASH"
    })(xm || (xm = {}));
    var ym;
    (function(a) {
        a.HASHCHANGE = "hashchange";
        a.POPSTATE = "popstate"
    })(ym || (ym = {}));
    var dl, Sm;
    (function(a) {
        a[a.VIEW_CHANGE = 0] = "VIEW_CHANGE";
        a[a.PAGE_END = 1] = "PAGE_END"
    })(Sm || (Sm = {}));
    var Lj = "",
        $k, Gm = ($k = {}, $k.dtAWF = function(a, b, f) {
            return a.apply(b, f || [])
        }, $k),
        Jj, ij = !1,
        Ci = !1,
        el = !1,
        Uh = 1,
        Wh = null,
        Mj = !1,
        Kj, Ah = !1,
        xk = !1,
        jj = -1,
        Vh, Tm;
    (function(a) {
        a[a.PAGE_HIDE = 0] = "PAGE_HIDE";
        a[a.BEFORE_UNLOAD = 1] = "BEFORE_UNLOAD"
    })(Tm || (Tm = {}));
    var Nj = 0;
    setInterval(function() {
        0 < Nj && Nj--
    }, 3E4);
    var ni;
    (function(a) {
        a.DATE = "spD";
        a.DOUBLE =
            "spDb";
        a.LONG = "spL";
        a.SHORT_STRING = "spSS"
    })(ni || (ni = {}));
    var Hm = ["javaLong", "date", "shortString", "javaDouble"],
        Gi = function() {
            function a(b) {
                this.D = b;
                this.mf = [];
                this.ge = []
            }
            a.prototype.lf = function(b, f, k) {
                Kh(b, f, k, this.D);
                this.mf.push({
                    key: f,
                    value: k
                })
            };
            a.prototype.he = function(b, f, k) {
                b = kj(b, k);
                this.ge.push({
                    key: f,
                    reason: b
                });
                a.Gb++
            };
            a.prototype.se = function() {
                return this.mf
            };
            a.prototype.Nc = function() {
                return this.ge
            };
            a.prototype.wg = function() {
                return nl(this, a.Gb)
            };
            a.Gb = 0;
            return a
        }(),
        tg = {},
        Bk = function() {
            function a() {
                this.Kc = [];
                this.nf = [];
                this.De = new Map;
                this.Xd = new Map;
                this.jf = new Map;
                this.Ce = new Map;
                this.Jd = 0
            }
            a.prototype.lf = function(b, f, k) {
                switch (b) {
                    case "_uapl_":
                        this.De.set(f, k);
                        break;
                    case "_uapdbl_":
                        this.Ce.set(f, k);
                        break;
                    case "_uaps_":
                        this.jf.set(f, k);
                        break;
                    case "_uapdt_":
                        this.Xd.set(f, k);
                        break;
                    default:
                        return
                }
                this.Jd++;
                this.nf.push({
                    key: f,
                    value: k
                })
            };
            a.prototype.he = function(b, f, k) {
                b = kj(b, k);
                this.Kc.push({
                    key: f,
                    reason: b
                });
                a.Gb++
            };
            a.prototype.Gg = function() {
                return 0 < this.Jd
            };
            a.prototype.se = function() {
                return this.nf
            };
            a.prototype.Nc = function() {
                return this.Kc
            };
            a.prototype.Cg = function() {
                for (var b = [], f = 0, k = this.Kc; f < k.length; f++) b.push(k[f].key);
                return b
            };
            a.prototype.Md = function(b, f) {
                Ch(this, f.javaLong, f.date, f.shortString, f.javaDouble);
                this.De.forEach(function(k, p) {
                    var x;
                    null !== (x = b.spL) && void 0 !== x ? x : b.spL = new Map;
                    b.spL.set(p, k + "")
                });
                this.Xd.forEach(function(k, p) {
                    var x;
                    null !== (x = b.spD) && void 0 !== x ? x : b.spD = new Map;
                    b.spD.set(p, k + "")
                });
                this.jf.forEach(function(k, p) {
                    var x;
                    null !== (x = b.spSS) && void 0 !== x ? x : b.spSS = new Map;
                    b.spSS.set(p, ea(k + ""))
                });
                this.Ce.forEach(function(k, p) {
                    var x;
                    null !== (x = b.spDb) && void 0 !== x ? x : b.spDb = new Map;
                    b.spDb.set(p, k + "")
                })
            };
            a.Gb = 0;
            return a
        }(),
        Zh, lj = [],
        Ck, Um;
    (function(a) {
        a[a.BEGIN = 11359836E5] = "BEGIN";
        a[a.END = 41338908E5] = "END"
    })(Um || (Um = {}));
    var zm;
    (function(a) {
        a.METHOD = "method";
        a.PARAMETER = "parameter"
    })(zm || (zm = {}));
    var Am = [0, 1, 2, 3],
        Sl = function() {
            function a() {}
            a.prototype.setAutomaticActionDetection = function(b) {
                yc(b, "boolean") ? (1 < arguments.length && zc(), Fc("saad"), y(b)) : cc()
            };
            a.prototype.setLoadEndManually =
                function() {
                    0 < arguments.length && zc();
                    Fc("slem");
                    Ah = !0
                };
            a.prototype.signalLoadEnd = function() {
                0 < arguments.length && zc();
                Fc("sle");
                yf()
            };
            a.prototype.markAsErrorPage = function(b, f) {
                if (!yc(b, "number") || !yc(f, "string")) return cc(), !1;
                2 < arguments.length && zc();
                Fc("maep");
                return hl(b, f)
            };
            a.prototype.markXHRFailed = function(b, f, k) {
                if (!yc(b, "number") || !yc(f, "string") || !cd(k, "number")) return cc(), !1;
                3 < arguments.length && zc();
                Fc("mxf");
                return Rd(b, f, +k || -1)
            };
            a.prototype.sendSignal = function() {
                Wc("method", "sendSignal",
                    'This method is deprecated and has no functionality. Use "sendBeacon" instead.')
            };
            a.prototype.sendBeacon = function(b, f, k) {
                yc(b, "boolean") && yc(f, "boolean") && yc(k, "boolean") ? ("undefined" !== typeof b && Wc("parameter", "forceSync", "This parameter has been deprecated and has no effect anymore. Beacons are always sent asynchronously."), 3 < arguments.length && zc(), Fc("ss"), Qc(f, k)) : cc()
            };
            a.prototype.enterAction = function(b, f, k, p) {
                if (!yc(b, "string") || !cd(p, "string")) return cc(), 0;
                f && Wc("parameter", "actionType", "This parameter is deprecated and has no effect anymore.");
                5 < arguments.length && zc();
                Fc("ea");
                var x = k;
                if (x) {
                    if (!+x) return cc(), 0;
                    x = Nb(x)
                }
                return $f(b, "", +x, !1, void 0, void 0, !0, p)
            };
            a.prototype.addEnterActionListener = function(b) {
                jc(b) ? (1 < arguments.length && zc(), Fc("aeal"), ff(b)) : cc()
            };
            a.prototype.removeEnterActionListener = function(b) {
                if (jc(b)) {
                    1 < arguments.length && zc();
                    Fc("real");
                    var f = b.dtWF;
                    f && J("ACTION_ENTERED", f)
                } else cc()
            };
            a.prototype.leaveAction = function(b, f, k) {
                if (yc(b, "number") && cd(f, "number") && cd(k, "number")) {
                    3 < arguments.length && zc();
                    Fc("la");
                    var p = Kc(b);
                    if (p)
                        if (p.isCustomAction) {
                            (p = k) && (p = Nb(p));
                            var x = f;
                            x && (x = Nb(x));
                            sf(b, x, p)
                        } else Fe('"dtrum.leaveAction" can only be called for actions created by dtrum, and action with id of "'.concat(b, '" is not a custom action!'));
                    else $h()
                } else cc()
            };
            a.prototype.addLeaveActionListener = function(b) {
                jc(b) ? (1 < arguments.length && zc(), Fc("alal"), Se(b)) : cc()
            };
            a.prototype.removeLeaveActionListener = function(b) {
                if (jc(b)) {
                    1 < arguments.length && zc();
                    Fc("rlal");
                    var f = b.dtWF;
                    f && J("ACTION_LEFT", f)
                } else cc()
            };
            a.prototype.addActionProperties =
                function(b, f, k, p, x) {
                    if (yc(b, "number") && cd(f, "object") && cd(k, "object") && cd(p, "object") && cd(x, "object")) {
                        5 < arguments.length && zc();
                        if (Kc(b)) return Fc("aap"), Bc(b, f, k, p, x);
                        $h()
                    } else cc()
                };
            a.prototype.reportError = function(b, f) {
                ("object" !== typeof b && "string" !== typeof b || null === b ? 0 : "object" === typeof b && "message" in b || "string" === typeof b) && cd(f, "number") ? (2 < arguments.length && zc(), Fc("re"), Xh(b, f, !1, "0")) : cc()
            };
            a.prototype.identifyUser = function(b) {
                yc(b, "string") ? (1 < arguments.length && zc(), Fc("iu"), Gb() ? Fe("navigator.doNotTrack is enabled on the browser") :
                    (Bh("rx_visittag", b, -1), Fb.dynatrace && "identifyUser" in Fb.dynatrace && jc(Fb.dynatrace.identifyUser) && Fb.dynatrace.identifyUser(b))) : cc()
            };
            a.prototype.startThirdParty = function() {
                Wc("method", "startThirdParty", "This method is deprecated and has no functionality.")
            };
            a.prototype.stopThirdParty = function() {
                Wc("method", "stopThirdParty", "This method is deprecated and has no functionality.")
            };
            a.prototype.addPageLeavingListener = function(b) {
                jc(b) ? (1 < arguments.length && zc(), Fc("apll"), B("PAGE_LEAVING", function(f) {
                        b(f.detail)
                    })) :
                    cc()
            };
            a.prototype.beginUserInput = function(b, f, k, p) {
                if (!ia(b) && !yc(b, "string") || !yc(f, "string") || !cd(k, "string") || !cd(p, "number")) return cc(), {};
                4 < arguments.length && zc();
                Fc("bui");
                return Nd(b, f, k, p)
            };
            a.prototype.endUserInput = function(b) {
                ("object" !== typeof b || null === b ? 0 : "object" === typeof b && "name" in b && "info" in b && "title" in b) ? (1 < arguments.length && zc(), Fc("eui"), fe(b)) : cc()
            };
            a.prototype.enterXhrAction = function(b, f, k) {
                var p;
                if (!(p = !yc(b, "string"))) {
                    a: {
                        for (var x in Am)
                            if (Am[x] === f) {
                                p = !0;
                                break a
                            }
                        p = !1
                    }
                    p = !p && !cd(k, "string")
                }
                if (p) return cc(), -1;
                p = f;
                2 === f && (Wc("parameter", "xmode 2", "xmode 2 is deprecated and will fallback to value of 1."), p = 1);
                3 < arguments.length && zc();
                k || Fe("No XHR URL was provided, which will result in the request being marked as `/undefined` in the waterfall! In the future, this argument will be required!");
                Fc("exa");
                return oe(b, p, k + "", !0)
            };
            a.prototype.leaveXhrAction = function(b, f) {
                if (yc(b, "number") && cd(f, "number")) {
                    2 < arguments.length && zc();
                    Fc("lxa");
                    var k = Mc(b);
                    k ? k.isCustomAction ?
                        ((k = f) && (k = Nb(f)), dg(b, k)) : Fe('"dtrum.leaveXhrAction" can only be called for actions created by dtrum, and action with id of "'.concat(b, '" is not a custom action!')) : $h()
                } else cc()
            };
            a.prototype.enterXhrCallback = function(b) {
                yc(b, "number") ? (1 < arguments.length && zc(), Mc(b) ? (Fc("exc"), Vg(b)) : $h()) : cc()
            };
            a.prototype.leaveXhrCallback = function(b) {
                yc(b, "number") ? (1 < arguments.length && zc(), Mc(b) ? (Fc("lxc"), ge(b)) : $h()) : cc()
            };
            a.prototype.signalOnLoadStart = function() {
                0 < arguments.length && zc();
                Fc("sols");
                jf()
            };
            a.prototype.incrementOnLoadEndMarkers = function() {
                0 < arguments.length && zc();
                Fc("iolem");
                qe()
            };
            a.prototype.signalOnLoadEnd = function() {
                0 < arguments.length && zc();
                Fc("sole");
                xf()
            };
            a.prototype.actionName = function(b, f) {
                if (!yc(b, "string")) return cc(), 2;
                if (!cd(f, "number")) return cc(), 3;
                2 < arguments.length && zc();
                Fc("an");
                return od("an", Cc(b), +f) ? 0 : 1
            };
            a.prototype.endSession = function() {
                0 < arguments.length && zc();
                Fc("es");
                kl()
            };
            a.prototype.now = function() {
                0 < arguments.length && zc();
                Fc("n");
                return oc()
            };
            a.prototype.enable =
                function() {
                    var b;
                    0 < arguments.length && zc();
                    Fc("e");
                    uj() ? G((b = {}, b.kind = "OPT_IN_STATE_CHANGED", b.detail = !0, b)) : Fe("Call to dtrum.enable() had no effect since RUM JavaScript agent was already enabled or opt-in mode was not active!")
                };
            a.prototype.disable = function() {
                var b;
                0 < arguments.length && zc();
                Fc("d");
                gi() ? G((b = {}, b.kind = "OPT_IN_STATE_CHANGED", b.detail = !1, b)) : Fe("Call to dtrum.disable() had no effect since RUM JavaScript agent was already disabled or opt-in mode was not active!")
            };
            a.prototype.addVisitTimeoutListener =
                function(b) {
                    jc(b) ? (1 < arguments.length && zc(), Fc("avtl"), Th(b)) : cc()
                };
            a.prototype.enableSessionReplay = function(b) {
                if (yc(b, "boolean")) {
                    1 < arguments.length && zc();
                    Fc("esr");
                    var f = Fb.dT_;
                    f && f.srel && f.srel(b)
                } else cc()
            };
            a.prototype.disableSessionReplay = function() {
                0 < arguments.length && zc();
                Fc("dsr");
                var b = Fb.dT_;
                b && b.srel && b.srdl()
            };
            a.prototype.getAndEvaluateMetaData = function() {
                0 < arguments.length && zc();
                Fc("gaemd");
                var b = Fb.dT_;
                return b && b.gEMD && b.iRHCA ? b.gEMD() : []
            };
            a.prototype.enablePersistentValues = function() {
                0 <
                    arguments.length && zc();
                Fc("epv");
                dk()
            };
            a.prototype.disablePersistentValues = function(b) {
                yc(b, "boolean") ? (1 < arguments.length && zc(), Fc("dpv"), Ih(b)) : cc()
            };
            a.prototype.registerPreDiffMethod = function(b) {
                if (jc(b)) {
                    1 < arguments.length && zc();
                    Fc("rpdm");
                    var f = Fb.dT_;
                    f && f.srel && Array.isArray(f.srpdm) && f.srpdm.push(b)
                } else cc()
            };
            a.prototype.sendSessionProperties = function(b, f, k, p) {
                if (cd(b, "object") && cd(f, "object") && cd(k, "object") && cd(p, "object")) return 4 < arguments.length && zc(), Fc("ssp"), $e(b, f, k, p);
                cc()
            };
            a.prototype.reportCustomError =
                function(b, f, k, p) {
                    if (yc(b, "string") && yc(f, "string") && cd(k, "string") && (cd(p, "number") || cd(p, "boolean")))
                        if (4 < arguments.length && zc(), Fc("rce"), b && f) {
                            var x = [
                                ["type", b],
                                ["name", f]
                            ];
                            k && x.push(["hint", k + ""]);
                            xd("_customerror_", x, p)
                        } else Fe("Key or value is missing but mandatory for 'reportCustomError' method!");
                    else cc()
                };
            a.prototype.enableManualPageDetection = function() {
                0 < arguments.length && zc();
                Fc("emvd");
                Rc(3)
            };
            a.prototype.setPage = function(b) {
                if (!("object" === typeof b && null !== b && "group" in b && "name" in b &&
                        yc(b.name, "string")) || b.group && !yc(b.group, "string")) return cc(), -1;
                1 < arguments.length && zc();
                Fc("sp");
                return Vb(b, 3)
            };
            return a
        }(),
        Fk = [],
        Gk, mj, ug = !1,
        Rj = !!Fb.MutationObserver,
        ai = Fb.MutationObserver ? Fb.MutationObserver : void 0,
        vg = {},
        Hi = {},
        bi = {},
        nj = [],
        oj = {},
        Tj, Ik = {},
        al;
    (function(a) {
        a.CONFIG = "config";
        a.GLOBAL_PROPERTIES = "globalProperties";
        a.ROUTER = "$router"
    })(al || (al = {}));
    var Mi = "".concat(1).concat(","),
        Fl = [],
        Wj = [],
        Sg = {},
        pf, qj, fi, se = {},
        Xj = null,
        Oi = [],
        yg, mk;
    (function(a) {
        a[a.BEFORE_LOAD_ACTION_CLOSED = 0] = "BEFORE_LOAD_ACTION_CLOSED";
        a[a.BEFORE_LOAD_ACTION_SENT = 1] = "BEFORE_LOAD_ACTION_SENT";
        a[a.AFTER_LOAD_ACTION_SENT = 2] = "AFTER_LOAD_ACTION_SENT"
    })(mk || (mk = {}));
    var Fh = 0,
        Eh = 0,
        Qi, Pi, Yj = [],
        ak, Mk, Zj, bk, Im, Gh = [],
        Ri = 0,
        mm = ["click", "mousedown", "keydown", "touchstart"],
        c = 0,
        d = 0,
        l = void 0;
    (function() {
        var a, b;
        if ("documentMode" in document && !isNaN(document.documentMode)) null === (a = window.console) || void 0 === a ? void 0 : a.log("Internet Explorer detected, agent will not initialize.");
        else if (a = !(null === (b = navigator.userAgent) || void 0 === b ? 0 : b.includes("RuxitSynthetic")), !Fb.dT_ || !Fb.dT_.ica) Fb.console.log("No initCode available, turning off asyncCore."), Fb.dT_ && (Fb.dT_.di = 2);
        else if ("initialized" in Fb.dT_ && Fb.dT_.initialized) Fb.dT_.gCP || Fb.console.log("Duplicate agent injection detected, turning off redundant asyncCore."), Fb.dT_.di = 1;
        else if (a) {
            if (a = (b = Fb.dT_) && b.gCP) b = b.gCP(), a = +(Cb.dT_.ncv("buildNumber") || X().version), a = !(b && !isNaN(a) && +Qa() === a);
            a || zg() || (delete Fb.dT_, Fb.console.log("JsAgent asyncCore initialization failed!"))
        }
    })()
})();
(function() {
    function La() {
        return gb(this, void 0, void 0, function() {
            return ob(this, function() {
                return [2]
            })
        })
    }

    function gb(qa, ra, N, Z) {
        function D(P) {
            return P instanceof N ? P : new N(function(Y) {
                Y(P)
            })
        }
        return new(N || (N = Ha))(function(P, Y) {
            function ma(va) {
                try {
                    U(Z.next(va))
                } catch (Sa) {
                    Y(Sa)
                }
            }

            function ea(va) {
                try {
                    U(Z["throw"](va))
                } catch (Sa) {
                    Y(Sa)
                }
            }

            function U(va) {
                va.done ? P(va.value) : D(va.value).then(ma, ea)
            }
            U((Z = Z.apply(qa, ra || [])).next())
        })
    }

    function ob(qa, ra) {
        function N(U) {
            return function(va) {
                return Z([U, va])
            }
        }

        function Z(U) {
            if (P) throw new TypeError("Generator is already executing.");
            for (; ea && (ea = 0, U[0] && (D = 0)), D;) try {
                if (P = 1, Y && (ma = U[0] & 2 ? Y["return"] : U[0] ? Y["throw"] || ((ma = Y["return"]) && ma.call(Y), 0) : Y.next) && !(ma = ma.call(Y, U[1])).done) return ma;
                if (Y = 0, ma) U = [U[0] & 2, ma.value];
                switch (U[0]) {
                    case 0:
                    case 1:
                        ma = U;
                        break;
                    case 4:
                        return D.label++, {
                            value: U[1],
                            done: !1
                        };
                    case 5:
                        D.label++;
                        Y = U[1];
                        U = [0];
                        continue;
                    case 7:
                        U = D.ia.pop();
                        D.H.pop();
                        continue;
                    default:
                        if (!(ma = D.H, ma = 0 < ma.length && ma[ma.length - 1]) && (6 === U[0] || 2 === U[0])) {
                            D = 0;
                            continue
                        }
                        if (3 === U[0] && (!ma || U[1] > ma[0] && U[1] < ma[3])) D.label = U[1];
                        else if (6 ===
                            U[0] && D.label < ma[1]) D.label = ma[1], ma = U;
                        else if (ma && D.label < ma[2]) D.label = ma[2], D.ia.push(U);
                        else {
                            ma[2] && D.ia.pop();
                            D.H.pop();
                            continue
                        }
                }
                U = ra.call(qa, D)
            } catch (va) {
                U = [6, va], Y = 0
            } finally {
                P = ma = 0
            }
            if (U[0] & 5) throw U[1];
            return {
                value: U[0] ? U[1] : void 0,
                done: !0
            }
        }
        var D = {
                label: 0,
                B: function() {
                    if (ma[0] & 1) throw ma[1];
                    return ma[1]
                },
                H: [],
                ia: []
            },
            P, Y, ma, ea;
        return ea = {
            next: N(0),
            "throw": N(1),
            "return": N(2)
        }, "function" === typeof Symbol && (ea[Symbol.iterator] = function() {
            return this
        }), ea
    }

    function db(qa, ra) {
        void 0 === ra && (ra = []);
        var N = pa.dT_;
        N = (null === N || void 0 === N ? 0 : N.iIO) ? N.iIO : null;
        return !(null === N || void 0 === N || !N(qa, ra))
    }

    function eb() {}

    function Ta(qa, ra, N) {
        var Z = {
            D: qa,
            Rf: ra,
            Ug: function(D) {
                return "fetch" === D.initiatorType && Fa.dT_.gto() + Math.round(D.startTime) >= ra && D.name === Fa.dT_.tau(N)
            },
            Je: []
        };
        ua.set(qa, Z);
        return Z
    }

    function Ua(qa) {
        var ra = qa.D,
            N = qa.Rf,
            Z = qa.ih,
            D = qa.Je,
            P = qa.bestMatchingResource,
            Y = qa.gg;
        N && Z && D.length && (P && D.push(P), N = Fa.dT_.cbf(D, N, Z) || P, D.length = 0, N && (qa.bestMatchingResource = N, Fa.dT_.uabmr(ra, N), null ===
            Y || void 0 === Y ? void 0 : Y()))
    }

    function Ya(qa) {
        ua.forEach(function(ra) {
            var N = ra.Je,
                Z = Fa.dT_.aFr(qa, ra.Ug);
            N.push.apply(N, Z);
            Ua(ra)
        })
    }

    function Va(qa) {
        return gb(this, void 0, void 0, function() {
            var ra;
            return ob(this, function(N) {
                switch (N.label) {
                    case 0:
                        Fa.dT_.nw(), N.label = 1;
                    case 1:
                        return N.H.push([1, 3, , 4]), ra = new Ha(function(Z, D) {
                            var P = Fa.dT_.st(D, 1E3);
                            qa.gg = function() {
                                Fa.dT_.ct(P);
                                Z();
                                ua.delete(qa.D)
                            };
                            Ua(qa)
                        }), [4, ra];
                    case 2:
                        return N.B(), [3, 4];
                    case 3:
                        return N.B(), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function Qa(qa, ra,
        N) {
        if (!X) return La;
        var Z = Ta(qa, ra, N);
        return function(D) {
            Z.ih = D;
            return Va(Z)
        }
    }

    function ab() {
        (X = !!pa.PerformanceObserver) && (new PerformanceObserver(function(qa) {
            Ya(qa.getEntries())
        })).observe({
            entryTypes: ["resource"]
        })
    }

    function vb(qa) {
        var ra = {};
        qa.forEach(function(N, Z) {
            ra[Z] = N
        });
        return ra
    }

    function na(qa, ra) {
        function N(ea) {
            var U = ea.then;
            ea.then = function(va, Sa) {
                var bb = [];
                "function" === typeof va && (bb[0] = function(Db) {
                    Fa.dT_.ec(ra.D);
                    var Wb = Db,
                        oa, Eb;
                    if (Fa.dT_.iIO(Wb, 18)) {
                        var wc = ra.D;
                        ra.status = Wb.status;
                        ra.statusText =
                            Wb.statusText;
                        "headers" in Wb && fa.gEMD && fa.iRHCA && fa.iRHCA() && Fa.dT_.disE((oa = {}, oa.kind = "HTTP_RESPONSE", oa.detail = (Eb = {}, Eb.a = wc, Eb.h = vb(Wb.headers), Eb), oa));
                        Fa.dT_.mx() && !Wb.ok && (ra.ga = !0, ra.da = "abort", -1 === Wb.status ? Fa.dT_.mxc(wc) : Fa.dT_.mxf(Wb.status, Wb.statusText, wc))
                    }
                    try {
                        var Gc = Ma.onFulfilled(va, this, arguments)
                    } finally {
                        Fa.dT_.lc(ra.D), Z()
                    }
                    return Gc
                });
                "function" === typeof Sa && (bb[1] = function(Db) {
                    Fa.dT_.ec(ra.D);
                    var Wb = Db;
                    Fa.dT_.mx() && Fa.dT_.iIO(Wb, 7) && (ra.ga = !0, Fa.dT_.mxg(Wb.message, ra.D));
                    try {
                        var oa =
                            Ma.onRejected(Sa, this, arguments)
                    } finally {
                        Fa.dT_.lc(ra.D), Z()
                    }
                    return oa
                });
                bb = Ma.then(U, this, bb);
                N(bb);
                return bb
            }
        }

        function Z() {
            Y = Fa.dT_.nw();
            if (!P) {
                P = !0;
                var ea = Fa.dT_.nw();
                ma(ea).then(D).catch(D)
            }
        }

        function D() {
            var ea, U = Fa.dT_.gAA(ra.D);
            U = null !== (ea = null === U || void 0 === U ? void 0 : U.bestMatchingResource) && void 0 !== ea ? ea : Fa.dT_.gRT(ra.url, "fetch", ra.startTime, Fa.dT_.nw());
            Fa.dT_.dlx(ra.D, Y);
            var va = Fa.dT_,
                Sa = va.disE;
            ea = {
                kind: "REQUEST_COMPLETED"
            };
            var bb = {
                i: "fetch"
            };
            bb.x = ra.url;
            bb.m = ra.Fc.method || "GET";
            bb.c =
                ra.status;
            bb.s = ra.statusText;
            bb.a = void 0;
            bb.e = void 0;
            var Db = S && db(U, 13) && "navigation" !== U.entryType || db(U, ["_dtCl"]);
            Sa.call(va, (ea.detail = (bb.r = Db ? U : void 0, bb.q = ra.startTime, bb.t = ra.ga, bb.o = ra.da, bb.n = ra.Qa, bb), ea))
        }
        var P = !1,
            Y, ma = Qa(ra.D, ra.startTime, ra.url);
        N(qa)
    }

    function ta() {
        for (var qa = [], ra = 0; ra < arguments.length; ra++) qa[ra] = arguments[ra];
        if (!qa.length) return Ma.fetch(Ga, this, qa);
        var N;
        qa = Array.prototype.slice.call(qa);
        var Z, D = "function" === typeof pa.Request && Fa.dT_.iIO(qa[0], 17);
        ra = D ? qa[0].url :
            qa[0];
        "object" === typeof ra && (ra = ra.toString());
        if (D) D = qa[0];
        else {
            D = qa[1];
            var P = pa.Headers ? new pa.Headers : {};
            D ? D.headers || (D.headers = P) : D = {
                headers: P
            };
            qa[1] = D
        }
        P = Fa.dT_.nw();
        var Y = Fa.dT_.ex("fetch", 3, ra);
        Fa.dT_.disE((N = {}, N.kind = "REQUEST_STARTED", N.detail = (Z = {}, Z.i = "fetch", Z.x = ra, Z), N));
        N = {
            url: ra,
            Fc: D,
            va: qa,
            D: Y,
            startTime: P,
            status: 0,
            statusText: "",
            da: void 0,
            ga: !1,
            Qa: Fa.dT_.gtc()
        };
        N.Fc.keepalive && Fa.dT_.bcv("dKAH") || Fa.dT_.sch(N.Fc, N.url, N.D, void 0, N.Qa);
        Z = Ma.fetch(Ga, this, N.va);
        na(Z, N);
        Z.then(eb, eb);
        return Z
    }
    var Ha = this.dT_ && dT_.prm && dT_.prm() || window.Promise,
        Fa = "undefined" !== typeof window ? window : self,
        pa = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        S = "function" === typeof PerformanceResourceTiming || "object" === typeof PerformanceResourceTiming,
        X, ua = new Map,
        la, fa, Ga, Ma = (la = {}, la.fetch = function(qa, ra, N) {
            return fa.aWF(qa, ra, N)
        }, la.then = function(qa, ra, N) {
            return fa.aWF(qa, ra, N)
        }, la.onFulfilled = function(qa, ra, N) {
            return fa.aWF(qa, ra, N)
        }, la.onRejected = function(qa, ra, N) {
            return fa.aWF(qa,
                ra, N)
        }, la);
    (function() {
        var qa, ra;
        (fa = pa.dT_) && (null === (ra = (qa = Fa.dT_).smbi) || void 0 === ra ? 0 : ra.call(qa, "7")) && pa.fetch && (ab(), Ga = pa.fetch, pa.fetch = ta)
    })()
})();
(function() {
    function La() {
        La = Object.assign || function(na) {
            for (var ta, Ha = 1, Fa = arguments.length; Ha < Fa; Ha++) {
                ta = arguments[Ha];
                for (var pa in ta) Object.prototype.hasOwnProperty.call(ta, pa) && (na[pa] = ta[pa])
            }
            return na
        };
        return La.apply(this, arguments)
    }

    function gb(na) {
        var ta;
        null === (ta = vb.console) || void 0 === ta ? void 0 : ta.log("".concat("[dynatrace]", " ").concat(na))
    }

    function ob(na) {
        return null === na || "object" !== typeof na ? !1 : "[object Object]" === Object.prototype.toString.call(na)
    }

    function db(na) {
        var ta = !1,
            Ha;
        for (Ha in na) Object.prototype.hasOwnProperty.call(na,
            Ha) && eb(na[Ha]) && (gb('key "'.concat(Ha, '" contains non-finite numbers: [').concat(na[Ha], "] which have been changed to null!")), ta = !0);
        return ta
    }

    function eb(na) {
        if ("function" === typeof na) na = !0;
        else if (Array.isArray(na)) {
            for (var ta = !1, Ha = 0; Ha < na.length; Ha++) eb(na[Ha]) && (ta = !0);
            na = ta
        } else na = ob(na) ? db(na) : !("number" !== typeof na || isFinite(na));
        return na
    }

    function Ta(na, ta) {
        var Ha, Fa, pa = {},
            S;
        for (S in ta) ab.dT_.oHOP(ta, S) && ("dt" === S ? gb('"'.concat("dt", '" is a reserved property and will be discarded!')) :
            S.startsWith("dt.") ? gb('"dt.*" is a reserved keyword as a property name. Key "'.concat(S, '" will be discarded!')) : pa[S] = ta[S]);
        var X;
        ta = (null === (X = vb.performance) || void 0 === X ? 0 : X.now) ? Math.round(1E6 * ((performance.timeOrigin || performance.timing.navigationStart) + vb.performance.now())) : 1E6 * Date.now();
        X = La(La(La((Ha = {}, Ha.timestamp = ta, Ha["event.kind"] = "RUM_EVENT", Ha["event.provider"] = vb.location.hostname, Ha), pa), na), (Fa = {}, Fa["dt.rum.application.id"] = ab.dT_.scv("app"), Fa["dt.rum.sid"] = ab.dT_.gVI(), Fa["dt.rum.instance.id"] =
            ab.dT_.gVID(), Fa["dt.rum.schema_version"] = "1.2", Fa));
        db(X) && (X["dt.rum.has_nfn_values"] = !0);
        return X
    }

    function Ua(na) {
        var ta, Ha = ab.dT_.cB();
        ab.dT_.gBP().ar(Ha, JSON.stringify(na));
        ab.dT_.sB(Ha, !1, !1, (ta = {}, ta.contentType = "event", ta.st = ab.dT_.nw(), ta))
    }

    function Ya(na) {
        return ob(na) ? !0 : (gb("Provided attributes must be a JSON like object!"), !1)
    }

    function Va(na, ta) {
        if (!na || "string" !== typeof na) gb("Provided event type must be a non-empty string!");
        else if (Ya(ta)) {
            var Ha = {};
            Ha["event.type"] = na;
            Ha["event.kind"] =
                "BIZ_EVENT";
            var Fa, pa = JSON.stringify(La((Fa = {}, Fa["event.type"] = na, Fa), ta));
            try {
                var S = (new vb.TextEncoder).encode(pa).length
            } catch (X) {
                S = pa.length
            }
            na = Ta((Ha["dt.rum.custom_attributes_size"] = S, Ha), ta);
            Ua(na)
        }
    }

    function Qa(na, ta) {
        var Ha;
        if (!na || "string" !== typeof na) gb("Provided event name must be a non-empty string!");
        else if (Ya(ta)) {
            var Fa = Ta((Ha = {}, Ha["event.type"] = na, Ha), ta);
            Ua(Fa)
        }
    }
    this.dT_ && dT_.prm && dT_.prm();
    var ab = "undefined" !== typeof window ? window : self,
        vb = "undefined" !== typeof globalThis ? globalThis :
        "undefined" !== typeof window ? window : void 0;
    (function() {
        var na, ta;
        if (vb.JSON && vb.JSON.stringify && vb.dT_ && (null === (ta = (na = ab.dT_).smbi) || void 0 === ta ? 0 : ta.call(na, "N"))) {
            var Ha;
            (null === (Ha = vb.dynatrace) || void 0 === Ha ? 0 : Ha.sendBizEvent) ? Object.assign(vb.dynatrace, {
                sendBizEvent: Va
            }): vb.dynatrace = {
                sendEvent: Qa,
                sendBizEvent: Va
            }
        }
    })()
})();
(function() {
    function La(e) {
        return new Vb(function(h) {
            return pa(this, void 0, void 0, function() {
                return S(this, function(m) {
                    switch (m.label) {
                        case 0:
                            if (!e || document.hasFocus() || "mouseenter" !== e.type) return [3, 2];
                            La.pending = {
                                resolve: h
                            };
                            return [4, oe(100)];
                        case 1:
                            m.B();
                            if (!La.pending || La.pending.resolve !== h) return h(null), [2];
                            m.label = 2;
                        case 2:
                            if (Ff) return h(null), [2];
                            Ff = !0;
                            h(Ff);
                            return [2]
                    }
                })
            })
        })
    }

    function gb(e) {
        gb.listener = e
    }

    function ob(e, h) {
        return Va(e) && "href" === h ? 1 : vb(e) && "value" === h ? 32 : Vf.Rd.some(function(m) {
                return m.test(h)
            }) ?
            16 : Ya(e) && "value" === h ? 2 === db(e) ? 16 : 1 : 1
    }

    function db(e) {
        if (Qa(e) || Qa(e.parentNode)) return 1;
        sj.has(e) && qf.set(e, qf.get(e) | 8);
        Lk.has(e) && qf.set(e, qf.get(e) | 2);
        Kk.has(e) && (Vf.qb ? If.set(e, If.get(e) | 1) : If.set(e, If.get(e) | 4));
        ab(e) && e.hasAttribute("data-dtrum-mask") && (Ua(e) ? If.set(e, If.get(e) | 4) : qf.set(e, qf.get(e) | 10));
        if (qf.has(e)) return qf.get(e);
        if (If.has(e)) return If.get(e);
        var h = e,
            m = !1;
        h.nodeType === Node.TEXT_NODE && (h = h.parentNode, m = !0);
        var r = Ua(h);
        var A = m;
        void 0 === A && (A = !1);
        A = !r || A || "OPTION" === h.nodeName ?
            (r ? If : qf).get(A ? h : h.parentNode) : void 0;
        var R = void 0;
        r && eb(Vf.ub, h) && (R |= 4);
        !r && eb(Vf.sb, h) && (R |= 2);
        !r && eb(Vf.yb, h) && (R |= 8);
        if (R || r) a: if (r = void 0 === r ? !1 : r, m = void 0 === m ? !1 : m, !r && R) A = R;
            else {
                if (r) {
                    R = R && !(R & 1) || Vf.qb ? (!R || R & 1) && Vf.qb || R && !(R & 1) && !Vf.qb ? h.parentNode && Ua(h.parentNode) ? A && !(A & 1) : !0 : !1 : A && !(A & 1);
                    if (m && R) {
                        A = A ? A : 2;
                        break a
                    }
                    if (R) {
                        A = eb(jm, h) || h instanceof HTMLFormElement && "text" === h.type ? 4 : 8;
                        break a
                    }
                }
                A = 1
            }
        else A = A ? A : 1;
        Ua(e) ? If.set(e, If.get(e) | A) : qf.set(e, qf.get(e) | A);
        return A
    }

    function eb(e, h) {
        for (var m =
                0; m < e.length; m++)
            if (Li.matchesSelector(h, e[m])) return !0;
        return !1
    }

    function Ta(e, h) {
        e.forEach(function(m) {
            [].slice.call(document.querySelectorAll(m)).forEach(function(r) {
                h.has(r) || h.set(r, m)
            })
        })
    }

    function Ua(e) {
        return Ya(e) ? !1 : -1 !== hm.indexOf(e.nodeName)
    }

    function Ya(e) {
        return e && "INPUT" === e.nodeName ? (e = e.getAttribute("type")) ? -1 !== im.indexOf(e.toLowerCase()) : !1 : !1
    }

    function Va(e) {
        return ab(e) && "link" === e.nodeName.toLowerCase()
    }

    function Qa(e) {
        return ab(e) && "style" === e.nodeName.toLowerCase()
    }

    function ab(e) {
        return e &&
            e.nodeType && 1 === e.nodeType
    }

    function vb(e) {
        return e && "INPUT" === e.nodeName && "password" === e.type.toLowerCase()
    }

    function na() {
        na = Object.assign || function(e) {
            for (var h, m = 1, r = arguments.length; m < r; m++) {
                h = arguments[m];
                for (var A in h) Object.prototype.hasOwnProperty.call(h, A) && (e[A] = h[A])
            }
            return e
        };
        return na.apply(this, arguments)
    }

    function ta(e, h) {
        ta = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(m, r) {
            m.__proto__ = r
        } || function(m, r) {
            for (var A in r) Object.prototype.hasOwnProperty.call(r, A) && (m[A] =
                r[A])
        };
        return ta(e, h)
    }

    function Ha(e, h) {
        function m() {
            this.constructor = e
        }
        if ("function" !== typeof h && null !== h) throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
        ta(e, h);
        e.prototype = null === h ? Object.create(h) : (m.prototype = h.prototype, new m)
    }

    function Fa(e, h) {
        var m = {},
            r;
        for (r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > h.indexOf(r) && (m[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var A = 0;
            for (r = Object.getOwnPropertySymbols(e); A < r.length; A++) 0 >
                h.indexOf(r[A]) && Object.prototype.propertyIsEnumerable.call(e, r[A]) && (m[r[A]] = e[r[A]])
        }
        return m
    }

    function pa(e, h, m, r) {
        function A(R) {
            return R instanceof m ? R : new m(function(Aa) {
                Aa(R)
            })
        }
        return new(m || (m = Vb))(function(R, Aa) {
            function ba(Mb) {
                try {
                    cb(r.next(Mb))
                } catch (uc) {
                    Aa(uc)
                }
            }

            function Pa(Mb) {
                try {
                    cb(r["throw"](Mb))
                } catch (uc) {
                    Aa(uc)
                }
            }

            function cb(Mb) {
                Mb.done ? R(Mb.value) : A(Mb.value).then(ba, Pa)
            }
            cb((r = r.apply(e, h || [])).next())
        })
    }

    function S(e, h) {
        function m(cb) {
            return function(Mb) {
                return r([cb, Mb])
            }
        }

        function r(cb) {
            if (R) throw new TypeError("Generator is already executing.");
            for (; Pa && (Pa = 0, cb[0] && (A = 0)), A;) try {
                if (R = 1, Aa && (ba = cb[0] & 2 ? Aa["return"] : cb[0] ? Aa["throw"] || ((ba = Aa["return"]) && ba.call(Aa), 0) : Aa.next) && !(ba = ba.call(Aa, cb[1])).done) return ba;
                if (Aa = 0, ba) cb = [cb[0] & 2, ba.value];
                switch (cb[0]) {
                    case 0:
                    case 1:
                        ba = cb;
                        break;
                    case 4:
                        return A.label++, {
                            value: cb[1],
                            done: !1
                        };
                    case 5:
                        A.label++;
                        Aa = cb[1];
                        cb = [0];
                        continue;
                    case 7:
                        cb = A.ia.pop();
                        A.H.pop();
                        continue;
                    default:
                        if (!(ba = A.H, ba = 0 < ba.length && ba[ba.length - 1]) && (6 === cb[0] || 2 === cb[0])) {
                            A = 0;
                            continue
                        }
                        if (3 === cb[0] && (!ba || cb[1] > ba[0] && cb[1] <
                                ba[3])) A.label = cb[1];
                        else if (6 === cb[0] && A.label < ba[1]) A.label = ba[1], ba = cb;
                        else if (ba && A.label < ba[2]) A.label = ba[2], A.ia.push(cb);
                        else {
                            ba[2] && A.ia.pop();
                            A.H.pop();
                            continue
                        }
                }
                cb = h.call(e, A)
            } catch (Mb) {
                cb = [6, Mb], Aa = 0
            } finally {
                R = ba = 0
            }
            if (cb[0] & 5) throw cb[1];
            return {
                value: cb[0] ? cb[1] : void 0,
                done: !0
            }
        }
        var A = {
                label: 0,
                B: function() {
                    if (ba[0] & 1) throw ba[1];
                    return ba[1]
                },
                H: [],
                ia: []
            },
            R, Aa, ba, Pa;
        return Pa = {
                next: m(0),
                "throw": m(1),
                "return": m(2)
            }, "function" === typeof Symbol && (Pa[Symbol.iterator] = function() {
                return this
            }),
            Pa
    }

    function X(e, h, m) {
        if (m || 2 === arguments.length)
            for (var r = 0, A = h.length, R; r < A; r++) !R && r in h || (R || (R = Array.prototype.slice.call(h, 0, r)), R[r] = h[r]);
        return e.concat(R || Array.prototype.slice.call(h))
    }

    function ua(e) {
        return (new TextEncoder).encode(e)
    }

    function la(e) {
        e = "string" === typeof e ? ua(e) : e;
        for (var h = -1, m = 0; m < e.length;) h = h >>> 8 ^ Dk[(h ^ e[m++]) & 255];
        return (h ^ -1) >>> 0
    }

    function fa(e, h) {
        void 0 === h && (h = []);
        var m = jc.dT_;
        m = (null === m || void 0 === m ? 0 : m.iIO) ? m.iIO : null;
        return !(null === m || void 0 === m || !m(e, h))
    }

    function Ga() {}

    function Ma(e) {
        return e && "nodeType" in e
    }

    function qa(e) {
        return e && "IMG" === e.nodeName
    }

    function ra(e) {
        return e && "LINK" === e.nodeName
    }

    function N(e) {
        return e && e.nodeType && 1 === e.nodeType
    }

    function Z(e) {
        return e && "SELECT" === e.nodeName
    }

    function D(e) {
        return e && "INPUT" === e.nodeName
    }

    function P(e) {
        return e && "STYLE" === e.nodeName
    }

    function Y(e) {
        return e.type === CSSRule.IMPORT_RULE
    }

    function ma(e) {
        Qj = e
    }

    function ea() {
        return "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
    }

    function U() {
        var e, h =
            jc.dT_;
        return e = {
            version: "10301241007103824"
        }, e.ac = h.bcv("ac"), e.app = h.scv("app"), e.postfix = h.scv("postfix"), e
    }

    function va(e, h, m) {
        void 0 === m && (m = 1);
        return pa(this, void 0, void 0, function() {
            var r;
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        return A.H.push([0, 2, , 3]), [4, Vb.race([e(), new Vb(function(R, Aa) {
                            setTimeout(Aa, h)
                        })])];
                    case 1:
                        return [2, A.B()];
                    case 2:
                        r = A.B();
                        if (0 < m) return [2, va(e, h, m - 1)];
                        throw r;
                    case 3:
                        return [2]
                }
            })
        })
    }

    function Sa() {
        return pa(this, void 0, void 0, function() {
            var e, h, m, r, A, R;
            return S(this,
                function(Aa) {
                    switch (Aa.label) {
                        case 0:
                            e = jc.dT_;
                            if (!e || ea() || jc.parent === jc) return Ii = !1, [2];
                            if (m = (h = e.tdto()) && e !== h) return Ii = !0, [2];
                            Aa.label = 1;
                        case 1:
                            return Aa.H.push([1, 3, , 4]), r = U(), A = function() {
                                return F("detectSubframe", r)
                            }, [4, va(A, 1E3)];
                        case 2:
                            return R = Aa.B(), Ii = !0 === R, [2];
                        case 3:
                            return Aa.B(), [3, 4];
                        case 4:
                            return Ii = !1, [2]
                    }
                })
        })
    }

    function bb() {
        if (void 0 === Ii) throw Error("Sub-frame environment detection not yet performed");
        return Ii
    }

    function Db(e) {
        var h = Bl;
        Sj.set(h, e);
        setTimeout(function() {
                Sj.delete(h)
            },
            1E3);
        Bl++;
        return new wg({
            I: "pair",
            query: "pair-id",
            result: h
        })
    }

    function Wb(e) {
        Uj && (Hf.Gd(self, Uj), Uj = null);
        return new Vb(function(h) {
            Uj = Hf.Fd(self, function(m, r, A) {
                "pair" === m.I && "pair-id" === m.query && (e.send(new wg({
                    I: "pair",
                    query: "pair-ack",
                    result: m.result
                })), A(), h())
            });
            e.send(new wg({
                I: "pair",
                query: "pair-req"
            }))
        })
    }

    function oa(e) {
        return new Vb(function(h) {
            e.Jb(function(m) {
                if ("pair" === m.I && ["pair-req", "pair-ack"].includes(m.query))
                    if ("pair-ack" === m.query && "number" === typeof m.result)(m = Sj.get(m.result)) &&
                        h(m);
                    else
                        for (Hf.hc(self, Db(self)), m = 0; m < jc.frames.length; m++) Hf.hc(jc.frames[m], Db(jc.frames[m]))
            })
        })
    }

    function Eb(e) {
        return new Vb(function(h) {
            e.Jb(function(m) {
                "handshake" === m.I && ["connect-ack", "connect-pair"].includes(m.query) && h({
                    Vg: "connect-pair" === m.query
                })
            })
        })
    }

    function wc(e) {
        return new Vb(function(h, m) {
            setTimeout(m, e)
        })
    }

    function Gc(e) {
        return pa(this, void 0, void 0, function() {
            var h, m, r;
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        h = new wg({
                            I: "handshake",
                            query: "connect-req"
                        }), m = new Hf, Hf.hc(e,
                            h, {
                                transfer: [m.eh]
                            }), A.label = 1;
                    case 1:
                        return A.H.push([1, 5, , 6]), [4, Vb.race([Eb(m), wc(1E3)])];
                    case 2:
                        return (r = A.B()) && r.Vg ? [4, Vb.race([Wb(m), wc(1E3)])] : [3, 4];
                    case 3:
                        A.B(), A.label = 4;
                    case 4:
                        return [3, 6];
                    case 5:
                        throw A.B(), m.port.close(), Error("timeout");
                    case 6:
                        return [2, m]
                }
            })
        })
    }

    function hb(e, h) {
        void 0 === h && (h = 15);
        return pa(this, void 0, void 0, function() {
            var m;
            return S(this, function(r) {
                switch (r.label) {
                    case 0:
                        m = 0, r.label = 1;
                    case 1:
                        if (!(m < h)) return [3, 6];
                        r.label = 2;
                    case 2:
                        return r.H.push([2, 4, , 5]), [4, Gc(e)];
                    case 3:
                        return [2, r.B()];
                    case 4:
                        return r.B(), m++, [3, 5];
                    case 5:
                        return [3, 1];
                    case 6:
                        throw Error("connect handshake failed");
                }
            })
        })
    }

    function Rb(e, h) {
        Hf.Fd(e, function(m, r) {
            return pa(this, void 0, void 0, function() {
                var A, R, Aa, ba;
                return S(this, function(Pa) {
                    switch (Pa.label) {
                        case 0:
                            if ("handshake" !== m.I || "connect-req" !== m.query) return [2];
                            A = -1 < Object.prototype.toString.call(e).indexOf("Worker") ? e : r.source;
                            R = "undefined" === typeof A;
                            Aa = r.ports[0];
                            ba = new Hf(Aa);
                            ba.send(new wg({
                                I: "handshake",
                                query: R ? "connect-pair" : "connect-ack"
                            }));
                            if (!R) return [3, 4];
                            Pa.label = 1;
                        case 1:
                            return Pa.H.push([1, 3, , 4]), [4, oa(ba)];
                        case 2:
                            return A = Pa.B(), [3, 4];
                        case 3:
                            return Pa.B(), [3, 4];
                        case 4:
                            return A && h(A, ba), [2]
                    }
                })
            })
        })
    }

    function ec(e) {
        for (var h = [], m = 1; m < arguments.length; m++) h[m - 1] = arguments[m];
        try {
            JSON.stringify(h)
        } catch (r) {}
    }

    function Qb(e, h, m) {
        return pa(this, void 0, void 0, function() {
            var r, A, R, Aa, ba, Pa, cb;
            return S(this, function(Mb) {
                switch (Mb.label) {
                    case 0:
                        if ("undefined" === typeof m.result) return [3, 1];
                        r = (Ji.get(m.id) || {}).resolve;
                        Ji.delete(m.id);
                        if (!r) return ec("Resolver not found for message",
                            m), [2];
                        r(m.result);
                        return [3, 5];
                    case 1:
                        if (!pj.has(m.I)) return [3, 4];
                        A = pj.get(m.I);
                        if (!A) return [3, 3];
                        R = Cl.includes(A);
                        return [4, A.apply(h, X([e], m.query, !0))];
                    case 2:
                        Aa = Mb.B(), ba = R ? Aa : [Aa, []], Pa = ba[0], cb = ba[1], m.rh(Pa), h.send(m, cb), Mb.label = 3;
                    case 3:
                        return [3, 5];
                    case 4:
                        ec("Invalid Protocol Message", m), Mb.label = 5;
                    case 5:
                        return [2]
                }
            })
        })
    }

    function Cc() {
        xg = new WeakMap;
        Vj = new WeakMap;
        Ji = new Map;
        pj = new Map;
        Sj = new Map
    }

    function dc() {
        xg && Ji && pj || Cc()
    }

    function ic(e) {
        void 0 === e && (e = !1);
        return pa(this, void 0, void 0,
            function() {
                var h, m, r, A, R;
                return S(this, function(Aa) {
                    switch (Aa.label) {
                        case 0:
                            Hk = self;
                            Cc();
                            if (!ea() && !e) return [3, 5];
                            h = self;
                            Aa.label = 1;
                        case 1:
                            return Aa.H.push([1, 3, , 4]), [4, hb(h)];
                        case 2:
                            return m = Aa.B(), xg.set(h, m), m.Jb(function(ba) {
                                Qb(h, m, ba)
                            }), [3, 4];
                        case 3:
                            return r = Aa.B(), [2, {
                                Cf: !1,
                                Bf: "".concat(r)
                            }];
                        case 4:
                            return [3, 9];
                        case 5:
                            if (self.parent === self) return [3, 9];
                            A = self.parent;
                            Aa.label = 6;
                        case 6:
                            return Aa.H.push([6, 8, , 9]), [4, hb(A, 2)];
                        case 7:
                            return R = Aa.B(), xg.set(A, R), R.Jb(function(ba) {
                                Qb(A, R, ba)
                            }), [3, 9];
                        case 8:
                            return Aa.B(), [3, 9];
                        case 9:
                            return [2, {
                                Cf: !0,
                                Bf: ""
                            }]
                    }
                })
            })
    }

    function Pb(e) {
        return pa(this, void 0, void 0, function() {
            return S(this, function(h) {
                switch (h.label) {
                    case 0:
                        return Hk = e, [4, new Vb(function(m) {
                            Rb(e, function(r, A) {
                                xg.set(r, A);
                                A.Jb(function(R) {
                                    Qb(r, A, R)
                                });
                                m()
                            })
                        })];
                    case 1:
                        return h.B(), [2]
                }
            })
        })
    }

    function Kb() {
        Rb(self, function(e, h) {
            xg.set(e, h);
            h.Jb(function(m) {
                Qb(e, h, m)
            })
        })
    }

    function Gb(e, h, m) {
        m = (void 0 === m ? {} : m).transfer;
        m = void 0 === m ? !1 : m;
        dc();
        pj.set(e, h);
        m && Cl.push(h)
    }

    function pc(e, h, m) {
        var r = new wg({
            I: h,
            query: m
        });
        return new Vb(function(A, R) {
            Ji.set(r.id, {
                resolve: A,
                reject: R
            });
            e.send(r)
        })
    }

    function Bb(e) {
        for (var h = [], m = 1; m < arguments.length; m++) h[m - 1] = arguments[m];
        dc();
        m = xg.get(Hk);
        return m ? pc(m, e, h) : (ec("sendQueryToWorker - Channel not found for query", e, h), Vb.resolve())
    }

    function F(e) {
        for (var h = [], m = 1; m < arguments.length; m++) h[m - 1] = arguments[m];
        dc();
        m = xg.get(self.parent);
        return m ? pc(m, e, h) : (ec("sendQueryToParent - Channel not found for query", e, h), Vb.resolve())
    }

    function ka(e, h) {
        for (var m = [], r = 2; r < arguments.length; r++) m[r -
            2] = arguments[r];
        dc();
        if (!h || !h.contentWindow) return ec("sendQueryToIframe - Iframe without content", e, m), Vb.resolve();
        r = xg.get(h.contentWindow);
        return r ? pc(r, e, m) : (ec("sendQueryToIframe - Channel not found for query", e, m), Vb.resolve())
    }

    function Ea(e) {
        for (var h = [], m = 1; m < arguments.length; m++) h[m - 1] = arguments[m];
        dc();
        m = [];
        for (var r = 0; r < self.frames.length; r++) {
            var A = xg.get(self.frames[r]);
            A ? m.push(pc(A, e, h)) : ec("sendQueryToChildren - Channel not found for query", e, h)
        }
        return Vb.all(m)
    }

    function ha(e) {
        return void 0 !==
            em[e] ? Xd(e) : void 0 !== fm[e] ? De(e) : void 0 !== gm[e] ? hc.Cd(e) : null
    }

    function wb() {
        return pa(this, void 0, void 0, function() {
            var e, h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        return e = new Map, h = new Map, ci = new Map, Gb("config", function(r, A, R) {
                            if (r = e.get(A)) {
                                if ("undefined" === typeof R) return fc[r];
                                fc[r] = R
                            }
                        }), [4, Vb.all(Nb.dT_.aM(Object.getOwnPropertyNames(fc), function(r) {
                            return pa(this, void 0, void 0, function() {
                                var A, R, Aa, ba;
                                return S(this, function(Pa) {
                                    switch (Pa.label) {
                                        case 0:
                                            return A = fc[r], R = A.name, ba = (Aa =
                                                A.Gi) ? ha(Aa) : A.initial, Aa && h.set(Aa, r), bb() ? [4, F("config", R)] : [3, 2];
                                        case 1:
                                            ba = Pa.B(), Pa.label = 2;
                                        case 2:
                                            return e.set(R, r), ci.set(R, []), Object.defineProperty(fc, "__".concat(r), {
                                                writable: !0,
                                                value: ba
                                            }), Object.defineProperty(fc, r, {
                                                enumerable: !0,
                                                get: function() {
                                                    return fc["__".concat(r)]
                                                },
                                                set: function(cb) {
                                                    fc["__".concat(r)] !== cb && (fc["__".concat(r)] = cb, Za(R, cb))
                                                }
                                            }), [2, null]
                                    }
                                })
                            })
                        }))];
                    case 1:
                        return m.B(), Kg("CONFIG_UPDATE", function(r) {
                            h.forEach(function(A, R) {
                                (R = r.detail[R]) && (fc[A] = R)
                            })
                        }), [2]
                }
            })
        })
    }

    function tb(e,
        h) {
        var m;
        ci.has(e) && (null === (m = ci.get(e)) || void 0 === m ? void 0 : m.push(h))
    }

    function Za(e, h) {
        Ea("config", e, h);
        (e = ci.get(e)) && Nb.dT_.fE(e, function(m) {
            m(h)
        })
    }

    function w(e) {
        var h = [];
        if (!e) return h;
        Nb.dT_.fE(e.split(","), function(m) {
            try {
                var r = new RegExp(decodeURIComponent(m));
                h.push(r)
            } catch (A) {}
        });
        return h
    }

    function B(e, h) {
        for (var m = 0; m < h.length; m++)
            if (h[m].test(e)) return !0;
        return !1
    }

    function J() {
        return ng("dtsrVID")
    }

    function G() {
        var e = fc.Fa;
        "string" === typeof e && hd("dtsrVID", e)
    }

    function T() {
        window.opener &&
            !Fc("dtsrTIDrSt") && (Bc("dtsrTIDrSt", "true"), Bc("dtsrTID", Jc() + ""));
        var e = Fc("dtsrTID");
        if (e) return e;
        e = Jc() + "";
        Bc("dtsrTID", e);
        return e
    }

    function H() {
        var e = ng("dtsrE");
        if (e) {
            e = e.split("=");
            var h = e[1];
            if (e[0] === Tc()) return h
        }
        return null
    }

    function Na(e) {
        e = "".concat(Tc(), "=").concat(e);
        hd("dtsrE", e)
    }

    function ia(e) {
        var h;
        if (!e && Ki) return Ki;
        Ki = (h = {}, h.css = 0, h.image = 0, h.font = 0, h);
        e = Nb.dT_.gSC();
        h = /(css_\d)|(font_\d)|(image_\d)/g;
        var m = "_";
        e.startsWith("v") || (h = /(css=\d)|(font=\d)|(image=\d)/g, m = "=");
        e = e.match(h);
        if (!e) return Ki;
        ld(e, function(r) {
            var A = r.split(m);
            r = A[0];
            A = A[1];
            Dl.includes(r) && (Ki[r] = parseInt(A))
        });
        return Ki
    }

    function Ia() {
        return !!Fc("dtsrRCDM")
    }

    function Ca(e) {
        di && Rg && Dh || qb();
        return di.has(e) || Rg.has(e)
    }

    function rb(e) {
        di && Rg && Dh || qb();
        return di.get(e) || Rg.get(e) || null
    }

    function Ab(e) {
        var h = rb(e);
        if (null !== h) e = h;
        else {
            ++Jk;
            h = "".concat(Jk);
            try {
                di.set(e, h)
            } catch (m) {
                Rg.set(e, h)
            }
            e = h
        }
        return e
    }

    function qb() {
        Jk = 0;
        di = new WeakMap;
        Rg = new Map;
        Dh = new Map
    }

    function zb() {
        ea() || (rj = new Map, bb() || (Gb("perfstart",
            function(e, h) {
                e = h.i;
                rj.has(e) || rj.set(e, []);
                rj.get(e).push(h)
            }), Gb("perfend", function(e, h) {
            var m = rj.get(h.i);
            if (!m || !m.length) return ec("PerformanceRecord not matched to any started metric", h);
            e = Af;
            var r = m.shift(),
                A;
            r.d || (r.d = []);
            h.d || (h.d = []);
            m = (A = {}, A.i = h.i, A.t = h.t - r.t, A.d = r.d.concat(h.d), A.a = r.a || h.a, A);
            e(m)
        })), Gb("perf", function(e, h) {
            bb() ? F("perf", h) : Af(h)
        }))
    }

    function Ib(e, h, m) {
        var r;
        void 0 === h && (h = []);
        void 0 === m && (m = !1);
        var A = (r = {}, r.i = e, r.t = Pd(e), r.d = h, r.a = m, r);
        bb() ? F("perf", A) : Af(A)
    }

    function ub(e) {
        if (!e) return !1;
        void 0 === ei && (ei = rc("iIO"));
        return Gl.includes(e.nodeType) && !(e.nodeType === Node.TEXT_NODE && null !== e.textContent && /^[\t\n\r ]+$/.test(e.textContent)) && !(e && "SCRIPT" === e.nodeName) && !("script" === e.nodeName && ei(e, 23)) && !ei(e, 24) && !(e && "IFRAME" === e.nodeName && ei(e.parentNode, 25))
    }

    function Sb(e) {
        return e && N(e) ? !!e.shadowRoot : !1
    }

    function nc(e) {
        return e ? rc("iIO")(e, 27) : !1
    }

    function Kc(e) {
        return e && "TEXTAREA" === e.nodeName || D(e) && !Hl.includes(e.type.toLowerCase())
    }

    function de(e) {
        return D(e) && Hl.includes(e.type.toLowerCase())
    }

    function Hc(e, h) {
        var m;
        if (m = !El.includes(h)) m = !(D(e) && "file" === e.type.toLowerCase() && "value" === h);
        if (m = m && !(Kc(e) && "value" === h) && !(Z(e) && "value" === h) && !(de(e) && "checked" === h) && !(e && "OPTION" === e.nodeName && "selected" === h)) m = !(D(e) && "hidden" === e.type.toLowerCase() && "value" === h);
        return m && !(ra(e) && "integrity" === h) && "srcdoc" !== h
    }

    function Lc(e) {
        try {
            if ("" === e) throw Error("Rule is an empty string");
            Li.matchesSelector(document.documentElement, e);
            return !0
        } catch (h) {
            return console.warn("Masking selector evaluation error: " +
                h.name, h), !1
        }
    }

    function Mc(e) {
        e.ub = e.ub.filter(function(h) {
            return Lc(h)
        });
        e.sb = e.sb.filter(function(h) {
            return Lc(h)
        });
        e.yb = e.yb.filter(function(h) {
            return Lc(h)
        });
        return e
    }

    function Jd(e) {
        var h = {
            qb: !0,
            ub: [],
            sb: [],
            yb: [],
            Rd: [],
            version: "1"
        };
        if ("undefined" === typeof e || "" === e) return h;
        var m = decodeURIComponent(e).split(",");
        e = m[0];
        var r = m[1],
            A = m[2],
            R = m[3];
        m = m[4];
        "1" === e && (h.version = e);
        if ("1" === r || "0" === r) h.qb = "1" === r;
        "" !== A && "undefined" !== typeof A && (h.ub = decodeURIComponent(A).split(";"));
        "" !== R && "undefined" !==
            typeof R && (h.sb = decodeURIComponent(R).split(";").map(function(Aa) {
                Aa = Aa.split("&");
                var ba = Aa[0];
                "undefined" !== typeof Aa[1] && h.yb.push(ba);
                return ba
            }));
        if ("" !== m && "undefined" !== typeof m) try {
            h.Rd = decodeURIComponent(m).split(";").map(function(Aa) {
                if ("" === Aa) throw Error("RegExp rule is an empty string");
                return new RegExp(Aa)
            })
        } catch (Aa) {
            console.warn("Masking attribute rule error: " + Aa.name, Aa)
        }
        return Mc(h)
    }

    function od(e) {
        void 0 === e && (e = []);
        var h = [];
        e.forEach(function(m) {
            var r = m.split("/");
            m = r[1];
            r = Number(r[0]);
            try {
                if (0 === r) {
                    var A = m.length - 1,
                        R = m;
                    m[A] === Nk.Kd && (R = m.substr(0, A));
                    Li.matchesSelector(document.documentElement, R)
                } else 1 === r && new RegExp(m);
                h.push(zg.create(r, m))
            } catch (Aa) {}
        });
        return h
    }

    function ya(e, h) {
        for (h = e(h); h;) {
            if (ub(h)) return h;
            h = e(h)
        }
    }

    function I(e, h) {
        "addNode" === e && Ab(h);
        var m = rb(h);
        if (!m) return null;
        m = {
            J: m
        };
        if ("addNode" === e || "updateNode" === e) h.parentNode && (Zc() && nc(h.parentNode) ? m.ja = rb(h.parentNode.host) : m.ja = rb(h.parentNode)), e = ya(function(r) {
            if (Ma(r.previousSibling)) return r.previousSibling;
            if (Zc() && nc(r.parentNode)) return r.parentNode.host.lastChild || void 0
        }, h), h = ya(function(r) {
            var A;
            if (Ma(r.nextSibling)) return r.nextSibling;
            if (Zc() && Sb(r.parentNode)) return (null === (A = r.parentNode.shadowRoot) || void 0 === A ? void 0 : A.firstChild) || void 0
        }, h), m.ma = e ? rb(e) : null, m.pa = h ? rb(h) : null;
        return m
    }

    function ca(e, h, m) {
        var r = I(e, h);
        if (r) switch (e) {
            case "addNode":
                return r.nodeName = "http://www.w3.org/2000/svg" === h.namespaceURI ? h.nodeName : h.nodeName.toLowerCase(), null !== h.nodeValue && (r.nodeValue = h.nodeValue),
                    r.namespaceURI = null !== h.namespaceURI ? h.namespaceURI : void 0, r.ka = Wf.Xa(h), r;
            case "updateNode":
                return r.ka = Wf.Xa(h), r;
            case "removeNode":
                return r;
            case "updateNodeValue":
                return null !== h.nodeValue && (r.nodeValue = h.nodeValue), r;
            case "updateAttribute":
                if (m) return r.attributeName = m.name, r.Sa = m.value, r.ka = Wf.Bd(h, m.name), r
        }
    }

    function Ba(e, h) {
        e && (h.prototype.toJSON = e)
    }

    function Da(e) {
        var h = new Map,
            m = Date.prototype.toJSON;
        [Number, Boolean, String, Array, Object].forEach(function(r) {
            h.set(r, r.prototype.toJSON);
            delete r.prototype.toJSON
        });
        Date.prototype.toJSON = Ej;
        try {
            return JSON.stringify(e)
        } finally {
            h.forEach(Ba), Date.prototype.toJSON = m
        }
    }

    function za(e, h) {
        return function() {
            for (var m = [], r = 0; r < arguments.length; r++) m[r] = arguments[r];
            h && Ja(h);
            return e.apply(void 0, m)
        }
    }

    function Ja(e) {
        return 0 === Nb.dT_.aFr(Nb.dT_.oK(e), function(h) {
            return void 0 === e[h]
        }).length
    }

    function wa() {
        var e = [];
        Df.store.forEach(function(h) {
            e.push(h)
        });
        return e
    }

    function Ka(e) {
        e = e && e.length;
        return "number" === typeof e && -1 < e
    }

    function kb(e, h, m) {
        return "function" === typeof h ?
            (h = void 0 === m ? h : h.bind(m), Nb.dT_.aM(e, h)) : e
    }

    function Ra(e, h, m) {
        function r() {}
        if ("function" === typeof Array.from) return h ? Array.from(e, h, m) : Array.from(e);
        if (Array.isArray(e)) return kb(e, h, m);
        if (Ka(e)) return kb([].slice.call(e), h, m);
        var A = jc.Map || r,
            R = jc.Symbol || r,
            Aa = [];
        Nb.dT_.iNF(jc.Set || r) && rc("iIO")(e, 19) && e.forEach(function(ba) {
            Aa.push(ba)
        });
        Nb.dT_.iNF(A) && rc("iIO")(e, 20) && e.forEach(function(ba, Pa) {
            Aa.push([Pa, ba])
        });
        if (Nb.dT_.iNF(R) && jc.Symbol && "function" === typeof e[Symbol.iterator] && 0 === Aa.length)
            for (e =
                e[Symbol.iterator](), A = e.next(); !A.done;) Aa.push(A.value), A = e.next();
        return kb(Aa, h, m)
    }

    function lb(e, h, m, r) {
        e = Ra(e.childNodes);
        ld(e, function(A) {
            rd(A, h, m, r);
            A = {
                type: "addNode",
                nodeName: "sdw.s",
                nodeValue: Ab(A)
            };
            A = new mf(A);
            h.add(A)
        })
    }

    function Yb(e, h, m, r) {
        function A(cb) {
            for (var Mb = [], uc = 1; uc < arguments.length; uc++) Mb[uc - 1] = arguments[uc];
            return pa(R, void 0, void 0, function() {
                var Ye;
                return S(this, function(Hd) {
                    switch (Hd.label) {
                        case 0:
                            return [4, m.apply(void 0, X([cb], Mb, !1))];
                        case 1:
                            return Ye = Hd.B(), void 0 !==
                                ba && void 0 !== Ye && null !== Ye && ba(Ye), [2]
                    }
                })
            })
        }
        var R = this;
        r = void 0 === r ? {} : r;
        var Aa = r.Ka,
            ba = void 0 === Aa ? void 0 : Aa;
        Aa = r.Hd;
        Aa = void 0 === Aa ? void 0 : Aa;
        r = r.Lf;
        var Pa = void 0 === r ? !1 : r;
        Aa && (A = Aa(A));
        r = {
            listener: A,
            Lf: Pa
        };
        Nb.dT_.fE(h.split(" "), function(cb) {
            kf(e, cb, A, Pa)
        });
        return r
    }

    function Ob(e, h, m) {
        Nb.dT_.fE(h.split(" "), function(r) {
            zf(e, r, m.listener, m.Lf)
        })
    }

    function Jb(e) {
        if (Kc(e) || Z(e)) var h = {
            name: "value",
            value: e.value
        };
        else if (de(e)) h = {
            name: "checked",
            value: e.checked ? "" : void 0
        };
        else if (e && "OPTION" === e.nodeName) h = {
            name: "selected",
            value: e.selected ? "" : void 0
        };
        else return null;
        return af.create("updateAttribute", {
            node: e,
            Ib: h
        })
    }

    function mc(e) {
        if (N(e.target)) {
            var h = new ve(Jc());
            Z(e.target) ? ld(e.target.querySelectorAll("option"), function(m) {
                (m = Jb(m)) && h.add(m)
            }) : (e = Jb(e.target)) && h.add(e);
            return h
        }
    }

    function Vc(e, h) {
        (e = Jb(e)) && h(e)
    }

    function pd(e, h) {
        void 0 === h && (h = document.documentElement);
        e = Yb(h, "input change", mc, {
            Ka: e
        });
        h === document.documentElement && (ik = e);
        return e
    }

    function qd(e, h) {
        void 0 === h && (h = ik);
        Ob(e, "input change",
            h)
    }

    function ad(e) {
        if (!e.size) return Vb.resolve();
        e = [e.Ha()];
        return bb() ? F.apply(void 0, X(["mutations"], e, !1)) : Bb.apply(void 0, X(["mutations"], e, !1))
    }

    function Ud(e) {
        return pa(this, void 0, void 0, function() {
            return S(this, function(h) {
                switch (h.label) {
                    case 0:
                        return bb() ? [4, F("events", e.Ri())] : [3, 2];
                    case 1:
                        return h.B(), [2];
                    case 2:
                        return gb.listener && gb.listener(e), [2]
                }
            })
        })
    }

    function Vd(e) {
        if (!e) return null;
        Tg || (Tg = new WeakMap);
        var h = Tg.get(e);
        if (h) return h.J;
        h = document.querySelectorAll("iframe");
        for (var m =
                0; m < h.length; m++)
            if (h[m].contentWindow === e) {
                var r = rb(h[m]);
                Tg.set(e, {
                    J: r,
                    frame: h[m]
                });
                return r
            }
        return null
    }

    function ed(e, h) {
        var m = (void 0 === h ? {} : h).context,
            r = Vd(m);
        Sd(jk);
        e.Jh(function(A) {
            A.node && A.Kf();
            if ("undefined" === typeof A.J) return !0;
            if (!m) return !1;
            if (!r) return !0;
            A.J = "".concat(r, ".").concat(A.J);
            A.ja ? A.ja = "".concat(r, ".").concat(A.ja) : A.ja = r;
            A.pa && (A.pa = "".concat(r, ".").concat(A.pa));
            A.ma && (A.ma = "".concat(r, ".").concat(A.ma));
            return !1
        });
        Ib(jk, [
            ["mutations", e.size]
        ], !0);
        return ad(e)
    }

    function fd(e,
        h) {
        var m = (void 0 === h ? {} : h).context;
        return pa(this, void 0, void 0, function() {
            var r, A;
            return S(this, function(R) {
                switch (R.label) {
                    case 0:
                        r = Vd(m);
                        if (m && !r) return [2];
                        if (m && r && (e.ra = "".concat(r, ".").concat(e.ra), e.type && ["click", "move"].includes(e.type))) {
                            Tg || (Tg = new WeakMap);
                            (R = Tg.get(m)) ? (R = R.frame.getBoundingClientRect(), A = {
                                top: Math.round(R.top),
                                left: Math.round(R.left)
                            }) : A = void 0;
                            if (void 0 === A || void 0 === e.x || void 0 === e.y) return [2];
                            e.x += A.left;
                            e.y += A.top
                        }
                        return [4, Ud(e)];
                    case 1:
                        return R.B(), [2]
                }
            })
        })
    }

    function Rc(e) {
        return pa(this,
            void 0, void 0,
            function() {
                var h, m, r, A;
                return S(this, function(R) {
                    switch (R.label) {
                        case 0:
                            return h = e.src, [4, ka("iframeLocation", e)];
                        case 1:
                            return (m = R.B()) && "about:blank" !== m && m !== h && (h = m), r = new ve(Jc()), A = af.create("updateAttribute", {
                                node: e,
                                Ib: {
                                    name: "src",
                                    value: h
                                }
                            }), r.add(A), ed(r), [2]
                    }
                })
            })
    }

    function Wd(e, h) {
        var m = Aj.yh(e);
        m && Cd(h, e, {
            name: Zk,
            value: ""
        });
        return m
    }

    function gd(e) {
        var h, m = !1,
            r = e.tagName.toLowerCase();
        e = e.parentElement;
        var A = null !== (h = null === e || void 0 === e ? void 0 : e.tagName.toLowerCase()) && void 0 !==
            h ? h : "";
        if (!e) return !0;
        "source" === r && "picture" === A && ld(e.childNodes, function(R) {
            qa(R) && Aj.yh(R) && (m = !0)
        });
        return m
    }

    function Cd(e, h, m) {
        h = af.create("updateAttribute", {
            node: h,
            Ib: m
        });
        e.add(h)
    }

    function ud(e, h) {
        if (N(e)) {
            var m = !1;
            qa(e) && (m = Wd(e, h));
            "source" === e.tagName.toLowerCase() && (m = gd(e));
            ld(e.attributes, function(r) {
                !Hc(e, r.name) || m && kk.includes(r.name) || (e && "IFRAME" === e.nodeName && "src" === r.name && Rc(e).catch(function() {}), Cd(h, e, r))
            });
            qa(e) && e.complete && Md(e, h);
            Vc(e, function(r) {
                h.add(r)
            })
        }
    }

    function Md(e,
        h) {
        void 0 === h && (h = new ve(Jc()));
        if (!qa(e) || !e.parentElement || "picture" === e.parentElement.tagName.toLowerCase()) return h;
        Cd(h, e, {
            name: "data-dt-natural-dimensions",
            value: "".concat(e.naturalWidth + "", "x").concat(e.naturalHeight + "")
        });
        return h
    }

    function rd(e, h, m, r) {
        if (ub(e) && (!e.parentNode || ub(e.parentNode))) {
            var A = af.create(Ca(e) ? "updateNode" : "addNode", {
                node: e
            });
            if (A) {
                A.node && qa(A.node) && !A.node.complete && !r.includes(A.node) && r.push(A.node);
                h.add(A);
                if (e && "IFRAME" === e.nodeName && (A = e.getAttribute("data-dt-last-src"))) {
                    var R =
                        af.create("updateAttribute", {
                            node: e,
                            Ib: {
                                name: "src",
                                value: A
                            }
                        });
                    e.removeAttribute("data-dt-last-src")
                }
                ud(e, h);
                R && h.add(R);
                if (ra(e)) e.sheet ? m.push(e.sheet) : e.addEventListener("load", v);
                else if (P(e) && e.sheet) m.push(e.sheet);
                else
                    for (Zc() && Sb(e) ? (Sb(e) && ((R = He(e)) ? $f(R, h) : (R = {
                            host: e,
                            ld: !1
                        }, Td.push(R), Ec(R), O(R), Pe(R, h), $f(R, h))), R = e.shadowRoot.firstChild, lb(e, h, m, r)) : R = e.firstChild; R;) rd(R, h, m, r), R = R.nextSibling
            }
        }
    }

    function Nd(e, h) {
        void 0 === h && (h = document.documentElement);
        if (h.parentNode) {
            Sd("snapshot");
            var m = new ve(Jc(), hc.Pb("srficros")),
                r = [],
                A = [];
            rd(h, m, r, A);
            bb() || (h = yh.getEntries(), ld(h, function(R) {
                m.add(R);
                yh.remove(R)
            }), jc !== jc.top && (h = new mf({
                type: "addNode",
                nodeName: "tf.iframe",
                nodeValue: ""
            }), m.add(h)));
            Ib("snapshot", [
                ["nodes", m.size]
            ], !0);
            e(m, r, A)
        }
    }

    function Bd(e) {
        var h = Function.prototype.toString.call(e);
        return !!e && /{\s+\[native code]/.test(h)
    }

    function Dd(e, h) {
        var m = e.prototype,
            r = new e.Vh(h);
        ld(Object.keys(m), function(A) {
            r[A] = m[A].bind(r)
        });
        return r
    }

    function Xc(e, h) {
        "function" === typeof Tf &&
            Tf(e, h)
    }

    function vd(e) {
        var h = [],
            m = new ve(Jc()),
            r = [],
            A = [],
            R = [],
            Aa = [];
        ld(e, function(ba) {
            P(ba.target) && ba.target.sheet && h.push(ba.target.sheet);
            ba.target && ba.target.parentNode && P(ba.target.parentNode) && ba.target.parentNode.sheet && h.push(ba.target.parentNode.sheet);
            "childList" === ba.type ? (ld(ba.removedNodes, function(Pa) {
                R.push(Pa)
            }), ld(ba.addedNodes, function(Pa) {
                A.push(Pa)
            })) : Aa.push(ba)
        });
        ld(Nb.dT_.aFr(R, Ca), function(ba) {
            m.add(af.create("removeNode", {
                node: ba,
                Ib: void 0
            }));
            Zc() && Sb(ba) && ne(ba)
        });
        e = Nb.dT_.aFr(A,
            function(ba) {
                return !!(ub(ba) && ba.parentNode && Ca(ba.parentNode))
            });
        ld(e, function(ba) {
            Nd(function(Pa, cb, Mb) {
                h.push.apply(h, cb);
                r.push.apply(r, Mb);
                Pa.forEach(function(uc) {
                    m.add(uc)
                })
            }, ba)
        });
        e = Nb.dT_.aFr(Aa, function(ba) {
            return Ca(ba.target)
        });
        ld(e, function(ba) {
            switch (ba.type) {
                case "characterData":
                    m.add(af.create("updateNodeValue", {
                        node: ba.target,
                        Ib: void 0
                    }));
                    break;
                case "attributes":
                    if (!N(ba.target) || !ba.attributeName || !Hc(ba.target, ba.attributeName)) break;
                    var Pa = ba.target.getAttribute(ba.attributeName),
                        cb = "data-dt-last-src" === ba.attributeName,
                        Mb = ba.target,
                        uc = ba.attributeName;
                    qa(Mb) && "src" === uc && Ni.yh(Mb) || cb || m.add(af.create("updateAttribute", {
                        node: ba.target,
                        Ib: {
                            name: ba.attributeName,
                            value: null !== Pa ? Pa : void 0
                        }
                    }));
                    "src" !== ba.attributeName || !qa(ba.target) || ba.target.parentNode && "picture" === ba.target.parentNode.nodeName.toLowerCase() || (ba = ba.target, ba.complete ? Md(ba, m) : r.push(ba));
                    break;
                default:
                    ec("Unexpected mutation type", {
                        type: ba.type
                    })
            }
        });
        return {
            Uh: m,
            styleSheets: h,
            ej: r
        }
    }

    function Nc(e) {
        ld(e, function(h) {
            h.complete ||
                (h.removeEventListener("load", n), h.addEventListener("load", n), h.removeEventListener("error", n), h.addEventListener("error", n))
        })
    }

    function fe() {
        ld(document.getElementsByTagName("img"), function(e) {
            e.removeEventListener("load", n)
        })
    }

    function n(e) {
        qa(e.target) && (e = Md(e.target), Xc(e, []))
    }

    function v(e) {
        if (Ma(e.target)) {
            e = e.target;
            try {
                ra(e) && e.sheet && Xc(new ve(Jc()), [e.sheet]), e.removeEventListener("load", v)
            } catch (h) {}
        }
    }

    function y(e) {
        Sd("observe");
        var h = vd(e);
        e = h.Uh;
        var m = h.styleSheets;
        h = h.ej;
        Ib("observe", [
            ["mutations", e.size]
        ], !0);
        (0 < e.size || 0 < m.length) && Xc(e, m);
        0 < h.length && Nc(h)
    }

    function K(e, h) {
        void 0 === h && (h = document.documentElement);
        "function" === typeof e && (sg = Pg.Xi(y), Tf = e, sg.observe(h, pi), pd(e), V(), Zc() && Nb.dT_.fE(Td, O), Nc(document.getElementsByTagName("img")))
    }

    function O(e) {
        sg && Tf && e && e.host.shadowRoot && (sg.observe(e.host.shadowRoot, pi), e.gj = pd(Tf, e.host.shadowRoot))
    }

    function V() {
        jc.PerformanceObserver && (qh = new PerformanceObserver(da), qh.observe({
            entryTypes: ["resource"]
        }), setTimeout(function() {
                xa(performance.getEntriesByType("resource"))
            },
            0))
    }

    function da(e) {
        xa(e.getEntries())
    }

    function xa(e) {
        for (var h = new ve(Jc()), m = 0; m < e.length; m++) {
            var r = e[m],
                A = r.decodedBodySize,
                R = r.name;
            0 === r.transferSize && 0 === A && R.includes(".css") && R.startsWith(jc.location.origin) && h.add(new mf({
                type: "addNode",
                nodeName: "rl.fail",
                nodeValue: R
            }))
        }
        h.size && Tf && Tf(h)
    }

    function $a() {
        if (sg) {
            var e = sg.takeRecords();
            if (e) {
                var h = vd(e);
                e = h.Uh;
                h = h.styleSheets;
                0 < e.size && Xc(e, h)
            }
        }
    }

    function Xa(e) {
        e && e.host.shadowRoot && qd(e.host.shadowRoot, e.gj)
    }

    function mb(e) {
        if (D(e) && "password" ===
            e.type.toLowerCase()) {
            var h = e.value;
            return h ? h.replace(/./g, "*") : ""
        }
        var m = Me.Oj(e),
            r = Me.Nj(e);
        h = "INPUT" === e.nodeName && "number" === e.getAttribute("type") ? "0" : "*";
        m || r ? (e = e.value, void 0 === h && (h = "*"), h = null !== e && "" !== e ? e.replace(/[^- :\u2013\/\u2014._;,()=!?|<>+%\u20ac$\u00a2\u00a5\u00a3\u20bd\u5143\u20a8\u20bf'"@&\u3002\u3001\]\[\n\r\\]/g, h) : e) : h = D(e) ? ["radio", "checkbox"].includes(e.type.toLowerCase()) ? e.checked : e.value : e.value;
        return h
    }

    function Tb(e, h) {
        var m = e.target;
        void 0 === h && (h = Jc());
        if (Me.xh(m)) return Vb.resolve(null);
        e = mb(m);
        var r = Vb,
            A = r.resolve,
            R = Ve,
            Aa = rb(m);
        if (m.name) m = m.name;
        else if (m.id) m = "#".concat(m.id);
        else {
            var ba = m.tagName.toLowerCase();
            m = D(m) ? "<".concat(ba, ".").concat(m.type, ">") : "<".concat(ba, ">")
        }
        return A.call(r, new R("input", {
            ra: Aa,
            name: m,
            value: "string" === typeof e ? 5E3 >= e.length ? e : e.slice(0, -(e.length - 5E3)) : e,
            duration: Jc() - h
        }))
    }

    function Dc(e, h) {
        void 0 === h && (h = document);
        e = Yb(h, "focus blur", Tb, {
            Ka: e,
            Hd: function(m) {
                var r, A, R;
                return function(Aa) {
                    var ba = Aa.target;
                    N(ba) && (D(ba) || ba && "TEXTAREA" === ba.nodeName ||
                        Z(ba)) && ("blur" === Aa.type && ba === A && R !== mb(A) && m(Aa, r), A = ba, R = mb(A), r = Jc())
                }
            },
            Lf: !0
        });
        h === document && (Le = e);
        return e
    }

    function Ec(e) {
        if (e.host.shadowRoot && !e.ld) {
            var h = Dc(fd, e.host.shadowRoot);
            e.ld = !0;
            e.Kh = h
        }
    }

    function Pc(e) {
        e.host.shadowRoot && e.ld && e.Kh && (Ob(e.host.shadowRoot, "focus blur", e.Kh), e.ld = !1)
    }

    function Ic(e) {
        try {
            return null !== e.cssRules && 0 < e.cssRules.length
        } catch (h) {
            return !1
        }
    }

    function Ed(e) {
        try {
            var h = e.cssRules
        } catch (m) {
            h = null
        }
        return {
            url: null === e || void 0 === e ? void 0 : e.href,
            ownerNode: null ===
                e || void 0 === e ? void 0 : e.ownerNode,
            cssRules: h
        }
    }

    function pe(e) {
        e.createObjectStore("global");
        e.createObjectStore("visit")
    }

    function Ie(e) {
        return Vb.reject(Error("".concat(Bj, " '").concat(e, "' on non-initialized db")))
    }

    function lh(e) {
        void 0 === e && (e = pe);
        return Ze = new Vb(function(h, m) {
            var r = indexedDB.open("dT_store", 1);
            r.onsuccess = function() {
                h(r.result)
            };
            r.onerror = function() {
                m(r.error)
            };
            r.onupgradeneeded = function() {
                var A = r.result;
                A.onversionchange = function() {
                    A.close()
                };
                e(A)
            }
        })
    }

    function ag(e, h, m) {
        if (!Ze) return Ie("put");
        var r = m || h.key;
        return Ze.then(function(A) {
            return new Vb(function(R, Aa) {
                var ba = A.transaction(e, "readwrite");
                ba.oncomplete = function() {
                    R()
                };
                ba.onerror = function() {
                    var cb, Mb, uc = null !== (cb = Pa.error) && void 0 !== cb ? cb : null === (Mb = null === Pa || void 0 === Pa ? void 0 : Pa.transaction) || void 0 === Mb ? void 0 : Mb.error;
                    Aa(uc)
                };
                ba.onabort = ba.onerror;
                ba = ba.objectStore(e);
                var Pa = r ? ba.put(h, r) : ba.put(h)
            })
        })
    }

    function Qe(e, h) {
        return Ze ? Ze.then(function(m) {
            return new Vb(function(r, A) {
                var R = m.transaction(e, "readonly").objectStore(e).get(h);
                R.onsuccess = function() {
                    r(R.result)
                };
                R.onerror = function() {
                    A(R.error)
                }
            })
        }) : Ie("getByKey")
    }

    function Wa(e) {
        return Ze ? Ze.then(function(h) {
            return new Vb(function(m, r) {
                var A = [],
                    R = h.transaction(e, "readonly").objectStore(e).openCursor();
                R.onsuccess = function() {
                    var Aa = R.result;
                    Aa ? (A.push(Aa.value), Aa.continue()) : m(A)
                };
                R.onerror = function() {
                    r(R.error)
                }
            })
        }) : Ie("getAll")
    }

    function bg(e, h) {
        return Ze ? Ze.then(function(m) {
            return new Vb(function(r, A) {
                var R = m.transaction(e, "readwrite");
                R.oncomplete = function() {
                    r()
                };
                R.onerror =
                    function() {
                        var ba, Pa, cb = null !== (ba = Aa.error) && void 0 !== ba ? ba : null === (Pa = null === Aa || void 0 === Aa ? void 0 : Aa.transaction) || void 0 === Pa ? void 0 : Pa.error;
                        A(cb)
                    };
                R.onabort = R.onerror;
                var Aa = R.objectStore(e).delete(h)
            })
        }) : Ie("remove")
    }

    function vf(e, h) {
        return ag(e, h).catch(function() {
            var m = cf(e);
            m.set(h.key, h);
            Mg.set(e, m)
        })
    }

    function Re(e, h) {
        return Qe(e, h).then(function(m) {
            if (!m) throw Error("Record not found");
            return m
        }).catch(function() {
            return cf(e).get(h)
        })
    }

    function Gg(e) {
        var h = Ra(cf(e), function(m) {
            return m[1]
        });
        return Wa(e).then(function(m) {
            if (!m) throw Error("Records not found");
            return m
        }).then(function(m) {
            m = m.concat(h);
            for (var r = [], A = [], R = 0; R < m.length; R++) {
                var Aa = m[R];
                A.includes(Aa.key) || (r.push(Aa), A.push(Aa.key))
            }
            return r
        }).catch(function() {
            return h
        })
    }

    function he(e, h) {
        return bg(e, h).catch(function() {
            cf(e).delete(h)
        })
    }

    function cf(e) {
        return Mg.get(e) || new Map
    }

    function Jf(e) {
        return ee(e, "srrcur_")
    }

    function ee(e, h) {
        return e && "string" === typeof e.key && 0 === e.key.indexOf(h)
    }

    function kd(e) {
        return Re("visit", "".concat(ah).concat(e.url)).then(function(h) {
            if (!ee(h,
                    ah)) throw Error("Record not found");
            h = h.body;
            var m = document.implementation.createHTMLDocument(""),
                r = document.createElement("style");
            r.innerText = h;
            m.head.appendChild(r);
            h = r.sheet;
            if (!h) throw Error("css resource from string has not been created");
            return Nb.dT_.aFr(h.cssRules, Y)
        }).catch(function() {
            return []
        })
    }

    function md(e) {
        return e.cssRules ? Nb.dT_.aFr(e.cssRules, function(h) {
            if (!Y(h) || !h.styleSheet) return !1;
            h = Ed(h.styleSheet);
            return Ic(h) || Xd("srxicss") ? !0 : !1
        }) : []
    }

    function dd(e) {
        return Ic(e) ? Vb.resolve(md(e)) :
            Xd("srxicss") ? kd(e) : Vb.resolve([])
    }

    function Yf(e) {
        return new Vb(function(h, m) {
            if (e.url) {
                var r = rc("gxwp")();
                r.open("GET", e.url);
                r.timeout = tk;
                r.onload = function() {
                    200 === r.status ? h(r.responseText) : m(Error("".concat(r.status, ": ").concat(r.statusText)))
                };
                r.onerror = function() {
                    m(Error("".concat(r.status, ": ").concat(r.statusText)))
                };
                r.ontimeout = r.onerror;
                r.send()
            } else m(Error("stylesheet doesn't have href"))
        })
    }

    function Jh(e, h) {
        var m = document.implementation.createHTMLDocument(""),
            r = m.createElement("base");
        r.href = h;
        m.head.appendChild(r);
        h = m.createElement("a");
        h.href = e;
        return h.href
    }

    function u(e) {
        if ("string" !== typeof e.cssText) e = "";
        else {
            var h;
            if (!(h = t(e)))
                if ("conditionText" in e) {
                    h = e.conditionText;
                    var m = e.cssRules,
                        r = e.cssText;
                    if (r.includes("grid-template:") && r.includes("repeat(")) {
                        r = "";
                        for (var A = 0; A < m.length; ++A) {
                            var R = m.item(A);
                            R && (r += "{".concat(t(R), "}"))
                        }
                        h = "@media ".concat(h, " ").concat(r)
                    } else h = null
                } else h = null;
            e = h || e.cssText
        }
        return e
    }

    function t(e) {
        if (!("selectorText" in e)) return null;
        var h = e.selectorText;
        e = e.fk;
        if (!e) return null;
        var m = e.get("grid-template");
        if (!m || !m.toString().includes("repeat(")) return null;
        var r = "";
        e.forEach(function(A, R) {
            "grid-template" !== R && (r += "".concat(R, ":").concat(A, ";"))
        });
        return "".concat(h, "{").concat(r, "}")
    }

    function z(e) {
        try {
            if (!e.cssRules) return Vb.reject(Error("No rules defined"));
            var h = e.url,
                m = Nb.dT_.aM(e.cssRules, function(r) {
                    r = u(r);
                    if (r.length && h) {
                        var A = new RegExp(/url\(["|'](.+?)["|']/g),
                            R = A.exec(r);
                        if (R) {
                            for (var Aa = r; null !== R;) {
                                R = R[1];
                                if (/^([https?]+:)?\/\//i.test(R)) {
                                    var ba =
                                        h.split("/");
                                    var Pa = R.split("/");
                                    if (ba[0] !== Pa[0] || ba[2] !== Pa[2]) Pa = R;
                                    else if (ba.slice(3).join("/") === Pa.slice(3).join("/")) Pa = Pa.slice(3).join("/");
                                    else {
                                        var cb = ba.splice(3);
                                        Pa = Pa.splice(3);
                                        var Mb = cb.length;
                                        ba = 0;
                                        for (ba; ba < Math.min(Pa.length, Mb) - 1 && Pa[ba] === cb[ba]; ba++);
                                        cb = "";
                                        for (--Mb; Mb > ba; Mb--) cb += "../";
                                        Pa = cb += Pa.splice(ba).join("/")
                                    }
                                    Aa = Aa.replace(R, Pa)
                                }
                                R = A.exec(r)
                            }
                            r = Aa
                        }
                    }
                    return r
                }).join("");
            return Vb.resolve(m)
        } catch (r) {
            return Vb.reject(r)
        }
    }

    function Q() {
        return Gg("visit").then(function(e) {
            for (var h = [], m = 0; m < e.length; m++) {
                var r = e[m];
                ee(r, ah) && h.push(r)
            }
            return h
        }).catch(function() {
            return []
        })
    }

    function ja(e) {
        return Re("global", "".concat("srrckr_").concat(e)).then(function(h) {
            return ee(h, "srrckr_") && !(h.ttl < Nb.dT_.nw())
        }).catch(function() {
            return !1
        })
    }

    function Oa(e) {
        return Ic(e) ? z(e) : Yf(e).catch(function(h) {
            e.url && Ee.rj(e.url);
            throw h;
        })
    }

    function nb(e) {
        return Nb.dT_.aM(new Uint8Array(e), function(h) {
            return ("00" + h.toString(16)).slice(-2)
        }).join("")
    }

    function jb(e, h) {
        void 0 === h && (h = "SHA-256");
        return pa(this,
            void 0, void 0,
            function() {
                var m;
                return S(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, jc.crypto.subtle.digest(h, e)];
                        case 1:
                            return m = r.B(), [2, nb(m)]
                    }
                })
            })
    }

    function yb(e) {
        return pa(this, void 0, void 0, function() {
            var h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        var r, A;
                        return (null === (r = null === jc || void 0 === jc ? void 0 : jc.msCrypto) || void 0 === r ? 0 : r.subtle) || (null === (A = null === jc || void 0 === jc ? void 0 : jc.crypto) || void 0 === A ? 0 : A.subtle) ? [2, jb(e)] : [4, xb(e)];
                    case 1:
                        h = m.B();
                        if (!h) throw Error("Error generating hash with fast-sha256");
                        return [2, nb(h)]
                }
            })
        })
    }

    function xb(e) {
        return pa(this, void 0, void 0, function() {
            var h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        return bb() ? [4, F("SHA-256", e)] : [3, 2];
                    case 1:
                        return h = m.B(), [3, 4];
                    case 2:
                        return [4, Bb("SHA-256", e)];
                    case 3:
                        h = m.B(), m.label = 4;
                    case 4:
                        return [2, h]
                }
            })
        })
    }

    function bc() {
        return lc().then(function(e) {
            if (!e) return Qc(0)
        })
    }

    function lc() {
        return Re("visit", "".concat("srrckrc")).then(function(e) {
            return e && "string" === typeof e.key && "srrckrc" === e.key && e ? e.counter : 0
        }).catch(function() {
            return 0
        })
    }

    function Uc() {
        return lc().then(function(e) {
            return Qc(e + 1)
        })
    }

    function Qc(e) {
        var h, m = (h = {}, h[og] = "srrckrc", h.visitId = Nb.dT_.gVI(), h.counter = e, h);
        return vf("visit", m)
    }

    function sc() {
        return he("visit", "srrckrc").catch(function() {})
    }

    function Yc() {
        bh += 1;
        return Uc()
    }

    function Xf() {
        return {
            Lj: lc(),
            Aj: bh
        }
    }

    function sd() {
        bh = 0;
        return sc()
    }

    function tc(e) {
        return new Uint8Array(ua(e))
    }

    function le() {
        return Nb.dT_.ncv("msl")
    }

    function Id(e, h, m, r) {
        return r ? "sid=".concat(e, "-").concat(1, "&p").concat(h, "_").concat(m, "&").concat(1,
            ",").concat(e, ",").concat(encodeURIComponent(r), ",") : "sid=".concat(e, "-").concat(1, "&p").concat(h, "_").concat(m, "&")
    }

    function Ad(e, h) {
        var m = new Uint8Array(e.length + h.length);
        m.set(e, 0);
        m.set(h, e.length);
        return m
    }

    function td(e, h, m) {
        var r = Id(h, 0, 20, e);
        var A = Id(h, 20, 20);
        r = le() - r.length;
        r = m.length - r;
        A = le() - A.length;
        r = 0 >= A ? 1 : Math.ceil(r / A);
        r += 1;
        if (20 < r) return [];
        e = tc(Id(h, 1, r, e));
        A = le() - e.length;
        for (var R = m.slice(A), Aa = 0, ba = [], Pa = 2; Pa <= r; Pa++) {
            var cb = tc(Id(h, Pa, r)),
                Mb = le() - cb.length;
            Mb = R.slice(Aa, Aa + Mb);
            ba.push(Ad(cb, Mb));
            Aa += Mb.length
        }
        ba.unshift(Ad(e, m.slice(0, A)));
        return ba
    }

    function ye(e, h, m) {
        e = td(e, h, m);
        if (!e.length) return -1;
        Nb.dT_.fE(e, function(r) {
            var A, R = Nb.dT_.cB();
            Nb.dT_.gBP().ar(R, r);
            Nb.dT_.sB(R, !1, !0, (A = {}, A.contentType = "srRs", A))
        });
        return 1
    }

    function id(e, h, m) {
        return pa(this, void 0, void 0, function() {
            var r, A, R, Aa, ba, Pa;
            return S(this, function(cb) {
                switch (cb.label) {
                    case 0:
                        return bb() ? [4, F("sendResource", e, h, m)] : [3, 2];
                    case 1:
                        return r = cb.B(), [3, 4];
                    case 2:
                        return A = tc("".concat(1, ",").concat(h,
                            ",").concat(encodeURIComponent(e), ",")), [4, Bb("compress", m)];
                    case 3:
                        R = cb.B();
                        if (A.length + R.length > le()) return [2, ye(e, h, R)];
                        Aa = Nb.dT_.cB();
                        ba = Ad(A, R);
                        Nb.dT_.gBP().ar(Aa, ba);
                        Nb.dT_.sB(Aa, !1, !0, (Pa = {}, Pa.contentType = "srRs", Pa));
                        r = 1;
                        cb.label = 4;
                    case 4:
                        return [2, r]
                }
            })
        })
    }

    function Je() {
        if (Ia() || Xd("srcss") || Xd("srxcss"))
            if (Ia() || !Nb.dT_.iMD() || Xd("srmrc")) Ti = tj.initialize(), Nb.dT_.addE("CSS_TRANSMISSION_STARTED", Oe)
    }

    function $c() {
        return 1 === ia().css || Ia() ? kc().then(function(e) {
            if (e) throw Error("Capturing discarded as limits reached");
            return Ee.size()
        }).then(function(e) {
            if (!e) throw Error("Store is empty");
            return Ge()
        }) : Vb.reject(Error("Capture discarded as ActiveGate is not accepting resource beacons"))
    }

    function kc() {
        if (Ia()) return Vb.resolve(!1);
        var e = Ti.Vi(),
            h = e.Lj;
        e = e.Aj;
        var m = Nb.dT_.ncv("srmcrv"),
            r = Nb.dT_.ncv("srmcrl");
        return e >= r ? Vb.resolve(!0) : h.then(function(A) {
            return A >= m
        })
    }

    function Ge() {
        var e;
        return Ee.$i().then(function(h) {
            e = h[Math.floor(Math.random() * h.length)];
            return Ee.Qh(e.hash)
        }).then(function(h) {
            if (!h) throw Error("Resource not known");
            Cg(e.url)
        }).catch(function() {
            return bf(e)
        })
    }

    function bf(e) {
        var h;
        return id(e.url, e.hash, tc(e.body)).then(function(m) {
            h = m;
            if (1 !== h) throw Error("Resource has not been sent");
            return Ee.qj(e.hash)
        }).then(function() {
            return Ti.Vj()
        }).then(function() {
            Cg(e.url)
        }).catch(function() {
            h = h || 0; - 1 === h ? Cg(e.url) : (Ui[e.hash] = void 0 !== Ui[e.hash] ? Ui[e.hash] + 1 : 0, 3 <= Ui[e.hash] ? Cg(e.url) : Lf())
        })
    }

    function Lf() {
        Ee.size().then(function(e) {
            if (!e) throw Error("No resources to queue");
            Nb.dT_.st($c, 0)
        }).catch(function() {})
    }

    function Cg(e) {
        Ee.Jj(e).then(function() {
            Lf()
        }).catch(function() {})
    }

    function Oe() {
        $c().catch(function() {})
    }

    function Kf(e) {
        if (!Lb) return Vb.reject(Error("Resource Capturing not initialized"));
        if (!e.url) return Vb.reject(Error("The resource doesn't have href"));
        var h = e.url;
        if (B(h, qc)) return Vb.reject(Error("The url ".concat(h, " is blacklisted")));
        var m, r;
        return Ee.Zi(h).then(function(A) {
            if (!A) throw Error("resource not found");
            return A.hash
        }).catch(function() {
            return Ee.jj(h).then(function(A) {
                if (A) throw Error("The resource is unreachable");
                return Oa(e)
            }).then(function(A) {
                if ("" ===
                    A.trim()) throw Error("The resource is empty");
                m = A;
                return yb(tc(A))
            }).then(function(A) {
                r = A;
                return Ee.Qh(r)
            }).then(function(A) {
                if (A) return r;
                Zf(h, m, r);
                return r
            })
        })
    }

    function Zf(e, h, m) {
        var r, A = (r = {}, r[og] = "".concat(ah).concat(e), r.body = h, r.url = e, r.hash = m, r.visitId = Nb.dT_.gVI(), r);
        Ee.vi(A).catch(function() {})
    }

    function kh(e) {
        if (!e.url) return Vb.resolve([]);
        var h = [],
            m = e.url;
        return Kf(e).then(function(r) {
            var A = N(e.ownerNode) ? new mf({
                type: "addNode",
                nodeName: "rc.link",
                ja: Ab(e.ownerNode)
            }) : void 0;
            if (void 0 ===
                A) return [];
            var R = A.J;
            r = ce(R, r, m);
            h.push.apply(h, X([A], r, !1));
            return ze(e, R)
        }).then(function(r) {
            h.push.apply(h, r);
            return h
        })
    }

    function ze(e, h) {
        var m, r = [];
        return dd(e).then(function(A) {
            return A.length ? Nb.dT_.red(A, function(R, Aa) {
                var ba = Jh(Aa.href, e.url + "");
                if (!Aa.styleSheet) return R;
                var Pa = Ed(Aa.styleSheet);
                Pa.url = ba;
                return R.then(function() {
                    return Kf(Pa)
                }).then(function(cb) {
                    var Mb = new mf({
                        type: "addNode",
                        nodeName: "rc.import",
                        ja: h,
                        ma: m
                    });
                    cb = ce(Mb.J, cb, ba);
                    r.push.apply(r, X([Mb], cb, !1));
                    m = Mb.J;
                    return ze(Pa,
                        m)
                }).then(function(cb) {
                    cb && r.push.apply(r, cb)
                }).catch(function() {})
            }, Vb.resolve()).then(function() {
                return r
            }) : []
        })
    }

    function ce(e, h, m) {
        h = new mf({
            type: "updateAttribute",
            J: e,
            attributeName: "hash",
            Sa: h
        });
        e = new mf({
            type: "updateAttribute",
            J: e,
            attributeName: "url",
            Sa: m
        });
        return [h, e]
    }

    function Dg(e) {
        var h = e.url,
            m = e.ownerNode;
        return h ? m ? Re("visit", "".concat(Si).concat(h)).then(function(r) {
            if (!ee(r, Si) || !r.metadata.length) throw Error("Metadata mutations not found");
            var A = r.metadata,
                R = r.metadata[0],
                Aa = Ab(m);
            R =
                na({}, R);
            R.parentId && R.parentId !== Aa && (R.parentId = Aa);
            A[0] = R;
            A = r.metadata;
            Aa = new Map;
            for (r = 0; r < A.length; r++) R = A[r], R.nodeId && Aa.set(R.nodeId, mf.Lh());
            r = [];
            for (R = 0; R < A.length; R++) {
                var ba = na({}, A[R]);
                ba.previousId && Aa.has(ba.previousId) && (ba.previousId = Aa.get(ba.previousId));
                ba.parentId && Aa.has(ba.parentId) && (ba.parentId = Aa.get(ba.parentId));
                ba.nodeId && Aa.has(ba.nodeId) && (ba.nodeId = Aa.get(ba.nodeId));
                r.push(ba)
            }
            A = [];
            for (Aa = 0; Aa < r.length; Aa++) R = r[Aa], A.push(new mf({
                type: R.type,
                ja: R.parentId,
                ma: R.previousId,
                pa: R.nextId,
                J: R.nodeId,
                namespaceURI: R.namespaceURI,
                nodeName: R.nodeName,
                attributeName: R.attributeName,
                Sa: R.attributeValue
            }));
            return A
        }).catch(function() {
            return kh(e).then(function(r) {
                var A = {};
                A[og] = "".concat(Si).concat(h);
                A.visitId = rc("gVI")();
                A.url = h;
                for (var R = [], Aa = 0; Aa < r.length; Aa++) {
                    var ba = r[Aa];
                    R.push({
                        type: ba.type,
                        parentId: ba.ja,
                        previousId: ba.ma,
                        nextId: ba.pa,
                        nodeId: ba.J,
                        namespaceURI: ba.namespaceURI,
                        nodeName: ba.nodeName,
                        attributeName: ba.attributeName,
                        attributeValue: ba.Sa
                    })
                }
                A = (A.metadata = R, A);
                vf("visit", A);
                return r
            })
        }) : Vb.reject(Error("css discarded for capturing since it is not attached into the document")) : Vb.reject(Error("css discarded for capturing since it has not href"))
    }

    function xe(e) {
        e = Ed(e);
        var h = Ic(e);
        return h && !Xd("srcss") ? Vb.reject(Error("Resource capturing for css same origin resources is not enabled")) : h || Xd("srxcss") ? Dg(e).then(function(m) {
            ad(ve.ng(m, Jc()))
        }) : Vb.reject(Error("Resource capturing for css cross origin resources is not enabled"))
    }

    function rf(e, h, m, r) {
        var A = {
            pa: null,
            ja: null,
            ma: null,
            J: Ab(h)
        };
        if ("addNode" === e || "updateNode" === e) h.parentStyleSheet && (e = h.parentStyleSheet.ownerNode, A.ja = e ? rb(e) : rb(h.parentStyleSheet)), A.ma = m ? rb(m) : null, A.pa = r ? rb(r) : null;
        return A
    }

    function cg(e, h) {
        ld(e, function(m, r) {
            m = new Zb(Ca(m) ? "updateNode" : "addNode", m, r);
            h.add(m)
        })
    }

    function me(e) {
        void 0 === e && (e = new WeakMap);
        Vi = e
    }

    function Ac() {
        Vi || me();
        return Vi
    }

    function Kd(e, h) {
        var m;
        if (fa(e, 16))
            if (e.ownerNode && ra(e.ownerNode)) xe(e).catch(function() {});
            else try {
                if (e.cssRules.length) {
                    var r =
                        new ve(Jc()),
                        A = Jc();
                    cg(e.cssRules, r);
                    Af((m = {}, m.i = Oc, m.t = Jc() - A, m.d = [
                        ["nodes", r.size]
                    ], m.a = !0, m));
                    h(r)
                }
            } catch (R) {
                e.ownerNode && (Ac().set(e, h), e.ownerNode.addEventListener("load", Yd.bind(e)))
            }
    }

    function Yd() {
        Sd(Oc);
        var e = new ve(Jc());
        try {
            cg(this.cssRules, e)
        } catch (m) {}
        Ib(Oc, [
            ["nodes", e.size]
        ], !0);
        var h = Ac().get(this);
        h && h(e)
    }

    function Zc() {
        return "ShadowRoot" in jc ? Nb.dT_.bcv("srsdom") : !1
    }

    function He(e) {
        var h;
        return null !== (h = Td.find(function(m) {
            return m.host === e
        })) && void 0 !== h ? h : null
    }

    function ne(e) {
        if (e =
            He(e)) e = Td.indexOf(e), 0 <= e && (e = Td.splice(e, 1)[0]) && e.ld && (Xa(e), Pc(e))
    }

    function Be() {
        var e = [];
        Nb.dT_.fE(Td, function(h) {
            for (var m = h.host; m && m.nodeType !== Node.DOCUMENT_NODE;) m = m.parentNode ? m.parentNode : m.host;
            m ? h.ld || Ec(h) : e.push(h)
        });
        Nb.dT_.fE(e, function(h) {
            ne(h.host)
        })
    }

    function Ld() {
        Nb.dT_.fE(Td, function(e) {
            e.ld && Pc(e)
        })
    }

    function Pe(e, h) {
        var m = !h,
            r = h || new ve(Jc());
        Nb.dT_.fE(e ? [e] : Td, function(A) {
            var R = {
                type: "addNode",
                nodeName: "sdw.o",
                nodeValue: Ab(A.host)
            };
            A.Th && (R.J = A.Th);
            var Aa = R.J ? (Aa = Dh.get(R.J)) ?
                Aa.type === R.type && Aa.nodeName === R.nodeName && Aa.nodeValue === R.nodeValue : !1 : !1;
            Aa || (Aa = new mf(R), A.Th = Aa.J, R.J = Aa.J, r.add(Aa), R.J && Dh.set(R.J, R))
        });
        m && ad(r)
    }

    function $f(e, h) {
        var m = !h,
            r = h || new ve(Jc());
        Nb.dT_.fE(e ? [e] : Td, function(A) {
            var R, Aa = null === (R = A.host.shadowRoot) || void 0 === R ? void 0 : R.adoptedStyleSheets;
            null !== Aa && void 0 !== Aa && Aa.length && (R = Nb.dT_.aM(Aa, function(ba) {
                var Pa = "";
                if (!Ca(ba)) {
                    Pa = Ab(ba);
                    var cb = new nd({
                        type: "addNode",
                        nodeName: "css.create",
                        J: Pa,
                        nodeValue: "{}"
                    });
                    r.add(cb)
                }
                Kd(ba, function(Mb) {
                    Mb.forEach(function(uc) {
                        r.add(uc)
                    })
                });
                return Pa || rb(ba)
            }), A = af.create("updateAttribute", {
                node: A.host,
                Ib: {
                    name: "adoptedStyleSheets",
                    value: JSON.stringify(R)
                }
            }), r.add(A))
        });
        m && ad(r)
    }

    function sf(e) {
        e = Jc() - e.start;
        return 0 > e || 9E5 <= e
    }

    function Kh(e, h) {
        void 0 === h && (h = !1);
        h ? zd.unshift(e) : zd.push(e)
    }

    function Ug(e) {
        for (; 0 !== zd.length && (zd[0].Fa === e || sf(zd[0]));) e = zd[0].Fa, zd.shift();
        return e
    }

    function tf(e, h) {
        if ("number" !== typeof e || Number.isNaN(e) || 0 > e) throw new Ag("Invalid beacon param [".concat(h, "=").concat(e, "]"));
        return "".concat(Math.floor(e))
    }

    function Fg(e, h, m) {
        return pa(this, void 0, void 0, function() {
            var r, A, R, Aa, ba, Pa, cb, Mb, uc, Ye, Hd, we;
            return S(this, function(qg) {
                switch (qg.label) {
                    case 0:
                        R = m.start;
                        Aa = m.end;
                        ba = m.vc;
                        var Qd = Aa,
                            jd = ba,
                            yd = tf(R, "start");
                        Qd = tf(Qd, "end");
                        if (yd > Qd) throw new Ag("Invalid beacon param [startTime=".concat(yd, "] > [endTime=").concat(Qd, "]"));
                        jd = tf(jd, "sequenceNumber");
                        yd = "".concat("srBm" === e ? 1 : 3, ",").concat(Jc(), ",").concat(yd, ",").concat(Qd);
                        "srBm" === e ? (yd = tc("".concat(yd, ",").concat(jd, ",")), jd = new Uint8Array(yd.length +
                            h.length), jd.set(yd, 0), jd.set(h, yd.length), yd = jd.buffer, jd = la(jd)) : (yd = "".concat(yd, ",").concat(jd, ",").concat(h), jd = la(yd));
                        r = yd;
                        A = jd;
                        Pa = "srBm" === e;
                        Mb = Nb.dT_.cB();
                        Xe().ar(Mb, r);
                        Xe().av(Mb, "vi", Qj);
                        Nb.dT_.sB(Mb, !1, Pa, (we = {}, we.contentType = e, we.crc = A, we));
                        qg.label = 1;
                    case 1:
                        return qg.H.push([1, 3, , 4]), [4, pl(Mb)];
                    case 2:
                        return cb = qg.B(), [3, 4];
                    case 3:
                        return uc = qg.B(), [2, Vb.reject({
                            code: "Network Error",
                            message: uc + ""
                        })];
                    case 4:
                        return "string" !== typeof cb ? [2, Vb.reject({
                                code: "Network Error",
                                message: cb.toString()
                            })] :
                            cb.startsWith("FL") ? (Hd = (Ye = cb.match(/\((.+?)\)/)) && Ye[1] ? Ye[1] : "no message", [2, Vb.reject({
                                code: "Cluster Rejection",
                                message: Hd
                            })]) : cb.startsWith("OK") ? [2, Vb.resolve()] : [2, Vb.reject({
                                code: "Unknown Error",
                                message: cb
                            })]
                }
            })
        })
    }

    function oe(e) {
        return new Vb(function(h) {
            setTimeout(h, e)
        })
    }

    function Mf() {
        return pa(this, void 0, void 0, function() {
            var e;
            return S(this, function(h) {
                switch (h.label) {
                    case 0:
                        return e = fc.Fa + "", $e("rst", [
                            ["expir", e]
                        ]), [4, Bh(!1)];
                    case 1:
                        return h.B(), Ug(e), [4, Ak(!0)];
                    case 2:
                        return h.B(), [2]
                }
            })
        })
    }

    function Eg(e, h, m) {
        $e(e, [
            ["fl", m.substring(0, 50)],
            ["ctype", h]
        ])
    }

    function uf(e) {
        void 0 === e && (e = 0);
        return pa(this, void 0, void 0, function() {
            var h, m, r, A, R, Aa, ba, Pa;
            return S(this, function(cb) {
                switch (cb.label) {
                    case 0:
                        if (Ne || rc("id")()) return [2];
                        h = Ug();
                        if (h === fc.Fa) return [2, Mf()];
                        if (0 === zd.length) return [2];
                        Ne = !0;
                        return [4, oe(Math.min(6E4, 2E3 * e))];
                    case 1:
                        cb.B();
                        m = zd[0];
                        if (!m) return Ne = !1, [2];
                        r = m.type;
                        A = m.data;
                        R = m.start;
                        Aa = m.end;
                        ba = m.vc;
                        cb.label = 2;
                    case 2:
                        return cb.H.push([2, 4, , 5]), [4, Fg(r, A, {
                            start: R,
                            end: Aa,
                            vc: ba
                        })];
                    case 3:
                        return cb.B(), cb = zd.indexOf(m), -1 !== cb && zd.splice(cb, 1), Ne = !1, uf(), [3, 5];
                    case 4:
                        Pa = cb.B();
                        Ne = !1;
                        if ("Invalid Params" === Pa.code) return Eg("paramErr", r, Pa.message), [2];
                        if ("Cluster Rejection" === Pa.code) return Eg("stop", r, Pa.message), Ug(fc.Fa + ""), [2];
                        "Unknown Error" === Pa.code && 0 === e && Eg("netErr", r, Pa.message);
                        uf(e + 1);
                        return [3, 5];
                    case 5:
                        return [2]
                }
            })
        })
    }

    function dg(e, h, m) {
        Kh({
            type: e,
            data: h,
            start: m.start,
            end: m.end,
            vc: m.vc,
            Fa: fc.Fa + ""
        });
        uf()
    }

    function Vg() {
        return pa(this, void 0, void 0, function() {
            return S(this,
                function(e) {
                    switch (e.label) {
                        case 0:
                            return "active" !== fc.state ? [3, 3] : [4, Ke()];
                        case 1:
                            return e.B(), [4, Od()];
                        case 2:
                            return e.B(), [3, 4];
                        case 3:
                            vi = !0, ge(), e.label = 4;
                        case 4:
                            return [2]
                    }
                })
        })
    }

    function ge() {
        void 0 !== Hh && (rh(Hh), Hh = void 0)
    }

    function Rd(e) {
        return Math.max(Math.round(e), 0)
    }

    function g(e) {
        void 0 === e && (e = window.location.href);
        return !B(e, Wi)
    }

    function q() {
        Yh = Yh || Vb.resolve();
        Yh = Yh.then(function() {
            return pa(this, void 0, void 0, function() {
                return S(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Ke({
                                ef: !1
                            })];
                        case 1:
                            e.B();
                            if (!g()) return [3, 3];
                            uf();
                            return [4, Od()];
                        case 2:
                            return e.B(), [3, 4];
                        case 3:
                            ph("view", {
                                url: document.location.href,
                                Ed: !1,
                                mc: T(),
                                Ad: !0,
                                ra: null
                            }), e.label = 4;
                        case 4:
                            return [2]
                    }
                })
            })
        })
    }

    function E(e) {
        var h, m;
        return function() {
            for (var r = [], A = 0; A < arguments.length; A++) r[A] = arguments[A];
            h = r;
            m || (m = requestAnimationFrame(function() {
                void 0 !== m && cancelAnimationFrame(m);
                m = void 0;
                return e.apply(void 0, h)
            }))
        }
    }

    function C(e, h) {
        var m;
        return function() {
            for (var r = [], A = 0; A < arguments.length; A++) r[A] = arguments[A];
            void 0 ===
                m && (e.apply(void 0, r), m = Rh(function() {
                    m = void 0
                }, h))
        }
    }

    function W(e, h, m) {
        m = void 0 === m ? {} : m;
        var r = m.Ff,
            A = void 0 === r ? !1 : r;
        m = m.Jf;
        var R = void 0 === m ? !0 : m,
            Aa;
        return function() {
            for (var ba = [], Pa = 0; Pa < arguments.length; Pa++) ba[Pa] = arguments[Pa];
            void 0 !== Aa && rh(Aa);
            void 0 === Aa && A && (ba.push({
                Ff: A
            }), e.apply(void 0, ba));
            Aa = Rh(function() {
                Aa = void 0;
                R && (ba.push({
                    Jf: R
                }), e.apply(void 0, ba))
            }, h)
        }
    }

    function M(e) {
        return e === document ? {
            ra: rb(document.documentElement),
            target: document.scrollingElement || document.documentElement
        } : {
            ra: rb(e),
            target: e
        }
    }

    function pb(e) {
        if (!Ma(e.target)) return Vb.resolve(null);
        var h = M(e.target);
        e = h.ra;
        h = h.target;
        return N(h) ? Vb.resolve(gc(e, h)) : Vb.resolve(null)
    }

    function Ub() {
        var e = M(document),
            h = e.ra;
        e = e.target;
        N(e) && fd(gc(h, e)).catch(function() {})
    }

    function gc(e, h) {
        return new Ve("scroll", {
            ra: e,
            top: Rd(h.scrollTop),
            left: Rd(h.scrollLeft)
        })
    }

    function Sc(e) {
        return !Ma(e.target) || Ni.xh(e.target) ? Vb.resolve(null) : Vb.resolve(new Ve("click", {
            ra: rb(e.target),
            x: Rd(e.clientX),
            y: Rd(e.clientY)
        }))
    }

    function Ae(e, h,
        m) {
        try {
            return {
                error: void 0,
                value: e.apply(h, m)
            }
        } catch (r) {
            return {
                value: void 0,
                error: r
            }
        }
    }

    function Nf(e, h, m, r) {
        function A() {
            for (var Pa = [], cb = 0; cb < arguments.length; cb++) Pa[cb] = arguments[cb];
            cb = !wi;
            var Mb = wi;
            wi = !0;
            var uc = Ae(r, null, [this, Pa]);
            Mb = Ae(Mb ? Aa : ba, this, Pa);
            cb && Ae(m, null, [this, Pa, uc.error ? [] : uc.value, Mb.error ? void 0 : Mb.value]);
            wi = !1;
            if (Mb.error) throw Mb.error;
            return Mb.value
        }
        void 0 === m && (m = Ga);
        void 0 === r && (r = function() {
            return []
        });
        if (!Nb.dT_.oHOP(e, h) || "function" !== typeof e[h]) return Ga;
        var R = Object.getOwnPropertyDescriptor(e,
            h);
        if (!R) return Ga;
        var Aa = R.value || (R.get ? R.get() : void 0),
            ba = Aa;
        if ("function" !== typeof Aa || !R.configurable) return Ga;
        Object.defineProperty(e, h, {
            configurable: R.configurable,
            enumerable: !!R.enumerable,
            get: function() {
                return A
            },
            set: function(Pa) {
                ba = Pa
            }
        });
        return function() {
            var Pa = Object.getOwnPropertyDescriptor(e, h);
            Pa && Pa.configurable && (Pa.value || (Pa.get ? Pa.get() : void 0)) === A && Object.defineProperty(e, h, {
                configurable: Pa.configurable,
                enumerable: !!Pa.enumerable,
                writable: !0,
                value: ba
            })
        }
    }

    function eg(e, h, m, r) {
        Ih &&
            Ca(e.ownerNode || e) && (e = new ve(Jc()), h = new Zb(h, m, r), e.add(h), Ih(e))
    }

    function mh(e, h, m, r) {
        "string" === typeof h[0] && "number" === typeof r && eg(e, "addNode", e.cssRules[r], r)
    }

    function fg(e, h) {
        var m = h[0],
            r = h[1];
        h = h[2];
        void 0 === h && (h = e.cssRules.length - 1);
        "string" === typeof m && "string" === typeof r && "number" === typeof h && eg(e, "addNode", e.cssRules[h], h)
    }

    function df(e, h, m) {
        Pf(e, (void 0 === h ? [] : h)[0], m && m[0])
    }

    function Of(e, h, m) {
        h = h[0];
        Pf(e, void 0 === h ? 0 : h, m && m[0])
    }

    function Pf(e, h, m) {
        fa(m, 15) && "number" === typeof h && eg(e,
            "removeNode", m)
    }

    function ef(e, h) {
        void 0 === h && (h = []);
        return [e.cssRules[h[0] || 0]]
    }

    function Qf(e, h, m, r) {
        return pa(this, void 0, void 0, function() {
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        return Ca(e.ownerNode || e) ? [4, r] : [2];
                    case 1:
                        return A.B(), Ih && Kd(e, Ih), [2]
                }
            })
        })
    }

    function wf(e) {
        if (Ca(e.ownerNode || e)) {
            var h = Ra(e.cssRules);
            h.reverse();
            ld(h, function(m) {
                eg(e, "removeNode", m)
            })
        }
        return []
    }

    function Mh() {
        for (; 0 < Th.length;) {
            var e = Th.pop();
            e && e()
        }
        Ih = void 0;
        ld(document.getElementsByTagName("style"), function(h) {
            var m =
                h.sheet;
            m && (h.removeEventListener("load", Yd), Ac().delete(m))
        })
    }

    function Wg(e) {
        return !Ma(e.target) || Ni.xh(e.target) ? Vb.resolve(null) : Vb.resolve(new Ve("move", {
            ra: rb(e.target),
            x: Rd(e.clientX),
            y: Rd(e.clientY)
        }))
    }

    function ff() {
        var e = document.documentElement;
        var h = document.body;
        e = {
            width: Rd(window.innerWidth || e.clientWidth || h.clientWidth),
            height: Rd(window.innerHeight || e.clientHeight || h.clientHeight)
        };
        if (e.height === gi.height && e.width === gi.width) return Vb.resolve(void 0);
        gi = e;
        return Vb.resolve(new Ve("resize",
            na(na({}, e), {
                ra: null
            })))
    }

    function Se(e, h) {
        if (e || !gi) gi = {
            width: 0,
            height: 0
        };
        ff().then(function(m) {
            m && h(m)
        }).catch(function(m) {
            ec(m.message)
        });
        uj = Yb(window, "resize", ff, {
            Ka: h,
            Hd: E
        })
    }

    function wd(e, h, m, r, A) {
        m = "" + (A ? e.time - m : e.time - r - m);
        m += " ";
        r = "";
        switch (e.type) {
            case "view":
                A = "";
                h ? A = Zd(e.url, h.url) : e.url && (A = e.url);
                e.mc && e.mc !== e.Fa && (A = A + " " + e.mc);
                e.Ad && (A += " x");
                r += A;
                break;
            case "click":
            case "move":
                e = Zd(e.ra, h ? h.ra : void 0) + " " + Zd(e.x, h ? h.x : void 0) + " " + Zd(e.y, h ? h.y : void 0);
                r += e;
                break;
            case "resize":
                e = Zd(e.width,
                    h ? h.width : void 0) + " " + Zd(e.height, h ? h.height : void 0);
                r += e;
                break;
            case "scroll":
                e = Zd(e.ra, h ? h.ra : void 0) + " " + Zd(e.top, h ? h.top : void 0) + " " + Zd(e.left, h ? h.left : void 0);
                r += e;
                break;
            case "input":
                A = Zd(e.ra, h ? h.ra : void 0), A = A + " " + Zd(e.duration, h ? h.duration : void 0), A = A + " " + encodeURIComponent(Zd(e.name, h ? h.name : void 0)), "" !== e.value && (A = A + " " + encodeURIComponent(Zd(e.value, h ? h.value : void 0))), r += A
        }
        return m + r
    }

    function xd(e, h) {
        e = Te(e);
        var m = [],
            r = "";
        gf(e, function(A, R, Aa, ba) {
            r += R + "^";
            gf(A, function(Pa, cb, Mb, uc) {
                if (cb in
                    hi) {
                    var Ye = hi[cb];
                    r += Ye + " ";
                    var Hd = Pa[0].time - h,
                        we;
                    Pa.sort(hf);
                    ld(Pa, function(qg, Qd) {
                        var jd = 0 === Qd;
                        Qd = Qd === Pa.length - 1;
                        var yd = wd(qg, we, h, Hd, jd);
                        r.length + yd.length > De("msl") && (yd = 0 + (Mb && jd ? (R + "").length : 0), yd = yd + (Mb && jd ? 1 : 0) + (jd ? 1 : 0), yd += jd ? (Ye + "").length : 0, m.push(r.slice(0, -(yd + 1))), r = "", r += R + "^", r += hi[cb] + " ", Hd = qg.time - h, yd = wd(qg, void 0, h, Hd, !0));
                        r += yd;
                        r += Qd ? "" : ">";
                        we = qg
                    });
                    r += uc ? "" : "^"
                }
            });
            r += ba ? "" : "|"
        });
        m.push(r);
        return m
    }

    function gf(e, h) {
        var m = 0;
        e.forEach(function(r, A) {
            var R = 0 === m,
                Aa = ++m === e.size;
            h(r, A, R, Aa)
        })
    }

    function Te(e) {
        var h = new Map;
        ld(e, function(m) {
            if (null !== m.type) {
                if (!(m.type in hi)) return ec("Event Serializer: Unrecognized event type");
                var r = m.Fa + "";
                h.has(r) || h.set(r, new Map);
                if (r = h.get(r)) {
                    var A = m.type + "";
                    r.has(A) || r.set(A, []);
                    (r = r.get(A)) && r.push(m)
                }
            }
        });
        return h
    }

    function hf(e, h) {
        return e.time - h.time
    }

    function Zd(e, h) {
        return void 0 !== e ? e !== h ? e : "~" : ""
    }

    function nh() {
        return pa(this, void 0, void 0, function() {
            var e;
            return S(this, function(h) {
                switch (h.label) {
                    case 0:
                        return e = {
                            maxSignalLength: De("msl"),
                            transmissionDelay: De("srtd"),
                            isEdgeOrIe: void 0 !== document.documentMode || void 0 !== jc.MSInputMethodContext
                        }, [4, Bb("collectorConfig", e)];
                    case 1:
                        return h.B(), [2]
                }
            })
        })
    }

    function gg() {
        return pa(this, void 0, void 0, function() {
            var e;
            return S(this, function(h) {
                switch (h.label) {
                    case 0:
                        return [4, Bb("collect", Jc())];
                    case 1:
                        return (e = h.B()) ? [2, Nb.dT_.aM(e, function(m) {
                            var r = m.data,
                                A;
                            null === r ? A = new Uint8Array(0) : "string" === typeof r ? A = tc(r) : A = new Uint8Array(r);
                            return {
                                data: A,
                                start: m.from,
                                end: m.to
                            }
                        })] : [2, []]
                }
            })
        })
    }

    function hg() {
        aj("beaconRetry");
        var e = ng(ii);
        e && (Nb.dT_.fE(e.split(","), function(h) {
            if (h) {
                var m = h.split("."),
                    r = m[0],
                    A = m[1],
                    R = m[2];
                m = ng("".concat( of ).concat(h));
                if (r === Tc() && m) {
                    var Aa = m.split(".", 3);
                    r = Aa[0];
                    var ba = Aa[2];
                    m = m.split("".concat(ba, "."))[1];
                    ba = Nb.dT_.aM([Aa[1], ba, R], function(Pa) {
                        return parseInt(Pa)
                    });
                    R = ba[0];
                    Aa = ba[1];
                    ba = ba[2];
                    switch (r) {
                        case "srBm":
                            m = new Uint8Array(Nb.dT_.aM(m.split(","), function(Pa) {
                                return parseInt(Pa)
                            }));
                            break;
                        case "srTe":
                            break;
                        default:
                            aj("".concat( of ).concat(h));
                            return
                    }
                    Kh({
                        type: r,
                        start: R,
                        end: Aa,
                        Fa: A,
                        vc: ba,
                        data: m
                    }, !0)
                }
                aj("".concat( of ).concat(h))
            }
        }), aj(ii), uf())
    }

    function oh() {
        return pa(this, void 0, void 0, function() {
            var e;
            return S(this, function(h) {
                switch (h.label) {
                    case 0:
                        return [4, gg()];
                    case 1:
                        return e = h.B(), ig(e), $d(), [2]
                }
            })
        })
    }

    function ig(e) {
        e && e.length && Nb.dT_.fE(e, function(h) {
            h.data && h.data.length && (dg("srBm", h.data, {
                start: h.start,
                end: h.end,
                vc: Uf.Ab
            }), Uf.Ab++)
        })
    }

    function $d() {
        te && 0 < te.size && (Nb.dT_.fE(te.Ha(), function(e) {
            dg("srTe", e, {
                start: te.start,
                end: te.end,
                vc: Uf.rg
            });
            Uf.rg++
        }), sh(!1));
        te = new Ai
    }

    function Od() {
        return pa(this, void 0, void 0, function() {
            var e;
            return S(this, function(h) {
                switch (h.label) {
                    case 0:
                        if (!fc.Mf || !g() || !fc.enabled) return [2];
                        e = Jc() + "";
                        te = new Ai;
                        te.add(new Ve("view", {
                            ra: null,
                            url: document.location.href,
                            Ed: !1,
                            mc: T()
                        }, e));
                        tb("viewId", function() {
                            Uf.Ab = 1;
                            Uf.rg = 1
                        });
                        Nb.dT_.bcv("srfirrbv") && Bb("reset");
                        return [4, oe(1)];
                    case 1:
                        return h.B(), fc.Fa = e, G(), qb(), me(), Tg = new WeakMap, jg(!0), zi = De("srvi") || 0, 0 !== zi && void 0 === Hh && (vi = !1, Hh = Rh(Vg, 6E4 * Math.max(zi, $i))), [2]
                }
            })
        })
    }

    function Hg(e, h) {
        void 0 ===
            h && (h = []);
        if (e.size || h.length) ed(e), Nb.dT_.fE(h, function(m) {
            Kd(m, ed)
        })
    }

    function jg(e) {
        void 0 === e && (e = !1);
        if (!ae && fc.enabled && g()) {
            te && 0 !== te.size || (te = new Ai);
            try {
                hg()
            } catch (h) {}
            gb(function(h) {
                te.add(h)
            });
            K(Hg);
            Nd(Hg);
            "function" === typeof ed && (Ih = ed, 0 === Th.length && Th.push(Nf(CSSStyleSheet.prototype, "insertRule", mh), Nf(CSSStyleSheet.prototype, "addRule", fg), Nf(CSSStyleSheet.prototype, "removeRule", Of, ef), Nf(CSSStyleSheet.prototype, "deleteRule", df, ef), Nf(CSSStyleSheet.prototype, "replace", Qf, wf), Nf(CSSStyleSheet.prototype,
                "replaceSync", Qf, wf)));
            Xi = Yb(document, "click", Sc, {
                Ka: fd
            });
            dk = Yb(document, "mousemove", Wg, {
                Ka: fd,
                Hd: E
            });
            bb() || Se(e, fd);
            Hj = Yb(document, "scroll", pb, {
                Ka: fd,
                Hd: E,
                Lf: !0
            });
            Ub();
            Dc(fd);
            Zc() && (Be(), Pe());
            bb() || (nf = fh(oh, 1E3));
            fc.state = "active";
            ae = !0
        }
    }

    function Ke(e) {
        e = (void 0 === e ? {} : e).ef;
        var h = void 0 === e ? !0 : e;
        return pa(this, void 0, void 0, function() {
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        return ge(), [4, kg({
                            ef: h
                        })];
                    case 1:
                        return m.B(), qb(), "stopped" === fc.state ? [2] : [4, Bb("reset")];
                    case 2:
                        return m.B(),
                            fc.state = "stopped", [2]
                }
            })
        })
    }

    function Xg() {
        ae && $a()
    }

    function kg(e) {
        e = void 0 === e ? {} : e;
        var h = e.ah,
            m = void 0 === h ? !0 : h;
        e = e.ef;
        var r = void 0 === e ? !0 : e;
        return pa(this, void 0, void 0, function() {
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        if (!ae) return [2];
                        if (A = document.doctype ? (new XMLSerializer).serializeToString(document.doctype) : null) A = {
                            type: "addNode",
                            nodeName: "doc.doctype",
                            nodeValue: A,
                            ja: rb(document.documentElement)
                        }, A = new mf(A), ad(ve.ng([A], Nb.dT_.nw()));
                        yk(nf);
                        nf = void 0;
                        A = document.documentElement;
                        var R = {
                            ah: m
                        };
                        R = (void 0 === R ? {} : R).ah;
                        sg && ((void 0 === R || R) && $a(), sg.disconnect(), qh && qh.disconnect(), qd(A), Zc() && Nb.dT_.fE(Td, Xa), fe(), sg = Tf = null);
                        Mh();
                        Ob(document, "click", Xi);
                        Ob(document, "mousemove", dk);
                        bb() || Ob(window, "resize", uj);
                        Ob(document, "scroll", Hj);
                        Ob(document, "focus blur", Le);
                        Zc() && Ld();
                        fc.state = "paused";
                        ae = !1;
                        return bb() || !r ? [3, 2] : [4, oh()];
                    case 1:
                        A.B(), A.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }

    function ph(e, h) {
        if (ae) te.add(new Ve(e, h));
        else {
            var m = Jc() + "";
            te = new Ai;
            te.add(new Ve(e, h, m))
        }
        $d()
    }

    function Ue(e) {
        return pa(this,
            void 0, void 0,
            function() {
                var h;
                return S(this, function(m) {
                    switch (m.label) {
                        case 0:
                            return [4, Ea("detectSubframeViewIdsChange", e)];
                        case 1:
                            return h = m.B(), [2, Ce(h)]
                    }
                })
            })
    }

    function Nh(e) {
        return pa(this, void 0, void 0, function() {
            var h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        return J() !== e ? [2, !0] : [4, Ea("detectSubframeViewIdsChange", e)];
                    case 1:
                        return h = m.B(), [2, Ce(h)]
                }
            })
        })
    }

    function Ce(e) {
        return e && e.length ? e.some(function(h) {
            return h
        }) : !1
    }

    function lg() {
        var e = H();
        e ? fc.enabled = "enabled" === e : (fc.enabled =
            hc.Pb("srad"), fc.enabled ? Na("enabled") : Gf("optin"))
    }

    function xf(e) {
        return pa(this, void 0, void 0, function() {
            var h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        h = e;
                        switch (h) {
                            case "active":
                                return [3, 1];
                            case "paused":
                                return [3, 2];
                            case "stopped":
                                return [3, 4];
                            case "ended":
                                return [3, 4]
                        }
                        return [3, 6];
                    case 1:
                        return m = fc.Fa + "", J() !== m && G(), jg(), [3, 7];
                    case 2:
                        return [4, kg()];
                    case 3:
                        return m.B(), [3, 7];
                    case 4:
                        return [4, kg({
                            ah: !1
                        })];
                    case 5:
                        return m.B(), qb(), [3, 7];
                    case 6:
                        ec("Invalid record state", {
                                state: e
                            }), m.label =
                            7;
                    case 7:
                        return [2]
                }
            })
        })
    }

    function qe(e) {
        return pa(this, void 0, void 0, function() {
            var h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        return fc.Mf = e, "ended" !== fc.state && fc.enabled ? e && "stopped" === fc.state ? [4, Od()] : [3, 2] : [2];
                    case 1:
                        return m.B(), [2];
                    case 2:
                        return e && J() !== fc.Fa ? [4, Ke()] : [3, 5];
                    case 3:
                        return m.B(), [4, Od()];
                    case 4:
                        return m.B(), [2];
                    case 5:
                        return e ? vi ? [4, Ke()] : [3, 8] : [3, 14];
                    case 6:
                        return m.B(), [4, Od()];
                    case 7:
                        return m.B(), [3, 13];
                    case 8:
                        return [4, Ue(J())];
                    case 9:
                        return (h = m.B()) ? [4, Ke()] : [3,
                            12
                        ];
                    case 10:
                        return m.B(), [4, Od()];
                    case 11:
                        return m.B(), [3, 13];
                    case 12:
                        jg(), m.label = 13;
                    case 13:
                        return [3, 16];
                    case 14:
                        return [4, kg()];
                    case 15:
                        m.B(), m.label = 16;
                    case 16:
                        return [2]
                }
            })
        })
    }

    function Ig(e) {
        return pa(this, void 0, void 0, function() {
            var h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        return h = fc.state, "stopped" === h || "ended" === h ? [3, 2] : [4, Ke()];
                    case 1:
                        m.B(), m.label = 2;
                    case 2:
                        return "active" === h && e ? [4, Od()] : [3, 4];
                    case 3:
                        m.B(), m.label = 4;
                    case 4:
                        return e || (fc.state = "ended", hc.ui(function A() {
                            return pa(this,
                                void 0, void 0,
                                function() {
                                    return S(this, function(R) {
                                        switch (R.label) {
                                            case 0:
                                                hc.Gj(A);
                                                if (!fc.enabled || "ended" !== fc.state) return [2];
                                                fc.state = "stopped";
                                                return fc.Mf ? [4, Od()] : [3, 2];
                                            case 1:
                                                R.B(), R.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    })
                                })
                        })), [2]
                }
            })
        })
    }

    function yf() {
        return pa(this, void 0, void 0, function() {
            return S(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, new Vb(function(h, m) {
                            var r = Nb.dT_.st(function() {
                                m(Error("TIMEOUT initializing worker in ui thread"))
                            }, 5E3);
                            Gb("workerLoaded", function() {
                                Nb.dT_.ct(r);
                                h()
                            });
                            Hf.hc(self,
                                new wg({
                                    I: "worker",
                                    query: "initialize"
                                }), {
                                    origin: location.href
                                })
                        })];
                    case 1:
                        return e.B(), [2]
                }
            })
        })
    }

    function Yg() {
        return pa(this, void 0, void 0, function() {
            var e, h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        e = location.origin, h = setInterval(function() {
                            Hf.hc(self, new wg({
                                I: "worker",
                                query: "source-req"
                            }), {
                                origin: e
                            })
                        }, 100), m.label = 1;
                    case 1:
                        return m.H.push([1, , 3, 4]), [4, new Vb(function(r, A) {
                            var R = Nb.dT_.st(function() {
                                    A(Error("TIMEOUT getting worker source"));
                                    Hf.Gd(self, Aa)
                                }, 5E3),
                                Aa = Hf.Fd(self, function(ba,
                                    Pa, cb) {
                                    "worker" === ba.I && "source" === ba.query && ba.result && (Nb.dT_.ct(R), cb(), Pa.origin === e ? r(ba.result + "") : A(Error("Received message from wrong origin")))
                                })
                        })];
                    case 2:
                        return [2, m.B()];
                    case 3:
                        return clearInterval(h), [7];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function jf(e) {
        var h = hc.Ii(e, void 0);
        return h ? Vb.race([new Vb(function(m, r) {
            h.onmessage = function() {
                m(h)
            };
            h.onerror = function(A) {
                r(Error(A.message))
            }
        }), new Vb(function(m, r) {
            Nb.dT_.st(function() {
                r(Error("TIMEOUT loading worker as a thread"))
            }, 5E3)
        })]) : Vb.reject("failed to load worker as thread")
    }

    function oi() {
        return pa(this, void 0, void 0, function() {
            var e, h, m;
            return S(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, Yg()];
                    case 1:
                        return e = r.B(), h = hc.Sj(e, "text/javascript"), [4, jf(h)];
                    case 2:
                        return m = r.B(), Hf.hc(self, new wg({
                            I: "worker",
                            query: "initialized"
                        }), {
                            origin: location.href
                        }), [2, m]
                }
            })
        })
    }

    function Oh() {
        return pa(this, void 0, void 0, function() {
            var e, h, m, r, A, R, Aa;
            return S(this, function(ba) {
                switch (ba.label) {
                    case 0:
                        e = hc.Wi("D", void 0);
                        h = [];
                        if (!hc.Df("D") || !hc.Pb("srbw")) return [3, 4];
                        ba.label = 1;
                    case 1:
                        return ba.H.push([1, 3, , 4]), [4, oi()];
                    case 2:
                        return (m = ba.B()) || h.push("loadWorkerAsBlob returned void"), [2, {
                            xf: m,
                            Le: h
                        }];
                    case 3:
                        return r = ba.B(), h.push("loadWorkerAsBlob failed: ".concat(r.message)), [3, 4];
                    case 4:
                        if (re(e)) return [3, 8];
                        ba.label = 5;
                    case 5:
                        return ba.H.push([5, 7, , 8]), [4, jf(e)];
                    case 6:
                        return (m = ba.B()) || h.push("loadWorkerAsThread returned void"), [2, {
                            xf: m,
                            Le: h
                        }];
                    case 7:
                        return A = ba.B(), h.push("loadWorkerAsThread failed: ".concat(A.message)), [3, 8];
                    case 8:
                        if (hc.Df("D")) return h.push("worker injected, return void"), [2, {
                            xf: void 0,
                            Le: h
                        }];
                        ba.label = 9;
                    case 9:
                        return ba.H.push([9, 11, , 12]), [4, ql(e, {
                            async: !0
                        })];
                    case 10:
                        return ba.B(), [3, 12];
                    case 11:
                        return R = ba.B(), h.push("injectScript failed: ".concat(R.message)), [3, 12];
                    case 12:
                        if (!hc.Pb("srbw")) return [3, 16];
                        ba.label = 13;
                    case 13:
                        return ba.H.push([13, 15, , 16]), [4, oi()];
                    case 14:
                        return (m = ba.B()) || h.push("loadWorkerAsBlob-2 returned void"), [2, {
                            xf: m,
                            Le: h
                        }];
                    case 15:
                        return Aa = ba.B(), h.push("loadWorkerAsBlob-2 failed: ".concat(Aa.message)), [3, 16];
                    case 16:
                        return [2, {
                            xf: void 0,
                            Le: h
                        }]
                }
            })
        })
    }

    function Zg() {
        if (document.hasFocus()) return null;
        La.pending && (La.pending.resolve(null), La.pending = null);
        return Ff ? Ff = !1 : null
    }

    function Ph(e, h) {
        e = void 0 === h ? {
            Ff: !0,
            Jf: void 0
        } : h;
        h = e.Jf;
        return e.Ff && !Ff ? Ff = !0 : h && Ff ? Ff = !1 : null
    }

    function Lh(e) {
        return "visible" === document.visibilityState ? La(e) : Zg()
    }

    function bm() {
        hh(!0)
    }

    function fl(e) {
        Yb(document, Cf.join(" "), function(h) {
            return h
        }, {
            Ka: e,
            Hd: function(h) {
                return C(h, 1E3)
            }
        });
        Gb("interaction", e)
    }

    function wk(e) {
        document.hasFocus() && (Ff = !0, e(Ff));
        Yb(document, "mouseenter",
            La, {
                Ka: e
            });
        Yb(document, "mouseleave", Zg, {
            Ka: e
        });
        Yb(document, "visibilitychange", Lh, {
            Ka: e
        });
        Yb(window, "focus", La, {
            Ka: e
        });
        Yb(window, "blur", Zg, {
            Ka: e
        });
        Yb(document, Cf.join(" "), Ph, {
            Ka: e,
            Hd: function(h) {
                return W(h, 1E4, {
                    Ff: !0,
                    Jf: !0
                })
            }
        });
        Gb("interaction", bm)
    }

    function vk(e) {
        return Wa("visit").then(function(h) {
            Nb.dT_.fE(h, function(m) {
                m.visitId !== e && bg("visit", m.key)
            })
        })
    }

    function hl() {
        return jc.indexedDB ? lh().then(function() {
            var e, h = (e = {}, e[og] = "v", e.value = 1, e);
            ag("global", h);
            vk(Nb.dT_.gVI())
        }) : Vb.reject(Error("Indexeddb not supported in the browser"))
    }

    function il() {
        hl().catch(function() {});
        Mg = new Map
    }

    function gl() {
        var e;
        if (Zc()) {
            var h = null === (e = Object.getOwnPropertyDescriptor(ShadowRoot.prototype, "adoptedStyleSheets")) || void 0 === e ? void 0 : e.set;
            if (h) {
                Object.defineProperty(ShadowRoot.prototype, "adoptedStyleSheets", {
                    set: function() {
                        for (var r = [], A = 0; A < arguments.length; A++) r[A] = arguments[A];
                        h.apply(this, r);
                        "active" === fc.state && (r = He(this.host)) && $f(r)
                    }
                });
                var m = Element.prototype.attachShadow;
                Element.prototype.attachShadow = function() {
                    for (var r = [], A = 0; A <
                        arguments.length; A++) r[A] = arguments[A];
                    r = m.apply(this, r);
                    var R = this;
                    setTimeout(function() {
                        Nd(Hg, R)
                    }, 600);
                    return r
                }
            }
        }
    }

    function jl() {
        yh.initialize();
        Gb("iframebootstrap", function(e, h) {
            e = h[0];
            h = h[1];
            var m = "active" === fc.state;
            Qg({
                Kj: !0,
                Sh: [
                    ["iframe", "boot"]
                ]
            });
            var r = Ra(document.getElementsByTagName("iframe"));
            dc();
            for (var A = 0; A < r.length; A++) {
                var R = r[A];
                if (R.contentWindow) {
                    var Aa = xg.get(R.contentWindow);
                    Aa && Vj.set(Aa, R)
                }
            }
            if (r = Vj.get(this)) try {
                if (r.getAttribute("src") !== e) {
                    var ba = af.create("updateAttribute", {
                        node: r,
                        Ib: {
                            name: "src",
                            value: e
                        }
                    });
                    if (ba)
                        if (m) {
                            var Pa = new ve(h, hc.Pb("srficros"));
                            Pa.add(ba);
                            ed(Pa)
                        } else yh.add(ba);
                    else r.setAttribute("data-dt-last-src", e)
                }
            } catch (cb) {}
        })
    }

    function Xh() {
        return pa(this, void 0, void 0, function() {
            var e, h, m, r, A, R, Aa, ba, Pa;
            return S(this, function(cb) {
                switch (cb.label) {
                    case 0:
                        return m = [], [4, ic()];
                    case 1:
                        return r = cb.B(), A = r.Cf, R = r.Bf, A ? [4, Sa()] : (h = ["initializeBridge failed: ".concat(R)], $e("boot", X([
                            ["worker", "0"],
                            ["srwo", "1"]
                        ], gh(h), !0)), [2, !1]);
                    case 2:
                        return cb.B(), bb() ? [3, 4] : [4, Oh()];
                    case 3:
                        return Pa = cb.B(), e = Pa.xf, h = Pa.Le, [3, 5];
                    case 4:
                        h = ["SubFrame Environment detected"], cb.label = 5;
                    case 5:
                        return e ? [4, Pb(e)] : [3, 7];
                    case 6:
                        return cb.B(), [3, 8];
                    case 7:
                        h.push("worker didn't load"), cb.label = 8;
                    case 8:
                        if (!e && !bb() && hc.Pb("srwo")) return Gf("nowk", [
                            ["nowkreason", "nowkui"]
                        ]), $e("boot", X([
                            ["worker", "0"],
                            ["srwo", "0"]
                        ], gh(h), !0)), [2, !1];
                        if (e || bb()) return [3, 12];
                        m.push(["srwo", "1"]);
                        cb.label = 9;
                    case 9:
                        return cb.H.push([9, 11, , 12]), [4, yf()];
                    case 10:
                        return cb.B(), [3, 12];
                    case 11:
                        return Aa =
                            cb.B(), h.push("initialiseWorkerInUiThread failed: ".concat(Aa)), $e("boot", X([
                                ["worker", "0"],
                                ["srwo", "1"],
                                ["initui", "1"]
                            ], gh(h), !0)), Gf("nowk", [
                                ["nowkreason", "flwkui"]
                            ]), [2, !1];
                    case 12:
                        return bb() || (m.push(["srad", hc.Pb("srad") ? "1" : "0"]), $e("boot", m)), [4, wb()];
                    case 13:
                        cb.B();
                        il();
                        ba = hc.Cd("srms");
                        Wf = new Sf(ba);
                        zb();
                        zk();
                        Kb();
                        Fd(function(Mb, uc, Ye, Hd) {
                            fc.ai && fc.enabled && Mb.av(Hd, "sr", 1)
                        });
                        try {
                            qc = w(hc.Cd("srre")), Ee.initialize(), Je(), Lb = !0
                        } catch (Mb) {
                            Lb = !1
                        }
                        Ei();
                        return [2, !0]
                }
            })
        })
    }

    function gh(e) {
        return Nb.dT_.aM(e,
            function(h, m) {
                return ["msg_".concat(m), h]
            })
    }

    function zk() {
        Gb("detectSubframe", function(e, h) {
            e = U();
            var m = e.postfix === h.postfix,
                r = e.version === h.version;
            return (!(e.ac || h.ac) || e.app === h.app) && m && r
        });
        Gb("mutations", function(e, h) {
            return pa(this, void 0, void 0, function() {
                var m;
                return S(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return (m = ve.decode(h)) ? [4, ed(m, {
                                context: e
                            })] : [2];
                        case 1:
                            return r.B(), [2]
                    }
                })
            })
        });
        Gb("events", function(e, h) {
            return pa(this, void 0, void 0, function() {
                var m;
                return S(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return (m =
                                Ve.decode(h)) ? [4, fd(m, {
                                context: e
                            })] : [2];
                        case 1:
                            return r.B(), [2]
                    }
                })
            })
        });
        Gb("sendResource", function(e, h, m, r) {
            return id(h, m, r)
        });
        Gb("SHA-256", function(e, h) {
            return xb(h)
        });
        Gb("detectSubframeViewIdsChange", function(e, h) {
            return Nh(h)
        })
    }

    function Di() {
        return pa(this, void 0, void 0, function() {
            return S(this, function(e) {
                switch (e.label) {
                    case 0:
                        return lg(), [4, nh()];
                    case 1:
                        return e.B(), Nb.dT_.aNVL(function(h, m, r, A) {
                            Qg({
                                Sh: [
                                    ["visit", A || ""]
                                ]
                            });
                            ih = !1;
                            return Ig(m)
                        }), rc("ael")(window, "beforeunload", function() {
                            for (; 0 !==
                                zd.length;) {
                                var h = zd.shift();
                                if (!h) break;
                                var m = h.Fa,
                                    r = h.type,
                                    A = h.data,
                                    R = h.start,
                                    Aa = h.end;
                                h = h.vc;
                                m = "".concat(Tc(), ".").concat(m, ".").concat(h);
                                h = ng(ii);
                                if (!hd(ii, h ? "".concat(h, ",").concat(m) : m, !1)) break;
                                if (!hd("".concat( of ).concat(m), "".concat(r, ".").concat(R, ".").concat(Aa, ".").concat(A), !1)) break
                            }
                            Qg()
                        }), Pj() ? [3, 3] : [4, ll()];
                    case 2:
                        e.B(), e.label = 3;
                    case 3:
                        return wk(hh), [2]
                }
            })
        })
    }

    function Qg(e) {
        var h = void 0 === e ? {} : e;
        e = h.Kj;
        e = void 0 === e ? !1 : e;
        h = h.Sh;
        h = void 0 === h ? [] : h;
        (!e && !ih || e && !Yi) && Gf("idle", h)
    }

    function hh(e) {
        ih = !0;
        Yi = e;
        return qe(e)
    }

    function Ei() {
        Nb.dT_.st(function() {
            ("active" === fc.state || "paused" === fc.state) && (Xd("srcss") || Xd("srxcss") || Ia()) && Nb.dT_.disE({
                kind: "CSS_TRANSMISSION_STARTED",
                detail: void 0
            });
            Ei()
        }, 5E3)
    }

    function kl() {
        return pa(this, void 0, void 0, function() {
            return S(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, Xh()];
                    case 1:
                        if (!e.B()) return [2];
                        gl();
                        bb() || jl();
                        if (!bb()) return [3, 3];
                        fl(function() {
                            return F("interaction")
                        });
                        return [4, xf(fc.state)];
                    case 2:
                        return e.B(), tb("state", xf), kf(window, "beforeunload",
                            Xg), [2];
                    case 3:
                        return [4, oe(0)];
                    case 4:
                        return e.B(), Pj() ? [4, ll()] : [3, 6];
                    case 5:
                        return e.B(), [3, 8];
                    case 6:
                        return [4, Di()];
                    case 7:
                        e.B(), e.label = 8;
                    case 8:
                        return [2]
                }
            })
        })
    }

    function ll() {
        return pa(this, void 0, void 0, function() {
            return S(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, new Vb(function(h) {
                            Fi(function(m) {
                                m();
                                h()
                            })
                        })];
                    case 1:
                        return e.B(), [2]
                }
            })
        })
    }

    function ml(e, h) {
        void 0 === e && (e = !1);
        void 0 === h && (h = !1);
        return pa(this, void 0, void 0, function() {
            var m, r;
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        return (m =
                            void 0 !== ji) ? [4, ji] : [3, 2];
                    case 1:
                        m = A.B(), A.label = 2;
                    case 2:
                        if (m) return [2, !0];
                        r = e || "enabled" === H();
                        ji = function() {
                            return pa(this, void 0, void 0, function() {
                                var R, Aa, ba, Pa, cb;
                                return S(this, function(Mb) {
                                    switch (Mb.label) {
                                        case 0:
                                            return R = Jc(), void 0 !== ji ? [3, 2] : [4, kl()];
                                        case 1:
                                            Mb.B(), Mb.label = 2;
                                        case 2:
                                            if (bb()) return Aa = window.location.href, F("iframebootstrap", [Aa, R]), Gb("iframeLocation", function() {
                                                return window.location.href
                                            }), [2, !0];
                                            e && $e("conf", [
                                                ["iCC", "1"]
                                            ]);
                                            ba = hc.Df("Q");
                                            Pa = dm();
                                            cb = r || Pa.Zh;
                                            return ba &&
                                                cb ? [3, 4] : [4, Bh(!1)];
                                        case 3:
                                            return Mb.B(), $e("conf", [
                                                ["module", ba ? "1" : "0"],
                                                ["excluded", cb ? "0" : "1"],
                                                ["srsr", Pa.lh ? "".concat(Pa.lh) : "unknown"],
                                                ["vsn", Pa.fi ? "".concat(Pa.fi) : "unknown"],
                                                ["appid", Pa.appId || "unknown"]
                                            ]), cb || Gf("sout"), [2, !1];
                                        case 4:
                                            return Pj() ? [4, Di()] : [3, 6];
                                        case 5:
                                            Mb.B(), Mb.label = 6;
                                        case 6:
                                            if (h) return [3, 8];
                                            tb("viewRules", function(uc) {
                                                Wi = w(uc);
                                                q()
                                            });
                                            Nb.dT_.addE("VIEW_STABLE", q);
                                            Wi = w(fc.Xj + "");
                                            return g() ? [3, 8] : [4, Ke({
                                                ef: !1
                                            })];
                                        case 7:
                                            Mb.B(), ph("view", {
                                                ra: null,
                                                url: document.location.href,
                                                Ed: !1,
                                                mc: T(),
                                                Ad: !0
                                            }), Mb.label = 8;
                                        case 8:
                                            return fc.ai = !0, Fi(function() {
                                                return pa(this, void 0, void 0, function() {
                                                    return S(this, function(uc) {
                                                        switch (uc.label) {
                                                            case 0:
                                                                if (!fc.enabled || hc.Df("Q")) return [2];
                                                                $e("confupd", [
                                                                    ["module", "0"]
                                                                ]);
                                                                return [4, Bh(!1)];
                                                            case 1:
                                                                return uc.B(), [2]
                                                        }
                                                    })
                                                })
                                            }), [2, !0]
                                    }
                                })
                            })
                        }();
                        return [2, ji]
                }
            })
        })
    }

    function Ak(e, h) {
        void 0 === e && (e = !1);
        void 0 === h && (h = !1);
        return pa(this, void 0, void 0, function() {
            var m;
            return S(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, ml(e, h)];
                    case 1:
                        m = r.B();
                        if (!m || fc.enabled ||
                            "ended" === fc.state) return [2];
                        fc.enabled = !0;
                        Na("enabled");
                        return "stopped" === fc.state && fc.Mf ? [4, Od()] : [3, 3];
                    case 2:
                        r.B(), r.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }

    function Bh(e) {
        return pa(this, void 0, void 0, function() {
            var h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        if (!fc.enabled || "ended" === fc.state) return [2];
                        h = e;
                        void 0 === h && (h = 1E3 < Jc() - Dj);
                        fc.enabled = !1;
                        Na("disabled");
                        return "stopped" === fc.state ? [3, 2] : [4, Ke({
                            ef: h
                        })];
                    case 1:
                        m.B(), m.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }

    function kj(e) {
        return bb() ? (console.log("Enable/disable session replay apis should be called on the top frame"), !1) : "srel" === e && "ended" === fc.state ? (console.log('Session was already ended, possibly "dtrum.endSession()" was called previously'), !1) : !0
    }

    function nl() {
        Dj = Jc();
        Ef.srel = function(e, h) {
            void 0 === e && (e = !1);
            void 0 === h && (h = !1);
            if (!kj("srel")) return Vb.resolve();
            $e("optin", [
                ["iCC", e ? "1" : "0"]
            ]);
            return Ak(e, h)
        };
        Ef.srdl = function() {
            if (!kj("srdl")) return Vb.resolve();
            $e("optout");
            fc.enabled && "ended" !== fc.state && Gf("optout");
            return Bh()
        };
        Ef.srrcdm = function() {
            kj("srrcdm") && (Bc("dtsrRCDM", "true"), Je())
        }
    }

    function rc(e) {
        return void 0 !==
            $g[e] ? $g[e] : function() {
                for (var h = [], m = 0; m < arguments.length; m++) h[m] = arguments[m];
                ec("Intercepted call to missing core api ".concat(e), h)
            }
    }

    function cm() {
        xi = !1;
        Jg = new Set;
        We = new Map;
        hc.pi(function(e, h, m) {
            var r = e.id;
            return pa(this, void 0, void 0, function() {
                var A, R, Aa;
                return S(this, function(ba) {
                    switch (ba.label) {
                        case 0:
                            return We.has(r) && (A = We.get(r), R = A[0], Aa = A[1], "success" === h ? R(m) : Aa(m), We.delete(r)), "success" === h ? [3, 3] : "fail" !== h || 429 !== m ? [3, 2] : [4, Bh(!1)];
                        case 1:
                            ba.B(), ba.label = 2;
                        case 2:
                            return [2];
                        case 3:
                            return [4,
                                ol()
                            ];
                        case 4:
                            ba.B();
                            if ("string" !== typeof m) ba = [3, 6];
                            else {
                                var Pa = Oj(m);
                                ba = "disabled" === Pa.parameters.sr;
                                if ("OK" === Pa.status) {
                                    var cb = (Pa = Pa.parameters.error) && ba,
                                        Mb = cb ? "k-err" : null;
                                    cb = cb ? [
                                        ["errmsg", Pa]
                                    ] : null;
                                    ba && "Unexpected content-type request header" === Pa && (Mb = "k-mime", cb = null);
                                    ba = Pa || ba ? Ch(cb, Mb, Pa || (ba ? "disabled in config" : "")) : Vb.resolve()
                                } else Pa.status ? (Mb = Pa.I, Mb = (Pa = Pa.parameters.error) || Mb, cb = null, ba && (Pa && (cb = "k-err"), "Unexpected content-type request header" === Pa && (cb = "k-mime"), Mb.includes("SessionReplayDisabled") &&
                                    (cb = "k-lic")), "Record and Replay disabled" === Pa && (cb = "k-emg"), Mb.includes("minJSAgentVersionForSR") && (cb = "k-min"), ba = Ch("k-err" === cb ? [
                                    ["errmsg", Pa]
                                ] : null, cb, Mb)) : ba = Ch(null, "k-ires");
                                ba = [4, ba]
                            }
                            return ba;
                        case 5:
                            ba.B(), ba.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        })
    }

    function ol() {
        return pa(this, void 0, void 0, function() {
            return S(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, oe(0)];
                    case 1:
                        return e.B(), xi = !0, Jg.forEach(function(h) {
                            h(function() {
                                return Jg.delete(h)
                            })
                        }), [2]
                }
            })
        })
    }

    function Oj(e) {
        var h = e.match(gj);
        if (h) {
            e =
                h[1];
            var m = h[2];
            h = Nb.dT_.red(h[3].split("|"), function(r, A) {
                A = A.split("=");
                r[A[0].toLowerCase()] = A[1];
                return r
            }, {});
            return {
                status: e,
                I: m,
                parameters: h
            }
        }
        return {
            status: "",
            I: "",
            parameters: {}
        }
    }

    function Ch(e, h, m) {
        void 0 === m && (m = "unknown");
        return pa(this, void 0, void 0, function() {
            return S(this, function(r) {
                switch (r.label) {
                    case 0:
                        return fc.enabled && h && Gf(h, e || void 0), [4, Bh(!1)];
                    case 1:
                        return r.B(), $e("stop", [
                            ["kill", m]
                        ]), [2]
                }
            })
        })
    }

    function Fi(e) {
        Jg.add(e);
        xi && e(function() {
            return Jg.delete(e)
        })
    }

    function pl(e) {
        return new Vb(function(h,
            m) {
            We.set(e.id, [h, m])
        })
    }

    function Pj() {
        return hc.Pb("srdinitrec")
    }

    function Bc(e, h, m) {
        void 0 === m && (m = !0);
        hc.Qj(e, h, m)
    }

    function Fc(e, h) {
        void 0 === h && (h = !0);
        return hc.oj(e, h)
    }

    function dm() {
        var e = hc.Oh("srsr"),
            h = hc.Bi(),
            m = hc.Cd("app");
        return e && "number" === typeof h ? {
            appId: m,
            Zh: h % 1E5 <= e,
            lh: e,
            fi: h
        } : {
            appId: m,
            Zh: !1,
            lh: e
        }
    }

    function ql(e, h) {
        h = (void 0 === h ? {} : h).async;
        var m = void 0 === h ? !0 : h;
        return new Vb(function(r, A) {
            hc.fj(e, m, r, A)
        })
    }

    function $e(e, h) {
        void 0 === h && (h = []);
        rc("id")() || hc.Hi("_sr_", X([
            ["type", e]
        ], h, !0), !1, hc.now(), 1)
    }

    function Gf(e, h) {
        void 0 === h && (h = []);
        var m = rc("id")();
        var r = rc("iAEPOO")(),
            A = rc("syn");
        if (!Nb.dT_.bcv("nosr") || !r || A || m) m = !1;
        else {
            m = Qj;
            r = (ng(cj) || "").split("|");
            A = r[1];
            var R = bj[e] || 0;
            r[0] !== m || (A ? +A : 0) < R ? (hd(cj, m + "|" + R), m = !0) : m = !1
        }
        m && Nb.dT_.cAE("_nosr_", X([
            ["r", e]
        ], h, !0), !1, Nb.dT_.nw(), "idle" === e ? 0 : 1)
    }
    var Vb = this.dT_ && dT_.prm && dT_.prm() || window.Promise,
        Nb = "undefined" !== typeof window ? window : self,
        jc = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        yc =
        jc,
        cd;
    (function(e) {
        e[e.ENABLED = 0] = "ENABLED";
        e[e.DISABLED = 1] = "DISABLED";
        e[e.DELAYED = 2] = "DELAYED"
    })(cd || (cd = {}));
    var Fe;
    (function(e) {
        e[e.BLOCKED_BY_PERCENTAGE = 0] = "BLOCKED_BY_PERCENTAGE";
        e[e.ENABLED = 1] = "ENABLED";
        e[e.BLOCKED = 2] = "BLOCKED"
    })(Fe || (Fe = {}));
    var Wc;
    (function(e) {
        e[e.NONE = 1] = "NONE";
        e[e.OFF = 2] = "OFF";
        e[e.PERFORMANCE = 3] = "PERFORMANCE";
        e[e.BEHAVIOR = 4] = "BEHAVIOR"
    })(Wc || (Wc = {}));
    var cc;
    (function(e) {
        e.OVERLOAD_PREVENTION = "ol";
        e.PRIVACY_STATE = "prv";
        e.SERVER_ID = "srv";
        e.SESSION_ID = "sn"
    })(cc || (cc = {}));
    var zc;
    (function(e) {
        e.DYNATRACE_MOBILE = "dynatraceMobile";
        e.MOBILE_AGENT = "MobileAgent"
    })(zc || (zc = {}));
    var $h;
    (function(e) {
        e[e.ARRAY = 0] = "ARRAY";
        e[e.BOOLEAN = 1] = "BOOLEAN";
        e[e.NUMBER = 2] = "NUMBER";
        e[e.STRING = 3] = "STRING";
        e[e.FUNCTION = 4] = "FUNCTION";
        e[e.OBJECT = 5] = "OBJECT";
        e[e.DATE = 6] = "DATE";
        e[e.ERROR = 7] = "ERROR";
        e[e.ELEMENT = 8] = "ELEMENT";
        e[e.HTML_ELEMENT = 9] = "HTML_ELEMENT";
        e[e.HTML_IMAGE_ELEMENT = 10] = "HTML_IMAGE_ELEMENT";
        e[e.PERFORMANCE_ENTRY = 11] = "PERFORMANCE_ENTRY";
        e[e.PERFORMANCE_TIMING = 12] = "PERFORMANCE_TIMING";
        e[e.PERFORMANCE_RESOURCE_TIMING =
            13] = "PERFORMANCE_RESOURCE_TIMING";
        e[e.PERFORMANCE_NAVIGATION_TIMING = 14] = "PERFORMANCE_NAVIGATION_TIMING";
        e[e.CSS_RULE = 15] = "CSS_RULE";
        e[e.CSS_STYLE_SHEET = 16] = "CSS_STYLE_SHEET";
        e[e.REQUEST = 17] = "REQUEST";
        e[e.RESPONSE = 18] = "RESPONSE";
        e[e.SET = 19] = "SET";
        e[e.MAP = 20] = "MAP";
        e[e.WORKER = 21] = "WORKER";
        e[e.XML_HTTP_REQUEST = 22] = "XML_HTTP_REQUEST";
        e[e.SVG_SCRIPT_ELEMENT = 23] = "SVG_SCRIPT_ELEMENT";
        e[e.HTML_META_ELEMENT = 24] = "HTML_META_ELEMENT";
        e[e.HTML_HEAD_ELEMENT = 25] = "HTML_HEAD_ELEMENT";
        e[e.ARRAY_BUFFER = 26] = "ARRAY_BUFFER";
        e[e.SHADOW_ROOT = 27] = "SHADOW_ROOT"
    })($h || ($h = {}));
    var Dk = function() {
            for (var e, h = [], m = 0; 256 > m; m++) {
                e = m;
                for (var r = 0; 8 > r; r++) e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
                h[m] = e
            }
            return h
        }(),
        Ek;
    (function(e) {
        e.ANCHOR = "A";
        e.BUTTON = "BUTTON";
        e.FORM = "FORM";
        e.I_FRAME = "IFRAME";
        e.IMAGE = "IMG";
        e.INPUT = "INPUT";
        e.LABEL = "LABEL";
        e.LINK = "LINK";
        e.OPTION = "OPTION";
        e.SCRIPT = "SCRIPT";
        e.SELECT = "SELECT";
        e.STYLE = "STYLE";
        e.TEXT_AREA = "TEXTAREA"
    })(Ek || (Ek = {}));
    var Qj = "",
        rl;
    (function(e) {
        e.ADD_NODE = "addNode";
        e.REMOVE_NODE = "removeNode";
        e.UPDATE_ATTRIBUTE =
            "updateAttribute";
        e.UPDATE_NODE = "updateNode";
        e.UPDATE_NODE_VALUE = "updateNodeValue"
    })(rl || (rl = {}));
    var sl;
    (function(e) {
        e.EVENTS = "srTe";
        e.MUTATIONS = "srBm";
        e.RESOURCES = "srRs"
    })(sl || (sl = {}));
    var tl;
    (tl || (tl = {})).SR_IMAGE_NATURAL_DIMENSIONS = "data-dt-natural-dimensions";
    var ul;
    (function(e) {
        e.CSS_STYLESHEET = "css-stylesheet";
        e.MATHML = "http://www.w3.org/1998/Math/MathML";
        e.METADATA = "dynatrace-metadata";
        e.SVG = "http://www.w3.org/2000/svg"
    })(ul || (ul = {}));
    var vl;
    (function(e) {
        e.IMPORT = "rc.import";
        e.LINK = "rc.link"
    })(vl ||
        (vl = {}));
    var wl;
    (function(e) {
        e.OPEN = "sdw.o";
        e.SLOT = "sdw.s"
    })(wl || (wl = {}));
    var xl;
    (xl || (xl = {})).DOCTYPE = "doc.doctype";
    var yl;
    (yl || (yl = {})).IFRAME = "tf.iframe";
    var zl;
    (zl || (zl = {})).CREATE = "css.create";
    var Al;
    (Al || (Al = {})).FAILURE = "rl.fail";
    var Ii, wg = function() {
            function e(h) {
                var m = h.id;
                m = void 0 === m ? void 0 : m;
                var r = h.I,
                    A = h.query;
                h = h.result;
                m ? this.id = m : (e.ve++, this.id = e.ve);
                this.I = r;
                this.query = A;
                this.result = void 0 === h ? void 0 : h
            }
            e.decode = function(h) {
                try {
                    if ("DT UI Worker Bridge" === h.type) {
                        var m = h.payload;
                        return new e({
                            id: m.id,
                            I: m.handler,
                            query: m.query,
                            result: m.result
                        })
                    }
                } catch (r) {}
            };
            e.prototype.rh = function(h) {
                "undefined" === typeof h ? this.result = null : this.result = h
            };
            e.prototype.Ha = function() {
                return {
                    type: "DT UI Worker Bridge",
                    payload: {
                        id: this.id,
                        handler: this.I,
                        query: this.query,
                        result: this.result
                    }
                }
            };
            e.ve = 0;
            return e
        }(),
        Hf = function() {
            function e(h) {
                h ? this.port = h : (h = new MessageChannel, this.port = h.port1, this.eh = h.port2)
            }
            e.ae = function() {
                e.cc || (e.cc = new Map)
            };
            e.Fd = function(h, m) {
                e.ae();
                var r = e.cc.get(h);
                if (r) r.push(m);
                else {
                    var A = [m];
                    e.cc.set(h, A);
                    h.addEventListener("message", function(R) {
                        var Aa = wg.decode(R.data);
                        Aa && A.slice(0).forEach(function(ba) {
                            ba(Aa, R, function() {
                                e.Gd(h, ba)
                            })
                        })
                    })
                }
                return m
            };
            e.Gd = function(h, m) {
                e.ae();
                h = e.cc.get(h) || [];
                h.splice(h.indexOf(m), 1)
            };
            e.hc = function(h, m, r) {
                var A = void 0 === r ? {} : r;
                r = A.origin;
                r = void 0 === r ? "*" : r;
                A = A.transfer;
                A = void 0 === A ? [] : A;
                m = m.Ha();
                ea() || -1 < Object.prototype.toString.call(h).indexOf("Worker") ? h.postMessage(m, A) : h.postMessage(m, r, A)
            };
            e.prototype.Jb = function(h) {
                this.port.onmessage = function(m) {
                    (m =
                        wg.decode(m.data)) && h(m)
                }
            };
            e.prototype.send = function(h, m) {
                void 0 === m && (m = []);
                this.port.postMessage(h.Ha(), m)
            };
            return e
        }(),
        Sj, Bl = 0,
        Uj, Hk, xg, Vj, Ji, pj, Cl = [],
        em = {},
        fm = {},
        gm = {
            srvr: "srvr"
        },
        ci, fc = {
            Fa: {
                initial: "",
                name: "viewId"
            },
            Mf: {
                initial: !1,
                name: "viewActive"
            },
            enabled: {
                initial: !1,
                name: "enabled"
            },
            state: {
                initial: "stopped",
                name: "state"
            },
            ai: {
                initial: !1,
                name: "samplingEvaluated"
            },
            Xj: {
                initial: "",
                name: "viewRules",
                Gi: "srvr"
            }
        },
        Dl = ["css", "font", "image"],
        Ki, di, Rg, Dh, Jk = 0,
        rj, Gl = yc.Node ? [Node.DOCUMENT_NODE, Node.DOCUMENT_FRAGMENT_NODE,
            Node.DOCUMENT_TYPE_NODE, Node.ELEMENT_NODE, Node.TEXT_NODE
        ] : [],
        El = "onabort onactivate onanimationcancel onanimationend onanimationiteration onanimationstart onauxclick onafterprint onbeforeactivate onbeforedeactivate onbeforeprint onbeforeunload onbegin onblur onbounce oncancel oncanplay oncanplaythrough onchange onclick onclose oncontextmenu oncopy oncuechange oncut ondblclick ondeactivate ondrag ondragend ondragenter ondragexit ondragleave ondragover ondragstart ondrop ondurationchange onemptied onend onended onerror onfinish onfocus onfocusin onfocusout onhashchange oninput oninvalid onkeydown onkeypress onkeyup onlanguagechange onload onloadeddata onloadedmetadata onloadend onloadstart onmessage onmessageerror onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onwheel onoffline ononline onpagehide onpageshow onpaste onpause onplay onplaying onpopstate onprogress onratechange onreadystatechange onrepeat onreset onresize onrejectionhandled onscroll onsecuritypolicyviolation onseeked onseeking onselect onstalled onstart onstorage onsubmit onsuspend ontimeupdate ontransitioncancel ontransitionend ontransitionrun ontoggle onunhandledrejection onunload onvolumechange onwaiting".split(" "),
        Hl = ["radio", "checkbox"],
        ei, Li = {
            matchesSelector: function(e, h) {
                return ab(e) ? (e.matches || e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector).call(e, h) : !1
            }
        },
        hm = ["DATALIST", "INPUT", "TEXTAREA", "SELECT", "OPTION"],
        im = ["submit", "button", "reset"],
        jm = "textarea input[type=text] input:not([type]) input[type=password] input[type=hidden] input[type=checkbox] input[type=radio] input[type=date] input[type=month] input[type=week] input[type=datetime-local] input[type=time] input[type=number] input[type=range] input[type=file] input[type=email] input[type=url] input[type=tel] input[type=search] select option".split(" "),
        Vf, Kk, Lk, sj, qf, If, Il = function() {
            function e(h, m) {
                this.Ne = h;
                this.$d = m
            }
            e.prototype.dd = function(h) {
                var m = this;
                return this.$d.some(function(r) {
                    return m.Ne.matchesSelector(h, r.ya())
                })
            };
            e.prototype.wd = function(h) {
                var m = this;
                return this.$d.some(function(r) {
                    return m.Ne.matchesSelector(h, r.ya()) && r.wd()
                })
            };
            return e
        }(),
        km = function() {
            function e(h) {
                this.dg = h
            }
            e.prototype.dd = function(h) {
                return this.dg.some(function(m) {
                    return m.ya().test(h)
                })
            };
            return e
        }(),
        lm = function() {
            function e(h, m, r, A) {
                void 0 === A && (A = new WeakMap);
                this.Zd = h;
                this.cg = m;
                this.za = r;
                this.Yb = A
            }
            e.prototype.Xa = function(h) {
                if (Qa(h) || Qa(h.parentNode)) return 1;
                var m = this.za ? 1 : 2,
                    r = ab(h) && h.hasAttribute("data-dtrum-mask"),
                    A = this.Zd.dd(h);
                r ? m = 10 : A && (m = this.za ? this.ug(h) : 1);
                var R = this.Yb.get(h.parentNode),
                    Aa = r;
                R && (r = this.xg(R, m, r || A), m = r.Sg, Aa = Aa || r.od);
                this.mh(h, m, Aa);
                return m
            };
            e.prototype.Bd = function(h, m) {
                var r = this.za ? 1 : 16;
                return -1 !== ["value", "placeholder", "label"].indexOf(m) ? this.vg(h, m) : this.Ng(m) || !this.Mg(m) ? 1 : this.cg.dd(m) ? this.za ? 16 : 1 : (h = this.Yb.get(h)) ?
                    (r = this.za ? h.Cc : h.zc, 2 === (r & 2) ? 16 : r) : r
            };
            e.prototype.xg = function(h, m, r) {
                var A = !1;
                h.od ? (m = 10, A = !0) : (h = this.za ? h.Cc : h.zc, r || (m = h), this.za && (m |= h));
                return {
                    Sg: m,
                    od: A
                }
            };
            e.prototype.mh = function(h, m, r) {
                r = {
                    od: r
                };
                var A = this.Yb.get(h);
                this.za ? r.Cc = (A && A.Cc) | m : r.zc = (A && A.zc) | m;
                A && (r = na(na({}, A), r));
                this.Yb.set(h, r)
            };
            e.prototype.ug = function(h) {
                var m = 2;
                this.Zd.wd(h) && (m |= 8);
                return m
            };
            e.prototype.Mg = function(h) {
                return /^data(-.*)?$/.test(h)
            };
            e.prototype.Ng = function(h) {
                return /^data-dt-(.+)$/.test(h)
            };
            e.prototype.vg =
                function(h, m) {
                    return vb(h) && "value" === m ? 32 : 2 === (this.Xa(h) & 2) ? 16 : 1
                };
            return e
        }(),
        Jl = function() {
            function e(h) {
                this.value = h
            }
            e.Lg = function(h) {
                return h instanceof e
            };
            e.prototype.ya = function() {
                return this.value
            };
            return e
        }(),
        Nk = function() {
            function e(h) {
                this.Ie = !1;
                h = h.split(e.Kd);
                var m = h[1];
                this.value = h[0];
                this.Ie = "" === m
            }
            e.Og = function(h) {
                return h instanceof e
            };
            e.prototype.ya = function() {
                return this.value
            };
            e.prototype.wd = function() {
                return this.Ie
            };
            e.Kd = "&";
            return e
        }(),
        Ok = function() {
            function e(h) {
                this.Yg = h
            }
            e.create = function(h) {
                return new e(h)
            };
            e.prototype.ya = function() {
                return this.Yg
            };
            return e
        }(),
        ck = function() {
            function e(h) {
                this.$g = h
            }
            e.create = function(h) {
                return new e(h)
            };
            e.prototype.ya = function() {
                return this.$g
            };
            return e
        }(),
        Pk = function() {
            function e(h, m, r) {
                void 0 === h && ck.create(2);
                void 0 === m && (m = Ok.create(0));
                void 0 === r && (r = []);
                this.Xg = m;
                this.rules = r
            }
            e.prototype.Bg = function() {
                return this.rules.filter(Nk.Og)
            };
            e.prototype.yg = function() {
                return this.rules.filter(Jl.Lg)
            };
            e.prototype.addRule = function(h) {
                this.rules.push(h)
            };
            e.prototype.za = function() {
                return 0 === this.Xg.ya()
            };
            return e
        }(),
        zg = function() {
            function e() {}
            e.create = function(h, m) {
                if (!e.validate(m)) throw Error("Invalid masking rule value: " + m + "!");
                switch (h) {
                    case 0:
                        return new Nk(m);
                    case 1:
                        return new Jl(new RegExp(m));
                    default:
                        throw Error("Invalid masking rule type: " + h + "!");
                }
            };
            e.validate = function(h) {
                return h && "" !== h.trim()
            };
            return e
        }(),
        Sf = function() {
            function e(h) {
                var m = this;
                this.ad = [];
                this.Rg = new WeakMap;
                Array.isArray(h) ? h.forEach(function(r) {
                    m.ye(r)
                }) : this.ye(h)
            }
            e.prototype.ye = function(h) {
                var m;
                h = h.split(",");
                2 === Number(h[0]) ? m = {
                    bd: h.slice(0, 4).join(",")
                } : m = {
                    Tg: h.slice(0, 5).join(","),
                    bd: h.slice(5, 9).join(",")
                };
                if (m.bd) {
                    h = m.bd.split(",").map(decodeURIComponent);
                    var r = h[2];
                    m = h[3];
                    h = ck.create(Number(h[1]));
                    r = Ok.create(Number(r));
                    m = od(m ? m.split(";") : []);
                    m = new Pk(h, r, m)
                } else m = Jd(m.Tg);
                m instanceof Pk ? (h = new Il(Li, m.Bg()), r = new km(m.yg()), m = new lm(h, r, m.za(), this.Rg), this.ad.push(m)) : (m = this.cd = m, Kk = new WeakMap, Lk = new WeakMap, sj = new WeakMap, qf = new WeakMap, If =
                    new WeakMap, Vf = m, Ta(Vf.ub, Kk), Ta(Vf.sb, Lk), Ta(Vf.yb, sj))
            };
            e.prototype.Xa = function(h) {
                if (this.cd) return db(h);
                for (var m, r = 0, A = this.ad; r < A.length; r++) {
                    var R = A[r].Xa(h);
                    1 !== R && (m |= R)
                }
                return m || 1
            };
            e.prototype.Bd = function(h, m) {
                if (this.cd) return ob(h, m);
                for (var r, A = 0, R = this.ad; A < R.length; A++) {
                    var Aa = R[A].Bd(h, m);
                    1 !== Aa && (r |= Aa)
                }
                return r || 1
            };
            return e
        }(),
        Cb = ["button", "datalist", "select", "option"],
        Fb = "button checkbox radio date month week datetime-local time number range".split(" "),
        Ni = {
            yh: function(e) {
                return 2 ===
                    (Wf.Xa(e) & 2)
            },
            Oj: function(e) {
                return 4 === (Wf.Xa(e) & 4)
            },
            Nj: function(e) {
                return 2 === (Wf.Xa(e) & 2)
            },
            xh: function(e) {
                var h;
                !(h = 8 === (Wf.Xa(e) & 8)) && (h = 4 === (Wf.Xa(e) & 4)) && (h = (e = e.nodeType === Node.TEXT_NODE ? e.parentNode : e) && "INPUT" === e.nodeName && -1 !== Fb.indexOf(e.type.toLowerCase()), h = -1 !== Cb.indexOf(e.nodeName.toLowerCase()) || h);
                return h
            }
        },
        Wf, Ej = Date.prototype.toJSON,
        Bg = function() {
            function e(h, m) {
                if (!h || !m) throw ec("Invalid parameters for mutation construction", {
                    type: h,
                    Xh: m
                }), Error("Invalid parameters");
                this.type =
                    h;
                this.J = m.J;
                this.nodeName = m.nodeName;
                this.namespaceURI = m.namespaceURI;
                this.nodeValue = m.nodeValue;
                this.attributeName = m.attributeName;
                this.Sa = m.Sa;
                this.ja = m.ja;
                this.ma = m.ma;
                this.pa = m.pa;
                this.ka = m.ka
            }
            e.decode = function(h) {
                try {
                    var m = JSON.parse(h);
                    return new e(m.type, {
                        J: m.nodeId,
                        nodeName: m.nodeName,
                        namespaceURI: m.namespaceURI,
                        nodeValue: m.nodeValue,
                        attributeName: m.attributeName,
                        Sa: m.attributeValue,
                        ja: m.parentId,
                        ma: m.previousId,
                        pa: m.nextId,
                        ka: m.masking
                    })
                } catch (r) {
                    return null
                }
            };
            e.prototype.Ha = function() {
                return Da({
                    type: this.type,
                    nodeId: this.J,
                    nodeName: this.nodeName,
                    namespaceURI: this.namespaceURI,
                    nodeValue: this.nodeValue,
                    attributeName: this.attributeName,
                    attributeValue: this.Sa,
                    parentId: this.ja,
                    previousId: this.ma,
                    nextId: this.pa,
                    masking: this.ka
                })
            };
            e.prototype.Kf = function() {};
            e.Gh = "removeNode";
            e.Nf = "updateNode";
            return e
        }(),
        af = function(e) {
            function h(m, r, A) {
                m = e.call(this, m, r) || this;
                m.node = A;
                return m
            }
            Ha(h, e);
            h.Rh = function(m, r, A) {
                ec("Invalid parameters for mutation construction", {
                    type: m,
                    node: r,
                    Ib: A
                })
            };
            h.create = function(m, r, A) {
                void 0 ===
                    r && (r = {});
                var R = r.node;
                r = r.Ib;
                if (!m || !A && (!Ma(R) || "updateAttribute" === m && !r)) return h.Rh(m, R, r), null;
                var Aa;
                A ? Aa = A : Ma(R) && (Aa = ca(m, R, r));
                return Aa ? new h(m, Aa, R) : (h.Rh(m, R, r), null)
            };
            h.prototype.Kf = function() {
                if (this.node) {
                    var m = I(this.type, this.node);
                    m && (this.J = m.J, this.ja = this.ja || m.ja, this.ma = this.ma || m.ma, this.pa = this.pa || m.pa)
                }
            };
            return h
        }(Bg),
        Df = {
            store: void 0
        },
        yh = {
            initialize: function(e) {
                void 0 === e && (e = new Set);
                Df.store = e
            },
            add: za(function(e) {
                Df.store.add(e)
            }, Df),
            getEntries: za(wa, Df),
            remove: za(function(e) {
                    Df.store.delete(e)
                },
                Df),
            size: za(function() {
                return wa().length
            }, Df)
        },
        mf = function(e) {
            function h(m) {
                var r = m.type,
                    A = m.J;
                A = void 0 === A ? h.Lh() : A;
                m = Fa(m, ["type", "nodeId"]);
                m = na({
                    namespaceURI: "dynatrace-metadata",
                    J: A
                }, m);
                return e.call(this, r, m) || this
            }
            Ha(h, e);
            h.Lh = function() {
                return "".concat(h.dj).concat(++h.id)
            };
            h.id = 0;
            h.dj = "m";
            return h
        }(Bg),
        ve = function(e) {
            function h() {
                return null !== e && e.apply(this, arguments) || this
            }
            Ha(h, e);
            return h
        }(function() {
            function e(h, m) {
                void 0 === m && (m = !1);
                this.time = h;
                this.Ud = m;
                this.set = [];
                this.size = this.set.length
            }
            e.decode = function(h) {
                try {
                    var m = JSON.parse(h);
                    if (m && "Mutation List" === m.type) {
                        var r = m.payload,
                            A = new e(r.time, r.checkIROnSnapshotFlag);
                        h = 0;
                        for (var R = r.entries; h < R.length; h++) {
                            var Aa = Bg.decode(R[h]);
                            Aa && A.add(Aa)
                        }
                        return A
                    }
                } catch (ba) {}
            };
            e.ng = function(h, m) {
                var r;
                void 0 === r && (r = !1);
                var A = new e(m, r);
                h.forEach(function(R) {
                    A.add(R)
                });
                return A
            };
            e.prototype.add = function(h) {
                h instanceof Bg && (this.set.push(h), this.size = this.set.length)
            };
            e.prototype.Jh = function(h) {
                this.set = this.set.filter(function(m) {
                    return m instanceof
                    Bg && !h(m)
                });
                this.size = this.set.length
            };
            e.prototype.forEach = function(h) {
                this.set.forEach(function(m) {
                    return m instanceof Bg && h(m)
                })
            };
            e.prototype.Ha = function() {
                return Da({
                    type: "Mutation List",
                    payload: {
                        checkIROnSnapshotFlag: this.Ud,
                        time: this.time,
                        entries: this.set.map(function(h) {
                            return h.Ha()
                        })
                    }
                })
            };
            return e
        }()),
        ik, jk = "process",
        Tg, Zk = "data-dtmask",
        kk = ["src", "srcset"],
        Aj = Ni,
        Rf, Pg = {
            initialize: function(e) {
                var h;
                a: {
                    if ((h = e.MutationObserver) && "function" === typeof h && Bd(h)) {
                        if (h.prototype) b: {
                            for (var m = {}, r =
                                    h.prototype; r;) {
                                for (var A = 0, R = Object.getOwnPropertyNames(r); A < R.length; A++) {
                                    var Aa = R[A];
                                    try {
                                        var ba = r[Aa];
                                        if ("function" === typeof ba && !Bd(ba)) {
                                            var Pa = void 0;
                                            break b
                                        }
                                        m[Aa] = m[Aa] || ba
                                    } catch (cb) {}
                                }
                                r = r.prototype || r.__proto__
                            }
                            Pa = m
                        }
                        else Pa = {};
                        if (Pa) {
                            h = {
                                Vh: h,
                                prototype: Pa
                            };
                            break a
                        }
                    }
                    h = void 0
                }
                h || (h = e.Zone && e.Zone.__symbol__ && e[e.Zone.__symbol__("MutationObserver")] ? e[e.Zone.__symbol__("MutationObserver")] : void 0);
                Rf = h
            },
            dk: function() {
                return !!Rf
            },
            Xi: function(e) {
                e = Rf ? Rf && "function" === typeof Rf.Vh && "prototype" in Rf ?
                    Dd(Rf, e) : new Rf(e) : void 0;
                return e
            },
            Ci: function() {
                return !!Rf && !!jc.Worker && "undefined" !== typeof jc.Worker
            }
        },
        Tf, sg = null,
        qh, pi = {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        },
        Ve = function() {
            function e(h, m, r, A) {
                void 0 === m && (m = {
                    ra: null
                });
                void 0 === r && (r = fc.Fa);
                void 0 === A && (A = Jc());
                this.type = h;
                this.Fa = r;
                this.time = A;
                this.ra = m.ra;
                this.url = m.url;
                this.Ed = m.Ed;
                this.mc = m.mc;
                this.Ad = m.Ad;
                this.x = m.x;
                this.y = m.y;
                this.width = m.width;
                this.height = m.height;
                this.top = m.top;
                this.left = m.left;
                this.name = m.name;
                this.value =
                    m.value;
                this.duration = m.duration
            }
            e.decode = function(h) {
                try {
                    return new e(h.type || null, {
                        url: h.url,
                        Ed: h.isIframe,
                        mc: h.tabId,
                        ra: h.targetId || null,
                        x: h.x,
                        y: h.y,
                        width: h.width,
                        height: h.height,
                        top: h.top,
                        left: h.left,
                        name: h.name,
                        value: h.value,
                        duration: h.duration,
                        Ad: h.excludedView
                    }, fc.Fa, h.time)
                } catch (m) {
                    return null
                }
            };
            e.prototype.Ri = function() {
                var h;
                void 0 === h && (h = 0);
                return {
                    viewId: this.Fa,
                    time: this.time - h,
                    type: this.type,
                    url: this.url,
                    isIframe: this.Ed,
                    tabId: this.mc,
                    targetId: this.ra,
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this.height,
                    top: this.top,
                    left: this.left,
                    name: this.name,
                    value: this.value,
                    duration: this.duration,
                    excludedView: this.Ad
                }
            };
            return e
        }(),
        Le, Me = Ni,
        nd = function(e) {
            function h(m) {
                var r = m.type,
                    A = m.J;
                m = Fa(m, ["type", "nodeId"]);
                A = na({
                    namespaceURI: "css-stylesheet",
                    J: A
                }, m);
                return e.call(this, r, A) || this
            }
            Ha(h, e);
            return h
        }(Bg),
        ac;
    (ac || (ac = {})).VISIT_ID = "visitId";
    var oc;
    (function(e) {
        e.METADATA = "metadata";
        e.URL = "url"
    })(oc || (oc = {}));
    var mg;
    (function(e) {
        e.BODY = "body";
        e.HASH = "hash";
        e.URL = "url"
    })(mg || (mg = {}));
    var dh;
    (dh || (dh = {})).URL = "url";
    var Lg;
    (Lg || (Lg = {})).COUNTER = "counter";
    var Si = "srrcmm_",
        ah = "srrcir_",
        Bj = "recorder/platform/indexeddb",
        Ze, Mg, Sh;
    (Sh || (Sh = {})).VALUE = "value";
    var zh;
    (function(e) {
        e.HASH = "hash";
        e.TTL = "ttl"
    })(zh || (zh = {}));
    var og = "key",
        tk = 15E3,
        Ij = 0,
        Ee = {
            initialize: function(e) {
                void 0 === e && (e = Nb.dT_.ncv("rcdec"), e = !e || 0 >= e ? 12096E5 : e);
                Ij = e;
                Ee.Hj()
            },
            Jj: function(e) {
                return he("visit", "".concat(ah).concat(e))
            },
            vi: function(e) {
                return vf("visit", e)
            },
            Zi: function(e) {
                return Re("visit", "".concat(ah).concat(e)).then(function(h) {
                    if (ee(h,
                            ah)) return h
                })
            },
            $i: Q,
            size: function() {
                return Q().then(function(e) {
                    return e.length
                }).catch(function() {
                    return 0
                })
            },
            rj: function(e) {
                var h, m = (h = {}, h[og] = "".concat("srrcur_").concat(e), h.visitId = Nb.dT_.gVI(), h.url = e, h);
                vf("visit", m)
            },
            jj: function(e) {
                return Re("visit", "".concat("srrcur_").concat(e)).then(Jf).catch(function() {
                    return !1
                })
            },
            Qh: ja,
            qj: function(e) {
                return ja(e).then(function(h) {
                    var m;
                    h || (h = (m = {}, m[og] = "".concat("srrckr_").concat(e), m.hash = e, m.ttl = Nb.dT_.nw() + Ij, m), vf("global", h))
                })
            },
            Hj: function() {
                return Gg("global").then(function(e) {
                    for (var h =
                            Nb.dT_.nw(), m = [], r = 0; r < e.length; r++) {
                        var A = e[r];
                        ee(A, "srrckr_") && A.ttl < h && m.push(he("global", "".concat("srrckr_").concat(A.hash)))
                    }
                    return Vb.allSettled(m)
                }).catch(function() {})
            }
        },
        bh = 0,
        tj = {
            initialize: function() {
                bh = 0;
                bc().catch(function() {});
                return {
                    Vj: Yc,
                    Vi: Xf,
                    ak: sd
                }
            }
        },
        Ti, Ui = {},
        qc, Lb = !1,
        Zb = function(e) {
            function h(m, r, A, R) {
                void 0 === A && (A = -2);
                if (!h.lj(m, r, A, R)) throw ec("Invalid parameters for mutation construction", {
                    type: m,
                    Hf: r,
                    Xh: R
                }), Error("Invalid parameters");
                var Aa = r && r.parentStyleSheet && r.parentStyleSheet.cssRules[A -
                    1];
                A = r && r.parentStyleSheet && r.parentStyleSheet.cssRules[A + 1];
                if (!R) a: {
                    R = rf(m, r, Aa, A);
                    switch (m) {
                        case "addNode":
                            R.nodeName = "#text";
                            R.nodeValue = u(r);
                            break a;
                        case "updateNode":
                        case "removeNode":
                            break a
                    }
                    R = void 0
                }
                if (!R) throw ec("Invalid parameters for mutation construction", {
                    type: m,
                    Hf: r
                }), Error("Invalid parameters");
                m = e.call(this, m, R) || this;
                m.Hf = r;
                m.Dj = Aa;
                m.wj = A;
                return m
            }
            Ha(h, e);
            h.lj = function(m, r, A, R) {
                return m ? !(!R && (!r || "removeNode" !== m && void 0 === A)) : !1
            };
            h.prototype.Kf = function() {
                if (this.Hf) {
                    var m = rf(this.type,
                        this.Hf, this.Dj, this.wj);
                    this.J = m.J;
                    this.ja = this.ja || m.ja;
                    this.ma = this.ma || m.ma;
                    this.pa = this.pa || m.pa
                }
            };
            return h
        }(Bg),
        Oc = "snapshot",
        Vi, Td = [],
        zd = [],
        dj;
    (function(e) {
        e.CLUSTER_REJECTION = "Cluster Rejection";
        e.INVALID_PARAMS = "Invalid Params";
        e.NETWORK_ERROR = "Network Error";
        e.UNKNOWN_ERROR = "Unknown Error"
    })(dj || (dj = {}));
    var Ag = function(e) {
            function h(m) {
                return e.call(this, m, "Invalid Params") || this
            }
            Ha(h, e);
            return h
        }(function(e) {
            function h(m, r) {
                m = e.call(this, m) || this;
                m.code = r;
                return m
            }
            Ha(h, e);
            return h
        }(Error)),
        Ne = !1,
        $i = 5,
        Wi = [],
        zi = 0,
        Hh, vi = !1,
        Yh, Hj, Xi, wi = !1,
        Th = [],
        Ih, dk, uj, gi, hi = {
            view: "v",
            move: "m",
            click: "c",
            resize: "r",
            scroll: "s",
            input: "i"
        },
        Ai = function() {
            function e() {
                this.start = Jc();
                this.end = Jc();
                this.set = [];
                this.size = this.set.length
            }
            e.prototype.add = function(h) {
                this.end = Jc();
                h.time < this.start && (this.start = h.time);
                this.set.push(h);
                this.size = this.set.length
            };
            e.prototype.forEach = function(h) {
                ld(this.set, h)
            };
            e.prototype.Ha = function() {
                this.end = Jc();
                var h = this.zi();
                this.forEach(h);
                return xd(this.set, this.start)
            };
            e.prototype.zi = function() {
                var h = this;
                return function(m) {
                    return e.ii(h, m)
                }.bind(this)
            };
            e.ii = function(h, m) {
                m.bk = m.time - h.start
            };
            return e
        }(),
        ii = "dyn-sr-retryKeys",
        of = "dyn-sr-retry-",
        te, ae = !1,
        nf, Uf = {
            Ab: 1,
            rg: 1
        },
        Cf = "focus blur resize scroll keydown keyup mousemove mousedown mouseup click touchstart touchend touchmove".split(" "),
        Ff = !1,
        ji, ih = !1,
        Yi = !1,
        Dj;
    var $g = jc.dT_ || {};
    var gj = /(.*)(?:\((.*)\))\|?(.*)/,
        qi;
    (function(e) {
        e.FAIL = "fail";
        e.SUCCESS = "success"
    })(qi || (qi = {}));
    var xi = !1,
        Jg, We, hc = {};
    (function() {
        hc = {
            Ii: rc("ww"),
            fj: rc("iS"),
            Sj: rc("stu"),
            addEventListener: rc("ael"),
            removeEventListener: rc("rel"),
            now: rc("nw"),
            setInterval: rc("si"),
            clearInterval: rc("cI"),
            setTimeout: rc("st"),
            clearTimeout: rc("ct"),
            Rj: rc("svl"),
            pj: rc("lvl"),
            Ij: rc("rvl"),
            gk: rc("sMPS"),
            Oh: rc("ncv"),
            Pb: rc("bcv"),
            Cd: rc("scv"),
            Bi: rc("cVIn"),
            Qj: rc("sv"),
            oj: rc("lv"),
            aj: rc("gVI"),
            Wj: rc("uVT"),
            oi: rc("aBPSL"),
            Ti: rc("gBP"),
            pi: rc("aBPSCC"),
            postError: rc("pe"),
            Yj: rc("wst"),
            Zj: rc("wsp"),
            hk: rc("wtt"),
            Ej: rc("rpm"),
            Df: rc("ism"),
            forEach: rc("fE"),
            ij: rc("icr"),
            ek: rc("las"),
            ck: rc("gBI"),
            Wi: rc("gMu"),
            Hi: rc("cAE"),
            ui: function(e) {
                rc("addE")("ACTION_ENTERED", e)
            },
            Gj: function(e) {
                rc("remE")("ACTION_ENTERED", e)
            },
            ri: rc("addE")
        }
    })();
    var Ef = $g,
        kf = hc.addEventListener,
        zf = hc.removeEventListener,
        Jc = hc.now,
        ld = hc.forEach,
        fh = hc.setInterval,
        yk = hc.clearInterval,
        Rh = hc.setTimeout,
        rh = hc.clearTimeout,
        hd = hc.Rj,
        ng = hc.pj,
        aj = hc.Ij,
        Tc = hc.aj,
        sh = hc.Wj,
        Xd = hc.Pb,
        De = hc.Oh,
        Fd = hc.oi,
        Xe = hc.Ti,
        Sd = hc.Yj,
        Pd = hc.Zj,
        Af = hc.Ej,
        re = hc.ij,
        Kg = hc.ri,
        Gd, th;
    (function(e) {
        e.KILLED_EMERGENCY = "k-emg";
        e.KILLED_ERROR =
            "k-err";
        e.KILLED_INVALID_RESPONSE = "k-ires";
        e.KILLED_MIN_JS_AGENT_VERSION = "k-min";
        e.KILLED_NO_LICENSE = "k-lic";
        e.KILLED_WRONG_CONTENT_TYPE = "k-mime";
        e.MODULE_ABSENT_IN_FEATURE_HASH = "smbi";
        e.NO_ACTIVITY = "idle";
        e.NO_WORKER = "nowk";
        e.OPT_IN_MODE = "optin";
        e.OPTED_OUT_SESSION = "optout";
        e.ROBOT_DETECTED = "bot";
        e.SAMPLED_OUT = "sout";
        e.UNKNOWN = "no";
        e.UNSUPPORTED_BROWSER = "nosup"
    })(th || (th = {}));
    var pg;
    (function(e) {
        e.ERROR_MESSAGE = "errmsg";
        e.IFRAME = "iframe";
        e.NO_WORKER_REASON = "nowkreason";
        e.REASON_KEY = "r";
        e.VISIT_ID =
            "visit"
    })(pg || (pg = {}));
    var zj;
    (function(e) {
        e.CANNOT_RUN_WORKER_IN_UI_THREAD = "nowkui";
        e.FAILED_RUNNING_WORKER_IN_UI_THREAD = "flwkui"
    })(zj || (zj = {}));
    var bj = (Gd = {}, Gd.no = 100, Gd.idle = 200, Gd.optin = 300, Gd.sout = 400, Gd.optout = 500, Gd["k-min"] = 700, Gd["k-lic"] = 800, Gd["k-err"] = 900, Gd["k-ires"] = 950, Gd["k-mime"] = 1E3, Gd["k-emg"] = 1050, Gd.nowk = 1100, Gd.nosup = 1300, Gd.bot = 1400, Gd.smbi = 1500, Gd),
        cj = "dtsrNOSR",
        Cj = function() {
            function e(h) {
                this.window = h
            }
            e.prototype.Qi = function() {
                Pg.initialize(this.window);
                Pg.Ci() ? ($e("init", [
                    ["fh", hc.Cd("featureHash")]
                ]), cm(), nl(), ml()) : $e("noinit", [
                    ["fh", hc.Cd("featureHash")],
                    ["mutobs", "0"]
                ])
            };
            return e
        }();
    jc.dT_ && jc.dT_.initialized && (Qj = Nb.dT_.gVI(), Nb.dT_.aNVL(ma), void 0 === window.WeakMap || void 0 === window.Map ? Gf("nosup") : Nb.dT_.iBt() ? Gf("bot") : Nb.dT_.smbi("Q") ? (Gf("no"), (new Cj(jc)).Qi()) : Gf("smbi"))
})();
(function() {
    function La() {
        La = Object.assign || function(n) {
            for (var v, y = 1, K = arguments.length; y < K; y++) {
                v = arguments[y];
                for (var O in v) Object.prototype.hasOwnProperty.call(v, O) && (n[O] = v[O])
            }
            return n
        };
        return La.apply(this, arguments)
    }

    function gb(n, v, y, K) {
        function O(V) {
            return V instanceof y ? V : new y(function(da) {
                da(V)
            })
        }
        return new(y || (y = od))(function(V, da) {
            function xa(mb) {
                try {
                    Xa(K.next(mb))
                } catch (Tb) {
                    da(Tb)
                }
            }

            function $a(mb) {
                try {
                    Xa(K["throw"](mb))
                } catch (Tb) {
                    da(Tb)
                }
            }

            function Xa(mb) {
                mb.done ? V(mb.value) : O(mb.value).then(xa,
                    $a)
            }
            Xa((K = K.apply(n, v || [])).next())
        })
    }

    function ob(n, v) {
        function y(Xa) {
            return function(mb) {
                return K([Xa, mb])
            }
        }

        function K(Xa) {
            if (V) throw new TypeError("Generator is already executing.");
            for (; $a && ($a = 0, Xa[0] && (O = 0)), O;) try {
                if (V = 1, da && (xa = Xa[0] & 2 ? da["return"] : Xa[0] ? da["throw"] || ((xa = da["return"]) && xa.call(da), 0) : da.next) && !(xa = xa.call(da, Xa[1])).done) return xa;
                if (da = 0, xa) Xa = [Xa[0] & 2, xa.value];
                switch (Xa[0]) {
                    case 0:
                    case 1:
                        xa = Xa;
                        break;
                    case 4:
                        return O.label++, {
                            value: Xa[1],
                            done: !1
                        };
                    case 5:
                        O.label++;
                        da = Xa[1];
                        Xa = [0];
                        continue;
                    case 7:
                        Xa = O.ia.pop();
                        O.H.pop();
                        continue;
                    default:
                        if (!(xa = O.H, xa = 0 < xa.length && xa[xa.length - 1]) && (6 === Xa[0] || 2 === Xa[0])) {
                            O = 0;
                            continue
                        }
                        if (3 === Xa[0] && (!xa || Xa[1] > xa[0] && Xa[1] < xa[3])) O.label = Xa[1];
                        else if (6 === Xa[0] && O.label < xa[1]) O.label = xa[1], xa = Xa;
                        else if (xa && O.label < xa[2]) O.label = xa[2], O.ia.push(Xa);
                        else {
                            xa[2] && O.ia.pop();
                            O.H.pop();
                            continue
                        }
                }
                Xa = v.call(n, O)
            } catch (mb) {
                Xa = [6, mb], da = 0
            } finally {
                V = xa = 0
            }
            if (Xa[0] & 5) throw Xa[1];
            return {
                value: Xa[0] ? Xa[1] : void 0,
                done: !0
            }
        }
        var O = {
                label: 0,
                B: function() {
                    if (xa[0] &
                        1) throw xa[1];
                    return xa[1]
                },
                H: [],
                ia: []
            },
            V, da, xa, $a;
        return $a = {
            next: y(0),
            "throw": y(1),
            "return": y(2)
        }, "function" === typeof Symbol && ($a[Symbol.iterator] = function() {
            return this
        }), $a
    }

    function db(n, v) {
        void 0 === v && (v = []);
        var y = I.dT_;
        y = (null === y || void 0 === y ? 0 : y.iIO) ? y.iIO : null;
        return !(null === y || void 0 === y || !y(n, v))
    }

    function eb(n) {
        return n && "IFRAME" === n.nodeName
    }

    function Ta(n) {
        return n && "IMG" === n.nodeName
    }

    function Ua() {
        return Vd
    }

    function Ya(n, v, y) {
        if (!fd[y]) {
            var K = new Image;
            v = {
                url: y,
                time: ya.dT_.nw(),
                element: K,
                zj: v
            };
            vb(K, v, n);
            K.src = y;
            fd[y] = K
        }
        return fd[y]
    }

    function Va(n, v, y) {
        var K = Rc[v][y] || [];
        if (n.element) {
            var O = ya.dT_.aFI(K, function(V) {
                return V.element === n.element
            });
            0 <= O && K.splice(O, 1)
        }
        Qa(n, v, y)
    }

    function Qa(n, v, y) {
        Rc[v][y] || (Rc[v][y] = []);
        Rc[v][y].push(n)
    }

    function ab(n, v, y) {
        v = Rc[v][y] || [];
        n = v.indexOf(n);
        0 <= n && v.splice(n, 1)
    }

    function vb(n, v, y) {
        function K() {
            ab(v, 2, y);
            Va(v, 1, y);
            var V = K;
            n.removeEventListener("load", O);
            n.removeEventListener("error", V)
        }

        function O() {
            ab(v, 2, y);
            var V = K;
            n.removeEventListener("load",
                O);
            n.removeEventListener("error", V)
        }
        Qa(v, 2, y);
        n.addEventListener("load", O);
        n.addEventListener("error", K)
    }

    function na(n) {
        return Wd && db(n, 13) && "navigation" !== n.entryType || db(n, ["_dtCl"])
    }

    function ta() {}

    function Ha(n) {
        return 0 < n.left + n.width && n.left < S() && 0 < n.top + n.height && n.top < pa()
    }

    function Fa(n) {
        return n && 0 < n.width && 0 < n.height && Ha(n)
    }

    function pa() {
        ud || (ud = I.innerHeight || Cd.clientHeight);
        return ad.bwsH || ud
    }

    function S() {
        Md || (Md = I.innerWidth || Cd.clientWidth);
        return ad.bwsW || Md
    }

    function X(n) {
        var v = S(),
            y = pa();
        return {
            top: 0,
            left: 0,
            width: Math.max(0, Math.min(n.left + n.width, v)) - Math.max(0, Math.min(n.left, v)),
            height: Math.max(0, Math.min(n.top + n.height, y)) - Math.max(0, Math.min(n.top, y))
        }
    }

    function ua(n, v, y) {
        if (!y && la(n)) return !0;
        n = y || U(v);
        (v = "hidden" === n.visibility || "none" === n.display || "0" === n.opacity || "polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)" === n.clipPath) || (v = n.transform || "", n = !1, y = v.indexOf("("), 0 < y && (v = v.substring(y + 1, v.length - 1).split(", "), n = "0" === v[0], 6 === v.length ? n = n || "0" === v[3] : 16 === v.length &&
            (n = n || "0" === v[5] || "0" === v[10])), v = n);
        return v
    }

    function la(n) {
        if (0 < Jb && n.fd >= Jb) return n.gd++, !0;
        n.fd++;
        return !1
    }

    function fa(n) {
        return Math.ceil(n.width * n.height)
    }

    function Ga(n, v, y, K, O, V) {
        var da;
        void 0 === V && (V = "");
        try {
            if (!K && (K = Ma(v, n.Da, O), !Fa(K))) return null;
            O = K;
            var xa = (da = {}, da.url = V, da.time = 0, da.node = v, da.v = !ua(n, v, y), da.area = fa(X(O)), da.offset = {
                    top: O.top,
                    left: O.left,
                    width: O.width,
                    height: O.height
                }, da.is = 0, da),
                $a = ya.dT_.tau(V);
            (n = Da) && n.test($a) && (xa.is = 2);
            return xa
        } catch (Xa) {}
        return null
    }

    function Ma(n,
        v, y) {
        void 0 === v && (v = new WeakMap);
        var K = ya.dT_.gFId();
        var O = v;
        v = O.get(n);
        v || (v = {}, O.set(n, v));
        if (v[K]) K = v[K];
        else {
            O = I.pageYOffset;
            var V = n.clientTop,
                da = I.pageXOffset,
                xa = n.clientLeft,
                $a = 0,
                Xa = 0;
            va(n) && ($a = n.offsetWidth, Xa = n.offsetHeight);
            $a = {
                top: 0,
                left: 0,
                offsetWidth: $a,
                offsetHeight: Xa,
                clientWidth: n.clientWidth,
                clientHeight: n.clientHeight
            };
            if ("function" === typeof n.getBoundingClientRect) try {
                var mb = n.getBoundingClientRect(),
                    Tb = mb.left;
                $a.top = mb.top + O - V;
                $a.left = Tb + da - xa
            } catch (Dc) {}
            K = v[K] = $a
        }
        mb = K.top;
        Tb = K.left;
        y && (mb += y.top, Tb += y.left);
        y = {
            top: mb,
            left: Tb,
            width: K.clientWidth,
            height: K.clientHeight
        };
        va(n) && (y.width = K.offsetWidth, y.height = K.offsetHeight);
        return y
    }

    function qa(n) {
        return n.area > Ba && n.v && 0 === n.is && 0 < n.time
    }

    function ra(n, v) {
        for (var y = 0; y < v.length; y++) {
            var K = v[y],
                O = 0,
                V = K === n ? 2 : 0;
            qa(K) && (V = Math.max(V, 1));
            0 === V && (O = 0, K.v || (O += 1), K.area > Ba || (O += 2), 0 !== K.is && (O += 4));
            K.relevance = V;
            K.ireason = O
        }
    }

    function N(n) {
        if (n.length) return ya.dT_.red(n, function(v, y) {
            return qa(y) && (!v || v.time <= y.time) ? y : v
        }, void 0)
    }

    function Z() {
        var n =
            ya.dT_.bcv,
            v = ya.dT_.scv,
            y = ya.dT_.ncv,
            K = ya.dT_.de(v("iub"));
        try {
            K && (Da = new RegExp(K, "i"))
        } catch (O) {}
        za = n("vcfi");
        Ja = y("vcx");
        wa = y("tvc");
        Ka = v("uana");
        kb = ya.dT_.puesc(v("mb"));
        Ra = y("vcit");
        lb = 1E3 * y("oat");
        Yb = n("fvdi");
        Jb = y("vscl");
        Ba = y("vct");
        Ob = n("ccNcss");
        mc = n("vrt");
        Vc = n("vcsb")
    }

    function D(n) {
        for (var v = 0; v < gd.length; v++)
            if (gd[v] === n) {
                gd.splice(v, 1);
                break
            }
    }

    function P(n, v) {
        void 0 === v && (v = !1);
        for (var y = gd.slice(), K = gd.length = 0; K < y.length; K++)(0, y[K])(n, v)
    }

    function Y(n) {
        return !!n && "about:blank" !== n &&
            n !== location.href && n !== location.href.substring(0, location.href.lastIndexOf("/") + 1) && n !== document.baseURI
    }

    function ma(n) {
        try {
            return !!n.contentWindow && !ya.dT_.gNNTV(n.contentWindow.performance, "loadEventEnd")
        } catch (v) {
            return !1
        }
    }

    function ea(n) {
        return !!n.area
    }

    function U(n, v) {
        void 0 === v && (v = I);
        return v.getComputedStyle(n)
    }

    function va(n) {
        var v = rd.get(n);
        if (v) return v;
        v = (db(n, 9) || n && n.nodeType && 1 === n.nodeType) && ("string" === typeof n.textContent || "string" === typeof n.innerText);
        rd.set(n, v);
        return v
    }

    function Sa() {
        var n =
            ya.dT_.gto();
        return function(v, y) {
            var K = y.duration,
                O = n + y.startTime + K;
            !K && na(y) && (O = n + y.responseEnd);
            return Math.max(v, O)
        }
    }

    function bb(n, v, y) {
        if (n) {
            var K;
            var O = (K = {}, K.time = n.time, K.offset = n.offset, K.area = n.area, K.url = n.url, K.v = n.v, K.node = n.node, K.is = 0, K);
            O.v && (O.v = v);
            y.push(O)
        }
    }

    function Db(n) {
        var v;
        try {
            if (n && n.dT_) {
                var y = n.dT_;
                if (y && "ea" in y) {
                    var K;
                    if (K = "10301241007103824" === y.version && !!y.gLVD) {
                        var O = I.dT_,
                            V = !O.bcv("ac") || O.scv("app") === y.scv("app"),
                            da = O.scv("postfix"),
                            xa = y.scv("postfix");
                        K = V && da ===
                            xa
                    }
                    var $a = K
                } else $a = !1;
                $a && (v = y)
            }
        } catch (Xa) {}
        return v
    }

    function Wb(n, v, y, K, O, V, da) {
        return gb(this, void 0, void 0, function() {
            var xa, $a;
            return ob(this, function(Xa) {
                switch (Xa.label) {
                    case 0:
                        return (xa = Ga(n, v, y, K)) && v.contentWindow ? [4, Kb(n, v.contentWindow, xa.offset, void 0, O)] : [3, 2];
                    case 1:
                        $a = Xa.B(), ya.dT_.fE($a, function(mb) {
                            mb.v = mb.v && V;
                            da.push(mb)
                        }), Xa.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }

    function oa(n, v, y) {
        var K = n.gLVD();
        return K ? (bb(K.k, v, y), od.resolve()) : new od(function(O) {
            n.addE("VISUALLY_COMPLETE", function(V) {
                bb(V.detail.k,
                    v, y);
                O()
            })
        })
    }

    function Eb(n, v, y, K, O, V, da) {
        void 0 === da && (da = !1);
        return new od(function(xa, $a) {
            var Xa = !1,
                mb;
            la(n) || (mb = U(v, y));
            var Tb = mb && mb.backgroundImage;
            if (Tb && "none" !== Tb) {
                var Dc = ya.dT_.aM(Tb.split(","), pc);
                Tb = 0;
                for (Dc = ya.dT_.aFr(Dc, dc); Tb < Dc.length; Tb++) {
                    var Ec = Dc[Tb];
                    (Ec = Ga(n, v, mb, V, K, ya.dT_.tau(Ec))) && O.push(Ec)
                }
            }
            if (eb(v)) {
                var Pc = v.contentWindow;
                Xa = function() {
                    var Ic = mb,
                        Ed = da,
                        pe = Db(Pc),
                        Ie = !ua(n, v) && Ha(V);
                    (pe ? oa(pe, Ie, O) : Wb(n, v, Ic, V, Ed, Ie, O)).then(xa).catch($a)
                };
                !da && ma(v) ? (v.addEventListener("load",
                    Xa), v.addEventListener("error", Xa)) : Xa();
                Xa = !0
            }
            Ta(v) && (Ec = Pb(v)) && (Tb = Ga(n, v, mb, V, K, Ec)) && O.push(Tb);
            Xa || xa()
        })
    }

    function wc(n, v, y, K, O, V) {
        void 0 === V && (V = !1);
        return gb(this, void 0, void 0, function() {
            var da, xa;
            return ob(this, function($a) {
                switch ($a.label) {
                    case 0:
                        return $a.H.push([0, 6, , 7]), da = Ma(v, n.Da), xa = y.getComputedStyle(v), (va(v) ? v.offsetWidth * v.offsetHeight > Ba : v.clientWidth * v.clientHeight > Ba) ? Fa(da) ? [4, Eb(n, v, y, K, O, da, V)] : [3, 2] : [3, 3];
                    case 1:
                        $a.B(), $a.label = 2;
                    case 2:
                        return [3, 5];
                    case 3:
                        return ya.dT_.iIO(v,
                            10) || xa.backgroundImage && "none" !== xa.backgroundImage ? [4, Eb(n, v, y, K, O, da, V)] : [3, 5];
                    case 4:
                        $a.B(), $a.label = 5;
                    case 5:
                        return [3, 7];
                    case 6:
                        return $a.B(), [3, 7];
                    case 7:
                        return [2]
                }
            })
        })
    }

    function Gc(n) {
        return pd ? Rb(1, n).concat(Rb(2, n)) : []
    }

    function hb(n) {
        return function(v) {
            var y = ya.dT_.gto(),
                K = v.time - y;
            y = (v.endTime || v.time) - y;
            return {
                name: v.url,
                failedResource: n,
                startTime: K,
                responseEnd: y,
                duration: y - K,
                _dtCl: !0
            }
        }
    }

    function Rb(n, v) {
        var y = ya.dT_.aM(Rc[n][v] || [], hb(n));
        v ? delete Rc[n][v] : Rc[n] = {};
        return y
    }

    function ec(n) {
        return !n.time
    }

    function Qb(n, v, y) {
        n = n.getEntriesByName(y.url, "resource")[0];
        na(n) ? y.time = Math.round(v + n.responseEnd) : y.time = 0
    }

    function Cc(n, v) {
        var y = null,
            K = 0;
        try {
            y = v.performance, K = ya.dT_.gNTO(y)
        } catch (O) {}
        y && (n = ya.dT_.aFr(n, ec), ya.dT_.fE(n, Qb.bind(null, y, K)))
    }

    function dc(n) {
        return !(!n || !n.startsWith("http"))
    }

    function ic(n, v) {
        return "loading" in HTMLImageElement.prototype && "lazy" === n.getAttribute("loading") && !Ha(Ma(n, v))
    }

    function Pb(n) {
        try {
            if (n.srcset) return n.currentSrc;
            var v = n.parentElement;
            if (v && "PICTURE" === v.nodeName)
                for (var y =
                        0; y < v.children.length; y++)
                    if ("SOURCE" === v.children[y].tagName) return n.currentSrc;
            return n.currentSrc || n.src
        } catch (O) {
            try {
                var K = n.getAttribute("src");
                return K ? ya.dT_.tau(K) : ""
            } catch (V) {
                return ""
            }
        }
    }

    function Kb(n, v, y, K, O) {
        void 0 === O && (O = !1);
        return gb(this, void 0, void 0, function() {
            var V, da;
            return ob(this, function(xa) {
                switch (xa.label) {
                    case 0:
                        V = [];
                        try {
                            da = (K || v.document).getElementsByTagName("*")
                        } catch ($a) {
                            return [2, V]
                        }
                        return [4, ya.dT_.fEP(da, function($a, Xa, mb, Tb) {
                            wc(n, $a, v, y, V, O).then(Tb).catch(ta)
                        }, void 0, !(qd.syn || O))];
                    case 1:
                        return xa.B(), Cc(V, v), [2, V]
                }
            })
        })
    }

    function Gb(n, v, y, K) {
        var O = {
            Sd: [],
            style: void 0
        };
        if (!y && !Ob || la(K)) return O;
        y = U(n);
        if (!y) return O;
        O.style = y;
        (y = y.backgroundImage) && "none" !== y && (y = ya.dT_.aM(y.split(","), pc), y = ya.dT_.aFr(ya.dT_.aFr(y, dc), Y), O.Sd = ya.dT_.aM(y, Ya.bind(null, v, n)));
        return O
    }

    function pc(n) {
        void 0 === n && (n = "");
        Nd.lastIndex = 0;
        return (n = Nd.exec(n)) && 1 < n.length ? n[1] || n[2] || n[3] : ""
    }

    function Bb(n, v, y, K) {
        if (za && !n.dT_vcInstr && !ic(n, K.Da))
            if (Ta(n)) {
                if (y = Pb(n), Y(y) && dc(y)) {
                    y = {
                        url: y,
                        time: ya.dT_.nw(),
                        element: n
                    };
                    n.dT_vcInstr = !0;
                    a: if (n.complete && !n.naturalWidth) {
                        if (ya.dT_.gBI().ff) {
                            var O = K = Pb(n),
                                V = K.indexOf("?");
                            0 <= V && (O = K.substring(0, V));
                            if (O.endsWith(".svg")) {
                                K = "UNKNOWN";
                                break a
                            }
                        }
                        K = "FAILED"
                    } else K = n.complete ? "SUCCESSFUL" : "PENDING";
                    switch (K) {
                        case "FAILED":
                            Va(y, 1, v);
                            break;
                        case "PENDING":
                            vb(n, y, v)
                    }
                }
            } else va(n) && Gb(n, v, y, K)
    }

    function F(n, v, y, K) {
        var O = v.contentWindow;
        if (!O) return od.resolve();
        var V = Db(O),
            da = !ua(n, v) && Ha(K);
        return V ? oa(V, da, n.na) : Kb(n, O, y).then(function(xa) {
            var $a;
            ($a =
                n.na).push.apply($a, ya.dT_.aM(xa, function(Xa) {
                var mb;
                return La(La({}, Xa), (mb = {}, mb.v = Xa.v && da, mb))
            }))
        })
    }

    function ka() {
        P("f", !0);
        return Ud
    }

    function Ea() {
        var n = qd;
        n.gUI = Gc;
        n.vWW = S;
        n.vWH = pa;
        n.gVCP = ka;
        n.gLVD = Ua
    }

    function ha(n) {
        for (var v = 0, y = 0, K = 0, O = ya.dT_.red(n, function(xa, $a) {
                return xa + $a.yc
            }, 0), V = 0; V < n.length; V++) {
            var da = n[V];
            y = da.time - y;
            0 < y && 1 > K && (v += (1 - K) * y);
            K += da.yc / O;
            y = da.time
        }
        return Math.round(v)
    }

    function wb(n, v, y) {
        var K = [],
            O;
        for (O in n)
            if (ya.dT_.oHOP(n, O)) {
                var V = n[O].$a;
                K.push({
                    time: +O - y,
                    yc: V /
                        v,
                    $a: V
                })
            }
        K.sort(function(da, xa) {
            return da.time - xa.time
        });
        return K
    }

    function tb(n) {
        return n.v
    }

    function Za(n, v) {
        var y, K = v.time;
        v = v.area;
        null !== (y = n[K]) && void 0 !== y ? y : n[K] = {
            $a: 0,
            yc: 0,
            time: 0
        };
        n[K].$a += v;
        return n
    }

    function w(n) {
        n.Ua--;
        T(n)
    }

    function B(n, v) {
        var y = -1;
        if (v) {
            y = Math;
            var K = v.time;
            y = y.round.call(y, 0 > K ? -1 : K - n.Ya);
            y >= lb ? (n.trigger = "t", y = -2) : 0 > y && (y = -1);
            var O = v.node;
            if (O) {
                K = v.area;
                var V = {
                    left: NaN,
                    top: NaN
                };
                try {
                    V = O.getBoundingClientRect()
                } catch (Xa) {}
                var da = Ka.split(",");
                K = {
                    location: {
                        x: Math.ceil(V.left),
                        y: Math.ceil(V.top)
                    },
                    size: Math.ceil(K),
                    Ji: O.getAttribute("class"),
                    id: O.getAttribute("id"),
                    name: O.getAttribute("name"),
                    tagName: O.tagName,
                    og: ya.dT_.gecsss(O)
                };
                for (V = 0; V < da.length; V++) {
                    var xa = da[V],
                        $a = O.getAttribute(xa);
                    if ($a) {
                        K.Eh = {
                            key: xa,
                            value: $a
                        };
                        break
                    }
                }
                K ? (O = K.Eh, xa = K.location, $a = K.size, da = K.tagName, V = K.og, K = ya.dT_.aesc(K.name || ""), xa = [xa.x, xa.y, $a], K && xa.push("n;".concat(K)), O && xa.push("u;".concat(ya.dT_.aesc(O.key), ",").concat(ya.dT_.aesc(O.value))), V ? xa.push("s;".concat(ya.dT_.aesc(V))) : xa.push("t;".concat(ya.dT_.aesc(da))),
                    K = xa.join("|")) : K = "";
                v.kd = K
            }
            n.Pg && (pd = !0)
        }
        return y
    }

    function J(n, v, y) {
        var K = ya.dT_.nw() - v.Td,
            O = ya.dT_.nw(),
            V = ya.dT_.aFr(v.na, ea);
        var da = v.Ya;
        ya.dT_.nw();
        for (var xa = V.length - 1; 0 < xa; xa--)
            for (var $a = V[xa], Xa = xa - 1; 0 <= Xa; Xa--) {
                var mb = V[Xa],
                    Tb = mb.area,
                    Dc = $a.area;
                if (Dc && Tb && 2500 < Tb) {
                    var Ec = $a.offset,
                        Pc = mb.offset,
                        Ic = Xc(Ec.top, Pc.top),
                        Ed = Xc(Ec.left, Pc.left),
                        pe = Dd(Ec.left + Ec.width, Pc.left + Pc.width);
                    Ec = Dd(Ec.top + Ec.height, Pc.top + Pc.height);
                    Ed = Xc(0, pe - Ed);
                    Ic = Xc(0, Ec - Ic);
                    mb.area = Xc(0, Tb - Dd(Math.round(Ed * Ic), Dc))
                }
            }
        V =
            ya.dT_.aFr(V, tb);
        V = ya.dT_.red(V, Za, {});
        da = wb(V, S() * pa(), da);
        vd = ha(da);
        vd > n && (vd = n);
        ya.dT_.nw();
        da = vd;
        O = ya.dT_.nw() - O;
        n = [
            ["V", n + "|" + v.trigger],
            ["VCD", K + ""],
            ["VCDS", O + ""],
            ["VCS", v.Td - v.Ya + ""],
            ["VCO", v.Pe - v.Ya + ""],
            ["VCI", v.gd + ""]
        ];
        (y = (null === y || void 0 === y ? void 0 : y.kd) || "") && n.push(["VE", y]);
        n.push(["S", (0 <= da ? da : -1) + ""]);
        ya.dT_.cAE("_vc_", n, v.D, v.Ya)
    }

    function G(n) {
        var v, y, K;
        "n" === n.trigger && (n.trigger = n.Ma ? "f" : "c");
        n.na.sort(function(xa, $a) {
            return xa.time - $a.time
        });
        var O = N(n.na),
            V = B(n, O);
        J(V, n, O);
        ra(O,
            n.na);
        Ud = V;
        var da = (v = {}, v.t = n.trigger, v.k = O, v.v = V, v);
        Vd = da;
        ya.dT_.disE((y = {}, y.kind = "VISUALLY_COMPLETE", y.detail = La(La({}, da), (K = {}, K.a = n.D, K.e = n.na, K)), y));
        O && (O.node = null);
        n.na = [];
        D(n.me);
        n.te = !0;
        n.jh(-1 < V ? n.Ya + V : -1)
    }

    function T(n) {
        var v = n.fe === n.je,
            y = !n.Ua;
        v && y && n.qa && (ya.dT_.ct(n.qa), n.qa = 0);
        !n.te && y && (!n.wb.length && v || n.Ma) && G(n)
    }

    function H() {
        var n = !1;
        za && ya.dT_.addE("INSTRUMENTATION_TRIGGERED", function() {
            if (!n) {
                n = !0;
                for (var v = document.getElementsByTagName("*"), y = {
                            fd: 0,
                            gd: 0,
                            Da: new WeakMap
                        }, K =
                        0; K < v.length; K++) Bb(v[K], ya.dT_.lAID(), !0, y)
            }
        })
    }

    function Na() {
        var n;
        rd = new WeakMap;
        H();
        Nc = !(null === (n = document.body) || void 0 === n || !n.childElementCount);
        ya.dT_.las() || ya.dT_.aMO(ya.dT_.lAID());
        ya.dT_.addE("ACTION_ENTERED", function(v) {
            ya.dT_.aMO(v.detail.i);
            v.detail.i === v.detail.r && P("u")
        });
        ya.dT_.addE("ACTION_CLOSED", function(v) {
            var y = v.detail,
                K = y.i,
                O = y.r;
            v = y.f;
            var V = y.a;
            if (y.dne || O !== K) ya.dT_.rMO(K);
            else {
                var da = function(Xa, mb) {
                    nc(Xa, K, mb) || (ya.dT_.ct(xa), ia(K, !0, V, da, $a, Xa))
                };
                y = !("visible" === document.visibilityState ||
                    !Vc);
                gd.push(da);
                v = ia(K, v || y, V, da, void 0, y ? "b" : void 0);
                var xa = v.qa,
                    $a = v.wf
            }
        });
        ya.dT_.addE("ACTION_BEACON_FORCED", function() {
            P(ya.dT_.las() ? "l" : "f")
        });
        ya.dT_.addE("VISIBILITY_CHANGED", function(v) {
            "1" === v.detail && P("b")
        })
    }

    function ia(n, v, y, K, O, V) {
        var da = O || ya.dT_.aAWC(n);
        if (!da) return fe;
        if (!v) return {
            qa: ya.dT_.st(function() {
                Sb(n, da, !1, y, K, V)
            }, Ja),
            wf: da
        };
        Sb(n, da, !0, y, K, V);
        return fe
    }

    function Ia(n, v) {
        return function(y) {
            y = v + y.time;
            return !n || n <= y
        }
    }

    function Ca(n, v, y, K, O) {
        var V = K.push;
        a: {
            var da;
            if ((y || !n.oc.has(O)) &&
                O.nodeType !== Node.TEXT_NODE && va(O)) {
                var xa = Gb(O, n.D, y, n),
                    $a = xa.Sd;
                Ta(O) ? (Bb(O, n.D, y, n), $a.push(O)) : eb(O) && $a.push(O);
                if (y = O && O.nodeType && 1 === O.nodeType) try {
                    var Xa = kb;
                    y = !!Xa && O.matches(Xa)
                } catch (Tb) {
                    y = !1
                }
                if ($a.length && !y)
                    for (da = 0; da < $a.length; da++) Lc($a[da], n, v, O, xa.style);
                else $a = Ma(O, n.Da), $a = fa(X($a)), ub(n, (da = {}, da.time = Math.round(v), da.node = O, da.area = $a, da.v = !ua(n, O, xa.style), da.url = "", da.offset = {
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0
                }, da.is = y ? 1 : 0, da));
                try {
                    if (O.hasChildNodes()) {
                        var mb = O.childNodes;
                        break a
                    }
                } catch (Tb) {}
            }
            mb = []
        }
        V.call(K, mb)
    }

    function rb(n, v) {
        return gb(this, void 0, void 0, function() {
            var y, K, O;
            return ob(this, function(V) {
                switch (V.label) {
                    case 0:
                        return y = !v.Ma, K = ya.dT_.gXACT(v.D)[0], O = n, K ? [4, ya.dT_.fP(n, Ia(K, ya.dT_.gto()), y)] : [3, 2];
                    case 1:
                        O = V.B(), V.label = 2;
                    case 2:
                        return [4, ya.dT_.fEP(O, function(da, xa, $a, Xa) {
                            var mb = [],
                                Tb = da.time;
                            ya.dT_.fEP(da.nodes, Ca.bind(null, v, Tb, !0, mb), Tb, y).then(function() {
                                return ya.dT_.fEP(mb, function(Dc, Ec, Pc, Ic) {
                                        ya.dT_.fEP(Dc, Ca.bind(null, v, Tb, !1, mb), null, y, !0).then(Ic).catch(ta)
                                    }, null,
                                    y, !0)
                            }).then(Xa).catch(ta)
                        }, null, y, !0)];
                    case 3:
                        return V.B(), [2, v]
                }
            })
        })
    }

    function Ab(n, v, y) {
        ya.dT_.ct(n.eb);
        ya.dT_.ct(n.vb);
        ya.dT_.rMO("vc-timeout-".concat(v));
        n.eb = -1;
        n.vb = -1;
        Ib(v, y, !0)
    }

    function qb(n, v) {
        var y = {
            vb: -1,
            eb: -1
        };
        y.vb = ya.dT_.st(function() {
            Ab(y, n, v)
        }, wa);
        zb(n, v, y);
        ya.dT_.aMO("vc-timeout-".concat(n), function() {
            zb(n, v, y)
        });
        return y
    }

    function zb(n, v, y) {
        ya.dT_.ct(y.eb);
        y.eb = ya.dT_.st(function() {
            Ab(y, n, v)
        }, Ra)
    }

    function Ib(n, v, y) {
        return gb(this, void 0, void 0, function() {
            var K, O;
            return ob(this, function(V) {
                switch (V.label) {
                    case 0:
                        K =
                            ya.dT_.gMN(n);
                        ya.dT_.rMO(n);
                        v.Pe = ya.dT_.nw();
                        v.Ua++;
                        if (!y || !Nc && !Yb) return [3, 2];
                        v.Ua++;
                        return [4, Kb(v, I, void 0, void 0, v.Ma)];
                    case 1:
                        return O = V.B(), ya.dT_.fE(O, ub.bind(null, v)), w(v), [3, 3];
                    case 2:
                        K.length || T(v), V.label = 3;
                    case 3:
                        return [4, rb(K, v)];
                    case 4:
                        return V.B(), w(v), [2]
                }
            })
        })
    }

    function ub(n, v) {
        var y = v.node;
        if (y) {
            if (n.oc.has(y)) {
                (y = n.oc.get(y)) && v.time > n.na[y].time && (n.na[y] = v);
                return
            }
            n.oc.set(y, n.na.length)
        }
        n.na.push(v)
    }

    function Sb(n, v, y, K, O, V) {
        void 0 === V && (V = "n");
        D(O);
        O = ya.dT_.lAID() === n;
        var da = {
            Ya: K,
            fe: 0,
            je: 0,
            Ua: 0,
            te: !1,
            Td: ya.dT_.nw(),
            Pe: 0,
            qa: ya.dT_.st(function() {
                da.Ma = !0;
                da.Ua = 0;
                T(da)
            }, lb),
            wb: [],
            mg: [],
            na: [],
            oc: new WeakMap,
            Pg: O,
            jh: v,
            D: n,
            trigger: V,
            Ma: y,
            fd: 0,
            gd: 0,
            Da: new WeakMap,
            me: function($a, Xa) {
                nc($a, n, Xa) || (da.Ma = !0, da.Ua = 0, da.trigger = $a, 0 <= xa.eb && 0 <= xa.vb && Ab(xa, n, da), T(da))
            }
        };
        if ("b" === V) T(da);
        else {
            var xa = {
                eb: -1,
                vb: -1
            };
            gd.push(da.me);
            O && !y ? xa = qb(n, da) : Ib(n, da, O)
        }
    }

    function nc(n, v, y) {
        return v !== ya.dT_.lAID() && (y || "u" === n)
    }

    function Kc(n, v, y, K, O, V, da) {
        var xa, $a = ya.dT_.tau(n),
            Xa = Da;
        Xa = $a && Xa && Xa.test($a);
        var mb = fa(X(K)),
            Tb = (xa = {}, xa.url = $a, xa.time = Math.round(v), xa.node = y, xa.v = !ua(O, y, da), xa.area = mb, xa.offset = K, xa.is = Xa ? 2 : 0, xa);
        ub(O, Tb);
        K = Ta(y);
        da = eb(y);
        n = K && !y.complete && !n.startsWith("data:") || da && ma(y);
        O.fe++;
        O.wb.push({
            name: Tb.url,
            startTime: v
        });
        if (!n || O.Ma || Xa)(K || da) && Mc(y, O, Tb, V, !0);
        else {
            var Dc = function() {
                O.Da.delete(y);
                Mc(y, O, Tb, V, !1);
                y.removeEventListener("load", Dc);
                y.removeEventListener("error", Dc)
            };
            y.addEventListener("load", Dc);
            y.addEventListener("error", Dc)
        }
    }

    function de(n) {
        return n.currentSrc ||
            n.getAttribute("src") || n.getAttribute("href") || ""
    }

    function Hc(n, v, y, K, O) {
        var V, da = Da;
        da = (n = ya.dT_.tau(n)) && da && da.test(n);
        var xa = O === v;
        return V = {}, V.url = n, V.time = Math.round(y), V.node = v, V.v = !1, V.area = 0, V.offset = K, V.is = da ? 2 : 0, V.w = xa ? v.width : O.clientWidth, V.h = xa ? v.height : O.clientHeight, V.nw = xa ? v.naturalWidth : v.width, V.nh = xa ? v.naturalHeight : v.height, V
    }

    function Lc(n, v, y, K, O) {
        var V = de(n);
        if (Y(V) && !ic(n, v.Da) && !v.wb.some(function(xa) {
                return xa.name === V
            })) {
            var da = Ma(K, v.Da);
            Ta(n) && !n.width || Fa(da) ? (Ha(da) ||
                Ta(n)) && Kc(V, y, n, da, v, K, O) : Ta(n) && v.na.push(Hc(V, n, y, da, K))
        }
    }

    function Mc(n, v, y, K, O) {
        var V = I.performance,
            da = y.url,
            xa = ya.dT_.nw();
        (V = !O && mc ? xa : ya.dT_.red(V.getEntriesByName(da, "resource"), Sa(), 0)) && (y.time = Math.max(Math.round(V), y.time));
        O || (y.o = xa);
        V = X(Ma(K || n, v.Da));
        y.area = fa(V);
        y.node = K;
        if (Ta(n)) {
            var $a = K === n;
            y.w = $a ? n.width : K.clientWidth;
            y.h = $a ? n.height : K.clientHeight;
            y.nw = $a ? n.naturalWidth : n.width;
            y.nh = $a ? n.naturalHeight : n.height
        }
        v.je++;
        K = ya.dT_.aFI(v.wb, function(Xa) {
            return Xa.name === da
        }); - 1 !==
            K && (K = v.wb.splice(K, 1)[0], v.mg.push(K.name), O && v.Ma && Va({
                time: K.startTime,
                url: K.name,
                isVisible: qa(y),
                element: y.node,
                endTime: xa
            }, 2, v.D), eb(n) && (v.Ua++, F(v, n, y.offset, V).then(w.bind(null, v)).catch(ta)), T(v))
    }

    function Jd(n) {
        n = n.detail;
        var v = n.i,
            y = n.a;
        n.r === v && ya.dT_.cAE("_vc_", [
            ["V", "-3"],
            ["S", "-3"]
        ], v, y)
    }
    var od = this.dT_ && dT_.prm && dT_.prm() || window.Promise,
        ya = "undefined" !== typeof window ? window : self,
        I = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        ca;
    (function(n) {
        n.ANCHOR =
            "A";
        n.BUTTON = "BUTTON";
        n.FORM = "FORM";
        n.I_FRAME = "IFRAME";
        n.IMAGE = "IMG";
        n.INPUT = "INPUT";
        n.LABEL = "LABEL";
        n.LINK = "LINK";
        n.OPTION = "OPTION";
        n.SCRIPT = "SCRIPT";
        n.SELECT = "SELECT";
        n.STYLE = "STYLE";
        n.TEXT_AREA = "TEXTAREA"
    })(ca || (ca = {}));
    var Ba = -1,
        Da = null,
        za = !1,
        Ja = -1,
        wa = -1,
        Ka = "",
        kb = "",
        Ra = -1,
        lb = -1,
        Yb = !1,
        Ob = !1,
        Jb = 0,
        mc = !1,
        Vc = !1,
        pd = !1,
        qd, ad, Ud, Vd, ed, fd = {},
        Rc = (ed = {}, ed[1] = {}, ed[2] = {}, ed),
        Wd = "function" === typeof PerformanceResourceTiming || "object" === typeof PerformanceResourceTiming,
        gd = [],
        Cd = I.document.documentElement,
        ud, Md, rd, Nd = /url\s*\(\s*(?:'(\S*?)'|"(\S*?)"|((?:\\\s|\\\)|\\"|\\'|\S)*?))\s*\)/gi,
        Bd;
    (function(n) {
        n.FAILED = "FAILED";
        n.PENDING = "PENDING";
        n.SUCCESSFUL = "SUCCESSFUL";
        n.UNKNOWN = "UNKNOWN"
    })(Bd || (Bd = {}));
    var Dd = Math.min,
        Xc = Math.max,
        vd = -1,
        Nc, fe = {
            qa: 0,
            wf: void 0
        };
    (function() {
        var n, v, y = I.dT_;
        if (y && y.smbi && y.iMod) {
            qd = y;
            (y = ya.dT_.tdto()) && "ea" in y && (ad = y);
            y = ya.dT_.iMod().includes("V");
            var K = ya.dT_.smbi("V");
            var O = I.performance;
            var V = ad.syn;
            O = !!I.MutationObserver && !(null === O || void 0 === O || !O.getEntriesByType) ||
                V;
            if (null === (v = (n = ya.dT_).ssmbi) || void 0 === v ? 0 : v.call(n, "V", !1, O, K)) return y || ya.dT_.iMod("V"), Z(), ya.dT_.addE && ya.dT_.addE("CONFIG_UPDATE", Z), Na(), !0;
            !K || y || O || ya.dT_.addE("ACTION_BEFORE_SEND", Jd)
        }
        return !1
    })() && Ea()
})();
(function() {
    function La(S, X) {
        function ua(Ga) {
            return !(!Ga || !Ga[S])
        }
        var la = 0;
        if (X) {
            var fa = document.getElementById(X);
            if (ua(fa)) return fa;
            Ya.dT_.addE("DEBUG_INFO_REQUESTED", function() {
                return [{
                    type: "mvi",
                    severity: "Info",
                    text: 'Could not find vue element with configured id "'.concat(X, '"')
                }]
            })
        }
        return ua(document.body) ? document.body : ua(document.body.firstElementChild) ? document.body.firstElementChild : document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
            acceptNode: function(Ga) {
                la++;
                return ua(Ga) ||
                    50 === la ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        }).nextNode()
    }

    function gb(S) {
        var X;
        if (Va.Vue && Va.Vue.version) {
            var ua = Va.Vue.version;
            "2" === ua.split(".")[0] && "__vue__" === S && (X = ua);
            "3" === ua.split(".")[0] && "__vue_app__" === S && (X = ua)
        }(ua = La(S, Ya.dT_.scv("vrei"))) && ua[S] && (Ya.dT_.iVRA(ua, S), X || (X = ""));
        return X
    }

    function ob(S) {
        for (var X = Va, ua = 0; ua < S.length; ua++)
            if (X = S[ua], "function" === typeof X) X = X.apply(this);
            else {
                var la = X.split(".");
                X = Va;
                for (var fa = 0; fa < la.length && "undefined" !== typeof X && null != X; fa++) X = -1 === la[fa].indexOf("()") ? X[la[fa]] : X[la[fa].replace("()", "")]();
                if ("undefined" !== typeof X) break
            }
        return X
    }

    function db() {
        var S = [],
            X = 0,
            ua = Array.prototype,
            la = ua.concat,
            fa = [];
        for (N in pa)
            if (Ya.dT_.oHOP(pa, N)) try {
                var Ga = pa[N];
                "object" !== typeof Ga && (Ga = [], Ga[0] = pa[N]);
                var Ma = ob(Ga);
                if ("string" === typeof Ma || Ya.dT_.iIO(Ma, 3)) fa.push(N + ("b" === N ? Ma : Ma.split(/-|_| /)[0]));
                else if ("object" === typeof Ma && Ma.length)
                    for (var qa = Ma.length, ra = 0; ra < qa; ra++) fa.push(N + Ma[ra]);
                else void 0 !== Ma && fa.push(N + "x")
            } catch (D) {}
        var N = [];
        for (var Z in Ha)
            if (Ya.dT_.oHOP(Ha, Z))
                if (Ha[Z].startsWith("url"))
                    for (Ga = Ha[Z].replace("url:", ""), Ma = document.getElementsByTagName("script"), qa = 0; qa < Ma.length; qa++) try {
                        if (Ma[qa].src && Ma[qa].src.includes(Ga)) {
                            N.push(Z);
                            break
                        }
                    } catch (D) {} else "undefined" !== typeof Va[Ha[Z]] && N.push(Z);
        for (ua = la.call(ua, fa, N); X < ua.length; X++) la = ua[X], na[la] || (S.push(la), na[la] = !0);
        return S
    }

    function eb(S, X, ua, la) {
        X || 20 < vb || (ta.length || (ta = db(), vb++), ta.length && (S.av(la, "fd", Ya.dT_.aesc(ta.join(";")), !1), ta = []))
    }

    function Ta(S) {
        S.detail.i ===
            Ya.dT_.lAID() && (ta = db(), Ya.dT_.remE("ACTION_CLOSED", Ta))
    }

    function Ua(S, X, ua) {
        var la = 0;
        try {
            if (3 >= ua && !Ya.dT_.iIO(S, 8))
                if ("object" === typeof S && !X.includes(S)) {
                    X.push(S);
                    for (var fa in S) Ya.dT_.oHOP(S, fa) && (la++, la += Ua(S[fa], X, ua + 1))
                } else if (Array.isArray(S) && !X.includes(S)) {
                X.push(S);
                for (var Ga = 0; Ga < S.length; Ga++) fa = S[Ga], la += Ua(fa, X, ua + 1)
            }
        } catch (Ma) {}
        return la
    }
    this.dT_ && dT_.prm && dT_.prm();
    var Ya = "undefined" !== typeof window ? window : self,
        Va = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ?
        window : void 0,
        Qa, ab, vb = 0,
        na = [],
        ta = [],
        Ha = {
            fueldeck: "FDUPA",
            soasta: "url:c.go-mpulse.net",
            monitis: "JSBenchmark",
            pingdom: "PRUM_EPISODES",
            newrelic: "NREUM",
            appdynamics: "ADRUM",
            appneta: "_tly",
            pendo: "pendo",
            heap: "heap",
            mixpanel: "mixpanel",
            amplitude: "amplitude",
            tealeaf: "TLT",
            datadog: "DD_RUM",
            elastic: "elasticApm",
            requestmetrics: "RM",
            instana: "ineum",
            plumbr: "PLUMBR",
            glassbox: "_detector",
            decibelinsight: "decibelInsight",
            contentsquare: "CS_CONF",
            hotjar: "hjBootstrap",
            quantummetric: "QuantumMetricAPI",
            fullstory: "FS"
        },
        Fa;
    (function(S) {
        S.ANGULAR = "g";
        S.DATA_LAYER = "b";
        S.NEXT = "p";
        S.NUXT = "n";
        S.REACT = "r";
        S.VUE = "v";
        S.VUE3 = "k"
    })(Fa || (Fa = {}));
    var pa = (Qa = {}, Qa.g = function() {
            if (document.querySelectorAll) {
                for (var S = Array.prototype.slice.call(document.querySelectorAll("[ng-version]")), X = [], ua = 0, la = S.length; ua < la; ua++) X.push(S[ua].getAttribute("ng-version"));
                return X.length ? X : void 0
            }
        }, Qa.b = function() {
            var S = Va.dataLayer,
                X = [];
            if (S && S.length) {
                for (var ua = 0, la = 0; la < S.length; la++) {
                    var fa = S[la];
                    if ("object" === typeof fa && !X.includes(fa)) {
                        X.push(fa);
                        for (var Ga in fa) Ya.dT_.oHOP(fa, Ga) && (ua++, ua += Ua(fa[Ga], X, 0))
                    }
                }
                ua ? (S = "1-5", 500 < ua ? S = "501+" : 100 < ua ? S = "101-500" : 50 < ua ? S = "51-100" : 10 < ua ? S = "11-50" : 5 < ua && (S = "6-10"), ua = S) : ua = void 0;
                return ua
            }
        }, Qa.v = function() {
            return gb("__vue__")
        }, Qa.k = function() {
            return gb("__vue_app__")
        }, Qa.r = function() {
            if (Va.React && Va.React.Component) return (Va.React.version || "") + "";
            var S = La("_reactRootContainer");
            if (S && S._reactRootContainer) return ""
        }, Qa.n = function() {
            var S;
            if ((null === (S = Va.__NUXT__) || void 0 === S ? 0 : S.data) || Va.$nuxt) return ""
        },
        Qa.p = function() {
            var S;
            if (Va.__NEXT_DATA__ && Va.__NEXT_DATA__.buildId) return ((null === (S = Va.next) || void 0 === S ? void 0 : S.version) || "") + ""
        }, Qa);
    (function() {
        var S, X;
        (ab = Va.dT_) && (null === (X = (S = Ya.dT_).smbi) || void 0 === X ? 0 : X.call(S, "f")) && (Ya.dT_.aBPSL(eb), Ya.dT_.addE("ACTION_CLOSED", Ta))
    })()
})();
(function() {
    function La() {
        if (!ea)
            if (document.querySelectorAll) {
                var F = document.querySelector("[ng-version]");
                ea = F && F.getAttribute("ng-version") || "2.0.0"
            } else ea = "2.0.0";
        return ea
    }

    function gb(F) {
        try {
            return F.toString()
        } catch (ka) {
            return ""
        }
    }

    function ob(F, ka) {
        return F.includes(ka)
    }

    function db(F, ka) {
        return "type" in F && F.type === ka
    }

    function eb(F) {
        for (var ka in F)
            if (P.dT_.oHOP(F, ka)) {
                var Ea = F,
                    ha = ka;
                P.dT_.lx(Ea[ha]);
                delete Ea[ha]
            }
    }

    function Ta() {
        var F = "",
            ka = P.dT_.bcv("earxa"),
            Ea = {};
        return function(ha) {
            var wb,
                tb;
            if (db(ha, 13) || "ActivationStart" === ha.constructor.name || ob(gb(ha), "ActivationStart") || "snapshot" in ha && null !== (tb = null === (wb = ha.snapshot) || void 0 === wb ? void 0 : wb.routeConfig) && void 0 !== tb && tb.path) {
                var Za, w;
                wb = [];
                for (tb = ha.snapshot; tb;) {
                    var B = null !== (w = null === (Za = tb.routeConfig) || void 0 === Za ? void 0 : Za.path) && void 0 !== w ? w : "";
                    B && wb.push(B);
                    tb = tb.firstChild
                }
                F = wb.join("/")
            }(db(ha, 10) || "RouteConfigLoadEnd" === ha.constructor.name || ob(gb(ha), "RouteConfigLoadEnd")) && (Za = ha.route.path) && Ea[Za] && (P.dT_.lx(Ea[Za]),
                delete Ea[Za]);
            if (Za = ka) Za = db(ha, 9) || "RouteConfigLoadStart" === ha.constructor.name || ob(gb(ha), "RouteConfigLoadStart");
            Za && (Za = ha.route.path) && !Ea[Za] && (w = P.dT_.ex(Gb + La(), 3, Za)) && (Ea[Za] = w);
            (Za = db(ha, 2) || "NavigationCancel" === ha.constructor.name || ob(gb(ha), "NavigationCancel") || "id" in ha && "number" === typeof ha.id && !!ha.url && "reason" in ha && !!ha.reason && 3 === P.dT_.oK(ha).length) || (Za = db(ha, 16) || "NavigationSkipped" === ha.constructor.name || ob(gb(ha), "NavigationSkipped") || "id" in ha && "number" === typeof ha.id &&
                !!ha.url && "reason" in ha && !!ha.reason && "code" in ha && 4 === P.dT_.oK(ha).length);
            Za && eb(Ea);
            if (db(ha, 1) || "NavigationEnd" === ha.constructor.name || ob(gb(ha), "NavigationEnd") || "id" in ha && "number" === typeof ha.id && ha.url && "urlAfterRedirects" in ha && ha.urlAfterRedirects && 3 === P.dT_.oK(ha).length) Za = ha.urlAfterRedirects || ha.url, Za = Za.split("?")[0], eb(Ea), F || "/" !== Za || (F = "/"), P.dT_.sNV({
                name: Za,
                group: F,
                id: ha.id
            }, 2), F = "";
            (db(ha, 15) || "Scroll" === ha.constructor.name || ob(gb(ha), "Scroll") || "routerEvent" in ha && ha.routerEvent &&
                "position" in ha && ha.position && "anchor" in ha && 3 === P.dT_.oK(ha).length) && eb(Ea)
        }
    }

    function Ua(F) {
        return P.dT_.oHOP(F, "prototype") ? F.prototype : Object.getPrototypeOf(F)
    }

    function Ya(F) {
        if ("string" !== typeof F) return !1;
        F = F.toLowerCase();
        return Db.includes(F) || Wb.includes(F)
    }

    function Va(F) {
        return function(ka) {
            P.dT_.rex(ka, void 0, !(ka && ka.stack), "5");
            return Bb.handleError(F, this, arguments)
        }
    }

    function Qa(F) {
        return function() {
            U || (U = !0, this && this.events && (this.events.subscribe(Ta()), 3 !== P.dT_.gVDM() && P.dT_.bcv("usrvd") &&
                P.dT_.sVDM(2)));
            return Bb.scheduleNavigation(F, this, arguments)
        }
    }

    function ab(F, ka) {
        !F._defaultOptions && dc ? ka.headers = Cc ? new Cc : {
            set: function(Ea, ha) {
                this[Ea] = ha;
                return this
            },
            has: function(Ea) {
                return !!this[Ea]
            },
            forEach: function(Ea) {
                var ha = this;
                P.dT_.fE(Object.keys(ha), function(wb) {
                    "set" !== wb && "has" !== wb && "forEach" !== wb && Ea.apply(ha, [wb, [ha[wb]]])
                })
            }
        } : F._defaultOptions && (ka.headers = {}, (F = F._defaultOptions) && F.headers && F.headers.forEach && F.headers.forEach(function(Ea, ha) {
            ha && (ka.headers[ha] = Ea)
        }))
    }

    function vb(F,
        ka) {
        var Ea = oa.includes(ka);
        return function() {
            function ha(qb) {
                if (!Na) {
                    var zb = P.dT_.nw();
                    Na = !0;
                    P.dT_.dlx(qb, zb)
                }
            }

            function wb(qb) {
                var zb = qb.then;
                qb.then = function() {
                    for (var ub = [], Sb = 0; Sb < arguments.length; Sb++) ub[Sb] = arguments[Sb];
                    0 === ub.length && (ub[0] = function() {});
                    1 === ub.length && (ub[1] = function(nc) {
                        throw nc;
                    });
                    for (Sb = 0; Sb < ub.length; Sb++) "function" === typeof ub[Sb] && (ub[Sb] = tb(ub[Sb], 1 === Sb));
                    return wb(zb.apply(this, ub))
                };
                var Ib = qb["catch"];
                qb["catch"] = function() {
                    for (var ub = [], Sb = 0; Sb < arguments.length; Sb++) ub[Sb] =
                        arguments[Sb];
                    0 === ub.length && (ub[0] = function(nc) {
                        throw nc;
                    });
                    ub[0] && "function" === typeof ub[0] && (ub[0] = tb(ub[0], !0));
                    return wb(Ib.apply(this, ub))
                };
                return qb
            }

            function tb(qb, zb) {
                return function(Ib) {
                    var ub = !0;
                    Ib && T && "number" === typeof Ib.type && (ub = 4 === Ib.type);
                    na(B, Ib);
                    P.dT_.ec(B);
                    try {
                        Ib && P.dT_.mx() && zb && (-1 === Ib.status ? P.dT_.mxc(B) : P.dT_.mxf(Ib.status, Ib.statusText, B));
                        var Sb = Bb.wrappedCallback(qb, this, arguments)
                    } finally {
                        P.dT_.lc(B), ub && ha(B)
                    }
                    return Sb
                }
            }

            function Za(qb) {
                return function() {
                    if (ia) {
                        var zb =
                            Bb.subscribe(qb, this, arguments, B, H, Gb);
                        zb.unsubscribe = w(zb.unsubscribe);
                        return zb
                    }
                    var Ib = zb = null;
                    B || (B = P.dT_.ex(Gb + La(), 3, H), zb = ta(H, B), Ib = Ha(H, B));
                    var ub = Array.prototype.slice.call(arguments);
                    if (ub[0] && ub[0].next) ub[0].next = tb(ub[0].next), ub[0].error = tb(ub[0].error, !0);
                    else if (0 === ub.length || "function" === typeof ub[0]) 0 === ub.length && (ub[0] = function() {}), 1 === ub.length && (ub[1] = function(nc) {
                        throw nc;
                    }), ub[0] = tb(ub[0]), ub[1] = tb(ub[1], !0);
                    try {
                        var Sb = Bb.subscribe(qb, this, ub, B, H, Gb);
                        Sb.unsubscribe = w(Sb.unsubscribe)
                    } finally {
                        Y.XMLHttpRequest &&
                            zb && Ib && (Y.XMLHttpRequest.prototype.open = zb, Y.XMLHttpRequest.prototype.send = Ib)
                    }
                    return Sb
                }
            }

            function w(qb) {
                return function() {
                    ha(B);
                    return Bb.unsubscribe(qb, this, arguments, B, H, Gb)
                }
            }
            if (Z(this)) return N(this), Bb.httpMethod(F, this, arguments);
            var B = 0,
                J = Array.prototype.slice.call(arguments),
                G = Ya(J[0]),
                T = J[0] && "object" === typeof J[0],
                H = "";
            H = G ? J[1] : T ? J[0].url : J[0];
            var Na = !1,
                ia = !1,
                Ia = J[1];
            Ea || G ? Ia = J[2] : T && (Ia = J[0]);
            Ia && "object" === typeof Ia || (Ia = {});
            Ia.headers || ab(this, Ia);
            Ea || G ? J[2] = Ia : J[T ? 0 : 1] = Ia;
            ra(this);
            try {
                var Ca = Bb.httpMethod(F, this, J)
            } finally {
                N(this)
            }
            if (Ca.toPromise) {
                var rb = Ca.toPromise;
                Ca.toPromise = function() {
                    var qb = null,
                        zb = null;
                    B || (B = P.dT_.ex(Gb + La(), 3, H), qb = ta(H, B), zb = Ha(H, B));
                    ia = !0;
                    try {
                        var Ib = Bb.toPromise(rb, this, arguments, B, H, Gb)
                    } finally {
                        Y.XMLHttpRequest && qb && zb && (Y.XMLHttpRequest.prototype.open = qb, Y.XMLHttpRequest.prototype.send = zb)
                    }
                    return wb(Ib)
                }
            }
            var Ab = Ca.lift;
            Ca.lift = function(qb) {
                var zb = Ab.apply(this, arguments);
                zb.subscribe = Za(zb.subscribe);
                return zb
            };
            Ca.subscribe = Za(Ca.subscribe);
            return Ca
        }
    }

    function na(F, ka) {
        var Ea, ha;
        try {
            if (ka && ka.headers) {
                var wb = ka.headers,
                    tb = {};
                P.dT_.fE(wb.keys(), function(Za) {
                    var w = wb.getAll(Za);
                    w && 0 < w.length && (tb[Za] = w.join(","))
                });
                P.dT_.disE((Ea = {}, Ea.kind = "HTTP_RESPONSE", Ea.detail = (ha = {}, ha.a = F, ha.h = tb, ha), Ea))
            }
        } catch (Za) {}
    }

    function ta(F, ka) {
        if (Y.XMLHttpRequest) {
            var Ea = Y.XMLHttpRequest.prototype.open;
            Y.XMLHttpRequest.prototype.open = function(ha, wb) {
                try {
                    return this.__dtInstrumented__ || (wb !== F && P.dT_.uaxu(ka, wb), this.__dtInstrumented__ = !0, this.__dtFrameworks__ = !!ka),
                        Ea.apply(this, arguments)
                } finally {
                    this.__dtInstrumented__ = !1
                }
            };
            return Ea
        }
    }

    function Ha(F, ka) {
        if (Y.XMLHttpRequest) {
            var Ea = Y.XMLHttpRequest.prototype.send;
            Y.XMLHttpRequest.prototype.send = function() {
                try {
                    if (!this.__dtInstrumented__) {
                        var ha = {},
                            wb = P.dT_.gaxu(ka);
                        ha = P.dT_.sch(ha, wb && wb !== F ? wb : F, ka);
                        for (var tb in ha.headers) P.dT_.oHOP(ha.headers, tb) && this.setRequestHeader(tb, ha.headers[tb]);
                        this.__dtInstrumented__ = !0
                    }
                    return Ea.apply(this, arguments)
                } finally {
                    this.__dtInstrumented__ = !1
                }
            };
            return Ea
        }
    }

    function Fa(F) {
        function ka() {}
        F = F("", ka, ka, null, null, []);
        F = Ua(F);
        pa(F)
    }

    function pa(F) {
        Pb = F.create;
        ic |= 16;
        F.create = function(ka, Ea, ha, wb) {
            var tb = Pb.apply(this, arguments);
            if (!ha) return tb;
            try {
                var Za = ha;
                if ("string" === typeof ha && (Za = document.querySelector(ha), !Za)) return tb;
                if (!Eb.length && (null === Za || void 0 === Za ? 0 : Za.getAttribute)) {
                    var w = Za.getAttribute("ng-version");
                    w && (ea = w)
                }
                Eb.push(Za)
            } catch (B) {}
            return tb
        }
    }

    function S(F) {
        try {
            if (F && ("object" === typeof F || "function" === typeof F) && !Z(F)) {
                var ka = Ua(F);
                if (ka) {
                    var Ea;
                    if (!(Ea = ka.request &&
                            ka.request.toString().includes("First argument must be a url string or Request instance")))
                        if (ka.request) {
                            var ha = ka.request.toString(),
                                wb = ha.includes("Response is not an ArrayBuffer.") && ha.includes("Response is not a Blob.") && ha.includes("Response is not a string.");
                            wb && !ha.includes("headers instanceof") && (dc = !0);
                            Ea = wb
                        } else Ea = !1;
                    if (Ea) {
                        P.dT_.ti();
                        Gc = !0;
                        Ea = 0;
                        for (ha = Db; Ea < ha.length; Ea++) {
                            var tb = ha[Ea];
                            ka[tb] && (ka[tb] = vb(ka[tb], tb))
                        }
                        ic |= 1;
                        ra(F, !0)
                    } else ka.applyUpdate && ka.init && ka.keys ? (Cc = F, ic |= 2, ra(F, !0)) : P.dT_.bcv("aew") && ka.handleError && ka._findOriginalError ? (ka.handleError = Va(ka.handleError), ic |= 4, ra(F, !0)) : ka.scheduleNavigation ? (ka.scheduleNavigation = Qa(ka.scheduleNavigation), ic |= 8, ra(F, !0)) : !Pb && ka.create && (ka.componentType || Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(ka, "componentType")) && (4 === ka.create.length && ka.create.toString().includes("ngModule should be provided") || 3 === ka.create.length && ka.create.toString().includes("createHostView")) && (pa(ka), ra(F))
                }!Pb && "function" ===
                    typeof F && 6 === F.length && /return new \w+\(\w+(?:,\s*\w+){5}\)/.test(F.toString()) && Fa(F)
            }
        } catch (Za) {}
    }

    function X(F) {
        function ka(Ea, ha, wb) {
            var tb = F.apply(this, arguments);
            if (31 === ic) return tb;
            for (var Za in ha)
                if (P.dT_.oHOP(ha, Za)) {
                    var w = void 0;
                    try {
                        w = ha[Za]
                    } catch (B) {}
                    w && S(w)
                }
            return tb
        }
        if ("function" !== typeof F || Z(F) || 31 === ic) return F;
        ra(F);
        ra(ka);
        return ka
    }

    function ua(F, ka, Ea, ha) {
        Gc || (ha && S(ha), F && F && ka && (ea = "string" === typeof Ea ? Ea : Ea && Ea.full ? Ea.full : "2.0.0", S(F.constructor || F), S(ka)))
    }

    function la() {
        for (var F = [], ka = 0; ka < arguments.length; ka++) F[ka] = arguments[ka];
        for (ka = 0; ka < F.length; ka++) fa(F[ka][1]);
        return ec.apply(this, arguments)
    }

    function fa(F) {
        if (Array.isArray(F)) P.dT_.fE(F, function(Ea, ha) {
            F[ha] = X(Ea)
        });
        else if ("object" === typeof F)
            for (var ka in F) P.dT_.oHOP(F, ka) && (F[ka] = X(F[ka]))
    }

    function Ga(F, ka, Ea) {
        fa(ka);
        return hb.apply(hb, arguments)
    }

    function Ma(F, ka) {
        return P.dT_.oHOP(ka, "length") && !P.dT_.oHOP(ka, "push") && !!F
    }

    function qa(F) {
        if (Y[F]) {
            var ka = Y[F];
            "function" === typeof ka ? (hb = ka, Y[F] = Ga) : ka && Ma(ka.push,
                ka) && (Rb = ka, ec = Rb.push, Rb.push = la)
        } else P.dT_.apl(Y, F, function() {
            return Rb || hb
        }, function(Ea) {
            "function" === typeof Ea ? (hb = Ea, P.dT_.rpl(Y, F, void 0, Ga)) : Ma(Ea.push, Ea) && (Rb = Ea, ec = Ea.push, P.dT_.apl(Ea, "push", function() {
                return ec
            }, function(ha) {
                ec = ha;
                "function" === typeof ha && P.dT_.rpl(Ea, "push", void 0, la)
            }, !0, "win"))
        }, !1, "win")
    }

    function ra(F) {
        F.__dtInstrumented__ = Qb
    }

    function N(F) {
        delete F.__dtInstrumented__
    }

    function Z(F) {
        return !!F.__dtInstrumented__
    }

    function D() {
        P.dT_.addE("DEBUG_INFO_REQUESTED", function() {
            return Gc ?
                null : [{
                    type: "anfi",
                    severity: "Warning",
                    text: "Angular Module not fully initialized yet!"
                }]
        })
    }
    this.dT_ && dT_.prm && dT_.prm();
    var P = "undefined" !== typeof window ? window : self,
        Y = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        ma;
    (function(F) {
        F.HANDLE_ERROR = "handleError";
        F.HTTP_METHOD = "httpMethod";
        F.SCHEDULE_NAVIGATION = "scheduleNavigation";
        F.SUBSCRIBE = "subscribe";
        F.TO_PROMISE = "toPromise";
        F.UNSUBSCRIBE = "unsubscribe";
        F.WRAPPED_CALLBACK = "wrappedCallback"
    })(ma || (ma = {}));
    var ea,
        U = !1,
        va;
    (function(F) {
        F[F.NavigationStart = 0] = "NavigationStart";
        F[F.NavigationEnd = 1] = "NavigationEnd";
        F[F.NavigationCancel = 2] = "NavigationCancel";
        F[F.NavigationError = 3] = "NavigationError";
        F[F.RoutesRecognized = 4] = "RoutesRecognized";
        F[F.ResolveStart = 5] = "ResolveStart";
        F[F.ResolveEnd = 6] = "ResolveEnd";
        F[F.GuardsCheckStart = 7] = "GuardsCheckStart";
        F[F.GuardsCheckEnd = 8] = "GuardsCheckEnd";
        F[F.RouteConfigLoadStart = 9] = "RouteConfigLoadStart";
        F[F.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd";
        F[F.ChildActivationStart = 11] =
            "ChildActivationStart";
        F[F.ChildActivationEnd = 12] = "ChildActivationEnd";
        F[F.ActivationStart = 13] = "ActivationStart";
        F[F.ActivationEnd = 14] = "ActivationEnd";
        F[F.Scroll = 15] = "Scroll";
        F[F.NavigationSkipped = 16] = "NavigationSkipped"
    })(va || (va = {}));
    var Sa;
    (function(F) {
        F.ACTIVATION_START = "ActivationStart";
        F.NAVIGATION_CANCEL = "NavigationCancel";
        F.NAVIGATION_END = "NavigationEnd";
        F.NAVIGATION_SKIPPED = "NavigationSkipped";
        F.ROUTE_CONFIG_LOAD_END = "RouteConfigLoadEnd";
        F.ROUTE_CONFIG_LOAD_START = "RouteConfigLoadStart";
        F.SCROLL =
            "Scroll"
    })(Sa || (Sa = {}));
    var bb;
    (function(F) {
        F[F.NONE = 0] = "NONE";
        F[F.HTTP = 1] = "HTTP";
        F[F.HEADERS = 2] = "HEADERS";
        F[F.ERRORS = 4] = "ERRORS";
        F[F.NAV = 8] = "NAV";
        F[F.FACTORY = 16] = "FACTORY";
        F[F.ALL = 31] = "ALL"
    })(bb || (bb = {}));
    var Db = "delete get head options patch post put request".split(" "),
        Wb = ["jsonp"],
        oa = ["post", "put", "patch"],
        Eb = [],
        wc;
    (function(F) {
        F[F.SENT = 0] = "SENT";
        F[F.UPLOAD_PROGRESS = 1] = "UPLOAD_PROGRESS";
        F[F.RESPONSE_HEADER = 2] = "RESPONSE_HEADER";
        F[F.DOWNLOAD_PROGRESS = 3] = "DOWNLOAD_PROGRESS";
        F[F.RESPONSE = 4] = "RESPONSE";
        F[F.USER = 5] = "USER"
    })(wc || (wc = {}));
    var Gc = !1,
        hb, Rb, ec, Qb = {},
        Cc, dc = !1,
        ic = 0,
        Pb, Kb, Gb = "g",
        pc, Bb = (Kb = {}, Kb.httpMethod = function(F, ka, Ea) {
                return pc.aWF(F, ka, Ea)
            }, Kb.wrappedCallback = function(F, ka, Ea) {
                return pc.aWF(F, ka, Ea)
            }, Kb.subscribe = function(F, ka, Ea, ha, wb, tb) {
                return pc.aWF(F, ka, Ea, ha, wb, tb)
            }, Kb.toPromise = function(F, ka, Ea, ha, wb, tb) {
                return pc.aWF(F, ka, Ea, ha, wb, tb)
            }, Kb.unsubscribe = function(F, ka, Ea, ha, wb, tb) {
                return pc.aWF(F, ka, Ea, ha, wb, tb)
            }, Kb.handleError = function(F, ka, Ea) {
                return pc.aWF(F, ka, Ea)
            }, Kb.scheduleNavigation =
            function(F, ka, Ea) {
                return pc.aWF(F, ka, Ea)
            }, Kb);
    (function() {
        var F, ka;
        return (pc = Y.dT_) && (null === (ka = (F = P.dT_).smbi) || void 0 === ka ? void 0 : ka.call(F, Gb))
    })() && (D(), Gc || (pc.initAngularNg = ua, qa("webpackJsonp"), P.dT_.scv("apn") && qa(P.dT_.scv("apn"))))
})();
(function() {
    function La(D, P) {
        if (!P) return "";
        var Y = D + "=";
        D = P.indexOf(Y);
        if (0 > D) return "";
        for (; 0 <= D;) {
            if (0 === D || " " === P.charAt(D - 1) || ";" === P.charAt(D - 1)) return Y = D + Y.length, D = P.indexOf(";", D), 0 <= D ? P.substring(Y, D) : P.substring(Y);
            D = P.indexOf(Y, D + Y.length)
        }
        return ""
    }

    function gb() {
        return 0 < pa.dT_.oK(Ga).length
    }

    function ob(D) {
        var P = D.split("@");
        D = P[0];
        P = P[1];
        try {
            var Y = document.querySelector(D);
            if (!Y) return {
                info: "No elements matching the css selector '" + D + "' could be found."
            };
            if (P) {
                if (eb(Y, P)) return {
                    value: "password input field"
                };
                var ma = Y.getAttribute(P);
                return ma ? {
                    value: ma
                } : {
                    info: "Specified attribute [".concat(P, "] contains no data.")
                }
            }
            var ea = Y.innerText || Y.textContent;
            return Ua(ea) ? {
                value: ea
            } : {
                info: "Found element contains no text content."
            }
        } catch (U) {
            return {
                info: "ERROR: retrieving meta data using selector '" + D + "' failed for reason: " + (U.message || U)
            }
        }
    }

    function db(D) {
        var P = /([^(\n]+)\(([^)]*)\)/.exec(D);
        if (!P || 3 !== P.length) return {
            info: "Expression config [".concat(D, "] does not match function format.")
        };
        var Y = P[1],
            ma = P[2] ? P[2].split(";") : [];
        P = la[Y];
        if (!P || !Y || ma.length < P.Me || ma.length > P.Ke) return {
            info: "Function expression config [".concat(D, "] is not part of allowed functions or has invalid number of parameters.")
        };
        P = [];
        for (var ea = 0; ea < ma.length; ea++) {
            var U = ma[ea].split(":");
            if (2 !== U.length) return {
                info: "Function parameters for expr [".concat(D, "] are not properly configured.")
            };
            var va = U[0];
            U = U[1];
            var Sa = parseInt(U);
            if ("Number" !== va || isNaN(Sa))
                if ("String" === va) P.push(U);
                else if ("Boolean" !== va || isNaN(Sa) || 1 !== Sa && 0 !== Sa)
                if ("Null" ===
                    va) P.push(null);
                else return {
                    info: "ValueType: '".concat(va, "' or value: '").concat(U, "' is not valid.")
                };
            else P.push(!!Sa);
            else P.push(Sa)
        }
        a: {
            ma = S;ea = Y.split(".");va = ea.length - 1;
            for (Sa = 0; Sa < va; Sa++)
                if (ma = ma[ea[Sa]], !ma) {
                    ma = null;
                    break a
                }
            ma = ma[ea[va]]
        }
        if ("function" === typeof ma) try {
            return U = ma.apply(void 0, P), {
                value: U
            }
        } catch (bb) {
            return {
                value: "dT_err",
                info: "Error occurred while invoking the function: '" + Y + "' with the error: " + (bb.message || bb)
            }
        }
        return {
            info: "No function [".concat(D, "] is being found in a given scope to be executed.")
        }
    }

    function eb(D, P) {
        return D && "INPUT" === D.nodeName && "password" === D.getAttribute("type") && "value" === P.toLowerCase()
    }

    function Ta(D) {
        function P(U, va, Sa) {
            return va ? eb(U, va) ? "password input field" : !U[va] && va.startsWith("$") ? (va = va.substring(1), U = JSON.parse(U), P(U[va], ma[Sa + 1], Sa + 1)) : P(U[va], ma[Sa + 1], Sa + 1) : U
        }
        try {
            var Y = D; - 1 < D.indexOf("[") && (Y = D.replace(/\[([^\]]*)]/g, ".$1"));
            var ma = Y.split(".");
            var ea = P(S[ma[0]], ma[1], 1);
            return Ua(ea) ? {
                value: ea
            } : {
                info: "JS expression returned is null or undefined: [" + typeof ea +
                    "]."
            }
        } catch (U) {
            return {
                info: "There was an error evaluating the JS expression '" + D + "'!! error: " + (U.message || U)
            }
        }
    }

    function Ua(D) {
        return !!D || !1 === D || 0 === D
    }

    function Ya(D) {
        var P = pa.dT_.ncv("mpl");
        (D = D.maxLength) && (P = 100 * D);
        return P
    }

    function Va() {
        ta();
        for (var D = 0, P = "", Y = pa.dT_.sNT(), ma = 0, ea = pa.dT_.oK(fa); ma < ea.length; ma++) {
            var U = ea[ma],
                va = fa[U];
            if (va.bb && "f" !== va.type) {
                var Sa = N - D;
                if (P) va.info = "Metadata limit already reached. Skipping evaluation.";
                else if (1 > Sa) P = U, va.info = "Metadata limit reached. Metadata evaluation will stop here and will not be executed further.";
                else {
                    U = Ya(va);
                    var bb = va.bb;
                    var Db = {};
                    switch (va.type) {
                        case "a":
                            Db = ob(bb);
                            break;
                        case "b":
                            Db = Ta(bb);
                            break;
                        case "c":
                            Db = La(bb, document.cookie);
                            Db = Ua(Db) ? {
                                value: Db
                            } : {
                                info: "No cookie [".concat(bb, "] value found.")
                            };
                            break;
                        case "d":
                            var Wb = pa.dT_.loc();
                            Db = bb.toLowerCase();
                            if (Ma[Db] && qa === Wb) Db = {
                                value: Ma[Db]
                            };
                            else {
                                qa = Wb;
                                Ma = {};
                                var oa = S.location.search ? S.location.search.slice(1) : Wb.split("?")[1];
                                if (oa) {
                                    oa = oa.split("#")[0];
                                    Wb = 0;
                                    for (oa = oa.split("&"); Wb < oa.length; Wb++) {
                                        var Eb = oa[Wb].split("="),
                                            wc = Eb[0];
                                        Eb = Eb[1] ?
                                            Eb[1] : "";
                                        wc = wc.toLowerCase();
                                        Ma[wc] || (Ma[wc] = Eb)
                                    }
                                    Db = Ma[Db] ? {
                                        value: Ma[Db]
                                    } : {
                                        info: "Searched expression [".concat(bb, "] was not found in the querystring.")
                                    }
                                } else Db = {
                                    info: "URL does not contain any query string."
                                }
                            }
                            break;
                        case "e":
                            Db = db(bb)
                    }
                    bb = Db.value;
                    Db = Db.info;
                    Ua(bb) ? ("string" === typeof bb && (Sa < U && (bb = bb.substring(0, Sa), Db = "Because of available char length [".concat(Sa, "] captured metadata value was trimmed.")), bb.length > U && (Db = "Captured value is trimmed to configured string length of [".concat(U, "] because it is too long."),
                        bb = bb.substring(0, U))), bb += "", va.value = bb, D += bb.length, !va.Tc && Y && (va.value = "dT_pv", va.info = "Metadata value is masked because doNotTrack is active and property is not marked as public")) : va.value = null;
                    Db && (va.info = Db)
                }
            }
        }
        return [D, P]
    }

    function Qa(D) {
        var P = "";
        switch (D) {
            case "a":
                P = "CSS Selector";
                break;
            case "b":
                P = "JavaScript Variable";
                break;
            case "c":
                P = "Cookie";
                break;
            case "d":
                P = "Query String";
                break;
            case "e":
                P = "JavaScript Function"
        }
        return P
    }

    function ab() {
        Va();
        for (var D = [], P = 0, Y = pa.dT_.oK(fa); P < Y.length; P++) {
            var ma =
                Y[P],
                ea = fa[ma];
            "f" !== ea.type && (ma = {
                id: ma,
                type: Qa(ea.type),
                expression: ea.bb,
                value: ea.value
            }, ea.info && (ma.info = ea.info), D.push(ma))
        }
        return D
    }

    function vb() {
        var D = pa.dT_.scv("md"),
            P = pa.dT_.scv("mdp"),
            Y = pa.dT_.scv("mdl");
        N = pa.dT_.ncv("mmds");
        if (D) {
            P = P.split(",");
            for (var ma = {}, ea = 0, U = Y.split(","); ea < U.length; ea++) {
                var va = U[ea].split("=");
                Y = va[0];
                va = parseInt(va[1]);
                isNaN(va) || (ma[Y] = Math.round(va))
            }
            ea = {};
            U = 0;
            for (D = D.split(","); U < D.length; U++) {
                var Sa = D[U],
                    bb = Sa.indexOf("=");
                Y = Sa.substring(0, bb);
                va = Sa.charAt(bb +
                    1);
                if ("a" === va || "b" === va || "c" === va || "d" === va || "e" === va || "f" === va) Sa = pa.dT_.de(Sa.substring(bb + 2)), ea[Y] = {
                    type: va,
                    bb: Sa,
                    value: null,
                    Tc: !1,
                    info: void 0
                }, ma[Y] && (ea[Y].maxLength = ma[Y])
            }
            for (ma = 0; ma < P.length; ma++) Y = P[ma], ea[Y] && (ea[Y].Tc = !0);
            fa = ea
        } else fa = {};
        P = fa;
        ma = {};
        Y = 0;
        for (D = pa.dT_.oK(P); Y < D.length; Y++) ea = D[Y], "f" === P[ea].type && (ma[ea] = P[ea]);
        Ga = ma
    }

    function na(D) {
        for (var P = pa.dT_.sNT(), Y = D.detail.h, ma = {}, ea = 0, U = pa.dT_.oK(Y); ea < U.length; ea++) {
            var va = U[ea];
            ma[va.toLowerCase()] = Y[va]
        }
        D = D.detail.a;
        Y = 0;
        for (ea =
            pa.dT_.oK(Ga); Y < ea.length; Y++)
            if (U = ea[Y], va = fa[U].bb.toLowerCase(), Ua(ma[va])) {
                va = ma[va];
                var Sa = Ya(fa[U]);
                va.length > Sa && (va = va.substring(0, Sa));
                !fa[U].Tc && P && (va = "dT_pv");
                pa.dT_.aAPY("_uaprh_", U, va, D)
            }
    }

    function ta() {
        pa.dT_.fE(Object.keys(fa), function(D) {
            D = fa[D];
            D.value = null;
            D.info = void 0
        })
    }

    function Ha() {
        pa.dT_.addE("CONFIG_UPDATE", vb);
        pa.dT_.addE("HTTP_RESPONSE", na);
        vb();
        pa.dT_.aBPSL(function(D, P, Y, ma) {
            if (D.ha(ma)) {
                Y = Va();
                P = Y[0];
                Y = Y[1];
                var ea = [];
                for (va in fa)
                    if (pa.dT_.oHOP(fa, va)) {
                        var U = fa[va].value;
                        "undefined" !== typeof U && null !== U && ea.push("".concat(va, ",").concat(pa.dT_.aesc(U)))
                    }
                var va = (va = ea.join(";")) && encodeURIComponent(va);
                D.av(ma, "md", va, !0);
                P >= N && (P = N + "", Y && (P += "," + Y), D.av(ma, "mdlr", P, !0))
            }
        })
    }

    function Fa() {
        var D = [],
            P = Va()[0],
            Y = [],
            ma = [];
        for (U in fa)
            if (pa.dT_.oHOP(fa, U)) {
                var ea = fa[U];
                null !== ea.value && "dT_err" !== ea.value || !ea.info || Y.push("'".concat(ea.bb, "'(").concat(Qa(ea.type), "): '").concat(ea.info, "'"));
                "dT_pv" === ea.value && ma.push("'".concat(ea.bb, "'(").concat(Qa(ea.type), ")"))
            }
        if (Y.length) {
            var U = [];
            for (ea = 0; ea < Y.length; ea++) U.push({
                type: "mnc",
                text: Y[ea],
                severity: "Info"
            });
            D.push({
                severity: "Info",
                text: "".concat(Y.length, " session/action ").concat(1 < Y.length ? "properties" : "property", " not collected"),
                type: "mnc",
                children: U
            })
        }
        ma.length && D.push({
            severity: "Info",
            text: "Because of respected doNotTrack there are no session/action properties reported for: ".concat(ma.join(", ")),
            type: "mdr"
        });
        P >= N && D.push({
            severity: "Warning",
            text: 'Session/action properties size exceeds the active limit of "'.concat(N,
                '"'),
            type: "mlr"
        });
        return D
    }
    this.dT_ && dT_.prm && dT_.prm();
    var pa = "undefined" !== typeof window ? window : self,
        S = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        X;
    (function(D) {
        D.ANCHOR = "A";
        D.BUTTON = "BUTTON";
        D.FORM = "FORM";
        D.I_FRAME = "IFRAME";
        D.IMAGE = "IMG";
        D.INPUT = "INPUT";
        D.LABEL = "LABEL";
        D.LINK = "LINK";
        D.OPTION = "OPTION";
        D.SCRIPT = "SCRIPT";
        D.SELECT = "SELECT";
        D.STYLE = "STYLE";
        D.TEXT_AREA = "TEXTAREA"
    })(X || (X = {}));
    var ua;
    (function(D) {
        D.COOKIE = "c";
        D.CSS_SELECTOR = "a";
        D.JS_FUNCTION =
            "e";
        D.JS_VARIABLE = "b";
        D.QUERY_STRING = "d";
        D.RESPONSE_HEADER = "f"
    })(ua || (ua = {}));
    X = {
        Me: 0,
        Ke: 0
    };
    var la = {
            "window.Intercom": {
                Me: 1,
                Ke: 1
            },
            "LC_API.get_last_visit_timestamp": X,
            "LC_API.get_visits_number": X,
            "LC_API.get_page_views_number": X,
            "LC_API.get_chats_number": X,
            "LC_API.get_visitor_id": X,
            "LC_API.get_chat_id": X
        },
        fa = {},
        Ga = {},
        Ma = {},
        qa, ra;
    (function(D) {
        D.BOOLEAN = "Boolean";
        D.NULL = "Null";
        D.NUMBER = "Number";
        D.STRING = "String"
    })(ra || (ra = {}));
    var N, Z;
    (function() {
        var D, P;
        return (Z = S.dT_) && (null === (P = (D = pa.dT_).smbi) ||
            void 0 === P ? 0 : P.call(D, "h")) ? (Ha(), pa.dT_.addE("DEBUG_INFO_REQUESTED", Fa), !0) : !1
    })() && (Z.gEMD = ab, Z.iRHCA = gb)
})();
(function() {
    function La(N, Z, D, P, Y) {
        var ma, ea = !1;
        if (la || ua) return ea;
        ua = !0;
        try {
            "function" === typeof X && X !== La && (ea = X(N, Z, D, P, Y))
        } catch (U) {
            na.dT_.rex(U, void 0, !0, "1")
        }
        ea || na.dT_.re((ma = {}, ma.msg = "string" === typeof N ? N : "", ma.file = Z || "", ma.line = D || -1, ma.column = P || -1, ma.error = Y || "", ma.stackContainsWrapper = !1, ma.source = "1", ma));
        ua = !1;
        return ea
    }

    function gb(N) {
        try {
            if ("[object Function]" !== Object.prototype.toString.call(N)) return N;
            var Z = N.dtwid;
            "number" === typeof Z && Ga[Z] ? Ga[Z].rd++ : (Ga[Ma] = {
                    xa: N,
                    rd: 1
                }, N.dtwid =
                Ma++);
            N.rxewrapper = N.rxewrapper || function(D) {
                try {
                    return qa.errorCallback(N, this, arguments)
                } catch (P) {
                    if (-2146823277 !== P.number) throw fa && (na.dT_.rex(P, void 0, !0, "1"), ob()), P;
                }
            };
            return N.rxewrapper.rxewrapper = N.rxewrapper
        } catch (D) {
            return N
        }
    }

    function ob() {
        la += 1;
        na.dT_.st(function() {
            --la
        }, 0)
    }

    function db() {
        var N = document.getElementsByTagName("html");
        0 !== N.length && N[0].hasAttribute && N[0].hasAttribute("webdriver") || "EventTarget Window ModalWindow".replace(/\w+/g, function(Z) {
            (Z = ta[Z] && ta[Z].prototype) && na.dT_.oHOP(Z,
                "addEventListener") && (Z.addEventListener = eb(Z.addEventListener), Z.removeEventListener = Ta(Z.removeEventListener));
            return ""
        })
    }

    function eb(N) {
        return function(Z, D, P, Y) {
            D && D.handleEvent && (D.handleEvent = gb(D.handleEvent));
            return N.call(this, Z, gb(D), P, Y)
        }
    }

    function Ta(N) {
        return function(Z, D, P, Y) {
            try {
                return N.call(this, Z, D && D.rxewrapper ? D.rxewrapper : D, P, Y)
            } finally {
                D && (Z = D.dtwid, "number" === typeof Z && Ga[Z] && Ga[Z].xa === D && (Ga[Z].rd--, Ga[Z].rd || (delete D.rxewrapper, delete D.dtwid, delete Ga[Z])))
            }
        }
    }

    function Ua() {
        try {
            na.dT_.apl(ta,
                "onerror",
                function() {
                    return La
                },
                function(N) {
                    X = N
                })
        } catch (N) {}
    }

    function Ya() {
        for (var N = [], Z = 0; Z < arguments.length; Z++) N[Z] = arguments[Z];
        var D, P;
        for (Z = 0; Z < N.length; Z++) {
            var Y = N[Z];
            !D && na.dT_.iIO(Y, 7) && (D = Y);
            !P && Y && "string" === typeof Y && (P = Y)
        }(D || P) && na.dT_.rex(D || P, void 0, !1, "2");
        return ra.apply(this, N)
    }

    function Va(N) {
        var Z;
        if (Z = "string" === typeof N.blockedURL && "string" === typeof N.documentURL && !!N.blockedURL && !!N.documentURL) Z = N.blockedURL, Z = !(null !== Z && void 0 !== Z && Z.includes(na.dT_.scv("reportUrl")));
        if (Z) {
            Z = [];
            for (var D in N) N[D] && "function" !== typeof N[D] && Z.push([D, N[D] + ""]);
            Z.length && na.dT_.cAE("_csprv_", Z, !0, void 0, 1)
        }
    }

    function Qa(N) {
        var Z;
        "securitypolicyviolation" === N.type && Va((Z = {}, Z.sourceFile = N.sourceFile, Z.blockedURL = N.blockedURI, Z.documentURL = N.documentURI, Z.referrer = N.referrer, Z.disposition = N.disposition, Z.effectiveDirective = N.effectiveDirective || N.violatedDirective, Z.originalPolicy = N.originalPolicy, Z.statusCode = N.statusCode, Z.lineNumber = N.lineNumber, Z.columnNumber = N.columnNumber, Z.sample =
            N.sample, Z))
    }

    function ab(N) {
        for (var Z = 0; Z < N.length; Z++) {
            var D = N[Z];
            "csp-violation" === D.type && (D = D.body) && Va(D)
        }
    }

    function vb(N) {
        N.reason && na.dT_.iIO(N.reason, 7) ? na.dT_.rex(N.reason, void 0, !0, "4") : N.detail && na.dT_.iIO(N.detail.reason, 7) && na.dT_.rex(N.detail.reason, void 0, !0, "4")
    }
    this.dT_ && dT_.prm && dT_.prm();
    var na = "undefined" !== typeof window ? window : self,
        ta = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        Ha;
    (Ha || (Ha = {})).ERROR_CALLBACK = "errorCallback";
    var Fa;
    (function(N) {
        N.ANGULAR =
            "5";
        N.CONSOLE = "2";
        N.CUSTOM = "0";
        N.PROMISE_REJECTION = "4";
        N.WINDOW_ONERROR = "1";
        N.XHR = "3"
    })(Fa || (Fa = {}));
    var pa, S, X, ua = !1,
        la = 0,
        fa = !0,
        Ga = {},
        Ma = 0,
        qa = (pa = {}, pa.errorCallback = function(N, Z, D, P, Y, ma) {
            return S.aWF(N, Z, D, P, Y, ma)
        }, pa),
        ra;
    (function() {
        var N, Z;
        if (ta.dT_ && (null === (Z = (N = na.dT_).smbi) || void 0 === Z ? 0 : Z.call(N, "q"))) {
            S = ta.dT_;
            if (!na.dT_.bcv("doel")) {
                ta.onerror !== La && (S.rxehandler = La, ta.onerror && (X = ta.onerror), ta.onerror = S.rxehandler);
                Ua();
                if (!ta.atob) fa = !1;
                else if (ta.ErrorEvent) try {
                    0 === (new ta.ErrorEvent("test")).colno &&
                        (fa = !1)
                } catch (P) {}
                fa && db()
            }
            na.dT_.bcv("lupr") && na.dT_.ael(ta, "unhandledrejection", vb);
            na.dT_.bcv("csprv") && (ta.ReportingObserver ? (new ta.ReportingObserver(ab, {
                buffered: !0,
                types: ["csp-violation"]
            })).observe() : na.dT_.gBI().ff && na.dT_.ael(document, "securitypolicyviolation", Qa));
            if (na.dT_.bcv("cce")) {
                var D;
                null !== (D = ta.console) && void 0 !== D && D.error && (ra = ta.console.error, ta.console.error = Ya)
            }
        }
    })()
})();
(function() {
    function La(I, ca, Ba, Da) {
        function za(Ja) {
            return Ja instanceof Ba ? Ja : new Ba(function(wa) {
                wa(Ja)
            })
        }
        return new(Ba || (Ba = Gc))(function(Ja, wa) {
            function Ka(lb) {
                try {
                    Ra(Da.next(lb))
                } catch (Yb) {
                    wa(Yb)
                }
            }

            function kb(lb) {
                try {
                    Ra(Da["throw"](lb))
                } catch (Yb) {
                    wa(Yb)
                }
            }

            function Ra(lb) {
                lb.done ? Ja(lb.value) : za(lb.value).then(Ka, kb)
            }
            Ra((Da = Da.apply(I, ca || [])).next())
        })
    }

    function gb(I, ca) {
        function Ba(Ra) {
            return function(lb) {
                return Da([Ra, lb])
            }
        }

        function Da(Ra) {
            if (Ja) throw new TypeError("Generator is already executing.");
            for (; kb && (kb = 0, Ra[0] && (za = 0)), za;) try {
                if (Ja = 1, wa && (Ka = Ra[0] & 2 ? wa["return"] : Ra[0] ? wa["throw"] || ((Ka = wa["return"]) && Ka.call(wa), 0) : wa.next) && !(Ka = Ka.call(wa, Ra[1])).done) return Ka;
                if (wa = 0, Ka) Ra = [Ra[0] & 2, Ka.value];
                switch (Ra[0]) {
                    case 0:
                    case 1:
                        Ka = Ra;
                        break;
                    case 4:
                        return za.label++, {
                            value: Ra[1],
                            done: !1
                        };
                    case 5:
                        za.label++;
                        wa = Ra[1];
                        Ra = [0];
                        continue;
                    case 7:
                        Ra = za.ia.pop();
                        za.H.pop();
                        continue;
                    default:
                        if (!(Ka = za.H, Ka = 0 < Ka.length && Ka[Ka.length - 1]) && (6 === Ra[0] || 2 === Ra[0])) {
                            za = 0;
                            continue
                        }
                        if (3 === Ra[0] && (!Ka || Ra[1] >
                                Ka[0] && Ra[1] < Ka[3])) za.label = Ra[1];
                        else if (6 === Ra[0] && za.label < Ka[1]) za.label = Ka[1], Ka = Ra;
                        else if (Ka && za.label < Ka[2]) za.label = Ka[2], za.ia.push(Ra);
                        else {
                            Ka[2] && za.ia.pop();
                            za.H.pop();
                            continue
                        }
                }
                Ra = ca.call(I, za)
            } catch (lb) {
                Ra = [6, lb], wa = 0
            } finally {
                Ja = Ka = 0
            }
            if (Ra[0] & 5) throw Ra[1];
            return {
                value: Ra[0] ? Ra[1] : void 0,
                done: !0
            }
        }
        var za = {
                label: 0,
                B: function() {
                    if (Ka[0] & 1) throw Ka[1];
                    return Ka[1]
                },
                H: [],
                ia: []
            },
            Ja, wa, Ka, kb;
        return kb = {
            next: Ba(0),
            "throw": Ba(1),
            "return": Ba(2)
        }, "function" === typeof Symbol && (kb[Symbol.iterator] =
            function() {
                return this
            }), kb
    }

    function ob(I, ca) {
        void 0 === ca && (ca = []);
        var Ba = Rb.dT_;
        Ba = (null === Ba || void 0 === Ba ? 0 : Ba.iIO) ? Ba.iIO : null;
        return !(null === Ba || void 0 === Ba || !Ba(I, ca))
    }

    function db(I, ca) {
        void 0 === ca && (ca = 0);
        return I.name + "_" + (I.startTime + ca) + "_" + I.duration
    }

    function eb() {
        try {
            performance.getEntries()[0].dt_test = !0, Cc = performance.getEntries()[0].dt_test, dc = function() {
                return !!Cc
            }
        } catch (I) {}
    }

    function Ta() {
        Qb = Rb.dT_;
        dc = hb.dT_.gBI().sf ? function() {
            return !1
        } : function() {
            eb();
            return !!Cc
        }
    }

    function Ua() {
        function I() {}
        if (!Kb) return !1;
        pc = Kb.getEntriesByType;
        Bb = Kb.getEntriesByName;
        Gb = Kb.setResourceTimingBufferSize;
        (F = Kb.clearResourceTimings) && (Kb.clearResourceTimings = I);
        Kb.webkitClearResourceTimings && (Kb.webkitClearResourceTimings = I);
        return !!pc && !!Bb && !!Gb && !!F
    }

    function Ya(I) {
        "function" === typeof Kb.addEventListener ? Kb.addEventListener("resourcetimingbufferfull", I) : "undefined" !== typeof Kb.onresourcetimingbufferfull && (ka = Kb.onresourcetimingbufferfull, Kb.onresourcetimingbufferfull = I)
    }

    function Va() {
        try {
            "function" ===
            typeof ka && ka.call(Kb, new Event("resourcetimingbufferfull", {
                bubbles: !0,
                cancelable: !0
            })), hb.dT_.st(function() {
                F.call(Kb)
            }, 0)
        } catch (I) {}
    }

    function Qa() {
        Kb = Rb.performance;
        var I = Ua();
        I && Gb.call(Kb, 1E3);
        return I
    }

    function ab(I) {
        var ca = I.detail;
        I = ca.a;
        if (ca = ca.e)
            for (var Ba = 0; Ba < ca.length; Ba++) {
                var Da = ca[Ba],
                    za = Da.url;
                if (za) {
                    var Ja = Da.relevance || 0;
                    Da = {
                        $a: Da.area,
                        imageWidth: Da.w,
                        imageHeight: Da.h,
                        Rc: Da.nw,
                        Qc: Da.nh,
                        Se: Da.o,
                        sd: Ja,
                        Kg: Da.ireason || 0,
                        D: I || 0
                    };
                    if (!Ea[za] || Ja > Ea[za].sd) Ea[za] = Da
                }
            }
    }

    function vb(I) {
        return !!I &&
            isFinite(I) && 0 < I
    }

    function na(I) {
        var ca = Ea[I.name];
        "undefined" !== typeof ca ? (I.relevantArea = ca.$a, I.relevance = ca.sd, I.vcIrrelevanceReason = ca.Kg, ca.Se && (I.onloadTime = ca.Se - Math.round(I.startTime) - hb.dT_.gto()), vb(ca.imageWidth) && vb(ca.imageHeight) && (I.imageWidth = ca.imageWidth, I.imageHeight = ca.imageHeight), vb(ca.Rc) && ca.Rc !== ca.imageWidth && (I.imageNaturalWidth = ca.Rc), vb(ca.Qc) && ca.Qc !== ca.imageHeight && (I.imageNaturalHeight = ca.Qc), delete Ea[I.name]) : I.relevance = 0
    }

    function ta() {
        return wb
    }

    function Ha(I) {
        w[db(I)] =
            I
    }

    function Fa(I) {
        J[db(I)] = I
    }

    function pa(I, ca, Ba) {
        return {
            get: function() {
                var Da = +I[Ba];
                return isNaN(Da) ? ca : Da + ca
            }
        }
    }

    function S(I, ca) {
        function Ba(Ka) {
            Ka in I && (za[Ka] = {
                get: function() {
                    return I[Ka]
                }
            })
        }
        if (0 >= ca) return I;
        var Da = w[db(I, ca)];
        if (Da) return Da;
        for (var za = {}, Ja = 0, wa = G; Ja < wa.length; Ja++) Da = wa[Ja], za[Da] = pa(I, ca, Da);
        ca = 0;
        for (Ja = T; ca < Ja.length; ca++) Da = Ja[ca], Ba(Da);
        Da = Object.create(I, za);
        Da._dtCl = !0;
        Ha(Da);
        return Da
    }

    function X() {
        var I = [],
            ca = document.getElementsByTagName("iframe");
        if (!ca.length) return I;
        for (var Ba = 0; Ba < ca.length; Ba++) {
            var Da = ca[Ba];
            try {
                var za = I,
                    Ja = za.concat;
                var wa = void 0,
                    Ka = Da.contentWindow;
                if (ha.has(Da)) var kb = ha.get(Da);
                else {
                    var Ra = tb;
                    ha.set(Da, Ra);
                    "undefined" !== typeof Da.src && (wb[Da.src] = Ra);
                    tb++;
                    kb = Ra
                }
                if (Ka.dT_) var lb = [];
                else {
                    Da = [];
                    var Yb = Ka.performance.getEntriesByType("resource"),
                        Ob = Kb.timeOrigin;
                    wa = Ob ? Ka.performance.timeOrigin - Ob : Ka.performance.timing.navigationStart - Kb.timing.navigationStart;
                    wa = Math.round(wa);
                    for (Ra = 0; Ra < Yb.length; Ra++) {
                        var Jb = S(Yb[Ra], wa);
                        Za[db(Jb)] || (Jb.frameId =
                            kb, Da.push(Jb))
                    }
                    lb = Da
                }
                I = Ja.call(za, lb)
            } catch (mc) {}
        }
        return I
    }

    function ua() {
        var I = [],
            ca = pc.call(Kb, "resource"),
            Ba = dc(),
            Da;
        if (Rb.frames && Rb.frames.length) {
            for (var za = [], Ja = 0; Ja < Rb.frames.length; Ja++) try {
                var wa = Rb.frames[Ja];
                wa.dT_ && (null === (Da = null === wa || void 0 === wa ? void 0 : wa.location) || void 0 === Da ? 0 : Da.href) && za.push(wa.location.href)
            } catch (Ka) {}
            Da = za
        } else Da = [];
        for (za = 0; za < ca.length; za++) {
            Ja = ca[za];
            Ba || ((wa = J[db(Ja)]) ? Ja = wa : Fa(Ja));
            if (!(wa = Za[db(Ja)])) a: {
                if (("iframe" === Ja.initiatorType || "subdocument" ===
                        Ja.initiatorType) && Da.length)
                    for (wa = 0; wa < Da.length; wa++)
                        if (Da[wa] === Ja.name) {
                            wa = !0;
                            break a
                        }
                wa = !1
            }
            wa || I.push(Ja)
        }
        return I
    }

    function la(I, ca) {
        if ("text/css" === ca.type) {
            var Ba = ca.href || "";
            var Da = ca.ownerNode;
            ca = Da && Da.nodeType && 1 === Da.nodeType ? ca.ownerNode : null
        } else Ba = ca.src;
        Ba && ca && (I[Ba] = ca);
        return I
    }

    function fa(I, ca) {
        return ca.D !== I && !ca.pf
    }

    function Ga(I, ca, Ba, Da, za, Ja) {
        return function(wa) {
            if (!Za[db(wa)]) try {
                var Ka = wa.name,
                    kb = (wa.workerNavigationStart || hb.dT_.gto()) + wa.startTime,
                    Ra = wa.name,
                    lb;
                if (!(lb =
                        Ra.includes(hb.dT_.scv("csu")) || Ra.includes("dtagent_") || Ra.includes("ampbf") && Ra.includes("flavor=amp"))) {
                    var Yb = Ra.includes,
                        Ob = hb.dT_.scv("reportUrl");
                    ic && Ob === Pb || (Pb = Ob, ic = hb.dT_.tau(Pb));
                    lb = Yb.call(Ra, ic)
                }
                var Jb;
                if (Jb = lb || wa.startTime > wa.responseEnd || 0 > wa.startTime ? !1 : !0) Jb = !(Ka.includes("chrome-extension://") || Ka.includes("chrome://") || Ka.includes("data:") || Ka.includes("javascript:") || Ka.includes("about:") || Ka.includes("res://"));
                if (Jb) {
                    Ka = kb - I;
                    var mc = Ea[wa.name],
                        Vc = wa.Pf || Infinity;
                    Vc = za ? Infinity :
                        Vc;
                    Ra = Qb;
                    if (I <= kb && kb <= ca + (Ra.syn ? 1E3 : hb.dT_.ncv("rtt")) && Vc >= Ka || mc && mc.D === +Ba && 0 < mc.sd) {
                        var pd = Da && wa.name.includes(Da);
                        kb = 3;
                        za ? kb = 1 : pd && (kb = 2);
                        wa.Fe && 3 !== wa.Fe || (wa.Pf = Ka, wa.Fe = kb, wa.cf = Ja, wa.actionId = Ba)
                    }
                }
            } catch (qd) {}
        }
    }

    function Ma(I, ca, Ba) {
        return La(this, void 0, void 0, function() {
            var Da, za, Ja;
            return gb(this, function(wa) {
                switch (wa.label) {
                    case 0:
                        ia = hb.dT_.aFr(ia, fa.bind(null, I)), Da = 0, za = ia, wa.label = 1;
                    case 1:
                        if (!(Da < za.length)) return [3, 4];
                        Ja = za[Da];
                        return [4, qa(Ja, Ja.start, ca, !1, Ba)];
                    case 2:
                        wa.B(),
                            Ja.pf = !0, wa.label = 3;
                    case 3:
                        return Da++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function qa(I, ca, Ba, Da, za) {
        var Ja = I.D,
            wa = I.df,
            Ka = I.xhrUrl,
            kb = I.start;
        return La(this, void 0, void 0, function() {
            var Ra, lb, Yb, Ob;
            return gb(this, function(Jb) {
                switch (Jb.label) {
                    case 0:
                        return Ra = hb.dT_.lAID(), lb = Ja === Ra, Yb = Ga(kb, ca, Ja, Ka, lb, wa), [4, hb.dT_.fEP(za, Yb, void 0, !Ba)];
                    case 1:
                        Jb.B();
                        if (!Da) return [2];
                        Ob = H[wa];
                        Ob.count--;
                        !Ob.count && Ob.Lb.includes(wa) && hb.dT_.sMPS(1);
                        return [2]
                }
            })
        })
    }

    function ra() {
        for (var I = 0, ca = hb.dT_.oK(Na); I < ca.length; I++) {
            var Ba =
                Na[+ca[I]];
            hb.dT_.ct(Ba.qa);
            Ba.Ka(!0)
        }
        Na = {}
    }

    function N(I, ca, Ba, Da) {
        var za = H[Ba];
        za || (za = {
            count: 0,
            Lb: []
        });
        za.count++;
        za.Lb.push(I);
        H[Ba] = za;
        ia.push({
            D: I,
            start: ca,
            df: Ba,
            xhrUrl: Da,
            pf: !1
        })
    }

    function Z() {
        H = {};
        Na = {};
        ia = [];
        var I = hb.dT_.lAID();
        N(I, hb.dT_.lst(), I);
        hb.dT_.addE("ACTION_ENTERED", D);
        hb.dT_.addE("ACTION_SENT", P)
    }

    function D(I) {
        var ca = I.detail;
        I = ca.x;
        var Ba = ca.i,
            Da = ca.a,
            za = ca.r;
        Ia.includes(ca.t) || (ca = hb.dT_.lAID(), za === ca && za !== Ba || N(Ba, Da, za, I))
    }

    function P(I) {
        return La(this, void 0, void 0, function() {
            function ca(Jb) {
                return La(this,
                    void 0, void 0,
                    function() {
                        var mc;
                        return gb(this, function(Vc) {
                            switch (Vc.label) {
                                case 0:
                                    return mc = Array.prototype.concat(X(), ua(), B), [4, Ma(Ja, !0, mc)];
                                case 1:
                                    return Vc.B(), [4, qa({
                                        D: Ja,
                                        df: Ra,
                                        xhrUrl: Da,
                                        start: wa
                                    }, Ka, Jb, !0, mc)];
                                case 2:
                                    return Vc.B(), [2]
                            }
                        })
                    })
            }
            var Ba, Da, za, Ja, wa, Ka, kb, Ra, lb, Yb, Ob;
            return gb(this, function(Jb) {
                switch (Jb.label) {
                    case 0:
                        Ba = I.detail;
                        Da = Ba.x;
                        za = Ba.t;
                        Ja = Ba.i;
                        wa = Ba.a;
                        Ka = Ba.s;
                        kb = Ba.f;
                        Ra = Ba.r;
                        (lb = Ba.rt) && Fa(lb);
                        if (Ia.includes(za)) return [2];
                        Yb = hb.dT_.lAID();
                        return Ra === Yb && Ra !== Ja ? [2] : kb ? [4, ca(kb)] : [3, 2];
                    case 1:
                        return Jb.B(), [3, 3];
                    case 2:
                        Ob = hb.dT_.st(function() {
                            delete Na[Ja];
                            ca(kb)
                        }, 2E3), Na[Ja] = {
                            qa: Ob,
                            Ka: ca
                        }, Jb.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }

    function Y(I) {
        var ca;
        if (ca = "number" === typeof I.cf) {
            var Ba;
            ca = 0 === (null === (Ba = H[I.cf]) || void 0 === Ba ? void 0 : Ba.count)
        }
        return ca
    }

    function ma(I) {
        var ca = [],
            Ba = 0,
            Da = [];
        for (wa in H) {
            var za;
            if (za = hb.dT_.oHOP(H, wa)) {
                za = +wa;
                var Ja = H[za];
                za = !Na[za] && (!Ja || !Ja.count && Ja.Lb.includes(za))
            }
            za && Da.push.apply(Da, H[wa].Lb)
        }
        for (; Ba < Da.length; Ba++) {
            var wa = +Da[Ba];
            Ja = za = I[wa] || [];
            var Ka = wa,
                kb = Qb;
            if (!kb.syn && kb.gLVD) {
                var Ra = 0;
                for (Ka = kb.gUI(Ka); Ra < Ka.length; Ra++) {
                    kb = Ka[Ra];
                    for (var lb = !1, Yb = 0, Ob = Ja; Yb < Ob.length; Yb++) {
                        var Jb = Ob[Yb];
                        if (!Jb.failedResource && Jb.name === kb.name) {
                            Jb.failedResource = kb.failedResource;
                            lb = !0;
                            break
                        }
                    }
                    lb || (na(kb), Ja.push(kb))
                }
            }
            ca.push({
                resources: za,
                actionId: wa
            });
            delete H[wa]
        }
        return ca
    }

    function ea(I) {
        I && ra();
        I = hb.dT_.aFr(Array.prototype.concat(X(), ua(), B), Y);
        var ca = hb.dT_.red(Array.prototype.concat(Array.prototype.slice.call(document.scripts),
            Array.prototype.slice.call(document.styleSheets)), la, {});
        I = hb.dT_.red(I, function(Ba, Da) {
            var za = Da.actionId,
                Ja = Ba[za];
            Ja || (Ja = []);
            var wa = ca[Da.name];
            if (wa) {
                if (wa && "LINK" === wa.nodeName) {
                    var Ka = wa.media || "all";
                    wa = "stylesheet" === wa.rel && window.matchMedia(Ka).matches && !wa.disabled
                } else wa = !wa.hasAttribute("async") && !wa.hasAttribute("defer") && "module" !== wa.getAttribute("type");
                Da.isCritical = +wa
            }
            na(Da);
            Ja.push(Da);
            Ba[za] = Ja;
            Za[db(Da)] = !0;
            return Ba
        }, {});
        I = ma(I);
        900 < pc.call(Kb, "resource").length && (Va(), Za = {}, w = {}, J = {}, B = [], Ea = {});
        return I
    }

    function U(I) {
        return od && ob(I, 13) && "navigation" !== I.entryType || ob(I, ["_dtCl"])
    }

    function va(I) {
        I.includes("ScriptResource.axd") ? I = "js" : (I = I.substring(1 + I.lastIndexOf("/")), 0 < I.indexOf("?") && (I = I.split("?")[0]), 0 < I.indexOf("#") && (I = I.split("#")[0]), I = 0 < I.indexOf(".") ? I.substring(I.lastIndexOf(".") + 1) : "-");
        switch (I) {
            case "js":
                return "s";
            case "gif":
            case "png":
            case "jpg":
            case "jpeg":
            case "ico":
            case "tiff":
            case "bmp":
            case "xbm":
            case "svg":
                return "i";
            case "css":
                return "c";
            default:
                return "o"
        }
    }

    function Sa(I) {
        I = Lc() + I.startTime;
        I -= qb();
        return Math.round(I)
    }

    function bb(I, ca, Ba, Da) {
        var za = I.resources;
        I = I.actionId;
        if (nc().op) {
            for (var Ja = [], wa = {}, Ka = 0; Ka < za.length; Ka++) {
                var kb = za[Ka];
                wa[kb.name] || (Ja.push(kb), wa[kb.name] = !0)
            }
            za = Ja
        }
        Ja = [];
        wa = 0;
        for (Ka = za; wa < Ka.length; wa++) {
            kb = Ja;
            var Ra = kb.push,
                lb = Ka[wa],
                Yb = va(lb.name.toLowerCase()),
                Ob = lb,
                Jb = Ob.duration;
            !Jb && U(Ob) && (Jb = Ob.responseEnd - Ob.startTime);
            Ob = Jb ? Math.round(Jb) : 0;
            Jb = Sa(lb);
            var mc = lb;
            U(mc) && 0 < mc.responseEnd ? (mc = Lc() + mc.responseEnd,
                mc -= qb(), mc = Math.round(mc)) : mc = Math.round(Ib() - qb());
            Ob = {
                duration: Ob,
                start: Jb,
                stop: mc
            };
            Jb = lb.name;
            mc = ub(lb.name);
            var Vc = Sa(lb) <= zb() ? "_load_" : "-",
                pd = 0 === lb.responseEnd,
                qd = lb.failedResource ? !1 : 0 < lb.responseEnd;
            lb = nc().ch ? 0 !== lb.domainLookupStart && 0 === lb.requestStart : ub(lb.name) !== Jd && 0 === lb.requestStart && 2 > lb.duration ? !0 : 0 >= lb.responseEnd ? !1 : lb.requestStart === lb.fetchStart && lb.requestStart === lb.responseStart && lb.responseStart !== lb.responseEnd;
            Ra.call(kb, {
                type: Yb,
                Cj: Ob,
                url: Jb,
                domain: mc,
                ni: Vc,
                hj: pd,
                Tj: qd,
                Ai: lb,
                cj: !1
            })
        }
        Wb(ca, I, Ja, za, Ba, Da)
    }

    function Db(I, ca, Ba, Da, za) {
        var Ja = za || Lc();
        if (!I.length || 0 >= Ja) Ba("");
        else {
            var wa = [];
            Ab(I, function(Ka) {
                if (Mc && wa.length / 2 >= Mc) Ka = !1;
                else {
                    var kb = Ka.startTime,
                        Ra;
                    if (Ra = !(kb < ("iframe" === Ka.initiatorType ? 1 : 0))) Ra = Ka.actionId, Ra = !Ra || Ra === ca;
                    Ra && (kb = kb ? ["b", Math.round(kb)] : [], Ca(Ka, kb, Lc()), wa.push(de(Ka.name), kb.join("")));
                    Ka = !0
                }
                return Ka
            }, void 0, function() {
                Ba(rb("".concat(ca || Kc(), "-").concat(Math.round(Ja), ";").concat(wa.join("|"))))
            }, !Da)
        }
    }

    function Wb(I, ca,
        Ba, Da, za, Ja) {
        Db(Da, ca, function(wa) {
            wa && I.bf.push(wa);
            za()
        }, Ja)
    }

    function oa(I, ca, Ba, Da) {
        if (hb.dT_.las()) {
            var za = zb();
            !Ba && (0 >= za || 3E3 > Ib() - za) ? (hb.dT_.sMPS(2E3), za = !1) : za = !0
        } else za = !1;
        if (za && !ca) {
            Eb(ea(Ba), Ba);
            !ya.length || hb.dT_.last() + 3E4 <= Ib() && hb.dT_.last() ? (ya = [], ca = void 0) : ca = ya.splice(0, 1)[0];
            if (ca)
                for (ca = ca.bf, Ba = 0; Ba < ca.length; Ba++) I.av(Da, "rt", ca[Ba], !0, Ba);
            ya.length && hb.dT_.sMPS(100)
        }
    }

    function Eb(I, ca) {
        for (var Ba = {
                bf: [],
                resourceSummaries: []
            }, Da = I.length, za = 0, Ja = 0; Ja < I.length; Ja++) bb(I[Ja],
            Ba,
            function() {
                za++;
                za === Da && (ya.push(Ba), hb.dT_.sMPS(0))
            }, ca)
    }

    function wc(I) {
        Ca = I.snt;
        rb = I.esc;
        Ab = I.fE;
        qb = I.lst;
        Ib = I.nw;
        zb = I.gLAet;
        ub = I.gh;
        Sb = I.loc;
        nc = I.gBI;
        Kc = I.lAID;
        de = I.aur;
        Hc = I.stcv;
        Lc = I.gto;
        I = Qb;
        Mc = hb.dT_.ncv("rtl");
        I.syn && (Mc = 0, Hc("rtp", 1), Hc("rtu", 800));
        Jd = ub(Sb());
        I = Rb.performance;
        0 < ((null === I || void 0 === I ? void 0 : I.timeOrigin) || (null === I || void 0 === I ? void 0 : I.timing.navigationStart)) && hb.dT_.aBPSL(oa)
    }
    var Gc = this.dT_ && dT_.prm && dT_.prm() || window.Promise,
        hb = "undefined" !== typeof window ? window :
        self,
        Rb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        ec;
    (function(I) {
        I.ANCHOR = "A";
        I.BUTTON = "BUTTON";
        I.FORM = "FORM";
        I.I_FRAME = "IFRAME";
        I.IMAGE = "IMG";
        I.INPUT = "INPUT";
        I.LABEL = "LABEL";
        I.LINK = "LINK";
        I.OPTION = "OPTION";
        I.SCRIPT = "SCRIPT";
        I.SELECT = "SELECT";
        I.STYLE = "STYLE";
        I.TEXT_AREA = "TEXTAREA"
    })(ec || (ec = {}));
    var Qb, Cc, dc, ic, Pb, Kb, Gb, pc, Bb, F, ka, Ea = {},
        ha, wb = {},
        tb = 0,
        Za = {},
        w = {},
        B = [],
        J = {},
        G = "connectEnd connectStart domainLookupEnd domainLookupStart fetchStart redirectEnd redirectStart requestStart responseEnd responseStart secureConnectionStart startTime workerStart".split(" "),
        T = "name duration transferSize decodedBodySize encodedBodySize entryType initiatorType nextHopProtocol serverTiming transferSize responseStatus".split(" "),
        H = {},
        Na = {},
        ia = [],
        Ia = "_error_ _ts_ _code_ _debug_ _emu_ _location_ _stack_ _useraction_ _source_ _istack_ _type_ _log_ _rs_ _endVisit_ - _t_".split(" "),
        Ca, rb, Ab, qb, zb, Ib, ub, Sb, nc, Kc, de, Hc, Lc, Mc, Jd, od = "function" === typeof PerformanceResourceTiming || "object" === typeof PerformanceResourceTiming,
        ya = [];
    (function() {
        var I, ca, Ba = Rb.dT_;
        if (!Ba || null === (ca =
                (I = hb.dT_).ssmbi) || void 0 === ca || !ca.call(I, "r", !1, !0) || Rb.gi) return !1;
        Ta();
        if (!Qa()) return !1;
        wc(Ba);
        Z();
        wb = {};
        ha = new WeakMap;
        tb = 0;
        Ea = {};
        Za = {};
        w = {};
        J = {};
        B = [];
        Ya(function() {
            B = ua()
        });
        hb.dT_.addE("VISUALLY_COMPLETE", ab);
        return !0
    })() && (Qb.gFU = ta)
})();
(function() {
    function La(U) {
        S.dT_.addE && S.dT_.addE("CONFIG_UPDATE", U)
    }

    function gb() {
        (la = S.dT_.bcv("uxdce")) && (fa = S.dT_.ncv("uxdcw"))
    }

    function ob() {
        (Ma = S.dT_.aO("deadClickObserver", Ta)) && Ma.observe(document.documentElement, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        });
        Ma && (S.dT_.aBPSL(eb), S.dT_.ael(document, "click", db), ra = !0)
    }

    function db() {
        var U = S.dT_.nw();
        S.dT_.st(function() {
            Ga < U && (qa.push({
                time: Math.round(U)
            }), S.dT_.sMPS(2E3))
        }, fa)
    }

    function eb(U, va, Sa, bb) {
        if (0 !== qa.length) {
            va = U.av;
            Sa =
                qa;
            for (var Db = [], Wb = 0; Wb < Sa.length; Wb++) Db.push(Sa[Wb].time.toFixed());
            va.call(U, bb, "dC", Db.join(","), !0);
            qa = []
        }
    }

    function Ta(U) {
        for (var va = U.length; va--;) {
            var Sa = U[va].target,
                bb = Sa,
                Db = void 0,
                Wb = bb,
                oa = 9;
            void 0 === oa && (oa = []);
            var Eb = X.dT_;
            if (Eb = (!(null === (Db = (null === Eb || void 0 === Eb ? 0 : Eb.iIO) ? Eb.iIO : null) || void 0 === Db || !Db(Wb, oa)) || bb && bb.nodeType && 1 === bb.nodeType) && ("string" === typeof bb.textContent || "string" === typeof bb.innerText)) Sa = Sa.getBoundingClientRect(), Eb = !(0 > Sa.right || Sa.left > (window.innerWidth ||
                document.documentElement.clientWidth) || 0 > Sa.bottom || Sa.top > (window.innerHeight || document.documentElement.clientHeight));
            if (Eb) {
                Ga = S.dT_.nw();
                break
            }
        }
    }

    function Ua() {
        gb();
        la && !ra ? ob() : !la && ra && (S.dT_.rBPSL(eb), S.dT_.rO("deadClickObserver"), S.dT_.rel(document, "click", db, void 0), qa = [], ra = !1, Ga = -1)
    }

    function Ya() {
        if (N = S.dT_.bcv("uxrgce")) {
            var U = S.dT_.scv("uxrgcm").split(";"),
                va = U[1];
            Z = Va(U[0]);
            Va(va)
        }
    }

    function Va(U) {
        U = U.split(",");
        return {
            Di: +U[0] || 100,
            Mi: +U[1] || 25,
            ci: +U[2] || 300,
            Yh: +U[3] || 3
        }
    }

    function Qa(U) {
        return {
            x: U.x ||
                U.clientX,
            y: U.y || U.clientY,
            timeStamp: S.dT_.nw()
        }
    }

    function ab() {
        S.dT_.iMD() || (S.dT_.aBPSL(ta), S.dT_.ael(document, "click", na), S.dT_.ael(document, "mousedown", vb), D = !0)
    }

    function vb(U) {
        Y = Qa(U)
    }

    function na(U) {
        U = Qa(U);
        if (0 === ma.length) ma.push(U);
        else {
            var va = ma[0],
                Sa = ma[ma.length - 1];
            if (Sa = U && Sa ? U.timeStamp - Sa.timeStamp <= Z.ci : !1) Sa = Z.Mi, Sa = Math.abs(va.x - U.x) <= Sa && Math.abs(va.y - U.y) <= Sa;
            Sa && U && Y && U.timeStamp - Y.timeStamp <= Z.Di ? (ma.push(U), Ha()) : (ma.length >= Z.Yh && Fa(), ma = [U])
        }
    }

    function ta(U, va, Sa, bb) {
        if (0 !==
            ea.length) {
            va = U.av;
            Sa = ea;
            for (var Db = [], Wb = 0; Wb < Sa.length; Wb++) {
                var oa = Sa[Wb];
                Db.push(oa.Ei + "|" + oa.$h.toFixed() + "|" + oa.duration.toFixed())
            }
            va.call(U, bb, "rC", Db.join(","), !0);
            ea = []
        }
    }

    function Ha() {
        S.dT_.ct(P);
        P = S.dT_.st(function() {
            ma.length >= Z.Yh && Fa()
        }, Z.ci)
    }

    function Fa() {
        var U = ma[0];
        U = {
            Ei: ma.length,
            $h: Math.round(U.timeStamp),
            duration: Math.round(ma[ma.length - 1].timeStamp - U.timeStamp)
        };
        0 < U.$h && 0 < U.duration && (ea.push(U), S.dT_.sMPS(2E3));
        ma = []
    }

    function pa() {
        Ya();
        N && !D ? ab() : !N && D && (S.dT_.rBPSL(ta), S.dT_.rel(document,
            "click", na, void 0), S.dT_.rel(document, "mousedown", vb, void 0), ma = [], ea = [], D = !1)
    }
    this.dT_ && dT_.prm && dT_.prm();
    var S = "undefined" !== typeof window ? window : self,
        X = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        ua;
    (function(U) {
        U.ANCHOR = "A";
        U.BUTTON = "BUTTON";
        U.FORM = "FORM";
        U.I_FRAME = "IFRAME";
        U.IMAGE = "IMG";
        U.INPUT = "INPUT";
        U.LABEL = "LABEL";
        U.LINK = "LINK";
        U.OPTION = "OPTION";
        U.SCRIPT = "SCRIPT";
        U.SELECT = "SELECT";
        U.STYLE = "STYLE";
        U.TEXT_AREA = "TEXTAREA"
    })(ua || (ua = {}));
    var la, fa, Ga = -1,
        Ma, qa = [],
        ra = !1,
        N, Z, D = !1,
        P, Y, ma = [],
        ea = [];
    (function() {
        var U, va;
        return X.dT_ && (null === (va = (U = S.dT_).smbi) || void 0 === va ? void 0 : va.call(U, "u"))
    })() && (Ya(), N && ab(), La(pa), gb(), la && ob(), La(Ua))
})();
(function() {
    function La(w, B, J) {
        if (J || 2 === arguments.length)
            for (var G = 0, T = B.length, H; G < T; G++) !H && G in B || (H || (H = Array.prototype.slice.call(B, 0, G)), H[G] = B[G]);
        return w.concat(H || Array.prototype.slice.call(B))
    }

    function gb() {}

    function ob(w) {
        if (dc)
            for (var B = 0, J = ic; B < J.length; B++) {
                var G = J[B];
                ec.includes(G) || oa.dT_.iNF(w[G]) || ec.splice(0, 0, G)
            }
    }

    function db(w, B) {
        var J = !1;
        try {
            J = !oa.dT_.iNF(w)
        } catch (T) {}
        if (!J)
            for (var G = 0; G < B.length && !(J = (J = w.prototype[B[G]]) && !oa.dT_.iNF(J)); G++);
        return J ? (oa.dT_.addE("DEBUG_INFO_REQUESTED",
            function() {
                return [{
                    type: "lxw",
                    text: "Found a non-native XMLHttpRequest or EventTarget object before initializing! Basic XHR is operating in late mode.",
                    severity: "Warning"
                }]
            }), !0) : !1
    }

    function eb(w) {
        if (!w) return {};
        w = w.replace(/^\s+|\s+$/g, "").split(/[\r\n]+/);
        var B = {};
        oa.dT_.fE(w, function(J) {
            J = J.split(": ");
            var G = J.shift();
            G && (B[G] = J.join(": "))
        });
        return B
    }

    function Ta(w) {
        return (w = w.toString().match(/\[object (XMLHttpRequest)?(\w+)]/)) && w[2] && "Object" !== w[2] && "function" === typeof Eb[w[2]] ? w[2] : "Event"
    }

    function Ua(w, B) {
        w = w.dtProps.ta;
        var J = [];
        B = B.substring(2);
        for (var G = 0; G < w.length; G++) {
            var T = w[G];
            T[0] === B && J.push(T[1])
        }
        return J
    }

    function Ya(w, B, J) {
        function G(Ca) {
            function rb(Ab, qb) {
                try {
                    J ? (oa.dT_.ec(J.dtProps.Z), J.dtProps.Pa++) : (oa.dT_.ec(w.dtProps.Z), w.dtProps.Pa++), "object" === typeof qb && qb.handleEvent ? Bb.handleEventCallback(qb.handleEvent, qb, Ab) : Bb.handleEventCallback(qb, w, Ab)
                } finally {
                    J ? (J.dtProps.Pa--, oa.dT_.lc(J.dtProps.Z)) : (w.dtProps.Pa--, oa.dT_.lc(w.dtProps.Z))
                }
            }
            B[Ca] = function(Ab) {
                var qb = Array.prototype.slice.call(arguments);
                if (0 < qb.length) {
                    var zb = Qa(Ab, w);
                    oa.dT_.fE(wc, function(Sb) {
                        "undefined" !== typeof Ab[Sb] && (zb[Sb] = Ab[Sb])
                    });
                    qb[0] = zb
                }
                if (oa.dT_.mx() && Ca in H) H[Ca](T.Z);
                var Ib = w.dtProps[Ca] || dc && w[Ca];
                Ib && rb(qb, Ib);
                Ib = 0;
                for (var ub = Ua(w, Ca); Ib < ub.length; Ib++) rb(qb, ub[Ib]);
                "onloadend" === Ca && w instanceof Ea && na(T, w)
            }
        }
        var T = J ? J.dtProps : w.dtProps;
        for (var H = {
                onerror: function() {
                    T.ga = !0;
                    J ? oa.dT_.mxg("Upload failure", T.Z) : oa.dT_.mxf(T.G.status, T.G.statusText, T.Z)
                },
                onabort: function(Ca) {
                    Ca = oa.dT_.mxc(Ca);
                    T.ga = !0;
                    T.da = "abort";
                    return Ca
                },
                ontimeout: function(Ca) {
                    Ca = oa.dT_.mxt(Ca);
                    T.ga = !0;
                    T.da = "abort";
                    return Ca
                }
            }, Na = 0, ia = Gc; Na < ia.length; Na++) {
            var Ia = ia[Na];
            try {
                if (Ia in B || dc && Ia in w) oa.dT_.bcv("raxeh") ? G(Ia) : (Ua(w, Ia).length || w[Ia]) && G(Ia)
            } catch (Ca) {}
        }
    }

    function Va(w, B, J) {
        Object.defineProperty(w, B, {
            enumerable: !0,
            get: J
        })
    }

    function Qa(w, B) {
        var J = w.timeStamp || oa.dT_.nw(),
            G = "undefined" === typeof w.eventPhase ? 2 : w.eventPhase,
            T = w.stopPropagation || gb,
            H = w.stopImmediatePropagation || gb,
            Na = w.preventDefault || gb,
            ia = w.initEvent || gb,
            Ia = Ta(w);
        try {
            var Ca =
                ab(Ia, w);
            Va(Ca, "target", function() {
                return B
            });
            Va(Ca, "currentTarget", function() {
                return B
            });
            Va(Ca, "srcElement", function() {
                return B
            });
            Va(Ca, "eventPhase", function() {
                return G
            });
            Va(Ca, "timeStamp", function() {
                return J
            });
            Va(Ca, "stopPropagation", function() {
                return T
            });
            Va(Ca, "stopImmediatePropagation", function() {
                return H
            });
            Va(Ca, "preventDefault", function() {
                return Na
            });
            Va(Ca, "initEvent", function() {
                return ia
            });
            return Ca
        } catch (rb) {}
        return {
            type: w.type,
            target: B,
            currentTarget: B,
            srcElement: B,
            eventPhase: G,
            bubbles: w.bubbles ||
                !1,
            cancelable: w.cancelable || !1,
            timeStamp: J,
            stopPropagation: T,
            stopImmediatePropagation: H,
            preventDefault: Na,
            initEvent: ia
        }
    }

    function ab(w, B) {
        var J = new Eb[w](B.type, B);
        "ProgressEvent" === w && vb(J, B);
        return J
    }

    function vb(w, B) {
        Va(w, "total", function() {
            return B.total
        });
        Va(w, "loaded", function() {
            return B.loaded
        })
    }

    function na(w, B, J) {
        var G, T;
        oa.dT_.disE((G = {}, G.kind = "REQUEST_COMPLETED", G.detail = (T = {}, T.i = "xmlhttprequest", T.x = w.url, T.m = w.method, T.c = B.status, T.s = B.statusText, T.a = J, T.e = oa.dT_.nw(), T.r = oa.dT_.gRT(w.url,
            "xmlhttprequest", w.requestStart, oa.dT_.nw()) || void 0, T.q = w.requestStart, T.o = w.da, T.t = w.ga, T.n = w.Qa, T), G))
    }

    function ta(w, B) {
        var J, G, T = B.Z,
            H = w.status;
        try {
            var Na = Za;
            if (Na.gEMD && Na.iRHCA && Na.iRHCA()) {
                var ia = eb(w.getAllResponseHeaders());
                oa.dT_.disE((J = {}, J.kind = "HTTP_RESPONSE", J.detail = (G = {}, G.a = T, G.h = ia, G), J))
            }
        } catch (Ia) {}
        200 !== H && oa.dT_.mx() && (B.ga = !0, 0 === H ? (B.da || (B.da = "abort"), oa.dT_.st(function() {
            oa.dT_.mxc(T)
        }, 0)) : oa.dT_.mxf(H, w.statusText, T));
        oa.dT_.lx(T, void 0, "x");
        B.Z = 0
    }

    function Ha(w, B) {
        try {
            var J =
                Object.getPrototypeOf(w),
                G = Object.getPrototypeOf(w.dtProps.G);
            G || (G = Gb.prototype);
            return J && G && !pc.has(J[B]) ? J[B] : null
        } catch (T) {
            return null
        }
    }

    function Fa(w) {
        return oa.dT_.iIO(w, ["dtProps"])
    }

    function pa(w) {
        w.UNSENT = 0;
        w.OPENED = 1;
        w.HEADERS_RECEIVED = 2;
        w.LOADING = 3;
        w.DONE = 4
    }

    function S(w) {
        "upload" === w ? Object.defineProperty(Eb.XMLHttpRequest.prototype, "upload", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                if (!this.dtProps.zb) return Gb.prototype.upload;
                this.dtProps.upload || (this.dtProps.upload = new F(this));
                return this.dtProps.upload
            }
        }) : Object.defineProperty(Eb.XMLHttpRequest.prototype, w, {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return this.dtProps.zb ? 0 <= hb.indexOf(w) ? this.dtProps.G[w] : this.dtProps[w] : Gb.prototype[w]
            },
            set: function(B) {
                this.dtProps.zb ? this.dtProps[w] = B : Gb.prototype[w] = B
            }
        })
    }

    function X(w, B) {
        var J = Eb.XMLHttpRequest.prototype[w];
        if (B || oa.dT_.iNF(J)) Eb.XMLHttpRequest.prototype[w] = function(G, T) {
            function H() {
                if (Fa(this)) {
                    "open" !== G || this.dtProps.url || (this.dtProps.url = arguments[1] + "");
                    this.dtProps.G.withCredentials !==
                        this.dtProps.withCredentials && (this.dtProps.G.withCredentials = this.dtProps.withCredentials);
                    var Na = this.dtProps.G
                } else Na = this;
                return Bb.XMLHttpRequestCallback(T, Na, arguments)
            }
            pc.set(H, !0);
            return H
        }(w, Gb.prototype[w])
    }

    function ua() {
        Gb = Eb.XMLHttpRequest;
        Kb = Za.ct || clearTimeout;
        Eb.XMLHttpRequest = Ea;
        dc = db(Gb, ec);
        Ea.prototype = Object.create(Gb.prototype, Object.getOwnPropertyDescriptors(Gb.prototype));
        Ea.prototype.dtProps = {
            zb: !1
        };
        Ea.prototype.dtProps.zb = !1;
        pa(Ea);
        pa(Ea.prototype);
        ob(Gb.prototype);
        for (var w in Gb.prototype)
            if (-1 ===
                Qb.indexOf(w) || -1 !== ec.indexOf(w)) try {
                -1 !== ec.indexOf(w) ? X(w, !0) : -1 !== Rb.indexOf(w) ? S(w) : Eb.XMLHttpRequest.prototype[w] = Gb.prototype[w]
            } catch (J) {
                S(w)
            }
        for (var B in Gb)
            if (!(B in Gb.prototype)) try {
                Eb.XMLHttpRequest[B] = Gb[B]
            } catch (J) {}
        try {
            la()
        } catch (J) {}
    }

    function la() {
        if (!oa.dT_.bcv("peti")) {
            var w = EventTarget.prototype,
                B = w.addEventListener;
            w.addEventListener = function(T, H, Na) {
                if (Fa(this)) this.dtProps.Od(T, H, Na);
                else return Bb.AELWrapper(B, this, arguments)
            };
            var J = w.removeEventListener;
            w.removeEventListener =
                function(T, H, Na) {
                    if (Fa(this)) this.dtProps.$e(T, H, Na);
                    else return Bb.RELWrapper(J, this, arguments)
                };
            var G = w.dispatchEvent;
            w.dispatchEvent = function(T) {
                return Fa(this) ? this.dtProps.Ic(T) : Bb.dispatchWrapper(G, this, arguments)
            }
        }
    }

    function fa(w, B) {
        return new ha(w, B)
    }

    function Ga(w) {
        return "string" === typeof w
    }

    function Ma(w) {
        w.Yc || (oa.dT_.lx(w.D, void 0, "x"), w.Yc = !0)
    }

    function qa(w) {
        var B = w.D,
            J = w.url;
        return Za.aWF(w.xa, w.context, w.va, void 0 === B ? 0 : B, void 0 === J ? "" : J, "x")
    }

    function ra(w, B, J) {
        return function() {
            for (var G = [], T = 0; T < arguments.length; T++) G[T] = arguments[T];
            T = w.D;
            var H = w.url;
            try {
                if (w.Dc = oa.dT_.nw(), oa.dT_.ec(T), "function" === typeof B) return qa({
                    xa: B,
                    context: J,
                    va: G,
                    D: T,
                    url: H
                })
            } finally {
                oa.dT_.lc(T), Ma(w)
            }
        }
    }

    function N(w, B, J, G) {
        return function() {
            for (var T = [], H = 0; H < arguments.length; H++) T[H] = arguments[H];
            try {
                oa.dT_.ec(w.D);
                var Na = T[0],
                    ia = Ta(Na),
                    Ia = new Eb[ia](Na.type, Na);
                Z(Na, G, Ia);
                T[0] = Ia;
                if ("function" === typeof B) return qa({
                    xa: B,
                    context: Na.target,
                    va: T,
                    D: w.D,
                    url: w.url
                })
            } finally {
                oa.dT_.lc(w.D)
            }
        }
    }

    function Z(w, B,
        J) {
        B = D(w, "target", B);
        Object.defineProperties(J, {
            target: B,
            currentTarget: B,
            srcElement: B,
            stopPropagation: D(w, "stopPropagation", function() {
                for (var G = [], T = 0; T < arguments.length; T++) G[T] = arguments[T];
                Event.prototype.stopPropagation.apply(w, G);
                return Event.prototype.stopPropagation.apply(J, G)
            }),
            stopImmediatePropagation: D(w, "stopImmediatePropagation", function() {
                for (var G = [], T = 0; T < arguments.length; T++) G[T] = arguments[T];
                Event.prototype.stopImmediatePropagation.apply(w, G);
                return Event.prototype.stopImmediatePropagation.apply(J,
                    G)
            }),
            preventDefault: D(w, "preventDefault", function() {
                for (var G = [], T = 0; T < arguments.length; T++) G[T] = arguments[T];
                Event.prototype.preventDefault.apply(w, G);
                return Event.prototype.preventDefault.apply(J, G)
            }),
            eventPhase: D(w, "eventPhase", "undefined" === typeof w.eventPhase ? 2 : void 0),
            timeStamp: D(w, "timeStamp", w.timeStamp || oa.dT_.nw()),
            initEvent: D(w, "initEvent")
        })
    }

    function D(w, B, J) {
        return {
            get: function() {
                return J || w[B]
            },
            enumerable: !0
        }
    }

    function P(w, B, J) {
        return function() {
            for (var G, T, H = [], Na = 0; Na < arguments.length; Na++) H[Na] =
                arguments[Na];
            try {
                if (Na = Za, Na.gEMD && Na.iRHCA && Na.iRHCA() && J.readyState === J.HEADERS_RECEIVED) {
                    var ia = eb(J.getAllResponseHeaders());
                    oa.dT_.disE((G = {}, G.kind = "HTTP_RESPONSE", G.detail = (T = {}, T.a = w.D, T.h = ia, T), G))
                }
            } catch (Ia) {}
            try {
                if (w.Dc = oa.dT_.nw(), oa.dT_.ec(w.D), J.readyState === J.DONE && oa.dT_.mx() && (0 >= J.status || 400 <= J.status) && (w.ga = !0, 0 === J.status ? (w.da || (w.da = "abort"), oa.dT_.st(oa.dT_.mxc.bind(null, w.D), 0)) : oa.dT_.mxf(J.status, J.statusText, w.D)), "function" === typeof B) return qa({
                    xa: B,
                    context: J,
                    va: H,
                    D: w.D,
                    url: w.url
                })
            } finally {
                oa.dT_.lc(w.D), J.readyState === J.DONE && Ma(w)
            }
        }
    }

    function Y(w, B, J) {
        "upload" === B && oa.dT_.mx() && !J.ue && (w.upload.addEventListener("error", function() {
            oa.dT_.mxg("Upload failure", J.D)
        }), J.ue = !0);
        return J.Db.has(B) ? J.Db.get(B) : Reflect.get(w, B)
    }

    function ma(w, B, J) {
        try {
            EventTarget.prototype.addEventListener.call(w, B, J)
        } catch (G) {
            w.addEventListener(B, J)
        }
    }

    function ea(w) {
        var B = {
            method: "",
            Dc: 0,
            requestStart: 0,
            yd: new WeakMap,
            D: 0,
            async: !0,
            Yc: !1,
            url: "",
            target: w,
            bj: !1,
            ue: !1,
            Db: new Map,
            da: void 0,
            ga: !1,
            Qa: oa.dT_.gtc(),
            toString: function() {
                return "[Custom DTProperty Object]"
            },
            toJSON: function() {
                return "[Custom DTProperty Object]"
            }
        };
        w.dtProps = B;
        ma(w, "readystatechange", P(B, function() {}, w));
        oa.dT_.mx() && (ma(w, "error", function() {
            B.ga = !0;
            B.da = void 0;
            return oa.dT_.mxf(w.status, w.statusText, B.D)
        }), ma(w, "abort", function() {
            B.ga = !0;
            B.da = "abort";
            return oa.dT_.mxc(B.D)
        }), ma(w, "timeout", function() {
            B.ga = !0;
            B.da = "abort";
            return oa.dT_.mxt(B.D)
        }));
        ma(w, "loadend", function() {
            var J, G;
            oa.dT_.disE((J = {}, J.kind = "REQUEST_COMPLETED",
                J.detail = (G = {}, G.i = "xmlhttprequest", G.x = B.url, G.m = B.method, G.c = B.target.status, G.s = B.target.statusText, G.a = B.Dc, G.e = oa.dT_.nw(), G.r = oa.dT_.gRT(B.url, "xmlhttprequest", B.requestStart, oa.dT_.nw()) || void 0, G.q = B.requestStart, G.o = B.da, G.t = B.ga, G.n = B.Qa, G), J))
        });
        return fa(w, {
            get: function(J, G) {
                return Y(J, G, B)
            },
            set: function(J, G, T, H) {
                try {
                    var Na = T;
                    switch (G) {
                        case "onabort":
                        case "onerror":
                        case "ontimeout":
                            Na = ra(B, T, J);
                            B.Db.set(G, T);
                            break;
                        case "onloadstart":
                        case "onprogress":
                        case "onload":
                        case "onloadend":
                            Na =
                                N(B, T, J, H);
                            B.Db.set(G, T);
                            break;
                        case "onreadystatechange":
                            Na = P(B, T, J), B.Db.set(G, T)
                    }
                    var ia = Reflect.set(J, G, Na)
                } catch (Ia) {
                    ia = !1
                }
                return ia
            }
        })
    }

    function U(w, B) {
        try {
            if ("string" === typeof B && "function" === typeof w[B]) {
                var J = oa.dT_.iNF(w[B]);
                w[B] = fa(w[B], {
                    apply: bb.bind(null, B, J),
                    get: function(G, T, H) {
                        return "dT_proxy" === T ? !0 : Reflect.get(G, T, H)
                    }
                })
            }
        } catch (G) {}
    }

    function va(w, B) {
        ob(B);
        w = oa.dT_.aFr(w, Db.bind(null, B));
        oa.dT_.fE(w, U.bind(null, B))
    }

    function Sa(w, B, J, G, T) {
        var H, Na;
        w.requestStart = oa.dT_.nw();
        if (!w.D) {
            w.D =
                oa.dT_.ex("x", void 0, w.url, !1, B);
            oa.dT_.disE((H = {}, H.kind = "REQUEST_STARTED", H.detail = (Na = {}, Na.i = "xmlhttprequest", Na.x = w.url, Na), H));
            var ia = oa.dT_.sch({
                headers: {}
            }, w.url, w.D, void 0, w.Qa);
            H = oa.dT_.aFr(Reflect.ownKeys(ia.headers), Ga);
            oa.dT_.fE(H, function(Ia) {
                J.setRequestHeader(Ia, ia.headers[Ia])
            })
        }
        try {
            return qa({
                xa: B,
                context: G,
                va: T,
                D: w.D,
                url: w.url
            })
        } finally {
            w.async || Ma(w)
        }
    }

    function bb(w, B, J, G, T) {
        if (!oa.dT_.iIO(G, 22)) return qa({
            xa: J,
            context: G,
            va: T
        });
        var H = G.dtProps,
            Na = G;
        H && (B || dc) && (Na = H.target);
        if (!H) return qa({
            xa: J,
            context: Na,
            va: T
        });
        switch ((B ? J.name : w) || w) {
            case "addEventListener":
                "function" === typeof T[1] && (w = T[1], (B = H.yd.get(w)) ? T[1] = B : (G = N(H, w, Na, G), H.yd.set(w, G), T[1] = G));
                break;
            case "removeEventListener":
                (G = H.yd.get(T[1])) && (T[1] = G);
                break;
            case "open":
                return H.D = 0, H.Yc = !1, H.method = T[0], H.url = T[1] + "", H.async = !0 === T[2] || void 0 === T[2], qa({
                    xa: J,
                    context: Na,
                    va: T
                });
            case "send":
                return Sa(H, J, G, Na, T);
            case "abort":
                H.ga = !0, H.da = "abort", Ma(H)
        }
        return qa({
            xa: J,
            context: Na,
            va: T,
            D: H.D,
            url: H.url
        })
    }

    function Db(w, B) {
        try {
            var J =
                w[B];
            if ("function" !== typeof J || J.dT_proxy) return !1
        } catch (G) {
            return !1
        }
        return !0
    }

    function Wb() {
        dc = db(Eb.XMLHttpRequest, ec) || db(Eb.EventTarget, Qb);
        ha = Eb.Proxy;
        var w = Eb.XMLHttpRequest.prototype,
            B = EventTarget.prototype;
        Eb.XMLHttpRequest = fa(Eb.XMLHttpRequest, {
            construct: function(J, G) {
                va(ec, w);
                va(Qb, B);
                return ea(Reflect.construct(J, G))
            }
        });
        va(ec, w);
        w.constructor = Eb.XMLHttpRequest;
        va(Qb, B)
    }
    this.dT_ && dT_.prm && dT_.prm();
    var oa = "undefined" !== typeof window ? window : self,
        Eb = "undefined" !== typeof globalThis ? globalThis :
        "undefined" !== typeof window ? window : void 0,
        wc = "cancelBubble defaultPrevented eventPhase isTrusted lengthComputable loaded position returnValue timeStamp total totalSize type".split(" "),
        Gc = "onabort onerror onload onloadend onloadstart onprogress ontimeout".split(" "),
        hb = "responseText response status statusText responseBody responseStream responseURL responseXML responseType".split(" "),
        Rb = La(La(La([], hb, !0), Gc, !0), ["onreadystatechange", "upload", "readyState"], !1),
        ec = "open send getAllResponseHeaders getResponseHeader setRequestHeader overrideMimeType abort sendAsBinary setAttributionReporting setPrivateToken".split(" "),
        Qb = ["addEventListener", "removeEventListener", "dispatchEvent"],
        Cc = La(La(La([], ec, !0), Rb, !0), Qb, !0),
        dc = !1,
        ic = ["addEventListener", "removeEventListener"],
        Pb, Kb, Gb, pc = new WeakMap,
        Bb = (Pb = {}, Pb.handleEventCallback = function(w, B, J) {
                return Za.aWF(w, B, J)
            }, Pb.callOpen = function(w, B, J) {
                return Za.aWF(w, B, J)
            }, Pb.send = function(w, B, J) {
                return Za.aWF(w, B, J)
            }, Pb.getAllResponseHeaders = function(w, B, J) {
                return Za.aWF(w, B, J)
            }, Pb.getResponseHeader = function(w, B, J) {
                return Za.aWF(w, B, J)
            }, Pb.setRequestHeader = function(w, B, J) {
                return Za.aWF(w,
                    B, J)
            }, Pb.overrideMimeType = function(w, B, J) {
                return Za.aWF(w, B, J)
            }, Pb.RELWrapper = function(w, B, J) {
                return Za.aWF(w, B, J)
            }, Pb.AELWrapper = function(w, B, J) {
                return Za.aWF(w, B, J)
            }, Pb.dispatchWrapper = function(w, B, J) {
                return Za.aWF(w, B, J)
            }, Pb.onreadystatechangeCallback = function(w, B, J) {
                return Za.aWF(w, B, J)
            }, Pb.dispatchXHRCallback = function(w, B, J) {
                return Za.aWF(w, B, J)
            }, Pb.XMLHttpRequestCallback = function(w, B, J) {
                return Za.aWF(w, B, J)
            }, Pb.preventDefault = function(w, B, J) {
                return Za.aWF(w, B, J)
            }, Pb.stopImmediatePropagation =
            function(w, B, J) {
                return Za.aWF(w, B, J)
            }, Pb),
        F = function() {
            function w(B) {
                var J = this;
                if (J.constructor) {
                    var G = w;
                    Object.defineProperty(J, "constructor", {
                        get: function() {
                            return G
                        },
                        set: function(Na) {
                            G = Na
                        }
                    })
                }
                J.dtProps = {
                    ta: [],
                    Te: B.dtProps.G.upload,
                    Xe: B,
                    Wb: !1
                };
                var T = J.dtProps;
                B = 0;
                for (var H = Gc; B < H.length; B++)(function(Na) {
                    Object.defineProperty(J, Na, {
                        enumerable: !0,
                        get: function() {
                            return T[Na]
                        },
                        set: function(ia) {
                            T[Na] = ia;
                            T.Wb || (T.Wb = !0, Ya(J, T.Te, T.Xe))
                        }
                    })
                })(H[B]);
                J.addEventListener = function(Na, ia, Ia) {
                    if (ia) {
                        for (var Ca =
                                T.ta, rb = 0; rb < Ca.length; rb++) {
                            var Ab = Ca[rb];
                            if (Ab[0] === Na && Ab[1] === ia && Ab[2] === Ia) return
                        }
                        Ca.push([Na, ia, !!Ia]);
                        T.Wb || (T.Wb = !0, Ya(J, T.Te, T.Xe))
                    }
                };
                J.removeEventListener = function(Na, ia, Ia) {
                    for (var Ca, rb = T.ta, Ab = 0; Ab < rb.length; Ab++)
                        if (Ca = rb[Ab], Ca[0] === Na && Ca[1] === ia && Ca[2] === Ia) {
                            rb.splice(Ab, 1);
                            break
                        }
                };
                J.dispatchEvent = function(Na) {
                    var ia = T.ta,
                        Ia = !1,
                        Ca = !1;
                    if (Na.cancelable && Na.preventDefault) {
                        var rb = Na.preventDefault;
                        Na.preventDefault = function() {
                            Ia = !0;
                            return Bb.preventDefault(rb, this, arguments)
                        }
                    }
                    if (Na.stopImmediatePropagation) {
                        var Ab =
                            Na.stopImmediatePropagation;
                        Na.stopImmediatePropagation = function() {
                            Ca = !0;
                            return Bb.stopImmediatePropagation(Ab, this, arguments)
                        }
                    }
                    for (var qb = 0; qb < ia.length; qb++) {
                        var zb = ia[qb];
                        Ca || zb[0] !== Na.type || zb[2] || ("object" === typeof zb[1] && zb[1].handleEvent ? Bb.dispatchXHRCallback(zb[1].handleEvent, zb[1], [Na]) : Bb.dispatchXHRCallback(zb[1], J, [Na]))
                    }
                    return !Ia
                }
            }
            w.prototype.toString = function() {
                return "[XMLHttpRequestUpload]"
            };
            return w
        }(),
        ka = {
            readyState: 0,
            response: "",
            responseText: "",
            responseType: "",
            responseURL: "",
            status: 0,
            statusText: "",
            timeout: 0,
            withCredentials: !1
        },
        Ea = function() {
            function w(B) {
                function J(ia) {
                    if (-1 === hb.indexOf(ia) && (!oa.dT_.oHOP(H.G, ia) || oa.dT_.oHOP(G, ia))) return dc && -1 !== ec.indexOf(ia) && X(ia, !1), "continue";
                    if ("upload" === ia) Object.defineProperty(G, "upload", {
                        enumerable: !0,
                        get: function() {
                            H.upload || (H.upload = new F(G));
                            return H.upload
                        }
                    });
                    else {
                        try {
                            H[ia] = H.G[ia]
                        } catch (Ia) {}
                        Object.defineProperty(G, ia, {
                            enumerable: !0,
                            get: function() {
                                return 0 <= hb.indexOf(ia) ? H.G[ia] : "undefined" === typeof H[ia] ? ka[ia] : H[ia]
                            },
                            set: function(Ia) {
                                H[ia] =
                                    Ia
                            }
                        })
                    }
                }
                var G = this;
                if (G.constructor) {
                    var T = w;
                    Object.defineProperty(G, "constructor", {
                        get: function() {
                            return T
                        },
                        set: function(ia) {
                            T = ia
                        }
                    })
                }
                G.dtProps = {
                    requestStart: 0,
                    zb: !0,
                    Z: 0,
                    ta: [],
                    url: "",
                    method: "",
                    aborted: !1,
                    Pa: 0,
                    async: void 0,
                    G: arguments.length ? new Gb(B) : new Gb,
                    Zf: !1,
                    Ze: -1,
                    nd: -1,
                    qd: [],
                    Ae: !1,
                    Ub: function() {
                        G.readyState = H.G.readyState;
                        if (G.readyState !== H.Ze || 100 < oa.dT_.nw() - H.nd) {
                            for (var ia = 0, Ia = H.qd; ia < Ia.length; ia++) Kb(Ia[ia]);
                            H.qd = [];
                            H.bh();
                            H.nd = oa.dT_.nw()
                        } else H.qd.push(oa.dT_.st(H.Ub, 100));
                        H.Ze = G.readyState
                    },
                    lg: function(ia, Ia) {
                        var Ca, rb;
                        H.G.onreadystatechange !== H.Ub && (H.G.onreadystatechange = H.Ub);
                        H.Z = 0;
                        H.requestStart = oa.dT_.nw();
                        G.__dtFrameworks__ || (H.Z = oa.dT_.ex("x", void 0, H.url, void 0, G, !1, dc));
                        oa.dT_.disE((Ca = {}, Ca.kind = "REQUEST_STARTED", Ca.detail = (rb = {}, rb.i = "xmlhttprequest", rb.x = H.url, rb), Ca));
                        try {
                            H.async && (H.G.timeout = G.timeout)
                        } catch (Ib) {}
                        try {
                            H.async && (H.G.responseType = G.responseType)
                        } catch (Ib) {}
                        H.dh();
                        Ca = {};
                        Ca = oa.dT_.sch(Ca, H.url, H.Z, void 0, H.Qa);
                        for (var Ab in Ca.headers) oa.dT_.oHOP(Ca.headers,
                            Ab) && H.G.setRequestHeader(Ab, Ca.headers[Ab]);
                        H.G.withCredentials !== G.withCredentials && (H.G.withCredentials = G.withCredentials);
                        Ab = !0;
                        try {
                            if (Ia && H.G.sendAsBinary) var qb = H.G.sendAsBinary.apply(H.G, ia);
                            else {
                                var zb = Ha(G, "send");
                                qb = zb ? Bb.send(zb, G, ia) : H.G.send.apply(H.G, ia)
                            }
                            Ab = !1
                        } finally {
                            Ab && oa.dT_.lx(H.Z, void 0, "x")
                        }!H.async && G.readyState && H.Z && oa.dT_.lx(H.Z, void 0, "x");
                        return qb
                    },
                    dh: function() {
                        H.Ae || (Ya(G, H.G), H.Ae = !0)
                    },
                    Od: function(ia, Ia, Ca) {
                        void 0 === Ca && (Ca = !1);
                        for (var rb = 0, Ab = H.ta; rb < Ab.length; rb++) {
                            var qb =
                                Ab[rb];
                            if (qb[0] === ia && qb[1] === Ia && qb[2] === Ca) return
                        }
                        H.ta.push([ia, Ia, Ca])
                    },
                    $e: function(ia, Ia, Ca) {
                        void 0 === Ca && (Ca = !1);
                        for (var rb, Ab = 0; Ab < H.ta.length; Ab++)
                            if (rb = H.ta[Ab], rb[0] === ia && rb[1] === Ia && rb[2] === Ca) {
                                H.ta.splice(Ab, 1);
                                break
                            }
                    },
                    Ic: function(ia) {
                        var Ia = !1,
                            Ca = !1;
                        if (ia.cancelable && ia.preventDefault) {
                            var rb = ia.preventDefault;
                            ia.preventDefault = function() {
                                Ia = !0;
                                return Bb.preventDefault(rb, this, arguments)
                            }
                        }
                        if (ia.stopImmediatePropagation) {
                            var Ab = ia.stopImmediatePropagation;
                            ia.stopImmediatePropagation = function() {
                                Ca = !0;
                                return Bb.stopImmediatePropagation(Ab, this, arguments)
                            }
                        }
                        ia = Qa(ia, G);
                        "readystatechange" === ia.type && "undefined" !== typeof H.onreadystatechange && H.onreadystatechange && (H.Zf = !0, Bb.onreadystatechangeCallback(H.onreadystatechange, G, [ia]));
                        for (var qb = 0, zb = H.ta; qb < zb.length; qb++) {
                            var Ib = zb[qb];
                            Ca || Ib[0] !== ia.type || Ib[2] || ("object" === typeof Ib[1] && Ib[1].handleEvent ? Bb.dispatchXHRCallback(Ib[1].handleEvent, Ib[1], [ia]) : Bb.dispatchXHRCallback(Ib[1], G, [ia]))
                        }
                        return !Ia
                    },
                    bh: function() {
                        var ia = H.Z;
                        try {
                            oa.dT_.ec(ia,
                                G.readyState), H.Pa++, H.Ic({
                                type: "readystatechange",
                                bubbles: !1,
                                cancelable: !1,
                                timeStamp: oa.dT_.nw()
                            })
                        } finally {
                            H.Pa--, oa.dT_.lc(ia), 4 === G.readyState && ia && ta(G, H)
                        }
                    },
                    da: void 0,
                    ga: !1,
                    Qa: oa.dT_.gtc(),
                    toString: function() {
                        return "[Custom DTProperty Object]"
                    },
                    toJSON: function() {
                        return "[Custom DTProperty Object]"
                    }
                };
                var H = G.dtProps;
                G.readyState = 0;
                pa(G);
                try {
                    Object.defineProperty(H, "responseType", {
                        get: function() {
                            return H.G.responseType
                        },
                        set: function(ia) {
                            H.G.responseType = ia
                        }
                    })
                } catch (ia) {}
                ob(Gb.prototype);
                for (var Na in H.G) J(Na);
                H.nd = oa.dT_.nw();
                G.onreadystatechange = null;
                "withCredentials" in H.G && (G.withCredentials = H.G.withCredentials);
                G.timeout = 0;
                H.G.overrideMimeType && (G.overrideMimeType = function(ia) {
                    var Ia = Ha(G, "overrideMimeType");
                    return Ia ? Bb.overrideMimeType(Ia, G, arguments) : H.G.overrideMimeType(ia)
                });
                oa.dT_.bcv("peti") && H.G.addEventListener && (G.addEventListener = function(ia, Ia, Ca) {
                    var rb = Ha(G, "addEventListener");
                    H.Od(ia, Ia, Ca);
                    rb ? oa.dT_.iNF(rb) || Bb.AELWrapper(rb, H.G, arguments) : oa.dT_.iNF(H.G.addEventListener) || H.G.addEventListener(ia,
                        Ia, Ca)
                }, G.removeEventListener = function(ia, Ia, Ca) {
                    var rb = Ha(G, "removeEventListener");
                    H.$e(ia, Ia, Ca);
                    rb ? oa.dT_.iNF(rb) || Bb.RELWrapper(rb, H.G, arguments) : oa.dT_.iNF(H.G.removeEventListener) || H.G.removeEventListener(ia, Ia, Ca)
                }, G.dispatchEvent = function(ia) {
                    var Ia = Ha(G, "dispatchEvent");
                    if (Ia) {
                        if (!oa.dT_.iNF(Ia)) return Bb.dispatchWrapper(Ia, H.G, arguments)
                    } else if (!oa.dT_.iNF(H.G.dispatchEvent)) return H.G.dispatchEvent(ia);
                    return H.Ic(ia)
                });
                G.open = function(ia, Ia, Ca, rb, Ab) {
                    H.aborted = !1;
                    H.method = ia;
                    3 > arguments.length &&
                        (Ca = !0);
                    H.async = Ca;
                    H.G.onreadystatechange = H.Ub;
                    H.url = "" + Ia;
                    var qb = Ha(G, "open");
                    qb ? Bb.callOpen(qb, G, arguments) : Bb.callOpen(H.G.open, H.G, arguments);
                    G.readyState = H.G.readyState
                };
                G.send = function() {
                    return H.lg(arguments, !1)
                };
                G.abort = function() {
                    for (var ia = [], Ia = 0; Ia < arguments.length; Ia++) ia[Ia] = arguments[Ia];
                    0 < G.readyState && (H.aborted = !0);
                    (Ia = Ha(G, "abort")) ? Ia.apply(G, ia): H.G.abort();
                    if (H.Z) {
                        for (; 0 < H.Pa;) H.Pa--, oa.dT_.lc(H.Z);
                        oa.dT_.lx(H.Z, void 0, "x");
                        H.Z = 0
                    }
                };
                G.getAllResponseHeaders = function() {
                    var ia = Ha(G,
                        "getAllResponseHeaders");
                    return ia ? Bb.getAllResponseHeaders(ia, G, arguments) : H.G.getAllResponseHeaders()
                };
                G.getResponseHeader = function(ia) {
                    var Ia = Ha(G, "getResponseHeader");
                    return Ia ? Bb.getResponseHeader(Ia, G, arguments) : H.G.getResponseHeader(ia)
                };
                G.setRequestHeader = function(ia, Ia) {
                    var Ca = ia && ia.toLowerCase ? ia.toLowerCase() : ia;
                    if ("x-dtpc" !== Ca && "x-dtreferer" !== Ca && "x-host" !== Ca && "x-dtc" !== Ca) return (Ca = Ha(G, "setRequestHeader")) ? Bb.setRequestHeader(Ca, G, arguments) : H.G.setRequestHeader(ia, Ia)
                };
                G.toString =
                    function() {
                        return "[XMLHttpRequest]"
                    };
                G.toJSON = function() {
                    return H.G
                };
                if (Eb.Proxy && oa.dT_.bcv("exp")) return G = new Proxy(G, {
                    set: function(ia, Ia, Ca) {
                        ia[Ia] = Ca;
                        try {
                            -1 === Cc.indexOf(Ia) && (ia.dtProps.G[Ia] = Ca)
                        } catch (rb) {}
                        return !0
                    }
                })
            }
            return w
        }(),
        ha, wb, tb;
    if ((Pb = Eb.dT_) && "ea" in Pb && (null === (tb = (wb = oa.dT_).smbi) || void 0 === tb ? 0 : tb.call(wb, "x"))) {
        var Za = Pb;
        "object" === typeof Eb.Reflect && "function" === typeof Eb.Proxy && oa.dT_.bcv("expw") && !oa.dT_.gBI().edge ? Wb() : ua()
    }
})();