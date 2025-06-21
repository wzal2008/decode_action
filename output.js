//Sat Jun 21 2025 23:40:32 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0xddb380 = _0x246477("快手极速版-低保版");
let _0x9172fd = (_0xddb380.isNode() ? process.env.ksjsb : _0xddb380.getdata("ksjsb")) || "",
  _0x3de4e5 = (_0xddb380.isNode() ? process.env.kstoken : _0xddb380.getdata("kstoken")) || "2SdgGTR9skFsVsHK2Ta7pl8u6wx",
  _0x18f39f = (_0xddb380.isNode() ? process.env.sigurl : _0xddb380.getdata("sigurl")) || "http://8.130.93.189:9002/ks/getAll",
  _0x3ec7be = [],
  _0x3d7e60 = [],
  _0x3bfb72 = "V3.0";
!(async () => {
  await _0x238faf();
  console.log("当前运行版本:" + version + "  最新版本:" + _0x3bfb72);
  if (!_0x3de4e5) {
    {
      console.log("请填写kstoken");
      return;
    }
  }
  await _0x4a6144(_0x3de4e5);
  if (!(await _0x59c623())) {
    return;
  } else {
    console.log("共找到" + _0x3ec7be.length + "个账号");
    console.log("========= 获取账号信息 =========");
    for (let _0x3925b4 = 0; _0x3925b4 < _0x3ec7be.length; _0x3925b4++) {
      _0xddb380.index = _0x3925b4 + 1;
      let _0x5bcbc4 = _0x3ec7be[_0x3925b4],
        _0x23a668 = _0x5bcbc4.split("@");
      if (_0x23a668[0] && _0x23a668[1]) _0xddb380.cookie = _0x23a668[1], await _0x2b5e0f(), await _0x5a605e(false), _0xddb380.nickname = _0x3d7e60.push(_0xddb380.nickname);else {
        console.log("第[" + _0xddb380.index + "]个账号cookie格式错误,请检查后重新运行");
        return;
      }
    }
    for (let _0x6e4012 = 0; _0x6e4012 < _0x3ec7be.length; _0x6e4012++) {
      _0xddb380.index = _0x6e4012 + 1;
      let _0x1d68f0 = _0x3ec7be[_0x6e4012],
        _0x17a523 = _0x1d68f0.split("@");
      if (_0x17a523[0] && _0x17a523[1]) {
        {
          _0xddb380.salt = _0x17a523[0];
          _0xddb380.cookie = _0x17a523[1];
          let _0x5e7140 = JSON.parse("{\"" + _0x17a523[1].replace(/"/g, "\\\"").replace(/; /g, "\",\"").replace(/&/g, "\",\"").replace(/=/g, "\":\"") + "\"}");
          var _0x4bea4b = /\((.+?)\)/g;
          _0xddb380.mod = _0x5e7140.mod;
          _0xddb380.modS = _0x4bea4b.exec(decodeURIComponent(_0xddb380.mod))[1];
          _0xddb380.kcv = _0x5e7140.kcv;
          _0xddb380.androidApiLevel = _0x5e7140.androidApiLevel;
          _0xddb380.android_os = _0x5e7140.android_os;
          _0xddb380.boardPlatform = _0x5e7140.boardPlatform;
          _0xddb380.newOc = _0x5e7140.newOc;
          _0xddb380.nbh = _0x5e7140.nbh;
          _0xddb380.did_gt = _0x5e7140.did_gt;
          _0xddb380.sys = _0x5e7140.sys;
          _0xddb380.max_memory = _0x5e7140.max_memory;
          _0xddb380.cold_launch_time_ms = _0x5e7140.cold_launch_time_ms;
          _0xddb380.oc = _0x5e7140.oc;
          _0xddb380.sh = _0x5e7140.sh;
          _0xddb380.socName = _0x5e7140.socName;
          _0xddb380.c = _0x5e7140.c;
          _0xddb380.sw = _0x5e7140.sw;
          _0xddb380.totalMemory = _0x5e7140.totalMemory;
          _0xddb380.apist = _0x5e7140["kuaishou.api_st"];
          _0xddb380.did = _0x5e7140.did;
          _0xddb380.nickname = _0x3d7e60[_0x6e4012];
          console.log("=========账号" + _0xddb380.index + "[" + _0xddb380.nickname + "]=========");
          console.log("账号[" + _0xddb380.nickname + "]" + _0xddb380.salt);
          await _0x3ff0d7();
        }
      } else {
        {
          console.log("第[" + _0xddb380.index + "]个账号cookie格式错误,请检查后重新运行");
          return;
        }
      }
    }
    console.log("============ 账号信息 ============");
    for (let _0xb43fa7 = 0; _0xb43fa7 < _0x3ec7be.length; _0xb43fa7++) {
      {
        _0xddb380.index = _0xb43fa7 + 1;
        let _0x5bbb24 = _0x3ec7be[_0xb43fa7],
          _0x5afdfa = _0x5bbb24.split("@");
        if (_0x5afdfa[1]) _0xddb380.cookie = _0x5afdfa[1], await _0x5a605e(true), _0xddb380.nickname = _0x3d7e60.push(_0xddb380.nickname);else {
          console.log("第[" + _0xddb380.index + "]个账号cookie格式错误,请检查后重新运行");
          return;
        }
      }
    }
  }
})().catch(_0x228a72 => {
  _0xddb380.log("", "❌ " + _0xddb380.name + ", 失败! 原因: " + _0x228a72 + "!", "");
}).finally(() => {
  _0xddb380.done();
});
async function _0x4a6144(_0x149c11, _0x1b20d8 = 3000) {
  return new Promise(_0x486040 => {
    {
      let _0x2fed5a = {
        "url": "http://8.130.130.146:666/v1/api/check/cdk",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify({
          "cdk": _0x149c11
        })
      };
      _0xddb380.post(_0x2fed5a, async (_0x1ec221, _0x19d3e0, _0x131233) => {
        {
          !_0x131233 && (console.log("❌连接服务器失败,请联系发卡商!"), process.exit(0));
          try {
            _0x131233 = JSON.parse(_0x131233);
            _0x131233.code == 2000 && (console.log(_0x131233.data), _0x131233.data == "" && (console.log("❌卡密不存在,请联系发卡商!"), process.exit(0)), _0x131233.data == "您CDK使用次数已耗尽" && (console.log("❌卡密次数不足,请联系发卡商!"), process.exit(0)));
          } catch (_0x2c1e88) {
            _0xddb380.logErr(_0x2c1e88, _0x19d3e0);
          } finally {
            _0x486040();
          }
        }
      }, _0x1b20d8);
    }
  });
}
async function _0x130559(_0x306405, _0x55d34f = 3000) {
  return new Promise(_0x1c2dd8 => {
    {
      let _0x34a059 = {
        "url": "http://8.130.130.146:666/v1/api/env/add",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": "{\"serverID\":1,\"envName\":\"ks\",\"envData\":\"" + _0x10e48b(0, 999999) + "\",\"envRemarks\":\"\",\"envCDK\":\"" + _0x306405 + "\"}"
      };
      _0xddb380.post(_0x34a059, async (_0x52b2d6, _0x368979, _0x1efe79) => {
        !_0x1efe79 && (console.log("❌连接服务器失败,请联系发卡商!"), process.exit(0));
        try {
          _0x1efe79 = JSON.parse(_0x1efe79);
          if (_0x1efe79.code == 5024) {
            return;
          }
          if (_0x1efe79.code == 2000) {
            return;
          } else console.log("❌卡密次数不足,请联系发卡商!"), console.log(_0x1efe79.msg), process.exit(0);
        } catch (_0x57f1c3) {
          _0xddb380.logErr(_0x57f1c3, _0x368979);
        } finally {
          _0x1c2dd8();
        }
      }, _0x55d34f);
    }
  });
}
async function _0x238faf(_0x3aa1a2 = 3000) {
  return new Promise(_0x218b5d => {
    const _0x36b700 = {
      "url": "http://8.130.130.146:666/v1/api/set/setting?key=webTitle",
      "headers": {
        "Connection": "keep-alive"
      }
    };
    _0xddb380.get(_0x36b700, async (_0x346855, _0x4d42f3, _0x5a8091) => {
      !_0x5a8091 && (console.log("❌获取版本号失败,请联系作者!"), process.exit(0));
      try {
        _0x5a8091 = JSON.parse(_0x5a8091);
        version = _0x5a8091.data.value;
      } catch (_0x1c9600) {
        _0xddb380.logErr(_0x1c9600, _0x4d42f3);
      } finally {
        _0x218b5d();
      }
    }, _0x3aa1a2);
  });
}
async function _0x2b5e0f(_0x46236e = 3000) {
  return new Promise(_0x4ed096 => {
    let _0x3ea04e = {
      "url": "https://csc.m.kuaishou.com/rest/csc/center/tool/withdraw-risk/status",
      "headers": {
        "Accept-Encoding": "gzip, deflate",
        "Cookie": _0xddb380.cookie,
        "Connection": "keep-alive",
        "Accept": "*/*",
        "Accept-Language": "en-us",
        "User-Agent": "Kwai-android aegon/3.4.0",
        "Content-Type": "application/json"
      },
      "body": "{\"withdrawAppealType\":1,\"channel\":20}"
    };
    _0xddb380.post(_0x3ea04e, async (_0x507e28, _0x468ad4, _0x51a360) => {
      try {
        _0x51a360 = JSON.parse(_0x51a360);
        _0x51a360.result == 1 ? _0x51a360.data.reply == "暂时无违规内容，可以点击下方按钮直接进行提现，具体行为准则可见<a href='https://ppg.m.etoote.com/doodle/QNILxtCw.html'>【极速版活动规则】</a>。" ? _0x573a21 = ",账号提现状态:正常" : _0x573a21 = ",账号提现状态:未知" : _0x573a21 = ",账号提现状态:服务繁忙";
      } catch (_0x326aca) {
        _0xddb380.logErr(_0x326aca, _0x468ad4);
      } finally {
        _0x4ed096();
      }
    }, _0x46236e);
  });
}
async function _0x5a605e(_0x4563fa, _0x416139 = 3000) {
  return new Promise(_0x139d5a => {
    {
      const _0x1707eb = {
        "url": "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo",
        "headers": {
          "Accept-Encoding": "gzip, deflate",
          "Cookie": _0xddb380.cookie,
          "Connection": "keep-alive",
          "Accept": "*/*",
          "Host": "nebula.kuaishou.com",
          "Accept-Language": "en-us",
          "User-Agent": "Kwai-android aegon/3.4.0"
        }
      };
      _0xddb380.get(_0x1707eb, async (_0x402abf, _0x4801d9, _0x360fb5) => {
        try {
          _0x360fb5 = JSON.parse(_0x360fb5);
          _0x360fb5.result == 1 && (_0xddb380.nickname = _0x360fb5.data.userData.nickname, _0x4563fa == true ? console.log("账号[" + _0x360fb5.data.userData.nickname + "]账户余额" + _0x360fb5.data.totalCash + "元," + _0x360fb5.data.totalCoin + "金币") : console.log("账号[*]账户余额" + _0x360fb5.data.totalCash + "元," + _0x360fb5.data.totalCoin + "金币" + _0x573a21));
        } catch (_0x201187) {
          _0xddb380.logErr(_0x201187, _0x4801d9);
        } finally {
          _0x139d5a();
        }
      }, _0x416139);
    }
  });
}
async function _0x3ff0d7() {
  console.log("账号[" + _0xddb380.nickname + "]当前使用" + _0xddb380.did.match(/ANDROID_([\w\-]+)/)[1] + ",开始执行任务");
  await _0x36e55e();
  _0x2242a6 == false && _0x2242a7 == false && console.log("账号[" + _0xddb380.nickname + "]任务已全部完成,跳过执行此账号");
}
async function _0x36e55e(_0x3c93f2 = 3000) {
  _0x2242a6 = "";
  _0x2242a7 = "";
  return new Promise(_0x36a356 => {
    {
      const _0xb17b8e = {
        "url": "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/tasks?addressBookAccessStatus=true&pushNotificationStatus=false",
        "headers": {
          "Accept-Encoding": "gzip, deflate",
          "Cookie": _0xddb380.cookie,
          "Connection": "keep-alive",
          "Accept": "*/*",
          "Host": "nebula.kuaishou.com",
          "Accept-Language": "en-us",
          "User-Agent": "Kwai-android aegon/3.4.0"
        }
      };
      _0xddb380.get(_0xb17b8e, async (_0x4687a3, _0x4e5334, _0x580907) => {
        try {
          _0x580907 = JSON.parse(_0x580907);
          if (_0x580907.result == 1) for (let _0x5d6242 = 0; _0x5d6242 < _0x580907.data.dailyTasks.length; _0x5d6242++) {
            if (_0x580907.data.dailyTasks[_0x5d6242].id == 34) {
              _0x2242a6 = true;
              console.log("账号[" + _0xddb380.nickname + "]任务[" + _0x580907.data.dailyTasks[_0x5d6242].name + "]完成情况" + _0x580907.data.dailyTasks[_0x5d6242].completedStages + "/" + _0x580907.data.dailyTasks[_0x5d6242].stages);
              if (_0x580907.data.dailyTasks[_0x5d6242].completedStages < _0x580907.data.dailyTasks[_0x5d6242].stages) {
                await _0x18d7aa("75");
                if (_0x580907.data.dailyTasks[_0x5d6242].stages > 10) for (let _0x30cb1b = 0; _0x30cb1b < 2; _0x30cb1b++) {
                  await _0xddb380.wait(10000);
                  await _0x18d7aa("75");
                }
              } else _0x2242a6 = false;
            }
            _0x580907.data.dailyTasks[_0x5d6242].id == 17 && (_0x2242a7 = true, console.log("账号[" + _0xddb380.nickname + "]任务[" + _0x580907.data.dailyTasks[_0x5d6242].name + "]完成情况" + _0x580907.data.dailyTasks[_0x5d6242].completedStages + "/" + _0x580907.data.dailyTasks[_0x5d6242].stages), _0x580907.data.dailyTasks[_0x5d6242].completedStages < _0x580907.data.dailyTasks[_0x5d6242].stages ? await _0x1a9a40("shipin") : _0x2242a7 = false);
            _0x580907.data.dailyTasks[_0x5d6242].id == 20006 && console.log("账号[" + _0xddb380.nickname + "]任务[" + _0x580907.data.dailyTasks[_0x5d6242].name + "]完成情况" + _0x580907.data.dailyTasks[_0x5d6242].completedStages + "/" + _0x580907.data.dailyTasks[_0x5d6242].stages);
          } else console.log("账号[" + _0xddb380.nickname + "]任务刷新失败,跳过执行此账号");
        } catch (_0x22a5d7) {
          _0xddb380.logErr(_0x22a5d7, _0x4e5334);
        } finally {
          _0x36a356();
        }
      }, _0x3c93f2);
    }
  });
}
async function _0x59c623() {
  if (_0x9172fd) _0x9172fd.indexOf("&") != -1 ? _0x9172fd.split("&").forEach(_0x410755 => {
    _0x410755 && _0x3ec7be.push(("" + _0x410755).replace(/#/g, "@"));
  }) : _0x9172fd.indexOf("\n") != -1 ? _0x9172fd.split("\n").forEach(_0x5276ee => {
    _0x5276ee && _0x3ec7be.push(("" + _0x5276ee).replace(/#/g, "@"));
  }) : _0x9172fd && _0x3ec7be.push(("" + _0x9172fd).replace(/#/g, "@"));else {
    console.log("\n 【" + _0xddb380.name + "】：未填写变量 ksjsb");
    return;
  }
  return true;
}
async function _0x1a9a40(_0x1c274c, _0x285b07 = 3000) {
  let _0xbb26af = Math.round(new Date().getTime()).toString(),
    _0x2eed11 = "",
    _0x29198c = "";
  if (_0x1c274c == "box1") {
    {
      _0x29198c = "https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=" + _0xddb380.mod + "&appver=9.11.10.2507&isp=&language=zh-cn&ud=&did_tag=7&net=WIFI&kcv=" + _0xddb380.kcv + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + _0xddb380.did + "&android_os=1&boardPlatform=" + _0xddb380.boardPlatform + "&kpn=NEBULA&androidApiLevel=" + _0xddb380.androidApiLevel + "&newOc=" + _0xddb380.c + "&slh=0&country_code=cn&nbh=" + _0xddb380.nbh + "&hotfix_ver=&did_gt=" + _0xddb380.did_gt + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + _0xddb380.sys + "&max_memory=" + _0xddb380.max_memory + "&cold_launch_time_ms=" + _0xddb380.cold_launch_time_ms + "&oc=" + _0xddb380.c + "&sh=" + _0xddb380.sh + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + _0xddb380.socName + "&is_background=0&c=" + _0xddb380.c + "&sw=" + _0xddb380.sw + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + _0xddb380.totalMemory + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + _0xddb380.did + "&sbh=72&darkMode=false&did=" + _0xddb380.did;
      let _0x4a1971 = "";
      _0x4a1971 = "{\"creativeId\":" + _0x10e48b(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + _0x10e48b(1000553820678945, 8999953820679999) + ",\"taskType\":1}";
      _0x2eed11 = "bizStr={\"endTime\":" + _0xbb26af + ",\"eventValue\":-1,\"rewardList\":[" + _0x4a1971 + "],\"startTime\":" + _0xbb26af + ",\"taskId\":77}";
    }
  } else {
    if (_0x1c274c == "sign") {
      {
        _0x29198c = "https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=" + _0xddb380.mod + "&appver=9.11.10.2507&isp=&language=zh-cn&ud=&did_tag=7&net=WIFI&kcv=" + _0xddb380.kcv + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + _0xddb380.did + "&android_os=1&boardPlatform=" + _0xddb380.boardPlatform + "&kpn=NEBULA&androidApiLevel=" + _0xddb380.androidApiLevel + "&newOc=" + _0xddb380.c + "&slh=0&country_code=cn&nbh=" + _0xddb380.nbh + "&hotfix_ver=&did_gt=" + _0xddb380.did_gt + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + _0xddb380.sys + "&max_memory=" + _0xddb380.max_memory + "&cold_launch_time_ms=" + _0xddb380.cold_launch_time_ms + "&oc=" + _0xddb380.c + "&sh=" + _0xddb380.sh + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + _0xddb380.socName + "&is_background=0&c=" + _0xddb380.c + "&sw=" + _0xddb380.sw + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + _0xddb380.totalMemory + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + _0xddb380.did + "&sbh=72&darkMode=false&did=" + _0xddb380.did;
        let _0x55c806 = "";
        _0x55c806 = "{\"creativeId\":" + _0x10e48b(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + _0x10e48b(1000553820678945, 8999953820679999) + ",\"taskType\":1}";
        _0x2eed11 = "bizStr={\"endTime\":" + _0xbb26af + ",\"eventValue\":136,\"rewardList\":[" + _0x55c806 + "],\"startTime\":" + _0xbb26af + ",\"taskId\":-1}";
      }
    } else {
      if (_0x1c274c == "shipin") {
        _0x29198c = "https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=" + _0xddb380.mod + "&appver=9.11.10.2507&isp=&language=zh-cn&ud=&did_tag=7&net=WIFI&kcv=" + _0xddb380.kcv + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + _0xddb380.did + "&android_os=1&boardPlatform=" + _0xddb380.boardPlatform + "&kpn=NEBULA&androidApiLevel=" + _0xddb380.androidApiLevel + "&newOc=" + _0xddb380.c + "&slh=0&country_code=cn&nbh=" + _0xddb380.nbh + "&hotfix_ver=&did_gt=" + _0xddb380.did_gt + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + _0xddb380.sys + "&max_memory=" + _0xddb380.max_memory + "&cold_launch_time_ms=" + _0xddb380.cold_launch_time_ms + "&oc=" + _0xddb380.c + "&sh=" + _0xddb380.sh + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + _0xddb380.socName + "&is_background=0&c=" + _0xddb380.c + "&sw=" + _0xddb380.sw + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + _0xddb380.totalMemory + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + _0xddb380.did + "&sbh=72&darkMode=false&did=" + _0xddb380.did;
        let _0x4e5394 = "";
        _0x4e5394 = "{\"creativeId\":" + _0x10e48b(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + _0x10e48b(1000553820678945, 8999953820679999) + ",\"taskType\":1},{\"creativeId\":" + _0x10e48b(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + _0x10e48b(1000553820678945, 8999953820679999) + ",\"taskType\":2},{\"creativeId\":" + _0x10e48b(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + _0x10e48b(1000553820678945, 8999953820679999) + ",\"taskType\":3},{\"creativeId\":" + _0x10e48b(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + _0x10e48b(1000553820678945, 8999953820679999) + ",\"taskType\":4},{\"creativeId\":" + _0x10e48b(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + _0x10e48b(1000553820678945, 8999953820679999) + ",\"taskType\":5},{\"creativeId\":" + _0x10e48b(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + _0x10e48b(1000553820678945, 8999953820679999) + ",\"taskType\":6},{\"creativeId\":" + _0x10e48b(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + _0x10e48b(1000553820678945, 8999953820679999) + ",\"taskType\":7},{\"creativeId\":" + _0x10e48b(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + _0x10e48b(1000553820678945, 8999953820679999) + ",\"taskType\":8},{\"creativeId\":" + _0x10e48b(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + _0x10e48b(1000553820678945, 8999953820679999) + ",\"taskType\":9},{\"creativeId\":" + _0x10e48b(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + _0x10e48b(1000553820678945, 8999953820679999) + ",\"taskType\":10}";
        _0x2eed11 = "bizStr={\"endTime\":" + _0xbb26af + ",\"eventValue\":-1,\"rewardList\":[" + _0x4e5394 + "],\"startTime\":" + _0xbb26af + ",\"taskId\":0}";
      } else _0x1c274c == "guangjie" && (_0x29198c = "https://api.e.kuaishou.com/rest/r/reward/task/getActivityReward?mod=" + _0xddb380.mod + "&appver=9.11.10.2507&isp=&language=zh-cn&ud=&did_tag=7&net=WIFI&kcv=" + _0xddb380.kcv + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + _0xddb380.did + "&android_os=1&boardPlatform=" + _0xddb380.boardPlatform + "&kpn=NEBULA&androidApiLevel=" + _0xddb380.androidApiLevel + "&newOc=" + _0xddb380.c + "&slh=0&country_code=cn&nbh=" + _0xddb380.nbh + "&hotfix_ver=&did_gt=" + _0xddb380.did_gt + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + _0xddb380.sys + "&max_memory=" + _0xddb380.max_memory + "&cold_launch_time_ms=" + _0xddb380.cold_launch_time_ms + "&oc=" + _0xddb380.c + "&sh=" + _0xddb380.sh + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + _0xddb380.socName + "&is_background=0&c=" + _0xddb380.c + "&sw=" + _0xddb380.sw + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + _0xddb380.totalMemory + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + _0xddb380.did + "&sbh=72&darkMode=false&did=" + _0xddb380.did, _0x2eed11 = "activityId=148");
    }
  }
  let _0x5cdad1 = "";
  _0x5cdad1 = _0x2eed11 + "&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st=" + _0xddb380.apist + "&uQaTag=2";
  let _0x2277cd = "";
  _0x2277cd = await _0x2f10fb("mod=" + decodeURIComponent(_0xddb380.mod) + "&appver=9.11.10.2507&isp=&language=zh-cn&ud=&did_tag=7&net=WIFI&kcv=" + _0xddb380.kcv + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + _0xddb380.did + "&android_os=1&boardPlatform=" + _0xddb380.boardPlatform + "&kpn=NEBULA&androidApiLevel=" + _0xddb380.androidApiLevel + "&newOc=" + _0xddb380.c + "&slh=0&country_code=cn&nbh=" + _0xddb380.nbh + "&hotfix_ver=&did_gt=" + _0xddb380.did_gt + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + _0xddb380.sys + "&max_memory=" + _0xddb380.max_memory + "&cold_launch_time_ms=" + _0xddb380.cold_launch_time_ms + "&oc=" + _0xddb380.c + "&sh=" + _0xddb380.sh + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + decodeURIComponent(_0xddb380.socName) + "&is_background=0&c=" + _0xddb380.c + "&sw=" + _0xddb380.sw + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + _0xddb380.totalMemory + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + _0xddb380.did + "&sbh=72&darkMode=false&did=" + _0xddb380.did, _0x5cdad1);
  if (_0x1c274c == "guangjie") {
    _0xddb380.sig3 = "";
    await _0x6ec5b4(_0x2277cd, "" + _0xddb380.salt, "/rest/r/reward/task/getActivityReward");
    if (_0xddb380.sig3 == "") for (let _0x338677 = 0; _0x338677 < 50; _0x338677++) {
      console.log("账号[" + _0xddb380.nickname + "]接口Api调用失败,等待10s后重试");
      await _0xddb380.wait(10000);
      await _0x6ec5b4(_0x2277cd, "" + _0xddb380.salt, "/rest/r/reward/task/getActivityReward");
      if (_0xddb380.sig3 != "") {
        break;
      }
    }
    _0xddb380.sig3 == "" && (console.log("账号[" + _0xddb380.nickname + "]接口Api调用失败,请检查接口后重新运行脚本"), process.exit(0));
  } else {
    _0xddb380.sig3 = "";
    await _0x6ec5b4(_0x2277cd, "" + _0xddb380.salt, "/rest/r/ad/nebula/reward");
    if (_0xddb380.sig3 == "") for (let _0x594841 = 0; _0x594841 < 50; _0x594841++) {
      console.log("账号[" + _0xddb380.nickname + "]接口Api调用失败,等待10s后重试");
      await _0xddb380.wait(10000);
      await _0x6ec5b4(_0x2277cd, "" + _0xddb380.salt, "/rest/r/reward/task/getActivityReward");
      if (_0xddb380.sig3 != "") break;
    }
    _0xddb380.sig3 == "" && (console.log("账号[" + _0xddb380.nickname + "]接口Api调用失败,请检查接口后重新运行脚本"), process.exit(0));
  }
  _0x29198c = _0x29198c + "&sig=" + _0xddb380.sig + "&__NS_sig3=" + _0xddb380.sig3 + "&__NStokensig=" + _0xddb380.tokensig;
  const _0x290289 = {
      "Host": "api.e.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "kwai-android aegon/3.4.2",
      "Accept-Language": "zh-cn",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "gzip, deflate, br",
      "X-Client-Info": "model=" + _0xddb380.modS + ";os=Android;nqe-score=38;network=WIFI;signal-strength=4"
    },
    _0x213408 = {
      "url": _0x29198c,
      "body": _0x5cdad1,
      "headers": _0x290289
    };
  return new Promise(_0x5185b4 => {
    _0xddb380.post(_0x213408, async (_0x1038b8, _0x4648f5, _0x1d6325) => {
      try {
        {
          _0x1d6325 = JSON.parse(_0x1d6325);
          if (_0x1d6325.result == 1) {
            {
              if (_0x1c274c == "guangjie") console.log("账号[" + _0xddb380.nickname + "]逛街获得" + _0x1d6325.data.amount + "金币"), _0x2242a1 = true;else {
                if (_0x1d6325.data.awardAmount > 500) {
                  {
                    if (_0x1c274c == "shipin") console.log("账号[" + _0xddb380.nickname + "]看超级翻倍广告获得" + _0x1d6325.data.awardAmount + "金币");else {
                      if (_0x1c274c == "box1") console.log("账号[" + _0xddb380.nickname + "]看宝箱翻倍广告获得" + _0x1d6325.data.awardAmount + "金币");else _0x1c274c == "sign" && console.log("账号[" + _0xddb380.nickname + "]看普通签到视频获得" + _0x1d6325.data.awardAmount + "金币");
                    }
                  }
                } else {
                  if (_0x1c274c == "shipin") console.log("账号[" + _0xddb380.nickname + "]看普通视频广告获得" + _0x1d6325.data.awardAmount + "金币");else {
                    if (_0x1c274c == "box1") console.log("账号[" + _0xddb380.nickname + "]看宝箱翻倍广告获得" + _0x1d6325.data.awardAmount + "金币");else {
                      if (_0x1c274c == "sign") {
                        console.log("账号[" + _0xddb380.nickname + "]看普通签到视频获得" + _0x1d6325.data.awardAmount + "金币");
                      }
                    }
                  }
                }
              }
            }
          } else _0x1c274c == "guangjie" && (_0x1d6325.error_msg == "风控失败" ? (console.log("账号[" + _0xddb380.nickname + "]逛街失败:" + _0x1d6325.error_msg), _0x2242a1 = false) : _0x2242a1 = true);
        }
      } catch (_0x1ad6ca) {
        _0xddb380.logErr(_0x1ad6ca, _0x4648f5);
      } finally {
        _0x5185b4();
      }
    }, _0x285b07);
  });
}
async function _0x27f372(_0x3c50b1, _0x29ce03 = 3000) {
  extInfo = "";
  creativeId = "";
  pageId = "";
  subPageId = "";
  liveStreamId = "";
  let _0x465a59 = "https://api2.e.kuaishou.com/rest/nebula/fanstop/earnCoin?mod=" + _0xddb380.mod + "&appver=11.1.40.5218&isp=&language=zh-cn&ud=&did_tag=7&net=WIFI&kcv=" + _0xddb380.kcv + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + _0xddb380.did + "&android_os=1&boardPlatform=" + _0xddb380.boardPlatform + "&kpn=NEBULA&androidApiLevel=" + _0xddb380.androidApiLevel + "&newOc=" + _0xddb380.c + "&slh=0&country_code=cn&nbh=" + _0xddb380.nbh + "&hotfix_ver=&did_gt=" + _0xddb380.did_gt + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + _0xddb380.sys + "&max_memory=" + _0xddb380.max_memory + "&cold_launch_time_ms=" + _0xddb380.cold_launch_time_ms + "&oc=" + _0xddb380.c + "&sh=" + _0xddb380.sh + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + _0xddb380.socName + "&is_background=0&c=" + _0xddb380.c + "&sw=" + _0xddb380.sw + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + _0xddb380.totalMemory + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + _0xddb380.did + "&sbh=72&darkMode=false&did=" + _0xddb380.did,
    _0x3ff5c2 = _0x3c50b1 + "&os=android&token=" + _0xddb380.apist + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + _0xddb380.apist + "&uQaTag=0#00000000000000000000",
    _0xa7e5c9 = "";
  _0xa7e5c9 = await _0x2f10fb("mod=" + decodeURIComponent(_0xddb380.mod) + "&appver=11.1.40.5218&isp=&language=zh-cn&ud=&did_tag=7&net=WIFI&kcv=" + _0xddb380.kcv + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + _0xddb380.did + "&android_os=1&boardPlatform=" + _0xddb380.boardPlatform + "&kpn=NEBULA&androidApiLevel=" + _0xddb380.androidApiLevel + "&newOc=" + _0xddb380.c + "&slh=0&country_code=cn&nbh=" + _0xddb380.nbh + "&hotfix_ver=&did_gt=" + _0xddb380.did_gt + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + _0xddb380.sys + "&max_memory=" + _0xddb380.max_memory + "&cold_launch_time_ms=" + _0xddb380.cold_launch_time_ms + "&oc=" + _0xddb380.c + "&sh=" + _0xddb380.sh + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + decodeURIComponent(_0xddb380.socName) + "&is_background=0&c=" + _0xddb380.c + "&sw=" + _0xddb380.sw + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + _0xddb380.totalMemory + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + _0xddb380.did + "&sbh=72&darkMode=false&did=" + _0xddb380.did, _0x3ff5c2);
  _0xddb380.sig3 = "";
  await _0x6ec5b4(_0xa7e5c9, "" + _0xddb380.salt, "/rest/nebula/fanstop/earnCoin");
  if (_0xddb380.sig3 == "") {
    for (let _0x66e4b8 = 0; _0x66e4b8 < 50; _0x66e4b8++) {
      {
        console.log("账号[" + _0xddb380.nickname + "]接口Api调用失败,等待10s后重试");
        await _0xddb380.wait(10000);
        await _0x6ec5b4(_0xa7e5c9, "" + _0xddb380.salt, "/rest/nebula/fanstop/earnCoin");
        if (_0xddb380.sig3 != "") break;
      }
    }
  }
  _0xddb380.sig3 == "" && (console.log("账号[" + _0xddb380.nickname + "]接口Api调用失败,请检查接口后重新运行脚本"), process.exit(0));
  _0x465a59 = _0x465a59 + "&sig=" + _0xddb380.sig + "&__NS_sig3=" + _0xddb380.sig3 + "&__NStokensig=" + _0xddb380.tokensig;
  return new Promise(_0x566ec3 => {
    let _0x4e32c7 = {
      "url": _0x465a59,
      "body": _0x3ff5c2,
      "headers": {
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "Accept": "*/*",
        "Accept-Language": "en-us",
        "User-Agent": "Kwai-android aegon/3.4.0"
      }
    };
    _0xddb380.post(_0x4e32c7, async (_0x1a00b1, _0x59ced1, _0x322b3c) => {
      try {
        _0x322b3c = JSON.parse(_0x322b3c);
        if (_0x322b3c.result == 1) {
          if (_0x322b3c.awards[0].feed.ad.adDataV2.inspireAdInfo.neoParams) {
            llsid = _0x322b3c.llsid;
            extInfo = _0x322b3c.awards[0].feed.ad.adDataV2.inspireAdInfo.neoParams;
            creativeId = _0x322b3c.awards[0].feed.ad.creativeId;
            pageId = _0x322b3c.awards[0].feed.ad.pageId;
            subPageId = _0x322b3c.awards[0].feed.ad.subPageId;
            liveStreamId = _0x322b3c.awards[0].feed.liveStreamId;
          } else await _0x27f372(_0x3c50b1);
        }
      } catch (_0xabd02c) {
        _0xddb380.logErr(_0xabd02c, _0x59ced1);
      } finally {
        _0x566ec3();
      }
    }, _0x29ce03);
  });
}
async function _0x18d7aa(_0x215d83, _0x3d013b = 3000) {
  let _0x76a4c = "",
    _0x47d4ea = "";
  if (_0x215d83 == "75") {
    await _0x27f372("awardType=0&pcursor=&refreshTimes=2&recoReportContext=%7B%22adClientInfo%22%3A%7B%22xiaomiCustomMarketInfo%22%3A%7B%22support%22%3Atrue%2C%22detailStyle%22%3A%221%2C2%2C3%2C5%2C100%2C101%22%7D%7D%7D&displayType=1&neoParams=&tabId=0&videoModelCrowdTag=1_73");
    _0x47d4ea = "bizStr={\"businessId\":75,\"endTime\":0,\"extParams\":\"\",\"mediaScene\":\"live\",\"neoInfos\":[{\"creativeId\":" + creativeId + ",\"extInfo\":\"" + extInfo + "\",\"feedId\":\"" + liveStreamId + "\",\"llsid\":" + llsid + ",\"taskType\":1}],\"pageId\":" + pageId + ",\"posId\":2318,\"startTime\":0,\"subPageId\":" + subPageId + "}&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st=" + _0xddb380.apist + "&uQaTag=2";
    _0x76a4c = await _0x2f10fb("mod=" + decodeURIComponent(_0xddb380.mod) + "&appver=9.11.10.2507&isp=&language=zh-cn&ud=&did_tag=7&net=WIFI&kcv=" + _0xddb380.kcv + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + _0xddb380.did + "&android_os=1&boardPlatform=" + _0xddb380.boardPlatform + "&kpn=NEBULA&androidApiLevel=" + _0xddb380.androidApiLevel + "&newOc=" + _0xddb380.c + "&slh=0&country_code=cn&nbh=" + _0xddb380.nbh + "&hotfix_ver=&did_gt=" + _0xddb380.did_gt + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + _0xddb380.sys + "&max_memory=" + _0xddb380.max_memory + "&cold_launch_time_ms=" + _0xddb380.cold_launch_time_ms + "&oc=" + _0xddb380.c + "&sh=" + _0xddb380.sh + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + decodeURIComponent(_0xddb380.socName) + "&is_background=0&c=" + _0xddb380.c + "&sw=" + _0xddb380.sw + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + _0xddb380.totalMemory + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + _0xddb380.did + "&sbh=72&darkMode=false&did=" + _0xddb380.did, _0x47d4ea);
    url = "https://api2.e.kuaishou.com/rest/r/ad/task/report?mod=" + _0xddb380.mod + "&appver=9.11.10.2507&isp=&language=zh-cn&ud=&did_tag=7&net=WIFI&kcv=" + _0xddb380.kcv + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + _0xddb380.did + "&android_os=1&boardPlatform=" + _0xddb380.boardPlatform + "&kpn=NEBULA&androidApiLevel=" + _0xddb380.androidApiLevel + "&newOc=" + _0xddb380.c + "&slh=0&country_code=cn&nbh=" + _0xddb380.nbh + "&hotfix_ver=&did_gt=" + _0xddb380.did_gt + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + _0xddb380.sys + "&max_memory=" + _0xddb380.max_memory + "&cold_launch_time_ms=" + _0xddb380.cold_launch_time_ms + "&oc=" + _0xddb380.c + "&sh=" + _0xddb380.sh + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + _0xddb380.socName + "&is_background=0&c=" + _0xddb380.c + "&sw=" + _0xddb380.sw + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + _0xddb380.totalMemory + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + _0xddb380.did + "&sbh=72&darkMode=false&did=" + _0xddb380.did;
  } else {
    _0x215d83 == "363" && (await _0x27f372("awardType=0&pcursor=&refreshTimes=1&recoReportContext=%7B%22adClientInfo%22%3A%7B%22xiaomiCustomMarketInfo%22%3A%7B%22support%22%3Atrue%2C%22detailStyle%22%3A%221%2C2%2C3%2C5%2C100%2C101%22%7D%7D%7D&displayType=1&neoParams=eyJwYWdlSWQiOjEwMDAxMjA2MCwic3ViUGFnZUlkIjoxMDAwMjA2OTQsImJ1c2luZXNzSWQiOjM2MywiZXh0UGFyYW1zIjoiYWM4NWNmYTc4NGNiOGNiNWQ2ZjZlMzE4NzRlZmU3ODFiNjU4OTJmZTMwMjkxMDJhZDdlMWZkY2YyNGQxODA0MTYyMjZhYWM0NjA5MjU1OGE0ODVkOWEwYTUxOGZhNmJiZTJiMTRiZGUwNmQ5YmQ5ODNhODIwNzJlMWE3NzVhYjlhYTA1YTcwODNlZDU2NWM2NTFmMjBkZWNjODE4NzA3MTZjMDIwNTQ5NDUwZDE4MDM3ZWM5MjY5MmZjNDQ3ZjYzIiwiY3VzdG9tRGF0YSI6eyJleGl0SW5mbyI6eyJ0b2FzdERlc2MiOm51bGwsInRvYXN0SW1nVXJsIjpudWxsfX0sInBlbmRhbnRUeXBlIjoxLCJkaXNwbGF5VHlwZSI6MSwiY2hhbm5lbCI6MCwiY291bnRkb3duUmVwb3J0IjpmYWxzZSwiYXV0b1JlcG9ydCI6dHJ1ZX0&tabId=0"), _0x47d4ea = "bizStr={\"businessId\":363,\"endTime\":0,\"extParams\":\"1dd91aaf1c0e8d5d5b89cc7230750f97117e75813672bd11fba6a73dcd5876366519bb16b2245bd796b10e37c1bfb17751fb3bf8d1a9231cedbfa8ab3622f9433e07b5f2d37dbd2dffafa89c86beef41c2b7ea33731307fb6fe20042f8dcb94c\",\"mediaScene\":\"live\",\"neoInfos\":[{\"creativeId\":" + creativeId + ",\"extInfo\":\"" + extInfo + "\",\"feedId\":\"" + liveStreamId + "\",\"llsid\":" + llsid + ",\"taskType\":1}],\"pageId\":" + pageId + ",\"posId\":15173,\"startTime\":0,\"subPageId\":" + subPageId + "}&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st=" + _0xddb380.apist + "&uQaTag=2", _0x76a4c = await _0x2f10fb("mod=" + decodeURIComponent(_0xddb380.mod) + "&appver=10.6.10.3898&isp=&language=zh-cn&ud=&did_tag=7&net=WIFI&kcv=" + _0xddb380.kcv + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + _0xddb380.did + "&android_os=1&boardPlatform=" + _0xddb380.boardPlatform + "&kpn=NEBULA&androidApiLevel=" + _0xddb380.androidApiLevel + "&newOc=" + _0xddb380.c + "&slh=0&country_code=cn&nbh=" + _0xddb380.nbh + "&hotfix_ver=&did_gt=" + _0xddb380.did_gt + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + _0xddb380.sys + "&max_memory=" + _0xddb380.max_memory + "&cold_launch_time_ms=" + _0xddb380.cold_launch_time_ms + "&oc=" + _0xddb380.c + "&sh=" + _0xddb380.sh + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + decodeURIComponent(_0xddb380.socName) + "&is_background=0&c=" + _0xddb380.c + "&sw=" + _0xddb380.sw + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + _0xddb380.totalMemory + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + _0xddb380.did + "&sbh=72&darkMode=false&did=" + _0xddb380.did, _0x47d4ea), url = "https://api2.e.kuaishou.com/rest/r/ad/task/report?mod=" + _0xddb380.mod + "&appver=10.6.10.3898&isp=&language=zh-cn&ud=&did_tag=7&net=WIFI&kcv=" + _0xddb380.kcv + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + _0xddb380.did + "&android_os=1&boardPlatform=" + _0xddb380.boardPlatform + "&kpn=NEBULA&androidApiLevel=" + _0xddb380.androidApiLevel + "&newOc=" + _0xddb380.c + "&slh=0&country_code=cn&nbh=" + _0xddb380.nbh + "&hotfix_ver=&did_gt=" + _0xddb380.did_gt + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + _0xddb380.sys + "&max_memory=" + _0xddb380.max_memory + "&cold_launch_time_ms=" + _0xddb380.cold_launch_time_ms + "&oc=" + _0xddb380.c + "&sh=" + _0xddb380.sh + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + _0xddb380.socName + "&is_background=0&c=" + _0xddb380.c + "&sw=" + _0xddb380.sw + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + _0xddb380.totalMemory + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + _0xddb380.did + "&sbh=72&darkMode=false&did=" + _0xddb380.did);
  }
  _0xddb380.sig3 = "";
  await _0x6ec5b4(_0x76a4c, "" + _0xddb380.salt, "/rest/r/ad/task/report");
  if (_0xddb380.sig3 == "") for (let _0x3e1155 = 0; _0x3e1155 < 50; _0x3e1155++) {
    console.log("账号[" + _0xddb380.nickname + "]接口Api调用失败,等待10s后重试");
    await _0xddb380.wait(10000);
    await _0x6ec5b4(_0x76a4c, "" + _0xddb380.salt, "/rest/r/ad/task/report");
    if (_0xddb380.sig3 != "") break;
  }
  _0xddb380.sig3 == "" && (console.log("账号[" + _0xddb380.nickname + "]接口Api调用失败,请检查接口后重新运行脚本"), process.exit(0));
  url = url + "&sig=" + _0xddb380.sig + "&__NS_sig3=" + _0xddb380.sig3 + "&__NStokensig=" + _0xddb380.tokensig;
  const _0x1b87cc = {
    "url": url,
    "body": _0x47d4ea,
    "headers": {
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/x-www-form-urlencoded",
      "Connection": "keep-alive",
      "X-Client-Info": "model=" + _0xddb380.modS + ";os=Android;nqe-score=38;;network=WIFI;signal-strength=4",
      "Host": "api2.e.kuaishou.com",
      "Accept-Language": "en-us",
      "User-Agent": "Kwai-android aegon/3.4.0"
    }
  };
  return new Promise(_0x3b7b55 => {
    _0xddb380.post(_0x1b87cc, async (_0xcc0530, _0x540933, _0x26f79) => {
      try {
        _0x26f79 = JSON.parse(_0x26f79);
        if (_0x26f79.result == 1) _0x215d83 == "75" ? console.log("账号[" + _0xddb380.nickname + "]看直播获得" + _0x26f79.data.neoAmount + "金币") : _0x215d83 == "363" && console.log("账号[" + _0xddb380.nickname + "]看直播2获得" + _0x26f79.data.neoAmount + "金币");else {
          _0x215d83 == "75" ? console.log("账号[" + _0xddb380.nickname + "]看直播失败:" + _0x26f79.error_msg) : _0x215d83 == "363" && console.log("账号[" + _0xddb380.nickname + "]看直播2失败:" + _0x26f79.error_msg);
        }
      } catch (_0xe7a0b4) {
        _0xddb380.logErr(_0xe7a0b4, _0x540933);
      } finally {
        _0x3b7b55();
      }
    }, _0x3d013b);
  });
}
async function _0x6ec5b4(_0xdcfc9f, _0xf27650, _0x59f8ed, _0x45e134 = 3000) {
  await _0x130559(_0x3de4e5);
  return new Promise(_0x248396 => {
    {
      let _0x4aea25 = {
        "url": _0x18f39f,
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify({
          "body": _0xdcfc9f,
          "client_salt": _0xf27650,
          "url": _0x59f8ed,
          "kstoken": "1"
        })
      };
      _0xddb380.post(_0x4aea25, async (_0x11a244, _0x21bf9f, _0x5bb54a) => {
        try {
          {
            if (_0x5bb54a) {
              _0x5bb54a = JSON.parse(_0x5bb54a);
              if (_0x5bb54a.code == 200) {
                if (_0x5bb54a.data.sig) _0xddb380.sig = _0x5bb54a.data.sig, _0xddb380.sig3 = _0x5bb54a.data.sig3, _0xddb380.tokensig = _0x5bb54a.data.tokensig;else {
                  await _0x6ec5b4(_0xdcfc9f, _0xf27650, _0x59f8ed);
                }
              }
            } else await _0x6ec5b4(_0xdcfc9f, _0xf27650, _0x59f8ed);
          }
        } catch (_0x300509) {
          _0xddb380.logErr(_0x300509, _0x21bf9f);
        } finally {
          _0x248396();
        }
      }, _0x45e134);
    }
  });
}
async function _0x2f10fb(_0xb3407e, _0x4cf427) {
  let _0x2fba4d = [],
    _0x523c72 = "";
  _0x523c72 = _0xb3407e + "&" + _0x4cf427;
  _0x2fba4d = _0x523c72.split("&");
  _0x2fba4d.sort();
  let _0x1b80db = "";
  for (let _0x3fc5aa = 0; _0x3fc5aa < _0x2fba4d.length; _0x3fc5aa++) {
    _0x1b80db += _0x2fba4d[_0x3fc5aa];
  }
  return _0x1b80db;
}
function _0x10e48b(_0x578db0, _0x5967a0) {
  return Math.round(Math.random() * _0x5967a0 - _0x578db0 + _0x578db0);
}
function _0x246477(_0x48383c, _0xc4860a) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x3c50b7 {
    constructor(_0x415504) {
      this.env = _0x415504;
    }
    ["send"](_0x176ef4, _0x36da92 = "GET") {
      {
        _0x176ef4 = "string" == typeof _0x176ef4 ? {
          "url": _0x176ef4
        } : _0x176ef4;
        let _0x3789b9 = this.get;
        "POST" === _0x36da92 && (_0x3789b9 = this.post);
        return new Promise((_0x3d8e84, _0x1f1035) => {
          _0x3789b9.call(this, _0x176ef4, (_0x2cf98c, _0x8de11b, _0x2b73f6) => {
            _0x2cf98c ? _0x1f1035(_0x2cf98c) : _0x3d8e84(_0x8de11b);
          });
        });
      }
    }
    ["get"](_0x4c9ef5) {
      return this.send.call(this.env, _0x4c9ef5);
    }
    ["post"](_0x20972a) {
      return this.send.call(this.env, _0x20972a, "POST");
    }
  }
  return new class {
    constructor(_0xf359cc, _0xa0f650) {
      this.name = _0xf359cc;
      this.http = new _0x3c50b7(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0xa0f650);
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
    ["toObj"](_0x217df8, _0x19705a = null) {
      try {
        return JSON.parse(_0x217df8);
      } catch {
        return _0x19705a;
      }
    }
    ["toStr"](_0x34f84b, _0x24bd4d = null) {
      try {
        return JSON.stringify(_0x34f84b);
      } catch {
        return _0x24bd4d;
      }
    }
    ["getjson"](_0x582087, _0x1d4fd0) {
      {
        let _0x10503d = _0x1d4fd0;
        const _0x4976f1 = this.getdata(_0x582087);
        if (_0x4976f1) {
          try {
            _0x10503d = JSON.parse(this.getdata(_0x582087));
          } catch {}
        }
        return _0x10503d;
      }
    }
    ["setjson"](_0x1e0889, _0x44b7bd) {
      try {
        return this.setdata(JSON.stringify(_0x1e0889), _0x44b7bd);
      } catch {
        return false;
      }
    }
    ["getScript"](_0x3a63a9) {
      return new Promise(_0x4dd5ad => {
        const _0x3cb498 = {
          "url": _0x3a63a9
        };
        this.get(_0x3cb498, (_0x41890b, _0x78d071, _0x341ef7) => _0x4dd5ad(_0x341ef7));
      });
    }
    ["runScript"](_0x4a7f1d, _0x43b9d1) {
      return new Promise(_0x2ff22f => {
        {
          let _0x2af4f5 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          _0x2af4f5 = _0x2af4f5 ? _0x2af4f5.replace(/\n/g, "").trim() : _0x2af4f5;
          let _0x5dd51d = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          _0x5dd51d = _0x5dd51d ? 1 * _0x5dd51d : 20;
          _0x5dd51d = _0x43b9d1 && _0x43b9d1.timeout ? _0x43b9d1.timeout : _0x5dd51d;
          const _0x5515c4 = {
              "script_text": _0x4a7f1d,
              "mock_type": "cron",
              "timeout": _0x5dd51d
            },
            [_0x15c75f, _0x420caa] = _0x2af4f5.split("@"),
            _0xc51da0 = {
              "url": "http://" + _0x420caa + "/v1/scripting/evaluate",
              "body": _0x5515c4,
              "headers": {
                "X-Key": _0x15c75f,
                "Accept": "*/*"
              }
            };
          this.post(_0xc51da0, (_0xcac3b8, _0x418609, _0x1ea264) => _0x2ff22f(_0x1ea264));
        }
      }).catch(_0x161626 => this.logErr(_0x161626));
    }
    ["loaddata"]() {
      {
        if (!this.isNode()) return {};
        {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const _0x364c66 = this.path.resolve(this.dataFile),
              _0xf4baf8 = this.path.resolve(process.cwd(), this.dataFile),
              _0x75ae67 = this.fs.existsSync(_0x364c66),
              _0x5a6036 = !_0x75ae67 && this.fs.existsSync(_0xf4baf8);
            if (!_0x75ae67 && !_0x5a6036) {
              return {};
            }
            {
              const _0x497c9d = _0x75ae67 ? _0x364c66 : _0xf4baf8;
              try {
                return JSON.parse(this.fs.readFileSync(_0x497c9d));
              } catch (_0x646d1) {
                return {};
              }
            }
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
            const _0x43d28d = this.path.resolve(this.dataFile),
              _0x4e8d0d = this.path.resolve(process.cwd(), this.dataFile),
              _0x3f8e35 = this.fs.existsSync(_0x43d28d),
              _0x26ef89 = !_0x3f8e35 && this.fs.existsSync(_0x4e8d0d),
              _0x46506d = JSON.stringify(this.data);
            _0x3f8e35 ? this.fs.writeFileSync(_0x43d28d, _0x46506d) : _0x26ef89 ? this.fs.writeFileSync(_0x4e8d0d, _0x46506d) : this.fs.writeFileSync(_0x43d28d, _0x46506d);
          }
        }
      }
    }
    ["lodash_get"](_0x31d5c2, _0x50aca8, _0x4874d0) {
      {
        const _0x33ca4e = _0x50aca8.replace(/\[(\d+)\]/g, ".$1").split(".");
        let _0xe552ae = _0x31d5c2;
        for (const _0x2e93ca of _0x33ca4e) if (_0xe552ae = Object(_0xe552ae)[_0x2e93ca], undefined === _0xe552ae) return _0x4874d0;
        return _0xe552ae;
      }
    }
    ["lodash_set"](_0x5b454c, _0x161360, _0x4acfb8) {
      return Object(_0x5b454c) !== _0x5b454c ? _0x5b454c : (Array.isArray(_0x161360) || (_0x161360 = _0x161360.toString().match(/[^.[\]]+/g) || []), _0x161360.slice(0, -1).reduce((_0xef51f1, _0x39f9dd, _0x12a033) => Object(_0xef51f1[_0x39f9dd]) === _0xef51f1[_0x39f9dd] ? _0xef51f1[_0x39f9dd] : _0xef51f1[_0x39f9dd] = Math.abs(_0x161360[_0x12a033 + 1]) >> 0 == +_0x161360[_0x12a033 + 1] ? [] : {}, _0x5b454c)[_0x161360[_0x161360.length - 1]] = _0x4acfb8, _0x5b454c);
    }
    ["getdata"](_0x3fc631) {
      {
        let _0x53ad15 = this.getval(_0x3fc631);
        if (/^@/.test(_0x3fc631)) {
          const [, _0x5b6b1c, _0x1ebe17] = /^@(.*?)\.(.*?)$/.exec(_0x3fc631),
            _0x2c7c14 = _0x5b6b1c ? this.getval(_0x5b6b1c) : "";
          if (_0x2c7c14) {
            try {
              const _0x5b3a4f = JSON.parse(_0x2c7c14);
              _0x53ad15 = _0x5b3a4f ? this.lodash_get(_0x5b3a4f, _0x1ebe17, "") : _0x53ad15;
            } catch (_0x4f10dd) {
              _0x53ad15 = "";
            }
          }
        }
        return _0x53ad15;
      }
    }
    ["setdata"](_0x1be635, _0x3c7b42) {
      {
        let _0x3916ad = false;
        if (/^@/.test(_0x3c7b42)) {
          const [, _0x48757f, _0x3c0f6b] = /^@(.*?)\.(.*?)$/.exec(_0x3c7b42),
            _0x30508d = this.getval(_0x48757f),
            _0x35dab8 = _0x48757f ? "null" === _0x30508d ? null : _0x30508d || "{}" : "{}";
          try {
            const _0xf6c750 = JSON.parse(_0x35dab8);
            this.lodash_set(_0xf6c750, _0x3c0f6b, _0x1be635);
            _0x3916ad = this.setval(JSON.stringify(_0xf6c750), _0x48757f);
          } catch (_0x14a588) {
            const _0x5cacc2 = {};
            this.lodash_set(_0x5cacc2, _0x3c0f6b, _0x1be635);
            _0x3916ad = this.setval(JSON.stringify(_0x5cacc2), _0x48757f);
          }
        } else _0x3916ad = this.setval(_0x1be635, _0x3c7b42);
        return _0x3916ad;
      }
    }
    ["getval"](_0xfd0161) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0xfd0161) : this.isQuanX() ? $prefs.valueForKey(_0xfd0161) : this.isNode() ? (this.data = this.loaddata(), this.data[_0xfd0161]) : this.data && this.data[_0xfd0161] || null;
    }
    ["setval"](_0x139846, _0x2a711c) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x139846, _0x2a711c) : this.isQuanX() ? $prefs.setValueForKey(_0x139846, _0x2a711c) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2a711c] = _0x139846, this.writedata(), true) : this.data && this.data[_0x2a711c] || null;
    }
    ["initGotEnv"](_0x17b305) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x17b305 && (_0x17b305.headers = _0x17b305.headers ? _0x17b305.headers : {}, undefined === _0x17b305.headers.Cookie && undefined === _0x17b305.cookieJar && (_0x17b305.cookieJar = this.ckjar));
    }
    ["get"](_0x29d799, _0x428f79 = () => {}) {
      {
        const _0x5b31c4 = {
            "X-Surge-Skip-Scripting": false
          },
          _0x464b10 = {
            "hints": false
          };
        _0x29d799.headers && (delete _0x29d799.headers["Content-Type"], delete _0x29d799.headers["Content-Length"]);
        this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x29d799.headers = _0x29d799.headers || {}, Object.assign(_0x29d799.headers, _0x5b31c4)), $httpClient.get(_0x29d799, (_0x2f502c, _0x46155c, _0x1dcea6) => {
          !_0x2f502c && _0x46155c && (_0x46155c.body = _0x1dcea6, _0x46155c.statusCode = _0x46155c.status);
          _0x428f79(_0x2f502c, _0x46155c, _0x1dcea6);
        })) : this.isQuanX() ? (this.isNeedRewrite && (_0x29d799.opts = _0x29d799.opts || {}, Object.assign(_0x29d799.opts, _0x464b10)), $task.fetch(_0x29d799).then(_0x32d7c8 => {
          {
            const {
                "statusCode": _0x2a6922,
                "statusCode": _0xc9ab7b,
                "headers": _0x143ecc,
                "body": _0x3e05a4
              } = _0x32d7c8,
              _0x1638fa = {
                "status": _0x2a6922,
                "statusCode": _0xc9ab7b,
                "headers": _0x143ecc,
                "body": _0x3e05a4
              };
            _0x428f79(null, _0x1638fa, _0x3e05a4);
          }
        }, _0x1945c => _0x428f79(_0x1945c))) : this.isNode() && (this.initGotEnv(_0x29d799), this.got(_0x29d799).on("redirect", (_0x3ac8a0, _0x29ca74) => {
          try {
            if (_0x3ac8a0.headers["set-cookie"]) {
              const _0xb033cb = _0x3ac8a0.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
              _0xb033cb && this.ckjar.setCookieSync(_0xb033cb, null);
              _0x29ca74.cookieJar = this.ckjar;
            }
          } catch (_0x1c45ac) {
            this.logErr(_0x1c45ac);
          }
        }).then(_0x3de6fc => {
          const {
              "statusCode": _0x80d314,
              "statusCode": _0x124513,
              "headers": _0x125364,
              "body": _0x59207f
            } = _0x3de6fc,
            _0x3b35be = {
              "status": _0x80d314,
              "statusCode": _0x124513,
              "headers": _0x125364,
              "body": _0x59207f
            };
          _0x428f79(null, _0x3b35be, _0x59207f);
        }, _0x213210 => {
          const {
            "message": _0x5cef48,
            "response": _0x4bc109
          } = _0x213210;
          _0x428f79(_0x5cef48, _0x4bc109, _0x4bc109 && _0x4bc109.body);
        }));
      }
    }
    ["post"](_0x382532, _0x5cdc55 = () => {}) {
      const _0x373a77 = {
          "X-Surge-Skip-Scripting": false
        },
        _0x2c459e = {
          "hints": false
        };
      if (_0x382532.body && _0x382532.headers && !_0x382532.headers["Content-Type"] && (_0x382532.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x382532.headers && delete _0x382532.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x382532.headers = _0x382532.headers || {}, Object.assign(_0x382532.headers, _0x373a77));
        $httpClient.post(_0x382532, (_0x18ec7a, _0x310d36, _0x5e3125) => {
          !_0x18ec7a && _0x310d36 && (_0x310d36.body = _0x5e3125, _0x310d36.statusCode = _0x310d36.status);
          _0x5cdc55(_0x18ec7a, _0x310d36, _0x5e3125);
        });
      } else {
        {
          if (this.isQuanX()) {
            _0x382532.method = "POST";
            this.isNeedRewrite && (_0x382532.opts = _0x382532.opts || {}, Object.assign(_0x382532.opts, _0x2c459e));
            $task.fetch(_0x382532).then(_0x3990b8 => {
              const {
                  "statusCode": _0x54f48f,
                  "statusCode": _0x5907b6,
                  "headers": _0x52bd69,
                  "body": _0x434c5f
                } = _0x3990b8,
                _0x581db1 = {
                  "status": _0x54f48f,
                  "statusCode": _0x5907b6,
                  "headers": _0x52bd69,
                  "body": _0x434c5f
                };
              _0x5cdc55(null, _0x581db1, _0x434c5f);
            }, _0xbc4458 => _0x5cdc55(_0xbc4458));
          } else {
            {
              if (this.isNode()) {
                this.initGotEnv(_0x382532);
                const {
                  "url": _0x4c30cb,
                  ..._0xb51d63
                } = _0x382532;
                this.got.post(_0x4c30cb, _0xb51d63).then(_0x250a83 => {
                  const {
                      "statusCode": _0x195433,
                      "statusCode": _0x257816,
                      "headers": _0x404c9f,
                      "body": _0x355200
                    } = _0x250a83,
                    _0x4b791c = {
                      "status": _0x195433,
                      "statusCode": _0x257816,
                      "headers": _0x404c9f,
                      "body": _0x355200
                    };
                  _0x5cdc55(null, _0x4b791c, _0x355200);
                }, _0xb7f4b => {
                  {
                    const {
                      "message": _0x34f827,
                      "response": _0x2977e6
                    } = _0xb7f4b;
                    _0x5cdc55(_0x34f827, _0x2977e6, _0x2977e6 && _0x2977e6.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    ["time"](_0x298c8a, _0x3adc3f = null) {
      {
        const _0x4aaed9 = _0x3adc3f ? new Date(_0x3adc3f) : new Date();
        let _0x70f107 = {
          "M+": _0x4aaed9.getMonth() + 1,
          "d+": _0x4aaed9.getDate(),
          "H+": _0x4aaed9.getHours(),
          "m+": _0x4aaed9.getMinutes(),
          "s+": _0x4aaed9.getSeconds(),
          "q+": Math.floor((_0x4aaed9.getMonth() + 3) / 3),
          "S": _0x4aaed9.getMilliseconds()
        };
        /(y+)/.test(_0x298c8a) && (_0x298c8a = _0x298c8a.replace(RegExp.$1, (_0x4aaed9.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let _0x11bf0d in _0x70f107) new RegExp("(" + _0x11bf0d + ")").test(_0x298c8a) && (_0x298c8a = _0x298c8a.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x70f107[_0x11bf0d] : ("00" + _0x70f107[_0x11bf0d]).substr(("" + _0x70f107[_0x11bf0d]).length)));
        return _0x298c8a;
      }
    }
    ["msg"](_0x3c6b92 = _0x48383c, _0x24d5b8 = "", _0x2ece6c = "", _0xacc412) {
      {
        const _0x363c04 = _0x3b239a => {
          {
            if (!_0x3b239a) {
              return _0x3b239a;
            }
            if ("string" == typeof _0x3b239a) return this.isLoon() ? _0x3b239a : this.isQuanX() ? {
              "open-url": _0x3b239a
            } : this.isSurge() ? {
              "url": _0x3b239a
            } : undefined;
            if ("object" == typeof _0x3b239a) {
              {
                if (this.isLoon()) {
                  let _0x2b1006 = _0x3b239a.openUrl || _0x3b239a.url || _0x3b239a["open-url"],
                    _0x5d832f = _0x3b239a.mediaUrl || _0x3b239a["media-url"];
                  const _0x4f8301 = {
                    "openUrl": _0x2b1006,
                    "mediaUrl": _0x5d832f
                  };
                  return _0x4f8301;
                }
                if (this.isQuanX()) {
                  let _0x4dd7be = _0x3b239a["open-url"] || _0x3b239a.url || _0x3b239a.openUrl,
                    _0x2f26ce = _0x3b239a["media-url"] || _0x3b239a.mediaUrl;
                  const _0x2b39c1 = {
                    "open-url": _0x4dd7be,
                    "media-url": _0x2f26ce
                  };
                  return _0x2b39c1;
                }
                if (this.isSurge()) {
                  {
                    let _0x17a0e8 = _0x3b239a.url || _0x3b239a.openUrl || _0x3b239a["open-url"];
                    const _0x9ce670 = {
                      "url": _0x17a0e8
                    };
                    return _0x9ce670;
                  }
                }
              }
            }
          }
        };
        if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x3c6b92, _0x24d5b8, _0x2ece6c, _0x363c04(_0xacc412)) : this.isQuanX() && $notify(_0x3c6b92, _0x24d5b8, _0x2ece6c, _0x363c04(_0xacc412))), !this.isMuteLog) {
          {
            let _0x3950fe = ["", "==============📣系统通知📣=============="];
            _0x3950fe.push(_0x3c6b92);
            _0x24d5b8 && _0x3950fe.push(_0x24d5b8);
            _0x2ece6c && _0x3950fe.push(_0x2ece6c);
            console.log(_0x3950fe.join("\n"));
            this.logs = this.logs.concat(_0x3950fe);
          }
        }
      }
    }
    ["log"](..._0x52e5d4) {
      _0x52e5d4.length > 0 && (this.logs = [...this.logs, ..._0x52e5d4]);
      console.log(_0x52e5d4.join(this.logSeparator));
    }
    ["logErr"](_0x540e9f, _0x47d71f) {
      const _0x5af66a = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x5af66a ? this.log("", "❗️" + this.name + ", 错误!", _0x540e9f.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x540e9f);
    }
    ["wait"](_0x4d7368) {
      return new Promise(_0x5b203d => setTimeout(_0x5b203d, _0x4d7368));
    }
    ["done"](_0x442e1c = {}) {
      {
        const _0x135e02 = new Date().getTime(),
          _0x569665 = (_0x135e02 - this.startTime) / 1000;
        this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x569665 + " 秒");
        this.log();
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x442e1c);
      }
    }
  }(_0x48383c, _0xc4860a);
}