//Thu Jul 17 2025 01:01:32 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("快手极速版");
let tokens = $.getdata("ksjsb") || process.env.ksjsb || "",
  is_bf = $.getdata("ksjsb_bf") || process.env.ksjsb_bf || "1";
!(async () => {
  $.log("\n版本：0.3\n实现签到、开宝箱功能，增加定时模式，兼容安卓，优化报错\n------------------");
  is_bf = parseInt(is_bf);
  tokens.indexOf("@") != -1 ? tokens = tokens.split("@") || [] : tokens = tokens.split("\n") || [];
  if (!tokens[0]) {
    $.log("请设置环境变量添加快手极速版账号");
    return;
  }
  $.log("共获取到" + tokens.length + "个账号");
  let _0x375a48 = [];
  tokens.forEach(_0x6b686 => {
    let _0x12767e = jxUser(_0x6b686);
    if (_0x12767e.ck) {
      _0x375a48.push(new UserInfo(_0x12767e.ck, _0x12767e.sig2, _0x12767e.sig3, _0x12767e.kami, _0x12767e.cron));
    } else console.log("账号格式错误");
  });
  for (let _0x589345 = 0; _0x589345 < _0x375a48.length; _0x589345++) {
    let _0x99b5f1 = _0x375a48[_0x589345];
    if (is_bf) _0x99b5f1.main(_0x589345);else {
      await _0x99b5f1.main(_0x589345);
    }
  }
})().catch(_0x391648 => $.logErr(_0x391648)).finally(() => {
  if (is_bf) {}
});
function jxUser(_0x1205a2) {
  let _0xa6106d = {},
    _0x2ba709 = _0x1205a2.split("#");
  _0x2ba709.forEach(_0x1e5ee3 => {
    let _0x3a4ad8 = _0x1e5ee3.split("==");
    _0xa6106d[_0x3a4ad8[0]] = _0x3a4ad8[1];
  });
  return _0xa6106d;
}
function UserInfo(_0x2d3963 = "", _0x15de33 = "", _0x162bcd = "", _0x1baa79 = "", _0x50d591 = "") {
  let _0x1ffab5 = false,
    _0x4c6b2d = _0x2d3963,
    _0x1fc187 = _0x162bcd,
    _0x23804e = _0x15de33,
    _0x4899c4 = _0x1baa79,
    _0x3bffff = _0x50d591,
    _0x156b27 = 0;
  function _0x399fd2(_0x3521cf) {
    let _0x46c350 = _0x3521cf.replace("//", "/").split("/")[1],
      _0x382340 = "https://nebula.kuaishou.com/nebula/task/earning?source=menu&layoutType=4&hyId=nebula_earning&ts=" + $.timestamp();
    return {
      "Host": _0x46c350,
      "Connection": "keep-alive",
      "Accept": "*/*",
      "Referer": _0x382340,
      "Accept-Language": "zh-cn",
      "Cookie": _0x4c6b2d,
      "Content-Type": "application/json"
    };
  }
  this.main = async function (_0x295413) {
    let _0x37abdd = new Date().getTime();
    _0x156b27 = _0x295413 + 1;
    await _0x4de1ba();
    if (!_0x1ffab5) {
      await _0x21e5ef();
      if (zcheck == 200) {
        {
          await _0x4d1804();
          await _0x2bc5f5();
          if ((zzhuce == "账号已存在" || zzhuce == "注册成功") && zdenglu == 200) {
            {
              $.log("账号[" + _0x156b27 + "]卡密验证成功！");
              $.log("账号[" + _0x156b27 + "]卡密到期时间：" + $.time("yyyy-MM-dd HH:mm:ss", zvip * 1000));
              if (zvip * 1000 < $.timestamp()) $.log("账号[" + _0x156b27 + "]卡密已过期！"), _0x1ffab5 = true;else {}
            }
          } else {
            $.log("账号[" + _0x156b27 + "]卡密验证失败！");
            _0x1ffab5 = true;
          }
          if (!_0x1ffab5) {
            {
              await _0x3e9a28();
              let _0x567ce5 = 0;
              while (_0x567ce5 < 11) {
                _0x567ce5++;
                await _0x398b3b();
                if (_0x3bffff == 1 || remainbx == 0) _0x567ce5 = 12;else _0x3bffff == 0 && remainbx > 0 && ($.log("账号[" + _0x156b27 + "]正在等待下一次开宝箱..."), await $.wait(durtime));
              }
            }
          }
        }
      }
    }
    await $.done();
  };
  function _0x4de1ba() {
    return new Promise(_0x5e41f6 => {
      {
        let _0x452023 = "http://ip-api.com/json";
        const _0x450afd = {
          "url": _0x452023
        };
        $.get(_0x450afd, async (_0x312f37, _0x4e5b68, _0x863efb) => {
          try {
            _0x863efb ? (_0x863efb = JSON.parse(_0x863efb), _0x863efb.query ? zip = _0x863efb.query : ($.log("网络错误，终止运行"), _0x1ffab5 = true)) : ($.log("网络错误，终止运行"), _0x1ffab5 = true);
          } catch (_0x4703d1) {
            $.logErr(_0x4703d1, _0x4e5b68);
          } finally {
            _0x5e41f6(_0x863efb);
          }
        });
      }
    });
  }
  function _0x21e5ef() {
    return new Promise(_0x294272 => {
      {
        let _0x310e8a = "https://cdn.women.gq/kami/api.php?act=km_logon&app=10000&kami=" + _0x4899c4;
        const _0x32ca5d = {
          "url": _0x310e8a
        };
        $.get(_0x32ca5d, async (_0x15beee, _0x5835af, _0x1191ad) => {
          try {
            {
              if (_0x1191ad) {
                {
                  _0x1191ad = JSON.parse(_0x1191ad);
                  zcheck = _0x1191ad.code;
                  if (_0x1191ad.code == 200) {} else $.log("账号[" + _0x156b27 + "]" + _0x1191ad.msg + "！");
                }
              } else $.log("账号[" + _0x156b27 + "]网络错误，终止运行");
            }
          } catch (_0x17ce63) {
            $.logErr(_0x17ce63, _0x5835af);
          } finally {
            _0x294272(_0x1191ad);
          }
        });
      }
    });
  }
  function _0x4d1804() {
    return new Promise(_0x16cd04 => {
      let _0x2a93e2 = "https://cdn.women.gq/kami/api.php?act=user_reg&app=10001&user=" + _0x4899c4 + "&password=" + _0x4899c4;
      const _0x3bae3c = {
        "url": _0x2a93e2
      };
      $.get(_0x3bae3c, async (_0x51afa5, _0x1ccadf, _0x42a9f3) => {
        try {
          if (_0x42a9f3) {
            _0x42a9f3 = JSON.parse(_0x42a9f3);
            _0x42a9f3.msg ? zzhuce = _0x42a9f3.msg : _0x1ffab5 = true;
          } else {
            _0x1ffab5 = true;
          }
        } catch (_0x3d0d6c) {
          $.logErr(_0x3d0d6c, _0x1ccadf);
        } finally {
          _0x16cd04(_0x42a9f3);
        }
      });
    });
  }
  function _0x2bc5f5() {
    return new Promise(_0x5bb5af => {
      {
        let _0x26d12c = "https://cdn.women.gq/kami/api.php?act=user_logon&app=10001&account=" + _0x4899c4 + "&password=" + _0x4899c4 + "&markcode=" + zip;
        const _0x23f304 = {
          "url": _0x26d12c
        };
        $.get(_0x23f304, async (_0x37a936, _0x1c12cf, _0x379720) => {
          try {
            if (_0x379720) {
              _0x379720 = JSON.parse(_0x379720);
              zdenglu = _0x379720.code;
              zdenglu == 200 ? (ztoken = _0x379720.msg.token, zvip = _0x379720.msg.info.vip) : _0x1ffab5 = true;
            } else _0x1ffab5 = true;
          } catch (_0x2a13f1) {
            $.logErr(_0x2a13f1, _0x1c12cf);
          } finally {
            _0x5bb5af(_0x379720);
          }
        });
      }
    });
  }
  function _0x3e9a28() {
    return new Promise(_0x515dbb => {
      let _0x4c0fb = "https://nebula.kuaishou.com/rest/n/nebula/sign/sign?__NS_sig3=" + _0x23804e + "&sigCatVer=1&source=popup";
      const _0x3e357a = {
        "url": _0x4c0fb,
        "headers": _0x399fd2(_0x4c0fb)
      };
      $.get(_0x3e357a, async (_0x48d368, _0x4b1d42, _0x226dc0) => {
        try {
          if (_0x226dc0) {
            _0x226dc0 = JSON.parse(_0x226dc0);
            if (_0x226dc0.result) {
              {
                if (_0x226dc0.result == 1) {
                  $.log("账号[" + _0x156b27 + "]" + _0x226dc0.data.nebulaSignInPopup.title);
                } else _0x226dc0.result == 10901 ? $.log("账号[" + _0x156b27 + "]" + _0x226dc0.error_msg) : $.log("账号[" + _0x156b27 + "]签到失败！");
              }
            } else $.log("账号[" + _0x156b27 + "]参数错误请自查！");
          } else $.log("账号[" + _0x156b27 + "]参数错误请自查！");
        } catch (_0xebe6c1) {
          $.logErr(_0xebe6c1, _0x4b1d42);
        } finally {
          _0x515dbb(_0x226dc0);
        }
      });
    });
  }
  function _0x398b3b() {
    return new Promise(_0x383cdb => {
      let _0x184986 = "https://nebula.kuaishou.com/rest/n/nebula/box/explore?__NS_sig3=" + _0x1fc187 + "&sigCatVer=1&isOpen=true&isReadyOfAdPlay=true";
      const _0x56cdbd = {
        "url": _0x184986,
        "headers": _0x399fd2(_0x184986)
      };
      $.get(_0x56cdbd, async (_0xcb9fe3, _0x2cfc4b, _0x5534d8) => {
        try {
          if (_0x5534d8) _0x5534d8 = JSON.parse(_0x5534d8), _0x5534d8.data ? _0x5534d8.data.commonAwardPopup !== null ? (isOpenBox = true, durtime = _0x5534d8.data.treasureBoxOpenTimestamp - $.timestamp() + 5000, remainbx = _0x5534d8.data.remainingCount, $.log("账号[" + _0x156b27 + "]开宝箱获得: " + _0x5534d8.data.commonAwardPopup.awardAmount + "金币"), $.log("账号[" + _0x156b27 + "]下次开宝箱时间为：" + $.time("yyyy-MM-dd HH:mm:ss", _0x5534d8.data.treasureBoxOpenTimestamp)), $.log("账号[" + _0x156b27 + "]今天还有未开宝箱：" + _0x5534d8.data.remainingCount + "个")) : ($.log("账号[" + _0x156b27 + "]开宝箱失败，下次开宝箱时间为:" + $.time("yyyy-MM-dd HH:mm:ss", _0x5534d8.data.treasureBoxOpenTimestamp) + "，请稍后再试！"), remainbx = 0) : ($.log("账号[" + _0x156b27 + "]参数错误请自查！"), remainbx = 0);else {
            $.log("账号[" + _0x156b27 + "]参数错误请自查！");
            remainbx = 0;
          }
        } catch (_0x33ef1d) {
          $.logErr(_0x33ef1d, _0x2cfc4b);
        } finally {
          _0x383cdb(_0x5534d8);
        }
      });
    });
  }
}
function Env(_0x268670, _0x3f5b64) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0xcb26d9 {
    constructor(_0x4f148a) {
      this.env = _0x4f148a;
    }
    ["send"](_0x3f922f, _0xf9d1e0 = "GET") {
      _0x3f922f = "string" == typeof _0x3f922f ? {
        "url": _0x3f922f
      } : _0x3f922f;
      let _0x3ab2e5 = this.get;
      "POST" === _0xf9d1e0 && (_0x3ab2e5 = this.post);
      return new Promise((_0x16b82e, _0xba30cf) => {
        _0x3ab2e5.call(this, _0x3f922f, (_0xbffdaa, _0x4abbf0, _0x217b3f) => {
          _0xbffdaa ? _0xba30cf(_0xbffdaa) : _0x16b82e(_0x4abbf0);
        });
      });
    }
    ["get"](_0x113762) {
      return this.send.call(this.env, _0x113762);
    }
    ["post"](_0x348603) {
      return this.send.call(this.env, _0x348603, "POST");
    }
  }
  return new class {
    constructor(_0x2ee70e, _0x177fe9) {
      this.name = _0x2ee70e;
      this.http = new _0xcb26d9(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x177fe9);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x532cd4, _0x4f7981 = null) {
      try {
        return JSON.parse(_0x532cd4);
      } catch {
        return _0x4f7981;
      }
    }
    ["toStr"](_0x530a83, _0x282093 = null) {
      try {
        return JSON.stringify(_0x530a83);
      } catch {
        return _0x282093;
      }
    }
    ["getjson"](_0xfe5c46, _0x3619e5) {
      let _0x288838 = _0x3619e5;
      const _0x2ee900 = this.getdata(_0xfe5c46);
      if (_0x2ee900) try {
        _0x288838 = JSON.parse(this.getdata(_0xfe5c46));
      } catch {}
      return _0x288838;
    }
    ["setjson"](_0xc2f316, _0x481bef) {
      try {
        return this.setdata(JSON.stringify(_0xc2f316), _0x481bef);
      } catch {
        return false;
      }
    }
    ["getScript"](_0x2b4889) {
      return new Promise(_0x21cf37 => {
        this.get({
          "url": _0x2b4889
        }, (_0xfbcb47, _0x3bd181, _0x59cc32) => _0x21cf37(_0x59cc32));
      });
    }
    ["runScript"](_0x314433, _0x45adbb) {
      return new Promise(_0x13bb84 => {
        {
          let _0xc16624 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          _0xc16624 = _0xc16624 ? _0xc16624.replace(/\n/g, "").trim() : _0xc16624;
          let _0x363f3f = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          _0x363f3f = _0x363f3f ? 1 * _0x363f3f : 20;
          _0x363f3f = _0x45adbb && _0x45adbb.timeout ? _0x45adbb.timeout : _0x363f3f;
          const [_0x279c03, _0x6dcf2f] = _0xc16624.split("@"),
            _0x2260c2 = {
              "url": "http://" + _0x6dcf2f + "/v1/scripting/evaluate",
              "body": {
                "script_text": _0x314433,
                "mock_type": "cron",
                "timeout": _0x363f3f
              },
              "headers": {
                "X-Key": _0x279c03,
                "Accept": "*/*"
              }
            };
          this.post(_0x2260c2, (_0x5815db, _0x12ea94, _0x99990e) => _0x13bb84(_0x99990e));
        }
      }).catch(_0x32021e => this.logErr(_0x32021e));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x38711b = this.path.resolve(this.dataFile),
          _0x255a75 = this.path.resolve(process.cwd(), this.dataFile),
          _0x11955c = this.fs.existsSync(_0x38711b),
          _0x421032 = !_0x11955c && this.fs.existsSync(_0x255a75);
        if (!_0x11955c && !_0x421032) return {};
        {
          const _0x2de1ca = _0x11955c ? _0x38711b : _0x255a75;
          try {
            return JSON.parse(this.fs.readFileSync(_0x2de1ca));
          } catch (_0x4bbe03) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      {
        if (this.isNode()) {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const _0x24a909 = this.path.resolve(this.dataFile),
              _0x1decc2 = this.path.resolve(process.cwd(), this.dataFile),
              _0x256d15 = this.fs.existsSync(_0x24a909),
              _0xd8a104 = !_0x256d15 && this.fs.existsSync(_0x1decc2),
              _0x3d021b = JSON.stringify(this.data);
            _0x256d15 ? this.fs.writeFileSync(_0x24a909, _0x3d021b) : _0xd8a104 ? this.fs.writeFileSync(_0x1decc2, _0x3d021b) : this.fs.writeFileSync(_0x24a909, _0x3d021b);
          }
        }
      }
    }
    ["lodash_get"](_0x4bfec1, _0x17414a, _0x56ad7f) {
      {
        const _0x33a897 = _0x17414a.replace(/\[(\d+)\]/g, ".$1").split(".");
        let _0x1cdf65 = _0x4bfec1;
        for (const _0x344439 of _0x33a897) if (_0x1cdf65 = Object(_0x1cdf65)[_0x344439], undefined === _0x1cdf65) return _0x56ad7f;
        return _0x1cdf65;
      }
    }
    ["lodash_set"](_0x2f41f2, _0x337751, _0x5bbe6f) {
      return Object(_0x2f41f2) !== _0x2f41f2 ? _0x2f41f2 : (Array.isArray(_0x337751) || (_0x337751 = _0x337751.toString().match(/[^.[\]]+/g) || []), _0x337751.slice(0, -1).reduce((_0x2ef6bb, _0x27636e, _0x24c86c) => Object(_0x2ef6bb[_0x27636e]) === _0x2ef6bb[_0x27636e] ? _0x2ef6bb[_0x27636e] : _0x2ef6bb[_0x27636e] = Math.abs(_0x337751[_0x24c86c + 1]) >> 0 == +_0x337751[_0x24c86c + 1] ? [] : {}, _0x2f41f2)[_0x337751[_0x337751.length - 1]] = _0x5bbe6f, _0x2f41f2);
    }
    ["getdata"](_0x1953c0) {
      {
        let _0x451fb2 = this.getval(_0x1953c0);
        if (/^@/.test(_0x1953c0)) {
          {
            const [, _0x2ea287, _0x340178] = /^@(.*?)\.(.*?)$/.exec(_0x1953c0),
              _0x1eae84 = _0x2ea287 ? this.getval(_0x2ea287) : "";
            if (_0x1eae84) try {
              const _0x191c72 = JSON.parse(_0x1eae84);
              _0x451fb2 = _0x191c72 ? this.lodash_get(_0x191c72, _0x340178, "") : _0x451fb2;
            } catch (_0x556b05) {
              _0x451fb2 = "";
            }
          }
        }
        return _0x451fb2;
      }
    }
    ["setdata"](_0x25ddce, _0x1ee2e5) {
      let _0x9460f8 = false;
      if (/^@/.test(_0x1ee2e5)) {
        const [, _0x47ebf4, _0xf72401] = /^@(.*?)\.(.*?)$/.exec(_0x1ee2e5),
          _0x1673b4 = this.getval(_0x47ebf4),
          _0x1b622b = _0x47ebf4 ? "null" === _0x1673b4 ? null : _0x1673b4 || "{}" : "{}";
        try {
          {
            const _0x2bdb17 = JSON.parse(_0x1b622b);
            this.lodash_set(_0x2bdb17, _0xf72401, _0x25ddce);
            _0x9460f8 = this.setval(JSON.stringify(_0x2bdb17), _0x47ebf4);
          }
        } catch (_0x5cf258) {
          const _0x13ec58 = {};
          this.lodash_set(_0x13ec58, _0xf72401, _0x25ddce);
          _0x9460f8 = this.setval(JSON.stringify(_0x13ec58), _0x47ebf4);
        }
      } else _0x9460f8 = this.setval(_0x25ddce, _0x1ee2e5);
      return _0x9460f8;
    }
    ["getval"](_0x17cf48) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x17cf48) : this.isQuanX() ? $prefs.valueForKey(_0x17cf48) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x17cf48]) : this.data && this.data[_0x17cf48] || null;
    }
    ["setval"](_0x4ec76b, _0x38fbde) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x4ec76b, _0x38fbde) : this.isQuanX() ? $prefs.setValueForKey(_0x4ec76b, _0x38fbde) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x38fbde] = _0x4ec76b, this.writedata(), true) : this.data && this.data[_0x38fbde] || null;
    }
    ["initGotEnv"](_0x479cfa) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x479cfa && (_0x479cfa.headers = _0x479cfa.headers ? _0x479cfa.headers : {}, undefined === _0x479cfa.headers.Cookie && undefined === _0x479cfa.cookieJar && (_0x479cfa.cookieJar = this.ckjar));
    }
    ["get"](_0x16f7e0, _0x3fc27f = () => {}) {
      _0x16f7e0.headers && (delete _0x16f7e0.headers["Content-Type"], delete _0x16f7e0.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x16f7e0.headers = _0x16f7e0.headers || {}, Object.assign(_0x16f7e0.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(_0x16f7e0, (_0x205d15, _0x39d625, _0x17e52a) => {
        !_0x205d15 && _0x39d625 && (_0x39d625.body = _0x17e52a, _0x39d625.statusCode = _0x39d625.status);
        _0x3fc27f(_0x205d15, _0x39d625, _0x17e52a);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x16f7e0.opts = _0x16f7e0.opts || {}, Object.assign(_0x16f7e0.opts, {
        "hints": false
      })), $task.fetch(_0x16f7e0).then(_0x499452 => {
        const {
          statusCode: _0x1ff991,
          statusCode: _0x321a76,
          headers: _0x451bd9,
          body: _0x31059b
        } = _0x499452;
        _0x3fc27f(null, {
          "status": _0x1ff991,
          "statusCode": _0x321a76,
          "headers": _0x451bd9,
          "body": _0x31059b
        }, _0x31059b);
      }, _0x15625c => _0x3fc27f(_0x15625c))) : this.isNode() && (this.initGotEnv(_0x16f7e0), this.got(_0x16f7e0).on("redirect", (_0x45ca3e, _0x5bf366) => {
        try {
          if (_0x45ca3e.headers["set-cookie"]) {
            const _0x8c79e9 = _0x45ca3e.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x8c79e9 && this.ckjar.setCookieSync(_0x8c79e9, null);
            _0x5bf366.cookieJar = this.ckjar;
          }
        } catch (_0x319aa9) {
          this.logErr(_0x319aa9);
        }
      }).then(_0x28763a => {
        const {
          statusCode: _0x50aad6,
          statusCode: _0x1ff1d4,
          headers: _0x33cec5,
          body: _0x34b4a0
        } = _0x28763a;
        _0x3fc27f(null, {
          "status": _0x50aad6,
          "statusCode": _0x1ff1d4,
          "headers": _0x33cec5,
          "body": _0x34b4a0
        }, _0x34b4a0);
      }, _0x5b6b6e => {
        {
          const {
            message: _0xf65f12,
            response: _0x581d83
          } = _0x5b6b6e;
          _0x3fc27f(_0xf65f12, _0x581d83, _0x581d83 && _0x581d83.body);
        }
      }));
    }
    ["post"](_0x39f9aa, _0x3f1e78 = () => {}) {
      if (_0x39f9aa.body && _0x39f9aa.headers && !_0x39f9aa.headers["Content-Type"] && (_0x39f9aa.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x39f9aa.headers && delete _0x39f9aa.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x39f9aa.headers = _0x39f9aa.headers || {}, Object.assign(_0x39f9aa.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(_0x39f9aa, (_0x366b20, _0x59128f, _0x3fda08) => {
        !_0x366b20 && _0x59128f && (_0x59128f.body = _0x3fda08, _0x59128f.statusCode = _0x59128f.status);
        _0x3f1e78(_0x366b20, _0x59128f, _0x3fda08);
      });else {
        if (this.isQuanX()) _0x39f9aa.method = "POST", this.isNeedRewrite && (_0x39f9aa.opts = _0x39f9aa.opts || {}, Object.assign(_0x39f9aa.opts, {
          "hints": false
        })), $task.fetch(_0x39f9aa).then(_0x506f6c => {
          const {
            statusCode: _0xc146eb,
            statusCode: _0x188b3a,
            headers: _0x56999a,
            body: _0x3cc8cc
          } = _0x506f6c;
          _0x3f1e78(null, {
            "status": _0xc146eb,
            "statusCode": _0x188b3a,
            "headers": _0x56999a,
            "body": _0x3cc8cc
          }, _0x3cc8cc);
        }, _0x214245 => _0x3f1e78(_0x214245));else {
          if (this.isNode()) {
            this.initGotEnv(_0x39f9aa);
            const {
              url: _0x159985,
              ..._0x33a6e2
            } = _0x39f9aa;
            this.got.post(_0x159985, _0x33a6e2).then(_0x221eba => {
              {
                const {
                  statusCode: _0x1a6379,
                  statusCode: _0x2a7110,
                  headers: _0x1791de,
                  body: _0x3b0f55
                } = _0x221eba;
                _0x3f1e78(null, {
                  "status": _0x1a6379,
                  "statusCode": _0x2a7110,
                  "headers": _0x1791de,
                  "body": _0x3b0f55
                }, _0x3b0f55);
              }
            }, _0x5a440b => {
              const {
                message: _0x2de713,
                response: _0x5bd199
              } = _0x5a440b;
              _0x3f1e78(_0x2de713, _0x5bd199, _0x5bd199 && _0x5bd199.body);
            });
          }
        }
      }
    }
    ["time"](_0x30cb8e, _0x2ee3b8 = null) {
      const _0x49ec77 = _0x2ee3b8 ? new Date(_0x2ee3b8) : new Date();
      let _0x143260 = {
        "M+": _0x49ec77.getMonth() + 1,
        "d+": _0x49ec77.getDate(),
        "H+": _0x49ec77.getHours(),
        "m+": _0x49ec77.getMinutes(),
        "s+": _0x49ec77.getSeconds(),
        "q+": Math.floor((_0x49ec77.getMonth() + 3) / 3),
        "S": _0x49ec77.getMilliseconds()
      };
      /(y+)/.test(_0x30cb8e) && (_0x30cb8e = _0x30cb8e.replace(RegExp.$1, (_0x49ec77.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x2c4480 in _0x143260) new RegExp("(" + _0x2c4480 + ")").test(_0x30cb8e) && (_0x30cb8e = _0x30cb8e.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x143260[_0x2c4480] : ("00" + _0x143260[_0x2c4480]).substr(("" + _0x143260[_0x2c4480]).length)));
      return _0x30cb8e;
    }
    ["msg"](_0x42cd97 = _0x268670, _0x2ba20d = "", _0x25617f = "", _0x3bdf38) {
      const _0x2f1860 = _0x35126b => {
        if (!_0x35126b) return _0x35126b;
        if ("string" == typeof _0x35126b) return this.isLoon() ? _0x35126b : this.isQuanX() ? {
          "open-url": _0x35126b
        } : this.isSurge() ? {
          "url": _0x35126b
        } : undefined;
        if ("object" == typeof _0x35126b) {
          {
            if (this.isLoon()) {
              let _0x5ba1b6 = _0x35126b.openUrl || _0x35126b.url || _0x35126b["open-url"],
                _0x4a9e36 = _0x35126b.mediaUrl || _0x35126b["media-url"];
              return {
                "openUrl": _0x5ba1b6,
                "mediaUrl": _0x4a9e36
              };
            }
            if (this.isQuanX()) {
              {
                let _0x554c9c = _0x35126b["open-url"] || _0x35126b.url || _0x35126b.openUrl,
                  _0x5e593c = _0x35126b["media-url"] || _0x35126b.mediaUrl;
                return {
                  "open-url": _0x554c9c,
                  "media-url": _0x5e593c
                };
              }
            }
            if (this.isSurge()) {
              let _0x19d413 = _0x35126b.url || _0x35126b.openUrl || _0x35126b["open-url"];
              return {
                "url": _0x19d413
              };
            }
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x42cd97, _0x2ba20d, _0x25617f, _0x2f1860(_0x3bdf38)) : this.isQuanX() && $notify(_0x42cd97, _0x2ba20d, _0x25617f, _0x2f1860(_0x3bdf38))), !this.isMuteLog) {
        {
          let _0xb1366 = ["", "==============📣系统通知📣=============="];
          _0xb1366.push(_0x42cd97);
          _0x2ba20d && _0xb1366.push(_0x2ba20d);
          _0x25617f && _0xb1366.push(_0x25617f);
          console.log(_0xb1366.join("\n"));
          this.logs = this.logs.concat(_0xb1366);
        }
      }
    }
    ["log"](..._0xada612) {
      _0xada612.length > 0 && (this.logs = [...this.logs, ..._0xada612]);
      console.log(_0xada612.join(this.logSeparator));
    }
    ["logErr"](_0x22955b, _0xf34bf4) {
      {
        const _0x47fdbc = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        _0x47fdbc ? this.log("", "❗️" + this.name + ", 错误!", _0x22955b.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x22955b);
      }
    }
    ["wait"](_0x19f6aa) {
      return new Promise(_0x2c887a => setTimeout(_0x2c887a, _0x19f6aa));
    }
    ["timestamps"]() {
      return Date.parse(new Date()) / 1000;
    }
    ["timestamp"]() {
      return new Date().valueOf();
    }
    ["done"](_0x7c2924 = {}) {
      const _0x200b62 = new Date().getTime(),
        _0x5643a0 = (_0x200b62 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x5643a0 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x7c2924);
    }
  }(_0x268670, _0x3f5b64);
}