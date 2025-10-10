//Fri Oct 10 2025 08:34:19 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const os = require("os"),
  process = require("process"),
  fs = require("fs").promises,
  path = require("path"),
  querystring = require("querystring");
let request, SocksProxyAgent;
try {
  request = require("request");
  ({
    SocksProxyAgent
  } = require("socks-proxy-agent"));
} catch (_0x3622d1) {
  console.log("❌ 模块加载失败，可能由于 Node.js 版本不兼容:", _0x3622d1.message);
  console.log("尝试动态加载兼容模块...");
  try {
    const {
      default: fetch
    } = require("node-fetch");
    request = (_0x52bcfb, _0x4eb948) => {
      fetch(_0x52bcfb.url, {
        "method": _0x52bcfb.method || "GET",
        "headers": _0x52bcfb.headers,
        "body": _0x52bcfb.body || _0x52bcfb.form ? JSON.stringify(_0x52bcfb.form || _0x52bcfb.body) : undefined,
        "agent": _0x52bcfb.agent
      }).then(_0x456232 => _0x456232.text()).then(_0x2f093e => _0x4eb948(null, {
        "statusCode": res.status
      }, _0x2f093e)).catch(_0x3661da => _0x4eb948(_0x3661da));
    };
    console.log("✅ 使用 node-fetch 替代 request 模块");
  } catch (_0x2b42f4) {
    console.log("❌ 无法加载 node-fetch，脚本终止:", _0x2b42f4.message);
    process.exit(1);
  }
}
process.noDeprecation = true;
async function detectEnvironment() {
  let _0xbe5155 = {
    "nodeVersion": process.version,
    "osType": os.platform(),
    "osRelease": os.release(),
    "qinglongVersion": "未知",
    "isQinglong": false
  };
  try {
    const _0x23c785 = "/ql/config/env.sh",
      _0x43b640 = await fs.readFile(_0x23c785, "utf8"),
      _0x9fedcf = _0x43b640.match(/QINGLONG_VERSION=["']?([^"']+)["']?/i);
    _0x9fedcf && (_0xbe5155.qinglongVersion = _0x9fedcf[1], _0xbe5155.isQinglong = true);
  } catch (_0x14fb62) {
    console.log("⚠️ 未检测到青龙面板环境，当前普通 Node.js 环境");
  }
  console.log("🌐 运行环境信息:");
  console.log("  - Node.js 版本: " + _0xbe5155.nodeVersion);
  console.log("  - 操作系统: " + _0xbe5155.osType + " (" + _0xbe5155.osRelease + ")");
  console.log("  - 青龙版本: " + _0xbe5155.qinglongVersion + (_0xbe5155.isQinglong ? "" : " (非青龙环境)"));
  const _0x6a4e60 = parseInt(process.version.match(/^v(\d+)/)?.[1] || 0);
  _0x6a4e60 < 12 && console.log("⚠️ 警告: 当前 Node.js 版本过低 (< v12)，可能导致兼容性问题，建议升级到 v14 或以上");
  return _0xbe5155;
}
function generateRandomInteractionMessage() {
  const _0x34181f = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x34181f[Math.floor(Math.random() * _0x34181f.length)];
}
const isDevMode = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true";
function getTasksToExecute() {
  const _0xebef03 = process.env.Task;
  if (!_0xebef03) return console.log("未设置Task环境变量，将执行所有任务 (food, box, look)"), ["food", "box", "look"];
  const _0x17c899 = _0xebef03.split(",").map(_0x2cab36 => _0x2cab36.trim().toLowerCase()).filter(Boolean),
    _0x26800b = ["food", "box", "look"],
    _0x408001 = _0x17c899.filter(_0x4abcf6 => _0x26800b.includes(_0x4abcf6));
  if (_0x408001.length === 0) return console.log("Task环境变量中没有有效任务，将执行所有任务 (food, box, look)"), ["food", "box", "look"];
  console.log("从Task环境变量中解析到要执行的任务: " + _0x408001.join(", "));
  return _0x408001;
}
function parseAccountConfig(_0x3d082c) {
  const _0x212059 = String(_0x3d082c || "").trim().split("#");
  if (_0x212059.length < 2) {
    return null;
  }
  const _0x31e1b3 = _0x212059[0],
    _0x4fbd06 = _0x212059.slice(1, _0x212059.length - (_0x212059.length >= 3 ? 1 : 0)).join("#");
  let _0x21d1d3 = null;
  if (_0x212059.length >= 3) {
    const _0x330f9c = _0x212059[_0x212059.length - 1].trim();
    if (_0x330f9c.includes("|")) {
      {
        console.log("开始解析代理格式: " + _0x330f9c);
        const _0x6eae70 = _0x330f9c.split("|");
        if (_0x6eae70.length >= 2) {
          {
            const [_0x1f1aa2, _0x87dd05, _0x253d02, _0x35382f] = _0x6eae70;
            _0x21d1d3 = "socks5://" + _0x253d02 + ":" + _0x35382f + "@" + _0x1f1aa2 + ":" + _0x87dd05;
          }
        }
      }
    } else _0x21d1d3 = /^socks5:\/\/.+/i.test(_0x330f9c) ? _0x330f9c : null;
    if (!_0x21d1d3) {
      console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0x330f9c);
    }
  }
  return {
    "salt": _0x4fbd06,
    "cookie": _0x31e1b3,
    "proxyUrl": _0x21d1d3
  };
}
function loadAccountsFromEnv() {
  const _0x2246cb = [],
    _0x2bd973 = new Set();
  let _0x2e31aa = 0;
  const _0x161050 = parseInt(process.env.MAX_KSCK_INDEX || "666", 10) || 666;
  console.log("开始检查 ksck1 到 ksck" + _0x161050 + " 环境变量...");
  for (let _0x1caa3c = 1; _0x1caa3c <= _0x161050; _0x1caa3c++) {
    const _0x31755b = "ksck" + _0x1caa3c,
      _0x26dd9e = process.env[_0x31755b];
    if (_0x26dd9e) {
      const _0x3f3366 = _0x26dd9e.trim();
      if (!_0x2bd973.has(_0x3f3366)) {
        const _0x4b64b8 = parseAccountConfig(_0x3f3366);
        _0x4b64b8 ? (_0x4b64b8.index = ++_0x2e31aa, _0x4b64b8.source = _0x31755b, _0x2246cb.push(_0x4b64b8), _0x2bd973.add(_0x3f3366)) : console.log("⚠️ " + _0x31755b + " 格式错误，忽略: " + _0x3f3366);
      } else {
        console.log("⚠️ " + _0x31755b + " 配置重复，忽略: " + _0x3f3366);
      }
    }
  }
  const ksckValue = process.env.ksck;
  if (ksckValue) {
    {
      console.log("检测到 ksck 环境变量，解析中...");
      const _0x2f0883 = ksckValue.split("&").map(_0x2582ff => _0x2582ff.trim()).filter(Boolean);
      console.log("从 ksck 环境变量中解析到 " + _0x2f0883.length + " 个配置");
      for (const _0x36463a of _0x2f0883) {
        {
          if (!_0x2bd973.has(_0x36463a)) {
            {
              const _0x555e19 = parseAccountConfig(_0x36463a);
              if (_0x555e19) _0x555e19.index = ++_0x2e31aa, _0x555e19.source = "ksck", _0x2246cb.push(_0x555e19), _0x2bd973.add(_0x36463a);else {
                console.log("⚠️ ksck 配置格式错误，忽略: " + _0x36463a);
              }
            }
          } else console.log("⚠️ ksck 配置重复，忽略: " + _0x36463a);
        }
      }
    }
  }
  if (_0x2246cb.length === 0) {
    console.log("❌ 未找到任何有效的账号配置（检查 ksck 或 ksck1 到 ksck" + _0x161050 + "）");
  } else console.log("✅ 共加载 " + _0x2246cb.length + " 个有效账号配置");
  return _0x2246cb;
}
const accountConfigs = loadAccountsFromEnv(),
  accountCount = accountConfigs.length,
  tasksToExecute = getTasksToExecute(),
  coinLimitDefault = parseInt(process.env.COIN_LIMIT || "500000", 10) || 500000,
  maxRoundsDefault = parseInt(process.env.ROUNDS || "35", 10) || 35,
  lowRewardThresholdDefault = parseInt(process.env.LOW_REWARD_THRESHOLD || "10", 10) || 10,
  lowRewardLimitDefault = parseInt(process.env.LOW_REWARD_LIMIT || "3", 10) || 3;
console.log("================================================================================");
console.log("                                  ⭐ 快手至尊金币至尊PLUS版 ⭐                                ");
console.log("                            🏆 安全稳定 · 高效收益 · 尊贵体验 🏆                        ");
console.log("                            🏆 tg频道 · https://t.me/+4ccNiabMEJkxZDVl 🏆                        ");
console.log("                           🏆 赞助购买https://new.lqfaka.com/shop/IMSZZ90F🏆                       ");
console.log("                           🏆 代理购买5r一月http://www.tianxingip.com/proxy/index/index/code/6350550/p/2457.html🏆                       ");
console.log("================🎉 系统初始化完成，快手至尊金币版启动成功！🎉");
console.log("💎 检测到环境变量配置：" + accountCount + "个账号");
console.log("🎯 将执行以下任务：" + tasksToExecute.join(", "));
console.log("[备注：金币阈值配置为 " + coinLimitDefault + " 金币（COIN_LIMIT=" + (process.env.COIN_LIMIT || "默认") + ")，轮数配置为 " + maxRoundsDefault + " 轮（ROUNDS=" + (process.env.ROUNDS || "默认") + ")，低奖励阈值 " + lowRewardThresholdDefault + " 金币（LOW_REWARD_THRESHOLD=" + (process.env.LOW_REWARD_THRESHOLD || "默认") + ")，低奖励上限 " + lowRewardLimitDefault + " 次（LOW_REWARD_LIMIT=" + (process.env.LOW_REWARD_LIMIT || "默认") + ")]");
accountCount > (process.env.MAX_CONCURRENCY || 999) && (console.log("错误: 检测到 " + accountCount + " 个账号配置，最多只允许" + (process.env.MAX_CONCURRENCY || 999) + "个"), process.exit(1));
(async () => {
  await detectEnvironment();
})();
const baseRemoteUrl = "http://111.170.33.15:11678",
  proxyApiUrl = baseRemoteUrl + "/sign_modified.php",
  queueStatusApiUrl = baseRemoteUrl + "/queue_status";
function generateKuaishouDid() {
  try {
    {
      const _0x5e8f5c = _0x34a6de => {
          const _0x4647e1 = "0123456789abcdef";
          let _0x4ac382 = "";
          for (let _0x1ffaf6 = 0; _0x1ffaf6 < _0x34a6de; _0x1ffaf6++) {
            _0x4ac382 += _0x4647e1.charAt(Math.floor(Math.random() * _0x4647e1.length));
          }
          return _0x4ac382;
        },
        _0x54851d = _0x5e8f5c(16),
        _0x4d3831 = "ANDROID_" + _0x54851d;
      return _0x4d3831;
    }
  } catch (_0x5bf353) {
    console.log("生成did失败: " + _0x5bf353.message);
    const _0x1cb19e = Date.now().toString(16).toUpperCase();
    return "ANDROID_" + _0x1cb19e.substring(0, 16);
  }
}
async function sendRequest(_0x2b1729, _0x59c86d = null, _0x48c9c3 = "Unknown Request") {
  const _0x3a690a = {
    ..._0x2b1729
  };
  if (_0x59c86d) {
    try {
      _0x3a690a.agent = new SocksProxyAgent(_0x59c86d);
      isDevMode && console.log("[调试] " + _0x48c9c3 + " 使用代理: " + _0x59c86d);
    } catch (_0x392525) {
      console.log("[错误] " + _0x48c9c3 + " 代理URL无效(" + _0x392525.message + ")，尝试直连模式");
      isDevMode && console.log("[调试] 代理无效，自动切换到直连模式");
    }
  } else {
    if (isDevMode) {
      console.log("[调试] 未配置代理，使用直连模式");
    }
  }
  if (isDevMode) {
    const _0x3dd1a4 = _0x3a690a.method || "GET";
    console.log("[调试] " + _0x48c9c3 + " -> " + _0x3dd1a4 + " " + _0x3a690a.url);
  }
  return new Promise(_0x14e7c1 => {
    request(_0x3a690a, (_0x28efa9, _0x51a4c5, _0x1de683) => {
      {
        if (_0x28efa9) {
          if (_0x28efa9.name === "AggregateError" && Array.isArray(_0x28efa9.errors)) console.log("[调试] " + _0x48c9c3 + " 请求错误: AggregateError\n" + _0x28efa9.errors.map((_0x183749, _0xff87d5) => "  [" + _0xff87d5 + "] " + (_0x183749?.["message"] || _0x183749)).join("\n"));else {
            console.log("[调试] " + _0x48c9c3 + " 请求错误: " + (_0x28efa9.message || String(_0x28efa9)));
          }
          return _0x14e7c1(null);
        }
        if (!_0x51a4c5 || _0x51a4c5.statusCode !== 200) {
          const _0x3ca94f = _0x51a4c5 ? _0x51a4c5.statusCode : "无响应";
          console.log("[调试] " + _0x48c9c3 + " HTTP状态码异常: " + _0x3ca94f);
          return _0x14e7c1(null);
        }
        try {
          _0x14e7c1(JSON.parse(_0x1de683));
        } catch {
          _0x14e7c1(_0x1de683);
        }
      }
    });
  });
}
async function testProxyConnectivity(_0x4cca2b, _0x33eb4c = "代理连通性检测") {
  if (!_0x4cca2b) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  const _0x36c490 = await sendRequest({
    "method": "GET",
    "url": "https://ipinfo.io/json",
    "headers": {
      "User-Agent": "ProxyTester/1.0"
    },
    "timeout": 8000
  }, _0x4cca2b, _0x33eb4c + " → ipinfo.io");
  if (!_0x36c490) return {
    "ok": false,
    "msg": "❌ 无法通过代理访问 ipinfo.io",
    "ip": ""
  };
  const _0x36f0d0 = _0x36c490.ip || _0x36c490.ip_address || "";
  return {
    "ok": true,
    "msg": "✅ SOCKS5代理正常，出口IP: " + (_0x36f0d0 || "未知"),
    "ip": _0x36f0d0 || "未知"
  };
}
const usedProxies = new Set();
async function getAccountBasicInfo(_0x3d49c0, _0x221a66, _0x399cb1 = "?") {
  const _0xd26b34 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    _0x1bacc2 = await sendRequest({
      "method": "GET",
      "url": _0xd26b34,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x3d49c0,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x221a66, "账号[" + _0x399cb1 + "] 获取基本信息");
  if (_0x1bacc2 && _0x1bacc2.result === 1 && _0x1bacc2.data) return {
    "nickname": _0x1bacc2.data.userData?.["nickname"] || null,
    "totalCoin": _0x1bacc2.data.totalCoin ?? null,
    "allCash": _0x1bacc2.data.allCash ?? null
  };
  return null;
}
function centerAlign(_0xbd28a5, _0x2a59f5) {
  _0xbd28a5 = String(_0xbd28a5);
  if (_0xbd28a5.length >= _0x2a59f5) return _0xbd28a5.substring(0, _0x2a59f5);
  const _0x45e9e4 = _0x2a59f5 - _0xbd28a5.length,
    _0x57e67a = Math.floor(_0x45e9e4 / 2),
    _0x349067 = _0x45e9e4 - _0x57e67a;
  return " ".repeat(_0x57e67a) + _0xbd28a5 + " ".repeat(_0x349067);
}
class KuaishouAdTask {
  constructor({
    index: _0x5a5129,
    salt: _0x36b7fd,
    cookie: _0x706d96,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look"]
  }) {
    this.index = _0x5a5129;
    this.salt = _0x36b7fd;
    this.cookie = _0x706d96;
    this.nickname = nickname || "账号" + _0x5a5129;
    this.proxyUrl = proxyUrl;
    this.coinLimit = parseInt(process.env.COIN_LIMIT || "500000", 10) || 500000;
    this.lowRewardThreshold = parseInt(process.env.LOW_REWARD_THRESHOLD || "10", 10) || 10;
    this.lowRewardLimit = parseInt(process.env.LOW_REWARD_LIMIT || "3", 10) || 3;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
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
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    this.tasksToExecute.forEach(_0x3dd4e4 => {
      this.taskConfigs[_0x3dd4e4] && (this.taskStats[_0x3dd4e4] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      });
    });
    this.lowRewardStreak = 0;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x275696 => {
      this.taskConfigs[_0x275696] && (this.taskLimitReached[_0x275696] = false);
    });
  }
  async ["checkCoinLimit"]() {
    try {
      const _0x286fb5 = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
      if (_0x286fb5 && _0x286fb5.totalCoin) {
        const _0x56ed19 = parseInt(_0x286fb5.totalCoin);
        if (_0x56ed19 >= this.coinLimit) {
          console.log("⚠️ 账号[" + this.nickname + "] 金币已达 " + _0x56ed19 + "，超过 " + this.coinLimit + " 阈值，将停止任务 [备注：超过金币阈值（COIN_LIMIT=" + (process.env.COIN_LIMIT || "默认500000") + ")]");
          this.coinExceeded = true;
          this.stopAllTasks = true;
          return true;
        }
      }
      return false;
    } catch (_0x6e0898) {
      console.log("账号[" + this.nickname + "] 金币检查异常: " + _0x6e0898.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      const _0x5e9c5a = this.cookie.match(/egid=([^;]+)/),
        _0x257184 = this.cookie.match(/did=([^;]+)/),
        _0x471a5a = this.cookie.match(/userId=([^;]+)/),
        _0x4494f5 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
        _0xecaf1 = this.cookie.match(/appver=([^;]+)/);
      this.egid = _0x5e9c5a ? _0x5e9c5a[1] : "";
      this.did = _0x257184 ? _0x257184[1] : "";
      this.userId = _0x471a5a ? _0x471a5a[1] : "";
      this.kuaishouApiSt = _0x4494f5 ? _0x4494f5[1] : "";
      this.appver = _0xecaf1 ? _0xecaf1[1] : "13.7.20.10468";
      (!this.egid || !this.did) && console.log("账号[" + this.nickname + "] cookie格式可能无 egid 或 did，但继续尝试...");
    } catch (_0x1268cf) {
      console.log("账号[" + this.nickname + "] 解析cookie失败: " + _0x1268cf.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n账号[" + this.nickname + "] 任务执行统计:");
    for (const [_0x423ff5, _0x323d09] of Object.entries(this.taskStats)) {
      const _0x7314b4 = this.taskConfigs[_0x423ff5].name;
      console.log("  " + _0x7314b4 + ": 成功" + _0x323d09.success + "次, 失败" + _0x323d09.failed + "次, 总奖励" + _0x323d09.totalReward + "金币");
    }
  }
  async ["retryOperation"](_0x17c9e1, _0x4c53f0, _0x16202c = 3, _0x2f42f0 = 2000) {
    let _0x19b099 = 0,
      _0x2cd481 = null;
    while (_0x19b099 < _0x16202c) {
      try {
        const _0xfc6c51 = await _0x17c9e1();
        if (_0xfc6c51) return _0xfc6c51;
        _0x2cd481 = new Error(_0x4c53f0 + " 返回空结果");
      } catch (_0x6159e1) {
        _0x2cd481 = _0x6159e1;
        console.log("账号[" + this.nickname + "] " + _0x4c53f0 + " 异常: " + _0x6159e1.message);
      }
      _0x19b099++;
      _0x19b099 < _0x16202c && (console.log("账号[" + this.nickname + "] " + _0x4c53f0 + " 失败，重试 " + _0x19b099 + "/" + _0x16202c), await new Promise(_0x3c2e7e => setTimeout(_0x3c2e7e, _0x2f42f0)));
    }
    isDevMode && _0x2cd481 && console.log("[调试] " + _0x4c53f0 + " 最终失败: " + _0x2cd481.message);
    return null;
  }
  async ["getAdInfo"](_0x29a6de) {
    try {
      const _0x2a7b45 = "/rest/e/reward/mixed/ad",
        _0x80f883 = {
          "encData": "|encData|",
          "sign": "|sign|",
          "cs": "false",
          "client_key": "2ac2a76d",
          "videoModelCrowdTag": "1_23",
          "os": "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        },
        _0x27a053 = {
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
        },
        _0x312152 = {
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
            "pageId": 11101,
            "subPageId": _0x29a6de.subPageId,
            "action": 0,
            "browseType": 3,
            "impExtData": "{}",
            "mediaExtData": "{}"
          }]
        },
        _0x1aca90 = Buffer.from(JSON.stringify(_0x312152)).toString("base64"),
        _0x5e5d9d = await this.generateSignature2(_0x2a7b45, querystring.stringify({
          ..._0x27a053,
          ..._0x80f883
        }), this.salt, _0x1aca90);
      if (!_0x5e5d9d) {
        console.log("❌ 账号[" + this.nickname + "] 生成签名失败，无法获取" + _0x29a6de.name);
        return null;
      }
      const _0x1533fd = {
        ..._0x27a053,
        "sig": _0x5e5d9d.sig,
        "__NS_sig3": _0x5e5d9d.__NS_sig3,
        "__NS_xfalcon": "",
        "__NStokensig": _0x5e5d9d.__NStokensig
      };
      _0x80f883.encData = _0x5e5d9d.encData;
      _0x80f883.sign = _0x5e5d9d.sign;
      const _0x305cde = "https://api.e.kuaishou.com" + _0x2a7b45 + "?" + querystring.stringify(_0x1533fd),
        _0x447914 = await sendRequest({
          "method": "POST",
          "url": _0x305cde,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
          },
          "form": _0x80f883,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "] 获取广告");
      if (!_0x447914) return null;
      if (_0x447914.errorMsg === "OK" && _0x447914.feeds && _0x447914.feeds[0] && _0x447914.feeds[0].ad) {
        {
          const _0x39b8e9 = _0x447914.feeds[0].caption || _0x447914.feeds[0].ad?.["caption"] || "";
          _0x39b8e9 && console.log("✅ 账号[" + this.nickname + "] 成功获取到广告信息：" + _0x39b8e9);
          const _0x4819a5 = _0x447914.feeds[0].exp_tag || "",
            _0x520c7c = _0x4819a5.split("/")[1]?.["split"]("_")?.[0] || "";
          return {
            "cid": _0x447914.feeds[0].ad.creativeId,
            "llsid": _0x520c7c
          };
        }
      }
      isDevMode && console.log("[调试] getAdInfo 原始响应:", JSON.stringify(_0x447914));
      return null;
    } catch (_0x481da3) {
      console.log("❌ 账号[" + this.nickname + "] 获取广告异常: " + _0x481da3.message);
      return null;
    }
  }
  async ["generateSignature"](_0xe1cbe, _0x1f12c3, _0x5c1a94, _0x363c32) {
    try {
      {
        const _0x2cf0a2 = JSON.stringify({
            "businessId": _0x363c32.businessId,
            "endTime": this.endTime,
            "extParams": "",
            "mediaScene": "video",
            "neoInfos": [{
              "creativeId": _0xe1cbe,
              "extInfo": "",
              "llsid": _0x1f12c3,
              "requestSceneType": _0x363c32.requestSceneType,
              "taskType": _0x363c32.taskType,
              "watchExpId": "",
              "watchStage": 0
            }],
            "pageId": 11101,
            "posId": _0x363c32.posId,
            "reportType": 0,
            "sessionId": "",
            "startTime": this.startTime,
            "subPageId": _0x363c32.subPageId
          }),
          _0x3f0094 = "bizStr=" + encodeURIComponent(_0x2cf0a2) + "&cs=false&client_key=2ac2a76d",
          _0x44fd26 = this.queryParams + "&" + _0x3f0094,
          _0x70e7fb = await this.requestSignService({
            "urlpath": this.taskReportPath,
            "urldata": _0x44fd26,
            "api_client_salt": this.salt
          }, "账号[" + this.nickname + "] 生成报告签名");
        if (!_0x70e7fb || !_0x70e7fb.data) return null;
        return {
          "sig": _0x70e7fb.data.sig,
          "sig3": _0x70e7fb.data.__NS_sig3,
          "sigtoken": _0x70e7fb.data.__NStokensig,
          "post": _0x3f0094
        };
      }
    } catch (_0x58fd42) {
      console.log("❌ 账号[" + this.nickname + "] 生成签名异常: " + _0x58fd42.message);
      return null;
    }
  }
  async ["generateSignature2"](_0x4db204, _0x13c760, _0x567e22, _0x2b40ec) {
    const _0x28f1ed = await this.requestSignService({
      "urlpath": _0x4db204,
      "urldata": _0x13c760,
      "api_client_salt": _0x567e22,
      "req_str": _0x2b40ec
    }, "账号[" + this.nickname + "] 生成广告签名");
    if (!_0x28f1ed) return null;
    return _0x28f1ed.data || _0x28f1ed;
  }
  async ["submitReport"](_0x1a38f5, _0x3f607c, _0x5c928c, _0x4769ef, _0x53fa78, _0x270465) {
    try {
      {
        const _0x8c31ad = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x1a38f5 + "&__NS_sig3=" + _0x3f607c + "&__NS_xfalcon=&__NStokensig=" + _0x5c928c),
          _0x599341 = await sendRequest({
            "method": "POST",
            "url": _0x8c31ad,
            "headers": {
              "Host": "api.e.kuaishou.cn",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": this.cookie,
              "Content-Type": "application/x-www-form-urlencoded"
            },
            "body": _0x4769ef,
            "timeout": 12000
          }, this.proxyUrl, "账号[" + this.nickname + "] 提交任务");
        if (!_0x599341) return {
          "success": false,
          "reward": 0
        };
        if (_0x599341.result === 1) {
          const _0x56750b = _0x599341.data?.["neoAmount"] || 0;
          console.log("💰 账号[" + this.nickname + "] " + _0x270465.name + _0x56750b + "金币奖励！");
          if (_0x56750b <= this.lowRewardThreshold) {
            this.lowRewardStreak++;
            console.log("⚠️ 账号[" + this.nickname + "] [备注：奖励低于 LOW_REWARD_THRESHOLD=" + this.lowRewardThreshold + "] 金币低于阈值, 模拟下载应用提升权重^^^^^^");
            this.did = generateKuaishouDid();
            this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 账号[" + this.nickname + "] 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务 [备注：连续低奖励达到上限 LOW_REWARD_LIMIT=" + this.lowRewardLimit + "]"), this.stopAllTasks = true);
          } else this.lowRewardStreak = 0;
          return {
            "success": true,
            "reward": _0x56750b
          };
        }
        if ([20107, 20108, 1003, 415].includes(_0x599341.result)) {
          console.log("⚠️ 账号[" + this.nickname + "] " + _0x270465.name + " 已达上限");
          this.taskLimitReached[_0x53fa78] = true;
          return {
            "success": false,
            "reward": 0
          };
        }
        console.log("❌ 账号[" + this.nickname + "] " + _0x270465.name + " 奖励失败，result=" + _0x599341.result + " msg=" + (_0x599341.data || ""));
        isDevMode && console.log("[调试] submitReport 原始响应:", JSON.stringify(_0x599341));
        return {
          "success": false,
          "reward": 0
        };
      }
    } catch (_0x12aa46) {
      console.log("❌ 账号[" + this.nickname + "] 提交任务异常: " + _0x12aa46.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["requestSignService"](_0x43f902, _0x5e259c) {
    const _0x5e2dde = (process.env.km || "").trim();
    if (!_0x5e2dde) return null;
    const _0x3089ed = await sendRequest({
      "method": "POST",
      "url": proxyApiUrl + "?card_key=" + encodeURIComponent(_0x5e2dde),
      "headers": {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        "X-Card-Key": _0x5e2dde
      },
      "body": JSON.stringify(_0x43f902),
      "timeout": 15000
    }, null, _0x5e259c + "（签名服务）");
    if (!_0x3089ed) return null;
    if (_0x3089ed.success && _0x3089ed.status === "queued" && _0x3089ed.queue_id) {
      const _0x290b9a = await this.pollQueueStatus(_0x3089ed.queue_id);
      if (_0x290b9a && _0x290b9a.success && (_0x290b9a.status === "completed" || _0x290b9a.status === "processed")) return _0x290b9a;
      console.log("账号[" + this.nickname + "] 签名失败: " + (_0x290b9a?.["error"] || _0x290b9a?.["status"] || "未知"));
      return null;
    }
    if (_0x3089ed.success && (!_0x3089ed.status || _0x3089ed.status === "processed" || _0x3089ed.status === "completed")) return _0x3089ed;
    console.log("账号[" + this.nickname + "] 签名失败: " + (_0x3089ed.error || _0x3089ed.message || _0x3089ed.status || "未知"));
    return null;
  }
  async ["pollQueueStatus"](_0x575cd7, _0x50f951 = 30000, _0x29fb74 = 2000) {
    const _0x371910 = Date.now();
    while (Date.now() - _0x371910 < _0x50f951) {
      const _0x5929e6 = await sendRequest({
        "method": "GET",
        "url": queueStatusApiUrl + "?queue_id=" + encodeURIComponent(_0x575cd7),
        "headers": {
          "User-Agent": "Mozilla/5.0"
        },
        "timeout": 10000
      }, null, "账号[" + this.nickname + "] 签名排队");
      if (_0x5929e6?.["success"]) {
        if (_0x5929e6.status === "completed" || _0x5929e6.status === "processed") return _0x5929e6;
        if (_0x5929e6.status === "failed") return _0x5929e6;
      }
      await new Promise(_0x506fd1 => setTimeout(_0x506fd1, _0x29fb74));
    }
    return {
      "success": false,
      "status": "failed",
      "error": "queue_timeout"
    };
  }
  async ["executeTask"](_0x39b7ef) {
    const _0x10d609 = this.taskConfigs[_0x39b7ef];
    if (!_0x10d609) {
      console.log("❌ 账号[" + this.nickname + "] 未知任务: " + _0x39b7ef);
      return false;
    }
    if (this.taskLimitReached[_0x39b7ef]) return false;
    try {
      const _0x12ec89 = await this.retryOperation(() => this.getAdInfo(_0x10d609), "获取" + _0x10d609.name + "信息", 3);
      if (!_0x12ec89) return this.taskStats[_0x39b7ef].failed++, false;
      const _0x3dee63 = Math.floor(Math.random() * 10000) + 30000;
      console.log("🔍 账号[" + this.nickname + "] ==>" + _0x10d609.name + " " + generateRandomInteractionMessage() + " " + Math.round(_0x3dee63 / 1000) + " 秒");
      await new Promise(_0x2d7d2b => setTimeout(_0x2d7d2b, _0x3dee63));
      const _0x3f3eac = await this.retryOperation(() => this.generateSignature(_0x12ec89.cid, _0x12ec89.llsid, _0x39b7ef, _0x10d609), "生成" + _0x10d609.name + "签名", 3);
      if (!_0x3f3eac) {
        this.taskStats[_0x39b7ef].failed++;
        return false;
      }
      const _0x345a22 = await this.retryOperation(() => this.submitReport(_0x3f3eac.sig, _0x3f3eac.sig3, _0x3f3eac.sigtoken, _0x3f3eac.post, _0x39b7ef, _0x10d609), "提交" + _0x10d609.name + "报告", 3);
      if (_0x345a22?.["success"]) return this.taskStats[_0x39b7ef].success++, this.taskStats[_0x39b7ef].totalReward += _0x345a22.reward || 0, true;
      this.taskStats[_0x39b7ef].failed++;
      return false;
    } catch (_0x52b87e) {
      console.log("❌ 账号[" + this.nickname + "] 任务异常(" + _0x39b7ef + "): " + _0x52b87e.message);
      this.taskStats[_0x39b7ef].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x586bd8 = {};
    for (const _0x3c85e2 of this.tasksToExecute) {
      if (this.stopAllTasks) break;
      if (!this.taskConfigs[_0x3c85e2]) {
        {
          console.log("⚠️ 账号[" + this.nickname + "] 跳过未知任务: " + _0x3c85e2);
          continue;
        }
      }
      console.log("🚀 账号[" + this.nickname + "] 开始任务：" + this.taskConfigs[_0x3c85e2].name);
      _0x586bd8[_0x3c85e2] = await this.executeTask(_0x3c85e2);
      if (this.stopAllTasks) {
        break;
      }
      if (_0x3c85e2 !== this.tasksToExecute[this.tasksToExecute.length - 1]) {
        const _0x4e79cd = Math.floor(Math.random() * 8000) + 7000;
        console.log("⏱ 账号[" + this.nickname + "] 下一个任务，随机等待 " + Math.round(_0x4e79cd / 1000) + " 秒");
        await new Promise(_0x2b5ca2 => setTimeout(_0x2b5ca2, _0x4e79cd));
      }
    }
    return _0x586bd8;
  }
}
async function concurrentExecute(_0xf5ea41, _0x5eed8d, _0x27206b) {
  const _0x34bdec = new Array(_0xf5ea41.length);
  let _0x4e6bf2 = 0;
  async function _0x4d3b99() {
    while (true) {
      const _0x472515 = _0x4e6bf2++;
      if (_0x472515 >= _0xf5ea41.length) return;
      const _0x5ecc74 = _0xf5ea41[_0x472515];
      try {
        _0x34bdec[_0x472515] = await _0x27206b(_0x5ecc74, _0x472515);
      } catch (_0xd37a9a) {
        console.log("并发执行异常（index=" + (_0x472515 + 1) + "）：" + _0xd37a9a.message);
        _0x34bdec[_0x472515] = null;
      }
    }
  }
  const _0x264577 = Array.from({
    "length": Math.min(_0x5eed8d, _0xf5ea41.length)
  }, _0x4d3b99);
  await Promise.all(_0x264577);
  return _0x34bdec;
}
async function processAccount(_0x6f8fa8, _0x280639 = maxRoundsDefault) {
  console.log("账号[" + _0x6f8fa8.index + "]" + (_0x6f8fa8.remark ? "（" + _0x6f8fa8.remark + "）" : "") + " [备注：本账号将执行最多 " + _0x280639 + " 轮任务]");
  if (_0x6f8fa8.proxyUrl) {
    {
      console.log("账号[" + _0x6f8fa8.index + "]" + (_0x6f8fa8.remark ? "（" + _0x6f8fa8.remark + "）" : "") + " 🔌 测试代理连接中...");
      const _0x58ac8c = await testProxyConnectivity(_0x6f8fa8.proxyUrl, "账号[" + _0x6f8fa8.index + "]");
      console.log("  - " + (_0x58ac8c.ok ? "✅ 代理验证通过，IP: " + _0x58ac8c.ip : "❌ 代理验证失败") + ": " + _0x58ac8c.msg);
      _0x58ac8c.ok && _0x58ac8c.ip && _0x58ac8c.ip !== "localhost" && (usedProxies.has(_0x58ac8c.ip) && (console.log("\n⚠️ 存在相同代理IP（" + _0x58ac8c.ip + "），请立即检查！"), process.exit(1)), usedProxies.add(_0x58ac8c.ip));
    }
  } else console.log("账号[" + _0x6f8fa8.index + "] 未配置代理，走直连");
  console.log("账号[" + _0x6f8fa8.index + "]" + (_0x6f8fa8.remark ? "（" + _0x6f8fa8.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x139873 = await getAccountBasicInfo(_0x6f8fa8.cookie, _0x6f8fa8.proxyUrl, _0x6f8fa8.index),
    _0x28895f = _0x139873?.["nickname"] || "账号" + _0x6f8fa8.index;
  if (_0x139873) {
    const _0xd98e87 = _0x139873.totalCoin != null ? _0x139873.totalCoin : "未知",
      _0x4e7cb2 = _0x139873.allCash != null ? _0x139873.allCash : "未知";
    console.log("账号[" + _0x28895f + "] ✅ 登录成功，💰 当前金币: " + _0xd98e87 + "，💸 当前余额: " + _0x4e7cb2);
  } else console.log("账号[" + _0x28895f + "] ❌ 基本信息获取失败，继续执行");
  const _0x346d4e = new KuaishouAdTask({
    ..._0x6f8fa8,
    "nickname": _0x28895f,
    "tasksToExecute": tasksToExecute
  });
  await _0x346d4e.checkCoinLimit();
  if (_0x346d4e.coinExceeded) {
    {
      console.log("账号[" + _0x346d4e.nickname + "] 初始金币已超过阈值，不执行任务");
      const _0x3655dd = await getAccountBasicInfo(_0x6f8fa8.cookie, _0x6f8fa8.proxyUrl, _0x6f8fa8.index),
        _0x5eb9b0 = _0x139873?.["totalCoin"] || 0,
        _0x1b5f20 = _0x3655dd?.["totalCoin"] || 0,
        _0x4a0768 = _0x1b5f20 - _0x5eb9b0,
        _0x1ade6b = _0x139873?.["allCash"] || 0,
        _0x78a5ca = _0x3655dd?.["allCash"] || 0,
        _0x57257d = _0x78a5ca - _0x1ade6b;
      return {
        "index": _0x6f8fa8.index,
        "nickname": _0x28895f,
        "initialCoin": _0x5eb9b0,
        "finalCoin": _0x1b5f20,
        "coinChange": _0x4a0768,
        "initialCash": _0x1ade6b,
        "finalCash": _0x78a5ca,
        "cashChange": _0x57257d,
        "stats": _0x346d4e.getTaskStats(),
        "coinLimitExceeded": true
      };
    }
  }
  for (let _0x382cff = 0; _0x382cff < _0x280639; _0x382cff++) {
    {
      const _0x562e1b = Math.floor(Math.random() * 8000) + 8000;
      console.log("账号[" + _0x346d4e.nickname + "] ⌛ 第" + (_0x382cff + 1) + "轮，先随机等待 " + Math.round(_0x562e1b / 1000) + " 秒");
      await new Promise(_0x16b3a0 => setTimeout(_0x16b3a0, _0x562e1b));
      console.log("账号[" + _0x346d4e.nickname + "] 🚀 开始第" + (_0x382cff + 1) + "轮任务");
      const _0x4edbdb = await _0x346d4e.executeAllTasksByPriority();
      Object.values(_0x4edbdb).some(Boolean) ? console.log("账号[" + _0x346d4e.nickname + "] ✅ 第" + (_0x382cff + 1) + "轮执行完成") : console.log("账号[" + _0x346d4e.nickname + "] ⚠️ 第" + (_0x382cff + 1) + "轮没有成功任务");
      if (_0x346d4e.stopAllTasks) {
        console.log("账号[" + _0x346d4e.nickname + "] 🏁 达到停止条件，终止后续轮次");
        break;
      }
      if (_0x382cff < _0x280639 - 1) {
        {
          const _0x3edb87 = Math.floor(Math.random() * 10000) + 10000;
          console.log("账号[" + _0x346d4e.nickname + "] ⌛ 等待 " + Math.round(_0x3edb87 / 1000) + " 秒进入下一轮");
          await new Promise(_0x89ae85 => setTimeout(_0x89ae85, _0x3edb87));
        }
      }
    }
  }
  const _0x3c2138 = await getAccountBasicInfo(_0x6f8fa8.cookie, _0x6f8fa8.proxyUrl, _0x6f8fa8.index),
    _0x19f8f3 = _0x139873?.["totalCoin"] || 0,
    _0x105c7e = _0x3c2138?.["totalCoin"] || 0,
    _0xef2771 = _0x105c7e - _0x19f8f3,
    _0x4613b5 = _0x139873?.["allCash"] || 0,
    _0xa4b847 = _0x3c2138?.["allCash"] || 0,
    _0x58181f = _0xa4b847 - _0x4613b5;
  _0x346d4e.printTaskStats();
  return {
    "index": _0x6f8fa8.index,
    "nickname": _0x28895f,
    "initialCoin": _0x19f8f3,
    "finalCoin": _0x105c7e,
    "coinChange": _0xef2771,
    "initialCash": _0x4613b5,
    "finalCash": _0xa4b847,
    "cashChange": _0x58181f,
    "stats": _0x346d4e.getTaskStats(),
    "coinLimitExceeded": _0x346d4e.coinExceeded
  };
}
function printAccountsSummary(_0x9bbfd3) {
  if (!_0x9bbfd3.length) {
    {
      console.log("\n没有可显示的账号信息。");
      return;
    }
  }
  const _0xabd9e5 = _0x9bbfd3.reduce((_0x423081, _0x48c9f7) => {
      return _0x423081 + (parseInt(_0x48c9f7.initialCoin) || 0);
    }, 0),
    _0x2bbb8d = _0x9bbfd3.reduce((_0x215035, _0x31361e) => {
      return _0x215035 + (parseInt(_0x31361e.finalCoin) || 0);
    }, 0),
    _0xa2503c = _0x2bbb8d - _0xabd9e5,
    _0x421323 = _0x9bbfd3.reduce((_0xedc7e4, _0x561462) => {
      return _0xedc7e4 + (parseFloat(_0x561462.initialCash) || 0);
    }, 0),
    _0x4bb2c9 = _0x9bbfd3.reduce((_0x4d9ba5, _0x16e835) => {
      return _0x4d9ba5 + (parseFloat(_0x16e835.finalCash) || 0);
    }, 0),
    _0xd26b1e = _0x4bb2c9 - _0x421323;
  let _0x4291a1 = 0,
    _0x6fca67 = 0,
    _0x35671e = 0;
  _0x9bbfd3.forEach(_0xee5884 => {
    _0xee5884.stats && Object.values(_0xee5884.stats).forEach(_0x2c443f => {
      _0x4291a1 += _0x2c443f.success + _0x2c443f.failed;
      _0x6fca67 += _0x2c443f.success;
      _0x35671e += _0x2c443f.totalReward;
    });
  });
  const _0x162895 = _0x4291a1 > 0 ? (_0x6fca67 / _0x4291a1 * 100).toFixed(1) : "0.0",
    _0x5756cf = _0x9bbfd3.filter(_0x747a15 => _0x747a15.coinLimitExceeded).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + centerAlign("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x9bbfd3.length).padEnd(22) + ("超过金币阈值账号: " + _0x5756cf).padEnd(22) + ("总任务数: " + _0x4291a1).padEnd(22) + ("任务成功率: " + _0x162895 + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0xa2503c).padEnd(26) + ("总金币奖励: " + _0x35671e).padEnd(26) + ("总余额变化: " + _0xd26b1e.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x233805 = ["序号", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0x38130e = [6, 16, 12, 12, 12, 12, 12, 12];
  let _0x17a785 = "|";
  _0x233805.forEach((_0x55c097, _0xd835da) => {
    _0x17a785 += centerAlign(_0x55c097, _0x38130e[_0xd835da]) + "|";
  });
  console.log(_0x17a785);
  let _0x5dd63c = "|";
  _0x38130e.forEach(_0x3d046f => {
    _0x5dd63c += "-".repeat(_0x3d046f) + "|";
  });
  console.log(_0x5dd63c);
  _0x9bbfd3.forEach(_0x3a4f11 => {
    let _0x43ec92 = "|";
    _0x43ec92 += centerAlign(_0x3a4f11.index, _0x38130e[0]) + "|";
    const _0x51d29a = (_0x3a4f11.nickname || "-") + (_0x3a4f11.coinLimitExceeded ? " ⚠️" : "");
    _0x43ec92 += centerAlign(_0x51d29a.substring(0, _0x38130e[1] - 2), _0x38130e[1]) + "|";
    _0x43ec92 += centerAlign(_0x3a4f11.initialCoin, _0x38130e[2]) + "|";
    _0x43ec92 += centerAlign(_0x3a4f11.finalCoin, _0x38130e[3]) + "|";
    const _0x4281fe = _0x3a4f11.coinChange >= 0 ? "+" + _0x3a4f11.coinChange : _0x3a4f11.coinChange;
    _0x43ec92 += centerAlign(_0x4281fe, _0x38130e[4]) + "|";
    _0x43ec92 += centerAlign(_0x3a4f11.initialCash, _0x38130e[5]) + "|";
    _0x43ec92 += centerAlign(_0x3a4f11.finalCash, _0x38130e[6]) + "|";
    const _0x171206 = _0x3a4f11.cashChange >= 0 ? "+" + _0x3a4f11.cashChange.toFixed(2) : _0x3a4f11.cashChange.toFixed(2);
    _0x43ec92 += centerAlign(_0x171206, _0x38130e[7]) + "|";
    console.log(_0x43ec92);
  });
  console.log("=".repeat(80));
  console.log("|" + centerAlign("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
(async () => {
  await detectEnvironment();
  const _0x420aa6 = loadAccountsFromEnv();
  console.log("共找到 " + _0x420aa6.length + " 个有效账号");
  !_0x420aa6.length && process.exit(1);
  const _0x270fae = parseInt(process.env.MAX_CONCURRENCY || process.env.CONCURRENCY || "888", 10) || 888,
    _0x4f333a = parseInt(process.env.ROUNDS || "35", 10) || 35;
  console.log("\n防黑并发：" + _0x270fae + "    防黑轮数：" + _0x4f333a + "\n");
  const _0x383533 = [];
  await concurrentExecute(_0x420aa6, _0x270fae, async _0x378594 => {
    {
      console.log("\n—— 🚀 开始账号[" + _0x378594.index + "]" + (_0x378594.remark ? "（" + _0x378594.remark + "）" : "") + " ——");
      try {
        const _0x2fc1b7 = await processAccount(_0x378594, _0x4f333a);
        _0x383533.push({
          "index": _0x378594.index,
          "remark": _0x378594.remark || "无备注",
          "nickname": _0x2fc1b7?.["nickname"] || this.nickname,
          "initialCoin": _0x2fc1b7?.["initialCoin"] || 0,
          "finalCoin": _0x2fc1b7?.["finalCoin"] || 0,
          "coinChange": _0x2fc1b7?.["coinChange"] || 0,
          "initialCash": _0x2fc1b7?.["initialCash"] || 0,
          "finalCash": _0x2fc1b7?.["finalCash"] || 0,
          "cashChange": _0x2fc1b7?.["cashChange"] || 0,
          "stats": _0x2fc1b7?.["stats"] || {},
          "coinLimitExceeded": _0x2fc1b7?.["coinLimitExceeded"] || false
        });
      } catch (_0x8b45d7) {
        console.log("账号[" + _0x378594.index + "] ❌ 执行异常：" + _0x8b45d7.message);
        _0x383533.push({
          "index": _0x378594.index,
          "remark": _0x378594.remark || "无备注",
          "nickname": this.nickname,
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "initialCash": 0,
          "finalCash": 0,
          "cashChange": 0,
          "error": _0x8b45d7.message
        });
      }
    }
  });
  _0x383533.sort((_0x29a57a, _0x26b835) => _0x29a57a.index - _0x26b835.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  printAccountsSummary(_0x383533);
})();