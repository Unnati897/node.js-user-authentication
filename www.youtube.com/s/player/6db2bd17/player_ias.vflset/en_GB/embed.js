(function(g) {
    var window = this;
    /*
     SPDX-License-Identifier: Apache-2.0
    */
    /*

     Copyright 2017 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    'use strict';
    var Rgb = function(a) {
            a.mutedAutoplay = !1;
            a.endSeconds = NaN;
            a.limitedPlaybackDurationInSeconds = NaN;
            g.bQ(a)
        },
        $3 = function(a, b) {
            if (b !== null && b !== void 0) {
                if (typeof b !== "object" && typeof b !== "function") throw new TypeError("Object expected.");
                if (c === void 0) {
                    if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                    var c = b[Symbol.dispose]
                }
                if (typeof c !== "function") throw new TypeError("Object not disposable.");
                a.stack.push({
                    value: b,
                    dispose: c,
                    async: !1
                })
            }
        },
        a4 = function(a) {
            function b(d) {
                a.error = a.hasError ? new SuppressedError(d, a.error, "An error was suppressed during disposal.") : d;
                a.hasError = !0
            }

            function c() {
                for (; a.stack.length;) {
                    var d = a.stack.pop();
                    try {
                        var e = d.dispose && d.dispose.call(d.value);
                        if (d.async) return Promise.resolve(e).then(c, function(f) {
                            b(f);
                            return c()
                        })
                    } catch (f) {
                        b(f)
                    }
                }
                if (a.hasError) throw a.error;
            }
            c()
        },
        Sgb = function(a) {
            g.Ko(a);
            for (var b = 0; b < a.eg.length; b++) {
                var c = a.eg[b],
                    d = a.Gy[b];
                if (d !== c.version) return !0;
                if (!g.Io(c) || c.Jm)
                    if (c.Jm || c.f_ !== g.Mo)(c.H1(c) || Sgb(c)) && c.I1(c), c.Jm = !1, c.f_ = g.Mo;
                if (d !== c.version) return !0
            }
            return !1
        },
        b4 = function(a) {
            var b = g.Go(a);
            a = {};
            return a[Symbol.dispose] = function() {
                g.Go(b)
            }, a
        },
        Tgb = function() {
            return {
                I: "svg",
                X: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 110 26",
                    width: "100%"
                },
                V: [{
                    I: "path",
                    Ec: !0,
                    S: "ytp-svg-fill",
                    X: {
                        d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                    }
                }]
            }
        },
        Ugb = function() {
            return {
                I: "svg",
                X: {
                    fill: "none",
                    height: "100%",
                    viewBox: "0 0 143 51",
                    width: "100%"
                },
                V: [{
                    I: "path",
                    X: {
                        d: "M58.37 41.39H62.79V27.23C62.79 23.03 62.69 18.69 62.43 13.59H62.93L63.69 16.89L68.67 41.39H73.17L78.07 16.89L78.89 13.59H79.37C79.15 18.45 79.03 22.89 79.03 27.23V41.39H83.45V8.79H75.95L73.41 20.81C72.35 25.85 71.51 32.01 71.01 35.19H70.73C70.33 31.95 69.49 25.81 68.41 20.85L65.81 8.79H58.37V41.39Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        d: "M91.45 41.73C93.91 41.73 95.83 40.59 97.17 38.13H97.35L97.69 41.39H101.43V17.73H96.47V36.61C95.91 37.67 94.81 38.29 93.73 38.29C92.33 38.29 91.89 37.17 91.89 35.13V17.73H86.93V35.43C86.93 39.49 88.19 41.73 91.45 41.73Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        d: "M110.79 41.89C115.15 41.89 117.75 39.83 117.75 35.65C117.75 31.79 115.93 30.39 111.85 27.47C109.67 25.91 108.39 25.09 108.39 22.95C108.39 21.47 109.27 20.61 110.89 20.61C112.69 20.61 113.33 21.81 113.33 25.29L117.45 25.07C117.77 19.57 115.71 17.23 110.97 17.23C106.57 17.23 104.17 19.27 104.17 23.45C104.17 27.25 105.97 28.83 108.93 31.03C111.89 33.23 113.55 34.53 113.55 36.23C113.55 37.75 112.51 38.61 111.01 38.61C109.13 38.61 108.11 36.97 108.29 34.41L104.21 34.49C103.51 39.25 105.89 41.89 110.79 41.89Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        d: "M122.5 14.59C124.22 14.59 125.04 13.99 125.04 11.59C125.04 9.33 124.16 8.65 122.5 8.65C120.84 8.65 119.94 9.27 119.94 11.59C119.94 13.99 120.82 14.59 122.5 14.59ZM120.2 41.39H125V17.73H120.2V41.39Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        d: "M134.95 41.79C137.31 41.79 138.63 41.49 139.71 40.47C141.31 39.01 141.97 36.63 141.85 33.11L137.41 32.87C137.41 36.87 136.81 38.45 135.03 38.45C133.13 38.45 132.77 36.45 132.77 31.97V27.21C132.77 22.41 133.23 20.51 135.07 20.51C136.67 20.51 137.29 22.01 137.29 26.47L141.65 26.15C141.97 22.93 141.59 20.29 140.09 18.83C139.01 17.77 137.37 17.29 135.15 17.29C129.65 17.29 127.75 20.73 127.75 28.03V31.17C127.75 38.47 129.23 41.79 134.95 41.79Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    X: {
                        "clip-rule": "evenodd",
                        d: "M24.99 49C29.74 49.00 34.38 47.59 38.32 44.95C42.27 42.32 45.35 38.57 47.17 34.18C48.98 29.80 49.46 24.97 48.53 20.32C47.61 15.66 45.32 11.38 41.97 8.03C38.61 4.67 34.33 2.38 29.68 1.46C25.02 .53 20.20 1.01 15.81 2.82C11.43 4.64 7.68 7.71 5.04 11.66C2.40 15.61 1 20.25 1 25C0.99 28.15 1.61 31.27 2.82 34.18C4.03 37.09 5.79 39.74 8.02 41.97C10.25 44.19 12.89 45.96 15.81 47.17C18.72 48.37 21.84 49 24.99 49ZM24.99 12.36C27.49 12.36 29.94 13.10 32.02 14.48C34.10 15.87 35.72 17.84 36.68 20.15C37.64 22.46 37.89 25.01 37.41 27.46C36.92 29.91 35.72 32.17 33.95 33.94C32.18 35.70 29.93 36.91 27.48 37.40C25.02 37.89 22.48 37.64 20.17 36.68C17.86 35.72 15.88 34.10 14.50 32.02C13.11 29.94 12.37 27.50 12.37 25C12.37 21.65 13.70 18.44 16.07 16.07C18.43 13.70 21.64 12.37 24.99 12.36ZM24.99 10.43C22.11 10.43 19.29 11.28 16.89 12.88C14.50 14.48 12.63 16.76 11.53 19.42C10.42 22.09 10.13 25.02 10.70 27.85C11.26 30.67 12.65 33.27 14.69 35.31C16.73 37.35 19.32 38.73 22.15 39.30C24.98 39.86 27.91 39.57 30.57 38.46C33.23 37.36 35.51 35.49 37.11 33.09C38.71 30.70 39.57 27.88 39.56 25C39.56 23.08 39.19 21.19 38.46 19.42C37.72 17.65 36.65 16.04 35.30 14.69C33.94 13.34 32.34 12.27 30.57 11.53C28.80 10.80 26.90 10.43 24.99 10.43ZM32.63 24.99L20.36 32.09V17.91L32.63 24.99Z",
                        fill: "white",
                        "fill-rule": "evenodd"
                    }
                }]
            }
        },
        Vgb = function() {},
        c4 = function(a, b) {
            for (; a.length > b;) a.pop()
        },
        Wgb = function(a) {
            a = Array(a);
            c4(a, 0);
            return a
        },
        Xgb = function(a, b, c) {
            if (c == null) a.removeAttribute(b);
            else {
                var d = b.lastIndexOf("xml:", 0) === 0 ? "http://www.w3.org/XML/1998/namespace" : b.lastIndexOf("xlink:", 0) === 0 ? "http://www.w3.org/1999/xlink" : null;
                d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)
            }
        },
        Zgb = function(a, b, c) {
            a = a.style;
            if (typeof c === "string") a.cssText = c;
            else {
                a.cssText = "";
                for (var d in c)
                    if (Ygb.call(c, d)) {
                        b = a;
                        var e = d,
                            f = c[d];
                        e.indexOf("-") >= 0 ? b.setProperty(e, f) : b[e] = f
                    }
            }
        },
        $gb = function(a, b, c) {
            var d = typeof c;
            d === "object" || d === "function" ? a[b] = c : Xgb(a, b, c)
        },
        ahb = function() {
            var a = new Vgb;
            a.__default = $gb;
            a.style = Zgb;
            return a
        },
        bhb = function(a, b, c, d) {
            (d[b] || d.__default)(a, b, c)
        },
        chb = function(a) {
            this.created = [];
            this.j = [];
            this.node = a
        },
        dhb = function(a, b) {
            this.j = null;
            this.B = a;
            this.key = b;
            this.text = void 0
        },
        ehb = function(a, b, c) {
            b = new dhb(b, c);
            return a.__incrementalDOMData = b
        },
        d4 = function(a, b) {
            if (a.__incrementalDOMData) return a.__incrementalDOMData;
            var c = a.nodeType === 1 ? a.localName : a.nodeName,
                d = a.nodeType === 1 ? a.getAttribute("key") : null;
            b = ehb(a, c, a.nodeType === 1 ? d || b : null);
            if (a.nodeType === 1 && (a = a.attributes, c = a.length)) {
                d = b.j || (b.j = Wgb(c * 2));
                for (var e = 0, f = 0; e < c; e += 1, f += 2) {
                    var h = a[e],
                        l = h.value;
                    d[f] = h.name;
                    d[f + 1] = l
                }
            }
            return b
        },
        fhb = function(a, b, c, d, e) {
            return b == c && d == e
        },
        h4 = function(a) {
            for (var b = e4, c = f4(); c !== a;) {
                var d = c.nextSibling;
                b.removeChild(c);
                g4.j.push(c);
                c = d
            }
        },
        f4 = function() {
            return i4 ? i4.nextSibling : e4.firstChild
        },
        ghb = function(a, b) {
            i4 = f4();
            var c;
            a: {
                if (c = i4) {
                    do {
                        var d = c,
                            e = a,
                            f = b,
                            h = d4(d, f);
                        if (j4(d, e, h.B, f, h.key)) break a
                    } while (b && (c = c.nextSibling))
                }
                c = null
            }
            c || (a === "#text" ? (a = k4.createTextNode(""), ehb(a, "#text", null)) : (c = k4, d = e4, typeof a === "function" ? c = new a : c = (d = a === "svg" ? "http://www.w3.org/2000/svg" : a === "math" ? "http://www.w3.org/1998/Math/MathML" : d == null || d4(d).B === "foreignObject" ? null : d.namespaceURI) ? c.createElementNS(d, a) : c.createElement(a), ehb(c, a, b), a = c), g4.created.push(a), c = a);
            a = c;
            if (a !== i4) {
                if (l4.indexOf(a) >= 0)
                    for (b = e4, c = a.nextSibling,
                        d = i4; d !== null && d !== a;) e = d.nextSibling, b.insertBefore(d, c), d = e;
                else e4.insertBefore(a, i4);
                i4 = a
            }
        },
        hhb = function(a, b) {
            ghb(a, b);
            e4 = i4;
            i4 = null;
            return e4
        },
        jhb = function(a, b) {
            b = b === void 0 ? {} : b;
            var c = b.matches === void 0 ? fhb : b.matches;
            return function(d, e, f) {
                var h = g4,
                    l = k4,
                    m = l4,
                    n = m4,
                    p = i4,
                    q = e4,
                    r = j4;
                k4 = d.ownerDocument;
                g4 = new chb(d);
                j4 = c;
                m4 = [];
                i4 = null;
                var t = e4 = d.parentNode,
                    u, y = ihb.call(d);
                if ((u = y.nodeType === 11 || y.nodeType === 9 ? y.activeElement : null) && d.contains(u)) {
                    for (y = []; u !== t;) y.push(u), u = u.parentNode || (t ? u.host : null);
                    t = y
                } else t = [];
                l4 = t;
                try {
                    return a(d, e, f)
                } finally {
                    d = g4, n4 && d.j.length > 0 && n4(d.j), k4 = l, g4 = h, j4 = r, m4 = n, i4 = p, e4 = q, l4 = m
                }
            }
        },
        khb = function(a, b, c, d) {
            o4.push(bhb);
            o4.push(a);
            o4.push(b);
            o4.push(c);
            o4.push(d)
        },
        lhb = function(a) {
            ghb("#text", null);
            var b = i4;
            var c = d4(b);
            if (c.text !== a) {
                c = c.text = a;
                for (var d = 1; d < arguments.length; d += 1) c = (0, arguments[d])(c);
                b.data !== c && (b.data = c)
            }
        },
        nhb = function() {
            var a = Object.assign({}, mhb);
            Object.getOwnPropertyNames(mhb).forEach(function(b) {
                p4[b] !== void 0 && (a[b] = p4[b])
            });
            return a
        },
        ohb = function(a) {
            var b = a.component;
            var c = a.debugInstance;
            a = a.ex;
            var d, e = (d = b.vP) != null ? d : b.name;
            q4.push({
                name: c ? e + " (" + c + ")" : e,
                XA: !!b.XA
            });
            b = a();
            q4.pop();
            return b
        },
        r4 = function() {
            var a = q4[q4.length - 1];
            return a ? a.XA || !1 : !1
        },
        s4 = function(a, b) {
            b = b === void 0 ? {} : b;
            var c = q4.length;
            b.stack && (q4 = [].concat(g.x(b.stack)));
            try {
                return a()
            } catch (d) {
                throw a = d, phb(a), a !== qhb && (rhb = q4.slice()), qhb = a, a;
            } finally {
                c = q4.length - c, c > 0 && q4.splice(-c)
            }
        },
        phb = function(a) {
            var b = q4;
            if (b.length !== 0 && !a.EE) {
                var c = b.slice(-20).reverse().map(function(d) {
                    return d.name
                }).join(" > ");
                c = a.message + "\n\nComponent stack: " + c;
                try {
                    a.EE = b.slice(), p4.x8 && (a.stack && (a.stack = a.stack.replace(a.message, c)), a.message = c)
                } catch (d) {}
            }
        },
        t4 = function(a, b) {
            var c, d;
            var e = (d = (c = rhb) == null ? void 0 : c.slice()) != null ? d : [];
            return [b === void 0 ? "unknown" : b, a, {
                EE: e,
                jA: 3,
                Bna: nhb()
            }]
        },
        shb = function(a) {
            if (p4.W3)
                for (var b = g.w(a), c = b.next(); !c.done; c = b.next()) {
                    var d = c.value;
                    for (c = [d]; d.parent !== void 0;) d = d.parent, a.has(d) && c.push(d);
                    for (; c.length > 0;) d = c.pop(), a.delete(d), d.Ks()
                } else
                    for (b = g.w(a), c = b.next(); !c.done; c = b.next()) c = c.value, a.delete(c), c.Ks()
        },
        uhb = function() {
            var a;
            g.J(function(b) {
                if (b.j == 1) return a = thb, thb = new Set, g.F(b, Promise.resolve(), 2);
                shb(a);
                g.va(b)
            })
        },
        v4 = function(a) {
            var b = u4;
            if (b && b !== vhb && !b[whb]) {
                var c = q4.slice();
                b.SE || (b.SE = []);
                b.SE.push(function() {
                    return void s4(function() {
                        return void a()
                    }, {
                        stack: c
                    })
                })
            }
        },
        yhb = function(a) {
            var b = u4;
            b && !b.Ja && (v4(function() {
                return void xhb(a)
            }), a.parent = b)
        },
        zhb = function(a) {
            if (a.SE) {
                var b = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    $3(b, b4(g.kab));
                    for (var c = g.w(a.SE), d = c.next(); !d.done; d = c.next()) {
                        var e = d.value;
                        e()
                    }
                } catch (f) {
                    b.error = f, b.hasError = !0
                } finally {
                    a4(b)
                }
                a.SE.length = 0
            }
        },
        xhb = function(a) {
            if (!a.Ja) {
                a.Ja = !0;
                var b;
                (b = a[Symbol.dispose]) == null || b.call(a);
                delete a.parent;
                zhb(a)
            }
        },
        Ahb = function() {
            g.Ko(this);
            if (g.Io(this))
                for (var a = 0; a < this.eg.length; a++) g.Jo(this.eg[a], this.jn[a]);
            this.eg.length = this.Gy.length = this.jn.length = 0;
            this.hj && (this.hj.length = this.Gu.length = 0);
            w4.delete(this);
            thb.delete(this);
            xhb(this)
        },
        Bhb = function(a) {
            a.Ja || w4.add(a)
        },
        Dhb = function(a, b, c) {
            Chb++;
            b = Object.create(b);
            b.EE = q4.slice();
            b.oT = a;
            c && (b.vP = c);
            yhb(b);
            return b
        },
        x4 = function(a) {
            var b = u4;
            u4 = a;
            a = {};
            return a[Symbol.dispose] = function() {
                u4 = b
            }, a
        },
        y4 = function(a) {
            var b = !!u4,
                c = {};
            (b === void 0 || b) && yhb(c);
            b = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                $3(b, x4(c)), a(c)
            } catch (d) {
                b.error = d, b.hasError = !0
            } finally {
                a4(b)
            }
            return function() {
                return void xhb(c)
            }
        },
        Fhb = function(a, b) {
            a = Dhb(a, Ehb, b);
            if (p4.Zea && (b = g.Fo) && b.isAsync) {
                var c;
                (c = p4.handleError) == null || c.call.apply(c, [p4].concat(g.x(t4(Error(Error("Sync reactions can not be called inside a reaction call.").message)))))
            }
            a.Ks()
        },
        Hhb = function(a, b) {
            Dhb(a, Ghb, b).Ks()
        },
        Ihb = function(a) {
            var b = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                return $3(b, b4(null)), a()
            } catch (c) {
                b.error = c, b.hasError = !0
            } finally {
                a4(b)
            }
        },
        Lhb = function(a, b, c) {
            if (Object.hasOwnProperty.call(Jhb, a) && (a = Jhb[a], Object.hasOwnProperty.call(a, b) && (a = a[b], a instanceof Array))) {
                for (var d = null, e = !1, f = 0, h = a.length; f < h; ++f) {
                    var l = a[f],
                        m = l.Ji;
                    if (!m) return l.yd;
                    d === null && (d = {});
                    m = Object.hasOwnProperty.call(d, m) ? d[m] : d[m] = c(m);
                    if (m === l.Si) return l.yd;
                    m == null && (e = !0)
                }
                if (e) return null
            }
            b = Khb[b];
            return typeof b === "number" ? b : null
        },
        Nhb = function(a, b, c) {
            if (c === null || c === void 0) return c;
            var d = Lhb(a.tagName.toLowerCase(), b, function() {
                var h;
                (h = p4.handleError) == null || h.call.apply(h, [p4].concat(g.x(t4(Error("Contingent attribute/property lookups are not supported."), a.tagName.toLowerCase()))))
            });
            if (d === null) return c;
            d = Mhb[d];
            var e;
            if ((e = d.Cu) == null ? 0 : e.call(d, c)) {
                if (d.gt) return d.gt(c);
                var f;
                (f = p4.handleError) == null || f.call.apply(f, [p4].concat(g.x(t4(Error("Value Handler's unwrap function does not exist."), a.tagName.toLowerCase()))))
            }
            return d.Kr ? d.Kr(a.tagName, b, String(c)) : c
        },
        Phb = function(a) {
            function b(d, e, f) {
                g.zl(d, Ohb);
                for (var h = Math.min(e.length - f, d.length), l = 0; l < h; l++)
                    if (d[l] !== Ohb(e[f + l])) return !1;
                return !0
            }
            a = String(a);
            for (var c = 0;
                (c = a.indexOf("<", c)) != -1;) {
                if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
                c += 1
            }
            return a
        },
        Ohb = function(a) {
            return "A" <= a && a <= "Z" ? a.toLowerCase() : a
        },
        z4 = function(a, b, c) {
            if (c === !1 && Qhb.has(b)) Xgb(a, b, null);
            else if (b !== "idomKey" && b !== "skip" && b !== "skipchildren" && b !== "children" && b !== "el") {
                if (b.startsWith("on"))
                    if (b[2] === ":") {
                        if (c === void 0 || c === null) {
                            var d;
                            (d = p4.handleError) == null || d.call.apply(d, [p4].concat(g.x(t4(Error("The " + b + " attribute was set to undefined or null. This is not supported and may lead to unexpected behavior if an event handler is being conditionally set."), a.tagName))));
                            a[b] = void 0;
                            return
                        }
                        if (typeof c !== "object" || c === null) throw Error("Expected " + b + " to be an EventHandler but its type was: " +
                            (typeof c + ". Event handlers must be created using useHandler."));
                        if (typeof c.DY !== "function") throw Error("Expected the event handler for " + b + " to have a 'getFn' property but its keys were: " + (Object.keys(c) + ". Event handlers must be created using useHandler."));
                        var e = c.DY(0),
                            f = b.slice(3);
                        if ((d = r4()) && a["on" + f] === void 0) a.addEventListener(f, e), v4(function() {
                            return void a.removeEventListener(f, e)
                        });
                        else if (d || !Rhb.includes(f)) a["on" + f] = e
                    } else {
                        Shb(a, b, c);
                        return
                    }
                else if (b.startsWith("data-") && typeof c === "string") try {
                    c = Phb(c)
                } catch (h) {
                    c = "zSoyz"
                }
                typeof c !== "function" || a._disposeEffects != null ? (p4.w8 && (c = Nhb(a, b, c)), b === "style" ? Thb(a, b, c) : b.startsWith("prop:") ? a[b.slice(5)] = c : Shb(a, b, c)) : (a._signalProps || (a._signalProps = []), a._signalValues || (a._signalValues = []), a._signalProps.push(b))
            }
        },
        Uhb = function(a, b, c) {
            c = (c === void 0 ? {} : c).XA;
            if (b == null ? 0 : b.el) {
                var d = b.el;
                if (typeof d === "function") d(a);
                else {
                    var e;
                    (e = d.gca) == null || e.call(d, a);
                    a._disposeRef || (a._disposeRef = function() {
                        var f;
                        (f = d.Vca) == null || f.call(d);
                        delete a._disposeRef
                    }, c && v4(function() {
                        var f;
                        return void((f = a._disposeRef) == null ? void 0 : f.call(a))
                    }))
                }
            }
        },
        B4 = function(a, b) {
            var c = g.Da.apply(2, arguments),
                d;
            b = (d = b) != null ? d : {};
            d = {};
            return d.type = a, d.props = b, d.children = c, d[A4] = !0, d
        },
        C4 = function(a) {
            return a.children
        },
        Vhb = function() {
            var a = !1;
            D4 !== E4 && (D4 = E4, a = !0);
            var b = {};
            return b[Symbol.dispose] = function() {
                a && (D4 = B4)
            }, b
        },
        Whb = function() {
            var a = !1;
            D4 !== B4 && (D4 = B4, a = !0);
            var b = {};
            return b[Symbol.dispose] = function() {
                a && (D4 = E4)
            }, b
        },
        F4 = function() {
            return document.createTextNode("")
        },
        G4 = function(a) {
            a = document.createTextNode(String(a));
            a._isSignalTextNode = !0;
            return a
        },
        H4 = function(a) {
            a = typeof a;
            return a === "string" || a === "number" || a === "boolean"
        },
        I4 = function(a) {
            return a instanceof g.od || a instanceof g.rd || a instanceof g.Bd || !1
        },
        Xhb = function(a, b) {
            a.parentElement && a.parentElement.replaceChild(b, a);
            return b
        },
        Yhb = function(a, b) {
            a.textContent !== String(b) && (a.textContent = String(b));
            return a
        },
        J4 = function(a, b) {
            var c = a[0].parentElement;
            if (c)
                if (a[0].previousSibling || a[a.length - 1].nextSibling) {
                    c.insertBefore(b, a[0]);
                    for (var d = a.length - 1; d >= 0; d--) c.removeChild(a[d])
                } else c.textContent = "", c.appendChild(b);
            return b
        },
        Zhb = function(a, b) {
            if (a[0].parentElement)
                for (var c = a[0].parentElement, d = b.length, e = a.length, f = d, h = 0, l = 0, m = a[e - 1].nextSibling, n = null; h < e || l < f;)
                    if (a[h] === b[l]) h++, l++;
                    else {
                        for (; a[e - 1] === b[f - 1];) e--, f--;
                        if (e === h)
                            for (var p = f < d ? l ? b[l - 1].nextSibling : b[f - l] : m; l < f;) c.insertBefore(b[l++], p);
                        else if (f === l)
                            for (; h < e;) p = a[h], n && n.has(p) || c.removeChild(p), h++;
                        else if (a[h] === b[f - 1] && b[l] === a[e - 1]) p = a[--e].nextSibling, c.insertBefore(b[l++], a[h++].nextSibling), c.insertBefore(b[--f], p), a[e] = b[f];
                        else {
                            if (!n)
                                for (n = new Map, p = l; p < f;) n.set(b[p], p++);
                            p = n.get(a[h]);
                            if (p == null) c.removeChild(a[h]), h++;
                            else if (l < p && p < f) {
                                for (var q = h, r = 1, t = void 0; ++q < e && q < f && (t = n.get(a[q])) != null && t === p +
                                    r;) r++;
                                if (r > p - l)
                                    for (q = a[h]; l < p;) c.insertBefore(b[l++], q);
                                else c.replaceChild(b[l++], a[h++])
                            } else h++
                        }
                    }
            return b
        },
        K4 = function(a) {
            return g.Ra(a) ? "nodeType" in a : !1
        },
        bib = function(a) {
            var b = {
                name: void 0
            };
            var c = b === void 0 ? {} : b;
            b = c.Xma;
            c = c.name;
            var d = $hb();
            (b ? Hhb : Fhb)(function() {
                var e = d[0],
                    f = d.Lm;
                a: {
                    var h = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        $3(h, Vhb());
                        var l = a();
                        break a
                    } catch (n) {
                        h.error = n, h.hasError = !0
                    } finally {
                        a4(h)
                    }
                    l = void 0
                }
                e = aib(e, l, d);
                Array.isArray(e) || (d.Lm = [e]);
                l = d.Lm;
                if (f && (!Array.isArray(f) || f.length !== 0)) {
                    f = Array.isArray(f) ? f[0] : f;
                    h = f[L4];
                    var m = f._disposeEffects;
                    f._disposeEffects = void 0;
                    f = Array.isArray(l) ? l[0] : l;
                    f[L4] = h;
                    f[L4] && (f[L4].h0 = f === l ? 1 : l.length);
                    f._disposeEffects = m
                }
                d[0] = e
            }, c);
            return d
        },
        aib = function(a, b, c) {
            for (; typeof b === "function";) b = b();
            if (b != null && b[A4]) {
                var d, e, f;
                (f = p4.handleError) == null || f.call.apply(f, [p4].concat(g.x(t4(Error("Encountered a VNode when only real nodes are expected. Tag name: " + ((d = b.type) == null ? void 0 : d.At)), (e = b.type) == null ? void 0 : e.At))))
            }
            if (a == null) return b == null ? F4() : H4(b) ? G4(b) : I4(b) ? G4(b.toString()) : K4(b) ? b : b.length === 0 ? F4() : M4(b, c);
            if (K4(a)) {
                if (b == null) return Xhb(a, F4());
                if (H4(b)) return Yhb(a, b);
                if (I4(b)) return Yhb(a, b.toString());
                if (K4(b)) return Xhb(a, b);
                if (b.length === 0) return Xhb(a, F4());
                b = M4(b, c);
                Zhb([a],
                    c.Lm);
                return b
            }
            a = N4(a);
            if (b == null) return J4(a, F4());
            if (H4(b)) return J4(a, G4(b));
            if (I4(b)) return J4(a, G4(b.toString()));
            if (K4(b)) return Zhb(a, [b])[0];
            if (b.length === 0) return J4(a, F4());
            b = M4(b, c);
            Zhb(a, c.Lm);
            return b
        },
        N4 = function(a, b, c) {
            return cib(a, b != null ? b : [], c === void 0 ? !1 : c)
        },
        M4 = function(a, b) {
            var c = N4(a, void 0, !0);
            if (c.length === 0) return F4();
            b.Lm = c;
            return a
        },
        cib = function(a, b, c, d, e) {
            b = b === void 0 ? [] : b;
            c = c === void 0 ? !1 : c;
            e = e === void 0 ? -1 : e;
            if (a == null) return b;
            H4(a) && (a = G4(a), d && c && (d[e] = a));
            I4(a) && (a = G4(a.toString()), d && c && (d[e] = a));
            if (K4(a)) return dib(b, a);
            if (Array.isArray(a)) {
                for (var f = 0; f < a.length; f++) cib(a[f], b, c, a, f);
                return b
            }
            if (typeof a === "function") return f = bib(a)[0], d && c && (d[e] = f), dib(b, f);
            if (a != null && a[A4]) {
                a: {
                    d = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        $3(d, Vhb());
                        f = D4.apply(null, [a.type, a.props].concat(g.x(a.children)));
                        break a
                    } catch (l) {
                        d.error = l, d.hasError = !0
                    } finally {
                        a4(d)
                    }
                    f = void 0
                }
                return cib(f,
                    b, c)
            }
            var h;
            (h = p4.handleError) == null || h.call.apply(h, [p4].concat(g.x(t4(Error("Unrecognized JSXResult type in flattening.")))));
            return b
        },
        $hb = function(a) {
            var b = [];
            if (!a) return b.Lm = [], b;
            b[0] = M4(a, b);
            return b
        },
        dib = function(a, b) {
            Array.isArray(a) ? a.push(b) : a.appendChild(b);
            return a
        },
        eib = function(a, b) {
            var c, d, e = y4(function(q) {
                var r = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    d = q, $3(r, Vhb()), $3(r, b4(g.lab)), c = a(b)
                } catch (t) {
                    r.error = t, r.hasError = !0
                } finally {
                    a4(r)
                }
            });
            c != null && c.Lm || !Array.isArray(c) || (c = $hb(c));
            var f = c != null && c.Lm ? c.Lm : c;
            var h = Array.isArray(f) ? f[0] : f,
                l = !1;
            if (h) {
                var m, n = (m = b == null ? void 0 : b.idomKey) != null ? m : a;
                m = a.O3;
                h._disposeEffects = e;
                var p = h[L4] || {};
                Object.assign(p, {
                    key: n,
                    props: m ? b : void 0,
                    h0: f !== h ? f.length : 1,
                    context: d,
                    m$: !!h[L4],
                    Q2: c != null && c.Lm ? c : p.Q2
                });
                h[L4] = p
            } else l = !0;
            (function() {
                var q = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    $3(q, x4(d))
                } catch (r) {
                    q.error = r, q.hasError = !0
                } finally {
                    a4(q)
                }
            })();
            l && e();
            return c
        },
        O4 = function(a) {
            this.props = a;
            this.C = !1
        },
        fib = function() {
            if (r4()) throw Error("Reactive components are not allowed to use useState or other memoization based hooks.");
            return P4
        },
        Q4 = function(a) {
            O4.call(this, a);
            var b = this;
            this.GA = [];
            this.D = 0;
            this.G = y4(function(c) {
                b.MJ = c;
                v4(function() {
                    gib(b, b.el)
                })
            })
        },
        gib = function(a, b) {
            if (!a.C && b) {
                a.C = !0;
                try {
                    a.JJ()
                } catch (e) {
                    var c, d;
                    (d = p4.handleError) == null || d.call.apply(d, [p4].concat(g.x(t4(e, (c = a.j) == null ? void 0 : c.At))))
                }
                R4.JJ(a);
                a.el = null;
                b.__instance && delete b.__instance
            }
        },
        hib = function(a, b) {
            a._disposeEffects == null && a._signalProps != null && (a._disposeEffects = y4(function() {
                Fhb(function() {
                    for (var c = a._signalProps, d = a._signalValues, e = 0; e < c.length; e++) {
                        var f = c[e],
                            h = b[f]();
                        d[e] !== h && (d[e] = h, z4(a, f, h))
                    }
                })
            }))
        },
        iib = function(a, b) {
            a._disposeEffects = y4(function() {
                a._isSignalTextNode = !0;
                Fhb(function() {
                    var c = b();
                    c == null && (c = "");
                    var d = typeof c;
                    if (d === "object" || d === "function") throw Error("Invalid text node kind: " + d + ". Text nodes must be primitives like numbers, strings, or null, but an object type was passed. See go/cow-errors#invalid-text-nodes for more information.");
                    a.textContent = String(c)
                })
            })
        },
        kib = function(a, b) {
            var c = g.Da.apply(2, arguments);
            b != null || (b = {});
            if (a === C4) return c;
            if (typeof a === "function") return ohb({
                component: a,
                debugInstance: b.debugInstance,
                ex: function() {
                    c.length > 0 && (b.children = c.length === 1 ? c[0] : c);
                    var f = b;
                    if (a.XA) var h = !1;
                    else {
                        f || (f = {});
                        h = new Q4(f);
                        h.B = a;
                        b: {
                            var l = {
                                stack: [],
                                error: void 0,
                                hasError: !1
                            };
                            try {
                                $3(l, b4(g.mab));
                                var m = h.Py(f);
                                break b
                            } catch (n) {
                                l.error = n, l.hasError = !0
                            } finally {
                                a4(l)
                            }
                            m = void 0
                        }
                        f = m;
                        f instanceof HTMLElement ? (f.__instance = h, h.el = f, h.j = a, a.At = f.tagName.toLowerCase(), R4.OE(h), h = f) : h = f
                    }
                    return h === !1 ? jib(a, b) :
                        h
                }
            });
            var d = document.createElement(a),
                e;
            for (e in b) z4(d, e, b[e]);
            hib(d, b);
            N4(c, d);
            Uhb(d, b, {
                XA: !0
            });
            return d
        },
        lib = function(a) {
            if (a) {
                var b;
                (b = a._disposeRef) == null || b.call(a);
                var c;
                (c = a._disposeEffects) == null || c.call(a);
                a.__instance && a.__instance instanceof O4 && (b = a.__instance, gib(b, a), b instanceof Q4 && b.G());
                for (b = 0; b < a.childNodes.length; b++) lib(a.childNodes[b])
            }
        },
        nib = function(a) {
            mib.push(a) === 1 && requestAnimationFrame(function() {
                setTimeout(function() {
                    var b = [].concat(g.x(mib));
                    mib = [];
                    b = g.w(b);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        c = c.value;
                        try {
                            for (var d = 0; d < c.length; d++) lib(c[d])
                        } catch (e) {
                            d = c = void 0, (d = (c = p4).handleError) == null || d.call.apply(d, [c].concat(g.x(t4(e))))
                        }
                    }
                })
            })
        },
        S4 = function(a, b) {
            return D4.apply(null, [a,
                b
            ].concat(g.x(g.Da.apply(2, arguments))))
        },
        oib = function(a) {
            var b = null,
                c;
            return {
                value: null,
                gca: function(d) {
                    if (c && d !== c) {
                        var e;
                        (e = b) == null || e();
                        c._disposeRef = void 0
                    }
                    c = d;
                    b = a(d) || null
                },
                Vca: function() {
                    var d;
                    (d = b) == null || d()
                }
            }
        },
        pib = function(a) {
            var b = fib();
            if (b == null) throw Error("A valid hook context was not found. Please ensure you are using components from TSX and not invoking the component function directly");
            var c = b.D++;
            b.GA || (b.GA = []);
            var d = b.GA;
            d[c] || (d[c] = {
                key: a,
                host: b
            });
            if (a !== d[c].key) {
                var e, f;
                a = ((e = b.j) == null ? void 0 : e.name) || ((f = b.B) == null ? void 0 : f.name);
                throw Error("Hook called out of order in " + a + ". Hooks must be invoked unconditionally and in the same order every render. This could happen if you conditionally invoke a hook.");
            }
            return d[c]
        },
        qib = function(a, b) {
            return !a || a.length !== (b == null ? void 0 : b.length) || a.some(function(c, d) {
                return c !== b[d]
            })
        },
        rib = function(a, b) {
            var c = pib("onChange"),
                d = fib();
            qib(c.eh, b) && (c.eh = b, c.d1 = a, d.Fz || (d.Fz = []), d.Fz.push(c))
        },
        sib = function(a) {
            var b = u4,
                c = q4.slice();
            Promise.resolve().then(function() {
                b && !b.Ja && s4(function() {
                    var d = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        $3(d, x4(b)), a()
                    } catch (e) {
                        d.error = e, d.hasError = !0
                    } finally {
                        a4(d)
                    }
                }, {
                    stack: c
                })
            })
        },
        T4 = function(a, b) {
            rib(function() {
                return Ihb(a)
            }, b)
        },
        tib = function(a) {
            r4() ? sib(function() {
                Ihb(a)
            }) : rib(function() {
                return Ihb(a)
            }, [])
        },
        vib = function(a) {
            var b = [].concat(g.x(a));
            a.length = 0;
            a = g.w(b);
            for (b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                uib(b);
                var c = b.d1;
                b.d1 = null;
                if (c = c == null ? void 0 : c()) b.b1 = c
            }
        },
        uib = function(a) {
            var b = a.b1;
            a.b1 = null;
            b == null || b()
        },
        U4 = function(a) {
            var b = [];
            if (r4()) return a();
            var c = pib("useMemoInternal");
            qib(c.eh, b) && (c.eh = b, c.value = a());
            return c.value
        },
        V4 = function() {
            var a = U4(function() {
                return oib(function(b) {
                    a.value = b;
                    var c = function() {
                        var d = {
                            stack: [],
                            error: void 0,
                            hasError: !1
                        };
                        try {
                            $3(d, b4(null))
                        } catch (e) {
                            d.error = e, d.hasError = !0
                        } finally {
                            a4(d)
                        }
                    }();
                    return function() {
                        c == null || c();
                        a.value = null
                    }
                })
            });
            return a
        },
        wib = function(a) {
            var b = u4,
                c = q4.slice();
            return {
                DY: function() {
                    return function(d) {
                        b.Ja || s4(function() {
                            var e = {
                                stack: [],
                                error: void 0,
                                hasError: !1
                            };
                            try {
                                return $3(e, b4(null)), a(d)
                            } catch (f) {
                                e.error = f, e.hasError = !0
                            } finally {
                                a4(e)
                            }
                        }, {
                            stack: c
                        }) !== !0 && d.stopPropagation()
                    }
                }
            }
        },
        xib = function(a) {
            if (typeof a.children === "function") return a.children(), null;
            a = g.w(a.children);
            for (var b = a.next(); !b.done; b = a.next()) b = b.value, b();
            return null
        },
        zib = function(a, b, c) {
            c = c === void 0 ? !1 : c;
            s4(function() {
                return yib(a, b, c)
            })
        },
        yib = function(a, b, c) {
            c = ((c === void 0 ? 0 : c) ? Aib : Bib)(a, function() {
                W4(b)
            });
            return c === null ? a : c
        },
        W4 = function(a) {
            if (a !== void 0 && a !== null)
                if (Array.isArray(a)) {
                    a = g.w(a);
                    for (var b = a.next(); !b.done; b = a.next()) W4(b.value)
                } else if (a instanceof g.od || a instanceof g.rd || a instanceof g.Bd) lhb(a.toString());
            else if (K4(a)) {
                if (f4() !== a) throw Error("Encountered a real dom node where a vdom node was expected. Real dom nodes should only come from the reactive renderer, and they can't be passed in JSX expressions directly. Tag name: " + a.tagName);
                i4 = f4()
            } else {
                var c = typeof a;
                if (c === "boolean" || c === "number" || c === "string") lhb(a);
                else if (typeof a === "function") {
                    b = e4;
                    var d = f4();
                    if (!d ||
                        !d._isSignalTextNode) {
                        var e = b.insertBefore,
                            f = document.createTextNode("");
                        iib(f, a);
                        e.call(b, f, d)
                    }
                    i4 = f4()
                } else {
                    if (typeof a.type === "string") {
                        a.Ar || hhb(a.type, a.props.idomKey);
                        b = e4;
                        for (e in a.props) a.props[e] !== Cib && (f = a.props[e], c = m4, c.push(e), c.push(f));
                        e = p4.attributes;
                        e = e === void 0 ? Dib : e;
                        f = e4;
                        var h = d4(f);
                        c = e;
                        e = m4;
                        h = h.j || (h.j = Wgb(e.length));
                        for (var l = !h.length || !1, m = 0; m < e.length; m += 2) {
                            var n = e[m];
                            if (l) h[m] = n;
                            else if (h[m] !== n) break;
                            var p = e[m + 1];
                            if (l || h[m + 1] !== p) h[m + 1] = p, khb(f, n, p, c)
                        }
                        if (m < e.length || m < h.length) {
                            for (m =
                                l = m; m < h.length; m += 2) X4[h[m]] = h[m + 1];
                            for (m = l; m < e.length; m += 2) l = e[m], n = e[m + 1], X4[l] !== n && khb(f, l, n, c), h[m] = l, h[m + 1] = n, delete X4[l];
                            c4(h, e.length);
                            for (d in X4) khb(f, d, void 0, c), delete X4[d]
                        }
                        d = Eib;
                        Eib = f = o4.length;
                        for (c = d; c < f; c += 5)(0, o4[c])(o4[c + 1], o4[c + 2], o4[c + 3], o4[c + 4]);
                        Eib = d;
                        c4(o4, d);
                        c4(e, 0);
                        hib(b, a.props);
                        (a.props.skip || a.props.skipchildren) && e4.hasChildNodes() ? i4 = e4.lastChild : W4(a.children);
                        h4(null);
                        i4 = e4;
                        e4 = e4.parentNode;
                        a.Ar && (a.Ar = !1);
                        Uhb(b, a.props);
                        return b
                    }
                    if (a.type === C4) W4(a.children);
                    else if (!Fib(a)) {
                        try {
                            Gib(a)
                        } catch (q) {
                            d =
                                q, (f = p4.handleError) == null || f.call.apply(f, [p4].concat(g.x(t4(d, (b = a.type) == null ? void 0 : b.At))))
                        }
                        a.Ar && (h4(null), i4 = e4, e4 = e4.parentNode, a.Ar = !1)
                    }
                }
            }
        },
        Hib = function(a, b) {
            var c;
            ((c = a.prototype) == null ? void 0 : c.Py) === void 0 ? (b = new Q4(b), b.B = a) : b = new a(b);
            b.j = a;
            b.lO = {
                VR: b.state,
                XZ: !1
            };
            return b
        },
        Gib = function(a) {
            var b = a.type,
                c = b.At;
            if (b === xib) a.props.children = a.children, b(a.props);
            else {
                a.children.length > 0 && (a.props.children = a.children);
                var d;
                (d = a.props).idomKey || (d.idomKey = b);
                if (c) {
                    var e = hhb(c, a.props.idomKey);
                    a.Ar = !0;
                    var f = e.__instance
                }
                f || (f = Hib(b, a.props), f.props = null, e && (e.__instance = f, f.el = e));
                var h;
                c = ((h = f.lO) != null ? h : {
                    VR: f.state,
                    XZ: !1
                }).VR;
                f.lO = void 0;
                b.j9 && (c = b.j9(a.props, c));
                f.props = a.props;
                f.state = c;
                h = function() {
                    var l = f;
                    R4.uX(l);
                    var m = l.Py(l.props);
                    m ? (l.props.idomKey && (m.props.idomKey = l.props.idomKey), l = m) : l = void 0;
                    if (m = l)
                        if (m.Ar = a.Ar, l = W4(m), a.Ar = m.Ar, !b.At)
                            if (l) b.At = l.tagName.toLowerCase(), l.__instance = f, f.el = l;
                            else {
                                var n;
                                if ((n = f.GA) == null ? 0 : n.length) {
                                    var p;
                                    (p = p4.handleError) == null || p.call.apply(p, [p4].concat(g.x(t4(Error("A component used hooks, but failed to return a host element")))))
                                }
                            }
                    f.OE();
                    R4.OE(f)
                };
                (c = f.B) ? ohb({
                    component: c,
                    debugInstance: f.props.debugInstance,
                    ex: h
                }): h()
            }
        },
        Fib = function(a) {
            var b = a.type;
            if (!b.XA) return !1;
            a.props.children = a.children.length > 1 ? a.children : a.children[0];
            var c, d = (c = a.props.idomKey) != null ? c : a.type,
                e;
            if (f4() && ((e = f4()[L4]) == null ? void 0 : e.key) === d) {
                d = f4();
                c = d[L4];
                if (!c) throw Error("Reactive data has been lost on node. Tag name: " + d.tagName);
                if (!b.O3) {
                    var f;
                    (f = c.lqa) == null || f.call(c, a.props);
                    Iib(c);
                    return !0
                }
                f = u4;
                b = b.O3(a.props, c.props, f !== null ? f : c.context, c.m$);
                f = Jib(b);
                Kib(a.props, c.props);
                f > 0 ? W4(b) : i4 = f4();
                return !0
            }
            if (Lib.has(b.name) && a.props.allowIdomInterop !== Mib) throw Error(b.name +
                " can not be called from a IDOM component. See go/cow-errors#control-flow-component-called-from-Idom-Component");
            (b = ohb({
                component: a.type,
                debugInstance: a.props.debugInstance,
                ex: function() {
                    return jib(a.type, a.props)
                }
            })) && Nib(b);
            return !0
        },
        Jib = function(a) {
            if (a) {
                if (Array.isArray(a)) {
                    var b = 0;
                    a = g.w(a);
                    for (var c = a.next(); !c.done; c = a.next())(c = c.value) && (b = c.type === C4 ? b + c.children.length : b + 1);
                    return b
                }
                if (a.type === C4) return a.children.length
            } else return 0;
            return 1
        },
        Kib = function(a, b) {
            b && (b.children = a.children, b.v8 = a.v8, b.fallback = a.fallback)
        },
        Oib = function(a) {
            for (var b = 0; b < N4(a).length; b++) i4 = f4()
        },
        Iib = function(a) {
            var b = Pib();
            if (b) Oib(b);
            else
                for (var c = 0; c < a.h0; c++)(b = Pib()) ? Oib(b) : i4 = f4()
        },
        Pib = function() {
            var a;
            return (a = f4()[L4]) == null ? void 0 : a.Q2
        },
        Nib = function(a) {
            a = a != null && a.Lm ? a.Lm : a;
            a = Array.isArray(a) ? a : [a];
            a = g.w(a);
            for (var b = a.next(); !b.done; b = a.next()) e4.insertBefore(b.value, f4()), i4 = f4()
        },
        Qib = function(a) {
            var b = fib(),
                c = U4(function() {
                    return {
                        value: typeof a === "function" ? a() : a
                    }
                });
            return [c.value, function(d) {
                var e = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    if (P4 !== null) {
                        var f;
                        (f = p4.handleError) == null || f.call.apply(f, [p4].concat(g.x(t4(Error("Can't set state during rendering")))))
                    }
                    c.value = typeof d === "function" ? d(c.value) : d;
                    b.lO = {
                        VR: b.state,
                        XZ: !0
                    };
                    $3(e, x4(b.MJ));
                    $3(e, Whb());
                    if (b.el) {
                        var h;
                        d = {};
                        var l = (d.props = b.props, d.type = b.j, d.children = (h = b.props.children) != null ? h : [], d[A4] = !0, d);
                        try {
                            zib(b.el, l, !0)
                        } catch (p) {
                            var m, n;
                            (n = p4.handleError) == null || n.call.apply(n, [p4].concat(g.x(t4(p, (m =
                                b.j) == null ? void 0 : m.At))))
                        }
                    }
                } catch (p) {
                    e.error = p, e.hasError = !0
                } finally {
                    a4(e)
                }
            }]
        },
        Rib = function() {
            return U4(function() {
                return {
                    value: null
                }
            })
        },
        Vib = function(a) {
            var b = Sib;
            Tib.push(a);
            Uib || (b(function() {
                for (var c = g.w(Tib), d = c.next(); !d.done; d = c.next()) d = d.value, d();
                Tib.length = 0;
                Uib = !1
            }), Uib = !0)
        },
        Sib = function(a) {
            Promise.resolve().then(a)
        },
        Wib = function(a) {
            a = g.w(Qib(a));
            var b = a.next().value,
                c = a.next().value;
            return [b, function(d) {
                Vib(function() {
                    c(d)
                })
            }]
        },
        Xib = function(a) {
            function b() {
                var l = a.J.fd() ? "Hide more Shorts" : "Hide more videos";
                e(l)
            }
            var c = g.w(Qib("Hide more videos")),
                d = c.next().value,
                e = c.next().value;
            T4(function() {
                var l = a.J;
                l.addEventListener("videodatachange", b);
                return function() {
                    l.removeEventListener("videodatachange", b)
                }
            }, [a.J]);
            var f = U4(function() {
                    return (new g.jx(g.Dx())).element
                }),
                h = V4();
            tib(function() {
                h.value.appendChild(f)
            });
            return S4("button", {
                class: "ytp-button ytp-collapse",
                "aria-label": d,
                "on:click": wib(function() {
                    a.action && a.action()
                })
            }, S4("div", {
                class: "ytp-collapse-icon",
                el: h,
                skip: !0
            }))
        },
        Yib = function(a) {
            function b() {
                var h = a.J.fd() ? "More Shorts" : "More videos";
                e(h)
            }
            var c = g.w(Wib("More videos")),
                d = c.next().value,
                e = c.next().value,
                f = V4();
            T4(function() {
                a.vM && (a.vM.value = f.value)
            }, [a.vM]);
            T4(function() {
                var h = a.J;
                h.addEventListener("videodatachange", b);
                return function() {
                    h.removeEventListener("videodatachange", b)
                }
            }, [a.J]);
            return S4("button", {
                el: f,
                class: "ytp-button ytp-expand",
                "on:click": wib(function() {
                    a.action && a.action()
                })
            }, d)
        },
        Zib = function(a, b) {
            var c = Rib();
            T4(function() {
                var d = new g.d1(a);
                d.B = !0;
                c.value = d;
                return function() {
                    var e;
                    (e = c.value) == null || e.dispose()
                }
            }, [a,
                b
            ]);
            return c
        },
        $ib = function(a) {
            function b(y) {
                a: {
                    var B = g.w([1,
                        16, 32
                    ]);
                    for (var C = B.next(); !C.done; C = B.next())
                        if (g.Z(y, C.value)) {
                            B = !0;
                            break a
                        }
                    B = !1
                }
                if (!B) {
                    var G;
                    (G = p.value) != null && G.suggestionData.length > 0 && h(g.Z(y, 4) && !g.Z(y, 2) && !g.Z(y, 1024))
                }
            }

            function c() {
                b(a.J.getPlayerStateObject())
            }

            function d(y) {
                b(y.state)
            }
            var e = g.w(Wib(!1)),
                f = e.next().value,
                h = e.next().value,
                l = g.w(Wib(!1));
            e = l.next().value;
            var m = l.next().value,
                n = V4(),
                p = Zib(a.J, a.Le),
                q = V4();
            l = Rib();
            var r = Rib();
            T4(function() {
                var y = a.J,
                    B = y.fd() ? 157212 : 172777;
                r.value = new g.O;
                y.createClientVe(q.value, r.value, B);
                y.addEventListener("presentingplayerstatechange", d);
                y.addEventListener("videodatachange", c);
                B = y.U().controlsType === "0";
                g.jp(y.getRootNode(), "ytp-pause-overlay-controls-hidden", B);
                return function() {
                    y.removeEventListener("videodatachange", c);
                    y.removeEventListener("presentingplayerstatechange",
                        d);
                    var C;
                    (C = r.value) == null || C.dispose()
                }
            }, [a.J]);
            T4(function() {
                var y;
                (y = p.value) == null || y.Ia(n.value)
            }, [p]);
            var t = a.J;
            if (f)
                if (g.jp(t.getRootNode(), "ytp-expand-pause-overlay", !e), e) l.value.focus();
                else {
                    var u = p.value;
                    g.e1(u);
                    u.show();
                    q.value.focus()
                }
            q.value && t.logVisibility(q.value, f && !e);
            return S4("ytp-pause-overlay", {
                el: q,
                class: "ytp-pause-overlay",
                "aria-hidden": !f
            }, S4(Xib, {
                J: a.J,
                Le: a.Le,
                action: function() {
                    m(!0)
                }
            }), S4(Yib, {
                J: a.J,
                Le: a.Le,
                action: function() {
                    m(!1)
                },
                vM: l
            }), S4("div", {
                el: n,
                skip: !0
            }))
        },
        ajb = function(a) {
            g.T.call(this, {
                I: "div",
                S: "ytp-related-on-error-overlay"
            });
            var b = this;
            this.api = a;
            this.K = this.B = 0;
            this.G = new g.AE(this);
            this.j = [];
            this.suggestionData = [];
            this.columns = this.containerWidth = 0;
            this.title = new g.T({
                I: "h2",
                S: "ytp-related-title",
                va: "{{title}}"
            });
            this.previous = new g.T({
                I: "button",
                La: ["ytp-button", "ytp-previous"],
                X: {
                    "aria-label": "Show previous suggested videos"
                },
                V: [g.tx()]
            });
            this.oa = new g.c1(function(f) {
                b.suggestions.element.scrollLeft = -f
            });
            this.D = this.C = 0;
            this.N = !0;
            this.next = new g.T({
                I: "button",
                La: ["ytp-button", "ytp-next"],
                X: {
                    "aria-label": "Show more suggested videos"
                },
                V: [g.ux()]
            });
            g.P(this, this.G);
            a = a.U();
            this.api.L("embeds_web_enable_pause_overlay_rounding") && g.fp(this.element, "ytp-error-overlay-round-corners");
            this.Y = a.D;
            g.P(this, this.title);
            this.title.Ia(this.element);
            this.suggestions = new g.T({
                I: "div",
                S: "ytp-suggestions"
            });
            g.P(this, this.suggestions);
            this.suggestions.Ia(this.element);
            g.P(this, this.previous);
            this.previous.Ia(this.element);
            this.previous.listen("click", this.V4, this);
            g.P(this, this.oa);
            for (var c = {
                    KA: 0
                }; c.KA < 16; c = {
                    KA: c.KA
                }, c.KA++) {
                var d = new g.T({
                    I: "a",
                    S: "ytp-suggestion-link",
                    X: {
                        href: "{{link}}",
                        target: a.Y,
                        "aria-label": "{{aria_label}}"
                    },
                    V: [{
                        I: "div",
                        S: "ytp-suggestion-image",
                        V: [{
                            I: "div",
                            X: {
                                "data-is-live": "{{is_live}}"
                            },
                            S: "ytp-suggestion-duration",
                            va: "{{duration}}"
                        }]
                    }, {
                        I: "div",
                        S: "ytp-suggestion-title",
                        X: {
                            title: "{{hover_title}}"
                        },
                        va: "{{title}}"
                    }, {
                        I: "div",
                        S: "ytp-suggestion-author",
                        va: "{{views_or_author}}"
                    }]
                });
                g.P(this, d);
                d.Ia(this.suggestions.element);
                var e = d.Ea("ytp-suggestion-link");
                g.gm(e, "transitionDelay", c.KA / 20 + "s");
                this.G.T(e, "click", function(f) {
                    return function(h) {
                        var l = f.KA,
                            m = b.suggestionData[l],
                            n = m.sessionData;
                        g.JO(b.api.U()) && b.api.L("web_player_log_click_before_generating_ve_conversion_params") ? (b.api.logClick(b.j[l].element), l = m.Il(), m = {}, g.FR(b.api, m), l = g.Si(l, m), g.DS(l, b.api, h)) : g.CS(h, b.api, b.Y, n || void 0) && b.api.xp(m.videoId, n, m.playlistId)
                    }
                }(c));
                this.j.push(d)
            }
            g.P(this, this.next);
            this.next.Ia(this.element);
            this.next.listen("click", this.U4, this);
            this.G.T(this.api, "videodatachange", this.onVideoDataChange);
            this.resize(this.api.ob().getPlayerSize());
            this.onVideoDataChange();
            this.show()
        },
        bjb = function(a, b) {
            if (a.api.U().L("web_player_log_click_before_generating_ve_conversion_params"))
                for (var c = Math.floor(-a.C / (a.D + a.B)), d = Math.min(c + a.columns, a.suggestionData.length) - 1; c <= d; c++) a.api.logVisibility(a.j[c].element, b)
        },
        cjb = function(a) {
            a.next.element.style.bottom =
                a.K + "px";
            a.previous.element.style.bottom = a.K + "px";
            var b = a.C,
                c = a.containerWidth - a.suggestionData.length * (a.D + a.B);
            g.jp(a.element, "ytp-scroll-min", b >= 0);
            g.jp(a.element, "ytp-scroll-max", b <= c)
        },
        djb = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.j[b],
                    e = c.shortViewCount ? c.shortViewCount : c.author,
                    f = c.Il(),
                    h = a.api.U();
                if (g.JO(h) && !h.L("web_player_log_click_before_generating_ve_conversion_params")) {
                    var l = {};
                    g.kR(a.api, "addEmbedsConversionTrackingParams", [l]);
                    f = g.Si(f, l)
                }
                d.element.style.display = "";
                l = d.Ea("ytp-suggestion-title");
                g.np.test(c.title) ? l.dir = "rtl" : g.pab.test(c.title) && (l.dir = "ltr");
                l = d.Ea("ytp-suggestion-author");
                g.np.test(e) ? l.dir = "rtl" : g.pab.test(e) && (l.dir = "ltr");
                d.update({
                    views_or_author: e,
                    duration: c.isLivePlayback ? "Live" : c.lengthSeconds ? g.yy(c.lengthSeconds) : "",
                    link: f,
                    hover_title: c.title,
                    title: c.title,
                    aria_label: c.ariaLabel || null,
                    is_live: c.isLivePlayback
                });
                e = d.Ea("ytp-suggestion-image");
                f = c.hh();
                e.style.backgroundImage = f ? "url(" + f + ")" : "";
                h.L("web_player_log_click_before_generating_ve_conversion_params") && (a.api.createServerVe(d.element, d), (c = (c = c.sessionData) && c.itct) && a.api.setTrackingParams(d.element, c))
            }
            for (; b < a.j.length; b++) a.j[b].element.style.display = "none";
            cjb(a)
        },
        Y4 = function(a) {
            g.nY.call(this, a);
            var b = this;
            this.j = null;
            var c = a.U(),
                d = {
                    target: c.Y
                },
                e = ["ytp-small-redirect"];
            c.C ? e.push("no-link") : (c = g.lP(c), d.href = c, d["aria-label"] = "Visit YouTube to search for more videos");
            var f = new g.T({
                I: "a",
                La: e,
                X: d,
                V: [{
                    I: "svg",
                    X: {
                        fill: "#fff",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        width: "100%"
                    },
                    V: [{
                        I: "path",
                        X: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }, {
                        I: "path",
                        X: {
                            d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                        }
                    }]
                }]
            });
            f.Ia(this.element);
            a.createClientVe(f.element, this, 178053);
            this.T(f.element, "click", function(h) {
                ejb(b, h, f.element)
            });
            g.P(this, f);
            a.U().C || (this.j = new ajb(a), this.j.Ia(this.element), g.P(this, this.j));
            this.T(a, "videodatachange", function() {
                b.show()
            });
            this.resize(this.api.ob().getPlayerSize())
        },
        ejb = function(a, b, c) {
            b.preventDefault();
            a.api.logClick(c);
            b = c.getAttribute("href");
            c = {};
            g.kR(a.api, "addEmbedsConversionTrackingParams", [c]);
            b = g.Hc(c) ? b : g.Si(b, c);
            g.Qd(b)
        },
        fjb = function(a, b) {
            a.Ea("ytp-error-content").style.paddingTop = "0px";
            var c = a.Ea("ytp-error-content"),
                d = c.clientHeight;
            a.j && a.j.resize(b, b.height - d);
            c.style.paddingTop = (b.height - (a.j ? a.j.element.clientHeight : 0)) / 2 - d / 2 + "px"
        },
        ijb = function(a, b) {
            var c = a.api.U(),
                d;
            b.reason && (gjb(b.reason) ? d = g.rx(b.reason) : d = g.oY(g.qx(b.reason)), a.Cd(d, "content"));
            var e;
            b.subreason && (gjb(b.subreason) ? e = g.rx(b.subreason) : e = g.oY(g.qx(b.subreason)), a.Cd(e, "subreason"));
            if (b.proceedButton && b.proceedButton.buttonRenderer) {
                d = a.Ea("ytp-error-content-wrap-subreason");
                b = b.proceedButton.buttonRenderer;
                var f = g.ne("A");
                if (b.text && b.text.simpleText && (e = b.text.simpleText, f.textContent = e, !hjb(d, e) && (!c.C || c.embedsErrorLinks))) {
                    var h;
                    c = (h = g.Q(b == null ? void 0 : b.navigationEndpoint, g.Kx)) == null ?
                        void 0 : h.url;
                    var l;
                    h = (l = g.Q(b == null ? void 0 : b.navigationEndpoint, g.Kx)) == null ? void 0 : l.target;
                    c && (f.setAttribute("href", c), a.api.createClientVe(f, a, 178424), a.T(f, "click", function(m) {
                        ejb(a, m, f)
                    }));
                    h && f.setAttribute("target", h);
                    l = g.ne("DIV");
                    l.appendChild(f);
                    d.appendChild(l)
                }
            }
        },
        gjb = function(a) {
            if (a.runs)
                for (var b = 0; b < a.runs.length; b++)
                    if (a.runs[b].navigationEndpoint) return !0;
            return !1
        },
        hjb = function(a, b) {
            a = g.ee("A", a);
            for (var c = 0; c < a.length; c++)
                if (a[c].textContent === b) return !0;
            return !1
        },
        jjb = function(a, b) {
            g.T.call(this, {
                I: "a",
                La: ["ytp-impression-link"],
                X: {
                    target: "{{target}}",
                    href: "{{url}}",
                    "aria-label": "Watch on YouTube"
                },
                V: [{
                    I: "div",
                    S: "ytp-impression-link-content",
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "div",
                        S: "ytp-impression-link-text",
                        va: "Watch on"
                    }, {
                        I: "div",
                        S: "ytp-impression-link-logo",
                        va: "{{logoSvg}}"
                    }]
                }]
            });
            this.api = a;
            this.Le = b;
            this.updateValue("target", a.U().Y);
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(this.api, "presentingplayerstatechange", this.Lk);
            this.T(this.api, "videoplayerreset", this.kV);
            this.T(this.element,
                "click", this.onClick);
            this.onVideoDataChange();
            this.kV()
        },
        kjb = function(a) {
            var b = {};
            g.kR(a.api, "addEmbedsConversionTrackingParams", [b]);
            a = a.api.getVideoUrl();
            return a = g.Si(a, b)
        },
        Z4 = function(a) {
            g.T.call(this, {
                I: "div",
                La: ["ytp-mobile-a11y-hidden-seek-button"],
                V: [{
                    I: "button",
                    La: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
                    X: {
                        "aria-label": "Rewind 10 seconds",
                        "aria-hidden": "false"
                    }
                }, {
                    I: "button",
                    La: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
                    X: {
                        "aria-label": "Fast forward 10 seconds",
                        "aria-hidden": "false"
                    }
                }]
            });
            this.api = a;
            this.j = this.Ea("ytp-mobile-a11y-hidden-seek-button-rewind");
            this.forwardButton = this.Ea("ytp-mobile-a11y-hidden-seek-button-forward");
            this.api.createClientVe(this.j, this,
                141902);
            this.api.createClientVe(this.forwardButton, this, 141903);
            this.T(this.api, "presentingplayerstatechange", this.Lk);
            this.T(this.j, "click", this.B);
            this.T(this.forwardButton, "click", this.C);
            this.Lk()
        },
        $4 = function(a) {
            g.T.call(this, {
                I: "div",
                S: "ytp-muted-autoplay-endscreen-overlay",
                V: [{
                    I: "div",
                    S: "ytp-muted-autoplay-end-panel",
                    V: [{
                        I: "button",
                        La: ["ytp-muted-autoplay-end-text", "ytp-button"],
                        va: "{{text}}"
                    }]
                }]
            });
            this.api = a;
            this.D = this.Ea("ytp-muted-autoplay-end-panel");
            this.B = !1;
            this.api.createClientVe(this.element, this, 52428);
            this.T(this.api, "presentingplayerstatechange", this.C);
            this.T(a, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
            this.listen("click", this.onClick);
            this.hide()
        },
        a5 = function(a) {
            var b = a.U();
            g.T.call(this, {
                I: "a",
                La: ["ytp-watermark", "yt-uix-sessionlink"],
                X: {
                    target: b.Y,
                    href: "{{url}}",
                    "aria-label": g.mD("Watch on $WEBSITE", {
                        WEBSITE: g.ZO(b)
                    }),
                    "data-sessionlink": "feature=player-watermark"
                },
                va: "{{logoSvg}}"
            });
            this.api = a;
            this.j = null;
            this.B = !1;
            this.state = a.getPlayerStateObject();
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.T(a, "appresize", this.jc);
            this.onVideoDataChange();
            this.wd(this.state);
            this.jc(a.ob().getPlayerSize())
        },
        ljb = function(a) {
            var b = a.api.getVideoData(),
                c = a.api.U().Dd && !g.Z(a.state, 2) && !g.cR(a.api.getVideoData(1));
            b.mutedAutoplay || g.mx(a, c);
            a.api.logVisibility(a.element, c)
        },
        ojb = function(a) {
            g.T.call(this, {
                I: "div",
                S: "ytp-muted-autoplay-overlay",
                V: [{
                    I: "div",
                    S: "ytp-muted-autoplay-bottom-buttons",
                    V: [{
                        I: "button",
                        La: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                        X: {
                            "aria-label": "Muted playback indicator"
                        },
                        V: [{
                            I: "div",
                            La: ["ytp-muted-autoplay-equalizer-icon"],
                            V: [{
                                I: "svg",
                                X: {
                                    height: "100%",
                                    version: "1.1",
                                    viewBox: "-4 -4 24 24",
                                    width: "100%"
                                },
                                V: [{
                                    I: "g",
                                    X: {
                                        fill: "#fff"
                                    },
                                    V: [{
                                            I: "rect",
                                            S: "ytp-equalizer-bar-left",
                                            X: {
                                                height: "9",
                                                width: "4",
                                                x: "1",
                                                y: "7"
                                            }
                                        }, {
                                            I: "rect",
                                            S: "ytp-equalizer-bar-middle",
                                            X: {
                                                height: "14",
                                                width: "4",
                                                x: "6",
                                                y: "2"
                                            }
                                        },
                                        {
                                            I: "rect",
                                            S: "ytp-equalizer-bar-right",
                                            X: {
                                                height: "12",
                                                width: "4",
                                                x: "11",
                                                y: "4"
                                            }
                                        }
                                    ]
                                }]
                            }]
                        }]
                    }]
                }]
            });
            var b = this;
            this.api = a;
            this.bottomButtons = this.Ea("ytp-muted-autoplay-bottom-buttons");
            this.Ea("ytp-muted-autoplay-equalizer");
            this.C = new g.Yo(this.l$, 4E3, this);
            this.B = !1;
            a.createClientVe(this.element, this, 39306);
            this.T(a, "presentingplayerstatechange", this.BN);
            this.T(a, "onMutedAutoplayStarts", function() {
                mjb(b);
                b.BN();
                njb(b);
                b.B = !1
            });
            this.T(a, "onAutoplayBlocked", this.onAutoplayBlocked);
            this.listen("click", this.onClick);
            this.T(a, "onMutedAutoplayEnds", this.onMutedAutoplayEnds);
            this.hide();
            g.qR(a.app) && (mjb(this), this.BN(), njb(this));
            g.P(this, this.C)
        },
        njb = function(a) {
            a.Fb && a.j && (a.j.show(), a.C.start())
        },
        mjb = function(a) {
            a.watermark || (a.watermark = new a5(a.api), g.P(a, a.watermark), a.watermark.Ia(a.bottomButtons, 0), g.jp(a.watermark.element, "ytp-muted-autoplay-watermark", !0), a.j = new g.by(a.watermark, 0, !0, 100), g.P(a, a.j))
        },
        b5 = function(a) {
            g.T.call(this, {
                I: "div",
                S: "ytp-pause-overlay",
                X: {
                    tabIndex: "-1"
                }
            });
            var b = this;
            this.api = a;
            this.C = new g.AE(this);
            this.D = new g.by(this, 1E3, !1, 100, function() {
                b.j.B = !1
            }, function() {
                b.j.B = !0
            });
            this.B = !1;
            this.expandButton = new g.T({
                I: "button",
                La: ["ytp-button", "ytp-expand"],
                va: this.api.fd() ? "More Shorts" : "More videos"
            });
            a.U().controlsType === "0" && g.fp(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
            this.api.L("embeds_web_enable_pause_overlay_rounding") && g.fp(this.element, "ytp-pause-overlay-round-corners");
            g.P(this, this.C);
            g.P(this, this.D);
            var c = new g.T({
                I: "button",
                La: ["ytp-button", "ytp-collapse"],
                X: {
                    "aria-label": this.api.fd() ? "Hide more Shorts" : "Hide more videos"
                },
                V: [{
                    I: "div",
                    S: "ytp-collapse-icon",
                    V: [g.Dx()]
                }]
            });
            g.P(this, c);
            c.Ia(this.element);
            c.listen("click", this.G, this);
            g.P(this, this.expandButton);
            this.expandButton.Ia(this.element);
            this.expandButton.listen("click", this.K, this);
            this.j = new g.d1(a);
            g.P(this, this.j);
            this.j.B = !1;
            this.j.Ia(this.element);
            this.api.fd() ? this.api.createClientVe(this.element, this, 157212) : this.api.createClientVe(this.element, this, 172777);
            this.C.T(this.api, "presentingplayerstatechange", this.Sa);
            this.C.T(this.api, "videodatachange", this.Sa);
            this.hide()
        },
        c5 = function(a) {
            g.T.call(this, {
                I: "div",
                La: ["ytp-player-content", "ytp-iv-player-content"],
                V: [{
                    I: "div",
                    S: "ytp-countdown-timer",
                    V: [{
                        I: "svg",
                        X: {
                            height: "100%",
                            version: "1.1",
                            viewBox: "0 0 72 72",
                            width: "100%"
                        },
                        V: [{
                            I: "circle",
                            S: "ytp-svg-countdown-timer-ring",
                            X: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-dasharray": "211",
                                "stroke-dashoffset": "-211",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }, {
                            I: "circle",
                            S: "ytp-svg-countdown-timer-background",
                            X: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-opacity": "0.3",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }]
                    }, {
                        I: "span",
                        S: "ytp-countdown-timer-time",
                        va: "{{duration}}"
                    }]
                }]
            });
            this.api = a;
            this.K = this.Ea("ytp-svg-countdown-timer-ring");
            this.j = null;
            this.D = this.C = 0;
            this.B = !1;
            this.G = 0;
            this.api.createClientVe(this.element, this, 159628)
        },
        qjb = function(a) {
            a.j || (a.C = 5E3, a.D = (0, g.S)(), a.j = new g.Xo(function() {
                pjb(a)
            }, null), pjb(a))
        },
        pjb = function(a) {
            if (!a.B) {
                var b = Math.min((0, g.S)() - a.D, a.C);
                var c = a.C - b;
                b = a.C === 0 ? 0 : Math.max(c / a.C, 0);
                c = Math.round(c / 1E3);
                a.K.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
                a.updateValue("duration", c);
                b <= 0 && a.j ? d5(a) : a.j && a.j.start()
            }
        },
        d5 = function(a) {
            a.j && (a.j.dispose(), a.j = null, a.B = !1)
        },
        sjb = function(a) {
            g.UX.call(this, a);
            this.J = a;
            this.j = new g.AE(this);
            this.B = null;
            this.N = !1;
            this.countdownTimer = null;
            this.Y = !1;
            rjb(this);
            g.P(this, this.j);
            this.load()
        },
        ujb = function(a) {
            var b = g.v9a(a.J);
            b !== a.Y && (a.Y = b, a.G && (a.G.dispose(), a.G = null), a.C && (a.C.dispose(), a.C = null), a.D && (a.D.dispose(), a.D = null), a.B && (a.B.stop(), a.B.dispose(), a.B = null), b && (b = g.pR(a.J), a.J.fd() && (a.D = new g.T({
                    I: "div",
                    S: "ytp-pause-overlay-backdrop",
                    X: {
                        tabIndex: "-1"
                    }
                }), g.P(a, a.D), g.IR(a.J, a.D.element, 4), a.B = new g.by(a.D, 1E3, !1, 100), g.P(a, a.B), a.D.hide()), a.G = new g.T({
                    I: "div",
                    S: "ytp-pause-overlay-container",
                    X: {
                        tabIndex: "-1"
                    }
                }), g.P(a, a.G), a.J.L("embeds_web_enable_keto_pause_overlay") ? zib(a.G.element, S4($ib, {
                    J: a.J,
                    Le: b
                })) :
                (a.C = new b5(a.J, b), g.P(a, a.C), a.C.Ia(a.G.element)), g.IR(a.J, a.G.element, 4), tjb(a, a.J.getPlayerStateObject())))
        },
        tjb = function(a, b) {
            a.B && (!g.Z(b, 4) && !g.Z(b, 2) || g.Z(b, 1024) ? a.B.hide() : a.B.show())
        },
        rjb = function(a) {
            var b = a.J;
            a = !!b.fd();
            g.jp(b.getRootNode(), "ytp-shorts-mode", a);
            if (b = b.getVideoData()) b.oY = a
        },
        e5 = function(a, b) {
            var c = a.J.U();
            a = {
                adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
                breakType: a.J.getCurrentTime() === 0 ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL" : a.J.getPlayerState() === 0 ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL" : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
                embedUrl: g.Nfa(a.J.U().loaderUrl),
                eventType: b,
                youtubeHost: g.Mi(a.J.U().Da) || ""
            };
            a.embeddedPlayerMode = c.Fa;
            g.it("embedsAdEvent", a)
        },
        Chb = 0,
        vjb = 0;
    var whb = Symbol("DISABLE_ON_CLEANUP");
    var mhb = {
        w8: !0,
        x8: !0,
        Cfa: g.G9a,
        W3: g.H9a,
        Zea: g.I9a
    };
    var Ygb = Object.prototype.hasOwnProperty;
    Vgb.prototype = Object.create(null);
    var Dib = ahb();
    var n4 = null;
    var ihb = typeof Node !== "undefined" && Node.prototype.getRootNode || function() {
        for (var a = this, b = a; a;) b = a, a = a.parentNode;
        return b
    };
    var g4 = null,
        i4 = null,
        e4 = null,
        k4 = null,
        l4 = [],
        j4 = fhb,
        m4 = [],
        Bib = function(a) {
            return jhb(function(b, c, d) {
                e4 = i4 = b;
                i4 = null;
                c(d);
                h4(null);
                i4 = e4;
                e4 = e4.parentNode;
                return b
            }, a)
        }(),
        Aib = function(a) {
            return jhb(function(b, c, d) {
                var e = {
                    nextSibling: b
                };
                i4 = e;
                c(d);
                e4 && h4(b.nextSibling);
                return e === i4 ? null : i4
            }, a)
        }();
    var o4 = [],
        Eib = 0;
    var X4 = new Vgb;
    var wjb = ahb();
    var p4 = Object.assign({}, {
        attributes: wjb,
        handleError: function(a, b) {
            throw b;
        }
    }, mhb);
    var q4 = [],
        qhb, rhb;
    var f5 = {},
        vhb = (f5.A$ = !0, f5[Symbol.dispose] = function() {
            var a;
            (a = p4.handleError) == null || a.call.apply(a, [p4].concat(g.x(t4(Error("This owner cannot be disposed")))))
        }, f5.Ja = !1, f5);
    var u4 = null;
    var w4 = new Set,
        thb = new Set;
    g.Cla = function() {
        if (p4.Cfa) {
            var a = w4;
            w4 = new Set;
            shb(a)
        } else shb(w4);
        p4.W3 && uhb()
    };
    var g5 = {},
        xjb = Object.assign({}, {
            A$: !0
        }, g.No, (g5.eg = void 0, g5.MQ = !1, g5.oT = null, g5.hP = !0, g5.Zz = !1, g5[Symbol.dispose] = Ahb, g5.EE = void 0, g5.vP = "[reaction]", g5.Ks = function() {
            if (this.oT !== null && !this.Ja) {
                if (g.Ho) throw Error("Schedulers cannot synchronously execute effects while scheduling.");
                this.Jm = !1;
                if (!this.MQ || Sgb(this)) {
                    this.MQ = !0;
                    vjb++;
                    zhb(this);
                    var a = u4;
                    u4 = this;
                    var b = g.vla(this);
                    try {
                        s4(this.oT, {
                            stack: this.EE
                        })
                    } finally {
                        g.wla(this, b), u4 = a
                    }
                }
            }
        }, g5));
    var Ehb = Object.assign({}, xjb, {
        yJ: Bhb,
        Zz: !1
    });
    var Ghb = Object.assign({}, xjb, {
        yJ: Bhb,
        Zz: !0
    });
    var Qhb = new Set("allowfullscreen async autofocus autoplay checked controls default defer disabled formnovalidate hidden ismap itemscope jsshadow jsslot loop multiple muted novalidate open playsinline readonly required reversed scoped seamless selected spellcheck sortable typemustmatch".split(" "));
    var Khb = {
            align: 1,
            alt: 1,
            "aria-activedescendant": 10,
            "aria-atomic": 1,
            "aria-autocomplete": 1,
            "aria-busy": 1,
            "aria-checked": 1,
            "aria-controls": 10,
            "aria-current": 1,
            "aria-describedby": 10,
            "aria-disabled": 1,
            "aria-dropeffect": 1,
            "aria-expanded": 1,
            "aria-haspopup": 1,
            "aria-hidden": 1,
            "aria-invalid": 1,
            "aria-label": 1,
            "aria-labelledby": 10,
            "aria-level": 1,
            "aria-live": 1,
            "aria-multiline": 1,
            "aria-multiselectable": 1,
            "aria-orientation": 1,
            "aria-owns": 10,
            "aria-posinset": 1,
            "aria-pressed": 1,
            "aria-readonly": 1,
            "aria-relevant": 1,
            "aria-required": 1,
            "aria-selected": 1,
            "aria-setsize": 1,
            "aria-sort": 1,
            "aria-valuemax": 1,
            "aria-valuemin": 1,
            "aria-valuenow": 1,
            "aria-valuetext": 1,
            async: 8,
            autocapitalize: 1,
            autocomplete: 1,
            autocorrect: 1,
            autofocus: 1,
            autoplay: 1,
            bgcolor: 1,
            border: 1,
            cellpadding: 1,
            cellspacing: 1,
            checked: 1,
            cite: 3,
            "class": 1,
            color: 1,
            cols: 1,
            colspan: 1,
            contenteditable: 1,
            controls: 1,
            datetime: 1,
            dir: 8,
            disabled: 1,
            download: 1,
            draggable: 1,
            enctype: 1,
            face: 1,
            "for": 10,
            formenctype: 1,
            frameborder: 1,
            height: 1,
            hidden: 1,
            href: 4,
            hreflang: 1,
            id: 10,
            ismap: 1,
            itemid: 1,
            itemprop: 1,
            itemref: 1,
            itemscope: 1,
            itemtype: 1,
            label: 1,
            lang: 1,
            list: 10,
            loading: 8,
            loop: 1,
            max: 1,
            maxlength: 1,
            media: 1,
            min: 1,
            minlength: 1,
            multiple: 1,
            muted: 1,
            name: 10,
            nonce: 1,
            open: 1,
            placeholder: 1,
            poster: 3,
            preload: 1,
            rel: 1,
            required: 1,
            reversed: 1,
            role: 1,
            rows: 1,
            rowspan: 1,
            selected: 1,
            shape: 1,
            size: 1,
            sizes: 1,
            slot: 1,
            span: 1,
            spellcheck: 1,
            src: 4,
            srcset: 12,
            start: 1,
            step: 1,
            style: 5,
            summary: 1,
            tabindex: 1,
            target: 8,
            title: 1,
            translate: 1,
            type: 1,
            valign: 1,
            value: 1,
            width: 1,
            wrap: 1
        },
        Jhb = {
            a: {
                href: [{
                    yd: 3
                }]
            },
            area: {
                href: [{
                    yd: 3
                }]
            },
            audio: {
                src: [{
                    yd: 3
                }]
            },
            button: {
                formaction: [{
                    yd: 3
                }],
                formmethod: [{
                    yd: 1
                }]
            },
            form: {
                action: [{
                    yd: 3
                }],
                method: [{
                    yd: 1
                }]
            },
            iframe: {
                srcdoc: [{
                    yd: 2
                }]
            },
            img: {
                src: [{
                    yd: 3
                }],
                srcset: [{
                    yd: 11
                }]
            },
            input: {
                accept: [{
                    yd: 1
                }],
                formaction: [{
                    yd: 3
                }],
                formmethod: [{
                    yd: 1
                }],
                pattern: [{
                    yd: 1
                }],
                readonly: [{
                    yd: 1
                }],
                src: [{
                    yd: 3
                }]
            },
            link: {
                href: [{
                    yd: 3,
                    Ji: "rel",
                    Si: "alternate"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "author"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "bookmark"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "canonical"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "cite"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "help"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "icon"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "license"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "next"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "prefetch"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "dns-prefetch"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "prerender"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "preconnect"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "preload"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "prev"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "search"
                }, {
                    yd: 3,
                    Ji: "rel",
                    Si: "subresource"
                }]
            },
            script: {
                defer: [{
                    yd: 1
                }]
            },
            source: {
                src: [{
                    yd: 3
                }],
                srcset: [{
                    yd: 11
                }]
            },
            textarea: {
                readonly: [{
                    yd: 1
                }]
            },
            video: {
                src: [{
                    yd: 3
                }]
            }
        };
    var yjb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
        h5 = {},
        Mhb = (h5[1] = {
            Kr: null,
            Cu: null,
            gt: null
        }, h5[2] = {
            Kr: function() {
                return g.vd.toString()
            },
            Cu: function(a) {
                return a instanceof g.yd
            },
            gt: function(a) {
                return g.Ad(a)
            }
        }, h5[3] = {
            Kr: function(a, b, c) {
                return yjb.test(c) ? c : g.vd.toString()
            },
            Cu: function(a) {
                return a instanceof g.rd
            },
            gt: function(a) {
                return g.sd(a)
            }
        }, h5[4] = {
            Kr: function() {
                return g.vd.toString()
            },
            Cu: function(a) {
                return a instanceof g.od
            },
            gt: function(a) {
                return g.pd(a)
            }
        }, h5[5] = {
            Kr: null,
            Cu: function(a) {
                return a instanceof g.Bd
            },
            gt: function(a) {
                return a.toString()
            }
        }, h5[7] = {
            Kr: null,
            Cu: null,
            gt: null
        }, h5[8] = {
            Kr: null,
            Cu: null,
            gt: null
        }, h5[10] = {
            Kr: null,
            Cu: null,
            gt: null
        }, h5);
    var Cib = Symbol("ATTR_TAG_VALUE");
    RegExp.prototype.hasOwnProperty("sticky");
    var zjb = ahb(),
        Shb = zjb.__default,
        Thb = zjb.style,
        Rhb = ["focusin", "focusout"];
    var A4 = Symbol("IS_VNODE");
    var E4, D4 = B4;
    var L4 = Symbol("reactiveData");
    var jib = eib;
    var R4 = {
        Uma: function() {},
        lpa: function() {},
        Yma: function() {},
        uX: function() {},
        Vma: function() {},
        l8: function() {},
        OE: function() {},
        JJ: function() {},
        m8: function() {}
    };
    O4.prototype.OE = function() {};
    O4.prototype.l8 = function() {};
    O4.prototype.JJ = function() {};
    O4.prototype.m8 = function() {};
    var P4 = null;
    g.z(Q4, O4);
    Q4.prototype.Py = function(a) {
        var b = P4;
        P4 = this;
        this.D = 0;
        try {
            a: {
                var c = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    $3(c, b4(g.lab));
                    $3(c, x4(this.MJ));
                    var d = this.B(a);
                    break a
                } catch (e) {
                    c.error = e, c.hasError = !0
                } finally {
                    a4(c)
                }
                d = void 0
            }
            return d
        }
        finally {
            P4 = b
        }
    };
    var mib = [];
    (function() {
        var a = n4;
        n4 = function(b) {
            a == null || a(b);
            nib(b)
        }
    })();
    E4 = kib;
    (function(a) {
        var b = {},
            c;
        for (c in a) b = {
            A1: void 0,
            Y_: void 0
        }, b.A1 = R4[c], b.Y_ = a[c], R4[c] = function(d) {
            return function() {
                var e = g.Da.apply(0, arguments);
                d.A1.apply(null, g.x(e));
                d.Y_.apply(null, g.x(e))
            }
        }(b)
    })({
        uX: function(a) {
            var b = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                $3(b, x4(a.MJ));
                var c;
                ((c = a.Fz) == null ? 0 : c.length) && vib(a.Fz)
            } catch (d) {
                b.error = d, b.hasError = !0
            } finally {
                a4(b)
            }
        },
        OE: function(a) {
            var b = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                $3(b, x4(a.MJ));
                var c;
                ((c = a.Fz) == null ? 0 : c.length) && vib(a.Fz)
            } catch (d) {
                b.error = d, b.hasError = !0
            } finally {
                a4(b)
            }
        },
        JJ: function(a) {
            var b;
            ((b = a.GA) == null ? 0 : b.length) && a.GA.forEach(uib)
        }
    });
    var Mib = Symbol("ALLOW_IDOM_INTEROP_SYMBOL");
    E4 = kib;
    var Lib = new Set(["For", "If", "Match", "Watch"]),
        Ajb = {},
        Bjb = (Ajb.__default = function() {
            return z4
        }, Ajb.style = function() {
            return z4
        }, Ajb),
        i5;
    for (i5 in Bjb) p4.attributes[i5] = Bjb[i5](p4.attributes[i5]);
    var Tib = [],
        Uib = !1;
    g.z(ajb, g.T);
    g.k = ajb.prototype;
    g.k.hide = function() {
        this.N = !0;
        g.T.prototype.hide.call(this);
        bjb(this, !1)
    };
    g.k.show = function() {
        this.N = !1;
        g.T.prototype.show.call(this);
        bjb(this, !0)
    };
    g.k.isHidden = function() {
        return this.N
    };
    g.k.U4 = function() {
        this.scrollTo(this.C - this.containerWidth)
    };
    g.k.V4 = function() {
        this.scrollTo(this.C + this.containerWidth)
    };
    g.k.resize = function(a, b) {
        var c = this.api.U(),
            d = 16 / 9,
            e = a.width >= 650,
            f = a.width < 480 || a.height < 290,
            h = Math.min(this.suggestionData.length, this.j.length);
        if (Math.min(a.width, a.height) <= 150 || h === 0 || !c.Bd) this.hide();
        else {
            var l;
            if (e) {
                var m = l = 28;
                this.B = 16
            } else this.B = m = l = 8;
            if (f) {
                var n = 6;
                e = 14;
                var p = 12;
                f = 24;
                c = 12
            } else n = 8, e = 18, p = 16, f = 36, c = 16;
            a = a.width - (48 + l + m);
            l = Math.ceil(a / 150);
            l = Math.min(3, l);
            m = a / l - this.B;
            var q = Math.floor(m / d);
            b && q + 100 > b && m > 50 && (q = Math.max(b, 50 / d), l = Math.ceil(a / (d * (q - 100) + this.B)), m = a / l - this.B,
                q = Math.floor(m / d));
            m < 50 || g.ER(this.api) ? this.hide() : this.show();
            for (b = 0; b < h; b++) {
                d = this.j[b];
                var r = d.Ea("ytp-suggestion-image");
                r.style.width = m + "px";
                r.style.height = q + "px";
                d.Ea("ytp-suggestion-title").style.width = m + "px";
                d.Ea("ytp-suggestion-author").style.width = m + "px";
                d = d.Ea("ytp-suggestion-duration");
                d.style.display = d && m < 100 ? "none" : ""
            }
            h = e + n + p + 4;
            this.K = h + c + (q - f) / 2;
            this.suggestions.element.style.height = q + h + "px";
            this.D = m;
            this.containerWidth = a;
            this.columns = l;
            this.C = 0;
            this.suggestions.element.scrollLeft = -0;
            cjb(this)
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.U();
        this.Y = a.Kf ? !1 : b.D;
        a.suggestions ? this.suggestionData = g.hn(a.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        djb(this);
        a.Kf ? this.title.update({
            title: g.mD("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: a.author
            })
        }) : this.title.update({
            title: "More videos on YouTube"
        })
    };
    g.k.scrollTo = function(a) {
        a = g.Hd(a, this.containerWidth - this.suggestionData.length * (this.D + this.B), 0);
        this.oa.start(this.C, a, 1E3);
        this.C = a;
        cjb(this);
        bjb(this, !0)
    };
    g.z(Y4, g.nY);
    Y4.prototype.show = function() {
        g.nY.prototype.show.call(this);
        fjb(this, this.api.ob().getPlayerSize())
    };
    Y4.prototype.resize = function(a) {
        g.nY.prototype.resize.call(this, a);
        this.j && (fjb(this, a), g.jp(this.element, "related-on-error-overlay-visible", !this.j.isHidden()))
    };
    Y4.prototype.B = function(a) {
        g.nY.prototype.B.call(this, a);
        var b = this.api.getVideoData();
        if (b.aE || b.playerErrorMessageRenderer)(a = b.aE) ? ijb(this, a) : b.playerErrorMessageRenderer && ijb(this, b.playerErrorMessageRenderer);
        else {
            var c;
            a.Vn && (b.zw ? gjb(b.zw) ? c = g.rx(b.zw) : c = g.oY(g.qx(b.zw)) : c = g.oY(a.Vn), this.Cd(c, "subreason"))
        }
    };
    g.z(jjb, g.T);
    g.k = jjb.prototype;
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = Tgb(),
            c = 96714;
        g.dR(a) ? (b = Ugb(), c = 216165, g.fp(this.element, "ytp-music-impression-link")) : g.hp(this.element, "ytp-music-impression-link");
        this.updateValue("logoSvg", b);
        this.api.hasVe(this.element) && this.api.destroyVe(this.element);
        this.api.createClientVe(this.element, this, c)
    };
    g.k.Lk = function() {
        this.api.getPlayerStateObject().isCued() || (this.hide(), this.api.logVisibility(this.element, !1))
    };
    g.k.kV = function() {
        var a = this.api.getVideoData(),
            b = this.api.U(),
            c = this.api.getVideoData().Kf,
            d = b.Dd,
            e = !b.Bd,
            f = this.Le.Pg();
        b = b.C;
        d || f || c || e || b || this.api.fd() || !a.videoId ? (this.hide(), this.api.logVisibility(this.element, !1)) : (a = kjb(this), this.updateValue("url", a), this.show())
    };
    g.k.onClick = function(a) {
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") && this.api.logClick(this.element);
        var b = kjb(this);
        g.DS(b, this.api, a);
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") || this.api.logClick(this.element)
    };
    g.k.show = function() {
        this.api.getPlayerStateObject().isCued() && (g.T.prototype.show.call(this), this.api.hasVe(this.element) && this.api.logVisibility(this.element, !0))
    };
    g.z(Z4, g.T);
    Z4.prototype.Lk = function() {
        var a = this.api.getPlayerStateObject();
        !this.api.Nh() || g.Z(a, 2) && g.BR(this.api) || g.Z(a, 64) ? (this.api.logVisibility(this.j, !1), this.api.logVisibility(this.forwardButton, !1), this.hide()) : (this.show(), this.api.logVisibility(this.j, !0), this.api.logVisibility(this.forwardButton, !0))
    };
    Z4.prototype.B = function() {
        this.api.seekBy(-10 * this.api.getPlaybackRate(), void 0, void 0, 83);
        this.api.logClick(this.j)
    };
    Z4.prototype.C = function() {
        this.api.seekBy(10 * this.api.getPlaybackRate(), void 0, void 0, 82);
        this.api.logClick(this.forwardButton)
    };
    g.z($4, g.T);
    $4.prototype.C = function() {
        var a = this.api.getPlayerStateObject();
        this.api.getVideoData().mutedAutoplay && (g.Z(a, 2) && !this.Fb ? (this.show(), this.j || (this.j = new g.lY(this.api), g.P(this, this.j), this.j.Ia(this.D, 0), this.j.show()), a = this.api.getVideoData(), this.updateValue("text", a.BW), g.jp(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.logVisibility(this.element, this.Fb), this.api.ud("onMutedAutoplayEnds")) : this.hide())
    };
    $4.prototype.onClick = function() {
        if (!this.B) {
            this.j && (this.j.xa(), this.j = null);
            g.jp(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var a = this.api.getVideoData(),
                b = this.api.getCurrentTime();
            Rgb(a);
            this.api.loadVideoById(a.videoId, b);
            this.api.oB();
            this.api.logClick(this.element);
            this.hide();
            this.B = !0
        }
    };
    $4.prototype.onMutedAutoplayStarts = function() {
        this.B = !1;
        this.j && (this.j.xa(), this.j = null)
    };
    g.z(a5, g.T);
    g.k = a5.prototype;
    g.k.onStateChange = function(a) {
        this.wd(a.state)
    };
    g.k.wd = function(a) {
        this.state !== a && (this.state = a);
        ljb(this)
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.U();
        a.C && g.fp(this.element, "ytp-no-hover");
        var b = this.api.getVideoData();
        b.videoId && !a.C ? (a = this.api.getVideoUrl(!0, !1, !1, !0), this.updateValue("url", a), this.j || (this.j = this.listen("click", this.onClick))) : this.j && (this.updateValue("url", null), this.Lc(this.j), this.j = null);
        a = Tgb();
        var c = 76758;
        g.dR(b) && (a = Ugb(), c = 216164);
        this.updateValue("logoSvg", a);
        this.api.hasVe(this.element) && this.api.destroyVe(this.element);
        this.api.createClientVe(this.element, this,
            c);
        ljb(this)
    };
    g.k.onClick = function(a) {
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") && this.api.logClick(this.element);
        var b = this.api.getVideoUrl(!g.zy(a), !1, !0, !0);
        if (this.api.L("web_player_log_click_before_generating_ve_conversion_params")) {
            var c = {};
            g.kR(this.api, "addEmbedsConversionTrackingParams", [c]);
            b = g.Si(b, c)
        }
        g.DS(b, this.api, a);
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") || this.api.logClick(this.element)
    };
    g.k.jc = function(a) {
        if ((a = a.width < 480) && !this.B || !a && this.B) {
            var b = new g.T(Tgb()),
                c = this.Ea("ytp-watermark");
            g.jp(c, "ytp-watermark-small", a);
            g.qe(c);
            b.Ia(c);
            this.B = a
        }
    };
    g.z(ojb, g.T);
    g.k = ojb.prototype;
    g.k.BN = function() {
        var a = this.api.getPlayerStateObject();
        !this.api.getVideoData().mutedAutoplay || g.Z(a, 2) ? this.hide() : this.Fb || (g.T.prototype.show.call(this), this.api.logVisibility(this.element, this.Fb))
    };
    g.k.l$ = function() {
        this.j && this.j.hide()
    };
    g.k.onAutoplayBlocked = function() {
        this.hide();
        Rgb(this.api.getVideoData())
    };
    g.k.onClick = function() {
        if (!this.B) {
            g.jp(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var a = this.api.getVideoData(),
                b = this.api.getCurrentTime();
            Rgb(a);
            this.api.loadVideoById(a.videoId, b);
            this.api.oB();
            this.api.logClick(this.element);
            this.api.ud("onMutedAutoplayEnds");
            this.B = !0
        }
    };
    g.k.onMutedAutoplayEnds = function() {
        this.watermark && (this.watermark.xa(), this.watermark = null)
    };
    g.z(b5, g.T);
    b5.prototype.hide = function() {
        g.hp(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.T.prototype.hide.call(this)
    };
    b5.prototype.G = function() {
        this.B = !0;
        g.hp(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.api.fd() && this.api.logVisibility(this.element, !1);
        this.expandButton.focus()
    };
    b5.prototype.K = function() {
        this.B = !1;
        g.fp(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.api.fd() && this.api.logVisibility(this.element, !0);
        this.focus()
    };
    b5.prototype.Sa = function() {
        var a = this.api.getPlayerStateObject();
        g.Z(a, 1) || g.Z(a, 16) || g.Z(a, 32) || (!g.Z(a, 4) || g.Z(a, 2) || g.Z(a, 1024) ? (this.B || this.api.logVisibility(this.element, !1), this.D.hide()) : this.j.suggestionData.length > 0 && (this.B || (g.fp(this.api.getRootNode(), "ytp-expand-pause-overlay"), g.e1(this.j), this.j.show(), this.api.logVisibility(this.element, !0)), this.D.show()))
    };
    g.z(c5, g.T);
    c5.prototype.show = function() {
        g.T.prototype.show.call(this);
        this.api.logVisibility(this.element, !0)
    };
    c5.prototype.xa = function() {
        d5(this);
        g.T.prototype.xa.call(this)
    };
    g.z(sjb, g.UX);
    g.k = sjb.prototype;
    g.k.yn = function() {
        return !1
    };
    g.k.create = function() {
        var a = this.J.U(),
            b = g.pR(this.J),
            c, d = (c = this.J.getVideoData()) == null ? void 0 : c.clientPlaybackNonce;
        d && g.Wz({
            clientPlaybackNonce: d
        });
        a.Xa && !a.disableOrganicUi && ujb(this);
        this.Z = new ojb(this.J);
        g.P(this, this.Z);
        g.IR(this.J, this.Z.element, 4);
        this.qa = new $4(this.J);
        g.P(this, this.qa);
        g.IR(this.J, this.qa.element, 4);
        a.Dd && (this.watermark = new a5(this.J), g.P(this, this.watermark), g.IR(this.J, this.watermark.element, 8));
        b && !a.disableOrganicUi && (this.K = new jjb(this.J, b), g.P(this, this.K), g.IR(this.J,
            this.K.element, 8), g.qR(this.J.app) && (this.onMutedAutoplayStarts(), this.K.hide()));
        a.B && !a.disableOrganicUi && (this.oa = new Z4(this.J), g.P(this, this.oa), g.IR(this.J, this.oa.element, 4));
        this.j.T(this.J, "appresize", this.jc);
        this.j.T(this.J, "presentingplayerstatechange", this.Lk);
        this.j.T(this.J, "videodatachange", this.onVideoDataChange);
        this.j.T(this.J, "videoplayerreset", this.onReset);
        this.j.T(this.J, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
        this.j.T(this.J, "onAdStart", this.onAdStart);
        this.j.T(this.J,
            "onAdComplete", this.onAdComplete);
        this.j.T(this.J, "onAdSkip", this.onAdSkip);
        this.j.T(this.J, "onAdStateChange", this.onAdStateChange);
        if (this.N = g.is(g.SO(a))) this.countdownTimer = new c5(this.J), g.P(this, this.countdownTimer), g.IR(this.J, this.countdownTimer.element, 4), this.countdownTimer.hide(), this.j.T(this.J, g.bD("embeds"), this.onCueRangeEnter), this.j.T(this.J, g.cD("embeds"), this.onCueRangeExit);
        this.Dc(this.J.getPlayerStateObject());
        this.player.Dg("embed");
        var e, f;
        ((e = this.J.U().getWebPlayerContextConfig()) ==
            null ? 0 : (f = e.embedsHostFlags) == null ? 0 : f.allowOverridingVisitorDataPlayerVars) && (a = g.Tq("IDENTITY_MEMENTO")) && this.J.nf("onMementoChange", a)
    };
    g.k.onCueRangeEnter = function(a) {
        a.getId() === "countdown timer" && this.countdownTimer && (this.countdownTimer.show(), qjb(this.countdownTimer))
    };
    g.k.onCueRangeExit = function(a) {
        a.getId() === "countdown timer" && this.countdownTimer && (d5(this.countdownTimer), this.countdownTimer.hide())
    };
    g.k.jc = function() {
        var a = this.J.ob().getPlayerSize();
        this.yg && this.yg.resize(a)
    };
    g.k.onReset = function() {
        rjb(this)
    };
    g.k.Lk = function(a) {
        this.Dc(a.state)
    };
    g.k.Dc = function(a) {
        g.Z(a, 128) ? (this.yg || (this.yg = new Y4(this.J), g.P(this, this.yg), g.IR(this.J, this.yg.element, 4)), this.yg.B(a.fh), this.yg.show(), g.fp(this.J.getRootNode(), "ytp-embed-error")) : this.yg && (this.yg.dispose(), this.yg = null, g.hp(this.J.getRootNode(), "ytp-embed-error"));
        if (this.countdownTimer && this.countdownTimer.j)
            if (g.Z(a, 64)) this.countdownTimer.hide(), d5(this.countdownTimer);
            else if (a.isPaused()) {
            var b = this.countdownTimer;
            b.B || (b.B = !0, b.G = (0, g.S)())
        } else a.isPlaying() && this.countdownTimer.B &&
            (b = this.countdownTimer, b.B && (b.D += (0, g.S)() - b.G, b.B = !1, pjb(b)));
        tjb(this, a)
    };
    g.k.onMutedAutoplayStarts = function() {
        this.J.getVideoData().mutedAutoplay && this.Z && g.jp(this.J.getRootNode(), "ytp-muted-autoplay", !0)
    };
    g.k.onVideoDataChange = function(a, b) {
        var c = this.hG !== b.videoId;
        a = !c && a === "dataloaded";
        var d = {
            isShortsModeEnabled: !!this.J.fd()
        };
        g.it("embedsVideoDataDidChange", {
            clientPlaybackNonce: b.clientPlaybackNonce,
            isReload: a,
            runtimeEnabledFeatures: d
        });
        c && (this.hG = b.videoId, this.countdownTimer && (this.countdownTimer.show(), this.countdownTimer.hide()), this.N && (this.J.qf("embeds"), b.isAd() || b.limitedPlaybackDurationInSeconds < 5 || g.ER(this.J) || (b = Math.max((b.startSeconds + b.limitedPlaybackDurationInSeconds - 5) * 1E3, 0),
            b = new g.$C(b, b + 5E3, {
                id: "countdown timer",
                namespace: "embeds"
            }), this.J.jf([b]))), this.J.U().Xa && !this.J.U().disableOrganicUi && (rjb(this), ujb(this)));
        this.J.U().C && this.C && this.C.detach()
    };
    g.k.onAdStart = function() {
        e5(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED")
    };
    g.k.onAdComplete = function() {
        e5(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")
    };
    g.k.onAdSkip = function() {
        e5(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")
    };
    g.k.onAdStateChange = function(a) {
        a === 2 && e5(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED")
    };
    g.TX("embed", sjb);
})(_yt_player);