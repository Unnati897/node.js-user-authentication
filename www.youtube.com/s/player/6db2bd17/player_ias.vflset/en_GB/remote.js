(function(g) {
    var window = this;
    'use strict';
    var d7 = function(a) {
            g.tk(a, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ g.Ya()).toString(36));
            return a
        },
        e7 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.cha(a.D, b, c)
        },
        Pqb = function(a) {
            if (a instanceof g.cn) return a;
            if (typeof a.Am == "function") return a.Am(!1);
            if (g.Qa(a)) {
                var b = 0,
                    c = new g.cn;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.q1;
                        if (b in a) return g.dn(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        Qqb = function(a, b, c) {
            if (g.Qa(a)) g.jc(a, b, c);
            else
                for (a = Pqb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        Rqb = function(a, b) {
            var c = [];
            Qqb(b, function(d) {
                try {
                    var e = g.Cp.prototype.B.call(this, d, !0)
                } catch (f) {
                    if (f == "Storage: Invalid value was encountered") return;
                    throw f;
                }
                e === void 0 ? c.push(d) : g.ema(e) && c.push(d)
            }, a);
            return c
        },
        Sqb = function(a, b) {
            Rqb(a, b).forEach(function(c) {
                g.Cp.prototype.remove.call(this, c)
            }, a)
        },
        Tqb = function(a) {
            if (a.oa) {
                if (a.oa.locationOverrideToken) return {
                    locationOverrideToken: a.oa.locationOverrideToken
                };
                if (a.oa.latitudeE7 != null && a.oa.longitudeE7 != null) return {
                    latitudeE7: a.oa.latitudeE7,
                    longitudeE7: a.oa.longitudeE7
                }
            }
            return null
        },
        Uqb = function(a, b) {
            g.Ub(a, b) || a.push(b)
        },
        Vqb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Wqb = function(a, b) {
            return g.Fc(a, b)
        },
        Xqb = function(a) {
            try {
                return g.Ka.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        f7 = function(a) {
            if (g.Ka.JSON) try {
                return g.Ka.JSON.parse(a)
            } catch (b) {}
            return Xqb(a)
        },
        Yqb = function(a) {
            if (a.Rm && typeof a.Rm == "function") return a.Rm();
            if (typeof Map !== "undefined" && a instanceof Map || typeof Set !== "undefined" && a instanceof Set) return Array.from(a.values());
            if (typeof a === "string") return a.split("");
            if (g.Qa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return g.Cc(a)
        },
        Zqb = function(a) {
            if (a.po && typeof a.po == "function") return a.po();
            if (!a.Rm || typeof a.Rm != "function") {
                if (typeof Map !== "undefined" && a instanceof Map) return Array.from(a.keys());
                if (!(typeof Set !== "undefined" && a instanceof Set)) {
                    if (g.Qa(a) || typeof a === "string") {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return g.Dc(a)
                }
            }
        },
        $qb = function(a, b) {
            if (a.forEach && typeof a.forEach == "function") a.forEach(b, void 0);
            else if (g.Qa(a) || typeof a === "string") Array.prototype.forEach.call(a, b, void 0);
            else
                for (var c = Zqb(a), d = Yqb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        },
        arb = function(a, b, c, d) {
            var e = new g.lk(null);
            a && g.mk(e, a);
            b && g.nk(e, b);
            c && g.ok(e, c);
            d && (e.B = d);
            return e
        },
        brb = function() {
            this.j = g7();
            this.j.jk("/client_streamz/youtube/living_room/mdx/channel/opened", g.jb("channel_type"))
        },
        crb = function(a, b) {
            a.j.tm("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        drb = function() {
            this.j = g7();
            this.j.jk("/client_streamz/youtube/living_room/mdx/channel/closed", g.jb("channel_type"))
        },
        erb = function(a, b) {
            a.j.tm("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        frb = function() {
            this.j = g7();
            this.j.jk("/client_streamz/youtube/living_room/mdx/channel/message_received", g.jb("channel_type"))
        },
        grb = function(a, b) {
            a.j.tm("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        hrb = function() {
            this.j = g7();
            this.j.jk("/client_streamz/youtube/living_room/mdx/channel/error", g.jb("channel_type"))
        },
        irb = function(a, b) {
            a.j.tm("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        jrb = function() {
            this.j = g7();
            this.j.jk("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        krb = function() {
            this.j = g7();
            this.j.jk("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        lrb = function(a, b) {
            return new g.bp(a, b)
        },
        h7 = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        i7 = function(a, b) {
            this.B = {};
            this.j = [];
            this.Lv = this.size = 0;
            var c = arguments.length;
            if (c > 1) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a)
                if (a instanceof i7)
                    for (c = a.po(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
                else
                    for (d in a) this.set(d, a[d])
        },
        j7 = function(a) {
            if (a.size != a.j.length) {
                for (var b = 0, c = 0; b < a.j.length;) {
                    var d = a.j[b];
                    h7(a.B, d) && (a.j[c++] = d);
                    b++
                }
                a.j.length = c
            }
            if (a.size != a.j.length) {
                var e = {};
                for (c = b = 0; b < a.j.length;) d = a.j[b], h7(e, d) || (a.j[c++] = d, e[d] = 1), b++;
                a.j.length = c
            }
        },
        prb = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new i7;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
                this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.ownerObfuscatedGaiaId = a.ownerObfuscatedGaiaId || "", this.theme = a.theme || "u", mrb(this, a.capabilities || ""), nrb(this, a.compatibleSenderThemes || ""), orb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType ||
                "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        mrb = function(a, b) {
            a.capabilities.clear();
            g.hn(b.split(","), g.Xa(Wqb, qrb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        nrb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.hn(b.split(","), g.Xa(Wqb, rrb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        orb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        k7 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        l7 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        srb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        trb = function(a) {
            return new k7(a)
        },
        urb = function(a) {
            return Array.isArray(a) ? g.zl(a, trb) : []
        },
        m7 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        vrb = function(a) {
            return Array.isArray(a) ? "[" + g.zl(a, m7).join(",") + "]" : "null"
        },
        wrb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = Math.random() * 16 | 0;
                    return (a == "x" ? b : b & 3 | 8).toString(16)
                })
        },
        xrb = function(a) {
            return g.zl(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        yrb = function(a, b) {
            return g.Sb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        n7 = function(a, b) {
            return g.Sb(a, function(c) {
                return l7(c, b)
            })
        },
        zrb = function() {
            var a = (0, g.Es)();
            a && Sqb(a, a.j.Am(!0))
        },
        o7 = function() {
            var a = g.Hs("yt-remote-connected-devices") || [];
            g.gc(a);
            return a
        },
        Arb = function(a) {
            if (a.length == 0) return [];
            var b = a[0].indexOf("#"),
                c = b == -1 ? a[0] : a[0].substring(0, b);
            return g.zl(a, function(d, e) {
                return e == 0 ? d : d.substring(c.length)
            })
        },
        Brb = function(a) {
            g.Gs("yt-remote-connected-devices", a, 86400)
        },
        p7 = function() {
            if (Crb) return Crb;
            var a = g.Hs("yt-remote-device-id");
            a || (a = wrb(), g.Gs("yt-remote-device-id", a, 31536E3));
            for (var b = o7(), c = 1, d = a; g.Ub(b, d);) c++, d = a + "#" + c;
            return Crb = d
        },
        Drb = function() {
            var a = o7(),
                b = p7();
            g.Js() && g.ic(a, b);
            a = Arb(a);
            if (a.length == 0) try {
                g.Jr("remote_sid")
            } catch (c) {} else try {
                g.Hr("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        Erb = function() {
            return g.Hs("yt-remote-session-browser-channel")
        },
        Frb = function() {
            return g.Hs("yt-remote-local-screens") || []
        },
        Grb = function() {
            g.Gs("yt-remote-lounge-token-expiration", !0, 86400)
        },
        Hrb = function(a) {
            a.length > 5 && (a = a.slice(a.length - 5));
            var b = g.zl(Frb(), function(d) {
                    return d.loungeToken
                }),
                c = g.zl(a, function(d) {
                    return d.loungeToken
                });
            g.Al(c, function(d) {
                return !g.Ub(b, d)
            }) && Grb();
            g.Gs("yt-remote-local-screens", a, 31536E3)
        },
        q7 = function(a) {
            a || (g.Is("yt-remote-session-screen-id"), g.Is("yt-remote-session-video-id"));
            Drb();
            a = o7();
            g.Wb(a, p7());
            Brb(a)
        },
        Irb = function() {
            if (!r7) {
                var a = g.Ip();
                a && (r7 = new g.zp(a))
            }
        },
        Jrb = function() {
            Irb();
            return r7 ? !!r7.get("yt-remote-use-staging-server") : !1
        },
        s7 = function(a, b) {
            g.fv[a] = !0;
            var c = g.dv();
            c && c.publish.apply(c, arguments);
            g.fv[a] = !1
        },
        Krb = function() {},
        g7 = function() {
            if (!t7) {
                t7 = new g.Te(new Krb);
                var a = g.tr("client_streamz_web_flush_count", -1);
                a !== -1 && (t7.C = a)
            }
            return t7
        },
        Lrb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        Mrb = function(a) {
            return !!document.currentScript && (document.currentScript.src.indexOf("?" + a) != -1 || document.currentScript.src.indexOf("&" + a) != -1)
        },
        Nrb = function() {
            return typeof window.__onGCastApiAvailable == "function" ? window.__onGCastApiAvailable : null
        },
        u7 = function(a) {
            a.length ? Orb(a.shift(), function() {
                u7(a)
            }) : Prb()
        },
        Qrb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        Orb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Td(d, g.wq(a));
            (document.head || document.documentElement).appendChild(d)
        },
        Rrb = function() {
            var a = Lrb(),
                b = [];
            if (a > 1) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        Prb = function() {
            var a = Nrb();
            a && a(!1, "No cast extension found")
        },
        Trb = function() {
            if (Srb) {
                var a = 2,
                    b = Nrb(),
                    c = function() {
                        a--;
                        a == 0 && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                Orb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", Prb, c)
            }
        },
        Urb = function() {
            Trb();
            var a = Rrb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            u7(a)
        },
        Wrb = function() {
            Trb();
            var a = Rrb();
            a.push.apply(a, g.x(Vrb.map(Qrb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            u7(a)
        },
        v7 = function(a, b, c) {
            g.O.call(this);
            this.K = c != null ? (0, g.Wa)(a, c) : a;
            this.ej = b;
            this.G = (0, g.Wa)(this.n5, this);
            this.j = !1;
            this.B = 0;
            this.C = this.qd = null;
            this.D = []
        },
        w7 = function(a, b, c) {
            g.O.call(this);
            this.D = c != null ? a.bind(c) : a;
            this.ej = b;
            this.C = null;
            this.j = !1;
            this.B = 0;
            this.qd = null
        },
        Xrb = function(a) {
            a.qd = g.Re(function() {
                a.qd = null;
                a.j && !a.B && (a.j = !1, Xrb(a))
            }, a.ej);
            var b = a.C;
            a.C = null;
            a.D.apply(null, b)
        },
        x7 = function() {},
        Yrb = function() {
            g.ub.call(this, "p")
        },
        Zrb = function() {
            g.ub.call(this, "o")
        },
        asb = function() {
            return $rb = $rb || new g.ad
        },
        bsb = function(a) {
            g.ub.call(this, "serverreachability", a)
        },
        y7 = function(a) {
            var b = asb();
            b.dispatchEvent(new bsb(b, a))
        },
        csb = function(a) {
            g.ub.call(this, "statevent", a)
        },
        z7 = function(a) {
            var b = asb();
            b.dispatchEvent(new csb(b, a))
        },
        dsb = function(a, b, c, d) {
            g.ub.call(this, "timingevent", a);
            this.size = b;
            this.rtt = c;
            this.retries = d
        },
        A7 = function(a, b) {
            if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
            return g.Ka.setTimeout(function() {
                a()
            }, b)
        },
        B7 = function() {},
        C7 = function(a, b, c, d) {
            this.C = a;
            this.D = b;
            this.Sb = c;
            this.Nb = d || 1;
            this.xb = new g.yk(this);
            this.eb = 45E3;
            this.Ma = null;
            this.K = !1;
            this.Y = this.Xa = this.Z = this.Qa = this.Ba = this.qb = this.oa = null;
            this.qa = [];
            this.j = null;
            this.N = 0;
            this.G = this.Da = null;
            this.Jb = -1;
            this.Ka = !1;
            this.Wa = 0;
            this.Va = null;
            this.Kb = this.Ua = this.Bb = this.Fa = !1;
            this.B = new esb
        },
        esb = function() {
            this.C = null;
            this.j = "";
            this.B = !1
        },
        gsb = function(a, b, c) {
            a.Qa = 1;
            a.Z = d7(b.clone());
            a.Y = c;
            a.Fa = !0;
            fsb(a, null)
        },
        fsb = function(a, b) {
            a.Ba = Date.now();
            D7(a);
            a.Xa = a.Z.clone();
            e7(a.Xa, "t", a.Nb);
            a.N = 0;
            var c = a.C.Qa;
            a.B = new esb;
            a.j = hsb(a.C, c ? b : null, !a.Y);
            a.Wa > 0 && (a.Va = new w7((0, g.Wa)(a.sV, a, a.j), a.Wa));
            a.xb.listen(a.j, "readystatechange", a.p5);
            b = a.Ma ? g.Kc(a.Ma) : {};
            a.Y ? (a.Da || (a.Da = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Xa, a.Da, a.Y, b)) : (a.Da = "GET", a.j.send(a.Xa, a.Da, null, b));
            y7(1)
        },
        jsb = function(a) {
            if (!isb(a)) return g.aj(a.j);
            var b = g.bj(a.j);
            if (b === "") return "";
            var c = "",
                d = b.length,
                e = g.Zi(a.j) == 4;
            if (!a.B.C) {
                if (typeof TextDecoder === "undefined") return E7(a), F7(a), "";
                a.B.C = new g.Ka.TextDecoder
            }
            for (var f = 0; f < d; f++) a.B.B = !0, c += a.B.C.decode(b[f], {
                stream: !(e && f == d - 1)
            });
            b.length = 0;
            a.B.j += c;
            a.N = 0;
            return a.B.j
        },
        isb = function(a) {
            return a.j ? a.Da == "GET" && a.Qa != 2 && a.C.gf : !1
        },
        msb = function(a, b) {
            var c = a.N,
                d = b.indexOf("\n", c);
            if (d == -1) return ksb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return lsb;
            d += 1;
            if (d + c > b.length) return ksb;
            b = b.slice(d, d + c);
            a.N = d + c;
            return b
        },
        D7 = function(a) {
            a.qb = Date.now() + a.eb;
            nsb(a, a.eb)
        },
        nsb = function(a, b) {
            if (a.oa != null) throw Error("WatchDog timer not null");
            a.oa = A7((0, g.Wa)(a.o5, a), b)
        },
        osb = function(a) {
            a.oa && (g.Ka.clearTimeout(a.oa), a.oa = null)
        },
        F7 = function(a) {
            a.C.Og() || a.Ka || psb(a.C, a)
        },
        E7 = function(a) {
            osb(a);
            g.pb(a.Va);
            a.Va = null;
            a.xb.removeAll();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        xsb = function(a, b) {
            try {
                var c = a.C;
                if (c.Wh != 0 && (c.j == a || qsb(c.B, a)))
                    if (!a.Ua && qsb(c.B, a) && c.Wh == 3) {
                        try {
                            var d = c.hf.j.parse(b)
                        } catch (y) {
                            d = null
                        }
                        if (Array.isArray(d) && d.length == 3) {
                            var e = d;
                            if (e[0] == 0) a: {
                                if (!c.Z) {
                                    if (c.j)
                                        if (c.j.Ba + 3E3 < a.Ba) G7(c), H7(c);
                                        else break a;
                                    rsb(c);
                                    z7(18)
                                }
                            }
                            else c.Od = e[1], 0 < c.Od - c.Va && e[2] < 37500 && c.Ua && c.qa == 0 && !c.oa && (c.oa = A7((0, g.Wa)(c.q5, c), 6E3));
                            if (ssb(c.B) <= 1 && c.Pc) {
                                try {
                                    c.Pc()
                                } catch (y) {}
                                c.Pc = void 0
                            }
                        } else I7(c, 11)
                    } else if ((a.Ua || c.j == a) && G7(c), !g.wb(b))
                    for (e = c.hf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Va = f[0];
                        f = f[1];
                        if (c.Wh == 2)
                            if (f[0] == "c") {
                                c.D = f[1];
                                c.Nb = f[2];
                                var h = f[3];
                                h != null && (c.tV = h);
                                var l = f[5];
                                l != null && typeof l === "number" && l > 0 && (c.Wa = 1.5 * l);
                                d = c;
                                var m = a.zQ();
                                if (m) {
                                    var n = g.cj(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.zb(n, "spdy") || g.zb(n, "quic") || g.zb(n, "h2")) && (p.D = p.G, p.j = new Set, p.B && (tsb(p, p.B), p.B = null))
                                    }
                                    if (d.Fa) {
                                        var q = g.cj(m, "X-HTTP-Session-Id");
                                        q && (d.ge = q, g.tk(d.Ma, d.Fa, q))
                                    }
                                }
                                c.Wh = 3;
                                c.G && c.G.zV();
                                c.wc && (c.Uc = Date.now() - a.Ba);
                                d = c;
                                var r = a;
                                d.Bd = usb(d, d.Qa ? d.Nb : null, d.Sb);
                                if (r.Ua) {
                                    vsb(d.B,
                                        r);
                                    var t = r,
                                        u = d.Wa;
                                    u && t.setTimeout(u);
                                    t.oa && (osb(t), D7(t));
                                    d.j = r
                                } else wsb(d);
                                c.C.length > 0 && J7(c)
                            } else f[0] != "stop" && f[0] != "close" || I7(c, 7);
                        else c.Wh == 3 && (f[0] == "stop" || f[0] == "close" ? f[0] == "stop" ? I7(c, 7) : c.disconnect() : f[0] != "noop" && c.G && c.G.yV(f), c.qa = 0)
                    }
                y7(4)
            } catch (y) {}
        },
        ysb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        zsb = function(a) {
            this.G = a || 10;
            g.Ka.PerformanceNavigationTiming ? (a = g.Ka.performance.getEntriesByType("navigation"), a = a.length > 0 && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(g.Ka.chrome && g.Ka.chrome.loadTimes && g.Ka.chrome.loadTimes() && g.Ka.chrome.loadTimes().wasFetchedViaSpdy);
            this.D = a ? this.G : 1;
            this.j = null;
            this.D > 1 && (this.j = new Set);
            this.B = null;
            this.C = []
        },
        Asb = function(a) {
            return a.B ? !0 : a.j ? a.j.size >= a.D : !1
        },
        ssb = function(a) {
            return a.B ? 1 : a.j ? a.j.size : 0
        },
        qsb = function(a, b) {
            return a.B ? a.B == b : a.j ? a.j.has(b) : !1
        },
        tsb =
        function(a, b) {
            a.j ? a.j.add(b) : a.B = b
        },
        vsb = function(a, b) {
            a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        Bsb = function(a) {
            if (a.B != null) return a.C.concat(a.B.qa);
            if (a.j != null && a.j.size !== 0) {
                var b = a.C;
                a = g.w(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.qa);
                return b
            }
            return g.Zb(a.C)
        },
        Csb = function(a, b) {
            var c = new B7;
            if (g.Ka.Image) {
                var d = new Image;
                d.onload = g.Xa(K7, c, "TestLoadImage: loaded", !0, b, d);
                d.onerror = g.Xa(K7, c, "TestLoadImage: error", !1, b, d);
                d.onabort = g.Xa(K7, c, "TestLoadImage: abort", !1, b, d);
                d.ontimeout = g.Xa(K7, c, "TestLoadImage: timeout", !1, b, d);
                g.Ka.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        Dsb = function(a, b) {
            var c = new B7,
                d = new AbortController,
                e = setTimeout(function() {
                    d.abort();
                    K7(c, "TestPingServer: timeout", !1, b)
                }, 1E4);
            fetch(a, {
                signal: d.signal
            }).then(function(f) {
                clearTimeout(e);
                f.ok ? K7(c, "TestPingServer: ok", !0, b) : K7(c, "TestPingServer: server error", !1, b)
            }).catch(function() {
                clearTimeout(e);
                K7(c, "TestPingServer: error", !1, b)
            })
        },
        K7 = function(a, b, c, d, e) {
            try {
                e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c)
            } catch (f) {}
        },
        Esb = function() {
            this.j = new x7
        },
        Fsb = function(a, b, c) {
            var d = c || "";
            try {
                $qb(a, function(e, f) {
                    var h = e;
                    g.Ra(e) && (h = g.Ci(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        L7 = function(a, b, c) {
            return c && c.r$ ? c.r$[a] || b : b
        },
        Gsb = function(a) {
            this.C = [];
            this.Nb = this.Bd = this.Ma = this.Sb = this.j = this.ge = this.Fa = this.Ka = this.N = this.Jb = this.Y = null;
            this.Ch = this.Xa = 0;
            this.xf = L7("failFast", !1, a);
            this.Ua = this.oa = this.Z = this.K = this.G = null;
            this.vc = !0;
            this.Od = this.Va = -1;
            this.Kb = this.qa = this.Ba = 0;
            this.wf = L7("baseRetryDelayMs", 5E3, a);
            this.Vf = L7("retryDelaySeedMs", 1E4, a);
            this.yf = L7("forwardChannelMaxRetries", 2, a);
            this.Dd = L7("forwardChannelRequestTimeoutMs", 2E4, a);
            this.Ve = a && a.pqa || void 0;
            this.Xf = a && a.hpa || void 0;
            this.gf = a && a.nqa || !1;
            this.Wa = void 0;
            this.Qa = a && a.Rea ||
                !1;
            this.D = "";
            this.B = new zsb(a && a.jna);
            this.hf = new Esb;
            this.xb = a && a.Ana || !1;
            this.qb = a && a.pna || !1;
            this.xb && this.qb && (this.qb = !1);
            this.Wf = a && a.Zma || !1;
            a && a.Dna && (this.vc = !1);
            this.wc = !this.xb && this.vc && a && a.nna || !1;
            this.Nd = void 0;
            a && a.E_ && a.E_ > 0 && (this.Nd = a.E_);
            this.Pc = void 0;
            this.Uc = 0;
            this.eb = !1;
            this.Bb = this.Da = null
        },
        H7 = function(a) {
            a.j && (Hsb(a), a.j.cancel(), a.j = null)
        },
        Isb = function(a) {
            H7(a);
            a.Z && (g.Ka.clearTimeout(a.Z), a.Z = null);
            G7(a);
            a.B.cancel();
            a.K && (typeof a.K === "number" && g.Ka.clearTimeout(a.K), a.K = null)
        },
        J7 = function(a) {
            Asb(a.B) || a.K || (a.K = !0, g.Fe(a.vV, a), a.Ba = 0)
        },
        Ksb = function(a, b) {
            if (ssb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
            if (a.K) return a.C = b.qa.concat(a.C), !0;
            if (a.Wh == 1 || a.Wh == 2 || a.Ba >= (a.xf ? 0 : a.yf)) return !1;
            a.K = A7((0, g.Wa)(a.vV, a, b), Jsb(a, a.Ba));
            a.Ba++;
            return !0
        },
        Msb = function(a, b) {
            var c;
            b ? c = b.Sb : c = a.Xa++;
            var d = a.Ma.clone();
            g.tk(d, "SID", a.D);
            g.tk(d, "RID", c);
            g.tk(d, "AID", a.Va);
            M7(a, d);
            a.N && a.Y && g.xk(d, a.N, a.Y);
            c = new C7(a, a.D, c, a.Ba + 1);
            a.N === null && (c.Ma = a.Y);
            b && (a.C = b.qa.concat(a.C));
            b = Lsb(a, c, 1E3);
            c.setTimeout(Math.round(a.Dd * .5) + Math.round(a.Dd * .5 * Math.random()));
            tsb(a.B, c);
            gsb(c, d, b)
        },
        M7 = function(a, b) {
            a.Ka && g.xc(a.Ka, function(c, d) {
                g.tk(b, d, c)
            });
            a.G && $qb({}, function(c, d) {
                g.tk(b, d, c)
            })
        },
        Lsb = function(a, b, c) {
            c = Math.min(a.C.length, c);
            var d = a.G ? (0, g.Wa)(a.G.r5, a.G, a) : null;
            a: {
                for (var e = a.C, f = -1;;) {
                    var h = ["count=" + c];
                    f == -1 ? c > 0 ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                    for (var l = !0, m = 0; m < c; m++) {
                        var n = e[m].j,
                            p = e[m].map;
                        n -= f;
                        if (n < 0) f = Math.max(0, e[m].j - 100), l = !1;
                        else try {
                            Fsb(p, h, "req" + n + "_")
                        } catch (q) {
                            d && d(p)
                        }
                    }
                    if (l) {
                        d = h.join("&");
                        break a
                    }
                }
                d = void 0
            }
            a = a.C.splice(0, c);
            b.qa = a;
            return d
        },
        wsb = function(a) {
            a.j || a.Z || (a.Kb = 1, g.Fe(a.uV, a), a.qa = 0)
        },
        rsb = function(a) {
            if (a.j || a.Z || a.qa >= 3) return !1;
            a.Kb++;
            a.Z = A7((0, g.Wa)(a.uV, a), Jsb(a, a.qa));
            a.qa++;
            return !0
        },
        Hsb = function(a) {
            a.Da != null && (g.Ka.clearTimeout(a.Da), a.Da = null)
        },
        Nsb = function(a) {
            a.j = new C7(a, a.D, "rpc", a.Kb);
            a.N === null && (a.j.Ma = a.Y);
            a.j.Wa = 0;
            var b = a.Bd.clone();
            g.tk(b, "RID", "rpc");
            g.tk(b, "SID", a.D);
            g.tk(b, "AID", a.Va);
            g.tk(b, "CI", a.Ua ? "0" : "1");
            !a.Ua && a.Nd && g.tk(b, "TO", a.Nd);
            g.tk(b, "TYPE", "xmlhttp");
            M7(a, b);
            a.N && a.Y && g.xk(b, a.N, a.Y);
            a.Wa && a.j.setTimeout(a.Wa);
            var c = a.j;
            a = a.Nb;
            c.Qa = 1;
            c.Z = d7(b.clone());
            c.Y = null;
            c.Fa = !0;
            fsb(c, a)
        },
        G7 = function(a) {
            a.oa != null && (g.Ka.clearTimeout(a.oa), a.oa = null)
        },
        psb = function(a, b) {
            var c = null;
            if (a.j == b) {
                G7(a);
                Hsb(a);
                a.j = null;
                var d = 2
            } else if (qsb(a.B, b)) c = b.qa, vsb(a.B, b), d = 1;
            else return;
            if (a.Wh != 0)
                if (b.K)
                    if (d == 1) {
                        c = b.Y ? b.Y.length : 0;
                        b = Date.now() - b.Ba;
                        var e = a.Ba;
                        d = asb();
                        d.dispatchEvent(new dsb(d, c, b, e));
                        J7(a)
                    } else wsb(a);
            else {
                var f = b.Jb;
                e = b.getLastError();
                if (e == 3 || e == 0 && f > 0 || !(d == 1 && Ksb(a, b) || d == 2 && rsb(a))) switch (c && c.length > 0 && (b = a.B, b.C = b.C.concat(c)), e) {
                    case 1:
                        I7(a, 5);
                        break;
                    case 4:
                        I7(a, 10);
                        break;
                    case 3:
                        I7(a, 6);
                        break;
                    default:
                        I7(a, 2)
                }
            }
        },
        Jsb = function(a, b) {
            var c = a.wf + Math.floor(Math.random() *
                a.Vf);
            a.isActive() || (c *= 2);
            return c * b
        },
        I7 = function(a, b) {
            if (b == 2) {
                var c = (0, g.Wa)(a.Yea, a),
                    d = a.Xf,
                    e = !d;
                d = new g.lk(d || "//www.google.com/images/cleardot.gif");
                g.Ka.location && g.Ka.location.protocol == "http" || g.mk(d, "https");
                d7(d);
                e ? Csb(d.toString(), c) : Dsb(d.toString(), c)
            } else z7(2);
            a.Wh = 0;
            a.G && a.G.xV(b);
            Osb(a);
            Isb(a)
        },
        Osb = function(a) {
            a.Wh = 0;
            a.Bb = [];
            if (a.G) {
                var b = Bsb(a.B);
                if (b.length != 0 || a.C.length != 0) g.$b(a.Bb, b), g.$b(a.Bb, a.C), a.B.C.length = 0, g.Zb(a.C), a.C.length = 0;
                a.G.wV()
            }
        },
        Psb = function(a) {
            if (a.Wh == 0) return a.Bb;
            var b = [];
            g.$b(b, Bsb(a.B));
            g.$b(b, a.C);
            return b
        },
        usb = function(a, b, c) {
            var d = g.uk(c);
            d.j != "" ? (b && g.nk(d, b + "." + d.j), g.ok(d, d.C)) : (d = g.Ka.location, d = arb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Fa;
            c = a.ge;
            b && c && g.tk(d, b, c);
            g.tk(d, "VER", a.tV);
            M7(a, d);
            return d
        },
        hsb = function(a, b, c) {
            if (b && !a.Qa) throw Error("Can't create secondary domain capable XhrIo object.");
            b = a.gf && !a.Ve ? new g.Wi(new g.hk({
                W2: c
            })) : new g.Wi(a.Ve);
            b.K = a.Qa;
            return b
        },
        Qsb = function() {},
        Rsb = function() {},
        O7 = function(a, b) {
            g.ad.call(this);
            this.j = new Gsb(b);
            this.G = a;
            this.B = b && b.iaa || null;
            a = b && b.haa || null;
            b && b.hna && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.Y = a;
            a = b && b.Joa || null;
            b && b.P_ && (a ? a["X-WebChannel-Content-Type"] = b.P_ : a = {
                "X-WebChannel-Content-Type": b.P_
            });
            b && b.KX && (a ? a["X-WebChannel-Client-Profile"] = b.KX : a = {
                "X-WebChannel-Client-Profile": b.KX
            });
            this.j.Jb = a;
            (a = b && b.Ioa) && !g.wb(a) && (this.j.N = a);
            this.K = b && b.Rea || !1;
            this.D = b && b.Ipa || !1;
            (b = b && b.o$) && !g.wb(b) && (this.j.Fa = b, g.Ec(this.B, b) && (a =
                this.B, b in a && delete a[b]));
            this.C = new N7(this)
        },
        Ssb = function(a) {
            Yrb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.Bc(b)) ? g.Ic(b, this.j) : b : this.data = a
        },
        Tsb = function(a) {
            Zrb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        N7 = function(a) {
            this.j = a
        },
        Usb = function(a, b) {
            this.B = a;
            this.j = b
        },
        Vsb = function(a) {
            return Psb(a.j).map(function(b) {
                var c = a.B;
                b = b.map;
                "__data__" in b ? (b = b.__data__, c = c.D ? Xqb(b) : b) : c = b;
                return c
            })
        },
        P7 = function(a, b) {
            if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
            return g.Ka.setTimeout(function() {
                a()
            }, b)
        },
        R7 = function(a) {
            Q7.dispatchEvent(new Wsb(Q7, a))
        },
        Wsb = function(a) {
            g.ub.call(this, "statevent", a)
        },
        S7 = function(a, b, c, d) {
            this.j = a;
            this.D = b;
            this.N = c;
            this.K = d || 1;
            this.B = 45E3;
            this.C = new g.yk(this);
            this.G = new g.Oe;
            this.G.setInterval(250)
        },
        Ysb = function(a, b, c) {
            a.CI = 1;
            a.rD = d7(b.clone());
            a.cw = c;
            a.Fa = !0;
            Xsb(a, null)
        },
        Zsb = function(a, b, c, d, e) {
            a.CI = 1;
            a.rD = d7(b.clone());
            a.cw = null;
            a.Fa = c;
            e && (a.s2 = !1);
            Xsb(a, d)
        },
        Xsb = function(a, b) {
            a.uD = Date.now();
            $sb(a);
            a.BI = a.rD.clone();
            e7(a.BI, "t", a.K);
            a.FI = 0;
            a.wj = a.j.HN(a.j.vD() ? b : null);
            a.FN > 0 && (a.AI = new w7((0, g.Wa)(a.AV, a, a.wj), a.FN));
            a.C.listen(a.wj, "readystatechange", a.t5);
            b = a.Yv ? g.Kc(a.Yv) : {};
            a.cw ? (a.DI = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.wj.send(a.BI, a.DI, a.cw, b)) : (a.DI = "GET", a.s2 && !g.tc && (b.Connection = "close"), a.wj.send(a.BI, a.DI, null, b));
            a.j.As(1)
        },
        ctb = function(a, b) {
            var c = a.FI,
                d = b.indexOf("\n", c);
            if (d == -1) return atb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return btb;
            d += 1;
            if (d + c > b.length) return atb;
            b = b.slice(d, d + c);
            a.FI = d + c;
            return b
        },
        $sb = function(a) {
            a.GN = Date.now() + a.B;
            dtb(a, a.B)
        },
        dtb = function(a, b) {
            if (a.wz != null) throw Error("WatchDog timer not null");
            a.wz = P7((0, g.Wa)(a.s5, a), b)
        },
        etb = function(a) {
            a.wz && (g.Ka.clearTimeout(a.wz), a.wz = null)
        },
        ftb = function(a) {
            a.j.Og() || a.sD || a.j.JN(a)
        },
        T7 = function(a) {
            etb(a);
            g.pb(a.AI);
            a.AI = null;
            a.G.stop();
            a.C.removeAll();
            if (a.wj) {
                var b = a.wj;
                a.wj = null;
                b.abort();
                b.dispose()
            }
            a.v3 && (a.v3 = null)
        },
        gtb = function(a, b) {
            try {
                a.j.BV(a, b), a.j.As(4)
            } catch (c) {}
        },
        itb = function(a, b, c, d, e) {
            if (d == 0) c(!1);
            else {
                var f = e || 0;
                d--;
                htb(a, b, function(h) {
                    h ? c(!0) : g.Ka.setTimeout(function() {
                        itb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        htb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    U7(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    U7(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    U7(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    U7(d), c(!1)
                } catch (e) {}
            };
            g.Ka.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        U7 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        jtb = function(a) {
            this.j = a;
            this.B = new x7
        },
        ktb = function(a) {
            var b = V7(a.j, a.xE, "/mail/images/cleardot.gif");
            d7(b);
            itb(b.toString(), 5E3, (0, g.Wa)(a.J7, a), 3, 2E3);
            a.As(1)
        },
        ltb = function(a) {
            var b = a.j.K;
            b != null ? (R7(5), b ? (R7(11), W7(a.j, a, !1)) : (R7(12), W7(a.j, a, !0))) : (a.rl = new S7(a), a.rl.Yv = a.IN, b = a.j, b = V7(b, b.vD() ? a.GI : null, a.KN), R7(5), e7(b, "TYPE", "xmlhttp"), Zsb(a.rl, b, !1, a.GI, !1))
        },
        mtb = function(a, b, c) {
            this.j = 1;
            this.B = [];
            this.C = [];
            this.G = new x7;
            this.Y = a || null;
            this.K = b != null ? b : null;
            this.Z = c || !1
        },
        ntb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        otb = function(a, b, c, d) {
            g.ub.call(this, "timingevent", a);
            this.size = b;
            this.rtt = c;
            this.retries = d
        },
        ptb = function(a) {
            g.ub.call(this, "serverreachability", a)
        },
        rtb = function(a) {
            a.u5(1, 0);
            a.HI = V7(a, null, a.MN);
            qtb(a)
        },
        stb = function(a) {
            a.Kt && (a.Kt.abort(), a.Kt = null);
            a.Xg && (a.Xg.cancel(), a.Xg = null);
            a.xr && (g.Ka.clearTimeout(a.xr), a.xr = null);
            X7(a);
            a.Ak && (a.Ak.cancel(), a.Ak = null);
            a.ut && (g.Ka.clearTimeout(a.ut), a.ut = null)
        },
        ttb = function(a, b) {
            if (a.j == 0) throw Error("Invalid operation: sending map when state is closed");
            a.B.push(new ntb(a.v5++, b));
            a.j != 2 && a.j != 3 || qtb(a)
        },
        utb = function(a) {
            var b = 0;
            a.Xg && b++;
            a.Ak && b++;
            return b
        },
        qtb = function(a) {
            a.Ak || a.ut || (a.ut = P7((0, g.Wa)(a.GV, a), 0), a.yz = 0)
        },
        xtb = function(a, b) {
            if (a.j == 1) {
                if (!b) {
                    a.xD = Math.floor(Math.random() * 1E5);
                    b = a.xD++;
                    var c = new S7(a, "", b);
                    c.Yv = a.yp;
                    var d = vtb(a),
                        e = a.HI.clone();
                    g.tk(e, "RID", b);
                    g.tk(e, "CVER", "1");
                    Y7(a, e);
                    Ysb(c, e, d);
                    a.Ak = c;
                    a.j = 2
                }
            } else a.j == 3 && (b ? wtb(a, b) : a.B.length == 0 || a.Ak || wtb(a))
        },
        wtb = function(a, b) {
            if (b)
                if (a.dw > 6) {
                    a.B = a.C.concat(a.B);
                    a.C.length = 0;
                    var c = a.xD - 1;
                    b = vtb(a)
                } else c = b.N, b = b.cw;
            else c = a.xD++, b = vtb(a);
            var d = a.HI.clone();
            g.tk(d, "SID", a.D);
            g.tk(d, "RID", c);
            g.tk(d, "AID", a.zz);
            Y7(a, d);
            c = new S7(a, a.D, c, a.yz + 1);
            c.Yv = a.yp;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Ak = c;
            Ysb(c, d, b)
        },
        Y7 = function(a, b) {
            a.Vi && (a = a.Vi.KV()) && g.xc(a, function(c, d) {
                g.tk(b, d, c)
            })
        },
        vtb = function(a) {
            var b = Math.min(a.B.length, 1E3),
                c = ["count=" + b];
            if (a.dw > 6 && b > 0) {
                var d = a.B[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    qG: void 0
                }, f++) {
                e.qG = a.B[f].j;
                var h = a.B[f].map;
                e.qG = a.dw <= 6 ? f : e.qG - d;
                try {
                    g.xc(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.qG + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.qG + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.B.splice(0, b));
            return c.join("&")
        },
        ytb = function(a) {
            a.Xg || a.xr || (a.N = 1, a.xr = P7((0, g.Wa)(a.FV, a), 0), a.xz = 0)
        },
        Atb = function(a) {
            if (a.Xg || a.xr || a.xz >= 3) return !1;
            a.N++;
            a.xr = P7((0, g.Wa)(a.FV, a), ztb(a, a.xz));
            a.xz++;
            return !0
        },
        W7 = function(a, b, c) {
            a.qN = a.K == null ? c : !a.K;
            a.zp = b.wr;
            a.Z || rtb(a)
        },
        X7 = function(a) {
            a.ew != null && (g.Ka.clearTimeout(a.ew), a.ew = null)
        },
        ztb = function(a, b) {
            var c = 5E3 + Math.floor(Math.random() * 1E4);
            a.isActive() || (c *= 2);
            return c * b
        },
        Z7 = function(a, b) {
            if (b == 2 || b == 9) {
                var c = null;
                a.Vi && (c = null);
                var d = (0, g.Wa)(a.Xea, a);
                c || (c = new g.lk("//www.google.com/images/cleardot.gif"), d7(c));
                htb(c.toString(), 1E4, d)
            } else R7(2);
            Btb(a, b)
        },
        Btb = function(a, b) {
            a.j = 0;
            a.Vi && a.Vi.HV(b);
            Ctb(a);
            stb(a)
        },
        Ctb = function(a) {
            a.j = 0;
            a.zp = -1;
            if (a.Vi)
                if (a.C.length == 0 && a.B.length == 0) a.Vi.NN();
                else {
                    var b = g.Zb(a.C),
                        c = g.Zb(a.B);
                    a.C.length = 0;
                    a.B.length = 0;
                    a.Vi.NN(b, c)
                }
        },
        V7 = function(a, b, c) {
            var d = g.uk(c);
            if (d.j != "") b && g.nk(d, b + "." + d.j), g.ok(d, d.C);
            else {
                var e = window.location;
                d = arb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.wD && g.xc(a.wD, function(f, h) {
                g.tk(d, h, f)
            });
            g.tk(d, "VER", a.dw);
            Y7(a, d);
            return d
        },
        Dtb = function() {},
        Etb = function() {
            this.j = [];
            this.B = []
        },
        Ftb = function(a) {
            g.ub.call(this, "channelMessage");
            this.message = a
        },
        Gtb = function(a) {
            g.ub.call(this, "channelError");
            this.error = a
        },
        Htb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        $7 = function(a, b) {
            g.O.call(this);
            this.j = new g.Yo(this.Oca, 0, this);
            g.P(this, this.j);
            this.ej = 5E3;
            this.B = 0;
            if (typeof a === "function") b && (a = (0, g.Wa)(a, b));
            else if (a && typeof a.handleEvent === "function") a = (0, g.Wa)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.C = a
        },
        Itb = function(a, b, c, d, e) {
            c = c === void 0 ? !1 : c;
            d = d === void 0 ? function() {
                return ""
            } : d;
            e = e === void 0 ? !1 : e;
            this.Ba = a;
            this.N = b;
            this.C = new g.yp;
            this.B = new $7(this.fea, this);
            this.j = null;
            this.oa = !1;
            this.K = null;
            this.Y = "";
            this.Z = this.G = 0;
            this.D = [];
            this.Qa = c;
            this.qa = d;
            this.Ua = e;
            this.Ma = new brb;
            this.Da = new drb;
            this.Ka = new frb;
            this.Fa = new hrb;
            this.Va = new jrb;
            this.Xa = new krb
        },
        Jtb = function(a) {
            if (a.j) {
                var b = a.qa(),
                    c = a.j.yp || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.yp = c
            }
        },
        a8 = function(a) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.B = !0;
            a = a || document.location.href;
            var b = Number(g.Li(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Mi(a) || "";
            a = g.Eb();
            a.search("MSIE") >= 0 && (a = a.match(/MSIE ([\d.]+)/)[1], g.Db(a, "10.0") < 0 && (this.B = !1))
        },
        b8 = function(a, b) {
            var c = a.j;
            a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
            return g.Si(c + b, {})
        },
        Ktb = function(a, b) {
            g.ad.call(this);
            var c = this;
            this.Gd = a();
            this.Gd.subscribe("handlerOpened", this.x5, this);
            this.Gd.subscribe("handlerClosed", this.onClosed, this);
            this.Gd.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Gd.subscribe("handlerMessage", this.onMessage, this);
            this.j = b
        },
        Ltb = function(a, b, c) {
            var d = this;
            c = c === void 0 ? function() {
                return ""
            } : c;
            var e = e === void 0 ? new Rsb : e;
            var f = f === void 0 ? new g.yp : f;
            this.pathPrefix = a;
            this.j = b;
            this.Ba = c;
            this.G = f;
            this.Z = null;
            this.Y = this.N = 0;
            this.channel = null;
            this.K = 0;
            this.C = new $7(function() {
                d.C.isActive();
                var h;
                ((h = d.channel) == null ? void 0 : ssb((new Usb(h, h.j)).j.B)) === 0 && d.connect(d.Z, d.N)
            });
            this.D = {};
            this.B = {};
            this.oa = !1;
            this.logger = null;
            this.qa = [];
            this.Ag = void 0;
            this.Ma = new brb;
            this.Da = new drb;
            this.Ka = new frb;
            this.Fa = new hrb
        },
        Mtb = function(a) {
            g.Tc(a.channel, "m", function() {
                a.K = 3;
                a.C.reset();
                a.Z = null;
                a.N = 0;
                for (var b = g.w(a.qa), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.qa = [];
                a.publish("webChannelOpened");
                crb(a.Ma, "WEB_CHANNEL")
            });
            g.Tc(a.channel, "n", function() {
                a.K = 0;
                a.C.isActive() || a.publish("webChannelClosed");
                var b, c = (b = a.channel) == null ? void 0 : Vsb(new Usb(b, b.j));
                c && (a.qa = [].concat(g.x(c)));
                erb(a.Da, "WEB_CHANNEL")
            });
            g.Tc(a.channel, "p", function(b) {
                var c = b.data;
                c[0] === "gracefulReconnect" ? (a.C.start(), a.channel && a.channel.close()) : a.publish("webChannelMessage", new Htb(c[0], c[1]));
                a.Ag = b.statusCode;
                grb(a.Ka, "WEB_CHANNEL")
            });
            g.Tc(a.channel, "o", function() {
                a.Ag === 401 || a.C.start();
                a.publish("webChannelError");
                irb(a.Fa, "WEB_CHANNEL")
            })
        },
        Ntb = function(a) {
            var b = a.Ba();
            b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
        },
        Otb = function(a) {
            g.ad.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.y5, this);
            this.j.subscribe("webChannelClosed", this.onClosed, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.onMessage, this)
        },
        Ptb = function(a, b, c, d, e) {
            function f() {
                return new Itb(b8(a, "/bc"), b, !1, c, d)
            }
            c = c === void 0 ? function() {
                return ""
            } : c;
            return g.sr("enable_mdx_web_channel_desktop") ? new Otb(function() {
                return new Ltb(b8(a, "/wc"), b, c)
            }) : new Ktb(f, e)
        },
        Ttb = function() {
            var a = Qtb;
            Rtb();
            c8.push(a);
            Stb()
        },
        d8 = function(a, b) {
            Rtb();
            var c = Utb(a, String(b));
            c8.length == 0 ? Vtb(c) : (Stb(), g.jc(c8, function(d) {
                d(c)
            }))
        },
        e8 = function(a) {
            d8("CP", a)
        },
        Rtb = function() {
            c8 || (c8 = g.Ma("yt.mdx.remote.debug.handlers_") || [], g.La("yt.mdx.remote.debug.handlers_", c8))
        },
        Vtb = function(a) {
            var b = (f8 + 1) % 50;
            f8 = b;
            g8[b] = a;
            h8 || (h8 = b == 49)
        },
        Stb = function() {
            var a = c8;
            if (g8[0]) {
                var b = h8 ? f8 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = g8[b];
                    g.jc(a, function(d) {
                        d(c)
                    })
                } while (b != f8);
                g8 = Array(50);
                f8 = -1;
                h8 = !1
            }
        },
        Utb = function(a, b) {
            var c = (Date.now() - Wtb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        i8 = function(a) {
            g.fx.call(this);
            this.K = a;
            this.screens = []
        },
        Xtb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        Ytb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.hn(a.screens, function(f) {
                return !!yrb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = Xtb(a, b[d]) || c;
            return c
        },
        Ztb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.hn(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        $tb = function(a, b, c, d, e) {
            g.fx.call(this);
            this.C = a;
            this.N = b;
            this.D = c;
            this.K = d;
            this.G = e;
            this.B = 0;
            this.j = null;
            this.qd = NaN
        },
        k8 = function(a) {
            i8.call(this, "LocalScreenService");
            this.B = a;
            this.j = NaN;
            j8(this);
            this.info("Initializing with " + vrb(this.screens))
        },
        aub = function(a) {
            if (a.screens.length) {
                var b = g.zl(a.screens, function(d) {
                        return d.id
                    }),
                    c = b8(a.B, "/pairing/get_lounge_token_batch");
                a.B.sendRequest("POST", c, {
                    screen_ids: b.join(",")
                }, (0, g.Wa)(a.O9, a), (0, g.Wa)(a.N9, a))
            }
        },
        j8 = function(a) {
            if (g.sr("deprecate_pair_servlet_enabled")) return Ytb(a, []);
            var b = urb(Frb());
            b = g.hn(b, function(c) {
                return !c.uuid
            });
            return Ytb(a, b)
        },
        l8 = function(a, b) {
            Hrb(g.zl(a.screens, srb));
            b && Grb()
        },
        cub = function(a, b) {
            g.fx.call(this);
            this.K = b;
            b = (b = g.Hs("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Ub(b, h)
            }
            this.j = c;
            this.G = a;
            this.C = this.D = NaN;
            this.B = null;
            bub("Initialized with " + g.Ci(this.j))
        },
        dub = function(a, b, c) {
            var d = b8(a.G, "/pairing/get_screen_availability");
            a.G.sendRequest("POST", d, {
                lounge_token: b.token
            }, (0, g.Wa)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c(e[h].status == "online");
                        return
                    }
                c(!1)
            }, a), (0, g.Wa)(function() {
                c(!1)
            }, a))
        },
        fub = function(a, b) {
            a: if (Vqb(b) != Vqb(a.j)) var c = !1;
                else {
                    c = g.Dc(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (bub("Updated online screens: " + g.Ci(a.j)), a.j = b, a.publish("screenChange"));eub(a)
        },
        m8 = function(a) {
            isNaN(a.C) || g.pr(a.C);
            a.C = g.nr((0, g.Wa)(a.xT, a), a.D > 0 && a.D < g.Ya() ? 2E4 : 1E4)
        },
        bub = function(a) {
            d8("OnlineScreenService", a)
        },
        gub = function(a) {
            var b = {};
            g.jc(a.K(), function(c) {
                c.token ? b[c.token] = c.id : this.jg("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        eub = function(a) {
            a = g.Dc(g.yc(a.j, function(b) {
                return b
            }));
            g.gc(a);
            a.length ? g.Gs("yt-remote-online-screen-ids", a.join(","), 60) : g.Is("yt-remote-online-screen-ids")
        },
        n8 = function(a, b) {
            b = b === void 0 ? !1 : b;
            i8.call(this, "ScreenService");
            this.D = a;
            this.N = b;
            this.j = this.B = null;
            this.C = [];
            this.G = {};
            hub(this)
        },
        jub = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.G[b]);
            var h = a.Hl(),
                l = c ? n7(h, c) : null;
            c && (a.N || l) || (l = n7(h, b));
            if (l) {
                l.uuid = b;
                var m = o8(a, l);
                dub(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? iub(a, c, (0, g.Wa)(function(n) {
                var p = o8(this, new k7({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                dub(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        kub = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        lub = function(a, b, c) {
            dub(a.j, b, c)
        },
        iub = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.xr(b8(a.D, "/pairing/get_lounge_token_batch"), e)
        },
        mub = function(a) {
            a.screens = a.B.Hl();
            var b = a.G,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + vrb(a.screens))
        },
        hub = function(a) {
            nub(a);
            a.B = new k8(a.D);
            a.B.subscribe("screenChange", (0, g.Wa)(a.Y9, a));
            mub(a);
            a.N || (a.C = urb(g.Hs("yt-remote-automatic-screen-cache") || []));
            nub(a);
            a.info("Initializing automatic screens: " + vrb(a.C));
            a.j = new cub(a.D, (0, g.Wa)(a.Hl, a, !0));
            a.j.subscribe("screenChange", (0, g.Wa)(function() {
                this.publish("onlineScreenChange")
            }, a))
        },
        o8 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = n7(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.N || oub(a));
            nub(a);
            a.G[b.uuid] = b.id;
            g.Gs("yt-remote-device-id-map", a.G, 31536E3);
            return b
        },
        oub = function(a) {
            a = g.hn(a.C, function(b) {
                return b.idType != "shortLived"
            });
            g.Gs("yt-remote-automatic-screen-cache", g.zl(a, srb))
        },
        nub = function(a) {
            a.G = g.Hs("yt-remote-device-id-map") || {}
        },
        p8 = function(a, b, c) {
            g.fx.call(this);
            this.Fa = c;
            this.D = a;
            this.B = b;
            this.j = null
        },
        q8 = function(a, b) {
            a.j = b;
            a.publish("sessionScreen", a.j)
        },
        pub = function(a, b) {
            a.j && (a.j.token = b, o8(a.D, a.j));
            a.publish("sessionScreen", a.j)
        },
        r8 = function(a, b) {
            d8(a.Fa, b)
        },
        s8 = function(a, b, c) {
            p8.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.C = null;
            this.qa = (0, g.Wa)(this.D5, this);
            this.Da = (0, g.Wa)(this.dda, this);
            this.oa = g.nr(function() {
                qub(d, null)
            }, 12E4);
            this.N = this.G = this.K = this.Z = 0;
            this.Ba = !1;
            this.Y = "unknown"
        },
        sub = function(a, b) {
            g.pr(a.N);
            a.N = 0;
            b == 0 ? rub(a) : a.N = g.nr(function() {
                rub(a)
            }, b)
        },
        rub = function(a) {
            tub(a, "getLoungeToken");
            g.pr(a.G);
            a.G = g.nr(function() {
                uub(a, null)
            }, 3E4)
        },
        tub = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Ci());
            var c = {};
            c.type = b;
            a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.Wa)(function() {
                r8(this, "Failed to send message: " + b + ".")
            }, a)) : r8(a, "Sending yt message without session: " + g.Ci(c))
        },
        vub = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.VY(b, function(c) {
                q8(a, c)
            }, function() {
                return a.Oj()
            }, 5)) : a.Oj(Error("Waiting for session status timed out."))
        },
        xub = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new k7(b);
            wub(a, d, function(e) {
                e ? (a.Ba = !0, o8(a.D, d), q8(a, d), a.Y = "unknown", sub(a, c)) : (g.Wq(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Oj())
            }, 5)
        },
        qub = function(a, b) {
            g.pr(a.oa);
            a.oa = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? xub(a, {
                    name: a.B.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.Wq(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), vub(a, b.screenId))) : (g.Wq(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), vub(a, b.screenId)) :
                vub(a, b.screenId) : a.Oj(Error("Waiting for session status timed out."))
        },
        uub = function(a, b) {
            g.pr(a.G);
            a.G = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Y = c, sub(a, 3E4)) : (pub(a, b.loungeToken), a.Ba = !1, a.Y = "unknown", sub(a, b.loungeTokenRefreshIntervalMs))
        },
        wub = function(a, b, c, d) {
            g.pr(a.K);
            a.K = 0;
            lub(a.D, b, function(e) {
                e || d < 0 ? c(e) : a.K = g.nr(function() {
                    wub(a, b, c, d - 1)
                }, 300)
            })
        },
        yub = function(a) {
            g.pr(a.Z);
            a.Z = 0;
            g.pr(a.K);
            a.K = 0;
            g.pr(a.oa);
            a.oa = 0;
            g.pr(a.G);
            a.G = 0;
            g.pr(a.N);
            a.N = 0
        },
        t8 = function(a, b, c, d) {
            p8.call(this, a, b, "DialSession");
            this.config_ = d;
            this.C = this.Z = null;
            this.Da = "";
            this.Qa = c;
            this.Ma = null;
            this.oa = function() {};
            this.Y = NaN;
            this.Ka = (0, g.Wa)(this.E5, this);
            this.G = function() {};
            this.N = this.K = 0;
            this.qa = !1;
            this.Ba = "unknown"
        },
        u8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && ((b = a.C) == null ? 0 : b.getDialAppInfo))
        },
        zub = function(a) {
            a.G = a.D.MV(a.Da, a.B.label, a.B.friendlyName, u8(a), function(b, c) {
                a.G = function() {};
                a.qa = !0;
                q8(a, b);
                b.idType == "shortLived" && c > 0 && v8(a, c)
            }, function(b) {
                a.G = function() {};
                a.Oj(b)
            })
        },
        Aub = function(a) {
            var b = {};
            b.pairingCode = a.Da;
            b.theme = a.Qa;
            Jrb() && (b.env_useStageMdx = 1);
            return g.Ri(b)
        },
        Bub = function(a) {
            return new Promise(function(b) {
                a.Da = wrb();
                if (a.Ma) {
                    var c = new chrome.cast.DialLaunchResponse(!0, Aub(a));
                    b(c);
                    zub(a)
                } else a.oa = function() {
                    g.pr(a.Y);
                    a.oa = function() {};
                    a.Y = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, Aub(a));
                    b(d);
                    zub(a)
                }, a.Y = g.nr(function() {
                    a.oa()
                }, 100)
            })
        },
        Dub = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new k7(b);
            return (new Promise(function(e) {
                Cub(a, d, function(f) {
                    f ? (a.qa = !0, o8(a.D, d), q8(a, d), v8(a, c)) : g.Wq(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : Bub(a)
            })
        },
        Eub = function(a, b) {
            var c = a.Z.receiver.label,
                d = a.B.friendlyName;
            return (new Promise(function(e) {
                jub(a.D, c, b, d, function(f) {
                    f && f.token && q8(a, f);
                    e(f)
                }, function(f) {
                    r8(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : Bub(a)
            })
        },
        Cub = function(a, b, c, d) {
            g.pr(a.K);
            a.K = 0;
            lub(a.D, b, function(e) {
                e || d < 0 ? c(e) : a.K = g.nr(function() {
                    Cub(a, b, c, d - 1)
                }, 300)
            })
        },
        v8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            u8(a) && (g.pr(a.N), a.N = 0, b == 0 ? Fub(a) : a.N = g.nr(function() {
                Fub(a)
            }, b))
        },
        Fub = function(a) {
            u8(a) && a.C.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Ba = c, v8(a, 3E4)) : (a.qa = !1, a.Ba = "unknown", pub(a, b.loungeToken), v8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Ba = "noLoungeTokenResponse";
                v8(a, 3E4)
            })
        },
        Gub = function(a) {
            g.pr(a.K);
            a.K = 0;
            g.pr(a.N);
            a.N = 0;
            a.G();
            a.G = function() {};
            g.pr(a.Y)
        },
        w8 = function(a, b) {
            p8.call(this, a, b, "ManualSession");
            this.C = g.nr((0, g.Wa)(this.fB, this, null), 150)
        },
        x8 = function(a, b) {
            g.fx.call(this);
            this.config_ = b;
            this.B = a;
            this.Z = b.appId || "233637DE";
            this.D = b.theme || "cl";
            this.Y = b.disableCastApi || !1;
            this.K = b.forceMirroring || !1;
            this.j = null;
            this.N = !1;
            this.C = [];
            this.G = (0, g.Wa)(this.aca, this)
        },
        Hub = function(a, b) {
            return b ? g.Sb(a.C, function(c) {
                return l7(b, c.label)
            }, a) : null
        },
        y8 = function(a) {
            d8("Controller", a)
        },
        Qtb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        z8 = function(a) {
            return a.N || !!a.C.length || !!a.j
        },
        A8 = function(a, b, c) {
            b != a.j && (g.pb(a.j), (a.j = b) ? (c ? a.publish("yt-remote-cast2-receiver-resumed",
                b.B) : a.publish("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.Wa)(a.O0, a, b)), b.subscribe("sessionFailed", function() {
                return Iub(a, b)
            }), b.j ? a.publish("yt-remote-cast2-session-change", b.j) : c && a.j.fB(null)) : a.publish("yt-remote-cast2-session-change", null))
        },
        Iub = function(a, b) {
            a.j == b && a.publish("yt-remote-cast2-session-failed")
        },
        Jub = function(a) {
            var b = a.B.LV(),
                c = a.j && a.j.B;
            a = g.zl(b, function(d) {
                c && l7(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = Hub(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        Qub = function(a, b, c, d) {
            d.disableCastApi ? B8("Cannot initialize because disabled by Mdx config.") : Kub() ? Lub(b, d) && (Mub(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? Nub(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? Nub(a, c) : (C8("Failed to load cast API: " + f), Oub(!1), Mub(!1), g.Is("yt-remote-cast-available"), g.Is("yt-remote-cast-receiver"),
                    Pub(), c(!1))
            }, d.loadCastApiSetupScript ? g.kv("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : window.navigator.userAgent.indexOf("Android") >= 0 && window.navigator.userAgent.indexOf("Chrome/") >= 0 && window.navigator.presentation ? Lrb() >= 60 && Urb() : !window.chrome || !window.navigator.presentation || window.navigator.userAgent.indexOf("Edge") >= 0 ? Prb() : Lrb() >= 89 ? Wrb() : (Trb(), u7(Vrb.map(Qrb))))) : B8("Cannot initialize because not running Chrome")
        },
        Pub = function() {
            B8("dispose");
            var a = D8();
            a && a.dispose();
            g.La("yt.mdx.remote.cloudview.instance_", null);
            Rub(!1);
            g.iv(Sub);
            Sub.length = 0
        },
        E8 = function() {
            return !!g.Hs("yt-remote-cast-installed")
        },
        Tub = function() {
            var a = g.Hs("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        Uub = function() {
            B8("clearCurrentReceiver");
            g.Is("yt-remote-cast-receiver")
        },
        Vub = function() {
            return E8() ? D8() ? D8().getCastSession() : (C8("getCastSelector: Cast is not initialized."), null) : (C8("getCastSelector: Cast API is not installed!"), null)
        },
        Wub = function() {
            E8() ? D8() ? F8() ? (B8("Requesting cast selector."), D8().requestSession()) : (B8("Wait for cast API to be ready to request the session."), Sub.push(g.hv("yt-remote-cast2-api-ready", Wub))) : C8("requestCastSelector: Cast is not initialized.") : C8("requestCastSelector: Cast API is not installed!")
        },
        G8 = function(a, b) {
            F8() ? D8().setConnectedScreenStatus(a, b) : C8("setConnectedScreenStatus called before ready.")
        },
        Kub = function() {
            var a = g.Eb().search(/ (CrMo|Chrome|CriOS)\//) >= 0;
            return g.wE || a
        },
        Xub = function(a, b) {
            D8().init(a, b)
        },
        Lub = function(a, b) {
            var c = !1;
            D8() || (a = new x8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.Gs("yt-remote-cast-available", d);
                s7("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                B8("onReceiverSelected: " + d.friendlyName);
                g.Gs("yt-remote-cast-receiver", d);
                s7("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                B8("onReceiverResumed: " + d.friendlyName);
                g.Gs("yt-remote-cast-receiver", d);
                s7("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                B8("onSessionChange: " + m7(d));
                d || g.Is("yt-remote-cast-receiver");
                s7("yt-remote-cast2-session-change", d)
            }), g.La("yt.mdx.remote.cloudview.instance_", a), c = !0);
            B8("cloudview.createSingleton_: " + c);
            return c
        },
        D8 = function() {
            return g.Ma("yt.mdx.remote.cloudview.instance_")
        },
        Nub = function(a, b) {
            Oub(!0);
            Mub(!1);
            Xub(a, function(c) {
                c ? (Rub(!0), g.jv("yt-remote-cast2-api-ready")) : (C8("Failed to initialize cast API."), Oub(!1), g.Is("yt-remote-cast-available"), g.Is("yt-remote-cast-receiver"), Pub());
                b(c)
            })
        },
        B8 = function(a) {
            d8("cloudview", a)
        },
        C8 = function(a) {
            d8("cloudview", a)
        },
        Oub = function(a) {
            B8("setCastInstalled_ " + a);
            g.Gs("yt-remote-cast-installed", a)
        },
        F8 = function() {
            return !!g.Ma("yt.mdx.remote.cloudview.apiReady_")
        },
        Rub = function(a) {
            B8("setApiReady_ " + a);
            g.La("yt.mdx.remote.cloudview.apiReady_", a)
        },
        Mub = function(a) {
            g.La("yt.mdx.remote.cloudview.initializing_", a)
        },
        H8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.K = this.N = 0;
            this.trackData = null;
            this.Kl = this.fq = !1;
            this.Z = this.G = this.j = this.D = 0;
            this.C = NaN;
            this.B = !1;
            this.reset(a)
        },
        Yub = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.fq = !1;
            a.Kl = !1;
            a.N = 0;
            a.K = g.Ya();
            a.D = 0;
            a.j = 0;
            a.G = 0;
            a.Z = 0;
            a.C = NaN;
            a.B = !1
        },
        I8 = function(a) {
            return a.isPlaying() ? (g.Ya() - a.K) / 1E3 : 0
        },
        J8 = function(a, b) {
            a.N = b;
            a.K = g.Ya()
        },
        K8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Ya() - a.K) / 1E3 + a.N;
                case -1E3:
                    return 0
            }
            return a.N
        },
        L8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && Yub(a)
        },
        Zub = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.Lc(a.trackData);
            b.hasPrevious = a.fq;
            b.hasNext = a.Kl;
            b.playerTime = a.N;
            b.playerTimeAt = a.K;
            b.seekableStart = a.D;
            b.seekableEnd = a.j;
            b.duration = a.G;
            b.loadedTime = a.Z;
            b.liveIngestionTime = a.C;
            return b
        },
        N8 = function(a, b) {
            g.fx.call(this);
            var c = this;
            this.C = 0;
            this.D = a;
            this.K = [];
            this.G = new Etb;
            this.B = this.j = null;
            this.Y = (0, g.Wa)(this.Naa, this);
            this.N = (0, g.Wa)(this.CG, this);
            this.Z = (0, g.Wa)(this.Maa, this);
            this.oa = (0, g.Wa)(this.Paa, this);
            var d = 0;
            a ? (d = a.getProxyState(), d != 3 && (a.subscribe("proxyStateChange", this.UT, this), $ub(this))) : d = 3;
            d != 0 && (b ? this.UT(d) : g.nr(function() {
                c.UT(d)
            }, 0));
            (a = Vub()) && M8(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.oa)
        },
        O8 = function(a) {
            return new H8(a.D.getPlayerContextData())
        },
        $ub = function(a) {
            g.jc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.K.push(this.D.subscribe(b, g.Xa(this.Yba, b), this))
            }, a)
        },
        avb = function(a) {
            g.jc(a.K, function(b) {
                this.D.unsubscribeByKey(b)
            }, a);
            a.K.length = 0
        },
        P8 = function(a) {
            return a.getState() == 1
        },
        Q8 = function(a, b) {
            var c = a.G;
            c.j.length + c.B.length < 50 && a.G.enqueue(b)
        },
        bvb = function(a, b, c) {
            var d = O8(a);
            J8(d, c);
            d.playerState != -1E3 && (d.playerState = b);
            R8(a, d)
        },
        S8 = function(a, b, c) {
            a.D.sendMessage(b, c)
        },
        R8 = function(a, b) {
            avb(a);
            a.D.setPlayerContextData(Zub(b));
            $ub(a)
        },
        M8 = function(a, b) {
            a.B && (a.B.removeUpdateListener(a.Y), a.B.removeMediaListener(a.N), a.CG(null));
            a.B = b;
            a.B && (e8("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.Y), a.B.addMediaListener(a.N), a.B.media.length && a.CG(a.B.media[0]))
        },
        cvb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = O8(a);
                b.contentId != d.videoId && e8("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                J8(d, a.j.getEstimatedTime());
                R8(a, d)
            } else e8("No cast media video. Ignoring state update.")
        },
        T8 = function(a, b, c) {
            return (0, g.Wa)(function(d) {
                this.jg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.jg("Retrying " + b + " using MDx browser channel."), S8(this, b, c))
            }, a)
        },
        W8 = function(a, b, c, d) {
            d = d === void 0 ? !1 : d;
            g.fx.call(this);
            var e = this;
            this.K = NaN;
            this.Da = !1;
            this.Y = this.Z = this.qa = this.Ba = NaN;
            this.oa = [];
            this.G = this.N = this.D = this.j = this.B = null;
            this.Ma = a;
            this.Ka = d;
            this.oa.push(g.vs(window, "beforeunload", function() {
                e.hA(2)
            }));
            this.C = [];
            this.j = new H8;
            this.Qa = b.id;
            this.Fa = b.idType;
            this.B = Ptb(this.Ma, c, this.QV, this.Fa == "shortLived", this.Qa);
            this.B.listen("channelOpened", function() {
                dvb(e)
            });
            this.B.listen("channelClosed", function() {
                U8("Channel closed");
                isNaN(e.K) ? q7(!0) : q7();
                e.dispose()
            });
            this.B.listen("channelError", function(f) {
                q7();
                isNaN(e.AF()) ? (f == 1 && e.Fa == "shortLived" && e.publish("browserChannelAuthError", f), U8("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Da = !0, U8("Channel error: " + f + " with reconnection in " + e.AF() + " ms"), V8(e, 2))
            });
            this.B.listen("channelMessage", function(f) {
                evb(e, f)
            });
            this.B.Ns(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.Js() && g.Gs("yt-remote-session-video-id", f)
            })
        },
        fvb = function(a) {
            return g.Sb(a.C, function(b) {
                return b.type == "LOUNGE_SCREEN"
            })
        },
        U8 = function(a) {
            d8("conn", a)
        },
        V8 = function(a, b) {
            a.publish("proxyStateChange", b)
        },
        gvb = function(a) {
            a.K = g.nr(function() {
                U8("Connecting timeout");
                a.hA(1)
            }, 2E4)
        },
        hvb = function(a) {
            g.pr(a.K);
            a.K = NaN
        },
        ivb = function(a) {
            g.pr(a.Ba);
            a.Ba = NaN
        },
        kvb = function(a) {
            jvb(a);
            a.qa = g.nr(function() {
                X8(a, "getNowPlaying")
            }, 2E4)
        },
        jvb = function(a) {
            g.pr(a.qa);
            a.qa = NaN
        },
        dvb = function(a) {
            U8("Channel opened");
            a.Da && (a.Da = !1, ivb(a), a.Ba = g.nr(function() {
                U8("Timing out waiting for a screen.");
                a.hA(1)
            }, 15E3))
        },
        mvb = function(a, b) {
            var c = null;
            if (b) {
                var d = fvb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.La("yt.mdx.remote.remoteClient_", c);
            b && (hvb(a), ivb(a));
            c = a.B.RA() && isNaN(a.K);
            b == c ? b && (V8(a, 1), X8(a, "getSubtitlesTrack")) : b ? (a.QY() && a.j.reset(), V8(a, 1), X8(a, "getNowPlaying"), lvb(a)) : a.hA(1)
        },
        nvb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.Hc(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.publish("remotePlayerChange"))
        },
        ovb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            L8(a.j, d, e);
            a.publish("remoteQueueChange", c)
        },
        qvb = function(a, b) {
            b.params = b.params || {};
            ovb(a, b, "NOW_PLAYING_MAY_CHANGE");
            pvb(a, b);
            a.publish("autoplayDismissed")
        },
        pvb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            J8(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c;
            c == -1 && a.j.playerState == -1E3 && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.Z = isNaN(c) ? 0 : c;
            a.j.Tq(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.C = d;
            c.B = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.D = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            a.j.playerState == 1 ? kvb(a) : jvb(a);
            a.publish("remotePlayerChange")
        },
        rvb = function(a, b) {
            if (a.j.playerState != -1E3) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                J8(a.j, isNaN(b) ? 0 : b);
                a.publish("remotePlayerChange")
            }
        },
        svb = function(a, b) {
            var c = b.params.muted == "true";
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.publish("remotePlayerChange")
        },
        tvb = function(a, b) {
            a.N = b.params.videoId;
            a.publish("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        uvb = function(a, b) {
            a.N = b.params.videoId || null;
            a.publish("autoplayUpNext", a.N)
        },
        vvb = function(a, b) {
            a.G = b.params.autoplayMode;
            a.publish("autoplayModeChange", a.G);
            a.G == "DISABLED" && a.publish("autoplayDismissed")
        },
        wvb = function(a, b) {
            var c = b.params.hasNext == "true";
            a.j.fq = b.params.hasPrevious == "true";
            a.j.Kl = c;
            a.publish("previousNextChange")
        },
        evb = function(a, b) {
            b = b.message;
            b.params ? U8("Received: action=" + b.action + ", params=" + g.Ci(b.params)) : U8("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = f7(b.params.devices);
                    a.C = g.zl(b, function(d) {
                        return new prb(d)
                    });
                    b = !!g.Sb(a.C, function(d) {
                        return d.type == "LOUNGE_SCREEN"
                    });
                    mvb(a, b);
                    b = a.UZ("mlm");
                    a.publish("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Xb(a.C, function(d) {
                        return d.type == "LOUNGE_SCREEN"
                    });
                    mvb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new prb(f7(b.params.device));
                    g.Sb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    }) || Uqb(a.C, c);
                    break;
                case "remoteDisconnected":
                    c = new prb(f7(b.params.device));
                    g.Xb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    ovb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    qvb(a, b);
                    break;
                case "onStateChange":
                    pvb(a, b);
                    break;
                case "onAdStateChange":
                    rvb(a, b);
                    break;
                case "onVolumeChanged":
                    svb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    nvb(a, b);
                    break;
                case "nowAutoplaying":
                    tvb(a, b);
                    break;
                case "autoplayDismissed":
                    a.publish("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    uvb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    vvb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    wvb(a,
                        b);
                    break;
                case "requestAssistedSignIn":
                    a.publish("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.publish("loopModeChange", b.params.loopMode);
                    break;
                default:
                    U8("Unrecognized action: " + b.action)
            }
        },
        lvb = function(a) {
            g.pr(a.Y);
            a.Y = g.nr(function() {
                a.hA(1)
            }, 864E5)
        },
        X8 = function(a, b, c) {
            c ? U8("Sending: action=" + b + ", params=" + g.Ci(c)) : U8("Sending: action=" + b);
            a.B.sendMessage(b, c)
        },
        xvb = function(a) {
            i8.call(this, "ScreenServiceProxy");
            this.jh = a;
            this.j = [];
            this.j.push(this.jh.$_s("screenChange", (0, g.Wa)(this.I5, this)));
            this.j.push(this.jh.$_s("onlineScreenChange", (0, g.Wa)(this.Hba, this)))
        },
        Cvb = function(a, b) {
            Irb();
            if (!r7 || !r7.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.Tq("MDX_CONFIG") || b;
                zrb();
                Drb();
                Y8 || (Y8 = new a8(b ? b.loungeApiHost : void 0), Jrb() && (Y8.j = "/api/loungedev"));
                Z8 || (Z8 = g.Ma("yt.mdx.remote.deferredProxies_") || [], g.La("yt.mdx.remote.deferredProxies_", Z8));
                yvb();
                var c = $8();
                if (!c) {
                    var d = new n8(Y8, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.La("yt.mdx.remote.screenService_", d);
                    c = $8();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.La("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    Qub(a, d, function(f) {
                        f ? a9() && G8(a9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            s7("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Ma("yt.mdx.remote.initialized_") && (g.La("yt.mdx.remote.initialized_", !0), b9("Initializing: " + g.Ci(b)),
                    c9.push(g.hv("yt-remote-cast2-api-ready", function() {
                        s7("yt-remote-api-ready")
                    })), c9.push(g.hv("yt-remote-cast2-availability-change", function() {
                        s7("yt-remote-receiver-availability-change")
                    })), c9.push(g.hv("yt-remote-cast2-receiver-selected", function() {
                        d9(null);
                        s7("yt-remote-auto-connect", "cast-selector-receiver")
                    })), c9.push(g.hv("yt-remote-cast2-receiver-resumed", function() {
                        s7("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), c9.push(g.hv("yt-remote-cast2-session-change", zvb)), c9.push(g.hv("yt-remote-connection-change", function(f) {
                        f ? G8(a9(), "YouTube TV") : e9() || (G8(null, null), Uub())
                    })), c9.push(g.hv("yt-remote-cast2-session-failed", function() {
                        s7("yt-remote-connection-failed")
                    })), a = Avb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.sr("desktop_enable_autoplay") &&
                    e.push("atp"), e.length > 0 && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), b9(" -- with channel params: " + g.Ci(a)), a ? (g.Gs("yt-remote-session-app", a.app), g.Gs("yt-remote-session-name", a.name)) : (g.Is("yt-remote-session-app"), g.Is("yt-remote-session-name")), g.La("yt.mdx.remote.channelParams_", a), c.start(), a9() || Bvb())
            }
        },
        Dvb = function() {
            var a = $8().jh.$_gos();
            var b = f9();
            b && g9() && (yrb(a, b) || a.push(b));
            return xrb(a)
        },
        Fvb = function() {
            var a = Evb();
            !a && E8() && Tub() && (a = {
                key: "cast-selector-receiver",
                name: Tub()
            });
            return a
        },
        Evb = function() {
            var a = Dvb(),
                b = f9();
            b || (b = e9());
            return g.Sb(a, function(c) {
                return b && l7(b, c.key) ? !0 : !1
            })
        },
        f9 = function() {
            var a = a9();
            if (!a) return null;
            var b = $8().Hl();
            return n7(b, a)
        },
        zvb = function(a) {
            b9("remote.onCastSessionChange_: " + m7(a));
            if (a) {
                var b = f9();
                if (b && b.id == a.id) {
                    if (G8(b.id, "YouTube TV"), a.idType == "shortLived" && (a = a.token)) h9 && (h9.token = a), (b = g9()) && b.Ns(a)
                } else b && i9(), j9(a, 1)
            } else g9() && i9()
        },
        i9 = function() {
            F8() ? D8().stopSession() : C8("stopSession called before API ready.");
            var a = g9();
            a && (a.disconnect(1), Gvb(null))
        },
        Hvb = function() {
            var a = g9();
            return !!a && a.getProxyState() != 3
        },
        b9 = function(a) {
            d8("remote", a)
        },
        $8 = function() {
            if (!Ivb) {
                var a = g.Ma("yt.mdx.remote.screenService_");
                Ivb = a ? new xvb(a) : null
            }
            return Ivb
        },
        a9 = function() {
            return g.Ma("yt.mdx.remote.currentScreenId_")
        },
        Jvb = function(a) {
            g.La("yt.mdx.remote.currentScreenId_", a)
        },
        Kvb = function() {
            return g.Ma("yt.mdx.remote.connectData_")
        },
        d9 = function(a) {
            g.La("yt.mdx.remote.connectData_", a)
        },
        g9 = function() {
            return g.Ma("yt.mdx.remote.connection_")
        },
        Gvb = function(a) {
            var b = g9();
            d9(null);
            a || Jvb("");
            g.La("yt.mdx.remote.connection_", a);
            Z8 && (g.jc(Z8, function(c) {
                c(a)
            }), Z8.length = 0);
            b && !a ? s7("yt-remote-connection-change", !1) : !b && a && s7("yt-remote-connection-change", !0)
        },
        e9 = function() {
            var a = g.Js();
            if (!a) return null;
            var b = $8();
            if (!b) return null;
            b = b.Hl();
            return n7(b, a)
        },
        j9 = function(a, b) {
            a9();
            f9() && f9();
            if (k9) h9 = a;
            else {
                Jvb(a.id);
                var c = g.Ma("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new W8(Y8, a, Avb(), c);
                a.connect(b, Kvb());
                a.subscribe("beforeDisconnect", function(d) {
                    s7("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    g9() && (g9(), Gvb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = f9();
                    d && d.idType == "shortLived" && (F8() ? D8().handleBrowserChannelAuthError() : C8("refreshLoungeToken called before API ready."))
                });
                Gvb(a)
            }
        },
        Bvb = function() {
            var a = e9();
            a ? (b9("Resume connection to: " + m7(a)), j9(a, 0)) : (q7(), Uub(), b9("Skipping connecting because no session screen found."))
        },
        yvb = function() {
            var a = Avb();
            if (g.Hc(a)) {
                a = p7();
                var b = g.Hs("yt-remote-session-name") || "",
                    c = g.Hs("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.Tq("SESSION_INDEX", "0"));
                (b = g.Tq("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.La("yt.mdx.remote.channelParams_", a)
            }
        },
        Avb = function() {
            return g.Ma("yt.mdx.remote.channelParams_") || {}
        },
        Nvb = function(a, b, c) {
            g.O.call(this);
            var d = this;
            this.module = a;
            this.J = b;
            this.Gc = c;
            this.events = new g.AE(this);
            this.D = !1;
            this.G = new g.xF(64);
            this.j = new g.Yo(this.S2, 500, this);
            this.B = new g.Yo(this.T2, 1E3, this);
            this.N = new v7(this.wfa, 0, this);
            this.C = {};
            this.Z = new g.Yo(this.R3, 1E3, this);
            this.K = new w7(this.seekTo, 1E3, this);
            this.Y = this.events.T(this.J, "onVolumeChange", function(e) {
                Lvb(d, e)
            });
            g.P(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.rba);
            this.events.T(b, "captionschanged", this.Kaa);
            this.events.T(b, "captionssettingschanged", this.b3);
            this.events.T(b, "videoplayerreset", this.TL);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Gc.bY()
            });
            b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                Mvb(d.module) || l9(d) || m9(d, 0)
            });
            a = this.Gc;
            a.Ja();
            a.subscribe("proxyStateChange", this.K0, this);
            a.subscribe("remotePlayerChange", this.NG, this);
            a.subscribe("remoteQueueChange", this.TL, this);
            a.subscribe("previousNextChange", this.H0, this);
            a.subscribe("nowAutoplaying", this.D0, this);
            a.subscribe("autoplayDismissed", this.l0, this);
            g.P(this, this.j);
            g.P(this, this.B);
            g.P(this, this.N);
            g.P(this, this.Z);
            g.P(this, this.K);
            this.b3();
            this.TL();
            this.NG()
        },
        Lvb = function(a, b) {
            if (l9(a)) {
                a.Gc.unsubscribe("remotePlayerChange", a.NG, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = O8(a.Gc);
                if (c !== d.volume || b !== d.muted) a.Gc.setVolume(c, b), a.Z.start();
                a.Gc.subscribe("remotePlayerChange", a.NG, a)
            }
        },
        Ovb = function(a) {
            a.Sc(0);
            a.j.stop();
            a.Dc(new g.xF(64))
        },
        Pvb = function(a, b) {
            if (l9(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.J.getSubtitlesUserSettings()
                }, g.Mc(c, b));
                a.Gc.PV(a.J.getVideoData(1).videoId, c);
                a.C = O8(a.Gc).trackData
            }
        },
        m9 = function(a, b) {
            var c = a.J.getPlaylist();
            if (c == null ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.J.getVideoData(1);
            a.Gc.playVideo(c.videoId, b, d, e, c.playerParams, c.Fa, Tqb(c));
            a.Dc(new g.xF(1))
        },
        Qvb = function(a, b) {
            if (b) {
                var c = a.J.getOption("captions", "tracklist", {
                    DZ: 1
                });
                c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0)
            } else a.J.setOption("captions", "track", {})
        },
        l9 = function(a) {
            return O8(a.Gc).videoId === a.J.getVideoData(1).videoId
        },
        n9 = function() {
            g.T.call(this, {
                I: "div",
                S: "ytp-mdx-popup-dialog",
                X: {
                    role: "dialog"
                },
                V: [{
                    I: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    V: [{
                        I: "div",
                        S: "ytp-mdx-popup-title",
                        va: "You're signed out"
                    }, {
                        I: "div",
                        S: "ytp-mdx-popup-description",
                        va: "Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        I: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        V: [{
                            I: "button",
                            La: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            va: "Cancel"
                        }, {
                            I: "button",
                            La: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            va: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.by(this, 250);
            this.cancelButton = this.Ea("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ea("ytp-mdx-privacy-popup-confirm");
            g.P(this, this.j);
            this.T(this.cancelButton, "click", this.B);
            this.T(this.confirmButton, "click", this.C)
        },
        o9 = function(a) {
            g.T.call(this, {
                I: "div",
                S: "ytp-remote",
                V: [{
                    I: "div",
                    S: "ytp-remote-display-status",
                    V: [{
                        I: "div",
                        S: "ytp-remote-display-status-icon",
                        V: [g.qsa()]
                    }, {
                        I: "div",
                        S: "ytp-remote-display-status-text",
                        va: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.by(this, 250);
            g.P(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.wd(a.getPlayerStateObject())
        },
        p9 = function(a, b) {
            g.uX.call(this, "Play on", 1, a, b);
            this.J = a;
            this.fv = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        Rvb = function(a) {
            g.UX.call(this, a);
            this.yq = {
                key: wrb(),
                name: "This computer"
            };
            this.Cm = null;
            this.subscriptions = [];
            this.dT = this.Gc = null;
            this.fv = [this.yq];
            this.Mt = this.yq;
            this.De = new g.xF(64);
            this.i_ = 0;
            this.zi = -1;
            this.gH = !1;
            this.fH = this.ZB = null;
            if (!g.QO(this.player.U()) && !g.Hy(this.player.U())) {
                a = this.player;
                var b = g.pR(a);
                b && (b = b.Qm()) && (b = new p9(a, b), g.P(this, b));
                b = new o9(a);
                g.P(this, b);
                g.IR(a, b.element, 4);
                this.ZB = new n9;
                g.P(this, this.ZB);
                g.IR(a, this.ZB.element, 4);
                this.gH = !!e9()
            }
        },
        n$ = function(a) {
            a.fH && (a.player.removeEventListener("presentingplayerstatechange",
                a.fH), a.fH = null)
        },
        Svb = function(a, b, c) {
            a.De = c;
            a.player.publish("presentingplayerstatechange", new g.my(c, b))
        },
        p$ = function(a, b) {
            if (b.key !== a.Mt.key)
                if (b.key === a.yq.key) i9();
                else if (Mvb(a) && Tvb(a), a.Mt = b, !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.Hy(a.player.U())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (a.player.getAppState() === 2 || a.player.getAppState() === 1) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++) h[l] = g.RX(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Fa,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: f === 0 ? void 0 : f
                    };
                    (d = Tqb(d)) && (a.locationInfo = d);
                    d = a
                }
                b9("Connecting to: " + g.Ci(b));
                b.key == "cast-selector-receiver" ? (d9(d || null), b = d || null, F8() ? D8().setLaunchParams(b) : C8("setLaunchParams called before ready.")) : !d && Hvb() && a9() == b.key ? s7("yt-remote-connection-change", !0) : (i9(), d9(d || null), d = $8().Hl(), (b = n7(d, b.key)) && j9(b, 1))
            }
        },
        Mvb = function(a) {
            var b = a.player.U();
            return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.gH || !a.ZB ? !1 : g.dP(b) || g.fP(b)
        },
        Tvb = function(a) {
            a.player.getPlayerStateObject().isPlaying() ? a.player.pauseVideo() : (a.fH = function(b) {
                !a.gH && g.oy(b, 8) && (a.player.pauseVideo(), n$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.fH));
            a.ZB && a.ZB.md();
            g9() || (k9 = !0)
        };
    g.k = i7.prototype;
    g.k.Rm = function() {
        j7(this);
        for (var a = [], b = 0; b < this.j.length; b++) a.push(this.B[this.j[b]]);
        return a
    };
    g.k.po = function() {
        j7(this);
        return this.j.concat()
    };
    g.k.has = function(a) {
        return h7(this.B, a)
    };
    g.k.isEmpty = function() {
        return this.size == 0
    };
    g.k.clear = function() {
        this.B = {};
        this.Lv = this.size = this.j.length = 0
    };
    g.k.remove = function(a) {
        return this.delete(a)
    };
    g.k.delete = function(a) {
        return h7(this.B, a) ? (delete this.B[a], --this.size, this.Lv++, this.j.length > 2 * this.size && j7(this), !0) : !1
    };
    g.k.get = function(a, b) {
        return h7(this.B, a) ? this.B[a] : b
    };
    g.k.set = function(a, b) {
        h7(this.B, a) || (this.size += 1, this.j.push(a), this.Lv++);
        this.B[a] = b
    };
    g.k.forEach = function(a, b) {
        for (var c = this.po(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    g.k.clone = function() {
        return new i7(this)
    };
    g.k.keys = function() {
        return g.sp(this.Am(!0)).j()
    };
    g.k.values = function() {
        return g.sp(this.Am(!1)).j()
    };
    g.k.entries = function() {
        var a = this;
        return lrb(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    g.k.Am = function(a) {
        j7(this);
        var b = 0,
            c = this.Lv,
            d = this,
            e = new g.cn;
        e.next = function() {
            if (c != d.Lv) throw Error("The map has changed since the iterator was created");
            if (b >= d.j.length) return g.q1;
            var f = d.j[b++];
            return g.dn(a ? f : d.B[f])
        };
        return e
    };
    var qrb = {
            Lga: "atp",
            kla: "ska",
            Dka: "que",
            Pja: "mus",
            ila: "sus",
            tia: "dsp",
            Ska: "seq",
            Gja: "mic",
            Fha: "dpa",
            Sga: "cds",
            Nja: "mlm",
            Dha: "dsdtr",
            Wja: "ntb",
            Wla: "vsp",
            Qha: "scn",
            Fka: "rpe",
            Aha: "dcn",
            Bha: "dcp",
            mka: "pas",
            Cha: "drq",
            bka: "opf",
            Pha: "els",
            Xka: "svq",
            Oja: "mvp"
        },
        rrb = {
            Vla: "u",
            cha: "cl",
            mja: "k",
            Jia: "i",
            sha: "cr",
            Qja: "m",
            fia: "g",
            m7: "up"
        },
        Crb = "",
        r7 = null;
    Krb.prototype.flush = function(a, b) {
        a = a === void 0 ? [] : a;
        b = b === void 0 ? !1 : b;
        if (g.sr("enable_client_streamz_web")) {
            a = g.w(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.lfa(c.value), c = {
                serializedIncrementBatch: g.We(c.j())
            }, g.it("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var t7, Srb = Mrb("loadCastFramework") || Mrb("loadCastApplicationFramework"),
        Vrb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.Za(v7, g.O);
    g.k = v7.prototype;
    g.k.m5 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.qd ? this.C = g.Ya() + this.ej : this.qd = g.Re(this.G, this.ej)
    };
    g.k.stop = function() {
        this.qd && (g.Ka.clearTimeout(this.qd), this.qd = null);
        this.C = null;
        this.j = !1;
        this.D = []
    };
    g.k.pause = function() {
        ++this.B
    };
    g.k.resume = function() {
        this.B && (--this.B, !this.B && this.j && (this.j = !1, this.K.apply(null, this.D)))
    };
    g.k.xa = function() {
        this.stop();
        v7.Uf.xa.call(this)
    };
    g.k.n5 = function() {
        this.qd && (g.Ka.clearTimeout(this.qd), this.qd = null);
        this.C ? (this.qd = g.Re(this.G, this.C - g.Ya()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D))
    };
    g.z(w7, g.O);
    g.k = w7.prototype;
    g.k.EN = function(a) {
        this.C = arguments;
        this.qd || this.B ? this.j = !0 : Xrb(this)
    };
    g.k.stop = function() {
        this.qd && (g.Ka.clearTimeout(this.qd), this.qd = null, this.j = !1, this.C = null)
    };
    g.k.pause = function() {
        this.B++
    };
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.qd || (this.j = !1, Xrb(this))
    };
    g.k.xa = function() {
        g.O.prototype.xa.call(this);
        this.stop()
    };
    x7.prototype.stringify = function(a) {
        return g.Ka.JSON.stringify(a, void 0)
    };
    x7.prototype.parse = function(a) {
        return g.Ka.JSON.parse(a, void 0)
    };
    g.Za(Yrb, g.ub);
    g.Za(Zrb, g.ub);
    var $rb = null;
    g.Za(bsb, g.ub);
    g.Za(csb, g.ub);
    g.Za(dsb, g.ub);
    B7.prototype.debug = function() {};
    B7.prototype.info = function() {};
    B7.prototype.warning = function() {};
    var lsb = {},
        ksb = {};
    g.k = C7.prototype;
    g.k.setTimeout = function(a) {
        this.eb = a
    };
    g.k.p5 = function(a) {
        a = a.target;
        var b = this.Va;
        b && g.Zi(a) == 3 ? b.EN() : this.sV(a)
    };
    g.k.sV = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.Zi(this.j),
                    c = this.j.B,
                    d = this.j.getStatus();
                if (!(b < 3) && (b != 3 || this.j && (this.B.B || g.aj(this.j) || g.bj(this.j)))) {
                    this.Ka || b != 4 || c == 7 || (c == 8 || d <= 0 ? y7(3) : y7(2));
                    osb(this);
                    var e = this.j.getStatus();
                    this.Jb = e;
                    var f = jsb(this);
                    if (this.K = e == 200) {
                        if (this.Bb && !this.Ua) {
                            b: {
                                if (this.j) {
                                    var h = g.cj(this.j, "X-HTTP-Initial-Response");
                                    if (h && !g.wb(h)) {
                                        var l = h;
                                        break b
                                    }
                                }
                                l = null
                            }
                            if (a = l) this.Ua = !0,
                            xsb(this, a);
                            else {
                                this.K = !1;
                                this.G = 3;
                                z7(12);
                                E7(this);
                                F7(this);
                                break a
                            }
                        }
                        if (this.Fa) {
                            a = !0;
                            for (var m; !this.Ka && this.N < f.length;)
                                if (m = msb(this, f), m == ksb) {
                                    b == 4 && (this.G = 4, z7(14), a = !1);
                                    break
                                } else if (m == lsb) {
                                this.G = 4;
                                z7(15);
                                a = !1;
                                break
                            } else xsb(this, m);
                            isb(this) && this.N != 0 && (this.B.j = this.B.j.slice(this.N), this.N = 0);
                            b != 4 || f.length != 0 || this.B.B || (this.G = 1, z7(16), a = !1);
                            this.K = this.K && a;
                            a ? f.length > 0 && !this.Kb && (this.Kb = !0, this.C.lS(this)) : (E7(this), F7(this))
                        } else xsb(this, f);
                        b == 4 && E7(this);
                        this.K && !this.Ka && (b == 4 ? psb(this.C, this) : (this.K = !1, D7(this)))
                    } else g.cga(this.j), e == 400 && f.indexOf("Unknown SID") >
                        0 ? (this.G = 3, z7(12)) : (this.G = 0, z7(13)), E7(this), F7(this)
                }
            }
        } catch (n) {} finally {}
    };
    g.k.cancel = function() {
        this.Ka = !0;
        E7(this)
    };
    g.k.o5 = function() {
        this.oa = null;
        var a = Date.now();
        a - this.qb >= 0 ? (this.Qa != 2 && (y7(3), z7(17)), E7(this), this.G = 2, F7(this)) : nsb(this, this.qb - a)
    };
    g.k.getLastError = function() {
        return this.G
    };
    g.k.zQ = function() {
        return this.j
    };
    zsb.prototype.cancel = function() {
        this.C = Bsb(this);
        if (this.B) this.B.cancel(), this.B = null;
        else if (this.j && this.j.size !== 0) {
            for (var a = g.w(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = Gsb.prototype;
    g.k.tV = 8;
    g.k.Wh = 1;
    g.k.connect = function(a, b, c, d) {
        z7(0);
        this.Sb = a;
        this.Ka = b || {};
        c && d !== void 0 && (this.Ka.OSID = c, this.Ka.OAID = d);
        this.Ua = this.vc;
        this.Ma = usb(this, null, this.Sb);
        J7(this)
    };
    g.k.disconnect = function() {
        Isb(this);
        if (this.Wh == 3) {
            var a = this.Xa++,
                b = this.Ma.clone();
            g.tk(b, "SID", this.D);
            g.tk(b, "RID", a);
            g.tk(b, "TYPE", "terminate");
            M7(this, b);
            a = new C7(this, this.D, a);
            a.Qa = 2;
            a.Z = d7(b.clone());
            b = !1;
            if (g.Ka.navigator && g.Ka.navigator.sendBeacon) try {
                b = g.Ka.navigator.sendBeacon(a.Z.toString(), "")
            } catch (c) {}!b && g.Ka.Image && ((new Image).src = a.Z, b = !0);
            b || (a.j = hsb(a.C, null), a.j.send(a.Z));
            a.Ba = Date.now();
            D7(a)
        }
        Osb(this)
    };
    g.k.Og = function() {
        return this.Wh == 0
    };
    g.k.getState = function() {
        return this.Wh
    };
    g.k.vV = function(a) {
        if (this.K)
            if (this.K = null, this.Wh == 1) {
                if (!a) {
                    this.Xa = Math.floor(Math.random() * 1E5);
                    a = this.Xa++;
                    var b = new C7(this, "", a),
                        c = this.Y;
                    this.Jb && (c ? (c = g.Kc(c), g.Mc(c, this.Jb)) : c = this.Jb);
                    this.N !== null || this.qb || (b.Ma = c, c = null);
                    var d;
                    if (this.xb) a: {
                        for (var e = d = 0; e < this.C.length; e++) {
                            b: {
                                var f = this.C[e];
                                if ("__data__" in f.map && (f = f.map.__data__, typeof f === "string")) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (f === void 0) break;d += f;
                            if (d > 4096) {
                                d = e;
                                break a
                            }
                            if (d === 4096 || e === this.C.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = Lsb(this, b, d);
                    e = this.Ma.clone();
                    g.tk(e, "RID", a);
                    g.tk(e, "CVER", 22);
                    this.Fa && g.tk(e, "X-HTTP-Session-Id", this.Fa);
                    M7(this, e);
                    c && (this.qb ? d = "headers=" + g.Vd(g.dha(c)) + "&" + d : this.N && g.xk(e, this.N, c));
                    tsb(this.B, b);
                    this.Wf && g.tk(e, "TYPE", "init");
                    this.xb ? (g.tk(e, "$req", d), g.tk(e, "SID", "null"), b.Bb = !0, gsb(b, e, null)) : gsb(b, e, d);
                    this.Wh = 2
                }
            } else this.Wh == 3 && (a ? Msb(this, a) : this.C.length == 0 || Asb(this.B) || Msb(this))
    };
    g.k.uV = function() {
        this.Z = null;
        Nsb(this);
        if (this.wc && !(this.eb || this.j == null || this.Uc <= 0)) {
            var a = 2 * this.Uc;
            this.Da = A7((0, g.Wa)(this.Jaa, this), a)
        }
    };
    g.k.Jaa = function() {
        this.Da && (this.Da = null, this.Ua = !1, this.eb = !0, z7(10), H7(this), Nsb(this))
    };
    g.k.lS = function(a) {
        this.j == a && this.wc && !this.eb && (Hsb(this), this.eb = !0, z7(11))
    };
    g.k.q5 = function() {
        this.oa != null && (this.oa = null, H7(this), rsb(this), z7(19))
    };
    g.k.Yea = function(a) {
        a ? z7(2) : z7(1)
    };
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    };
    g.k = Qsb.prototype;
    g.k.zV = function() {};
    g.k.yV = function() {};
    g.k.xV = function() {};
    g.k.wV = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.r5 = function() {};
    g.Za(O7, g.ad);
    O7.prototype.open = function() {
        this.j.G = this.C;
        this.K && (this.j.Qa = !0);
        this.j.connect(this.G, this.B || void 0)
    };
    O7.prototype.close = function() {
        this.j.disconnect()
    };
    O7.prototype.send = function(a) {
        var b = this.j;
        if (typeof a === "string") {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.Ci(a), a = c);
        b.C.push(new ysb(b.Ch++, a));
        b.Wh == 3 && J7(b)
    };
    O7.prototype.xa = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        O7.Uf.xa.call(this)
    };
    g.Za(Ssb, Yrb);
    g.Za(Tsb, Zrb);
    g.Za(N7, Qsb);
    N7.prototype.zV = function() {
        this.j.dispatchEvent("m")
    };
    N7.prototype.yV = function(a) {
        this.j.dispatchEvent(new Ssb(a))
    };
    N7.prototype.xV = function(a) {
        this.j.dispatchEvent(new Tsb(a))
    };
    N7.prototype.wV = function() {
        this.j.dispatchEvent("n")
    };
    var Q7 = new g.ad;
    g.z(Wsb, g.ub);
    g.k = S7.prototype;
    g.k.Yv = null;
    g.k.qt = !1;
    g.k.wz = null;
    g.k.GN = null;
    g.k.uD = null;
    g.k.CI = null;
    g.k.rD = null;
    g.k.BI = null;
    g.k.cw = null;
    g.k.wj = null;
    g.k.FI = 0;
    g.k.v3 = null;
    g.k.DI = null;
    g.k.Zv = null;
    g.k.tD = -1;
    g.k.s2 = !0;
    g.k.sD = !1;
    g.k.FN = 0;
    g.k.AI = null;
    var btb = {},
        atb = {};
    g.k = S7.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.t5 = function(a) {
        a = a.target;
        var b = this.AI;
        b && g.Zi(a) == 3 ? b.EN() : this.AV(a)
    };
    g.k.AV = function(a) {
        try {
            if (a == this.wj) a: {
                var b = g.Zi(this.wj),
                    c = this.wj.B,
                    d = this.wj.getStatus();
                if (g.tc && !g.sc("420+")) {
                    if (b < 4) break a
                } else if (b < 3 || b == 3 && !g.aj(this.wj)) break a;this.sD || b != 4 || c == 7 || (c == 8 || d <= 0 ? this.j.As(3) : this.j.As(2));etb(this);
                var e = this.wj.getStatus();this.tD = e;
                var f = g.aj(this.wj);
                if (this.qt = e == 200) {
                    b == 4 && T7(this);
                    if (this.Fa) {
                        for (a = !0; !this.sD && this.FI < f.length;) {
                            var h = ctb(this, f);
                            if (h == atb) {
                                b == 4 && (this.Zv = 4, R7(15), a = !1);
                                break
                            } else if (h == btb) {
                                this.Zv = 4;
                                R7(16);
                                a = !1;
                                break
                            } else gtb(this,
                                h)
                        }
                        b == 4 && f.length == 0 && (this.Zv = 1, R7(17), a = !1);
                        this.qt = this.qt && a;
                        a || (T7(this), ftb(this))
                    } else gtb(this, f);
                    this.qt && !this.sD && (b == 4 ? this.j.JN(this) : (this.qt = !1, $sb(this)))
                } else e == 400 && f.indexOf("Unknown SID") > 0 ? (this.Zv = 3, R7(13)) : (this.Zv = 0, R7(14)),
                T7(this),
                ftb(this)
            }
        } catch (l) {} finally {}
    };
    g.k.cancel = function() {
        this.sD = !0;
        T7(this)
    };
    g.k.s5 = function() {
        this.wz = null;
        var a = Date.now();
        a - this.GN >= 0 ? (this.CI != 2 && this.j.As(3), T7(this), this.Zv = 2, R7(18), ftb(this)) : dtb(this, this.GN - a)
    };
    g.k.getLastError = function() {
        return this.Zv
    };
    g.k = jtb.prototype;
    g.k.IN = null;
    g.k.rl = null;
    g.k.tM = !1;
    g.k.KN = null;
    g.k.pm = null;
    g.k.wr = -1;
    g.k.GI = null;
    g.k.xE = null;
    g.k.connect = function(a) {
        this.KN = a;
        a = V7(this.j, null, this.KN);
        R7(3);
        Date.now();
        var b = this.j.Y;
        b != null ? (this.GI = b[0], (this.xE = b[1]) ? (this.pm = 1, ktb(this)) : (this.pm = 2, ltb(this))) : (e7(a, "MODE", "init"), this.rl = new S7(this), this.rl.Yv = this.IN, Zsb(this.rl, a, !1, null, !0), this.pm = 0)
    };
    g.k.J7 = function(a) {
        if (a) this.pm = 2, ltb(this);
        else {
            R7(4);
            var b = this.j;
            b.zp = b.Kt.wr;
            Z7(b, 9)
        }
        a && this.As(2)
    };
    g.k.HN = function(a) {
        return this.j.HN(a)
    };
    g.k.abort = function() {
        this.rl && (this.rl.cancel(), this.rl = null);
        this.wr = -1
    };
    g.k.Og = function() {
        return !1
    };
    g.k.BV = function(a, b) {
        this.wr = a.tD;
        if (this.pm == 0)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.zp = this.wr;
                    Z7(a, 2);
                    return
                }
                this.GI = c[0];
                this.xE = c[1]
            } else a = this.j, a.zp = this.wr, Z7(a, 2);
        else this.pm == 2 && (this.tM ? (R7(7), Date.now()) : b == "11111" ? (R7(6), this.tM = !0, Date.now(), this.wr = 200, this.rl.cancel(), R7(12), W7(this.j, this, !0)) : (R7(8), Date.now(), this.tM = !1))
    };
    g.k.JN = function() {
        this.wr = this.rl.tD;
        if (this.rl.qt) this.pm == 0 ? this.xE ? (this.pm = 1, ktb(this)) : (this.pm = 2, ltb(this)) : this.pm == 2 && (this.tM ? (R7(12), W7(this.j, this, !0)) : (R7(11), W7(this.j, this, !1)));
        else {
            this.pm == 0 ? R7(9) : this.pm == 2 && R7(10);
            var a = this.j;
            this.rl.getLastError();
            a.zp = this.wr;
            Z7(a, 2)
        }
    };
    g.k.vD = function() {
        return this.j.vD()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.As = function(a) {
        this.j.As(a)
    };
    g.k = mtb.prototype;
    g.k.yp = null;
    g.k.wD = null;
    g.k.Ak = null;
    g.k.Xg = null;
    g.k.MN = null;
    g.k.HI = null;
    g.k.CV = null;
    g.k.LN = null;
    g.k.xD = 0;
    g.k.v5 = 0;
    g.k.Vi = null;
    g.k.ut = null;
    g.k.xr = null;
    g.k.ew = null;
    g.k.Kt = null;
    g.k.qN = null;
    g.k.zz = -1;
    g.k.EV = -1;
    g.k.zp = -1;
    g.k.yz = 0;
    g.k.xz = 0;
    g.k.dw = 8;
    g.Za(otb, g.ub);
    g.Za(ptb, g.ub);
    g.k = mtb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        R7(0);
        this.MN = b;
        this.wD = c || {};
        d && e !== void 0 && (this.wD.OSID = d, this.wD.OAID = e);
        this.Z ? (P7((0, g.Wa)(this.OX, this, a), 100), rtb(this)) : this.OX(a)
    };
    g.k.disconnect = function() {
        stb(this);
        if (this.j == 3) {
            var a = this.xD++,
                b = this.HI.clone();
            g.tk(b, "SID", this.D);
            g.tk(b, "RID", a);
            g.tk(b, "TYPE", "terminate");
            Y7(this, b);
            a = new S7(this, this.D, a);
            a.CI = 2;
            a.rD = d7(b.clone());
            (new Image).src = a.rD.toString();
            a.uD = Date.now();
            $sb(a)
        }
        Ctb(this)
    };
    g.k.OX = function(a) {
        this.Kt = new jtb(this);
        this.Kt.IN = this.yp;
        this.Kt.B = this.G;
        this.Kt.connect(a)
    };
    g.k.Og = function() {
        return this.j == 0
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.GV = function(a) {
        this.ut = null;
        xtb(this, a)
    };
    g.k.FV = function() {
        this.xr = null;
        this.Xg = new S7(this, this.D, "rpc", this.N);
        this.Xg.Yv = this.yp;
        this.Xg.FN = 0;
        var a = this.CV.clone();
        g.tk(a, "RID", "rpc");
        g.tk(a, "SID", this.D);
        g.tk(a, "CI", this.qN ? "0" : "1");
        g.tk(a, "AID", this.zz);
        Y7(this, a);
        g.tk(a, "TYPE", "xmlhttp");
        Zsb(this.Xg, a, !0, this.LN, !1)
    };
    g.k.BV = function(a, b) {
        if (this.j != 0 && (this.Xg == a || this.Ak == a))
            if (this.zp = a.tD, this.Ak == a && this.j == 3)
                if (this.dw > 7) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && c.length == 3)
                        if (a = c, a[0] == 0) a: {
                            if (!this.xr) {
                                if (this.Xg)
                                    if (this.Xg.uD + 3E3 < this.Ak.uD) X7(this), this.Xg.cancel(), this.Xg = null;
                                    else break a;
                                Atb(this);
                                R7(19)
                            }
                        }
                    else this.EV = a[1], 0 < this.EV - this.zz && a[2] < 37500 && this.qN && this.xz == 0 && !this.ew && (this.ew = P7((0, g.Wa)(this.w5, this), 6E3));
                    else Z7(this, 11)
                } else b != null && Z7(this, 11);
        else if (this.Xg ==
            a && X7(this), !g.wb(b))
            for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.zz = c[0], c = c[1], this.j == 2 ? c[0] == "c" ? (this.D = c[1], this.LN = c[2], c = c[3], c != null ? this.dw = c : this.dw = 6, this.j = 3, this.Vi && this.Vi.JV(), this.CV = V7(this, this.vD() ? this.LN : null, this.MN), ytb(this)) : c[0] == "stop" && Z7(this, 7) : this.j == 3 && (c[0] == "stop" ? Z7(this, 7) : c[0] != "noop" && this.Vi && this.Vi.IV(c), this.xz = 0)
    };
    g.k.w5 = function() {
        this.ew != null && (this.ew = null, this.Xg.cancel(), this.Xg = null, Atb(this), R7(20))
    };
    g.k.JN = function(a) {
        if (this.Xg == a) {
            X7(this);
            this.Xg = null;
            var b = 2
        } else if (this.Ak == a) this.Ak = null, b = 1;
        else return;
        this.zp = a.tD;
        if (this.j != 0)
            if (a.qt)
                if (b == 1) {
                    b = a.cw ? a.cw.length : 0;
                    a = Date.now() - a.uD;
                    var c = Q7;
                    c.dispatchEvent(new otb(c, b, a, this.yz));
                    qtb(this);
                    this.C.length = 0
                } else ytb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = c == 3 || c == 7 || c == 0 && this.zp > 0)) {
                if (d = b == 1) this.Ak || this.ut || this.j == 1 || this.yz >= 2 ? d = !1 : (this.ut = P7((0, g.Wa)(this.GV, this, a), ztb(this, this.yz)), this.yz++, d = !0);
                d = !(d || b == 2 && Atb(this))
            }
            if (d) switch (c) {
                case 1:
                    Z7(this,
                        5);
                    break;
                case 4:
                    Z7(this, 10);
                    break;
                case 3:
                    Z7(this, 6);
                    break;
                case 7:
                    Z7(this, 12);
                    break;
                default:
                    Z7(this, 2)
            }
        }
    };
    g.k.u5 = function(a) {
        if (!g.Ub(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.Xea = function(a) {
        a ? R7(2) : (R7(1), Btb(this, 8))
    };
    g.k.HN = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Wi;
        a.K = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Vi && this.Vi.isActive(this)
    };
    g.k.As = function(a) {
        var b = Q7;
        b.dispatchEvent(new ptb(b, a))
    };
    g.k.vD = function() {
        return !1
    };
    g.k = Dtb.prototype;
    g.k.JV = function() {};
    g.k.IV = function() {};
    g.k.HV = function() {};
    g.k.NN = function() {};
    g.k.KV = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = Etb.prototype;
    g.k.enqueue = function(a) {
        this.B.push(a)
    };
    g.k.isEmpty = function() {
        return this.j.length === 0 && this.B.length === 0
    };
    g.k.clear = function() {
        this.j = [];
        this.B = []
    };
    g.k.contains = function(a) {
        return g.Ub(this.j, a) || g.Ub(this.B, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.K9a)(b, a);
        c >= 0 ? (g.Vb(b, c), b = !0) : b = !1;
        return b || g.Wb(this.B, a)
    };
    g.k.Rm = function() {
        for (var a = [], b = this.j.length - 1; b >= 0; --b) a.push(this.j[b]);
        var c = this.B.length;
        for (b = 0; b < c; ++b) a.push(this.B[b]);
        return a
    };
    g.z(Ftb, g.ub);
    g.z(Gtb, g.ub);
    g.Za($7, g.O);
    g.k = $7.prototype;
    g.k.Oca = function() {
        this.ej = Math.min(3E5, this.ej * 2);
        this.C();
        this.B && this.start()
    };
    g.k.start = function() {
        var a = this.ej + 15E3 * Math.random();
        g.Zo(this.j, a);
        this.B = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.ej = 5E3
    };
    g.Za(Itb, Dtb);
    g.k = Itb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    };
    g.k.Ah = function(a) {
        return this.C.Ah(a)
    };
    g.k.publish = function(a, b) {
        return this.C.publish.apply(this.C, arguments)
    };
    g.k.dispose = function() {
        this.oa || (this.oa = !0, g.pb(this.C), this.disconnect(), g.pb(this.B), this.B = null, this.qa = function() {
            return ""
        })
    };
    g.k.Ja = function() {
        return this.oa
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || this.j.getState() != 2) {
            this.Y = "";
            this.B.stop();
            this.K = a || null;
            this.G = b || 0;
            a = this.Ba + "/test";
            b = this.Ba + "/bind";
            var d = new mtb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Qa),
                e = this.j;
            e && (e.Vi = null);
            d.Vi = this;
            this.j = d;
            Jtb(this);
            if (this.j) {
                d = g.Tq("ID_TOKEN");
                var f = this.j.yp || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.yp = f
            }
            e ? (e.getState() != 3 && utb(e) == 0 || e.getState(), this.j.connect(a, b, this.N, e.D, e.zz)) : c ? this.j.connect(a,
                b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N)
        }
    };
    g.k.disconnect = function(a) {
        this.Z = a || 0;
        this.B.stop();
        Jtb(this);
        this.j && (this.j.getState() == 3 && xtb(this.j), this.j.disconnect());
        this.Z = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.Mc(a, b);
        this.B.isActive() || (this.j ? this.j.getState() : 0) == 2 ? this.D.push(a) : this.RA() && (Jtb(this), ttb(this.j, a))
    };
    g.k.JV = function() {
        this.B.reset();
        this.K = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b) ttb(this.j, a[b])
        }
        this.publish("handlerOpened");
        crb(this.Ma, "BROWSER_CHANNEL")
    };
    g.k.HV = function(a) {
        var b = a == 2 && this.j.zp == 401;
        a == 4 || b || this.B.start();
        this.publish("handlerError", a, b);
        irb(this.Fa, "BROWSER_CHANNEL")
    };
    g.k.NN = function(a, b) {
        if (!this.B.isActive()) this.publish("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.D.push(e)
            }
        erb(this.Da, "BROWSER_CHANNEL");
        a && this.Va.j.PN("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.Xa.j.PN("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.KV = function() {
        var a = {
            v: 2
        };
        this.Y && (a.gsessionid = this.Y);
        this.G != 0 && (a.ui = "" + this.G);
        this.Z != 0 && (a.ui = "" + this.Z);
        this.K && g.Mc(a, this.K);
        return a
    };
    g.k.IV = function(a) {
        a[0] == "S" ? this.Y = a[1] : a[0] == "gracefulReconnect" ? (this.B.start(), this.j.disconnect()) : this.publish("handlerMessage", new Htb(a[0], a[1]));
        grb(this.Ka, "BROWSER_CHANNEL")
    };
    g.k.RA = function() {
        return !!this.j && this.j.getState() == 3
    };
    g.k.Ns = function(a) {
        (this.N.loungeIdToken = a) || this.B.stop();
        if (this.Ua && this.j) {
            var b = this.j.yp || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.yp = b
        }
    };
    g.k.getDeviceId = function() {
        return this.N.id
    };
    g.k.au = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    };
    g.k.Jy = function() {
        var a = this.B;
        g.$o(a.j);
        a.start()
    };
    g.k.fea = function() {
        this.B.isActive();
        utb(this.j) == 0 && this.connect(this.K, this.G)
    };
    a8.prototype.sendRequest = function(a, b, c, d, e, f, h) {
        a = {
            format: f ? "RAW" : "JSON",
            method: a,
            context: this,
            timeout: 5E3,
            withCredentials: !!h,
            onSuccess: g.Xa(this.D, d, !f),
            onError: g.Xa(this.C, e),
            onTimeout: g.Xa(this.G, e)
        };
        c && (a.postParams = c, a.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.xr(b, a)
    };
    a8.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    a8.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    a8.prototype.G = function(a) {
        a(Error("request timed out"))
    };
    g.z(Ktb, g.ad);
    g.k = Ktb.prototype;
    g.k.connect = function(a, b, c) {
        this.Gd.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Gd.disconnect(a)
    };
    g.k.Jy = function() {
        this.Gd.Jy()
    };
    g.k.getDeviceId = function() {
        return this.Gd.getDeviceId()
    };
    g.k.au = function() {
        return this.Gd.au()
    };
    g.k.RA = function() {
        return this.Gd.RA()
    };
    g.k.x5 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Gd,
            b = this.j;
        g.Gs("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.qN,
            sessionId: a.j.D,
            arrayId: a.j.zz
        });
        g.Gs("yt-remote-session-screen-id", b);
        a = o7();
        b = p7();
        g.Ub(a, b) || a.push(b);
        Brb(a);
        Drb()
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new Ftb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new Gtb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Gd.sendMessage(a, b)
    };
    g.k.Ns = function(a) {
        this.Gd.Ns(a)
    };
    g.k.dispose = function() {
        this.Gd.dispose()
    };
    g.k = Ltb.prototype;
    g.k.connect = function(a, b) {
        a = a === void 0 ? {} : a;
        b = b === void 0 ? 0 : b;
        this.K !== 2 && (this.C.stop(), this.Z = a, this.N = b, Ntb(this), (a = g.Tq("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.caa && (this.B.mdxVersion = "" + this.j.caa), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.a8 && (this.B.cst = this.j.a8),
            this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), this.N !== 0 ? this.B.ui = "" + this.N : delete this.B.ui, Object.assign(this.B, this.Z), this.channel = new O7(this.pathPrefix, {
            o$: "gsessionid",
            haa: this.D,
            iaa: this.B
        }), this.channel.open(), this.K = 2, Mtb(this))
    };
    g.k.disconnect = function(a) {
        this.Y = a === void 0 ? 0 : a;
        this.C.stop();
        Ntb(this);
        this.channel && (this.Y !== 0 ? this.B.ui = "" + this.Y : delete this.B.ui, this.channel.close());
        this.Y = 0
    };
    g.k.au = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    };
    g.k.Jy = function() {
        var a = this.C;
        g.$o(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (Ntb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Ns = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    };
    g.k.getDeviceId = function() {
        return this.j ? this.j.id : ""
    };
    g.k.publish = function(a) {
        return this.G.publish.apply(this.G, [a].concat(g.x(g.Da.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    };
    g.k.Ah = function(a) {
        return this.G.Ah(a)
    };
    g.k.dispose = function() {
        this.oa || (this.oa = !0, g.pb(this.G), this.disconnect(), g.pb(this.C), this.Ba = function() {
            return ""
        })
    };
    g.k.Ja = function() {
        return this.oa
    };
    g.z(Otb, g.ad);
    g.k = Otb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.Jy = function() {
        this.j.Jy()
    };
    g.k.getDeviceId = function() {
        return this.j.getDeviceId()
    };
    g.k.au = function() {
        return this.j.au()
    };
    g.k.RA = function() {
        return this.j.K === 3
    };
    g.k.y5 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new Ftb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new Gtb(this.j.Ag === 401 ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Ns = function(a) {
        this.j.Ns(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var Wtb = Date.now(),
        c8 = null,
        g8 = Array(50),
        f8 = -1,
        h8 = !1;
    g.Za(i8, g.fx);
    i8.prototype.Hl = function() {
        return this.screens
    };
    i8.prototype.contains = function(a) {
        return !!yrb(this.screens, a)
    };
    i8.prototype.get = function(a) {
        return a ? n7(this.screens, a) : null
    };
    i8.prototype.info = function(a) {
        d8(this.K, a)
    };
    g.z($tb, g.fx);
    g.k = $tb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.qd) && this.v1()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.qd) || (g.pr(this.qd), this.qd = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.fx.prototype.xa.call(this)
    };
    g.k.v1 = function() {
        this.qd = NaN;
        this.j = g.xr(b8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.N
            },
            timeout: 5E3,
            onSuccess: (0, g.Wa)(this.A5, this),
            onError: (0, g.Wa)(this.z5, this),
            onTimeout: (0, g.Wa)(this.B5, this)
        })
    };
    g.k.A5 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.K;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.publish("pairingComplete", new k7(a), b)
    };
    g.k.z5 = function(a) {
        this.j = null;
        a.status && a.status == 404 ? this.B >= Uvb.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (a = Uvb[this.B], this.qd = g.nr((0, g.Wa)(this.v1, this), a), this.B++) : this.publish("pairingFailed", Error("Server error " + a.status))
    };
    g.k.B5 = function() {
        this.j = null;
        this.publish("pairingFailed", Error("Server not responding"))
    };
    var Uvb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Za(k8, i8);
    g.k = k8.prototype;
    g.k.start = function() {
        j8(this) && this.publish("screenChange");
        !g.Hs("yt-remote-lounge-token-expiration") && aub(this);
        g.pr(this.j);
        this.j = g.nr((0, g.Wa)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        j8(this);
        Xtb(this, a);
        l8(this, !1);
        this.publish("screenChange");
        b(a);
        a.token || aub(this)
    };
    g.k.remove = function(a, b) {
        var c = j8(this);
        Ztb(this, a) && (l8(this, !1), c = !0);
        b(a);
        c && this.publish("screenChange")
    };
    g.k.pN = function(a, b, c, d) {
        var e = j8(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, l8(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.publish("screenChange")
    };
    g.k.xa = function() {
        g.pr(this.j);
        k8.Uf.xa.call(this)
    };
    g.k.O9 = function(a) {
        j8(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        l8(this, !b);
        b && d8(this.K, "Missed " + b + " lounge tokens.")
    };
    g.k.N9 = function(a) {
        d8(this.K, "Requesting lounge tokens failed: " + a)
    };
    g.z(cub, g.fx);
    g.k = cub.prototype;
    g.k.start = function() {
        var a = parseInt(g.Hs("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.Ya() - 144E5 < a ? 0 : a) ? m8(this): (this.D = g.Ya() + 3E5, g.Gs("yt-remote-fast-check-period", this.D), this.xT())
    };
    g.k.isEmpty = function() {
        return g.Hc(this.j)
    };
    g.k.update = function() {
        bub("Updating availability on schedule.");
        var a = this.K(),
            b = g.yc(this.j, function(c, d) {
                return c && !!n7(a, d)
            }, this);
        fub(this, b)
    };
    g.k.xa = function() {
        g.pr(this.C);
        this.C = NaN;
        this.B && (this.B.abort(), this.B = null);
        g.fx.prototype.xa.call(this)
    };
    g.k.xT = function() {
        g.pr(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = gub(this);
        if (Vqb(a)) {
            var b = b8(this.G, "/pairing/get_screen_availability");
            this.B = this.G.sendRequest("POST", b, {
                lounge_token: g.Dc(a).join(",")
            }, (0, g.Wa)(this.wca, this, a), (0, g.Wa)(this.vca, this))
        } else fub(this, {}), m8(this)
    };
    g.k.wca = function(a, b) {
        this.B = null;
        var c = g.Dc(gub(this));
        if (g.hc(c, g.Dc(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = b[e].status == "online";
            fub(this, c);
            m8(this)
        } else this.jg("Changing Screen set during request."), this.xT()
    };
    g.k.vca = function(a) {
        this.jg("Screen availability failed: " + a);
        this.B = null;
        m8(this)
    };
    g.k.jg = function(a) {
        d8("OnlineScreenService", a)
    };
    g.Za(n8, i8);
    g.k = n8.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.publish("screenChange"), this.j.isEmpty() || this.publish("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    };
    g.k.pN = function(a, b, c, d) {
        this.B.contains(a) ? this.B.pN(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, d8(this.K, a), d(Error(a)))
    };
    g.k.Hl = function(a) {
        return a ? this.screens : g.Yb(this.screens, g.hn(this.C, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.LV = function() {
        return g.hn(this.Hl(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.MV = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new $tb(this.D, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.pb(l);
            e(o8(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.pb(l);
            f(m)
        });
        l.start();
        return (0, g.Wa)(l.stop, l)
    };
    g.k.C5 = function(a, b, c, d) {
        g.xr(b8(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Wa)(function(e, f) {
                e = new k7(f.screen || {});
                if (!e.name || kub(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); kub(this, l);) {
                            h++;
                            if (h > 20) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(o8(this, e))
            }, this),
            onError: (0, g.Wa)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Wa)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.pb(this.B);
        g.pb(this.j);
        n8.Uf.xa.call(this)
    };
    g.k.Y9 = function() {
        mub(this);
        this.publish("screenChange");
        this.j.update()
    };
    n8.prototype.dispose = n8.prototype.dispose;
    g.Za(p8, g.fx);
    g.k = p8.prototype;
    g.k.Oj = function(a) {
        this.Ja() || (a && (r8(this, "" + a), this.publish("sessionFailed")), this.j = null, this.publish("sessionScreen", null))
    };
    g.k.info = function(a) {
        d8(this.Fa, a)
    };
    g.k.NV = function() {
        return null
    };
    g.k.QT = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Wa)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Wa)(function() {
            r8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.QT("");
        p8.Uf.xa.call(this)
    };
    g.z(s8, p8);
    g.k = s8.prototype;
    g.k.OT = function(a) {
        if (this.C) {
            if (this.C == a) return;
            r8(this, "Overriding cast session with new session object");
            yub(this);
            this.Ba = !1;
            this.Y = "unknown";
            this.C.removeUpdateListener(this.qa);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Da)
        }
        this.C = a;
        this.C.addUpdateListener(this.qa);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Da);
        tub(this, "getMdxSessionStatus")
    };
    g.k.fB = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Ci(a))
    };
    g.k.stop = function() {
        this.C ? this.C.stop((0, g.Wa)(function() {
            this.Oj()
        }, this), (0, g.Wa)(function() {
            this.Oj(Error("Failed to stop receiver app."))
        }, this)) : this.Oj(Error("Stopping cast device without session."))
    };
    g.k.QT = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        yub(this);
        this.C && (this.C.removeUpdateListener(this.qa), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Da));
        this.C = null;
        p8.prototype.xa.call(this)
    };
    g.k.dda = function(a, b) {
        if (!this.Ja())
            if (b)
                if (b = f7(b), g.Ra(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Ci(b)), a) {
                    case "mdxSessionStatus":
                        qub(this, b);
                        break;
                    case "loungeToken":
                        uub(this, b);
                        break;
                    default:
                        r8(this, "Unknown youtube message: " + a)
                } else r8(this, "Unable to parse message.");
                else r8(this, "No data in message.")
    };
    g.k.VY = function(a, b, c, d) {
        g.pr(this.Z);
        this.Z = 0;
        jub(this.D, this.B.label, a, this.B.friendlyName, (0, g.Wa)(function(e) {
            e ? b(e) : d >= 0 ? (r8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.Z = g.nr((0, g.Wa)(this.VY, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.NV = function() {
        return this.C
    };
    g.k.D5 = function(a) {
        this.Ja() || a || (r8(this, "Cast session died."), this.Oj())
    };
    g.z(t8, p8);
    g.k = t8.prototype;
    g.k.OT = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.Ka)
    };
    g.k.fB = function(a) {
        this.Ma = a;
        this.oa()
    };
    g.k.stop = function() {
        Gub(this);
        this.C ? this.C.stop((0, g.Wa)(this.Oj, this, null), (0, g.Wa)(this.Oj, this, "Failed to stop DIAL device.")) : this.Oj()
    };
    g.k.xa = function() {
        Gub(this);
        this.C && this.C.removeUpdateListener(this.Ka);
        this.C = null;
        p8.prototype.xa.call(this)
    };
    g.k.E5 = function(a) {
        this.Ja() || a || (r8(this, "DIAL session died."), this.G(), this.G = function() {}, this.Oj())
    };
    g.z(w8, p8);
    w8.prototype.stop = function() {
        this.Oj()
    };
    w8.prototype.OT = function() {};
    w8.prototype.fB = function() {
        g.pr(this.C);
        this.C = NaN;
        var a = n7(this.D.Hl(), this.B.label);
        a ? q8(this, a) : this.Oj(Error("No such screen"))
    };
    w8.prototype.xa = function() {
        g.pr(this.C);
        this.C = NaN;
        p8.prototype.xa.call(this)
    };
    g.z(x8, g.fx);
    g.k = x8.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.Z, [chrome.cast.Capability.AUDIO_OUT]);
        g.sr("desktop_enable_cast_connect") && (c.androidReceiverCompatible = !0);
        this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Wa)(this.dca, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Wa)(this.M0,
            this), e, d, a);
        c.customDialLaunchCallback = (0, g.Wa)(this.Waa, this);
        chrome.cast.initialize(c, (0, g.Wa)(function() {
            this.Ja() || (chrome.cast.addReceiverActionListener(this.G), Ttb(), this.B.subscribe("onlineScreenChange", (0, g.Wa)(this.OV, this)), this.C = Jub(this), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Wa)(function(f) {
                this.jg("Failed to set initial custom receivers: " + g.Ci(f))
            }, this)), this.publish("yt-remote-cast2-availability-change", z8(this)), b(!0))
        }, this), (0, g.Wa)(function(f) {
            this.jg("Failed to initialize API: " +
                g.Ci(f));
            b(!1)
        }, this))
    };
    g.k.sea = function(a, b) {
        y8("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) y8("Unsetting old screen status: " + this.j.B.friendlyName), A8(this, null)
        }
        if (a && b) {
            if (!this.j) {
                a = n7(this.B.Hl(), a);
                if (!a) {
                    y8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if (a.idType == "shortLived") {
                    y8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                c = Hub(this, a);
                c || (y8("setConnectedScreenStatus: Connected receiver not custom..."), c = new chrome.cast.Receiver(a.uuid ?
                    a.uuid : a.id, a.name), c.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(c), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Wa)(function(d) {
                    this.jg("Failed to set initial custom receivers: " + g.Ci(d))
                }, this)));
                y8("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
                A8(this, new w8(this.B, c), !0)
            }
            this.j.QT(b)
        } else y8("setConnectedScreenStatus: no screen.")
    };
    g.k.vea = function(a) {
        this.Ja() ? this.jg("Setting connection data on disposed cast v2") : this.j ? this.j.fB(a) : this.jg("Setting connection data without a session")
    };
    g.k.G5 = function() {
        this.Ja() ? this.jg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), A8(this, null)) : y8("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.Wa)(this.M0, this), (0, g.Wa)(this.zca, this))
    };
    g.k.xa = function() {
        this.B.unsubscribe("onlineScreenChange", (0, g.Wa)(this.OV, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = Qtb,
            b = g.Ma("yt.mdx.remote.debug.handlers_");
        g.Wb(b || [], a);
        g.pb(this.j);
        g.fx.prototype.xa.call(this)
    };
    g.k.jg = function(a) {
        d8("Controller", a)
    };
    g.k.O0 = function(a, b) {
        this.j == a && (b || A8(this, null), this.publish("yt-remote-cast2-session-change", b))
    };
    g.k.aca = function(a, b) {
        if (!this.Ja())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), y8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label) y8("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();
                        else {
                            y8("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.publish("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            A8(this,
                                new w8(this.B, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            A8(this, new t8(this.B, a, this.D, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            A8(this, new s8(this.B, a, this.config_));
                            break;
                        default:
                            this.jg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.jg("Stopping receiver w/o session: " + a.friendlyName)
            } else this.jg("onReceiverAction_ called without receiver.")
    };
    g.k.Waa = function(a) {
        if (this.Ja()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.jg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label) return this.jg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return y8("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.jg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            A8(this, new t8(this.B, b, this.D, this.config_))
        }
        b = this.j;
        b.Z = a;
        b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {}, c = a.screenId || null, u8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = Dub(b, {
            name: b.B.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.Z.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.Wq(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = Eub(b, c)) : a = Eub(b, c)) : a = Bub(b);
        return a
    };
    g.k.M0 = function(a) {
        var b = this;
        if (!this.Ja() && !this.K) {
            y8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) y8("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), A8(this, new s8(this.B, c, this.config_), !0);
                    else {
                        this.jg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B,
                    e = n7(this.B.Hl(),
                        d.label);
                e && l7(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (y8("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.pb(this.j), this.j = new s8(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Wa)(this.O0, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return Iub(b, b.j)
                }), this.j.fB(null));
                this.j.OT(a)
            }
        }
    };
    g.k.F5 = function() {
        return this.j ? this.j.NV() : null
    };
    g.k.zca = function(a) {
        this.Ja() || (this.jg("Failed to estabilish a session: " + g.Ci(a)), a.code != chrome.cast.ErrorCode.CANCEL && A8(this, null), this.publish("yt-remote-cast2-session-failed"))
    };
    g.k.dca = function(a) {
        y8("Receiver availability updated: " + a);
        if (!this.Ja()) {
            var b = z8(this);
            this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            z8(this) != b && this.publish("yt-remote-cast2-availability-change", z8(this))
        }
    };
    g.k.OV = function() {
        this.Ja() || (this.C = Jub(this), y8("Updating custom receivers: " + g.Ci(this.C)), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Wa)(function() {
            this.jg("Failed to set custom receivers.")
        }, this)), this.publish("yt-remote-cast2-availability-change", z8(this)))
    };
    x8.prototype.setLaunchParams = x8.prototype.vea;
    x8.prototype.setConnectedScreenStatus = x8.prototype.sea;
    x8.prototype.stopSession = x8.prototype.G5;
    x8.prototype.getCastSession = x8.prototype.F5;
    x8.prototype.requestSession = x8.prototype.requestSession;
    x8.prototype.init = x8.prototype.init;
    x8.prototype.dispose = x8.prototype.dispose;
    var Sub = [];
    g.k = H8.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        Yub(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.fq = a.hasPrevious, this.Kl = a.hasNext, this.N = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.Z = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C))
    };
    g.k.isPlaying = function() {
        return this.playerState == 1
    };
    g.k.isBuffering = function() {
        return this.playerState == 3
    };
    g.k.Ml = function() {
        return this.playerState == 1081
    };
    g.k.Tq = function(a) {
        this.G = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.B ? this.G + I8(this) : this.G
    };
    g.k.clone = function() {
        return new H8(Zub(this))
    };
    g.z(N8, g.fx);
    g.k = N8.prototype;
    g.k.getState = function() {
        return this.C
    };
    g.k.au = function() {
        return this.D.getReconnectTimeout()
    };
    g.k.Jy = function() {
        this.D.reconnect()
    };
    g.k.play = function() {
        P8(this) ? (this.j ? this.j.play(null, g.ed, T8(this, "play")) : S8(this, "play"), bvb(this, 1, K8(O8(this))), this.publish("remotePlayerChange")) : Q8(this, this.play)
    };
    g.k.pause = function() {
        P8(this) ? (this.j ? this.j.pause(null, g.ed, T8(this, "pause")) : S8(this, "pause"), bvb(this, 2, K8(O8(this))), this.publish("remotePlayerChange")) : Q8(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (P8(this)) {
            if (this.j) {
                var b = O8(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || b.isBuffering() ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.ed, T8(this, "seekTo", {
                    newTime: a
                }))
            } else S8(this, "seekTo", {
                newTime: a
            });
            bvb(this, 3, a);
            this.publish("remotePlayerChange")
        } else Q8(this, g.Xa(this.seekTo, a))
    };
    g.k.stop = function() {
        if (P8(this)) {
            this.j ? this.j.stop(null, g.ed, T8(this, "stopVideo")) : S8(this, "stopVideo");
            var a = O8(this);
            a.index = -1;
            a.videoId = "";
            Yub(a);
            R8(this, a);
            this.publish("remotePlayerChange")
        } else Q8(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (P8(this)) {
            var c = O8(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0, g.Wa)(function() {
                        e8("set receiver volume: " + d)
                    }, this), (0, g.Wa)(function() {
                        this.jg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0, g.Wa)(function() {
                    e8("set receiver muted: " + b)
                }, this), (0, g.Wa)(function() {
                    this.jg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                };
                c.volume != -1 && (e.delta = a - c.volume);
                S8(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            R8(this, c)
        } else Q8(this, g.Xa(this.setVolume, a, b))
    };
    g.k.PV = function(a, b) {
        if (P8(this)) {
            var c = O8(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Ci(b.style), g.Mc(a, c.trackData));
            S8(this, "setSubtitlesTrack", a);
            R8(this, c)
        } else Q8(this, g.Xa(this.PV, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        P8(this) ? (b = b.getLanguageInfo().getId(), S8(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = O8(this), a.audioTrackId = b, R8(this, a)) : Q8(this, g.Xa(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = d === void 0 ? null : d;
        e = e === void 0 ? null : e;
        f = f === void 0 ? null : f;
        h = h === void 0 ? null : h;
        var l = O8(this),
            m = {
                videoId: a
            };
        c !== void 0 && (m.currentIndex = c);
        L8(l, a, c || 0);
        b !== void 0 && (J8(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Ci(h));
        S8(this, "setPlaylist", m);
        d || R8(this, l)
    };
    g.k.nM = function(a, b) {
        if (P8(this)) {
            if (a && b) {
                var c = O8(this);
                L8(c, a, b);
                R8(this, c)
            }
            S8(this, "previous")
        } else Q8(this, g.Xa(this.nM, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (P8(this)) {
            if (a && b) {
                var c = O8(this);
                L8(c, a, b);
                R8(this, c)
            }
            S8(this, "next")
        } else Q8(this, g.Xa(this.nextVideo, a, b))
    };
    g.k.aP = function() {
        if (P8(this)) {
            S8(this, "clearPlaylist");
            var a = O8(this);
            a.reset();
            R8(this, a);
            this.publish("remotePlayerChange")
        } else Q8(this, this.aP)
    };
    g.k.bY = function() {
        P8(this) ? S8(this, "dismissAutoplay") : Q8(this, this.bY)
    };
    g.k.dispose = function() {
        if (this.C != 3) {
            var a = this.C;
            this.C = 3;
            this.publish("proxyStateChange", a, this.C)
        }
        g.fx.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        avb(this);
        this.D = null;
        this.G.clear();
        M8(this, null);
        g.fx.prototype.xa.call(this)
    };
    g.k.UT = function(a) {
        if ((a != this.C || a == 2) && this.C != 3 && a != 0) {
            var b = this.C;
            this.C = a;
            this.publish("proxyStateChange", b, a);
            if (a == 1)
                for (; !this.G.isEmpty();) b = a = this.G, b.j.length === 0 && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);
            else a == 3 && this.dispose()
        }
    };
    g.k.Yba = function(a, b) {
        this.publish(a, b)
    };
    g.k.Naa = function(a) {
        if (!a) this.CG(null), M8(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = O8(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) e8("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, R8(this, b)
        }
    };
    g.k.CG = function(a) {
        e8("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.Z);
        if (this.j = a) this.j.addUpdateListener(this.Z), cvb(this), this.publish("remotePlayerChange")
    };
    g.k.Maa = function(a) {
        a ? (cvb(this), this.publish("remotePlayerChange")) : this.CG(null)
    };
    g.k.DU = function() {
        S8(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.Paa = function() {
        var a = Vub();
        a && M8(this, a)
    };
    g.k.jg = function(a) {
        d8("CP", a)
    };
    g.z(W8, g.fx);
    g.k = W8.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            n !== void 0 && (m.currentTime = n <= 5 ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && e.length > 0 && (m.videoIds = e.join(","));
            l !== void 0 && (m.currentIndex = l);
            this.Ka && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            J8(this.j,
                n);
            this.G = "UNSUPPORTED";
            c = this.Ka ? "setInitialState" : "setPlaylist";
            U8("Connecting with " + c + " and params: " + g.Ci(m));
            this.B.connect({
                method: c,
                params: g.Ci(m)
            }, a, Erb())
        } else U8("Connecting without params"), this.B.connect({}, a, Erb());
        gvb(this)
    };
    g.k.Ns = function(a) {
        this.B.Ns(a)
    };
    g.k.dispose = function() {
        this.Ja() || (g.La("yt.mdx.remote.remoteClient_", null), this.publish("beforeDispose"), V8(this, 3));
        g.fx.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        hvb(this);
        jvb(this);
        ivb(this);
        g.pr(this.Z);
        this.Z = NaN;
        g.pr(this.Y);
        this.Y = NaN;
        this.D = null;
        g.ws(this.oa);
        this.oa.length = 0;
        this.B.dispose();
        g.fx.prototype.xa.call(this);
        this.G = this.N = this.C = this.j = this.B = null
    };
    g.k.UZ = function(a) {
        if (!this.C || this.C.length === 0) return !1;
        for (var b = g.w(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.v9 = function() {
        var a = 3;
        this.Ja() || (a = 0, isNaN(this.AF()) ? this.B.RA() && isNaN(this.K) && (a = 1) : a = 2);
        return a
    };
    g.k.hA = function(a) {
        U8("Disconnecting with " + a);
        g.La("yt.mdx.remote.remoteClient_", null);
        hvb(this);
        this.publish("beforeDisconnect", a);
        a == 1 && q7();
        this.B.disconnect(a);
        this.dispose()
    };
    g.k.p9 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(), L8(a, this.D, a.index));
        return Zub(a)
    };
    g.k.yea = function(a) {
        var b = this,
            c = new H8(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.pr(this.Z), this.Z = g.nr(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && X8(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && K8(this.j) == K8(c) && g.Ci(this.j.trackData) == g.Ci(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.jc(d, function(e) {
            this.publish(e)
        }, this)
    };
    g.k.QY = function() {
        var a = this.B.getDeviceId(),
            b = g.Sb(this.C, function(c) {
                return c.type == "REMOTE_CONTROL" && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.AF = function() {
        return this.B.au()
    };
    g.k.Z8 = function() {
        return this.G || "UNSUPPORTED"
    };
    g.k.a9 = function() {
        return this.N || ""
    };
    g.k.H5 = function() {
        !isNaN(this.AF()) && this.B.Jy()
    };
    g.k.pea = function(a, b) {
        X8(this, a, b);
        lvb(this)
    };
    g.k.QV = function() {
        var a = g.Ir("SAPISID", "") || g.Ir("__Secure-1PAPISID") || "",
            b = g.Ir("__Secure-3PAPISID", "") || "";
        if (!a && !b) return "";
        a = g.We(g.Ve(a), 2);
        b = g.We(g.Ve(b), 2);
        return g.We(g.Ve("," + a + "," + b), 2)
    };
    W8.prototype.subscribe = W8.prototype.subscribe;
    W8.prototype.unsubscribeByKey = W8.prototype.Ah;
    W8.prototype.getProxyState = W8.prototype.v9;
    W8.prototype.disconnect = W8.prototype.hA;
    W8.prototype.getPlayerContextData = W8.prototype.p9;
    W8.prototype.setPlayerContextData = W8.prototype.yea;
    W8.prototype.getOtherConnectedRemoteId = W8.prototype.QY;
    W8.prototype.getReconnectTimeout = W8.prototype.AF;
    W8.prototype.getAutoplayMode = W8.prototype.Z8;
    W8.prototype.getAutoplayVideoId = W8.prototype.a9;
    W8.prototype.reconnect = W8.prototype.H5;
    W8.prototype.sendMessage = W8.prototype.pea;
    W8.prototype.getXsrfToken = W8.prototype.QV;
    W8.prototype.isCapabilitySupportedOnConnectedDevices = W8.prototype.UZ;
    g.z(xvb, i8);
    g.k = xvb.prototype;
    g.k.Hl = function(a) {
        return this.jh.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.jh.$_c(a)
    };
    g.k.get = function(a) {
        return this.jh.$_g(a)
    };
    g.k.start = function() {
        this.jh.$_st()
    };
    g.k.add = function(a, b, c) {
        this.jh.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.jh.$_r(a, b, c)
    };
    g.k.pN = function(a, b, c, d) {
        this.jh.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.jh.$_ubk(this.j[a]);
        this.j.length = 0;
        this.jh = null;
        i8.prototype.xa.call(this)
    };
    g.k.I5 = function() {
        this.publish("screenChange")
    };
    g.k.Hba = function() {
        this.publish("onlineScreenChange")
    };
    n8.prototype.$_st = n8.prototype.start;
    n8.prototype.$_gspc = n8.prototype.C5;
    n8.prototype.$_gsppc = n8.prototype.MV;
    n8.prototype.$_c = n8.prototype.contains;
    n8.prototype.$_g = n8.prototype.get;
    n8.prototype.$_a = n8.prototype.add;
    n8.prototype.$_un = n8.prototype.pN;
    n8.prototype.$_r = n8.prototype.remove;
    n8.prototype.$_gs = n8.prototype.Hl;
    n8.prototype.$_gos = n8.prototype.LV;
    n8.prototype.$_s = n8.prototype.subscribe;
    n8.prototype.$_ubk = n8.prototype.Ah;
    var h9 = null,
        k9 = !1,
        Y8 = null,
        Z8 = null,
        Ivb = null,
        c9 = [];
    g.z(Nvb, g.O);
    g.k = Nvb.prototype;
    g.k.xa = function() {
        g.O.prototype.xa.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Gc;
        a.unsubscribe("proxyStateChange", this.K0, this);
        a.unsubscribe("remotePlayerChange", this.NG, this);
        a.unsubscribe("remoteQueueChange", this.TL, this);
        a.unsubscribe("previousNextChange", this.H0, this);
        a.unsubscribe("nowAutoplaying", this.D0, this);
        a.unsubscribe("autoplayDismissed", this.l0, this);
        this.Gc = this.module = null
    };
    g.k.Jl = function(a) {
        var b = g.Da.apply(1, arguments);
        if (this.Gc.C != 2)
            if (l9(this)) {
                if (!O8(this.Gc).Ml() || a !== "control_seek") switch (a) {
                    case "control_toggle_play_pause":
                        O8(this.Gc).isPlaying() ? this.Gc.pause() : this.Gc.play();
                        break;
                    case "control_play":
                        this.Gc.play();
                        break;
                    case "control_pause":
                        this.Gc.pause();
                        break;
                    case "control_seek":
                        this.K.EN(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        Pvb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.J.getCurrentTime();
                    m9(this, b === 0 ? void 0 : b);
                    break;
                case "control_seek":
                    m9(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    Pvb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.Kaa = function(a) {
        this.N.m5(a)
    };
    g.k.wfa = function(a) {
        this.Jl("control_subtitles_set_track", g.Hc(a) ? null : a)
    };
    g.k.b3 = function() {
        var a = this.J.getOption("captions", "track");
        g.Hc(a) || Pvb(this, a)
    };
    g.k.Sc = function(a) {
        this.module.Sc(a, this.J.getVideoData().lengthSeconds)
    };
    g.k.rba = function() {
        g.Hc(this.C) || Qvb(this, this.C);
        this.D = !1
    };
    g.k.K0 = function(a, b) {
        this.B.stop();
        b === 2 && this.T2()
    };
    g.k.NG = function() {
        if (l9(this)) {
            this.j.stop();
            var a = O8(this.Gc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.zi = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.zi = 0;
                    break;
                default:
                    this.module.zi = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Dc(new g.xF(8));
                    this.S2();
                    break;
                case 1085:
                case 3:
                    this.Dc(new g.xF(9));
                    break;
                case 1083:
                case 0:
                    this.Dc(new g.xF(2));
                    this.K.stop();
                    this.Sc(this.J.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Dc(new g.xF(4));
                    break;
                case 2:
                    this.Dc(new g.xF(4));
                    this.Sc(K8(a));
                    break;
                case -1:
                    this.Dc(new g.xF(64));
                    break;
                case -1E3:
                    this.Dc(new g.xF(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        jA: 2
                    }))
            }
            a = O8(this.Gc).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, Qvb(this, a));
            a = O8(this.Gc);
            a.volume === -1 || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.R3()
        } else Ovb(this)
    };
    g.k.H0 = function() {
        this.J.publish("mdxpreviousnextchange")
    };
    g.k.TL = function() {
        l9(this) || Ovb(this)
    };
    g.k.D0 = function(a) {
        isNaN(a) || this.J.publish("mdxnowautoplaying", a)
    };
    g.k.l0 = function() {
        this.J.publish("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        l9(this) && this.Gc.setAudioTrack(this.J.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        O8(this.Gc).playerState === -1 ? m9(this, a) : b && this.Gc.seekTo(a)
    };
    g.k.R3 = function() {
        var a = this;
        if (l9(this)) {
            var b = O8(this.Gc);
            this.events.Lc(this.Y);
            b.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(b.volume);
            this.Y = this.events.T(this.J, "onVolumeChange", function(c) {
                Lvb(a, c)
            })
        }
    };
    g.k.S2 = function() {
        this.j.stop();
        if (!this.Gc.Ja()) {
            var a = O8(this.Gc);
            a.isPlaying() && this.Dc(new g.xF(8));
            this.Sc(K8(a));
            this.j.start()
        }
    };
    g.k.T2 = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Gc.au();
        this.Gc.C == 2 && !isNaN(a) && this.B.start()
    };
    g.k.Dc = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.DF(b, a)) {
            var c = g.Z(a, 2);
            c !== g.Z(this.G, 2) && this.J.vC(c);
            this.G = a;
            Svb(this.module, b, a)
        }
    };
    g.z(n9, g.T);
    n9.prototype.md = function() {
        this.j.show()
    };
    n9.prototype.Mb = function() {
        this.j.hide()
    };
    n9.prototype.B = function() {
        s7("mdx-privacy-popup-cancel");
        this.Mb()
    };
    n9.prototype.C = function() {
        s7("mdx-privacy-popup-confirm");
        this.Mb()
    };
    g.z(o9, g.T);
    o9.prototype.onStateChange = function(a) {
        this.wd(a.state)
    };
    o9.prototype.wd = function(a) {
        if (this.api.getPresentingPlayerType() === 3) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.Z(a, 128) ? g.mD("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.mD("Playing on $RECEIVER_NAME", b) : g.mD("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.z(p9, g.uX);
    p9.prototype.D = function() {
        var a = this.J.getOption("remote", "receivers");
        a && a.length > 1 && !this.J.getOption("remote", "quickCast") ? (this.fv = g.kc(a, this.j, this), this.xl(g.zl(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Gi(a), this.enable(!0)) : this.enable(!1)
    };
    p9.prototype.j = function(a) {
        return a.key
    };
    p9.prototype.wl = function(a) {
        return a === "cast-selector-receiver" ? "Cast..." : this.fv[a].name
    };
    p9.prototype.Yg = function(a) {
        g.uX.prototype.Yg.call(this, a);
        this.J.setOption("remote", "currentReceiver", this.fv[a]);
        this.Db.Mb()
    };
    g.z(Rvb, g.UX);
    g.k = Rvb.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.PO(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
        };
        Cvb(b, a);
        this.subscriptions.push(g.hv("yt-remote-before-disconnect", this.Iaa, this));
        this.subscriptions.push(g.hv("yt-remote-connection-change", this.fca, this));
        this.subscriptions.push(g.hv("yt-remote-receiver-availability-change", this.J0,
            this));
        this.subscriptions.push(g.hv("yt-remote-auto-connect", this.cca, this));
        this.subscriptions.push(g.hv("yt-remote-receiver-resumed", this.bca, this));
        this.subscriptions.push(g.hv("mdx-privacy-popup-confirm", this.Dda, this));
        this.subscriptions.push(g.hv("mdx-privacy-popup-cancel", this.Cda, this));
        this.J0()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.UX.prototype.load.call(this);
        this.Cm = new Nvb(this, this.player, this.Gc);
        var a = (a = Kvb()) ? a.currentTime : 0;
        var b = Hvb() ? new N8(g9(), void 0) : null;
        a == 0 && b && (a = K8(O8(b)));
        a !== 0 && this.Sc(a);
        Svb(this, this.De, this.De);
        this.player.Sq(6)
    };
    g.k.unload = function() {
        this.player.publish("mdxautoplaycanceled");
        this.Mt = this.yq;
        g.qb(this.Cm, this.Gc);
        this.Gc = this.Cm = null;
        g.UX.prototype.unload.call(this);
        this.player.Sq(5);
        n$(this)
    };
    g.k.xa = function() {
        g.iv(this.subscriptions);
        g.UX.prototype.xa.call(this)
    };
    g.k.HG = function(a) {
        var b = g.Da.apply(1, arguments);
        this.loaded && this.Cm.Jl.apply(this.Cm, [a].concat(g.x(b)))
    };
    g.k.getAdState = function() {
        return this.zi
    };
    g.k.fq = function() {
        return this.Gc ? O8(this.Gc).fq : !1
    };
    g.k.Kl = function() {
        return this.Gc ? O8(this.Gc).Kl : !1
    };
    g.k.Sc = function(a, b) {
        this.i_ = a || 0;
        this.player.publish("progresssync", a, b);
        this.player.ud("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.i_
    };
    g.k.getProgressState = function() {
        var a = O8(this.Gc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: !a.Ml() && this.player.Nh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + I8(a) : a.C,
            isAtLiveHead: (a.B ? a.j + I8(a) : a.j) - this.getCurrentTime() <= 1,
            loaded: a.Z,
            seekableEnd: a.B ? a.j + I8(a) : a.j,
            seekableStart: a.D > 0 ? a.D + I8(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.k.nextVideo = function() {
        this.Gc && this.Gc.nextVideo()
    };
    g.k.nM = function() {
        this.Gc && this.Gc.nM()
    };
    g.k.Iaa = function(a) {
        a === 1 && (this.dT = this.Gc ? O8(this.Gc) : null)
    };
    g.k.fca = function() {
        var a = Hvb() ? new N8(g9(), void 0) : null;
        if (a) {
            var b = this.Mt;
            this.loaded && this.unload();
            this.Gc = a;
            this.dT = null;
            b.key !== this.yq.key && (this.Mt = b, this.load())
        } else g.pb(this.Gc), this.Gc = null, this.loaded && (this.unload(), (a = this.dT) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, K8(a)));
        this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.J0 = function() {
        var a = [this.yq],
            b = a.concat,
            c = Dvb();
        E8() && g.Hs("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.fv = b.call(a, c);
        a = Fvb() || this.yq;
        p$(this, a);
        this.player.ud("onMdxReceiversChange")
    };
    g.k.cca = function() {
        var a = Fvb();
        p$(this, a)
    };
    g.k.bca = function() {
        this.Mt = Fvb()
    };
    g.k.Dda = function() {
        this.gH = !0;
        n$(this);
        k9 = !1;
        h9 && j9(h9, 1);
        h9 = null
    };
    g.k.Cda = function() {
        this.gH = !1;
        n$(this);
        p$(this, this.yq);
        this.Mt = this.yq;
        k9 = !1;
        h9 = null;
        this.player.playVideo()
    };
    g.k.Zh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.fv;
            case "currentReceiver":
                return b && (b.key === "cast-selector-receiver" ? Wub() : p$(this, b)), this.loaded ? this.Mt : this.yq;
            case "quickCast":
                return this.fv.length === 2 && this.fv[1].key === "cast-selector-receiver" ? (b && Wub(), !0) : !1
        }
    };
    g.k.DU = function() {
        this.Gc.DU()
    };
    g.k.yn = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.k.isLoggedIn = function() {
        var a, b;
        return ((a = g.Tq("PLAYER_CONFIG")) == null ? void 0 : (b = a.args) == null ? void 0 : b.authuser) !== void 0 ? !0 : !(!g.Tq("SESSION_INDEX") && !g.Tq("LOGGED_IN"))
    };
    g.TX("remote", Rvb);
})(_yt_player);