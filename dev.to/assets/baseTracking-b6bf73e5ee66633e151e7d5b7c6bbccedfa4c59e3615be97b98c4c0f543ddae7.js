(() => {
    function e() {
        r(), t(), n(), c(), l()
    }

    function t() {
        let e = 0,
            t = !1,
            n = document.body.dataset.gaTracking;
        if (n && "allowed" === localStorage.getItem("cookie_status")) {
            let i = setInterval((() => {
                var a, c, l, r, d, s, g;
                t || (a = window, c = document, l = "script", r = "//www.google-analytics.com/analytics.js", d = "ga", a.GoogleAnalyticsObject = d, a[d] = a[d] || function() {
                    (a[d].q = a[d].q || []).push(arguments)
                }, a[d].l = 1 * new Date, s = c.createElement(l), g = c.getElementsByTagName(l)[0], s.async = 1, s.src = r, g.parentNode.insertBefore(s, g)), t = !0, e++, window.ga && ga.create && (ga("create", n, "auto"), ga("set", "anonymizeIp", !0), ga("send", "pageview", location.pathname + location.search), clearInterval(i)), e > 85 && (clearInterval(i), o())
            }), 25);
            a()
        } else n && o()
    }

    function n() {
        let e = 0,
            t = !1,
            n = document.body.dataset.ga4TrackingId;
        if (n) {
            let i = setInterval((() => {
                if (!t) {
                    let e = document.createElement("script");
                    e.src = `//www.googletagmanager.com/gtag/js?id=${n}`, e.async = !0, document.head.appendChild(e)
                }
                if (t = !0, e++, window.google_tag_manager) {
                    let e = function() {
                        window.dataLayer.push(arguments)
                    };
                    window.dataLayer = window.dataLayer || [], window.gtag = window.gtag || function() {
                        window.dataLayer.push(arguments)
                    };
                    let t = "allowed" === localStorage.getItem("cookie_status") ? "granted" : "denied";
                    e("js", new Date), e("config", n, {
                        anonymize_ip: !0
                    }), e("consent", "default", {
                        ad_storage: t,
                        analytics_storage: t
                    }), clearInterval(i)
                }
                e > 85 && (clearInterval(i), o())
            }), 25);
            a()
        }
    }

    function o() {
        let e = document.querySelector("meta[name='csrf-token']");
        if (!e) return;
        let t = e.getAttribute("content"),
            n = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            o = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            a = window.screen.availWidth,
            i = window.screen.availHeight,
            c = {
                path: location.pathname + location.search,
                user_language: navigator.language,
                referrer: document.referrer,
                user_agent: navigator.userAgent,
                viewport_size: `${o}x${n}`,
                screen_resolution: `${i}x${a}`,
                document_title: document.title,
                document_encoding: document.characterSet,
                document_path: location.pathname + location.search
            };
        window.fetch("/fallback_activity_recorder", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "X-CSRF-Token": t
            },
            body: JSON.stringify(c),
            credentials: "same-origin"
        })
    }

    function a() {
        let e = document.getElementById("cta-comment-register-now-link");
        e && (e.onclick = function() {
            ga("send", "event", "click", "register-now-click", null, null)
        })
    }

    function i() {
        let {
            body: e
        } = document;
        return !!e && "logged-in" === e.getAttribute("data-user-status")
    }

    function c() {
        setTimeout((() => {
            let e = document.getElementById("article-body") || document.getElementById("comment-article-indicator"),
                t = document.querySelector("meta[name='csrf-token']"),
                n = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);
            window.innerWidth;
            if (e && t && !n) {
                let n = Math.floor(10 * Math.random());
                if (!i() && 1 != n) return;
                let o = {
                        article_id: e.dataset.articleId,
                        referrer: document.referrer,
                        user_agent: navigator.userAgent
                    },
                    a = t.getAttribute("content");
                s(o, a);
                let c = 0,
                    l = setInterval((() => {
                        c++;
                        let e = document.getElementById("article-body") || document.getElementById("comment-article-indicator");
                        e && i() ? g(e.dataset.articleId, a) : clearInterval(l), c > 118 && clearInterval(l)
                    }), 15e3)
            }
        }), 1800)
    }

    function l() {
        let e = new URLSearchParams(window.location.search);
        if ("true" === e.get("ahoy_click") && e.get("t") && e.get("s") && e.get("u")) {
            let t = {
                t: e.get("t"),
                c: e.get("c"),
                u: decodeURIComponent(e.get("u")),
                s: e.get("s"),
                bb: e.get("bb")
            };
            window.fetch("/ahoy/email_clicks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(t),
                credentials: "same-origin"
            }), e.delete("t"), e.delete("c"), e.delete("u"), e.delete("s"), e.delete("ahoy_click"), e.delete("bb");
            let n = `${window.location.pathname}?${e.toString()}`;
            window.history.replaceState({}, null, n)
        }
    }

    function r() {
        if (d()) {
            let e = document.getElementById("cookie-consent");
            e && "allowed" !== localStorage.getItem("cookie_status") && "dismissed" !== localStorage.getItem("cookie_status") && (e.innerHTML = '\n        <div class="cookie-consent-modal">\n          <div class="cookie-consent-modal__content">\n            <p>\n              <strong>Some content on our site requires cookies for personalization.</strong>\n            </p>\n            <p>\n              Read our full <a href="/privacy">privacy policy</a> to learn more.\n            </p>\n            <div class="cookie-consent-modal__actions">\n              <button class="c-btn c-btn--secondary" id="cookie-dismiss">\n                Dismiss\n              </button>\n              <button class="c-btn c-btn--primary" id="cookie-accept">\n                Accept Cookies\n              </button>\n            </div\n          </div>\n        </div>\n      ', document.getElementById("cookie-accept").onclick = () => {
                localStorage.setItem("cookie_status", "allowed"), e.style.display = "none", window.gtag && gtag("consent", "update", {
                    ad_storage: "granted",
                    analytics_storage: "granted"
                })
            }, document.getElementById("cookie-dismiss").onclick = () => {
                localStorage.setItem("cookie_status", "dismissed"), e.style.display = "none"
            })
        }
    }

    function d() {
        function e() {
            return navigator.userAgent.includes("DEV-Native") ? "mobile_app" : isTouchDevice() ? "mobile_web" : "desktop_web"
        }
        let {
            userStatus: t,
            cookieBannerUserContext: n,
            cookieBannerPlatformContext: o
        } = document.body.dataset, a = e();
        if ("off" === n || "off" === o) return !1;
        let i = "logged-in" === t && "all" === n || "logged-in" !== t && "off" !== n,
            c = "all" === o || "all_web" === o && ["desktop_web", "mobile_web"].includes(a) || o === a;
        return i && c
    }

    function s(e, t) {
        window.fetch("/page_views", {
            method: "POST",
            headers: {
                "X-CSRF-Token": t,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e),
            credentials: "same-origin"
        })
    }

    function g(e, t) {
        window.fetch(`/page_views/${e}`, {
            method: "PATCH",
            headers: {
                "X-CSRF-Token": t,
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).catch((e => console.error(e)))
    }
    window.InstantClick.on("change", (() => {
        e()
    })), e()
})();