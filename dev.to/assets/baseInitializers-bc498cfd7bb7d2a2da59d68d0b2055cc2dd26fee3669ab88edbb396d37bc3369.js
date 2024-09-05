(() => {
    function e(e, t, n) {
        if (!e) return "";
        try {
            let i = new Date(e),
                o = new Intl.DateTimeFormat(t || "default", n).format(i);
            return "2-digit" === n.year ? o.replace(", ", " '") : o
        } catch {
            return ""
        }
    }

    function t(e, t) {
        for (let n = 0; n < e.length; n += 1) {
            let o = e[n],
                a = o.getAttribute(t || "datetime");
            if (a) {
                let e = i(a);
                o.setAttribute("title", e)
            }
        }
    }

    function n(t, n) {
        for (let i = 0; i < t.length; i += 1) {
            let o = t[i],
                a = o.getAttribute("datetime");
            if (a) {
                let t = e(a, navigator.language, n);
                o.textContent = t
            }
        }
    }

    function i(t) {
        return e(t, navigator.language, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        })
    }

    function o(t) {
        if (t) {
            let n = (new Date).getFullYear(),
                i = {
                    day: "numeric",
                    month: "short"
                };
            return new Date(t).getFullYear() !== n && (i.year = "numeric"), e(t, navigator.language, i)
        }
        return ""
    }

    function a() {
        let e = document.querySelectorAll(".comment-date time");
        e && t(e, "datetime")
    }

    function r(e, t) {
        function n() {
            let e = document.createElement("script");
            return e.src = "https://platform.twitter.com/widgets.js", e.async = !0, document.body.appendChild(e), () => {
                document.body.removeChild(e)
            }
        }

        function i(t) {
            e.innerHTML = t.processed_html, t.processed_html.includes("twitter-timeline") && n(), activateRunkitTags()
        }
        let o = JSON.stringify({
            comment: {
                body_markdown: t.value
            }
        });
        getCsrfToken().then(sendFetch("comment-preview", o)).then((e => e.json())).then(i).catch((e => {
            console.log("error!"), console.log(e)
        }))
    }

    function s(e) {
        e.preventDefault();
        let {
            form: t
        } = e.target, n = t.getElementsByClassName("comment-textarea")[0], i = t.getElementsByClassName("comment-form__preview")[0], o = t.getElementsByClassName("preview-toggle")[0];
        if ("" !== n.value)
            if (t.classList.contains("preview-open")) t.classList.toggle("preview-open"), o.innerHTML = "Preview";
            else {
                r(i, n);
                let e = n.offsetHeight + 43;
                i.style.minHeight = `${e}px`, o.innerHTML = "Continue editing", t.classList.toggle("preview-open")
            }
    }

    function c() {
        let e = document.getElementsByClassName("preview-toggle")[0];
        e && (window.handleCommentPreview = s, e.addEventListener("click", s))
    }

    function l(e, t) {
        return new Intl.DateTimeFormat("en-US", e).format(t)
    }

    function d(e) {
        return l({
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "short"
        }, new Date(Number(e)))
    }

    function u(e) {
        return l({
            month: "short",
            day: "numeric"
        }, new Date(Number(e)))
    }

    function m(e) {
        return l({
            weekday: "long",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }, new Date(Number(e)))
    }

    function g(e, t, n) {
        let i;
        for (let o = 0; o < e.length; o += 1) i = t(n(e[o])), e[o].innerHTML = i
    }

    function f() {
        let e = document.getElementsByClassName("utc-time"),
            t = document.getElementsByClassName("utc-date"),
            n = document.getElementsByClassName("utc");
        n && (g(e, d, (e => e.dataset.datetime)), g(t, u, (e => e.dataset.datetime)), g(n, m, (e => e.innerHTML)))
    }

    function b(e) {
        try {
            window && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.haptic && window.webkit.messageHandlers.haptic.postMessage(e)
        } catch (e) {
            console.log(e.message)
        }
    }

    function h() {
        let {
            body: e
        } = document;
        return !!e && "logged-in" === e.getAttribute("data-user-status")
    }

    function p(e, t, n) {
        _(t, n), window.Forem.showModal({
            title: e,
            contentSelector: `#${J}`,
            overlay: !0
        })
    }

    function y({
        element: e,
        action_ing: t,
        action_past: n,
        timeframe: i = "a moment"
    }) {
        p(`Wait ${i}...`, v({
            element: e,
            action_ing: t,
            action_past: n,
            timeframe: i
        }), "Got it", "/faq", "Why do I have to wait?")
    }

    function w({
        response: e,
        element: t,
        action_ing: n,
        action_past: i,
        timeframe: o = "a moment"
    }) {
        e.json().then((a => {
            429 === e.status ? y({
                element: t,
                action_ing: n,
                action_past: i,
                timeframe: o
            }) : p(`Error ${n} ${t}`, `Your ${t} could not be ${i} due to an error: ${a.error}`, "OK")
        })).catch((() => {
            p(`Error ${n} ${t}`, `Your ${t} could not be ${i} due to a server error`, "OK")
        }))
    }

    function v({
        element: e,
        action_ing: t,
        action_past: n,
        timeframe: i
    }) {
        return `Since you recently ${n} a ${e}, you\u2019ll need to wait ${i} before ${t} another ${e}.`
    }

    function _(e, t) {
        let n = document.getElementById(J);
        return n ? n.outerHTML = E(e, t).outerHTML : (n = E(e, t), document.body.appendChild(n)), n
    }

    function E(e, t) {
        let n = document.createElement("div");
        return n.innerHTML = K(e, t), n
    }

    function T(e, t, n) {
        let i = "",
            o = "";
        void 0 === n && (n = window.innerWidth);
        let a = "comments",
            {
                subscription_id: r,
                subscription_config: s,
                comment_id: c
            } = e.dataset,
            l = "" != r;
        void 0 !== t && (l = "subscribe" == t);
        let d = l,
            u = l ? "Subscribed" : "Subscribe";
        c && "" != c && (a = "thread");
        let m = e.querySelector("span");
        switch (s) {
            case "top_level_comments":
                i = `${u} to top-level comments`, o = `Top-level ${a}`;
                break;
            case "only_author_comments":
                i = `${u} to author comments`, o = `Author ${a}`;
                break;
            default:
                i = `${u} to ${a}`, o = `${a}`.charAt(0).toUpperCase() + a.slice(1)
        }
        e.setAttribute("aria-label", i), m.innerText = n <= 760 ? o : i, e.setAttribute("aria-pressed", d)
    }

    function I(e, t) {
        void 0 === t && (t = e.dataset.subscription_id ? "unsubscribe" : "subscribe"), "unsubscribe" == t ? (e.classList.remove("comment-subscribed"), T(e, "unsubscribe")) : (e.classList.add("comment-subscribed"), T(e, "subscribe"))
    }

    function L(e) {
        let t, n;
        return "" != e.dataset.subscription_id ? (t = {
            subscription_id: e.dataset.subscription_id
        }, n = "comment-unsubscribe") : e.dataset.subscribed_to && "comment" == e.dataset.subscribed_to ? (t = {
            comment_id: e.dataset.comment_id
        }, n = "comment-subscribe") : (t = {
            article_id: e.dataset.article_id,
            subscription_config: e.dataset.subscription_config
        }, n = "comment-subscribe"), {
            payload: t,
            endpoint: n
        }
    }
    async function k({
        target: e
    }) {
        I(e);
        let {
            payload: t,
            endpoint: n
        } = L(e), i = JSON.stringify(t);
        getCsrfToken().then(await sendFetch(n, i)).then((async t => {
            if (200 === t.status) {
                let n = await t.json();
                if (n.destroyed) {
                    let t = document.querySelectorAll(`button[data-subscription_id='${e.dataset.subscription_id}']`);
                    for (let n = 0; n < t.length; n++) {
                        let i = t[n];
                        i.dataset.subscription_id = "", i != e && I(i, "unsubscribe")
                    }
                } else {
                    if (!n.subscription) throw `Problem (un)subscribing: ${JSON.stringify(n)}`;
                    e.dataset.subscription_id = n.subscription.id
                }
            }
        }))
    }

    function $() {
        let e = document.querySelectorAll(".subscribe-button");
        0 !== e.length && Array.from(e, (e => {
            e.wasInitialized || (e.removeEventListener("click", k), e.addEventListener("click", k), e.wasInitialized = !0, T(e))
        }))
    }

    function C() {
        setTimeout((() => {
            document.getElementById("notifications-container") && getCsrfToken().then((e => {
                let t = window.location.pathname.split("/"),
                    n = parseInt(t[t.length - 1].replace(/[^0-9]/g, ""), 10),
                    i = {
                        method: "POST",
                        headers: {
                            "X-CSRF-Token": e
                        }
                    };
                Number.isInteger(n) ? fetch(`/notifications/reads?org_id=${n}`, i) : fetch("/notifications/reads", i)
            }))
        }), 450)
    }

    function B() {
        null == document.getElementById("notifications-container") && h() && instantClick && (InstantClick.removeExpiredKeys("force"), setTimeout((() => {
            InstantClick.preload(document.getElementById("notifications-link").href, "force")
        }), 30))
    }

    function A() {
        setTimeout((() => {
            if (document.getElementById("notifications-container")) {
                let e = document.getElementsByClassName("reaction-button");
                for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    n.setAttribute("aria-pressed", n.classList.contains("reacted")), n.onclick = function(e) {
                        function t(e) {
                            "create" === e.result ? (n.classList.add("reacted"), n.setAttribute("aria-pressed", !0)) : (n.classList.remove("reacted"), n.setAttribute("aria-pressed", !1))
                        }
                        e.preventDefault(), b("medium");
                        let n = this;
                        n.classList.add("reacted");
                        let i = new FormData;
                        i.append("reactable_type", n.dataset.reactableType), i.append("category", n.dataset.category), i.append("reactable_id", n.dataset.reactableId), getCsrfToken().then(sendFetch("reaction-creation", i)).then((e => {
                            200 === e.status ? e.json().then(t) : w({
                                response: e,
                                element: "reaction",
                                action_ing: "updating",
                                action_past: "updated"
                            })
                        }))
                    }
                }
                e = document.getElementsByClassName("toggle-reply-form");
                for (let t = 0; t < e.length; t++) {
                    e[t].onclick = function(e) {
                        e.preventDefault();
                        let t = this;
                        document.getElementById(`comment-form-for-${t.dataset.reactableId}`).classList.remove("hidden"), t.classList.add("hidden"), t.classList.remove("inline-flex"), setTimeout((() => {
                            document.getElementById(`comment-textarea-for-${t.dataset.reactableId}`).focus()
                        }), 30)
                    }
                }
            }
        }), 180)
    }

    function N() {
        let e = document.getElementById("notifications-link");
        e && setTimeout((() => {
            e.onclick = function() {
                document.getElementById("notifications-number").classList.add("hidden")
            }
        }), 180)
    }

    function S() {
        let e = document.getElementById("notifications-filter__select"),
            t = e => {
                window.location.href = e.target.value
            };
        e && e.addEventListener("change", t)
    }

    function D() {
        let e = document.getElementsByClassName("notifications-paginator");
        if (e && e.length > 0) {
            let t = e[e.length - 1];
            t && window.fetch(t.dataset.paginationPath, {
                method: "GET",
                credentials: "same-origin"
            }).then((e => {
                200 === e.status && e.text().then((e => {
                    let n = e.trim();
                    if (n) {
                        let e = document.getElementById("articles-list"),
                            i = document.createElement("div");
                        i.innerHTML = n, t.remove(), e.append(i), A()
                    } else {
                        let e = document.getElementById("load-more-button");
                        e && (e.style.display = "none"), t.remove()
                    }
                    $()
                }))
            }))
        }
    }

    function H() {
        let e = document.getElementById("load-more-button");
        e && e.addEventListener("click", D)
    }

    function M() {
        B(), C(), A(), N(), S(), D(), H()
    }

    function x() {
        n(document.querySelectorAll("time.date-no-year"), {
            month: "short",
            day: "numeric"
        }), n(document.querySelectorAll("time.date"), {
            year: "numeric",
            month: "short",
            day: "numeric"
        }), n(document.querySelectorAll("time.date-short-year"), {
            year: "2-digit",
            month: "short",
            day: "numeric"
        })
    }

    function F() {
        let e = document.getElementById("settings-org-secret");
        if (null === e) return;
        let {
            value: t
        } = e;
        return window.Forem.Runtime.copyToClipboard(t).then((() => {
            document.getElementById("copy-text-announcer").classList.remove("hidden")
        }))
    }

    function q() {
        var e;
        null == (e = document.getElementById("settings-org-secret-copy-btn")) || e.addEventListener("click", F)
    }

    function O() {
        let t = document.getElementById("rss-fetch-time");
        if (t) {
            let n = t.getAttribute("datetime"),
                i = {
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                };
            t.textContent = e(n, navigator.language, i)
        }
    }

    function j(e) {
        let t = e.target.value;
        InstantClick.preload(t), InstantClick.display(t)
    }

    function P() {
        var e;
        null == (e = document.getElementById("mobile-page-selector")) || e.addEventListener("change", j)
    }

    function Y() {
        q(), O(), P()
    }
    "undefined" != typeof globalThis && (globalThis.timestampToLocalDateTimeLong = i, globalThis.timestampToLocalDateTimeShort = o);
    var J = "user-alert-modal",
        K = (e, t) => `\n   <div id="${J}" hidden>\n     <div class="flex flex-col">\n       <p class="color-base-70">\n         ${e}\n       </p>\n       <button class="crayons-btn mt-4 ml-auto" type="button" onClick="window.Forem.closeModal()">\n         ${t}\n       </button>\n     </div>\n   </div>\n `;
    $(), a(), c(), Y(), M(), f(), x(), InstantClick.on("change", (() => {
        a(), c(), Y(), M()
    })), window.showUserAlertModal = p, window.showModalAfterError = w
})();