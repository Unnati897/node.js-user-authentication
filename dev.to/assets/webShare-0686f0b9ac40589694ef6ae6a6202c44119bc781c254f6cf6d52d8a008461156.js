(() => {
    var e = Object.create,
        t = Object.defineProperty,
        r = Object.getOwnPropertyDescriptor,
        n = Object.getOwnPropertyNames,
        o = Object.getPrototypeOf,
        i = Object.prototype.hasOwnProperty,
        a = (e, o, a, u) => {
            if (o && "object" == typeof o || "function" == typeof o)
                for (let c of n(o)) !i.call(e, c) && c !== a && t(e, c, {
                    get: () => o[c],
                    enumerable: !(u = r(o, c)) || u.enumerable
                });
            return e
        };
    u = ((e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports))(((e, t) => {
        var r, n;
        r = e, n = function() {
            "use strict";

            function e() {
                return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
            }
            var t = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                r = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                n = function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                },
                o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                };
            Object.setPrototypeOf(e.prototype, HTMLElement.prototype), Object.setPrototypeOf(e, HTMLElement);
            var i = function(e) {
                function i() {
                    t(this, i);
                    var e = o(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                    if (e.webShare = "share" in navigator, e.webShare) {
                        var r = e.getTemplateId();
                        if (null !== r) {
                            var n = document.getElementById(r);
                            if (!n) return o(e);
                            e.removeChildren();
                            var a = document.importNode(n.content, !0);
                            e.appendChild(a)
                        } else e.text = document.createTextNode(e.getAttribute("text") || "Share"), e.button = document.createElement("button"), e.button.appendChild(e.text), e.removeChildren(), e.appendChild(e.button);
                        e.share = e.share.bind(e)
                    }
                    return e
                }
                return n(i, e), r(i, [{
                    key: "share",
                    value: function(e) {
                        var t = this;
                        e.preventDefault();
                        var r = {
                            title: this.getTitle(),
                            text: this.getText(),
                            url: this.getUrl()
                        };
                        navigator.share(r).then((function() {
                            return t.successfulShare(r)
                        })).catch((function(e) {
                            return t.abortedShare(e, r)
                        }))
                    }
                }, {
                    key: "connectedCallback",
                    value: function() {
                        this.webShare && this.addEventListener("click", this.share)
                    }
                }, {
                    key: "disconnectedCallback",
                    value: function() {
                        this.webShare && this.removeEventListener("click", this.share)
                    }
                }, {
                    key: "successfulShare",
                    value: function(e) {
                        var t = new CustomEvent("share-success", e);
                        this.dispatchEvent(t, {
                            detail: e
                        })
                    }
                }, {
                    key: "abortedShare",
                    value: function(e, t) {
                        t.error = e;
                        var r = new CustomEvent("share-failure", {
                            detail: t
                        });
                        this.dispatchEvent(r)
                    }
                }, {
                    key: "getTitle",
                    value: function() {
                        return this.getAttribute("sharetitle")
                    }
                }, {
                    key: "getText",
                    value: function() {
                        return this.getAttribute("sharetext") || document.querySelector("title").textContent
                    }
                }, {
                    key: "getUrl",
                    value: function() {
                        if (this.getAttribute("shareurl")) return this.getAttribute("shareurl");
                        var e = document.querySelector("link[rel=canonical]");
                        return null !== e ? e.getAttribute("href") : window.location.href
                    }
                }, {
                    key: "getTemplateId",
                    value: function() {
                        return this.getAttribute("template")
                    }
                }, {
                    key: "removeChildren",
                    value: function() {
                        for (; this.firstChild;) this.removeChild(this.firstChild)
                    }
                }]), i
            }(e);
            return "customElements" in window && !customElements.get("web-share-wrapper") && customElements.define("web-share-wrapper", i), i
        }, "object" == typeof e && void 0 !== t ? t.exports = n() : "function" == typeof define && define.amd ? define(n) : r.WebShareWrapper = n()
    }))(), l = null != u ? e(o(u)) : {}, a(!c && u && u.__esModule ? l : t(l, "default", {
        value: u,
        enumerable: !0
    }), u);
    var u, c, l
})();