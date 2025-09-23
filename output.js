//Tue Sep 23 2025 02:52:35 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("抖音极速版");
let tokens = $.getdata("dyjsb") || process.env.dyjsb || "",
  is_bf = $.getdata("dyjsb_bf") || process.env.dyjsb_bf || "1";
!(async () => {
  $.log("\n抖音低保版，致敬逝去的1200！\n------------------");
  is_bf = parseInt(is_bf);
  tokens.indexOf("@") != -1 ? tokens = tokens.split("@") || [] : tokens = tokens.split("\n") || [];
  if (!tokens[0]) {
    $.log("请设置环境变量添加抖音极速版账号");
    return;
  }
  $.log("共获取到" + tokens.length + "个账号");
  let _0x4a5942 = [];
  tokens.forEach(_0x2cdd3a => {
    let _0x542ac6 = jxUser(_0x2cdd3a);
    _0x542ac6.sessionid ? _0x4a5942.push(new UserInfo(_0x542ac6.sessionid, _0x542ac6.bxurl, _0x542ac6.xgorgon, _0x542ac6.xkhronos, _0x542ac6.iid, _0x542ac6.device_id)) : console.log("账号格式错误");
  });
  for (let _0x580013 = 0; _0x580013 < _0x4a5942.length; _0x580013++) {
    let _0x1ebc49 = _0x4a5942[_0x580013];
    is_bf ? _0x1ebc49.main(_0x580013) : await _0x1ebc49.main(_0x580013);
  }
})().catch(_0x2262c7 => $.logErr(_0x2262c7)).finally(() => {
  is_bf && $.done();
});
function jxUser(_0x417bf1) {
  let _0x30a7cd = {},
    _0x5739bf = _0x417bf1.split("#");
  _0x5739bf.forEach(_0xbe2894 => {
    let _0x531049 = _0xbe2894.split("==");
    _0x30a7cd[_0x531049[0]] = _0x531049[1];
  });
  return _0x30a7cd;
}
function UserInfo(_0xa2376 = "", _0x415133 = "", _0x5d68eb = "", _0x392465 = "", _0x1a55ef = "", _0x3378b5 = "") {
  let _0x37e636 = false,
    _0x3d2a93 = "sessionid=" + _0xa2376,
    _0x219038 = "com.ss.android.ugc.aweme.lite/250101 (Linux; U; Android 13; zh_CN; V2185A; Build/TP1A.220624.014;tt-ok/3.12.13.1)",
    _0x225c02 = "25.01.01",
    _0x3552c9 = 2329,
    _0x14f5ec = "douyin_lite",
    _0x4b4086 = 0,
    _0x44973e = false,
    _0x4945b8 = [];
  function _0x4a755b(_0x3ddb3a) {
    {
      let _0x4f032a = _0x3ddb3a.replace("//", "/").split("/")[1];
      return {
        "Host": _0x4f032a,
        "user-agent": _0x219038,
        "x-khronos": _0x392465,
        "x-gorgon": _0x5d68eb,
        "Cookie": _0x3d2a93,
        "content-type": "application/json"
      };
    }
  }
  function _0x1b4b04(_0x27d326, _0x3f650e = "abcdefhijkmnprstwxyz123456789") {
    {
      _0x27d326 = _0x27d326 || 32;
      let _0x1cbb4f = _0x3f650e.length,
        _0x5c313e = "";
      for (let _0x4504e3 = 0; _0x4504e3 < _0x27d326; _0x4504e3++) _0x5c313e += _0x3f650e.charAt(Math.floor(Math.random() * _0x1cbb4f));
      return _0x5c313e;
    }
  }
  this.main = async function (_0x8c63be) {
    let _0x2eb42a = new Date().getTime();
    _0x4b4086 = _0x8c63be + 1;
    !_0x3378b5 && (_0x3378b5 = _0x1b4b04(16, "0123456789"));
    !_0x1a55ef && (_0x1a55ef = _0x1b4b04(16, "0123456789"));
    await _0x13e19a();
    if (!_0x37e636) {
      await _0x14e996();
      _0x4945b8.filter(_0x3b0ec0 => _0x3b0ec0.name === "走路赚金币").length > 0 && (await _0x291839());
      await _0x5a592a("read", "观看同城视频");
      _0x4945b8.filter(_0x17f06a => _0x17f06a.name === "逛街赚钱").length > 0 && (await _0x56ee73());
      _0x4945b8.filter(_0x4f6930 => _0x4f6930.name === "搜索赚金币").length > 0 && (await _0x1edcaa());
      if (_0x4945b8.filter(_0x3a1dc6 => _0x3a1dc6.name === "填写好友邀请码").length > 0) {}
      _0x4945b8.filter(_0x69b6c7 => _0x69b6c7.name === "吃饭补贴").length > 0 && (await _0x5e131b());
      _0x4945b8.filter(_0x520397 => _0x520397.name === "看小说赚金币").length > 0 && (await _0x5a592a("read_novel", "看小说赚金币"));
      await _0x13e19a(false);
    }
    const _0x2f4dbc = new Date().getTime(),
      _0x2f0ce6 = (_0x2f4dbc - _0x2eb42a) / 1000;
    $.log("账号[" + _0x4b4086 + "] 运行完毕, 结束! 🕛 " + _0x2f0ce6 + " 秒");
  };
  function _0x13e19a(_0x4b32ee = true) {
    return new Promise(_0x488a23 => {
      {
        let _0x221a47 = "https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/page?mode=done&update_version_code=250100&os_api=33&device_platform=android&iid=" + _0x1a55ef + "&device_id=" + _0x3378b5 + "&aid=" + _0x3552c9;
        const _0x5ede3e = {
          "url": _0x221a47,
          "headers": _0x4a755b(_0x221a47)
        };
        $.get(_0x5ede3e, async (_0x224e93, _0x26e58e, _0x206317) => {
          try {
            if (_0x206317) {
              {
                _0x206317 = JSON.parse(_0x206317);
                if (_0x206317.data.is_login) {
                  if (_0x4b32ee) {
                    {
                      if (_0x206317.data.treasure_stats) {
                        _0x4945b8 = _0x206317.data.task_list;
                        let _0x1ae443 = _0x206317.data.treasure_stats;
                        if (_0x1ae443.next_time <= _0x1ae443.cur_time) {
                          $.log("账号[" + _0x4b4086 + "]准备开宝箱，这里可能会卡一会");
                          let _0xc2dff3 = 0;
                          while (!_0x44973e) {
                            _0xc2dff3++;
                            await _0x3fc788();
                          }
                        } else {
                          $.log("账号[" + _0x4b4086 + "]下次开宝箱时间：" + $.time("yyyy-MM-dd HH:mm:ss", _0x1ae443.next_time * 1000));
                        }
                      }
                    }
                  } else $.log("账号[" + _0x4b4086 + "]今日金币收入:" + _0x206317.data.income_data?.["amount1"] + " 余额:" + _0x206317.data.income_data?.["amount2"] / 100 + "元");
                  _0x37e636 = false;
                } else $.log("账号[" + _0x4b4086 + "]登录失败！"), _0x37e636 = true;
              }
            }
          } catch (_0xc8dd6d) {
            $.logErr(_0xc8dd6d, _0x26e58e);
          } finally {
            _0x488a23(_0x206317);
          }
        });
      }
    });
  }
  function _0x14e996() {
    return new Promise(_0x1dabda => {
      let _0x3f4d44 = new Date().getTime(),
        _0x2080ff = parseInt(_0x3f4d44 / 1000 + ""),
        _0x2ede08 = "https://api26-normal-lq.amemv.com/luckycat/aweme/v1/task/done/sign_in?iid=" + _0x1a55ef + "&device_id=" + _0x3378b5 + "&ac=5g&channel=31575073k&aid=" + _0x3552c9 + "&app_name=" + _0x14f5ec + "&version_code=250100&version_name=" + _0x225c02 + "&device_platform=android&os=android&ssmix=a&device_type=SHARK+KSR-A10&device_brand=blackshark&language=zh&os_api=33&os_version=12&manifest_version_code=250101&resolution=1080*2190&dpi=440&update_version_code=25109900&_rticket=" + _0x3f4d44 + "&package=com.ss.android.ugc.aweme.lite&mcc_mnc=46001&gold_container=1&cpu_support64=true&host_abi=armeabi-v7a&is_guest_mode=0&app_type=normal&minor_status=0&appTheme=dark&need_personal_recommend=1&is_android_pad=0&ts=" + _0x2080ff + "&status_bar_height=29";
      const _0x2caca7 = {
        "url": _0x2ede08,
        "headers": _0x4a755b(_0x2ede08),
        "body": "{}"
      };
      $.post(_0x2caca7, async (_0x2708c3, _0x5e40e5, _0xde5ad7) => {
        try {
          _0xde5ad7 && (_0xde5ad7 = JSON.parse(_0xde5ad7), $.log("账号[" + _0x4b4086 + "]签到: " + _0xde5ad7.err_tips));
        } catch (_0x3dd5fa) {
          $.logErr(_0x3dd5fa, _0x5e40e5);
        } finally {
          _0x1dabda(_0xde5ad7);
        }
      });
    });
  }
  function _0x35a2d4() {
    return new Promise(_0x1be8ed => {
      {
        let _0x24cddd = "https://aweme.snssdk.com/luckycat/aweme/v1/task/done/excitation_ad_signin?mode=done&update_version_code=25109900&oaid=5992671818827601&os_api=29&device_platform=android&ac=wifi&channel=bf_1007913_2329_47_3&iid=" + _0x1a55ef + "&device_id=" + _0x3378b5 + "&app_name=" + _0x14f5ec + "&version_name=" + _0x225c02 + "&aid=" + _0x3552c9;
        const _0x139b1b = {
          "url": _0x24cddd,
          "headers": _0x4a755b(_0x24cddd),
          "body": "{}"
        };
        $.post(_0x139b1b, async (_0x30f793, _0x40187c, _0x391a82) => {
          try {
            if (_0x391a82) {
              _0x391a82 = JSON.parse(_0x391a82);
              $.log("账号[" + _0x4b4086 + "]签到视频: " + _0x391a82.err_tips);
            }
          } catch (_0x45a516) {
            $.logErr(_0x45a516, _0x40187c);
          } finally {
            _0x1be8ed(_0x391a82);
          }
        });
      }
    });
  }
  function _0x3fc788() {
    return new Promise(_0x2ce83c => {
      {
        let _0x366baf = "" + _0x415133;
        const _0xd28664 = {
          "url": _0x366baf,
          "headers": _0x4a755b(_0x366baf),
          "body": "{}"
        };
        $.post(_0xd28664, async (_0x9575fb, _0x3c0b03, _0x8061c5) => {
          try {
            {
              if (_0x8061c5) {
                _0x8061c5 = JSON.parse(_0x8061c5);
                if (_0x8061c5.err_no == 0) {
                  _0x44973e = true;
                  $.log("账号[" + _0x4b4086 + "]" + _0x8061c5.data.success_desc + ": " + _0x8061c5.data.amount + "金币");
                  $.log("账号[" + _0x4b4086 + "]下次开宝箱时间为：" + $.time("yyyy-MM-dd HH:mm:ss", _0x8061c5.data.next_time * 1000));
                  let _0x4c5f44 = _0x8061c5.data.excitation_ad_info;
                  _0x4c5f44 && (_0x4c5f44.amount = _0x8061c5.data.amount, _0x4c5f44.ad_alias_position = "box", $.log("账号[" + _0x4b4086 + "]开宝箱-看广告视频预计再赚" + _0x4c5f44.score_amount + "金币"), await _0x53f6e0(_0x4c5f44));
                } else {}
              }
            }
          } catch (_0x31a26e) {
            $.logErr(_0x31a26e, _0x3c0b03);
          } finally {
            _0x2ce83c(_0x8061c5);
          }
        });
      }
    });
  }
  function _0xe9a49d(_0x5ae4d2 = "excitation_ad", _0x26113f = "", _0x2b97a6 = 0) {
    return new Promise(_0xb7e45d => {
      let _0x2080dc = "https://aweme.snssdk.com/luckycat/aweme/v1/task/done/excitation_ad/one_more?_request_from=web&iid=" + _0x1a55ef + "&device_id=" + _0x3378b5 + "&app_name=" + _0x14f5ec + "&version_name=" + _0x225c02 + "&aid=" + _0x3552c9 + "&device_platform=android&dpi=411&update_version_code=25109900";
      const _0x402038 = {
        "url": _0x2080dc,
        "headers": _0x4a755b(_0x2080dc),
        "body": "{\"task_key\":\"" + _0x5ae4d2 + "\",\"rit\":\"28038\",\"creator_id\":\"12315000\",\"one_more_round\":" + _0x2b97a6 + "}"
      };
      $.post(_0x402038, async (_0x307987, _0x217c88, _0x169881) => {
        try {
          if (_0x169881) {
            _0x169881 = JSON.parse(_0x169881);
            _0x169881.err_no == 0 ? $.log("账号[" + _0x4b4086 + "]" + (_0x26113f ? _0x26113f : _0x5ae4d2) + ": 获得" + _0x169881.data.amount + "金币") : $.log("账号[" + _0x4b4086 + "]" + (_0x26113f ? _0x26113f : _0x5ae4d2) + ": " + _0x169881.err_tips);
          }
        } catch (_0x4471ea) {
          $.logErr(_0x4471ea, _0x217c88);
        } finally {
          _0xb7e45d(_0x169881);
        }
      });
    });
  }
  function _0x53f6e0(_0x1d8f44) {
    return new Promise(_0x3bbba1 => {
      let _0x4d19c2 = "https://aweme.snssdk.com/luckycat/aweme/v1/task/done/" + _0x1d8f44.task_key + "?_request_from=web&iid=" + _0x1a55ef + "&device_id=" + _0x3378b5 + "&app_name=" + _0x14f5ec + "&version_name=" + _0x225c02 + "&aid=" + _0x3552c9 + "&device_platform=android&dpi=411&update_version_code=25109900";
      const _0x4f9d2 = {
        "url": _0x4d19c2,
        "headers": _0x4a755b(_0x4d19c2),
        "body": "{\"task_key\":\"" + _0x1d8f44.task_key + "\",\"amount\":\"" + _0x1d8f44.score_amount + "\",\"ad_rit\":\"" + _0x1d8f44.ad_id + "\",\"ad_inspire\":\"{\"score_amount\":\"" + _0x1d8f44.score_amount + "\",\"amount\":\"" + _0x1d8f44.amount + "\",\"req_id\":\"" + _0x1d8f44.req_id + "\"}\",\"ad_alias_position\":\"" + _0x1d8f44.ad_alias_position + "\",\"timeout\":4000}"
      };
      $.post(_0x4f9d2, async (_0x4f2602, _0x4d517b, _0x1195af) => {
        try {
          _0x1195af && (_0x1195af = JSON.parse(_0x1195af), _0x1195af.err_no == 0 ? $.log("账号[" + _0x4b4086 + "]" + _0x1195af.data.content + ": " + _0x1195af.data.amount + "金币") : $.log("账号[" + _0x4b4086 + "]看广告视频: " + _0x1195af.err_tips));
        } catch (_0x52109c) {
          $.logErr(_0x52109c, _0x4d517b);
        } finally {
          _0x3bbba1(_0x1195af);
        }
      });
    });
  }
  function _0x291839() {
    return new Promise(_0x42c3a3 => {
      {
        let _0x233bc7 = "https://aweme.snssdk.com/luckycat/aweme/v1/task/walk/step_submit?iid=" + _0x1a55ef + "&device_id=" + _0x3378b5 + "&app_name=" + _0x14f5ec + "&version_name=" + _0x225c02 + "&aid=" + _0x3552c9 + "&device_platform=android&dpi=411&update_version_code=25109900";
        const _0x20fe68 = {
          "url": _0x233bc7,
          "headers": _0x4a755b(_0x233bc7),
          "body": "{\"step\":" + parseInt(10000 + Math.random() * 10000 + "") + ",\"submit_time\":" + parseInt(new Date().getTime() / 1000 + "") + "}"
        };
        $.post(_0x20fe68, async (_0x593799, _0x29ab38, _0xe4bc7d) => {
          try {
            _0xe4bc7d && (_0xe4bc7d = JSON.parse(_0xe4bc7d), _0xe4bc7d.err_no == 0 ? ($.log("账号[" + _0x4b4086 + "]上传步数：今日步数" + _0xe4bc7d.data.today_step + "步"), await _0x2b78a3()) : $.log("账号[" + _0x4b4086 + "]上传步数: " + _0xe4bc7d.err_tips));
          } catch (_0x508dda) {
            $.logErr(_0x508dda, _0x29ab38);
          } finally {
            _0x42c3a3(_0xe4bc7d);
          }
        });
      }
    });
  }
  function _0x2b78a3() {
    return new Promise(_0x462d3e => {
      {
        let _0x709a66 = "https://aweme.snssdk.com/luckycat/aweme/v1/task/walk/receive_step_reward?iid=" + _0x1a55ef + "&device_id=" + _0x3378b5 + "&app_name=" + _0x14f5ec + "&version_name=" + _0x225c02 + "&aid=" + _0x3552c9 + "&device_platform=android&dpi=411&update_version_code=25109900";
        const _0x51c558 = {
          "url": _0x709a66,
          "headers": _0x4a755b(_0x709a66),
          "body": ""
        };
        $.post(_0x51c558, async (_0xe4446a, _0x36bffd, _0x2da2b5) => {
          try {
            {
              if (_0x2da2b5) {
                _0x2da2b5 = JSON.parse(_0x2da2b5);
                if (_0x2da2b5.err_no == 0) $.log("账号[" + _0x4b4086 + "]领取步数奖励：" + _0x2da2b5.data.reward_amount + "金币");else {
                  $.log("账号[" + _0x4b4086 + "]领取步数奖励: " + _0x2da2b5.err_tips);
                }
              }
            }
          } catch (_0x1b5956) {
            $.logErr(_0x1b5956, _0x36bffd);
          } finally {
            _0x462d3e(_0x2da2b5);
          }
        });
      }
    });
  }
  function _0x421268() {
    return new Promise(_0x3b630b => {
      {
        let _0x5a9860 = "https://aweme.snssdk.com/luckycat/aweme/v1/task/done/excitation_ad?mode=done&iid=" + _0x1a55ef + "&device_id=" + _0x3378b5 + "&app_name=" + _0x14f5ec + "&version_name=" + _0x225c02 + "&aid=" + _0x3552c9 + "&device_platform=android&dpi=411&update_version_code=25109900";
        const _0x214aaf = {
          "url": _0x5a9860,
          "headers": _0x4a755b(_0x5a9860),
          "body": "{\"from\":\"excitation_ad\"}"
        };
        $.post(_0x214aaf, async (_0x28fc02, _0x5b2f08, _0x3902cb) => {
          try {
            _0x3902cb && (_0x3902cb = JSON.parse(_0x3902cb), _0x3902cb.err_no == 0 ? $.log("账号[" + _0x4b4086 + "]看广告: 获得" + _0x3902cb.data.amount + "金币") : $.log("账号[" + _0x4b4086 + "]看广告: " + _0x3902cb.err_tips));
          } catch (_0x3dbea6) {
            $.logErr(_0x3dbea6, _0x5b2f08);
          } finally {
            _0x3b630b(_0x3902cb);
          }
        });
      }
    });
  }
  function _0x56ee73() {
    return new Promise(_0x4429fb => {
      {
        let _0xac5960 = "https://aweme.snssdk.com/luckycat/aweme/v1/task/done/shopping_gold?mode=done&iid=" + _0x1a55ef + "&device_id=" + _0x3378b5 + "&app_name=" + _0x14f5ec + "&version_name=" + _0x225c02 + "&aid=" + _0x3552c9 + "&device_platform=android&dpi=411&update_version_code=2509900&device_platform=android&ssmix=a&device_type=16s%20Pro&device_brand=meizu&language=zh&os_api=29&os_version=10&openudid=24f98283275a56fc&manifest_version_code=250101&resolution=1080*2232&dpi=480&_rticket=1683899803704&mcc_mnc=46011&tool_grey_user=0&cpu_support64=true&host_abi=armeabi-v7";
        const _0x5d6461 = {
          "url": _0xac5960,
          "headers": _0x4a755b(_0xac5960),
          "body": "body=11222"
        };
        $.post(_0x5d6461, async (_0x4e56ee, _0x7cef62, _0x8b5a1e) => {
          try {
            if (_0x8b5a1e) {
              {
                _0x8b5a1e = JSON.parse(_0x8b5a1e);
                if (_0x8b5a1e.err_no == 0) $.log("账号[" + _0x4b4086 + "]逛街: " + _0x8b5a1e.data.reward_text);else {
                  $.log("账号[" + _0x4b4086 + "]逛街: " + _0x8b5a1e.err_tips);
                }
              }
            }
          } catch (_0x333279) {
            $.logErr(_0x333279, _0x7cef62);
          } finally {
            _0x4429fb(_0x8b5a1e);
          }
        });
      }
    });
  }
  function _0x1216b9() {
    return new Promise(_0x459eff => {
      let _0x4c94c9 = "https://aweme.snssdk.com/luckycat/aweme/v1/task/done/excitation_ad_treasure_box?mode=done&iid=" + _0x1a55ef + "&device_id=" + _0x3378b5 + "&app_name=" + _0x14f5ec + "&version_name=" + _0x225c02 + "&aid=" + _0x3552c9 + "&device_platform=android&dpi=411&update_version_code=25109900";
      const _0x2231dc = {
        "url": _0x4c94c9,
        "body": "body=11222"
      };
      $.post(_0x2231dc, async (_0x193306, _0xe61c5b, _0x3fd62f) => {
        try {
          _0x3fd62f && (_0x3fd62f = JSON.parse(_0x3fd62f), _0x3fd62f.err_no == 0 ? $.log("账号[" + _0x4b4086 + "]开宝箱视频: " + _0x3fd62f.data.amount + "金币") : $.log("账号[" + _0x4b4086 + "]开宝箱视频: " + _0x3fd62f.err_tips));
        } catch (_0x5dff7f) {
          $.logErr(_0x5dff7f, _0xe61c5b);
        } finally {
          _0x459eff(_0x3fd62f);
        }
      });
    });
  }
  function _0x5b16e1() {
    return new Promise(_0x210c33 => {
      let _0x145b75 = "https://aweme.snssdk.com/luckycat/aweme/v1/task/excitation_ad/one_more/detail?task_key=excitation_ad_treasure_box&rit=28038&creator_id=12317000&one_more_round=0&mode=done&iid=" + _0x1a55ef + "&device_id=" + _0x3378b5 + "&app_name=" + _0x14f5ec + "&version_name=" + _0x225c02 + "&aid=" + _0x3552c9 + "&device_platform=android&dpi=411&update_version_code=25109900";
      const _0x4df53f = {
        "url": _0x145b75,
        "headers": _0x4a755b(_0x145b75)
      };
      $.get(_0x4df53f, async (_0x59e358, _0x409ec3, _0x203d3f) => {
        try {
          _0x203d3f && (_0x203d3f = JSON.parse(_0x203d3f), _0x203d3f.err_no == 0 ? _0x203d3f.data.has_one_more && (await _0xe9a49d("excitation_ad_treasure_box", "宝箱连续视频")) : $.log("账号[" + _0x4b4086 + "]宝箱连续视频下次奖励: " + _0x203d3f.err_tips));
        } catch (_0x5c51f5) {
          $.logErr(_0x5c51f5, _0x409ec3);
        } finally {
          _0x210c33(_0x203d3f);
        }
      });
    });
  }
  function _0x1edcaa() {
    return new Promise(_0x21a30d => {
      let _0x308d76 = "https://aweme.snssdk.com/luckycat/aweme/v1/task/done/search_excitation?mode=done&iid=" + _0x1a55ef + "&device_id=" + _0x3378b5 + "&app_name=" + _0x14f5ec + "&version_name=" + _0x225c02 + "&aid=" + _0x3552c9 + "&device_platform=android&dpi=411&update_version_code=25109900";
      const _0x2036ae = {
        "url": _0x308d76,
        "headers": _0x4a755b(_0x308d76),
        "body": ""
      };
      $.post(_0x2036ae, async (_0x371fb9, _0x126fc8, _0x23938f) => {
        try {
          {
            if (_0x23938f) {
              _0x23938f = JSON.parse(_0x23938f);
              if (_0x23938f.err_no == 0) $.log("账号[" + _0x4b4086 + "]领取搜索奖励: " + _0x23938f.data.score_amount + "金币");else {
                $.log("账号[" + _0x4b4086 + "]领取搜索奖励: " + _0x23938f.err_tips);
              }
            }
          }
        } catch (_0x5c4f58) {
          $.logErr(_0x5c4f58, _0x126fc8);
        } finally {
          _0x21a30d(_0x23938f);
        }
      });
    });
  }
  function _0x5a592a(_0x2089e2, _0x37843a, _0x17e48f = {}) {
    return new Promise(_0x386df1 => {
      let _0x4ef93a = "https://aweme.snssdk.com/luckycat/aweme/v1/task/done/" + _0x2089e2 + "?mode=done&iid=" + _0x1a55ef + "&device_id=" + _0x3378b5 + "&app_name=" + _0x14f5ec + "&version_name=" + _0x225c02 + "&aid=" + _0x3552c9 + "&device_platform=android&dpi=411&update_version_code=25109900";
      const _0x39d77f = {
        "url": _0x4ef93a,
        "headers": _0x4a755b(_0x4ef93a),
        "body": JSON.stringify(_0x17e48f)
      };
      $.post(_0x39d77f, async (_0x1a8333, _0x1998e6, _0x54a7bc) => {
        try {
          {
            if (_0x54a7bc) {
              _0x54a7bc = JSON.parse(_0x54a7bc);
              if (_0x54a7bc.err_no == 0) {
                $.log("账号[" + _0x4b4086 + "]" + _0x37843a + ": " + _0x54a7bc.data.score_amount + "金币");
              } else $.log("账号[" + _0x4b4086 + "]" + _0x37843a + ": " + _0x54a7bc.err_tips);
            }
          }
        } catch (_0x6f90c7) {
          $.logErr(_0x6f90c7, _0x1998e6);
        } finally {
          _0x386df1(_0x54a7bc);
        }
      });
    });
  }
  function _0x5e131b(_0x469243 = "吃饭补贴") {
    return new Promise(_0x3f6352 => {
      {
        let _0x4a4530 = parseInt($.time("HH")),
          _0x2a4af0 = 0;
        if (_0x4a4530 > 5 && _0x4a4530 < 9) _0x2a4af0 = 0;else {
          if (_0x4a4530 > 11 && _0x4a4530 < 14) _0x2a4af0 = 1;else {
            if (_0x4a4530 > 17 && _0x4a4530 < 19) {
              _0x2a4af0 = 2;
            } else {
              if (_0x4a4530 > 21 && _0x4a4530 < 23) {
                _0x2a4af0 = 3;
              } else {
                _0x3f6352();
                return;
              }
            }
          }
        }
        let _0xf75a70 = {
            "meal_index": _0x2a4af0,
            "aid": "2329"
          },
          _0x4ac340 = "https://gecko.zijieapi.com/ttgame/meal/check_in?mode=done&iid=" + _0x1a55ef + "&device_id=" + _0x3378b5 + "&app_name=" + _0x14f5ec + "&version_name=" + _0x225c02 + "&aid=" + _0x3552c9 + "&device_platform=android&dpi=411&update_version_code=25109900";
        const _0x2f5b1a = {
          "url": _0x4ac340,
          "headers": _0x4a755b(_0x4ac340),
          "body": JSON.stringify(_0xf75a70)
        };
        $.post(_0x2f5b1a, async (_0x18ede1, _0x21ace5, _0x45cffb) => {
          try {
            if (_0x45cffb) {
              _0x45cffb = JSON.parse(_0x45cffb);
              _0x45cffb.code == 0 ? ($.log("账号[" + _0x4b4086 + "]" + _0x469243 + ": " + _0x45cffb.data.reward + "金币"), await _0xe9a49d("meal_excitation_ad", "吃饭补贴视频")) : $.log("账号[" + _0x4b4086 + "]" + _0x469243 + ": " + _0x45cffb.message);
            }
          } catch (_0x2ae46f) {
            $.logErr(_0x2ae46f, _0x21ace5);
          } finally {
            _0x3f6352(_0x45cffb);
          }
        });
      }
    });
  }
}
function Env(_0x4e302c, _0x5ce487) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0xbba2b {
    constructor(_0x540f62) {
      this.env = _0x540f62;
    }
    ["send"](_0x116d30, _0x3610da = "GET") {
      {
        _0x116d30 = "string" == typeof _0x116d30 ? {
          "url": _0x116d30
        } : _0x116d30;
        let _0x620610 = this.get;
        "POST" === _0x3610da && (_0x620610 = this.post);
        return new Promise((_0x220dd2, _0x4cba8e) => {
          _0x620610.call(this, _0x116d30, (_0x5c54bf, _0x1a627d, _0x6ec302) => {
            _0x5c54bf ? _0x4cba8e(_0x5c54bf) : _0x220dd2(_0x1a627d);
          });
        });
      }
    }
    ["get"](_0x317f09) {
      return this.send.call(this.env, _0x317f09);
    }
    ["post"](_0x3adc94) {
      return this.send.call(this.env, _0x3adc94, "POST");
    }
  }
  return new class {
    constructor(_0x45b394, _0x2183a9) {
      this.name = _0x45b394;
      this.http = new _0xbba2b(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x2183a9);
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
    ["toObj"](_0x71ed5e, _0x2ae82d = null) {
      try {
        return JSON.parse(_0x71ed5e);
      } catch {
        return _0x2ae82d;
      }
    }
    ["toStr"](_0x53ea47, _0x3d51de = null) {
      try {
        return JSON.stringify(_0x53ea47);
      } catch {
        return _0x3d51de;
      }
    }
    ["getjson"](_0x417987, _0x2d4148) {
      let _0x4d756c = _0x2d4148;
      const _0x39e352 = this.getdata(_0x417987);
      if (_0x39e352) try {
        _0x4d756c = JSON.parse(this.getdata(_0x417987));
      } catch {}
      return _0x4d756c;
    }
    ["setjson"](_0x495c79, _0x41e697) {
      try {
        return this.setdata(JSON.stringify(_0x495c79), _0x41e697);
      } catch {
        return false;
      }
    }
    ["getScript"](_0x5149e4) {
      return new Promise(_0x2d593f => {
        this.get({
          "url": _0x5149e4
        }, (_0x1c0dc2, _0x19a6a4, _0x16d865) => _0x2d593f(_0x16d865));
      });
    }
    ["runScript"](_0x349a5c, _0x31c633) {
      return new Promise(_0x84578e => {
        let _0x111103 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x111103 = _0x111103 ? _0x111103.replace(/\n/g, "").trim() : _0x111103;
        let _0x4b2d58 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x4b2d58 = _0x4b2d58 ? 1 * _0x4b2d58 : 20;
        _0x4b2d58 = _0x31c633 && _0x31c633.timeout ? _0x31c633.timeout : _0x4b2d58;
        const [_0x242f14, _0xc26426] = _0x111103.split("@"),
          _0x287850 = {
            "url": "http://" + _0xc26426 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x349a5c,
              "mock_type": "cron",
              "timeout": _0x4b2d58
            },
            "headers": {
              "X-Key": _0x242f14,
              "Accept": "*/*"
            }
          };
        this.post(_0x287850, (_0x53a075, _0x2f01a0, _0x613348) => _0x84578e(_0x613348));
      }).catch(_0x26ba15 => this.logErr(_0x26ba15));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x43eeb1 = this.path.resolve(this.dataFile),
          _0x30a505 = this.path.resolve(process.cwd(), this.dataFile),
          _0x55d9de = this.fs.existsSync(_0x43eeb1),
          _0x5e35de = !_0x55d9de && this.fs.existsSync(_0x30a505);
        if (!_0x55d9de && !_0x5e35de) return {};
        {
          const _0x3ec83d = _0x55d9de ? _0x43eeb1 : _0x30a505;
          try {
            return JSON.parse(this.fs.readFileSync(_0x3ec83d));
          } catch (_0x401466) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x40730e = this.path.resolve(this.dataFile),
            _0x4e6b1c = this.path.resolve(process.cwd(), this.dataFile),
            _0x3ca307 = this.fs.existsSync(_0x40730e),
            _0x19c2ec = !_0x3ca307 && this.fs.existsSync(_0x4e6b1c),
            _0xce1489 = JSON.stringify(this.data);
          _0x3ca307 ? this.fs.writeFileSync(_0x40730e, _0xce1489) : _0x19c2ec ? this.fs.writeFileSync(_0x4e6b1c, _0xce1489) : this.fs.writeFileSync(_0x40730e, _0xce1489);
        }
      }
    }
    ["lodash_get"](_0x2db767, _0x4b2b5f, _0x4a4677) {
      const _0x27d25a = _0x4b2b5f.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x195b2a = _0x2db767;
      for (const _0x370c9c of _0x27d25a) if (_0x195b2a = Object(_0x195b2a)[_0x370c9c], undefined === _0x195b2a) return _0x4a4677;
      return _0x195b2a;
    }
    ["lodash_set"](_0x731251, _0x38b9f2, _0x301cb2) {
      return Object(_0x731251) !== _0x731251 ? _0x731251 : (Array.isArray(_0x38b9f2) || (_0x38b9f2 = _0x38b9f2.toString().match(/[^.[\]]+/g) || []), _0x38b9f2.slice(0, -1).reduce((_0x2ed7c0, _0x5d9963, _0x51b6d4) => Object(_0x2ed7c0[_0x5d9963]) === _0x2ed7c0[_0x5d9963] ? _0x2ed7c0[_0x5d9963] : _0x2ed7c0[_0x5d9963] = Math.abs(_0x38b9f2[_0x51b6d4 + 1]) >> 0 == +_0x38b9f2[_0x51b6d4 + 1] ? [] : {}, _0x731251)[_0x38b9f2[_0x38b9f2.length - 1]] = _0x301cb2, _0x731251);
    }
    ["getdata"](_0x14a4e2) {
      let _0x3e4cdc = this.getval(_0x14a4e2);
      if (/^@/.test(_0x14a4e2)) {
        {
          const [, _0x3d8341, _0x52b42e] = /^@(.*?)\.(.*?)$/.exec(_0x14a4e2),
            _0x5e99d4 = _0x3d8341 ? this.getval(_0x3d8341) : "";
          if (_0x5e99d4) try {
            const _0x2793b9 = JSON.parse(_0x5e99d4);
            _0x3e4cdc = _0x2793b9 ? this.lodash_get(_0x2793b9, _0x52b42e, "") : _0x3e4cdc;
          } catch (_0x1c5e59) {
            _0x3e4cdc = "";
          }
        }
      }
      return _0x3e4cdc;
    }
    ["setdata"](_0x4201d7, _0x30c8fe) {
      {
        let _0x2437f7 = false;
        if (/^@/.test(_0x30c8fe)) {
          const [, _0x75984b, _0x3c3b39] = /^@(.*?)\.(.*?)$/.exec(_0x30c8fe),
            _0x5b29a1 = this.getval(_0x75984b),
            _0x2f21ef = _0x75984b ? "null" === _0x5b29a1 ? null : _0x5b29a1 || "{}" : "{}";
          try {
            const _0x290079 = JSON.parse(_0x2f21ef);
            this.lodash_set(_0x290079, _0x3c3b39, _0x4201d7);
            _0x2437f7 = this.setval(JSON.stringify(_0x290079), _0x75984b);
          } catch (_0x5e7539) {
            const _0x532a67 = {};
            this.lodash_set(_0x532a67, _0x3c3b39, _0x4201d7);
            _0x2437f7 = this.setval(JSON.stringify(_0x532a67), _0x75984b);
          }
        } else _0x2437f7 = this.setval(_0x4201d7, _0x30c8fe);
        return _0x2437f7;
      }
    }
    ["getval"](_0x266dd8) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x266dd8) : this.isQuanX() ? $prefs.valueForKey(_0x266dd8) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x266dd8]) : this.data && this.data[_0x266dd8] || null;
    }
    ["setval"](_0x531b42, _0x22a570) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x531b42, _0x22a570) : this.isQuanX() ? $prefs.setValueForKey(_0x531b42, _0x22a570) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x22a570] = _0x531b42, this.writedata(), true) : this.data && this.data[_0x22a570] || null;
    }
    ["initGotEnv"](_0x4093bc) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x4093bc && (_0x4093bc.headers = _0x4093bc.headers ? _0x4093bc.headers : {}, undefined === _0x4093bc.headers.Cookie && undefined === _0x4093bc.cookieJar && (_0x4093bc.cookieJar = this.ckjar));
    }
    ["get"](_0x106cf5, _0x487ad2 = () => {}) {
      _0x106cf5.headers && (delete _0x106cf5.headers["Content-Type"], delete _0x106cf5.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x106cf5.headers = _0x106cf5.headers || {}, Object.assign(_0x106cf5.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(_0x106cf5, (_0x67f758, _0x559668, _0x20822c) => {
        !_0x67f758 && _0x559668 && (_0x559668.body = _0x20822c, _0x559668.statusCode = _0x559668.status);
        _0x487ad2(_0x67f758, _0x559668, _0x20822c);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x106cf5.opts = _0x106cf5.opts || {}, Object.assign(_0x106cf5.opts, {
        "hints": false
      })), $task.fetch(_0x106cf5).then(_0x1d3b3e => {
        const {
          statusCode: _0x46c76f,
          statusCode: _0x4c970f,
          headers: _0x28dfed,
          body: _0x508561
        } = _0x1d3b3e;
        _0x487ad2(null, {
          "status": _0x46c76f,
          "statusCode": _0x4c970f,
          "headers": _0x28dfed,
          "body": _0x508561
        }, _0x508561);
      }, _0x2b07fd => _0x487ad2(_0x2b07fd))) : this.isNode() && (this.initGotEnv(_0x106cf5), this.got(_0x106cf5).on("redirect", (_0x373e39, _0x212ff6) => {
        try {
          if (_0x373e39.headers["set-cookie"]) {
            const _0x26ab95 = _0x373e39.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x26ab95 && this.ckjar.setCookieSync(_0x26ab95, null);
            _0x212ff6.cookieJar = this.ckjar;
          }
        } catch (_0x1e8f86) {
          this.logErr(_0x1e8f86);
        }
      }).then(_0x9e6f24 => {
        const {
          statusCode: _0x7dbc1d,
          statusCode: _0x77df6d,
          headers: _0x32e1ca,
          body: _0x3089cd
        } = _0x9e6f24;
        _0x487ad2(null, {
          "status": _0x7dbc1d,
          "statusCode": _0x77df6d,
          "headers": _0x32e1ca,
          "body": _0x3089cd
        }, _0x3089cd);
      }, _0x25511c => {
        const {
          message: _0x498bda,
          response: _0x1f6509
        } = _0x25511c;
        _0x487ad2(_0x498bda, _0x1f6509, _0x1f6509 && _0x1f6509.body);
      }));
    }
    ["post"](_0x598719, _0x5a7d78 = () => {}) {
      if (_0x598719.body && _0x598719.headers && !_0x598719.headers["Content-Type"] && (_0x598719.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x598719.headers && delete _0x598719.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x598719.headers = _0x598719.headers || {}, Object.assign(_0x598719.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(_0x598719, (_0x5c3e65, _0x1693ae, _0x362ec6) => {
        !_0x5c3e65 && _0x1693ae && (_0x1693ae.body = _0x362ec6, _0x1693ae.statusCode = _0x1693ae.status);
        _0x5a7d78(_0x5c3e65, _0x1693ae, _0x362ec6);
      });else {
        if (this.isQuanX()) _0x598719.method = "POST", this.isNeedRewrite && (_0x598719.opts = _0x598719.opts || {}, Object.assign(_0x598719.opts, {
          "hints": false
        })), $task.fetch(_0x598719).then(_0x36fb8a => {
          {
            const {
              statusCode: _0x21d924,
              statusCode: _0x1863f0,
              headers: _0x16da2f,
              body: _0x10a273
            } = _0x36fb8a;
            _0x5a7d78(null, {
              "status": _0x21d924,
              "statusCode": _0x1863f0,
              "headers": _0x16da2f,
              "body": _0x10a273
            }, _0x10a273);
          }
        }, _0x113ab5 => _0x5a7d78(_0x113ab5));else {
          if (this.isNode()) {
            {
              this.initGotEnv(_0x598719);
              const {
                url: _0x530aac,
                ..._0x2c8a92
              } = _0x598719;
              this.got.post(_0x530aac, _0x2c8a92).then(_0x2915c3 => {
                const {
                  statusCode: _0x328583,
                  statusCode: _0x29bdd1,
                  headers: _0x47925d,
                  body: _0x4ac5c8
                } = _0x2915c3;
                _0x5a7d78(null, {
                  "status": _0x328583,
                  "statusCode": _0x29bdd1,
                  "headers": _0x47925d,
                  "body": _0x4ac5c8
                }, _0x4ac5c8);
              }, _0x337b8e => {
                const {
                  message: _0x4ae90c,
                  response: _0x55c0ee
                } = _0x337b8e;
                _0x5a7d78(_0x4ae90c, _0x55c0ee, _0x55c0ee && _0x55c0ee.body);
              });
            }
          }
        }
      }
    }
    ["time"](_0x501e78, _0x5d35b0 = null) {
      {
        const _0x1d3ca3 = _0x5d35b0 ? new Date(_0x5d35b0) : new Date();
        let _0x25bfb4 = {
          "M+": _0x1d3ca3.getMonth() + 1,
          "d+": _0x1d3ca3.getDate(),
          "H+": _0x1d3ca3.getHours(),
          "m+": _0x1d3ca3.getMinutes(),
          "s+": _0x1d3ca3.getSeconds(),
          "q+": Math.floor((_0x1d3ca3.getMonth() + 3) / 3),
          "S": _0x1d3ca3.getMilliseconds()
        };
        /(y+)/.test(_0x501e78) && (_0x501e78 = _0x501e78.replace(RegExp.$1, (_0x1d3ca3.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let _0x1d89e8 in _0x25bfb4) new RegExp("(" + _0x1d89e8 + ")").test(_0x501e78) && (_0x501e78 = _0x501e78.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x25bfb4[_0x1d89e8] : ("00" + _0x25bfb4[_0x1d89e8]).substr(("" + _0x25bfb4[_0x1d89e8]).length)));
        return _0x501e78;
      }
    }
    ["msg"](_0x1fe9b6 = _0x4e302c, _0x4803c9 = "", _0x2d2e48 = "", _0x4c53eb) {
      const _0x43766f = _0x91d09b => {
        if (!_0x91d09b) return _0x91d09b;
        if ("string" == typeof _0x91d09b) return this.isLoon() ? _0x91d09b : this.isQuanX() ? {
          "open-url": _0x91d09b
        } : this.isSurge() ? {
          "url": _0x91d09b
        } : undefined;
        if ("object" == typeof _0x91d09b) {
          if (this.isLoon()) {
            let _0x380c46 = _0x91d09b.openUrl || _0x91d09b.url || _0x91d09b["open-url"],
              _0x1b15c5 = _0x91d09b.mediaUrl || _0x91d09b["media-url"];
            return {
              "openUrl": _0x380c46,
              "mediaUrl": _0x1b15c5
            };
          }
          if (this.isQuanX()) {
            let _0x191678 = _0x91d09b["open-url"] || _0x91d09b.url || _0x91d09b.openUrl,
              _0x2a4cc0 = _0x91d09b["media-url"] || _0x91d09b.mediaUrl;
            return {
              "open-url": _0x191678,
              "media-url": _0x2a4cc0
            };
          }
          if (this.isSurge()) {
            let _0x1ed940 = _0x91d09b.url || _0x91d09b.openUrl || _0x91d09b["open-url"];
            return {
              "url": _0x1ed940
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x1fe9b6, _0x4803c9, _0x2d2e48, _0x43766f(_0x4c53eb)) : this.isQuanX() && $notify(_0x1fe9b6, _0x4803c9, _0x2d2e48, _0x43766f(_0x4c53eb))), !this.isMuteLog) {
        let _0x76d0e6 = ["", "==============📣系统通知📣=============="];
        _0x76d0e6.push(_0x1fe9b6);
        _0x4803c9 && _0x76d0e6.push(_0x4803c9);
        _0x2d2e48 && _0x76d0e6.push(_0x2d2e48);
        console.log(_0x76d0e6.join("\n"));
        this.logs = this.logs.concat(_0x76d0e6);
      }
    }
    ["log"](..._0x10e513) {
      _0x10e513.length > 0 && (this.logs = [...this.logs, ..._0x10e513]);
      console.log(_0x10e513.join(this.logSeparator));
    }
    ["logErr"](_0x2ce50c, _0x3886e4) {
      {
        const _0x723a49 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        _0x723a49 ? this.log("", "❗️" + this.name + ", 错误!", _0x2ce50c.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x2ce50c);
      }
    }
    ["wait"](_0x16a983) {
      return new Promise(_0x53eb2a => setTimeout(_0x53eb2a, _0x16a983));
    }
    ["done"](_0x13f483 = {}) {
      {
        const _0x1c9ba1 = new Date().getTime(),
          _0x5e3b8c = (_0x1c9ba1 - this.startTime) / 1000;
      }
    }
  }(_0x4e302c, _0x5ce487);
}