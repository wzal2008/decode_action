//Sun Dec 21 2025 02:32:42 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x1cf376 = require("querystring"),
  _0x3675b8 = require("axios"),
  _0x16203a = require("crypto"),
  _0x176a49 = require("querystring"),
  {
    SocksProxyAgent: _0x3b4b60
  } = require("socks-proxy-agent"),
  _0x43b053 = console.log;
console.log = function (..._0x48fa2f) {
  const _0x36a9bb = new Date(),
    _0x2e3883 = "[" + String(_0x36a9bb.getHours()).padStart(2, "0") + ":" + String(_0x36a9bb.getMinutes()).padStart(2, "0") + ":" + String(_0x36a9bb.getSeconds()).padStart(2, "0") + "]";
  _0x43b053(_0x2e3883, ..._0x48fa2f);
};
const _0x17dce5 = _0x267ce1("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcGTtQQyBaHg=="),
  _0x461bfa = _0x267ce1("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcDyJNBTRADyYbAjxI"),
  _0x1a80ba = _0x267ce1("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcEyYXHThC"),
  _0x5cc969 = _0x267ce1("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcCyJeQyBaHg==");
function _0x267ce1(_0x5c0462) {
  const _0x43dce2 = "xK9mP2nQ5rT8wY3";
  let _0x52282c = "";
  const _0x172787 = Buffer.from(_0x5c0462, "base64").toString("binary");
  for (let _0x3c936c = 0; _0x3c936c < _0x172787.length; _0x3c936c++) {
    _0x52282c += String.fromCharCode(_0x172787.charCodeAt(_0x3c936c) ^ _0x43dce2.charCodeAt(_0x3c936c % _0x43dce2.length));
  }
  return _0x52282c;
}
const _0x52ab99 = _0x267ce1("EzhmDCVGAQ5cAgtLEjpBHT9mBjVLMWMFQGA="),
  _0x4b6ffb = _0x267ce1("EzhmHjlVAA5UAj1nBDxQCi5NMjtXFw4HQmYM"),
  _0xd54b64 = _0x267ce1("EzhmBj1tDyFcLSddFCtWDBRSCCltXGEHRg=="),
  _0x5b5f60 = _0x267ce1("EzhmHjlVAA5UAj1nBTxACCRXHjVtBTRMLWYIRW0=");
function _0x1d4380(_0x437d7e, _0x548c99) {
  try {
    {
      const _0x4843be = Buffer.from(_0x437d7e, "base64").toString("binary");
      let _0x56183d = "";
      const _0x6c3086 = _0x548c99.length;
      for (let _0x3a02c0 = 0; _0x3a02c0 < _0x4843be.length; _0x3a02c0++) {
        _0x56183d += String.fromCharCode(_0x4843be.charCodeAt(_0x3a02c0) ^ _0x548c99.charCodeAt(_0x3a02c0 % _0x6c3086));
      }
      return JSON.parse(_0x56183d);
    }
  } catch (_0x2ddd98) {
    console.log("解密失败: " + _0x2ddd98.message);
    return null;
  }
}
function _0x2877d8(_0x45d5c7, _0x2278f2 = "") {
  if (process.env[_0x45d5c7] !== undefined) return process.env[_0x45d5c7];
  const _0x3b694c = _0x45d5c7.toLowerCase();
  for (const _0x2e0b11 in process.env) {
    {
      if (_0x2e0b11.toLowerCase() === _0x3b694c) return process.env[_0x2e0b11];
    }
  }
  return _0x2278f2;
}
function _0x32a0c6() {
  const _0x3de2c0 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x3de2c0[Math.floor(Math.random() * _0x3de2c0.length)];
}
const _0x3660 = _0x2877d8("DEV_MODE"),
  _0x1ff738 = _0x3660 === "1" || _0x3660 === "true";
function _0x4b7b13(_0x34d6c1, _0x3f7908) {
  const _0x4a0979 = parseInt(_0x2877d8(_0x34d6c1), 10);
  return isNaN(_0x4a0979) ? _0x3f7908 : _0x4a0979;
}
const _0x23b372 = _0x2877d8("km"),
  _0x2582aa = _0x2877d8("push"),
  _0x48e2e0 = _0x4b7b13("KSLOW_REWARD_THRESHOLD", 200),
  _0x5bd310 = _0x4b7b13("KSROUNDS", 5),
  _0x3509e9 = _0x4b7b13("KSCOIN_LIMIT", 150000),
  _0x322537 = _0x4b7b13("KSLOW_REWARD_LIMIT", 1),
  _0x127fd6 = _0x4b7b13("KSFOLLOW_COUNT", 1),
  _0x34e792 = _0x4b7b13("KSSEARCHFOLLOW_COUNT", 100),
  _0x57f46f = _0x4b7b13("KSLOOK_COUNT", 5),
  _0x940aea = _0x4b7b13("KSSEARCH_COUNT", 5);
function _0x1d689c() {
  const _0x5f2287 = _0x2877d8("tixian");
  if (!_0x5f2287) return {
    "enabled": false,
    "provider": "微信",
    "time": "",
    "autoExchange": true,
    "amount": 0
  };
  const _0x205837 = _0x5f2287.replace(/\//g, ",").split(",").map(_0x1a326d => _0x1a326d.trim()),
    _0x4d480d = {
      "enabled": false,
      "provider": "微信",
      "time": "",
      "autoExchange": true,
      "amount": 0
    };
  _0x205837[0] && (_0x4d480d.enabled = _0x205837[0] === "1");
  if (_0x205837[1]) {
    const _0x3d28ab = {
        "wx": "微信",
        "zfb": "支付宝",
        "yhk": "银行卡"
      },
      _0x48a545 = _0x205837[1].toLowerCase();
    _0x4d480d.provider = _0x3d28ab[_0x48a545] || "微信";
  }
  _0x205837[2] && (_0x4d480d.time = _0x205837[2]);
  _0x205837[3] && (_0x4d480d.autoExchange = _0x205837[3] === "2");
  if (_0x205837[4]) {
    const _0x294e31 = parseFloat(_0x205837[4]);
    _0x4d480d.amount = isNaN(_0x294e31) ? 0 : _0x294e31;
  }
  return _0x4d480d;
}
const _0x56ee5e = _0x1d689c();
function _0x581b47() {
  const _0x575d67 = _0x2877d8("Task");
  if (!_0x575d67) return ["food", "box", "look", "search"];
  const _0x2ebb2f = _0x575d67.split(",").map(_0x256336 => _0x256336.trim().toLowerCase()).filter(Boolean),
    _0x310f3c = ["food", "box", "look", "search"],
    _0x5228dd = _0x2ebb2f.filter(_0x1adff4 => _0x310f3c.includes(_0x1adff4));
  if (_0x5228dd.length === 0) return ["food", "box", "look", "search"];
  const _0x586734 = _0x5228dd.filter(_0x5cda85 => _0x5cda85 !== "look" && _0x5cda85 !== "search");
  _0x5228dd.includes("search") && _0x586734.push("search");
  _0x5228dd.includes("look") && _0x586734.push("look");
  return _0x586734;
}
function _0x34d5b5() {
  const _0x1216b8 = [],
    _0x520bc9 = new Set(),
    _0x537c63 = _0x2877d8("ksck");
  if (_0x537c63) {
    const _0x54f10f = _0x537c63.split("&").map(_0x2cc4b3 => _0x2cc4b3.trim()).filter(Boolean);
    _0x1216b8.push(..._0x54f10f);
  }
  for (let _0x48463f = 1; _0x48463f <= 666; _0x48463f++) {
    const _0xfbaaf5 = "ksck" + _0x48463f,
      _0x324c85 = _0x2877d8(_0xfbaaf5);
    if (_0x324c85) {
      const _0x1684f5 = _0x324c85.split("&").map(_0x338744 => _0x338744.trim()).filter(Boolean);
      _0x1216b8.push(..._0x1684f5);
    }
  }
  const _0x5d60cc = [];
  for (const _0x4a48ad of _0x1216b8) {
    !_0x520bc9.has(_0x4a48ad) && (_0x520bc9.add(_0x4a48ad), _0x5d60cc.push(_0x4a48ad));
  }
  return _0x5d60cc;
}
const _0x4e492c = _0x34d5b5(),
  _0x59aea8 = _0x4e492c.length,
  _0x3cd8aa = _0x581b47();
console.log("================================================================================");
console.log("您可以根据需求设置以下环境变量来自定义任务行为：");
console.log("----------------------------------------------------------------");
console.log("账号/任务控制 (必填/常用):");
console.log("  - ksck/ksckX: 账号信息 (cookie#salt#proxy) - 必填项");
console.log("  - Task: 指定任务 (如 food,box,look,search)");
console.log("  - KSROUNDS: 总执行轮数 (默认 5)");
console.log("----------------------------------------------------------------");
console.log("频率/追加次数 (已支持自定义):");
console.log("  - KSLOOK_COUNT: 每轮 look (主任务) 次数 (默认 5)");
console.log("  - KSFOLLOW_COUNT: 每次 look 成功后 follow (追加) 次数 (默认 1)");
console.log("  - KSSEARCH_COUNT: 每轮 search (主任务) 次数 (默认 5)");
console.log("  - KSSEARCHFOLLOW_COUNT: 每次 search 成功后 search_follow (追加) 次数 (默认 100)");
console.log("----------------------------------------------------------------");
console.log("风控/限制设置:");
console.log("  - KSCOIN_LIMIT: 金币上限 (超过停止, 默认 150000)");
console.log("  - KSLOW_REWARD_LIMIT: 连续低奖励停止次数 (默认 1)");
console.log("  - MAX_CONCURRENCY: 最大并发账号数 (默认 3)");
console.log("================================================================");
console.log("💎 检测到环境变量配置：" + _0x59aea8 + "个账号");
console.log("🎯 将执行以下任务：" + _0x3cd8aa.join(", "));
console.log("🎯 配置参数：轮数=" + _0x5bd310 + ", look次数/轮=" + _0x57f46f + ", search次数/轮=" + _0x940aea + ", follow次数/look=" + _0x127fd6 + ", search_follow次数/search=" + _0x34e792 + ", 金币上限=" + _0x3509e9 + ", 低奖励阈值=" + _0x48e2e0 + ", 连续低奖励上限=" + _0x322537);
if (_0x56ee5e.enabled) {
  const _0x407e5f = {
      "微信": "WX",
      "支付宝": "ZFB",
      "银行卡": "YHK"
    },
    _0x326909 = _0x407e5f[_0x56ee5e.provider] || "WX",
    _0x5f29dc = _0x56ee5e.time || "24.00",
    _0x55fa3d = _0x56ee5e.autoExchange ? "2" : "3";
  console.log("💰 提现配置: 1," + _0x326909 + "," + _0x5f29dc + "," + _0x55fa3d + "," + (_0x56ee5e.amount || 0) + " → tixian");
} else console.log("💰 提现配置: 0,WX,24.00,3,30 → tixian");
_0x2582aa ? console.log("📢 推送配置: 已启用 → push (任务完成后自动推送)") : console.log("📢 推送配置: 未启用 → push (设置token启用)");
const _0x2562e2 = _0x4b7b13("MAX_CONCURRENCY", 999);
_0x59aea8 > _0x2562e2 && (console.log("错误: 检测到 " + _0x59aea8 + " 个账号配置，最多只允许" + _0x2562e2 + "个"), process.exit(1));
function _0x45afbd() {
  try {
    const _0x4b8f1c = _0x59d7e8 => {
        const _0x1f2d04 = "0123456789abcdef";
        let _0x32b13c = "";
        for (let _0x40e97e = 0; _0x40e97e < _0x59d7e8; _0x40e97e++) {
          _0x32b13c += _0x1f2d04.charAt(Math.floor(Math.random() * _0x1f2d04.length));
        }
        return _0x32b13c;
      },
      _0x313892 = _0x4b8f1c(16),
      _0x1436a5 = "ANDROID_" + _0x313892;
    return _0x1436a5;
  } catch (_0x41bc21) {
    const _0x191da9 = Date.now().toString(16).toUpperCase();
    return "ANDROID_" + _0x191da9.substring(0, 16);
  }
}
async function _0x76b46f(_0x23236e) {
  if (!_0x23236e) return console.log("❌ 错误: 未设置km环境变量，无法运行脚本"), false;
  console.log("🔐 正在验证km变量...");
  try {
    const _0x3139d3 = Math.floor(Date.now() / 1000).toString(),
      _0x5eda17 = _0x16203a.createHash("md5").update(_0x23236e + _0x3139d3 + _0xd54b64).digest("hex"),
      {
        response: _0x36f01b,
        body: _0x45a276
      } = await _0x35ca1c({
        "method": "POST",
        "url": _0x1a80ba,
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify({
          "km": _0x23236e,
          "timestamp": _0x3139d3,
          "sign": _0x5eda17
        }),
        "timeout": 10000
      }, null, "km验证");
    if (_0x45a276 && _0x45a276.success === true) return console.log("✅ km变量验证成功，允许运行脚本"), true;else {
      console.log("❌ km变量验证失败: " + (_0x45a276?.["message"] || "验证不通过"));
      return false;
    }
  } catch (_0x530a91) {
    console.log("❌ km变量验证异常: " + _0x530a91.message);
    return false;
  }
}
async function _0xea0517(_0x8eac3a) {
  try {
    const _0x30d6bb = Math.floor(Date.now() / 1000).toString(),
      _0x44c426 = _0x16203a.createHash("md5").update(_0x8eac3a + _0x30d6bb + _0xd54b64).digest("hex"),
      {
        body: _0xaca027
      } = await _0x35ca1c({
        "method": "POST",
        "url": _0x1a80ba,
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify({
          "km": _0x8eac3a,
          "timestamp": _0x30d6bb,
          "sign": _0x44c426
        }),
        "timeout": 10000
      }, null, "km检查");
    return {
      "valid": _0xaca027 && _0xaca027.success === true,
      "message": _0xaca027?.["message"] || ""
    };
  } catch (_0x3e704d) {
    console.log("卡密检查失败: " + _0x3e704d.message);
    return {
      "valid": true,
      "message": _0x3e704d.message
    };
  }
}
let _0x3a9e9c = false,
  _0x586f33 = 0;
const _0x38ecf6 = 3;
let _0x225498 = 0;
const _0x208fc2 = 10;
let _0x2388d0 = null;
async function _0x5948e0(_0x4f86be, _0x534e25) {
  if (!_0x461bfa || !_0x56ee5e.enabled) {
    return {
      "success": false,
      "message": "未启用提现功能"
    };
  }
  try {
    const _0x1f7380 = new URLSearchParams({
        "action": "withdraw_info",
        "cookie": _0x4f86be,
        "card": _0x23b372
      }),
      {
        body: _0x3ef3cb
      } = await _0x35ca1c({
        "method": "POST",
        "url": _0x461bfa,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "body": _0x1f7380.toString(),
        "timeout": 30000
      }, null, "查询提现额度");
    return _0x3ef3cb && _0x3ef3cb.success ? {
      "success": true,
      "data": _0x3ef3cb.data
    } : {
      "success": false,
      "message": _0x3ef3cb?.["message"] || "查询失败"
    };
  } catch (_0x32f0b2) {
    return {
      "success": false,
      "message": _0x32f0b2.message
    };
  }
}
async function _0x709828(_0x590612, _0x5edc6b) {
  if (!_0x461bfa || !_0x56ee5e.enabled) {
    return {
      "success": false,
      "message": "未启用提现功能"
    };
  }
  try {
    {
      const _0x5bfb5e = new URLSearchParams({
          "action": "bind_info",
          "cookie": _0x590612,
          "card": _0x23b372
        }),
        {
          body: _0x5e1a7a
        } = await _0x35ca1c({
          "method": "POST",
          "url": _0x461bfa,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0x5bfb5e.toString(),
          "timeout": 30000
        }, null, "查询绑定信息");
      if (_0x5e1a7a && _0x5e1a7a.success) {
        return {
          "success": true,
          "data": _0x5e1a7a.data
        };
      } else return {
        "success": false,
        "message": _0x5e1a7a?.["message"] || "查询失败"
      };
    }
  } catch (_0x5a2915) {
    return {
      "success": false,
      "message": _0x5a2915.message
    };
  }
}
function _0x318232(_0x4377b1) {
  const _0x3bb28 = 300000,
    _0x21c1af = setInterval(async () => {
      console.log("\n定期检查卡密状态...");
      const _0x46cb41 = await _0xea0517(_0x4377b1);
      if (!_0x46cb41.valid) {
        console.log("\n" + "=".repeat(50));
        console.log("[x] 卡密已失效！");
        console.log("=".repeat(50));
        console.log("" + _0x46cb41.message);
        console.log("正在停止所有任务...");
        console.log("=".repeat(50) + "\n");
        _0x3a9e9c = true;
        clearInterval(_0x21c1af);
        process.exit(1);
      } else {
        console.log("卡密状态正常\n");
      }
    }, _0x3bb28);
  return _0x21c1af;
}
async function _0x48ab3f() {
  const _0x70de7a = ["https://api.ipify.org?format=json", "https://httpbin.org/ip", "https://api.ip.sb/ip"];
  for (const _0xbe57c1 of _0x70de7a) {
    try {
      const {
        body: _0x38c71d
      } = await _0x35ca1c({
        "method": "GET",
        "url": _0xbe57c1,
        "timeout": 5000
      }, null, "获取公网IP");
      if (_0x38c71d) {
        let _0x2404de = null;
        if (typeof _0x38c71d === "object") _0x2404de = _0x38c71d.ip || _0x38c71d.origin;else typeof _0x38c71d === "string" && (_0x2404de = _0x38c71d.trim());
        if (_0x2404de && _0xd38d38(_0x2404de)) return _0x2404de;
      }
    } catch (_0xedce83) {
      continue;
    }
  }
  return null;
}
async function _0x36c14e() {
  let _0x58b514 = await _0x48ab3f();
  if (!_0x58b514) {
    const _0xd5ca27 = _0x2877d8("ip");
    if (_0xd5ca27 && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0xd5ca27)) console.log("⚠️  自动获取IP失败，使用手动配置: " + _0xd5ca27), _0x58b514 = _0xd5ca27;else return console.log("❌ 无法获取公网IP，请检查网络连接或配置ip变量"), false;
  } else console.log("✅ 获取到公网IP: " + _0x58b514);
  try {
    const _0x2c543d = Math.floor(Date.now() / 1000).toString(),
      _0xcdf212 = "ks.js脚本",
      _0x1c3e5a = _0x16203a.createHash("md5").update(_0x58b514 + _0xcdf212 + _0x2c543d + _0x52ab99).digest("hex"),
      {
        body: _0x343fad
      } = await _0x35ca1c({
        "method": "POST",
        "url": _0x17dce5,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "form": {
          "action": "auto_add_ip",
          "ip": _0x58b514,
          "source": _0xcdf212,
          "timestamp": _0x2c543d,
          "sign": _0x1c3e5a
        },
        "timeout": 10000
      }, null, "自动添加IP白名单");
    if (_0x343fad && _0x343fad.success) return console.log("✅ 白名单添加成功: " + _0x58b514), true;else {
      console.log("⚠️  白名单自动添加失败: " + (_0x343fad?.["message"] || "未知错误"));
      console.log("🔍 检查IP是否已在白名单中...");
      const _0x18975d = Math.floor(Date.now() / 1000).toString(),
        _0x278a69 = _0x16203a.createHash("md5").update(_0x58b514 + "heartbeat" + _0x18975d + _0x52ab99).digest("hex"),
        {
          body: _0x4e65d7
        } = await _0x35ca1c({
          "method": "POST",
          "url": _0x17dce5,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "form": {
            "action": "check_whitelist",
            "ip": _0x58b514,
            "timestamp": _0x18975d,
            "sign": _0x278a69
          },
          "timeout": 10000
        }, null, "检查白名单"),
        _0x7f5d39 = _0x4e65d7 && _0x4e65d7.in_whitelist === true || _0x4e65d7 && _0x4e65d7.success === true;
      if (_0x7f5d39) return console.log("✅ IP已在白名单中（可能是管理员手动添加）: " + _0x58b514), true;else {
        console.log("⚠️  IP检查失败，但将继续尝试运行脚本");
        console.log("   返回数据: " + JSON.stringify(_0x4e65d7));
        console.log("   提示: 如果后续报错，请联系管理员确认白名单: " + _0x58b514);
        return true;
      }
    }
  } catch (_0x366f74) {
    console.log("❌ IP白名单操作异常: " + _0x366f74.message);
    return false;
  }
}
let _0x5bde51 = null,
  _0x1142c4 = null;
async function _0x318c03() {
  try {
    let _0xb65291 = _0x1142c4;
    if (!_0xb65291) {
      _0xb65291 = await _0x48ab3f();
      if (!_0xb65291) {
        {
          const _0x52a47e = _0x2877d8("ip");
          if (_0x52a47e && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x52a47e)) _0xb65291 = _0x52a47e;else {
            {
              console.log("⚠️  心跳检查：无法获取IP地址，跳过本次检查");
              return;
            }
          }
        }
      }
      _0x1142c4 = _0xb65291;
    }
    const _0x4896b3 = Math.floor(Date.now() / 1000).toString(),
      _0x35937d = _0x16203a.createHash("md5").update(_0xb65291 + "heartbeat" + _0x4896b3 + _0x52ab99).digest("hex"),
      {
        body: _0x16ef6c
      } = await _0x35ca1c({
        "method": "POST",
        "url": _0x17dce5,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "form": {
          "action": "check_whitelist",
          "ip": _0xb65291,
          "timestamp": _0x4896b3,
          "sign": _0x35937d
        },
        "timeout": 10000
      }, null, "白名单心跳检查"),
      _0x499745 = _0x16ef6c && _0x16ef6c.in_whitelist === true || _0x16ef6c && _0x16ef6c.success === true;
    if (_0x499745) {} else console.log("❌ 白名单心跳检查失败: " + (_0x16ef6c?.["message"] || "IP不在白名单中")), console.log("   返回数据: " + JSON.stringify(_0x16ef6c)), console.log("⚠️  可能原因: 1.白名单刚添加未生效 2.IP已过期被删除 3.网络波动"), console.log("⚠️  将在下次检查时重新验证，暂不退出脚本");
  } catch (_0x32d5e8) {
    console.log("⚠️  白名单心跳检查异常: " + _0x32d5e8.message + "，继续运行");
  }
}
function _0x3f34c1() {
  _0x5bde51 && clearInterval(_0x5bde51);
  console.log("✅ 白名单心跳检查已启动（后台静默运行，每5分钟检查一次，仅异常时提示）");
  setTimeout(() => {
    _0x318c03();
  }, 10000);
  _0x5bde51 = setInterval(() => {
    _0x318c03();
  }, 300000);
}
async function _0x35ca1c(_0x49f260, _0x26e991 = null, _0x483e5b = "Unknown Request") {
  const _0x5a7eac = {
    ..._0x49f260
  };
  let _0x1f0286 = null;
  if (_0x26e991) {
    try {
      _0x1f0286 = new _0x3b4b60(_0x26e991);
    } catch (_0x113f69) {
      console.log("[错误] " + _0x483e5b + " 代理URL无效(" + _0x113f69.message + ")，尝试直连模式");
    }
  }
  try {
    {
      let _0x1792c5 = _0x5a7eac.body,
        _0x75556f = _0x5a7eac.headers || {};
      _0x5a7eac.form && (_0x1792c5 = _0x1cf376.stringify(_0x5a7eac.form), _0x75556f["Content-Type"] = "application/x-www-form-urlencoded");
      const _0x42d749 = {
          "method": _0x5a7eac.method || "GET",
          "url": _0x5a7eac.url,
          "headers": _0x75556f,
          "data": _0x1792c5,
          "timeout": _0x5a7eac.timeout || 30000,
          ...(_0x1f0286 && {
            "httpAgent": _0x1f0286,
            "httpsAgent": _0x1f0286
          })
        },
        _0x2404dc = await _0x3675b8(_0x42d749);
      return {
        "response": _0x2404dc,
        "body": _0x2404dc.data
      };
    }
  } catch (_0x5749e8) {
    if (_0x5749e8.response) return {
      "response": _0x5749e8.response,
      "body": _0x5749e8.response.data
    };
    return {
      "response": null,
      "body": null
    };
  }
}
function _0xd38d38(_0x24b754) {
  if (!_0x24b754 || typeof _0x24b754 !== "string") return false;
  if (_0x24b754.includes("<html>") || _0x24b754.includes("503 Service Temporarily Unavailable") || _0x24b754.includes("502 Bad Gateway") || _0x24b754.includes("504 Gateway Timeout")) return false;
  const _0x110ef4 = /^(\d{1,3}\.){3}\d{1,3}$/,
    _0x4044e9 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  if (_0x110ef4.test(_0x24b754)) {
    const _0x512a9d = _0x24b754.split(".");
    for (const _0x36c7a3 of _0x512a9d) {
      {
        const _0x5033f1 = parseInt(_0x36c7a3, 10);
        if (_0x5033f1 < 0 || _0x5033f1 > 255 || isNaN(_0x5033f1)) {
          return false;
        }
      }
    }
    return true;
  }
  return _0x4044e9.test(_0x24b754);
}
async function _0x28b0c9(_0x1f1033, _0x3e2a7a = "代理连通性检测", _0x475b01 = 3) {
  if (!_0x1f1033) {
    return {
      "ok": true,
      "msg": "✅ 未配置代理（直连模式）",
      "ip": "localhost"
    };
  }
  let _0x50326c = null;
  const _0x181634 = ["https://httpbin.org/ip", "https://api.ipify.org?format=json"];
  for (let _0x69b602 = 1; _0x69b602 <= _0x475b01; _0x69b602++) {
    {
      console.log("🔌 " + _0x3e2a7a + " 测试代理连接中... (尝试 " + _0x69b602 + "/" + _0x475b01 + ")");
      for (const _0xee6d8e of _0x181634) {
        try {
          const {
            response: _0x73fe28,
            body: _0x50c25e
          } = await _0x35ca1c({
            "method": "GET",
            "url": _0xee6d8e,
            "headers": {
              "User-Agent": "ProxyTester/1.0"
            },
            "timeout": 15000
          }, _0x1f1033, _0x3e2a7a + " → " + new URL(_0xee6d8e).hostname);
          if (typeof _0x50c25e === "string" && (_0x50c25e.includes("<html>") || _0x50c25e.includes("503 Service Temporarily Unavailable") || _0x50c25e.includes("502 Bad Gateway") || _0x50c25e.includes("504 Gateway Timeout"))) continue;
          if (_0x50c25e) {
            let _0x5b55cd = null;
            if (_0xee6d8e.includes("httpbin.org") && _0x50c25e.origin) _0x5b55cd = _0x50c25e.origin;else {
              if (_0xee6d8e.includes("ipify.org") && _0x50c25e.ip) {
                _0x5b55cd = _0x50c25e.ip;
              } else {
                if (_0xee6d8e.includes("jsonip.com") && _0x50c25e.ip) {
                  _0x5b55cd = _0x50c25e.ip;
                } else {
                  if (_0xee6d8e.includes("my-ip.io") && _0x50c25e.ip) _0x5b55cd = _0x50c25e.ip;else {
                    if (typeof _0x50c25e === "string" && !_0x50c25e.includes("<")) {
                      _0x5b55cd = _0x50c25e.trim();
                    }
                  }
                }
              }
            }
            if (_0x5b55cd && _0xd38d38(_0x5b55cd)) return console.log("✅ " + _0x3e2a7a + " 代理测试成功，出口IP: " + _0x5b55cd), {
              "ok": true,
              "msg": "✅ SOCKS5代理正常，出口IP: " + _0x5b55cd,
              "ip": _0x5b55cd
            };
          }
        } catch (_0x366adc) {
          _0x50326c = _0x366adc;
          continue;
        }
        await new Promise(_0x1cde98 => setTimeout(_0x1cde98, 500));
      }
      if (_0x69b602 < _0x475b01) {
        const _0x59f51b = _0x69b602 * 2000;
        console.log("⏱️ " + _0x3e2a7a + " 所有端点测试失败，" + _0x59f51b / 1000 + "秒后重试...");
        await new Promise(_0x573839 => setTimeout(_0x573839, _0x59f51b));
      }
    }
  }
  try {
    new URL(_0x1f1033);
  } catch (_0x8fd758) {
    return {
      "ok": false,
      "msg": "❌ 代理URL格式错误: " + _0x8fd758.message,
      "ip": null
    };
  }
  return {
    "ok": false,
    "msg": "❌ 代理测试失败: " + (_0x50326c?.["message"] || "所有测试端点均无法访问"),
    "ip": null
  };
}
const _0x1c3932 = new Set();
async function _0x493d59(_0x229aa2, _0x43173d, _0x11898b = "?") {
  const _0x367e5e = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    {
      body: _0x4e5613
    } = await _0x35ca1c({
      "method": "GET",
      "url": _0x367e5e,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x229aa2,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x43173d, "账号[" + _0x11898b + "] 获取基本信息");
  if (_0x4e5613 && _0x4e5613.result === 1 && _0x4e5613.data) return {
    "nickname": _0x4e5613.data.userData?.["nickname"] || null,
    "totalCoin": _0x4e5613.data.totalCoin ?? null,
    "allCash": _0x4e5613.data.allCash ?? null
  };
  return null;
}
function _0x55d969(_0x39190a, _0x174c30) {
  _0x39190a = String(_0x39190a);
  if (_0x39190a.length >= _0x174c30) return _0x39190a.substring(0, _0x174c30);
  const _0x3ac906 = _0x174c30 - _0x39190a.length,
    _0x2d47b6 = Math.floor(_0x3ac906 / 2),
    _0x3e7839 = _0x3ac906 - _0x2d47b6;
  return " ".repeat(_0x2d47b6) + _0x39190a + " ".repeat(_0x3e7839);
}
class _0x5c0671 {
  constructor({
    index: _0x92ee50,
    salt: _0x361f17,
    cookie: _0x5130ed,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look", "search"],
    remark = ""
  }) {
    this.index = _0x92ee50;
    this.salt = _0x361f17;
    this.cookie = _0x5130ed;
    this.nickname = nickname || remark || "账号" + _0x92ee50;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = _0x3509e9;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.adaddnum = 0;
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "pageId": 11101,
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "pageId": 11101,
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "pageId": 11101,
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      },
      "follow": {
        "name": "追加看广告得金币",
        "pageId": 11101,
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 2,
        "taskType": 1
      },
      "search": {
        "name": "搜索任务",
        "pageId": 11014,
        "businessId": 7076,
        "posId": 216268,
        "subPageId": 100161537,
        "requestSceneType": 1,
        "taskType": 1
      },
      "search_follow": {
        "name": "搜索任务追加",
        "pageId": 11014,
        "businessId": 7076,
        "posId": 216268,
        "subPageId": 100161537,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    const _0x5828e8 = new Set(this.tasksToExecute);
    _0x5828e8.add("follow");
    _0x5828e8.add("search");
    _0x5828e8.add("search_follow");
    _0x5828e8.forEach(_0x455bbf => {
      if (this.taskConfigs[_0x455bbf]) {
        this.taskStats[_0x455bbf] = {
          "success": 0,
          "failed": 0,
          "totalReward": 0
        };
      }
    });
    this.sessionTotalReward = 0;
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = _0x48e2e0;
    this.lowRewardLimit = _0x322537;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x5447cc => {
      {
        if (this.taskConfigs[_0x5447cc]) {
          this.taskLimitReached[_0x5447cc] = false;
        }
      }
    });
    this.taskLimitReached.follow = false;
    this.taskLimitReached.search = false;
    this.taskLimitReached.search_follow = false;
  }
  async ["checkCoinLimit"]() {
    try {
      const _0x3909bc = await _0x493d59(this.cookie, this.proxyUrl, this.index);
      if (_0x3909bc && _0x3909bc.totalCoin) {
        {
          const _0x53e068 = parseInt(_0x3909bc.totalCoin);
          if (_0x53e068 >= this.coinLimit) {
            console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币已达 " + _0x53e068 + "，超过 " + this.coinLimit + " 阈值，将停止任务");
            this.coinExceeded = true;
            this.stopAllTasks = true;
            return true;
          }
        }
      }
      return false;
    } catch (_0x52b217) {
      console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币检查异常: " + _0x52b217.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      {
        const _0x3c1f8e = this.cookie.match(/egid=([^;]+)/),
          _0x2dbcf7 = this.cookie.match(/did=([^;]+)/),
          _0x3e3ce5 = this.cookie.match(/userId=([^;]+)/),
          _0x5e404d = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
          _0x25303b = this.cookie.match(/appver=([^;]+)/);
        this.egid = _0x3c1f8e ? _0x3c1f8e[1] : "";
        this.did = _0x2dbcf7 ? _0x2dbcf7[1] : "";
        this.userId = _0x3e3ce5 ? _0x3e3ce5[1] : "";
        this.kuaishouApiSt = _0x5e404d ? _0x5e404d[1] : "";
        this.appver = _0x25303b ? _0x25303b[1] : "13.7.20.10468";
        if (!this.egid || !this.did) {
          console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " cookie格式可能无 egid 或 did，但继续尝试...");
        }
      }
    } catch (_0x157368) {
      console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 解析cookie失败: " + _0x157368.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 任务执行统计:");
    const _0x58f40b = ["box", "look", "follow", "food", "search", "search_follow"];
    _0x58f40b.forEach(_0x231484 => {
      const _0x509145 = this.taskStats[_0x231484],
        _0x40267c = this.taskConfigs[_0x231484];
      _0x509145 && _0x40267c && console.log("  " + _0x40267c.name + ": 成功" + _0x509145.success + "次, 失败" + _0x509145.failed + "次, 总奖励" + _0x509145.totalReward + "金币");
    });
  }
  async ["retryOperation"](_0xdda19b, _0x3b797b, _0xc34070 = 3, _0x228b33 = 2000) {
    let _0xb21f9d = 0,
      _0xe4d6e3 = null;
    while (_0xb21f9d < _0xc34070) {
      {
        try {
          {
            const _0x534f24 = await _0xdda19b();
            if (_0x534f24) return _0x534f24;
            _0xe4d6e3 = new Error(_0x3b797b + " 返回空结果");
          }
        } catch (_0x2ce2a8) {
          _0xe4d6e3 = _0x2ce2a8;
          console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x3b797b + " 异常: " + _0x2ce2a8.message);
        }
        _0xb21f9d++;
        if (_0xb21f9d < _0xc34070) {
          console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x3b797b + " 失败，重试 " + _0xb21f9d + "/" + _0xc34070);
          await new Promise(_0x26b2b5 => setTimeout(_0x26b2b5, _0x228b33));
        }
      }
    }
    return null;
  }
  async ["getAdInfo"](_0x332a69) {
    try {
      const _0x13b8f3 = "/rest/e/reward/mixed/ad",
        _0x4ff9bc = {
          "encData": "|encData|",
          "sign": "|sign|",
          "cs": "false",
          "client_key": "2ac2a76d",
          "videoModelCrowdTag": "1_23",
          "os": "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        },
        _0x33f664 = {
          "earphoneMode": "1",
          "mod": "Xiaomi(23116PN5BC)",
          "appver": this.appver,
          "isp": "CUCC",
          "language": "zh-cn",
          "ud": this.userId,
          "did_tag": "0",
          "net": "WIFI",
          "kcv": "1599",
          "app": "0",
          "kpf": "ANDROID_PHONE",
          "ver": "11.6",
          "android_os": "0",
          "boardPlatform": "pineapple",
          "kpn": "NEBULA",
          "androidApiLevel": "35",
          "country_code": "cn",
          "sys": "ANDROID_15",
          "sw": "1080",
          "sh": "2400",
          "abi": "arm64",
          "userRecoBit": "0"
        };
      let _0x573537 = "{}";
      if (_0x332a69.businessId === 7076) {
        const _0xd4a671 = "eyJwYWdlSWQiOiAxMTAxNCwgInN1YlBhZ2VJZCI6IDEwMDE2MTUzNywgInBvc0lkIjogMjE2MjY4LCAiYnVzaW5lc3NJZCI6IDcwNzYsICJleHRQYXJhbXMiOiAiIiwgImN1c3RvbURhdGEiOiB7ImV4aXRJbmZvIjogeyJ0b2FzdERlc2MiOiBudWxsLCAidG9hc3RJbWdVcmwiOiBudWxsfX0sICJwZW5kYW50VHlwZSI6IDEsICJkaXNwbGF5VHlwZSI6IDIsICJzaW5nbGVQYWdlSWQiOiAwLCAic2luZ2xlU3ViUGFnZUlkIjogMCwgImNoYW5uZWwiOiAwLCAiY291bnRkb3duUmVwb3J0IjogZmFsc2UsICJ0aGVtZVR5cGUiOiAwLCAibWl4ZWRBZCI6IHRydWUsICJmdWxsTWl4ZWQiOiB0cnVlLCAiYXV0b1JlcG9ydCI6IHRydWUsICJmcm9tVGFza0NlbnRlciI6IHRydWUsICJzZWFyY2hJbnNwaXJlU2NoZW1lSW5mbyI6IG51bGwsICJhbW91bnQiOiAwfQ==",
          _0x204d21 = {
            "openH5AdCount": 0,
            "sessionLookedCompletedCount": this.adaddnum,
            "sessionType": _0x332a69.requestSceneType === 2 ? "2" : "1",
            "searchKey": "短剧小说",
            "triggerType": "2",
            "disableReportToast": true,
            "businessEnterAction": "7",
            "neoParams": _0xd4a671
          };
        _0x573537 = JSON.stringify(_0x204d21);
      }
      const _0x42b9c3 = {
          "appInfo": {
            "appId": "kuaishou_nebula",
            "name": "快手极速版",
            "packageName": "com.kuaishou.nebula",
            "version": this.appver,
            "versionCode": -1
          },
          "deviceInfo": {
            "osType": 1,
            "osVersion": "15",
            "deviceId": this.did,
            "screenSize": {
              "width": 1080,
              "height": 2249
            },
            "ftt": ""
          },
          "userInfo": {
            "userId": this.userId,
            "age": 0,
            "gender": ""
          },
          "impInfo": [{
            "pageId": _0x332a69.pageId || 11101,
            "subPageId": _0x332a69.subPageId,
            "action": 0,
            "browseType": 3,
            "impExtData": _0x573537,
            "mediaExtData": "{}"
          }]
        },
        _0x16cc74 = Buffer.from(JSON.stringify(_0x42b9c3)).toString("base64");
      let _0x45ad11 = await this.getSign(_0x16cc74);
      if (!_0x45ad11) {
        console.log("❌ 账号[" + this.nickname + "] 获取 encsign 失败，无法获取广告");
        return null;
      }
      _0x4ff9bc.encData = _0x45ad11.encdata;
      _0x4ff9bc.sign = _0x45ad11.sign;
      let _0x327c86 = await this.requestSignService({
        "urlpath": _0x13b8f3,
        "reqdata": _0x1cf376.stringify(_0x4ff9bc) + "&" + _0x1cf376.stringify(_0x33f664),
        "api_client_salt": this.salt
      });
      if (!_0x327c86) return console.log("❌ 账号[" + this.nickname + "] 获取 nesig 失败，无法获取广告"), null;
      const _0x43867a = {
          ..._0x33f664,
          "sig": _0x327c86.sig,
          "__NS_sig3": _0x327c86.__NS_sig3,
          "__NS_xfalcon": _0x327c86.__NS_xfalcon,
          "__NStokensig": _0x327c86.__NStokensig
        },
        _0x6a9e42 = "https://api.e.kuaishou.com" + _0x13b8f3 + "?" + _0x176a49.stringify(_0x43867a),
        {
          response: _0x19cd2e,
          body: _0x158add
        } = await _0x35ca1c({
          "method": "POST",
          "url": _0x6a9e42,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
          },
          "form": _0x4ff9bc,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告");
      if (!_0x158add) {
        return null;
      }
      if (_0x158add.errorMsg === "OK" && _0x158add.feeds && _0x158add.feeds[0] && _0x158add.feeds[0].ad) {
        const _0x545351 = _0x158add.feeds[0].caption || _0x158add.feeds[0].ad?.["caption"] || "",
          _0x4bfb62 = _0x158add.feeds[0].exp_tag || "",
          _0x1f9b7d = _0x4bfb62.split("/")[1]?.["split"]("_")?.[0] || "";
        return {
          "cid": _0x158add.feeds[0].ad.creativeId,
          "llsid": _0x1f9b7d
        };
      }
      console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告失败: " + (_0x158add.errorMsg || JSON.stringify(_0x158add).substring(0, 50)) + "...");
      return null;
    } catch (_0x6d2840) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告异常: " + _0x6d2840.message);
      return null;
    }
  }
  async ["generateSignature"](_0x48b9c6, _0x57b6b7, _0x3ca9a1, _0x21be33) {
    try {
      const _0x1b5262 = JSON.stringify({
          "businessId": _0x21be33.businessId,
          "endTime": this.endTime,
          "extParams": "",
          "mediaScene": "video",
          "neoInfos": [{
            "creativeId": _0x48b9c6,
            "extInfo": "",
            "llsid": _0x57b6b7,
            "requestSceneType": _0x21be33.requestSceneType,
            "taskType": _0x21be33.taskType,
            "watchExpId": "",
            "watchStage": 0
          }],
          "pageId": _0x21be33.pageId,
          "posId": _0x21be33.posId,
          "reportType": 0,
          "sessionId": "",
          "startTime": this.startTime,
          "subPageId": _0x21be33.subPageId
        }),
        _0x220592 = "bizStr=" + encodeURIComponent(_0x1b5262) + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + this.kuaishouApiSt,
        _0x4cd645 = this.queryParams + "&" + _0x220592,
        _0x56b40e = await this.requestSignService({
          "urlpath": this.taskReportPath,
          "reqdata": _0x4cd645,
          "api_client_salt": this.salt
        }, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 生成报告签名");
      if (!_0x56b40e) return null;
      return {
        "sig": _0x56b40e.sig,
        "sig3": _0x56b40e.__NS_sig3,
        "sigtoken": _0x56b40e.__NStokensig,
        "xfalcon": _0x56b40e.__NS_xfalcon,
        "post": _0x220592
      };
    } catch (_0x46b38b) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 生成签名异常: " + _0x46b38b.message);
      return null;
    }
  }
  async ["submitReport"](_0x2455cc, _0x439171, _0xab184, _0x2ae0c8, _0x51ebab, _0x2485e0, _0x442e52) {
    try {
      const _0x433e7d = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x2455cc + "&__NS_sig3=" + _0x439171 + "&__NS_xfalcon=" + _0x2ae0c8 + "&__NStokensig=" + _0xab184),
        {
          response: _0x24b52c,
          body: _0x872b5b
        } = await _0x35ca1c({
          "method": "POST",
          "url": _0x433e7d,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0x51ebab,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务");
      if (!_0x872b5b) {
        return {
          "success": false,
          "reward": 0
        };
      }
      if (_0x872b5b.result === 1) {
        {
          const _0x5b01e0 = _0x872b5b.data?.["neoAmount"] || 0;
          this.sessionTotalReward += _0x5b01e0;
          console.log("获取到广告 ==> 预计奖励[" + _0x5b01e0 + "]金币，目前已获[" + this.sessionTotalReward + "]金币");
          if (_0x5b01e0 <= this.lowRewardThreshold) this.lowRewardStreak++, this.did = _0x45afbd(), console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币奖励(" + _0x5b01e0 + ")低于阈值(" + this.lowRewardThreshold + ")，当前连续低奖励次数：" + this.lowRewardStreak + "/" + this.lowRewardLimit), this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务"), this.stopAllTasks = true);else {
            this.lowRewardStreak = 0;
          }
          return {
            "success": true,
            "reward": _0x5b01e0
          };
        }
      }
      if ([20107, 20108, 1003, 415].includes(_0x872b5b.result)) return console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x442e52.name + " 已达上限"), this.taskLimitReached[_0x2485e0] = true, {
        "success": false,
        "reward": 0
      };
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x442e52.name + " 奖励失败，result=" + _0x872b5b.result + " msg=" + (_0x872b5b.data || ""));
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0x2bf0f3) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务异常: " + _0x2bf0f3.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["getSign"](_0x33e4d7) {
    try {
      const _0x4dad7e = Math.floor(Date.now() / 1000).toString(),
        _0x27997d = "encsign",
        _0x387fb4 = _0x16203a.createHash("md5").update(_0x27997d + _0x33e4d7 + _0x4dad7e + _0x4b6ffb).digest("hex"),
        {
          response: _0x32f2ef,
          body: _0x418602
        } = await _0x35ca1c({
          "method": "POST",
          "url": _0x5cc969,
          "form": {
            "action": _0x27997d,
            "data": _0x33e4d7,
            "timestamp": _0x4dad7e,
            "sign": _0x387fb4
          }
        });
      if (!_0x418602) {
        console.log("❌ 账号[" + this.nickname + "] encsign 无响应数据");
        return null;
      }
      let _0x167ebd = _0x418602;
      if (_0x418602 && _0x418602.encrypted === true && _0x418602.data) {
        _0x167ebd = _0x1d4380(_0x418602.data, _0x5b5f60);
        if (!_0x167ebd) return console.log("❌ 账号[" + this.nickname + "] encsign 解密失败"), null;
      }
      if (_0x167ebd && _0x167ebd.status) return _0x167ebd.data;
      const _0x447867 = _0x167ebd?.["error"] === "IP_BLACKLISTED" || _0x167ebd?.["error"] === "BLACKLISTED" || _0x167ebd?.["message"] && (_0x167ebd.message.includes("黑名单") || _0x167ebd.message.includes("拉黑")) || _0x32f2ef && _0x32f2ef.status === 403;
      if (_0x447867) {
        _0x225498++;
        console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 被黑名单拦截，当前累计次数: " + _0x225498 + "/" + _0x208fc2);
        if (_0x225498 >= _0x208fc2) {
          console.log("\n" + "=".repeat(80));
          console.log("❌ 被黑名单拦截次数已达到 " + _0x208fc2 + " 次，强制停止脚本！");
          console.log("=".repeat(80) + "\n");
          _0x3a9e9c = true;
          typeof this !== "undefined" && this.stopAllTasks !== undefined && (this.stopAllTasks = true);
          setTimeout(() => {
            process.exit(1);
          }, 1000);
          return null;
        }
      }
      console.log("❌ 账号[" + this.nickname + "] encsign 签名服务失败: " + (_0x167ebd?.["message"] || "无响应"));
      return null;
    } catch (_0x106884) {
      console.log("❌ 账号[" + this.nickname + "] encsign 签名请求异常: " + _0x106884.message);
      return null;
    }
  }
  async ["requestSignService"](_0x4a1609, _0x27e440) {
    let _0x5206cb = {};
    const _0x23068a = Math.floor(Date.now() / 1000).toString(),
      _0x31b8a5 = "nssig",
      _0x33dd6c = _0x16203a.createHash("md5").update(_0x31b8a5 + _0x4a1609.urlpath + _0x4a1609.reqdata + _0x4a1609.api_client_salt + _0x23068a + _0x4b6ffb).digest("hex"),
      {
        response: _0x37f3b2,
        body: _0x45f96a
      } = await _0x35ca1c({
        "method": "POST",
        "url": _0x5cc969,
        "form": {
          "action": _0x31b8a5,
          "path": _0x4a1609.urlpath,
          "data": _0x4a1609.reqdata,
          "salt": _0x4a1609.api_client_salt,
          "timestamp": _0x23068a,
          "sign": _0x33dd6c
        },
        "timeout": 15000
      }, null, _0x27e440 + "（签名服务）");
    let _0x2d7937 = _0x45f96a;
    if (_0x45f96a && _0x45f96a.encrypted === true && _0x45f96a.data) {
      {
        _0x2d7937 = _0x1d4380(_0x45f96a.data, _0x5b5f60);
        if (!_0x2d7937) return console.log("❌ 账号[" + this.nickname + "] nssig 解密失败"), null;
      }
    }
    if (_0x2d7937 && _0x2d7937.data) {
      let _0x2e5563 = _0x2d7937.data.nssig3,
        _0x51a5fc = _0x2d7937.data.nstokensig,
        _0x216cc7 = _0x2d7937.data.nssig4;
      Object.assign(_0x5206cb, {
        "__NS_sig3": _0x2e5563,
        "__NStokensig": _0x51a5fc,
        "sig": _0x2d7937.data.sig,
        "__NS_xfalcon": _0x216cc7
      });
      return _0x5206cb;
    }
    const _0x4cef05 = _0x2d7937?.["error"] === "IP_BLACKLISTED" || _0x2d7937?.["error"] === "BLACKLISTED" || _0x2d7937?.["message"] && (_0x2d7937.message.includes("黑名单") || _0x2d7937.message.includes("拉黑")) || _0x37f3b2 && _0x37f3b2.status === 403;
    if (_0x4cef05) {
      _0x225498++;
      console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x27e440 + " 被黑名单拦截，当前累计次数: " + _0x225498 + "/" + _0x208fc2);
      if (_0x225498 >= _0x208fc2) return console.log("\n" + "=".repeat(80)), console.log("❌ 被黑名单拦截次数已达到 " + _0x208fc2 + " 次，强制停止脚本！"), console.log("=".repeat(80) + "\n"), _0x3a9e9c = true, typeof this !== "undefined" && this.stopAllTasks !== undefined && (this.stopAllTasks = true), setTimeout(() => {
        process.exit(1);
      }, 1000), null;
    }
    console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名服务失败: " + (_0x2d7937?.["error"] || _0x2d7937?.["message"] || "无响应"));
    return null;
  }
  async ["executeTask"](_0x2ba3fb) {
    const _0x2d4b8a = this.taskConfigs[_0x2ba3fb];
    if (!_0x2d4b8a) return false;
    if (this.taskLimitReached[_0x2ba3fb]) {
      return false;
    }
    try {
      const _0x4e4463 = await this.retryOperation(() => this.getAdInfo(_0x2d4b8a), "获取" + _0x2d4b8a.name + "信息", 3);
      if (!_0x4e4463) {
        {
          this.taskStats[_0x2ba3fb].failed++;
          _0x586f33++;
          console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取失败，当前累计失败次数: " + _0x586f33 + "/" + _0x38ecf6);
          if (_0x586f33 >= _0x38ecf6) {
            console.log("\n" + "=".repeat(80));
            console.log("❌ 获取失败次数已达到 " + _0x38ecf6 + " 次，强制停止脚本！");
            console.log("=".repeat(80) + "\n");
            _0x3a9e9c = true;
            typeof this !== "undefined" && this.stopAllTasks !== undefined && (this.stopAllTasks = true);
            setTimeout(() => {
              process.exit(1);
            }, 1000);
            return false;
          }
          return false;
        }
      }
      const _0x258f9a = Math.floor(Math.random() * 10000) + 30000;
      console.log("观看广告中... " + Math.round(_0x258f9a / 1000) + "秒");
      await new Promise(_0x44a0f2 => setTimeout(_0x44a0f2, _0x258f9a));
      const _0x4d80f1 = await this.retryOperation(() => this.generateSignature(_0x4e4463.cid, _0x4e4463.llsid, _0x2ba3fb, _0x2d4b8a), "生成" + _0x2d4b8a.name + "签名", 3);
      if (!_0x4d80f1) return this.taskStats[_0x2ba3fb].failed++, false;
      const _0xe1c905 = await this.retryOperation(() => this.submitReport(_0x4d80f1.sig, _0x4d80f1.sig3, _0x4d80f1.sigtoken, _0x4d80f1.xfalcon, _0x4d80f1.post, _0x2ba3fb, _0x2d4b8a), "提交" + _0x2d4b8a.name + "报告", 3);
      if (_0xe1c905?.["success"]) return this.taskStats[_0x2ba3fb].success++, this.taskStats[_0x2ba3fb].totalReward += _0xe1c905.reward || 0, true;
      this.taskStats[_0x2ba3fb].failed++;
      return false;
    } catch (_0x880b7a) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 任务异常(" + _0x2ba3fb + "): " + _0x880b7a.message);
      this.taskStats[_0x2ba3fb].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x240e17 = this.tasksToExecute.includes("look"),
      _0x4f7e41 = this.tasksToExecute.includes("food"),
      _0x45dae9 = this.tasksToExecute.includes("box"),
      _0x182f59 = this.tasksToExecute.includes("search"),
      _0x172e81 = this.tasksToExecute.filter(_0x2717c0 => _0x2717c0 !== "look" && _0x2717c0 !== "search");
    for (let _0x46f3d4 = 0; _0x46f3d4 < _0x5bd310; _0x46f3d4++) {
      if (this.stopAllTasks || _0x3a9e9c) break;
      console.log("\n============================== 🚀 账号[" + this.nickname + "] 第" + (_0x46f3d4 + 1) + "/" + _0x5bd310 + "轮开始 ==============================");
      if (_0x240e17) {
        const _0x3e7541 = this.taskConfigs.look,
          _0x204ec6 = this.taskConfigs.follow;
        console.log("🎬 开始执行 " + _0x3e7541.name + " (+" + _0x204ec6.name + ")，本轮共 " + _0x57f46f + " 次");
        for (let _0x2c0a7d = 0; _0x2c0a7d < _0x57f46f; _0x2c0a7d++) {
          if (this.stopAllTasks || _0x3a9e9c || this.taskLimitReached.look) break;
          console.log("\n--- 账号[" + this.nickname + "] " + _0x3e7541.name + " 第 " + (_0x2c0a7d + 1) + "/" + _0x57f46f + " 次执行 ---");
          const _0x723689 = await this.executeTask("look");
          if (_0x723689 && !this.stopAllTasks && !_0x3a9e9c) {
            const _0x11b6b8 = 20000 + Math.floor(Math.random() * 40000);
            console.log("⏱ 账号[" + this.nickname + "] look 任务成功，随机等待 " + Math.round(_0x11b6b8 / 1000) + " 秒后执行 " + _0x204ec6.name);
            await new Promise(_0x336dd3 => setTimeout(_0x336dd3, _0x11b6b8));
            const _0x14c1c7 = _0x127fd6;
            for (let _0x1bfc7b = 0; _0x1bfc7b < _0x14c1c7; _0x1bfc7b++) {
              {
                if (this.stopAllTasks || _0x3a9e9c || this.taskLimitReached.follow) break;
                console.log("\n--- 账号[" + this.nickname + "] " + _0x204ec6.name + " (第 " + (_0x1bfc7b + 1) + "/" + _0x14c1c7 + " 次) 紧随 look 任务执行 ---");
                await this.executeTask("follow");
              }
            }
          }
          if (_0x2c0a7d < _0x57f46f - 1 && !this.stopAllTasks && !_0x3a9e9c && !this.taskLimitReached.look) {
            const _0x4e7a5f = _0x2c0a7d < _0x57f46f - 1 && !this.stopAllTasks && !_0x3a9e9c && !this.taskLimitReached.look;
            if (_0x4e7a5f) {
              {
                const _0x208cf9 = 20000 + Math.floor(Math.random() * 40000);
                console.log("⏱ 账号[" + this.nickname + "] " + _0x3e7541.name + " 任务间隔，随机等待 " + Math.round(_0x208cf9 / 1000) + " 秒");
                await new Promise(_0x33cb85 => setTimeout(_0x33cb85, _0x208cf9));
              }
            }
          }
        }
        if (!this.stopAllTasks && !_0x3a9e9c && (_0x4f7e41 || _0x45dae9 || _0x182f59)) {
          {
            const _0x431dc2 = 20000 + Math.floor(Math.random() * 40000);
            console.log("\n🔄 账号[" + this.nickname + "] 任务组完成，等待 " + Math.round(_0x431dc2 / 1000) + " 秒切换...");
            await new Promise(_0x2a6fdf => setTimeout(_0x2a6fdf, _0x431dc2));
          }
        }
      }
      if (_0x182f59) {
        {
          const _0x565de7 = this.taskConfigs.search,
            _0x51a510 = this.taskConfigs.search_follow;
          console.log("\n🎬 开始执行 " + _0x565de7.name + " (+" + _0x51a510.name + ")，本轮共 " + _0x940aea + " 次");
          for (let _0x144ab5 = 0; _0x144ab5 < _0x940aea; _0x144ab5++) {
            if (this.stopAllTasks || _0x3a9e9c || this.taskLimitReached.search) break;
            console.log("\n--- 账号[" + this.nickname + "] " + _0x565de7.name + " 第 " + (_0x144ab5 + 1) + "/" + _0x940aea + " 次执行 ---");
            const _0x5e72eb = await this.executeTask("search");
            if (_0x5e72eb && !this.stopAllTasks && !_0x3a9e9c) {
              {
                const _0x4b2495 = 20000 + Math.floor(Math.random() * 40000);
                console.log("⏱ 账号[" + this.nickname + "] search 任务成功，随机等待 " + Math.round(_0x4b2495 / 1000) + " 秒后执行 " + _0x51a510.name);
                await new Promise(_0x2bb670 => setTimeout(_0x2bb670, _0x4b2495));
                const _0x1ec0d9 = _0x34e792;
                for (let _0x851c18 = 0; _0x851c18 < _0x1ec0d9; _0x851c18++) {
                  {
                    if (this.stopAllTasks || _0x3a9e9c || this.taskLimitReached.search_follow) break;
                    console.log("\n--- 账号[" + this.nickname + "] " + _0x51a510.name + " (第 " + (_0x851c18 + 1) + "/" + _0x1ec0d9 + " 次) 紧随 search 任务执行 ---");
                    this.adaddnum++;
                    await this.executeTask("search_follow");
                    this.adaddnum = 0;
                  }
                }
              }
            }
            if (_0x144ab5 < _0x940aea - 1 && !this.stopAllTasks && !_0x3a9e9c && !this.taskLimitReached.search) {
              {
                const _0x5290cf = _0x144ab5 < _0x940aea - 1 && !this.stopAllTasks && !_0x3a9e9c && !this.taskLimitReached.search;
                if (_0x5290cf) {
                  {
                    const _0x4a34bf = 20000 + Math.floor(Math.random() * 40000);
                    console.log("⏱ 账号[" + this.nickname + "] " + _0x565de7.name + " 任务间隔，随机等待 " + Math.round(_0x4a34bf / 1000) + " 秒");
                    await new Promise(_0x38c55a => setTimeout(_0x38c55a, _0x4a34bf));
                  }
                }
              }
            }
          }
          if (!this.stopAllTasks && !_0x3a9e9c && (_0x4f7e41 || _0x45dae9)) {
            const _0x3a47be = 20000 + Math.floor(Math.random() * 40000);
            console.log("\n🔄 账号[" + this.nickname + "] 任务组完成，等待 " + Math.round(_0x3a47be / 1000) + " 秒切换...");
            await new Promise(_0x17ac28 => setTimeout(_0x17ac28, _0x3a47be));
          }
        }
      }
      for (const _0x15f13b of _0x172e81) {
        {
          if (this.stopAllTasks || _0x3a9e9c) break;
          if (_0x15f13b === "look" || _0x15f13b === "search") continue;
          const _0x11b1eb = this.taskConfigs[_0x15f13b];
          if (this.taskLimitReached[_0x15f13b]) {
            console.log("⚠️ 账号[" + this.nickname + "] " + _0x11b1eb.name + " 已达上限，本轮跳过");
            continue;
          }
          console.log("\n🎬 开始执行 " + _0x11b1eb.name + "，本轮共 1 次");
          await this.executeTask(_0x15f13b);
          if (!this.stopAllTasks && !_0x3a9e9c) {
            {
              const _0x4f1c1f = 20000 + Math.floor(Math.random() * 40000);
              console.log("⏱ 账号[" + this.nickname + "] " + _0x11b1eb.name + " 任务间隔，随机等待 " + Math.round(_0x4f1c1f / 1000) + " 秒");
              await new Promise(_0xa0fa6d => setTimeout(_0xa0fa6d, _0x4f1c1f));
            }
          }
        }
      }
      if (_0x46f3d4 < _0x5bd310 - 1 && !this.stopAllTasks && !_0x3a9e9c) {
        const _0x4cdf3d = 100000 + Math.floor(Math.random() * 200000);
        console.log("\n============================== ⏱ 账号[" + this.nickname + "] 第" + (_0x46f3d4 + 1) + "轮完成，等待 " + Math.round(_0x4cdf3d / 1000) + " 秒进入下一轮 ==============================");
        await new Promise(_0x738f37 => setTimeout(_0x738f37, _0x4cdf3d));
      }
    }
    return {};
  }
}
function _0x21602c(_0x564bc0) {
  const _0x2d37e9 = String(_0x564bc0 || "").trim().split("#");
  if (_0x2d37e9.length < 2) return null;
  let _0xe9099a = "",
    _0x13fdc9 = "",
    _0x36986b = "",
    _0x55e87d = null;
  if (_0x2d37e9.length === 2) {
    _0x13fdc9 = _0x2d37e9[0];
    _0x36986b = _0x2d37e9[1];
  } else {
    if (_0x2d37e9.length === 3) {
      {
        if (/socks5:\/\//i.test(_0x2d37e9[2])) {
          _0x13fdc9 = _0x2d37e9[0];
          _0x36986b = _0x2d37e9[1];
          _0x55e87d = _0x2d37e9[2];
        } else {
          _0xe9099a = _0x2d37e9[0];
          _0x13fdc9 = _0x2d37e9[1];
          _0x36986b = _0x2d37e9[2];
        }
      }
    } else _0x2d37e9.length >= 4 && (_0xe9099a = _0x2d37e9[0], _0x13fdc9 = _0x2d37e9[1], _0x36986b = _0x2d37e9.slice(2, _0x2d37e9.length - 1).join("#"), _0x55e87d = _0x2d37e9[_0x2d37e9.length - 1]);
  }
  if (_0x55e87d) {
    if (!/^socks5:\/\//i.test(_0x55e87d)) _0x55e87d = null;else {
      try {
        new URL(_0x55e87d);
      } catch (_0x48b84b) {
        console.log("❌ 代理URL格式错误: " + _0x55e87d);
        _0x55e87d = null;
      }
    }
  }
  return {
    "remark": _0xe9099a || "",
    "salt": _0x36986b,
    "cookie": _0x13fdc9,
    "proxyUrl": _0x55e87d
  };
}
function _0x1fc744() {
  const _0x5c9156 = _0x34d5b5(),
    _0x439f53 = [];
  for (const _0x493d7e of _0x5c9156) {
    const _0x3f3279 = _0x21602c(_0x493d7e);
    _0x3f3279 ? _0x439f53.push(_0x3f3279) : console.log("账号格式错误：" + _0x493d7e);
  }
  _0x439f53.forEach((_0x838267, _0x2b14b3) => {
    _0x838267.index = _0x2b14b3 + 1;
  });
  return _0x439f53;
}
async function _0x3500a3(_0x230d25, _0x53bfc0, _0x3c92ca) {
  const _0x3d23f2 = new Array(_0x230d25.length);
  let _0x11e80a = 0;
  async function _0x4986c7() {
    while (true) {
      {
        if (_0x3a9e9c) {
          return;
        }
        const _0x4e1da8 = _0x11e80a++;
        if (_0x4e1da8 >= _0x230d25.length) {
          return;
        }
        const _0x37de9f = _0x230d25[_0x4e1da8];
        try {
          _0x3d23f2[_0x4e1da8] = await _0x3c92ca(_0x37de9f, _0x4e1da8);
        } catch (_0x322aa9) {
          console.log("并发执行异常（index=" + (_0x4e1da8 + 1) + "）：" + _0x322aa9.message);
          _0x3d23f2[_0x4e1da8] = null;
        }
      }
    }
  }
  const _0x5ddbc0 = Array.from({
    "length": Math.min(_0x53bfc0, _0x230d25.length)
  }, _0x4986c7);
  await Promise.all(_0x5ddbc0);
  return _0x3d23f2;
}
async function _0x3acbff(_0x498466) {
  if (_0x498466.proxyUrl) {
    {
      const _0x1f752b = await _0x28b0c9(_0x498466.proxyUrl, "账号[" + _0x498466.index + "]" + (_0x498466.remark ? "（" + _0x498466.remark + "）" : ""));
      console.log("  - " + (_0x1f752b.ok ? "✅ 代理验证通过" : "❌ 代理验证失败") + ": " + _0x1f752b.msg);
      if (_0x1f752b.ok && _0x1f752b.ip && _0x1f752b.ip !== "localhost") {
        {
          if (!_0xd38d38(_0x1f752b.ip)) console.log("⚠️ 账号[" + _0x498466.index + "] 检测到无效IP格式，跳过重复检查");else {
            if (_0x1c3932.has(_0x1f752b.ip)) {
              console.log("\n⚠️ 存在相同代理IP（" + _0x1f752b.ip + "），请立即检查！");
              process.exit(1);
            } else _0x1c3932.add(_0x1f752b.ip);
          }
        }
      } else {
        if (!_0x1f752b.ok) return console.log("❌ 账号[" + _0x498466.index + "] 代理测试失败，跳过该账号"), {
          "index": _0x498466.index,
          "remark": _0x498466.remark || "无备注",
          "nickname": "账号" + _0x498466.index,
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "initialCash": 0,
          "finalCash": 0,
          "cashChange": 0,
          "error": "代理测试失败: " + _0x1f752b.msg,
          "skipped": true
        };
      }
    }
  } else console.log("账号[" + _0x498466.index + "]" + (_0x498466.remark ? "（" + _0x498466.remark + "）" : "") + " 未配置代理，走直连");
  console.log("账号[" + _0x498466.index + "]" + (_0x498466.remark ? "（" + _0x498466.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x2674c0 = await _0x493d59(_0x498466.cookie, _0x498466.proxyUrl, _0x498466.index),
    _0x181c15 = _0x2674c0?.["nickname"] || "账号" + _0x498466.index;
  if (_0x2674c0) {
    {
      const _0x3d879d = _0x2674c0.totalCoin != null ? _0x2674c0.totalCoin : "未知",
        _0x2ff568 = _0x2674c0.allCash != null ? _0x2674c0.allCash : "未知";
      console.log("账号[" + _0x181c15 + "] ✅ 登录成功，💰 当前金币: " + _0x3d879d + "，💸 当前余额: " + _0x2ff568);
    }
  } else console.log("账号[" + _0x181c15 + "] ❌ 基本信息获取失败，但仍继续执行任务");
  const _0x3c6102 = new _0x5c0671({
    ..._0x498466,
    "nickname": _0x181c15,
    "tasksToExecute": _0x3cd8aa
  });
  if (_0x2674c0) {
    await _0x3c6102.checkCoinLimit();
    if (_0x3c6102.coinExceeded) {
      console.log("账号[" + _0x3c6102.nickname + "]" + (_0x498466.remark ? "（" + _0x498466.remark + "）" : "") + " 初始金币已超过阈值，不执行任务");
      const _0x372266 = await _0x493d59(_0x498466.cookie, _0x498466.proxyUrl, _0x498466.index),
        _0x19db99 = _0x2674c0?.["totalCoin"] || 0,
        _0x3f6dc9 = _0x372266?.["totalCoin"] || 0,
        _0x524462 = _0x3f6dc9 - _0x19db99,
        _0x4fc3fc = _0x2674c0?.["allCash"] || 0,
        _0x4b21f1 = _0x372266?.["allCash"] || 0,
        _0x555091 = _0x4b21f1 - _0x4fc3fc;
      return {
        "index": _0x498466.index,
        "remark": _0x498466.remark || "无备注",
        "nickname": _0x181c15,
        "initialCoin": _0x19db99,
        "finalCoin": _0x3f6dc9,
        "coinChange": _0x524462,
        "initialCash": _0x4fc3fc,
        "finalCash": _0x4b21f1,
        "cashChange": _0x555091,
        "stats": _0x3c6102.getTaskStats(),
        "coinLimitExceeded": true
      };
    }
  }
  console.log("账号[" + _0x3c6102.nickname + "]" + (_0x498466.remark ? "（" + _0x498466.remark + "）" : "") + " 🚀 开始执行所有任务");
  await _0x3c6102.executeAllTasksByPriority();
  const _0x6e5c2c = await _0x493d59(_0x498466.cookie, _0x498466.proxyUrl, _0x498466.index),
    _0x5c90ce = _0x2674c0?.["totalCoin"] || 0,
    _0x20a16d = _0x6e5c2c?.["totalCoin"] || 0,
    _0x24a2dd = _0x20a16d - _0x5c90ce,
    _0x23a3e8 = _0x2674c0?.["allCash"] || 0,
    _0x86714 = _0x6e5c2c?.["allCash"] || 0,
    _0x3c605e = _0x86714 - _0x23a3e8;
  _0x3c6102.printTaskStats();
  return {
    "index": _0x498466.index,
    "remark": _0x498466.remark || "无备注",
    "nickname": _0x181c15,
    "initialCoin": _0x5c90ce,
    "finalCoin": _0x20a16d,
    "coinChange": _0x24a2dd,
    "initialCash": _0x23a3e8,
    "finalCash": _0x86714,
    "cashChange": _0x3c605e,
    "stats": _0x3c6102.getTaskStats(),
    "coinLimitExceeded": _0x3c6102.coinExceeded,
    "infoFetchFailed": !_0x2674c0
  };
}
function _0x21602c(_0x33f455) {
  const _0xf127cf = String(_0x33f455 || "").trim().split("#");
  if (_0xf127cf.length < 2) return null;
  let _0x1e7cbf = "",
    _0x150327 = "",
    _0x28b653 = "",
    _0x2d2009 = null;
  if (_0xf127cf.length === 2) _0x150327 = _0xf127cf[0], _0x28b653 = _0xf127cf[1];else {
    if (_0xf127cf.length === 3) /socks5:\/\//i.test(_0xf127cf[2]) ? (_0x150327 = _0xf127cf[0], _0x28b653 = _0xf127cf[1], _0x2d2009 = _0xf127cf[2]) : (_0x1e7cbf = _0xf127cf[0], _0x150327 = _0xf127cf[1], _0x28b653 = _0xf127cf[2]);else {
      if (_0xf127cf.length >= 4) {
        _0x1e7cbf = _0xf127cf[0];
        _0x150327 = _0xf127cf[1];
        _0x28b653 = _0xf127cf.slice(2, _0xf127cf.length - 1).join("#");
        _0x2d2009 = _0xf127cf[_0xf127cf.length - 1];
      }
    }
  }
  if (_0x2d2009) {
    {
      if (!/^socks5:\/\//i.test(_0x2d2009)) _0x2d2009 = null;else {
        try {
          new URL(_0x2d2009);
        } catch (_0x330cea) {
          console.log("❌ 代理URL格式错误: " + _0x2d2009);
          _0x2d2009 = null;
        }
      }
    }
  }
  return {
    "remark": _0x1e7cbf || "",
    "salt": _0x28b653,
    "cookie": _0x150327,
    "proxyUrl": _0x2d2009
  };
}
function _0x1fc744() {
  const _0x444e0e = _0x34d5b5(),
    _0x24c600 = [];
  for (const _0x3d79bf of _0x444e0e) {
    {
      const _0x14eac5 = _0x21602c(_0x3d79bf);
      if (_0x14eac5) _0x24c600.push(_0x14eac5);else {
        console.log("账号格式错误：" + _0x3d79bf);
      }
    }
  }
  _0x24c600.forEach((_0x170998, _0x2ff37c) => {
    _0x170998.index = _0x2ff37c + 1;
  });
  return _0x24c600;
}
async function _0x3500a3(_0x3d54d7, _0x14cddd, _0x42834f) {
  const _0x5aafb4 = new Array(_0x3d54d7.length);
  let _0x38fc8a = 0;
  async function _0x5f4235() {
    while (true) {
      {
        if (_0x3a9e9c) return;
        const _0x21640e = _0x38fc8a++;
        if (_0x21640e >= _0x3d54d7.length) {
          return;
        }
        const _0x421355 = _0x3d54d7[_0x21640e];
        try {
          _0x5aafb4[_0x21640e] = await _0x42834f(_0x421355, _0x21640e);
        } catch (_0x41dbce) {
          console.log("并发执行异常（index=" + (_0x21640e + 1) + "）：" + _0x41dbce.message);
          _0x5aafb4[_0x21640e] = null;
        }
      }
    }
  }
  const _0x2eb4df = Array.from({
    "length": Math.min(_0x14cddd, _0x3d54d7.length)
  }, _0x5f4235);
  await Promise.all(_0x2eb4df);
  return _0x5aafb4;
}
async function _0x3acbff(_0x520734) {
  if (_0x520734.proxyUrl) {
    const _0x5f09aa = await _0x28b0c9(_0x520734.proxyUrl, "账号[" + _0x520734.index + "]" + (_0x520734.remark ? "（" + _0x520734.remark + "）" : ""));
    console.log("  - " + (_0x5f09aa.ok ? "✅ 代理验证通过" : "❌ 代理验证失败") + ": " + _0x5f09aa.msg);
    if (_0x5f09aa.ok && _0x5f09aa.ip && _0x5f09aa.ip !== "localhost") {
      if (!_0xd38d38(_0x5f09aa.ip)) console.log("⚠️ 账号[" + _0x520734.index + "] 检测到无效IP格式，跳过重复检查");else {
        if (_0x1c3932.has(_0x5f09aa.ip)) console.log("\n⚠️ 存在相同代理IP（" + _0x5f09aa.ip + "），请立即检查！"), process.exit(1);else {
          _0x1c3932.add(_0x5f09aa.ip);
        }
      }
    } else {
      if (!_0x5f09aa.ok) return console.log("❌ 账号[" + _0x520734.index + "] 代理测试失败，跳过该账号"), {
        "index": _0x520734.index,
        "remark": _0x520734.remark || "无备注",
        "nickname": "账号" + _0x520734.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": "代理测试失败: " + _0x5f09aa.msg,
        "skipped": true
      };
    }
  } else {
    console.log("账号[" + _0x520734.index + "]" + (_0x520734.remark ? "（" + _0x520734.remark + "）" : "") + " 未配置代理，走直连");
  }
  console.log("账号[" + _0x520734.index + "]" + (_0x520734.remark ? "（" + _0x520734.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x5be9b9 = await _0x493d59(_0x520734.cookie, _0x520734.proxyUrl, _0x520734.index),
    _0x5468cd = _0x5be9b9?.["nickname"] || "账号" + _0x520734.index;
  if (_0x5be9b9) {
    const _0x496652 = _0x5be9b9.totalCoin != null ? _0x5be9b9.totalCoin : "未知",
      _0x3184f8 = _0x5be9b9.allCash != null ? _0x5be9b9.allCash : "未知";
    console.log("账号[" + _0x5468cd + "] ✅ 登录成功，💰 当前金币: " + _0x496652 + "，💸 当前余额: " + _0x3184f8);
  } else console.log("账号[" + _0x5468cd + "] ❌ 基本信息获取失败，但仍继续执行任务");
  const _0x48a9be = new _0x5c0671({
    ..._0x520734,
    "nickname": _0x5468cd,
    "tasksToExecute": _0x3cd8aa
  });
  if (_0x5be9b9) {
    await _0x48a9be.checkCoinLimit();
    if (_0x48a9be.coinExceeded) {
      console.log("账号[" + _0x48a9be.nickname + "]" + (_0x520734.remark ? "（" + _0x520734.remark + "）" : "") + " 初始金币已超过阈值，不执行任务");
      const _0x5811cb = await _0x493d59(_0x520734.cookie, _0x520734.proxyUrl, _0x520734.index),
        _0x4b71e2 = _0x5be9b9?.["totalCoin"] || 0,
        _0x9d33ab = _0x5811cb?.["totalCoin"] || 0,
        _0x2beab5 = _0x9d33ab - _0x4b71e2,
        _0x40ceb = _0x5be9b9?.["allCash"] || 0,
        _0x4af583 = _0x5811cb?.["allCash"] || 0,
        _0xfc16bf = _0x4af583 - _0x40ceb;
      return {
        "index": _0x520734.index,
        "remark": _0x520734.remark || "无备注",
        "nickname": _0x5468cd,
        "initialCoin": _0x4b71e2,
        "finalCoin": _0x9d33ab,
        "coinChange": _0x2beab5,
        "initialCash": _0x40ceb,
        "finalCash": _0x4af583,
        "cashChange": _0xfc16bf,
        "stats": _0x48a9be.getTaskStats(),
        "coinLimitExceeded": true
      };
    }
  }
  console.log("账号[" + _0x48a9be.nickname + "]" + (_0x520734.remark ? "（" + _0x520734.remark + "）" : "") + " 🚀 开始执行所有任务");
  await _0x48a9be.executeAllTasksByPriority();
  const _0x4d6e68 = await _0x493d59(_0x520734.cookie, _0x520734.proxyUrl, _0x520734.index),
    _0x3524c9 = _0x5be9b9?.["totalCoin"] || 0,
    _0x8d10a5 = _0x4d6e68?.["totalCoin"] || 0,
    _0x548f18 = _0x8d10a5 - _0x3524c9,
    _0x2840a4 = _0x5be9b9?.["allCash"] || 0,
    _0x4ef154 = _0x4d6e68?.["allCash"] || 0,
    _0x4ef4a7 = _0x4ef154 - _0x2840a4;
  _0x48a9be.printTaskStats();
  return {
    "index": _0x520734.index,
    "remark": _0x520734.remark || "无备注",
    "nickname": _0x5468cd,
    "initialCoin": _0x3524c9,
    "finalCoin": _0x8d10a5,
    "coinChange": _0x548f18,
    "initialCash": _0x2840a4,
    "finalCash": _0x4ef154,
    "cashChange": _0x4ef4a7,
    "stats": _0x48a9be.getTaskStats(),
    "coinLimitExceeded": _0x48a9be.coinExceeded,
    "infoFetchFailed": !_0x5be9b9
  };
}
function _0x3827ab(_0x5c11de) {
  if (!_0x5c11de.length) {
    console.log("\n没有可显示的账号信息。");
    return;
  }
  const _0x37eef0 = _0x5c11de.reduce((_0x21f397, _0x2867a7) => {
      return _0x21f397 + (parseInt(_0x2867a7.initialCoin) || 0);
    }, 0),
    _0x2d9126 = _0x5c11de.reduce((_0x9196f1, _0x1c3353) => {
      return _0x9196f1 + (parseInt(_0x1c3353.finalCoin) || 0);
    }, 0),
    _0x427dc7 = _0x2d9126 - _0x37eef0,
    _0x380de1 = _0x5c11de.reduce((_0x12736b, _0x29485b) => {
      return _0x12736b + (parseFloat(_0x29485b.initialCash) || 0);
    }, 0),
    _0x13b3ae = _0x5c11de.reduce((_0x1aeaa3, _0xa10244) => {
      return _0x1aeaa3 + (parseFloat(_0xa10244.finalCash) || 0);
    }, 0),
    _0x875ef3 = _0x13b3ae - _0x380de1;
  let _0x262d1a = 0,
    _0x592ccd = 0,
    _0x596263 = 0;
  _0x5c11de.forEach(_0x514b1f => {
    _0x514b1f.stats && Object.values(_0x514b1f.stats).forEach(_0x35ee32 => {
      _0x262d1a += _0x35ee32.success + _0x35ee32.failed;
      _0x592ccd += _0x35ee32.success;
      _0x596263 += _0x35ee32.totalReward;
    });
  });
  const _0x23701e = _0x262d1a > 0 ? (_0x592ccd / _0x262d1a * 100).toFixed(1) : "0.0",
    _0x4158ad = _0x5c11de.filter(_0x3c46d4 => _0x3c46d4.coinLimitExceeded).length,
    _0x33b276 = _0x5c11de.filter(_0x123308 => _0x123308.skipped).length,
    _0x15962f = _0x5c11de.filter(_0x428561 => _0x428561.infoFetchFailed).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + _0x55d969("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x5c11de.length).padEnd(22) + ("跳过账号: " + _0x33b276).padEnd(22) + ("总任务数: " + _0x262d1a).padEnd(22) + ("任务成功率: " + _0x23701e + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x427dc7).padEnd(26) + ("总金币奖励: " + _0x596263).padEnd(26) + ("总余额变化: " + _0x875ef3.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x54e14b = ["序号", "备注", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化", "状态"],
    _0x56b7c5 = [6, 16, 16, 12, 12, 12, 12, 12, 12, 10];
  let _0x547942 = "|";
  _0x54e14b.forEach((_0x320fe1, _0x2ea596) => {
    _0x547942 += _0x55d969(_0x320fe1, _0x56b7c5[_0x2ea596]) + "|";
  });
  console.log(_0x547942);
  let _0x59bdc1 = "|";
  _0x56b7c5.forEach(_0x472036 => {
    _0x59bdc1 += "-".repeat(_0x472036) + "|";
  });
  console.log(_0x59bdc1);
  _0x5c11de.forEach(_0x8633ec => {
    let _0x18a2fd = "|";
    _0x18a2fd += _0x55d969(_0x8633ec.index, _0x56b7c5[0]) + "|";
    _0x18a2fd += _0x55d969(_0x8633ec.remark, _0x56b7c5[1]) + "|";
    let _0xe88c03 = _0x8633ec.nickname || "-";
    if (_0x8633ec.skipped) _0xe88c03 += " ❌";else {
      if (_0x8633ec.coinLimitExceeded) _0xe88c03 += " ⚠️";else {
        if (_0x8633ec.infoFetchFailed) {
          _0xe88c03 += " 🔶";
        }
      }
    }
    _0x18a2fd += _0x55d969(_0xe88c03.substring(0, _0x56b7c5[2] - 2), _0x56b7c5[2]) + "|";
    _0x18a2fd += _0x55d969(_0x8633ec.initialCoin, _0x56b7c5[3]) + "|";
    _0x18a2fd += _0x55d969(_0x8633ec.finalCoin, _0x56b7c5[4]) + "|";
    const _0x1096ec = _0x8633ec.coinChange >= 0 ? "+" + _0x8633ec.coinChange : _0x8633ec.coinChange;
    _0x18a2fd += _0x55d969(_0x1096ec, _0x56b7c5[5]) + "|";
    _0x18a2fd += _0x55d969(_0x8633ec.initialCash, _0x56b7c5[6]) + "|";
    _0x18a2fd += _0x55d969(_0x8633ec.finalCash, _0x56b7c5[7]) + "|";
    const _0x5e678f = _0x8633ec.cashChange >= 0 ? "+" + _0x8633ec.cashChange.toFixed(2) : _0x8633ec.cashChange.toFixed(2);
    _0x18a2fd += _0x55d969(_0x5e678f, _0x56b7c5[8]) + "|";
    let _0x19129b = "完成";
    if (_0x8633ec.skipped) _0x19129b = "跳过";else {
      if (_0x8633ec.coinLimitExceeded) _0x19129b = "超限";else {
        if (_0x8633ec.infoFetchFailed) {
          _0x19129b = "无信息";
        }
      }
    }
    _0x18a2fd += _0x55d969(_0x19129b, _0x56b7c5[9]) + "|";
    console.log(_0x18a2fd);
  });
  console.log("=".repeat(80));
  console.log("|" + _0x55d969("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
async function _0x562948(_0x40580d, _0x4453c1) {
  if (!_0x2582aa) {
    console.log("📢 未配置push变量，跳过推送");
    return;
  }
  try {
    {
      console.log("📤 正在发送推送通知...");
      const {
        response: _0x5b34cc,
        body: _0x7d2893
      } = await _0x35ca1c({
        "method": "POST",
        "url": "https://www.pushplus.plus/send",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify({
          "token": _0x2582aa,
          "title": _0x40580d,
          "content": _0x4453c1,
          "template": "html"
        }),
        "timeout": 10000
      }, null, "PushPlus推送");
      if (_0x7d2893 && _0x7d2893.code === 200) console.log("✅ 推送发送成功！");else {
        console.log("⚠️ 推送发送失败: " + (_0x7d2893?.["msg"] || "未知错误"));
      }
    }
  } catch (_0x5097ef) {
    console.log("❌ 推送发送异常: " + _0x5097ef.message);
  }
}
async function _0x13bcb5() {
  try {
    const _0x23c8ab = _0x17dce5.replace(/\/api\/api\.php.*$/, ""),
      _0xa7be68 = _0x23c8ab + "/api/api.php?action=get_announcement",
      _0x455d61 = await _0x3675b8.get(_0xa7be68, {
        "timeout": 5000,
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
    if (_0x455d61.data && _0x455d61.data.success && _0x455d61.data.data) {
      {
        const _0x2e8484 = _0x455d61.data.data,
          _0x1d0400 = _0x2e8484.title || "系统公告",
          _0x4bf73b = _0x2e8484.content || "",
          _0xead7e5 = _0x4bf73b.split("\n").filter(_0x50a6c4 => _0x50a6c4.trim() !== "");
        if (_0xead7e5.length === 0) _0xead7e5.push(" ");
        const _0x16d961 = "📢 " + _0x1d0400,
          _0x43d990 = Math.max(_0x16d961.length, ..._0xead7e5.map(_0x4b8c6e => _0x4b8c6e.length), 30),
          _0x69d74b = _0x43d990 + 4;
        console.log("\n");
        console.log("╔" + "═".repeat(_0x69d74b - 2) + "╗");
        console.log("║" + " ".repeat(_0x69d74b - 2) + "║");
        const _0x118f65 = Math.floor((_0x69d74b - _0x16d961.length - 2) / 2),
          _0x458b3d = _0x69d74b - _0x16d961.length - 2 - _0x118f65;
        console.log("║" + " ".repeat(_0x118f65) + _0x16d961 + " ".repeat(_0x458b3d) + "║");
        console.log("║" + " ".repeat(_0x69d74b - 2) + "║");
        console.log("╠" + "═".repeat(_0x69d74b - 2) + "╣");
        _0xead7e5.forEach(_0xe61a2f => {
          {
            const _0x40fbcc = " ".repeat(_0x69d74b - _0xe61a2f.length - 2);
            console.log("║ " + _0xe61a2f + _0x40fbcc + "║");
          }
        });
        console.log("╚" + "═".repeat(_0x69d74b - 2) + "╝");
        console.log("");
        console.log("=".repeat(_0x69d74b));
        console.log("");
      }
    }
  } catch (_0xce3d98) {}
}
(async () => {
  const _0x56e4b5 = await _0x76b46f(_0x23b372);
  !_0x56e4b5 && (console.log("\n❌ km变量验证失败，脚本终止运行"), console.log("请设置正确的km环境变量后重试"), process.exit(1));
  _0x2388d0 = _0x318232(_0x23b372);
  console.log("\n✅ km验证通过\n");
  await _0x13bcb5();
  console.log("开始执行IP白名单自动添加...\n");
  const _0x49ce13 = await _0x36c14e();
  !_0x49ce13 && (console.log("\n❌ IP白名单添加失败，脚本终止运行"), console.log("⚠️ 未添加IP白名单无法运行脚本，请检查网络连接或手动添加IP"), process.exit(1));
  _0x1142c4 = await _0x48ab3f();
  if (!_0x1142c4) {
    {
      const _0x38f021 = _0x2877d8("ip");
      _0x38f021 && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x38f021) && (_0x1142c4 = _0x38f021);
    }
  }
  _0x3f34c1();
  console.log("\n✅ IP白名单验证通过，开始加载账号配置...\n");
  const _0x17ec77 = _0x1fc744();
  console.log("共找到 " + _0x17ec77.length + " 个有效账号");
  if (!_0x17ec77.length) {
    process.exit(1);
  }
  if (_0x56ee5e.enabled && _0x461bfa) for (const _0xac7567 of _0x17ec77) {
    try {
      {
        const _0x152bef = _0xac7567.remark || "账号" + _0xac7567.index,
          _0x1f856d = await _0x5948e0(_0xac7567.cookie, _0x152bef);
        if (_0x1f856d.success && _0x1f856d.data) {
          {
            const _0x4ef3a6 = _0x1f856d.data.balance || 0,
              _0x1c811d = _0x1f856d.data.amountYuan || _0x1f856d.data.amounts || [],
              _0x54cc45 = _0x1c811d.filter(_0x1c7ecd => _0x1c7ecd >= 1),
              _0x56542b = _0x54cc45.length > 0 ? _0x54cc45.join(", ") + "元" : "无";
            console.log("[" + _0x152bef + "] 余额: " + _0x4ef3a6.toFixed(2) + "元，可提现档位: " + _0x56542b);
          }
        } else console.log("[" + _0x152bef + "] 查询提现额度失败: " + (_0x1f856d.message || "未知错误"));
        const _0x3006b5 = await _0x709828(_0xac7567.cookie, _0x152bef);
        if (_0x3006b5.success && _0x3006b5.data && _0x3006b5.data.bindInfo) {
          {
            const _0x270e00 = [],
              _0x1a9906 = {
                "WECHAT": "微信",
                "ALIPAY": "支付宝",
                "UNION_PAY_BANK": "银行卡"
              };
            for (const _0x51b5e7 of _0x3006b5.data.bindInfo) {
              if (_0x51b5e7.hasBind && _0x51b5e7.provider) {
                const _0x5890a4 = _0x1a9906[_0x51b5e7.provider] || _0x51b5e7.provider,
                  _0x404d87 = _0x51b5e7.nickname ? _0x5890a4 + "(" + _0x51b5e7.nickname + ")" : _0x5890a4;
                _0x270e00.push(_0x404d87);
              }
            }
            const _0x17122b = _0x270e00.length > 0 ? _0x270e00.join(", ") : "无";
            console.log("[" + _0x152bef + "] 已绑定: " + _0x17122b);
          }
        } else console.log("[" + _0x152bef + "] 查询绑定失败: " + (_0x3006b5.message || "未知错误"));
        await new Promise(_0x12c2db => setTimeout(_0x12c2db, 500));
      }
    } catch (_0x53ac49) {
      console.log("[账号" + _0xac7567.index + "] 查询异常: " + _0x53ac49.message);
    }
  }
  const _0x21c7ec = _0x4b7b13("MAX_CONCURRENCY", 3);
  console.log("\n防黑并发：" + _0x21c7ec + "    防黑轮数：" + _0x5bd310 + "    look次数/轮：" + _0x57f46f + "    search次数/轮：" + _0x940aea + "    follow次数/look：" + _0x127fd6 + "    search_follow次数/search：" + _0x34e792 + "\n");
  const _0xfb1785 = [];
  await _0x3500a3(_0x17ec77, _0x21c7ec, async _0x44ad4f => {
    console.log("\n—— 🚀 开始账号[" + _0x44ad4f.index + "]" + (_0x44ad4f.remark ? "（" + _0x44ad4f.remark + "）" : "") + " ——");
    try {
      {
        const _0x4c524e = await _0x3acbff(_0x44ad4f);
        _0xfb1785.push({
          "index": _0x44ad4f.index,
          "remark": _0x44ad4f.remark || "无备注",
          "nickname": _0x4c524e?.["nickname"] || "账号" + _0x44ad4f.index,
          "initialCoin": _0x4c524e?.["initialCoin"] || 0,
          "finalCoin": _0x4c524e?.["finalCoin"] || 0,
          "coinChange": _0x4c524e?.["coinChange"] || 0,
          "initialCash": _0x4c524e?.["initialCash"] || 0,
          "finalCash": _0x4c524e?.["finalCash"] || 0,
          "cashChange": _0x4c524e?.["cashChange"] || 0,
          "stats": _0x4c524e?.["stats"] || {},
          "coinLimitExceeded": _0x4c524e?.["coinLimitExceeded"] || false,
          "skipped": _0x4c524e?.["skipped"] || false,
          "infoFetchFailed": _0x4c524e?.["infoFetchFailed"] || false,
          "error": _0x4c524e?.["error"] || null
        });
      }
    } catch (_0x2ce766) {
      console.log("账号[" + _0x44ad4f.index + "]" + (_0x44ad4f.remark ? "（" + _0x44ad4f.remark + "）" : "") + " ❌ 执行异常：" + _0x2ce766.message);
      _0xfb1785.push({
        "index": _0x44ad4f.index,
        "remark": _0x44ad4f.remark || "无备注",
        "nickname": "账号" + _0x44ad4f.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": _0x2ce766.message,
        "skipped": true
      });
    }
  });
  _0xfb1785.sort((_0xd1d78e, _0x59d4ed) => _0xd1d78e.index - _0x59d4ed.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  _0x3827ab(_0xfb1785);
  if (_0x2582aa) {
    const _0xa90d2a = _0xfb1785.reduce((_0x48215e, _0x9cbf8) => _0x48215e + (parseInt(_0x9cbf8.initialCoin) || 0), 0),
      _0x201a0b = _0xfb1785.reduce((_0xb3020, _0x5207f2) => _0xb3020 + (parseInt(_0x5207f2.finalCoin) || 0), 0),
      _0x35e6a6 = _0x201a0b - _0xa90d2a,
      _0x1fe5a1 = _0xfb1785.reduce((_0x83539b, _0x2bf7a1) => _0x83539b + (parseFloat(_0x2bf7a1.initialCash) || 0), 0),
      _0x4091c6 = _0xfb1785.reduce((_0x3537a7, _0x4d9983) => _0x3537a7 + (parseFloat(_0x4d9983.finalCash) || 0), 0),
      _0x22eb4a = _0x4091c6 - _0x1fe5a1;
    let _0x18d37a = 0,
      _0x4b7d73 = 0,
      _0x27176b = 0;
    _0xfb1785.forEach(_0x4028d5 => {
      _0x4028d5.stats && Object.values(_0x4028d5.stats).forEach(_0x138408 => {
        _0x18d37a += _0x138408.success + _0x138408.failed;
        _0x4b7d73 += _0x138408.success;
        _0x27176b += _0x138408.totalReward;
      });
    });
    const _0x4b815a = _0x18d37a > 0 ? (_0x4b7d73 / _0x18d37a * 100).toFixed(1) : "0.0",
      _0x268c96 = _0xfb1785.filter(_0x7bced9 => _0x7bced9.skipped).length;
    let _0x88c078 = "\n      <h2>任务完成</h2>\n      <hr>\n      <h3>📊 总体数据</h3>\n      <ul>\n        <li><b>总账号数：</b>" + _0xfb1785.length + "个</li>\n        <li><b>跳过账号：</b>" + _0x268c96 + "个</li>\n        <li><b>总任务数：</b>" + _0x18d37a + "次</li>\n        <li><b>任务成功率：</b>" + _0x4b815a + "%</li>\n      </ul>\n      <h3>💰 金币与余额</h3>\n      <ul>\n        <li><b>总金币变化：</b>" + (_0x35e6a6 > 0 ? "+" : "") + _0x35e6a6 + "</li>\n        <li><b>总金币奖励：</b>" + _0x27176b + "</li>\n        <li><b>总余额变化：</b>" + (_0x22eb4a > 0 ? "+" : "") + _0x22eb4a.toFixed(2) + "元</li>\n      </ul>\n      <h3>📝 账号明细</h3>\n      <table border=\"1\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-collapse: collapse; width: 100%; color: #000000;\">\n        <tr style=\"background-color: #f0f0f0; color: #000000;\">\n          <th style=\"color: #000000;\">序号</th>\n          <th style=\"color: #000000;\">账号</th>\n          <th style=\"color: #000000;\">金币变化</th>\n          <th style=\"color: #000000;\">余额变化</th>\n          <th style=\"color: #000000;\">状态</th>\n        </tr>\n    ";
    _0xfb1785.forEach(_0x236ce4 => {
      let _0x4c333b = "完成";
      if (_0x236ce4.skipped) _0x4c333b = "跳过";else {
        if (_0x236ce4.coinLimitExceeded) _0x4c333b = "超限";else _0x236ce4.infoFetchFailed && (_0x4c333b = "无信息");
      }
      const _0x5bedd8 = _0x236ce4.coinChange >= 0 ? "+" + _0x236ce4.coinChange : _0x236ce4.coinChange,
        _0x565e6c = _0x236ce4.cashChange >= 0 ? "+" + _0x236ce4.cashChange.toFixed(2) : _0x236ce4.cashChange.toFixed(2),
        _0x3a7389 = _0x236ce4.skipped ? "#ffdddd" : _0x236ce4.coinChange > 0 ? "#ddffdd" : "#ffffff";
      _0x88c078 += "\n        <tr style=\"background-color: " + _0x3a7389 + "; color: #000000;\">\n          <td style=\"color: #000000;\">" + _0x236ce4.index + "</td>\n          <td style=\"color: #000000;\">" + _0x236ce4.nickname + "</td>\n          <td style=\"color: #000000;\">" + _0x5bedd8 + "</td>\n          <td style=\"color: #000000;\">" + _0x565e6c + "元</td>\n          <td style=\"color: #000000;\">" + _0x4c333b + "</td>\n        </tr>\n      ";
    });
    _0x88c078 += "\n      </table>\n      <hr>\n      <p><small>执行时间: " + new Date().toLocaleString("zh-CN", {
      "timeZone": "Asia/Shanghai"
    }) + "</small></p>\n    ";
    await _0x562948("任务完成", _0x88c078);
  }
  _0x2388d0 && (clearInterval(_0x2388d0), console.log("\n✅ 已停止卡密监控"));
  console.log("✅ 脚本执行完毕，正在退出...\n");
  process.exit(0);
})();