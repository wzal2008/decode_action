//Mon Sep 23 2024 12:16:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const jdCookie = require("./jdCookie"),
  notify = require("./utils/Rebels_sendJDNotify"),
  common = require("./utils/Rebels_jdCommon"),
  {
    H5st
  } = require("./utils/Rebels_H");
let taskThreads = process.env.jd_video__threads || "1";
const runInterval = process.env.jd_video_interval || "1000",
  isNotify = (process.env.jd_video_notify || process.env.jd_video_Notify) === "true",
  pinFilter = (process.env.jd_video_pinFilter || "").split("@"),
  randomApi = process.env.jd_video_signapi || "http://rsign.257999.xyz/rsign",
  maxThreads = 1,
  videotaskbodyvar = [{
    type: "20",
    assignmentId: "27kYktGUgPEPba9Wz82CamK1uG2",
    scanTaskCodeIndex: "2",
    activitySource: "1",
    realClient: "ios"
  }, {
    type: "20",
    assignmentId: "3jzTYFSVFaXAkbepHsV2BW94Jjrd",
    scanTaskCodeIndex: "3",
    activitySource: "1",
    realClient: "ios"
  }, {
    type: "20",
    assignmentId: "44N6QuyCHyb9n6VVr2EHyHKEkEwm",
    scanTaskCodeIndex: "0",
    activitySource: "1",
    realClient: "ios"
  }, {
    type: "21",
    assignmentId: "3iEo3dbSZGejXKwjQgLzuEc4sYak",
    activitySource: "1",
    realClient: "ios"
  }];
let cookiesArr = Object.keys(jdCookie).map(_0x2cae25 => jdCookie[_0x2cae25]).filter(_0x2615c3 => _0x2615c3);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  notify.config({
    title: $.name
  });
  await Main();
  isNotify && notify.getMessage() && (await notify.push());
})().catch(_0x15af3d => $.logErr(_0x15af3d)).finally(() => $.done());
async function Main() {
  try {
    try {
      const _0x38eaf7 = parseInt(taskThreads);
      _0x38eaf7 > 0 && _0x38eaf7 !== 1 && (taskThreads = _0x38eaf7);
    } catch {
      taskThreads = 1;
    }
    taskThreads = Math.min(taskThreads, maxThreads);
    $.waitTime = null;
    if (runInterval) {
      try {
        const _0x578fed = parseInt(runInterval);
        _0x578fed >= 0 && ($.waitTime = _0x578fed);
      } catch {
        console.log("⚠ 自定义运行间隔时长设置错误");
      }
    }
    console.log("==========" + $.name + "变量开启状态==========");
    console.log("活动入口: APP-最下面选项-逛");
    console.log("SIGN服务: [" + (process.env.jd_video_signapi ? "" + process.env.jd_video_signapi : "内置SIGN服务") + "]");
    console.log("间隔时长: [" + $.waitTime / 1000 + "秒]运行间隔时长");
    console.log("代理开关: [" + common.getProxyStatus() + "]");
    console.log("通知推送: [" + (isNotify ? "开启" : "关闭") + "]");
    console.log("账号过滤: [" + pinFilter.join(", ") + "]");
    console.log("==========" + $.name + "变量状态结束==========");
    console.log("");
    if (!randomApi) {
      console.log("⚠ 请先定义SIGN环境变量后再运行脚本！");
      return;
    }
    $.needRemoveCookieIndex = [];
    await common.concTask(taskThreads, cookiesArr, taskFnc);
    $.hasPrintActInfo = false;
    $.runEnd = false;
    $.needRemoveCookieIndex.length > 0 && (cookiesArr = cookiesArr.filter((_0xd147c3, _0x5f2bb7) => !$.needRemoveCookieIndex.includes(_0x5f2bb7 + 1)), $.needRemoveCookieIndex = []);
    const _0x41ea95 = notify.getMessage();
    _0x41ea95 && console.log("\n📣 运行结果\n" + _0x41ea95.replace(/：/g, " ➜ "));
  } catch (_0x5c2dbc) {
    console.log("❌ 脚本运行遇到了错误\n" + _0x5c2dbc);
  }
}
async function taskFnc(_0x23b5d4, _0x2a961d) {
  if ($.runEnd) {
    return {
      runEnd: true
    };
  }
  const _0x2bd4c1 = decodeURIComponent(common.getCookieValue(_0x23b5d4, "pt_pin"));
  function _0x122bcd(_0x33868c, _0x441499) {
    if (_0x33868c.length <= 4) {
      return _0x33868c;
    } else {
      const _0x26cc76 = _0x33868c.slice(0, 2),
        _0x1e2466 = _0x33868c.slice(-2),
        _0x371813 = Math.max(_0x441499 - _0x26cc76.length - _0x1e2466.length, 0),
        _0x14c233 = "*".repeat(_0x371813);
      return _0x26cc76 + _0x14c233 + _0x1e2466;
    }
  }
  const _0x33e20c = decodeURIComponent(_0x2bd4c1),
    _0x2ae6ef = _0x122bcd(_0x33e20c, 6),
    _0x124b68 = "【账号" + _0x2a961d + "】" + _0x2ae6ef + "：",
    _0x58657e = notify.create(_0x2a961d, _0x2bd4c1);
  if (pinFilter.length > 0 && (pinFilter.includes(_0x2bd4c1) || pinFilter.includes(encodeURIComponent(_0x2bd4c1)))) {
    _0x58657e.fix("已设置跳过运行当前账号");
    console.log(_0x58657e.getInlineContent());
    $.needRemoveCookieIndex.push(_0x2a961d);
    return;
  }
  const _0x4f4028 = await common.getLoginStatus(_0x23b5d4);
  if (!_0x4f4028 && typeof _0x4f4028 === "boolean") {
    console.log(_0x124b68 + "账号无效");
    _0x58657e.fix("账号无效");
    $.needRemoveCookieIndex.push(_0x2a961d);
    return;
  }
  const _0x4c822a = common.genUA(_0x2bd4c1);
  let _0x396d17 = false,
    _0xf095d2 = false,
    _0x564319 = false,
    _0x3f60fd = 0,
    _0x54d291,
    _0x406278,
    _0x201b17,
    _0x25f8e8,
    _0x48b563,
    _0x2192b3,
    _0x7da8ba,
    _0x538577;
  _0x54d291 = "";
  await _0x805ac("videoHb_newCustomerHbLayer");
  await $.wait(parseInt($.waitTime * 1 + 500, 10));
  if ($.runEnd || _0x396d17) {
    return;
  }
  if (_0x54d291) {
    let {
      popAlertInfo: _0x3be9c2,
      flipDownInfo: _0x33d095
    } = _0x54d291;
    if (_0x3be9c2) {
      let {
        hbAmount: _0x5b1483,
        defaultPopAlertToast: _0x37bdf3
      } = _0x3be9c2;
      console.log("" + _0x124b68 + _0x37bdf3 + ": " + _0x5b1483 + "元");
    }
    _0x54d291?.["layerGoldCoinCapsuleInfo"]?.["taskStatus"] && (_0xf095d2 = true, console.log(_0x124b68 + "今天已刷完视频"));
    _0x406278 = "";
    await _0x805ac("videoRedPacketHomePage_info");
    await $.wait(parseInt($.waitTime * 1 + 500, 10));
    if (_0x406278) {
      for (let _0x5bb6da of _0x406278 || []) {
        _0x25f8e8 = _0x5bb6da;
        if (_0x25f8e8.title && _0x25f8e8.title.includes("签到")) {
          console.log(_0x124b68 + "正在做任务：" + _0x25f8e8.title);
          _0x25f8e8.status === "0" ? (await _0x805ac("videoHb_sign"), await $.wait(parseInt($.waitTime * 1 + 500, 10))) : console.log(_0x124b68 + "签到已完成：您今天已完成签到，请明日再来");
        } else {
          switch (_0x25f8e8.status) {
            case "0":
              {
                _0x3f60fd = Math.max(_0x3f60fd, parseInt(_0x25f8e8.waitDuration));
                await _0x805ac("videoRedPacketHomePage_accept");
                _0x3f60fd > 0 && (console.log(_0x124b68 + "执行等待时间来完成任务"), await $.wait(parseInt(_0x3f60fd * 1000 + 500, 10)), await _0x805ac("videoRedPacketHomePage_done"), await $.wait(parseInt($.waitTime * 1 + 500, 10)));
                break;
              }
            case "1":
              {
                await _0x805ac("videoRedPacketHomePage_done");
                await $.wait(parseInt($.waitTime * 1 + 500, 10));
                break;
              }
            case "2":
              {
                break;
              }
            default:
              {
                console.log(_0x124b68 + "未知任务[" + _0x25f8e8.assignmentName + "]状态[" + _0x25f8e8.status + "]");
                break;
              }
          }
        }
      }
    }
    await _0x805ac("videoRedPacketHomePage_queryMoney");
    await $.wait(parseInt($.waitTime * 1 + 500, 10));
    _0x538577 > 1000 ? (await _0x805ac("videoRedPacketHomePage_exchangeCash"), await $.wait(parseInt($.waitTime * 1 + 500, 10))) : console.log(_0x124b68 + "还需" + (1000 - _0x538577) + "个金币可以兑换现金");
    _0x201b17 = "";
    await _0x805ac("videoHbCw_homePage");
    await $.wait(parseInt($.waitTime * 1 + 500, 10));
    if (_0x201b17) {
      _0x2192b3 = parseFloat(_0x201b17?.["cashBalanceFloor"]?.["amount"] || 0);
      let _0x408fbb = _0x201b17?.["cwCardFloor"]?.["cards"] || [];
      _0x408fbb = _0x408fbb.filter(_0x484688 => _0x484688.cwStatus === 0 && parseFloat(_0x484688.amountStr) <= _0x2192b3).sort(function (_0x2867e1, _0x15392d) {
        return parseFloat(_0x15392d.amountStr) - parseFloat(_0x2867e1.amountStr);
      });
      for (let _0x9e3992 of _0x408fbb) {
        if (_0x564319) {
          break;
        }
        _0x48b563 = _0x9e3992;
        await _0x805ac("videoHbCw_doCw");
        await $.wait(parseInt($.waitTime * 1 + 3500, 10));
      }
    }
  }
  if ($.runEnd) {
    return {
      runEnd: true
    };
  }
  await $.wait(parseInt($.waitTime * 1 + 500, 10));
  async function _0x282c49(_0x229048, _0x18b345) {
    try {
      let _0x39642c;
      switch (_0x229048) {
        case "videoHb_newCustomerHbLayer":
          _0x18b345.code === "0" ? _0x18b345.busiCode === "0" ? _0x54d291 = _0x18b345.data : (_0x39642c = common.getErrorMsg(_0x18b345), ["降级"].some(_0x3b165b => _0x39642c.includes(_0x3b165b)) ? console.log(_0x124b68 + "逛视频首页失败[" + _0x18b345.busiCode + "]：需更换SIGN服务或使用内置SIGN服务") : console.log(_0x124b68 + "逛视频首页失败[" + _0x18b345.busiCode + "]：" + _0x39642c), _0x396d17 = true) : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "逛视频首页失败[" + _0x18b345.code + "]：" + _0x39642c), _0x396d17 = true);
          break;
        case "videoHb_sign":
          _0x18b345.code === "0" ? _0x18b345.busiCode === "0" ? (_0x39642c = _0x18b345?.["data"]?.["rewardMsg"]?.["msg"]?.["match"](/(余额到账[\d\.]+[元]*)/)?.[1] || "", console.log(_0x124b68 + "签到成功: " + _0x39642c)) : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "签到失败[" + _0x18b345.busiCode + "]：" + _0x39642c)) : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "签到失败[" + _0x18b345.code + "]：" + _0x39642c));
          break;
        case "videoRedPacketHomePage_info":
          _0x18b345.code === "0" ? _0x18b345.busiCode === "0" ? _0x406278 = _0x18b345.data : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "任务列表失败[" + _0x18b345.busiCode + "]：" + _0x39642c)) : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "任务列表失败[" + _0x18b345.code + "]：" + _0x39642c));
          break;
        case "videoRedPacketHomePage_accept":
          _0x18b345.code === "0" ? _0x18b345.busiCode === "0" ? console.log(_0x124b68 + "开始任务[" + _0x25f8e8.assignmentName + "]成功") : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "开始任务[" + _0x25f8e8.assignmentName + "]失败[" + _0x18b345.busiCode + "]：" + _0x39642c)) : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "开始任务[" + _0x25f8e8.assignmentName + "]失败[" + _0x18b345.code + "]：" + _0x39642c));
          break;
        case "videoRedPacketHomePage_done":
          if (_0x18b345.code === "0") {
            if (_0x18b345.busiCode === "0") {
              let {
                rewardMsg: _0x49ce21
              } = _0x18b345?.["data"];
              console.log(_0x124b68 + "完成任务[" + _0x25f8e8.assignmentName + "]成功: " + _0x49ce21);
            } else {
              _0x39642c = common.getErrorMsg(_0x18b345);
              console.log(_0x124b68 + "完成任务[" + _0x25f8e8.assignmentName + "]失败[" + _0x18b345.busiCode + "]：" + _0x39642c);
            }
          } else {
            _0x39642c = common.getErrorMsg(_0x18b345);
            console.log(_0x124b68 + "完成任务[" + _0x25f8e8.assignmentName + "]失败[" + _0x18b345.code + "]：" + _0x39642c);
          }
          break;
        case "videoRedPacketHomePage_exchangeCash":
          _0x18b345.code === "0" ? _0x18b345.busiCode === "0" ? console.log(_0x124b68 + "兑换现金成功，满足提现将会去提现") : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "兑换现金失败[" + _0x18b345.busiCode + "]：" + _0x39642c)) : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "兑换现金失败失败[" + _0x18b345.code + "]：" + _0x39642c));
          break;
        case "videoHbCw_homePage":
          _0x18b345.code === "0" ? _0x18b345.busiCode === "0" ? _0x201b17 = _0x18b345.data : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "现金查询失败[" + _0x18b345.busiCode + "]：" + _0x39642c)) : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "现金查询失败[" + _0x18b345.code + "]：" + _0x39642c));
          break;
        case "videoHbCw_doCw":
          _0x18b345.code === "0" ? _0x18b345.busiCode === "0" ? (_0x2192b3 -= parseFloat(_0x18b345?.["data"]?.["amount"]), console.log(_0x124b68 + "成功提现[" + _0x18b345?.["data"]?.["amount"] + "元],请在APP-我的-钱包中查看")) : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "提现失败[" + _0x18b345.busiCode + "]：" + _0x39642c), _0x39642c?.["includes"]("此次提现失败") && (_0x564319 = true)) : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "提现失败[" + _0x18b345.code + "]：" + _0x39642c));
          break;
        case "videoRedPacketHomePage_queryMoney":
          _0x18b345.code === "0" ? _0x18b345.busiCode === "0" ? (_0x7da8ba = _0x18b345?.["data"]?.["cash"] || 0, _0x538577 = _0x18b345?.["data"]?.["goldCoin"] || 0, console.log(_0x124b68 + "我的现金余额: " + _0x7da8ba + "元，金币余额: " + _0x538577 + "金币"), _0x58657e.insert("我的现金余额: " + _0x18b345?.["data"]?.["cash"] + "元，金币余额: " + _0x18b345?.["data"]?.["goldCoin"] + "金币")) : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "查询余额失败[" + _0x18b345.busiCode + "]：" + _0x39642c)) : (_0x39642c = common.getErrorMsg(_0x18b345), console.log(_0x124b68 + "查询余额失败[" + _0x18b345.code + "]：" + _0x39642c));
          break;
      }
    } catch (_0x1f726a) {
      console.log("❌ 未能正确处理 " + _0x229048 + " 请求响应 " + (_0x1f726a.message || _0x1f726a));
    }
  }
  async function _0x805ac(_0x3b193d) {
    if ($.runEnd) {
      return;
    }
    let _0x4f1d3b = "",
      _0x4b91c8 = null,
      _0x1bed01 = null,
      _0x5f347b = "POST",
      _0x5a4be6 = {},
      _0x164988 = {},
      _0x4abd95 = {};
    switch (_0x3b193d) {
      case "videoHb_newCustomerHbLayer":
        _0x4f1d3b = "https://api.m.jd.com/client.action";
        _0x5a4be6 = {};
        _0x1bed01 = {
          functionId: "videoHb_newCustomerHbLayer"
        };
        _0x4b91c8 = common.queryStringToObject(await getSign("videoHb_newCustomerHbLayer", _0x5a4be6));
        break;
      case "videoHb_sign":
        _0x4abd95 = {
          appId: "2023f",
          functionId: "videoHb_sign",
          appid: "video-redbag-h5",
          clientVersion: common.getLatestAppVersion(),
          client: "wh5",
          body: {},
          version: "4.7",
          ua: _0x4c822a,
          t: true
        };
        _0x164988 = await H5st.getH5st(_0x4abd95);
        _0x4f1d3b = "https://api.m.jd.com/";
        _0x4b91c8 = _0x164988.paramsData;
        break;
      case "videoRedPacketHomePage_info":
        _0x4abd95 = {
          appId: "d51cc",
          functionId: "videoRedPacketHomePage_info",
          appid: "video-redbag-h5",
          clientVersion: common.getLatestAppVersion(),
          client: "wh5",
          body: videotaskbodyvar,
          version: "4.7",
          ua: _0x4c822a,
          t: true
        };
        _0x164988 = await H5st.getH5st(_0x4abd95);
        _0x4f1d3b = "https://api.m.jd.com/";
        _0x4b91c8 = _0x164988.paramsData;
        break;
      case "videoRedPacketHomePage_accept":
        _0x4abd95 = {
          appId: "57a9c",
          functionId: "videoRedPacketHomePage_accept",
          appid: "video-redbag-h5",
          clientVersion: common.getLatestAppVersion(),
          client: "wh5",
          body: {
            type: "20",
            assignmentId: _0x25f8e8.assignmentId,
            itemId: _0x25f8e8.itemId
          },
          version: "4.7",
          ua: _0x4c822a,
          t: true
        };
        _0x164988 = await H5st.getH5st(_0x4abd95);
        _0x4f1d3b = "https://api.m.jd.com/";
        _0x4b91c8 = _0x164988.paramsData;
        break;
      case "videoRedPacketHomePage_done":
        _0x4abd95 = {
          appId: "12bf2",
          functionId: "videoRedPacketHomePage_done",
          appid: "video-redbag-h5",
          clientVersion: common.getLatestAppVersion(),
          client: "wh5",
          body: {
            type: "20",
            assignmentId: _0x25f8e8.assignmentId,
            itemId: _0x25f8e8.itemId
          },
          version: "4.7",
          ua: _0x4c822a,
          t: true
        };
        _0x164988 = await H5st.getH5st(_0x4abd95);
        _0x4f1d3b = "https://api.m.jd.com/";
        _0x4b91c8 = _0x164988.paramsData;
        break;
      case "videoRedPacketHomePage_exchangeCash":
        _0x4abd95 = {
          appId: "8c80c",
          functionId: "videoRedPacketHomePage_exchangeCash",
          appid: "video-redbag-h5",
          clientVersion: common.getLatestAppVersion(),
          client: "wh5",
          body: {},
          version: "4.7",
          ua: _0x4c822a,
          t: true
        };
        _0x164988 = await H5st.getH5st(_0x4abd95);
        _0x4f1d3b = "https://api.m.jd.com/";
        _0x4b91c8 = _0x164988.paramsData;
        break;
      case "videoHbCw_homePage":
        _0x4abd95 = {
          appId: "7f9c4",
          functionId: "videoHbCw_homePage",
          appid: "video-redbag-h5",
          clientVersion: common.getLatestAppVersion(),
          client: "wh5",
          body: {},
          version: "4.7",
          ua: _0x4c822a,
          t: true
        };
        _0x164988 = await H5st.getH5st(_0x4abd95);
        _0x4f1d3b = "https://api.m.jd.com/";
        _0x4b91c8 = _0x164988.paramsData;
        break;
      case "videoHbCw_doCw":
        _0x4abd95 = {
          appId: "7f9c4",
          functionId: "videoHbCw_doCw",
          appid: "video-redbag-h5",
          clientVersion: common.getLatestAppVersion(),
          client: "wh5",
          body: {
            bizTraceId: _0x48b563.bizTraceId,
            amount: _0x48b563.amountStr
          },
          version: "4.7",
          ua: _0x4c822a,
          t: true
        };
        _0x164988 = await H5st.getH5st(_0x4abd95);
        _0x4f1d3b = "https://api.m.jd.com/";
        _0x4b91c8 = _0x164988.paramsData;
        break;
      case "videoRedPacketHomePage_queryMoney":
        _0x4abd95 = {
          appId: "a3b98",
          functionId: "videoRedPacketHomePage_queryMoney",
          appid: "video-redbag-h5",
          clientVersion: common.getLatestAppVersion(),
          client: "wh5",
          body: {
            activitySource: "1",
            realClient: "ios"
          },
          version: "4.7",
          ua: _0x4c822a,
          t: true
        };
        _0x164988 = await H5st.getH5st(_0x4abd95);
        _0x4f1d3b = "https://api.m.jd.com/";
        _0x4b91c8 = _0x164988.paramsData;
        break;
      default:
        console.log("❌ 未知请求 " + _0x3b193d);
        return;
    }
    const _0x2596ac = {};
    _0x4b91c8 && Object.assign(_0x4b91c8, _0x2596ac);
    _0x1bed01 && Object.assign(_0x1bed01, _0x2596ac);
    const _0x8cbc0c = {
      url: _0x4f1d3b,
      method: _0x5f347b,
      headers: {
        origin: "https://prodev.m.jd.com",
        Referer: "https://pro.m.jd.com/mall/active/8WYa8CGWvkB5b3EC9TcyAbAobeo/index.html",
        "User-Agent": _0x4c822a,
        Cookie: _0x23b5d4,
        "content-type": "application/x-www-form-urlencoded",
        accept: "application/json, text/plain, */*"
      },
      params: _0x1bed01,
      data: _0x4b91c8,
      timeout: 30000
    };
    _0x5f347b === "GET" && (delete _0x8cbc0c.data, delete _0x8cbc0c.headers["Content-Type"]);
    const _0x1469f1 = 1;
    let _0x4d5487 = 0,
      _0x237318 = null;
    while (_0x4d5487 < _0x1469f1) {
      _0x4d5487 > 0 && (await $.wait(1000));
      const _0x4049bb = await common.request(_0x8cbc0c);
      if (!_0x4049bb.success) {
        _0x237318 = "🚫 " + _0x3b193d + " 请求失败 ➜ " + _0x4049bb.error;
        _0x4d5487++;
        continue;
      }
      if (!_0x4049bb.data) {
        _0x237318 = "🚫 " + _0x3b193d + " 请求失败 ➜ 无响应数据";
        _0x4d5487++;
        continue;
      }
      await _0x282c49(_0x3b193d, _0x4049bb.data);
      break;
    }
    _0x4d5487 >= _0x1469f1 && console.log(_0x237318);
  }
}
async function getSign(_0x33bf57, _0x890277) {
  const _0x2f8356 = await common.request({
      url: randomApi,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fn: _0x33bf57,
        body: _0x890277
      }),
      proxy: null,
      debug: false,
      timeout: 30000
    }),
    _0x1c6048 = _0x2f8356.data;
  if (_0x1c6048 && _0x1c6048.body) {
    return _0x1c6048.body;
  } else {
    console.error("未获取到数据，检测网络是否正常");
  }
}