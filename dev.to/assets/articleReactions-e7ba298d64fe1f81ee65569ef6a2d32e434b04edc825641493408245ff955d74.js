(() => {
    function e(e, t, n) {
        a(t, n), window.Forem.showModal({
            title: e,
            contentSelector: `#${c}`,
            overlay: !0
        })
    }

    function t({
        element: t,
        action_ing: n,
        action_past: a,
        timeframe: r = "a moment"
    }) {
        e(`Wait ${r}...`, o({
            element: t,
            action_ing: n,
            action_past: a,
            timeframe: r
        }), "Got it", "/faq", "Why do I have to wait?")
    }

    function n({
        response: n,
        element: o,
        action_ing: a,
        action_past: r,
        timeframe: c = "a moment"
    }) {
        n.json().then((i => {
            429 === n.status ? t({
                element: o,
                action_ing: a,
                action_past: r,
                timeframe: c
            }) : e(`Error ${a} ${o}`, `Your ${o} could not be ${r} due to an error: ${i.error}`, "OK")
        })).catch((() => {
            e(`Error ${a} ${o}`, `Your ${o} could not be ${r} due to a server error`, "OK")
        }))
    }

    function o({
        element: e,
        action_ing: t,
        action_past: n,
        timeframe: o
    }) {
        return `Since you recently ${n} a ${e}, you\u2019ll need to wait ${o} before ${t} another ${e}.`
    }

    function a(e, t) {
        let n = document.getElementById(c);
        return n ? n.outerHTML = r(e, t).outerHTML : (n = r(e, t), document.body.appendChild(n)), n
    }

    function r(e, t) {
        let n = document.createElement("div");
        return n.innerHTML = i(e, t), n
    }
    var c = "user-alert-modal",
        i = (e, t) => `\n   <div id="${c}" hidden>\n     <div class="flex flex-col">\n       <p class="color-base-70">\n         ${e}\n       </p>\n       <button class="crayons-btn mt-4 ml-auto" type="button" onClick="window.Forem.closeModal()">\n         ${t}\n       </button>\n     </div>\n   </div>\n `,
        d = (e, t) => {
            let n = document.getElementById(`reaction-butt-${e}`).classList,
                o = document.getElementById(`reaction-number-${e}`),
                a = document.getElementById(`reaction_engagement_${e}_count`);
            t > 0 ? (n.add("activated"), o.textContent = t, a && (a.parentElement.classList.remove("hidden"), a.textContent = t)) : (n.remove("activated"), o.textContent = "0", a && a.parentElement.classList.add("hidden"))
        },
        l = e => {
            let t = document.getElementById("reaction_total_count");
            if (t && e.length > 2) {
                let n = 0;
                for (let t of e) "readinglist" != t.category && (n += t.count);
                t.textContent = n
            }
        },
        s = () => {
            let e = document.getElementById("reaction-number-comment");
            e && e.dataset.count && (e.textContent = e.dataset.count)
        },
        u = (e, t) => {
            let n = document.getElementById(`reaction-butt-${e}`);
            n.classList.add("user-activated", t), n.setAttribute("aria-pressed", "true");
            let o = document.getElementById("reaction-drawer-trigger");
            "readinglist" !== e && o.classList.add("user-activated", "user-animated")
        },
        m = e => {
            let t = document.getElementById(`reaction-butt-${e}`);
            t.classList.remove("user-activated", "user-animated"), t.setAttribute("aria-pressed", "false");
            let n = document.getElementById("reaction-drawer-trigger");
            0 == document.querySelector(".reaction-drawer").querySelectorAll(".user-activated").length && n.classList.remove("user-activated", "user-animated")
        },
        g = e => document.getElementById(`reaction-butt-${e}`).classList.contains("user-activated"),
        y = e => {
            let t = document.getElementById(`reaction-number-${e}`);
            return t && "" !== t.textContent ? parseInt(t.textContent, 10) : 0
        },
        E = (e, t) => {
            function o() {
                let e = y(t);
                g(t) ? (m(t), d(t, e - 1), r && !c && (r.innerText = Number(r.innerText) - 1)) : (u(t, "user-animated"), d(t, e + 1), r && !c && (r.innerText = Number(r.innerText) + 1))
            }

            function a() {
                let n = new FormData;
                return n.append("reactable_type", "Article"), n.append("reactable_id", e), n.append("category", t), n
            }
            let r = document.getElementById("reaction_total_count"),
                c = "readinglist" === t,
                i = document.body.getAttribute("data-user-status");
            sendHapticMessage("medium"), "logged-out" !== i ? (o(), document.getElementById(`reaction-butt-${t}`).disabled = !0, getCsrfToken().then(sendFetch("reaction-creation", a())).then((e => {
                if (200 === e.status) return e.json().then((() => {
                    document.getElementById(`reaction-butt-${t}`).disabled = !1
                }));
                o(), document.getElementById(`reaction-butt-${t}`).disabled = !1, n({
                    response: e,
                    element: "reaction",
                    action_ing: "updating",
                    action_past: "updated"
                })
            })).catch((() => {
                o(), document.getElementById(`reaction-butt-${t}`).disabled = !1
            }))) : showLoginModal({
                referring_source: "reactions_toolbar",
                trigger: t
            })
        },
        p = () => {
            if (document.getElementById("collection-link-inbetween")) {
                let e = document.getElementsByClassName("series-switcher__link--inbetween"),
                    t = e.length;
                for (let n = 0; n < e.length; n += 1) e[n].onclick = n => {
                    n.preventDefault();
                    let o = document.getElementsByClassName("series-switcher__link--hidden"),
                        a = o.length;
                    for (let e = 0; e < a; e += 1) o[0].classList.remove("series-switcher__link--hidden");
                    for (let n = 0; n < t; n += 1) e[0].className = "series-switcher__link--hidden"
                }
            }
        },
        h = e => {
            let t = new XMLHttpRequest;
            t.onreadystatechange = () => {
                if (t.readyState === XMLHttpRequest.DONE) {
                    let e = JSON.parse(t.response);
                    l(e.article_reaction_counts), s(), e.article_reaction_counts.forEach((e => {
                        d(e.category, e.count)
                    })), e.reactions.forEach((e => {
                        document.getElementById(`reaction-butt-${e.category}`) && u(e.category, "not-user-animated")
                    }))
                }
            }, t.open("GET", `/reactions?article_id=${e}`, !0), t.send()
        },
        b = () => {
            let e, t = document.getElementById("reaction-drawer-trigger");
            t && (t.addEventListener("click", (() => {
                let {
                    articleId: e
                } = document.getElementById("article-body").dataset;
                E(e, "like"), t.parentElement.classList.add("open")
            })), isTouchDevice() ? (watchForLongTouch(t), t.addEventListener("longTouch", (() => {
                t.parentElement.classList.add("open")
            })), document.addEventListener("touchstart", (e => {
                t.parentElement.contains(e.target) || t.parentElement.classList.remove("open")
            }))) : document.querySelectorAll(".hoverdown").forEach((t => {
                t.addEventListener("mouseover", (function() {
                    this.classList.add("open"), clearTimeout(e)
                })), t.addEventListener("mouseout", (() => {
                    e = setTimeout((() => {
                        document.querySelector(".hoverdown.open").classList.remove("open")
                    }), 500)
                }))
            })))
        },
        f = () => {
            document.addEventListener("click", (e => {
                let t = document.querySelector(".reaction-drawer"),
                    n = document.querySelector("#reaction-drawer-trigger");
                if (t && n) {
                    let o = t.contains(e.target) || n.contains(e.target),
                        a = document.querySelector(".hoverdown.open");
                    !o && a && a.classList.remove("open")
                }
            }))
        };
    (() => {
        p(), b(), f(), setTimeout((() => {
            let e = document.getElementsByClassName("crayons-reaction");
            if (document.getElementById("article-body") && e.length > 0) {
                let {
                    articleId: t
                } = document.getElementById("article-body").dataset;
                h(t);
                for (let n = 0; n < e.length; n += 1) e[n].classList.contains("pseudo-reaction") || (e[n].onclick = function() {
                    E(t, this.dataset.category)
                })
            }
            let t = document.getElementById("reaction-butt-comment"),
                n = document.getElementById("comments");
            document.getElementById("article-body") && n && t && (t.onclick = function() {
                n.scrollIntoView({
                    behavior: "smooth"
                })
            })
        }), 3)
    })()
})();