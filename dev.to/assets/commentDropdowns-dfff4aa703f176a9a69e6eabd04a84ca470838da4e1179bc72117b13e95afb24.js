(() => {
    function e({
        element: e,
        offsetTop: t = 0,
        allowPartialVisibility: r = !1
    }) {
        let n = e.getBoundingClientRect(),
            o = window.innerHeight || document.documentElement.clientHeight,
            i = window.innerWidth || document.documentElement.clientWidth,
            a = n.top <= o && n.top >= t,
            u = n.right >= 0 && n.right <= i,
            s = n.bottom >= t && n.bottom <= o,
            l = n.left <= i && n.left >= 0,
            c = n.top <= t,
            f = n.bottom >= o;
        return r ? (a || s || c && f) && (l || u) : a && s && l && u
    }

    function t(e, {
        time: t = 200,
        config: r = {
            leading: !1
        }
    } = {}) {
        let n = { ...r
        };
        return (0, Cn.default)(e, t, n)
    }

    function r({
        pluralizer: e,
        includeZero: t = !0,
        ordinal: r = !1
    }) {
        return function(n, o) {
            return [t && 0 === o ? "zero" : "", e(o, r)].filter(Boolean)
        }
    }

    function n(e) {
        return e ? Object.keys(e).reduce(((t, r) => (t[(0, qn.default)(r)] = e[r], t)), {}) : {}
    }

    function o(e) {
        return null != e
    }

    function i(e, t, r) {
        let n = [{
            scope: t
        }];
        if (o(r.defaults) && (n = n.concat(r.defaults)), o(r.defaultValue)) {
            let o = "function" == typeof r.defaultValue ? r.defaultValue(e, t, r) : r.defaultValue;
            n.push({
                message: o
            }), delete r.defaultValue
        }
        return n
    }

    function a(e) {
        function t(e, r) {
            var n, o, a, u, s, l, f, p, d = this;
            if (!(d instanceof t)) return new t(e, r);
            if (null == r) {
                if (e && !0 === e._isBigNumber) return d.s = e.s, void(!e.c || e.e > A ? d.c = d.e = null : e.e < S ? d.c = [d.e = 0] : (d.e = e.e, d.c = e.c.slice()));
                if ((l = "number" == typeof e) && 0 * e == 0) {
                    if (d.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                        for (u = 0, s = e; s >= 10; s /= 10, u++);
                        return void(u > A ? d.c = d.e = null : (d.e = u, d.c = [e]))
                    }
                    p = String(e)
                } else {
                    if (!Gn.test(p = String(e))) return b(d, p, l);
                    d.s = 45 == p.charCodeAt(0) ? (p = p.slice(1), -1) : 1
                }(u = p.indexOf(".")) > -1 && (p = p.replace(".", "")), (s = p.search(/e/i)) > 0 ? (u < 0 && (u = s), u += +p.slice(s + 1), p = p.substring(0, s)) : u < 0 && (u = p.length)
            } else {
                if (c(r, 2, M.length, "Base"), 10 == r && L) return i(d = new t(e), _ + d.e + 1, O);
                if (p = String(e), l = "number" == typeof e) {
                    if (0 * e != 0) return b(d, p, l, r);
                    if (d.s = 1 / e < 0 ? (p = p.slice(1), -1) : 1, t.DEBUG && p.replace(/^0\.0*|\./, "").length > 15) throw Error(Qn + e)
                } else d.s = 45 === p.charCodeAt(0) ? (p = p.slice(1), -1) : 1;
                for (n = M.slice(0, r), u = s = 0, f = p.length; s < f; s++)
                    if (n.indexOf(o = p.charAt(s)) < 0) {
                        if ("." == o) {
                            if (s > u) {
                                u = f;
                                continue
                            }
                        } else if (!a && (p == p.toUpperCase() && (p = p.toLowerCase()) || p == p.toLowerCase() && (p = p.toUpperCase()))) {
                            a = !0, s = -1, u = 0;
                            continue
                        }
                        return b(d, String(e), l, r)
                    }
                l = !1, (u = (p = v(p, r, 10, d.s)).indexOf(".")) > -1 ? p = p.replace(".", "") : u = p.length
            }
            for (s = 0; 48 === p.charCodeAt(s); s++);
            for (f = p.length; 48 === p.charCodeAt(--f););
            if (p = p.slice(s, ++f)) {
                if (f -= s, l && t.DEBUG && f > 15 && (e > to || e !== Yn(e))) throw Error(Qn + d.s * e);
                if ((u = u - s - 1) > A) d.c = d.e = null;
                else if (u < S) d.c = [d.e = 0];
                else {
                    if (d.e = u, d.c = [], s = (u + 1) % eo, u < 0 && (s += eo), s < f) {
                        for (s && d.c.push(+p.slice(0, s)), f -= eo; s < f;) d.c.push(+p.slice(s, s += eo));
                        s = eo - (p = p.slice(s)).length
                    } else s -= f;
                    for (; s--; p += "0");
                    d.c.push(+p)
                }
            } else d.c = [d.e = 0]
        }

        function r(e, r, n, o) {
            var a, u, l, f, h;
            if (null == n ? n = O : c(n, 0, 8), !e.c) return e.toString();
            if (a = e.c[0], l = e.e, null == r) h = s(e.c), h = 1 == o || 2 == o && (l <= j || l >= E) ? p(h, l) : d(h, l, "0");
            else if (u = (e = i(new t(e), r, n)).e, f = (h = s(e.c)).length, 1 == o || 2 == o && (r <= u || u <= j)) {
                for (; f < r; h += "0", f++);
                h = p(h, u)
            } else if (r -= l, h = d(h, u, "0"), u + 1 > f) {
                if (--r > 0)
                    for (h += "."; r--; h += "0");
            } else if ((r += u - f) > 0)
                for (u + 1 == f && (h += "."); r--; h += "0");
            return e.s < 0 && a ? "-" + h : h
        }

        function n(e, r) {
            for (var n, o = 1, i = new t(e[0]); o < e.length; o++) {
                if (!(n = new t(e[o])).s) {
                    i = n;
                    break
                }
                r.call(i, n) && (i = n)
            }
            return i
        }

        function o(e, t, r) {
            for (var n = 1, o = t.length; !t[--o]; t.pop());
            for (o = t[0]; o >= 10; o /= 10, n++);
            return (r = n + r * eo - 1) > A ? e.c = e.e = null : r < S ? e.c = [e.e = 0] : (e.e = r, e.c = t), e
        }

        function i(e, t, r, n) {
            var o, i, a, u, s, l, c, f = e.c,
                p = ro;
            if (f) {
                e: {
                    for (o = 1, u = f[0]; u >= 10; u /= 10, o++);
                    if ((i = t - o) < 0) i += eo,
                    a = t,
                    c = (s = f[l = 0]) / p[o - a - 1] % 10 | 0;
                    else if ((l = Jn((i + 1) / eo)) >= f.length) {
                        if (!n) break e;
                        for (; f.length <= l; f.push(0));
                        s = c = 0, o = 1, a = (i %= eo) - eo + 1
                    } else {
                        for (s = u = f[l], o = 1; u >= 10; u /= 10, o++);
                        c = (a = (i %= eo) - eo + o) < 0 ? 0 : s / p[o - a - 1] % 10 | 0
                    }
                    if (n = n || t < 0 || null != f[l + 1] || (a < 0 ? s : s % p[o - a - 1]), n = r < 4 ? (c || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : c > 5 || 5 == c && (4 == r || n || 6 == r && (i > 0 ? a > 0 ? s / p[o - a] : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !f[0]) return f.length = 0, n ? (t -= e.e + 1, f[0] = p[(eo - t % eo) % eo], e.e = -t || 0) : f[0] = e.e = 0, e;
                    if (0 == i ? (f.length = l, u = 1, l--) : (f.length = l + 1, u = p[eo - i], f[l] = a > 0 ? Yn(s / p[o - a] % p[a]) * u : 0), n)
                        for (;;) {
                            if (0 == l) {
                                for (i = 1, a = f[0]; a >= 10; a /= 10, i++);
                                for (a = f[0] += u, u = 1; a >= 10; a /= 10, u++);
                                i != u && (e.e++, f[0] == Xn && (f[0] = 1));
                                break
                            }
                            if (f[l] += u, f[l] != Xn) break;
                            f[l--] = 0, u = 1
                        }
                    for (i = f.length; 0 === f[--i]; f.pop());
                }
                e.e > A ? e.c = e.e = null : e.e < S && (e.c = [e.e = 0])
            }
            return e
        }

        function h(e) {
            var t, r = e.e;
            return null === r ? e.toString() : (t = s(e.c), t = r <= j || r >= E ? p(t, r) : d(t, r, "0"), e.s < 0 ? "-" + t : t)
        }
        var g, v, b, m, y, x = t.prototype = {
                constructor: t,
                toString: null,
                valueOf: null
            },
            w = new t(1),
            _ = 20,
            O = 4,
            j = -7,
            E = 21,
            S = -1e7,
            A = 1e7,
            N = !1,
            I = 1,
            T = 0,
            C = {
                prefix: "",
                groupSize: 3,
                secondaryGroupSize: 0,
                groupSeparator: ",",
                decimalSeparator: ".",
                fractionGroupSize: 0,
                fractionGroupSeparator: "\xa0",
                suffix: ""
            },
            M = "0123456789abcdefghijklmnopqrstuvwxyz",
            L = !0;
        return t.clone = a, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = function(e) {
            var t, r;
            if (null != e) {
                if ("object" != typeof e) throw Error(Kn + "Object expected: " + e);
                if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (c(r = e[t], 0, oo, t), _ = r), e.hasOwnProperty(t = "ROUNDING_MODE") && (c(r = e[t], 0, 8, t), O = r), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((r = e[t]) && r.pop ? (c(r[0], -oo, 0, t), c(r[1], 0, oo, t), j = r[0], E = r[1]) : (c(r, -oo, oo, t), j = -(E = r < 0 ? -r : r))), e.hasOwnProperty(t = "RANGE"))
                    if ((r = e[t]) && r.pop) c(r[0], -oo, -1, t), c(r[1], 1, oo, t), S = r[0], A = r[1];
                    else {
                        if (c(r, -oo, oo, t), !r) throw Error(Kn + t + " cannot be zero: " + r);
                        S = -(A = r < 0 ? -r : r)
                    }
                if (e.hasOwnProperty(t = "CRYPTO")) {
                    if ((r = e[t]) !== !!r) throw Error(Kn + t + " not true or false: " + r);
                    if (r) {
                        if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw N = !r, Error(Kn + "crypto unavailable");
                        N = r
                    } else N = r
                }
                if (e.hasOwnProperty(t = "MODULO_MODE") && (c(r = e[t], 0, 9, t), I = r), e.hasOwnProperty(t = "POW_PRECISION") && (c(r = e[t], 0, oo, t), T = r), e.hasOwnProperty(t = "FORMAT")) {
                    if ("object" != typeof(r = e[t])) throw Error(Kn + t + " not an object: " + r);
                    C = r
                }
                if (e.hasOwnProperty(t = "ALPHABET")) {
                    if ("string" != typeof(r = e[t]) || /^.?$|[+\-.\s]|(.).*\1/.test(r)) throw Error(Kn + t + " invalid: " + r);
                    L = "0123456789" == r.slice(0, 10), M = r
                }
            }
            return {
                DECIMAL_PLACES: _,
                ROUNDING_MODE: O,
                EXPONENTIAL_AT: [j, E],
                RANGE: [S, A],
                CRYPTO: N,
                MODULO_MODE: I,
                POW_PRECISION: T,
                FORMAT: C,
                ALPHABET: M
            }
        }, t.isBigNumber = function(e) {
            if (!e || !0 !== e._isBigNumber) return !1;
            if (!t.DEBUG) return !0;
            var r, n, o = e.c,
                i = e.e,
                a = e.s;
            e: if ("[object Array]" == {}.toString.call(o)) {
                if ((1 === a || -1 === a) && i >= -oo && i <= oo && i === Yn(i)) {
                    if (0 === o[0]) {
                        if (0 === i && 1 === o.length) return !0;
                        break e
                    }
                    if ((r = (i + 1) % eo) < 1 && (r += eo), String(o[0]).length == r) {
                        for (r = 0; r < o.length; r++)
                            if ((n = o[r]) < 0 || n >= Xn || n !== Yn(n)) break e;
                        if (0 !== n) return !0
                    }
                }
            } else
            if (null === o && null === i && (null === a || 1 === a || -1 === a)) return !0;
            throw Error(Kn + "Invalid BigNumber: " + e)
        }, t.maximum = t.max = function() {
            return n(arguments, x.lt)
        }, t.minimum = t.min = function() {
            return n(arguments, x.gt)
        }, t.random = (m = 9007199254740992, y = Math.random() * m & 2097151 ? function() {
            return Yn(Math.random() * m)
        } : function() {
            return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
        }, function(e) {
            var r, n, o, i, a, u = 0,
                s = [],
                l = new t(w);
            if (null == e ? e = _ : c(e, 0, oo), i = Jn(e / eo), N)
                if (crypto.getRandomValues) {
                    for (r = crypto.getRandomValues(new Uint32Array(i *= 2)); u < i;)(a = 131072 * r[u] + (r[u + 1] >>> 11)) >= 9e15 ? (n = crypto.getRandomValues(new Uint32Array(2)), r[u] = n[0], r[u + 1] = n[1]) : (s.push(a % 1e14), u += 2);
                    u = i / 2
                } else {
                    if (!crypto.randomBytes) throw N = !1, Error(Kn + "crypto unavailable");
                    for (r = crypto.randomBytes(i *= 7); u < i;)(a = 281474976710656 * (31 & r[u]) + 1099511627776 * r[u + 1] + 4294967296 * r[u + 2] + 16777216 * r[u + 3] + (r[u + 4] << 16) + (r[u + 5] << 8) + r[u + 6]) >= 9e15 ? crypto.randomBytes(7).copy(r, u) : (s.push(a % 1e14), u += 7);
                    u = i / 7
                }
            if (!N)
                for (; u < i;)(a = y()) < 9e15 && (s[u++] = a % 1e14);
            for (i = s[--u], e %= eo, i && e && (a = ro[eo - e], s[u] = Yn(i / a) * a); 0 === s[u]; s.pop(), u--);
            if (u < 0) s = [o = 0];
            else {
                for (o = -1; 0 === s[0]; s.splice(0, 1), o -= eo);
                for (u = 1, a = s[0]; a >= 10; a /= 10, u++);
                u < eo && (o -= eo - u)
            }
            return l.e = o, l.c = s, l
        }), t.sum = function() {
            for (var e = 1, r = arguments, n = new t(r[0]); e < r.length;) n = n.plus(r[e++]);
            return n
        }, v = function() {
            function e(e, t, r, n) {
                for (var o, i, a = [0], u = 0, s = e.length; u < s;) {
                    for (i = a.length; i--; a[i] *= t);
                    for (a[0] += n.indexOf(e.charAt(u++)), o = 0; o < a.length; o++) a[o] > r - 1 && (null == a[o + 1] && (a[o + 1] = 0), a[o + 1] += a[o] / r | 0, a[o] %= r)
                }
                return a.reverse()
            }
            var r = "0123456789";
            return function(n, o, i, a, u) {
                var l, c, f, p, h, v, b, m, y = n.indexOf("."),
                    x = _,
                    w = O;
                for (y >= 0 && (p = T, T = 0, n = n.replace(".", ""), v = (m = new t(o)).pow(n.length - y), T = p, m.c = e(d(s(v.c), v.e, "0"), 10, i, r), m.e = m.c.length), f = p = (b = e(n, o, i, u ? (l = M, r) : (l = r, M))).length; 0 == b[--p]; b.pop());
                if (!b[0]) return l.charAt(0);
                if (y < 0 ? --f : (v.c = b, v.e = f, v.s = a, b = (v = g(v, m, x, w, i)).c, h = v.r, f = v.e), y = b[c = f + x + 1], p = i / 2, h = h || c < 0 || null != b[c + 1], h = w < 4 ? (null != y || h) && (0 == w || w == (v.s < 0 ? 3 : 2)) : y > p || y == p && (4 == w || h || 6 == w && 1 & b[c - 1] || w == (v.s < 0 ? 8 : 7)), c < 1 || !b[0]) n = h ? d(l.charAt(1), -x, l.charAt(0)) : l.charAt(0);
                else {
                    if (b.length = c, h)
                        for (--i; ++b[--c] > i;) b[c] = 0, c || (++f, b = [1].concat(b));
                    for (p = b.length; !b[--p];);
                    for (y = 0, n = ""; y <= p; n += l.charAt(b[y++]));
                    n = d(n, f, l.charAt(0))
                }
                return n
            }
        }(), g = function() {
            function e(e, t, r) {
                var n, o, i, a, u = 0,
                    s = e.length,
                    l = t % no,
                    c = t / no | 0;
                for (e = e.slice(); s--;) u = ((o = l * (i = e[s] % no) + (n = c * i + (a = e[s] / no | 0) * l) % no * no + u) / r | 0) + (n / no | 0) + c * a, e[s] = o % r;
                return u && (e = [u].concat(e)), e
            }

            function r(e, t, r, n) {
                var o, i;
                if (r != n) i = r > n ? 1 : -1;
                else
                    for (o = i = 0; o < r; o++)
                        if (e[o] != t[o]) {
                            i = e[o] > t[o] ? 1 : -1;
                            break
                        } return i
            }

            function n(e, t, r, n) {
                for (var o = 0; r--;) e[r] -= o, o = e[r] < t[r] ? 1 : 0, e[r] = o * n + e[r] - t[r];
                for (; !e[0] && e.length > 1; e.splice(0, 1));
            }
            return function(o, a, s, l, c) {
                var f, p, d, h, g, v, b, m, y, x, w, _, O, j, E, S, A, N = o.s == a.s ? 1 : -1,
                    I = o.c,
                    T = a.c;
                if (!(I && I[0] && T && T[0])) return new t(o.s && a.s && (I ? !T || I[0] != T[0] : T) ? I && 0 == I[0] || !T ? 0 * N : N / 0 : NaN);
                for (y = (m = new t(N)).c = [], N = s + (p = o.e - a.e) + 1, c || (c = Xn, p = u(o.e / eo) - u(a.e / eo), N = N / eo | 0), d = 0; T[d] == (I[d] || 0); d++);
                if (T[d] > (I[d] || 0) && p--, N < 0) y.push(1), h = !0;
                else {
                    for (j = I.length, S = T.length, d = 0, N += 2, (g = Yn(c / (T[0] + 1))) > 1 && (T = e(T, g, c), I = e(I, g, c), S = T.length, j = I.length), O = S, w = (x = I.slice(0, S)).length; w < S; x[w++] = 0);
                    A = T.slice(), A = [0].concat(A), E = T[0], T[1] >= c / 2 && E++;
                    do {
                        if (g = 0, (f = r(T, x, S, w)) < 0) {
                            if (_ = x[0], S != w && (_ = _ * c + (x[1] || 0)), (g = Yn(_ / E)) > 1)
                                for (g >= c && (g = c - 1), b = (v = e(T, g, c)).length, w = x.length; 1 == r(v, x, b, w);) g--, n(v, S < b ? A : T, b, c), b = v.length, f = 1;
                            else 0 == g && (f = g = 1), b = (v = T.slice()).length;
                            if (b < w && (v = [0].concat(v)), n(x, v, w, c), w = x.length, -1 == f)
                                for (; r(T, x, S, w) < 1;) g++, n(x, S < w ? A : T, w, c), w = x.length
                        } else 0 === f && (g++, x = [0]);
                        y[d++] = g, x[0] ? x[w++] = I[O] || 0 : (x = [I[O]], w = 1)
                    } while ((O++ < j || null != x[0]) && N--);
                    h = null != x[0], y[0] || y.splice(0, 1)
                }
                if (c == Xn) {
                    for (d = 1, N = y[0]; N >= 10; N /= 10, d++);
                    i(m, s + (m.e = d + p * eo - 1) + 1, l, h)
                } else m.e = p, m.r = +h;
                return m
            }
        }(), b = function() {
            var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                r = /^([^.]+)\.$/,
                n = /^\.([^.]+)$/,
                o = /^-?(Infinity|NaN)$/,
                i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function(a, u, s, l) {
                var c, f = s ? u : u.replace(i, "");
                if (o.test(f)) a.s = isNaN(f) ? null : f < 0 ? -1 : 1;
                else {
                    if (!s && (f = f.replace(e, (function(e, t, r) {
                            return c = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8, l && l != c ? e : t
                        })), l && (c = l, f = f.replace(r, "$1").replace(n, "0.$1")), u != f)) return new t(f, c);
                    if (t.DEBUG) throw Error(Kn + "Not a" + (l ? " base " + l : "") + " number: " + u);
                    a.s = null
                }
                a.c = a.e = null
            }
        }(), x.absoluteValue = x.abs = function() {
            var e = new t(this);
            return e.s < 0 && (e.s = 1), e
        }, x.comparedTo = function(e, r) {
            return l(this, new t(e, r))
        }, x.decimalPlaces = x.dp = function(e, r) {
            var n, o, a, s = this;
            if (null != e) return c(e, 0, oo), null == r ? r = O : c(r, 0, 8), i(new t(s), e + s.e + 1, r);
            if (!(n = s.c)) return null;
            if (o = ((a = n.length - 1) - u(this.e / eo)) * eo, a = n[a])
                for (; a % 10 == 0; a /= 10, o--);
            return o < 0 && (o = 0), o
        }, x.dividedBy = x.div = function(e, r) {
            return g(this, new t(e, r), _, O)
        }, x.dividedToIntegerBy = x.idiv = function(e, r) {
            return g(this, new t(e, r), 0, 1)
        }, x.exponentiatedBy = x.pow = function(e, r) {
            var n, o, a, u, s, l, c, p, d, g = this;
            if ((e = new t(e)).c && !e.isInteger()) throw Error(Kn + "Exponent not an integer: " + h(e));
            if (null != r && (r = new t(r)), l = e.e > 14, !g.c || !g.c[0] || 1 == g.c[0] && !g.e && 1 == g.c.length || !e.c || !e.c[0]) return d = new t(Math.pow(+h(g), l ? 2 - f(e) : +h(e))), r ? d.mod(r) : d;
            if (c = e.s < 0, r) {
                if (r.c ? !r.c[0] : !r.s) return new t(NaN);
                (o = !c && g.isInteger() && r.isInteger()) && (g = g.mod(r))
            } else {
                if (e.e > 9 && (g.e > 0 || g.e < -1 || (0 == g.e ? g.c[0] > 1 || l && g.c[1] >= 24e7 : g.c[0] < 8e13 || l && g.c[0] <= 9999975e7))) return u = g.s < 0 && f(e) ? -0 : 0, g.e > -1 && (u = 1 / u), new t(c ? 1 / u : u);
                T && (u = Jn(T / eo + 2))
            }
            for (l ? (n = new t(.5), c && (e.s = 1), p = f(e)) : p = (a = Math.abs(+h(e))) % 2, d = new t(w);;) {
                if (p) {
                    if (!(d = d.times(g)).c) break;
                    u ? d.c.length > u && (d.c.length = u) : o && (d = d.mod(r))
                }
                if (a) {
                    if (0 === (a = Yn(a / 2))) break;
                    p = a % 2
                } else if (i(e = e.times(n), e.e + 1, 1), e.e > 14) p = f(e);
                else {
                    if (0 === (a = +h(e))) break;
                    p = a % 2
                }
                g = g.times(g), u ? g.c && g.c.length > u && (g.c.length = u) : o && (g = g.mod(r))
            }
            return o ? d : (c && (d = w.div(d)), r ? d.mod(r) : u ? i(d, T, O, s) : d)
        }, x.integerValue = function(e) {
            var r = new t(this);
            return null == e ? e = O : c(e, 0, 8), i(r, r.e + 1, e)
        }, x.isEqualTo = x.eq = function(e, r) {
            return 0 === l(this, new t(e, r))
        }, x.isFinite = function() {
            return !!this.c
        }, x.isGreaterThan = x.gt = function(e, r) {
            return l(this, new t(e, r)) > 0
        }, x.isGreaterThanOrEqualTo = x.gte = function(e, r) {
            return 1 === (r = l(this, new t(e, r))) || 0 === r
        }, x.isInteger = function() {
            return !!this.c && u(this.e / eo) > this.c.length - 2
        }, x.isLessThan = x.lt = function(e, r) {
            return l(this, new t(e, r)) < 0
        }, x.isLessThanOrEqualTo = x.lte = function(e, r) {
            return -1 === (r = l(this, new t(e, r))) || 0 === r
        }, x.isNaN = function() {
            return !this.s
        }, x.isNegative = function() {
            return this.s < 0
        }, x.isPositive = function() {
            return this.s > 0
        }, x.isZero = function() {
            return !!this.c && 0 == this.c[0]
        }, x.minus = function(e, r) {
            var n, i, a, s, l = this,
                c = l.s;
            if (r = (e = new t(e, r)).s, !c || !r) return new t(NaN);
            if (c != r) return e.s = -r, l.plus(e);
            var f = l.e / eo,
                p = e.e / eo,
                d = l.c,
                h = e.c;
            if (!f || !p) {
                if (!d || !h) return d ? (e.s = -r, e) : new t(h ? l : NaN);
                if (!d[0] || !h[0]) return h[0] ? (e.s = -r, e) : new t(d[0] ? l : 3 == O ? -0 : 0)
            }
            if (f = u(f), p = u(p), d = d.slice(), c = f - p) {
                for ((s = c < 0) ? (c = -c, a = d) : (p = f, a = h), a.reverse(), r = c; r--; a.push(0));
                a.reverse()
            } else
                for (i = (s = (c = d.length) < (r = h.length)) ? c : r, c = r = 0; r < i; r++)
                    if (d[r] != h[r]) {
                        s = d[r] < h[r];
                        break
                    } if (s && (a = d, d = h, h = a, e.s = -e.s), (r = (i = h.length) - (n = d.length)) > 0)
                for (; r--; d[n++] = 0);
            for (r = Xn - 1; i > c;) {
                if (d[--i] < h[i]) {
                    for (n = i; n && !d[--n]; d[n] = r);
                    --d[n], d[i] += Xn
                }
                d[i] -= h[i]
            }
            for (; 0 == d[0]; d.splice(0, 1), --p);
            return d[0] ? o(e, d, p) : (e.s = 3 == O ? -1 : 1, e.c = [e.e = 0], e)
        }, x.modulo = x.mod = function(e, r) {
            var n, o, i = this;
            return e = new t(e, r), !i.c || !e.s || e.c && !e.c[0] ? new t(NaN) : !e.c || i.c && !i.c[0] ? new t(i) : (9 == I ? (o = e.s, e.s = 1, n = g(i, e, 0, 3), e.s = o, n.s *= o) : n = g(i, e, 0, I), !(e = i.minus(n.times(e))).c[0] && 1 == I && (e.s = i.s), e)
        }, x.multipliedBy = x.times = function(e, r) {
            var n, i, a, s, l, c, f, p, d, h, g, v, b, m, y, x = this,
                w = x.c,
                _ = (e = new t(e, r)).c;
            if (!(w && _ && w[0] && _[0])) return !x.s || !e.s || w && !w[0] && !_ || _ && !_[0] && !w ? e.c = e.e = e.s = null : (e.s *= x.s, w && _ ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
            for (i = u(x.e / eo) + u(e.e / eo), e.s *= x.s, (f = w.length) < (h = _.length) && (b = w, w = _, _ = b, a = f, f = h, h = a), a = f + h, b = []; a--; b.push(0));
            for (m = Xn, y = no, a = h; --a >= 0;) {
                for (n = 0, g = _[a] % y, v = _[a] / y | 0, s = a + (l = f); s > a;) n = ((p = g * (p = w[--l] % y) + (c = v * p + (d = w[l] / y | 0) * g) % y * y + b[s] + n) / m | 0) + (c / y | 0) + v * d, b[s--] = p % m;
                b[s] = n
            }
            return n ? ++i : b.splice(0, 1), o(e, b, i)
        }, x.negated = function() {
            var e = new t(this);
            return e.s = -e.s || null, e
        }, x.plus = function(e, r) {
            var n, i = this,
                a = i.s;
            if (r = (e = new t(e, r)).s, !a || !r) return new t(NaN);
            if (a != r) return e.s = -r, i.minus(e);
            var s = i.e / eo,
                l = e.e / eo,
                c = i.c,
                f = e.c;
            if (!s || !l) {
                if (!c || !f) return new t(a / 0);
                if (!c[0] || !f[0]) return f[0] ? e : new t(c[0] ? i : 0 * a)
            }
            if (s = u(s), l = u(l), c = c.slice(), a = s - l) {
                for (a > 0 ? (l = s, n = f) : (a = -a, n = c), n.reverse(); a--; n.push(0));
                n.reverse()
            }
            for ((a = c.length) - (r = f.length) < 0 && (n = f, f = c, c = n, r = a), a = 0; r;) a = (c[--r] = c[r] + f[r] + a) / Xn | 0, c[r] = Xn === c[r] ? 0 : c[r] % Xn;
            return a && (c = [a].concat(c), ++l), o(e, c, l)
        }, x.precision = x.sd = function(e, r) {
            var n, o, a, u = this;
            if (null != e && e !== !!e) return c(e, 1, oo), null == r ? r = O : c(r, 0, 8), i(new t(u), e, r);
            if (!(n = u.c)) return null;
            if (o = (a = n.length - 1) * eo + 1, a = n[a]) {
                for (; a % 10 == 0; a /= 10, o--);
                for (a = n[0]; a >= 10; a /= 10, o++);
            }
            return e && u.e + 1 > o && (o = u.e + 1), o
        }, x.shiftedBy = function(e) {
            return c(e, -to, to), this.times("1e" + e)
        }, x.squareRoot = x.sqrt = function() {
            var e, r, n, o, a, l = this,
                c = l.c,
                f = l.s,
                p = l.e,
                d = _ + 4,
                v = new t("0.5");
            if (1 !== f || !c || !c[0]) return new t(!f || f < 0 && (!c || c[0]) ? NaN : c ? l : 1 / 0);
            if (0 == (f = Math.sqrt(+h(l))) || f == 1 / 0 ? (((r = s(c)).length + p) % 2 == 0 && (r += "0"), f = Math.sqrt(+r), p = u((p + 1) / 2) - (p < 0 || p % 2), f == 1 / 0 ? r = "5e" + p : r = (r = f.toExponential()).slice(0, r.indexOf("e") + 1) + p, n = new t(r)) : n = new t(f + ""), n.c[0])
                for ((f = (p = n.e) + d) < 3 && (f = 0);;)
                    if (a = n, n = v.times(a.plus(g(l, a, d, 1))), s(a.c).slice(0, f) === (r = s(n.c)).slice(0, f)) {
                        if (n.e < p && --f, "9999" != (r = r.slice(f - 3, f + 1)) && (o || "4999" != r)) {
                            (!+r || !+r.slice(1) && "5" == r.charAt(0)) && (i(n, n.e + _ + 2, 1), e = !n.times(n).eq(l));
                            break
                        }
                        if (!o && (i(a, a.e + _ + 2, 0), a.times(a).eq(l))) {
                            n = a;
                            break
                        }
                        d += 4, f += 4, o = 1
                    }
            return i(n, n.e + _ + 1, O, e)
        }, x.toExponential = function(e, t) {
            return null != e && (c(e, 0, oo), e++), r(this, e, t, 1)
        }, x.toFixed = function(e, t) {
            return null != e && (c(e, 0, oo), e = e + this.e + 1), r(this, e, t)
        }, x.toFormat = function(e, t, r) {
            var n, o = this;
            if (null == r) null != e && t && "object" == typeof t ? (r = t, t = null) : e && "object" == typeof e ? (r = e, e = t = null) : r = C;
            else if ("object" != typeof r) throw Error(Kn + "Argument not an object: " + r);
            if (n = o.toFixed(e, t), o.c) {
                var i, a = n.split("."),
                    u = +r.groupSize,
                    s = +r.secondaryGroupSize,
                    l = r.groupSeparator || "",
                    c = a[0],
                    f = a[1],
                    p = o.s < 0,
                    d = p ? c.slice(1) : c,
                    h = d.length;
                if (s && (i = u, u = s, s = i, h -= i), u > 0 && h > 0) {
                    for (i = h % u || u, c = d.substr(0, i); i < h; i += u) c += l + d.substr(i, u);
                    s > 0 && (c += l + d.slice(i)), p && (c = "-" + c)
                }
                n = f ? c + (r.decimalSeparator || "") + ((s = +r.fractionGroupSize) ? f.replace(new RegExp("\\d{" + s + "}\\B", "g"), "$&" + (r.fractionGroupSeparator || "")) : f) : c
            }
            return (r.prefix || "") + n + (r.suffix || "")
        }, x.toFraction = function(e) {
            var r, n, o, i, a, u, l, c, f, p, d, v, b = this,
                m = b.c;
            if (null != e && (!(l = new t(e)).isInteger() && (l.c || 1 !== l.s) || l.lt(w))) throw Error(Kn + "Argument " + (l.isInteger() ? "out of range: " : "not an integer: ") + h(l));
            if (!m) return new t(b);
            for (r = new t(w), f = n = new t(w), o = c = new t(w), v = s(m), a = r.e = v.length - b.e - 1, r.c[0] = ro[(u = a % eo) < 0 ? eo + u : u], e = !e || l.comparedTo(r) > 0 ? a > 0 ? r : f : l, u = A, A = 1 / 0, l = new t(v), c.c[0] = 0; p = g(l, r, 0, 1), 1 != (i = n.plus(p.times(o))).comparedTo(e);) n = o, o = i, f = c.plus(p.times(i = f)), c = i, r = l.minus(p.times(i = r)), l = i;
            return i = g(e.minus(n), o, 0, 1), c = c.plus(i.times(f)), n = n.plus(i.times(o)), c.s = f.s = b.s, d = g(f, o, a *= 2, O).minus(b).abs().comparedTo(g(c, n, a, O).minus(b).abs()) < 1 ? [f, o] : [c, n], A = u, d
        }, x.toNumber = function() {
            return +h(this)
        }, x.toPrecision = function(e, t) {
            return null != e && c(e, 1, oo), r(this, e, t, 2)
        }, x.toString = function(e) {
            var r, n = this,
                o = n.s,
                a = n.e;
            return null === a ? o ? (r = "Infinity", o < 0 && (r = "-" + r)) : r = "NaN" : (null == e ? r = a <= j || a >= E ? p(s(n.c), a) : d(s(n.c), a, "0") : 10 === e && L ? r = d(s((n = i(new t(n), _ + a + 1, O)).c), n.e, "0") : (c(e, 2, M.length, "Base"), r = v(d(s(n.c), a, "0"), 10, e, o, !0)), o < 0 && n.c[0] && (r = "-" + r)), r
        }, x.valueOf = x.toJSON = function() {
            return h(this)
        }, x._isBigNumber = !0, x[Symbol.toStringTag] = "BigNumber", x[Symbol.for("nodejs.util.inspect.custom")] = x.valueOf, null != e && t.set(e), t
    }

    function u(e) {
        var t = 0 | e;
        return e > 0 || e === t ? t : t - 1
    }

    function s(e) {
        for (var t, r, n = 1, o = e.length, i = e[0] + ""; n < o;) {
            for (t = e[n++] + "", r = eo - t.length; r--; t = "0" + t);
            i += t
        }
        for (o = i.length; 48 === i.charCodeAt(--o););
        return i.slice(0, o + 1 || 1)
    }

    function l(e, t) {
        var r, n, o = e.c,
            i = t.c,
            a = e.s,
            u = t.s,
            s = e.e,
            l = t.e;
        if (!a || !u) return null;
        if (r = o && !o[0], n = i && !i[0], r || n) return r ? n ? 0 : -u : a;
        if (a != u) return a;
        if (r = a < 0, n = s == l, !o || !i) return n ? 0 : !o ^ r ? 1 : -1;
        if (!n) return s > l ^ r ? 1 : -1;
        for (u = (s = o.length) < (l = i.length) ? s : l, a = 0; a < u; a++)
            if (o[a] != i[a]) return o[a] > i[a] ^ r ? 1 : -1;
        return s == l ? 0 : s > l ^ r ? 1 : -1
    }

    function c(e, t, r, n) {
        if (e < t || e > r || e !== Yn(e)) throw Error(Kn + (n || "Argument") + ("number" == typeof e ? e < t || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
    }

    function f(e) {
        var t = e.c.length - 1;
        return u(e.e / eo) == t && e.c[t] % 2 != 0
    }

    function p(e, t) {
        return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
    }

    function d(e, t, r) {
        var n, o;
        if (t < 0) {
            for (o = r + "."; ++t; o += r);
            e = o + e
        } else if (++t > (n = e.length)) {
            for (o = r, t -= n; --t; o += r);
            e += o
        } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
        return e
    }

    function h(e) {
        var t;
        return null !== (t = L[e]) && void 0 !== t ? t : L.default
    }

    function g(e) {
        return e.isZero() ? 1 : Math.floor(Math.log10(e.abs().toNumber()) + 1)
    }

    function v(e, {
        precision: t,
        significant: r
    }) {
        return r && null !== t && t > 0 ? t - g(e) : t
    }

    function b(e, t) {
        let r = v(e, t);
        if (null === r) return e.toString();
        let n = h(t.roundMode);
        if (r >= 0) return e.toFixed(r, n);
        let o = Math.pow(10, Math.abs(r));
        return (e = new io(e.div(o).toFixed(0, n)).times(o)).toString()
    }

    function m(e, {
        formattedNumber: t,
        unit: r
    }) {
        return e.replace("%n", t).replace("%u", r)
    }

    function y({
        significand: e,
        whole: t,
        precision: r
    }) {
        if ("0" === t || null === r) return e;
        let n = Math.max(0, r - t.length);
        return (null != e ? e : "").substr(0, n)
    }

    function x(e, t) {
        var r, n, o;
        let i = new io(e);
        if (t.raise && !i.isFinite()) throw new Error(`"${e}" is not a valid numeric value`);
        let a, u = b(i, t),
            s = new io(u),
            l = s.lt(0),
            c = s.isZero(),
            [f, p] = u.split("."),
            d = [],
            h = null !== (r = t.format) && void 0 !== r ? r : "%n",
            g = null !== (n = t.negativeFormat) && void 0 !== n ? n : `-${h}`,
            v = l && !c ? g : h;
        for (f = f.replace("-", ""); f.length > 0;) d.unshift(f.substr(Math.max(0, f.length - 3), 3)), f = f.substr(0, f.length - 3);
        return f = d.join(""), a = d.join(t.delimiter), p = t.significant ? y({
            whole: f,
            significand: p,
            precision: t.precision
        }) : null != p ? p : (0, ao.default)("0", null !== (o = t.precision) && void 0 !== o ? o : 0), t.stripInsignificantZeros && p && (p = p.replace(/0+$/, "")), i.isNaN() && (a = e.toString()), p && i.isFinite() && (a += (t.separator || ".") + p), m(v, {
            formattedNumber: a,
            unit: t.unit
        })
    }

    function w(e, t, r) {
        let n = "";
        return (t instanceof String || "string" == typeof t) && (n = t), t instanceof Array && (n = t.join(e.defaultSeparator)), r.scope && (n = [r.scope, n].join(e.defaultSeparator)), n
    }

    function _(e) {
        var t, r;
        if (null === e) return "null";
        let n = typeof e;
        return "object" !== n ? n : (null === (r = null === (t = null == e ? void 0 : e.constructor) || void 0 === t ? void 0 : t.name) || void 0 === r ? void 0 : r.toLowerCase()) || "object"
    }

    function O(e, t, r) {
        r = Object.keys(r).reduce(((t, n) => (t[e.transformKey(n)] = r[n], t)), {});
        let n = t.match(e.placeholder);
        if (!n) return t;
        for (; n.length;) {
            let i, a = n.shift(),
                u = a.replace(e.placeholder, "$1");
            i = o(r[u]) ? r[u].toString().replace(/\$/gm, "_#$#_") : u in r ? e.nullPlaceholder(e, a, t, r) : e.missingPlaceholder(e, a, t, r);
            let s = new RegExp(a.replace(/\{/gm, "\\{").replace(/\}/gm, "\\}"));
            t = t.replace(s, i)
        }
        return t.replace(/_#\$#_/g, "$")
    }

    function j(e, t, r = {}) {
        let n = "locale" in (r = Object.assign({}, r)) ? r.locale : e.locale,
            i = _(n),
            a = e.locales.get("string" === i ? n : typeof n).slice(),
            u = w(e, t, r).split(e.defaultSeparator).map((t => e.transformKey(t))),
            s = a.map((t => u.reduce(((e, t) => e && e[t]), e.translations[t])));
        return s.push(r.defaultValue), s.find((e => o(e)))
    }

    function E(e, t) {
        let r = new io(e);
        if (!r.isFinite()) return e.toString();
        if (!t.delimiterPattern.global) throw new Error(`options.delimiterPattern must be a global regular expression; received ${t.delimiterPattern}`);
        let [n, o] = r.toString().split(".");
        return n = n.replace(t.delimiterPattern, (e => `${e}${t.delimiter}`)), [n, o].filter(Boolean).join(t.separator)
    }

    function S(e, t, r) {
        let n, o = {
            roundMode: r.roundMode,
            precision: r.precision,
            significant: r.significant
        };
        if ("string" === _(r.units)) {
            let t = r.units;
            if (n = j(e, t), !n) throw new Error(`The scope "${e.locale}${e.defaultSeparator}${w(e,t,{})}" couldn't be found`)
        } else n = r.units;
        let i = b(new io(t), o),
            a = e => (0, uo.default)(Object.keys(e).map((e => co[e])), (e => -1 * e)),
            u = (e, t) => e[lo[t.toString()]] || "",
            s = ((e, t) => {
                let r = e.isZero() ? 0 : Math.floor(Math.log10(e.abs().toNumber()));
                return a(t).find((e => r >= e)) || 0
            })(new io(i), n),
            l = u(n, s);
        if (i = b(new io(i).div(Math.pow(10, s)), o), r.stripInsignificantZeros) {
            let [e, t] = i.split(".");
            t = (t || "").replace(/0+$/, ""), i = e, t && (i += `${r.separator}${t}`)
        }
        return r.format.replace("%n", i || "0").replace("%u", l).trim()
    }

    function A(e, t, r) {
        let n, o = h(r.roundMode),
            i = 1024,
            a = new io(t).abs(),
            u = a.lt(i),
            s = e => `number.human.storage_units.units.${u?"byte":e[l]}`,
            l = ((e, t) => {
                let r = t.length - 1,
                    n = new io(Math.log(e.toNumber())).div(Math.log(i)).integerValue(io.ROUND_DOWN).toNumber();
                return Math.min(r, n)
            })(a, fo);
        n = u ? a.integerValue() : new io(b(a.div(Math.pow(i, l)), {
            significant: r.significant,
            precision: r.precision,
            roundMode: r.roundMode
        }));
        let c = e.translate("number.human.storage_units.format", {
                defaultValue: "%n %u"
            }),
            f = e.translate(s(fo), {
                count: a.integerValue().toNumber()
            }),
            p = n.toFixed(r.precision, o);
        return r.stripInsignificantZeros && (p = p.replace(/(\..*?)0+$/, "$1").replace(/\.$/, "")), c.replace("%n", p).replace("%u", f)
    }

    function N(e) {
        if (e instanceof Date) return e;
        if ("number" == typeof e) {
            let t = new Date;
            return t.setTime(e), t
        }
        let t = new String(e).match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})(?:[.,](\d{1,3}))?)?(Z|\+00:?00)?/);
        if (t) {
            let e = t.slice(1, 8).map((e => parseInt(e, 10) || 0));
            e[1] -= 1;
            let [r, n, o, i, a, u, s] = e;
            return t[8] ? new Date(Date.UTC(r, n, o, i, a, u, s)) : new Date(r, n, o, i, a, u, s)
        }
        e.match(/([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/) && (new Date).setTime(Date.parse([RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$6, RegExp.$4, RegExp.$5].join(" ")));
        let r = new Date;
        return r.setTime(Date.parse(e)), r
    }

    function I({
        i18n: e,
        count: t,
        scope: r,
        options: n,
        baseScope: i
    }) {
        let a, u;
        if (n = Object.assign({}, n), a = "object" == typeof r && r ? r : j(e, r, n), !a) return e.missingTranslation.get(r, n);
        let s = e.pluralization.get(n.locale)(e, t),
            l = [];
        for (; s.length;) {
            let e = s.shift();
            if (o(a[e])) {
                u = a[e];
                break
            }
            l.push(e)
        }
        return o(u) ? (n.count = t, e.interpolate(e, u, n)) : e.missingTranslation.get(i.split(e.defaultSeparator).concat([l[0]]), n)
    }

    function T(e, t, r = {}) {
        let {
            abbrDayNames: n,
            dayNames: o,
            abbrMonthNames: i,
            monthNames: a,
            meridian: u
        } = Object.assign(Object.assign({}, po), r);
        if (isNaN(e.getTime())) throw new Error("strftime() requires a valid date object, but received an invalid date.");
        let s = e.getDay(),
            l = e.getDate(),
            c = e.getFullYear(),
            f = e.getMonth() + 1,
            p = e.getHours(),
            d = p,
            h = p > 11 ? "pm" : "am",
            g = e.getSeconds(),
            v = e.getMinutes(),
            b = e.getTimezoneOffset(),
            m = Math.floor(Math.abs(b / 60)),
            y = Math.abs(b) - 60 * m,
            x = (b > 0 ? "-" : "+") + (m.toString().length < 2 ? "0" + m : m) + (y.toString().length < 2 ? "0" + y : y);
        return d > 12 ? d -= 12 : 0 === d && (d = 12), t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace("%a", n[s])).replace("%A", o[s])).replace("%b", i[f])).replace("%B", a[f])).replace("%d", l.toString().padStart(2, "0"))).replace("%e", l.toString())).replace("%-d", l.toString())).replace("%H", p.toString().padStart(2, "0"))).replace("%-H", p.toString())).replace("%k", p.toString())).replace("%I", d.toString().padStart(2, "0"))).replace("%-I", d.toString())).replace("%l", d.toString())).replace("%m", f.toString().padStart(2, "0"))).replace("%-m", f.toString())).replace("%M", v.toString().padStart(2, "0"))).replace("%-M", v.toString())).replace("%p", u[h])).replace("%P", u[h].toLowerCase())).replace("%S", g.toString().padStart(2, "0"))).replace("%-S", g.toString())).replace("%w", s.toString())).replace("%y", c.toString().padStart(2, "0").substr(-2))).replace("%-y", c.toString().padStart(2, "0").substr(-2).replace(/^0+/, ""))).replace("%Y", c.toString())).replace(/%z/i, x)
    }

    function C(e, t, r, n = {}) {
        let o = n.scope || "datetime.distance_in_words",
            i = (t, r = 0) => e.t(t, {
                count: r,
                scope: o
            });
        t = N(t), r = N(r);
        let a = t.getTime() / 1e3,
            u = r.getTime() / 1e3;
        a > u && ([t, r, a, u] = [r, t, u, a]);
        let s = Math.round(u - a),
            l = Math.round((u - a) / 60),
            c = l / 60 / 24,
            f = Math.round(l / 60),
            p = Math.round(c),
            d = Math.round(p / 30);
        if (go(0, 1, l)) return n.includeSeconds ? go(0, 4, s) ? i("less_than_x_seconds", 5) : go(5, 9, s) ? i("less_than_x_seconds", 10) : go(10, 19, s) ? i("less_than_x_seconds", 20) : go(20, 39, s) ? i("half_a_minute") : go(40, 59, s) ? i("less_than_x_minutes", 1) : i("x_minutes", 1) : 0 === l ? i("less_than_x_minutes", 1) : i("x_minutes", l);
        if (go(2, 44, l)) return i("x_minutes", l);
        if (go(45, 89, l)) return i("about_x_hours", 1);
        if (go(90, 1439, l)) return i("about_x_hours", f);
        if (go(1440, 2519, l)) return i("x_days", 1);
        if (go(2520, 43199, l)) return i("x_days", p);
        if (go(43200, 86399, l)) return i("about_x_months", Math.round(l / 43200));
        if (go(86400, 525599, l)) return i("x_months", d);
        let h = t.getFullYear();
        t.getMonth() + 1 >= 3 && (h += 1);
        let g = r.getFullYear();
        r.getMonth() + 1 < 3 && (g -= 1);
        let v = 525600,
            b = l - 1440 * (h > g ? 0 : (0, ho.default)(h, g).filter((e => 1 == new Date(e, 1, 29).getMonth())).length),
            m = Math.trunc(b / v),
            y = parseFloat((b / v - m).toPrecision(3));
        return y < .25 ? i("about_x_years", m) : y < .75 ? i("over_x_years", m) : i("almost_x_years", m + 1)
    }

    function M(e, t = {}) {
        return _o.t(e, t)
    }
    var L, P, D = Object.create,
        $ = Object.defineProperty,
        B = Object.getOwnPropertyDescriptor,
        R = Object.getOwnPropertyNames,
        k = Object.getPrototypeOf,
        U = Object.prototype.hasOwnProperty,
        z = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        F = (e, t, r, n) => {
            if (t && "object" == typeof t || "function" == typeof t)
                for (let o of R(t)) !U.call(e, o) && o !== r && $(e, o, {
                    get: () => t[o],
                    enumerable: !(n = B(t, o)) || n.enumerable
                });
            return e
        },
        Z = (e, t, r) => (r = null != e ? D(k(e)) : {}, F(!t && e && e.__esModule ? r : $(r, "default", {
            value: e,
            enumerable: !0
        }), e)),
        H = z(((e, t) => {
            function r(e, t, r) {
                function o(t) {
                    var r = g,
                        n = v;
                    return g = v = void 0, j = t, m = e.apply(n, r)
                }

                function i(e) {
                    return j = e, _ = setTimeout(c, t), E ? o(e) : m
                }

                function s(e) {
                    var r = t - (e - O);
                    return S ? x(r, b - (e - j)) : r
                }

                function l(e) {
                    var r = e - O;
                    return void 0 === O || r >= t || r < 0 || S && e - j >= b
                }

                function c() {
                    var e = w();
                    if (l(e)) return f(e);
                    _ = setTimeout(c, s(e))
                }

                function f(e) {
                    return _ = void 0, A && g ? o(e) : (g = v = void 0, m)
                }

                function p() {
                    void 0 !== _ && clearTimeout(_), j = 0, g = O = v = _ = void 0
                }

                function d() {
                    return void 0 === _ ? m : f(w())
                }

                function h() {
                    var e = w(),
                        r = l(e);
                    if (g = arguments, v = this, O = e, r) {
                        if (void 0 === _) return i(O);
                        if (S) return _ = setTimeout(c, t), o(O)
                    }
                    return void 0 === _ && (_ = setTimeout(c, t)), m
                }
                var g, v, b, m, _, O, j = 0,
                    E = !1,
                    S = !1,
                    A = !0;
                if ("function" != typeof e) throw new TypeError(u);
                return t = a(t) || 0, n(r) && (E = !!r.leading, b = (S = "maxWait" in r) ? y(a(r.maxWait) || 0, t) : b, A = "trailing" in r ? !!r.trailing : A), h.cancel = p, h.flush = d, h
            }

            function n(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function o(e) {
                return !!e && "object" == typeof e
            }

            function i(e) {
                return "symbol" == typeof e || o(e) && m.call(e) == l
            }

            function a(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return s;
                if (n(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = n(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(c, "");
                var r = p.test(e);
                return r || d.test(e) ? h(e.slice(2), r ? 2 : 8) : f.test(e) ? s : +e
            }
            var u = "Expected a function",
                s = NaN,
                l = "[object Symbol]",
                c = /^\s+|\s+$/g,
                f = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i,
                d = /^0o[0-7]+$/i,
                h = parseInt,
                g = "object" == typeof window && window && window.Object === Object && window,
                v = "object" == typeof self && self && self.Object === Object && self,
                b = g || v || Function("return this")(),
                m = Object.prototype.toString,
                y = Math.max,
                x = Math.min,
                w = function() {
                    return b.Date.now()
                };
            t.exports = r
        })),
        V = z(((e, t) => {
            var r = Array.isArray;
            t.exports = r
        })),
        W = z(((e, t) => {
            var r = "object" == typeof window && window && window.Object === Object && window;
            t.exports = r
        })),
        q = z(((e, t) => {
            var r = W(),
                n = "object" == typeof self && self && self.Object === Object && self,
                o = r || n || Function("return this")();
            t.exports = o
        })),
        G = z(((e, t) => {
            var r = q().Symbol;
            t.exports = r
        })),
        J = z(((e, t) => {
            function r(e) {
                var t = i.call(e, u),
                    r = e[u];
                try {
                    e[u] = void 0;
                    var n = !0
                } catch {}
                var o = a.call(e);
                return n && (t ? e[u] = r : delete e[u]), o
            }
            var n = G(),
                o = Object.prototype,
                i = o.hasOwnProperty,
                a = o.toString,
                u = n ? n.toStringTag : void 0;
            t.exports = r
        })),
        Y = z(((e, t) => {
            function r(e) {
                return n.call(e)
            }
            var n = Object.prototype.toString;
            t.exports = r
        })),
        K = z(((e, t) => {
            function r(e) {
                return null == e ? void 0 === e ? u : a : s && s in Object(e) ? o(e) : i(e)
            }
            var n = G(),
                o = J(),
                i = Y(),
                a = "[object Null]",
                u = "[object Undefined]",
                s = n ? n.toStringTag : void 0;
            t.exports = r
        })),
        Q = z(((e, t) => {
            function r(e) {
                return null != e && "object" == typeof e
            }
            t.exports = r
        })),
        X = z(((e, t) => {
            function r(e) {
                return "symbol" == typeof e || o(e) && n(e) == i
            }
            var n = K(),
                o = Q(),
                i = "[object Symbol]";
            t.exports = r
        })),
        ee = z(((e, t) => {
            function r(e, t) {
                if (n(e)) return !1;
                var r = typeof e;
                return !("number" != r && "symbol" != r && "boolean" != r && null != e && !o(e)) || (a.test(e) || !i.test(e) || null != t && e in Object(t))
            }
            var n = V(),
                o = X(),
                i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                a = /^\w*$/;
            t.exports = r
        })),
        te = z(((e, t) => {
            function r(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
            t.exports = r
        })),
        re = z(((e, t) => {
            function r(e) {
                if (!o(e)) return !1;
                var t = n(e);
                return t == a || t == u || t == i || t == s
            }
            var n = K(),
                o = te(),
                i = "[object AsyncFunction]",
                a = "[object Function]",
                u = "[object GeneratorFunction]",
                s = "[object Proxy]";
            t.exports = r
        })),
        ne = z(((e, t) => {
            var r = q()["__core-js_shared__"];
            t.exports = r
        })),
        oe = z(((e, t) => {
            function r(e) {
                return !!i && i in e
            }
            var n, o = ne(),
                i = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
            t.exports = r
        })),
        ie = z(((e, t) => {
            function r(e) {
                if (null != e) {
                    try {
                        return n.call(e)
                    } catch {}
                    try {
                        return e + ""
                    } catch {}
                }
                return ""
            }
            var n = Function.prototype.toString;
            t.exports = r
        })),
        ae = z(((e, t) => {
            function r(e) {
                return !(!i(e) || o(e)) && (n(e) ? d : s).test(a(e))
            }
            var n = re(),
                o = oe(),
                i = te(),
                a = ie(),
                u = /[\\^$.*+?()[\]{}|]/g,
                s = /^\[object .+?Constructor\]$/,
                l = Function.prototype,
                c = Object.prototype,
                f = l.toString,
                p = c.hasOwnProperty,
                d = RegExp("^" + f.call(p).replace(u, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = r
        })),
        ue = z(((e, t) => {
            function r(e, t) {
                return null == e ? void 0 : e[t]
            }
            t.exports = r
        })),
        se = z(((e, t) => {
            function r(e, t) {
                var r = o(e, t);
                return n(r) ? r : void 0
            }
            var n = ae(),
                o = ue();
            t.exports = r
        })),
        le = z(((e, t) => {
            var r = se()(Object, "create");
            t.exports = r
        })),
        ce = z(((e, t) => {
            function r() {
                this.__data__ = n ? n(null) : {}, this.size = 0
            }
            var n = le();
            t.exports = r
        })),
        fe = z(((e, t) => {
            function r(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }
            t.exports = r
        })),
        pe = z(((e, t) => {
            function r(e) {
                var t = this.__data__;
                if (n) {
                    var r = t[e];
                    return r === o ? void 0 : r
                }
                return i.call(t, e) ? t[e] : void 0
            }
            var n = le(),
                o = "__lodash_hash_undefined__",
                i = Object.prototype.hasOwnProperty;
            t.exports = r
        })),
        de = z(((e, t) => {
            function r(e) {
                var t = this.__data__;
                return n ? void 0 !== t[e] : o.call(t, e)
            }
            var n = le(),
                o = Object.prototype.hasOwnProperty;
            t.exports = r
        })),
        he = z(((e, t) => {
            function r(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? o : t, this
            }
            var n = le(),
                o = "__lodash_hash_undefined__";
            t.exports = r
        })),
        ge = z(((e, t) => {
            function r(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            var n = ce(),
                o = fe(),
                i = pe(),
                a = de(),
                u = he();
            r.prototype.clear = n, r.prototype.delete = o, r.prototype.get = i, r.prototype.has = a, r.prototype.set = u, t.exports = r
        })),
        ve = z(((e, t) => {
            function r() {
                this.__data__ = [], this.size = 0
            }
            t.exports = r
        })),
        be = z(((e, t) => {
            function r(e, t) {
                return e === t || e != e && t != t
            }
            t.exports = r
        })),
        me = z(((e, t) => {
            function r(e, t) {
                for (var r = e.length; r--;)
                    if (n(e[r][0], t)) return r;
                return -1
            }
            var n = be();
            t.exports = r
        })),
        ye = z(((e, t) => {
            function r(e) {
                var t = this.__data__,
                    r = n(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, !0)
            }
            var n = me(),
                o = Array.prototype.splice;
            t.exports = r
        })),
        xe = z(((e, t) => {
            function r(e) {
                var t = this.__data__,
                    r = n(t, e);
                return r < 0 ? void 0 : t[r][1]
            }
            var n = me();
            t.exports = r
        })),
        we = z(((e, t) => {
            function r(e) {
                return n(this.__data__, e) > -1
            }
            var n = me();
            t.exports = r
        })),
        _e = z(((e, t) => {
            function r(e, t) {
                var r = this.__data__,
                    o = n(r, e);
                return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this
            }
            var n = me();
            t.exports = r
        })),
        Oe = z(((e, t) => {
            function r(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            var n = ve(),
                o = ye(),
                i = xe(),
                a = we(),
                u = _e();
            r.prototype.clear = n, r.prototype.delete = o, r.prototype.get = i, r.prototype.has = a, r.prototype.set = u, t.exports = r
        })),
        je = z(((e, t) => {
            var r = se()(q(), "Map");
            t.exports = r
        })),
        Ee = z(((e, t) => {
            function r() {
                this.size = 0, this.__data__ = {
                    hash: new n,
                    map: new(i || o),
                    string: new n
                }
            }
            var n = ge(),
                o = Oe(),
                i = je();
            t.exports = r
        })),
        Se = z(((e, t) => {
            function r(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }
            t.exports = r
        })),
        Ae = z(((e, t) => {
            function r(e, t) {
                var r = e.__data__;
                return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            }
            var n = Se();
            t.exports = r
        })),
        Ne = z(((e, t) => {
            function r(e) {
                var t = n(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }
            var n = Ae();
            t.exports = r
        })),
        Ie = z(((e, t) => {
            function r(e) {
                return n(this, e).get(e)
            }
            var n = Ae();
            t.exports = r
        })),
        Te = z(((e, t) => {
            function r(e) {
                return n(this, e).has(e)
            }
            var n = Ae();
            t.exports = r
        })),
        Ce = z(((e, t) => {
            function r(e, t) {
                var r = n(this, e),
                    o = r.size;
                return r.set(e, t), this.size += r.size == o ? 0 : 1, this
            }
            var n = Ae();
            t.exports = r
        })),
        Me = z(((e, t) => {
            function r(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            var n = Ee(),
                o = Ne(),
                i = Ie(),
                a = Te(),
                u = Ce();
            r.prototype.clear = n, r.prototype.delete = o, r.prototype.get = i, r.prototype.has = a, r.prototype.set = u, t.exports = r
        })),
        Le = z(((e, t) => {
            function r(e, t) {
                if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(o);
                var i = function() {
                    var r = arguments,
                        n = t ? t.apply(this, r) : r[0],
                        o = i.cache;
                    if (o.has(n)) return o.get(n);
                    var a = e.apply(this, r);
                    return i.cache = o.set(n, a) || o, a
                };
                return i.cache = new(r.Cache || n), i
            }
            var n = Me(),
                o = "Expected a function";
            r.Cache = n, t.exports = r
        })),
        Pe = z(((e, t) => {
            function r(e) {
                var t = n(e, (function(e) {
                        return r.size === o && r.clear(), e
                    })),
                    r = t.cache;
                return t
            }
            var n = Le(),
                o = 500;
            t.exports = r
        })),
        De = z(((e, t) => {
            var r = Pe(),
                n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                o = /\\(\\)?/g,
                i = r((function(e) {
                    var t = [];
                    return 46 === e.charCodeAt(0) && t.push(""), e.replace(n, (function(e, r, n, i) {
                        t.push(n ? i.replace(o, "$1") : r || e)
                    })), t
                }));
            t.exports = i
        })),
        $e = z(((e, t) => {
            function r(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
                return o
            }
            t.exports = r
        })),
        Be = z(((e, t) => {
            function r(e) {
                if ("string" == typeof e) return e;
                if (i(e)) return o(e, r) + "";
                if (a(e)) return l ? l.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -u ? "-0" : t
            }
            var n = G(),
                o = $e(),
                i = V(),
                a = X(),
                u = 1 / 0,
                s = n ? n.prototype : void 0,
                l = s ? s.toString : void 0;
            t.exports = r
        })),
        Re = z(((e, t) => {
            function r(e) {
                return null == e ? "" : n(e)
            }
            var n = Be();
            t.exports = r
        })),
        ke = z(((e, t) => {
            function r(e, t) {
                return n(e) ? e : o(e, t) ? [e] : i(a(e))
            }
            var n = V(),
                o = ee(),
                i = De(),
                a = Re();
            t.exports = r
        })),
        Ue = z(((e, t) => {
            function r(e) {
                if ("string" == typeof e || n(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -o ? "-0" : t
            }
            var n = X(),
                o = 1 / 0;
            t.exports = r
        })),
        ze = z(((e, t) => {
            function r(e, t) {
                for (var r = 0, i = (t = n(t, e)).length; null != e && r < i;) e = e[o(t[r++])];
                return r && r == i ? e : void 0
            }
            var n = ke(),
                o = Ue();
            t.exports = r
        })),
        Fe = z(((e, t) => {
            function r(e, t, r) {
                var o = null == e ? void 0 : n(e, t);
                return void 0 === o ? r : o
            }
            var n = ze();
            t.exports = r
        })),
        Ze = z(((e, t) => {
            function r(e, t) {
                return null != e && n.call(e, t)
            }
            var n = Object.prototype.hasOwnProperty;
            t.exports = r
        })),
        He = z(((e, t) => {
            function r(e) {
                return o(e) && n(e) == i
            }
            var n = K(),
                o = Q(),
                i = "[object Arguments]";
            t.exports = r
        })),
        Ve = z(((e, t) => {
            var r = He(),
                n = Q(),
                o = Object.prototype,
                i = o.hasOwnProperty,
                a = o.propertyIsEnumerable,
                u = r(function() {
                    return arguments
                }()) ? r : function(e) {
                    return n(e) && i.call(e, "callee") && !a.call(e, "callee")
                };
            t.exports = u
        })),
        We = z(((e, t) => {
            function r(e, t) {
                var r = typeof e;
                return !!(t = null == t ? n : t) && ("number" == r || "symbol" != r && o.test(e)) && e > -1 && e % 1 == 0 && e < t
            }
            var n = 9007199254740991,
                o = /^(?:0|[1-9]\d*)$/;
            t.exports = r
        })),
        qe = z(((e, t) => {
            function r(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
            }
            var n = 9007199254740991;
            t.exports = r
        })),
        Ge = z(((e, t) => {
            function r(e, t, r) {
                for (var l = -1, c = (t = n(t, e)).length, f = !1; ++l < c;) {
                    var p = s(t[l]);
                    if (!(f = null != e && r(e, p))) break;
                    e = e[p]
                }
                return f || ++l != c ? f : !!(c = null == e ? 0 : e.length) && u(c) && a(p, c) && (i(e) || o(e))
            }
            var n = ke(),
                o = Ve(),
                i = V(),
                a = We(),
                u = qe(),
                s = Ue();
            t.exports = r
        })),
        Je = z(((e, t) => {
            function r(e, t) {
                return null != e && o(e, t, n)
            }
            var n = Ze(),
                o = Ge();
            t.exports = r
        })),
        Ye = z(((e, t) => {
            function r() {
                this.__data__ = new n, this.size = 0
            }
            var n = Oe();
            t.exports = r
        })),
        Ke = z(((e, t) => {
            function r(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }
            t.exports = r
        })),
        Qe = z(((e, t) => {
            function r(e) {
                return this.__data__.get(e)
            }
            t.exports = r
        })),
        Xe = z(((e, t) => {
            function r(e) {
                return this.__data__.has(e)
            }
            t.exports = r
        })),
        et = z(((e, t) => {
            function r(e, t) {
                var r = this.__data__;
                if (r instanceof n) {
                    var u = r.__data__;
                    if (!o || u.length < a - 1) return u.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new i(u)
                }
                return r.set(e, t), this.size = r.size, this
            }
            var n = Oe(),
                o = je(),
                i = Me(),
                a = 200;
            t.exports = r
        })),
        tt = z(((e, t) => {
            function r(e) {
                var t = this.__data__ = new n(e);
                this.size = t.size
            }
            var n = Oe(),
                o = Ye(),
                i = Ke(),
                a = Qe(),
                u = Xe(),
                s = et();
            r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = u, r.prototype.set = s, t.exports = r
        })),
        rt = z(((e, t) => {
            var r = se(),
                n = function() {
                    try {
                        var e = r(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch {}
                }();
            t.exports = n
        })),
        nt = z(((e, t) => {
            function r(e, t, r) {
                "__proto__" == t && n ? n(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0
                }) : e[t] = r
            }
            var n = rt();
            t.exports = r
        })),
        ot = z(((e, t) => {
            function r(e, t, r) {
                (void 0 !== r && !o(e[t], r) || void 0 === r && !(t in e)) && n(e, t, r)
            }
            var n = nt(),
                o = be();
            t.exports = r
        })),
        it = z(((e, t) => {
            function r(e) {
                return function(t, r, n) {
                    for (var o = -1, i = Object(t), a = n(t), u = a.length; u--;) {
                        var s = a[e ? u : ++o];
                        if (!1 === r(i[s], s, i)) break
                    }
                    return t
                }
            }
            t.exports = r
        })),
        at = z(((e, t) => {
            var r = it()();
            t.exports = r
        })),
        ut = z(((e, t) => {
            function r(e, t) {
                if (t) return e.slice();
                var r = e.length,
                    n = u ? u(r) : new e.constructor(r);
                return e.copy(n), n
            }
            var n = q(),
                o = "object" == typeof e && e && !e.nodeType && e,
                i = o && "object" == typeof t && t && !t.nodeType && t,
                a = i && i.exports === o ? n.Buffer : void 0,
                u = a ? a.allocUnsafe : void 0;
            t.exports = r
        })),
        st = z(((e, t) => {
            var r = q().Uint8Array;
            t.exports = r
        })),
        lt = z(((e, t) => {
            function r(e) {
                var t = new e.constructor(e.byteLength);
                return new n(t).set(new n(e)), t
            }
            var n = st();
            t.exports = r
        })),
        ct = z(((e, t) => {
            function r(e, t) {
                var r = t ? n(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.length)
            }
            var n = lt();
            t.exports = r
        })),
        ft = z(((e, t) => {
            function r(e, t) {
                var r = -1,
                    n = e.length;
                for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
                return t
            }
            t.exports = r
        })),
        pt = z(((e, t) => {
            var r = te(),
                n = Object.create,
                o = function() {
                    function e() {}
                    return function(t) {
                        if (!r(t)) return {};
                        if (n) return n(t);
                        e.prototype = t;
                        var o = new e;
                        return e.prototype = void 0, o
                    }
                }();
            t.exports = o
        })),
        dt = z(((e, t) => {
            function r(e, t) {
                return function(r) {
                    return e(t(r))
                }
            }
            t.exports = r
        })),
        ht = z(((e, t) => {
            var r = dt()(Object.getPrototypeOf, Object);
            t.exports = r
        })),
        gt = z(((e, t) => {
            function r(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || n)
            }
            var n = Object.prototype;
            t.exports = r
        })),
        vt = z(((e, t) => {
            function r(e) {
                return "function" != typeof e.constructor || i(e) ? {} : n(o(e))
            }
            var n = pt(),
                o = ht(),
                i = gt();
            t.exports = r
        })),
        bt = z(((e, t) => {
            function r(e) {
                return null != e && o(e.length) && !n(e)
            }
            var n = re(),
                o = qe();
            t.exports = r
        })),
        mt = z(((e, t) => {
            function r(e) {
                return o(e) && n(e)
            }
            var n = bt(),
                o = Q();
            t.exports = r
        })),
        yt = z(((e, t) => {
            function r() {
                return !1
            }
            t.exports = r
        })),
        xt = z(((e, t) => {
            var r = q(),
                n = yt(),
                o = "object" == typeof e && e && !e.nodeType && e,
                i = o && "object" == typeof t && t && !t.nodeType && t,
                a = i && i.exports === o ? r.Buffer : void 0,
                u = (a ? a.isBuffer : void 0) || n;
            t.exports = u
        })),
        wt = z(((e, t) => {
            function r(e) {
                if (!i(e) || n(e) != a) return !1;
                var t = o(e);
                if (null === t) return !0;
                var r = c.call(t, "constructor") && t.constructor;
                return "function" == typeof r && r instanceof r && l.call(r) == f
            }
            var n = K(),
                o = ht(),
                i = Q(),
                a = "[object Object]",
                u = Function.prototype,
                s = Object.prototype,
                l = u.toString,
                c = s.hasOwnProperty,
                f = l.call(Object);
            t.exports = r
        })),
        _t = z(((e, t) => {
            function r(e) {
                return i(e) && o(e.length) && !!I[n(e)]
            }
            var n = K(),
                o = qe(),
                i = Q(),
                a = "[object Arguments]",
                u = "[object Array]",
                s = "[object Boolean]",
                l = "[object Date]",
                c = "[object Error]",
                f = "[object Function]",
                p = "[object Map]",
                d = "[object Number]",
                h = "[object Object]",
                g = "[object RegExp]",
                v = "[object Set]",
                b = "[object String]",
                m = "[object WeakMap]",
                y = "[object ArrayBuffer]",
                x = "[object DataView]",
                w = "[object Float64Array]",
                _ = "[object Int8Array]",
                O = "[object Int16Array]",
                j = "[object Int32Array]",
                E = "[object Uint8Array]",
                S = "[object Uint8ClampedArray]",
                A = "[object Uint16Array]",
                N = "[object Uint32Array]",
                I = {};
            I["[object Float32Array]"] = I[w] = I[_] = I[O] = I[j] = I[E] = I[S] = I[A] = I[N] = !0, I[a] = I[u] = I[y] = I[s] = I[x] = I[l] = I[c] = I[f] = I[p] = I[d] = I[h] = I[g] = I[v] = I[b] = I[m] = !1, t.exports = r
        })),
        Ot = z(((e, t) => {
            function r(e) {
                return function(t) {
                    return e(t)
                }
            }
            t.exports = r
        })),
        jt = z(((e, t) => {
            var r = W(),
                n = "object" == typeof e && e && !e.nodeType && e,
                o = n && "object" == typeof t && t && !t.nodeType && t,
                i = o && o.exports === n && r.process,
                a = function() {
                    try {
                        return o && o.require && o.require("util").types || i && i.binding && i.binding("util")
                    } catch {}
                }();
            t.exports = a
        })),
        Et = z(((e, t) => {
            var r = _t(),
                n = Ot(),
                o = jt(),
                i = o && o.isTypedArray,
                a = i ? n(i) : r;
            t.exports = a
        })),
        St = z(((e, t) => {
            function r(e, t) {
                if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
            }
            t.exports = r
        })),
        At = z(((e, t) => {
            function r(e, t, r) {
                var a = e[t];
                (!i.call(e, t) || !o(a, r) || void 0 === r && !(t in e)) && n(e, t, r)
            }
            var n = nt(),
                o = be(),
                i = Object.prototype.hasOwnProperty;
            t.exports = r
        })),
        Nt = z(((e, t) => {
            function r(e, t, r, i) {
                var a = !r;
                r || (r = {});
                for (var u = -1, s = t.length; ++u < s;) {
                    var l = t[u],
                        c = i ? i(r[l], e[l], l, r, e) : void 0;
                    void 0 === c && (c = e[l]), a ? o(r, l, c) : n(r, l, c)
                }
                return r
            }
            var n = At(),
                o = nt();
            t.exports = r
        })),
        It = z(((e, t) => {
            function r(e, t) {
                for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                return n
            }
            t.exports = r
        })),
        Tt = z(((e, t) => {
            function r(e, t) {
                var r = i(e),
                    c = !r && o(e),
                    f = !r && !c && a(e),
                    p = !r && !c && !f && s(e),
                    d = r || c || f || p,
                    h = d ? n(e.length, String) : [],
                    g = h.length;
                for (var v in e)(t || l.call(e, v)) && (!d || !("length" == v || f && ("offset" == v || "parent" == v) || p && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || u(v, g))) && h.push(v);
                return h
            }
            var n = It(),
                o = Ve(),
                i = V(),
                a = xt(),
                u = We(),
                s = Et(),
                l = Object.prototype.hasOwnProperty;
            t.exports = r
        })),
        Ct = z(((e, t) => {
            function r(e) {
                var t = [];
                if (null != e)
                    for (var r in Object(e)) t.push(r);
                return t
            }
            t.exports = r
        })),
        Mt = z(((e, t) => {
            function r(e) {
                if (!n(e)) return i(e);
                var t = o(e),
                    r = [];
                for (var u in e) "constructor" == u && (t || !a.call(e, u)) || r.push(u);
                return r
            }
            var n = te(),
                o = gt(),
                i = Ct(),
                a = Object.prototype.hasOwnProperty;
            t.exports = r
        })),
        Lt = z(((e, t) => {
            function r(e) {
                return i(e) ? n(e, !0) : o(e)
            }
            var n = Tt(),
                o = Mt(),
                i = bt();
            t.exports = r
        })),
        Pt = z(((e, t) => {
            function r(e) {
                return n(e, o(e))
            }
            var n = Nt(),
                o = Lt();
            t.exports = r
        })),
        Dt = z(((e, t) => {
            function r(e, t, r, m, y, x, w) {
                var _ = v(e, r),
                    O = v(t, r),
                    j = w.get(O);
                if (j) n(e, r, j);
                else {
                    var E = x ? x(_, O, r + "", e, t, w) : void 0,
                        S = void 0 === E;
                    if (S) {
                        var A = l(O),
                            N = !A && f(O),
                            I = !A && !N && g(O);
                        E = O, A || N || I ? l(_) ? E = _ : c(_) ? E = a(_) : N ? (S = !1, E = o(O, !0)) : I ? (S = !1, E = i(O, !0)) : E = [] : h(O) || s(O) ? (E = _, s(_) ? E = b(_) : (!d(_) || p(_)) && (E = u(O))) : S = !1
                    }
                    S && (w.set(O, E), y(E, O, m, x, w), w.delete(O)), n(e, r, E)
                }
            }
            var n = ot(),
                o = ut(),
                i = ct(),
                a = ft(),
                u = vt(),
                s = Ve(),
                l = V(),
                c = mt(),
                f = xt(),
                p = re(),
                d = te(),
                h = wt(),
                g = Et(),
                v = St(),
                b = Pt();
            t.exports = r
        })),
        $t = z(((e, t) => {
            function r(e, t, c, f, p) {
                e !== t && i(t, (function(i, s) {
                    if (p || (p = new n), u(i)) a(e, t, s, c, r, f, p);
                    else {
                        var d = f ? f(l(e, s), i, s + "", e, t, p) : void 0;
                        void 0 === d && (d = i), o(e, s, d)
                    }
                }), s)
            }
            var n = tt(),
                o = ot(),
                i = at(),
                a = Dt(),
                u = te(),
                s = Lt(),
                l = St();
            t.exports = r
        })),
        Bt = z(((e, t) => {
            function r(e) {
                return e
            }
            t.exports = r
        })),
        Rt = z(((e, t) => {
            function r(e, t, r) {
                switch (r.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, r[0]);
                    case 2:
                        return e.call(t, r[0], r[1]);
                    case 3:
                        return e.call(t, r[0], r[1], r[2])
                }
                return e.apply(t, r)
            }
            t.exports = r
        })),
        kt = z(((e, t) => {
            function r(e, t, r) {
                return t = o(void 0 === t ? e.length - 1 : t, 0),
                    function() {
                        for (var i = arguments, a = -1, u = o(i.length - t, 0), s = Array(u); ++a < u;) s[a] = i[t + a];
                        a = -1;
                        for (var l = Array(t + 1); ++a < t;) l[a] = i[a];
                        return l[t] = r(s), n(e, this, l)
                    }
            }
            var n = Rt(),
                o = Math.max;
            t.exports = r
        })),
        Ut = z(((e, t) => {
            function r(e) {
                return function() {
                    return e
                }
            }
            t.exports = r
        })),
        zt = z(((e, t) => {
            var r = Ut(),
                n = rt(),
                o = Bt(),
                i = n ? function(e, t) {
                    return n(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(t),
                        writable: !0
                    })
                } : o;
            t.exports = i
        })),
        Ft = z(((e, t) => {
            function r(e) {
                var t = 0,
                    r = 0;
                return function() {
                    var a = i(),
                        u = o - (a - r);
                    if (r = a, u > 0) {
                        if (++t >= n) return arguments[0]
                    } else t = 0;
                    return e.apply(void 0, arguments)
                }
            }
            var n = 800,
                o = 16,
                i = Date.now;
            t.exports = r
        })),
        Zt = z(((e, t) => {
            var r = zt(),
                n = Ft()(r);
            t.exports = n
        })),
        Ht = z(((e, t) => {
            function r(e, t) {
                return i(o(e, t, n), e + "")
            }
            var n = Bt(),
                o = kt(),
                i = Zt();
            t.exports = r
        })),
        Vt = z(((e, t) => {
            function r(e, t, r) {
                if (!a(r)) return !1;
                var u = typeof t;
                return !!("number" == u ? o(r) && i(t, r.length) : "string" == u && t in r) && n(r[t], e)
            }
            var n = be(),
                o = bt(),
                i = We(),
                a = te();
            t.exports = r
        })),
        Wt = z(((e, t) => {
            function r(e) {
                return n((function(t, r) {
                    var n = -1,
                        i = r.length,
                        a = i > 1 ? r[i - 1] : void 0,
                        u = i > 2 ? r[2] : void 0;
                    for (a = e.length > 3 && "function" == typeof a ? (i--, a) : void 0, u && o(r[0], r[1], u) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++n < i;) {
                        var s = r[n];
                        s && e(t, s, n, a)
                    }
                    return t
                }))
            }
            var n = Ht(),
                o = Vt();
            t.exports = r
        })),
        qt = z(((e, t) => {
            var r = $t(),
                n = Wt()((function(e, t, n) {
                    r(e, t, n)
                }));
            t.exports = n
        })),
        Gt = z(((e, t) => {
            function r(e) {
                return this.__data__.set(e, n), this
            }
            var n = "__lodash_hash_undefined__";
            t.exports = r
        })),
        Jt = z(((e, t) => {
            function r(e) {
                return this.__data__.has(e)
            }
            t.exports = r
        })),
        Yt = z(((e, t) => {
            function r(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new n; ++t < r;) this.add(e[t])
            }
            var n = Me(),
                o = Gt(),
                i = Jt();
            r.prototype.add = r.prototype.push = o, r.prototype.has = i, t.exports = r
        })),
        Kt = z(((e, t) => {
            function r(e, t, r, n) {
                for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o;)
                    if (t(e[i], i, e)) return i;
                return -1
            }
            t.exports = r
        })),
        Qt = z(((e, t) => {
            function r(e) {
                return e != e
            }
            t.exports = r
        })),
        Xt = z(((e, t) => {
            function r(e, t, r) {
                for (var n = r - 1, o = e.length; ++n < o;)
                    if (e[n] === t) return n;
                return -1
            }
            t.exports = r
        })),
        er = z(((e, t) => {
            function r(e, t, r) {
                return t == t ? i(e, t, r) : n(e, o, r)
            }
            var n = Kt(),
                o = Qt(),
                i = Xt();
            t.exports = r
        })),
        tr = z(((e, t) => {
            function r(e, t) {
                return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1
            }
            var n = er();
            t.exports = r
        })),
        rr = z(((e, t) => {
            function r(e, t, r) {
                for (var n = -1, o = null == e ? 0 : e.length; ++n < o;)
                    if (r(t, e[n])) return !0;
                return !1
            }
            t.exports = r
        })),
        nr = z(((e, t) => {
            function r(e, t) {
                return e.has(t)
            }
            t.exports = r
        })),
        or = z(((e, t) => {
            var r = se()(q(), "Set");
            t.exports = r
        })),
        ir = z(((e, t) => {
            function r() {}
            t.exports = r
        })),
        ar = z(((e, t) => {
            function r(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e) {
                    r[++t] = e
                })), r
            }
            t.exports = r
        })),
        ur = z(((e, t) => {
            var r = or(),
                n = ir(),
                o = ar(),
                i = 1 / 0,
                a = r && 1 / o(new r([, -0]))[1] == i ? function(e) {
                    return new r(e)
                } : n;
            t.exports = a
        })),
        sr = z(((e, t) => {
            function r(e, t, r) {
                var c = -1,
                    f = o,
                    p = e.length,
                    d = !0,
                    h = [],
                    g = h;
                if (r) d = !1, f = i;
                else if (p >= l) {
                    var v = t ? null : u(e);
                    if (v) return s(v);
                    d = !1, f = a, g = new n
                } else g = t ? [] : h;
                e: for (; ++c < p;) {
                    var b = e[c],
                        m = t ? t(b) : b;
                    if (b = r || 0 !== b ? b : 0, d && m == m) {
                        for (var y = g.length; y--;)
                            if (g[y] === m) continue e;
                        t && g.push(m), h.push(b)
                    } else f(g, m, r) || (g !== h && g.push(m), h.push(b))
                }
                return h
            }
            var n = Yt(),
                o = tr(),
                i = rr(),
                a = nr(),
                u = ur(),
                s = ar(),
                l = 200;
            t.exports = r
        })),
        lr = z(((e, t) => {
            function r(e) {
                return e && e.length ? n(e) : []
            }
            var n = sr();
            t.exports = r
        })),
        cr = z(((e, t) => {
            function r(e, t, r) {
                var n = -1,
                    o = e.length;
                t < 0 && (t = -t > o ? 0 : o + t), (r = r > o ? o : r) < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
                for (var i = Array(o); ++n < o;) i[n] = e[n + t];
                return i
            }
            t.exports = r
        })),
        fr = z(((e, t) => {
            function r(e, t, r) {
                var o = e.length;
                return r = void 0 === r ? o : r, !t && r >= o ? e : n(e, t, r)
            }
            var n = cr();
            t.exports = r
        })),
        pr = z(((e, t) => {
            function r(e) {
                return n.test(e)
            }
            var n = RegExp("[" + "\\u200d" + "\\ud800-\\udfff" + ("\\u0300-\\u036f" + "\\ufe20-\\ufe2f" + "\\u20d0-\\u20ff") + "\\ufe0e\\ufe0f" + "]");
            t.exports = r
        })),
        dr = z(((e, t) => {
            function r(e) {
                return e.split("")
            }
            t.exports = r
        })),
        hr = z(((e, t) => {
            function r(e) {
                return e.match(h) || []
            }
            var n = "\\ud800-\\udfff",
                o = "[" + n + "]",
                i = "[" + ("\\u0300-\\u036f" + "\\ufe20-\\ufe2f" + "\\u20d0-\\u20ff") + "]",
                a = "\\ud83c[\\udffb-\\udfff]",
                u = "[^" + n + "]",
                s = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                l = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                c = "(?:" + i + "|" + a + ")" + "?",
                f = "[" + "\\ufe0e\\ufe0f" + "]?",
                p = f + c + ("(?:" + "\\u200d" + "(?:" + [u, s, l].join("|") + ")" + f + c + ")*"),
                d = "(?:" + [u + i + "?", i, s, l, o].join("|") + ")",
                h = RegExp(a + "(?=" + a + ")|" + d + p, "g");
            t.exports = r
        })),
        gr = z(((e, t) => {
            function r(e) {
                return o(e) ? i(e) : n(e)
            }
            var n = dr(),
                o = pr(),
                i = hr();
            t.exports = r
        })),
        vr = z(((e, t) => {
            function r(e) {
                return function(t) {
                    t = a(t);
                    var r = o(t) ? i(t) : void 0,
                        u = r ? r[0] : t.charAt(0),
                        s = r ? n(r, 1).join("") : t.slice(1);
                    return u[e]() + s
                }
            }
            var n = fr(),
                o = pr(),
                i = gr(),
                a = Re();
            t.exports = r
        })),
        br = z(((e, t) => {
            var r = vr()("toUpperCase");
            t.exports = r
        })),
        mr = z(((e, t) => {
            function r(e) {
                return o(n(e).toLowerCase())
            }
            var n = Re(),
                o = br();
            t.exports = r
        })),
        yr = z(((e, t) => {
            function r(e, t, r, n) {
                var o = -1,
                    i = null == e ? 0 : e.length;
                for (n && i && (r = e[++o]); ++o < i;) r = t(r, e[o], o, e);
                return r
            }
            t.exports = r
        })),
        xr = z(((e, t) => {
            function r(e) {
                return function(t) {
                    return null == e ? void 0 : e[t]
                }
            }
            t.exports = r
        })),
        wr = z(((e, t) => {
            var r = xr()({
                "\xc0": "A",
                "\xc1": "A",
                "\xc2": "A",
                "\xc3": "A",
                "\xc4": "A",
                "\xc5": "A",
                "\xe0": "a",
                "\xe1": "a",
                "\xe2": "a",
                "\xe3": "a",
                "\xe4": "a",
                "\xe5": "a",
                "\xc7": "C",
                "\xe7": "c",
                "\xd0": "D",
                "\xf0": "d",
                "\xc8": "E",
                "\xc9": "E",
                "\xca": "E",
                "\xcb": "E",
                "\xe8": "e",
                "\xe9": "e",
                "\xea": "e",
                "\xeb": "e",
                "\xcc": "I",
                "\xcd": "I",
                "\xce": "I",
                "\xcf": "I",
                "\xec": "i",
                "\xed": "i",
                "\xee": "i",
                "\xef": "i",
                "\xd1": "N",
                "\xf1": "n",
                "\xd2": "O",
                "\xd3": "O",
                "\xd4": "O",
                "\xd5": "O",
                "\xd6": "O",
                "\xd8": "O",
                "\xf2": "o",
                "\xf3": "o",
                "\xf4": "o",
                "\xf5": "o",
                "\xf6": "o",
                "\xf8": "o",
                "\xd9": "U",
                "\xda": "U",
                "\xdb": "U",
                "\xdc": "U",
                "\xf9": "u",
                "\xfa": "u",
                "\xfb": "u",
                "\xfc": "u",
                "\xdd": "Y",
                "\xfd": "y",
                "\xff": "y",
                "\xc6": "Ae",
                "\xe6": "ae",
                "\xde": "Th",
                "\xfe": "th",
                "\xdf": "ss",
                "\u0100": "A",
                "\u0102": "A",
                "\u0104": "A",
                "\u0101": "a",
                "\u0103": "a",
                "\u0105": "a",
                "\u0106": "C",
                "\u0108": "C",
                "\u010a": "C",
                "\u010c": "C",
                "\u0107": "c",
                "\u0109": "c",
                "\u010b": "c",
                "\u010d": "c",
                "\u010e": "D",
                "\u0110": "D",
                "\u010f": "d",
                "\u0111": "d",
                "\u0112": "E",
                "\u0114": "E",
                "\u0116": "E",
                "\u0118": "E",
                "\u011a": "E",
                "\u0113": "e",
                "\u0115": "e",
                "\u0117": "e",
                "\u0119": "e",
                "\u011b": "e",
                "\u011c": "G",
                "\u011e": "G",
                "\u0120": "G",
                "\u0122": "G",
                "\u011d": "g",
                "\u011f": "g",
                "\u0121": "g",
                "\u0123": "g",
                "\u0124": "H",
                "\u0126": "H",
                "\u0125": "h",
                "\u0127": "h",
                "\u0128": "I",
                "\u012a": "I",
                "\u012c": "I",
                "\u012e": "I",
                "\u0130": "I",
                "\u0129": "i",
                "\u012b": "i",
                "\u012d": "i",
                "\u012f": "i",
                "\u0131": "i",
                "\u0134": "J",
                "\u0135": "j",
                "\u0136": "K",
                "\u0137": "k",
                "\u0138": "k",
                "\u0139": "L",
                "\u013b": "L",
                "\u013d": "L",
                "\u013f": "L",
                "\u0141": "L",
                "\u013a": "l",
                "\u013c": "l",
                "\u013e": "l",
                "\u0140": "l",
                "\u0142": "l",
                "\u0143": "N",
                "\u0145": "N",
                "\u0147": "N",
                "\u014a": "N",
                "\u0144": "n",
                "\u0146": "n",
                "\u0148": "n",
                "\u014b": "n",
                "\u014c": "O",
                "\u014e": "O",
                "\u0150": "O",
                "\u014d": "o",
                "\u014f": "o",
                "\u0151": "o",
                "\u0154": "R",
                "\u0156": "R",
                "\u0158": "R",
                "\u0155": "r",
                "\u0157": "r",
                "\u0159": "r",
                "\u015a": "S",
                "\u015c": "S",
                "\u015e": "S",
                "\u0160": "S",
                "\u015b": "s",
                "\u015d": "s",
                "\u015f": "s",
                "\u0161": "s",
                "\u0162": "T",
                "\u0164": "T",
                "\u0166": "T",
                "\u0163": "t",
                "\u0165": "t",
                "\u0167": "t",
                "\u0168": "U",
                "\u016a": "U",
                "\u016c": "U",
                "\u016e": "U",
                "\u0170": "U",
                "\u0172": "U",
                "\u0169": "u",
                "\u016b": "u",
                "\u016d": "u",
                "\u016f": "u",
                "\u0171": "u",
                "\u0173": "u",
                "\u0174": "W",
                "\u0175": "w",
                "\u0176": "Y",
                "\u0177": "y",
                "\u0178": "Y",
                "\u0179": "Z",
                "\u017b": "Z",
                "\u017d": "Z",
                "\u017a": "z",
                "\u017c": "z",
                "\u017e": "z",
                "\u0132": "IJ",
                "\u0133": "ij",
                "\u0152": "Oe",
                "\u0153": "oe",
                "\u0149": "'n",
                "\u017f": "s"
            });
            t.exports = r
        })),
        _r = z(((e, t) => {
            function r(e) {
                return (e = o(e)) && e.replace(i, n).replace(a, "")
            }
            var n = wr(),
                o = Re(),
                i = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                a = RegExp("[" + ("\\u0300-\\u036f" + "\\ufe20-\\ufe2f" + "\\u20d0-\\u20ff") + "]", "g");
            t.exports = r
        })),
        Or = z(((e, t) => {
            function r(e) {
                return e.match(n) || []
            }
            var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
            t.exports = r
        })),
        jr = z(((e, t) => {
            function r(e) {
                return n.test(e)
            }
            var n = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
            t.exports = r
        })),
        Er = z(((e, t) => {
            function r(e) {
                return e.match(A) || []
            }
            var n = "\\ud800-\\udfff",
                o = "\\u2700-\\u27bf",
                i = "a-z\\xdf-\\xf6\\xf8-\\xff",
                a = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                u = "\\xac\\xb1\\xd7\\xf7" + "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf" + "\\u2000-\\u206f" + " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                s = "['\u2019]",
                l = "[" + u + "]",
                c = "\\d+",
                f = "[" + o + "]",
                p = "[" + i + "]",
                d = "[^" + n + u + c + o + i + a + "]",
                h = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                g = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                v = "[" + a + "]",
                b = "(?:" + p + "|" + d + ")",
                m = "(?:" + v + "|" + d + ")",
                y = "(?:" + s + "(?:d|ll|m|re|s|t|ve))?",
                x = "(?:" + s + "(?:D|LL|M|RE|S|T|VE))?",
                w = "(?:" + ("[" + ("\\u0300-\\u036f" + "\\ufe20-\\ufe2f" + "\\u20d0-\\u20ff") + "]") + "|" + "\\ud83c[\\udffb-\\udfff]" + ")" + "?",
                _ = "[" + "\\ufe0e\\ufe0f" + "]?",
                O = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                j = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                E = _ + w + ("(?:" + "\\u200d" + "(?:" + ["[^" + n + "]", h, g].join("|") + ")" + _ + w + ")*"),
                S = "(?:" + [f, h, g].join("|") + ")" + E,
                A = RegExp([v + "?" + p + "+" + y + "(?=" + [l, v, "$"].join("|") + ")", m + "+" + x + "(?=" + [l, v + b, "$"].join("|") + ")", v + "?" + b + "+" + y, v + "+" + x, j, O, c, S].join("|"), "g");
            t.exports = r
        })),
        Sr = z(((e, t) => {
            function r(e, t, r) {
                return e = i(e), void 0 === (t = r ? void 0 : t) ? o(e) ? a(e) : n(e) : e.match(t) || []
            }
            var n = Or(),
                o = jr(),
                i = Re(),
                a = Er();
            t.exports = r
        })),
        Ar = z(((e, t) => {
            function r(e) {
                return function(t) {
                    return n(i(o(t).replace(a, "")), e, "")
                }
            }
            var n = yr(),
                o = _r(),
                i = Sr(),
                a = RegExp("['\u2019]", "g");
            t.exports = r
        })),
        Nr = z(((e, t) => {
            var r = mr(),
                n = Ar()((function(e, t, n) {
                    return t = t.toLowerCase(), e + (n ? r(t) : t)
                }));
            t.exports = n
        })),
        Ir = z(((e, t) => {
            function r(e, t) {
                var r = "";
                if (!e || t < 1 || t > n) return r;
                do {
                    t % 2 && (r += e), (t = o(t / 2)) && (e += e)
                } while (t);
                return r
            }
            var n = 9007199254740991,
                o = Math.floor;
            t.exports = r
        })),
        Tr = z(((e, t) => {
            function r(e) {
                for (var t = e.length; t-- && n.test(e.charAt(t)););
                return t
            }
            var n = /\s/;
            t.exports = r
        })),
        Cr = z(((e, t) => {
            function r(e) {
                return e && e.slice(0, n(e) + 1).replace(o, "")
            }
            var n = Tr(),
                o = /^\s+/;
            t.exports = r
        })),
        Mr = z(((e, t) => {
            function r(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return a;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = n(e);
                var r = s.test(e);
                return r || l.test(e) ? c(e.slice(2), r ? 2 : 8) : u.test(e) ? a : +e
            }
            var n = Cr(),
                o = te(),
                i = X(),
                a = NaN,
                u = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                c = parseInt;
            t.exports = r
        })),
        Lr = z(((e, t) => {
            function r(e) {
                return e ? (e = n(e)) === o || e === -o ? (e < 0 ? -1 : 1) * i : e == e ? e : 0 : 0 === e ? e : 0
            }
            var n = Mr(),
                o = 1 / 0,
                i = 17976931348623157e292;
            t.exports = r
        })),
        Pr = z(((e, t) => {
            function r(e) {
                var t = n(e),
                    r = t % 1;
                return t == t ? r ? t - r : t : 0
            }
            var n = Lr();
            t.exports = r
        })),
        Dr = z(((e, t) => {
            function r(e, t, r) {
                return t = (r ? o(e, t, r) : void 0 === t) ? 1 : i(t), n(a(e), t)
            }
            var n = Ir(),
                o = Vt(),
                i = Pr(),
                a = Re();
            t.exports = r
        })),
        $r = z(((e, t) => {
            function r(e, t) {
                for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
                return e
            }
            t.exports = r
        })),
        Br = z(((e, t) => {
            function r(e) {
                return i(e) || o(e) || !!(a && e && e[a])
            }
            var n = G(),
                o = Ve(),
                i = V(),
                a = n ? n.isConcatSpreadable : void 0;
            t.exports = r
        })),
        Rr = z(((e, t) => {
            function r(e, t, i, a, u) {
                var s = -1,
                    l = e.length;
                for (i || (i = o), u || (u = []); ++s < l;) {
                    var c = e[s];
                    t > 0 && i(c) ? t > 1 ? r(c, t - 1, i, a, u) : n(u, c) : a || (u[u.length] = c)
                }
                return u
            }
            var n = $r(),
                o = Br();
            t.exports = r
        })),
        kr = z(((e, t) => {
            function r(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                    if (t(e[r], r, e)) return !0;
                return !1
            }
            t.exports = r
        })),
        Ur = z(((e, t) => {
            function r(e, t, r, s, l, c) {
                var f = r & a,
                    p = e.length,
                    d = t.length;
                if (p != d && !(f && d > p)) return !1;
                var h = c.get(e),
                    g = c.get(t);
                if (h && g) return h == t && g == e;
                var v = -1,
                    b = !0,
                    m = r & u ? new n : void 0;
                for (c.set(e, t), c.set(t, e); ++v < p;) {
                    var y = e[v],
                        x = t[v];
                    if (s) var w = f ? s(x, y, v, t, e, c) : s(y, x, v, e, t, c);
                    if (void 0 !== w) {
                        if (w) continue;
                        b = !1;
                        break
                    }
                    if (m) {
                        if (!o(t, (function(e, t) {
                                if (!i(m, t) && (y === e || l(y, e, r, s, c))) return m.push(t)
                            }))) {
                            b = !1;
                            break
                        }
                    } else if (y !== x && !l(y, x, r, s, c)) {
                        b = !1;
                        break
                    }
                }
                return c.delete(e), c.delete(t), b
            }
            var n = Yt(),
                o = kr(),
                i = nr(),
                a = 1,
                u = 2;
            t.exports = r
        })),
        zr = z(((e, t) => {
            function r(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e, n) {
                    r[++t] = [n, e]
                })), r
            }
            t.exports = r
        })),
        Fr = z(((e, t) => {
            function r(e, t, r, n, _, j, E) {
                switch (r) {
                    case w:
                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                        e = e.buffer, t = t.buffer;
                    case x:
                        return !(e.byteLength != t.byteLength || !j(new o(e), new o(t)));
                    case f:
                    case p:
                    case g:
                        return i(+e, +t);
                    case d:
                        return e.name == t.name && e.message == t.message;
                    case v:
                    case m:
                        return e == t + "";
                    case h:
                        var S = u;
                    case b:
                        var A = n & l;
                        if (S || (S = s), e.size != t.size && !A) return !1;
                        var N = E.get(e);
                        if (N) return N == t;
                        n |= c, E.set(e, t);
                        var I = a(S(e), S(t), n, _, j, E);
                        return E.delete(e), I;
                    case y:
                        if (O) return O.call(e) == O.call(t)
                }
                return !1
            }
            var n = G(),
                o = st(),
                i = be(),
                a = Ur(),
                u = zr(),
                s = ar(),
                l = 1,
                c = 2,
                f = "[object Boolean]",
                p = "[object Date]",
                d = "[object Error]",
                h = "[object Map]",
                g = "[object Number]",
                v = "[object RegExp]",
                b = "[object Set]",
                m = "[object String]",
                y = "[object Symbol]",
                x = "[object ArrayBuffer]",
                w = "[object DataView]",
                _ = n ? n.prototype : void 0,
                O = _ ? _.valueOf : void 0;
            t.exports = r
        })),
        Zr = z(((e, t) => {
            function r(e, t, r) {
                var i = t(e);
                return o(e) ? i : n(i, r(e))
            }
            var n = $r(),
                o = V();
            t.exports = r
        })),
        Hr = z(((e, t) => {
            function r(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length, o = 0, i = []; ++r < n;) {
                    var a = e[r];
                    t(a, r, e) && (i[o++] = a)
                }
                return i
            }
            t.exports = r
        })),
        Vr = z(((e, t) => {
            function r() {
                return []
            }
            t.exports = r
        })),
        Wr = z(((e, t) => {
            var r = Hr(),
                n = Vr(),
                o = Object.prototype.propertyIsEnumerable,
                i = Object.getOwnPropertySymbols,
                a = i ? function(e) {
                    return null == e ? [] : (e = Object(e), r(i(e), (function(t) {
                        return o.call(e, t)
                    })))
                } : n;
            t.exports = a
        })),
        qr = z(((e, t) => {
            var r = dt()(Object.keys, Object);
            t.exports = r
        })),
        Gr = z(((e, t) => {
            function r(e) {
                if (!n(e)) return o(e);
                var t = [];
                for (var r in Object(e)) i.call(e, r) && "constructor" != r && t.push(r);
                return t
            }
            var n = gt(),
                o = qr(),
                i = Object.prototype.hasOwnProperty;
            t.exports = r
        })),
        Jr = z(((e, t) => {
            function r(e) {
                return i(e) ? n(e) : o(e)
            }
            var n = Tt(),
                o = Gr(),
                i = bt();
            t.exports = r
        })),
        Yr = z(((e, t) => {
            function r(e) {
                return n(e, i, o)
            }
            var n = Zr(),
                o = Wr(),
                i = Jr();
            t.exports = r
        })),
        Kr = z(((e, t) => {
            function r(e, t, r, a, u, s) {
                var l = r & o,
                    c = n(e),
                    f = c.length;
                if (f != n(t).length && !l) return !1;
                for (var p = f; p--;) {
                    var d = c[p];
                    if (!(l ? d in t : i.call(t, d))) return !1
                }
                var h = s.get(e),
                    g = s.get(t);
                if (h && g) return h == t && g == e;
                var v = !0;
                s.set(e, t), s.set(t, e);
                for (var b = l; ++p < f;) {
                    var m = e[d = c[p]],
                        y = t[d];
                    if (a) var x = l ? a(y, m, d, t, e, s) : a(m, y, d, e, t, s);
                    if (!(void 0 === x ? m === y || u(m, y, r, a, s) : x)) {
                        v = !1;
                        break
                    }
                    b || (b = "constructor" == d)
                }
                if (v && !b) {
                    var w = e.constructor,
                        _ = t.constructor;
                    w != _ && "constructor" in e && "constructor" in t && !("function" == typeof w && w instanceof w && "function" == typeof _ && _ instanceof _) && (v = !1)
                }
                return s.delete(e), s.delete(t), v
            }
            var n = Yr(),
                o = 1,
                i = Object.prototype.hasOwnProperty;
            t.exports = r
        })),
        Qr = z(((e, t) => {
            var r = se()(q(), "DataView");
            t.exports = r
        })),
        Xr = z(((e, t) => {
            var r = se()(q(), "Promise");
            t.exports = r
        })),
        en = z(((e, t) => {
            var r = se()(q(), "WeakMap");
            t.exports = r
        })),
        tn = z(((e, t) => {
            var r = Qr(),
                n = je(),
                o = Xr(),
                i = or(),
                a = en(),
                u = K(),
                s = ie(),
                l = "[object Map]",
                c = "[object Object]",
                f = "[object Promise]",
                p = "[object Set]",
                d = "[object WeakMap]",
                h = "[object DataView]",
                g = s(r),
                v = s(n),
                b = s(o),
                m = s(i),
                y = s(a),
                x = u;
            (r && x(new r(new ArrayBuffer(1))) != h || n && x(new n) != l || o && x(o.resolve()) != f || i && x(new i) != p || a && x(new a) != d) && (x = function(e) {
                var t = u(e),
                    r = t == c ? e.constructor : void 0,
                    n = r ? s(r) : "";
                if (n) switch (n) {
                    case g:
                        return h;
                    case v:
                        return l;
                    case b:
                        return f;
                    case m:
                        return p;
                    case y:
                        return d
                }
                return t
            }), t.exports = x
        })),
        rn = z(((e, t) => {
            function r(e, t, r, v, b, m) {
                var y = s(e),
                    x = s(t),
                    w = y ? d : u(e),
                    _ = x ? d : u(t),
                    O = (w = w == p ? h : w) == h,
                    j = (_ = _ == p ? h : _) == h,
                    E = w == _;
                if (E && l(e)) {
                    if (!l(t)) return !1;
                    y = !0, O = !1
                }
                if (E && !O) return m || (m = new n), y || c(e) ? o(e, t, r, v, b, m) : i(e, t, w, r, v, b, m);
                if (!(r & f)) {
                    var S = O && g.call(e, "__wrapped__"),
                        A = j && g.call(t, "__wrapped__");
                    if (S || A) {
                        var N = S ? e.value() : e,
                            I = A ? t.value() : t;
                        return m || (m = new n), b(N, I, r, v, m)
                    }
                }
                return !!E && (m || (m = new n), a(e, t, r, v, b, m))
            }
            var n = tt(),
                o = Ur(),
                i = Fr(),
                a = Kr(),
                u = tn(),
                s = V(),
                l = xt(),
                c = Et(),
                f = 1,
                p = "[object Arguments]",
                d = "[object Array]",
                h = "[object Object]",
                g = Object.prototype.hasOwnProperty;
            t.exports = r
        })),
        nn = z(((e, t) => {
            function r(e, t, i, a, u) {
                return e === t || (null == e || null == t || !o(e) && !o(t) ? e != e && t != t : n(e, t, i, a, r, u))
            }
            var n = rn(),
                o = Q();
            t.exports = r
        })),
        on = z(((e, t) => {
            function r(e, t, r, u) {
                var s = r.length,
                    l = s,
                    c = !u;
                if (null == e) return !l;
                for (e = Object(e); s--;) {
                    var f = r[s];
                    if (c && f[2] ? f[1] !== e[f[0]] : !(f[0] in e)) return !1
                }
                for (; ++s < l;) {
                    var p = (f = r[s])[0],
                        d = e[p],
                        h = f[1];
                    if (c && f[2]) {
                        if (void 0 === d && !(p in e)) return !1
                    } else {
                        var g = new n;
                        if (u) var v = u(d, h, p, e, t, g);
                        if (!(void 0 === v ? o(h, d, i | a, u, g) : v)) return !1
                    }
                }
                return !0
            }
            var n = tt(),
                o = nn(),
                i = 1,
                a = 2;
            t.exports = r
        })),
        an = z(((e, t) => {
            function r(e) {
                return e == e && !n(e)
            }
            var n = te();
            t.exports = r
        })),
        un = z(((e, t) => {
            function r(e) {
                for (var t = o(e), r = t.length; r--;) {
                    var i = t[r],
                        a = e[i];
                    t[r] = [i, a, n(a)]
                }
                return t
            }
            var n = an(),
                o = Jr();
            t.exports = r
        })),
        sn = z(((e, t) => {
            function r(e, t) {
                return function(r) {
                    return null != r && (r[e] === t && (void 0 !== t || e in Object(r)))
                }
            }
            t.exports = r
        })),
        ln = z(((e, t) => {
            function r(e) {
                var t = o(e);
                return 1 == t.length && t[0][2] ? i(t[0][0], t[0][1]) : function(r) {
                    return r === e || n(r, e, t)
                }
            }
            var n = on(),
                o = un(),
                i = sn();
            t.exports = r
        })),
        cn = z(((e, t) => {
            function r(e, t) {
                return null != e && t in Object(e)
            }
            t.exports = r
        })),
        fn = z(((e, t) => {
            function r(e, t) {
                return null != e && o(e, t, n)
            }
            var n = cn(),
                o = Ge();
            t.exports = r
        })),
        pn = z(((e, t) => {
            function r(e, t) {
                return a(e) && u(t) ? s(l(e), t) : function(r) {
                    var a = o(r, e);
                    return void 0 === a && a === t ? i(r, e) : n(t, a, c | f)
                }
            }
            var n = nn(),
                o = Fe(),
                i = fn(),
                a = ee(),
                u = an(),
                s = sn(),
                l = Ue(),
                c = 1,
                f = 2;
            t.exports = r
        })),
        dn = z(((e, t) => {
            function r(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            }
            t.exports = r
        })),
        hn = z(((e, t) => {
            function r(e) {
                return function(t) {
                    return n(t, e)
                }
            }
            var n = ze();
            t.exports = r
        })),
        gn = z(((e, t) => {
            function r(e) {
                return i(e) ? n(a(e)) : o(e)
            }
            var n = dn(),
                o = hn(),
                i = ee(),
                a = Ue();
            t.exports = r
        })),
        vn = z(((e, t) => {
            function r(e) {
                return "function" == typeof e ? e : null == e ? i : "object" == typeof e ? a(e) ? o(e[0], e[1]) : n(e) : u(e)
            }
            var n = ln(),
                o = pn(),
                i = Bt(),
                a = V(),
                u = gn();
            t.exports = r
        })),
        bn = z(((e, t) => {
            function r(e, t) {
                return e && n(e, t, o)
            }
            var n = at(),
                o = Jr();
            t.exports = r
        })),
        mn = z(((e, t) => {
            function r(e, t) {
                return function(r, o) {
                    if (null == r) return r;
                    if (!n(r)) return e(r, o);
                    for (var i = r.length, a = t ? i : -1, u = Object(r);
                        (t ? a-- : ++a < i) && !1 !== o(u[a], a, u););
                    return r
                }
            }
            var n = bt();
            t.exports = r
        })),
        yn = z(((e, t) => {
            var r = bn(),
                n = mn()(r);
            t.exports = n
        })),
        xn = z(((e, t) => {
            function r(e, t) {
                var r = -1,
                    i = o(e) ? Array(e.length) : [];
                return n(e, (function(e, n, o) {
                    i[++r] = t(e, n, o)
                })), i
            }
            var n = yn(),
                o = bt();
            t.exports = r
        })),
        wn = z(((e, t) => {
            function r(e, t) {
                var r = e.length;
                for (e.sort(t); r--;) e[r] = e[r].value;
                return e
            }
            t.exports = r
        })),
        _n = z(((e, t) => {
            function r(e, t) {
                if (e !== t) {
                    var r = void 0 !== e,
                        o = null === e,
                        i = e == e,
                        a = n(e),
                        u = void 0 !== t,
                        s = null === t,
                        l = t == t,
                        c = n(t);
                    if (!s && !c && !a && e > t || a && u && l && !s && !c || o && u && l || !r && l || !i) return 1;
                    if (!o && !a && !c && e < t || c && r && i && !o && !a || s && r && i || !u && i || !l) return -1
                }
                return 0
            }
            var n = X();
            t.exports = r
        })),
        On = z(((e, t) => {
            function r(e, t, r) {
                for (var o = -1, i = e.criteria, a = t.criteria, u = i.length, s = r.length; ++o < u;) {
                    var l = n(i[o], a[o]);
                    if (l) return o >= s ? l : l * ("desc" == r[o] ? -1 : 1)
                }
                return e.index - t.index
            }
            var n = _n();
            t.exports = r
        })),
        jn = z(((e, t) => {
            function r(e, t, r) {
                t = t.length ? n(t, (function(e) {
                    return f(e) ? function(t) {
                        return o(t, 1 === e.length ? e[0] : e)
                    } : e
                })) : [c];
                var p = -1;
                t = n(t, s(i));
                var d = a(e, (function(e) {
                    return {
                        criteria: n(t, (function(t) {
                            return t(e)
                        })),
                        index: ++p,
                        value: e
                    }
                }));
                return u(d, (function(e, t) {
                    return l(e, t, r)
                }))
            }
            var n = $e(),
                o = ze(),
                i = vn(),
                a = xn(),
                u = wn(),
                s = Ot(),
                l = On(),
                c = Bt(),
                f = V();
            t.exports = r
        })),
        En = z(((e, t) => {
            var r = Rr(),
                n = jn(),
                o = Ht(),
                i = Vt(),
                a = o((function(e, t) {
                    if (null == e) return [];
                    var o = t.length;
                    return o > 1 && i(e, t[0], t[1]) ? t = [] : o > 2 && i(t[0], t[1], t[2]) && (t = [t[0]]), n(e, r(t, 1), [])
                }));
            t.exports = a
        })),
        Sn = z(((e, t) => {
            function r(e, t, r) {
                for (var n = -1, o = e.length, i = t.length, a = {}; ++n < o;) {
                    var u = n < i ? t[n] : void 0;
                    r(a, e[n], u)
                }
                return a
            }
            t.exports = r
        })),
        An = z(((e, t) => {
            function r(e, t) {
                return o(e || [], t || [], n)
            }
            var n = At(),
                o = Sn();
            t.exports = r
        })),
        Nn = z(((e, t) => {
            function r(e, t, r, i) {
                for (var a = -1, u = o(n((t - e) / (r || 1)), 0), s = Array(u); u--;) s[i ? u : ++a] = e, e += r;
                return s
            }
            var n = Math.ceil,
                o = Math.max;
            t.exports = r
        })),
        In = z(((e, t) => {
            function r(e) {
                return function(t, r, a) {
                    return a && "number" != typeof a && o(t, r, a) && (r = a = void 0), t = i(t), void 0 === r ? (r = t, t = 0) : r = i(r), a = void 0 === a ? t < r ? 1 : -1 : i(a), n(t, r, a, e)
                }
            }
            var n = Nn(),
                o = Vt(),
                i = Lr();
            t.exports = r
        })),
        Tn = z(((e, t) => {
            var r = In()();
            t.exports = r
        })),
        Cn = Z(H()),
        Mn = () => t(Ln),
        Ln = () => {
            let t = document.querySelectorAll("[data-repositioning-dropdown]");
            for (let r of t) {
                r.classList.remove("reverse");
                let t = "block" === r.style.display;
                t || (r.style.opacity = 0, r.style.display = "block"), e({
                    element: r
                }) || r.classList.add("reverse"), t || (r.style.removeProperty("display"), r.style.removeProperty("opacity"))
            }
        },
        Pn = 'button, [href], input:not([type="hidden"]), select, textarea, [tabindex="0"]',
        Dn = ({
            triggerElementId: e,
            dropdownContentId: t
        }) => {
            var r;
            let n = document.getElementById(t);
            document.getElementById(e).setAttribute("aria-expanded", "true"), n.style.display = "block", null == (r = n.querySelector(Pn)) || r.focus()
        },
        $n = ({
            triggerElementId: e,
            dropdownContentId: t,
            onClose: r
        }) => {
            var n;
            let o = document.getElementById(t);
            o && (null == (n = document.getElementById(e)) || n.setAttribute("aria-expanded", "false"), o.style.removeProperty("display"), null == r || r())
        },
        Bn = ({
            triggerElementId: e,
            dropdownContentId: t,
            dropdownContentCloseButtonId: r,
            onClose: n,
            onOpen: o
        }) => {
            var i;
            let a = document.getElementById(e),
                u = document.getElementById(t);
            if (!a || !u) return;
            a.setAttribute("aria-expanded", "false"), a.setAttribute("aria-controls", t), a.setAttribute("aria-haspopup", "true");
            let s = ({
                    key: r
                }) => {
                    "Escape" === r ? "true" === a.getAttribute("aria-expanded") && ($n({
                        triggerElementId: e,
                        dropdownContentId: t,
                        onClose: c
                    }), a.focus()) : "Tab" === r && (null != u && u.contains(document.activeElement) || $n({
                        triggerElementId: e,
                        dropdownContentId: t,
                        onClose: c
                    }))
                },
                l = ({
                    target: r
                }) => {
                    let n = document.getElementById(e);
                    n && r !== n && !u.contains(r) && !n.contains(r) && ($n({
                        triggerElementId: e,
                        dropdownContentId: t,
                        onClose: c
                    }), r.matches(Pn) || n.focus())
                },
                c = () => {
                    null == n || n(), document.removeEventListener("keyup", s), document.removeEventListener("click", l)
                };
            return a.addEventListener("click", (() => {
                var r;
                "true" === (null == (r = document.getElementById(e)) ? void 0 : r.getAttribute("aria-expanded")) ? $n({
                    triggerElementId: e,
                    dropdownContentId: t,
                    onClose: c
                }): (Dn({
                    triggerElementId: e,
                    dropdownContentId: t
                }), null == o || o(), document.addEventListener("keyup", s), document.addEventListener("click", l))
            })), r && (null == (i = document.getElementById(r)) || i.addEventListener("click", (() => {
                var r;
                $n({
                    triggerElementId: e,
                    dropdownContentId: t,
                    onClose: c
                }), null == (r = document.getElementById(e)) || r.focus()
            }))), {
                closeDropdown: () => {
                    $n({
                        triggerElementId: e,
                        dropdownContentId: t,
                        onClose: c
                    })
                }
            }
        },
        Rn = Z(Fe()),
        kn = Z(Je()),
        Un = Z(qt()),
        zn = Z(lr()),
        Fn = (e, t) => {
            let r = [],
                n = [];
            return r.push(t), t || r.push(e.locale), e.enableFallback && r.push(e.defaultLocale), r.filter(Boolean).map((e => e.toString())).forEach((function(t) {
                if (n.includes(t) || n.push(t), !e.enableFallback) return;
                let r = t.split("-");
                3 === r.length && n.push(`${r[0]}-${r[1]}`), n.push(r[0])
            })), (0, zn.default)(n)
        },
        Zn = class {
            constructor(e) {
                this.i18n = e, this.registry = {}, this.register("default", Fn)
            }
            register(e, t) {
                if ("function" != typeof t) {
                    let e = t;
                    t = () => e
                }
                this.registry[e] = t
            }
            get(e) {
                let t = this.registry[e] || this.registry[this.i18n.locale] || this.registry.default;
                return "function" == typeof t && (t = t(this.i18n, e)), t instanceof Array || (t = [t]), t
            }
        },
        Hn = (e, t) => {
            let r = String(e).split("."),
                n = !r[1],
                o = Number(r[0]) == e,
                i = o && r[0].slice(-1),
                a = o && r[0].slice(-2);
            return t ? 1 == i && 11 != a ? "one" : 2 == i && 12 != a ? "two" : 3 == i && 13 != a ? "few" : "other" : 1 == e && n ? "one" : "other"
        },
        Vn = r({
            pluralizer: Hn,
            includeZero: !0
        }),
        Wn = class {
            constructor(e) {
                this.i18n = e, this.registry = {}, this.register("default", Vn)
            }
            register(e, t) {
                this.registry[e] = t
            }
            get(e) {
                return this.registry[e] || this.registry[this.i18n.locale] || this.registry.default
            }
        },
        qn = Z(Nr()),
        Gn = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
        Jn = Math.ceil,
        Yn = Math.floor,
        Kn = "[BigNumber Error] ",
        Qn = Kn + "Number primitive has more than 15 significant digits: ",
        Xn = 1e14,
        eo = 14,
        to = 9007199254740991,
        ro = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
        no = 1e7,
        oo = 1e9,
        io = a();
    (P = L || (L = {}))[P.up = io.ROUND_UP] = "up", P[P.down = io.ROUND_DOWN] = "down", P[P.truncate = io.ROUND_DOWN] = "truncate", P[P.halfUp = io.ROUND_HALF_UP] = "halfUp", P[P.default = io.ROUND_HALF_UP] = "default", P[P.halfDown = io.ROUND_HALF_DOWN] = "halfDown", P[P.halfEven = io.ROUND_HALF_EVEN] = "halfEven", P[P.banker = io.ROUND_HALF_EVEN] = "banker", P[P.ceiling = io.ROUND_CEIL] = "ceiling", P[P.ceil = io.ROUND_CEIL] = "ceil", P[P.floor = io.ROUND_FLOOR] = "floor";
    var ao = Z(Dr()),
        uo = Z(En()),
        so = Z(An()),
        lo = {
            0: "unit",
            1: "ten",
            2: "hundred",
            3: "thousand",
            6: "million",
            9: "billion",
            12: "trillion",
            15: "quadrillion",
            "-1": "deci",
            "-2": "centi",
            "-3": "mili",
            "-6": "micro",
            "-9": "nano",
            "-12": "pico",
            "-15": "femto"
        },
        co = (0, so.default)(Object.values(lo), Object.keys(lo).map((e => parseInt(e, 10)))),
        fo = ["byte", "kb", "mb", "gb", "tb", "pb", "eb"],
        po = {
            meridian: {
                am: "AM",
                pm: "PM"
            },
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            abbrDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            abbrMonthNames: [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        ho = Z(Tn()),
        go = (e, t, r) => r >= e && r <= t,
        vo = function(e, t) {
            t instanceof Array && (t = t.join(e.defaultSeparator));
            let r = t.split(e.defaultSeparator).slice(-1)[0];
            return e.missingTranslationPrefix + r.replace("_", " ").replace(/([a-z])([A-Z])/g, ((e, t, r) => `${t} ${r.toLowerCase()}`))
        },
        bo = (e, t, r) => {
            let n = w(e, t, r),
                o = "locale" in r ? r.locale : e.locale,
                i = _(o);
            return `[missing "${["string"==i?o:i,n].join(e.defaultSeparator)}" translation]`
        },
        mo = (e, t, r) => {
            let n = w(e, t, r),
                o = [e.locale, n].join(e.defaultSeparator);
            throw new Error(`Missing translation: ${o}`)
        },
        yo = class {
            constructor(e) {
                this.i18n = e, this.registry = {}, this.register("guess", vo), this.register("message", bo), this.register("error", mo)
            }
            register(e, t) {
                this.registry[e] = t
            }
            get(e, t) {
                var r;
                return this.registry[null !== (r = t.missingBehavior) && void 0 !== r ? r : this.i18n.missingBehavior](this.i18n, e, t)
            }
        },
        xo = function(e, t, r, n) {
            function o(e) {
                return e instanceof r ? e : new r((function(t) {
                    t(e)
                }))
            }
            return new(r || (r = Promise))((function(r, i) {
                function a(e) {
                    try {
                        s(n.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function u(e) {
                    try {
                        s(n.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    e.done ? r(e.value) : o(e.value).then(a, u)
                }
                s((n = n.apply(e, t || [])).next())
            }))
        },
        wo = {
            defaultLocale: "en",
            availableLocales: ["en"],
            locale: "en",
            defaultSeparator: ".",
            placeholder: /(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,
            enableFallback: !1,
            missingBehavior: "message",
            missingTranslationPrefix: "",
            missingPlaceholder: (e, t) => `[missing "${t}" value]`,
            nullPlaceholder: (e, t, r, n) => e.missingPlaceholder(e, t, r, n),
            transformKey: e => e
        },
        _o = new class {
            constructor(e = {}, t = {}) {
                this._locale = wo.locale, this._defaultLocale = wo.defaultLocale, this._version = 0, this.onChangeHandlers = [], this.translations = {}, this.availableLocales = [], this.t = this.translate, this.p = this.pluralize, this.l = this.localize, this.distanceOfTimeInWords = this.timeAgoInWords;
                let {
                    locale: r,
                    enableFallback: n,
                    missingBehavior: o,
                    missingTranslationPrefix: i,
                    missingPlaceholder: a,
                    nullPlaceholder: u,
                    defaultLocale: s,
                    defaultSeparator: l,
                    placeholder: c,
                    transformKey: f
                } = Object.assign(Object.assign({}, wo), t);
                this.locale = r, this.defaultLocale = s, this.defaultSeparator = l, this.enableFallback = n, this.locale = r, this.missingBehavior = o, this.missingTranslationPrefix = i, this.missingPlaceholder = a, this.nullPlaceholder = u, this.placeholder = c, this.pluralization = new Wn(this), this.locales = new Zn(this), this.missingTranslation = new yo(this), this.transformKey = f, this.interpolate = O, this.store(e)
            }
            store(e) {
                (0, Un.default)(this.translations, e), this.hasChanged()
            }
            get locale() {
                return this._locale || this.defaultLocale || "en"
            }
            set locale(e) {
                if ("string" != typeof e) throw new Error(`Expected newLocale to be a string; got ${_(e)}`);
                let t = this._locale !== e;
                this._locale = e, t && this.hasChanged()
            }
            get defaultLocale() {
                return this._defaultLocale || "en"
            }
            set defaultLocale(e) {
                if ("string" != typeof e) throw new Error(`Expected newLocale to be a string; got ${_(e)}`);
                let t = this._defaultLocale !== e;
                this._defaultLocale = e, t && this.hasChanged()
            }
            translate(e, t) {
                let r;
                return i(this, e, t = Object.assign({}, t)).some((e => (o(e.scope) ? r = j(this, e.scope, t) : o(e.message) && (r = e.message), null != r))) ? ("string" == typeof r ? r = this.interpolate(this, r, t) : "object" == typeof r && r && o(t.count) && (r = I({
                    i18n: this,
                    count: t.count || 0,
                    scope: r,
                    options: t,
                    baseScope: w(this, e, t)
                })), t && r instanceof Array && (r = r.map((e => "string" == typeof e ? O(this, e, t) : e))), r) : this.missingTranslation.get(e, t)
            }
            pluralize(e, t, r) {
                return I({
                    i18n: this,
                    count: e,
                    scope: t,
                    options: Object.assign({}, r),
                    baseScope: w(this, t, null != r ? r : {})
                })
            }
            localize(e, t, r) {
                if (r = Object.assign({}, r), null == t) return "";
                switch (e) {
                    case "currency":
                        return this.numberToCurrency(t);
                    case "number":
                        return x(t, Object.assign({
                            delimiter: ",",
                            precision: 3,
                            separator: ".",
                            significant: !1,
                            stripInsignificantZeros: !1
                        }, j(this, "number.format")));
                    case "percentage":
                        return this.numberToPercentage(t);
                    default:
                        {
                            let n;
                            return n = e.match(/^(date|time)/) ? this.toTime(e, t) : t.toString(),
                            O(this, n, r)
                        }
                }
            }
            toTime(e, t) {
                let r = N(t),
                    n = j(this, e);
                return r.toString().match(/invalid/i) || !n ? r.toString() : this.strftime(r, n)
            }
            numberToCurrency(e, t = {}) {
                return x(e, Object.assign(Object.assign(Object.assign({
                    delimiter: ",",
                    format: "%u%n",
                    precision: 2,
                    separator: ".",
                    significant: !1,
                    stripInsignificantZeros: !1,
                    unit: "$"
                }, n(this.get("number.format"))), n(this.get("number.currency.format"))), t))
            }
            numberToPercentage(e, t = {}) {
                return x(e, Object.assign(Object.assign(Object.assign({
                    delimiter: "",
                    format: "%n%",
                    precision: 3,
                    stripInsignificantZeros: !1,
                    separator: ".",
                    significant: !1
                }, n(this.get("number.format"))), n(this.get("number.percentage.format"))), t))
            }
            numberToHumanSize(e, t = {}) {
                return A(this, e, Object.assign(Object.assign(Object.assign({
                    delimiter: "",
                    precision: 3,
                    significant: !0,
                    stripInsignificantZeros: !0,
                    units: {
                        billion: "Billion",
                        million: "Million",
                        quadrillion: "Quadrillion",
                        thousand: "Thousand",
                        trillion: "Trillion",
                        unit: ""
                    }
                }, n(this.get("number.human.format"))), n(this.get("number.human.storage_units"))), t))
            }
            numberToHuman(e, t = {}) {
                return S(this, e, Object.assign(Object.assign(Object.assign({
                    delimiter: "",
                    separator: ".",
                    precision: 3,
                    significant: !0,
                    stripInsignificantZeros: !0,
                    format: "%n %u",
                    roundMode: "default",
                    units: {
                        billion: "Billion",
                        million: "Million",
                        quadrillion: "Quadrillion",
                        thousand: "Thousand",
                        trillion: "Trillion",
                        unit: ""
                    }
                }, n(this.get("number.human.format"))), n(this.get("number.human.decimal_units"))), t))
            }
            numberToRounded(e, t) {
                return x(e, Object.assign({
                    unit: "",
                    precision: 3,
                    significant: !1,
                    separator: ".",
                    delimiter: "",
                    stripInsignificantZeros: !1
                }, t))
            }
            numberToDelimited(e, t = {}) {
                return E(e, Object.assign({
                    delimiterPattern: /(\d)(?=(\d\d\d)+(?!\d))/g,
                    delimiter: ",",
                    separator: "."
                }, t))
            }
            withLocale(e, t) {
                return xo(this, void 0, void 0, (function*() {
                    let r = this.locale;
                    try {
                        this.locale = e, yield t()
                    } finally {
                        this.locale = r
                    }
                }))
            }
            strftime(e, t, r = {}) {
                return T(e, t, Object.assign(Object.assign(Object.assign({}, n(j(this, "date"))), {
                    meridian: {
                        am: j(this, "time.am") || "AM",
                        pm: j(this, "time.pm") || "PM"
                    }
                }), r))
            }
            update(e, t, r = {
                strict: !1
            }) {
                if (r.strict && !(0, kn.default)(this.translations, e)) throw new Error(`The path "${e}" is not currently defined`);
                let n, o = (0, Rn.default)(this.translations, e),
                    i = _(o),
                    a = _(t);
                if (r.strict && i !== a) throw new Error(`The current type for "${e}" is "${i}", but you're trying to override it with "${a}"`);
                n = "object" === a ? Object.assign(Object.assign({}, o), t) : t;
                let u = e.split(this.defaultSeparator),
                    s = u.pop(),
                    l = this.translations;
                for (let e of u) l[e] || (l[e] = {}), l = l[e];
                l[s] = n, this.hasChanged()
            }
            toSentence(e, t = {}) {
                let {
                    wordsConnector: r,
                    twoWordsConnector: o,
                    lastWordConnector: i
                } = Object.assign(Object.assign({
                    wordsConnector: ", ",
                    twoWordsConnector: " and ",
                    lastWordConnector: ", and "
                }, n(j(this, "support.array"))), t), a = e.length;
                switch (a) {
                    case 0:
                        return "";
                    case 1:
                        return `${e[0]}`;
                    case 2:
                        return e.join(o);
                    default:
                        return [e.slice(0, a - 1).join(r), i, e[a - 1]].join("")
                }
            }
            timeAgoInWords(e, t, r = {}) {
                return C(this, e, t, r)
            }
            onChange(e) {
                return this.onChangeHandlers.push(e), () => {
                    this.onChangeHandlers.splice(this.onChangeHandlers.indexOf(e), 1)
                }
            }
            get version() {
                return this._version
            }
            formatNumber(e, t = {}) {
                return x(e, t = Object.assign(Object.assign({
                    delimiter: ",",
                    precision: 3,
                    separator: ".",
                    unit: "",
                    format: "%u%n",
                    significant: !1,
                    stripInsignificantZeros: !1
                }, n(this.get("number.format"))), t))
            }
            get(e) {
                return j(this, e)
            }
            runCallbacks() {
                this.onChangeHandlers.forEach((e => e(this)))
            }
            hasChanged() {
                this._version += 1, this.runCallbacks()
            }
        },
        Oo = document.getElementById("i18n-translations");
    if (Oo) {
        let e = JSON.parse(Oo.dataset.translations);
        _o.store(e)
    }
    _o.defaultLocale = "en";
    var {
        locale: jo
    } = document.body.dataset;
    jo && (_o.locale = jo);
    var Eo = (e = null) => {
            let t = /DEV-Native-android|ForemWebView/i.test(navigator.userAgent) && "undefined" != typeof AndroidBridge,
                r = !0;
            return t && e && (r = null != AndroidBridge[e]), t && r
        },
        So = e => new Promise(((t, r) => {
            Eo("copyToClipboard") ? (AndroidBridge.copyToClipboard(e), t()) : null != navigator.clipboard ? navigator.clipboard.writeText(e).then((() => {
                t()
            })).catch((e => {
                r(e)
            })) : r("Unable to copy the text. Try reloading the page")
        })),
        Ao = e => t => {
            t.preventDefault();
            let r = t.target.href;
            So(r).then((() => {
                top.addSnackbarItem({
                    message: "Copied to clipboard"
                })
            })), e()
        },
        No = () => {
            var e;
            let t = document.querySelectorAll("button[id^=comment-dropdown-trigger], button[id^=comment-profile-preview-trigger-], button[id^=toggle-comments-sort-dropdown]");
            for (let r of t) {
                if (r.dataset.initialized) continue;
                let t = r.id.includes("comment-profile-preview-trigger"),
                    n = r.getAttribute("aria-controls"),
                    o = document.getElementById(n);
                if (o) {
                    let {
                        closeDropdown: i
                    } = Bn({
                        triggerElementId: r.id,
                        dropdownContentId: n,
                        onOpen: () => {
                            t && (null == o || o.classList.add("showing"))
                        },
                        onClose: () => {
                            t && (null == o || o.classList.remove("showing"))
                        }
                    }), a = o.querySelector(".report-abuse-link-wrapper");
                    a && (a.innerHTML = `<a href="${a.dataset.path}" class="crayons-link crayons-link--block">${M("core.report_abuse")}</a>`), null == (e = o.querySelector(".permalink-copybtn")) || e.addEventListener("click", Ao(i)), r.dataset.initialized = !0
                }
            }
        },
        Io = async e => {
            let {
                jsCommentUserId: t,
                jsDropdownContentId: r
            } = e.dataset, n = await (await window.fetch(`/profile_preview_cards/${t}`)).text(), o = document.createElement("div");
            o.innerHTML = n;
            let {
                firstElementChild: i
            } = o;
            i.id = r, e.parentNode.replaceChild(i, e)
        },
        To = e => {
            e.addedNodes.forEach((e => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    let t = e.getElementsByClassName("preview-card-placeholder")[0];
                    t && Io(t)
                }
            }))
        },
        Co = new MutationObserver((e => {
            e.forEach((e => {
                "childList" === e.type && (To(e), No())
            }))
        }));
    Co.observe(document.getElementById("comment-trees-container"), {
        childList: !0,
        subtree: !0
    });
    var Mo = Mn();
    document.addEventListener("scroll", Mo), InstantClick.on("change", (() => {
        Co.disconnect(), document.removeEventListener("scroll", Mo)
    })), window.addEventListener("beforeunload", (() => {
        Co.disconnect(), document.removeEventListener("scroll", Mo)
    })), No()
})();