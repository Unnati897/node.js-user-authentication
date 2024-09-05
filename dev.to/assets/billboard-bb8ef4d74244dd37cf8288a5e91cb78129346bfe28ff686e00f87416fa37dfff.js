(() => {
    function e() {
        let e = document.querySelectorAll("button[id^=sponsorship-dropdown-trigger-]");
        e.length && e.forEach((e => {
            t(e);
            let n = e.getAttribute("aria-controls");
            e && "true" !== e.dataset.initialized && (E({
                triggerElementId: e.id,
                dropdownContentId: n
            }), e.dataset.initialized = "true");
            let o = e.closest(".popover-billboard");
            o && e.getBoundingClientRect().top > window.innerHeight / 2 && o.classList.add("popover-billboard--menuopenupwards")
        }));
        let o = document.querySelectorAll("button[id^=sponsorship-close-trigger-]");
        o.length && o.forEach((e => {
            e.addEventListener("click", (() => {
                n(e)
            })), e.closest(".popover-billboard") && document.addEventListener("click", (t => {
                t.target.closest(".crayons-article__header") && "none" !== document.querySelector(".popover-billboard").style.display && t.preventDefault(), t.target.closest(".js-billboard") || n(e)
            }))
        }))
    }

    function t(e) {
        e.closest(".js-billboard").clientHeight < 220 && (e.closest(".js-billboard").style.overflowY = "revert")
    }

    function n(e) {
        let t = e.closest(".js-billboard").dataset.dismissalSku;
        if (e.closest(".js-billboard").style.display = "none", localStorage && t && t.length > 0) {
            let e = JSON.parse(localStorage.getItem("dismissal_skus_triggered")) || [];
            e.includes(t) || (e.push(t), localStorage.setItem("dismissal_skus_triggered", JSON.stringify(e)))
        }
    }

    function o(e) {
        let t, n, o, r, i, l = e.getElementsByTagName("script");
        for (i = 0; i < l.length; i++)
            if (t = l[i], t) {
                n = document.createElement("script");
                for (let e = 0; e < t.attributes.length; e++) n.setAttribute(t.attributes[e].name, t.attributes[e].value);
                n.textContent = t.textContent, o = t.parentNode, r = t.nextSibling, o.removeChild(t), o.insertBefore(n, r)
            }
    }

    function r(e) {
        if (e.querySelector(".js-billboard") && "delayed" === e.querySelector(".js-billboard").dataset.special) {
            e.classList.add("hidden");
            let t = new IntersectionObserver(l, {
                    root: null,
                    rootMargin: "-150px",
                    threshold: .2
                }),
                n = document.getElementById("new_comment");
            t.observe(n)
        }
    }

    function i() {
        let e = new IntersectionObserver((e => {
            e.forEach((e => {
                if (e.isIntersecting) {
                    let t = e.target;
                    e.intersectionRatio >= .25 && setTimeout((() => {
                        a(t)
                    }), 1)
                }
            }))
        }), {
            root: null,
            rootMargin: "0px",
            threshold: .25
        });
        document.querySelectorAll("[data-display-unit]").forEach((t => {
            let n = window.location.pathname;
            e.observe(t), t.removeEventListener("click", d, !1), t.addEventListener("click", (() => d(t, event, n)))
        }))
    }

    function l(e) {
        e.forEach((e => {
            e.isIntersecting && document.querySelectorAll("[data-special='delayed']").forEach((e => {
                e.closest(".hidden").classList.remove("hidden")
            }))
        }))
    }

    function a(e) {
        let t = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent),
            n = e.dataset.impressionRecorded;
        if (t || n) return;
        let o = document.querySelector("meta[name='csrf-token']"),
            r = o && o.getAttribute("content"),
            i = {
                billboard_event: {
                    billboard_id: e.dataset.id,
                    context_type: e.dataset.contextType,
                    category: e.dataset.categoryImpression,
                    article_id: e.dataset.articleId
                }
            };
        window.fetch("/bb_tabulations", {
            method: "POST",
            headers: {
                "X-CSRF-Token": r,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(i),
            credentials: "same-origin"
        }).catch((e => console.error(e))), e.dataset.impressionRecorded = !0
    }

    function d(e, t, n) {
        if (!t.target.closest("a")) return;
        let o = {
            billboard_event: {
                billboard_id: e.dataset.id,
                context_type: e.dataset.contextType,
                category: e.dataset.categoryClick,
                article_id: e.dataset.articleId
            }
        };
        localStorage && (o.path = n, o.time = new Date, localStorage.setItem("last_interacted_billboard", JSON.stringify(o)));
        let r = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent),
            i = e.dataset.clickRecorded;
        if (r || i) return;
        let l = document.querySelector("meta[name='csrf-token']"),
            a = l && l.getAttribute("content");
        window.fetch("/bb_tabulations", {
            method: "POST",
            headers: {
                "X-CSRF-Token": a,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(o),
            credentials: "same-origin"
        }), e.dataset.clickRecorded = !0
    }
    async function s() {
        let e = [...document.getElementsByClassName("js-billboard-container")].map(c);
        await Promise.all(e)
    }
    async function c(t) {
        var n;
        let {
            asyncUrl: l
        } = t.dataset, a = window.location.href.split("?")[1], d = localStorage.getItem("cookie_status");
        if (a && a.includes("bb_test_placement_area") && (l = `${l}?${a}`), "allowed" === d && (l += (l.includes("?") ? "&" : "?") + "cookies_allowed=true"), l) try {
            if (null != l && l.includes("post_fixed_bottom") && null != a && a.includes("context=digest")) return;
            let d = await (await window.fetch(l)).text(),
                s = document.createElement("div");
            s.innerHTML = d, t.innerHTML = "", t.appendChild(s), t.querySelectorAll("img").forEach((e => {
                e.onerror = function() {
                    this.style.display = "none"
                }
            }));
            let c = null == (n = t.querySelector(".js-billboard")) ? void 0 : n.dataset.dismissalSku;
            localStorage && c && c.length > 0 && (JSON.parse(localStorage.getItem("dismissal_skus_triggered")) || []).includes(c) && (t.style.display = "none", t.innerHTML = ""), o(t), r(t), e(), i()
        } catch (e) {
            /NetworkError/i.test(e.message) || Honeybadger.notify(e)
        }
    }
    var u = Object.create,
        m = Object.defineProperty,
        g = Object.getOwnPropertyDescriptor,
        p = Object.getOwnPropertyNames,
        f = Object.getPrototypeOf,
        b = Object.prototype.hasOwnProperty,
        y = (e, t, n, o) => {
            if (t && "object" == typeof t || "function" == typeof t)
                for (let r of p(t)) !b.call(e, r) && r !== n && m(e, r, {
                    get: () => t[r],
                    enumerable: !(o = g(t, r)) || o.enumerable
                });
            return e
        },
        v = (((e, t, n) => {
            n = null != e ? u(f(e)) : {}, y(!t && e && e.__esModule ? n : m(n, "default", {
                value: e,
                enumerable: !0
            }), e)
        })(((e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports))(((e, t) => {
            function n(e, t, n) {
                function r(t) {
                    var n = f,
                        o = b;
                    return f = b = void 0, C = t, v = e.apply(o, n)
                }

                function i(e) {
                    return C = e, I = setTimeout(c, t), k ? r(e) : v
                }

                function d(e) {
                    var n = t - (e - S);
                    return x ? w(n, y - (e - C)) : n
                }

                function s(e) {
                    var n = e - S;
                    return void 0 === S || n >= t || n < 0 || x && e - C >= y
                }

                function c() {
                    var e = E();
                    if (s(e)) return u(e);
                    I = setTimeout(c, d(e))
                }

                function u(e) {
                    return I = void 0, _ && f ? r(e) : (f = b = void 0, v)
                }

                function m() {
                    void 0 !== I && clearTimeout(I), C = 0, f = S = b = I = void 0
                }

                function g() {
                    return void 0 === I ? v : u(E())
                }

                function p() {
                    var e = E(),
                        n = s(e);
                    if (f = arguments, b = this, S = e, n) {
                        if (void 0 === I) return i(S);
                        if (x) return I = setTimeout(c, t), r(S)
                    }
                    return void 0 === I && (I = setTimeout(c, t)), v
                }
                var f, b, y, v, I, S, C = 0,
                    k = !1,
                    x = !1,
                    _ = !0;
                if ("function" != typeof e) throw new TypeError(a);
                return t = l(t) || 0, o(n) && (k = !!n.leading, y = (x = "maxWait" in n) ? h(l(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), p.cancel = m, p.flush = g, p
            }

            function o(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function r(e) {
                return !!e && "object" == typeof e
            }

            function i(e) {
                return "symbol" == typeof e || r(e) && v.call(e) == s
            }

            function l(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return d;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(c, "");
                var n = m.test(e);
                return n || g.test(e) ? p(e.slice(2), n ? 2 : 8) : u.test(e) ? d : +e
            }
            var a = "Expected a function",
                d = NaN,
                s = "[object Symbol]",
                c = /^\s+|\s+$/g,
                u = /^[-+]0x[0-9a-f]+$/i,
                m = /^0b[01]+$/i,
                g = /^0o[0-7]+$/i,
                p = parseInt,
                f = "object" == typeof window && window && window.Object === Object && window,
                b = "object" == typeof self && self && self.Object === Object && self,
                y = f || b || Function("return this")(),
                v = Object.prototype.toString,
                h = Math.max,
                w = Math.min,
                E = function() {
                    return y.Date.now()
                };
            t.exports = n
        }))()), 'button, [href], input:not([type="hidden"]), select, textarea, [tabindex="0"]'),
        h = ({
            triggerElementId: e,
            dropdownContentId: t
        }) => {
            var n;
            let o = document.getElementById(t);
            document.getElementById(e).setAttribute("aria-expanded", "true"), o.style.display = "block", null == (n = o.querySelector(v)) || n.focus()
        },
        w = ({
            triggerElementId: e,
            dropdownContentId: t,
            onClose: n
        }) => {
            var o;
            let r = document.getElementById(t);
            r && (null == (o = document.getElementById(e)) || o.setAttribute("aria-expanded", "false"), r.style.removeProperty("display"), null == n || n())
        },
        E = ({
            triggerElementId: e,
            dropdownContentId: t,
            dropdownContentCloseButtonId: n,
            onClose: o,
            onOpen: r
        }) => {
            var i;
            let l = document.getElementById(e),
                a = document.getElementById(t);
            if (!l || !a) return;
            l.setAttribute("aria-expanded", "false"), l.setAttribute("aria-controls", t), l.setAttribute("aria-haspopup", "true");
            let d = ({
                    key: n
                }) => {
                    "Escape" === n ? "true" === l.getAttribute("aria-expanded") && (w({
                        triggerElementId: e,
                        dropdownContentId: t,
                        onClose: c
                    }), l.focus()) : "Tab" === n && (null != a && a.contains(document.activeElement) || w({
                        triggerElementId: e,
                        dropdownContentId: t,
                        onClose: c
                    }))
                },
                s = ({
                    target: n
                }) => {
                    let o = document.getElementById(e);
                    o && n !== o && !a.contains(n) && !o.contains(n) && (w({
                        triggerElementId: e,
                        dropdownContentId: t,
                        onClose: c
                    }), n.matches(v) || o.focus())
                },
                c = () => {
                    null == o || o(), document.removeEventListener("keyup", d), document.removeEventListener("click", s)
                };
            return l.addEventListener("click", (() => {
                var n;
                "true" === (null == (n = document.getElementById(e)) ? void 0 : n.getAttribute("aria-expanded")) ? w({
                    triggerElementId: e,
                    dropdownContentId: t,
                    onClose: c
                }): (h({
                    triggerElementId: e,
                    dropdownContentId: t
                }), null == r || r(), document.addEventListener("keyup", d), document.addEventListener("click", s))
            })), n && (null == (i = document.getElementById(n)) || i.addEventListener("click", (() => {
                var n;
                w({
                    triggerElementId: e,
                    dropdownContentId: t,
                    onClose: c
                }), null == (n = document.getElementById(e)) || n.focus()
            }))), {
                closeDropdown: () => {
                    w({
                        triggerElementId: e,
                        dropdownContentId: t,
                        onClose: c
                    })
                }
            }
        };
    s()
})();