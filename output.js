//Fri Aug 30 2024 02:15:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x9f85e5 = $.isNode() ? require("./sendNotify") : "",
  _0x4789d7 = $.isNode() ? require("./jdCookie.js") : "",
  _0x12c7b2 = require("./function/dylans.js"),
  _0x54c8e1 = require("./function/dylanx.js"),
  _0x442ba4 = require("./USER_AGENTS");
let _0x77762b = true;
if (process.env.DY_PROXY) try {
  require("https-proxy-agent");
  ccc = require("./function/proxy.js");
  $.dget = ccc.intoRequest($.get.bind($));
  $.dpost = ccc.intoRequest($.post.bind($));
} catch {
  $.log("未安装https-proxy-agent依赖，无法启用代理");
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
let _0x12a730 = [],
  _0x1f8ca8 = "",
  _0x5aad1d = "";
if ($.isNode()) {
  Object.keys(_0x4789d7).forEach(_0x5d8fc6 => {
    _0x12a730.push(_0x4789d7[_0x5d8fc6]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x12a730 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x5319a3($.getdata("CookiesJD") || "[]").map(_0x165488 => _0x165488.cookie)].filter(_0x1bd247 => !!_0x1bd247);
const _0x12a470 = process.env.VIDEO_RUNNUM ? process.env.VIDEO_RUNNUM : "10";
!(async () => {
  if (!_0x12a730[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("当前版本：20240818");
  console.log("问题反馈：https://t.me/dylan_jdpro");
  console.log("默认10个账号一组，调整变量 VIDEO_RUNNUM='20' ");
  $.vdata = {};
  $.aidlist = [];
  $.WatchList = [];
  await _0xce636b();
  let _0x2f96c3 = 0,
    _0x341106 = 0;
  do {
    console.log("\n1、开始领取任务...");
    for (_0x2f96c3 = _0x341106; _0x2f96c3 < _0x12a730.length; _0x2f96c3++) {
      if (_0x12a730[_0x2f96c3]) {
        try {
          _0x1f8ca8 = _0x12a730[_0x2f96c3];
          $.UserName = decodeURIComponent(_0x1f8ca8.match(/pt_pin=([^; ]+)(?=;?)/) && _0x1f8ca8.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
          $.index = _0x2f96c3 + 1;
          $.isLogin = true;
          $.nickName = "";
          $.tasklist = [];
          $.vdata[$.UserName] = [];
          $.UA = _0x442ba4.UARAM ? _0x442ba4.UARAM() : _0x442ba4.USER_AGENT;
          $.goldCoin = 0;
          $.isBan = false;
          console.log("\n******开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
          if (!$.isLogin) {
            $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
              "open-url": "https://bean.m.jd.com/bean/signIndex.action"
            });
            if ($.isNode()) {
              await _0x9f85e5.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
            }
            continue;
          }
          await _0xe7f605();
          if ($.isBan) continue;
          await $.wait(parseInt(Math.random() * 500 + 2000, 10));
          await _0x13f593($.aidlist);
          await $.wait(parseInt(Math.random() * 500 + 2000, 10));
          await _0x24c406();
          await _0x32f709();
          if ($.tasklist.length != 0) {
            for (let _0x244004 of $.tasklist) {
              if (_0x244004.title) continue;
              if (_0x244004.status == 2) {
                console.log(_0x244004.assignmentName + "   已完成！");
                continue;
              }
              console.log("领取  " + _0x244004.assignmentName);
              let _0x183862 = await _0x3f4e18(_0x244004.assignmentId, _0x244004.itemId);
              _0x183862.success && $.vdata[$.UserName].push({
                "title": _0x244004.assignmentName,
                "asid": _0x244004.assignmentId,
                "itemid": _0x244004.itemId,
                "tm": Date.now() + _0x244004.waitDuration * 1000
              });
              await $.wait(parseInt(Math.random() * 500 + 1000, 10));
            }
          } else console.log("任务获取失败！");
          await $.wait(parseInt(Math.random() * 500 + 2000, 10));
        } catch {}
        if ($.index % parseInt(_0x12a470) == 0 || $.index == _0x12a730.length) break;
      }
    }
    console.log("\n2、领取看视频奖励...");
    for (_0x2f96c3 = _0x341106; _0x2f96c3 < _0x12a730.length; _0x2f96c3++) {
      if (_0x12a730[_0x2f96c3]) {
        try {
          _0x1f8ca8 = _0x12a730[_0x2f96c3];
          $.UserName = decodeURIComponent(_0x1f8ca8.match(/pt_pin=([^; ]+)(?=;?)/) && _0x1f8ca8.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
          $.index = _0x2f96c3 + 1;
          $.UA = _0x442ba4.UARAM ? _0x442ba4.UARAM() : _0x442ba4.USER_AGENT;
          $.isLogin = true;
          $.goldCoin = 0;
          $.txsuc = false;
          console.log("\n--------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "--------\n");
          if ($.vdata[$.UserName].length !== 0) {
            for (let _0x365c7c of $.vdata[$.UserName]) {
              console.log("检查进度  " + _0x365c7c.title);
              let _0x73f955 = _0x365c7c.tm - Date.now();
              _0x73f955 > 0 && (console.log("继续看视频:", (_0x73f955 / 1000).toFixed(2), "秒"), await $.wait(_0x73f955));
              await _0x47753(_0x365c7c.asid, _0x365c7c.itemid);
              if (!$.isLogin) continue;
              await $.wait(parseInt(Math.random() * 500 + 1000, 10));
            }
            await $.wait(parseInt(Math.random() * 500 + 1000, 10));
          } else console.log("没有执行中的任务");
          await _0x24c406();
          $.goldCoin > 1000 && (await _0x1ee3bb());
          await $.wait(parseInt(Math.random() * 500 + 1000, 10));
          await _0x1799a5();
          await $.wait(parseInt(Math.random() * 500 + 1000, 10));
        } catch {}
        if ($.index % parseInt(_0x12a470) == 0 || $.index == _0x12a730.length) {
          _0x341106 = $.index;
          break;
        }
      }
    }
  } while (_0x341106 < _0x12a730.length);
})().catch(_0x90280f => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x90280f + "!", "");
}).finally(() => {
  $.done();
});
async function _0xce636b() {
  let _0x19eda3 = {
    "url": "https://pro.m.jd.com/mall/active/8WYa8CGWvkB5b3EC9TcyAbAobeo/index.html",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
  };
  return new Promise(async _0x557ee8 => {
    $.get(_0x19eda3, async (_0x5d2edd, _0x491449, _0x157a12) => {
      try {
        if (_0x5d2edd) console.log("" + JSON.stringify(_0x5d2edd)), console.log("请求失败，请检查网路重试");else try {
          let _0x5313d2 = _0x157a12.match(/"scanTaskCode(?:_\d+)*":"(\w+)"/g),
            _0x4b5208 = _0x157a12.match(/"signInTaskCode(?:_\d+)*":"(\w+)"/g),
            _0x3d7355 = new Set([..._0x5313d2, ..._0x4b5208]);
          for (let _0x52d59e of Array.from(_0x3d7355)) {
            _0x52d59e = _0x52d59e.replace(/"/g, "");
            let _0x3299d4 = _0x52d59e.split(":"),
              _0x2fbbc6 = _0x3299d4[0].split("_");
            if (_0x52d59e.includes("scanTaskCode")) $.aidlist.push({
              "type": "20",
              "assignmentId": _0x3299d4[1],
              "scanTaskCodeIndex": _0x2fbbc6 && _0x2fbbc6.length > 1 ? _0x2fbbc6[1] : "0",
              "activitySource": "1",
              "realClient": "ios"
            });else _0x52d59e.includes("signInTaskCode") && $.aidlist.push({
              "type": "21",
              "assignmentId": _0x3299d4[1],
              "activitySource": "1",
              "realClient": "ios"
            });
          }
        } catch {
          $.aidlist = [{
            "type": "20",
            "assignmentId": "27kYktGUgPEPba9Wz82CamK1uG2",
            "scanTaskCodeIndex": "2",
            "activitySource": "1",
            "realClient": "ios"
          }, {
            "type": "20",
            "assignmentId": "3jzTYFSVFaXAkbepHsV2BW94Jjrd",
            "scanTaskCodeIndex": "3",
            "activitySource": "1",
            "realClient": "ios"
          }, {
            "type": "20",
            "assignmentId": "3eBFvXxKVKkLNfZGpDCahBy7MDy5",
            "scanTaskCodeIndex": "4",
            "activitySource": "1",
            "realClient": "ios"
          }, {
            "type": "20",
            "assignmentId": "2opLmUcS5WFVG1og9i8Cg2ND27Sv",
            "scanTaskCodeIndex": "5",
            "activitySource": "1",
            "realClient": "ios"
          }, {
            "type": "20",
            "assignmentId": "44N6QuyCHyb9n6VVr2EHyHKEkEwm",
            "scanTaskCodeIndex": "0",
            "activitySource": "1",
            "realClient": "ios"
          }, {
            "type": "21",
            "assignmentId": "3iEo3dbSZGejXKwjQgLzuEc4sYak",
            "activitySource": "1",
            "realClient": "ios"
          }];
        }
      } catch (_0x23468c) {
        $.logErr(_0x23468c, _0x491449);
      } finally {
        _0x557ee8(_0x157a12);
      }
    });
  });
}
async function _0x1799a5() {
  let _0x3e9b38 = {
      "activitySource": "1"
    },
    _0x3ff5e0 = {
      "appId": "7f9c4",
      "functionId": "videoHbCw_homePage",
      "body": _0x3e9b38,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x3e9b38 = await _0x12c7b2.getbody(_0x3ff5e0);
  if (!_0x3e9b38) return;
  return new Promise(async _0x36e296 => {
    $.dpost(_0x27c27d("videoHbCw_homePage", _0x3e9b38), async (_0x4aa8fd, _0x328f32, _0x361d1b) => {
      try {
        if (_0x4aa8fd) console.log("" + JSON.stringify(_0x4aa8fd)), console.log("videoHbCw_homePage 请求失败，请检查网路重试");else {
          _0x361d1b = JSON.parse(_0x361d1b);
          if (_0x361d1b.code == 0) {
            console.log("现金总计：" + _0x361d1b.data.cashBalanceFloor.amount);
            for (let _0x1cc1a1 of _0x361d1b.data.cwCardFloor.cards.reverse()) {
              if (_0x1cc1a1.topDesc == "已连续来访0天" && _0x1cc1a1.amountStr == 11.88) {
                await _0xe7f605();
              }
              if (_0x1cc1a1.cwStatus == 0 && Number(_0x361d1b.data.cashBalanceFloor.amount) >= _0x1cc1a1.amountStr) {
                console.log("满足提现门槛，去提现 " + _0x1cc1a1.amountStr + "元...");
                await _0x3e34ac(_0x1cc1a1.bizTraceId, _0x1cc1a1.amountStr);
                if ($.txsuc) break;
                await $.wait(3000);
              }
            }
          } else {
            console.log(_0x361d1b.message);
          }
        }
      } catch (_0x5e32bc) {
        $.logErr(_0x5e32bc, _0x328f32);
      } finally {
        _0x36e296(_0x361d1b);
      }
    });
  });
}
async function _0xe7f605() {
  let _0x2d7c85 = {};
  _0x2d7c85 = await _0x54c8e1.getbody("videoHb_newCustomerHbLayer", _0x2d7c85, "12.5.0");
  if (!_0x2d7c85) return;
  let _0x5ee2c8 = {
    "url": "https://api.m.jd.com?functionId=videoHb_newCustomerHbLayer",
    "body": _0x2d7c85,
    "headers": {
      "Host": "api.m.jd.com",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": $.UA,
      "Cookie": _0x1f8ca8
    }
  };
  return new Promise(async _0x1d674b => {
    $.dpost(_0x5ee2c8, async (_0x5a34d0, _0x4814f3, _0x21ded4) => {
      try {
        _0x5a34d0 ? (console.log("" + JSON.stringify(_0x5a34d0)), console.log("videoHb_newCustomerHbLayer 请求失败，请检查网路重试")) : (_0x21ded4 = JSON.parse(_0x21ded4), _0x21ded4.success ? (_0x21ded4.data?.["popAlertInfo"] && console.log("获得新客红包：", _0x21ded4.data.popAlertInfo.hbAmount), $.taskStatus = _0x21ded4.data.layerGoldCoinCapsuleInfo.taskStatus || false) : (console.log(_0x21ded4.message), $.isBan = true));
      } catch (_0x334efa) {
        $.logErr(_0x334efa, _0x4814f3);
      } finally {
        _0x1d674b(_0x21ded4);
      }
    });
  });
}
async function _0x4a9b78() {
  let _0x297254 = {
    "adid": "",
    "emojisChangeStatus": 0,
    "extParam": "",
    "id": "",
    "modeid": "1",
    "monitorSource": "videodetailApp",
    "offset": "3_10",
    "playtype": "163",
    "projectid": "",
    "qaActivityId": "",
    "rec_broker": "",
    "referpageid": "",
    "style": ""
  };
  _0x297254 = await _0x54c8e1.getbody("video_videoDetail", _0x297254);
  if (!_0x297254) return;
  let _0x2b143f = {
    "url": "https://api.m.jd.com?functionId=video_videoDetail",
    "body": _0x297254,
    "headers": {
      "Host": "api.m.jd.com",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "User-Agent": "okhttp/3.12.16;jdmall;android;version/13.0.1;build/99192;",
      "x-referer-package": "com.jingdong.app.mall",
      "x-referer-page": "com.jingdong.app.mall.MainFrameActivity",
      "jdgs": {}
    }
  };
  return new Promise(async _0x65d1f5 => {
    $.dpost(_0x2b143f, async (_0x339316, _0x24a647, _0x16eeb4) => {
      try {
        if (_0x339316) console.log("" + JSON.stringify(_0x339316)), console.log("video_videoDetail 请求失败，请检查网路重试");else {
          _0x16eeb4 = JSON.parse(_0x16eeb4);
          _0x16eeb4.code == 0 ? $.WatchList = _0x16eeb4.list : console.log(_0x16eeb4.message);
        }
      } catch (_0x5d8490) {
        $.logErr(_0x5d8490, _0x24a647);
      } finally {
        _0x65d1f5(_0x16eeb4);
      }
    });
  });
}
async function _0x32f709() {
  let _0x3e6b17 = {},
    _0xb1c8c4 = {
      "appId": "2023f",
      "functionId": "videoHb_sign",
      "body": _0x3e6b17,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x3e6b17 = await _0x12c7b2.getbody(_0xb1c8c4);
  if (!_0x3e6b17) return;
  return new Promise(async _0x414c0c => {
    $.dpost(_0x27c27d("videoHb_sign", _0x3e6b17), async (_0x4f43a5, _0x508c32, _0x45eb55) => {
      try {
        _0x4f43a5 ? (console.log("" + JSON.stringify(_0x4f43a5)), console.log("videoHb_sign 请求失败，请检查网路重试")) : (_0x45eb55 = JSON.parse(_0x45eb55), _0x45eb55.code == 0 ? _0x45eb55.busiCode == 0 ? _0x45eb55.data?.["rewardMsg"]?.["msg"] ? console.log("签到成功：" + _0x45eb55.data.rewardMsg.msg) : console.log(JSON.stringify(_0x45eb55.data)) : console.log("签到失败：" + _0x45eb55.message) : console.log(_0x45eb55.message));
      } catch (_0x4b79f4) {
        $.logErr(_0x4b79f4, _0x508c32);
      } finally {
        _0x414c0c(_0x45eb55);
      }
    });
  });
}
async function _0x3e34ac(_0x1a87c2, _0x4d8601) {
  let _0x1c7291 = "{\"bizTraceId\":\"" + _0x1a87c2 + "\",\"amount\":" + _0x4d8601 + "}",
    _0x371825 = {
      "appId": "c5b74",
      "functionId": "videoHbCw_doCw",
      "body": _0x1c7291,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x1c7291 = await _0x12c7b2.getbody(_0x371825);
  if (!_0x1c7291) return;
  return new Promise(async _0x34d248 => {
    $.dpost(_0x27c27d("videoHbCw_doCw", _0x1c7291), async (_0x43a801, _0x5c1def, _0x3746b8) => {
      try {
        _0x43a801 ? (console.log("" + JSON.stringify(_0x43a801)), console.log("videoHbCw_doCw 请求失败，请检查网路重试")) : (_0x3746b8 = JSON.parse(_0x3746b8), _0x3746b8.success ? (console.log("\n提现到钱包成功 " + _0x4d8601 + "元 💰️"), $.txsuc = true) : console.log(_0x3746b8.message));
      } catch (_0x41dd3a) {
        $.logErr(_0x41dd3a, _0x5c1def);
      } finally {
        _0x34d248(_0x3746b8);
      }
    });
  });
}
async function _0x1ee3bb() {
  let _0x212daa = {
      "activitySource": "1",
      "realClient": "ios"
    },
    _0xe91e7a = {
      "appId": "8c80c",
      "functionId": "videoRedPacketHomePage_exchangeCash",
      "body": _0x212daa,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x212daa = await _0x12c7b2.getbody(_0xe91e7a);
  if (!_0x212daa) return;
  return new Promise(async _0x52b3dc => {
    $.dpost(_0x27c27d("videoRedPacketHomePage_exchangeCash", _0x212daa), async (_0x50b1e6, _0x30d378, _0x1237a5) => {
      try {
        _0x50b1e6 ? (console.log("" + JSON.stringify(_0x50b1e6)), console.log("videoRedPacketHomePage_exchangeCash 请求失败，请检查网路重试")) : (_0x1237a5 = JSON.parse(_0x1237a5), _0x1237a5.code == 0 ? _0x1237a5.busiCode == 0 ? console.log("\n金币兑换现金完成") : console.log(_0x1237a5.message) : console.log(_0x1237a5.message));
      } catch (_0x463682) {
        $.logErr(_0x463682, _0x30d378);
      } finally {
        _0x52b3dc(_0x1237a5);
      }
    });
  });
}
async function _0x47753(_0xa611c2, _0x51dff9) {
  let _0x3e51bc = "{\"type\":\"20\",\"assignmentId\":\"" + _0xa611c2 + "\",\"itemId\":\"" + _0x51dff9 + "\"}",
    _0x241776 = {
      "appId": "12bf2",
      "functionId": "videoRedPacketHomePage_done",
      "body": _0x3e51bc,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x3e51bc = await _0x12c7b2.getbody(_0x241776);
  if (!_0x3e51bc) return;
  return new Promise(async _0x3365f4 => {
    $.dpost(_0x27c27d("videoRedPacketHomePage_done", _0x3e51bc), async (_0x4622aa, _0x5e2dc2, _0x4b1acf) => {
      try {
        if (_0x4622aa) console.log("" + JSON.stringify(_0x4622aa)), console.log("videoRedPacketHomePage_done 请求失败，请检查网路重试");else {
          if (_0x4b1acf.includes("登录")) $.isLogin = false;
          _0x4b1acf = JSON.parse(_0x4b1acf);
          _0x4b1acf.code == 0 ? _0x4b1acf.busiCode == 0 ? console.log(_0x4b1acf.data.rewardMsg) : console.log(_0x4b1acf.message) : console.log(_0x4b1acf.message);
        }
      } catch (_0x3dabaa) {
        $.logErr(_0x3dabaa, _0x5e2dc2);
      } finally {
        _0x3365f4(_0x4b1acf);
      }
    });
  });
}
async function _0x3f4e18(_0x5c2bb2, _0x10499f) {
  let _0x431256 = "{\"type\":\"20\",\"assignmentId\":\"" + _0x5c2bb2 + "\",\"itemId\":\"" + _0x10499f + "\"}",
    _0x2c2909 = {
      "appId": "57a9c",
      "functionId": "videoRedPacketHomePage_accept",
      "body": _0x431256,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x431256 = await _0x12c7b2.getbody(_0x2c2909);
  if (!_0x431256) return;
  return new Promise(async _0x368efa => {
    let _0x41f3f4 = "";
    $.dpost(_0x27c27d("videoRedPacketHomePage_accept", _0x431256), async (_0x58bfdf, _0x52565d, _0xdb7ac9) => {
      try {
        if (_0x58bfdf) {
          console.log("" + JSON.stringify(_0x58bfdf));
          console.log("videoRedPacketHomePage_accept 请求失败，请检查网路重试");
        } else _0xdb7ac9 = JSON.parse(_0xdb7ac9), _0xdb7ac9.success ? _0x41f3f4 = _0xdb7ac9 : console.log(_0xdb7ac9.message);
      } catch (_0x195381) {
        $.logErr(_0x195381, _0x52565d);
      } finally {
        _0x368efa(_0x41f3f4);
      }
    });
  });
}
async function _0x13f593(_0x21df7b) {
  let _0x1da575 = {
      "appId": "d51cc",
      "functionId": "videoRedPacketHomePage_info",
      "body": _0x21df7b,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    },
    _0x382150 = await _0x12c7b2.getbody(_0x1da575);
  if (!_0x382150) return;
  return new Promise(async _0x5685ba => {
    $.dpost(_0x27c27d("videoRedPacketHomePage_info", _0x382150), async (_0x39c027, _0x5da451, _0x4b30b9) => {
      try {
        if (_0x39c027) {
          console.log("" + JSON.stringify(_0x39c027));
          console.log("videoRedPacketHomePage_info 请求失败，请检查网路重试");
        } else {
          _0x4b30b9 = JSON.parse(_0x4b30b9);
          if (_0x4b30b9.code == 0) {
            if (_0x4b30b9.busiCode == 0) $.tasklist = _0x4b30b9.data;else _0x4b30b9.busiCode == 8015 && ($.log("账号火爆"), $.hotflag = true);
          } else console.log(_0x4b30b9.message);
        }
      } catch (_0x5a52d2) {
        $.logErr(_0x5a52d2, _0x5da451);
      } finally {
        _0x5685ba(_0x4b30b9);
      }
    });
  });
}
async function _0x24c406() {
  let _0x5aa9bf = {
      "activitySource": "1",
      "realClient": "ios"
    },
    _0x1b82e7 = {
      "appId": "a3b98",
      "functionId": "videoRedPacketHomePage_queryMoney",
      "body": _0x5aa9bf,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x5aa9bf = await _0x12c7b2.getbody(_0x1b82e7);
  if (!_0x5aa9bf) return;
  return new Promise(async _0x18a59d => {
    $.dpost(_0x27c27d("videoRedPacketHomePage_queryMoney", _0x5aa9bf), async (_0x2ade4e, _0x36cdde, _0x1ac836) => {
      try {
        _0x2ade4e ? (console.log("" + JSON.stringify(_0x2ade4e)), console.log("videoRedPacketHomePage_queryMoney 请求失败，请检查网路重试")) : (_0x1ac836 = JSON.parse(_0x1ac836), _0x1ac836.code == 0 ? (console.log("当前金币：" + _0x1ac836.data.goldCoin + ",当前现金：" + _0x1ac836.data.cash), $.goldCoin = _0x1ac836.data.goldCoin) : console.log(_0x1ac836.message));
      } catch (_0x37891a) {
        $.logErr(_0x37891a, _0x36cdde);
      } finally {
        _0x18a59d(_0x1ac836);
      }
    });
  });
}
function _0x27c27d(_0x1bcf48, _0x3d1852) {
  return {
    "url": "https://api.m.jd.com/" + _0x1bcf48,
    "body": _0x3d1852,
    "headers": {
      "Host": "api.m.jd.com",
      "Origin": "https://pro.m.jd.com",
      "Referer": "https://pro.m.jd.com/mall/active/3jP124DeP3kK9Xj3s3MbxJTpKygp/index.html",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": $.UA,
      "Cookie": _0x1f8ca8,
      "x-referer-page": "https://pro.m.jd.com/mall/active/3jP124DeP3kK9Xj3s3MbxJTpKygp/index.html",
      "x-rp-client": "h5_1.0.0",
      "request-from": "native",
      "Connection": "keep-alive"
    }
  };
}
function _0x1a66b8() {
  return new Promise(_0x557c28 => {
    const _0x4ecafa = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x1f8ca8,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x4ecafa, (_0x26fa02, _0x48bfa1, _0x2e64b6) => {
      try {
        if (_0x2e64b6) {
          _0x2e64b6 = JSON.parse(_0x2e64b6);
          if (_0x2e64b6.islogin === "1") {} else _0x2e64b6.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x5424b9) {
        console.log(_0x5424b9);
      } finally {
        _0x557c28();
      }
    });
  });
}
function _0x10940e() {
  return new Promise(_0x1c24f3 => {
    !_0x77762b ? $.msg($.name, "", "" + _0x5aad1d) : $.log("京东账号" + $.index + $.nickName + "\n" + _0x5aad1d);
    _0x1c24f3();
  });
}
function _0x403b80(_0x277c18) {
  try {
    if (typeof JSON.parse(_0x277c18) == "object") return true;
  } catch (_0x24fc69) {
    return console.log(_0x24fc69), console.log("京东服务器访问数据为空，请检查自身设备网络情况"), false;
  }
}
function _0x5319a3(_0x74bfa5) {
  if (typeof _0x74bfa5 == "string") {
    try {
      return JSON.parse(_0x74bfa5);
    } catch (_0x2c8ed9) {
      return console.log(_0x2c8ed9), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
    }
  }
}