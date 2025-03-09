//Sun Mar 09 2025 06:37:35 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let scriptVersion = "v1.3",
  update_tines = "2023-07-23",
  update_data = "2024-09-15",
  name_data = "10",
  scriptVersionLatest = "v1.3",
  userCookie = ($.isNode() ? process.env.lekebo_jrttjsb_Cookie : $.getdata("lekebo_jrttjsb_Cookie")) || "",
  userList = [],
  readList = [],
  userIdx = 0,
  rndGroupId = Math.floor(Math.random() * 7000000000000000000),
  date = require("silly-datetime"),
  signTime = date.format(new Date(), "YYYY-MM-DD"),
  curTime = new Date(),
  curHour = curTime.getHours(),
  times = Math.round(new Date().getTime() / 1000).toString(),
  timestamp = Math.round(new Date().getTime()).toString(),
  host = "api5-normal-hl.toutiaoapi.com",
  hostname = "https://" + host;
async function start() {
  taskall = [];
  for (let _0x5e13cb of userList) {
    taskall.push(await _0x5e13cb.getMemberScore(2000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行账号签到赚钱 ================");
  taskall = [];
  for (let _0xd776fc of userList) {
    taskall.push(await _0xd776fc.signIn(2000));
    await $.wait(1000);
    taskall.push(await _0xd776fc.signin_video(2000));
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行账号走路赚金 ================");
  taskall = [];
  for (let _0x1879e7 of userList) {
    taskall.push(await _0x1879e7.step(2000));
    await $.wait(1000);
    taskall.push(await _0x1879e7.step_video(2000));
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行账号吃饭赚金 ================");
  taskall = [];
  for (let _0x1e768e of userList) {
    taskall.push(await _0x1e768e.doneEat(2000));
    await $.wait(1000);
    taskall.push(await _0x1e768e.doneeat_video(2000));
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行账号睡觉赚金 ================");
  taskall = [];
  for (let _0x4f22a9 of userList) {
    taskall.push(await _0x4f22a9.sleepstart(2000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行开宝箱赚金币 ================");
  taskall = [];
  for (let _0x34f80f of userList) {
    taskall.push(await _0x34f80f.treasure(2000));
    await $.wait(1000);
    taskall.push(await _0x34f80f.treasure_video(2000));
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行看广告赚金币 ================");
  taskall = [];
  for (let _0x5561ab of userList) {
    taskall.push(await _0x5561ab.advideo(2000));
    await $.wait(1000);
    taskall.push(await _0x5561ab.advideo_video(2000));
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行阅读文章赚金 ================");
  taskall = [];
  for (let _0x8c96a of userList) {
    taskall.push(await _0x8c96a.news(2000));
  }
  await Promise.all(taskall);
}
class UserInfo {
  constructor(_0x293e20) {
    this.index = ++userIdx;
    this.ck = _0x293e20.split("#");
    this.numvodie = "30";
  }
  async ["getMemberScore"](_0x57faef = 2000) {
    return new Promise(_0x3a2dc0 => {
      {
        let _0x253e25 = {
          "url": hostname + "/luckycat/lite/v1/task/page_data/?" + this.ck[0],
          "headers": {
            "Host": host,
            "Connection": "Keep-Alive",
            "Content-Type": "application/json",
            "User-Agent": this.ck[4],
            "Cookie": this.ck[1],
            "x-argus": this.ck[2],
            "x-ladon": this.ck[3]
          }
        };
        $.get(_0x253e25, async (_0x285e87, _0x44396d, _0x28859e) => {
          try {
            {
              if (_0x285e87) $.logErr(_0x285e87);else {
                let _0x191e9a = JSON.parse(_0x28859e);
                _0x191e9a.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】收益状况: 拥有:" + _0x191e9a.data.user_income.score_balance + "金币,余额:" + _0x191e9a.data.user_income.cash_balance / 100 + "元") : DoubleLog("\n ❌ 【" + this.index + "】收益状况: " + _0x191e9a.err_tips);
              }
            }
          } catch (_0x4daa86) {
            $.logErr(_0x4daa86, _0x44396d);
          } finally {
            _0x3a2dc0();
          }
        }, _0x57faef);
      }
    });
  }
  async ["getMemberScore1"](_0x5959bb = 2000) {
    return new Promise(_0x3d3d1a => {
      let _0x297d43 = {
        "url": hostname + "/luckycat/lite/v1/take_cash/take_cash_page?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        }
      };
      console.log(_0x297d43);
      $.get(_0x297d43, async (_0x5ee2ef, _0x47525f, _0x9891ff) => {
        try {
          {
            if (_0x5ee2ef) $.logErr(_0x5ee2ef);else {
              {
                let _0x3cd438 = JSON.parse(_0x9891ff);
                console.log(_0x3cd438);
              }
            }
          }
        } catch (_0x18ea47) {
          $.logErr(_0x18ea47, _0x47525f);
        } finally {
          _0x3d3d1a();
        }
      }, _0x5959bb);
    });
  }
  async ["signIn"](_0x253f7e = 2000) {
    return new Promise(_0x394143 => {
      let _0x36a4b7 = {
        "url": hostname + "/luckycat/lite/v1/task/page_data/?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        }
      };
      $.get(_0x36a4b7, async (_0x5a4f48, _0x462406, _0x54007a) => {
        try {
          {
            if (_0x5a4f48) $.logErr(_0x5a4f48);else {
              let _0x5420fa = JSON.parse(_0x54007a);
              _0x5420fa.err_no == 0 ? _0x5420fa.data.signin_detail.today_signed == true ? DoubleLog("\n ❌ 【" + this.index + "】签到信息: 今天已签到，已连续签到 " + _0x5420fa.data.signin_detail.days + " 天") : await this.open_signIn(2000) : DoubleLog("\n ❌ 【" + this.index + "】签到失败: " + _0x5420fa.err_tips);
            }
          }
        } catch (_0x511c38) {
          $.logErr(_0x511c38, _0x462406);
        } finally {
          _0x394143();
        }
      }, _0x253f7e);
    });
  }
  async ["open_signIn"](_0x4b98fb = 2000) {
    return new Promise(_0x1f414b => {
      {
        let _0x35fb05 = {
          "url": hostname + "/luckycat/lite/v1/sign_in/action?" + this.ck[0],
          "headers": {
            "Host": host,
            "Connection": "Keep-Alive",
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": this.ck[4],
            "Cookie": this.ck[1],
            "x-argus": this.ck[2],
            "x-ladon": this.ck[3]
          },
          "body": "{\"use_ecpm\": 0,\"rit\": \"coin\"}"
        };
        $.post(_0x35fb05, async (_0x258c66, _0x59199e, _0x3ed20b) => {
          try {
            if (_0x258c66) $.logErr(_0x258c66);else {
              let _0x61acf3 = JSON.parse(_0x3ed20b);
              _0x61acf3.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】签到成功: 获得 " + _0x61acf3.data.amount + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】签到失败: " + _0x61acf3.err_tips);
            }
          } catch (_0x213b63) {
            $.logErr(_0x213b63, _0x59199e);
          } finally {
            _0x1f414b();
          }
        }, _0x4b98fb);
      }
    });
  }
  async ["signin_video"](_0x103352 = 2000) {
    return new Promise(_0x2a9587 => {
      let _0x29ebc5 = {
        "url": hostname + "/luckycat/lite/v1/task/done/excitation_ad/?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        },
        "body": "{\"ad_id\":1,\"amount\":1200,\"ad_rit\":\"1\",\"extra_data\":{\"enter_from\":\"sign_in\"},\"task_key\":\"excitation_ad\",\"extra\":{\"task_name\":\"签到激励广告\",\"withdraw_amount\":0,\"track_id\":\"7258915816018610228\",\"enable_fuzzy_amount\":false,\"task_id\":\"187\"},\"task_id\":\"187\",\"ad_alias_position\":\"coin\",\"is_post_login\":false,\"ad_from\":\"coin\",\"score_source\":0,\"coin_count\":1200,\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":51,\"dynamic_settings_version\":51,\"poll_settings_version\":0,\"exci_extra\":{\"cid\":1771938154365016,\"req_id\":\"20230723154050EF525684E1A54A6C45C1\",\"rit\":20047},\"aggre_chain_id\":\"\"}"
      };
      $.post(_0x29ebc5, async (_0x3cb2e9, _0x455a5d, _0x34dff3) => {
        try {
          {
            if (_0x3cb2e9) $.logErr(_0x3cb2e9);else {
              let _0x561e79 = JSON.parse(_0x34dff3);
              if (_0x561e79.err_no == 0) DoubleLog("\n ✅ 【" + this.index + "】签到广告: 获得：" + _0x561e79.data.score_amount + " 金币");else _0x561e79.err_no == 4 ? DoubleLog("\n ❌ 【" + this.index + "】签到广告: 已经到达任务限制次数") : DoubleLog("\n ❌ 【" + this.index + "】签到广告: " + _0x561e79.err_tips);
            }
          }
        } catch (_0x379f4b) {
          $.logErr(_0x379f4b, _0x455a5d);
        } finally {
          _0x2a9587();
        }
      }, _0x103352);
    });
  }
  async ["treasure"](_0x10da7d = 2000) {
    return new Promise(_0x8578b0 => {
      {
        let _0x36218b = {
          "url": hostname + "/luckycat/lite/v1/task/page_data/?" + this.ck[0],
          "headers": {
            "Host": host,
            "Connection": "Keep-Alive",
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": this.ck[4],
            "Cookie": this.ck[1],
            "x-argus": this.ck[2],
            "x-ladon": this.ck[3]
          }
        };
        $.get(_0x36218b, async (_0x920070, _0x2fcbd2, _0x3a1327) => {
          try {
            {
              if (_0x920070) $.logErr(_0x920070);else {
                let _0x42c62a = JSON.parse(_0x3a1327);
                if (_0x42c62a.err_no == 0) {
                  {
                    let _0x1edc7e = _0x42c62a.data.treasure.current_time,
                      _0x5bbe06 = _0x42c62a.data.treasure.next_treasure_time;
                    _0x5bbe06 <= _0x1edc7e ? await this.open_treasure(2000) : DoubleLog("\n ❌ 【" + this.index + "】打开宝箱: 下次开宝箱：" + $.time("yyyy-MM-dd HH:mm:ss", _0x5bbe06 * 1000));
                  }
                } else DoubleLog("\n ❌ 【" + this.index + "】宝箱广告: " + _0x42c62a.err_tips);
              }
            }
          } catch (_0x2a1f15) {
            $.logErr(_0x2a1f15, _0x2fcbd2);
          } finally {
            _0x8578b0();
          }
        }, _0x10da7d);
      }
    });
  }
  async ["open_treasure"](_0x444b20 = 2000) {
    return new Promise(_0x36b1de => {
      let _0x325110 = {
        "url": hostname + "/score_task/v1/task/open_treasure_box/?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        },
        "body": "{\"from\": \"task_page\",\"use_ecpm\": 0,\"rit\": \"coin\",\"open_treasure_box_enter_from\": \"\"}"
      };
      $.post(_0x325110, async (_0x43fce1, _0x400c0e, _0x542854) => {
        try {
          if (_0x43fce1) $.logErr(_0x43fce1);else {
            {
              let _0x5c39df = JSON.parse(_0x542854);
              if (_0x5c39df.err_no == 0) {
                let _0x3dcb52 = _0x5c39df.data.new_excitation_ad.score_amount;
                this.trackid = _0x5c39df.data.new_excitation_ad.extra.track_id;
                DoubleLog("\n ✅ 【" + this.index + "】打开宝箱: 获得 " + _0x5c39df.data.score_amount + " 金币");
                await $.wait(10000);
                await this.treasure_video_start(_0x3dcb52, this.trackid, 2000);
              } else DoubleLog("\n ❌ 【" + this.index + "】打开宝箱: " + _0x5c39df.err_tips);
            }
          }
        } catch (_0x2bf7ee) {
          $.logErr(_0x2bf7ee, _0x400c0e);
        } finally {
          _0x36b1de();
        }
      }, _0x444b20);
    });
  }
  async ["treasure_video"](_0x3eae0b, _0xd305ed = 2000) {
    return new Promise(_0xaaa5d9 => {
      let _0x2ad839 = {
        "url": hostname + "/luckycat/lite/v1/task/done/excitation_ad?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=UTF-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        },
        "body": "{\"ad_id\":2,\"amount\":" + _0x3eae0b + ",\"ad_rit\":\"2\",\"extra_data\":{\"enter_from\":\"tre_box\"},\"task_key\":\"excitation_ad\",\"extra\":{\"track_id\":\"" + this.trackid + "\"},\"task_id\":\"188\",\"ad_alias_position\":\"coin\",\"is_post_login\":false,\"ad_from\":\"coin\",\"score_source\":0,\"coin_count\":" + _0x3eae0b + ",\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":51,\"dynamic_settings_version\":51,\"poll_settings_version\":0,\"exci_extra\":{\"cid\":1770497708847219,\"req_id\":\"20230723170155A8BCE222961A14658973\",\"rit\":20047},\"aggre_chain_id\":\"\"}"
      };
      $.post(_0x2ad839, async (_0x12db81, _0x3afe66, _0x7c1732) => {
        try {
          {
            if (_0x12db81) $.logErr(_0x12db81);else {
              {
                let _0x27a899 = JSON.parse(_0x7c1732);
                if (_0x27a899.err_no == 0) {
                  let _0x55b87a = _0x27a899.data.aggre_chain_id;
                  DoubleLog("\n ✅ 【" + this.index + "】宝箱视频: 获得奖励 " + _0x27a899.data.reward_amount + " 金币");
                  await $.wait(30000);
                  await this.treasure_video_start(_0x55b87a, 2000);
                } else _0x27a899.err_no == 10003 ? (DoubleLog("\n ❌ 【" + this.index + "】宝箱视频: 获取第 1 个视频错误，继续尝试.."), await $.wait(30000), await this.treasure_video_start("7258936907395598376", 2000)) : DoubleLog("\n ❌ 【" + this.index + "】宝箱视频: " + _0x27a899.err_tips);
              }
            }
          }
        } catch (_0x570064) {
          $.logErr(_0x570064, _0x3afe66);
        } finally {
          _0xaaa5d9();
        }
      }, _0xd305ed);
    });
  }
  async ["treasure_video_start"](_0x372299, _0x9547a2 = 2000) {
    return new Promise(_0x4c8660 => {
      let _0x12da4c = {
        "url": hostname + "/luckycat/lite/v1/task/done/excitation_ad?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=UTF-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        },
        "body": "{\"task_id\":\"225\",\"exci_extra\":{\"cid\":1771109886687319,\"req_id\":\"202307231702318380FA0B015627C20440\",\"rit\":20047},\"extra\":{\"stage_score_amount\":[],\"track_id\":\"7258936877829408802\",\"task_id\":\"\",\"task_name\":\"再得激励广告\",\"enable_fuzzy_amount\":false},\"aggre_chain_id\":\"" + _0x372299 + "\"}"
      };
      $.post(_0x12da4c, async (_0x525e21, _0x212ac7, _0x2a692a) => {
        try {
          if (_0x525e21) $.logErr(_0x525e21);else {
            let _0x4e2405 = JSON.parse(_0x2a692a);
            if (_0x4e2405.err_no == 0) {
              let _0x1c1e02 = _0x4e2405.data.aggre_ad_info.aggre_chain_id;
              DoubleLog("\n ✅ 【" + this.index + "】宝箱视频: 获得奖励 " + _0x4e2405.data.amount + " 金币");
              await $.wait(1000);
              for (let _0x1eb1ca = 0; _0x1eb1ca < numvodie; _0x1eb1ca = _0x1eb1ca + 1) {
                {
                  if (_0x4e2405.data.reward_amount < numamount) {
                    {
                      DoubleLog("\n ✅ 【" + this.index + "】宝箱视频: 获得奖励 " + _0x4e2405.data.reward_amount + " 金币，收入低停止执行");
                      break;
                    }
                  } else await this.treasure_video_stop(_0x1c1e02, 2000), await $.wait(30000);
                  if (_0x1eb1ca == numvodie) {
                    break;
                  }
                }
              }
              DoubleLog("\n ✅ 【" + this.index + "】宝箱视频: " + _0x4e2405.data.content);
            } else DoubleLog("\n ❌ 【" + this.index + "】宝箱视频: " + _0x4e2405.err_tips);
          }
        } catch (_0x51e1e9) {
          $.logErr(_0x51e1e9, _0x212ac7);
        } finally {
          _0x4c8660();
        }
      }, _0x9547a2);
    });
  }
  async ["treasure_video_stop"](_0x451c45, _0x2d3f1f = 2000) {
    return new Promise(_0x2dfaa2 => {
      let _0x63ba03 = {
        "url": hostname + "/luckycat/lite/v1/task/done/excitation_ad?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=UTF-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        },
        "body": "{\"task_id\":\"225\",\"exci_extra\":{\"cid\":1772024543127582,\"req_id\":\"20230723170304B9AB9F95647944D250CF\",\"rit\":20047},\"extra\":{\"stage_score_amount\":[],\"track_id\":\"7258937033040644131\",\"task_id\":\"\",\"task_name\":\"再得激励广告\",\"enable_fuzzy_amount\":false},\"aggre_chain_id\":\"" + _0x451c45 + "\"}"
      };
      $.post(_0x63ba03, async (_0x48b3a7, _0x3a1d60, _0x3cf872) => {
        try {
          if (_0x48b3a7) $.logErr(_0x48b3a7);else {
            {
              let _0x5def8c = JSON.parse(_0x3cf872);
              _0x5def8c.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】宝箱视频: 获得奖励 " + _0x5def8c.data.reward_amount + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】宝箱视频: " + _0x5def8c.err_tips);
            }
          }
        } catch (_0x4d8495) {
          $.logErr(_0x4d8495, _0x3a1d60);
        } finally {
          _0x2dfaa2();
        }
      }, _0x2d3f1f);
    });
  }
  async ["advideo"](_0x943975 = 2000) {
    return new Promise(_0x463831 => {
      let _0x5061a9 = {
        "url": hostname + "/luckycat/lite/v1/task/page_data/?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=UTF-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        }
      };
      $.get(_0x5061a9, async (_0x3cb44f, _0x4e84c6, _0x39a048) => {
        try {
          if (_0x3cb44f) $.logErr(_0x3cb44f);else {
            {
              let _0x1e3583 = JSON.parse(_0x39a048);
              if (_0x1e3583.err_no == 0) {
                {
                  if (_0x1e3583.data.task_list.special && Array.isArray(_0x1e3583.data.task_list.special)) {
                    for (let _0x5157a6 = 0; _0x5157a6 < _0x1e3583.data.task_list.special.length; _0x5157a6++) {
                      let _0x53b5a3 = _0x1e3583.data.task_list.special[_0x5157a6];
                      if (_0x53b5a3.task_id == "210") {
                        {
                          let _0x1182a7 = eval("(" + _0x53b5a3.status_extra + ")");
                          this.tracktopnum = _0x1182a7.user_complete_count;
                          this.track_endnum = _0x53b5a3.action_times;
                          if (_0x53b5a3.is_hot == true) {
                            DoubleLog("\n ❌ 【" + this.index + "】广告赚金: 每天可完成" + this.track_endnum + "次, 已完成 " + this.track_topnum + "/" + this.track_endnum + " 次");
                          } else _0x53b5a3.action_times == this.tracktopnum ? DoubleLog("\n ✅ 【" + this.index + "】广告赚金: 每天可完成" + this.track_endnum + "次, 已完成 " + this.tracktopnum + "/" + this.track_endnum + " 次") : (DoubleLog("\n ✅ 【" + this.index + "】广告赚金: 每天可完成" + this.track_endnum + "次, 已完成 " + this.tracktopnum + "/" + this.track_endnum + " 次"), await this.open_advideo(2000), await $.wait(3000));
                        }
                      }
                    }
                  }
                }
              } else DoubleLog("\n ❌ 【" + this.index + "】广告赚金: " + _0x1e3583.err_tips);
            }
          }
        } catch (_0x1155f1) {
          $.logErr(_0x1155f1, _0x4e84c6);
        } finally {
          _0x463831();
        }
      }, _0x943975);
    });
  }
  async ["open_advideo"](_0x294d88 = 2000) {
    return new Promise(_0xa92b02 => {
      {
        let _0x2e003f = {
          "url": hostname + "/luckycat/lite/v1/task/get_exci_entrance?" + this.ck[0],
          "headers": {
            "Host": host,
            "Connection": "Keep-Alive",
            "Content-Type": "application/json; charset=UTF-8",
            "User-Agent": this.ck[4],
            "Cookie": this.ck[1],
            "x-argus": this.ck[2],
            "x-ladon": this.ck[3]
          }
        };
        $.get(_0x2e003f, async (_0x3cd94b, _0x133a03, _0x335cbe) => {
          try {
            {
              if (_0x3cd94b) $.logErr(_0x3cd94b);else {
                let _0x37ea37 = JSON.parse(_0x335cbe);
                if (_0x37ea37.err_no == 0) {
                  {
                    let _0x50eec1 = _0x37ea37.data.extra.track_id;
                    DoubleLog("\n ✅ 【" + this.index + "】视频奖励: 获得奖励 " + _0x37ea37.data.score_amount + " 金币");
                    await $.wait(30000);
                    await this.advideo_video(_0x50eec1, 2000);
                  }
                } else DoubleLog("\n ❌ 【" + this.index + "】视频奖励: " + _0x37ea37.err_tips);
              }
            }
          } catch (_0x23a92d) {
            $.logErr(_0x23a92d, _0x133a03);
          } finally {
            _0xa92b02();
          }
        }, _0x294d88);
      }
    });
  }
  async ["advideo_video"](_0xd54b54, _0x155b78 = 2000) {
    return new Promise(_0x13f740 => {
      {
        let _0x28fa0b = {
          "url": hostname + "/luckycat/lite/v1/task/done/excitation_ad?" + this.ck[0],
          "headers": {
            "Host": host,
            "Connection": "Keep-Alive",
            "Content-Type": "application/json; charset=UTF-8",
            "User-Agent": this.ck[4],
            "Cookie": this.ck[1],
            "x-argus": this.ck[2],
            "x-ladon": this.ck[3]
          },
          "body": "{\"ad_id\":11,\"amount\":1200,\"ad_rit\":\"11\",\"extra_data\":{\"enter_from\":\"task\"},\"task_key\":\"excitation_ad\",\"extra\":{\"track_id\":\"" + _0xd54b54 + "\"},\"task_id\":\"210\",\"ad_alias_position\":\"coin\",\"is_post_login\":false,\"ad_from\":\"coin\",\"score_source\":1,\"coin_count\":1200,\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":51,\"dynamic_settings_version\":51,\"poll_settings_version\":0,\"exci_extra\":{\"cid\":1771818936641645,\"req_id\":\"2023072318082176227303D3C6ECDE0C5B\",\"rit\":20047},\"aggre_chain_id\":\"\"}"
        };
        $.post(_0x28fa0b, async (_0x32fc10, _0xe7b110, _0x1aa47c) => {
          try {
            {
              if (_0x32fc10) $.logErr(_0x32fc10);else {
                let _0x333fb1 = JSON.parse(_0x1aa47c);
                if (_0x333fb1.err_no == 0) {
                  {
                    let _0x20ca60 = _0x333fb1.data.aggre_ad_info.aggre_chain_id;
                    DoubleLog("\n ✅ 【" + this.index + "】视频奖励: 获得奖励 " + _0x333fb1.data.reward_amount + " 金币");
                    await $.wait(30000);
                    await this.video_status(_0x20ca60, 2000);
                  }
                } else _0x333fb1.err_no == 10003 ? (DoubleLog("\n ❌ 【" + this.index + "】宝箱视频: 获取第 1 个视频错误，继续尝试.."), await $.wait(30000), await this.video_status("7258936907395598376", 2000)) : DoubleLog("\n ❌ 【" + this.index + "】视频奖励: " + _0x333fb1.err_tips);
              }
            }
          } catch (_0x1d1ba3) {
            $.logErr(_0x1d1ba3, _0xe7b110);
          } finally {
            _0x13f740();
          }
        }, _0x155b78);
      }
    });
  }
  async ["video_status"](_0x5a0426, _0x2bce8c = 2000) {
    return new Promise(_0x33d324 => {
      {
        let _0x41df67 = {
          "url": hostname + "/luckycat/lite/v1/task/get_exci_entrance?" + this.ck[0],
          "headers": {
            "Host": host,
            "Connection": "Keep-Alive",
            "Content-Type": "application/json; charset=UTF-8",
            "User-Agent": this.ck[4],
            "Cookie": this.ck[1],
            "x-argus": this.ck[2],
            "x-ladon": this.ck[3]
          },
          "body": "{\"ad_id\":11,\"amount\":1200,\"ad_rit\":\"11\",\"extra_data\":{\"enter_from\":\"task\"},\"task_key\":\"excitation_ad\",\"extra\":{\"track_id\":\"7258953822964729856\"},\"task_id\":\"210\",\"ad_alias_position\":\"coin\",\"is_post_login\":false,\"ad_from\":\"coin\",\"score_source\":1,\"coin_count\":1200,\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":51,\"dynamic_settings_version\":51,\"poll_settings_version\":0,\"exci_extra\":{\"cid\":1771818936641645,\"req_id\":\"2023072318082176227303D3C6ECDE0C5B\",\"rit\":20047},\"aggre_chain_id\":\"" + _0x5a0426 + "\"}"
        };
        $.get(_0x41df67, async (_0x5c9252, _0x583b4f, _0x5561a5) => {
          try {
            if (_0x5c9252) $.logErr(_0x5c9252);else {
              let _0x560d11 = JSON.parse(_0x5561a5);
              if (_0x560d11.err_no == 0) {
                {
                  let _0x353cd2 = _0x560d11.data.aggre_ad_info.aggre_chain_id;
                  DoubleLog("\n ✅ 【" + this.index + "】激励奖励: 获得奖励 " + _0x560d11.data.reward_amount + " 金币");
                  for (let _0x1aa77d = 0; _0x1aa77d < numvodie; _0x1aa77d = _0x1aa77d + 1) {
                    {
                      if (_0x560d11.data.amount < numamount) {
                        DoubleLog("\n ✅ 【" + this.index + "】宝箱视频: 获得奖励 " + _0x560d11.data.reward_amount + " 金币，收入低停止执行");
                        break;
                      } else await this.video_stop(_0x353cd2, 2000), await $.wait(30000);
                      if (_0x1aa77d == numvodie) {
                        break;
                      }
                    }
                  }
                }
              } else {
                DoubleLog("\n ❌ 【" + this.index + "】激励奖励: " + _0x560d11.err_tips);
              }
            }
          } catch (_0x37a46f) {
            $.logErr(_0x37a46f, _0x583b4f);
          } finally {
            _0x33d324();
          }
        }, _0x2bce8c);
      }
    });
  }
  async ["video_stop"](_0x2ab8e9, _0x1b74ca = 2000) {
    return new Promise(_0x4e4dfc => {
      {
        let _0x5f3a79 = {
          "url": hostname + "/luckycat/lite/v1/task/get_exci_entrance?" + this.ck[0],
          "headers": {
            "Host": host,
            "Connection": "Keep-Alive",
            "Content-Type": "application/json; charset=UTF-8",
            "User-Agent": this.ck[4],
            "Cookie": this.ck[1],
            "x-argus": this.ck[2],
            "x-ladon": this.ck[3]
          },
          "body": "{\"task_id\":\"225\",\"exci_extra\":{\"cid\":1771818760572984,\"req_id\":\"20230723181026FFAF15F7AC335A5B4D58\",\"rit\":20047},\"extra\":{\"stage_score_amount\":[],\"track_id\":\"7258954323831916579\",\"task_id\":\"\",\"task_name\":\"再得激励广告\",\"enable_fuzzy_amount\":false},\"aggre_chain_id\":\"" + _0x2ab8e9 + "\"}"
        };
        $.get(_0x5f3a79, async (_0x164e0d, _0x3d2251, _0x1b373d) => {
          try {
            if (_0x164e0d) $.logErr(_0x164e0d);else {
              {
                let _0x49c5b = JSON.parse(_0x1b373d);
                _0x49c5b.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】激励奖励: 获得奖励 " + _0x49c5b.data.reward_amount + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】激励奖励: " + _0x49c5b.err_tips);
              }
            }
          } catch (_0x48b967) {
            $.logErr(_0x48b967, _0x3d2251);
          } finally {
            _0x4e4dfc();
          }
        }, _0x1b74ca);
      }
    });
  }
  async ["readDouble"](_0x2708f5 = 2000) {
    return new Promise(_0x290378 => {
      let _0x2157ee = {
        "url": hostname + "/luckycat/lite/v1/activity/double_whole_scene_task/?aid=35&enter_creator_id=11000&carrier%3D=%25E4%25B8%25AD%25E5%259B%25BD%25E7%2594%25B5%25E4%25BF%25A1&mcc_mnc%3D=46011&iid=2623874184516717&device_id=1673882584749955&ac=wifi&channel=lite_xiaomi_64&aid=35&app_name=news_article_lite&version_code=929&version_name=9.2.9&device_platform=android&os=android&ab_version=668903%2C6042562%2C668907%2C6042568%2C4884235%2C5315659%2C1859936%2C668905%2C6042536%2C668906%2C6042544%2C668904%2C6042527%2C668908%2C6042572%2C668776%2C6042565%2C6070342%2C4743964%2C6142135&ab_client=a1%2Ce1%2Cf2%2Cg2%2Cf7&ab_group=z2&ab_feature=z1&abflag=3&ssmix=a&device_type=Redmi+Note+7+Pro&device_brand=xiaomi&language=zh&os_api=29&os_version=10&manifest_version_code=9290&resolution=1080*2131&dpi=440&update_version_code=92907&_rticket=1684353678410&sa_enable=0&dq_param=0&pass_through=null&plugin_state=821344778461205&isTTWebView=0&session_id=d8e4b685-7594-409f-856a-c592a9adae7c&host_abi=arm64-v8a&tma_jssdk_version=2.53.0&rom_version=miui_v125_v12.5.4.0.qfhcnxm&cdid=ca4d55c9-cb59-4b94-835f-9efaceb3b81f",
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "X-SS-REQ-TICKET": timestamp,
          "passport-sdk-version": "30",
          "sdk-version": "2",
          "x-vc-bdturing-sdk-version": "2.0.0",
          "User-Agent": getUA(),
          "Cookie": "sessionid=" + this.sessionid,
          "x-gorgon": "840480050001d4761b63dacdc12021a79f65b1c889777a105142",
          "X-Khronos": "1684353676"
        },
        "body": "{}"
      };
      $.post(_0x2157ee, async (_0x350d0c, _0x592648, _0x2bb8fd) => {
        try {
          {
            if (_0x350d0c) $.logErr(_0x350d0c);else {
              let _0x6e431e = JSON.parse(_0x2bb8fd);
              _0x6e431e.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】阅读翻倍: 阅读翻倍成功") : DoubleLog("\n ❌ 【" + this.index + "】阅读翻倍: " + _0x6e431e.err_tips);
            }
          }
        } catch (_0x4952c7) {
          $.logErr(_0x4952c7, _0x592648);
        } finally {
          _0x290378();
        }
      }, _0x2708f5);
    });
  }
  async ["dailyArtsReward"](_0x27959c = 2000) {
    return new Promise(_0x168c98 => {
      let _0xb4b61f = {
        "url": hostname + "/score_task/v1/task/get_read_bonus/?aid=35&group_id=" + rndGroupId + "&channel=lite_xiaomi_64&static_settings_version=49&device_type=" + this.device_type + "&language=zh&ab_client=a1%2Ce1%2Cf2%2Cg2%2Cf7&resolution=1080*2131&update_version_code=" + this.update_version_code + "&cdid=" + this.cdid + "&ab_group=z2&abflag=3&dynamic_settings_version=49&ac=wifi&device_id=" + this.device_id + "&version_code=" + this.version_code + "&luckydog_api_version=8.2.0-rc.14&ab_version=668906%2C6042544%2C668904%2C6042527%2C668908%2C6042572%2C668776%2C6042565%2C1859937%2C668905%2C6042536%2C668903%2C6042562%2C668907%2C6042568%2C5315659%2C6070342%2C4743964%2C6142135&luckydog_base=-QidAP-ibJV6f9apmrP0glb9BONRnY-WY1afPEPyoUUDtXN4nP69EvWHeEMEGdVTaWbFdbA-DsfV2PheIspa3ainEWyPtkZKU3UO-zS06HGvoD-6O4yGpntufzqTaBXmXWUjcREyQoWJJRMoUuGQ3b6DH6xYgoAs6U9yQEQK1uLVf69-gQ_OXdYjiAudo3DC&scm_build_version=1.0.1.1339&plugin_state=821344778461205&device_platform=android&aid=" + this.aid + "&rom_version=" + this.rom_version + "&manifest_version_code=9290&_rticket=" + timestamp + "&iid=" + this.iid + "&isTTWebView=0&host_abi=arm64-v8a&is_pad=0&dq_param=0&status_bar_height=29&os_api=" + this.os_api + "&luckydog_data=ySLgwrbhgjs__UB8DkE507kivUn975bkCrKIZE5P6_-rTg0X_4qHxsa15teJ7ySP49_h1qjQi5tNPQhM9yRrhdM55fkXYev06Z1Me9urSeg&dpi=440&ab_feature=z1&polling_settings_version=0&os=android&pass_through=null&os_version=" + this.os_version + "&session_id=" + this.session_id + "&luckydog_token=E7D_IvLA-Q8He2pDxx-ZQcTk7cYlIDUUMrO7ZnyY9JYMGAufDFo5Xe9o-7EfFcdE&tma_jssdk_version=2.53.0&app_name=news_article_lite&version_name=" + this.version_name + "&device_brand=" + this.device_brand + "&ssmix=a&luckydog_sdk_version=8.2.0-rc.14&polaris_version=1.0.5&luckycat_version_name=8.2.0-rc.14&luckycat_version_code=820014&lucky_is_32=0&lucky_device_score=7.8626&lucky_device_type=" + this.device_type,
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "X-SS-REQ-TICKET": timestamp,
          "passport-sdk-version": "30",
          "sdk-version": "2",
          "x-vc-bdturing-sdk-version": "2.0.0",
          "User-Agent": getUA(),
          "Cookie": "sessionid=" + this.sessionid,
          "x-gorgon": "840480050001d4761b63dacdc12021a79f65b1c889777a105142",
          "X-Khronos": "1684353676"
        },
        "body": "{}"
      };
      $.post(_0xb4b61f, async (_0x41385c, _0x15f25e, _0x104eba) => {
        try {
          if (_0x41385c) $.logErr(_0x41385c);else {
            {
              let _0x5ee42f = JSON.parse(_0x104eba);
              _0x5ee42f.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】每日阅读: 领取每日阅读成功") : DoubleLog("\n ❌ 【" + this.index + "】每日阅读: " + _0x5ee42f.err_tips);
            }
          }
        } catch (_0x2b9f94) {
          $.logErr(_0x2b9f94, _0x15f25e);
        } finally {
          _0x168c98();
        }
      }, _0x27959c);
    });
  }
  async ["dailyPushReward"](_0x489636 = 2000) {
    return new Promise(_0x3e12b0 => {
      let _0x1f0da8 = {
        "url": hostname + "/score_task/v1/task/get_read_bonus/?aid=35&group_id=" + rndGroupId + "&impression_type=push&enter_creator_id=11000&carrier%3D=%25E4%25B8%25AD%25E5%259B%25BD%25E7%2594%25B5%25E4%25BF%25A1&mcc_mnc%3D=46011&iid=2623874184516717&device_id=1673882584749955&ac=wifi&channel=lite_xiaomi_64&aid=35&app_name=news_article_lite&version_code=929&version_name=9.2.9&device_platform=android&os=android&ab_version=668903%2C6042562%2C668907%2C6042568%2C4884235%2C5315659%2C1859936%2C668905%2C6042536%2C668906%2C6042544%2C668904%2C6042527%2C668908%2C6042572%2C668776%2C6042565%2C6070342%2C4743964%2C6142135&ab_client=a1%2Ce1%2Cf2%2Cg2%2Cf7&ab_group=z2&ab_feature=z1&abflag=3&ssmix=a&device_type=Redmi+Note+7+Pro&device_brand=xiaomi&language=zh&os_api=29&os_version=10&manifest_version_code=9290&resolution=1080*2131&dpi=440&update_version_code=92907&_rticket=1684353678410&sa_enable=0&dq_param=0&pass_through=null&plugin_state=821344778461205&isTTWebView=0&session_id=d8e4b685-7594-409f-856a-c592a9adae7c&host_abi=arm64-v8a&tma_jssdk_version=2.53.0&rom_version=miui_v125_v12.5.4.0.qfhcnxm&cdid=ca4d55c9-cb59-4b94-835f-9efaceb3b81f",
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "X-SS-REQ-TICKET": timestamp,
          "passport-sdk-version": "30",
          "sdk-version": "2",
          "x-vc-bdturing-sdk-version": "2.0.0",
          "User-Agent": getUA(),
          "Cookie": "sessionid=" + this.sessionid,
          "x-gorgon": "840480050001d4761b63dacdc12021a79f65b1c889777a105142",
          "X-Khronos": "1684353676"
        },
        "body": "{}"
      };
      $.post(_0x1f0da8, async (_0x42c011, _0x2d3b53, _0x3f07b2) => {
        try {
          {
            if (_0x42c011) $.logErr(_0x42c011);else {
              let _0x18e619 = JSON.parse(_0x3f07b2);
              _0x18e619.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】推送奖励: 获得 " + _0x18e619.data.score_amount + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】推送奖励: " + _0x18e619.err_tips);
            }
          }
        } catch (_0x55b643) {
          $.logErr(_0x55b643, _0x2d3b53);
        } finally {
          _0x3e12b0();
        }
      }, _0x489636);
    });
  }
  async ["readArtsReward"](_0x2804c6 = 2000) {
    return new Promise(_0x5e5cff => {
      let _0x26bb46 = {
        "url": hostname + "/luckycat/lite/v1/activity/done_whole_scene_task/?aid=35&enter_creator_id=11000&carrier%3D=%25E4%25B8%25AD%25E5%259B%25BD%25E7%2594%25B5%25E4%25BF%25A1&mcc_mnc%3D=46011&iid=2623874184516717&device_id=1673882584749955&ac=wifi&channel=lite_xiaomi_64&aid=35&app_name=news_article_lite&version_code=929&version_name=9.2.9&device_platform=android&os=android&ab_version=668903%2C6042562%2C668907%2C6042568%2C4884235%2C5315659%2C1859936%2C668905%2C6042536%2C668906%2C6042544%2C668904%2C6042527%2C668908%2C6042572%2C668776%2C6042565%2C6070342%2C4743964%2C6142135&ab_client=a1%2Ce1%2Cf2%2Cg2%2Cf7&ab_group=z2&ab_feature=z1&abflag=3&ssmix=a&device_type=Redmi+Note+7+Pro&device_brand=xiaomi&language=zh&os_api=29&os_version=10&manifest_version_code=9290&resolution=1080*2131&dpi=440&update_version_code=92907&_rticket=1684353678410&sa_enable=0&dq_param=0&pass_through=null&plugin_state=821344778461205&isTTWebView=0&session_id=d8e4b685-7594-409f-856a-c592a9adae7c&host_abi=arm64-v8a&tma_jssdk_version=2.53.0&rom_version=miui_v125_v12.5.4.0.qfhcnxm&cdid=ca4d55c9-cb59-4b94-835f-9efaceb3b81f",
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "X-SS-REQ-TICKET": timestamp,
          "passport-sdk-version": "30",
          "sdk-version": "2",
          "x-vc-bdturing-sdk-version": "2.0.0",
          "User-Agent": getUA(),
          "Cookie": "sessionid=" + this.sessionid,
          "x-gorgon": "840480050001d4761b63dacdc12021a79f65b1c889777a105142",
          "X-Khronos": "1684353676"
        },
        "body": "{\"is_golden_egg\":false,\"scene_key\":\"article_detail\",\"group_id\":\"" + rndGroupId + "\"}"
      };
      $.post(_0x26bb46, async (_0x2b7cee, _0x270219, _0x359838) => {
        try {
          {
            if (_0x2b7cee) {
              $.logErr(_0x2b7cee);
            } else {
              let _0x4cf713 = JSON.parse(_0x359838);
              _0x4cf713.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】阅读文章: 获得 " + _0x4cf713.data.score_amount + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】阅读失败: " + _0x4cf713.err_tips);
            }
          }
        } catch (_0x4d0826) {
          $.logErr(_0x4d0826, _0x270219);
        } finally {
          _0x5e5cff();
        }
      }, _0x2804c6);
    });
  }
  async ["listArts"](_0x320305 = 2000) {
    return new Promise(_0x43f77f => {
      let _0x2d595e = {
        "url": hostname + "/api/news/feed/v47/?min_behot_time=0&refer=true&tt_from=enter_auto&max_behot_time=0&listCount=20&category=news_hotspot&cp=6045645885552q1&iid=2623874184516717&device_id=1673882584749955&ac=wifi&channel=lite_xiaomi_64&aid=35&app_name=news_article_lite&version_code=929&version_name=9.2.9&device_platform=android&os=android&ab_version=668903%2C6042562%2C668776%2C6042565%2C4884235%2C5315659%2C1859936%2C668905%2C6042536%2C668906%2C6042544%2C668904%2C6042527%2C668908%2C6042572%2C668907%2C6042568%2C4743964%2C6142135%2C6070342&ab_client=a1%2Ce1%2Cf2%2Cg2%2Cf7&ab_group=z2&ab_feature=z1&abflag=3&ssmix=a&device_type=Redmi+Note+7+Pro&device_brand=xiaomi&language=zh&os_api=29&os_version=10&openudid=d57ac1df93aea353&manifest_version_code=9290&resolution=1080*2131&dpi=440&update_version_code=92907&_rticket=1684374866570&sa_enable=0&dq_param=0&pass_through=null&plugin_state=821344778461205&isTTWebView=1&session_id=4bf493b5-4224-4ad9-a819-467d52c910dc&host_abi=arm64-v8a&rom_version=miui_v125_v12.5.4.0.qfhcnxm&cdid=ca4d55c9-cb59-4b94-835f-9efaceb3b81f&oaid=662a978f6fd550db&cmwz=%2526-%2522%2523ws2K45%25407%2524x%257Bx%257B%2B%25210%252434C%255CEFQH7*3%252FMfO%2540A%253EnGFHwHyxJKG%257C%257B%253CG%253E-%252F%2525%252F7%2527-%2529G%2560I-%255Ea-0%255EnqE%2540otqDGF63",
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "X-SS-REQ-TICKET": timestamp,
          "passport-sdk-version": "30",
          "sdk-version": "2",
          "x-vc-bdturing-sdk-version": "2.0.0",
          "User-Agent": getUA(),
          "Cookie": "sessionid=" + this.sessionid,
          "x-gorgon": "840480b800015c6a9d2f79e9cb141440476bb5303010d419b804",
          "X-Khronos": "1684374609"
        }
      };
      $.get(_0x2d595e, async (_0x21dd33, _0x497182, _0xc8e3b8) => {
        try {
          if (_0x21dd33) {
            $.logErr(_0x21dd33);
          } else {
            {
              let _0x337f6f = JSON.parse(_0xc8e3b8);
              if (_0x337f6f.message == "success") {
                for (let _0x43ae78 of _0x337f6f.data) {
                  {
                    let _0x11ab63 = JSON.parse(_0x43ae78.content);
                    _0x11ab63.id && readList.push(_0x11ab63.id);
                  }
                }
              } else DoubleLog("\n ❌ 【" + this.index + "】阅读列表: " + _0x337f6f.err_tips);
            }
          }
        } catch (_0x54736f) {
          $.logErr(_0x54736f, _0x497182);
        } finally {
          _0x43f77f();
        }
      }, _0x320305);
    });
  }
  async ["postInviteCode"](_0x5e9eaf = 2000) {
    return new Promise(_0x26d2ea => {
      {
        let _0x82767b = {
          "url": hostname + "/sluckycat/lite/v1/invite/post_invite_code/?aid=35&enter_from=bottom&channel=lite_xiaomi_64&static_settings_version=49&device_type=" + this.device_type + "&language=zh&ab_client=a1%2Ce1%2Cf2%2Cg2%2Cf7&resolution=1080*2131&update_version_code=" + this.update_version_code + "&cdid=" + this.cdid + "&ab_group=z2&abflag=3&dynamic_settings_version=49&ac=wifi&device_id=" + this.device_id + "&version_code=" + this.version_code + "&luckydog_api_version=8.2.0-rc.14&ab_version=668906%2C6042544%2C668904%2C6042527%2C668908%2C6042572%2C668776%2C6042565%2C1859937%2C668905%2C6042536%2C668903%2C6042562%2C668907%2C6042568%2C5315659%2C6070342%2C4743964%2C6142135&luckydog_base=-QidAP-ibJV6f9apmrP0glb9BONRnY-WY1afPEPyoUUDtXN4nP69EvWHeEMEGdVTaWbFdbA-DsfV2PheIspa3ainEWyPtkZKU3UO-zS06HGvoD-6O4yGpntufzqTaBXmXWUjcREyQoWJJRMoUuGQ3b6DH6xYgoAs6U9yQEQK1uLVf69-gQ_OXdYjiAudo3DC&scm_build_version=1.0.1.1339&plugin_state=821344778461205&device_platform=android&aid=" + this.aid + "&rom_version=" + this.rom_version + "&manifest_version_code=9290&_rticket=" + timestamp + "&iid=" + this.iid + "&isTTWebView=0&host_abi=arm64-v8a&is_pad=0&dq_param=0&status_bar_height=29&os_api=" + this.os_api + "&luckydog_data=ySLgwrbhgjs__UB8DkE507kivUn975bkCrKIZE5P6_-rTg0X_4qHxsa15teJ7ySP49_h1qjQi5tNPQhM9yRrhdM55fkXYev06Z1Me9urSeg&dpi=440&ab_feature=z1&polling_settings_version=0&os=android&pass_through=null&os_version=" + this.os_version + "&session_id=" + this.session_id + "&luckydog_token=E7D_IvLA-Q8He2pDxx-ZQcTk7cYlIDUUMrO7ZnyY9JYMGAufDFo5Xe9o-7EfFcdE&tma_jssdk_version=2.53.0&app_name=news_article_lite&version_name=" + this.version_name + "&device_brand=" + this.device_brand + "&ssmix=a&luckydog_sdk_version=8.2.0-rc.14&polaris_version=1.0.5&luckycat_version_name=8.2.0-rc.14&luckycat_version_code=820014&lucky_is_32=0&lucky_device_score=7.8626&lucky_device_type=" + this.device_type,
          "headers": {
            "Host": host,
            "Connection": "Keep-Alive",
            "Content-Type": "application/json; charset=utf-8",
            "X-SS-REQ-TICKET": timestamp,
            "passport-sdk-version": "30",
            "sdk-version": "2",
            "x-vc-bdturing-sdk-version": "2.0.0",
            "User-Agent": getUA(),
            "Cookie": "sessionid=" + this.sessionid,
            "X-Khronos": "1684344064"
          },
          "body": "{\"invitecode\" : \"1173836876\"}"
        };
        $.post(_0x82767b, async (_0x78efd1, _0x1eec25, _0x4f898e) => {
          try {
            {
              if (_0x78efd1) $.logErr(_0x78efd1);else {
                let _0x184d33 = JSON.parse(_0x4f898e);
                if (!_0x184d33) return;
              }
            }
          } catch (_0x21f59f) {
            $.logErr(_0x21f59f, _0x1eec25);
          } finally {
            _0x26d2ea();
          }
        }, _0x5e9eaf);
      }
    });
  }
  async ["step"](_0x35f4d5 = 2000) {
    return new Promise(_0x1b708a => {
      let _0x11e407 = {
        "url": hostname + "/luckycat/lite/v1/walk/page_data/?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        }
      };
      $.get(_0x11e407, async (_0x5ae4cd, _0x43f32b, _0x55a594) => {
        try {
          {
            if (_0x5ae4cd) {
              $.logErr(_0x5ae4cd);
            } else {
              let _0x294815 = JSON.parse(_0x55a594);
              if (_0x294815.err_no == 0) {
                if (_0x294815.data.can_get_amount > 0) await this.open_step(2000);else {
                  if (_0x294815.data.history_walk_info && Array.isArray(_0x294815.data.history_walk_info)) {
                    for (let _0x26dc6e = 0; _0x26dc6e < _0x294815.data.history_walk_info.length; _0x26dc6e++) {
                      {
                        let _0x12423b = _0x294815.data.history_walk_info[_0x26dc6e];
                        DoubleLog("\n ✅ 【" + this.index + "】今日步数: 今日步数:" + _0x12423b.walk_number + "步，已领取" + _0x12423b.has_get_award_amount + "金币");
                      }
                    }
                  }
                }
              } else DoubleLog("\n ❌ 【" + this.index + "】今日步数: " + _0x294815.err_tips);
            }
          }
        } catch (_0x36e495) {
          $.logErr(_0x36e495, _0x43f32b);
        } finally {
          _0x1b708a();
        }
      }, _0x35f4d5);
    });
  }
  async ["open_step"](_0x27993c = 2000) {
    return new Promise(_0x34000f => {
      {
        let _0x2cdb07 = {
          "url": hostname + "/luckycat/news/v1/walk/count/?" + this.ck[0],
          "headers": {
            "Host": host,
            "Connection": "Keep-Alive",
            "Content-Type": "application/json",
            "User-Agent": this.ck[4],
            "Cookie": this.ck[1],
            "x-argus": this.ck[2],
            "x-ladon": this.ck[3]
          },
          "body": "{\"task_id\":136,\"enable_preload_exciting_video\":0,\"client_time\":" + timestamp + ",\"rit\":\"\",\"use_ecpm\":" + parseInt(10000 + Math.random() * 10000 + "") + "}"
        };
        $.post(_0x2cdb07, async (_0x13e014, _0x3aa692, _0x51d498) => {
          try {
            if (_0x13e014) $.logErr(_0x13e014);else {
              let _0x28b057 = JSON.parse(_0x51d498);
              _0x28b057.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】步数奖励: 获得：" + _0x28b057.data.score_amount + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】步数奖励: " + _0x28b057.err_tips);
            }
          } catch (_0x4ad9f1) {
            $.logErr(_0x4ad9f1, _0x3aa692);
          } finally {
            _0x34000f();
          }
        }, _0x27993c);
      }
    });
  }
  async ["step_video"](_0x5f4585 = 2000) {
    return new Promise(_0x2c98b0 => {
      let _0x353f26 = {
        "url": hostname + "/luckycat/lite/v1/task/done/excitation_ad?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        },
        "body": "{\"task_id\":\"190\",\"score_source\":0,\"ad_id\":4,\"ad_from\":\"coin\",\"amount\":1200,\"coin_count\":1200,\"ad_alias_position\":\"coin\",\"ad_rit\":4,\"task_key\":\"excitation_ad\",\"is_post_login\":false,\"extra\":{\"stage_score_amount\":[],\"track_id\":\"7234340433470572596\",\"draw_score_amount\":null,\"draw_track_id\":null,\"task_id\":null,\"task_name\":null,\"enable_fuzzy_amount\":null,\"custom_id\":null,\"csj_sdk\":{\"is_csj_ad\":true}},\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":49,\"dynamic_settings_version\":49,\"poll_settings_version\":0,\"aggre_chain_id\":\"\"}"
      };
      $.post(_0x353f26, async (_0x1cdef8, _0x3fd1ca, _0x5ce955) => {
        try {
          if (_0x1cdef8) $.logErr(_0x1cdef8);else {
            {
              let _0x648b9d = JSON.parse(_0x5ce955);
              if (_0x648b9d.err_no == 0) for (let _0x4083aa = 0; _0x4083aa < numvodie; _0x4083aa = _0x4083aa + 1) {
                await $.wait(1000);
                if (_0x648b9d.err_no == 4) {
                  DoubleLog("\n ❌ 【" + this.index + "】步数视频: " + _0x648b9d.err_tips);
                  break;
                } else {
                  if (_0x648b9d.data.reward_amount < numamount) {
                    {
                      DoubleLog("\n ✅ 【" + this.index + "】步数视频: 获得奖励 " + _0x648b9d.data.reward_amount + " 金币，收入低停止执行");
                      break;
                    }
                  } else await this.step_video_stop(2000), await $.wait(30000);
                }
                if (_0x4083aa == numvodie) break;
              } else DoubleLog("\n ❌ 【" + this.index + "】步数视频: " + _0x648b9d.err_tips);
            }
          }
        } catch (_0x27935f) {
          $.logErr(_0x27935f, _0x3fd1ca);
        } finally {
          _0x2c98b0();
        }
      }, _0x5f4585);
    });
  }
  async ["step_video_stop"](_0x37d3a = 2000) {
    return new Promise(_0x25864d => {
      {
        let _0x11fefd = {
          "url": hostname + "/luckycat/lite/v1/task/done/excitation_ad?" + this.ck[0],
          "headers": {
            "Host": host,
            "Connection": "Keep-Alive",
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": this.ck[4],
            "Cookie": this.ck[1],
            "x-argus": this.ck[2],
            "x-ladon": this.ck[3]
          },
          "body": "{\"task_id\":\"190\",\"score_source\":0,\"ad_id\":4,\"ad_from\":\"coin\",\"amount\":1200,\"coin_count\":1200,\"ad_alias_position\":\"coin\",\"ad_rit\":4,\"task_key\":\"excitation_ad\",\"is_post_login\":false,\"extra\":{\"stage_score_amount\":[],\"track_id\":\"7234340433470572596\",\"draw_score_amount\":null,\"draw_track_id\":null,\"task_id\":null,\"task_name\":null,\"enable_fuzzy_amount\":null,\"custom_id\":null,\"csj_sdk\":{\"is_csj_ad\":true}},\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":49,\"dynamic_settings_version\":49,\"poll_settings_version\":0,\"aggre_chain_id\":\"\"}"
        };
        $.post(_0x11fefd, async (_0x4792fb, _0x3a7dc9, _0x358e11) => {
          try {
            if (_0x4792fb) {
              $.logErr(_0x4792fb);
            } else {
              let _0x493296 = JSON.parse(_0x358e11);
              _0x493296.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】步数视频: 获得：" + _0x493296.data.score_amount + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】步数视频: " + _0x493296.err_tips);
            }
          } catch (_0x1b584e) {
            $.logErr(_0x1b584e, _0x3a7dc9);
          } finally {
            _0x25864d();
          }
        }, _0x37d3a);
      }
    });
  }
  async ["sleepstart"](_0x89e700 = 2000) {
    return new Promise(_0x31cb41 => {
      {
        let _0x38b95e = {
          "url": hostname + "/luckycat/lite/v1/sleep/status/?" + this.ck[0],
          "headers": {
            "Host": host,
            "Connection": "Keep-Alive",
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": this.ck[4],
            "Cookie": this.ck[1],
            "x-argus": this.ck[2],
            "x-ladon": this.ck[3]
          }
        };
        $.get(_0x38b95e, async (_0x25ff65, _0x2ced2f, _0x4677e4) => {
          try {
            {
              if (_0x25ff65) $.logErr(_0x25ff65);else {
                let _0x29050d = JSON.parse(_0x4677e4);
                if (_0x29050d.err_no == 0) {
                  let _0x4acd75 = Math.floor(_0x29050d.data.sleep_last_time / 36) / 100;
                  if (_0x29050d.data.sleeping == true) {
                    {
                      if (_0x4acd75 >= 12) await this.sleepStop(2000);else {
                        if (_0x29050d.data.sleep_unexchanged_score == _0x29050d.data.max_coin && curHour >= 7) {
                          let _0x18f056 = Math.random();
                          _0x18f056 > 0.95 ? await this.sleepStop(2000) : DoubleLog("\n ✅ 【" + this.index + "】睡眠状态: 已经睡了" + _0x4acd75 + "小时，可以获得" + _0x29050d.data.sleep_unexchanged_score + "金币");
                        } else DoubleLog("\n ✅ 【" + this.index + "】睡眠状态: 已经睡了" + _0x4acd75 + "小时，可以获得" + _0x29050d.data.sleep_unexchanged_score + "金币");
                      }
                    }
                  } else {
                    {
                      _0x29050d.data.history_amount > 0 && (await this.sleepDone(_0x29050d.data.history_amount));
                      if (curHour >= 22 || curHour < 2) await this.sleepStart(2000);else {
                        if (curHour >= 20) {
                          let _0x549a09 = Math.random();
                          _0x549a09 > 0.95 ? await this.sleepStart(2000) : DoubleLog("\n ❌ 【" + this.index + "】睡眠状态: 随机睡眠时间，本次不进行睡眠");
                        } else DoubleLog("\n ❌ 【" + this.index + "】睡觉失败: 未到睡觉时间");
                      }
                    }
                  }
                } else DoubleLog("\n ❌ 【" + this.index + "】睡觉失败: " + _0x29050d.err_tips);
              }
            }
          } catch (_0xb9a033) {
            $.logErr(_0xb9a033, _0x2ced2f);
          } finally {
            _0x31cb41();
          }
        }, _0x89e700);
      }
    });
  }
  async ["sleepStop"](_0x350980 = 2000) {
    return new Promise(_0x170d63 => {
      let _0x269519 = {
        "url": hostname + "/luckycat/lite/v1/sleep/stop/?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        }
      };
      $.post(_0x269519, async (_0x5c4875, _0x2473db, _0x2f42bf) => {
        try {
          if (_0x5c4875) $.logErr(_0x5c4875);else {
            let _0x433f56 = JSON.parse(_0x2f42bf);
            if (_0x433f56.err_no == 0) {
              let _0x480a39 = Math.floor(_0x433f56.data.sleep_last_time / 36) / 100;
              DoubleLog("\n ✅ 【" + this.index + "】结束睡眠: 本次睡了" + _0x480a39 + "小时，可以领取" + _0x433f56.data.history_amount + "金币");
              await this.sleepDone(_0x433f56.data.history_amount);
            } else DoubleLog("\n ❌ 【" + this.index + "】结束睡眠: " + _0x433f56.err_tips);
          }
        } catch (_0xadebe1) {
          $.logErr(_0xadebe1, _0x2473db);
        } finally {
          _0x170d63();
        }
      }, _0x350980);
    });
  }
  async ["sleepDone"](_0x111d93, _0x16f5b9 = 2000) {
    return new Promise(_0x440b3f => {
      let _0x5e4709 = {
        "url": hostname + "/luckycat/lite/v1/sleep/done_task/?enter_from=bottom&channel=lite_xiaomi_64&static_settings_version=49&device_type=" + this.device_type + "&language=zh&ab_client=a1%2Ce1%2Cf2%2Cg2%2Cf7&resolution=1080*2131&update_version_code=" + this.update_version_code + "&cdid=" + this.cdid + "&ab_group=z2&abflag=3&dynamic_settings_version=49&ac=wifi&device_id=" + this.device_id + "&version_code=" + this.version_code + "&luckydog_api_version=8.2.0-rc.14&ab_version=668906%2C6042544%2C668904%2C6042527%2C668908%2C6042572%2C668776%2C6042565%2C1859937%2C668905%2C6042536%2C668903%2C6042562%2C668907%2C6042568%2C5315659%2C6070342%2C4743964%2C6142135&luckydog_base=-QidAP-ibJV6f9apmrP0glb9BONRnY-WY1afPEPyoUUDtXN4nP69EvWHeEMEGdVTaWbFdbA-DsfV2PheIspa3ainEWyPtkZKU3UO-zS06HGvoD-6O4yGpntufzqTaBXmXWUjcREyQoWJJRMoUuGQ3b6DH6xYgoAs6U9yQEQK1uLVf69-gQ_OXdYjiAudo3DC&scm_build_version=1.0.1.1339&plugin_state=821344778461205&device_platform=android&aid=" + this.aid + "&rom_version=" + this.rom_version + "&manifest_version_code=9290&_rticket=" + timestamp + "&iid=" + this.iid + "&isTTWebView=0&host_abi=arm64-v8a&is_pad=0&dq_param=0&status_bar_height=29&os_api=" + this.os_api + "&luckydog_data=ySLgwrbhgjs__UB8DkE507kivUn975bkCrKIZE5P6_-rTg0X_4qHxsa15teJ7ySP49_h1qjQi5tNPQhM9yRrhdM55fkXYev06Z1Me9urSeg&dpi=440&ab_feature=z1&polling_settings_version=0&os=android&pass_through=null&os_version=" + this.os_version + "&session_id=" + this.session_id + "&luckydog_token=E7D_IvLA-Q8He2pDxx-ZQcTk7cYlIDUUMrO7ZnyY9JYMGAufDFo5Xe9o-7EfFcdE&tma_jssdk_version=2.53.0&app_name=news_article_lite&version_name=" + this.version_name + "&device_brand=" + this.device_brand + "&ssmix=a&luckydog_sdk_version=8.2.0-rc.14&polaris_version=1.0.5&luckycat_version_name=8.2.0-rc.14&luckycat_version_code=820014&lucky_is_32=0&lucky_device_score=7.8626&lucky_device_type=" + this.device_type,
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        },
        "body": "{\"score_amount\":" + _0x111d93 + ",\"enable_preload_exciting_video\":0}"
      };
      $.post(_0x5e4709, async (_0x3733d8, _0x2569fd, _0x1ef0c2) => {
        try {
          {
            if (_0x3733d8) $.logErr(_0x3733d8);else {
              {
                let _0x1721fe = JSON.parse(_0x1ef0c2);
                if (_0x1721fe.err_no == 0) DoubleLog("\n ✅ 【" + this.index + "】领取睡金: 获得奖励 " + _0x111d93 + " 金币"), await this.sleepDone(_0x1721fe.data.history_amount);else {
                  DoubleLog("\n ❌ 【" + this.index + "】领取睡金: " + _0x1721fe.err_tips);
                }
              }
            }
          }
        } catch (_0x446963) {
          $.logErr(_0x446963, _0x2569fd);
        } finally {
          _0x440b3f();
        }
      }, _0x16f5b9);
    });
  }
  async ["sleepStart"](_0x242c2b = 2000) {
    return new Promise(_0x360a78 => {
      {
        let _0x5773e3 = {
          "url": hostname + "/luckycat/lite/v1/sleep/start/?aid=35&enter_from=bottom&channel=lite_xiaomi_64&static_settings_version=49&device_type=" + this.device_type + "&language=zh&ab_client=a1%2Ce1%2Cf2%2Cg2%2Cf7&resolution=1080*2131&update_version_code=" + this.update_version_code + "&cdid=" + this.cdid + "&ab_group=z2&abflag=3&dynamic_settings_version=49&ac=wifi&device_id=" + this.device_id + "&version_code=" + this.version_code + "&luckydog_api_version=8.2.0-rc.14&ab_version=668906%2C6042544%2C668904%2C6042527%2C668908%2C6042572%2C668776%2C6042565%2C1859937%2C668905%2C6042536%2C668903%2C6042562%2C668907%2C6042568%2C5315659%2C6070342%2C4743964%2C6142135&luckydog_base=-QidAP-ibJV6f9apmrP0glb9BONRnY-WY1afPEPyoUUDtXN4nP69EvWHeEMEGdVTaWbFdbA-DsfV2PheIspa3ainEWyPtkZKU3UO-zS06HGvoD-6O4yGpntufzqTaBXmXWUjcREyQoWJJRMoUuGQ3b6DH6xYgoAs6U9yQEQK1uLVf69-gQ_OXdYjiAudo3DC&scm_build_version=1.0.1.1339&plugin_state=821344778461205&device_platform=android&aid=" + this.aid + "&rom_version=" + this.rom_version + "&manifest_version_code=9290&_rticket=" + timestamp + "&iid=" + this.iid + "&isTTWebView=0&host_abi=arm64-v8a&is_pad=0&dq_param=0&status_bar_height=29&os_api=" + this.os_api + "&luckydog_data=ySLgwrbhgjs__UB8DkE507kivUn975bkCrKIZE5P6_-rTg0X_4qHxsa15teJ7ySP49_h1qjQi5tNPQhM9yRrhdM55fkXYev06Z1Me9urSeg&dpi=440&ab_feature=z1&polling_settings_version=0&os=android&pass_through=null&os_version=" + this.os_version + "&session_id=" + this.session_id + "&luckydog_token=E7D_IvLA-Q8He2pDxx-ZQcTk7cYlIDUUMrO7ZnyY9JYMGAufDFo5Xe9o-7EfFcdE&tma_jssdk_version=2.53.0&app_name=news_article_lite&version_name=" + this.version_name + "&device_brand=" + this.device_brand + "&ssmix=a&luckydog_sdk_version=8.2.0-rc.14&polaris_version=1.0.5&luckycat_version_name=8.2.0-rc.14&luckycat_version_code=820014&lucky_is_32=0&lucky_device_score=7.8626&lucky_device_type=" + this.device_type,
          "headers": {
            "Host": host,
            "Connection": "Keep-Alive",
            "Content-Type": "application/json; charset=utf-8",
            "X-SS-REQ-TICKET": timestamp,
            "passport-sdk-version": "30",
            "sdk-version": "2",
            "x-vc-bdturing-sdk-version": "2.0.0",
            "User-Agent": getUA(),
            "Cookie": "sessionid=" + this.sessionid,
            "X-Khronos": "1684344064"
          }
        };
        $.post(_0x5773e3, async (_0x54afc6, _0x5a6a6e, _0x1189b1) => {
          try {
            {
              if (_0x54afc6) $.logErr(_0x54afc6);else {
                let _0x4be7c7 = JSON.parse(_0x1189b1);
                _0x4be7c7.err_no == 0 ? (DoubleLog("\n ✅ 【" + this.index + "】开睡成功: 开始睡觉，ZZZzzz..."), await this.sleepDone(_0x4be7c7.data.history_amount)) : DoubleLog("\n ❌ 【" + this.index + "】开睡失败: " + _0x4be7c7.err_tips);
              }
            }
          } catch (_0xf6a583) {
            $.logErr(_0xf6a583, _0x5a6a6e);
          } finally {
            _0x360a78();
          }
        }, _0x242c2b);
      }
    });
  }
  async ["doneEat"](_0x27cb8f = 2000) {
    return new Promise(_0x4f6468 => {
      {
        let _0x265fdb = {
          "url": hostname + "/luckycat/lite/v1/eat/done_eat/?" + this.ck[0],
          "headers": {
            "Host": host,
            "Connection": "Keep-Alive",
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": this.ck[4],
            "Cookie": this.ck[1],
            "x-argus": this.ck[2],
            "x-ladon": this.ck[3]
          }
        };
        $.post(_0x265fdb, async (_0x3b1ecd, _0x293a22, _0x2c23f4) => {
          try {
            if (_0x3b1ecd) $.logErr(_0x3b1ecd);else {
              let _0x46d8d7 = JSON.parse(_0x2c23f4);
              _0x46d8d7.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】吃饭奖励: 获得 " + _0x46d8d7.data.score_amount + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】吃饭奖励: " + _0x46d8d7.err_tips);
            }
          } catch (_0x3672e1) {
            $.logErr(_0x3672e1, _0x293a22);
          } finally {
            _0x4f6468();
          }
        }, _0x27cb8f);
      }
    });
  }
  async ["doneeat_video"](_0x2b70b7 = 2000) {
    return new Promise(_0x40a77e => {
      let _0x3f442d = {
        "url": hostname + "/luckycat/lite/v1/task/done/excitation_ad/?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        },
        "body": "{\"task_id\":181,\"score_source\":0,\"ad_id\":5,\"ad_from\":\"coin\",\"amount\":1200,\"coin_count\":1200,\"ad_alias_position\":\"task\",\"ad_rit\":5,\"task_key\":\"excitation_ad/\",\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":51,\"dynamic_settings_version\":51,\"poll_settings_version\":0}"
      };
      $.post(_0x3f442d, async (_0x4ee8c5, _0x4ce1e9, _0xd2c33b) => {
        try {
          if (_0x4ee8c5) $.logErr(_0x4ee8c5);else {
            let _0x43a970 = JSON.parse(_0xd2c33b);
            if (_0x43a970.err_no == 0) {
              let _0x3eaa38 = Number(this.numvodie);
              for (let _0x17b7a1 = 0; _0x17b7a1 < _0x3eaa38; _0x17b7a1 = _0x17b7a1 + 1) {
                {
                  if (_0x43a970.err_no == 4) {
                    DoubleLog("\n ❌ 【" + this.index + "】吃饭视频: " + _0x43a970.err_tips);
                    break;
                  } else {
                    if (_0x43a970.data.reward_amount < 10) {
                      DoubleLog("\n ✅ 【" + this.index + "】吃饭视频: 获得奖励 " + _0x43a970.data.reward_amount + " 金币，收入低停止执行");
                      break;
                    } else await this.doneeat_video_stop(2000), await $.wait(30000);
                  }
                  if (_0x17b7a1 == 10) break;
                }
              }
            } else {
              DoubleLog("\n ❌ 【" + this.index + "】步数视频: " + _0x43a970.err_tips);
            }
          }
        } catch (_0x159bb9) {
          $.logErr(_0x159bb9, _0x4ce1e9);
        } finally {
          _0x40a77e();
        }
      }, _0x2b70b7);
    });
  }
  async ["doneeat_video_stop"](_0x37b7f6 = 2000) {
    return new Promise(_0x4f7351 => {
      let _0x5e57ff = {
        "url": hostname + "/luckycat/lite/v1/task/done/excitation_ad/?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        },
        "body": "{\"task_id\":181,\"score_source\":0,\"ad_id\":5,\"ad_from\":\"coin\",\"amount\":1200,\"coin_count\":1200,\"ad_alias_position\":\"task\",\"ad_rit\":5,\"task_key\":\"excitation_ad/\",\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":51,\"dynamic_settings_version\":51,\"poll_settings_version\":0}"
      };
      $.post(_0x5e57ff, async (_0x3930be, _0x3ee6af, _0x2f107d) => {
        try {
          if (_0x3930be) $.logErr(_0x3930be);else {
            let _0x5c6725 = JSON.parse(_0x2f107d);
            _0x5c6725.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】吃饭视频: 获得奖励 " + _0x5c6725.data.reward_amount + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】吃饭视频: " + _0x5c6725.err_tips);
          }
        } catch (_0x15eb95) {
          $.logErr(_0x15eb95, _0x3ee6af);
        } finally {
          _0x4f7351();
        }
      }, _0x37b7f6);
    });
  }
  async ["open_newswhole"](_0x5ca83d, _0x57bcfa = 2000) {
    return new Promise(_0x349c7a => {
      let _0x4c8fe4 = {
        "url": hostname + "/luckycat/lite/v1/activity/done_whole_scene_task?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        },
        "body": "{}"
      };
      $.post(_0x4c8fe4, async (_0x39bf80, _0x5c2ff7, _0x49106e) => {
        try {
          {
            if (_0x39bf80) {
              $.logErr(_0x39bf80);
            } else {
              let _0x5d166e = JSON.parse(_0x49106e);
              _0x5d166e.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】阅读翻倍: 开启翻倍成功") : DoubleLog("\n ❌ 【" + this.index + "】阅读翻倍: " + _0x5d166e.err_tips);
            }
          }
        } catch (_0x2a4e96) {
          $.logErr(_0x2a4e96, _0x5c2ff7);
        } finally {
          _0x349c7a();
        }
      }, _0x57bcfa);
    });
  }
  async ["news"](_0x4bd390 = 2000) {
    return new Promise(_0x4618a5 => {
      let _0x2ce54b = {
        "url": hostname + "/luckycat/lite/v1/activity/done_whole_scene_task?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        },
        "body": "{\"scene_key\":\"mix_small_video\",\"group_id\":\"1771290489044043\"}"
      };
      $.post(_0x2ce54b, async (_0x12673c, _0xe68229, _0x391534) => {
        try {
          if (_0x12673c) $.logErr(_0x12673c);else {
            {
              let _0x4434fd = JSON.parse(_0x391534);
              if (_0x4434fd.err_no == 0) {
                DoubleLog("\n ✅ 【" + this.index + "】阅读统计: 已赚 " + _0x4434fd.data.total_score_amount + " 金，阅读时长 " + $.time("mm:ss", _0x4434fd.data.total_time * 1000) + " 分钟");
                let _0x36a6e8 = Number(this.numvodie),
                  _0x579924 = _0x4434fd.data.total_time;
                for (let _0xe02ac7 = 1; _0xe02ac7 < _0x36a6e8; _0xe02ac7 = _0xe02ac7 + 1) {
                  DoubleLog("\n ✅ 【" + this.index + "】阅读文章: 正在第 " + _0xe02ac7 + " 次阅读，请等待...");
                  await $.wait(30000);
                  await this.open_news(2000);
                  if (_0xe02ac7 == 10) {
                    await this.open_news_stop(_0x579924, 2000);
                    break;
                  }
                }
              } else DoubleLog("\n ❌ 【" + this.index + "】阅读文章: " + _0x4434fd.err_tips);
            }
          }
        } catch (_0xb243de) {
          $.logErr(_0xb243de, _0xe68229);
        } finally {
          _0x4618a5();
        }
      }, _0x4bd390);
    });
  }
  async ["open_news"](_0x50a287, _0x85ba6b = 2000) {
    return new Promise(_0x3fc753 => {
      let _0x1276b8 = {
        "url": hostname + "/luckycat/lite/v1/activity/done_whole_scene_task/?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        },
        "body": "{\"scene_key\":\"little_headline_detial\",\"group_id\":\"1771290489044043\"}"
      };
      $.post(_0x1276b8, async (_0x4b8a9a, _0x8caa1d, _0x4010b3) => {
        try {
          if (_0x4b8a9a) $.logErr(_0x4b8a9a);else {
            {
              let _0x33fba3 = JSON.parse(_0x4010b3);
              if (_0x33fba3.err_no == 0) {
                let _0x1d84ce = _0x33fba3.data.total_time - _0x50a287;
                DoubleLog("\n ✅ 【" + this.index + "】阅读文章: 获得奖励 " + _0x33fba3.data.score_amount + " 金币，阅读增加 " + $.time("ss", _0x1d84ce * 1000) + " 秒");
              } else DoubleLog("\n ❌ 【" + this.index + "】阅读文章: " + _0x33fba3.err_tips);
            }
          }
        } catch (_0x44f8f7) {
          $.logErr(_0x44f8f7, _0x8caa1d);
        } finally {
          _0x3fc753();
        }
      }, _0x85ba6b);
    });
  }
  async ["open_news_stop"](_0x583f3a = 2000) {
    return new Promise(_0x6adf2a => {
      let _0x59ba20 = {
        "url": hostname + "/luckycat/lite/v1/activity/whole_scene/collect/?" + this.ck[0],
        "headers": {
          "Host": host,
          "Connection": "Keep-Alive",
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": this.ck[4],
          "Cookie": this.ck[1],
          "x-argus": this.ck[2],
          "x-ladon": this.ck[3]
        },
        "body": "{\"progress_seconds\":}"
      };
      $.post(_0x59ba20, async (_0x501e1b, _0x12e9c2, _0x259d6e) => {
        try {
          {
            if (_0x501e1b) {
              $.logErr(_0x501e1b);
            } else {
              {
                let _0x36823f = JSON.parse(_0x259d6e);
                _0x36823f.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】时段奖励: 获得奖励 " + _0x36823f.data.reward_amount + " 金币,时长" + $.time("mm:ss", _0x36823f.data.total_score_amount * 1000) + "分钟") : DoubleLog("\n ❌ 【" + this.index + "】时段奖励: " + _0x36823f.err_tips);
              }
            }
          }
        } catch (_0xd08e81) {
          $.logErr(_0xd08e81, _0x12e9c2);
        } finally {
          _0x6adf2a();
        }
      }, _0x583f3a);
    });
  }
}
!(async () => {
  if (typeof $request !== "undefined") DoubleLog("\n 乐客播提示：系统变量未填写 Token，请检查重写设置");else {
    if (!(await checkEnv())) return;
    if (userList.length > 0) {
      DoubleLog("\n 🎉 " + name_data + "用户版：" + update_data + "到期，更新请到Q群：104062430");
      DoubleLog("\n 🎉 交流Q群：104062430 作者:乐客播 欢迎前来提交bug");
      DoubleLog("\n================ 共找到 " + userList.length + " 个账号 ================ \n\n 脚本执行✌北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + " ");
      versionupdate == 1 ? (await getVersion(), DoubleLog("\n================ 版本对比检查更新 ==============="), scriptVersionLatest != scriptVersion ? (DoubleLog("\n 当前版本：" + scriptVersion + "，更新时间：" + update_tines), DoubleLog("\n 最新版本：" + scriptVersionLatest), DoubleLog("\n 更新信息：" + update_data)) : DoubleLog("\n 版本信息：" + scriptVersion + " ，已是最新版本无需更新开始执行脚本")) : (DoubleLog("\n================ 版本对比检查更新 ==============="), DoubleLog("\n 当前版本:" + scriptVersion + "，更新时间:" + update_tines + "，已设不更新版本"));
      DoubleLog("\n================ 开始执行会员脚本 ===============");
      if (signTime > update_data) DoubleLog("\n\n 系统提示：脚本使用时间已到期，更新请到Q群：104062430\n\n");else userList.length > this.name_data ? DoubleLog("\n\n 系统提示：你的账号已超出作者指定的数量暂时不执行脚本\n\n") : await start();
    }
  }
})().catch(_0x48d14d => console.log(_0x48d14d)).finally(() => $.done());
async function checkEnv() {
  if (userCookie) {
    let _0x262ce0 = envSplitor[0];
    for (let _0x1a23c8 of envSplitor) if (userCookie.indexOf(_0x1a23c8) > -1) {
      {
        _0x262ce0 = _0x1a23c8;
        break;
      }
    }
    for (let _0x1a45fd of userCookie.split(_0x262ce0)) _0x1a45fd && userList.push(new UserInfo(_0x1a45fd));
    userCount = userList.length;
  } else {
    {
      console.log("\n 乐客播提示：系统变量未填写 UserCookie");
      return;
    }
  }
  return true;
}
function getVersion(_0x2bd014 = 3000) {
  return new Promise(_0x2722a6 => {
    {
      let _0x16fd3b = {
        "url": "https://ghproxy.com/https://raw.githubusercontent.com/qq274023/lekebo/master/lekebo_kww.js"
      };
      $.get(_0x16fd3b, async (_0x1dba78, _0x2d41b7, _0x415a72) => {
        try {
          scriptVersionLatest = _0x415a72.match(/scriptVersion = "([\d\.]+)"/)[1];
          update_data = _0x415a72.match(/update_data = "(.*?)"/)[1];
        } catch (_0xeb0d47) {
          $.logErr(_0xeb0d47, _0x2d41b7);
        } finally {
          _0x2722a6();
        }
      }, _0x2bd014);
    }
  });
}
function randomString(_0x23cccb) {
  _0x23cccb = _0x23cccb || 32;
  var _0x1e7ffe = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    _0x36d6a5 = _0x1e7ffe.length,
    _0x2e6cba = "";
  for (i = 0; i < _0x23cccb; i++) _0x2e6cba += _0x1e7ffe.charAt(Math.floor(Math.random() * _0x36d6a5));
  return _0x2e6cba;
}
function randomsstring(_0x172c03, _0x3e08b0 = "abcdefhijkmnprstwxyz123456789") {
  _0x172c03 = _0x172c03 || 32;
  let _0x1e6000 = _0x3e08b0.length,
    _0x58e4c0 = "";
  for (let _0x3cc7a6 = 0; _0x3cc7a6 < _0x172c03; _0x3cc7a6++) _0x58e4c0 += _0x3e08b0.charAt(Math.floor(Math.random() * _0x1e6000));
  return _0x58e4c0;
}
function randomNum(_0x4fc2b4, _0x5d4b0e) {
  if (arguments.length === 0) return Math.random();
  if (!_0x5d4b0e) _0x5d4b0e = 10 ** (Math.log(_0x4fc2b4) * Math.LOG10E + 1 | 0) - 1;
  return Math.floor(Math.random() * (_0x5d4b0e - _0x4fc2b4 + 1) + _0x4fc2b4);
}
function getUA() {
  $.UUID = randomString(40);
  const _0x30ce3d = {
    "167814": "10.1.4",
    "167841": "10.1.6",
    "167853": "10.2.0"
  };
  $.osVersion = randomNum(13, 14) + "." + randomNum(3, 6) + "." + randomNum(1, 3);
  let _0x4bdfc4 = "network/" + ["4g", "5g", "wifi"][randomNum(0, 2)];
  $.mobile = "iPhone" + randomNum(9, 13) + "," + randomNum(1, 3);
  $.build = ["167814", "167841", "167853"][randomNum(0, 2)];
  $.appVersion = _0x30ce3d[$.build];
  return "jdapp;iPhone;" + $.appVersion + ";" + $.osVersion + ";" + $.UUID + ";M/5.0;" + _0x4bdfc4 + ";ADID/;model/" + $.mobile + ";addressid/;appBuild/" + $.build + ";jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS " + $.osVersion.replace(/\./g, "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}
function getTime(_0x548484) {
  var _0x31078f = new Date(_0x548484);
  let _0x2f7e2b = _0x31078f.getFullYear(),
    _0x4b97d7 = _0x31078f.getMonth() + 1 < 10 ? "0" + (_0x31078f.getMonth() + 1) : _0x31078f.getMonth() + 1,
    _0x12ac2e = _0x31078f.getDate() < 10 ? "0" + _0x31078f.getDate() : _0x31078f.getDate(),
    _0x3cc629 = _0x31078f.getHours() < 10 ? "0" + _0x31078f.getHours() : _0x31078f.getHours(),
    _0x189aec = _0x31078f.getMinutes() < 10 ? "0" + _0x31078f.getMinutes() : _0x31078f.getMinutes(),
    _0x4f396e = _0x31078f.getSeconds() < 10 ? "0" + _0x31078f.getSeconds() : _0x31078f.getSeconds();
  return _0x2f7e2b + "-" + _0x4b97d7 + "-" + _0x12ac2e + " " + _0x3cc629 + ":" + _0x189aec + ":" + _0x4f396e;
}