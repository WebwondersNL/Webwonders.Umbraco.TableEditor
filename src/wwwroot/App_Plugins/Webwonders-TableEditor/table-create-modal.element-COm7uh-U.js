import { html as Hr, css as bi, state as Za, customElement as Pi } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as Li } from "@umbraco-cms/backoffice/modal";
var Un = 1252, Mi = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], a0 = {
  /*::[*/
  0: 1252,
  /* ANSI */
  /*::[*/
  1: 65001,
  /* DEFAULT */
  /*::[*/
  2: 65001,
  /* SYMBOL */
  /*::[*/
  77: 1e4,
  /* MAC */
  /*::[*/
  128: 932,
  /* SHIFTJIS */
  /*::[*/
  129: 949,
  /* HANGUL */
  /*::[*/
  130: 1361,
  /* JOHAB */
  /*::[*/
  134: 936,
  /* GB2312 */
  /*::[*/
  136: 950,
  /* CHINESEBIG5 */
  /*::[*/
  161: 1253,
  /* GREEK */
  /*::[*/
  162: 1254,
  /* TURKISH */
  /*::[*/
  163: 1258,
  /* VIETNAMESE */
  /*::[*/
  177: 1255,
  /* HEBREW */
  /*::[*/
  178: 1256,
  /* ARABIC */
  /*::[*/
  186: 1257,
  /* BALTIC */
  /*::[*/
  204: 1251,
  /* RUSSIAN */
  /*::[*/
  222: 874,
  /* THAI */
  /*::[*/
  238: 1250,
  /* EASTEUROPE */
  /*::[*/
  255: 1252,
  /* OEM */
  /*::[*/
  69: 6969
  /* MISC */
}, t0 = function(e) {
  Mi.indexOf(e) != -1 && (Un = a0[0] = e);
};
function Bi() {
  t0(1252);
}
var Dr = function(e) {
  t0(e);
};
function Hn() {
  Dr(1200), Bi();
}
function N0(e) {
  for (var a = [], r = 0, n = e.length; r < n; ++r) a[r] = e.charCodeAt(r);
  return a;
}
function Ui(e) {
  for (var a = [], r = 0; r < e.length >> 1; ++r) a[r] = String.fromCharCode(e.charCodeAt(2 * r) + (e.charCodeAt(2 * r + 1) << 8));
  return a.join("");
}
function Wn(e) {
  for (var a = [], r = 0; r < e.length >> 1; ++r) a[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
  return a.join("");
}
var Da = function(e) {
  var a = e.charCodeAt(0), r = e.charCodeAt(1);
  return a == 255 && r == 254 ? Ui(e.slice(2)) : a == 254 && r == 255 ? Wn(e.slice(2)) : a == 65279 ? e.slice(1) : e;
}, it = function(a) {
  return String.fromCharCode(a);
}, b0 = function(a) {
  return String.fromCharCode(a);
}, Ga, Yr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function P0(e) {
  for (var a = "", r = 0, n = 0, t = 0, s = 0, i = 0, c = 0, o = 0, f = 0; f < e.length; )
    r = e.charCodeAt(f++), s = r >> 2, n = e.charCodeAt(f++), i = (r & 3) << 4 | n >> 4, t = e.charCodeAt(f++), c = (n & 15) << 2 | t >> 6, o = t & 63, isNaN(n) ? c = o = 64 : isNaN(t) && (o = 64), a += Yr.charAt(s) + Yr.charAt(i) + Yr.charAt(c) + Yr.charAt(o);
  return a;
}
function Tr(e) {
  var a = "", r = 0, n = 0, t = 0, s = 0, i = 0, c = 0, o = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var f = 0; f < e.length; )
    s = Yr.indexOf(e.charAt(f++)), i = Yr.indexOf(e.charAt(f++)), r = s << 2 | i >> 4, a += String.fromCharCode(r), c = Yr.indexOf(e.charAt(f++)), n = (i & 15) << 4 | c >> 2, c !== 64 && (a += String.fromCharCode(n)), o = Yr.indexOf(e.charAt(f++)), t = (c & 3) << 6 | o, o !== 64 && (a += String.fromCharCode(t));
  return a;
}
var Ae = /* @__PURE__ */ (function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
})(), oa = /* @__PURE__ */ (function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e) try {
      Buffer.from("foo", "utf8");
    } catch {
      e = !0;
    }
    return e ? function(a, r) {
      return r ? new Buffer(a, r) : new Buffer(a);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
})();
function qr(e) {
  return Ae ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function L0(e) {
  return Ae ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var Or = function(a) {
  return Ae ? oa(a, "binary") : a.split("").map(function(r) {
    return r.charCodeAt(0) & 255;
  });
};
function la(e) {
  if (Array.isArray(e)) return e.map(function(n) {
    return String.fromCharCode(n);
  }).join("");
  for (var a = [], r = 0; r < e.length; ++r) a[r] = String.fromCharCode(e[r]);
  return a.join("");
}
function n0(e) {
  if (typeof ArrayBuffer > "u") throw new Error("Unsupported");
  if (e instanceof ArrayBuffer) return n0(new Uint8Array(e));
  for (var a = new Array(e.length), r = 0; r < e.length; ++r) a[r] = e[r];
  return a;
}
var Kr = Ae ? function(e) {
  return Buffer.concat(e.map(function(a) {
    return Buffer.isBuffer(a) ? a : oa(a);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var a = 0, r = 0;
    for (a = 0; a < e.length; ++a) r += e[a].length;
    var n = new Uint8Array(r), t = 0;
    for (a = 0, r = 0; a < e.length; r += t, ++a)
      if (t = e[a].length, e[a] instanceof Uint8Array) n.set(e[a], r);
      else {
        if (typeof e[a] == "string")
          throw "wtf";
        n.set(new Uint8Array(e[a]), r);
      }
    return n;
  }
  return [].concat.apply([], e.map(function(s) {
    return Array.isArray(s) ? s : [].slice.call(s);
  }));
};
function Hi(e) {
  for (var a = [], r = 0, n = e.length + 250, t = qr(e.length + 255), s = 0; s < e.length; ++s) {
    var i = e.charCodeAt(s);
    if (i < 128) t[r++] = i;
    else if (i < 2048)
      t[r++] = 192 | i >> 6 & 31, t[r++] = 128 | i & 63;
    else if (i >= 55296 && i < 57344) {
      i = (i & 1023) + 64;
      var c = e.charCodeAt(++s) & 1023;
      t[r++] = 240 | i >> 8 & 7, t[r++] = 128 | i >> 2 & 63, t[r++] = 128 | c >> 6 & 15 | (i & 3) << 4, t[r++] = 128 | c & 63;
    } else
      t[r++] = 224 | i >> 12 & 15, t[r++] = 128 | i >> 6 & 63, t[r++] = 128 | i & 63;
    r > n && (a.push(t.slice(0, r)), r = 0, t = qr(65535), n = 65530);
  }
  return a.push(t.slice(0, r)), Kr(a);
}
var dr = /\u0000/g, Ra = /[\u0001-\u0006]/g;
function ma(e) {
  for (var a = "", r = e.length - 1; r >= 0; ) a += e.charAt(r--);
  return a;
}
function Rr(e, a) {
  var r = "" + e;
  return r.length >= a ? r : Be("0", a - r.length) + r;
}
function s0(e, a) {
  var r = "" + e;
  return r.length >= a ? r : Be(" ", a - r.length) + r;
}
function gt(e, a) {
  var r = "" + e;
  return r.length >= a ? r : r + Be(" ", a - r.length);
}
function Wi(e, a) {
  var r = "" + Math.round(e);
  return r.length >= a ? r : Be("0", a - r.length) + r;
}
function Vi(e, a) {
  var r = "" + e;
  return r.length >= a ? r : Be("0", a - r.length) + r;
}
var M0 = /* @__PURE__ */ Math.pow(2, 32);
function pa(e, a) {
  if (e > M0 || e < -M0) return Wi(e, a);
  var r = Math.round(e);
  return Vi(r, a);
}
function mt(e, a) {
  return a = a || 0, e.length >= 7 + a && (e.charCodeAt(a) | 32) === 103 && (e.charCodeAt(a + 1) | 32) === 101 && (e.charCodeAt(a + 2) | 32) === 110 && (e.charCodeAt(a + 3) | 32) === 101 && (e.charCodeAt(a + 4) | 32) === 114 && (e.charCodeAt(a + 5) | 32) === 97 && (e.charCodeAt(a + 6) | 32) === 108;
}
var B0 = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
], bt = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function Gi(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "', e;
}
var Ee = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
}, U0 = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  //  5 -> 37 ...  8 -> 40
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  // 23 ->  0 ... 26 ->  0
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  // 27 -> 14 ... 31 -> 14
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  // 50 -> 14 ... 58 -> 14
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  // 59 ->  1 ... 62 ->  4
  67: 9,
  68: 10,
  // 67 ->  9 ... 68 -> 10
  69: 12,
  70: 13,
  71: 14,
  // 69 -> 12 ... 71 -> 14
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  // 72 -> 14 ... 75 -> 17
  76: 20,
  77: 21,
  78: 22,
  // 76 -> 20 ... 78 -> 22
  79: 45,
  80: 46,
  81: 47,
  // 79 -> 45 ... 81 -> 47
  82: 0
  // 82 ->  0 ... 65536 -> 0 (omitted)
}, zi = {
  //  5 -- Currency,   0 decimal, black negative
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  //  6 -- Currency,   0 decimal, red   negative
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  //  7 -- Currency,   2 decimal, black negative
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  //  8 -- Currency,   2 decimal, red   negative
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  // 41 -- Accounting, 0 decimal, No Symbol
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  // 42 -- Accounting, 0 decimal, $  Symbol
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  // 43 -- Accounting, 2 decimal, No Symbol
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  // 44 -- Accounting, 2 decimal, $  Symbol
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function _t(e, a, r) {
  for (var n = e < 0 ? -1 : 1, t = e * n, s = 0, i = 1, c = 0, o = 1, f = 0, l = 0, u = Math.floor(t); f < a && (u = Math.floor(t), c = u * i + s, l = u * f + o, !(t - u < 5e-8)); )
    t = 1 / (t - u), s = i, i = c, o = f, f = l;
  if (l > a && (f > a ? (l = o, c = s) : (l = f, c = i)), !r) return [0, n * c, l];
  var x = Math.floor(n * c / l);
  return [x, n * c - x * l, l];
}
function ta(e, a, r) {
  if (e > 2958465 || e < 0) return null;
  var n = e | 0, t = Math.floor(86400 * (e - n)), s = 0, i = [], c = { D: n, T: t, u: 86400 * (e - n) - t, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(c.u) < 1e-6 && (c.u = 0), a && a.date1904 && (n += 1462), c.u > 0.9999 && (c.u = 0, ++t == 86400 && (c.T = t = 0, ++n, ++c.D)), n === 60)
    i = r ? [1317, 10, 29] : [1900, 2, 29], s = 3;
  else if (n === 0)
    i = r ? [1317, 8, 29] : [1900, 1, 0], s = 6;
  else {
    n > 60 && --n;
    var o = new Date(1900, 0, 1);
    o.setDate(o.getDate() + n - 1), i = [o.getFullYear(), o.getMonth() + 1, o.getDate()], s = o.getDay(), n < 60 && (s = (s + 6) % 7), r && (s = Ji(o, i));
  }
  return c.y = i[0], c.m = i[1], c.d = i[2], c.S = t % 60, t = Math.floor(t / 60), c.M = t % 60, t = Math.floor(t / 60), c.H = t, c.q = s, c;
}
var Vn = /* @__PURE__ */ new Date(1899, 11, 31, 0, 0, 0), Xi = /* @__PURE__ */ Vn.getTime(), $i = /* @__PURE__ */ new Date(1900, 2, 1, 0, 0, 0);
function Gn(e, a) {
  var r = /* @__PURE__ */ e.getTime();
  return a ? r -= 1461 * 24 * 60 * 60 * 1e3 : e >= $i && (r += 1440 * 60 * 1e3), (r - (Xi + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ Vn.getTimezoneOffset()) * 6e4)) / (1440 * 60 * 1e3);
}
function i0(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function Ki(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function Yi(e) {
  var a = e < 0 ? 12 : 11, r = i0(e.toFixed(12));
  return r.length <= a || (r = e.toPrecision(10), r.length <= a) ? r : e.toExponential(5);
}
function ji(e) {
  var a = i0(e.toFixed(11));
  return a.length > (e < 0 ? 12 : 11) || a === "0" || a === "-0" ? e.toPrecision(6) : a;
}
function za(e) {
  var a = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), r;
  return a >= -4 && a <= -1 ? r = e.toPrecision(10 + a) : Math.abs(a) <= 9 ? r = Yi(e) : a === 10 ? r = e.toFixed(10).substr(0, 12) : r = ji(e), i0(Ki(r.toUpperCase()));
}
function ia(e, a) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : za(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return Fr(14, Gn(e, a && a.date1904), a);
  }
  throw new Error("unsupported value in General format: " + e);
}
function Ji(e, a) {
  a[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function qi(e, a, r, n) {
  var t = "", s = 0, i = 0, c = r.y, o, f = 0;
  switch (e) {
    case 98:
      c = r.y + 543;
    /* falls through */
    case 121:
      switch (a.length) {
        case 1:
        case 2:
          o = c % 100, f = 2;
          break;
        default:
          o = c % 1e4, f = 4;
          break;
      }
      break;
    case 109:
      switch (a.length) {
        case 1:
        case 2:
          o = r.m, f = a.length;
          break;
        case 3:
          return bt[r.m - 1][1];
        case 5:
          return bt[r.m - 1][0];
        default:
          return bt[r.m - 1][2];
      }
      break;
    case 100:
      switch (a.length) {
        case 1:
        case 2:
          o = r.d, f = a.length;
          break;
        case 3:
          return B0[r.q][0];
        default:
          return B0[r.q][1];
      }
      break;
    case 104:
      switch (a.length) {
        case 1:
        case 2:
          o = 1 + (r.H + 11) % 12, f = a.length;
          break;
        default:
          throw "bad hour format: " + a;
      }
      break;
    case 72:
      switch (a.length) {
        case 1:
        case 2:
          o = r.H, f = a.length;
          break;
        default:
          throw "bad hour format: " + a;
      }
      break;
    case 77:
      switch (a.length) {
        case 1:
        case 2:
          o = r.M, f = a.length;
          break;
        default:
          throw "bad minute format: " + a;
      }
      break;
    case 115:
      if (a != "s" && a != "ss" && a != ".0" && a != ".00" && a != ".000") throw "bad second format: " + a;
      return r.u === 0 && (a == "s" || a == "ss") ? Rr(r.S, a.length) : (n >= 2 ? i = n === 3 ? 1e3 : 100 : i = n === 1 ? 10 : 1, s = Math.round(i * (r.S + r.u)), s >= 60 * i && (s = 0), a === "s" ? s === 0 ? "0" : "" + s / i : (t = Rr(s, 2 + n), a === "ss" ? t.substr(0, 2) : "." + t.substr(2, a.length - 1)));
    case 90:
      switch (a) {
        case "[h]":
        case "[hh]":
          o = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          o = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          o = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw "bad abstime format: " + a;
      }
      f = a.length === 3 ? 1 : 2;
      break;
    case 101:
      o = c, f = 1;
      break;
  }
  var l = f > 0 ? Rr(o, f) : "";
  return l;
}
function jr(e) {
  var a = 3;
  if (e.length <= a) return e;
  for (var r = e.length % a, n = e.substr(0, r); r != e.length; r += a) n += (n.length > 0 ? "," : "") + e.substr(r, a);
  return n;
}
var zn = /%/g;
function Zi(e, a, r) {
  var n = a.replace(zn, ""), t = a.length - n.length;
  return Vr(e, n, r * Math.pow(10, 2 * t)) + Be("%", t);
}
function Qi(e, a, r) {
  for (var n = a.length - 1; a.charCodeAt(n - 1) === 44; ) --n;
  return Vr(e, a.substr(0, n), r / Math.pow(10, 3 * (a.length - n)));
}
function Xn(e, a) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (a == 0) return "0.0E+0";
    if (a < 0) return "-" + Xn(e, -a);
    var t = e.indexOf(".");
    t === -1 && (t = e.indexOf("E"));
    var s = Math.floor(Math.log(a) * Math.LOG10E) % t;
    if (s < 0 && (s += t), r = (a / Math.pow(10, s)).toPrecision(n + 1 + (t + s) % t), r.indexOf("e") === -1) {
      var i = Math.floor(Math.log(a) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (i - r.length + s) : r += "E+" + (i - s); r.substr(0, 2) === "0."; )
        r = r.charAt(0) + r.substr(2, t) + "." + r.substr(2 + t), r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(c, o, f, l) {
      return o + f + l.substr(0, (t + s) % t) + "." + l.substr(s) + "E";
    });
  } else r = a.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var $n = /# (\?+)( ?)\/( ?)(\d+)/;
function ec(e, a, r) {
  var n = parseInt(e[4], 10), t = Math.round(a * n), s = Math.floor(t / n), i = t - s * n, c = n;
  return r + (s === 0 ? "" : "" + s) + " " + (i === 0 ? Be(" ", e[1].length + 1 + e[4].length) : s0(i, e[1].length) + e[2] + "/" + e[3] + Rr(c, e[4].length));
}
function rc(e, a, r) {
  return r + (a === 0 ? "" : "" + a) + Be(" ", e[1].length + 2 + e[4].length);
}
var Kn = /^#*0*\.([0#]+)/, Yn = /\).*[0#]/, jn = /\(###\) ###\\?-####/;
function ur(e) {
  for (var a = "", r, n = 0; n != e.length; ++n) switch (r = e.charCodeAt(n)) {
    case 35:
      break;
    case 63:
      a += " ";
      break;
    case 48:
      a += "0";
      break;
    default:
      a += String.fromCharCode(r);
  }
  return a;
}
function H0(e, a) {
  var r = Math.pow(10, a);
  return "" + Math.round(e * r) / r;
}
function W0(e, a) {
  var r = e - Math.floor(e), n = Math.pow(10, a);
  return a < ("" + Math.round(r * n)).length ? 0 : Math.round(r * n);
}
function ac(e, a) {
  return a < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, a))).length ? 1 : 0;
}
function tc(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function wr(e, a, r) {
  if (e.charCodeAt(0) === 40 && !a.match(Yn)) {
    var n = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? wr("n", n, r) : "(" + wr("n", n, -r) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44) return Qi(e, a, r);
  if (a.indexOf("%") !== -1) return Zi(e, a, r);
  if (a.indexOf("E") !== -1) return Xn(a, r);
  if (a.charCodeAt(0) === 36) return "$" + wr(e, a.substr(a.charAt(1) == " " ? 2 : 1), r);
  var t, s, i, c, o = Math.abs(r), f = r < 0 ? "-" : "";
  if (a.match(/^00+$/)) return f + pa(o, a.length);
  if (a.match(/^[#?]+$/))
    return t = pa(r, 0), t === "0" && (t = ""), t.length > a.length ? t : ur(a.substr(0, a.length - t.length)) + t;
  if (s = a.match($n)) return ec(s, o, f);
  if (a.match(/^#+0+$/)) return f + pa(o, a.length - a.indexOf("0"));
  if (s = a.match(Kn))
    return t = H0(r, s[1].length).replace(/^([^\.]+)$/, "$1." + ur(s[1])).replace(/\.$/, "." + ur(s[1])).replace(/\.(\d*)$/, function(p, h) {
      return "." + h + Be("0", ur(
        /*::(*/
        s[1]
      ).length - h.length);
    }), a.indexOf("0.") !== -1 ? t : t.replace(/^0\./, ".");
  if (a = a.replace(/^#+([0.])/, "$1"), s = a.match(/^(0*)\.(#*)$/))
    return f + H0(o, s[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, s[1].length ? "0." : ".");
  if (s = a.match(/^#{1,3},##0(\.?)$/)) return f + jr(pa(o, 0));
  if (s = a.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + wr(e, a, -r) : jr("" + (Math.floor(r) + ac(r, s[1].length))) + "." + Rr(W0(r, s[1].length), s[1].length);
  if (s = a.match(/^#,#*,#0/)) return wr(e, a.replace(/^#,#*,/, ""), r);
  if (s = a.match(/^([0#]+)(\\?-([0#]+))+$/))
    return t = ma(wr(e, a.replace(/[\\-]/g, ""), r)), i = 0, ma(ma(a.replace(/\\/g, "")).replace(/[0#]/g, function(p) {
      return i < t.length ? t.charAt(i++) : p === "0" ? "0" : "";
    }));
  if (a.match(jn))
    return t = wr(e, "##########", r), "(" + t.substr(0, 3) + ") " + t.substr(3, 3) + "-" + t.substr(6);
  var l = "";
  if (s = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(
      /*::String(*/
      s[4].length,
      7
    ), c = _t(o, Math.pow(10, i) - 1, !1), t = "" + f, l = Vr(
      "n",
      /*::String(*/
      s[1],
      c[1]
    ), l.charAt(l.length - 1) == " " && (l = l.substr(0, l.length - 1) + "0"), t += l + /*::String(*/
    s[2] + "/" + /*::String(*/
    s[3], l = gt(c[2], i), l.length < s[4].length && (l = ur(s[4].substr(s[4].length - l.length)) + l), t += l, t;
  if (s = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(Math.max(s[1].length, s[4].length), 7), c = _t(o, Math.pow(10, i) - 1, !0), f + (c[0] || (c[1] ? "" : "0")) + " " + (c[1] ? s0(c[1], i) + s[2] + "/" + s[3] + gt(c[2], i) : Be(" ", 2 * i + 1 + s[2].length + s[3].length));
  if (s = a.match(/^[#0?]+$/))
    return t = pa(r, 0), a.length <= t.length ? t : ur(a.substr(0, a.length - t.length)) + t;
  if (s = a.match(/^([#0?]+)\.([#0]+)$/)) {
    t = "" + r.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1"), i = t.indexOf(".");
    var u = a.indexOf(".") - i, x = a.length - t.length - u;
    return ur(a.substr(0, u) + t + a.substr(a.length - x));
  }
  if (s = a.match(/^00,000\.([#0]*0)$/))
    return i = W0(r, s[1].length), r < 0 ? "-" + wr(e, a, -r) : jr(tc(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(p) {
      return "00," + (p.length < 3 ? Rr(0, 3 - p.length) : "") + p;
    }) + "." + Rr(i, s[1].length);
  switch (a) {
    case "###,##0.00":
      return wr(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var d = jr(pa(o, 0));
      return d !== "0" ? f + d : "";
    case "###,###.00":
      return wr(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return wr(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + a + "|");
}
function nc(e, a, r) {
  for (var n = a.length - 1; a.charCodeAt(n - 1) === 44; ) --n;
  return Vr(e, a.substr(0, n), r / Math.pow(10, 3 * (a.length - n)));
}
function sc(e, a, r) {
  var n = a.replace(zn, ""), t = a.length - n.length;
  return Vr(e, n, r * Math.pow(10, 2 * t)) + Be("%", t);
}
function Jn(e, a) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (a == 0) return "0.0E+0";
    if (a < 0) return "-" + Jn(e, -a);
    var t = e.indexOf(".");
    t === -1 && (t = e.indexOf("E"));
    var s = Math.floor(Math.log(a) * Math.LOG10E) % t;
    if (s < 0 && (s += t), r = (a / Math.pow(10, s)).toPrecision(n + 1 + (t + s) % t), !r.match(/[Ee]/)) {
      var i = Math.floor(Math.log(a) * Math.LOG10E);
      r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (i - r.length + s) : r += "E+" + (i - s), r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(c, o, f, l) {
      return o + f + l.substr(0, (t + s) % t) + "." + l.substr(s) + "E";
    });
  } else r = a.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function Pr(e, a, r) {
  if (e.charCodeAt(0) === 40 && !a.match(Yn)) {
    var n = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Pr("n", n, r) : "(" + Pr("n", n, -r) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44) return nc(e, a, r);
  if (a.indexOf("%") !== -1) return sc(e, a, r);
  if (a.indexOf("E") !== -1) return Jn(a, r);
  if (a.charCodeAt(0) === 36) return "$" + Pr(e, a.substr(a.charAt(1) == " " ? 2 : 1), r);
  var t, s, i, c, o = Math.abs(r), f = r < 0 ? "-" : "";
  if (a.match(/^00+$/)) return f + Rr(o, a.length);
  if (a.match(/^[#?]+$/))
    return t = "" + r, r === 0 && (t = ""), t.length > a.length ? t : ur(a.substr(0, a.length - t.length)) + t;
  if (s = a.match($n)) return rc(s, o, f);
  if (a.match(/^#+0+$/)) return f + Rr(o, a.length - a.indexOf("0"));
  if (s = a.match(Kn))
    return t = ("" + r).replace(/^([^\.]+)$/, "$1." + ur(s[1])).replace(/\.$/, "." + ur(s[1])), t = t.replace(/\.(\d*)$/, function(p, h) {
      return "." + h + Be("0", ur(s[1]).length - h.length);
    }), a.indexOf("0.") !== -1 ? t : t.replace(/^0\./, ".");
  if (a = a.replace(/^#+([0.])/, "$1"), s = a.match(/^(0*)\.(#*)$/))
    return f + ("" + o).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, s[1].length ? "0." : ".");
  if (s = a.match(/^#{1,3},##0(\.?)$/)) return f + jr("" + o);
  if (s = a.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + Pr(e, a, -r) : jr("" + r) + "." + Be("0", s[1].length);
  if (s = a.match(/^#,#*,#0/)) return Pr(e, a.replace(/^#,#*,/, ""), r);
  if (s = a.match(/^([0#]+)(\\?-([0#]+))+$/))
    return t = ma(Pr(e, a.replace(/[\\-]/g, ""), r)), i = 0, ma(ma(a.replace(/\\/g, "")).replace(/[0#]/g, function(p) {
      return i < t.length ? t.charAt(i++) : p === "0" ? "0" : "";
    }));
  if (a.match(jn))
    return t = Pr(e, "##########", r), "(" + t.substr(0, 3) + ") " + t.substr(3, 3) + "-" + t.substr(6);
  var l = "";
  if (s = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(
      /*::String(*/
      s[4].length,
      7
    ), c = _t(o, Math.pow(10, i) - 1, !1), t = "" + f, l = Vr(
      "n",
      /*::String(*/
      s[1],
      c[1]
    ), l.charAt(l.length - 1) == " " && (l = l.substr(0, l.length - 1) + "0"), t += l + /*::String(*/
    s[2] + "/" + /*::String(*/
    s[3], l = gt(c[2], i), l.length < s[4].length && (l = ur(s[4].substr(s[4].length - l.length)) + l), t += l, t;
  if (s = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(Math.max(s[1].length, s[4].length), 7), c = _t(o, Math.pow(10, i) - 1, !0), f + (c[0] || (c[1] ? "" : "0")) + " " + (c[1] ? s0(c[1], i) + s[2] + "/" + s[3] + gt(c[2], i) : Be(" ", 2 * i + 1 + s[2].length + s[3].length));
  if (s = a.match(/^[#0?]+$/))
    return t = "" + r, a.length <= t.length ? t : ur(a.substr(0, a.length - t.length)) + t;
  if (s = a.match(/^([#0]+)\.([#0]+)$/)) {
    t = "" + r.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1"), i = t.indexOf(".");
    var u = a.indexOf(".") - i, x = a.length - t.length - u;
    return ur(a.substr(0, u) + t + a.substr(a.length - x));
  }
  if (s = a.match(/^00,000\.([#0]*0)$/))
    return r < 0 ? "-" + Pr(e, a, -r) : jr("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(p) {
      return "00," + (p.length < 3 ? Rr(0, 3 - p.length) : "") + p;
    }) + "." + Rr(0, s[1].length);
  switch (a) {
    case "###,###":
    case "##,###":
    case "#,###":
      var d = jr("" + o);
      return d !== "0" ? f + d : "";
    default:
      if (a.match(/\.[0#?]*$/)) return Pr(e, a.slice(0, a.lastIndexOf(".")), r) + ur(a.slice(a.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + a + "|");
}
function Vr(e, a, r) {
  return (r | 0) === r ? Pr(e, a, r) : wr(e, a, r);
}
function ic(e) {
  for (var a = [], r = !1, n = 0, t = 0; n < e.length; ++n) switch (
    /*cc=*/
    e.charCodeAt(n)
  ) {
    case 34:
      r = !r;
      break;
    case 95:
    case 42:
    case 92:
      ++n;
      break;
    case 59:
      a[a.length] = e.substr(t, n - t), t = n + 1;
  }
  if (a[a.length] = e.substr(t), r === !0) throw new Error("Format |" + e + "| unterminated string ");
  return a;
}
var qn = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function wa(e) {
  for (var a = 0, r = "", n = ""; a < e.length; )
    switch (r = e.charAt(a)) {
      case "G":
        mt(e, a) && (a += 6), a++;
        break;
      case '"':
        for (
          ;
          /*cc=*/
          e.charCodeAt(++a) !== 34 && a < e.length;
        )
          ;
        ++a;
        break;
      case "\\":
        a += 2;
        break;
      case "_":
        a += 2;
        break;
      case "@":
        ++a;
        break;
      case "B":
      case "b":
        if (e.charAt(a + 1) === "1" || e.charAt(a + 1) === "2") return !0;
      /* falls through */
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      /* falls through */
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "上":
        if (e.substr(a, 3).toUpperCase() === "A/P" || e.substr(a, 5).toUpperCase() === "AM/PM" || e.substr(a, 5).toUpperCase() === "上午/下午") return !0;
        ++a;
        break;
      case "[":
        for (n = r; e.charAt(a++) !== "]" && a < e.length; ) n += e.charAt(a);
        if (n.match(qn)) return !0;
        break;
      case ".":
      /* falls through */
      case "0":
      case "#":
        for (; a < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++a)) > -1 || r == "\\" && e.charAt(a + 1) == "-" && "0#".indexOf(e.charAt(a + 2)) > -1); )
          ;
        break;
      case "?":
        for (; e.charAt(++a) === r; )
          ;
        break;
      case "*":
        ++a, (e.charAt(a) == " " || e.charAt(a) == "*") && ++a;
        break;
      case "(":
      case ")":
        ++a;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; a < e.length && "0123456789".indexOf(e.charAt(++a)) > -1; )
          ;
        break;
      case " ":
        ++a;
        break;
      default:
        ++a;
        break;
    }
  return !1;
}
function cc(e, a, r, n) {
  for (var t = [], s = "", i = 0, c = "", o = "t", f, l, u, x = "H"; i < e.length; )
    switch (c = e.charAt(i)) {
      case "G":
        if (!mt(e, i)) throw new Error("unrecognized character " + c + " in " + e);
        t[t.length] = { t: "G", v: "General" }, i += 7;
        break;
      case '"':
        for (s = ""; (u = e.charCodeAt(++i)) !== 34 && i < e.length; ) s += String.fromCharCode(u);
        t[t.length] = { t: "t", v: s }, ++i;
        break;
      case "\\":
        var d = e.charAt(++i), p = d === "(" || d === ")" ? d : "t";
        t[t.length] = { t: p, v: d }, ++i;
        break;
      case "_":
        t[t.length] = { t: "t", v: " " }, i += 2;
        break;
      case "@":
        t[t.length] = { t: "T", v: a }, ++i;
        break;
      case "B":
      case "b":
        if (e.charAt(i + 1) === "1" || e.charAt(i + 1) === "2") {
          if (f == null && (f = ta(a, r, e.charAt(i + 1) === "2"), f == null))
            return "";
          t[t.length] = { t: "X", v: e.substr(i, 2) }, o = c, i += 2;
          break;
        }
      /* falls through */
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        c = c.toLowerCase();
      /* falls through */
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (a < 0 || f == null && (f = ta(a, r), f == null))
          return "";
        for (s = c; ++i < e.length && e.charAt(i).toLowerCase() === c; ) s += c;
        c === "m" && o.toLowerCase() === "h" && (c = "M"), c === "h" && (c = x), t[t.length] = { t: c, v: s }, o = c;
        break;
      case "A":
      case "a":
      case "上":
        var h = { t: c, v: c };
        if (f == null && (f = ta(a, r)), e.substr(i, 3).toUpperCase() === "A/P" ? (f != null && (h.v = f.H >= 12 ? "P" : "A"), h.t = "T", x = "h", i += 3) : e.substr(i, 5).toUpperCase() === "AM/PM" ? (f != null && (h.v = f.H >= 12 ? "PM" : "AM"), h.t = "T", i += 5, x = "h") : e.substr(i, 5).toUpperCase() === "上午/下午" ? (f != null && (h.v = f.H >= 12 ? "下午" : "上午"), h.t = "T", i += 5, x = "h") : (h.t = "t", ++i), f == null && h.t === "T") return "";
        t[t.length] = h, o = c;
        break;
      case "[":
        for (s = c; e.charAt(i++) !== "]" && i < e.length; ) s += e.charAt(i);
        if (s.slice(-1) !== "]") throw 'unterminated "[" block: |' + s + "|";
        if (s.match(qn)) {
          if (f == null && (f = ta(a, r), f == null))
            return "";
          t[t.length] = { t: "Z", v: s.toLowerCase() }, o = s.charAt(1);
        } else s.indexOf("$") > -1 && (s = (s.match(/\$([^-\[\]]*)/) || [])[1] || "$", wa(e) || (t[t.length] = { t: "t", v: s }));
        break;
      /* Numbers */
      case ".":
        if (f != null) {
          for (s = c; ++i < e.length && (c = e.charAt(i)) === "0"; ) s += c;
          t[t.length] = { t: "s", v: s };
          break;
        }
      /* falls through */
      case "0":
      case "#":
        for (s = c; ++i < e.length && "0#?.,E+-%".indexOf(c = e.charAt(i)) > -1; ) s += c;
        t[t.length] = { t: "n", v: s };
        break;
      case "?":
        for (s = c; e.charAt(++i) === c; ) s += c;
        t[t.length] = { t: c, v: s }, o = c;
        break;
      case "*":
        ++i, (e.charAt(i) == " " || e.charAt(i) == "*") && ++i;
        break;
      // **
      case "(":
      case ")":
        t[t.length] = { t: n === 1 ? "t" : c, v: c }, ++i;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (s = c; i < e.length && "0123456789".indexOf(e.charAt(++i)) > -1; ) s += e.charAt(i);
        t[t.length] = { t: "D", v: s };
        break;
      case " ":
        t[t.length] = { t: c, v: c }, ++i;
        break;
      case "$":
        t[t.length] = { t: "t", v: "$" }, ++i;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(c) === -1) throw new Error("unrecognized character " + c + " in " + e);
        t[t.length] = { t: "t", v: c }, ++i;
        break;
    }
  var g = 0, O = 0, I;
  for (i = t.length - 1, o = "t"; i >= 0; --i)
    switch (t[i].t) {
      case "h":
      case "H":
        t[i].t = x, o = "h", g < 1 && (g = 1);
        break;
      case "s":
        (I = t[i].v.match(/\.0+$/)) && (O = Math.max(O, I[0].length - 1)), g < 3 && (g = 3);
      /* falls through */
      case "d":
      case "y":
      case "M":
      case "e":
        o = t[i].t;
        break;
      case "m":
        o === "s" && (t[i].t = "M", g < 2 && (g = 2));
        break;
      case "X":
        break;
      case "Z":
        g < 1 && t[i].v.match(/[Hh]/) && (g = 1), g < 2 && t[i].v.match(/[Mm]/) && (g = 2), g < 3 && t[i].v.match(/[Ss]/) && (g = 3);
    }
  switch (g) {
    case 0:
      break;
    case 1:
      f.u >= 0.5 && (f.u = 0, ++f.S), f.S >= 60 && (f.S = 0, ++f.M), f.M >= 60 && (f.M = 0, ++f.H);
      break;
    case 2:
      f.u >= 0.5 && (f.u = 0, ++f.S), f.S >= 60 && (f.S = 0, ++f.M);
      break;
  }
  var T = "", U;
  for (i = 0; i < t.length; ++i)
    switch (t[i].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        t[i].v = "", t[i].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        t[i].v = qi(t[i].t.charCodeAt(0), t[i].v, f, O), t[i].t = "t";
        break;
      case "n":
      case "?":
        for (U = i + 1; t[U] != null && ((c = t[U].t) === "?" || c === "D" || (c === " " || c === "t") && t[U + 1] != null && (t[U + 1].t === "?" || t[U + 1].t === "t" && t[U + 1].v === "/") || t[i].t === "(" && (c === " " || c === "n" || c === ")") || c === "t" && (t[U].v === "/" || t[U].v === " " && t[U + 1] != null && t[U + 1].t == "?")); )
          t[i].v += t[U].v, t[U] = { v: "", t: ";" }, ++U;
        T += t[i].v, i = U - 1;
        break;
      case "G":
        t[i].t = "t", t[i].v = ia(a, r);
        break;
    }
  var V = "", B, A;
  if (T.length > 0) {
    T.charCodeAt(0) == 40 ? (B = a < 0 && T.charCodeAt(0) === 45 ? -a : a, A = Vr("n", T, B)) : (B = a < 0 && n > 1 ? -a : a, A = Vr("n", T, B), B < 0 && t[0] && t[0].t == "t" && (A = A.substr(1), t[0].v = "-" + t[0].v)), U = A.length - 1;
    var _ = t.length;
    for (i = 0; i < t.length; ++i) if (t[i] != null && t[i].t != "t" && t[i].v.indexOf(".") > -1) {
      _ = i;
      break;
    }
    var m = t.length;
    if (_ === t.length && A.indexOf("E") === -1) {
      for (i = t.length - 1; i >= 0; --i)
        t[i] == null || "n?".indexOf(t[i].t) === -1 || (U >= t[i].v.length - 1 ? (U -= t[i].v.length, t[i].v = A.substr(U + 1, t[i].v.length)) : U < 0 ? t[i].v = "" : (t[i].v = A.substr(0, U + 1), U = -1), t[i].t = "t", m = i);
      U >= 0 && m < t.length && (t[m].v = A.substr(0, U + 1) + t[m].v);
    } else if (_ !== t.length && A.indexOf("E") === -1) {
      for (U = A.indexOf(".") - 1, i = _; i >= 0; --i)
        if (!(t[i] == null || "n?".indexOf(t[i].t) === -1)) {
          for (l = t[i].v.indexOf(".") > -1 && i === _ ? t[i].v.indexOf(".") - 1 : t[i].v.length - 1, V = t[i].v.substr(l + 1); l >= 0; --l)
            U >= 0 && (t[i].v.charAt(l) === "0" || t[i].v.charAt(l) === "#") && (V = A.charAt(U--) + V);
          t[i].v = V, t[i].t = "t", m = i;
        }
      for (U >= 0 && m < t.length && (t[m].v = A.substr(0, U + 1) + t[m].v), U = A.indexOf(".") + 1, i = _; i < t.length; ++i)
        if (!(t[i] == null || "n?(".indexOf(t[i].t) === -1 && i !== _)) {
          for (l = t[i].v.indexOf(".") > -1 && i === _ ? t[i].v.indexOf(".") + 1 : 0, V = t[i].v.substr(0, l); l < t[i].v.length; ++l)
            U < A.length && (V += A.charAt(U++));
          t[i].v = V, t[i].t = "t", m = i;
        }
    }
  }
  for (i = 0; i < t.length; ++i) t[i] != null && "n?".indexOf(t[i].t) > -1 && (B = n > 1 && a < 0 && i > 0 && t[i - 1].v === "-" ? -a : a, t[i].v = Vr(t[i].t, t[i].v, B), t[i].t = "t");
  var R = "";
  for (i = 0; i !== t.length; ++i) t[i] != null && (R += t[i].v);
  return R;
}
var V0 = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function G0(e, a) {
  if (a == null) return !1;
  var r = parseFloat(a[2]);
  switch (a[1]) {
    case "=":
      if (e == r) return !0;
      break;
    case ">":
      if (e > r) return !0;
      break;
    case "<":
      if (e < r) return !0;
      break;
    case "<>":
      if (e != r) return !0;
      break;
    case ">=":
      if (e >= r) return !0;
      break;
    case "<=":
      if (e <= r) return !0;
      break;
  }
  return !1;
}
function fc(e, a) {
  var r = ic(e), n = r.length, t = r[n - 1].indexOf("@");
  if (n < 4 && t > -1 && --n, r.length > 4) throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof a != "number") return [4, r.length === 4 || t > -1 ? r[r.length - 1] : "@"];
  switch (r.length) {
    case 1:
      r = t > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = t > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = t > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var s = a > 0 ? r[0] : a < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1) return [n, s];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var i = r[0].match(V0), c = r[1].match(V0);
    return G0(a, i) ? [n, r[0]] : G0(a, c) ? [n, r[1]] : [n, r[i != null && c != null ? 2 : 1]];
  }
  return [n, s];
}
function Fr(e, a, r) {
  r == null && (r = {});
  var n = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? n = r.dateNF : n = e;
      break;
    case "number":
      e == 14 && r.dateNF ? n = r.dateNF : n = (r.table != null ? r.table : Ee)[e], n == null && (n = r.table && r.table[U0[e]] || Ee[U0[e]]), n == null && (n = zi[e] || "General");
      break;
  }
  if (mt(n, 0)) return ia(a, r);
  a instanceof Date && (a = Gn(a, r.date1904));
  var t = fc(n, a);
  if (mt(t[1])) return ia(a, r);
  if (a === !0) a = "TRUE";
  else if (a === !1) a = "FALSE";
  else if (a === "" || a == null) return "";
  return cc(t[1], a, r, t[0]);
}
function na(e, a) {
  if (typeof a != "number") {
    a = +a || -1;
    for (var r = 0; r < 392; ++r) {
      if (Ee[r] == null) {
        a < 0 && (a = r);
        continue;
      }
      if (Ee[r] == e) {
        a = r;
        break;
      }
    }
    a < 0 && (a = 391);
  }
  return Ee[a] = e, a;
}
function Zn() {
  Ee = Gi();
}
var oc = {
  5: '"$"#,##0_);\\("$"#,##0\\)',
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  23: "General",
  24: "General",
  25: "General",
  26: "General",
  27: "m/d/yy",
  28: "m/d/yy",
  29: "m/d/yy",
  30: "m/d/yy",
  31: "m/d/yy",
  32: "h:mm:ss",
  33: "h:mm:ss",
  34: "h:mm:ss",
  35: "h:mm:ss",
  36: "m/d/yy",
  41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
  42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
  43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
  44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
  50: "m/d/yy",
  51: "m/d/yy",
  52: "m/d/yy",
  53: "m/d/yy",
  54: "m/d/yy",
  55: "m/d/yy",
  56: "m/d/yy",
  57: "m/d/yy",
  58: "m/d/yy",
  59: "0",
  60: "0.00",
  61: "#,##0",
  62: "#,##0.00",
  63: '"$"#,##0_);\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  67: "0%",
  68: "0.00%",
  69: "# ?/?",
  70: "# ??/??",
  71: "m/d/yy",
  72: "m/d/yy",
  73: "d-mmm-yy",
  74: "d-mmm",
  75: "mmm-yy",
  76: "h:mm",
  77: "h:mm:ss",
  78: "m/d/yy h:mm",
  79: "mm:ss",
  80: "[h]:mm:ss",
  81: "mmss.0"
}, Qn = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function lc(e) {
  var a = typeof e == "number" ? Ee[e] : e;
  return a = a.replace(Qn, "(\\d+)"), new RegExp("^" + a + "$");
}
function uc(e, a, r) {
  var n = -1, t = -1, s = -1, i = -1, c = -1, o = -1;
  (a.match(Qn) || []).forEach(function(u, x) {
    var d = parseInt(r[x + 1], 10);
    switch (u.toLowerCase().charAt(0)) {
      case "y":
        n = d;
        break;
      case "d":
        s = d;
        break;
      case "h":
        i = d;
        break;
      case "s":
        o = d;
        break;
      case "m":
        i >= 0 ? c = d : t = d;
        break;
    }
  }), o >= 0 && c == -1 && t >= 0 && (c = t, t = -1);
  var f = ("" + (n >= 0 ? n : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (t >= 1 ? t : 1)).slice(-2) + "-" + ("00" + (s >= 1 ? s : 1)).slice(-2);
  f.length == 7 && (f = "0" + f), f.length == 8 && (f = "20" + f);
  var l = ("00" + (i >= 0 ? i : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2) + ":" + ("00" + (o >= 0 ? o : 0)).slice(-2);
  return i == -1 && c == -1 && o == -1 ? f : n == -1 && t == -1 && s == -1 ? l : f + "T" + l;
}
var hc = /* @__PURE__ */ (function() {
  var e = {};
  e.version = "1.2.0";
  function a() {
    for (var A = 0, _ = new Array(256), m = 0; m != 256; ++m)
      A = m, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, _[m] = A;
    return typeof Int32Array < "u" ? new Int32Array(_) : _;
  }
  var r = a();
  function n(A) {
    var _ = 0, m = 0, R = 0, P = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (R = 0; R != 256; ++R) P[R] = A[R];
    for (R = 0; R != 256; ++R)
      for (m = A[R], _ = 256 + R; _ < 4096; _ += 256) m = P[_] = m >>> 8 ^ A[m & 255];
    var D = [];
    for (R = 1; R != 16; ++R) D[R - 1] = typeof Int32Array < "u" ? P.subarray(R * 256, R * 256 + 256) : P.slice(R * 256, R * 256 + 256);
    return D;
  }
  var t = n(r), s = t[0], i = t[1], c = t[2], o = t[3], f = t[4], l = t[5], u = t[6], x = t[7], d = t[8], p = t[9], h = t[10], g = t[11], O = t[12], I = t[13], T = t[14];
  function U(A, _) {
    for (var m = _ ^ -1, R = 0, P = A.length; R < P; ) m = m >>> 8 ^ r[(m ^ A.charCodeAt(R++)) & 255];
    return ~m;
  }
  function V(A, _) {
    for (var m = _ ^ -1, R = A.length - 15, P = 0; P < R; ) m = T[A[P++] ^ m & 255] ^ I[A[P++] ^ m >> 8 & 255] ^ O[A[P++] ^ m >> 16 & 255] ^ g[A[P++] ^ m >>> 24] ^ h[A[P++]] ^ p[A[P++]] ^ d[A[P++]] ^ x[A[P++]] ^ u[A[P++]] ^ l[A[P++]] ^ f[A[P++]] ^ o[A[P++]] ^ c[A[P++]] ^ i[A[P++]] ^ s[A[P++]] ^ r[A[P++]];
    for (R += 15; P < R; ) m = m >>> 8 ^ r[(m ^ A[P++]) & 255];
    return ~m;
  }
  function B(A, _) {
    for (var m = _ ^ -1, R = 0, P = A.length, D = 0, X = 0; R < P; )
      D = A.charCodeAt(R++), D < 128 ? m = m >>> 8 ^ r[(m ^ D) & 255] : D < 2048 ? (m = m >>> 8 ^ r[(m ^ (192 | D >> 6 & 31)) & 255], m = m >>> 8 ^ r[(m ^ (128 | D & 63)) & 255]) : D >= 55296 && D < 57344 ? (D = (D & 1023) + 64, X = A.charCodeAt(R++) & 1023, m = m >>> 8 ^ r[(m ^ (240 | D >> 8 & 7)) & 255], m = m >>> 8 ^ r[(m ^ (128 | D >> 2 & 63)) & 255], m = m >>> 8 ^ r[(m ^ (128 | X >> 6 & 15 | (D & 3) << 4)) & 255], m = m >>> 8 ^ r[(m ^ (128 | X & 63)) & 255]) : (m = m >>> 8 ^ r[(m ^ (224 | D >> 12 & 15)) & 255], m = m >>> 8 ^ r[(m ^ (128 | D >> 6 & 63)) & 255], m = m >>> 8 ^ r[(m ^ (128 | D & 63)) & 255]);
    return ~m;
  }
  return e.table = r, e.bstr = U, e.buf = V, e.str = B, e;
})(), Fe = /* @__PURE__ */ (function() {
  var a = {};
  a.version = "1.2.1";
  function r(v, F) {
    for (var E = v.split("/"), k = F.split("/"), S = 0, y = 0, W = Math.min(E.length, k.length); S < W; ++S) {
      if (y = E[S].length - k[S].length) return y;
      if (E[S] != k[S]) return E[S] < k[S] ? -1 : 1;
    }
    return E.length - k.length;
  }
  function n(v) {
    if (v.charAt(v.length - 1) == "/") return v.slice(0, -1).indexOf("/") === -1 ? v : n(v.slice(0, -1));
    var F = v.lastIndexOf("/");
    return F === -1 ? v : v.slice(0, F + 1);
  }
  function t(v) {
    if (v.charAt(v.length - 1) == "/") return t(v.slice(0, -1));
    var F = v.lastIndexOf("/");
    return F === -1 ? v : v.slice(F + 1);
  }
  function s(v, F) {
    typeof F == "string" && (F = new Date(F));
    var E = F.getHours();
    E = E << 6 | F.getMinutes(), E = E << 5 | F.getSeconds() >>> 1, v.write_shift(2, E);
    var k = F.getFullYear() - 1980;
    k = k << 4 | F.getMonth() + 1, k = k << 5 | F.getDate(), v.write_shift(2, k);
  }
  function i(v) {
    var F = v.read_shift(2) & 65535, E = v.read_shift(2) & 65535, k = /* @__PURE__ */ new Date(), S = E & 31;
    E >>>= 5;
    var y = E & 15;
    E >>>= 4, k.setMilliseconds(0), k.setFullYear(E + 1980), k.setMonth(y - 1), k.setDate(S);
    var W = F & 31;
    F >>>= 5;
    var Y = F & 63;
    return F >>>= 6, k.setHours(F), k.setMinutes(Y), k.setSeconds(W << 1), k;
  }
  function c(v) {
    Ze(v, 0);
    for (var F = (
      /*::(*/
      {}
    ), E = 0; v.l <= v.length - 4; ) {
      var k = v.read_shift(2), S = v.read_shift(2), y = v.l + S, W = {};
      k === 21589 && (E = v.read_shift(1), E & 1 && (W.mtime = v.read_shift(4)), S > 5 && (E & 2 && (W.atime = v.read_shift(4)), E & 4 && (W.ctime = v.read_shift(4))), W.mtime && (W.mt = new Date(W.mtime * 1e3))), v.l = y, F[k] = W;
    }
    return F;
  }
  var o;
  function f() {
    return o || (o = {});
  }
  function l(v, F) {
    if (v[0] == 80 && v[1] == 75) return I0(v, F);
    if ((v[0] | 32) == 109 && (v[1] | 32) == 105) return yi(v, F);
    if (v.length < 512) throw new Error("CFB file size " + v.length + " < 512");
    var E = 3, k = 512, S = 0, y = 0, W = 0, Y = 0, H = 0, G = [], z = (
      /*::(*/
      v.slice(0, 512)
    );
    Ze(z, 0);
    var Q = u(z);
    switch (E = Q[0], E) {
      case 3:
        k = 512;
        break;
      case 4:
        k = 4096;
        break;
      case 0:
        if (Q[1] == 0) return I0(v, F);
      /* falls through */
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + E);
    }
    k !== 512 && (z = /*::(*/
    v.slice(0, k), Ze(
      z,
      28
      /* blob.l */
    ));
    var ce = v.slice(0, k);
    x(z, E);
    var ue = z.read_shift(4, "i");
    if (E === 3 && ue !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + ue);
    z.l += 4, W = z.read_shift(4, "i"), z.l += 4, z.chk("00100000", "Mini Stream Cutoff Size: "), Y = z.read_shift(4, "i"), S = z.read_shift(4, "i"), H = z.read_shift(4, "i"), y = z.read_shift(4, "i");
    for (var ae = -1, le = 0; le < 109 && (ae = z.read_shift(4, "i"), !(ae < 0)); ++le)
      G[le] = ae;
    var _e = d(v, k);
    g(H, y, _e, k, G);
    var Le = I(_e, W, G, k);
    Le[W].name = "!Directory", S > 0 && Y !== X && (Le[Y].name = "!MiniFAT"), Le[G[0]].name = "!FAT", Le.fat_addrs = G, Le.ssz = k;
    var Me = {}, tr = [], Ca = [], ya = [];
    T(W, Le, _e, tr, S, Me, Ca, Y), p(Ca, ya, tr), tr.shift();
    var Oa = {
      FileIndex: Ca,
      FullPaths: ya
    };
    return F && F.raw && (Oa.raw = { header: ce, sectors: _e }), Oa;
  }
  function u(v) {
    if (v[v.l] == 80 && v[v.l + 1] == 75) return [0, 0];
    v.chk(se, "Header Signature: "), v.l += 16;
    var F = v.read_shift(2, "u");
    return [v.read_shift(2, "u"), F];
  }
  function x(v, F) {
    var E = 9;
    switch (v.l += 2, E = v.read_shift(2)) {
      case 9:
        if (F != 3) throw new Error("Sector Shift: Expected 9 saw " + E);
        break;
      case 12:
        if (F != 4) throw new Error("Sector Shift: Expected 12 saw " + E);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + E);
    }
    v.chk("0600", "Mini Sector Shift: "), v.chk("000000000000", "Reserved: ");
  }
  function d(v, F) {
    for (var E = Math.ceil(v.length / F) - 1, k = [], S = 1; S < E; ++S) k[S - 1] = v.slice(S * F, (S + 1) * F);
    return k[E - 1] = v.slice(E * F), k;
  }
  function p(v, F, E) {
    for (var k = 0, S = 0, y = 0, W = 0, Y = 0, H = E.length, G = [], z = []; k < H; ++k)
      G[k] = z[k] = k, F[k] = E[k];
    for (; Y < z.length; ++Y)
      k = z[Y], S = v[k].L, y = v[k].R, W = v[k].C, G[k] === k && (S !== -1 && G[S] !== S && (G[k] = G[S]), y !== -1 && G[y] !== y && (G[k] = G[y])), W !== -1 && (G[W] = k), S !== -1 && k != G[k] && (G[S] = G[k], z.lastIndexOf(S) < Y && z.push(S)), y !== -1 && k != G[k] && (G[y] = G[k], z.lastIndexOf(y) < Y && z.push(y));
    for (k = 1; k < H; ++k) G[k] === k && (y !== -1 && G[y] !== y ? G[k] = G[y] : S !== -1 && G[S] !== S && (G[k] = G[S]));
    for (k = 1; k < H; ++k)
      if (v[k].type !== 0) {
        if (Y = k, Y != G[Y]) do
          Y = G[Y], F[k] = F[Y] + "/" + F[k];
        while (Y !== 0 && G[Y] !== -1 && Y != G[Y]);
        G[k] = -1;
      }
    for (F[0] += "/", k = 1; k < H; ++k)
      v[k].type !== 2 && (F[k] += "/");
  }
  function h(v, F, E) {
    for (var k = v.start, S = v.size, y = [], W = k; E && S > 0 && W >= 0; )
      y.push(F.slice(W * D, W * D + D)), S -= D, W = aa(E, W * 4);
    return y.length === 0 ? Ke(0) : Kr(y).slice(0, v.size);
  }
  function g(v, F, E, k, S) {
    var y = X;
    if (v === X) {
      if (F !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if (v !== -1) {
      var W = E[v], Y = (k >>> 2) - 1;
      if (!W) return;
      for (var H = 0; H < Y && (y = aa(W, H * 4)) !== X; ++H)
        S.push(y);
      g(aa(W, k - 4), F - 1, E, k, S);
    }
  }
  function O(v, F, E, k, S) {
    var y = [], W = [];
    S || (S = []);
    var Y = k - 1, H = 0, G = 0;
    for (H = F; H >= 0; ) {
      S[H] = !0, y[y.length] = H, W.push(v[H]);
      var z = E[Math.floor(H * 4 / k)];
      if (G = H * 4 & Y, k < 4 + G) throw new Error("FAT boundary crossed: " + H + " 4 " + k);
      if (!v[z]) break;
      H = aa(v[z], G);
    }
    return { nodes: y, data: Q0([W]) };
  }
  function I(v, F, E, k) {
    var S = v.length, y = [], W = [], Y = [], H = [], G = k - 1, z = 0, Q = 0, ce = 0, ue = 0;
    for (z = 0; z < S; ++z)
      if (Y = [], ce = z + F, ce >= S && (ce -= S), !W[ce]) {
        H = [];
        var ae = [];
        for (Q = ce; Q >= 0; ) {
          ae[Q] = !0, W[Q] = !0, Y[Y.length] = Q, H.push(v[Q]);
          var le = E[Math.floor(Q * 4 / k)];
          if (ue = Q * 4 & G, k < 4 + ue) throw new Error("FAT boundary crossed: " + Q + " 4 " + k);
          if (!v[le] || (Q = aa(v[le], ue), ae[Q])) break;
        }
        y[ce] = { nodes: Y, data: Q0([H]) };
      }
    return y;
  }
  function T(v, F, E, k, S, y, W, Y) {
    for (var H = 0, G = k.length ? 2 : 0, z = F[v].data, Q = 0, ce = 0, ue; Q < z.length; Q += 128) {
      var ae = (
        /*::(*/
        z.slice(Q, Q + 128)
      );
      Ze(ae, 64), ce = ae.read_shift(2), ue = u0(ae, 0, ce - G), k.push(ue);
      var le = {
        name: ue,
        type: ae.read_shift(1),
        color: ae.read_shift(1),
        L: ae.read_shift(4, "i"),
        R: ae.read_shift(4, "i"),
        C: ae.read_shift(4, "i"),
        clsid: ae.read_shift(16),
        state: ae.read_shift(4, "i"),
        start: 0,
        size: 0
      }, _e = ae.read_shift(2) + ae.read_shift(2) + ae.read_shift(2) + ae.read_shift(2);
      _e !== 0 && (le.ct = U(ae, ae.l - 8));
      var Le = ae.read_shift(2) + ae.read_shift(2) + ae.read_shift(2) + ae.read_shift(2);
      Le !== 0 && (le.mt = U(ae, ae.l - 8)), le.start = ae.read_shift(4, "i"), le.size = ae.read_shift(4, "i"), le.size < 0 && le.start < 0 && (le.size = le.type = 0, le.start = X, le.name = ""), le.type === 5 ? (H = le.start, S > 0 && H !== X && (F[H].name = "!StreamData")) : le.size >= 4096 ? (le.storage = "fat", F[le.start] === void 0 && (F[le.start] = O(E, le.start, F.fat_addrs, F.ssz)), F[le.start].name = le.name, le.content = F[le.start].data.slice(0, le.size)) : (le.storage = "minifat", le.size < 0 ? le.size = 0 : H !== X && le.start !== X && F[H] && (le.content = h(le, F[H].data, (F[Y] || {}).data))), le.content && Ze(le.content, 0), y[ue] = le, W.push(le);
    }
  }
  function U(v, F) {
    return new Date((_r(v, F + 4) / 1e7 * Math.pow(2, 32) + _r(v, F) / 1e7 - 11644473600) * 1e3);
  }
  function V(v, F) {
    return f(), l(o.readFileSync(v), F);
  }
  function B(v, F) {
    var E = F && F.type;
    switch (E || Ae && Buffer.isBuffer(v) && (E = "buffer"), E || "base64") {
      case "file":
        return V(v, F);
      case "base64":
        return l(Or(Tr(v)), F);
      case "binary":
        return l(Or(v), F);
    }
    return l(
      /*::typeof blob == 'string' ? new Buffer(blob, 'utf-8') : */
      v,
      F
    );
  }
  function A(v, F) {
    var E = F || {}, k = E.root || "Root Entry";
    if (v.FullPaths || (v.FullPaths = []), v.FileIndex || (v.FileIndex = []), v.FullPaths.length !== v.FileIndex.length) throw new Error("inconsistent CFB structure");
    v.FullPaths.length === 0 && (v.FullPaths[0] = k + "/", v.FileIndex[0] = { name: k, type: 5 }), E.CLSID && (v.FileIndex[0].clsid = E.CLSID), _(v);
  }
  function _(v) {
    var F = "Sh33tJ5";
    if (!Fe.find(v, "/" + F)) {
      var E = Ke(4);
      E[0] = 55, E[1] = E[3] = 50, E[2] = 54, v.FileIndex.push({ name: F, type: 2, content: E, size: 4, L: 69, R: 69, C: 69 }), v.FullPaths.push(v.FullPaths[0] + F), m(v);
    }
  }
  function m(v, F) {
    A(v);
    for (var E = !1, k = !1, S = v.FullPaths.length - 1; S >= 0; --S) {
      var y = v.FileIndex[S];
      switch (y.type) {
        case 0:
          k ? E = !0 : (v.FileIndex.pop(), v.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          k = !0, isNaN(y.R * y.L * y.C) && (E = !0), y.R > -1 && y.L > -1 && y.R == y.L && (E = !0);
          break;
        default:
          E = !0;
          break;
      }
    }
    if (!(!E && !F)) {
      var W = new Date(1987, 1, 19), Y = 0, H = Object.create ? /* @__PURE__ */ Object.create(null) : {}, G = [];
      for (S = 0; S < v.FullPaths.length; ++S)
        H[v.FullPaths[S]] = !0, v.FileIndex[S].type !== 0 && G.push([v.FullPaths[S], v.FileIndex[S]]);
      for (S = 0; S < G.length; ++S) {
        var z = n(G[S][0]);
        k = H[z], k || (G.push([z, {
          name: t(z).replace("/", ""),
          type: 1,
          clsid: fe,
          ct: W,
          mt: W,
          content: null
        }]), H[z] = !0);
      }
      for (G.sort(function(ue, ae) {
        return r(ue[0], ae[0]);
      }), v.FullPaths = [], v.FileIndex = [], S = 0; S < G.length; ++S)
        v.FullPaths[S] = G[S][0], v.FileIndex[S] = G[S][1];
      for (S = 0; S < G.length; ++S) {
        var Q = v.FileIndex[S], ce = v.FullPaths[S];
        if (Q.name = t(ce).replace("/", ""), Q.L = Q.R = Q.C = -(Q.color = 1), Q.size = Q.content ? Q.content.length : 0, Q.start = 0, Q.clsid = Q.clsid || fe, S === 0)
          Q.C = G.length > 1 ? 1 : -1, Q.size = 0, Q.type = 5;
        else if (ce.slice(-1) == "/") {
          for (Y = S + 1; Y < G.length && n(v.FullPaths[Y]) != ce; ++Y) ;
          for (Q.C = Y >= G.length ? -1 : Y, Y = S + 1; Y < G.length && n(v.FullPaths[Y]) != n(ce); ++Y) ;
          Q.R = Y >= G.length ? -1 : Y, Q.type = 1;
        } else
          n(v.FullPaths[S + 1] || "") == n(ce) && (Q.R = S + 1), Q.type = 2;
      }
    }
  }
  function R(v, F) {
    var E = F || {};
    if (E.fileType == "mad") return Oi(v, E);
    if (m(v), E.fileType === "zip")
      return ki(v, E);
    var k = (function(ue) {
      for (var ae = 0, le = 0, _e = 0; _e < ue.FileIndex.length; ++_e) {
        var Le = ue.FileIndex[_e];
        if (Le.content) {
          var Me = Le.content.length;
          Me > 0 && (Me < 4096 ? ae += Me + 63 >> 6 : le += Me + 511 >> 9);
        }
      }
      for (var tr = ue.FullPaths.length + 3 >> 2, Ca = ae + 7 >> 3, ya = ae + 127 >> 7, Oa = Ca + le + tr + ya, ra = Oa + 127 >> 7, Nt = ra <= 109 ? 0 : Math.ceil((ra - 109) / 127); Oa + ra + Nt + 127 >> 7 > ra; ) Nt = ++ra <= 109 ? 0 : Math.ceil((ra - 109) / 127);
      var Ur = [1, Nt, ra, ya, tr, le, ae, 0];
      return ue.FileIndex[0].size = ae << 6, Ur[7] = (ue.FileIndex[0].start = Ur[0] + Ur[1] + Ur[2] + Ur[3] + Ur[4] + Ur[5]) + (Ur[6] + 7 >> 3), Ur;
    })(v), S = Ke(k[7] << 9), y = 0, W = 0;
    {
      for (y = 0; y < 8; ++y) S.write_shift(1, re[y]);
      for (y = 0; y < 8; ++y) S.write_shift(2, 0);
      for (S.write_shift(2, 62), S.write_shift(2, 3), S.write_shift(2, 65534), S.write_shift(2, 9), S.write_shift(2, 6), y = 0; y < 3; ++y) S.write_shift(2, 0);
      for (S.write_shift(4, 0), S.write_shift(4, k[2]), S.write_shift(4, k[0] + k[1] + k[2] + k[3] - 1), S.write_shift(4, 0), S.write_shift(4, 4096), S.write_shift(4, k[3] ? k[0] + k[1] + k[2] - 1 : X), S.write_shift(4, k[3]), S.write_shift(-4, k[1] ? k[0] - 1 : X), S.write_shift(4, k[1]), y = 0; y < 109; ++y) S.write_shift(-4, y < k[2] ? k[1] + y : -1);
    }
    if (k[1])
      for (W = 0; W < k[1]; ++W) {
        for (; y < 236 + W * 127; ++y) S.write_shift(-4, y < k[2] ? k[1] + y : -1);
        S.write_shift(-4, W === k[1] - 1 ? X : W + 1);
      }
    var Y = function(ue) {
      for (W += ue; y < W - 1; ++y) S.write_shift(-4, y + 1);
      ue && (++y, S.write_shift(-4, X));
    };
    for (W = y = 0, W += k[1]; y < W; ++y) S.write_shift(-4, q.DIFSECT);
    for (W += k[2]; y < W; ++y) S.write_shift(-4, q.FATSECT);
    Y(k[3]), Y(k[4]);
    for (var H = 0, G = 0, z = v.FileIndex[0]; H < v.FileIndex.length; ++H)
      z = v.FileIndex[H], z.content && (G = z.content.length, !(G < 4096) && (z.start = W, Y(G + 511 >> 9)));
    for (Y(k[6] + 7 >> 3); S.l & 511; ) S.write_shift(-4, q.ENDOFCHAIN);
    for (W = y = 0, H = 0; H < v.FileIndex.length; ++H)
      z = v.FileIndex[H], z.content && (G = z.content.length, !(!G || G >= 4096) && (z.start = W, Y(G + 63 >> 6)));
    for (; S.l & 511; ) S.write_shift(-4, q.ENDOFCHAIN);
    for (y = 0; y < k[4] << 2; ++y) {
      var Q = v.FullPaths[y];
      if (!Q || Q.length === 0) {
        for (H = 0; H < 17; ++H) S.write_shift(4, 0);
        for (H = 0; H < 3; ++H) S.write_shift(4, -1);
        for (H = 0; H < 12; ++H) S.write_shift(4, 0);
        continue;
      }
      z = v.FileIndex[y], y === 0 && (z.start = z.size ? z.start - 1 : X);
      var ce = y === 0 && E.root || z.name;
      if (G = 2 * (ce.length + 1), S.write_shift(64, ce, "utf16le"), S.write_shift(2, G), S.write_shift(1, z.type), S.write_shift(1, z.color), S.write_shift(-4, z.L), S.write_shift(-4, z.R), S.write_shift(-4, z.C), z.clsid) S.write_shift(16, z.clsid, "hex");
      else for (H = 0; H < 4; ++H) S.write_shift(4, 0);
      S.write_shift(4, z.state || 0), S.write_shift(4, 0), S.write_shift(4, 0), S.write_shift(4, 0), S.write_shift(4, 0), S.write_shift(4, z.start), S.write_shift(4, z.size), S.write_shift(4, 0);
    }
    for (y = 1; y < v.FileIndex.length; ++y)
      if (z = v.FileIndex[y], z.size >= 4096)
        if (S.l = z.start + 1 << 9, Ae && Buffer.isBuffer(z.content))
          z.content.copy(S, S.l, 0, z.size), S.l += z.size + 511 & -512;
        else {
          for (H = 0; H < z.size; ++H) S.write_shift(1, z.content[H]);
          for (; H & 511; ++H) S.write_shift(1, 0);
        }
    for (y = 1; y < v.FileIndex.length; ++y)
      if (z = v.FileIndex[y], z.size > 0 && z.size < 4096)
        if (Ae && Buffer.isBuffer(z.content))
          z.content.copy(S, S.l, 0, z.size), S.l += z.size + 63 & -64;
        else {
          for (H = 0; H < z.size; ++H) S.write_shift(1, z.content[H]);
          for (; H & 63; ++H) S.write_shift(1, 0);
        }
    if (Ae)
      S.l = S.length;
    else
      for (; S.l < S.length; ) S.write_shift(1, 0);
    return S;
  }
  function P(v, F) {
    var E = v.FullPaths.map(function(H) {
      return H.toUpperCase();
    }), k = E.map(function(H) {
      var G = H.split("/");
      return G[G.length - (H.slice(-1) == "/" ? 2 : 1)];
    }), S = !1;
    F.charCodeAt(0) === 47 ? (S = !0, F = E[0].slice(0, -1) + F) : S = F.indexOf("/") !== -1;
    var y = F.toUpperCase(), W = S === !0 ? E.indexOf(y) : k.indexOf(y);
    if (W !== -1) return v.FileIndex[W];
    var Y = !y.match(Ra);
    for (y = y.replace(dr, ""), Y && (y = y.replace(Ra, "!")), W = 0; W < E.length; ++W)
      if ((Y ? E[W].replace(Ra, "!") : E[W]).replace(dr, "") == y || (Y ? k[W].replace(Ra, "!") : k[W]).replace(dr, "") == y) return v.FileIndex[W];
    return null;
  }
  var D = 64, X = -2, se = "d0cf11e0a1b11ae1", re = [208, 207, 17, 224, 161, 177, 26, 225], fe = "00000000000000000000000000000000", q = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: X,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE: se,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: fe,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function ve(v, F, E) {
    f();
    var k = R(v, E);
    o.writeFileSync(F, k);
  }
  function M(v) {
    for (var F = new Array(v.length), E = 0; E < v.length; ++E) F[E] = String.fromCharCode(v[E]);
    return F.join("");
  }
  function he(v, F) {
    var E = R(v, F);
    switch (F && F.type || "buffer") {
      case "file":
        return f(), o.writeFileSync(F.filename, E), E;
      case "binary":
        return typeof E == "string" ? E : M(E);
      case "base64":
        return P0(typeof E == "string" ? E : M(E));
      case "buffer":
        if (Ae) return Buffer.isBuffer(E) ? E : oa(E);
      /* falls through */
      case "array":
        return typeof E == "string" ? Or(E) : E;
    }
    return E;
  }
  var te;
  function w(v) {
    try {
      var F = v.InflateRaw, E = new F();
      if (E._processChunk(new Uint8Array([3, 0]), E._finishFlushFlag), E.bytesRead) te = v;
      else throw new Error("zlib does not expose bytesRead");
    } catch (k) {
      console.error("cannot use native zlib: " + (k.message || k));
    }
  }
  function b(v, F) {
    if (!te) return D0(v, F);
    var E = te.InflateRaw, k = new E(), S = k._processChunk(v.slice(v.l), k._finishFlushFlag);
    return v.l += k.bytesRead, S;
  }
  function L(v) {
    return te ? te.deflateRawSync(v) : ke(v);
  }
  var N = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], K = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], ee = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function Z(v) {
    var F = (v << 1 | v << 11) & 139536 | (v << 5 | v << 15) & 558144;
    return (F >> 16 | F >> 8 | F) & 255;
  }
  for (var J = typeof Uint8Array < "u", j = J ? new Uint8Array(256) : [], ie = 0; ie < 256; ++ie) j[ie] = Z(ie);
  function C(v, F) {
    var E = j[v & 255];
    return F <= 8 ? E >>> 8 - F : (E = E << 8 | j[v >> 8 & 255], F <= 16 ? E >>> 16 - F : (E = E << 8 | j[v >> 16 & 255], E >>> 24 - F));
  }
  function Te(v, F) {
    var E = F & 7, k = F >>> 3;
    return (v[k] | (E <= 6 ? 0 : v[k + 1] << 8)) >>> E & 3;
  }
  function de(v, F) {
    var E = F & 7, k = F >>> 3;
    return (v[k] | (E <= 5 ? 0 : v[k + 1] << 8)) >>> E & 7;
  }
  function pe(v, F) {
    var E = F & 7, k = F >>> 3;
    return (v[k] | (E <= 4 ? 0 : v[k + 1] << 8)) >>> E & 15;
  }
  function oe(v, F) {
    var E = F & 7, k = F >>> 3;
    return (v[k] | (E <= 3 ? 0 : v[k + 1] << 8)) >>> E & 31;
  }
  function ne(v, F) {
    var E = F & 7, k = F >>> 3;
    return (v[k] | (E <= 1 ? 0 : v[k + 1] << 8)) >>> E & 127;
  }
  function xe(v, F, E) {
    var k = F & 7, S = F >>> 3, y = (1 << E) - 1, W = v[S] >>> k;
    return E < 8 - k || (W |= v[S + 1] << 8 - k, E < 16 - k) || (W |= v[S + 2] << 16 - k, E < 24 - k) || (W |= v[S + 3] << 24 - k), W & y;
  }
  function we(v, F, E) {
    var k = F & 7, S = F >>> 3;
    return k <= 5 ? v[S] |= (E & 7) << k : (v[S] |= E << k & 255, v[S + 1] = (E & 7) >> 8 - k), F + 3;
  }
  function $e(v, F, E) {
    var k = F & 7, S = F >>> 3;
    return E = (E & 1) << k, v[S] |= E, F + 1;
  }
  function rr(v, F, E) {
    var k = F & 7, S = F >>> 3;
    return E <<= k, v[S] |= E & 255, E >>>= 8, v[S + 1] = E, F + 8;
  }
  function ar(v, F, E) {
    var k = F & 7, S = F >>> 3;
    return E <<= k, v[S] |= E & 255, E >>>= 8, v[S + 1] = E & 255, v[S + 2] = E >>> 8, F + 16;
  }
  function vr(v, F) {
    var E = v.length, k = 2 * E > F ? 2 * E : F + 5, S = 0;
    if (E >= F) return v;
    if (Ae) {
      var y = L0(k);
      if (v.copy) v.copy(y);
      else for (; S < v.length; ++S) y[S] = v[S];
      return y;
    } else if (J) {
      var W = new Uint8Array(k);
      if (W.set) W.set(v);
      else for (; S < E; ++S) W[S] = v[S];
      return W;
    }
    return v.length = k, v;
  }
  function ye(v) {
    for (var F = new Array(v), E = 0; E < v; ++E) F[E] = 0;
    return F;
  }
  function We(v, F, E) {
    var k = 1, S = 0, y = 0, W = 0, Y = 0, H = v.length, G = J ? new Uint16Array(32) : ye(32);
    for (y = 0; y < 32; ++y) G[y] = 0;
    for (y = H; y < E; ++y) v[y] = 0;
    H = v.length;
    var z = J ? new Uint16Array(H) : ye(H);
    for (y = 0; y < H; ++y)
      G[S = v[y]]++, k < S && (k = S), z[y] = 0;
    for (G[0] = 0, y = 1; y <= k; ++y) G[y + 16] = Y = Y + G[y - 1] << 1;
    for (y = 0; y < H; ++y)
      Y = v[y], Y != 0 && (z[y] = G[Y + 16]++);
    var Q = 0;
    for (y = 0; y < H; ++y)
      if (Q = v[y], Q != 0)
        for (Y = C(z[y], k) >> k - Q, W = (1 << k + 4 - Q) - 1; W >= 0; --W)
          F[Y | W << Q] = Q & 15 | y << 4;
    return k;
  }
  var De = J ? new Uint16Array(512) : ye(512), Ve = J ? new Uint16Array(32) : ye(32);
  if (!J) {
    for (var Ie = 0; Ie < 512; ++Ie) De[Ie] = 0;
    for (Ie = 0; Ie < 32; ++Ie) Ve[Ie] = 0;
  }
  (function() {
    for (var v = [], F = 0; F < 32; F++) v.push(5);
    We(v, Ve, 32);
    var E = [];
    for (F = 0; F <= 143; F++) E.push(8);
    for (; F <= 255; F++) E.push(9);
    for (; F <= 279; F++) E.push(7);
    for (; F <= 287; F++) E.push(8);
    We(E, De, 288);
  })();
  var gr = /* @__PURE__ */ (function() {
    for (var F = J ? new Uint8Array(32768) : [], E = 0, k = 0; E < ee.length - 1; ++E)
      for (; k < ee[E + 1]; ++k) F[k] = E;
    for (; k < 32768; ++k) F[k] = 29;
    var S = J ? new Uint8Array(259) : [];
    for (E = 0, k = 0; E < K.length - 1; ++E)
      for (; k < K[E + 1]; ++k) S[k] = E;
    function y(Y, H) {
      for (var G = 0; G < Y.length; ) {
        var z = Math.min(65535, Y.length - G), Q = G + z == Y.length;
        for (H.write_shift(1, +Q), H.write_shift(2, z), H.write_shift(2, ~z & 65535); z-- > 0; ) H[H.l++] = Y[G++];
      }
      return H.l;
    }
    function W(Y, H) {
      for (var G = 0, z = 0, Q = J ? new Uint16Array(32768) : []; z < Y.length; ) {
        var ce = (
          /* data.length - boff; */
          Math.min(65535, Y.length - z)
        );
        if (ce < 10) {
          for (G = we(H, G, +(z + ce == Y.length)), G & 7 && (G += 8 - (G & 7)), H.l = G / 8 | 0, H.write_shift(2, ce), H.write_shift(2, ~ce & 65535); ce-- > 0; ) H[H.l++] = Y[z++];
          G = H.l * 8;
          continue;
        }
        G = we(H, G, +(z + ce == Y.length) + 2);
        for (var ue = 0; ce-- > 0; ) {
          var ae = Y[z];
          ue = (ue << 5 ^ ae) & 32767;
          var le = -1, _e = 0;
          if ((le = Q[ue]) && (le |= z & -32768, le > z && (le -= 32768), le < z))
            for (; Y[le + _e] == Y[z + _e] && _e < 250; ) ++_e;
          if (_e > 2) {
            ae = S[_e], ae <= 22 ? G = rr(H, G, j[ae + 1] >> 1) - 1 : (rr(H, G, 3), G += 5, rr(H, G, j[ae - 23] >> 5), G += 3);
            var Le = ae < 8 ? 0 : ae - 4 >> 2;
            Le > 0 && (ar(H, G, _e - K[ae]), G += Le), ae = F[z - le], G = rr(H, G, j[ae] >> 3), G -= 3;
            var Me = ae < 4 ? 0 : ae - 2 >> 1;
            Me > 0 && (ar(H, G, z - le - ee[ae]), G += Me);
            for (var tr = 0; tr < _e; ++tr)
              Q[ue] = z & 32767, ue = (ue << 5 ^ Y[z]) & 32767, ++z;
            ce -= _e - 1;
          } else
            ae <= 143 ? ae = ae + 48 : G = $e(H, G, 1), G = rr(H, G, j[ae]), Q[ue] = z & 32767, ++z;
        }
        G = rr(H, G, 0) - 1;
      }
      return H.l = (G + 7) / 8 | 0, H.l;
    }
    return function(H, G) {
      return H.length < 8 ? y(H, G) : W(H, G);
    };
  })();
  function ke(v) {
    var F = Ke(50 + Math.floor(v.length * 1.1)), E = gr(v, F);
    return F.slice(0, E);
  }
  var Oe = J ? new Uint16Array(32768) : ye(32768), Pe = J ? new Uint16Array(32768) : ye(32768), Ne = J ? new Uint16Array(128) : ye(128), Nr = 1, O0 = 1;
  function _i(v, F) {
    var E = oe(v, F) + 257;
    F += 5;
    var k = oe(v, F) + 1;
    F += 5;
    var S = pe(v, F) + 4;
    F += 4;
    for (var y = 0, W = J ? new Uint8Array(19) : ye(19), Y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], H = 1, G = J ? new Uint8Array(8) : ye(8), z = J ? new Uint8Array(8) : ye(8), Q = W.length, ce = 0; ce < S; ++ce)
      W[N[ce]] = y = de(v, F), H < y && (H = y), G[y]++, F += 3;
    var ue = 0;
    for (G[0] = 0, ce = 1; ce <= H; ++ce) z[ce] = ue = ue + G[ce - 1] << 1;
    for (ce = 0; ce < Q; ++ce) (ue = W[ce]) != 0 && (Y[ce] = z[ue]++);
    var ae = 0;
    for (ce = 0; ce < Q; ++ce)
      if (ae = W[ce], ae != 0) {
        ue = j[Y[ce]] >> 8 - ae;
        for (var le = (1 << 7 - ae) - 1; le >= 0; --le) Ne[ue | le << ae] = ae & 7 | ce << 3;
      }
    var _e = [];
    for (H = 1; _e.length < E + k; )
      switch (ue = Ne[ne(v, F)], F += ue & 7, ue >>>= 3) {
        case 16:
          for (y = 3 + Te(v, F), F += 2, ue = _e[_e.length - 1]; y-- > 0; ) _e.push(ue);
          break;
        case 17:
          for (y = 3 + de(v, F), F += 3; y-- > 0; ) _e.push(0);
          break;
        case 18:
          for (y = 11 + ne(v, F), F += 7; y-- > 0; ) _e.push(0);
          break;
        default:
          _e.push(ue), H < ue && (H = ue);
          break;
      }
    var Le = _e.slice(0, E), Me = _e.slice(E);
    for (ce = E; ce < 286; ++ce) Le[ce] = 0;
    for (ce = k; ce < 30; ++ce) Me[ce] = 0;
    return Nr = We(Le, Oe, 286), O0 = We(Me, Pe, 30), F;
  }
  function Ei(v, F) {
    if (v[0] == 3 && !(v[1] & 3))
      return [qr(F), 2];
    for (var E = 0, k = 0, S = L0(F || 1 << 18), y = 0, W = S.length >>> 0, Y = 0, H = 0; (k & 1) == 0; ) {
      if (k = de(v, E), E += 3, k >>> 1)
        k >> 1 == 1 ? (Y = 9, H = 5) : (E = _i(v, E), Y = Nr, H = O0);
      else {
        E & 7 && (E += 8 - (E & 7));
        var G = v[E >>> 3] | v[(E >>> 3) + 1] << 8;
        if (E += 32, G > 0)
          for (!F && W < y + G && (S = vr(S, y + G), W = S.length); G-- > 0; )
            S[y++] = v[E >>> 3], E += 8;
        continue;
      }
      for (; ; ) {
        !F && W < y + 32767 && (S = vr(S, y + 32767), W = S.length);
        var z = xe(v, E, Y), Q = k >>> 1 == 1 ? De[z] : Oe[z];
        if (E += Q & 15, Q >>>= 4, (Q >>> 8 & 255) === 0) S[y++] = Q;
        else {
          if (Q == 256) break;
          Q -= 257;
          var ce = Q < 8 ? 0 : Q - 4 >> 2;
          ce > 5 && (ce = 0);
          var ue = y + K[Q];
          ce > 0 && (ue += xe(v, E, ce), E += ce), z = xe(v, E, H), Q = k >>> 1 == 1 ? Ve[z] : Pe[z], E += Q & 15, Q >>>= 4;
          var ae = Q < 4 ? 0 : Q - 2 >> 1, le = ee[Q];
          for (ae > 0 && (le += xe(v, E, ae), E += ae), !F && W < ue && (S = vr(S, ue + 100), W = S.length); y < ue; )
            S[y] = S[y - le], ++y;
        }
      }
    }
    return F ? [S, E + 7 >>> 3] : [S.slice(0, y), E + 7 >>> 3];
  }
  function D0(v, F) {
    var E = v.slice(v.l || 0), k = Ei(E, F);
    return v.l += k[1], k[0];
  }
  function R0(v, F) {
    if (v)
      typeof console < "u" && console.error(F);
    else throw new Error(F);
  }
  function I0(v, F) {
    var E = (
      /*::(*/
      v
    );
    Ze(E, 0);
    var k = [], S = [], y = {
      FileIndex: k,
      FullPaths: S
    };
    A(y, { root: F.root });
    for (var W = E.length - 4; (E[W] != 80 || E[W + 1] != 75 || E[W + 2] != 5 || E[W + 3] != 6) && W >= 0; ) --W;
    E.l = W + 4, E.l += 4;
    var Y = E.read_shift(2);
    E.l += 6;
    var H = E.read_shift(4);
    for (E.l = H, W = 0; W < Y; ++W) {
      E.l += 20;
      var G = E.read_shift(4), z = E.read_shift(4), Q = E.read_shift(2), ce = E.read_shift(2), ue = E.read_shift(2);
      E.l += 8;
      var ae = E.read_shift(4), le = c(
        /*::(*/
        E.slice(E.l + Q, E.l + Q + ce)
        /*:: :any)*/
      );
      E.l += Q + ce + ue;
      var _e = E.l;
      E.l = ae + 4, Ti(E, G, z, y, le), E.l = _e;
    }
    return y;
  }
  function Ti(v, F, E, k, S) {
    v.l += 2;
    var y = v.read_shift(2), W = v.read_shift(2), Y = i(v);
    if (y & 8257) throw new Error("Unsupported ZIP encryption");
    for (var H = v.read_shift(4), G = v.read_shift(4), z = v.read_shift(4), Q = v.read_shift(2), ce = v.read_shift(2), ue = "", ae = 0; ae < Q; ++ae) ue += String.fromCharCode(v[v.l++]);
    if (ce) {
      var le = c(
        /*::(*/
        v.slice(v.l, v.l + ce)
        /*:: :any)*/
      );
      (le[21589] || {}).mt && (Y = le[21589].mt), ((S || {})[21589] || {}).mt && (Y = S[21589].mt);
    }
    v.l += ce;
    var _e = v.slice(v.l, v.l + G);
    switch (W) {
      case 8:
        _e = b(v, z);
        break;
      case 0:
        break;
      // TODO: scan for magic number
      default:
        throw new Error("Unsupported ZIP Compression method " + W);
    }
    var Le = !1;
    y & 8 && (H = v.read_shift(4), H == 134695760 && (H = v.read_shift(4), Le = !0), G = v.read_shift(4), z = v.read_shift(4)), G != F && R0(Le, "Bad compressed size: " + F + " != " + G), z != E && R0(Le, "Bad uncompressed size: " + E + " != " + z), It(k, ue, _e, { unsafe: !0, mt: Y });
  }
  function ki(v, F) {
    var E = F || {}, k = [], S = [], y = Ke(1), W = E.compression ? 8 : 0, Y = 0, H = 0, G = 0, z = 0, Q = 0, ce = v.FullPaths[0], ue = ce, ae = v.FileIndex[0], le = [], _e = 0;
    for (H = 1; H < v.FullPaths.length; ++H)
      if (ue = v.FullPaths[H].slice(ce.length), ae = v.FileIndex[H], !(!ae.size || !ae.content || ue == "Sh33tJ5")) {
        var Le = z, Me = Ke(ue.length);
        for (G = 0; G < ue.length; ++G) Me.write_shift(1, ue.charCodeAt(G) & 127);
        Me = Me.slice(0, Me.l), le[Q] = hc.buf(
          /*::((*/
          ae.content,
          0
        );
        var tr = ae.content;
        W == 8 && (tr = L(tr)), y = Ke(30), y.write_shift(4, 67324752), y.write_shift(2, 20), y.write_shift(2, Y), y.write_shift(2, W), ae.mt ? s(y, ae.mt) : y.write_shift(4, 0), y.write_shift(-4, le[Q]), y.write_shift(4, tr.length), y.write_shift(
          4,
          /*::(*/
          ae.content.length
        ), y.write_shift(2, Me.length), y.write_shift(2, 0), z += y.length, k.push(y), z += Me.length, k.push(Me), z += tr.length, k.push(tr), y = Ke(46), y.write_shift(4, 33639248), y.write_shift(2, 0), y.write_shift(2, 20), y.write_shift(2, Y), y.write_shift(2, W), y.write_shift(4, 0), y.write_shift(-4, le[Q]), y.write_shift(4, tr.length), y.write_shift(
          4,
          /*::(*/
          ae.content.length
        ), y.write_shift(2, Me.length), y.write_shift(2, 0), y.write_shift(2, 0), y.write_shift(2, 0), y.write_shift(2, 0), y.write_shift(4, 0), y.write_shift(4, Le), _e += y.l, S.push(y), _e += Me.length, S.push(Me), ++Q;
      }
    return y = Ke(22), y.write_shift(4, 101010256), y.write_shift(2, 0), y.write_shift(2, 0), y.write_shift(2, Q), y.write_shift(2, Q), y.write_shift(4, _e), y.write_shift(4, z), y.write_shift(2, 0), Kr([Kr(k), Kr(S), y]);
  }
  var st = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function wi(v, F) {
    if (v.ctype) return v.ctype;
    var E = v.name || "", k = E.match(/\.([^\.]+)$/);
    return k && st[k[1]] || F && (k = (E = F).match(/[\.\\]([^\.\\])+$/), k && st[k[1]]) ? st[k[1]] : "application/octet-stream";
  }
  function Ai(v) {
    for (var F = P0(v), E = [], k = 0; k < F.length; k += 76) E.push(F.slice(k, k + 76));
    return E.join(`\r
`) + `\r
`;
  }
  function Fi(v) {
    var F = v.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(G) {
      var z = G.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (z.length == 1 ? "0" + z : z);
    });
    F = F.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), F.charAt(0) == `
` && (F = "=0D" + F.slice(1)), F = F.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var E = [], k = F.split(`\r
`), S = 0; S < k.length; ++S) {
      var y = k[S];
      if (y.length == 0) {
        E.push("");
        continue;
      }
      for (var W = 0; W < y.length; ) {
        var Y = 76, H = y.slice(W, W + Y);
        H.charAt(Y - 1) == "=" ? Y-- : H.charAt(Y - 2) == "=" ? Y -= 2 : H.charAt(Y - 3) == "=" && (Y -= 3), H = y.slice(W, W + Y), W += Y, W < y.length && (H += "="), E.push(H);
      }
    }
    return E.join(`\r
`);
  }
  function Si(v) {
    for (var F = [], E = 0; E < v.length; ++E) {
      for (var k = v[E]; E <= v.length && k.charAt(k.length - 1) == "="; ) k = k.slice(0, k.length - 1) + v[++E];
      F.push(k);
    }
    for (var S = 0; S < F.length; ++S) F[S] = F[S].replace(/[=][0-9A-Fa-f]{2}/g, function(y) {
      return String.fromCharCode(parseInt(y.slice(1), 16));
    });
    return Or(F.join(`\r
`));
  }
  function Ci(v, F, E) {
    for (var k = "", S = "", y = "", W, Y = 0; Y < 10; ++Y) {
      var H = F[Y];
      if (!H || H.match(/^\s*$/)) break;
      var G = H.match(/^(.*?):\s*([^\s].*)$/);
      if (G) switch (G[1].toLowerCase()) {
        case "content-location":
          k = G[2].trim();
          break;
        case "content-type":
          y = G[2].trim();
          break;
        case "content-transfer-encoding":
          S = G[2].trim();
          break;
      }
    }
    switch (++Y, S.toLowerCase()) {
      case "base64":
        W = Or(Tr(F.slice(Y).join("")));
        break;
      case "quoted-printable":
        W = Si(F.slice(Y));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + S);
    }
    var z = It(v, k.slice(E.length), W, { unsafe: !0 });
    y && (z.ctype = y);
  }
  function yi(v, F) {
    if (M(v.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
    var E = F && F.root || "", k = (Ae && Buffer.isBuffer(v) ? v.toString("binary") : M(v)).split(`\r
`), S = 0, y = "";
    for (S = 0; S < k.length; ++S)
      if (y = k[S], !!/^Content-Location:/i.test(y) && (y = y.slice(y.indexOf("file")), E || (E = y.slice(0, y.lastIndexOf("/") + 1)), y.slice(0, E.length) != E))
        for (; E.length > 0 && (E = E.slice(0, E.length - 1), E = E.slice(0, E.lastIndexOf("/") + 1), y.slice(0, E.length) != E); )
          ;
    var W = (k[1] || "").match(/boundary="(.*?)"/);
    if (!W) throw new Error("MAD cannot find boundary");
    var Y = "--" + (W[1] || ""), H = [], G = [], z = {
      FileIndex: H,
      FullPaths: G
    };
    A(z);
    var Q, ce = 0;
    for (S = 0; S < k.length; ++S) {
      var ue = k[S];
      ue !== Y && ue !== Y + "--" || (ce++ && Ci(z, k.slice(Q, S), E), Q = S);
    }
    return z;
  }
  function Oi(v, F) {
    var E = F || {}, k = E.boundary || "SheetJS";
    k = "------=" + k;
    for (var S = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + k.slice(2) + '"',
      "",
      "",
      ""
    ], y = v.FullPaths[0], W = y, Y = v.FileIndex[0], H = 1; H < v.FullPaths.length; ++H)
      if (W = v.FullPaths[H].slice(y.length), Y = v.FileIndex[H], !(!Y.size || !Y.content || W == "Sh33tJ5")) {
        W = W.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(_e) {
          return "_x" + _e.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function(_e) {
          return "_u" + _e.charCodeAt(0).toString(16) + "_";
        });
        for (var G = Y.content, z = Ae && Buffer.isBuffer(G) ? G.toString("binary") : M(G), Q = 0, ce = Math.min(1024, z.length), ue = 0, ae = 0; ae <= ce; ++ae) (ue = z.charCodeAt(ae)) >= 32 && ue < 128 && ++Q;
        var le = Q >= ce * 4 / 5;
        S.push(k), S.push("Content-Location: " + (E.root || "file:///C:/SheetJS/") + W), S.push("Content-Transfer-Encoding: " + (le ? "quoted-printable" : "base64")), S.push("Content-Type: " + wi(Y, W)), S.push(""), S.push(le ? Fi(z) : Ai(z));
      }
    return S.push(k + `--\r
`), S.join(`\r
`);
  }
  function Di(v) {
    var F = {};
    return A(F, v), F;
  }
  function It(v, F, E, k) {
    var S = k && k.unsafe;
    S || A(v);
    var y = !S && Fe.find(v, F);
    if (!y) {
      var W = v.FullPaths[0];
      F.slice(0, W.length) == W ? W = F : (W.slice(-1) != "/" && (W += "/"), W = (W + F).replace("//", "/")), y = { name: t(F), type: 2 }, v.FileIndex.push(y), v.FullPaths.push(W), S || Fe.utils.cfb_gc(v);
    }
    return y.content = E, y.size = E ? E.length : 0, k && (k.CLSID && (y.clsid = k.CLSID), k.mt && (y.mt = k.mt), k.ct && (y.ct = k.ct)), y;
  }
  function Ri(v, F) {
    A(v);
    var E = Fe.find(v, F);
    if (E) {
      for (var k = 0; k < v.FileIndex.length; ++k) if (v.FileIndex[k] == E)
        return v.FileIndex.splice(k, 1), v.FullPaths.splice(k, 1), !0;
    }
    return !1;
  }
  function Ii(v, F, E) {
    A(v);
    var k = Fe.find(v, F);
    if (k) {
      for (var S = 0; S < v.FileIndex.length; ++S) if (v.FileIndex[S] == k)
        return v.FileIndex[S].name = t(E), v.FullPaths[S] = E, !0;
    }
    return !1;
  }
  function Ni(v) {
    m(v, !0);
  }
  return a.find = P, a.read = B, a.parse = l, a.write = he, a.writeFile = ve, a.utils = {
    cfb_new: Di,
    cfb_add: It,
    cfb_del: Ri,
    cfb_mov: Ii,
    cfb_gc: Ni,
    ReadShift: ba,
    CheckField: Ts,
    prep_blob: Ze,
    bconcat: Kr,
    use_zlib: w,
    _deflateRaw: ke,
    _inflateRaw: D0,
    consts: q
  }, a;
})();
function xc(e) {
  if (typeof Deno < "u") return Deno.readFileSync(e);
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
    var a = File(e);
    a.open("r"), a.encoding = "binary";
    var r = a.read();
    return a.close(), r;
  } catch (n) {
    if (!n.message || !n.message.match(/onstruct/)) throw n;
  }
  throw new Error("Cannot access file " + e);
}
function Lr(e) {
  for (var a = Object.keys(e), r = [], n = 0; n < a.length; ++n) Object.prototype.hasOwnProperty.call(e, a[n]) && r.push(a[n]);
  return r;
}
function c0(e) {
  for (var a = [], r = Lr(e), n = 0; n !== r.length; ++n) a[e[r[n]]] = r[n];
  return a;
}
var Et = /* @__PURE__ */ new Date(1899, 11, 30, 0, 0, 0);
function pr(e, a) {
  var r = /* @__PURE__ */ e.getTime(), n = /* @__PURE__ */ Et.getTime() + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ Et.getTimezoneOffset()) * 6e4;
  return (r - n) / (1440 * 60 * 1e3);
}
var es = /* @__PURE__ */ new Date(), dc = /* @__PURE__ */ Et.getTime() + (/* @__PURE__ */ es.getTimezoneOffset() - /* @__PURE__ */ Et.getTimezoneOffset()) * 6e4, z0 = /* @__PURE__ */ es.getTimezoneOffset();
function yt(e) {
  var a = /* @__PURE__ */ new Date();
  return a.setTime(e * 24 * 60 * 60 * 1e3 + dc), a.getTimezoneOffset() !== z0 && a.setTime(a.getTime() + (a.getTimezoneOffset() - z0) * 6e4), a;
}
function pc(e) {
  var a = 0, r = 0, n = !1, t = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
  if (!t) throw new Error("|" + e + "| is not an ISO8601 Duration");
  for (var s = 1; s != t.length; ++s)
    if (t[s]) {
      switch (r = 1, s > 3 && (n = !0), t[s].slice(t[s].length - 1)) {
        case "Y":
          throw new Error("Unsupported ISO Duration Field: " + t[s].slice(t[s].length - 1));
        case "D":
          r *= 24;
        /* falls through */
        case "H":
          r *= 60;
        /* falls through */
        case "M":
          if (n) r *= 60;
          else throw new Error("Unsupported ISO Duration Field: M");
      }
      a += r * parseInt(t[s], 10);
    }
  return a;
}
var X0 = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z"), rs = /* @__PURE__ */ isNaN(/* @__PURE__ */ X0.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : X0, vc = /* @__PURE__ */ rs.getFullYear() == 2017;
function qe(e, a) {
  var r = new Date(e);
  if (vc)
    return a > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : a < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r;
  if (e instanceof Date) return e;
  if (rs.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var n = r.getFullYear();
    return e.indexOf("" + n) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var t = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"], s = new Date(+t[0], +t[1] - 1, +t[2], +t[3] || 0, +t[4] || 0, +t[5] || 0);
  return e.indexOf("Z") > -1 && (s = new Date(s.getTime() - s.getTimezoneOffset() * 60 * 1e3)), s;
}
function ca(e, a) {
  if (Ae && Buffer.isBuffer(e)) {
    if (a) {
      if (e[0] == 255 && e[1] == 254) return Na(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255) return Na(Wn(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u") try {
    if (a) {
      if (e[0] == 255 && e[1] == 254) return Na(new TextDecoder("utf-16le").decode(e.slice(2)));
      if (e[0] == 254 && e[1] == 255) return Na(new TextDecoder("utf-16be").decode(e.slice(2)));
    }
    var r = {
      "€": "",
      "‚": "",
      ƒ: "",
      "„": "",
      "…": "",
      "†": "",
      "‡": "",
      "ˆ": "",
      "‰": "",
      Š: "",
      "‹": "",
      Œ: "",
      Ž: "",
      "‘": "",
      "’": "",
      "“": "",
      "”": "",
      "•": "",
      "–": "",
      "—": "",
      "˜": "",
      "™": "",
      š: "",
      "›": "",
      œ: "",
      ž: "",
      Ÿ: ""
    };
    return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(s) {
      return r[s] || s;
    });
  } catch {
  }
  for (var n = [], t = 0; t != e.length; ++t) n.push(String.fromCharCode(e[t]));
  return n.join("");
}
function Qe(e) {
  if (typeof JSON < "u" && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (a[r] = Qe(e[r]));
  return a;
}
function Be(e, a) {
  for (var r = ""; r.length < a; ) r += e;
  return r;
}
function Ir(e) {
  var a = Number(e);
  if (!isNaN(a)) return isFinite(a) ? a : NaN;
  if (!/\d/.test(e)) return a;
  var r = 1, n = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return r *= 100, "";
  });
  return !isNaN(a = Number(n)) || (n = n.replace(/[(](.*)[)]/, function(t, s) {
    return r = -r, s;
  }), !isNaN(a = Number(n))) ? a / r : a;
}
var gc = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function Ta(e) {
  var a = new Date(e), r = /* @__PURE__ */ new Date(NaN), n = a.getYear(), t = a.getMonth(), s = a.getDate();
  if (isNaN(s)) return r;
  var i = e.toLowerCase();
  if (i.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (i = i.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), i.length > 3 && gc.indexOf(i) == -1) return r;
  } else if (i.match(/[a-z]/)) return r;
  return n < 0 || n > 8099 ? r : (t > 0 || s > 1) && n != 101 ? a : e.match(/[^-0-9:,\/\\]/) ? r : a;
}
var mc = /* @__PURE__ */ (function() {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function(r, n, t) {
    if (e || typeof n == "string") return r.split(n);
    for (var s = r.split(n), i = [s[0]], c = 1; c < s.length; ++c)
      i.push(t), i.push(s[c]);
    return i;
  };
})();
function as(e) {
  return e ? e.content && e.type ? ca(e.content, !0) : e.data ? Da(e.data) : e.asNodeBuffer && Ae ? Da(e.asNodeBuffer().toString("binary")) : e.asBinary ? Da(e.asBinary()) : e._data && e._data.getContent ? Da(ca(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function ts(e) {
  if (!e) return null;
  if (e.data) return N0(e.data);
  if (e.asNodeBuffer && Ae) return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var a = e._data.getContent();
    return typeof a == "string" ? N0(a) : Array.prototype.slice.call(a);
  }
  return e.content && e.type ? e.content : null;
}
function _c(e) {
  return e && e.name.slice(-4) === ".bin" ? ts(e) : as(e);
}
function Ar(e, a) {
  for (var r = e.FullPaths || Lr(e.files), n = a.toLowerCase().replace(/[\/]/g, "\\"), t = n.replace(/\\/g, "/"), s = 0; s < r.length; ++s) {
    var i = r[s].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (n == i || t == i) return e.files ? e.files[r[s]] : e.FileIndex[s];
  }
  return null;
}
function f0(e, a) {
  var r = Ar(e, a);
  if (r == null) throw new Error("Cannot find file " + a + " in zip");
  return r;
}
function ze(e, a, r) {
  if (!r) return _c(f0(e, a));
  if (!a) return null;
  try {
    return ze(e, a);
  } catch {
    return null;
  }
}
function Er(e, a, r) {
  if (!r) return as(f0(e, a));
  if (!a) return null;
  try {
    return Er(e, a);
  } catch {
    return null;
  }
}
function Ec(e, a, r) {
  return ts(f0(e, a));
}
function $0(e) {
  for (var a = e.FullPaths || Lr(e.files), r = [], n = 0; n < a.length; ++n) a[n].slice(-1) != "/" && r.push(a[n].replace(/^Root Entry[\/]/, ""));
  return r.sort();
}
function Tc(e, a, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var n;
      return Ae ? n = oa(r) : n = Hi(r), Fe.utils.cfb_add(e, a, n);
    }
    Fe.utils.cfb_add(e, a, r);
  } else e.file(a, r);
}
function ns(e, a) {
  switch (a.type) {
    case "base64":
      return Fe.read(e, { type: "base64" });
    case "binary":
      return Fe.read(e, { type: "binary" });
    case "buffer":
    case "array":
      return Fe.read(e, { type: "buffer" });
  }
  throw new Error("Unrecognized type " + a.type);
}
function Ia(e, a) {
  if (e.charAt(0) == "/") return e.slice(1);
  var r = a.split("/");
  a.slice(-1) != "/" && r.pop();
  for (var n = e.split("/"); n.length !== 0; ) {
    var t = n.shift();
    t === ".." ? r.pop() : t !== "." && r.push(t);
  }
  return r.join("/");
}
var ss = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, kc = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, K0 = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg, wc = /<[^>]*>/g, lr = /* @__PURE__ */ ss.match(K0) ? K0 : wc, Ac = /<\w*:/, Fc = /<(\/?)\w+:/;
function ge(e, a, r) {
  for (var n = {}, t = 0, s = 0; t !== e.length && !((s = e.charCodeAt(t)) === 32 || s === 10 || s === 13); ++t) ;
  if (a || (n[0] = e.slice(0, t)), t === e.length) return n;
  var i = e.match(kc), c = 0, o = "", f = 0, l = "", u = "", x = 1;
  if (i) for (f = 0; f != i.length; ++f) {
    for (u = i[f], s = 0; s != u.length && u.charCodeAt(s) !== 61; ++s) ;
    for (l = u.slice(0, s).trim(); u.charCodeAt(s + 1) == 32; ) ++s;
    for (x = (t = u.charCodeAt(s + 1)) == 34 || t == 39 ? 1 : 0, o = u.slice(s + 1 + x, u.length - x), c = 0; c != l.length && l.charCodeAt(c) !== 58; ++c) ;
    if (c === l.length)
      l.indexOf("_") > 0 && (l = l.slice(0, l.indexOf("_"))), n[l] = o, n[l.toLowerCase()] = o;
    else {
      var d = (c === 5 && l.slice(0, 5) === "xmlns" ? "xmlns" : "") + l.slice(c + 1);
      if (n[d] && l.slice(c - 3, c) == "ext") continue;
      n[d] = o, n[d.toLowerCase()] = o;
    }
  }
  return n;
}
function Mr(e) {
  return e.replace(Fc, "<$1");
}
var is = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
}, Sc = /* @__PURE__ */ c0(is), Ce = /* @__PURE__ */ (function() {
  var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, a = /_x([\da-fA-F]{4})_/ig;
  return function r(n) {
    var t = n + "", s = t.indexOf("<![CDATA[");
    if (s == -1) return t.replace(e, function(c, o) {
      return is[c] || String.fromCharCode(parseInt(o, c.indexOf("x") > -1 ? 16 : 10)) || c;
    }).replace(a, function(c, o) {
      return String.fromCharCode(parseInt(o, 16));
    });
    var i = t.indexOf("]]>");
    return r(t.slice(0, s)) + t.slice(s + 9, i) + r(t.slice(i + 3));
  };
})(), Cc = /[&<>'"]/g, yc = /[\u0000-\u001f]/g;
function o0(e) {
  var a = e + "";
  return a.replace(Cc, function(r) {
    return Sc[r];
  }).replace(/\n/g, "<br/>").replace(yc, function(r) {
    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
var Y0 = /* @__PURE__ */ (function() {
  var e = /&#(\d+);/g;
  function a(r, n) {
    return String.fromCharCode(parseInt(n, 10));
  }
  return function(n) {
    return n.replace(e, a);
  };
})();
function be(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    /* case '0': case 'false': case 'FALSE':*/
    default:
      return !1;
  }
}
function Pt(e) {
  for (var a = "", r = 0, n = 0, t = 0, s = 0, i = 0, c = 0; r < e.length; ) {
    if (n = e.charCodeAt(r++), n < 128) {
      a += String.fromCharCode(n);
      continue;
    }
    if (t = e.charCodeAt(r++), n > 191 && n < 224) {
      i = (n & 31) << 6, i |= t & 63, a += String.fromCharCode(i);
      continue;
    }
    if (s = e.charCodeAt(r++), n < 240) {
      a += String.fromCharCode((n & 15) << 12 | (t & 63) << 6 | s & 63);
      continue;
    }
    i = e.charCodeAt(r++), c = ((n & 7) << 18 | (t & 63) << 12 | (s & 63) << 6 | i & 63) - 65536, a += String.fromCharCode(55296 + (c >>> 10 & 1023)), a += String.fromCharCode(56320 + (c & 1023));
  }
  return a;
}
function j0(e) {
  var a = qr(2 * e.length), r, n, t = 1, s = 0, i = 0, c;
  for (n = 0; n < e.length; n += t)
    t = 1, (c = e.charCodeAt(n)) < 128 ? r = c : c < 224 ? (r = (c & 31) * 64 + (e.charCodeAt(n + 1) & 63), t = 2) : c < 240 ? (r = (c & 15) * 4096 + (e.charCodeAt(n + 1) & 63) * 64 + (e.charCodeAt(n + 2) & 63), t = 3) : (t = 4, r = (c & 7) * 262144 + (e.charCodeAt(n + 1) & 63) * 4096 + (e.charCodeAt(n + 2) & 63) * 64 + (e.charCodeAt(n + 3) & 63), r -= 65536, i = 55296 + (r >>> 10 & 1023), r = 56320 + (r & 1023)), i !== 0 && (a[s++] = i & 255, a[s++] = i >>> 8, i = 0), a[s++] = r % 256, a[s++] = r >>> 8;
  return a.slice(0, s).toString("ucs2");
}
function J0(e) {
  return oa(e, "binary").toString("utf8");
}
var ct = "foo bar bazâð£", Re = Ae && (/* @__PURE__ */ J0(ct) == /* @__PURE__ */ Pt(ct) && J0 || /* @__PURE__ */ j0(ct) == /* @__PURE__ */ Pt(ct) && j0) || Pt, Na = Ae ? function(e) {
  return oa(e, "utf8").toString("binary");
} : function(e) {
  for (var a = [], r = 0, n = 0, t = 0; r < e.length; )
    switch (n = e.charCodeAt(r++), !0) {
      case n < 128:
        a.push(String.fromCharCode(n));
        break;
      case n < 2048:
        a.push(String.fromCharCode(192 + (n >> 6))), a.push(String.fromCharCode(128 + (n & 63)));
        break;
      case (n >= 55296 && n < 57344):
        n -= 55296, t = e.charCodeAt(r++) - 56320 + (n << 10), a.push(String.fromCharCode(240 + (t >> 18 & 7))), a.push(String.fromCharCode(144 + (t >> 12 & 63))), a.push(String.fromCharCode(128 + (t >> 6 & 63))), a.push(String.fromCharCode(128 + (t & 63)));
        break;
      default:
        a.push(String.fromCharCode(224 + (n >> 12))), a.push(String.fromCharCode(128 + (n >> 6 & 63))), a.push(String.fromCharCode(128 + (n & 63)));
    }
  return a.join("");
}, Xa = /* @__PURE__ */ (function() {
  var e = {};
  return function(r, n) {
    var t = r + "|" + (n || "");
    return e[t] ? e[t] : e[t] = new RegExp("<(?:\\w+:)?" + r + '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' + r + ">", n || "");
  };
})(), cs = /* @__PURE__ */ (function() {
  var e = [
    ["nbsp", " "],
    ["middot", "·"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(a) {
    return [new RegExp("&" + a[0] + ";", "ig"), a[1]];
  });
  return function(r) {
    for (var n = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, ""), t = 0; t < e.length; ++t) n = n.replace(e[t][0], e[t][1]);
    return n;
  };
})(), Oc = /* @__PURE__ */ (function() {
  var e = {};
  return function(r) {
    return e[r] !== void 0 ? e[r] : e[r] = new RegExp("<(?:vt:)?" + r + ">([\\s\\S]*?)</(?:vt:)?" + r + ">", "g");
  };
})(), Dc = /<\/?(?:vt:)?variant>/g, Rc = /<(?:vt:)([^>]*)>([\s\S]*)</;
function q0(e, a) {
  var r = ge(e), n = e.match(Oc(r.baseType)) || [], t = [];
  if (n.length != r.size) {
    if (a.WTF) throw new Error("unexpected vector length " + n.length + " != " + r.size);
    return t;
  }
  return n.forEach(function(s) {
    var i = s.replace(Dc, "").match(Rc);
    i && t.push({ v: Re(i[2]), t: i[1] });
  }), t;
}
var Ic = /(^\s|\s$|\n)/;
function Nc(e) {
  return Lr(e).map(function(a) {
    return " " + a + '="' + e[a] + '"';
  }).join("");
}
function bc(e, a, r) {
  return "<" + e + (r != null ? Nc(r) : "") + (a != null ? (a.match(Ic) ? ' xml:space="preserve"' : "") + ">" + a + "</" + e : "/") + ">";
}
function l0(e) {
  if (Ae && /*::typeof Buffer !== "undefined" && d != null && d instanceof Buffer &&*/
  Buffer.isBuffer(e)) return e.toString("utf8");
  if (typeof e == "string") return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array) return Re(la(n0(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var $a = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg, Pc = {
  CT: "http://schemas.openxmlformats.org/package/2006/content-types"
}, Lc = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
];
function Mc(e, a) {
  for (var r = 1 - 2 * (e[a + 7] >>> 7), n = ((e[a + 7] & 127) << 4) + (e[a + 6] >>> 4 & 15), t = e[a + 6] & 15, s = 5; s >= 0; --s) t = t * 256 + e[a + s];
  return n == 2047 ? t == 0 ? r * (1 / 0) : NaN : (n == 0 ? n = -1022 : (n -= 1023, t += Math.pow(2, 52)), r * Math.pow(2, n - 52) * t);
}
function Bc(e, a, r) {
  var n = (a < 0 || 1 / a == -1 / 0 ? 1 : 0) << 7, t = 0, s = 0, i = n ? -a : a;
  isFinite(i) ? i == 0 ? t = s = 0 : (t = Math.floor(Math.log(i) / Math.LN2), s = i * Math.pow(2, 52 - t), t <= -1023 && (!isFinite(s) || s < Math.pow(2, 52)) ? t = -1022 : (s -= Math.pow(2, 52), t += 1023)) : (t = 2047, s = isNaN(a) ? 26985 : 0);
  for (var c = 0; c <= 5; ++c, s /= 256) e[r + c] = s & 255;
  e[r + 6] = (t & 15) << 4 | s & 15, e[r + 7] = t >> 4 | n;
}
var Z0 = function(e) {
  for (var a = [], r = 10240, n = 0; n < e[0].length; ++n) if (e[0][n]) for (var t = 0, s = e[0][n].length; t < s; t += r) a.push.apply(a, e[0][n].slice(t, t + r));
  return a;
}, Q0 = Ae ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(a) {
    return Buffer.isBuffer(a) ? a : oa(a);
  })) : Z0(e);
} : Z0, en = function(e, a, r) {
  for (var n = [], t = a; t < r; t += 2) n.push(String.fromCharCode(Wr(e, t)));
  return n.join("").replace(dr, "");
}, u0 = Ae ? function(e, a, r) {
  return Buffer.isBuffer(e) ? e.toString("utf16le", a, r).replace(dr, "") : en(e, a, r);
} : en, rn = function(e, a, r) {
  for (var n = [], t = a; t < a + r; ++t) n.push(("0" + e[t].toString(16)).slice(-2));
  return n.join("");
}, fs = Ae ? function(e, a, r) {
  return Buffer.isBuffer(e) ? e.toString("hex", a, a + r) : rn(e, a, r);
} : rn, an = function(e, a, r) {
  for (var n = [], t = a; t < r; t++) n.push(String.fromCharCode(va(e, t)));
  return n.join("");
}, Qa = Ae ? function(a, r, n) {
  return Buffer.isBuffer(a) ? a.toString("utf8", r, n) : an(a, r, n);
} : an, os = function(e, a) {
  var r = _r(e, a);
  return r > 0 ? Qa(e, a + 4, a + 4 + r - 1) : "";
}, ls = os, us = function(e, a) {
  var r = _r(e, a);
  return r > 0 ? Qa(e, a + 4, a + 4 + r - 1) : "";
}, hs = us, xs = function(e, a) {
  var r = 2 * _r(e, a);
  return r > 0 ? Qa(e, a + 4, a + 4 + r - 1) : "";
}, ds = xs, ps = function(a, r) {
  var n = _r(a, r);
  return n > 0 ? u0(a, r + 4, r + 4 + n) : "";
}, vs = ps, gs = function(e, a) {
  var r = _r(e, a);
  return r > 0 ? Qa(e, a + 4, a + 4 + r) : "";
}, ms = gs, _s = function(e, a) {
  return Mc(e, a);
}, Tt = _s, Es = function(a) {
  return Array.isArray(a) || typeof Uint8Array < "u" && a instanceof Uint8Array;
};
Ae && (ls = function(a, r) {
  if (!Buffer.isBuffer(a)) return os(a, r);
  var n = a.readUInt32LE(r);
  return n > 0 ? a.toString("utf8", r + 4, r + 4 + n - 1) : "";
}, hs = function(a, r) {
  if (!Buffer.isBuffer(a)) return us(a, r);
  var n = a.readUInt32LE(r);
  return n > 0 ? a.toString("utf8", r + 4, r + 4 + n - 1) : "";
}, ds = function(a, r) {
  if (!Buffer.isBuffer(a)) return xs(a, r);
  var n = 2 * a.readUInt32LE(r);
  return a.toString("utf16le", r + 4, r + 4 + n - 1);
}, vs = function(a, r) {
  if (!Buffer.isBuffer(a)) return ps(a, r);
  var n = a.readUInt32LE(r);
  return a.toString("utf16le", r + 4, r + 4 + n);
}, ms = function(a, r) {
  if (!Buffer.isBuffer(a)) return gs(a, r);
  var n = a.readUInt32LE(r);
  return a.toString("utf8", r + 4, r + 4 + n);
}, Tt = function(a, r) {
  return Buffer.isBuffer(a) ? a.readDoubleLE(r) : _s(a, r);
}, Es = function(a) {
  return Buffer.isBuffer(a) || Array.isArray(a) || typeof Uint8Array < "u" && a instanceof Uint8Array;
});
var va = function(e, a) {
  return e[a];
}, Wr = function(e, a) {
  return e[a + 1] * 256 + e[a];
}, Uc = function(e, a) {
  var r = e[a + 1] * 256 + e[a];
  return r < 32768 ? r : (65535 - r + 1) * -1;
}, _r = function(e, a) {
  return e[a + 3] * (1 << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a];
}, aa = function(e, a) {
  return e[a + 3] << 24 | e[a + 2] << 16 | e[a + 1] << 8 | e[a];
}, Hc = function(e, a) {
  return e[a] << 24 | e[a + 1] << 16 | e[a + 2] << 8 | e[a + 3];
};
function ba(e, a) {
  var r = "", n, t, s = [], i, c, o, f;
  switch (a) {
    case "dbcs":
      if (f = this.l, Ae && Buffer.isBuffer(this)) r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else for (o = 0; o < e; ++o)
        r += String.fromCharCode(Wr(this, f)), f += 2;
      e *= 2;
      break;
    case "utf8":
      r = Qa(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, r = u0(this, this.l, this.l + e);
      break;
    case "wstr":
      return ba.call(this, e, "dbcs");
    /* [MS-OLEDS] 2.1.4 LengthPrefixedAnsiString */
    case "lpstr-ansi":
      r = ls(this, this.l), e = 4 + _r(this, this.l);
      break;
    case "lpstr-cp":
      r = hs(this, this.l), e = 4 + _r(this, this.l);
      break;
    /* [MS-OLEDS] 2.1.5 LengthPrefixedUnicodeString */
    case "lpwstr":
      r = ds(this, this.l), e = 4 + 2 * _r(this, this.l);
      break;
    /* [MS-OFFCRYPTO] 2.1.2 Length-Prefixed Padded Unicode String (UNICODE-LP-P4) */
    case "lpp4":
      e = 4 + _r(this, this.l), r = vs(this, this.l), e & 2 && (e += 2);
      break;
    /* [MS-OFFCRYPTO] 2.1.3 Length-Prefixed UTF-8 String (UTF-8-LP-P4) */
    case "8lpp4":
      e = 4 + _r(this, this.l), r = ms(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (i = va(this, this.l + e++)) !== 0; ) s.push(it(i));
      r = s.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (i = Wr(this, this.l + e)) !== 0; )
        s.push(it(i)), e += 2;
      e += 2, r = s.join("");
      break;
    /* sbcs and dbcs support continue records in the SST way TODO codepages */
    case "dbcs-cont":
      for (r = "", f = this.l, o = 0; o < e; ++o) {
        if (this.lens && this.lens.indexOf(f) !== -1)
          return i = va(this, f), this.l = f + 1, c = ba.call(this, e - o, i ? "dbcs-cont" : "sbcs-cont"), s.join("") + c;
        s.push(it(Wr(this, f))), f += 2;
      }
      r = s.join(""), e *= 2;
      break;
    case "cpstr":
    /* falls through */
    case "sbcs-cont":
      for (r = "", f = this.l, o = 0; o != e; ++o) {
        if (this.lens && this.lens.indexOf(f) !== -1)
          return i = va(this, f), this.l = f + 1, c = ba.call(this, e - o, i ? "dbcs-cont" : "sbcs-cont"), s.join("") + c;
        s.push(it(va(this, f))), f += 1;
      }
      r = s.join("");
      break;
    default:
      switch (e) {
        case 1:
          return n = va(this, this.l), this.l++, n;
        case 2:
          return n = (a === "i" ? Uc : Wr)(this, this.l), this.l += 2, n;
        case 4:
        case -4:
          return a === "i" || (this[this.l + 3] & 128) === 0 ? (n = (e > 0 ? aa : Hc)(this, this.l), this.l += 4, n) : (t = _r(this, this.l), this.l += 4, t);
        case 8:
        case -8:
          if (a === "f")
            return e == 8 ? t = Tt(this, this.l) : t = Tt([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, t;
          e = 8;
        /* falls through */
        case 16:
          r = fs(this, this.l, e);
          break;
      }
  }
  return this.l += e, r;
}
var Wc = function(e, a, r) {
  e[r] = a & 255, e[r + 1] = a >>> 8 & 255, e[r + 2] = a >>> 16 & 255, e[r + 3] = a >>> 24 & 255;
}, Vc = function(e, a, r) {
  e[r] = a & 255, e[r + 1] = a >> 8 & 255, e[r + 2] = a >> 16 & 255, e[r + 3] = a >> 24 & 255;
}, Gc = function(e, a, r) {
  e[r] = a & 255, e[r + 1] = a >>> 8 & 255;
};
function zc(e, a, r) {
  var n = 0, t = 0;
  if (r === "dbcs") {
    for (t = 0; t != a.length; ++t) Gc(this, a.charCodeAt(t), this.l + 2 * t);
    n = 2 * a.length;
  } else if (r === "sbcs") {
    for (a = a.replace(/[^\x00-\x7F]/g, "_"), t = 0; t != a.length; ++t) this[this.l + t] = a.charCodeAt(t) & 255;
    n = a.length;
  } else if (r === "hex") {
    for (; t < e; ++t)
      this[this.l++] = parseInt(a.slice(2 * t, 2 * t + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var s = Math.min(this.l + e, this.length);
    for (t = 0; t < Math.min(a.length, e); ++t) {
      var i = a.charCodeAt(t);
      this[this.l++] = i & 255, this[this.l++] = i >> 8;
    }
    for (; this.l < s; ) this[this.l++] = 0;
    return this;
  } else switch (e) {
    case 1:
      n = 1, this[this.l] = a & 255;
      break;
    case 2:
      n = 2, this[this.l] = a & 255, a >>>= 8, this[this.l + 1] = a & 255;
      break;
    case 3:
      n = 3, this[this.l] = a & 255, a >>>= 8, this[this.l + 1] = a & 255, a >>>= 8, this[this.l + 2] = a & 255;
      break;
    case 4:
      n = 4, Wc(this, a, this.l);
      break;
    case 8:
      if (n = 8, r === "f") {
        Bc(this, a, this.l);
        break;
      }
    /* falls through */
    case 16:
      break;
    case -4:
      n = 4, Vc(this, a, this.l);
      break;
  }
  return this.l += n, this;
}
function Ts(e, a) {
  var r = fs(this, this.l, e.length >> 1);
  if (r !== e) throw new Error(a + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function Ze(e, a) {
  e.l = a, e.read_shift = /*::(*/
  ba, e.chk = Ts, e.write_shift = zc;
}
function or(e, a) {
  e.l += a;
}
function Ke(e) {
  var a = qr(e);
  return Ze(a, 0), a;
}
function Xr(e, a, r) {
  if (e) {
    var n, t, s;
    Ze(e, e.l || 0);
    for (var i = e.length, c = 0, o = 0; e.l < i; ) {
      c = e.read_shift(1), c & 128 && (c = (c & 127) + ((e.read_shift(1) & 127) << 7));
      var f = Ct[c] || Ct[65535];
      for (n = e.read_shift(1), s = n & 127, t = 1; t < 4 && n & 128; ++t) s += ((n = e.read_shift(1)) & 127) << 7 * t;
      o = e.l + s;
      var l = f.f && f.f(e, s, r);
      if (e.l = o, a(l, f, c)) return;
    }
  }
}
function Xt() {
  var e = [], a = Ae ? 256 : 2048, r = function(f) {
    var l = Ke(f);
    return Ze(l, 0), l;
  }, n = r(a), t = function() {
    n && (n.length > n.l && (n = n.slice(0, n.l), n.l = n.length), n.length > 0 && e.push(n), n = null);
  }, s = function(f) {
    return n && f < n.length - n.l ? n : (t(), n = r(Math.max(f + 1, a)));
  }, i = function() {
    return t(), Kr(e);
  }, c = function(f) {
    t(), n = f, n.l == null && (n.l = n.length), s(a);
  };
  return { next: s, push: c, end: i, _bufs: e };
}
function Pa(e, a, r) {
  var n = Qe(e);
  if (a.s ? (n.cRel && (n.c += a.s.c), n.rRel && (n.r += a.s.r)) : (n.cRel && (n.c += a.c), n.rRel && (n.r += a.r)), !r || r.biff < 12) {
    for (; n.c >= 256; ) n.c -= 256;
    for (; n.r >= 65536; ) n.r -= 65536;
  }
  return n;
}
function tn(e, a, r) {
  var n = Qe(e);
  return n.s = Pa(n.s, a.s, r), n.e = Pa(n.e, a.s, r), n;
}
function La(e, a) {
  if (e.cRel && e.c < 0)
    for (e = Qe(e); e.c < 0; ) e.c += a > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = Qe(e); e.r < 0; ) e.r += a > 8 ? 1048576 : a > 5 ? 65536 : 16384;
  var r = me(e);
  return !e.cRel && e.cRel != null && (r = Kc(r)), !e.rRel && e.rRel != null && (r = Xc(r)), r;
}
function Lt(e, a) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (a.biff >= 12 ? 1048575 : a.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + Ye(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Ye(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (a.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + er(e.s.r) + ":" + (e.e.rRel ? "" : "$") + er(e.e.r) : La(e.s, a.biff) + ":" + La(e.e, a.biff);
}
function h0(e) {
  return parseInt($c(e), 10) - 1;
}
function er(e) {
  return "" + (e + 1);
}
function Xc(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function $c(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function x0(e) {
  for (var a = Yc(e), r = 0, n = 0; n !== a.length; ++n) r = 26 * r + a.charCodeAt(n) - 64;
  return r - 1;
}
function Ye(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var a = "";
  for (++e; e; e = Math.floor((e - 1) / 26)) a = String.fromCharCode((e - 1) % 26 + 65) + a;
  return a;
}
function Kc(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function Yc(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function jc(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function xr(e) {
  for (var a = 0, r = 0, n = 0; n < e.length; ++n) {
    var t = e.charCodeAt(n);
    t >= 48 && t <= 57 ? a = 10 * a + (t - 48) : t >= 65 && t <= 90 && (r = 26 * r + (t - 64));
  }
  return { c: r - 1, r: a - 1 };
}
function me(e) {
  for (var a = e.c + 1, r = ""; a; a = (a - 1) / 26 | 0) r = String.fromCharCode((a - 1) % 26 + 65) + r;
  return r + (e.r + 1);
}
function Aa(e) {
  var a = e.indexOf(":");
  return a == -1 ? { s: xr(e), e: xr(e) } : { s: xr(e.slice(0, a)), e: xr(e.slice(a + 1)) };
}
function Se(e, a) {
  return typeof a > "u" || typeof a == "number" ? Se(e.s, e.e) : (typeof e != "string" && (e = me(e)), typeof a != "string" && (a = me(a)), e == a ? e : e + ":" + a);
}
function Ue(e) {
  var a = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, r = 0, n = 0, t = 0, s = e.length;
  for (r = 0; n < s && !((t = e.charCodeAt(n) - 64) < 1 || t > 26); ++n)
    r = 26 * r + t;
  for (a.s.c = --r, r = 0; n < s && !((t = e.charCodeAt(n) - 48) < 0 || t > 9); ++n)
    r = 10 * r + t;
  if (a.s.r = --r, n === s || t != 10)
    return a.e.c = a.s.c, a.e.r = a.s.r, a;
  for (++n, r = 0; n != s && !((t = e.charCodeAt(n) - 64) < 1 || t > 26); ++n)
    r = 26 * r + t;
  for (a.e.c = --r, r = 0; n != s && !((t = e.charCodeAt(n) - 48) < 0 || t > 9); ++n)
    r = 10 * r + t;
  return a.e.r = --r, a;
}
function nn(e, a) {
  var r = e.t == "d" && a instanceof Date;
  if (e.z != null) try {
    return e.w = Fr(e.z, r ? pr(a) : a);
  } catch {
  }
  try {
    return e.w = Fr((e.XF || {}).numFmtId || (r ? 14 : 0), r ? pr(a) : a);
  } catch {
    return "" + a;
  }
}
function zr(e, a, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? xa[e.v] || e.v : a == null ? nn(e, e.v) : nn(e, a));
}
function ea(e, a) {
  var r = a && a.sheet ? a.sheet : "Sheet1", n = {};
  return n[r] = e, { SheetNames: [r], Sheets: n };
}
function ks(e, a, r) {
  var n = r || {}, t = e ? Array.isArray(e) : n.dense, s = e || (t ? [] : {}), i = 0, c = 0;
  if (s && n.origin != null) {
    if (typeof n.origin == "number") i = n.origin;
    else {
      var o = typeof n.origin == "string" ? xr(n.origin) : n.origin;
      i = o.r, c = o.c;
    }
    s["!ref"] || (s["!ref"] = "A1:A1");
  }
  var f = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (s["!ref"]) {
    var l = Ue(s["!ref"]);
    f.s.c = l.s.c, f.s.r = l.s.r, f.e.c = Math.max(f.e.c, l.e.c), f.e.r = Math.max(f.e.r, l.e.r), i == -1 && (f.e.r = i = l.e.r + 1);
  }
  for (var u = 0; u != a.length; ++u)
    if (a[u]) {
      if (!Array.isArray(a[u])) throw new Error("aoa_to_sheet expects an array of arrays");
      for (var x = 0; x != a[u].length; ++x)
        if (!(typeof a[u][x] > "u")) {
          var d = { v: a[u][x] }, p = i + u, h = c + x;
          if (f.s.r > p && (f.s.r = p), f.s.c > h && (f.s.c = h), f.e.r < p && (f.e.r = p), f.e.c < h && (f.e.c = h), a[u][x] && typeof a[u][x] == "object" && !Array.isArray(a[u][x]) && !(a[u][x] instanceof Date)) d = a[u][x];
          else if (Array.isArray(d.v) && (d.f = a[u][x][1], d.v = d.v[0]), d.v === null)
            if (d.f) d.t = "n";
            else if (n.nullError)
              d.t = "e", d.v = 0;
            else if (n.sheetStubs) d.t = "z";
            else continue;
          else typeof d.v == "number" ? d.t = "n" : typeof d.v == "boolean" ? d.t = "b" : d.v instanceof Date ? (d.z = n.dateNF || Ee[14], n.cellDates ? (d.t = "d", d.w = Fr(d.z, pr(d.v))) : (d.t = "n", d.v = pr(d.v), d.w = Fr(d.z, d.v))) : d.t = "s";
          if (t)
            s[p] || (s[p] = []), s[p][h] && s[p][h].z && (d.z = s[p][h].z), s[p][h] = d;
          else {
            var g = me({ c: h, r: p });
            s[g] && s[g].z && (d.z = s[g].z), s[g] = d;
          }
        }
    }
  return f.s.c < 1e7 && (s["!ref"] = Se(f)), s;
}
function Fa(e, a) {
  return ks(null, e, a);
}
function Jc(e) {
  return e.read_shift(4, "i");
}
function fr(e) {
  var a = e.read_shift(4);
  return a === 0 ? "" : e.read_shift(a, "dbcs");
}
function qc(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function d0(e, a) {
  var r = e.l, n = e.read_shift(1), t = fr(e), s = [], i = { t, h: t };
  if ((n & 1) !== 0) {
    for (var c = e.read_shift(4), o = 0; o != c; ++o) s.push(qc(e));
    i.r = s;
  } else i.r = [{ ich: 0, ifnt: 0 }];
  return e.l = r + a, i;
}
var Zc = d0;
function Sr(e) {
  var a = e.read_shift(4), r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: a, iStyleRef: r };
}
function ua(e) {
  var a = e.read_shift(2);
  return a += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: a };
}
var Qc = fr;
function p0(e) {
  var a = e.read_shift(4);
  return a === 0 || a === 4294967295 ? "" : e.read_shift(a, "dbcs");
}
var ef = fr, $t = p0;
function v0(e) {
  var a = e.slice(e.l, e.l + 4), r = a[0] & 1, n = a[0] & 2;
  e.l += 4;
  var t = n === 0 ? Tt([0, 0, 0, 0, a[0] & 252, a[1], a[2], a[3]], 0) : aa(a, 0) >> 2;
  return r ? t / 100 : t;
}
function ws(e) {
  var a = { s: {}, e: {} };
  return a.s.r = e.read_shift(4), a.e.r = e.read_shift(4), a.s.c = e.read_shift(4), a.e.c = e.read_shift(4), a;
}
var ha = ws;
function ir(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function rf(e) {
  var a = {}, r = e.read_shift(1), n = r >>> 1, t = e.read_shift(1), s = e.read_shift(2, "i"), i = e.read_shift(1), c = e.read_shift(1), o = e.read_shift(1);
  switch (e.l++, n) {
    case 0:
      a.auto = 1;
      break;
    case 1:
      a.index = t;
      var f = sa[t];
      f && (a.rgb = Ya(f));
      break;
    case 2:
      a.rgb = Ya([i, c, o]);
      break;
    case 3:
      a.theme = t;
      break;
  }
  return s != 0 && (a.tint = s > 0 ? s / 32767 : s / 32768), a;
}
function af(e) {
  var a = e.read_shift(1);
  e.l++;
  var r = {
    fBold: a & 1,
    fItalic: a & 2,
    fUnderline: a & 4,
    fStrikeout: a & 8,
    fOutline: a & 16,
    fShadow: a & 32,
    fCondense: a & 64,
    fExtend: a & 128
  };
  return r;
}
function As(e, a) {
  var r = { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" }, n = e.read_shift(4);
  switch (n) {
    case 0:
      return "";
    case 4294967295:
    case 4294967294:
      return r[e.read_shift(4)] || "";
  }
  if (n > 400) throw new Error("Unsupported Clipboard: " + n.toString(16));
  return e.l -= 4, e.read_shift(0, a == 1 ? "lpstr" : "lpwstr");
}
function tf(e) {
  return As(e, 1);
}
function nf(e) {
  return As(e, 2);
}
var g0 = 2, mr = 3, ft = 11, sn = 12, kt = 19, ot = 64, sf = 65, cf = 71, ff = 4108, of = 4126, Je = 80, Fs = 81, lf = [Je, Fs], uf = {
  /*::[*/
  1: { n: "CodePage", t: g0 },
  /*::[*/
  2: { n: "Category", t: Je },
  /*::[*/
  3: { n: "PresentationFormat", t: Je },
  /*::[*/
  4: { n: "ByteCount", t: mr },
  /*::[*/
  5: { n: "LineCount", t: mr },
  /*::[*/
  6: { n: "ParagraphCount", t: mr },
  /*::[*/
  7: { n: "SlideCount", t: mr },
  /*::[*/
  8: { n: "NoteCount", t: mr },
  /*::[*/
  9: { n: "HiddenCount", t: mr },
  /*::[*/
  10: { n: "MultimediaClipCount", t: mr },
  /*::[*/
  11: { n: "ScaleCrop", t: ft },
  /*::[*/
  12: {
    n: "HeadingPairs",
    t: ff
    /* VT_VECTOR | VT_VARIANT */
  },
  /*::[*/
  13: {
    n: "TitlesOfParts",
    t: of
    /* VT_VECTOR | VT_LPSTR */
  },
  /*::[*/
  14: { n: "Manager", t: Je },
  /*::[*/
  15: { n: "Company", t: Je },
  /*::[*/
  16: { n: "LinksUpToDate", t: ft },
  /*::[*/
  17: { n: "CharacterCount", t: mr },
  /*::[*/
  19: { n: "SharedDoc", t: ft },
  /*::[*/
  22: { n: "HyperlinksChanged", t: ft },
  /*::[*/
  23: { n: "AppVersion", t: mr, p: "version" },
  /*::[*/
  24: { n: "DigSig", t: sf },
  /*::[*/
  26: { n: "ContentType", t: Je },
  /*::[*/
  27: { n: "ContentStatus", t: Je },
  /*::[*/
  28: { n: "Language", t: Je },
  /*::[*/
  29: { n: "Version", t: Je },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: kt },
  /*::[*/
  2147483651: { n: "Behavior", t: kt },
  /*::[*/
  1919054434: {}
}, hf = {
  /*::[*/
  1: { n: "CodePage", t: g0 },
  /*::[*/
  2: { n: "Title", t: Je },
  /*::[*/
  3: { n: "Subject", t: Je },
  /*::[*/
  4: { n: "Author", t: Je },
  /*::[*/
  5: { n: "Keywords", t: Je },
  /*::[*/
  6: { n: "Comments", t: Je },
  /*::[*/
  7: { n: "Template", t: Je },
  /*::[*/
  8: { n: "LastAuthor", t: Je },
  /*::[*/
  9: { n: "RevNumber", t: Je },
  /*::[*/
  10: { n: "EditTime", t: ot },
  /*::[*/
  11: { n: "LastPrinted", t: ot },
  /*::[*/
  12: { n: "CreatedDate", t: ot },
  /*::[*/
  13: { n: "ModifiedDate", t: ot },
  /*::[*/
  14: { n: "PageCount", t: mr },
  /*::[*/
  15: { n: "WordCount", t: mr },
  /*::[*/
  16: { n: "CharCount", t: mr },
  /*::[*/
  17: { n: "Thumbnail", t: cf },
  /*::[*/
  18: { n: "Application", t: Je },
  /*::[*/
  19: { n: "DocSecurity", t: mr },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: kt },
  /*::[*/
  2147483651: { n: "Behavior", t: kt },
  /*::[*/
  1919054434: {}
}, cn = {
  /*::[*/
  1: "US",
  // United States
  /*::[*/
  2: "CA",
  // Canada
  /*::[*/
  3: "",
  // Latin America (except Brazil)
  /*::[*/
  7: "RU",
  // Russia
  /*::[*/
  20: "EG",
  // Egypt
  /*::[*/
  30: "GR",
  // Greece
  /*::[*/
  31: "NL",
  // Netherlands
  /*::[*/
  32: "BE",
  // Belgium
  /*::[*/
  33: "FR",
  // France
  /*::[*/
  34: "ES",
  // Spain
  /*::[*/
  36: "HU",
  // Hungary
  /*::[*/
  39: "IT",
  // Italy
  /*::[*/
  41: "CH",
  // Switzerland
  /*::[*/
  43: "AT",
  // Austria
  /*::[*/
  44: "GB",
  // United Kingdom
  /*::[*/
  45: "DK",
  // Denmark
  /*::[*/
  46: "SE",
  // Sweden
  /*::[*/
  47: "NO",
  // Norway
  /*::[*/
  48: "PL",
  // Poland
  /*::[*/
  49: "DE",
  // Germany
  /*::[*/
  52: "MX",
  // Mexico
  /*::[*/
  55: "BR",
  // Brazil
  /*::[*/
  61: "AU",
  // Australia
  /*::[*/
  64: "NZ",
  // New Zealand
  /*::[*/
  66: "TH",
  // Thailand
  /*::[*/
  81: "JP",
  // Japan
  /*::[*/
  82: "KR",
  // Korea
  /*::[*/
  84: "VN",
  // Viet Nam
  /*::[*/
  86: "CN",
  // China
  /*::[*/
  90: "TR",
  // Turkey
  /*::[*/
  105: "JS",
  // Ramastan
  /*::[*/
  213: "DZ",
  // Algeria
  /*::[*/
  216: "MA",
  // Morocco
  /*::[*/
  218: "LY",
  // Libya
  /*::[*/
  351: "PT",
  // Portugal
  /*::[*/
  354: "IS",
  // Iceland
  /*::[*/
  358: "FI",
  // Finland
  /*::[*/
  420: "CZ",
  // Czech Republic
  /*::[*/
  886: "TW",
  // Taiwan
  /*::[*/
  961: "LB",
  // Lebanon
  /*::[*/
  962: "JO",
  // Jordan
  /*::[*/
  963: "SY",
  // Syria
  /*::[*/
  964: "IQ",
  // Iraq
  /*::[*/
  965: "KW",
  // Kuwait
  /*::[*/
  966: "SA",
  // Saudi Arabia
  /*::[*/
  971: "AE",
  // United Arab Emirates
  /*::[*/
  972: "IL",
  // Israel
  /*::[*/
  974: "QA",
  // Qatar
  /*::[*/
  981: "IR",
  // Iran
  /*::[*/
  65535: "US"
  // United States
}, xf = [
  null,
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
];
function df(e) {
  return e.map(function(a) {
    return [a >> 16 & 255, a >> 8 & 255, a & 255];
  });
}
var pf = /* @__PURE__ */ df([
  /* Color Constants */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  /* Overridable Defaults */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  /* Other entries to appease BIFF8/12 */
  16777215,
  /* 0x40 icvForeground ?? */
  0,
  /* 0x41 icvBackground ?? */
  0,
  /* 0x42 icvFrame ?? */
  0,
  /* 0x43 icv3D ?? */
  0,
  /* 0x44 icv3DText ?? */
  0,
  /* 0x45 icv3DHilite ?? */
  0,
  /* 0x46 icv3DShadow ?? */
  0,
  /* 0x47 icvHilite ?? */
  0,
  /* 0x48 icvCtlText ?? */
  0,
  /* 0x49 icvCtlScrl ?? */
  0,
  /* 0x4A icvCtlInv ?? */
  0,
  /* 0x4B icvCtlBody ?? */
  0,
  /* 0x4C icvCtlFrame ?? */
  0,
  /* 0x4D icvCtlFore ?? */
  0,
  /* 0x4E icvCtlBack ?? */
  0,
  /* 0x4F icvCtlNeutral */
  0,
  /* 0x50 icvInfoBk ?? */
  0
  /* 0x51 icvInfoText ?? */
]), sa = /* @__PURE__ */ Qe(pf), xa = {
  /*::[*/
  0: "#NULL!",
  /*::[*/
  7: "#DIV/0!",
  /*::[*/
  15: "#VALUE!",
  /*::[*/
  23: "#REF!",
  /*::[*/
  29: "#NAME?",
  /*::[*/
  36: "#NUM!",
  /*::[*/
  42: "#N/A",
  /*::[*/
  43: "#GETTING_DATA",
  /*::[*/
  255: "#WTF?"
}, Ss = {
  "#NULL!": 0,
  "#DIV/0!": 7,
  "#VALUE!": 15,
  "#REF!": 23,
  "#NAME?": 29,
  "#NUM!": 36,
  "#N/A": 42,
  "#GETTING_DATA": 43,
  "#WTF?": 255
}, fn = {
  /* Workbook */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  /* Worksheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  /* Binary Index */
  /* Chartsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  /* Macrosheet */
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  /* Binary Index */
  /* Dialogsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  /* Shared Strings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  /* Styles */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  /* File Properties */
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  /* Custom Data Properties */
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  /* Comments */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  /* Metadata (Stock/Geography and Dynamic Array) */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  /* PivotTable */
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  /* Chart Objects */
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  /* Chart Colors */
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  /* Chart Style */
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  /* Chart Advanced */
  "application/vnd.ms-office.chartex+xml": "TODO",
  /* Calculation Chain */
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  /* Printer Settings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  /* ActiveX */
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  /* Custom Toolbars */
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  /* External Data Connections */
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  /* External Links */
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  /* PivotCache */
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  /* Query Table */
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  /* Shared Workbook */
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  /* Single Cell Table */
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  /* Slicer */
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  /* Sort Map */
  "application/vnd.ms-excel.wsSortMap": "TODO",
  /* Table */
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  /* Themes */
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  /* Theme Override */
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  /* Timeline */
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  /* verify */
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  /* verify */
  /* VBA */
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  /* Volatile Dependencies */
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  /* Control Properties */
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  /* Data Model */
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  /* Survey */
  "application/vnd.ms-excel.Survey+xml": "TODO",
  /* Drawing */
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  /* VML */
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  /* Image */
  "image/png": "TODO",
  sheet: "js"
};
function vf() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function gf(e) {
  var a = vf();
  if (!e || !e.match) return a;
  var r = {};
  if ((e.match(lr) || []).forEach(function(n) {
    var t = ge(n);
    switch (t[0].replace(Ac, "<")) {
      case "<?xml":
        break;
      case "<Types":
        a.xmlns = t["xmlns" + (t[0].match(/<(\w+):/) || ["", ""])[1]];
        break;
      case "<Default":
        r[t.Extension] = t.ContentType;
        break;
      case "<Override":
        a[fn[t.ContentType]] !== void 0 && a[fn[t.ContentType]].push(t.PartName);
        break;
    }
  }), a.xmlns !== Pc.CT) throw new Error("Unknown Namespace: " + a.xmlns);
  return a.calcchain = a.calcchains.length > 0 ? a.calcchains[0] : "", a.sst = a.strs.length > 0 ? a.strs[0] : "", a.style = a.styles.length > 0 ? a.styles[0] : "", a.defaults = r, delete a.calcchains, a;
}
var ga = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function Kt(e) {
  var a = e.lastIndexOf("/");
  return e.slice(0, a + 1) + "_rels/" + e.slice(a + 1) + ".rels";
}
function Ma(e, a) {
  var r = { "!id": {} };
  if (!e) return r;
  a.charAt(0) !== "/" && (a = "/" + a);
  var n = {};
  return (e.match(lr) || []).forEach(function(t) {
    var s = ge(t);
    if (s[0] === "<Relationship") {
      var i = {};
      i.Type = s.Type, i.Target = s.Target, i.Id = s.Id, s.TargetMode && (i.TargetMode = s.TargetMode);
      var c = s.TargetMode === "External" ? s.Target : Ia(s.Target, a);
      r[c] = i, n[s.Id] = i;
    }
  }), r["!id"] = n, r;
}
var mf = "application/vnd.oasis.opendocument.spreadsheet";
function _f(e, a) {
  for (var r = l0(e), n, t; n = $a.exec(r); ) switch (n[3]) {
    case "manifest":
      break;
    // 4.2 <manifest:manifest>
    case "file-entry":
      if (t = ge(n[0], !1), t.path == "/" && t.type !== mf) throw new Error("This OpenDocument is not a spreadsheet");
      break;
    case "encryption-data":
    // 4.4 <manifest:encryption-data>
    case "algorithm":
    // 4.5 <manifest:algorithm>
    case "start-key-generation":
    // 4.6 <manifest:start-key-generation>
    case "key-derivation":
      throw new Error("Unsupported ODS Encryption");
    default:
      if (a && a.WTF) throw n;
  }
}
var Ba = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
], Ef = /* @__PURE__ */ (function() {
  for (var e = new Array(Ba.length), a = 0; a < Ba.length; ++a) {
    var r = Ba[a], n = "(?:" + r[0].slice(0, r[0].indexOf(":")) + ":)" + r[0].slice(r[0].indexOf(":") + 1);
    e[a] = new RegExp("<" + n + "[^>]*>([\\s\\S]*?)</" + n + ">");
  }
  return e;
})();
function Cs(e) {
  var a = {};
  e = Re(e);
  for (var r = 0; r < Ba.length; ++r) {
    var n = Ba[r], t = e.match(Ef[r]);
    t != null && t.length > 0 && (a[n[1]] = Ce(t[1])), n[2] === "date" && a[n[1]] && (a[n[1]] = qe(a[n[1]]));
  }
  return a;
}
var Tf = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
];
function ys(e, a, r, n) {
  var t = [];
  if (typeof e == "string") t = q0(e, n);
  else for (var s = 0; s < e.length; ++s) t = t.concat(e[s].map(function(l) {
    return { v: l };
  }));
  var i = typeof a == "string" ? q0(a, n).map(function(l) {
    return l.v;
  }) : a, c = 0, o = 0;
  if (i.length > 0) for (var f = 0; f !== t.length; f += 2) {
    switch (o = +t[f + 1].v, t[f].v) {
      case "Worksheets":
      case "工作表":
      case "Листы":
      case "أوراق العمل":
      case "ワークシート":
      case "גליונות עבודה":
      case "Arbeitsblätter":
      case "Çalışma Sayfaları":
      case "Feuilles de calcul":
      case "Fogli di lavoro":
      case "Folhas de cálculo":
      case "Planilhas":
      case "Regneark":
      case "Hojas de cálculo":
      case "Werkbladen":
        r.Worksheets = o, r.SheetNames = i.slice(c, c + o);
        break;
      case "Named Ranges":
      case "Rangos con nombre":
      case "名前付き一覧":
      case "Benannte Bereiche":
      case "Navngivne områder":
        r.NamedRanges = o, r.DefinedNames = i.slice(c, c + o);
        break;
      case "Charts":
      case "Diagramme":
        r.Chartsheets = o, r.ChartNames = i.slice(c, c + o);
        break;
    }
    c += o;
  }
}
function kf(e, a, r) {
  var n = {};
  return a || (a = {}), e = Re(e), Tf.forEach(function(t) {
    var s = (e.match(Xa(t[0])) || [])[1];
    switch (t[2]) {
      case "string":
        s && (a[t[1]] = Ce(s));
        break;
      case "bool":
        a[t[1]] = s === "true";
        break;
      case "raw":
        var i = e.match(new RegExp("<" + t[0] + "[^>]*>([\\s\\S]*?)</" + t[0] + ">"));
        i && i.length > 0 && (n[t[1]] = i[1]);
        break;
    }
  }), n.HeadingPairs && n.TitlesOfParts && ys(n.HeadingPairs, n.TitlesOfParts, a, r), a;
}
var wf = /<[^>]+>[^<]*/g;
function Af(e, a) {
  var r = {}, n = "", t = e.match(wf);
  if (t) for (var s = 0; s != t.length; ++s) {
    var i = t[s], c = ge(i);
    switch (c[0]) {
      case "<?xml":
        break;
      case "<Properties":
        break;
      case "<property":
        n = Ce(c.name);
        break;
      case "</property>":
        n = null;
        break;
      default:
        if (i.indexOf("<vt:") === 0) {
          var o = i.split(">"), f = o[0].slice(4), l = o[1];
          switch (f) {
            case "lpstr":
            case "bstr":
            case "lpwstr":
              r[n] = Ce(l);
              break;
            case "bool":
              r[n] = be(l);
              break;
            case "i1":
            case "i2":
            case "i4":
            case "i8":
            case "int":
            case "uint":
              r[n] = parseInt(l, 10);
              break;
            case "r4":
            case "r8":
            case "decimal":
              r[n] = parseFloat(l);
              break;
            case "filetime":
            case "date":
              r[n] = qe(l);
              break;
            case "cy":
            case "error":
              r[n] = Ce(l);
              break;
            default:
              if (f.slice(-1) == "/") break;
              a.WTF && typeof console < "u" && console.warn("Unexpected", i, f, o);
          }
        } else if (i.slice(0, 2) !== "</") {
          if (a.WTF) throw new Error(i);
        }
    }
  }
  return r;
}
var Ff = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  /* TotalTime: 'TotalTime', */
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  /* Pages */
  /* Words */
  /* Characters */
  Category: "Category",
  /* PresentationFormat */
  Manager: "Manager",
  Company: "Company",
  /* Guid */
  /* HyperlinkBase */
  /* Bytes */
  /* Lines */
  /* Paragraphs */
  /* CharactersWithSpaces */
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  /* NOTE: missing from schema */
  Identifier: "Identifier",
  /* NOTE: missing from schema */
  Language: "Language"
  /* NOTE: missing from schema */
}, Mt;
function Sf(e, a, r) {
  Mt || (Mt = c0(Ff)), a = Mt[a] || a, e[a] = r;
}
function m0(e) {
  var a = e.read_shift(4), r = e.read_shift(4);
  return new Date((r / 1e7 * Math.pow(2, 32) + a / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function Os(e, a, r) {
  var n = e.l, t = e.read_shift(0, "lpstr-cp");
  if (r) for (; e.l - n & 3; ) ++e.l;
  return t;
}
function Ds(e, a, r) {
  var n = e.read_shift(0, "lpwstr");
  return n;
}
function Rs(e, a, r) {
  return a === 31 ? Ds(e) : Os(e, a, r);
}
function Yt(e, a, r) {
  return Rs(e, a, r === !1 ? 0 : 4);
}
function Cf(e, a) {
  if (!a) throw new Error("VtUnalignedString must have positive length");
  return Rs(e, a, 0);
}
function yf(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n != a; ++n) {
    var t = e.l;
    r[n] = e.read_shift(0, "lpwstr").replace(dr, ""), e.l - t & 2 && (e.l += 2);
  }
  return r;
}
function Of(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n != a; ++n) r[n] = e.read_shift(0, "lpstr-cp").replace(dr, "");
  return r;
}
function Df(e) {
  var a = e.l, r = wt(e, Fs);
  e[e.l] == 0 && e[e.l + 1] == 0 && e.l - a & 2 && (e.l += 2);
  var n = wt(e, mr);
  return [r, n];
}
function Rf(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n < a / 2; ++n) r.push(Df(e));
  return r;
}
function on(e, a) {
  for (var r = e.read_shift(4), n = {}, t = 0; t != r; ++t) {
    var s = e.read_shift(4), i = e.read_shift(4);
    n[s] = e.read_shift(i, a === 1200 ? "utf16le" : "utf8").replace(dr, "").replace(Ra, "!"), a === 1200 && i % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = e.l >> 3 << 2), n;
}
function Is(e) {
  var a = e.read_shift(4), r = e.slice(e.l, e.l + a);
  return e.l += a, (a & 3) > 0 && (e.l += 4 - (a & 3) & 3), r;
}
function If(e) {
  var a = {};
  return a.Size = e.read_shift(4), e.l += a.Size + 3 - (a.Size - 1) % 4, a;
}
function wt(e, a, r) {
  var n = e.read_shift(2), t, s = r || {};
  if (e.l += 2, a !== sn && n !== a && lf.indexOf(a) === -1 && !((a & 65534) == 4126 && (n & 65534) == 4126))
    throw new Error("Expected type " + a + " saw " + n);
  switch (a === sn ? n : a) {
    case 2:
      return t = e.read_shift(2, "i"), s.raw || (e.l += 2), t;
    case 3:
      return t = e.read_shift(4, "i"), t;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return t = e.read_shift(4), t;
    case 30:
      return Os(e, n, 4).replace(dr, "");
    case 31:
      return Ds(e);
    case 64:
      return m0(e);
    case 65:
      return Is(e);
    case 71:
      return If(e);
    case 80:
      return Yt(e, n, !s.raw).replace(dr, "");
    case 81:
      return Cf(
        e,
        n
        /*, 4*/
      ).replace(dr, "");
    case 4108:
      return Rf(e);
    case 4126:
    case 4127:
      return n == 4127 ? yf(e) : Of(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + a + " " + n);
  }
}
function ln(e, a) {
  var r = e.l, n = e.read_shift(4), t = e.read_shift(4), s = [], i = 0, c = 0, o = -1, f = {};
  for (i = 0; i != t; ++i) {
    var l = e.read_shift(4), u = e.read_shift(4);
    s[i] = [l, u + r];
  }
  s.sort(function(I, T) {
    return I[1] - T[1];
  });
  var x = {};
  for (i = 0; i != t; ++i) {
    if (e.l !== s[i][1]) {
      var d = !0;
      if (i > 0 && a) switch (a[s[i - 1][0]].t) {
        case 2:
          e.l + 2 === s[i][1] && (e.l += 2, d = !1);
          break;
        case 80:
          e.l <= s[i][1] && (e.l = s[i][1], d = !1);
          break;
        case 4108:
          e.l <= s[i][1] && (e.l = s[i][1], d = !1);
          break;
      }
      if ((!a || i == 0) && e.l <= s[i][1] && (d = !1, e.l = s[i][1]), d) throw new Error("Read Error: Expected address " + s[i][1] + " at " + e.l + " :" + i);
    }
    if (a) {
      var p = a[s[i][0]];
      if (x[p.n] = wt(e, p.t, { raw: !0 }), p.p === "version" && (x[p.n] = String(x[p.n] >> 16) + "." + ("0000" + String(x[p.n] & 65535)).slice(-4)), p.n == "CodePage") switch (x[p.n]) {
        case 0:
          x[p.n] = 1252;
        /* falls through */
        case 874:
        case 932:
        case 936:
        case 949:
        case 950:
        case 1250:
        case 1251:
        case 1253:
        case 1254:
        case 1255:
        case 1256:
        case 1257:
        case 1258:
        case 1e4:
        case 1200:
        case 1201:
        case 1252:
        case 65e3:
        case -536:
        case 65001:
        case -535:
          Dr(c = x[p.n] >>> 0 & 65535);
          break;
        default:
          throw new Error("Unsupported CodePage: " + x[p.n]);
      }
    } else if (s[i][0] === 1) {
      if (c = x.CodePage = wt(e, g0), Dr(c), o !== -1) {
        var h = e.l;
        e.l = s[o][1], f = on(e, c), e.l = h;
      }
    } else if (s[i][0] === 0) {
      if (c === 0) {
        o = i, e.l = s[i + 1][1];
        continue;
      }
      f = on(e, c);
    } else {
      var g = f[s[i][0]], O;
      switch (e[e.l]) {
        case 65:
          e.l += 4, O = Is(e);
          break;
        case 30:
          e.l += 4, O = Yt(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 31:
          e.l += 4, O = Yt(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 3:
          e.l += 4, O = e.read_shift(4, "i");
          break;
        case 19:
          e.l += 4, O = e.read_shift(4);
          break;
        case 5:
          e.l += 4, O = e.read_shift(8, "f");
          break;
        case 11:
          e.l += 4, O = He(e, 4);
          break;
        case 64:
          e.l += 4, O = qe(m0(e));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      x[g] = O;
    }
  }
  return e.l = r + n, x;
}
function un(e, a, r) {
  var n = e.content;
  if (!n) return {};
  Ze(n, 0);
  var t, s, i, c, o = 0;
  n.chk("feff", "Byte Order: "), n.read_shift(2);
  var f = n.read_shift(4), l = n.read_shift(16);
  if (l !== Fe.utils.consts.HEADER_CLSID && l !== r) throw new Error("Bad PropertySet CLSID " + l);
  if (t = n.read_shift(4), t !== 1 && t !== 2) throw new Error("Unrecognized #Sets: " + t);
  if (s = n.read_shift(16), c = n.read_shift(4), t === 1 && c !== n.l) throw new Error("Length mismatch: " + c + " !== " + n.l);
  t === 2 && (i = n.read_shift(16), o = n.read_shift(4));
  var u = ln(n, a), x = { SystemIdentifier: f };
  for (var d in u) x[d] = u[d];
  if (x.FMTID = s, t === 1) return x;
  if (o - n.l == 2 && (n.l += 2), n.l !== o) throw new Error("Length mismatch 2: " + n.l + " !== " + o);
  var p;
  try {
    p = ln(n, null);
  } catch {
  }
  for (d in p) x[d] = p[d];
  return x.FMTID = [s, i], x;
}
function $r(e, a) {
  return e.read_shift(a), null;
}
function Nf(e, a, r) {
  for (var n = [], t = e.l + a; e.l < t; ) n.push(r(e, t - e.l));
  if (t !== e.l) throw new Error("Slurp error");
  return n;
}
function He(e, a) {
  return e.read_shift(a) === 1;
}
function Xe(e) {
  return e.read_shift(2, "u");
}
function Ns(e, a) {
  return Nf(e, a, Xe);
}
function bf(e) {
  var a = e.read_shift(1), r = e.read_shift(1);
  return r === 1 ? a : a === 1;
}
function et(e, a, r) {
  var n = e.read_shift(r && r.biff >= 12 ? 2 : 1), t = "sbcs-cont";
  if (r && r.biff >= 8, !r || r.biff == 8) {
    var s = e.read_shift(1);
    s && (t = "dbcs-cont");
  } else r.biff == 12 && (t = "wstr");
  r.biff >= 2 && r.biff <= 5 && (t = "cpstr");
  var i = n ? e.read_shift(n, t) : "";
  return i;
}
function Pf(e) {
  var a = e.read_shift(2), r = e.read_shift(1), n = r & 4, t = r & 8, s = 1 + (r & 1), i = 0, c, o = {};
  t && (i = e.read_shift(2)), n && (c = e.read_shift(4));
  var f = s == 2 ? "dbcs-cont" : "sbcs-cont", l = a === 0 ? "" : e.read_shift(a, f);
  return t && (e.l += 4 * i), n && (e.l += c), o.t = l, t || (o.raw = "<t>" + o.t + "</t>", o.r = o.t), o;
}
function fa(e, a, r) {
  var n;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return e.read_shift(a, "cpstr");
    if (r.biff >= 12) return e.read_shift(a, "dbcs-cont");
  }
  var t = e.read_shift(1);
  return t === 0 ? n = e.read_shift(a, "sbcs-cont") : n = e.read_shift(a, "dbcs-cont"), n;
}
function rt(e, a, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, "") : fa(e, n, r);
}
function da(e, a, r) {
  if (r.biff > 5) return rt(e, a, r);
  var n = e.read_shift(1);
  return n === 0 ? (e.l++, "") : e.read_shift(n, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function Lf(e) {
  var a = e.read_shift(1);
  e.l++;
  var r = e.read_shift(2);
  return e.l += 2, [a, r];
}
function Mf(e) {
  var a = e.read_shift(4), r = e.l, n = !1;
  a > 24 && (e.l += a - 24, e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (n = !0), e.l = r);
  var t = e.read_shift((n ? a - 24 : a) >> 1, "utf16le").replace(dr, "");
  return n && (e.l += 24), t;
}
function Bf(e) {
  for (var a = e.read_shift(2), r = ""; a-- > 0; ) r += "../";
  var n = e.read_shift(0, "lpstr-ansi");
  if (e.l += 2, e.read_shift(2) != 57005) throw new Error("Bad FileMoniker");
  var t = e.read_shift(4);
  if (t === 0) return r + n.replace(/\\/g, "/");
  var s = e.read_shift(4);
  if (e.read_shift(2) != 3) throw new Error("Bad FileMoniker");
  var i = e.read_shift(s >> 1, "utf16le").replace(dr, "");
  return r + i;
}
function Uf(e, a) {
  var r = e.read_shift(16);
  switch (r) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return Mf(e);
    case "0303000000000000c000000000000046":
      return Bf(e);
    default:
      throw new Error("Unsupported Moniker " + r);
  }
}
function lt(e) {
  var a = e.read_shift(4), r = a > 0 ? e.read_shift(a, "utf16le").replace(dr, "") : "";
  return r;
}
function Hf(e, a) {
  var r = e.l + a, n = e.read_shift(4);
  if (n !== 2) throw new Error("Unrecognized streamVersion: " + n);
  var t = e.read_shift(2);
  e.l += 2;
  var s, i, c, o, f = "", l, u;
  t & 16 && (s = lt(e, r - e.l)), t & 128 && (i = lt(e, r - e.l)), (t & 257) === 257 && (c = lt(e, r - e.l)), (t & 257) === 1 && (o = Uf(e, r - e.l)), t & 8 && (f = lt(e, r - e.l)), t & 32 && (l = e.read_shift(16)), t & 64 && (u = m0(
    e
    /*, 8*/
  )), e.l = r;
  var x = i || c || o || "";
  x && f && (x += "#" + f), x || (x = "#" + f), t & 2 && x.charAt(0) == "/" && x.charAt(1) != "/" && (x = "file://" + x);
  var d = { Target: x };
  return l && (d.guid = l), u && (d.time = u), s && (d.Tooltip = s), d;
}
function bs(e) {
  var a = e.read_shift(1), r = e.read_shift(1), n = e.read_shift(1), t = e.read_shift(1);
  return [a, r, n, t];
}
function Ps(e, a) {
  var r = bs(e);
  return r[3] = 0, r;
}
function Br(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2);
  return { r: a, c: r, ixfe: n };
}
function Wf(e) {
  var a = e.read_shift(2), r = e.read_shift(2);
  return e.l += 8, { type: a, flags: r };
}
function Vf(e, a, r) {
  return a === 0 ? "" : da(e, a, r);
}
function Gf(e, a, r) {
  var n = r.biff > 8 ? 4 : 2, t = e.read_shift(n), s = e.read_shift(n, "i"), i = e.read_shift(n, "i");
  return [t, s, i];
}
function Ls(e) {
  var a = e.read_shift(2), r = v0(e);
  return [a, r];
}
function zf(e, a, r) {
  e.l += 4, a -= 4;
  var n = e.l + a, t = et(e, a, r), s = e.read_shift(2);
  if (n -= e.l, s !== n) throw new Error("Malformed AddinUdf: padding = " + n + " != " + s);
  return e.l += s, t;
}
function Ot(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2), t = e.read_shift(2);
  return { s: { c: n, r: a }, e: { c: t, r } };
}
function Ms(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(1), t = e.read_shift(1);
  return { s: { c: n, r: a }, e: { c: t, r } };
}
var Xf = Ms;
function Bs(e) {
  e.l += 4;
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2);
  return e.l += 12, [r, a, n];
}
function $f(e) {
  var a = {};
  return e.l += 4, e.l += 16, a.fSharedNote = e.read_shift(2), e.l += 4, a;
}
function Kf(e) {
  var a = {};
  return e.l += 4, e.cf = e.read_shift(2), a;
}
function nr(e) {
  e.l += 2, e.l += e.read_shift(2);
}
var Yf = {
  /*::[*/
  0: nr,
  /* FtEnd */
  /*::[*/
  4: nr,
  /* FtMacro */
  /*::[*/
  5: nr,
  /* FtButton */
  /*::[*/
  6: nr,
  /* FtGmo */
  /*::[*/
  7: Kf,
  /* FtCf */
  /*::[*/
  8: nr,
  /* FtPioGrbit */
  /*::[*/
  9: nr,
  /* FtPictFmla */
  /*::[*/
  10: nr,
  /* FtCbls */
  /*::[*/
  11: nr,
  /* FtRbo */
  /*::[*/
  12: nr,
  /* FtSbs */
  /*::[*/
  13: $f,
  /* FtNts */
  /*::[*/
  14: nr,
  /* FtSbsFmla */
  /*::[*/
  15: nr,
  /* FtGboData */
  /*::[*/
  16: nr,
  /* FtEdoData */
  /*::[*/
  17: nr,
  /* FtRboData */
  /*::[*/
  18: nr,
  /* FtCblsData */
  /*::[*/
  19: nr,
  /* FtLbsData */
  /*::[*/
  20: nr,
  /* FtCblsFmla */
  /*::[*/
  21: Bs
};
function jf(e, a) {
  for (var r = e.l + a, n = []; e.l < r; ) {
    var t = e.read_shift(2);
    e.l -= 2;
    try {
      n.push(Yf[t](e, r - e.l));
    } catch {
      return e.l = r, n;
    }
  }
  return e.l != r && (e.l = r), n;
}
function ut(e, a) {
  var r = { BIFFVer: 0, dt: 0 };
  switch (r.BIFFVer = e.read_shift(2), a -= 2, a >= 2 && (r.dt = e.read_shift(2), e.l -= 2), r.BIFFVer) {
    case 1536:
    /* BIFF8 */
    case 1280:
    /* BIFF5 */
    case 1024:
    /* BIFF4 */
    case 768:
    /* BIFF3 */
    case 512:
    /* BIFF2 */
    case 2:
    case 7:
      break;
    default:
      if (a > 6) throw new Error("Unexpected BIFF Ver " + r.BIFFVer);
  }
  return e.read_shift(a), r;
}
function Jf(e, a) {
  return a === 0 || e.read_shift(2), 1200;
}
function qf(e, a, r) {
  if (r.enc)
    return e.l += a, "";
  var n = e.l, t = da(e, 0, r);
  return e.read_shift(a + n - e.l), t;
}
function Zf(e, a, r) {
  var n = r && r.biff == 8 || a == 2 ? e.read_shift(2) : (e.l += a, 0);
  return { fDialog: n & 16, fBelow: n & 64, fRight: n & 128 };
}
function Qf(e, a, r) {
  var n = e.read_shift(4), t = e.read_shift(1) & 3, s = e.read_shift(1);
  switch (s) {
    case 0:
      s = "Worksheet";
      break;
    case 1:
      s = "Macrosheet";
      break;
    case 2:
      s = "Chartsheet";
      break;
    case 6:
      s = "VBAModule";
      break;
  }
  var i = et(e, 0, r);
  return i.length === 0 && (i = "Sheet1"), { pos: n, hs: t, dt: s, name: i };
}
function eo(e, a) {
  for (var r = e.l + a, n = e.read_shift(4), t = e.read_shift(4), s = [], i = 0; i != t && e.l < r; ++i)
    s.push(Pf(e));
  return s.Count = n, s.Unique = t, s;
}
function ro(e, a) {
  var r = {};
  return r.dsst = e.read_shift(2), e.l += a - 2, r;
}
function ao(e) {
  var a = {};
  a.r = e.read_shift(2), a.c = e.read_shift(2), a.cnt = e.read_shift(2) - a.c;
  var r = e.read_shift(2);
  e.l += 4;
  var n = e.read_shift(1);
  return e.l += 3, n & 7 && (a.level = n & 7), n & 32 && (a.hidden = !0), n & 64 && (a.hpt = r / 20), a;
}
function to(e) {
  var a = Wf(e);
  if (a.type != 2211) throw new Error("Invalid Future Record " + a.type);
  var r = e.read_shift(4);
  return r !== 0;
}
function no(e) {
  return e.read_shift(2), e.read_shift(4);
}
function hn(e, a, r) {
  var n = 0;
  r && r.biff == 2 || (n = e.read_shift(2));
  var t = e.read_shift(2);
  r && r.biff == 2 && (n = 1 - (t >> 15), t &= 32767);
  var s = { Unsynced: n & 1, DyZero: (n & 2) >> 1, ExAsc: (n & 4) >> 2, ExDsc: (n & 8) >> 3 };
  return [s, t];
}
function so(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2), t = e.read_shift(2), s = e.read_shift(2), i = e.read_shift(2), c = e.read_shift(2), o = e.read_shift(2), f = e.read_shift(2);
  return {
    Pos: [a, r],
    Dim: [n, t],
    Flags: s,
    CurTab: i,
    FirstTab: c,
    Selected: o,
    TabRatio: f
  };
}
function io(e, a, r) {
  if (r && r.biff >= 2 && r.biff < 5) return {};
  var n = e.read_shift(2);
  return { RTL: n & 64 };
}
function co() {
}
function fo(e, a, r) {
  var n = {
    dyHeight: e.read_shift(2),
    fl: e.read_shift(2)
  };
  switch (r && r.biff || 8) {
    case 2:
      break;
    case 3:
    case 4:
      e.l += 2;
      break;
    default:
      e.l += 10;
      break;
  }
  return n.name = et(e, 0, r), n;
}
function oo(e) {
  var a = Br(e);
  return a.isst = e.read_shift(4), a;
}
function lo(e, a, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var n = e.l + a, t = Br(e);
  r.biff == 2 && e.l++;
  var s = rt(e, n - e.l, r);
  return t.val = s, t;
}
function uo(e, a, r) {
  var n = e.read_shift(2), t = da(e, 0, r);
  return [n, t];
}
var ho = da;
function xn(e, a, r) {
  var n = e.l + a, t = r.biff == 8 || !r.biff ? 4 : 2, s = e.read_shift(t), i = e.read_shift(t), c = e.read_shift(2), o = e.read_shift(2);
  return e.l = n, { s: { r: s, c }, e: { r: i, c: o } };
}
function xo(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = Ls(e);
  return { r: a, c: r, ixfe: n[0], rknum: n[1] };
}
function po(e, a) {
  for (var r = e.l + a - 2, n = e.read_shift(2), t = e.read_shift(2), s = []; e.l < r; ) s.push(Ls(e));
  if (e.l !== r) throw new Error("MulRK read error");
  var i = e.read_shift(2);
  if (s.length != i - t + 1) throw new Error("MulRK length mismatch");
  return { r: n, c: t, C: i, rkrec: s };
}
function vo(e, a) {
  for (var r = e.l + a - 2, n = e.read_shift(2), t = e.read_shift(2), s = []; e.l < r; ) s.push(e.read_shift(2));
  if (e.l !== r) throw new Error("MulBlank read error");
  var i = e.read_shift(2);
  if (s.length != i - t + 1) throw new Error("MulBlank length mismatch");
  return { r: n, c: t, C: i, ixfe: s };
}
function go(e, a, r, n) {
  var t = {}, s = e.read_shift(4), i = e.read_shift(4), c = e.read_shift(4), o = e.read_shift(2);
  return t.patternType = xf[c >> 26], n.cellStyles && (t.alc = s & 7, t.fWrap = s >> 3 & 1, t.alcV = s >> 4 & 7, t.fJustLast = s >> 7 & 1, t.trot = s >> 8 & 255, t.cIndent = s >> 16 & 15, t.fShrinkToFit = s >> 20 & 1, t.iReadOrder = s >> 22 & 2, t.fAtrNum = s >> 26 & 1, t.fAtrFnt = s >> 27 & 1, t.fAtrAlc = s >> 28 & 1, t.fAtrBdr = s >> 29 & 1, t.fAtrPat = s >> 30 & 1, t.fAtrProt = s >> 31 & 1, t.dgLeft = i & 15, t.dgRight = i >> 4 & 15, t.dgTop = i >> 8 & 15, t.dgBottom = i >> 12 & 15, t.icvLeft = i >> 16 & 127, t.icvRight = i >> 23 & 127, t.grbitDiag = i >> 30 & 3, t.icvTop = c & 127, t.icvBottom = c >> 7 & 127, t.icvDiag = c >> 14 & 127, t.dgDiag = c >> 21 & 15, t.icvFore = o & 127, t.icvBack = o >> 7 & 127, t.fsxButton = o >> 14 & 1), t;
}
function mo(e, a, r) {
  var n = {};
  return n.ifnt = e.read_shift(2), n.numFmtId = e.read_shift(2), n.flags = e.read_shift(2), n.fStyle = n.flags >> 2 & 1, a -= 6, n.data = go(e, a, n.fStyle, r), n;
}
function _o(e) {
  e.l += 4;
  var a = [e.read_shift(2), e.read_shift(2)];
  if (a[0] !== 0 && a[0]--, a[1] !== 0 && a[1]--, a[0] > 7 || a[1] > 7) throw new Error("Bad Gutters: " + a.join("|"));
  return a;
}
function dn(e, a, r) {
  var n = Br(e);
  (r.biff == 2 || a == 9) && ++e.l;
  var t = bf(e);
  return n.val = t, n.t = t === !0 || t === !1 ? "b" : "e", n;
}
function Eo(e, a, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var n = Br(e), t = ir(e);
  return n.val = t, n;
}
var pn = Vf;
function To(e, a, r) {
  var n = e.l + a, t = e.read_shift(2), s = e.read_shift(2);
  if (r.sbcch = s, s == 1025 || s == 14849) return [s, t];
  if (s < 1 || s > 255) throw new Error("Unexpected SupBook type: " + s);
  for (var i = fa(e, s), c = []; n > e.l; ) c.push(rt(e));
  return [s, t, i, c];
}
function vn(e, a, r) {
  var n = e.read_shift(2), t, s = {
    fBuiltIn: n & 1,
    fWantAdvise: n >>> 1 & 1,
    fWantPict: n >>> 2 & 1,
    fOle: n >>> 3 & 1,
    fOleLink: n >>> 4 & 1,
    cf: n >>> 5 & 1023,
    fIcon: n >>> 15 & 1
  };
  return r.sbcch === 14849 && (t = zf(e, a - 2, r)), s.body = t || e.read_shift(a - 2), typeof t == "string" && (s.Name = t), s;
}
var ko = [
  "_xlnm.Consolidate_Area",
  "_xlnm.Auto_Open",
  "_xlnm.Auto_Close",
  "_xlnm.Extract",
  "_xlnm.Database",
  "_xlnm.Criteria",
  "_xlnm.Print_Area",
  "_xlnm.Print_Titles",
  "_xlnm.Recorder",
  "_xlnm.Data_Form",
  "_xlnm.Auto_Activate",
  "_xlnm.Auto_Deactivate",
  "_xlnm.Sheet_Title",
  "_xlnm._FilterDatabase"
];
function gn(e, a, r) {
  var n = e.l + a, t = e.read_shift(2), s = e.read_shift(1), i = e.read_shift(1), c = e.read_shift(r && r.biff == 2 ? 1 : 2), o = 0;
  (!r || r.biff >= 5) && (r.biff != 5 && (e.l += 2), o = e.read_shift(2), r.biff == 5 && (e.l += 2), e.l += 4);
  var f = fa(e, i, r);
  t & 32 && (f = ko[f.charCodeAt(0)]);
  var l = n - e.l;
  r && r.biff == 2 && --l;
  var u = n == e.l || c === 0 || !(l > 0) ? [] : t1(e, l, r, c);
  return {
    chKey: s,
    Name: f,
    itab: o,
    rgce: u
  };
}
function Us(e, a, r) {
  if (r.biff < 8) return wo(e, a, r);
  for (var n = [], t = e.l + a, s = e.read_shift(r.biff > 8 ? 4 : 2); s-- !== 0; ) n.push(Gf(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != t) throw new Error("Bad ExternSheet: " + e.l + " != " + t);
  return n;
}
function wo(e, a, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = et(e, a, r);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function Ao(e, a, r) {
  if (r.biff < 8) {
    e.l += a;
    return;
  }
  var n = e.read_shift(2), t = e.read_shift(2), s = fa(e, n, r), i = fa(e, t, r);
  return [s, i];
}
function Fo(e, a, r) {
  var n = Ms(e);
  e.l++;
  var t = e.read_shift(1);
  return a -= 8, [n1(e, a, r), t, n];
}
function mn(e, a, r) {
  var n = Xf(e);
  switch (r.biff) {
    case 2:
      e.l++, a -= 7;
      break;
    case 3:
    case 4:
      e.l += 2, a -= 8;
      break;
    default:
      e.l += 6, a -= 12;
  }
  return [n, r1(e, a, r)];
}
function So(e) {
  var a = e.read_shift(4) !== 0, r = e.read_shift(4) !== 0, n = e.read_shift(4);
  return [a, r, n];
}
function Co(e, a, r) {
  if (!(r.biff < 8)) {
    var n = e.read_shift(2), t = e.read_shift(2), s = e.read_shift(2), i = e.read_shift(2), c = da(e, 0, r);
    return r.biff < 8 && e.read_shift(1), [{ r: n, c: t }, c, i, s];
  }
}
function yo(e, a, r) {
  return Co(e, a, r);
}
function Oo(e, a) {
  for (var r = [], n = e.read_shift(2); n--; ) r.push(Ot(e));
  return r;
}
function Do(e, a, r) {
  if (r && r.biff < 8) return Io(e, a, r);
  var n = Bs(e), t = jf(e, a - 22, n[1]);
  return { cmo: n, ft: t };
}
var Ro = {
  8: function(e, a) {
    var r = e.l + a;
    e.l += 10;
    var n = e.read_shift(2);
    e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
    var t = e.read_shift(1);
    return e.l += t, e.l = r, { fmt: n };
  }
};
function Io(e, a, r) {
  e.l += 4;
  var n = e.read_shift(2), t = e.read_shift(2), s = e.read_shift(2);
  e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, a -= 36;
  var i = [];
  return i.push((Ro[n] || or)(e, a, r)), { cmo: [t, n, s], ft: i };
}
function No(e, a, r) {
  var n = e.l, t = "";
  try {
    e.l += 4;
    var s = (r.lastobj || { cmo: [0, 0] }).cmo[1], i;
    [0, 5, 7, 11, 12, 14].indexOf(s) == -1 ? e.l += 6 : i = Lf(e, 6, r);
    var c = e.read_shift(2);
    e.read_shift(2), Xe(e, 2);
    var o = e.read_shift(2);
    e.l += o;
    for (var f = 1; f < e.lens.length - 1; ++f) {
      if (e.l - n != e.lens[f]) throw new Error("TxO: bad continue record");
      var l = e[e.l], u = fa(e, e.lens[f + 1] - e.lens[f] - 1);
      if (t += u, t.length >= (l ? c : 2 * c)) break;
    }
    if (t.length !== c && t.length !== c * 2)
      throw new Error("cchText: " + c + " != " + t.length);
    return e.l = n + a, { t };
  } catch {
    return e.l = n + a, { t };
  }
}
function bo(e, a) {
  var r = Ot(e);
  e.l += 16;
  var n = Hf(e, a - 24);
  return [r, n];
}
function Po(e, a) {
  e.read_shift(2);
  var r = Ot(e), n = e.read_shift((a - 10) / 2, "dbcs-cont");
  return n = n.replace(dr, ""), [r, n];
}
function Lo(e) {
  var a = [0, 0], r;
  return r = e.read_shift(2), a[0] = cn[r] || r, r = e.read_shift(2), a[1] = cn[r] || r, a;
}
function Mo(e) {
  for (var a = e.read_shift(2), r = []; a-- > 0; ) r.push(Ps(e));
  return r;
}
function Bo(e) {
  for (var a = e.read_shift(2), r = []; a-- > 0; ) r.push(Ps(e));
  return r;
}
function Uo(e) {
  e.l += 2;
  var a = { cxfs: 0, crc: 0 };
  return a.cxfs = e.read_shift(2), a.crc = e.read_shift(4), a;
}
function Hs(e, a, r) {
  if (!r.cellStyles) return or(e, a);
  var n = r && r.biff >= 12 ? 4 : 2, t = e.read_shift(n), s = e.read_shift(n), i = e.read_shift(n), c = e.read_shift(n), o = e.read_shift(2);
  n == 2 && (e.l += 2);
  var f = { s: t, e: s, w: i, ixfe: c, flags: o };
  return (r.biff >= 5 || !r.biff) && (f.level = o >> 8 & 7), f;
}
function Ho(e, a) {
  var r = {};
  return a < 32 || (e.l += 16, r.header = ir(e), r.footer = ir(e), e.l += 2), r;
}
function Wo(e, a, r) {
  var n = { area: !1 };
  if (r.biff != 5)
    return e.l += a, n;
  var t = e.read_shift(1);
  return e.l += 3, t & 16 && (n.area = !0), n;
}
var Vo = Br, Go = Ns, zo = rt;
function Xo(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(4), t = { fmt: a, env: r, len: n, data: e.slice(e.l, e.l + n) };
  return e.l += n, t;
}
function $o(e, a, r) {
  r.biffguess && r.biff == 5 && (r.biff = 2);
  var n = Br(e);
  ++e.l;
  var t = da(e, a - 7, r);
  return n.t = "str", n.val = t, n;
}
function Ko(e) {
  var a = Br(e);
  ++e.l;
  var r = ir(e);
  return a.t = "n", a.val = r, a;
}
function Yo(e) {
  var a = Br(e);
  ++e.l;
  var r = e.read_shift(2);
  return a.t = "n", a.val = r, a;
}
function jo(e) {
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, "sbcs-cont");
}
function Jo(e, a) {
  e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += a - 13;
}
function qo(e, a, r) {
  var n = e.l + a, t = Br(e), s = e.read_shift(2), i = fa(e, s, r);
  return e.l = n, t.t = "str", t.val = i, t;
}
var Zo = [2, 3, 48, 49, 131, 139, 140, 245], _n = /* @__PURE__ */ (function() {
  var e = {
    /* Code Pages Supported by Visual FoxPro */
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /* shapefile DBF extension */
    /*::[*/
    0: 20127,
    /*::[*/
    8: 865,
    /*::[*/
    9: 437,
    /*::[*/
    10: 850,
    /*::[*/
    11: 437,
    /*::[*/
    13: 437,
    /*::[*/
    14: 850,
    /*::[*/
    15: 437,
    /*::[*/
    16: 850,
    /*::[*/
    17: 437,
    /*::[*/
    18: 850,
    /*::[*/
    19: 932,
    /*::[*/
    20: 850,
    /*::[*/
    21: 437,
    /*::[*/
    22: 850,
    /*::[*/
    23: 865,
    /*::[*/
    24: 437,
    /*::[*/
    25: 437,
    /*::[*/
    26: 850,
    /*::[*/
    27: 437,
    /*::[*/
    28: 863,
    /*::[*/
    29: 850,
    /*::[*/
    31: 852,
    /*::[*/
    34: 852,
    /*::[*/
    35: 852,
    /*::[*/
    36: 860,
    /*::[*/
    37: 850,
    /*::[*/
    38: 866,
    /*::[*/
    55: 850,
    /*::[*/
    64: 852,
    /*::[*/
    77: 936,
    /*::[*/
    78: 949,
    /*::[*/
    79: 950,
    /*::[*/
    80: 874,
    /*::[*/
    87: 1252,
    /*::[*/
    88: 1252,
    /*::[*/
    89: 1252,
    /*::[*/
    108: 863,
    /*::[*/
    134: 737,
    /*::[*/
    135: 852,
    /*::[*/
    136: 857,
    /*::[*/
    204: 1257,
    /*::[*/
    255: 16969
  }, a = c0({
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /*::[*/
    0: 20127
  });
  function r(c, o) {
    var f = [], l = qr(1);
    switch (o.type) {
      case "base64":
        l = Or(Tr(c));
        break;
      case "binary":
        l = Or(c);
        break;
      case "buffer":
      case "array":
        l = c;
        break;
    }
    Ze(l, 0);
    var u = l.read_shift(1), x = !!(u & 136), d = !1, p = !1;
    switch (u) {
      case 2:
        break;
      // dBASE II
      case 3:
        break;
      // dBASE III
      case 48:
        d = !0, x = !0;
        break;
      // VFP
      case 49:
        d = !0, x = !0;
        break;
      // VFP with autoincrement
      // 0x43 dBASE IV SQL table files
      // 0x63 dBASE IV SQL system files
      case 131:
        break;
      // dBASE III with memo
      case 139:
        break;
      // dBASE IV with memo
      case 140:
        p = !0;
        break;
      // dBASE Level 7 with memo
      // case 0xCB dBASE IV SQL table files with memo
      case 245:
        break;
      // FoxPro 2.x with memo
      // case 0xFB FoxBASE
      default:
        throw new Error("DBF Unsupported Version: " + u.toString(16));
    }
    var h = 0, g = 521;
    u == 2 && (h = l.read_shift(2)), l.l += 3, u != 2 && (h = l.read_shift(4)), h > 1048576 && (h = 1e6), u != 2 && (g = l.read_shift(2));
    var O = l.read_shift(2), I = o.codepage || 1252;
    u != 2 && (l.l += 16, l.read_shift(1), l[l.l] !== 0 && (I = e[l[l.l]]), l.l += 1, l.l += 2), p && (l.l += 36);
    for (var T = [], U = {}, V = Math.min(l.length, u == 2 ? 521 : g - 10 - (d ? 264 : 0)), B = p ? 32 : 11; l.l < V && l[l.l] != 13; )
      switch (U = {}, U.name = Ga.utils.decode(I, l.slice(l.l, l.l + B)).replace(/[\u0000\r\n].*$/g, ""), l.l += B, U.type = String.fromCharCode(l.read_shift(1)), u != 2 && !p && (U.offset = l.read_shift(4)), U.len = l.read_shift(1), u == 2 && (U.offset = l.read_shift(2)), U.dec = l.read_shift(1), U.name.length && T.push(U), u != 2 && (l.l += p ? 13 : 14), U.type) {
        case "B":
          (!d || U.len != 8) && o.WTF && console.log("Skipping " + U.name + ":" + U.type);
          break;
        case "G":
        // General (FoxPro and dBASE L7)
        case "P":
          o.WTF && console.log("Skipping " + U.name + ":" + U.type);
          break;
        case "+":
        // Autoincrement (dBASE L7 only)
        case "0":
        // _NullFlags (VFP only)
        case "@":
        // Timestamp (dBASE L7 only)
        case "C":
        // Character (dBASE II)
        case "D":
        // Date (dBASE III)
        case "F":
        // Float (dBASE IV)
        case "I":
        // Long (VFP and dBASE L7)
        case "L":
        // Logical (dBASE II)
        case "M":
        // Memo (dBASE III)
        case "N":
        // Number (dBASE II)
        case "O":
        // Double (dBASE L7 only)
        case "T":
        // Datetime (VFP only)
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + U.type);
      }
    if (l[l.l] !== 13 && (l.l = g - 1), l.read_shift(1) !== 13) throw new Error("DBF Terminator not found " + l.l + " " + l[l.l]);
    l.l = g;
    var A = 0, _ = 0;
    for (f[0] = [], _ = 0; _ != T.length; ++_) f[0][_] = T[_].name;
    for (; h-- > 0; ) {
      if (l[l.l] === 42) {
        l.l += O;
        continue;
      }
      for (++l.l, f[++A] = [], _ = 0, _ = 0; _ != T.length; ++_) {
        var m = l.slice(l.l, l.l + T[_].len);
        l.l += T[_].len, Ze(m, 0);
        var R = Ga.utils.decode(I, m);
        switch (T[_].type) {
          case "C":
            R.trim().length && (f[A][_] = R.replace(/\s+$/, ""));
            break;
          case "D":
            R.length === 8 ? f[A][_] = new Date(+R.slice(0, 4), +R.slice(4, 6) - 1, +R.slice(6, 8)) : f[A][_] = R;
            break;
          case "F":
            f[A][_] = parseFloat(R.trim());
            break;
          case "+":
          case "I":
            f[A][_] = p ? m.read_shift(-4, "i") ^ 2147483648 : m.read_shift(4, "i");
            break;
          case "L":
            switch (R.trim().toUpperCase()) {
              case "Y":
              case "T":
                f[A][_] = !0;
                break;
              case "N":
              case "F":
                f[A][_] = !1;
                break;
              case "":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + R + "|");
            }
            break;
          case "M":
            if (!x) throw new Error("DBF Unexpected MEMO for type " + u.toString(16));
            f[A][_] = "##MEMO##" + (p ? parseInt(R.trim(), 10) : m.read_shift(4));
            break;
          case "N":
            R = R.replace(/\u0000/g, "").trim(), R && R != "." && (f[A][_] = +R || 0);
            break;
          case "@":
            f[A][_] = new Date(m.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            f[A][_] = new Date((m.read_shift(4) - 2440588) * 864e5 + m.read_shift(4));
            break;
          case "Y":
            f[A][_] = m.read_shift(4, "i") / 1e4 + m.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            f[A][_] = -m.read_shift(-8, "f");
            break;
          case "B":
            if (d && T[_].len == 8) {
              f[A][_] = m.read_shift(8, "f");
              break;
            }
          /* falls through */
          case "G":
          case "P":
            m.l += T[_].len;
            break;
          case "0":
            if (T[_].name === "_NullFlags") break;
          /* falls through */
          default:
            throw new Error("DBF Unsupported data type " + T[_].type);
        }
      }
    }
    if (u != 2 && l.l < l.length && l[l.l++] != 26) throw new Error("DBF EOF Marker missing " + (l.l - 1) + " of " + l.length + " " + l[l.l - 1].toString(16));
    return o && o.sheetRows && (f = f.slice(0, o.sheetRows)), o.DBF = T, f;
  }
  function n(c, o) {
    var f = o || {};
    f.dateNF || (f.dateNF = "yyyymmdd");
    var l = Fa(r(c, f), f);
    return l["!cols"] = f.DBF.map(function(u) {
      return {
        wch: u.len,
        DBF: u
      };
    }), delete f.DBF, l;
  }
  function t(c, o) {
    try {
      return ea(n(c, o), o);
    } catch (f) {
      if (o && o.WTF) throw f;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var s = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function i(c, o) {
    var f = o || {};
    if (+f.codepage >= 0 && Dr(+f.codepage), f.type == "string") throw new Error("Cannot write DBF to JS string");
    var l = Xt(), u = r0(c, { header: 1, raw: !0, cellDates: !0 }), x = u[0], d = u.slice(1), p = c["!cols"] || [], h = 0, g = 0, O = 0, I = 1;
    for (h = 0; h < x.length; ++h) {
      if (((p[h] || {}).DBF || {}).name) {
        x[h] = p[h].DBF.name, ++O;
        continue;
      }
      if (x[h] != null) {
        if (++O, typeof x[h] == "number" && (x[h] = x[h].toString(10)), typeof x[h] != "string") throw new Error("DBF Invalid column name " + x[h] + " |" + typeof x[h] + "|");
        if (x.indexOf(x[h]) !== h) {
          for (g = 0; g < 1024; ++g)
            if (x.indexOf(x[h] + "_" + g) == -1) {
              x[h] += "_" + g;
              break;
            }
        }
      }
    }
    var T = Ue(c["!ref"]), U = [], V = [], B = [];
    for (h = 0; h <= T.e.c - T.s.c; ++h) {
      var A = "", _ = "", m = 0, R = [];
      for (g = 0; g < d.length; ++g)
        d[g][h] != null && R.push(d[g][h]);
      if (R.length == 0 || x[h] == null) {
        U[h] = "?";
        continue;
      }
      for (g = 0; g < R.length; ++g) {
        switch (typeof R[g]) {
          /* TODO: check if L2 compat is desired */
          case "number":
            _ = "B";
            break;
          case "string":
            _ = "C";
            break;
          case "boolean":
            _ = "L";
            break;
          case "object":
            _ = R[g] instanceof Date ? "D" : "C";
            break;
          default:
            _ = "C";
        }
        m = Math.max(m, String(R[g]).length), A = A && A != _ ? "C" : _;
      }
      m > 250 && (m = 250), _ = ((p[h] || {}).DBF || {}).type, _ == "C" && p[h].DBF.len > m && (m = p[h].DBF.len), A == "B" && _ == "N" && (A = "N", B[h] = p[h].DBF.dec, m = p[h].DBF.len), V[h] = A == "C" || _ == "N" ? m : s[A] || 0, I += V[h], U[h] = A;
    }
    var P = l.next(32);
    for (P.write_shift(4, 318902576), P.write_shift(4, d.length), P.write_shift(2, 296 + 32 * O), P.write_shift(2, I), h = 0; h < 4; ++h) P.write_shift(4, 0);
    for (P.write_shift(4, 0 | (+a[
      /*::String(*/
      Un
      /*::)*/
    ] || 3) << 8), h = 0, g = 0; h < x.length; ++h)
      if (x[h] != null) {
        var D = l.next(32), X = (x[h].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
        D.write_shift(1, X, "sbcs"), D.write_shift(1, U[h] == "?" ? "C" : U[h], "sbcs"), D.write_shift(4, g), D.write_shift(1, V[h] || s[U[h]] || 0), D.write_shift(1, B[h] || 0), D.write_shift(1, 2), D.write_shift(4, 0), D.write_shift(1, 0), D.write_shift(4, 0), D.write_shift(4, 0), g += V[h] || s[U[h]] || 0;
      }
    var se = l.next(264);
    for (se.write_shift(4, 13), h = 0; h < 65; ++h) se.write_shift(4, 0);
    for (h = 0; h < d.length; ++h) {
      var re = l.next(I);
      for (re.write_shift(1, 0), g = 0; g < x.length; ++g)
        if (x[g] != null)
          switch (U[g]) {
            case "L":
              re.write_shift(1, d[h][g] == null ? 63 : d[h][g] ? 84 : 70);
              break;
            case "B":
              re.write_shift(8, d[h][g] || 0, "f");
              break;
            case "N":
              var fe = "0";
              for (typeof d[h][g] == "number" && (fe = d[h][g].toFixed(B[g] || 0)), O = 0; O < V[g] - fe.length; ++O) re.write_shift(1, 32);
              re.write_shift(1, fe, "sbcs");
              break;
            case "D":
              d[h][g] ? (re.write_shift(4, ("0000" + d[h][g].getFullYear()).slice(-4), "sbcs"), re.write_shift(2, ("00" + (d[h][g].getMonth() + 1)).slice(-2), "sbcs"), re.write_shift(2, ("00" + d[h][g].getDate()).slice(-2), "sbcs")) : re.write_shift(8, "00000000", "sbcs");
              break;
            case "C":
              var q = String(d[h][g] != null ? d[h][g] : "").slice(0, V[g]);
              for (re.write_shift(1, q, "sbcs"), O = 0; O < V[g] - q.length; ++O) re.write_shift(1, 32);
              break;
          }
    }
    return l.next(1).write_shift(1, 26), l.end();
  }
  return {
    to_workbook: t,
    to_sheet: n,
    from_sheet: i
  };
})(), Qo = /* @__PURE__ */ (function() {
  var e = {
    AA: "À",
    BA: "Á",
    CA: "Â",
    DA: 195,
    HA: "Ä",
    JA: 197,
    AE: "È",
    BE: "É",
    CE: "Ê",
    HE: "Ë",
    AI: "Ì",
    BI: "Í",
    CI: "Î",
    HI: "Ï",
    AO: "Ò",
    BO: "Ó",
    CO: "Ô",
    DO: 213,
    HO: "Ö",
    AU: "Ù",
    BU: "Ú",
    CU: "Û",
    HU: "Ü",
    Aa: "à",
    Ba: "á",
    Ca: "â",
    Da: 227,
    Ha: "ä",
    Ja: 229,
    Ae: "è",
    Be: "é",
    Ce: "ê",
    He: "ë",
    Ai: "ì",
    Bi: "í",
    Ci: "î",
    Hi: "ï",
    Ao: "ò",
    Bo: "ó",
    Co: "ô",
    Do: 245,
    Ho: "ö",
    Au: "ù",
    Bu: "ú",
    Cu: "û",
    Hu: "ü",
    KC: "Ç",
    Kc: "ç",
    q: "æ",
    z: "œ",
    a: "Æ",
    j: "Œ",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    /*::[*/
    0: 176,
    /*::[*/
    1: 177,
    /*::[*/
    2: 178,
    /*::[*/
    3: 179,
    /*::[*/
    5: 181,
    /*::[*/
    6: 182,
    /*::[*/
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  }, a = new RegExp("\x1BN(" + Lr(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"), r = function(x, d) {
    var p = e[d];
    return typeof p == "number" ? b0(p) : p;
  }, n = function(x, d, p) {
    var h = d.charCodeAt(0) - 32 << 4 | p.charCodeAt(0) - 48;
    return h == 59 ? x : b0(h);
  };
  e["|"] = 254;
  function t(x, d) {
    switch (d.type) {
      case "base64":
        return s(Tr(x), d);
      case "binary":
        return s(x, d);
      case "buffer":
        return s(Ae && Buffer.isBuffer(x) ? x.toString("binary") : la(x), d);
      case "array":
        return s(ca(x), d);
    }
    throw new Error("Unrecognized type " + d.type);
  }
  function s(x, d) {
    var p = x.split(/[\n\r]+/), h = -1, g = -1, O = 0, I = 0, T = [], U = [], V = null, B = {}, A = [], _ = [], m = [], R = 0, P;
    for (+d.codepage >= 0 && Dr(+d.codepage); O !== p.length; ++O) {
      R = 0;
      var D = p[O].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n).replace(a, r), X = D.replace(/;;/g, "\0").split(";").map(function(N) {
        return N.replace(/\u0000/g, ";");
      }), se = X[0], re;
      if (D.length > 0) switch (se) {
        case "ID":
          break;
        /* header */
        case "E":
          break;
        /* EOF */
        case "B":
          break;
        /* dimensions */
        case "O":
          break;
        /* options? */
        case "W":
          break;
        /* window? */
        case "P":
          X[1].charAt(0) == "P" && U.push(D.slice(3).replace(/;;/g, ";"));
          break;
        case "C":
          var fe = !1, q = !1, ve = !1, M = !1, he = -1, te = -1;
          for (I = 1; I < X.length; ++I) switch (X[I].charAt(0)) {
            case "A":
              break;
            // TODO: comment
            case "X":
              g = parseInt(X[I].slice(1)) - 1, q = !0;
              break;
            case "Y":
              for (h = parseInt(X[I].slice(1)) - 1, q || (g = 0), P = T.length; P <= h; ++P) T[P] = [];
              break;
            case "K":
              re = X[I].slice(1), re.charAt(0) === '"' ? re = re.slice(1, re.length - 1) : re === "TRUE" ? re = !0 : re === "FALSE" ? re = !1 : isNaN(Ir(re)) ? isNaN(Ta(re).getDate()) || (re = qe(re)) : (re = Ir(re), V !== null && wa(V) && (re = yt(re))), fe = !0;
              break;
            case "E":
              M = !0;
              var w = _a(X[I].slice(1), { r: h, c: g });
              T[h][g] = [T[h][g], w];
              break;
            case "S":
              ve = !0, T[h][g] = [T[h][g], "S5S"];
              break;
            case "G":
              break;
            // unknown
            case "R":
              he = parseInt(X[I].slice(1)) - 1;
              break;
            case "C":
              te = parseInt(X[I].slice(1)) - 1;
              break;
            default:
              if (d && d.WTF) throw new Error("SYLK bad record " + D);
          }
          if (fe && (T[h][g] && T[h][g].length == 2 ? T[h][g][0] = re : T[h][g] = re, V = null), ve) {
            if (M) throw new Error("SYLK shared formula cannot have own formula");
            var b = he > -1 && T[he][te];
            if (!b || !b[1]) throw new Error("SYLK shared formula cannot find base");
            T[h][g][1] = Js(b[1], { r: h - he, c: g - te });
          }
          break;
        case "F":
          var L = 0;
          for (I = 1; I < X.length; ++I) switch (X[I].charAt(0)) {
            case "X":
              g = parseInt(X[I].slice(1)) - 1, ++L;
              break;
            case "Y":
              for (h = parseInt(X[I].slice(1)) - 1, P = T.length; P <= h; ++P) T[P] = [];
              break;
            case "M":
              R = parseInt(X[I].slice(1)) / 20;
              break;
            case "F":
              break;
            /* ??? */
            case "G":
              break;
            /* hide grid */
            case "P":
              V = U[parseInt(X[I].slice(1))];
              break;
            case "S":
              break;
            /* cell style */
            case "D":
              break;
            /* column */
            case "N":
              break;
            /* font */
            case "W":
              for (m = X[I].slice(1).split(" "), P = parseInt(m[0], 10); P <= parseInt(m[1], 10); ++P)
                R = parseInt(m[2], 10), _[P - 1] = R === 0 ? { hidden: !0 } : { wch: R }, ka(_[P - 1]);
              break;
            case "C":
              g = parseInt(X[I].slice(1)) - 1, _[g] || (_[g] = {});
              break;
            case "R":
              h = parseInt(X[I].slice(1)) - 1, A[h] || (A[h] = {}), R > 0 ? (A[h].hpt = R, A[h].hpx = ja(R)) : R === 0 && (A[h].hidden = !0);
              break;
            default:
              if (d && d.WTF) throw new Error("SYLK bad record " + D);
          }
          L < 1 && (V = null);
          break;
        default:
          if (d && d.WTF) throw new Error("SYLK bad record " + D);
      }
    }
    return A.length > 0 && (B["!rows"] = A), _.length > 0 && (B["!cols"] = _), d && d.sheetRows && (T = T.slice(0, d.sheetRows)), [T, B];
  }
  function i(x, d) {
    var p = t(x, d), h = p[0], g = p[1], O = Fa(h, d);
    return Lr(g).forEach(function(I) {
      O[I] = g[I];
    }), O;
  }
  function c(x, d) {
    return ea(i(x, d), d);
  }
  function o(x, d, p, h) {
    var g = "C;Y" + (p + 1) + ";X" + (h + 1) + ";K";
    switch (x.t) {
      case "n":
        g += x.v || 0, x.f && !x.F && (g += ";E" + Uu(x.f, { r: p, c: h }));
        break;
      case "b":
        g += x.v ? "TRUE" : "FALSE";
        break;
      case "e":
        g += x.w || x.v;
        break;
      case "d":
        g += '"' + (x.w || x.v) + '"';
        break;
      case "s":
        g += '"' + x.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return g;
  }
  function f(x, d) {
    d.forEach(function(p, h) {
      var g = "F;W" + (h + 1) + " " + (h + 1) + " ";
      p.hidden ? g += "0" : (typeof p.width == "number" && !p.wpx && (p.wpx = Ft(p.width)), typeof p.wpx == "number" && !p.wch && (p.wch = St(p.wpx)), typeof p.wch == "number" && (g += Math.round(p.wch))), g.charAt(g.length - 1) != " " && x.push(g);
    });
  }
  function l(x, d) {
    d.forEach(function(p, h) {
      var g = "F;";
      p.hidden ? g += "M0;" : p.hpt ? g += "M" + 20 * p.hpt + ";" : p.hpx && (g += "M" + 20 * Ks(p.hpx) + ";"), g.length > 2 && x.push(g + "R" + (h + 1));
    });
  }
  function u(x, d) {
    var p = ["ID;PWXL;N;E"], h = [], g = Ue(x["!ref"]), O, I = Array.isArray(x), T = `\r
`;
    p.push("P;PGeneral"), p.push("F;P0;DG0G8;M255"), x["!cols"] && f(p, x["!cols"]), x["!rows"] && l(p, x["!rows"]), p.push("B;Y" + (g.e.r - g.s.r + 1) + ";X" + (g.e.c - g.s.c + 1) + ";D" + [g.s.c, g.s.r, g.e.c, g.e.r].join(" "));
    for (var U = g.s.r; U <= g.e.r; ++U)
      for (var V = g.s.c; V <= g.e.c; ++V) {
        var B = me({ r: U, c: V });
        O = I ? (x[U] || [])[V] : x[B], !(!O || O.v == null && (!O.f || O.F)) && h.push(o(O, x, U, V));
      }
    return p.join(T) + T + h.join(T) + T + "E" + T;
  }
  return {
    to_workbook: c,
    to_sheet: i,
    from_sheet: u
  };
})(), el = /* @__PURE__ */ (function() {
  function e(s, i) {
    switch (i.type) {
      case "base64":
        return a(Tr(s), i);
      case "binary":
        return a(s, i);
      case "buffer":
        return a(Ae && Buffer.isBuffer(s) ? s.toString("binary") : la(s), i);
      case "array":
        return a(ca(s), i);
    }
    throw new Error("Unrecognized type " + i.type);
  }
  function a(s, i) {
    for (var c = s.split(`
`), o = -1, f = -1, l = 0, u = []; l !== c.length; ++l) {
      if (c[l].trim() === "BOT") {
        u[++o] = [], f = 0;
        continue;
      }
      if (!(o < 0)) {
        var x = c[l].trim().split(","), d = x[0], p = x[1];
        ++l;
        for (var h = c[l] || ""; (h.match(/["]/g) || []).length & 1 && l < c.length - 1; ) h += `
` + c[++l];
        switch (h = h.trim(), +d) {
          case -1:
            if (h === "BOT") {
              u[++o] = [], f = 0;
              continue;
            } else if (h !== "EOD") throw new Error("Unrecognized DIF special command " + h);
            break;
          case 0:
            h === "TRUE" ? u[o][f] = !0 : h === "FALSE" ? u[o][f] = !1 : isNaN(Ir(p)) ? isNaN(Ta(p).getDate()) ? u[o][f] = p : u[o][f] = qe(p) : u[o][f] = Ir(p), ++f;
            break;
          case 1:
            h = h.slice(1, h.length - 1), h = h.replace(/""/g, '"'), h && h.match(/^=".*"$/) && (h = h.slice(2, -1)), u[o][f++] = h !== "" ? h : null;
            break;
        }
        if (h === "EOD") break;
      }
    }
    return i && i.sheetRows && (u = u.slice(0, i.sheetRows)), u;
  }
  function r(s, i) {
    return Fa(e(s, i), i);
  }
  function n(s, i) {
    return ea(r(s, i), i);
  }
  var t = /* @__PURE__ */ (function() {
    var s = function(o, f, l, u, x) {
      o.push(f), o.push(l + "," + u), o.push('"' + x.replace(/"/g, '""') + '"');
    }, i = function(o, f, l, u) {
      o.push(f + "," + l), o.push(f == 1 ? '"' + u.replace(/"/g, '""') + '"' : u);
    };
    return function(o) {
      var f = [], l = Ue(o["!ref"]), u, x = Array.isArray(o);
      s(f, "TABLE", 0, 1, "sheetjs"), s(f, "VECTORS", 0, l.e.r - l.s.r + 1, ""), s(f, "TUPLES", 0, l.e.c - l.s.c + 1, ""), s(f, "DATA", 0, 0, "");
      for (var d = l.s.r; d <= l.e.r; ++d) {
        i(f, -1, 0, "BOT");
        for (var p = l.s.c; p <= l.e.c; ++p) {
          var h = me({ r: d, c: p });
          if (u = x ? (o[d] || [])[p] : o[h], !u) {
            i(f, 1, 0, "");
            continue;
          }
          switch (u.t) {
            case "n":
              var g = u.w;
              !g && u.v != null && (g = u.v), g == null ? u.f && !u.F ? i(f, 1, 0, "=" + u.f) : i(f, 1, 0, "") : i(f, 0, g, "V");
              break;
            case "b":
              i(f, 0, u.v ? 1 : 0, u.v ? "TRUE" : "FALSE");
              break;
            case "s":
              i(f, 1, 0, isNaN(u.v) ? u.v : '="' + u.v + '"');
              break;
            case "d":
              u.w || (u.w = Fr(u.z || Ee[14], pr(qe(u.v)))), i(f, 0, u.w, "V");
              break;
            default:
              i(f, 1, 0, "");
          }
        }
      }
      i(f, -1, 0, "EOD");
      var O = `\r
`, I = f.join(O);
      return I;
    };
  })();
  return {
    to_workbook: n,
    to_sheet: r,
    from_sheet: t
  };
})(), rl = /* @__PURE__ */ (function() {
  function e(u) {
    return u.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function a(u) {
    return u.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(u, x) {
    for (var d = u.split(`
`), p = -1, h = -1, g = 0, O = []; g !== d.length; ++g) {
      var I = d[g].trim().split(":");
      if (I[0] === "cell") {
        var T = xr(I[1]);
        if (O.length <= T.r) for (p = O.length; p <= T.r; ++p) O[p] || (O[p] = []);
        switch (p = T.r, h = T.c, I[2]) {
          case "t":
            O[p][h] = e(I[3]);
            break;
          case "v":
            O[p][h] = +I[3];
            break;
          case "vtf":
            var U = I[I.length - 1];
          /* falls through */
          case "vtc":
            I[3] === "nl" ? O[p][h] = !!+I[4] : O[p][h] = +I[4], I[2] == "vtf" && (O[p][h] = [O[p][h], U]);
        }
      }
    }
    return x && x.sheetRows && (O = O.slice(0, x.sheetRows)), O;
  }
  function n(u, x) {
    return Fa(r(u, x), x);
  }
  function t(u, x) {
    return ea(n(u, x), x);
  }
  var s = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join(`
`), i = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join(`
`) + `
`, c = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join(`
`), o = "--SocialCalcSpreadsheetControlSave--";
  function f(u) {
    if (!u || !u["!ref"]) return "";
    for (var x = [], d = [], p, h = "", g = Aa(u["!ref"]), O = Array.isArray(u), I = g.s.r; I <= g.e.r; ++I)
      for (var T = g.s.c; T <= g.e.c; ++T)
        if (h = me({ r: I, c: T }), p = O ? (u[I] || [])[T] : u[h], !(!p || p.v == null || p.t === "z")) {
          switch (d = ["cell", h, "t"], p.t) {
            case "s":
            case "str":
              d.push(a(p.v));
              break;
            case "n":
              p.f ? (d[2] = "vtf", d[3] = "n", d[4] = p.v, d[5] = a(p.f)) : (d[2] = "v", d[3] = p.v);
              break;
            case "b":
              d[2] = "vt" + (p.f ? "f" : "c"), d[3] = "nl", d[4] = p.v ? "1" : "0", d[5] = a(p.f || (p.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var U = pr(qe(p.v));
              d[2] = "vtc", d[3] = "nd", d[4] = "" + U, d[5] = p.w || Fr(p.z || Ee[14], U);
              break;
            case "e":
              continue;
          }
          x.push(d.join(":"));
        }
    return x.push("sheet:c:" + (g.e.c - g.s.c + 1) + ":r:" + (g.e.r - g.s.r + 1) + ":tvf:1"), x.push("valueformat:1:text-wiki"), x.join(`
`);
  }
  function l(u) {
    return [s, i, c, i, f(u), o].join(`
`);
  }
  return {
    to_workbook: t,
    to_sheet: n,
    from_sheet: l
  };
})(), Ka = /* @__PURE__ */ (function() {
  function e(l, u, x, d, p) {
    p.raw ? u[x][d] = l : l === "" || (l === "TRUE" ? u[x][d] = !0 : l === "FALSE" ? u[x][d] = !1 : isNaN(Ir(l)) ? isNaN(Ta(l).getDate()) ? u[x][d] = l : u[x][d] = qe(l) : u[x][d] = Ir(l));
  }
  function a(l, u) {
    var x = u || {}, d = [];
    if (!l || l.length === 0) return d;
    for (var p = l.split(/[\r\n]/), h = p.length - 1; h >= 0 && p[h].length === 0; ) --h;
    for (var g = 10, O = 0, I = 0; I <= h; ++I)
      O = p[I].indexOf(" "), O == -1 ? O = p[I].length : O++, g = Math.max(g, O);
    for (I = 0; I <= h; ++I) {
      d[I] = [];
      var T = 0;
      for (e(p[I].slice(0, g).trim(), d, I, T, x), T = 1; T <= (p[I].length - g) / 10 + 1; ++T)
        e(p[I].slice(g + (T - 1) * 10, g + T * 10).trim(), d, I, T, x);
    }
    return x.sheetRows && (d = d.slice(0, x.sheetRows)), d;
  }
  var r = {
    /*::[*/
    44: ",",
    /*::[*/
    9: "	",
    /*::[*/
    59: ";",
    /*::[*/
    124: "|"
  }, n = {
    /*::[*/
    44: 3,
    /*::[*/
    9: 2,
    /*::[*/
    59: 1,
    /*::[*/
    124: 0
  };
  function t(l) {
    for (var u = {}, x = !1, d = 0, p = 0; d < l.length; ++d)
      (p = l.charCodeAt(d)) == 34 ? x = !x : !x && p in r && (u[p] = (u[p] || 0) + 1);
    p = [];
    for (d in u) Object.prototype.hasOwnProperty.call(u, d) && p.push([u[d], d]);
    if (!p.length) {
      u = n;
      for (d in u) Object.prototype.hasOwnProperty.call(u, d) && p.push([u[d], d]);
    }
    return p.sort(function(h, g) {
      return h[0] - g[0] || n[h[1]] - n[g[1]];
    }), r[p.pop()[1]] || 44;
  }
  function s(l, u) {
    var x = u || {}, d = "", p = x.dense ? [] : {}, h = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    l.slice(0, 4) == "sep=" ? l.charCodeAt(5) == 13 && l.charCodeAt(6) == 10 ? (d = l.charAt(4), l = l.slice(7)) : l.charCodeAt(5) == 13 || l.charCodeAt(5) == 10 ? (d = l.charAt(4), l = l.slice(6)) : d = t(l.slice(0, 1024)) : x && x.FS ? d = x.FS : d = t(l.slice(0, 1024));
    var g = 0, O = 0, I = 0, T = 0, U = 0, V = d.charCodeAt(0), B = !1, A = 0, _ = l.charCodeAt(0);
    l = l.replace(/\r\n/mg, `
`);
    var m = x.dateNF != null ? lc(x.dateNF) : null;
    function R() {
      var P = l.slice(T, U), D = {};
      if (P.charAt(0) == '"' && P.charAt(P.length - 1) == '"' && (P = P.slice(1, -1).replace(/""/g, '"')), P.length === 0) D.t = "z";
      else if (x.raw)
        D.t = "s", D.v = P;
      else if (P.trim().length === 0)
        D.t = "s", D.v = P;
      else if (P.charCodeAt(0) == 61)
        P.charCodeAt(1) == 34 && P.charCodeAt(P.length - 1) == 34 ? (D.t = "s", D.v = P.slice(2, -1).replace(/""/g, '"')) : Wu(P) ? (D.t = "n", D.f = P.slice(1)) : (D.t = "s", D.v = P);
      else if (P == "TRUE")
        D.t = "b", D.v = !0;
      else if (P == "FALSE")
        D.t = "b", D.v = !1;
      else if (!isNaN(I = Ir(P)))
        D.t = "n", x.cellText !== !1 && (D.w = P), D.v = I;
      else if (!isNaN(Ta(P).getDate()) || m && P.match(m)) {
        D.z = x.dateNF || Ee[14];
        var X = 0;
        m && P.match(m) && (P = uc(P, x.dateNF, P.match(m) || []), X = 1), x.cellDates ? (D.t = "d", D.v = qe(P, X)) : (D.t = "n", D.v = pr(qe(P, X))), x.cellText !== !1 && (D.w = Fr(D.z, D.v instanceof Date ? pr(D.v) : D.v)), x.cellNF || delete D.z;
      } else
        D.t = "s", D.v = P;
      if (D.t == "z" || (x.dense ? (p[g] || (p[g] = []), p[g][O] = D) : p[me({ c: O, r: g })] = D), T = U + 1, _ = l.charCodeAt(T), h.e.c < O && (h.e.c = O), h.e.r < g && (h.e.r = g), A == V) ++O;
      else if (O = 0, ++g, x.sheetRows && x.sheetRows <= g) return !0;
    }
    e: for (; U < l.length; ++U) switch (A = l.charCodeAt(U)) {
      case 34:
        _ === 34 && (B = !B);
        break;
      case V:
      case 10:
      case 13:
        if (!B && R()) break e;
        break;
    }
    return U - T > 0 && R(), p["!ref"] = Se(h), p;
  }
  function i(l, u) {
    return !(u && u.PRN) || u.FS || l.slice(0, 4) == "sep=" || l.indexOf("	") >= 0 || l.indexOf(",") >= 0 || l.indexOf(";") >= 0 ? s(l, u) : Fa(a(l, u), u);
  }
  function c(l, u) {
    var x = "", d = u.type == "string" ? [0, 0, 0, 0] : S0(l, u);
    switch (u.type) {
      case "base64":
        x = Tr(l);
        break;
      case "binary":
        x = l;
        break;
      case "buffer":
        u.codepage == 65001 ? x = l.toString("utf8") : u.codepage && typeof Ga < "u" || (x = Ae && Buffer.isBuffer(l) ? l.toString("binary") : la(l));
        break;
      case "array":
        x = ca(l);
        break;
      case "string":
        x = l;
        break;
      default:
        throw new Error("Unrecognized type " + u.type);
    }
    return d[0] == 239 && d[1] == 187 && d[2] == 191 ? x = Re(x.slice(3)) : u.type != "string" && u.type != "buffer" && u.codepage == 65001 ? x = Re(x) : u.type == "binary" && typeof Ga < "u", x.slice(0, 19) == "socialcalc:version:" ? rl.to_sheet(u.type == "string" ? x : Re(x), u) : i(x, u);
  }
  function o(l, u) {
    return ea(c(l, u), u);
  }
  function f(l) {
    for (var u = [], x = Ue(l["!ref"]), d, p = Array.isArray(l), h = x.s.r; h <= x.e.r; ++h) {
      for (var g = [], O = x.s.c; O <= x.e.c; ++O) {
        var I = me({ r: h, c: O });
        if (d = p ? (l[h] || [])[O] : l[I], !d || d.v == null) {
          g.push("          ");
          continue;
        }
        for (var T = (d.w || (zr(d), d.w) || "").slice(0, 10); T.length < 10; ) T += " ";
        g.push(T + (O === 0 ? " " : ""));
      }
      u.push(g.join(""));
    }
    return u.join(`
`);
  }
  return {
    to_workbook: o,
    to_sheet: c,
    from_sheet: f
  };
})();
function al(e, a) {
  var r = a || {}, n = !!r.WTF;
  r.WTF = !0;
  try {
    var t = Qo.to_workbook(e, r);
    return r.WTF = n, t;
  } catch (s) {
    if (r.WTF = n, !s.message.match(/SYLK bad record ID/) && n) throw s;
    return Ka.to_workbook(e, a);
  }
}
var Ua = /* @__PURE__ */ (function() {
  function e(w, b, L) {
    if (w) {
      Ze(w, w.l || 0);
      for (var N = L.Enum || he; w.l < w.length; ) {
        var K = w.read_shift(2), ee = N[K] || N[65535], Z = w.read_shift(2), J = w.l + Z, j = ee.f && ee.f(w, Z, L);
        if (w.l = J, b(j, ee, K)) return;
      }
    }
  }
  function a(w, b) {
    switch (b.type) {
      case "base64":
        return r(Or(Tr(w)), b);
      case "binary":
        return r(Or(w), b);
      case "buffer":
      case "array":
        return r(w, b);
    }
    throw "Unsupported type " + b.type;
  }
  function r(w, b) {
    if (!w) return w;
    var L = b || {}, N = L.dense ? [] : {}, K = "Sheet1", ee = "", Z = 0, J = {}, j = [], ie = [], C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Te = L.sheetRows || 0;
    if (w[2] == 0 && (w[3] == 8 || w[3] == 9) && w.length >= 16 && w[14] == 5 && w[15] === 108)
      throw new Error("Unsupported Works 3 for Mac file");
    if (w[2] == 2)
      L.Enum = he, e(w, function(ne, xe, we) {
        switch (we) {
          case 0:
            L.vers = ne, ne >= 4096 && (L.qpro = !0);
            break;
          case 6:
            C = ne;
            break;
          /* RANGE */
          case 204:
            ne && (ee = ne);
            break;
          /* SHEETNAMECS */
          case 222:
            ee = ne;
            break;
          /* SHEETNAMELP */
          case 15:
          /* LABEL */
          case 51:
            L.qpro || (ne[1].v = ne[1].v.slice(1));
          /* falls through */
          case 13:
          /* INTEGER */
          case 14:
          /* NUMBER */
          case 16:
            we == 14 && (ne[2] & 112) == 112 && (ne[2] & 15) > 1 && (ne[2] & 15) < 15 && (ne[1].z = L.dateNF || Ee[14], L.cellDates && (ne[1].t = "d", ne[1].v = yt(ne[1].v))), L.qpro && ne[3] > Z && (N["!ref"] = Se(C), J[K] = N, j.push(K), N = L.dense ? [] : {}, C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Z = ne[3], K = ee || "Sheet" + (Z + 1), ee = "");
            var $e = L.dense ? (N[ne[0].r] || [])[ne[0].c] : N[me(ne[0])];
            if ($e) {
              $e.t = ne[1].t, $e.v = ne[1].v, ne[1].z != null && ($e.z = ne[1].z), ne[1].f != null && ($e.f = ne[1].f);
              break;
            }
            L.dense ? (N[ne[0].r] || (N[ne[0].r] = []), N[ne[0].r][ne[0].c] = ne[1]) : N[me(ne[0])] = ne[1];
            break;
        }
      }, L);
    else if (w[2] == 26 || w[2] == 14)
      L.Enum = te, w[2] == 14 && (L.qpro = !0, w.l = 0), e(w, function(ne, xe, we) {
        switch (we) {
          case 204:
            K = ne;
            break;
          /* SHEETNAMECS */
          case 22:
            ne[1].v = ne[1].v.slice(1);
          /* falls through */
          case 23:
          /* NUMBER17 */
          case 24:
          /* NUMBER18 */
          case 25:
          /* FORMULA19 */
          case 37:
          /* NUMBER25 */
          case 39:
          /* NUMBER27 */
          case 40:
            if (ne[3] > Z && (N["!ref"] = Se(C), J[K] = N, j.push(K), N = L.dense ? [] : {}, C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Z = ne[3], K = "Sheet" + (Z + 1)), Te > 0 && ne[0].r >= Te) break;
            L.dense ? (N[ne[0].r] || (N[ne[0].r] = []), N[ne[0].r][ne[0].c] = ne[1]) : N[me(ne[0])] = ne[1], C.e.c < ne[0].c && (C.e.c = ne[0].c), C.e.r < ne[0].r && (C.e.r = ne[0].r);
            break;
          case 27:
            ne[14e3] && (ie[ne[14e3][0]] = ne[14e3][1]);
            break;
          case 1537:
            ie[ne[0]] = ne[1], ne[0] == Z && (K = ne[1]);
            break;
        }
      }, L);
    else throw new Error("Unrecognized LOTUS BOF " + w[2]);
    if (N["!ref"] = Se(C), J[ee || K] = N, j.push(ee || K), !ie.length) return { SheetNames: j, Sheets: J };
    for (var de = {}, pe = [], oe = 0; oe < ie.length; ++oe) J[j[oe]] ? (pe.push(ie[oe] || j[oe]), de[ie[oe]] = J[ie[oe]] || J[j[oe]]) : (pe.push(ie[oe]), de[ie[oe]] = { "!ref": "A1" });
    return { SheetNames: pe, Sheets: de };
  }
  function n(w, b) {
    var L = b || {};
    if (+L.codepage >= 0 && Dr(+L.codepage), L.type == "string") throw new Error("Cannot write WK1 to JS string");
    var N = Xt(), K = Ue(w["!ref"]), ee = Array.isArray(w), Z = [];
    yr(N, 0, s(1030)), yr(N, 6, o(K));
    for (var J = Math.min(K.e.r, 8191), j = K.s.r; j <= J; ++j)
      for (var ie = er(j), C = K.s.c; C <= K.e.c; ++C) {
        j === K.s.r && (Z[C] = Ye(C));
        var Te = Z[C] + ie, de = ee ? (w[j] || [])[C] : w[Te];
        if (!(!de || de.t == "z"))
          if (de.t == "n")
            (de.v | 0) == de.v && de.v >= -32768 && de.v <= 32767 ? yr(N, 13, d(j, C, de.v)) : yr(N, 14, h(j, C, de.v));
          else {
            var pe = zr(de);
            yr(N, 15, u(j, C, pe.slice(0, 239)));
          }
      }
    return yr(N, 1), N.end();
  }
  function t(w, b) {
    var L = b || {};
    if (+L.codepage >= 0 && Dr(+L.codepage), L.type == "string") throw new Error("Cannot write WK3 to JS string");
    var N = Xt();
    yr(N, 0, i(w));
    for (var K = 0, ee = 0; K < w.SheetNames.length; ++K) (w.Sheets[w.SheetNames[K]] || {})["!ref"] && yr(N, 27, M(w.SheetNames[K], ee++));
    var Z = 0;
    for (K = 0; K < w.SheetNames.length; ++K) {
      var J = w.Sheets[w.SheetNames[K]];
      if (!(!J || !J["!ref"])) {
        for (var j = Ue(J["!ref"]), ie = Array.isArray(J), C = [], Te = Math.min(j.e.r, 8191), de = j.s.r; de <= Te; ++de)
          for (var pe = er(de), oe = j.s.c; oe <= j.e.c; ++oe) {
            de === j.s.r && (C[oe] = Ye(oe));
            var ne = C[oe] + pe, xe = ie ? (J[de] || [])[oe] : J[ne];
            if (!(!xe || xe.t == "z"))
              if (xe.t == "n")
                yr(N, 23, R(de, oe, Z, xe.v));
              else {
                var we = zr(xe);
                yr(N, 22, A(de, oe, Z, we.slice(0, 239)));
              }
          }
        ++Z;
      }
    }
    return yr(N, 1), N.end();
  }
  function s(w) {
    var b = Ke(2);
    return b.write_shift(2, w), b;
  }
  function i(w) {
    var b = Ke(26);
    b.write_shift(2, 4096), b.write_shift(2, 4), b.write_shift(4, 0);
    for (var L = 0, N = 0, K = 0, ee = 0; ee < w.SheetNames.length; ++ee) {
      var Z = w.SheetNames[ee], J = w.Sheets[Z];
      if (!(!J || !J["!ref"])) {
        ++K;
        var j = Aa(J["!ref"]);
        L < j.e.r && (L = j.e.r), N < j.e.c && (N = j.e.c);
      }
    }
    return L > 8191 && (L = 8191), b.write_shift(2, L), b.write_shift(1, K), b.write_shift(1, N), b.write_shift(2, 0), b.write_shift(2, 0), b.write_shift(1, 1), b.write_shift(1, 2), b.write_shift(4, 0), b.write_shift(4, 0), b;
  }
  function c(w, b, L) {
    var N = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return b == 8 && L.qpro ? (N.s.c = w.read_shift(1), w.l++, N.s.r = w.read_shift(2), N.e.c = w.read_shift(1), w.l++, N.e.r = w.read_shift(2), N) : (N.s.c = w.read_shift(2), N.s.r = w.read_shift(2), b == 12 && L.qpro && (w.l += 2), N.e.c = w.read_shift(2), N.e.r = w.read_shift(2), b == 12 && L.qpro && (w.l += 2), N.s.c == 65535 && (N.s.c = N.e.c = N.s.r = N.e.r = 0), N);
  }
  function o(w) {
    var b = Ke(8);
    return b.write_shift(2, w.s.c), b.write_shift(2, w.s.r), b.write_shift(2, w.e.c), b.write_shift(2, w.e.r), b;
  }
  function f(w, b, L) {
    var N = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return L.qpro && L.vers != 20768 ? (N[0].c = w.read_shift(1), N[3] = w.read_shift(1), N[0].r = w.read_shift(2), w.l += 2) : (N[2] = w.read_shift(1), N[0].c = w.read_shift(2), N[0].r = w.read_shift(2)), N;
  }
  function l(w, b, L) {
    var N = w.l + b, K = f(w, b, L);
    if (K[1].t = "s", L.vers == 20768) {
      w.l++;
      var ee = w.read_shift(1);
      return K[1].v = w.read_shift(ee, "utf8"), K;
    }
    return L.qpro && w.l++, K[1].v = w.read_shift(N - w.l, "cstr"), K;
  }
  function u(w, b, L) {
    var N = Ke(7 + L.length);
    N.write_shift(1, 255), N.write_shift(2, b), N.write_shift(2, w), N.write_shift(1, 39);
    for (var K = 0; K < N.length; ++K) {
      var ee = L.charCodeAt(K);
      N.write_shift(1, ee >= 128 ? 95 : ee);
    }
    return N.write_shift(1, 0), N;
  }
  function x(w, b, L) {
    var N = f(w, b, L);
    return N[1].v = w.read_shift(2, "i"), N;
  }
  function d(w, b, L) {
    var N = Ke(7);
    return N.write_shift(1, 255), N.write_shift(2, b), N.write_shift(2, w), N.write_shift(2, L, "i"), N;
  }
  function p(w, b, L) {
    var N = f(w, b, L);
    return N[1].v = w.read_shift(8, "f"), N;
  }
  function h(w, b, L) {
    var N = Ke(13);
    return N.write_shift(1, 255), N.write_shift(2, b), N.write_shift(2, w), N.write_shift(8, L, "f"), N;
  }
  function g(w, b, L) {
    var N = w.l + b, K = f(w, b, L);
    if (K[1].v = w.read_shift(8, "f"), L.qpro) w.l = N;
    else {
      var ee = w.read_shift(2);
      U(w.slice(w.l, w.l + ee), K), w.l += ee;
    }
    return K;
  }
  function O(w, b, L) {
    var N = b & 32768;
    return b &= -32769, b = (N ? w : 0) + (b >= 8192 ? b - 16384 : b), (N ? "" : "$") + (L ? Ye(b) : er(b));
  }
  var I = {
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    70: ["LEN", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    111: ["T", 1]
  }, T = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    // eslint-disable-line no-mixed-spaces-and-tabs
  ];
  function U(w, b) {
    Ze(w, 0);
    for (var L = [], N = 0, K = "", ee = "", Z = "", J = ""; w.l < w.length; ) {
      var j = w[w.l++];
      switch (j) {
        case 0:
          L.push(w.read_shift(8, "f"));
          break;
        case 1:
          ee = O(b[0].c, w.read_shift(2), !0), K = O(b[0].r, w.read_shift(2), !1), L.push(ee + K);
          break;
        case 2:
          {
            var ie = O(b[0].c, w.read_shift(2), !0), C = O(b[0].r, w.read_shift(2), !1);
            ee = O(b[0].c, w.read_shift(2), !0), K = O(b[0].r, w.read_shift(2), !1), L.push(ie + C + ":" + ee + K);
          }
          break;
        case 3:
          if (w.l < w.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          L.push("(" + L.pop() + ")");
          break;
        case 5:
          L.push(w.read_shift(2));
          break;
        case 6:
          {
            for (var Te = ""; j = w[w.l++]; ) Te += String.fromCharCode(j);
            L.push('"' + Te.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          L.push("-" + L.pop());
          break;
        case 23:
          L.push("+" + L.pop());
          break;
        case 22:
          L.push("NOT(" + L.pop() + ")");
          break;
        case 20:
        case 21:
          J = L.pop(), Z = L.pop(), L.push(["AND", "OR"][j - 20] + "(" + Z + "," + J + ")");
          break;
        default:
          if (j < 32 && T[j])
            J = L.pop(), Z = L.pop(), L.push(Z + T[j] + J);
          else if (I[j]) {
            if (N = I[j][1], N == 69 && (N = w[w.l++]), N > L.length) {
              console.error("WK1 bad formula parse 0x" + j.toString(16) + ":|" + L.join("|") + "|");
              return;
            }
            var de = L.slice(-N);
            L.length -= N, L.push(I[j][0] + "(" + de.join(",") + ")");
          } else return j <= 7 ? console.error("WK1 invalid opcode " + j.toString(16)) : j <= 24 ? console.error("WK1 unsupported op " + j.toString(16)) : j <= 30 ? console.error("WK1 invalid opcode " + j.toString(16)) : j <= 115 ? console.error("WK1 unsupported function opcode " + j.toString(16)) : console.error("WK1 unrecognized opcode " + j.toString(16));
      }
    }
    L.length == 1 ? b[1].f = "" + L[0] : console.error("WK1 bad formula parse |" + L.join("|") + "|");
  }
  function V(w) {
    var b = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return b[0].r = w.read_shift(2), b[3] = w[w.l++], b[0].c = w[w.l++], b;
  }
  function B(w, b) {
    var L = V(w);
    return L[1].t = "s", L[1].v = w.read_shift(b - 4, "cstr"), L;
  }
  function A(w, b, L, N) {
    var K = Ke(6 + N.length);
    K.write_shift(2, w), K.write_shift(1, L), K.write_shift(1, b), K.write_shift(1, 39);
    for (var ee = 0; ee < N.length; ++ee) {
      var Z = N.charCodeAt(ee);
      K.write_shift(1, Z >= 128 ? 95 : Z);
    }
    return K.write_shift(1, 0), K;
  }
  function _(w, b) {
    var L = V(w);
    L[1].v = w.read_shift(2);
    var N = L[1].v >> 1;
    if (L[1].v & 1)
      switch (N & 7) {
        case 0:
          N = (N >> 3) * 5e3;
          break;
        case 1:
          N = (N >> 3) * 500;
          break;
        case 2:
          N = (N >> 3) / 20;
          break;
        case 3:
          N = (N >> 3) / 200;
          break;
        case 4:
          N = (N >> 3) / 2e3;
          break;
        case 5:
          N = (N >> 3) / 2e4;
          break;
        case 6:
          N = (N >> 3) / 16;
          break;
        case 7:
          N = (N >> 3) / 64;
          break;
      }
    return L[1].v = N, L;
  }
  function m(w, b) {
    var L = V(w), N = w.read_shift(4), K = w.read_shift(4), ee = w.read_shift(2);
    if (ee == 65535)
      return N === 0 && K === 3221225472 ? (L[1].t = "e", L[1].v = 15) : N === 0 && K === 3489660928 ? (L[1].t = "e", L[1].v = 42) : L[1].v = 0, L;
    var Z = ee & 32768;
    return ee = (ee & 32767) - 16446, L[1].v = (1 - Z * 2) * (K * Math.pow(2, ee + 32) + N * Math.pow(2, ee)), L;
  }
  function R(w, b, L, N) {
    var K = Ke(14);
    if (K.write_shift(2, w), K.write_shift(1, L), K.write_shift(1, b), N == 0)
      return K.write_shift(4, 0), K.write_shift(4, 0), K.write_shift(2, 65535), K;
    var ee = 0, Z = 0, J = 0, j = 0;
    return N < 0 && (ee = 1, N = -N), Z = Math.log2(N) | 0, N /= Math.pow(2, Z - 31), j = N >>> 0, (j & 2147483648) == 0 && (N /= 2, ++Z, j = N >>> 0), N -= j, j |= 2147483648, j >>>= 0, N *= Math.pow(2, 32), J = N >>> 0, K.write_shift(4, J), K.write_shift(4, j), Z += 16383 + (ee ? 32768 : 0), K.write_shift(2, Z), K;
  }
  function P(w, b) {
    var L = m(w);
    return w.l += b - 14, L;
  }
  function D(w, b) {
    var L = V(w), N = w.read_shift(4);
    return L[1].v = N >> 6, L;
  }
  function X(w, b) {
    var L = V(w), N = w.read_shift(8, "f");
    return L[1].v = N, L;
  }
  function se(w, b) {
    var L = X(w);
    return w.l += b - 10, L;
  }
  function re(w, b) {
    return w[w.l + b - 1] == 0 ? w.read_shift(b, "cstr") : "";
  }
  function fe(w, b) {
    var L = w[w.l++];
    L > b - 1 && (L = b - 1);
    for (var N = ""; N.length < L; ) N += String.fromCharCode(w[w.l++]);
    return N;
  }
  function q(w, b, L) {
    if (!(!L.qpro || b < 21)) {
      var N = w.read_shift(1);
      w.l += 17, w.l += 1, w.l += 2;
      var K = w.read_shift(b - 21, "cstr");
      return [N, K];
    }
  }
  function ve(w, b) {
    for (var L = {}, N = w.l + b; w.l < N; ) {
      var K = w.read_shift(2);
      if (K == 14e3) {
        for (L[K] = [0, ""], L[K][0] = w.read_shift(2); w[w.l]; )
          L[K][1] += String.fromCharCode(w[w.l]), w.l++;
        w.l++;
      }
    }
    return L;
  }
  function M(w, b) {
    var L = Ke(5 + w.length);
    L.write_shift(2, 14e3), L.write_shift(2, b);
    for (var N = 0; N < w.length; ++N) {
      var K = w.charCodeAt(N);
      L[L.l++] = K > 127 ? 95 : K;
    }
    return L[L.l++] = 0, L;
  }
  var he = {
    /*::[*/
    0: { n: "BOF", f: Xe },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "CALCMODE" },
    /*::[*/
    3: { n: "CALCORDER" },
    /*::[*/
    4: { n: "SPLIT" },
    /*::[*/
    5: { n: "SYNC" },
    /*::[*/
    6: { n: "RANGE", f: c },
    /*::[*/
    7: { n: "WINDOW1" },
    /*::[*/
    8: { n: "COLW1" },
    /*::[*/
    9: { n: "WINTWO" },
    /*::[*/
    10: { n: "COLW2" },
    /*::[*/
    11: { n: "NAME" },
    /*::[*/
    12: { n: "BLANK" },
    /*::[*/
    13: { n: "INTEGER", f: x },
    /*::[*/
    14: { n: "NUMBER", f: p },
    /*::[*/
    15: { n: "LABEL", f: l },
    /*::[*/
    16: { n: "FORMULA", f: g },
    /*::[*/
    24: { n: "TABLE" },
    /*::[*/
    25: { n: "ORANGE" },
    /*::[*/
    26: { n: "PRANGE" },
    /*::[*/
    27: { n: "SRANGE" },
    /*::[*/
    28: { n: "FRANGE" },
    /*::[*/
    29: { n: "KRANGE1" },
    /*::[*/
    32: { n: "HRANGE" },
    /*::[*/
    35: { n: "KRANGE2" },
    /*::[*/
    36: { n: "PROTEC" },
    /*::[*/
    37: { n: "FOOTER" },
    /*::[*/
    38: { n: "HEADER" },
    /*::[*/
    39: { n: "SETUP" },
    /*::[*/
    40: { n: "MARGINS" },
    /*::[*/
    41: { n: "LABELFMT" },
    /*::[*/
    42: { n: "TITLES" },
    /*::[*/
    43: { n: "SHEETJS" },
    /*::[*/
    45: { n: "GRAPH" },
    /*::[*/
    46: { n: "NGRAPH" },
    /*::[*/
    47: { n: "CALCCOUNT" },
    /*::[*/
    48: { n: "UNFORMATTED" },
    /*::[*/
    49: { n: "CURSORW12" },
    /*::[*/
    50: { n: "WINDOW" },
    /*::[*/
    51: { n: "STRING", f: l },
    /*::[*/
    55: { n: "PASSWORD" },
    /*::[*/
    56: { n: "LOCKED" },
    /*::[*/
    60: { n: "QUERY" },
    /*::[*/
    61: { n: "QUERYNAME" },
    /*::[*/
    62: { n: "PRINT" },
    /*::[*/
    63: { n: "PRINTNAME" },
    /*::[*/
    64: { n: "GRAPH2" },
    /*::[*/
    65: { n: "GRAPHNAME" },
    /*::[*/
    66: { n: "ZOOM" },
    /*::[*/
    67: { n: "SYMSPLIT" },
    /*::[*/
    68: { n: "NSROWS" },
    /*::[*/
    69: { n: "NSCOLS" },
    /*::[*/
    70: { n: "RULER" },
    /*::[*/
    71: { n: "NNAME" },
    /*::[*/
    72: { n: "ACOMM" },
    /*::[*/
    73: { n: "AMACRO" },
    /*::[*/
    74: { n: "PARSE" },
    /*::[*/
    102: { n: "PRANGES??" },
    /*::[*/
    103: { n: "RRANGES??" },
    /*::[*/
    104: { n: "FNAME??" },
    /*::[*/
    105: { n: "MRANGES??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: re },
    /*::[*/
    222: { n: "SHEETNAMELP", f: fe },
    /*::[*/
    65535: { n: "" }
  }, te = {
    /*::[*/
    0: { n: "BOF" },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "PASSWORD" },
    /*::[*/
    3: { n: "CALCSET" },
    /*::[*/
    4: { n: "WINDOWSET" },
    /*::[*/
    5: { n: "SHEETCELLPTR" },
    /*::[*/
    6: { n: "SHEETLAYOUT" },
    /*::[*/
    7: { n: "COLUMNWIDTH" },
    /*::[*/
    8: { n: "HIDDENCOLUMN" },
    /*::[*/
    9: { n: "USERRANGE" },
    /*::[*/
    10: { n: "SYSTEMRANGE" },
    /*::[*/
    11: { n: "ZEROFORCE" },
    /*::[*/
    12: { n: "SORTKEYDIR" },
    /*::[*/
    13: { n: "FILESEAL" },
    /*::[*/
    14: { n: "DATAFILLNUMS" },
    /*::[*/
    15: { n: "PRINTMAIN" },
    /*::[*/
    16: { n: "PRINTSTRING" },
    /*::[*/
    17: { n: "GRAPHMAIN" },
    /*::[*/
    18: { n: "GRAPHSTRING" },
    /*::[*/
    19: { n: "??" },
    /*::[*/
    20: { n: "ERRCELL" },
    /*::[*/
    21: { n: "NACELL" },
    /*::[*/
    22: { n: "LABEL16", f: B },
    /*::[*/
    23: { n: "NUMBER17", f: m },
    /*::[*/
    24: { n: "NUMBER18", f: _ },
    /*::[*/
    25: { n: "FORMULA19", f: P },
    /*::[*/
    26: { n: "FORMULA1A" },
    /*::[*/
    27: { n: "XFORMAT", f: ve },
    /*::[*/
    28: { n: "DTLABELMISC" },
    /*::[*/
    29: { n: "DTLABELCELL" },
    /*::[*/
    30: { n: "GRAPHWINDOW" },
    /*::[*/
    31: { n: "CPA" },
    /*::[*/
    32: { n: "LPLAUTO" },
    /*::[*/
    33: { n: "QUERY" },
    /*::[*/
    34: { n: "HIDDENSHEET" },
    /*::[*/
    35: { n: "??" },
    /*::[*/
    37: { n: "NUMBER25", f: D },
    /*::[*/
    38: { n: "??" },
    /*::[*/
    39: { n: "NUMBER27", f: X },
    /*::[*/
    40: { n: "FORMULA28", f: se },
    /*::[*/
    142: { n: "??" },
    /*::[*/
    147: { n: "??" },
    /*::[*/
    150: { n: "??" },
    /*::[*/
    151: { n: "??" },
    /*::[*/
    152: { n: "??" },
    /*::[*/
    153: { n: "??" },
    /*::[*/
    154: { n: "??" },
    /*::[*/
    155: { n: "??" },
    /*::[*/
    156: { n: "??" },
    /*::[*/
    163: { n: "??" },
    /*::[*/
    174: { n: "??" },
    /*::[*/
    175: { n: "??" },
    /*::[*/
    176: { n: "??" },
    /*::[*/
    177: { n: "??" },
    /*::[*/
    184: { n: "??" },
    /*::[*/
    185: { n: "??" },
    /*::[*/
    186: { n: "??" },
    /*::[*/
    187: { n: "??" },
    /*::[*/
    188: { n: "??" },
    /*::[*/
    195: { n: "??" },
    /*::[*/
    201: { n: "??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: re },
    /*::[*/
    205: { n: "??" },
    /*::[*/
    206: { n: "??" },
    /*::[*/
    207: { n: "??" },
    /*::[*/
    208: { n: "??" },
    /*::[*/
    256: { n: "??" },
    /*::[*/
    259: { n: "??" },
    /*::[*/
    260: { n: "??" },
    /*::[*/
    261: { n: "??" },
    /*::[*/
    262: { n: "??" },
    /*::[*/
    263: { n: "??" },
    /*::[*/
    265: { n: "??" },
    /*::[*/
    266: { n: "??" },
    /*::[*/
    267: { n: "??" },
    /*::[*/
    268: { n: "??" },
    /*::[*/
    270: { n: "??" },
    /*::[*/
    271: { n: "??" },
    /*::[*/
    384: { n: "??" },
    /*::[*/
    389: { n: "??" },
    /*::[*/
    390: { n: "??" },
    /*::[*/
    393: { n: "??" },
    /*::[*/
    396: { n: "??" },
    /*::[*/
    512: { n: "??" },
    /*::[*/
    514: { n: "??" },
    /*::[*/
    513: { n: "??" },
    /*::[*/
    516: { n: "??" },
    /*::[*/
    517: { n: "??" },
    /*::[*/
    640: { n: "??" },
    /*::[*/
    641: { n: "??" },
    /*::[*/
    642: { n: "??" },
    /*::[*/
    643: { n: "??" },
    /*::[*/
    644: { n: "??" },
    /*::[*/
    645: { n: "??" },
    /*::[*/
    646: { n: "??" },
    /*::[*/
    647: { n: "??" },
    /*::[*/
    648: { n: "??" },
    /*::[*/
    658: { n: "??" },
    /*::[*/
    659: { n: "??" },
    /*::[*/
    660: { n: "??" },
    /*::[*/
    661: { n: "??" },
    /*::[*/
    662: { n: "??" },
    /*::[*/
    665: { n: "??" },
    /*::[*/
    666: { n: "??" },
    /*::[*/
    768: { n: "??" },
    /*::[*/
    772: { n: "??" },
    /*::[*/
    1537: { n: "SHEETINFOQP", f: q },
    /*::[*/
    1600: { n: "??" },
    /*::[*/
    1602: { n: "??" },
    /*::[*/
    1793: { n: "??" },
    /*::[*/
    1794: { n: "??" },
    /*::[*/
    1795: { n: "??" },
    /*::[*/
    1796: { n: "??" },
    /*::[*/
    1920: { n: "??" },
    /*::[*/
    2048: { n: "??" },
    /*::[*/
    2049: { n: "??" },
    /*::[*/
    2052: { n: "??" },
    /*::[*/
    2688: { n: "??" },
    /*::[*/
    10998: { n: "??" },
    /*::[*/
    12849: { n: "??" },
    /*::[*/
    28233: { n: "??" },
    /*::[*/
    28484: { n: "??" },
    /*::[*/
    65535: { n: "" }
  };
  return {
    sheet_to_wk1: n,
    book_to_wk3: t,
    to_workbook: a
  };
})();
function tl(e) {
  var a = {}, r = e.match(lr), n = 0, t = !1;
  if (r) for (; n != r.length; ++n) {
    var s = ge(r[n]);
    switch (s[0].replace(/\w*:/g, "")) {
      /* 18.8.12 condense CT_BooleanProperty */
      /* ** not required . */
      case "<condense":
        break;
      /* 18.8.17 extend CT_BooleanProperty */
      /* ** not required . */
      case "<extend":
        break;
      /* 18.8.36 shadow CT_BooleanProperty */
      /* ** not required . */
      case "<shadow":
        if (!s.val) break;
      /* falls through */
      case "<shadow>":
      case "<shadow/>":
        a.shadow = 1;
        break;
      case "</shadow>":
        break;
      /* 18.4.1 charset CT_IntProperty TODO */
      case "<charset":
        if (s.val == "1") break;
        a.cp = a0[parseInt(s.val, 10)];
        break;
      /* 18.4.2 outline CT_BooleanProperty TODO */
      case "<outline":
        if (!s.val) break;
      /* falls through */
      case "<outline>":
      case "<outline/>":
        a.outline = 1;
        break;
      case "</outline>":
        break;
      /* 18.4.5 rFont CT_FontName */
      case "<rFont":
        a.name = s.val;
        break;
      /* 18.4.11 sz CT_FontSize */
      case "<sz":
        a.sz = s.val;
        break;
      /* 18.4.10 strike CT_BooleanProperty */
      case "<strike":
        if (!s.val) break;
      /* falls through */
      case "<strike>":
      case "<strike/>":
        a.strike = 1;
        break;
      case "</strike>":
        break;
      /* 18.4.13 u CT_UnderlineProperty */
      case "<u":
        if (!s.val) break;
        switch (s.val) {
          case "double":
            a.uval = "double";
            break;
          case "singleAccounting":
            a.uval = "single-accounting";
            break;
          case "doubleAccounting":
            a.uval = "double-accounting";
            break;
        }
      /* falls through */
      case "<u>":
      case "<u/>":
        a.u = 1;
        break;
      case "</u>":
        break;
      /* 18.8.2 b */
      case "<b":
        if (s.val == "0") break;
      /* falls through */
      case "<b>":
      case "<b/>":
        a.b = 1;
        break;
      case "</b>":
        break;
      /* 18.8.26 i */
      case "<i":
        if (s.val == "0") break;
      /* falls through */
      case "<i>":
      case "<i/>":
        a.i = 1;
        break;
      case "</i>":
        break;
      /* 18.3.1.15 color CT_Color TODO: tint, theme, auto, indexed */
      case "<color":
        s.rgb && (a.color = s.rgb.slice(2, 8));
        break;
      case "<color>":
      case "<color/>":
      case "</color>":
        break;
      /* 18.8.18 family ST_FontFamily */
      case "<family":
        a.family = s.val;
        break;
      case "<family>":
      case "<family/>":
      case "</family>":
        break;
      /* 18.4.14 vertAlign CT_VerticalAlignFontProperty TODO */
      case "<vertAlign":
        a.valign = s.val;
        break;
      case "<vertAlign>":
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      /* 18.8.35 scheme CT_FontScheme TODO */
      case "<scheme":
        break;
      case "<scheme>":
      case "<scheme/>":
      case "</scheme>":
        break;
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        t = !0;
        break;
      case "</ext>":
        t = !1;
        break;
      default:
        if (s[0].charCodeAt(1) !== 47 && !t) throw new Error("Unrecognized rich format " + s[0]);
    }
  }
  return a;
}
var nl = /* @__PURE__ */ (function() {
  var e = Xa("t"), a = Xa("rPr");
  function r(s) {
    var i = s.match(e);
    if (!i) return { t: "s", v: "" };
    var c = { t: "s", v: Ce(i[1]) }, o = s.match(a);
    return o && (c.s = tl(o[1])), c;
  }
  var n = /<(?:\w+:)?r>/g, t = /<\/(?:\w+:)?r>/;
  return function(i) {
    return i.replace(n, "").split(t).map(r).filter(function(c) {
      return c.v;
    });
  };
})(), sl = /* @__PURE__ */ (function() {
  var a = /(\r\n|\n)/g;
  function r(t, s, i) {
    var c = [];
    t.u && c.push("text-decoration: underline;"), t.uval && c.push("text-underline-style:" + t.uval + ";"), t.sz && c.push("font-size:" + t.sz + "pt;"), t.outline && c.push("text-effect: outline;"), t.shadow && c.push("text-shadow: auto;"), s.push('<span style="' + c.join("") + '">'), t.b && (s.push("<b>"), i.push("</b>")), t.i && (s.push("<i>"), i.push("</i>")), t.strike && (s.push("<s>"), i.push("</s>"));
    var o = t.valign || "";
    return o == "superscript" || o == "super" ? o = "sup" : o == "subscript" && (o = "sub"), o != "" && (s.push("<" + o + ">"), i.push("</" + o + ">")), i.push("</span>"), t;
  }
  function n(t) {
    var s = [[], t.v, []];
    return t.v ? (t.s && r(t.s, s[0], s[2]), s[0].join("") + s[1].replace(a, "<br/>") + s[2].join("")) : "";
  }
  return function(s) {
    return s.map(n).join("");
  };
})(), il = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g, cl = /<(?:\w+:)?r>/, fl = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function _0(e, a) {
  var r = a ? a.cellHTML : !0, n = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (n.t = Ce(Re(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || "")), n.r = Re(e), r && (n.h = o0(n.t))) : (
    /*y = */
    e.match(cl) && (n.r = Re(e), n.t = Ce(Re((e.replace(fl, "").match(il) || []).join("").replace(lr, ""))), r && (n.h = sl(nl(n.r))))
  ), n) : { t: "" };
}
var ol = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/, ll = /<(?:\w+:)?(?:si|sstItem)>/g, ul = /<\/(?:\w+:)?(?:si|sstItem)>/;
function hl(e, a) {
  var r = [], n = "";
  if (!e) return r;
  var t = e.match(ol);
  if (t) {
    n = t[2].replace(ll, "").split(ul);
    for (var s = 0; s != n.length; ++s) {
      var i = _0(n[s].trim(), a);
      i != null && (r[r.length] = i);
    }
    t = ge(t[1]), r.Count = t.count, r.Unique = t.uniqueCount;
  }
  return r;
}
function xl(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function dl(e, a) {
  var r = [], n = !1;
  return Xr(e, function(s, i, c) {
    switch (c) {
      case 159:
        r.Count = s[0], r.Unique = s[1];
        break;
      case 19:
        r.push(s);
        break;
      case 160:
        return !0;
      case 35:
        n = !0;
        break;
      case 36:
        n = !1;
        break;
      default:
        if (i.T, !n || a.WTF) throw new Error("Unexpected record 0x" + c.toString(16));
    }
  }), r;
}
function Ws(e) {
  for (var a = [], r = e.split(""), n = 0; n < r.length; ++n) a[n] = r[n].charCodeAt(0);
  return a;
}
function Gr(e, a) {
  var r = {};
  return r.Major = e.read_shift(2), r.Minor = e.read_shift(2), a >= 4 && (e.l += a - 4), r;
}
function pl(e) {
  var a = {};
  return a.id = e.read_shift(0, "lpp4"), a.R = Gr(e, 4), a.U = Gr(e, 4), a.W = Gr(e, 4), a;
}
function vl(e) {
  for (var a = e.read_shift(4), r = e.l + a - 4, n = {}, t = e.read_shift(4), s = []; t-- > 0; ) s.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (n.name = e.read_shift(0, "lpp4"), n.comps = s, e.l != r) throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + r);
  return n;
}
function gl(e) {
  var a = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; ) a.push(vl(e));
  return a;
}
function ml(e) {
  var a = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; ) a.push(e.read_shift(0, "lpp4"));
  return a;
}
function _l(e) {
  var a = {};
  return e.read_shift(4), e.l += 4, a.id = e.read_shift(0, "lpp4"), a.name = e.read_shift(0, "lpp4"), a.R = Gr(e, 4), a.U = Gr(e, 4), a.W = Gr(e, 4), a;
}
function El(e) {
  var a = _l(e);
  if (a.ename = e.read_shift(0, "8lpp4"), a.blksz = e.read_shift(4), a.cmode = e.read_shift(4), e.read_shift(4) != 4) throw new Error("Bad !Primary record");
  return a;
}
function Vs(e, a) {
  var r = e.l + a, n = {};
  n.Flags = e.read_shift(4) & 63, e.l += 4, n.AlgID = e.read_shift(4);
  var t = !1;
  switch (n.AlgID) {
    case 26126:
    case 26127:
    case 26128:
      t = n.Flags == 36;
      break;
    case 26625:
      t = n.Flags == 4;
      break;
    case 0:
      t = n.Flags == 16 || n.Flags == 4 || n.Flags == 36;
      break;
    default:
      throw "Unrecognized encryption algorithm: " + n.AlgID;
  }
  if (!t) throw new Error("Encryption Flags/AlgID mismatch");
  return n.AlgIDHash = e.read_shift(4), n.KeySize = e.read_shift(4), n.ProviderType = e.read_shift(4), e.l += 8, n.CSPName = e.read_shift(r - e.l >> 1, "utf16le"), e.l = r, n;
}
function Gs(e, a) {
  var r = {}, n = e.l + a;
  return e.l += 4, r.Salt = e.slice(e.l, e.l + 16), e.l += 16, r.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), r.VerifierHash = e.slice(e.l, n), e.l = n, r;
}
function Tl(e) {
  var a = Gr(e);
  switch (a.Minor) {
    case 2:
      return [a.Minor, kl(e)];
    case 3:
      return [a.Minor, wl()];
    case 4:
      return [a.Minor, Al(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + a.Minor);
}
function kl(e) {
  var a = e.read_shift(4);
  if ((a & 63) != 36) throw new Error("EncryptionInfo mismatch");
  var r = e.read_shift(4), n = Vs(e, r), t = Gs(e, e.length - e.l);
  return { t: "Std", h: n, v: t };
}
function wl() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function Al(e) {
  var a = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  e.l += 4;
  var r = e.read_shift(e.length - e.l, "utf8"), n = {};
  return r.replace(lr, function(s) {
    var i = ge(s);
    switch (Mr(i[0])) {
      case "<?xml":
        break;
      case "<encryption":
      case "</encryption>":
        break;
      case "<keyData":
        a.forEach(function(c) {
          n[c] = i[c];
        });
        break;
      case "<dataIntegrity":
        n.encryptedHmacKey = i.encryptedHmacKey, n.encryptedHmacValue = i.encryptedHmacValue;
        break;
      case "<keyEncryptors>":
      case "<keyEncryptors":
        n.encs = [];
        break;
      case "</keyEncryptors>":
        break;
      case "<keyEncryptor":
        n.uri = i.uri;
        break;
      case "</keyEncryptor>":
        break;
      case "<encryptedKey":
        n.encs.push(i);
        break;
      default:
        throw i[0];
    }
  }), n;
}
function Fl(e, a) {
  var r = {}, n = r.EncryptionVersionInfo = Gr(e, 4);
  if (a -= 4, n.Minor != 2) throw new Error("unrecognized minor version code: " + n.Minor);
  if (n.Major > 4 || n.Major < 2) throw new Error("unrecognized major version code: " + n.Major);
  r.Flags = e.read_shift(4), a -= 4;
  var t = e.read_shift(4);
  return a -= 4, r.EncryptionHeader = Vs(e, t), a -= t, r.EncryptionVerifier = Gs(e, a), r;
}
function Sl(e) {
  var a = {}, r = a.EncryptionVersionInfo = Gr(e, 4);
  if (r.Major != 1 || r.Minor != 1) throw "unrecognized version code " + r.Major + " : " + r.Minor;
  return a.Salt = e.read_shift(16), a.EncryptedVerifier = e.read_shift(16), a.EncryptedVerifierHash = e.read_shift(16), a;
}
function Cl(e) {
  var a = 0, r, n = Ws(e), t = n.length + 1, s, i, c, o, f;
  for (r = qr(t), r[0] = n.length, s = 1; s != t; ++s) r[s] = n[s - 1];
  for (s = t - 1; s >= 0; --s)
    i = r[s], c = (a & 16384) === 0 ? 0 : 1, o = a << 1 & 32767, f = c | o, a = f ^ i;
  return a ^ 52811;
}
var zs = /* @__PURE__ */ (function() {
  var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], a = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], r = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], n = function(i) {
    return (i / 2 | i * 128) & 255;
  }, t = function(i, c) {
    return n(i ^ c);
  }, s = function(i) {
    for (var c = a[i.length - 1], o = 104, f = i.length - 1; f >= 0; --f)
      for (var l = i[f], u = 0; u != 7; ++u)
        l & 64 && (c ^= r[o]), l *= 2, --o;
    return c;
  };
  return function(i) {
    for (var c = Ws(i), o = s(c), f = c.length, l = qr(16), u = 0; u != 16; ++u) l[u] = 0;
    var x, d, p;
    for ((f & 1) === 1 && (x = o >> 8, l[f] = t(e[0], x), --f, x = o & 255, d = c[c.length - 1], l[f] = t(d, x)); f > 0; )
      --f, x = o >> 8, l[f] = t(c[f], x), --f, x = o & 255, l[f] = t(c[f], x);
    for (f = 15, p = 15 - c.length; p > 0; )
      x = o >> 8, l[f] = t(e[p], x), --f, --p, x = o & 255, l[f] = t(c[f], x), --f, --p;
    return l;
  };
})(), yl = function(e, a, r, n, t) {
  t || (t = a), n || (n = zs(e));
  var s, i;
  for (s = 0; s != a.length; ++s)
    i = a[s], i ^= n[r], i = (i >> 5 | i << 3) & 255, t[s] = i, ++r;
  return [t, r, n];
}, Ol = function(e) {
  var a = 0, r = zs(e);
  return function(n) {
    var t = yl("", n, a, r);
    return a = t[1], t[0];
  };
};
function Dl(e, a, r, n) {
  var t = { key: Xe(e), verificationBytes: Xe(e) };
  return r.password && (t.verifier = Cl(r.password)), n.valid = t.verificationBytes === t.verifier, n.valid && (n.insitu = Ol(r.password)), t;
}
function Rl(e, a, r) {
  var n = r || {};
  return n.Info = e.read_shift(2), e.l -= 2, n.Info === 1 ? n.Data = Sl(e) : n.Data = Fl(e, a), n;
}
function Il(e, a, r) {
  var n = { Type: r.biff >= 8 ? e.read_shift(2) : 0 };
  return n.Type ? Rl(e, a - 2, n) : Dl(e, r.biff >= 8 ? a : a - 2, r, n), n;
}
var Nl = /* @__PURE__ */ (function() {
  function e(t, s) {
    switch (s.type) {
      case "base64":
        return a(Tr(t), s);
      case "binary":
        return a(t, s);
      case "buffer":
        return a(Ae && Buffer.isBuffer(t) ? t.toString("binary") : la(t), s);
      case "array":
        return a(ca(t), s);
    }
    throw new Error("Unrecognized type " + s.type);
  }
  function a(t, s) {
    var i = s || {}, c = i.dense ? [] : {}, o = t.match(/\\trowd.*?\\row\b/g);
    if (!o.length) throw new Error("RTF missing table");
    var f = { s: { c: 0, r: 0 }, e: { c: 0, r: o.length - 1 } };
    return o.forEach(function(l, u) {
      Array.isArray(c) && (c[u] = []);
      for (var x = /\\\w+\b/g, d = 0, p, h = -1; p = x.exec(l); ) {
        switch (p[0]) {
          case "\\cell":
            var g = l.slice(d, x.lastIndex - p[0].length);
            if (g[0] == " " && (g = g.slice(1)), ++h, g.length) {
              var O = { v: g, t: "s" };
              Array.isArray(c) ? c[u][h] = O : c[me({ r: u, c: h })] = O;
            }
            break;
        }
        d = x.lastIndex;
      }
      h > f.e.c && (f.e.c = h);
    }), c["!ref"] = Se(f), c;
  }
  function r(t, s) {
    return ea(e(t, s), s);
  }
  function n(t) {
    for (var s = ["{\\rtf1\\ansi"], i = Ue(t["!ref"]), c, o = Array.isArray(t), f = i.s.r; f <= i.e.r; ++f) {
      s.push("\\trowd\\trautofit1");
      for (var l = i.s.c; l <= i.e.c; ++l) s.push("\\cellx" + (l + 1));
      for (s.push("\\pard\\intbl"), l = i.s.c; l <= i.e.c; ++l) {
        var u = me({ r: f, c: l });
        c = o ? (t[f] || [])[l] : t[u], !(!c || c.v == null && (!c.f || c.F)) && (s.push(" " + (c.w || (zr(c), c.w))), s.push("\\cell"));
      }
      s.push("\\pard\\intbl\\row");
    }
    return s.join("") + "}";
  }
  return {
    to_workbook: r,
    to_sheet: e,
    from_sheet: n
  };
})();
function bl(e) {
  var a = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(a.slice(0, 2), 16), parseInt(a.slice(2, 4), 16), parseInt(a.slice(4, 6), 16)];
}
function Ya(e) {
  for (var a = 0, r = 1; a != 3; ++a) r = r * 256 + (e[a] > 255 ? 255 : e[a] < 0 ? 0 : e[a]);
  return r.toString(16).toUpperCase().slice(1);
}
function Pl(e) {
  var a = e[0] / 255, r = e[1] / 255, n = e[2] / 255, t = Math.max(a, r, n), s = Math.min(a, r, n), i = t - s;
  if (i === 0) return [0, 0, a];
  var c = 0, o = 0, f = t + s;
  switch (o = i / (f > 1 ? 2 - f : f), t) {
    case a:
      c = ((r - n) / i + 6) % 6;
      break;
    case r:
      c = (n - a) / i + 2;
      break;
    case n:
      c = (a - r) / i + 4;
      break;
  }
  return [c / 6, o, f / 2];
}
function Ll(e) {
  var a = e[0], r = e[1], n = e[2], t = r * 2 * (n < 0.5 ? n : 1 - n), s = n - t / 2, i = [s, s, s], c = 6 * a, o;
  if (r !== 0) switch (c | 0) {
    case 0:
    case 6:
      o = t * c, i[0] += t, i[1] += o;
      break;
    case 1:
      o = t * (2 - c), i[0] += o, i[1] += t;
      break;
    case 2:
      o = t * (c - 2), i[1] += t, i[2] += o;
      break;
    case 3:
      o = t * (4 - c), i[1] += o, i[2] += t;
      break;
    case 4:
      o = t * (c - 4), i[2] += t, i[0] += o;
      break;
    case 5:
      o = t * (6 - c), i[2] += o, i[0] += t;
      break;
  }
  for (var f = 0; f != 3; ++f) i[f] = Math.round(i[f] * 255);
  return i;
}
function At(e, a) {
  if (a === 0) return e;
  var r = Pl(bl(e));
  return a < 0 ? r[2] = r[2] * (1 + a) : r[2] = 1 - (1 - r[2]) * (1 - a), Ya(Ll(r));
}
var Xs = 6, Ml = 15, Bl = 1, hr = Xs;
function Ft(e) {
  return Math.floor((e + Math.round(128 / hr) / 256) * hr);
}
function St(e) {
  return Math.floor((e - 5) / hr * 100 + 0.5) / 100;
}
function jt(e) {
  return Math.round((e * hr + 5) / hr * 256) / 256;
}
function Bt(e) {
  return jt(St(Ft(e)));
}
function E0(e) {
  var a = Math.abs(e - Bt(e)), r = hr;
  if (a > 5e-3) for (hr = Bl; hr < Ml; ++hr) Math.abs(e - Bt(e)) <= a && (a = Math.abs(e - Bt(e)), r = hr);
  hr = r;
}
function ka(e) {
  e.width ? (e.wpx = Ft(e.width), e.wch = St(e.wpx), e.MDW = hr) : e.wpx ? (e.wch = St(e.wpx), e.width = jt(e.wch), e.MDW = hr) : typeof e.wch == "number" && (e.width = jt(e.wch), e.wpx = Ft(e.width), e.MDW = hr), e.customWidth && delete e.customWidth;
}
var Ul = 96, $s = Ul;
function Ks(e) {
  return e * 96 / $s;
}
function ja(e) {
  return e * $s / 96;
}
var Hl = {
  None: "none",
  Solid: "solid",
  Gray50: "mediumGray",
  Gray75: "darkGray",
  Gray25: "lightGray",
  HorzStripe: "darkHorizontal",
  VertStripe: "darkVertical",
  ReverseDiagStripe: "darkDown",
  DiagStripe: "darkUp",
  DiagCross: "darkGrid",
  ThickDiagCross: "darkTrellis",
  ThinHorzStripe: "lightHorizontal",
  ThinVertStripe: "lightVertical",
  ThinReverseDiagStripe: "lightDown",
  ThinHorzCross: "lightGrid"
};
function Wl(e, a, r, n) {
  a.Borders = [];
  var t = {}, s = !1;
  (e[0].match(lr) || []).forEach(function(i) {
    var c = ge(i);
    switch (Mr(c[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      /* 18.8.4 border CT_Border */
      case "<border":
      case "<border>":
      case "<border/>":
        t = /*::(*/
        {}, c.diagonalUp && (t.diagonalUp = be(c.diagonalUp)), c.diagonalDown && (t.diagonalDown = be(c.diagonalDown)), a.Borders.push(t);
        break;
      case "</border>":
        break;
      /* note: not in spec, appears to be CT_BorderPr */
      case "<left/>":
        break;
      case "<left":
      case "<left>":
        break;
      case "</left>":
        break;
      /* note: not in spec, appears to be CT_BorderPr */
      case "<right/>":
        break;
      case "<right":
      case "<right>":
        break;
      case "</right>":
        break;
      /* 18.8.43 top CT_BorderPr */
      case "<top/>":
        break;
      case "<top":
      case "<top>":
        break;
      case "</top>":
        break;
      /* 18.8.6 bottom CT_BorderPr */
      case "<bottom/>":
        break;
      case "<bottom":
      case "<bottom>":
        break;
      case "</bottom>":
        break;
      /* 18.8.13 diagonal CT_BorderPr */
      case "<diagonal":
      case "<diagonal>":
      case "<diagonal/>":
        break;
      case "</diagonal>":
        break;
      /* 18.8.25 horizontal CT_BorderPr */
      case "<horizontal":
      case "<horizontal>":
      case "<horizontal/>":
        break;
      case "</horizontal>":
        break;
      /* 18.8.44 vertical CT_BorderPr */
      case "<vertical":
      case "<vertical>":
      case "<vertical/>":
        break;
      case "</vertical>":
        break;
      /* 18.8.37 start CT_BorderPr */
      case "<start":
      case "<start>":
      case "<start/>":
        break;
      case "</start>":
        break;
      /* 18.8.16 end CT_BorderPr */
      case "<end":
      case "<end>":
      case "<end/>":
        break;
      case "</end>":
        break;
      /* 18.8.? color CT_Color */
      case "<color":
      case "<color>":
        break;
      case "<color/>":
      case "</color>":
        break;
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (n && n.WTF && !s)
          throw new Error("unrecognized " + c[0] + " in borders");
    }
  });
}
function Vl(e, a, r, n) {
  a.Fills = [];
  var t = {}, s = !1;
  (e[0].match(lr) || []).forEach(function(i) {
    var c = ge(i);
    switch (Mr(c[0])) {
      case "<fills":
      case "<fills>":
      case "</fills>":
        break;
      /* 18.8.20 fill CT_Fill */
      case "<fill>":
      case "<fill":
      case "<fill/>":
        t = {}, a.Fills.push(t);
        break;
      case "</fill>":
        break;
      /* 18.8.24 gradientFill CT_GradientFill */
      case "<gradientFill>":
        break;
      case "<gradientFill":
      case "</gradientFill>":
        a.Fills.push(t), t = {};
        break;
      /* 18.8.32 patternFill CT_PatternFill */
      case "<patternFill":
      case "<patternFill>":
        c.patternType && (t.patternType = c.patternType);
        break;
      case "<patternFill/>":
      case "</patternFill>":
        break;
      /* 18.8.3 bgColor CT_Color */
      case "<bgColor":
        t.bgColor || (t.bgColor = {}), c.indexed && (t.bgColor.indexed = parseInt(c.indexed, 10)), c.theme && (t.bgColor.theme = parseInt(c.theme, 10)), c.tint && (t.bgColor.tint = parseFloat(c.tint)), c.rgb && (t.bgColor.rgb = c.rgb.slice(-6));
        break;
      case "<bgColor/>":
      case "</bgColor>":
        break;
      /* 18.8.19 fgColor CT_Color */
      case "<fgColor":
        t.fgColor || (t.fgColor = {}), c.theme && (t.fgColor.theme = parseInt(c.theme, 10)), c.tint && (t.fgColor.tint = parseFloat(c.tint)), c.rgb != null && (t.fgColor.rgb = c.rgb.slice(-6));
        break;
      case "<fgColor/>":
      case "</fgColor>":
        break;
      /* 18.8.38 stop CT_GradientStop */
      case "<stop":
      case "<stop/>":
        break;
      case "</stop>":
        break;
      /* 18.8.? color CT_Color */
      case "<color":
      case "<color/>":
        break;
      case "</color>":
        break;
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (n && n.WTF && !s)
          throw new Error("unrecognized " + c[0] + " in fills");
    }
  });
}
function Gl(e, a, r, n) {
  a.Fonts = [];
  var t = {}, s = !1;
  (e[0].match(lr) || []).forEach(function(i) {
    var c = ge(i);
    switch (Mr(c[0])) {
      case "<fonts":
      case "<fonts>":
      case "</fonts>":
        break;
      /* 18.8.22 font CT_Font */
      case "<font":
      case "<font>":
        break;
      case "</font>":
      case "<font/>":
        a.Fonts.push(t), t = {};
        break;
      /* 18.8.29 name CT_FontName */
      case "<name":
        c.val && (t.name = Re(c.val));
        break;
      case "<name/>":
      case "</name>":
        break;
      /* 18.8.2  b CT_BooleanProperty */
      case "<b":
        t.bold = c.val ? be(c.val) : 1;
        break;
      case "<b/>":
        t.bold = 1;
        break;
      /* 18.8.26 i CT_BooleanProperty */
      case "<i":
        t.italic = c.val ? be(c.val) : 1;
        break;
      case "<i/>":
        t.italic = 1;
        break;
      /* 18.4.13 u CT_UnderlineProperty */
      case "<u":
        switch (c.val) {
          case "none":
            t.underline = 0;
            break;
          case "single":
            t.underline = 1;
            break;
          case "double":
            t.underline = 2;
            break;
          case "singleAccounting":
            t.underline = 33;
            break;
          case "doubleAccounting":
            t.underline = 34;
            break;
        }
        break;
      case "<u/>":
        t.underline = 1;
        break;
      /* 18.4.10 strike CT_BooleanProperty */
      case "<strike":
        t.strike = c.val ? be(c.val) : 1;
        break;
      case "<strike/>":
        t.strike = 1;
        break;
      /* 18.4.2  outline CT_BooleanProperty */
      case "<outline":
        t.outline = c.val ? be(c.val) : 1;
        break;
      case "<outline/>":
        t.outline = 1;
        break;
      /* 18.8.36 shadow CT_BooleanProperty */
      case "<shadow":
        t.shadow = c.val ? be(c.val) : 1;
        break;
      case "<shadow/>":
        t.shadow = 1;
        break;
      /* 18.8.12 condense CT_BooleanProperty */
      case "<condense":
        t.condense = c.val ? be(c.val) : 1;
        break;
      case "<condense/>":
        t.condense = 1;
        break;
      /* 18.8.17 extend CT_BooleanProperty */
      case "<extend":
        t.extend = c.val ? be(c.val) : 1;
        break;
      case "<extend/>":
        t.extend = 1;
        break;
      /* 18.4.11 sz CT_FontSize */
      case "<sz":
        c.val && (t.sz = +c.val);
        break;
      case "<sz/>":
      case "</sz>":
        break;
      /* 18.4.14 vertAlign CT_VerticalAlignFontProperty */
      case "<vertAlign":
        c.val && (t.vertAlign = c.val);
        break;
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      /* 18.8.18 family CT_FontFamily */
      case "<family":
        c.val && (t.family = parseInt(c.val, 10));
        break;
      case "<family/>":
      case "</family>":
        break;
      /* 18.8.35 scheme CT_FontScheme */
      case "<scheme":
        c.val && (t.scheme = c.val);
        break;
      case "<scheme/>":
      case "</scheme>":
        break;
      /* 18.4.1 charset CT_IntProperty */
      case "<charset":
        if (c.val == "1") break;
        c.codepage = a0[parseInt(c.val, 10)];
        break;
      /* 18.?.? color CT_Color */
      case "<color":
        if (t.color || (t.color = {}), c.auto && (t.color.auto = be(c.auto)), c.rgb) t.color.rgb = c.rgb.slice(-6);
        else if (c.indexed) {
          t.color.index = parseInt(c.indexed, 10);
          var o = sa[t.color.index];
          t.color.index == 81 && (o = sa[1]), o || (o = sa[1]), t.color.rgb = o[0].toString(16) + o[1].toString(16) + o[2].toString(16);
        } else c.theme && (t.color.theme = parseInt(c.theme, 10), c.tint && (t.color.tint = parseFloat(c.tint)), c.theme && r.themeElements && r.themeElements.clrScheme && (t.color.rgb = At(r.themeElements.clrScheme[t.color.theme].rgb, t.color.tint || 0)));
        break;
      case "<color/>":
      case "</color>":
        break;
      /* note: sometimes mc:AlternateContent appears bare */
      case "<AlternateContent":
        s = !0;
        break;
      case "</AlternateContent>":
        s = !1;
        break;
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (n && n.WTF && !s)
          throw new Error("unrecognized " + c[0] + " in fonts");
    }
  });
}
function zl(e, a, r) {
  a.NumberFmt = [];
  for (var n = Lr(Ee), t = 0; t < n.length; ++t) a.NumberFmt[n[t]] = Ee[n[t]];
  var s = e[0].match(lr);
  if (s)
    for (t = 0; t < s.length; ++t) {
      var i = ge(s[t]);
      switch (Mr(i[0])) {
        case "<numFmts":
        case "</numFmts>":
        case "<numFmts/>":
        case "<numFmts>":
          break;
        case "<numFmt":
          {
            var c = Ce(Re(i.formatCode)), o = parseInt(i.numFmtId, 10);
            if (a.NumberFmt[o] = c, o > 0) {
              if (o > 392) {
                for (o = 392; o > 60 && a.NumberFmt[o] != null; --o) ;
                a.NumberFmt[o] = c;
              }
              na(c, o);
            }
          }
          break;
        case "</numFmt>":
          break;
        default:
          if (r.WTF) throw new Error("unrecognized " + i[0] + " in numFmts");
      }
    }
}
var ht = ["numFmtId", "fillId", "fontId", "borderId", "xfId"], xt = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function Xl(e, a, r) {
  a.CellXf = [];
  var n, t = !1;
  (e[0].match(lr) || []).forEach(function(s) {
    var i = ge(s), c = 0;
    switch (Mr(i[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      /* 18.8.45 xf CT_Xf */
      case "<xf":
      case "<xf/>":
        for (n = i, delete n[0], c = 0; c < ht.length; ++c) n[ht[c]] && (n[ht[c]] = parseInt(n[ht[c]], 10));
        for (c = 0; c < xt.length; ++c) n[xt[c]] && (n[xt[c]] = be(n[xt[c]]));
        if (a.NumberFmt && n.numFmtId > 392) {
          for (c = 392; c > 60; --c) if (a.NumberFmt[n.numFmtId] == a.NumberFmt[c]) {
            n.numFmtId = c;
            break;
          }
        }
        a.CellXf.push(n);
        break;
      case "</xf>":
        break;
      /* 18.8.1 alignment CT_CellAlignment */
      case "<alignment":
      case "<alignment/>":
        var o = {};
        i.vertical && (o.vertical = i.vertical), i.horizontal && (o.horizontal = i.horizontal), i.textRotation != null && (o.textRotation = i.textRotation), i.indent && (o.indent = i.indent), i.wrapText && (o.wrapText = be(i.wrapText)), n.alignment = o;
        break;
      case "</alignment>":
        break;
      /* 18.8.33 protection CT_CellProtection */
      case "<protection":
        break;
      case "</protection>":
      case "<protection/>":
        break;
      /* note: sometimes mc:AlternateContent appears bare */
      case "<AlternateContent":
        t = !0;
        break;
      case "</AlternateContent>":
        t = !1;
        break;
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        t = !0;
        break;
      case "</ext>":
        t = !1;
        break;
      default:
        if (r && r.WTF && !t)
          throw new Error("unrecognized " + i[0] + " in cellXfs");
    }
  });
}
var $l = /* @__PURE__ */ (function() {
  var a = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/, r = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/, n = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/, t = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/, s = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
  return function(c, o, f) {
    var l = {};
    if (!c) return l;
    c = c.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    var u;
    return (u = c.match(a)) && zl(u, l, f), (u = c.match(t)) && Gl(u, l, o, f), (u = c.match(n)) && Vl(u, l, o, f), (u = c.match(s)) && Wl(u, l, o, f), (u = c.match(r)) && Xl(u, l, f), l;
  };
})();
function Kl(e, a) {
  var r = e.read_shift(2), n = fr(e);
  return [r, n];
}
function Yl(e, a, r) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var t = af(e);
  t.fItalic && (n.italic = 1), t.fCondense && (n.condense = 1), t.fExtend && (n.extend = 1), t.fShadow && (n.shadow = 1), t.fOutline && (n.outline = 1), t.fStrikeout && (n.strike = 1);
  var s = e.read_shift(2);
  switch (s === 700 && (n.bold = 1), e.read_shift(2)) {
    /* case 0: out.vertAlign = "baseline"; break; */
    case 1:
      n.vertAlign = "superscript";
      break;
    case 2:
      n.vertAlign = "subscript";
      break;
  }
  var i = e.read_shift(1);
  i != 0 && (n.underline = i);
  var c = e.read_shift(1);
  c > 0 && (n.family = c);
  var o = e.read_shift(1);
  switch (o > 0 && (n.charset = o), e.l++, n.color = rf(e), e.read_shift(1)) {
    /* case 0: out.scheme = "none": break; */
    case 1:
      n.scheme = "major";
      break;
    case 2:
      n.scheme = "minor";
      break;
  }
  return n.name = fr(e), n;
}
var jl = or;
function Jl(e, a) {
  var r = e.l + a, n = e.read_shift(2), t = e.read_shift(2);
  return e.l = r, { ixfe: n, numFmtId: t };
}
var ql = or;
function Zl(e, a, r) {
  var n = {};
  n.NumberFmt = [];
  for (var t in Ee) n.NumberFmt[t] = Ee[t];
  n.CellXf = [], n.Fonts = [];
  var s = [], i = !1;
  return Xr(e, function(o, f, l) {
    switch (l) {
      case 44:
        n.NumberFmt[o[0]] = o[1], na(o[1], o[0]);
        break;
      case 43:
        n.Fonts.push(o), o.color.theme != null && a && a.themeElements && a.themeElements.clrScheme && (o.color.rgb = At(a.themeElements.clrScheme[o.color.theme].rgb, o.color.tint || 0));
        break;
      case 1025:
        break;
      case 45:
        break;
      case 46:
        break;
      case 47:
        s[s.length - 1] == 617 && n.CellXf.push(o);
        break;
      case 48:
      /* BrtStyle */
      case 507:
      /* BrtDXF */
      case 572:
      /* BrtMRUColor */
      case 475:
        break;
      case 1171:
      /* BrtDXF14 */
      case 2102:
      /* BrtDXF15 */
      case 1130:
      /* BrtSlicerStyleElement */
      case 512:
      /* BrtTableStyleElement */
      case 2095:
      /* BrtTimelineStyleElement */
      case 3072:
        break;
      case 35:
        i = !0;
        break;
      case 36:
        i = !1;
        break;
      case 37:
        s.push(l), i = !0;
        break;
      case 38:
        s.pop(), i = !1;
        break;
      default:
        if (f.T > 0) s.push(l);
        else if (f.T < 0) s.pop();
        else if (!i || r.WTF && s[s.length - 1] != 37) throw new Error("Unexpected record 0x" + l.toString(16));
    }
  }), n;
}
var Ql = [
  "</a:lt1>",
  "</a:dk1>",
  "</a:lt2>",
  "</a:dk2>",
  "</a:accent1>",
  "</a:accent2>",
  "</a:accent3>",
  "</a:accent4>",
  "</a:accent5>",
  "</a:accent6>",
  "</a:hlink>",
  "</a:folHlink>"
];
function eu(e, a, r) {
  a.themeElements.clrScheme = [];
  var n = {};
  (e[0].match(lr) || []).forEach(function(t) {
    var s = ge(t);
    switch (s[0]) {
      /* 20.1.6.2 clrScheme (Color Scheme) CT_ColorScheme */
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      /* 20.1.2.3.32 srgbClr CT_SRgbColor */
      case "<a:srgbClr":
        n.rgb = s.val;
        break;
      /* 20.1.2.3.33 sysClr CT_SystemColor */
      case "<a:sysClr":
        n.rgb = s.lastClr;
        break;
      /* 20.1.4.1.1 accent1 (Accent 1) */
      /* 20.1.4.1.2 accent2 (Accent 2) */
      /* 20.1.4.1.3 accent3 (Accent 3) */
      /* 20.1.4.1.4 accent4 (Accent 4) */
      /* 20.1.4.1.5 accent5 (Accent 5) */
      /* 20.1.4.1.6 accent6 (Accent 6) */
      /* 20.1.4.1.9 dk1 (Dark 1) */
      /* 20.1.4.1.10 dk2 (Dark 2) */
      /* 20.1.4.1.15 folHlink (Followed Hyperlink) */
      /* 20.1.4.1.19 hlink (Hyperlink) */
      /* 20.1.4.1.22 lt1 (Light 1) */
      /* 20.1.4.1.23 lt2 (Light 2) */
      case "<a:dk1>":
      case "</a:dk1>":
      case "<a:lt1>":
      case "</a:lt1>":
      case "<a:dk2>":
      case "</a:dk2>":
      case "<a:lt2>":
      case "</a:lt2>":
      case "<a:accent1>":
      case "</a:accent1>":
      case "<a:accent2>":
      case "</a:accent2>":
      case "<a:accent3>":
      case "</a:accent3>":
      case "<a:accent4>":
      case "</a:accent4>":
      case "<a:accent5>":
      case "</a:accent5>":
      case "<a:accent6>":
      case "</a:accent6>":
      case "<a:hlink>":
      case "</a:hlink>":
      case "<a:folHlink>":
      case "</a:folHlink>":
        s[0].charAt(1) === "/" ? (a.themeElements.clrScheme[Ql.indexOf(s[0])] = n, n = {}) : n.name = s[0].slice(3, s[0].length - 1);
        break;
      default:
        if (r && r.WTF) throw new Error("Unrecognized " + s[0] + " in clrScheme");
    }
  });
}
function ru() {
}
function au() {
}
var tu = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/, nu = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/, su = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
function iu(e, a, r) {
  a.themeElements = {};
  var n;
  [
    /* clrScheme CT_ColorScheme */
    ["clrScheme", tu, eu],
    /* fontScheme CT_FontScheme */
    ["fontScheme", nu, ru],
    /* fmtScheme CT_StyleMatrix */
    ["fmtScheme", su, au]
  ].forEach(function(t) {
    if (!(n = e.match(t[1]))) throw new Error(t[0] + " not found in themeElements");
    t[2](n, a, r);
  });
}
var cu = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function Ys(e, a) {
  (!e || e.length === 0) && (e = fu());
  var r, n = {};
  if (!(r = e.match(cu))) throw new Error("themeElements not found in theme");
  return iu(r[0], n, a), n.raw = e, n;
}
function fu(e, a) {
  var r = [ss];
  return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("");
}
function ou(e, a, r) {
  var n = e.l + a, t = e.read_shift(4);
  if (t !== 124226) {
    if (!r.cellStyles) {
      e.l = n;
      return;
    }
    var s = e.slice(e.l);
    e.l = n;
    var i;
    try {
      i = ns(s, { type: "array" });
    } catch {
      return;
    }
    var c = Er(i, "theme/theme/theme1.xml", !0);
    if (c)
      return Ys(c, r);
  }
}
function lu(e) {
  return e.read_shift(4);
}
function uu(e) {
  var a = {};
  switch (a.xclrType = e.read_shift(2), a.nTintShade = e.read_shift(2), a.xclrType) {
    case 0:
      e.l += 4;
      break;
    case 1:
      a.xclrValue = hu(e, 4);
      break;
    case 2:
      a.xclrValue = bs(e);
      break;
    case 3:
      a.xclrValue = lu(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return e.l += 8, a;
}
function hu(e, a) {
  return or(e, a);
}
function xu(e, a) {
  return or(e, a);
}
function du(e) {
  var a = e.read_shift(2), r = e.read_shift(2) - 4, n = [a];
  switch (a) {
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 13:
      n[1] = uu(e);
      break;
    case 6:
      n[1] = xu(e, r);
      break;
    case 14:
    case 15:
      n[1] = e.read_shift(r === 1 ? 1 : 2);
      break;
    default:
      throw new Error("Unrecognized ExtProp type: " + a + " " + r);
  }
  return n;
}
function pu(e, a) {
  var r = e.l + a;
  e.l += 2;
  var n = e.read_shift(2);
  e.l += 2;
  for (var t = e.read_shift(2), s = []; t-- > 0; ) s.push(du(e, r - e.l));
  return { ixfe: n, ext: s };
}
function vu(e, a) {
  a.forEach(function(r) {
    r[0];
  });
}
function gu(e, a) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: fr(e)
  };
}
function mu(e) {
  for (var a = [], r = e.read_shift(4); r-- > 0; )
    a.push([e.read_shift(4), e.read_shift(4)]);
  return a;
}
function _u(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function Eu(e, a, r) {
  var n = { Types: [], Cell: [], Value: [] }, t = r || {}, s = [], i = !1, c = 2;
  return Xr(e, function(o, f, l) {
    switch (l) {
      case 335:
        n.Types.push({ name: o.name });
        break;
      case 51:
        o.forEach(function(u) {
          c == 1 ? n.Cell.push({ type: n.Types[u[0] - 1].name, index: u[1] }) : c == 0 && n.Value.push({ type: n.Types[u[0] - 1].name, index: u[1] });
        });
        break;
      case 337:
        c = o ? 1 : 0;
        break;
      case 338:
        c = 2;
        break;
      case 35:
        s.push(l), i = !0;
        break;
      case 36:
        s.pop(), i = !1;
        break;
      default:
        if (!f.T) {
          if (!i || t.WTF && s[s.length - 1] != 35)
            throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }), n;
}
function Tu(e, a, r) {
  var n = { Types: [], Cell: [], Value: [] };
  if (!e)
    return n;
  var t = !1, s = 2, i;
  return e.replace(lr, function(c) {
    var o = ge(c);
    switch (Mr(o[0])) {
      case "<?xml":
        break;
      case "<metadata":
      case "</metadata>":
        break;
      case "<metadataTypes":
      case "</metadataTypes>":
        break;
      case "<metadataType":
        n.Types.push({ name: o.name });
        break;
      case "</metadataType>":
        break;
      case "<futureMetadata":
        for (var f = 0; f < n.Types.length; ++f)
          n.Types[f].name == o.name && (i = n.Types[f]);
        break;
      case "</futureMetadata>":
        break;
      case "<bk>":
        break;
      case "</bk>":
        break;
      case "<rc":
        s == 1 ? n.Cell.push({ type: n.Types[o.t - 1].name, index: +o.v }) : s == 0 && n.Value.push({ type: n.Types[o.t - 1].name, index: +o.v });
        break;
      case "</rc>":
        break;
      case "<cellMetadata":
        s = 1;
        break;
      case "</cellMetadata>":
        s = 2;
        break;
      case "<valueMetadata":
        s = 0;
        break;
      case "</valueMetadata>":
        s = 2;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        t = !0;
        break;
      case "</ext>":
        t = !1;
        break;
      case "<rvb":
        if (!i)
          break;
        i.offsets || (i.offsets = []), i.offsets.push(+o.i);
        break;
      default:
        if (!t && r.WTF)
          throw new Error("unrecognized " + o[0] + " in metadata");
    }
    return c;
  }), n;
}
function ku(e) {
  var a = [];
  if (!e) return a;
  var r = 1;
  return (e.match(lr) || []).forEach(function(n) {
    var t = ge(n);
    switch (t[0]) {
      case "<?xml":
        break;
      /* 18.6.2  calcChain CT_CalcChain 1 */
      case "<calcChain":
      case "<calcChain>":
      case "</calcChain>":
        break;
      /* 18.6.1  c CT_CalcCell 1 */
      case "<c":
        delete t[0], t.i ? r = t.i : t.i = r, a.push(t);
        break;
    }
  }), a;
}
function wu(e) {
  var a = {};
  a.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4), r.c = e.read_shift(4), a.r = me(r);
  var n = e.read_shift(1);
  return n & 2 && (a.l = "1"), n & 8 && (a.a = "1"), a;
}
function Au(e, a, r) {
  var n = [];
  return Xr(e, function(s, i, c) {
    switch (c) {
      case 63:
        n.push(s);
        break;
      default:
        if (!i.T) throw new Error("Unexpected record 0x" + c.toString(16));
    }
  }), n;
}
function Fu(e, a, r, n) {
  if (!e) return e;
  var t = n || {}, s = !1;
  Xr(e, function(c, o, f) {
    switch (f) {
      case 359:
      /* 'BrtSupTabs' */
      case 363:
      /* 'BrtExternTableStart' */
      case 364:
      /* 'BrtExternTableEnd' */
      case 366:
      /* 'BrtExternRowHdr' */
      case 367:
      /* 'BrtExternCellBlank' */
      case 368:
      /* 'BrtExternCellReal' */
      case 369:
      /* 'BrtExternCellBool' */
      case 370:
      /* 'BrtExternCellError' */
      case 371:
      /* 'BrtExternCellString' */
      case 472:
      /* 'BrtExternValueMeta' */
      case 577:
      /* 'BrtSupNameStart' */
      case 578:
      /* 'BrtSupNameValueStart' */
      case 579:
      /* 'BrtSupNameValueEnd' */
      case 580:
      /* 'BrtSupNameNum' */
      case 581:
      /* 'BrtSupNameErr' */
      case 582:
      /* 'BrtSupNameSt' */
      case 583:
      /* 'BrtSupNameNil' */
      case 584:
      /* 'BrtSupNameBool' */
      case 585:
      /* 'BrtSupNameFmla' */
      case 586:
      /* 'BrtSupNameBits' */
      case 587:
        break;
      case 35:
        s = !0;
        break;
      case 36:
        s = !1;
        break;
      default:
        if (!o.T) {
          if (!s || t.WTF) throw new Error("Unexpected record 0x" + f.toString(16));
        }
    }
  }, t);
}
function Su(e, a) {
  if (!e) return "??";
  var r = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
  return a["!id"][r].Target;
}
function En(e, a, r, n) {
  var t = Array.isArray(e), s;
  a.forEach(function(i) {
    var c = xr(i.ref);
    if (t ? (e[c.r] || (e[c.r] = []), s = e[c.r][c.c]) : s = e[i.ref], !s) {
      s = { t: "z" }, t ? e[c.r][c.c] = s : e[i.ref] = s;
      var o = Ue(e["!ref"] || "BDWGO1000001:A1");
      o.s.r > c.r && (o.s.r = c.r), o.e.r < c.r && (o.e.r = c.r), o.s.c > c.c && (o.s.c = c.c), o.e.c < c.c && (o.e.c = c.c);
      var f = Se(o);
      f !== e["!ref"] && (e["!ref"] = f);
    }
    s.c || (s.c = []);
    var l = { a: i.author, t: i.t, r: i.r, T: r };
    i.h && (l.h = i.h);
    for (var u = s.c.length - 1; u >= 0; --u) {
      if (!r && s.c[u].T) return;
      r && !s.c[u].T && s.c.splice(u, 1);
    }
    if (r && n) {
      for (u = 0; u < n.length; ++u)
        if (l.a == n[u].id) {
          l.a = n[u].name || l.a;
          break;
        }
    }
    s.c.push(l);
  });
}
function Cu(e, a) {
  if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
  var r = [], n = [], t = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
  t && t[1] && t[1].split(/<\/\w*:?author>/).forEach(function(i) {
    if (!(i === "" || i.trim() === "")) {
      var c = i.match(/<(?:\w+:)?author[^>]*>(.*)/);
      c && r.push(c[1]);
    }
  });
  var s = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
  return s && s[1] && s[1].split(/<\/\w*:?comment>/).forEach(function(i) {
    if (!(i === "" || i.trim() === "")) {
      var c = i.match(/<(?:\w+:)?comment[^>]*>/);
      if (c) {
        var o = ge(c[0]), f = { author: o.authorId && r[o.authorId] || "sheetjsghost", ref: o.ref, guid: o.guid }, l = xr(o.ref);
        if (!(a.sheetRows && a.sheetRows <= l.r)) {
          var u = i.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/), x = !!u && !!u[1] && _0(u[1]) || { r: "", t: "", h: "" };
          f.r = x.r, x.r == "<t></t>" && (x.t = x.h = ""), f.t = (x.t || "").replace(/\r\n/g, `
`).replace(/\r/g, `
`), a.cellHTML && (f.h = x.h), n.push(f);
        }
      }
    }
  }), n;
}
function yu(e, a) {
  var r = [], n = !1, t = {}, s = 0;
  return e.replace(lr, function(c, o) {
    var f = ge(c);
    switch (Mr(f[0])) {
      case "<?xml":
        break;
      /* 2.6.207 ThreadedComments CT_ThreadedComments */
      case "<ThreadedComments":
        break;
      case "</ThreadedComments>":
        break;
      /* 2.6.205 threadedComment CT_ThreadedComment */
      case "<threadedComment":
        t = { author: f.personId, guid: f.id, ref: f.ref, T: 1 };
        break;
      case "</threadedComment>":
        t.t != null && r.push(t);
        break;
      case "<text>":
      case "<text":
        s = o + c.length;
        break;
      case "</text>":
        t.t = e.slice(s, o).replace(/\r\n/g, `
`).replace(/\r/g, `
`);
        break;
      /* 2.6.206 mentions CT_ThreadedCommentMentions TODO */
      case "<mentions":
      case "<mentions>":
        n = !0;
        break;
      case "</mentions>":
        n = !1;
        break;
      /* 2.6.202 mention CT_Mention TODO */
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      /* 18.2.7  ext CT_Extension + */
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      default:
        if (!n && a.WTF) throw new Error("unrecognized " + f[0] + " in threaded comments");
    }
    return c;
  }), r;
}
function Ou(e, a) {
  var r = [], n = !1;
  return e.replace(lr, function(s) {
    var i = ge(s);
    switch (Mr(i[0])) {
      case "<?xml":
        break;
      /* 2.4.85 personList CT_PersonList */
      case "<personList":
        break;
      case "</personList>":
        break;
      /* 2.6.203 person CT_Person TODO: providers */
      case "<person":
        r.push({ name: i.displayname, id: i.id });
        break;
      case "</person>":
        break;
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      /* 18.2.7  ext CT_Extension + */
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      default:
        if (!n && a.WTF) throw new Error("unrecognized " + i[0] + " in threaded comments");
    }
    return s;
  }), r;
}
function Du(e) {
  var a = {};
  a.iauthor = e.read_shift(4);
  var r = ha(e);
  return a.rfx = r.s, a.ref = me(r.s), e.l += 16, a;
}
var Ru = fr;
function Iu(e, a) {
  var r = [], n = [], t = {}, s = !1;
  return Xr(e, function(c, o, f) {
    switch (f) {
      case 632:
        n.push(c);
        break;
      case 635:
        t = c;
        break;
      case 637:
        t.t = c.t, t.h = c.h, t.r = c.r;
        break;
      case 636:
        if (t.author = n[t.iauthor], delete t.iauthor, a.sheetRows && t.rfx && a.sheetRows <= t.rfx.r) break;
        t.t || (t.t = ""), delete t.rfx, r.push(t);
        break;
      case 3072:
        break;
      case 35:
        s = !0;
        break;
      case 36:
        s = !1;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!o.T) {
          if (!s || a.WTF) throw new Error("Unexpected record 0x" + f.toString(16));
        }
    }
  }), r;
}
var Nu = "application/vnd.ms-office.vbaProject";
function bu(e) {
  var a = Fe.utils.cfb_new({ root: "R" });
  return e.FullPaths.forEach(function(r, n) {
    if (!(r.slice(-1) === "/" || !r.match(/_VBA_PROJECT_CUR/))) {
      var t = r.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
      Fe.utils.cfb_add(a, t, e.FileIndex[n].content);
    }
  }), Fe.write(a);
}
function Pu() {
  return { "!type": "dialog" };
}
function Lu() {
  return { "!type": "dialog" };
}
function Mu() {
  return { "!type": "macro" };
}
function Bu() {
  return { "!type": "macro" };
}
var _a = /* @__PURE__ */ (function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, a = { r: 0, c: 0 };
  function r(n, t, s, i) {
    var c = !1, o = !1;
    s.length == 0 ? o = !0 : s.charAt(0) == "[" && (o = !0, s = s.slice(1, -1)), i.length == 0 ? c = !0 : i.charAt(0) == "[" && (c = !0, i = i.slice(1, -1));
    var f = s.length > 0 ? parseInt(s, 10) | 0 : 0, l = i.length > 0 ? parseInt(i, 10) | 0 : 0;
    return c ? l += a.c : --l, o ? f += a.r : --f, t + (c ? "" : "$") + Ye(l) + (o ? "" : "$") + er(f);
  }
  return function(t, s) {
    return a = s, t.replace(e, r);
  };
})(), js = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g, Uu = /* @__PURE__ */ (function() {
  return function(a, r) {
    return a.replace(js, function(n, t, s, i, c, o) {
      var f = x0(i) - (s ? 0 : r.c), l = h0(o) - (c ? 0 : r.r), u = l == 0 ? "" : c ? l + 1 : "[" + l + "]", x = f == 0 ? "" : s ? f + 1 : "[" + f + "]";
      return t + "R" + u + "C" + x;
    });
  };
})();
function Js(e, a) {
  return e.replace(js, function(r, n, t, s, i, c) {
    return n + (t == "$" ? t + s : Ye(x0(s) + a.c)) + (i == "$" ? i + c : er(h0(c) + a.r));
  });
}
function Hu(e, a, r) {
  var n = Aa(a), t = n.s, s = xr(r), i = { r: s.r - t.r, c: s.c - t.c };
  return Js(e, i);
}
function Wu(e) {
  return e.length != 1;
}
function Tn(e) {
  return e.replace(/_xlfn\./g, "");
}
function Ge(e) {
  e.l += 1;
}
function Zr(e, a) {
  var r = e.read_shift(2);
  return [r & 16383, r >> 14 & 1, r >> 15 & 1];
}
function qs(e, a, r) {
  var n = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return Zs(e);
    r.biff == 12 && (n = 4);
  }
  var t = e.read_shift(n), s = e.read_shift(n), i = Zr(e), c = Zr(e);
  return { s: { r: t, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: s, c: c[0], cRel: c[1], rRel: c[2] } };
}
function Zs(e) {
  var a = Zr(e), r = Zr(e), n = e.read_shift(1), t = e.read_shift(1);
  return { s: { r: a[0], c: n, cRel: a[1], rRel: a[2] }, e: { r: r[0], c: t, cRel: r[1], rRel: r[2] } };
}
function Vu(e, a, r) {
  if (r.biff < 8) return Zs(e);
  var n = e.read_shift(r.biff == 12 ? 4 : 2), t = e.read_shift(r.biff == 12 ? 4 : 2), s = Zr(e), i = Zr(e);
  return { s: { r: n, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: t, c: i[0], cRel: i[1], rRel: i[2] } };
}
function Qs(e, a, r) {
  if (r && r.biff >= 2 && r.biff <= 5) return Gu(e);
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2), t = Zr(e);
  return { r: n, c: t[0], cRel: t[1], rRel: t[2] };
}
function Gu(e) {
  var a = Zr(e), r = e.read_shift(1);
  return { r: a[0], c: r, cRel: a[1], rRel: a[2] };
}
function zu(e) {
  var a = e.read_shift(2), r = e.read_shift(2);
  return { r: a, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function Xu(e, a, r) {
  var n = r && r.biff ? r.biff : 8;
  if (n >= 2 && n <= 5) return $u(e);
  var t = e.read_shift(n >= 12 ? 4 : 2), s = e.read_shift(2), i = (s & 16384) >> 14, c = (s & 32768) >> 15;
  if (s &= 16383, c == 1) for (; t > 524287; ) t -= 1048576;
  if (i == 1) for (; s > 8191; ) s = s - 16384;
  return { r: t, c: s, cRel: i, rRel: c };
}
function $u(e) {
  var a = e.read_shift(2), r = e.read_shift(1), n = (a & 32768) >> 15, t = (a & 16384) >> 14;
  return a &= 16383, n == 1 && a >= 8192 && (a = a - 16384), t == 1 && r >= 128 && (r = r - 256), { r: a, c: r, cRel: t, rRel: n };
}
function Ku(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = qs(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [n, t];
}
function Yu(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = e.read_shift(2, "i"), s = 8;
  if (r) switch (r.biff) {
    case 5:
      e.l += 12, s = 6;
      break;
    case 12:
      s = 12;
      break;
  }
  var i = qs(e, s, r);
  return [n, t, i];
}
function ju(e, a, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [n];
}
function Ju(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = e.read_shift(2), s = 8;
  if (r) switch (r.biff) {
    case 5:
      e.l += 12, s = 6;
      break;
    case 12:
      s = 12;
      break;
  }
  return e.l += s, [n, t];
}
function qu(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = Vu(e, a - 1, r);
  return [n, t];
}
function Zu(e, a, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [n];
}
function kn(e) {
  var a = e[e.l + 1] & 1, r = 1;
  return e.l += 4, [a, r];
}
function Qu(e, a, r) {
  e.l += 2;
  for (var n = e.read_shift(r && r.biff == 2 ? 1 : 2), t = [], s = 0; s <= n; ++s) t.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return t;
}
function eh(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function rh(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function ah(e) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(2)];
}
function th(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += r && r.biff == 2 ? 3 : 4, [n];
}
function ei(e) {
  var a = e.read_shift(1), r = e.read_shift(1);
  return [a, r];
}
function nh(e) {
  return e.read_shift(2), ei(e);
}
function sh(e) {
  return e.read_shift(2), ei(e);
}
function ih(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = Qs(e, 0, r);
  return [n, t];
}
function ch(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = Xu(e, 0, r);
  return [n, t];
}
function fh(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var s = Qs(e, 0, r);
  return [n, t, s];
}
function oh(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [l1[t], ti[t], n];
}
function lh(e, a, r) {
  var n = e[e.l++], t = e.read_shift(1), s = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : uh(e);
  return [t, (s[0] === 0 ? ti : o1)[s[1]]];
}
function uh(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function hh(e, a, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function xh(e, a, r) {
  if (e.l++, r && r.biff == 12) return [e.read_shift(4, "i"), 0];
  var n = e.read_shift(2), t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function dh(e) {
  return e.l++, xa[e.read_shift(1)];
}
function ph(e) {
  return e.l++, e.read_shift(2);
}
function vh(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function gh(e) {
  return e.l++, ir(e);
}
function mh(e, a, r) {
  return e.l++, et(e, a - 1, r);
}
function _h(e, a) {
  var r = [e.read_shift(1)];
  if (a == 12) switch (r[0]) {
    case 2:
      r[0] = 4;
      break;
    /* SerBool */
    case 4:
      r[0] = 16;
      break;
    /* SerErr */
    case 0:
      r[0] = 1;
      break;
    /* SerNum */
    case 1:
      r[0] = 2;
      break;
  }
  switch (r[0]) {
    case 4:
      r[1] = He(e, 1) ? "TRUE" : "FALSE", a != 12 && (e.l += 7);
      break;
    case 37:
    /* appears to be an alias */
    case 16:
      r[1] = xa[e[e.l]], e.l += a == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = ir(e);
      break;
    case 2:
      r[1] = da(e, 0, { biff: a > 0 && a < 8 ? 2 : a });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function Eh(e, a, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), t = [], s = 0; s != n; ++s) t.push((r.biff == 12 ? ha : Ot)(e));
  return t;
}
function Th(e, a, r) {
  var n = 0, t = 0;
  r.biff == 12 ? (n = e.read_shift(4), t = e.read_shift(4)) : (t = 1 + e.read_shift(1), n = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--n, --t == 0 && (t = 256));
  for (var s = 0, i = []; s != n && (i[s] = []); ++s)
    for (var c = 0; c != t; ++c) i[s][c] = _h(e, r.biff);
  return i;
}
function kh(e, a, r) {
  var n = e.read_shift(1) >>> 5 & 3, t = !r || r.biff >= 8 ? 4 : 2, s = e.read_shift(t);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [n, 0, s];
}
function wh(e, a, r) {
  if (r.biff == 5) return Ah(e);
  var n = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2), s = e.read_shift(4);
  return [n, t, s];
}
function Ah(e) {
  var a = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2, "i");
  e.l += 8;
  var n = e.read_shift(2);
  return e.l += 12, [a, r, n];
}
function Fh(e, a, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function Sh(e, a, r) {
  var n = e.read_shift(1) >>> 5 & 3, t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function Ch(e, a, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n];
}
function yh(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = e.read_shift(2), s = 4;
  if (r) switch (r.biff) {
    case 5:
      s = 15;
      break;
    case 12:
      s = 6;
      break;
  }
  return e.l += s, [n, t];
}
var Oh = or, Dh = or, Rh = or;
function at(e, a, r) {
  return e.l += 2, [zu(e)];
}
function T0(e) {
  return e.l += 6, [];
}
var Ih = at, Nh = T0, bh = T0, Ph = at;
function ri(e) {
  return e.l += 2, [Xe(e), e.read_shift(2) & 1];
}
var Lh = at, Mh = ri, Bh = T0, Uh = at, Hh = at, Wh = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function Vh(e) {
  e.l += 2;
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(4), t = e.read_shift(2), s = e.read_shift(2), i = Wh[r >> 2 & 31];
  return { ixti: a, coltype: r & 3, rt: i, idx: n, c: t, C: s };
}
function Gh(e) {
  return e.l += 2, [e.read_shift(4)];
}
function zh(e, a, r) {
  return e.l += 5, e.l += 2, e.l += r.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function Xh(e, a, r) {
  return e.l += r.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function $h(e) {
  var a = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [a, r];
}
function Kh(e) {
  var a = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [a, r];
}
function Yh(e) {
  return e.l += 4, [0, 0];
}
var wn = {
  /*::[*/
  1: { n: "PtgExp", f: xh },
  /*::[*/
  2: { n: "PtgTbl", f: Rh },
  /*::[*/
  3: { n: "PtgAdd", f: Ge },
  /*::[*/
  4: { n: "PtgSub", f: Ge },
  /*::[*/
  5: { n: "PtgMul", f: Ge },
  /*::[*/
  6: { n: "PtgDiv", f: Ge },
  /*::[*/
  7: { n: "PtgPower", f: Ge },
  /*::[*/
  8: { n: "PtgConcat", f: Ge },
  /*::[*/
  9: { n: "PtgLt", f: Ge },
  /*::[*/
  10: { n: "PtgLe", f: Ge },
  /*::[*/
  11: { n: "PtgEq", f: Ge },
  /*::[*/
  12: { n: "PtgGe", f: Ge },
  /*::[*/
  13: { n: "PtgGt", f: Ge },
  /*::[*/
  14: { n: "PtgNe", f: Ge },
  /*::[*/
  15: { n: "PtgIsect", f: Ge },
  /*::[*/
  16: { n: "PtgUnion", f: Ge },
  /*::[*/
  17: { n: "PtgRange", f: Ge },
  /*::[*/
  18: { n: "PtgUplus", f: Ge },
  /*::[*/
  19: { n: "PtgUminus", f: Ge },
  /*::[*/
  20: { n: "PtgPercent", f: Ge },
  /*::[*/
  21: { n: "PtgParen", f: Ge },
  /*::[*/
  22: { n: "PtgMissArg", f: Ge },
  /*::[*/
  23: { n: "PtgStr", f: mh },
  /*::[*/
  26: { n: "PtgSheet", f: zh },
  /*::[*/
  27: { n: "PtgEndSheet", f: Xh },
  /*::[*/
  28: { n: "PtgErr", f: dh },
  /*::[*/
  29: { n: "PtgBool", f: vh },
  /*::[*/
  30: { n: "PtgInt", f: ph },
  /*::[*/
  31: { n: "PtgNum", f: gh },
  /*::[*/
  32: { n: "PtgArray", f: Zu },
  /*::[*/
  33: { n: "PtgFunc", f: oh },
  /*::[*/
  34: { n: "PtgFuncVar", f: lh },
  /*::[*/
  35: { n: "PtgName", f: kh },
  /*::[*/
  36: { n: "PtgRef", f: ih },
  /*::[*/
  37: { n: "PtgArea", f: Ku },
  /*::[*/
  38: { n: "PtgMemArea", f: Fh },
  /*::[*/
  39: { n: "PtgMemErr", f: Oh },
  /*::[*/
  40: { n: "PtgMemNoMem", f: Dh },
  /*::[*/
  41: { n: "PtgMemFunc", f: Sh },
  /*::[*/
  42: { n: "PtgRefErr", f: Ch },
  /*::[*/
  43: { n: "PtgAreaErr", f: ju },
  /*::[*/
  44: { n: "PtgRefN", f: ch },
  /*::[*/
  45: { n: "PtgAreaN", f: qu },
  /*::[*/
  46: { n: "PtgMemAreaN", f: $h },
  /*::[*/
  47: { n: "PtgMemNoMemN", f: Kh },
  /*::[*/
  57: { n: "PtgNameX", f: wh },
  /*::[*/
  58: { n: "PtgRef3d", f: fh },
  /*::[*/
  59: { n: "PtgArea3d", f: Yu },
  /*::[*/
  60: { n: "PtgRefErr3d", f: yh },
  /*::[*/
  61: { n: "PtgAreaErr3d", f: Ju },
  /*::[*/
  255: {}
}, jh = {
  /*::[*/
  64: 32,
  /*::[*/
  96: 32,
  /*::[*/
  65: 33,
  /*::[*/
  97: 33,
  /*::[*/
  66: 34,
  /*::[*/
  98: 34,
  /*::[*/
  67: 35,
  /*::[*/
  99: 35,
  /*::[*/
  68: 36,
  /*::[*/
  100: 36,
  /*::[*/
  69: 37,
  /*::[*/
  101: 37,
  /*::[*/
  70: 38,
  /*::[*/
  102: 38,
  /*::[*/
  71: 39,
  /*::[*/
  103: 39,
  /*::[*/
  72: 40,
  /*::[*/
  104: 40,
  /*::[*/
  73: 41,
  /*::[*/
  105: 41,
  /*::[*/
  74: 42,
  /*::[*/
  106: 42,
  /*::[*/
  75: 43,
  /*::[*/
  107: 43,
  /*::[*/
  76: 44,
  /*::[*/
  108: 44,
  /*::[*/
  77: 45,
  /*::[*/
  109: 45,
  /*::[*/
  78: 46,
  /*::[*/
  110: 46,
  /*::[*/
  79: 47,
  /*::[*/
  111: 47,
  /*::[*/
  88: 34,
  /*::[*/
  120: 34,
  /*::[*/
  89: 57,
  /*::[*/
  121: 57,
  /*::[*/
  90: 58,
  /*::[*/
  122: 58,
  /*::[*/
  91: 59,
  /*::[*/
  123: 59,
  /*::[*/
  92: 60,
  /*::[*/
  124: 60,
  /*::[*/
  93: 61,
  /*::[*/
  125: 61
}, Jh = {
  /*::[*/
  1: { n: "PtgElfLel", f: ri },
  /*::[*/
  2: { n: "PtgElfRw", f: Uh },
  /*::[*/
  3: { n: "PtgElfCol", f: Ih },
  /*::[*/
  6: { n: "PtgElfRwV", f: Hh },
  /*::[*/
  7: { n: "PtgElfColV", f: Ph },
  /*::[*/
  10: { n: "PtgElfRadical", f: Lh },
  /*::[*/
  11: { n: "PtgElfRadicalS", f: Bh },
  /*::[*/
  13: { n: "PtgElfColS", f: Nh },
  /*::[*/
  15: { n: "PtgElfColSV", f: bh },
  /*::[*/
  16: { n: "PtgElfRadicalLel", f: Mh },
  /*::[*/
  25: { n: "PtgList", f: Vh },
  /*::[*/
  29: { n: "PtgSxName", f: Gh },
  /*::[*/
  255: {}
}, qh = {
  /*::[*/
  0: { n: "PtgAttrNoop", f: Yh },
  /*::[*/
  1: { n: "PtgAttrSemi", f: th },
  /*::[*/
  2: { n: "PtgAttrIf", f: rh },
  /*::[*/
  4: { n: "PtgAttrChoose", f: Qu },
  /*::[*/
  8: { n: "PtgAttrGoto", f: eh },
  /*::[*/
  16: { n: "PtgAttrSum", f: hh },
  /*::[*/
  32: { n: "PtgAttrBaxcel", f: kn },
  /*::[*/
  33: { n: "PtgAttrBaxcel", f: kn },
  /*::[*/
  64: { n: "PtgAttrSpace", f: nh },
  /*::[*/
  65: { n: "PtgAttrSpaceSemi", f: sh },
  /*::[*/
  128: { n: "PtgAttrIfError", f: ah },
  /*::[*/
  255: {}
};
function tt(e, a, r, n) {
  if (n.biff < 8) return or(e, a);
  for (var t = e.l + a, s = [], i = 0; i !== r.length; ++i)
    switch (r[i][0]) {
      case "PtgArray":
        r[i][1] = Th(e, 0, n), s.push(r[i][1]);
        break;
      case "PtgMemArea":
        r[i][2] = Eh(e, r[i][1], n), s.push(r[i][2]);
        break;
      case "PtgExp":
        n && n.biff == 12 && (r[i][1][1] = e.read_shift(4), s.push(r[i][1]));
        break;
      case "PtgList":
      /* TODO: PtgList -> PtgExtraList */
      case "PtgElfRadicalS":
      /* TODO: PtgElfRadicalS -> PtgExtraElf */
      case "PtgElfColS":
      /* TODO: PtgElfColS -> PtgExtraElf */
      case "PtgElfColSV":
        throw "Unsupported " + r[i][0];
    }
  return a = t - e.l, a !== 0 && s.push(or(e, a)), s;
}
function nt(e, a, r) {
  for (var n = e.l + a, t, s, i = []; n != e.l; )
    a = n - e.l, s = e[e.l], t = wn[s] || wn[jh[s]], (s === 24 || s === 25) && (t = (s === 24 ? Jh : qh)[e[e.l + 1]]), !t || !t.f ? or(e, a) : i.push([t.n, t.f(e, a, r)]);
  return i;
}
function Zh(e) {
  for (var a = [], r = 0; r < e.length; ++r) {
    for (var n = e[r], t = [], s = 0; s < n.length; ++s) {
      var i = n[s];
      i ? i[0] === 2 ? t.push('"' + i[1].replace(/"/g, '""') + '"') : t.push(i[1]) : t.push("");
    }
    a.push(t.join(","));
  }
  return a.join(";");
}
var Qh = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function e1(e, a) {
  if (!e && !(a && a.biff <= 5 && a.biff >= 2)) throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function ai(e, a, r) {
  if (!e) return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[a])) return e.SheetNames[a];
  if (!e.XTI) return "SH33TJSERR6";
  var n = e.XTI[a];
  if (r.biff < 8)
    return a > 1e4 && (a -= 65536), a < 0 && (a = -a), a == 0 ? "" : e.XTI[a - 1];
  if (!n) return "SH33TJSERR1";
  var t = "";
  if (r.biff > 8) switch (e[n[0]][0]) {
    case 357:
      return t = n[1] == -1 ? "#REF" : e.SheetNames[n[1]], n[1] == n[2] ? t : t + ":" + e.SheetNames[n[2]];
    case 358:
      return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[n[0]][0];
    /* 'BrtSupBookSrc' */
    /* falls through */
    default:
      return "SH33TJSSRC" + e[n[0]][0];
  }
  switch (e[n[0]][0][0]) {
    case 1025:
      return t = n[1] == -1 ? "#REF" : e.SheetNames[n[1]] || "SH33TJSERR3", n[1] == n[2] ? t : t + ":" + e.SheetNames[n[2]];
    case 14849:
      return e[n[0]].slice(1).map(function(s) {
        return s.Name;
      }).join(";;");
    //return "SH33TJSERR8";
    default:
      return e[n[0]][0][3] ? (t = n[1] == -1 ? "#REF" : e[n[0]][0][3][n[1]] || "SH33TJSERR4", n[1] == n[2] ? t : t + ":" + e[n[0]][0][3][n[2]]) : "SH33TJSERR2";
  }
}
function An(e, a, r) {
  var n = ai(e, a, r);
  return n == "#REF" ? n : e1(n, r);
}
function sr(e, a, r, n, t) {
  var s = t && t.biff || 8, i = (
    /*range != null ? range :*/
    { s: { c: 0, r: 0 } }
  ), c = [], o, f, l, u = 0, x = 0, d, p = "";
  if (!e[0] || !e[0][0]) return "";
  for (var h = -1, g = "", O = 0, I = e[0].length; O < I; ++O) {
    var T = e[0][O];
    switch (T[0]) {
      case "PtgUminus":
        c.push("-" + c.pop());
        break;
      case "PtgUplus":
        c.push("+" + c.pop());
        break;
      case "PtgPercent":
        c.push(c.pop() + "%");
        break;
      case "PtgAdd":
      /* [MS-XLS] 2.5.198.26 */
      case "PtgConcat":
      /* [MS-XLS] 2.5.198.43 */
      case "PtgDiv":
      /* [MS-XLS] 2.5.198.45 */
      case "PtgEq":
      /* [MS-XLS] 2.5.198.56 */
      case "PtgGe":
      /* [MS-XLS] 2.5.198.64 */
      case "PtgGt":
      /* [MS-XLS] 2.5.198.65 */
      case "PtgLe":
      /* [MS-XLS] 2.5.198.68 */
      case "PtgLt":
      /* [MS-XLS] 2.5.198.69 */
      case "PtgMul":
      /* [MS-XLS] 2.5.198.75 */
      case "PtgNe":
      /* [MS-XLS] 2.5.198.78 */
      case "PtgPower":
      /* [MS-XLS] 2.5.198.82 */
      case "PtgSub":
        if (o = c.pop(), f = c.pop(), h >= 0) {
          switch (e[0][h][1][0]) {
            case 0:
              g = Be(" ", e[0][h][1][1]);
              break;
            case 1:
              g = Be("\r", e[0][h][1][1]);
              break;
            default:
              if (g = "", t.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][h][1][0]);
          }
          f = f + g, h = -1;
        }
        c.push(f + Qh[T[0]] + o);
        break;
      case "PtgIsect":
        o = c.pop(), f = c.pop(), c.push(f + " " + o);
        break;
      case "PtgUnion":
        o = c.pop(), f = c.pop(), c.push(f + "," + o);
        break;
      case "PtgRange":
        o = c.pop(), f = c.pop(), c.push(f + ":" + o);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        l = Pa(T[1][1], i, t), c.push(La(l, s));
        break;
      case "PtgRefN":
        l = r ? Pa(T[1][1], r, t) : T[1][1], c.push(La(l, s));
        break;
      case "PtgRef3d":
        u = /*::Number(*/
        T[1][1], l = Pa(T[1][2], i, t), p = An(n, u, t), c.push(p + "!" + La(l, s));
        break;
      case "PtgFunc":
      /* [MS-XLS] 2.5.198.62 */
      case "PtgFuncVar":
        var U = T[1][0], V = T[1][1];
        U || (U = 0), U &= 127;
        var B = U == 0 ? [] : c.slice(-U);
        c.length -= U, V === "User" && (V = B.shift()), c.push(V + "(" + B.join(",") + ")");
        break;
      case "PtgBool":
        c.push(T[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        c.push(
          /*::String(*/
          T[1]
          /*::)*/
        );
        break;
      case "PtgNum":
        c.push(String(T[1]));
        break;
      case "PtgStr":
        c.push('"' + T[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        c.push(
          /*::String(*/
          T[1]
          /*::)*/
        );
        break;
      case "PtgAreaN":
        d = tn(T[1][1], r ? { s: r } : i, t), c.push(Lt(d, t));
        break;
      case "PtgArea":
        d = tn(T[1][1], i, t), c.push(Lt(d, t));
        break;
      case "PtgArea3d":
        u = /*::Number(*/
        T[1][1], d = T[1][2], p = An(n, u, t), c.push(p + "!" + Lt(d, t));
        break;
      case "PtgAttrSum":
        c.push("SUM(" + c.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      /* [MS-XLS] 2.5.198.33 */
      case "PtgAttrSemi":
        break;
      case "PtgName":
        x = T[1][2];
        var A = (n.names || [])[x - 1] || (n[0] || [])[x], _ = A ? A.Name : "SH33TJSNAME" + String(x);
        _ && _.slice(0, 6) == "_xlfn." && !t.xlfn && (_ = _.slice(6)), c.push(_);
        break;
      case "PtgNameX":
        var m = T[1][1];
        x = T[1][2];
        var R;
        if (t.biff <= 5)
          m < 0 && (m = -m), n[m] && (R = n[m][x]);
        else {
          var P = "";
          if (((n[m] || [])[0] || [])[0] == 14849 || (((n[m] || [])[0] || [])[0] == 1025 ? n[m][x] && n[m][x].itab > 0 && (P = n.SheetNames[n[m][x].itab - 1] + "!") : P = n.SheetNames[x - 1] + "!"), n[m] && n[m][x]) P += n[m][x].Name;
          else if (n[0] && n[0][x]) P += n[0][x].Name;
          else {
            var D = (ai(n, m, t) || "").split(";;");
            D[x - 1] ? P = D[x - 1] : P += "SH33TJSERRX";
          }
          c.push(P);
          break;
        }
        R || (R = { Name: "SH33TJSERRY" }), c.push(R.Name);
        break;
      case "PtgParen":
        var X = "(", se = ")";
        if (h >= 0) {
          switch (g = "", e[0][h][1][0]) {
            // $FlowIgnore
            case 2:
              X = Be(" ", e[0][h][1][1]) + X;
              break;
            // $FlowIgnore
            case 3:
              X = Be("\r", e[0][h][1][1]) + X;
              break;
            // $FlowIgnore
            case 4:
              se = Be(" ", e[0][h][1][1]) + se;
              break;
            // $FlowIgnore
            case 5:
              se = Be("\r", e[0][h][1][1]) + se;
              break;
            default:
              if (t.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][h][1][0]);
          }
          h = -1;
        }
        c.push(X + c.pop() + se);
        break;
      case "PtgRefErr":
        c.push("#REF!");
        break;
      case "PtgRefErr3d":
        c.push("#REF!");
        break;
      case "PtgExp":
        l = { c: T[1][1], r: T[1][0] };
        var re = { c: r.c, r: r.r };
        if (n.sharedf[me(l)]) {
          var fe = n.sharedf[me(l)];
          c.push(sr(fe, i, re, n, t));
        } else {
          var q = !1;
          for (o = 0; o != n.arrayf.length; ++o)
            if (f = n.arrayf[o], !(l.c < f[0].s.c || l.c > f[0].e.c) && !(l.r < f[0].s.r || l.r > f[0].e.r)) {
              c.push(sr(f[1], i, re, n, t)), q = !0;
              break;
            }
          q || c.push(
            /*::String(*/
            T[1]
            /*::)*/
          );
        }
        break;
      case "PtgArray":
        c.push("{" + Zh(
          /*::(*/
          T[1]
          /*:: :any)*/
        ) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      /* [MS-XLS] 2.5.198.38 */
      case "PtgAttrSpaceSemi":
        h = O;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        c.push("");
        break;
      case "PtgAreaErr":
        c.push("#REF!");
        break;
      case "PtgAreaErr3d":
        c.push("#REF!");
        break;
      case "PtgList":
        c.push("Table" + T[1].idx + "[#" + T[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      /* [MS-XLS] 2.5.198.46 */
      case "PtgElfColS":
      /* [MS-XLS] 2.5.198.47 */
      case "PtgElfColSV":
      /* [MS-XLS] 2.5.198.48 */
      case "PtgElfColV":
      /* [MS-XLS] 2.5.198.49 */
      case "PtgElfLel":
      /* [MS-XLS] 2.5.198.50 */
      case "PtgElfRadical":
      /* [MS-XLS] 2.5.198.51 */
      case "PtgElfRadicalLel":
      /* [MS-XLS] 2.5.198.52 */
      case "PtgElfRadicalS":
      /* [MS-XLS] 2.5.198.53 */
      case "PtgElfRw":
      /* [MS-XLS] 2.5.198.54 */
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(T));
      default:
        throw new Error("Unrecognized Formula Token: " + String(T));
    }
    var ve = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (t.biff != 3 && h >= 0 && ve.indexOf(e[0][O][0]) == -1) {
      T = e[0][h];
      var M = !0;
      switch (T[1][0]) {
        /* note: some bad XLSB files omit the PtgParen */
        case 4:
          M = !1;
        /* falls through */
        case 0:
          g = Be(" ", T[1][1]);
          break;
        case 5:
          M = !1;
        /* falls through */
        case 1:
          g = Be("\r", T[1][1]);
          break;
        default:
          if (g = "", t.WTF) throw new Error("Unexpected PtgAttrSpaceType " + T[1][0]);
      }
      c.push((M ? g : "") + c.pop() + (M ? "" : g)), h = -1;
    }
  }
  if (c.length > 1 && t.WTF) throw new Error("bad formula stack");
  return c[0];
}
function r1(e, a, r) {
  var n = e.l + a, t = r.biff == 2 ? 1 : 2, s, i = e.read_shift(t);
  if (i == 65535) return [[], or(e, a - 2)];
  var c = nt(e, i, r);
  return a !== i + t && (s = tt(e, a - i - t, c, r)), e.l = n, [c, s];
}
function a1(e, a, r) {
  var n = e.l + a, t = r.biff == 2 ? 1 : 2, s, i = e.read_shift(t);
  if (i == 65535) return [[], or(e, a - 2)];
  var c = nt(e, i, r);
  return a !== i + t && (s = tt(e, a - i - t, c, r)), e.l = n, [c, s];
}
function t1(e, a, r, n) {
  var t = e.l + a, s = nt(e, n, r), i;
  return t !== e.l && (i = tt(e, t - e.l, s, r)), [s, i];
}
function n1(e, a, r) {
  var n = e.l + a, t, s = e.read_shift(2), i = nt(e, s, r);
  return s == 65535 ? [[], or(e, a - 2)] : (a !== s + 2 && (t = tt(e, n - s - 2, i, r)), [i, t]);
}
function s1(e) {
  var a;
  if (Wr(e, e.l + 6) !== 65535) return [ir(e), "n"];
  switch (e[e.l]) {
    case 0:
      return e.l += 8, ["String", "s"];
    case 1:
      return a = e[e.l + 2] === 1, e.l += 8, [a, "b"];
    case 2:
      return a = e[e.l + 2], e.l += 8, [a, "e"];
    case 3:
      return e.l += 8, ["", "s"];
  }
  return [];
}
function Ut(e, a, r) {
  var n = e.l + a, t = Br(e);
  r.biff == 2 && ++e.l;
  var s = s1(e), i = e.read_shift(1);
  r.biff != 2 && (e.read_shift(1), r.biff >= 5 && e.read_shift(4));
  var c = a1(e, n - e.l, r);
  return { cell: t, val: s[0], formula: c, shared: i >> 3 & 1, tt: s[1] };
}
function Dt(e, a, r) {
  var n = e.read_shift(4), t = nt(e, n, r), s = e.read_shift(4), i = s > 0 ? tt(e, s, t, r) : null;
  return [t, i];
}
var i1 = Dt, Rt = Dt, c1 = Dt, f1 = Dt, o1 = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
}, ti = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
}, l1 = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function Fn(e) {
  return e.slice(0, 3) == "of:" && (e = e.slice(3)), e.charCodeAt(0) == 61 && (e = e.slice(1), e.charCodeAt(0) == 61 && (e = e.slice(1))), e = e.replace(/COM\.MICROSOFT\./g, ""), e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(a, r) {
    return r.replace(/\./g, "");
  }), e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1"), e.replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function Ht(e) {
  var a = e.split(":"), r = a[0].split(".")[0];
  return [r, a[0].split(".")[1] + (a.length > 1 ? ":" + (a[1].split(".")[1] || a[1].split(".")[0]) : "")];
}
var Ha = {}, Ea = {};
function Wa(e, a) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    a == "xlml" && (r = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function ni(e, a, r, n, t, s) {
  try {
    n.cellNF && (e.z = Ee[a]);
  } catch (c) {
    if (n.WTF) throw c;
  }
  if (!(e.t === "z" && !n.cellStyles)) {
    if (e.t === "d" && typeof e.v == "string" && (e.v = qe(e.v)), (!n || n.cellText !== !1) && e.t !== "z") try {
      if (Ee[a] == null && na(oc[a] || "General", a), e.t === "e") e.w = e.w || xa[e.v];
      else if (a === 0)
        if (e.t === "n")
          (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = za(e.v);
        else if (e.t === "d") {
          var i = pr(e.v);
          (i | 0) === i ? e.w = i.toString(10) : e.w = za(i);
        } else {
          if (e.v === void 0) return "";
          e.w = ia(e.v, Ea);
        }
      else e.t === "d" ? e.w = Fr(a, pr(e.v), Ea) : e.w = Fr(a, e.v, Ea);
    } catch (c) {
      if (n.WTF) throw c;
    }
    if (n.cellStyles && r != null)
      try {
        e.s = s.Fills[r], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = At(t.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), n.WTF && (e.s.fgColor.raw_rgb = t.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = At(t.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), n.WTF && (e.s.bgColor.raw_rgb = t.themeElements.clrScheme[e.s.bgColor.theme].rgb));
      } catch (c) {
        if (n.WTF && s.Fills) throw c;
      }
  }
}
function u1(e, a) {
  var r = Ue(a);
  r.s.r <= r.e.r && r.s.c <= r.e.c && r.s.r >= 0 && r.s.c >= 0 && (e["!ref"] = Se(r));
}
var h1 = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g, x1 = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/, d1 = /<(?:\w:)?hyperlink [^>]*>/mg, p1 = /"(\w*:\w*)"/, v1 = /<(?:\w:)?col\b[^>]*[\/]?>/g, g1 = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g, m1 = /<(?:\w:)?pageMargins[^>]*\/>/g, si = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/, _1 = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/, E1 = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
function T1(e, a, r, n, t, s, i) {
  if (!e) return e;
  n || (n = { "!id": {} });
  var c = a.dense ? [] : {}, o = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, f = "", l = "", u = e.match(x1);
  u ? (f = e.slice(0, u.index), l = e.slice(u.index + u[0].length)) : f = l = e;
  var x = f.match(si);
  x ? k0(x[0], c, t, r) : (x = f.match(_1)) && k1(x[0], x[1] || "", c, t, r);
  var d = (f.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (d > 0) {
    var p = f.slice(d, d + 50).match(p1);
    p && u1(c, p[1]);
  }
  var h = f.match(E1);
  h && h[1] && y1(h[1], t);
  var g = [];
  if (a.cellStyles) {
    var O = f.match(v1);
    O && F1(g, O);
  }
  u && O1(u[1], c, a, o, s, i);
  var I = l.match(g1);
  I && (c["!autofilter"] = S1(I[0]));
  var T = [], U = l.match(h1);
  if (U) for (d = 0; d != U.length; ++d)
    T[d] = Ue(U[d].slice(U[d].indexOf('"') + 1));
  var V = l.match(d1);
  V && w1(c, V, n);
  var B = l.match(m1);
  if (B && (c["!margins"] = A1(ge(B[0]))), !c["!ref"] && o.e.c >= o.s.c && o.e.r >= o.s.r && (c["!ref"] = Se(o)), a.sheetRows > 0 && c["!ref"]) {
    var A = Ue(c["!ref"]);
    a.sheetRows <= +A.e.r && (A.e.r = a.sheetRows - 1, A.e.r > o.e.r && (A.e.r = o.e.r), A.e.r < A.s.r && (A.s.r = A.e.r), A.e.c > o.e.c && (A.e.c = o.e.c), A.e.c < A.s.c && (A.s.c = A.e.c), c["!fullref"] = c["!ref"], c["!ref"] = Se(A));
  }
  return g.length > 0 && (c["!cols"] = g), T.length > 0 && (c["!merges"] = T), c;
}
function k0(e, a, r, n) {
  var t = ge(e);
  r.Sheets[n] || (r.Sheets[n] = {}), t.codeName && (r.Sheets[n].CodeName = Ce(Re(t.codeName)));
}
function k1(e, a, r, n, t) {
  k0(e.slice(0, e.indexOf(">")), r, n, t);
}
function w1(e, a, r) {
  for (var n = Array.isArray(e), t = 0; t != a.length; ++t) {
    var s = ge(Re(a[t]), !0);
    if (!s.ref) return;
    var i = ((r || {})["!id"] || [])[s.id];
    i ? (s.Target = i.Target, s.location && (s.Target += "#" + Ce(s.location))) : (s.Target = "#" + Ce(s.location), i = { Target: s.Target, TargetMode: "Internal" }), s.Rel = i, s.tooltip && (s.Tooltip = s.tooltip, delete s.tooltip);
    for (var c = Ue(s.ref), o = c.s.r; o <= c.e.r; ++o) for (var f = c.s.c; f <= c.e.c; ++f) {
      var l = me({ c: f, r: o });
      n ? (e[o] || (e[o] = []), e[o][f] || (e[o][f] = { t: "z", v: void 0 }), e[o][f].l = s) : (e[l] || (e[l] = { t: "z", v: void 0 }), e[l].l = s);
    }
  }
}
function A1(e) {
  var a = {};
  return ["left", "right", "top", "bottom", "header", "footer"].forEach(function(r) {
    e[r] && (a[r] = parseFloat(e[r]));
  }), a;
}
function F1(e, a) {
  for (var r = !1, n = 0; n != a.length; ++n) {
    var t = ge(a[n], !0);
    t.hidden && (t.hidden = be(t.hidden));
    var s = parseInt(t.min, 10) - 1, i = parseInt(t.max, 10) - 1;
    for (t.outlineLevel && (t.level = +t.outlineLevel || 0), delete t.min, delete t.max, t.width = +t.width, !r && t.width && (r = !0, E0(t.width)), ka(t); s <= i; ) e[s++] = Qe(t);
  }
}
function S1(e) {
  var a = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return a;
}
var C1 = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
function y1(e, a) {
  a.Views || (a.Views = [{}]), (e.match(C1) || []).forEach(function(r, n) {
    var t = ge(r);
    a.Views[n] || (a.Views[n] = {}), +t.zoomScale && (a.Views[n].zoom = +t.zoomScale), be(t.rightToLeft) && (a.Views[n].RTL = !0);
  });
}
var O1 = /* @__PURE__ */ (function() {
  var e = /<(?:\w+:)?c[ \/>]/, a = /<\/(?:\w+:)?row>/, r = /r=["']([^"']*)["']/, n = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/, t = /ref=["']([^"']*)["']/, s = Xa("v"), i = Xa("f");
  return function(o, f, l, u, x, d) {
    for (var p = 0, h = "", g = [], O = [], I = 0, T = 0, U = 0, V = "", B, A, _ = 0, m = 0, R, P, D = 0, X = 0, se = Array.isArray(d.CellXf), re, fe = [], q = [], ve = Array.isArray(f), M = [], he = {}, te = !1, w = !!l.sheetStubs, b = o.split(a), L = 0, N = b.length; L != N; ++L) {
      h = b[L].trim();
      var K = h.length;
      if (K !== 0) {
        var ee = 0;
        e: for (p = 0; p < K; ++p) switch (
          /*x.charCodeAt(ri)*/
          h[p]
        ) {
          case ">":
            if (
              /*x.charCodeAt(ri-1) != 47*/
              h[p - 1] != "/"
            ) {
              ++p;
              break e;
            }
            if (l && l.cellStyles) {
              if (A = ge(h.slice(ee, p), !0), _ = A.r != null ? parseInt(A.r, 10) : _ + 1, m = -1, l.sheetRows && l.sheetRows < _) continue;
              he = {}, te = !1, A.ht && (te = !0, he.hpt = parseFloat(A.ht), he.hpx = ja(he.hpt)), A.hidden == "1" && (te = !0, he.hidden = !0), A.outlineLevel != null && (te = !0, he.level = +A.outlineLevel), te && (M[_ - 1] = he);
            }
            break;
          case "<":
            ee = p;
            break;
        }
        if (ee >= p) break;
        if (A = ge(h.slice(ee, p), !0), _ = A.r != null ? parseInt(A.r, 10) : _ + 1, m = -1, !(l.sheetRows && l.sheetRows < _)) {
          u.s.r > _ - 1 && (u.s.r = _ - 1), u.e.r < _ - 1 && (u.e.r = _ - 1), l && l.cellStyles && (he = {}, te = !1, A.ht && (te = !0, he.hpt = parseFloat(A.ht), he.hpx = ja(he.hpt)), A.hidden == "1" && (te = !0, he.hidden = !0), A.outlineLevel != null && (te = !0, he.level = +A.outlineLevel), te && (M[_ - 1] = he)), g = h.slice(p).split(e);
          for (var Z = 0; Z != g.length && g[Z].trim().charAt(0) == "<"; ++Z) ;
          for (g = g.slice(Z), p = 0; p != g.length; ++p)
            if (h = g[p].trim(), h.length !== 0) {
              if (O = h.match(r), I = p, T = 0, U = 0, h = "<c " + (h.slice(0, 1) == "<" ? ">" : "") + h, O != null && O.length === 2) {
                for (I = 0, V = O[1], T = 0; T != V.length && !((U = V.charCodeAt(T) - 64) < 1 || U > 26); ++T)
                  I = 26 * I + U;
                --I, m = I;
              } else ++m;
              for (T = 0; T != h.length && h.charCodeAt(T) !== 62; ++T) ;
              if (++T, A = ge(h.slice(0, T), !0), A.r || (A.r = me({ r: _ - 1, c: m })), V = h.slice(T), B = { t: "" }, (O = V.match(s)) != null && /*::cref != null && */
              O[1] !== "" && (B.v = Ce(O[1])), l.cellFormula) {
                if ((O = V.match(i)) != null && /*::cref != null && */
                O[1] !== "") {
                  if (B.f = Ce(Re(O[1])).replace(/\r\n/g, `
`), l.xlfn || (B.f = Tn(B.f)), /*::cref != null && cref[0] != null && */
                  O[0].indexOf('t="array"') > -1)
                    B.F = (V.match(t) || [])[1], B.F.indexOf(":") > -1 && fe.push([Ue(B.F), B.F]);
                  else if (
                    /*::cref != null && cref[0] != null && */
                    O[0].indexOf('t="shared"') > -1
                  ) {
                    P = ge(O[0]);
                    var J = Ce(Re(O[1]));
                    l.xlfn || (J = Tn(J)), q[parseInt(P.si, 10)] = [P, J, A.r];
                  }
                } else (O = V.match(/<f[^>]*\/>/)) && (P = ge(O[0]), q[P.si] && (B.f = Hu(q[P.si][1], q[P.si][2], A.r)));
                var j = xr(A.r);
                for (T = 0; T < fe.length; ++T)
                  j.r >= fe[T][0].s.r && j.r <= fe[T][0].e.r && j.c >= fe[T][0].s.c && j.c <= fe[T][0].e.c && (B.F = fe[T][1]);
              }
              if (A.t == null && B.v === void 0)
                if (B.f || B.F)
                  B.v = 0, B.t = "n";
                else if (w) B.t = "z";
                else continue;
              else B.t = A.t || "n";
              switch (u.s.c > m && (u.s.c = m), u.e.c < m && (u.e.c = m), B.t) {
                case "n":
                  if (B.v == "" || B.v == null) {
                    if (!w) continue;
                    B.t = "z";
                  } else B.v = parseFloat(B.v);
                  break;
                case "s":
                  if (typeof B.v > "u") {
                    if (!w) continue;
                    B.t = "z";
                  } else
                    R = Ha[parseInt(B.v, 10)], B.v = R.t, B.r = R.r, l.cellHTML && (B.h = R.h);
                  break;
                case "str":
                  B.t = "s", B.v = B.v != null ? Re(B.v) : "", l.cellHTML && (B.h = o0(B.v));
                  break;
                case "inlineStr":
                  O = V.match(n), B.t = "s", O != null && (R = _0(O[1])) ? (B.v = R.t, l.cellHTML && (B.h = R.h)) : B.v = "";
                  break;
                case "b":
                  B.v = be(B.v);
                  break;
                case "d":
                  l.cellDates ? B.v = qe(B.v, 1) : (B.v = pr(qe(B.v, 1)), B.t = "n");
                  break;
                /* error string in .w, number in .v */
                case "e":
                  (!l || l.cellText !== !1) && (B.w = B.v), B.v = Ss[B.v];
                  break;
              }
              if (D = X = 0, re = null, se && A.s !== void 0 && (re = d.CellXf[A.s], re != null && (re.numFmtId != null && (D = re.numFmtId), l.cellStyles && re.fillId != null && (X = re.fillId))), ni(B, D, X, l, x, d), l.cellDates && se && B.t == "n" && wa(Ee[D]) && (B.t = "d", B.v = yt(B.v)), A.cm && l.xlmeta) {
                var ie = (l.xlmeta.Cell || [])[+A.cm - 1];
                ie && ie.type == "XLDAPR" && (B.D = !0);
              }
              if (ve) {
                var C = xr(A.r);
                f[C.r] || (f[C.r] = []), f[C.r][C.c] = B;
              } else f[A.r] = B;
            }
        }
      }
    }
    M.length > 0 && (f["!rows"] = M);
  };
})();
function D1(e, a) {
  var r = {}, n = e.l + a;
  r.r = e.read_shift(4), e.l += 4;
  var t = e.read_shift(2);
  e.l += 1;
  var s = e.read_shift(1);
  return e.l = n, s & 7 && (r.level = s & 7), s & 16 && (r.hidden = !0), s & 32 && (r.hpt = t / 20), r;
}
var R1 = ha;
function I1() {
}
function N1(e, a) {
  var r = {}, n = e[e.l];
  return ++e.l, r.above = !(n & 64), r.left = !(n & 128), e.l += 18, r.name = Qc(e), r;
}
function b1(e) {
  var a = Sr(e);
  return [a];
}
function P1(e) {
  var a = ua(e);
  return [a];
}
function L1(e) {
  var a = Sr(e), r = e.read_shift(1);
  return [a, r, "b"];
}
function M1(e) {
  var a = ua(e), r = e.read_shift(1);
  return [a, r, "b"];
}
function B1(e) {
  var a = Sr(e), r = e.read_shift(1);
  return [a, r, "e"];
}
function U1(e) {
  var a = ua(e), r = e.read_shift(1);
  return [a, r, "e"];
}
function H1(e) {
  var a = Sr(e), r = e.read_shift(4);
  return [a, r, "s"];
}
function W1(e) {
  var a = ua(e), r = e.read_shift(4);
  return [a, r, "s"];
}
function V1(e) {
  var a = Sr(e), r = ir(e);
  return [a, r, "n"];
}
function ii(e) {
  var a = ua(e), r = ir(e);
  return [a, r, "n"];
}
function G1(e) {
  var a = Sr(e), r = v0(e);
  return [a, r, "n"];
}
function z1(e) {
  var a = ua(e), r = v0(e);
  return [a, r, "n"];
}
function X1(e) {
  var a = Sr(e), r = d0(e);
  return [a, r, "is"];
}
function $1(e) {
  var a = Sr(e), r = fr(e);
  return [a, r, "str"];
}
function K1(e) {
  var a = ua(e), r = fr(e);
  return [a, r, "str"];
}
function Y1(e, a, r) {
  var n = e.l + a, t = Sr(e);
  t.r = r["!row"];
  var s = e.read_shift(1), i = [t, s, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Rt(e, n - e.l, r);
    i[3] = sr(c, null, t, r.supbooks, r);
  } else e.l = n;
  return i;
}
function j1(e, a, r) {
  var n = e.l + a, t = Sr(e);
  t.r = r["!row"];
  var s = e.read_shift(1), i = [t, s, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Rt(e, n - e.l, r);
    i[3] = sr(c, null, t, r.supbooks, r);
  } else e.l = n;
  return i;
}
function J1(e, a, r) {
  var n = e.l + a, t = Sr(e);
  t.r = r["!row"];
  var s = ir(e), i = [t, s, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Rt(e, n - e.l, r);
    i[3] = sr(c, null, t, r.supbooks, r);
  } else e.l = n;
  return i;
}
function q1(e, a, r) {
  var n = e.l + a, t = Sr(e);
  t.r = r["!row"];
  var s = fr(e), i = [t, s, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Rt(e, n - e.l, r);
    i[3] = sr(c, null, t, r.supbooks, r);
  } else e.l = n;
  return i;
}
var Z1 = ha;
function Q1(e, a) {
  var r = e.l + a, n = ha(e), t = p0(e), s = fr(e), i = fr(e), c = fr(e);
  e.l = r;
  var o = { rfx: n, relId: t, loc: s, display: c };
  return i && (o.Tooltip = i), o;
}
function ex() {
}
function rx(e, a, r) {
  var n = e.l + a, t = ws(e), s = e.read_shift(1), i = [t];
  if (i[2] = s, r.cellFormula) {
    var c = i1(e, n - e.l, r);
    i[1] = c;
  } else e.l = n;
  return i;
}
function ax(e, a, r) {
  var n = e.l + a, t = ha(e), s = [t];
  if (r.cellFormula) {
    var i = f1(e, n - e.l, r);
    s[1] = i, e.l = n;
  } else e.l = n;
  return s;
}
var tx = ["left", "right", "top", "bottom", "header", "footer"];
function nx(e) {
  var a = {};
  return tx.forEach(function(r) {
    a[r] = ir(e);
  }), a;
}
function sx(e) {
  var a = e.read_shift(2);
  return e.l += 28, { RTL: a & 32 };
}
function ix() {
}
function cx() {
}
function fx(e, a, r, n, t, s, i) {
  if (!e) return e;
  var c = a || {};
  n || (n = { "!id": {} });
  var o = c.dense ? [] : {}, f, l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, u = !1, x = !1, d, p, h, g, O, I, T, U, V, B = [];
  c.biff = 12, c["!row"] = 0;
  var A = 0, _ = !1, m = [], R = {}, P = c.supbooks || /*::(*/
  t.supbooks || [[]];
  if (P.sharedf = R, P.arrayf = m, P.SheetNames = t.SheetNames || t.Sheets.map(function(ve) {
    return ve.name;
  }), !c.supbooks && (c.supbooks = P, t.Names))
    for (var D = 0; D < t.Names.length; ++D) P[0][D + 1] = t.Names[D];
  var X = [], se = [], re = !1;
  Ct[16] = { n: "BrtShortReal", f: ii };
  var fe;
  if (Xr(e, function(M, he, te) {
    if (!x)
      switch (te) {
        case 148:
          f = M;
          break;
        case 0:
          d = M, c.sheetRows && c.sheetRows <= d.r && (x = !0), U = er(g = d.r), c["!row"] = d.r, (M.hidden || M.hpt || M.level != null) && (M.hpt && (M.hpx = ja(M.hpt)), se[M.r] = M);
          break;
        case 2:
        /* 'BrtCellRk' */
        case 3:
        /* 'BrtCellError' */
        case 4:
        /* 'BrtCellBool' */
        case 5:
        /* 'BrtCellReal' */
        case 6:
        /* 'BrtCellSt' */
        case 7:
        /* 'BrtCellIsst' */
        case 8:
        /* 'BrtFmlaString' */
        case 9:
        /* 'BrtFmlaNum' */
        case 10:
        /* 'BrtFmlaBool' */
        case 11:
        /* 'BrtFmlaError' */
        case 13:
        /* 'BrtShortRk' */
        case 14:
        /* 'BrtShortError' */
        case 15:
        /* 'BrtShortBool' */
        case 16:
        /* 'BrtShortReal' */
        case 17:
        /* 'BrtShortSt' */
        case 18:
        /* 'BrtShortIsst' */
        case 62:
          switch (p = { t: M[2] }, M[2]) {
            case "n":
              p.v = M[1];
              break;
            case "s":
              T = Ha[M[1]], p.v = T.t, p.r = T.r;
              break;
            case "b":
              p.v = !!M[1];
              break;
            case "e":
              p.v = M[1], c.cellText !== !1 && (p.w = xa[p.v]);
              break;
            case "str":
              p.t = "s", p.v = M[1];
              break;
            case "is":
              p.t = "s", p.v = M[1].t;
              break;
          }
          if ((h = i.CellXf[M[0].iStyleRef]) && ni(p, h.numFmtId, null, c, s, i), O = M[0].c == -1 ? O + 1 : M[0].c, c.dense ? (o[g] || (o[g] = []), o[g][O] = p) : o[Ye(O) + U] = p, c.cellFormula) {
            for (_ = !1, A = 0; A < m.length; ++A) {
              var w = m[A];
              d.r >= w[0].s.r && d.r <= w[0].e.r && O >= w[0].s.c && O <= w[0].e.c && (p.F = Se(w[0]), _ = !0);
            }
            !_ && M.length > 3 && (p.f = M[3]);
          }
          if (l.s.r > d.r && (l.s.r = d.r), l.s.c > O && (l.s.c = O), l.e.r < d.r && (l.e.r = d.r), l.e.c < O && (l.e.c = O), c.cellDates && h && p.t == "n" && wa(Ee[h.numFmtId])) {
            var b = ta(p.v);
            b && (p.t = "d", p.v = new Date(b.y, b.m - 1, b.d, b.H, b.M, b.S, b.u));
          }
          fe && (fe.type == "XLDAPR" && (p.D = !0), fe = void 0);
          break;
        case 1:
        /* 'BrtCellBlank' */
        case 12:
          if (!c.sheetStubs || u) break;
          p = { t: "z", v: void 0 }, O = M[0].c == -1 ? O + 1 : M[0].c, c.dense ? (o[g] || (o[g] = []), o[g][O] = p) : o[Ye(O) + U] = p, l.s.r > d.r && (l.s.r = d.r), l.s.c > O && (l.s.c = O), l.e.r < d.r && (l.e.r = d.r), l.e.c < O && (l.e.c = O), fe && (fe.type == "XLDAPR" && (p.D = !0), fe = void 0);
          break;
        case 176:
          B.push(M);
          break;
        case 49:
          fe = ((c.xlmeta || {}).Cell || [])[M - 1];
          break;
        case 494:
          var L = n["!id"][M.relId];
          for (L ? (M.Target = L.Target, M.loc && (M.Target += "#" + M.loc), M.Rel = L) : M.relId == "" && (M.Target = "#" + M.loc), g = M.rfx.s.r; g <= M.rfx.e.r; ++g) for (O = M.rfx.s.c; O <= M.rfx.e.c; ++O)
            c.dense ? (o[g] || (o[g] = []), o[g][O] || (o[g][O] = { t: "z", v: void 0 }), o[g][O].l = M) : (I = me({ c: O, r: g }), o[I] || (o[I] = { t: "z", v: void 0 }), o[I].l = M);
          break;
        case 426:
          if (!c.cellFormula) break;
          m.push(M), V = c.dense ? o[g][O] : o[Ye(O) + U], V.f = sr(M[1], l, { r: d.r, c: O }, P, c), V.F = Se(M[0]);
          break;
        case 427:
          if (!c.cellFormula) break;
          R[me(M[0].s)] = M[1], V = c.dense ? o[g][O] : o[Ye(O) + U], V.f = sr(M[1], l, { r: d.r, c: O }, P, c);
          break;
        /* identical to 'ColInfo' in XLS */
        case 60:
          if (!c.cellStyles) break;
          for (; M.e >= M.s; )
            X[M.e--] = { width: M.w / 256, hidden: !!(M.flags & 1), level: M.level }, re || (re = !0, E0(M.w / 256)), ka(X[M.e + 1]);
          break;
        case 161:
          o["!autofilter"] = { ref: Se(M) };
          break;
        case 476:
          o["!margins"] = M;
          break;
        case 147:
          t.Sheets[r] || (t.Sheets[r] = {}), M.name && (t.Sheets[r].CodeName = M.name), (M.above || M.left) && (o["!outline"] = { above: M.above, left: M.left });
          break;
        case 137:
          t.Views || (t.Views = [{}]), t.Views[0] || (t.Views[0] = {}), M.RTL && (t.Views[0].RTL = !0);
          break;
        case 485:
          break;
        case 64:
        /* 'BrtDVal' */
        case 1053:
          break;
        case 151:
          break;
        case 152:
        /* 'BrtSel' */
        case 175:
        /* 'BrtAFilterDateGroupItem' */
        case 644:
        /* 'BrtActiveX' */
        case 625:
        /* 'BrtBigName' */
        case 562:
        /* 'BrtBkHim' */
        case 396:
        /* 'BrtBrk' */
        case 1112:
        /* 'BrtCFIcon' */
        case 1146:
        /* 'BrtCFRuleExt' */
        case 471:
        /* 'BrtCFVO' */
        case 1050:
        /* 'BrtCFVO14' */
        case 649:
        /* 'BrtCellIgnoreEC' */
        case 1105:
        /* 'BrtCellIgnoreEC14' */
        case 589:
        /* 'BrtCellSmartTagProperty' */
        case 607:
        /* 'BrtCellWatch' */
        case 564:
        /* 'BrtColor' */
        case 1055:
        /* 'BrtColor14' */
        case 168:
        /* 'BrtColorFilter' */
        case 174:
        /* 'BrtCustomFilter' */
        case 1180:
        /* 'BrtCustomFilter14' */
        case 499:
        /* 'BrtDRef' */
        case 507:
        /* 'BrtDXF' */
        case 550:
        /* 'BrtDrawing' */
        case 171:
        /* 'BrtDynamicFilter' */
        case 167:
        /* 'BrtFilter' */
        case 1177:
        /* 'BrtFilter14' */
        case 169:
        /* 'BrtIconFilter' */
        case 1181:
        /* 'BrtIconFilter14' */
        case 551:
        /* 'BrtLegacyDrawing' */
        case 552:
        /* 'BrtLegacyDrawingHF' */
        case 661:
        /* 'BrtListPart' */
        case 639:
        /* 'BrtOleObject' */
        case 478:
        /* 'BrtPageSetup' */
        case 537:
        /* 'BrtPhoneticInfo' */
        case 477:
        /* 'BrtPrintOptions' */
        case 536:
        /* 'BrtRangeProtection' */
        case 1103:
        /* 'BrtRangeProtection14' */
        case 680:
        /* 'BrtRangeProtectionIso' */
        case 1104:
        /* 'BrtRangeProtectionIso14' */
        case 1024:
        /* 'BrtRwDescent' */
        case 663:
        /* 'BrtSheetCalcProp' */
        case 535:
        /* 'BrtSheetProtection' */
        case 678:
        /* 'BrtSheetProtectionIso' */
        case 504:
        /* 'BrtSlc' */
        case 1043:
        /* 'BrtSparkline' */
        case 428:
        /* 'BrtTable' */
        case 170:
        /* 'BrtTop10Filter' */
        case 3072:
        /* 'BrtUid' */
        case 50:
        /* 'BrtValueMeta' */
        case 2070:
        /* 'BrtWebExtension' */
        case 1045:
          break;
        case 35:
          u = !0;
          break;
        case 36:
          u = !1;
          break;
        case 37:
          u = !0;
          break;
        case 38:
          u = !1;
          break;
        default:
          if (!he.T) {
            if (!u || c.WTF) throw new Error("Unexpected record 0x" + te.toString(16));
          }
      }
  }, c), delete c.supbooks, delete c["!row"], !o["!ref"] && (l.s.r < 2e6 || f && (f.e.r > 0 || f.e.c > 0 || f.s.r > 0 || f.s.c > 0)) && (o["!ref"] = Se(f || l)), c.sheetRows && o["!ref"]) {
    var q = Ue(o["!ref"]);
    c.sheetRows <= +q.e.r && (q.e.r = c.sheetRows - 1, q.e.r > l.e.r && (q.e.r = l.e.r), q.e.r < q.s.r && (q.s.r = q.e.r), q.e.c > l.e.c && (q.e.c = l.e.c), q.e.c < q.s.c && (q.s.c = q.e.c), o["!fullref"] = o["!ref"], o["!ref"] = Se(q));
  }
  return B.length > 0 && (o["!merges"] = B), X.length > 0 && (o["!cols"] = X), se.length > 0 && (o["!rows"] = se), o;
}
function ox(e) {
  var a = [], r = e.match(/^<c:numCache>/), n;
  (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg) || []).forEach(function(s) {
    var i = s.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
    i && (a[+i[1]] = r ? +i[2] : i[2]);
  });
  var t = Ce((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
  return (e.match(/<c:f>(.*?)<\/c:f>/mg) || []).forEach(function(s) {
    n = s.replace(/<.*?>/g, "");
  }), [a, t, n];
}
function lx(e, a, r, n, t, s) {
  var i = s || { "!type": "chart" };
  if (!e) return s;
  var c = 0, o = 0, f = "A", l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function(u) {
    var x = ox(u);
    l.s.r = l.s.c = 0, l.e.c = c, f = Ye(c), x[0].forEach(function(d, p) {
      i[f + er(p)] = { t: "n", v: d, z: x[1] }, o = p;
    }), l.e.r < o && (l.e.r = o), ++c;
  }), c > 0 && (i["!ref"] = Se(l)), i;
}
function ux(e, a, r, n, t) {
  if (!e) return e;
  n || (n = { "!id": {} });
  var s = { "!type": "chart", "!drawel": null, "!rel": "" }, i, c = e.match(si);
  return c && k0(c[0], s, t, r), (i = e.match(/drawing r:id="(.*?)"/)) && (s["!rel"] = i[1]), n["!id"][s["!rel"]] && (s["!drawel"] = n["!id"][s["!rel"]]), s;
}
function hx(e, a) {
  e.l += 10;
  var r = fr(e);
  return { name: r };
}
function xx(e, a, r, n, t) {
  if (!e) return e;
  n || (n = { "!id": {} });
  var s = { "!type": "chart", "!drawel": null, "!rel": "" }, i = !1;
  return Xr(e, function(o, f, l) {
    switch (l) {
      case 550:
        s["!rel"] = o;
        break;
      case 651:
        t.Sheets[r] || (t.Sheets[r] = {}), o.name && (t.Sheets[r].CodeName = o.name);
        break;
      case 562:
      /* 'BrtBkHim' */
      case 652:
      /* 'BrtCsPageSetup' */
      case 669:
      /* 'BrtCsProtection' */
      case 679:
      /* 'BrtCsProtectionIso' */
      case 551:
      /* 'BrtLegacyDrawing' */
      case 552:
      /* 'BrtLegacyDrawingHF' */
      case 476:
      /* 'BrtMargins' */
      case 3072:
        break;
      case 35:
        i = !0;
        break;
      case 36:
        i = !1;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!(f.T > 0)) {
          if (!(f.T < 0)) {
            if (!i || a.WTF) throw new Error("Unexpected record 0x" + l.toString(16));
          }
        }
    }
  }, a), n["!id"][s["!rel"]] && (s["!drawel"] = n["!id"][s["!rel"]]), s;
}
var ci = [
  ["allowRefreshQuery", !1, "bool"],
  ["autoCompressPictures", !0, "bool"],
  ["backupFile", !1, "bool"],
  ["checkCompatibility", !1, "bool"],
  ["CodeName", ""],
  ["date1904", !1, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", !1, "bool"],
  ["hidePivotFieldList", !1, "bool"],
  ["promptedSolutions", !1, "bool"],
  ["publishItems", !1, "bool"],
  ["refreshAllConnections", !1, "bool"],
  ["saveExternalLinkValues", !0, "bool"],
  ["showBorderUnselectedTables", !0, "bool"],
  ["showInkAnnotation", !0, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", !1, "bool"],
  ["updateLinks", "userSet"]
], dx = [
  ["activeTab", 0, "int"],
  ["autoFilterDateGrouping", !0, "bool"],
  ["firstSheet", 0, "int"],
  ["minimized", !1, "bool"],
  ["showHorizontalScroll", !0, "bool"],
  ["showSheetTabs", !0, "bool"],
  ["showVerticalScroll", !0, "bool"],
  ["tabRatio", 600, "int"],
  ["visibility", "visible"]
  //window{Height,Width}, {x,y}Window
], px = [
  //['state', 'visible']
], vx = [
  ["calcCompleted", "true"],
  ["calcMode", "auto"],
  ["calcOnSave", "true"],
  ["concurrentCalc", "true"],
  ["fullCalcOnLoad", "false"],
  ["fullPrecision", "true"],
  ["iterate", "false"],
  ["iterateCount", "100"],
  ["iterateDelta", "0.001"],
  ["refMode", "A1"]
];
function Sn(e, a) {
  for (var r = 0; r != e.length; ++r)
    for (var n = e[r], t = 0; t != a.length; ++t) {
      var s = a[t];
      if (n[s[0]] == null) n[s[0]] = s[1];
      else switch (s[2]) {
        case "bool":
          typeof n[s[0]] == "string" && (n[s[0]] = be(n[s[0]]));
          break;
        case "int":
          typeof n[s[0]] == "string" && (n[s[0]] = parseInt(n[s[0]], 10));
          break;
      }
    }
}
function Cn(e, a) {
  for (var r = 0; r != a.length; ++r) {
    var n = a[r];
    if (e[n[0]] == null) e[n[0]] = n[1];
    else switch (n[2]) {
      case "bool":
        typeof e[n[0]] == "string" && (e[n[0]] = be(e[n[0]]));
        break;
      case "int":
        typeof e[n[0]] == "string" && (e[n[0]] = parseInt(e[n[0]], 10));
        break;
    }
  }
}
function fi(e) {
  Cn(e.WBProps, ci), Cn(e.CalcPr, vx), Sn(e.WBView, dx), Sn(e.Sheets, px), Ea.date1904 = be(e.WBProps.date1904);
}
var gx = /* @__PURE__ */ "][*?/\\".split("");
function mx(e, a) {
  if (e.length > 31)
    throw new Error("Sheet names cannot exceed 31 chars");
  var r = !0;
  return gx.forEach(function(n) {
    if (e.indexOf(n) != -1)
      throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
  }), r;
}
var _x = /<\w+:workbook/;
function Ex(e, a) {
  if (!e) throw new Error("Could not find file");
  var r = (
    /*::(*/
    { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" }
  ), n = !1, t = "xmlns", s = {}, i = 0;
  if (e.replace(lr, function(o, f) {
    var l = ge(o);
    switch (Mr(l[0])) {
      case "<?xml":
        break;
      /* 18.2.27 workbook CT_Workbook 1 */
      case "<workbook":
        o.match(_x) && (t = "xmlns" + o.match(/<(\w+):/)[1]), r.xmlns = l[t];
        break;
      case "</workbook>":
        break;
      /* 18.2.13 fileVersion CT_FileVersion ? */
      case "<fileVersion":
        delete l[0], r.AppVersion = l;
        break;
      case "<fileVersion/>":
      case "</fileVersion>":
        break;
      /* 18.2.12 fileSharing CT_FileSharing ? */
      case "<fileSharing":
        break;
      case "<fileSharing/>":
        break;
      /* 18.2.28 workbookPr CT_WorkbookPr ? */
      case "<workbookPr":
      case "<workbookPr/>":
        ci.forEach(function(u) {
          if (l[u[0]] != null)
            switch (u[2]) {
              case "bool":
                r.WBProps[u[0]] = be(l[u[0]]);
                break;
              case "int":
                r.WBProps[u[0]] = parseInt(l[u[0]], 10);
                break;
              default:
                r.WBProps[u[0]] = l[u[0]];
            }
        }), l.codeName && (r.WBProps.CodeName = Re(l.codeName));
        break;
      case "</workbookPr>":
        break;
      /* 18.2.29 workbookProtection CT_WorkbookProtection ? */
      case "<workbookProtection":
        break;
      case "<workbookProtection/>":
        break;
      /* 18.2.1  bookViews CT_BookViews ? */
      case "<bookViews":
      case "<bookViews>":
      case "</bookViews>":
        break;
      /* 18.2.30   workbookView CT_BookView + */
      case "<workbookView":
      case "<workbookView/>":
        delete l[0], r.WBView.push(l);
        break;
      case "</workbookView>":
        break;
      /* 18.2.20 sheets CT_Sheets 1 */
      case "<sheets":
      case "<sheets>":
      case "</sheets>":
        break;
      // aggregate sheet
      /* 18.2.19   sheet CT_Sheet + */
      case "<sheet":
        switch (l.state) {
          case "hidden":
            l.Hidden = 1;
            break;
          case "veryHidden":
            l.Hidden = 2;
            break;
          default:
            l.Hidden = 0;
        }
        delete l.state, l.name = Ce(Re(l.name)), delete l[0], r.Sheets.push(l);
        break;
      case "</sheet>":
        break;
      /* 18.2.15 functionGroups CT_FunctionGroups ? */
      case "<functionGroups":
      case "<functionGroups/>":
        break;
      /* 18.2.14   functionGroup CT_FunctionGroup + */
      case "<functionGroup":
        break;
      /* 18.2.9  externalReferences CT_ExternalReferences ? */
      case "<externalReferences":
      case "</externalReferences>":
      case "<externalReferences>":
        break;
      /* 18.2.8    externalReference CT_ExternalReference + */
      case "<externalReference":
        break;
      /* 18.2.6  definedNames CT_DefinedNames ? */
      case "<definedNames/>":
        break;
      case "<definedNames>":
      case "<definedNames":
        n = !0;
        break;
      case "</definedNames>":
        n = !1;
        break;
      /* 18.2.5    definedName CT_DefinedName + */
      case "<definedName":
        s = {}, s.Name = Re(l.name), l.comment && (s.Comment = l.comment), l.localSheetId && (s.Sheet = +l.localSheetId), be(l.hidden || "0") && (s.Hidden = !0), i = f + o.length;
        break;
      case "</definedName>":
        s.Ref = Ce(Re(e.slice(i, f))), r.Names.push(s);
        break;
      case "<definedName/>":
        break;
      /* 18.2.2  calcPr CT_CalcPr ? */
      case "<calcPr":
        delete l[0], r.CalcPr = l;
        break;
      case "<calcPr/>":
        delete l[0], r.CalcPr = l;
        break;
      case "</calcPr>":
        break;
      /* 18.2.16 oleSize CT_OleSize ? (ref required) */
      case "<oleSize":
        break;
      /* 18.2.4  customWorkbookViews CT_CustomWorkbookViews ? */
      case "<customWorkbookViews>":
      case "</customWorkbookViews>":
      case "<customWorkbookViews":
        break;
      /* 18.2.3  customWorkbookView CT_CustomWorkbookView + */
      case "<customWorkbookView":
      case "</customWorkbookView>":
        break;
      /* 18.2.18 pivotCaches CT_PivotCaches ? */
      case "<pivotCaches>":
      case "</pivotCaches>":
      case "<pivotCaches":
        break;
      /* 18.2.17 pivotCache CT_PivotCache ? */
      case "<pivotCache":
        break;
      /* 18.2.21 smartTagPr CT_SmartTagPr ? */
      case "<smartTagPr":
      case "<smartTagPr/>":
        break;
      /* 18.2.23 smartTagTypes CT_SmartTagTypes ? */
      case "<smartTagTypes":
      case "<smartTagTypes>":
      case "</smartTagTypes>":
        break;
      /* 18.2.22 smartTagType CT_SmartTagType ? */
      case "<smartTagType":
        break;
      /* 18.2.24 webPublishing CT_WebPublishing ? */
      case "<webPublishing":
      case "<webPublishing/>":
        break;
      /* 18.2.11 fileRecoveryPr CT_FileRecoveryPr ? */
      case "<fileRecoveryPr":
      case "<fileRecoveryPr/>":
        break;
      /* 18.2.26 webPublishObjects CT_WebPublishObjects ? */
      case "<webPublishObjects>":
      case "<webPublishObjects":
      case "</webPublishObjects>":
        break;
      /* 18.2.25 webPublishObject CT_WebPublishObject ? */
      case "<webPublishObject":
        break;
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      /* 18.2.7  ext CT_Extension + */
      case "<ext":
        n = !0;
        break;
      //TODO: check with versions of excel
      case "</ext>":
        n = !1;
        break;
      /* Others */
      case "<ArchID":
        break;
      case "<AlternateContent":
      case "<AlternateContent>":
        n = !0;
        break;
      case "</AlternateContent>":
        n = !1;
        break;
      /* TODO */
      case "<revisionPtr":
        break;
      default:
        if (!n && a.WTF) throw new Error("unrecognized " + l[0] + " in workbook");
    }
    return o;
  }), Lc.indexOf(r.xmlns) === -1) throw new Error("Unknown Namespace: " + r.xmlns);
  return fi(r), r;
}
function Tx(e, a) {
  var r = {};
  return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = $t(e), r.name = fr(e), r;
}
function kx(e, a) {
  var r = {}, n = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var t = a > 8 ? fr(e) : "";
  return t.length > 0 && (r.CodeName = t), r.autoCompressPictures = !!(n & 65536), r.backupFile = !!(n & 64), r.checkCompatibility = !!(n & 4096), r.date1904 = !!(n & 1), r.filterPrivacy = !!(n & 8), r.hidePivotFieldList = !!(n & 1024), r.promptedSolutions = !!(n & 16), r.publishItems = !!(n & 2048), r.refreshAllConnections = !!(n & 262144), r.saveExternalLinkValues = !!(n & 128), r.showBorderUnselectedTables = !!(n & 4), r.showInkAnnotation = !!(n & 32), r.showObjects = ["all", "placeholders", "none"][n >> 13 & 3], r.showPivotChartFilter = !!(n & 32768), r.updateLinks = ["userSet", "never", "always"][n >> 8 & 3], r;
}
function wx(e, a) {
  var r = {};
  return e.read_shift(4), r.ArchID = e.read_shift(4), e.l += a - 8, r;
}
function Ax(e, a, r) {
  var n = e.l + a;
  e.l += 4, e.l += 1;
  var t = e.read_shift(4), s = ef(e), i = c1(e, 0, r), c = p0(e);
  e.l = n;
  var o = { Name: s, Ptg: i };
  return t < 268435455 && (o.Sheet = t), c && (o.Comment = c), o;
}
function Fx(e, a) {
  var r = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" }, n = [], t = !1;
  a || (a = {}), a.biff = 12;
  var s = [], i = [[]];
  return i.SheetNames = [], i.XTI = [], Ct[16] = { n: "BrtFRTArchID$", f: wx }, Xr(e, function(o, f, l) {
    switch (l) {
      case 156:
        i.SheetNames.push(o.name), r.Sheets.push(o);
        break;
      case 153:
        r.WBProps = o;
        break;
      case 39:
        o.Sheet != null && (a.SID = o.Sheet), o.Ref = sr(o.Ptg, null, null, i, a), delete a.SID, delete o.Ptg, s.push(o);
        break;
      case 1036:
        break;
      case 357:
      /* 'BrtSupSelf' */
      case 358:
      /* 'BrtSupSame' */
      case 355:
      /* 'BrtSupBookSrc' */
      case 667:
        i[0].length ? i.push([l, o]) : i[0] = [l, o], i[i.length - 1].XTI = [];
        break;
      case 362:
        i.length === 0 && (i[0] = [], i[0].XTI = []), i[i.length - 1].XTI = i[i.length - 1].XTI.concat(o), i.XTI = i.XTI.concat(o);
        break;
      case 361:
        break;
      case 2071:
      /* 'BrtAbsPath15' */
      case 158:
      /* 'BrtBookView' */
      case 143:
      /* 'BrtBeginBundleShs' */
      case 664:
      /* 'BrtBeginFnGroup' */
      case 353:
        break;
      /* case 'BrtModelTimeGroupingCalcCol' */
      case 3072:
      /* 'BrtUid' */
      case 3073:
      /* 'BrtRevisionPtr' */
      case 534:
      /* 'BrtBookProtection' */
      case 677:
      /* 'BrtBookProtectionIso' */
      case 157:
      /* 'BrtCalcProp' */
      case 610:
      /* 'BrtCrashRecErr' */
      case 2050:
      /* 'BrtDecoupledPivotCacheID' */
      case 155:
      /* 'BrtFileRecover' */
      case 548:
      /* 'BrtFileSharing' */
      case 676:
      /* 'BrtFileSharingIso' */
      case 128:
      /* 'BrtFileVersion' */
      case 665:
      /* 'BrtFnGroup' */
      case 2128:
      /* 'BrtModelRelationship' */
      case 2125:
      /* 'BrtModelTable' */
      case 549:
      /* 'BrtOleSize' */
      case 2053:
      /* 'BrtPivotTableRef' */
      case 596:
      /* 'BrtSmartTagType' */
      case 2076:
      /* 'BrtTableSlicerCacheID' */
      case 2075:
      /* 'BrtTableSlicerCacheIDs' */
      case 2082:
      /* 'BrtTimelineCachePivotCacheID' */
      case 397:
      /* 'BrtUserBookView' */
      case 154:
      /* 'BrtWbFactoid' */
      case 1117:
      /* 'BrtWbProp14' */
      case 553:
      /* 'BrtWebOpt' */
      case 2091:
        break;
      case 35:
        n.push(l), t = !0;
        break;
      case 36:
        n.pop(), t = !1;
        break;
      case 37:
        n.push(l), t = !0;
        break;
      case 38:
        n.pop(), t = !1;
        break;
      case 16:
        break;
      default:
        if (!f.T) {
          if (!t || a.WTF && n[n.length - 1] != 37 && n[n.length - 1] != 35) throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }, a), fi(r), r.Names = s, r.supbooks = i, r;
}
function Sx(e, a, r) {
  return a.slice(-4) === ".bin" ? Fx(e, r) : Ex(e, r);
}
function Cx(e, a, r, n, t, s, i, c) {
  return a.slice(-4) === ".bin" ? fx(e, n, r, t, s, i, c) : T1(e, n, r, t, s, i, c);
}
function yx(e, a, r, n, t, s, i, c) {
  return a.slice(-4) === ".bin" ? xx(e, n, r, t, s) : ux(e, n, r, t, s);
}
function Ox(e, a, r, n, t, s, i, c) {
  return a.slice(-4) === ".bin" ? Mu() : Bu();
}
function Dx(e, a, r, n, t, s, i, c) {
  return a.slice(-4) === ".bin" ? Pu() : Lu();
}
function Rx(e, a, r, n) {
  return a.slice(-4) === ".bin" ? Zl(e, r, n) : $l(e, r, n);
}
function Ix(e, a, r) {
  return Ys(e, r);
}
function Nx(e, a, r) {
  return a.slice(-4) === ".bin" ? dl(e, r) : hl(e, r);
}
function bx(e, a, r) {
  return a.slice(-4) === ".bin" ? Iu(e, r) : Cu(e, r);
}
function Px(e, a, r) {
  return a.slice(-4) === ".bin" ? Au(e) : ku(e);
}
function Lx(e, a, r, n) {
  return r.slice(-4) === ".bin" ? Fu(e, a, r, n) : void 0;
}
function Mx(e, a, r) {
  return a.slice(-4) === ".bin" ? Eu(e, a, r) : Tu(e, a, r);
}
var oi = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g, li = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function Cr(e, a) {
  var r = e.split(/\s+/), n = [];
  if (n[0] = r[0], r.length === 1) return n;
  var t = e.match(oi), s, i, c, o;
  if (t) for (o = 0; o != t.length; ++o)
    s = t[o].match(li), (i = s[1].indexOf(":")) === -1 ? n[s[1]] = s[2].slice(1, s[2].length - 1) : (s[1].slice(0, 6) === "xmlns:" ? c = "xmlns" + s[1].slice(6) : c = s[1].slice(i + 1), n[c] = s[2].slice(1, s[2].length - 1));
  return n;
}
function Bx(e) {
  var a = e.split(/\s+/), r = {};
  if (a.length === 1) return r;
  var n = e.match(oi), t, s, i, c;
  if (n) for (c = 0; c != n.length; ++c)
    t = n[c].match(li), (s = t[1].indexOf(":")) === -1 ? r[t[1]] = t[2].slice(1, t[2].length - 1) : (t[1].slice(0, 6) === "xmlns:" ? i = "xmlns" + t[1].slice(6) : i = t[1].slice(s + 1), r[i] = t[2].slice(1, t[2].length - 1));
  return r;
}
var Va;
function Ux(e, a) {
  var r = Va[e] || Ce(e);
  return r === "General" ? ia(a) : Fr(r, a);
}
function Hx(e, a, r, n) {
  var t = n;
  switch ((r[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      t = be(n);
      break;
    case "i2":
    case "int":
      t = parseInt(n, 10);
      break;
    case "r4":
    case "float":
      t = parseFloat(n);
      break;
    case "date":
    case "dateTime.tz":
      t = qe(n);
      break;
    case "i8":
    case "string":
    case "fixed":
    case "uuid":
    case "bin.base64":
      break;
    default:
      throw new Error("bad custprop:" + r[0]);
  }
  e[Ce(a)] = t;
}
function Wx(e, a, r) {
  if (e.t !== "z") {
    if (!r || r.cellText !== !1) try {
      e.t === "e" ? e.w = e.w || xa[e.v] : a === "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = za(e.v) : e.w = ia(e.v) : e.w = Ux(a || "General", e.v);
    } catch (s) {
      if (r.WTF) throw s;
    }
    try {
      var n = Va[a] || a || "General";
      if (r.cellNF && (e.z = n), r.cellDates && e.t == "n" && wa(n)) {
        var t = ta(e.v);
        t && (e.t = "d", e.v = new Date(t.y, t.m - 1, t.d, t.H, t.M, t.S, t.u));
      }
    } catch (s) {
      if (r.WTF) throw s;
    }
  }
}
function Vx(e, a, r) {
  if (r.cellStyles && a.Interior) {
    var n = a.Interior;
    n.Pattern && (n.patternType = Hl[n.Pattern] || n.Pattern);
  }
  e[a.ID] = a;
}
function Gx(e, a, r, n, t, s, i, c, o, f) {
  var l = "General", u = n.StyleID, x = {};
  f = f || {};
  var d = [], p = 0;
  for (u === void 0 && c && (u = c.StyleID), u === void 0 && i && (u = i.StyleID); s[u] !== void 0 && (s[u].nf && (l = s[u].nf), s[u].Interior && d.push(s[u].Interior), !!s[u].Parent); )
    u = s[u].Parent;
  switch (r.Type) {
    case "Boolean":
      n.t = "b", n.v = be(e);
      break;
    case "String":
      n.t = "s", n.r = Y0(Ce(e)), n.v = e.indexOf("<") > -1 ? Ce(a || e).replace(/<.*?>/g, "") : n.r;
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"), n.v = (qe(e) - new Date(Date.UTC(1899, 11, 30))) / (1440 * 60 * 1e3), n.v !== n.v ? n.v = Ce(e) : n.v < 60 && (n.v = n.v - 1), (!l || l == "General") && (l = "yyyy-mm-dd");
    /* falls through */
    case "Number":
      n.v === void 0 && (n.v = +e), n.t || (n.t = "n");
      break;
    case "Error":
      n.t = "e", n.v = Ss[e], f.cellText !== !1 && (n.w = e);
      break;
    default:
      e == "" && a == "" ? n.t = "z" : (n.t = "s", n.v = Y0(a || e));
      break;
  }
  if (Wx(n, l, f), f.cellFormula !== !1)
    if (n.Formula) {
      var h = Ce(n.Formula);
      h.charCodeAt(0) == 61 && (h = h.slice(1)), n.f = _a(h, t), delete n.Formula, n.ArrayRange == "RC" ? n.F = _a("RC:RC", t) : n.ArrayRange && (n.F = _a(n.ArrayRange, t), o.push([Ue(n.F), n.F]));
    } else
      for (p = 0; p < o.length; ++p)
        t.r >= o[p][0].s.r && t.r <= o[p][0].e.r && t.c >= o[p][0].s.c && t.c <= o[p][0].e.c && (n.F = o[p][1]);
  f.cellStyles && (d.forEach(function(g) {
    !x.patternType && g.patternType && (x.patternType = g.patternType);
  }), n.s = x), n.StyleID !== void 0 && (n.ixfe = n.StyleID);
}
function zx(e) {
  e.t = e.v || "", e.t = e.t.replace(/\r\n/g, `
`).replace(/\r/g, `
`), e.v = e.w = e.ixfe = void 0;
}
function Wt(e, a) {
  var r = a || {};
  Zn();
  var n = Da(l0(e));
  (r.type == "binary" || r.type == "array" || r.type == "base64") && (n = Re(n));
  var t = n.slice(0, 1024).toLowerCase(), s = !1;
  if (t = t.replace(/".*?"/g, ""), (t.indexOf(">") & 1023) > Math.min(t.indexOf(",") & 1023, t.indexOf(";") & 1023)) {
    var i = Qe(r);
    return i.type = "string", Ka.to_workbook(n, i);
  }
  if (t.indexOf("<?xml") == -1 && ["html", "table", "head", "meta", "script", "style", "div"].forEach(function(xe) {
    t.indexOf("<" + xe) >= 0 && (s = !0);
  }), s) return Qx(n, r);
  Va = {
    "General Number": "General",
    "General Date": Ee[22],
    "Long Date": "dddd, mmmm dd, yyyy",
    "Medium Date": Ee[15],
    "Short Date": Ee[14],
    "Long Time": Ee[19],
    "Medium Time": Ee[18],
    "Short Time": Ee[20],
    Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    Fixed: Ee[2],
    Standard: Ee[4],
    Percent: Ee[10],
    Scientific: Ee[11],
    "Yes/No": '"Yes";"Yes";"No";@',
    "True/False": '"True";"True";"False";@',
    "On/Off": '"Yes";"Yes";"No";@'
  };
  var c, o = [], f, l = {}, u = [], x = r.dense ? [] : {}, d = "", p = {}, h = {}, g = Cr('<Data ss:Type="String">'), O = 0, I = 0, T = 0, U = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, V = {}, B = {}, A = "", _ = 0, m = [], R = {}, P = {}, D = 0, X = [], se = [], re = {}, fe = [], q, ve = !1, M = [], he = [], te = {}, w = 0, b = 0, L = { Sheets: [], WBProps: { date1904: !1 } }, N = {};
  $a.lastIndex = 0, n = n.replace(/<!--([\s\S]*?)-->/mg, "");
  for (var K = ""; c = $a.exec(n); ) switch (c[3] = (K = c[3]).toLowerCase()) {
    case "data":
      if (K == "data") {
        if (c[1] === "/") {
          if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
        } else c[0].charAt(c[0].length - 2) !== "/" && o.push([c[3], !0]);
        break;
      }
      if (o[o.length - 1][1]) break;
      c[1] === "/" ? Gx(n.slice(O, c.index), A, g, o[o.length - 1][0] == /*"Comment"*/
      "comment" ? re : p, { c: I, r: T }, V, fe[I], h, M, r) : (A = "", g = Cr(c[0]), O = c.index + c[0].length);
      break;
    case "cell":
      if (c[1] === "/")
        if (se.length > 0 && (p.c = se), (!r.sheetRows || r.sheetRows > T) && p.v !== void 0 && (r.dense ? (x[T] || (x[T] = []), x[T][I] = p) : x[Ye(I) + er(T)] = p), p.HRef && (p.l = { Target: Ce(p.HRef) }, p.HRefScreenTip && (p.l.Tooltip = p.HRefScreenTip), delete p.HRef, delete p.HRefScreenTip), (p.MergeAcross || p.MergeDown) && (w = I + (parseInt(p.MergeAcross, 10) | 0), b = T + (parseInt(p.MergeDown, 10) | 0), m.push({ s: { c: I, r: T }, e: { c: w, r: b } })), !r.sheetStubs)
          p.MergeAcross ? I = w + 1 : ++I;
        else if (p.MergeAcross || p.MergeDown) {
          for (var ee = I; ee <= w; ++ee)
            for (var Z = T; Z <= b; ++Z)
              (ee > I || Z > T) && (r.dense ? (x[Z] || (x[Z] = []), x[Z][ee] = { t: "z" }) : x[Ye(ee) + er(Z)] = { t: "z" });
          I = w + 1;
        } else ++I;
      else
        p = Bx(c[0]), p.Index && (I = +p.Index - 1), I < U.s.c && (U.s.c = I), I > U.e.c && (U.e.c = I), c[0].slice(-2) === "/>" && ++I, se = [];
      break;
    case "row":
      c[1] === "/" || c[0].slice(-2) === "/>" ? (T < U.s.r && (U.s.r = T), T > U.e.r && (U.e.r = T), c[0].slice(-2) === "/>" && (h = Cr(c[0]), h.Index && (T = +h.Index - 1)), I = 0, ++T) : (h = Cr(c[0]), h.Index && (T = +h.Index - 1), te = {}, (h.AutoFitHeight == "0" || h.Height) && (te.hpx = parseInt(h.Height, 10), te.hpt = Ks(te.hpx), he[T] = te), h.Hidden == "1" && (te.hidden = !0, he[T] = te));
      break;
    case "worksheet":
      if (c[1] === "/") {
        if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
        u.push(d), U.s.r <= U.e.r && U.s.c <= U.e.c && (x["!ref"] = Se(U), r.sheetRows && r.sheetRows <= U.e.r && (x["!fullref"] = x["!ref"], U.e.r = r.sheetRows - 1, x["!ref"] = Se(U))), m.length && (x["!merges"] = m), fe.length > 0 && (x["!cols"] = fe), he.length > 0 && (x["!rows"] = he), l[d] = x;
      } else
        U = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, T = I = 0, o.push([c[3], !1]), f = Cr(c[0]), d = Ce(f.Name), x = r.dense ? [] : {}, m = [], M = [], he = [], N = { name: d, Hidden: 0 }, L.Sheets.push(N);
      break;
    case "table":
      if (c[1] === "/") {
        if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
      } else {
        if (c[0].slice(-2) == "/>") break;
        o.push([c[3], !1]), fe = [], ve = !1;
      }
      break;
    case "style":
      c[1] === "/" ? Vx(V, B, r) : B = Cr(c[0]);
      break;
    case "numberformat":
      B.nf = Ce(Cr(c[0]).Format || "General"), Va[B.nf] && (B.nf = Va[B.nf]);
      for (var J = 0; J != 392 && Ee[J] != B.nf; ++J) ;
      if (J == 392) {
        for (J = 57; J != 392; ++J) if (Ee[J] == null) {
          na(B.nf, J);
          break;
        }
      }
      break;
    case "column":
      if (o[o.length - 1][0] !== /*'Table'*/
      "table") break;
      if (q = Cr(c[0]), q.Hidden && (q.hidden = !0, delete q.Hidden), q.Width && (q.wpx = parseInt(q.Width, 10)), !ve && q.wpx > 10) {
        ve = !0, hr = Xs;
        for (var j = 0; j < fe.length; ++j) fe[j] && ka(fe[j]);
      }
      ve && ka(q), fe[q.Index - 1 || fe.length] = q;
      for (var ie = 0; ie < +q.Span; ++ie) fe[fe.length] = Qe(q);
      break;
    case "namedrange":
      if (c[1] === "/") break;
      L.Names || (L.Names = []);
      var C = ge(c[0]), Te = {
        Name: C.Name,
        Ref: _a(C.RefersTo.slice(1), { r: 0, c: 0 })
      };
      L.Sheets.length > 0 && (Te.Sheet = L.Sheets.length - 1), L.Names.push(Te);
      break;
    case "namedcell":
      break;
    case "b":
      break;
    case "i":
      break;
    case "u":
      break;
    case "s":
      break;
    case "em":
      break;
    case "h2":
      break;
    case "h3":
      break;
    case "sub":
      break;
    case "sup":
      break;
    case "span":
      break;
    case "alignment":
      break;
    case "borders":
      break;
    case "border":
      break;
    case "font":
      if (c[0].slice(-2) === "/>") break;
      c[1] === "/" ? A += n.slice(_, c.index) : _ = c.index + c[0].length;
      break;
    case "interior":
      if (!r.cellStyles) break;
      B.Interior = Cr(c[0]);
      break;
    case "protection":
      break;
    case "author":
    case "title":
    case "description":
    case "created":
    case "keywords":
    case "subject":
    case "category":
    case "company":
    case "lastauthor":
    case "lastsaved":
    case "lastprinted":
    case "version":
    case "revision":
    case "totaltime":
    case "hyperlinkbase":
    case "manager":
    case "contentstatus":
    case "identifier":
    case "language":
    case "appname":
      if (c[0].slice(-2) === "/>") break;
      c[1] === "/" ? Sf(R, K, n.slice(D, c.index)) : D = c.index + c[0].length;
      break;
    case "paragraphs":
      break;
    case "styles":
    case "workbook":
      if (c[1] === "/") {
        if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
      } else o.push([c[3], !1]);
      break;
    case "comment":
      if (c[1] === "/") {
        if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
        zx(re), se.push(re);
      } else
        o.push([c[3], !1]), f = Cr(c[0]), re = { a: f.Author };
      break;
    case "autofilter":
      if (c[1] === "/") {
        if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
      } else if (c[0].charAt(c[0].length - 2) !== "/") {
        var de = Cr(c[0]);
        x["!autofilter"] = { ref: _a(de.Range).replace(/\$/g, "") }, o.push([c[3], !0]);
      }
      break;
    case "name":
      break;
    case "datavalidation":
      if (c[1] === "/") {
        if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
      } else
        c[0].charAt(c[0].length - 2) !== "/" && o.push([c[3], !0]);
      break;
    case "pixelsperinch":
      break;
    case "componentoptions":
    case "documentproperties":
    case "customdocumentproperties":
    case "officedocumentsettings":
    case "pivottable":
    case "pivotcache":
    case "names":
    case "mapinfo":
    case "pagebreaks":
    case "querytable":
    case "sorting":
    case "schema":
    //case 'data' /*case 'data'*/:
    case "conditionalformatting":
    case "smarttagtype":
    case "smarttags":
    case "excelworkbook":
    case "workbookoptions":
    case "worksheetoptions":
      if (c[1] === "/") {
        if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
      } else c[0].charAt(c[0].length - 2) !== "/" && o.push([c[3], !0]);
      break;
    case "null":
      break;
    default:
      if (o.length == 0 && c[3] == "document" || o.length == 0 && c[3] == "uof") return Nn(n, r);
      var pe = !0;
      switch (o[o.length - 1][0]) {
        /* OfficeDocumentSettings */
        case "officedocumentsettings":
          switch (c[3]) {
            case "allowpng":
              break;
            case "removepersonalinformation":
              break;
            case "downloadcomponents":
              break;
            case "locationofcomponents":
              break;
            case "colors":
              break;
            case "color":
              break;
            case "index":
              break;
            case "rgb":
              break;
            case "targetscreensize":
              break;
            case "readonlyrecommended":
              break;
            default:
              pe = !1;
          }
          break;
        /* ComponentOptions */
        case "componentoptions":
          switch (c[3]) {
            case "toolbar":
              break;
            case "hideofficelogo":
              break;
            case "spreadsheetautofit":
              break;
            case "label":
              break;
            case "caption":
              break;
            case "maxheight":
              break;
            case "maxwidth":
              break;
            case "nextsheetnumber":
              break;
            default:
              pe = !1;
          }
          break;
        /* ExcelWorkbook */
        case "excelworkbook":
          switch (c[3]) {
            case "date1904":
              L.WBProps.date1904 = !0;
              break;
            case "windowheight":
              break;
            case "windowwidth":
              break;
            case "windowtopx":
              break;
            case "windowtopy":
              break;
            case "tabratio":
              break;
            case "protectstructure":
              break;
            case "protectwindow":
              break;
            case "protectwindows":
              break;
            case "activesheet":
              break;
            case "displayinknotes":
              break;
            case "firstvisiblesheet":
              break;
            case "supbook":
              break;
            case "sheetname":
              break;
            case "sheetindex":
              break;
            case "sheetindexfirst":
              break;
            case "sheetindexlast":
              break;
            case "dll":
              break;
            case "acceptlabelsinformulas":
              break;
            case "donotsavelinkvalues":
              break;
            case "iteration":
              break;
            case "maxiterations":
              break;
            case "maxchange":
              break;
            case "path":
              break;
            case "xct":
              break;
            case "count":
              break;
            case "selectedsheets":
              break;
            case "calculation":
              break;
            case "uncalced":
              break;
            case "startupprompt":
              break;
            case "crn":
              break;
            case "externname":
              break;
            case "formula":
              break;
            case "colfirst":
              break;
            case "collast":
              break;
            case "wantadvise":
              break;
            case "boolean":
              break;
            case "error":
              break;
            case "text":
              break;
            case "ole":
              break;
            case "noautorecover":
              break;
            case "publishobjects":
              break;
            case "donotcalculatebeforesave":
              break;
            case "number":
              break;
            case "refmoder1c1":
              break;
            case "embedsavesmarttags":
              break;
            default:
              pe = !1;
          }
          break;
        /* WorkbookOptions */
        case "workbookoptions":
          switch (c[3]) {
            case "owcversion":
              break;
            case "height":
              break;
            case "width":
              break;
            default:
              pe = !1;
          }
          break;
        /* WorksheetOptions */
        case "worksheetoptions":
          switch (c[3]) {
            case "visible":
              if (c[0].slice(-2) !== "/>") if (c[1] === "/") switch (n.slice(D, c.index)) {
                case "SheetHidden":
                  N.Hidden = 1;
                  break;
                case "SheetVeryHidden":
                  N.Hidden = 2;
                  break;
              }
              else D = c.index + c[0].length;
              break;
            case "header":
              x["!margins"] || Wa(x["!margins"] = {}, "xlml"), isNaN(+ge(c[0]).Margin) || (x["!margins"].header = +ge(c[0]).Margin);
              break;
            case "footer":
              x["!margins"] || Wa(x["!margins"] = {}, "xlml"), isNaN(+ge(c[0]).Margin) || (x["!margins"].footer = +ge(c[0]).Margin);
              break;
            case "pagemargins":
              var oe = ge(c[0]);
              x["!margins"] || Wa(x["!margins"] = {}, "xlml"), isNaN(+oe.Top) || (x["!margins"].top = +oe.Top), isNaN(+oe.Left) || (x["!margins"].left = +oe.Left), isNaN(+oe.Right) || (x["!margins"].right = +oe.Right), isNaN(+oe.Bottom) || (x["!margins"].bottom = +oe.Bottom);
              break;
            case "displayrighttoleft":
              L.Views || (L.Views = []), L.Views[0] || (L.Views[0] = {}), L.Views[0].RTL = !0;
              break;
            case "freezepanes":
              break;
            case "frozennosplit":
              break;
            case "splithorizontal":
            case "splitvertical":
              break;
            case "donotdisplaygridlines":
              break;
            case "activerow":
              break;
            case "activecol":
              break;
            case "toprowbottompane":
              break;
            case "leftcolumnrightpane":
              break;
            case "unsynced":
              break;
            case "print":
              break;
            case "printerrors":
              break;
            case "panes":
              break;
            case "scale":
              break;
            case "pane":
              break;
            case "number":
              break;
            case "layout":
              break;
            case "pagesetup":
              break;
            case "selected":
              break;
            case "protectobjects":
              break;
            case "enableselection":
              break;
            case "protectscenarios":
              break;
            case "validprinterinfo":
              break;
            case "horizontalresolution":
              break;
            case "verticalresolution":
              break;
            case "numberofcopies":
              break;
            case "activepane":
              break;
            case "toprowvisible":
              break;
            case "leftcolumnvisible":
              break;
            case "fittopage":
              break;
            case "rangeselection":
              break;
            case "papersizeindex":
              break;
            case "pagelayoutzoom":
              break;
            case "pagebreakzoom":
              break;
            case "filteron":
              break;
            case "fitwidth":
              break;
            case "fitheight":
              break;
            case "commentslayout":
              break;
            case "zoom":
              break;
            case "lefttoright":
              break;
            case "gridlines":
              break;
            case "allowsort":
              break;
            case "allowfilter":
              break;
            case "allowinsertrows":
              break;
            case "allowdeleterows":
              break;
            case "allowinsertcols":
              break;
            case "allowdeletecols":
              break;
            case "allowinserthyperlinks":
              break;
            case "allowformatcells":
              break;
            case "allowsizecols":
              break;
            case "allowsizerows":
              break;
            case "nosummaryrowsbelowdetail":
              x["!outline"] || (x["!outline"] = {}), x["!outline"].above = !0;
              break;
            case "tabcolorindex":
              break;
            case "donotdisplayheadings":
              break;
            case "showpagelayoutzoom":
              break;
            case "nosummarycolumnsrightdetail":
              x["!outline"] || (x["!outline"] = {}), x["!outline"].left = !0;
              break;
            case "blackandwhite":
              break;
            case "donotdisplayzeros":
              break;
            case "displaypagebreak":
              break;
            case "rowcolheadings":
              break;
            case "donotdisplayoutline":
              break;
            case "noorientation":
              break;
            case "allowusepivottables":
              break;
            case "zeroheight":
              break;
            case "viewablerange":
              break;
            case "selection":
              break;
            case "protectcontents":
              break;
            default:
              pe = !1;
          }
          break;
        /* PivotTable */
        case "pivottable":
        case "pivotcache":
          switch (c[3]) {
            case "immediateitemsondrop":
              break;
            case "showpagemultipleitemlabel":
              break;
            case "compactrowindent":
              break;
            case "location":
              break;
            case "pivotfield":
              break;
            case "orientation":
              break;
            case "layoutform":
              break;
            case "layoutsubtotallocation":
              break;
            case "layoutcompactrow":
              break;
            case "position":
              break;
            case "pivotitem":
              break;
            case "datatype":
              break;
            case "datafield":
              break;
            case "sourcename":
              break;
            case "parentfield":
              break;
            case "ptlineitems":
              break;
            case "ptlineitem":
              break;
            case "countofsameitems":
              break;
            case "item":
              break;
            case "itemtype":
              break;
            case "ptsource":
              break;
            case "cacheindex":
              break;
            case "consolidationreference":
              break;
            case "filename":
              break;
            case "reference":
              break;
            case "nocolumngrand":
              break;
            case "norowgrand":
              break;
            case "blanklineafteritems":
              break;
            case "hidden":
              break;
            case "subtotal":
              break;
            case "basefield":
              break;
            case "mapchilditems":
              break;
            case "function":
              break;
            case "refreshonfileopen":
              break;
            case "printsettitles":
              break;
            case "mergelabels":
              break;
            case "defaultversion":
              break;
            case "refreshname":
              break;
            case "refreshdate":
              break;
            case "refreshdatecopy":
              break;
            case "versionlastrefresh":
              break;
            case "versionlastupdate":
              break;
            case "versionupdateablemin":
              break;
            case "versionrefreshablemin":
              break;
            case "calculation":
              break;
            default:
              pe = !1;
          }
          break;
        /* PageBreaks */
        case "pagebreaks":
          switch (c[3]) {
            case "colbreaks":
              break;
            case "colbreak":
              break;
            case "rowbreaks":
              break;
            case "rowbreak":
              break;
            case "colstart":
              break;
            case "colend":
              break;
            case "rowend":
              break;
            default:
              pe = !1;
          }
          break;
        /* AutoFilter */
        case "autofilter":
          switch (c[3]) {
            case "autofiltercolumn":
              break;
            case "autofiltercondition":
              break;
            case "autofilterand":
              break;
            case "autofilteror":
              break;
            default:
              pe = !1;
          }
          break;
        /* QueryTable */
        case "querytable":
          switch (c[3]) {
            case "id":
              break;
            case "autoformatfont":
              break;
            case "autoformatpattern":
              break;
            case "querysource":
              break;
            case "querytype":
              break;
            case "enableredirections":
              break;
            case "refreshedinxl9":
              break;
            case "urlstring":
              break;
            case "htmltables":
              break;
            case "connection":
              break;
            case "commandtext":
              break;
            case "refreshinfo":
              break;
            case "notitles":
              break;
            case "nextid":
              break;
            case "columninfo":
              break;
            case "overwritecells":
              break;
            case "donotpromptforfile":
              break;
            case "textwizardsettings":
              break;
            case "source":
              break;
            case "number":
              break;
            case "decimal":
              break;
            case "thousandseparator":
              break;
            case "trailingminusnumbers":
              break;
            case "formatsettings":
              break;
            case "fieldtype":
              break;
            case "delimiters":
              break;
            case "tab":
              break;
            case "comma":
              break;
            case "autoformatname":
              break;
            case "versionlastedit":
              break;
            case "versionlastrefresh":
              break;
            default:
              pe = !1;
          }
          break;
        case "datavalidation":
          switch (c[3]) {
            case "range":
              break;
            case "type":
              break;
            case "min":
              break;
            case "max":
              break;
            case "sort":
              break;
            case "descending":
              break;
            case "order":
              break;
            case "casesensitive":
              break;
            case "value":
              break;
            case "errorstyle":
              break;
            case "errormessage":
              break;
            case "errortitle":
              break;
            case "inputmessage":
              break;
            case "inputtitle":
              break;
            case "combohide":
              break;
            case "inputhide":
              break;
            case "condition":
              break;
            case "qualifier":
              break;
            case "useblank":
              break;
            case "value1":
              break;
            case "value2":
              break;
            case "format":
              break;
            case "cellrangelist":
              break;
            default:
              pe = !1;
          }
          break;
        case "sorting":
        case "conditionalformatting":
          switch (c[3]) {
            case "range":
              break;
            case "type":
              break;
            case "min":
              break;
            case "max":
              break;
            case "sort":
              break;
            case "descending":
              break;
            case "order":
              break;
            case "casesensitive":
              break;
            case "value":
              break;
            case "errorstyle":
              break;
            case "errormessage":
              break;
            case "errortitle":
              break;
            case "cellrangelist":
              break;
            case "inputmessage":
              break;
            case "inputtitle":
              break;
            case "combohide":
              break;
            case "inputhide":
              break;
            case "condition":
              break;
            case "qualifier":
              break;
            case "useblank":
              break;
            case "value1":
              break;
            case "value2":
              break;
            case "format":
              break;
            default:
              pe = !1;
          }
          break;
        /* MapInfo (schema) */
        case "mapinfo":
        case "schema":
        case "data":
          switch (c[3]) {
            case "map":
              break;
            case "entry":
              break;
            case "range":
              break;
            case "xpath":
              break;
            case "field":
              break;
            case "xsdtype":
              break;
            case "filteron":
              break;
            case "aggregate":
              break;
            case "elementtype":
              break;
            case "attributetype":
              break;
            /* These are from xsd (XML Schema Definition) */
            case "schema":
            case "element":
            case "complextype":
            case "datatype":
            case "all":
            case "attribute":
            case "extends":
              break;
            case "row":
              break;
            default:
              pe = !1;
          }
          break;
        /* SmartTags (can be anything) */
        case "smarttags":
          break;
        default:
          pe = !1;
          break;
      }
      if (pe || c[3].match(/!\[CDATA/)) break;
      if (!o[o.length - 1][1]) throw "Unrecognized tag: " + c[3] + "|" + o.join("|");
      if (o[o.length - 1][0] === /*'CustomDocumentProperties'*/
      "customdocumentproperties") {
        if (c[0].slice(-2) === "/>") break;
        c[1] === "/" ? Hx(P, K, X, n.slice(D, c.index)) : (X = c, D = c.index + c[0].length);
        break;
      }
      if (r.WTF) throw "Unrecognized tag: " + c[3] + "|" + o.join("|");
  }
  var ne = {};
  return !r.bookSheets && !r.bookProps && (ne.Sheets = l), ne.SheetNames = u, ne.Workbook = L, ne.SSF = Qe(Ee), ne.Props = R, ne.Custprops = P, ne;
}
function Jt(e, a) {
  switch (F0(a = a || {}), a.type || "base64") {
    case "base64":
      return Wt(Tr(e), a);
    case "binary":
    case "buffer":
    case "file":
      return Wt(e, a);
    case "array":
      return Wt(la(e), a);
  }
}
function Xx(e) {
  var a = {}, r = e.content;
  if (r.l = 28, a.AnsiUserType = r.read_shift(0, "lpstr-ansi"), a.AnsiClipboardFormat = tf(r), r.length - r.l <= 4) return a;
  var n = r.read_shift(4);
  if (n == 0 || n > 40 || (r.l -= 4, a.Reserved1 = r.read_shift(0, "lpstr-ansi"), r.length - r.l <= 4) || (n = r.read_shift(4), n !== 1907505652) || (a.UnicodeClipboardFormat = nf(r), n = r.read_shift(4), n == 0 || n > 40)) return a;
  r.l -= 4, a.Reserved2 = r.read_shift(0, "lpwstr");
}
var $x = [60, 1084, 2066, 2165, 2175];
function Kx(e, a, r, n, t) {
  var s = n, i = [], c = r.slice(r.l, r.l + s);
  if (t && t.enc && t.enc.insitu && c.length > 0) switch (e) {
    case 9:
    case 521:
    case 1033:
    case 2057:
    case 47:
    case 405:
    case 225:
    case 406:
    case 312:
    case 404:
    case 10:
      break;
    case 133:
      break;
    default:
      t.enc.insitu(c);
  }
  i.push(c), r.l += s;
  for (var o = Wr(r, r.l), f = qt[o], l = 0; f != null && $x.indexOf(o) > -1; )
    s = Wr(r, r.l + 2), l = r.l + 4, o == 2066 ? l += 4 : (o == 2165 || o == 2175) && (l += 12), c = r.slice(l, r.l + 4 + s), i.push(c), r.l += 4 + s, f = qt[o = Wr(r, r.l)];
  var u = Kr(i);
  Ze(u, 0);
  var x = 0;
  u.lens = [];
  for (var d = 0; d < i.length; ++d)
    u.lens.push(x), x += i[d].length;
  if (u.length < n) throw "XLS Record 0x" + e.toString(16) + " Truncated: " + u.length + " < " + n;
  return a.f(u, u.length, t);
}
function br(e, a, r) {
  if (e.t !== "z" && e.XF) {
    var n = 0;
    try {
      n = e.z || e.XF.numFmtId || 0, a.cellNF && (e.z = Ee[n]);
    } catch (s) {
      if (a.WTF) throw s;
    }
    if (!a || a.cellText !== !1) try {
      e.t === "e" ? e.w = e.w || xa[e.v] : n === 0 || n == "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = za(e.v) : e.w = ia(e.v) : e.w = Fr(n, e.v, { date1904: !!r, dateNF: a && a.dateNF });
    } catch (s) {
      if (a.WTF) throw s;
    }
    if (a.cellDates && n && e.t == "n" && wa(Ee[n] || String(n))) {
      var t = ta(e.v);
      t && (e.t = "d", e.v = new Date(t.y, t.m - 1, t.d, t.H, t.M, t.S, t.u));
    }
  }
}
function dt(e, a, r) {
  return { v: e, ixfe: a, t: r };
}
function Yx(e, a) {
  var r = { opts: {} }, n = {}, t = a.dense ? [] : {}, s = {}, i = {}, c = null, o = [], f = "", l = {}, u, x = "", d, p, h, g, O = {}, I = [], T, U, V = [], B = [], A = { Sheets: [], WBProps: { date1904: !1 }, Views: [{}] }, _ = {}, m = function(ke) {
    return ke < 8 ? sa[ke] : ke < 64 && B[ke - 8] || sa[ke];
  }, R = function(ke, Oe, Pe) {
    var Ne = Oe.XF.data;
    if (!(!Ne || !Ne.patternType || !Pe || !Pe.cellStyles)) {
      Oe.s = {}, Oe.s.patternType = Ne.patternType;
      var Nr;
      (Nr = Ya(m(Ne.icvFore))) && (Oe.s.fgColor = { rgb: Nr }), (Nr = Ya(m(Ne.icvBack))) && (Oe.s.bgColor = { rgb: Nr });
    }
  }, P = function(ke, Oe, Pe) {
    if (!(te > 1) && !(Pe.sheetRows && ke.r >= Pe.sheetRows)) {
      if (Pe.cellStyles && Oe.XF && Oe.XF.data && R(ke, Oe, Pe), delete Oe.ixfe, delete Oe.XF, u = ke, x = me(ke), (!i || !i.s || !i.e) && (i = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), ke.r < i.s.r && (i.s.r = ke.r), ke.c < i.s.c && (i.s.c = ke.c), ke.r + 1 > i.e.r && (i.e.r = ke.r + 1), ke.c + 1 > i.e.c && (i.e.c = ke.c + 1), Pe.cellFormula && Oe.f) {
        for (var Ne = 0; Ne < I.length; ++Ne)
          if (!(I[Ne][0].s.c > ke.c || I[Ne][0].s.r > ke.r) && !(I[Ne][0].e.c < ke.c || I[Ne][0].e.r < ke.r)) {
            Oe.F = Se(I[Ne][0]), (I[Ne][0].s.c != ke.c || I[Ne][0].s.r != ke.r) && delete Oe.f, Oe.f && (Oe.f = "" + sr(I[Ne][1], i, ke, M, D));
            break;
          }
      }
      Pe.dense ? (t[ke.r] || (t[ke.r] = []), t[ke.r][ke.c] = Oe) : t[x] = Oe;
    }
  }, D = {
    enc: !1,
    // encrypted
    sbcch: 0,
    // cch in the preceding SupBook
    snames: [],
    // sheetnames
    sharedf: O,
    // shared formulae by address
    arrayf: I,
    // array formulae array
    rrtabid: [],
    // RRTabId
    lastuser: "",
    // Last User from WriteAccess
    biff: 8,
    // BIFF version
    codepage: 0,
    // CP from CodePage record
    winlocked: 0,
    // fLockWn from WinProtect
    cellStyles: !!a && !!a.cellStyles,
    WTF: !!a && !!a.wtf
  };
  a.password && (D.password = a.password);
  var X, se = [], re = [], fe = [], q = [], ve = !1, M = [];
  M.SheetNames = D.snames, M.sharedf = D.sharedf, M.arrayf = D.arrayf, M.names = [], M.XTI = [];
  var he = 0, te = 0, w = 0, b = [], L = [], N;
  D.codepage = 1200, Dr(1200);
  for (var K = !1; e.l < e.length - 1; ) {
    var ee = e.l, Z = e.read_shift(2);
    if (Z === 0 && he === 10) break;
    var J = e.l === e.length ? 0 : e.read_shift(2), j = qt[Z];
    if (j && j.f) {
      if (a.bookSheets && he === 133 && Z !== 133)
        break;
      if (he = Z, j.r === 2 || j.r == 12) {
        var ie = e.read_shift(2);
        if (J -= 2, !D.enc && ie !== Z && ((ie & 255) << 8 | ie >> 8) !== Z) throw new Error("rt mismatch: " + ie + "!=" + Z);
        j.r == 12 && (e.l += 10, J -= 10);
      }
      var C = {};
      if (Z === 10 ? C = /*::(*/
      j.f(e, J, D) : C = /*::(*/
      Kx(Z, j, e, J, D), te == 0 && [9, 521, 1033, 2057].indexOf(he) === -1) continue;
      switch (Z) {
        case 34:
          r.opts.Date1904 = A.WBProps.date1904 = C;
          break;
        case 134:
          r.opts.WriteProtect = !0;
          break;
        case 47:
          if (D.enc || (e.l = 0), D.enc = C, !a.password) throw new Error("File is password-protected");
          if (C.valid == null) throw new Error("Encryption scheme unsupported");
          if (!C.valid) throw new Error("Password is incorrect");
          break;
        case 92:
          D.lastuser = C;
          break;
        case 66:
          var Te = Number(C);
          switch (Te) {
            case 21010:
              Te = 1200;
              break;
            case 32768:
              Te = 1e4;
              break;
            case 32769:
              Te = 1252;
              break;
          }
          Dr(D.codepage = Te), K = !0;
          break;
        case 317:
          D.rrtabid = C;
          break;
        case 25:
          D.winlocked = C;
          break;
        case 439:
          r.opts.RefreshAll = C;
          break;
        case 12:
          r.opts.CalcCount = C;
          break;
        case 16:
          r.opts.CalcDelta = C;
          break;
        case 17:
          r.opts.CalcIter = C;
          break;
        case 13:
          r.opts.CalcMode = C;
          break;
        case 14:
          r.opts.CalcPrecision = C;
          break;
        case 95:
          r.opts.CalcSaveRecalc = C;
          break;
        case 15:
          D.CalcRefMode = C;
          break;
        // TODO: implement R1C1
        case 2211:
          r.opts.FullCalc = C;
          break;
        case 129:
          C.fDialog && (t["!type"] = "dialog"), C.fBelow || ((t["!outline"] || (t["!outline"] = {})).above = !0), C.fRight || ((t["!outline"] || (t["!outline"] = {})).left = !0);
          break;
        // TODO
        case 224:
          V.push(C);
          break;
        case 430:
          M.push([C]), M[M.length - 1].XTI = [];
          break;
        case 35:
        case 547:
          M[M.length - 1].push(C);
          break;
        case 24:
        case 536:
          N = {
            Name: C.Name,
            Ref: sr(C.rgce, i, null, M, D)
          }, C.itab > 0 && (N.Sheet = C.itab - 1), M.names.push(N), M[0] || (M[0] = [], M[0].XTI = []), M[M.length - 1].push(C), C.Name == "_xlnm._FilterDatabase" && C.itab > 0 && C.rgce && C.rgce[0] && C.rgce[0][0] && C.rgce[0][0][0] == "PtgArea3d" && (L[C.itab - 1] = { ref: Se(C.rgce[0][0][1][2]) });
          break;
        case 22:
          D.ExternCount = C;
          break;
        case 23:
          M.length == 0 && (M[0] = [], M[0].XTI = []), M[M.length - 1].XTI = M[M.length - 1].XTI.concat(C), M.XTI = M.XTI.concat(C);
          break;
        case 2196:
          if (D.biff < 8) break;
          N != null && (N.Comment = C[1]);
          break;
        case 18:
          t["!protect"] = C;
          break;
        /* for sheet or book */
        case 19:
          C !== 0 && D.WTF && console.error("Password verifier: " + C);
          break;
        case 133:
          s[C.pos] = C, D.snames.push(C.name);
          break;
        case 10:
          {
            if (--te) break;
            if (i.e) {
              if (i.e.r > 0 && i.e.c > 0) {
                if (i.e.r--, i.e.c--, t["!ref"] = Se(i), a.sheetRows && a.sheetRows <= i.e.r) {
                  var de = i.e.r;
                  i.e.r = a.sheetRows - 1, t["!fullref"] = t["!ref"], t["!ref"] = Se(i), i.e.r = de;
                }
                i.e.r++, i.e.c++;
              }
              se.length > 0 && (t["!merges"] = se), re.length > 0 && (t["!objects"] = re), fe.length > 0 && (t["!cols"] = fe), q.length > 0 && (t["!rows"] = q), A.Sheets.push(_);
            }
            f === "" ? l = t : n[f] = t, t = a.dense ? [] : {};
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (D.biff === 8 && (D.biff = {
              /*::[*/
              9: 2,
              /*::[*/
              521: 3,
              /*::[*/
              1033: 4
            }[Z] || {
              /*::[*/
              512: 2,
              /*::[*/
              768: 3,
              /*::[*/
              1024: 4,
              /*::[*/
              1280: 5,
              /*::[*/
              1536: 8,
              /*::[*/
              2: 2,
              /*::[*/
              7: 2
            }[C.BIFFVer] || 8), D.biffguess = C.BIFFVer == 0, C.BIFFVer == 0 && C.dt == 4096 && (D.biff = 5, K = !0, Dr(D.codepage = 28591)), D.biff == 8 && C.BIFFVer == 0 && C.dt == 16 && (D.biff = 2), te++) break;
            if (t = a.dense ? [] : {}, D.biff < 8 && !K && (K = !0, Dr(D.codepage = a.codepage || 1252)), D.biff < 5 || C.BIFFVer == 0 && C.dt == 4096) {
              f === "" && (f = "Sheet1"), i = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var pe = { pos: e.l - J, name: f };
              s[pe.pos] = pe, D.snames.push(f);
            } else f = (s[ee] || { name: "" }).name;
            C.dt == 32 && (t["!type"] = "chart"), C.dt == 64 && (t["!type"] = "macro"), se = [], re = [], D.arrayf = I = [], fe = [], q = [], ve = !1, _ = { Hidden: (s[ee] || { hs: 0 }).hs, name: f };
          }
          break;
        case 515:
        case 3:
        case 2:
          t["!type"] == "chart" && (a.dense ? (t[C.r] || [])[C.c] : t[me({ c: C.c, r: C.r })]) && ++C.c, T = { ixfe: C.ixfe, XF: V[C.ixfe] || {}, v: C.val, t: "n" }, w > 0 && (T.z = b[T.ixfe >> 8 & 63]), br(T, a, r.opts.Date1904), P({ c: C.c, r: C.r }, T, a);
          break;
        case 5:
        case 517:
          T = { ixfe: C.ixfe, XF: V[C.ixfe], v: C.val, t: C.t }, w > 0 && (T.z = b[T.ixfe >> 8 & 63]), br(T, a, r.opts.Date1904), P({ c: C.c, r: C.r }, T, a);
          break;
        case 638:
          T = { ixfe: C.ixfe, XF: V[C.ixfe], v: C.rknum, t: "n" }, w > 0 && (T.z = b[T.ixfe >> 8 & 63]), br(T, a, r.opts.Date1904), P({ c: C.c, r: C.r }, T, a);
          break;
        case 189:
          for (var oe = C.c; oe <= C.C; ++oe) {
            var ne = C.rkrec[oe - C.c][0];
            T = { ixfe: ne, XF: V[ne], v: C.rkrec[oe - C.c][1], t: "n" }, w > 0 && (T.z = b[T.ixfe >> 8 & 63]), br(T, a, r.opts.Date1904), P({ c: oe, r: C.r }, T, a);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (C.val == "String") {
              c = C;
              break;
            }
            if (T = dt(C.val, C.cell.ixfe, C.tt), T.XF = V[T.ixfe], a.cellFormula) {
              var xe = C.formula;
              if (xe && xe[0] && xe[0][0] && xe[0][0][0] == "PtgExp") {
                var we = xe[0][0][1][0], $e = xe[0][0][1][1], rr = me({ r: we, c: $e });
                O[rr] ? T.f = "" + sr(C.formula, i, C.cell, M, D) : T.F = ((a.dense ? (t[we] || [])[$e] : t[rr]) || {}).F;
              } else T.f = "" + sr(C.formula, i, C.cell, M, D);
            }
            w > 0 && (T.z = b[T.ixfe >> 8 & 63]), br(T, a, r.opts.Date1904), P(C.cell, T, a), c = C;
          }
          break;
        case 7:
        case 519:
          if (c)
            c.val = C, T = dt(C, c.cell.ixfe, "s"), T.XF = V[T.ixfe], a.cellFormula && (T.f = "" + sr(c.formula, i, c.cell, M, D)), w > 0 && (T.z = b[T.ixfe >> 8 & 63]), br(T, a, r.opts.Date1904), P(c.cell, T, a), c = null;
          else throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            I.push(C);
            var ar = me(C[0].s);
            if (d = a.dense ? (t[C[0].s.r] || [])[C[0].s.c] : t[ar], a.cellFormula && d) {
              if (!c || !ar || !d) break;
              d.f = "" + sr(C[1], i, C[0], M, D), d.F = Se(C[0]);
            }
          }
          break;
        case 1212:
          {
            if (!a.cellFormula) break;
            if (x) {
              if (!c) break;
              O[me(c.cell)] = C[0], d = a.dense ? (t[c.cell.r] || [])[c.cell.c] : t[me(c.cell)], (d || {}).f = "" + sr(C[0], i, u, M, D);
            }
          }
          break;
        case 253:
          T = dt(o[C.isst].t, C.ixfe, "s"), o[C.isst].h && (T.h = o[C.isst].h), T.XF = V[T.ixfe], w > 0 && (T.z = b[T.ixfe >> 8 & 63]), br(T, a, r.opts.Date1904), P({ c: C.c, r: C.r }, T, a);
          break;
        case 513:
          a.sheetStubs && (T = { ixfe: C.ixfe, XF: V[C.ixfe], t: "z" }, w > 0 && (T.z = b[T.ixfe >> 8 & 63]), br(T, a, r.opts.Date1904), P({ c: C.c, r: C.r }, T, a));
          break;
        case 190:
          if (a.sheetStubs)
            for (var vr = C.c; vr <= C.C; ++vr) {
              var ye = C.ixfe[vr - C.c];
              T = { ixfe: ye, XF: V[ye], t: "z" }, w > 0 && (T.z = b[T.ixfe >> 8 & 63]), br(T, a, r.opts.Date1904), P({ c: vr, r: C.r }, T, a);
            }
          break;
        case 214:
        case 516:
        case 4:
          T = dt(C.val, C.ixfe, "s"), T.XF = V[T.ixfe], w > 0 && (T.z = b[T.ixfe >> 8 & 63]), br(T, a, r.opts.Date1904), P({ c: C.c, r: C.r }, T, a);
          break;
        case 0:
        case 512:
          te === 1 && (i = C);
          break;
        case 252:
          o = C;
          break;
        case 1054:
          if (D.biff == 4) {
            b[w++] = C[1];
            for (var We = 0; We < w + 163 && Ee[We] != C[1]; ++We) ;
            We >= 163 && na(C[1], w + 163);
          } else na(C[1], C[0]);
          break;
        case 30:
          {
            b[w++] = C;
            for (var De = 0; De < w + 163 && Ee[De] != C; ++De) ;
            De >= 163 && na(C, w + 163);
          }
          break;
        case 229:
          se = se.concat(C);
          break;
        case 93:
          re[C.cmo[0]] = D.lastobj = C;
          break;
        case 438:
          D.lastobj.TxO = C;
          break;
        case 127:
          D.lastobj.ImData = C;
          break;
        case 440:
          for (g = C[0].s.r; g <= C[0].e.r; ++g)
            for (h = C[0].s.c; h <= C[0].e.c; ++h)
              d = a.dense ? (t[g] || [])[h] : t[me({ c: h, r: g })], d && (d.l = C[1]);
          break;
        case 2048:
          for (g = C[0].s.r; g <= C[0].e.r; ++g)
            for (h = C[0].s.c; h <= C[0].e.c; ++h)
              d = a.dense ? (t[g] || [])[h] : t[me({ c: h, r: g })], d && d.l && (d.l.Tooltip = C[1]);
          break;
        case 28:
          {
            if (D.biff <= 5 && D.biff >= 2) break;
            d = a.dense ? (t[C[0].r] || [])[C[0].c] : t[me(C[0])];
            var Ve = re[C[2]];
            d || (a.dense ? (t[C[0].r] || (t[C[0].r] = []), d = t[C[0].r][C[0].c] = { t: "z" }) : d = t[me(C[0])] = { t: "z" }, i.e.r = Math.max(i.e.r, C[0].r), i.s.r = Math.min(i.s.r, C[0].r), i.e.c = Math.max(i.e.c, C[0].c), i.s.c = Math.min(i.s.c, C[0].c)), d.c || (d.c = []), p = { a: C[1], t: Ve.TxO.t }, d.c.push(p);
          }
          break;
        case 2173:
          vu(V[C.ixfe], C.ext);
          break;
        case 125:
          {
            if (!D.cellStyles) break;
            for (; C.e >= C.s; )
              fe[C.e--] = { width: C.w / 256, level: C.level || 0, hidden: !!(C.flags & 1) }, ve || (ve = !0, E0(C.w / 256)), ka(fe[C.e + 1]);
          }
          break;
        case 520:
          {
            var Ie = {};
            C.level != null && (q[C.r] = Ie, Ie.level = C.level), C.hidden && (q[C.r] = Ie, Ie.hidden = !0), C.hpt && (q[C.r] = Ie, Ie.hpt = C.hpt, Ie.hpx = ja(C.hpt));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          t["!margins"] || Wa(t["!margins"] = {}), t["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[Z]] = C;
          break;
        case 161:
          t["!margins"] || Wa(t["!margins"] = {}), t["!margins"].header = C.header, t["!margins"].footer = C.footer;
          break;
        case 574:
          C.RTL && (A.Views[0].RTL = !0);
          break;
        case 146:
          B = C;
          break;
        case 2198:
          X = C;
          break;
        case 140:
          U = C;
          break;
        case 442:
          f ? _.CodeName = C || _.name : A.WBProps.CodeName = C || "ThisWorkbook";
          break;
      }
    } else
      j || console.error("Missing Info for XLS Record 0x" + Z.toString(16)), e.l += J;
  }
  return r.SheetNames = Lr(s).sort(function(gr, ke) {
    return Number(gr) - Number(ke);
  }).map(function(gr) {
    return s[gr].name;
  }), a.bookSheets || (r.Sheets = n), !r.SheetNames.length && l["!ref"] ? (r.SheetNames.push("Sheet1"), r.Sheets && (r.Sheets.Sheet1 = l)) : r.Preamble = l, r.Sheets && L.forEach(function(gr, ke) {
    r.Sheets[r.SheetNames[ke]]["!autofilter"] = gr;
  }), r.Strings = o, r.SSF = Qe(Ee), D.enc && (r.Encryption = D.enc), X && (r.Themes = X), r.Metadata = {}, U !== void 0 && (r.Metadata.Country = U), M.names.length > 0 && (A.Names = M.names), r.Workbook = A, r;
}
var yn = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function jx(e, a, r) {
  var n = Fe.find(e, "/!DocumentSummaryInformation");
  if (n && n.size > 0) try {
    var t = un(n, uf, yn.DSI);
    for (var s in t) a[s] = t[s];
  } catch (f) {
    if (r.WTF) throw f;
  }
  var i = Fe.find(e, "/!SummaryInformation");
  if (i && i.size > 0) try {
    var c = un(i, hf, yn.SI);
    for (var o in c) a[o] == null && (a[o] = c[o]);
  } catch (f) {
    if (r.WTF) throw f;
  }
  a.HeadingPairs && a.TitlesOfParts && (ys(a.HeadingPairs, a.TitlesOfParts, a, r), delete a.HeadingPairs, delete a.TitlesOfParts);
}
function ui(e, a) {
  a || (a = {}), F0(a), Hn(), a.codepage && t0(a.codepage);
  var r, n;
  if (e.FullPaths) {
    if (Fe.find(e, "/encryption")) throw new Error("File is password-protected");
    r = Fe.find(e, "!CompObj"), n = Fe.find(e, "/Workbook") || Fe.find(e, "/Book");
  } else {
    switch (a.type) {
      case "base64":
        e = Or(Tr(e));
        break;
      case "binary":
        e = Or(e);
        break;
      case "buffer":
        break;
      case "array":
        Array.isArray(e) || (e = Array.prototype.slice.call(e));
        break;
    }
    Ze(e, 0), n = { content: e };
  }
  var t, s;
  if (r && Xx(r), a.bookProps && !a.bookSheets) t = {};
  else {
    var i = Ae ? "buffer" : "array";
    if (n && n.content) t = Yx(n.content, a);
    else if ((s = Fe.find(e, "PerfectOffice_MAIN")) && s.content) t = Ua.to_workbook(s.content, (a.type = i, a));
    else if ((s = Fe.find(e, "NativeContent_MAIN")) && s.content) t = Ua.to_workbook(s.content, (a.type = i, a));
    else throw (s = Fe.find(e, "MN0")) && s.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    a.bookVBA && e.FullPaths && Fe.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (t.vbaraw = bu(e));
  }
  var c = {};
  return e.FullPaths && jx(
    /*::((*/
    e,
    c,
    a
  ), t.Props = t.Custprops = c, a.bookFiles && (t.cfb = e), t;
}
var Ct = {
  /*::[*/
  0: {
    /* n:"BrtRowHdr", */
    f: D1
  },
  /*::[*/
  1: {
    /* n:"BrtCellBlank", */
    f: b1
  },
  /*::[*/
  2: {
    /* n:"BrtCellRk", */
    f: G1
  },
  /*::[*/
  3: {
    /* n:"BrtCellError", */
    f: B1
  },
  /*::[*/
  4: {
    /* n:"BrtCellBool", */
    f: L1
  },
  /*::[*/
  5: {
    /* n:"BrtCellReal", */
    f: V1
  },
  /*::[*/
  6: {
    /* n:"BrtCellSt", */
    f: $1
  },
  /*::[*/
  7: {
    /* n:"BrtCellIsst", */
    f: H1
  },
  /*::[*/
  8: {
    /* n:"BrtFmlaString", */
    f: q1
  },
  /*::[*/
  9: {
    /* n:"BrtFmlaNum", */
    f: J1
  },
  /*::[*/
  10: {
    /* n:"BrtFmlaBool", */
    f: Y1
  },
  /*::[*/
  11: {
    /* n:"BrtFmlaError", */
    f: j1
  },
  /*::[*/
  12: {
    /* n:"BrtShortBlank", */
    f: P1
  },
  /*::[*/
  13: {
    /* n:"BrtShortRk", */
    f: z1
  },
  /*::[*/
  14: {
    /* n:"BrtShortError", */
    f: U1
  },
  /*::[*/
  15: {
    /* n:"BrtShortBool", */
    f: M1
  },
  /*::[*/
  16: {
    /* n:"BrtShortReal", */
    f: ii
  },
  /*::[*/
  17: {
    /* n:"BrtShortSt", */
    f: K1
  },
  /*::[*/
  18: {
    /* n:"BrtShortIsst", */
    f: W1
  },
  /*::[*/
  19: {
    /* n:"BrtSSTItem", */
    f: d0
  },
  /*::[*/
  20: {
    /* n:"BrtPCDIMissing" */
  },
  /*::[*/
  21: {
    /* n:"BrtPCDINumber" */
  },
  /*::[*/
  22: {
    /* n:"BrtPCDIBoolean" */
  },
  /*::[*/
  23: {
    /* n:"BrtPCDIError" */
  },
  /*::[*/
  24: {
    /* n:"BrtPCDIString" */
  },
  /*::[*/
  25: {
    /* n:"BrtPCDIDatetime" */
  },
  /*::[*/
  26: {
    /* n:"BrtPCDIIndex" */
  },
  /*::[*/
  27: {
    /* n:"BrtPCDIAMissing" */
  },
  /*::[*/
  28: {
    /* n:"BrtPCDIANumber" */
  },
  /*::[*/
  29: {
    /* n:"BrtPCDIABoolean" */
  },
  /*::[*/
  30: {
    /* n:"BrtPCDIAError" */
  },
  /*::[*/
  31: {
    /* n:"BrtPCDIAString" */
  },
  /*::[*/
  32: {
    /* n:"BrtPCDIADatetime" */
  },
  /*::[*/
  33: {
    /* n:"BrtPCRRecord" */
  },
  /*::[*/
  34: {
    /* n:"BrtPCRRecordDt" */
  },
  /*::[*/
  35: {
    /* n:"BrtFRTBegin", */
    T: 1
  },
  /*::[*/
  36: {
    /* n:"BrtFRTEnd", */
    T: -1
  },
  /*::[*/
  37: {
    /* n:"BrtACBegin", */
    T: 1
  },
  /*::[*/
  38: {
    /* n:"BrtACEnd", */
    T: -1
  },
  /*::[*/
  39: {
    /* n:"BrtName", */
    f: Ax
  },
  /*::[*/
  40: {
    /* n:"BrtIndexRowBlock" */
  },
  /*::[*/
  42: {
    /* n:"BrtIndexBlock" */
  },
  /*::[*/
  43: {
    /* n:"BrtFont", */
    f: Yl
  },
  /*::[*/
  44: {
    /* n:"BrtFmt", */
    f: Kl
  },
  /*::[*/
  45: {
    /* n:"BrtFill", */
    f: jl
  },
  /*::[*/
  46: {
    /* n:"BrtBorder", */
    f: ql
  },
  /*::[*/
  47: {
    /* n:"BrtXF", */
    f: Jl
  },
  /*::[*/
  48: {
    /* n:"BrtStyle" */
  },
  /*::[*/
  49: {
    /* n:"BrtCellMeta", */
    f: Jc
  },
  /*::[*/
  50: {
    /* n:"BrtValueMeta" */
  },
  /*::[*/
  51: {
    /* n:"BrtMdb" */
    f: mu
  },
  /*::[*/
  52: {
    /* n:"BrtBeginFmd", */
    T: 1
  },
  /*::[*/
  53: {
    /* n:"BrtEndFmd", */
    T: -1
  },
  /*::[*/
  54: {
    /* n:"BrtBeginMdx", */
    T: 1
  },
  /*::[*/
  55: {
    /* n:"BrtEndMdx", */
    T: -1
  },
  /*::[*/
  56: {
    /* n:"BrtBeginMdxTuple", */
    T: 1
  },
  /*::[*/
  57: {
    /* n:"BrtEndMdxTuple", */
    T: -1
  },
  /*::[*/
  58: {
    /* n:"BrtMdxMbrIstr" */
  },
  /*::[*/
  59: {
    /* n:"BrtStr" */
  },
  /*::[*/
  60: {
    /* n:"BrtColInfo", */
    f: Hs
  },
  /*::[*/
  62: {
    /* n:"BrtCellRString", */
    f: X1
  },
  /*::[*/
  63: {
    /* n:"BrtCalcChainItem$", */
    f: wu
  },
  /*::[*/
  64: {
    /* n:"BrtDVal", */
    f: ix
  },
  /*::[*/
  65: {
    /* n:"BrtSxvcellNum" */
  },
  /*::[*/
  66: {
    /* n:"BrtSxvcellStr" */
  },
  /*::[*/
  67: {
    /* n:"BrtSxvcellBool" */
  },
  /*::[*/
  68: {
    /* n:"BrtSxvcellErr" */
  },
  /*::[*/
  69: {
    /* n:"BrtSxvcellDate" */
  },
  /*::[*/
  70: {
    /* n:"BrtSxvcellNil" */
  },
  /*::[*/
  128: {
    /* n:"BrtFileVersion" */
  },
  /*::[*/
  129: {
    /* n:"BrtBeginSheet", */
    T: 1
  },
  /*::[*/
  130: {
    /* n:"BrtEndSheet", */
    T: -1
  },
  /*::[*/
  131: {
    /* n:"BrtBeginBook", */
    T: 1,
    f: or,
    p: 0
  },
  /*::[*/
  132: {
    /* n:"BrtEndBook", */
    T: -1
  },
  /*::[*/
  133: {
    /* n:"BrtBeginWsViews", */
    T: 1
  },
  /*::[*/
  134: {
    /* n:"BrtEndWsViews", */
    T: -1
  },
  /*::[*/
  135: {
    /* n:"BrtBeginBookViews", */
    T: 1
  },
  /*::[*/
  136: {
    /* n:"BrtEndBookViews", */
    T: -1
  },
  /*::[*/
  137: {
    /* n:"BrtBeginWsView", */
    T: 1,
    f: sx
  },
  /*::[*/
  138: {
    /* n:"BrtEndWsView", */
    T: -1
  },
  /*::[*/
  139: {
    /* n:"BrtBeginCsViews", */
    T: 1
  },
  /*::[*/
  140: {
    /* n:"BrtEndCsViews", */
    T: -1
  },
  /*::[*/
  141: {
    /* n:"BrtBeginCsView", */
    T: 1
  },
  /*::[*/
  142: {
    /* n:"BrtEndCsView", */
    T: -1
  },
  /*::[*/
  143: {
    /* n:"BrtBeginBundleShs", */
    T: 1
  },
  /*::[*/
  144: {
    /* n:"BrtEndBundleShs", */
    T: -1
  },
  /*::[*/
  145: {
    /* n:"BrtBeginSheetData", */
    T: 1
  },
  /*::[*/
  146: {
    /* n:"BrtEndSheetData", */
    T: -1
  },
  /*::[*/
  147: {
    /* n:"BrtWsProp", */
    f: N1
  },
  /*::[*/
  148: {
    /* n:"BrtWsDim", */
    f: R1,
    p: 16
  },
  /*::[*/
  151: {
    /* n:"BrtPane", */
    f: ex
  },
  /*::[*/
  152: {
    /* n:"BrtSel" */
  },
  /*::[*/
  153: {
    /* n:"BrtWbProp", */
    f: kx
  },
  /*::[*/
  154: {
    /* n:"BrtWbFactoid" */
  },
  /*::[*/
  155: {
    /* n:"BrtFileRecover" */
  },
  /*::[*/
  156: {
    /* n:"BrtBundleSh", */
    f: Tx
  },
  /*::[*/
  157: {
    /* n:"BrtCalcProp" */
  },
  /*::[*/
  158: {
    /* n:"BrtBookView" */
  },
  /*::[*/
  159: {
    /* n:"BrtBeginSst", */
    T: 1,
    f: xl
  },
  /*::[*/
  160: {
    /* n:"BrtEndSst", */
    T: -1
  },
  /*::[*/
  161: {
    /* n:"BrtBeginAFilter", */
    T: 1,
    f: ha
  },
  /*::[*/
  162: {
    /* n:"BrtEndAFilter", */
    T: -1
  },
  /*::[*/
  163: {
    /* n:"BrtBeginFilterColumn", */
    T: 1
  },
  /*::[*/
  164: {
    /* n:"BrtEndFilterColumn", */
    T: -1
  },
  /*::[*/
  165: {
    /* n:"BrtBeginFilters", */
    T: 1
  },
  /*::[*/
  166: {
    /* n:"BrtEndFilters", */
    T: -1
  },
  /*::[*/
  167: {
    /* n:"BrtFilter" */
  },
  /*::[*/
  168: {
    /* n:"BrtColorFilter" */
  },
  /*::[*/
  169: {
    /* n:"BrtIconFilter" */
  },
  /*::[*/
  170: {
    /* n:"BrtTop10Filter" */
  },
  /*::[*/
  171: {
    /* n:"BrtDynamicFilter" */
  },
  /*::[*/
  172: {
    /* n:"BrtBeginCustomFilters", */
    T: 1
  },
  /*::[*/
  173: {
    /* n:"BrtEndCustomFilters", */
    T: -1
  },
  /*::[*/
  174: {
    /* n:"BrtCustomFilter" */
  },
  /*::[*/
  175: {
    /* n:"BrtAFilterDateGroupItem" */
  },
  /*::[*/
  176: {
    /* n:"BrtMergeCell", */
    f: Z1
  },
  /*::[*/
  177: {
    /* n:"BrtBeginMergeCells", */
    T: 1
  },
  /*::[*/
  178: {
    /* n:"BrtEndMergeCells", */
    T: -1
  },
  /*::[*/
  179: {
    /* n:"BrtBeginPivotCacheDef", */
    T: 1
  },
  /*::[*/
  180: {
    /* n:"BrtEndPivotCacheDef", */
    T: -1
  },
  /*::[*/
  181: {
    /* n:"BrtBeginPCDFields", */
    T: 1
  },
  /*::[*/
  182: {
    /* n:"BrtEndPCDFields", */
    T: -1
  },
  /*::[*/
  183: {
    /* n:"BrtBeginPCDField", */
    T: 1
  },
  /*::[*/
  184: {
    /* n:"BrtEndPCDField", */
    T: -1
  },
  /*::[*/
  185: {
    /* n:"BrtBeginPCDSource", */
    T: 1
  },
  /*::[*/
  186: {
    /* n:"BrtEndPCDSource", */
    T: -1
  },
  /*::[*/
  187: {
    /* n:"BrtBeginPCDSRange", */
    T: 1
  },
  /*::[*/
  188: {
    /* n:"BrtEndPCDSRange", */
    T: -1
  },
  /*::[*/
  189: {
    /* n:"BrtBeginPCDFAtbl", */
    T: 1
  },
  /*::[*/
  190: {
    /* n:"BrtEndPCDFAtbl", */
    T: -1
  },
  /*::[*/
  191: {
    /* n:"BrtBeginPCDIRun", */
    T: 1
  },
  /*::[*/
  192: {
    /* n:"BrtEndPCDIRun", */
    T: -1
  },
  /*::[*/
  193: {
    /* n:"BrtBeginPivotCacheRecords", */
    T: 1
  },
  /*::[*/
  194: {
    /* n:"BrtEndPivotCacheRecords", */
    T: -1
  },
  /*::[*/
  195: {
    /* n:"BrtBeginPCDHierarchies", */
    T: 1
  },
  /*::[*/
  196: {
    /* n:"BrtEndPCDHierarchies", */
    T: -1
  },
  /*::[*/
  197: {
    /* n:"BrtBeginPCDHierarchy", */
    T: 1
  },
  /*::[*/
  198: {
    /* n:"BrtEndPCDHierarchy", */
    T: -1
  },
  /*::[*/
  199: {
    /* n:"BrtBeginPCDHFieldsUsage", */
    T: 1
  },
  /*::[*/
  200: {
    /* n:"BrtEndPCDHFieldsUsage", */
    T: -1
  },
  /*::[*/
  201: {
    /* n:"BrtBeginExtConnection", */
    T: 1
  },
  /*::[*/
  202: {
    /* n:"BrtEndExtConnection", */
    T: -1
  },
  /*::[*/
  203: {
    /* n:"BrtBeginECDbProps", */
    T: 1
  },
  /*::[*/
  204: {
    /* n:"BrtEndECDbProps", */
    T: -1
  },
  /*::[*/
  205: {
    /* n:"BrtBeginECOlapProps", */
    T: 1
  },
  /*::[*/
  206: {
    /* n:"BrtEndECOlapProps", */
    T: -1
  },
  /*::[*/
  207: {
    /* n:"BrtBeginPCDSConsol", */
    T: 1
  },
  /*::[*/
  208: {
    /* n:"BrtEndPCDSConsol", */
    T: -1
  },
  /*::[*/
  209: {
    /* n:"BrtBeginPCDSCPages", */
    T: 1
  },
  /*::[*/
  210: {
    /* n:"BrtEndPCDSCPages", */
    T: -1
  },
  /*::[*/
  211: {
    /* n:"BrtBeginPCDSCPage", */
    T: 1
  },
  /*::[*/
  212: {
    /* n:"BrtEndPCDSCPage", */
    T: -1
  },
  /*::[*/
  213: {
    /* n:"BrtBeginPCDSCPItem", */
    T: 1
  },
  /*::[*/
  214: {
    /* n:"BrtEndPCDSCPItem", */
    T: -1
  },
  /*::[*/
  215: {
    /* n:"BrtBeginPCDSCSets", */
    T: 1
  },
  /*::[*/
  216: {
    /* n:"BrtEndPCDSCSets", */
    T: -1
  },
  /*::[*/
  217: {
    /* n:"BrtBeginPCDSCSet", */
    T: 1
  },
  /*::[*/
  218: {
    /* n:"BrtEndPCDSCSet", */
    T: -1
  },
  /*::[*/
  219: {
    /* n:"BrtBeginPCDFGroup", */
    T: 1
  },
  /*::[*/
  220: {
    /* n:"BrtEndPCDFGroup", */
    T: -1
  },
  /*::[*/
  221: {
    /* n:"BrtBeginPCDFGItems", */
    T: 1
  },
  /*::[*/
  222: {
    /* n:"BrtEndPCDFGItems", */
    T: -1
  },
  /*::[*/
  223: {
    /* n:"BrtBeginPCDFGRange", */
    T: 1
  },
  /*::[*/
  224: {
    /* n:"BrtEndPCDFGRange", */
    T: -1
  },
  /*::[*/
  225: {
    /* n:"BrtBeginPCDFGDiscrete", */
    T: 1
  },
  /*::[*/
  226: {
    /* n:"BrtEndPCDFGDiscrete", */
    T: -1
  },
  /*::[*/
  227: {
    /* n:"BrtBeginPCDSDTupleCache", */
    T: 1
  },
  /*::[*/
  228: {
    /* n:"BrtEndPCDSDTupleCache", */
    T: -1
  },
  /*::[*/
  229: {
    /* n:"BrtBeginPCDSDTCEntries", */
    T: 1
  },
  /*::[*/
  230: {
    /* n:"BrtEndPCDSDTCEntries", */
    T: -1
  },
  /*::[*/
  231: {
    /* n:"BrtBeginPCDSDTCEMembers", */
    T: 1
  },
  /*::[*/
  232: {
    /* n:"BrtEndPCDSDTCEMembers", */
    T: -1
  },
  /*::[*/
  233: {
    /* n:"BrtBeginPCDSDTCEMember", */
    T: 1
  },
  /*::[*/
  234: {
    /* n:"BrtEndPCDSDTCEMember", */
    T: -1
  },
  /*::[*/
  235: {
    /* n:"BrtBeginPCDSDTCQueries", */
    T: 1
  },
  /*::[*/
  236: {
    /* n:"BrtEndPCDSDTCQueries", */
    T: -1
  },
  /*::[*/
  237: {
    /* n:"BrtBeginPCDSDTCQuery", */
    T: 1
  },
  /*::[*/
  238: {
    /* n:"BrtEndPCDSDTCQuery", */
    T: -1
  },
  /*::[*/
  239: {
    /* n:"BrtBeginPCDSDTCSets", */
    T: 1
  },
  /*::[*/
  240: {
    /* n:"BrtEndPCDSDTCSets", */
    T: -1
  },
  /*::[*/
  241: {
    /* n:"BrtBeginPCDSDTCSet", */
    T: 1
  },
  /*::[*/
  242: {
    /* n:"BrtEndPCDSDTCSet", */
    T: -1
  },
  /*::[*/
  243: {
    /* n:"BrtBeginPCDCalcItems", */
    T: 1
  },
  /*::[*/
  244: {
    /* n:"BrtEndPCDCalcItems", */
    T: -1
  },
  /*::[*/
  245: {
    /* n:"BrtBeginPCDCalcItem", */
    T: 1
  },
  /*::[*/
  246: {
    /* n:"BrtEndPCDCalcItem", */
    T: -1
  },
  /*::[*/
  247: {
    /* n:"BrtBeginPRule", */
    T: 1
  },
  /*::[*/
  248: {
    /* n:"BrtEndPRule", */
    T: -1
  },
  /*::[*/
  249: {
    /* n:"BrtBeginPRFilters", */
    T: 1
  },
  /*::[*/
  250: {
    /* n:"BrtEndPRFilters", */
    T: -1
  },
  /*::[*/
  251: {
    /* n:"BrtBeginPRFilter", */
    T: 1
  },
  /*::[*/
  252: {
    /* n:"BrtEndPRFilter", */
    T: -1
  },
  /*::[*/
  253: {
    /* n:"BrtBeginPNames", */
    T: 1
  },
  /*::[*/
  254: {
    /* n:"BrtEndPNames", */
    T: -1
  },
  /*::[*/
  255: {
    /* n:"BrtBeginPName", */
    T: 1
  },
  /*::[*/
  256: {
    /* n:"BrtEndPName", */
    T: -1
  },
  /*::[*/
  257: {
    /* n:"BrtBeginPNPairs", */
    T: 1
  },
  /*::[*/
  258: {
    /* n:"BrtEndPNPairs", */
    T: -1
  },
  /*::[*/
  259: {
    /* n:"BrtBeginPNPair", */
    T: 1
  },
  /*::[*/
  260: {
    /* n:"BrtEndPNPair", */
    T: -1
  },
  /*::[*/
  261: {
    /* n:"BrtBeginECWebProps", */
    T: 1
  },
  /*::[*/
  262: {
    /* n:"BrtEndECWebProps", */
    T: -1
  },
  /*::[*/
  263: {
    /* n:"BrtBeginEcWpTables", */
    T: 1
  },
  /*::[*/
  264: {
    /* n:"BrtEndECWPTables", */
    T: -1
  },
  /*::[*/
  265: {
    /* n:"BrtBeginECParams", */
    T: 1
  },
  /*::[*/
  266: {
    /* n:"BrtEndECParams", */
    T: -1
  },
  /*::[*/
  267: {
    /* n:"BrtBeginECParam", */
    T: 1
  },
  /*::[*/
  268: {
    /* n:"BrtEndECParam", */
    T: -1
  },
  /*::[*/
  269: {
    /* n:"BrtBeginPCDKPIs", */
    T: 1
  },
  /*::[*/
  270: {
    /* n:"BrtEndPCDKPIs", */
    T: -1
  },
  /*::[*/
  271: {
    /* n:"BrtBeginPCDKPI", */
    T: 1
  },
  /*::[*/
  272: {
    /* n:"BrtEndPCDKPI", */
    T: -1
  },
  /*::[*/
  273: {
    /* n:"BrtBeginDims", */
    T: 1
  },
  /*::[*/
  274: {
    /* n:"BrtEndDims", */
    T: -1
  },
  /*::[*/
  275: {
    /* n:"BrtBeginDim", */
    T: 1
  },
  /*::[*/
  276: {
    /* n:"BrtEndDim", */
    T: -1
  },
  /*::[*/
  277: {
    /* n:"BrtIndexPartEnd" */
  },
  /*::[*/
  278: {
    /* n:"BrtBeginStyleSheet", */
    T: 1
  },
  /*::[*/
  279: {
    /* n:"BrtEndStyleSheet", */
    T: -1
  },
  /*::[*/
  280: {
    /* n:"BrtBeginSXView", */
    T: 1
  },
  /*::[*/
  281: {
    /* n:"BrtEndSXVI", */
    T: -1
  },
  /*::[*/
  282: {
    /* n:"BrtBeginSXVI", */
    T: 1
  },
  /*::[*/
  283: {
    /* n:"BrtBeginSXVIs", */
    T: 1
  },
  /*::[*/
  284: {
    /* n:"BrtEndSXVIs", */
    T: -1
  },
  /*::[*/
  285: {
    /* n:"BrtBeginSXVD", */
    T: 1
  },
  /*::[*/
  286: {
    /* n:"BrtEndSXVD", */
    T: -1
  },
  /*::[*/
  287: {
    /* n:"BrtBeginSXVDs", */
    T: 1
  },
  /*::[*/
  288: {
    /* n:"BrtEndSXVDs", */
    T: -1
  },
  /*::[*/
  289: {
    /* n:"BrtBeginSXPI", */
    T: 1
  },
  /*::[*/
  290: {
    /* n:"BrtEndSXPI", */
    T: -1
  },
  /*::[*/
  291: {
    /* n:"BrtBeginSXPIs", */
    T: 1
  },
  /*::[*/
  292: {
    /* n:"BrtEndSXPIs", */
    T: -1
  },
  /*::[*/
  293: {
    /* n:"BrtBeginSXDI", */
    T: 1
  },
  /*::[*/
  294: {
    /* n:"BrtEndSXDI", */
    T: -1
  },
  /*::[*/
  295: {
    /* n:"BrtBeginSXDIs", */
    T: 1
  },
  /*::[*/
  296: {
    /* n:"BrtEndSXDIs", */
    T: -1
  },
  /*::[*/
  297: {
    /* n:"BrtBeginSXLI", */
    T: 1
  },
  /*::[*/
  298: {
    /* n:"BrtEndSXLI", */
    T: -1
  },
  /*::[*/
  299: {
    /* n:"BrtBeginSXLIRws", */
    T: 1
  },
  /*::[*/
  300: {
    /* n:"BrtEndSXLIRws", */
    T: -1
  },
  /*::[*/
  301: {
    /* n:"BrtBeginSXLICols", */
    T: 1
  },
  /*::[*/
  302: {
    /* n:"BrtEndSXLICols", */
    T: -1
  },
  /*::[*/
  303: {
    /* n:"BrtBeginSXFormat", */
    T: 1
  },
  /*::[*/
  304: {
    /* n:"BrtEndSXFormat", */
    T: -1
  },
  /*::[*/
  305: {
    /* n:"BrtBeginSXFormats", */
    T: 1
  },
  /*::[*/
  306: {
    /* n:"BrtEndSxFormats", */
    T: -1
  },
  /*::[*/
  307: {
    /* n:"BrtBeginSxSelect", */
    T: 1
  },
  /*::[*/
  308: {
    /* n:"BrtEndSxSelect", */
    T: -1
  },
  /*::[*/
  309: {
    /* n:"BrtBeginISXVDRws", */
    T: 1
  },
  /*::[*/
  310: {
    /* n:"BrtEndISXVDRws", */
    T: -1
  },
  /*::[*/
  311: {
    /* n:"BrtBeginISXVDCols", */
    T: 1
  },
  /*::[*/
  312: {
    /* n:"BrtEndISXVDCols", */
    T: -1
  },
  /*::[*/
  313: {
    /* n:"BrtEndSXLocation", */
    T: -1
  },
  /*::[*/
  314: {
    /* n:"BrtBeginSXLocation", */
    T: 1
  },
  /*::[*/
  315: {
    /* n:"BrtEndSXView", */
    T: -1
  },
  /*::[*/
  316: {
    /* n:"BrtBeginSXTHs", */
    T: 1
  },
  /*::[*/
  317: {
    /* n:"BrtEndSXTHs", */
    T: -1
  },
  /*::[*/
  318: {
    /* n:"BrtBeginSXTH", */
    T: 1
  },
  /*::[*/
  319: {
    /* n:"BrtEndSXTH", */
    T: -1
  },
  /*::[*/
  320: {
    /* n:"BrtBeginISXTHRws", */
    T: 1
  },
  /*::[*/
  321: {
    /* n:"BrtEndISXTHRws", */
    T: -1
  },
  /*::[*/
  322: {
    /* n:"BrtBeginISXTHCols", */
    T: 1
  },
  /*::[*/
  323: {
    /* n:"BrtEndISXTHCols", */
    T: -1
  },
  /*::[*/
  324: {
    /* n:"BrtBeginSXTDMPS", */
    T: 1
  },
  /*::[*/
  325: {
    /* n:"BrtEndSXTDMPs", */
    T: -1
  },
  /*::[*/
  326: {
    /* n:"BrtBeginSXTDMP", */
    T: 1
  },
  /*::[*/
  327: {
    /* n:"BrtEndSXTDMP", */
    T: -1
  },
  /*::[*/
  328: {
    /* n:"BrtBeginSXTHItems", */
    T: 1
  },
  /*::[*/
  329: {
    /* n:"BrtEndSXTHItems", */
    T: -1
  },
  /*::[*/
  330: {
    /* n:"BrtBeginSXTHItem", */
    T: 1
  },
  /*::[*/
  331: {
    /* n:"BrtEndSXTHItem", */
    T: -1
  },
  /*::[*/
  332: {
    /* n:"BrtBeginMetadata", */
    T: 1
  },
  /*::[*/
  333: {
    /* n:"BrtEndMetadata", */
    T: -1
  },
  /*::[*/
  334: {
    /* n:"BrtBeginEsmdtinfo", */
    T: 1
  },
  /*::[*/
  335: {
    /* n:"BrtMdtinfo", */
    f: gu
  },
  /*::[*/
  336: {
    /* n:"BrtEndEsmdtinfo", */
    T: -1
  },
  /*::[*/
  337: {
    /* n:"BrtBeginEsmdb", */
    f: _u,
    T: 1
  },
  /*::[*/
  338: {
    /* n:"BrtEndEsmdb", */
    T: -1
  },
  /*::[*/
  339: {
    /* n:"BrtBeginEsfmd", */
    T: 1
  },
  /*::[*/
  340: {
    /* n:"BrtEndEsfmd", */
    T: -1
  },
  /*::[*/
  341: {
    /* n:"BrtBeginSingleCells", */
    T: 1
  },
  /*::[*/
  342: {
    /* n:"BrtEndSingleCells", */
    T: -1
  },
  /*::[*/
  343: {
    /* n:"BrtBeginList", */
    T: 1
  },
  /*::[*/
  344: {
    /* n:"BrtEndList", */
    T: -1
  },
  /*::[*/
  345: {
    /* n:"BrtBeginListCols", */
    T: 1
  },
  /*::[*/
  346: {
    /* n:"BrtEndListCols", */
    T: -1
  },
  /*::[*/
  347: {
    /* n:"BrtBeginListCol", */
    T: 1
  },
  /*::[*/
  348: {
    /* n:"BrtEndListCol", */
    T: -1
  },
  /*::[*/
  349: {
    /* n:"BrtBeginListXmlCPr", */
    T: 1
  },
  /*::[*/
  350: {
    /* n:"BrtEndListXmlCPr", */
    T: -1
  },
  /*::[*/
  351: {
    /* n:"BrtListCCFmla" */
  },
  /*::[*/
  352: {
    /* n:"BrtListTrFmla" */
  },
  /*::[*/
  353: {
    /* n:"BrtBeginExternals", */
    T: 1
  },
  /*::[*/
  354: {
    /* n:"BrtEndExternals", */
    T: -1
  },
  /*::[*/
  355: {
    /* n:"BrtSupBookSrc", */
    f: $t
  },
  /*::[*/
  357: {
    /* n:"BrtSupSelf" */
  },
  /*::[*/
  358: {
    /* n:"BrtSupSame" */
  },
  /*::[*/
  359: {
    /* n:"BrtSupTabs" */
  },
  /*::[*/
  360: {
    /* n:"BrtBeginSupBook", */
    T: 1
  },
  /*::[*/
  361: {
    /* n:"BrtPlaceholderName" */
  },
  /*::[*/
  362: {
    /* n:"BrtExternSheet", */
    f: Us
  },
  /*::[*/
  363: {
    /* n:"BrtExternTableStart" */
  },
  /*::[*/
  364: {
    /* n:"BrtExternTableEnd" */
  },
  /*::[*/
  366: {
    /* n:"BrtExternRowHdr" */
  },
  /*::[*/
  367: {
    /* n:"BrtExternCellBlank" */
  },
  /*::[*/
  368: {
    /* n:"BrtExternCellReal" */
  },
  /*::[*/
  369: {
    /* n:"BrtExternCellBool" */
  },
  /*::[*/
  370: {
    /* n:"BrtExternCellError" */
  },
  /*::[*/
  371: {
    /* n:"BrtExternCellString" */
  },
  /*::[*/
  372: {
    /* n:"BrtBeginEsmdx", */
    T: 1
  },
  /*::[*/
  373: {
    /* n:"BrtEndEsmdx", */
    T: -1
  },
  /*::[*/
  374: {
    /* n:"BrtBeginMdxSet", */
    T: 1
  },
  /*::[*/
  375: {
    /* n:"BrtEndMdxSet", */
    T: -1
  },
  /*::[*/
  376: {
    /* n:"BrtBeginMdxMbrProp", */
    T: 1
  },
  /*::[*/
  377: {
    /* n:"BrtEndMdxMbrProp", */
    T: -1
  },
  /*::[*/
  378: {
    /* n:"BrtBeginMdxKPI", */
    T: 1
  },
  /*::[*/
  379: {
    /* n:"BrtEndMdxKPI", */
    T: -1
  },
  /*::[*/
  380: {
    /* n:"BrtBeginEsstr", */
    T: 1
  },
  /*::[*/
  381: {
    /* n:"BrtEndEsstr", */
    T: -1
  },
  /*::[*/
  382: {
    /* n:"BrtBeginPRFItem", */
    T: 1
  },
  /*::[*/
  383: {
    /* n:"BrtEndPRFItem", */
    T: -1
  },
  /*::[*/
  384: {
    /* n:"BrtBeginPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  385: {
    /* n:"BrtEndPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  386: {
    /* n:"BrtBeginPivotCacheID", */
    T: 1
  },
  /*::[*/
  387: {
    /* n:"BrtEndPivotCacheID", */
    T: -1
  },
  /*::[*/
  388: {
    /* n:"BrtBeginISXVIs", */
    T: 1
  },
  /*::[*/
  389: {
    /* n:"BrtEndISXVIs", */
    T: -1
  },
  /*::[*/
  390: {
    /* n:"BrtBeginColInfos", */
    T: 1
  },
  /*::[*/
  391: {
    /* n:"BrtEndColInfos", */
    T: -1
  },
  /*::[*/
  392: {
    /* n:"BrtBeginRwBrk", */
    T: 1
  },
  /*::[*/
  393: {
    /* n:"BrtEndRwBrk", */
    T: -1
  },
  /*::[*/
  394: {
    /* n:"BrtBeginColBrk", */
    T: 1
  },
  /*::[*/
  395: {
    /* n:"BrtEndColBrk", */
    T: -1
  },
  /*::[*/
  396: {
    /* n:"BrtBrk" */
  },
  /*::[*/
  397: {
    /* n:"BrtUserBookView" */
  },
  /*::[*/
  398: {
    /* n:"BrtInfo" */
  },
  /*::[*/
  399: {
    /* n:"BrtCUsr" */
  },
  /*::[*/
  400: {
    /* n:"BrtUsr" */
  },
  /*::[*/
  401: {
    /* n:"BrtBeginUsers", */
    T: 1
  },
  /*::[*/
  403: {
    /* n:"BrtEOF" */
  },
  /*::[*/
  404: {
    /* n:"BrtUCR" */
  },
  /*::[*/
  405: {
    /* n:"BrtRRInsDel" */
  },
  /*::[*/
  406: {
    /* n:"BrtRREndInsDel" */
  },
  /*::[*/
  407: {
    /* n:"BrtRRMove" */
  },
  /*::[*/
  408: {
    /* n:"BrtRREndMove" */
  },
  /*::[*/
  409: {
    /* n:"BrtRRChgCell" */
  },
  /*::[*/
  410: {
    /* n:"BrtRREndChgCell" */
  },
  /*::[*/
  411: {
    /* n:"BrtRRHeader" */
  },
  /*::[*/
  412: {
    /* n:"BrtRRUserView" */
  },
  /*::[*/
  413: {
    /* n:"BrtRRRenSheet" */
  },
  /*::[*/
  414: {
    /* n:"BrtRRInsertSh" */
  },
  /*::[*/
  415: {
    /* n:"BrtRRDefName" */
  },
  /*::[*/
  416: {
    /* n:"BrtRRNote" */
  },
  /*::[*/
  417: {
    /* n:"BrtRRConflict" */
  },
  /*::[*/
  418: {
    /* n:"BrtRRTQSIF" */
  },
  /*::[*/
  419: {
    /* n:"BrtRRFormat" */
  },
  /*::[*/
  420: {
    /* n:"BrtRREndFormat" */
  },
  /*::[*/
  421: {
    /* n:"BrtRRAutoFmt" */
  },
  /*::[*/
  422: {
    /* n:"BrtBeginUserShViews", */
    T: 1
  },
  /*::[*/
  423: {
    /* n:"BrtBeginUserShView", */
    T: 1
  },
  /*::[*/
  424: {
    /* n:"BrtEndUserShView", */
    T: -1
  },
  /*::[*/
  425: {
    /* n:"BrtEndUserShViews", */
    T: -1
  },
  /*::[*/
  426: {
    /* n:"BrtArrFmla", */
    f: rx
  },
  /*::[*/
  427: {
    /* n:"BrtShrFmla", */
    f: ax
  },
  /*::[*/
  428: {
    /* n:"BrtTable" */
  },
  /*::[*/
  429: {
    /* n:"BrtBeginExtConnections", */
    T: 1
  },
  /*::[*/
  430: {
    /* n:"BrtEndExtConnections", */
    T: -1
  },
  /*::[*/
  431: {
    /* n:"BrtBeginPCDCalcMems", */
    T: 1
  },
  /*::[*/
  432: {
    /* n:"BrtEndPCDCalcMems", */
    T: -1
  },
  /*::[*/
  433: {
    /* n:"BrtBeginPCDCalcMem", */
    T: 1
  },
  /*::[*/
  434: {
    /* n:"BrtEndPCDCalcMem", */
    T: -1
  },
  /*::[*/
  435: {
    /* n:"BrtBeginPCDHGLevels", */
    T: 1
  },
  /*::[*/
  436: {
    /* n:"BrtEndPCDHGLevels", */
    T: -1
  },
  /*::[*/
  437: {
    /* n:"BrtBeginPCDHGLevel", */
    T: 1
  },
  /*::[*/
  438: {
    /* n:"BrtEndPCDHGLevel", */
    T: -1
  },
  /*::[*/
  439: {
    /* n:"BrtBeginPCDHGLGroups", */
    T: 1
  },
  /*::[*/
  440: {
    /* n:"BrtEndPCDHGLGroups", */
    T: -1
  },
  /*::[*/
  441: {
    /* n:"BrtBeginPCDHGLGroup", */
    T: 1
  },
  /*::[*/
  442: {
    /* n:"BrtEndPCDHGLGroup", */
    T: -1
  },
  /*::[*/
  443: {
    /* n:"BrtBeginPCDHGLGMembers", */
    T: 1
  },
  /*::[*/
  444: {
    /* n:"BrtEndPCDHGLGMembers", */
    T: -1
  },
  /*::[*/
  445: {
    /* n:"BrtBeginPCDHGLGMember", */
    T: 1
  },
  /*::[*/
  446: {
    /* n:"BrtEndPCDHGLGMember", */
    T: -1
  },
  /*::[*/
  447: {
    /* n:"BrtBeginQSI", */
    T: 1
  },
  /*::[*/
  448: {
    /* n:"BrtEndQSI", */
    T: -1
  },
  /*::[*/
  449: {
    /* n:"BrtBeginQSIR", */
    T: 1
  },
  /*::[*/
  450: {
    /* n:"BrtEndQSIR", */
    T: -1
  },
  /*::[*/
  451: {
    /* n:"BrtBeginDeletedNames", */
    T: 1
  },
  /*::[*/
  452: {
    /* n:"BrtEndDeletedNames", */
    T: -1
  },
  /*::[*/
  453: {
    /* n:"BrtBeginDeletedName", */
    T: 1
  },
  /*::[*/
  454: {
    /* n:"BrtEndDeletedName", */
    T: -1
  },
  /*::[*/
  455: {
    /* n:"BrtBeginQSIFs", */
    T: 1
  },
  /*::[*/
  456: {
    /* n:"BrtEndQSIFs", */
    T: -1
  },
  /*::[*/
  457: {
    /* n:"BrtBeginQSIF", */
    T: 1
  },
  /*::[*/
  458: {
    /* n:"BrtEndQSIF", */
    T: -1
  },
  /*::[*/
  459: {
    /* n:"BrtBeginAutoSortScope", */
    T: 1
  },
  /*::[*/
  460: {
    /* n:"BrtEndAutoSortScope", */
    T: -1
  },
  /*::[*/
  461: {
    /* n:"BrtBeginConditionalFormatting", */
    T: 1
  },
  /*::[*/
  462: {
    /* n:"BrtEndConditionalFormatting", */
    T: -1
  },
  /*::[*/
  463: {
    /* n:"BrtBeginCFRule", */
    T: 1
  },
  /*::[*/
  464: {
    /* n:"BrtEndCFRule", */
    T: -1
  },
  /*::[*/
  465: {
    /* n:"BrtBeginIconSet", */
    T: 1
  },
  /*::[*/
  466: {
    /* n:"BrtEndIconSet", */
    T: -1
  },
  /*::[*/
  467: {
    /* n:"BrtBeginDatabar", */
    T: 1
  },
  /*::[*/
  468: {
    /* n:"BrtEndDatabar", */
    T: -1
  },
  /*::[*/
  469: {
    /* n:"BrtBeginColorScale", */
    T: 1
  },
  /*::[*/
  470: {
    /* n:"BrtEndColorScale", */
    T: -1
  },
  /*::[*/
  471: {
    /* n:"BrtCFVO" */
  },
  /*::[*/
  472: {
    /* n:"BrtExternValueMeta" */
  },
  /*::[*/
  473: {
    /* n:"BrtBeginColorPalette", */
    T: 1
  },
  /*::[*/
  474: {
    /* n:"BrtEndColorPalette", */
    T: -1
  },
  /*::[*/
  475: {
    /* n:"BrtIndexedColor" */
  },
  /*::[*/
  476: {
    /* n:"BrtMargins", */
    f: nx
  },
  /*::[*/
  477: {
    /* n:"BrtPrintOptions" */
  },
  /*::[*/
  478: {
    /* n:"BrtPageSetup" */
  },
  /*::[*/
  479: {
    /* n:"BrtBeginHeaderFooter", */
    T: 1
  },
  /*::[*/
  480: {
    /* n:"BrtEndHeaderFooter", */
    T: -1
  },
  /*::[*/
  481: {
    /* n:"BrtBeginSXCrtFormat", */
    T: 1
  },
  /*::[*/
  482: {
    /* n:"BrtEndSXCrtFormat", */
    T: -1
  },
  /*::[*/
  483: {
    /* n:"BrtBeginSXCrtFormats", */
    T: 1
  },
  /*::[*/
  484: {
    /* n:"BrtEndSXCrtFormats", */
    T: -1
  },
  /*::[*/
  485: {
    /* n:"BrtWsFmtInfo", */
    f: I1
  },
  /*::[*/
  486: {
    /* n:"BrtBeginMgs", */
    T: 1
  },
  /*::[*/
  487: {
    /* n:"BrtEndMGs", */
    T: -1
  },
  /*::[*/
  488: {
    /* n:"BrtBeginMGMaps", */
    T: 1
  },
  /*::[*/
  489: {
    /* n:"BrtEndMGMaps", */
    T: -1
  },
  /*::[*/
  490: {
    /* n:"BrtBeginMG", */
    T: 1
  },
  /*::[*/
  491: {
    /* n:"BrtEndMG", */
    T: -1
  },
  /*::[*/
  492: {
    /* n:"BrtBeginMap", */
    T: 1
  },
  /*::[*/
  493: {
    /* n:"BrtEndMap", */
    T: -1
  },
  /*::[*/
  494: {
    /* n:"BrtHLink", */
    f: Q1
  },
  /*::[*/
  495: {
    /* n:"BrtBeginDCon", */
    T: 1
  },
  /*::[*/
  496: {
    /* n:"BrtEndDCon", */
    T: -1
  },
  /*::[*/
  497: {
    /* n:"BrtBeginDRefs", */
    T: 1
  },
  /*::[*/
  498: {
    /* n:"BrtEndDRefs", */
    T: -1
  },
  /*::[*/
  499: {
    /* n:"BrtDRef" */
  },
  /*::[*/
  500: {
    /* n:"BrtBeginScenMan", */
    T: 1
  },
  /*::[*/
  501: {
    /* n:"BrtEndScenMan", */
    T: -1
  },
  /*::[*/
  502: {
    /* n:"BrtBeginSct", */
    T: 1
  },
  /*::[*/
  503: {
    /* n:"BrtEndSct", */
    T: -1
  },
  /*::[*/
  504: {
    /* n:"BrtSlc" */
  },
  /*::[*/
  505: {
    /* n:"BrtBeginDXFs", */
    T: 1
  },
  /*::[*/
  506: {
    /* n:"BrtEndDXFs", */
    T: -1
  },
  /*::[*/
  507: {
    /* n:"BrtDXF" */
  },
  /*::[*/
  508: {
    /* n:"BrtBeginTableStyles", */
    T: 1
  },
  /*::[*/
  509: {
    /* n:"BrtEndTableStyles", */
    T: -1
  },
  /*::[*/
  510: {
    /* n:"BrtBeginTableStyle", */
    T: 1
  },
  /*::[*/
  511: {
    /* n:"BrtEndTableStyle", */
    T: -1
  },
  /*::[*/
  512: {
    /* n:"BrtTableStyleElement" */
  },
  /*::[*/
  513: {
    /* n:"BrtTableStyleClient" */
  },
  /*::[*/
  514: {
    /* n:"BrtBeginVolDeps", */
    T: 1
  },
  /*::[*/
  515: {
    /* n:"BrtEndVolDeps", */
    T: -1
  },
  /*::[*/
  516: {
    /* n:"BrtBeginVolType", */
    T: 1
  },
  /*::[*/
  517: {
    /* n:"BrtEndVolType", */
    T: -1
  },
  /*::[*/
  518: {
    /* n:"BrtBeginVolMain", */
    T: 1
  },
  /*::[*/
  519: {
    /* n:"BrtEndVolMain", */
    T: -1
  },
  /*::[*/
  520: {
    /* n:"BrtBeginVolTopic", */
    T: 1
  },
  /*::[*/
  521: {
    /* n:"BrtEndVolTopic", */
    T: -1
  },
  /*::[*/
  522: {
    /* n:"BrtVolSubtopic" */
  },
  /*::[*/
  523: {
    /* n:"BrtVolRef" */
  },
  /*::[*/
  524: {
    /* n:"BrtVolNum" */
  },
  /*::[*/
  525: {
    /* n:"BrtVolErr" */
  },
  /*::[*/
  526: {
    /* n:"BrtVolStr" */
  },
  /*::[*/
  527: {
    /* n:"BrtVolBool" */
  },
  /*::[*/
  528: {
    /* n:"BrtBeginCalcChain$", */
    T: 1
  },
  /*::[*/
  529: {
    /* n:"BrtEndCalcChain$", */
    T: -1
  },
  /*::[*/
  530: {
    /* n:"BrtBeginSortState", */
    T: 1
  },
  /*::[*/
  531: {
    /* n:"BrtEndSortState", */
    T: -1
  },
  /*::[*/
  532: {
    /* n:"BrtBeginSortCond", */
    T: 1
  },
  /*::[*/
  533: {
    /* n:"BrtEndSortCond", */
    T: -1
  },
  /*::[*/
  534: {
    /* n:"BrtBookProtection" */
  },
  /*::[*/
  535: {
    /* n:"BrtSheetProtection" */
  },
  /*::[*/
  536: {
    /* n:"BrtRangeProtection" */
  },
  /*::[*/
  537: {
    /* n:"BrtPhoneticInfo" */
  },
  /*::[*/
  538: {
    /* n:"BrtBeginECTxtWiz", */
    T: 1
  },
  /*::[*/
  539: {
    /* n:"BrtEndECTxtWiz", */
    T: -1
  },
  /*::[*/
  540: {
    /* n:"BrtBeginECTWFldInfoLst", */
    T: 1
  },
  /*::[*/
  541: {
    /* n:"BrtEndECTWFldInfoLst", */
    T: -1
  },
  /*::[*/
  542: {
    /* n:"BrtBeginECTwFldInfo", */
    T: 1
  },
  /*::[*/
  548: {
    /* n:"BrtFileSharing" */
  },
  /*::[*/
  549: {
    /* n:"BrtOleSize" */
  },
  /*::[*/
  550: {
    /* n:"BrtDrawing", */
    f: $t
  },
  /*::[*/
  551: {
    /* n:"BrtLegacyDrawing" */
  },
  /*::[*/
  552: {
    /* n:"BrtLegacyDrawingHF" */
  },
  /*::[*/
  553: {
    /* n:"BrtWebOpt" */
  },
  /*::[*/
  554: {
    /* n:"BrtBeginWebPubItems", */
    T: 1
  },
  /*::[*/
  555: {
    /* n:"BrtEndWebPubItems", */
    T: -1
  },
  /*::[*/
  556: {
    /* n:"BrtBeginWebPubItem", */
    T: 1
  },
  /*::[*/
  557: {
    /* n:"BrtEndWebPubItem", */
    T: -1
  },
  /*::[*/
  558: {
    /* n:"BrtBeginSXCondFmt", */
    T: 1
  },
  /*::[*/
  559: {
    /* n:"BrtEndSXCondFmt", */
    T: -1
  },
  /*::[*/
  560: {
    /* n:"BrtBeginSXCondFmts", */
    T: 1
  },
  /*::[*/
  561: {
    /* n:"BrtEndSXCondFmts", */
    T: -1
  },
  /*::[*/
  562: {
    /* n:"BrtBkHim" */
  },
  /*::[*/
  564: {
    /* n:"BrtColor" */
  },
  /*::[*/
  565: {
    /* n:"BrtBeginIndexedColors", */
    T: 1
  },
  /*::[*/
  566: {
    /* n:"BrtEndIndexedColors", */
    T: -1
  },
  /*::[*/
  569: {
    /* n:"BrtBeginMRUColors", */
    T: 1
  },
  /*::[*/
  570: {
    /* n:"BrtEndMRUColors", */
    T: -1
  },
  /*::[*/
  572: {
    /* n:"BrtMRUColor" */
  },
  /*::[*/
  573: {
    /* n:"BrtBeginDVals", */
    T: 1
  },
  /*::[*/
  574: {
    /* n:"BrtEndDVals", */
    T: -1
  },
  /*::[*/
  577: {
    /* n:"BrtSupNameStart" */
  },
  /*::[*/
  578: {
    /* n:"BrtSupNameValueStart" */
  },
  /*::[*/
  579: {
    /* n:"BrtSupNameValueEnd" */
  },
  /*::[*/
  580: {
    /* n:"BrtSupNameNum" */
  },
  /*::[*/
  581: {
    /* n:"BrtSupNameErr" */
  },
  /*::[*/
  582: {
    /* n:"BrtSupNameSt" */
  },
  /*::[*/
  583: {
    /* n:"BrtSupNameNil" */
  },
  /*::[*/
  584: {
    /* n:"BrtSupNameBool" */
  },
  /*::[*/
  585: {
    /* n:"BrtSupNameFmla" */
  },
  /*::[*/
  586: {
    /* n:"BrtSupNameBits" */
  },
  /*::[*/
  587: {
    /* n:"BrtSupNameEnd" */
  },
  /*::[*/
  588: {
    /* n:"BrtEndSupBook", */
    T: -1
  },
  /*::[*/
  589: {
    /* n:"BrtCellSmartTagProperty" */
  },
  /*::[*/
  590: {
    /* n:"BrtBeginCellSmartTag", */
    T: 1
  },
  /*::[*/
  591: {
    /* n:"BrtEndCellSmartTag", */
    T: -1
  },
  /*::[*/
  592: {
    /* n:"BrtBeginCellSmartTags", */
    T: 1
  },
  /*::[*/
  593: {
    /* n:"BrtEndCellSmartTags", */
    T: -1
  },
  /*::[*/
  594: {
    /* n:"BrtBeginSmartTags", */
    T: 1
  },
  /*::[*/
  595: {
    /* n:"BrtEndSmartTags", */
    T: -1
  },
  /*::[*/
  596: {
    /* n:"BrtSmartTagType" */
  },
  /*::[*/
  597: {
    /* n:"BrtBeginSmartTagTypes", */
    T: 1
  },
  /*::[*/
  598: {
    /* n:"BrtEndSmartTagTypes", */
    T: -1
  },
  /*::[*/
  599: {
    /* n:"BrtBeginSXFilters", */
    T: 1
  },
  /*::[*/
  600: {
    /* n:"BrtEndSXFilters", */
    T: -1
  },
  /*::[*/
  601: {
    /* n:"BrtBeginSXFILTER", */
    T: 1
  },
  /*::[*/
  602: {
    /* n:"BrtEndSXFilter", */
    T: -1
  },
  /*::[*/
  603: {
    /* n:"BrtBeginFills", */
    T: 1
  },
  /*::[*/
  604: {
    /* n:"BrtEndFills", */
    T: -1
  },
  /*::[*/
  605: {
    /* n:"BrtBeginCellWatches", */
    T: 1
  },
  /*::[*/
  606: {
    /* n:"BrtEndCellWatches", */
    T: -1
  },
  /*::[*/
  607: {
    /* n:"BrtCellWatch" */
  },
  /*::[*/
  608: {
    /* n:"BrtBeginCRErrs", */
    T: 1
  },
  /*::[*/
  609: {
    /* n:"BrtEndCRErrs", */
    T: -1
  },
  /*::[*/
  610: {
    /* n:"BrtCrashRecErr" */
  },
  /*::[*/
  611: {
    /* n:"BrtBeginFonts", */
    T: 1
  },
  /*::[*/
  612: {
    /* n:"BrtEndFonts", */
    T: -1
  },
  /*::[*/
  613: {
    /* n:"BrtBeginBorders", */
    T: 1
  },
  /*::[*/
  614: {
    /* n:"BrtEndBorders", */
    T: -1
  },
  /*::[*/
  615: {
    /* n:"BrtBeginFmts", */
    T: 1
  },
  /*::[*/
  616: {
    /* n:"BrtEndFmts", */
    T: -1
  },
  /*::[*/
  617: {
    /* n:"BrtBeginCellXFs", */
    T: 1
  },
  /*::[*/
  618: {
    /* n:"BrtEndCellXFs", */
    T: -1
  },
  /*::[*/
  619: {
    /* n:"BrtBeginStyles", */
    T: 1
  },
  /*::[*/
  620: {
    /* n:"BrtEndStyles", */
    T: -1
  },
  /*::[*/
  625: {
    /* n:"BrtBigName" */
  },
  /*::[*/
  626: {
    /* n:"BrtBeginCellStyleXFs", */
    T: 1
  },
  /*::[*/
  627: {
    /* n:"BrtEndCellStyleXFs", */
    T: -1
  },
  /*::[*/
  628: {
    /* n:"BrtBeginComments", */
    T: 1
  },
  /*::[*/
  629: {
    /* n:"BrtEndComments", */
    T: -1
  },
  /*::[*/
  630: {
    /* n:"BrtBeginCommentAuthors", */
    T: 1
  },
  /*::[*/
  631: {
    /* n:"BrtEndCommentAuthors", */
    T: -1
  },
  /*::[*/
  632: {
    /* n:"BrtCommentAuthor", */
    f: Ru
  },
  /*::[*/
  633: {
    /* n:"BrtBeginCommentList", */
    T: 1
  },
  /*::[*/
  634: {
    /* n:"BrtEndCommentList", */
    T: -1
  },
  /*::[*/
  635: {
    /* n:"BrtBeginComment", */
    T: 1,
    f: Du
  },
  /*::[*/
  636: {
    /* n:"BrtEndComment", */
    T: -1
  },
  /*::[*/
  637: {
    /* n:"BrtCommentText", */
    f: Zc
  },
  /*::[*/
  638: {
    /* n:"BrtBeginOleObjects", */
    T: 1
  },
  /*::[*/
  639: {
    /* n:"BrtOleObject" */
  },
  /*::[*/
  640: {
    /* n:"BrtEndOleObjects", */
    T: -1
  },
  /*::[*/
  641: {
    /* n:"BrtBeginSxrules", */
    T: 1
  },
  /*::[*/
  642: {
    /* n:"BrtEndSxRules", */
    T: -1
  },
  /*::[*/
  643: {
    /* n:"BrtBeginActiveXControls", */
    T: 1
  },
  /*::[*/
  644: {
    /* n:"BrtActiveX" */
  },
  /*::[*/
  645: {
    /* n:"BrtEndActiveXControls", */
    T: -1
  },
  /*::[*/
  646: {
    /* n:"BrtBeginPCDSDTCEMembersSortBy", */
    T: 1
  },
  /*::[*/
  648: {
    /* n:"BrtBeginCellIgnoreECs", */
    T: 1
  },
  /*::[*/
  649: {
    /* n:"BrtCellIgnoreEC" */
  },
  /*::[*/
  650: {
    /* n:"BrtEndCellIgnoreECs", */
    T: -1
  },
  /*::[*/
  651: {
    /* n:"BrtCsProp", */
    f: hx
  },
  /*::[*/
  652: {
    /* n:"BrtCsPageSetup" */
  },
  /*::[*/
  653: {
    /* n:"BrtBeginUserCsViews", */
    T: 1
  },
  /*::[*/
  654: {
    /* n:"BrtEndUserCsViews", */
    T: -1
  },
  /*::[*/
  655: {
    /* n:"BrtBeginUserCsView", */
    T: 1
  },
  /*::[*/
  656: {
    /* n:"BrtEndUserCsView", */
    T: -1
  },
  /*::[*/
  657: {
    /* n:"BrtBeginPcdSFCIEntries", */
    T: 1
  },
  /*::[*/
  658: {
    /* n:"BrtEndPCDSFCIEntries", */
    T: -1
  },
  /*::[*/
  659: {
    /* n:"BrtPCDSFCIEntry" */
  },
  /*::[*/
  660: {
    /* n:"BrtBeginListParts", */
    T: 1
  },
  /*::[*/
  661: {
    /* n:"BrtListPart" */
  },
  /*::[*/
  662: {
    /* n:"BrtEndListParts", */
    T: -1
  },
  /*::[*/
  663: {
    /* n:"BrtSheetCalcProp" */
  },
  /*::[*/
  664: {
    /* n:"BrtBeginFnGroup", */
    T: 1
  },
  /*::[*/
  665: {
    /* n:"BrtFnGroup" */
  },
  /*::[*/
  666: {
    /* n:"BrtEndFnGroup", */
    T: -1
  },
  /*::[*/
  667: {
    /* n:"BrtSupAddin" */
  },
  /*::[*/
  668: {
    /* n:"BrtSXTDMPOrder" */
  },
  /*::[*/
  669: {
    /* n:"BrtCsProtection" */
  },
  /*::[*/
  671: {
    /* n:"BrtBeginWsSortMap", */
    T: 1
  },
  /*::[*/
  672: {
    /* n:"BrtEndWsSortMap", */
    T: -1
  },
  /*::[*/
  673: {
    /* n:"BrtBeginRRSort", */
    T: 1
  },
  /*::[*/
  674: {
    /* n:"BrtEndRRSort", */
    T: -1
  },
  /*::[*/
  675: {
    /* n:"BrtRRSortItem" */
  },
  /*::[*/
  676: {
    /* n:"BrtFileSharingIso" */
  },
  /*::[*/
  677: {
    /* n:"BrtBookProtectionIso" */
  },
  /*::[*/
  678: {
    /* n:"BrtSheetProtectionIso" */
  },
  /*::[*/
  679: {
    /* n:"BrtCsProtectionIso" */
  },
  /*::[*/
  680: {
    /* n:"BrtRangeProtectionIso" */
  },
  /*::[*/
  681: {
    /* n:"BrtDValList" */
  },
  /*::[*/
  1024: {
    /* n:"BrtRwDescent" */
  },
  /*::[*/
  1025: {
    /* n:"BrtKnownFonts" */
  },
  /*::[*/
  1026: {
    /* n:"BrtBeginSXTupleSet", */
    T: 1
  },
  /*::[*/
  1027: {
    /* n:"BrtEndSXTupleSet", */
    T: -1
  },
  /*::[*/
  1028: {
    /* n:"BrtBeginSXTupleSetHeader", */
    T: 1
  },
  /*::[*/
  1029: {
    /* n:"BrtEndSXTupleSetHeader", */
    T: -1
  },
  /*::[*/
  1030: {
    /* n:"BrtSXTupleSetHeaderItem" */
  },
  /*::[*/
  1031: {
    /* n:"BrtBeginSXTupleSetData", */
    T: 1
  },
  /*::[*/
  1032: {
    /* n:"BrtEndSXTupleSetData", */
    T: -1
  },
  /*::[*/
  1033: {
    /* n:"BrtBeginSXTupleSetRow", */
    T: 1
  },
  /*::[*/
  1034: {
    /* n:"BrtEndSXTupleSetRow", */
    T: -1
  },
  /*::[*/
  1035: {
    /* n:"BrtSXTupleSetRowItem" */
  },
  /*::[*/
  1036: {
    /* n:"BrtNameExt" */
  },
  /*::[*/
  1037: {
    /* n:"BrtPCDH14" */
  },
  /*::[*/
  1038: {
    /* n:"BrtBeginPCDCalcMem14", */
    T: 1
  },
  /*::[*/
  1039: {
    /* n:"BrtEndPCDCalcMem14", */
    T: -1
  },
  /*::[*/
  1040: {
    /* n:"BrtSXTH14" */
  },
  /*::[*/
  1041: {
    /* n:"BrtBeginSparklineGroup", */
    T: 1
  },
  /*::[*/
  1042: {
    /* n:"BrtEndSparklineGroup", */
    T: -1
  },
  /*::[*/
  1043: {
    /* n:"BrtSparkline" */
  },
  /*::[*/
  1044: {
    /* n:"BrtSXDI14" */
  },
  /*::[*/
  1045: {
    /* n:"BrtWsFmtInfoEx14" */
  },
  /*::[*/
  1046: {
    /* n:"BrtBeginConditionalFormatting14", */
    T: 1
  },
  /*::[*/
  1047: {
    /* n:"BrtEndConditionalFormatting14", */
    T: -1
  },
  /*::[*/
  1048: {
    /* n:"BrtBeginCFRule14", */
    T: 1
  },
  /*::[*/
  1049: {
    /* n:"BrtEndCFRule14", */
    T: -1
  },
  /*::[*/
  1050: {
    /* n:"BrtCFVO14" */
  },
  /*::[*/
  1051: {
    /* n:"BrtBeginDatabar14", */
    T: 1
  },
  /*::[*/
  1052: {
    /* n:"BrtBeginIconSet14", */
    T: 1
  },
  /*::[*/
  1053: {
    /* n:"BrtDVal14", */
    f: cx
  },
  /*::[*/
  1054: {
    /* n:"BrtBeginDVals14", */
    T: 1
  },
  /*::[*/
  1055: {
    /* n:"BrtColor14" */
  },
  /*::[*/
  1056: {
    /* n:"BrtBeginSparklines", */
    T: 1
  },
  /*::[*/
  1057: {
    /* n:"BrtEndSparklines", */
    T: -1
  },
  /*::[*/
  1058: {
    /* n:"BrtBeginSparklineGroups", */
    T: 1
  },
  /*::[*/
  1059: {
    /* n:"BrtEndSparklineGroups", */
    T: -1
  },
  /*::[*/
  1061: {
    /* n:"BrtSXVD14" */
  },
  /*::[*/
  1062: {
    /* n:"BrtBeginSXView14", */
    T: 1
  },
  /*::[*/
  1063: {
    /* n:"BrtEndSXView14", */
    T: -1
  },
  /*::[*/
  1064: {
    /* n:"BrtBeginSXView16", */
    T: 1
  },
  /*::[*/
  1065: {
    /* n:"BrtEndSXView16", */
    T: -1
  },
  /*::[*/
  1066: {
    /* n:"BrtBeginPCD14", */
    T: 1
  },
  /*::[*/
  1067: {
    /* n:"BrtEndPCD14", */
    T: -1
  },
  /*::[*/
  1068: {
    /* n:"BrtBeginExtConn14", */
    T: 1
  },
  /*::[*/
  1069: {
    /* n:"BrtEndExtConn14", */
    T: -1
  },
  /*::[*/
  1070: {
    /* n:"BrtBeginSlicerCacheIDs", */
    T: 1
  },
  /*::[*/
  1071: {
    /* n:"BrtEndSlicerCacheIDs", */
    T: -1
  },
  /*::[*/
  1072: {
    /* n:"BrtBeginSlicerCacheID", */
    T: 1
  },
  /*::[*/
  1073: {
    /* n:"BrtEndSlicerCacheID", */
    T: -1
  },
  /*::[*/
  1075: {
    /* n:"BrtBeginSlicerCache", */
    T: 1
  },
  /*::[*/
  1076: {
    /* n:"BrtEndSlicerCache", */
    T: -1
  },
  /*::[*/
  1077: {
    /* n:"BrtBeginSlicerCacheDef", */
    T: 1
  },
  /*::[*/
  1078: {
    /* n:"BrtEndSlicerCacheDef", */
    T: -1
  },
  /*::[*/
  1079: {
    /* n:"BrtBeginSlicersEx", */
    T: 1
  },
  /*::[*/
  1080: {
    /* n:"BrtEndSlicersEx", */
    T: -1
  },
  /*::[*/
  1081: {
    /* n:"BrtBeginSlicerEx", */
    T: 1
  },
  /*::[*/
  1082: {
    /* n:"BrtEndSlicerEx", */
    T: -1
  },
  /*::[*/
  1083: {
    /* n:"BrtBeginSlicer", */
    T: 1
  },
  /*::[*/
  1084: {
    /* n:"BrtEndSlicer", */
    T: -1
  },
  /*::[*/
  1085: {
    /* n:"BrtSlicerCachePivotTables" */
  },
  /*::[*/
  1086: {
    /* n:"BrtBeginSlicerCacheOlapImpl", */
    T: 1
  },
  /*::[*/
  1087: {
    /* n:"BrtEndSlicerCacheOlapImpl", */
    T: -1
  },
  /*::[*/
  1088: {
    /* n:"BrtBeginSlicerCacheLevelsData", */
    T: 1
  },
  /*::[*/
  1089: {
    /* n:"BrtEndSlicerCacheLevelsData", */
    T: -1
  },
  /*::[*/
  1090: {
    /* n:"BrtBeginSlicerCacheLevelData", */
    T: 1
  },
  /*::[*/
  1091: {
    /* n:"BrtEndSlicerCacheLevelData", */
    T: -1
  },
  /*::[*/
  1092: {
    /* n:"BrtBeginSlicerCacheSiRanges", */
    T: 1
  },
  /*::[*/
  1093: {
    /* n:"BrtEndSlicerCacheSiRanges", */
    T: -1
  },
  /*::[*/
  1094: {
    /* n:"BrtBeginSlicerCacheSiRange", */
    T: 1
  },
  /*::[*/
  1095: {
    /* n:"BrtEndSlicerCacheSiRange", */
    T: -1
  },
  /*::[*/
  1096: {
    /* n:"BrtSlicerCacheOlapItem" */
  },
  /*::[*/
  1097: {
    /* n:"BrtBeginSlicerCacheSelections", */
    T: 1
  },
  /*::[*/
  1098: {
    /* n:"BrtSlicerCacheSelection" */
  },
  /*::[*/
  1099: {
    /* n:"BrtEndSlicerCacheSelections", */
    T: -1
  },
  /*::[*/
  1100: {
    /* n:"BrtBeginSlicerCacheNative", */
    T: 1
  },
  /*::[*/
  1101: {
    /* n:"BrtEndSlicerCacheNative", */
    T: -1
  },
  /*::[*/
  1102: {
    /* n:"BrtSlicerCacheNativeItem" */
  },
  /*::[*/
  1103: {
    /* n:"BrtRangeProtection14" */
  },
  /*::[*/
  1104: {
    /* n:"BrtRangeProtectionIso14" */
  },
  /*::[*/
  1105: {
    /* n:"BrtCellIgnoreEC14" */
  },
  /*::[*/
  1111: {
    /* n:"BrtList14" */
  },
  /*::[*/
  1112: {
    /* n:"BrtCFIcon" */
  },
  /*::[*/
  1113: {
    /* n:"BrtBeginSlicerCachesPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  1114: {
    /* n:"BrtEndSlicerCachesPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  1115: {
    /* n:"BrtBeginSlicers", */
    T: 1
  },
  /*::[*/
  1116: {
    /* n:"BrtEndSlicers", */
    T: -1
  },
  /*::[*/
  1117: {
    /* n:"BrtWbProp14" */
  },
  /*::[*/
  1118: {
    /* n:"BrtBeginSXEdit", */
    T: 1
  },
  /*::[*/
  1119: {
    /* n:"BrtEndSXEdit", */
    T: -1
  },
  /*::[*/
  1120: {
    /* n:"BrtBeginSXEdits", */
    T: 1
  },
  /*::[*/
  1121: {
    /* n:"BrtEndSXEdits", */
    T: -1
  },
  /*::[*/
  1122: {
    /* n:"BrtBeginSXChange", */
    T: 1
  },
  /*::[*/
  1123: {
    /* n:"BrtEndSXChange", */
    T: -1
  },
  /*::[*/
  1124: {
    /* n:"BrtBeginSXChanges", */
    T: 1
  },
  /*::[*/
  1125: {
    /* n:"BrtEndSXChanges", */
    T: -1
  },
  /*::[*/
  1126: {
    /* n:"BrtSXTupleItems" */
  },
  /*::[*/
  1128: {
    /* n:"BrtBeginSlicerStyle", */
    T: 1
  },
  /*::[*/
  1129: {
    /* n:"BrtEndSlicerStyle", */
    T: -1
  },
  /*::[*/
  1130: {
    /* n:"BrtSlicerStyleElement" */
  },
  /*::[*/
  1131: {
    /* n:"BrtBeginStyleSheetExt14", */
    T: 1
  },
  /*::[*/
  1132: {
    /* n:"BrtEndStyleSheetExt14", */
    T: -1
  },
  /*::[*/
  1133: {
    /* n:"BrtBeginSlicerCachesPivotCacheID", */
    T: 1
  },
  /*::[*/
  1134: {
    /* n:"BrtEndSlicerCachesPivotCacheID", */
    T: -1
  },
  /*::[*/
  1135: {
    /* n:"BrtBeginConditionalFormattings", */
    T: 1
  },
  /*::[*/
  1136: {
    /* n:"BrtEndConditionalFormattings", */
    T: -1
  },
  /*::[*/
  1137: {
    /* n:"BrtBeginPCDCalcMemExt", */
    T: 1
  },
  /*::[*/
  1138: {
    /* n:"BrtEndPCDCalcMemExt", */
    T: -1
  },
  /*::[*/
  1139: {
    /* n:"BrtBeginPCDCalcMemsExt", */
    T: 1
  },
  /*::[*/
  1140: {
    /* n:"BrtEndPCDCalcMemsExt", */
    T: -1
  },
  /*::[*/
  1141: {
    /* n:"BrtPCDField14" */
  },
  /*::[*/
  1142: {
    /* n:"BrtBeginSlicerStyles", */
    T: 1
  },
  /*::[*/
  1143: {
    /* n:"BrtEndSlicerStyles", */
    T: -1
  },
  /*::[*/
  1144: {
    /* n:"BrtBeginSlicerStyleElements", */
    T: 1
  },
  /*::[*/
  1145: {
    /* n:"BrtEndSlicerStyleElements", */
    T: -1
  },
  /*::[*/
  1146: {
    /* n:"BrtCFRuleExt" */
  },
  /*::[*/
  1147: {
    /* n:"BrtBeginSXCondFmt14", */
    T: 1
  },
  /*::[*/
  1148: {
    /* n:"BrtEndSXCondFmt14", */
    T: -1
  },
  /*::[*/
  1149: {
    /* n:"BrtBeginSXCondFmts14", */
    T: 1
  },
  /*::[*/
  1150: {
    /* n:"BrtEndSXCondFmts14", */
    T: -1
  },
  /*::[*/
  1152: {
    /* n:"BrtBeginSortCond14", */
    T: 1
  },
  /*::[*/
  1153: {
    /* n:"BrtEndSortCond14", */
    T: -1
  },
  /*::[*/
  1154: {
    /* n:"BrtEndDVals14", */
    T: -1
  },
  /*::[*/
  1155: {
    /* n:"BrtEndIconSet14", */
    T: -1
  },
  /*::[*/
  1156: {
    /* n:"BrtEndDatabar14", */
    T: -1
  },
  /*::[*/
  1157: {
    /* n:"BrtBeginColorScale14", */
    T: 1
  },
  /*::[*/
  1158: {
    /* n:"BrtEndColorScale14", */
    T: -1
  },
  /*::[*/
  1159: {
    /* n:"BrtBeginSxrules14", */
    T: 1
  },
  /*::[*/
  1160: {
    /* n:"BrtEndSxrules14", */
    T: -1
  },
  /*::[*/
  1161: {
    /* n:"BrtBeginPRule14", */
    T: 1
  },
  /*::[*/
  1162: {
    /* n:"BrtEndPRule14", */
    T: -1
  },
  /*::[*/
  1163: {
    /* n:"BrtBeginPRFilters14", */
    T: 1
  },
  /*::[*/
  1164: {
    /* n:"BrtEndPRFilters14", */
    T: -1
  },
  /*::[*/
  1165: {
    /* n:"BrtBeginPRFilter14", */
    T: 1
  },
  /*::[*/
  1166: {
    /* n:"BrtEndPRFilter14", */
    T: -1
  },
  /*::[*/
  1167: {
    /* n:"BrtBeginPRFItem14", */
    T: 1
  },
  /*::[*/
  1168: {
    /* n:"BrtEndPRFItem14", */
    T: -1
  },
  /*::[*/
  1169: {
    /* n:"BrtBeginCellIgnoreECs14", */
    T: 1
  },
  /*::[*/
  1170: {
    /* n:"BrtEndCellIgnoreECs14", */
    T: -1
  },
  /*::[*/
  1171: {
    /* n:"BrtDxf14" */
  },
  /*::[*/
  1172: {
    /* n:"BrtBeginDxF14s", */
    T: 1
  },
  /*::[*/
  1173: {
    /* n:"BrtEndDxf14s", */
    T: -1
  },
  /*::[*/
  1177: {
    /* n:"BrtFilter14" */
  },
  /*::[*/
  1178: {
    /* n:"BrtBeginCustomFilters14", */
    T: 1
  },
  /*::[*/
  1180: {
    /* n:"BrtCustomFilter14" */
  },
  /*::[*/
  1181: {
    /* n:"BrtIconFilter14" */
  },
  /*::[*/
  1182: {
    /* n:"BrtPivotCacheConnectionName" */
  },
  /*::[*/
  2048: {
    /* n:"BrtBeginDecoupledPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2049: {
    /* n:"BrtEndDecoupledPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2050: {
    /* n:"BrtDecoupledPivotCacheID" */
  },
  /*::[*/
  2051: {
    /* n:"BrtBeginPivotTableRefs", */
    T: 1
  },
  /*::[*/
  2052: {
    /* n:"BrtEndPivotTableRefs", */
    T: -1
  },
  /*::[*/
  2053: {
    /* n:"BrtPivotTableRef" */
  },
  /*::[*/
  2054: {
    /* n:"BrtSlicerCacheBookPivotTables" */
  },
  /*::[*/
  2055: {
    /* n:"BrtBeginSxvcells", */
    T: 1
  },
  /*::[*/
  2056: {
    /* n:"BrtEndSxvcells", */
    T: -1
  },
  /*::[*/
  2057: {
    /* n:"BrtBeginSxRow", */
    T: 1
  },
  /*::[*/
  2058: {
    /* n:"BrtEndSxRow", */
    T: -1
  },
  /*::[*/
  2060: {
    /* n:"BrtPcdCalcMem15" */
  },
  /*::[*/
  2067: {
    /* n:"BrtQsi15" */
  },
  /*::[*/
  2068: {
    /* n:"BrtBeginWebExtensions", */
    T: 1
  },
  /*::[*/
  2069: {
    /* n:"BrtEndWebExtensions", */
    T: -1
  },
  /*::[*/
  2070: {
    /* n:"BrtWebExtension" */
  },
  /*::[*/
  2071: {
    /* n:"BrtAbsPath15" */
  },
  /*::[*/
  2072: {
    /* n:"BrtBeginPivotTableUISettings", */
    T: 1
  },
  /*::[*/
  2073: {
    /* n:"BrtEndPivotTableUISettings", */
    T: -1
  },
  /*::[*/
  2075: {
    /* n:"BrtTableSlicerCacheIDs" */
  },
  /*::[*/
  2076: {
    /* n:"BrtTableSlicerCacheID" */
  },
  /*::[*/
  2077: {
    /* n:"BrtBeginTableSlicerCache", */
    T: 1
  },
  /*::[*/
  2078: {
    /* n:"BrtEndTableSlicerCache", */
    T: -1
  },
  /*::[*/
  2079: {
    /* n:"BrtSxFilter15" */
  },
  /*::[*/
  2080: {
    /* n:"BrtBeginTimelineCachePivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2081: {
    /* n:"BrtEndTimelineCachePivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2082: {
    /* n:"BrtTimelineCachePivotCacheID" */
  },
  /*::[*/
  2083: {
    /* n:"BrtBeginTimelineCacheIDs", */
    T: 1
  },
  /*::[*/
  2084: {
    /* n:"BrtEndTimelineCacheIDs", */
    T: -1
  },
  /*::[*/
  2085: {
    /* n:"BrtBeginTimelineCacheID", */
    T: 1
  },
  /*::[*/
  2086: {
    /* n:"BrtEndTimelineCacheID", */
    T: -1
  },
  /*::[*/
  2087: {
    /* n:"BrtBeginTimelinesEx", */
    T: 1
  },
  /*::[*/
  2088: {
    /* n:"BrtEndTimelinesEx", */
    T: -1
  },
  /*::[*/
  2089: {
    /* n:"BrtBeginTimelineEx", */
    T: 1
  },
  /*::[*/
  2090: {
    /* n:"BrtEndTimelineEx", */
    T: -1
  },
  /*::[*/
  2091: {
    /* n:"BrtWorkBookPr15" */
  },
  /*::[*/
  2092: {
    /* n:"BrtPCDH15" */
  },
  /*::[*/
  2093: {
    /* n:"BrtBeginTimelineStyle", */
    T: 1
  },
  /*::[*/
  2094: {
    /* n:"BrtEndTimelineStyle", */
    T: -1
  },
  /*::[*/
  2095: {
    /* n:"BrtTimelineStyleElement" */
  },
  /*::[*/
  2096: {
    /* n:"BrtBeginTimelineStylesheetExt15", */
    T: 1
  },
  /*::[*/
  2097: {
    /* n:"BrtEndTimelineStylesheetExt15", */
    T: -1
  },
  /*::[*/
  2098: {
    /* n:"BrtBeginTimelineStyles", */
    T: 1
  },
  /*::[*/
  2099: {
    /* n:"BrtEndTimelineStyles", */
    T: -1
  },
  /*::[*/
  2100: {
    /* n:"BrtBeginTimelineStyleElements", */
    T: 1
  },
  /*::[*/
  2101: {
    /* n:"BrtEndTimelineStyleElements", */
    T: -1
  },
  /*::[*/
  2102: {
    /* n:"BrtDxf15" */
  },
  /*::[*/
  2103: {
    /* n:"BrtBeginDxfs15", */
    T: 1
  },
  /*::[*/
  2104: {
    /* n:"BrtEndDxfs15", */
    T: -1
  },
  /*::[*/
  2105: {
    /* n:"BrtSlicerCacheHideItemsWithNoData" */
  },
  /*::[*/
  2106: {
    /* n:"BrtBeginItemUniqueNames", */
    T: 1
  },
  /*::[*/
  2107: {
    /* n:"BrtEndItemUniqueNames", */
    T: -1
  },
  /*::[*/
  2108: {
    /* n:"BrtItemUniqueName" */
  },
  /*::[*/
  2109: {
    /* n:"BrtBeginExtConn15", */
    T: 1
  },
  /*::[*/
  2110: {
    /* n:"BrtEndExtConn15", */
    T: -1
  },
  /*::[*/
  2111: {
    /* n:"BrtBeginOledbPr15", */
    T: 1
  },
  /*::[*/
  2112: {
    /* n:"BrtEndOledbPr15", */
    T: -1
  },
  /*::[*/
  2113: {
    /* n:"BrtBeginDataFeedPr15", */
    T: 1
  },
  /*::[*/
  2114: {
    /* n:"BrtEndDataFeedPr15", */
    T: -1
  },
  /*::[*/
  2115: {
    /* n:"BrtTextPr15" */
  },
  /*::[*/
  2116: {
    /* n:"BrtRangePr15" */
  },
  /*::[*/
  2117: {
    /* n:"BrtDbCommand15" */
  },
  /*::[*/
  2118: {
    /* n:"BrtBeginDbTables15", */
    T: 1
  },
  /*::[*/
  2119: {
    /* n:"BrtEndDbTables15", */
    T: -1
  },
  /*::[*/
  2120: {
    /* n:"BrtDbTable15" */
  },
  /*::[*/
  2121: {
    /* n:"BrtBeginDataModel", */
    T: 1
  },
  /*::[*/
  2122: {
    /* n:"BrtEndDataModel", */
    T: -1
  },
  /*::[*/
  2123: {
    /* n:"BrtBeginModelTables", */
    T: 1
  },
  /*::[*/
  2124: {
    /* n:"BrtEndModelTables", */
    T: -1
  },
  /*::[*/
  2125: {
    /* n:"BrtModelTable" */
  },
  /*::[*/
  2126: {
    /* n:"BrtBeginModelRelationships", */
    T: 1
  },
  /*::[*/
  2127: {
    /* n:"BrtEndModelRelationships", */
    T: -1
  },
  /*::[*/
  2128: {
    /* n:"BrtModelRelationship" */
  },
  /*::[*/
  2129: {
    /* n:"BrtBeginECTxtWiz15", */
    T: 1
  },
  /*::[*/
  2130: {
    /* n:"BrtEndECTxtWiz15", */
    T: -1
  },
  /*::[*/
  2131: {
    /* n:"BrtBeginECTWFldInfoLst15", */
    T: 1
  },
  /*::[*/
  2132: {
    /* n:"BrtEndECTWFldInfoLst15", */
    T: -1
  },
  /*::[*/
  2133: {
    /* n:"BrtBeginECTWFldInfo15", */
    T: 1
  },
  /*::[*/
  2134: {
    /* n:"BrtFieldListActiveItem" */
  },
  /*::[*/
  2135: {
    /* n:"BrtPivotCacheIdVersion" */
  },
  /*::[*/
  2136: {
    /* n:"BrtSXDI15" */
  },
  /*::[*/
  2137: {
    /* n:"BrtBeginModelTimeGroupings", */
    T: 1
  },
  /*::[*/
  2138: {
    /* n:"BrtEndModelTimeGroupings", */
    T: -1
  },
  /*::[*/
  2139: {
    /* n:"BrtBeginModelTimeGrouping", */
    T: 1
  },
  /*::[*/
  2140: {
    /* n:"BrtEndModelTimeGrouping", */
    T: -1
  },
  /*::[*/
  2141: {
    /* n:"BrtModelTimeGroupingCalcCol" */
  },
  /*::[*/
  3072: {
    /* n:"BrtUid" */
  },
  /*::[*/
  3073: {
    /* n:"BrtRevisionPtr" */
  },
  /*::[*/
  4096: {
    /* n:"BrtBeginDynamicArrayPr", */
    T: 1
  },
  /*::[*/
  4097: {
    /* n:"BrtEndDynamicArrayPr", */
    T: -1
  },
  /*::[*/
  5002: {
    /* n:"BrtBeginRichValueBlock", */
    T: 1
  },
  /*::[*/
  5003: {
    /* n:"BrtEndRichValueBlock", */
    T: -1
  },
  /*::[*/
  5081: {
    /* n:"BrtBeginRichFilters", */
    T: 1
  },
  /*::[*/
  5082: {
    /* n:"BrtEndRichFilters", */
    T: -1
  },
  /*::[*/
  5083: {
    /* n:"BrtRichFilter" */
  },
  /*::[*/
  5084: {
    /* n:"BrtBeginRichFilterColumn", */
    T: 1
  },
  /*::[*/
  5085: {
    /* n:"BrtEndRichFilterColumn", */
    T: -1
  },
  /*::[*/
  5086: {
    /* n:"BrtBeginCustomRichFilters", */
    T: 1
  },
  /*::[*/
  5087: {
    /* n:"BrtEndCustomRichFilters", */
    T: -1
  },
  /*::[*/
  5088: {
    /* n:"BrtCustomRichFilter" */
  },
  /*::[*/
  5089: {
    /* n:"BrtTop10RichFilter" */
  },
  /*::[*/
  5090: {
    /* n:"BrtDynamicRichFilter" */
  },
  /*::[*/
  5092: {
    /* n:"BrtBeginRichSortCondition", */
    T: 1
  },
  /*::[*/
  5093: {
    /* n:"BrtEndRichSortCondition", */
    T: -1
  },
  /*::[*/
  5094: {
    /* n:"BrtRichFilterDateGroupItem" */
  },
  /*::[*/
  5095: {
    /* n:"BrtBeginCalcFeatures", */
    T: 1
  },
  /*::[*/
  5096: {
    /* n:"BrtEndCalcFeatures", */
    T: -1
  },
  /*::[*/
  5097: {
    /* n:"BrtCalcFeature" */
  },
  /*::[*/
  5099: {
    /* n:"BrtExternalLinksPr" */
  },
  /*::[*/
  65535: { n: "" }
}, qt = {
  /* [MS-XLS] 2.3 Record Enumeration 2021-08-17 */
  /*::[*/
  6: {
    /* n:"Formula", */
    f: Ut
  },
  /*::[*/
  10: {
    /* n:"EOF", */
    f: $r
  },
  /*::[*/
  12: {
    /* n:"CalcCount", */
    f: Xe
  },
  //
  /*::[*/
  13: {
    /* n:"CalcMode", */
    f: Xe
  },
  //
  /*::[*/
  14: {
    /* n:"CalcPrecision", */
    f: He
  },
  //
  /*::[*/
  15: {
    /* n:"CalcRefMode", */
    f: He
  },
  //
  /*::[*/
  16: {
    /* n:"CalcDelta", */
    f: ir
  },
  //
  /*::[*/
  17: {
    /* n:"CalcIter", */
    f: He
  },
  //
  /*::[*/
  18: {
    /* n:"Protect", */
    f: He
  },
  /*::[*/
  19: {
    /* n:"Password", */
    f: Xe
  },
  /*::[*/
  20: {
    /* n:"Header", */
    f: pn
  },
  /*::[*/
  21: {
    /* n:"Footer", */
    f: pn
  },
  /*::[*/
  23: {
    /* n:"ExternSheet", */
    f: Us
  },
  /*::[*/
  24: {
    /* n:"Lbl", */
    f: gn
  },
  /*::[*/
  25: {
    /* n:"WinProtect", */
    f: He
  },
  /*::[*/
  26: {
    /* n:"VerticalPageBreaks", */
  },
  /*::[*/
  27: {
    /* n:"HorizontalPageBreaks", */
  },
  /*::[*/
  28: {
    /* n:"Note", */
    f: yo
  },
  /*::[*/
  29: {
    /* n:"Selection", */
  },
  /*::[*/
  34: {
    /* n:"Date1904", */
    f: He
  },
  /*::[*/
  35: {
    /* n:"ExternName", */
    f: vn
  },
  /*::[*/
  38: {
    /* n:"LeftMargin", */
    f: ir
  },
  // *
  /*::[*/
  39: {
    /* n:"RightMargin", */
    f: ir
  },
  // *
  /*::[*/
  40: {
    /* n:"TopMargin", */
    f: ir
  },
  // *
  /*::[*/
  41: {
    /* n:"BottomMargin", */
    f: ir
  },
  // *
  /*::[*/
  42: {
    /* n:"PrintRowCol", */
    f: He
  },
  /*::[*/
  43: {
    /* n:"PrintGrid", */
    f: He
  },
  /*::[*/
  47: {
    /* n:"FilePass", */
    f: Il
  },
  /*::[*/
  49: {
    /* n:"Font", */
    f: fo
  },
  /*::[*/
  51: {
    /* n:"PrintSize", */
    f: Xe
  },
  /*::[*/
  60: {
    /* n:"Continue", */
  },
  /*::[*/
  61: {
    /* n:"Window1", */
    f: so
  },
  /*::[*/
  64: {
    /* n:"Backup", */
    f: He
  },
  /*::[*/
  65: {
    /* n:"Pane", */
    f: co
  },
  /*::[*/
  66: {
    /* n:"CodePage", */
    f: Xe
  },
  /*::[*/
  77: {
    /* n:"Pls", */
  },
  /*::[*/
  80: {
    /* n:"DCon", */
  },
  /*::[*/
  81: {
    /* n:"DConRef", */
  },
  /*::[*/
  82: {
    /* n:"DConName", */
  },
  /*::[*/
  85: {
    /* n:"DefColWidth", */
    f: Xe
  },
  /*::[*/
  89: {
    /* n:"XCT", */
  },
  /*::[*/
  90: {
    /* n:"CRN", */
  },
  /*::[*/
  91: {
    /* n:"FileSharing", */
  },
  /*::[*/
  92: {
    /* n:"WriteAccess", */
    f: qf
  },
  /*::[*/
  93: {
    /* n:"Obj", */
    f: Do
  },
  /*::[*/
  94: {
    /* n:"Uncalced", */
  },
  /*::[*/
  95: {
    /* n:"CalcSaveRecalc", */
    f: He
  },
  //
  /*::[*/
  96: {
    /* n:"Template", */
  },
  /*::[*/
  97: {
    /* n:"Intl", */
  },
  /*::[*/
  99: {
    /* n:"ObjProtect", */
    f: He
  },
  /*::[*/
  125: {
    /* n:"ColInfo", */
    f: Hs
  },
  /*::[*/
  128: {
    /* n:"Guts", */
    f: _o
  },
  /*::[*/
  129: {
    /* n:"WsBool", */
    f: Zf
  },
  /*::[*/
  130: {
    /* n:"GridSet", */
    f: Xe
  },
  /*::[*/
  131: {
    /* n:"HCenter", */
    f: He
  },
  /*::[*/
  132: {
    /* n:"VCenter", */
    f: He
  },
  /*::[*/
  133: {
    /* n:"BoundSheet8", */
    f: Qf
  },
  /*::[*/
  134: {
    /* n:"WriteProtect", */
  },
  /*::[*/
  140: {
    /* n:"Country", */
    f: Lo
  },
  /*::[*/
  141: {
    /* n:"HideObj", */
    f: Xe
  },
  /*::[*/
  144: {
    /* n:"Sort", */
  },
  /*::[*/
  146: {
    /* n:"Palette", */
    f: Bo
  },
  /*::[*/
  151: {
    /* n:"Sync", */
  },
  /*::[*/
  152: {
    /* n:"LPr", */
  },
  /*::[*/
  153: {
    /* n:"DxGCol", */
  },
  /*::[*/
  154: {
    /* n:"FnGroupName", */
  },
  /*::[*/
  155: {
    /* n:"FilterMode", */
  },
  /*::[*/
  156: {
    /* n:"BuiltInFnGroupCount", */
    f: Xe
  },
  /*::[*/
  157: {
    /* n:"AutoFilterInfo", */
  },
  /*::[*/
  158: {
    /* n:"AutoFilter", */
  },
  /*::[*/
  160: {
    /* n:"Scl", */
    f: Go
  },
  /*::[*/
  161: {
    /* n:"Setup", */
    f: Ho
  },
  /*::[*/
  174: {
    /* n:"ScenMan", */
  },
  /*::[*/
  175: {
    /* n:"SCENARIO", */
  },
  /*::[*/
  176: {
    /* n:"SxView", */
  },
  /*::[*/
  177: {
    /* n:"Sxvd", */
  },
  /*::[*/
  178: {
    /* n:"SXVI", */
  },
  /*::[*/
  180: {
    /* n:"SxIvd", */
  },
  /*::[*/
  181: {
    /* n:"SXLI", */
  },
  /*::[*/
  182: {
    /* n:"SXPI", */
  },
  /*::[*/
  184: {
    /* n:"DocRoute", */
  },
  /*::[*/
  185: {
    /* n:"RecipName", */
  },
  /*::[*/
  189: {
    /* n:"MulRk", */
    f: po
  },
  /*::[*/
  190: {
    /* n:"MulBlank", */
    f: vo
  },
  /*::[*/
  193: {
    /* n:"Mms", */
    f: $r
  },
  /*::[*/
  197: {
    /* n:"SXDI", */
  },
  /*::[*/
  198: {
    /* n:"SXDB", */
  },
  /*::[*/
  199: {
    /* n:"SXFDB", */
  },
  /*::[*/
  200: {
    /* n:"SXDBB", */
  },
  /*::[*/
  201: {
    /* n:"SXNum", */
  },
  /*::[*/
  202: {
    /* n:"SxBool", */
    f: He
  },
  /*::[*/
  203: {
    /* n:"SxErr", */
  },
  /*::[*/
  204: {
    /* n:"SXInt", */
  },
  /*::[*/
  205: {
    /* n:"SXString", */
  },
  /*::[*/
  206: {
    /* n:"SXDtr", */
  },
  /*::[*/
  207: {
    /* n:"SxNil", */
  },
  /*::[*/
  208: {
    /* n:"SXTbl", */
  },
  /*::[*/
  209: {
    /* n:"SXTBRGIITM", */
  },
  /*::[*/
  210: {
    /* n:"SxTbpg", */
  },
  /*::[*/
  211: {
    /* n:"ObProj", */
  },
  /*::[*/
  213: {
    /* n:"SXStreamID", */
  },
  /*::[*/
  215: {
    /* n:"DBCell", */
  },
  /*::[*/
  216: {
    /* n:"SXRng", */
  },
  /*::[*/
  217: {
    /* n:"SxIsxoper", */
  },
  /*::[*/
  218: {
    /* n:"BookBool", */
    f: Xe
  },
  /*::[*/
  220: {
    /* n:"DbOrParamQry", */
  },
  /*::[*/
  221: {
    /* n:"ScenarioProtect", */
    f: He
  },
  /*::[*/
  222: {
    /* n:"OleObjectSize", */
  },
  /*::[*/
  224: {
    /* n:"XF", */
    f: mo
  },
  /*::[*/
  225: {
    /* n:"InterfaceHdr", */
    f: Jf
  },
  /*::[*/
  226: {
    /* n:"InterfaceEnd", */
    f: $r
  },
  /*::[*/
  227: {
    /* n:"SXVS", */
  },
  /*::[*/
  229: {
    /* n:"MergeCells", */
    f: Oo
  },
  /*::[*/
  233: {
    /* n:"BkHim", */
  },
  /*::[*/
  235: {
    /* n:"MsoDrawingGroup", */
  },
  /*::[*/
  236: {
    /* n:"MsoDrawing", */
  },
  /*::[*/
  237: {
    /* n:"MsoDrawingSelection", */
  },
  /*::[*/
  239: {
    /* n:"PhoneticInfo", */
  },
  /*::[*/
  240: {
    /* n:"SxRule", */
  },
  /*::[*/
  241: {
    /* n:"SXEx", */
  },
  /*::[*/
  242: {
    /* n:"SxFilt", */
  },
  /*::[*/
  244: {
    /* n:"SxDXF", */
  },
  /*::[*/
  245: {
    /* n:"SxItm", */
  },
  /*::[*/
  246: {
    /* n:"SxName", */
  },
  /*::[*/
  247: {
    /* n:"SxSelect", */
  },
  /*::[*/
  248: {
    /* n:"SXPair", */
  },
  /*::[*/
  249: {
    /* n:"SxFmla", */
  },
  /*::[*/
  251: {
    /* n:"SxFormat", */
  },
  /*::[*/
  252: {
    /* n:"SST", */
    f: eo
  },
  /*::[*/
  253: {
    /* n:"LabelSst", */
    f: oo
  },
  /*::[*/
  255: {
    /* n:"ExtSST", */
    f: ro
  },
  /*::[*/
  256: {
    /* n:"SXVDEx", */
  },
  /*::[*/
  259: {
    /* n:"SXFormula", */
  },
  /*::[*/
  290: {
    /* n:"SXDBEx", */
  },
  /*::[*/
  311: {
    /* n:"RRDInsDel", */
  },
  /*::[*/
  312: {
    /* n:"RRDHead", */
  },
  /*::[*/
  315: {
    /* n:"RRDChgCell", */
  },
  /*::[*/
  317: {
    /* n:"RRTabId", */
    f: Ns
  },
  /*::[*/
  318: {
    /* n:"RRDRenSheet", */
  },
  /*::[*/
  319: {
    /* n:"RRSort", */
  },
  /*::[*/
  320: {
    /* n:"RRDMove", */
  },
  /*::[*/
  330: {
    /* n:"RRFormat", */
  },
  /*::[*/
  331: {
    /* n:"RRAutoFmt", */
  },
  /*::[*/
  333: {
    /* n:"RRInsertSh", */
  },
  /*::[*/
  334: {
    /* n:"RRDMoveBegin", */
  },
  /*::[*/
  335: {
    /* n:"RRDMoveEnd", */
  },
  /*::[*/
  336: {
    /* n:"RRDInsDelBegin", */
  },
  /*::[*/
  337: {
    /* n:"RRDInsDelEnd", */
  },
  /*::[*/
  338: {
    /* n:"RRDConflict", */
  },
  /*::[*/
  339: {
    /* n:"RRDDefName", */
  },
  /*::[*/
  340: {
    /* n:"RRDRstEtxp", */
  },
  /*::[*/
  351: {
    /* n:"LRng", */
  },
  /*::[*/
  352: {
    /* n:"UsesELFs", */
    f: He
  },
  /*::[*/
  353: {
    /* n:"DSF", */
    f: $r
  },
  /*::[*/
  401: {
    /* n:"CUsr", */
  },
  /*::[*/
  402: {
    /* n:"CbUsr", */
  },
  /*::[*/
  403: {
    /* n:"UsrInfo", */
  },
  /*::[*/
  404: {
    /* n:"UsrExcl", */
  },
  /*::[*/
  405: {
    /* n:"FileLock", */
  },
  /*::[*/
  406: {
    /* n:"RRDInfo", */
  },
  /*::[*/
  407: {
    /* n:"BCUsrs", */
  },
  /*::[*/
  408: {
    /* n:"UsrChk", */
  },
  /*::[*/
  425: {
    /* n:"UserBView", */
  },
  /*::[*/
  426: {
    /* n:"UserSViewBegin", */
  },
  /*::[*/
  427: {
    /* n:"UserSViewEnd", */
  },
  /*::[*/
  428: {
    /* n:"RRDUserView", */
  },
  /*::[*/
  429: {
    /* n:"Qsi", */
  },
  /*::[*/
  430: {
    /* n:"SupBook", */
    f: To
  },
  /*::[*/
  431: {
    /* n:"Prot4Rev", */
    f: He
  },
  /*::[*/
  432: {
    /* n:"CondFmt", */
  },
  /*::[*/
  433: {
    /* n:"CF", */
  },
  /*::[*/
  434: {
    /* n:"DVal", */
  },
  /*::[*/
  437: {
    /* n:"DConBin", */
  },
  /*::[*/
  438: {
    /* n:"TxO", */
    f: No
  },
  /*::[*/
  439: {
    /* n:"RefreshAll", */
    f: He
  },
  //
  /*::[*/
  440: {
    /* n:"HLink", */
    f: bo
  },
  /*::[*/
  441: {
    /* n:"Lel", */
  },
  /*::[*/
  442: {
    /* n:"CodeName", */
    f: rt
  },
  /*::[*/
  443: {
    /* n:"SXFDBType", */
  },
  /*::[*/
  444: {
    /* n:"Prot4RevPass", */
    f: Xe
  },
  /*::[*/
  445: {
    /* n:"ObNoMacros", */
  },
  /*::[*/
  446: {
    /* n:"Dv", */
  },
  /*::[*/
  448: {
    /* n:"Excel9File", */
    f: $r
  },
  /*::[*/
  449: {
    /* n:"RecalcId", */
    f: no,
    r: 2
  },
  /*::[*/
  450: {
    /* n:"EntExU2", */
    f: $r
  },
  /*::[*/
  512: {
    /* n:"Dimensions", */
    f: xn
  },
  /*::[*/
  513: {
    /* n:"Blank", */
    f: Vo
  },
  /*::[*/
  515: {
    /* n:"Number", */
    f: Eo
  },
  /*::[*/
  516: {
    /* n:"Label", */
    f: lo
  },
  /*::[*/
  517: {
    /* n:"BoolErr", */
    f: dn
  },
  /*::[*/
  519: {
    /* n:"String", */
    f: zo
  },
  /*::[*/
  520: {
    /* n:"Row", */
    f: ao
  },
  /*::[*/
  523: {
    /* n:"Index", */
  },
  /*::[*/
  545: {
    /* n:"Array", */
    f: mn
  },
  /*::[*/
  549: {
    /* n:"DefaultRowHeight", */
    f: hn
  },
  /*::[*/
  566: {
    /* n:"Table", */
  },
  /*::[*/
  574: {
    /* n:"Window2", */
    f: io
  },
  /*::[*/
  638: {
    /* n:"RK", */
    f: xo
  },
  /*::[*/
  659: {
    /* n:"Style", */
  },
  /*::[*/
  1048: {
    /* n:"BigName", */
  },
  /*::[*/
  1054: {
    /* n:"Format", */
    f: uo
  },
  /*::[*/
  1084: {
    /* n:"ContinueBigName", */
  },
  /*::[*/
  1212: {
    /* n:"ShrFmla", */
    f: Fo
  },
  /*::[*/
  2048: {
    /* n:"HLinkTooltip", */
    f: Po
  },
  /*::[*/
  2049: {
    /* n:"WebPub", */
  },
  /*::[*/
  2050: {
    /* n:"QsiSXTag", */
  },
  /*::[*/
  2051: {
    /* n:"DBQueryExt", */
  },
  /*::[*/
  2052: {
    /* n:"ExtString", */
  },
  /*::[*/
  2053: {
    /* n:"TxtQry", */
  },
  /*::[*/
  2054: {
    /* n:"Qsir", */
  },
  /*::[*/
  2055: {
    /* n:"Qsif", */
  },
  /*::[*/
  2056: {
    /* n:"RRDTQSIF", */
  },
  /*::[*/
  2057: {
    /* n:"BOF", */
    f: ut
  },
  /*::[*/
  2058: {
    /* n:"OleDbConn", */
  },
  /*::[*/
  2059: {
    /* n:"WOpt", */
  },
  /*::[*/
  2060: {
    /* n:"SXViewEx", */
  },
  /*::[*/
  2061: {
    /* n:"SXTH", */
  },
  /*::[*/
  2062: {
    /* n:"SXPIEx", */
  },
  /*::[*/
  2063: {
    /* n:"SXVDTEx", */
  },
  /*::[*/
  2064: {
    /* n:"SXViewEx9", */
  },
  /*::[*/
  2066: {
    /* n:"ContinueFrt", */
  },
  /*::[*/
  2067: {
    /* n:"RealTimeData", */
  },
  /*::[*/
  2128: {
    /* n:"ChartFrtInfo", */
  },
  /*::[*/
  2129: {
    /* n:"FrtWrapper", */
  },
  /*::[*/
  2130: {
    /* n:"StartBlock", */
  },
  /*::[*/
  2131: {
    /* n:"EndBlock", */
  },
  /*::[*/
  2132: {
    /* n:"StartObject", */
  },
  /*::[*/
  2133: {
    /* n:"EndObject", */
  },
  /*::[*/
  2134: {
    /* n:"CatLab", */
  },
  /*::[*/
  2135: {
    /* n:"YMult", */
  },
  /*::[*/
  2136: {
    /* n:"SXViewLink", */
  },
  /*::[*/
  2137: {
    /* n:"PivotChartBits", */
  },
  /*::[*/
  2138: {
    /* n:"FrtFontList", */
  },
  /*::[*/
  2146: {
    /* n:"SheetExt", */
  },
  /*::[*/
  2147: {
    /* n:"BookExt", */
    r: 12
  },
  /*::[*/
  2148: {
    /* n:"SXAddl", */
  },
  /*::[*/
  2149: {
    /* n:"CrErr", */
  },
  /*::[*/
  2150: {
    /* n:"HFPicture", */
  },
  /*::[*/
  2151: {
    /* n:"FeatHdr", */
    f: $r
  },
  /*::[*/
  2152: {
    /* n:"Feat", */
  },
  /*::[*/
  2154: {
    /* n:"DataLabExt", */
  },
  /*::[*/
  2155: {
    /* n:"DataLabExtContents", */
  },
  /*::[*/
  2156: {
    /* n:"CellWatch", */
  },
  /*::[*/
  2161: {
    /* n:"FeatHdr11", */
  },
  /*::[*/
  2162: {
    /* n:"Feature11", */
  },
  /*::[*/
  2164: {
    /* n:"DropDownObjIds", */
  },
  /*::[*/
  2165: {
    /* n:"ContinueFrt11", */
  },
  /*::[*/
  2166: {
    /* n:"DConn", */
  },
  /*::[*/
  2167: {
    /* n:"List12", */
  },
  /*::[*/
  2168: {
    /* n:"Feature12", */
  },
  /*::[*/
  2169: {
    /* n:"CondFmt12", */
  },
  /*::[*/
  2170: {
    /* n:"CF12", */
  },
  /*::[*/
  2171: {
    /* n:"CFEx", */
  },
  /*::[*/
  2172: {
    /* n:"XFCRC", */
    f: Uo,
    r: 12
  },
  /*::[*/
  2173: {
    /* n:"XFExt", */
    f: pu,
    r: 12
  },
  /*::[*/
  2174: {
    /* n:"AutoFilter12", */
  },
  /*::[*/
  2175: {
    /* n:"ContinueFrt12", */
  },
  /*::[*/
  2180: {
    /* n:"MDTInfo", */
  },
  /*::[*/
  2181: {
    /* n:"MDXStr", */
  },
  /*::[*/
  2182: {
    /* n:"MDXTuple", */
  },
  /*::[*/
  2183: {
    /* n:"MDXSet", */
  },
  /*::[*/
  2184: {
    /* n:"MDXProp", */
  },
  /*::[*/
  2185: {
    /* n:"MDXKPI", */
  },
  /*::[*/
  2186: {
    /* n:"MDB", */
  },
  /*::[*/
  2187: {
    /* n:"PLV", */
  },
  /*::[*/
  2188: {
    /* n:"Compat12", */
    f: He,
    r: 12
  },
  /*::[*/
  2189: {
    /* n:"DXF", */
  },
  /*::[*/
  2190: {
    /* n:"TableStyles", */
    r: 12
  },
  /*::[*/
  2191: {
    /* n:"TableStyle", */
  },
  /*::[*/
  2192: {
    /* n:"TableStyleElement", */
  },
  /*::[*/
  2194: {
    /* n:"StyleExt", */
  },
  /*::[*/
  2195: {
    /* n:"NamePublish", */
  },
  /*::[*/
  2196: {
    /* n:"NameCmt", */
    f: Ao,
    r: 12
  },
  /*::[*/
  2197: {
    /* n:"SortData", */
  },
  /*::[*/
  2198: {
    /* n:"Theme", */
    f: ou,
    r: 12
  },
  /*::[*/
  2199: {
    /* n:"GUIDTypeLib", */
  },
  /*::[*/
  2200: {
    /* n:"FnGrp12", */
  },
  /*::[*/
  2201: {
    /* n:"NameFnGrp12", */
  },
  /*::[*/
  2202: {
    /* n:"MTRSettings", */
    f: So,
    r: 12
  },
  /*::[*/
  2203: {
    /* n:"CompressPictures", */
    f: $r
  },
  /*::[*/
  2204: {
    /* n:"HeaderFooter", */
  },
  /*::[*/
  2205: {
    /* n:"CrtLayout12", */
  },
  /*::[*/
  2206: {
    /* n:"CrtMlFrt", */
  },
  /*::[*/
  2207: {
    /* n:"CrtMlFrtContinue", */
  },
  /*::[*/
  2211: {
    /* n:"ForceFullCalculation", */
    f: to
  },
  /*::[*/
  2212: {
    /* n:"ShapePropsStream", */
  },
  /*::[*/
  2213: {
    /* n:"TextPropsStream", */
  },
  /*::[*/
  2214: {
    /* n:"RichTextStream", */
  },
  /*::[*/
  2215: {
    /* n:"CrtLayout12A", */
  },
  /*::[*/
  4097: {
    /* n:"Units", */
  },
  /*::[*/
  4098: {
    /* n:"Chart", */
  },
  /*::[*/
  4099: {
    /* n:"Series", */
  },
  /*::[*/
  4102: {
    /* n:"DataFormat", */
  },
  /*::[*/
  4103: {
    /* n:"LineFormat", */
  },
  /*::[*/
  4105: {
    /* n:"MarkerFormat", */
  },
  /*::[*/
  4106: {
    /* n:"AreaFormat", */
  },
  /*::[*/
  4107: {
    /* n:"PieFormat", */
  },
  /*::[*/
  4108: {
    /* n:"AttachedLabel", */
  },
  /*::[*/
  4109: {
    /* n:"SeriesText", */
  },
  /*::[*/
  4116: {
    /* n:"ChartFormat", */
  },
  /*::[*/
  4117: {
    /* n:"Legend", */
  },
  /*::[*/
  4118: {
    /* n:"SeriesList", */
  },
  /*::[*/
  4119: {
    /* n:"Bar", */
  },
  /*::[*/
  4120: {
    /* n:"Line", */
  },
  /*::[*/
  4121: {
    /* n:"Pie", */
  },
  /*::[*/
  4122: {
    /* n:"Area", */
  },
  /*::[*/
  4123: {
    /* n:"Scatter", */
  },
  /*::[*/
  4124: {
    /* n:"CrtLine", */
  },
  /*::[*/
  4125: {
    /* n:"Axis", */
  },
  /*::[*/
  4126: {
    /* n:"Tick", */
  },
  /*::[*/
  4127: {
    /* n:"ValueRange", */
  },
  /*::[*/
  4128: {
    /* n:"CatSerRange", */
  },
  /*::[*/
  4129: {
    /* n:"AxisLine", */
  },
  /*::[*/
  4130: {
    /* n:"CrtLink", */
  },
  /*::[*/
  4132: {
    /* n:"DefaultText", */
  },
  /*::[*/
  4133: {
    /* n:"Text", */
  },
  /*::[*/
  4134: {
    /* n:"FontX", */
    f: Xe
  },
  /*::[*/
  4135: {
    /* n:"ObjectLink", */
  },
  /*::[*/
  4146: {
    /* n:"Frame", */
  },
  /*::[*/
  4147: {
    /* n:"Begin", */
  },
  /*::[*/
  4148: {
    /* n:"End", */
  },
  /*::[*/
  4149: {
    /* n:"PlotArea", */
  },
  /*::[*/
  4154: {
    /* n:"Chart3d", */
  },
  /*::[*/
  4156: {
    /* n:"PicF", */
  },
  /*::[*/
  4157: {
    /* n:"DropBar", */
  },
  /*::[*/
  4158: {
    /* n:"Radar", */
  },
  /*::[*/
  4159: {
    /* n:"Surf", */
  },
  /*::[*/
  4160: {
    /* n:"RadarArea", */
  },
  /*::[*/
  4161: {
    /* n:"AxisParent", */
  },
  /*::[*/
  4163: {
    /* n:"LegendException", */
  },
  /*::[*/
  4164: {
    /* n:"ShtProps", */
    f: Wo
  },
  /*::[*/
  4165: {
    /* n:"SerToCrt", */
  },
  /*::[*/
  4166: {
    /* n:"AxesUsed", */
  },
  /*::[*/
  4168: {
    /* n:"SBaseRef", */
  },
  /*::[*/
  4170: {
    /* n:"SerParent", */
  },
  /*::[*/
  4171: {
    /* n:"SerAuxTrend", */
  },
  /*::[*/
  4174: {
    /* n:"IFmtRecord", */
  },
  /*::[*/
  4175: {
    /* n:"Pos", */
  },
  /*::[*/
  4176: {
    /* n:"AlRuns", */
  },
  /*::[*/
  4177: {
    /* n:"BRAI", */
  },
  /*::[*/
  4187: {
    /* n:"SerAuxErrBar", */
  },
  /*::[*/
  4188: {
    /* n:"ClrtClient", */
    f: Mo
  },
  /*::[*/
  4189: {
    /* n:"SerFmt", */
  },
  /*::[*/
  4191: {
    /* n:"Chart3DBarShape", */
  },
  /*::[*/
  4192: {
    /* n:"Fbi", */
  },
  /*::[*/
  4193: {
    /* n:"BopPop", */
  },
  /*::[*/
  4194: {
    /* n:"AxcExt", */
  },
  /*::[*/
  4195: {
    /* n:"Dat", */
  },
  /*::[*/
  4196: {
    /* n:"PlotGrowth", */
  },
  /*::[*/
  4197: {
    /* n:"SIIndex", */
  },
  /*::[*/
  4198: {
    /* n:"GelFrame", */
  },
  /*::[*/
  4199: {
    /* n:"BopPopCustom", */
  },
  /*::[*/
  4200: {
    /* n:"Fbi2", */
  },
  /*::[*/
  0: {
    /* n:"Dimensions", */
    f: xn
  },
  /*::[*/
  1: {
    /* n:"BIFF2BLANK", */
  },
  /*::[*/
  2: {
    /* n:"BIFF2INT", */
    f: Yo
  },
  /*::[*/
  3: {
    /* n:"BIFF2NUM", */
    f: Ko
  },
  /*::[*/
  4: {
    /* n:"BIFF2STR", */
    f: $o
  },
  /*::[*/
  5: {
    /* n:"BoolErr", */
    f: dn
  },
  /*::[*/
  7: {
    /* n:"String", */
    f: jo
  },
  /*::[*/
  8: {
    /* n:"BIFF2ROW", */
  },
  /*::[*/
  9: {
    /* n:"BOF", */
    f: ut
  },
  /*::[*/
  11: {
    /* n:"Index", */
  },
  /*::[*/
  22: {
    /* n:"ExternCount", */
    f: Xe
  },
  /*::[*/
  30: {
    /* n:"BIFF2FORMAT", */
    f: ho
  },
  /*::[*/
  31: {
    /* n:"BIFF2FMTCNT", */
  },
  /* 16-bit cnt of BIFF2FORMAT records */
  /*::[*/
  32: {
    /* n:"BIFF2COLINFO", */
  },
  /*::[*/
  33: {
    /* n:"Array", */
    f: mn
  },
  /*::[*/
  36: {
    /* n:"COLWIDTH", */
  },
  /*::[*/
  37: {
    /* n:"DefaultRowHeight", */
    f: hn
  },
  // 0x2c ??
  // 0x2d ??
  // 0x2e ??
  // 0x30 FONTCOUNT: number of fonts
  /*::[*/
  50: {
    /* n:"BIFF2FONTXTRA", */
    f: Jo
  },
  // 0x35: INFOOPTS
  // 0x36: TABLE (BIFF2 only)
  // 0x37: TABLE2 (BIFF2 only)
  // 0x38: WNDESK
  // 0x39 ??
  // 0x3a: BEGINPREF
  // 0x3b: ENDPREF
  /*::[*/
  62: {
    /* n:"BIFF2WINDOW2", */
  },
  // 0x3f ??
  // 0x46: SHOWSCROLL
  // 0x47: SHOWFORMULA
  // 0x48: STATUSBAR
  // 0x49: SHORTMENUS
  // 0x4A:
  // 0x4B:
  // 0x4C:
  // 0x4E:
  // 0x4F:
  // 0x58: TOOLBAR (BIFF3)
  /* - - - */
  /*::[*/
  52: {
    /* n:"DDEObjName", */
  },
  /*::[*/
  67: {
    /* n:"BIFF2XF", */
  },
  /*::[*/
  68: {
    /* n:"BIFF2XFINDEX", */
    f: Xe
  },
  /*::[*/
  69: {
    /* n:"BIFF2FONTCLR", */
  },
  /*::[*/
  86: {
    /* n:"BIFF4FMTCNT", */
  },
  /* 16-bit cnt, similar to BIFF2 */
  /*::[*/
  126: {
    /* n:"RK", */
  },
  /* Not necessarily same as 0x027e */
  /*::[*/
  127: {
    /* n:"ImData", */
    f: Xo
  },
  /*::[*/
  135: {
    /* n:"Addin", */
  },
  /*::[*/
  136: {
    /* n:"Edg", */
  },
  /*::[*/
  137: {
    /* n:"Pub", */
  },
  // 0x8A
  // 0x8B LH: alternate menu key flag (BIFF3/4)
  // 0x8E
  // 0x8F
  /*::[*/
  145: {
    /* n:"Sub", */
  },
  // 0x93 STYLE
  /*::[*/
  148: {
    /* n:"LHRecord", */
  },
  /*::[*/
  149: {
    /* n:"LHNGraph", */
  },
  /*::[*/
  150: {
    /* n:"Sound", */
  },
  // 0xA2 FNPROTO: function prototypes (BIFF4)
  // 0xA3
  // 0xA8
  /*::[*/
  169: {
    /* n:"CoordList", */
  },
  /*::[*/
  171: {
    /* n:"GCW", */
  },
  /*::[*/
  188: {
    /* n:"ShrFmla", */
  },
  /* Not necessarily same as 0x04bc */
  /*::[*/
  191: {
    /* n:"ToolbarHdr", */
  },
  /*::[*/
  192: {
    /* n:"ToolbarEnd", */
  },
  /*::[*/
  194: {
    /* n:"AddMenu", */
  },
  /*::[*/
  195: {
    /* n:"DelMenu", */
  },
  /*::[*/
  214: {
    /* n:"RString", */
    f: qo
  },
  /*::[*/
  223: {
    /* n:"UDDesc", */
  },
  /*::[*/
  234: {
    /* n:"TabIdConf", */
  },
  /*::[*/
  354: {
    /* n:"XL5Modify", */
  },
  /*::[*/
  421: {
    /* n:"FileSharing2", */
  },
  /*::[*/
  518: {
    /* n:"Formula", */
    f: Ut
  },
  /*::[*/
  521: {
    /* n:"BOF", */
    f: ut
  },
  /*::[*/
  536: {
    /* n:"Lbl", */
    f: gn
  },
  /*::[*/
  547: {
    /* n:"ExternName", */
    f: vn
  },
  /*::[*/
  561: {
    /* n:"Font", */
  },
  /*::[*/
  579: {
    /* n:"BIFF3XF", */
  },
  /*::[*/
  1030: {
    /* n:"Formula", */
    f: Ut
  },
  /*::[*/
  1033: {
    /* n:"BOF", */
    f: ut
  },
  /*::[*/
  1091: {
    /* n:"BIFF4XF", */
  },
  /*::[*/
  2157: {
    /* n:"FeatInfo", */
  },
  /*::[*/
  2163: {
    /* n:"FeatInfo11", */
  },
  /*::[*/
  2177: {
    /* n:"SXAddl12", */
  },
  /*::[*/
  2240: {
    /* n:"AutoWebPub", */
  },
  /*::[*/
  2241: {
    /* n:"ListObj", */
  },
  /*::[*/
  2242: {
    /* n:"ListField", */
  },
  /*::[*/
  2243: {
    /* n:"ListDV", */
  },
  /*::[*/
  2244: {
    /* n:"ListCondFmt", */
  },
  /*::[*/
  2245: {
    /* n:"ListCF", */
  },
  /*::[*/
  2246: {
    /* n:"FMQry", */
  },
  /*::[*/
  2247: {
    /* n:"FMSQry", */
  },
  /*::[*/
  2248: {
    /* n:"PLV", */
  },
  /*::[*/
  2249: {
    /* n:"LnExt", */
  },
  /*::[*/
  2250: {
    /* n:"MkrExt", */
  },
  /*::[*/
  2251: {
    /* n:"CrtCoopt", */
  },
  /*::[*/
  2262: {
    /* n:"FRTArchId$", */
    r: 12
  },
  /*::[*/
  29282: {}
};
function yr(e, a, r, n) {
  var t = a;
  if (!isNaN(t)) {
    var s = (r || []).length || 0, i = e.next(4);
    i.write_shift(2, t), i.write_shift(2, s), /*:: len != null &&*/
    s > 0 && Es(r) && e.push(r);
  }
}
function On(e, a) {
  var r = a || {}, n = r.dense ? [] : {};
  e = e.replace(/<!--.*?-->/g, "");
  var t = e.match(/<table/i);
  if (!t) throw new Error("Invalid HTML: could not find <table>");
  var s = e.match(/<\/table/i), i = t.index, c = s && s.index || e.length, o = mc(e.slice(i, c), /(:?<tr[^>]*>)/i, "<tr>"), f = -1, l = 0, u = 0, x = 0, d = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }, p = [];
  for (i = 0; i < o.length; ++i) {
    var h = o[i].trim(), g = h.slice(0, 3).toLowerCase();
    if (g == "<tr") {
      if (++f, r.sheetRows && r.sheetRows <= f) {
        --f;
        break;
      }
      l = 0;
      continue;
    }
    if (!(g != "<td" && g != "<th")) {
      var O = h.split(/<\/t[dh]>/i);
      for (c = 0; c < O.length; ++c) {
        var I = O[c].trim();
        if (I.match(/<t[dh]/i)) {
          for (var T = I, U = 0; T.charAt(0) == "<" && (U = T.indexOf(">")) > -1; ) T = T.slice(U + 1);
          for (var V = 0; V < p.length; ++V) {
            var B = p[V];
            B.s.c == l && B.s.r < f && f <= B.e.r && (l = B.e.c + 1, V = -1);
          }
          var A = ge(I.slice(0, I.indexOf(">")));
          x = A.colspan ? +A.colspan : 1, ((u = +A.rowspan) > 1 || x > 1) && p.push({ s: { r: f, c: l }, e: { r: f + (u || 1) - 1, c: l + x - 1 } });
          var _ = A.t || A["data-t"] || "";
          if (!T.length) {
            l += x;
            continue;
          }
          if (T = cs(T), d.s.r > f && (d.s.r = f), d.e.r < f && (d.e.r = f), d.s.c > l && (d.s.c = l), d.e.c < l && (d.e.c = l), !T.length) {
            l += x;
            continue;
          }
          var m = { t: "s", v: T };
          r.raw || !T.trim().length || _ == "s" || (T === "TRUE" ? m = { t: "b", v: !0 } : T === "FALSE" ? m = { t: "b", v: !1 } : isNaN(Ir(T)) ? isNaN(Ta(T).getDate()) || (m = { t: "d", v: qe(T) }, r.cellDates || (m = { t: "n", v: pr(m.v) }), m.z = r.dateNF || Ee[14]) : m = { t: "n", v: Ir(T) }), r.dense ? (n[f] || (n[f] = []), n[f][l] = m) : n[me({ r: f, c: l })] = m, l += x;
        }
      }
    }
  }
  return n["!ref"] = Se(d), p.length && (n["!merges"] = p), n;
}
function Jx(e, a, r, n) {
  for (var t = e["!merges"] || [], s = [], i = a.s.c; i <= a.e.c; ++i) {
    for (var c = 0, o = 0, f = 0; f < t.length; ++f)
      if (!(t[f].s.r > r || t[f].s.c > i) && !(t[f].e.r < r || t[f].e.c < i)) {
        if (t[f].s.r < r || t[f].s.c < i) {
          c = -1;
          break;
        }
        c = t[f].e.r - t[f].s.r + 1, o = t[f].e.c - t[f].s.c + 1;
        break;
      }
    if (!(c < 0)) {
      var l = me({ r, c: i }), u = n.dense ? (e[r] || [])[i] : e[l], x = u && u.v != null && (u.h || o0(u.w || (zr(u), u.w) || "")) || "", d = {};
      c > 1 && (d.rowspan = c), o > 1 && (d.colspan = o), n.editable ? x = '<span contenteditable="true">' + x + "</span>" : u && (d["data-t"] = u && u.t || "z", u.v != null && (d["data-v"] = u.v), u.z != null && (d["data-z"] = u.z), u.l && (u.l.Target || "#").charAt(0) != "#" && (x = '<a href="' + u.l.Target + '">' + x + "</a>")), d.id = (n.id || "sjs") + "-" + l, s.push(bc("td", x, d));
    }
  }
  var p = "<tr>";
  return p + s.join("") + "</tr>";
}
var qx = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', Zx = "</body></html>";
function Qx(e, a) {
  var r = e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
  if (!r || r.length == 0) throw new Error("Invalid HTML: could not find <table>");
  if (r.length == 1) return ea(On(r[0], a), a);
  var n = C0();
  return r.forEach(function(t, s) {
    y0(n, On(t, a), "Sheet" + (s + 1));
  }), n;
}
function ed(e, a, r) {
  var n = [];
  return n.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function rd(e, a) {
  var r = a || {}, n = r.header != null ? r.header : qx, t = r.footer != null ? r.footer : Zx, s = [n], i = Aa(e["!ref"]);
  r.dense = Array.isArray(e), s.push(ed(e, i, r));
  for (var c = i.s.r; c <= i.e.r; ++c) s.push(Jx(e, i, c, r));
  return s.push("</table>" + t), s.join("");
}
function hi(e, a, r) {
  var n = r || {}, t = 0, s = 0;
  if (n.origin != null)
    if (typeof n.origin == "number") t = n.origin;
    else {
      var i = typeof n.origin == "string" ? xr(n.origin) : n.origin;
      t = i.r, s = i.c;
    }
  var c = a.getElementsByTagName("tr"), o = Math.min(n.sheetRows || 1e7, c.length), f = { s: { r: 0, c: 0 }, e: { r: t, c: s } };
  if (e["!ref"]) {
    var l = Aa(e["!ref"]);
    f.s.r = Math.min(f.s.r, l.s.r), f.s.c = Math.min(f.s.c, l.s.c), f.e.r = Math.max(f.e.r, l.e.r), f.e.c = Math.max(f.e.c, l.e.c), t == -1 && (f.e.r = t = l.e.r + 1);
  }
  var u = [], x = 0, d = e["!rows"] || (e["!rows"] = []), p = 0, h = 0, g = 0, O = 0, I = 0, T = 0;
  for (e["!cols"] || (e["!cols"] = []); p < c.length && h < o; ++p) {
    var U = c[p];
    if (Dn(U)) {
      if (n.display) continue;
      d[h] = { hidden: !0 };
    }
    var V = U.children;
    for (g = O = 0; g < V.length; ++g) {
      var B = V[g];
      if (!(n.display && Dn(B))) {
        var A = B.hasAttribute("data-v") ? B.getAttribute("data-v") : B.hasAttribute("v") ? B.getAttribute("v") : cs(B.innerHTML), _ = B.getAttribute("data-z") || B.getAttribute("z");
        for (x = 0; x < u.length; ++x) {
          var m = u[x];
          m.s.c == O + s && m.s.r < h + t && h + t <= m.e.r && (O = m.e.c + 1 - s, x = -1);
        }
        T = +B.getAttribute("colspan") || 1, ((I = +B.getAttribute("rowspan") || 1) > 1 || T > 1) && u.push({ s: { r: h + t, c: O + s }, e: { r: h + t + (I || 1) - 1, c: O + s + (T || 1) - 1 } });
        var R = { t: "s", v: A }, P = B.getAttribute("data-t") || B.getAttribute("t") || "";
        A != null && (A.length == 0 ? R.t = P || "z" : n.raw || A.trim().length == 0 || P == "s" || (A === "TRUE" ? R = { t: "b", v: !0 } : A === "FALSE" ? R = { t: "b", v: !1 } : isNaN(Ir(A)) ? isNaN(Ta(A).getDate()) || (R = { t: "d", v: qe(A) }, n.cellDates || (R = { t: "n", v: pr(R.v) }), R.z = n.dateNF || Ee[14]) : R = { t: "n", v: Ir(A) })), R.z === void 0 && _ != null && (R.z = _);
        var D = "", X = B.getElementsByTagName("A");
        if (X && X.length) for (var se = 0; se < X.length && !(X[se].hasAttribute("href") && (D = X[se].getAttribute("href"), D.charAt(0) != "#")); ++se) ;
        D && D.charAt(0) != "#" && (R.l = { Target: D }), n.dense ? (e[h + t] || (e[h + t] = []), e[h + t][O + s] = R) : e[me({ c: O + s, r: h + t })] = R, f.e.c < O + s && (f.e.c = O + s), O += T;
      }
    }
    ++h;
  }
  return u.length && (e["!merges"] = (e["!merges"] || []).concat(u)), f.e.r = Math.max(f.e.r, h - 1 + t), e["!ref"] = Se(f), h >= o && (e["!fullref"] = Se((f.e.r = c.length - p + h - 1 + t, f))), e;
}
function xi(e, a) {
  var r = a || {}, n = r.dense ? [] : {};
  return hi(n, e, a);
}
function ad(e, a) {
  return ea(xi(e, a), a);
}
function Dn(e) {
  var a = "", r = td(e);
  return r && (a = r(e).getPropertyValue("display")), a || (a = e.style && e.style.display), a === "none";
}
function td(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function nd(e) {
  var a = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(n, t) {
    return Array(parseInt(t, 10) + 1).join(" ");
  }).replace(/<text:tab[^>]*\/>/g, "	").replace(/<text:line-break\/>/g, `
`), r = Ce(a.replace(/<[^>]*>/g, ""));
  return [r];
}
var Rn = {
  /* ods name: [short ssf fmt, long ssf fmt] */
  day: ["d", "dd"],
  month: ["m", "mm"],
  year: ["y", "yy"],
  hours: ["h", "hh"],
  minutes: ["m", "mm"],
  seconds: ["s", "ss"],
  "am-pm": ["A/P", "AM/PM"],
  "day-of-week": ["ddd", "dddd"],
  era: ["e", "ee"],
  /* there is no native representation of LO "Q" format */
  quarter: ["\\Qm", 'm\\"th quarter"']
};
function di(e, a) {
  var r = a || {}, n = l0(e), t = [], s, i, c = { name: "" }, o = "", f = 0, l, u, x = {}, d = [], p = r.dense ? [] : {}, h, g, O = { value: "" }, I = "", T = 0, U = [], V = -1, B = -1, A = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } }, _ = 0, m = {}, R = [], P = {}, D = 0, X = 0, se = [], re = 1, fe = 1, q = [], ve = { Names: [] }, M = {}, he = ["", ""], te = [], w = {}, b = "", L = 0, N = !1, K = !1, ee = 0;
  for ($a.lastIndex = 0, n = n.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, ""); h = $a.exec(n); ) switch (h[3] = h[3].replace(/_.*$/, "")) {
    case "table":
    case "工作表":
      h[1] === "/" ? (A.e.c >= A.s.c && A.e.r >= A.s.r ? p["!ref"] = Se(A) : p["!ref"] = "A1:A1", r.sheetRows > 0 && r.sheetRows <= A.e.r && (p["!fullref"] = p["!ref"], A.e.r = r.sheetRows - 1, p["!ref"] = Se(A)), R.length && (p["!merges"] = R), se.length && (p["!rows"] = se), l.name = l.名称 || l.name, typeof JSON < "u" && JSON.stringify(l), d.push(l.name), x[l.name] = p, K = !1) : h[0].charAt(h[0].length - 2) !== "/" && (l = ge(h[0], !1), V = B = -1, A.s.r = A.s.c = 1e7, A.e.r = A.e.c = 0, p = r.dense ? [] : {}, R = [], se = [], K = !0);
      break;
    case "table-row-group":
      h[1] === "/" ? --_ : ++_;
      break;
    case "table-row":
    case "行":
      if (h[1] === "/") {
        V += re, re = 1;
        break;
      }
      if (u = ge(h[0], !1), u.行号 ? V = u.行号 - 1 : V == -1 && (V = 0), re = +u["number-rows-repeated"] || 1, re < 10) for (ee = 0; ee < re; ++ee) _ > 0 && (se[V + ee] = { level: _ });
      B = -1;
      break;
    case "covered-table-cell":
      h[1] !== "/" && ++B, r.sheetStubs && (r.dense ? (p[V] || (p[V] = []), p[V][B] = { t: "z" }) : p[me({ r: V, c: B })] = { t: "z" }), I = "", U = [];
      break;
    /* stub */
    case "table-cell":
    case "数据":
      if (h[0].charAt(h[0].length - 2) === "/")
        ++B, O = ge(h[0], !1), fe = parseInt(O["number-columns-repeated"] || "1", 10), g = {
          t: "z",
          v: null
          /*:: , z:null, w:"",c:[]*/
        }, O.formula && r.cellFormula != !1 && (g.f = Fn(Ce(O.formula))), (O.数据类型 || O["value-type"]) == "string" && (g.t = "s", g.v = Ce(O["string-value"] || ""), r.dense ? (p[V] || (p[V] = []), p[V][B] = g) : p[me({ r: V, c: B })] = g), B += fe - 1;
      else if (h[1] !== "/") {
        ++B, I = "", T = 0, U = [], fe = 1;
        var Z = re ? V + re - 1 : V;
        if (B > A.e.c && (A.e.c = B), B < A.s.c && (A.s.c = B), V < A.s.r && (A.s.r = V), Z > A.e.r && (A.e.r = Z), O = ge(h[0], !1), te = [], w = {}, g = {
          t: O.数据类型 || O["value-type"],
          v: null
          /*:: , z:null, w:"",c:[]*/
        }, r.cellFormula)
          if (O.formula && (O.formula = Ce(O.formula)), O["number-matrix-columns-spanned"] && O["number-matrix-rows-spanned"] && (D = parseInt(O["number-matrix-rows-spanned"], 10) || 0, X = parseInt(O["number-matrix-columns-spanned"], 10) || 0, P = { s: { r: V, c: B }, e: { r: V + D - 1, c: B + X - 1 } }, g.F = Se(P), q.push([P, g.F])), O.formula) g.f = Fn(O.formula);
          else for (ee = 0; ee < q.length; ++ee)
            V >= q[ee][0].s.r && V <= q[ee][0].e.r && B >= q[ee][0].s.c && B <= q[ee][0].e.c && (g.F = q[ee][1]);
        switch ((O["number-columns-spanned"] || O["number-rows-spanned"]) && (D = parseInt(O["number-rows-spanned"], 10) || 0, X = parseInt(O["number-columns-spanned"], 10) || 0, P = { s: { r: V, c: B }, e: { r: V + D - 1, c: B + X - 1 } }, R.push(P)), O["number-columns-repeated"] && (fe = parseInt(O["number-columns-repeated"], 10)), g.t) {
          case "boolean":
            g.t = "b", g.v = be(O["boolean-value"]);
            break;
          case "float":
            g.t = "n", g.v = parseFloat(O.value);
            break;
          case "percentage":
            g.t = "n", g.v = parseFloat(O.value);
            break;
          case "currency":
            g.t = "n", g.v = parseFloat(O.value);
            break;
          case "date":
            g.t = "d", g.v = qe(O["date-value"]), r.cellDates || (g.t = "n", g.v = pr(g.v)), g.z = "m/d/yy";
            break;
          case "time":
            g.t = "n", g.v = pc(O["time-value"]) / 86400, r.cellDates && (g.t = "d", g.v = yt(g.v)), g.z = "HH:MM:SS";
            break;
          case "number":
            g.t = "n", g.v = parseFloat(O.数据数值);
            break;
          default:
            if (g.t === "string" || g.t === "text" || !g.t)
              g.t = "s", O["string-value"] != null && (I = Ce(O["string-value"]), U = []);
            else throw new Error("Unsupported value type " + g.t);
        }
      } else {
        if (N = !1, g.t === "s" && (g.v = I || "", U.length && (g.R = U), N = T == 0), M.Target && (g.l = M), te.length > 0 && (g.c = te, te = []), I && r.cellText !== !1 && (g.w = I), N && (g.t = "z", delete g.v), (!N || r.sheetStubs) && !(r.sheetRows && r.sheetRows <= V))
          for (var J = 0; J < re; ++J) {
            if (fe = parseInt(O["number-columns-repeated"] || "1", 10), r.dense)
              for (p[V + J] || (p[V + J] = []), p[V + J][B] = J == 0 ? g : Qe(g); --fe > 0; ) p[V + J][B + fe] = Qe(g);
            else
              for (p[me({ r: V + J, c: B })] = g; --fe > 0; ) p[me({ r: V + J, c: B + fe })] = Qe(g);
            A.e.c <= B && (A.e.c = B);
          }
        fe = parseInt(O["number-columns-repeated"] || "1", 10), B += fe - 1, fe = 0, g = {
          /*:: t:"", v:null, z:null, w:"",c:[]*/
        }, I = "", U = [];
      }
      M = {};
      break;
    // 9.1.4 <table:table-cell>
    /* pure state */
    case "document":
    // TODO: <office:document> is the root for FODS
    case "document-content":
    case "电子表格文档":
    // 3.1.3.2 <office:document-content>
    case "spreadsheet":
    case "主体":
    // 3.7 <office:spreadsheet>
    case "scripts":
    // 3.12 <office:scripts>
    case "styles":
    // TODO <office:styles>
    case "font-face-decls":
    // 3.14 <office:font-face-decls>
    case "master-styles":
      if (h[1] === "/") {
        if ((s = t.pop())[0] !== h[3]) throw "Bad state: " + s;
      } else h[0].charAt(h[0].length - 2) !== "/" && t.push([h[3], !0]);
      break;
    case "annotation":
      if (h[1] === "/") {
        if ((s = t.pop())[0] !== h[3]) throw "Bad state: " + s;
        w.t = I, U.length && (w.R = U), w.a = b, te.push(w);
      } else h[0].charAt(h[0].length - 2) !== "/" && t.push([h[3], !1]);
      b = "", L = 0, I = "", T = 0, U = [];
      break;
    case "creator":
      h[1] === "/" ? b = n.slice(L, h.index) : L = h.index + h[0].length;
      break;
    /* ignore state */
    case "meta":
    case "元数据":
    // TODO: <office:meta> <uof:元数据> FODS/UOF
    case "settings":
    // TODO: <office:settings>
    case "config-item-set":
    // TODO: <office:config-item-set>
    case "config-item-map-indexed":
    // TODO: <office:config-item-map-indexed>
    case "config-item-map-entry":
    // TODO: <office:config-item-map-entry>
    case "config-item-map-named":
    // TODO: <office:config-item-map-entry>
    case "shapes":
    // 9.2.8 <table:shapes>
    case "frame":
    // 10.4.2 <draw:frame>
    case "text-box":
    // 10.4.3 <draw:text-box>
    case "image":
    // 10.4.4 <draw:image>
    case "data-pilot-tables":
    // 9.6.2 <table:data-pilot-tables>
    case "list-style":
    // 16.30 <text:list-style>
    case "form":
    // 13.13 <form:form>
    case "dde-links":
    // 9.8 <table:dde-links>
    case "event-listeners":
    // TODO
    case "chart":
      if (h[1] === "/") {
        if ((s = t.pop())[0] !== h[3]) throw "Bad state: " + s;
      } else h[0].charAt(h[0].length - 2) !== "/" && t.push([h[3], !1]);
      I = "", T = 0, U = [];
      break;
    case "scientific-number":
      break;
    case "currency-symbol":
      break;
    case "currency-style":
      break;
    case "number-style":
    // 16.27.2 <number:number-style>
    case "percentage-style":
    // 16.27.9 <number:percentage-style>
    case "date-style":
    // 16.27.10 <number:date-style>
    case "time-style":
      if (h[1] === "/") {
        if (m[c.name] = o, (s = t.pop())[0] !== h[3]) throw "Bad state: " + s;
      } else h[0].charAt(h[0].length - 2) !== "/" && (o = "", c = ge(h[0], !1), t.push([h[3], !0]));
      break;
    case "script":
      break;
    // 3.13 <office:script>
    case "libraries":
      break;
    // TODO: <ooo:libraries>
    case "automatic-styles":
      break;
    // 3.15.3 <office:automatic-styles>
    case "default-style":
    // TODO: <style:default-style>
    case "page-layout":
      break;
    // TODO: <style:page-layout>
    case "style":
      break;
    case "map":
      break;
    // 16.3 <style:map>
    case "font-face":
      break;
    // 16.21 <style:font-face>
    case "paragraph-properties":
      break;
    // 17.6 <style:paragraph-properties>
    case "table-properties":
      break;
    // 17.15 <style:table-properties>
    case "table-column-properties":
      break;
    // 17.16 <style:table-column-properties>
    case "table-row-properties":
      break;
    // 17.17 <style:table-row-properties>
    case "table-cell-properties":
      break;
    // 17.18 <style:table-cell-properties>
    case "number":
      switch (t[t.length - 1][0]) {
        case "time-style":
        case "date-style":
          i = ge(h[0], !1), o += Rn[h[3]][i.style === "long" ? 1 : 0];
          break;
      }
      break;
    case "fraction":
      break;
    // TODO 16.27.6 <number:fraction>
    case "day":
    // 16.27.11 <number:day>
    case "month":
    // 16.27.12 <number:month>
    case "year":
    // 16.27.13 <number:year>
    case "era":
    // 16.27.14 <number:era>
    case "day-of-week":
    // 16.27.15 <number:day-of-week>
    case "week-of-year":
    // 16.27.16 <number:week-of-year>
    case "quarter":
    // 16.27.17 <number:quarter>
    case "hours":
    // 16.27.19 <number:hours>
    case "minutes":
    // 16.27.20 <number:minutes>
    case "seconds":
    // 16.27.21 <number:seconds>
    case "am-pm":
      switch (t[t.length - 1][0]) {
        case "time-style":
        case "date-style":
          i = ge(h[0], !1), o += Rn[h[3]][i.style === "long" ? 1 : 0];
          break;
      }
      break;
    case "boolean-style":
      break;
    // 16.27.23 <number:boolean-style>
    case "boolean":
      break;
    // 16.27.24 <number:boolean>
    case "text-style":
      break;
    // 16.27.25 <number:text-style>
    case "text":
      if (h[0].slice(-2) === "/>") break;
      if (h[1] === "/") switch (t[t.length - 1][0]) {
        case "number-style":
        case "date-style":
        case "time-style":
          o += n.slice(f, h.index);
          break;
      }
      else f = h.index + h[0].length;
      break;
    case "named-range":
      i = ge(h[0], !1), he = Ht(i["cell-range-address"]);
      var j = { Name: i.name, Ref: he[0] + "!" + he[1] };
      K && (j.Sheet = d.length), ve.Names.push(j);
      break;
    case "text-content":
      break;
    // 16.27.27 <number:text-content>
    case "text-properties":
      break;
    // 16.27.27 <style:text-properties>
    case "embedded-text":
      break;
    // 16.27.4 <number:embedded-text>
    case "body":
    case "电子表格":
      break;
    // 3.3 16.9.6 19.726.3
    case "forms":
      break;
    // 12.25.2 13.2
    case "table-column":
      break;
    // 9.1.6 <table:table-column>
    case "table-header-rows":
      break;
    // 9.1.7 <table:table-header-rows>
    case "table-rows":
      break;
    // 9.1.12 <table:table-rows>
    /* TODO: outline levels */
    case "table-column-group":
      break;
    // 9.1.10 <table:table-column-group>
    case "table-header-columns":
      break;
    // 9.1.11 <table:table-header-columns>
    case "table-columns":
      break;
    // 9.1.12 <table:table-columns>
    case "null-date":
      break;
    // 9.4.2 <table:null-date> TODO: date1904
    case "graphic-properties":
      break;
    // 17.21 <style:graphic-properties>
    case "calculation-settings":
      break;
    // 9.4.1 <table:calculation-settings>
    case "named-expressions":
      break;
    // 9.4.11 <table:named-expressions>
    case "label-range":
      break;
    // 9.4.9 <table:label-range>
    case "label-ranges":
      break;
    // 9.4.10 <table:label-ranges>
    case "named-expression":
      break;
    // 9.4.13 <table:named-expression>
    case "sort":
      break;
    // 9.4.19 <table:sort>
    case "sort-by":
      break;
    // 9.4.20 <table:sort-by>
    case "sort-groups":
      break;
    // 9.4.22 <table:sort-groups>
    case "tab":
      break;
    // 6.1.4 <text:tab>
    case "line-break":
      break;
    // 6.1.5 <text:line-break>
    case "span":
      break;
    // 6.1.7 <text:span>
    case "p":
    case "文本串":
      if (["master-styles"].indexOf(t[t.length - 1][0]) > -1) break;
      if (h[1] === "/" && (!O || !O["string-value"])) {
        var ie = nd(n.slice(T, h.index));
        I = (I.length > 0 ? I + `
` : "") + ie[0];
      } else
        ge(h[0], !1), T = h.index + h[0].length;
      break;
    // <text:p>
    case "s":
      break;
    // <text:s>
    case "database-range":
      if (h[1] === "/") break;
      try {
        he = Ht(ge(h[0])["target-range-address"]), x[he[0]]["!autofilter"] = { ref: he[1] };
      } catch {
      }
      break;
    case "date":
      break;
    // <*:date>
    case "object":
      break;
    // 10.4.6.2 <draw:object>
    case "title":
    case "标题":
      break;
    // <*:title> OR <uof:标题>
    case "desc":
      break;
    // <*:desc>
    case "binary-data":
      break;
    // 10.4.5 TODO: b64 blob
    /* 9.2 Advanced Tables */
    case "table-source":
      break;
    // 9.2.6
    case "scenario":
      break;
    // 9.2.6
    case "iteration":
      break;
    // 9.4.3 <table:iteration>
    case "content-validations":
      break;
    // 9.4.4 <table:
    case "content-validation":
      break;
    // 9.4.5 <table:
    case "help-message":
      break;
    // 9.4.6 <table:
    case "error-message":
      break;
    // 9.4.7 <table:
    case "database-ranges":
      break;
    // 9.4.14 <table:database-ranges>
    case "filter":
      break;
    // 9.5.2 <table:filter>
    case "filter-and":
      break;
    // 9.5.3 <table:filter-and>
    case "filter-or":
      break;
    // 9.5.4 <table:filter-or>
    case "filter-condition":
      break;
    // 9.5.5 <table:filter-condition>
    case "list-level-style-bullet":
      break;
    // 16.31 <text:
    case "list-level-style-number":
      break;
    // 16.32 <text:
    case "list-level-properties":
      break;
    // 17.19 <style:
    /* 7.3 Document Fields */
    case "sender-firstname":
    // 7.3.6.2
    case "sender-lastname":
    // 7.3.6.3
    case "sender-initials":
    // 7.3.6.4
    case "sender-title":
    // 7.3.6.5
    case "sender-position":
    // 7.3.6.6
    case "sender-email":
    // 7.3.6.7
    case "sender-phone-private":
    // 7.3.6.8
    case "sender-fax":
    // 7.3.6.9
    case "sender-company":
    // 7.3.6.10
    case "sender-phone-work":
    // 7.3.6.11
    case "sender-street":
    // 7.3.6.12
    case "sender-city":
    // 7.3.6.13
    case "sender-postal-code":
    // 7.3.6.14
    case "sender-country":
    // 7.3.6.15
    case "sender-state-or-province":
    // 7.3.6.16
    case "author-name":
    // 7.3.7.1
    case "author-initials":
    // 7.3.7.2
    case "chapter":
    // 7.3.8
    case "file-name":
    // 7.3.9
    case "template-name":
    // 7.3.9
    case "sheet-name":
      break;
    case "event-listener":
      break;
    /* TODO: FODS Properties */
    case "initial-creator":
    case "creation-date":
    case "print-date":
    case "generator":
    case "document-statistic":
    case "user-defined":
    case "editing-duration":
    case "editing-cycles":
      break;
    /* TODO: FODS Config */
    case "config-item":
      break;
    /* TODO: style tokens */
    case "page-number":
      break;
    // TODO <text:page-number>
    case "page-count":
      break;
    // TODO <text:page-count>
    case "time":
      break;
    // TODO <text:time>
    /* 9.3 Advanced Table Cells */
    case "cell-range-source":
      break;
    // 9.3.1 <table:
    case "detective":
      break;
    // 9.3.2 <table:
    case "operation":
      break;
    // 9.3.3 <table:
    case "highlighted-range":
      break;
    // 9.3.4 <table:
    /* 9.6 Data Pilot Tables <table: */
    case "data-pilot-table":
    // 9.6.3
    case "source-cell-range":
    // 9.6.5
    case "source-service":
    // 9.6.6
    case "data-pilot-field":
    // 9.6.7
    case "data-pilot-level":
    // 9.6.8
    case "data-pilot-subtotals":
    // 9.6.9
    case "data-pilot-subtotal":
    // 9.6.10
    case "data-pilot-members":
    // 9.6.11
    case "data-pilot-member":
    // 9.6.12
    case "data-pilot-display-info":
    // 9.6.13
    case "data-pilot-sort-info":
    // 9.6.14
    case "data-pilot-layout-info":
    // 9.6.15
    case "data-pilot-field-reference":
    // 9.6.16
    case "data-pilot-groups":
    // 9.6.17
    case "data-pilot-group":
    // 9.6.18
    case "data-pilot-group-member":
      break;
    /* 10.3 Drawing Shapes */
    case "rect":
      break;
    /* 14.6 DDE Connections */
    case "dde-connection-decls":
    // 14.6.2 <text:
    case "dde-connection-decl":
    // 14.6.3 <text:
    case "dde-link":
    // 14.6.4 <table:
    case "dde-source":
      break;
    case "properties":
      break;
    // 13.7 <form:properties>
    case "property":
      break;
    // 13.8 <form:property>
    case "a":
      if (h[1] !== "/") {
        if (M = ge(h[0], !1), !M.href) break;
        M.Target = Ce(M.href), delete M.href, M.Target.charAt(0) == "#" && M.Target.indexOf(".") > -1 ? (he = Ht(M.Target.slice(1)), M.Target = "#" + he[0] + "!" + he[1]) : M.Target.match(/^\.\.[\\\/]/) && (M.Target = M.Target.slice(3));
      }
      break;
    /* non-standard */
    case "table-protection":
      break;
    case "data-pilot-grand-total":
      break;
    // <table:
    case "office-document-common-attrs":
      break;
    // bare
    default:
      switch (h[2]) {
        case "dc:":
        // TODO: properties
        case "calcext:":
        // ignore undocumented extensions
        case "loext:":
        // ignore undocumented extensions
        case "ooo:":
        // ignore undocumented extensions
        case "chartooo:":
        // ignore undocumented extensions
        case "draw:":
        // TODO: drawing
        case "style:":
        // TODO: styles
        case "chart:":
        // TODO: charts
        case "form:":
        // TODO: forms
        case "uof:":
        // TODO: uof
        case "表:":
        // TODO: uof
        case "字:":
          break;
        default:
          if (r.WTF) throw new Error(h);
      }
  }
  var C = {
    Sheets: x,
    SheetNames: d,
    Workbook: ve
  };
  return r.bookSheets && delete /*::(*/
  C.Sheets, C;
}
function In(e, a) {
  a = a || {}, Ar(e, "META-INF/manifest.xml") && _f(ze(e, "META-INF/manifest.xml"), a);
  var r = Er(e, "content.xml");
  if (!r) throw new Error("Missing content.xml in ODS / UOF file");
  var n = di(Re(r), a);
  return Ar(e, "meta.xml") && (n.Props = Cs(ze(e, "meta.xml"))), n;
}
function Nn(e, a) {
  return di(e, a);
}
function w0(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Zt(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Re(la(e));
}
function Qt(e) {
  var a = e.reduce(function(t, s) {
    return t + s.length;
  }, 0), r = new Uint8Array(a), n = 0;
  return e.forEach(function(t) {
    r.set(t, n), n += t.length;
  }), r;
}
function bn(e) {
  return e -= e >> 1 & 1431655765, e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >>> 24;
}
function sd(e, a) {
  for (var r = (e[a + 15] & 127) << 7 | e[a + 14] >> 1, n = e[a + 14] & 1, t = a + 13; t >= a; --t)
    n = n * 256 + e[t];
  return (e[a + 15] & 128 ? -n : n) * Math.pow(10, r - 6176);
}
function Ja(e, a) {
  var r = a ? a[0] : 0, n = e[r] & 127;
  e:
    if (e[r++] >= 128 && (n |= (e[r] & 127) << 7, e[r++] < 128 || (n |= (e[r] & 127) << 14, e[r++] < 128) || (n |= (e[r] & 127) << 21, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128)))
      break e;
  return a && (a[0] = r), n;
}
function je(e) {
  var a = 0, r = e[a] & 127;
  e:
    if (e[a++] >= 128) {
      if (r |= (e[a] & 127) << 7, e[a++] < 128 || (r |= (e[a] & 127) << 14, e[a++] < 128) || (r |= (e[a] & 127) << 21, e[a++] < 128))
        break e;
      r |= (e[a] & 127) << 28;
    }
  return r;
}
function cr(e) {
  for (var a = [], r = [0]; r[0] < e.length; ) {
    var n = r[0], t = Ja(e, r), s = t & 7;
    t = Math.floor(t / 8);
    var i = 0, c;
    if (t == 0)
      break;
    switch (s) {
      case 0:
        {
          for (var o = r[0]; e[r[0]++] >= 128; )
            ;
          c = e.slice(o, r[0]);
        }
        break;
      case 5:
        i = 4, c = e.slice(r[0], r[0] + i), r[0] += i;
        break;
      case 1:
        i = 8, c = e.slice(r[0], r[0] + i), r[0] += i;
        break;
      case 2:
        i = Ja(e, r), c = e.slice(r[0], r[0] + i), r[0] += i;
        break;
      default:
        throw new Error("PB Type ".concat(s, " for Field ").concat(t, " at offset ").concat(n));
    }
    var f = { data: c, type: s };
    a[t] == null ? a[t] = [f] : a[t].push(f);
  }
  return a;
}
function A0(e, a) {
  return e?.map(function(r) {
    return a(r.data);
  }) || [];
}
function id(e) {
  for (var a, r = [], n = [0]; n[0] < e.length; ) {
    var t = Ja(e, n), s = cr(e.slice(n[0], n[0] + t));
    n[0] += t;
    var i = {
      id: je(s[1][0].data),
      messages: []
    };
    s[2].forEach(function(c) {
      var o = cr(c.data), f = je(o[3][0].data);
      i.messages.push({
        meta: o,
        data: e.slice(n[0], n[0] + f)
      }), n[0] += f;
    }), (a = s[3]) != null && a[0] && (i.merge = je(s[3][0].data) >>> 0 > 0), r.push(i);
  }
  return r;
}
function cd(e, a) {
  if (e != 0)
    throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], n = Ja(a, r), t = []; r[0] < a.length; ) {
    var s = a[r[0]] & 3;
    if (s == 0) {
      var i = a[r[0]++] >> 2;
      if (i < 60)
        ++i;
      else {
        var c = i - 59;
        i = a[r[0]], c > 1 && (i |= a[r[0] + 1] << 8), c > 2 && (i |= a[r[0] + 2] << 16), c > 3 && (i |= a[r[0] + 3] << 24), i >>>= 0, i++, r[0] += c;
      }
      t.push(a.slice(r[0], r[0] + i)), r[0] += i;
      continue;
    } else {
      var o = 0, f = 0;
      if (s == 1 ? (f = (a[r[0]] >> 2 & 7) + 4, o = (a[r[0]++] & 224) << 3, o |= a[r[0]++]) : (f = (a[r[0]++] >> 2) + 1, s == 2 ? (o = a[r[0]] | a[r[0] + 1] << 8, r[0] += 2) : (o = (a[r[0]] | a[r[0] + 1] << 8 | a[r[0] + 2] << 16 | a[r[0] + 3] << 24) >>> 0, r[0] += 4)), t = [Qt(t)], o == 0)
        throw new Error("Invalid offset 0");
      if (o > t[0].length)
        throw new Error("Invalid offset beyond length");
      if (f >= o)
        for (t.push(t[0].slice(-o)), f -= o; f >= t[t.length - 1].length; )
          t.push(t[t.length - 1]), f -= t[t.length - 1].length;
      t.push(t[0].slice(-o, -o + f));
    }
  }
  var l = Qt(t);
  if (l.length != n)
    throw new Error("Unexpected length: ".concat(l.length, " != ").concat(n));
  return l;
}
function fd(e) {
  for (var a = [], r = 0; r < e.length; ) {
    var n = e[r++], t = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3, a.push(cd(n, e.slice(r, r + t))), r += t;
  }
  if (r !== e.length)
    throw new Error("data is not a valid framed stream!");
  return Qt(a);
}
function od(e, a, r, n) {
  var t = w0(e), s = t.getUint32(4, !0), i = (n > 1 ? 12 : 8) + bn(s & (n > 1 ? 3470 : 398)) * 4, c = -1, o = -1, f = NaN, l = new Date(2001, 0, 1);
  s & 512 && (c = t.getUint32(i, !0), i += 4), i += bn(s & (n > 1 ? 12288 : 4096)) * 4, s & 16 && (o = t.getUint32(i, !0), i += 4), s & 32 && (f = t.getFloat64(i, !0), i += 8), s & 64 && (l.setTime(l.getTime() + t.getFloat64(i, !0) * 1e3), i += 8);
  var u;
  switch (e[2]) {
    case 0:
      break;
    case 2:
      u = { t: "n", v: f };
      break;
    case 3:
      u = { t: "s", v: a[o] };
      break;
    case 5:
      u = { t: "d", v: l };
      break;
    case 6:
      u = { t: "b", v: f > 0 };
      break;
    case 7:
      u = { t: "n", v: f / 86400 };
      break;
    case 8:
      u = { t: "e", v: 0 };
      break;
    case 9:
      if (c > -1)
        u = { t: "s", v: r[c] };
      else if (o > -1)
        u = { t: "s", v: a[o] };
      else if (!isNaN(f))
        u = { t: "n", v: f };
      else
        throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
  }
  return u;
}
function ld(e, a, r) {
  var n = w0(e), t = n.getUint32(8, !0), s = 12, i = -1, c = -1, o = NaN, f = NaN, l = new Date(2001, 0, 1);
  t & 1 && (o = sd(e, s), s += 16), t & 2 && (f = n.getFloat64(s, !0), s += 8), t & 4 && (l.setTime(l.getTime() + n.getFloat64(s, !0) * 1e3), s += 8), t & 8 && (c = n.getUint32(s, !0), s += 4), t & 16 && (i = n.getUint32(s, !0), s += 4);
  var u;
  switch (e[1]) {
    case 0:
      break;
    case 2:
      u = { t: "n", v: o };
      break;
    case 3:
      u = { t: "s", v: a[c] };
      break;
    case 5:
      u = { t: "d", v: l };
      break;
    case 6:
      u = { t: "b", v: f > 0 };
      break;
    case 7:
      u = { t: "n", v: f / 86400 };
      break;
    case 8:
      u = { t: "e", v: 0 };
      break;
    case 9:
      if (i > -1)
        u = { t: "s", v: r[i] };
      else
        throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(t & 31, " : ").concat(e.slice(0, 4)));
      break;
    case 10:
      u = { t: "n", v: o };
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(t & 31, " : ").concat(e.slice(0, 4)));
  }
  return u;
}
function ud(e, a, r) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
      return od(e, a, r, e[0]);
    case 5:
      return ld(e, a, r);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function Jr(e) {
  var a = cr(e);
  return Ja(a[1][0].data);
}
function Pn(e, a) {
  var r = cr(a.data), n = je(r[1][0].data), t = r[3], s = [];
  return (t || []).forEach(function(i) {
    var c = cr(i.data), o = je(c[1][0].data) >>> 0;
    switch (n) {
      case 1:
        s[o] = Zt(c[3][0].data);
        break;
      case 8:
        {
          var f = e[Jr(c[9][0].data)][0], l = cr(f.data), u = e[Jr(l[1][0].data)][0], x = je(u.meta[1][0].data);
          if (x != 2001)
            throw new Error("2000 unexpected reference to ".concat(x));
          var d = cr(u.data);
          s[o] = d[3].map(function(p) {
            return Zt(p.data);
          }).join("");
        }
        break;
    }
  }), s;
}
function hd(e, a) {
  var r, n, t, s, i, c, o, f, l, u, x, d, p, h, g = cr(e), O = je(g[1][0].data) >>> 0, I = je(g[2][0].data) >>> 0, T = ((n = (r = g[8]) == null ? void 0 : r[0]) == null ? void 0 : n.data) && je(g[8][0].data) > 0 || !1, U, V;
  if ((s = (t = g[7]) == null ? void 0 : t[0]) != null && s.data && a != 0)
    U = (c = (i = g[7]) == null ? void 0 : i[0]) == null ? void 0 : c.data, V = (f = (o = g[6]) == null ? void 0 : o[0]) == null ? void 0 : f.data;
  else if ((u = (l = g[4]) == null ? void 0 : l[0]) != null && u.data && a != 1)
    U = (d = (x = g[4]) == null ? void 0 : x[0]) == null ? void 0 : d.data, V = (h = (p = g[3]) == null ? void 0 : p[0]) == null ? void 0 : h.data;
  else
    throw "NUMBERS Tile missing ".concat(a, " cell storage");
  for (var B = T ? 4 : 1, A = w0(U), _ = [], m = 0; m < U.length / 2; ++m) {
    var R = A.getUint16(m * 2, !0);
    R < 65535 && _.push([m, R]);
  }
  if (_.length != I)
    throw "Expected ".concat(I, " cells, found ").concat(_.length);
  var P = [];
  for (m = 0; m < _.length - 1; ++m)
    P[_[m][0]] = V.subarray(_[m][1] * B, _[m + 1][1] * B);
  return _.length >= 1 && (P[_[_.length - 1][0]] = V.subarray(_[_.length - 1][1] * B)), { R: O, cells: P };
}
function xd(e, a) {
  var r, n = cr(a.data), t = (r = n?.[7]) != null && r[0] ? je(n[7][0].data) >>> 0 > 0 ? 1 : 0 : -1, s = A0(n[5], function(i) {
    return hd(i, t);
  });
  return {
    nrows: je(n[4][0].data) >>> 0,
    data: s.reduce(function(i, c) {
      return i[c.R] || (i[c.R] = []), c.cells.forEach(function(o, f) {
        if (i[c.R][f])
          throw new Error("Duplicate cell r=".concat(c.R, " c=").concat(f));
        i[c.R][f] = o;
      }), i;
    }, [])
  };
}
function dd(e, a, r) {
  var n, t = cr(a.data), s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (s.e.r = (je(t[6][0].data) >>> 0) - 1, s.e.r < 0)
    throw new Error("Invalid row varint ".concat(t[6][0].data));
  if (s.e.c = (je(t[7][0].data) >>> 0) - 1, s.e.c < 0)
    throw new Error("Invalid col varint ".concat(t[7][0].data));
  r["!ref"] = Se(s);
  var i = cr(t[4][0].data), c = Pn(e, e[Jr(i[4][0].data)][0]), o = (n = i[17]) != null && n[0] ? Pn(e, e[Jr(i[17][0].data)][0]) : [], f = cr(i[3][0].data), l = 0;
  f[1].forEach(function(u) {
    var x = cr(u.data), d = e[Jr(x[2][0].data)][0], p = je(d.meta[1][0].data);
    if (p != 6002)
      throw new Error("6001 unexpected reference to ".concat(p));
    var h = xd(e, d);
    h.data.forEach(function(g, O) {
      g.forEach(function(I, T) {
        var U = me({ r: l + O, c: T }), V = ud(I, c, o);
        V && (r[U] = V);
      });
    }), l += h.nrows;
  });
}
function pd(e, a) {
  var r = cr(a.data), n = { "!ref": "A1" }, t = e[Jr(r[2][0].data)], s = je(t[0].meta[1][0].data);
  if (s != 6001)
    throw new Error("6000 unexpected reference to ".concat(s));
  return dd(e, t[0], n), n;
}
function vd(e, a) {
  var r, n = cr(a.data), t = {
    name: (r = n[1]) != null && r[0] ? Zt(n[1][0].data) : "",
    sheets: []
  }, s = A0(n[2], Jr);
  return s.forEach(function(i) {
    e[i].forEach(function(c) {
      var o = je(c.meta[1][0].data);
      o == 6e3 && t.sheets.push(pd(e, c));
    });
  }), t;
}
function gd(e, a) {
  var r = C0(), n = cr(a.data), t = A0(n[1], Jr);
  if (t.forEach(function(s) {
    e[s].forEach(function(i) {
      var c = je(i.meta[1][0].data);
      if (c == 2) {
        var o = vd(e, i);
        o.sheets.forEach(function(f, l) {
          y0(r, f, l == 0 ? o.name : o.name + "_" + l, !0);
        });
      }
    });
  }), r.SheetNames.length == 0)
    throw new Error("Empty NUMBERS file");
  return r;
}
function Vt(e) {
  var a, r, n, t, s = {}, i = [];
  if (e.FullPaths.forEach(function(o) {
    if (o.match(/\.iwpv2/))
      throw new Error("Unsupported password protection");
  }), e.FileIndex.forEach(function(o) {
    if (o.name.match(/\.iwa$/)) {
      var f;
      try {
        f = fd(o.content);
      } catch (u) {
        return console.log("?? " + o.content.length + " " + (u.message || u));
      }
      var l;
      try {
        l = id(f);
      } catch (u) {
        return console.log("## " + (u.message || u));
      }
      l.forEach(function(u) {
        s[u.id] = u.messages, i.push(u.id);
      });
    }
  }), !i.length)
    throw new Error("File has no messages");
  var c = ((t = (n = (r = (a = s?.[1]) == null ? void 0 : a[0]) == null ? void 0 : r.meta) == null ? void 0 : n[1]) == null ? void 0 : t[0].data) && je(s[1][0].meta[1][0].data) == 1 && s[1][0];
  if (c || i.forEach(function(o) {
    s[o].forEach(function(f) {
      var l = je(f.meta[1][0].data) >>> 0;
      if (l == 1)
        if (!c)
          c = f;
        else
          throw new Error("Document has multiple roots");
    });
  }), !c)
    throw new Error("Cannot find Document root");
  return gd(s, c);
}
function md(e) {
  return function(r) {
    for (var n = 0; n != e.length; ++n) {
      var t = e[n];
      r[t[0]] === void 0 && (r[t[0]] = t[1]), t[2] === "n" && (r[t[0]] = Number(r[t[0]]));
    }
  };
}
function F0(e) {
  md([
    ["cellNF", !1],
    /* emit cell number format string as .z */
    ["cellHTML", !0],
    /* emit html string as .h */
    ["cellFormula", !0],
    /* emit formulae as .f */
    ["cellStyles", !1],
    /* emits style/theme as .s */
    ["cellText", !0],
    /* emit formatted text as .w */
    ["cellDates", !1],
    /* emit date cells with type `d` */
    ["sheetStubs", !1],
    /* emit empty cells */
    ["sheetRows", 0, "n"],
    /* read n rows (0 = read all rows) */
    ["bookDeps", !1],
    /* parse calculation chains */
    ["bookSheets", !1],
    /* only try to get sheet names (no Sheets) */
    ["bookProps", !1],
    /* only try to get properties (no Sheets) */
    ["bookFiles", !1],
    /* include raw file structure (keys, files, cfb) */
    ["bookVBA", !1],
    /* include vba raw data (vbaraw) */
    ["password", ""],
    /* password */
    ["WTF", !1]
    /* WTF mode (throws errors) */
  ])(e);
}
function _d(e) {
  return ga.WS.indexOf(e) > -1 ? "sheet" : e == ga.CS ? "chart" : e == ga.DS ? "dialog" : e == ga.MS ? "macro" : e && e.length ? e : "sheet";
}
function Ed(e, a) {
  if (!e) return 0;
  try {
    e = a.map(function(n) {
      return n.id || (n.id = n.strRelID), [n.name, e["!id"][n.id].Target, _d(e["!id"][n.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function Td(e, a, r, n, t, s, i, c, o, f, l, u) {
  try {
    s[n] = Ma(Er(e, r, !0), a);
    var x = ze(e, a), d;
    switch (c) {
      case "sheet":
        d = Cx(x, a, t, o, s[n], f, l, u);
        break;
      case "chart":
        if (d = yx(x, a, t, o, s[n], f, l, u), !d || !d["!drawel"]) break;
        var p = Ia(d["!drawel"].Target, a), h = Kt(p), g = Su(Er(e, p, !0), Ma(Er(e, h, !0), p)), O = Ia(g, p), I = Kt(O);
        d = lx(Er(e, O, !0), O, o, Ma(Er(e, I, !0), O), f, d);
        break;
      case "macro":
        d = Ox(x, a, t, o, s[n], f, l, u);
        break;
      case "dialog":
        d = Dx(x, a, t, o, s[n], f, l, u);
        break;
      default:
        throw new Error("Unrecognized sheet type " + c);
    }
    i[n] = d;
    var T = [];
    s && s[n] && Lr(s[n]).forEach(function(U) {
      var V = "";
      if (s[n][U].Type == ga.CMNT) {
        V = Ia(s[n][U].Target, a);
        var B = bx(ze(e, V, !0), V, o);
        if (!B || !B.length) return;
        En(d, B, !1);
      }
      s[n][U].Type == ga.TCMNT && (V = Ia(s[n][U].Target, a), T = T.concat(yu(ze(e, V, !0), o)));
    }), T && T.length && En(d, T, !0, o.people || []);
  } catch (U) {
    if (o.WTF) throw U;
  }
}
function kr(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function kd(e, a) {
  if (Zn(), a = a || {}, F0(a), Ar(e, "META-INF/manifest.xml") || Ar(e, "objectdata.xml")) return In(e, a);
  if (Ar(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u") throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof Vt < "u") {
      if (e.FileIndex) return Vt(e);
      var r = Fe.utils.cfb_new();
      return $0(e).forEach(function(se) {
        Tc(r, se, Ec(e, se));
      }), Vt(r);
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!Ar(e, "[Content_Types].xml"))
    throw Ar(e, "index.xml.gz") ? new Error("Unsupported NUMBERS 08 file") : Ar(e, "index.xml") ? new Error("Unsupported NUMBERS 09 file") : new Error("Unsupported ZIP file");
  var n = $0(e), t = gf(Er(e, "[Content_Types].xml")), s = !1, i, c;
  if (t.workbooks.length === 0 && (c = "xl/workbook.xml", ze(e, c, !0) && t.workbooks.push(c)), t.workbooks.length === 0) {
    if (c = "xl/workbook.bin", !ze(e, c, !0)) throw new Error("Could not find workbook");
    t.workbooks.push(c), s = !0;
  }
  t.workbooks[0].slice(-3) == "bin" && (s = !0);
  var o = {}, f = {};
  if (!a.bookSheets && !a.bookProps) {
    if (Ha = [], t.sst) try {
      Ha = Nx(ze(e, kr(t.sst)), t.sst, a);
    } catch (se) {
      if (a.WTF) throw se;
    }
    a.cellStyles && t.themes.length && (o = Ix(Er(e, t.themes[0].replace(/^\//, ""), !0) || "", t.themes[0], a)), t.style && (f = Rx(ze(e, kr(t.style)), t.style, o, a));
  }
  t.links.map(function(se) {
    try {
      var re = Ma(Er(e, Kt(kr(se))), se);
      return Lx(ze(e, kr(se)), re, se, a);
    } catch {
    }
  });
  var l = Sx(ze(e, kr(t.workbooks[0])), t.workbooks[0], a), u = {}, x = "";
  t.coreprops.length && (x = ze(e, kr(t.coreprops[0]), !0), x && (u = Cs(x)), t.extprops.length !== 0 && (x = ze(e, kr(t.extprops[0]), !0), x && kf(x, u, a)));
  var d = {};
  (!a.bookSheets || a.bookProps) && t.custprops.length !== 0 && (x = Er(e, kr(t.custprops[0]), !0), x && (d = Af(x, a)));
  var p = {};
  if ((a.bookSheets || a.bookProps) && (l.Sheets ? i = l.Sheets.map(function(re) {
    return re.name;
  }) : u.Worksheets && u.SheetNames.length > 0 && (i = u.SheetNames), a.bookProps && (p.Props = u, p.Custprops = d), a.bookSheets && typeof i < "u" && (p.SheetNames = i), a.bookSheets ? p.SheetNames : a.bookProps))
    return p;
  i = {};
  var h = {};
  a.bookDeps && t.calcchain && (h = Px(ze(e, kr(t.calcchain)), t.calcchain));
  var g = 0, O = {}, I, T;
  {
    var U = l.Sheets;
    u.Worksheets = U.length, u.SheetNames = [];
    for (var V = 0; V != U.length; ++V)
      u.SheetNames[V] = U[V].name;
  }
  var B = s ? "bin" : "xml", A = t.workbooks[0].lastIndexOf("/"), _ = (t.workbooks[0].slice(0, A + 1) + "_rels/" + t.workbooks[0].slice(A + 1) + ".rels").replace(/^\//, "");
  Ar(e, _) || (_ = "xl/_rels/workbook." + B + ".rels");
  var m = Ma(Er(e, _, !0), _.replace(/_rels.*/, "s5s"));
  (t.metadata || []).length >= 1 && (a.xlmeta = Mx(ze(e, kr(t.metadata[0])), t.metadata[0], a)), (t.people || []).length >= 1 && (a.people = Ou(ze(e, kr(t.people[0])), a)), m && (m = Ed(m, l.Sheets));
  var R = ze(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
  e: for (g = 0; g != u.Worksheets; ++g) {
    var P = "sheet";
    if (m && m[g] ? (I = "xl/" + m[g][1].replace(/[\/]?xl\//, ""), Ar(e, I) || (I = m[g][1]), Ar(e, I) || (I = _.replace(/_rels\/.*$/, "") + m[g][1]), P = m[g][2]) : (I = "xl/worksheets/sheet" + (g + 1 - R) + "." + B, I = I.replace(/sheet0\./, "sheet.")), T = I.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), a && a.sheets != null) switch (typeof a.sheets) {
      case "number":
        if (g != a.sheets) continue e;
        break;
      case "string":
        if (u.SheetNames[g].toLowerCase() != a.sheets.toLowerCase()) continue e;
        break;
      default:
        if (Array.isArray && Array.isArray(a.sheets)) {
          for (var D = !1, X = 0; X != a.sheets.length; ++X)
            typeof a.sheets[X] == "number" && a.sheets[X] == g && (D = 1), typeof a.sheets[X] == "string" && a.sheets[X].toLowerCase() == u.SheetNames[g].toLowerCase() && (D = 1);
          if (!D) continue e;
        }
    }
    Td(e, I, T, u.SheetNames[g], g, O, i, P, a, l, o, f);
  }
  return p = {
    Directory: t,
    Workbook: l,
    Props: u,
    Custprops: d,
    Deps: h,
    Sheets: i,
    SheetNames: u.SheetNames,
    Strings: Ha,
    Styles: f,
    Themes: o,
    SSF: Qe(Ee)
  }, a && a.bookFiles && (e.files ? (p.keys = n, p.files = e.files) : (p.keys = [], p.files = {}, e.FullPaths.forEach(function(se, re) {
    se = se.replace(/^Root Entry[\/]/, ""), p.keys.push(se), p.files[se] = e.FileIndex[re];
  }))), a && a.bookVBA && (t.vba.length > 0 ? p.vbaraw = ze(e, kr(t.vba[0]), !0) : t.defaults && t.defaults.bin === Nu && (p.vbaraw = ze(e, "xl/vbaProject.bin", !0))), p;
}
function wd(e, a) {
  var r = a || {}, n = "Workbook", t = Fe.find(e, n);
  try {
    if (n = "/!DataSpaces/Version", t = Fe.find(e, n), !t || !t.content) throw new Error("ECMA-376 Encrypted file missing " + n);
    if (pl(t.content), n = "/!DataSpaces/DataSpaceMap", t = Fe.find(e, n), !t || !t.content) throw new Error("ECMA-376 Encrypted file missing " + n);
    var s = gl(t.content);
    if (s.length !== 1 || s[0].comps.length !== 1 || s[0].comps[0].t !== 0 || s[0].name !== "StrongEncryptionDataSpace" || s[0].comps[0].v !== "EncryptedPackage")
      throw new Error("ECMA-376 Encrypted file bad " + n);
    if (n = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", t = Fe.find(e, n), !t || !t.content) throw new Error("ECMA-376 Encrypted file missing " + n);
    var i = ml(t.content);
    if (i.length != 1 || i[0] != "StrongEncryptionTransform")
      throw new Error("ECMA-376 Encrypted file bad " + n);
    if (n = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", t = Fe.find(e, n), !t || !t.content) throw new Error("ECMA-376 Encrypted file missing " + n);
    El(t.content);
  } catch {
  }
  if (n = "/EncryptionInfo", t = Fe.find(e, n), !t || !t.content) throw new Error("ECMA-376 Encrypted file missing " + n);
  var c = Tl(t.content);
  if (n = "/EncryptedPackage", t = Fe.find(e, n), !t || !t.content) throw new Error("ECMA-376 Encrypted file missing " + n);
  if (c[0] == 4 && typeof decrypt_agile < "u") return decrypt_agile(c[1], t.content, r.password || "", r);
  if (c[0] == 2 && typeof decrypt_std76 < "u") return decrypt_std76(c[1], t.content, r.password || "", r);
  throw new Error("File is password-protected");
}
function S0(e, a) {
  var r = "";
  switch ((a || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = Tr(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (a && a.type || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function Ad(e, a) {
  return Fe.find(e, "EncryptedPackage") ? wd(e, a) : ui(e, a);
}
function Fd(e, a) {
  var r, n = e, t = a || {};
  return t.type || (t.type = Ae && Buffer.isBuffer(e) ? "buffer" : "base64"), r = ns(n, t), kd(r, t);
}
function pi(e, a) {
  var r = 0;
  e: for (; r < e.length; ) switch (e.charCodeAt(r)) {
    case 10:
    case 13:
    case 32:
      ++r;
      break;
    case 60:
      return Jt(e.slice(r), a);
    default:
      break e;
  }
  return Ka.to_workbook(e, a);
}
function Sd(e, a) {
  var r = "", n = S0(e, a);
  switch (a.type) {
    case "base64":
      r = Tr(e);
      break;
    case "binary":
      r = e;
      break;
    case "buffer":
      r = e.toString("binary");
      break;
    case "array":
      r = ca(e);
      break;
    default:
      throw new Error("Unrecognized type " + a.type);
  }
  return n[0] == 239 && n[1] == 187 && n[2] == 191 && (r = Re(r)), a.type = "binary", pi(r, a);
}
function Cd(e, a) {
  var r = e;
  return a.type == "base64" && (r = Tr(r)), r = Ga.utils.decode(1200, r.slice(2), "str"), a.type = "binary", pi(r, a);
}
function yd(e) {
  return e.match(/[^\x00-\x7F]/) ? Na(e) : e;
}
function Gt(e, a, r, n) {
  return n ? (r.type = "string", Ka.to_workbook(e, r)) : Ka.to_workbook(a, r);
}
function e0(e, a) {
  Hn();
  var r = a || {};
  if (typeof ArrayBuffer < "u" && e instanceof ArrayBuffer) return e0(new Uint8Array(e), (r = Qe(r), r.type = "array", r));
  typeof Uint8Array < "u" && e instanceof Uint8Array && !r.type && (r.type = typeof Deno < "u" ? "buffer" : "array");
  var n = e, t = [0, 0, 0, 0], s = !1;
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), Ea = {}, r.dateNF && (Ea.dateNF = r.dateNF), r.type || (r.type = Ae && Buffer.isBuffer(e) ? "buffer" : "base64"), r.type == "file" && (r.type = Ae ? "buffer" : "binary", n = xc(e), typeof Uint8Array < "u" && !Ae && (r.type = "array")), r.type == "string" && (s = !0, r.type = "binary", r.codepage = 65001, n = yd(e)), r.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u") {
    var i = new ArrayBuffer(3), c = new Uint8Array(i);
    if (c.foo = "bar", !c.foo)
      return r = Qe(r), r.type = "array", e0(n0(n), r);
  }
  switch ((t = S0(n, r))[0]) {
    case 208:
      if (t[1] === 207 && t[2] === 17 && t[3] === 224 && t[4] === 161 && t[5] === 177 && t[6] === 26 && t[7] === 225) return Ad(Fe.read(n, r), r);
      break;
    case 9:
      if (t[1] <= 8) return ui(n, r);
      break;
    case 60:
      return Jt(n, r);
    case 73:
      if (t[1] === 73 && t[2] === 42 && t[3] === 0) throw new Error("TIFF Image File is not a spreadsheet");
      if (t[1] === 68) return al(n, r);
      break;
    case 84:
      if (t[1] === 65 && t[2] === 66 && t[3] === 76) return el.to_workbook(n, r);
      break;
    case 80:
      return t[1] === 75 && t[2] < 9 && t[3] < 9 ? Fd(n, r) : Gt(e, n, r, s);
    case 239:
      return t[3] === 60 ? Jt(n, r) : Gt(e, n, r, s);
    case 255:
      if (t[1] === 254)
        return Cd(n, r);
      if (t[1] === 0 && t[2] === 2 && t[3] === 0) return Ua.to_workbook(n, r);
      break;
    case 0:
      if (t[1] === 0 && (t[2] >= 2 && t[3] === 0 || t[2] === 0 && (t[3] === 8 || t[3] === 9)))
        return Ua.to_workbook(n, r);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return _n.to_workbook(n, r);
    case 123:
      if (t[1] === 92 && t[2] === 114 && t[3] === 116) return Nl.to_workbook(n, r);
      break;
    case 10:
    case 13:
    case 32:
      return Sd(n, r);
    case 137:
      if (t[1] === 80 && t[2] === 78 && t[3] === 71) throw new Error("PNG Image File is not a spreadsheet");
      break;
  }
  return Zo.indexOf(t[0]) > -1 && t[2] <= 12 && t[3] <= 31 ? _n.to_workbook(n, r) : Gt(e, n, r, s);
}
function Od(e, a, r, n, t, s, i, c) {
  var o = er(r), f = c.defval, l = c.raw || !Object.prototype.hasOwnProperty.call(c, "raw"), u = !0, x = t === 1 ? [] : {};
  if (t !== 1)
    if (Object.defineProperty) try {
      Object.defineProperty(x, "__rowNum__", { value: r, enumerable: !1 });
    } catch {
      x.__rowNum__ = r;
    }
    else x.__rowNum__ = r;
  if (!i || e[r]) for (var d = a.s.c; d <= a.e.c; ++d) {
    var p = i ? e[r][d] : e[n[d] + o];
    if (p === void 0 || p.t === void 0) {
      if (f === void 0) continue;
      s[d] != null && (x[s[d]] = f);
      continue;
    }
    var h = p.v;
    switch (p.t) {
      case "z":
        if (h == null) break;
        continue;
      case "e":
        h = h == 0 ? null : void 0;
        break;
      case "s":
      case "d":
      case "b":
      case "n":
        break;
      default:
        throw new Error("unrecognized type " + p.t);
    }
    if (s[d] != null) {
      if (h == null)
        if (p.t == "e" && h === null) x[s[d]] = null;
        else if (f !== void 0) x[s[d]] = f;
        else if (l && h === null) x[s[d]] = null;
        else continue;
      else
        x[s[d]] = l && (p.t !== "n" || p.t === "n" && c.rawNumbers !== !1) ? h : zr(p, h, c);
      h != null && (u = !1);
    }
  }
  return { row: x, isempty: u };
}
function r0(e, a) {
  if (e == null || e["!ref"] == null) return [];
  var r = { t: "n", v: 0 }, n = 0, t = 1, s = [], i = 0, c = "", o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, f = a || {}, l = f.range != null ? f.range : e["!ref"];
  switch (f.header === 1 ? n = 1 : f.header === "A" ? n = 2 : Array.isArray(f.header) ? n = 3 : f.header == null && (n = 0), typeof l) {
    case "string":
      o = Ue(l);
      break;
    case "number":
      o = Ue(e["!ref"]), o.s.r = l;
      break;
    default:
      o = l;
  }
  n > 0 && (t = 0);
  var u = er(o.s.r), x = [], d = [], p = 0, h = 0, g = Array.isArray(e), O = o.s.r, I = 0, T = {};
  g && !e[O] && (e[O] = []);
  var U = f.skipHidden && e["!cols"] || [], V = f.skipHidden && e["!rows"] || [];
  for (I = o.s.c; I <= o.e.c; ++I)
    if (!(U[I] || {}).hidden)
      switch (x[I] = Ye(I), r = g ? e[O][I] : e[x[I] + u], n) {
        case 1:
          s[I] = I - o.s.c;
          break;
        case 2:
          s[I] = x[I];
          break;
        case 3:
          s[I] = f.header[I - o.s.c];
          break;
        default:
          if (r == null && (r = { w: "__EMPTY", t: "s" }), c = i = zr(r, null, f), h = T[i] || 0, !h) T[i] = 1;
          else {
            do
              c = i + "_" + h++;
            while (T[c]);
            T[i] = h, T[c] = 1;
          }
          s[I] = c;
      }
  for (O = o.s.r + t; O <= o.e.r; ++O)
    if (!(V[O] || {}).hidden) {
      var B = Od(e, o, O, x, n, s, g, f);
      (B.isempty === !1 || (n === 1 ? f.blankrows !== !1 : f.blankrows)) && (d[p++] = B.row);
    }
  return d.length = p, d;
}
var Ln = /"/g;
function Dd(e, a, r, n, t, s, i, c) {
  for (var o = !0, f = [], l = "", u = er(r), x = a.s.c; x <= a.e.c; ++x)
    if (n[x]) {
      var d = c.dense ? (e[r] || [])[x] : e[n[x] + u];
      if (d == null) l = "";
      else if (d.v != null) {
        o = !1, l = "" + (c.rawNumbers && d.t == "n" ? d.v : zr(d, null, c));
        for (var p = 0, h = 0; p !== l.length; ++p) if ((h = l.charCodeAt(p)) === t || h === s || h === 34 || c.forceQuotes) {
          l = '"' + l.replace(Ln, '""') + '"';
          break;
        }
        l == "ID" && (l = '"ID"');
      } else d.f != null && !d.F ? (o = !1, l = "=" + d.f, l.indexOf(",") >= 0 && (l = '"' + l.replace(Ln, '""') + '"')) : l = "";
      f.push(l);
    }
  return c.blankrows === !1 && o ? null : f.join(i);
}
function vi(e, a) {
  var r = [], n = a ?? {};
  if (e == null || e["!ref"] == null) return "";
  var t = Ue(e["!ref"]), s = n.FS !== void 0 ? n.FS : ",", i = s.charCodeAt(0), c = n.RS !== void 0 ? n.RS : `
`, o = c.charCodeAt(0), f = new RegExp((s == "|" ? "\\|" : s) + "+$"), l = "", u = [];
  n.dense = Array.isArray(e);
  for (var x = n.skipHidden && e["!cols"] || [], d = n.skipHidden && e["!rows"] || [], p = t.s.c; p <= t.e.c; ++p) (x[p] || {}).hidden || (u[p] = Ye(p));
  for (var h = 0, g = t.s.r; g <= t.e.r; ++g)
    (d[g] || {}).hidden || (l = Dd(e, t, g, u, i, o, s, n), l != null && (n.strip && (l = l.replace(f, "")), (l || n.blankrows !== !1) && r.push((h++ ? c : "") + l)));
  return delete n.dense, r.join("");
}
function Rd(e, a) {
  a || (a = {}), a.FS = "	", a.RS = `
`;
  var r = vi(e, a);
  return r;
}
function Id(e) {
  var a = "", r, n = "";
  if (e == null || e["!ref"] == null) return [];
  var t = Ue(e["!ref"]), s = "", i = [], c, o = [], f = Array.isArray(e);
  for (c = t.s.c; c <= t.e.c; ++c) i[c] = Ye(c);
  for (var l = t.s.r; l <= t.e.r; ++l)
    for (s = er(l), c = t.s.c; c <= t.e.c; ++c)
      if (a = i[c] + s, r = f ? (e[l] || [])[c] : e[a], n = "", r !== void 0) {
        if (r.F != null) {
          if (a = r.F, !r.f) continue;
          n = r.f, a.indexOf(":") == -1 && (a = a + ":" + a);
        }
        if (r.f != null) n = r.f;
        else {
          if (r.t == "z") continue;
          if (r.t == "n" && r.v != null) n = "" + r.v;
          else if (r.t == "b") n = r.v ? "TRUE" : "FALSE";
          else if (r.w !== void 0) n = "'" + r.w;
          else {
            if (r.v === void 0) continue;
            r.t == "s" ? n = "'" + r.v : n = "" + r.v;
          }
        }
        o[o.length] = a + "=" + n;
      }
  return o;
}
function gi(e, a, r) {
  var n = r || {}, t = +!n.skipHeader, s = e || {}, i = 0, c = 0;
  if (s && n.origin != null)
    if (typeof n.origin == "number") i = n.origin;
    else {
      var o = typeof n.origin == "string" ? xr(n.origin) : n.origin;
      i = o.r, c = o.c;
    }
  var f, l = { s: { c: 0, r: 0 }, e: { c, r: i + a.length - 1 + t } };
  if (s["!ref"]) {
    var u = Ue(s["!ref"]);
    l.e.c = Math.max(l.e.c, u.e.c), l.e.r = Math.max(l.e.r, u.e.r), i == -1 && (i = u.e.r + 1, l.e.r = i + a.length - 1 + t);
  } else
    i == -1 && (i = 0, l.e.r = a.length - 1 + t);
  var x = n.header || [], d = 0;
  a.forEach(function(h, g) {
    Lr(h).forEach(function(O) {
      (d = x.indexOf(O)) == -1 && (x[d = x.length] = O);
      var I = h[O], T = "z", U = "", V = me({ c: c + d, r: i + g + t });
      f = qa(s, V), I && typeof I == "object" && !(I instanceof Date) ? s[V] = I : (typeof I == "number" ? T = "n" : typeof I == "boolean" ? T = "b" : typeof I == "string" ? T = "s" : I instanceof Date ? (T = "d", n.cellDates || (T = "n", I = pr(I)), U = n.dateNF || Ee[14]) : I === null && n.nullError && (T = "e", I = 0), f ? (f.t = T, f.v = I, delete f.w, delete f.R, U && (f.z = U)) : s[V] = f = { t: T, v: I }, U && (f.z = U));
    });
  }), l.e.c = Math.max(l.e.c, c + x.length - 1);
  var p = er(i);
  if (t) for (d = 0; d < x.length; ++d) s[Ye(d + c) + p] = { t: "s", v: x[d] };
  return s["!ref"] = Se(l), s;
}
function Nd(e, a) {
  return gi(null, e, a);
}
function qa(e, a, r) {
  if (typeof a == "string") {
    if (Array.isArray(e)) {
      var n = xr(a);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: "z" });
    }
    return e[a] || (e[a] = { t: "z" });
  }
  return typeof a != "number" ? qa(e, me(a)) : qa(e, me({ r: a, c: r || 0 }));
}
function bd(e, a) {
  if (typeof a == "number") {
    if (a >= 0 && e.SheetNames.length > a) return a;
    throw new Error("Cannot find sheet # " + a);
  } else if (typeof a == "string") {
    var r = e.SheetNames.indexOf(a);
    if (r > -1) return r;
    throw new Error("Cannot find sheet name |" + a + "|");
  } else throw new Error("Cannot find sheet |" + a + "|");
}
function C0() {
  return { SheetNames: [], Sheets: {} };
}
function y0(e, a, r, n) {
  var t = 1;
  if (!r) for (; t <= 65535 && e.SheetNames.indexOf(r = "Sheet" + t) != -1; ++t, r = void 0) ;
  if (!r || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
  if (n && e.SheetNames.indexOf(r) >= 0) {
    var s = r.match(/(^.*?)(\d+)$/);
    t = s && +s[2] || 0;
    var i = s && s[1] || r;
    for (++t; t <= 65535 && e.SheetNames.indexOf(r = i + t) != -1; ++t) ;
  }
  if (mx(r), e.SheetNames.indexOf(r) >= 0) throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), e.Sheets[r] = a, r;
}
function Pd(e, a, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = bd(e, a);
  switch (e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), r) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[n].Hidden = r;
}
function Ld(e, a) {
  return e.z = a, e;
}
function mi(e, a, r) {
  return a ? (e.l = { Target: a }, r && (e.l.Tooltip = r)) : delete e.l, e;
}
function Md(e, a, r) {
  return mi(e, "#" + a, r);
}
function Bd(e, a, r) {
  e.c || (e.c = []), e.c.push({ t: a, a: r || "SheetJS" });
}
function Ud(e, a, r, n) {
  for (var t = typeof a != "string" ? a : Ue(a), s = typeof a == "string" ? a : Se(a), i = t.s.r; i <= t.e.r; ++i) for (var c = t.s.c; c <= t.e.c; ++c) {
    var o = qa(e, i, c);
    o.t = "n", o.F = s, delete o.v, i == t.s.r && c == t.s.c && (o.f = r, n && (o.D = !0));
  }
  return e;
}
var Mn = {
  encode_col: Ye,
  encode_row: er,
  encode_cell: me,
  encode_range: Se,
  decode_col: x0,
  decode_row: h0,
  split_cell: jc,
  decode_cell: xr,
  decode_range: Aa,
  format_cell: zr,
  sheet_add_aoa: ks,
  sheet_add_json: gi,
  sheet_add_dom: hi,
  aoa_to_sheet: Fa,
  json_to_sheet: Nd,
  table_to_sheet: xi,
  table_to_book: ad,
  sheet_to_csv: vi,
  sheet_to_txt: Rd,
  sheet_to_json: r0,
  sheet_to_html: rd,
  sheet_to_formulae: Id,
  sheet_to_row_object_array: r0,
  sheet_get_cell: qa,
  book_new: C0,
  book_append_sheet: y0,
  book_set_sheet_visibility: Pd,
  cell_set_number_format: Ld,
  cell_set_hyperlink: mi,
  cell_set_internal_link: Md,
  cell_add_comment: Bd,
  sheet_set_array_formula: Ud,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
};
function Hd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vt = { exports: {} };
var Wd = vt.exports, Bn;
function Vd() {
  return Bn || (Bn = 1, (function(e, a) {
    ((r, n) => {
      e.exports = n();
    })(Wd, function r() {
      var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, t, s = !n.document && !!n.postMessage, i = n.IS_PAPA_WORKER || !1, c = {}, o = 0, f = {};
      function l(_) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(m) {
          var R = V(m);
          R.chunkSize = parseInt(R.chunkSize), m.step || m.chunk || (R.chunkSize = null), this._handle = new h(R), (this._handle.streamer = this)._config = R;
        }).call(this, _), this.parseChunk = function(m, R) {
          var P = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < P) {
            let X = this._config.newline;
            X || (D = this._config.quoteChar || '"', X = this._handle.guessLineEndings(m, D)), m = [...m.split(X).slice(P)].join(X);
          }
          this.isFirstChunk && A(this._config.beforeFirstChunk) && (D = this._config.beforeFirstChunk(m)) !== void 0 && (m = D), this.isFirstChunk = !1, this._halted = !1;
          var P = this._partialLine + m, D = (this._partialLine = "", this._handle.parse(P, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (m = D.meta.cursor, P = (this._finished || (this._partialLine = P.substring(m - this._baseIndex), this._baseIndex = m), D && D.data && (this._rowCount += D.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), i) n.postMessage({ results: D, workerId: f.WORKER_ID, finished: P });
            else if (A(this._config.chunk) && !R) {
              if (this._config.chunk(D, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = D = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(D.data), this._completeResults.errors = this._completeResults.errors.concat(D.errors), this._completeResults.meta = D.meta), this._completed || !P || !A(this._config.complete) || D && D.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), P || D && D.meta.paused || this._nextChunk(), D;
          }
          this._halted = !0;
        }, this._sendError = function(m) {
          A(this._config.error) ? this._config.error(m) : i && this._config.error && n.postMessage({ workerId: f.WORKER_ID, error: m, finished: !1 });
        };
      }
      function u(_) {
        var m;
        (_ = _ || {}).chunkSize || (_.chunkSize = f.RemoteChunkSize), l.call(this, _), this._nextChunk = s ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(R) {
          this._input = R, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (m = new XMLHttpRequest(), this._config.withCredentials && (m.withCredentials = this._config.withCredentials), s || (m.onload = B(this._chunkLoaded, this), m.onerror = B(this._chunkError, this)), m.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !s), this._config.downloadRequestHeaders) {
              var R, P = this._config.downloadRequestHeaders;
              for (R in P) m.setRequestHeader(R, P[R]);
            }
            var D;
            this._config.chunkSize && (D = this._start + this._config.chunkSize - 1, m.setRequestHeader("Range", "bytes=" + this._start + "-" + D));
            try {
              m.send(this._config.downloadRequestBody);
            } catch (X) {
              this._chunkError(X.message);
            }
            s && m.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          m.readyState === 4 && (m.status < 200 || 400 <= m.status ? this._chunkError() : (this._start += this._config.chunkSize || m.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((R) => (R = R.getResponseHeader("Content-Range")) !== null ? parseInt(R.substring(R.lastIndexOf("/") + 1)) : -1)(m), this.parseChunk(m.responseText)));
        }, this._chunkError = function(R) {
          R = m.statusText || R, this._sendError(new Error(R));
        };
      }
      function x(_) {
        (_ = _ || {}).chunkSize || (_.chunkSize = f.LocalChunkSize), l.call(this, _);
        var m, R, P = typeof FileReader < "u";
        this.stream = function(D) {
          this._input = D, R = D.slice || D.webkitSlice || D.mozSlice, P ? ((m = new FileReader()).onload = B(this._chunkLoaded, this), m.onerror = B(this._chunkError, this)) : m = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var D = this._input, X = (this._config.chunkSize && (X = Math.min(this._start + this._config.chunkSize, this._input.size), D = R.call(D, this._start, X)), m.readAsText(D, this._config.encoding));
          P || this._chunkLoaded({ target: { result: X } });
        }, this._chunkLoaded = function(D) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(D.target.result);
        }, this._chunkError = function() {
          this._sendError(m.error);
        };
      }
      function d(_) {
        var m;
        l.call(this, _ = _ || {}), this.stream = function(R) {
          return m = R, this._nextChunk();
        }, this._nextChunk = function() {
          var R, P;
          if (!this._finished) return R = this._config.chunkSize, m = R ? (P = m.substring(0, R), m.substring(R)) : (P = m, ""), this._finished = !m, this.parseChunk(P);
        };
      }
      function p(_) {
        l.call(this, _ = _ || {});
        var m = [], R = !0, P = !1;
        this.pause = function() {
          l.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          l.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(D) {
          this._input = D, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          P && m.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), m.length ? this.parseChunk(m.shift()) : R = !0;
        }, this._streamData = B(function(D) {
          try {
            m.push(typeof D == "string" ? D : D.toString(this._config.encoding)), R && (R = !1, this._checkIsFinished(), this.parseChunk(m.shift()));
          } catch (X) {
            this._streamError(X);
          }
        }, this), this._streamError = B(function(D) {
          this._streamCleanUp(), this._sendError(D);
        }, this), this._streamEnd = B(function() {
          this._streamCleanUp(), P = !0, this._streamData("");
        }, this), this._streamCleanUp = B(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function h(_) {
        var m, R, P, D, X = Math.pow(2, 53), se = -X, re = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, fe = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, q = this, ve = 0, M = 0, he = !1, te = !1, w = [], b = { data: [], errors: [], meta: {} };
        function L(Z) {
          return _.skipEmptyLines === "greedy" ? Z.join("").trim() === "" : Z.length === 1 && Z[0].length === 0;
        }
        function N() {
          if (b && P && (ee("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + f.DefaultDelimiter + "'"), P = !1), _.skipEmptyLines && (b.data = b.data.filter(function(ie) {
            return !L(ie);
          })), K()) {
            let ie = function(C, Te) {
              A(_.transformHeader) && (C = _.transformHeader(C, Te)), w.push(C);
            };
            if (b) if (Array.isArray(b.data[0])) {
              for (var Z = 0; K() && Z < b.data.length; Z++) b.data[Z].forEach(ie);
              b.data.splice(0, 1);
            } else b.data.forEach(ie);
          }
          function J(ie, C) {
            for (var Te = _.header ? {} : [], de = 0; de < ie.length; de++) {
              var pe = de, oe = ie[de], oe = ((ne, xe) => ((we) => (_.dynamicTypingFunction && _.dynamicTyping[we] === void 0 && (_.dynamicTyping[we] = _.dynamicTypingFunction(we)), (_.dynamicTyping[we] || _.dynamicTyping) === !0))(ne) ? xe === "true" || xe === "TRUE" || xe !== "false" && xe !== "FALSE" && (((we) => {
                if (re.test(we) && (we = parseFloat(we), se < we && we < X))
                  return 1;
              })(xe) ? parseFloat(xe) : fe.test(xe) ? new Date(xe) : xe === "" ? null : xe) : xe)(pe = _.header ? de >= w.length ? "__parsed_extra" : w[de] : pe, oe = _.transform ? _.transform(oe, pe) : oe);
              pe === "__parsed_extra" ? (Te[pe] = Te[pe] || [], Te[pe].push(oe)) : Te[pe] = oe;
            }
            return _.header && (de > w.length ? ee("FieldMismatch", "TooManyFields", "Too many fields: expected " + w.length + " fields but parsed " + de, M + C) : de < w.length && ee("FieldMismatch", "TooFewFields", "Too few fields: expected " + w.length + " fields but parsed " + de, M + C)), Te;
          }
          var j;
          b && (_.header || _.dynamicTyping || _.transform) && (j = 1, !b.data.length || Array.isArray(b.data[0]) ? (b.data = b.data.map(J), j = b.data.length) : b.data = J(b.data, 0), _.header && b.meta && (b.meta.fields = w), M += j);
        }
        function K() {
          return _.header && w.length === 0;
        }
        function ee(Z, J, j, ie) {
          Z = { type: Z, code: J, message: j }, ie !== void 0 && (Z.row = ie), b.errors.push(Z);
        }
        A(_.step) && (D = _.step, _.step = function(Z) {
          b = Z, K() ? N() : (N(), b.data.length !== 0 && (ve += Z.data.length, _.preview && ve > _.preview ? R.abort() : (b.data = b.data[0], D(b, q))));
        }), this.parse = function(Z, J, j) {
          var ie = _.quoteChar || '"', ie = (_.newline || (_.newline = this.guessLineEndings(Z, ie)), P = !1, _.delimiter ? A(_.delimiter) && (_.delimiter = _.delimiter(Z), b.meta.delimiter = _.delimiter) : ((ie = ((C, Te, de, pe, oe) => {
            var ne, xe, we, $e;
            oe = oe || [",", "	", "|", ";", f.RECORD_SEP, f.UNIT_SEP];
            for (var rr = 0; rr < oe.length; rr++) {
              for (var ar, vr = oe[rr], ye = 0, We = 0, De = 0, Ve = (we = void 0, new O({ comments: pe, delimiter: vr, newline: Te, preview: 10 }).parse(C)), Ie = 0; Ie < Ve.data.length; Ie++) de && L(Ve.data[Ie]) ? De++ : (ar = Ve.data[Ie].length, We += ar, we === void 0 ? we = ar : 0 < ar && (ye += Math.abs(ar - we), we = ar));
              0 < Ve.data.length && (We /= Ve.data.length - De), (xe === void 0 || ye <= xe) && ($e === void 0 || $e < We) && 1.99 < We && (xe = ye, ne = vr, $e = We);
            }
            return { successful: !!(_.delimiter = ne), bestDelimiter: ne };
          })(Z, _.newline, _.skipEmptyLines, _.comments, _.delimitersToGuess)).successful ? _.delimiter = ie.bestDelimiter : (P = !0, _.delimiter = f.DefaultDelimiter), b.meta.delimiter = _.delimiter), V(_));
          return _.preview && _.header && ie.preview++, m = Z, R = new O(ie), b = R.parse(m, J, j), N(), he ? { meta: { paused: !0 } } : b || { meta: { paused: !1 } };
        }, this.paused = function() {
          return he;
        }, this.pause = function() {
          he = !0, R.abort(), m = A(_.chunk) ? "" : m.substring(R.getCharIndex());
        }, this.resume = function() {
          q.streamer._halted ? (he = !1, q.streamer.parseChunk(m, !0)) : setTimeout(q.resume, 3);
        }, this.aborted = function() {
          return te;
        }, this.abort = function() {
          te = !0, R.abort(), b.meta.aborted = !0, A(_.complete) && _.complete(b), m = "";
        }, this.guessLineEndings = function(C, ie) {
          C = C.substring(0, 1048576);
          var ie = new RegExp(g(ie) + "([^]*?)" + g(ie), "gm"), j = (C = C.replace(ie, "")).split("\r"), ie = C.split(`
`), C = 1 < ie.length && ie[0].length < j[0].length;
          if (j.length === 1 || C) return `
`;
          for (var Te = 0, de = 0; de < j.length; de++) j[de][0] === `
` && Te++;
          return Te >= j.length / 2 ? `\r
` : "\r";
        };
      }
      function g(_) {
        return _.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function O(_) {
        var m = (_ = _ || {}).delimiter, R = _.newline, P = _.comments, D = _.step, X = _.preview, se = _.fastMode, re = null, fe = !1, q = _.quoteChar == null ? '"' : _.quoteChar, ve = q;
        if (_.escapeChar !== void 0 && (ve = _.escapeChar), (typeof m != "string" || -1 < f.BAD_DELIMITERS.indexOf(m)) && (m = ","), P === m) throw new Error("Comment character same as delimiter");
        P === !0 ? P = "#" : (typeof P != "string" || -1 < f.BAD_DELIMITERS.indexOf(P)) && (P = !1), R !== `
` && R !== "\r" && R !== `\r
` && (R = `
`);
        var M = 0, he = !1;
        this.parse = function(te, w, b) {
          if (typeof te != "string") throw new Error("Input must be a string");
          var L = te.length, N = m.length, K = R.length, ee = P.length, Z = A(D), J = [], j = [], ie = [], C = M = 0;
          if (!te) return ye();
          if (se || se !== !1 && te.indexOf(q) === -1) {
            for (var Te = te.split(R), de = 0; de < Te.length; de++) {
              if (ie = Te[de], M += ie.length, de !== Te.length - 1) M += R.length;
              else if (b) return ye();
              if (!P || ie.substring(0, ee) !== P) {
                if (Z) {
                  if (J = [], $e(ie.split(m)), We(), he) return ye();
                } else $e(ie.split(m));
                if (X && X <= de) return J = J.slice(0, X), ye(!0);
              }
            }
            return ye();
          }
          for (var pe = te.indexOf(m, M), oe = te.indexOf(R, M), ne = new RegExp(g(ve) + g(q), "g"), xe = te.indexOf(q, M); ; ) if (te[M] === q) for (xe = M, M++; ; ) {
            if ((xe = te.indexOf(q, xe + 1)) === -1) return b || j.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: J.length, index: M }), ar();
            if (xe === L - 1) return ar(te.substring(M, xe).replace(ne, q));
            if (q === ve && te[xe + 1] === ve) xe++;
            else if (q === ve || xe === 0 || te[xe - 1] !== ve) {
              pe !== -1 && pe < xe + 1 && (pe = te.indexOf(m, xe + 1));
              var we = rr((oe = oe !== -1 && oe < xe + 1 ? te.indexOf(R, xe + 1) : oe) === -1 ? pe : Math.min(pe, oe));
              if (te.substr(xe + 1 + we, N) === m) {
                ie.push(te.substring(M, xe).replace(ne, q)), te[M = xe + 1 + we + N] !== q && (xe = te.indexOf(q, M)), pe = te.indexOf(m, M), oe = te.indexOf(R, M);
                break;
              }
              if (we = rr(oe), te.substring(xe + 1 + we, xe + 1 + we + K) === R) {
                if (ie.push(te.substring(M, xe).replace(ne, q)), vr(xe + 1 + we + K), pe = te.indexOf(m, M), xe = te.indexOf(q, M), Z && (We(), he)) return ye();
                if (X && J.length >= X) return ye(!0);
                break;
              }
              j.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: J.length, index: M }), xe++;
            }
          }
          else if (P && ie.length === 0 && te.substring(M, M + ee) === P) {
            if (oe === -1) return ye();
            M = oe + K, oe = te.indexOf(R, M), pe = te.indexOf(m, M);
          } else if (pe !== -1 && (pe < oe || oe === -1)) ie.push(te.substring(M, pe)), M = pe + N, pe = te.indexOf(m, M);
          else {
            if (oe === -1) break;
            if (ie.push(te.substring(M, oe)), vr(oe + K), Z && (We(), he)) return ye();
            if (X && J.length >= X) return ye(!0);
          }
          return ar();
          function $e(De) {
            J.push(De), C = M;
          }
          function rr(De) {
            var Ve = 0;
            return Ve = De !== -1 && (De = te.substring(xe + 1, De)) && De.trim() === "" ? De.length : Ve;
          }
          function ar(De) {
            return b || (De === void 0 && (De = te.substring(M)), ie.push(De), M = L, $e(ie), Z && We()), ye();
          }
          function vr(De) {
            M = De, $e(ie), ie = [], oe = te.indexOf(R, M);
          }
          function ye(De) {
            if (_.header && !w && J.length && !fe) {
              var Ve = J[0], Ie = /* @__PURE__ */ Object.create(null), gr = new Set(Ve);
              let ke = !1;
              for (let Oe = 0; Oe < Ve.length; Oe++) {
                let Pe = Ve[Oe];
                if (Ie[Pe = A(_.transformHeader) ? _.transformHeader(Pe, Oe) : Pe]) {
                  let Ne, Nr = Ie[Pe];
                  for (; Ne = Pe + "_" + Nr, Nr++, gr.has(Ne); ) ;
                  gr.add(Ne), Ve[Oe] = Ne, Ie[Pe]++, ke = !0, (re = re === null ? {} : re)[Ne] = Pe;
                } else Ie[Pe] = 1, Ve[Oe] = Pe;
                gr.add(Pe);
              }
              ke && console.warn("Duplicate headers found and renamed."), fe = !0;
            }
            return { data: J, errors: j, meta: { delimiter: m, linebreak: R, aborted: he, truncated: !!De, cursor: C + (w || 0), renamedHeaders: re } };
          }
          function We() {
            D(ye()), J = [], j = [];
          }
        }, this.abort = function() {
          he = !0;
        }, this.getCharIndex = function() {
          return M;
        };
      }
      function I(_) {
        var m = _.data, R = c[m.workerId], P = !1;
        if (m.error) R.userError(m.error, m.file);
        else if (m.results && m.results.data) {
          var D = { abort: function() {
            P = !0, T(m.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: U, resume: U };
          if (A(R.userStep)) {
            for (var X = 0; X < m.results.data.length && (R.userStep({ data: m.results.data[X], errors: m.results.errors, meta: m.results.meta }, D), !P); X++) ;
            delete m.results;
          } else A(R.userChunk) && (R.userChunk(m.results, D, m.file), delete m.results);
        }
        m.finished && !P && T(m.workerId, m.results);
      }
      function T(_, m) {
        var R = c[_];
        A(R.userComplete) && R.userComplete(m), R.terminate(), delete c[_];
      }
      function U() {
        throw new Error("Not implemented.");
      }
      function V(_) {
        if (typeof _ != "object" || _ === null) return _;
        var m, R = Array.isArray(_) ? [] : {};
        for (m in _) R[m] = V(_[m]);
        return R;
      }
      function B(_, m) {
        return function() {
          _.apply(m, arguments);
        };
      }
      function A(_) {
        return typeof _ == "function";
      }
      return f.parse = function(_, m) {
        var R = (m = m || {}).dynamicTyping || !1;
        if (A(R) && (m.dynamicTypingFunction = R, R = {}), m.dynamicTyping = R, m.transform = !!A(m.transform) && m.transform, !m.worker || !f.WORKERS_SUPPORTED) return R = null, f.NODE_STREAM_INPUT, typeof _ == "string" ? (_ = ((P) => P.charCodeAt(0) !== 65279 ? P : P.slice(1))(_), R = new (m.download ? u : d)(m)) : _.readable === !0 && A(_.read) && A(_.on) ? R = new p(m) : (n.File && _ instanceof File || _ instanceof Object) && (R = new x(m)), R.stream(_);
        (R = (() => {
          var P;
          return !!f.WORKERS_SUPPORTED && (P = (() => {
            var D = n.URL || n.webkitURL || null, X = r.toString();
            return f.BLOB_URL || (f.BLOB_URL = D.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", X, ")();"], { type: "text/javascript" })));
          })(), (P = new n.Worker(P)).onmessage = I, P.id = o++, c[P.id] = P);
        })()).userStep = m.step, R.userChunk = m.chunk, R.userComplete = m.complete, R.userError = m.error, m.step = A(m.step), m.chunk = A(m.chunk), m.complete = A(m.complete), m.error = A(m.error), delete m.worker, R.postMessage({ input: _, config: m, workerId: R.id });
      }, f.unparse = function(_, m) {
        var R = !1, P = !0, D = ",", X = `\r
`, se = '"', re = se + se, fe = !1, q = null, ve = !1, M = ((() => {
          if (typeof m == "object") {
            if (typeof m.delimiter != "string" || f.BAD_DELIMITERS.filter(function(w) {
              return m.delimiter.indexOf(w) !== -1;
            }).length || (D = m.delimiter), typeof m.quotes != "boolean" && typeof m.quotes != "function" && !Array.isArray(m.quotes) || (R = m.quotes), typeof m.skipEmptyLines != "boolean" && typeof m.skipEmptyLines != "string" || (fe = m.skipEmptyLines), typeof m.newline == "string" && (X = m.newline), typeof m.quoteChar == "string" && (se = m.quoteChar), typeof m.header == "boolean" && (P = m.header), Array.isArray(m.columns)) {
              if (m.columns.length === 0) throw new Error("Option columns is empty");
              q = m.columns;
            }
            m.escapeChar !== void 0 && (re = m.escapeChar + se), m.escapeFormulae instanceof RegExp ? ve = m.escapeFormulae : typeof m.escapeFormulae == "boolean" && m.escapeFormulae && (ve = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(g(se), "g"));
        if (typeof _ == "string" && (_ = JSON.parse(_)), Array.isArray(_)) {
          if (!_.length || Array.isArray(_[0])) return he(null, _, fe);
          if (typeof _[0] == "object") return he(q || Object.keys(_[0]), _, fe);
        } else if (typeof _ == "object") return typeof _.data == "string" && (_.data = JSON.parse(_.data)), Array.isArray(_.data) && (_.fields || (_.fields = _.meta && _.meta.fields || q), _.fields || (_.fields = Array.isArray(_.data[0]) ? _.fields : typeof _.data[0] == "object" ? Object.keys(_.data[0]) : []), Array.isArray(_.data[0]) || typeof _.data[0] == "object" || (_.data = [_.data])), he(_.fields || [], _.data || [], fe);
        throw new Error("Unable to serialize unrecognized input");
        function he(w, b, L) {
          var N = "", K = (typeof w == "string" && (w = JSON.parse(w)), typeof b == "string" && (b = JSON.parse(b)), Array.isArray(w) && 0 < w.length), ee = !Array.isArray(b[0]);
          if (K && P) {
            for (var Z = 0; Z < w.length; Z++) 0 < Z && (N += D), N += te(w[Z], Z);
            0 < b.length && (N += X);
          }
          for (var J = 0; J < b.length; J++) {
            var j = (K ? w : b[J]).length, ie = !1, C = K ? Object.keys(b[J]).length === 0 : b[J].length === 0;
            if (L && !K && (ie = L === "greedy" ? b[J].join("").trim() === "" : b[J].length === 1 && b[J][0].length === 0), L === "greedy" && K) {
              for (var Te = [], de = 0; de < j; de++) {
                var pe = ee ? w[de] : de;
                Te.push(b[J][pe]);
              }
              ie = Te.join("").trim() === "";
            }
            if (!ie) {
              for (var oe = 0; oe < j; oe++) {
                0 < oe && !C && (N += D);
                var ne = K && ee ? w[oe] : oe;
                N += te(b[J][ne], oe);
              }
              J < b.length - 1 && (!L || 0 < j && !C) && (N += X);
            }
          }
          return N;
        }
        function te(w, b) {
          var L, N;
          return w == null ? "" : w.constructor === Date ? JSON.stringify(w).slice(1, 25) : (N = !1, ve && typeof w == "string" && ve.test(w) && (w = "'" + w, N = !0), L = w.toString().replace(M, re), (N = N || R === !0 || typeof R == "function" && R(w, b) || Array.isArray(R) && R[b] || ((K, ee) => {
            for (var Z = 0; Z < ee.length; Z++) if (-1 < K.indexOf(ee[Z])) return !0;
            return !1;
          })(L, f.BAD_DELIMITERS) || -1 < L.indexOf(D) || L.charAt(0) === " " || L.charAt(L.length - 1) === " ") ? se + L + se : L);
        }
      }, f.RECORD_SEP = "", f.UNIT_SEP = "", f.BYTE_ORDER_MARK = "\uFEFF", f.BAD_DELIMITERS = ["\r", `
`, '"', f.BYTE_ORDER_MARK], f.WORKERS_SUPPORTED = !s && !!n.Worker, f.NODE_STREAM_INPUT = 1, f.LocalChunkSize = 10485760, f.RemoteChunkSize = 5242880, f.DefaultDelimiter = ",", f.Parser = O, f.ParserHandle = h, f.NetworkStreamer = u, f.FileStreamer = x, f.StringStreamer = d, f.ReadableStreamStreamer = p, n.jQuery && ((t = n.jQuery).fn.parse = function(_) {
        var m = _.config || {}, R = [];
        return this.each(function(X) {
          if (!(t(this).prop("tagName").toUpperCase() === "INPUT" && t(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var se = 0; se < this.files.length; se++) R.push({ file: this.files[se], inputElem: this, instanceConfig: t.extend({}, m) });
        }), P(), this;
        function P() {
          if (R.length === 0) A(_.complete) && _.complete();
          else {
            var X, se, re, fe, q = R[0];
            if (A(_.before)) {
              var ve = _.before(q.file, q.inputElem);
              if (typeof ve == "object") {
                if (ve.action === "abort") return X = "AbortError", se = q.file, re = q.inputElem, fe = ve.reason, void (A(_.error) && _.error({ name: X }, se, re, fe));
                if (ve.action === "skip") return void D();
                typeof ve.config == "object" && (q.instanceConfig = t.extend(q.instanceConfig, ve.config));
              } else if (ve === "skip") return void D();
            }
            var M = q.instanceConfig.complete;
            q.instanceConfig.complete = function(he) {
              A(M) && M(he, q.file, q.inputElem), D();
            }, f.parse(q.file, q.instanceConfig);
          }
        }
        function D() {
          R.splice(0, 1), P();
        }
      }), i && (n.onmessage = function(_) {
        _ = _.data, f.WORKER_ID === void 0 && _ && (f.WORKER_ID = _.workerId), typeof _.input == "string" ? n.postMessage({ workerId: f.WORKER_ID, results: f.parse(_.input, _.config), finished: !0 }) : (n.File && _.input instanceof File || _.input instanceof Object) && (_ = f.parse(_.input, _.config)) && n.postMessage({ workerId: f.WORKER_ID, results: _, finished: !0 });
      }), (u.prototype = Object.create(l.prototype)).constructor = u, (x.prototype = Object.create(l.prototype)).constructor = x, (d.prototype = Object.create(d.prototype)).constructor = d, (p.prototype = Object.create(l.prototype)).constructor = p, f;
    });
  })(vt)), vt.exports;
}
var Gd = Vd();
const zd = /* @__PURE__ */ Hd(Gd);
var Xd = Object.defineProperty, $d = Object.getOwnPropertyDescriptor, Sa = (e, a, r, n) => {
  for (var t = n > 1 ? void 0 : n ? $d(a, r) : a, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (t = (n ? i(a, r, t) : i(t)) || t);
  return n && t && Xd(a, r, t), t;
};
const pt = 20, zt = 50;
let Qr = class extends Li {
  constructor() {
    super(...arguments), this._source = null, this._rows = 3, this._columns = 3, this._parsed = null, this._parseError = "";
  }
  connectedCallback() {
    super.connectedCallback(), typeof this.data?.rows == "number" && this.data.rows > 0 && (this._rows = this.data.rows), typeof this.data?.columns == "number" && this.data.columns > 0 && (this._columns = this.data.columns);
  }
  _selectSource(e) {
    this._source = e, this._parsed = null, this._parseError = "";
  }
  _onRowsInput(e) {
    const a = Number(e.target.value);
    this._rows = Number.isFinite(a) ? Math.max(1, Math.min(50, a)) : 1;
  }
  _onColumnsInput(e) {
    const a = Number(e.target.value);
    this._columns = Number.isFinite(a) ? Math.max(1, Math.min(20, a)) : 1;
  }
  _onDropzoneChange(e) {
    const a = e.detail?.files ?? [];
    a[0] && this._handleFile(a[0]);
  }
  _handleFile(e) {
    this._parseError = "", this._parsed = null;
    const a = e.name.split(".").pop()?.toLowerCase();
    a === "csv" ? this._parseCsv(e) : a === "xlsx" || a === "xls" ? this._parseXlsx(e) : this._parseError = "Unsupported file type. Please upload an .xlsx, .xls or .csv file.";
  }
  _applyLimits(e, a) {
    const r = e.length > pt, n = a.length > zt, t = e.slice(0, pt), s = a.slice(0, zt).map((c) => c.slice(0, pt)), i = [];
    return r && i.push(`columns capped at ${pt} (file had ${e.length})`), n && i.push(`rows capped at ${zt} (file had ${a.length})`), { columnNames: t, cellData: s, truncated: i.length ? i.join(", ") : void 0 };
  }
  _parseCsv(e) {
    zd.parse(e, {
      skipEmptyLines: !0,
      complete: (a) => {
        const r = a.data;
        if (!r.length) {
          this._parseError = "The CSV file appears to be empty.";
          return;
        }
        const n = r[0].map((i) => String(i ?? "")), t = r.slice(1).map((i) => n.map((c, o) => String(i[o] ?? ""))), s = this._applyLimits(n, t);
        this._parsed = { name: e.name, ...s };
      },
      error: (a) => {
        this._parseError = `Failed to parse CSV: ${a.message}`;
      }
    });
  }
  _parseXlsx(e) {
    const a = new FileReader();
    a.onload = (r) => {
      try {
        const n = new Uint8Array(r.target.result), t = e0(n, { type: "array" }), s = t.SheetNames[0], i = t.Sheets[s], c = Mn.sheet_to_json(i, { header: 1, defval: "", raw: !1 });
        if (!c.length) {
          this._parseError = "The Excel file appears to be empty.";
          return;
        }
        const o = c[0].map((d) => String(d ?? "")), f = o.length, l = c.slice(1).map((d) => o.map((p, h) => String(d[h] ?? "")));
        for (const d of i["!merges"] ?? []) {
          const p = String(i[Mn.encode_cell({ r: d.s.r, c: d.s.c })]?.v ?? "");
          for (let h = d.s.r; h <= d.e.r; h++)
            for (let g = d.s.c; g <= d.e.c; g++)
              h === 0 && g < f ? o[g] = p : h > 0 && h - 1 < l.length && g < f && (l[h - 1][g] = p);
        }
        const u = this._applyLimits(o, l), x = t.SheetNames.length > 1 ? s : void 0;
        this._parsed = { name: e.name, sheetName: x, ...u };
      } catch {
        this._parseError = "Failed to read the Excel file.";
      }
    }, a.readAsArrayBuffer(e);
  }
  _close() {
    this.modalContext?.reject();
  }
  _submit() {
    this._source === "file" && this._parsed ? this.value = {
      rows: this._parsed.cellData.length,
      columns: this._parsed.columnNames.length,
      columnNames: this._parsed.columnNames,
      cellData: this._parsed.cellData
    } : this.value = { rows: this._rows, columns: this._columns }, this.modalContext?.submit();
  }
  get _canSubmit() {
    return this._source ? this._source === "file" ? !!this._parsed : !0 : !1;
  }
  render() {
    return Hr`
            <umb-body-layout .headline=${this.data?.headline ?? "Create table"}>
                ${this._renderSourcePicker()}
                ${this._source === "scratch" ? this._renderScratchFields() : null}
                ${this._source === "file" ? this._renderFileFields() : null}

                <div slot="actions">
                    <uui-button look="secondary" @click=${this._close} label="Cancel">Cancel</uui-button>
                    <uui-button look="primary" .disabled=${!this._canSubmit} @click=${this._submit} label="Create">Create</uui-button>
                </div>
            </umb-body-layout>
        `;
  }
  _renderSourcePicker() {
    return Hr`
            <div class="sourcePicker">
                <button class=${["sourceOption", this._source === "scratch" ? "selected" : ""].filter(Boolean).join(" ")}
                    @click=${() => this._selectSource("scratch")}>
                    <uui-icon name="icon-grid"></uui-icon>
                    <span>Create from scratch</span>
                </button>
                <button class=${["sourceOption", this._source === "file" ? "selected" : ""].filter(Boolean).join(" ")}
                    @click=${() => this._selectSource("file")}>
                    <uui-icon name="icon-document"></uui-icon>
                    <span>Import from Excel / CSV</span>
                </button>
            </div>
        `;
  }
  _renderScratchFields() {
    return Hr`
            <div class="fields">
                <uui-label for="inputRows">Rows</uui-label>
                <uui-input id="inputRows" type="number" label="Rows" min="1" max="50"
                    .value=${String(this._rows)} @input=${this._onRowsInput}></uui-input>
                <uui-label for="inputColumns">Columns</uui-label>
                <uui-input id="inputColumns" type="number" label="Columns" min="1" max="20"
                    .value=${String(this._columns)} @input=${this._onColumnsInput}></uui-input>
            </div>
        `;
  }
  _renderFileFields() {
    return Hr`
            <div class="fileArea">
                <div class="dropzoneWrap ${this._parsed ? "success" : ""}">
                    <uui-file-dropzone
                        accept=".xlsx,.xls,.csv"
                        label="Drop your file here or click to browse"
                        @change=${this._onDropzoneChange}>
                    </uui-file-dropzone>
                    <div class="dropzoneOverlay" aria-hidden="true">
                        <uui-symbol-file-dropzone class="dropzoneSymbol" ?error=${!!this._parseError && !this._parsed}></uui-symbol-file-dropzone>
                        ${this._parsed ? Hr`
                            <span class="dropzoneTitle">${this._parsed.name}</span>
                            <span class="dropzoneSubtitle">
                                <strong>${this._parsed.columnNames.length}</strong> columns &middot;
                                <strong>${this._parsed.cellData.length}</strong> rows detected
                                ${this._parsed.sheetName ? Hr`&middot; sheet <strong>${this._parsed.sheetName}</strong>` : null}
                            </span>
                            ${this._parsed.truncated ? Hr`<span class="dropzoneTruncated">${this._parsed.truncated}</span>` : null}
                            <span class="dropzoneHint">Click or drop to replace</span>
                        ` : Hr`
                            <span class="dropzoneTitle">Drag and drop your file here</span>
                            <span class="dropzoneSubtitle">or click to browse</span>
                            <span class="dropzoneHint">.xlsx &nbsp;·&nbsp; .xls &nbsp;·&nbsp; .csv</span>
                        `}
                    </div>
                </div>

                ${this._parseError ? Hr`
                    <div class="errorBanner">
                        <uui-icon name="icon-alert"></uui-icon>
                        <span>${this._parseError}</span>
                    </div>
                ` : null}
            </div>
        `;
  }
};
Qr.styles = bi`
        .sourcePicker {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--uui-size-4);
        }

        .sourceOption {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--uui-size-3);
            padding: var(--uui-size-6);
            border: 1px solid var(--uui-color-border);
            border-radius: var(--uui-border-radius);
            background: var(--uui-color-surface);
            color: var(--uui-color-text);
            cursor: pointer;
            transition: border-color 120ms ease-in-out, background-color 120ms ease-in-out;
            font-size: var(--uui-type-small-size);
        }

        .sourceOption:hover {
            background: var(--uui-color-surface-alt);
            border-color: var(--uui-color-border-emphasis);
        }

        .sourceOption.selected {
            border-color: var(--uui-color-selected);
            background: color-mix(in srgb, var(--uui-color-selected) 8%, transparent);
            color: var(--uui-color-selected);
        }

        .sourceOption uui-icon {
            font-size: 1.5rem;
        }

        .fields {
            display: grid;
            gap: var(--uui-size-4);
            margin-top: var(--uui-size-4);
        }

        .fileArea {
            display: flex;
            flex-direction: column;
            gap: var(--uui-size-3);
            margin-top: var(--uui-size-4);
        }

        /* ── Dropzone wrapper ── */
        .dropzoneWrap {
            position: relative;
            height: 200px;
            border: 1px solid var(--uui-color-border);
            border-radius: var(--uui-border-radius);
            background: var(--uui-color-surface);
            overflow: hidden;
            transition: border-color 120ms ease-in-out, background-color 120ms ease-in-out;
        }

        .dropzoneWrap.success {
            border-color: var(--uui-color-positive);
            background: color-mix(in srgb, var(--uui-color-positive) 5%, transparent);
        }

        uui-file-dropzone {
            position: absolute;
            inset: 0;
            opacity: 0;
            z-index: 1;
            cursor: pointer;
        }

        .dropzoneOverlay {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--uui-size-2);
            padding: var(--uui-size-6);
            text-align: center;
            pointer-events: none;
        }

        .dropzoneSymbol {
            width: 52px;
            height: 52px;
        }

        .dropzoneTitle {
            font-weight: 600;
            font-size: var(--uui-type-default-size);
            color: var(--uui-color-text);
            word-break: break-all;
        }

        .dropzoneSubtitle {
            font-size: var(--uui-type-small-size);
            color: var(--uui-color-text-alt);
        }

        .dropzoneHint {
            font-size: var(--uui-type-small-size);
            color: var(--uui-color-border-emphasis);
            letter-spacing: 0.03em;
        }

        .dropzoneTruncated {
            font-size: var(--uui-type-small-size);
            color: var(--uui-color-warning-emphasis, var(--uui-color-border-emphasis));
        }

        /* ── Error banner ── */
        .errorBanner {
            display: flex;
            align-items: center;
            gap: var(--uui-size-3);
            padding: var(--uui-size-3) var(--uui-size-4);
            border-radius: var(--uui-border-radius);
            background: color-mix(in srgb, var(--uui-color-danger) 8%, transparent);
            color: var(--uui-color-danger-emphasis);
            font-size: var(--uui-type-small-size);
        }
    `;
Sa([
  Za()
], Qr.prototype, "_source", 2);
Sa([
  Za()
], Qr.prototype, "_rows", 2);
Sa([
  Za()
], Qr.prototype, "_columns", 2);
Sa([
  Za()
], Qr.prototype, "_parsed", 2);
Sa([
  Za()
], Qr.prototype, "_parseError", 2);
Qr = Sa([
  Pi("webwonders-table-create-modal")
], Qr);
export {
  Qr as WebwondersTableCreateModalElement,
  Qr as element
};
//# sourceMappingURL=table-create-modal.element-COm7uh-U.js.map
