(() => {
    function e(e, t, n) {
        if (!e) return "";
        try {
            let r = new Date(e),
                a = new Intl.DateTimeFormat(t || "default", n).format(r);
            return "2-digit" === n.year ? a.replace(", ", " '") : a
        } catch {
            return ""
        }
    }

    function t(e, t) {
        for (let r = 0; r < e.length; r += 1) {
            let a = e[r],
                i = a.getAttribute(t || "datetime");
            if (i) {
                let e = n(i);
                a.setAttribute("title", e)
            }
        }
    }

    function n(t) {
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

    function r(t) {
        if (t) {
            let n = (new Date).getFullYear(),
                r = {
                    day: "numeric",
                    month: "short"
                };
            return new Date(t).getFullYear() !== n && (r.year = "numeric"), e(t, navigator.language, r)
        }
        return ""
    }
    "undefined" != typeof globalThis && (globalThis.timestampToLocalDateTimeLong = n, globalThis.timestampToLocalDateTimeShort = r), t(document.querySelectorAll(".crayons-story time, article time"), "datetime")
})();