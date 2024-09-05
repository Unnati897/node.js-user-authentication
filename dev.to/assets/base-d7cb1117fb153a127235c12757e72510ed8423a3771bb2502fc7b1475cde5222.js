function fetchNext(e, t, n) {
    var r = JSON.parse(e.dataset.params);
    const o = {};
    r.action && delete Object.assign(o, r, {
        controller_action: r.action
    }).action;
    var a = new URLSearchParams(o).toString();
    if (!(a.indexOf("q=") > -1)) {
        var i = `${t}?page=${nextPage}&${a}&signature=${parseInt(Date.now()/4e5,10)}`.replace("&&", "&");
        window.fetch(i).then((function(e) {
            e.json().then((function(e) {
                if (nextPage += 1, n(e), 0 === e.length) {
                    const e = document.getElementById("loading-articles");
                    e && (e.style.display = "none"), done = !0
                }
            }))
        })).catch((function(e) {
            console.log(e)
        }))
    }
}

function insertNext(e, t) {
    return function(n = []) {
        var r = document.getElementById("index-container"),
            o = JSON.parse(r.dataset.params).action || null,
            a = (e.action || null) === o,
            i = (document.getElementById(e.listId || "sublist"), "");
        n.forEach((function(n) {
            if (!document.getElementById((e.elId || "element") + "-" + n.id)) {
                var r = t(n);
                i += r
            }
        }));
        var s = document.getElementById("following-wrapper");
        s && a && s.insertAdjacentHTML("beforeend", i), nextPage > 0 && (fetching = !1)
    }
}

function buildFollowsHTML(e) {
    return '<div class="crayons-card p-4 m:p-6 flex s:grid single-article" id="follows-' + e.id + '"><a href="' + e.path + '" class="crayons-avatar crayons-avatar--2xl s:mb-2 s:mx-auto"><img alt="@' + e.username + ' profile image" class="crayons-avatar__image" src="' + e.profile_image + '" /></a><div class="pl-4 s:pl-0 self-center"><h3 class="s:mb-1 p-0"><a href="' + e.path + '">' + e.name + '</a></h3><p class="s:mb-4"><a href="' + e.path + '" class="crayons-link crayons-link--secondary">@' + e.username + "</a></p></div></div>"
}

function buildTagsHTML(e) {
    let t = "",
        n = "";
    e.explicit_points < 0 && (n = '<div>\n        <button class="c-btn c-btn--primary c-btn--destructive unhide-button">Unhide</button>\n      </div>'), e.explicit_points >= 0 && (t = `<div class="flex justify-between">\n      <div>\n        <button class="crayons-btn crayons-btn--outlined follow-button" aria-label="Following tag:${e.name}">Following</button>\n      </div>\n      <div class="dropdown-trigger-container relative">\n        <button type="button" aria-label="Unhide tag: ${e.name}" class="c-btn c-btn--icon-alone dropdown-trigger" id="options-dropdown-trigger-${e.tag_id}" aria-haspopup="true" aria-expanded="false" aria-controls="options-dropdown">\n          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="crayons-icon" role="img" aria-labelledby="arimcllskwkmbfpxyu52b8vzin20raon"><title id="arimcllskwkmbfpxyu52b8vzin20raon">Options</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>\n        </button>\n        <div class="crayons-dropdown right-0 left-0 s:left-auto" id="options-dropdown-${e.tag_id}">\n          <ul class="p-0">\n            <li>\n              <button type="button" class="hide-button c-btn w-100 align-left flex items-center" aria-label="Hide tag: ${e.name}">\n                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" class="crayons-icon" role="img" aria-labelledby="avelns726vzvmu4rpqxq8olxhll9obh"><title id="avelns726vzvmu4rpqxq8olxhll9obh">Hide tag</title>\n                  <path d="M17.882 19.297A10.95 10.95 0 0 1 12 21c-5.392 0-9.878-3.88-10.82-9a10.982 10.982 0 0 1 3.34-6.066L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.006 9.006 0 0 0 13.2 5.838l-2.027-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978-3.242-3.242a2.5 2.5 0 0 0 3.24 3.241l.002.001zm7.893 2.264-1.431-1.43a8.936 8.936 0 0 0 1.4-3.162A9.006 9.006 0 0 0 9.553 5.338L7.974 3.76A10.99 10.99 0 0 1 12 3c5.392 0 9.878 3.88 10.819 9a10.949 10.949 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.77l-4.77-4.77z"></path>\n                </svg>\n                <span class="ml-2">Hide tag</span>\n              </button>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>`);
    let r = "";
    return e.short_summary && (r = `<p class="mb-6 fs-s color-base-70 truncate-at-3">${e.short_summary}</p>`), `\n  <div class="dashboard__tag__container crayons-card p-3 pt-2 m:p-5 m:pt-4 relative flex flex-col single-article break-word content-center" id="follows-${e.id}" data-follow-id="${e.id}" data-tag-id="${e.tag_id}">\n    <div class="mb-1 flex items-center justify-between">\n      <h4 class="-ml-2">\n      <a href="/t/${e.name}" class="crayons-tag crayons-tag--l">\n        <span class="crayons-tag__prefix">#</span>${e.name}\n      </a>\n      </h4>\n      <div class="fs-xs color-base-60">${e.taggings_count.toLocaleString()} posts</div>\n    </div>\n    ${r}\n\n    ${n}\n    ${t}\n  </div>`
}

function fetchNextFollowingPage(e) {
    var t = JSON.parse(e.dataset.params).action;
    t.includes("users") ? fetchNext(e, "/followings/users", insertNext({
        elId: "follows",
        action: t
    }, buildFollowsHTML)) : t.includes("podcasts") ? fetchNext(e, "/followings/podcasts", insertNext({
        elId: "follows",
        action: t
    }, buildFollowsHTML)) : t.includes("organizations") ? fetchNext(e, "/followings/organizations", insertNext({
        elId: "follows",
        action: t
    }, buildFollowsHTML)) : (t.includes("hidden_tags"), fetchNext(e, "/followings/tags", insertNext({
        elId: "follows",
        action: t
    }, buildTagsHTML)))
}

function fetchNextFollowersPage(e) {
    fetchNext(e, "/api/followers/users", insertNext({
        elId: "follows"
    }, buildFollowsHTML))
}

function buildVideoArticleHTML(e) {
    return `<a href="${e.path}" id="video-article-${e.id}" class="crayons-card media-card">\n    <div class="media-card__artwork">\n      <img src="${e.cloudinary_video_url}" class="w-100 object-cover block aspect-16-9 h-auto" width="320" height="180" alt="${e.title}">\n      <span class="media-card__artwork__badge">${e.video_duration_in_minutes}</span>\n    </div>\n    <div class="media-card__content">\n      <h2 class="fs-base mb-2 fw-medium">${e.title}</h2>\n      <small class="fs-s">\n        ${e.user.name}\n      </small>\n    </div>\n  </a>`
}

function insertVideos(e) {
    document.getElementById("subvideos");
    var t = "";
    e.forEach((function(e) {
        if (!document.getElementById("video-article-" + e.id)) {
            var n = buildVideoArticleHTML(e);
            t += n
        }
    }));
    document.documentElement.scrollHeight, document.body.scrollTop;
    var n = document.querySelector(".js-video-collection"),
        r = document.createRange().createContextualFragment(t);
    n.appendChild(r), nextPage > 0 && (fetching = !1)
}

function fetchNextVideoPage(e) {
    fetchNext(e, "/api/videos", insertVideos)
}

function insertArticles(e) {
    document.getElementById("substories");
    var t = "",
        n = document.getElementById("home-articles-object"),
        r = userData(),
        o = r && r.id;
    n && (n.outerHTML = ""), e.forEach((function(e) {
        var n = document.getElementById("article-link-" + e.id);
        if (!["/", "/top/week", "/top/month", "/top/year", "/top/infinity", "/latest"].includes(window.location.pathname) && n && n.parentElement && n.parentElement.classList.contains("crayons-story") && !document.getElementById("video-player-" + e.id)) n.parentElement.outerHTML = buildArticleHTML(e, o);
        else if (!n) {
            var r = buildArticleHTML(e, o);
            t += r, initializeReadingListIcons()
        }
    }));
    document.documentElement.scrollHeight, document.body.scrollTop;
    var a = document.createElement("div");
    a.classList.add("paged-stories"), a.innerHTML = t, a.addEventListener("click", (e => {
        const {
            classList: t
        } = e.target;
        if (t.contains("crayons-story") || t.contains("crayons-story__top") || t.contains("crayons-story__body") || t.contains("crayons-story__indention") || t.contains("crayons-story__title") || t.contains("crayons-story__tags") || t.contains("crayons-story__bottom")) {
            let t = e.target,
                {
                    articlePath: n
                } = t.dataset;
            for (; !n;) n = t.dataset.articlePath, t = t.parentElement;
            InstantClick.preload(n), InstantClick.display(n)
        }
    }));
    var i = document.querySelectorAll(".single-article, .crayons-story");
    insertAfter(a, i[i.length - 1]), window.observeFeedElements && e.length > 0 && window.observeFeedElements(), nextPage > 0 && (fetching = !1)
}

function paginate(e, t, n) {
    const r = Object.assign({
        per_page: 15,
        page: nextPage
    }, JSON.parse(t));
    e && e.length > 0 && (r.tag_names = r.tag_names || [], r.tag_names.push(e)), r.approved = "true" === n ? "true" : "";
    var o = document.getElementById("index-container");
    if ("base-feed" === o.dataset.feed) {
        r.class_name = "Article";
        if ("/" == window.location.pathname && userData()) {
            const e = JSON.parse(userData().followed_tags).reduce((function(e, t) {
                return t.points < 0 && e.push(t.name), e
            }), []);
            r.hidden_tags = e
        }
    } else "latest" === o.dataset.feed ? (r.class_name = "Article", r.sort_by = "published_at") : (r.class_name = "Article", r["published_at[gte]"] = o.dataset.articlesSince, r.sort_by = "public_reactions_count");
    const a = new URLSearchParams;
    Object.keys(r).forEach((e => {
        const t = r[e];
        Array.isArray(t) ? t.forEach((t => {
            a.append(`${e}[]`, t)
        })) : a.append(e, t)
    })), fetch(`/search/feed_content?${a.toString()}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "X-CSRF-Token": window.csrfToken,
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }).then((e => e.json())).then((e => {
        nextPage += 1, insertArticles(e.result);
        const t = new CustomEvent("checkBlockedContent");
        if (window.dispatchEvent(t), initializeReadingListIcons(), 0 === e.result.length) {
            const e = document.getElementById("loading-articles");
            e && (e.style.display = "none"), done = !0
        }
    }))
}

function fetchNextPageIfNearBottom() {
    var e = document.getElementById("index-container");
    if (e && !document.getElementById("query-wrapper")) {
        var t, n, r = e.dataset.which;
        "videos" === r ? (n = document.getElementById("main-content"), t = function() {
            fetchNextVideoPage(e)
        }) : "followers" === r ? (n = document.getElementById("user-dashboard"), t = function() {
            fetchNextFollowersPage(e)
        }) : "following" === r ? (n = document.getElementById("user-dashboard"), t = function() {
            fetchNextFollowingPage(e)
        }) : (n = document.getElementById("main-content") || document.getElementById("articles-list"), t = function() {
            paginate(e.dataset.tag, e.dataset.params, e.dataset.requiresApproval)
        }), !done && !fetching && window.scrollY > n.scrollHeight - 3700 && (fetching = !0, t())
    }
}

function checkIfNearBottomOfPage() {
    const e = document.getElementById("loading-articles");
    document.getElementsByClassName("crayons-story").length < 2 && document.getElementsByClassName("single-article").length < 2 || window.location.search.indexOf("q=") > -1 ? (e && (e.style.display = "none"), done = !0) : e && (e.style.display = "block"), fetchNextPageIfNearBottom(), setInterval((function() {
        fetchNextPageIfNearBottom()
    }), 210)
}

function initScrolling() {
    document.getElementById("index-container") && (initScrolling.called = !0, checkIfNearBottomOfPage())
}

function initializeAllTagEditButtons() {
    var e = document.getElementById("tag-edit-button"),
        t = document.getElementById("tag-admin-button"),
        n = userData();
    n.admin && t && (t.style.display = "inline-block", document.getElementById("tag-admin-button").style.display = "inline-block"), n && e && (n.moderator_for_tags.indexOf(e.dataset.tag) > -1 || n.admin) && (e.style.display = "inline-block", document.getElementById("tag-mod-button").style.display = "inline-block")
}

function initializeProfileImage(e) {
    document.getElementById("comment-primary-user-profile--avatar") && (document.getElementById("comment-primary-user-profile--avatar").src = e.profile_image_90)
}

function addRelevantButtonsToArticle(e) {
    var t = document.getElementById("article-show-container");
    if (t && "true" !== t.dataset.buttonsInitialized) {
        let n = [];
        const r = JSON.parse(t.dataset.published),
            o = JSON.parse(t.dataset.scheduled);
        if (parseInt(t.dataset.authorId, 10) === e.id) {
            n.push(`<a class="crayons-btn crayons-btn--s crayons-btn--ghost px-2" href="${t.dataset.path}/edit" rel="nofollow">Edit</a>`);
            let e = document.getElementById("author-click-to-edit");
            e && (e.style.display = "inline-block"), !0 !== r || o || n.push(`<a class="crayons-btn crayons-btn--s crayons-btn--ghost px-2" id ="article-action-space-manage" href="${t.dataset.path}/manage" rel="nofollow">Manage</a>`), n.push(`<a class="crayons-btn crayons-btn--s crayons-btn--ghost px-2" href="${t.dataset.path}/stats" rel="nofollow">Stats</a>`)
        }
        const {
            articleId: a,
            pinnedArticleId: i
        } = t.dataset;
        e.admin && n.push(`<a class="crayons-btn crayons-btn--s crayons-btn--ghost px-2" href="/admin/content_manager/articles/${a}" data-no-instant>Admin</a>`), document.getElementById("action-space").innerHTML = n.join(""), t.dataset.buttonsInitialized = "true"
    }
}

function addRelevantButtonsToComments(e) {
    if (document.getElementById("comments-container")) {
        var t = document.getElementsByClassName("comment-actions");
        for (let n = 0; n < t.length; n += 1) {
            let r = t[n];
            const {
                action: o,
                commentableUserId: a,
                userId: i
            } = r.dataset;
            parseInt(i, 10) === e.id && "settings-button" === o && (r.innerHTML = '<a href="' + r.dataset.path + '" rel="nofollow" class="crayons-link crayons-link--block" data-no-instant>Settings</a>', r.classList.remove("hidden"), r.classList.add("block")), "hide-button" === o && parseInt(a, 10) === e.id && (r.classList.remove("hidden"), r.classList.add("block"))
        }
        if (e.trusted) {
            var n = document.getElementsByClassName("mod-actions");
            for (let e = 0; e < n.length; e += 1) {
                let t = n[e];
                t.classList.contains("mod-actions-comment-button") && (t.innerHTML = '<a href="' + t.dataset.path + '" rel="nofollow" class="crayons-link crayons-link--block">Moderate</a>'), t.className = "mod-actions", t.classList.remove("hidden"), t.classList.add("block")
            }
        }
    }
}

function setCurrentUserToNavBar(e) {
    const t = document.getElementById("first-nav-link");
    t.href = `/${e.username}`, t.getElementsByTagName("span")[0].textContent = e.name, t.getElementsByTagName("small")[0].textContent = `@${e.username}`, document.getElementById("nav-profile-image").src = e.profile_image_90, e.admin && document.getElementsByClassName("js-header-menu-admin-link")[0].classList.remove("hidden")
}

function initializeBaseUserData() {
    const e = userData();
    setCurrentUserToNavBar(e), initializeProfileImage(e), addRelevantButtonsToArticle(e), addRelevantButtonsToComments(e)
}

function initializeBillboardVisibility() {
    var e = document.querySelectorAll("[data-display-unit]");
    if (!e || 0 != e.length) {
        var t = userData();
        e.forEach((e => {
            t && !t.display_sponsors && "external" == e.dataset.typeOf ? e.classList.add("hidden") : e.classList.remove("hidden")
        }))
    }
}

function trackAdImpression(e) {
    var t = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent),
        n = e.dataset.impressionRecorded;
    if (!t && !n) {
        var r = document.querySelector("meta[name='csrf-token']"),
            o = r && r.getAttribute("content"),
            a = {
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
                "X-CSRF-Token": o,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(a),
            credentials: "same-origin"
        }).catch((e => console.error(e))), e.dataset.impressionRecorded = !0
    }
}

function trackAdClick(e, t, n) {
    if (t && !t.target.closest("a")) return;
    const r = {
        billboard_event: {
            billboard_id: e.dataset.id,
            context_type: e.dataset.contextType,
            category: e.dataset.categoryClick,
            article_id: e.dataset.articleId
        }
    };
    localStorage && (r.path = n, r.time = new Date, localStorage.setItem("last_interacted_billboard", JSON.stringify(r)));
    var o = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent),
        a = e.dataset.clickRecorded;
    if (!o && !a) {
        var i = document.querySelector("meta[name='csrf-token']"),
            s = i && i.getAttribute("content");
        window.fetch("/bb_tabulations", {
            method: "POST",
            headers: {
                "X-CSRF-Token": s,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(r),
            credentials: "same-origin"
        }), e.dataset.clickRecorded = !0
    }
}

function observeBillboards() {
    let e = new IntersectionObserver((e => {
        e.forEach((e => {
            if (e.isIntersecting) {
                let t = e.target;
                e.intersectionRatio >= .25 && setTimeout((function() {
                    trackAdImpression(t)
                }), 1)
            }
        }))
    }), {
        root: null,
        rootMargin: "0px",
        threshold: .25
    });
    document.querySelectorAll("[data-display-unit]").forEach((t => {
        const n = window.location.pathname;
        e.observe(t), t.removeEventListener("click", trackAdClick, !1), t.addEventListener("click", (function(e) {
            trackAdClick(t, e, n)
        }))
    }))
}

function removeExistingCSRF() {
    var e = document.querySelector("meta[name='csrf-token']"),
        t = document.querySelector("meta[name='csrf-param']");
    e && t && (e.parentNode.removeChild(e), t.parentNode.removeChild(t))
}

function fetchBaseData() {
    fetch("/async_info/base_data").then((e => e.json())).then((({
        token: e,
        param: t,
        broadcast: n,
        user: r,
        creator: o,
        client_geolocation: a,
        default_email_optin_allowed: i
    }) => {
        e && removeExistingCSRF();
        const s = document.createElement("meta");
        s.name = "csrf-param", s.content = t, document.head.appendChild(s);
        const c = document.createElement("meta");
        c.name = "csrf-token", c.content = e, document.head.appendChild(c), document.body.dataset.loaded = "true", n && (document.body.dataset.broadcast = n), checkUserLoggedIn() ? (document.body.dataset.user = r, document.body.dataset.creator = o, document.body.dataset.clientGeolocation = JSON.stringify(a), document.body.dataset.default_email_optin_allowed = i, browserStoreCache("set", r), setTimeout((() => {
            "function" == typeof ga && ga("set", "userId", JSON.parse(r).id), "function" == typeof gtag && gtag("set", "user_Id", JSON.parse(r).id)
        }), 400)) : (delete document.body.dataset.user, delete document.body.dataset.creator, browserStoreCache("remove"))
    }))
}

function initializeBodyData() {
    fetchBaseData()
}

function broadcastData() {
    const {
        broadcast: e = null
    } = document.body.dataset;
    return JSON.parse(e)
}

function camelizedBroadcastKey(e) {
    return `${e.replace(/\W+(.)/g,((e,t)=>t.toUpperCase()))}Seen`
}

function addCloseButtonClickHandle(e) {
    document.getElementsByClassName("close-announcement-button")[0].onclick = () => {
        localStorage.setItem(camelizedBroadcastKey(e), !0), document.getElementById("active-broadcast").remove()
    }
}

function renderBroadcast(e, t) {
    const {
        banner_class: n,
        html: r,
        title: o
    } = t;
    if (n) {
        const [t, r] = n.split(" ");
        r ? e.classList.add(t, r) : e.classList.add(t)
    }
    const a = '<button class="close-announcement-button crayons-btn crayons-btn--icon-rounded crayons-btn--inverted crayons-btn--ghost">\n    <svg class="crayons-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z" /></svg>\n  </button>';
    e.insertAdjacentHTML("afterbegin", `<div class='broadcast-data'>${r}</div>${a}`), addCloseButtonClickHandle(o), e.classList.add("broadcast-visible")
}

function initializeBroadcast() {
    const e = window.location.pathname.match(/^(?:\/connect|\/new)/);
    if (window.frameElement || e) {
        const e = document.getElementById("active-broadcast");
        return void(e && e.classList.remove("broadcast-visible"))
    }
    const t = userData(),
        n = broadcastData();
    if (t && !t.display_announcements) return;
    if (!n) return;
    const {
        title: r
    } = n;
    if (!0 === JSON.parse(localStorage.getItem(camelizedBroadcastKey(r)))) return;
    const o = document.getElementById("active-broadcast");
    o.firstElementChild ? o.classList.contains("broadcast-visible") || o.classList.toggle("broadcast-visible") : renderBroadcast(o, n)
}

function initializeCommentDate() {
    addLocalizedDateTimeToElementsTitles(document.querySelectorAll(".comment-date time"), "datetime")
}

function initializeCommentsPage() {
    if (document.getElementById("comments-container")) {
        toggleCodeOfConduct();
        var e = document.body.getAttribute("data-user-status"),
            t = document.getElementById("comments-container").dataset.commentableId,
            n = document.getElementById("comments-container").dataset.commentableType,
            r = document.getElementById("comments-container").dataset.hasRecentCommentActivity;
        if (commentableIdList = t.split(","), "logged-in" === e || "false" !== r)(function() {
            for (var e = 0; e < commentableIdList.length; e++) ! function(e) {
                var t;
                (t = new XMLHttpRequest).onreadystatechange = function() {
                    if (t.readyState === XMLHttpRequest.DONE) {
                        for (var e = JSON.parse(t.response), n = e.reactions, r = document.getElementsByClassName("single-comment-node"), o = e.public_reaction_counts, a = 0; a < n.length; a++) {
                            (i = document.getElementById("button-for-comment-" + n[a].reactable_id)) && (i.classList.add("reacted"), i.setAttribute("aria-pressed", "true"))
                        }
                        for (a = 0; a < o.length; a++) {
                            var i;
                            if (i = document.getElementById("button-for-comment-" + o[a].id)) {
                                var s = i.querySelector(".reactions-count"),
                                    c = i.querySelector(".reactions-label");
                                o[a].count > 0 && c ? (o[a].count > 1 ? c.innerHTML = `&nbsp;${I18n.t("core.like").toLowerCase()}s` : c.innerHTML = `&nbsp;${I18n.t("core.like").toLowerCase()}`, s.id = "reactions-count-" + o[a].id, s.innerHTML = o[a].count, s.classList.remove("hidden")) : (s.classList.add("hidden"), s.innerHTML = "0"), i.classList.contains("reacted") || i.setAttribute("aria-pressed", "false")
                            }
                        }
                        for (a = 0; a < r.length; a++)
                            if (r[a].dataset.commentAuthorId == e.current_user.id) {
                                r[a].dataset.currentUserComment = "true";
                                var l = r[a].dataset.path,
                                    u = r[a].querySelector(".current-user-actions"),
                                    d = document.getElementById("button-for-comment-" + r[a].dataset.commentId);
                                u && d && (u.innerHTML = `<li><a href="${l}/edit" class="crayons-link crayons-link--block" aria-label="Edit this comment">Edit</a></li>\n                                                <li><a data-no-instant href="${l}/delete_confirm" class="edit-butt crayons-link crayons-link--block" aria-label="Delete this comment">Delete</a></li>`, u.classList.remove("hidden"))
                            }
                    }
                }, t.open("GET", "/reactions?commentable_id=" + commentableIdList[e] + "&commentable_type=" + n, !0), t.send()
            }(e)
        })();
        for (var o = document.getElementsByClassName("reaction-button"), a = 0; a < o.length; a++) {
            o[a].onclick = function(e) {
                function t(e) {
                    var t = n.querySelector(".reactions-count"),
                        r = n.querySelector(".reactions-label");
                    "create" === e.result ? (n.classList.add("reacted"), n.setAttribute("aria-pressed", "true"), t && (t.innerHTML = parseInt(t.innerHTML) + 1, t.classList.remove("hidden"), 1 == parseInt(t.innerHTML) ? r.innerHTML = "&nbsp;like" : parseInt(t.innerHTML) > 1 && (r.innerHTML = "&nbsp;likes"))) : (n.classList.remove("reacted"), n.setAttribute("aria-pressed", "false"), t && (t.innerHTML = parseInt(t.innerHTML) - 1, 0 == parseInt(t.innerHTML) && (t.classList.add("hidden"), n.classList.remove("crayons-btn--icon-left"), n.classList.add("crayons-btn--icon"), r.innerHTML = "")))
                }
                var n = this;
                if (e.preventDefault(), sendHapticMessage("medium"), "logged-out" !== document.body.getAttribute("data-user-status")) {
                    n.classList.add("reacted"), n.disabled = !0;
                    var r = new FormData;
                    r.append("reactable_type", "Comment"), r.append("reactable_id", n.dataset.commentId), getCsrfToken().then(sendFetch("reaction-creation", r)).then((function(e) {
                        n.disabled = !1, 200 === e.status ? e.json().then(t) : showModalAfterError({
                            response: e,
                            element: "reaction",
                            action_ing: "making",
                            action_past: "made"
                        })
                    }))
                } else showLoginModal({
                    referring_source: "comment",
                    trigger: "like"
                })
            }
        }
        var i = document.getElementsByClassName("toggle-reply-form");
        for (a = 0; a < i.length; a++) {
            i[a].onclick = function(e) {
                if (e.preventDefault(), e.target.classList.contains("thread-indication")) return !1;
                if ("logged-out" != document.body.getAttribute("data-user-status")) {
                    var r = e.target.closest(".comment").dataset.commentId,
                        o = setInterval((function() {
                            document.querySelector("meta[name='csrf-token']") && (clearInterval(o), commentWrapper = e.target.closest(".comment__details"), commentWrapper.classList.add("replying"), commentWrapper.innerHTML += buildCommentFormHTML(t, n, r), initializeCommentsPage(), setTimeout((function() {
                                commentWrapper.getElementsByTagName("textarea")[0].focus()
                            }), 30))
                        }), 1);
                    return !1
                }
                showLoginModal({
                    referring_source: "comment",
                    trigger: "reply"
                })
            }
        }
        document.getElementById("new_comment") && document.getElementById("new_comment").addEventListener("submit", handleCommentSubmit)
    }
    listenForDetailsToggle(), handleHiddenComments(n)
}

function toggleCodeOfConduct() {
    var e = userData();
    if (e) {
        var t = e.checked_code_of_conduct,
            n = document.getElementById("toggle-code-of-conduct-checkbox");
        n && !t && (n.innerHTML = '<input type="checkbox" name="checked_code_of_conduct" class="checkbox" required/>                                  <label for="checked_code_of_conduct">I\'ve read the <a href="/code-of-conduct">code of conduct</a></label>')
    }
}

function handleCommentSubmit(e) {
    e.preventDefault();
    var t = e.target;
    t.classList.add("submitting");
    var n = t.getElementsByClassName("comment-textarea")[0];
    n && (n.style.height = null, n.blur());
    var r = document.getElementById("comment-node-" + e.target.dataset.commentId),
        o = t.querySelector("#comment_parent_id"),
        a = JSON.stringify({
            comment: {
                body_markdown: t.getElementsByTagName("textarea")[0].value,
                commentable_id: t.querySelector("#comment_commentable_id").value,
                commentable_type: t.querySelector("#comment_commentable_type").value,
                parent_id: o ? o.value : null
            }
        });
    return getCsrfToken().then(sendFetch("comment-creation", a)).then((function(n) {
        return 200 !== n.status ? (t.classList.remove("submitting"), showModalAfterError({
            response: n,
            element: "comment",
            action_ing: "posting",
            action_past: "posted"
        }), !1) : (n.json().then((function(n) {
            var o = document.createElement("div");
            o.innerHTML = buildCommentHTML(n);
            var a = document.body,
                i = JSON.parse(a.getAttribute("data-user"));
            i.checked_code_of_conduct = !0, a.dataset.user = JSON.stringify(i);
            var s = t.getElementsByClassName("code-of-conduct")[0];
            s && (s.innerHTML = "");
            var c = document.getElementById("new_comment");
            if (r) {
                if (handleFormClose(e), n.depth > 3) {
                    var l = r.getElementsByClassName("toggle-reply-form")[0],
                        u = `<span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">${iconSmallThread}Thread</span>`;
                    l.classList.replace("inline-flex", "hidden"), l.parentNode.innerHTML += u
                }
                var d = r.getElementsByClassName("comment__inner")[0];
                d.parentNode.insertBefore(o, d.nextSibling)
            } else if (c) {
                (c = document.getElementById("new_comment")).classList.remove("submitting"), c.classList.remove("preview-open");
                const e = [...t.getElementsByClassName("comment-textarea")];
                e[0].closest(".comment-form").classList.remove("comment-form--initiated"), e.forEach((e => {
                    e.value = n.comment_template || "", e.style.height = null
                }));
                const r = document.getElementById("preview-div"),
                    a = document.querySelector(".preview-toggle");
                r.innerHTML = "", a.innerHTML = "Preview";
                const i = document.getElementById("comment-trees-container");
                i.insertBefore(o, i.firstChild)
            } else if (document.getElementById("notifications-container")) {
                var f = document.createElement("span");
                f.innerHTML = '<div class="crayons-notice align-center p-2 m-2 crayons-notice--success reply-sent-notice reply-sent-notice" aria-live="polite">Reply sent \u2014 <a href="' + n.url + '">Check it out</a></div>', t.replaceWith(f)
            } else window.location.replace(n.url);
            updateCommentsCount(), initializeCommentsPage(), initializeCommentDate(), activateRunkitTags()
        })), !1)
    })), !1
}

function handleFocus(e) {
    handleButtonsActivation(e);
    var t = document.body.getAttribute("data-user-status"),
        n = e.target;
    if ("logged-out" == t) e.preventDefault(), showLoginModal({
        referring_source: "comments",
        trigger: "new_comment"
    }), n.blur();
    else {
        var r = e.target.closest(".comment-form");
        r && r.classList.add("comment-form--initiated"), handleSizeChange(e), window.Forem.initializeEnhancedCommentTextArea(n)
    }
}

function handleKeyUp(e) {
    handleSizeChange(e), handleButtonsActivation(e)
}

function handleSubmit(e) {
    var t = userData();
    t && (t.checked_code_of_conduct && "" !== e.target.value.trim() && e.target.closest("form").querySelector('button[type="submit"]').click())
}

function handleKeyDown(e) {
    window.Forem.Runtime.hasOSSpecificModifier(e) && e.keyCode === ENTER_KEY_CODE && (e.preventDefault(), handleSubmit(e))
}

function handleFormClose(e) {
    e.target.closest(".inner-comment").classList.remove("replying"), e.target.closest(".comment-form").remove(), initializeCommentsPage()
}

function handleSizeChange(e) {
    var t = e.target,
        n = parseInt(t.style.height.replace("px", ""));
    t.style.height = t.scrollHeight + (t.scrollHeight > n ? 15 : 0) + "px"
}

function handleButtonsActivation(e) {
    var t = e.target;
    if (t.closest(".comment-form")) {
        var n = t.closest(".comment-form").getElementsByClassName("js-btn-enable");
        Array.from(n).forEach((function(e) {
            e.disabled = 0 === t.value.length
        }))
    }
}

function validateField(e) {
    "" !== e.target.form.querySelector(".comment-textarea:not([role=combobox])").value || e.preventDefault()
}

function handleChange(e) {
    handleButtonsActivation(e)
}

function generateUploadFormdata(e) {
    var t = document.querySelector("meta[name='csrf-token']").content,
        n = new FormData;
    return n.append("authenticity_token", t), n.append("image", e[0]), n
}

function updateItemSummaryHtml(e) {
    var t = e.getElementsByClassName("js-collapse-comment-content")[0],
        n = e.getElementsByClassName("js-comment-username"),
        r = "";
    n.length > 1 && (r = " + " + (n.length - 1) + " replies");
    var o = n[0].textContent + r;
    e.open ? t.textContent = "" : t.textContent = o
}

function listenForDetailsToggle() {
    for (var e = document.querySelectorAll(".js-comment-wrapper"), t = 0; t < e.length; t++) e[t].addEventListener("toggle", (e => {
        updateItemSummaryHtml(e.target)
    }))
}

function updateCommentsCount() {
    const e = document.querySelector(".js-comments-count");
    if (!e) return;
    const t = parseInt(e.dataset.commentsCount, 10) + 1;
    e.dataset.commentsCount = t, e.innerHTML = `(${t})`;
    const n = document.getElementById("reaction-number-comment");
    n && (n.innerHTML = `${t}`)
}

function initializeCommentDate() {
    const e = document.querySelectorAll(".comment-date time");
    e && addLocalizedDateTimeToElementsTitles(e, "datetime")
}

function handleHiddenComments(e) {
    const t = userData(),
        n = [];
    let r = "";
    if ("Article" === e) {
        const e = document.querySelector("#article-show-container");
        if (e) e.dataset && (n.push(e.dataset.authorId), r = e.dataset.coAuthorIds, r && r.split(",").forEach((e => {
            n.push(e)
        })));
        else {
            const e = document.querySelector("#comments-container");
            e && e.dataset && (n.push(e.dataset.commentableAuthorId), r = e.dataset.commentableCoAuthorIds, r && r.split(",").forEach((e => {
                n.push(e)
            })))
        }
    } else if ("PodcastEpisode" === e) {
        const e = document.querySelector(".podcast-episode-container");
        e && n.push(e.dataset.creatorId)
    }
    t && n.includes(t.id.toString()) ? collapseCommentsHiddenByCommentableUser() : (document.querySelectorAll(".element-hidden-by-commentable-user").forEach((e => {
        e.classList.add("hidden")
    })), document.querySelectorAll(".comment-hidden-by-author-text").forEach((e => {
        e.classList.remove("hidden")
    })))
}

function collapseCommentsHiddenByCommentableUser() {
    document.querySelectorAll(".js-comment-wrapper.details-comment-hidden-by-commentable-user").forEach((e => {
        0 === e.querySelectorAll(".comment-form").length && (e.open = !1, updateItemSummaryHtml(e))
    }))
}

function initializeCreditsPage() {
    localizeTimeElements(document.querySelectorAll(".ledger time"), {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })
}

function initializeLocalStorageRender() {
    try {
        var e = browserStoreCache("get");
        e && (document.body.dataset.user = e, initializeBaseUserData(), initializeReadingListIcons(), initializeBillboardVisibility())
    } catch (e) {
        browserStoreCache("remove")
    }
}

function initializeOnboardingTaskCard() {
    if ("yes" === localStorage.getItem("task-card-closed")) return;
    var e = document.getElementsByClassName("onboarding-task-card")[0];
    const t = userData();
    if (null != e && t) {
        var n = new Date(t.created_at),
            r = new Date;
        n > r.setDate(r.getDate() - 7) && (e.style.display = "block")
    }
}

function initializePaymentPointers() {
    var e = document.getElementById("author-payment-pointer"),
        t = document.getElementById("base-payment-pointer"),
        n = document.querySelector("meta[name='monetization']");
    e && n ? n.content = e.dataset.paymentPointer : t && (n.content = t.dataset.paymentPointer)
}

function initializeReadingListIcons() {
    setReadingListButtonsState(), addReadingListCountToHomePage()
}

function setReadingListButtonsState() {
    var e = document.querySelectorAll(".bookmark-button:not([data-initial-feed])");
    Array.from(e).forEach(highlightButton)
}

function highlightButton(e) {
    var t = userData(),
        n = parseInt(e.dataset.reactableId, 10);
    t && t.reading_list_ids.indexOf(n) > -1 ? e.classList.add("selected") : e.classList.remove("selected"), e.addEventListener("click", reactToReadingListButtonClick), e.dataset.saveInitialized = !0
}

function addReadingListCountToHomePage() {
    const e = userData(),
        t = document.querySelectorAll(".js-reading-list-count");
    e && t && t.forEach((function(t) {
        const n = e.reading_list_ids.length > 0 ? e.reading_list_ids.length : "";
        t.innerHTML = n, t.dataset.count = e.reading_list_ids.length
    }))
}

function reactToReadingListButtonClick(e) {
    var t;
    e.preventDefault(), sendHapticMessage("medium"), "logged-out" !== document.body.getAttribute("data-user-status") ? (renderOptimisticResult(t = properButtonFromEvent(e)), getCsrfToken().then(sendFetch("reaction-creation", buttonFormData(t))).then((function(e) {
        if (200 === e.status) return e.json().then((function(e) {
            renderButtonState(t, e), renderNewSidebarCount(t, e)
        }))
    })).catch((function() {}))) : showLoginModal({
        referring_source: "post_index_toolbar",
        trigger: "reading_list"
    })
}

function renderButtonState(e, t) {
    "create" === t.result ? e.classList.add("selected") : e.classList.remove("selected")
}

function renderNewSidebarCount(e, t) {
    const n = document.querySelectorAll(".js-reading-list-count");
    n && n.forEach((function(e) {
        const n = parseInt(e.dataset.count, 10);
        let r;
        "create" === t.result ? r = n + 1 : 0 !== n && (r = n - 1), e.dataset.count = r, e.innerHTML = r > 0 ? r : ""
    }))
}

function buttonFormData(e) {
    var t = new FormData;
    return t.append("reactable_type", "Article"), t.append("reactable_id", e.dataset.reactableId), t.append("category", "readinglist"), t
}

function renderOptimisticResult(e) {
    renderButtonState(e, {
        result: "create"
    })
}

function properButtonFromEvent(e) {
    return "BUTTON" === e.target.tagName ? e.target : e.target.parentElement
}

function isReadingListButtonHoverTarget(e) {
    var t = e.classList;
    return "BUTTON" === e.tagName && t.contains("bookmark-button") && t.contains("selected") || "SPAN" === e.tagName && t.contains("bm-success")
}

function readingListButtonMouseHandler(e) {
    var t = e.target;
    if (isReadingListButtonHoverTarget(t)) {
        e.preventDefault();
        var n = this;
        ("BUTTON" === t.tagName ? t.getElementsByClassName("bm-success")[0] : t).innerHTML = n
    }
}

function browserStoreCache(e, t) {
    try {
        switch (e) {
            case "set":
                localStorage.setItem("current_user", t),
                    localStorage.setItem("config_body_class", JSON.parse(t).config_body_class);
                break;
            case "remove":
                localStorage.removeItem("current_user");
                break;
            default:
                return localStorage.getItem("current_user")
        }
    } catch (e) {
        navigator.cookieEnabled && browserStoreCache("remove")
    }
}

function buildArticleHTML(e, t = null) {
    var n = '<svg width="24" height="24" viewBox="0 0 24 24" class="crayons-icon" xmlns="http://www.w3.org/2000/svg"><path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"/></svg>';
    if (e && "Tag" === e.class_name) return `<article class="crayons-story">\n        <div class="crayons-story__body flex items-start gap-2">\n          <span class="radius-default p-2 shrink-0" style="background: ${e.bg_color_hex||"#000000"}1a; color: ${e.bg_color_hex||"#000"}">\n            ${n}\n          </span>\n          <div>\n            <h3 class="crayons-subtitle-2 lh-tight py-2">\n              <a href="/t/${e.name}" class="c-link">\n                ${e.name}\n              </a>\n            </h3>\n            ${e.short_summary?`<div class="truncate-at-3">${e.short_summary}</div>`:""}\n          </div>\n        </div>\n      </article>`;
    if (e && "PodcastEpisode" === e.class_name) return `<article class="crayons-story crayons-podcast-episode mb-2">\n        <div class="crayons-story__body flex flex-start">\n          <a href="${e.podcast.slug}" class="crayons-podcast-episode__cover">\n            <img src="${e.podcast.image_url}" alt="${e.podcast.title}" loading="lazy" />\n          </a>\n          <div class="pt-2 flex-1">\n            <p class="crayons-podcast-episode__author">\n              ${e.podcast.title}\n            </p>\n            <h2 class="crayons-podcast-episode__title crayons-story__title mb-0">\n              <a href="${e.path}" id="article-link-${e.id}">\n                ${e.podcast.title}\n              </a>\n            </h2>\n          </div>\n        </div>\n      </article>`;
    if (e && "Organization" === e.class_name) {
        const t = `\n      <article class="crayons-story">\n        <div class="crayons-story__body flex items-start gap-2">\n          <a href="${e.slug}" class="crayons-podcast-episode__cover">\n            <img src="${e.profile_image.url}" alt="" loading="lazy" />\n          </a>\n          <div>\n            <h3 class="crayons-subtitle-2 lh-tight py-1">\n              <a href="${e.slug}" class="c-link"> ${e.name} </a>\n            </h3>\n            <p class="crayons-story__slug-segment">@${e.slug}</p>\n            ${e.summary?`<div class="truncate-at-3 top-margin-4">${e.summary}</div>`:""}\n          </div>\n          <div class="print-hidden" style="margin-left: auto">\n            <button class="crayons-btn follow-action-button whitespace-nowrap follow-user w-100" data-info=''>Follow</button>\n          </div>\n        </div>\n      </article>\n    `,
            n = (new DOMParser).parseFromString(t, "text/html");
        return n.querySelector("img").alt = e.name, n.querySelector("button").dataset.info = JSON.stringify({
            id: e.id,
            name: e.name,
            className: "Organization",
            style: "full"
        }), n.body.innerHTML
    }
    if (e && "User" === e.class_name && void 0 === e.user) {
        const t = `\n      <article class="crayons-story">\n        <div class="crayons-story__body flex items-start gap-2">\n          <a href="${e.username}" class="crayons-podcast-episode__cover">\n            <img src="${e.profile_image.url}" alt="" loading="lazy" />\n          </a>\n          <div>\n            <h3 class="crayons-subtitle-2 lh-tight py-1">\n              <a href="${e.username}" class="c-link"> ${e.name} </a>\n            </h3>\n            <p class="crayons-story__slug-segment">@${e.username}</p>\n            ${e.summary?`<div class="truncate-at-3 top-margin-4">${e.summary}</div>`:""}\n          </div>\n          <div class="print-hidden" style="margin-left: auto">\n            <button class="crayons-btn follow-action-button whitespace-nowrap follow-user w-100" data-info=''>Follow</button>\n          </div>\n        </div>\n      </article>\n    `,
            n = (new DOMParser).parseFromString(t, "text/html");
        return n.querySelector("img").alt = e.name, n.querySelector("button").dataset.info = JSON.stringify({
            id: e.id,
            name: e.name,
            className: "User",
            style: "full"
        }), n.body.innerHTML
    }
    if (e) {
        var r = document.getElementById("index-container"),
            o = "",
            a = "";
        r && (a = JSON.parse(r.dataset.params).tag), e.flare_tag && a !== e.flare_tag.name && (o = `<a href="/t/${e.flare_tag.name}"\n        class="crayons-tag crayons-tag--filled"\n        style="--tag-bg: ${e.flare_tag.bg_color_hex}1a; --tag-prefix: ${e.flare_tag.bg_color_hex}; --tag-bg-hover: ${e.flare_tag.bg_color_hex}1a; --tag-prefix-hover: ${e.flare_tag.bg_color_hex};"\n      >\n        <span class="crayons-tag__prefix">#</span>\n        ${e.flare_tag.name}\n      </a>`);
        var i = "",
            s = e.tag_list || e.cached_tag_list_array || [];
        o && (s = s.filter((function(t) {
            return t !== e.flare_tag.name
        })), i += o), s && s.forEach((function(e) {
            i += `<a href="/t/${e}" class="crayons-tag crayons-tag--monochrome"><span class="crayons-tag__prefix">#</span>${e}</a>\n`
        }));
        var c = "",
            l = "0";
        (e.comments_count || "0") > 0 && (l = e.comments_count || "0");
        var u = `aria-label="Add a comment to post - ${e.title}"`;
        "User" !== e.class_name && (c = '<a href="' + e.path + '#comments"' + u + 'class="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left "><svg class="crayons-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"/></svg>', c += l > 0 ? l + '<span class="hidden s:inline">&nbsp;comments</span></a>' : '<span class="hidden s:inline">Add&nbsp;Comment</span></a>');
        var d, f, m, p = e.public_reactions_count,
            g = "",
            h = 1 === p ? "reaction" : "reactions",
            y = document.getElementById("reaction-category-resources");
        if ("User" !== e.class_name && p > 0) {
            var b = [];
            for (var v of e.public_reaction_categories) {
                var _ = y.querySelector(`img[data-slug=${v.slug}]`).outerHTML;
                b = b.concat(`<span class="crayons_icon_container">${_}</span>`)
            }
            b.reverse(), g = `<a href="${e.path}" class="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left" data-reaction-count data-reactable-id="${e.id}">\n                          <div class="multiple_reactions_aggregate">\n                            <span class="multiple_reactions_icons_container" dir="rtl">\n                                ${b.join("")}\n                            </span>\n                            <span class="aggregate_reactions_counter">\n                              <span class="hidden s:inline">${p}&nbsp;${h}</span>\n                            </span>\n                        </span>\n                          </div>\n                        </a>`
        }
        "PodcastEpisode" === e.class_name ? (d = e.main_image, f = e.slug, m = e.title) : (d = e.user.profile_image_90, f = e.user.username, m = filterXSS(e.user.name));
        var w = "",
            k = "",
            x = "crayons-avatar--l";
        e.organization && !document.getElementById("organization-article-index") && (k = '<a href="/' + e.organization.slug + '" class="crayons-logo crayons-logo--l"><img alt="' + e.organization.name + ' logo" src="' + e.organization.profile_image_90 + '" class="crayons-logo__image" loading="lazy"/></a>', w = '<span><span class="crayons-story__tertiary fw-normal"> for </span><a href="/' + e.organization.slug + '" class="crayons-story__secondary fw-medium">' + e.organization.name + "</a></span>", x = "crayons-avatar--s absolute -right-2 -bottom-2 border-solid border-2 border-base-inverted");
        var T = "";
        e.published_at_int && (T = timeAgo({
            oldTimeInSeconds: e.published_at_int
        }));
        var E = "";
        e.readable_publish_date && (E = e.published_timestamp ? '<time datetime="' + e.published_timestamp + '">' + e.readable_publish_date + " " + T + "</time>" : "<time>" + e.readable_publish_date + " " + T + "</time>");
        var S = "Article" === e.class_name,
            L = m.replace(/'/g, "&apos;").replace(/[\\"]/g, "\\$&"),
            C = `\n      <div id="story-author-preview-content-${e.id}" class="profile-preview-card__content crayons-dropdown p-4 pt-0 branded-7" data-repositioning-dropdown="true" style="border-top-color: var(--card-color);" data-testid="profile-preview-card">\n        <div class="gap-4 grid">\n          <div class="-mt-4">\n            <a href="/${f}" class="flex">\n              <span class="crayons-avatar crayons-avatar--xl mr-2 shrink-0">\n                <img src="${d}" class="crayons-avatar__image" alt="" loading="lazy" />\n              </span>\n              <span class="crayons-link crayons-subtitle-2 mt-5">\n                ${m}\n              </span>\n            </a>\n          </div>\n          <div class="print-hidden">\n            <button class="crayons-btn follow-action-button whitespace-nowrap follow-user w-100" data-info='{"id": ${e.user_id}, "className": "User", "style": "full", "name": "${L}"}'>Follow</button>\n          </div>\n          <div class="author-preview-metadata-container" data-author-id="${e.user_id}"></div>\n        </div>\n      </div>\n    `,
            I = `\n      <div class="crayons-story__meta">\n        <div class="crayons-story__author-pic">\n          ${k}\n          <a href="/${f}" class="crayons-avatar ${x}">\n            <img src="${d}" alt="${f} profile" class="crayons-avatar__image" loading="lazy" />\n          </a>\n        </div>\n        <div>\n          <div>\n            <a href="/${f}" class="crayons-story__secondary fw-medium ${S?"m:hidden":""}">${m}</a>\n    ${S?`<div class="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block"><button id="story-author-preview-trigger-${e.id}" aria-controls="story-author-preview-content-${e.id}" class="profile-preview-card__trigger fs-s crayons-btn crayons-btn--ghost p-1 -ml-1 -my-2" aria-label="${m} profile details">${m}</button>${C}</div>`:""}\n            ${w}\n          </div>\n          <a href="${e.path}" class="crayons-story__tertiary fs-xs">${E}</a>\n        </div>\n      </div>\n    `,
            O = "",
            A = "";
        if (e.highlight && e.highlight.body_text.length > 0) {
            var $ = e.highlight.body_text[0],
                N = "";
            $.toLowerCase() !== $.toUpperCase() && (N = "\u2026"), (O = N + e.highlight.body_text.join("...") + "\u2026").length > 0 && (A = '<div class="crayons-story__snippet mb-1">' + O + "</div>")
        }
        var B = "";
        "Article" === e.class_name && (B = '<small class="crayons-story__tertiary fs-xs mr-2">' + ((e.reading_time || null) < 1 ? "1 min" : e.reading_time + " min") + " read</small>");
        var j = "",
            M = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" role="presentation"><path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z" /></svg>',
            P = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" role="presentation"><path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"/></svg>';
        "Article" === e.class_name && e.user_id != t ? j = `\n        <button\n          type="button"\n          id="article-save-button-${e.id}"\n          class="c-btn c-btn--icon-alone bookmark-button"\n          data-reactable-id="${e.id}"\n          data-article-author-id="${e.user_id}"\n          aria-label="Save post ${e.title} to reading list">\n          <span class="bm-initial crayons-icon c-btn__icon">${M}</span>\n          <span class="bm-success crayons-icon c-btn__icon">${P}</span>\n        </button>\n      ` : "User" === e.class_name && (j = `\n        <button type="button"\n          class="crayons-btn crayons-btn--secondary crayons-btn--icon-left fs-s bookmark-button article-engagement-count engage-button follow-action-button follow-user"\n          data-info='{"id": ${e.id},"className":"User", "name": "${m}"}'\n        data-follow-action-button>\n          &nbsp;\n        </button>`);
        var H = "";
        e.cloudinary_video_url && (H = '<a href="' + e.path + '" class="crayons-story__video" style="background-image:url(' + e.cloudinary_video_url + ')"><div class="crayons-story__video__time">' + (e.video_duration_string || e.video_duration_in_minutes) + "</div></a>");
        var D = `\n      <a\n        href="${e.path}"\n        aria-labelledby="article-link-${e.id}"\n        class="crayons-story__hidden-navigation-link"\n      >\n        ${filterXSS(e.title)}\n      </a>\n    `;
        let n = "";
        return "Article" === e.class_name && (n = `data-feed-content-id="${e.id}"`), `<article class="crayons-story"\n      data-article-path="${e.path}"\n      id="article-${e.id}"\n      ${n}\n      data-content-user-id="${e.user_id}">        ${D}        <div role="presentation">          ${H}          <div class="crayons-story__body">            <div class="crayons-story__top">              ${I}\n            </div>            <div class="crayons-story__indention">\n              <h3 class="crayons-story__title">\n                <a href="${e.path}" id="article-link-${e.id}">\n                  ${filterXSS(e.title)}\n                </a>\n              </h3>              <div class="crayons-story__tags">\n                ${i}\n              </div>              ${A}              <div class="crayons-story__bottom">                <div class="crayons-story__details">\n                  ${g} ${c}\n                </div>                <div class="crayons-story__save">                  ${B}                  ${j}\n                </div>              </div>            </div>          </div>        </div>      </article>`
    }
    return ""
}

function buildCommentFormHTML(e, t, n) {
    var r = document.querySelector("meta[name='csrf-token']").getAttribute("content"),
        o = userData();
    o && !o.codeOfConduct && o.commentCount;
    Math.floor(1991 * Math.random());
    return `<form class="comment-form pt-4" onsubmit="handleCommentSubmit.bind(this)(event)" id="new-comment-${n}" action="/comments" accept-charset="UTF-8" method="post" data-comment-id="${n}">\n      <input name="utf8" type="hidden" value="&#x2713;" />\n      <input type="hidden" name="authenticity_token" value="${r}">\n      <input value="${e}" type="hidden" name="comment[commentable_id]" id="comment_commentable_id" />\n      <input value="${t}" type="hidden" name="comment[commentable_type]" id="comment_commentable_type" />\n      <input value="${n}" type="hidden" name="comment[parent_id]" id="comment_parent_id" />\n      <div class="comment-form__inner">\n        <div class="comment-form__field">\n          <textarea id="textarea-for-${n}" class="crayons-textfield crayons-textfield--ghost comment-textarea" name="comment[body_markdown]" data-tracking-name="comment_form_textfield" placeholder="Reply..." aria-label="Reply to a comment..." required="required" onkeydown="handleKeyDown(event)" onfocus="handleFocus(event)" oninput="handleChange(event)" onkeyup="handleKeyUp(event)"></textarea>\n        </div>\n        <div class="response-templates-container crayons-card crayons-card--secondary p-4 mb-4 fs-base comment-form__templates hidden">\n          <header>\n            <button type="button" class="personal-template-button active" data-target-type="personal" data-form-id="new_comment">Personal</button>\n            <button type="button" class="moderator-template-button hidden" data-target-type="moderator" data-form-id="new_comment">Trusted User</button>\n          </header>\n          <div class="personal-responses-container"></div>\n          <div class="moderator-responses-container hidden"></div>\n          <a target="_blank" rel="noopener nofollow" href="/settings/response-templates">Create template</a>\n          <p>Templates let you quickly answer FAQs or store snippets for re-use.</p>\n        </div>\n        <div class="comment-form__preview text-styles text-styles--secondary"></div>\n        <div class="comment-form__buttons mb-4 whitespace-nowrap">\n          <button type="submit" class="crayons-btn comment-action-button mr-2 js-btn-enable" name="submit" data-tracking-name="comment_reply_submit_button" disabled>Submit</button>\n          <button type="button" class="preview-toggle crayons-btn crayons-btn--secondary comment-action-button comment-action-preview mr-2 js-btn-enable" data-tracking-name="comment_reply_preview_button" onclick="handleCommentPreview(event)" disabled>Preview</button>\n          <button type="button" class="crayons-btn crayons-btn--ghost" data-tracking-name="comment_reply_dismiss_button" onclick="handleFormClose(event)">Dismiss</button>\n        </div>\n      </div>\n    </form>`
}

function buildCommentHTML(e) {
    var t = '<svg width="24" height="24" viewBox="0 0 24 24" class="crayons-icon pointer-events-none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>',
        n = '<svg width="24" height="24" class="crayons-icon expanded" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.6771L8 6.93529L8.99982 6L12 8.80653L15.0002 6L16 6.93529L12 10.6771ZM12 15.1935L8.99982 18L8 17.0647L12 13.3229L16 17.0647L15.0002 17.9993L12 15.1935Z" /></svg>',
        r = '<svg width="24" height="24" class="crayons-icon collapsed" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18L8 14.2287L8.99982 13.286L12 16.1147L15.0002 13.286L16 14.2287L12 18ZM12 7.88533L8.99982 10.714L8 9.77133L12 6L16 9.77133L15.0002 10.7133L12 7.88533Z" /></svg>',
        o = "",
        a = "",
        i = "",
        s = "",
        c = "",
        l = "";
    return 0 == e.depth ? o += "root " : o += "child ", e.depth > 3 && (o += "comment--too-deep "), e.newly_created && "comment-created-via-fetch", e.depth < 3 && (a = `\n      <details class="comment-wrapper comment-wrapper--deep-${e.depth} js-comment-wrapper" open>\n        <summary aria-label="Toggle this comment (and replies)" data-tracking-name="expand_comment_toggle">\n          <span class="inline-block align-middle ${e.depth>0?"mx-0":"m:mx-1"}">\n            ${n}\n            ${r}\n          </span>\n          <span class="js-collapse-comment-content inline-block align-middle"></span>\n        </summary>\n    `, i = "</details>"), l = `<a href="/${e.user.username}" class="shrink-0 crayons-avatar ${0==e.depth?"m:crayons-avatar--l mt-4 m:mt-3":"mt-4"}">\n    <img class="crayons-avatar__image" width="32" height="32" src="${e.user.profile_pic}" alt="${e.user.username} profile" />\n  </a>`, s = `<div class="comment__header" >\n    <a href="/${e.user.username}" class="crayons-link crayons-link--secondary flex items-center fw-medium m:hidden">\n      <span class="js-comment-username">${e.user.name}</span>\n    </a>\n    <div class="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:block">\n      <button id="comment-profile-preview-trigger-${e.id}" aria-controls="comment-profile-preview-content-${e.id}" class="profile-preview-card__trigger p-1 -my-1 -ml-1 crayons-btn crayons-btn--ghost" aria-label="${e.user.name} profile details">${e.user.name}</button>\n      <span data-js-comment-user-id="${e.user.id}" data-js-dropdown-content-id="comment-profile-preview-content-${e.id}" class="preview-card-placeholder"></span>\n    </div>\n    <span class="color-base-30 px-2 m:pl-0" role="presentation">&bull;</span>\n\n    <a href="${e.url}" class="comment-date crayons-link crayons-link--secondary fs-s">\n      <time datetime="${e.published_timestamp}" class="date-no-year">\n        ${e.readable_publish_date}\n      </time>\n    </a>\n\n    <div class="comment__dropdown" data-tracking-name="comment_dropdown">\n      <button  id="comment-dropdown-trigger-${e.id}" aria-controls="comment-dropdown-${e.id}" aria-expanded="false" class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">\n        ${t}\n      </button>\n      <div id="comment-dropdown-${e.id}" class="crayons-dropdown right-1 s:right-0 s:left-auto fs-base dropdown">\n        <ul class="m-0">\n          <li><a href="${e.url}" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to ${e.user.name}'s comment" data-no-instant>${I18n.t("core.copy_link")}</a></li>\n          <li><a href="${e.url}/settings" class="crayons-link crayons-link--block" aria-label="Go to ${e.user.name}'s comment settings">Settings</a></li>\n          <li><a href="/report-abuse?url=${e.url}" class="crayons-link crayons-link--block" aria-label="Report ${e.user.name}'s comment as abusive or violating our code of conduct and/or terms and conditions">${I18n.t("core.report_abuse")}</a></li>\n          <li class="${e.newly_created?"":"hidden"}"><a href="${e.url}/edit" class="crayons-link crayons-link--block" rel="nofollow" aria-label="Edit this comment">Edit</a></li>\n          <li class="${e.newly_created?"":"hidden"}"><a data-no-instant="" href="${e.url}/delete_confirm" class="crayons-link crayons-link--block" rel="nofollow" aria-label="Delete this comment">Delete</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>`, c = `<footer class="comment__footer">\n    ${react(e)}\n    ${reply(e)}\n  </footer>`, `${a}\n    <div class="comment single-comment-node ${o} comment--deep-${e.depth}" id="comment-node-${e.id}" data-comment-id="${e.id}" data-path="${e.url}" data-comment-author-id="${e.user.id}" data-current-user-comment="${e.newly_created}" data-content-user-id="${e.user.id}">\n      <div class="comment__inner">\n        ${l}\n        <div class="inner-comment comment__details">\n          <div class="comment__content crayons-card">\n            ${s}\n            <div class="comment__body text-styles text-styles--secondary body">\n              ${e.body_html}\n            </div>\n          </div>\n          ${c}\n        </div>\n      </div>\n    </div>\n  ${i}`
}

function reply(e) {
    var t = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="crayons-icon reaction-icon not-reacted"><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"/></svg>',
        n = `<a class="js actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"\n    href="#${e.url}"\n    data-comment-id="${e.id}"\n    data-path="${e.url}"\n    data-tracking-name="comment_reply_button"\n    rel="nofollow">\n    ${t}\n    <span class="hidden m:inline-block">Reply</span>\n  </a>`;
    if (e.newly_created) return n
}

function react(e) {
    var t = 0,
        n = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="crayons-icon reaction-icon not-reacted"><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"/></svg>',
        r = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="crayons-icon reaction-icon--like reaction-icon reacted"><path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"/></svg>';
    return t = e.newly_created ? 1 : e.public_reactions_count, (e.newly_created || e.heart_ids.indexOf(userData().id) > -1) && "reacted", `<button class="crayons-tooltip__activator crayons-btn crayons-btn--ghost crayons-btn--icon${0===t?"":"--left"} crayons-btn--s mr-1 reaction-like inline-flex reaction-button" id="button-for-comment-${e.id}" data-comment-id="${e.id}" data-tracking-name="comment_heart_button">\n    ${n}\n    ${r}\n    <span class="reactions-count" id="reactions-count-${e.id}">${t}</span>\n    ${t>0?'<span class="reactions-label hidden m:inline-block">like</span>':""}\n    <span data-testid="tooltip" class="crayons-tooltip__content">Like</span>\n  </button>`
}

function checkUserLoggedIn() {
    const e = document.body;
    return !!e && "logged-in" === e.getAttribute("data-user-status")
}

function dynamicallyLoadScript(e) {
    if (document.querySelector(`script[src='${e}']`)) return;
    const t = document.createElement("script");
    t.src = e, document.head.appendChild(t)
}

function getCsrfToken() {
    return new Promise((function(e, t) {
        var n = 0,
            r = setInterval((function() {
                var o = document.querySelector("meta[name='csrf-token']");
                if (n += 1, o) {
                    clearInterval(r);
                    var a = o.getAttribute("content");
                    return e(a)
                }
                if (n === MAX_RETRIES) return clearInterval(r), Honeybadger.notify("Could not locate CSRF metatag " + JSON.stringify(localStorage.current_user)), t(new Error("Could not locate CSRF meta tag on the page."))
            }), RETRY_INTERVAL)
    }))
}

function getCurrentPage(e) {
    return document.querySelectorAll("[data-current-page='" + e + "']").length > 0
}

function getImageForLink(e) {
    var t = e.getAttribute("data-preload-image");
    t && -1 === $fetchedImageUrls.indexOf(t) && ((new Image).src = t, $fetchedImageUrls.push(t))
}

function insertAfter(e, t) {
    t && t.parentNode && t.parentNode.insertBefore(e, t.nextSibling)
}

function isTouchDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|DEV-Native-ios/i.test(navigator.userAgent)
}

function timestampToLocalDateTime(e, t, n) {
    if (!e) return "";
    try {
        var r = new Date(e);
        let o = new Intl.DateTimeFormat(t || "default", n).format(r);
        return "2-digit" === n.year ? o.replace(", ", " '") : o
    } catch (e) {
        return ""
    }
}

function addLocalizedDateTimeToElementsTitles(e, t) {
    for (var n = 0; n < e.length; n += 1) {
        var r = e[n],
            o = r.getAttribute(t || "datetime");
        if (o) {
            var a = timestampToLocalDateTimeLong(o);
            r.setAttribute("title", a)
        }
    }
}

function localizeTimeElements(e, t) {
    for (let n = 0; n < e.length; n += 1) {
        const r = e[n],
            o = r.getAttribute("datetime");
        if (o) {
            const e = timestampToLocalDateTime(o, navigator.language, t);
            r.textContent = e
        }
    }
}

function timestampToLocalDateTimeLong(e) {
    return timestampToLocalDateTime(e, navigator.language, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    })
}

function timestampToLocalDateTimeShort(e) {
    if (e) {
        const n = (new Date).getFullYear();
        var t = {
            day: "numeric",
            month: "short"
        };
        return new Date(e).getFullYear() !== n && (t.year = "numeric"), timestampToLocalDateTime(e, navigator.language, t)
    }
    return ""
}

function localStorageTest() {
    var e = "devtolocalstoragetestforavaialbility";
    try {
        return localStorage.setItem(e, e), localStorage.removeItem(e), !0
    } catch (e) {
        return !1
    }
}

function preventDefaultAction(e) {
    e.preventDefault()
}

function sendFetch(e, t) {
    switch (e) {
        case "article-preview":
            return fetchCallback({
                url: "/articles/preview",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: t
            });
        case "reaction-creation":
            return fetchCallback({
                url: "/reactions",
                addTokenToBody: !0,
                body: t
            });
        case "image-upload":
            return fetchCallback({
                url: "/image_uploads",
                addTokenToBody: !0,
                body: t
            });
        case "follow-creation":
            return fetchCallback({
                url: "/follows",
                addTokenToBody: !0,
                body: t
            });
        case "block-user":
            return fetchCallback({
                url: "/user_blocks",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                addTokenToBody: !1,
                body: t
            });
        case "comment-creation":
            return fetchCallback({
                url: "/comments",
                headers: {
                    "Content-Type": "application/json"
                },
                body: t
            });
        case "comment-preview":
            return fetchCallback({
                url: "/comments/preview",
                headers: {
                    "Content-Type": "application/json"
                },
                body: t
            });
        case "user_subscriptions":
            return fetchCallback({
                url: "/user_subscriptions",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: t
            });
        case "comment-subscribe":
            return fetchCallback({
                url: "/comments/subscribe",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: t
            });
        case "comment-unsubscribe":
            return fetchCallback({
                url: "subscription/unsubscribe",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: t
            });
        default:
            console.log("A wrong switchStatement was used.")
    }
    return !0
}

function sendHapticMessage(e) {
    try {
        window && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.haptic && window.webkit.messageHandlers.haptic.postMessage(e)
    } catch (e) {
        console.log(e.message)
    }
}

function showLoginModal(e) {
    window.Forem.showModal({
        title: "Log in to continue",
        contentSelector: "#global-signup-modal",
        overlay: !0,
        onOpen: () => {
            e && Object.keys(e).length > 0 && document.querySelector("#window-modal .js-global-signup-modal__create-account").addEventListener("click", (() => ahoyTracking(e)))
        }
    })
}

function ahoyTracking(e) {
    ahoy.track("Clicked on Create Account", {
        version: .1,
        page: location.href,
        source: "modal",
        referring_source: e.referring_source,
        trigger: e.trigger
    })
}

function slideSidebar(e, t) {
    if (!document.getElementById("sidebar-wrapper-" + e)) return;
    const n = document.getElementById("main-content") || document.getElementById("articles-list");
    "intoView" === t ? (n.classList.add("modal-open"), document.body.classList.add("modal-open"), document.getElementById("sidebar-wrapper-" + e).classList.add("swiped-in"), n.addEventListener("touchmove", preventDefaultAction, !1)) : (n.classList.remove("modal-open"), document.body.classList.remove("modal-open"), document.getElementById("sidebar-wrapper-" + e).classList.remove("swiped-in"), n.removeEventListener("touchmove", preventDefaultAction, !1))
}

function secondsToHumanUnitAgo(e) {
    const t = [
        ["second", 1],
        ["min", 60],
        ["hour", 3600],
        ["day", 86400],
        ["week", 604800],
        ["month", 2592e3],
        ["year", 31536e3]
    ];
    if (e < t[0][1]) return "just now";
    let n = 0;
    for (; n + 1 < t.length && e >= t[n + 1][1];) n += 1;
    const r = Math.floor(e / t[n][1]);
    return r + " " + (t[n][0] + (1 === r ? "" : "s")) + " ago"
}

function timeAgo({
    oldTimeInSeconds: e,
    formatter: t = (e => `<span class="time-ago-indicator">(${e})</span>`),
    maxDisplayedAge: n = 86399
}) {
    const r = new Date / 1e3,
        o = Math.round(r - e);
    return o > n ? "" : t(secondsToHumanUnitAgo(o))
}

function userData() {
    const {
        user: e = null
    } = document.body.dataset;
    return JSON.parse(e)
}

function watchForLongTouch(e) {
    const t = new Event("longTouch"),
        n = 500;
    let r;
    const o = function() {
            e.dispatchEvent(t)
        },
        a = function() {
            r || (r = setTimeout(o, n))
        },
        i = function() {
            r && (clearTimeout(r), r = !1)
        };
    e && (e.oncontextmenu = function(e) {
        return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), !1
    }, e.addEventListener("touchstart", a), e.addEventListener("touchend", i))
}

function callInitializers() {
    initializePaymentPointers(), initializeCommentsPage(), initializeCreditsPage(), initializeOnboardingTaskCard()
}

function initializePage() {
    initializeLocalStorageRender(), initializeBodyData();
    var e = setInterval((function() {
        "true" === document.body.getAttribute("data-loaded") && (clearInterval(e), "logged-in" === document.body.getAttribute("data-user-status") && (initializeBaseUserData(), initializeAllTagEditButtons()), initializeBroadcast(), initializeReadingListIcons(), initializeBillboardVisibility(), document.getElementById("sidebar-additional") && document.getElementById("sidebar-additional").classList.add("showing"))
    }), 1);
    callInitializers(), nextPage = 0, fetching = !1, done = !1, setTimeout((function() {
        done = !1
    }), 300), initScrolling.called || initScrolling()
}

function initializeBaseApp() {
    InstantClick.on("change", (function() {
        initializePage()
    })), InstantClick.init()
}
var client;
window.addEventListener("load", (() => {
    observeBillboards()
}), !1);
var iconSmallThread = '<svg width="24" height="24" class="crayons-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z" /></svg>',
    ENTER_KEY_CODE = 13;
const MAX_RETRIES = 30,
    RETRY_INTERVAL = 250;
var $fetchedImageUrls = [];
"undefined" != typeof globalThis && (globalThis.timestampToLocalDateTimeLong = timestampToLocalDateTimeLong, globalThis.timestampToLocalDateTimeShort = timestampToLocalDateTimeShort);
const fetchCallback = ({
    url: e,
    headers: t = {},
    addTokenToBody: n = !1,
    body: r
}) => o => (n && r.append("authenticity_token", o), window.fetch(e, {
    method: "POST",
    headers: {
        "X-CSRF-Token": o,
        ...t
    },
    body: r,
    credentials: "same-origin"
}));
"undefined" != typeof globalThis && (globalThis.timeAgo = timeAgo),
    function e(t, n, r) {
        function o(i, s) {
            if (!n[i]) {
                if (!t[i]) {
                    var c = "function" == typeof require && require;
                    if (!s && c) return c(i, !0);
                    if (a) return a(i, !0);
                    var l = new Error("Cannot find module '" + i + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var u = n[i] = {
                    exports: {}
                };
                t[i][0].call(u.exports, (function(e) {
                    var n = t[i][1][e];
                    return o(n || e)
                }), u, u.exports, e, t, n, r)
            }
            return n[i].exports
        }
        for (var a = "function" == typeof require && require, i = 0; i < r.length; i++) o(r[i]);
        return o
    }({
        1: [function(e, t, n) {
            function r() {
                return {}
            }

            function o() {}

            function a() {}

            function i() {}

            function s() {}

            function c(e) {
                return e.replace(E, "&lt;").replace(S, "&gt;")
            }

            function l(e, t, n, r) {
                if (n = g(n), "href" === t || "src" === t) {
                    if ("#" === (n = x.trim(n))) return "#";
                    if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "#" !== n[0] && "/" !== n[0]) return ""
                } else if ("background" === t) {
                    if ($.lastIndex = 0, $.test(n)) return ""
                } else if ("style" === t) {
                    if (N.lastIndex = 0, N.test(n)) return "";
                    if (B.lastIndex = 0, B.test(n) && ($.lastIndex = 0, $.test(n))) return "";
                    !1 !== r && (n = (r = r || T).process(n))
                }
                return n = h(n)
            }

            function u(e) {
                return e.replace(L, "&quot;")
            }

            function d(e) {
                return e.replace(C, '"')
            }

            function f(e) {
                return e.replace(I, (function(e, t) {
                    return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10))
                }))
            }

            function m(e) {
                return e.replace(O, ":").replace(A, " ")
            }

            function p(e) {
                for (var t = "", n = 0, r = e.length; n < r; n++) t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
                return x.trim(t)
            }

            function g(e) {
                return e = p(e = m(e = f(e = d(e))))
            }

            function h(e) {
                return e = c(e = u(e))
            }

            function y() {
                return ""
            }

            function b(e, t) {
                function n(t) {
                    return !!r || -1 !== x.indexOf(e, t)
                }
                "function" != typeof t && (t = function() {});
                var r = !Array.isArray(e),
                    o = [],
                    a = !1;
                return {
                    onIgnoreTag: function(e, r, i) {
                        if (n(e)) {
                            if (i.isClosing) {
                                var s = "[/removed]",
                                    c = i.position + s.length;
                                return o.push([!1 !== a ? a : i.position, c]), a = !1, s
                            }
                            return a || (a = i.position), "[removed]"
                        }
                        return t(e, r, i)
                    },
                    remove: function(e) {
                        var t = "",
                            n = 0;
                        return x.forEach(o, (function(r) {
                            t += e.slice(n, r[0]), n = r[1]
                        })), t += e.slice(n)
                    }
                }
            }

            function v(e) {
                return e.replace(j, "")
            }

            function _(e) {
                var t = e.split("");
                return (t = t.filter((function(e) {
                    var t = e.charCodeAt(0);
                    return 127 !== t && (!(t <= 31) || (10 === t || 13 === t))
                }))).join("")
            }
            var w = e("cssfilter").FilterCSS,
                k = e("cssfilter").getDefaultWhiteList,
                x = e("./util"),
                T = new w,
                E = /</g,
                S = />/g,
                L = /"/g,
                C = /&quot;/g,
                I = /&#([a-zA-Z0-9]*);?/gim,
                O = /&colon;?/gim,
                A = /&newline;?/gim,
                $ = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
                N = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
                B = /u\s*r\s*l\s*\(.*/gi,
                j = /<!--[\s\S]*?-->/g;
            n.whiteList = r(), n.getDefaultWhiteList = r, n.onTag = o, n.onIgnoreTag = a, n.onTagAttr = i, n.onIgnoreTagAttr = s, n.safeAttrValue = l, n.escapeHtml = c, n.escapeQuote = u, n.unescapeQuote = d, n.escapeHtmlEntities = f, n.escapeDangerHtml5Entities = m, n.clearNonPrintableCharacter = p, n.friendlyAttrValue = g, n.escapeAttrValue = h, n.onIgnoreTagStripAll = y, n.StripTagBody = b, n.stripCommentTag = v, n.stripBlankChar = _, n.cssFilter = T, n.getDefaultCSSWhiteList = k
        }, {
            "./util": 4,
            cssfilter: 8
        }],
        2: [function(e, t, n) {
            function r(e, t) {
                return new i(t).process(e)
            }
            var o = e("./default"),
                a = e("./parser"),
                i = e("./xss");
            for (var s in (n = t.exports = r).FilterXSS = i, o) n[s] = o[s];
            for (var s in a) n[s] = a[s];
            "undefined" != typeof window && (window.filterXSS = t.exports)
        }, {
            "./default": 1,
            "./parser": 3,
            "./xss": 5
        }],
        3: [function(e, t, n) {
            function r(e) {
                var t = e.indexOf(" ");
                if (-1 === t) var n = e.slice(1, -1);
                else n = e.slice(1, t + 1);
                return "/" === (n = d.trim(n).toLowerCase()).slice(0, 1) && (n = n.slice(1)), "/" === n.slice(-1) && (n = n.slice(0, -1)), n
            }

            function o(e) {
                return "</" === e.slice(0, 2)
            }

            function a(e, t, n) {
                var a = "",
                    i = 0,
                    s = !1,
                    c = !1,
                    l = 0,
                    u = e.length,
                    d = "",
                    f = "";
                for (l = 0; l < u; l++) {
                    var m = e.charAt(l);
                    if (!1 === s) {
                        if ("<" === m) {
                            s = l;
                            continue
                        }
                    } else if (!1 === c) {
                        if ("<" === m) {
                            a += n(e.slice(i, l)), s = l, i = l;
                            continue
                        }
                        if (">" === m) {
                            a += n(e.slice(i, s)), f = r(d = e.slice(s, l + 1)), a += t(s, a.length, f, d, o(d)), i = l + 1, s = !1;
                            continue
                        }
                        if (('"' === m || "'" === m) && "=" === e.charAt(l - 1)) {
                            c = m;
                            continue
                        }
                    } else if (m === c) {
                        c = !1;
                        continue
                    }
                }
                return i < e.length && (a += n(e.substr(i))), a
            }

            function i(e, t) {
                function n(e, n) {
                    if (!((e = (e = d.trim(e)).replace(f, "").toLowerCase()).length < 1)) {
                        var r = t(e, n || "");
                        r && o.push(r)
                    }
                }
                for (var r = 0, o = [], a = !1, i = e.length, l = 0; l < i; l++) {
                    var m, p = e.charAt(l);
                    if (!1 !== a || "=" !== p)
                        if (!1 === a || l !== r || '"' !== p && "'" !== p || "=" !== e.charAt(l - 1))
                            if (" " !== p);
                            else {
                                if (!1 === a) {
                                    if (-1 === (m = s(e, l))) {
                                        n(d.trim(e.slice(r, l))), a = !1, r = l + 1;
                                        continue
                                    }
                                    l = m - 1;
                                    continue
                                }
                                if (-1 === (m = c(e, l - 1))) {
                                    n(a, u(d.trim(e.slice(r, l)))), a = !1, r = l + 1;
                                    continue
                                }
                            }
                    else {
                        if (-1 === (m = e.indexOf(p, l + 1))) break;
                        n(a, d.trim(e.slice(r + 1, m))), a = !1, r = (l = m) + 1
                    } else a = e.slice(r, l), r = l + 1
                }
                return r < e.length && (!1 === a ? n(e.slice(r)) : n(a, u(d.trim(e.slice(r))))), d.trim(o.join(" "))
            }

            function s(e, t) {
                for (; t < e.length; t++) {
                    var n = e[t];
                    if (" " !== n) return "=" === n ? t : -1
                }
            }

            function c(e, t) {
                for (; t > 0; t--) {
                    var n = e[t];
                    if (" " !== n) return "=" === n ? t : -1
                }
            }

            function l(e) {
                return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1]
            }

            function u(e) {
                return l(e) ? e.substr(1, e.length - 2) : e
            }
            var d = e("./util"),
                f = /[^a-zA-Z0-9_:\.\-]/gim;
            n.parseTag = a, n.parseAttr = i
        }, {
            "./util": 4
        }],
        4: [function(e, t) {
            t.exports = {
                indexOf: function(e, t) {
                    var n, r;
                    if (Array.prototype.indexOf) return e.indexOf(t);
                    for (n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                forEach: function(e, t, n) {
                    var r, o;
                    if (Array.prototype.forEach) return e.forEach(t, n);
                    for (r = 0, o = e.length; r < o; r++) t.call(n, e[r], r, e)
                },
                trim: function(e) {
                    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
                }
            }
        }, {}],
        5: [function(e, t) {
            function n(e) {
                return null == e
            }

            function r(e) {
                var t = e.indexOf(" ");
                if (-1 === t) return {
                    html: "",
                    closing: "/" === e[e.length - 2]
                };
                var n = "/" === (e = d.trim(e.slice(t + 1, -1)))[e.length - 1];
                return n && (e = d.trim(e.slice(0, -1))), {
                    html: e,
                    closing: n
                }
            }

            function o(e) {
                var t = {};
                for (var n in e) t[n] = e[n];
                return t
            }

            function a(e) {
                (e = o(e || {})).stripIgnoreTag && (e.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), e.onIgnoreTag = s.onIgnoreTagStripAll), e.whiteList = e.whiteList || s.whiteList, e.onTag = e.onTag || s.onTag, e.onTagAttr = e.onTagAttr || s.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || s.onIgnoreTag, e.onIgnoreTagAttr = e.onIgnoreTagAttr || s.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || s.safeAttrValue, e.escapeHtml = e.escapeHtml || s.escapeHtml, this.options = e, !1 === e.css ? this.cssFilter = !1 : (e.css = e.css || {}, this.cssFilter = new i(e.css))
            }
            var i = e("cssfilter").FilterCSS,
                s = e("./default"),
                c = e("./parser"),
                l = c.parseTag,
                u = c.parseAttr,
                d = e("./util");
            a.prototype.process = function(e) {
                if (!(e = (e = e || "").toString())) return "";
                var t = this,
                    o = t.options,
                    a = o.whiteList,
                    i = o.onTag,
                    c = o.onIgnoreTag,
                    f = o.onTagAttr,
                    m = o.onIgnoreTagAttr,
                    p = o.safeAttrValue,
                    g = o.escapeHtml,
                    h = t.cssFilter;
                o.stripBlankChar && (e = s.stripBlankChar(e)), o.allowCommentTag || (e = s.stripCommentTag(e));
                var y = !1;
                if (o.stripIgnoreTagBody) {
                    y = s.StripTagBody(o.stripIgnoreTagBody, c);
                    c = y.onIgnoreTag
                }
                var b = l(e, (function(e, t, o, s, l) {
                    var y, b = {
                        sourcePosition: e,
                        position: t,
                        isClosing: l,
                        isWhite: o in a
                    };
                    if (!n(y = i(o, s, b))) return y;
                    if (b.isWhite) {
                        if (b.isClosing) return "</" + o + ">";
                        var v = r(s),
                            _ = a[o],
                            w = u(v.html, (function(e, t) {
                                var r, a = -1 !== d.indexOf(_, e);
                                return n(r = f(o, e, t, a)) ? a ? (t = p(o, e, t, h)) ? e + '="' + t + '"' : e : n(r = m(o, e, t, a)) ? void 0 : r : r
                            }));
                        s = "<" + o;
                        return w && (s += " " + w), v.closing && (s += " /"), s += ">"
                    }
                    return n(y = c(o, s, b)) ? g(s) : y
                }), g);
                return y && (b = y.remove(b)), b
            }, t.exports = a
        }, {
            "./default": 1,
            "./parser": 3,
            "./util": 4,
            cssfilter: 8
        }],
        6: [function(e, t) {
            function n(e) {
                return null == e
            }

            function r(e) {
                var t = {};
                for (var n in e) t[n] = e[n];
                return t
            }

            function o(e) {
                (e = r(e || {})).whiteList = e.whiteList || a.whiteList, e.onAttr = e.onAttr || a.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || a.onIgnoreAttr, this.options = e
            }
            var a = e("./default"),
                i = e("./parser");
            e("./util");
            o.prototype.process = function(e) {
                if (!(e = (e = e || "").toString())) return "";
                var t = this.options,
                    r = t.whiteList,
                    o = t.onAttr,
                    a = t.onIgnoreAttr;
                return i(e, (function(e, t, i, s, c) {
                    var l = r[i],
                        u = !1;
                    !0 === l ? u = l : "function" == typeof l ? u = l(s) : l instanceof RegExp && (u = l.test(s)), !0 !== u && (u = !1);
                    var d, f = {
                        position: t,
                        sourcePosition: e,
                        source: c,
                        isWhite: u
                    };
                    return u ? n(d = o(i, s, f)) ? i + ":" + s : d : n(d = a(i, s, f)) ? void 0 : d
                }))
            }, t.exports = o
        }, {
            "./default": 7,
            "./parser": 9,
            "./util": 10
        }],
        7: [function(e, t, n) {
            function r() {
                var e = {
                    "align-content": !1,
                    "align-items": !1,
                    "align-self": !1,
                    "alignment-adjust": !1,
                    "alignment-baseline": !1,
                    all: !1,
                    "anchor-point": !1,
                    animation: !1,
                    "animation-delay": !1,
                    "animation-direction": !1,
                    "animation-duration": !1,
                    "animation-fill-mode": !1,
                    "animation-iteration-count": !1,
                    "animation-name": !1,
                    "animation-play-state": !1,
                    "animation-timing-function": !1,
                    azimuth: !1,
                    "backface-visibility": !1,
                    background: !0,
                    "background-attachment": !0,
                    "background-clip": !0,
                    "background-color": !0,
                    "background-image": !0,
                    "background-origin": !0,
                    "background-position": !0,
                    "background-repeat": !0,
                    "background-size": !0,
                    "baseline-shift": !1,
                    binding: !1,
                    bleed: !1,
                    "bookmark-label": !1,
                    "bookmark-level": !1,
                    "bookmark-state": !1,
                    border: !0,
                    "border-bottom": !0,
                    "border-bottom-color": !0,
                    "border-bottom-left-radius": !0,
                    "border-bottom-right-radius": !0,
                    "border-bottom-style": !0,
                    "border-bottom-width": !0,
                    "border-collapse": !0,
                    "border-color": !0,
                    "border-image": !0,
                    "border-image-outset": !0,
                    "border-image-repeat": !0,
                    "border-image-slice": !0,
                    "border-image-source": !0,
                    "border-image-width": !0,
                    "border-left": !0,
                    "border-left-color": !0,
                    "border-left-style": !0,
                    "border-left-width": !0,
                    "border-radius": !0,
                    "border-right": !0,
                    "border-right-color": !0,
                    "border-right-style": !0,
                    "border-right-width": !0,
                    "border-spacing": !0,
                    "border-style": !0,
                    "border-top": !0,
                    "border-top-color": !0,
                    "border-top-left-radius": !0,
                    "border-top-right-radius": !0,
                    "border-top-style": !0,
                    "border-top-width": !0,
                    "border-width": !0,
                    bottom: !1,
                    "box-decoration-break": !0,
                    "box-shadow": !0,
                    "box-sizing": !0,
                    "box-snap": !0,
                    "box-suppress": !0,
                    "break-after": !0,
                    "break-before": !0,
                    "break-inside": !0,
                    "caption-side": !1,
                    chains: !1,
                    clear: !0,
                    clip: !1,
                    "clip-path": !1,
                    "clip-rule": !1,
                    color: !0,
                    "color-interpolation-filters": !0,
                    "column-count": !1,
                    "column-fill": !1,
                    "column-gap": !1,
                    "column-rule": !1,
                    "column-rule-color": !1,
                    "column-rule-style": !1,
                    "column-rule-width": !1,
                    "column-span": !1,
                    "column-width": !1,
                    columns: !1,
                    contain: !1,
                    content: !1,
                    "counter-increment": !1,
                    "counter-reset": !1,
                    "counter-set": !1,
                    crop: !1,
                    cue: !1,
                    "cue-after": !1,
                    "cue-before": !1,
                    cursor: !1,
                    direction: !1,
                    display: !0,
                    "display-inside": !0,
                    "display-list": !0,
                    "display-outside": !0,
                    "dominant-baseline": !1,
                    elevation: !1,
                    "empty-cells": !1,
                    filter: !1,
                    flex: !1,
                    "flex-basis": !1,
                    "flex-direction": !1,
                    "flex-flow": !1,
                    "flex-grow": !1,
                    "flex-shrink": !1,
                    "flex-wrap": !1,
                    float: !1,
                    "float-offset": !1,
                    "flood-color": !1,
                    "flood-opacity": !1,
                    "flow-from": !1,
                    "flow-into": !1,
                    font: !0,
                    "font-family": !0,
                    "font-feature-settings": !0,
                    "font-kerning": !0,
                    "font-language-override": !0,
                    "font-size": !0,
                    "font-size-adjust": !0,
                    "font-stretch": !0,
                    "font-style": !0,
                    "font-synthesis": !0,
                    "font-variant": !0,
                    "font-variant-alternates": !0,
                    "font-variant-caps": !0,
                    "font-variant-east-asian": !0,
                    "font-variant-ligatures": !0,
                    "font-variant-numeric": !0,
                    "font-variant-position": !0,
                    "font-weight": !0,
                    grid: !1,
                    "grid-area": !1,
                    "grid-auto-columns": !1,
                    "grid-auto-flow": !1,
                    "grid-auto-rows": !1,
                    "grid-column": !1,
                    "grid-column-end": !1,
                    "grid-column-start": !1,
                    "grid-row": !1,
                    "grid-row-end": !1,
                    "grid-row-start": !1,
                    "grid-template": !1,
                    "grid-template-areas": !1,
                    "grid-template-columns": !1,
                    "grid-template-rows": !1,
                    "hanging-punctuation": !1,
                    height: !0,
                    hyphens: !1,
                    icon: !1,
                    "image-orientation": !1,
                    "image-resolution": !1,
                    "ime-mode": !1,
                    "initial-letters": !1,
                    "inline-box-align": !1,
                    "justify-content": !1,
                    "justify-items": !1,
                    "justify-self": !1,
                    left: !1,
                    "letter-spacing": !0,
                    "lighting-color": !0,
                    "line-box-contain": !1,
                    "line-break": !1,
                    "line-grid": !1,
                    "line-height": !1,
                    "line-snap": !1,
                    "line-stacking": !1,
                    "line-stacking-ruby": !1,
                    "line-stacking-shift": !1,
                    "line-stacking-strategy": !1,
                    "list-style": !0,
                    "list-style-image": !0,
                    "list-style-position": !0,
                    "list-style-type": !0,
                    margin: !0,
                    "margin-bottom": !0,
                    "margin-left": !0,
                    "margin-right": !0,
                    "margin-top": !0,
                    "marker-offset": !1,
                    "marker-side": !1,
                    marks: !1,
                    mask: !1,
                    "mask-box": !1,
                    "mask-box-outset": !1,
                    "mask-box-repeat": !1,
                    "mask-box-slice": !1,
                    "mask-box-source": !1,
                    "mask-box-width": !1,
                    "mask-clip": !1,
                    "mask-image": !1,
                    "mask-origin": !1,
                    "mask-position": !1,
                    "mask-repeat": !1,
                    "mask-size": !1,
                    "mask-source-type": !1,
                    "mask-type": !1,
                    "max-height": !0,
                    "max-lines": !1,
                    "max-width": !0,
                    "min-height": !0,
                    "min-width": !0,
                    "move-to": !1,
                    "nav-down": !1,
                    "nav-index": !1,
                    "nav-left": !1,
                    "nav-right": !1,
                    "nav-up": !1,
                    "object-fit": !1,
                    "object-position": !1,
                    opacity: !1,
                    order: !1,
                    orphans: !1,
                    outline: !1,
                    "outline-color": !1,
                    "outline-offset": !1,
                    "outline-style": !1,
                    "outline-width": !1,
                    overflow: !1,
                    "overflow-wrap": !1,
                    "overflow-x": !1,
                    "overflow-y": !1,
                    padding: !0,
                    "padding-bottom": !0,
                    "padding-left": !0,
                    "padding-right": !0,
                    "padding-top": !0,
                    page: !1,
                    "page-break-after": !1,
                    "page-break-before": !1,
                    "page-break-inside": !1,
                    "page-policy": !1,
                    pause: !1,
                    "pause-after": !1,
                    "pause-before": !1,
                    perspective: !1,
                    "perspective-origin": !1,
                    pitch: !1,
                    "pitch-range": !1,
                    "play-during": !1,
                    position: !1,
                    "presentation-level": !1,
                    quotes: !1,
                    "region-fragment": !1,
                    resize: !1,
                    rest: !1,
                    "rest-after": !1,
                    "rest-before": !1,
                    richness: !1,
                    right: !1,
                    rotation: !1,
                    "rotation-point": !1,
                    "ruby-align": !1,
                    "ruby-merge": !1,
                    "ruby-position": !1,
                    "shape-image-threshold": !1,
                    "shape-outside": !1,
                    "shape-margin": !1,
                    size: !1,
                    speak: !1,
                    "speak-as": !1,
                    "speak-header": !1,
                    "speak-numeral": !1,
                    "speak-punctuation": !1,
                    "speech-rate": !1,
                    stress: !1,
                    "string-set": !1,
                    "tab-size": !1,
                    "table-layout": !1,
                    "text-align": !0,
                    "text-align-last": !0,
                    "text-combine-upright": !0,
                    "text-decoration": !0,
                    "text-decoration-color": !0,
                    "text-decoration-line": !0,
                    "text-decoration-skip": !0,
                    "text-decoration-style": !0,
                    "text-emphasis": !0,
                    "text-emphasis-color": !0,
                    "text-emphasis-position": !0,
                    "text-emphasis-style": !0,
                    "text-height": !0,
                    "text-indent": !0,
                    "text-justify": !0,
                    "text-orientation": !0,
                    "text-overflow": !0,
                    "text-shadow": !0,
                    "text-space-collapse": !0,
                    "text-transform": !0,
                    "text-underline-position": !0,
                    "text-wrap": !0,
                    top: !1,
                    transform: !1,
                    "transform-origin": !1,
                    "transform-style": !1,
                    transition: !1,
                    "transition-delay": !1,
                    "transition-duration": !1,
                    "transition-property": !1,
                    "transition-timing-function": !1,
                    "unicode-bidi": !1,
                    "vertical-align": !1,
                    visibility: !1,
                    "voice-balance": !1,
                    "voice-duration": !1,
                    "voice-family": !1,
                    "voice-pitch": !1,
                    "voice-range": !1,
                    "voice-rate": !1,
                    "voice-stress": !1,
                    "voice-volume": !1,
                    volume: !1,
                    "white-space": !1,
                    widows: !1,
                    width: !0,
                    "will-change": !1,
                    "word-break": !0,
                    "word-spacing": !0,
                    "word-wrap": !0,
                    "wrap-flow": !1,
                    "wrap-through": !1,
                    "writing-mode": !1,
                    "z-index": !1
                };
                return e
            }

            function o() {}

            function a() {}
            n.whiteList = r(), n.getDefaultWhiteList = r, n.onAttr = o, n.onIgnoreAttr = a
        }, {}],
        8: [function(e, t, n) {
            function r(e, t) {
                return new a(t).process(e)
            }
            var o = e("./default"),
                a = e("./css");
            for (var i in (n = t.exports = r).FilterCSS = a, o) n[i] = o[i];
            "undefined" != typeof window && (window.filterCSS = t.exports)
        }, {
            "./css": 6,
            "./default": 7
        }],
        9: [function(e, t) {
            function n(e, t) {
                function n() {
                    if (!a) {
                        var n = r.trim(e.slice(i, s)),
                            o = n.indexOf(":");
                        if (-1 !== o) {
                            var l = r.trim(n.slice(0, o)),
                                u = r.trim(n.slice(o + 1));
                            if (l) {
                                var d = t(i, c.length, l, u, n);
                                d && (c += d + "; ")
                            }
                        }
                    }
                    i = s + 1
                }
                ";" !== (e = r.trimRight(e))[e.length - 1] && (e += ";");
                for (var o = e.length, a = !1, i = 0, s = 0, c = ""; s < o; s++) {
                    var l = e[s];
                    if ("/" === l && "*" === e[s + 1]) {
                        var u = e.indexOf("*/", s + 2);
                        if (-1 === u) break;
                        i = (s = u + 1) + 1, a = !1
                    } else "(" === l ? a = !0 : ")" === l ? a = !1 : ";" === l ? a || n() : "\n" === l && n()
                }
                return r.trim(c)
            }
            var r = e("./util");
            t.exports = n
        }, {
            "./util": 10
        }],
        10: [function(e, t) {
            t.exports = {
                indexOf: function(e, t) {
                    var n, r;
                    if (Array.prototype.indexOf) return e.indexOf(t);
                    for (n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                forEach: function(e, t, n) {
                    var r, o;
                    if (Array.prototype.forEach) return e.forEach(t, n);
                    for (r = 0, o = e.length; r < o; r++) t.call(n, e[r], r, e)
                },
                trim: function(e) {
                    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
                },
                trimRight: function(e) {
                    return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "")
                }
            }
        }, {}]
    }, {}, [2]),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Honeybadger = t()
    }(this, (function() {
        "use strict";

        function e(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
        }

        function t(e) {
            var t = e.default;
            if ("function" == typeof t) {
                var n = function() {
                    return t.apply(this, arguments)
                };
                n.prototype = t.prototype
            } else n = {};
            return Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.keys(e).forEach((function(t) {
                var r = Object.getOwnPropertyDescriptor(e, t);
                Object.defineProperty(n, t, r.get ? r : {
                    enumerable: !0,
                    get: function() {
                        return e[t]
                    }
                })
            })), n
        }

        function n(e) {
            return e.split("\n").reduce((function(e, t) {
                var n = r(t) || o(t) || a(t) || s(t) || i(t);
                return n && e.push(n), e
            }), [])
        }

        function r(e) {
            var t = N.exec(e);
            if (!t) return null;
            var n = t[2] && 0 === t[2].indexOf("native"),
                r = t[2] && 0 === t[2].indexOf("eval"),
                o = B.exec(t[2]);
            return r && null != o && (t[2] = o[1], t[3] = o[2], t[4] = o[3]), {
                file: n ? null : t[2],
                methodName: t[1] || $,
                arguments: n ? [t[2]] : [],
                lineNumber: t[3] ? +t[3] : null,
                column: t[4] ? +t[4] : null
            }
        }

        function o(e) {
            var t = j.exec(e);
            return t ? {
                file: t[2],
                methodName: t[1] || $,
                arguments: [],
                lineNumber: +t[3],
                column: t[4] ? +t[4] : null
            } : null
        }

        function a(e) {
            var t = M.exec(e);
            if (!t) return null;
            var n = t[3] && t[3].indexOf(" > eval") > -1,
                r = P.exec(t[3]);
            return n && null != r && (t[3] = r[1], t[4] = r[2], t[5] = null), {
                file: t[3],
                methodName: t[1] || $,
                arguments: t[2] ? t[2].split(",") : [],
                lineNumber: t[4] ? +t[4] : null,
                column: t[5] ? +t[5] : null
            }
        }

        function i(e) {
            var t = H.exec(e);
            return t ? {
                file: t[3],
                methodName: t[1] || $,
                arguments: [],
                lineNumber: +t[4],
                column: t[5] ? +t[5] : null
            } : null
        }

        function s(e) {
            var t = D.exec(e);
            return t ? {
                file: t[2],
                methodName: t[1] || $,
                arguments: [],
                lineNumber: +t[3],
                column: t[4] ? +t[4] : null
            } : null
        }

        function c(e) {
            return void 0 === e && (e = (0, R.globalThisOrWindow)()), {
                shouldReloadOnConfigure: !1,
                load: function(t) {
                    function n() {
                        return t.config.eventsEnabled
                    }
                    n() && (0, R.instrumentConsole)(e, (function(e, r) {
                        if (n() && 0 !== r.length) {
                            var o = {
                                severity: e
                            };
                            "string" == typeof r[0] ? (o.message = r[0], o.args = r.slice(1)) : o.args = r, t.event("log", o)
                        }
                    }))
                }
            }
        }

        function l(e) {
            if (!e || !e.tagName) return "";
            var t = e.tagName.toLowerCase();
            if ("html" === t) return "";
            e.id && (t += "#".concat(e.id));
            var n = e.getAttribute("class");
            n && n.split(/\s+/).forEach((function(e) {
                t += ".".concat(e)
            })), ["alt", "name", "title", "type"].forEach((function(n) {
                var r = e.getAttribute(n);
                r && (t += "[".concat(n, '="').concat(r, '"]'))
            }));
            var r = b(e);
            return r.length > 1 && (t += ":nth-child(".concat(Array.prototype.indexOf.call(r, e) + 1, ")")), t
        }

        function u(e) {
            var t = l(e);
            if (e.parentNode && e.parentNode.tagName) {
                var n = u(e.parentNode);
                if (n.length > 0) return "".concat(n, " > ").concat(t)
            }
            return t
        }

        function d(e) {
            var t = e.textContent || e.innerText || "";
            return t || "submit" !== e.type && "button" !== e.type || (t = e.value), v(t.trim(), 300)
        }

        function f() {
            var e = ge();
            if (!e.fetch) return !1;
            if (m(e.fetch)) return !0;
            if ("undefined" == typeof document) return !1;
            try {
                var t = document.createElement("iframe");
                t.style.display = "none", document.head.appendChild(t);
                var n = t.contentWindow.fetch && m(t.contentWindow.fetch);
                return document.head.removeChild(t), n
            } catch (e) {
                console && console.warn && console.warn("failed to detect native fetch via iframe: " + e)
            }
            return !1
        }

        function m(e) {
            return -1 !== e.toString().indexOf("native")
        }

        function p(e) {
            var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/) || {};
            return {
                protocol: t[2],
                host: t[4],
                pathname: t[5]
            }
        }

        function g(e) {
            var t = p(e),
                n = p(document.URL);
            return t.host && t.protocol ? t.protocol === n.protocol && t.host === n.host ? t.pathname : "".concat(t.protocol, "://").concat(t.host).concat(t.pathname) : t.pathname
        }

        function h(e) {
            var t = {};
            return e.split(/[;,]\s?/).forEach((function(e) {
                var n = e.split("=", 2),
                    r = n[0],
                    o = n[1];
                t[r] = o
            })), t
        }

        function y(e) {
            if ("object" == typeof e) {
                var t = [];
                for (var n in e) t.push(n + "=" + e[n]);
                return t.join(";")
            }
        }

        function b(e) {
            try {
                var t = e.parentNode.childNodes,
                    n = [];
                return Array.prototype.forEach.call(t, (function(t) {
                    t.tagName && t.tagName === e.tagName && n.push(t)
                })), n
            } catch (e) {
                return []
            }
        }

        function v(e, t) {
            return e.length > t && (e = e.substr(0, t) + "..."), e
        }

        function _() {
            ke += 1, clearTimeout(ye), ye = setTimeout((function() {
                ke = 0
            }))
        }

        function w(e) {
            return void 0 === e && (e = we()), {
                load: function(t) {
                    ve(e, "onerror", (function(n) {
                        var r = function(e, n, r, o, a) {
                            if (t.logger.debug("window.onerror callback invoked", arguments), ke > 0) return t.logger.debug("Ignoring window.onerror (error likely reported earlier)", arguments), void(ke -= 1);
                            if (0 === r && /Script error\.?/.test(e)) t.config.enableUncaught && t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors", arguments);
                            else {
                                var i = _e(a);
                                i.name || (i.name = "window.onerror"), i.message || (i.message = e), i.stack || (i.stack = [i.message, "\n    at ? (", n || "unknown", ":", r || 0, ":", o || 0, ")"].join("")), t.addBreadcrumb("window.onerror" !== i.name && i.name ? "window.onerror: ".concat(i.name) : "window.onerror", {
                                    category: "error",
                                    metadata: {
                                        name: i.name,
                                        message: i.message,
                                        stack: i.stack
                                    }
                                }), t.config.enableUncaught && t.notify(i)
                            }
                        };
                        return function(t, o, a, i, s) {
                            return r(t, o, a, i, s), "function" == typeof n && n.apply(e, arguments)
                        }
                    }))
                }
            }
        }

        function k(e) {
            return void 0 === e && (e = Se()), {
                load: function(t) {
                    t.config.enableUnhandledRejection && Ee(e, "onunhandledrejection", (function(e) {
                        function n(e) {
                            var n;
                            if (t.logger.debug("window.onunhandledrejection callback invoked", arguments), t.config.enableUnhandledRejection) {
                                var r = e.reason;
                                if (r instanceof Error) {
                                    var o = "unknown",
                                        a = 0,
                                        i = "".concat(r.message, "\n    at ? (").concat(o, ":").concat(a, ")"),
                                        s = r.stack || i,
                                        c = {
                                            name: r.name,
                                            message: "UnhandledPromiseRejectionWarning: ".concat(r),
                                            stack: s
                                        };
                                    return t.addBreadcrumb("window.onunhandledrejection: ".concat(c.name), {
                                        category: "error",
                                        metadata: c
                                    }), void t.notify(c)
                                }
                                var l = "string" == typeof r ? r : null !== (n = JSON.stringify(r)) && void 0 !== n ? n : "Unspecified reason";
                                t.notify({
                                    name: "window.onunhandledrejection",
                                    message: "UnhandledPromiseRejectionWarning: ".concat(l)
                                })
                            }
                        }
                        return function(t) {
                            n(t), "function" == typeof e && e.apply(this, arguments)
                        }
                    }))
                }
            }
        }

        function x(e) {
            return void 0 === e && (e = Ne()), {
                load: function(t) {
                    function n(e) {
                        return !0 === t.config.breadcrumbsEnabled || (e ? !0 === t.config.breadcrumbsEnabled[e] : !1 !== t.config.breadcrumbsEnabled)
                    }! function() {
                        function r(e) {
                            return Array.isArray(e) ? e.map((function(e) {
                                try {
                                    return String(e)
                                } catch (e) {
                                    return "[unknown]"
                                }
                            })).join(" ") : ""
                        }
                        n("console") && $e(e, (function(e, n) {
                            var o = r(n),
                                a = {
                                    category: "log",
                                    metadata: {
                                        level: e,
                                        arguments: Oe(n, 3)
                                    }
                                };
                            t.addBreadcrumb(o, a)
                        }))
                    }(), n("dom") && "function" == typeof e.addEventListener && e.addEventListener("click", (function(e) {
                            var n, r, o;
                            try {
                                n = (0, Ie.stringNameOfElement)(e.target), r = (0, Ie.stringSelectorOfElement)(e.target), o = (0, Ie.stringTextOfElement)(e.target)
                            } catch (e) {
                                n = "UI Click", r = "[unknown]", o = "[unknown]"
                            }
                            0 !== n.length && t.addBreadcrumb(n, {
                                category: "ui.click",
                                metadata: {
                                    selector: r,
                                    text: o,
                                    event: e
                                }
                            })
                        }), !!e.location), n("network") && "undefined" != typeof XMLHttpRequest && (Ae(XMLHttpRequest.prototype, "open", (function(e) {
                            return function() {
                                var t = this,
                                    n = arguments[1],
                                    r = "string" == typeof n ? n : String(n),
                                    o = "string" == typeof arguments[0] ? arguments[0].toUpperCase() : arguments[0],
                                    a = "".concat(o, " ").concat((0, Ie.localURLPathname)(r));
                                this.__hb_xhr = {
                                    type: "xhr",
                                    method: o,
                                    url: r,
                                    message: a
                                }, "function" == typeof e && e.apply(t, arguments)
                            }
                        })), Ae(XMLHttpRequest.prototype, "send", (function(e) {
                            return function() {
                                function n() {
                                    if (4 === r.readyState) {
                                        var e = void 0;
                                        r.__hb_xhr && (r.__hb_xhr.status_code = r.status, e = r.__hb_xhr.message, delete r.__hb_xhr.message), t.addBreadcrumb(e || "XMLHttpRequest", {
                                            category: "request",
                                            metadata: r.__hb_xhr
                                        })
                                    }
                                }
                                var r = this;
                                "onreadystatechange" in r && "function" == typeof r.onreadystatechange ? Ae(r, "onreadystatechange", (function(e) {
                                    return function() {
                                        n(), "function" == typeof e && e.apply(this, arguments)
                                    }
                                })) : r.onreadystatechange = n, "function" == typeof e && e.apply(r, arguments)
                            }
                        }))), n("network") && (0, Ie.nativeFetch)() && Ae(e, "fetch", (function(n) {
                            return function() {
                                var r, o = arguments[0],
                                    a = "GET";
                                "string" == typeof o ? r = o : "Request" in e && o instanceof Request ? (r = o.url, o.method && (a = o.method)) : r = String(o), arguments[1] && arguments[1].method && (a = arguments[1].method), "string" == typeof a && (a = a.toUpperCase());
                                var i = "".concat(a, " ").concat("undefined" == typeof document ? r : (0, Ie.localURLPathname)(r)),
                                    s = {
                                        type: "fetch",
                                        method: a,
                                        url: r
                                    };
                                return n.apply(this, arguments).then((function(e) {
                                    return s.status_code = e.status, t.addBreadcrumb(i, {
                                        category: "request",
                                        metadata: s
                                    }), e
                                })).catch((function(e) {
                                    throw t.addBreadcrumb("fetch error", {
                                        category: "error",
                                        metadata: s
                                    }), e
                                }))
                            }
                        })),
                        function() {
                            function r(e, n) {
                                a = n, t.addBreadcrumb("Page changed", {
                                    category: "navigation",
                                    metadata: {
                                        from: e,
                                        to: n
                                    }
                                })
                            }

                            function o(e) {
                                return function() {
                                    var t = arguments.length > 2 ? arguments[2] : void 0;
                                    return t && r(a, String(t)), e.apply(this, arguments)
                                }
                            }
                            if (n("navigation") && null != e.location) {
                                var a = e.location.href;
                                "function" == typeof addEventListener && addEventListener("popstate", (function() {
                                    r(a, e.location.href)
                                })), void 0 !== e.history && (Ae(e.history, "pushState", o), Ae(e.history, "replaceState", o))
                            }
                        }()
                }
            }
        }

        function T(e) {
            return void 0 === e && (e = Pe()), {
                load: function(t) {
                    ! function() {
                        function n(e) {
                            return function(n) {
                                return function(r, o) {
                                    if ("function" == typeof r) {
                                        var a = Array.prototype.slice.call(arguments, 2);
                                        return r = t.__wrap(r, e), n((function() {
                                            r.apply(void 0, a)
                                        }), o)
                                    }
                                    return n(r, o)
                                }
                            }
                        }
                        Me(e, "setTimeout", n({
                            component: "setTimeout"
                        })), Me(e, "setInterval", n({
                            component: "setInterval"
                        }))
                    }()
                }
            }
        }

        function E(e) {
            return void 0 === e && (e = Re()), {
                load: function(t) {
                    ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"].forEach((function(n) {
                        var r = e[n] && e[n].prototype;
                        r && Object.prototype.hasOwnProperty.call(r, "addEventListener") && (ze(r, "addEventListener", (function(e) {
                            var r = {
                                component: "".concat(n, ".prototype.addEventListener")
                            };
                            return function(n, o, a, i) {
                                try {
                                    o && null != o.handleEvent && (o.handleEvent = t.__wrap(o.handleEvent, r))
                                } catch (e) {
                                    t.logger.error(e)
                                }
                                return e.call(this, n, t.__wrap(o, r), a, i)
                            }
                        })), ze(r, "removeEventListener", (function(e) {
                            return function(n, r, o, a) {
                                return e.call(this, n, r, o, a), e.call(this, n, t.__wrap(r), o, a)
                            }
                        })))
                    }))
                }
            }
        }

        function S(e) {
            return Object.entries(e)
        }
        var L = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            C = {},
            I = {},
            O = {},
            A = {},
            $ = "<unknown>",
            N = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            B = /\((\S*)(?::(\d+))(?::(\d+))\)/,
            j = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            M = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
            P = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
            H = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i,
            D = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            z = t(Object.freeze({
                __proto__: null,
                parse: n
            }));
        ! function(e) {
            function t(e, t) {
                var n = {};
                for (var r in e) n[r] = e[r];
                for (var r in t) n[r] = t[r];
                return n
            }

            function n(e, n) {
                var r = t(e, n);
                return e.context && n.context && (r.context = t(e.context, n.context)), r
            }

            function r(e) {
                for (var t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                return !0
            }

            function o(e) {
                return "function" != typeof Object.isExtensible || Object.isExtensible(e)
            }

            function a(e, t, n) {
                if (void 0 === t && (t = !1), void 0 === n && (n = console), !e) return [];
                try {
                    var r = P.parse(e).map((function(e) {
                        return {
                            file: e.file,
                            method: e.methodName,
                            number: e.lineNumber,
                            column: e.column
                        }
                    }));
                    return t && r.splice(0, s(r)), r
                } catch (e) {
                    return n.debug(e), []
                }
            }

            function i(e) {
                var t = !1,
                    n = !1;
                return e.file && (t = e.file.toLowerCase().indexOf("@honeybadger-io") > -1), e.method && (n = e.method.toLowerCase().indexOf("@honeybadger-io") > -1), t || n
            }

            function s(t) {
                for (var n = 0, r = 0; r < t.length; r++) {
                    var o = t[r];
                    if (!i(o)) {
                        if (!o.file || "<anonymous>" === o.file) {
                            var a = t[r + 1];
                            if (a && i(a)) {
                                n++;
                                continue
                            }
                        }
                        break
                    }
                    n++
                }
                return n || e.DEFAULT_BACKTRACE_SHIFT
            }

            function c(e, t) {
                if (e.cause) {
                    for (var n = [], r = e; n.length < 3 && (r = r.cause);) n.push({
                        class: r.name,
                        message: r.message,
                        backtrace: "string" == typeof r.stack ? a(r.stack, !1, t) : null
                    });
                    return n
                }
                return []
            }

            function l(e, t) {
                return j(this, void 0, void 0, (function() {
                    var n, r, o, a;
                    return M(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (n = [], !t || !e || !e.length) return [2, n];
                                r = 0, i.label = 1;
                            case 1:
                                return e.length ? (o = e.splice(0)[r], [4, t(o.file)]) : [3, 3];
                            case 2:
                                return a = i.sent(), n[r] = C(a, o.number), r++, [3, 1];
                            case 3:
                                return [2, n]
                        }
                    }))
                }))
            }

            function u(e, t) {
                for (var n = [], r = !0, o = 0, a = t.length; o < a; o++) {
                    var i = (0, t[o])(e);
                    !1 === i && (r = !1), n.push(i)
                }
                return {
                    results: n,
                    result: r
                }
            }

            function d(e, t, n) {
                e && e.afterNotify && e.afterNotify(n, e);
                for (var r = 0, o = t.length; r < o; r++) t[r](n, e);
                return !0
            }

            function f(e) {
                if ("object" != typeof e || null === e) return {};
                var t = {};
                for (var n in e) t[n] = e[n];
                return t
            }

            function m(e, t) {
                function n(e) {
                    if (!e || "object" != typeof e) return !1;
                    for (var t = 0; t < i.length; t++) {
                        if (i[t] === e) return !0
                    }
                    return i.push(e), !1
                }

                function r(e) {
                    var t = typeof e;
                    return /function/.test(t) ? "toJSON" === e.name : !/symbol/.test(t) && (null !== e && ("object" != typeof e || void 0 !== e.hasOwnProperty))
                }

                function o(e, o) {
                    if (void 0 === o && (o = 0), o >= t) return "[DEPTH]";
                    if (!r(e)) return Object.prototype.toString.call(e);
                    if (n(e)) return "[RECURSION]";
                    if (Array.isArray(e)) return e.map((function(e) {
                        return a(e, o + 1)
                    }));
                    if ("object" == typeof e) {
                        var i = {};
                        for (var s in e) {
                            var c = e[s];
                            Object.prototype.hasOwnProperty.call(e, s) && null != s && null != c && (i[s] = a(c, o + 1))
                        }
                        return i
                    }
                    return e
                }

                function a(e, t) {
                    void 0 === t && (t = 0);
                    try {
                        return o(e, t)
                    } catch (e) {
                        return "[ERROR] ".concat(e)
                    }
                }
                void 0 === t && (t = 8);
                var i = [];
                return a(e)
            }

            function p(e) {
                var t = function(t) {
                    return function() {
                        for (var n, r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                        if ("debug" === t) {
                            if (!e.config.debug) return;
                            t = "log"
                        }
                        r.unshift("[Honeybadger]"), (n = e.config.logger)[t].apply(n, r)
                    }
                };
                return {
                    log: t("log"),
                    info: t("info"),
                    debug: t("debug"),
                    warn: t("warn"),
                    error: t("error")
                }
            }

            function g(e) {
                var n;
                if (e)
                    if (h(e)) {
                        var r = e;
                        n = t(e, {
                            name: r.name,
                            message: r.message,
                            stack: r.stack,
                            cause: r.cause
                        })
                    } else if ("object" == typeof e) n = f(e);
                else {
                    n = {
                        message: String(e)
                    }
                } else n = {};
                return n
            }

            function h(e) {
                return e instanceof Error || "[object Error]" === Object.prototype.toString.call(e)
            }

            function y(e, t, n) {
                if (e && t && n && t in e) try {
                    for (var r = e[t]; r && r.__hb_original;) r = r.__hb_original;
                    e[t] = n(r), e[t].__hb_original = r
                } catch (e) {}
            }

            function b(e, t) {
                e && e.console && t && (D.push(t), H || (H = !0, ["debug", "info", "warn", "error", "log"].forEach((function(t) {
                    y(e.console, t, (function(n) {
                        return function() {
                            var r = Array.prototype.slice.call(arguments);
                            D.forEach((function(e) {
                                try {
                                    e(t, r)
                                } catch (e) {}
                            })), "function" == typeof n && Function.prototype.apply.call(n, e.console, arguments)
                        }
                    }))
                }))))
            }

            function v(e, t) {
                var n = e.trim().replace(/\/$/, "");
                return t = t.trim().replace(/(^\/|\/$)/g, ""), "".concat(n, "/").concat(t)
            }

            function _() {
                try {
                    throw new Error("")
                } catch (e) {
                    if (e.stack) return e.stack
                }
                for (var e = 10, t = [], n = arguments.callee; n && t.length < e;) {
                    /function(?:\s+([\w$]+))+\s*\(/.test(n.toString()) ? t.push(RegExp.$1 || "<anonymous>") : t.push("<anonymous>");
                    try {
                        n = n.caller
                    } catch (e) {
                        break
                    }
                }
                return t.join("\n")
            }

            function w(e, t) {
                function n(e) {
                    var o, a;
                    if (x("Object", e) || x("Array", e)) {
                        if (-1 !== r.indexOf(e)) return "[CIRCULAR DATA STRUCTURE]";
                        r.push(e)
                    }
                    if (x("Object", e)) {
                        for (o in a = {}, e) k(o, t) ? a[o] = "[FILTERED]" : a[o] = n(e[o]);
                        return a
                    }
                    return x("Array", e) ? e.map((function(e) {
                        return n(e)
                    })) : x("Function", e) ? "[FUNC]" : e
                }
                if (x("Object", e)) {
                    x("Array", t) || (t = []);
                    var r = [];
                    return n(e)
                }
            }

            function k(e, t) {
                for (var n = 0; n < t.length; n++)
                    if (-1 !== e.toLowerCase().indexOf(t[n].toLowerCase())) return !0;
                return !1
            }

            function x(e, t) {
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return null != t && n === e
            }

            function T(e, t) {
                if (!t) return e;
                if ("string" != typeof e) return e;
                var n = e.split(/\?/, 2)[1];
                if (!n) return e;
                var r = e;
                return n.split(/[&]\s?/).forEach((function(e) {
                    var n = e.split("=", 2),
                        o = n[0],
                        a = n[1];
                    k(o, t) && (r = r.replace("".concat(o, "=").concat(a), "".concat(o, "=[FILTERED]")))
                })), r
            }

            function E(e, t) {
                void 0 === t && (t = "");
                var n = {};
                return Object.keys(e).forEach((function(r) {
                    var o = t + r.replace(/\W/g, "_").toUpperCase();
                    n[o] = e[r]
                })), n
            }

            function S(e) {
                return JSON.parse(JSON.stringify(e))
            }

            function C(e, t, n) {
                if (void 0 === n && (n = 2), !e) return null;
                var r = e.split("\n");
                r.unshift("");
                for (var o = t + n, a = {}, i = t - n; i <= o; i++) {
                    var s = r[i];
                    "string" == typeof s && (a[i] = s)
                }
                return a
            }

            function I(e) {
                return void 0 !== e.async
            }

            function O() {
                return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : window
            }

            function A(e, t, n, r) {
                void 0 === r && (r = 100);
                var o = "".concat(t, "-").concat(n);
                if (void 0 === R[o] && (R[o] = 0), R[o] % r == 0) {
                    var a = "Deprecation warning: ".concat(t, " has been deprecated; please use ").concat(n, " instead.");
                    e.warn(a), R[o]++
                } else R[o]++
            }
            var $ = L && L.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n);
                    var o = Object.getOwnPropertyDescriptor(t, n);
                    o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, r, o)
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                N = L && L.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                B = L && L.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && $(t, e, n);
                    return N(t, e), t
                },
                j = L && L.__awaiter || function(e, t, n, r) {
                    function o(e) {
                        return e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))
                    }
                    return new(n || (n = Promise))((function(n, a) {
                        function i(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function s(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function c(e) {
                            e.done ? n(e.value) : o(e.value).then(i, s)
                        }
                        c((r = r.apply(e, t || [])).next())
                    }))
                },
                M = L && L.__generator || function(e, t) {
                    function n(e) {
                        return function(t) {
                            return r([e, t])
                        }
                    }

                    function r(n) {
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; c;) try {
                            if (o = 1, a && (i = 2 & n[0] ? a.return : n[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, n[1])).done) return i;
                            switch (a = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                                case 0:
                                case 1:
                                    i = n;
                                    break;
                                case 4:
                                    return c.label++, {
                                        value: n[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++, a = n[1], n = [0];
                                    continue;
                                case 7:
                                    n = c.ops.pop(), c.trys.pop();
                                    continue;
                                default:
                                    if (!(i = c.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                        c.label = n[1];
                                        break
                                    }
                                    if (6 === n[0] && c.label < i[1]) {
                                        c.label = i[1], i = n;
                                        break
                                    }
                                    if (i && c.label < i[2]) {
                                        c.label = i[2], c.ops.push(n);
                                        break
                                    }
                                    i[2] && c.ops.pop(), c.trys.pop();
                                    continue
                            }
                            n = t.call(e, c)
                        } catch (e) {
                            n = [6, e], a = 0
                        } finally {
                            o = i = 0
                        }
                        if (5 & n[0]) throw n[1];
                        return {
                            value: n[0] ? n[1] : void 0,
                            done: !0
                        }
                    }
                    var o, a, i, s, c = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                            next: n(0),
                            throw: n(1),
                            return: n(2)
                        },
                        "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                            return this
                        }), s
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.logDeprecatedMethod = e.globalThisOrWindow = e.isBrowserConfig = e.clone = e.formatCGIData = e.filterUrl = e.filter = e.generateStackTrace = e.endpoint = e.instrumentConsole = e.instrument = e.isErrorObject = e.makeNotice = e.logger = e.sanitize = e.shallowClone = e.runAfterNotifyHandlers = e.runBeforeNotifyHandlers = e.getSourceForBacktrace = e.getCauses = e.calculateBacktraceShift = e.DEFAULT_BACKTRACE_SHIFT = e.makeBacktrace = e.objectIsExtensible = e.objectIsEmpty = e.mergeNotice = e.merge = void 0;
            var P = B(z);
            e.merge = t, e.mergeNotice = n, e.objectIsEmpty = r, e.objectIsExtensible = o, e.makeBacktrace = a, e.DEFAULT_BACKTRACE_SHIFT = 3, e.calculateBacktraceShift = s, e.getCauses = c, e.getSourceForBacktrace = l, e.runBeforeNotifyHandlers = u, e.runAfterNotifyHandlers = d, e.shallowClone = f, e.sanitize = m, e.logger = p, e.makeNotice = g, e.isErrorObject = h, e.instrument = y;
            var H = !1,
                D = [];
            e.instrumentConsole = b, e.endpoint = v, e.generateStackTrace = _, e.filter = w, e.filterUrl = T, e.formatCGIData = E, e.clone = S, e.isBrowserConfig = I, e.globalThisOrWindow = O;
            var R = {};
            e.logDeprecatedMethod = A
        }(A), Object.defineProperty(O, "__esModule", {
            value: !0
        });
        var R = A;
        O.default = c;
        var U = {},
            F = {};
        Object.defineProperty(F, "__esModule", {
            value: !0
        }), F.GlobalStore = void 0;
        var q = A,
            V = function() {
                function e(e, t) {
                    this.contents = e, this.breadcrumbsLimit = t
                }
                return e.create = function(t, n) {
                    return new e(t, n)
                }, e.prototype.available = function() {
                    return !0
                }, e.prototype.getContents = function(e) {
                    var t = e ? this.contents[e] : this.contents;
                    return JSON.parse(JSON.stringify(t))
                }, e.prototype.setContext = function(e) {
                    this.contents.context = (0, q.merge)(this.contents.context, e || {})
                }, e.prototype.addBreadcrumb = function(e) {
                    this.contents.breadcrumbs.length == this.breadcrumbsLimit && this.contents.breadcrumbs.shift(), this.contents.breadcrumbs.push(e)
                }, e.prototype.clear = function() {
                    this.contents.context = {}, this.contents.breadcrumbs = []
                }, e.prototype.run = function(e) {
                    return e()
                }, e
            }();
        F.GlobalStore = V;
        var J = {};
        class W {
            static parse(e) {
                return e.trim().split("\n").map((e => JSON.parse(e)))
            }
            static stringify(e) {
                return e.map((e => JSON.stringify(e))).join("\n")
            }
        }
        var K = t(Object.freeze({
                __proto__: null,
                NdJson: W
            })),
            X = {};
        Object.defineProperty(X, "__esModule", {
            value: !0
        }), X.CONFIG = void 0, X.CONFIG = {
            apiKey: null,
            endpoint: "https://api.honeybadger.io",
            environment: null,
            hostname: null,
            projectRoot: null,
            component: null,
            action: null,
            revision: null,
            reportData: null,
            breadcrumbsEnabled: !0,
            eventsEnabled: !1,
            maxBreadcrumbs: 40,
            maxObjectDepth: 8,
            logger: console,
            developmentEnvironments: ["dev", "development", "test"],
            debug: !1,
            tags: null,
            enableUncaught: !0,
            enableUnhandledRejection: !0,
            afterUncaught: function() {
                return !0
            },
            filters: ["creditcard", "password"],
            __plugins: []
        };
        var G = L && L.__assign || function() {
                return G = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, G.apply(this, arguments)
            },
            Y = L && L.__awaiter || function(e, t, n, r) {
                function o(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))
                }
                return new(n || (n = Promise))((function(n, a) {
                    function i(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        e.done ? n(e.value) : o(e.value).then(i, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Z = L && L.__generator || function(e, t) {
                function n(e) {
                    return function(t) {
                        return r([e, t])
                    }
                }

                function r(n) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (o = 1, a && (i = 2 & n[0] ? a.return : n[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, n[1])).done) return i;
                        switch (a = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                            case 0:
                            case 1:
                                i = n;
                                break;
                            case 4:
                                return c.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(i = c.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                    c.label = n[1];
                                    break
                                }
                                if (6 === n[0] && c.label < i[1]) {
                                    c.label = i[1], i = n;
                                    break
                                }
                                if (i && c.label < i[2]) {
                                    c.label = i[2], c.ops.push(n);
                                    break
                                }
                                i[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        n = t.call(e, c)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        o = i = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }
                var o, a, i, s, c = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s
            };
        Object.defineProperty(J, "__esModule", {
            value: !0
        }), J.ThrottledEventsLogger = void 0;
        var Q = K,
            ee = A,
            te = X,
            ne = function() {
                function e(e, t) {
                    this.config = e, this.transport = t, this.queue = [], this.isProcessing = !1, this.config = G(G({}, te.CONFIG), e), this.logger = this.originalLogger()
                }
                return e.prototype.configure = function(e) {
                    for (var t in e) this.config[t] = e[t]
                }, e.prototype.log = function(e) {
                    this.queue.push(e), this.isProcessing || this.processQueue()
                }, e.prototype.processQueue = function() {
                    var e = this;
                    if (0 !== this.queue.length && !this.isProcessing) {
                        this.isProcessing = !0;
                        var t = this.queue.slice();
                        this.queue = [];
                        var n = Q.NdJson.stringify(t);
                        this.makeHttpRequest(n).then((function() {
                            setTimeout((function() {
                                e.isProcessing = !1, e.processQueue()
                            }), 50)
                        })).catch((function(t) {
                            e.logger.error("[Honeybadger] Error making HTTP request:", t), setTimeout((function() {
                                e.isProcessing = !1, e.processQueue()
                            }), 50)
                        }))
                    }
                }, e.prototype.makeHttpRequest = function(e) {
                    return Y(this, void 0, void 0, (function() {
                        var t = this;
                        return Z(this, (function() {
                            return [2, this.transport.send({
                                headers: {
                                    "X-API-Key": this.config.apiKey,
                                    "Content-Type": "application/json"
                                },
                                method: "POST",
                                endpoint: (0, ee.endpoint)(this.config.endpoint, "/v1/events"),
                                maxObjectDepth: this.config.maxObjectDepth,
                                logger: this.logger
                            }, e).then((function() {
                                t.config.debug && t.logger.debug("[Honeybadger] Events sent successfully")
                            })).catch((function(e) {
                                t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))
                            }))]
                        }))
                    }))
                }, e.prototype.originalLogger = function() {
                    var e, t, n, r, o;
                    return {
                        log: null !== (e = console.log.__hb_original) && void 0 !== e ? e : console.log,
                        info: null !== (t = console.info.__hb_original) && void 0 !== t ? t : console.info,
                        debug: null !== (n = console.debug.__hb_original) && void 0 !== n ? n : console.debug,
                        warn: null !== (r = console.warn.__hb_original) && void 0 !== r ? r : console.warn,
                        error: null !== (o = console.error.__hb_original) && void 0 !== o ? o : console.error
                    }
                }, e
            }();
        J.ThrottledEventsLogger = ne;
        var re = L && L.__assign || function() {
                return re = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, re.apply(this, arguments)
            },
            oe = L && L.__awaiter || function(e, t, n, r) {
                function o(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))
                }
                return new(n || (n = Promise))((function(n, a) {
                    function i(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        e.done ? n(e.value) : o(e.value).then(i, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            ae = L && L.__generator || function(e, t) {
                function n(e) {
                    return function(t) {
                        return r([e, t])
                    }
                }

                function r(n) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (o = 1, a && (i = 2 & n[0] ? a.return : n[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, n[1])).done) return i;
                        switch (a = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                            case 0:
                            case 1:
                                i = n;
                                break;
                            case 4:
                                return c.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(i = c.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                    c.label = n[1];
                                    break
                                }
                                if (6 === n[0] && c.label < i[1]) {
                                    c.label = i[1], i = n;
                                    break
                                }
                                if (i && c.label < i[2]) {
                                    c.label = i[2], c.ops.push(n);
                                    break
                                }
                                i[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        n = t.call(e, c)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        o = i = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }
                var o, a, i, s, c = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s
            };
        Object.defineProperty(U, "__esModule", {
            value: !0
        }), U.Client = void 0;
        var ie = A,
            se = F,
            ce = J,
            le = X,
            ue = /,|\s+/,
            de = /\S/,
            fe = function() {
                function e(e, t) {
                    void 0 === e && (e = {}), this.__pluginsLoaded = !1, this.__store = null, this.__beforeNotifyHandlers = [], this.__afterNotifyHandlers = [], this.__notifier = {
                        name: "@honeybadger-io/core",
                        url: "https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",
                        version: "6.9.1"
                    }, this.config = re(re({}, le.CONFIG), e), this.__initStore(), this.__transport = t, this.__eventsLogger = new ce.ThrottledEventsLogger(this.config, this.__transport), this.logger = (0, ie.logger)(this)
                }
                return e.prototype.getVersion = function() {
                    return this.__notifier.version
                }, e.prototype.getNotifier = function() {
                    return this.__notifier
                }, e.prototype.setNotifier = function(e) {
                    this.__notifier = e
                }, e.prototype.configure = function(e) {
                    for (var t in void 0 === e && (e = {}), e) this.config[t] = e[t];
                    return this.__eventsLogger.configure(this.config), this.loadPlugins(), this
                }, e.prototype.loadPlugins = function() {
                    var e = this;
                    (this.__pluginsLoaded ? this.config.__plugins.filter((function(e) {
                        return e.shouldReloadOnConfigure
                    })) : this.config.__plugins).forEach((function(t) {
                        return t.load(e)
                    })), this.__pluginsLoaded = !0
                }, e.prototype.__initStore = function() {
                    this.__store = new se.GlobalStore({
                        context: {},
                        breadcrumbs: []
                    }, this.config.maxBreadcrumbs)
                }, e.prototype.beforeNotify = function(e) {
                    return this.__beforeNotifyHandlers.push(e), this
                }, e.prototype.afterNotify = function(e) {
                    return this.__afterNotifyHandlers.push(e), this
                }, e.prototype.setContext = function(e) {
                    return "object" == typeof e && null != e && this.__store.setContext(e), this
                }, e.prototype.resetContext = function(e) {
                    return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."), this.__store.clear(), "object" == typeof e && null !== e && this.__store.setContext(e), this
                }, e.prototype.clear = function() {
                    return this.__store.clear(), this
                }, e.prototype.notify = function(e, t, n) {
                    var r = this;
                    void 0 === t && (t = void 0), void 0 === n && (n = void 0);
                    var o = this.makeNotice(e, t, n),
                        a = o && o.backtrace ? o.backtrace.map((function(e) {
                            return (0, ie.shallowClone)(e)
                        })) : null,
                        i = this.__runPreconditions(o);
                    return i instanceof Error ? ((0, ie.runAfterNotifyHandlers)(o, this.__afterNotifyHandlers, i), !1) : i instanceof Promise ? (i.then((function(e) {
                        return e instanceof Error ? ((0, ie.runAfterNotifyHandlers)(o, r.__afterNotifyHandlers, e), !1) : r.__send(o, a)
                    })), !0) : (this.__send(o, a).catch((function() {})), !0)
                }, e.prototype.notifyAsync = function(e, t, n) {
                    var r = this;
                    return void 0 === t && (t = void 0), void 0 === n && (n = void 0), new Promise((function(o, a) {
                        (function(e) {
                            var t = e.afterNotify;
                            e.afterNotify = function(e) {
                                if (null == t || t.call(r, e), e) return a(e);
                                o()
                            }
                        })(e.afterNotify ? e : t && t.afterNotify ? t : n && n.afterNotify ? n : t && "object" == typeof t ? t : n || (t = {})), r.notify(e, t, n)
                    }))
                }, e.prototype.makeNotice = function(e, t, n) {
                    void 0 === t && (t = void 0), void 0 === n && (n = void 0);
                    var r = (0, ie.makeNotice)(e);
                    t && "object" != typeof t && (t = {
                        name: String(t)
                    });
                    if (t && (r = (0, ie.mergeNotice)(r, t)), "object" == typeof n && null !== n && (r = (0, ie.mergeNotice)(r, n)), (0, ie.objectIsEmpty)(r)) return null;
                    var o = this.__store.getContents("context"),
                        a = this.__constructTags(r.tags),
                        i = this.__constructTags(o.tags),
                        s = this.__constructTags(this.config.tags),
                        c = a.concat(i).concat(s),
                        l = c.filter((function(e, t) {
                            return c.indexOf(e) === t
                        }));
                    return r = (0, ie.merge)(r, {
                        name: r.name || "Error",
                        context: (0, ie.merge)(o, r.context),
                        projectRoot: r.projectRoot || this.config.projectRoot,
                        environment: r.environment || this.config.environment,
                        component: r.component || this.config.component,
                        action: r.action || this.config.action,
                        revision: r.revision || this.config.revision,
                        tags: l
                    }), Array.isArray(r.backtrace) && r.backtrace.length || ("string" == typeof r.stack && r.stack.trim() ? r.backtrace = (0, ie.makeBacktrace)(r.stack, !1, this.logger) : (r.stack = (0, ie.generateStackTrace)(), r.backtrace = (0, ie.makeBacktrace)(r.stack, !0, this.logger))), r
                }, e.prototype.addBreadcrumb = function(e, t) {
                    if (this.config.breadcrumbsEnabled) {
                        t = t || {};
                        var n = (0, ie.shallowClone)(t.metadata),
                            r = t.category || "custom",
                            o = (new Date).toISOString();
                        return this.__store.addBreadcrumb({
                            category: r,
                            message: e,
                            metadata: n,
                            timestamp: o
                        }), this
                    }
                }, e.prototype.logEvent = function(e) {
                    (0, ie.logDeprecatedMethod)(this.logger, "Honeybadger.logEvent", "Honeybadger.event"), this.event("log", e)
                }, e.prototype.event = function(e, t) {
                    var n;
                    "object" == typeof e && (t = e, e = null !== (n = e.event_type) && void 0 !== n ? n : void 0), this.__eventsLogger.log(re({
                        event_type: e,
                        ts: (new Date).toISOString()
                    }, t))
                }, e.prototype.__getBreadcrumbs = function() {
                    return this.__store.getContents("breadcrumbs").slice()
                }, e.prototype.__getContext = function() {
                    return this.__store.getContents("context")
                }, e.prototype.__developmentMode = function() {
                    return !0 !== this.config.reportData && (this.config.environment && this.config.developmentEnvironments.includes(this.config.environment))
                }, e.prototype.__buildPayload = function(e) {
                    var t = (0, ie.filter)(e.headers, this.config.filters) || {},
                        n = (0, ie.filter)(re(re({}, e.cgiData), (0, ie.formatCGIData)(t, "HTTP_")), this.config.filters);
                    return {
                        notifier: this.__notifier,
                        breadcrumbs: {
                            enabled: !!this.config.breadcrumbsEnabled,
                            trail: e.__breadcrumbs || []
                        },
                        error: {
                            class: e.name,
                            message: e.message,
                            backtrace: e.backtrace,
                            fingerprint: e.fingerprint,
                            tags: e.tags,
                            causes: (0, ie.getCauses)(e, this.logger)
                        },
                        request: {
                            url: (0, ie.filterUrl)(e.url, this.config.filters),
                            component: e.component,
                            action: e.action,
                            context: e.context,
                            cgi_data: n,
                            params: (0, ie.filter)(e.params, this.config.filters) || {},
                            session: (0, ie.filter)(e.session, this.config.filters) || {}
                        },
                        server: {
                            project_root: e.projectRoot,
                            environment_name: e.environment,
                            revision: e.revision,
                            hostname: this.config.hostname,
                            time: (new Date).toUTCString()
                        },
                        details: e.details || {}
                    }
                }, e.prototype.__constructTags = function(e) {
                    return e ? e.toString().split(ue).filter((function(e) {
                        return de.test(e)
                    })) : []
                }, e.prototype.__runPreconditions = function(e) {
                    var t = this,
                        n = null;
                    e || (this.logger.debug("failed to build error report"), n = new Error("failed to build error report")), !1 === this.config.reportData && (this.logger.debug("skipping error report: honeybadger.js is disabled", e), n = new Error("honeybadger.js is disabled")), this.__developmentMode() && (this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.", e), n = new Error("honeybadger.js is in development mode")), this.config.apiKey || (this.logger.warn("could not send error report: no API key has been configured", e), n = new Error("missing API key"));
                    var r = (0, ie.runBeforeNotifyHandlers)(e, this.__beforeNotifyHandlers);
                    return n || r.result || (this.logger.debug("skipping error report: one or more beforeNotify handlers returned false", e), n = new Error("beforeNotify handlers returned false")), r.results.length && r.results.some((function(e) {
                        return e instanceof Promise
                    })) ? Promise.allSettled(r.results).then((function(r) {
                        if (!n && r.some((function(e) {
                                return "rejected" === e.status || !1 === e.value
                            })) && (t.logger.debug("skipping error report: one or more beforeNotify handlers returned false", e), n = new Error("beforeNotify handlers (async) returned false")), n) return n
                    })) : n
                }, e.prototype.__send = function(e, t) {
                    var n = this;
                    return this.config.breadcrumbsEnabled ? (this.addBreadcrumb("Honeybadger Notice", {
                        category: "notice",
                        metadata: {
                            message: e.message,
                            name: e.name,
                            stack: e.stack
                        }
                    }), e.__breadcrumbs = this.__store.getContents("breadcrumbs")) : e.__breadcrumbs = [], (0, ie.getSourceForBacktrace)(t, this.__getSourceFileHandler).then((function(t) {
                        return oe(n, void 0, void 0, (function() {
                            var n;
                            return ae(this, (function() {
                                return t.forEach((function(t, n) {
                                    e.backtrace[n].source = t
                                })), n = this.__buildPayload(e), [2, this.__transport.send({
                                    headers: {
                                        "X-API-Key": this.config.apiKey,
                                        "Content-Type": "application/json",
                                        Accept: "text/json, application/json"
                                    },
                                    method: "POST",
                                    endpoint: (0, ie.endpoint)(this.config.endpoint, "/v1/notices/js"),
                                    maxObjectDepth: this.config.maxObjectDepth,
                                    logger: this.logger
                                }, n)]
                            }))
                        }))
                    })).then((function(t) {
                        if (201 !== t.statusCode) return (0, ie.runAfterNotifyHandlers)(e, n.__afterNotifyHandlers, new Error("Bad HTTP response: ".concat(t.statusCode))), n.logger.warn("Error report failed: unknown response from server. code=".concat(t.statusCode)), !1;
                        var r = JSON.parse(t.body).id;
                        return (0, ie.runAfterNotifyHandlers)((0, ie.merge)(e, {
                            id: r
                        }), n.__afterNotifyHandlers), n.logger.info("Error report sent \u26a1 https://app.honeybadger.io/notice/".concat(r)), !0
                    })).catch((function(t) {
                        return n.logger.error("Error report failed: an unknown error occurred.", "message=".concat(t.message)), (0, ie.runAfterNotifyHandlers)(e, n.__afterNotifyHandlers, t), !1
                    }))
                }, e
            }();
        U.Client = fe;
        var me = {};
        Object.defineProperty(me, "__esModule", {
                value: !0
            }),
            function(e) {
                var t = L && L.__createBinding || (Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, o)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    n = L && L.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    r = L && L.__exportStar || function(e, n) {
                        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(n, r) || t(n, e, r)
                    },
                    o = L && L.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var r = {};
                        if (null != e)
                            for (var o in e) "default" !== o && Object.prototype.hasOwnProperty.call(e, o) && t(r, e, o);
                        return n(r, e), r
                    },
                    a = L && L.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Plugins = e.Util = e.Types = e.Client = void 0;
                var i = a(O),
                    s = U;
                Object.defineProperty(e, "Client", {
                    enumerable: !0,
                    get: function() {
                        return s.Client
                    }
                }), r(F, e), e.Types = o(me), e.Util = o(A), e.Plugins = {
                    events: i.default
                }
            }(I);
        var pe = {};
        Object.defineProperty(pe, "__esModule", {
            value: !0
        }), pe.preferCatch = pe.encodeCookie = pe.decodeCookie = pe.localURLPathname = pe.parseURL = pe.nativeFetch = pe.stringTextOfElement = pe.stringSelectorOfElement = pe.stringNameOfElement = void 0;
        var ge = I.Util.globalThisOrWindow;
        pe.stringNameOfElement = l, pe.stringSelectorOfElement = u, pe.stringTextOfElement = d, pe.nativeFetch = f, pe.parseURL = p, pe.localURLPathname = g, pe.decodeCookie = h, pe.encodeCookie = y, pe.preferCatch = function() {
            var e = !0;
            if ("undefined" == typeof window) return e;
            if (window.atob || (e = !1), window.ErrorEvent) try {
                0 === new window.ErrorEvent("").colno && (e = !1)
            } catch (e) {}
            return e
        }();
        var he = {};
        Object.defineProperty(he, "__esModule", {
            value: !0
        }), he.onError = he.ignoreNextOnError = void 0;
        var ye, be = I,
            ve = be.Util.instrument,
            _e = be.Util.makeNotice,
            we = be.Util.globalThisOrWindow,
            ke = 0;
        he.ignoreNextOnError = _, he.onError = w;
        var xe = {};
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        var Te = I,
            Ee = Te.Util.instrument,
            Se = Te.Util.globalThisOrWindow;
        xe.default = k;
        var Le = {};
        Object.defineProperty(Le, "__esModule", {
            value: !0
        });
        var Ce = I,
            Ie = pe,
            Oe = Ce.Util.sanitize,
            Ae = Ce.Util.instrument,
            $e = Ce.Util.instrumentConsole,
            Ne = Ce.Util.globalThisOrWindow;
        Le.default = x;
        var Be = {};
        Object.defineProperty(Be, "__esModule", {
            value: !0
        });
        var je = I,
            Me = je.Util.instrument,
            Pe = je.Util.globalThisOrWindow;
        Be.default = T;
        var He = {};
        Object.defineProperty(He, "__esModule", {
            value: !0
        });
        var De = I,
            ze = De.Util.instrument,
            Re = De.Util.globalThisOrWindow;
        He.default = E;
        var Ue = {},
            Fe = L && L.__awaiter || function(e, t, n, r) {
                function o(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))
                }
                return new(n || (n = Promise))((function(n, a) {
                    function i(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        e.done ? n(e.value) : o(e.value).then(i, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            qe = L && L.__generator || function(e, t) {
                function n(e) {
                    return function(t) {
                        return r([e, t])
                    }
                }

                function r(n) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (o = 1, a && (i = 2 & n[0] ? a.return : n[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, n[1])).done) return i;
                        switch (a = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                            case 0:
                            case 1:
                                i = n;
                                break;
                            case 4:
                                return c.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(i = c.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                    c.label = n[1];
                                    break
                                }
                                if (6 === n[0] && c.label < i[1]) {
                                    c.label = i[1], i = n;
                                    break
                                }
                                if (i && c.label < i[2]) {
                                    c.label = i[2], c.ops.push(n);
                                    break
                                }
                                i[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        n = t.call(e, c)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        o = i = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }
                var o, a, i, s, c = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: n(0),
                    throw: n(1),
                    return: n(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s
            };
        Object.defineProperty(Ue, "__esModule", {
            value: !0
        }), Ue.BrowserTransport = void 0;
        var Ve = I,
            Je = Ve.Util.sanitize,
            We = Ve.Util.globalThisOrWindow,
            Ke = function() {
                function e(e) {
                    void 0 === e && (e = {}), this.headers = {}, this.headers = e
                }
                return e.prototype.defaultHeaders = function() {
                    return this.headers
                }, e.prototype.send = function(e, t) {
                    return Fe(this, void 0, void 0, (function() {
                        var n, r, o, a, i;
                        return qe(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return n = e.headers ? S(e.headers) : [], r = this.defaultHeaders(), n.forEach((function(e) {
                                        var t = e[0],
                                            n = e[1];
                                        null != t && null != n && (r[String(t)] = String(n))
                                    })), o = {
                                        method: e.method,
                                        headers: r
                                    }, "POST" === e.method && t && (o.body = "string" == typeof t ? t : JSON.stringify(Je(t, e.maxObjectDepth))), [4, We().fetch(e.endpoint, o)];
                                case 1:
                                    return [4, (a = s.sent()).text()];
                                case 2:
                                    return i = s.sent(), [2, Promise.resolve({
                                        statusCode: a.status,
                                        body: i
                                    })]
                            }
                        }))
                    }))
                }, e
            }();
        return Ue.BrowserTransport = Ke,
            function(e) {
                var t, n = L && L.__extends || (t = function(e, n) {
                        return t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, t(e, n)
                    }, function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }),
                    r = L && L.__assign || function() {
                        return r = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }, r.apply(this, arguments)
                    },
                    o = L && L.__awaiter || function(e, t, n, r) {
                        function o(e) {
                            return e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))
                        }
                        return new(n || (n = Promise))((function(n, a) {
                            function i(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function c(e) {
                                e.done ? n(e.value) : o(e.value).then(i, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    },
                    a = L && L.__generator || function(e, t) {
                        function n(e) {
                            return function(t) {
                                return r([e, t])
                            }
                        }

                        function r(n) {
                            if (o) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (o = 1, a && (i = 2 & n[0] ? a.return : n[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, n[1])).done) return i;
                                switch (a = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                                    case 0:
                                    case 1:
                                        i = n;
                                        break;
                                    case 4:
                                        return c.label++, {
                                            value: n[1],
                                            done: !1
                                        };
                                    case 5:
                                        c.label++, a = n[1], n = [0];
                                        continue;
                                    case 7:
                                        n = c.ops.pop(), c.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = c.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                            c.label = n[1];
                                            break
                                        }
                                        if (6 === n[0] && c.label < i[1]) {
                                            c.label = i[1], i = n;
                                            break
                                        }
                                        if (i && c.label < i[2]) {
                                            c.label = i[2], c.ops.push(n);
                                            break
                                        }
                                        i[2] && c.ops.pop(), c.trys.pop();
                                        continue
                                }
                                n = t.call(e, c)
                            } catch (e) {
                                n = [6, e], a = 0
                            } finally {
                                o = i = 0
                            }
                            if (5 & n[0]) throw n[1];
                            return {
                                value: n[0] ? n[1] : void 0,
                                done: !0
                            }
                        }
                        var o, a, i, s, c = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return s = {
                            next: n(0),
                            throw: n(1),
                            return: n(2)
                        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                            return this
                        }), s
                    },
                    i = L && L.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Types = e.getUserFeedbackScriptUrl = void 0;
                var s = I,
                    c = pe,
                    l = he,
                    u = i(xe),
                    d = i(Le),
                    f = i(Be),
                    m = i(He),
                    p = Ue,
                    g = s.Util.merge,
                    h = s.Util.filter,
                    y = s.Util.objectIsExtensible,
                    b = s.Util.globalThisOrWindow,
                    v = function() {
                        var e = b(),
                            t = "";
                        return null != e.location && (t = e.location.protocol + "//" + e.location.host), t
                    },
                    _ = function(e) {
                        var t = e.split(".").slice(0, 2).join(".");
                        return "https://js.honeybadger.io/v".concat(t, "/honeybadger-feedback-form.js")
                    };
                e.getUserFeedbackScriptUrl = _;
                var w = function(t) {
                        function i(e) {
                            void 0 === e && (e = {});
                            var n = t.call(this, r({
                                userFeedbackEndpoint: "https://api.honeybadger.io/v2/feedback",
                                async: !0,
                                maxErrors: null,
                                projectRoot: v()
                            }, e), new p.BrowserTransport({
                                "User-Agent": x()
                            })) || this;
                            return n.__errorsSent = 0, n.__lastWrapErr = void 0, n.__lastNoticeId = void 0, n.__beforeNotifyHandlers = [function(e) {
                                return n.__exceedsMaxErrors() ? (n.logger.debug("Dropping notice: max errors exceeded", e), !1) : (e && !e.url && "undefined" != typeof document && (e.url = document.URL), n.__incrementErrorsCount(), !0)
                            }], n.__afterNotifyHandlers = [function(e, t) {
                                t && (n.__lastNoticeId = t.id)
                            }], n
                        }
                        return n(i, t), i.prototype.configure = function(e) {
                            return void 0 === e && (e = {}), t.prototype.configure.call(this, e)
                        }, i.prototype.resetMaxErrors = function() {
                            return this.__errorsSent = 0
                        }, i.prototype.factory = function(e) {
                            var t = new i(e);
                            return t.setNotifier(this.getNotifier()), t
                        }, i.prototype.checkIn = function() {
                            throw new Error("Honeybadger.checkIn() is not supported on the browser")
                        }, i.prototype.showUserFeedbackForm = function(e) {
                            return void 0 === e && (e = {}), o(this, void 0, void 0, (function() {
                                var t;
                                return a(this, (function() {
                                    return this.config && this.config.apiKey ? this.__lastNoticeId ? void 0 === (t = b()).document ? (this.logger.debug("global.document is undefined. Cannot attach script"), [2]) : this.isUserFeedbackScriptUrlAlreadyVisible() ? (this.logger.debug("User feedback form is already visible"), [2]) : (t.honeybadgerUserFeedbackOptions = r(r({}, e), {
                                        apiKey: this.config.apiKey,
                                        endpoint: this.config.userFeedbackEndpoint,
                                        noticeId: this.__lastNoticeId
                                    }), this.appendUserFeedbackScriptTag(t, e), [2]) : (this.logger.debug("Can't show user feedback form without a notice already reported"), [2]) : (this.logger.debug("Client not initialized"), [2])
                                }))
                            }))
                        }, i.prototype.appendUserFeedbackScriptTag = function(e, t) {
                            void 0 === t && (t = {});
                            var n = e.document.createElement("script");
                            n.setAttribute("src", this.getUserFeedbackSubmitUrl()), n.setAttribute("async", "true"), t.onLoad && (n.onload = t.onLoad), (L.document.head || L.document.body).appendChild(n)
                        }, i.prototype.isUserFeedbackScriptUrlAlreadyVisible = function() {
                            for (var e = b(), t = this.getUserFeedbackSubmitUrl(), n = 0; n < e.document.scripts.length; n++) {
                                if (e.document.scripts[n].src === t) return !0
                            }
                            return !1
                        }, i.prototype.getUserFeedbackSubmitUrl = function() {
                            return (0, e.getUserFeedbackScriptUrl)(this.getVersion())
                        }, i.prototype.__buildPayload = function(e) {
                            var n, r = {
                                HTTP_USER_AGENT: void 0,
                                HTTP_REFERER: void 0,
                                HTTP_COOKIE: void 0
                            };
                            "undefined" != typeof navigator && navigator.userAgent && (r.HTTP_USER_AGENT = navigator.userAgent), "undefined" != typeof document && document.referrer.match(/\S/) && (r.HTTP_REFERER = document.referrer), (n = "string" == typeof e.cookies ? (0, c.decodeCookie)(e.cookies) : e.cookies) && (r.HTTP_COOKIE = (0, c.encodeCookie)(h(n, this.config.filters)));
                            var o = t.prototype.__buildPayload.call(this, e);
                            return o.request.cgi_data = g(r, o.request.cgi_data), o
                        }, i.prototype.__wrap = function(e, t) {
                            void 0 === t && (t = {});
                            var n = e;
                            t || (t = {});
                            try {
                                if ("function" != typeof n) return n;
                                if (!y(n)) return n;
                                if (!n.___hb) {
                                    var r = this;
                                    n.___hb = function() {
                                        if (!c.preferCatch) return n.apply(this, arguments);
                                        try {
                                            return n.apply(this, arguments)
                                        } catch (e) {
                                            if (r.__lastWrapErr === e) throw e;
                                            throw r.__lastWrapErr = e, (0, l.ignoreNextOnError)(), r.addBreadcrumb(t.component ? "".concat(t.component, ": ").concat(e.name) : e.name, {
                                                category: "error",
                                                metadata: {
                                                    message: e.message,
                                                    name: e.name,
                                                    stack: e.stack
                                                }
                                            }), r.config.enableUncaught && r.notify(e), e
                                        }
                                    }
                                }
                                return n.___hb.___hb = n.___hb, n.___hb
                            } catch (e) {
                                return n
                            }
                        }, i.prototype.__incrementErrorsCount = function() {
                            return this.__errorsSent++
                        }, i.prototype.__exceedsMaxErrors = function() {
                            return this.config.maxErrors && this.__errorsSent >= this.config.maxErrors
                        }, i
                    }(s.Client),
                    k = {
                        name: "@honeybadger-io/js",
                        url: "https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",
                        version: "6.9.1"
                    },
                    x = function() {
                        return "undefined" != typeof navigator ? "Honeybadger JS Browser Client ".concat(k.version, "; ").concat(navigator.userAgent) : "Honeybadger JS Browser Client ".concat(k.version, "; n/a; n/a")
                    },
                    T = new w({
                        __plugins: [(0, l.onError)(), (0, u.default)(), (0, f.default)(), (0, m.default)(), (0, d.default)(), s.Plugins.events()]
                    });
                T.setNotifier(k);
                var E = I;
                Object.defineProperty(e, "Types", {
                    enumerable: !0,
                    get: function() {
                        return E.Types
                    }
                }), e.default = T
            }(C), e(C)
    })),
    function(e, t) {
        "function" == typeof define && define.amd ? define("i18n", (function() {
            return t(e)
        })) : "object" == typeof module && module.exports ? module.exports = t(e) : e.I18n = t(e)
    }(this, (function(e) {
        "use strict";
        var t = e && e.I18n || {},
            n = Array.prototype.slice,
            r = function(e) {
                return ("0" + e.toString()).substr(-2)
            },
            o = function(e, t) {
                return m("round", e, -t).toFixed(t)
            },
            a = function(e) {
                var t = typeof e;
                return "function" === t || "object" === t
            },
            i = function(e) {
                return "function" === typeof e
            },
            s = function(e) {
                return null != e
            },
            c = function(e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
            },
            l = function(e) {
                return "string" == typeof e || "[object String]" === Object.prototype.toString.call(e)
            },
            u = function(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            },
            d = function(e) {
                return !0 === e || !1 === e
            },
            f = function(e) {
                return null === e
            },
            m = function(e, t, n) {
                return void 0 === n || 0 == +n ? Math[e](t) : (t = +t, n = +n, isNaN(t) || "number" != typeof n || n % 1 != 0 ? NaN : (t = t.toString().split("e"), +((t = (t = Math[e](+(t[0] + "e" + (t[1] ? +t[1] - n : -n)))).toString().split("e"))[0] + "e" + (t[1] ? +t[1] + n : n))))
            },
            p = function(e, t) {
                return i(e) ? e(t) : e
            },
            g = function(e, t) {
                var n, r;
                for (n in t) t.hasOwnProperty(n) && (r = t[n], l(r) || u(r) || d(r) || c(r) || f(r) ? e[n] = r : (null == e[n] && (e[n] = {}), g(e[n], r)));
                return e
            },
            h = {
                day_names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                abbr_day_names: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                month_names: [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                abbr_month_names: [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                meridian: ["AM", "PM"]
            },
            y = {
                precision: 3,
                separator: ".",
                delimiter: ",",
                strip_insignificant_zeros: !1
            },
            b = {
                unit: "$",
                precision: 2,
                format: "%u%n",
                sign_first: !0,
                delimiter: ",",
                separator: "."
            },
            v = {
                unit: "%",
                precision: 3,
                format: "%n%u",
                separator: ".",
                delimiter: ""
            },
            _ = [null, "kb", "mb", "gb", "tb"],
            w = {
                defaultLocale: "en",
                locale: "en",
                defaultSeparator: ".",
                placeholder: /(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,
                fallbacks: !1,
                translations: {},
                missingBehaviour: "message",
                missingTranslationPrefix: ""
            };
        return t.reset = function() {
            var e;
            for (e in w) this[e] = w[e]
        }, t.initializeOptions = function() {
            var e;
            for (e in w) s(this[e]) || (this[e] = w[e])
        }, t.initializeOptions(), t.locales = {}, t.locales.get = function(e) {
            var n = this[e] || this[t.locale] || this.default;
            return i(n) && (n = n(e)), !1 === c(n) && (n = [n]), n
        }, t.locales.default = function(e) {
            var n = [],
                r = [];
            return e && n.push(e), !e && t.locale && n.push(t.locale), t.fallbacks && t.defaultLocale && n.push(t.defaultLocale), n.forEach((function(e) {
                var n = e.split("-"),
                    o = null,
                    a = null;
                3 === n.length ? (o = [n[0], n[1]].join("-"), a = n[0]) : 2 === n.length && (o = n[0]), -1 === r.indexOf(e) && r.push(e), t.fallbacks && [o, a].forEach((function(t) {
                    null != t && t !== e && -1 === r.indexOf(t) && r.push(t)
                }))
            })), n.length || n.push("en"), r
        }, t.pluralization = {}, t.pluralization.get = function(e) {
            return this[e] || this[t.locale] || this.default
        }, t.pluralization.default = function(e) {
            switch (e) {
                case 0:
                    return ["zero", "other"];
                case 1:
                    return ["one"];
                default:
                    return ["other"]
            }
        }, t.currentLocale = function() {
            return this.locale || this.defaultLocale
        }, t.isSet = s, t.lookup = function(e, t) {
            t = t || {};
            var n, r, o, a, i = this.locales.get(t.locale).slice();
            for (o = this.getFullScope(e, t); i.length;)
                if (n = i.shift(), r = o.split(t.separator || this.defaultSeparator), a = this.translations[n]) {
                    for (; r.length && null != (a = a[r.shift()]););
                    if (null != a) return a
                }
            if (s(t.defaultValue)) return p(t.defaultValue, e)
        }, t.pluralizationLookupWithoutFallback = function(e, t, n) {
            var r, o, i = this.pluralization.get(t)(e);
            if (n && a(n))
                for (; i.length;)
                    if (r = i.shift(), s(n[r])) {
                        o = n[r];
                        break
                    }
            return o
        }, t.pluralizationLookup = function(e, t, n) {
            n = n || {};
            var r, o, i, c, l = this.locales.get(n.locale).slice();
            for (t = this.getFullScope(t, n); l.length;)
                if (r = l.shift(), o = t.split(n.separator || this.defaultSeparator), i = this.translations[r]) {
                    for (; o.length && (i = i[o.shift()], a(i));) 0 === o.length && (c = this.pluralizationLookupWithoutFallback(e, r, i));
                    if (null != c) break
                }
            return null == c && s(n.defaultValue) && (c = a(n.defaultValue) ? this.pluralizationLookupWithoutFallback(e, n.locale, n.defaultValue) : n.defaultValue, i = n.defaultValue), {
                message: c,
                translations: i
            }
        }, t.meridian = function() {
            var e = this.lookup("time"),
                t = this.lookup("date");
            return e && e.am && e.pm ? [e.am, e.pm] : t && t.meridian ? t.meridian : h.meridian
        }, t.prepareOptions = function() {
            for (var e, t = n.call(arguments), r = {}; t.length;)
                if ("object" == typeof(e = t.shift()))
                    for (var o in e) e.hasOwnProperty(o) && (s(r[o]) || (r[o] = e[o]));
            return r
        }, t.createTranslationOptions = function(e, t) {
            var n = [{
                scope: e
            }];
            return s(t.defaults) && (n = n.concat(t.defaults)), s(t.defaultValue) && n.push({
                message: t.defaultValue
            }), n
        }, t.translate = function(e, t) {
            t = t || {};
            var n, r = this.createTranslationOptions(e, t),
                o = e,
                i = this.prepareOptions(t);
            return delete i.defaultValue, r.some((function(t) {
                if (s(t.scope) ? (o = t.scope,
                        n = this.lookup(o, i)) : s(t.message) && (n = p(t.message, e)), null != n) return !0
            }), this) ? ("string" == typeof n ? n = this.interpolate(n, t) : c(n) ? n = n.map((function(e) {
                return "string" == typeof e ? this.interpolate(e, t) : e
            }), this) : a(n) && s(t.count) && (n = this.pluralize(t.count, o, t)), n) : this.missingTranslation(e, t)
        }, t.interpolate = function(e, t) {
            if (null == e) return e;
            t = t || {};
            var n, r, o, a, i = e.match(this.placeholder);
            if (!i) return e;
            for (; i.length;) o = (n = i.shift()).replace(this.placeholder, "$1"), r = s(t[o]) ? t[o].toString().replace(/\$/gm, "_#$#_") : o in t ? this.nullPlaceholder(n, e, t) : this.missingPlaceholder(n, e, t), a = new RegExp(n.replace(/{/gm, "\\{").replace(/}/gm, "\\}")), e = e.replace(a, r);
            return e.replace(/_#\$#_/g, "$")
        }, t.pluralize = function(e, t, n) {
            var r, o;
            return n = this.prepareOptions({
                count: String(e)
            }, n), void 0 === (o = this.pluralizationLookup(e, t, n)).translations || null == o.translations ? this.missingTranslation(t, n) : void 0 !== o.message && null != o.message ? this.interpolate(o.message, n) : (r = this.pluralization.get(n.locale), this.missingTranslation(t + "." + r(e)[0], n))
        }, t.missingTranslation = function(e, t) {
            if ("guess" === this.missingBehaviour) {
                var n = e.split(".").slice(-1)[0];
                return (this.missingTranslationPrefix.length > 0 ? this.missingTranslationPrefix : "") + n.replace(/_/g, " ").replace(/([a-z])([A-Z])/g, (function(e, t, n) {
                    return t + " " + n.toLowerCase()
                }))
            }
            return '[missing "' + [null != t && null != t.locale ? t.locale : this.currentLocale(), this.getFullScope(e, t)].join(t.separator || this.defaultSeparator) + '" translation]'
        }, t.missingPlaceholder = function(e) {
            return "[missing " + e + " value]"
        }, t.nullPlaceholder = function() {
            return t.missingPlaceholder.apply(t, arguments)
        }, t.toNumber = function(e, t) {
            t = this.prepareOptions(t, this.lookup("number.format"), y);
            var n, r, a = e < 0,
                i = o(Math.abs(e), t.precision).toString().split("."),
                s = [],
                c = t.format || "%n",
                l = a ? "-" : "";
            for (e = i[0], n = i[1]; e.length > 0;) s.unshift(e.substr(Math.max(0, e.length - 3), 3)), e = e.substr(0, e.length - 3);
            return r = s.join(t.delimiter), t.strip_insignificant_zeros && n && (n = n.replace(/0+$/, "")), t.precision > 0 && n && (r += t.separator + n), r = (c = t.sign_first ? "%s" + c : c.replace("%n", "%s%n")).replace("%u", t.unit).replace("%n", r).replace("%s", l)
        }, t.toCurrency = function(e, t) {
            return t = this.prepareOptions(t, this.lookup("number.currency.format", t), this.lookup("number.format", t), b), this.toNumber(e, t)
        }, t.localize = function(e, t, n) {
            switch (n || (n = {}), e) {
                case "currency":
                    return this.toCurrency(t, n);
                case "number":
                    return e = this.lookup("number.format", n), this.toNumber(t, e);
                case "percentage":
                    return this.toPercentage(t, n);
                default:
                    var r;
                    return r = e.match(/^(date|time)/) ? this.toTime(e, t, n) : t.toString(), this.interpolate(r, n)
            }
        }, t.parseDate = function(e) {
            var t, n, r;
            if (null == e) return e;
            if ("object" == typeof e) return e;
            if (t = e.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})([\.,]\d{1,3})?)?(Z|\+00:?00)?/)) {
                for (var o = 1; o <= 6; o++) t[o] = parseInt(t[o], 10) || 0;
                t[2] -= 1, r = t[7] ? 1e3 * ("0" + t[7]) : null, n = t[8] ? new Date(Date.UTC(t[1], t[2], t[3], t[4], t[5], t[6], r)) : new Date(t[1], t[2], t[3], t[4], t[5], t[6], r)
            } else "number" == typeof e ? (n = new Date).setTime(e) : e.match(/([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/) ? (n = new Date).setTime(Date.parse([RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$6, RegExp.$4, RegExp.$5].join(" "))) : (e.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/), (n = new Date).setTime(Date.parse(e)));
            return n
        }, t.strftime = function(e, n, o) {
            o = this.lookup("date", o);
            var a = t.meridian();
            if (o || (o = {}), o = this.prepareOptions(o, h), isNaN(e.getTime())) throw new Error("I18n.strftime() requires a valid date object, but received an invalid date.");
            var i = e.getDay(),
                s = e.getDate(),
                c = e.getFullYear(),
                l = e.getMonth() + 1,
                u = e.getHours(),
                d = u,
                f = u > 11 ? 1 : 0,
                m = e.getSeconds(),
                p = e.getMinutes(),
                g = e.getTimezoneOffset(),
                y = Math.floor(Math.abs(g / 60)),
                b = Math.abs(g) - 60 * y,
                v = (g > 0 ? "-" : "+") + (y.toString().length < 2 ? "0" + y : y) + (b.toString().length < 2 ? "0" + b : b);
            return d > 12 ? d -= 12 : 0 === d && (d = 12), n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = n.replace("%a", o.abbr_day_names[i])).replace("%A", o.day_names[i])).replace("%b", o.abbr_month_names[l])).replace("%B", o.month_names[l])).replace("%d", r(s))).replace("%e", s)).replace("%-d", s)).replace("%H", r(u))).replace("%-H", u)).replace("%k", u)).replace("%I", r(d))).replace("%-I", d)).replace("%l", d)).replace("%m", r(l))).replace("%-m", l)).replace("%M", r(p))).replace("%-M", p)).replace("%p", a[f])).replace("%P", a[f].toLowerCase())).replace("%S", r(m))).replace("%-S", m)).replace("%w", i)).replace("%y", r(c))).replace("%-y", r(c).replace(/^0+/, ""))).replace("%Y", c)).replace("%z", v)).replace("%Z", v)
        }, t.toTime = function(e, t, n) {
            var r = this.parseDate(t),
                o = this.lookup(e, n);
            if (null == r) return r;
            var a = r.toString();
            return a.match(/invalid/i) ? a : o ? this.strftime(r, o, n) : a
        }, t.toPercentage = function(e, t) {
            return t = this.prepareOptions(t, this.lookup("number.percentage.format", t), this.lookup("number.format", t), v), this.toNumber(e, t)
        }, t.toHumanSize = function(e, t) {
            for (var n, r, o, a = 1024, i = e, s = 0; i >= a && s < 4;) i /= a, s += 1;
            return 0 === s ? (o = this.getFullScope("number.human.storage_units.units.byte", t), n = this.t(o, {
                count: i
            }), r = 0) : (o = this.getFullScope("number.human.storage_units.units." + _[s], t), n = this.t(o), r = i - Math.floor(i) == 0 ? 0 : 1), t = this.prepareOptions(t, {
                unit: n,
                precision: r,
                format: "%n%u",
                delimiter: ""
            }), this.toNumber(i, t)
        }, t.getFullScope = function(e, t) {
            return t = t || {}, c(e) && (e = e.join(t.separator || this.defaultSeparator)), t.scope && (e = [t.scope, e].join(t.separator || this.defaultSeparator)), e
        }, t.extend = function(e, t) {
            return void 0 === e && void 0 === t ? {} : g(e, t)
        }, t.t = t.translate.bind(t), t.l = t.localize.bind(t), t.p = t.pluralize.bind(t), t
    })),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).ahoy = t()
    }(this, (function() {
        "use strict";

        function e() {
            return I.urlPrefix + I.visitsUrl
        }

        function t() {
            return I.urlPrefix + I.eventsUrl
        }

        function n(e) {
            return 0 === Object.keys(e).length
        }

        function r() {
            return (I.useBeacon || I.trackNow) && n(I.headers) && P && void 0 !== window.navigator.sendBeacon && !I.withCredentials
        }

        function o(e) {
            var t = new FormData;
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.append(n, e[n]);
            return t
        }

        function a(e, t, n) {
            C.set(e, t, n, I.cookieDomain || I.domain)
        }

        function i(e) {
            return C.get(e)
        }

        function s(e) {
            C.set(e, "", -1)
        }

        function c(e) {
            i("ahoy_debug") && window.console.log(e)
        }

        function l() {
            for (var e; e = M.shift();) e();
            j = !0
        }

        function u(e, t) {
            var n = e.matches || e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
            return n ? n.apply(e, [t]) ? e : e.parentElement ? u(e.parentElement, t) : null : (c("Unable to match"), null)
        }

        function d(e, t, n) {
            document.addEventListener(e, (function(e) {
                var r = u(e.target, t);
                if (r) {
                    var o = S(r, "data-ahoy-skip");
                    if (null !== o && "false" !== o) return;
                    n.call(r, e)
                }
            }))
        }

        function f(e) {
            "interactive" === document.readyState || "complete" === document.readyState ? setTimeout(e, 0) : document.addEventListener("DOMContentLoaded", e)
        }

        function m() {
            return window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }))
        }

        function p() {
            I.cookies && P && a("ahoy_events", JSON.stringify(H), 1)
        }

        function g() {
            var e = document.querySelector("meta[name=csrf-token]");
            return e && e.content
        }

        function h() {
            var e = document.querySelector("meta[name=csrf-param]");
            return e && e.content
        }

        function y(e) {
            var t = g();
            t && e.setRequestHeader("X-CSRF-Token", t)
        }

        function b(e, t, n) {
            if (P)
                if (B && B.ajax) B.ajax({
                    type: "POST",
                    url: e,
                    data: JSON.stringify(t),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    beforeSend: y,
                    success: n,
                    headers: I.headers,
                    xhrFields: {
                        withCredentials: I.withCredentials
                    }
                });
                else {
                    var r = new XMLHttpRequest;
                    for (var o in r.open("POST", e, !0), r.withCredentials = I.withCredentials, r.setRequestHeader("Content-Type", "application/json"), I.headers) Object.prototype.hasOwnProperty.call(I.headers, o) && r.setRequestHeader(o, I.headers[o]);
                    r.onload = function() {
                        200 === r.status && n()
                    }, y(r), r.send(JSON.stringify(t))
                }
        }

        function v(e) {
            var t = {
                events: [e]
            };
            return I.cookies && (t.visit_token = e.visit_token, t.visitor_token = e.visitor_token), delete e.visit_token, delete e.visitor_token, t
        }

        function _(e) {
            O.ready((function() {
                b(t(), v(e), (function() {
                    for (var t = 0; t < H.length; t++)
                        if (H[t].id === e.id) {
                            H.splice(t, 1);
                            break
                        }
                    p()
                }))
            }))
        }

        function w(e) {
            O.ready((function() {
                var n = v(e),
                    r = h(),
                    a = g();
                r && a && (n[r] = a), n.events_json = JSON.stringify(n.events), delete n.events, window.navigator.sendBeacon(t(), o(n))
            }))
        }

        function k() {
            return I.page || window.location.pathname
        }

        function x(e) {
            return e && e.length > 0 ? e : null
        }

        function T(e) {
            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && null === e[t] && delete e[t];
            return e
        }

        function E() {
            return T({
                tag: this.tagName.toLowerCase(),
                id: x(this.id),
                class: x(this.className),
                page: k(),
                section: S(this, "data-section")
            })
        }

        function S(e, t) {
            for (; e && e !== document; e = e.parentNode)
                if (e.hasAttribute(t)) return e.getAttribute(t);
            return null
        }

        function L() {
            if (j = !1, A = O.getVisitId(), $ = O.getVisitorId(), N = i("ahoy_track"), !1 === I.cookies || !1 === I.trackVisits) c("Visit tracking disabled"), l();
            else if (A && $ && !N) c("Active visit"), l();
            else if (A || a("ahoy_visit", A = m(), I.visitDuration), i("ahoy_visit")) {
                c("Visit started"), $ || a("ahoy_visitor", $ = m(), I.visitorDuration);
                var t = {
                    visit_token: A,
                    visitor_token: $,
                    platform: I.platform,
                    landing_page: window.location.href,
                    screen_width: window.screen.width,
                    screen_height: window.screen.height,
                    js: !0
                };
                for (var n in document.referrer.length > 0 && (t.referrer = document.referrer), I.visitParams) Object.prototype.hasOwnProperty.call(I.visitParams, n) && (t[n] = I.visitParams[n]);
                c(t), b(e(), t, (function() {
                    s("ahoy_track"), l()
                }))
            } else c("Cookies disabled"), l()
        }
        var C = {
                set: function(e, t, n, r) {
                    var o = "",
                        a = "";
                    if (n) {
                        var i = new Date;
                        i.setTime(i.getTime() + 60 * n * 1e3), o = "; expires=" + i.toGMTString()
                    }
                    r && (a = "; domain=" + r), document.cookie = e + "=" + escape(t) + o + a + "; path=/; samesite=lax"
                },
                get: function(e) {
                    var t, n, r = e + "=",
                        o = document.cookie.split(";");
                    for (t = 0; t < o.length; t++) {
                        for (n = o[t];
                            " " === n.charAt(0);) n = n.substring(1, n.length);
                        if (0 === n.indexOf(r)) return unescape(n.substring(r.length, n.length))
                    }
                    return null
                }
            },
            I = {
                urlPrefix: "",
                visitsUrl: "/ahoy/visits",
                eventsUrl: "/ahoy/events",
                page: null,
                platform: "Web",
                useBeacon: !0,
                startOnReady: !0,
                trackVisits: !0,
                cookies: !0,
                cookieDomain: null,
                headers: {},
                visitParams: {},
                withCredentials: !1,
                visitDuration: 240,
                visitorDuration: 1051200
            },
            O = window.ahoy || window.Ahoy || {};
        O.configure = function(e) {
            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (I[t] = e[t])
        }, O.configure(O);
        var A, $, N, B = window.jQuery || window.Zepto || window.$,
            j = !1,
            M = [],
            P = "undefined" != typeof JSON && void 0 !== JSON.stringify,
            H = [];
        O.ready = function(e) {
            j ? e() : M.push(e)
        }, O.getVisitId = O.getVisitToken = function() {
            return i("ahoy_visit")
        }, O.getVisitorId = O.getVisitorToken = function() {
            return i("ahoy_visitor")
        }, O.reset = function() {
            return s("ahoy_visit"), s("ahoy_visitor"), s("ahoy_events"), s("ahoy_track"), !0
        }, O.debug = function(e) {
            return !1 === e ? s("ahoy_debug") : a("ahoy_debug", "t", 525600), !0
        }, O.track = function(e, t) {
            var n = {
                name: e,
                properties: t || {},
                time: (new Date).getTime() / 1e3,
                id: m(),
                js: !0
            };
            return O.ready((function() {
                I.cookies && !O.getVisitId() && L(), O.ready((function() {
                    c(n), n.visit_token = O.getVisitId(), n.visitor_token = O.getVisitorId(), r() ? w(n) : (H.push(n), p(), setTimeout((function() {
                        _(n)
                    }), 1e3))
                }))
            })), !0
        }, O.trackView = function(e) {
            var t = {
                url: window.location.href,
                title: document.title,
                page: k()
            };
            if (e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            O.track("$view", t)
        }, O.trackClicks = function(e) {
            if (void 0 === e) throw new Error("Missing selector");
            d("click", e, (function(e) {
                var t = E.call(this, e);
                t.text = "input" === t.tag ? this.value : (this.textContent || this.innerText || this.innerHTML).replace(/[\s\r\n]+/g, " ").trim(), t.href = this.href, O.track("$click", t)
            }))
        }, O.trackSubmits = function(e) {
            if (void 0 === e) throw new Error("Missing selector");
            d("submit", e, (function(e) {
                var t = E.call(this, e);
                O.track("$submit", t)
            }))
        }, O.trackChanges = function(e) {
            if (c("trackChanges is deprecated and will be removed in 0.5.0"), void 0 === e) throw new Error("Missing selector");
            d("change", e, (function(e) {
                var t = E.call(this, e);
                O.track("$change", t)
            }))
        };
        try {
            H = JSON.parse(i("ahoy_events") || "[]")
        } catch (e) {}
        for (var D = 0; D < H.length; D++) _(H[D]);
        return O.start = function() {
            L(), O.start = function() {}
        }, f((function() {
            I.startOnReady && O.start()
        })), O
    })), I18n.defaultLocale = "en", I18n.locale = document.body.dataset.locale, I18n.translations = JSON.parse(document.getElementById("i18n-translations").dataset.translations);
var instantClick, InstantClick = instantClick = function(e, t, n) {
    function r(e) {
        var t = e.indexOf("#");
        return t < 0 ? e : e.substr(0, t)
    }

    function o(e) {
        for (; e && "A" != e.nodeName;) e = e.parentNode;
        return e
    }

    function a(e) {
        do {
            if (!e.hasAttribute) break;
            if (e.hasAttribute("data-instant")) return !1;
            if (e.hasAttribute("data-no-instant")) return !0
        } while (e = e.parentNode);
        return !1
    }

    function i(e) {
        var n = t.protocol + "//" + t.host;
        return !(e.target || e.hasAttribute("download") || 0 != e.href.indexOf(n + "/") || e.href.indexOf("#") > -1 && r(e.href) == C || a(e))
    }

    function s(e, t, n, r) {
        for (var o = !1, a = 0; a < q[e].length; a++)
            if ("receive" == e) {
                var i = q[e][a](t, n, r);
                i && ("body" in i && (n = i.body), "title" in i && (r = i.title), o = i)
            } else q[e][a](t, n, r);
        return o
    }

    function c(t, n, o, a, i) {
        var c = e.getElementById("page-content"),
            l = e.getElementById("member-menu-button"),
            u = e.getElementById("search-typeahead");
        if (l && l.classList.remove("showing"), u && (e.getElementById("search-input").value = "", u.classList.add("hidden")), e.body.replaceChild(n, c), e.getElementById("navigation-progress").classList.remove("showing"), o) {
            const n = e.getElementById("route-change-target");
            n && n.focus(), e.getElementById("page-route-change").textContent = t, history.pushState(null, null, o.replace("?samepage=true", "").replace("&samepage=true", ""));
            var d = o.indexOf("#"),
                f = d > -1 && (e.getElementById(o.substr(d + 1)) || e.querySelector(`[name=${o.substr(d+1)}].anchor`)),
                m = 0,
                p = o.indexOf("samepage=true") > -1;
            if (f)
                for (; f.offsetParent;) m += f.offsetTop, f = f.offsetParent;
            p || scrollTo(0, m), C = r(o)
        } else scrollTo(0, a);
        j && e.title == t ? e.title = t + String.fromCharCode(160) : e.title = t, _(), i ? s("restore") : s("change", !1)
    }

    function l() {
        R = !1, U = !1
    }

    function u(e) {
        return e.replace(/<noscript[\s\S]+?<\/noscript>/gi, "")
    }

    function d(e) {
        if (!(A > +new Date - 500)) {
            var t = o(e.target);
            t && i(t) && w(t.href)
        }
    }

    function f(e) {
        if (!(A > +new Date - 500)) {
            var t = o(e.target);
            t && i(t) && (t.addEventListener("mouseout", h), B ? (I = t.href, O = setTimeout(w, B)) : w(t.href), getImageForLink(t))
        }
    }

    function m(e) {
        A = +new Date;
        var t = o(e.target);
        t && i(t) && (N ? t.removeEventListener("mousedown", d) : t.removeEventListener("mouseover", f), w(t.href), getImageForLink(t))
    }

    function p(e) {
        var t = o(e.target);
        t && i(t) && (B ? (I = t.href, O = setTimeout(w, B)) : w(t.href), getImageForLink(t))
    }

    function g(e) {
        try {
            var t = o(e.target);
            if (!t || !i(t)) return;
            if (e.which > 1 || e.metaKey || e.ctrlKey) return;
            T(t.href), e.preventDefault()
        } catch (e) {
            console.log(e)
        }
    }

    function h() {
        if (O) return clearTimeout(O), void(O = !1);
        R && !U && ($.abort(), l())
    }

    function y() {
        b($, P)
    }

    function b(t, n) {
        if (!(t.readyState < 4) && 0 != t.status) {
            if (z.ready = +new Date - z.start, e.getElementById("page-content") && 200 === t.status && t.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)) {
                var o = e.implementation.createHTMLDocument("");
                o.documentElement.innerHTML = u(t.responseText);
                var a = o.title,
                    i = o.getElementById("page-content"),
                    c = s("receive", n, i, a);
                c && ("body" in c && (i = c.body), "title" in c && (a = c.title)), D[n] = {
                    body: i,
                    title: a
                };
                r(n);
                for (var l, d, f = o.head.children, m = 0, p = 0; p < f.length; p++)
                    if ((l = f[p]).hasAttribute("data-instant-track")) {
                        d = l.getAttribute("href") || l.getAttribute("src") || l.innerHTML;
                        for (var g = 0; g < F.length; g++) F[g] == d && m++
                    }
                m != F.length && (H = !0)
            } else H = !0;
            U && P === n && (U = !1, T(P))
        }
    }

    function v() {
        var n = r(t.href);
        n != C && (n in M ? (M[C] = {
            body: e.getElementById("page-content"),
            title: e.title,
            scrollY: pageYOffset
        }, C = n, c(M[n].title, M[n].body, !1, M[n].scrollY, !0)) : t.href = t.href)
    }

    function _(t) {
        if (e.body && (e.body.addEventListener("touchstart", m, !0), e.body.addEventListener("focus", p, !0), N ? e.body.addEventListener("mousedown", d, !0) : e.body.addEventListener("mouseover", f, !0), e.body.addEventListener("click", g, !0)), !t) {
            var n, r, o, a, i, s = e.body.getElementsByTagName("script"),
                c = [];
            for (i = 0; i < s.length; i++) "gist-ltag" !== s[i].id && c.push(s[i]);
            for (i = 0; i < c.length; i++)
                if ((n = c[i]) && !n.hasAttribute("data-no-instant")) {
                    r = e.createElement("script");
                    for (var l = 0; l < n.attributes.length; l++) r.setAttribute(n.attributes[l].name, n.attributes[l].value);
                    r.textContent = n.textContent, o = n.parentNode, a = n.nextSibling, o.removeChild(n), o.insertBefore(r, a)
                }
        }
    }

    function w(e, t) {
        if (!(!N && "display" in z && +new Date - (z.start + z.display) < 100) && (O && (clearTimeout(O), O = !1), e || (e = I), !R || e != P && !U)) {
            if (R = !0, U = !1, H = !1, z = {
                    start: +new Date
                }, -1 == e.indexOf("?")) var n = e + "?i=i";
            else n = e + "&i=i";
            k(), s("fetch"), D[e] || ("force" === t ? x(e, (function() {
                b(this, e)
            })) : (P = e, $.open("GET", n), $.send()))
        }
    }

    function k(e) {
        (Object.keys(D).length > 13 || "force" == e) && (D = {})
    }

    function x(e, t) {
        var n = new XMLHttpRequest;
        if (-1 == e.indexOf("?")) var r = e + "?i=i";
        else r = e + "&i=i";
        n.open("GET", r, !0), n.onreadystatechange = function() {
            4 == n.readyState && "function" == typeof t && t.apply(n)
        }, n.send()
    }

    function T(n) {
        if (P = n, D[n]) var r = D[n].body,
            o = D[n].title;
        else e.getElementById("navigation-progress").classList.add("showing");
        if ("display" in z || (z.display = +new Date - z.start), O || !R) return O && P && P != n ? void(t.href = n) : (w(n), s("wait"), void(U = !0));
        if (U) t.href = n;
        else if (H) t.href = P;
        else {
            if (!r) return s("wait"), void(U = !0);
            M[C] = {
                body: e.getElementById("page-content"),
                title: e.title,
                scrollY: pageYOffset
            }, l(), c(o, r, P)
        }
    }

    function E(n) {
        if (!C)
            if (V) {
                "mousedown" == n ? N = !0 : "number" == typeof n && (B = n), C = r(t.href), M[C] = {
                    body: e.getElementById("page-content"),
                    title: e.title,
                    scrollY: pageYOffset
                };
                for (var o, a, i = e.head.children, c = 0; c < i.length; c++)(o = i[c]).hasAttribute("data-instant-track") && (a = o.getAttribute("href") || o.getAttribute("src") || o.innerHTML, F.push(a));
                ($ = new XMLHttpRequest).addEventListener("readystatechange", y), _(!0), s("change", !0), addEventListener("popstate", v), L()
            } else s("change", !0)
    }

    function S(e, t) {
        q[e].push(t)
    }

    function L() {
        if ("ontouchstart" in e.documentElement) {
            var t = e.createElement("script");
            t.src = "https://dev.to/assets/lib/pulltorefresh-311a736a13e4e56a95f8f8f7d45856c1a0bc7d6677eaf5dd3af867ae760cd55d.js", e.head.appendChild(t);
            var n = setInterval((function() {
                if ("undefined" != typeof PullToRefresh) {
                    PullToRefresh.init({
                        mainElement: "body",
                        passive: !0,
                        onRefresh: function() {
                            window.location.reload()
                        }
                    });
                    clearInterval(n)
                }
            }), 1)
        }
    }
    var C, I, O, A, $, N, B, j = n.indexOf(" CriOS/") > -1,
        M = {},
        P = !1,
        H = !1,
        D = {},
        z = {},
        R = !1,
        U = !1,
        F = [],
        q = {
            fetch: [],
            receive: [],
            wait: [],
            change: [],
            restore: []
        },
        V = "pushState" in history && (!n.match("Android") || n.match("Chrome/") || n.match("Firefox/")) && "file:" != t.protocol;
    return {
        supported: V,
        init: E,
        isPreloadable: i,
        preload: w,
        removeExpiredKeys: k,
        display: T,
        on: S
    }
}(document, location, navigator.userAgent);
Honeybadger.configure({
    apiKey: document.body.dataset.honeybadgerKey,
    environment: "production",
    revision: document.body.dataset.releaseFootprint
}), Honeybadger.beforeNotify((function(e) {
    if (!e || "string" != typeof e.message) return !0;
    return ![/ResizeObserver/i, /MetaMask/i, /MtPopUpList/i, /ChunkLoadError/i].some((t => t.test(e.message)))
})), ahoy.configure({
    cookies: !1,
    trackVisits: !1
}), initializeBaseApp();