(function (a, b) {
    function n(a) {
        if (!c.options.enableKeys) return;
        (a ? A : B)(document, "keydown", o)
    }
    function o(a) {
        if (a.metaKey || a.shiftKey || a.altKey || a.ctrlKey) return;
        var b;
        switch (a.keyCode) {
        case 81:
        case 88:
        case 27:
            b = c.close
        }
        b && (a.preventDefault(), b())
    }
    function p(a) {
        n(!1);
        var b = c.getCurrent(),
            d = b.player;
        if (typeof c[d] != "function") throw "unknown player " + d;
        a && (c.player.remove(), c.revertOptions(), c.applyOptions(b.options || {})), c.player = new c[d](b, c.playerId), c.skin.onLoad(a, q)
    }
    function q() {
        if (!i) return;
        if (typeof c.player.ready != "undefined") var a = setInterval(function () {
            i ? c.player.ready && (clearInterval(a), a = null, c.skin.onReady(r)) : (clearInterval(a), a = null)
        }, 10);
        else c.skin.onReady(r)
    }
    function r() {
        if (!i) return;
        c.player.append(c.skin.body, c.dimensions), c.skin.onShow(s)
    }
    function s() {
        if (!i) return;
        c.player.onLoad && c.player.onLoad(), c.options.onFinish(c.getCurrent()), n(!0)
    }
    function t() {
        return (new Date).getTime()
    }
    function u(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }
    function v(a, b) {
        var c = 0,
            d = a.length;
        for (var e = a[0]; c < d && b.call(e, c, e) !== !1; e = a[++c]);
    }
    function w() {}
    function x(a) {
        return document.getElementById(a)
    }
    function y(a) {
        a.parentNode.removeChild(a)
    }
    function z(a) {
        var b = a.target ? a.target : a.srcElement;
        return b.nodeType == 3 ? b.parentNode : b
    }
    function A(b, c, d) {
        if (b.addEventListener) b.addEventListener(c, d, !1);
        else {
            if (b.nodeType === 3 || b.nodeType === 8) return;
            b.setInterval && b !== a && !b.frameElement && (b = a), d.__guid || (d.__guid = A.guid++), b.events || (b.events = {});
            var e = b.events[c];
            e || (e = b.events[c] = {}, b["on" + c] && (e[0] = b["on" + c])), e[d.__guid] = d, b["on" + c] = A.handleEvent
        }
    }
    function B(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.events && a.events[b] && delete a.events[b][c.__guid]
    }
    function E() {
        if (C) return;
        try {
            document.documentElement.doScroll("left")
        } catch (a) {
            setTimeout(E, 1);
            return
        }
        c.load()
    }
    function F() {
        if (document.readyState === "complete") return c.load();
        if (document.addEventListener) document.addEventListener("DOMContentLoaded", D, !1), a.addEventListener("load", c.load, !1);
        else if (document.attachEvent) {
            document.attachEvent("onreadystatechange", D), a.attachEvent("onload", c.load);
            var b = !1;
            try {
                b = a.frameElement === null
            } catch (d) {}
            document.documentElement.doScroll && b && E()
        }
    }
    function J(a) {
        c.open(this), c.gallery.length && a.preventDefault()
    }
    function Q(a, b, d, e, f) {
        var g = b == "opacity",
            h = g ? c.setOpacity : function (a, c) {
                a.style[b] = "" + c + "px"
            };
        if (e == 0 || !g && !c.options.animate || g && !c.options.animateFade) {
            h(a, d), f && f();
            return
        }
        var i = parseFloat(c.getStyle(a, b)) || 0,
            j = d - i;
        if (j == 0) {
            f && f();
            return
        }
        e *= 1e3;
        var k = t(),
            l = c.ease,
            m = k + e,
            n, o = setInterval(function () {
                n = t(), n >= m ? (clearInterval(o), o = null, h(a, d), f && f()) : h(a, i + l((n - k) / e) * j)
            }, 10)
    }
    function R() {
        M.style.height = c.getWindowSize("Height") + "px", M.style.width = c.getWindowSize("Width") + "px"
    }
    function S() {
        M.style.top = document.documentElement.scrollTop + "px", M.style.left = document.documentElement.scrollLeft + "px"
    }
    function T(a) {
        a ? v(L, function (a, b) {
            b[0].style.visibility = b[1] || ""
        }) : (L = [], v(c.options.troubleElements, function (a, b) {
            v(document.getElementsByTagName(b), function (a, b) {
                L.push([b, b.style.visibility]), b.style.visibility = "hidden"
            })
        }))
    }
    function U(a, b) {
        var d = x("rb-loading"),
            e = c.getCurrent().player,
            f = e == "img" || e == "html";
        if (a) {
            c.setOpacity(d, 0), d.style.display = "block";
            var g = function () {
                c.clearOpacity(d), b && b()
            };
            f ? Q(d, "opacity", 1, c.options.fadeDuration, g) : g()
        } else {
            var g = function () {
                d.style.display = "none", c.clearOpacity(d), b && b()
            };
            f ? Q(d, "opacity", 0, c.options.fadeDuration, g) : g()
        }
    }
    function V(a, b, d, e) {
        var f = x("rb-wrapper-inner"),
            g = d ? c.options.resizeDuration : 0;
        Q(O, "top", b, g), Q(f, "height", a, g, e)
    }
    function W(a, b, d, e) {
        var f = d ? c.options.resizeDuration : 0;
        Q(O, "left", b, f), Q(O, "width", a, f, e)
    }
    function X(a, b) {
        var d = x("rb-body-inner"),
            a = parseInt(a),
            b = parseInt(b),
            e = O.offsetHeight - d.offsetHeight,
            f = O.offsetWidth - d.offsetWidth,
            g = N.offsetHeight,
            h = N.offsetWidth,
            i = parseInt(c.options.viewportPadding) || 20,
            j = c.player && c.options.handleOversize != "drag";
        return c.setDimensions(a, b, g, h, e, f, i, j)
    }
    var c = {}, d = /^ringbox\[(.*?)\]/i,
        e = /\s*([a-z_]*?)\s*=\s*(.+)\s*/,
        f = /[0-9a-z]+$/i,
        g = /(.+\/)button\.js/i,
        h = document.documentElement,
        i = !1,
        j = !1,
        k = {}, l = "opacity" in h.style && typeof h.style.opacity == "string",
        m = !1;
    (function () {
        var a = document.createElement("div");
        a.style.position = "fixed", a.style.margin = 0, a.style.top = "20px", h.appendChild(a, h.firstChild), m = a.offsetTop == 20, h.removeChild(a)
    })(), c.current = -1, c.dimensions = null, c.ease = function (a) {
        return 1 + Math.pow(a - 1, 3)
    }, c.gallery = [], c.onReady = w, c.path = null, c.player = null, c.playerId = "rb-player", c.options = {
        animate: !0,
        animateFade: !0,
        enableKeys: !0,
        handleOversize: "resize",
        onClose: w,
        onFinish: w,
        onOpen: w,
        skipSetup: !1,
        viewportPadding: 20
    }, c.getCurrent = function () {
        return c.current > -1 ? c.gallery[c.current] : null
    }, c.applyOptions = function (a) {
        k = u({}, c.options), u(c.options, a)
    }, c.revertOptions = function () {
        u(c.options, k)
    }, c.init = function (a, b) {
        if (j) return;
        j = !0, c.skin.options && u(c.options, c.skin.options), a && u(c.options, a);
        if (!c.path) {
            var d, e = document.getElementsByTagName("script");
            for (var f = 0, h = e.length; f < h; ++f) {
                d = g.exec(e[f].src);
                if (d) {
                    c.path = d[1];
                    break
                }
            }
        }
        b && (c.onReady = b), F()
    }, c.open = function (a) {
        if (i) return;
        var b = c.makeGallery(a);
        c.gallery = b[0], c.current = b[1], a = c.getCurrent();
        if (a == null) return;
        c.applyOptions(a.options || {});
        if (c.gallery.length) {
            a = c.getCurrent();
            if (c.options.onOpen(a) === !1) return;
            i = !0, c.skin.onOpen(a, p)
        }
    }, c.close = function () {
        if (!i) return;
        i = !1, c.player && (c.player.remove(), c.player = null), n(!1), c.options.onClose(c.getCurrent()), c.skin.onClose(), c.revertOptions()
    }, c.setDimensions = function (a, b, d, e, f, g, h, i) {
        var j = a,
            k = b,
            l = 2 * h + f;
        a + l > d && (a = d - l);
        var m = 2 * h + g;
        b + m > e && (b = e - m);
        var n = (j - a) / j,
            o = (k - b) / k,
            p = n > 0 || o > 0;
        return i && p && (n > o ? b = Math.round(k / j * a) : o > n && (a = Math.round(j / k * b))), c.dimensions = {
            height: a + f,
            width: b + g,
            innerHeight: a,
            innerWidth: b,
            top: Math.floor((d - (a + l)) / 2 + h),
            left: Math.floor((e - (b + m)) / 2 + h),
            oversized: p
        }, c.dimensions
    }, c.makeGallery = function (a) {
        var b = [],
            d = -1;
        typeof a == "string" && (a = [a]);
        if (typeof a.length == "number") v(a, function (a, c) {
            c.content ? b[a] = c : b[a] = {
                content: c
            }
        }), d = 0;
        else {
            if (a.tagName) {
                var e = c.getCache(a);
                a = e ? e : c.makeObject(a)
            }
            if (a.gallery) {
                b = [];
                var f;
                for (var g in c.cache) f = c.cache[g], f.gallery && f.gallery == a.gallery && (d == -1 && f.content == a.content && (d = b.length), b.push(f));
                d == -1 && (b.unshift(a), d = 0)
            } else b = [a], d = 0
        }
        return v(b, function (a, c) {
            b[a] = u({}, c)
        }), [b, d]
    }, c.makeObject = function (a, b) {
        var f = {
            content: a.href,
            title: a.getAttribute("title") || "",
            link: a
        };
        b ? (b = u({}, b), v(["player", "title", "height", "width", "gallery"], function (a, c) {
            typeof b[c] != "undefined" && (f[c] = b[c], delete b[c])
        }), f.options = b) : f.options = {}, f.player || (f.player = c.getPlayer(f.content));
        var g = a.getAttribute("rel");
        if (g) {
            var h = g.match(d);
            h && (f.gallery = escape(h[1])), v(g.split(";"), function (a, b) {
                h = b.match(e), h && (f[h[1]] = h[2])
            })
        }
        return f
    }, c.getPlayer = function (a) {
        return "iframe"
    }, c.getStyle = function () {
        var a = /opacity=([^)]*)/,
            b = document.defaultView && document.defaultView.getComputedStyle;
        return function (c, d) {
            var e;
            if (!l && d == "opacity" && c.currentStyle) return e = a.test(c.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "" : "", e === "" ? "1" : e;
            if (b) {
                var f = b(c, null);
                f && (e = f[d]), d == "opacity" && e == "" && (e = "1")
            } else e = c.currentStyle[d];
            return e
        }
    }(), c.appendHTML = function (a, b) {
        if (a.insertAdjacentHTML) a.insertAdjacentHTML("BeforeEnd", b);
        else if (a.lastChild) {
            var c = a.ownerDocument.createRange();
            c.setStartAfter(a.lastChild);
            var d = c.createContextualFragment(b);
            a.appendChild(d)
        } else a.innerHTML = b
    }, c.getWindowSize = function (a) {
        return document.compatMode === "CSS1Compat" ? document.documentElement["client" + a] : document.body["client" + a]
    }, c.setOpacity = function (a, b) {
        var c = a.style;
        l ? c.opacity = b == 1 ? "" : b : (c.zoom = 1, b == 1 ? typeof c.filter == "string" && /alpha/i.test(c.filter) && (c.filter = c.filter.replace(/\s*[\w\.]*alpha\([^\)]*\);?/gi, "")) : c.filter = (c.filter || "").replace(/\s*[\w\.]*alpha\([^\)]*\)/gi, "") + " alpha(opacity=" + b * 100 + ")")
    }, c.clearOpacity = function (a) {
        c.setOpacity(a, 1)
    }, A.guid = 1, A.handleEvent = function (b) {
        var c = !0;
        b = b || A.fixEvent(((this.ownerDocument || this.document || this).parentWindow || a).event);
        var d = this.events[b.type];
        for (var e in d) this.__handleEvent = d[e], this.__handleEvent(b) === !1 && (c = !1);
        return c
    }, A.preventDefault = function () {
        this.returnValue = !1
    }, A.stopPropagation = function () {
        this.cancelBubble = !0
    }, A.fixEvent = function (a) {
        return a.preventDefault = A.preventDefault, a.stopPropagation = A.stopPropagation, a.keyCode = a.which, a
    };
    var C = !1,
        D;
    document.addEventListener ? D = function () {
        document.removeEventListener("DOMContentLoaded", D, !1), c.load()
    } : document.attachEvent && (D = function () {
        document.readyState === "complete" && (document.detachEvent("onreadystatechange", D), c.load())
    }), c.load = function () {
        if (C) return;
        if (!document.body) return setTimeout(c.load, 13);
        C = !0, c.onReady(), c.options.skipSetup || c.setup(), c.skin.init()
    };
    var G = /^ringbox/i,
        H = "ringboxCacheKey",
        I = 1;
    c.cache = {}, c.select = function (a) {
        var b = [];
        if (!a) {
            var c;
            v(document.getElementsByTagName("a"), function (a, d) {
                c = d.getAttribute("rel"), c && G.test(c) && b.push(d)
            })
        } else {
            var d = typeof a;
            if (d !== "object" && d !== "function" || !a.length) b.push(a);
            else for (var e = 0; e < a.length; ++e) b[e] = a[e]
        }
        return b
    }, c.setup = function (a, b) {
        v(c.select(a), function (a, d) {
            c.addCache(d, b)
        })
    }, c.teardown = function (a) {
        v(c.select(a), function (a, b) {
            c.removeCache(b)
        })
    }, c.addCache = function (a, d) {
        var e = a[H];
        e == b && (e = I++, a[H] = e, A(a, "click", J)), c.cache[e] = c.makeObject(a, d)
    }, c.removeCache = function (a) {
        B(a, "click", J), delete c.cache[a[H]], a[H] = null
    }, c.getCache = function (a) {
        var b = a[H];
        return b in c.cache && c.cache[b]
    }, c.clearCache = function () {
        for (var a in c.cache) c.removeCache(c.cache[a].link);
        c.cache = {}
    }, c.iframe = function (a, b) {
        this.obj = a, this.id = b;
        var c = x("rb-overlay");
        this.height = a.height ? parseInt(a.height, 10) : c.offsetHeight, this.width = a.width ? parseInt(a.width, 10) : c.offsetWidth
    }, c.iframe.prototype = {
        append: function (a, b) {
            var c = '<iframe id="' + this.id + '" name="' + this.id + '" height="100%" ' + 'width="100%" frameborder="0" marginwidth="0" marginheight="0" ' + 'style="visibility:hidden" onload="this.style.visibility=\'visible\'" ' + 'scrolling="no" allowtransparency="true" src="about:blank"></iframe>';
            a.innerHTML = c
        },
        remove: function () {
            var b = x(this.id);
            if (b) {
                y(b);
                try {
                    delete a.frames[this.id]
                } catch (c) {}
            }
        },
        onLoad: function () {
            var b = a.frames[this.id];
            b.location.href = this.obj.content
        }
    };
    var K = !1,
        L = [],
        M, N, O, P = !0,
        Y = {};
    Y.markup = '<div id="rb-container" style="position:fixed;margin:0;padding:0;top:0;left:0;z-index:9999;text-align:left;visibility:hidden;display:none;"><div id="rb-overlay" style="position:relative;height:100%;width:100%"></div><div id="rb-wrapper" style="position:absolute;visibility:hidden;width:100px;"><div id="rb-wrapper-inner" style="position:relative;overflow:hidden;height:100px;"><div id="rb-body" style="position:relative;height:100%;"><div id="rb-body-inner" style="position:absolute;height:100%;width:100%;"></div><div id="rb-loading" style="position:relative;height:100%"></div></div></div></div></div>', Y.options = {
        animSequence: "sync",
        fadeDuration: .35,
        initialHeight: 160,
        initialWidth: 320,
        modal: !1,
        overlayColor: "#000",
        overlayOpacity: .5,
        resizeDuration: .35,
        showOverlay: !0,
        troubleElements: ["select", "object", "embed", "canvas"]
    }, Y.init = function () {
        c.appendHTML(document.body, Y.markup), Y.body = x("rb-body-inner"), M = x("rb-container"), N = x("rb-overlay"), O = x("rb-wrapper"), m || (M.style.position = "absolute");
        var b;
        A(a, "resize", function () {
            b && (clearTimeout(b), b = null), i && (b = setTimeout(Y.onWindowResize, 10))
        })
    }, Y.onOpen = function (b, d) {
        P = !1, M.style.display = "block", R();
        var e = X(c.options.initialHeight, c.options.initialWidth);
        V(e.innerHeight, e.top), W(e.width, e.left), c.options.showOverlay && (N.style.backgroundColor = c.options.overlayColor, c.setOpacity(N, 0), c.options.modal || A(N, "click", c.close), K = !0), m || (S(), A(a, "scroll", S)), T(), M.style.visibility = "visible", K ? Q(N, "opacity", c.options.overlayOpacity, c.options.fadeDuration, d) : d()
    }, Y.onLoad = function (a, b) {
        U(!0);
        while (Y.body.firstChild) y(Y.body.firstChild);
        b()
    }, Y.onReady = function (a) {
        if (!i) return;
        var b = c.player,
            d = X(b.height, b.width);
        switch (c.options.animSequence) {
        case "hw":
            V(d.innerHeight, d.top, !0, function () {
                W(d.width, d.left, !0, a)
            });
            break;
        case "wh":
            W(d.width, d.left, !0, function () {
                V(d.innerHeight, d.top, !0, a)
            });
            break;
        default:
            W(d.width, d.left, !0), V(d.innerHeight, d.top, !0, a)
        }
    }, Y.onShow = function (a) {
        U(!1, a), P = !0
    }, Y.onClose = function () {
        m || B(a, "scroll", S), B(N, "click", c.close), O.style.visibility = "hidden";
        var b = function () {
            M.style.visibility = "hidden", M.style.display = "none", T(!0)
        };
        K ? Q(N, "opacity", 0, c.options.fadeDuration, b) : b()
    }, Y.onWindowResize = function () {
        if (!P) return;
        R();
        var a = c.player,
            b = X(a.height, a.width);
        W(b.width, b.left), V(b.innerHeight, b.top), a.onWindowResize && a.onWindowResize()
    }, c.skin = Y, a.Ringbox = c
})(window), Ringbox.init(),
function (a, b) {
    function c() {
        this.host = "ringrang.us"
    }
    function d(b) {
        a.RingRang.button(b)
    }
    if (a.RingRang != b) return !1;
    this.document = a.document, c.prototype.url = function (a) {
        return "//" + this.host + "/buttons/" + a + "/requests/new"
    }, c.prototype.image = function (a) {
        return '<img src="//' + this.host + "/buttons/" + a + '.png" />'
    }, c.prototype.button = function (a) {
        document.write('<a href="' + this.url(a) + '" rel="ringbox;width=580;height=400">' + this.image(a) + "</a>")
    }, c.prototype.close = function (a) {
        Ringbox.close()
    }, a.RingRang = new c, a.ringRang = d, a.addEventListener ? a.addEventListener("message", a.RingRang.close, !1) : a.attachEvent && a.attachEvent("onmessage", a.RingRang.close)
}(window)