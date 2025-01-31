(() => {
    function e(e, t) {
        for (var _ in t) e[_] = t[_];
        return e
    }

    function t(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function _(e, t, _) {
        var o, r, l, u = {};
        for (l in t) "key" == l ? o = t[l] : "ref" == l ? r = t[l] : u[l] = t[l];
        if (arguments.length > 2 && (u.children = arguments.length > 3 ? W.call(arguments, 2) : _), "function" == typeof e && null != e.defaultProps)
            for (l in e.defaultProps) void 0 === u[l] && (u[l] = e.defaultProps[l]);
        return n(e, u, o, r, null)
    }

    function n(e, t, _, n, o) {
        var r = {
            type: e,
            props: t,
            key: _,
            ref: n,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: null == o ? ++A : o,
            __i: -1,
            __u: 0
        };
        return null == o && null != j.vnode && j.vnode(r), r
    }

    function o(e) {
        return e.children
    }

    function r(e, t) {
        this.props = e, this.context = t
    }

    function l(e, t) {
        if (null == t) return e.__ ? l(e.__, e.__i + 1) : null;
        for (var _; t < e.__k.length; t++)
            if (null != (_ = e.__k[t]) && null != _.__e) return _.__e;
        return "function" == typeof e.type ? l(e) : null
    }

    function u(e) {
        var t, _;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (_ = e.__k[t]) && null != _.__e) {
                    e.__e = e.__c.base = _.__e;
                    break
                }
            return u(e)
        }
    }

    function i(e) {
        (!e.__d && (e.__d = !0) && M.push(e) && !c.__r++ || I !== j.debounceRendering) && ((I = j.debounceRendering) || R)(c)
    }

    function c() {
        var t, _, n, o, r, i, s, f;
        for (M.sort(V); t = M.shift();) t.__d && (_ = M.length, o = void 0, i = (r = (n = t).__v).__e, s = [], f = [], n.__P && ((o = e({}, r)).__v = r.__v + 1, j.vnode && j.vnode(o), y(n.__P, o, r, n.__n, void 0 !== n.__P.ownerSVGElement, 32 & r.__u ? [i] : null, s, null == i ? l(r) : i, !!(32 & r.__u), f), o.__v = r.__v, o.__.__k[o.__i] = o, m(s, o, f), o.__e != i && u(o)), M.length > _ && M.sort(V));
        c.__r = 0
    }

    function s(e, t, _, n, o, r, u, i, c, s, p) {
        var d, h, v, m, g, k = n && n.__k || le,
            w = t.length;
        for (_.__d = c, f(_, t, k), c = _.__d, d = 0; d < w; d++) null != (v = _.__k[d]) && "boolean" != typeof v && "function" != typeof v && (h = -1 === v.__i ? re : k[v.__i] || re, v.__i = d, y(e, v, h, o, r, u, i, c, s, p), m = v.__e, v.ref && h.ref != v.ref && (h.ref && b(h.ref, null, v), p.push(v.ref, v.__c || m, v)), null == g && null != m && (g = m), 65536 & v.__u || h.__k === v.__k ? (c && !c.isConnected && (c = l(h)), c = a(v, c, e)) : "function" == typeof v.type && void 0 !== v.__d ? c = v.__d : m && (c = m.nextSibling), v.__d = void 0, v.__u &= -196609);
        _.__d = c, _.__e = g
    }

    function f(e, t, _) {
        var r, u, i, c, s, f = t.length,
            a = _.length,
            d = a,
            h = 0;
        for (e.__k = [], r = 0; r < f; r++) c = r + h, null != (u = e.__k[r] = null == (u = t[r]) || "boolean" == typeof u || "function" == typeof u ? null : "string" == typeof u || "number" == typeof u || "bigint" == typeof u || u.constructor == String ? n(null, u, null, null, null) : ie(u) ? n(o, {
            children: u
        }, null, null, null) : void 0 === u.constructor && u.__b > 0 ? n(u.type, u.props, u.key, u.ref ? u.ref : null, u.__v) : u) ? (u.__ = e, u.__b = e.__b + 1, s = p(u, _, c, d), u.__i = s, i = null, -1 !== s && (d--, (i = _[s]) && (i.__u |= 131072)), null == i || null === i.__v ? (-1 == s && h--, "function" != typeof u.type && (u.__u |= 65536)) : s !== c && (s === c + 1 ? h++ : s > c ? d > f - c ? h += s - c : h-- : s < c ? s == c - 1 && (h = s - c) : h = 0, s !== r + h && (u.__u |= 65536))) : (i = _[c]) && null == i.key && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = l(i)), k(i, i, !1), _[c] = null, d--);
        if (d)
            for (r = 0; r < a; r++) null != (i = _[r]) && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = l(i)), k(i, i))
    }

    function a(e, t, _) {
        var n, o;
        if ("function" == typeof e.type) {
            for (n = e.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = e, t = a(n[o], t, _));
            return t
        }
        e.__e != t && (_.insertBefore(e.__e, t || null), t = e.__e);
        do {
            t = t && t.nextSibling
        } while (null != t && 8 === t.nodeType);
        return t
    }

    function p(e, t, _, n) {
        var o = e.key,
            r = e.type,
            l = _ - 1,
            u = _ + 1,
            i = t[_];
        if (null === i || i && o == i.key && r === i.type && !(131072 & i.__u)) return _;
        if (n > (null == i || 131072 & i.__u ? 0 : 1))
            for (; l >= 0 || u < t.length;) {
                if (l >= 0) {
                    if ((i = t[l]) && !(131072 & i.__u) && o == i.key && r === i.type) return l;
                    l--
                }
                if (u < t.length) {
                    if ((i = t[u]) && !(131072 & i.__u) && o == i.key && r === i.type) return u;
                    u++
                }
            }
        return -1
    }

    function d(e, t, _) {
        "-" === t[0] ? e.setProperty(t, null == _ ? "" : _) : e[t] = null == _ ? "" : "number" != typeof _ || ue.test(t) ? _ : _ + "px"
    }

    function h(e, t, _, n, o) {
        var r;
        e: if ("style" === t)
            if ("string" == typeof _) e.style.cssText = _;
            else {
                if ("string" == typeof n && (e.style.cssText = n = ""), n)
                    for (t in n) _ && t in _ || d(e.style, t, "");
                if (_)
                    for (t in _) n && _[t] === n[t] || d(e.style, t, _[t])
            }
        else if ("o" === t[0] && "n" === t[1]) r = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e || "onFocusOut" === t || "onFocusIn" === t ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = _, _ ? n ? _.u = n.u : (_.u = q, e.addEventListener(t, r ? K : B, r)) : e.removeEventListener(t, r ? K : B, r);
        else {
            if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && t in e) try {
                e[t] = null == _ ? "" : _;
                break e
            } catch {}
            "function" == typeof _ || (null == _ || !1 === _ && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, _))
        }
    }

    function v(e) {
        return function(t) {
            if (this.l) {
                var _ = this.l[t.type + e];
                if (null == t.t) t.t = q++;
                else if (t.t < _.u) return;
                return _(j.event ? j.event(t) : t)
            }
        }
    }

    function y(t, _, n, l, u, i, c, f, a, p) {
        var d, h, v, y, m, b, k, E, T, P, x, C, H, O, S, N = _.type;
        if (void 0 !== _.constructor) return null;
        128 & n.__u && (a = !!(32 & n.__u), i = [f = _.__e = n.__e]), (d = j.__b) && d(_);
        e: if ("function" == typeof N) try {
            if (E = _.props, T = (d = N.contextType) && l[d.__c], P = d ? T ? T.props.value : d.__ : l, n.__c ? k = (h = _.__c = n.__c).__ = h.__E : ("prototype" in N && N.prototype.render ? _.__c = h = new N(E, P) : (_.__c = h = new r(E, P), h.constructor = N, h.render = w), T && T.sub(h), h.props = E, h.state || (h.state = {}), h.context = P, h.__n = l, v = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != N.getDerivedStateFromProps && (h.__s == h.state && (h.__s = e({}, h.__s)), e(h.__s, N.getDerivedStateFromProps(E, h.__s))), y = h.props, m = h.state, h.__v = _, v) null == N.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
                if (null == N.getDerivedStateFromProps && E !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(E, P), !h.__e && (null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(E, h.__s, P) || _.__v === n.__v)) {
                    for (_.__v !== n.__v && (h.props = E, h.state = h.__s, h.__d = !1), _.__e = n.__e, _.__k = n.__k, _.__k.forEach((function(e) {
                            e && (e.__ = _)
                        })), x = 0; x < h._sb.length; x++) h.__h.push(h._sb[x]);
                    h._sb = [], h.__h.length && c.push(h);
                    break e
                }
                null != h.componentWillUpdate && h.componentWillUpdate(E, h.__s, P), null != h.componentDidUpdate && h.__h.push((function() {
                    h.componentDidUpdate(y, m, b)
                }))
            }
            if (h.context = P, h.props = E, h.__P = t, h.__e = !1, C = j.__r, H = 0, "prototype" in N && N.prototype.render) {
                for (h.state = h.__s, h.__d = !1, C && C(_), d = h.render(h.props, h.state, h.context), O = 0; O < h._sb.length; O++) h.__h.push(h._sb[O]);
                h._sb = []
            } else
                do {
                    h.__d = !1, C && C(_), d = h.render(h.props, h.state, h.context), h.state = h.__s
                } while (h.__d && ++H < 25);
            h.state = h.__s, null != h.getChildContext && (l = e(e({}, l), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (b = h.getSnapshotBeforeUpdate(y, m)), s(t, ie(S = null != d && d.type === o && null == d.key ? d.props.children : d) ? S : [S], _, n, l, u, i, c, f, a, p), h.base = _.__e, _.__u &= -161, h.__h.length && c.push(h), k && (h.__E = h.__ = null)
        } catch (e) {
            _.__v = null, a || null != i ? (_.__e = f, _.__u |= a ? 160 : 32, i[i.indexOf(f)] = null) : (_.__e = n.__e, _.__k = n.__k), j.__e(e, _, n)
        } else null == i && _.__v === n.__v ? (_.__k = n.__k, _.__e = n.__e) : _.__e = g(n.__e, _, n, l, u, i, c, a, p);
        (d = j.diffed) && d(_)
    }

    function m(e, t, _) {
        t.__d = void 0;
        for (var n = 0; n < _.length; n++) b(_[n], _[++n], _[++n]);
        j.__c && j.__c(t, e), e.some((function(t) {
            try {
                e = t.__h, t.__h = [], e.some((function(e) {
                    e.call(t)
                }))
            } catch (e) {
                j.__e(e, t.__v)
            }
        }))
    }

    function g(e, _, n, o, r, u, i, c, f) {
        var a, p, d, v, y, m, g, b = n.props,
            k = _.props,
            w = _.type;
        if ("svg" === w && (r = !0), null != u)
            for (a = 0; a < u.length; a++)
                if ((y = u[a]) && "setAttribute" in y == !!w && (w ? y.localName === w : 3 === y.nodeType)) {
                    e = y, u[a] = null;
                    break
                }
        if (null == e) {
            if (null === w) return document.createTextNode(k);
            e = r ? document.createElementNS("http://www.w3.org/2000/svg", w) : document.createElement(w, k.is && k), u = null, c = !1
        }
        if (null === w) b === k || c && e.data === k || (e.data = k);
        else {
            if (u = u && W.call(e.childNodes), b = n.props || re, !c && null != u)
                for (b = {}, a = 0; a < e.attributes.length; a++) b[(y = e.attributes[a]).name] = y.value;
            for (a in b) y = b[a], "children" == a || ("dangerouslySetInnerHTML" == a ? d = y : "key" === a || a in k || h(e, a, null, y, r));
            for (a in k) y = k[a], "children" == a ? v = y : "dangerouslySetInnerHTML" == a ? p = y : "value" == a ? m = y : "checked" == a ? g = y : "key" === a || c && "function" != typeof y || b[a] === y || h(e, a, y, b[a], r);
            if (p) c || d && (p.__html === d.__html || p.__html === e.innerHTML) || (e.innerHTML = p.__html), _.__k = [];
            else if (d && (e.innerHTML = ""), s(e, ie(v) ? v : [v], _, n, o, r && "foreignObject" !== w, u, i, u ? u[0] : n.__k && l(n, 0), c, f), null != u)
                for (a = u.length; a--;) null != u[a] && t(u[a]);
            c || (a = "value", void 0 !== m && (m !== e[a] || "progress" === w && !m || "option" === w && m !== b[a]) && h(e, a, m, b[a], !1), a = "checked", void 0 !== g && g !== e[a] && h(e, a, g, b[a], !1))
        }
        return e
    }

    function b(e, t, _) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            j.__e(e, _)
        }
    }

    function k(e, _, n) {
        var o, r;
        if (j.unmount && j.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || b(o, null, _)), null != (o = e.__c)) {
            if (o.componentWillUnmount) try {
                o.componentWillUnmount()
            } catch (e) {
                j.__e(e, _)
            }
            o.base = o.__P = null
        }
        if (o = e.__k)
            for (r = 0; r < o.length; r++) o[r] && k(o[r], _, n || "function" != typeof e.type);
        n || null == e.__e || t(e.__e), e.__c = e.__ = e.__e = e.__d = void 0
    }

    function w(e, t, _) {
        return this.constructor(e, _)
    }

    function E(e, t, n) {
        var r, l, u, i;
        j.__ && j.__(e, t), l = (r = "function" == typeof n) ? null : n && n.__k || t.__k, u = [], i = [], y(t, e = (!r && n || t).__k = _(o, null, [e]), l || re, re, void 0 !== t.ownerSVGElement, !r && n ? [n] : l ? null : t.firstChild ? W.call(t.childNodes) : null, u, !r && n ? n : l ? l.__e : t.firstChild, r, i), m(u, e, i)
    }

    function T(e, t) {
        ve.__h && ve.__h(se, e, pe || t), pe = 0;
        var _ = se.__H || (se.__H = {
            __: [],
            __h: []
        });
        return e >= _.__.length && _.__.push({
            __V: he
        }), _.__[e]
    }

    function P(e) {
        return pe = 1, x(U, e)
    }

    function x(e, t, _) {
        var n = T(ce++, 2);
        if (n.t = e, !n.__c && (n.__ = [_ ? _(t) : U(void 0, t), function(e) {
                var t = n.__N ? n.__N[0] : n.__[0],
                    _ = n.t(t, e);
                t !== _ && (n.__N = [_, n.__[1]], n.__c.setState({}))
            }], n.__c = se, !se.u)) {
            var o = function(e, t, _) {
                if (!n.__c.__H) return !0;
                var o = n.__c.__H.__.filter((function(e) {
                    return !!e.__c
                }));
                if (o.every((function(e) {
                        return !e.__N
                    }))) return !r || r.call(this, e, t, _);
                var l = !1;
                return o.forEach((function(e) {
                    if (e.__N) {
                        var t = e.__[0];
                        e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (l = !0)
                    }
                })), !(!l && n.__c.props === e) && (!r || r.call(this, e, t, _))
            };
            se.u = !0;
            var r = se.shouldComponentUpdate,
                l = se.componentWillUpdate;
            se.componentWillUpdate = function(e, t, _) {
                if (this.__e) {
                    var n = r;
                    r = void 0, o(e, t, _), r = n
                }
                l && l.call(this, e, t, _)
            }, se.shouldComponentUpdate = o
        }
        return n.__N || n.__
    }

    function C(e, t) {
        var _ = T(ce++, 3);
        !ve.__s && L(_.__H, t) && (_.__ = e, _.i = t, se.__H.__h.push(_))
    }

    function H() {
        for (var e; e = de.shift();)
            if (e.__P && e.__H) try {
                e.__H.__h.forEach(S), e.__H.__h.forEach(N), e.__H.__h = []
            } catch (t) {
                e.__H.__h = [], ve.__e(t, e.__v)
            }
    }

    function O(e) {
        var t, _ = function() {
                clearTimeout(n), Ee && cancelAnimationFrame(t), setTimeout(e)
            },
            n = setTimeout(_, 100);
        Ee && (t = requestAnimationFrame(_))
    }

    function S(e) {
        var t = se,
            _ = e.__c;
        "function" == typeof _ && (e.__c = void 0, _()), se = t
    }

    function N(e) {
        var t = se;
        e.__c = e.__(), se = t
    }

    function L(e, t) {
        return !e || e.length !== t.length || t.some((function(t, _) {
            return t !== e[_]
        }))
    }

    function U(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function D(e) {
        if (!(e instanceof HTMLElement)) return !1;
        let t = e.nodeName.toLowerCase(),
            _ = (e.getAttribute("type") || "").toLowerCase();
        return "select" === t || "textarea" === t || "input" === t && "submit" !== _ && "reset" !== _ && "checkbox" !== _ && "radio" !== _ || e.isContentEditable
    }

    function $(e, t = window, _ = {}) {
        let [n] = P(e), [o, r] = P([]), [l, u] = P({ ...xe,
            ..._
        });
        C((() => {
            let e = {};
            "number" == typeof _.timeout && (e.timeout = _.timeout), u({ ...xe,
                ...e
            })
        }), [_.timeout]), C((() => {
            if (o.length <= 0) return;
            let e = window.setTimeout((() => {
                clearTimeout(e), r([])
            }), l.timeout);
            return () => clearTimeout(e)
        }), [o.length, l.timeout]), C((() => {
            if (!n || 0 === Object.keys(n).length) return;
            let e = e => {
                if (e.defaultPrevented) return;
                let t = `${e.ctrlKey?"ctrl+":""}${e.metaKey?"cmd+":""}${e.altKey?"alt+":""}${e.shiftKey?"shift+":""}`;
                if (e.target instanceof Node && D(e.target) && !t) return;
                let _ = Pe(e, t, o, n);
                r(_)
            };
            return null == t || t.addEventListener("keydown", e), () => null == t ? void 0 : t.removeEventListener("keydown", e)
        }), [o, n, t])
    }

    function F({
        shortcuts: e,
        eventTarget: t,
        options: _
    }) {
        return $(e, t, _), null
    }
    var W, j, A, M, I, R, V, q, B, K, G = Object.create,
        z = Object.defineProperty,
        Y = Object.getOwnPropertyDescriptor,
        J = Object.getOwnPropertyNames,
        Q = Object.getPrototypeOf,
        X = Object.prototype.hasOwnProperty,
        Z = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        ee = (e, t, _, n) => {
            if (t && "object" == typeof t || "function" == typeof t)
                for (let o of J(t)) !X.call(e, o) && o !== _ && z(e, o, {
                    get: () => t[o],
                    enumerable: !(n = Y(t, o)) || n.enumerable
                });
            return e
        },
        te = (e, t, _) => (_ = null != e ? G(Q(e)) : {}, ee(!t && e && e.__esModule ? _ : z(_, "default", {
            value: e,
            enumerable: !0
        }), e)),
        _e = Z(((e, t) => {
            "use strict";
            var _ = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            t.exports = _
        })),
        ne = Z(((e, t) => {
            "use strict";

            function _() {}

            function n() {}
            var o = _e();
            n.resetWarningCache = _, t.exports = function() {
                function e(e, t, _, n, r, l) {
                    if (l !== o) {
                        var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw u.name = "Invariant Violation", u
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var r = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: n,
                    resetWarningCache: _
                };
                return r.PropTypes = r, r
            }
        })),
        oe = Z(((e, t) => {
            t.exports = ne()()
        })),
        re = {},
        le = [],
        ue = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        ie = Array.isArray;
    W = le.slice, j = {
        __e: function(e, t, _, n) {
            for (var o, r, l; t = t.__;)
                if ((o = t.__c) && !o.__) try {
                    if ((r = o.constructor) && null != r.getDerivedStateFromError && (o.setState(r.getDerivedStateFromError(e)), l = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, n || {}), l = o.__d), l) return o.__E = o
                } catch (t) {
                    e = t
                }
            throw e
        }
    }, A = 0, r.prototype.setState = function(t, _) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = e({}, this.state), "function" == typeof t && (t = t(e({}, n), this.props)), t && e(n, t), null != t && this.__v && (_ && this._sb.push(_), i(this))
    }, r.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), i(this))
    }, r.prototype.render = o, M = [], R = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, V = function(e, t) {
        return e.__v.__b - t.__v.__b
    }, c.__r = 0, q = 0, B = v(!1), K = v(!0);
    var ce, se, fe, ae, pe = 0,
        de = [],
        he = [],
        ve = j,
        ye = ve.__b,
        me = ve.__r,
        ge = ve.diffed,
        be = ve.__c,
        ke = ve.unmount,
        we = ve.__;
    ve.__b = function(e) {
        se = null, ye && ye(e)
    }, ve.__ = function(e, t) {
        e && t.__k && t.__k.__m && (e.__m = t.__k.__m), we && we(e, t)
    }, ve.__r = function(e) {
        me && me(e), ce = 0;
        var t = (se = e.__c).__H;
        t && (fe === se ? (t.__h = [], se.__h = [], t.__.forEach((function(e) {
            e.__N && (e.__ = e.__N), e.__V = he, e.__N = e.i = void 0
        }))) : (t.__h.forEach(S), t.__h.forEach(N), t.__h = [], ce = 0)), fe = se
    }, ve.diffed = function(e) {
        ge && ge(e);
        var t = e.__c;
        t && t.__H && (t.__H.__h.length && (1 !== de.push(t) && ae === ve.requestAnimationFrame || ((ae = ve.requestAnimationFrame) || O)(H)), t.__H.__.forEach((function(e) {
            e.i && (e.__H = e.i), e.__V !== he && (e.__ = e.__V), e.i = void 0, e.__V = he
        }))), fe = se = null
    }, ve.__c = function(e, t) {
        t.some((function(e) {
            try {
                e.__h.forEach(S), e.__h = e.__h.filter((function(e) {
                    return !e.__ || N(e)
                }))
            } catch (_) {
                t.some((function(e) {
                    e.__h && (e.__h = [])
                })), t = [], ve.__e(_, e.__v)
            }
        })), be && be(e, t)
    }, ve.unmount = function(e) {
        ke && ke(e);
        var t, _ = e.__c;
        _ && _.__H && (_.__H.__.forEach((function(e) {
            try {
                S(e)
            } catch (e) {
                t = e
            }
        })), _.__H = void 0, t && ve.__e(t, _.__v))
    };
    var Ee = "function" == typeof requestAnimationFrame,
        Te = te(oe()),
        Pe = (e, t, _, n) => {
            let o = _ && _.length > 0 ? n[`${_.join("~")}~${e.code}`] : n[`${t}${e.code}`] || n[`${t}${e.key.toLowerCase()}`];
            return o ? (o(e), []) : t || "Shift" === e.key ? [] : [..._, e.code]
        },
        xe = {
            timeout: 0
        };
    F.propTypes = {
        shortcuts: Te.default.object.isRequired,
        options: Te.default.shape({
            timeout: Te.default.number
        }),
        eventTarget: Te.default.oneOfType([Te.default.instanceOf(Element), Te.default.instanceOf(Window)])
    }, F.defaultProps = {
        shortcuts: {},
        options: {},
        eventTarget: window
    }, document.addEventListener("DOMContentLoaded", (() => {
        let e = document.getElementById("global-signup-modal");
        E(_(F, {
            shortcuts: {
                Escape() {
                    let e = document.getElementById("global-signup-modal");
                    null == e || e.classList.add("hidden")
                }
            }
        }), e)
    }))
})();