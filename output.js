//Sun Aug 25 2024 14:44:55 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(a3) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a5) {
      return typeof a5;
    } : function (a5) {
      return a5 && "function" == typeof Symbol && a5.constructor === Symbol && a5 !== Symbol.prototype ? "symbol" : typeof a5;
    };
    return b(a3);
  }
  function c(a3, a4) {
    var a6 = "undefined" != typeof Symbol && a3[Symbol.iterator] || a3["@@iterator"];
    if (!a6) {
      if (Array.isArray(a3) || (a6 = d(a3)) || a4 && a3 && "number" == typeof a3.length) {
        a6 && (a3 = a6);
        var a7 = 0,
          a8 = function () {};
        return {
          s: a8,
          n: function () {
            var ac = {
              done: !0
            };
            return a7 >= a3.length ? ac : {
              done: !1,
              value: a3[a7++]
            };
          },
          e: function (ac) {
            throw ac;
          },
          f: a8
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a9,
      aa = !0,
      ab = !1;
    return {
      s: function () {
        a6 = a6.call(a3);
      },
      n: function () {
        var af = a6.next();
        aa = af.done;
        return af;
      },
      e: function (ae) {
        ab = !0;
        a9 = ae;
      },
      f: function () {
        try {
          aa || null == a6.return || a6.return();
        } finally {
          if (ab) {
            throw a9;
          }
        }
      }
    };
  }
  function d(a3, a4) {
    if (a3) {
      if ("string" == typeof a3) {
        return f(a3, a4);
      }
      var a5 = {}.toString.call(a3).slice(8, -1);
      "Object" === a5 && a3.constructor && (a5 = a3.constructor.name);
      return "Map" === a5 || "Set" === a5 ? Array.from(a3) : "Arguments" === a5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a5) ? f(a3, a4) : void 0;
    }
  }
  function f(a3, a4) {
    (null == a4 || a4 > a3.length) && (a4 = a3.length);
    for (var a5 = 0, a6 = Array(a4); a5 < a4; a5++) {
      a6[a5] = a3[a5];
    }
    return a6;
  }
  function g() {
    'use strict';

    g = function () {
      return a5;
    };
    var a4,
      a5 = {},
      a6 = Object.prototype,
      a7 = a6.hasOwnProperty,
      a8 = Object.defineProperty || function (aA, aB, aC) {
        aA[aB] = aC.value;
      },
      a9 = "function" == typeof Symbol ? Symbol : {},
      aa = a9.iterator || "@@iterator",
      ab = a9.asyncIterator || "@@asyncIterator",
      ac = a9.toStringTag || "@@toStringTag";
    function ad(aA, aB, aC) {
      var aD = {
        value: aC,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aA, aB, aD);
      return aA[aB];
    }
    try {
      ad({}, "");
    } catch (aB) {
      ad = function (aC, aD, aE) {
        return aC[aD] = aE;
      };
    }
    function ae(aD, aE, aF, aG) {
      var aH = aE && aE.prototype instanceof al ? aE : al,
        aI = Object.create(aH.prototype),
        aJ = new ay(aG || []);
      a8(aI, "_invoke", {
        value: au(aD, aF, aJ)
      });
      return aI;
    }
    function af(aD, aE, aF) {
      try {
        return {
          type: "normal",
          arg: aD.call(aE, aF)
        };
      } catch (aK) {
        var aH = {
          type: "throw",
          arg: aK
        };
        return aH;
      }
    }
    a5.wrap = ae;
    var ag = "suspendedStart",
      ah = "suspendedYield",
      ai = "executing",
      aj = "completed",
      ak = {};
    function al() {}
    function am() {}
    function an() {}
    var ao = {};
    ad(ao, aa, function () {
      return this;
    });
    var ap = Object.getPrototypeOf,
      aq = ap && ap(ap(az([])));
    aq && aq !== a6 && a7.call(aq, aa) && (ao = aq);
    an.prototype = al.prototype = Object.create(ao);
    var ar = an.prototype;
    function as(aD) {
      ["next", "throw", "return"].forEach(function (aG) {
        ad(aD, aG, function (aI) {
          return this._invoke(aG, aI);
        });
      });
    }
    function at(aD, aE) {
      function aI(aJ, aK, aL, aM) {
        var aO = af(aD[aJ], aD, aK);
        if ("throw" !== aO.type) {
          var aP = aO.arg,
            aQ = aP.value;
          return aQ && "object" == b(aQ) && a7.call(aQ, "__await") ? aE.resolve(aQ.__await).then(function (aR) {
            aI("next", aR, aL, aM);
          }, function (aR) {
            aI("throw", aR, aL, aM);
          }) : aE.resolve(aQ).then(function (aR) {
            aP.value = aR;
            aL(aP);
          }, function (aR) {
            return aI("throw", aR, aL, aM);
          });
        }
        aM(aO.arg);
      }
      var aG;
      a8(this, "_invoke", {
        value: function (aJ, aK) {
          function aN() {
            return new aE(function (aP, aQ) {
              aI(aJ, aK, aP, aQ);
            });
          }
          return aG = aG ? aG.then(aN, aN) : aN();
        }
      });
    }
    function au(aD, aE, aF) {
      var aH = ag;
      return function (aI, aJ) {
        if (aH === ai) {
          throw Error("Generator is already running");
        }
        if (aH === aj) {
          if ("throw" === aI) {
            throw aJ;
          }
          var aL = {
            value: a4,
            done: !0
          };
          return aL;
        }
        for (aF.method = aI, aF.arg = aJ;;) {
          var aM = aF.delegate;
          if (aM) {
            var aN = av(aM, aF);
            if (aN) {
              if (aN === ak) {
                continue;
              }
              return aN;
            }
          }
          if ("next" === aF.method) {
            aF.sent = aF._sent = aF.arg;
          } else {
            if ("throw" === aF.method) {
              if (aH === ag) {
                throw aH = aj, aF.arg;
              }
              aF.dispatchException(aF.arg);
            } else {
              "return" === aF.method && aF.abrupt("return", aF.arg);
            }
          }
          aH = ai;
          var aO = af(aD, aE, aF);
          if ("normal" === aO.type) {
            if (aH = aF.done ? aj : ah, aO.arg === ak) {
              continue;
            }
            var aP = {};
            aP.value = aO.arg;
            aP.done = aF.done;
            return aP;
          }
          "throw" === aO.type && (aH = aj, aF.method = "throw", aF.arg = aO.arg);
        }
      };
    }
    function av(aD, aE) {
      var aF = aE.method,
        aG = aD.iterator[aF];
      if (aG === a4) {
        aE.delegate = null;
        "throw" === aF && aD.iterator.return && (aE.method = "return", aE.arg = a4, av(aD, aE), "throw" === aE.method) || "return" !== aF && (aE.method = "throw", aE.arg = new TypeError("The iterator does not provide a '" + aF + "' method"));
        return ak;
      }
      var aH = af(aG, aD.iterator, aE.arg);
      if ("throw" === aH.type) {
        aE.method = "throw";
        aE.arg = aH.arg;
        aE.delegate = null;
        return ak;
      }
      var aI = aH.arg;
      return aI ? aI.done ? (aE[aD.resultName] = aI.value, aE.next = aD.nextLoc, "return" !== aE.method && (aE.method = "next", aE.arg = a4), aE.delegate = null, ak) : aI : (aE.method = "throw", aE.arg = new TypeError("iterator result is not an object"), aE.delegate = null, ak);
    }
    function aw(aD) {
      var aE = {
        tryLoc: aD[0]
      };
      var aF = aE;
      1 in aD && (aF.catchLoc = aD[1]);
      2 in aD && (aF.finallyLoc = aD[2], aF.afterLoc = aD[3]);
      this.tryEntries.push(aF);
    }
    function ax(aD) {
      var aE = aD.completion || {};
      aE.type = "normal";
      delete aE.arg;
      aD.completion = aE;
    }
    function ay(aD) {
      var aF = {
        tryLoc: "root"
      };
      this.tryEntries = [aF];
      aD.forEach(aw, this);
      this.reset(!0);
    }
    function az(aD) {
      if (aD || "" === aD) {
        var aF = aD[aa];
        if (aF) {
          return aF.call(aD);
        }
        if ("function" == typeof aD.next) {
          return aD;
        }
        if (!isNaN(aD.length)) {
          var aG = -1,
            aH = function aK() {
              for (; ++aG < aD.length;) {
                if (a7.call(aD, aG)) {
                  aK.value = aD[aG];
                  aK.done = !1;
                  return aK;
                }
              }
              aK.value = a4;
              aK.done = !0;
              return aK;
            };
          return aH.next = aH;
        }
      }
      throw new TypeError(b(aD) + " is not iterable");
    }
    am.prototype = an;
    a8(ar, "constructor", {
      value: an,
      configurable: !0
    });
    a8(an, "constructor", {
      value: am,
      configurable: !0
    });
    am.displayName = ad(an, ac, "GeneratorFunction");
    a5.isGeneratorFunction = function (aD) {
      var aE = "function" == typeof aD && aD.constructor;
      return !!aE && (aE === am || "GeneratorFunction" === (aE.displayName || aE.name));
    };
    a5.mark = function (aD) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aD, an) : (aD.__proto__ = an, ad(aD, ac, "GeneratorFunction"));
      aD.prototype = Object.create(ar);
      return aD;
    };
    a5.awrap = function (aD) {
      var aG = {
        __await: aD
      };
      return aG;
    };
    as(at.prototype);
    ad(at.prototype, ab, function () {
      return this;
    });
    a5.AsyncIterator = at;
    a5.async = function (aD, aE, aF, aG, aH) {
      void 0 === aH && (aH = Promise);
      var aJ = new at(ae(aD, aE, aF, aG), aH);
      return a5.isGeneratorFunction(aE) ? aJ : aJ.next().then(function (aK) {
        return aK.done ? aK.value : aJ.next();
      });
    };
    as(ar);
    ad(ar, ac, "Generator");
    ad(ar, aa, function () {
      return this;
    });
    ad(ar, "toString", function () {
      return "[object Generator]";
    });
    a5.keys = function (aD) {
      var aE = {};
      aE.arPby = function (aJ, aK) {
        return aJ === aK;
      };
      var aG = Object(aD),
        aH = [];
      for (var aI in aG) aH.push(aI);
      aH.reverse();
      return function aJ() {
        for (; aH.length;) {
          var aL = aH.pop();
          if (aL in aG) {
            aJ.value = aL;
            aJ.done = !1;
            return aJ;
          }
        }
        aJ.done = !0;
        return aJ;
      };
    };
    a5.values = az;
    ay.prototype = {
      constructor: ay,
      reset: function (aD) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a4, this.done = !1, this.delegate = null, this.method = "next", this.arg = a4, this.tryEntries.forEach(ax), !aD) {
          for (var aE in this) "t" === aE.charAt(0) && a7.call(this, aE) && !isNaN(+aE.slice(1)) && (this[aE] = a4);
        }
      },
      stop: function () {
        this.done = !0;
        var aD = this.tryEntries[0].completion;
        if ("throw" === aD.type) {
          throw aD.arg;
        }
        return this.rval;
      },
      dispatchException: function (aD) {
        if (this.done) {
          throw aD;
        }
        var aG = this;
        function aM(aN, aO) {
          aJ.type = "throw";
          aJ.arg = aD;
          aG.next = aN;
          aO && (aG.method = "next", aG.arg = a4);
          return !!aO;
        }
        for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
          var aI = this.tryEntries[aH],
            aJ = aI.completion;
          if ("root" === aI.tryLoc) {
            return aM("end");
          }
          if (aI.tryLoc <= this.prev) {
            var aK = a7.call(aI, "catchLoc"),
              aL = a7.call(aI, "finallyLoc");
            if (aK && aL) {
              if (this.prev < aI.catchLoc) {
                return aM(aI.catchLoc, !0);
              }
              if (this.prev < aI.finallyLoc) {
                return aM(aI.finallyLoc);
              }
            } else {
              if (aK) {
                if (this.prev < aI.catchLoc) {
                  return aM(aI.catchLoc, !0);
                }
              } else {
                if (!aL) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aI.finallyLoc) {
                  return aM(aI.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aD, aE) {
        for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
          var aH = this.tryEntries[aG];
          if (aH.tryLoc <= this.prev && a7.call(aH, "finallyLoc") && this.prev < aH.finallyLoc) {
            var aI = aH;
            break;
          }
        }
        aI && ("break" === aD || "continue" === aD) && aI.tryLoc <= aE && aE <= aI.finallyLoc && (aI = null);
        var aJ = aI ? aI.completion : {};
        aJ.type = aD;
        aJ.arg = aE;
        return aI ? (this.method = "next", this.next = aI.finallyLoc, ak) : this.complete(aJ);
      },
      complete: function (aD, aE) {
        if ("throw" === aD.type) {
          throw aD.arg;
        }
        "break" === aD.type || "continue" === aD.type ? this.next = aD.arg : "return" === aD.type ? (this.rval = this.arg = aD.arg, this.method = "return", this.next = "end") : "normal" === aD.type && aE && (this.next = aE);
        return ak;
      },
      finish: function (aD) {
        for (var aE = this.tryEntries.length - 1; aE >= 0; --aE) {
          var aF = this.tryEntries[aE];
          if (aF.finallyLoc === aD) {
            this.complete(aF.completion, aF.afterLoc);
            ax(aF);
            return ak;
          }
        }
      },
      catch: function (aD) {
        for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
          var aH = this.tryEntries[aG];
          if (aH.tryLoc === aD) {
            var aI = aH.completion;
            if ("throw" === aI.type) {
              var aJ = aI.arg;
              ax(aH);
            }
            return aJ;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aD, aE, aF) {
        this.delegate = {
          iterator: az(aD),
          resultName: aE,
          nextLoc: aF
        };
        "next" === this.method && (this.arg = a4);
        return ak;
      }
    };
    return a5;
  }
  function h(a3, a4, a5, a6, a7, a8, a9) {
    try {
      var ab = a3[a8](a9),
        ac = ab.value;
    } catch (af) {
      return void a5(af);
    }
    ab.done ? a4(ac) : Promise.resolve(ac).then(a6, a7);
  }
  function i(a3) {
    return function () {
      var a6 = this,
        a7 = arguments;
      return new Promise(function (a8, a9) {
        var ab = a3.apply(a6, a7);
        function ac(ae) {
          h(ab, a8, a9, ac, ad, "next", ae);
        }
        function ad(ae) {
          h(ab, a8, a9, ac, ad, "throw", ae);
        }
        ac(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.XinJiangBei : $.getdata("XinJiangBei")) || "",
    k = void 0;
  window = {};
  var l = "",
    m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "",
    w = "",
    x = "",
    y = "102",
    z = "10050",
    A = "FR*r!isE5W";
  function B() {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function a4() {
      var a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6;
      return g().wrap(function b7(b8) {
        for (;;) {
          switch (b8.prev = b8.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                b8.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              b8.next = 5;
              return a1("先去boxjs填写账号密码");
            case 5:
              return b8.abrupt("return");
            case 6:
              b8.next = 8;
              return Z();
            case 8:
              k = b8.sent;
              a6 = j.split(" ");
              a7 = c(a6);
              b8.prev = 11;
              a7.s();
            case 13:
              if ((a8 = a7.n()).done) {
                b8.next = 239;
                break;
              }
              aa = a8.value;
              console.log("随机生成UA");
              ab = X();
              t = ab.ua;
              u = ab.commonUa;
              v = ab.uuid;
              console.log(t);
              console.log(u);
              p = aa.split("&")[0];
              q = aa.split("&")[1];
              r = aa.split("&")[2];
              s = aa.split("&")[3] || p;
              console.log("用户：".concat(p, "开始任务"));
              console.log("获取sessionId");
              b8.next = 30;
              return J("/api/account/init");
            case 30:
              ac = b8.sent;
              n = ac.data.session.id;
              console.log(n);
              console.log("获取signature_key");
              b8.next = 36;
              return D("/web/init?client_id=".concat(z));
            case 36:
              ad = b8.sent;
              l = ad.data.client.signature_key;
              console.log(l);
              console.log("获取code");
              b8.next = 42;
              return F("/web/oauth/credential_auth");
            case 42:
              if (ae = b8.sent, ae.data) {
                b8.next = 46;
                break;
              }
              console.log(ae.message);
              return b8.abrupt("continue", 237);
            case 46:
              af = ae.data.authorization_code.code;
              console.log(af);
              console.log("登录");
              b8.next = 51;
              return J("/api/zbtxz/login", "check_token=&code=".concat(af, "&token=&type=-1&union_id="));
            case 51:
              ag = b8.sent;
              console.log("登录成功");
              o = ag.data.session.account_id;
              n = ag.data.session.id;
              console.log("————————————");
              console.log("获取id");
              b8.next = 59;
              return H("/api/buoy/list");
            case 59:
              if (ah = b8.sent, null == ah || null === (a9 = ah.data) || void 0 === a9 || null === (a9 = a9.new_up) || void 0 === a9 || !a9.icon_list[0].turn_to.url) {
                b8.next = 147;
                break;
              }
              for (ai = decodeURIComponent(ah.data.new_up.icon_list[0].turn_to.url), aj = ai.split("redirect")[1], aj = aj.split("?")[1], ak = {}, al = aj.split("&"), am = 0, an = al.length; am < an; am++) {
                ao = al[am].split("=");
                ak[ao[0]] = ao[1];
              }
              x = ak.id;
              console.log(x);
              console.log("阅读登录");
              b8.next = 72;
              return L("/customActivity/zjtm/autoLogin?_=".concat(Date.now(), "&sessionId=").concat(n, "&accountId=").concat(o, "&redirectUrl=https://92261.activity-14.m.duiba.com.cn/hdtool/index?id=").concat(x, "&dbnewopen"));
            case 72:
              ap = b8.sent;
              aq = ap.data;
              w = "";
              b8.next = 77;
              return P(aq);
            case 77:
              w = b8.sent;
              console.log("获取抽奖key");
              b8.next = 81;
              return N("https://92261.activity-14.m.duiba.com.cn/hdtool/index?id=266434186956361&dbnewopen&from=login&spm=92261.1.1.1");
            case 81:
              ar = b8.sent;
              b8.next = 84;
              return R("/hdtool/ajaxElement?_=".concat(Date.now()), "hdType=dev&hdToolId=&preview=false&actId=".concat(x, "&adslotId="));
            case 84:
              as = b8.sent;
              console.log("拥有".concat(as.element.freeLimit, "次抽奖"));
              at = 0;
            case 87:
              if (!(at < as.element.freeLimit)) {
                b8.next = 145;
                break;
              }
              b8.next = 90;
              return R("/hdtool/ctoken/getTokenNew", "timestamp=".concat(Date.now(), "&activityId=").concat(x, "&activityType=hdtool&consumerId=4134698352"));
            case 90:
              au = b8.sent;
              eval(au.token);
              av = window[ar];
              b8.next = 95;
              return R("/hdtool/dy/doJoin?dpm=92261.3.1.0&activityId=".concat(x, "&_=").concat(Date.now()), "actId=".concat(x, "&oaId=").concat(x, "&activityType=hdtool&consumerId=4134698352&token=").concat(av));
            case 95:
              if (aw = b8.sent, !aw.success) {
                b8.next = 141;
                break;
              }
              if (aw.orderId) {
                b8.next = 100;
                break;
              }
              console.log(aw.message);
              return b8.abrupt("break", 145);
            case 100:
              ax = aw.orderId;
              ay = 0;
            case 102:
              if (0 != ay) {
                b8.next = 139;
                break;
              }
              b8.next = 105;
              return R("/hdtool/getOrderStatus?_=".concat(Date.now()), "orderId=".concat(ax, "&adslotId="));
            case 105:
              if (az = b8.sent, ay = az.result, 0 != ay) {
                b8.next = 111;
                break;
              }
              console.log(az.message);
              b8.next = 137;
              break;
            case 111:
              if ("thanks" == az.lottery.type && console.log("谢谢参与"), "alipay" != az.lottery.type) {
                b8.next = 137;
                break;
              }
              for (console.log("抽奖获得支付宝红包：".concat(az.lottery.title)), aA = az.lottery.link, aB = aA.split("?")[1], aC = {}, aD = aB.split("&"), aE = 0, aF = aD.length; aE < aF; aE++) {
                aG = aD[aE].split("=");
                aC[aG[0]] = aG[1];
              }
              if (aH = aC.recordId, !r || !s) {
                b8.next = 136;
                break;
              }
              console.log("获取兑换key");
              b8.next = 124;
              return N("https://92261.activity-14.m.duiba.com.cn/activity/takePrizeNew?recordId=".concat(aH, "&dbnewopen"));
            case 124:
              ar = b8.sent;
              b8.next = 127;
              return R("/ctoken/getToken.do");
            case 127:
              aI = b8.sent;
              eval(aI.token);
              aJ = window[ar];
              b8.next = 132;
              return R("/activity/doTakePrize", "alipay=".concat(s, "&realname=").concat(encodeURI(r), "&recordId=").concat(aH, "&token=").concat(aJ));
            case 132:
              aK = b8.sent;
              console.log(aK.message);
              b8.next = 137;
              break;
            case 136:
              console.log("请设置支付宝姓名和账号");
            case 137:
              b8.next = 102;
              break;
            case 139:
              b8.next = 142;
              break;
            case 141:
              console.log(aw.message);
            case 142:
              at++;
              b8.next = 87;
              break;
            case 145:
              b8.next = 148;
              break;
            case 147:
              console.log("没有抽奖活动");
            case 148:
              console.log("————————————");
              console.log("开始签到");
              b8.next = 152;
              return H("/api/user_mumber/sign");
            case 152:
              aL = b8.sent;
              console.log("签到获得：".concat(aL.data.signIntegral, "积分"));
              console.log("————————————");
              console.log("开始任务");
              aM = !0;
              aN = !0;
              aO = !0;
              b8.next = 161;
              return H("/api/user_center/task?type=1&current=1&size=20");
            case 161:
              aP = b8.sent;
              aQ = c(aP.data.list);
              b8.prev = 163;
              aQ.s();
            case 165:
              if ((aR = aQ.n()).done) {
                b8.next = 187;
                break;
              }
              if (aS = aR.value, console.log("任务：".concat(aS.name)), 1 != aS.completed) {
                b8.next = 171;
                break;
              }
              console.log("任务已完成");
              return b8.abrupt("continue", 185);
            case 171:
              if (console.log("任务进度：".concat(aS.finish_times, "/").concat(aS.frequency)), "使用本地服务" != aS.name) {
                b8.next = 182;
                break;
              }
              aT = aS.finish_times;
            case 174:
              if (!(aT < aS.frequency)) {
                b8.next = 182;
                break;
              }
              b8.next = 177;
              return J("/api/user_mumber/doTask", "memberType=6&member_type=6");
            case 177:
              aU = b8.sent;
              console.log("任务完成获得：".concat(aU.data.score_notify.integral, "积分"));
            case 179:
              aT++;
              b8.next = 174;
              break;
            case 182:
              "新闻资讯阅读" == aS.name && (aM = !1);
              "新闻资讯点赞" == aS.name && (aN = !1);
              "分享资讯给好友" == aS.name && (aO = !1);
            case 185:
              b8.next = 165;
              break;
            case 187:
              b8.next = 192;
              break;
            case 189:
              b8.prev = 189;
              b8.t0 = b8.catch(163);
              aQ.e(b8.t0);
            case 192:
              b8.prev = 192;
              aQ.f();
              return b8.finish(192);
            case 195:
              if (aM && aN && aO) {
                b8.next = 230;
                break;
              }
              b8.next = 198;
              return H("/api/article/channel_list?channel_id=65e80c4779f6be5b358ba671&isDiFangHao=false&is_new=true&list_count=0&size=30");
            case 198:
              aV = b8.sent;
              aW = c(aV.data.article_list);
              b8.prev = 200;
              aW.s();
            case 202:
              if ((aX = aW.n()).done) {
                b8.next = 222;
                break;
              }
              if (aY = aX.value, aZ = aY.id, aM) {
                b8.next = 210;
                break;
              }
              b8.next = 208;
              return H("/api/article/read_time?channel_article_id=".concat(aZ, "&is_end=true&read_time=3051"));
            case 208:
              b0 = b8.sent;
              b0.data ? console.log("阅读获得：".concat(null === (b1 = b0.data) || void 0 === b1 || null === (b1 = b1.score_notify) || void 0 === b1 ? void 0 : b1.integral, "积分")) : console.log("文章已经阅读过了");
            case 210:
              if (aN) {
                b8.next = 215;
                break;
              }
              b8.next = 213;
              return J("/api/favorite/like", "action=true&id=".concat(aZ));
            case 213:
              b2 = b8.sent;
              b2.data ? console.log("点赞获得：".concat(null === (b3 = b2.data) || void 0 === b3 || null === (b3 = b3.score_notify) || void 0 === b3 ? void 0 : b3.integral, "积分")) : console.log("文章已经点赞过了");
            case 215:
              if (aO) {
                b8.next = 220;
                break;
              }
              b8.next = 218;
              return J("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id==".concat(aZ));
            case 218:
              b4 = b8.sent;
              b4.data.score_notify ? console.log("分享获得：".concat(null === (b5 = b4.data) || void 0 === b5 || null === (b5 = b5.score_notify) || void 0 === b5 ? void 0 : b5.integral, "积分")) : console.log("文章已经分享过了");
            case 220:
              b8.next = 202;
              break;
            case 222:
              b8.next = 227;
              break;
            case 224:
              b8.prev = 224;
              b8.t1 = b8.catch(200);
              aW.e(b8.t1);
            case 227:
              b8.prev = 227;
              aW.f();
              return b8.finish(227);
            case 230:
              console.log("————————————");
              console.log("查询积分");
              b8.next = 234;
              return H("/api/user_mumber/account_detail");
            case 234:
              b6 = b8.sent;
              console.log("拥有积分：".concat(b6.data.rst.total_integral, "\n"));
              m += "用户：".concat(p, " 积分：").concat(b6.data.rst.total_integral, "\n");
            case 237:
              b8.next = 13;
              break;
            case 239:
              b8.next = 244;
              break;
            case 241:
              b8.prev = 241;
              b8.t2 = b8.catch(11);
              a7.e(b8.t2);
            case 244:
              b8.prev = 244;
              a7.f();
              return b8.finish(244);
            case 247:
              if (!m) {
                b8.next = 250;
                break;
              }
              b8.next = 250;
              return a1(m);
            case 250:
            case "end":
              return b8.stop();
          }
        }
      }, a4, null, [[11, 241, 244, 247], [163, 189, 192, 195], [200, 224, 227, 230]]);
    }));
    return C.apply(this, arguments);
  }
  function D(a3) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function a4(a5) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a8) {
                var aa = {
                  url: "https://passport.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": V(),
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  }
                };
                $.get(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ah) {
                      for (;;) {
                        switch (ah.prev = ah.next) {
                          case 0:
                            try {
                              ae ? (console.log("".concat(JSON.stringify(ae))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a8(JSON.parse(ag));
                            } catch (aj) {
                              $.logErr(aj, af);
                            } finally {
                              a8();
                            }
                          case 1:
                          case "end":
                            return ah.stop();
                        }
                      }
                    }, ad);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a7.stop();
          }
        }
      }, a4);
    }));
    return E.apply(this, arguments);
  }
  function F(a3) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function a4(a5) {
      var a7;
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              a7 = T();
              return a8.abrupt("return", new Promise(function (aa) {
                var ab = {
                  url: "https://passport.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": a7.uuid,
                    "X-SIGNATURE": a7.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  },
                  body: a7.body
                };
                $.post(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            try {
                              af ? (console.log("".concat(JSON.stringify(af))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(ah));
                            } catch (ak) {
                              $.logErr(ak, ag);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, ae);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return G.apply(this, arguments);
  }
  function H(a3) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function a4(a5) {
      var a6;
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              a6 = U(a5);
              return a7.abrupt("return", new Promise(function (a9) {
                var aa = {
                  url: "https://vapp.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a6.time,
                    "X-SESSION-ID": n,
                    "X-REQUEST-ID": a6.uuid,
                    "X-SIGNATURE": a6.signature,
                    "X-TENANT-ID": y,
                    "X-ACCOUNT-ID": o,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  }
                };
                $.get(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            if (ai.prev = 0, !ae) {
                              ai.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ai.next = 9;
                            break;
                          case 6:
                            ai.next = 8;
                            return $.wait(2000);
                          case 8:
                            a9(JSON.parse(ag));
                          case 9:
                            ai.next = 14;
                            break;
                          case 11:
                            ai.prev = 11;
                            ai.t0 = ai.catch(0);
                            $.logErr(ai.t0, af);
                          case 14:
                            ai.prev = 14;
                            a9();
                            return ai.finish(14);
                          case 17:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ad, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a7.stop();
          }
        }
      }, a4);
    }));
    return I.apply(this, arguments);
  }
  function J(a3, a4) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function a4(a5, a6) {
      var a8;
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              a8 = U(a5);
              return a9.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://vapp.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a8.time,
                    "X-SESSION-ID": n,
                    "X-REQUEST-ID": a8.uuid,
                    "X-SIGNATURE": a8.signature,
                    "X-TENANT-ID": y,
                    "X-ACCOUNT-ID": o,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  },
                  body: a6
                };
                $.post(ac, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            if (ak.prev = 0, !ag) {
                              ak.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ag)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ak.next = 9;
                            break;
                          case 6:
                            ak.next = 8;
                            return $.wait(2000);
                          case 8:
                            aa(JSON.parse(ai));
                          case 9:
                            ak.next = 14;
                            break;
                          case 11:
                            ak.prev = 11;
                            ak.t0 = ak.catch(0);
                            $.logErr(ak.t0, ah);
                          case 14:
                            ak.prev = 14;
                            aa();
                            return ak.finish(14);
                          case 17:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, af, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a9.stop();
          }
        }
      }, a4);
    }));
    return K.apply(this, arguments);
  }
  function L(a3) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function a4(a5) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a8) {
                var aa = {
                  url: "https://92261.activity-42.m.duiba.com.cn".concat(a5),
                  headers: {
                    accept: "*/*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                    "x-requested-with": "io.pailian.jiangbei",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ah) {
                      for (;;) {
                        switch (ah.prev = ah.next) {
                          case 0:
                            if (ah.prev = 0, !ae) {
                              ah.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ah.next = 9;
                            break;
                          case 6:
                            ah.next = 8;
                            return $.wait(2000);
                          case 8:
                            a8(JSON.parse(ag));
                          case 9:
                            ah.next = 14;
                            break;
                          case 11:
                            ah.prev = 11;
                            ah.t0 = ah.catch(0);
                            $.logErr(ah.t0, af);
                          case 14:
                            ah.prev = 14;
                            a8();
                            return ah.finish(14);
                          case 17:
                          case "end":
                            return ah.stop();
                        }
                      }
                    }, ad, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a6.stop();
          }
        }
      }, a4);
    }));
    return M.apply(this, arguments);
  }
  function N(a3) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function a4(a5) {
      return g().wrap(function a7(a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ab = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                  "x-requested-with": "io.pailian.jiangbei",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  referer: "https://92261.activity-42.m.duiba.com.cn/",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: w
                };
                var ac = {
                  url: a5,
                  headers: ab
                };
                $.get(ac, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    var al, am;
                    return g().wrap(function an(ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            if (ao.prev = 0, !ah) {
                              ao.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ah)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ao.next = 13;
                            break;
                          case 6:
                            ao.next = 8;
                            return $.wait(2000);
                          case 8:
                            al = /<script type\b[^>]*>\s*var([\s\S]*?)<\/script>/.exec(aj)[1];
                            eval(al);
                            am = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
                            console.log(am);
                            aa(am);
                          case 13:
                            ao.next = 18;
                            break;
                          case 15:
                            ao.prev = 15;
                            ao.t0 = ao.catch(0);
                            $.logErr(ao.t0, ai);
                          case 18:
                            ao.prev = 18;
                            aa();
                            return ao.finish(18);
                          case 21:
                          case "end":
                            return ao.stop();
                        }
                      }
                    }, ag, null, [[0, 15, 18, 21]]);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return O.apply(this, arguments);
  }
  function P(a3) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function a4(a5) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a8) {
                var a9 = {
                  url: "https:".concat(a5),
                  headers: {
                    accept: "*/*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                    "x-requested-with": "io.pailian.jiangbei",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  followRedirect: !1
                };
                $.get(a9, function () {
                  var ab = i(g().mark(function ac(ad, ae, af) {
                    var ag, ah;
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            if (ai.prev = 0, !ad) {
                              ai.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ad)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ai.next = 10;
                            break;
                          case 6:
                            ai.next = 8;
                            return $.wait(2000);
                          case 8:
                            if ($.isNode()) {
                              for (ag = ae.headers["set-cookie"] || ae.headers["Set-Cookie"], ah = 0; ah < ag.length; ah++) {
                                w += ag[ah].split(";")[0] + ";";
                              }
                            } else {
                              w = ae.headers["set-cookie"] || ae.headers["Set-Cookie"];
                              w = Y(w);
                            }
                            a8(w);
                          case 10:
                            ai.next = 15;
                            break;
                          case 12:
                            ai.prev = 12;
                            ai.t0 = ai.catch(0);
                            $.logErr(ai.t0, ae);
                          case 15:
                            ai.prev = 15;
                            a8();
                            return ai.finish(15);
                          case 18:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ac, null, [[0, 12, 15, 18]]);
                  }));
                  return function (ad, ae, af) {
                    return ab.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a6.stop();
          }
        }
      }, a4);
    }));
    return Q.apply(this, arguments);
  }
  function R(a3, a4) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function a3(a4, a5) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a9) {
                var aa = {
                  url: "https://92261.activity-14.m.duiba.com.cn".concat(a4),
                  headers: {
                    accept: "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                    origin: "https://92261.activity-14.m.duiba.com.cn",
                    cookie: w,
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://92261.activity-14.m.duiba.com.cn/hdtool/index?id=".concat(x, "&dbnewopen&from=login&spm=92261.1.1.1"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: a5
                };
                $.post(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ah) {
                      for (;;) {
                        switch (ah.prev = ah.next) {
                          case 0:
                            if (ah.prev = 0, !ae) {
                              ah.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ah.next = 9;
                            break;
                          case 6:
                            ah.next = 8;
                            return $.wait(2000);
                          case 8:
                            a9(JSON.parse(ag));
                          case 9:
                            ah.next = 14;
                            break;
                          case 11:
                            ah.prev = 11;
                            ah.t0 = ah.catch(0);
                            $.logErr(ah.t0, af);
                          case 14:
                            ah.prev = 14;
                            a9();
                            return ah.finish(14);
                          case 17:
                          case "end":
                            return ah.stop();
                        }
                      }
                    }, ad, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a7.stop();
          }
        }
      }, a3);
    }));
    return S.apply(this, arguments);
  }
  function T() {
    var a8 = new (k.loadJSEncrypt())();
    a8.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    q = a8.encrypt(q);
    var a9 = V(),
      aa = "client_id=".concat(z, "&password=").concat(q, "&phone_number=").concat(p),
      ab = "post%%/web/oauth/credential_auth?".concat(aa, "%%").concat(a9, "%%");
    aa = "client_id=".concat(z, "&password=").concat(encodeURIComponent(q), "&phone_number=").concat(p);
    CryptoJS = k.createCryptoJS();
    var a5 = CryptoJS.HmacSHA256(ab, l),
      a6 = CryptoJS.enc.Hex.stringify(a5);
    var a7 = {};
    a7.uuid = a9;
    a7.signature = a6;
    a7.body = aa;
    return a7;
  }
  function U(a3) {
    var a4 = V(),
      a5 = Date.now();
    a3.indexOf("?") > 0 && (a3 = a3.substring(0, a3.indexOf("?")));
    CryptoJS = k.createCryptoJS();
    var a6 = CryptoJS.SHA256("".concat(a3, "&&").concat(n, "&&").concat(a4, "&&").concat(a5, "&&").concat(A, "&&").concat(y)).toString(),
      a7 = {
        uuid: a4,
        time: a5,
        signature: a6
      };
    return a7;
  }
  function V() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a5) {
      var a6 = 16 * Math.random() | 0,
        a7 = "x" === a5 ? a6 : 3 & a6 | 8;
      return a7.toString(16);
    });
  }
  function W(a3) {
    return a3[Math.floor(Math.random() * a3.length)];
  }
  function X() {
    var a3 = "1.7.0",
      a4 = V(),
      a5 = W(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      a6 = "Xiaomi " + a5,
      a7 = "Android",
      a8 = "".concat(a7.toUpperCase(), ";").concat("11", ";").concat(z, ";").concat(a3, ";1.0;null;").concat(a5),
      a9 = "".concat(a3, ";").concat(a4, ";").concat(a6, ";").concat(a7, ";").concat("11", ";").concat("6.9.0"),
      aa = {
        ua: a8,
        commonUa: a9,
        uuid: a4
      };
    return aa;
  }
  function Y(a3) {
    var a4 = a3.split(", "),
      a5 = a4.map(function (a6) {
        var a7 = a6.split(";")[0];
        return a7.trim();
      });
    return a5.join(";");
  }
  function Z() {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function a4() {
      var a6;
      return g().wrap(function a7(a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              if (a6 = $.getdata("Utils_Code") || "", !a6 || !Object.keys(a6).length) {
                a8.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a6);
              return a8.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a8.abrupt("return", new Promise(function () {
                var aa = i(g().mark(function ab(ac) {
                  return g().wrap(function ae(af) {
                    for (;;) {
                      switch (af.prev = af.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ah) {
                            $.setdata(ah, "Utils_Code");
                            eval(ah);
                            console.log("✅ Utils加载成功, 请继续");
                            ac(creatUtils());
                          });
                        case 1:
                        case "end":
                          return af.stop();
                      }
                    }
                  }, ab);
                }));
                return function (ac) {
                  return aa.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return a0.apply(this, arguments);
  }
  function a1(a3) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function a4(a5) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              if (!$.isNode()) {
                a6.next = 5;
                break;
              }
              a6.next = 3;
              return notify.sendNotify($.name, a5);
            case 3:
              a6.next = 6;
              break;
            case 5:
              $.msg($.name, "", a5);
            case 6:
            case "end":
              return a6.stop();
          }
        }
      }, a4);
    }));
    return a2.apply(this, arguments);
  }
  i(g().mark(function a3() {
    return g().wrap(function (a4) {
      for (;;) {
        switch (a4.prev = a4.next) {
          case 0:
            a4.next = 2;
            return B();
          case 2:
          case "end":
            return a4.stop();
        }
      }
    }, a3);
  }))().catch(function (a4) {
    $.log(a4);
  }).finally(function () {
    $.done({});
  });
})();