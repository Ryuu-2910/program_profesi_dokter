/*!
 * jQuery JavaScript Library v1.7.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Nov 21 21:11:03 2011 -0500
 */
function toggleHandler(e) {
  e.addEventListener("click", function (e) {
    (e.preventDefault(),
      !0 === this.classList.contains("active")
        ? this.classList.remove("active")
        : this.classList.add("active"));
  });
}
function toggleChevron(e) {
  "use strict";
  $(e.target)
    .prev(".panel-heading")
    .find("i.indicator")
    .toggleClass("icon_plus_alt2 icon_minus_alt2");
}
(!(function (e, t) {
  function i(e) {
    var t,
      i,
      n = (H[e] = {});
    for (e = e.split(/\s+/), t = 0, i = e.length; t < i; t++) n[e[t]] = !0;
    return n;
  }
  function n(e, i, n) {
    if (n === t && 1 === e.nodeType) {
      var s = "data-" + i.replace(z, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(s))) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : O.isNumeric(n)
                  ? parseFloat(n)
                  : L.test(n)
                    ? O.parseJSON(n)
                    : n));
        } catch (e) {}
        O.data(e, i, n);
      } else n = t;
    }
    return n;
  }
  function s(e) {
    for (var t in e)
      if (("data" !== t || !O.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  function o(e, t, i) {
    var n = t + "defer",
      s = t + "queue",
      o = t + "mark",
      a = O._data(e, n);
    !a ||
      ("queue" !== i && O._data(e, s)) ||
      ("mark" !== i && O._data(e, o)) ||
      setTimeout(function () {
        O._data(e, s) || O._data(e, o) || (O.removeData(e, n, !0), a.fire());
      }, 0);
  }
  function a() {
    return !1;
  }
  function r() {
    return !0;
  }
  function l(e) {
    return !e || !e.parentNode || 11 === e.parentNode.nodeType;
  }
  function c(e, t, i) {
    if (((t = t || 0), O.isFunction(t)))
      return O.grep(e, function (e, n) {
        return !!t.call(e, n, e) === i;
      });
    if (t.nodeType)
      return O.grep(e, function (e) {
        return (e === t) === i;
      });
    if ("string" == typeof t) {
      var n = O.grep(e, function (e) {
        return 1 === e.nodeType;
      });
      if (he.test(t)) return O.filter(t, n, !i);
      t = O.filter(t, n);
    }
    return O.grep(e, function (e) {
      return O.inArray(e, t) >= 0 === i;
    });
  }
  function u(e) {
    var t = me.split("|"),
      i = e.createDocumentFragment();
    if (i.createElement) for (; t.length; ) i.createElement(t.pop());
    return i;
  }
  function h(e) {
    return O.nodeName(e, "table")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function d(e, t) {
    if (1 === t.nodeType && O.hasData(e)) {
      var i,
        n,
        s,
        o = O._data(e),
        a = O._data(t, o),
        r = o.events;
      if (r) {
        (delete a.handle, (a.events = {}));
        for (i in r)
          for (n = 0, s = r[i].length; n < s; n++)
            O.event.add(
              t,
              i + (r[i][n].namespace ? "." : "") + r[i][n].namespace,
              r[i][n],
              r[i][n].data,
            );
      }
      a.data && (a.data = O.extend({}, a.data));
    }
  }
  function p(e, t) {
    var i;
    1 === t.nodeType &&
      (t.clearAttributes && t.clearAttributes(),
      t.mergeAttributes && t.mergeAttributes(e),
      (i = t.nodeName.toLowerCase()),
      "object" === i
        ? (t.outerHTML = e.outerHTML)
        : "input" !== i || ("checkbox" !== e.type && "radio" !== e.type)
          ? "option" === i
            ? (t.selected = e.defaultSelected)
            : ("input" !== i && "textarea" !== i) ||
              (t.defaultValue = e.defaultValue)
          : (e.checked && (t.defaultChecked = t.checked = e.checked),
            t.value !== e.value && (t.value = e.value)),
      t.removeAttribute(O.expando));
  }
  function f(e) {
    return "undefined" != typeof e.getElementsByTagName
      ? e.getElementsByTagName("*")
      : "undefined" != typeof e.querySelectorAll
        ? e.querySelectorAll("*")
        : [];
  }
  function m(e) {
    ("checkbox" !== e.type && "radio" !== e.type) ||
      (e.defaultChecked = e.checked);
  }
  function g(e) {
    var t = (e.nodeName || "").toLowerCase();
    "input" === t
      ? m(e)
      : "script" !== t &&
        "undefined" != typeof e.getElementsByTagName &&
        O.grep(e.getElementsByTagName("input"), m);
  }
  function v(e) {
    var t = M.createElement("div");
    return (Ie.appendChild(t), (t.innerHTML = e.outerHTML), t.firstChild);
  }
  function y(e, t) {
    (t.src
      ? O.ajax({ url: t.src, async: !1, dataType: "script" })
      : O.globalEval(
          (t.text || t.textContent || t.innerHTML || "").replace(De, "/*$0*/"),
        ),
      t.parentNode && t.parentNode.removeChild(t));
  }
  function b(e, t, i) {
    var n = "width" === t ? e.offsetWidth : e.offsetHeight,
      s = "width" === t ? ze : Re,
      o = 0,
      a = s.length;
    if (n > 0) {
      if ("border" !== i)
        for (; o < a; o++)
          (i || (n -= parseFloat(O.css(e, "padding" + s[o])) || 0),
            "margin" === i
              ? (n += parseFloat(O.css(e, i + s[o])) || 0)
              : (n -= parseFloat(O.css(e, "border" + s[o] + "Width")) || 0));
      return n + "px";
    }
    if (
      ((n = Ne(e, t, t)),
      (n < 0 || null == n) && (n = e.style[t] || 0),
      (n = parseFloat(n) || 0),
      i)
    )
      for (; o < a; o++)
        ((n += parseFloat(O.css(e, "padding" + s[o])) || 0),
          "padding" !== i &&
            (n += parseFloat(O.css(e, "border" + s[o] + "Width")) || 0),
          "margin" === i && (n += parseFloat(O.css(e, i + s[o])) || 0));
    return n + "px";
  }
  function w(e) {
    return function (t, i) {
      if (("string" != typeof t && ((i = t), (t = "*")), O.isFunction(i)))
        for (
          var n, s, o, a = t.toLowerCase().split(it), r = 0, l = a.length;
          r < l;
          r++
        )
          ((n = a[r]),
            (o = /^\+/.test(n)),
            o && (n = n.substr(1) || "*"),
            (s = e[n] = e[n] || []),
            s[o ? "unshift" : "push"](i));
    };
  }
  function x(e, i, n, s, o, a) {
    ((o = o || i.dataTypes[0]), (a = a || {}), (a[o] = !0));
    for (
      var r, l = e[o], c = 0, u = l ? l.length : 0, h = e === at;
      c < u && (h || !r);
      c++
    )
      "string" == typeof (r = l[c](i, n, s)) &&
        (!h || a[r]
          ? (r = t)
          : (i.dataTypes.unshift(r), (r = x(e, i, n, s, r, a))));
    return ((!h && r) || a["*"] || (r = x(e, i, n, s, "*", a)), r);
  }
  function _(e, i) {
    var n,
      s,
      o = O.ajaxSettings.flatOptions || {};
    for (n in i) i[n] !== t && ((o[n] ? e : s || (s = {}))[n] = i[n]);
    s && O.extend(!0, e, s);
  }
  function k(e, t, i, n) {
    if (O.isArray(t))
      O.each(t, function (t, s) {
        i || Ke.test(e)
          ? n(e, s)
          : k(
              e + "[" + ("object" == typeof s || O.isArray(s) ? t : "") + "]",
              s,
              i,
              n,
            );
      });
    else if (i || null == t || "object" != typeof t) n(e, t);
    else for (var s in t) k(e + "[" + s + "]", t[s], i, n);
  }
  function C(e, i, n) {
    var s,
      o,
      a,
      r,
      l = e.contents,
      c = e.dataTypes,
      u = e.responseFields;
    for (o in u) o in n && (i[u[o]] = n[o]);
    for (; "*" === c[0]; )
      (c.shift(),
        s === t && (s = e.mimeType || i.getResponseHeader("content-type")));
    if (s)
      for (o in l)
        if (l[o] && l[o].test(s)) {
          c.unshift(o);
          break;
        }
    if (c[0] in n) a = c[0];
    else {
      for (o in n) {
        if (!c[0] || e.converters[o + " " + c[0]]) {
          a = o;
          break;
        }
        r || (r = o);
      }
      a = a || r;
    }
    if (a) return (a !== c[0] && c.unshift(a), n[a]);
  }
  function T(e, i) {
    e.dataFilter && (i = e.dataFilter(i, e.dataType));
    var n,
      s,
      o,
      a,
      r,
      l,
      c,
      u,
      h = e.dataTypes,
      d = {},
      p = h.length,
      f = h[0];
    for (n = 1; n < p; n++) {
      if (1 === n)
        for (s in e.converters)
          "string" == typeof s && (d[s.toLowerCase()] = e.converters[s]);
      if (((a = f), "*" === (f = h[n]))) f = a;
      else if ("*" !== a && a !== f) {
        if (((r = a + " " + f), !(l = d[r] || d["* " + f]))) {
          u = t;
          for (c in d)
            if (
              ((o = c.split(" ")),
              (o[0] === a || "*" === o[0]) && (u = d[o[1] + " " + f]))
            ) {
              ((c = d[c]), !0 === c ? (l = u) : !0 === u && (l = c));
              break;
            }
        }
        (l || u || O.error("No conversion from " + r.replace(" ", " to ")),
          !0 !== l && (i = l ? l(i) : u(c(i))));
      }
    }
    return i;
  }
  function S() {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  }
  function D() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  function E() {
    return (setTimeout(I, 0), (vt = O.now()));
  }
  function I() {
    vt = t;
  }
  function N(e, t) {
    var i = {};
    return (
      O.each(xt.concat.apply([], xt.slice(0, t)), function () {
        i[this] = e;
      }),
      i
    );
  }
  function A(e) {
    if (!yt[e]) {
      var t = M.body,
        i = O("<" + e + ">").appendTo(t),
        n = i.css("display");
      (i.remove(),
        ("none" !== n && "" !== n) ||
          (ft ||
            ((ft = M.createElement("iframe")),
            (ft.frameBorder = ft.width = ft.height = 0)),
          t.appendChild(ft),
          (mt && ft.createElement) ||
            ((mt = (ft.contentWindow || ft.contentDocument).document),
            mt.write(
              ("CSS1Compat" === M.compatMode ? "<!doctype html>" : "") +
                "<html><body>",
            ),
            mt.close()),
          (i = mt.createElement(e)),
          mt.body.appendChild(i),
          (n = O.css(i, "display")),
          t.removeChild(ft)),
        (yt[e] = n));
    }
    return yt[e];
  }
  function P(e) {
    return O.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  var M = e.document,
    $ = e.navigator,
    F = e.location,
    O = (function () {
      function i() {
        if (!r.isReady) {
          try {
            M.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(i, 1);
          }
          r.ready();
        }
      }
      var n,
        s,
        o,
        a,
        r = function (e, t) {
          return new r.fn.init(e, t, n);
        },
        l = e.jQuery,
        c = e.$,
        u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        h = /\S/,
        d = /^\s+/,
        p = /\s+$/,
        f = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        m = /^[\],:{}\s]*$/,
        g = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        y = /(?:^|:|,)(?:\s*\[)+/g,
        b = /(webkit)[ \/]([\w.]+)/,
        w = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        x = /(msie) ([\w.]+)/,
        _ = /(mozilla)(?:.*? rv:([\w.]+))?/,
        k = /-([a-z]|[0-9])/gi,
        C = /^-ms-/,
        T = function (e, t) {
          return (t + "").toUpperCase();
        },
        S = $.userAgent,
        D = Object.prototype.toString,
        E = Object.prototype.hasOwnProperty,
        I = Array.prototype.push,
        N = Array.prototype.slice,
        A = String.prototype.trim,
        P = Array.prototype.indexOf,
        F = {};
      return (
        (r.fn = r.prototype =
          {
            constructor: r,
            init: function (e, i, n) {
              var s, o, a, l;
              if (!e) return this;
              if (e.nodeType)
                return ((this.context = this[0] = e), (this.length = 1), this);
              if ("body" === e && !i && M.body)
                return (
                  (this.context = M),
                  (this[0] = M.body),
                  (this.selector = e),
                  (this.length = 1),
                  this
                );
              if ("string" == typeof e) {
                if (
                  !(s =
                    "<" === e.charAt(0) &&
                    ">" === e.charAt(e.length - 1) &&
                    e.length >= 3
                      ? [null, e, null]
                      : u.exec(e)) ||
                  (!s[1] && i)
                )
                  return !i || i.jquery
                    ? (i || n).find(e)
                    : this.constructor(i).find(e);
                if (s[1])
                  return (
                    (i = i instanceof r ? i[0] : i),
                    (l = i ? i.ownerDocument || i : M),
                    (a = f.exec(e)),
                    a
                      ? r.isPlainObject(i)
                        ? ((e = [M.createElement(a[1])]),
                          r.fn.attr.call(e, i, !0))
                        : (e = [l.createElement(a[1])])
                      : ((a = r.buildFragment([s[1]], [l])),
                        (e = (a.cacheable ? r.clone(a.fragment) : a.fragment)
                          .childNodes)),
                    r.merge(this, e)
                  );
                if ((o = M.getElementById(s[2])) && o.parentNode) {
                  if (o.id !== s[2]) return n.find(e);
                  ((this.length = 1), (this[0] = o));
                }
                return ((this.context = M), (this.selector = e), this);
              }
              return r.isFunction(e)
                ? n.ready(e)
                : (e.selector !== t &&
                    ((this.selector = e.selector), (this.context = e.context)),
                  r.makeArray(e, this));
            },
            selector: "",
            jquery: "1.7.1",
            length: 0,
            size: function () {
              return this.length;
            },
            toArray: function () {
              return N.call(this, 0);
            },
            get: function (e) {
              return null == e
                ? this.toArray()
                : e < 0
                  ? this[this.length + e]
                  : this[e];
            },
            pushStack: function (e, t, i) {
              var n = this.constructor();
              return (
                r.isArray(e) ? I.apply(n, e) : r.merge(n, e),
                (n.prevObject = this),
                (n.context = this.context),
                "find" === t
                  ? (n.selector =
                      this.selector + (this.selector ? " " : "") + i)
                  : t && (n.selector = this.selector + "." + t + "(" + i + ")"),
                n
              );
            },
            each: function (e, t) {
              return r.each(this, e, t);
            },
            ready: function (e) {
              return (r.bindReady(), o.add(e), this);
            },
            eq: function (e) {
              return (
                (e = +e),
                -1 === e ? this.slice(e) : this.slice(e, e + 1)
              );
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            slice: function () {
              return this.pushStack(
                N.apply(this, arguments),
                "slice",
                N.call(arguments).join(","),
              );
            },
            map: function (e) {
              return this.pushStack(
                r.map(this, function (t, i) {
                  return e.call(t, i, t);
                }),
              );
            },
            end: function () {
              return this.prevObject || this.constructor(null);
            },
            push: I,
            sort: [].sort,
            splice: [].splice,
          }),
        (r.fn.init.prototype = r.fn),
        (r.extend = r.fn.extend =
          function () {
            var e,
              i,
              n,
              s,
              o,
              a,
              l = arguments[0] || {},
              c = 1,
              u = arguments.length,
              h = !1;
            for (
              "boolean" == typeof l &&
                ((h = l), (l = arguments[1] || {}), (c = 2)),
                "object" == typeof l || r.isFunction(l) || (l = {}),
                u === c && ((l = this), --c);
              c < u;
              c++
            )
              if (null != (e = arguments[c]))
                for (i in e)
                  ((n = l[i]),
                    (s = e[i]),
                    l !== s &&
                      (h && s && (r.isPlainObject(s) || (o = r.isArray(s)))
                        ? (o
                            ? ((o = !1), (a = n && r.isArray(n) ? n : []))
                            : (a = n && r.isPlainObject(n) ? n : {}),
                          (l[i] = r.extend(h, a, s)))
                        : s !== t && (l[i] = s)));
            return l;
          }),
        r.extend({
          noConflict: function (t) {
            return (
              e.$ === r && (e.$ = c),
              t && e.jQuery === r && (e.jQuery = l),
              r
            );
          },
          isReady: !1,
          readyWait: 1,
          holdReady: function (e) {
            e ? r.readyWait++ : r.ready(!0);
          },
          ready: function (e) {
            if ((!0 === e && !--r.readyWait) || (!0 !== e && !r.isReady)) {
              if (!M.body) return setTimeout(r.ready, 1);
              if (((r.isReady = !0), !0 !== e && --r.readyWait > 0)) return;
              (o.fireWith(M, [r]),
                r.fn.trigger && r(M).trigger("ready").off("ready"));
            }
          },
          bindReady: function () {
            if (!o) {
              if (
                ((o = r.Callbacks("once memory")), "complete" === M.readyState)
              )
                return setTimeout(r.ready, 1);
              if (M.addEventListener)
                (M.addEventListener("DOMContentLoaded", a, !1),
                  e.addEventListener("load", r.ready, !1));
              else if (M.attachEvent) {
                (M.attachEvent("onreadystatechange", a),
                  e.attachEvent("onload", r.ready));
                var t = !1;
                try {
                  t = null == e.frameElement;
                } catch (e) {}
                M.documentElement.doScroll && t && i();
              }
            }
          },
          isFunction: function (e) {
            return "function" === r.type(e);
          },
          isArray:
            Array.isArray ||
            function (e) {
              return "array" === r.type(e);
            },
          isWindow: function (e) {
            return e && "object" == typeof e && "setInterval" in e;
          },
          isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
          },
          type: function (e) {
            return null == e ? String(e) : F[D.call(e)] || "object";
          },
          isPlainObject: function (e) {
            if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e))
              return !1;
            try {
              if (
                e.constructor &&
                !E.call(e, "constructor") &&
                !E.call(e.constructor.prototype, "isPrototypeOf")
              )
                return !1;
            } catch (e) {
              return !1;
            }
            var i;
            for (i in e);
            return i === t || E.call(e, i);
          },
          isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0;
          },
          error: function (e) {
            throw new Error(e);
          },
          parseJSON: function (t) {
            return "string" == typeof t && t
              ? ((t = r.trim(t)),
                e.JSON && e.JSON.parse
                  ? e.JSON.parse(t)
                  : m.test(t.replace(g, "@").replace(v, "]").replace(y, ""))
                    ? new Function("return " + t)()
                    : void r.error("Invalid JSON: " + t))
              : null;
          },
          parseXML: function (i) {
            var n, s;
            try {
              e.DOMParser
                ? ((s = new DOMParser()),
                  (n = s.parseFromString(i, "text/xml")))
                : ((n = new ActiveXObject("Microsoft.XMLDOM")),
                  (n.async = "false"),
                  n.loadXML(i));
            } catch (e) {
              n = t;
            }
            return (
              (n &&
                n.documentElement &&
                !n.getElementsByTagName("parsererror").length) ||
                r.error("Invalid XML: " + i),
              n
            );
          },
          noop: function () {},
          globalEval: function (t) {
            t &&
              h.test(t) &&
              (
                e.execScript ||
                function (t) {
                  e.eval.call(e, t);
                }
              )(t);
          },
          camelCase: function (e) {
            return e.replace(C, "ms-").replace(k, T);
          },
          nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase();
          },
          each: function (e, i, n) {
            var s,
              o = 0,
              a = e.length,
              l = a === t || r.isFunction(e);
            if (n)
              if (l) {
                for (s in e) if (!1 === i.apply(e[s], n)) break;
              } else for (; o < a && !1 !== i.apply(e[o++], n); );
            else if (l) {
              for (s in e) if (!1 === i.call(e[s], s, e[s])) break;
            } else for (; o < a && !1 !== i.call(e[o], o, e[o++]); );
            return e;
          },
          trim: A
            ? function (e) {
                return null == e ? "" : A.call(e);
              }
            : function (e) {
                return null == e
                  ? ""
                  : e.toString().replace(d, "").replace(p, "");
              },
          makeArray: function (e, t) {
            var i = t || [];
            if (null != e) {
              var n = r.type(e);
              null == e.length ||
              "string" === n ||
              "function" === n ||
              "regexp" === n ||
              r.isWindow(e)
                ? I.call(i, e)
                : r.merge(i, e);
            }
            return i;
          },
          inArray: function (e, t, i) {
            var n;
            if (t) {
              if (P) return P.call(t, e, i);
              for (
                n = t.length, i = i ? (i < 0 ? Math.max(0, n + i) : i) : 0;
                i < n;
                i++
              )
                if (i in t && t[i] === e) return i;
            }
            return -1;
          },
          merge: function (e, i) {
            var n = e.length,
              s = 0;
            if ("number" == typeof i.length)
              for (var o = i.length; s < o; s++) e[n++] = i[s];
            else for (; i[s] !== t; ) e[n++] = i[s++];
            return ((e.length = n), e);
          },
          grep: function (e, t, i) {
            var n,
              s = [];
            i = !!i;
            for (var o = 0, a = e.length; o < a; o++)
              ((n = !!t(e[o], o)), i !== n && s.push(e[o]));
            return s;
          },
          map: function (e, i, n) {
            var s,
              o,
              a = [],
              l = 0,
              c = e.length;
            if (
              e instanceof r ||
              (c !== t &&
                "number" == typeof c &&
                ((c > 0 && e[0] && e[c - 1]) || 0 === c || r.isArray(e)))
            )
              for (; l < c; l++)
                null != (s = i(e[l], l, n)) && (a[a.length] = s);
            else for (o in e) null != (s = i(e[o], o, n)) && (a[a.length] = s);
            return a.concat.apply([], a);
          },
          guid: 1,
          proxy: function (e, i) {
            if ("string" == typeof i) {
              var n = e[i];
              ((i = e), (e = n));
            }
            if (!r.isFunction(e)) return t;
            var s = N.call(arguments, 2),
              o = function () {
                return e.apply(i, s.concat(N.call(arguments)));
              };
            return ((o.guid = e.guid = e.guid || o.guid || r.guid++), o);
          },
          access: function (e, i, n, s, o, a) {
            var l = e.length;
            if ("object" == typeof i) {
              for (var c in i) r.access(e, c, i[c], s, o, n);
              return e;
            }
            if (n !== t) {
              s = !a && s && r.isFunction(n);
              for (var u = 0; u < l; u++)
                o(e[u], i, s ? n.call(e[u], u, o(e[u], i)) : n, a);
              return e;
            }
            return l ? o(e[0], i) : t;
          },
          now: function () {
            return new Date().getTime();
          },
          uaMatch: function (e) {
            e = e.toLowerCase();
            var t =
              b.exec(e) ||
              w.exec(e) ||
              x.exec(e) ||
              (e.indexOf("compatible") < 0 && _.exec(e)) ||
              [];
            return { browser: t[1] || "", version: t[2] || "0" };
          },
          sub: function () {
            function e(t, i) {
              return new e.fn.init(t, i);
            }
            (r.extend(!0, e, this),
              (e.superclass = this),
              (e.fn = e.prototype = this()),
              (e.fn.constructor = e),
              (e.sub = this.sub),
              (e.fn.init = function (i, n) {
                return (
                  n && n instanceof r && !(n instanceof e) && (n = e(n)),
                  r.fn.init.call(this, i, n, t)
                );
              }),
              (e.fn.init.prototype = e.fn));
            var t = e(M);
            return e;
          },
          browser: {},
        }),
        r.each(
          "Boolean Number String Function Array Date RegExp Object".split(" "),
          function (e, t) {
            F["[object " + t + "]"] = t.toLowerCase();
          },
        ),
        (s = r.uaMatch(S)),
        s.browser &&
          ((r.browser[s.browser] = !0), (r.browser.version = s.version)),
        r.browser.webkit && (r.browser.safari = !0),
        h.test("\xa0") && ((d = /^[\s\xA0]+/), (p = /[\s\xA0]+$/)),
        (n = r(M)),
        M.addEventListener
          ? (a = function () {
              (M.removeEventListener("DOMContentLoaded", a, !1), r.ready());
            })
          : M.attachEvent &&
            (a = function () {
              "complete" === M.readyState &&
                (M.detachEvent("onreadystatechange", a), r.ready());
            }),
        r
      );
    })(),
    H = {};
  O.Callbacks = function (e) {
    e = e ? H[e] || i(e) : {};
    var n,
      s,
      o,
      a,
      r,
      l = [],
      c = [],
      u = function (t) {
        var i, n, s, o;
        for (i = 0, n = t.length; i < n; i++)
          ((s = t[i]),
            (o = O.type(s)),
            "array" === o
              ? u(s)
              : "function" === o && ((e.unique && d.has(s)) || l.push(s)));
      },
      h = function (t, i) {
        for (
          i = i || [],
            n = !e.memory || [t, i],
            s = !0,
            r = o || 0,
            o = 0,
            a = l.length;
          l && r < a;
          r++
        )
          if (!1 === l[r].apply(t, i) && e.stopOnFalse) {
            n = !0;
            break;
          }
        ((s = !1),
          l &&
            (e.once
              ? !0 === n
                ? d.disable()
                : (l = [])
              : c && c.length && ((n = c.shift()), d.fireWith(n[0], n[1]))));
      },
      d = {
        add: function () {
          if (l) {
            var e = l.length;
            (u(arguments),
              s ? (a = l.length) : n && !0 !== n && ((o = e), h(n[0], n[1])));
          }
          return this;
        },
        remove: function () {
          if (l)
            for (var t = arguments, i = 0, n = t.length; i < n; i++)
              for (
                var o = 0;
                o < l.length &&
                (t[i] !== l[o] ||
                  (s && o <= a && (a--, o <= r && r--),
                  l.splice(o--, 1),
                  !e.unique));
                o++
              );
          return this;
        },
        has: function (e) {
          if (l)
            for (var t = 0, i = l.length; t < i; t++) if (e === l[t]) return !0;
          return !1;
        },
        empty: function () {
          return ((l = []), this);
        },
        disable: function () {
          return ((l = c = n = t), this);
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return ((c = t), (n && !0 !== n) || d.disable(), this);
        },
        locked: function () {
          return !c;
        },
        fireWith: function (t, i) {
          return (
            c && (s ? e.once || c.push([t, i]) : (e.once && n) || h(t, i)),
            this
          );
        },
        fire: function () {
          return (d.fireWith(this, arguments), this);
        },
        fired: function () {
          return !!n;
        },
      };
    return d;
  };
  var j = [].slice;
  (O.extend({
    Deferred: function (e) {
      var t,
        i = O.Callbacks("once memory"),
        n = O.Callbacks("once memory"),
        s = O.Callbacks("memory"),
        o = "pending",
        a = { resolve: i, reject: n, notify: s },
        r = {
          done: i.add,
          fail: n.add,
          progress: s.add,
          state: function () {
            return o;
          },
          isResolved: i.fired,
          isRejected: n.fired,
          then: function (e, t, i) {
            return (l.done(e).fail(t).progress(i), this);
          },
          always: function () {
            return (l.done.apply(l, arguments).fail.apply(l, arguments), this);
          },
          pipe: function (e, t, i) {
            return O.Deferred(function (n) {
              O.each(
                {
                  done: [e, "resolve"],
                  fail: [t, "reject"],
                  progress: [i, "notify"],
                },
                function (e, t) {
                  var i,
                    s = t[0],
                    o = t[1];
                  O.isFunction(s)
                    ? l[e](function () {
                        ((i = s.apply(this, arguments)),
                          i && O.isFunction(i.promise)
                            ? i.promise().then(n.resolve, n.reject, n.notify)
                            : n[o + "With"](this === l ? n : this, [i]));
                      })
                    : l[e](n[o]);
                },
              );
            }).promise();
          },
          promise: function (e) {
            if (null == e) e = r;
            else for (var t in r) e[t] = r[t];
            return e;
          },
        },
        l = r.promise({});
      for (t in a) ((l[t] = a[t].fire), (l[t + "With"] = a[t].fireWith));
      return (
        l
          .done(
            function () {
              o = "resolved";
            },
            n.disable,
            s.lock,
          )
          .fail(
            function () {
              o = "rejected";
            },
            i.disable,
            s.lock,
          ),
        e && e.call(l, l),
        l
      );
    },
    when: function (e) {
      function t(e) {
        return function (t) {
          ((n[e] = arguments.length > 1 ? j.call(arguments, 0) : t),
            --r || l.resolveWith(l, n));
        };
      }
      function i(e) {
        return function (t) {
          ((a[e] = arguments.length > 1 ? j.call(arguments, 0) : t),
            l.notifyWith(c, a));
        };
      }
      var n = j.call(arguments, 0),
        s = 0,
        o = n.length,
        a = new Array(o),
        r = o,
        l = o <= 1 && e && O.isFunction(e.promise) ? e : O.Deferred(),
        c = l.promise();
      if (o > 1) {
        for (; s < o; s++)
          n[s] && n[s].promise && O.isFunction(n[s].promise)
            ? n[s].promise().then(t(s), l.reject, i(s))
            : --r;
        r || l.resolveWith(l, n);
      } else l !== e && l.resolveWith(l, o ? [e] : []);
      return c;
    },
  }),
    (O.support = (function () {
      var t,
        i,
        n,
        s,
        o,
        a,
        r,
        l,
        c,
        u,
        h,
        d,
        p = M.createElement("div");
      M.documentElement;
      if (
        (p.setAttribute("className", "t"),
        (p.innerHTML =
          "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"),
        (i = p.getElementsByTagName("*")),
        (n = p.getElementsByTagName("a")[0]),
        !i || !i.length || !n)
      )
        return {};
      ((s = M.createElement("select")),
        (o = s.appendChild(M.createElement("option"))),
        (a = p.getElementsByTagName("input")[0]),
        (t = {
          leadingWhitespace: 3 === p.firstChild.nodeType,
          tbody: !p.getElementsByTagName("tbody").length,
          htmlSerialize: !!p.getElementsByTagName("link").length,
          style: /top/.test(n.getAttribute("style")),
          hrefNormalized: "/a" === n.getAttribute("href"),
          opacity: /^0.55/.test(n.style.opacity),
          cssFloat: !!n.style.cssFloat,
          checkOn: "on" === a.value,
          optSelected: o.selected,
          getSetAttribute: "t" !== p.className,
          enctype: !!M.createElement("form").enctype,
          html5Clone:
            "<:nav></:nav>" !== M.createElement("nav").cloneNode(!0).outerHTML,
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
        }),
        (a.checked = !0),
        (t.noCloneChecked = a.cloneNode(!0).checked),
        (s.disabled = !0),
        (t.optDisabled = !o.disabled));
      try {
        delete p.test;
      } catch (e) {
        t.deleteExpando = !1;
      }
      if (
        (!p.addEventListener &&
          p.attachEvent &&
          p.fireEvent &&
          (p.attachEvent("onclick", function () {
            t.noCloneEvent = !1;
          }),
          p.cloneNode(!0).fireEvent("onclick")),
        (a = M.createElement("input")),
        (a.value = "t"),
        a.setAttribute("type", "radio"),
        (t.radioValue = "t" === a.value),
        a.setAttribute("checked", "checked"),
        p.appendChild(a),
        (l = M.createDocumentFragment()),
        l.appendChild(p.lastChild),
        (t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (t.appendChecked = a.checked),
        l.removeChild(a),
        l.appendChild(p),
        (p.innerHTML = ""),
        e.getComputedStyle &&
          ((r = M.createElement("div")),
          (r.style.width = "0"),
          (r.style.marginRight = "0"),
          (p.style.width = "2px"),
          p.appendChild(r),
          (t.reliableMarginRight =
            0 ===
            (parseInt(
              (e.getComputedStyle(r, null) || { marginRight: 0 }).marginRight,
              10,
            ) || 0))),
        p.attachEvent)
      )
        for (h in { submit: 1, change: 1, focusin: 1 })
          ((u = "on" + h),
            (d = u in p),
            d ||
              (p.setAttribute(u, "return;"), (d = "function" == typeof p[u])),
            (t[h + "Bubbles"] = d));
      return (
        l.removeChild(p),
        (l = s = o = r = p = a = null),
        O(function () {
          var e,
            i,
            n,
            s,
            o,
            a,
            r,
            l,
            u,
            h,
            f = M.getElementsByTagName("body")[0];
          f &&
            ((a = 1),
            (r =
              "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;"),
            (l = "visibility:hidden;border:0;"),
            (u = "style='" + r + "border:5px solid #000;padding:0;'"),
            (h =
              "<div " +
              u +
              "><div></div></div><table " +
              u +
              " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>"),
            (e = M.createElement("div")),
            (e.style.cssText =
              l +
              "width:0;height:0;position:static;top:0;margin-top:" +
              a +
              "px"),
            f.insertBefore(e, f.firstChild),
            (p = M.createElement("div")),
            e.appendChild(p),
            (p.innerHTML =
              "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>"),
            (c = p.getElementsByTagName("td")),
            (d = 0 === c[0].offsetHeight),
            (c[0].style.display = ""),
            (c[1].style.display = "none"),
            (t.reliableHiddenOffsets = d && 0 === c[0].offsetHeight),
            (p.innerHTML = ""),
            (p.style.width = p.style.paddingLeft = "1px"),
            (O.boxModel = t.boxModel = 2 === p.offsetWidth),
            "undefined" != typeof p.style.zoom &&
              ((p.style.display = "inline"),
              (p.style.zoom = 1),
              (t.inlineBlockNeedsLayout = 2 === p.offsetWidth),
              (p.style.display = ""),
              (p.innerHTML = "<div style='width:4px;'></div>"),
              (t.shrinkWrapBlocks = 2 !== p.offsetWidth)),
            (p.style.cssText = r + l),
            (p.innerHTML = h),
            (i = p.firstChild),
            (n = i.firstChild),
            (s = i.nextSibling.firstChild.firstChild),
            (o = {
              doesNotAddBorder: 5 !== n.offsetTop,
              doesAddBorderForTableAndCells: 5 === s.offsetTop,
            }),
            (n.style.position = "fixed"),
            (n.style.top = "20px"),
            (o.fixedPosition = 20 === n.offsetTop || 15 === n.offsetTop),
            (n.style.position = n.style.top = ""),
            (i.style.overflow = "hidden"),
            (i.style.position = "relative"),
            (o.subtractsBorderForOverflowNotVisible = -5 === n.offsetTop),
            (o.doesNotIncludeMarginInBodyOffset = f.offsetTop !== a),
            f.removeChild(e),
            (p = e = null),
            O.extend(t, o));
        }),
        t
      );
    })()));
  var L = /^(?:\{.*\}|\[.*\])$/,
    z = /([A-Z])/g;
  (O.extend({
    cache: {},
    uuid: 0,
    expando: "jQuery" + (O.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (e) {
      return !!(e = e.nodeType ? O.cache[e[O.expando]] : e[O.expando]) && !s(e);
    },
    data: function (e, i, n, s) {
      if (O.acceptData(e)) {
        var o,
          a,
          r,
          l = O.expando,
          c = "string" == typeof i,
          u = e.nodeType,
          h = u ? O.cache : e,
          d = u ? e[l] : e[l] && l,
          p = "events" === i;
        if ((d && h[d] && (p || s || h[d].data)) || !c || n !== t)
          return (
            d || (u ? (e[l] = d = ++O.uuid) : (d = l)),
            h[d] || ((h[d] = {}), u || (h[d].toJSON = O.noop)),
            ("object" != typeof i && "function" != typeof i) ||
              (s
                ? (h[d] = O.extend(h[d], i))
                : (h[d].data = O.extend(h[d].data, i))),
            (o = a = h[d]),
            s || (a.data || (a.data = {}), (a = a.data)),
            n !== t && (a[O.camelCase(i)] = n),
            p && !a[i]
              ? o.events
              : (c ? null == (r = a[i]) && (r = a[O.camelCase(i)]) : (r = a), r)
          );
      }
    },
    removeData: function (e, t, i) {
      if (O.acceptData(e)) {
        var n,
          o,
          a,
          r = O.expando,
          l = e.nodeType,
          c = l ? O.cache : e,
          u = l ? e[r] : r;
        if (c[u]) {
          if (t && (n = i ? c[u] : c[u].data)) {
            O.isArray(t) ||
              (t in n
                ? (t = [t])
                : ((t = O.camelCase(t)), (t = t in n ? [t] : t.split(" "))));
            for (o = 0, a = t.length; o < a; o++) delete n[t[o]];
            if (!(i ? s : O.isEmptyObject)(n)) return;
          }
          (i || (delete c[u].data, s(c[u]))) &&
            (O.support.deleteExpando || !c.setInterval
              ? delete c[u]
              : (c[u] = null),
            l &&
              (O.support.deleteExpando
                ? delete e[r]
                : e.removeAttribute
                  ? e.removeAttribute(r)
                  : (e[r] = null)));
        }
      }
    },
    _data: function (e, t, i) {
      return O.data(e, t, i, !0);
    },
    acceptData: function (e) {
      if (e.nodeName) {
        var t = O.noData[e.nodeName.toLowerCase()];
        if (t) return !(!0 === t || e.getAttribute("classid") !== t);
      }
      return !0;
    },
  }),
    O.fn.extend({
      data: function (e, i) {
        var s,
          o,
          a,
          r = null;
        if (void 0 === e) {
          if (
            this.length &&
            ((r = O.data(this[0])),
            1 === this[0].nodeType && !O._data(this[0], "parsedAttrs"))
          ) {
            o = this[0].attributes;
            for (var l = 0, c = o.length; l < c; l++)
              ((a = o[l].name),
                0 === a.indexOf("data-") &&
                  ((a = O.camelCase(a.substring(5))), n(this[0], a, r[a])));
            O._data(this[0], "parsedAttrs", !0);
          }
          return r;
        }
        return "object" == typeof e
          ? this.each(function () {
              O.data(this, e);
            })
          : ((s = e.split(".")),
            (s[1] = s[1] ? "." + s[1] : ""),
            i === t
              ? ((r = this.triggerHandler("getData" + s[1] + "!", [s[0]])),
                r === t &&
                  this.length &&
                  ((r = O.data(this[0], e)), (r = n(this[0], e, r))),
                r === t && s[1] ? this.data(s[0]) : r)
              : this.each(function () {
                  var t = O(this),
                    n = [s[0], i];
                  (t.triggerHandler("setData" + s[1] + "!", n),
                    O.data(this, e, i),
                    t.triggerHandler("changeData" + s[1] + "!", n));
                }));
      },
      removeData: function (e) {
        return this.each(function () {
          O.removeData(this, e);
        });
      },
    }),
    O.extend({
      _mark: function (e, t) {
        e &&
          ((t = (t || "fx") + "mark"), O._data(e, t, (O._data(e, t) || 0) + 1));
      },
      _unmark: function (e, t, i) {
        if ((!0 !== e && ((i = t), (t = e), (e = !1)), t)) {
          i = i || "fx";
          var n = i + "mark",
            s = e ? 0 : (O._data(t, n) || 1) - 1;
          s ? O._data(t, n, s) : (O.removeData(t, n, !0), o(t, i, "mark"));
        }
      },
      queue: function (e, t, i) {
        var n;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (n = O._data(e, t)),
            i &&
              (!n || O.isArray(i)
                ? (n = O._data(e, t, O.makeArray(i)))
                : n.push(i)),
            n || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var i = O.queue(e, t),
          n = i.shift(),
          s = {};
        ("inprogress" === n && (n = i.shift()),
          n &&
            ("fx" === t && i.unshift("inprogress"),
            O._data(e, t + ".run", s),
            n.call(
              e,
              function () {
                O.dequeue(e, t);
              },
              s,
            )),
          i.length ||
            (O.removeData(e, t + "queue " + t + ".run", !0), o(e, t, "queue")));
      },
    }),
    O.fn.extend({
      queue: function (e, i) {
        return (
          "string" != typeof e && ((i = e), (e = "fx")),
          i === t
            ? O.queue(this[0], e)
            : this.each(function () {
                var t = O.queue(this, e, i);
                "fx" === e && "inprogress" !== t[0] && O.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          O.dequeue(this, e);
        });
      },
      delay: function (e, t) {
        return (
          (e = O.fx ? O.fx.speeds[e] || e : e),
          (t = t || "fx"),
          this.queue(t, function (t, i) {
            var n = setTimeout(t, e);
            i.stop = function () {
              clearTimeout(n);
            };
          })
        );
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e) {
        function i() {
          --r || s.resolveWith(o, [o]);
        }
        ("string" != typeof e && (e, (e = t)), (e = e || "fx"));
        for (
          var n,
            s = O.Deferred(),
            o = this,
            a = o.length,
            r = 1,
            l = e + "defer",
            c = e + "queue",
            u = e + "mark";
          a--;
        )
          (n =
            O.data(o[a], l, t, !0) ||
            ((O.data(o[a], c, t, !0) || O.data(o[a], u, t, !0)) &&
              O.data(o[a], l, O.Callbacks("once memory"), !0))) &&
            (r++, n.add(i));
        return (i(), s.promise());
      },
    }));
  var R,
    W,
    B,
    q = /[\n\t\r]/g,
    K = /\s+/,
    Y = /\r/g,
    U = /^(?:button|input)$/i,
    X = /^(?:button|input|object|select|textarea)$/i,
    V = /^a(?:rea)?$/i,
    Q =
      /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    G = O.support.getSetAttribute;
  (O.fn.extend({
    attr: function (e, t) {
      return O.access(this, e, t, !0, O.attr);
    },
    removeAttr: function (e) {
      return this.each(function () {
        O.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return O.access(this, e, t, !0, O.prop);
    },
    removeProp: function (e) {
      return (
        (e = O.propFix[e] || e),
        this.each(function () {
          try {
            ((this[e] = t), delete this[e]);
          } catch (e) {}
        })
      );
    },
    addClass: function (e) {
      var t, i, n, s, o, a, r;
      if (O.isFunction(e))
        return this.each(function (t) {
          O(this).addClass(e.call(this, t, this.className));
        });
      if (e && "string" == typeof e)
        for (t = e.split(K), i = 0, n = this.length; i < n; i++)
          if (((s = this[i]), 1 === s.nodeType))
            if (s.className || 1 !== t.length) {
              for (o = " " + s.className + " ", a = 0, r = t.length; a < r; a++)
                ~o.indexOf(" " + t[a] + " ") || (o += t[a] + " ");
              s.className = O.trim(o);
            } else s.className = e;
      return this;
    },
    removeClass: function (e) {
      var i, n, s, o, a, r, l;
      if (O.isFunction(e))
        return this.each(function (t) {
          O(this).removeClass(e.call(this, t, this.className));
        });
      if ((e && "string" == typeof e) || e === t)
        for (i = (e || "").split(K), n = 0, s = this.length; n < s; n++)
          if (((o = this[n]), 1 === o.nodeType && o.className))
            if (e) {
              for (
                a = (" " + o.className + " ").replace(q, " "),
                  r = 0,
                  l = i.length;
                r < l;
                r++
              )
                a = a.replace(" " + i[r] + " ", " ");
              o.className = O.trim(a);
            } else o.className = "";
      return this;
    },
    toggleClass: function (e, t) {
      var i = typeof e,
        n = "boolean" == typeof t;
      return O.isFunction(e)
        ? this.each(function (i) {
            O(this).toggleClass(e.call(this, i, this.className, t), t);
          })
        : this.each(function () {
            if ("string" === i)
              for (
                var s, o = 0, a = O(this), r = t, l = e.split(K);
                (s = l[o++]);
              )
                ((r = n ? r : !a.hasClass(s)),
                  a[r ? "addClass" : "removeClass"](s));
            else
              ("undefined" !== i && "boolean" !== i) ||
                (this.className &&
                  O._data(this, "__className__", this.className),
                (this.className =
                  this.className || !1 === e
                    ? ""
                    : O._data(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", i = 0, n = this.length; i < n; i++)
        if (
          1 === this[i].nodeType &&
          (" " + this[i].className + " ").replace(q, " ").indexOf(t) > -1
        )
          return !0;
      return !1;
    },
    val: function (e) {
      var i,
        n,
        s,
        o = this[0];
      {
        if (arguments.length)
          return (
            (s = O.isFunction(e)),
            this.each(function (n) {
              var o,
                a = O(this);
              1 === this.nodeType &&
                ((o = s ? e.call(this, n, a.val()) : e),
                null == o
                  ? (o = "")
                  : "number" == typeof o
                    ? (o += "")
                    : O.isArray(o) &&
                      (o = O.map(o, function (e) {
                        return null == e ? "" : e + "";
                      })),
                ((i =
                  O.valHooks[this.nodeName.toLowerCase()] ||
                  O.valHooks[this.type]) &&
                  "set" in i &&
                  i.set(this, o, "value") !== t) ||
                  (this.value = o));
            })
          );
        if (o)
          return (i =
            O.valHooks[o.nodeName.toLowerCase()] || O.valHooks[o.type]) &&
            "get" in i &&
            (n = i.get(o, "value")) !== t
            ? n
            : ((n = o.value),
              "string" == typeof n ? n.replace(Y, "") : null == n ? "" : n);
      }
    },
  }),
    O.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = e.attributes.value;
            return !t || t.specified ? e.value : e.text;
          },
        },
        select: {
          get: function (e) {
            var t,
              i,
              n,
              s,
              o = e.selectedIndex,
              a = [],
              r = e.options,
              l = "select-one" === e.type;
            if (o < 0) return null;
            for (i = l ? o : 0, n = l ? o + 1 : r.length; i < n; i++)
              if (
                ((s = r[i]),
                s.selected &&
                  (O.support.optDisabled
                    ? !s.disabled
                    : null === s.getAttribute("disabled")) &&
                  (!s.parentNode.disabled ||
                    !O.nodeName(s.parentNode, "optgroup")))
              ) {
                if (((t = O(s).val()), l)) return t;
                a.push(t);
              }
            return l && !a.length && r.length ? O(r[o]).val() : a;
          },
          set: function (e, t) {
            var i = O.makeArray(t);
            return (
              O(e)
                .find("option")
                .each(function () {
                  this.selected = O.inArray(O(this).val(), i) >= 0;
                }),
              i.length || (e.selectedIndex = -1),
              i
            );
          },
        },
      },
      attrFn: {
        val: !0,
        css: !0,
        html: !0,
        text: !0,
        data: !0,
        width: !0,
        height: !0,
        offset: !0,
      },
      attr: function (e, i, n, s) {
        var o,
          a,
          r,
          l = e.nodeType;
        if (e && 3 !== l && 8 !== l && 2 !== l)
          return s && i in O.attrFn
            ? O(e)[i](n)
            : "undefined" == typeof e.getAttribute
              ? O.prop(e, i, n)
              : ((r = 1 !== l || !O.isXMLDoc(e)),
                r &&
                  ((i = i.toLowerCase()),
                  (a = O.attrHooks[i] || (Q.test(i) ? W : R))),
                n !== t
                  ? null === n
                    ? void O.removeAttr(e, i)
                    : a && "set" in a && r && (o = a.set(e, n, i)) !== t
                      ? o
                      : (e.setAttribute(i, "" + n), n)
                  : a && "get" in a && r && null !== (o = a.get(e, i))
                    ? o
                    : ((o = e.getAttribute(i)), null === o ? t : o));
      },
      removeAttr: function (e, t) {
        var i,
          n,
          s,
          o,
          a = 0;
        if (t && 1 === e.nodeType)
          for (n = t.toLowerCase().split(K), o = n.length; a < o; a++)
            (s = n[a]) &&
              ((i = O.propFix[s] || s),
              O.attr(e, s, ""),
              e.removeAttribute(G ? s : i),
              Q.test(s) && i in e && (e[i] = !1));
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (U.test(e.nodeName) && e.parentNode)
              O.error("type property can't be changed");
            else if (
              !O.support.radioValue &&
              "radio" === t &&
              O.nodeName(e, "input")
            ) {
              var i = e.value;
              return (e.setAttribute("type", t), i && (e.value = i), t);
            }
          },
        },
        value: {
          get: function (e, t) {
            return R && O.nodeName(e, "button")
              ? R.get(e, t)
              : t in e
                ? e.value
                : null;
          },
          set: function (e, t, i) {
            if (R && O.nodeName(e, "button")) return R.set(e, t, i);
            e.value = t;
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (e, i, n) {
        var s,
          o,
          a,
          r = e.nodeType;
        if (e && 3 !== r && 8 !== r && 2 !== r)
          return (
            (a = 1 !== r || !O.isXMLDoc(e)),
            a && ((i = O.propFix[i] || i), (o = O.propHooks[i])),
            n !== t
              ? o && "set" in o && (s = o.set(e, n, i)) !== t
                ? s
                : (e[i] = n)
              : o && "get" in o && null !== (s = o.get(e, i))
                ? s
                : e[i]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var i = e.getAttributeNode("tabindex");
            return i && i.specified
              ? parseInt(i.value, 10)
              : X.test(e.nodeName) || (V.test(e.nodeName) && e.href)
                ? 0
                : t;
          },
        },
      },
    }),
    (O.attrHooks.tabindex = O.propHooks.tabIndex),
    (W = {
      get: function (e, i) {
        var n,
          s = O.prop(e, i);
        return !0 === s ||
          ("boolean" != typeof s &&
            (n = e.getAttributeNode(i)) &&
            !1 !== n.nodeValue)
          ? i.toLowerCase()
          : t;
      },
      set: function (e, t, i) {
        var n;
        return (
          !1 === t
            ? O.removeAttr(e, i)
            : ((n = O.propFix[i] || i),
              n in e && (e[n] = !0),
              e.setAttribute(i, i.toLowerCase())),
          i
        );
      },
    }),
    G ||
      ((B = { name: !0, id: !0 }),
      (R = O.valHooks.button =
        {
          get: function (e, i) {
            var n;
            return (
              (n = e.getAttributeNode(i)),
              n && (B[i] ? "" !== n.nodeValue : n.specified) ? n.nodeValue : t
            );
          },
          set: function (e, t, i) {
            var n = e.getAttributeNode(i);
            return (
              n || ((n = M.createAttribute(i)), e.setAttributeNode(n)),
              (n.nodeValue = t + "")
            );
          },
        }),
      (O.attrHooks.tabindex.set = R.set),
      O.each(["width", "height"], function (e, t) {
        O.attrHooks[t] = O.extend(O.attrHooks[t], {
          set: function (e, i) {
            if ("" === i) return (e.setAttribute(t, "auto"), i);
          },
        });
      }),
      (O.attrHooks.contenteditable = {
        get: R.get,
        set: function (e, t, i) {
          ("" === t && (t = "false"), R.set(e, t, i));
        },
      })),
    O.support.hrefNormalized ||
      O.each(["href", "src", "width", "height"], function (e, i) {
        O.attrHooks[i] = O.extend(O.attrHooks[i], {
          get: function (e) {
            var n = e.getAttribute(i, 2);
            return null === n ? t : n;
          },
        });
      }),
    O.support.style ||
      (O.attrHooks.style = {
        get: function (e) {
          return e.style.cssText.toLowerCase() || t;
        },
        set: function (e, t) {
          return (e.style.cssText = "" + t);
        },
      }),
    O.support.optSelected ||
      (O.propHooks.selected = O.extend(O.propHooks.selected, {
        get: function (e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
      })),
    O.support.enctype || (O.propFix.enctype = "encoding"),
    O.support.checkOn ||
      O.each(["radio", "checkbox"], function () {
        O.valHooks[this] = {
          get: function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          },
        };
      }),
    O.each(["radio", "checkbox"], function () {
      O.valHooks[this] = O.extend(O.valHooks[this], {
        set: function (e, t) {
          if (O.isArray(t)) return (e.checked = O.inArray(O(e).val(), t) >= 0);
        },
      });
    }));
  var J = /^(?:textarea|input|select)$/i,
    Z = /^([^\.]*)?(?:\.(.+))?$/,
    ee = /\bhover(\.\S+)?\b/,
    te = /^key/,
    ie = /^(?:mouse|contextmenu)|click/,
    ne = /^(?:focusinfocus|focusoutblur)$/,
    se = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    oe = function (e) {
      var t = se.exec(e);
      return (
        t &&
          ((t[1] = (t[1] || "").toLowerCase()),
          (t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)"))),
        t
      );
    },
    ae = function (e, t) {
      var i = e.attributes || {};
      return (
        (!t[1] || e.nodeName.toLowerCase() === t[1]) &&
        (!t[2] || (i.id || {}).value === t[2]) &&
        (!t[3] || t[3].test((i["class"] || {}).value))
      );
    },
    re = function (e) {
      return O.event.special.hover
        ? e
        : e.replace(ee, "mouseenter$1 mouseleave$1");
    };
  ((O.event = {
    add: function (e, i, n, s, o) {
      var a, r, l, c, u, h, d, p, f, m, g;
      if (3 !== e.nodeType && 8 !== e.nodeType && i && n && (a = O._data(e))) {
        for (
          n.handler && ((f = n), (n = f.handler)),
            n.guid || (n.guid = O.guid++),
            l = a.events,
            l || (a.events = l = {}),
            r = a.handle,
            r ||
              ((a.handle = r =
                function (e) {
                  return void 0 === O || (e && O.event.triggered === e.type)
                    ? t
                    : O.event.dispatch.apply(r.elem, arguments);
                }),
              (r.elem = e)),
            i = O.trim(re(i)).split(" "),
            c = 0;
          c < i.length;
          c++
        )
          ((u = Z.exec(i[c]) || []),
            (h = u[1]),
            (d = (u[2] || "").split(".").sort()),
            (g = O.event.special[h] || {}),
            (h = (o ? g.delegateType : g.bindType) || h),
            (g = O.event.special[h] || {}),
            (p = O.extend(
              {
                type: h,
                origType: u[1],
                data: s,
                handler: n,
                guid: n.guid,
                selector: o,
                quick: oe(o),
                namespace: d.join("."),
              },
              f,
            )),
            (m = l[h]),
            m ||
              ((m = l[h] = []),
              (m.delegateCount = 0),
              (g.setup && !1 !== g.setup.call(e, s, d, r)) ||
                (e.addEventListener
                  ? e.addEventListener(h, r, !1)
                  : e.attachEvent && e.attachEvent("on" + h, r))),
            g.add &&
              (g.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)),
            o ? m.splice(m.delegateCount++, 0, p) : m.push(p),
            (O.event.global[h] = !0));
        e = null;
      }
    },
    global: {},
    remove: function (e, t, i, n, s) {
      var o,
        a,
        r,
        l,
        c,
        u,
        h,
        d,
        p,
        f,
        m,
        g,
        v = O.hasData(e) && O._data(e);
      if (v && (d = v.events)) {
        for (t = O.trim(re(t || "")).split(" "), o = 0; o < t.length; o++)
          if (((a = Z.exec(t[o]) || []), (r = l = a[1]), (c = a[2]), r)) {
            for (
              p = O.event.special[r] || {},
                r = (n ? p.delegateType : p.bindType) || r,
                m = d[r] || [],
                u = m.length,
                c = c
                  ? new RegExp(
                      "(^|\\.)" +
                        c.split(".").sort().join("\\.(?:.*\\.)?") +
                        "(\\.|$)",
                    )
                  : null,
                h = 0;
              h < m.length;
              h++
            )
              ((g = m[h]),
                (!s && l !== g.origType) ||
                  (i && i.guid !== g.guid) ||
                  (c && !c.test(g.namespace)) ||
                  (n && n !== g.selector && ("**" !== n || !g.selector)) ||
                  (m.splice(h--, 1),
                  g.selector && m.delegateCount--,
                  p.remove && p.remove.call(e, g)));
            0 === m.length &&
              u !== m.length &&
              ((p.teardown && !1 !== p.teardown.call(e, c)) ||
                O.removeEvent(e, r, v.handle),
              delete d[r]);
          } else for (r in d) O.event.remove(e, r + t[o], i, n, !0);
        O.isEmptyObject(d) &&
          ((f = v.handle),
          f && (f.elem = null),
          O.removeData(e, ["events", "handle"], !0));
      }
    },
    customEvent: { getData: !0, setData: !0, changeData: !0 },
    trigger: function (i, n, s, o) {
      if (!s || (3 !== s.nodeType && 8 !== s.nodeType)) {
        var a,
          r,
          l,
          c,
          u,
          h,
          d,
          p,
          f,
          m,
          g = i.type || i,
          v = [];
        if (
          !ne.test(g + O.event.triggered) &&
          (g.indexOf("!") >= 0 && ((g = g.slice(0, -1)), (r = !0)),
          g.indexOf(".") >= 0 &&
            ((v = g.split(".")), (g = v.shift()), v.sort()),
          (s && !O.event.customEvent[g]) || O.event.global[g])
        )
          if (
            ((i =
              "object" == typeof i
                ? i[O.expando]
                  ? i
                  : new O.Event(g, i)
                : new O.Event(g)),
            (i.type = g),
            (i.isTrigger = !0),
            (i.exclusive = r),
            (i.namespace = v.join(".")),
            (i.namespace_re = i.namespace
              ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.)?") + "(\\.|$)")
              : null),
            (h = g.indexOf(":") < 0 ? "on" + g : ""),
            s)
          ) {
            if (
              ((i.result = t),
              i.target || (i.target = s),
              (n = null != n ? O.makeArray(n) : []),
              n.unshift(i),
              (d = O.event.special[g] || {}),
              !d.trigger || !1 !== d.trigger.apply(s, n))
            ) {
              if (
                ((f = [[s, d.bindType || g]]),
                !o && !d.noBubble && !O.isWindow(s))
              ) {
                for (
                  m = d.delegateType || g,
                    c = ne.test(m + g) ? s : s.parentNode,
                    u = null;
                  c;
                  c = c.parentNode
                )
                  (f.push([c, m]), (u = c));
                u &&
                  u === s.ownerDocument &&
                  f.push([u.defaultView || u.parentWindow || e, m]);
              }
              for (l = 0; l < f.length && !i.isPropagationStopped(); l++)
                ((c = f[l][0]),
                  (i.type = f[l][1]),
                  (p =
                    (O._data(c, "events") || {})[i.type] &&
                    O._data(c, "handle")),
                  p && p.apply(c, n),
                  (p = h && c[h]) &&
                    O.acceptData(c) &&
                    !1 === p.apply(c, n) &&
                    i.preventDefault());
              return (
                (i.type = g),
                o ||
                  i.isDefaultPrevented() ||
                  (d._default && !1 !== d._default.apply(s.ownerDocument, n)) ||
                  ("click" === g && O.nodeName(s, "a")) ||
                  !O.acceptData(s) ||
                  (h &&
                    s[g] &&
                    (("focus" !== g && "blur" !== g) ||
                      0 !== i.target.offsetWidth) &&
                    !O.isWindow(s) &&
                    ((u = s[h]),
                    u && (s[h] = null),
                    (O.event.triggered = g),
                    s[g](),
                    (O.event.triggered = t),
                    u && (s[h] = u))),
                i.result
              );
            }
          } else {
            a = O.cache;
            for (l in a)
              a[l].events &&
                a[l].events[g] &&
                O.event.trigger(i, n, a[l].handle.elem, !0);
          }
      }
    },
    dispatch: function (i) {
      i = O.event.fix(i || e.event);
      var n,
        s,
        o,
        a,
        r,
        l,
        c,
        u,
        h,
        d,
        p = (O._data(this, "events") || {})[i.type] || [],
        f = p.delegateCount,
        m = [].slice.call(arguments, 0),
        g = !i.exclusive && !i.namespace,
        v = [];
      if (
        ((m[0] = i),
        (i.delegateTarget = this),
        f && !i.target.disabled && (!i.button || "click" !== i.type))
      )
        for (
          a = O(this), a.context = this.ownerDocument || this, o = i.target;
          o != this;
          o = o.parentNode || this
        ) {
          for (l = {}, u = [], a[0] = o, n = 0; n < f; n++)
            ((h = p[n]),
              (d = h.selector),
              l[d] === t && (l[d] = h.quick ? ae(o, h.quick) : a.is(d)),
              l[d] && u.push(h));
          u.length && v.push({ elem: o, matches: u });
        }
      for (
        p.length > f && v.push({ elem: this, matches: p.slice(f) }), n = 0;
        n < v.length && !i.isPropagationStopped();
        n++
      )
        for (
          c = v[n], i.currentTarget = c.elem, s = 0;
          s < c.matches.length && !i.isImmediatePropagationStopped();
          s++
        )
          ((h = c.matches[s]),
            (g ||
              (!i.namespace && !h.namespace) ||
              (i.namespace_re && i.namespace_re.test(h.namespace))) &&
              ((i.data = h.data),
              (i.handleObj = h),
              (r = (
                (O.event.special[h.origType] || {}).handle || h.handler
              ).apply(c.elem, m)) !== t &&
                ((i.result = r),
                !1 === r && (i.preventDefault(), i.stopPropagation()))));
      return i.result;
    },
    props:
      "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " ",
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " ",
        ),
      filter: function (e, i) {
        var n,
          s,
          o,
          a = i.button,
          r = i.fromElement;
        return (
          null == e.pageX &&
            null != i.clientX &&
            ((n = e.target.ownerDocument || M),
            (s = n.documentElement),
            (o = n.body),
            (e.pageX =
              i.clientX +
              ((s && s.scrollLeft) || (o && o.scrollLeft) || 0) -
              ((s && s.clientLeft) || (o && o.clientLeft) || 0)),
            (e.pageY =
              i.clientY +
              ((s && s.scrollTop) || (o && o.scrollTop) || 0) -
              ((s && s.clientTop) || (o && o.clientTop) || 0))),
          !e.relatedTarget &&
            r &&
            (e.relatedTarget = r === e.target ? i.toElement : r),
          e.which ||
            a === t ||
            (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
          e
        );
      },
    },
    fix: function (e) {
      if (e[O.expando]) return e;
      var i,
        n,
        s = e,
        o = O.event.fixHooks[e.type] || {},
        a = o.props ? this.props.concat(o.props) : this.props;
      for (e = O.Event(s), i = a.length; i; ) ((n = a[--i]), (e[n] = s[n]));
      return (
        e.target || (e.target = s.srcElement || M),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        e.metaKey === t && (e.metaKey = e.ctrlKey),
        o.filter ? o.filter(e, s) : e
      );
    },
    special: {
      ready: { setup: O.bindReady },
      load: { noBubble: !0 },
      focus: { delegateType: "focusin" },
      blur: { delegateType: "focusout" },
      beforeunload: {
        setup: function (e, t, i) {
          O.isWindow(this) && (this.onbeforeunload = i);
        },
        teardown: function (e, t) {
          this.onbeforeunload === t && (this.onbeforeunload = null);
        },
      },
    },
    simulate: function (e, t, i, n) {
      var s = O.extend(new O.Event(), i, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      (n ? O.event.trigger(s, null, t) : O.event.dispatch.call(t, s),
        s.isDefaultPrevented() && i.preventDefault());
    },
  }),
    (O.event.handle = O.event.dispatch),
    (O.removeEvent = M.removeEventListener
      ? function (e, t, i) {
          e.removeEventListener && e.removeEventListener(t, i, !1);
        }
      : function (e, t, i) {
          e.detachEvent && e.detachEvent("on" + t, i);
        }),
    (O.Event = function (e, t) {
      if (!(this instanceof O.Event)) return new O.Event(e, t);
      (e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            !1 === e.returnValue ||
            (e.getPreventDefault && e.getPreventDefault())
              ? r
              : a))
        : (this.type = e),
        t && O.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || O.now()),
        (this[O.expando] = !0));
    }),
    (O.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = r;
        var e = this.originalEvent;
        e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        this.isPropagationStopped = r;
        var e = this.originalEvent;
        e && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        ((this.isImmediatePropagationStopped = r), this.stopPropagation());
      },
      isDefaultPrevented: a,
      isPropagationStopped: a,
      isImmediatePropagationStopped: a,
    }),
    O.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (e, t) {
        O.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var i,
              n = this,
              s = e.relatedTarget,
              o = e.handleObj;
            o.selector;
            return (
              (s && (s === n || O.contains(n, s))) ||
                ((e.type = o.origType),
                (i = o.handler.apply(this, arguments)),
                (e.type = t)),
              i
            );
          },
        };
      },
    ),
    O.support.submitBubbles ||
      (O.event.special.submit = {
        setup: function () {
          if (O.nodeName(this, "form")) return !1;
          O.event.add(this, "click._submit keypress._submit", function (e) {
            var i = e.target,
              n =
                O.nodeName(i, "input") || O.nodeName(i, "button") ? i.form : t;
            n &&
              !n._submit_attached &&
              (O.event.add(n, "submit._submit", function (e) {
                this.parentNode &&
                  !e.isTrigger &&
                  O.event.simulate("submit", this.parentNode, e, !0);
              }),
              (n._submit_attached = !0));
          });
        },
        teardown: function () {
          if (O.nodeName(this, "form")) return !1;
          O.event.remove(this, "._submit");
        },
      }),
    O.support.changeBubbles ||
      (O.event.special.change = {
        setup: function () {
          if (J.test(this.nodeName))
            return (
              ("checkbox" !== this.type && "radio" !== this.type) ||
                (O.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                O.event.add(this, "click._change", function (e) {
                  this._just_changed &&
                    !e.isTrigger &&
                    ((this._just_changed = !1),
                    O.event.simulate("change", this, e, !0));
                })),
              !1
            );
          O.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;
            J.test(t.nodeName) &&
              !t._change_attached &&
              (O.event.add(t, "change._change", function (e) {
                !this.parentNode ||
                  e.isSimulated ||
                  e.isTrigger ||
                  O.event.simulate("change", this.parentNode, e, !0);
              }),
              (t._change_attached = !0));
          });
        },
        handle: function (e) {
          var t = e.target;
          if (
            this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== t.type && "checkbox" !== t.type)
          )
            return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return (O.event.remove(this, "._change"), J.test(this.nodeName));
        },
      }),
    O.support.focusinBubbles ||
      O.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var i = 0,
          n = function (e) {
            O.event.simulate(t, e.target, O.event.fix(e), !0);
          };
        O.event.special[t] = {
          setup: function () {
            0 == i++ && M.addEventListener(e, n, !0);
          },
          teardown: function () {
            0 == --i && M.removeEventListener(e, n, !0);
          },
        };
      }),
    O.fn.extend({
      on: function (e, i, n, s, o) {
        var r, l;
        if ("object" == typeof e) {
          "string" != typeof i && ((n = i), (i = t));
          for (l in e) this.on(l, i, n, e[l], o);
          return this;
        }
        if (
          (null == n && null == s
            ? ((s = i), (n = i = t))
            : null == s &&
              ("string" == typeof i
                ? ((s = n), (n = t))
                : ((s = n), (n = i), (i = t))),
          !1 === s)
        )
          s = a;
        else if (!s) return this;
        return (
          1 === o &&
            ((r = s),
            (s = function (e) {
              return (O().off(e), r.apply(this, arguments));
            }),
            (s.guid = r.guid || (r.guid = O.guid++))),
          this.each(function () {
            O.event.add(this, e, s, n, i);
          })
        );
      },
      one: function (e, t, i, n) {
        return this.on.call(this, e, t, i, n, 1);
      },
      off: function (e, i, n) {
        if (e && e.preventDefault && e.handleObj) {
          var s = e.handleObj;
          return (
            O(e.delegateTarget).off(
              s.namespace ? s.type + "." + s.namespace : s.type,
              s.selector,
              s.handler,
            ),
            this
          );
        }
        if ("object" == typeof e) {
          for (var o in e) this.off(o, i, e[o]);
          return this;
        }
        return (
          (!1 !== i && "function" != typeof i) || ((n = i), (i = t)),
          !1 === n && (n = a),
          this.each(function () {
            O.event.remove(this, e, n, i);
          })
        );
      },
      bind: function (e, t, i) {
        return this.on(e, null, t, i);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      live: function (e, t, i) {
        return (O(this.context).on(e, this.selector, t, i), this);
      },
      die: function (e, t) {
        return (O(this.context).off(e, this.selector || "**", t), this);
      },
      delegate: function (e, t, i, n) {
        return this.on(t, e, i, n);
      },
      undelegate: function (e, t, i) {
        return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, i);
      },
      trigger: function (e, t) {
        return this.each(function () {
          O.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        if (this[0]) return O.event.trigger(e, t, this[0], !0);
      },
      toggle: function (e) {
        var t = arguments,
          i = e.guid || O.guid++,
          n = 0,
          s = function (i) {
            var s = (O._data(this, "lastToggle" + e.guid) || 0) % n;
            return (
              O._data(this, "lastToggle" + e.guid, s + 1),
              i.preventDefault(),
              t[s].apply(this, arguments) || !1
            );
          };
        for (s.guid = i; n < t.length; ) t[n++].guid = i;
        return this.click(s);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    O.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " ",
      ),
      function (e, t) {
        ((O.fn[t] = function (e, i) {
          return (
            null == i && ((i = e), (e = null)),
            arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
          );
        }),
          O.attrFn && (O.attrFn[t] = !0),
          te.test(t) && (O.event.fixHooks[t] = O.event.keyHooks),
          ie.test(t) && (O.event.fixHooks[t] = O.event.mouseHooks));
      },
    ) /*!
     * Sizzle CSS Selector Engine
     *  Copyright 2011, The Dojo Foundation
     *  Released under the MIT, BSD, and GPL Licenses.
     *  More information: http://sizzlejs.com/
     */,
    (function () {
      function e(e, t, i, n, o, a) {
        for (var r = 0, l = n.length; r < l; r++) {
          var c = n[r];
          if (c) {
            var u = !1;
            for (c = c[e]; c; ) {
              if (c[s] === i) {
                u = n[c.sizset];
                break;
              }
              if (
                (1 !== c.nodeType || a || ((c[s] = i), (c.sizset = r)),
                c.nodeName.toLowerCase() === t)
              ) {
                u = c;
                break;
              }
              c = c[e];
            }
            n[r] = u;
          }
        }
      }
      function i(e, t, i, n, o, a) {
        for (var r = 0, l = n.length; r < l; r++) {
          var c = n[r];
          if (c) {
            var u = !1;
            for (c = c[e]; c; ) {
              if (c[s] === i) {
                u = n[c.sizset];
                break;
              }
              if (1 === c.nodeType)
                if ((a || ((c[s] = i), (c.sizset = r)), "string" != typeof t)) {
                  if (c === t) {
                    u = !0;
                    break;
                  }
                } else if (d.filter(t, [c]).length > 0) {
                  u = c;
                  break;
                }
              c = c[e];
            }
            n[r] = u;
          }
        }
      }
      var n =
          /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        s = "sizcache" + (Math.random() + "").replace(".", ""),
        o = 0,
        a = Object.prototype.toString,
        r = !1,
        l = !0,
        c = /\\/g,
        u = /\r\n/g,
        h = /\W/;
      [0, 0].sort(function () {
        return ((l = !1), 0);
      });
      var d = function (e, t, i, s) {
        ((i = i || []), (t = t || M));
        var o = t;
        if (1 !== t.nodeType && 9 !== t.nodeType) return [];
        if (!e || "string" != typeof e) return i;
        var r,
          l,
          c,
          u,
          h,
          p,
          g,
          v,
          b = !0,
          w = d.isXML(t),
          _ = [],
          k = e;
        do {
          if (
            (n.exec(""), (r = n.exec(k)) && ((k = r[3]), _.push(r[1]), r[2]))
          ) {
            u = r[3];
            break;
          }
        } while (r);
        if (_.length > 1 && m.exec(e))
          if (2 === _.length && f.relative[_[0]]) l = x(_[0] + _[1], t, s);
          else
            for (l = f.relative[_[0]] ? [t] : d(_.shift(), t); _.length; )
              ((e = _.shift()),
                f.relative[e] && (e += _.shift()),
                (l = x(e, l, s)));
        else if (
          (!s &&
            _.length > 1 &&
            9 === t.nodeType &&
            !w &&
            f.match.ID.test(_[0]) &&
            !f.match.ID.test(_[_.length - 1]) &&
            ((h = d.find(_.shift(), t, w)),
            (t = h.expr ? d.filter(h.expr, h.set)[0] : h.set[0])),
          t)
        )
          for (
            h = s
              ? { expr: _.pop(), set: y(s) }
              : d.find(
                  _.pop(),
                  1 !== _.length ||
                    ("~" !== _[0] && "+" !== _[0]) ||
                    !t.parentNode
                    ? t
                    : t.parentNode,
                  w,
                ),
              l = h.expr ? d.filter(h.expr, h.set) : h.set,
              _.length > 0 ? (c = y(l)) : (b = !1);
            _.length;
          )
            ((p = _.pop()),
              (g = p),
              f.relative[p] ? (g = _.pop()) : (p = ""),
              null == g && (g = t),
              f.relative[p](c, g, w));
        else c = _ = [];
        if (
          (c || (c = l), c || d.error(p || e), "[object Array]" === a.call(c))
        )
          if (b)
            if (t && 1 === t.nodeType)
              for (v = 0; null != c[v]; v++)
                c[v] &&
                  (!0 === c[v] ||
                    (1 === c[v].nodeType && d.contains(t, c[v]))) &&
                  i.push(l[v]);
            else
              for (v = 0; null != c[v]; v++)
                c[v] && 1 === c[v].nodeType && i.push(l[v]);
          else i.push.apply(i, c);
        else y(c, i);
        return (u && (d(u, o, i, s), d.uniqueSort(i)), i);
      };
      ((d.uniqueSort = function (e) {
        if (b && ((r = l), e.sort(b), r))
          for (var t = 1; t < e.length; t++)
            e[t] === e[t - 1] && e.splice(t--, 1);
        return e;
      }),
        (d.matches = function (e, t) {
          return d(e, null, null, t);
        }),
        (d.matchesSelector = function (e, t) {
          return d(t, null, null, [e]).length > 0;
        }),
        (d.find = function (e, t, i) {
          var n, s, o, a, r, l;
          if (!e) return [];
          for (s = 0, o = f.order.length; s < o; s++)
            if (
              ((r = f.order[s]),
              (a = f.leftMatch[r].exec(e)) &&
                ((l = a[1]),
                a.splice(1, 1),
                "\\" !== l.substr(l.length - 1) &&
                  ((a[1] = (a[1] || "").replace(c, "")),
                  null != (n = f.find[r](a, t, i)))))
            ) {
              e = e.replace(f.match[r], "");
              break;
            }
          return (
            n ||
              (n =
                "undefined" != typeof t.getElementsByTagName
                  ? t.getElementsByTagName("*")
                  : []),
            { set: n, expr: e }
          );
        }),
        (d.filter = function (e, i, n, s) {
          for (
            var o,
              a,
              r,
              l,
              c,
              u,
              h,
              p,
              m,
              g = e,
              v = [],
              y = i,
              b = i && i[0] && d.isXML(i[0]);
            e && i.length;
          ) {
            for (r in f.filter)
              if (null != (o = f.leftMatch[r].exec(e)) && o[2]) {
                if (
                  ((u = f.filter[r]),
                  (h = o[1]),
                  (a = !1),
                  o.splice(1, 1),
                  "\\" === h.substr(h.length - 1))
                )
                  continue;
                if ((y === v && (v = []), f.preFilter[r]))
                  if ((o = f.preFilter[r](o, y, n, v, s, b))) {
                    if (!0 === o) continue;
                  } else a = l = !0;
                if (o)
                  for (p = 0; null != (c = y[p]); p++)
                    c &&
                      ((l = u(c, o, p, y)),
                      (m = s ^ l),
                      n && null != l
                        ? m
                          ? (a = !0)
                          : (y[p] = !1)
                        : m && (v.push(c), (a = !0)));
                if (l !== t) {
                  if ((n || (y = v), (e = e.replace(f.match[r], "")), !a))
                    return [];
                  break;
                }
              }
            if (e === g) {
              if (null != a) break;
              d.error(e);
            }
            g = e;
          }
          return y;
        }),
        (d.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }));
      var p = (d.getText = function (e) {
          var t,
            i,
            n = e.nodeType,
            s = "";
          if (n) {
            if (1 === n || 9 === n) {
              if ("string" == typeof e.textContent) return e.textContent;
              if ("string" == typeof e.innerText)
                return e.innerText.replace(u, "");
              for (e = e.firstChild; e; e = e.nextSibling) s += p(e);
            } else if (3 === n || 4 === n) return e.nodeValue;
          } else for (t = 0; (i = e[t]); t++) 8 !== i.nodeType && (s += p(i));
          return s;
        }),
        f = (d.selectors = {
          order: ["ID", "NAME", "TAG"],
          match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD:
              /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO:
              /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
          },
          leftMatch: {},
          attrMap: { class: "className", for: "htmlFor" },
          attrHandle: {
            href: function (e) {
              return e.getAttribute("href");
            },
            type: function (e) {
              return e.getAttribute("type");
            },
          },
          relative: {
            "+": function (e, t) {
              var i = "string" == typeof t,
                n = i && !h.test(t),
                s = i && !n;
              n && (t = t.toLowerCase());
              for (var o, a = 0, r = e.length; a < r; a++)
                if ((o = e[a])) {
                  for (; (o = o.previousSibling) && 1 !== o.nodeType; );
                  e[a] =
                    s || (o && o.nodeName.toLowerCase() === t)
                      ? o || !1
                      : o === t;
                }
              s && d.filter(t, e, !0);
            },
            ">": function (e, t) {
              var i,
                n = "string" == typeof t,
                s = 0,
                o = e.length;
              if (n && !h.test(t)) {
                for (t = t.toLowerCase(); s < o; s++)
                  if ((i = e[s])) {
                    var a = i.parentNode;
                    e[s] = a.nodeName.toLowerCase() === t && a;
                  }
              } else {
                for (; s < o; s++)
                  (i = e[s]) && (e[s] = n ? i.parentNode : i.parentNode === t);
                n && d.filter(t, e, !0);
              }
            },
            "": function (t, n, s) {
              var a,
                r = o++,
                l = i;
              ("string" != typeof n ||
                h.test(n) ||
                ((n = n.toLowerCase()), (a = n), (l = e)),
                l("parentNode", n, r, t, a, s));
            },
            "~": function (t, n, s) {
              var a,
                r = o++,
                l = i;
              ("string" != typeof n ||
                h.test(n) ||
                ((n = n.toLowerCase()), (a = n), (l = e)),
                l("previousSibling", n, r, t, a, s));
            },
          },
          find: {
            ID: function (e, t, i) {
              if ("undefined" != typeof t.getElementById && !i) {
                var n = t.getElementById(e[1]);
                return n && n.parentNode ? [n] : [];
              }
            },
            NAME: function (e, t) {
              if ("undefined" != typeof t.getElementsByName) {
                for (
                  var i = [],
                    n = t.getElementsByName(e[1]),
                    s = 0,
                    o = n.length;
                  s < o;
                  s++
                )
                  n[s].getAttribute("name") === e[1] && i.push(n[s]);
                return 0 === i.length ? null : i;
              }
            },
            TAG: function (e, t) {
              if ("undefined" != typeof t.getElementsByTagName)
                return t.getElementsByTagName(e[1]);
            },
          },
          preFilter: {
            CLASS: function (e, t, i, n, s, o) {
              if (((e = " " + e[1].replace(c, "") + " "), o)) return e;
              for (var a, r = 0; null != (a = t[r]); r++)
                a &&
                  (s ^
                  (a.className &&
                    (" " + a.className + " ")
                      .replace(/[\t\n\r]/g, " ")
                      .indexOf(e) >= 0)
                    ? i || n.push(a)
                    : i && (t[r] = !1));
              return !1;
            },
            ID: function (e) {
              return e[1].replace(c, "");
            },
            TAG: function (e) {
              return e[1].replace(c, "").toLowerCase();
            },
            CHILD: function (e) {
              if ("nth" === e[1]) {
                (e[2] || d.error(e[0]), (e[2] = e[2].replace(/^\+|\s*/g, "")));
                var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                  ("even" === e[2] && "2n") ||
                    ("odd" === e[2] && "2n+1") ||
                    (!/\D/.test(e[2]) && "0n+" + e[2]) ||
                    e[2],
                );
                ((e[2] = t[1] + (t[2] || 1) - 0), (e[3] = t[3] - 0));
              } else e[2] && d.error(e[0]);
              return ((e[0] = o++), e);
            },
            ATTR: function (e, t, i, n, s, o) {
              var a = (e[1] = e[1].replace(c, ""));
              return (
                !o && f.attrMap[a] && (e[1] = f.attrMap[a]),
                (e[4] = (e[4] || e[5] || "").replace(c, "")),
                "~=" === e[2] && (e[4] = " " + e[4] + " "),
                e
              );
            },
            PSEUDO: function (e, t, i, s, o) {
              if ("not" === e[1]) {
                if (!((n.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                  var a = d.filter(e[3], t, i, !0 ^ o);
                  return (i || s.push.apply(s, a), !1);
                }
                e[3] = d(e[3], null, null, t);
              } else if (f.match.POS.test(e[0]) || f.match.CHILD.test(e[0]))
                return !0;
              return e;
            },
            POS: function (e) {
              return (e.unshift(!0), e);
            },
          },
          filters: {
            enabled: function (e) {
              return !1 === e.disabled && "hidden" !== e.type;
            },
            disabled: function (e) {
              return !0 === e.disabled;
            },
            checked: function (e) {
              return !0 === e.checked;
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex,
                !0 === e.selected
              );
            },
            parent: function (e) {
              return !!e.firstChild;
            },
            empty: function (e) {
              return !e.firstChild;
            },
            has: function (e, t, i) {
              return !!d(i[3], e).length;
            },
            header: function (e) {
              return /h\d/i.test(e.nodeName);
            },
            text: function (e) {
              var t = e.getAttribute("type"),
                i = e.type;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === i &&
                (t === i || null === t)
              );
            },
            radio: function (e) {
              return "input" === e.nodeName.toLowerCase() && "radio" === e.type;
            },
            checkbox: function (e) {
              return (
                "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
              );
            },
            file: function (e) {
              return "input" === e.nodeName.toLowerCase() && "file" === e.type;
            },
            password: function (e) {
              return (
                "input" === e.nodeName.toLowerCase() && "password" === e.type
              );
            },
            submit: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t || "button" === t) && "submit" === e.type;
            },
            image: function (e) {
              return "input" === e.nodeName.toLowerCase() && "image" === e.type;
            },
            reset: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t || "button" === t) && "reset" === e.type;
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            input: function (e) {
              return /input|select|textarea|button/i.test(e.nodeName);
            },
            focus: function (e) {
              return e === e.ownerDocument.activeElement;
            },
          },
          setFilters: {
            first: function (e, t) {
              return 0 === t;
            },
            last: function (e, t, i, n) {
              return t === n.length - 1;
            },
            even: function (e, t) {
              return t % 2 == 0;
            },
            odd: function (e, t) {
              return t % 2 == 1;
            },
            lt: function (e, t, i) {
              return t < i[3] - 0;
            },
            gt: function (e, t, i) {
              return t > i[3] - 0;
            },
            nth: function (e, t, i) {
              return i[3] - 0 === t;
            },
            eq: function (e, t, i) {
              return i[3] - 0 === t;
            },
          },
          filter: {
            PSEUDO: function (e, t, i, n) {
              var s = t[1],
                o = f.filters[s];
              if (o) return o(e, i, t, n);
              if ("contains" === s)
                return (
                  (e.textContent || e.innerText || p([e]) || "").indexOf(
                    t[3],
                  ) >= 0
                );
              if ("not" === s) {
                for (var a = t[3], r = 0, l = a.length; r < l; r++)
                  if (a[r] === e) return !1;
                return !0;
              }
              d.error(s);
            },
            CHILD: function (e, t) {
              var i,
                n,
                o,
                a,
                r,
                l,
                c = t[1],
                u = e;
              switch (c) {
                case "only":
                case "first":
                  for (; (u = u.previousSibling); )
                    if (1 === u.nodeType) return !1;
                  if ("first" === c) return !0;
                  u = e;
                case "last":
                  for (; (u = u.nextSibling); ) if (1 === u.nodeType) return !1;
                  return !0;
                case "nth":
                  if (((i = t[2]), (n = t[3]), 1 === i && 0 === n)) return !0;
                  if (
                    ((o = t[0]),
                    (a = e.parentNode) && (a[s] !== o || !e.nodeIndex))
                  ) {
                    for (r = 0, u = a.firstChild; u; u = u.nextSibling)
                      1 === u.nodeType && (u.nodeIndex = ++r);
                    a[s] = o;
                  }
                  return (
                    (l = e.nodeIndex - n),
                    0 === i ? 0 === l : l % i == 0 && l / i >= 0
                  );
              }
            },
            ID: function (e, t) {
              return 1 === e.nodeType && e.getAttribute("id") === t;
            },
            TAG: function (e, t) {
              return (
                ("*" === t && 1 === e.nodeType) ||
                (!!e.nodeName && e.nodeName.toLowerCase() === t)
              );
            },
            CLASS: function (e, t) {
              return (
                (" " + (e.className || e.getAttribute("class")) + " ").indexOf(
                  t,
                ) > -1
              );
            },
            ATTR: function (e, t) {
              var i = t[1],
                n = d.attr
                  ? d.attr(e, i)
                  : f.attrHandle[i]
                    ? f.attrHandle[i](e)
                    : null != e[i]
                      ? e[i]
                      : e.getAttribute(i),
                s = n + "",
                o = t[2],
                a = t[4];
              return null == n
                ? "!=" === o
                : !o && d.attr
                  ? null != n
                  : "=" === o
                    ? s === a
                    : "*=" === o
                      ? s.indexOf(a) >= 0
                      : "~=" === o
                        ? (" " + s + " ").indexOf(a) >= 0
                        : a
                          ? "!=" === o
                            ? s !== a
                            : "^=" === o
                              ? 0 === s.indexOf(a)
                              : "$=" === o
                                ? s.substr(s.length - a.length) === a
                                : "|=" === o &&
                                  (s === a ||
                                    s.substr(0, a.length + 1) === a + "-")
                          : s && !1 !== n;
            },
            POS: function (e, t, i, n) {
              var s = t[2],
                o = f.setFilters[s];
              if (o) return o(e, i, t, n);
            },
          },
        }),
        m = f.match.POS,
        g = function (e, t) {
          return "\\" + (t - 0 + 1);
        };
      for (var v in f.match)
        ((f.match[v] = new RegExp(
          f.match[v].source + /(?![^\[]*\])(?![^\(]*\))/.source,
        )),
          (f.leftMatch[v] = new RegExp(
            /(^(?:.|\r|\n)*?)/.source +
              f.match[v].source.replace(/\\(\d+)/g, g),
          )));
      var y = function (e, t) {
        return (
          (e = Array.prototype.slice.call(e, 0)),
          t ? (t.push.apply(t, e), t) : e
        );
      };
      try {
        Array.prototype.slice.call(M.documentElement.childNodes, 0)[0].nodeType;
      } catch (e) {
        y = function (e, t) {
          var i = 0,
            n = t || [];
          if ("[object Array]" === a.call(e)) Array.prototype.push.apply(n, e);
          else if ("number" == typeof e.length)
            for (var s = e.length; i < s; i++) n.push(e[i]);
          else for (; e[i]; i++) n.push(e[i]);
          return n;
        };
      }
      var b, w;
      (M.documentElement.compareDocumentPosition
        ? (b = function (e, t) {
            return e === t
              ? ((r = !0), 0)
              : e.compareDocumentPosition && t.compareDocumentPosition
                ? 4 & e.compareDocumentPosition(t)
                  ? -1
                  : 1
                : e.compareDocumentPosition
                  ? -1
                  : 1;
          })
        : ((b = function (e, t) {
            if (e === t) return ((r = !0), 0);
            if (e.sourceIndex && t.sourceIndex)
              return e.sourceIndex - t.sourceIndex;
            var i,
              n,
              s = [],
              o = [],
              a = e.parentNode,
              l = t.parentNode,
              c = a;
            if (a === l) return w(e, t);
            if (!a) return -1;
            if (!l) return 1;
            for (; c; ) (s.unshift(c), (c = c.parentNode));
            for (c = l; c; ) (o.unshift(c), (c = c.parentNode));
            ((i = s.length), (n = o.length));
            for (var u = 0; u < i && u < n; u++)
              if (s[u] !== o[u]) return w(s[u], o[u]);
            return u === i ? w(e, o[u], -1) : w(s[u], t, 1);
          }),
          (w = function (e, t, i) {
            if (e === t) return i;
            for (var n = e.nextSibling; n; ) {
              if (n === t) return -1;
              n = n.nextSibling;
            }
            return 1;
          })),
        (function () {
          var e = M.createElement("div"),
            i = "script" + new Date().getTime(),
            n = M.documentElement;
          ((e.innerHTML = "<a name='" + i + "'/>"),
            n.insertBefore(e, n.firstChild),
            M.getElementById(i) &&
              ((f.find.ID = function (e, i, n) {
                if ("undefined" != typeof i.getElementById && !n) {
                  var s = i.getElementById(e[1]);
                  return s
                    ? s.id === e[1] ||
                      ("undefined" != typeof s.getAttributeNode &&
                        s.getAttributeNode("id").nodeValue === e[1])
                      ? [s]
                      : t
                    : [];
                }
              }),
              (f.filter.ID = function (e, t) {
                var i =
                  "undefined" != typeof e.getAttributeNode &&
                  e.getAttributeNode("id");
                return 1 === e.nodeType && i && i.nodeValue === t;
              })),
            n.removeChild(e),
            (n = e = null));
        })(),
        (function () {
          var e = M.createElement("div");
          (e.appendChild(M.createComment("")),
            e.getElementsByTagName("*").length > 0 &&
              (f.find.TAG = function (e, t) {
                var i = t.getElementsByTagName(e[1]);
                if ("*" === e[1]) {
                  for (var n = [], s = 0; i[s]; s++)
                    1 === i[s].nodeType && n.push(i[s]);
                  i = n;
                }
                return i;
              }),
            (e.innerHTML = "<a href='#'></a>"),
            e.firstChild &&
              "undefined" != typeof e.firstChild.getAttribute &&
              "#" !== e.firstChild.getAttribute("href") &&
              (f.attrHandle.href = function (e) {
                return e.getAttribute("href", 2);
              }),
            (e = null));
        })(),
        M.querySelectorAll &&
          (function () {
            var e = d,
              t = M.createElement("div");
            if (
              ((t.innerHTML = "<p class='TEST'></p>"),
              !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length)
            ) {
              d = function (t, i, n, s) {
                if (((i = i || M), !s && !d.isXML(i))) {
                  var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                  if (o && (1 === i.nodeType || 9 === i.nodeType)) {
                    if (o[1]) return y(i.getElementsByTagName(t), n);
                    if (o[2] && f.find.CLASS && i.getElementsByClassName)
                      return y(i.getElementsByClassName(o[2]), n);
                  }
                  if (9 === i.nodeType) {
                    if ("body" === t && i.body) return y([i.body], n);
                    if (o && o[3]) {
                      var a = i.getElementById(o[3]);
                      if (!a || !a.parentNode) return y([], n);
                      if (a.id === o[3]) return y([a], n);
                    }
                    try {
                      return y(i.querySelectorAll(t), n);
                    } catch (e) {}
                  } else if (
                    1 === i.nodeType &&
                    "object" !== i.nodeName.toLowerCase()
                  ) {
                    var r = i,
                      l = i.getAttribute("id"),
                      c = l || "__sizzle__",
                      u = i.parentNode,
                      h = /^\s*[+~]/.test(t);
                    (l
                      ? (c = c.replace(/'/g, "\\$&"))
                      : i.setAttribute("id", c),
                      h && u && (i = i.parentNode));
                    try {
                      if (!h || u)
                        return y(
                          i.querySelectorAll("[id='" + c + "'] " + t),
                          n,
                        );
                    } catch (e) {
                    } finally {
                      l || r.removeAttribute("id");
                    }
                  }
                }
                return e(t, i, n, s);
              };
              for (var i in e) d[i] = e[i];
              t = null;
            }
          })(),
        (function () {
          var e = M.documentElement,
            t =
              e.matchesSelector ||
              e.mozMatchesSelector ||
              e.webkitMatchesSelector ||
              e.msMatchesSelector;
          if (t) {
            var i = !t.call(M.createElement("div"), "div"),
              n = !1;
            try {
              t.call(M.documentElement, "[test!='']:sizzle");
            } catch (e) {
              n = !0;
            }
            d.matchesSelector = function (e, s) {
              if (
                ((s = s.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']")),
                !d.isXML(e))
              )
                try {
                  if (n || (!f.match.PSEUDO.test(s) && !/!=/.test(s))) {
                    var o = t.call(e, s);
                    if (o || !i || (e.document && 11 !== e.document.nodeType))
                      return o;
                  }
                } catch (e) {}
              return d(s, null, null, [e]).length > 0;
            };
          }
        })(),
        (function () {
          var e = M.createElement("div");
          ((e.innerHTML = "<div class='test e'></div><div class='test'></div>"),
            e.getElementsByClassName &&
              0 !== e.getElementsByClassName("e").length &&
              ((e.lastChild.className = "e"),
              1 !== e.getElementsByClassName("e").length &&
                (f.order.splice(1, 0, "CLASS"),
                (f.find.CLASS = function (e, t, i) {
                  if ("undefined" != typeof t.getElementsByClassName && !i)
                    return t.getElementsByClassName(e[1]);
                }),
                (e = null))));
        })(),
        M.documentElement.contains
          ? (d.contains = function (e, t) {
              return e !== t && (!e.contains || e.contains(t));
            })
          : M.documentElement.compareDocumentPosition
            ? (d.contains = function (e, t) {
                return !!(16 & e.compareDocumentPosition(t));
              })
            : (d.contains = function () {
                return !1;
              }),
        (d.isXML = function (e) {
          var t = (e ? e.ownerDocument || e : 0).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }));
      var x = function (e, t, i) {
        for (
          var n, s = [], o = "", a = t.nodeType ? [t] : t;
          (n = f.match.PSEUDO.exec(e));
        )
          ((o += n[0]), (e = e.replace(f.match.PSEUDO, "")));
        e = f.relative[e] ? e + "*" : e;
        for (var r = 0, l = a.length; r < l; r++) d(e, a[r], s, i);
        return d.filter(o, s);
      };
      ((d.attr = O.attr),
        (d.selectors.attrMap = {}),
        (O.find = d),
        (O.expr = d.selectors),
        (O.expr[":"] = O.expr.filters),
        (O.unique = d.uniqueSort),
        (O.text = d.getText),
        (O.isXMLDoc = d.isXML),
        (O.contains = d.contains));
    })());
  var le = /Until$/,
    ce = /^(?:parents|prevUntil|prevAll)/,
    ue = /,/,
    he = /^.[^:#\[\.,]*$/,
    de = Array.prototype.slice,
    pe = O.expr.match.POS,
    fe = { children: !0, contents: !0, next: !0, prev: !0 };
  (O.fn.extend({
    find: function (e) {
      var t,
        i,
        n = this;
      if ("string" != typeof e)
        return O(e).filter(function () {
          for (t = 0, i = n.length; t < i; t++)
            if (O.contains(n[t], this)) return !0;
        });
      var s,
        o,
        a,
        r = this.pushStack("", "find", e);
      for (t = 0, i = this.length; t < i; t++)
        if (((s = r.length), O.find(e, this[t], r), t > 0))
          for (o = s; o < r.length; o++)
            for (a = 0; a < s; a++)
              if (r[a] === r[o]) {
                r.splice(o--, 1);
                break;
              }
      return r;
    },
    has: function (e) {
      var t = O(e);
      return this.filter(function () {
        for (var e = 0, i = t.length; e < i; e++)
          if (O.contains(this, t[e])) return !0;
      });
    },
    not: function (e) {
      return this.pushStack(c(this, e, !1), "not", e);
    },
    filter: function (e) {
      return this.pushStack(c(this, e, !0), "filter", e);
    },
    is: function (e) {
      return (
        !!e &&
        ("string" == typeof e
          ? pe.test(e)
            ? O(e, this.context).index(this[0]) >= 0
            : O.filter(e, this).length > 0
          : this.filter(e).length > 0)
      );
    },
    closest: function (e, t) {
      var i,
        n,
        s = [],
        o = this[0];
      if (O.isArray(e)) {
        for (var a = 1; o && o.ownerDocument && o !== t; ) {
          for (i = 0; i < e.length; i++)
            O(o).is(e[i]) && s.push({ selector: e[i], elem: o, level: a });
          ((o = o.parentNode), a++);
        }
        return s;
      }
      var r = pe.test(e) || "string" != typeof e ? O(e, t || this.context) : 0;
      for (i = 0, n = this.length; i < n; i++)
        for (o = this[i]; o; ) {
          if (r ? r.index(o) > -1 : O.find.matchesSelector(o, e)) {
            s.push(o);
            break;
          }
          if (
            !(o = o.parentNode) ||
            !o.ownerDocument ||
            o === t ||
            11 === o.nodeType
          )
            break;
        }
      return (
        (s = s.length > 1 ? O.unique(s) : s),
        this.pushStack(s, "closest", e)
      );
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? O.inArray(this[0], O(e))
          : O.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
          ? this.prevAll().length
          : -1;
    },
    add: function (e, t) {
      var i =
          "string" == typeof e
            ? O(e, t)
            : O.makeArray(e && e.nodeType ? [e] : e),
        n = O.merge(this.get(), i);
      return this.pushStack(l(i[0]) || l(n[0]) ? n : O.unique(n));
    },
    andSelf: function () {
      return this.add(this.prevObject);
    },
  }),
    O.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return O.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, i) {
          return O.dir(e, "parentNode", i);
        },
        next: function (e) {
          return O.nth(e, 2, "nextSibling");
        },
        prev: function (e) {
          return O.nth(e, 2, "previousSibling");
        },
        nextAll: function (e) {
          return O.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return O.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, i) {
          return O.dir(e, "nextSibling", i);
        },
        prevUntil: function (e, t, i) {
          return O.dir(e, "previousSibling", i);
        },
        siblings: function (e) {
          return O.sibling(e.parentNode.firstChild, e);
        },
        children: function (e) {
          return O.sibling(e.firstChild);
        },
        contents: function (e) {
          return O.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : O.makeArray(e.childNodes);
        },
      },
      function (e, t) {
        O.fn[e] = function (i, n) {
          var s = O.map(this, t, i);
          return (
            le.test(e) || (n = i),
            n && "string" == typeof n && (s = O.filter(n, s)),
            (s = this.length > 1 && !fe[e] ? O.unique(s) : s),
            (this.length > 1 || ue.test(n)) && ce.test(e) && (s = s.reverse()),
            this.pushStack(s, e, de.call(arguments).join(","))
          );
        };
      },
    ),
    O.extend({
      filter: function (e, t, i) {
        return (
          i && (e = ":not(" + e + ")"),
          1 === t.length
            ? O.find.matchesSelector(t[0], e)
              ? [t[0]]
              : []
            : O.find.matches(e, t)
        );
      },
      dir: function (e, i, n) {
        for (
          var s = [], o = e[i];
          o && 9 !== o.nodeType && (n === t || 1 !== o.nodeType || !O(o).is(n));
        )
          (1 === o.nodeType && s.push(o), (o = o[i]));
        return s;
      },
      nth: function (e, t, i) {
        t = t || 1;
        for (var n = 0; e && (1 !== e.nodeType || ++n !== t); e = e[i]);
        return e;
      },
      sibling: function (e, t) {
        for (var i = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && i.push(e);
        return i;
      },
    }));
  var me =
      "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    ge = / jQuery\d+="(?:\d+|null)"/g,
    ve = /^\s+/,
    ye =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    be = /<([\w:]+)/,
    we = /<tbody/i,
    xe = /<|&#?\w+;/,
    _e = /<(?:script|style)/i,
    ke = /<(?:script|object|embed|option|style)/i,
    Ce = new RegExp("<(?:" + me + ")", "i"),
    Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Se = /\/(java|ecma)script/i,
    De = /^\s*<!(?:\[CDATA\[|\-\-)/,
    Ee = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""],
    },
    Ie = u(M);
  ((Ee.optgroup = Ee.option),
    (Ee.tbody = Ee.tfoot = Ee.colgroup = Ee.caption = Ee.thead),
    (Ee.th = Ee.td),
    O.support.htmlSerialize || (Ee._default = [1, "div<div>", "</div>"]),
    O.fn.extend({
      text: function (e) {
        return O.isFunction(e)
          ? this.each(function (t) {
              var i = O(this);
              i.text(e.call(this, t, i.text()));
            })
          : "object" != typeof e && e !== t
            ? this.empty().append(
                ((this[0] && this[0].ownerDocument) || M).createTextNode(e),
              )
            : O.text(this);
      },
      wrapAll: function (e) {
        if (O.isFunction(e))
          return this.each(function (t) {
            O(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = O(e, this[0].ownerDocument).eq(0).clone(!0);
          (this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;
                )
                  e = e.firstChild;
                return e;
              })
              .append(this));
        }
        return this;
      },
      wrapInner: function (e) {
        return O.isFunction(e)
          ? this.each(function (t) {
              O(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = O(this),
                i = t.contents();
              i.length ? i.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = O.isFunction(e);
        return this.each(function (i) {
          O(this).wrapAll(t ? e.call(this, i) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            O.nodeName(this, "body") || O(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (e) {
          1 === this.nodeType && this.appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (e) {
          1 === this.nodeType && this.insertBefore(e, this.firstChild);
        });
      },
      before: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (e) {
            this.parentNode.insertBefore(e, this);
          });
        if (arguments.length) {
          var e = O.clean(arguments);
          return (
            e.push.apply(e, this.toArray()),
            this.pushStack(e, "before", arguments)
          );
        }
      },
      after: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (e) {
            this.parentNode.insertBefore(e, this.nextSibling);
          });
        if (arguments.length) {
          var e = this.pushStack(this, "after", arguments);
          return (e.push.apply(e, O.clean(arguments)), e);
        }
      },
      remove: function (e, t) {
        for (var i, n = 0; null != (i = this[n]); n++)
          (e && !O.filter(e, [i]).length) ||
            (t ||
              1 !== i.nodeType ||
              (O.cleanData(i.getElementsByTagName("*")), O.cleanData([i])),
            i.parentNode && i.parentNode.removeChild(i));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          for (
            1 === e.nodeType && O.cleanData(e.getElementsByTagName("*"));
            e.firstChild;
          )
            e.removeChild(e.firstChild);
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return O.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        if (e === t)
          return this[0] && 1 === this[0].nodeType
            ? this[0].innerHTML.replace(ge, "")
            : null;
        if (
          "string" != typeof e ||
          _e.test(e) ||
          (!O.support.leadingWhitespace && ve.test(e)) ||
          Ee[(be.exec(e) || ["", ""])[1].toLowerCase()]
        )
          O.isFunction(e)
            ? this.each(function (t) {
                var i = O(this);
                i.html(e.call(this, t, i.html()));
              })
            : this.empty().append(e);
        else {
          e = e.replace(ye, "<$1></$2>");
          try {
            for (var i = 0, n = this.length; i < n; i++)
              1 === this[i].nodeType &&
                (O.cleanData(this[i].getElementsByTagName("*")),
                (this[i].innerHTML = e));
          } catch (t) {
            this.empty().append(e);
          }
        }
        return this;
      },
      replaceWith: function (e) {
        return this[0] && this[0].parentNode
          ? O.isFunction(e)
            ? this.each(function (t) {
                var i = O(this),
                  n = i.html();
                i.replaceWith(e.call(this, t, n));
              })
            : ("string" != typeof e && (e = O(e).detach()),
              this.each(function () {
                var t = this.nextSibling,
                  i = this.parentNode;
                (O(this).remove(), t ? O(t).before(e) : O(i).append(e));
              }))
          : this.length
            ? this.pushStack(O(O.isFunction(e) ? e() : e), "replaceWith", e)
            : this;
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, i, n) {
        var s,
          o,
          a,
          r,
          l = e[0],
          c = [];
        if (
          !O.support.checkClone &&
          3 === arguments.length &&
          "string" == typeof l &&
          Te.test(l)
        )
          return this.each(function () {
            O(this).domManip(e, i, n, !0);
          });
        if (O.isFunction(l))
          return this.each(function (s) {
            var o = O(this);
            ((e[0] = l.call(this, s, i ? o.html() : t)), o.domManip(e, i, n));
          });
        if (this[0]) {
          if (
            ((r = l && l.parentNode),
            (s =
              O.support.parentNode &&
              r &&
              11 === r.nodeType &&
              r.childNodes.length === this.length
                ? { fragment: r }
                : O.buildFragment(e, this, c)),
            (a = s.fragment),
            (o = 1 === a.childNodes.length ? (a = a.firstChild) : a.firstChild))
          ) {
            i = i && O.nodeName(o, "tr");
            for (var u = 0, d = this.length, p = d - 1; u < d; u++)
              n.call(
                i ? h(this[u], o) : this[u],
                s.cacheable || (d > 1 && u < p) ? O.clone(a, !0, !0) : a,
              );
          }
          c.length && O.each(c, y);
        }
        return this;
      },
    }),
    (O.buildFragment = function (e, t, i) {
      var n,
        s,
        o,
        a,
        r = e[0];
      return (
        t && t[0] && (a = t[0].ownerDocument || t[0]),
        a.createDocumentFragment || (a = M),
        !(
          1 === e.length &&
          "string" == typeof r &&
          r.length < 512 &&
          a === M &&
          "<" === r.charAt(0)
        ) ||
          ke.test(r) ||
          (!O.support.checkClone && Te.test(r)) ||
          (!O.support.html5Clone && Ce.test(r)) ||
          ((s = !0), (o = O.fragments[r]) && 1 !== o && (n = o)),
        n || ((n = a.createDocumentFragment()), O.clean(e, a, n, i)),
        s && (O.fragments[r] = o ? n : 1),
        { fragment: n, cacheable: s }
      );
    }),
    (O.fragments = {}),
    O.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        O.fn[e] = function (i) {
          var n = [],
            s = O(i),
            o = 1 === this.length && this[0].parentNode;
          if (
            o &&
            11 === o.nodeType &&
            1 === o.childNodes.length &&
            1 === s.length
          )
            return (s[t](this[0]), this);
          for (var a = 0, r = s.length; a < r; a++) {
            var l = (a > 0 ? this.clone(!0) : this).get();
            (O(s[a])[t](l), (n = n.concat(l)));
          }
          return this.pushStack(n, e, s.selector);
        };
      },
    ),
    O.extend({
      clone: function (e, t, i) {
        var n,
          s,
          o,
          a =
            O.support.html5Clone || !Ce.test("<" + e.nodeName)
              ? e.cloneNode(!0)
              : v(e);
        if (
          !(
            (O.support.noCloneEvent && O.support.noCloneChecked) ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            O.isXMLDoc(e)
          )
        )
          for (p(e, a), n = f(e), s = f(a), o = 0; n[o]; ++o)
            s[o] && p(n[o], s[o]);
        if (t && (d(e, a), i))
          for (n = f(e), s = f(a), o = 0; n[o]; ++o) d(n[o], s[o]);
        return ((n = s = null), a);
      },
      clean: function (e, t, i, n) {
        var s;
        ((t = t || M),
          "undefined" == typeof t.createElement &&
            (t = t.ownerDocument || (t[0] && t[0].ownerDocument) || M));
        for (var o, a, r = [], l = 0; null != (a = e[l]); l++)
          if (("number" == typeof a && (a += ""), a)) {
            if ("string" == typeof a)
              if (xe.test(a)) {
                a = a.replace(ye, "<$1></$2>");
                var c = (be.exec(a) || ["", ""])[1].toLowerCase(),
                  h = Ee[c] || Ee._default,
                  d = h[0],
                  p = t.createElement("div");
                for (
                  t === M ? Ie.appendChild(p) : u(t).appendChild(p),
                    p.innerHTML = h[1] + a + h[2];
                  d--;
                )
                  p = p.lastChild;
                if (!O.support.tbody) {
                  var f = we.test(a),
                    m =
                      "table" !== c || f
                        ? "<table>" !== h[1] || f
                          ? []
                          : p.childNodes
                        : p.firstChild && p.firstChild.childNodes;
                  for (o = m.length - 1; o >= 0; --o)
                    O.nodeName(m[o], "tbody") &&
                      !m[o].childNodes.length &&
                      m[o].parentNode.removeChild(m[o]);
                }
                (!O.support.leadingWhitespace &&
                  ve.test(a) &&
                  p.insertBefore(t.createTextNode(ve.exec(a)[0]), p.firstChild),
                  (a = p.childNodes));
              } else a = t.createTextNode(a);
            var v;
            if (!O.support.appendChecked)
              if (a[0] && "number" == typeof (v = a.length))
                for (o = 0; o < v; o++) g(a[o]);
              else g(a);
            a.nodeType ? r.push(a) : (r = O.merge(r, a));
          }
        if (i)
          for (
            s = function (e) {
              return !e.type || Se.test(e.type);
            },
              l = 0;
            r[l];
            l++
          )
            if (
              !n ||
              !O.nodeName(r[l], "script") ||
              (r[l].type && "text/javascript" !== r[l].type.toLowerCase())
            ) {
              if (1 === r[l].nodeType) {
                var y = O.grep(r[l].getElementsByTagName("script"), s);
                r.splice.apply(r, [l + 1, 0].concat(y));
              }
              i.appendChild(r[l]);
            } else
              n.push(
                r[l].parentNode ? r[l].parentNode.removeChild(r[l]) : r[l],
              );
        return r;
      },
      cleanData: function (e) {
        for (
          var t,
            i,
            n,
            s = O.cache,
            o = O.event.special,
            a = O.support.deleteExpando,
            r = 0;
          null != (n = e[r]);
          r++
        )
          if (
            (!n.nodeName || !O.noData[n.nodeName.toLowerCase()]) &&
            (i = n[O.expando])
          ) {
            if ((t = s[i]) && t.events) {
              for (var l in t.events)
                o[l] ? O.event.remove(n, l) : O.removeEvent(n, l, t.handle);
              t.handle && (t.handle.elem = null);
            }
            (a
              ? delete n[O.expando]
              : n.removeAttribute && n.removeAttribute(O.expando),
              delete s[i]);
          }
      },
    }));
  var Ne,
    Ae,
    Pe,
    Me = /alpha\([^)]*\)/i,
    $e = /opacity=([^)]*)/,
    Fe = /([A-Z]|^ms)/g,
    Oe = /^-?\d+(?:px)?$/i,
    He = /^-?\d/,
    je = /^([\-+])=([\-+.\de]+)/,
    Le = { position: "absolute", visibility: "hidden", display: "block" },
    ze = ["Left", "Right"],
    Re = ["Top", "Bottom"];
  ((O.fn.css = function (e, i) {
    return 2 === arguments.length && i === t
      ? this
      : O.access(this, e, i, !0, function (e, i, n) {
          return n !== t ? O.style(e, i, n) : O.css(e, i);
        });
  }),
    O.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var i = Ne(e, "opacity", "opacity");
              return "" === i ? "1" : i;
            }
            return e.style.opacity;
          },
        },
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: O.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (e, i, n, s) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
            a,
            r = O.camelCase(i),
            l = e.style,
            c = O.cssHooks[r];
          if (((i = O.cssProps[r] || r), n === t))
            return c && "get" in c && (o = c.get(e, !1, s)) !== t ? o : l[i];
          if (
            !((a = typeof n),
            "string" === a &&
              (o = je.exec(n)) &&
              ((n = +(o[1] + 1) * +o[2] + parseFloat(O.css(e, i))),
              (a = "number")),
            null == n ||
              ("number" === a && isNaN(n)) ||
              ("number" !== a || O.cssNumber[r] || (n += "px"),
              c && "set" in c && (n = c.set(e, n)) === t))
          )
            try {
              l[i] = n;
            } catch (e) {}
        }
      },
      css: function (e, i, n) {
        var s, o;
        return (
          (i = O.camelCase(i)),
          (o = O.cssHooks[i]),
          (i = O.cssProps[i] || i),
          "cssFloat" === i && (i = "float"),
          o && "get" in o && (s = o.get(e, !0, n)) !== t
            ? s
            : Ne
              ? Ne(e, i)
              : void 0
        );
      },
      swap: function (e, t, i) {
        var n = {};
        for (var s in t) ((n[s] = e.style[s]), (e.style[s] = t[s]));
        i.call(e);
        for (s in t) e.style[s] = n[s];
      },
    }),
    (O.curCSS = O.css),
    O.each(["height", "width"], function (e, t) {
      O.cssHooks[t] = {
        get: function (e, i, n) {
          var s;
          if (i)
            return 0 !== e.offsetWidth
              ? b(e, t, n)
              : (O.swap(e, Le, function () {
                  s = b(e, t, n);
                }),
                s);
        },
        set: function (e, t) {
          return Oe.test(t)
            ? (t = parseFloat(t)) >= 0
              ? t + "px"
              : void 0
            : t;
        },
      };
    }),
    O.support.opacity ||
      (O.cssHooks.opacity = {
        get: function (e, t) {
          return $e.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) ||
              "",
          )
            ? parseFloat(RegExp.$1) / 100 + ""
            : t
              ? "1"
              : "";
        },
        set: function (e, t) {
          var i = e.style,
            n = e.currentStyle,
            s = O.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            o = (n && n.filter) || i.filter || "";
          ((i.zoom = 1),
            (t >= 1 &&
              "" === O.trim(o.replace(Me, "")) &&
              (i.removeAttribute("filter"), n && !n.filter)) ||
              (i.filter = Me.test(o) ? o.replace(Me, s) : o + " " + s));
        },
      }),
    O(function () {
      O.support.reliableMarginRight ||
        (O.cssHooks.marginRight = {
          get: function (e, t) {
            var i;
            return (
              O.swap(e, { display: "inline-block" }, function () {
                i = t
                  ? Ne(e, "margin-right", "marginRight")
                  : e.style.marginRight;
              }),
              i
            );
          },
        });
    }),
    M.defaultView &&
      M.defaultView.getComputedStyle &&
      (Ae = function (e, t) {
        var i, n, s;
        return (
          (t = t.replace(Fe, "-$1").toLowerCase()),
          (n = e.ownerDocument.defaultView) &&
            (s = n.getComputedStyle(e, null)) &&
            ("" !== (i = s.getPropertyValue(t)) ||
              O.contains(e.ownerDocument.documentElement, e) ||
              (i = O.style(e, t))),
          i
        );
      }),
    M.documentElement.currentStyle &&
      (Pe = function (e, t) {
        var i,
          n,
          s,
          o = e.currentStyle && e.currentStyle[t],
          a = e.style;
        return (
          null === o && a && (s = a[t]) && (o = s),
          !Oe.test(o) &&
            He.test(o) &&
            ((i = a.left),
            (n = e.runtimeStyle && e.runtimeStyle.left),
            n && (e.runtimeStyle.left = e.currentStyle.left),
            (a.left = "fontSize" === t ? "1em" : o || 0),
            (o = a.pixelLeft + "px"),
            (a.left = i),
            n && (e.runtimeStyle.left = n)),
          "" === o ? "auto" : o
        );
      }),
    (Ne = Ae || Pe),
    O.expr &&
      O.expr.filters &&
      ((O.expr.filters.hidden = function (e) {
        var t = e.offsetWidth,
          i = e.offsetHeight;
        return (
          (0 === t && 0 === i) ||
          (!O.support.reliableHiddenOffsets &&
            "none" === ((e.style && e.style.display) || O.css(e, "display")))
        );
      }),
      (O.expr.filters.visible = function (e) {
        return !O.expr.filters.hidden(e);
      })));
  var We,
    Be,
    qe = /%20/g,
    Ke = /\[\]$/,
    Ye = /\r?\n/g,
    Ue = /#.*$/,
    Xe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Ve =
      /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    Qe = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    Ge = /^(?:GET|HEAD)$/,
    Je = /^\/\//,
    Ze = /\?/,
    et = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    tt = /^(?:select|textarea)/i,
    it = /\s+/,
    nt = /([?&])_=[^&]*/,
    st = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    ot = O.fn.load,
    at = {},
    rt = {},
    lt = ["*/"] + ["*"];
  try {
    We = F.href;
  } catch (e) {
    ((We = M.createElement("a")), (We.href = ""), (We = We.href));
  }
  ((Be = st.exec(We.toLowerCase()) || []),
    O.fn.extend({
      load: function (e, i, n) {
        if ("string" != typeof e && ot) return ot.apply(this, arguments);
        if (!this.length) return this;
        var s = e.indexOf(" ");
        if (s >= 0) {
          var o = e.slice(s, e.length);
          e = e.slice(0, s);
        }
        var a = "GET";
        i &&
          (O.isFunction(i)
            ? ((n = i), (i = t))
            : "object" == typeof i &&
              ((i = O.param(i, O.ajaxSettings.traditional)), (a = "POST")));
        var r = this;
        return (
          O.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: i,
            complete: function (e, t, i) {
              ((i = e.responseText),
                e.isResolved() &&
                  (e.done(function (e) {
                    i = e;
                  }),
                  r.html(o ? O("<div>").append(i.replace(et, "")).find(o) : i)),
                n && r.each(n, [i, t, e]));
            },
          }),
          this
        );
      },
      serialize: function () {
        return O.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          return this.elements ? O.makeArray(this.elements) : this;
        })
          .filter(function () {
            return (
              this.name &&
              !this.disabled &&
              (this.checked || tt.test(this.nodeName) || Ve.test(this.type))
            );
          })
          .map(function (e, t) {
            var i = O(this).val();
            return null == i
              ? null
              : O.isArray(i)
                ? O.map(i, function (e) {
                    return { name: t.name, value: e.replace(Ye, "\r\n") };
                  })
                : { name: t.name, value: i.replace(Ye, "\r\n") };
          })
          .get();
      },
    }),
    O.each(
      "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
        " ",
      ),
      function (e, t) {
        O.fn[t] = function (e) {
          return this.on(t, e);
        };
      },
    ),
    O.each(["get", "post"], function (e, i) {
      O[i] = function (e, n, s, o) {
        return (
          O.isFunction(n) && ((o = o || s), (s = n), (n = t)),
          O.ajax({ type: i, url: e, data: n, success: s, dataType: o })
        );
      };
    }),
    O.extend({
      getScript: function (e, i) {
        return O.get(e, t, i, "script");
      },
      getJSON: function (e, t, i) {
        return O.get(e, t, i, "json");
      },
      ajaxSetup: function (e, t) {
        return (
          t ? _(e, O.ajaxSettings) : ((t = e), (e = O.ajaxSettings)),
          _(e, t),
          e
        );
      },
      ajaxSettings: {
        url: We,
        isLocal: Qe.test(Be[1]),
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded",
        processData: !0,
        async: !0,
        accepts: {
          xml: "application/xml, text/xml",
          html: "text/html",
          text: "text/plain",
          json: "application/json, text/javascript",
          "*": lt,
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: {
          "* text": e.String,
          "text html": !0,
          "text json": O.parseJSON,
          "text xml": O.parseXML,
        },
        flatOptions: { context: !0, url: !0 },
      },
      ajaxPrefilter: w(at),
      ajaxTransport: w(rt),
      ajax: function (e, i) {
        function n(e, i, n, a) {
          if (2 !== w) {
            ((w = 2),
              l && clearTimeout(l),
              (r = t),
              (o = a || ""),
              (_.readyState = e > 0 ? 4 : 0));
            var c,
              h,
              y,
              b,
              x,
              k = i,
              S = n ? C(d, _, n) : t;
            if ((e >= 200 && e < 300) || 304 === e)
              if (
                (d.ifModified &&
                  ((b = _.getResponseHeader("Last-Modified")) &&
                    (O.lastModified[s] = b),
                  (x = _.getResponseHeader("Etag")) && (O.etag[s] = x)),
                304 === e)
              )
                ((k = "notmodified"), (c = !0));
              else
                try {
                  ((h = T(d, S)), (k = "success"), (c = !0));
                } catch (e) {
                  ((k = "parsererror"), (y = e));
                }
            else ((y = k), (k && !e) || ((k = "error"), e < 0 && (e = 0)));
            ((_.status = e),
              (_.statusText = "" + (i || k)),
              c ? m.resolveWith(p, [h, k, _]) : m.rejectWith(p, [_, k, y]),
              _.statusCode(v),
              (v = t),
              u &&
                f.trigger("ajax" + (c ? "Success" : "Error"), [
                  _,
                  d,
                  c ? h : y,
                ]),
              g.fireWith(p, [_, k]),
              u &&
                (f.trigger("ajaxComplete", [_, d]),
                --O.active || O.event.trigger("ajaxStop")));
          }
        }
        ("object" == typeof e && ((i = e), (e = t)), (i = i || {}));
        var s,
          o,
          a,
          r,
          l,
          c,
          u,
          h,
          d = O.ajaxSetup({}, i),
          p = d.context || d,
          f = p !== d && (p.nodeType || p instanceof O) ? O(p) : O.event,
          m = O.Deferred(),
          g = O.Callbacks("once memory"),
          v = d.statusCode || {},
          y = {},
          b = {},
          w = 0,
          _ = {
            readyState: 0,
            setRequestHeader: function (e, t) {
              if (!w) {
                var i = e.toLowerCase();
                ((e = b[i] = b[i] || e), (y[e] = t));
              }
              return this;
            },
            getAllResponseHeaders: function () {
              return 2 === w ? o : null;
            },
            getResponseHeader: function (e) {
              var i;
              if (2 === w) {
                if (!a)
                  for (a = {}; (i = Xe.exec(o)); ) a[i[1].toLowerCase()] = i[2];
                i = a[e.toLowerCase()];
              }
              return i === t ? null : i;
            },
            overrideMimeType: function (e) {
              return (w || (d.mimeType = e), this);
            },
            abort: function (e) {
              return ((e = e || "abort"), r && r.abort(e), n(0, e), this);
            },
          };
        if (
          (m.promise(_),
          (_.success = _.done),
          (_.error = _.fail),
          (_.complete = g.add),
          (_.statusCode = function (e) {
            if (e) {
              var t;
              if (w < 2) for (t in e) v[t] = [v[t], e[t]];
              else ((t = e[_.status]), _.then(t, t));
            }
            return this;
          }),
          (d.url = ((e || d.url) + "")
            .replace(Ue, "")
            .replace(Je, Be[1] + "//")),
          (d.dataTypes = O.trim(d.dataType || "*")
            .toLowerCase()
            .split(it)),
          null == d.crossDomain &&
            ((c = st.exec(d.url.toLowerCase())),
            (d.crossDomain = !(
              !c ||
              (c[1] == Be[1] &&
                c[2] == Be[2] &&
                (c[3] || ("http:" === c[1] ? 80 : 443)) ==
                  (Be[3] || ("http:" === Be[1] ? 80 : 443)))
            ))),
          d.data &&
            d.processData &&
            "string" != typeof d.data &&
            (d.data = O.param(d.data, d.traditional)),
          x(at, d, i, _),
          2 === w)
        )
          return !1;
        if (
          ((u = d.global),
          (d.type = d.type.toUpperCase()),
          (d.hasContent = !Ge.test(d.type)),
          u && 0 == O.active++ && O.event.trigger("ajaxStart"),
          !d.hasContent &&
            (d.data &&
              ((d.url += (Ze.test(d.url) ? "&" : "?") + d.data), delete d.data),
            (s = d.url),
            !1 === d.cache))
        ) {
          var k = O.now(),
            S = d.url.replace(nt, "$1_=" + k);
          d.url =
            S + (S === d.url ? (Ze.test(d.url) ? "&" : "?") + "_=" + k : "");
        }
        (((d.data && d.hasContent && !1 !== d.contentType) || i.contentType) &&
          _.setRequestHeader("Content-Type", d.contentType),
          d.ifModified &&
            ((s = s || d.url),
            O.lastModified[s] &&
              _.setRequestHeader("If-Modified-Since", O.lastModified[s]),
            O.etag[s] && _.setRequestHeader("If-None-Match", O.etag[s])),
          _.setRequestHeader(
            "Accept",
            d.dataTypes[0] && d.accepts[d.dataTypes[0]]
              ? d.accepts[d.dataTypes[0]] +
                  ("*" !== d.dataTypes[0] ? ", " + lt + "; q=0.01" : "")
              : d.accepts["*"],
          ));
        for (h in d.headers) _.setRequestHeader(h, d.headers[h]);
        if (d.beforeSend && (!1 === d.beforeSend.call(p, _, d) || 2 === w))
          return (_.abort(), !1);
        for (h in { success: 1, error: 1, complete: 1 }) _[h](d[h]);
        if ((r = x(rt, d, i, _))) {
          ((_.readyState = 1),
            u && f.trigger("ajaxSend", [_, d]),
            d.async &&
              d.timeout > 0 &&
              (l = setTimeout(function () {
                _.abort("timeout");
              }, d.timeout)));
          try {
            ((w = 1), r.send(y, n));
          } catch (e) {
            if (!(w < 2)) throw e;
            n(-1, e);
          }
        } else n(-1, "No Transport");
        return _;
      },
      param: function (e, i) {
        var n = [],
          s = function (e, t) {
            ((t = O.isFunction(t) ? t() : t),
              (n[n.length] =
                encodeURIComponent(e) + "=" + encodeURIComponent(t)));
          };
        if (
          (i === t && (i = O.ajaxSettings.traditional),
          O.isArray(e) || (e.jquery && !O.isPlainObject(e)))
        )
          O.each(e, function () {
            s(this.name, this.value);
          });
        else for (var o in e) k(o, e[o], i, s);
        return n.join("&").replace(qe, "+");
      },
    }),
    O.extend({ active: 0, lastModified: {}, etag: {} }));
  var ct = O.now(),
    ut = /(\=)\?(&|$)|\?\?/i;
  (O.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      return O.expando + "_" + ct++;
    },
  }),
    O.ajaxPrefilter("json jsonp", function (t, i, n) {
      var s =
        "application/x-www-form-urlencoded" === t.contentType &&
        "string" == typeof t.data;
      if (
        "jsonp" === t.dataTypes[0] ||
        (!1 !== t.jsonp && (ut.test(t.url) || (s && ut.test(t.data))))
      ) {
        var o,
          a = (t.jsonpCallback = O.isFunction(t.jsonpCallback)
            ? t.jsonpCallback()
            : t.jsonpCallback),
          r = e[a],
          l = t.url,
          c = t.data,
          u = "$1" + a + "$2";
        return (
          !1 !== t.jsonp &&
            ((l = l.replace(ut, u)),
            t.url === l &&
              (s && (c = c.replace(ut, u)),
              t.data === c &&
                (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + a))),
          (t.url = l),
          (t.data = c),
          (e[a] = function (e) {
            o = [e];
          }),
          n.always(function () {
            ((e[a] = r), o && O.isFunction(r) && e[a](o[0]));
          }),
          (t.converters["script json"] = function () {
            return (o || O.error(a + " was not called"), o[0]);
          }),
          (t.dataTypes[0] = "json"),
          "script"
        );
      }
    }),
    O.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /javascript|ecmascript/ },
      converters: {
        "text script": function (e) {
          return (O.globalEval(e), e);
        },
      },
    }),
    O.ajaxPrefilter("script", function (e) {
      (e.cache === t && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1)));
    }),
    O.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var i,
          n = M.head || M.getElementsByTagName("head")[0] || M.documentElement;
        return {
          send: function (s, o) {
            ((i = M.createElement("script")),
              (i.async = "async"),
              e.scriptCharset && (i.charset = e.scriptCharset),
              (i.src = e.url),
              (i.onload = i.onreadystatechange =
                function (e, s) {
                  (s ||
                    !i.readyState ||
                    /loaded|complete/.test(i.readyState)) &&
                    ((i.onload = i.onreadystatechange = null),
                    n && i.parentNode && n.removeChild(i),
                    (i = t),
                    s || o(200, "success"));
                }),
              n.insertBefore(i, n.firstChild));
          },
          abort: function () {
            i && i.onload(0, 1);
          },
        };
      }
    }));
  var ht,
    dt =
      !!e.ActiveXObject &&
      function () {
        for (var e in ht) ht[e](0, 1);
      },
    pt = 0;
  ((O.ajaxSettings.xhr = e.ActiveXObject
    ? function () {
        return (!this.isLocal && S()) || D();
      }
    : S),
    (function (e) {
      O.extend(O.support, { ajax: !!e, cors: !!e && "withCredentials" in e });
    })(O.ajaxSettings.xhr()),
    O.support.ajax &&
      O.ajaxTransport(function (i) {
        if (!i.crossDomain || O.support.cors) {
          var n;
          return {
            send: function (s, o) {
              var a,
                r,
                l = i.xhr();
              if (
                (i.username
                  ? l.open(i.type, i.url, i.async, i.username, i.password)
                  : l.open(i.type, i.url, i.async),
                i.xhrFields)
              )
                for (r in i.xhrFields) l[r] = i.xhrFields[r];
              (i.mimeType &&
                l.overrideMimeType &&
                l.overrideMimeType(i.mimeType),
                i.crossDomain ||
                  s["X-Requested-With"] ||
                  (s["X-Requested-With"] = "XMLHttpRequest"));
              try {
                for (r in s) l.setRequestHeader(r, s[r]);
              } catch (e) {}
              (l.send((i.hasContent && i.data) || null),
                (n = function (e, s) {
                  var r, c, u, h, d;
                  try {
                    if (n && (s || 4 === l.readyState))
                      if (
                        ((n = t),
                        a &&
                          ((l.onreadystatechange = O.noop), dt && delete ht[a]),
                        s)
                      )
                        4 !== l.readyState && l.abort();
                      else {
                        ((r = l.status),
                          (u = l.getAllResponseHeaders()),
                          (h = {}),
                          (d = l.responseXML),
                          d && d.documentElement && (h.xml = d),
                          (h.text = l.responseText));
                        try {
                          c = l.statusText;
                        } catch (e) {
                          c = "";
                        }
                        r || !i.isLocal || i.crossDomain
                          ? 1223 === r && (r = 204)
                          : (r = h.text ? 200 : 404);
                      }
                  } catch (e) {
                    s || o(-1, e);
                  }
                  h && o(r, c, h, u);
                }),
                i.async && 4 !== l.readyState
                  ? ((a = ++pt),
                    dt && (ht || ((ht = {}), O(e).unload(dt)), (ht[a] = n)),
                    (l.onreadystatechange = n))
                  : n());
            },
            abort: function () {
              n && n(0, 1);
            },
          };
        }
      }));
  var ft,
    mt,
    gt,
    vt,
    yt = {},
    bt = /^(?:toggle|show|hide)$/,
    wt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    xt = [
      ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
      ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
      ["opacity"],
    ];
  (O.fn.extend({
    show: function (e, t, i) {
      var n, s;
      if (e || 0 === e) return this.animate(N("show", 3), e, t, i);
      for (var o = 0, a = this.length; o < a; o++)
        ((n = this[o]),
          n.style &&
            ((s = n.style.display),
            O._data(n, "olddisplay") ||
              "none" !== s ||
              (s = n.style.display = ""),
            "" === s &&
              "none" === O.css(n, "display") &&
              O._data(n, "olddisplay", A(n.nodeName))));
      for (o = 0; o < a; o++)
        ((n = this[o]),
          n.style &&
            (("" !== (s = n.style.display) && "none" !== s) ||
              (n.style.display = O._data(n, "olddisplay") || "")));
      return this;
    },
    hide: function (e, t, i) {
      if (e || 0 === e) return this.animate(N("hide", 3), e, t, i);
      for (var n, s, o = 0, a = this.length; o < a; o++)
        ((n = this[o]),
          n.style &&
            ("none" === (s = O.css(n, "display")) ||
              O._data(n, "olddisplay") ||
              O._data(n, "olddisplay", s)));
      for (o = 0; o < a; o++) this[o].style && (this[o].style.display = "none");
      return this;
    },
    _toggle: O.fn.toggle,
    toggle: function (e, t, i) {
      var n = "boolean" == typeof e;
      return (
        O.isFunction(e) && O.isFunction(t)
          ? this._toggle.apply(this, arguments)
          : null == e || n
            ? this.each(function () {
                var t = n ? e : O(this).is(":hidden");
                O(this)[t ? "show" : "hide"]();
              })
            : this.animate(N("toggle", 3), e, t, i),
        this
      );
    },
    fadeTo: function (e, t, i, n) {
      return this.filter(":hidden")
        .css("opacity", 0)
        .show()
        .end()
        .animate({ opacity: t }, e, i, n);
    },
    animate: function (e, t, i, n) {
      function s() {
        !1 === o.queue && O._mark(this);
        var t,
          i,
          n,
          s,
          a,
          r,
          l,
          c,
          u,
          h = O.extend({}, o),
          d = 1 === this.nodeType,
          p = d && O(this).is(":hidden");
        h.animatedProperties = {};
        for (n in e) {
          if (
            ((t = O.camelCase(n)),
            n !== t && ((e[t] = e[n]), delete e[n]),
            (i = e[t]),
            O.isArray(i)
              ? ((h.animatedProperties[t] = i[1]), (i = e[t] = i[0]))
              : (h.animatedProperties[t] =
                  (h.specialEasing && h.specialEasing[t]) ||
                  h.easing ||
                  "swing"),
            ("hide" === i && p) || ("show" === i && !p))
          )
            return h.complete.call(this);
          !d ||
            ("height" !== t && "width" !== t) ||
            ((h.overflow = [
              this.style.overflow,
              this.style.overflowX,
              this.style.overflowY,
            ]),
            "inline" === O.css(this, "display") &&
              "none" === O.css(this, "float") &&
              (O.support.inlineBlockNeedsLayout && "inline" !== A(this.nodeName)
                ? (this.style.zoom = 1)
                : (this.style.display = "inline-block")));
        }
        null != h.overflow && (this.style.overflow = "hidden");
        for (n in e)
          ((s = new O.fx(this, h, n)),
            (i = e[n]),
            bt.test(i)
              ? ((u =
                  O._data(this, "toggle" + n) ||
                  ("toggle" === i ? (p ? "show" : "hide") : 0)),
                u
                  ? (O._data(
                      this,
                      "toggle" + n,
                      "show" === u ? "hide" : "show",
                    ),
                    s[u]())
                  : s[i]())
              : ((a = wt.exec(i)),
                (r = s.cur()),
                a
                  ? ((l = parseFloat(a[2])),
                    (c = a[3] || (O.cssNumber[n] ? "" : "px")),
                    "px" !== c &&
                      (O.style(this, n, (l || 1) + c),
                      (r = ((l || 1) / s.cur()) * r),
                      O.style(this, n, r + c)),
                    a[1] && (l = ("-=" === a[1] ? -1 : 1) * l + r),
                    s.custom(r, l, c))
                  : s.custom(r, i, "")));
        return !0;
      }
      var o = O.speed(t, i, n);
      return O.isEmptyObject(e)
        ? this.each(o.complete, [!1])
        : ((e = O.extend({}, e)),
          !1 === o.queue ? this.each(s) : this.queue(o.queue, s));
    },
    stop: function (e, i, n) {
      return (
        "string" != typeof e && ((n = i), (i = e), (e = t)),
        i && !1 !== e && this.queue(e || "fx", []),
        this.each(function () {
          function t(e, t, i) {
            var s = t[i];
            (O.removeData(e, i, !0), s.stop(n));
          }
          var i,
            s = !1,
            o = O.timers,
            a = O._data(this);
          if ((n || O._unmark(!0, this), null == e))
            for (i in a)
              a[i] &&
                a[i].stop &&
                i.indexOf(".run") === i.length - 4 &&
                t(this, a, i);
          else a[(i = e + ".run")] && a[i].stop && t(this, a, i);
          for (i = o.length; i--; )
            o[i].elem !== this ||
              (null != e && o[i].queue !== e) ||
              (n ? o[i](!0) : o[i].saveState(), (s = !0), o.splice(i, 1));
          (n && s) || O.dequeue(this, e);
        })
      );
    },
  }),
    O.each(
      {
        slideDown: N("show", 1),
        slideUp: N("hide", 1),
        slideToggle: N("toggle", 1),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        O.fn[e] = function (e, i, n) {
          return this.animate(t, e, i, n);
        };
      },
    ),
    O.extend({
      speed: function (e, t, i) {
        var n =
          e && "object" == typeof e
            ? O.extend({}, e)
            : {
                complete: i || (!i && t) || (O.isFunction(e) && e),
                duration: e,
                easing: (i && t) || (t && !O.isFunction(t) && t),
              };
        return (
          (n.duration = O.fx.off
            ? 0
            : "number" == typeof n.duration
              ? n.duration
              : n.duration in O.fx.speeds
                ? O.fx.speeds[n.duration]
                : O.fx.speeds._default),
          (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
          (n.old = n.complete),
          (n.complete = function (e) {
            (O.isFunction(n.old) && n.old.call(this),
              n.queue ? O.dequeue(this, n.queue) : !1 !== e && O._unmark(this));
          }),
          n
        );
      },
      easing: {
        linear: function (e, t, i, n) {
          return i + n * e;
        },
        swing: function (e, t, i, n) {
          return (-Math.cos(e * Math.PI) / 2 + 0.5) * n + i;
        },
      },
      timers: [],
      fx: function (e, t, i) {
        ((this.options = t),
          (this.elem = e),
          (this.prop = i),
          (t.orig = t.orig || {}));
      },
    }),
    (O.fx.prototype = {
      update: function () {
        (this.options.step && this.options.step.call(this.elem, this.now, this),
          (O.fx.step[this.prop] || O.fx.step._default)(this));
      },
      cur: function () {
        if (
          null != this.elem[this.prop] &&
          (!this.elem.style || null == this.elem.style[this.prop])
        )
          return this.elem[this.prop];
        var e,
          t = O.css(this.elem, this.prop);
        return isNaN((e = parseFloat(t))) ? (t && "auto" !== t ? t : 0) : e;
      },
      custom: function (e, i, n) {
        function s(e) {
          return o.step(e);
        }
        var o = this,
          a = O.fx;
        ((this.startTime = vt || E()),
          (this.end = i),
          (this.now = this.start = e),
          (this.pos = this.state = 0),
          (this.unit = n || this.unit || (O.cssNumber[this.prop] ? "" : "px")),
          (s.queue = this.options.queue),
          (s.elem = this.elem),
          (s.saveState = function () {
            o.options.hide &&
              O._data(o.elem, "fxshow" + o.prop) === t &&
              O._data(o.elem, "fxshow" + o.prop, o.start);
          }),
          s() &&
            O.timers.push(s) &&
            !gt &&
            (gt = setInterval(a.tick, a.interval)));
      },
      show: function () {
        var e = O._data(this.elem, "fxshow" + this.prop);
        ((this.options.orig[this.prop] = e || O.style(this.elem, this.prop)),
          (this.options.show = !0),
          e !== t
            ? this.custom(this.cur(), e)
            : this.custom(
                "width" === this.prop || "height" === this.prop ? 1 : 0,
                this.cur(),
              ),
          O(this.elem).show());
      },
      hide: function () {
        ((this.options.orig[this.prop] =
          O._data(this.elem, "fxshow" + this.prop) ||
          O.style(this.elem, this.prop)),
          (this.options.hide = !0),
          this.custom(this.cur(), 0));
      },
      step: function (e) {
        var t,
          i,
          n,
          s = vt || E(),
          o = !0,
          a = this.elem,
          r = this.options;
        if (e || s >= r.duration + this.startTime) {
          ((this.now = this.end),
            (this.pos = this.state = 1),
            this.update(),
            (r.animatedProperties[this.prop] = !0));
          for (t in r.animatedProperties)
            !0 !== r.animatedProperties[t] && (o = !1);
          if (o) {
            if (
              (null == r.overflow ||
                O.support.shrinkWrapBlocks ||
                O.each(["", "X", "Y"], function (e, t) {
                  a.style["overflow" + t] = r.overflow[e];
                }),
              r.hide && O(a).hide(),
              r.hide || r.show)
            )
              for (t in r.animatedProperties)
                (O.style(a, t, r.orig[t]),
                  O.removeData(a, "fxshow" + t, !0),
                  O.removeData(a, "toggle" + t, !0));
            ((n = r.complete), n && ((r.complete = !1), n.call(a)));
          }
          return !1;
        }
        return (
          r.duration == Infinity
            ? (this.now = s)
            : ((i = s - this.startTime),
              (this.state = i / r.duration),
              (this.pos = O.easing[r.animatedProperties[this.prop]](
                this.state,
                i,
                0,
                1,
                r.duration,
              )),
              (this.now = this.start + (this.end - this.start) * this.pos)),
          this.update(),
          !0
        );
      },
    }),
    O.extend(O.fx, {
      tick: function () {
        for (var e, t = O.timers, i = 0; i < t.length; i++)
          (e = t[i])() || t[i] !== e || t.splice(i--, 1);
        t.length || O.fx.stop();
      },
      interval: 13,
      stop: function () {
        (clearInterval(gt), (gt = null));
      },
      speeds: { slow: 600, fast: 200, _default: 400 },
      step: {
        opacity: function (e) {
          O.style(e.elem, "opacity", e.now);
        },
        _default: function (e) {
          e.elem.style && null != e.elem.style[e.prop]
            ? (e.elem.style[e.prop] = e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    O.each(["width", "height"], function (e, t) {
      O.fx.step[t] = function (e) {
        O.style(e.elem, t, Math.max(0, e.now) + e.unit);
      };
    }),
    O.expr &&
      O.expr.filters &&
      (O.expr.filters.animated = function (e) {
        return O.grep(O.timers, function (t) {
          return e === t.elem;
        }).length;
      }));
  var _t = /^t(?:able|d|h)$/i,
    kt = /^(?:body|html)$/i;
  ("getBoundingClientRect" in M.documentElement
    ? (O.fn.offset = function (e) {
        var t,
          i = this[0];
        if (e)
          return this.each(function (t) {
            O.offset.setOffset(this, e, t);
          });
        if (!i || !i.ownerDocument) return null;
        if (i === i.ownerDocument.body) return O.offset.bodyOffset(i);
        try {
          t = i.getBoundingClientRect();
        } catch (e) {}
        var n = i.ownerDocument,
          s = n.documentElement;
        if (!t || !O.contains(s, i))
          return t ? { top: t.top, left: t.left } : { top: 0, left: 0 };
        var o = n.body,
          a = P(n),
          r = s.clientTop || o.clientTop || 0,
          l = s.clientLeft || o.clientLeft || 0,
          c =
            a.pageYOffset || (O.support.boxModel && s.scrollTop) || o.scrollTop,
          u =
            a.pageXOffset ||
            (O.support.boxModel && s.scrollLeft) ||
            o.scrollLeft;
        return { top: t.top + c - r, left: t.left + u - l };
      })
    : (O.fn.offset = function (e) {
        var t = this[0];
        if (e)
          return this.each(function (t) {
            O.offset.setOffset(this, e, t);
          });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return O.offset.bodyOffset(t);
        for (
          var i,
            n = t.offsetParent,
            s = t.ownerDocument,
            o = s.documentElement,
            a = s.body,
            r = s.defaultView,
            l = r ? r.getComputedStyle(t, null) : t.currentStyle,
            c = t.offsetTop,
            u = t.offsetLeft;
          (t = t.parentNode) &&
          t !== a &&
          t !== o &&
          (!O.support.fixedPosition || "fixed" !== l.position);
        )
          ((i = r ? r.getComputedStyle(t, null) : t.currentStyle),
            (c -= t.scrollTop),
            (u -= t.scrollLeft),
            t === n &&
              ((c += t.offsetTop),
              (u += t.offsetLeft),
              !O.support.doesNotAddBorder ||
                (O.support.doesAddBorderForTableAndCells &&
                  _t.test(t.nodeName)) ||
                ((c += parseFloat(i.borderTopWidth) || 0),
                (u += parseFloat(i.borderLeftWidth) || 0)),
              n,
              (n = t.offsetParent)),
            O.support.subtractsBorderForOverflowNotVisible &&
              "visible" !== i.overflow &&
              ((c += parseFloat(i.borderTopWidth) || 0),
              (u += parseFloat(i.borderLeftWidth) || 0)),
            (l = i));
        return (
          ("relative" !== l.position && "static" !== l.position) ||
            ((c += a.offsetTop), (u += a.offsetLeft)),
          O.support.fixedPosition &&
            "fixed" === l.position &&
            ((c += Math.max(o.scrollTop, a.scrollTop)),
            (u += Math.max(o.scrollLeft, a.scrollLeft))),
          { top: c, left: u }
        );
      }),
    (O.offset = {
      bodyOffset: function (e) {
        var t = e.offsetTop,
          i = e.offsetLeft;
        return (
          O.support.doesNotIncludeMarginInBodyOffset &&
            ((t += parseFloat(O.css(e, "marginTop")) || 0),
            (i += parseFloat(O.css(e, "marginLeft")) || 0)),
          { top: t, left: i }
        );
      },
      setOffset: function (e, t, i) {
        var n = O.css(e, "position");
        "static" === n && (e.style.position = "relative");
        var s,
          o,
          a = O(e),
          r = a.offset(),
          l = O.css(e, "top"),
          c = O.css(e, "left"),
          u =
            ("absolute" === n || "fixed" === n) &&
            O.inArray("auto", [l, c]) > -1,
          h = {},
          d = {};
        (u
          ? ((d = a.position()), (s = d.top), (o = d.left))
          : ((s = parseFloat(l) || 0), (o = parseFloat(c) || 0)),
          O.isFunction(t) && (t = t.call(e, i, r)),
          null != t.top && (h.top = t.top - r.top + s),
          null != t.left && (h.left = t.left - r.left + o),
          "using" in t ? t.using.call(e, h) : a.css(h));
      },
    }),
    O.fn.extend({
      position: function () {
        if (!this[0]) return null;
        var e = this[0],
          t = this.offsetParent(),
          i = this.offset(),
          n = kt.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
        return (
          (i.top -= parseFloat(O.css(e, "marginTop")) || 0),
          (i.left -= parseFloat(O.css(e, "marginLeft")) || 0),
          (n.top += parseFloat(O.css(t[0], "borderTopWidth")) || 0),
          (n.left += parseFloat(O.css(t[0], "borderLeftWidth")) || 0),
          { top: i.top - n.top, left: i.left - n.left }
        );
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || M.body;
            e && !kt.test(e.nodeName) && "static" === O.css(e, "position");
          )
            e = e.offsetParent;
          return e;
        });
      },
    }),
    O.each(["Left", "Top"], function (e, i) {
      var n = "scroll" + i;
      O.fn[n] = function (i) {
        var s, o;
        return i === t
          ? (s = this[0])
            ? ((o = P(s)),
              o
                ? "pageXOffset" in o
                  ? o[e ? "pageYOffset" : "pageXOffset"]
                  : (O.support.boxModel && o.document.documentElement[n]) ||
                    o.document.body[n]
                : s[n])
            : null
          : this.each(function () {
              ((o = P(this)),
                o
                  ? o.scrollTo(
                      e ? O(o).scrollLeft() : i,
                      e ? i : O(o).scrollTop(),
                    )
                  : (this[n] = i));
            });
      };
    }),
    O.each(["Height", "Width"], function (e, i) {
      var n = i.toLowerCase();
      ((O.fn["inner" + i] = function () {
        var e = this[0];
        return e
          ? e.style
            ? parseFloat(O.css(e, n, "padding"))
            : this[n]()
          : null;
      }),
        (O.fn["outer" + i] = function (e) {
          var t = this[0];
          return t
            ? t.style
              ? parseFloat(O.css(t, n, e ? "margin" : "border"))
              : this[n]()
            : null;
        }),
        (O.fn[n] = function (e) {
          var s = this[0];
          if (!s) return null == e ? null : this;
          if (O.isFunction(e))
            return this.each(function (t) {
              var i = O(this);
              i[n](e.call(this, t, i[n]()));
            });
          if (O.isWindow(s)) {
            var o = s.document.documentElement["client" + i],
              a = s.document.body;
            return (
              ("CSS1Compat" === s.document.compatMode && o) ||
              (a && a["client" + i]) ||
              o
            );
          }
          if (9 === s.nodeType)
            return Math.max(
              s.documentElement["client" + i],
              s.body["scroll" + i],
              s.documentElement["scroll" + i],
              s.body["offset" + i],
              s.documentElement["offset" + i],
            );
          if (e === t) {
            var r = O.css(s, n),
              l = parseFloat(r);
            return O.isNumeric(l) ? l : r;
          }
          return this.css(n, "string" == typeof e ? e : e + "px");
        }));
    }),
    (e.jQuery = e.$ = O),
    "function" == typeof define &&
      define.amd &&
      define.amd.jQuery &&
      define("jquery", [], function () {
        return O;
      }));
})(window),
  (function (e, t) {
    var i;
    ((e.rails = i =
      {
        linkClickSelector:
          "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector:
          "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector:
          "form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",
        disableSelector:
          "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector:
          "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector:
          "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (t) {
          var i = e('meta[name="csrf-token"]').attr("content");
          i && t.setRequestHeader("X-CSRF-Token", i);
        },
        fire: function (t, i, n) {
          var s = e.Event(i);
          return (t.trigger(s, n), !1 !== s.result);
        },
        confirm: function (e) {
          return confirm(e);
        },
        ajax: function (t) {
          return e.ajax(t);
        },
        handleRemote: function (n) {
          var s,
            o,
            a,
            r,
            l = n.data("cross-domain") || null,
            c = n.data("type") || (e.ajaxSettings && e.ajaxSettings.dataType);
          if (i.fire(n, "ajax:before")) {
            if (n.is("form")) {
              ((s = n.attr("method")),
                (o = n.attr("action")),
                (a = n.serializeArray()));
              var u = n.data("ujs:submit-button");
              u && (a.push(u), n.data("ujs:submit-button", null));
            } else
              n.is(i.inputChangeSelector)
                ? ((s = n.data("method")),
                  (o = n.data("url")),
                  (a = n.serialize()),
                  n.data("params") && (a = a + "&" + n.data("params")))
                : ((s = n.data("method")),
                  (o = n.attr("href")),
                  (a = n.data("params") || null));
            return (
              (r = {
                type: s || "GET",
                data: a,
                dataType: c,
                crossDomain: l,
                beforeSend: function (e, s) {
                  return (
                    s.dataType === t &&
                      e.setRequestHeader(
                        "accept",
                        "*/*;q=0.5, " + s.accepts.script,
                      ),
                    i.fire(n, "ajax:beforeSend", [e, s])
                  );
                },
                success: function (e, t, i) {
                  n.trigger("ajax:success", [e, t, i]);
                },
                complete: function (e, t) {
                  n.trigger("ajax:complete", [e, t]);
                },
                error: function (e, t, i) {
                  n.trigger("ajax:error", [e, t, i]);
                },
              }),
              o && (r.url = o),
              i.ajax(r)
            );
          }
          return !1;
        },
        handleMethod: function (i) {
          var n = i.attr("href"),
            s = i.data("method"),
            o = i.attr("target"),
            a = e("meta[name=csrf-token]").attr("content"),
            r = e("meta[name=csrf-param]").attr("content"),
            l = e('<form method="post" action="' + n + '"></form>'),
            c = '<input name="_method" value="' + s + '" type="hidden" />';
          (r !== t &&
            a !== t &&
            (c += '<input name="' + r + '" value="' + a + '" type="hidden" />'),
            o && l.attr("target", o),
            l.hide().append(c).appendTo("body"),
            l.submit());
        },
        disableFormElements: function (t) {
          t.find(i.disableSelector).each(function () {
            var t = e(this),
              i = t.is("button") ? "html" : "val";
            (t.data("ujs:enable-with", t[i]()),
              t[i](t.data("disable-with")),
              t.prop("disabled", !0));
          });
        },
        enableFormElements: function (t) {
          t.find(i.enableSelector).each(function () {
            var t = e(this),
              i = t.is("button") ? "html" : "val";
            (t.data("ujs:enable-with") && t[i](t.data("ujs:enable-with")),
              t.prop("disabled", !1));
          });
        },
        allowAction: function (e) {
          var t,
            n = e.data("confirm"),
            s = !1;
          return (
            !n ||
            (i.fire(e, "confirm") &&
              ((s = i.confirm(n)), (t = i.fire(e, "confirm:complete", [s]))),
            s && t)
          );
        },
        blankInputs: function (t, i, n) {
          var s,
            o = e(),
            a = i || "input,textarea";
          return (
            t.find(a).each(function () {
              ((s = e(this)), (n ? s.val() : !s.val()) && (o = o.add(s)));
            }),
            !!o.length && o
          );
        },
        nonBlankInputs: function (e, t) {
          return i.blankInputs(e, t, !0);
        },
        stopEverything: function (t) {
          return (
            e(t.target).trigger("ujs:everythingStopped"),
            t.stopImmediatePropagation(),
            !1
          );
        },
        callFormSubmitBindings: function (i, n) {
          var s = i.data("events"),
            o = !0;
          return (
            s !== t &&
              s.submit !== t &&
              e.each(s.submit, function (e, t) {
                if ("function" == typeof t.handler) return (o = t.handler(n));
              }),
            o
          );
        },
        disableElement: function (e) {
          (e.data("ujs:enable-with", e.html()),
            e.html(e.data("disable-with")),
            e.bind("click.railsDisable", function (e) {
              return i.stopEverything(e);
            }));
        },
        enableElement: function (e) {
          (e.data("ujs:enable-with") !== t &&
            (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)),
            e.unbind("click.railsDisable"));
        },
      }),
      e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || i.CSRFProtection(n);
      }),
      e(document).delegate(i.linkDisableSelector, "ajax:complete", function () {
        i.enableElement(e(this));
      }),
      e(document).delegate(i.linkClickSelector, "click.rails", function (n) {
        var s = e(this),
          o = s.data("method"),
          a = s.data("params");
        return i.allowAction(s)
          ? (s.is(i.linkDisableSelector) && i.disableElement(s),
            s.data("remote") !== t
              ? !((!n.metaKey && !n.ctrlKey) || (o && "GET" !== o) || a) ||
                (!1 === i.handleRemote(s) && i.enableElement(s), !1)
              : s.data("method")
                ? (i.handleMethod(s), !1)
                : void 0)
          : i.stopEverything(n);
      }),
      e(document).delegate(i.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(t);
      }),
      e(document).delegate(i.formSubmitSelector, "submit.rails", function (n) {
        var s = e(this),
          o = s.data("remote") !== t,
          a = i.blankInputs(s, i.requiredInputSelector),
          r = i.nonBlankInputs(s, i.fileInputSelector);
        return i.allowAction(s)
          ? a &&
            s.attr("novalidate") == t &&
            i.fire(s, "ajax:aborted:required", [a])
            ? i.stopEverything(n)
            : o
              ? r
                ? i.fire(s, "ajax:aborted:file", [r])
                : !e.support.submitBubbles &&
                    e().jquery < "1.7" &&
                    !1 === i.callFormSubmitBindings(s, n)
                  ? i.stopEverything(n)
                  : (i.handleRemote(s), !1)
              : void setTimeout(function () {
                  i.disableFormElements(s);
                }, 13)
          : i.stopEverything(n);
      }),
      e(document).delegate(
        i.formInputClickSelector,
        "click.rails",
        function (t) {
          var n = e(this);
          if (!i.allowAction(n)) return i.stopEverything(t);
          var s = n.attr("name"),
            o = s ? { name: s, value: n.val() } : null;
          n.closest("form").data("ujs:submit-button", o);
        },
      ),
      e(document).delegate(
        i.formSubmitSelector,
        "ajax:beforeSend.rails",
        function (t) {
          this == t.target && i.disableFormElements(e(this));
        },
      ),
      e(document).delegate(
        i.formSubmitSelector,
        "ajax:complete.rails",
        function (t) {
          this == t.target && i.enableFormElements(e(this));
        },
      ));
  })(jQuery) /*!
   * jQuery UI 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI
   */,
  (function (e, t) {
    function i(t, i) {
      var s = t.nodeName.toLowerCase();
      if ("area" === s) {
        var o,
          a = t.parentNode,
          r = a.name;
        return (
          !(!t.href || !r || "map" !== a.nodeName.toLowerCase()) &&
          !!(o = e("img[usemap=#" + r + "]")[0]) &&
          n(o)
        );
      }
      return (
        (/input|select|textarea|button|object/.test(s)
          ? !t.disabled
          : "a" == s
            ? t.href || i
            : i) && n(t)
      );
    }
    function n(t) {
      return !e(t)
        .parents()
        .andSelf()
        .filter(function () {
          return (
            "hidden" === e.curCSS(this, "visibility") ||
            e.expr.filters.hidden(this)
          );
        }).length;
    }
    ((e.ui = e.ui || {}),
      e.ui.version ||
        (e.extend(e.ui, {
          version: "1.8.16",
          keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91,
          },
        }),
        e.fn.extend({
          propAttr: e.fn.prop || e.fn.attr,
          _focus: e.fn.focus,
          focus: function (t, i) {
            return "number" == typeof t
              ? this.each(function () {
                  var n = this;
                  setTimeout(function () {
                    (e(n).focus(), i && i.call(n));
                  }, t);
                })
              : this._focus.apply(this, arguments);
          },
          scrollParent: function () {
            var t;
            return (
              (t =
                (e.browser.msie &&
                  /(static|relative)/.test(this.css("position"))) ||
                /absolute/.test(this.css("position"))
                  ? this.parents()
                      .filter(function () {
                        return (
                          /(relative|absolute|fixed)/.test(
                            e.curCSS(this, "position", 1),
                          ) &&
                          /(auto|scroll)/.test(
                            e.curCSS(this, "overflow", 1) +
                              e.curCSS(this, "overflow-y", 1) +
                              e.curCSS(this, "overflow-x", 1),
                          )
                        );
                      })
                      .eq(0)
                  : this.parents()
                      .filter(function () {
                        return /(auto|scroll)/.test(
                          e.curCSS(this, "overflow", 1) +
                            e.curCSS(this, "overflow-y", 1) +
                            e.curCSS(this, "overflow-x", 1),
                        );
                      })
                      .eq(0)),
              /fixed/.test(this.css("position")) || !t.length ? e(document) : t
            );
          },
          zIndex: function (i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
              for (var n, s, o = e(this[0]); o.length && o[0] !== document; ) {
                if (
                  ("absolute" === (n = o.css("position")) ||
                    "relative" === n ||
                    "fixed" === n) &&
                  ((s = parseInt(o.css("zIndex"), 10)), !isNaN(s) && 0 !== s)
                )
                  return s;
                o = o.parent();
              }
            return 0;
          },
          disableSelection: function () {
            return this.bind(
              (e.support.selectstart ? "selectstart" : "mousedown") +
                ".ui-disableSelection",
              function (e) {
                e.preventDefault();
              },
            );
          },
          enableSelection: function () {
            return this.unbind(".ui-disableSelection");
          },
        }),
        e.each(["Width", "Height"], function (i, n) {
          function s(t, i, n, s) {
            return (
              e.each(o, function () {
                ((i -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0),
                  n &&
                    (i -=
                      parseFloat(e.curCSS(t, "border" + this + "Width", !0)) ||
                      0),
                  s &&
                    (i -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0));
              }),
              i
            );
          }
          var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            a = n.toLowerCase(),
            r = {
              innerWidth: e.fn.innerWidth,
              innerHeight: e.fn.innerHeight,
              outerWidth: e.fn.outerWidth,
              outerHeight: e.fn.outerHeight,
            };
          ((e.fn["inner" + n] = function (i) {
            return i === t
              ? r["inner" + n].call(this)
              : this.each(function () {
                  e(this).css(a, s(this, i) + "px");
                });
          }),
            (e.fn["outer" + n] = function (t, i) {
              return "number" != typeof t
                ? r["outer" + n].call(this, t)
                : this.each(function () {
                    e(this).css(a, s(this, t, !0, i) + "px");
                  });
            }));
        }),
        e.extend(e.expr[":"], {
          data: function (t, i, n) {
            return !!e.data(t, n[3]);
          },
          focusable: function (t) {
            return i(t, !isNaN(e.attr(t, "tabindex")));
          },
          tabbable: function (t) {
            var n = e.attr(t, "tabindex"),
              s = isNaN(n);
            return (s || n >= 0) && i(t, !s);
          },
        }),
        e(function () {
          var t = document.body,
            i = t.appendChild((i = document.createElement("div")));
          (e.extend(i.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0,
          }),
            (e.support.minHeight = 100 === i.offsetHeight),
            (e.support.selectstart = "onselectstart" in i),
            (t.removeChild(i).style.display = "none"));
        }),
        e.extend(e.ui, {
          plugin: {
            add: function (t, i, n) {
              var s = e.ui[t].prototype;
              for (var o in n)
                ((s.plugins[o] = s.plugins[o] || []),
                  s.plugins[o].push([i, n[o]]));
            },
            call: function (e, t, i) {
              var n = e.plugins[t];
              if (n && e.element[0].parentNode)
                for (var s = 0; s < n.length; s++)
                  e.options[n[s][0]] && n[s][1].apply(e.element, i);
            },
          },
          contains: function (e, t) {
            return document.compareDocumentPosition
              ? 16 & e.compareDocumentPosition(t)
              : e !== t && e.contains(t);
          },
          hasScroll: function (t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
              s = !1;
            return t[n] > 0 || ((t[n] = 1), (s = t[n] > 0), (t[n] = 0), s);
          },
          isOverAxis: function (e, t, i) {
            return e > t && e < t + i;
          },
          isOver: function (t, i, n, s, o, a) {
            return e.ui.isOverAxis(t, n, o) && e.ui.isOverAxis(i, s, a);
          },
        })));
  })(jQuery) /*!
   * jQuery UI Widget 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Widget
   */,
  (function (e, t) {
    if (e.cleanData) {
      var i = e.cleanData;
      e.cleanData = function (t) {
        for (var n, s = 0; null != (n = t[s]); s++)
          try {
            e(n).triggerHandler("remove");
          } catch (e) {}
        i(t);
      };
    } else {
      var n = e.fn.remove;
      e.fn.remove = function (t, i) {
        return this.each(function () {
          return (
            i ||
              (t && !e.filter(t, [this]).length) ||
              e("*", this)
                .add([this])
                .each(function () {
                  try {
                    e(this).triggerHandler("remove");
                  } catch (e) {}
                }),
            n.call(e(this), t, i)
          );
        });
      };
    }
    ((e.widget = function (t, i, n) {
      var s,
        o = t.split(".")[0];
      ((t = t.split(".")[1]),
        (s = o + "-" + t),
        n || ((n = i), (i = e.Widget)),
        (e.expr[":"][s] = function (i) {
          return !!e.data(i, t);
        }),
        (e[o] = e[o] || {}),
        (e[o][t] = function (e, t) {
          arguments.length && this._createWidget(e, t);
        }));
      var a = new i();
      ((a.options = e.extend(!0, {}, a.options)),
        (e[o][t].prototype = e.extend(
          !0,
          a,
          {
            namespace: o,
            widgetName: t,
            widgetEventPrefix: e[o][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: s,
          },
          n,
        )),
        e.widget.bridge(t, e[o][t]));
    }),
      (e.widget.bridge = function (i, n) {
        e.fn[i] = function (s) {
          var o = "string" == typeof s,
            a = Array.prototype.slice.call(arguments, 1),
            r = this;
          return (
            (s = !o && a.length ? e.extend.apply(null, [!0, s].concat(a)) : s),
            o && "_" === s.charAt(0)
              ? r
              : (o
                  ? this.each(function () {
                      var n = e.data(this, i),
                        o = n && e.isFunction(n[s]) ? n[s].apply(n, a) : n;
                      if (o !== n && o !== t) return ((r = o), !1);
                    })
                  : this.each(function () {
                      var t = e.data(this, i);
                      t
                        ? t.option(s || {})._init()
                        : e.data(this, i, new n(s, this));
                    }),
                r)
          );
        };
      }),
      (e.Widget = function (e, t) {
        arguments.length && this._createWidget(e, t);
      }),
      (e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: { disabled: !1 },
        _createWidget: function (t, i) {
          (e.data(i, this.widgetName, this),
            (this.element = e(i)),
            (this.options = e.extend(
              !0,
              {},
              this.options,
              this._getCreateOptions(),
              t,
            )));
          var n = this;
          (this.element.bind("remove." + this.widgetName, function () {
            n.destroy();
          }),
            this._create(),
            this._trigger("create"),
            this._init());
        },
        _getCreateOptions: function () {
          return e.metadata && e.metadata.get(this.element[0])[this.widgetName];
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
          (this.element
            .unbind("." + this.widgetName)
            .removeData(this.widgetName),
            this.widget()
              .unbind("." + this.widgetName)
              .removeAttr("aria-disabled")
              .removeClass(
                this.widgetBaseClass + "-disabled ui-state-disabled",
              ));
        },
        widget: function () {
          return this.element;
        },
        option: function (i, n) {
          var s = i;
          if (0 === arguments.length) return e.extend({}, this.options);
          if ("string" == typeof i) {
            if (n === t) return this.options[i];
            ((s = {}), (s[i] = n));
          }
          return (this._setOptions(s), this);
        },
        _setOptions: function (t) {
          var i = this;
          return (
            e.each(t, function (e, t) {
              i._setOption(e, t);
            }),
            this
          );
        },
        _setOption: function (e, t) {
          return (
            (this.options[e] = t),
            "disabled" === e &&
              this.widget()
                [t ? "addClass" : "removeClass"](
                  this.widgetBaseClass + "-disabled ui-state-disabled",
                )
                .attr("aria-disabled", t),
            this
          );
        },
        enable: function () {
          return this._setOption("disabled", !1);
        },
        disable: function () {
          return this._setOption("disabled", !0);
        },
        _trigger: function (t, i, n) {
          var s = this.options[t];
          if (
            ((i = e.Event(i)),
            (i.type = (
              t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
            ).toLowerCase()),
            (n = n || {}),
            i.originalEvent)
          )
            for (var o, a = e.event.props.length; a; )
              ((o = e.event.props[--a]), (i[o] = i.originalEvent[o]));
          return (
            this.element.trigger(i, n),
            !(
              (e.isFunction(s) && !1 === s.call(this.element[0], i, n)) ||
              i.isDefaultPrevented()
            )
          );
        },
      }));
  })(jQuery) /*!
   * jQuery UI Mouse 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Mouse
   *
   * Depends:
   *	jquery.ui.widget.js
   */,
  (function (e) {
    var t = !1;
    (e(document).mouseup(function () {
      t = !1;
    }),
      e.widget("ui.mouse", {
        options: { cancel: ":input,option", distance: 1, delay: 0 },
        _mouseInit: function () {
          var t = this;
          (this.element
            .bind("mousedown." + this.widgetName, function (e) {
              return t._mouseDown(e);
            })
            .bind("click." + this.widgetName, function (i) {
              if (!0 === e.data(i.target, t.widgetName + ".preventClickEvent"))
                return (
                  e.removeData(i.target, t.widgetName + ".preventClickEvent"),
                  i.stopImmediatePropagation(),
                  !1
                );
            }),
            (this.started = !1));
        },
        _mouseDestroy: function () {
          this.element.unbind("." + this.widgetName);
        },
        _mouseDown: function (i) {
          if (!t) {
            (this._mouseStarted && this._mouseUp(i),
              (this._mouseDownEvent = i));
            var n = this,
              s = 1 == i.which,
              o =
                !(
                  "string" != typeof this.options.cancel || !i.target.nodeName
                ) && e(i.target).closest(this.options.cancel).length;
            return (
              !(s && !o && this._mouseCapture(i)) ||
              ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  n.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(i) &&
              this._mouseDelayMet(i) &&
              ((this._mouseStarted = !1 !== this._mouseStart(i)),
              !this._mouseStarted)
                ? (i.preventDefault(), !0)
                : (!0 ===
                    e.data(i.target, this.widgetName + ".preventClickEvent") &&
                    e.removeData(
                      i.target,
                      this.widgetName + ".preventClickEvent",
                    ),
                  (this._mouseMoveDelegate = function (e) {
                    return n._mouseMove(e);
                  }),
                  (this._mouseUpDelegate = function (e) {
                    return n._mouseUp(e);
                  }),
                  e(document)
                    .bind(
                      "mousemove." + this.widgetName,
                      this._mouseMoveDelegate,
                    )
                    .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                  i.preventDefault(),
                  (t = !0),
                  !0))
            );
          }
        },
        _mouseMove: function (t) {
          return !e.browser.msie || document.documentMode >= 9 || t.button
            ? this._mouseStarted
              ? (this._mouseDrag(t), t.preventDefault())
              : (this._mouseDistanceMet(t) &&
                  this._mouseDelayMet(t) &&
                  ((this._mouseStarted =
                    !1 !== this._mouseStart(this._mouseDownEvent, t)),
                  this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
                !this._mouseStarted)
            : this._mouseUp(t);
        },
        _mouseUp: function (t) {
          return (
            e(document)
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted &&
              ((this._mouseStarted = !1),
              t.target == this._mouseDownEvent.target &&
                e.data(t.target, this.widgetName + ".preventClickEvent", !0),
              this._mouseStop(t)),
            !1
          );
        },
        _mouseDistanceMet: function (e) {
          return (
            Math.max(
              Math.abs(this._mouseDownEvent.pageX - e.pageX),
              Math.abs(this._mouseDownEvent.pageY - e.pageY),
            ) >= this.options.distance
          );
        },
        _mouseDelayMet: function () {
          return this.mouseDelayMet;
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
          return !0;
        },
      }));
  })(jQuery) /*
   * jQuery UI Position 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Position
   */,
  (function (e) {
    e.ui = e.ui || {};
    var t = /left|center|right/,
      i = /top|center|bottom/,
      n = "center",
      s = e.fn.position,
      o = e.fn.offset;
    ((e.fn.position = function (o) {
      if (!o || !o.of) return s.apply(this, arguments);
      o = e.extend({}, o);
      var a,
        r,
        l,
        c = e(o.of),
        u = c[0],
        h = (o.collision || "flip").split(" "),
        d = o.offset ? o.offset.split(" ") : [0, 0];
      return (
        9 === u.nodeType
          ? ((a = c.width()), (r = c.height()), (l = { top: 0, left: 0 }))
          : u.setTimeout
            ? ((a = c.width()),
              (r = c.height()),
              (l = { top: c.scrollTop(), left: c.scrollLeft() }))
            : u.preventDefault
              ? ((o.at = "left top"),
                (a = r = 0),
                (l = { top: o.of.pageY, left: o.of.pageX }))
              : ((a = c.outerWidth()), (r = c.outerHeight()), (l = c.offset())),
        e.each(["my", "at"], function () {
          var e = (o[this] || "").split(" ");
          (1 === e.length &&
            (e = t.test(e[0])
              ? e.concat([n])
              : i.test(e[0])
                ? [n].concat(e)
                : [n, n]),
            (e[0] = t.test(e[0]) ? e[0] : n),
            (e[1] = i.test(e[1]) ? e[1] : n),
            (o[this] = e));
        }),
        1 === h.length && (h[1] = h[0]),
        (d[0] = parseInt(d[0], 10) || 0),
        1 === d.length && (d[1] = d[0]),
        (d[1] = parseInt(d[1], 10) || 0),
        "right" === o.at[0]
          ? (l.left += a)
          : o.at[0] === n && (l.left += a / 2),
        "bottom" === o.at[1] ? (l.top += r) : o.at[1] === n && (l.top += r / 2),
        (l.left += d[0]),
        (l.top += d[1]),
        this.each(function () {
          var t,
            i = e(this),
            s = i.outerWidth(),
            c = i.outerHeight(),
            u = parseInt(e.curCSS(this, "marginLeft", !0)) || 0,
            p = parseInt(e.curCSS(this, "marginTop", !0)) || 0,
            f = s + u + (parseInt(e.curCSS(this, "marginRight", !0)) || 0),
            m = c + p + (parseInt(e.curCSS(this, "marginBottom", !0)) || 0),
            g = e.extend({}, l);
          ("right" === o.my[0]
            ? (g.left -= s)
            : o.my[0] === n && (g.left -= s / 2),
            "bottom" === o.my[1]
              ? (g.top -= c)
              : o.my[1] === n && (g.top -= c / 2),
            (g.left = Math.round(g.left)),
            (g.top = Math.round(g.top)),
            (t = { left: g.left - u, top: g.top - p }),
            e.each(["left", "top"], function (i, n) {
              e.ui.position[h[i]] &&
                e.ui.position[h[i]][n](g, {
                  targetWidth: a,
                  targetHeight: r,
                  elemWidth: s,
                  elemHeight: c,
                  collisionPosition: t,
                  collisionWidth: f,
                  collisionHeight: m,
                  offset: d,
                  my: o.my,
                  at: o.at,
                });
            }),
            e.fn.bgiframe && i.bgiframe(),
            i.offset(e.extend(g, { using: o.using })));
        })
      );
    }),
      (e.ui.position = {
        fit: {
          left: function (t, i) {
            var n = e(window),
              s =
                i.collisionPosition.left +
                i.collisionWidth -
                n.width() -
                n.scrollLeft();
            t.left =
              s > 0
                ? t.left - s
                : Math.max(t.left - i.collisionPosition.left, t.left);
          },
          top: function (t, i) {
            var n = e(window),
              s =
                i.collisionPosition.top +
                i.collisionHeight -
                n.height() -
                n.scrollTop();
            t.top =
              s > 0
                ? t.top - s
                : Math.max(t.top - i.collisionPosition.top, t.top);
          },
        },
        flip: {
          left: function (t, i) {
            if (i.at[0] !== n) {
              var s = e(window),
                o =
                  i.collisionPosition.left +
                  i.collisionWidth -
                  s.width() -
                  s.scrollLeft(),
                a =
                  "left" === i.my[0]
                    ? -i.elemWidth
                    : "right" === i.my[0]
                      ? i.elemWidth
                      : 0,
                r = "left" === i.at[0] ? i.targetWidth : -i.targetWidth,
                l = -2 * i.offset[0];
              t.left +=
                i.collisionPosition.left < 0
                  ? a + r + l
                  : o > 0
                    ? a + r + l
                    : 0;
            }
          },
          top: function (t, i) {
            if (i.at[1] !== n) {
              var s = e(window),
                o =
                  i.collisionPosition.top +
                  i.collisionHeight -
                  s.height() -
                  s.scrollTop(),
                a =
                  "top" === i.my[1]
                    ? -i.elemHeight
                    : "bottom" === i.my[1]
                      ? i.elemHeight
                      : 0,
                r = "top" === i.at[1] ? i.targetHeight : -i.targetHeight,
                l = -2 * i.offset[1];
              t.top +=
                i.collisionPosition.top < 0 ? a + r + l : o > 0 ? a + r + l : 0;
            }
          },
        },
      }),
      e.offset.setOffset ||
        ((e.offset.setOffset = function (t, i) {
          /static/.test(e.curCSS(t, "position")) &&
            (t.style.position = "relative");
          var n = e(t),
            s = n.offset(),
            o = parseInt(e.curCSS(t, "top", !0), 10) || 0,
            a = parseInt(e.curCSS(t, "left", !0), 10) || 0,
            r = { top: i.top - s.top + o, left: i.left - s.left + a };
          "using" in i ? i.using.call(t, r) : n.css(r);
        }),
        (e.fn.offset = function (t) {
          var i = this[0];
          return i && i.ownerDocument
            ? t
              ? this.each(function () {
                  e.offset.setOffset(this, t);
                })
              : o.call(this)
            : null;
        })));
  })(jQuery) /*
   * jQuery UI Draggable 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Draggables
   *
   * Depends:
   *	jquery.ui.core.js
   *	jquery.ui.mouse.js
   *	jquery.ui.widget.js
   */,
  (function (e) {
    (e.widget("ui.draggable", e.ui.mouse, {
      widgetEventPrefix: "drag",
      options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
      },
      _create: function () {
        ("original" != this.options.helper ||
          /^(?:r|a|f)/.test(this.element.css("position")) ||
          (this.element[0].style.position = "relative"),
          this.options.addClasses && this.element.addClass("ui-draggable"),
          this.options.disabled &&
            this.element.addClass("ui-draggable-disabled"),
          this._mouseInit());
      },
      destroy: function () {
        if (this.element.data("draggable"))
          return (
            this.element
              .removeData("draggable")
              .unbind(".draggable")
              .removeClass(
                "ui-draggable ui-draggable-dragging ui-draggable-disabled",
              ),
            this._mouseDestroy(),
            this
          );
      },
      _mouseCapture: function (t) {
        var i = this.options;
        return (
          !(
            this.helper ||
            i.disabled ||
            e(t.target).is(".ui-resizable-handle")
          ) &&
          ((this.handle = this._getHandle(t)),
          !!this.handle &&
            (i.iframeFix &&
              e(!0 === i.iframeFix ? "iframe" : i.iframeFix).each(function () {
                e(
                  '<div class="ui-draggable-iframeFix" style="background: #fff;"></div>',
                )
                  .css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3,
                  })
                  .css(e(this).offset())
                  .appendTo("body");
              }),
            !0))
        );
      },
      _mouseStart: function (t) {
        var i = this.options;
        return (
          (this.helper = this._createHelper(t)),
          this._cacheHelperProportions(),
          e.ui.ddmanager && (e.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css("position")),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.positionAbs = this.element.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left,
          }),
          e.extend(this.offset, {
            click: {
              left: t.pageX - this.offset.left,
              top: t.pageY - this.offset.top,
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
          (this.originalPosition = this.position = this._generatePosition(t)),
          (this.originalPageX = t.pageX),
          (this.originalPageY = t.pageY),
          i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
          i.containment && this._setContainment(),
          !1 === this._trigger("start", t)
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              e.ui.ddmanager &&
                !i.dropBehaviour &&
                e.ui.ddmanager.prepareOffsets(this, t),
              this.helper.addClass("ui-draggable-dragging"),
              this._mouseDrag(t, !0),
              e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t),
              !0)
        );
      },
      _mouseDrag: function (t, i) {
        if (
          ((this.position = this._generatePosition(t)),
          (this.positionAbs = this._convertPositionTo("absolute")),
          !i)
        ) {
          var n = this._uiHash();
          if (!1 === this._trigger("drag", t, n))
            return (this._mouseUp({}), !1);
          this.position = n.position;
        }
        return (
          (this.options.axis && "y" == this.options.axis) ||
            (this.helper[0].style.left = this.position.left + "px"),
          (this.options.axis && "x" == this.options.axis) ||
            (this.helper[0].style.top = this.position.top + "px"),
          e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
          !1
        );
      },
      _mouseStop: function (t) {
        var i = !1;
        if (
          (e.ui.ddmanager &&
            !this.options.dropBehaviour &&
            (i = e.ui.ddmanager.drop(this, t)),
          this.dropped && ((i = this.dropped), (this.dropped = !1)),
          !(
            (this.element[0] && this.element[0].parentNode) ||
            "original" != this.options.helper
          ))
        )
          return !1;
        if (
          ("invalid" == this.options.revert && !i) ||
          ("valid" == this.options.revert && i) ||
          !0 === this.options.revert ||
          (e.isFunction(this.options.revert) &&
            this.options.revert.call(this.element, i))
        ) {
          var n = this;
          e(this.helper).animate(
            this.originalPosition,
            parseInt(this.options.revertDuration, 10),
            function () {
              !1 !== n._trigger("stop", t) && n._clear();
            },
          );
        } else !1 !== this._trigger("stop", t) && this._clear();
        return !1;
      },
      _mouseUp: function (t) {
        return (
          !0 === this.options.iframeFix &&
            e("div.ui-draggable-iframeFix").each(function () {
              this.parentNode.removeChild(this);
            }),
          e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
          e.ui.mouse.prototype._mouseUp.call(this, t)
        );
      },
      cancel: function () {
        return (
          this.helper.is(".ui-draggable-dragging")
            ? this._mouseUp({})
            : this._clear(),
          this
        );
      },
      _getHandle: function (t) {
        var i =
          !this.options.handle || !e(this.options.handle, this.element).length;
        return (
          e(this.options.handle, this.element)
            .find("*")
            .andSelf()
            .each(function () {
              this == t.target && (i = !0);
            }),
          i
        );
      },
      _createHelper: function (t) {
        var i = this.options,
          n = e.isFunction(i.helper)
            ? e(i.helper.apply(this.element[0], [t]))
            : "clone" == i.helper
              ? this.element.clone().removeAttr("id")
              : this.element;
        return (
          n.parents("body").length ||
            n.appendTo(
              "parent" == i.appendTo ? this.element[0].parentNode : i.appendTo,
            ),
          n[0] == this.element[0] ||
            /(fixed|absolute)/.test(n.css("position")) ||
            n.css("position", "absolute"),
          n
        );
      },
      _adjustOffsetFromHelper: function (t) {
        ("string" == typeof t && (t = t.split(" ")),
          e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
          "left" in t && (this.offset.click.left = t.left + this.margins.left),
          "right" in t &&
            (this.offset.click.left =
              this.helperProportions.width - t.right + this.margins.left),
          "top" in t && (this.offset.click.top = t.top + this.margins.top),
          "bottom" in t &&
            (this.offset.click.top =
              this.helperProportions.height - t.bottom + this.margins.top));
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var t = this.offsetParent.offset();
        return (
          "absolute" == this.cssPosition &&
            this.scrollParent[0] != document &&
            e.ui.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((t.left += this.scrollParent.scrollLeft()),
            (t.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] == document.body ||
            (this.offsetParent[0].tagName &&
              "html" == this.offsetParent[0].tagName.toLowerCase() &&
              e.browser.msie)) &&
            (t = { top: 0, left: 0 }),
          {
            top:
              t.top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              t.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" == this.cssPosition) {
          var e = this.element.position();
          return {
            top:
              e.top -
              (parseInt(this.helper.css("top"), 10) || 0) +
              this.scrollParent.scrollTop(),
            left:
              e.left -
              (parseInt(this.helper.css("left"), 10) || 0) +
              this.scrollParent.scrollLeft(),
          };
        }
        return { top: 0, left: 0 };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css("marginLeft"), 10) || 0,
          top: parseInt(this.element.css("marginTop"), 10) || 0,
          right: parseInt(this.element.css("marginRight"), 10) || 0,
          bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var t = this.options;
        if (
          ("parent" == t.containment &&
            (t.containment = this.helper[0].parentNode),
          ("document" != t.containment && "window" != t.containment) ||
            (this.containment = [
              "document" == t.containment
                ? 0
                : e(window).scrollLeft() -
                  this.offset.relative.left -
                  this.offset.parent.left,
              "document" == t.containment
                ? 0
                : e(window).scrollTop() -
                  this.offset.relative.top -
                  this.offset.parent.top,
              ("document" == t.containment ? 0 : e(window).scrollLeft()) +
                e("document" == t.containment ? document : window).width() -
                this.helperProportions.width -
                this.margins.left,
              ("document" == t.containment ? 0 : e(window).scrollTop()) +
                (e("document" == t.containment ? document : window).height() ||
                  document.body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top,
            ]),
          /^(document|window|parent)$/.test(t.containment) ||
            t.containment.constructor == Array)
        )
          t.containment.constructor == Array &&
            (this.containment = t.containment);
        else {
          var i = e(t.containment),
            n = i[0];
          if (!n) return;
          var s = (i.offset(), "hidden" != e(n).css("overflow"));
          ((this.containment = [
            (parseInt(e(n).css("borderLeftWidth"), 10) || 0) +
              (parseInt(e(n).css("paddingLeft"), 10) || 0),
            (parseInt(e(n).css("borderTopWidth"), 10) || 0) +
              (parseInt(e(n).css("paddingTop"), 10) || 0),
            (s ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) -
              (parseInt(e(n).css("borderLeftWidth"), 10) || 0) -
              (parseInt(e(n).css("paddingRight"), 10) || 0) -
              this.helperProportions.width -
              this.margins.left -
              this.margins.right,
            (s ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) -
              (parseInt(e(n).css("borderTopWidth"), 10) || 0) -
              (parseInt(e(n).css("paddingBottom"), 10) || 0) -
              this.helperProportions.height -
              this.margins.top -
              this.margins.bottom,
          ]),
            (this.relative_container = i));
        }
      },
      _convertPositionTo: function (t, i) {
        i || (i = this.position);
        var n = "absolute" == t ? 1 : -1,
          s =
            (this.options,
            "absolute" != this.cssPosition ||
            (this.scrollParent[0] != document &&
              e.ui.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent),
          o = /(html|body)/i.test(s[0].tagName);
        return {
          top:
            i.top +
            this.offset.relative.top * n +
            this.offset.parent.top * n -
            (e.browser.safari &&
            e.browser.version < 526 &&
            "fixed" == this.cssPosition
              ? 0
              : ("fixed" == this.cssPosition
                  ? -this.scrollParent.scrollTop()
                  : o
                    ? 0
                    : s.scrollTop()) * n),
          left:
            i.left +
            this.offset.relative.left * n +
            this.offset.parent.left * n -
            (e.browser.safari &&
            e.browser.version < 526 &&
            "fixed" == this.cssPosition
              ? 0
              : ("fixed" == this.cssPosition
                  ? -this.scrollParent.scrollLeft()
                  : o
                    ? 0
                    : s.scrollLeft()) * n),
        };
      },
      _generatePosition: function (t) {
        var i = this.options,
          n =
            "absolute" != this.cssPosition ||
            (this.scrollParent[0] != document &&
              e.ui.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          s = /(html|body)/i.test(n[0].tagName),
          o = t.pageX,
          a = t.pageY;
        if (this.originalPosition) {
          var r;
          if (this.containment) {
            if (this.relative_container) {
              var l = this.relative_container.offset();
              r = [
                this.containment[0] + l.left,
                this.containment[1] + l.top,
                this.containment[2] + l.left,
                this.containment[3] + l.top,
              ];
            } else r = this.containment;
            (t.pageX - this.offset.click.left < r[0] &&
              (o = r[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < r[1] &&
                (a = r[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > r[2] &&
                (o = r[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > r[3] &&
                (a = r[3] + this.offset.click.top));
          }
          if (i.grid) {
            var c = i.grid[1]
              ? this.originalPageY +
                Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1]
              : this.originalPageY;
            a =
              r &&
              (c - this.offset.click.top < r[1] ||
                c - this.offset.click.top > r[3])
                ? c - this.offset.click.top < r[1]
                  ? c + i.grid[1]
                  : c - i.grid[1]
                : c;
            var u = i.grid[0]
              ? this.originalPageX +
                Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0]
              : this.originalPageX;
            o =
              r &&
              (u - this.offset.click.left < r[0] ||
                u - this.offset.click.left > r[2])
                ? u - this.offset.click.left < r[0]
                  ? u + i.grid[0]
                  : u - i.grid[0]
                : u;
          }
        }
        return {
          top:
            a -
            this.offset.click.top -
            this.offset.relative.top -
            this.offset.parent.top +
            (e.browser.safari &&
            e.browser.version < 526 &&
            "fixed" == this.cssPosition
              ? 0
              : "fixed" == this.cssPosition
                ? -this.scrollParent.scrollTop()
                : s
                  ? 0
                  : n.scrollTop()),
          left:
            o -
            this.offset.click.left -
            this.offset.relative.left -
            this.offset.parent.left +
            (e.browser.safari &&
            e.browser.version < 526 &&
            "fixed" == this.cssPosition
              ? 0
              : "fixed" == this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : s
                  ? 0
                  : n.scrollLeft()),
        };
      },
      _clear: function () {
        (this.helper.removeClass("ui-draggable-dragging"),
          this.helper[0] == this.element[0] ||
            this.cancelHelperRemoval ||
            this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1));
      },
      _trigger: function (t, i, n) {
        return (
          (n = n || this._uiHash()),
          e.ui.plugin.call(this, t, [i, n]),
          "drag" == t &&
            (this.positionAbs = this._convertPositionTo("absolute")),
          e.Widget.prototype._trigger.call(this, t, i, n)
        );
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs,
        };
      },
    }),
      e.extend(e.ui.draggable, { version: "1.8.16" }),
      e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, i) {
          var n = e(this).data("draggable"),
            s = n.options,
            o = e.extend({}, i, { item: n.element });
          ((n.sortables = []),
            e(s.connectToSortable).each(function () {
              var i = e.data(this, "sortable");
              i &&
                !i.options.disabled &&
                (n.sortables.push({
                  instance: i,
                  shouldRevert: i.options.revert,
                }),
                i.refreshPositions(),
                i._trigger("activate", t, o));
            }));
        },
        stop: function (t, i) {
          var n = e(this).data("draggable"),
            s = e.extend({}, i, { item: n.element });
          e.each(n.sortables, function () {
            this.instance.isOver
              ? ((this.instance.isOver = 0),
                (n.cancelHelperRemoval = !0),
                (this.instance.cancelHelperRemoval = !1),
                this.shouldRevert && (this.instance.options.revert = !0),
                this.instance._mouseStop(t),
                (this.instance.options.helper = this.instance.options._helper),
                "original" == n.options.helper &&
                  this.instance.currentItem.css({ top: "auto", left: "auto" }))
              : ((this.instance.cancelHelperRemoval = !1),
                this.instance._trigger("deactivate", t, s));
          });
        },
        drag: function (t, i) {
          var n = e(this).data("draggable"),
            s = this;
          e.each(n.sortables, function () {
            ((this.instance.positionAbs = n.positionAbs),
              (this.instance.helperProportions = n.helperProportions),
              (this.instance.offset.click = n.offset.click),
              this.instance._intersectsWith(this.instance.containerCache)
                ? (this.instance.isOver ||
                    ((this.instance.isOver = 1),
                    (this.instance.currentItem = e(s)
                      .clone()
                      .removeAttr("id")
                      .appendTo(this.instance.element)
                      .data("sortable-item", !0)),
                    (this.instance.options._helper =
                      this.instance.options.helper),
                    (this.instance.options.helper = function () {
                      return i.helper[0];
                    }),
                    (t.target = this.instance.currentItem[0]),
                    this.instance._mouseCapture(t, !0),
                    this.instance._mouseStart(t, !0, !0),
                    (this.instance.offset.click.top = n.offset.click.top),
                    (this.instance.offset.click.left = n.offset.click.left),
                    (this.instance.offset.parent.left -=
                      n.offset.parent.left - this.instance.offset.parent.left),
                    (this.instance.offset.parent.top -=
                      n.offset.parent.top - this.instance.offset.parent.top),
                    n._trigger("toSortable", t),
                    (n.dropped = this.instance.element),
                    (n.currentItem = n.element),
                    (this.instance.fromOutside = n)),
                  this.instance.currentItem && this.instance._mouseDrag(t))
                : this.instance.isOver &&
                  ((this.instance.isOver = 0),
                  (this.instance.cancelHelperRemoval = !0),
                  (this.instance.options.revert = !1),
                  this.instance._trigger(
                    "out",
                    t,
                    this.instance._uiHash(this.instance),
                  ),
                  this.instance._mouseStop(t, !0),
                  (this.instance.options.helper =
                    this.instance.options._helper),
                  this.instance.currentItem.remove(),
                  this.instance.placeholder &&
                    this.instance.placeholder.remove(),
                  n._trigger("fromSortable", t),
                  (n.dropped = !1)));
          });
        },
      }),
      e.ui.plugin.add("draggable", "cursor", {
        start: function () {
          var t = e("body"),
            i = e(this).data("draggable").options;
          (t.css("cursor") && (i._cursor = t.css("cursor")),
            t.css("cursor", i.cursor));
        },
        stop: function () {
          var t = e(this).data("draggable").options;
          t._cursor && e("body").css("cursor", t._cursor);
        },
      }),
      e.ui.plugin.add("draggable", "opacity", {
        start: function (t, i) {
          var n = e(i.helper),
            s = e(this).data("draggable").options;
          (n.css("opacity") && (s._opacity = n.css("opacity")),
            n.css("opacity", s.opacity));
        },
        stop: function (t, i) {
          var n = e(this).data("draggable").options;
          n._opacity && e(i.helper).css("opacity", n._opacity);
        },
      }),
      e.ui.plugin.add("draggable", "scroll", {
        start: function () {
          var t = e(this).data("draggable");
          t.scrollParent[0] != document &&
            "HTML" != t.scrollParent[0].tagName &&
            (t.overflowOffset = t.scrollParent.offset());
        },
        drag: function (t) {
          var i = e(this).data("draggable"),
            n = i.options,
            s = !1;
          (i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName
            ? ((n.axis && "x" == n.axis) ||
                (i.overflowOffset.top +
                  i.scrollParent[0].offsetHeight -
                  t.pageY <
                n.scrollSensitivity
                  ? (i.scrollParent[0].scrollTop = s =
                      i.scrollParent[0].scrollTop + n.scrollSpeed)
                  : t.pageY - i.overflowOffset.top < n.scrollSensitivity &&
                    (i.scrollParent[0].scrollTop = s =
                      i.scrollParent[0].scrollTop - n.scrollSpeed)),
              (n.axis && "y" == n.axis) ||
                (i.overflowOffset.left +
                  i.scrollParent[0].offsetWidth -
                  t.pageX <
                n.scrollSensitivity
                  ? (i.scrollParent[0].scrollLeft = s =
                      i.scrollParent[0].scrollLeft + n.scrollSpeed)
                  : t.pageX - i.overflowOffset.left < n.scrollSensitivity &&
                    (i.scrollParent[0].scrollLeft = s =
                      i.scrollParent[0].scrollLeft - n.scrollSpeed)))
            : ((n.axis && "x" == n.axis) ||
                (t.pageY - e(document).scrollTop() < n.scrollSensitivity
                  ? (s = e(document).scrollTop(
                      e(document).scrollTop() - n.scrollSpeed,
                    ))
                  : e(window).height() - (t.pageY - e(document).scrollTop()) <
                      n.scrollSensitivity &&
                    (s = e(document).scrollTop(
                      e(document).scrollTop() + n.scrollSpeed,
                    ))),
              (n.axis && "y" == n.axis) ||
                (t.pageX - e(document).scrollLeft() < n.scrollSensitivity
                  ? (s = e(document).scrollLeft(
                      e(document).scrollLeft() - n.scrollSpeed,
                    ))
                  : e(window).width() - (t.pageX - e(document).scrollLeft()) <
                      n.scrollSensitivity &&
                    (s = e(document).scrollLeft(
                      e(document).scrollLeft() + n.scrollSpeed,
                    )))),
            !1 !== s &&
              e.ui.ddmanager &&
              !n.dropBehaviour &&
              e.ui.ddmanager.prepareOffsets(i, t));
        },
      }),
      e.ui.plugin.add("draggable", "snap", {
        start: function () {
          var t = e(this).data("draggable"),
            i = t.options;
          ((t.snapElements = []),
            e(
              i.snap.constructor != String
                ? i.snap.items || ":data(draggable)"
                : i.snap,
            ).each(function () {
              var i = e(this),
                n = i.offset();
              this != t.element[0] &&
                t.snapElements.push({
                  item: this,
                  width: i.outerWidth(),
                  height: i.outerHeight(),
                  top: n.top,
                  left: n.left,
                });
            }));
        },
        drag: function (t, i) {
          for (
            var n = e(this).data("draggable"),
              s = n.options,
              o = s.snapTolerance,
              a = i.offset.left,
              r = a + n.helperProportions.width,
              l = i.offset.top,
              c = l + n.helperProportions.height,
              u = n.snapElements.length - 1;
            u >= 0;
            u--
          ) {
            var h = n.snapElements[u].left,
              d = h + n.snapElements[u].width,
              p = n.snapElements[u].top,
              f = p + n.snapElements[u].height;
            if (
              (h - o < a && a < d + o && p - o < l && l < f + o) ||
              (h - o < a && a < d + o && p - o < c && c < f + o) ||
              (h - o < r && r < d + o && p - o < l && l < f + o) ||
              (h - o < r && r < d + o && p - o < c && c < f + o)
            ) {
              if ("inner" != s.snapMode) {
                var m = Math.abs(p - c) <= o,
                  g = Math.abs(f - l) <= o,
                  v = Math.abs(h - r) <= o,
                  y = Math.abs(d - a) <= o;
                (m &&
                  (i.position.top =
                    n._convertPositionTo("relative", {
                      top: p - n.helperProportions.height,
                      left: 0,
                    }).top - n.margins.top),
                  g &&
                    (i.position.top =
                      n._convertPositionTo("relative", { top: f, left: 0 })
                        .top - n.margins.top),
                  v &&
                    (i.position.left =
                      n._convertPositionTo("relative", {
                        top: 0,
                        left: h - n.helperProportions.width,
                      }).left - n.margins.left),
                  y &&
                    (i.position.left =
                      n._convertPositionTo("relative", { top: 0, left: d })
                        .left - n.margins.left));
              }
              var b = m || g || v || y;
              if ("outer" != s.snapMode) {
                var m = Math.abs(p - l) <= o,
                  g = Math.abs(f - c) <= o,
                  v = Math.abs(h - a) <= o,
                  y = Math.abs(d - r) <= o;
                (m &&
                  (i.position.top =
                    n._convertPositionTo("relative", { top: p, left: 0 }).top -
                    n.margins.top),
                  g &&
                    (i.position.top =
                      n._convertPositionTo("relative", {
                        top: f - n.helperProportions.height,
                        left: 0,
                      }).top - n.margins.top),
                  v &&
                    (i.position.left =
                      n._convertPositionTo("relative", { top: 0, left: h })
                        .left - n.margins.left),
                  y &&
                    (i.position.left =
                      n._convertPositionTo("relative", {
                        top: 0,
                        left: d - n.helperProportions.width,
                      }).left - n.margins.left));
              }
              (!n.snapElements[u].snapping &&
                (m || g || v || y || b) &&
                n.options.snap.snap &&
                n.options.snap.snap.call(
                  n.element,
                  t,
                  e.extend(n._uiHash(), { snapItem: n.snapElements[u].item }),
                ),
                (n.snapElements[u].snapping = m || g || v || y || b));
            } else
              (n.snapElements[u].snapping &&
                n.options.snap.release &&
                n.options.snap.release.call(
                  n.element,
                  t,
                  e.extend(n._uiHash(), { snapItem: n.snapElements[u].item }),
                ),
                (n.snapElements[u].snapping = !1));
          }
        },
      }),
      e.ui.plugin.add("draggable", "stack", {
        start: function () {
          var t = e(this).data("draggable").options,
            i = e.makeArray(e(t.stack)).sort(function (t, i) {
              return (
                (parseInt(e(t).css("zIndex"), 10) || 0) -
                (parseInt(e(i).css("zIndex"), 10) || 0)
              );
            });
          if (i.length) {
            var n = parseInt(i[0].style.zIndex) || 0;
            (e(i).each(function (e) {
              this.style.zIndex = n + e;
            }),
              (this[0].style.zIndex = n + i.length));
          }
        },
      }),
      e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, i) {
          var n = e(i.helper),
            s = e(this).data("draggable").options;
          (n.css("zIndex") && (s._zIndex = n.css("zIndex")),
            n.css("zIndex", s.zIndex));
        },
        stop: function (t, i) {
          var n = e(this).data("draggable").options;
          n._zIndex && e(i.helper).css("zIndex", n._zIndex);
        },
      }));
  })(jQuery) /*
   * jQuery UI Droppable 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Droppables
   *
   * Depends:
   *	jquery.ui.core.js
   *	jquery.ui.widget.js
   *	jquery.ui.mouse.js
   *	jquery.ui.draggable.js
   */,
  (function (e) {
    (e.widget("ui.droppable", {
      widgetEventPrefix: "drop",
      options: {
        accept: "*",
        activeClass: !1,
        addClasses: !0,
        greedy: !1,
        hoverClass: !1,
        scope: "default",
        tolerance: "intersect",
      },
      _create: function () {
        var t = this.options,
          i = t.accept;
        ((this.isover = 0),
          (this.isout = 1),
          (this.accept = e.isFunction(i)
            ? i
            : function (e) {
                return e.is(i);
              }),
          (this.proportions = {
            width: this.element[0].offsetWidth,
            height: this.element[0].offsetHeight,
          }),
          (e.ui.ddmanager.droppables[t.scope] =
            e.ui.ddmanager.droppables[t.scope] || []),
          e.ui.ddmanager.droppables[t.scope].push(this),
          t.addClasses && this.element.addClass("ui-droppable"));
      },
      destroy: function () {
        for (
          var t = e.ui.ddmanager.droppables[this.options.scope], i = 0;
          i < t.length;
          i++
        )
          t[i] == this && t.splice(i, 1);
        return (
          this.element
            .removeClass("ui-droppable ui-droppable-disabled")
            .removeData("droppable")
            .unbind(".droppable"),
          this
        );
      },
      _setOption: function (t, i) {
        ("accept" == t &&
          (this.accept = e.isFunction(i)
            ? i
            : function (e) {
                return e.is(i);
              }),
          e.Widget.prototype._setOption.apply(this, arguments));
      },
      _activate: function (t) {
        var i = e.ui.ddmanager.current;
        (this.options.activeClass &&
          this.element.addClass(this.options.activeClass),
          i && this._trigger("activate", t, this.ui(i)));
      },
      _deactivate: function (t) {
        var i = e.ui.ddmanager.current;
        (this.options.activeClass &&
          this.element.removeClass(this.options.activeClass),
          i && this._trigger("deactivate", t, this.ui(i)));
      },
      _over: function (t) {
        var i = e.ui.ddmanager.current;
        i &&
          (i.currentItem || i.element)[0] != this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this.options.hoverClass &&
            this.element.addClass(this.options.hoverClass),
          this._trigger("over", t, this.ui(i)));
      },
      _out: function (t) {
        var i = e.ui.ddmanager.current;
        i &&
          (i.currentItem || i.element)[0] != this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this.options.hoverClass &&
            this.element.removeClass(this.options.hoverClass),
          this._trigger("out", t, this.ui(i)));
      },
      _drop: function (t, i) {
        var n = i || e.ui.ddmanager.current;
        if (!n || (n.currentItem || n.element)[0] == this.element[0]) return !1;
        var s = !1;
        return (
          this.element
            .find(":data(droppable)")
            .not(".ui-draggable-dragging")
            .each(function () {
              var t = e.data(this, "droppable");
              if (
                t.options.greedy &&
                !t.options.disabled &&
                t.options.scope == n.options.scope &&
                t.accept.call(t.element[0], n.currentItem || n.element) &&
                e.ui.intersect(
                  n,
                  e.extend(t, { offset: t.element.offset() }),
                  t.options.tolerance,
                )
              )
                return ((s = !0), !1);
            }),
          !s &&
            !!this.accept.call(this.element[0], n.currentItem || n.element) &&
            (this.options.activeClass &&
              this.element.removeClass(this.options.activeClass),
            this.options.hoverClass &&
              this.element.removeClass(this.options.hoverClass),
            this._trigger("drop", t, this.ui(n)),
            this.element)
        );
      },
      ui: function (e) {
        return {
          draggable: e.currentItem || e.element,
          helper: e.helper,
          position: e.position,
          offset: e.positionAbs,
        };
      },
    }),
      e.extend(e.ui.droppable, { version: "1.8.16" }),
      (e.ui.intersect = function (t, i, n) {
        if (!i.offset) return !1;
        var s = (t.positionAbs || t.position.absolute).left,
          o = s + t.helperProportions.width,
          a = (t.positionAbs || t.position.absolute).top,
          r = a + t.helperProportions.height,
          l = i.offset.left,
          c = l + i.proportions.width,
          u = i.offset.top,
          h = u + i.proportions.height;
        switch (n) {
          case "fit":
            return l <= s && o <= c && u <= a && r <= h;
          case "intersect":
            return (
              l < s + t.helperProportions.width / 2 &&
              o - t.helperProportions.width / 2 < c &&
              u < a + t.helperProportions.height / 2 &&
              r - t.helperProportions.height / 2 < h
            );
          case "pointer":
            var d =
                (t.positionAbs || t.position.absolute).left +
                (t.clickOffset || t.offset.click).left,
              p =
                (t.positionAbs || t.position.absolute).top +
                (t.clickOffset || t.offset.click).top;
            return e.ui.isOver(
              p,
              d,
              u,
              l,
              i.proportions.height,
              i.proportions.width,
            );
          case "touch":
            return (
              ((a >= u && a <= h) || (r >= u && r <= h) || (a < u && r > h)) &&
              ((s >= l && s <= c) || (o >= l && o <= c) || (s < l && o > c))
            );
          default:
            return !1;
        }
      }),
      (e.ui.ddmanager = {
        current: null,
        droppables: { default: [] },
        prepareOffsets: function (t, i) {
          var n = e.ui.ddmanager.droppables[t.options.scope] || [],
            s = i ? i.type : null,
            o = (t.currentItem || t.element).find(":data(droppable)").andSelf();
          e: for (var a = 0; a < n.length; a++)
            if (
              !(
                n[a].options.disabled ||
                (t &&
                  !n[a].accept.call(
                    n[a].element[0],
                    t.currentItem || t.element,
                  ))
              )
            ) {
              for (var r = 0; r < o.length; r++)
                if (o[r] == n[a].element[0]) {
                  n[a].proportions.height = 0;
                  continue e;
                }
              ((n[a].visible = "none" != n[a].element.css("display")),
                n[a].visible &&
                  ("mousedown" == s && n[a]._activate.call(n[a], i),
                  (n[a].offset = n[a].element.offset()),
                  (n[a].proportions = {
                    width: n[a].element[0].offsetWidth,
                    height: n[a].element[0].offsetHeight,
                  })));
            }
        },
        drop: function (t, i) {
          var n = !1;
          return (
            e.each(
              e.ui.ddmanager.droppables[t.options.scope] || [],
              function () {
                this.options &&
                  (!this.options.disabled &&
                    this.visible &&
                    e.ui.intersect(t, this, this.options.tolerance) &&
                    (n = n || this._drop.call(this, i)),
                  !this.options.disabled &&
                    this.visible &&
                    this.accept.call(
                      this.element[0],
                      t.currentItem || t.element,
                    ) &&
                    ((this.isout = 1),
                    (this.isover = 0),
                    this._deactivate.call(this, i)));
              },
            ),
            n
          );
        },
        dragStart: function (t, i) {
          t.element
            .parents(":not(body,html)")
            .bind("scroll.droppable", function () {
              t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i);
            });
        },
        drag: function (t, i) {
          (t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i),
            e.each(
              e.ui.ddmanager.droppables[t.options.scope] || [],
              function () {
                if (
                  !this.options.disabled &&
                  !this.greedyChild &&
                  this.visible
                ) {
                  var n = e.ui.intersect(t, this, this.options.tolerance),
                    s =
                      n || 1 != this.isover
                        ? n && 0 == this.isover
                          ? "isover"
                          : null
                        : "isout";
                  if (s) {
                    var o;
                    if (this.options.greedy) {
                      var a = this.element.parents(":data(droppable):eq(0)");
                      a.length &&
                        ((o = e.data(a[0], "droppable")),
                        (o.greedyChild = "isover" == s ? 1 : 0));
                    }
                    (o &&
                      "isover" == s &&
                      ((o.isover = 0), (o.isout = 1), o._out.call(o, i)),
                      (this[s] = 1),
                      (this["isout" == s ? "isover" : "isout"] = 0),
                      this["isover" == s ? "_over" : "_out"].call(this, i),
                      o &&
                        "isout" == s &&
                        ((o.isout = 0), (o.isover = 1), o._over.call(o, i)));
                  }
                }
              },
            ));
        },
        dragStop: function (t, i) {
          (t.element.parents(":not(body,html)").unbind("scroll.droppable"),
            t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i));
        },
      }));
  })(jQuery) /*
   * jQuery UI Resizable 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Resizables
   *
   * Depends:
   *	jquery.ui.core.js
   *	jquery.ui.mouse.js
   *	jquery.ui.widget.js
   */,
  (function (e) {
    (e.widget("ui.resizable", e.ui.mouse, {
      widgetEventPrefix: "resize",
      options: {
        alsoResize: !1,
        animate: !1,
        animateDuration: "slow",
        animateEasing: "swing",
        aspectRatio: !1,
        autoHide: !1,
        containment: !1,
        ghost: !1,
        grid: !1,
        handles: "e,s,se",
        helper: !1,
        maxHeight: null,
        maxWidth: null,
        minHeight: 10,
        minWidth: 10,
        zIndex: 1e3,
      },
      _create: function () {
        var t = this,
          i = this.options;
        if (
          (this.element.addClass("ui-resizable"),
          e.extend(this, {
            _aspectRatio: !!i.aspectRatio,
            aspectRatio: i.aspectRatio,
            originalElement: this.element,
            _proportionallyResizeElements: [],
            _helper:
              i.helper || i.ghost || i.animate
                ? i.helper || "ui-resizable-helper"
                : null,
          }),
          this.element[0].nodeName.match(
            /canvas|textarea|input|select|button|img/i,
          ) &&
            (/relative/.test(this.element.css("position")) &&
              e.browser.opera &&
              this.element.css({
                position: "relative",
                top: "auto",
                left: "auto",
              }),
            this.element.wrap(
              e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css(
                {
                  position: this.element.css("position"),
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  top: this.element.css("top"),
                  left: this.element.css("left"),
                },
              ),
            ),
            (this.element = this.element
              .parent()
              .data("resizable", this.element.data("resizable"))),
            (this.elementIsWrapper = !0),
            this.element.css({
              marginLeft: this.originalElement.css("marginLeft"),
              marginTop: this.originalElement.css("marginTop"),
              marginRight: this.originalElement.css("marginRight"),
              marginBottom: this.originalElement.css("marginBottom"),
            }),
            this.originalElement.css({
              marginLeft: 0,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
            }),
            (this.originalResizeStyle = this.originalElement.css("resize")),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(
              this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block",
              }),
            ),
            this.originalElement.css({
              margin: this.originalElement.css("margin"),
            }),
            this._proportionallyResize()),
          (this.handles =
            i.handles ||
            (e(".ui-resizable-handle", this.element).length
              ? {
                  n: ".ui-resizable-n",
                  e: ".ui-resizable-e",
                  s: ".ui-resizable-s",
                  w: ".ui-resizable-w",
                  se: ".ui-resizable-se",
                  sw: ".ui-resizable-sw",
                  ne: ".ui-resizable-ne",
                  nw: ".ui-resizable-nw",
                }
              : "e,s,se")),
          this.handles.constructor == String)
        ) {
          "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
          var n = this.handles.split(",");
          this.handles = {};
          for (var s = 0; s < n.length; s++) {
            var o = e.trim(n[s]),
              a = "ui-resizable-" + o,
              r = e('<div class="ui-resizable-handle ' + a + '"></div>');
            (/sw|se|ne|nw/.test(o) && r.css({ zIndex: ++i.zIndex }),
              "se" == o && r.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
              (this.handles[o] = ".ui-resizable-" + o),
              this.element.append(r));
          }
        }
        ((this._renderAxis = function (t) {
          t = t || this.element;
          for (var i in this.handles) {
            if (
              (this.handles[i].constructor == String &&
                (this.handles[i] = e(this.handles[i], this.element).show()),
              this.elementIsWrapper &&
                this.originalElement[0].nodeName.match(
                  /textarea|input|select|button/i,
                ))
            ) {
              var n = e(this.handles[i], this.element),
                s = 0;
              s = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth();
              var o = [
                "padding",
                /ne|nw|n/.test(i)
                  ? "Top"
                  : /se|sw|s/.test(i)
                    ? "Bottom"
                    : /^e$/.test(i)
                      ? "Right"
                      : "Left",
              ].join("");
              (t.css(o, s), this._proportionallyResize());
            }
            e(this.handles[i]).length;
          }
        }),
          this._renderAxis(this.element),
          (this._handles = e(
            ".ui-resizable-handle",
            this.element,
          ).disableSelection()),
          this._handles.mouseover(function () {
            if (!t.resizing) {
              if (this.className)
                var e = this.className.match(
                  /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i,
                );
              t.axis = e && e[1] ? e[1] : "se";
            }
          }),
          i.autoHide &&
            (this._handles.hide(),
            e(this.element)
              .addClass("ui-resizable-autohide")
              .hover(
                function () {
                  i.disabled ||
                    (e(this).removeClass("ui-resizable-autohide"),
                    t._handles.show());
                },
                function () {
                  i.disabled ||
                    t.resizing ||
                    (e(this).addClass("ui-resizable-autohide"),
                    t._handles.hide());
                },
              )),
          this._mouseInit());
      },
      destroy: function () {
        this._mouseDestroy();
        var t = function (t) {
          e(t)
            .removeClass(
              "ui-resizable ui-resizable-disabled ui-resizable-resizing",
            )
            .removeData("resizable")
            .unbind(".resizable")
            .find(".ui-resizable-handle")
            .remove();
        };
        if (this.elementIsWrapper) {
          t(this.element);
          var i = this.element;
          i.after(
            this.originalElement.css({
              position: i.css("position"),
              width: i.outerWidth(),
              height: i.outerHeight(),
              top: i.css("top"),
              left: i.css("left"),
            }),
          ).remove();
        }
        return (
          this.originalElement.css("resize", this.originalResizeStyle),
          t(this.originalElement),
          this
        );
      },
      _mouseCapture: function (t) {
        var i = !1;
        for (var n in this.handles)
          e(this.handles[n])[0] == t.target && (i = !0);
        return !this.options.disabled && i;
      },
      _mouseStart: function (i) {
        var n = this.options,
          s = this.element.position(),
          o = this.element;
        ((this.resizing = !0),
          (this.documentScroll = {
            top: e(document).scrollTop(),
            left: e(document).scrollLeft(),
          }),
          (o.is(".ui-draggable") || /absolute/.test(o.css("position"))) &&
            o.css({ position: "absolute", top: s.top, left: s.left }),
          e.browser.opera &&
            /relative/.test(o.css("position")) &&
            o.css({ position: "relative", top: "auto", left: "auto" }),
          this._renderProxy());
        var a = t(this.helper.css("left")),
          r = t(this.helper.css("top"));
        (n.containment &&
          ((a += e(n.containment).scrollLeft() || 0),
          (r += e(n.containment).scrollTop() || 0)),
          (this.offset = this.helper.offset()),
          (this.position = { left: a, top: r }),
          (this.size = this._helper
            ? { width: o.outerWidth(), height: o.outerHeight() }
            : { width: o.width(), height: o.height() }),
          (this.originalSize = this._helper
            ? { width: o.outerWidth(), height: o.outerHeight() }
            : { width: o.width(), height: o.height() }),
          (this.originalPosition = { left: a, top: r }),
          (this.sizeDiff = {
            width: o.outerWidth() - o.width(),
            height: o.outerHeight() - o.height(),
          }),
          (this.originalMousePosition = { left: i.pageX, top: i.pageY }),
          (this.aspectRatio =
            "number" == typeof n.aspectRatio
              ? n.aspectRatio
              : this.originalSize.width / this.originalSize.height || 1));
        var l = e(".ui-resizable-" + this.axis).css("cursor");
        return (
          e("body").css("cursor", "auto" == l ? this.axis + "-resize" : l),
          o.addClass("ui-resizable-resizing"),
          this._propagate("start", i),
          !0
        );
      },
      _mouseDrag: function (t) {
        var i = this.helper,
          n = (this.options, this.originalMousePosition),
          s = this.axis,
          o = t.pageX - n.left || 0,
          a = t.pageY - n.top || 0,
          r = this._change[s];
        if (!r) return !1;
        var l = r.apply(this, [t, o, a]);
        (e.browser.msie && e.browser.version, this.sizeDiff);
        return (
          this._updateVirtualBoundaries(t.shiftKey),
          (this._aspectRatio || t.shiftKey) && (l = this._updateRatio(l, t)),
          (l = this._respectSize(l, t)),
          this._propagate("resize", t),
          i.css({
            top: this.position.top + "px",
            left: this.position.left + "px",
            width: this.size.width + "px",
            height: this.size.height + "px",
          }),
          !this._helper &&
            this._proportionallyResizeElements.length &&
            this._proportionallyResize(),
          this._updateCache(l),
          this._trigger("resize", t, this.ui()),
          !1
        );
      },
      _mouseStop: function (t) {
        this.resizing = !1;
        var i = this.options,
          n = this;
        if (this._helper) {
          var s = this._proportionallyResizeElements,
            o = s.length && /textarea/i.test(s[0].nodeName),
            a = o && e.ui.hasScroll(s[0], "left") ? 0 : n.sizeDiff.height,
            r = o ? 0 : n.sizeDiff.width,
            l = { width: n.helper.width() - r, height: n.helper.height() - a },
            c =
              parseInt(n.element.css("left"), 10) +
                (n.position.left - n.originalPosition.left) || null,
            u =
              parseInt(n.element.css("top"), 10) +
                (n.position.top - n.originalPosition.top) || null;
          (i.animate || this.element.css(e.extend(l, { top: u, left: c })),
            n.helper.height(n.size.height),
            n.helper.width(n.size.width),
            this._helper && !i.animate && this._proportionallyResize());
        }
        return (
          e("body").css("cursor", "auto"),
          this.element.removeClass("ui-resizable-resizing"),
          this._propagate("stop", t),
          this._helper && this.helper.remove(),
          !1
        );
      },
      _updateVirtualBoundaries: function (e) {
        var t,
          n,
          s,
          o,
          a,
          r = this.options;
        ((a = {
          minWidth: i(r.minWidth) ? r.minWidth : 0,
          maxWidth: i(r.maxWidth) ? r.maxWidth : Infinity,
          minHeight: i(r.minHeight) ? r.minHeight : 0,
          maxHeight: i(r.maxHeight) ? r.maxHeight : Infinity,
        }),
          (this._aspectRatio || e) &&
            ((t = a.minHeight * this.aspectRatio),
            (s = a.minWidth / this.aspectRatio),
            (n = a.maxHeight * this.aspectRatio),
            (o = a.maxWidth / this.aspectRatio),
            t > a.minWidth && (a.minWidth = t),
            s > a.minHeight && (a.minHeight = s),
            n < a.maxWidth && (a.maxWidth = n),
            o < a.maxHeight && (a.maxHeight = o)),
          (this._vBoundaries = a));
      },
      _updateCache: function (e) {
        this.options;
        ((this.offset = this.helper.offset()),
          i(e.left) && (this.position.left = e.left),
          i(e.top) && (this.position.top = e.top),
          i(e.height) && (this.size.height = e.height),
          i(e.width) && (this.size.width = e.width));
      },
      _updateRatio: function (e) {
        var t = (this.options, this.position),
          n = this.size,
          s = this.axis;
        return (
          i(e.height)
            ? (e.width = e.height * this.aspectRatio)
            : i(e.width) && (e.height = e.width / this.aspectRatio),
          "sw" == s &&
            ((e.left = t.left + (n.width - e.width)), (e.top = null)),
          "nw" == s &&
            ((e.top = t.top + (n.height - e.height)),
            (e.left = t.left + (n.width - e.width))),
          e
        );
      },
      _respectSize: function (e, t) {
        var n = (this.helper, this._vBoundaries),
          s = (this._aspectRatio || t.shiftKey, this.axis),
          o = i(e.width) && n.maxWidth && n.maxWidth < e.width,
          a = i(e.height) && n.maxHeight && n.maxHeight < e.height,
          r = i(e.width) && n.minWidth && n.minWidth > e.width,
          l = i(e.height) && n.minHeight && n.minHeight > e.height;
        (r && (e.width = n.minWidth),
          l && (e.height = n.minHeight),
          o && (e.width = n.maxWidth),
          a && (e.height = n.maxHeight));
        var c = this.originalPosition.left + this.originalSize.width,
          u = this.position.top + this.size.height,
          h = /sw|nw|w/.test(s),
          d = /nw|ne|n/.test(s);
        (r && h && (e.left = c - n.minWidth),
          o && h && (e.left = c - n.maxWidth),
          l && d && (e.top = u - n.minHeight),
          a && d && (e.top = u - n.maxHeight));
        var p = !e.width && !e.height;
        return (
          p && !e.left && e.top
            ? (e.top = null)
            : p && !e.top && e.left && (e.left = null),
          e
        );
      },
      _proportionallyResize: function () {
        this.options;
        if (this._proportionallyResizeElements.length)
          for (
            var t = this.helper || this.element, i = 0;
            i < this._proportionallyResizeElements.length;
            i++
          ) {
            var n = this._proportionallyResizeElements[i];
            if (!this.borderDif) {
              var s = [
                  n.css("borderTopWidth"),
                  n.css("borderRightWidth"),
                  n.css("borderBottomWidth"),
                  n.css("borderLeftWidth"),
                ],
                o = [
                  n.css("paddingTop"),
                  n.css("paddingRight"),
                  n.css("paddingBottom"),
                  n.css("paddingLeft"),
                ];
              this.borderDif = e.map(s, function (e, t) {
                return (parseInt(e, 10) || 0) + (parseInt(o[t], 10) || 0);
              });
            }
            (e.browser.msie &&
              (e(t).is(":hidden") || e(t).parents(":hidden").length)) ||
              n.css({
                height: t.height() - this.borderDif[0] - this.borderDif[2] || 0,
                width: t.width() - this.borderDif[1] - this.borderDif[3] || 0,
              });
          }
      },
      _renderProxy: function () {
        var t = this.element,
          i = this.options;
        if (((this.elementOffset = t.offset()), this._helper)) {
          this.helper =
            this.helper || e('<div style="overflow:hidden;"></div>');
          var n = e.browser.msie && e.browser.version < 7,
            s = n ? 1 : 0,
            o = n ? 2 : -1;
          (this.helper
            .addClass(this._helper)
            .css({
              width: this.element.outerWidth() + o,
              height: this.element.outerHeight() + o,
              position: "absolute",
              left: this.elementOffset.left - s + "px",
              top: this.elementOffset.top - s + "px",
              zIndex: ++i.zIndex,
            }),
            this.helper.appendTo("body").disableSelection());
        } else this.helper = this.element;
      },
      _change: {
        e: function (e, t) {
          return { width: this.originalSize.width + t };
        },
        w: function (e, t) {
          var i = (this.options, this.originalSize);
          return { left: this.originalPosition.left + t, width: i.width - t };
        },
        n: function (e, t, i) {
          var n = (this.options, this.originalSize);
          return { top: this.originalPosition.top + i, height: n.height - i };
        },
        s: function (e, t, i) {
          return { height: this.originalSize.height + i };
        },
        se: function (t, i, n) {
          return e.extend(
            this._change.s.apply(this, arguments),
            this._change.e.apply(this, [t, i, n]),
          );
        },
        sw: function (t, i, n) {
          return e.extend(
            this._change.s.apply(this, arguments),
            this._change.w.apply(this, [t, i, n]),
          );
        },
        ne: function (t, i, n) {
          return e.extend(
            this._change.n.apply(this, arguments),
            this._change.e.apply(this, [t, i, n]),
          );
        },
        nw: function (t, i, n) {
          return e.extend(
            this._change.n.apply(this, arguments),
            this._change.w.apply(this, [t, i, n]),
          );
        },
      },
      _propagate: function (t, i) {
        (e.ui.plugin.call(this, t, [i, this.ui()]),
          "resize" != t && this._trigger(t, i, this.ui()));
      },
      plugins: {},
      ui: function () {
        return {
          originalElement: this.originalElement,
          element: this.element,
          helper: this.helper,
          position: this.position,
          size: this.size,
          originalSize: this.originalSize,
          originalPosition: this.originalPosition,
        };
      },
    }),
      e.extend(e.ui.resizable, { version: "1.8.16" }),
      e.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
          var t = e(this).data("resizable"),
            i = t.options,
            n = function (t) {
              e(t).each(function () {
                var t = e(this);
                t.data("resizable-alsoresize", {
                  width: parseInt(t.width(), 10),
                  height: parseInt(t.height(), 10),
                  left: parseInt(t.css("left"), 10),
                  top: parseInt(t.css("top"), 10),
                  position: t.css("position"),
                });
              });
            };
          "object" != typeof i.alsoResize || i.alsoResize.parentNode
            ? n(i.alsoResize)
            : i.alsoResize.length
              ? ((i.alsoResize = i.alsoResize[0]), n(i.alsoResize))
              : e.each(i.alsoResize, function (e) {
                  n(e);
                });
        },
        resize: function (t, i) {
          var n = e(this).data("resizable"),
            s = n.options,
            o = n.originalSize,
            a = n.originalPosition,
            r = {
              height: n.size.height - o.height || 0,
              width: n.size.width - o.width || 0,
              top: n.position.top - a.top || 0,
              left: n.position.left - a.left || 0,
            },
            l = function (t, s) {
              e(t).each(function () {
                var t = e(this),
                  o = e(this).data("resizable-alsoresize"),
                  a = {},
                  l =
                    s && s.length
                      ? s
                      : t.parents(i.originalElement[0]).length
                        ? ["width", "height"]
                        : ["width", "height", "top", "left"];
                (e.each(l, function (e, t) {
                  var i = (o[t] || 0) + (r[t] || 0);
                  i && i >= 0 && (a[t] = i || null);
                }),
                  e.browser.opera &&
                    /relative/.test(t.css("position")) &&
                    ((n._revertToRelativePosition = !0),
                    t.css({ position: "absolute", top: "auto", left: "auto" })),
                  t.css(a));
              });
            };
          "object" != typeof s.alsoResize || s.alsoResize.nodeType
            ? l(s.alsoResize)
            : e.each(s.alsoResize, function (e, t) {
                l(e, t);
              });
        },
        stop: function () {
          var t = e(this).data("resizable"),
            i = t.options,
            n = function (t) {
              e(t).each(function () {
                var t = e(this);
                t.css({ position: t.data("resizable-alsoresize").position });
              });
            };
          (t._revertToRelativePosition &&
            ((t._revertToRelativePosition = !1),
            "object" != typeof i.alsoResize || i.alsoResize.nodeType
              ? n(i.alsoResize)
              : e.each(i.alsoResize, function (e) {
                  n(e);
                })),
            e(this).removeData("resizable-alsoresize"));
        },
      }),
      e.ui.plugin.add("resizable", "animate", {
        stop: function (t) {
          var i = e(this).data("resizable"),
            n = i.options,
            s = i._proportionallyResizeElements,
            o = s.length && /textarea/i.test(s[0].nodeName),
            a = o && e.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
            r = o ? 0 : i.sizeDiff.width,
            l = { width: i.size.width - r, height: i.size.height - a },
            c =
              parseInt(i.element.css("left"), 10) +
                (i.position.left - i.originalPosition.left) || null,
            u =
              parseInt(i.element.css("top"), 10) +
                (i.position.top - i.originalPosition.top) || null;
          i.element.animate(e.extend(l, u && c ? { top: u, left: c } : {}), {
            duration: n.animateDuration,
            easing: n.animateEasing,
            step: function () {
              var n = {
                width: parseInt(i.element.css("width"), 10),
                height: parseInt(i.element.css("height"), 10),
                top: parseInt(i.element.css("top"), 10),
                left: parseInt(i.element.css("left"), 10),
              };
              (s &&
                s.length &&
                e(s[0]).css({ width: n.width, height: n.height }),
                i._updateCache(n),
                i._propagate("resize", t));
            },
          });
        },
      }),
      e.ui.plugin.add("resizable", "containment", {
        start: function () {
          var i = e(this).data("resizable"),
            n = i.options,
            s = i.element,
            o = n.containment,
            a =
              o instanceof e
                ? o.get(0)
                : /parent/.test(o)
                  ? s.parent().get(0)
                  : o;
          if (a)
            if (
              ((i.containerElement = e(a)), /document/.test(o) || o == document)
            )
              ((i.containerOffset = { left: 0, top: 0 }),
                (i.containerPosition = { left: 0, top: 0 }),
                (i.parentData = {
                  element: e(document),
                  left: 0,
                  top: 0,
                  width: e(document).width(),
                  height:
                    e(document).height() ||
                    document.body.parentNode.scrollHeight,
                }));
            else {
              var r = e(a),
                l = [];
              (e(["Top", "Right", "Left", "Bottom"]).each(function (e, i) {
                l[e] = t(r.css("padding" + i));
              }),
                (i.containerOffset = r.offset()),
                (i.containerPosition = r.position()),
                (i.containerSize = {
                  height: r.innerHeight() - l[3],
                  width: r.innerWidth() - l[1],
                }));
              var c = i.containerOffset,
                u = i.containerSize.height,
                h = i.containerSize.width,
                d = e.ui.hasScroll(a, "left") ? a.scrollWidth : h,
                p = e.ui.hasScroll(a) ? a.scrollHeight : u;
              i.parentData = {
                element: a,
                left: c.left,
                top: c.top,
                width: d,
                height: p,
              };
            }
        },
        resize: function (t) {
          var i = e(this).data("resizable"),
            n = i.options,
            s = (i.containerSize, i.containerOffset),
            o = (i.size, i.position),
            a = i._aspectRatio || t.shiftKey,
            r = { top: 0, left: 0 },
            l = i.containerElement;
          (l[0] != document && /static/.test(l.css("position")) && (r = s),
            o.left < (i._helper ? s.left : 0) &&
              ((i.size.width =
                i.size.width +
                (i._helper
                  ? i.position.left - s.left
                  : i.position.left - r.left)),
              a && (i.size.height = i.size.width / n.aspectRatio),
              (i.position.left = n.helper ? s.left : 0)),
            o.top < (i._helper ? s.top : 0) &&
              ((i.size.height =
                i.size.height +
                (i._helper ? i.position.top - s.top : i.position.top)),
              a && (i.size.width = i.size.height * n.aspectRatio),
              (i.position.top = i._helper ? s.top : 0)),
            (i.offset.left = i.parentData.left + i.position.left),
            (i.offset.top = i.parentData.top + i.position.top));
          var c = Math.abs(
              (i._helper, i.offset.left - r.left + i.sizeDiff.width),
            ),
            u = Math.abs(
              (i._helper ? i.offset.top - r.top : i.offset.top - s.top) +
                i.sizeDiff.height,
            ),
            h = i.containerElement.get(0) == i.element.parent().get(0),
            d = /relative|absolute/.test(i.containerElement.css("position"));
          (h && d && (c -= i.parentData.left),
            c + i.size.width >= i.parentData.width &&
              ((i.size.width = i.parentData.width - c),
              a && (i.size.height = i.size.width / i.aspectRatio)),
            u + i.size.height >= i.parentData.height &&
              ((i.size.height = i.parentData.height - u),
              a && (i.size.width = i.size.height * i.aspectRatio)));
        },
        stop: function () {
          var t = e(this).data("resizable"),
            i = t.options,
            n = (t.position, t.containerOffset),
            s = t.containerPosition,
            o = t.containerElement,
            a = e(t.helper),
            r = a.offset(),
            l = a.outerWidth() - t.sizeDiff.width,
            c = a.outerHeight() - t.sizeDiff.height;
          (t._helper &&
            !i.animate &&
            /relative/.test(o.css("position")) &&
            e(this).css({
              left: r.left - s.left - n.left,
              width: l,
              height: c,
            }),
            t._helper &&
              !i.animate &&
              /static/.test(o.css("position")) &&
              e(this).css({
                left: r.left - s.left - n.left,
                width: l,
                height: c,
              }));
        },
      }),
      e.ui.plugin.add("resizable", "ghost", {
        start: function () {
          var t = e(this).data("resizable"),
            i = t.options,
            n = t.size;
          ((t.ghost = t.originalElement.clone()),
            t.ghost
              .css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: n.height,
                width: n.width,
                margin: 0,
                left: 0,
                top: 0,
              })
              .addClass("ui-resizable-ghost")
              .addClass("string" == typeof i.ghost ? i.ghost : ""),
            t.ghost.appendTo(t.helper));
        },
        resize: function () {
          var t = e(this).data("resizable");
          t.options;
          t.ghost &&
            t.ghost.css({
              position: "relative",
              height: t.size.height,
              width: t.size.width,
            });
        },
        stop: function () {
          var t = e(this).data("resizable");
          t.options;
          t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
        },
      }),
      e.ui.plugin.add("resizable", "grid", {
        resize: function (t) {
          var i = e(this).data("resizable"),
            n = i.options,
            s = i.size,
            o = i.originalSize,
            a = i.originalPosition,
            r = i.axis;
          n._aspectRatio || t.shiftKey;
          n.grid = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid;
          var l =
              Math.round((s.width - o.width) / (n.grid[0] || 1)) *
              (n.grid[0] || 1),
            c =
              Math.round((s.height - o.height) / (n.grid[1] || 1)) *
              (n.grid[1] || 1);
          /^(se|s|e)$/.test(r)
            ? ((i.size.width = o.width + l), (i.size.height = o.height + c))
            : /^(ne)$/.test(r)
              ? ((i.size.width = o.width + l),
                (i.size.height = o.height + c),
                (i.position.top = a.top - c))
              : /^(sw)$/.test(r)
                ? ((i.size.width = o.width + l),
                  (i.size.height = o.height + c),
                  (i.position.left = a.left - l))
                : ((i.size.width = o.width + l),
                  (i.size.height = o.height + c),
                  (i.position.top = a.top - c),
                  (i.position.left = a.left - l));
        },
      }));
    var t = function (e) {
        return parseInt(e, 10) || 0;
      },
      i = function (e) {
        return !isNaN(parseInt(e, 10));
      };
  })(jQuery) /*
   * jQuery UI Selectable 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Selectables
   *
   * Depends:
   *	jquery.ui.core.js
   *	jquery.ui.mouse.js
   *	jquery.ui.widget.js
   */,
  (function (e) {
    (e.widget("ui.selectable", e.ui.mouse, {
      options: {
        appendTo: "body",
        autoRefresh: !0,
        distance: 0,
        filter: "*",
        tolerance: "touch",
      },
      _create: function () {
        var t = this;
        (this.element.addClass("ui-selectable"), (this.dragged = !1));
        var i;
        ((this.refresh = function () {
          ((i = e(t.options.filter, t.element[0])),
            i.each(function () {
              var t = e(this),
                i = t.offset();
              e.data(this, "selectable-item", {
                element: this,
                $element: t,
                left: i.left,
                top: i.top,
                right: i.left + t.outerWidth(),
                bottom: i.top + t.outerHeight(),
                startselected: !1,
                selected: t.hasClass("ui-selected"),
                selecting: t.hasClass("ui-selecting"),
                unselecting: t.hasClass("ui-unselecting"),
              });
            }));
        }),
          this.refresh(),
          (this.selectees = i.addClass("ui-selectee")),
          this._mouseInit(),
          (this.helper = e("<div class='ui-selectable-helper'></div>")));
      },
      destroy: function () {
        return (
          this.selectees
            .removeClass("ui-selectee")
            .removeData("selectable-item"),
          this.element
            .removeClass("ui-selectable ui-selectable-disabled")
            .removeData("selectable")
            .unbind(".selectable"),
          this._mouseDestroy(),
          this
        );
      },
      _mouseStart: function (t) {
        var i = this;
        if (((this.opos = [t.pageX, t.pageY]), !this.options.disabled)) {
          var n = this.options;
          ((this.selectees = e(n.filter, this.element[0])),
            this._trigger("start", t),
            e(n.appendTo).append(this.helper),
            this.helper.css({
              left: t.clientX,
              top: t.clientY,
              width: 0,
              height: 0,
            }),
            n.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function () {
              var n = e.data(this, "selectable-item");
              ((n.startselected = !0),
                t.metaKey ||
                  (n.$element.removeClass("ui-selected"),
                  (n.selected = !1),
                  n.$element.addClass("ui-unselecting"),
                  (n.unselecting = !0),
                  i._trigger("unselecting", t, { unselecting: n.element })));
            }),
            e(t.target)
              .parents()
              .andSelf()
              .each(function () {
                var n = e.data(this, "selectable-item");
                if (n) {
                  var s = !t.metaKey || !n.$element.hasClass("ui-selected");
                  return (
                    n.$element
                      .removeClass(s ? "ui-unselecting" : "ui-selected")
                      .addClass(s ? "ui-selecting" : "ui-unselecting"),
                    (n.unselecting = !s),
                    (n.selecting = s),
                    (n.selected = s),
                    s
                      ? i._trigger("selecting", t, { selecting: n.element })
                      : i._trigger("unselecting", t, {
                          unselecting: n.element,
                        }),
                    !1
                  );
                }
              }));
        }
      },
      _mouseDrag: function (t) {
        var i = this;
        if (((this.dragged = !0), !this.options.disabled)) {
          var n = this.options,
            s = this.opos[0],
            o = this.opos[1],
            a = t.pageX,
            r = t.pageY;
          if (s > a) {
            var l = a;
            ((a = s), (s = l));
          }
          if (o > r) {
            var l = r;
            ((r = o), (o = l));
          }
          return (
            this.helper.css({ left: s, top: o, width: a - s, height: r - o }),
            this.selectees.each(function () {
              var l = e.data(this, "selectable-item");
              if (l && l.element != i.element[0]) {
                var c = !1;
                ("touch" == n.tolerance
                  ? (c = !(
                      l.left > a ||
                      l.right < s ||
                      l.top > r ||
                      l.bottom < o
                    ))
                  : "fit" == n.tolerance &&
                    (c =
                      l.left > s && l.right < a && l.top > o && l.bottom < r),
                  c
                    ? (l.selected &&
                        (l.$element.removeClass("ui-selected"),
                        (l.selected = !1)),
                      l.unselecting &&
                        (l.$element.removeClass("ui-unselecting"),
                        (l.unselecting = !1)),
                      l.selecting ||
                        (l.$element.addClass("ui-selecting"),
                        (l.selecting = !0),
                        i._trigger("selecting", t, { selecting: l.element })))
                    : (l.selecting &&
                        (t.metaKey && l.startselected
                          ? (l.$element.removeClass("ui-selecting"),
                            (l.selecting = !1),
                            l.$element.addClass("ui-selected"),
                            (l.selected = !0))
                          : (l.$element.removeClass("ui-selecting"),
                            (l.selecting = !1),
                            l.startselected &&
                              (l.$element.addClass("ui-unselecting"),
                              (l.unselecting = !0)),
                            i._trigger("unselecting", t, {
                              unselecting: l.element,
                            }))),
                      l.selected &&
                        (t.metaKey ||
                          l.startselected ||
                          (l.$element.removeClass("ui-selected"),
                          (l.selected = !1),
                          l.$element.addClass("ui-unselecting"),
                          (l.unselecting = !0),
                          i._trigger("unselecting", t, {
                            unselecting: l.element,
                          })))));
              }
            }),
            !1
          );
        }
      },
      _mouseStop: function (t) {
        var i = this;
        this.dragged = !1;
        this.options;
        return (
          e(".ui-unselecting", this.element[0]).each(function () {
            var n = e.data(this, "selectable-item");
            (n.$element.removeClass("ui-unselecting"),
              (n.unselecting = !1),
              (n.startselected = !1),
              i._trigger("unselected", t, { unselected: n.element }));
          }),
          e(".ui-selecting", this.element[0]).each(function () {
            var n = e.data(this, "selectable-item");
            (n.$element.removeClass("ui-selecting").addClass("ui-selected"),
              (n.selecting = !1),
              (n.selected = !0),
              (n.startselected = !0),
              i._trigger("selected", t, { selected: n.element }));
          }),
          this._trigger("stop", t),
          this.helper.remove(),
          !1
        );
      },
    }),
      e.extend(e.ui.selectable, { version: "1.8.16" }));
  })(jQuery) /*
   * jQuery UI Sortable 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Sortables
   *
   * Depends:
   *	jquery.ui.core.js
   *	jquery.ui.mouse.js
   *	jquery.ui.widget.js
   */,
  (function (e) {
    (e.widget("ui.sortable", e.ui.mouse, {
      widgetEventPrefix: "sort",
      options: {
        appendTo: "parent",
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        items: "> *",
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: "default",
        tolerance: "intersect",
        zIndex: 1e3,
      },
      _create: function () {
        var e = this.options;
        ((this.containerCache = {}),
          this.element.addClass("ui-sortable"),
          this.refresh(),
          (this.floating =
            !!this.items.length &&
            ("x" === e.axis ||
              /left|right/.test(this.items[0].item.css("float")) ||
              /inline|table-cell/.test(this.items[0].item.css("display")))),
          (this.offset = this.element.offset()),
          this._mouseInit());
      },
      destroy: function () {
        (this.element
          .removeClass("ui-sortable ui-sortable-disabled")
          .removeData("sortable")
          .unbind(".sortable"),
          this._mouseDestroy());
        for (var e = this.items.length - 1; e >= 0; e--)
          this.items[e].item.removeData("sortable-item");
        return this;
      },
      _setOption: function (t, i) {
        "disabled" === t
          ? ((this.options[t] = i),
            this.widget()[i ? "addClass" : "removeClass"](
              "ui-sortable-disabled",
            ))
          : e.Widget.prototype._setOption.apply(this, arguments);
      },
      _mouseCapture: function (t, i) {
        if (this.reverting) return !1;
        if (this.options.disabled || "static" == this.options.type) return !1;
        this._refreshItems(t);
        var n = null,
          s = this;
        e(t.target)
          .parents()
          .each(function () {
            if (e.data(this, "sortable-item") == s) return ((n = e(this)), !1);
          });
        if ((e.data(t.target, "sortable-item") == s && (n = e(t.target)), !n))
          return !1;
        if (this.options.handle && !i) {
          var o = !1;
          if (
            (e(this.options.handle, n)
              .find("*")
              .andSelf()
              .each(function () {
                this == t.target && (o = !0);
              }),
            !o)
          )
            return !1;
        }
        return ((this.currentItem = n), this._removeCurrentsFromItems(), !0);
      },
      _mouseStart: function (t, i, n) {
        var s = this.options,
          o = this;
        if (
          ((this.currentContainer = this),
          this.refreshPositions(),
          (this.helper = this._createHelper(t)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.currentItem.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left,
          }),
          this.helper.css("position", "absolute"),
          (this.cssPosition = this.helper.css("position")),
          e.extend(this.offset, {
            click: {
              left: t.pageX - this.offset.left,
              top: t.pageY - this.offset.top,
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
          (this.originalPosition = this._generatePosition(t)),
          (this.originalPageX = t.pageX),
          (this.originalPageY = t.pageY),
          s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt),
          (this.domPosition = {
            prev: this.currentItem.prev()[0],
            parent: this.currentItem.parent()[0],
          }),
          this.helper[0] != this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          s.containment && this._setContainment(),
          s.cursor &&
            (e("body").css("cursor") &&
              (this._storedCursor = e("body").css("cursor")),
            e("body").css("cursor", s.cursor)),
          s.opacity &&
            (this.helper.css("opacity") &&
              (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", s.opacity)),
          s.zIndex &&
            (this.helper.css("zIndex") &&
              (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", s.zIndex)),
          this.scrollParent[0] != document &&
            "HTML" != this.scrollParent[0].tagName &&
            (this.overflowOffset = this.scrollParent.offset()),
          this._trigger("start", t, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !n)
        )
          for (var a = this.containers.length - 1; a >= 0; a--)
            this.containers[a]._trigger("activate", t, o._uiHash(this));
        return (
          e.ui.ddmanager && (e.ui.ddmanager.current = this),
          e.ui.ddmanager &&
            !s.dropBehaviour &&
            e.ui.ddmanager.prepareOffsets(this, t),
          (this.dragging = !0),
          this.helper.addClass("ui-sortable-helper"),
          this._mouseDrag(t),
          !0
        );
      },
      _mouseDrag: function (t) {
        if (
          ((this.position = this._generatePosition(t)),
          (this.positionAbs = this._convertPositionTo("absolute")),
          this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
          this.options.scroll)
        ) {
          var i = this.options,
            n = !1;
          (this.scrollParent[0] != document &&
          "HTML" != this.scrollParent[0].tagName
            ? (this.overflowOffset.top +
                this.scrollParent[0].offsetHeight -
                t.pageY <
              i.scrollSensitivity
                ? (this.scrollParent[0].scrollTop = n =
                    this.scrollParent[0].scrollTop + i.scrollSpeed)
                : t.pageY - this.overflowOffset.top < i.scrollSensitivity &&
                  (this.scrollParent[0].scrollTop = n =
                    this.scrollParent[0].scrollTop - i.scrollSpeed),
              this.overflowOffset.left +
                this.scrollParent[0].offsetWidth -
                t.pageX <
              i.scrollSensitivity
                ? (this.scrollParent[0].scrollLeft = n =
                    this.scrollParent[0].scrollLeft + i.scrollSpeed)
                : t.pageX - this.overflowOffset.left < i.scrollSensitivity &&
                  (this.scrollParent[0].scrollLeft = n =
                    this.scrollParent[0].scrollLeft - i.scrollSpeed))
            : (t.pageY - e(document).scrollTop() < i.scrollSensitivity
                ? (n = e(document).scrollTop(
                    e(document).scrollTop() - i.scrollSpeed,
                  ))
                : e(window).height() - (t.pageY - e(document).scrollTop()) <
                    i.scrollSensitivity &&
                  (n = e(document).scrollTop(
                    e(document).scrollTop() + i.scrollSpeed,
                  )),
              t.pageX - e(document).scrollLeft() < i.scrollSensitivity
                ? (n = e(document).scrollLeft(
                    e(document).scrollLeft() - i.scrollSpeed,
                  ))
                : e(window).width() - (t.pageX - e(document).scrollLeft()) <
                    i.scrollSensitivity &&
                  (n = e(document).scrollLeft(
                    e(document).scrollLeft() + i.scrollSpeed,
                  ))),
            !1 !== n &&
              e.ui.ddmanager &&
              !i.dropBehaviour &&
              e.ui.ddmanager.prepareOffsets(this, t));
        }
        ((this.positionAbs = this._convertPositionTo("absolute")),
          (this.options.axis && "y" == this.options.axis) ||
            (this.helper[0].style.left = this.position.left + "px"),
          (this.options.axis && "x" == this.options.axis) ||
            (this.helper[0].style.top = this.position.top + "px"));
        for (var s = this.items.length - 1; s >= 0; s--) {
          var o = this.items[s],
            a = o.item[0],
            r = this._intersectsWithPointer(o);
          if (
            r &&
            !(
              a == this.currentItem[0] ||
              this.placeholder[1 == r ? "next" : "prev"]()[0] == a ||
              e.ui.contains(this.placeholder[0], a) ||
              ("semi-dynamic" == this.options.type &&
                e.ui.contains(this.element[0], a))
            )
          ) {
            if (
              ((this.direction = 1 == r ? "down" : "up"),
              "pointer" != this.options.tolerance &&
                !this._intersectsWithSides(o))
            )
              break;
            (this._rearrange(t, o), this._trigger("change", t, this._uiHash()));
            break;
          }
        }
        return (
          this._contactContainers(t),
          e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
          this._trigger("sort", t, this._uiHash()),
          (this.lastPositionAbs = this.positionAbs),
          !1
        );
      },
      _mouseStop: function (t, i) {
        if (t) {
          if (
            (e.ui.ddmanager &&
              !this.options.dropBehaviour &&
              e.ui.ddmanager.drop(this, t),
            this.options.revert)
          ) {
            var n = this,
              s = n.placeholder.offset();
            ((n.reverting = !0),
              e(this.helper).animate(
                {
                  left:
                    s.left -
                    this.offset.parent.left -
                    n.margins.left +
                    (this.offsetParent[0] == document.body
                      ? 0
                      : this.offsetParent[0].scrollLeft),
                  top:
                    s.top -
                    this.offset.parent.top -
                    n.margins.top +
                    (this.offsetParent[0] == document.body
                      ? 0
                      : this.offsetParent[0].scrollTop),
                },
                parseInt(this.options.revert, 10) || 500,
                function () {
                  n._clear(t);
                },
              ));
          } else this._clear(t, i);
          return !1;
        }
      },
      cancel: function () {
        var t = this;
        if (this.dragging) {
          (this._mouseUp({ target: null }),
            "original" == this.options.helper
              ? this.currentItem
                  .css(this._storedCSS)
                  .removeClass("ui-sortable-helper")
              : this.currentItem.show());
          for (var i = this.containers.length - 1; i >= 0; i--)
            (this.containers[i]._trigger("deactivate", null, t._uiHash(this)),
              this.containers[i].containerCache.over &&
                (this.containers[i]._trigger("out", null, t._uiHash(this)),
                (this.containers[i].containerCache.over = 0)));
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode &&
              this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" != this.options.helper &&
              this.helper &&
              this.helper[0].parentNode &&
              this.helper.remove(),
            e.extend(this, {
              helper: null,
              dragging: !1,
              reverting: !1,
              _noFinalSort: null,
            }),
            this.domPosition.prev
              ? e(this.domPosition.prev).after(this.currentItem)
              : e(this.domPosition.parent).prepend(this.currentItem)),
          this
        );
      },
      serialize: function (t) {
        var i = this._getItemsAsjQuery(t && t.connected),
          n = [];
        return (
          (t = t || {}),
          e(i).each(function () {
            var i = (e(t.item || this).attr(t.attribute || "id") || "").match(
              t.expression || /(.+)[-=_](.+)/,
            );
            i &&
              n.push(
                (t.key || i[1] + "[]") +
                  "=" +
                  (t.key && t.expression ? i[1] : i[2]),
              );
          }),
          !n.length && t.key && n.push(t.key + "="),
          n.join("&")
        );
      },
      toArray: function (t) {
        var i = this._getItemsAsjQuery(t && t.connected),
          n = [];
        return (
          (t = t || {}),
          i.each(function () {
            n.push(e(t.item || this).attr(t.attribute || "id") || "");
          }),
          n
        );
      },
      _intersectsWith: function (e) {
        var t = this.positionAbs.left,
          i = t + this.helperProportions.width,
          n = this.positionAbs.top,
          s = n + this.helperProportions.height,
          o = e.left,
          a = o + e.width,
          r = e.top,
          l = r + e.height,
          c = this.offset.click.top,
          u = this.offset.click.left,
          h = n + c > r && n + c < l && t + u > o && t + u < a;
        return "pointer" == this.options.tolerance ||
          this.options.forcePointerForContainers ||
          ("pointer" != this.options.tolerance &&
            this.helperProportions[this.floating ? "width" : "height"] >
              e[this.floating ? "width" : "height"])
          ? h
          : o < t + this.helperProportions.width / 2 &&
              i - this.helperProportions.width / 2 < a &&
              r < n + this.helperProportions.height / 2 &&
              s - this.helperProportions.height / 2 < l;
      },
      _intersectsWithPointer: function (t) {
        var i = e.ui.isOverAxis(
            this.positionAbs.top + this.offset.click.top,
            t.top,
            t.height,
          ),
          n = e.ui.isOverAxis(
            this.positionAbs.left + this.offset.click.left,
            t.left,
            t.width,
          ),
          s = i && n,
          o = this._getDragVerticalDirection(),
          a = this._getDragHorizontalDirection();
        return (
          !!s &&
          (this.floating
            ? (a && "right" == a) || "down" == o
              ? 2
              : 1
            : o && ("down" == o ? 2 : 1))
        );
      },
      _intersectsWithSides: function (t) {
        var i = e.ui.isOverAxis(
            this.positionAbs.top + this.offset.click.top,
            t.top + t.height / 2,
            t.height,
          ),
          n = e.ui.isOverAxis(
            this.positionAbs.left + this.offset.click.left,
            t.left + t.width / 2,
            t.width,
          ),
          s = this._getDragVerticalDirection(),
          o = this._getDragHorizontalDirection();
        return this.floating && o
          ? ("right" == o && n) || ("left" == o && !n)
          : s && (("down" == s && i) || ("up" == s && !i));
      },
      _getDragVerticalDirection: function () {
        var e = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 != e && (e > 0 ? "down" : "up");
      },
      _getDragHorizontalDirection: function () {
        var e = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 != e && (e > 0 ? "right" : "left");
      },
      refresh: function (e) {
        return (this._refreshItems(e), this.refreshPositions(), this);
      },
      _connectWith: function () {
        var e = this.options;
        return e.connectWith.constructor == String
          ? [e.connectWith]
          : e.connectWith;
      },
      _getItemsAsjQuery: function (t) {
        var i = [],
          n = [],
          s = this._connectWith();
        if (s && t)
          for (var o = s.length - 1; o >= 0; o--)
            for (var a = e(s[o]), r = a.length - 1; r >= 0; r--) {
              var l = e.data(a[r], "sortable");
              l &&
                l != this &&
                !l.options.disabled &&
                n.push([
                  e.isFunction(l.options.items)
                    ? l.options.items.call(l.element)
                    : e(l.options.items, l.element)
                        .not(".ui-sortable-helper")
                        .not(".ui-sortable-placeholder"),
                  l,
                ]);
            }
        n.push([
          e.isFunction(this.options.items)
            ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem,
              })
            : e(this.options.items, this.element)
                .not(".ui-sortable-helper")
                .not(".ui-sortable-placeholder"),
          this,
        ]);
        for (var o = n.length - 1; o >= 0; o--)
          n[o][0].each(function () {
            i.push(this);
          });
        return e(i);
      },
      _removeCurrentsFromItems: function () {
        for (
          var e = this.currentItem.find(":data(sortable-item)"), t = 0;
          t < this.items.length;
          t++
        )
          for (var i = 0; i < e.length; i++)
            e[i] == this.items[t].item[0] && this.items.splice(t, 1);
      },
      _refreshItems: function (t) {
        ((this.items = []), (this.containers = [this]));
        var i = this.items,
          n = [
            [
              e.isFunction(this.options.items)
                ? this.options.items.call(this.element[0], t, {
                    item: this.currentItem,
                  })
                : e(this.options.items, this.element),
              this,
            ],
          ],
          s = this._connectWith();
        if (s)
          for (var o = s.length - 1; o >= 0; o--)
            for (var a = e(s[o]), r = a.length - 1; r >= 0; r--) {
              var l = e.data(a[r], "sortable");
              l &&
                l != this &&
                !l.options.disabled &&
                (n.push([
                  e.isFunction(l.options.items)
                    ? l.options.items.call(l.element[0], t, {
                        item: this.currentItem,
                      })
                    : e(l.options.items, l.element),
                  l,
                ]),
                this.containers.push(l));
            }
        for (var o = n.length - 1; o >= 0; o--)
          for (var c = n[o][1], u = n[o][0], r = 0, h = u.length; r < h; r++) {
            var d = e(u[r]);
            (d.data("sortable-item", c),
              i.push({
                item: d,
                instance: c,
                width: 0,
                height: 0,
                left: 0,
                top: 0,
              }));
          }
      },
      refreshPositions: function (t) {
        this.offsetParent &&
          this.helper &&
          (this.offset.parent = this._getParentOffset());
        for (var i = this.items.length - 1; i >= 0; i--) {
          var n = this.items[i];
          if (
            n.instance == this.currentContainer ||
            !this.currentContainer ||
            n.item[0] == this.currentItem[0]
          ) {
            var s = this.options.toleranceElement
              ? e(this.options.toleranceElement, n.item)
              : n.item;
            t || ((n.width = s.outerWidth()), (n.height = s.outerHeight()));
            var o = s.offset();
            ((n.left = o.left), (n.top = o.top));
          }
        }
        if (this.options.custom && this.options.custom.refreshContainers)
          this.options.custom.refreshContainers.call(this);
        else
          for (var i = this.containers.length - 1; i >= 0; i--) {
            var o = this.containers[i].element.offset();
            ((this.containers[i].containerCache.left = o.left),
              (this.containers[i].containerCache.top = o.top),
              (this.containers[i].containerCache.width =
                this.containers[i].element.outerWidth()),
              (this.containers[i].containerCache.height =
                this.containers[i].element.outerHeight()));
          }
        return this;
      },
      _createPlaceholder: function (t) {
        var i = t || this,
          n = i.options;
        if (!n.placeholder || n.placeholder.constructor == String) {
          var s = n.placeholder;
          n.placeholder = {
            element: function () {
              var t = e(document.createElement(i.currentItem[0].nodeName))
                .addClass(
                  s || i.currentItem[0].className + " ui-sortable-placeholder",
                )
                .removeClass("ui-sortable-helper")[0];
              return (s || (t.style.visibility = "hidden"), t);
            },
            update: function (e, t) {
              (s && !n.forcePlaceholderSize) ||
                (t.height() ||
                  t.height(
                    i.currentItem.innerHeight() -
                      parseInt(i.currentItem.css("paddingTop") || 0, 10) -
                      parseInt(i.currentItem.css("paddingBottom") || 0, 10),
                  ),
                t.width() ||
                  t.width(
                    i.currentItem.innerWidth() -
                      parseInt(i.currentItem.css("paddingLeft") || 0, 10) -
                      parseInt(i.currentItem.css("paddingRight") || 0, 10),
                  ));
            },
          };
        }
        ((i.placeholder = e(
          n.placeholder.element.call(i.element, i.currentItem),
        )),
          i.currentItem.after(i.placeholder),
          n.placeholder.update(i, i.placeholder));
      },
      _contactContainers: function (t) {
        for (
          var i = null, n = null, s = this.containers.length - 1;
          s >= 0;
          s--
        )
          if (
            !e.ui.contains(this.currentItem[0], this.containers[s].element[0])
          )
            if (this._intersectsWith(this.containers[s].containerCache)) {
              if (
                i &&
                e.ui.contains(this.containers[s].element[0], i.element[0])
              )
                continue;
              ((i = this.containers[s]), (n = s));
            } else
              this.containers[s].containerCache.over &&
                (this.containers[s]._trigger("out", t, this._uiHash(this)),
                (this.containers[s].containerCache.over = 0));
        if (i)
          if (1 === this.containers.length)
            (this.containers[n]._trigger("over", t, this._uiHash(this)),
              (this.containers[n].containerCache.over = 1));
          else if (this.currentContainer != this.containers[n]) {
            for (
              var o = 1e4,
                a = null,
                r =
                  this.positionAbs[
                    this.containers[n].floating ? "left" : "top"
                  ],
                l = this.items.length - 1;
              l >= 0;
              l--
            )
              if (
                e.ui.contains(
                  this.containers[n].element[0],
                  this.items[l].item[0],
                )
              ) {
                var c =
                  this.items[l][this.containers[n].floating ? "left" : "top"];
                Math.abs(c - r) < o &&
                  ((o = Math.abs(c - r)), (a = this.items[l]));
              }
            if (!a && !this.options.dropOnEmpty) return;
            ((this.currentContainer = this.containers[n]),
              a
                ? this._rearrange(t, a, null, !0)
                : this._rearrange(t, null, this.containers[n].element, !0),
              this._trigger("change", t, this._uiHash()),
              this.containers[n]._trigger("change", t, this._uiHash(this)),
              this.options.placeholder.update(
                this.currentContainer,
                this.placeholder,
              ),
              this.containers[n]._trigger("over", t, this._uiHash(this)),
              (this.containers[n].containerCache.over = 1));
          }
      },
      _createHelper: function (t) {
        var i = this.options,
          n = e.isFunction(i.helper)
            ? e(i.helper.apply(this.element[0], [t, this.currentItem]))
            : "clone" == i.helper
              ? this.currentItem.clone()
              : this.currentItem;
        return (
          n.parents("body").length ||
            e(
              "parent" != i.appendTo
                ? i.appendTo
                : this.currentItem[0].parentNode,
            )[0].appendChild(n[0]),
          n[0] == this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css("position"),
              top: this.currentItem.css("top"),
              left: this.currentItem.css("left"),
            }),
          ("" == n[0].style.width || i.forceHelperSize) &&
            n.width(this.currentItem.width()),
          ("" == n[0].style.height || i.forceHelperSize) &&
            n.height(this.currentItem.height()),
          n
        );
      },
      _adjustOffsetFromHelper: function (t) {
        ("string" == typeof t && (t = t.split(" ")),
          e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
          "left" in t && (this.offset.click.left = t.left + this.margins.left),
          "right" in t &&
            (this.offset.click.left =
              this.helperProportions.width - t.right + this.margins.left),
          "top" in t && (this.offset.click.top = t.top + this.margins.top),
          "bottom" in t &&
            (this.offset.click.top =
              this.helperProportions.height - t.bottom + this.margins.top));
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var t = this.offsetParent.offset();
        return (
          "absolute" == this.cssPosition &&
            this.scrollParent[0] != document &&
            e.ui.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((t.left += this.scrollParent.scrollLeft()),
            (t.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] == document.body ||
            (this.offsetParent[0].tagName &&
              "html" == this.offsetParent[0].tagName.toLowerCase() &&
              e.browser.msie)) &&
            (t = { top: 0, left: 0 }),
          {
            top:
              t.top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              t.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" == this.cssPosition) {
          var e = this.currentItem.position();
          return {
            top:
              e.top -
              (parseInt(this.helper.css("top"), 10) || 0) +
              this.scrollParent.scrollTop(),
            left:
              e.left -
              (parseInt(this.helper.css("left"), 10) || 0) +
              this.scrollParent.scrollLeft(),
          };
        }
        return { top: 0, left: 0 };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
          top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var t = this.options;
        if (
          ("parent" == t.containment &&
            (t.containment = this.helper[0].parentNode),
          ("document" != t.containment && "window" != t.containment) ||
            (this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              e("document" == t.containment ? document : window).width() -
                this.helperProportions.width -
                this.margins.left,
              (e("document" == t.containment ? document : window).height() ||
                document.body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top,
            ]),
          !/^(document|window|parent)$/.test(t.containment))
        ) {
          var i = e(t.containment)[0],
            n = e(t.containment).offset(),
            s = "hidden" != e(i).css("overflow");
          this.containment = [
            n.left +
              (parseInt(e(i).css("borderLeftWidth"), 10) || 0) +
              (parseInt(e(i).css("paddingLeft"), 10) || 0) -
              this.margins.left,
            n.top +
              (parseInt(e(i).css("borderTopWidth"), 10) || 0) +
              (parseInt(e(i).css("paddingTop"), 10) || 0) -
              this.margins.top,
            n.left +
              (s ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) -
              (parseInt(e(i).css("borderLeftWidth"), 10) || 0) -
              (parseInt(e(i).css("paddingRight"), 10) || 0) -
              this.helperProportions.width -
              this.margins.left,
            n.top +
              (s ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) -
              (parseInt(e(i).css("borderTopWidth"), 10) || 0) -
              (parseInt(e(i).css("paddingBottom"), 10) || 0) -
              this.helperProportions.height -
              this.margins.top,
          ];
        }
      },
      _convertPositionTo: function (t, i) {
        i || (i = this.position);
        var n = "absolute" == t ? 1 : -1,
          s =
            (this.options,
            "absolute" != this.cssPosition ||
            (this.scrollParent[0] != document &&
              e.ui.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent),
          o = /(html|body)/i.test(s[0].tagName);
        return {
          top:
            i.top +
            this.offset.relative.top * n +
            this.offset.parent.top * n -
            (e.browser.safari && "fixed" == this.cssPosition
              ? 0
              : ("fixed" == this.cssPosition
                  ? -this.scrollParent.scrollTop()
                  : o
                    ? 0
                    : s.scrollTop()) * n),
          left:
            i.left +
            this.offset.relative.left * n +
            this.offset.parent.left * n -
            (e.browser.safari && "fixed" == this.cssPosition
              ? 0
              : ("fixed" == this.cssPosition
                  ? -this.scrollParent.scrollLeft()
                  : o
                    ? 0
                    : s.scrollLeft()) * n),
        };
      },
      _generatePosition: function (t) {
        var i = this.options,
          n =
            "absolute" != this.cssPosition ||
            (this.scrollParent[0] != document &&
              e.ui.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          s = /(html|body)/i.test(n[0].tagName);
        "relative" != this.cssPosition ||
          (this.scrollParent[0] != document &&
            this.scrollParent[0] != this.offsetParent[0]) ||
          (this.offset.relative = this._getRelativeOffset());
        var o = t.pageX,
          a = t.pageY;
        if (
          this.originalPosition &&
          (this.containment &&
            (t.pageX - this.offset.click.left < this.containment[0] &&
              (o = this.containment[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < this.containment[1] &&
              (a = this.containment[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > this.containment[2] &&
              (o = this.containment[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > this.containment[3] &&
              (a = this.containment[3] + this.offset.click.top)),
          i.grid)
        ) {
          var r =
            this.originalPageY +
            Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1];
          a =
            this.containment &&
            (r - this.offset.click.top < this.containment[1] ||
              r - this.offset.click.top > this.containment[3])
              ? r - this.offset.click.top < this.containment[1]
                ? r + i.grid[1]
                : r - i.grid[1]
              : r;
          var l =
            this.originalPageX +
            Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0];
          o =
            this.containment &&
            (l - this.offset.click.left < this.containment[0] ||
              l - this.offset.click.left > this.containment[2])
              ? l - this.offset.click.left < this.containment[0]
                ? l + i.grid[0]
                : l - i.grid[0]
              : l;
        }
        return {
          top:
            a -
            this.offset.click.top -
            this.offset.relative.top -
            this.offset.parent.top +
            (e.browser.safari && "fixed" == this.cssPosition
              ? 0
              : "fixed" == this.cssPosition
                ? -this.scrollParent.scrollTop()
                : s
                  ? 0
                  : n.scrollTop()),
          left:
            o -
            this.offset.click.left -
            this.offset.relative.left -
            this.offset.parent.left +
            (e.browser.safari && "fixed" == this.cssPosition
              ? 0
              : "fixed" == this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : s
                  ? 0
                  : n.scrollLeft()),
        };
      },
      _rearrange: function (e, t, i, n) {
        (i
          ? i[0].appendChild(this.placeholder[0])
          : t.item[0].parentNode.insertBefore(
              this.placeholder[0],
              "down" == this.direction ? t.item[0] : t.item[0].nextSibling,
            ),
          (this.counter = this.counter ? ++this.counter : 1));
        var s = this,
          o = this.counter;
        window.setTimeout(function () {
          o == s.counter && s.refreshPositions(!n);
        }, 0);
      },
      _clear: function (t, i) {
        this.reverting = !1;
        var n = [];
        if (
          (!this._noFinalSort &&
            this.currentItem.parent().length &&
            this.placeholder.before(this.currentItem),
          (this._noFinalSort = null),
          this.helper[0] == this.currentItem[0])
        ) {
          for (var s in this._storedCSS)
            ("auto" != this._storedCSS[s] && "static" != this._storedCSS[s]) ||
              (this._storedCSS[s] = "");
          this.currentItem
            .css(this._storedCSS)
            .removeClass("ui-sortable-helper");
        } else this.currentItem.show();
        if (
          (this.fromOutside &&
            !i &&
            n.push(function (e) {
              this._trigger("receive", e, this._uiHash(this.fromOutside));
            }),
          (!this.fromOutside &&
            this.domPosition.prev ==
              this.currentItem.prev().not(".ui-sortable-helper")[0] &&
            this.domPosition.parent == this.currentItem.parent()[0]) ||
            i ||
            n.push(function (e) {
              this._trigger("update", e, this._uiHash());
            }),
          !e.ui.contains(this.element[0], this.currentItem[0]))
        ) {
          i ||
            n.push(function (e) {
              this._trigger("remove", e, this._uiHash());
            });
          for (var s = this.containers.length - 1; s >= 0; s--)
            e.ui.contains(this.containers[s].element[0], this.currentItem[0]) &&
              !i &&
              (n.push(
                function (e) {
                  return function (t) {
                    e._trigger("receive", t, this._uiHash(this));
                  };
                }.call(this, this.containers[s]),
              ),
              n.push(
                function (e) {
                  return function (t) {
                    e._trigger("update", t, this._uiHash(this));
                  };
                }.call(this, this.containers[s]),
              ));
        }
        for (var s = this.containers.length - 1; s >= 0; s--)
          (i ||
            n.push(
              function (e) {
                return function (t) {
                  e._trigger("deactivate", t, this._uiHash(this));
                };
              }.call(this, this.containers[s]),
            ),
            this.containers[s].containerCache.over &&
              (n.push(
                function (e) {
                  return function (t) {
                    e._trigger("out", t, this._uiHash(this));
                  };
                }.call(this, this.containers[s]),
              ),
              (this.containers[s].containerCache.over = 0)));
        if (
          (this._storedCursor && e("body").css("cursor", this._storedCursor),
          this._storedOpacity &&
            this.helper.css("opacity", this._storedOpacity),
          this._storedZIndex &&
            this.helper.css(
              "zIndex",
              "auto" == this._storedZIndex ? "" : this._storedZIndex,
            ),
          (this.dragging = !1),
          this.cancelHelperRemoval)
        ) {
          if (!i) {
            this._trigger("beforeStop", t, this._uiHash());
            for (var s = 0; s < n.length; s++) n[s].call(this, t);
            this._trigger("stop", t, this._uiHash());
          }
          return !1;
        }
        if (
          (i || this._trigger("beforeStop", t, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.helper[0] != this.currentItem[0] && this.helper.remove(),
          (this.helper = null),
          !i)
        ) {
          for (var s = 0; s < n.length; s++) n[s].call(this, t);
          this._trigger("stop", t, this._uiHash());
        }
        return ((this.fromOutside = !1), !0);
      },
      _trigger: function () {
        !1 === e.Widget.prototype._trigger.apply(this, arguments) &&
          this.cancel();
      },
      _uiHash: function (t) {
        var i = t || this;
        return {
          helper: i.helper,
          placeholder: i.placeholder || e([]),
          position: i.position,
          originalPosition: i.originalPosition,
          offset: i.positionAbs,
          item: i.currentItem,
          sender: t ? t.element : null,
        };
      },
    }),
      e.extend(e.ui.sortable, { version: "1.8.16" }));
  })(jQuery) /*
   * jQuery UI Accordion 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Accordion
   *
   * Depends:
   *	jquery.ui.core.js
   *	jquery.ui.widget.js
   */,
  (function (e) {
    (e.widget("ui.accordion", {
      options: {
        active: 0,
        animated: "slide",
        autoHeight: !0,
        clearStyle: !1,
        collapsible: !1,
        event: "click",
        fillSpace: !1,
        header: "> li > :first-child,> :not(li):even",
        icons: {
          header: "ui-icon-triangle-1-e",
          headerSelected: "ui-icon-triangle-1-s",
        },
        navigation: !1,
        navigationFilter: function () {
          return this.href.toLowerCase() === location.href.toLowerCase();
        },
      },
      _create: function () {
        var t = this,
          i = t.options;
        if (
          ((t.running = 0),
          t.element
            .addClass("ui-accordion ui-widget ui-helper-reset")
            .children("li")
            .addClass("ui-accordion-li-fix"),
          (t.headers = t.element
            .find(i.header)
            .addClass(
              "ui-accordion-header ui-helper-reset ui-state-default ui-corner-all",
            )
            .bind("mouseenter.accordion", function () {
              i.disabled || e(this).addClass("ui-state-hover");
            })
            .bind("mouseleave.accordion", function () {
              i.disabled || e(this).removeClass("ui-state-hover");
            })
            .bind("focus.accordion", function () {
              i.disabled || e(this).addClass("ui-state-focus");
            })
            .bind("blur.accordion", function () {
              i.disabled || e(this).removeClass("ui-state-focus");
            })),
          t.headers
            .next()
            .addClass(
              "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom",
            ),
          i.navigation)
        ) {
          var n = t.element.find("a").filter(i.navigationFilter).eq(0);
          if (n.length) {
            var s = n.closest(".ui-accordion-header");
            s.length
              ? (t.active = s)
              : (t.active = n.closest(".ui-accordion-content").prev());
          }
        }
        ((t.active = t
          ._findActive(t.active || i.active)
          .addClass("ui-state-default ui-state-active")
          .toggleClass("ui-corner-all")
          .toggleClass("ui-corner-top")),
          t.active.next().addClass("ui-accordion-content-active"),
          t._createIcons(),
          t.resize(),
          t.element.attr("role", "tablist"),
          t.headers
            .attr("role", "tab")
            .bind("keydown.accordion", function (e) {
              return t._keydown(e);
            })
            .next()
            .attr("role", "tabpanel"),
          t.headers
            .not(t.active || "")
            .attr({
              "aria-expanded": "false",
              "aria-selected": "false",
              tabIndex: -1,
            })
            .next()
            .hide(),
          t.active.length
            ? t.active.attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0,
              })
            : t.headers.eq(0).attr("tabIndex", 0),
          e.browser.safari || t.headers.find("a").attr("tabIndex", -1),
          i.event &&
            t.headers.bind(
              i.event.split(" ").join(".accordion ") + ".accordion",
              function (e) {
                (t._clickHandler.call(t, e, this), e.preventDefault());
              },
            ));
      },
      _createIcons: function () {
        var t = this.options;
        t.icons &&
          (e("<span></span>")
            .addClass("ui-icon " + t.icons.header)
            .prependTo(this.headers),
          this.active
            .children(".ui-icon")
            .toggleClass(t.icons.header)
            .toggleClass(t.icons.headerSelected),
          this.element.addClass("ui-accordion-icons"));
      },
      _destroyIcons: function () {
        (this.headers.children(".ui-icon").remove(),
          this.element.removeClass("ui-accordion-icons"));
      },
      destroy: function () {
        var t = this.options;
        (this.element
          .removeClass("ui-accordion ui-widget ui-helper-reset")
          .removeAttr("role"),
          this.headers
            .unbind(".accordion")
            .removeClass(
              "ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top",
            )
            .removeAttr("role")
            .removeAttr("aria-expanded")
            .removeAttr("aria-selected")
            .removeAttr("tabIndex"),
          this.headers.find("a").removeAttr("tabIndex"),
          this._destroyIcons());
        var i = this.headers
          .next()
          .css("display", "")
          .removeAttr("role")
          .removeClass(
            "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled",
          );
        return (
          (t.autoHeight || t.fillHeight) && i.css("height", ""),
          e.Widget.prototype.destroy.call(this)
        );
      },
      _setOption: function (t, i) {
        (e.Widget.prototype._setOption.apply(this, arguments),
          "active" == t && this.activate(i),
          "icons" == t && (this._destroyIcons(), i && this._createIcons()),
          "disabled" == t &&
            this.headers
              .add(this.headers.next())
              [
                i ? "addClass" : "removeClass"
              ]("ui-accordion-disabled ui-state-disabled"));
      },
      _keydown: function (t) {
        if (!(this.options.disabled || t.altKey || t.ctrlKey)) {
          var i = e.ui.keyCode,
            n = this.headers.length,
            s = this.headers.index(t.target),
            o = !1;
          switch (t.keyCode) {
            case i.RIGHT:
            case i.DOWN:
              o = this.headers[(s + 1) % n];
              break;
            case i.LEFT:
            case i.UP:
              o = this.headers[(s - 1 + n) % n];
              break;
            case i.SPACE:
            case i.ENTER:
              (this._clickHandler({ target: t.target }, t.target),
                t.preventDefault());
          }
          return (
            !o ||
            (e(t.target).attr("tabIndex", -1),
            e(o).attr("tabIndex", 0),
            o.focus(),
            !1)
          );
        }
      },
      resize: function () {
        var t,
          i = this.options;
        if (i.fillSpace) {
          if (e.browser.msie) {
            var n = this.element.parent().css("overflow");
            this.element.parent().css("overflow", "hidden");
          }
          ((t = this.element.parent().height()),
            e.browser.msie && this.element.parent().css("overflow", n),
            this.headers.each(function () {
              t -= e(this).outerHeight(!0);
            }),
            this.headers
              .next()
              .each(function () {
                e(this).height(
                  Math.max(0, t - e(this).innerHeight() + e(this).height()),
                );
              })
              .css("overflow", "auto"));
        } else
          i.autoHeight &&
            ((t = 0),
            this.headers
              .next()
              .each(function () {
                t = Math.max(t, e(this).height("").height());
              })
              .height(t));
        return this;
      },
      activate: function (e) {
        this.options.active = e;
        var t = this._findActive(e)[0];
        return (this._clickHandler({ target: t }, t), this);
      },
      _findActive: function (t) {
        return t
          ? "number" == typeof t
            ? this.headers.filter(":eq(" + t + ")")
            : this.headers.not(this.headers.not(t))
          : !1 === t
            ? e([])
            : this.headers.filter(":eq(0)");
      },
      _clickHandler: function (t, i) {
        var n = this.options;
        if (!n.disabled) {
          if (!t.target) {
            if (!n.collapsible) return;
            (this.active
              .removeClass("ui-state-active ui-corner-top")
              .addClass("ui-state-default ui-corner-all")
              .children(".ui-icon")
              .removeClass(n.icons.headerSelected)
              .addClass(n.icons.header),
              this.active.next().addClass("ui-accordion-content-active"));
            var s = this.active.next(),
              o = {
                options: n,
                newHeader: e([]),
                oldHeader: n.active,
                newContent: e([]),
                oldContent: s,
              },
              a = (this.active = e([]));
            return void this._toggle(a, s, o);
          }
          var r = e(t.currentTarget || i),
            l = r[0] === this.active[0];
          if (
            ((n.active = (!n.collapsible || !l) && this.headers.index(r)),
            !(this.running || (!n.collapsible && l)))
          ) {
            var c = this.active,
              a = r.next(),
              s = this.active.next(),
              o = {
                options: n,
                newHeader: l && n.collapsible ? e([]) : r,
                oldHeader: this.active,
                newContent: l && n.collapsible ? e([]) : a,
                oldContent: s,
              },
              u = this.headers.index(this.active[0]) > this.headers.index(r[0]);
            ((this.active = l ? e([]) : r),
              this._toggle(a, s, o, l, u),
              c
                .removeClass("ui-state-active ui-corner-top")
                .addClass("ui-state-default ui-corner-all")
                .children(".ui-icon")
                .removeClass(n.icons.headerSelected)
                .addClass(n.icons.header),
              l ||
                (r
                  .removeClass("ui-state-default ui-corner-all")
                  .addClass("ui-state-active ui-corner-top")
                  .children(".ui-icon")
                  .removeClass(n.icons.header)
                  .addClass(n.icons.headerSelected),
                r.next().addClass("ui-accordion-content-active")));
          }
        }
      },
      _toggle: function (t, i, n, s, o) {
        var a = this,
          r = a.options;
        ((a.toShow = t), (a.toHide = i), (a.data = n));
        var l = function () {
          if (a) return a._completed.apply(a, arguments);
        };
        if (
          (a._trigger("changestart", null, a.data),
          (a.running = 0 === i.size() ? t.size() : i.size()),
          r.animated)
        ) {
          var c = {};
          ((c =
            r.collapsible && s
              ? {
                  toShow: e([]),
                  toHide: i,
                  complete: l,
                  down: o,
                  autoHeight: r.autoHeight || r.fillSpace,
                }
              : {
                  toShow: t,
                  toHide: i,
                  complete: l,
                  down: o,
                  autoHeight: r.autoHeight || r.fillSpace,
                }),
            r.proxied || (r.proxied = r.animated),
            r.proxiedDuration || (r.proxiedDuration = r.duration),
            (r.animated = e.isFunction(r.proxied) ? r.proxied(c) : r.proxied),
            (r.duration = e.isFunction(r.proxiedDuration)
              ? r.proxiedDuration(c)
              : r.proxiedDuration));
          var u = e.ui.accordion.animations,
            h = r.duration,
            d = r.animated;
          (!d || u[d] || e.easing[d] || (d = "slide"),
            u[d] ||
              (u[d] = function (e) {
                this.slide(e, { easing: d, duration: h || 700 });
              }),
            u[d](c));
        } else (r.collapsible && s ? t.toggle() : (i.hide(), t.show()), l(!0));
        (i
          .prev()
          .attr({
            "aria-expanded": "false",
            "aria-selected": "false",
            tabIndex: -1,
          })
          .blur(),
          t
            .prev()
            .attr({
              "aria-expanded": "true",
              "aria-selected": "true",
              tabIndex: 0,
            })
            .focus());
      },
      _completed: function (e) {
        ((this.running = e ? 0 : --this.running),
          this.running ||
            (this.options.clearStyle &&
              this.toShow.add(this.toHide).css({ height: "", overflow: "" }),
            this.toHide.removeClass("ui-accordion-content-active"),
            this.toHide.length &&
              (this.toHide.parent()[0].className =
                this.toHide.parent()[0].className),
            this._trigger("change", null, this.data)));
      },
    }),
      e.extend(e.ui.accordion, {
        version: "1.8.16",
        animations: {
          slide: function (t, i) {
            if (
              ((t = e.extend({ easing: "swing", duration: 300 }, t, i)),
              !t.toHide.size())
            )
              return void t.toShow.animate(
                { height: "show", paddingTop: "show", paddingBottom: "show" },
                t,
              );
            if (!t.toShow.size())
              return void t.toHide.animate(
                { height: "hide", paddingTop: "hide", paddingBottom: "hide" },
                t,
              );
            var n,
              s = t.toShow.css("overflow"),
              o = 0,
              a = {},
              r = {},
              l = ["height", "paddingTop", "paddingBottom"],
              c = t.toShow;
            ((n = c[0].style.width),
              c.width(
                parseInt(c.parent().width(), 10) -
                  parseInt(c.css("paddingLeft"), 10) -
                  parseInt(c.css("paddingRight"), 10) -
                  (parseInt(c.css("borderLeftWidth"), 10) || 0) -
                  (parseInt(c.css("borderRightWidth"), 10) || 0),
              ),
              e.each(l, function (i, n) {
                r[n] = "hide";
                var s = ("" + e.css(t.toShow[0], n)).match(/^([\d+-.]+)(.*)$/);
                a[n] = { value: s[1], unit: s[2] || "px" };
              }),
              t.toShow.css({ height: 0, overflow: "hidden" }).show(),
              t.toHide
                .filter(":hidden")
                .each(t.complete)
                .end()
                .filter(":visible")
                .animate(r, {
                  step: function (e, i) {
                    ("height" == i.prop &&
                      (o =
                        i.end - i.start == 0
                          ? 0
                          : (i.now - i.start) / (i.end - i.start)),
                      (t.toShow[0].style[i.prop] =
                        o * a[i.prop].value + a[i.prop].unit));
                  },
                  duration: t.duration,
                  easing: t.easing,
                  complete: function () {
                    (t.autoHeight || t.toShow.css("height", ""),
                      t.toShow.css({ width: n, overflow: s }),
                      t.complete());
                  },
                }));
          },
          bounceslide: function (e) {
            this.slide(e, {
              easing: e.down ? "easeOutBounce" : "swing",
              duration: e.down ? 1e3 : 200,
            });
          },
        },
      }));
  })(jQuery) /*
   * jQuery UI Autocomplete 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Autocomplete
   *
   * Depends:
   *	jquery.ui.core.js
   *	jquery.ui.widget.js
   *	jquery.ui.position.js
   */,
  (function (e) {
    var t = 0;
    (e.widget("ui.autocomplete", {
      options: {
        appendTo: "body",
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: { my: "left top", at: "left bottom", collision: "none" },
        source: null,
      },
      pending: 0,
      _create: function () {
        var t,
          i = this,
          n = this.element[0].ownerDocument;
        (this.element
          .addClass("ui-autocomplete-input")
          .attr("autocomplete", "off")
          .attr({
            role: "textbox",
            "aria-autocomplete": "list",
            "aria-haspopup": "true",
          })
          .bind("keydown.autocomplete", function (n) {
            if (!i.options.disabled && !i.element.propAttr("readOnly")) {
              t = !1;
              var s = e.ui.keyCode;
              switch (n.keyCode) {
                case s.PAGE_UP:
                  i._move("previousPage", n);
                  break;
                case s.PAGE_DOWN:
                  i._move("nextPage", n);
                  break;
                case s.UP:
                  (i._move("previous", n), n.preventDefault());
                  break;
                case s.DOWN:
                  (i._move("next", n), n.preventDefault());
                  break;
                case s.ENTER:
                case s.NUMPAD_ENTER:
                  i.menu.active && ((t = !0), n.preventDefault());
                case s.TAB:
                  if (!i.menu.active) return;
                  i.menu.select(n);
                  break;
                case s.ESCAPE:
                  (i.element.val(i.term), i.close(n));
                  break;
                default:
                  (clearTimeout(i.searching),
                    (i.searching = setTimeout(function () {
                      i.term != i.element.val() &&
                        ((i.selectedItem = null), i.search(null, n));
                    }, i.options.delay)));
              }
            }
          })
          .bind("keypress.autocomplete", function (e) {
            t && ((t = !1), e.preventDefault());
          })
          .bind("focus.autocomplete", function () {
            i.options.disabled ||
              ((i.selectedItem = null), (i.previous = i.element.val()));
          })
          .bind("blur.autocomplete", function (e) {
            i.options.disabled ||
              (clearTimeout(i.searching),
              (i.closing = setTimeout(function () {
                (i.close(e), i._change(e));
              }, 150)));
          }),
          this._initSource(),
          (this.response = function () {
            return i._response.apply(i, arguments);
          }),
          (this.menu = e("<ul></ul>")
            .addClass("ui-autocomplete")
            .appendTo(e(this.options.appendTo || "body", n)[0])
            .mousedown(function (t) {
              var n = i.menu.element[0];
              (e(t.target).closest(".ui-menu-item").length ||
                setTimeout(function () {
                  e(document).one("mousedown", function (t) {
                    t.target === i.element[0] ||
                      t.target === n ||
                      e.ui.contains(n, t.target) ||
                      i.close();
                  });
                }, 1),
                setTimeout(function () {
                  clearTimeout(i.closing);
                }, 13));
            })
            .menu({
              focus: function (e, t) {
                var n = t.item.data("item.autocomplete");
                !1 !== i._trigger("focus", e, { item: n }) &&
                  /^key/.test(e.originalEvent.type) &&
                  i.element.val(n.value);
              },
              selected: function (e, t) {
                var s = t.item.data("item.autocomplete"),
                  o = i.previous;
                (i.element[0] !== n.activeElement &&
                  (i.element.focus(),
                  (i.previous = o),
                  setTimeout(function () {
                    ((i.previous = o), (i.selectedItem = s));
                  }, 1)),
                  !1 !== i._trigger("select", e, { item: s }) &&
                    i.element.val(s.value),
                  (i.term = i.element.val()),
                  i.close(e),
                  (i.selectedItem = s));
              },
              blur: function () {
                i.menu.element.is(":visible") &&
                  i.element.val() !== i.term &&
                  i.element.val(i.term);
              },
            })
            .zIndex(this.element.zIndex() + 1)
            .css({ top: 0, left: 0 })
            .hide()
            .data("menu")),
          e.fn.bgiframe && this.menu.element.bgiframe());
      },
      destroy: function () {
        (this.element
          .removeClass("ui-autocomplete-input")
          .removeAttr("autocomplete")
          .removeAttr("role")
          .removeAttr("aria-autocomplete")
          .removeAttr("aria-haspopup"),
          this.menu.element.remove(),
          e.Widget.prototype.destroy.call(this));
      },
      _setOption: function (t, i) {
        (e.Widget.prototype._setOption.apply(this, arguments),
          "source" === t && this._initSource(),
          "appendTo" === t &&
            this.menu.element.appendTo(
              e(i || "body", this.element[0].ownerDocument)[0],
            ),
          "disabled" === t && i && this.xhr && this.xhr.abort());
      },
      _initSource: function () {
        var i,
          n,
          s = this;
        e.isArray(this.options.source)
          ? ((i = this.options.source),
            (this.source = function (t, n) {
              n(e.ui.autocomplete.filter(i, t.term));
            }))
          : "string" == typeof this.options.source
            ? ((n = this.options.source),
              (this.source = function (i, o) {
                (s.xhr && s.xhr.abort(),
                  (s.xhr = e.ajax({
                    url: n,
                    data: i,
                    dataType: "json",
                    autocompleteRequest: ++t,
                    success: function (e) {
                      this.autocompleteRequest === t && o(e);
                    },
                    error: function () {
                      this.autocompleteRequest === t && o([]);
                    },
                  })));
              }))
            : (this.source = this.options.source);
      },
      search: function (e, t) {
        return (
          (e = null != e ? e : this.element.val()),
          (this.term = this.element.val()),
          e.length < this.options.minLength
            ? this.close(t)
            : (clearTimeout(this.closing),
              !1 !== this._trigger("search", t) ? this._search(e) : void 0)
        );
      },
      _search: function (e) {
        (this.pending++,
          this.element.addClass("ui-autocomplete-loading"),
          this.source({ term: e }, this.response));
      },
      _response: function (e) {
        (!this.options.disabled && e && e.length
          ? ((e = this._normalize(e)), this._suggest(e), this._trigger("open"))
          : this.close(),
          --this.pending ||
            this.element.removeClass("ui-autocomplete-loading"));
      },
      close: function (e) {
        (clearTimeout(this.closing),
          this.menu.element.is(":visible") &&
            (this.menu.element.hide(),
            this.menu.deactivate(),
            this._trigger("close", e)));
      },
      _change: function (e) {
        this.previous !== this.element.val() &&
          this._trigger("change", e, { item: this.selectedItem });
      },
      _normalize: function (t) {
        return t.length && t[0].label && t[0].value
          ? t
          : e.map(t, function (t) {
              return "string" == typeof t
                ? { label: t, value: t }
                : e.extend(
                    { label: t.label || t.value, value: t.value || t.label },
                    t,
                  );
            });
      },
      _suggest: function (t) {
        var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
        (this._renderMenu(i, t),
          this.menu.deactivate(),
          this.menu.refresh(),
          i.show(),
          this._resizeMenu(),
          i.position(e.extend({ of: this.element }, this.options.position)),
          this.options.autoFocus && this.menu.next(new e.Event("mouseover")));
      },
      _resizeMenu: function () {
        var e = this.menu.element;
        e.outerWidth(
          Math.max(e.width("").outerWidth(), this.element.outerWidth()),
        );
      },
      _renderMenu: function (t, i) {
        var n = this;
        e.each(i, function (e, i) {
          n._renderItem(t, i);
        });
      },
      _renderItem: function (t, i) {
        return e("<li></li>")
          .data("item.autocomplete", i)
          .append(e("<a></a>").text(i.label))
          .appendTo(t);
      },
      _move: function (e, t) {
        return this.menu.element.is(":visible")
          ? (this.menu.first() && /^previous/.test(e)) ||
            (this.menu.last() && /^next/.test(e))
            ? (this.element.val(this.term), void this.menu.deactivate())
            : void this.menu[e](t)
          : void this.search(null, t);
      },
      widget: function () {
        return this.menu.element;
      },
    }),
      e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
          return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        },
        filter: function (t, i) {
          var n = new RegExp(e.ui.autocomplete.escapeRegex(i), "i");
          return e.grep(t, function (e) {
            return n.test(e.label || e.value || e);
          });
        },
      }));
  })(jQuery) /*
   * jQuery UI Menu (not officially released)
   *
   * This widget isn't yet finished and the API is subject to change. We plan to finish
   * it for the next release. You're welcome to give it a try anyway and give us feedback,
   * as long as you're okay with migrating your code later on. We can help with that, too.
   *
   * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Menu
   *
   * Depends:
   *	jquery.ui.core.js
   *  jquery.ui.widget.js
   */,
  (function (e) {
    e.widget("ui.menu", {
      _create: function () {
        var t = this;
        (this.element
          .addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
          .attr({
            role: "listbox",
            "aria-activedescendant": "ui-active-menuitem",
          })
          .click(function (i) {
            e(i.target).closest(".ui-menu-item a").length &&
              (i.preventDefault(), t.select(i));
          }),
          this.refresh());
      },
      refresh: function () {
        var t = this;
        this.element
          .children("li:not(.ui-menu-item):has(a)")
          .addClass("ui-menu-item")
          .attr("role", "menuitem")
          .children("a")
          .addClass("ui-corner-all")
          .attr("tabindex", -1)
          .mouseenter(function (i) {
            t.activate(i, e(this).parent());
          })
          .mouseleave(function () {
            t.deactivate();
          });
      },
      activate: function (e, t) {
        if ((this.deactivate(), this.hasScroll())) {
          var i = t.offset().top - this.element.offset().top,
            n = this.element.scrollTop(),
            s = this.element.height();
          i < 0
            ? this.element.scrollTop(n + i)
            : i >= s && this.element.scrollTop(n + i - s + t.height());
        }
        ((this.active = t
          .eq(0)
          .children("a")
          .addClass("ui-state-hover")
          .attr("id", "ui-active-menuitem")
          .end()),
          this._trigger("focus", e, { item: t }));
      },
      deactivate: function () {
        this.active &&
          (this.active
            .children("a")
            .removeClass("ui-state-hover")
            .removeAttr("id"),
          this._trigger("blur"),
          (this.active = null));
      },
      next: function (e) {
        this.move("next", ".ui-menu-item:first", e);
      },
      previous: function (e) {
        this.move("prev", ".ui-menu-item:last", e);
      },
      first: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length;
      },
      last: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length;
      },
      move: function (e, t, i) {
        if (!this.active)
          return void this.activate(i, this.element.children(t));
        var n = this.active[e + "All"](".ui-menu-item").eq(0);
        n.length
          ? this.activate(i, n)
          : this.activate(i, this.element.children(t));
      },
      nextPage: function (t) {
        if (this.hasScroll()) {
          if (!this.active || this.last())
            return void this.activate(
              t,
              this.element.children(".ui-menu-item:first"),
            );
          var i = this.active.offset().top,
            n = this.element.height(),
            s = this.element.children(".ui-menu-item").filter(function () {
              var t = e(this).offset().top - i - n + e(this).height();
              return t < 10 && t > -10;
            });
          (s.length || (s = this.element.children(".ui-menu-item:last")),
            this.activate(t, s));
        } else
          this.activate(
            t,
            this.element
              .children(".ui-menu-item")
              .filter(!this.active || this.last() ? ":first" : ":last"),
          );
      },
      previousPage: function (t) {
        if (this.hasScroll()) {
          if (!this.active || this.first())
            return void this.activate(
              t,
              this.element.children(".ui-menu-item:last"),
            );
          var i = this.active.offset().top,
            n = this.element.height();
          ((result = this.element.children(".ui-menu-item").filter(function () {
            var t = e(this).offset().top - i + n - e(this).height();
            return t < 10 && t > -10;
          })),
            result.length ||
              (result = this.element.children(".ui-menu-item:first")),
            this.activate(t, result));
        } else
          this.activate(
            t,
            this.element
              .children(".ui-menu-item")
              .filter(!this.active || this.first() ? ":last" : ":first"),
          );
      },
      hasScroll: function () {
        return (
          this.element.height() <
          this.element[e.fn.prop ? "prop" : "attr"]("scrollHeight")
        );
      },
      select: function (e) {
        this._trigger("selected", e, { item: this.active });
      },
    });
  })(jQuery) /*
   * jQuery UI Button 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Button
   *
   * Depends:
   *	jquery.ui.core.js
   *	jquery.ui.widget.js
   */,
  (function (e) {
    var t,
      i,
      n,
      s,
      o = "ui-button ui-widget ui-state-default ui-corner-all",
      a =
        "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
      r = function () {
        var t = e(this).find(":ui-button");
        setTimeout(function () {
          t.button("refresh");
        }, 1);
      },
      l = function (t) {
        var i = t.name,
          n = t.form,
          s = e([]);
        return (
          i &&
            (s = n
              ? e(n).find("[name='" + i + "']")
              : e("[name='" + i + "']", t.ownerDocument).filter(function () {
                  return !this.form;
                })),
          s
        );
      };
    (e.widget("ui.button", {
      options: {
        disabled: null,
        text: !0,
        label: null,
        icons: { primary: null, secondary: null },
      },
      _create: function () {
        (this.element
          .closest("form")
          .unbind("reset.button")
          .bind("reset.button", r),
          "boolean" != typeof this.options.disabled &&
            (this.options.disabled = this.element.propAttr("disabled")),
          this._determineButtonType(),
          (this.hasTitle = !!this.buttonElement.attr("title")));
        var a = this,
          c = this.options,
          u = "checkbox" === this.type || "radio" === this.type,
          h = "ui-state-hover" + (u ? "" : " ui-state-active"),
          d = "ui-state-focus";
        (null === c.label && (c.label = this.buttonElement.html()),
          this.element.is(":disabled") && (c.disabled = !0),
          this.buttonElement
            .addClass(o)
            .attr("role", "button")
            .bind("mouseenter.button", function () {
              c.disabled ||
                (e(this).addClass("ui-state-hover"),
                this === t && e(this).addClass("ui-state-active"));
            })
            .bind("mouseleave.button", function () {
              c.disabled || e(this).removeClass(h);
            })
            .bind("click.button", function (e) {
              c.disabled && (e.preventDefault(), e.stopImmediatePropagation());
            }),
          this.element
            .bind("focus.button", function () {
              a.buttonElement.addClass(d);
            })
            .bind("blur.button", function () {
              a.buttonElement.removeClass(d);
            }),
          u &&
            (this.element.bind("change.button", function () {
              s || a.refresh();
            }),
            this.buttonElement
              .bind("mousedown.button", function (e) {
                c.disabled || ((s = !1), (i = e.pageX), (n = e.pageY));
              })
              .bind("mouseup.button", function (e) {
                c.disabled || (i === e.pageX && n === e.pageY) || (s = !0);
              })),
          "checkbox" === this.type
            ? this.buttonElement.bind("click.button", function () {
                if (c.disabled || s) return !1;
                (e(this).toggleClass("ui-state-active"),
                  a.buttonElement.attr("aria-pressed", a.element[0].checked));
              })
            : "radio" === this.type
              ? this.buttonElement.bind("click.button", function () {
                  if (c.disabled || s) return !1;
                  (e(this).addClass("ui-state-active"),
                    a.buttonElement.attr("aria-pressed", "true"));
                  var t = a.element[0];
                  l(t)
                    .not(t)
                    .map(function () {
                      return e(this).button("widget")[0];
                    })
                    .removeClass("ui-state-active")
                    .attr("aria-pressed", "false");
                })
              : (this.buttonElement
                  .bind("mousedown.button", function () {
                    if (c.disabled) return !1;
                    (e(this).addClass("ui-state-active"),
                      (t = this),
                      e(document).one("mouseup", function () {
                        t = null;
                      }));
                  })
                  .bind("mouseup.button", function () {
                    if (c.disabled) return !1;
                    e(this).removeClass("ui-state-active");
                  })
                  .bind("keydown.button", function (t) {
                    if (c.disabled) return !1;
                    (t.keyCode != e.ui.keyCode.SPACE &&
                      t.keyCode != e.ui.keyCode.ENTER) ||
                      e(this).addClass("ui-state-active");
                  })
                  .bind("keyup.button", function () {
                    e(this).removeClass("ui-state-active");
                  }),
                this.buttonElement.is("a") &&
                  this.buttonElement.keyup(function (t) {
                    t.keyCode === e.ui.keyCode.SPACE && e(this).click();
                  })),
          this._setOption("disabled", c.disabled),
          this._resetButton());
      },
      _determineButtonType: function () {
        if (
          (this.element.is(":checkbox")
            ? (this.type = "checkbox")
            : this.element.is(":radio")
              ? (this.type = "radio")
              : this.element.is("input")
                ? (this.type = "input")
                : (this.type = "button"),
          "checkbox" === this.type || "radio" === this.type)
        ) {
          var e = this.element.parents().filter(":last"),
            t = "label[for='" + this.element.attr("id") + "']";
          ((this.buttonElement = e.find(t)),
            this.buttonElement.length ||
              ((e = e.length ? e.siblings() : this.element.siblings()),
              (this.buttonElement = e.filter(t)),
              this.buttonElement.length || (this.buttonElement = e.find(t))),
            this.element.addClass("ui-helper-hidden-accessible"));
          var i = this.element.is(":checked");
          (i && this.buttonElement.addClass("ui-state-active"),
            this.buttonElement.attr("aria-pressed", i));
        } else this.buttonElement = this.element;
      },
      widget: function () {
        return this.buttonElement;
      },
      destroy: function () {
        (this.element.removeClass("ui-helper-hidden-accessible"),
          this.buttonElement
            .removeClass(o + " ui-state-hover ui-state-active  " + a)
            .removeAttr("role")
            .removeAttr("aria-pressed")
            .html(this.buttonElement.find(".ui-button-text").html()),
          this.hasTitle || this.buttonElement.removeAttr("title"),
          e.Widget.prototype.destroy.call(this));
      },
      _setOption: function (t, i) {
        if (
          (e.Widget.prototype._setOption.apply(this, arguments),
          "disabled" === t)
        )
          return void (i
            ? this.element.propAttr("disabled", !0)
            : this.element.propAttr("disabled", !1));
        this._resetButton();
      },
      refresh: function () {
        var t = this.element.is(":disabled");
        (t !== this.options.disabled && this._setOption("disabled", t),
          "radio" === this.type
            ? l(this.element[0]).each(function () {
                e(this).is(":checked")
                  ? e(this)
                      .button("widget")
                      .addClass("ui-state-active")
                      .attr("aria-pressed", "true")
                  : e(this)
                      .button("widget")
                      .removeClass("ui-state-active")
                      .attr("aria-pressed", "false");
              })
            : "checkbox" === this.type &&
              (this.element.is(":checked")
                ? this.buttonElement
                    .addClass("ui-state-active")
                    .attr("aria-pressed", "true")
                : this.buttonElement
                    .removeClass("ui-state-active")
                    .attr("aria-pressed", "false")));
      },
      _resetButton: function () {
        if ("input" === this.type)
          return void (
            this.options.label && this.element.val(this.options.label)
          );
        var t = this.buttonElement.removeClass(a),
          i = e("<span></span>")
            .addClass("ui-button-text")
            .html(this.options.label)
            .appendTo(t.empty())
            .text(),
          n = this.options.icons,
          s = n.primary && n.secondary,
          o = [];
        (n.primary || n.secondary
          ? (this.options.text &&
              o.push(
                "ui-button-text-icon" +
                  (s ? "s" : n.primary ? "-primary" : "-secondary"),
              ),
            n.primary &&
              t.prepend(
                "<span class='ui-button-icon-primary ui-icon " +
                  n.primary +
                  "'></span>",
              ),
            n.secondary &&
              t.append(
                "<span class='ui-button-icon-secondary ui-icon " +
                  n.secondary +
                  "'></span>",
              ),
            this.options.text ||
              (o.push(s ? "ui-button-icons-only" : "ui-button-icon-only"),
              this.hasTitle || t.attr("title", i)))
          : o.push("ui-button-text-only"),
          t.addClass(o.join(" ")));
      },
    }),
      e.widget("ui.buttonset", {
        options: {
          items:
            ":button, :submit, :reset, :checkbox, :radio, a, :data(button)",
        },
        _create: function () {
          this.element.addClass("ui-buttonset");
        },
        _init: function () {
          this.refresh();
        },
        _setOption: function (t, i) {
          ("disabled" === t && this.buttons.button("option", t, i),
            e.Widget.prototype._setOption.apply(this, arguments));
        },
        refresh: function () {
          var t = "ltr" === this.element.css("direction");
          this.buttons = this.element
            .find(this.options.items)
            .filter(":ui-button")
            .button("refresh")
            .end()
            .not(":ui-button")
            .button()
            .end()
            .map(function () {
              return e(this).button("widget")[0];
            })
            .removeClass("ui-corner-all ui-corner-left ui-corner-right")
            .filter(":first")
            .addClass(t ? "ui-corner-left" : "ui-corner-right")
            .end()
            .filter(":last")
            .addClass(t ? "ui-corner-right" : "ui-corner-left")
            .end()
            .end();
        },
        destroy: function () {
          (this.element.removeClass("ui-buttonset"),
            this.buttons
              .map(function () {
                return e(this).button("widget")[0];
              })
              .removeClass("ui-corner-left ui-corner-right")
              .end()
              .button("destroy"),
            e.Widget.prototype.destroy.call(this));
        },
      }));
  })(jQuery) /*
   * jQuery UI Dialog 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Dialog
   *
   * Depends:
   *	jquery.ui.core.js
   *	jquery.ui.widget.js
   *  jquery.ui.button.js
   *	jquery.ui.draggable.js
   *	jquery.ui.mouse.js
   *	jquery.ui.position.js
   *	jquery.ui.resizable.js
   */,
  (function (e, t) {
    var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
      n = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0,
      },
      s = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
      o = e.attrFn || {
        val: !0,
        css: !0,
        html: !0,
        text: !0,
        data: !0,
        width: !0,
        height: !0,
        offset: !0,
        click: !0,
      };
    (e.widget("ui.dialog", {
      options: {
        autoOpen: !0,
        buttons: {},
        closeOnEscape: !0,
        closeText: "close",
        dialogClass: "",
        draggable: !0,
        hide: null,
        height: "auto",
        maxHeight: !1,
        maxWidth: !1,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: "center",
          at: "center",
          collision: "fit",
          using: function (t) {
            var i = e(this).css(t).offset().top;
            i < 0 && e(this).css("top", t.top - i);
          },
        },
        resizable: !0,
        show: null,
        stack: !0,
        title: "",
        width: 300,
        zIndex: 1e3,
      },
      _create: function () {
        ((this.originalTitle = this.element.attr("title")),
          "string" != typeof this.originalTitle && (this.originalTitle = ""),
          (this.options.title = this.options.title || this.originalTitle));
        var t = this,
          n = t.options,
          s = n.title || "&#160;",
          o = e.ui.dialog.getTitleId(t.element),
          a = (t.uiDialog = e("<div></div>"))
            .appendTo(document.body)
            .hide()
            .addClass(i + n.dialogClass)
            .css({ zIndex: n.zIndex })
            .attr("tabIndex", -1)
            .css("outline", 0)
            .keydown(function (i) {
              n.closeOnEscape &&
                !i.isDefaultPrevented() &&
                i.keyCode &&
                i.keyCode === e.ui.keyCode.ESCAPE &&
                (t.close(i), i.preventDefault());
            })
            .attr({ role: "dialog", "aria-labelledby": o })
            .mousedown(function (e) {
              t.moveToTop(!1, e);
            }),
          r =
            (t.element
              .show()
              .removeAttr("title")
              .addClass("ui-dialog-content ui-widget-content")
              .appendTo(a),
            (t.uiDialogTitlebar = e("<div></div>"))
              .addClass(
                "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix",
              )
              .prependTo(a)),
          l = e('<a href="#"></a>')
            .addClass("ui-dialog-titlebar-close ui-corner-all")
            .attr("role", "button")
            .hover(
              function () {
                l.addClass("ui-state-hover");
              },
              function () {
                l.removeClass("ui-state-hover");
              },
            )
            .focus(function () {
              l.addClass("ui-state-focus");
            })
            .blur(function () {
              l.removeClass("ui-state-focus");
            })
            .click(function (e) {
              return (t.close(e), !1);
            })
            .appendTo(r);
        ((t.uiDialogTitlebarCloseText = e("<span></span>"))
          .addClass("ui-icon ui-icon-closethick")
          .text(n.closeText)
          .appendTo(l),
          e("<span></span>")
            .addClass("ui-dialog-title")
            .attr("id", o)
            .html(s)
            .prependTo(r));
        (e.isFunction(n.beforeclose) &&
          !e.isFunction(n.beforeClose) &&
          (n.beforeClose = n.beforeclose),
          r.find("*").add(r).disableSelection(),
          n.draggable && e.fn.draggable && t._makeDraggable(),
          n.resizable && e.fn.resizable && t._makeResizable(),
          t._createButtons(n.buttons),
          (t._isOpen = !1),
          e.fn.bgiframe && a.bgiframe());
      },
      _init: function () {
        this.options.autoOpen && this.open();
      },
      destroy: function () {
        var e = this;
        return (
          e.overlay && e.overlay.destroy(),
          e.uiDialog.hide(),
          e.element
            .unbind(".dialog")
            .removeData("dialog")
            .removeClass("ui-dialog-content ui-widget-content")
            .hide()
            .appendTo("body"),
          e.uiDialog.remove(),
          e.originalTitle && e.element.attr("title", e.originalTitle),
          e
        );
      },
      widget: function () {
        return this.uiDialog;
      },
      close: function (t) {
        var i,
          n,
          s = this;
        if (!1 !== s._trigger("beforeClose", t))
          return (
            s.overlay && s.overlay.destroy(),
            s.uiDialog.unbind("keypress.ui-dialog"),
            (s._isOpen = !1),
            s.options.hide
              ? s.uiDialog.hide(s.options.hide, function () {
                  s._trigger("close", t);
                })
              : (s.uiDialog.hide(), s._trigger("close", t)),
            e.ui.dialog.overlay.resize(),
            s.options.modal &&
              ((i = 0),
              e(".ui-dialog").each(function () {
                this !== s.uiDialog[0] &&
                  ((n = e(this).css("z-index")),
                  isNaN(n) || (i = Math.max(i, n)));
              }),
              (e.ui.dialog.maxZ = i)),
            s
          );
      },
      isOpen: function () {
        return this._isOpen;
      },
      moveToTop: function (t, i) {
        var n,
          s = this,
          o = s.options;
        return (o.modal && !t) || (!o.stack && !o.modal)
          ? s._trigger("focus", i)
          : (o.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = o.zIndex),
            s.overlay &&
              ((e.ui.dialog.maxZ += 1),
              s.overlay.$el.css(
                "z-index",
                (e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ),
              )),
            (n = {
              scrollTop: s.element.scrollTop(),
              scrollLeft: s.element.scrollLeft(),
            }),
            (e.ui.dialog.maxZ += 1),
            s.uiDialog.css("z-index", e.ui.dialog.maxZ),
            s.element.attr(n),
            s._trigger("focus", i),
            s);
      },
      open: function () {
        if (!this._isOpen) {
          var t = this,
            i = t.options,
            n = t.uiDialog;
          return (
            (t.overlay = i.modal ? new e.ui.dialog.overlay(t) : null),
            t._size(),
            t._position(i.position),
            n.show(i.show),
            t.moveToTop(!0),
            i.modal &&
              n.bind("keypress.ui-dialog", function (t) {
                if (t.keyCode === e.ui.keyCode.TAB) {
                  var i = e(":tabbable", this),
                    n = i.filter(":first"),
                    s = i.filter(":last");
                  return t.target !== s[0] || t.shiftKey
                    ? t.target === n[0] && t.shiftKey
                      ? (s.focus(1), !1)
                      : void 0
                    : (n.focus(1), !1);
                }
              }),
            e(
              t.element
                .find(":tabbable")
                .get()
                .concat(
                  n
                    .find(".ui-dialog-buttonpane :tabbable")
                    .get()
                    .concat(n.get()),
                ),
            )
              .eq(0)
              .focus(),
            (t._isOpen = !0),
            t._trigger("open"),
            t
          );
        }
      },
      _createButtons: function (t) {
        var i = this,
          n = !1,
          s = e("<div></div>").addClass(
            "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix",
          ),
          a = e("<div></div>").addClass("ui-dialog-buttonset").appendTo(s);
        (i.uiDialog.find(".ui-dialog-buttonpane").remove(),
          "object" == typeof t &&
            null !== t &&
            e.each(t, function () {
              return !(n = !0);
            }),
          n &&
            (e.each(t, function (t, n) {
              n = e.isFunction(n) ? { click: n, text: t } : n;
              var s = e('<button type="button"></button>')
                .click(function () {
                  n.click.apply(i.element[0], arguments);
                })
                .appendTo(a);
              (e.each(n, function (e, t) {
                "click" !== e && (e in o ? s[e](t) : s.attr(e, t));
              }),
                e.fn.button && s.button());
            }),
            s.appendTo(i.uiDialog)));
      },
      _makeDraggable: function () {
        function t(e) {
          return { position: e.position, offset: e.offset };
        }
        var i,
          n = this,
          s = n.options,
          o = e(document);
        n.uiDialog.draggable({
          cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
          handle: ".ui-dialog-titlebar",
          containment: "document",
          start: function (o, a) {
            ((i = "auto" === s.height ? "auto" : e(this).height()),
              e(this).height(e(this).height()).addClass("ui-dialog-dragging"),
              n._trigger("dragStart", o, t(a)));
          },
          drag: function (e, i) {
            n._trigger("drag", e, t(i));
          },
          stop: function (a, r) {
            ((s.position = [
              r.position.left - o.scrollLeft(),
              r.position.top - o.scrollTop(),
            ]),
              e(this).removeClass("ui-dialog-dragging").height(i),
              n._trigger("dragStop", a, t(r)),
              e.ui.dialog.overlay.resize());
          },
        });
      },
      _makeResizable: function (i) {
        function n(e) {
          return {
            originalPosition: e.originalPosition,
            originalSize: e.originalSize,
            position: e.position,
            size: e.size,
          };
        }
        i = i === t ? this.options.resizable : i;
        var s = this,
          o = s.options,
          a = s.uiDialog.css("position"),
          r = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw";
        s.uiDialog
          .resizable({
            cancel: ".ui-dialog-content",
            containment: "document",
            alsoResize: s.element,
            maxWidth: o.maxWidth,
            maxHeight: o.maxHeight,
            minWidth: o.minWidth,
            minHeight: s._minHeight(),
            handles: r,
            start: function (t, i) {
              (e(this).addClass("ui-dialog-resizing"),
                s._trigger("resizeStart", t, n(i)));
            },
            resize: function (e, t) {
              s._trigger("resize", e, n(t));
            },
            stop: function (t, i) {
              (e(this).removeClass("ui-dialog-resizing"),
                (o.height = e(this).height()),
                (o.width = e(this).width()),
                s._trigger("resizeStop", t, n(i)),
                e.ui.dialog.overlay.resize());
            },
          })
          .css("position", a)
          .find(".ui-resizable-se")
          .addClass("ui-icon ui-icon-grip-diagonal-se");
      },
      _minHeight: function () {
        var e = this.options;
        return "auto" === e.height
          ? e.minHeight
          : Math.min(e.minHeight, e.height);
      },
      _position: function (t) {
        var i,
          n = [],
          s = [0, 0];
        (t
          ? (("string" == typeof t || ("object" == typeof t && "0" in t)) &&
              ((n = t.split ? t.split(" ") : [t[0], t[1]]),
              1 === n.length && (n[1] = n[0]),
              e.each(["left", "top"], function (e, t) {
                +n[e] === n[e] && ((s[e] = n[e]), (n[e] = t));
              }),
              (t = { my: n.join(" "), at: n.join(" "), offset: s.join(" ") })),
            (t = e.extend({}, e.ui.dialog.prototype.options.position, t)))
          : (t = e.ui.dialog.prototype.options.position),
          (i = this.uiDialog.is(":visible")),
          i || this.uiDialog.show(),
          this.uiDialog
            .css({ top: 0, left: 0 })
            .position(e.extend({ of: window }, t)),
          i || this.uiDialog.hide());
      },
      _setOptions: function (t) {
        var i = this,
          o = {},
          a = !1;
        (e.each(t, function (e, t) {
          (i._setOption(e, t), e in n && (a = !0), e in s && (o[e] = t));
        }),
          a && this._size(),
          this.uiDialog.is(":data(resizable)") &&
            this.uiDialog.resizable("option", o));
      },
      _setOption: function (t, n) {
        var s = this,
          o = s.uiDialog;
        switch (t) {
          case "beforeclose":
            t = "beforeClose";
            break;
          case "buttons":
            s._createButtons(n);
            break;
          case "closeText":
            s.uiDialogTitlebarCloseText.text("" + n);
            break;
          case "dialogClass":
            o.removeClass(s.options.dialogClass).addClass(i + n);
            break;
          case "disabled":
            n
              ? o.addClass("ui-dialog-disabled")
              : o.removeClass("ui-dialog-disabled");
            break;
          case "draggable":
            var a = o.is(":data(draggable)");
            (a && !n && o.draggable("destroy"), !a && n && s._makeDraggable());
            break;
          case "position":
            s._position(n);
            break;
          case "resizable":
            var r = o.is(":data(resizable)");
            (r && !n && o.resizable("destroy"),
              r && "string" == typeof n && o.resizable("option", "handles", n),
              r || !1 === n || s._makeResizable(n));
            break;
          case "title":
            e(".ui-dialog-title", s.uiDialogTitlebar).html(
              "" + (n || "&#160;"),
            );
        }
        e.Widget.prototype._setOption.apply(s, arguments);
      },
      _size: function () {
        var t,
          i,
          n = this.options,
          s = this.uiDialog.is(":visible");
        if (
          (this.element.show().css({ width: "auto", minHeight: 0, height: 0 }),
          n.minWidth > n.width && (n.width = n.minWidth),
          (t = this.uiDialog.css({ height: "auto", width: n.width }).height()),
          (i = Math.max(0, n.minHeight - t)),
          "auto" === n.height)
        )
          if (e.support.minHeight)
            this.element.css({ minHeight: i, height: "auto" });
          else {
            this.uiDialog.show();
            var o = this.element.css("height", "auto").height();
            (s || this.uiDialog.hide(), this.element.height(Math.max(o, i)));
          }
        else this.element.height(Math.max(n.height - t, 0));
        this.uiDialog.is(":data(resizable)") &&
          this.uiDialog.resizable("option", "minHeight", this._minHeight());
      },
    }),
      e.extend(e.ui.dialog, {
        version: "1.8.16",
        uuid: 0,
        maxZ: 0,
        getTitleId: function (e) {
          var t = e.attr("id");
          return (
            t || ((this.uuid += 1), (t = this.uuid)),
            "ui-dialog-title-" + t
          );
        },
        overlay: function (t) {
          this.$el = e.ui.dialog.overlay.create(t);
        },
      }),
      e.extend(e.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: e
          .map(
            "focus,mousedown,mouseup,keydown,keypress,click".split(","),
            function (e) {
              return e + ".dialog-overlay";
            },
          )
          .join(" "),
        create: function (t) {
          0 === this.instances.length &&
            (setTimeout(function () {
              e.ui.dialog.overlay.instances.length &&
                e(document).bind(e.ui.dialog.overlay.events, function (t) {
                  if (e(t.target).zIndex() < e.ui.dialog.overlay.maxZ)
                    return !1;
                });
            }, 1),
            e(document).bind("keydown.dialog-overlay", function (i) {
              t.options.closeOnEscape &&
                !i.isDefaultPrevented() &&
                i.keyCode &&
                i.keyCode === e.ui.keyCode.ESCAPE &&
                (t.close(i), i.preventDefault());
            }),
            e(window).bind(
              "resize.dialog-overlay",
              e.ui.dialog.overlay.resize,
            ));
          var i = (
            this.oldInstances.pop() ||
            e("<div></div>").addClass("ui-widget-overlay")
          )
            .appendTo(document.body)
            .css({ width: this.width(), height: this.height() });
          return (e.fn.bgiframe && i.bgiframe(), this.instances.push(i), i);
        },
        destroy: function (t) {
          var i = e.inArray(t, this.instances);
          (-1 != i && this.oldInstances.push(this.instances.splice(i, 1)[0]),
            0 === this.instances.length &&
              e([document, window]).unbind(".dialog-overlay"),
            t.remove());
          var n = 0;
          (e.each(this.instances, function () {
            n = Math.max(n, this.css("z-index"));
          }),
            (this.maxZ = n));
        },
        height: function () {
          var t, i;
          return e.browser.msie && e.browser.version < 7
            ? ((t = Math.max(
                document.documentElement.scrollHeight,
                document.body.scrollHeight,
              )),
              (i = Math.max(
                document.documentElement.offsetHeight,
                document.body.offsetHeight,
              )),
              t < i ? e(window).height() + "px" : t + "px")
            : e(document).height() + "px";
        },
        width: function () {
          var t, i;
          return e.browser.msie
            ? ((t = Math.max(
                document.documentElement.scrollWidth,
                document.body.scrollWidth,
              )),
              (i = Math.max(
                document.documentElement.offsetWidth,
                document.body.offsetWidth,
              )),
              t < i ? e(window).width() + "px" : t + "px")
            : e(document).width() + "px";
        },
        resize: function () {
          var t = e([]);
          (e.each(e.ui.dialog.overlay.instances, function () {
            t = t.add(this);
          }),
            t
              .css({ width: 0, height: 0 })
              .css({
                width: e.ui.dialog.overlay.width(),
                height: e.ui.dialog.overlay.height(),
              }));
        },
      }),
      e.extend(e.ui.dialog.overlay.prototype, {
        destroy: function () {
          e.ui.dialog.overlay.destroy(this.$el);
        },
      }));
  })(jQuery) /*
   * jQuery UI Slider 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Slider
   *
   * Depends:
   *	jquery.ui.core.js
   *	jquery.ui.mouse.js
   *	jquery.ui.widget.js
   */,
  (function (e) {
    var t = 5;
    (e.widget("ui.slider", e.ui.mouse, {
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
      },
      _create: function () {
        var i = this,
          n = this.options,
          s = this.element
            .find(".ui-slider-handle")
            .addClass("ui-state-default ui-corner-all"),
          o =
            "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
          a = (n.values && n.values.length) || 1,
          r = [];
        ((this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this.element.addClass(
            "ui-slider ui-slider-" +
              this.orientation +
              " ui-widget ui-widget-content ui-corner-all" +
              (n.disabled ? " ui-slider-disabled ui-disabled" : ""),
          ),
          (this.range = e([])),
          n.range &&
            (!0 === n.range &&
              (n.values || (n.values = [this._valueMin(), this._valueMin()]),
              n.values.length &&
                2 !== n.values.length &&
                (n.values = [n.values[0], n.values[0]])),
            (this.range = e("<div></div>")
              .appendTo(this.element)
              .addClass(
                "ui-slider-range ui-widget-header" +
                  ("min" === n.range || "max" === n.range
                    ? " ui-slider-range-" + n.range
                    : ""),
              ))));
        for (var l = s.length; l < a; l += 1) r.push(o);
        ((this.handles = s.add(e(r.join("")).appendTo(i.element))),
          (this.handle = this.handles.eq(0)),
          this.handles
            .add(this.range)
            .filter("a")
            .click(function (e) {
              e.preventDefault();
            })
            .hover(
              function () {
                n.disabled || e(this).addClass("ui-state-hover");
              },
              function () {
                e(this).removeClass("ui-state-hover");
              },
            )
            .focus(function () {
              n.disabled
                ? e(this).blur()
                : (e(".ui-slider .ui-state-focus").removeClass(
                    "ui-state-focus",
                  ),
                  e(this).addClass("ui-state-focus"));
            })
            .blur(function () {
              e(this).removeClass("ui-state-focus");
            }),
          this.handles.each(function (t) {
            e(this).data("index.ui-slider-handle", t);
          }),
          this.handles
            .keydown(function (n) {
              var s,
                o,
                a,
                r = !0,
                l = e(this).data("index.ui-slider-handle");
              if (!i.options.disabled) {
                switch (n.keyCode) {
                  case e.ui.keyCode.HOME:
                  case e.ui.keyCode.END:
                  case e.ui.keyCode.PAGE_UP:
                  case e.ui.keyCode.PAGE_DOWN:
                  case e.ui.keyCode.UP:
                  case e.ui.keyCode.RIGHT:
                  case e.ui.keyCode.DOWN:
                  case e.ui.keyCode.LEFT:
                    if (
                      ((r = !1),
                      !i._keySliding &&
                        ((i._keySliding = !0),
                        e(this).addClass("ui-state-active"),
                        !1 === i._start(n, l)))
                    )
                      return;
                }
                switch (
                  ((a = i.options.step),
                  (s = o =
                    i.options.values && i.options.values.length
                      ? i.values(l)
                      : i.value()),
                  n.keyCode)
                ) {
                  case e.ui.keyCode.HOME:
                    o = i._valueMin();
                    break;
                  case e.ui.keyCode.END:
                    o = i._valueMax();
                    break;
                  case e.ui.keyCode.PAGE_UP:
                    o = i._trimAlignValue(
                      s + (i._valueMax() - i._valueMin()) / t,
                    );
                    break;
                  case e.ui.keyCode.PAGE_DOWN:
                    o = i._trimAlignValue(
                      s - (i._valueMax() - i._valueMin()) / t,
                    );
                    break;
                  case e.ui.keyCode.UP:
                  case e.ui.keyCode.RIGHT:
                    if (s === i._valueMax()) return;
                    o = i._trimAlignValue(s + a);
                    break;
                  case e.ui.keyCode.DOWN:
                  case e.ui.keyCode.LEFT:
                    if (s === i._valueMin()) return;
                    o = i._trimAlignValue(s - a);
                }
                return (i._slide(n, l, o), r);
              }
            })
            .keyup(function (t) {
              var n = e(this).data("index.ui-slider-handle");
              i._keySliding &&
                ((i._keySliding = !1),
                i._stop(t, n),
                i._change(t, n),
                e(this).removeClass("ui-state-active"));
            }),
          this._refreshValue(),
          (this._animateOff = !1));
      },
      destroy: function () {
        return (
          this.handles.remove(),
          this.range.remove(),
          this.element
            .removeClass(
              "ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all",
            )
            .removeData("slider")
            .unbind(".slider"),
          this._mouseDestroy(),
          this
        );
      },
      _mouseCapture: function (t) {
        var i,
          n,
          s,
          o,
          a,
          r,
          l,
          c,
          u = this.options;
        return (
          !u.disabled &&
          ((this.elementSize = {
            width: this.element.outerWidth(),
            height: this.element.outerHeight(),
          }),
          (this.elementOffset = this.element.offset()),
          (i = { x: t.pageX, y: t.pageY }),
          (n = this._normValueFromMouse(i)),
          (s = this._valueMax() - this._valueMin() + 1),
          (a = this),
          this.handles.each(function (t) {
            var i = Math.abs(n - a.values(t));
            s > i && ((s = i), (o = e(this)), (r = t));
          }),
          !0 === u.range &&
            this.values(1) === u.min &&
            ((r += 1), (o = e(this.handles[r]))),
          !1 !== this._start(t, r) &&
            ((this._mouseSliding = !0),
            (a._handleIndex = r),
            o.addClass("ui-state-active").focus(),
            (l = o.offset()),
            (c = !e(t.target).parents().andSelf().is(".ui-slider-handle")),
            (this._clickOffset = c
              ? { left: 0, top: 0 }
              : {
                  left: t.pageX - l.left - o.width() / 2,
                  top:
                    t.pageY -
                    l.top -
                    o.height() / 2 -
                    (parseInt(o.css("borderTopWidth"), 10) || 0) -
                    (parseInt(o.css("borderBottomWidth"), 10) || 0) +
                    (parseInt(o.css("marginTop"), 10) || 0),
                }),
            this.handles.hasClass("ui-state-hover") || this._slide(t, r, n),
            (this._animateOff = !0),
            !0))
        );
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (e) {
        var t = { x: e.pageX, y: e.pageY },
          i = this._normValueFromMouse(t);
        return (this._slide(e, this._handleIndex, i), !1);
      },
      _mouseStop: function (e) {
        return (
          this.handles.removeClass("ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(e, this._handleIndex),
          this._change(e, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation =
          "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (e) {
        var t, i, n, s, o;
        return (
          "horizontal" === this.orientation
            ? ((t = this.elementSize.width),
              (i =
                e.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((t = this.elementSize.height),
              (i =
                e.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (n = i / t),
          n > 1 && (n = 1),
          n < 0 && (n = 0),
          "vertical" === this.orientation && (n = 1 - n),
          (s = this._valueMax() - this._valueMin()),
          (o = this._valueMin() + n * s),
          this._trimAlignValue(o)
        );
      },
      _start: function (e, t) {
        var i = { handle: this.handles[t], value: this.value() };
        return (
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(t)), (i.values = this.values())),
          this._trigger("start", e, i)
        );
      },
      _slide: function (e, t, i) {
        var n, s, o;
        this.options.values && this.options.values.length
          ? ((n = this.values(t ? 0 : 1)),
            2 === this.options.values.length &&
              !0 === this.options.range &&
              ((0 === t && i > n) || (1 === t && i < n)) &&
              (i = n),
            i !== this.values(t) &&
              ((s = this.values()),
              (s[t] = i),
              (o = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: s,
              })),
              (n = this.values(t ? 0 : 1)),
              !1 !== o && this.values(t, i, !0)))
          : i !== this.value() &&
            !1 !==
              (o = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
              })) &&
            this.value(i);
      },
      _stop: function (e, t) {
        var i = { handle: this.handles[t], value: this.value() };
        (this.options.values &&
          this.options.values.length &&
          ((i.value = this.values(t)), (i.values = this.values())),
          this._trigger("stop", e, i));
      },
      _change: function (e, t) {
        if (!this._keySliding && !this._mouseSliding) {
          var i = { handle: this.handles[t], value: this.value() };
          (this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(t)), (i.values = this.values())),
            this._trigger("change", e, i));
        }
      },
      value: function (e) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(e)),
            this._refreshValue(),
            void this._change(null, 0))
          : this._value();
      },
      values: function (t, i) {
        var n, s, o;
        if (arguments.length > 1)
          return (
            (this.options.values[t] = this._trimAlignValue(i)),
            this._refreshValue(),
            void this._change(null, t)
          );
        if (!arguments.length) return this._values();
        if (!e.isArray(arguments[0]))
          return this.options.values && this.options.values.length
            ? this._values(t)
            : this.value();
        for (
          n = this.options.values, s = arguments[0], o = 0;
          o < n.length;
          o += 1
        )
          ((n[o] = this._trimAlignValue(s[o])), this._change(null, o));
        this._refreshValue();
      },
      _setOption: function (t, i) {
        var n,
          s = 0;
        switch (
          (e.isArray(this.options.values) && (s = this.options.values.length),
          e.Widget.prototype._setOption.apply(this, arguments),
          t)
        ) {
          case "disabled":
            i
              ? (this.handles.filter(".ui-state-focus").blur(),
                this.handles.removeClass("ui-state-hover"),
                this.handles.propAttr("disabled", !0),
                this.element.addClass("ui-disabled"))
              : (this.handles.propAttr("disabled", !1),
                this.element.removeClass("ui-disabled"));
            break;
          case "orientation":
            (this._detectOrientation(),
              this.element
                .removeClass("ui-slider-horizontal ui-slider-vertical")
                .addClass("ui-slider-" + this.orientation),
              this._refreshValue());
            break;
          case "value":
            ((this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1));
            break;
          case "values":
            for (
              this._animateOff = !0, this._refreshValue(), n = 0;
              n < s;
              n += 1
            )
              this._change(null, n);
            this._animateOff = !1;
        }
      },
      _value: function () {
        var e = this.options.value;
        return (e = this._trimAlignValue(e));
      },
      _values: function (e) {
        var t, i, n;
        if (arguments.length)
          return ((t = this.options.values[e]), (t = this._trimAlignValue(t)));
        for (i = this.options.values.slice(), n = 0; n < i.length; n += 1)
          i[n] = this._trimAlignValue(i[n]);
        return i;
      },
      _trimAlignValue: function (e) {
        if (e <= this._valueMin()) return this._valueMin();
        if (e >= this._valueMax()) return this._valueMax();
        var t = this.options.step > 0 ? this.options.step : 1,
          i = (e - this._valueMin()) % t,
          n = e - i;
        return (
          2 * Math.abs(i) >= t && (n += i > 0 ? t : -t),
          parseFloat(n.toFixed(5))
        );
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.options.max;
      },
      _refreshValue: function () {
        var t,
          i,
          n,
          s,
          o,
          a = this.options.range,
          r = this.options,
          l = this,
          c = !this._animateOff && r.animate,
          u = {};
        this.options.values && this.options.values.length
          ? this.handles.each(function (n) {
              ((t =
                ((l.values(n) - l._valueMin()) /
                  (l._valueMax() - l._valueMin())) *
                100),
                (u["horizontal" === l.orientation ? "left" : "bottom"] =
                  t + "%"),
                e(this).stop(1, 1)[c ? "animate" : "css"](u, r.animate),
                !0 === l.options.range &&
                  ("horizontal" === l.orientation
                    ? (0 === n &&
                        l.range
                          .stop(1, 1)
                          [c ? "animate" : "css"]({ left: t + "%" }, r.animate),
                      1 === n &&
                        l.range[c ? "animate" : "css"](
                          { width: t - i + "%" },
                          { queue: !1, duration: r.animate },
                        ))
                    : (0 === n &&
                        l.range
                          .stop(1, 1)
                          [
                            c ? "animate" : "css"
                          ]({ bottom: t + "%" }, r.animate),
                      1 === n &&
                        l.range[c ? "animate" : "css"](
                          { height: t - i + "%" },
                          { queue: !1, duration: r.animate },
                        ))),
                (i = t));
            })
          : ((n = this.value()),
            (s = this._valueMin()),
            (o = this._valueMax()),
            (t = o !== s ? ((n - s) / (o - s)) * 100 : 0),
            (u["horizontal" === l.orientation ? "left" : "bottom"] = t + "%"),
            this.handle.stop(1, 1)[c ? "animate" : "css"](u, r.animate),
            "min" === a &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [c ? "animate" : "css"]({ width: t + "%" }, r.animate),
            "max" === a &&
              "horizontal" === this.orientation &&
              this.range[c ? "animate" : "css"](
                { width: 100 - t + "%" },
                { queue: !1, duration: r.animate },
              ),
            "min" === a &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [c ? "animate" : "css"]({ height: t + "%" }, r.animate),
            "max" === a &&
              "vertical" === this.orientation &&
              this.range[c ? "animate" : "css"](
                { height: 100 - t + "%" },
                { queue: !1, duration: r.animate },
              ));
      },
    }),
      e.extend(e.ui.slider, { version: "1.8.16" }));
  })(jQuery) /*
   * jQuery UI Tabs 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Tabs
   *
   * Depends:
   *	jquery.ui.core.js
   *	jquery.ui.widget.js
   */,
  (function (e, i) {
    function n() {
      return ++o;
    }
    function s() {
      return ++a;
    }
    var o = 0,
      a = 0;
    (e.widget("ui.tabs", {
      options: {
        add: null,
        ajaxOptions: null,
        cache: !1,
        cookie: null,
        collapsible: !1,
        disable: null,
        disabled: [],
        enable: null,
        event: "click",
        fx: null,
        idPrefix: "ui-tabs-",
        load: null,
        panelTemplate: "<div></div>",
        remove: null,
        select: null,
        show: null,
        spinner: "<em>Loading&#8230;</em>",
        tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>",
      },
      _create: function () {
        this._tabify(!0);
      },
      _setOption: function (e, t) {
        if ("selected" == e) {
          if (this.options.collapsible && t == this.options.selected) return;
          this.select(t);
        } else ((this.options[e] = t), this._tabify());
      },
      _tabId: function (e) {
        return (
          (e.title &&
            e.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "")) ||
          this.options.idPrefix + n()
        );
      },
      _sanitizeSelector: function (e) {
        return e.replace(/:/g, "\\:");
      },
      _cookie: function () {
        var t =
          this.cookie ||
          (this.cookie = this.options.cookie.name || "ui-tabs-" + s());
        return e.cookie.apply(null, [t].concat(e.makeArray(arguments)));
      },
      _ui: function (e, t) {
        return { tab: e, panel: t, index: this.anchors.index(e) };
      },
      _cleanup: function () {
        this.lis
          .filter(".ui-state-processing")
          .removeClass("ui-state-processing")
          .find("span:data(label.tabs)")
          .each(function () {
            var t = e(this);
            t.html(t.data("label.tabs")).removeData("label.tabs");
          });
      },
      _tabify: function (t) {
        function n(t, i) {
          (t.css("display", ""),
            !e.support.opacity &&
              i.opacity &&
              t[0].style.removeAttribute("filter"));
        }
        var s = this,
          o = this.options,
          a = /^#.+/;
        ((this.list = this.element.find("ol,ul").eq(0)),
          (this.lis = e(" > li:has(a[href])", this.list)),
          (this.anchors = this.lis.map(function () {
            return e("a", this)[0];
          })),
          (this.panels = e([])),
          this.anchors.each(function (t, i) {
            var n,
              r = e(i).attr("href"),
              l = r.split("#")[0];
            if (
              (l &&
                (l === location.toString().split("#")[0] ||
                  ((n = e("base")[0]) && l === n.href)) &&
                ((r = i.hash), (i.href = r)),
              a.test(r))
            )
              s.panels = s.panels.add(s.element.find(s._sanitizeSelector(r)));
            else if (r && "#" !== r) {
              (e.data(i, "href.tabs", r),
                e.data(i, "load.tabs", r.replace(/#.*$/, "")));
              var c = s._tabId(i);
              i.href = "#" + c;
              var u = s.element.find("#" + c);
              (u.length ||
                ((u = e(o.panelTemplate)
                  .attr("id", c)
                  .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
                  .insertAfter(s.panels[t - 1] || s.list)),
                u.data("destroy.tabs", !0)),
                (s.panels = s.panels.add(u)));
            } else o.disabled.push(t);
          }),
          t
            ? (this.element.addClass(
                "ui-tabs ui-widget ui-widget-content ui-corner-all",
              ),
              this.list.addClass(
                "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all",
              ),
              this.lis.addClass("ui-state-default ui-corner-top"),
              this.panels.addClass(
                "ui-tabs-panel ui-widget-content ui-corner-bottom",
              ),
              o.selected === i
                ? (location.hash &&
                    this.anchors.each(function (e, t) {
                      if (t.hash == location.hash)
                        return ((o.selected = e), !1);
                    }),
                  "number" != typeof o.selected &&
                    o.cookie &&
                    (o.selected = parseInt(s._cookie(), 10)),
                  "number" != typeof o.selected &&
                    this.lis.filter(".ui-tabs-selected").length &&
                    (o.selected = this.lis.index(
                      this.lis.filter(".ui-tabs-selected"),
                    )),
                  (o.selected = o.selected || (this.lis.length ? 0 : -1)))
                : null === o.selected && (o.selected = -1),
              (o.selected =
                (o.selected >= 0 && this.anchors[o.selected]) || o.selected < 0
                  ? o.selected
                  : 0),
              (o.disabled = e
                .unique(
                  o.disabled.concat(
                    e.map(this.lis.filter(".ui-state-disabled"), function (e) {
                      return s.lis.index(e);
                    }),
                  ),
                )
                .sort()),
              -1 != e.inArray(o.selected, o.disabled) &&
                o.disabled.splice(e.inArray(o.selected, o.disabled), 1),
              this.panels.addClass("ui-tabs-hide"),
              this.lis.removeClass("ui-tabs-selected ui-state-active"),
              o.selected >= 0 &&
                this.anchors.length &&
                (s.element
                  .find(s._sanitizeSelector(s.anchors[o.selected].hash))
                  .removeClass("ui-tabs-hide"),
                this.lis
                  .eq(o.selected)
                  .addClass("ui-tabs-selected ui-state-active"),
                s.element.queue("tabs", function () {
                  s._trigger(
                    "show",
                    null,
                    s._ui(
                      s.anchors[o.selected],
                      s.element.find(
                        s._sanitizeSelector(s.anchors[o.selected].hash),
                      )[0],
                    ),
                  );
                }),
                this.load(o.selected)),
              e(window).bind("unload", function () {
                (s.lis.add(s.anchors).unbind(".tabs"),
                  (s.lis = s.anchors = s.panels = null));
              }))
            : (o.selected = this.lis.index(
                this.lis.filter(".ui-tabs-selected"),
              )),
          this.element[o.collapsible ? "addClass" : "removeClass"](
            "ui-tabs-collapsible",
          ),
          o.cookie && this._cookie(o.selected, o.cookie));
        for (var r, l = 0; (r = this.lis[l]); l++)
          e(r)[
            -1 == e.inArray(l, o.disabled) || e(r).hasClass("ui-tabs-selected")
              ? "removeClass"
              : "addClass"
          ]("ui-state-disabled");
        if (
          (!1 === o.cache && this.anchors.removeData("cache.tabs"),
          this.lis.add(this.anchors).unbind(".tabs"),
          "mouseover" !== o.event)
        ) {
          var c = function (e, t) {
              t.is(":not(.ui-state-disabled)") && t.addClass("ui-state-" + e);
            },
            u = function (e, t) {
              t.removeClass("ui-state-" + e);
            };
          (this.lis.bind("mouseover.tabs", function () {
            c("hover", e(this));
          }),
            this.lis.bind("mouseout.tabs", function () {
              u("hover", e(this));
            }),
            this.anchors.bind("focus.tabs", function () {
              c("focus", e(this).closest("li"));
            }),
            this.anchors.bind("blur.tabs", function () {
              u("focus", e(this).closest("li"));
            }));
        }
        var h, d;
        o.fx &&
          (e.isArray(o.fx) ? ((h = o.fx[0]), (d = o.fx[1])) : (h = d = o.fx));
        var p = d
            ? function (t, i) {
                (e(t)
                  .closest("li")
                  .addClass("ui-tabs-selected ui-state-active"),
                  i
                    .hide()
                    .removeClass("ui-tabs-hide")
                    .animate(d, d.duration || "normal", function () {
                      (n(i, d), s._trigger("show", null, s._ui(t, i[0])));
                    }));
              }
            : function (t, i) {
                (e(t)
                  .closest("li")
                  .addClass("ui-tabs-selected ui-state-active"),
                  i.removeClass("ui-tabs-hide"),
                  s._trigger("show", null, s._ui(t, i[0])));
              },
          f = h
            ? function (e, t) {
                t.animate(h, h.duration || "normal", function () {
                  (s.lis.removeClass("ui-tabs-selected ui-state-active"),
                    t.addClass("ui-tabs-hide"),
                    n(t, h),
                    s.element.dequeue("tabs"));
                });
              }
            : function (e, t) {
                (s.lis.removeClass("ui-tabs-selected ui-state-active"),
                  t.addClass("ui-tabs-hide"),
                  s.element.dequeue("tabs"));
              };
        (this.anchors.bind(o.event + ".tabs", function () {
          var t = this,
            i = e(t).closest("li"),
            n = s.panels.filter(":not(.ui-tabs-hide)"),
            a = s.element.find(s._sanitizeSelector(t.hash));
          if (
            (i.hasClass("ui-tabs-selected") && !o.collapsible) ||
            i.hasClass("ui-state-disabled") ||
            i.hasClass("ui-state-processing") ||
            s.panels.filter(":animated").length ||
            !1 === s._trigger("select", null, s._ui(this, a[0]))
          )
            return (this.blur(), !1);
          if (
            ((o.selected = s.anchors.index(this)), s.abort(), o.collapsible)
          ) {
            if (i.hasClass("ui-tabs-selected"))
              return (
                (o.selected = -1),
                o.cookie && s._cookie(o.selected, o.cookie),
                s.element
                  .queue("tabs", function () {
                    f(t, n);
                  })
                  .dequeue("tabs"),
                this.blur(),
                !1
              );
            if (!n.length)
              return (
                o.cookie && s._cookie(o.selected, o.cookie),
                s.element.queue("tabs", function () {
                  p(t, a);
                }),
                s.load(s.anchors.index(this)),
                this.blur(),
                !1
              );
          }
          if ((o.cookie && s._cookie(o.selected, o.cookie), !a.length))
            throw "jQuery UI Tabs: Mismatching fragment identifier.";
          (n.length &&
            s.element.queue("tabs", function () {
              f(t, n);
            }),
            s.element.queue("tabs", function () {
              p(t, a);
            }),
            s.load(s.anchors.index(this)),
            e.browser.msie && this.blur());
        }),
          this.anchors.bind("click.tabs", function () {
            return !1;
          }));
      },
      _getIndex: function (e) {
        return (
          "string" == typeof e &&
            (e = this.anchors.index(this.anchors.filter("[href$=" + e + "]"))),
          e
        );
      },
      destroy: function () {
        var t = this.options;
        return (
          this.abort(),
          this.element
            .unbind(".tabs")
            .removeClass(
              "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible",
            )
            .removeData("tabs"),
          this.list.removeClass(
            "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all",
          ),
          this.anchors.each(function () {
            var t = e.data(this, "href.tabs");
            t && (this.href = t);
            var i = e(this).unbind(".tabs");
            e.each(["href", "load", "cache"], function (e, t) {
              i.removeData(t + ".tabs");
            });
          }),
          this.lis
            .unbind(".tabs")
            .add(this.panels)
            .each(function () {
              e.data(this, "destroy.tabs")
                ? e(this).remove()
                : e(this).removeClass(
                    [
                      "ui-state-default",
                      "ui-corner-top",
                      "ui-tabs-selected",
                      "ui-state-active",
                      "ui-state-hover",
                      "ui-state-focus",
                      "ui-state-disabled",
                      "ui-tabs-panel",
                      "ui-widget-content",
                      "ui-corner-bottom",
                      "ui-tabs-hide",
                    ].join(" "),
                  );
            }),
          t.cookie && this._cookie(null, t.cookie),
          this
        );
      },
      add: function (t, n, s) {
        s === i && (s = this.anchors.length);
        var o = this,
          a = this.options,
          r = e(
            a.tabTemplate.replace(/#\{href\}/g, t).replace(/#\{label\}/g, n),
          ),
          l = t.indexOf("#") ? this._tabId(e("a", r)[0]) : t.replace("#", "");
        r.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
        var c = o.element.find("#" + l);
        return (
          c.length ||
            (c = e(a.panelTemplate).attr("id", l).data("destroy.tabs", !0)),
          c.addClass(
            "ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide",
          ),
          s >= this.lis.length
            ? (r.appendTo(this.list), c.appendTo(this.list[0].parentNode))
            : (r.insertBefore(this.lis[s]), c.insertBefore(this.panels[s])),
          (a.disabled = e.map(a.disabled, function (e) {
            return e >= s ? ++e : e;
          })),
          this._tabify(),
          1 == this.anchors.length &&
            ((a.selected = 0),
            r.addClass("ui-tabs-selected ui-state-active"),
            c.removeClass("ui-tabs-hide"),
            this.element.queue("tabs", function () {
              o._trigger("show", null, o._ui(o.anchors[0], o.panels[0]));
            }),
            this.load(0)),
          this._trigger("add", null, this._ui(this.anchors[s], this.panels[s])),
          this
        );
      },
      remove: function (t) {
        t = this._getIndex(t);
        var i = this.options,
          n = this.lis.eq(t).remove(),
          s = this.panels.eq(t).remove();
        return (
          n.hasClass("ui-tabs-selected") &&
            this.anchors.length > 1 &&
            this.select(t + (t + 1 < this.anchors.length ? 1 : -1)),
          (i.disabled = e.map(
            e.grep(i.disabled, function (e) {
              return e != t;
            }),
            function (e) {
              return e >= t ? --e : e;
            },
          )),
          this._tabify(),
          this._trigger("remove", null, this._ui(n.find("a")[0], s[0])),
          this
        );
      },
      enable: function (t) {
        t = this._getIndex(t);
        var i = this.options;
        if (-1 != e.inArray(t, i.disabled))
          return (
            this.lis.eq(t).removeClass("ui-state-disabled"),
            (i.disabled = e.grep(i.disabled, function (e) {
              return e != t;
            })),
            this._trigger(
              "enable",
              null,
              this._ui(this.anchors[t], this.panels[t]),
            ),
            this
          );
      },
      disable: function (e) {
        e = this._getIndex(e);
        var t = this.options;
        return (
          e != t.selected &&
            (this.lis.eq(e).addClass("ui-state-disabled"),
            t.disabled.push(e),
            t.disabled.sort(),
            this._trigger(
              "disable",
              null,
              this._ui(this.anchors[e], this.panels[e]),
            )),
          this
        );
      },
      select: function (e) {
        if (-1 == (e = this._getIndex(e))) {
          if (!this.options.collapsible || -1 == this.options.selected)
            return this;
          e = this.options.selected;
        }
        return (this.anchors.eq(e).trigger(this.options.event + ".tabs"), this);
      },
      load: function (t) {
        t = this._getIndex(t);
        var i = this,
          n = this.options,
          s = this.anchors.eq(t)[0],
          o = e.data(s, "load.tabs");
        if (
          (this.abort(),
          !o ||
            (0 !== this.element.queue("tabs").length &&
              e.data(s, "cache.tabs")))
        )
          return void this.element.dequeue("tabs");
        if ((this.lis.eq(t).addClass("ui-state-processing"), n.spinner)) {
          var a = e("span", s);
          a.data("label.tabs", a.html()).html(n.spinner);
        }
        return (
          (this.xhr = e.ajax(
            e.extend({}, n.ajaxOptions, {
              url: o,
              success: function (o, a) {
                (i.element.find(i._sanitizeSelector(s.hash)).html(o),
                  i._cleanup(),
                  n.cache && e.data(s, "cache.tabs", !0),
                  i._trigger("load", null, i._ui(i.anchors[t], i.panels[t])));
                try {
                  n.ajaxOptions.success(o, a);
                } catch (e) {}
              },
              error: function (e, o) {
                (i._cleanup(),
                  i._trigger("load", null, i._ui(i.anchors[t], i.panels[t])));
                try {
                  n.ajaxOptions.error(e, o, t, s);
                } catch (e) {}
              },
            }),
          )),
          i.element.dequeue("tabs"),
          this
        );
      },
      abort: function () {
        return (
          this.element.queue([]),
          this.panels.stop(!1, !0),
          this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)),
          this.xhr && (this.xhr.abort(), delete this.xhr),
          this._cleanup(),
          this
        );
      },
      url: function (e, t) {
        return (
          this.anchors.eq(e).removeData("cache.tabs").data("load.tabs", t),
          this
        );
      },
      length: function () {
        return this.anchors.length;
      },
    }),
      e.extend(e.ui.tabs, { version: "1.8.16" }),
      e.extend(e.ui.tabs.prototype, {
        rotation: null,
        rotate: function (e, i) {
          var n = this,
            s = this.options,
            o =
              n._rotate ||
              (n._rotate = function (t) {
                (clearTimeout(n.rotation),
                  (n.rotation = setTimeout(function () {
                    var e = s.selected;
                    n.select(++e < n.anchors.length ? e : 0);
                  }, e)),
                  t && t.stopPropagation());
              }),
            a =
              n._unrotate ||
              (n._unrotate = i
                ? function () {
                    ((t = s.selected), o());
                  }
                : function (e) {
                    e.clientX && n.rotate(null);
                  });
          return (
            e
              ? (this.element.bind("tabsshow", o),
                this.anchors.bind(s.event + ".tabs", a),
                o())
              : (clearTimeout(n.rotation),
                this.element.unbind("tabsshow", o),
                this.anchors.unbind(s.event + ".tabs", a),
                delete this._rotate,
                delete this._unrotate),
            this
          );
        },
      }));
  })(jQuery) /*
   * jQuery UI Datepicker 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Datepicker
   *
   * Depends:
   *	jquery.ui.core.js
   */,
  (function ($, undefined) {
    function Datepicker() {
      ((this.debug = !1),
        (this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = "ui-datepicker-div"),
        (this._inlineClass = "ui-datepicker-inline"),
        (this._appendClass = "ui-datepicker-append"),
        (this._triggerClass = "ui-datepicker-trigger"),
        (this._dialogClass = "ui-datepicker-dialog"),
        (this._disableClass = "ui-datepicker-disabled"),
        (this._unselectableClass = "ui-datepicker-unselectable"),
        (this._currentClass = "ui-datepicker-current-day"),
        (this._dayOverClass = "ui-datepicker-days-cell-over"),
        (this.regional = []),
        (this.regional[""] = {
          closeText: "Done",
          prevText: "Prev",
          nextText: "Next",
          currentText: "Today",
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthNamesShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          weekHeader: "Wk",
          dateFormat: "mm/dd/yy",
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: "",
        }),
        (this._defaults = {
          showOn: "focus",
          showAnim: "fadeIn",
          showOptions: {},
          defaultDate: null,
          appendText: "",
          buttonText: "...",
          buttonImage: "",
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: "c-10:c+10",
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: "+10",
          minDate: null,
          maxDate: null,
          duration: "fast",
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: "",
          altFormat: "",
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1,
        }),
        $.extend(this._defaults, this.regional[""]),
        (this.dpDiv = bindHover(
          $(
            '<div id="' +
              this._mainDivId +
              '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>',
          ),
        )));
    }
    function bindHover(e) {
      var t =
        "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return e
        .bind("mouseout", function (e) {
          var i = $(e.target).closest(t);
          i.length &&
            i.removeClass(
              "ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover",
            );
        })
        .bind("mouseover", function (i) {
          var n = $(i.target).closest(t);
          !$.datepicker._isDisabledDatepicker(
            instActive.inline ? e.parent()[0] : instActive.input[0],
          ) &&
            n.length &&
            (n
              .parents(".ui-datepicker-calendar")
              .find("a")
              .removeClass("ui-state-hover"),
            n.addClass("ui-state-hover"),
            n.hasClass("ui-datepicker-prev") &&
              n.addClass("ui-datepicker-prev-hover"),
            n.hasClass("ui-datepicker-next") &&
              n.addClass("ui-datepicker-next-hover"));
        });
    }
    function extendRemove(e, t) {
      $.extend(e, t);
      for (var i in t) (null != t[i] && t[i] != undefined) || (e[i] = t[i]);
      return e;
    }
    function isArray(e) {
      return (
        e &&
        (($.browser.safari && "object" == typeof e && e.length) ||
          (e.constructor && e.constructor.toString().match(/\Array\(\)/)))
      );
    }
    $.extend($.ui, { datepicker: { version: "1.8.16" } });
    var PROP_NAME = "datepicker",
      dpuuid = new Date().getTime(),
      instActive;
    ($.extend(Datepicker.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      log: function () {
        this.debug && console.log.apply("", arguments);
      },
      _widgetDatepicker: function () {
        return this.dpDiv;
      },
      setDefaults: function (e) {
        return (extendRemove(this._defaults, e || {}), this);
      },
      _attachDatepicker: function (target, settings) {
        var inlineSettings = null;
        for (var attrName in this._defaults) {
          var attrValue = target.getAttribute("date:" + attrName);
          if (attrValue) {
            inlineSettings = inlineSettings || {};
            try {
              inlineSettings[attrName] = eval(attrValue);
            } catch (e) {
              inlineSettings[attrName] = attrValue;
            }
          }
        }
        var nodeName = target.nodeName.toLowerCase(),
          inline = "div" == nodeName || "span" == nodeName;
        target.id || ((this.uuid += 1), (target.id = "dp" + this.uuid));
        var inst = this._newInst($(target), inline);
        ((inst.settings = $.extend({}, settings || {}, inlineSettings || {})),
          "input" == nodeName
            ? this._connectDatepicker(target, inst)
            : inline && this._inlineDatepicker(target, inst));
      },
      _newInst: function (e, t) {
        return {
          id: e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
          input: e,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: t,
          dpDiv: t
            ? bindHover(
                $(
                  '<div class="' +
                    this._inlineClass +
                    ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>',
                ),
              )
            : this.dpDiv,
        };
      },
      _connectDatepicker: function (e, t) {
        var i = $(e);
        ((t.append = $([])),
          (t.trigger = $([])),
          i.hasClass(this.markerClassName) ||
            (this._attachments(i, t),
            i
              .addClass(this.markerClassName)
              .keydown(this._doKeyDown)
              .keypress(this._doKeyPress)
              .keyup(this._doKeyUp)
              .bind("setData.datepicker", function (e, i, n) {
                t.settings[i] = n;
              })
              .bind("getData.datepicker", function (e, i) {
                return this._get(t, i);
              }),
            this._autoSize(t),
            $.data(e, PROP_NAME, t),
            t.settings.disabled && this._disableDatepicker(e)));
      },
      _attachments: function (e, t) {
        var i = this._get(t, "appendText"),
          n = this._get(t, "isRTL");
        (t.append && t.append.remove(),
          i &&
            ((t.append = $(
              '<span class="' + this._appendClass + '">' + i + "</span>",
            )),
            e[n ? "before" : "after"](t.append)),
          e.unbind("focus", this._showDatepicker),
          t.trigger && t.trigger.remove());
        var s = this._get(t, "showOn");
        if (
          (("focus" != s && "both" != s) || e.focus(this._showDatepicker),
          "button" == s || "both" == s)
        ) {
          var o = this._get(t, "buttonText"),
            a = this._get(t, "buttonImage");
          ((t.trigger = $(
            this._get(t, "buttonImageOnly")
              ? $("<img/>")
                  .addClass(this._triggerClass)
                  .attr({ src: a, alt: o, title: o })
              : $('<button type="button"></button>')
                  .addClass(this._triggerClass)
                  .html(
                    "" == a
                      ? o
                      : $("<img/>").attr({ src: a, alt: o, title: o }),
                  ),
          )),
            e[n ? "before" : "after"](t.trigger),
            t.trigger.click(function () {
              return (
                $.datepicker._datepickerShowing &&
                $.datepicker._lastInput == e[0]
                  ? $.datepicker._hideDatepicker()
                  : $.datepicker._showDatepicker(e[0]),
                !1
              );
            }));
        }
      },
      _autoSize: function (e) {
        if (this._get(e, "autoSize") && !e.inline) {
          var t = new Date(2009, 11, 20),
            i = this._get(e, "dateFormat");
          if (i.match(/[DM]/)) {
            var n = function (e) {
              for (var t = 0, i = 0, n = 0; n < e.length; n++)
                e[n].length > t && ((t = e[n].length), (i = n));
              return i;
            };
            (t.setMonth(
              n(this._get(e, i.match(/MM/) ? "monthNames" : "monthNamesShort")),
            ),
              t.setDate(
                n(this._get(e, i.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                  20 -
                  t.getDay(),
              ));
          }
          e.input.attr("size", this._formatDate(e, t).length);
        }
      },
      _inlineDatepicker: function (e, t) {
        var i = $(e);
        i.hasClass(this.markerClassName) ||
          (i
            .addClass(this.markerClassName)
            .append(t.dpDiv)
            .bind("setData.datepicker", function (e, i, n) {
              t.settings[i] = n;
            })
            .bind("getData.datepicker", function (e, i) {
              return this._get(t, i);
            }),
          $.data(e, PROP_NAME, t),
          this._setDate(t, this._getDefaultDate(t), !0),
          this._updateDatepicker(t),
          this._updateAlternate(t),
          t.settings.disabled && this._disableDatepicker(e),
          t.dpDiv.css("display", "block"));
      },
      _dialogDatepicker: function (e, t, i, n, s) {
        var o = this._dialogInst;
        if (!o) {
          this.uuid += 1;
          var a = "dp" + this.uuid;
          ((this._dialogInput = $(
            '<input type="text" id="' +
              a +
              '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>',
          )),
            this._dialogInput.keydown(this._doKeyDown),
            $("body").append(this._dialogInput),
            (o = this._dialogInst = this._newInst(this._dialogInput, !1)),
            (o.settings = {}),
            $.data(this._dialogInput[0], PROP_NAME, o));
        }
        if (
          (extendRemove(o.settings, n || {}),
          (t = t && t.constructor == Date ? this._formatDate(o, t) : t),
          this._dialogInput.val(t),
          (this._pos = s ? (s.length ? s : [s.pageX, s.pageY]) : null),
          !this._pos)
        ) {
          var r = document.documentElement.clientWidth,
            l = document.documentElement.clientHeight,
            c = document.documentElement.scrollLeft || document.body.scrollLeft,
            u = document.documentElement.scrollTop || document.body.scrollTop;
          this._pos = [r / 2 - 100 + c, l / 2 - 150 + u];
        }
        return (
          this._dialogInput
            .css("left", this._pos[0] + 20 + "px")
            .css("top", this._pos[1] + "px"),
          (o.settings.onSelect = i),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          $.blockUI && $.blockUI(this.dpDiv),
          $.data(this._dialogInput[0], PROP_NAME, o),
          this
        );
      },
      _destroyDatepicker: function (e) {
        var t = $(e),
          i = $.data(e, PROP_NAME);
        if (t.hasClass(this.markerClassName)) {
          var n = e.nodeName.toLowerCase();
          ($.removeData(e, PROP_NAME),
            "input" == n
              ? (i.append.remove(),
                i.trigger.remove(),
                t
                  .removeClass(this.markerClassName)
                  .unbind("focus", this._showDatepicker)
                  .unbind("keydown", this._doKeyDown)
                  .unbind("keypress", this._doKeyPress)
                  .unbind("keyup", this._doKeyUp))
              : ("div" != n && "span" != n) ||
                t.removeClass(this.markerClassName).empty());
        }
      },
      _enableDatepicker: function (e) {
        var t = $(e),
          i = $.data(e, PROP_NAME);
        if (t.hasClass(this.markerClassName)) {
          var n = e.nodeName.toLowerCase();
          if ("input" == n)
            ((e.disabled = !1),
              i.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !1;
                })
                .end()
                .filter("img")
                .css({ opacity: "1.0", cursor: "" }));
          else if ("div" == n || "span" == n) {
            var s = t.children("." + this._inlineClass);
            (s.children().removeClass("ui-state-disabled"),
              s
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .removeAttr("disabled"));
          }
          this._disabledInputs = $.map(this._disabledInputs, function (t) {
            return t == e ? null : t;
          });
        }
      },
      _disableDatepicker: function (e) {
        var t = $(e),
          i = $.data(e, PROP_NAME);
        if (t.hasClass(this.markerClassName)) {
          var n = e.nodeName.toLowerCase();
          if ("input" == n)
            ((e.disabled = !0),
              i.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !0;
                })
                .end()
                .filter("img")
                .css({ opacity: "0.5", cursor: "default" }));
          else if ("div" == n || "span" == n) {
            var s = t.children("." + this._inlineClass);
            (s.children().addClass("ui-state-disabled"),
              s
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .attr("disabled", "disabled"));
          }
          ((this._disabledInputs = $.map(this._disabledInputs, function (t) {
            return t == e ? null : t;
          })),
            (this._disabledInputs[this._disabledInputs.length] = e));
        }
      },
      _isDisabledDatepicker: function (e) {
        if (!e) return !1;
        for (var t = 0; t < this._disabledInputs.length; t++)
          if (this._disabledInputs[t] == e) return !0;
        return !1;
      },
      _getInst: function (e) {
        try {
          return $.data(e, PROP_NAME);
        } catch (e) {
          throw "Missing instance data for this datepicker";
        }
      },
      _optionDatepicker: function (e, t, i) {
        var n = this._getInst(e);
        if (2 == arguments.length && "string" == typeof t)
          return "defaults" == t
            ? $.extend({}, $.datepicker._defaults)
            : n
              ? "all" == t
                ? $.extend({}, n.settings)
                : this._get(n, t)
              : null;
        var s = t || {};
        if (("string" == typeof t && ((s = {}), (s[t] = i)), n)) {
          this._curInst == n && this._hideDatepicker();
          var o = this._getDateDatepicker(e, !0),
            a = this._getMinMaxDate(n, "min"),
            r = this._getMinMaxDate(n, "max");
          (extendRemove(n.settings, s),
            null !== a &&
              s.dateFormat !== undefined &&
              s.minDate === undefined &&
              (n.settings.minDate = this._formatDate(n, a)),
            null !== r &&
              s.dateFormat !== undefined &&
              s.maxDate === undefined &&
              (n.settings.maxDate = this._formatDate(n, r)),
            this._attachments($(e), n),
            this._autoSize(n),
            this._setDate(n, o),
            this._updateAlternate(n),
            this._updateDatepicker(n));
        }
      },
      _changeDatepicker: function (e, t, i) {
        this._optionDatepicker(e, t, i);
      },
      _refreshDatepicker: function (e) {
        var t = this._getInst(e);
        t && this._updateDatepicker(t);
      },
      _setDateDatepicker: function (e, t) {
        var i = this._getInst(e);
        i &&
          (this._setDate(i, t),
          this._updateDatepicker(i),
          this._updateAlternate(i));
      },
      _getDateDatepicker: function (e, t) {
        var i = this._getInst(e);
        return (
          i && !i.inline && this._setDateFromField(i, t),
          i ? this._getDate(i) : null
        );
      },
      _doKeyDown: function (e) {
        var t = $.datepicker._getInst(e.target),
          i = !0,
          n = t.dpDiv.is(".ui-datepicker-rtl");
        if (((t._keyEvent = !0), $.datepicker._datepickerShowing))
          switch (e.keyCode) {
            case 9:
              ($.datepicker._hideDatepicker(), (i = !1));
              break;
            case 13:
              var s = $(
                "td." +
                  $.datepicker._dayOverClass +
                  ":not(." +
                  $.datepicker._currentClass +
                  ")",
                t.dpDiv,
              );
              s[0] &&
                $.datepicker._selectDay(
                  e.target,
                  t.selectedMonth,
                  t.selectedYear,
                  s[0],
                );
              var o = $.datepicker._get(t, "onSelect");
              if (o) {
                var a = $.datepicker._formatDate(t);
                o.apply(t.input ? t.input[0] : null, [a, t]);
              } else $.datepicker._hideDatepicker();
              return !1;
            case 27:
              $.datepicker._hideDatepicker();
              break;
            case 33:
              $.datepicker._adjustDate(
                e.target,
                e.ctrlKey
                  ? -$.datepicker._get(t, "stepBigMonths")
                  : -$.datepicker._get(t, "stepMonths"),
                "M",
              );
              break;
            case 34:
              $.datepicker._adjustDate(
                e.target,
                e.ctrlKey
                  ? +$.datepicker._get(t, "stepBigMonths")
                  : +$.datepicker._get(t, "stepMonths"),
                "M",
              );
              break;
            case 35:
              ((e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target),
                (i = e.ctrlKey || e.metaKey));
              break;
            case 36:
              ((e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target),
                (i = e.ctrlKey || e.metaKey));
              break;
            case 37:
              ((e.ctrlKey || e.metaKey) &&
                $.datepicker._adjustDate(e.target, n ? 1 : -1, "D"),
                (i = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  $.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey
                      ? -$.datepicker._get(t, "stepBigMonths")
                      : -$.datepicker._get(t, "stepMonths"),
                    "M",
                  ));
              break;
            case 38:
              ((e.ctrlKey || e.metaKey) &&
                $.datepicker._adjustDate(e.target, -7, "D"),
                (i = e.ctrlKey || e.metaKey));
              break;
            case 39:
              ((e.ctrlKey || e.metaKey) &&
                $.datepicker._adjustDate(e.target, n ? -1 : 1, "D"),
                (i = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  $.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey
                      ? +$.datepicker._get(t, "stepBigMonths")
                      : +$.datepicker._get(t, "stepMonths"),
                    "M",
                  ));
              break;
            case 40:
              ((e.ctrlKey || e.metaKey) &&
                $.datepicker._adjustDate(e.target, 7, "D"),
                (i = e.ctrlKey || e.metaKey));
              break;
            default:
              i = !1;
          }
        else
          36 == e.keyCode && e.ctrlKey
            ? $.datepicker._showDatepicker(this)
            : (i = !1);
        i && (e.preventDefault(), e.stopPropagation());
      },
      _doKeyPress: function (e) {
        var t = $.datepicker._getInst(e.target);
        if ($.datepicker._get(t, "constrainInput")) {
          var i = $.datepicker._possibleChars(
              $.datepicker._get(t, "dateFormat"),
            ),
            n = String.fromCharCode(
              e.charCode == undefined ? e.keyCode : e.charCode,
            );
          return e.ctrlKey || e.metaKey || n < " " || !i || i.indexOf(n) > -1;
        }
      },
      _doKeyUp: function (e) {
        var t = $.datepicker._getInst(e.target);
        if (t.input.val() != t.lastVal)
          try {
            $.datepicker.parseDate(
              $.datepicker._get(t, "dateFormat"),
              t.input ? t.input.val() : null,
              $.datepicker._getFormatConfig(t),
            ) &&
              ($.datepicker._setDateFromField(t),
              $.datepicker._updateAlternate(t),
              $.datepicker._updateDatepicker(t));
          } catch (e) {
            $.datepicker.log(e);
          }
        return !0;
      },
      _showDatepicker: function (e) {
        if (
          ((e = e.target || e),
          "input" != e.nodeName.toLowerCase() &&
            (e = $("input", e.parentNode)[0]),
          !$.datepicker._isDisabledDatepicker(e) &&
            $.datepicker._lastInput != e)
        ) {
          var t = $.datepicker._getInst(e);
          $.datepicker._curInst &&
            $.datepicker._curInst != t &&
            ($.datepicker._datepickerShowing &&
              $.datepicker._triggerOnClose($.datepicker._curInst),
            $.datepicker._curInst.dpDiv.stop(!0, !0));
          var i = $.datepicker._get(t, "beforeShow"),
            n = i ? i.apply(e, [e, t]) : {};
          if (!1 !== n) {
            (extendRemove(t.settings, n),
              (t.lastVal = null),
              ($.datepicker._lastInput = e),
              $.datepicker._setDateFromField(t),
              $.datepicker._inDialog && (e.value = ""),
              $.datepicker._pos ||
                (($.datepicker._pos = $.datepicker._findPos(e)),
                ($.datepicker._pos[1] += e.offsetHeight)));
            var s = !1;
            ($(e)
              .parents()
              .each(function () {
                return !(s |= "fixed" == $(this).css("position"));
              }),
              s &&
                $.browser.opera &&
                (($.datepicker._pos[0] -= document.documentElement.scrollLeft),
                ($.datepicker._pos[1] -= document.documentElement.scrollTop)));
            var o = { left: $.datepicker._pos[0], top: $.datepicker._pos[1] };
            if (
              (($.datepicker._pos = null),
              t.dpDiv.empty(),
              t.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px",
              }),
              $.datepicker._updateDatepicker(t),
              (o = $.datepicker._checkOffset(t, o, s)),
              t.dpDiv.css({
                position:
                  $.datepicker._inDialog && $.blockUI
                    ? "static"
                    : s
                      ? "fixed"
                      : "absolute",
                display: "none",
                left: o.left + "px",
                top: o.top + "px",
              }),
              !t.inline)
            ) {
              var a = $.datepicker._get(t, "showAnim"),
                r = $.datepicker._get(t, "duration"),
                l = function () {
                  var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                  if (e.length) {
                    var i = $.datepicker._getBorders(t.dpDiv);
                    e.css({
                      left: -i[0],
                      top: -i[1],
                      width: t.dpDiv.outerWidth(),
                      height: t.dpDiv.outerHeight(),
                    });
                  }
                };
              (t.dpDiv.zIndex($(e).zIndex() + 1),
                ($.datepicker._datepickerShowing = !0),
                $.effects && $.effects[a]
                  ? t.dpDiv.show(a, $.datepicker._get(t, "showOptions"), r, l)
                  : t.dpDiv[a || "show"](a ? r : null, l),
                (a && r) || l(),
                t.input.is(":visible") &&
                  !t.input.is(":disabled") &&
                  t.input.focus(),
                ($.datepicker._curInst = t));
            }
          }
        }
      },
      _updateDatepicker: function (e) {
        this.maxRows = 4;
        var t = $.datepicker._getBorders(e.dpDiv);
        ((instActive = e), e.dpDiv.empty().append(this._generateHTML(e)));
        var i = e.dpDiv.find("iframe.ui-datepicker-cover");
        (i.length &&
          i.css({
            left: -t[0],
            top: -t[1],
            width: e.dpDiv.outerWidth(),
            height: e.dpDiv.outerHeight(),
          }),
          e.dpDiv.find("." + this._dayOverClass + " a").mouseover());
        var n = this._getNumberOfMonths(e),
          s = n[1];
        if (
          (e.dpDiv
            .removeClass(
              "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4",
            )
            .width(""),
          s > 1 &&
            e.dpDiv
              .addClass("ui-datepicker-multi-" + s)
              .css("width", 17 * s + "em"),
          e.dpDiv[(1 != n[0] || 1 != n[1] ? "add" : "remove") + "Class"](
            "ui-datepicker-multi",
          ),
          e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
            "ui-datepicker-rtl",
          ),
          e == $.datepicker._curInst &&
            $.datepicker._datepickerShowing &&
            e.input &&
            e.input.is(":visible") &&
            !e.input.is(":disabled") &&
            e.input[0] != document.activeElement &&
            e.input.focus(),
          e.yearshtml)
        ) {
          var o = e.yearshtml;
          setTimeout(function () {
            (o === e.yearshtml &&
              e.yearshtml &&
              e.dpDiv
                .find("select.ui-datepicker-year:first")
                .replaceWith(e.yearshtml),
              (o = e.yearshtml = null));
          }, 0);
        }
      },
      _getBorders: function (e) {
        var t = function (e) {
          return { thin: 1, medium: 2, thick: 3 }[e] || e;
        };
        return [
          parseFloat(t(e.css("border-left-width"))),
          parseFloat(t(e.css("border-top-width"))),
        ];
      },
      _checkOffset: function (e, t, i) {
        var n = e.dpDiv.outerWidth(),
          s = e.dpDiv.outerHeight(),
          o = e.input ? e.input.outerWidth() : 0,
          a = e.input ? e.input.outerHeight() : 0,
          r = document.documentElement.clientWidth + $(document).scrollLeft(),
          l = document.documentElement.clientHeight + $(document).scrollTop();
        return (
          (t.left -= this._get(e, "isRTL") ? n - o : 0),
          (t.left -=
            i && t.left == e.input.offset().left
              ? $(document).scrollLeft()
              : 0),
          (t.top -=
            i && t.top == e.input.offset().top + a
              ? $(document).scrollTop()
              : 0),
          (t.left -= Math.min(
            t.left,
            t.left + n > r && r > n ? Math.abs(t.left + n - r) : 0,
          )),
          (t.top -= Math.min(
            t.top,
            t.top + s > l && l > s ? Math.abs(s + a) : 0,
          )),
          t
        );
      },
      _findPos: function (e) {
        for (
          var t = this._getInst(e), i = this._get(t, "isRTL");
          e &&
          ("hidden" == e.type || 1 != e.nodeType || $.expr.filters.hidden(e));
        )
          e = e[i ? "previousSibling" : "nextSibling"];
        var n = $(e).offset();
        return [n.left, n.top];
      },
      _triggerOnClose: function (e) {
        var t = this._get(e, "onClose");
        t &&
          t.apply(e.input ? e.input[0] : null, [
            e.input ? e.input.val() : "",
            e,
          ]);
      },
      _hideDatepicker: function (e) {
        var t = this._curInst;
        if (t && (!e || t == $.data(e, PROP_NAME)) && this._datepickerShowing) {
          var i = this._get(t, "showAnim"),
            n = this._get(t, "duration"),
            s = function () {
              ($.datepicker._tidyDialog(t), (this._curInst = null));
            };
          ($.effects && $.effects[i]
            ? t.dpDiv.hide(i, $.datepicker._get(t, "showOptions"), n, s)
            : t.dpDiv[
                "slideDown" == i
                  ? "slideUp"
                  : "fadeIn" == i
                    ? "fadeOut"
                    : "hide"
              ](i ? n : null, s),
            i || s(),
            $.datepicker._triggerOnClose(t),
            (this._datepickerShowing = !1),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px",
              }),
              $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))),
            (this._inDialog = !1));
        }
      },
      _tidyDialog: function (e) {
        e.dpDiv
          .removeClass(this._dialogClass)
          .unbind(".ui-datepicker-calendar");
      },
      _checkExternalClick: function (e) {
        if ($.datepicker._curInst) {
          var t = $(e.target);
          t[0].id == $.datepicker._mainDivId ||
            0 != t.parents("#" + $.datepicker._mainDivId).length ||
            t.hasClass($.datepicker.markerClassName) ||
            t.hasClass($.datepicker._triggerClass) ||
            !$.datepicker._datepickerShowing ||
            ($.datepicker._inDialog && $.blockUI) ||
            $.datepicker._hideDatepicker();
        }
      },
      _adjustDate: function (e, t, i) {
        var n = $(e),
          s = this._getInst(n[0]);
        this._isDisabledDatepicker(n[0]) ||
          (this._adjustInstDate(
            s,
            t + ("M" == i ? this._get(s, "showCurrentAtPos") : 0),
            i,
          ),
          this._updateDatepicker(s));
      },
      _gotoToday: function (e) {
        var t = $(e),
          i = this._getInst(t[0]);
        if (this._get(i, "gotoCurrent") && i.currentDay)
          ((i.selectedDay = i.currentDay),
            (i.drawMonth = i.selectedMonth = i.currentMonth),
            (i.drawYear = i.selectedYear = i.currentYear));
        else {
          var n = new Date();
          ((i.selectedDay = n.getDate()),
            (i.drawMonth = i.selectedMonth = n.getMonth()),
            (i.drawYear = i.selectedYear = n.getFullYear()));
        }
        (this._notifyChange(i), this._adjustDate(t));
      },
      _selectMonthYear: function (e, t, i) {
        var n = $(e),
          s = this._getInst(n[0]);
        ((s["selected" + ("M" == i ? "Month" : "Year")] = s[
          "draw" + ("M" == i ? "Month" : "Year")
        ] =
          parseInt(t.options[t.selectedIndex].value, 10)),
          this._notifyChange(s),
          this._adjustDate(n));
      },
      _selectDay: function (e, t, i, n) {
        var s = $(e);
        if (
          !$(n).hasClass(this._unselectableClass) &&
          !this._isDisabledDatepicker(s[0])
        ) {
          var o = this._getInst(s[0]);
          ((o.selectedDay = o.currentDay = $("a", n).html()),
            (o.selectedMonth = o.currentMonth = t),
            (o.selectedYear = o.currentYear = i),
            this._selectDate(
              e,
              this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear),
            ));
        }
      },
      _clearDate: function (e) {
        var t = $(e);
        this._getInst(t[0]);
        this._selectDate(t, "");
      },
      _selectDate: function (e, t) {
        var i = $(e),
          n = this._getInst(i[0]);
        ((t = null != t ? t : this._formatDate(n)),
          n.input && n.input.val(t),
          this._updateAlternate(n));
        var s = this._get(n, "onSelect");
        (s
          ? s.apply(n.input ? n.input[0] : null, [t, n])
          : n.input && n.input.trigger("change"),
          n.inline
            ? this._updateDatepicker(n)
            : (this._hideDatepicker(),
              (this._lastInput = n.input[0]),
              "object" != typeof n.input[0] && n.input.focus(),
              (this._lastInput = null)));
      },
      _updateAlternate: function (e) {
        var t = this._get(e, "altField");
        if (t) {
          var i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
            n = this._getDate(e),
            s = this.formatDate(i, n, this._getFormatConfig(e));
          $(t).each(function () {
            $(this).val(s);
          });
        }
      },
      noWeekends: function (e) {
        var t = e.getDay();
        return [t > 0 && t < 6, ""];
      },
      iso8601Week: function (e) {
        var t = new Date(e.getTime());
        t.setDate(t.getDate() + 4 - (t.getDay() || 7));
        var i = t.getTime();
        return (
          t.setMonth(0),
          t.setDate(1),
          Math.floor(Math.round((i - t) / 864e5) / 7) + 1
        );
      },
      parseDate: function (e, t, i) {
        if (null == e || null == t) throw "Invalid arguments";
        if ("" == (t = "object" == typeof t ? t.toString() : t + ""))
          return null;
        var n =
          (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
        n =
          "string" != typeof n
            ? n
            : (new Date().getFullYear() % 100) + parseInt(n, 10);
        for (
          var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
            o = (i ? i.dayNames : null) || this._defaults.dayNames,
            a =
              (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
            r = (i ? i.monthNames : null) || this._defaults.monthNames,
            l = -1,
            c = -1,
            u = -1,
            h = -1,
            d = !1,
            p = function (t) {
              var i = y + 1 < e.length && e.charAt(y + 1) == t;
              return (i && y++, i);
            },
            f = function (e) {
              var i = p(e),
                n =
                  "@" == e
                    ? 14
                    : "!" == e
                      ? 20
                      : "y" == e && i
                        ? 4
                        : "o" == e
                          ? 3
                          : 2,
                s = new RegExp("^\\d{1," + n + "}"),
                o = t.substring(v).match(s);
              if (!o) throw "Missing number at position " + v;
              return ((v += o[0].length), parseInt(o[0], 10));
            },
            m = function (e, i, n) {
              var s = $.map(p(e) ? n : i, function (e, t) {
                  return [[t, e]];
                }).sort(function (e, t) {
                  return -(e[1].length - t[1].length);
                }),
                o = -1;
              if (
                ($.each(s, function (e, i) {
                  var n = i[1];
                  if (t.substr(v, n.length).toLowerCase() == n.toLowerCase())
                    return ((o = i[0]), (v += n.length), !1);
                }),
                -1 != o)
              )
                return o + 1;
              throw "Unknown name at position " + v;
            },
            g = function () {
              if (t.charAt(v) != e.charAt(y))
                throw "Unexpected literal at position " + v;
              v++;
            },
            v = 0,
            y = 0;
          y < e.length;
          y++
        )
          if (d) "'" != e.charAt(y) || p("'") ? g() : (d = !1);
          else
            switch (e.charAt(y)) {
              case "d":
                u = f("d");
                break;
              case "D":
                m("D", s, o);
                break;
              case "o":
                h = f("o");
                break;
              case "m":
                c = f("m");
                break;
              case "M":
                c = m("M", a, r);
                break;
              case "y":
                l = f("y");
                break;
              case "@":
                var b = new Date(f("@"));
                ((l = b.getFullYear()),
                  (c = b.getMonth() + 1),
                  (u = b.getDate()));
                break;
              case "!":
                var b = new Date((f("!") - this._ticksTo1970) / 1e4);
                ((l = b.getFullYear()),
                  (c = b.getMonth() + 1),
                  (u = b.getDate()));
                break;
              case "'":
                p("'") ? g() : (d = !0);
                break;
              default:
                g();
            }
        if (v < t.length)
          throw "Extra/unparsed characters found in date: " + t.substring(v);
        if (
          (-1 == l
            ? (l = new Date().getFullYear())
            : l < 100 &&
              (l +=
                new Date().getFullYear() -
                (new Date().getFullYear() % 100) +
                (l <= n ? 0 : -100)),
          h > -1)
        )
          for (c = 1, u = h; ; ) {
            var w = this._getDaysInMonth(l, c - 1);
            if (u <= w) break;
            (c++, (u -= w));
          }
        var b = this._daylightSavingAdjust(new Date(l, c - 1, u));
        if (b.getFullYear() != l || b.getMonth() + 1 != c || b.getDate() != u)
          throw "Invalid date";
        return b;
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970:
        24 *
        (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
        60 *
        60 *
        1e7,
      formatDate: function (e, t, i) {
        if (!t) return "";
        var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          s = (i ? i.dayNames : null) || this._defaults.dayNames,
          o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          a = (i ? i.monthNames : null) || this._defaults.monthNames,
          r = function (t) {
            var i = d + 1 < e.length && e.charAt(d + 1) == t;
            return (i && d++, i);
          },
          l = function (e, t, i) {
            var n = "" + t;
            if (r(e)) for (; n.length < i; ) n = "0" + n;
            return n;
          },
          c = function (e, t, i, n) {
            return r(e) ? n[t] : i[t];
          },
          u = "",
          h = !1;
        if (t)
          for (var d = 0; d < e.length; d++)
            if (h) "'" != e.charAt(d) || r("'") ? (u += e.charAt(d)) : (h = !1);
            else
              switch (e.charAt(d)) {
                case "d":
                  u += l("d", t.getDate(), 2);
                  break;
                case "D":
                  u += c("D", t.getDay(), n, s);
                  break;
                case "o":
                  u += l(
                    "o",
                    Math.round(
                      (new Date(
                        t.getFullYear(),
                        t.getMonth(),
                        t.getDate(),
                      ).getTime() -
                        new Date(t.getFullYear(), 0, 0).getTime()) /
                        864e5,
                    ),
                    3,
                  );
                  break;
                case "m":
                  u += l("m", t.getMonth() + 1, 2);
                  break;
                case "M":
                  u += c("M", t.getMonth(), o, a);
                  break;
                case "y":
                  u += r("y")
                    ? t.getFullYear()
                    : (t.getYear() % 100 < 10 ? "0" : "") + (t.getYear() % 100);
                  break;
                case "@":
                  u += t.getTime();
                  break;
                case "!":
                  u += 1e4 * t.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  r("'") ? (u += "'") : (h = !0);
                  break;
                default:
                  u += e.charAt(d);
              }
        return u;
      },
      _possibleChars: function (e) {
        for (
          var t = "",
            i = !1,
            n = function (t) {
              var i = s + 1 < e.length && e.charAt(s + 1) == t;
              return (i && s++, i);
            },
            s = 0;
          s < e.length;
          s++
        )
          if (i) "'" != e.charAt(s) || n("'") ? (t += e.charAt(s)) : (i = !1);
          else
            switch (e.charAt(s)) {
              case "d":
              case "m":
              case "y":
              case "@":
                t += "0123456789";
                break;
              case "D":
              case "M":
                return null;
              case "'":
                n("'") ? (t += "'") : (i = !0);
                break;
              default:
                t += e.charAt(s);
            }
        return t;
      },
      _get: function (e, t) {
        return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t];
      },
      _setDateFromField: function (e, t) {
        if (e.input.val() != e.lastVal) {
          var i,
            n,
            s = this._get(e, "dateFormat"),
            o = (e.lastVal = e.input ? e.input.val() : null);
          i = n = this._getDefaultDate(e);
          var a = this._getFormatConfig(e);
          try {
            i = this.parseDate(s, o, a) || n;
          } catch (e) {
            (this.log(e), (o = t ? "" : o));
          }
          ((e.selectedDay = i.getDate()),
            (e.drawMonth = e.selectedMonth = i.getMonth()),
            (e.drawYear = e.selectedYear = i.getFullYear()),
            (e.currentDay = o ? i.getDate() : 0),
            (e.currentMonth = o ? i.getMonth() : 0),
            (e.currentYear = o ? i.getFullYear() : 0),
            this._adjustInstDate(e));
        }
      },
      _getDefaultDate: function (e) {
        return this._restrictMinMax(
          e,
          this._determineDate(e, this._get(e, "defaultDate"), new Date()),
        );
      },
      _determineDate: function (e, t, i) {
        var n = function (e) {
            var t = new Date();
            return (t.setDate(t.getDate() + e), t);
          },
          s = function (t) {
            try {
              return $.datepicker.parseDate(
                $.datepicker._get(e, "dateFormat"),
                t,
                $.datepicker._getFormatConfig(e),
              );
            } catch (e) {}
            for (
              var i =
                  (t.toLowerCase().match(/^c/)
                    ? $.datepicker._getDate(e)
                    : null) || new Date(),
                n = i.getFullYear(),
                s = i.getMonth(),
                o = i.getDate(),
                a = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                r = a.exec(t);
              r;
            ) {
              switch (r[2] || "d") {
                case "d":
                case "D":
                  o += parseInt(r[1], 10);
                  break;
                case "w":
                case "W":
                  o += 7 * parseInt(r[1], 10);
                  break;
                case "m":
                case "M":
                  ((s += parseInt(r[1], 10)),
                    (o = Math.min(o, $.datepicker._getDaysInMonth(n, s))));
                  break;
                case "y":
                case "Y":
                  ((n += parseInt(r[1], 10)),
                    (o = Math.min(o, $.datepicker._getDaysInMonth(n, s))));
              }
              r = a.exec(t);
            }
            return new Date(n, s, o);
          },
          o =
            null == t || "" === t
              ? i
              : "string" == typeof t
                ? s(t)
                : "number" == typeof t
                  ? isNaN(t)
                    ? i
                    : n(t)
                  : new Date(t.getTime());
        return (
          (o = o && "Invalid Date" == o.toString() ? i : o),
          o &&
            (o.setHours(0),
            o.setMinutes(0),
            o.setSeconds(0),
            o.setMilliseconds(0)),
          this._daylightSavingAdjust(o)
        );
      },
      _daylightSavingAdjust: function (e) {
        return e
          ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e)
          : null;
      },
      _setDate: function (e, t, i) {
        var n = !t,
          s = e.selectedMonth,
          o = e.selectedYear,
          a = this._restrictMinMax(e, this._determineDate(e, t, new Date()));
        ((e.selectedDay = e.currentDay = a.getDate()),
          (e.drawMonth = e.selectedMonth = e.currentMonth = a.getMonth()),
          (e.drawYear = e.selectedYear = e.currentYear = a.getFullYear()),
          (s == e.selectedMonth && o == e.selectedYear) ||
            i ||
            this._notifyChange(e),
          this._adjustInstDate(e),
          e.input && e.input.val(n ? "" : this._formatDate(e)));
      },
      _getDate: function (e) {
        return !e.currentYear || (e.input && "" == e.input.val())
          ? null
          : this._daylightSavingAdjust(
              new Date(e.currentYear, e.currentMonth, e.currentDay),
            );
      },
      _generateHTML: function (e) {
        var t = new Date();
        t = this._daylightSavingAdjust(
          new Date(t.getFullYear(), t.getMonth(), t.getDate()),
        );
        var i = this._get(e, "isRTL"),
          n = this._get(e, "showButtonPanel"),
          s = this._get(e, "hideIfNoPrevNext"),
          o = this._get(e, "navigationAsDateFormat"),
          a = this._getNumberOfMonths(e),
          r = this._get(e, "showCurrentAtPos"),
          l = this._get(e, "stepMonths"),
          c = 1 != a[0] || 1 != a[1],
          u = this._daylightSavingAdjust(
            e.currentDay
              ? new Date(e.currentYear, e.currentMonth, e.currentDay)
              : new Date(9999, 9, 9),
          ),
          h = this._getMinMaxDate(e, "min"),
          d = this._getMinMaxDate(e, "max"),
          p = e.drawMonth - r,
          f = e.drawYear;
        if ((p < 0 && ((p += 12), f--), d)) {
          var m = this._daylightSavingAdjust(
            new Date(
              d.getFullYear(),
              d.getMonth() - a[0] * a[1] + 1,
              d.getDate(),
            ),
          );
          for (
            m = h && m < h ? h : m;
            this._daylightSavingAdjust(new Date(f, p, 1)) > m;
          )
            --p < 0 && ((p = 11), f--);
        }
        ((e.drawMonth = p), (e.drawYear = f));
        var g = this._get(e, "prevText");
        g = o
          ? this.formatDate(
              g,
              this._daylightSavingAdjust(new Date(f, p - l, 1)),
              this._getFormatConfig(e),
            )
          : g;
        var v = this._canAdjustMonth(e, -1, f, p)
            ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' +
              dpuuid +
              ".datepicker._adjustDate('#" +
              e.id +
              "', -" +
              l +
              ", 'M');\" title=\"" +
              g +
              '"><span class="ui-icon ui-icon-circle-triangle-' +
              (i ? "e" : "w") +
              '">' +
              g +
              "</span></a>"
            : s
              ? ""
              : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' +
                g +
                '"><span class="ui-icon ui-icon-circle-triangle-' +
                (i ? "e" : "w") +
                '">' +
                g +
                "</span></a>",
          y = this._get(e, "nextText");
        y = o
          ? this.formatDate(
              y,
              this._daylightSavingAdjust(new Date(f, p + l, 1)),
              this._getFormatConfig(e),
            )
          : y;
        var b = this._canAdjustMonth(e, 1, f, p)
            ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' +
              dpuuid +
              ".datepicker._adjustDate('#" +
              e.id +
              "', +" +
              l +
              ", 'M');\" title=\"" +
              y +
              '"><span class="ui-icon ui-icon-circle-triangle-' +
              (i ? "w" : "e") +
              '">' +
              y +
              "</span></a>"
            : s
              ? ""
              : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' +
                y +
                '"><span class="ui-icon ui-icon-circle-triangle-' +
                (i ? "w" : "e") +
                '">' +
                y +
                "</span></a>",
          w = this._get(e, "currentText"),
          x = this._get(e, "gotoCurrent") && e.currentDay ? u : t;
        w = o ? this.formatDate(w, x, this._getFormatConfig(e)) : w;
        var _ = e.inline
            ? ""
            : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' +
              dpuuid +
              '.datepicker._hideDatepicker();">' +
              this._get(e, "closeText") +
              "</button>",
          k = n
            ? '<div class="ui-datepicker-buttonpane ui-widget-content">' +
              (i ? _ : "") +
              (this._isInRange(e, x)
                ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' +
                  dpuuid +
                  ".datepicker._gotoToday('#" +
                  e.id +
                  "');\">" +
                  w +
                  "</button>"
                : "") +
              (i ? "" : _) +
              "</div>"
            : "",
          C = parseInt(this._get(e, "firstDay"), 10);
        C = isNaN(C) ? 0 : C;
        for (
          var T = this._get(e, "showWeek"),
            S = this._get(e, "dayNames"),
            D = (this._get(e, "dayNamesShort"), this._get(e, "dayNamesMin")),
            E = this._get(e, "monthNames"),
            I = this._get(e, "monthNamesShort"),
            N = this._get(e, "beforeShowDay"),
            A = this._get(e, "showOtherMonths"),
            P = this._get(e, "selectOtherMonths"),
            M =
              (this._get(e, "calculateWeek") || this.iso8601Week,
              this._getDefaultDate(e)),
            F = "",
            O = 0;
          O < a[0];
          O++
        ) {
          var H = "";
          this.maxRows = 4;
          for (var j = 0; j < a[1]; j++) {
            var L = this._daylightSavingAdjust(new Date(f, p, e.selectedDay)),
              z = " ui-corner-all",
              R = "";
            if (c) {
              if (((R += '<div class="ui-datepicker-group'), a[1] > 1))
                switch (j) {
                  case 0:
                    ((R += " ui-datepicker-group-first"),
                      (z = " ui-corner-" + (i ? "right" : "left")));
                    break;
                  case a[1] - 1:
                    ((R += " ui-datepicker-group-last"),
                      (z = " ui-corner-" + (i ? "left" : "right")));
                    break;
                  default:
                    ((R += " ui-datepicker-group-middle"), (z = ""));
                }
              R += '">';
            }
            R +=
              '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' +
              z +
              '">' +
              (/all|left/.test(z) && 0 == O ? (i ? b : v) : "") +
              (/all|right/.test(z) && 0 == O ? (i ? v : b) : "") +
              this._generateMonthYearHeader(
                e,
                p,
                f,
                h,
                d,
                O > 0 || j > 0,
                E,
                I,
              ) +
              '</div><table class="ui-datepicker-calendar"><thead><tr>';
            for (
              var W = T
                  ? '<th class="ui-datepicker-week-col">' +
                    this._get(e, "weekHeader") +
                    "</th>"
                  : "",
                B = 0;
              B < 7;
              B++
            ) {
              var q = (B + C) % 7;
              W +=
                "<th" +
                ((B + C + 6) % 7 >= 5
                  ? ' class="ui-datepicker-week-end"'
                  : "") +
                '><span title="' +
                S[q] +
                '">' +
                D[q] +
                "</span></th>";
            }
            R += W + "</tr></thead><tbody>";
            var K = this._getDaysInMonth(f, p);
            f == e.selectedYear &&
              p == e.selectedMonth &&
              (e.selectedDay = Math.min(e.selectedDay, K));
            var Y = (this._getFirstDayOfMonth(f, p) - C + 7) % 7,
              U = Math.ceil((Y + K) / 7),
              X = c && this.maxRows > U ? this.maxRows : U;
            this.maxRows = X;
            for (
              var V = this._daylightSavingAdjust(new Date(f, p, 1 - Y)), Q = 0;
              Q < X;
              Q++
            ) {
              R += "<tr>";
              for (
                var G = T
                    ? '<td class="ui-datepicker-week-col">' +
                      this._get(e, "calculateWeek")(V) +
                      "</td>"
                    : "",
                  B = 0;
                B < 7;
                B++
              ) {
                var J = N
                    ? N.apply(e.input ? e.input[0] : null, [V])
                    : [!0, ""],
                  Z = V.getMonth() != p,
                  ee = (Z && !P) || !J[0] || (h && V < h) || (d && V > d);
                ((G +=
                  '<td class="' +
                  ((B + C + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                  (Z ? " ui-datepicker-other-month" : "") +
                  ((V.getTime() == L.getTime() &&
                    p == e.selectedMonth &&
                    e._keyEvent) ||
                  (M.getTime() == V.getTime() && M.getTime() == L.getTime())
                    ? " " + this._dayOverClass
                    : "") +
                  (ee
                    ? " " + this._unselectableClass + " ui-state-disabled"
                    : "") +
                  (Z && !A
                    ? ""
                    : " " +
                      J[1] +
                      (V.getTime() == u.getTime()
                        ? " " + this._currentClass
                        : "") +
                      (V.getTime() == t.getTime()
                        ? " ui-datepicker-today"
                        : "")) +
                  '"' +
                  ((Z && !A) || !J[2] ? "" : ' title="' + J[2] + '"') +
                  (ee
                    ? ""
                    : ' onclick="DP_jQuery_' +
                      dpuuid +
                      ".datepicker._selectDay('#" +
                      e.id +
                      "'," +
                      V.getMonth() +
                      "," +
                      V.getFullYear() +
                      ', this);return false;"') +
                  ">" +
                  (Z && !A
                    ? "&#xa0;"
                    : ee
                      ? '<span class="ui-state-default">' +
                        V.getDate() +
                        "</span>"
                      : '<a class="ui-state-default' +
                        (V.getTime() == t.getTime()
                          ? " ui-state-highlight"
                          : "") +
                        (V.getTime() == u.getTime() ? " ui-state-active" : "") +
                        (Z ? " ui-priority-secondary" : "") +
                        '" href="#">' +
                        V.getDate() +
                        "</a>") +
                  "</td>"),
                  V.setDate(V.getDate() + 1),
                  (V = this._daylightSavingAdjust(V)));
              }
              R += G + "</tr>";
            }
            (p++,
              p > 11 && ((p = 0), f++),
              (R +=
                "</tbody></table>" +
                (c
                  ? "</div>" +
                    (a[0] > 0 && j == a[1] - 1
                      ? '<div class="ui-datepicker-row-break"></div>'
                      : "")
                  : "")),
              (H += R));
          }
          F += H;
        }
        return (
          (F +=
            k +
            ($.browser.msie && parseInt($.browser.version, 10) < 7 && !e.inline
              ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>'
              : "")),
          (e._keyEvent = !1),
          F
        );
      },
      _generateMonthYearHeader: function (e, t, i, n, s, o, a, r) {
        var l = this._get(e, "changeMonth"),
          c = this._get(e, "changeYear"),
          u = this._get(e, "showMonthAfterYear"),
          h = '<div class="ui-datepicker-title">',
          d = "";
        if (o || !l)
          d += '<span class="ui-datepicker-month">' + a[t] + "</span>";
        else {
          var p = n && n.getFullYear() == i,
            f = s && s.getFullYear() == i;
          d +=
            '<select class="ui-datepicker-month" onchange="DP_jQuery_' +
            dpuuid +
            ".datepicker._selectMonthYear('#" +
            e.id +
            "', this, 'M');\" >";
          for (var m = 0; m < 12; m++)
            (!p || m >= n.getMonth()) &&
              (!f || m <= s.getMonth()) &&
              (d +=
                '<option value="' +
                m +
                '"' +
                (m == t ? ' selected="selected"' : "") +
                ">" +
                r[m] +
                "</option>");
          d += "</select>";
        }
        if ((u || (h += d + (!o && l && c ? "" : "&#xa0;")), !e.yearshtml))
          if (((e.yearshtml = ""), o || !c))
            h += '<span class="ui-datepicker-year">' + i + "</span>";
          else {
            var g = this._get(e, "yearRange").split(":"),
              v = new Date().getFullYear(),
              y = function (e) {
                var t = e.match(/c[+-].*/)
                  ? i + parseInt(e.substring(1), 10)
                  : e.match(/[+-].*/)
                    ? v + parseInt(e, 10)
                    : parseInt(e, 10);
                return isNaN(t) ? v : t;
              },
              b = y(g[0]),
              w = Math.max(b, y(g[1] || ""));
            for (
              b = n ? Math.max(b, n.getFullYear()) : b,
                w = s ? Math.min(w, s.getFullYear()) : w,
                e.yearshtml +=
                  '<select class="ui-datepicker-year" onchange="DP_jQuery_' +
                  dpuuid +
                  ".datepicker._selectMonthYear('#" +
                  e.id +
                  "', this, 'Y');\" >";
              b <= w;
              b++
            )
              e.yearshtml +=
                '<option value="' +
                b +
                '"' +
                (b == i ? ' selected="selected"' : "") +
                ">" +
                b +
                "</option>";
            ((e.yearshtml += "</select>"),
              (h += e.yearshtml),
              (e.yearshtml = null));
          }
        return (
          (h += this._get(e, "yearSuffix")),
          u && (h += (!o && l && c ? "" : "&#xa0;") + d),
          (h += "</div>")
        );
      },
      _adjustInstDate: function (e, t, i) {
        var n = e.drawYear + ("Y" == i ? t : 0),
          s = e.drawMonth + ("M" == i ? t : 0),
          o =
            Math.min(e.selectedDay, this._getDaysInMonth(n, s)) +
            ("D" == i ? t : 0),
          a = this._restrictMinMax(
            e,
            this._daylightSavingAdjust(new Date(n, s, o)),
          );
        ((e.selectedDay = a.getDate()),
          (e.drawMonth = e.selectedMonth = a.getMonth()),
          (e.drawYear = e.selectedYear = a.getFullYear()),
          ("M" != i && "Y" != i) || this._notifyChange(e));
      },
      _restrictMinMax: function (e, t) {
        var i = this._getMinMaxDate(e, "min"),
          n = this._getMinMaxDate(e, "max"),
          s = i && t < i ? i : t;
        return (s = n && s > n ? n : s);
      },
      _notifyChange: function (e) {
        var t = this._get(e, "onChangeMonthYear");
        t &&
          t.apply(e.input ? e.input[0] : null, [
            e.selectedYear,
            e.selectedMonth + 1,
            e,
          ]);
      },
      _getNumberOfMonths: function (e) {
        var t = this._get(e, "numberOfMonths");
        return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t;
      },
      _getMinMaxDate: function (e, t) {
        return this._determineDate(e, this._get(e, t + "Date"), null);
      },
      _getDaysInMonth: function (e, t) {
        return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
      },
      _getFirstDayOfMonth: function (e, t) {
        return new Date(e, t, 1).getDay();
      },
      _canAdjustMonth: function (e, t, i, n) {
        var s = this._getNumberOfMonths(e),
          o = this._daylightSavingAdjust(
            new Date(i, n + (t < 0 ? t : s[0] * s[1]), 1),
          );
        return (
          t < 0 &&
            o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
          this._isInRange(e, o)
        );
      },
      _isInRange: function (e, t) {
        var i = this._getMinMaxDate(e, "min"),
          n = this._getMinMaxDate(e, "max");
        return (
          (!i || t.getTime() >= i.getTime()) &&
          (!n || t.getTime() <= n.getTime())
        );
      },
      _getFormatConfig: function (e) {
        var t = this._get(e, "shortYearCutoff");
        return (
          (t =
            "string" != typeof t
              ? t
              : (new Date().getFullYear() % 100) + parseInt(t, 10)),
          {
            shortYearCutoff: t,
            dayNamesShort: this._get(e, "dayNamesShort"),
            dayNames: this._get(e, "dayNames"),
            monthNamesShort: this._get(e, "monthNamesShort"),
            monthNames: this._get(e, "monthNames"),
          }
        );
      },
      _formatDate: function (e, t, i, n) {
        t ||
          ((e.currentDay = e.selectedDay),
          (e.currentMonth = e.selectedMonth),
          (e.currentYear = e.selectedYear));
        var s = t
          ? "object" == typeof t
            ? t
            : this._daylightSavingAdjust(new Date(n, i, t))
          : this._daylightSavingAdjust(
              new Date(e.currentYear, e.currentMonth, e.currentDay),
            );
        return this.formatDate(
          this._get(e, "dateFormat"),
          s,
          this._getFormatConfig(e),
        );
      },
    }),
      ($.fn.datepicker = function (e) {
        if (!this.length) return this;
        $.datepicker.initialized ||
          ($(document)
            .mousedown($.datepicker._checkExternalClick)
            .find("body")
            .append($.datepicker.dpDiv),
          ($.datepicker.initialized = !0));
        var t = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e ||
          ("isDisabled" != e && "getDate" != e && "widget" != e)
          ? "option" == e &&
            2 == arguments.length &&
            "string" == typeof arguments[1]
            ? $.datepicker["_" + e + "Datepicker"].apply(
                $.datepicker,
                [this[0]].concat(t),
              )
            : this.each(function () {
                "string" == typeof e
                  ? $.datepicker["_" + e + "Datepicker"].apply(
                      $.datepicker,
                      [this].concat(t),
                    )
                  : $.datepicker._attachDatepicker(this, e);
              })
          : $.datepicker["_" + e + "Datepicker"].apply(
              $.datepicker,
              [this[0]].concat(t),
            );
      }),
      ($.datepicker = new Datepicker()),
      ($.datepicker.initialized = !1),
      ($.datepicker.uuid = new Date().getTime()),
      ($.datepicker.version = "1.8.16"),
      (window["DP_jQuery_" + dpuuid] = $));
  })(jQuery) /*
   * jQuery UI Progressbar 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Progressbar
   *
   * Depends:
   *   jquery.ui.core.js
   *   jquery.ui.widget.js
   */,
  (function (e, t) {
    (e.widget("ui.progressbar", {
      options: { value: 0, max: 100 },
      min: 0,
      _create: function () {
        (this.element
          .addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all")
          .attr({
            role: "progressbar",
            "aria-valuemin": this.min,
            "aria-valuemax": this.options.max,
            "aria-valuenow": this._value(),
          }),
          (this.valueDiv = e(
            "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>",
          ).appendTo(this.element)),
          (this.oldValue = this._value()),
          this._refreshValue());
      },
      destroy: function () {
        (this.element
          .removeClass(
            "ui-progressbar ui-widget ui-widget-content ui-corner-all",
          )
          .removeAttr("role")
          .removeAttr("aria-valuemin")
          .removeAttr("aria-valuemax")
          .removeAttr("aria-valuenow"),
          this.valueDiv.remove(),
          e.Widget.prototype.destroy.apply(this, arguments));
      },
      value: function (e) {
        return e === t ? this._value() : (this._setOption("value", e), this);
      },
      _setOption: function (t, i) {
        ("value" === t &&
          ((this.options.value = i),
          this._refreshValue(),
          this._value() === this.options.max && this._trigger("complete")),
          e.Widget.prototype._setOption.apply(this, arguments));
      },
      _value: function () {
        var e = this.options.value;
        return (
          "number" != typeof e && (e = 0),
          Math.min(this.options.max, Math.max(this.min, e))
        );
      },
      _percentage: function () {
        return (100 * this._value()) / this.options.max;
      },
      _refreshValue: function () {
        var e = this.value(),
          t = this._percentage();
        (this.oldValue !== e && ((this.oldValue = e), this._trigger("change")),
          this.valueDiv
            .toggle(e > this.min)
            .toggleClass("ui-corner-right", e === this.options.max)
            .width(t.toFixed(0) + "%"),
          this.element.attr("aria-valuenow", e));
      },
    }),
      e.extend(e.ui.progressbar, { version: "1.8.16" }));
  })(jQuery),
  jQuery.effects ||
    (function (e, t) {
      function i(t) {
        var i;
        return t && t.constructor == Array && 3 == t.length
          ? t
          : (i =
                /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(
                  t,
                ))
            ? [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10)]
            : (i =
                  /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(
                    t,
                  ))
              ? [
                  2.55 * parseFloat(i[1]),
                  2.55 * parseFloat(i[2]),
                  2.55 * parseFloat(i[3]),
                ]
              : (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(
                    t,
                  ))
                ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16)]
                : (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t))
                  ? [
                      parseInt(i[1] + i[1], 16),
                      parseInt(i[2] + i[2], 16),
                      parseInt(i[3] + i[3], 16),
                    ]
                  : (i = /rgba\(0, 0, 0, 0\)/.exec(t))
                    ? c.transparent
                    : c[e.trim(t).toLowerCase()];
      }
      function n(t, n) {
        var s;
        do {
          if (
            ("" != (s = e.curCSS(t, n)) && "transparent" != s) ||
            e.nodeName(t, "body")
          )
            break;
          n = "backgroundColor";
        } while ((t = t.parentNode));
        return i(s);
      }
      function s() {
        var e,
          t,
          i = document.defaultView
            ? document.defaultView.getComputedStyle(this, null)
            : this.currentStyle,
          n = {};
        if (i && i.length && i[0] && i[i[0]])
          for (var s = i.length; s--; )
            ((e = i[s]),
              "string" == typeof i[e] &&
                ((t = e.replace(/\-(\w)/g, function (e, t) {
                  return t.toUpperCase();
                })),
                (n[t] = i[e])));
        else for (e in i) "string" == typeof i[e] && (n[e] = i[e]);
        return n;
      }
      function o(t) {
        var i, n;
        for (i in t)
          (null == (n = t[i]) ||
            e.isFunction(n) ||
            i in h ||
            /scrollbar/.test(i) ||
            (!/color/i.test(i) && isNaN(parseFloat(n)))) &&
            delete t[i];
        return t;
      }
      function a(e, t) {
        var i,
          n = { _: 0 };
        for (i in t) e[i] != t[i] && (n[i] = t[i]);
        return n;
      }
      function r(t, i, n, s) {
        return (
          "object" == typeof t &&
            ((s = i), (n = null), (i = t), (t = i.effect)),
          e.isFunction(i) && ((s = i), (n = null), (i = {})),
          ("number" == typeof i || e.fx.speeds[i]) &&
            ((s = n), (n = i), (i = {})),
          e.isFunction(n) && ((s = n), (n = null)),
          (i = i || {}),
          (n = n || i.duration),
          (n = e.fx.off
            ? 0
            : "number" == typeof n
              ? n
              : n in e.fx.speeds
                ? e.fx.speeds[n]
                : e.fx.speeds._default),
          (s = s || i.complete),
          [t, i, n, s]
        );
      }
      function l(t) {
        return (
          !(t && "number" != typeof t && !e.fx.speeds[t]) ||
          ("string" == typeof t && !e.effects[t])
        );
      }
      ((e.effects = {}),
        e.each(
          [
            "backgroundColor",
            "borderBottomColor",
            "borderLeftColor",
            "borderRightColor",
            "borderTopColor",
            "borderColor",
            "color",
            "outlineColor",
          ],
          function (t, s) {
            e.fx.step[s] = function (e) {
              (e.colorInit ||
                ((e.start = n(e.elem, s)),
                (e.end = i(e.end)),
                (e.colorInit = !0)),
                (e.elem.style[s] =
                  "rgb(" +
                  Math.max(
                    Math.min(
                      parseInt(
                        e.pos * (e.end[0] - e.start[0]) + e.start[0],
                        10,
                      ),
                      255,
                    ),
                    0,
                  ) +
                  "," +
                  Math.max(
                    Math.min(
                      parseInt(
                        e.pos * (e.end[1] - e.start[1]) + e.start[1],
                        10,
                      ),
                      255,
                    ),
                    0,
                  ) +
                  "," +
                  Math.max(
                    Math.min(
                      parseInt(
                        e.pos * (e.end[2] - e.start[2]) + e.start[2],
                        10,
                      ),
                      255,
                    ),
                    0,
                  ) +
                  ")"));
            };
          },
        ));
      var c = {
          aqua: [0, 255, 255],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          black: [0, 0, 0],
          blue: [0, 0, 255],
          brown: [165, 42, 42],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgrey: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkviolet: [148, 0, 211],
          fuchsia: [255, 0, 255],
          gold: [255, 215, 0],
          green: [0, 128, 0],
          indigo: [75, 0, 130],
          khaki: [240, 230, 140],
          lightblue: [173, 216, 230],
          lightcyan: [224, 255, 255],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          navy: [0, 0, 128],
          olive: [128, 128, 0],
          orange: [255, 165, 0],
          pink: [255, 192, 203],
          purple: [128, 0, 128],
          violet: [128, 0, 128],
          red: [255, 0, 0],
          silver: [192, 192, 192],
          white: [255, 255, 255],
          yellow: [255, 255, 0],
          transparent: [255, 255, 255],
        },
        u = ["add", "remove", "toggle"],
        h = {
          border: 1,
          borderBottom: 1,
          borderColor: 1,
          borderLeft: 1,
          borderRight: 1,
          borderTop: 1,
          borderWidth: 1,
          margin: 1,
          padding: 1,
        };
      ((e.effects.animateClass = function (t, i, n, r) {
        return (
          e.isFunction(n) && ((r = n), (n = null)),
          this.queue(function () {
            var l,
              c = e(this),
              h = c.attr("style") || " ",
              d = o(s.call(this)),
              p = c.attr("class");
            (e.each(u, function (e, i) {
              t[i] && c[i + "Class"](t[i]);
            }),
              (l = o(s.call(this))),
              c.attr("class", p),
              c.animate(a(d, l), {
                queue: !1,
                duration: i,
                easing: n,
                complete: function () {
                  (e.each(u, function (e, i) {
                    t[i] && c[i + "Class"](t[i]);
                  }),
                    "object" == typeof c.attr("style")
                      ? ((c.attr("style").cssText = ""),
                        (c.attr("style").cssText = h))
                      : c.attr("style", h),
                    r && r.apply(this, arguments),
                    e.dequeue(this));
                },
              }));
          })
        );
      }),
        e.fn.extend({
          _addClass: e.fn.addClass,
          addClass: function (t, i, n, s) {
            return i
              ? e.effects.animateClass.apply(this, [{ add: t }, i, n, s])
              : this._addClass(t);
          },
          _removeClass: e.fn.removeClass,
          removeClass: function (t, i, n, s) {
            return i
              ? e.effects.animateClass.apply(this, [{ remove: t }, i, n, s])
              : this._removeClass(t);
          },
          _toggleClass: e.fn.toggleClass,
          toggleClass: function (i, n, s, o, a) {
            return "boolean" == typeof n || n === t
              ? s
                ? e.effects.animateClass.apply(this, [
                    n ? { add: i } : { remove: i },
                    s,
                    o,
                    a,
                  ])
                : this._toggleClass(i, n)
              : e.effects.animateClass.apply(this, [{ toggle: i }, n, s, o]);
          },
          switchClass: function (t, i, n, s, o) {
            return e.effects.animateClass.apply(this, [
              { add: i, remove: t },
              n,
              s,
              o,
            ]);
          },
        }),
        e.extend(e.effects, {
          version: "1.8.16",
          save: function (e, t) {
            for (var i = 0; i < t.length; i++)
              null !== t[i] && e.data("ec.storage." + t[i], e[0].style[t[i]]);
          },
          restore: function (e, t) {
            for (var i = 0; i < t.length; i++)
              null !== t[i] && e.css(t[i], e.data("ec.storage." + t[i]));
          },
          setMode: function (e, t) {
            return (
              "toggle" == t && (t = e.is(":hidden") ? "show" : "hide"),
              t
            );
          },
          getBaseline: function (e, t) {
            var i, n;
            switch (e[0]) {
              case "top":
                i = 0;
                break;
              case "middle":
                i = 0.5;
                break;
              case "bottom":
                i = 1;
                break;
              default:
                i = e[0] / t.height;
            }
            switch (e[1]) {
              case "left":
                n = 0;
                break;
              case "center":
                n = 0.5;
                break;
              case "right":
                n = 1;
                break;
              default:
                n = e[1] / t.width;
            }
            return { x: n, y: i };
          },
          createWrapper: function (t) {
            if (t.parent().is(".ui-effects-wrapper")) return t.parent();
            var i = {
                width: t.outerWidth(!0),
                height: t.outerHeight(!0),
                float: t.css("float"),
              },
              n = e("<div></div>")
                .addClass("ui-effects-wrapper")
                .css({
                  fontSize: "100%",
                  background: "transparent",
                  border: "none",
                  margin: 0,
                  padding: 0,
                }),
              s = document.activeElement;
            return (
              t.wrap(n),
              (t[0] === s || e.contains(t[0], s)) && e(s).focus(),
              (n = t.parent()),
              "static" == t.css("position")
                ? (n.css({ position: "relative" }),
                  t.css({ position: "relative" }))
                : (e.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index"),
                  }),
                  e.each(["top", "left", "bottom", "right"], function (e, n) {
                    ((i[n] = t.css(n)),
                      isNaN(parseInt(i[n], 10)) && (i[n] = "auto"));
                  }),
                  t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto",
                  })),
              n.css(i).show()
            );
          },
          removeWrapper: function (t) {
            var i,
              n = document.activeElement;
            return t.parent().is(".ui-effects-wrapper")
              ? ((i = t.parent().replaceWith(t)),
                (t[0] === n || e.contains(t[0], n)) && e(n).focus(),
                i)
              : t;
          },
          setTransition: function (t, i, n, s) {
            return (
              (s = s || {}),
              e.each(i, function (e, i) {
                ((unit = t.cssUnit(i)),
                  unit[0] > 0 && (s[i] = unit[0] * n + unit[1]));
              }),
              s
            );
          },
        }),
        e.fn.extend({
          effect: function (t) {
            var i = r.apply(this, arguments),
              n = { options: i[1], duration: i[2], callback: i[3] },
              s = n.options.mode,
              o = e.effects[t];
            return e.fx.off || !o
              ? s
                ? this[s](n.duration, n.callback)
                : this.each(function () {
                    n.callback && n.callback.call(this);
                  })
              : o.call(this, n);
          },
          _show: e.fn.show,
          show: function (e) {
            if (l(e)) return this._show.apply(this, arguments);
            var t = r.apply(this, arguments);
            return ((t[1].mode = "show"), this.effect.apply(this, t));
          },
          _hide: e.fn.hide,
          hide: function (e) {
            if (l(e)) return this._hide.apply(this, arguments);
            var t = r.apply(this, arguments);
            return ((t[1].mode = "hide"), this.effect.apply(this, t));
          },
          __toggle: e.fn.toggle,
          toggle: function (t) {
            if (l(t) || "boolean" == typeof t || e.isFunction(t))
              return this.__toggle.apply(this, arguments);
            var i = r.apply(this, arguments);
            return ((i[1].mode = "toggle"), this.effect.apply(this, i));
          },
          cssUnit: function (t) {
            var i = this.css(t),
              n = [];
            return (
              e.each(["em", "px", "%", "pt"], function (e, t) {
                i.indexOf(t) > 0 && (n = [parseFloat(i), t]);
              }),
              n
            );
          },
        }) /*
         * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
         *
         * Uses the built in easing capabilities added In jQuery 1.1
         * to offer multiple easing options
         *
         * TERMS OF USE - jQuery Easing
         *
         * Open source under the BSD License.
         *
         * Copyright 2008 George McGinley Smith
         * All rights reserved.
         *
         * Redistribution and use in source and binary forms, with or without modification,
         * are permitted provided that the following conditions are met:
         *
         * Redistributions of source code must retain the above copyright notice, this list of
         * conditions and the following disclaimer.
         * Redistributions in binary form must reproduce the above copyright notice, this list
         * of conditions and the following disclaimer in the documentation and/or other materials
         * provided with the distribution.
         *
         * Neither the name of the author nor the names of contributors may be used to endorse
         * or promote products derived from this software without specific prior written permission.
         *
         * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
         * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
         * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
         * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
         * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
         * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
         * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
         * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
         * OF THE POSSIBILITY OF SUCH DAMAGE.
         *
         */,
        (e.easing.jswing = e.easing.swing),
        e.extend(e.easing, {
          def: "easeOutQuad",
          swing: function (t, i, n, s, o) {
            return e.easing[e.easing.def](t, i, n, s, o);
          },
          easeInQuad: function (e, t, i, n, s) {
            return n * (t /= s) * t + i;
          },
          easeOutQuad: function (e, t, i, n, s) {
            return -n * (t /= s) * (t - 2) + i;
          },
          easeInOutQuad: function (e, t, i, n, s) {
            return (t /= s / 2) < 1
              ? (n / 2) * t * t + i
              : (-n / 2) * (--t * (t - 2) - 1) + i;
          },
          easeInCubic: function (e, t, i, n, s) {
            return n * (t /= s) * t * t + i;
          },
          easeOutCubic: function (e, t, i, n, s) {
            return n * ((t = t / s - 1) * t * t + 1) + i;
          },
          easeInOutCubic: function (e, t, i, n, s) {
            return (t /= s / 2) < 1
              ? (n / 2) * t * t * t + i
              : (n / 2) * ((t -= 2) * t * t + 2) + i;
          },
          easeInQuart: function (e, t, i, n, s) {
            return n * (t /= s) * t * t * t + i;
          },
          easeOutQuart: function (e, t, i, n, s) {
            return -n * ((t = t / s - 1) * t * t * t - 1) + i;
          },
          easeInOutQuart: function (e, t, i, n, s) {
            return (t /= s / 2) < 1
              ? (n / 2) * t * t * t * t + i
              : (-n / 2) * ((t -= 2) * t * t * t - 2) + i;
          },
          easeInQuint: function (e, t, i, n, s) {
            return n * (t /= s) * t * t * t * t + i;
          },
          easeOutQuint: function (e, t, i, n, s) {
            return n * ((t = t / s - 1) * t * t * t * t + 1) + i;
          },
          easeInOutQuint: function (e, t, i, n, s) {
            return (t /= s / 2) < 1
              ? (n / 2) * t * t * t * t * t + i
              : (n / 2) * ((t -= 2) * t * t * t * t + 2) + i;
          },
          easeInSine: function (e, t, i, n, s) {
            return -n * Math.cos((t / s) * (Math.PI / 2)) + n + i;
          },
          easeOutSine: function (e, t, i, n, s) {
            return n * Math.sin((t / s) * (Math.PI / 2)) + i;
          },
          easeInOutSine: function (e, t, i, n, s) {
            return (-n / 2) * (Math.cos((Math.PI * t) / s) - 1) + i;
          },
          easeInExpo: function (e, t, i, n, s) {
            return 0 == t ? i : n * Math.pow(2, 10 * (t / s - 1)) + i;
          },
          easeOutExpo: function (e, t, i, n, s) {
            return t == s ? i + n : n * (1 - Math.pow(2, (-10 * t) / s)) + i;
          },
          easeInOutExpo: function (e, t, i, n, s) {
            return 0 == t
              ? i
              : t == s
                ? i + n
                : (t /= s / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (t - 1)) + i
                  : (n / 2) * (2 - Math.pow(2, -10 * --t)) + i;
          },
          easeInCirc: function (e, t, i, n, s) {
            return -n * (Math.sqrt(1 - (t /= s) * t) - 1) + i;
          },
          easeOutCirc: function (e, t, i, n, s) {
            return n * Math.sqrt(1 - (t = t / s - 1) * t) + i;
          },
          easeInOutCirc: function (e, t, i, n, s) {
            return (t /= s / 2) < 1
              ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + i
              : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + i;
          },
          easeInElastic: function (e, t, i, n, s) {
            var o = 1.70158,
              a = 0,
              r = n;
            if (0 == t) return i;
            if (1 == (t /= s)) return i + n;
            if ((a || (a = 0.3 * s), r < Math.abs(n))) {
              r = n;
              var o = a / 4;
            } else var o = (a / (2 * Math.PI)) * Math.asin(n / r);
            return (
              -r *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t * s - o) * (2 * Math.PI)) / a) +
              i
            );
          },
          easeOutElastic: function (e, t, i, n, s) {
            var o = 1.70158,
              a = 0,
              r = n;
            if (0 == t) return i;
            if (1 == (t /= s)) return i + n;
            if ((a || (a = 0.3 * s), r < Math.abs(n))) {
              r = n;
              var o = a / 4;
            } else var o = (a / (2 * Math.PI)) * Math.asin(n / r);
            return (
              r *
                Math.pow(2, -10 * t) *
                Math.sin(((t * s - o) * (2 * Math.PI)) / a) +
              n +
              i
            );
          },
          easeInOutElastic: function (e, t, i, n, s) {
            var o = 1.70158,
              a = 0,
              r = n;
            if (0 == t) return i;
            if (2 == (t /= s / 2)) return i + n;
            if ((a || (a = s * (0.3 * 1.5)), r < Math.abs(n))) {
              r = n;
              var o = a / 4;
            } else var o = (a / (2 * Math.PI)) * Math.asin(n / r);
            return t < 1
              ? r *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin(((t * s - o) * (2 * Math.PI)) / a) *
                  -0.5 +
                  i
              : r *
                  Math.pow(2, -10 * (t -= 1)) *
                  Math.sin(((t * s - o) * (2 * Math.PI)) / a) *
                  0.5 +
                  n +
                  i;
          },
          easeInBack: function (e, i, n, s, o, a) {
            return (
              a == t && (a = 1.70158),
              s * (i /= o) * i * ((a + 1) * i - a) + n
            );
          },
          easeOutBack: function (e, i, n, s, o, a) {
            return (
              a == t && (a = 1.70158),
              s * ((i = i / o - 1) * i * ((a + 1) * i + a) + 1) + n
            );
          },
          easeInOutBack: function (e, i, n, s, o, a) {
            return (
              a == t && (a = 1.70158),
              (i /= o / 2) < 1
                ? (s / 2) * (i * i * ((1 + (a *= 1.525)) * i - a)) + n
                : (s / 2) * ((i -= 2) * i * ((1 + (a *= 1.525)) * i + a) + 2) +
                  n
            );
          },
          easeInBounce: function (t, i, n, s, o) {
            return s - e.easing.easeOutBounce(t, o - i, 0, s, o) + n;
          },
          easeOutBounce: function (e, t, i, n, s) {
            return (t /= s) < 1 / 2.75
              ? n * (7.5625 * t * t) + i
              : t < 2 / 2.75
                ? n * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + i
                : t < 2.5 / 2.75
                  ? n * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + i
                  : n * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + i;
          },
          easeInOutBounce: function (t, i, n, s, o) {
            return i < o / 2
              ? 0.5 * e.easing.easeInBounce(t, 2 * i, 0, s, o) + n
              : 0.5 * e.easing.easeOutBounce(t, 2 * i - o, 0, s, o) +
                  0.5 * s +
                  n;
          },
        }));
    })(jQuery) /*
   * jQuery UI Effects Blind 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Effects/Blind
   *
   * Depends:
   *	jquery.effects.core.js
   */,
  (function (e) {
    e.effects.blind = function (t) {
      return this.queue(function () {
        var i = e(this),
          n = ["position", "top", "bottom", "left", "right"],
          s = e.effects.setMode(i, t.options.mode || "hide"),
          o = t.options.direction || "vertical";
        (e.effects.save(i, n), i.show());
        var a = e.effects.createWrapper(i).css({ overflow: "hidden" }),
          r = "vertical" == o ? "height" : "width",
          l = "vertical" == o ? a.height() : a.width();
        "show" == s && a.css(r, 0);
        var c = {};
        ((c[r] = "show" == s ? l : 0),
          a.animate(c, t.duration, t.options.easing, function () {
            ("hide" == s && i.hide(),
              e.effects.restore(i, n),
              e.effects.removeWrapper(i),
              t.callback && t.callback.apply(i[0], arguments),
              i.dequeue());
          }));
      });
    };
  })(jQuery) /*
   * jQuery UI Effects Bounce 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Effects/Bounce
   *
   * Depends:
   *	jquery.effects.core.js
   */,
  (function (e) {
    e.effects.bounce = function (t) {
      return this.queue(function () {
        var i = e(this),
          n = ["position", "top", "bottom", "left", "right"],
          s = e.effects.setMode(i, t.options.mode || "effect"),
          o = t.options.direction || "up",
          a = t.options.distance || 20,
          r = t.options.times || 5,
          l = t.duration || 250;
        (/show|hide/.test(s) && n.push("opacity"),
          e.effects.save(i, n),
          i.show(),
          e.effects.createWrapper(i));
        var c = "up" == o || "down" == o ? "top" : "left",
          u = "up" == o || "left" == o ? "pos" : "neg",
          a =
            t.options.distance ||
            ("top" == c
              ? i.outerHeight({ margin: !0 }) / 3
              : i.outerWidth({ margin: !0 }) / 3);
        if (
          ("show" == s && i.css("opacity", 0).css(c, "pos" == u ? -a : a),
          "hide" == s && (a /= 2 * r),
          "hide" != s && r--,
          "show" == s)
        ) {
          var h = { opacity: 1 };
          ((h[c] = ("pos" == u ? "+=" : "-=") + a),
            i.animate(h, l / 2, t.options.easing),
            (a /= 2),
            r--);
        }
        for (var d = 0; d < r; d++) {
          var p = {},
            f = {};
          ((p[c] = ("pos" == u ? "-=" : "+=") + a),
            (f[c] = ("pos" == u ? "+=" : "-=") + a),
            i
              .animate(p, l / 2, t.options.easing)
              .animate(f, l / 2, t.options.easing),
            (a = "hide" == s ? 2 * a : a / 2));
        }
        if ("hide" == s) {
          var h = { opacity: 0 };
          ((h[c] = ("pos" == u ? "-=" : "+=") + a),
            i.animate(h, l / 2, t.options.easing, function () {
              (i.hide(),
                e.effects.restore(i, n),
                e.effects.removeWrapper(i),
                t.callback && t.callback.apply(this, arguments));
            }));
        } else {
          var p = {},
            f = {};
          ((p[c] = ("pos" == u ? "-=" : "+=") + a),
            (f[c] = ("pos" == u ? "+=" : "-=") + a),
            i
              .animate(p, l / 2, t.options.easing)
              .animate(f, l / 2, t.options.easing, function () {
                (e.effects.restore(i, n),
                  e.effects.removeWrapper(i),
                  t.callback && t.callback.apply(this, arguments));
              }));
        }
        (i.queue("fx", function () {
          i.dequeue();
        }),
          i.dequeue());
      });
    };
  })(jQuery) /*
   * jQuery UI Effects Clip 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Effects/Clip
   *
   * Depends:
   *	jquery.effects.core.js
   */,
  (function (e) {
    e.effects.clip = function (t) {
      return this.queue(function () {
        var i = e(this),
          n = ["position", "top", "bottom", "left", "right", "height", "width"],
          s = e.effects.setMode(i, t.options.mode || "hide"),
          o = t.options.direction || "vertical";
        (e.effects.save(i, n), i.show());
        var a = e.effects.createWrapper(i).css({ overflow: "hidden" }),
          r = "IMG" == i[0].tagName ? a : i,
          l = {
            size: "vertical" == o ? "height" : "width",
            position: "vertical" == o ? "top" : "left",
          },
          c = "vertical" == o ? r.height() : r.width();
        "show" == s && (r.css(l.size, 0), r.css(l.position, c / 2));
        var u = {};
        ((u[l.size] = "show" == s ? c : 0),
          (u[l.position] = "show" == s ? 0 : c / 2),
          r.animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.options.easing,
            complete: function () {
              ("hide" == s && i.hide(),
                e.effects.restore(i, n),
                e.effects.removeWrapper(i),
                t.callback && t.callback.apply(i[0], arguments),
                i.dequeue());
            },
          }));
      });
    };
  })(jQuery) /*
   * jQuery UI Effects Drop 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Effects/Drop
   *
   * Depends:
   *	jquery.effects.core.js
   */,
  (function (e) {
    e.effects.drop = function (t) {
      return this.queue(function () {
        var i = e(this),
          n = ["position", "top", "bottom", "left", "right", "opacity"],
          s = e.effects.setMode(i, t.options.mode || "hide"),
          o = t.options.direction || "left";
        (e.effects.save(i, n), i.show(), e.effects.createWrapper(i));
        var a = "up" == o || "down" == o ? "top" : "left",
          r = "up" == o || "left" == o ? "pos" : "neg",
          l =
            t.options.distance ||
            ("top" == a
              ? i.outerHeight({ margin: !0 }) / 2
              : i.outerWidth({ margin: !0 }) / 2);
        "show" == s && i.css("opacity", 0).css(a, "pos" == r ? -l : l);
        var c = { opacity: "show" == s ? 1 : 0 };
        ((c[a] =
          ("show" == s
            ? "pos" == r
              ? "+="
              : "-="
            : "pos" == r
              ? "-="
              : "+=") + l),
          i.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.options.easing,
            complete: function () {
              ("hide" == s && i.hide(),
                e.effects.restore(i, n),
                e.effects.removeWrapper(i),
                t.callback && t.callback.apply(this, arguments),
                i.dequeue());
            },
          }));
      });
    };
  })(jQuery) /*
   * jQuery UI Effects Explode 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Effects/Explode
   *
   * Depends:
   *	jquery.effects.core.js
   */,
  (function (e) {
    e.effects.explode = function (t) {
      return this.queue(function () {
        var i = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3,
          n = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3;
        t.options.mode =
          "toggle" == t.options.mode
            ? e(this).is(":visible")
              ? "hide"
              : "show"
            : t.options.mode;
        var s = e(this).show().css("visibility", "hidden"),
          o = s.offset();
        ((o.top -= parseInt(s.css("marginTop"), 10) || 0),
          (o.left -= parseInt(s.css("marginLeft"), 10) || 0));
        for (var a = s.outerWidth(!0), r = s.outerHeight(!0), l = 0; l < i; l++)
          for (var c = 0; c < n; c++)
            s.clone()
              .appendTo("body")
              .wrap("<div></div>")
              .css({
                position: "absolute",
                visibility: "visible",
                left: (a / n) * -c,
                top: (r / i) * -l,
              })
              .parent()
              .addClass("ui-effects-explode")
              .css({
                position: "absolute",
                overflow: "hidden",
                width: a / n,
                height: r / i,
                left:
                  o.left +
                  c * (a / n) +
                  ("show" == t.options.mode
                    ? (c - Math.floor(n / 2)) * (a / n)
                    : 0),
                top:
                  o.top +
                  l * (r / i) +
                  ("show" == t.options.mode
                    ? (l - Math.floor(i / 2)) * (r / i)
                    : 0),
                opacity: "show" == t.options.mode ? 0 : 1,
              })
              .animate(
                {
                  left:
                    o.left +
                    c * (a / n) +
                    ("show" == t.options.mode
                      ? 0
                      : (c - Math.floor(n / 2)) * (a / n)),
                  top:
                    o.top +
                    l * (r / i) +
                    ("show" == t.options.mode
                      ? 0
                      : (l - Math.floor(i / 2)) * (r / i)),
                  opacity: "show" == t.options.mode ? 1 : 0,
                },
                t.duration || 500,
              );
        setTimeout(function () {
          ("show" == t.options.mode
            ? s.css({ visibility: "visible" })
            : s.css({ visibility: "visible" }).hide(),
            t.callback && t.callback.apply(s[0]),
            s.dequeue(),
            e("div.ui-effects-explode").remove());
        }, t.duration || 500);
      });
    };
  })(jQuery) /*
   * jQuery UI Effects Fade 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Effects/Fade
   *
   * Depends:
   *	jquery.effects.core.js
   */,
  (function (e) {
    e.effects.fade = function (t) {
      return this.queue(function () {
        var i = e(this),
          n = e.effects.setMode(i, t.options.mode || "hide");
        i.animate(
          { opacity: n },
          {
            queue: !1,
            duration: t.duration,
            easing: t.options.easing,
            complete: function () {
              (t.callback && t.callback.apply(this, arguments), i.dequeue());
            },
          },
        );
      });
    };
  })(jQuery) /*
   * jQuery UI Effects Fold 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Effects/Fold
   *
   * Depends:
   *	jquery.effects.core.js
   */,
  (function (e) {
    e.effects.fold = function (t) {
      return this.queue(function () {
        var i = e(this),
          n = ["position", "top", "bottom", "left", "right"],
          s = e.effects.setMode(i, t.options.mode || "hide"),
          o = t.options.size || 15,
          a = !!t.options.horizFirst,
          r = t.duration ? t.duration / 2 : e.fx.speeds._default / 2;
        (e.effects.save(i, n), i.show());
        var l = e.effects.createWrapper(i).css({ overflow: "hidden" }),
          c = ("show" == s) != a,
          u = c ? ["width", "height"] : ["height", "width"],
          h = c ? [l.width(), l.height()] : [l.height(), l.width()],
          d = /([0-9]+)%/.exec(o);
        (d && (o = (parseInt(d[1], 10) / 100) * h["hide" == s ? 0 : 1]),
          "show" == s &&
            l.css(a ? { height: 0, width: o } : { height: o, width: 0 }));
        var p = {},
          f = {};
        ((p[u[0]] = "show" == s ? h[0] : o),
          (f[u[1]] = "show" == s ? h[1] : 0),
          l
            .animate(p, r, t.options.easing)
            .animate(f, r, t.options.easing, function () {
              ("hide" == s && i.hide(),
                e.effects.restore(i, n),
                e.effects.removeWrapper(i),
                t.callback && t.callback.apply(i[0], arguments),
                i.dequeue());
            }));
      });
    };
  })(jQuery) /*
   * jQuery UI Effects Highlight 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Effects/Highlight
   *
   * Depends:
   *	jquery.effects.core.js
   */,
  (function (e) {
    e.effects.highlight = function (t) {
      return this.queue(function () {
        var i = e(this),
          n = ["backgroundImage", "backgroundColor", "opacity"],
          s = e.effects.setMode(i, t.options.mode || "show"),
          o = { backgroundColor: i.css("backgroundColor") };
        ("hide" == s && (o.opacity = 0),
          e.effects.save(i, n),
          i
            .show()
            .css({
              backgroundImage: "none",
              backgroundColor: t.options.color || "#ffff99",
            })
            .animate(o, {
              queue: !1,
              duration: t.duration,
              easing: t.options.easing,
              complete: function () {
                ("hide" == s && i.hide(),
                  e.effects.restore(i, n),
                  "show" == s &&
                    !e.support.opacity &&
                    this.style.removeAttribute("filter"),
                  t.callback && t.callback.apply(this, arguments),
                  i.dequeue());
              },
            }));
      });
    };
  })(jQuery) /*
   * jQuery UI Effects Pulsate 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Effects/Pulsate
   *
   * Depends:
   *	jquery.effects.core.js
   */,
  (function (e) {
    e.effects.pulsate = function (t) {
      return this.queue(function () {
        var i = e(this),
          n = e.effects.setMode(i, t.options.mode || "show");
        ((times = 2 * (t.options.times || 5) - 1),
          (duration = t.duration ? t.duration / 2 : e.fx.speeds._default / 2),
          (isVisible = i.is(":visible")),
          (animateTo = 0),
          isVisible || (i.css("opacity", 0).show(), (animateTo = 1)),
          (("hide" == n && isVisible) || ("show" == n && !isVisible)) &&
            times--);
        for (var s = 0; s < times; s++)
          (i.animate({ opacity: animateTo }, duration, t.options.easing),
            (animateTo = (animateTo + 1) % 2));
        (i.animate(
          { opacity: animateTo },
          duration,
          t.options.easing,
          function () {
            (0 == animateTo && i.hide(),
              t.callback && t.callback.apply(this, arguments));
          },
        ),
          i
            .queue("fx", function () {
              i.dequeue();
            })
            .dequeue());
      });
    };
  })(jQuery) /*
   * jQuery UI Effects Scale 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Effects/Scale
   *
   * Depends:
   *	jquery.effects.core.js
   */,
  (function (e) {
    ((e.effects.puff = function (t) {
      return this.queue(function () {
        var i = e(this),
          n = e.effects.setMode(i, t.options.mode || "hide"),
          s = parseInt(t.options.percent, 10) || 150,
          o = s / 100,
          a = { height: i.height(), width: i.width() };
        (e.extend(t.options, {
          fade: !0,
          mode: n,
          percent: "hide" == n ? s : 100,
          from: "hide" == n ? a : { height: a.height * o, width: a.width * o },
        }),
          i.effect("scale", t.options, t.duration, t.callback),
          i.dequeue());
      });
    }),
      (e.effects.scale = function (t) {
        return this.queue(function () {
          var i = e(this),
            n = e.extend(!0, {}, t.options),
            s = e.effects.setMode(i, t.options.mode || "effect"),
            o =
              parseInt(t.options.percent, 10) ||
              (0 == parseInt(t.options.percent, 10)
                ? 0
                : "hide" == s
                  ? 0
                  : 100),
            a = t.options.direction || "both",
            r = t.options.origin;
          "effect" != s &&
            ((n.origin = r || ["middle", "center"]), (n.restore = !0));
          var l = { height: i.height(), width: i.width() };
          i.from =
            t.options.from || ("show" == s ? { height: 0, width: 0 } : l);
          var c = {
            y: "horizontal" != a ? o / 100 : 1,
            x: "vertical" != a ? o / 100 : 1,
          };
          ((i.to = { height: l.height * c.y, width: l.width * c.x }),
            t.options.fade &&
              ("show" == s && ((i.from.opacity = 0), (i.to.opacity = 1)),
              "hide" == s && ((i.from.opacity = 1), (i.to.opacity = 0))),
            (n.from = i.from),
            (n.to = i.to),
            (n.mode = s),
            i.effect("size", n, t.duration, t.callback),
            i.dequeue());
        });
      }),
      (e.effects.size = function (t) {
        return this.queue(function () {
          var i = e(this),
            n = [
              "position",
              "top",
              "bottom",
              "left",
              "right",
              "width",
              "height",
              "overflow",
              "opacity",
            ],
            s = [
              "position",
              "top",
              "bottom",
              "left",
              "right",
              "overflow",
              "opacity",
            ],
            o = ["width", "height", "overflow"],
            a = ["fontSize"],
            r = [
              "borderTopWidth",
              "borderBottomWidth",
              "paddingTop",
              "paddingBottom",
            ],
            l = [
              "borderLeftWidth",
              "borderRightWidth",
              "paddingLeft",
              "paddingRight",
            ],
            c = e.effects.setMode(i, t.options.mode || "effect"),
            u = t.options.restore || !1,
            h = t.options.scale || "both",
            d = t.options.origin,
            p = { height: i.height(), width: i.width() };
          if (((i.from = t.options.from || p), (i.to = t.options.to || p), d)) {
            var f = e.effects.getBaseline(d, p);
            ((i.from.top = (p.height - i.from.height) * f.y),
              (i.from.left = (p.width - i.from.width) * f.x),
              (i.to.top = (p.height - i.to.height) * f.y),
              (i.to.left = (p.width - i.to.width) * f.x));
          }
          var m = {
            from: { y: i.from.height / p.height, x: i.from.width / p.width },
            to: { y: i.to.height / p.height, x: i.to.width / p.width },
          };
          (("box" != h && "both" != h) ||
            (m.from.y != m.to.y &&
              ((n = n.concat(r)),
              (i.from = e.effects.setTransition(i, r, m.from.y, i.from)),
              (i.to = e.effects.setTransition(i, r, m.to.y, i.to))),
            m.from.x != m.to.x &&
              ((n = n.concat(l)),
              (i.from = e.effects.setTransition(i, l, m.from.x, i.from)),
              (i.to = e.effects.setTransition(i, l, m.to.x, i.to)))),
            ("content" != h && "both" != h) ||
              (m.from.y != m.to.y &&
                ((n = n.concat(a)),
                (i.from = e.effects.setTransition(i, a, m.from.y, i.from)),
                (i.to = e.effects.setTransition(i, a, m.to.y, i.to)))),
            e.effects.save(i, u ? n : s),
            i.show(),
            e.effects.createWrapper(i),
            i.css("overflow", "hidden").css(i.from),
            ("content" != h && "both" != h) ||
              ((r = r.concat(["marginTop", "marginBottom"]).concat(a)),
              (l = l.concat(["marginLeft", "marginRight"])),
              (o = n.concat(r).concat(l)),
              i.find("*[width]").each(function () {
                ((child = e(this)), u && e.effects.save(child, o));
                var i = { height: child.height(), width: child.width() };
                ((child.from = {
                  height: i.height * m.from.y,
                  width: i.width * m.from.x,
                }),
                  (child.to = {
                    height: i.height * m.to.y,
                    width: i.width * m.to.x,
                  }),
                  m.from.y != m.to.y &&
                    ((child.from = e.effects.setTransition(
                      child,
                      r,
                      m.from.y,
                      child.from,
                    )),
                    (child.to = e.effects.setTransition(
                      child,
                      r,
                      m.to.y,
                      child.to,
                    ))),
                  m.from.x != m.to.x &&
                    ((child.from = e.effects.setTransition(
                      child,
                      l,
                      m.from.x,
                      child.from,
                    )),
                    (child.to = e.effects.setTransition(
                      child,
                      l,
                      m.to.x,
                      child.to,
                    ))),
                  child.css(child.from),
                  child.animate(
                    child.to,
                    t.duration,
                    t.options.easing,
                    function () {
                      u && e.effects.restore(child, o);
                    },
                  ));
              })),
            i.animate(i.to, {
              queue: !1,
              duration: t.duration,
              easing: t.options.easing,
              complete: function () {
                (0 === i.to.opacity && i.css("opacity", i.from.opacity),
                  "hide" == c && i.hide(),
                  e.effects.restore(i, u ? n : s),
                  e.effects.removeWrapper(i),
                  t.callback && t.callback.apply(this, arguments),
                  i.dequeue());
              },
            }));
        });
      }));
  })(jQuery) /*
   * jQuery UI Effects Shake 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Effects/Shake
   *
   * Depends:
   *	jquery.effects.core.js
   */,
  (function (e) {
    e.effects.shake = function (t) {
      return this.queue(function () {
        var i = e(this),
          n = ["position", "top", "bottom", "left", "right"],
          s =
            (e.effects.setMode(i, t.options.mode || "effect"),
            t.options.direction || "left"),
          o = t.options.distance || 20,
          a = t.options.times || 3,
          r = t.duration || t.options.duration || 140;
        (e.effects.save(i, n), i.show(), e.effects.createWrapper(i));
        var l = "up" == s || "down" == s ? "top" : "left",
          c = "up" == s || "left" == s ? "pos" : "neg",
          u = {},
          h = {},
          d = {};
        ((u[l] = ("pos" == c ? "-=" : "+=") + o),
          (h[l] = ("pos" == c ? "+=" : "-=") + 2 * o),
          (d[l] = ("pos" == c ? "-=" : "+=") + 2 * o),
          i.animate(u, r, t.options.easing));
        for (var p = 1; p < a; p++)
          i.animate(h, r, t.options.easing).animate(d, r, t.options.easing);
        (i
          .animate(h, r, t.options.easing)
          .animate(u, r / 2, t.options.easing, function () {
            (e.effects.restore(i, n),
              e.effects.removeWrapper(i),
              t.callback && t.callback.apply(this, arguments));
          }),
          i.queue("fx", function () {
            i.dequeue();
          }),
          i.dequeue());
      });
    };
  })(jQuery) /*
   * jQuery UI Effects Slide 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Effects/Slide
   *
   * Depends:
   *	jquery.effects.core.js
   */,
  (function (e) {
    e.effects.slide = function (t) {
      return this.queue(function () {
        var i = e(this),
          n = ["position", "top", "bottom", "left", "right"],
          s = e.effects.setMode(i, t.options.mode || "show"),
          o = t.options.direction || "left";
        (e.effects.save(i, n),
          i.show(),
          e.effects.createWrapper(i).css({ overflow: "hidden" }));
        var a = "up" == o || "down" == o ? "top" : "left",
          r = "up" == o || "left" == o ? "pos" : "neg",
          l =
            t.options.distance ||
            ("top" == a
              ? i.outerHeight({ margin: !0 })
              : i.outerWidth({ margin: !0 }));
        "show" == s && i.css(a, "pos" == r ? (isNaN(l) ? "-" + l : -l) : l);
        var c = {};
        ((c[a] =
          ("show" == s
            ? "pos" == r
              ? "+="
              : "-="
            : "pos" == r
              ? "-="
              : "+=") + l),
          i.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.options.easing,
            complete: function () {
              ("hide" == s && i.hide(),
                e.effects.restore(i, n),
                e.effects.removeWrapper(i),
                t.callback && t.callback.apply(this, arguments),
                i.dequeue());
            },
          }));
      });
    };
  })(jQuery) /*
   * jQuery UI Effects Transfer 1.8.16
   *
   * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   *
   * http://docs.jquery.com/UI/Effects/Transfer
   *
   * Depends:
   *	jquery.effects.core.js
   */,
  (function (e) {
    e.effects.transfer = function (t) {
      return this.queue(function () {
        var i = e(this),
          n = e(t.options.to),
          s = n.offset(),
          o = {
            top: s.top,
            left: s.left,
            height: n.innerHeight(),
            width: n.innerWidth(),
          },
          a = i.offset(),
          r = e('<div class="ui-effects-transfer"></div>')
            .appendTo(document.body)
            .addClass(t.options.className)
            .css({
              top: a.top,
              left: a.left,
              height: i.innerHeight(),
              width: i.innerWidth(),
              position: "absolute",
            })
            .animate(o, t.duration, t.options.easing, function () {
              (r.remove(),
                t.callback && t.callback.apply(i[0], arguments),
                i.dequeue());
            });
      });
    };
  })(jQuery),
  (function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e) {
      var t = e.length,
        i = se.type(e);
      return (
        "function" !== i &&
        !se.isWindow(e) &&
        (!(1 !== e.nodeType || !t) ||
          "array" === i ||
          0 === t ||
          ("number" == typeof t && t > 0 && t - 1 in e))
      );
    }
    function n(e, t, i) {
      if (se.isFunction(t))
        return se.grep(e, function (e, n) {
          return !!t.call(e, n, e) !== i;
        });
      if (t.nodeType)
        return se.grep(e, function (e) {
          return (e === t) !== i;
        });
      if ("string" == typeof t) {
        if (de.test(t)) return se.filter(t, e, i);
        t = se.filter(t, e);
      }
      return se.grep(e, function (e) {
        return se.inArray(e, t) >= 0 !== i;
      });
    }
    function s(e, t) {
      do {
        e = e[t];
      } while (e && 1 !== e.nodeType);
      return e;
    }
    function o(e) {
      var t = (be[e] = {});
      return (
        se.each(e.match(ye) || [], function (e, i) {
          t[i] = !0;
        }),
        t
      );
    }
    function a() {
      fe.addEventListener
        ? (fe.removeEventListener("DOMContentLoaded", r, !1),
          e.removeEventListener("load", r, !1))
        : (fe.detachEvent("onreadystatechange", r), e.detachEvent("onload", r));
    }
    function r() {
      (fe.addEventListener ||
        "load" === event.type ||
        "complete" === fe.readyState) &&
        (a(), se.ready());
    }
    function l(e, t, i) {
      if (void 0 === i && 1 === e.nodeType) {
        var n = "data-" + t.replace(Ce, "-$1").toLowerCase();
        if ("string" == typeof (i = e.getAttribute(n))) {
          try {
            i =
              "true" === i ||
              ("false" !== i &&
                ("null" === i
                  ? null
                  : +i + "" === i
                    ? +i
                    : ke.test(i)
                      ? se.parseJSON(i)
                      : i));
          } catch (e) {}
          se.data(e, t, i);
        } else i = void 0;
      }
      return i;
    }
    function c(e) {
      var t;
      for (t in e)
        if (("data" !== t || !se.isEmptyObject(e[t])) && "toJSON" !== t)
          return !1;
      return !0;
    }
    function u(e, t, i, n) {
      if (se.acceptData(e)) {
        var s,
          o,
          a = se.expando,
          r = e.nodeType,
          l = r ? se.cache : e,
          c = r ? e[a] : e[a] && a;
        if (
          (c && l[c] && (n || l[c].data)) ||
          void 0 !== i ||
          "string" != typeof t
        )
          return (
            c || (c = r ? (e[a] = X.pop() || se.guid++) : a),
            l[c] || (l[c] = r ? {} : { toJSON: se.noop }),
            ("object" == typeof t || "function" == typeof t) &&
              (n
                ? (l[c] = se.extend(l[c], t))
                : (l[c].data = se.extend(l[c].data, t))),
            (o = l[c]),
            n || (o.data || (o.data = {}), (o = o.data)),
            void 0 !== i && (o[se.camelCase(t)] = i),
            "string" == typeof t
              ? null == (s = o[t]) && (s = o[se.camelCase(t)])
              : (s = o),
            s
          );
      }
    }
    function h(e, t, i) {
      if (se.acceptData(e)) {
        var n,
          s,
          o = e.nodeType,
          a = o ? se.cache : e,
          r = o ? e[se.expando] : se.expando;
        if (a[r]) {
          if (t && (n = i ? a[r] : a[r].data)) {
            (se.isArray(t)
              ? (t = t.concat(se.map(t, se.camelCase)))
              : t in n
                ? (t = [t])
                : ((t = se.camelCase(t)), (t = t in n ? [t] : t.split(" "))),
              (s = t.length));
            for (; s--; ) delete n[t[s]];
            if (i ? !c(n) : !se.isEmptyObject(n)) return;
          }
          (i || (delete a[r].data, c(a[r]))) &&
            (o
              ? se.cleanData([e], !0)
              : ie.deleteExpando || a != a.window
                ? delete a[r]
                : (a[r] = null));
        }
      }
    }
    function d() {
      return !0;
    }
    function p() {
      return !1;
    }
    function f() {
      try {
        return fe.activeElement;
      } catch (e) {}
    }
    function m(e) {
      var t = Fe.split("|"),
        i = e.createDocumentFragment();
      if (i.createElement) for (; t.length; ) i.createElement(t.pop());
      return i;
    }
    function g(e, t) {
      var i,
        n,
        s = 0,
        o =
          typeof e.getElementsByTagName !== _e
            ? e.getElementsByTagName(t || "*")
            : typeof e.querySelectorAll !== _e
              ? e.querySelectorAll(t || "*")
              : void 0;
      if (!o)
        for (o = [], i = e.childNodes || e; null != (n = i[s]); s++)
          !t || se.nodeName(n, t) ? o.push(n) : se.merge(o, g(n, t));
      return void 0 === t || (t && se.nodeName(e, t)) ? se.merge([e], o) : o;
    }
    function v(e) {
      Ie.test(e.type) && (e.defaultChecked = e.checked);
    }
    function y(e, t) {
      return se.nodeName(e, "table") &&
        se.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
        ? e.getElementsByTagName("tbody")[0] ||
            e.appendChild(e.ownerDocument.createElement("tbody"))
        : e;
    }
    function b(e) {
      return ((e.type = (null !== se.find.attr(e, "type")) + "/" + e.type), e);
    }
    function w(e) {
      var t = Ye.exec(e.type);
      return (t ? (e.type = t[1]) : e.removeAttribute("type"), e);
    }
    function x(e, t) {
      for (var i, n = 0; null != (i = e[n]); n++)
        se._data(i, "globalEval", !t || se._data(t[n], "globalEval"));
    }
    function _(e, t) {
      if (1 === t.nodeType && se.hasData(e)) {
        var i,
          n,
          s,
          o = se._data(e),
          a = se._data(t, o),
          r = o.events;
        if (r) {
          (delete a.handle, (a.events = {}));
          for (i in r)
            for (n = 0, s = r[i].length; s > n; n++)
              se.event.add(t, i, r[i][n]);
        }
        a.data && (a.data = se.extend({}, a.data));
      }
    }
    function k(e, t) {
      var i, n, s;
      if (1 === t.nodeType) {
        if (
          ((i = t.nodeName.toLowerCase()), !ie.noCloneEvent && t[se.expando])
        ) {
          s = se._data(t);
          for (n in s.events) se.removeEvent(t, n, s.handle);
          t.removeAttribute(se.expando);
        }
        "script" === i && t.text !== e.text
          ? ((b(t).text = e.text), w(t))
          : "object" === i
            ? (t.parentNode && (t.outerHTML = e.outerHTML),
              ie.html5Clone &&
                e.innerHTML &&
                !se.trim(t.innerHTML) &&
                (t.innerHTML = e.innerHTML))
            : "input" === i && Ie.test(e.type)
              ? ((t.defaultChecked = t.checked = e.checked),
                t.value !== e.value && (t.value = e.value))
              : "option" === i
                ? (t.defaultSelected = t.selected = e.defaultSelected)
                : ("input" === i || "textarea" === i) &&
                  (t.defaultValue = e.defaultValue);
      }
    }
    function C(t, i) {
      var n,
        s = se(i.createElement(t)).appendTo(i.body),
        o =
          e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(s[0]))
            ? n.display
            : se.css(s[0], "display");
      return (s.detach(), o);
    }
    function T(e) {
      var t = fe,
        i = Je[e];
      return (
        i ||
          ((i = C(e, t)),
          ("none" !== i && i) ||
            ((Ge = (
              Ge || se("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement)),
            (t = (Ge[0].contentWindow || Ge[0].contentDocument).document),
            t.write(),
            t.close(),
            (i = C(e, t)),
            Ge.detach()),
          (Je[e] = i)),
        i
      );
    }
    function S(e, t) {
      return {
        get: function () {
          var i = e();
          if (null != i)
            return i
              ? void delete this.get
              : (this.get = t).apply(this, arguments);
        },
      };
    }
    function D(e, t) {
      if (t in e) return t;
      for (
        var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, s = ht.length;
        s--;
      )
        if ((t = ht[s] + i) in e) return t;
      return n;
    }
    function E(e, t) {
      for (var i, n, s, o = [], a = 0, r = e.length; r > a; a++)
        ((n = e[a]),
          n.style &&
            ((o[a] = se._data(n, "olddisplay")),
            (i = n.style.display),
            t
              ? (o[a] || "none" !== i || (n.style.display = ""),
                "" === n.style.display &&
                  De(n) &&
                  (o[a] = se._data(n, "olddisplay", T(n.nodeName))))
              : ((s = De(n)),
                ((i && "none" !== i) || !s) &&
                  se._data(n, "olddisplay", s ? i : se.css(n, "display")))));
      for (a = 0; r > a; a++)
        ((n = e[a]),
          n.style &&
            ((t && "none" !== n.style.display && "" !== n.style.display) ||
              (n.style.display = t ? o[a] || "" : "none")));
      return e;
    }
    function I(e, t, i) {
      var n = rt.exec(t);
      return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t;
    }
    function N(e, t, i, n, s) {
      for (
        var o = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
          a = 0;
        4 > o;
        o += 2
      )
        ("margin" === i && (a += se.css(e, i + Se[o], !0, s)),
          n
            ? ("content" === i && (a -= se.css(e, "padding" + Se[o], !0, s)),
              "margin" !== i &&
                (a -= se.css(e, "border" + Se[o] + "Width", !0, s)))
            : ((a += se.css(e, "padding" + Se[o], !0, s)),
              "padding" !== i &&
                (a += se.css(e, "border" + Se[o] + "Width", !0, s))));
      return a;
    }
    function A(e, t, i) {
      var n = !0,
        s = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = Ze(e),
        a = ie.boxSizing && "border-box" === se.css(e, "boxSizing", !1, o);
      if (0 >= s || null == s) {
        if (
          ((s = et(e, t, o)),
          (0 > s || null == s) && (s = e.style[t]),
          it.test(s))
        )
          return s;
        ((n = a && (ie.boxSizingReliable() || s === e.style[t])),
          (s = parseFloat(s) || 0));
      }
      return s + N(e, t, i || (a ? "border" : "content"), n, o) + "px";
    }
    function P(e, t, i, n, s) {
      return new P.prototype.init(e, t, i, n, s);
    }
    function M() {
      return (
        setTimeout(function () {
          dt = void 0;
        }),
        (dt = se.now())
      );
    }
    function $(e, t) {
      var i,
        n = { height: e },
        s = 0;
      for (t = t ? 1 : 0; 4 > s; s += 2 - t)
        ((i = Se[s]), (n["margin" + i] = n["padding" + i] = e));
      return (t && (n.opacity = n.width = e), n);
    }
    function F(e, t, i) {
      for (
        var n, s = (yt[t] || []).concat(yt["*"]), o = 0, a = s.length;
        a > o;
        o++
      )
        if ((n = s[o].call(i, t, e))) return n;
    }
    function O(e, t, i) {
      var n,
        s,
        o,
        a,
        r,
        l,
        c,
        u = this,
        h = {},
        d = e.style,
        p = e.nodeType && De(e),
        f = se._data(e, "fxshow");
      (i.queue ||
        ((r = se._queueHooks(e, "fx")),
        null == r.unqueued &&
          ((r.unqueued = 0),
          (l = r.empty.fire),
          (r.empty.fire = function () {
            r.unqueued || l();
          })),
        r.unqueued++,
        u.always(function () {
          u.always(function () {
            (r.unqueued--, se.queue(e, "fx").length || r.empty.fire());
          });
        })),
        1 === e.nodeType &&
          ("height" in t || "width" in t) &&
          ((i.overflow = [d.overflow, d.overflowX, d.overflowY]),
          (c = se.css(e, "display")),
          "inline" ===
            ("none" === c ? se._data(e, "olddisplay") || T(e.nodeName) : c) &&
            "none" === se.css(e, "float") &&
            (ie.inlineBlockNeedsLayout && "inline" !== T(e.nodeName)
              ? (d.zoom = 1)
              : (d.display = "inline-block"))),
        i.overflow &&
          ((d.overflow = "hidden"),
          ie.shrinkWrapBlocks() ||
            u.always(function () {
              ((d.overflow = i.overflow[0]),
                (d.overflowX = i.overflow[1]),
                (d.overflowY = i.overflow[2]));
            })));
      for (n in t)
        if (((s = t[n]), ft.exec(s))) {
          if (
            (delete t[n],
            (o = o || "toggle" === s),
            s === (p ? "hide" : "show"))
          ) {
            if ("show" !== s || !f || void 0 === f[n]) continue;
            p = !0;
          }
          h[n] = (f && f[n]) || se.style(e, n);
        } else c = void 0;
      if (se.isEmptyObject(h))
        "inline" === ("none" === c ? T(e.nodeName) : c) && (d.display = c);
      else {
        (f ? "hidden" in f && (p = f.hidden) : (f = se._data(e, "fxshow", {})),
          o && (f.hidden = !p),
          p
            ? se(e).show()
            : u.done(function () {
                se(e).hide();
              }),
          u.done(function () {
            var t;
            se._removeData(e, "fxshow");
            for (t in h) se.style(e, t, h[t]);
          }));
        for (n in h)
          ((a = F(p ? f[n] : 0, n, u)),
            n in f ||
              ((f[n] = a.start),
              p &&
                ((a.end = a.start),
                (a.start = "width" === n || "height" === n ? 1 : 0))));
      }
    }
    function H(e, t) {
      var i, n, s, o, a;
      for (i in e)
        if (
          ((n = se.camelCase(i)),
          (s = t[n]),
          (o = e[i]),
          se.isArray(o) && ((s = o[1]), (o = e[i] = o[0])),
          i !== n && ((e[n] = o), delete e[i]),
          (a = se.cssHooks[n]) && "expand" in a)
        ) {
          ((o = a.expand(o)), delete e[n]);
          for (i in o) i in e || ((e[i] = o[i]), (t[i] = s));
        } else t[n] = s;
    }
    function j(e, t, i) {
      var n,
        s,
        o = 0,
        a = vt.length,
        r = se.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (s) return !1;
          for (
            var t = dt || M(),
              i = Math.max(0, c.startTime + c.duration - t),
              n = i / c.duration || 0,
              o = 1 - n,
              a = 0,
              l = c.tweens.length;
            l > a;
            a++
          )
            c.tweens[a].run(o);
          return (
            r.notifyWith(e, [c, o, i]),
            1 > o && l ? i : (r.resolveWith(e, [c]), !1)
          );
        },
        c = r.promise({
          elem: e,
          props: se.extend({}, t),
          opts: se.extend(!0, { specialEasing: {} }, i),
          originalProperties: t,
          originalOptions: i,
          startTime: dt || M(),
          duration: i.duration,
          tweens: [],
          createTween: function (t, i) {
            var n = se.Tween(
              e,
              c.opts,
              t,
              i,
              c.opts.specialEasing[t] || c.opts.easing,
            );
            return (c.tweens.push(n), n);
          },
          stop: function (t) {
            var i = 0,
              n = t ? c.tweens.length : 0;
            if (s) return this;
            for (s = !0; n > i; i++) c.tweens[i].run(1);
            return (
              t ? r.resolveWith(e, [c, t]) : r.rejectWith(e, [c, t]),
              this
            );
          },
        }),
        u = c.props;
      for (H(u, c.opts.specialEasing); a > o; o++)
        if ((n = vt[o].call(c, e, u, c.opts))) return n;
      return (
        se.map(u, F, c),
        se.isFunction(c.opts.start) && c.opts.start.call(e, c),
        se.fx.timer(se.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always)
      );
    }
    function L(e) {
      return function (t, i) {
        "string" != typeof t && ((i = t), (t = "*"));
        var n,
          s = 0,
          o = t.toLowerCase().match(ye) || [];
        if (se.isFunction(i))
          for (; (n = o[s++]); )
            "+" === n.charAt(0)
              ? ((n = n.slice(1) || "*"), (e[n] = e[n] || []).unshift(i))
              : (e[n] = e[n] || []).push(i);
      };
    }
    function z(e, t, i, n) {
      function s(r) {
        var l;
        return (
          (o[r] = !0),
          se.each(e[r] || [], function (e, r) {
            var c = r(t, i, n);
            return "string" != typeof c || a || o[c]
              ? a
                ? !(l = c)
                : void 0
              : (t.dataTypes.unshift(c), s(c), !1);
          }),
          l
        );
      }
      var o = {},
        a = e === Wt;
      return s(t.dataTypes[0]) || (!o["*"] && s("*"));
    }
    function R(e, t) {
      var i,
        n,
        s = se.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
      return (i && se.extend(!0, e, i), e);
    }
    function W(e, t, i) {
      for (var n, s, o, a, r = e.contents, l = e.dataTypes; "*" === l[0]; )
        (l.shift(),
          void 0 === s &&
            (s = e.mimeType || t.getResponseHeader("Content-Type")));
      if (s)
        for (a in r)
          if (r[a] && r[a].test(s)) {
            l.unshift(a);
            break;
          }
      if (l[0] in i) o = l[0];
      else {
        for (a in i) {
          if (!l[0] || e.converters[a + " " + l[0]]) {
            o = a;
            break;
          }
          n || (n = a);
        }
        o = o || n;
      }
      return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0;
    }
    function B(e, t, i, n) {
      var s,
        o,
        a,
        r,
        l,
        c = {},
        u = e.dataTypes.slice();
      if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
      for (o = u.shift(); o; )
        if (
          (e.responseFields[o] && (i[e.responseFields[o]] = t),
          !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (l = o),
          (o = u.shift()))
        )
          if ("*" === o) o = l;
          else if ("*" !== l && l !== o) {
            if (!(a = c[l + " " + o] || c["* " + o]))
              for (s in c)
                if (
                  ((r = s.split(" ")),
                  r[1] === o && (a = c[l + " " + r[0]] || c["* " + r[0]]))
                ) {
                  !0 === a
                    ? (a = c[s])
                    : !0 !== c[s] && ((o = r[0]), u.unshift(r[1]));
                  break;
                }
            if (!0 !== a)
              if (a && e["throws"]) t = a(t);
              else
                try {
                  t = a(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + l + " to " + o,
                  };
                }
          }
      return { state: "success", data: t };
    }
    function q(e, t, i, n) {
      var s;
      if (se.isArray(t))
        se.each(t, function (t, s) {
          i || Kt.test(e)
            ? n(e, s)
            : q(e + "[" + ("object" == typeof s ? t : "") + "]", s, i, n);
        });
      else if (i || "object" !== se.type(t)) n(e, t);
      else for (s in t) q(e + "[" + s + "]", t[s], i, n);
    }
    function K() {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    }
    function Y() {
      try {
        return new e.ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
    function U(e) {
      return se.isWindow(e)
        ? e
        : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    var X = [],
      V = X.slice,
      Q = X.concat,
      G = X.push,
      J = X.indexOf,
      Z = {},
      ee = Z.toString,
      te = Z.hasOwnProperty,
      ie = {},
      ne = "1.11.2",
      se = function (e, t) {
        return new se.fn.init(e, t);
      },
      oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ae = /^-ms-/,
      re = /-([\da-z])/gi,
      le = function (e, t) {
        return t.toUpperCase();
      };
    ((se.fn = se.prototype =
      {
        jquery: ne,
        constructor: se,
        selector: "",
        length: 0,
        toArray: function () {
          return V.call(this);
        },
        get: function (e) {
          return null != e
            ? 0 > e
              ? this[e + this.length]
              : this[e]
            : V.call(this);
        },
        pushStack: function (e) {
          var t = se.merge(this.constructor(), e);
          return ((t.prevObject = this), (t.context = this.context), t);
        },
        each: function (e, t) {
          return se.each(this, e, t);
        },
        map: function (e) {
          return this.pushStack(
            se.map(this, function (t, i) {
              return e.call(t, i, t);
            }),
          );
        },
        slice: function () {
          return this.pushStack(V.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            i = +e + (0 > e ? t : 0);
          return this.pushStack(i >= 0 && t > i ? [this[i]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor(null);
        },
        push: G,
        sort: X.sort,
        splice: X.splice,
      }),
      (se.extend = se.fn.extend =
        function () {
          var e,
            t,
            i,
            n,
            s,
            o,
            a = arguments[0] || {},
            r = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof a && ((c = a), (a = arguments[r] || {}), r++),
              "object" == typeof a || se.isFunction(a) || (a = {}),
              r === l && ((a = this), r--);
            l > r;
            r++
          )
            if (null != (s = arguments[r]))
              for (n in s)
                ((e = a[n]),
                  (i = s[n]),
                  a !== i &&
                    (c && i && (se.isPlainObject(i) || (t = se.isArray(i)))
                      ? (t
                          ? ((t = !1), (o = e && se.isArray(e) ? e : []))
                          : (o = e && se.isPlainObject(e) ? e : {}),
                        (a[n] = se.extend(c, o, i)))
                      : void 0 !== i && (a[n] = i)));
          return a;
        }),
      se.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return "function" === se.type(e);
        },
        isArray:
          Array.isArray ||
          function (e) {
            return "array" === se.type(e);
          },
        isWindow: function (e) {
          return null != e && e == e.window;
        },
        isNumeric: function (e) {
          return !se.isArray(e) && e - parseFloat(e) + 1 >= 0;
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        isPlainObject: function (e) {
          var t;
          if (!e || "object" !== se.type(e) || e.nodeType || se.isWindow(e))
            return !1;
          try {
            if (
              e.constructor &&
              !te.call(e, "constructor") &&
              !te.call(e.constructor.prototype, "isPrototypeOf")
            )
              return !1;
          } catch (e) {
            return !1;
          }
          if (ie.ownLast) for (t in e) return te.call(e, t);
          for (t in e);
          return void 0 === t || te.call(e, t);
        },
        type: function (e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
              ? Z[ee.call(e)] || "object"
              : typeof e;
        },
        globalEval: function (t) {
          t &&
            se.trim(t) &&
            (
              e.execScript ||
              function (t) {
                e.eval.call(e, t);
              }
            )(t);
        },
        camelCase: function (e) {
          return e.replace(ae, "ms-").replace(re, le);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t, n) {
          var s = 0,
            o = e.length,
            a = i(e);
          if (n) {
            if (a) for (; o > s && !1 !== t.apply(e[s], n); s++);
            else for (s in e) if (!1 === t.apply(e[s], n)) break;
          } else if (a) for (; o > s && !1 !== t.call(e[s], s, e[s]); s++);
          else for (s in e) if (!1 === t.call(e[s], s, e[s])) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(oe, "");
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (i(Object(e))
                ? se.merge(n, "string" == typeof e ? [e] : e)
                : G.call(n, e)),
            n
          );
        },
        inArray: function (e, t, i) {
          var n;
          if (t) {
            if (J) return J.call(t, e, i);
            for (
              n = t.length, i = i ? (0 > i ? Math.max(0, n + i) : i) : 0;
              n > i;
              i++
            )
              if (i in t && t[i] === e) return i;
          }
          return -1;
        },
        merge: function (e, t) {
          for (var i = +t.length, n = 0, s = e.length; i > n; ) e[s++] = t[n++];
          if (i !== i) for (; void 0 !== t[n]; ) e[s++] = t[n++];
          return ((e.length = s), e);
        },
        grep: function (e, t, i) {
          for (var n = [], s = 0, o = e.length, a = !i; o > s; s++)
            !t(e[s], s) !== a && n.push(e[s]);
          return n;
        },
        map: function (e, t, n) {
          var s,
            o = 0,
            a = e.length,
            r = i(e),
            l = [];
          if (r) for (; a > o; o++) null != (s = t(e[o], o, n)) && l.push(s);
          else for (o in e) null != (s = t(e[o], o, n)) && l.push(s);
          return Q.apply([], l);
        },
        guid: 1,
        proxy: function (e, t) {
          var i, n, s;
          return (
            "string" == typeof t && ((s = e[t]), (t = e), (e = s)),
            se.isFunction(e)
              ? ((i = V.call(arguments, 2)),
                (n = function () {
                  return e.apply(t || this, i.concat(V.call(arguments)));
                }),
                (n.guid = e.guid = e.guid || se.guid++),
                n)
              : void 0
          );
        },
        now: function () {
          return +new Date();
        },
        support: ie,
      }),
      se.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " ",
        ),
        function (e, t) {
          Z["[object " + t + "]"] = t.toLowerCase();
        },
      ));
    var ce = (function (e) {
      function t(e, t, i, n) {
        var s, o, a, r, l, c, h, p, f, m;
        if (
          ((t ? t.ownerDocument || t : z) !== P && A(t),
          (t = t || P),
          (i = i || []),
          (r = t.nodeType),
          "string" != typeof e || !e || (1 !== r && 9 !== r && 11 !== r))
        )
          return i;
        if (!n && $) {
          if (11 !== r && (s = ye.exec(e)))
            if ((a = s[1])) {
              if (9 === r) {
                if (!(o = t.getElementById(a)) || !o.parentNode) return i;
                if (o.id === a) return (i.push(o), i);
              } else if (
                t.ownerDocument &&
                (o = t.ownerDocument.getElementById(a)) &&
                j(t, o) &&
                o.id === a
              )
                return (i.push(o), i);
            } else {
              if (s[2]) return (J.apply(i, t.getElementsByTagName(e)), i);
              if ((a = s[3]) && x.getElementsByClassName)
                return (J.apply(i, t.getElementsByClassName(a)), i);
            }
          if (x.qsa && (!F || !F.test(e))) {
            if (
              ((p = h = L),
              (f = t),
              (m = 1 !== r && e),
              1 === r && "object" !== t.nodeName.toLowerCase())
            ) {
              for (
                c = T(e),
                  (h = t.getAttribute("id"))
                    ? (p = h.replace(we, "\\$&"))
                    : t.setAttribute("id", p),
                  p = "[id='" + p + "'] ",
                  l = c.length;
                l--;
              )
                c[l] = p + d(c[l]);
              ((f = (be.test(e) && u(t.parentNode)) || t), (m = c.join(",")));
            }
            if (m)
              try {
                return (J.apply(i, f.querySelectorAll(m)), i);
              } catch (e) {
              } finally {
                h || t.removeAttribute("id");
              }
          }
        }
        return D(e.replace(le, "$1"), t, i, n);
      }
      function i() {
        function e(i, n) {
          return (
            t.push(i + " ") > _.cacheLength && delete e[t.shift()],
            (e[i + " "] = n)
          );
        }
        var t = [];
        return e;
      }
      function n(e) {
        return ((e[L] = !0), e);
      }
      function s(e) {
        var t = P.createElement("div");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          (t.parentNode && t.parentNode.removeChild(t), (t = null));
        }
      }
      function o(e, t) {
        for (var i = e.split("|"), n = e.length; n--; ) _.attrHandle[i[n]] = t;
      }
      function a(e, t) {
        var i = t && e,
          n =
            i &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || U) - (~e.sourceIndex || U);
        if (n) return n;
        if (i) for (; (i = i.nextSibling); ) if (i === t) return -1;
        return e ? 1 : -1;
      }
      function r(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }
      function l(e) {
        return function (t) {
          var i = t.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && t.type === e;
        };
      }
      function c(e) {
        return n(function (t) {
          return (
            (t = +t),
            n(function (i, n) {
              for (var s, o = e([], i.length, t), a = o.length; a--; )
                i[(s = o[a])] && (i[s] = !(n[s] = i[s]));
            })
          );
        });
      }
      function u(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      function h() {}
      function d(e) {
        for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
        return n;
      }
      function p(e, t, i) {
        var n = t.dir,
          s = i && "parentNode" === n,
          o = W++;
        return t.first
          ? function (t, i, o) {
              for (; (t = t[n]); ) if (1 === t.nodeType || s) return e(t, i, o);
            }
          : function (t, i, a) {
              var r,
                l,
                c = [R, o];
              if (a) {
                for (; (t = t[n]); )
                  if ((1 === t.nodeType || s) && e(t, i, a)) return !0;
              } else
                for (; (t = t[n]); )
                  if (1 === t.nodeType || s) {
                    if (
                      ((l = t[L] || (t[L] = {})),
                      (r = l[n]) && r[0] === R && r[1] === o)
                    )
                      return (c[2] = r[2]);
                    if (((l[n] = c), (c[2] = e(t, i, a)))) return !0;
                  }
            };
      }
      function f(e) {
        return e.length > 1
          ? function (t, i, n) {
              for (var s = e.length; s--; ) if (!e[s](t, i, n)) return !1;
              return !0;
            }
          : e[0];
      }
      function m(e, i, n) {
        for (var s = 0, o = i.length; o > s; s++) t(e, i[s], n);
        return n;
      }
      function g(e, t, i, n, s) {
        for (var o, a = [], r = 0, l = e.length, c = null != t; l > r; r++)
          (o = e[r]) && (!i || i(o, n, s)) && (a.push(o), c && t.push(r));
        return a;
      }
      function v(e, t, i, s, o, a) {
        return (
          s && !s[L] && (s = v(s)),
          o && !o[L] && (o = v(o, a)),
          n(function (n, a, r, l) {
            var c,
              u,
              h,
              d = [],
              p = [],
              f = a.length,
              v = n || m(t || "*", r.nodeType ? [r] : r, []),
              y = !e || (!n && t) ? v : g(v, d, e, r, l),
              b = i ? (o || (n ? e : f || s) ? [] : a) : y;
            if ((i && i(y, b, r, l), s))
              for (c = g(b, p), s(c, [], r, l), u = c.length; u--; )
                (h = c[u]) && (b[p[u]] = !(y[p[u]] = h));
            if (n) {
              if (o || e) {
                if (o) {
                  for (c = [], u = b.length; u--; )
                    (h = b[u]) && c.push((y[u] = h));
                  o(null, (b = []), c, l);
                }
                for (u = b.length; u--; )
                  (h = b[u]) &&
                    (c = o ? ee(n, h) : d[u]) > -1 &&
                    (n[c] = !(a[c] = h));
              }
            } else
              ((b = g(b === a ? b.splice(f, b.length) : b)),
                o ? o(null, a, b, l) : J.apply(a, b));
          })
        );
      }
      function y(e) {
        for (
          var t,
            i,
            n,
            s = e.length,
            o = _.relative[e[0].type],
            a = o || _.relative[" "],
            r = o ? 1 : 0,
            l = p(
              function (e) {
                return e === t;
              },
              a,
              !0,
            ),
            c = p(
              function (e) {
                return ee(t, e) > -1;
              },
              a,
              !0,
            ),
            u = [
              function (e, i, n) {
                var s =
                  (!o && (n || i !== E)) ||
                  ((t = i).nodeType ? l(e, i, n) : c(e, i, n));
                return ((t = null), s);
              },
            ];
          s > r;
          r++
        )
          if ((i = _.relative[e[r].type])) u = [p(f(u), i)];
          else {
            if (((i = _.filter[e[r].type].apply(null, e[r].matches)), i[L])) {
              for (n = ++r; s > n && !_.relative[e[n].type]; n++);
              return v(
                r > 1 && f(u),
                r > 1 &&
                  d(
                    e
                      .slice(0, r - 1)
                      .concat({ value: " " === e[r - 2].type ? "*" : "" }),
                  ).replace(le, "$1"),
                i,
                n > r && y(e.slice(r, n)),
                s > n && y((e = e.slice(n))),
                s > n && d(e),
              );
            }
            u.push(i);
          }
        return f(u);
      }
      function b(e, i) {
        var s = i.length > 0,
          o = e.length > 0,
          a = function (n, a, r, l, c) {
            var u,
              h,
              d,
              p = 0,
              f = "0",
              m = n && [],
              v = [],
              y = E,
              b = n || (o && _.find.TAG("*", c)),
              w = (R += null == y ? 1 : Math.random() || 0.1),
              x = b.length;
            for (c && (E = a !== P && a); f !== x && null != (u = b[f]); f++) {
              if (o && u) {
                for (h = 0; (d = e[h++]); )
                  if (d(u, a, r)) {
                    l.push(u);
                    break;
                  }
                c && (R = w);
              }
              s && ((u = !d && u) && p--, n && m.push(u));
            }
            if (((p += f), s && f !== p)) {
              for (h = 0; (d = i[h++]); ) d(m, v, a, r);
              if (n) {
                if (p > 0) for (; f--; ) m[f] || v[f] || (v[f] = Q.call(l));
                v = g(v);
              }
              (J.apply(l, v),
                c && !n && v.length > 0 && p + i.length > 1 && t.uniqueSort(l));
            }
            return (c && ((R = w), (E = y)), m);
          };
        return s ? n(a) : a;
      }
      var w,
        x,
        _,
        k,
        C,
        T,
        S,
        D,
        E,
        I,
        N,
        A,
        P,
        M,
        $,
        F,
        O,
        H,
        j,
        L = "sizzle" + 1 * new Date(),
        z = e.document,
        R = 0,
        W = 0,
        B = i(),
        q = i(),
        K = i(),
        Y = function (e, t) {
          return (e === t && (N = !0), 0);
        },
        U = 1 << 31,
        X = {}.hasOwnProperty,
        V = [],
        Q = V.pop,
        G = V.push,
        J = V.push,
        Z = V.slice,
        ee = function (e, t) {
          for (var i = 0, n = e.length; n > i; i++) if (e[i] === t) return i;
          return -1;
        },
        te =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ie = "[\\x20\\t\\r\\n\\f]",
        ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        se = ne.replace("w", "w#"),
        oe =
          "\\[" +
          ie +
          "*(" +
          ne +
          ")(?:" +
          ie +
          "*([*^$|!~]?=)" +
          ie +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          se +
          "))|)" +
          ie +
          "*\\]",
        ae =
          ":(" +
          ne +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          oe +
          ")*)|.*)\\)|)",
        re = new RegExp(ie + "+", "g"),
        le = new RegExp(
          "^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$",
          "g",
        ),
        ce = new RegExp("^" + ie + "*," + ie + "*"),
        ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
        he = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
        de = new RegExp(ae),
        pe = new RegExp("^" + se + "$"),
        fe = {
          ID: new RegExp("^#(" + ne + ")"),
          CLASS: new RegExp("^\\.(" + ne + ")"),
          TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + oe),
          PSEUDO: new RegExp("^" + ae),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              ie +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              ie +
              "*(?:([+-]|)" +
              ie +
              "*(\\d+)|))" +
              ie +
              "*\\)|)",
            "i",
          ),
          bool: new RegExp("^(?:" + te + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              ie +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ie +
              "*((?:-\\d)?\\d*)" +
              ie +
              "*\\)|)(?=[^-]|$)",
            "i",
          ),
        },
        me = /^(?:input|select|textarea|button)$/i,
        ge = /^h\d$/i,
        ve = /^[^{]+\{\s*\[native \w/,
        ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        be = /[+~]/,
        we = /'|\\/g,
        xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
        _e = function (e, t, i) {
          var n = "0x" + t - 65536;
          return n !== n || i
            ? t
            : 0 > n
              ? String.fromCharCode(n + 65536)
              : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
        },
        ke = function () {
          A();
        };
      try {
        (J.apply((V = Z.call(z.childNodes)), z.childNodes),
          V[z.childNodes.length].nodeType);
      } catch (e) {
        J = {
          apply: V.length
            ? function (e, t) {
                G.apply(e, Z.call(t));
              }
            : function (e, t) {
                for (var i = e.length, n = 0; (e[i++] = t[n++]); );
                e.length = i - 1;
              },
        };
      }
      ((x = t.support = {}),
        (C = t.isXML =
          function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
          }),
        (A = t.setDocument =
          function (e) {
            var t,
              i,
              n = e ? e.ownerDocument || e : z;
            return n !== P && 9 === n.nodeType && n.documentElement
              ? ((P = n),
                (M = n.documentElement),
                (i = n.defaultView),
                i &&
                  i !== i.top &&
                  (i.addEventListener
                    ? i.addEventListener("unload", ke, !1)
                    : i.attachEvent && i.attachEvent("onunload", ke)),
                ($ = !C(n)),
                (x.attributes = s(function (e) {
                  return ((e.className = "i"), !e.getAttribute("className"));
                })),
                (x.getElementsByTagName = s(function (e) {
                  return (
                    e.appendChild(n.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (x.getElementsByClassName = ve.test(n.getElementsByClassName)),
                (x.getById = s(function (e) {
                  return (
                    (M.appendChild(e).id = L),
                    !n.getElementsByName || !n.getElementsByName(L).length
                  );
                })),
                x.getById
                  ? ((_.find.ID = function (e, t) {
                      if ("undefined" != typeof t.getElementById && $) {
                        var i = t.getElementById(e);
                        return i && i.parentNode ? [i] : [];
                      }
                    }),
                    (_.filter.ID = function (e) {
                      var t = e.replace(xe, _e);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }))
                  : (delete _.find.ID,
                    (_.filter.ID = function (e) {
                      var t = e.replace(xe, _e);
                      return function (e) {
                        var i =
                          "undefined" != typeof e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return i && i.value === t;
                      };
                    })),
                (_.find.TAG = x.getElementsByTagName
                  ? function (e, t) {
                      return "undefined" != typeof t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : x.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                    }
                  : function (e, t) {
                      var i,
                        n = [],
                        s = 0,
                        o = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (i = o[s++]); ) 1 === i.nodeType && n.push(i);
                        return n;
                      }
                      return o;
                    }),
                (_.find.CLASS =
                  x.getElementsByClassName &&
                  function (e, t) {
                    return $ ? t.getElementsByClassName(e) : void 0;
                  }),
                (O = []),
                (F = []),
                (x.qsa = ve.test(n.querySelectorAll)) &&
                  (s(function (e) {
                    ((M.appendChild(e).innerHTML =
                      "<a id='" +
                      L +
                      "'></a><select id='" +
                      L +
                      "-\f]' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        F.push("[*^$]=" + ie + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        F.push("\\[" + ie + "*(?:value|" + te + ")"),
                      e.querySelectorAll("[id~=" + L + "-]").length ||
                        F.push("~="),
                      e.querySelectorAll(":checked").length ||
                        F.push(":checked"),
                      e.querySelectorAll("a#" + L + "+*").length ||
                        F.push(".#.+[+~]"));
                  }),
                  s(function (e) {
                    var t = n.createElement("input");
                    (t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        F.push("name" + ie + "*[*^$|!~]?="),
                      e.querySelectorAll(":enabled").length ||
                        F.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      F.push(",.*:"));
                  })),
                (x.matchesSelector = ve.test(
                  (H =
                    M.matches ||
                    M.webkitMatchesSelector ||
                    M.mozMatchesSelector ||
                    M.oMatchesSelector ||
                    M.msMatchesSelector),
                )) &&
                  s(function (e) {
                    ((x.disconnectedMatch = H.call(e, "div")),
                      H.call(e, "[s!='']:x"),
                      O.push("!=", ae));
                  }),
                (F = F.length && new RegExp(F.join("|"))),
                (O = O.length && new RegExp(O.join("|"))),
                (t = ve.test(M.compareDocumentPosition)),
                (j =
                  t || ve.test(M.contains)
                    ? function (e, t) {
                        var i = 9 === e.nodeType ? e.documentElement : e,
                          n = t && t.parentNode;
                        return (
                          e === n ||
                          !(
                            !n ||
                            1 !== n.nodeType ||
                            !(i.contains
                              ? i.contains(n)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(n))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (Y = t
                  ? function (e, t) {
                      if (e === t) return ((N = !0), 0);
                      var i =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        i ||
                        ((i =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & i ||
                        (!x.sortDetached && t.compareDocumentPosition(e) === i)
                          ? e === n || (e.ownerDocument === z && j(z, e))
                            ? -1
                            : t === n || (t.ownerDocument === z && j(z, t))
                              ? 1
                              : I
                                ? ee(I, e) - ee(I, t)
                                : 0
                          : 4 & i
                            ? -1
                            : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return ((N = !0), 0);
                      var i,
                        s = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        l = [e],
                        c = [t];
                      if (!o || !r)
                        return e === n
                          ? -1
                          : t === n
                            ? 1
                            : o
                              ? -1
                              : r
                                ? 1
                                : I
                                  ? ee(I, e) - ee(I, t)
                                  : 0;
                      if (o === r) return a(e, t);
                      for (i = e; (i = i.parentNode); ) l.unshift(i);
                      for (i = t; (i = i.parentNode); ) c.unshift(i);
                      for (; l[s] === c[s]; ) s++;
                      return s
                        ? a(l[s], c[s])
                        : l[s] === z
                          ? -1
                          : c[s] === z
                            ? 1
                            : 0;
                    }),
                n)
              : P;
          }),
        (t.matches = function (e, i) {
          return t(e, null, null, i);
        }),
        (t.matchesSelector = function (e, i) {
          if (
            ((e.ownerDocument || e) !== P && A(e),
            (i = i.replace(he, "='$1']")),
            !(!x.matchesSelector || !$ || (O && O.test(i)) || (F && F.test(i))))
          )
            try {
              var n = H.call(e, i);
              if (
                n ||
                x.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return n;
            } catch (e) {}
          return t(i, P, null, [e]).length > 0;
        }),
        (t.contains = function (e, t) {
          return ((e.ownerDocument || e) !== P && A(e), j(e, t));
        }),
        (t.attr = function (e, t) {
          (e.ownerDocument || e) !== P && A(e);
          var i = _.attrHandle[t.toLowerCase()],
            n =
              i && X.call(_.attrHandle, t.toLowerCase()) ? i(e, t, !$) : void 0;
          return void 0 !== n
            ? n
            : x.attributes || !$
              ? e.getAttribute(t)
              : (n = e.getAttributeNode(t)) && n.specified
                ? n.value
                : null;
        }),
        (t.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (t.uniqueSort = function (e) {
          var t,
            i = [],
            n = 0,
            s = 0;
          if (
            ((N = !x.detectDuplicates),
            (I = !x.sortStable && e.slice(0)),
            e.sort(Y),
            N)
          ) {
            for (; (t = e[s++]); ) t === e[s] && (n = i.push(s));
            for (; n--; ) e.splice(i[n], 1);
          }
          return ((I = null), e);
        }),
        (k = t.getText =
          function (e) {
            var t,
              i = "",
              n = 0,
              s = e.nodeType;
            if (s) {
              if (1 === s || 9 === s || 11 === s) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) i += k(e);
              } else if (3 === s || 4 === s) return e.nodeValue;
            } else for (; (t = e[n++]); ) i += k(t);
            return i;
          }),
        (_ = t.selectors =
          {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(xe, _e)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(xe, _e)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || t.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && t.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  i = !e[6] && e[2];
                return fe.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : i &&
                        de.test(i) &&
                        (t = T(i, !0)) &&
                        (t = i.indexOf(")", i.length - t) - i.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(xe, _e).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = B[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) &&
                    B(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          ("undefined" != typeof e.getAttribute &&
                            e.getAttribute("class")) ||
                          "",
                      );
                    }))
                );
              },
              ATTR: function (e, i, n) {
                return function (s) {
                  var o = t.attr(s, e);
                  return null == o
                    ? "!=" === i
                    : !i ||
                        ((o += ""),
                        "=" === i
                          ? o === n
                          : "!=" === i
                            ? o !== n
                            : "^=" === i
                              ? n && 0 === o.indexOf(n)
                              : "*=" === i
                                ? n && o.indexOf(n) > -1
                                : "$=" === i
                                  ? n && o.slice(-n.length) === n
                                  : "~=" === i
                                    ? (" " + o.replace(re, " ") + " ").indexOf(
                                        n,
                                      ) > -1
                                    : "|=" === i &&
                                      (o === n ||
                                        o.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (e, t, i, n, s) {
                var o = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  r = "of-type" === t;
                return 1 === n && 0 === s
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, i, l) {
                      var c,
                        u,
                        h,
                        d,
                        p,
                        f,
                        m = o !== a ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        v = r && t.nodeName.toLowerCase(),
                        y = !l && !r;
                      if (g) {
                        if (o) {
                          for (; m; ) {
                            for (h = t; (h = h[m]); )
                              if (
                                r
                                  ? h.nodeName.toLowerCase() === v
                                  : 1 === h.nodeType
                              )
                                return !1;
                            f = m = "only" === e && !f && "nextSibling";
                          }
                          return !0;
                        }
                        if (((f = [a ? g.firstChild : g.lastChild]), a && y)) {
                          for (
                            u = g[L] || (g[L] = {}),
                              c = u[e] || [],
                              p = c[0] === R && c[1],
                              d = c[0] === R && c[2],
                              h = p && g.childNodes[p];
                            (h = (++p && h && h[m]) || (d = p = 0) || f.pop());
                          )
                            if (1 === h.nodeType && ++d && h === t) {
                              u[e] = [R, p, d];
                              break;
                            }
                        } else if (
                          y &&
                          (c = (t[L] || (t[L] = {}))[e]) &&
                          c[0] === R
                        )
                          d = c[1];
                        else
                          for (
                            ;
                            (h =
                              (++p && h && h[m]) || (d = p = 0) || f.pop()) &&
                            ((r
                              ? h.nodeName.toLowerCase() !== v
                              : 1 !== h.nodeType) ||
                              !++d ||
                              (y && ((h[L] || (h[L] = {}))[e] = [R, d]),
                              h !== t));
                          );
                        return (d -= s) === n || (d % n == 0 && d / n >= 0);
                      }
                    };
              },
              PSEUDO: function (e, i) {
                var s,
                  o =
                    _.pseudos[e] ||
                    _.setFilters[e.toLowerCase()] ||
                    t.error("unsupported pseudo: " + e);
                return o[L]
                  ? o(i)
                  : o.length > 1
                    ? ((s = [e, e, "", i]),
                      _.setFilters.hasOwnProperty(e.toLowerCase())
                        ? n(function (e, t) {
                            for (var n, s = o(e, i), a = s.length; a--; )
                              ((n = ee(e, s[a])), (e[n] = !(t[n] = s[a])));
                          })
                        : function (e) {
                            return o(e, 0, s);
                          })
                    : o;
              },
            },
            pseudos: {
              not: n(function (e) {
                var t = [],
                  i = [],
                  s = S(e.replace(le, "$1"));
                return s[L]
                  ? n(function (e, t, i, n) {
                      for (var o, a = s(e, null, n, []), r = e.length; r--; )
                        (o = a[r]) && (e[r] = !(t[r] = o));
                    })
                  : function (e, n, o) {
                      return (
                        (t[0] = e),
                        s(t, null, o, i),
                        (t[0] = null),
                        !i.pop()
                      );
                    };
              }),
              has: n(function (e) {
                return function (i) {
                  return t(e, i).length > 0;
                };
              }),
              contains: n(function (e) {
                return (
                  (e = e.replace(xe, _e)),
                  function (t) {
                    return (
                      (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    );
                  }
                );
              }),
              lang: n(function (e) {
                return (
                  pe.test(e || "") || t.error("unsupported lang: " + e),
                  (e = e.replace(xe, _e).toLowerCase()),
                  function (t) {
                    var i;
                    do {
                      if (
                        (i = $
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (i = i.toLowerCase()) === e ||
                          0 === i.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var i = e.location && e.location.hash;
                return i && i.slice(1) === t.id;
              },
              root: function (e) {
                return e === M;
              },
              focus: function (e) {
                return (
                  e === P.activeElement &&
                  (!P.hasFocus || P.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: function (e) {
                return !1 === e.disabled;
              },
              disabled: function (e) {
                return !0 === e.disabled;
              },
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex,
                  !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !_.pseudos.empty(e);
              },
              header: function (e) {
                return ge.test(e.nodeName);
              },
              input: function (e) {
                return me.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: c(function () {
                return [0];
              }),
              last: c(function (e, t) {
                return [t - 1];
              }),
              eq: c(function (e, t, i) {
                return [0 > i ? i + t : i];
              }),
              even: c(function (e, t) {
                for (var i = 0; t > i; i += 2) e.push(i);
                return e;
              }),
              odd: c(function (e, t) {
                for (var i = 1; t > i; i += 2) e.push(i);
                return e;
              }),
              lt: c(function (e, t, i) {
                for (var n = 0 > i ? i + t : i; --n >= 0; ) e.push(n);
                return e;
              }),
              gt: c(function (e, t, i) {
                for (var n = 0 > i ? i + t : i; ++n < t; ) e.push(n);
                return e;
              }),
            },
          }),
        (_.pseudos.nth = _.pseudos.eq));
      for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        _.pseudos[w] = r(w);
      for (w in { submit: !0, reset: !0 }) _.pseudos[w] = l(w);
      return (
        (h.prototype = _.filters = _.pseudos),
        (_.setFilters = new h()),
        (T = t.tokenize =
          function (e, i) {
            var n,
              s,
              o,
              a,
              r,
              l,
              c,
              u = q[e + " "];
            if (u) return i ? 0 : u.slice(0);
            for (r = e, l = [], c = _.preFilter; r; ) {
              ((!n || (s = ce.exec(r))) &&
                (s && (r = r.slice(s[0].length) || r), l.push((o = []))),
                (n = !1),
                (s = ue.exec(r)) &&
                  ((n = s.shift()),
                  o.push({ value: n, type: s[0].replace(le, " ") }),
                  (r = r.slice(n.length))));
              for (a in _.filter)
                !(s = fe[a].exec(r)) ||
                  (c[a] && !(s = c[a](s))) ||
                  ((n = s.shift()),
                  o.push({ value: n, type: a, matches: s }),
                  (r = r.slice(n.length)));
              if (!n) break;
            }
            return i ? r.length : r ? t.error(e) : q(e, l).slice(0);
          }),
        (S = t.compile =
          function (e, t) {
            var i,
              n = [],
              s = [],
              o = K[e + " "];
            if (!o) {
              for (t || (t = T(e)), i = t.length; i--; )
                ((o = y(t[i])), o[L] ? n.push(o) : s.push(o));
              ((o = K(e, b(s, n))), (o.selector = e));
            }
            return o;
          }),
        (D = t.select =
          function (e, t, i, n) {
            var s,
              o,
              a,
              r,
              l,
              c = "function" == typeof e && e,
              h = !n && T((e = c.selector || e));
            if (((i = i || []), 1 === h.length)) {
              if (
                ((o = h[0] = h[0].slice(0)),
                o.length > 2 &&
                  "ID" === (a = o[0]).type &&
                  x.getById &&
                  9 === t.nodeType &&
                  $ &&
                  _.relative[o[1].type])
              ) {
                if (
                  !(t = (_.find.ID(a.matches[0].replace(xe, _e), t) || [])[0])
                )
                  return i;
                (c && (t = t.parentNode),
                  (e = e.slice(o.shift().value.length)));
              }
              for (
                s = fe.needsContext.test(e) ? 0 : o.length;
                s-- && ((a = o[s]), !_.relative[(r = a.type)]);
              )
                if (
                  (l = _.find[r]) &&
                  (n = l(
                    a.matches[0].replace(xe, _e),
                    (be.test(o[0].type) && u(t.parentNode)) || t,
                  ))
                ) {
                  if ((o.splice(s, 1), !(e = n.length && d(o))))
                    return (J.apply(i, n), i);
                  break;
                }
            }
            return (
              (c || S(e, h))(n, t, !$, i, (be.test(e) && u(t.parentNode)) || t),
              i
            );
          }),
        (x.sortStable = L.split("").sort(Y).join("") === L),
        (x.detectDuplicates = !!N),
        A(),
        (x.sortDetached = s(function (e) {
          return 1 & e.compareDocumentPosition(P.createElement("div"));
        })),
        s(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          o("type|href|height|width", function (e, t, i) {
            return i
              ? void 0
              : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (x.attributes &&
          s(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          o("value", function (e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase()
              ? void 0
              : e.defaultValue;
          }),
        s(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          o(te, function (e, t, i) {
            var n;
            return i
              ? void 0
              : !0 === e[t]
                ? t.toLowerCase()
                : (n = e.getAttributeNode(t)) && n.specified
                  ? n.value
                  : null;
          }),
        t
      );
    })(e);
    ((se.find = ce),
      (se.expr = ce.selectors),
      (se.expr[":"] = se.expr.pseudos),
      (se.unique = ce.uniqueSort),
      (se.text = ce.getText),
      (se.isXMLDoc = ce.isXML),
      (se.contains = ce.contains));
    var ue = se.expr.match.needsContext,
      he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      de = /^.[^:#\[\.,]*$/;
    ((se.filter = function (e, t, i) {
      var n = t[0];
      return (
        i && (e = ":not(" + e + ")"),
        1 === t.length && 1 === n.nodeType
          ? se.find.matchesSelector(n, e)
            ? [n]
            : []
          : se.find.matches(
              e,
              se.grep(t, function (e) {
                return 1 === e.nodeType;
              }),
            )
      );
    }),
      se.fn.extend({
        find: function (e) {
          var t,
            i = [],
            n = this,
            s = n.length;
          if ("string" != typeof e)
            return this.pushStack(
              se(e).filter(function () {
                for (t = 0; s > t; t++) if (se.contains(n[t], this)) return !0;
              }),
            );
          for (t = 0; s > t; t++) se.find(e, n[t], i);
          return (
            (i = this.pushStack(s > 1 ? se.unique(i) : i)),
            (i.selector = this.selector ? this.selector + " " + e : e),
            i
          );
        },
        filter: function (e) {
          return this.pushStack(n(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(n(this, e || [], !0));
        },
        is: function (e) {
          return !!n(
            this,
            "string" == typeof e && ue.test(e) ? se(e) : e || [],
            !1,
          ).length;
        },
      }));
    var pe,
      fe = e.document,
      me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (((se.fn.init = function (e, t) {
      var i, n;
      if (!e) return this;
      if ("string" == typeof e) {
        if (
          !(i =
            "<" === e.charAt(0) &&
            ">" === e.charAt(e.length - 1) &&
            e.length >= 3
              ? [null, e, null]
              : me.exec(e)) ||
          (!i[1] && t)
        )
          return !t || t.jquery
            ? (t || pe).find(e)
            : this.constructor(t).find(e);
        if (i[1]) {
          if (
            ((t = t instanceof se ? t[0] : t),
            se.merge(
              this,
              se.parseHTML(
                i[1],
                t && t.nodeType ? t.ownerDocument || t : fe,
                !0,
              ),
            ),
            he.test(i[1]) && se.isPlainObject(t))
          )
            for (i in t)
              se.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this;
        }
        if ((n = fe.getElementById(i[2])) && n.parentNode) {
          if (n.id !== i[2]) return pe.find(e);
          ((this.length = 1), (this[0] = n));
        }
        return ((this.context = fe), (this.selector = e), this);
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : se.isFunction(e)
          ? "undefined" != typeof pe.ready
            ? pe.ready(e)
            : e(se)
          : (void 0 !== e.selector &&
              ((this.selector = e.selector), (this.context = e.context)),
            se.makeArray(e, this));
    }).prototype = se.fn),
      (pe = se(fe)));
    var ge = /^(?:parents|prev(?:Until|All))/,
      ve = { children: !0, contents: !0, next: !0, prev: !0 };
    (se.extend({
      dir: function (e, t, i) {
        for (
          var n = [], s = e[t];
          s &&
          9 !== s.nodeType &&
          (void 0 === i || 1 !== s.nodeType || !se(s).is(i));
        )
          (1 === s.nodeType && n.push(s), (s = s[t]));
        return n;
      },
      sibling: function (e, t) {
        for (var i = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && i.push(e);
        return i;
      },
    }),
      se.fn.extend({
        has: function (e) {
          var t,
            i = se(e, this),
            n = i.length;
          return this.filter(function () {
            for (t = 0; n > t; t++) if (se.contains(this, i[t])) return !0;
          });
        },
        closest: function (e, t) {
          for (
            var i,
              n = 0,
              s = this.length,
              o = [],
              a =
                ue.test(e) || "string" != typeof e
                  ? se(e, t || this.context)
                  : 0;
            s > n;
            n++
          )
            for (i = this[n]; i && i !== t; i = i.parentNode)
              if (
                i.nodeType < 11 &&
                (a
                  ? a.index(i) > -1
                  : 1 === i.nodeType && se.find.matchesSelector(i, e))
              ) {
                o.push(i);
                break;
              }
          return this.pushStack(o.length > 1 ? se.unique(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? se.inArray(this[0], se(e))
              : se.inArray(e.jquery ? e[0] : e, this)
            : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
        },
        add: function (e, t) {
          return this.pushStack(se.unique(se.merge(this.get(), se(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e),
          );
        },
      }),
      se.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return se.dir(e, "parentNode");
          },
          parentsUntil: function (e, t, i) {
            return se.dir(e, "parentNode", i);
          },
          next: function (e) {
            return s(e, "nextSibling");
          },
          prev: function (e) {
            return s(e, "previousSibling");
          },
          nextAll: function (e) {
            return se.dir(e, "nextSibling");
          },
          prevAll: function (e) {
            return se.dir(e, "previousSibling");
          },
          nextUntil: function (e, t, i) {
            return se.dir(e, "nextSibling", i);
          },
          prevUntil: function (e, t, i) {
            return se.dir(e, "previousSibling", i);
          },
          siblings: function (e) {
            return se.sibling((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return se.sibling(e.firstChild);
          },
          contents: function (e) {
            return se.nodeName(e, "iframe")
              ? e.contentDocument || e.contentWindow.document
              : se.merge([], e.childNodes);
          },
        },
        function (e, t) {
          se.fn[e] = function (i, n) {
            var s = se.map(this, t, i);
            return (
              "Until" !== e.slice(-5) && (n = i),
              n && "string" == typeof n && (s = se.filter(n, s)),
              this.length > 1 &&
                (ve[e] || (s = se.unique(s)), ge.test(e) && (s = s.reverse())),
              this.pushStack(s)
            );
          };
        },
      ));
    var ye = /\S+/g,
      be = {};
    ((se.Callbacks = function (e) {
      e = "string" == typeof e ? be[e] || o(e) : se.extend({}, e);
      var t,
        i,
        n,
        s,
        a,
        r,
        l = [],
        c = !e.once && [],
        u = function (o) {
          for (
            i = e.memory && o, n = !0, a = r || 0, r = 0, s = l.length, t = !0;
            l && s > a;
            a++
          )
            if (!1 === l[a].apply(o[0], o[1]) && e.stopOnFalse) {
              i = !1;
              break;
            }
          ((t = !1),
            l && (c ? c.length && u(c.shift()) : i ? (l = []) : h.disable()));
        },
        h = {
          add: function () {
            if (l) {
              var n = l.length;
              (!(function t(i) {
                se.each(i, function (i, n) {
                  var s = se.type(n);
                  "function" === s
                    ? (e.unique && h.has(n)) || l.push(n)
                    : n && n.length && "string" !== s && t(n);
                });
              })(arguments),
                t ? (s = l.length) : i && ((r = n), u(i)));
            }
            return this;
          },
          remove: function () {
            return (
              l &&
                se.each(arguments, function (e, i) {
                  for (var n; (n = se.inArray(i, l, n)) > -1; )
                    (l.splice(n, 1), t && (s >= n && s--, a >= n && a--));
                }),
              this
            );
          },
          has: function (e) {
            return e ? se.inArray(e, l) > -1 : !(!l || !l.length);
          },
          empty: function () {
            return ((l = []), (s = 0), this);
          },
          disable: function () {
            return ((l = c = i = void 0), this);
          },
          disabled: function () {
            return !l;
          },
          lock: function () {
            return ((c = void 0), i || h.disable(), this);
          },
          locked: function () {
            return !c;
          },
          fireWith: function (e, i) {
            return (
              !l ||
                (n && !c) ||
                ((i = i || []),
                (i = [e, i.slice ? i.slice() : i]),
                t ? c.push(i) : u(i)),
              this
            );
          },
          fire: function () {
            return (h.fireWith(this, arguments), this);
          },
          fired: function () {
            return !!n;
          },
        };
      return h;
    }),
      se.extend({
        Deferred: function (e) {
          var t = [
              ["resolve", "done", se.Callbacks("once memory"), "resolved"],
              ["reject", "fail", se.Callbacks("once memory"), "rejected"],
              ["notify", "progress", se.Callbacks("memory")],
            ],
            i = "pending",
            n = {
              state: function () {
                return i;
              },
              always: function () {
                return (s.done(arguments).fail(arguments), this);
              },
              then: function () {
                var e = arguments;
                return se
                  .Deferred(function (i) {
                    (se.each(t, function (t, o) {
                      var a = se.isFunction(e[t]) && e[t];
                      s[o[1]](function () {
                        var e = a && a.apply(this, arguments);
                        e && se.isFunction(e.promise)
                          ? e
                              .promise()
                              .done(i.resolve)
                              .fail(i.reject)
                              .progress(i.notify)
                          : i[o[0] + "With"](
                              this === n ? i.promise() : this,
                              a ? [e] : arguments,
                            );
                      });
                    }),
                      (e = null));
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? se.extend(e, n) : n;
              },
            },
            s = {};
          return (
            (n.pipe = n.then),
            se.each(t, function (e, o) {
              var a = o[2],
                r = o[3];
              ((n[o[1]] = a.add),
                r &&
                  a.add(
                    function () {
                      i = r;
                    },
                    t[1 ^ e][2].disable,
                    t[2][2].lock,
                  ),
                (s[o[0]] = function () {
                  return (
                    s[o[0] + "With"](this === s ? n : this, arguments),
                    this
                  );
                }),
                (s[o[0] + "With"] = a.fireWith));
            }),
            n.promise(s),
            e && e.call(s, s),
            s
          );
        },
        when: function (e) {
          var t,
            i,
            n,
            s = 0,
            o = V.call(arguments),
            a = o.length,
            r = 1 !== a || (e && se.isFunction(e.promise)) ? a : 0,
            l = 1 === r ? e : se.Deferred(),
            c = function (e, i, n) {
              return function (s) {
                ((i[e] = this),
                  (n[e] = arguments.length > 1 ? V.call(arguments) : s),
                  n === t ? l.notifyWith(i, n) : --r || l.resolveWith(i, n));
              };
            };
          if (a > 1)
            for (
              t = new Array(a), i = new Array(a), n = new Array(a);
              a > s;
              s++
            )
              o[s] && se.isFunction(o[s].promise)
                ? o[s]
                    .promise()
                    .done(c(s, n, o))
                    .fail(l.reject)
                    .progress(c(s, i, t))
                : --r;
          return (r || l.resolveWith(n, o), l.promise());
        },
      }));
    var we;
    ((se.fn.ready = function (e) {
      return (se.ready.promise().done(e), this);
    }),
      se.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? se.readyWait++ : se.ready(!0);
        },
        ready: function (e) {
          if (!0 === e ? !--se.readyWait : !se.isReady) {
            if (!fe.body) return setTimeout(se.ready);
            ((se.isReady = !0),
              (!0 !== e && --se.readyWait > 0) ||
                (we.resolveWith(fe, [se]),
                se.fn.triggerHandler &&
                  (se(fe).triggerHandler("ready"), se(fe).off("ready"))));
          }
        },
      }),
      (se.ready.promise = function (t) {
        if (!we)
          if (((we = se.Deferred()), "complete" === fe.readyState))
            setTimeout(se.ready);
          else if (fe.addEventListener)
            (fe.addEventListener("DOMContentLoaded", r, !1),
              e.addEventListener("load", r, !1));
          else {
            (fe.attachEvent("onreadystatechange", r),
              e.attachEvent("onload", r));
            var i = !1;
            try {
              i = null == e.frameElement && fe.documentElement;
            } catch (e) {}
            i &&
              i.doScroll &&
              (function e() {
                if (!se.isReady) {
                  try {
                    i.doScroll("left");
                  } catch (t) {
                    return setTimeout(e, 50);
                  }
                  (a(), se.ready());
                }
              })();
          }
        return we.promise(t);
      }));
    var xe,
      _e = "undefined";
    for (xe in se(ie)) break;
    ((ie.ownLast = "0" !== xe),
      (ie.inlineBlockNeedsLayout = !1),
      se(function () {
        var e, t, i, n;
        (i = fe.getElementsByTagName("body")[0]) &&
          i.style &&
          ((t = fe.createElement("div")),
          (n = fe.createElement("div")),
          (n.style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          i.appendChild(n).appendChild(t),
          typeof t.style.zoom !== _e &&
            ((t.style.cssText =
              "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (ie.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
            e && (i.style.zoom = 1)),
          i.removeChild(n));
      }),
      (function () {
        var e = fe.createElement("div");
        if (null == ie.deleteExpando) {
          ie.deleteExpando = !0;
          try {
            delete e.test;
          } catch (e) {
            ie.deleteExpando = !1;
          }
        }
        e = null;
      })(),
      (se.acceptData = function (e) {
        var t = se.noData[(e.nodeName + " ").toLowerCase()],
          i = +e.nodeType || 1;
        return (
          (1 === i || 9 === i) &&
          (!t || (!0 !== t && e.getAttribute("classid") === t))
        );
      }));
    var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Ce = /([A-Z])/g;
    (se.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      },
      hasData: function (e) {
        return (
          !!(e = e.nodeType ? se.cache[e[se.expando]] : e[se.expando]) && !c(e)
        );
      },
      data: function (e, t, i) {
        return u(e, t, i);
      },
      removeData: function (e, t) {
        return h(e, t);
      },
      _data: function (e, t, i) {
        return u(e, t, i, !0);
      },
      _removeData: function (e, t) {
        return h(e, t, !0);
      },
    }),
      se.fn.extend({
        data: function (e, t) {
          var i,
            n,
            s,
            o = this[0],
            a = o && o.attributes;
          if (void 0 === e) {
            if (
              this.length &&
              ((s = se.data(o)),
              1 === o.nodeType && !se._data(o, "parsedAttrs"))
            ) {
              for (i = a.length; i--; )
                a[i] &&
                  ((n = a[i].name),
                  0 === n.indexOf("data-") &&
                    ((n = se.camelCase(n.slice(5))), l(o, n, s[n])));
              se._data(o, "parsedAttrs", !0);
            }
            return s;
          }
          return "object" == typeof e
            ? this.each(function () {
                se.data(this, e);
              })
            : arguments.length > 1
              ? this.each(function () {
                  se.data(this, e, t);
                })
              : o
                ? l(o, e, se.data(o, e))
                : void 0;
        },
        removeData: function (e) {
          return this.each(function () {
            se.removeData(this, e);
          });
        },
      }),
      se.extend({
        queue: function (e, t, i) {
          var n;
          return e
            ? ((t = (t || "fx") + "queue"),
              (n = se._data(e, t)),
              i &&
                (!n || se.isArray(i)
                  ? (n = se._data(e, t, se.makeArray(i)))
                  : n.push(i)),
              n || [])
            : void 0;
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var i = se.queue(e, t),
            n = i.length,
            s = i.shift(),
            o = se._queueHooks(e, t),
            a = function () {
              se.dequeue(e, t);
            };
          ("inprogress" === s && ((s = i.shift()), n--),
            s &&
              ("fx" === t && i.unshift("inprogress"),
              delete o.stop,
              s.call(e, a, o)),
            !n && o && o.empty.fire());
        },
        _queueHooks: function (e, t) {
          var i = t + "queueHooks";
          return (
            se._data(e, i) ||
            se._data(e, i, {
              empty: se.Callbacks("once memory").add(function () {
                (se._removeData(e, t + "queue"), se._removeData(e, i));
              }),
            })
          );
        },
      }),
      se.fn.extend({
        queue: function (e, t) {
          var i = 2;
          return (
            "string" != typeof e && ((t = e), (e = "fx"), i--),
            arguments.length < i
              ? se.queue(this[0], e)
              : void 0 === t
                ? this
                : this.each(function () {
                    var i = se.queue(this, e, t);
                    (se._queueHooks(this, e),
                      "fx" === e &&
                        "inprogress" !== i[0] &&
                        se.dequeue(this, e));
                  })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            se.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var i,
            n = 1,
            s = se.Deferred(),
            o = this,
            a = this.length,
            r = function () {
              --n || s.resolveWith(o, [o]);
            };
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            a--;
          )
            (i = se._data(o[a], e + "queueHooks")) &&
              i.empty &&
              (n++, i.empty.add(r));
          return (r(), s.promise(t));
        },
      }));
    var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Se = ["Top", "Right", "Bottom", "Left"],
      De = function (e, t) {
        return (
          (e = t || e),
          "none" === se.css(e, "display") || !se.contains(e.ownerDocument, e)
        );
      },
      Ee = (se.access = function (e, t, i, n, s, o, a) {
        var r = 0,
          l = e.length,
          c = null == i;
        if ("object" === se.type(i)) {
          s = !0;
          for (r in i) se.access(e, t, r, i[r], !0, o, a);
        } else if (
          void 0 !== n &&
          ((s = !0),
          se.isFunction(n) || (a = !0),
          c &&
            (a
              ? (t.call(e, n), (t = null))
              : ((c = t),
                (t = function (e, t, i) {
                  return c.call(se(e), i);
                }))),
          t)
        )
          for (; l > r; r++) t(e[r], i, a ? n : n.call(e[r], r, t(e[r], i)));
        return s ? e : c ? t.call(e) : l ? t(e[0], i) : o;
      }),
      Ie = /^(?:checkbox|radio)$/i;
    (!(function () {
      var e = fe.createElement("input"),
        t = fe.createElement("div"),
        i = fe.createDocumentFragment();
      if (
        ((t.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (ie.leadingWhitespace = 3 === t.firstChild.nodeType),
        (ie.tbody = !t.getElementsByTagName("tbody").length),
        (ie.htmlSerialize = !!t.getElementsByTagName("link").length),
        (ie.html5Clone =
          "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML),
        (e.type = "checkbox"),
        (e.checked = !0),
        i.appendChild(e),
        (ie.appendChecked = e.checked),
        (t.innerHTML = "<textarea>x</textarea>"),
        (ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
        i.appendChild(t),
        (t.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
        (ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ie.noCloneEvent = !0),
        t.attachEvent &&
          (t.attachEvent("onclick", function () {
            ie.noCloneEvent = !1;
          }),
          t.cloneNode(!0).click()),
        null == ie.deleteExpando)
      ) {
        ie.deleteExpando = !0;
        try {
          delete t.test;
        } catch (e) {
          ie.deleteExpando = !1;
        }
      }
    })(),
      (function () {
        var t,
          i,
          n = fe.createElement("div");
        for (t in { submit: !0, change: !0, focusin: !0 })
          ((i = "on" + t),
            (ie[t + "Bubbles"] = i in e) ||
              (n.setAttribute(i, "t"),
              (ie[t + "Bubbles"] = !1 === n.attributes[i].expando)));
        n = null;
      })());
    var Ne = /^(?:input|select|textarea)$/i,
      Ae = /^key/,
      Pe = /^(?:mouse|pointer|contextmenu)|click/,
      Me = /^(?:focusinfocus|focusoutblur)$/,
      $e = /^([^.]*)(?:\.(.+)|)$/;
    ((se.event = {
      global: {},
      add: function (e, t, i, n, s) {
        var o,
          a,
          r,
          l,
          c,
          u,
          h,
          d,
          p,
          f,
          m,
          g = se._data(e);
        if (g) {
          for (
            i.handler && ((l = i), (i = l.handler), (s = l.selector)),
              i.guid || (i.guid = se.guid++),
              (a = g.events) || (a = g.events = {}),
              (u = g.handle) ||
                ((u = g.handle =
                  function (e) {
                    return typeof se === _e ||
                      (e && se.event.triggered === e.type)
                      ? void 0
                      : se.event.dispatch.apply(u.elem, arguments);
                  }),
                (u.elem = e)),
              t = (t || "").match(ye) || [""],
              r = t.length;
            r--;
          )
            ((o = $e.exec(t[r]) || []),
              (p = m = o[1]),
              (f = (o[2] || "").split(".").sort()),
              p &&
                ((c = se.event.special[p] || {}),
                (p = (s ? c.delegateType : c.bindType) || p),
                (c = se.event.special[p] || {}),
                (h = se.extend(
                  {
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && se.expr.match.needsContext.test(s),
                    namespace: f.join("."),
                  },
                  l,
                )),
                (d = a[p]) ||
                  ((d = a[p] = []),
                  (d.delegateCount = 0),
                  (c.setup && !1 !== c.setup.call(e, n, f, u)) ||
                    (e.addEventListener
                      ? e.addEventListener(p, u, !1)
                      : e.attachEvent && e.attachEvent("on" + p, u))),
                c.add &&
                  (c.add.call(e, h),
                  h.handler.guid || (h.handler.guid = i.guid)),
                s ? d.splice(d.delegateCount++, 0, h) : d.push(h),
                (se.event.global[p] = !0)));
          e = null;
        }
      },
      remove: function (e, t, i, n, s) {
        var o,
          a,
          r,
          l,
          c,
          u,
          h,
          d,
          p,
          f,
          m,
          g = se.hasData(e) && se._data(e);
        if (g && (u = g.events)) {
          for (t = (t || "").match(ye) || [""], c = t.length; c--; )
            if (
              ((r = $e.exec(t[c]) || []),
              (p = m = r[1]),
              (f = (r[2] || "").split(".").sort()),
              p)
            ) {
              for (
                h = se.event.special[p] || {},
                  p = (n ? h.delegateType : h.bindType) || p,
                  d = u[p] || [],
                  r =
                    r[2] &&
                    new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  l = o = d.length;
                o--;
              )
                ((a = d[o]),
                  (!s && m !== a.origType) ||
                    (i && i.guid !== a.guid) ||
                    (r && !r.test(a.namespace)) ||
                    (n && n !== a.selector && ("**" !== n || !a.selector)) ||
                    (d.splice(o, 1),
                    a.selector && d.delegateCount--,
                    h.remove && h.remove.call(e, a)));
              l &&
                !d.length &&
                ((h.teardown && !1 !== h.teardown.call(e, f, g.handle)) ||
                  se.removeEvent(e, p, g.handle),
                delete u[p]);
            } else for (p in u) se.event.remove(e, p + t[c], i, n, !0);
          se.isEmptyObject(u) && (delete g.handle, se._removeData(e, "events"));
        }
      },
      trigger: function (t, i, n, s) {
        var o,
          a,
          r,
          l,
          c,
          u,
          h,
          d = [n || fe],
          p = te.call(t, "type") ? t.type : t,
          f = te.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((r = u = n = n || fe),
          3 !== n.nodeType &&
            8 !== n.nodeType &&
            !Me.test(p + se.event.triggered) &&
            (p.indexOf(".") >= 0 &&
              ((f = p.split(".")), (p = f.shift()), f.sort()),
            (a = p.indexOf(":") < 0 && "on" + p),
            (t = t[se.expando]
              ? t
              : new se.Event(p, "object" == typeof t && t)),
            (t.isTrigger = s ? 2 : 3),
            (t.namespace = f.join(".")),
            (t.namespace_re = t.namespace
              ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = n),
            (i = null == i ? [t] : se.makeArray(i, [t])),
            (c = se.event.special[p] || {}),
            s || !c.trigger || !1 !== c.trigger.apply(n, i)))
        ) {
          if (!s && !c.noBubble && !se.isWindow(n)) {
            for (
              l = c.delegateType || p, Me.test(l + p) || (r = r.parentNode);
              r;
              r = r.parentNode
            )
              (d.push(r), (u = r));
            u === (n.ownerDocument || fe) &&
              d.push(u.defaultView || u.parentWindow || e);
          }
          for (h = 0; (r = d[h++]) && !t.isPropagationStopped(); )
            ((t.type = h > 1 ? l : c.bindType || p),
              (o =
                (se._data(r, "events") || {})[t.type] && se._data(r, "handle")),
              o && o.apply(r, i),
              (o = a && r[a]) &&
                o.apply &&
                se.acceptData(r) &&
                ((t.result = o.apply(r, i)),
                !1 === t.result && t.preventDefault()));
          if (
            ((t.type = p),
            !s &&
              !t.isDefaultPrevented() &&
              (!c._default || !1 === c._default.apply(d.pop(), i)) &&
              se.acceptData(n) &&
              a &&
              n[p] &&
              !se.isWindow(n))
          ) {
            ((u = n[a]), u && (n[a] = null), (se.event.triggered = p));
            try {
              n[p]();
            } catch (e) {}
            ((se.event.triggered = void 0), u && (n[a] = u));
          }
          return t.result;
        }
      },
      dispatch: function (e) {
        e = se.event.fix(e);
        var t,
          i,
          n,
          s,
          o,
          a = [],
          r = V.call(arguments),
          l = (se._data(this, "events") || {})[e.type] || [],
          c = se.event.special[e.type] || {};
        if (
          ((r[0] = e),
          (e.delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, e))
        ) {
          for (
            a = se.event.handlers.call(this, e, l), t = 0;
            (s = a[t++]) && !e.isPropagationStopped();
          )
            for (
              e.currentTarget = s.elem, o = 0;
              (n = s.handlers[o++]) && !e.isImmediatePropagationStopped();
            )
              (!e.namespace_re || e.namespace_re.test(n.namespace)) &&
                ((e.handleObj = n),
                (e.data = n.data),
                void 0 !==
                  (i = (
                    (se.event.special[n.origType] || {}).handle || n.handler
                  ).apply(s.elem, r)) &&
                  !1 === (e.result = i) &&
                  (e.preventDefault(), e.stopPropagation()));
          return (c.postDispatch && c.postDispatch.call(this, e), e.result);
        }
      },
      handlers: function (e, t) {
        var i,
          n,
          s,
          o,
          a = [],
          r = t.delegateCount,
          l = e.target;
        if (r && l.nodeType && (!e.button || "click" !== e.type))
          for (; l != this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
              for (s = [], o = 0; r > o; o++)
                ((n = t[o]),
                  (i = n.selector + " "),
                  void 0 === s[i] &&
                    (s[i] = n.needsContext
                      ? se(i, this).index(l) >= 0
                      : se.find(i, this, null, [l]).length),
                  s[i] && s.push(n));
              s.length && a.push({ elem: l, handlers: s });
            }
        return (
          r < t.length && a.push({ elem: this, handlers: t.slice(r) }),
          a
        );
      },
      fix: function (e) {
        if (e[se.expando]) return e;
        var t,
          i,
          n,
          s = e.type,
          o = e,
          a = this.fixHooks[s];
        for (
          a ||
            (this.fixHooks[s] = a =
              Pe.test(s) ? this.mouseHooks : Ae.test(s) ? this.keyHooks : {}),
            n = a.props ? this.props.concat(a.props) : this.props,
            e = new se.Event(o),
            t = n.length;
          t--;
        )
          ((i = n[t]), (e[i] = o[i]));
        return (
          e.target || (e.target = o.srcElement || fe),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          (e.metaKey = !!e.metaKey),
          a.filter ? a.filter(e, o) : e
        );
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " ",
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (e, t) {
          return (
            null == e.which &&
              (e.which = null != t.charCode ? t.charCode : t.keyCode),
            e
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
            " ",
          ),
        filter: function (e, t) {
          var i,
            n,
            s,
            o = t.button,
            a = t.fromElement;
          return (
            null == e.pageX &&
              null != t.clientX &&
              ((n = e.target.ownerDocument || fe),
              (s = n.documentElement),
              (i = n.body),
              (e.pageX =
                t.clientX +
                ((s && s.scrollLeft) || (i && i.scrollLeft) || 0) -
                ((s && s.clientLeft) || (i && i.clientLeft) || 0)),
              (e.pageY =
                t.clientY +
                ((s && s.scrollTop) || (i && i.scrollTop) || 0) -
                ((s && s.clientTop) || (i && i.clientTop) || 0))),
            !e.relatedTarget &&
              a &&
              (e.relatedTarget = a === e.target ? t.toElement : a),
            e.which ||
              void 0 === o ||
              (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
            e
          );
        },
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== f() && this.focus)
              try {
                return (this.focus(), !1);
              } catch (e) {}
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === f() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return se.nodeName(this, "input") &&
              "checkbox" === this.type &&
              this.click
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (e) {
            return se.nodeName(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
      simulate: function (e, t, i, n) {
        var s = se.extend(new se.Event(), i, {
          type: e,
          isSimulated: !0,
          originalEvent: {},
        });
        (n ? se.event.trigger(s, null, t) : se.event.dispatch.call(t, s),
          s.isDefaultPrevented() && i.preventDefault());
      },
    }),
      (se.removeEvent = fe.removeEventListener
        ? function (e, t, i) {
            e.removeEventListener && e.removeEventListener(t, i, !1);
          }
        : function (e, t, i) {
            var n = "on" + t;
            e.detachEvent &&
              (typeof e[n] === _e && (e[n] = null), e.detachEvent(n, i));
          }),
      (se.Event = function (e, t) {
        return this instanceof se.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? d
                    : p))
              : (this.type = e),
            t && se.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || se.now()),
            void (this[se.expando] = !0))
          : new se.Event(e, t);
      }),
      (se.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
          var e = this.originalEvent;
          ((this.isDefaultPrevented = d),
            e &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)));
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          ((this.isPropagationStopped = d),
            e &&
              (e.stopPropagation && e.stopPropagation(),
              (e.cancelBubble = !0)));
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          ((this.isImmediatePropagationStopped = d),
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation());
        },
      }),
      se.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          se.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var i,
                n = this,
                s = e.relatedTarget,
                o = e.handleObj;
              return (
                (!s || (s !== n && !se.contains(n, s))) &&
                  ((e.type = o.origType),
                  (i = o.handler.apply(this, arguments)),
                  (e.type = t)),
                i
              );
            },
          };
        },
      ),
      ie.submitBubbles ||
        (se.event.special.submit = {
          setup: function () {
            return (
              !se.nodeName(this, "form") &&
              void se.event.add(
                this,
                "click._submit keypress._submit",
                function (e) {
                  var t = e.target,
                    i =
                      se.nodeName(t, "input") || se.nodeName(t, "button")
                        ? t.form
                        : void 0;
                  i &&
                    !se._data(i, "submitBubbles") &&
                    (se.event.add(i, "submit._submit", function (e) {
                      e._submit_bubble = !0;
                    }),
                    se._data(i, "submitBubbles", !0));
                },
              )
            );
          },
          postDispatch: function (e) {
            e._submit_bubble &&
              (delete e._submit_bubble,
              this.parentNode &&
                !e.isTrigger &&
                se.event.simulate("submit", this.parentNode, e, !0));
          },
          teardown: function () {
            return (
              !se.nodeName(this, "form") &&
              void se.event.remove(this, "._submit")
            );
          },
        }),
      ie.changeBubbles ||
        (se.event.special.change = {
          setup: function () {
            return Ne.test(this.nodeName)
              ? (("checkbox" === this.type || "radio" === this.type) &&
                  (se.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName &&
                      (this._just_changed = !0);
                  }),
                  se.event.add(this, "click._change", function (e) {
                    (this._just_changed &&
                      !e.isTrigger &&
                      (this._just_changed = !1),
                      se.event.simulate("change", this, e, !0));
                  })),
                !1)
              : void se.event.add(this, "beforeactivate._change", function (e) {
                  var t = e.target;
                  Ne.test(t.nodeName) &&
                    !se._data(t, "changeBubbles") &&
                    (se.event.add(t, "change._change", function (e) {
                      !this.parentNode ||
                        e.isSimulated ||
                        e.isTrigger ||
                        se.event.simulate("change", this.parentNode, e, !0);
                    }),
                    se._data(t, "changeBubbles", !0));
                });
          },
          handle: function (e) {
            var t = e.target;
            return this !== t ||
              e.isSimulated ||
              e.isTrigger ||
              ("radio" !== t.type && "checkbox" !== t.type)
              ? e.handleObj.handler.apply(this, arguments)
              : void 0;
          },
          teardown: function () {
            return (se.event.remove(this, "._change"), !Ne.test(this.nodeName));
          },
        }),
      ie.focusinBubbles ||
        se.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var i = function (e) {
            se.event.simulate(t, e.target, se.event.fix(e), !0);
          };
          se.event.special[t] = {
            setup: function () {
              var n = this.ownerDocument || this,
                s = se._data(n, t);
              (s || n.addEventListener(e, i, !0), se._data(n, t, (s || 0) + 1));
            },
            teardown: function () {
              var n = this.ownerDocument || this,
                s = se._data(n, t) - 1;
              s
                ? se._data(n, t, s)
                : (n.removeEventListener(e, i, !0), se._removeData(n, t));
            },
          };
        }),
      se.fn.extend({
        on: function (e, t, i, n, s) {
          var o, a;
          if ("object" == typeof e) {
            "string" != typeof t && ((i = i || t), (t = void 0));
            for (o in e) this.on(o, t, i, e[o], s);
            return this;
          }
          if (
            (null == i && null == n
              ? ((n = t), (i = t = void 0))
              : null == n &&
                ("string" == typeof t
                  ? ((n = i), (i = void 0))
                  : ((n = i), (i = t), (t = void 0))),
            !1 === n)
          )
            n = p;
          else if (!n) return this;
          return (
            1 === s &&
              ((a = n),
              (n = function (e) {
                return (se().off(e), a.apply(this, arguments));
              }),
              (n.guid = a.guid || (a.guid = se.guid++))),
            this.each(function () {
              se.event.add(this, e, n, i, t);
            })
          );
        },
        one: function (e, t, i, n) {
          return this.on(e, t, i, n, 1);
        },
        off: function (e, t, i) {
          var n, s;
          if (e && e.preventDefault && e.handleObj)
            return (
              (n = e.handleObj),
              se(e.delegateTarget).off(
                n.namespace ? n.origType + "." + n.namespace : n.origType,
                n.selector,
                n.handler,
              ),
              this
            );
          if ("object" == typeof e) {
            for (s in e) this.off(s, t, e[s]);
            return this;
          }
          return (
            (!1 === t || "function" == typeof t) && ((i = t), (t = void 0)),
            !1 === i && (i = p),
            this.each(function () {
              se.event.remove(this, e, i, t);
            })
          );
        },
        trigger: function (e, t) {
          return this.each(function () {
            se.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var i = this[0];
          return i ? se.event.trigger(e, t, i, !0) : void 0;
        },
      }));
    var Fe =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      Oe = / jQuery\d+="(?:null|\d+)"/g,
      He = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
      je = /^\s+/,
      Le =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ze = /<([\w:]+)/,
      Re = /<tbody/i,
      We = /<|&#?\w+;/,
      Be = /<(?:script|style|link)/i,
      qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ke = /^$|\/(?:java|ecma)script/i,
      Ye = /^true\/(.*)/,
      Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
      },
      Ve = m(fe),
      Qe = Ve.appendChild(fe.createElement("div"));
    ((Xe.optgroup = Xe.option),
      (Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead),
      (Xe.th = Xe.td),
      se.extend({
        clone: function (e, t, i) {
          var n,
            s,
            o,
            a,
            r,
            l = se.contains(e.ownerDocument, e);
          if (
            (ie.html5Clone || se.isXMLDoc(e) || !He.test("<" + e.nodeName + ">")
              ? (o = e.cloneNode(!0))
              : ((Qe.innerHTML = e.outerHTML),
                Qe.removeChild((o = Qe.firstChild))),
            !(
              (ie.noCloneEvent && ie.noCloneChecked) ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              se.isXMLDoc(e)
            ))
          )
            for (n = g(o), r = g(e), a = 0; null != (s = r[a]); ++a)
              n[a] && k(s, n[a]);
          if (t)
            if (i)
              for (r = r || g(e), n = n || g(o), a = 0; null != (s = r[a]); a++)
                _(s, n[a]);
            else _(e, o);
          return (
            (n = g(o, "script")),
            n.length > 0 && x(n, !l && g(e, "script")),
            (n = r = s = null),
            o
          );
        },
        buildFragment: function (e, t, i, n) {
          for (
            var s, o, a, r, l, c, u, h = e.length, d = m(t), p = [], f = 0;
            h > f;
            f++
          )
            if ((o = e[f]) || 0 === o)
              if ("object" === se.type(o)) se.merge(p, o.nodeType ? [o] : o);
              else if (We.test(o)) {
                for (
                  r = r || d.appendChild(t.createElement("div")),
                    l = (ze.exec(o) || ["", ""])[1].toLowerCase(),
                    u = Xe[l] || Xe._default,
                    r.innerHTML = u[1] + o.replace(Le, "<$1></$2>") + u[2],
                    s = u[0];
                  s--;
                )
                  r = r.lastChild;
                if (
                  (!ie.leadingWhitespace &&
                    je.test(o) &&
                    p.push(t.createTextNode(je.exec(o)[0])),
                  !ie.tbody)
                )
                  for (
                    o =
                      "table" !== l || Re.test(o)
                        ? "<table>" !== u[1] || Re.test(o)
                          ? 0
                          : r
                        : r.firstChild,
                      s = o && o.childNodes.length;
                    s--;
                  )
                    se.nodeName((c = o.childNodes[s]), "tbody") &&
                      !c.childNodes.length &&
                      o.removeChild(c);
                for (
                  se.merge(p, r.childNodes), r.textContent = "";
                  r.firstChild;
                )
                  r.removeChild(r.firstChild);
                r = d.lastChild;
              } else p.push(t.createTextNode(o));
          for (
            r && d.removeChild(r),
              ie.appendChecked || se.grep(g(p, "input"), v),
              f = 0;
            (o = p[f++]);
          )
            if (
              (!n || -1 === se.inArray(o, n)) &&
              ((a = se.contains(o.ownerDocument, o)),
              (r = g(d.appendChild(o), "script")),
              a && x(r),
              i)
            )
              for (s = 0; (o = r[s++]); ) Ke.test(o.type || "") && i.push(o);
          return ((r = null), d);
        },
        cleanData: function (e, t) {
          for (
            var i,
              n,
              s,
              o,
              a = 0,
              r = se.expando,
              l = se.cache,
              c = ie.deleteExpando,
              u = se.event.special;
            null != (i = e[a]);
            a++
          )
            if ((t || se.acceptData(i)) && ((s = i[r]), (o = s && l[s]))) {
              if (o.events)
                for (n in o.events)
                  u[n] ? se.event.remove(i, n) : se.removeEvent(i, n, o.handle);
              l[s] &&
                (delete l[s],
                c
                  ? delete i[r]
                  : typeof i.removeAttribute !== _e
                    ? i.removeAttribute(r)
                    : (i[r] = null),
                X.push(s));
            }
        },
      }),
      se.fn.extend({
        text: function (e) {
          return Ee(
            this,
            function (e) {
              return void 0 === e
                ? se.text(this)
                : this.empty().append(
                    ((this[0] && this[0].ownerDocument) || fe).createTextNode(
                      e,
                    ),
                  );
            },
            null,
            e,
            arguments.length,
          );
        },
        append: function () {
          return this.domManip(arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              y(this, e).appendChild(e);
            }
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = y(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        remove: function (e, t) {
          for (
            var i, n = e ? se.filter(e, this) : this, s = 0;
            null != (i = n[s]);
            s++
          )
            (t || 1 !== i.nodeType || se.cleanData(g(i)),
              i.parentNode &&
                (t && se.contains(i.ownerDocument, i) && x(g(i, "script")),
                i.parentNode.removeChild(i)));
          return this;
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++) {
            for (1 === e.nodeType && se.cleanData(g(e, !1)); e.firstChild; )
              e.removeChild(e.firstChild);
            e.options && se.nodeName(e, "select") && (e.options.length = 0);
          }
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return se.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return Ee(
            this,
            function (e) {
              var t = this[0] || {},
                i = 0,
                n = this.length;
              if (void 0 === e)
                return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") : void 0;
              if (
                !(
                  "string" != typeof e ||
                  Be.test(e) ||
                  (!ie.htmlSerialize && He.test(e)) ||
                  (!ie.leadingWhitespace && je.test(e)) ||
                  Xe[(ze.exec(e) || ["", ""])[1].toLowerCase()]
                )
              ) {
                e = e.replace(Le, "<$1></$2>");
                try {
                  for (; n > i; i++)
                    ((t = this[i] || {}),
                      1 === t.nodeType &&
                        (se.cleanData(g(t, !1)), (t.innerHTML = e)));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length,
          );
        },
        replaceWith: function () {
          var e = arguments[0];
          return (
            this.domManip(arguments, function (t) {
              ((e = this.parentNode),
                se.cleanData(g(this)),
                e && e.replaceChild(t, this));
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
          );
        },
        detach: function (e) {
          return this.remove(e, !0);
        },
        domManip: function (e, t) {
          e = Q.apply([], e);
          var i,
            n,
            s,
            o,
            a,
            r,
            l = 0,
            c = this.length,
            u = this,
            h = c - 1,
            d = e[0],
            p = se.isFunction(d);
          if (
            p ||
            (c > 1 && "string" == typeof d && !ie.checkClone && qe.test(d))
          )
            return this.each(function (i) {
              var n = u.eq(i);
              (p && (e[0] = d.call(this, i, n.html())), n.domManip(e, t));
            });
          if (
            c &&
            ((r = se.buildFragment(e, this[0].ownerDocument, !1, this)),
            (i = r.firstChild),
            1 === r.childNodes.length && (r = i),
            i)
          ) {
            for (o = se.map(g(r, "script"), b), s = o.length; c > l; l++)
              ((n = r),
                l !== h &&
                  ((n = se.clone(n, !0, !0)), s && se.merge(o, g(n, "script"))),
                t.call(this[l], n, l));
            if (s)
              for (
                a = o[o.length - 1].ownerDocument, se.map(o, w), l = 0;
                s > l;
                l++
              )
                ((n = o[l]),
                  Ke.test(n.type || "") &&
                    !se._data(n, "globalEval") &&
                    se.contains(a, n) &&
                    (n.src
                      ? se._evalUrl && se._evalUrl(n.src)
                      : se.globalEval(
                          (
                            n.text ||
                            n.textContent ||
                            n.innerHTML ||
                            ""
                          ).replace(Ue, ""),
                        )));
            r = i = null;
          }
          return this;
        },
      }),
      se.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          se.fn[e] = function (e) {
            for (var i, n = 0, s = [], o = se(e), a = o.length - 1; a >= n; n++)
              ((i = n === a ? this : this.clone(!0)),
                se(o[n])[t](i),
                G.apply(s, i.get()));
            return this.pushStack(s);
          };
        },
      ));
    var Ge,
      Je = {};
    !(function () {
      var e;
      ie.shrinkWrapBlocks = function () {
        if (null != e) return e;
        e = !1;
        var t, i, n;
        return (
          (i = fe.getElementsByTagName("body")[0]),
          i && i.style
            ? ((t = fe.createElement("div")),
              (n = fe.createElement("div")),
              (n.style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              i.appendChild(n).appendChild(t),
              typeof t.style.zoom !== _e &&
                ((t.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (t.appendChild(fe.createElement("div")).style.width = "5px"),
                (e = 3 !== t.offsetWidth)),
              i.removeChild(n),
              e)
            : void 0
        );
      };
    })();
    var Ze,
      et,
      tt = /^margin/,
      it = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
      nt = /^(top|right|bottom|left)$/;
    (e.getComputedStyle
      ? ((Ze = function (t) {
          return t.ownerDocument.defaultView.opener
            ? t.ownerDocument.defaultView.getComputedStyle(t, null)
            : e.getComputedStyle(t, null);
        }),
        (et = function (e, t, i) {
          var n,
            s,
            o,
            a,
            r = e.style;
          return (
            (i = i || Ze(e)),
            (a = i ? i.getPropertyValue(t) || i[t] : void 0),
            i &&
              ("" !== a ||
                se.contains(e.ownerDocument, e) ||
                (a = se.style(e, t)),
              it.test(a) &&
                tt.test(t) &&
                ((n = r.width),
                (s = r.minWidth),
                (o = r.maxWidth),
                (r.minWidth = r.maxWidth = r.width = a),
                (a = i.width),
                (r.width = n),
                (r.minWidth = s),
                (r.maxWidth = o))),
            void 0 === a ? a : a + ""
          );
        }))
      : fe.documentElement.currentStyle &&
        ((Ze = function (e) {
          return e.currentStyle;
        }),
        (et = function (e, t, i) {
          var n,
            s,
            o,
            a,
            r = e.style;
          return (
            (i = i || Ze(e)),
            (a = i ? i[t] : void 0),
            null == a && r && r[t] && (a = r[t]),
            it.test(a) &&
              !nt.test(t) &&
              ((n = r.left),
              (s = e.runtimeStyle),
              (o = s && s.left),
              o && (s.left = e.currentStyle.left),
              (r.left = "fontSize" === t ? "1em" : a),
              (a = r.pixelLeft + "px"),
              (r.left = n),
              o && (s.left = o)),
            void 0 === a ? a : a + "" || "auto"
          );
        })),
      !(function () {
        function t() {
          var t, i, n, s;
          (i = fe.getElementsByTagName("body")[0]) &&
            i.style &&
            ((t = fe.createElement("div")),
            (n = fe.createElement("div")),
            (n.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            i.appendChild(n).appendChild(t),
            (t.style.cssText =
              "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
            (o = a = !1),
            (l = !0),
            e.getComputedStyle &&
              ((o = "1%" !== (e.getComputedStyle(t, null) || {}).top),
              (a =
                "4px" ===
                (e.getComputedStyle(t, null) || { width: "4px" }).width),
              (s = t.appendChild(fe.createElement("div"))),
              (s.style.cssText = t.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (s.style.marginRight = s.style.width = "0"),
              (t.style.width = "1px"),
              (l = !parseFloat(
                (e.getComputedStyle(s, null) || {}).marginRight,
              )),
              t.removeChild(s)),
            (t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (s = t.getElementsByTagName("td")),
            (s[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
            (r = 0 === s[0].offsetHeight),
            r &&
              ((s[0].style.display = ""),
              (s[1].style.display = "none"),
              (r = 0 === s[0].offsetHeight)),
            i.removeChild(n));
        }
        var i, n, s, o, a, r, l;
        ((i = fe.createElement("div")),
          (i.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (s = i.getElementsByTagName("a")[0]),
          (n = s && s.style) &&
            ((n.cssText = "float:left;opacity:.5"),
            (ie.opacity = "0.5" === n.opacity),
            (ie.cssFloat = !!n.cssFloat),
            (i.style.backgroundClip = "content-box"),
            (i.cloneNode(!0).style.backgroundClip = ""),
            (ie.clearCloneStyle = "content-box" === i.style.backgroundClip),
            (ie.boxSizing =
              "" === n.boxSizing ||
              "" === n.MozBoxSizing ||
              "" === n.WebkitBoxSizing),
            se.extend(ie, {
              reliableHiddenOffsets: function () {
                return (null == r && t(), r);
              },
              boxSizingReliable: function () {
                return (null == a && t(), a);
              },
              pixelPosition: function () {
                return (null == o && t(), o);
              },
              reliableMarginRight: function () {
                return (null == l && t(), l);
              },
            })));
      })(),
      (se.swap = function (e, t, i, n) {
        var s,
          o,
          a = {};
        for (o in t) ((a[o] = e.style[o]), (e.style[o] = t[o]));
        s = i.apply(e, n || []);
        for (o in t) e.style[o] = a[o];
        return s;
      }));
    var st = /alpha\([^)]*\)/i,
      ot = /opacity\s*=\s*([^)]*)/,
      at = /^(none|table(?!-c[ea]).+)/,
      rt = new RegExp("^(" + Te + ")(.*)$", "i"),
      lt = new RegExp("^([+-])=(" + Te + ")", "i"),
      ct = { position: "absolute", visibility: "hidden", display: "block" },
      ut = { letterSpacing: "0", fontWeight: "400" },
      ht = ["Webkit", "O", "Moz", "ms"];
    (se.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var i = et(e, "opacity");
              return "" === i ? "1" : i;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: ie.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (e, t, i, n) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var s,
            o,
            a,
            r = se.camelCase(t),
            l = e.style;
          if (
            ((t = se.cssProps[r] || (se.cssProps[r] = D(l, r))),
            (a = se.cssHooks[t] || se.cssHooks[r]),
            void 0 === i)
          )
            return a && "get" in a && void 0 !== (s = a.get(e, !1, n))
              ? s
              : l[t];
          if (
            ((o = typeof i),
            "string" === o &&
              (s = lt.exec(i)) &&
              ((i = (s[1] + 1) * s[2] + parseFloat(se.css(e, t))),
              (o = "number")),
            null != i &&
              i === i &&
              ("number" !== o || se.cssNumber[r] || (i += "px"),
              ie.clearCloneStyle ||
                "" !== i ||
                0 !== t.indexOf("background") ||
                (l[t] = "inherit"),
              !(a && "set" in a && void 0 === (i = a.set(e, i, n)))))
          )
            try {
              l[t] = i;
            } catch (e) {}
        }
      },
      css: function (e, t, i, n) {
        var s,
          o,
          a,
          r = se.camelCase(t);
        return (
          (t = se.cssProps[r] || (se.cssProps[r] = D(e.style, r))),
          (a = se.cssHooks[t] || se.cssHooks[r]),
          a && "get" in a && (o = a.get(e, !0, i)),
          void 0 === o && (o = et(e, t, n)),
          "normal" === o && t in ut && (o = ut[t]),
          "" === i || i
            ? ((s = parseFloat(o)), !0 === i || se.isNumeric(s) ? s || 0 : o)
            : o
        );
      },
    }),
      se.each(["height", "width"], function (e, t) {
        se.cssHooks[t] = {
          get: function (e, i, n) {
            return i
              ? at.test(se.css(e, "display")) && 0 === e.offsetWidth
                ? se.swap(e, ct, function () {
                    return A(e, t, n);
                  })
                : A(e, t, n)
              : void 0;
          },
          set: function (e, i, n) {
            var s = n && Ze(e);
            return I(
              e,
              i,
              n
                ? N(
                    e,
                    t,
                    n,
                    ie.boxSizing &&
                      "border-box" === se.css(e, "boxSizing", !1, s),
                    s,
                  )
                : 0,
            );
          },
        };
      }),
      ie.opacity ||
        (se.cssHooks.opacity = {
          get: function (e, t) {
            return ot.test(
              (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) ||
                "",
            )
              ? 0.01 * parseFloat(RegExp.$1) + ""
              : t
                ? "1"
                : "";
          },
          set: function (e, t) {
            var i = e.style,
              n = e.currentStyle,
              s = se.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
              o = (n && n.filter) || i.filter || "";
            ((i.zoom = 1),
              ((t >= 1 || "" === t) &&
                "" === se.trim(o.replace(st, "")) &&
                i.removeAttribute &&
                (i.removeAttribute("filter"), "" === t || (n && !n.filter))) ||
                (i.filter = st.test(o) ? o.replace(st, s) : o + " " + s));
          },
        }),
      (se.cssHooks.marginRight = S(ie.reliableMarginRight, function (e, t) {
        return t
          ? se.swap(e, { display: "inline-block" }, et, [e, "marginRight"])
          : void 0;
      })),
      se.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        ((se.cssHooks[e + t] = {
          expand: function (i) {
            for (
              var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i];
              4 > n;
              n++
            )
              s[e + Se[n] + t] = o[n] || o[n - 2] || o[0];
            return s;
          },
        }),
          tt.test(e) || (se.cssHooks[e + t].set = I));
      }),
      se.fn.extend({
        css: function (e, t) {
          return Ee(
            this,
            function (e, t, i) {
              var n,
                s,
                o = {},
                a = 0;
              if (se.isArray(t)) {
                for (n = Ze(e), s = t.length; s > a; a++)
                  o[t[a]] = se.css(e, t[a], !1, n);
                return o;
              }
              return void 0 !== i ? se.style(e, t, i) : se.css(e, t);
            },
            e,
            t,
            arguments.length > 1,
          );
        },
        show: function () {
          return E(this, !0);
        },
        hide: function () {
          return E(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                De(this) ? se(this).show() : se(this).hide();
              });
        },
      }),
      (se.Tween = P),
      (P.prototype = {
        constructor: P,
        init: function (e, t, i, n, s, o) {
          ((this.elem = e),
            (this.prop = i),
            (this.easing = s || "swing"),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = n),
            (this.unit = o || (se.cssNumber[i] ? "" : "px")));
        },
        cur: function () {
          var e = P.propHooks[this.prop];
          return e && e.get ? e.get(this) : P.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            i = P.propHooks[this.prop];
          return (
            (this.pos = t =
              this.options.duration
                ? se.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration,
                  )
                : e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : P.propHooks._default.set(this),
            this
          );
        },
      }),
      (P.prototype.init.prototype = P.prototype),
      (P.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return null == e.elem[e.prop] ||
              (e.elem.style && null != e.elem.style[e.prop])
              ? ((t = se.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0)
              : e.elem[e.prop];
          },
          set: function (e) {
            se.fx.step[e.prop]
              ? se.fx.step[e.prop](e)
              : e.elem.style &&
                  (null != e.elem.style[se.cssProps[e.prop]] ||
                    se.cssHooks[e.prop])
                ? se.style(e.elem, e.prop, e.now + e.unit)
                : (e.elem[e.prop] = e.now);
          },
        },
      }),
      (P.propHooks.scrollTop = P.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (se.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
      }),
      (se.fx = P.prototype.init),
      (se.fx.step = {}));
    var dt,
      pt,
      ft = /^(?:toggle|show|hide)$/,
      mt = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
      gt = /queueHooks$/,
      vt = [O],
      yt = {
        "*": [
          function (e, t) {
            var i = this.createTween(e, t),
              n = i.cur(),
              s = mt.exec(t),
              o = (s && s[3]) || (se.cssNumber[e] ? "" : "px"),
              a =
                (se.cssNumber[e] || ("px" !== o && +n)) &&
                mt.exec(se.css(i.elem, e)),
              r = 1,
              l = 20;
            if (a && a[3] !== o) {
              ((o = o || a[3]), (s = s || []), (a = +n || 1));
              do {
                ((r = r || ".5"), (a /= r), se.style(i.elem, e, a + o));
              } while (r !== (r = i.cur() / n) && 1 !== r && --l);
            }
            return (
              s &&
                ((a = i.start = +a || +n || 0),
                (i.unit = o),
                (i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2])),
              i
            );
          },
        ],
      };
    ((se.Animation = se.extend(j, {
      tweener: function (e, t) {
        se.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
        for (var i, n = 0, s = e.length; s > n; n++)
          ((i = e[n]), (yt[i] = yt[i] || []), yt[i].unshift(t));
      },
      prefilter: function (e, t) {
        t ? vt.unshift(e) : vt.push(e);
      },
    })),
      (se.speed = function (e, t, i) {
        var n =
          e && "object" == typeof e
            ? se.extend({}, e)
            : {
                complete: i || (!i && t) || (se.isFunction(e) && e),
                duration: e,
                easing: (i && t) || (t && !se.isFunction(t) && t),
              };
        return (
          (n.duration = se.fx.off
            ? 0
            : "number" == typeof n.duration
              ? n.duration
              : n.duration in se.fx.speeds
                ? se.fx.speeds[n.duration]
                : se.fx.speeds._default),
          (null == n.queue || !0 === n.queue) && (n.queue = "fx"),
          (n.old = n.complete),
          (n.complete = function () {
            (se.isFunction(n.old) && n.old.call(this),
              n.queue && se.dequeue(this, n.queue));
          }),
          n
        );
      }),
      se.fn.extend({
        fadeTo: function (e, t, i, n) {
          return this.filter(De)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, i, n);
        },
        animate: function (e, t, i, n) {
          var s = se.isEmptyObject(e),
            o = se.speed(t, i, n),
            a = function () {
              var t = j(this, se.extend({}, e), o);
              (s || se._data(this, "finish")) && t.stop(!0);
            };
          return (
            (a.finish = a),
            s || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
          );
        },
        stop: function (e, t, i) {
          var n = function (e) {
            var t = e.stop;
            (delete e.stop, t(i));
          };
          return (
            "string" != typeof e && ((i = t), (t = e), (e = void 0)),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                s = null != e && e + "queueHooks",
                o = se.timers,
                a = se._data(this);
              if (s) a[s] && a[s].stop && n(a[s]);
              else for (s in a) a[s] && a[s].stop && gt.test(s) && n(a[s]);
              for (s = o.length; s--; )
                o[s].elem !== this ||
                  (null != e && o[s].queue !== e) ||
                  (o[s].anim.stop(i), (t = !1), o.splice(s, 1));
              (t || !i) && se.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            !1 !== e && (e = e || "fx"),
            this.each(function () {
              var t,
                i = se._data(this),
                n = i[e + "queue"],
                s = i[e + "queueHooks"],
                o = se.timers,
                a = n ? n.length : 0;
              for (
                i.finish = !0,
                  se.queue(this, e, []),
                  s && s.stop && s.stop.call(this, !0),
                  t = o.length;
                t--;
              )
                o[t].elem === this &&
                  o[t].queue === e &&
                  (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; a > t; t++)
                n[t] && n[t].finish && n[t].finish.call(this);
              delete i.finish;
            })
          );
        },
      }),
      se.each(["toggle", "show", "hide"], function (e, t) {
        var i = se.fn[t];
        se.fn[t] = function (e, n, s) {
          return null == e || "boolean" == typeof e
            ? i.apply(this, arguments)
            : this.animate($(t, !0), e, n, s);
        };
      }),
      se.each(
        {
          slideDown: $("show"),
          slideUp: $("hide"),
          slideToggle: $("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          se.fn[e] = function (e, i, n) {
            return this.animate(t, e, i, n);
          };
        },
      ),
      (se.timers = []),
      (se.fx.tick = function () {
        var e,
          t = se.timers,
          i = 0;
        for (dt = se.now(); i < t.length; i++)
          (e = t[i])() || t[i] !== e || t.splice(i--, 1);
        (t.length || se.fx.stop(), (dt = void 0));
      }),
      (se.fx.timer = function (e) {
        (se.timers.push(e), e() ? se.fx.start() : se.timers.pop());
      }),
      (se.fx.interval = 13),
      (se.fx.start = function () {
        pt || (pt = setInterval(se.fx.tick, se.fx.interval));
      }),
      (se.fx.stop = function () {
        (clearInterval(pt), (pt = null));
      }),
      (se.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (se.fn.delay = function (e, t) {
        return (
          (e = se.fx ? se.fx.speeds[e] || e : e),
          (t = t || "fx"),
          this.queue(t, function (t, i) {
            var n = setTimeout(t, e);
            i.stop = function () {
              clearTimeout(n);
            };
          })
        );
      }),
      (function () {
        var e, t, i, n, s;
        ((t = fe.createElement("div")),
          t.setAttribute("className", "t"),
          (t.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (n = t.getElementsByTagName("a")[0]),
          (i = fe.createElement("select")),
          (s = i.appendChild(fe.createElement("option"))),
          (e = t.getElementsByTagName("input")[0]),
          (n.style.cssText = "top:1px"),
          (ie.getSetAttribute = "t" !== t.className),
          (ie.style = /top/.test(n.getAttribute("style"))),
          (ie.hrefNormalized = "/a" === n.getAttribute("href")),
          (ie.checkOn = !!e.value),
          (ie.optSelected = s.selected),
          (ie.enctype = !!fe.createElement("form").enctype),
          (i.disabled = !0),
          (ie.optDisabled = !s.disabled),
          (e = fe.createElement("input")),
          e.setAttribute("value", ""),
          (ie.input = "" === e.getAttribute("value")),
          (e.value = "t"),
          e.setAttribute("type", "radio"),
          (ie.radioValue = "t" === e.value));
      })());
    var bt = /\r/g;
    (se.fn.extend({
      val: function (e) {
        var t,
          i,
          n,
          s = this[0];
        return arguments.length
          ? ((n = se.isFunction(e)),
            this.each(function (i) {
              var s;
              1 === this.nodeType &&
                ((s = n ? e.call(this, i, se(this).val()) : e),
                null == s
                  ? (s = "")
                  : "number" == typeof s
                    ? (s += "")
                    : se.isArray(s) &&
                      (s = se.map(s, function (e) {
                        return null == e ? "" : e + "";
                      })),
                ((t =
                  se.valHooks[this.type] ||
                  se.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, s, "value")) ||
                  (this.value = s));
            }))
          : s
            ? ((t =
                se.valHooks[s.type] || se.valHooks[s.nodeName.toLowerCase()]),
              t && "get" in t && void 0 !== (i = t.get(s, "value"))
                ? i
                : ((i = s.value),
                  "string" == typeof i
                    ? i.replace(bt, "")
                    : null == i
                      ? ""
                      : i))
            : void 0;
      },
    }),
      se.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = se.find.attr(e, "value");
              return null != t ? t : se.trim(se.text(e));
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  i,
                  n = e.options,
                  s = e.selectedIndex,
                  o = "select-one" === e.type || 0 > s,
                  a = o ? null : [],
                  r = o ? s + 1 : n.length,
                  l = 0 > s ? r : o ? s : 0;
                r > l;
                l++
              )
                if (
                  ((i = n[l]),
                  !(
                    (!i.selected && l !== s) ||
                    (ie.optDisabled
                      ? i.disabled
                      : null !== i.getAttribute("disabled")) ||
                    (i.parentNode.disabled &&
                      se.nodeName(i.parentNode, "optgroup"))
                  ))
                ) {
                  if (((t = se(i).val()), o)) return t;
                  a.push(t);
                }
              return a;
            },
            set: function (e, t) {
              for (
                var i, n, s = e.options, o = se.makeArray(t), a = s.length;
                a--;
              )
                if (((n = s[a]), se.inArray(se.valHooks.option.get(n), o) >= 0))
                  try {
                    n.selected = i = !0;
                  } catch (e) {
                    n.scrollHeight;
                  }
                else n.selected = !1;
              return (i || (e.selectedIndex = -1), s);
            },
          },
        },
      }),
      se.each(["radio", "checkbox"], function () {
        ((se.valHooks[this] = {
          set: function (e, t) {
            return se.isArray(t)
              ? (e.checked = se.inArray(se(e).val(), t) >= 0)
              : void 0;
          },
        }),
          ie.checkOn ||
            (se.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            }));
      }));
    var wt,
      xt,
      _t = se.expr.attrHandle,
      kt = /^(?:checked|selected)$/i,
      Ct = ie.getSetAttribute,
      Tt = ie.input;
    (se.fn.extend({
      attr: function (e, t) {
        return Ee(this, se.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          se.removeAttr(this, e);
        });
      },
    }),
      se.extend({
        attr: function (e, t, i) {
          var n,
            s,
            o = e.nodeType;
          if (e && 3 !== o && 8 !== o && 2 !== o)
            return typeof e.getAttribute === _e
              ? se.prop(e, t, i)
              : ((1 === o && se.isXMLDoc(e)) ||
                  ((t = t.toLowerCase()),
                  (n =
                    se.attrHooks[t] || (se.expr.match.bool.test(t) ? xt : wt))),
                void 0 === i
                  ? n && "get" in n && null !== (s = n.get(e, t))
                    ? s
                    : ((s = se.find.attr(e, t)), null == s ? void 0 : s)
                  : null !== i
                    ? n && "set" in n && void 0 !== (s = n.set(e, i, t))
                      ? s
                      : (e.setAttribute(t, i + ""), i)
                    : void se.removeAttr(e, t));
        },
        removeAttr: function (e, t) {
          var i,
            n,
            s = 0,
            o = t && t.match(ye);
          if (o && 1 === e.nodeType)
            for (; (i = o[s++]); )
              ((n = se.propFix[i] || i),
                se.expr.match.bool.test(i)
                  ? (Tt && Ct) || !kt.test(i)
                    ? (e[n] = !1)
                    : (e[se.camelCase("default-" + i)] = e[n] = !1)
                  : se.attr(e, i, ""),
                e.removeAttribute(Ct ? i : n));
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!ie.radioValue && "radio" === t && se.nodeName(e, "input")) {
                var i = e.value;
                return (e.setAttribute("type", t), i && (e.value = i), t);
              }
            },
          },
        },
      }),
      (xt = {
        set: function (e, t, i) {
          return (
            !1 === t
              ? se.removeAttr(e, i)
              : (Tt && Ct) || !kt.test(i)
                ? e.setAttribute((!Ct && se.propFix[i]) || i, i)
                : (e[se.camelCase("default-" + i)] = e[i] = !0),
            i
          );
        },
      }),
      se.each(se.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var i = _t[t] || se.find.attr;
        _t[t] =
          (Tt && Ct) || !kt.test(t)
            ? function (e, t, n) {
                var s, o;
                return (
                  n ||
                    ((o = _t[t]),
                    (_t[t] = s),
                    (s = null != i(e, t, n) ? t.toLowerCase() : null),
                    (_t[t] = o)),
                  s
                );
              }
            : function (e, t, i) {
                return i
                  ? void 0
                  : e[se.camelCase("default-" + t)]
                    ? t.toLowerCase()
                    : null;
              };
      }),
      (Tt && Ct) ||
        (se.attrHooks.value = {
          set: function (e, t, i) {
            return se.nodeName(e, "input")
              ? void (e.defaultValue = t)
              : wt && wt.set(e, t, i);
          },
        }),
      Ct ||
        ((wt = {
          set: function (e, t, i) {
            var n = e.getAttributeNode(i);
            return (
              n || e.setAttributeNode((n = e.ownerDocument.createAttribute(i))),
              (n.value = t += ""),
              "value" === i || t === e.getAttribute(i) ? t : void 0
            );
          },
        }),
        (_t.id =
          _t.name =
          _t.coords =
            function (e, t, i) {
              var n;
              return i
                ? void 0
                : (n = e.getAttributeNode(t)) && "" !== n.value
                  ? n.value
                  : null;
            }),
        (se.valHooks.button = {
          get: function (e, t) {
            var i = e.getAttributeNode(t);
            return i && i.specified ? i.value : void 0;
          },
          set: wt.set,
        }),
        (se.attrHooks.contenteditable = {
          set: function (e, t, i) {
            wt.set(e, "" !== t && t, i);
          },
        }),
        se.each(["width", "height"], function (e, t) {
          se.attrHooks[t] = {
            set: function (e, i) {
              return "" === i ? (e.setAttribute(t, "auto"), i) : void 0;
            },
          };
        })),
      ie.style ||
        (se.attrHooks.style = {
          get: function (e) {
            return e.style.cssText || void 0;
          },
          set: function (e, t) {
            return (e.style.cssText = t + "");
          },
        }));
    var St = /^(?:input|select|textarea|button|object)$/i,
      Dt = /^(?:a|area)$/i;
    (se.fn.extend({
      prop: function (e, t) {
        return Ee(this, se.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return (
          (e = se.propFix[e] || e),
          this.each(function () {
            try {
              ((this[e] = void 0), delete this[e]);
            } catch (e) {}
          })
        );
      },
    }),
      se.extend({
        propFix: { for: "htmlFor", class: "className" },
        prop: function (e, t, i) {
          var n,
            s,
            o,
            a = e.nodeType;
          if (e && 3 !== a && 8 !== a && 2 !== a)
            return (
              (o = 1 !== a || !se.isXMLDoc(e)),
              o && ((t = se.propFix[t] || t), (s = se.propHooks[t])),
              void 0 !== i
                ? s && "set" in s && void 0 !== (n = s.set(e, i, t))
                  ? n
                  : (e[t] = i)
                : s && "get" in s && null !== (n = s.get(e, t))
                  ? n
                  : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = se.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : St.test(e.nodeName) || (Dt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
            },
          },
        },
      }),
      ie.hrefNormalized ||
        se.each(["href", "src"], function (e, t) {
          se.propHooks[t] = {
            get: function (e) {
              return e.getAttribute(t, 4);
            },
          };
        }),
      ie.optSelected ||
        (se.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return (
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
              null
            );
          },
        }),
      se.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          se.propFix[this.toLowerCase()] = this;
        },
      ),
      ie.enctype || (se.propFix.enctype = "encoding"));
    var Et = /[\t\r\n\f]/g;
    (se.fn.extend({
      addClass: function (e) {
        var t,
          i,
          n,
          s,
          o,
          a,
          r = 0,
          l = this.length,
          c = "string" == typeof e && e;
        if (se.isFunction(e))
          return this.each(function (t) {
            se(this).addClass(e.call(this, t, this.className));
          });
        if (c)
          for (t = (e || "").match(ye) || []; l > r; r++)
            if (
              ((i = this[r]),
              (n =
                1 === i.nodeType &&
                (i.className
                  ? (" " + i.className + " ").replace(Et, " ")
                  : " ")))
            ) {
              for (o = 0; (s = t[o++]); )
                n.indexOf(" " + s + " ") < 0 && (n += s + " ");
              ((a = se.trim(n)), i.className !== a && (i.className = a));
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          i,
          n,
          s,
          o,
          a,
          r = 0,
          l = this.length,
          c = 0 === arguments.length || ("string" == typeof e && e);
        if (se.isFunction(e))
          return this.each(function (t) {
            se(this).removeClass(e.call(this, t, this.className));
          });
        if (c)
          for (t = (e || "").match(ye) || []; l > r; r++)
            if (
              ((i = this[r]),
              (n =
                1 === i.nodeType &&
                (i.className
                  ? (" " + i.className + " ").replace(Et, " ")
                  : "")))
            ) {
              for (o = 0; (s = t[o++]); )
                for (; n.indexOf(" " + s + " ") >= 0; )
                  n = n.replace(" " + s + " ", " ");
              ((a = e ? se.trim(n) : ""),
                i.className !== a && (i.className = a));
            }
        return this;
      },
      toggleClass: function (e, t) {
        var i = typeof e;
        return "boolean" == typeof t && "string" === i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : this.each(
              se.isFunction(e)
                ? function (i) {
                    se(this).toggleClass(e.call(this, i, this.className, t), t);
                  }
                : function () {
                    if ("string" === i)
                      for (
                        var t, n = 0, s = se(this), o = e.match(ye) || [];
                        (t = o[n++]);
                      )
                        s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                    else
                      (i === _e || "boolean" === i) &&
                        (this.className &&
                          se._data(this, "__className__", this.className),
                        (this.className =
                          this.className || !1 === e
                            ? ""
                            : se._data(this, "__className__") || ""));
                  },
            );
      },
      hasClass: function (e) {
        for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
          if (
            1 === this[i].nodeType &&
            (" " + this[i].className + " ").replace(Et, " ").indexOf(t) >= 0
          )
            return !0;
        return !1;
      },
    }),
      se.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " ",
        ),
        function (e, t) {
          se.fn[t] = function (e, i) {
            return arguments.length > 0
              ? this.on(t, null, e, i)
              : this.trigger(t);
          };
        },
      ),
      se.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function (e, t, i) {
          return this.on(e, null, t, i);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, i, n) {
          return this.on(t, e, i, n);
        },
        undelegate: function (e, t, i) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", i);
        },
      }));
    var It = se.now(),
      Nt = /\?/,
      At =
        /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ((se.parseJSON = function (t) {
      if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
      var i,
        n = null,
        s = se.trim(t + "");
      return s &&
        !se.trim(
          s.replace(At, function (e, t, s, o) {
            return (
              i && t && (n = 0),
              0 === n ? e : ((i = s || t), (n += !o - !s), "")
            );
          }),
        )
        ? Function("return " + s)()
        : se.error("Invalid JSON: " + t);
    }),
      (se.parseXML = function (t) {
        var i, n;
        if (!t || "string" != typeof t) return null;
        try {
          e.DOMParser
            ? ((n = new DOMParser()), (i = n.parseFromString(t, "text/xml")))
            : ((i = new ActiveXObject("Microsoft.XMLDOM")),
              (i.async = "false"),
              i.loadXML(t));
        } catch (e) {
          i = void 0;
        }
        return (
          (i &&
            i.documentElement &&
            !i.getElementsByTagName("parsererror").length) ||
            se.error("Invalid XML: " + t),
          i
        );
      }));
    var Pt,
      Mt,
      $t = /#.*$/,
      Ft = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      jt = /^(?:GET|HEAD)$/,
      Lt = /^\/\//,
      zt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Rt = {},
      Wt = {},
      Bt = "*/".concat("*");
    try {
      Mt = location.href;
    } catch (e) {
      ((Mt = fe.createElement("a")), (Mt.href = ""), (Mt = Mt.href));
    }
    ((Pt = zt.exec(Mt.toLowerCase()) || []),
      se.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Mt,
          type: "GET",
          isLocal: Ht.test(Pt[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Bt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /xml/, html: /html/, json: /json/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": se.parseJSON,
            "text xml": se.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? R(R(e, se.ajaxSettings), t) : R(se.ajaxSettings, e);
        },
        ajaxPrefilter: L(Rt),
        ajaxTransport: L(Wt),
        ajax: function (e, t) {
          function i(e, t, i, n) {
            var s,
              u,
              v,
              y,
              w,
              _ = t;
            2 !== b &&
              ((b = 2),
              r && clearTimeout(r),
              (c = void 0),
              (a = n || ""),
              (x.readyState = e > 0 ? 4 : 0),
              (s = (e >= 200 && 300 > e) || 304 === e),
              i && (y = W(h, x, i)),
              (y = B(h, y, x, s)),
              s
                ? (h.ifModified &&
                    ((w = x.getResponseHeader("Last-Modified")),
                    w && (se.lastModified[o] = w),
                    (w = x.getResponseHeader("etag")) && (se.etag[o] = w)),
                  204 === e || "HEAD" === h.type
                    ? (_ = "nocontent")
                    : 304 === e
                      ? (_ = "notmodified")
                      : ((_ = y.state), (u = y.data), (v = y.error), (s = !v)))
                : ((v = _), (e || !_) && ((_ = "error"), 0 > e && (e = 0))),
              (x.status = e),
              (x.statusText = (t || _) + ""),
              s ? f.resolveWith(d, [u, _, x]) : f.rejectWith(d, [x, _, v]),
              x.statusCode(g),
              (g = void 0),
              l &&
                p.trigger(s ? "ajaxSuccess" : "ajaxError", [x, h, s ? u : v]),
              m.fireWith(d, [x, _]),
              l &&
                (p.trigger("ajaxComplete", [x, h]),
                --se.active || se.event.trigger("ajaxStop")));
          }
          ("object" == typeof e && ((t = e), (e = void 0)), (t = t || {}));
          var n,
            s,
            o,
            a,
            r,
            l,
            c,
            u,
            h = se.ajaxSetup({}, t),
            d = h.context || h,
            p = h.context && (d.nodeType || d.jquery) ? se(d) : se.event,
            f = se.Deferred(),
            m = se.Callbacks("once memory"),
            g = h.statusCode || {},
            v = {},
            y = {},
            b = 0,
            w = "canceled",
            x = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (2 === b) {
                  if (!u)
                    for (u = {}; (t = Ot.exec(a)); )
                      u[t[1].toLowerCase()] = t[2];
                  t = u[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return 2 === b ? a : null;
              },
              setRequestHeader: function (e, t) {
                var i = e.toLowerCase();
                return (b || ((e = y[i] = y[i] || e), (v[e] = t)), this);
              },
              overrideMimeType: function (e) {
                return (b || (h.mimeType = e), this);
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (2 > b) for (t in e) g[t] = [g[t], e[t]];
                  else x.always(e[x.status]);
                return this;
              },
              abort: function (e) {
                var t = e || w;
                return (c && c.abort(t), i(0, t), this);
              },
            };
          if (
            ((f.promise(x).complete = m.add),
            (x.success = x.done),
            (x.error = x.fail),
            (h.url = ((e || h.url || Mt) + "")
              .replace($t, "")
              .replace(Lt, Pt[1] + "//")),
            (h.type = t.method || t.type || h.method || h.type),
            (h.dataTypes = se
              .trim(h.dataType || "*")
              .toLowerCase()
              .match(ye) || [""]),
            null == h.crossDomain &&
              ((n = zt.exec(h.url.toLowerCase())),
              (h.crossDomain = !(
                !n ||
                (n[1] === Pt[1] &&
                  n[2] === Pt[2] &&
                  (n[3] || ("http:" === n[1] ? "80" : "443")) ===
                    (Pt[3] || ("http:" === Pt[1] ? "80" : "443")))
              ))),
            h.data &&
              h.processData &&
              "string" != typeof h.data &&
              (h.data = se.param(h.data, h.traditional)),
            z(Rt, h, t, x),
            2 === b)
          )
            return x;
          ((l = se.event && h.global),
            l && 0 == se.active++ && se.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !jt.test(h.type)),
            (o = h.url),
            h.hasContent ||
              (h.data &&
                ((o = h.url += (Nt.test(o) ? "&" : "?") + h.data),
                delete h.data),
              !1 === h.cache &&
                (h.url = Ft.test(o)
                  ? o.replace(Ft, "$1_=" + It++)
                  : o + (Nt.test(o) ? "&" : "?") + "_=" + It++)),
            h.ifModified &&
              (se.lastModified[o] &&
                x.setRequestHeader("If-Modified-Since", se.lastModified[o]),
              se.etag[o] && x.setRequestHeader("If-None-Match", se.etag[o])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              t.contentType) &&
              x.setRequestHeader("Content-Type", h.contentType),
            x.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "")
                : h.accepts["*"],
            ));
          for (s in h.headers) x.setRequestHeader(s, h.headers[s]);
          if (h.beforeSend && (!1 === h.beforeSend.call(d, x, h) || 2 === b))
            return x.abort();
          w = "abort";
          for (s in { success: 1, error: 1, complete: 1 }) x[s](h[s]);
          if ((c = z(Wt, h, t, x))) {
            ((x.readyState = 1),
              l && p.trigger("ajaxSend", [x, h]),
              h.async &&
                h.timeout > 0 &&
                (r = setTimeout(function () {
                  x.abort("timeout");
                }, h.timeout)));
            try {
              ((b = 1), c.send(v, i));
            } catch (e) {
              if (!(2 > b)) throw e;
              i(-1, e);
            }
          } else i(-1, "No Transport");
          return x;
        },
        getJSON: function (e, t, i) {
          return se.get(e, t, i, "json");
        },
        getScript: function (e, t) {
          return se.get(e, void 0, t, "script");
        },
      }),
      se.each(["get", "post"], function (e, t) {
        se[t] = function (e, i, n, s) {
          return (
            se.isFunction(i) && ((s = s || n), (n = i), (i = void 0)),
            se.ajax({ url: e, type: t, dataType: s, data: i, success: n })
          );
        };
      }),
      (se._evalUrl = function (e) {
        return se.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      se.fn.extend({
        wrapAll: function (e) {
          if (se.isFunction(e))
            return this.each(function (t) {
              se(this).wrapAll(e.call(this, t));
            });
          if (this[0]) {
            var t = se(e, this[0].ownerDocument).eq(0).clone(!0);
            (this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (
                    var e = this;
                    e.firstChild && 1 === e.firstChild.nodeType;
                  )
                    e = e.firstChild;
                  return e;
                })
                .append(this));
          }
          return this;
        },
        wrapInner: function (e) {
          return this.each(
            se.isFunction(e)
              ? function (t) {
                  se(this).wrapInner(e.call(this, t));
                }
              : function () {
                  var t = se(this),
                    i = t.contents();
                  i.length ? i.wrapAll(e) : t.append(e);
                },
          );
        },
        wrap: function (e) {
          var t = se.isFunction(e);
          return this.each(function (i) {
            se(this).wrapAll(t ? e.call(this, i) : e);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              se.nodeName(this, "body") ||
                se(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (se.expr.filters.hidden = function (e) {
        return (
          (e.offsetWidth <= 0 && e.offsetHeight <= 0) ||
          (!ie.reliableHiddenOffsets() &&
            "none" === ((e.style && e.style.display) || se.css(e, "display")))
        );
      }),
      (se.expr.filters.visible = function (e) {
        return !se.expr.filters.hidden(e);
      }));
    var qt = /%20/g,
      Kt = /\[\]$/,
      Yt = /\r?\n/g,
      Ut = /^(?:submit|button|image|reset|file)$/i,
      Xt = /^(?:input|select|textarea|keygen)/i;
    ((se.param = function (e, t) {
      var i,
        n = [],
        s = function (e, t) {
          ((t = se.isFunction(t) ? t() : null == t ? "" : t),
            (n[n.length] =
              encodeURIComponent(e) + "=" + encodeURIComponent(t)));
        };
      if (
        (void 0 === t && (t = se.ajaxSettings && se.ajaxSettings.traditional),
        se.isArray(e) || (e.jquery && !se.isPlainObject(e)))
      )
        se.each(e, function () {
          s(this.name, this.value);
        });
      else for (i in e) q(i, e[i], t, s);
      return n.join("&").replace(qt, "+");
    }),
      se.fn.extend({
        serialize: function () {
          return se.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = se.prop(this, "elements");
            return e ? se.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !se(this).is(":disabled") &&
                Xt.test(this.nodeName) &&
                !Ut.test(e) &&
                (this.checked || !Ie.test(e))
              );
            })
            .map(function (e, t) {
              var i = se(this).val();
              return null == i
                ? null
                : se.isArray(i)
                  ? se.map(i, function (e) {
                      return { name: t.name, value: e.replace(Yt, "\r\n") };
                    })
                  : { name: t.name, value: i.replace(Yt, "\r\n") };
            })
            .get();
        },
      }),
      (se.ajaxSettings.xhr =
        void 0 !== e.ActiveXObject
          ? function () {
              return (
                (!this.isLocal &&
                  /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  K()) ||
                Y()
              );
            }
          : K));
    var Vt = 0,
      Qt = {},
      Gt = se.ajaxSettings.xhr();
    (e.attachEvent &&
      e.attachEvent("onunload", function () {
        for (var e in Qt) Qt[e](void 0, !0);
      }),
      (ie.cors = !!Gt && "withCredentials" in Gt),
      (Gt = ie.ajax = !!Gt) &&
        se.ajaxTransport(function (e) {
          if (!e.crossDomain || ie.cors) {
            var t;
            return {
              send: function (i, n) {
                var s,
                  o = e.xhr(),
                  a = ++Vt;
                if (
                  (o.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (s in e.xhrFields) o[s] = e.xhrFields[s];
                (e.mimeType &&
                  o.overrideMimeType &&
                  o.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest"));
                for (s in i)
                  void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
                (o.send((e.hasContent && e.data) || null),
                  (t = function (i, s) {
                    var r, l, c;
                    if (t && (s || 4 === o.readyState))
                      if (
                        (delete Qt[a],
                        (t = void 0),
                        (o.onreadystatechange = se.noop),
                        s)
                      )
                        4 !== o.readyState && o.abort();
                      else {
                        ((c = {}),
                          (r = o.status),
                          "string" == typeof o.responseText &&
                            (c.text = o.responseText));
                        try {
                          l = o.statusText;
                        } catch (e) {
                          l = "";
                        }
                        r || !e.isLocal || e.crossDomain
                          ? 1223 === r && (r = 204)
                          : (r = c.text ? 200 : 404);
                      }
                    c && n(r, l, c, o.getAllResponseHeaders());
                  }),
                  e.async
                    ? 4 === o.readyState
                      ? setTimeout(t)
                      : (o.onreadystatechange = Qt[a] = t)
                    : t());
              },
              abort: function () {
                t && t(void 0, !0);
              },
            };
          }
        }),
      se.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          "text script": function (e) {
            return (se.globalEval(e), e);
          },
        },
      }),
      se.ajaxPrefilter("script", function (e) {
        (void 0 === e.cache && (e.cache = !1),
          e.crossDomain && ((e.type = "GET"), (e.global = !1)));
      }),
      se.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var t,
            i = fe.head || se("head")[0] || fe.documentElement;
          return {
            send: function (n, s) {
              ((t = fe.createElement("script")),
                (t.async = !0),
                e.scriptCharset && (t.charset = e.scriptCharset),
                (t.src = e.url),
                (t.onload = t.onreadystatechange =
                  function (e, i) {
                    (i ||
                      !t.readyState ||
                      /loaded|complete/.test(t.readyState)) &&
                      ((t.onload = t.onreadystatechange = null),
                      t.parentNode && t.parentNode.removeChild(t),
                      (t = null),
                      i || s(200, "success"));
                  }),
                i.insertBefore(t, i.firstChild));
            },
            abort: function () {
              t && t.onload(void 0, !0);
            },
          };
        }
      }));
    var Jt = [],
      Zt = /(=)\?(?=&|$)|\?\?/;
    (se.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Jt.pop() || se.expando + "_" + It++;
        return ((this[e] = !0), e);
      },
    }),
      se.ajaxPrefilter("json jsonp", function (t, i, n) {
        var s,
          o,
          a,
          r =
            !1 !== t.jsonp &&
            (Zt.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                !(t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded",
                ) &&
                Zt.test(t.data) &&
                "data");
        return r || "jsonp" === t.dataTypes[0]
          ? ((s = t.jsonpCallback =
              se.isFunction(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
            r
              ? (t[r] = t[r].replace(Zt, "$1" + s))
              : !1 !== t.jsonp &&
                (t.url += (Nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + s),
            (t.converters["script json"] = function () {
              return (a || se.error(s + " was not called"), a[0]);
            }),
            (t.dataTypes[0] = "json"),
            (o = e[s]),
            (e[s] = function () {
              a = arguments;
            }),
            n.always(function () {
              ((e[s] = o),
                t[s] && ((t.jsonpCallback = i.jsonpCallback), Jt.push(s)),
                a && se.isFunction(o) && o(a[0]),
                (a = o = void 0));
            }),
            "script")
          : void 0;
      }),
      (se.parseHTML = function (e, t, i) {
        if (!e || "string" != typeof e) return null;
        ("boolean" == typeof t && ((i = t), (t = !1)), (t = t || fe));
        var n = he.exec(e),
          s = !i && [];
        return n
          ? [t.createElement(n[1])]
          : ((n = se.buildFragment([e], t, s)),
            s && s.length && se(s).remove(),
            se.merge([], n.childNodes));
      }));
    var ei = se.fn.load;
    ((se.fn.load = function (e, t, i) {
      if ("string" != typeof e && ei) return ei.apply(this, arguments);
      var n,
        s,
        o,
        a = this,
        r = e.indexOf(" ");
      return (
        r >= 0 && ((n = se.trim(e.slice(r, e.length))), (e = e.slice(0, r))),
        se.isFunction(t)
          ? ((i = t), (t = void 0))
          : t && "object" == typeof t && (o = "POST"),
        a.length > 0 &&
          se
            .ajax({ url: e, type: o, dataType: "html", data: t })
            .done(function (e) {
              ((s = arguments),
                a.html(n ? se("<div>").append(se.parseHTML(e)).find(n) : e));
            })
            .complete(
              i &&
                function (e, t) {
                  a.each(i, s || [e.responseText, t, e]);
                },
            ),
        this
      );
    }),
      se.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          se.fn[t] = function (e) {
            return this.on(t, e);
          };
        },
      ),
      (se.expr.filters.animated = function (e) {
        return se.grep(se.timers, function (t) {
          return e === t.elem;
        }).length;
      }));
    var ti = e.document.documentElement;
    ((se.offset = {
      setOffset: function (e, t, i) {
        var n,
          s,
          o,
          a,
          r,
          l,
          c,
          u = se.css(e, "position"),
          h = se(e),
          d = {};
        ("static" === u && (e.style.position = "relative"),
          (r = h.offset()),
          (o = se.css(e, "top")),
          (l = se.css(e, "left")),
          (c =
            ("absolute" === u || "fixed" === u) &&
            se.inArray("auto", [o, l]) > -1),
          c
            ? ((n = h.position()), (a = n.top), (s = n.left))
            : ((a = parseFloat(o) || 0), (s = parseFloat(l) || 0)),
          se.isFunction(t) && (t = t.call(e, i, r)),
          null != t.top && (d.top = t.top - r.top + a),
          null != t.left && (d.left = t.left - r.left + s),
          "using" in t ? t.using.call(e, d) : h.css(d));
      },
    }),
      se.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  se.offset.setOffset(this, e, t);
                });
          var t,
            i,
            n = { top: 0, left: 0 },
            s = this[0],
            o = s && s.ownerDocument;
          return o
            ? ((t = o.documentElement),
              se.contains(t, s)
                ? (typeof s.getBoundingClientRect !== _e &&
                    (n = s.getBoundingClientRect()),
                  (i = U(o)),
                  {
                    top:
                      n.top +
                      (i.pageYOffset || t.scrollTop) -
                      (t.clientTop || 0),
                    left:
                      n.left +
                      (i.pageXOffset || t.scrollLeft) -
                      (t.clientLeft || 0),
                  })
                : n)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              i = { top: 0, left: 0 },
              n = this[0];
            return (
              "fixed" === se.css(n, "position")
                ? (t = n.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  se.nodeName(e[0], "html") || (i = e.offset()),
                  (i.top += se.css(e[0], "borderTopWidth", !0)),
                  (i.left += se.css(e[0], "borderLeftWidth", !0))),
              {
                top: t.top - i.top - se.css(n, "marginTop", !0),
                left: t.left - i.left - se.css(n, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent || ti;
              e &&
              !se.nodeName(e, "html") &&
              "static" === se.css(e, "position");
            )
              e = e.offsetParent;
            return e || ti;
          });
        },
      }),
      se.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, t) {
          var i = /Y/.test(t);
          se.fn[e] = function (n) {
            return Ee(
              this,
              function (e, n, s) {
                var o = U(e);
                return void 0 === s
                  ? o
                    ? t in o
                      ? o[t]
                      : o.document.documentElement[n]
                    : e[n]
                  : void (o
                      ? o.scrollTo(
                          i ? se(o).scrollLeft() : s,
                          i ? s : se(o).scrollTop(),
                        )
                      : (e[n] = s));
              },
              e,
              n,
              arguments.length,
              null,
            );
          };
        },
      ),
      se.each(["top", "left"], function (e, t) {
        se.cssHooks[t] = S(ie.pixelPosition, function (e, i) {
          return i
            ? ((i = et(e, t)), it.test(i) ? se(e).position()[t] + "px" : i)
            : void 0;
        });
      }),
      se.each({ Height: "height", Width: "width" }, function (e, t) {
        se.each(
          { padding: "inner" + e, content: t, "": "outer" + e },
          function (i, n) {
            se.fn[n] = function (n, s) {
              var o = arguments.length && (i || "boolean" != typeof n),
                a = i || (!0 === n || !0 === s ? "margin" : "border");
              return Ee(
                this,
                function (t, i, n) {
                  var s;
                  return se.isWindow(t)
                    ? t.document.documentElement["client" + e]
                    : 9 === t.nodeType
                      ? ((s = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          s["scroll" + e],
                          t.body["offset" + e],
                          s["offset" + e],
                          s["client" + e],
                        ))
                      : void 0 === n
                        ? se.css(t, i, a)
                        : se.style(t, i, n, a);
                },
                t,
                o ? n : void 0,
                o,
                null,
              );
            };
          },
        );
      }),
      (se.fn.size = function () {
        return this.length;
      }),
      (se.fn.andSelf = se.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return se;
        }));
    var ii = e.jQuery,
      ni = e.$;
    return (
      (se.noConflict = function (t) {
        return (
          e.$ === se && (e.$ = ni),
          t && e.jQuery === se && (e.jQuery = ii),
          se
        );
      }),
      typeof t === _e && (e.jQuery = e.$ = se),
      se
    );
  }),
  $("a.open_close").on("click", function () {
    ($(".main-menu").toggleClass("show"),
      $(".layer").toggleClass("layer-is-visible"));
  }),
  $("a.show-submenu").on("click", function () {
    $(this).next().toggleClass("show_normal");
  }),
  $("a.show-submenu-mega").on("click", function () {
    $(this).next().toggleClass("show_mega");
  }),
  $(window).width() <= 480 &&
    $("a.open_close").on("click", function () {
      $(".cmn-toggle-switch").removeClass("active");
    }));
for (
  var toggles = document.querySelectorAll(".cmn-toggle-switch"),
    i = toggles.length - 1;
  i >= 0;
  i--
) {
  var toggle = toggles[i];
  toggleHandler(toggle);
} /*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
(+(function (e) {
  "use strict";
  var t = e.fn.jquery.split(" ")[0].split(".");
  if ((t[0] < 2 && t[1] < 9) || (1 == t[0] && 9 == t[1] && t[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher",
    );
})(jQuery),
  (function (e) {
    "use strict";
    function t() {
      var e = document.createElement("bootstrap"),
        t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var i in t) if (void 0 !== e.style[i]) return { end: t[i] };
      return !1;
    }
    ((e.fn.emulateTransitionEnd = function (t) {
      var i = !1,
        n = this;
      e(this).one("bsTransitionEnd", function () {
        i = !0;
      });
      var s = function () {
        i || e(n).trigger(e.support.transition.end);
      };
      return (setTimeout(s, t), this);
    }),
      e(function () {
        ((e.support.transition = t()),
          e.support.transition &&
            (e.event.special.bsTransitionEnd = {
              bindType: e.support.transition.end,
              delegateType: e.support.transition.end,
              handle: function (t) {
                return e(t.target).is(this)
                  ? t.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            }));
      }));
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          s = i.data("bs.alert");
        (s || i.data("bs.alert", (s = new n(this))),
          "string" == typeof t && s[t].call(i));
      });
    }
    var i = '[data-dismiss="alert"]',
      n = function (t) {
        e(t).on("click", i, this.close);
      };
    ((n.VERSION = "3.3.5"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.close = function (t) {
        function i() {
          a.detach().trigger("closed.bs.alert").remove();
        }
        var s = e(this),
          o = s.attr("data-target");
        o || ((o = s.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, "")));
        var a = e(o);
        (t && t.preventDefault(),
          a.length || (a = s.closest(".alert")),
          a.trigger((t = e.Event("close.bs.alert"))),
          t.isDefaultPrevented() ||
            (a.removeClass("in"),
            e.support.transition && a.hasClass("fade")
              ? a
                  .one("bsTransitionEnd", i)
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : i()));
      }));
    var s = e.fn.alert;
    ((e.fn.alert = t),
      (e.fn.alert.Constructor = n),
      (e.fn.alert.noConflict = function () {
        return ((e.fn.alert = s), this);
      }),
      e(document).on("click.bs.alert.data-api", i, n.prototype.close));
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var n = e(this),
          s = n.data("bs.button"),
          o = "object" == typeof t && t;
        (s || n.data("bs.button", (s = new i(this, o))),
          "toggle" == t ? s.toggle() : t && s.setState(t));
      });
    }
    var i = function (t, n) {
      ((this.$element = e(t)),
        (this.options = e.extend({}, i.DEFAULTS, n)),
        (this.isLoading = !1));
    };
    ((i.VERSION = "3.3.5"),
      (i.DEFAULTS = { loadingText: "loading..." }),
      (i.prototype.setState = function (t) {
        var i = "disabled",
          n = this.$element,
          s = n.is("input") ? "val" : "html",
          o = n.data();
        ((t += "Text"),
          null == o.resetText && n.data("resetText", n[s]()),
          setTimeout(
            e.proxy(function () {
              (n[s](null == o[t] ? this.options[t] : o[t]),
                "loadingText" == t
                  ? ((this.isLoading = !0), n.addClass(i).attr(i, i))
                  : this.isLoading &&
                    ((this.isLoading = !1), n.removeClass(i).removeAttr(i)));
            }, this),
            0,
          ));
      }),
      (i.prototype.toggle = function () {
        var e = !0,
          t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
          var i = this.$element.find("input");
          ("radio" == i.prop("type")
            ? (i.prop("checked") && (e = !1),
              t.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == i.prop("type") &&
              (i.prop("checked") !== this.$element.hasClass("active") &&
                (e = !1),
              this.$element.toggleClass("active")),
            i.prop("checked", this.$element.hasClass("active")),
            e && i.trigger("change"));
        } else
          (this.$element.attr(
            "aria-pressed",
            !this.$element.hasClass("active"),
          ),
            this.$element.toggleClass("active"));
      }));
    var n = e.fn.button;
    ((e.fn.button = t),
      (e.fn.button.Constructor = i),
      (e.fn.button.noConflict = function () {
        return ((e.fn.button = n), this);
      }),
      e(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (i) {
            var n = e(i.target);
            (n.hasClass("btn") || (n = n.closest(".btn")),
              t.call(n, "toggle"),
              e(i.target).is('input[type="radio"]') ||
                e(i.target).is('input[type="checkbox"]') ||
                i.preventDefault());
          },
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (t) {
            e(t.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(t.type));
          },
        ));
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var n = e(this),
          s = n.data("bs.carousel"),
          o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t),
          a = "string" == typeof t ? t : o.slide;
        (s || n.data("bs.carousel", (s = new i(this, o))),
          "number" == typeof t
            ? s.to(t)
            : a
              ? s[a]()
              : o.interval && s.pause().cycle());
      });
    }
    var i = function (t, i) {
      ((this.$element = e(t)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = i),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", e.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", e.proxy(this.cycle, this)));
    };
    ((i.VERSION = "3.3.5"),
      (i.TRANSITION_DURATION = 600),
      (i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (i.prototype.keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
          switch (e.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          e.preventDefault();
        }
      }),
      (i.prototype.cycle = function (t) {
        return (
          t || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              e.proxy(this.next, this),
              this.options.interval,
            )),
          this
        );
      }),
      (i.prototype.getItemIndex = function (e) {
        return (
          (this.$items = e.parent().children(".item")),
          this.$items.index(e || this.$active)
        );
      }),
      (i.prototype.getItemForDirection = function (e, t) {
        var i = this.getItemIndex(t);
        if (
          (("prev" == e && 0 === i) ||
            ("next" == e && i == this.$items.length - 1)) &&
          !this.options.wrap
        )
          return t;
        var n = "prev" == e ? -1 : 1,
          s = (i + n) % this.$items.length;
        return this.$items.eq(s);
      }),
      (i.prototype.to = function (e) {
        var t = this,
          i = this.getItemIndex(
            (this.$active = this.$element.find(".item.active")),
          );
        return e > this.$items.length - 1 || 0 > e
          ? void 0
          : this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                t.to(e);
              })
            : i == e
              ? this.pause().cycle()
              : this.slide(e > i ? "next" : "prev", this.$items.eq(e));
      }),
      (i.prototype.pause = function (t) {
        return (
          t || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            e.support.transition &&
            (this.$element.trigger(e.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (i.prototype.slide = function (t, n) {
        var s = this.$element.find(".item.active"),
          o = n || this.getItemForDirection(t, s),
          a = this.interval,
          r = "next" == t ? "left" : "right",
          l = this;
        if (o.hasClass("active")) return (this.sliding = !1);
        var c = o[0],
          u = e.Event("slide.bs.carousel", { relatedTarget: c, direction: r });
        if ((this.$element.trigger(u), !u.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), a && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var h = e(this.$indicators.children()[this.getItemIndex(o)]);
            h && h.addClass("active");
          }
          var d = e.Event("slid.bs.carousel", {
            relatedTarget: c,
            direction: r,
          });
          return (
            e.support.transition && this.$element.hasClass("slide")
              ? (o.addClass(t),
                o[0].offsetWidth,
                s.addClass(r),
                o.addClass(r),
                s
                  .one("bsTransitionEnd", function () {
                    (o.removeClass([t, r].join(" ")).addClass("active"),
                      s.removeClass(["active", r].join(" ")),
                      (l.sliding = !1),
                      setTimeout(function () {
                        l.$element.trigger(d);
                      }, 0));
                  })
                  .emulateTransitionEnd(i.TRANSITION_DURATION))
              : (s.removeClass("active"),
                o.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(d)),
            a && this.cycle(),
            this
          );
        }
      }));
    var n = e.fn.carousel;
    ((e.fn.carousel = t),
      (e.fn.carousel.Constructor = i),
      (e.fn.carousel.noConflict = function () {
        return ((e.fn.carousel = n), this);
      }));
    var s = function (i) {
      var n,
        s = e(this),
        o = e(
          s.attr("data-target") ||
            ((n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
        );
      if (o.hasClass("carousel")) {
        var a = e.extend({}, o.data(), s.data()),
          r = s.attr("data-slide-to");
        (r && (a.interval = !1),
          t.call(o, a),
          r && o.data("bs.carousel").to(r),
          i.preventDefault());
      }
    };
    (e(document)
      .on("click.bs.carousel.data-api", "[data-slide]", s)
      .on("click.bs.carousel.data-api", "[data-slide-to]", s),
      e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
          var i = e(this);
          t.call(i, i.data());
        });
      }));
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      var i,
        n =
          t.attr("data-target") ||
          ((i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
      return e(n);
    }
    function i(t) {
      return this.each(function () {
        var i = e(this),
          s = i.data("bs.collapse"),
          o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
        (!s && o.toggle && /show|hide/.test(t) && (o.toggle = !1),
          s || i.data("bs.collapse", (s = new n(this, o))),
          "string" == typeof t && s[t]());
      });
    }
    var n = function (t, i) {
      ((this.$element = e(t)),
        (this.options = e.extend({}, n.DEFAULTS, i)),
        (this.$trigger = e(
          '[data-toggle="collapse"][href="#' +
            t.id +
            '"],[data-toggle="collapse"][data-target="#' +
            t.id +
            '"]',
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle());
    };
    ((n.VERSION = "3.3.5"),
      (n.TRANSITION_DURATION = 350),
      (n.DEFAULTS = { toggle: !0 }),
      (n.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height";
      }),
      (n.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var t,
            s =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(s && s.length && (t = s.data("bs.collapse")) && t.transitioning)
          ) {
            var o = e.Event("show.bs.collapse");
            if ((this.$element.trigger(o), !o.isDefaultPrevented())) {
              s &&
                s.length &&
                (i.call(s, "hide"), t || s.data("bs.collapse", null));
              var a = this.dimension();
              (this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [a](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1));
              var r = function () {
                (this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [a](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse"));
              };
              if (!e.support.transition) return r.call(this);
              var l = e.camelCase(["scroll", a].join("-"));
              this.$element
                .one("bsTransitionEnd", e.proxy(r, this))
                .emulateTransitionEnd(n.TRANSITION_DURATION)
                [a](this.$element[0][l]);
            }
          }
        }
      }),
      (n.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var t = e.Event("hide.bs.collapse");
          if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
            var i = this.dimension();
            (this.$element[i](this.$element[i]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1));
            var s = function () {
              ((this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse"));
            };
            return e.support.transition
              ? void this.$element[i](0)
                  .one("bsTransitionEnd", e.proxy(s, this))
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : s.call(this);
          }
        }
      }),
      (n.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (n.prototype.getParent = function () {
        return e(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]',
          )
          .each(
            e.proxy(function (i, n) {
              var s = e(n);
              this.addAriaAndCollapsedClass(t(s), s);
            }, this),
          )
          .end();
      }),
      (n.prototype.addAriaAndCollapsedClass = function (e, t) {
        var i = e.hasClass("in");
        (e.attr("aria-expanded", i),
          t.toggleClass("collapsed", !i).attr("aria-expanded", i));
      }));
    var s = e.fn.collapse;
    ((e.fn.collapse = i),
      (e.fn.collapse.Constructor = n),
      (e.fn.collapse.noConflict = function () {
        return ((e.fn.collapse = s), this);
      }),
      e(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (n) {
          var s = e(this);
          s.attr("data-target") || n.preventDefault();
          var o = t(s),
            a = o.data("bs.collapse"),
            r = a ? "toggle" : s.data();
          i.call(o, r);
        },
      ));
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      var i = t.attr("data-target");
      i ||
        ((i = t.attr("href")),
        (i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")));
      var n = i && e(i);
      return n && n.length ? n : t.parent();
    }
    function i(i) {
      (i && 3 === i.which) ||
        (e(s).remove(),
        e(o).each(function () {
          var n = e(this),
            s = t(n),
            o = { relatedTarget: this };
          s.hasClass("open") &&
            ((i &&
              "click" == i.type &&
              /input|textarea/i.test(i.target.tagName) &&
              e.contains(s[0], i.target)) ||
              (s.trigger((i = e.Event("hide.bs.dropdown", o))),
              i.isDefaultPrevented() ||
                (n.attr("aria-expanded", "false"),
                s.removeClass("open").trigger("hidden.bs.dropdown", o))));
        }));
    }
    function n(t) {
      return this.each(function () {
        var i = e(this),
          n = i.data("bs.dropdown");
        (n || i.data("bs.dropdown", (n = new a(this))),
          "string" == typeof t && n[t].call(i));
      });
    }
    var s = ".dropdown-backdrop",
      o = '[data-toggle="dropdown"]',
      a = function (t) {
        e(t).on("click.bs.dropdown", this.toggle);
      };
    ((a.VERSION = "3.3.5"),
      (a.prototype.toggle = function (n) {
        var s = e(this);
        if (!s.is(".disabled, :disabled")) {
          var o = t(s),
            a = o.hasClass("open");
          if ((i(), !a)) {
            "ontouchstart" in document.documentElement &&
              !o.closest(".navbar-nav").length &&
              e(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(e(this))
                .on("click", i);
            var r = { relatedTarget: this };
            if (
              (o.trigger((n = e.Event("show.bs.dropdown", r))),
              n.isDefaultPrevented())
            )
              return;
            (s.trigger("focus").attr("aria-expanded", "true"),
              o.toggleClass("open").trigger("shown.bs.dropdown", r));
          }
          return !1;
        }
      }),
      (a.prototype.keydown = function (i) {
        if (
          /(38|40|27|32)/.test(i.which) &&
          !/input|textarea/i.test(i.target.tagName)
        ) {
          var n = e(this);
          if (
            (i.preventDefault(),
            i.stopPropagation(),
            !n.is(".disabled, :disabled"))
          ) {
            var s = t(n),
              a = s.hasClass("open");
            if ((!a && 27 != i.which) || (a && 27 == i.which))
              return (
                27 == i.which && s.find(o).trigger("focus"),
                n.trigger("click")
              );
            var r = " li:not(.disabled):visible a",
              l = s.find(".dropdown-menu" + r);
            if (l.length) {
              var c = l.index(i.target);
              (38 == i.which && c > 0 && c--,
                40 == i.which && c < l.length - 1 && c++,
                ~c || (c = 0),
                l.eq(c).trigger("focus"));
            }
          }
        }
      }));
    var r = e.fn.dropdown;
    ((e.fn.dropdown = n),
      (e.fn.dropdown.Constructor = a),
      (e.fn.dropdown.noConflict = function () {
        return ((e.fn.dropdown = r), this);
      }),
      e(document)
        .on("click.bs.dropdown.data-api", i)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
          e.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", o, a.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", o, a.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          a.prototype.keydown,
        ));
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t, n) {
      return this.each(function () {
        var s = e(this),
          o = s.data("bs.modal"),
          a = e.extend({}, i.DEFAULTS, s.data(), "object" == typeof t && t);
        (o || s.data("bs.modal", (o = new i(this, a))),
          "string" == typeof t ? o[t](n) : a.show && o.show(n));
      });
    }
    var i = function (t, i) {
      ((this.options = i),
        (this.$body = e(document.body)),
        (this.$element = e(t)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            e.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this),
          ));
    };
    ((i.VERSION = "3.3.5"),
      (i.TRANSITION_DURATION = 300),
      (i.BACKDROP_TRANSITION_DURATION = 150),
      (i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (i.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e);
      }),
      (i.prototype.show = function (t) {
        var n = this,
          s = e.Event("show.bs.modal", { relatedTarget: t });
        (this.$element.trigger(s),
          this.isShown ||
            s.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              e.proxy(this.hide, this),
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              n.$element.one("mouseup.dismiss.bs.modal", function (t) {
                e(t.target).is(n.$element) && (n.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var s = e.support.transition && n.$element.hasClass("fade");
              (n.$element.parent().length || n.$element.appendTo(n.$body),
                n.$element.show().scrollTop(0),
                n.adjustDialog(),
                s && n.$element[0].offsetWidth,
                n.$element.addClass("in"),
                n.enforceFocus());
              var o = e.Event("shown.bs.modal", { relatedTarget: t });
              s
                ? n.$dialog
                    .one("bsTransitionEnd", function () {
                      n.$element.trigger("focus").trigger(o);
                    })
                    .emulateTransitionEnd(i.TRANSITION_DURATION)
                : n.$element.trigger("focus").trigger(o);
            })));
      }),
      (i.prototype.hide = function (t) {
        (t && t.preventDefault(),
          (t = e.Event("hide.bs.modal")),
          this.$element.trigger(t),
          this.isShown &&
            !t.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            e(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            e.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", e.proxy(this.hideModal, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : this.hideModal()));
      }),
      (i.prototype.enforceFocus = function () {
        e(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            e.proxy(function (e) {
              this.$element[0] === e.target ||
                this.$element.has(e.target).length ||
                this.$element.trigger("focus");
            }, this),
          );
      }),
      (i.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              e.proxy(function (e) {
                27 == e.which && this.hide();
              }, this),
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (i.prototype.resize = function () {
        this.isShown
          ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this))
          : e(window).off("resize.bs.modal");
      }),
      (i.prototype.hideModal = function () {
        var e = this;
        (this.$element.hide(),
          this.backdrop(function () {
            (e.$body.removeClass("modal-open"),
              e.resetAdjustments(),
              e.resetScrollbar(),
              e.$element.trigger("hidden.bs.modal"));
          }));
      }),
      (i.prototype.removeBackdrop = function () {
        (this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null));
      }),
      (i.prototype.backdrop = function (t) {
        var n = this,
          s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var o = e.support.transition && s;
          if (
            ((this.$backdrop = e(document.createElement("div"))
              .addClass("modal-backdrop " + s)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              e.proxy(function (e) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      e.target === e.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this),
            ),
            o && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
          )
            return;
          o
            ? this.$backdrop
                .one("bsTransitionEnd", t)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : t();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var a = function () {
            (n.removeBackdrop(), t && t());
          };
          e.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", a)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : a();
        } else t && t();
      }),
      (i.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (i.prototype.adjustDialog = function () {
        var e =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : "",
        });
      }),
      (i.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (i.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
          var t = document.documentElement.getBoundingClientRect();
          e = t.right - Math.abs(t.left);
        }
        ((this.bodyIsOverflowing = document.body.clientWidth < e),
          (this.scrollbarWidth = this.measureScrollbar()));
      }),
      (i.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        ((this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", e + this.scrollbarWidth));
      }),
      (i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (i.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        ((e.className = "modal-scrollbar-measure"), this.$body.append(e));
        var t = e.offsetWidth - e.clientWidth;
        return (this.$body[0].removeChild(e), t);
      }));
    var n = e.fn.modal;
    ((e.fn.modal = t),
      (e.fn.modal.Constructor = i),
      (e.fn.modal.noConflict = function () {
        return ((e.fn.modal = n), this);
      }),
      e(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (i) {
          var n = e(this),
            s = n.attr("href"),
            o = e(
              n.attr("data-target") || (s && s.replace(/.*(?=#[^\s]+$)/, "")),
            ),
            a = o.data("bs.modal")
              ? "toggle"
              : e.extend({ remote: !/#/.test(s) && s }, o.data(), n.data());
          (n.is("a") && i.preventDefault(),
            o.one("show.bs.modal", function (e) {
              e.isDefaultPrevented() ||
                o.one("hidden.bs.modal", function () {
                  n.is(":visible") && n.trigger("focus");
                });
            }),
            t.call(o, a, this));
        },
      ));
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var n = e(this),
          s = n.data("bs.tooltip"),
          o = "object" == typeof t && t;
        (s || !/destroy|hide/.test(t)) &&
          (s || n.data("bs.tooltip", (s = new i(this, o))),
          "string" == typeof t && s[t]());
      });
    }
    var i = function (e, t) {
      ((this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", e, t));
    };
    ((i.VERSION = "3.3.5"),
      (i.TRANSITION_DURATION = 150),
      (i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (i.prototype.init = function (t, i, n) {
        if (
          ((this.enabled = !0),
          (this.type = t),
          (this.$element = e(i)),
          (this.options = this.getOptions(n)),
          (this.$viewport =
            this.options.viewport &&
            e(
              e.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport,
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!",
          );
        for (var s = this.options.trigger.split(" "), o = s.length; o--; ) {
          var a = s[o];
          if ("click" == a)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              e.proxy(this.toggle, this),
            );
          else if ("manual" != a) {
            var r = "hover" == a ? "mouseenter" : "focusin",
              l = "hover" == a ? "mouseleave" : "focusout";
            (this.$element.on(
              r + "." + this.type,
              this.options.selector,
              e.proxy(this.enter, this),
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                e.proxy(this.leave, this),
              ));
          }
        }
        this.options.selector
          ? (this._options = e.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (i.prototype.getDefaults = function () {
        return i.DEFAULTS;
      }),
      (i.prototype.getOptions = function (t) {
        return (
          (t = e.extend({}, this.getDefaults(), this.$element.data(), t)),
          t.delay &&
            "number" == typeof t.delay &&
            (t.delay = { show: t.delay, hide: t.delay }),
          t
        );
      }),
      (i.prototype.getDelegateOptions = function () {
        var t = {},
          i = this.getDefaults();
        return (
          this._options &&
            e.each(this._options, function (e, n) {
              i[e] != n && (t[e] = n);
            }),
          t
        );
      }),
      (i.prototype.enter = function (t) {
        var i =
          t instanceof this.constructor
            ? t
            : e(t.currentTarget).data("bs." + this.type);
        return (
          i ||
            ((i = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions(),
            )),
            e(t.currentTarget).data("bs." + this.type, i)),
          t instanceof e.Event &&
            (i.inState["focusin" == t.type ? "focus" : "hover"] = !0),
          i.tip().hasClass("in") || "in" == i.hoverState
            ? void (i.hoverState = "in")
            : (clearTimeout(i.timeout),
              (i.hoverState = "in"),
              i.options.delay && i.options.delay.show
                ? void (i.timeout = setTimeout(function () {
                    "in" == i.hoverState && i.show();
                  }, i.options.delay.show))
                : i.show())
        );
      }),
      (i.prototype.isInStateTrue = function () {
        for (var e in this.inState) if (this.inState[e]) return !0;
        return !1;
      }),
      (i.prototype.leave = function (t) {
        var i =
          t instanceof this.constructor
            ? t
            : e(t.currentTarget).data("bs." + this.type);
        return (
          i ||
            ((i = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions(),
            )),
            e(t.currentTarget).data("bs." + this.type, i)),
          t instanceof e.Event &&
            (i.inState["focusout" == t.type ? "focus" : "hover"] = !1),
          i.isInStateTrue()
            ? void 0
            : (clearTimeout(i.timeout),
              (i.hoverState = "out"),
              i.options.delay && i.options.delay.hide
                ? void (i.timeout = setTimeout(function () {
                    "out" == i.hoverState && i.hide();
                  }, i.options.delay.hide))
                : i.hide())
        );
      }),
      (i.prototype.show = function () {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(t);
          var n = e.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0],
          );
          if (t.isDefaultPrevented() || !n) return;
          var s = this,
            o = this.tip(),
            a = this.getUID(this.type);
          (this.setContent(),
            o.attr("id", a),
            this.$element.attr("aria-describedby", a),
            this.options.animation && o.addClass("fade"));
          var r =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, o[0], this.$element[0])
                : this.options.placement,
            l = /\s?auto?\s?/i,
            c = l.test(r);
          (c && (r = r.replace(l, "") || "top"),
            o
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(r)
              .data("bs." + this.type, this),
            this.options.container
              ? o.appendTo(this.options.container)
              : o.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type));
          var u = this.getPosition(),
            h = o[0].offsetWidth,
            d = o[0].offsetHeight;
          if (c) {
            var p = r,
              f = this.getPosition(this.$viewport);
            ((r =
              "bottom" == r && u.bottom + d > f.bottom
                ? "top"
                : "top" == r && u.top - d < f.top
                  ? "bottom"
                  : "right" == r && u.right + h > f.width
                    ? "left"
                    : "left" == r && u.left - h < f.left
                      ? "right"
                      : r),
              o.removeClass(p).addClass(r));
          }
          var m = this.getCalculatedOffset(r, u, h, d);
          this.applyPlacement(m, r);
          var g = function () {
            var e = s.hoverState;
            (s.$element.trigger("shown.bs." + s.type),
              (s.hoverState = null),
              "out" == e && s.leave(s));
          };
          e.support.transition && this.$tip.hasClass("fade")
            ? o
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(i.TRANSITION_DURATION)
            : g();
        }
      }),
      (i.prototype.applyPlacement = function (t, i) {
        var n = this.tip(),
          s = n[0].offsetWidth,
          o = n[0].offsetHeight,
          a = parseInt(n.css("margin-top"), 10),
          r = parseInt(n.css("margin-left"), 10);
        (isNaN(a) && (a = 0),
          isNaN(r) && (r = 0),
          (t.top += a),
          (t.left += r),
          e.offset.setOffset(
            n[0],
            e.extend(
              {
                using: function (e) {
                  n.css({ top: Math.round(e.top), left: Math.round(e.left) });
                },
              },
              t,
            ),
            0,
          ),
          n.addClass("in"));
        var l = n[0].offsetWidth,
          c = n[0].offsetHeight;
        "top" == i && c != o && (t.top = t.top + o - c);
        var u = this.getViewportAdjustedDelta(i, t, l, c);
        u.left ? (t.left += u.left) : (t.top += u.top);
        var h = /top|bottom/.test(i),
          d = h ? 2 * u.left - s + l : 2 * u.top - o + c,
          p = h ? "offsetWidth" : "offsetHeight";
        (n.offset(t), this.replaceArrow(d, n[0][p], h));
      }),
      (i.prototype.replaceArrow = function (e, t, i) {
        this.arrow()
          .css(i ? "left" : "top", 50 * (1 - e / t) + "%")
          .css(i ? "top" : "left", "");
      }),
      (i.prototype.setContent = function () {
        var e = this.tip(),
          t = this.getTitle();
        (e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
          e.removeClass("fade in top bottom left right"));
      }),
      (i.prototype.hide = function (t) {
        function n() {
          ("in" != s.hoverState && o.detach(),
            s.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + s.type),
            t && t());
        }
        var s = this,
          o = e(this.$tip),
          a = e.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(a),
          a.isDefaultPrevented()
            ? void 0
            : (o.removeClass("in"),
              e.support.transition && o.hasClass("fade")
                ? o
                    .one("bsTransitionEnd", n)
                    .emulateTransitionEnd(i.TRANSITION_DURATION)
                : n(),
              (this.hoverState = null),
              this)
        );
      }),
      (i.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) &&
          e
            .attr("data-original-title", e.attr("title") || "")
            .attr("title", "");
      }),
      (i.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (i.prototype.getPosition = function (t) {
        t = t || this.$element;
        var i = t[0],
          n = "BODY" == i.tagName,
          s = i.getBoundingClientRect();
        null == s.width &&
          (s = e.extend({}, s, {
            width: s.right - s.left,
            height: s.bottom - s.top,
          }));
        var o = n ? { top: 0, left: 0 } : t.offset(),
          a = {
            scroll: n
              ? document.documentElement.scrollTop || document.body.scrollTop
              : t.scrollTop(),
          },
          r = n
            ? { width: e(window).width(), height: e(window).height() }
            : null;
        return e.extend({}, s, a, r, o);
      }),
      (i.prototype.getCalculatedOffset = function (e, t, i, n) {
        return "bottom" == e
          ? { top: t.top + t.height, left: t.left + t.width / 2 - i / 2 }
          : "top" == e
            ? { top: t.top - n, left: t.left + t.width / 2 - i / 2 }
            : "left" == e
              ? { top: t.top + t.height / 2 - n / 2, left: t.left - i }
              : { top: t.top + t.height / 2 - n / 2, left: t.left + t.width };
      }),
      (i.prototype.getViewportAdjustedDelta = function (e, t, i, n) {
        var s = { top: 0, left: 0 };
        if (!this.$viewport) return s;
        var o = (this.options.viewport && this.options.viewport.padding) || 0,
          a = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
          var r = t.top - o - a.scroll,
            l = t.top + o - a.scroll + n;
          r < a.top
            ? (s.top = a.top - r)
            : l > a.top + a.height && (s.top = a.top + a.height - l);
        } else {
          var c = t.left - o,
            u = t.left + o + i;
          c < a.left
            ? (s.left = a.left - c)
            : u > a.right && (s.left = a.left + a.width - u);
        }
        return s;
      }),
      (i.prototype.getTitle = function () {
        var e = this.$element,
          t = this.options;
        return (
          e.attr("data-original-title") ||
          ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
        );
      }),
      (i.prototype.getUID = function (e) {
        do {
          e += ~~(1e6 * Math.random());
        } while (document.getElementById(e));
        return e;
      }),
      (i.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = e(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!",
          );
        return this.$tip;
      }),
      (i.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (i.prototype.enable = function () {
        this.enabled = !0;
      }),
      (i.prototype.disable = function () {
        this.enabled = !1;
      }),
      (i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (i.prototype.toggle = function (t) {
        var i = this;
        (t &&
          ((i = e(t.currentTarget).data("bs." + this.type)) ||
            ((i = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions(),
            )),
            e(t.currentTarget).data("bs." + this.type, i))),
          t
            ? ((i.inState.click = !i.inState.click),
              i.isInStateTrue() ? i.enter(i) : i.leave(i))
            : i.tip().hasClass("in")
              ? i.leave(i)
              : i.enter(i));
      }),
      (i.prototype.destroy = function () {
        var e = this;
        (clearTimeout(this.timeout),
          this.hide(function () {
            (e.$element.off("." + e.type).removeData("bs." + e.type),
              e.$tip && e.$tip.detach(),
              (e.$tip = null),
              (e.$arrow = null),
              (e.$viewport = null));
          }));
      }));
    var n = e.fn.tooltip;
    ((e.fn.tooltip = t),
      (e.fn.tooltip.Constructor = i),
      (e.fn.tooltip.noConflict = function () {
        return ((e.fn.tooltip = n), this);
      }));
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var n = e(this),
          s = n.data("bs.popover"),
          o = "object" == typeof t && t;
        (s || !/destroy|hide/.test(t)) &&
          (s || n.data("bs.popover", (s = new i(this, o))),
          "string" == typeof t && s[t]());
      });
    }
    var i = function (e, t) {
      this.init("popover", e, t);
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    ((i.VERSION = "3.3.5"),
      (i.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (i.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype)),
      (i.prototype.constructor = i),
      (i.prototype.getDefaults = function () {
        return i.DEFAULTS;
      }),
      (i.prototype.setContent = function () {
        var e = this.tip(),
          t = this.getTitle(),
          i = this.getContent();
        (e.find(".popover-title")[this.options.html ? "html" : "text"](t),
          e
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof i
                  ? "html"
                  : "append"
                : "text"
            ](i),
          e.removeClass("fade top bottom left right in"),
          e.find(".popover-title").html() || e.find(".popover-title").hide());
      }),
      (i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (i.prototype.getContent = function () {
        var e = this.$element,
          t = this.options;
        return (
          e.attr("data-content") ||
          ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
        );
      }),
      (i.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      }));
    var n = e.fn.popover;
    ((e.fn.popover = t),
      (e.fn.popover.Constructor = i),
      (e.fn.popover.noConflict = function () {
        return ((e.fn.popover = n), this);
      }));
  })(jQuery),
  (function (e) {
    "use strict";
    function t(i, n) {
      ((this.$body = e(document.body)),
        (this.$scrollElement = e(e(i).is(document.body) ? window : i)),
        (this.options = e.extend({}, t.DEFAULTS, n)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          e.proxy(this.process, this),
        ),
        this.refresh(),
        this.process());
    }
    function i(i) {
      return this.each(function () {
        var n = e(this),
          s = n.data("bs.scrollspy"),
          o = "object" == typeof i && i;
        (s || n.data("bs.scrollspy", (s = new t(this, o))),
          "string" == typeof i && s[i]());
      });
    }
    ((t.VERSION = "3.3.5"),
      (t.DEFAULTS = { offset: 10 }),
      (t.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight,
          )
        );
      }),
      (t.prototype.refresh = function () {
        var t = this,
          i = "offset",
          n = 0;
        ((this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          e.isWindow(this.$scrollElement[0]) ||
            ((i = "position"), (n = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var t = e(this),
                s = t.data("target") || t.attr("href"),
                o = /^#./.test(s) && e(s);
              return (
                (o && o.length && o.is(":visible") && [[o[i]().top + n, s]]) ||
                null
              );
            })
            .sort(function (e, t) {
              return e[0] - t[0];
            })
            .each(function () {
              (t.offsets.push(this[0]), t.targets.push(this[1]));
            }));
      }),
      (t.prototype.process = function () {
        var e,
          t = this.$scrollElement.scrollTop() + this.options.offset,
          i = this.getScrollHeight(),
          n = this.options.offset + i - this.$scrollElement.height(),
          s = this.offsets,
          o = this.targets,
          a = this.activeTarget;
        if ((this.scrollHeight != i && this.refresh(), t >= n))
          return a != (e = o[o.length - 1]) && this.activate(e);
        if (a && t < s[0]) return ((this.activeTarget = null), this.clear());
        for (e = s.length; e--; )
          a != o[e] &&
            t >= s[e] &&
            (void 0 === s[e + 1] || t < s[e + 1]) &&
            this.activate(o[e]);
      }),
      (t.prototype.activate = function (t) {
        ((this.activeTarget = t), this.clear());
        var i =
            this.selector +
            '[data-target="' +
            t +
            '"],' +
            this.selector +
            '[href="' +
            t +
            '"]',
          n = e(i).parents("li").addClass("active");
        (n.parent(".dropdown-menu").length &&
          (n = n.closest("li.dropdown").addClass("active")),
          n.trigger("activate.bs.scrollspy"));
      }),
      (t.prototype.clear = function () {
        e(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      }));
    var n = e.fn.scrollspy;
    ((e.fn.scrollspy = i),
      (e.fn.scrollspy.Constructor = t),
      (e.fn.scrollspy.noConflict = function () {
        return ((e.fn.scrollspy = n), this);
      }),
      e(window).on("load.bs.scrollspy.data-api", function () {
        e('[data-spy="scroll"]').each(function () {
          var t = e(this);
          i.call(t, t.data());
        });
      }));
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var n = e(this),
          s = n.data("bs.tab");
        (s || n.data("bs.tab", (s = new i(this))),
          "string" == typeof t && s[t]());
      });
    }
    var i = function (t) {
      this.element = e(t);
    };
    ((i.VERSION = "3.3.5"),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.show = function () {
        var t = this.element,
          i = t.closest("ul:not(.dropdown-menu)"),
          n = t.data("target");
        if (
          (n ||
            ((n = t.attr("href")), (n = n && n.replace(/.*(?=#[^\s]*$)/, ""))),
          !t.parent("li").hasClass("active"))
        ) {
          var s = i.find(".active:last a"),
            o = e.Event("hide.bs.tab", { relatedTarget: t[0] }),
            a = e.Event("show.bs.tab", { relatedTarget: s[0] });
          if (
            (s.trigger(o),
            t.trigger(a),
            !a.isDefaultPrevented() && !o.isDefaultPrevented())
          ) {
            var r = e(n);
            (this.activate(t.closest("li"), i),
              this.activate(r, r.parent(), function () {
                (s.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }),
                  t.trigger({ type: "shown.bs.tab", relatedTarget: s[0] }));
              }));
          }
        }
      }),
      (i.prototype.activate = function (t, n, s) {
        function o() {
          (a
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            t
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            r ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length &&
              t
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            s && s());
        }
        var a = n.find("> .active"),
          r =
            s &&
            e.support.transition &&
            ((a.length && a.hasClass("fade")) || !!n.find("> .fade").length);
        (a.length && r
          ? a
              .one("bsTransitionEnd", o)
              .emulateTransitionEnd(i.TRANSITION_DURATION)
          : o(),
          a.removeClass("in"));
      }));
    var n = e.fn.tab;
    ((e.fn.tab = t),
      (e.fn.tab.Constructor = i),
      (e.fn.tab.noConflict = function () {
        return ((e.fn.tab = n), this);
      }));
    var s = function (i) {
      (i.preventDefault(), t.call(e(this), "show"));
    };
    e(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', s)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', s);
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var n = e(this),
          s = n.data("bs.affix"),
          o = "object" == typeof t && t;
        (s || n.data("bs.affix", (s = new i(this, o))),
          "string" == typeof t && s[t]());
      });
    }
    var i = function (t, n) {
      ((this.options = e.extend({}, i.DEFAULTS, n)),
        (this.$target = e(this.options.target)
          .on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            e.proxy(this.checkPositionWithEventLoop, this),
          )),
        (this.$element = e(t)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition());
    };
    ((i.VERSION = "3.3.5"),
      (i.RESET = "affix affix-top affix-bottom"),
      (i.DEFAULTS = { offset: 0, target: window }),
      (i.prototype.getState = function (e, t, i, n) {
        var s = this.$target.scrollTop(),
          o = this.$element.offset(),
          a = this.$target.height();
        if (null != i && "top" == this.affixed) return i > s && "top";
        if ("bottom" == this.affixed)
          return null != i
            ? !(s + this.unpin <= o.top) && "bottom"
            : !(e - n >= s + a) && "bottom";
        var r = null == this.affixed,
          l = r ? s : o.top,
          c = r ? a : t;
        return null != i && i >= s
          ? "top"
          : null != n && l + c >= e - n && "bottom";
      }),
      (i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
          t = this.$element.offset();
        return (this.pinnedOffset = t.top - e);
      }),
      (i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(e.proxy(this.checkPosition, this), 1);
      }),
      (i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var t = this.$element.height(),
            n = this.options.offset,
            s = n.top,
            o = n.bottom,
            a = Math.max(e(document).height(), e(document.body).height());
          ("object" != typeof n && (o = s = n),
            "function" == typeof s && (s = n.top(this.$element)),
            "function" == typeof o && (o = n.bottom(this.$element)));
          var r = this.getState(a, t, s, o);
          if (this.affixed != r) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (r ? "-" + r : ""),
              c = e.Event(l + ".bs.affix");
            if ((this.$element.trigger(c), c.isDefaultPrevented())) return;
            ((this.affixed = r),
              (this.unpin = "bottom" == r ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(i.RESET)
                .addClass(l)
                .trigger(l.replace("affix", "affixed") + ".bs.affix"));
          }
          "bottom" == r && this.$element.offset({ top: a - t - o });
        }
      }));
    var n = e.fn.affix;
    ((e.fn.affix = t),
      (e.fn.affix.Constructor = i),
      (e.fn.affix.noConflict = function () {
        return ((e.fn.affix = n), this);
      }),
      e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
          var i = e(this),
            n = i.data();
          ((n.offset = n.offset || {}),
            null != n.offsetBottom && (n.offset.bottom = n.offsetBottom),
            null != n.offsetTop && (n.offset.top = n.offsetTop),
            t.call(i, n));
        });
      }));
  })(jQuery),
  (function (e) {
    var t = function (t, i) {
      this.options = i;
      var n = e(t),
        s = n.is("img"),
        o = s ? n.attr("src") : n.backgroundImageUrl(),
        o = this.options.generateUrl(n, o);
      e("<img/>")
        .attr("src", o)
        .load(function () {
          (s
            ? n.attr("src", e(this).attr("src"))
            : (n.backgroundImageUrl(e(this).attr("src")),
              n.backgroundSize(e(this)[0].width, e(this)[0].height)),
            n.attr("data-retina", "complete"));
        });
    };
    ((t.prototype = { constructor: t }),
      (e.fn.retinaReplace = function (i) {
        var n;
        return (
          (n =
            void 0 === window.devicePixelRatio ? 1 : window.devicePixelRatio),
          1 >= n
            ? this
            : this.each(function () {
                var n = e(this),
                  s = n.data("retinaReplace"),
                  o = e.extend(
                    {},
                    e.fn.retinaReplace.defaults,
                    n.data(),
                    "object" == typeof i && i,
                  );
                (s || n.data("retinaReplace", (s = new t(this, o))),
                  "string" == typeof i && s[i]());
              })
        );
      }),
      (e.fn.retinaReplace.defaults = {
        suffix: "_2x",
        generateUrl: function (e, t) {
          var i = t.lastIndexOf("."),
            n = t.substr(i + 1);
          return t.substr(0, i) + this.suffix + "." + n;
        },
      }),
      (e.fn.retinaReplace.Constructor = t),
      (e.fn.backgroundImageUrl = function (t) {
        return t
          ? this.each(function () {
              e(this).css("background-image", 'url("' + t + '")');
            })
          : e(this)
              .css("background-image")
              .replace(/url\(|\)|"|'/g, "");
      }),
      (e.fn.backgroundSize = function (t, i) {
        var n = Math.floor(t / 2) + "px " + Math.floor(i / 2) + "px";
        (e(this).css("background-size", n),
          e(this).css("-webkit-background-size", n));
      }),
      e(function () {
        e("[data-retina='true']").retinaReplace();
      }));
  })(window.jQuery),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e(
          "object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto,
        );
  })(function (e) {
    var t,
      i,
      n,
      s,
      o,
      a,
      r = "Close",
      l = "BeforeClose",
      c = "MarkupParse",
      u = "Open",
      h = "Change",
      d = "mfp",
      p = "." + d,
      f = "mfp-ready",
      m = "mfp-removing",
      g = "mfp-prevent-close",
      v = function () {},
      y = !!window.jQuery,
      b = e(window),
      w = function (e, i) {
        t.ev.on(d + e + p, i);
      },
      x = function (t, i, n, s) {
        var o = document.createElement("div");
        return (
          (o.className = "mfp-" + t),
          n && (o.innerHTML = n),
          s ? i && i.appendChild(o) : ((o = e(o)), i && o.appendTo(i)),
          o
        );
      },
      _ = function (i, n) {
        (t.ev.triggerHandler(d + i, n),
          t.st.callbacks &&
            ((i = i.charAt(0).toLowerCase() + i.slice(1)),
            t.st.callbacks[i] &&
              t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n])));
      },
      k = function (i) {
        return (
          (i === a && t.currTemplate.closeBtn) ||
            ((t.currTemplate.closeBtn = e(
              t.st.closeMarkup.replace("%title%", t.st.tClose),
            )),
            (a = i)),
          t.currTemplate.closeBtn
        );
      },
      C = function () {
        e.magnificPopup.instance ||
          ((t = new v()), t.init(), (e.magnificPopup.instance = t));
      },
      T = function () {
        var e = document.createElement("p").style,
          t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== e.transition) return !0;
        for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
        return !1;
      };
    ((v.prototype = {
      constructor: v,
      init: function () {
        var i = navigator.appVersion;
        ((t.isIE7 = -1 !== i.indexOf("MSIE 7.")),
          (t.isIE8 = -1 !== i.indexOf("MSIE 8.")),
          (t.isLowIE = t.isIE7 || t.isIE8),
          (t.isAndroid = /android/gi.test(i)),
          (t.isIOS = /iphone|ipad|ipod/gi.test(i)),
          (t.supportsTransition = T()),
          (t.probablyMobile =
            t.isAndroid ||
            t.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent,
            )),
          (n = e(document)),
          (t.popupsCache = {}));
      },
      open: function (i) {
        var s;
        if (!1 === i.isObj) {
          ((t.items = i.items.toArray()), (t.index = 0));
          var a,
            r = i.items;
          for (s = 0; s < r.length; s++)
            if (((a = r[s]), a.parsed && (a = a.el[0]), a === i.el[0])) {
              t.index = s;
              break;
            }
        } else
          ((t.items = e.isArray(i.items) ? i.items : [i.items]),
            (t.index = i.index || 0));
        if (t.isOpen) return void t.updateItemHTML();
        ((t.types = []),
          (o = ""),
          (t.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : n),
          i.key
            ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}),
              (t.currTemplate = t.popupsCache[i.key]))
            : (t.currTemplate = {}),
          (t.st = e.extend(!0, {}, e.magnificPopup.defaults, i)),
          (t.fixedContentPos =
            "auto" === t.st.fixedContentPos
              ? !t.probablyMobile
              : t.st.fixedContentPos),
          t.st.modal &&
            ((t.st.closeOnContentClick = !1),
            (t.st.closeOnBgClick = !1),
            (t.st.showCloseBtn = !1),
            (t.st.enableEscapeKey = !1)),
          t.bgOverlay ||
            ((t.bgOverlay = x("bg").on("click" + p, function () {
              t.close();
            })),
            (t.wrap = x("wrap")
              .attr("tabindex", -1)
              .on("click" + p, function (e) {
                t._checkIfClose(e.target) && t.close();
              })),
            (t.container = x("container", t.wrap))),
          (t.contentContainer = x("content")),
          t.st.preloader &&
            (t.preloader = x("preloader", t.container, t.st.tLoading)));
        var l = e.magnificPopup.modules;
        for (s = 0; s < l.length; s++) {
          var h = l[s];
          ((h = h.charAt(0).toUpperCase() + h.slice(1)), t["init" + h].call(t));
        }
        (_("BeforeOpen"),
          t.st.showCloseBtn &&
            (t.st.closeBtnInside
              ? (w(c, function (e, t, i, n) {
                  i.close_replaceWith = k(n.type);
                }),
                (o += " mfp-close-btn-in"))
              : t.wrap.append(k())),
          t.st.alignTop && (o += " mfp-align-top"),
          t.wrap.css(
            t.fixedContentPos
              ? {
                  overflow: t.st.overflowY,
                  overflowX: "hidden",
                  overflowY: t.st.overflowY,
                }
              : { top: b.scrollTop(), position: "absolute" },
          ),
          (!1 === t.st.fixedBgPos ||
            ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
            t.bgOverlay.css({ height: n.height(), position: "absolute" }),
          t.st.enableEscapeKey &&
            n.on("keyup" + p, function (e) {
              27 === e.keyCode && t.close();
            }),
          b.on("resize" + p, function () {
            t.updateSize();
          }),
          t.st.closeOnContentClick || (o += " mfp-auto-cursor"),
          o && t.wrap.addClass(o));
        var d = (t.wH = b.height()),
          m = {};
        if (t.fixedContentPos && t._hasScrollBar(d)) {
          var g = t._getScrollbarSize();
          g && (m.marginRight = g);
        }
        t.fixedContentPos &&
          (t.isIE7
            ? e("body, html").css("overflow", "hidden")
            : (m.overflow = "hidden"));
        var v = t.st.mainClass;
        return (
          t.isIE7 && (v += " mfp-ie7"),
          v && t._addClassToMFP(v),
          t.updateItemHTML(),
          _("BuildControls"),
          e("html").css(m),
          t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
          (t._lastFocusedEl = document.activeElement),
          setTimeout(function () {
            (t.content
              ? (t._addClassToMFP(f), t._setFocus())
              : t.bgOverlay.addClass(f),
              n.on("focusin" + p, t._onFocusIn));
          }, 16),
          (t.isOpen = !0),
          t.updateSize(d),
          _(u),
          i
        );
      },
      close: function () {
        t.isOpen &&
          (_(l),
          (t.isOpen = !1),
          t.st.removalDelay && !t.isLowIE && t.supportsTransition
            ? (t._addClassToMFP(m),
              setTimeout(function () {
                t._close();
              }, t.st.removalDelay))
            : t._close());
      },
      _close: function () {
        _(r);
        var i = m + " " + f + " ";
        if (
          (t.bgOverlay.detach(),
          t.wrap.detach(),
          t.container.empty(),
          t.st.mainClass && (i += t.st.mainClass + " "),
          t._removeClassFromMFP(i),
          t.fixedContentPos)
        ) {
          var s = { marginRight: "" };
          (t.isIE7 ? e("body, html").css("overflow", "") : (s.overflow = ""),
            e("html").css(s));
        }
        (n.off("keyup" + p + " focusin" + p),
          t.ev.off(p),
          t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          t.bgOverlay.attr("class", "mfp-bg"),
          t.container.attr("class", "mfp-container"),
          !t.st.showCloseBtn ||
            (t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type]) ||
            (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
          t._lastFocusedEl && e(t._lastFocusedEl).focus(),
          (t.currItem = null),
          (t.content = null),
          (t.currTemplate = null),
          (t.prevHeight = 0),
          _("AfterClose"));
      },
      updateSize: function (e) {
        if (t.isIOS) {
          var i = document.documentElement.clientWidth / window.innerWidth,
            n = window.innerHeight * i;
          (t.wrap.css("height", n), (t.wH = n));
        } else t.wH = e || b.height();
        (t.fixedContentPos || t.wrap.css("height", t.wH), _("Resize"));
      },
      updateItemHTML: function () {
        var i = t.items[t.index];
        (t.contentContainer.detach(),
          t.content && t.content.detach(),
          i.parsed || (i = t.parseEl(t.index)));
        var n = i.type;
        if (
          (_("BeforeChange", [t.currItem ? t.currItem.type : "", n]),
          (t.currItem = i),
          !t.currTemplate[n])
        ) {
          var o = !!t.st[n] && t.st[n].markup;
          (_("FirstMarkupParse", o), (t.currTemplate[n] = !o || e(o)));
        }
        s && s !== i.type && t.container.removeClass("mfp-" + s + "-holder");
        var a = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](
          i,
          t.currTemplate[n],
        );
        (t.appendContent(a, n),
          (i.preloaded = !0),
          _(h, i),
          (s = i.type),
          t.container.prepend(t.contentContainer),
          _("AfterChange"));
      },
      appendContent: function (e, i) {
        ((t.content = e),
          e
            ? t.st.showCloseBtn &&
              t.st.closeBtnInside &&
              !0 === t.currTemplate[i]
              ? t.content.find(".mfp-close").length || t.content.append(k())
              : (t.content = e)
            : (t.content = ""),
          _("BeforeAppend"),
          t.container.addClass("mfp-" + i + "-holder"),
          t.contentContainer.append(t.content));
      },
      parseEl: function (i) {
        var n,
          s = t.items[i];
        if (
          (s.tagName
            ? (s = { el: e(s) })
            : ((n = s.type), (s = { data: s, src: s.src })),
          s.el)
        ) {
          for (var o = t.types, a = 0; a < o.length; a++)
            if (s.el.hasClass("mfp-" + o[a])) {
              n = o[a];
              break;
            }
          ((s.src = s.el.attr("data-mfp-src")),
            s.src || (s.src = s.el.attr("href")));
        }
        return (
          (s.type = n || t.st.type || "inline"),
          (s.index = i),
          (s.parsed = !0),
          (t.items[i] = s),
          _("ElementParse", s),
          t.items[i]
        );
      },
      addGroup: function (e, i) {
        var n = function (n) {
          ((n.mfpEl = this), t._openClick(n, e, i));
        };
        i || (i = {});
        var s = "click.magnificPopup";
        ((i.mainEl = e),
          i.items
            ? ((i.isObj = !0), e.off(s).on(s, n))
            : ((i.isObj = !1),
              i.delegate
                ? e.off(s).on(s, i.delegate, n)
                : ((i.items = e), e.off(s).on(s, n))));
      },
      _openClick: function (i, n, s) {
        if (
          (void 0 !== s.midClick
            ? s.midClick
            : e.magnificPopup.defaults.midClick) ||
          (2 !== i.which && !i.ctrlKey && !i.metaKey)
        ) {
          var o =
            void 0 !== s.disableOn
              ? s.disableOn
              : e.magnificPopup.defaults.disableOn;
          if (o)
            if (e.isFunction(o)) {
              if (!o.call(t)) return !0;
            } else if (b.width() < o) return !0;
          (i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()),
            (s.el = e(i.mfpEl)),
            s.delegate && (s.items = n.find(s.delegate)),
            t.open(s));
        }
      },
      updateStatus: function (e, n) {
        if (t.preloader) {
          (i !== e && t.container.removeClass("mfp-s-" + i),
            n || "loading" !== e || (n = t.st.tLoading));
          var s = { status: e, text: n };
          (_("UpdateStatus", s),
            (e = s.status),
            (n = s.text),
            t.preloader.html(n),
            t.preloader.find("a").on("click", function (e) {
              e.stopImmediatePropagation();
            }),
            t.container.addClass("mfp-s-" + e),
            (i = e));
        }
      },
      _checkIfClose: function (i) {
        if (!e(i).hasClass(g)) {
          var n = t.st.closeOnContentClick,
            s = t.st.closeOnBgClick;
          if (n && s) return !0;
          if (
            !t.content ||
            e(i).hasClass("mfp-close") ||
            (t.preloader && i === t.preloader[0])
          )
            return !0;
          if (i === t.content[0] || e.contains(t.content[0], i)) {
            if (n) return !0;
          } else if (s && e.contains(document, i)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (e) {
        (t.bgOverlay.addClass(e), t.wrap.addClass(e));
      },
      _removeClassFromMFP: function (e) {
        (this.bgOverlay.removeClass(e), t.wrap.removeClass(e));
      },
      _hasScrollBar: function (e) {
        return (
          (t.isIE7 ? n.height() : document.body.scrollHeight) >
          (e || b.height())
        );
      },
      _setFocus: function () {
        (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
      },
      _onFocusIn: function (i) {
        return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target)
          ? void 0
          : (t._setFocus(), !1);
      },
      _parseMarkup: function (t, i, n) {
        var s;
        (n.data && (i = e.extend(n.data, i)),
          _(c, [t, i, n]),
          e.each(i, function (e, i) {
            if (void 0 === i || !1 === i) return !0;
            if (((s = e.split("_")), s.length > 1)) {
              var n = t.find(p + "-" + s[0]);
              if (n.length > 0) {
                var o = s[1];
                "replaceWith" === o
                  ? n[0] !== i[0] && n.replaceWith(i)
                  : "img" === o
                    ? n.is("img")
                      ? n.attr("src", i)
                      : n.replaceWith(
                          '<img src="' +
                            i +
                            '" class="' +
                            n.attr("class") +
                            '" />',
                        )
                    : n.attr(s[1], i);
              }
            } else t.find(p + "-" + e).html(i);
          }));
      },
      _getScrollbarSize: function () {
        if (void 0 === t.scrollbarSize) {
          var e = document.createElement("div");
          ((e.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(e),
            (t.scrollbarSize = e.offsetWidth - e.clientWidth),
            document.body.removeChild(e));
        }
        return t.scrollbarSize;
      },
    }),
      (e.magnificPopup = {
        instance: null,
        proto: v.prototype,
        modules: [],
        open: function (t, i) {
          return (
            C(),
            (t = t ? e.extend(!0, {}, t) : {}),
            (t.isObj = !0),
            (t.index = i || 0),
            this.instance.open(t)
          );
        },
        close: function () {
          return e.magnificPopup.instance && e.magnificPopup.instance.close();
        },
        registerModule: function (t, i) {
          (i.options && (e.magnificPopup.defaults[t] = i.options),
            e.extend(this.proto, i.proto),
            this.modules.push(t));
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&times;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
        },
      }),
      (e.fn.magnificPopup = function (i) {
        C();
        var n = e(this);
        if ("string" == typeof i)
          if ("open" === i) {
            var s,
              o = y ? n.data("magnificPopup") : n[0].magnificPopup,
              a = parseInt(arguments[1], 10) || 0;
            (o.items
              ? (s = o.items[a])
              : ((s = n),
                o.delegate && (s = s.find(o.delegate)),
                (s = s.eq(a))),
              t._openClick({ mfpEl: s }, n, o));
          } else
            t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
        else
          ((i = e.extend(!0, {}, i)),
            y ? n.data("magnificPopup", i) : (n[0].magnificPopup = i),
            t.addGroup(n, i));
        return n;
      }));
    var S,
      D,
      E,
      I = "inline",
      N = function () {
        E && (D.after(E.addClass(S)).detach(), (E = null));
      };
    e.magnificPopup.registerModule(I, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          (t.types.push(I),
            w(r + "." + I, function () {
              N();
            }));
        },
        getInline: function (i, n) {
          if ((N(), i.src)) {
            var s = t.st.inline,
              o = e(i.src);
            if (o.length) {
              var a = o[0].parentNode;
              (a &&
                a.tagName &&
                (D || ((S = s.hiddenClass), (D = x(S)), (S = "mfp-" + S)),
                (E = o.after(D).detach().removeClass(S))),
                t.updateStatus("ready"));
            } else (t.updateStatus("error", s.tNotFound), (o = e("<div>")));
            return ((i.inlineElement = o), o);
          }
          return (t.updateStatus("ready"), t._parseMarkup(n, {}, i), n);
        },
      },
    });
    var A,
      P = "ajax",
      M = function () {
        A && e(document.body).removeClass(A);
      },
      $ = function () {
        (M(), t.req && t.req.abort());
      };
    e.magnificPopup.registerModule(P, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          (t.types.push(P),
            (A = t.st.ajax.cursor),
            w(r + "." + P, $),
            w("BeforeChange." + P, $));
        },
        getAjax: function (i) {
          (A && e(document.body).addClass(A), t.updateStatus("loading"));
          var n = e.extend(
            {
              url: i.src,
              success: function (n, s, o) {
                var a = { data: n, xhr: o };
                (_("ParseAjax", a),
                  t.appendContent(e(a.data), P),
                  (i.finished = !0),
                  M(),
                  t._setFocus(),
                  setTimeout(function () {
                    t.wrap.addClass(f);
                  }, 16),
                  t.updateStatus("ready"),
                  _("AjaxContentAdded"));
              },
              error: function () {
                (M(),
                  (i.finished = i.loadError = !0),
                  t.updateStatus(
                    "error",
                    t.st.ajax.tError.replace("%url%", i.src),
                  ));
              },
            },
            t.st.ajax.settings,
          );
          return ((t.req = e.ajax(n)), "");
        },
      },
    });
    var F,
      O = function (i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = t.st.image.titleSrc;
        if (n) {
          if (e.isFunction(n)) return n.call(t, i);
          if (i.el) return i.el.attr(n) || "";
        }
        return "";
      };
    e.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var i = t.st.image,
            n = ".image";
          (t.types.push("image"),
            w(u + n, function () {
              "image" === t.currItem.type &&
                i.cursor &&
                e(document.body).addClass(i.cursor);
            }),
            w(r + n, function () {
              (i.cursor && e(document.body).removeClass(i.cursor),
                b.off("resize" + p));
            }),
            w("Resize" + n, t.resizeImage),
            t.isLowIE && w("AfterChange", t.resizeImage));
        },
        resizeImage: function () {
          var e = t.currItem;
          if (e && e.img && t.st.image.verticalFit) {
            var i = 0;
            (t.isLowIE &&
              (i =
                parseInt(e.img.css("padding-top"), 10) +
                parseInt(e.img.css("padding-bottom"), 10)),
              e.img.css("max-height", t.wH - i));
          }
        },
        _onImageHasSize: function (e) {
          e.img &&
            ((e.hasSize = !0),
            F && clearInterval(F),
            (e.isCheckingImgSize = !1),
            _("ImageHasSize", e),
            e.imgHidden &&
              (t.content && t.content.removeClass("mfp-loading"),
              (e.imgHidden = !1)));
        },
        findImageSize: function (e) {
          var i = 0,
            n = e.img[0],
            s = function (o) {
              (F && clearInterval(F),
                (F = setInterval(function () {
                  return n.naturalWidth > 0
                    ? void t._onImageHasSize(e)
                    : (i > 200 && clearInterval(F),
                      i++,
                      void (3 === i
                        ? s(10)
                        : 40 === i
                          ? s(50)
                          : 100 === i && s(500)));
                }, o)));
            };
          s(1);
        },
        getImage: function (i, n) {
          var s = 0,
            o = function () {
              i &&
                (i.img[0].complete
                  ? (i.img.off(".mfploader"),
                    i === t.currItem &&
                      (t._onImageHasSize(i), t.updateStatus("ready")),
                    (i.hasSize = !0),
                    (i.loaded = !0),
                    _("ImageLoadComplete"))
                  : (s++, 200 > s ? setTimeout(o, 100) : a()));
            },
            a = function () {
              i &&
                (i.img.off(".mfploader"),
                i === t.currItem &&
                  (t._onImageHasSize(i),
                  t.updateStatus("error", r.tError.replace("%url%", i.src))),
                (i.hasSize = !0),
                (i.loaded = !0),
                (i.loadError = !0));
            },
            r = t.st.image,
            l = n.find(".mfp-img");
          if (l.length) {
            var c = document.createElement("img");
            ((c.className = "mfp-img"),
              i.el &&
                i.el.find("img").length &&
                (c.alt = i.el.find("img").attr("alt")),
              (i.img = e(c).on("load.mfploader", o).on("error.mfploader", a)),
              (c.src = i.src),
              l.is("img") && (i.img = i.img.clone()),
              (c = i.img[0]),
              c.naturalWidth > 0
                ? (i.hasSize = !0)
                : c.width || (i.hasSize = !1));
          }
          return (
            t._parseMarkup(n, { title: O(i), img_replaceWith: i.img }, i),
            t.resizeImage(),
            i.hasSize
              ? (F && clearInterval(F),
                i.loadError
                  ? (n.addClass("mfp-loading"),
                    t.updateStatus("error", r.tError.replace("%url%", i.src)))
                  : (n.removeClass("mfp-loading"), t.updateStatus("ready")),
                n)
              : (t.updateStatus("loading"),
                (i.loading = !0),
                i.hasSize ||
                  ((i.imgHidden = !0),
                  n.addClass("mfp-loading"),
                  t.findImageSize(i)),
                n)
          );
        },
      },
    });
    var H,
      j = function () {
        return (
          void 0 === H &&
            (H = void 0 !== document.createElement("p").style.MozTransform),
          H
        );
      };
    e.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (e) {
          return e.is("img") ? e : e.find("img");
        },
      },
      proto: {
        initZoom: function () {
          var e,
            i = t.st.zoom,
            n = ".zoom";
          if (i.enabled && t.supportsTransition) {
            var s,
              o,
              a = i.duration,
              c = function (e) {
                var t = e
                    .clone()
                    .removeAttr("style")
                    .removeAttr("class")
                    .addClass("mfp-animated-image"),
                  n = "all " + i.duration / 1e3 + "s " + i.easing,
                  s = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden",
                  },
                  o = "transition";
                return (
                  (s["-webkit-" + o] =
                    s["-moz-" + o] =
                    s["-o-" + o] =
                    s[o] =
                      n),
                  t.css(s),
                  t
                );
              },
              u = function () {
                t.content.css("visibility", "visible");
              };
            (w("BuildControls" + n, function () {
              if (t._allowZoom()) {
                if (
                  (clearTimeout(s),
                  t.content.css("visibility", "hidden"),
                  !(e = t._getItemToZoom()))
                )
                  return void u();
                ((o = c(e)),
                  o.css(t._getOffset()),
                  t.wrap.append(o),
                  (s = setTimeout(function () {
                    (o.css(t._getOffset(!0)),
                      (s = setTimeout(function () {
                        (u(),
                          setTimeout(function () {
                            (o.remove(),
                              (e = o = null),
                              _("ZoomAnimationEnded"));
                          }, 16));
                      }, a)));
                  }, 16)));
              }
            }),
              w(l + n, function () {
                if (t._allowZoom()) {
                  if ((clearTimeout(s), (t.st.removalDelay = a), !e)) {
                    if (!(e = t._getItemToZoom())) return;
                    o = c(e);
                  }
                  (o.css(t._getOffset(!0)),
                    t.wrap.append(o),
                    t.content.css("visibility", "hidden"),
                    setTimeout(function () {
                      o.css(t._getOffset());
                    }, 16));
                }
              }),
              w(r + n, function () {
                t._allowZoom() && (u(), o && o.remove(), (e = null));
              }));
          }
        },
        _allowZoom: function () {
          return "image" === t.currItem.type;
        },
        _getItemToZoom: function () {
          return !!t.currItem.hasSize && t.currItem.img;
        },
        _getOffset: function (i) {
          var n;
          n = i
            ? t.currItem.img
            : t.st.zoom.opener(t.currItem.el || t.currItem);
          var s = n.offset(),
            o = parseInt(n.css("padding-top"), 10),
            a = parseInt(n.css("padding-bottom"), 10);
          s.top -= e(window).scrollTop() - o;
          var r = {
            width: n.width(),
            height: (y ? n.innerHeight() : n[0].offsetHeight) - a - o,
          };
          return (
            j()
              ? (r["-moz-transform"] = r.transform =
                  "translate(" + s.left + "px," + s.top + "px)")
              : ((r.left = s.left), (r.top = s.top)),
            r
          );
        },
      },
    });
    var L = "iframe",
      z = "//about:blank",
      R = function (e) {
        if (t.currTemplate[L]) {
          var i = t.currTemplate[L].find("iframe");
          i.length &&
            (e || (i[0].src = z),
            t.isIE8 && i.css("display", e ? "block" : "none"));
        }
      };
    e.magnificPopup.registerModule(L, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          (t.types.push(L),
            w("BeforeChange", function (e, t, i) {
              t !== i && (t === L ? R() : i === L && R(!0));
            }),
            w(r + "." + L, function () {
              R();
            }));
        },
        getIframe: function (i, n) {
          var s = i.src,
            o = t.st.iframe;
          e.each(o.patterns, function () {
            return s.indexOf(this.index) > -1
              ? (this.id &&
                  (s =
                    "string" == typeof this.id
                      ? s.substr(
                          s.lastIndexOf(this.id) + this.id.length,
                          s.length,
                        )
                      : this.id.call(this, s)),
                (s = this.src.replace("%id%", s)),
                !1)
              : void 0;
          });
          var a = {};
          return (
            o.srcAction && (a[o.srcAction] = s),
            t._parseMarkup(n, a, i),
            t.updateStatus("ready"),
            n
          );
        },
      },
    });
    var W = function (e) {
        var i = t.items.length;
        return e > i - 1 ? e - i : 0 > e ? i + e : e;
      },
      B = function (e, t, i) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i);
      };
    e.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var i = t.st.gallery,
            s = ".mfp-gallery",
            a = Boolean(e.fn.mfpFastClick);
          return (
            (t.direction = !0),
            !(!i || !i.enabled) &&
              ((o += " mfp-gallery"),
              w(u + s, function () {
                (i.navigateByImgClick &&
                  t.wrap.on("click" + s, ".mfp-img", function () {
                    return t.items.length > 1 ? (t.next(), !1) : void 0;
                  }),
                  n.on("keydown" + s, function (e) {
                    37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                  }));
              }),
              w("UpdateStatus" + s, function (e, i) {
                i.text &&
                  (i.text = B(i.text, t.currItem.index, t.items.length));
              }),
              w(c + s, function (e, n, s, o) {
                var a = t.items.length;
                s.counter = a > 1 ? B(i.tCounter, o.index, a) : "";
              }),
              w("BuildControls" + s, function () {
                if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                  var n = i.arrowMarkup,
                    s = (t.arrowLeft = e(
                      n
                        .replace(/%title%/gi, i.tPrev)
                        .replace(/%dir%/gi, "left"),
                    ).addClass(g)),
                    o = (t.arrowRight = e(
                      n
                        .replace(/%title%/gi, i.tNext)
                        .replace(/%dir%/gi, "right"),
                    ).addClass(g)),
                    r = a ? "mfpFastClick" : "click";
                  (s[r](function () {
                    t.prev();
                  }),
                    o[r](function () {
                      t.next();
                    }),
                    t.isIE7 &&
                      (x("b", s[0], !1, !0),
                      x("a", s[0], !1, !0),
                      x("b", o[0], !1, !0),
                      x("a", o[0], !1, !0)),
                    t.container.append(s.add(o)));
                }
              }),
              w(h + s, function () {
                (t._preloadTimeout && clearTimeout(t._preloadTimeout),
                  (t._preloadTimeout = setTimeout(function () {
                    (t.preloadNearbyImages(), (t._preloadTimeout = null));
                  }, 16)));
              }),
              void w(r + s, function () {
                (n.off(s),
                  t.wrap.off("click" + s),
                  t.arrowLeft &&
                    a &&
                    t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),
                  (t.arrowRight = t.arrowLeft = null));
              }))
          );
        },
        next: function () {
          ((t.direction = !0), (t.index = W(t.index + 1)), t.updateItemHTML());
        },
        prev: function () {
          ((t.direction = !1), (t.index = W(t.index - 1)), t.updateItemHTML());
        },
        goTo: function (e) {
          ((t.direction = e >= t.index), (t.index = e), t.updateItemHTML());
        },
        preloadNearbyImages: function () {
          var e,
            i = t.st.gallery.preload,
            n = Math.min(i[0], t.items.length),
            s = Math.min(i[1], t.items.length);
          for (e = 1; e <= (t.direction ? s : n); e++)
            t._preloadItem(t.index + e);
          for (e = 1; e <= (t.direction ? n : s); e++)
            t._preloadItem(t.index - e);
        },
        _preloadItem: function (i) {
          if (((i = W(i)), !t.items[i].preloaded)) {
            var n = t.items[i];
            (n.parsed || (n = t.parseEl(i)),
              _("LazyLoad", n),
              "image" === n.type &&
                (n.img = e('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    n.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    ((n.hasSize = !0),
                      (n.loadError = !0),
                      _("LazyLoadError", n));
                  })
                  .attr("src", n.src)),
              (n.preloaded = !0));
          }
        },
      },
    });
    var q = "retina";
    (e.magnificPopup.registerModule(q, {
      options: {
        replaceSrc: function (e) {
          return e.src.replace(/\.\w+$/, function (e) {
            return "@2x" + e;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var e = t.st.retina,
              i = e.ratio;
            (i = isNaN(i) ? i() : i) > 1 &&
              (w("ImageHasSize." + q, function (e, t) {
                t.img.css({
                  "max-width": t.img[0].naturalWidth / i,
                  width: "100%",
                });
              }),
              w("ElementParse." + q, function (t, n) {
                n.src = e.replaceSrc(n, i);
              }));
          }
        },
      },
    }),
      (function () {
        var t = "ontouchstart" in window,
          i = function () {
            b.off("touchmove" + s + " touchend" + s);
          },
          n = "mfpFastClick",
          s = "." + n;
        ((e.fn.mfpFastClick = function (n) {
          return e(this).each(function () {
            var o,
              a = e(this);
            if (t) {
              var r, l, c, u, h, d;
              a.on("touchstart" + s, function (e) {
                ((u = !1),
                  (d = 1),
                  (h = e.originalEvent
                    ? e.originalEvent.touches[0]
                    : e.touches[0]),
                  (l = h.clientX),
                  (c = h.clientY),
                  b
                    .on("touchmove" + s, function (e) {
                      ((h = e.originalEvent
                        ? e.originalEvent.touches
                        : e.touches),
                        (d = h.length),
                        (h = h[0]),
                        (Math.abs(h.clientX - l) > 10 ||
                          Math.abs(h.clientY - c) > 10) &&
                          ((u = !0), i()));
                    })
                    .on("touchend" + s, function (e) {
                      (i(),
                        u ||
                          d > 1 ||
                          ((o = !0),
                          e.preventDefault(),
                          clearTimeout(r),
                          (r = setTimeout(function () {
                            o = !1;
                          }, 1e3)),
                          n()));
                    }));
              });
            }
            a.on("click" + s, function () {
              o || n();
            });
          });
        }),
          (e.fn.destroyMfpFastClick = function () {
            (e(this).off("touchstart" + s + " click" + s),
              t && b.off("touchmove" + s + " touchend" + s));
          }));
      })(),
      C());
  }) /*! WOW - v1.0.3 - 2015-01-14
   * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */,
  function () {
    var e,
      t,
      i,
      n,
      s,
      o = function (e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      },
      a =
        [].indexOf ||
        function (e) {
          for (var t = 0, i = this.length; i > t; t++)
            if (t in this && this[t] === e) return t;
          return -1;
        };
    ((t = (function () {
      function e() {}
      return (
        (e.prototype.extend = function (e, t) {
          var i, n;
          for (i in t) ((n = t[i]), null == e[i] && (e[i] = n));
          return e;
        }),
        (e.prototype.isMobile = function (e) {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            e,
          );
        }),
        (e.prototype.addEvent = function (e, t, i) {
          return null != e.addEventListener
            ? e.addEventListener(t, i, !1)
            : null != e.attachEvent
              ? e.attachEvent("on" + t, i)
              : (e[t] = i);
        }),
        (e.prototype.removeEvent = function (e, t, i) {
          return null != e.removeEventListener
            ? e.removeEventListener(t, i, !1)
            : null != e.detachEvent
              ? e.detachEvent("on" + t, i)
              : delete e[t];
        }),
        (e.prototype.innerHeight = function () {
          return "innerHeight" in window
            ? window.innerHeight
            : document.documentElement.clientHeight;
        }),
        e
      );
    })()),
      (i =
        this.WeakMap ||
        this.MozWeakMap ||
        (i = (function () {
          function e() {
            ((this.keys = []), (this.values = []));
          }
          return (
            (e.prototype.get = function (e) {
              var t, i, n, s;
              for (s = this.keys, t = i = 0, n = s.length; n > i; t = ++i)
                if (s[t] === e) return this.values[t];
            }),
            (e.prototype.set = function (e, t) {
              var i, n, s, o;
              for (o = this.keys, i = n = 0, s = o.length; s > n; i = ++n)
                if (o[i] === e) return void (this.values[i] = t);
              return (this.keys.push(e), this.values.push(t));
            }),
            e
          );
        })())),
      (e =
        this.MutationObserver ||
        this.WebkitMutationObserver ||
        this.MozMutationObserver ||
        (e = (function () {
          function e() {
            ("undefined" != typeof console &&
              null !== console &&
              console.warn(
                "MutationObserver is not supported by your browser.",
              ),
              "undefined" != typeof console &&
                null !== console &&
                console.warn(
                  "WOW.js cannot detect dom mutations, please call .sync() after loading new content.",
                ));
          }
          return (
            (e.notSupported = !0),
            (e.prototype.observe = function () {}),
            e
          );
        })())),
      (n =
        this.getComputedStyle ||
        function (e) {
          return (
            (this.getPropertyValue = function (t) {
              var i;
              return (
                "float" === t && (t = "styleFloat"),
                s.test(t) &&
                  t.replace(s, function (e, t) {
                    return t.toUpperCase();
                  }),
                (null != (i = e.currentStyle) ? i[t] : void 0) || null
              );
            }),
            this
          );
        }),
      (s = /(\-([a-z]){1})/g),
      (this.WOW = (function () {
        function s(e) {
          (null == e && (e = {}),
            (this.scrollCallback = o(this.scrollCallback, this)),
            (this.scrollHandler = o(this.scrollHandler, this)),
            (this.start = o(this.start, this)),
            (this.scrolled = !0),
            (this.config = this.util().extend(e, this.defaults)),
            (this.animationNameCache = new i()));
        }
        return (
          (s.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
          }),
          (s.prototype.init = function () {
            var e;
            return (
              (this.element = window.document.documentElement),
              "interactive" === (e = document.readyState) || "complete" === e
                ? this.start()
                : this.util().addEvent(
                    document,
                    "DOMContentLoaded",
                    this.start,
                  ),
              (this.finished = [])
            );
          }),
          (s.prototype.start = function () {
            var t, i, n, s;
            if (
              ((this.stopped = !1),
              (this.boxes = function () {
                var e, i, n, s;
                for (
                  n = this.element.querySelectorAll("." + this.config.boxClass),
                    s = [],
                    e = 0,
                    i = n.length;
                  i > e;
                  e++
                )
                  ((t = n[e]), s.push(t));
                return s;
              }.call(this)),
              (this.all = function () {
                var e, i, n, s;
                for (n = this.boxes, s = [], e = 0, i = n.length; i > e; e++)
                  ((t = n[e]), s.push(t));
                return s;
              }.call(this)),
              this.boxes.length)
            )
              if (this.disabled()) this.resetStyle();
              else
                for (s = this.boxes, i = 0, n = s.length; n > i; i++)
                  ((t = s[i]), this.applyStyle(t, !0));
            return (
              this.disabled() ||
                (this.util().addEvent(window, "scroll", this.scrollHandler),
                this.util().addEvent(window, "resize", this.scrollHandler),
                (this.interval = setInterval(this.scrollCallback, 50))),
              this.config.live
                ? new e(
                    (function (e) {
                      return function (t) {
                        var i, n, s, o, a;
                        for (a = [], s = 0, o = t.length; o > s; s++)
                          ((n = t[s]),
                            a.push(
                              function () {
                                var e, t, s, o;
                                for (
                                  s = n.addedNodes || [],
                                    o = [],
                                    e = 0,
                                    t = s.length;
                                  t > e;
                                  e++
                                )
                                  ((i = s[e]), o.push(this.doSync(i)));
                                return o;
                              }.call(e),
                            ));
                        return a;
                      };
                    })(this),
                  ).observe(document.body, { childList: !0, subtree: !0 })
                : void 0
            );
          }),
          (s.prototype.stop = function () {
            return (
              (this.stopped = !0),
              this.util().removeEvent(window, "scroll", this.scrollHandler),
              this.util().removeEvent(window, "resize", this.scrollHandler),
              null != this.interval ? clearInterval(this.interval) : void 0
            );
          }),
          (s.prototype.sync = function () {
            return e.notSupported ? this.doSync(this.element) : void 0;
          }),
          (s.prototype.doSync = function (e) {
            var t, i, n, s, o;
            if ((null == e && (e = this.element), 1 === e.nodeType)) {
              for (
                e = e.parentNode || e,
                  s = e.querySelectorAll("." + this.config.boxClass),
                  o = [],
                  i = 0,
                  n = s.length;
                n > i;
                i++
              )
                ((t = s[i]),
                  a.call(this.all, t) < 0
                    ? (this.boxes.push(t),
                      this.all.push(t),
                      this.stopped || this.disabled()
                        ? this.resetStyle()
                        : this.applyStyle(t, !0),
                      o.push((this.scrolled = !0)))
                    : o.push(void 0));
              return o;
            }
          }),
          (s.prototype.show = function (e) {
            return (
              this.applyStyle(e),
              (e.className = e.className + " " + this.config.animateClass),
              null != this.config.callback ? this.config.callback(e) : void 0
            );
          }),
          (s.prototype.applyStyle = function (e, t) {
            var i, n, s;
            return (
              (n = e.getAttribute("data-wow-duration")),
              (i = e.getAttribute("data-wow-delay")),
              (s = e.getAttribute("data-wow-iteration")),
              this.animate(
                (function (o) {
                  return function () {
                    return o.customStyle(e, t, n, i, s);
                  };
                })(this),
              )
            );
          }),
          (s.prototype.animate = (function () {
            return "requestAnimationFrame" in window
              ? function (e) {
                  return window.requestAnimationFrame(e);
                }
              : function (e) {
                  return e();
                };
          })()),
          (s.prototype.resetStyle = function () {
            var e, t, i, n, s;
            for (n = this.boxes, s = [], t = 0, i = n.length; i > t; t++)
              ((e = n[t]), s.push((e.style.visibility = "visible")));
            return s;
          }),
          (s.prototype.customStyle = function (e, t, i, n, s) {
            return (
              t && this.cacheAnimationName(e),
              (e.style.visibility = t ? "hidden" : "visible"),
              i && this.vendorSet(e.style, { animationDuration: i }),
              n && this.vendorSet(e.style, { animationDelay: n }),
              s && this.vendorSet(e.style, { animationIterationCount: s }),
              this.vendorSet(e.style, {
                animationName: t ? "none" : this.cachedAnimationName(e),
              }),
              e
            );
          }),
          (s.prototype.vendors = ["moz", "webkit"]),
          (s.prototype.vendorSet = function (e, t) {
            var i, n, s, o;
            o = [];
            for (i in t)
              ((n = t[i]),
                (e["" + i] = n),
                o.push(
                  function () {
                    var t, o, a, r;
                    for (
                      a = this.vendors, r = [], t = 0, o = a.length;
                      o > t;
                      t++
                    )
                      ((s = a[t]),
                        r.push(
                          (e["" + s + i.charAt(0).toUpperCase() + i.substr(1)] =
                            n),
                        ));
                    return r;
                  }.call(this),
                ));
            return o;
          }),
          (s.prototype.vendorCSS = function (e, t) {
            var i, s, o, a, r, l;
            for (
              s = n(e),
                i = s.getPropertyCSSValue(t),
                l = this.vendors,
                a = 0,
                r = l.length;
              r > a;
              a++
            )
              ((o = l[a]), (i = i || s.getPropertyCSSValue("-" + o + "-" + t)));
            return i;
          }),
          (s.prototype.animationName = function (e) {
            var t;
            try {
              t = this.vendorCSS(e, "animation-name").cssText;
            } catch (i) {
              t = n(e).getPropertyValue("animation-name");
            }
            return "none" === t ? "" : t;
          }),
          (s.prototype.cacheAnimationName = function (e) {
            return this.animationNameCache.set(e, this.animationName(e));
          }),
          (s.prototype.cachedAnimationName = function (e) {
            return this.animationNameCache.get(e);
          }),
          (s.prototype.scrollHandler = function () {
            return (this.scrolled = !0);
          }),
          (s.prototype.scrollCallback = function () {
            var e;
            return !this.scrolled ||
              ((this.scrolled = !1),
              (this.boxes = function () {
                var t, i, n, s;
                for (n = this.boxes, s = [], t = 0, i = n.length; i > t; t++)
                  (e = n[t]) && (this.isVisible(e) ? this.show(e) : s.push(e));
                return s;
              }.call(this)),
              this.boxes.length || this.config.live)
              ? void 0
              : this.stop();
          }),
          (s.prototype.offsetTop = function (e) {
            for (var t; void 0 === e.offsetTop; ) e = e.parentNode;
            for (t = e.offsetTop; (e = e.offsetParent); ) t += e.offsetTop;
            return t;
          }),
          (s.prototype.isVisible = function (e) {
            var t, i, n, s, o;
            return (
              (i = e.getAttribute("data-wow-offset") || this.config.offset),
              (o = window.pageYOffset),
              (s =
                o +
                Math.min(this.element.clientHeight, this.util().innerHeight()) -
                i),
              (n = this.offsetTop(e)),
              (t = n + e.clientHeight),
              s >= n && t >= o
            );
          }),
          (s.prototype.util = function () {
            return null != this._util ? this._util : (this._util = new t());
          }),
          (s.prototype.disabled = function () {
            return (
              !this.config.mobile && this.util().isMobile(navigator.userAgent)
            );
          }),
          s
        );
      })()));
  }.call(this),
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      $("#preloader").fadeOut("slow");
    }, 1e3);
  }),
  new WOW().init(),
  $(window).scroll(function () {
    "use strict";
    $(this).scrollTop() > 1
      ? $("header").addClass("sticky")
      : $("header").removeClass("sticky");
  }),
  jQuery(function (e) {
    "use strict";
    function t() {
      e(this).css("display", "block");
      var t = e(this).find(".modal-dialog"),
        i = (e(window).height() - t.height()) / 2,
        n = parseInt(t.css("marginBottom"), 10);
      (i < n && (i = n), t.css("margin-top", i));
    }
    (e(".modal").on("show.bs.modal", t),
      e(".modal-popup .close-link").click(function (t) {
        (t.preventDefault(), e(".modal").modal("hide"));
      }),
      e(window).on("resize", function () {
        e(".modal:visible").each(t);
      }));
  }),
  $(function () {
    "use strict";
    ($('a[href="#search"]').on("click", function (e) {
      (e.preventDefault(),
        $("#search").addClass("open"),
        $('#search > form > input[type="search"]').focus());
    }),
      $("#search, #search button.close").on("click keyup", function (e) {
        (e.target != this &&
          "close" != e.target.className &&
          27 != e.keyCode) ||
          $(this).removeClass("open");
      }));
  }),
  $(function () {
    "use strict";
    ($(".video_pop").magnificPopup({ type: "iframe" }),
      $(".magnific-gallery").each(function () {
        $(this).magnificPopup({
          delegate: "a",
          type: "image",
          gallery: { enabled: !0 },
          removalDelay: 500,
          callbacks: {
            beforeOpen: function () {
              ((this.st.image.markup = this.st.image.markup.replace(
                "mfp-figure",
                "mfp-figure mfp-with-anim",
              )),
                (this.st.mainClass = this.st.el.attr("data-effect")));
            },
          },
          closeOnContentClick: !0,
          midClick: !0,
        });
      }));
  }),
  $(document).ready(function () {
    "use strict";
    $("#quote-carousel").carousel({ pause: !0, interval: 6e3 });
  }),
  $(".tooltip-1").tooltip({ html: !0 }),
  $("#accordion").on("hidden.bs.collapse shown.bs.collapse", toggleChevron),
  jQuery(document).ready(function () {
    $("#newsletter").submit(function () {
      var e = $(this).attr("action");
      return (
        $("#message-newsletter").slideUp(750, function () {
          ($("#message-newsletter").hide(),
            $("#submit-newsletter")
              .after('<i class="icon-spin4 animate-spin loader"></i>')
              .attr("disabled", "disabled"),
            $.post(
              e,
              { email_newsletter: $("#email_newsletter").val() },
              function (e) {
                ((document.getElementById("message-newsletter").innerHTML = e),
                  $("#message-newsletter").slideDown("slow"),
                  $("#newsletter .loader").fadeOut("slow", function () {
                    $(this).remove();
                  }),
                  $("#submit-newsletter").removeAttr("disabled"),
                  null != e.match("success") &&
                    $("#newsletter").slideUp("slow"));
              },
            ));
        }),
        !1
      );
    });
  }),
  jQuery(document).ready(function () {
    $("#contactform_home").submit(function () {
      var e = $(this).attr("action");
      return (
        $("#message-contact-home").slideUp(750, function () {
          ($("#message-contact-home").hide(),
            $("#submit-contact-home")
              .after('<i class="icon-spin4 animate-spin loader"></i>')
              .attr("disabled", "disabled"),
            $.post(
              e,
              {
                name_contact_home: $("#name_contact_home").val(),
                email_contact_home: $("#email_contact_home").val(),
                phone_contact_home: $("#phone_contact_home").val(),
                course_home: $("#course_home").val(),
              },
              function (e) {
                ((document.getElementById("message-contact-home").innerHTML =
                  e),
                  $("#message-contact-home").slideDown("slow"),
                  $("#contactform_home .loader").fadeOut("slow", function () {
                    $(this).remove();
                  }),
                  $("#submit-contact-home").removeAttr("disabled"),
                  null != e.match("success") &&
                    $("#contactform_home").slideUp("slow"));
              },
            ));
        }),
        !1
      );
    });
  }),
  jQuery(document).ready(function () {
    $("#contactform").submit(function () {
      var e = $(this).attr("action");
      return (
        $("#message-contact").slideUp(750, function () {
          ($("#message-contact").hide(),
            $("#submit-contact")
              .after('<i class="icon-spin4 animate-spin loader"></i>')
              .attr("disabled", "disabled"),
            $.post(
              e,
              {
                name_contact: $("#name_contact").val(),
                lastname_contact: $("#lastname_contact").val(),
                email_contact: $("#email_contact").val(),
                phone_contact: $("#phone_contact").val(),
                message_contact: $("#message_contact").val(),
                verify_contact: $("#verify_contact").val(),
              },
              function (e) {
                ((document.getElementById("message-contact").innerHTML = e),
                  $("#message-contact").slideDown("slow"),
                  $("#contactform .loader").fadeOut("slow", function () {
                    $(this).remove();
                  }),
                  $("#submit-contact").removeAttr("disabled"),
                  null != e.match("success") &&
                    $("#contactform").slideUp("slow"));
              },
            ));
        }),
        !1
      );
    });
  }),
  jQuery(document).ready(function () {
    $("#visit").submit(function () {
      var e = $(this).attr("action");
      return (
        $("#message-visit").slideUp(750, function () {
          ($("#message-visit").hide(),
            $("#submit-visit")
              .after('<i class="icon-spin4 animate-spin loader"></i>')
              .attr("disabled", "disabled"),
            $.post(
              e,
              {
                name_visit: $("#name_visit").val(),
                lastname_visit: $("#lastname_visit").val(),
                email_visit: $("#email_visit").val(),
                phone_visit: $("#phone_visit").val(),
                date_visit: $("#date_visit").val(),
                time_visit: $("#time_visit").val(),
              },
              function (e) {
                ((document.getElementById("message-visit").innerHTML = e),
                  $("#message-visit").slideDown("slow"),
                  $("#visit .loader").fadeOut("slow", function () {
                    $(this).remove();
                  }),
                  $("#submit-visit").removeAttr("disabled"),
                  null != e.match("success") && $("#visit").slideUp("slow"));
              },
            ));
        }),
        !1
      );
    });
  }),
  (function () {
    function e(e) {
      "loading" === document.readyState
        ? document.addEventListener("DOMContentLoaded", e)
        : e();
    }
    function t(e) {
      if (!e || "none" === e) return "";
      var t = e.match(/url\((['"]?)(.*?)\1\)/i);
      return t && t[2] ? t[2] : "";
    }
    function i() {
      var e = document.querySelectorAll("img.lazyload[data-src]");
      e.length &&
        Array.prototype.forEach.call(e, function (e) {
          var t = e.parentNode;
          if (t) {
            t.classList.add("lazy-media", "is-loading");
            var i = document.createElement("i");
            ((i.className = "icon-spin5 animate-spin lazy-spinner"),
              t.insertBefore(i, e),
              (e.style.opacity = "0"));
            var n = new Image();
            ((n.onload = function () {
              ((e.src = e.dataset.src),
                (e.style.opacity = ""),
                t.classList.remove("is-loading"),
                i && i.parentNode && i.parentNode.removeChild(i),
                e.classList.remove("lazyload"));
              try {
                delete e.dataset.src;
              } catch (e) {}
            }),
              (n.onerror = function () {
                (t.classList.remove("is-loading"),
                  i && i.parentNode && i.parentNode.removeChild(i),
                  (e.style.opacity = ""));
              }),
              (n.src = e.dataset.src));
          }
        });
    }
    function n() {
      var e = document.querySelectorAll(".lazy-bg, [data-bg-src]");
      e.length &&
        Array.prototype.forEach.call(e, function (e) {
          var i = e.style.backgroundImage,
            n = window.getComputedStyle(e).backgroundImage,
            s = e.getAttribute("data-bg-src") || t(i) || t(n);
          if (s) {
            (e.setAttribute("data-bg-src", s),
              e.classList.add("lazy-bg", "is-loading"),
              (e.style.backgroundImage = "none"));
            var o = new Image();
            ((o.onload = function () {
              ((e.style.backgroundImage = "url('" + s + "')"),
                e.classList.remove("is-loading"));
            }),
              (o.onerror = function () {
                (e.classList.remove("is-loading"),
                  (i && "none" !== i) ||
                    !n ||
                    "none" === n ||
                    (e.style.backgroundImage = n));
              }),
              (o.src = s));
          }
        });
    }
    function s() {
      function e(e) {
        return 1 - Math.pow(1 - e, 3);
      }
      function t(t, i, n) {
        function s(a) {
          var r = a - o,
            l = Math.min(r / n, 1),
            c = e(l),
            u = Math.floor(c * i);
          ((t.textContent = u.toLocaleString()),
            l < 1
              ? requestAnimationFrame(s)
              : (t.textContent = i.toLocaleString()));
        }
        n = n || 1500;
        var o = performance.now();
        requestAnimationFrame(s);
      }
      var i = document.querySelectorAll(".stat-number");
      if (i.length) {
        var n = !1,
          s = document.getElementById("statistic-section");
        if (!(s && "IntersectionObserver" in window))
          return void Array.prototype.forEach.call(i, function (e) {
            t(e, parseInt(e.getAttribute("data-target"), 10) || 0);
          });
        var o = new IntersectionObserver(
          function (e) {
            e.forEach(function (e) {
              e.isIntersecting &&
                !n &&
                (Array.prototype.forEach.call(i, function (e) {
                  t(e, parseInt(e.getAttribute("data-target"), 10) || 0);
                }),
                (n = !0),
                o.disconnect());
            });
          },
          { threshold: 0.5 },
        );
        o.observe(s);
      }
    }
    function o() {
      function e() {
        var e = Math.round(((u + 1) / c.length) * 100);
        (r("#mbtProgressBar").css("width", e + "%"),
          r("#mbtStepText").text("Step " + (u + 1) + "/" + c.length));
      }
      function t() {
        r("#mbtNext").text(u === c.length - 1 ? "Lihat Hasil" : "Lanjut");
      }
      function i(e) {
        return "choice" !== e.type || !!h[e.id];
      }
      function n() {
        var n = c[u];
        if (
          (e(),
          t(),
          r("#mbtPrev").prop("disabled", 0 === u),
          r("#mbtQuestionTitle").text(n.question || ""),
          r("#mbtQuestionDesc").text(n.subtitle || ""),
          "scale" === n.type)
        ) {
          (f.hide(), p.show());
          var s = h[n.id] ? parseInt(h[n.id], 10) : 3;
          (h[n.id] || (h[n.id] = s),
            r("#mbtRange").val(s),
            r("#mbtValue").text(s),
            r("#mbtNext").prop("disabled", !1));
        } else {
          (p.hide(), f.show(), m.empty());
          for (var o = 0; o < n.options.length; o++) {
            var a = n.options[o],
              l = r(
                '<button type="button" class="mbt-choice__option"></button>',
              );
            (l.attr("data-value", a.value),
              l.text(a.label),
              h[n.id] && h[n.id] === a.value && l.addClass("is-selected"),
              m.append(l));
          }
          r("#mbtNext").prop("disabled", !i(n));
        }
      }
      function s() {
        for (var e = {}, t = {}, i = 0; i < l.length; i++)
          ((e[l[i].id] = 0), (t[l[i].id] = { scale: 0, compare: 0 }));
        for (var n = 0; n < c.length; n++) {
          var s = c[n],
            o = h[s.id];
          if (o)
            if ("scale" === s.type) {
              var a = parseInt(o, 10) || 0;
              ((e[s.faculty] += a), (t[s.faculty].scale += a));
            } else ((e[o] += 1), (t[o].compare += 1));
        }
        for (var r = 15, u = [], d = 0; d < l.length; d++) {
          var p = l[d].id,
            f = e[p],
            m = Math.round((f / r) * 100);
          u.push({
            id: p,
            name: l[d].name,
            raw: f,
            percent: m,
            scale: t[p].scale,
            compare: t[p].compare,
          });
        }
        return (
          u.sort(function (e, t) {
            return t.raw - e.raw;
          }),
          u
        );
      }
      function o(e) {
        (r("#mbtProdiBoxModal").show(),
          r("#mbtProdiTitleModal").text("Detail \u2014 " + e.name));
        var t = "";
        ((t += '<div class="col-md-12">'),
          (t += '  <div class="mbt-detail"><div class="mbt-detail__card">'),
          (t +=
            '    <div class="mbt-detail__row"><span class="mbt-detail__label">Skor total</span><span class="mbt-detail__val">' +
            e.raw +
            "/15 (" +
            e.percent +
            "%)</span></div>"),
          (t +=
            '    <div class="mbt-detail__row"><span class="mbt-detail__label">Skor minat (10 soal)</span><span class="mbt-detail__val">' +
            e.scale +
            "/10</span></div>"),
          (t +=
            '    <div class="mbt-detail__row"><span class="mbt-detail__label">Skor pembanding (5 soal)</span><span class="mbt-detail__val">' +
            e.compare +
            "/5</span></div>"),
          (t +=
            '    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px">'),
          (t +=
            '      <a class="mbt-btn mbt-btn--primary" style="padding:10px 14px" href="https://unprimdn.ac.id/id/faculties/" target="_blank" rel="noopener">Lihat Fakultas</a>'),
          (t +=
            '      <a class="mbt-btn mbt-btn--ghost" style="padding:10px 14px" href="https://unprimdn.ac.id/id/programs" target="_blank" rel="noopener">Lihat Program Studi</a>'),
          (t += "    </div>"),
          (t += "  </div></div>"),
          (t += "</div>"),
          r("#mbtProdiCardsModal").html(t));
      }
      function a() {
        var e = s(),
          t = e.slice(0, 3),
          i = r("#mbtFacultyCardsModal").empty();
        (r("#mbtProdiCardsModal").empty(), r("#mbtProdiBoxModal").hide());
        for (var n = 0; n < t.length; n++) {
          var a = t[n],
            l = r('<div class="col-md-4 col-sm-4"></div>'),
            c = r(
              '<div class="mbt-result-card" data-fid="' + a.id + '"></div>',
            );
          (0 === n && c.addClass("is-active"),
            c.append(
              '<div class="mbt-result-card__top"><span class="mbt-pill">Top ' +
                (n + 1) +
                '</span><span class="mbt-score">' +
                a.percent +
                '%</span></div><div class="mbt-result-card__title">' +
                a.name +
                '</div><p class="mbt-result-card__why">Minat: <strong>' +
                a.scale +
                "/10</strong> \u2022 Pembanding: <strong>" +
                a.compare +
                "/4</strong></p>",
            ),
            l.append(c),
            i.append(l));
        }
        (o(t[0]), r("#mbtResultModal").modal("show"));
      }
      if ("undefined" != typeof window.jQuery) {
        var r = window.jQuery;
        if (r("#mbt-test").length && r("#mbtStartBtn").length) {
          var l = [
              {
                id: "FKKG",
                name: "Fakultas Kedokteran dan Kedokteran Gigi (FKKG)",
              },
              { id: "FIK", name: "Fakultas Ilmu Kesehatan (FIK)" },
              { id: "FKK", name: "Fakultas Keperawatan dan Kebidanan (FKK)" },
              { id: "FAST", name: "Fakultas Sains dan Teknologi (FAST)" },
              { id: "FEB", name: "Fakultas Ekonomi dan Bisnis (FEB)" },
              { id: "FH", name: "Fakultas Hukum (FH)" },
              { id: "FBK", name: "Fakultas Bahasa dan Komunikasi (FBK)" },
              { id: "FAPERTA", name: "Fakultas Pertanian (FAPERTA)" },
              { id: "FPSI", name: "Fakultas Psikologi (FPSI)" },
            ],
            c = [
              {
                id: "s1",
                type: "scale",
                faculty: "FKKG",
                subtitle: "Fakultas Kedokteran dan Kedokteran Gigi (FKKG)",
                question:
                  "Saya tertarik mempelajari tubuh manusia, penyakit, diagnosis, dan cara penanganan medis secara mendalam.",
              },
              {
                id: "s2",
                type: "scale",
                faculty: "FKKG",
                subtitle: "Fakultas Kedokteran dan Kedokteran Gigi (FKKG)",
                question:
                  "Saya ingin berperan langsung dalam membantu pasien melalui tindakan medis atau pelayanan kesehatan profesional.",
              },
              {
                id: "s3",
                type: "scale",
                faculty: "FIK",
                subtitle: "Fakultas Ilmu Kesehatan (FIK)",
                question:
                  "Saya tertarik pada kesehatan masyarakat, farmasi, fisioterapi, dan upaya meningkatkan kualitas hidup banyak orang.",
              },
              {
                id: "s4",
                type: "scale",
                faculty: "FIK",
                subtitle: "Fakultas Ilmu Kesehatan (FIK)",
                question:
                  "Saya suka memahami penyebab masalah kesehatan dan mencari cara pencegahan atau penanganannya secara ilmiah.",
              },
              {
                id: "s5",
                type: "scale",
                faculty: "FKK",
                subtitle: "Fakultas Keperawatan dan Kebidanan (FKK)",
                question:
                  "Saya merasa nyaman merawat, mendampingi, dan membantu orang yang sedang membutuhkan perhatian langsung.",
              },
              {
                id: "s6",
                type: "scale",
                faculty: "FKK",
                subtitle: "Fakultas Keperawatan dan Kebidanan (FKK)",
                question:
                  "Saya tertarik pada pelayanan kesehatan yang dekat dengan pasien, ibu, anak, keluarga, dan komunitas.",
              },
              {
                id: "s7",
                type: "scale",
                faculty: "FAST",
                subtitle: "Fakultas Sains dan Teknologi (FAST)",
                question:
                  "Saya menikmati aktivitas yang melibatkan logika, perhitungan, teknologi, sistem, atau pemecahan masalah teknis.",
              },
              {
                id: "s8",
                type: "scale",
                faculty: "FAST",
                subtitle: "Fakultas Sains dan Teknologi (FAST)",
                question:
                  "Saya tertarik merancang, membangun, atau memperbaiki solusi berbasis teknologi, data, mesin, bangunan, atau sistem.",
              },
              {
                id: "s9",
                type: "scale",
                faculty: "FEB",
                subtitle: "Fakultas Ekonomi dan Bisnis (FEB)",
                question:
                  "Saya tertarik memahami bisnis, uang, pasar, organisasi, manajemen, dan cara mengambil keputusan ekonomi.",
              },
              {
                id: "s10",
                type: "scale",
                faculty: "FEB",
                subtitle: "Fakultas Ekonomi dan Bisnis (FEB)",
                question:
                  "Saya suka menyusun strategi, membaca peluang, menghitung risiko, dan mengelola sumber daya.",
              },
              {
                id: "s11",
                type: "scale",
                faculty: "FH",
                subtitle: "Fakultas Hukum (FH)",
                question:
                  "Saya tertarik memahami aturan, keadilan, hak, kewajiban, dan cara menyelesaikan konflik secara hukum.",
              },
              {
                id: "s12",
                type: "scale",
                faculty: "FH",
                subtitle: "Fakultas Hukum (FH)",
                question:
                  "Saya menikmati membaca kasus, membangun argumen, berdiskusi, dan melihat masalah dari berbagai sudut pandang.",
              },
              {
                id: "s13",
                type: "scale",
                faculty: "FBK",
                subtitle: "Fakultas Bahasa dan Komunikasi (FBK)",
                question:
                  "Saya tertarik memahami cara orang menerima pesan, belajar, berkomunikasi, dan membangun makna.",
              },
              {
                id: "s14",
                type: "scale",
                faculty: "FBK",
                subtitle: "Fakultas Bahasa dan Komunikasi (FBK)",
                question:
                  "Saya suka membuat penjelasan, konten, cerita, presentasi, atau karya visual yang mudah dipahami orang lain.",
              },
              {
                id: "s15",
                type: "scale",
                faculty: "FAPERTA",
                subtitle: "Fakultas Pertanian (FAPERTA)",
                question:
                  "Saya tertarik pada pertanian, pangan, tanaman, lingkungan, sumber daya alam, atau agribisnis.",
              },
              {
                id: "s16",
                type: "scale",
                faculty: "FAPERTA",
                subtitle: "Fakultas Pertanian (FAPERTA)",
                question:
                  "Saya nyaman belajar melalui kombinasi teori, praktik lapangan, pengamatan alam, dan pemecahan masalah nyata.",
              },
              {
                id: "s17",
                type: "scale",
                faculty: "FPSI",
                subtitle: "Fakultas Psikologi (FPSI)",
                question:
                  "Saya tertarik memahami pikiran, emosi, perilaku, kepribadian, dan hubungan antar manusia.",
              },
              {
                id: "s18",
                type: "scale",
                faculty: "FPSI",
                subtitle: "Fakultas Psikologi (FPSI)",
                question:
                  "Saya peka terhadap perubahan suasana hati, kebutuhan emosional, dan cara orang mengambil keputusan.",
              },
              {
                id: "c1",
                type: "choice",
                subtitle: "Pembanding 1",
                question: "Bidang mana yang paling ingin Anda dalami?",
                options: [
                  { label: "A. Kedokteran dan kedokteran gigi", value: "FKKG" },
                  {
                    label: "B. Ilmu kesehatan dan kesehatan masyarakat",
                    value: "FIK",
                  },
                  { label: "C. Teknologi, sistem, dan inovasi", value: "FAST" },
                  { label: "D. Psikologi dan perilaku manusia", value: "FPSI" },
                  {
                    label: "E. Hukum, keadilan, dan kebijakan publik",
                    value: "FH",
                  },
                ],
              },
              {
                id: "c2",
                type: "choice",
                subtitle: "Pembanding 2",
                question:
                  "Peran masa depan mana yang paling menarik bagi Anda?",
                options: [
                  {
                    label: "A. Dokter atau tenaga medis profesional",
                    value: "FKKG",
                  },
                  {
                    label: "B. Perawat, bidan, atau pendamping pasien",
                    value: "FKK",
                  },
                  {
                    label: "C. Pengusaha, manajer, atau analis bisnis",
                    value: "FEB",
                  },
                  { label: "D. Praktisi hukum atau advokat", value: "FH" },
                  {
                    label: "E. Ahli pertanian atau agribisnis",
                    value: "FAPERTA",
                  },
                ],
              },
              {
                id: "c3",
                type: "choice",
                subtitle: "Pembanding 3",
                question:
                  "Masalah apa yang paling ingin Anda bantu selesaikan?",
                options: [
                  {
                    label: "A. Penyakit, diagnosis, dan penanganan medis",
                    value: "FKKG",
                  },
                  {
                    label: "B. Kesehatan masyarakat dan pencegahan penyakit",
                    value: "FIK",
                  },
                  {
                    label: "C. Perilaku, emosi, dan pengembangan diri",
                    value: "FPSI",
                  },
                  {
                    label: "D. Ketahanan pangan dan lingkungan",
                    value: "FAPERTA",
                  },
                  {
                    label: "E. Komunikasi efektif dan desain pesan",
                    value: "FBK",
                  },
                ],
              },
              {
                id: "c4",
                type: "choice",
                subtitle: "Pembanding 4",
                question: "Jenis kegiatan mana yang paling Anda nikmati?",
                options: [
                  {
                    label: "A. Menganalisis data dan rancangan teknis",
                    value: "FAST",
                  },
                  {
                    label: "B. Menyusun strategi bisnis dan organisasi",
                    value: "FEB",
                  },
                  { label: "C. Membaca kasus dan argumen hukum", value: "FH" },
                  {
                    label: "D. Menulis, mendesain, atau berkomunikasi kreatif",
                    value: "FBK",
                  },
                  {
                    label: "E. Merawat dan berinteraksi dengan pasien",
                    value: "FKK",
                  },
                ],
              },
              {
                id: "c5",
                type: "choice",
                subtitle: "Pembanding 5",
                question:
                  "Lingkungan kerja mana yang paling sesuai untuk Anda?",
                options: [
                  {
                    label: "A. Rumah sakit atau laboratorium kesehatan",
                    value: "FKKG",
                  },
                  {
                    label: "B. Komunitas atau pusat layanan kesehatan",
                    value: "FIK",
                  },
                  {
                    label: "C. Industri teknologi atau laboratorium teknik",
                    value: "FAST",
                  },
                  {
                    label: "D. Lahan pertanian atau agribisnis",
                    value: "FAPERTA",
                  },
                  {
                    label: "E. Kantor konseling atau ruang terapi",
                    value: "FPSI",
                  },
                ],
              },
              {
                id: "c6",
                type: "choice",
                subtitle: "Pembanding 6",
                question:
                  "Kontribusi terbesar yang ingin Anda berikan adalah\u2026",
                options: [
                  {
                    label: "A. Meningkatkan kualitas pelayanan kesehatan",
                    value: "FIK",
                  },
                  {
                    label: "B. Menciptakan solusi teknologi bermanfaat",
                    value: "FAST",
                  },
                  {
                    label: "C. Menegakkan keadilan dan kepastian hukum",
                    value: "FH",
                  },
                  {
                    label: "D. Menjaga ketahanan pangan nasional",
                    value: "FAPERTA",
                  },
                  {
                    label: "E. Mengembangkan komunikasi dan media",
                    value: "FBK",
                  },
                ],
              },
              {
                id: "c7",
                type: "choice",
                subtitle: "Pembanding 7",
                question:
                  "Jika diberi proyek besar, Anda lebih tertarik untuk\u2026",
                options: [
                  {
                    label: "A. Membuat kampanye edukasi kesehatan",
                    value: "FIK",
                  },
                  {
                    label: "B. Mengembangkan sistem atau aplikasi",
                    value: "FAST",
                  },
                  {
                    label: "C. Membangun usaha atau strategi pemasaran",
                    value: "FEB",
                  },
                  {
                    label: "D. Membuat konten komunikasi visual",
                    value: "FBK",
                  },
                  { label: "E. Merawat dan mendampingi pasien", value: "FKK" },
                ],
              },
              {
                id: "c8",
                type: "choice",
                subtitle: "Pembanding 8",
                question:
                  "Tipe masalah mana yang paling membuat Anda penasaran?",
                options: [
                  {
                    label: "A. Mengapa seseorang sakit dan penanganannya",
                    value: "FKKG",
                  },
                  {
                    label: "B. Bagaimana aturan menciptakan keadilan",
                    value: "FH",
                  },
                  {
                    label: "C. Mengapa manusia berpikir dan bertindak tertentu",
                    value: "FPSI",
                  },
                  {
                    label: "D. Bagaimana mengelola sumber daya alam",
                    value: "FAPERTA",
                  },
                  {
                    label: "E. Bagaimana membantu pasien merasa terawat",
                    value: "FKK",
                  },
                ],
              },
              {
                id: "c9",
                type: "choice",
                subtitle: "Pembanding 9",
                question: "Kemampuan mana yang paling ingin Anda kembangkan?",
                options: [
                  {
                    label: "A. Komunikasi, bahasa, dan desain pesan",
                    value: "FBK",
                  },
                  {
                    label: "B. Analisis keuangan dan manajemen bisnis",
                    value: "FEB",
                  },
                  {
                    label: "C. Budidaya dan pengelolaan pangan",
                    value: "FAPERTA",
                  },
                  {
                    label: "D. Konseling dan pemahaman perilaku",
                    value: "FPSI",
                  },
                  { label: "E. Diagnosis dan penanganan medis", value: "FKKG" },
                ],
              },
            ],
            u = 0,
            h = {},
            d = r("#mbt-test"),
            p = d.find(".mbt-scale"),
            f = r("#mbtChoice"),
            m = r("#mbtChoiceOptions");
          (d.hide(),
            r("#mbtStartBtn")
              .off("click.mbt")
              .on("click.mbt", function (e) {
                (e.preventDefault(),
                  r(".mbt-cta").hide(),
                  d.fadeIn(180),
                  (u = 0),
                  (h = {}),
                  n(),
                  r("html, body").animate(
                    { scrollTop: d.offset().top - 20 },
                    250,
                  ));
              }),
            r("#mbtRange")
              .off("input.mbt change.mbt")
              .on("input.mbt change.mbt", function () {
                var e = c[u];
                if ("scale" === e.type) {
                  var t = parseInt(r(this).val(), 10);
                  ((h[e.id] = t), r("#mbtValue").text(t));
                }
              }),
            r("#mbtNotSure")
              .off("click.mbt")
              .on("click.mbt", function () {
                var e = c[u];
                "scale" === e.type &&
                  ((h[e.id] = 3),
                  r("#mbtRange").val(3),
                  r("#mbtValue").text(3));
              }),
            r(document)
              .off("click.mbtChoice")
              .on("click.mbtChoice", ".mbt-choice__option", function () {
                var e = c[u];
                if ("choice" === e.type) {
                  var t = r(this).attr("data-value");
                  ((h[e.id] = t),
                    r(".mbt-choice__option").removeClass("is-selected"),
                    r(this).addClass("is-selected"),
                    r("#mbtNext").prop("disabled", !1));
                }
              }),
            r("#mbtPrev")
              .off("click.mbt")
              .on("click.mbt", function () {
                0 !== u && ((u -= 1), n());
              }),
            r("#mbtNext")
              .off("click.mbt")
              .on("click.mbt", function () {
                if (i(c[u])) {
                  if (u === c.length - 1) return void a();
                  ((u += 1), n());
                }
              }),
            r(document)
              .off("click.mbtResult")
              .on("click.mbtResult", ".mbt-result-card[data-fid]", function () {
                (r(".mbt-result-card").removeClass("is-active"),
                  r(this).addClass("is-active"));
                for (
                  var e = r(this).attr("data-fid"), t = s(), i = 0;
                  i < t.length;
                  i++
                )
                  if (t[i].id === e) {
                    o(t[i]);
                    break;
                  }
              }),
            r("#mbtRestartModal")
              .off("click.mbt")
              .on("click.mbt", function () {
                (r("#mbtResultModal").modal("hide"),
                  (u = 0),
                  (h = {}),
                  d.hide(),
                  r(".mbt-cta").show());
              }));
        }
      }
    }
    e(function () {
      (i(), n(), s(), o());
    });
  })(),
  (function () {
    function e(e, t) {
      return ((e % t) + t) % t;
    }
    function t(e) {
      if (u[e]) {
        var t = u[e].querySelector("img[data-src]");
        if (t && !t.getAttribute("src")) {
          var i = t.getAttribute("data-src");
          i && t.setAttribute("src", i);
        }
      }
    }
    function i(i) {
      (t(i), t(e(i + 1, u.length)), t(e(i - 1, u.length)));
    }
    function n() {
      if (p)
        for (
          var e = p.querySelectorAll(".unpri-slider__dot"), t = 0;
          t < e.length;
          t++
        ) {
          var i = t === m;
          (i
            ? e[t].classList.add("is-active")
            : e[t].classList.remove("is-active"),
            e[t].setAttribute("aria-current", i ? "true" : "false"));
        }
    }
    function s(t, s) {
      ((s = s || {}),
        (m = e(t, u.length)),
        (c.style.transform = "translateX(-" + 100 * m + "%)"),
        n(),
        i(m),
        s.user && r(),
        l.classList.add("is-sliding"),
        l._slideTO && clearTimeout(l._slideTO),
        (l._slideTO = setTimeout(function () {
          l.classList.remove("is-sliding");
        }, 350)));
    }
    function o() {
      (a(),
        (g = setInterval(function () {
          s(m + 1);
        }, f)));
    }
    function a() {
      (g && clearInterval(g), (g = null));
    }
    function r() {
      o();
    }
    var l = document.getElementById("unpriSlider");
    if (l) {
      var c = l.querySelector(".unpri-slider__track"),
        u = [].slice.call(l.querySelectorAll(".unpri-slide"));
      if (c && u.length) {
        var h = l.querySelector(".unpri-slider__btn--prev"),
          d = l.querySelector(".unpri-slider__btn--next"),
          p = l.querySelector(".unpri-slider__dots"),
          f = 5e3,
          m = 0,
          g = null;
        if (p) {
          for (; p.firstChild; ) p.removeChild(p.firstChild);
          for (var v = 0; v < u.length; v++)
            !(function (e) {
              var t = document.createElement("button");
              ((t.type = "button"),
                (t.className =
                  "unpri-slider__dot" + (0 === e ? " is-active" : "")),
                t.setAttribute("aria-label", "Go to slide " + (e + 1)),
                t.addEventListener("click", function () {
                  s(e, { user: !0 });
                }),
                p.appendChild(t));
            })(v);
        }
        (h &&
          h.addEventListener("click", function () {
            s(m - 1, { user: !0 });
          }),
          d &&
            d.addEventListener("click", function () {
              s(m + 1, { user: !0 });
            }),
          l.addEventListener("mouseenter", a),
          l.addEventListener("mouseleave", o),
          l.addEventListener("focusin", a),
          l.addEventListener("focusout", o));
        var y = null;
        (l.addEventListener(
          "touchstart",
          function (e) {
            e.touches && e.touches.length && (y = e.touches[0].clientX);
          },
          { passive: !0 },
        ),
          l.addEventListener(
            "touchend",
            function (e) {
              if (null !== y) {
                var t = y;
                e.changedTouches &&
                  e.changedTouches.length &&
                  (t = e.changedTouches[0].clientX);
                var i = t - y;
                (Math.abs(i) > 40 &&
                  (i < 0 ? s(m + 1, { user: !0 }) : s(m - 1, { user: !0 })),
                  (y = null));
              }
            },
            { passive: !0 },
          ),
          i(0),
          s(0));
        (window.matchMedia &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches) ||
          o();
      }
    }
  })());
