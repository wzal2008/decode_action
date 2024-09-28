//Sat Sep 28 2024 07:49:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let envSplitor = ["@", "\n"],
  httpResult,
  httpReq,
  httpResp,
  userCookie = ($.isNode() ? process.env.dyjsbbf : $.getdata("dyjsbbf")) || "",
  userList = [],
  userIdx = 0,
  userCount = 0;
var myDate = new Date(),
  myHour = myDate.getHours();
class UserInfo {
  constructor(_0x44e82f) {
    this.index = ++userIdx;
    this.name = this.index;
    this.valid = false;
    this.cFlag = true;
    this.xg = 0;
    this.xt = "";
    this.ydid = "";
    this.name = "";
    this.tid = "";
    this.sjid = "";
    this.bxurl = "";
    try {
      this.ck = _0x44e82f;
      this.uu = this.ck.split("#")[1];
      this.xg = this.ck.split("#")[2];
      this.xt = this.ck.split("#")[3];
      this.ck = this.ck.split("#")[0];
    } catch (_0x5399ed) {}
  }
  async sh() {
    try {
      await this.fqxx();
      await this.fqqd();
      await this.fqqdsp();
      await this.fqkgg();
      await this.fqgj();
      myHour == 19 && (await this.fqzl(), await this.fqzb(), await this.fqws());
      await this.fqbx();
      await this.fqbxsp();
      await this.fqcfbt();
      await this.fqcfsp();
      for (let _0x228381 of ["excitation_ad_signin", "excitation_ad", "walk_excitation_ad"]) {
        this.tid = _0x228381;
        await this.fqqdrw();
      }
      await this.fqllsp();
    } catch (_0x39c2a3) {
      console.log(_0x39c2a3);
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqxx() {
    try {
      let _0x2e2086 = "https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/page?mode=done&update_version_code=16209900&os_api=29&device_platform=android&aid=2329&oaid=" + random(16) + "&device_id=" + random(16) + "&iid=" + randomString(16) + "&ac=wifi&channel=bf_1007913_2329_47_3&aid=2329";
      this.populateUrlObject(_0x2e2086);
      await httpRequest("get", this.urlObject);
      let _0x28d5a9 = httpResult;
      _0x28d5a9.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版：" + _0x28d5a9.data.income_data.amount1 + "金币,现金余额：" + _0x28d5a9.data.income_data.amount2 / 100 + "元") : (console.log("账号[" + this.index + "]:抖音极速版：" + JSON.stringify(_0x28d5a9)), this.cFlag = false);
    } catch (_0x175f99) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqqd() {
    try {
      let _0x29a5df = "https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/sign_in?" + this.uu,
        _0x53be6d = "{}";
      this.populateUrlObject(_0x29a5df, _0x53be6d);
      await httpRequest("post", this.urlObject);
      let _0x1dcc68 = httpResult;
      _0x1dcc68.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版签到获得：" + _0x1dcc68.data.amount + "金币") : this.cFlag = false;
    } catch (_0x6b2316) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqqdsp() {
    try {
      let _0x595ed2 = "https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/excitation_ad_signin?mode=done&update_version_code=16209900&os_api=29&device_platform=android&aid=2329&oaid=" + random(16) + "&device_id=" + random(16) + "&iid=" + randomString(16) + "&ac=wifi&channel=bf_1007913_2329_47_3&aid=2329",
        _0xf26fb2 = "{}";
      this.populateUrlObject(_0x595ed2, _0xf26fb2);
      await httpRequest("post", this.urlObject);
      let _0x4a7194 = httpResult;
      _0x4a7194.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版签到视频获得：" + _0x4a7194.data.amount + "金币") : this.cFlag = false;
    } catch (_0x27744d) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqqdrw() {
    try {
      let _0x3cb78e = "https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/excitation_ad/one_more?mode=done&update_version_code=16209900&os_api=29&device_platform=android&aid=2329&oaid=" + random(16) + "&device_id=" + random(16) + "&iid=" + randomString(16) + "&ac=wifi&channel=bf_1007913_2329_47_3&aid=2329",
        _0x544268 = "{\"task_key\":\"" + this.tid + "\"}";
      this.populateUrlObject(_0x3cb78e, _0x544268);
      await httpRequest("post", this.urlObject);
      let _0x23a3f6 = httpResult;
      _0x23a3f6.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版额外奖励获得：" + _0x23a3f6.data.amount + "金币") : this.cFlag = false;
    } catch (_0x460f7f) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqqdbxlx() {
    try {
      let _0x4873a1 = "https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/excitation_ad/one_more?mode=done&update_version_code=16209900&os_api=29&device_platform=android&aid=2329&oaid=" + random(16) + "&device_id=" + random(16) + "&iid=" + randomString(16) + "&ac=wifi&channel=bf_1007913_2329_47_3&aid=2329",
        _0x531406 = "{\"task_key\":\"excitation_ad_treasure_box\",\"rit\":\"28038\",\"creator_id\":\"12317000\",\"one_more_round\":" + this.tid + "}";
      this.populateUrlObject(_0x4873a1, _0x531406);
      await httpRequest("post", this.urlObject);
      let _0x1e6885 = httpResult;
      _0x1e6885.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版宝箱视频连续奖励" + this.tid + "获得：" + _0x1e6885.data.amount + "金币") : this.cFlag = false;
    } catch (_0x5a5fe9) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqlx() {
    try {
      let _0x9028e7 = "https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/excitation_ad/one_more/detail?task_key=excitation_ad_treasure_box&rit=28038&creator_id=12317000&one_more_round=" + this.tid + "&update_version_code=16209900&os_api=29&device_platform=android&aid=2329&oaid=" + random(16) + "&device_id=" + random(16) + "&iid=" + randomString(16) + "&ac=wifi&channel=bf_1007913_2329_47_3&aid=2329";
      this.populateUrlObject(_0x9028e7);
      await httpRequest("get", this.urlObject);
      let _0x1e1480 = httpResult;
      _0x1e1480.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版宝箱连续视频下次奖励：" + _0x1e1480.data.amount + "金币") : this.cFlag = false;
    } catch (_0x5393b) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqkgg() {
    try {
      let _0x271dfd = "https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/excitation_ad?mode=done&update_version_code=16209900&os_api=29&device_platform=android&aid=2329&oaid=" + random(16) + "&device_id=" + random(16) + "&iid=" + randomString(16) + "&ac=wifi&channel=bf_1007913_2329_47_3&aid=2329",
        _0x13fecc = "{\"from\":\"excitation_ad\"}";
      this.populateUrlObject(_0x271dfd, _0x13fecc);
      await httpRequest("post", this.urlObject);
      let _0x55f984 = httpResult;
      _0x55f984.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版看广告获得：" + _0x55f984.data.amount + "金币") : this.cFlag = false;
    } catch (_0x58551f) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqgj() {
    try {
      let _0x25fe25 = "https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/shopping_gold?mode=done&update_version_code=14209900&os_api=29&device_platform=android&aid=2329&oaid=" + random(16) + "&device_id=" + random(16) + "&iid=" + randomString(16) + "&ac=wifi&channel=bf_1007913_2329_47_3&aid=2329&app_name=douyin_lite&version_code=140100&version_name=14.1.0&device_platform=android&ssmix=a&device_type=16s%20Pro&device_brand=meizu&language=zh&os_api=29&os_version=10&openudid=" + randomString(16) + "&manifest_version_code=140100&resolution=1080*2232&dpi=480&update_version_code=14109900&_rticket=1653539259693&mcc_mnc=46011&tool_grey_user=0&cpu_support64=true&host_abi=armeabi-v7",
        _0x1f761e = "body=11222";
      this.populateUrlObject(_0x25fe25, _0x1f761e);
      await httpRequest("post", this.urlObject);
      let _0x528d7f = httpResult;
      _0x528d7f.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版逛街：" + _0x528d7f.data.reward_text) : this.cFlag = false;
    } catch (_0x1f497f) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqzb() {
    try {
      let _0x253359 = "https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/walk_excitation_ad?mode=done&update_version_code=16209900&os_api=29&device_platform=android&aid=2329&oaid=" + random(16) + "&device_id=" + random(16) + "&iid=" + randomString(16) + "&ac=wifi&channel=bf_1007913_2329_47_3&aid=2329",
        _0x5673d0 = "{\"amount\":\"2000\"}";
      this.populateUrlObject(_0x253359, _0x5673d0);
      await httpRequest("post", this.urlObject);
      let _0x3a5cea = httpResult;
      _0x3a5cea.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版走路视频获得：" + _0x3a5cea.data.amount + "金币") : this.cFlag = false;
    } catch (_0x1f8041) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqzl() {
    let _0x5c1375 = Math.round(new Date().getTime() / 1000);
    try {
      let _0x2345b5 = "https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/walk/step_submit?" + this.uu,
        _0x256284 = "{\"submit_time\":" + _0x5c1375 + ",\"step\":11145}";
      this.populateUrlObject(_0x2345b5, _0x256284);
      await httpRequest("post", this.urlObject);
      let _0x5391cf = httpResult;
      _0x5391cf.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版上传步数成功") : (console.log("账号[" + this.index + "]:抖音极速版走路:" + _0x5391cf.err_tips), this.cFlag = false);
    } catch (_0xf3d846) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqbx() {
    try {
      let _0x4c2295 = "https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/treasure_task?" + this.uu,
        _0x24a4cd = "{}";
      this.populateUrlObject(_0x4c2295, _0x24a4cd);
      await httpRequest("post", this.urlObject);
      let _0x1371c3 = httpResult;
      _0x1371c3.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版开宝箱获得：" + _0x1371c3.data.amount + "金币") : (console.log("账号[" + this.index + "]:抖音极速版开宝箱:" + _0x1371c3.err_tips), this.cFlag = false);
    } catch (_0x337ce5) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqllsp() {
    try {
      let _0x1ceb4a = "https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/read?" + this.uu,
        _0x5c20ff = "{}";
      this.populateUrlObject(_0x1ceb4a, _0x5c20ff);
      await httpRequest("post", this.urlObject);
      let _0x4aeab6 = httpResult;
      _0x4aeab6.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版刷视频30S获得：" + _0x4aeab6.data.score_amount + "金币") : (console.log("账号[" + this.index + "]:抖音极速版刷视频30S:" + _0x4aeab6.err_tips), this.cFlag = false);
    } catch (_0x516c77) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqbxsp() {
    try {
      let _0x23ec4a = "https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/excitation_ad_treasure_box?mode=done&update_version_code=16209900&os_api=29&device_platform=android&aid=2329&oaid=" + random(16) + "&device_id=" + random(16) + "&iid=" + randomString(16) + "&ac=wifi&channel=bf_1007913_2329_47_3&aid=2329",
        _0x1d0bc3 = "";
      this.populateUrlObject(_0x23ec4a, _0x1d0bc3);
      await httpRequest("post", this.urlObject);
      let _0x108ef2 = httpResult;
      if (_0x108ef2.err_no == 0) {
        console.log("账号[" + this.index + "]:抖音极速版开宝箱视频获得：" + _0x108ef2.data.amount + "金币");
        for (let _0x1aab15 = 0; _0x1aab15 < 3; _0x1aab15++) {
          this.tid = _0x1aab15;
          await this.fqlx();
          await this.fqqdbxlx();
          await $.wait(3000);
        }
      } else {
        console.log("账号[" + this.index + "]:抖音极速版开宝箱视频:" + _0x108ef2.err_tips);
        for (let _0x2b5e7f = 0; _0x2b5e7f < 3; _0x2b5e7f++) {
          this.tid = _0x2b5e7f;
          await this.fqlx();
          await this.fqqdbxlx();
          await $.wait(3000);
        }
        this.cFlag = false;
      }
    } catch (_0xd9f57) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqws() {
    try {
      let _0x2d6506 = "https://api5-normal-c-lq.amemv.com/aweme/ug/lite/social/square/unpublish_list?" + this.uu;
      this.populateUrlObject(_0x2d6506);
      await httpRequest("get", this.urlObject);
      let _0x283f73 = httpResult;
      _0x283f73.err_no == 0 ? (console.log("账号[" + this.index + "]:抖音极速版分享动态：" + _0x283f73.data.moment_list[0].author.author_tag), this.tid = _0x283f73.data.moment_list[0].id, await this.fqfx()) : this.cFlag = false;
    } catch (_0x5c8406) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqcfbt() {
    try {
      let _0x5246d6 = "https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/meal_excitation_ad?iid=" + random(16) + "&device_id=" + random(16) + "&ac=wifi&channel=wandoujia_2329_0624&aid=2329&app_name=douyin_lite&version_code=220900&version_name=22.9.0&device_platform=android&os=android&ssmix=a&device_type=16s+Pro&device_brand=meizu&language=zh&os_api=29&os_version=10&manifest_version_code=220901&resolution=1080*2232&dpi=480&update_version_code=22909900&_rticket=1679058377213&package=com.ss.android.ugc.aweme.lite&gold_container=0&cpu_support64=true&host_abi=armeabi-v7a&is_guest_mode=0&app_type=normal&minor_status=0&appTheme=dark&need_personal_recommend=1&is_android_pad=0&luckydog_sdk_version=7.0.0-rc.9&luckydog_api_version=7.0.0-rc.9&luckydog_settings_version=47047&luckycat_version_name=7.0.0-rc.9&luckycat_version_code=700009&status_bar_height=32",
        _0x217d4b = "{}";
      this.populateUrlObject(_0x5246d6, _0x217d4b);
      await httpRequest("post", this.urlObject);
      let _0x3a3a90 = httpResult;
      _0x3a3a90.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版吃饭补贴视频获得：" + _0x3a3a90.data.amount + "金币") : this.cFlag = false;
    } catch (_0x4a71a4) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqcfsp() {
    try {
      let _0x1e4045 = "https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/excitation_ad/one_more?mode=done&update_version_code=16209900&os_api=29&device_platform=android&aid=2329&oaid=" + random(16) + "&device_id=" + random(16) + "&iid=" + randomString(16) + "&ac=wifi&channel=bf_1007913_2329_47_3&aid=2329",
        _0x574a12 = "{\"task_key\":\"meal_excitation_ad\",\"rit\":\"28038\",\"creator_id\":\"12320000\",\"one_more_round\":0}";
      this.populateUrlObject(_0x1e4045, _0x574a12);
      await httpRequest("post", this.urlObject);
      let _0x3ac6ff = httpResult;
      _0x3ac6ff.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版吃饭补贴视频获得：" + _0x3ac6ff.data.amount + "金币") : this.cFlag = false;
    } catch (_0x562163) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async fqfx() {
    try {
      let _0x48c5cb = "https://api5-normal-c-lq.amemv.com/aweme/lite/v1/social/done/moment_inspire?" + this.uu,
        _0x446d07 = "{\"moment_id\":\"" + this.tid + "\"}";
      this.populateUrlObject(_0x48c5cb, _0x446d07);
      await httpRequest("post", this.urlObject);
      let _0x4fd481 = httpResult;
      _0x4fd481.err_no == 0 ? console.log("账号[" + this.index + "]:抖音极速版分享获得：" + _0x4fd481.data.amount + "金币") : (console.log("账号[" + this.index + "]:抖音极速版分享:" + _0x4fd481.err_tips), this.cFlag = false);
    } catch (_0x4ae249) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async populateUrlObject(_0x3404e1, _0x6267b0 = "") {
    let _0x2ca38e = _0x3404e1.replace("//", "/").split("/")[1],
      _0x302480 = {
        url: _0x3404e1,
        headers: {
          Host: _0x2ca38e,
          "Content-Type": "application/json",
          Cookie: "sessionid=" + this.ck,
          "User-Agent": "com.ss.android.ugc.aweme.lite/220901 (Linux; U; Android 10; zh_CN; 16s Pro; Build/QKQ1.191222.002; Cronet/TTNetVersion:6fe86402 2022-07-22 QuicVersion:47946d2a 2020-10-14)",
          "Accept-Encoding": "gzip, deflate",
          "X-Gorgon": this.xg,
          "X-Khronos": this.xt
        },
        timeout: 5000,
        body: _0x6267b0
      };
    _0x6267b0;
    this.urlObject = _0x302480;
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await GetRewrite();
  } else {
    if (!(await checkEnv())) {
      return;
    }
    if (userList.length > 0) {
      taskall = [];
      for (let _0x40d832 of userList) {
        if (_0x40d832.cFlag) {
          taskall.push(_0x40d832.sh());
        }
        taskall.length > 4 && (await Promise.all(taskall), taskall = []);
      }
      if (taskall.length > 0) {
        await Promise.all(taskall);
      }
    }
    await $.showmsg();
  }
})().catch(_0x4998c9 => console.log(_0x4998c9)).finally(() => $.done());
async function GetRewrite() {
  $request.url.indexOf("api.ibreader.com/api/user/userInfo") > -1 && (ck = "" + $request.headers.Cookie, userCookie ? -1 == userCookie.indexOf(ck) && (userCookie = userCookie + "@" + ck, $.setdata(userCookie, "bkcookie"), ckList = userCookie.split("@"), $.msg("获取第" + ckList.length + "个ck成功: " + ck)) : ($.setdata(ck, "bkcookie"), $.msg("获取第1个ck成功: " + ck)));
}
async function checkEnv() {
  if (userCookie) {
    let _0x243683 = envSplitor[0];
    for (let _0x2503ce of envSplitor) if (userCookie.indexOf(_0x2503ce) > -1) {
      _0x243683 = _0x2503ce;
      break;
    }
    for (let _0x1eae16 of userCookie.split(_0x243683)) _0x1eae16 && userList.push(new UserInfo(_0x1eae16));
    userCount = userList.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + userCount + "个账号");
  return !0;
}
function randomString(_0x11d933 = 12) {
  let _0x3d0d77 = "abcdef0123456789",
    _0x18eefa = _0x3d0d77.length,
    _0x45d861 = "";
  for (i = 0; i < _0x11d933; i++) {
    _0x45d861 += _0x3d0d77.charAt(Math.floor(Math.random() * _0x18eefa));
  }
  return _0x45d861;
}
function populateUrlObject(_0x2ddfb0, _0x56cdc1, _0x584226 = "") {
  let _0x38945a = _0x2ddfb0.replace("//", "/").split("/")[1],
    _0x332d0d = {
      url: _0x2ddfb0,
      headers: {
        Host: _0x38945a,
        Cookie: this.ck
      },
      timeout: 5000,
      body: _0x584226
    };
  _0x584226;
  return _0x332d0d;
}
async function httpRequest(_0x281fb9, _0x5834a6) {
  httpResult = null;
  httpReq = null;
  httpResp = null;
  return new Promise(_0x104fa1 => {
    $.send(_0x281fb9, _0x5834a6, async (_0x32c765, _0xe18c7e, _0x30269e) => {
      try {
        if (!(httpReq = _0xe18c7e, httpResp = _0x30269e, _0x32c765)) {
          if (_0x30269e.body) {
            if ("object" == typeof _0x30269e.body) {
              httpResult = _0x30269e.body;
            } else {
              try {
                httpResult = JSON.parse(_0x30269e.body);
              } catch (_0xcb4bfe) {
                httpResult = _0x30269e.body;
              }
            }
          }
        }
      } catch (_0xc5ffa4) {
        console.log(_0xc5ffa4);
      } finally {
        _0x104fa1();
      }
    });
  });
}
function random(_0x213bf5 = 12) {
  let _0x33fbef = "0123456789",
    _0x3a38bb = _0x33fbef.length,
    _0x199df9 = "";
  for (i = 0; i < _0x213bf5; i++) {
    _0x199df9 += _0x33fbef.charAt(Math.floor(Math.random() * _0x3a38bb));
  }
  return _0x199df9;
}
function MD5Encrypt(_0x16e3fa) {
  function _0x52c31a(_0x42e27e, _0x5eeafd) {
    return _0x42e27e << _0x5eeafd | _0x42e27e >>> 32 - _0x5eeafd;
  }
  function _0x559acd(_0x7206ff, _0x12abaf) {
    var _0x1aea4c, _0x1b44d4, _0x3d722b, _0x48e3b3, _0x18d5f6;
    _0x3d722b = 2147483648 & _0x7206ff;
    _0x48e3b3 = 2147483648 & _0x12abaf;
    _0x1aea4c = 1073741824 & _0x7206ff;
    _0x1b44d4 = 1073741824 & _0x12abaf;
    _0x18d5f6 = (1073741823 & _0x7206ff) + (1073741823 & _0x12abaf);
    return _0x1aea4c & _0x1b44d4 ? 2147483648 ^ _0x18d5f6 ^ _0x3d722b ^ _0x48e3b3 : _0x1aea4c | _0x1b44d4 ? 1073741824 & _0x18d5f6 ? 3221225472 ^ _0x18d5f6 ^ _0x3d722b ^ _0x48e3b3 : 1073741824 ^ _0x18d5f6 ^ _0x3d722b ^ _0x48e3b3 : _0x18d5f6 ^ _0x3d722b ^ _0x48e3b3;
  }
  function _0x86baa7(_0x42f9bd, _0x49ab85, _0x6ca7c5) {
    return _0x42f9bd & _0x49ab85 | ~_0x42f9bd & _0x6ca7c5;
  }
  function _0x5d9cb3(_0x4f793d, _0x51dcc6, _0x4ddbf4) {
    return _0x4f793d & _0x4ddbf4 | _0x51dcc6 & ~_0x4ddbf4;
  }
  function _0x2ce6ba(_0x17251c, _0x32ecd1, _0x24637b) {
    return _0x17251c ^ _0x32ecd1 ^ _0x24637b;
  }
  function _0x149d0c(_0x31b3a2, _0x3945d2, _0x360828) {
    return _0x3945d2 ^ (_0x31b3a2 | ~_0x360828);
  }
  function _0x36cb68(_0xd09814, _0x353150, _0x596191, _0x313998, _0x2074d8, _0x2a43f8, _0x7433ee) {
    _0xd09814 = _0x559acd(_0xd09814, _0x559acd(_0x559acd(_0x86baa7(_0x353150, _0x596191, _0x313998), _0x2074d8), _0x7433ee));
    return _0x559acd(_0x52c31a(_0xd09814, _0x2a43f8), _0x353150);
  }
  function _0x8e305(_0x387bad, _0x2b8913, _0x2a1190, _0x363272, _0x3c15fe, _0x44b7ce, _0x29f3f4) {
    _0x387bad = _0x559acd(_0x387bad, _0x559acd(_0x559acd(_0x5d9cb3(_0x2b8913, _0x2a1190, _0x363272), _0x3c15fe), _0x29f3f4));
    return _0x559acd(_0x52c31a(_0x387bad, _0x44b7ce), _0x2b8913);
  }
  function _0x4ace26(_0x322c6d, _0x40e157, _0x3e8ad6, _0x2185fb, _0x50db08, _0x35df13, _0x8874f9) {
    _0x322c6d = _0x559acd(_0x322c6d, _0x559acd(_0x559acd(_0x2ce6ba(_0x40e157, _0x3e8ad6, _0x2185fb), _0x50db08), _0x8874f9));
    return _0x559acd(_0x52c31a(_0x322c6d, _0x35df13), _0x40e157);
  }
  function _0x581f15(_0x386a28, _0x9446d0, _0x7d3dd8, _0x38f8fe, _0x405c82, _0x48eacf, _0x1afdc1) {
    _0x386a28 = _0x559acd(_0x386a28, _0x559acd(_0x559acd(_0x149d0c(_0x9446d0, _0x7d3dd8, _0x38f8fe), _0x405c82), _0x1afdc1));
    return _0x559acd(_0x52c31a(_0x386a28, _0x48eacf), _0x9446d0);
  }
  function _0x36ae5f(_0x3afd5a) {
    for (var _0x42eb48, _0x1242aa = _0x3afd5a.length, _0x4ec021 = _0x1242aa + 8, _0x370f4b = (_0x4ec021 - _0x4ec021 % 64) / 64, _0x28ee03 = 16 * (_0x370f4b + 1), _0x374d79 = new Array(_0x28ee03 - 1), _0x4703b2 = 0, _0x309ad5 = 0; _0x1242aa > _0x309ad5;) {
      _0x42eb48 = (_0x309ad5 - _0x309ad5 % 4) / 4;
      _0x4703b2 = _0x309ad5 % 4 * 8;
      _0x374d79[_0x42eb48] = _0x374d79[_0x42eb48] | _0x3afd5a.charCodeAt(_0x309ad5) << _0x4703b2;
      _0x309ad5++;
    }
    _0x42eb48 = (_0x309ad5 - _0x309ad5 % 4) / 4;
    _0x4703b2 = _0x309ad5 % 4 * 8;
    _0x374d79[_0x42eb48] = _0x374d79[_0x42eb48] | 128 << _0x4703b2;
    _0x374d79[_0x28ee03 - 2] = _0x1242aa << 3;
    _0x374d79[_0x28ee03 - 1] = _0x1242aa >>> 29;
    return _0x374d79;
  }
  function _0x75ce2a(_0x29e7db) {
    var _0x53c661,
      _0x3f95fa,
      _0x5682f3 = "",
      _0x23c7c8 = "";
    for (_0x3f95fa = 0; 3 >= _0x3f95fa; _0x3f95fa++) {
      _0x53c661 = _0x29e7db >>> 8 * _0x3f95fa & 255;
      _0x23c7c8 = "0" + _0x53c661.toString(16);
      _0x5682f3 += _0x23c7c8.substr(_0x23c7c8.length - 2, 2);
    }
    return _0x5682f3;
  }
  function _0x4fac14(_0x102d2b) {
    _0x102d2b = _0x102d2b.replace(/\r\n/g, "\n");
    for (var _0x7cbe8e = "", _0x187e6a = 0; _0x187e6a < _0x102d2b.length; _0x187e6a++) {
      var _0x147e1f = _0x102d2b.charCodeAt(_0x187e6a);
      128 > _0x147e1f ? _0x7cbe8e += String.fromCharCode(_0x147e1f) : _0x147e1f > 127 && 2048 > _0x147e1f ? (_0x7cbe8e += String.fromCharCode(_0x147e1f >> 6 | 192), _0x7cbe8e += String.fromCharCode(63 & _0x147e1f | 128)) : (_0x7cbe8e += String.fromCharCode(_0x147e1f >> 12 | 224), _0x7cbe8e += String.fromCharCode(_0x147e1f >> 6 & 63 | 128), _0x7cbe8e += String.fromCharCode(63 & _0x147e1f | 128));
    }
    return _0x7cbe8e;
  }
  var _0x5421da,
    _0x3bca21,
    _0x12aa79,
    _0x5a9cc9,
    _0x508b3a,
    _0x16232c,
    _0x4dfbe4,
    _0x7150f0,
    _0x5041b4,
    _0x18ff61 = [],
    _0x53c733 = 7,
    _0x287833 = 12,
    _0x3689ec = 17,
    _0x2533c4 = 22,
    _0x4a1705 = 5,
    _0x52569f = 9,
    _0xdf8d76 = 14,
    _0x8bbfb9 = 20,
    _0x44549c = 4,
    _0x563efd = 11,
    _0x1237b4 = 16,
    _0x4db4b1 = 23,
    _0x3995fa = 6,
    _0x2578db = 10,
    _0x501deb = 15,
    _0x45731f = 21;
  for (_0x16e3fa = _0x4fac14(_0x16e3fa), _0x18ff61 = _0x36ae5f(_0x16e3fa), _0x16232c = 1732584193, _0x4dfbe4 = 4023233417, _0x7150f0 = 2562383102, _0x5041b4 = 271733878, _0x5421da = 0; _0x5421da < _0x18ff61.length; _0x5421da += 16) {
    _0x3bca21 = _0x16232c;
    _0x12aa79 = _0x4dfbe4;
    _0x5a9cc9 = _0x7150f0;
    _0x508b3a = _0x5041b4;
    _0x16232c = _0x36cb68(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 0], _0x53c733, 3614090360);
    _0x5041b4 = _0x36cb68(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 1], _0x287833, 3905402710);
    _0x7150f0 = _0x36cb68(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 2], _0x3689ec, 606105819);
    _0x4dfbe4 = _0x36cb68(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 3], _0x2533c4, 3250441966);
    _0x16232c = _0x36cb68(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 4], _0x53c733, 4118548399);
    _0x5041b4 = _0x36cb68(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 5], _0x287833, 1200080426);
    _0x7150f0 = _0x36cb68(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 6], _0x3689ec, 2821735955);
    _0x4dfbe4 = _0x36cb68(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 7], _0x2533c4, 4249261313);
    _0x16232c = _0x36cb68(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 8], _0x53c733, 1770035416);
    _0x5041b4 = _0x36cb68(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 9], _0x287833, 2336552879);
    _0x7150f0 = _0x36cb68(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 10], _0x3689ec, 4294925233);
    _0x4dfbe4 = _0x36cb68(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 11], _0x2533c4, 2304563134);
    _0x16232c = _0x36cb68(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 12], _0x53c733, 1804603682);
    _0x5041b4 = _0x36cb68(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 13], _0x287833, 4254626195);
    _0x7150f0 = _0x36cb68(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 14], _0x3689ec, 2792965006);
    _0x4dfbe4 = _0x36cb68(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 15], _0x2533c4, 1236535329);
    _0x16232c = _0x8e305(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 1], _0x4a1705, 4129170786);
    _0x5041b4 = _0x8e305(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 6], _0x52569f, 3225465664);
    _0x7150f0 = _0x8e305(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 11], _0xdf8d76, 643717713);
    _0x4dfbe4 = _0x8e305(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 0], _0x8bbfb9, 3921069994);
    _0x16232c = _0x8e305(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 5], _0x4a1705, 3593408605);
    _0x5041b4 = _0x8e305(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 10], _0x52569f, 38016083);
    _0x7150f0 = _0x8e305(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 15], _0xdf8d76, 3634488961);
    _0x4dfbe4 = _0x8e305(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 4], _0x8bbfb9, 3889429448);
    _0x16232c = _0x8e305(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 9], _0x4a1705, 568446438);
    _0x5041b4 = _0x8e305(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 14], _0x52569f, 3275163606);
    _0x7150f0 = _0x8e305(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 3], _0xdf8d76, 4107603335);
    _0x4dfbe4 = _0x8e305(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 8], _0x8bbfb9, 1163531501);
    _0x16232c = _0x8e305(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 13], _0x4a1705, 2850285829);
    _0x5041b4 = _0x8e305(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 2], _0x52569f, 4243563512);
    _0x7150f0 = _0x8e305(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 7], _0xdf8d76, 1735328473);
    _0x4dfbe4 = _0x8e305(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 12], _0x8bbfb9, 2368359562);
    _0x16232c = _0x4ace26(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 5], _0x44549c, 4294588738);
    _0x5041b4 = _0x4ace26(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 8], _0x563efd, 2272392833);
    _0x7150f0 = _0x4ace26(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 11], _0x1237b4, 1839030562);
    _0x4dfbe4 = _0x4ace26(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 14], _0x4db4b1, 4259657740);
    _0x16232c = _0x4ace26(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 1], _0x44549c, 2763975236);
    _0x5041b4 = _0x4ace26(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 4], _0x563efd, 1272893353);
    _0x7150f0 = _0x4ace26(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 7], _0x1237b4, 4139469664);
    _0x4dfbe4 = _0x4ace26(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 10], _0x4db4b1, 3200236656);
    _0x16232c = _0x4ace26(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 13], _0x44549c, 681279174);
    _0x5041b4 = _0x4ace26(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 0], _0x563efd, 3936430074);
    _0x7150f0 = _0x4ace26(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 3], _0x1237b4, 3572445317);
    _0x4dfbe4 = _0x4ace26(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 6], _0x4db4b1, 76029189);
    _0x16232c = _0x4ace26(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 9], _0x44549c, 3654602809);
    _0x5041b4 = _0x4ace26(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 12], _0x563efd, 3873151461);
    _0x7150f0 = _0x4ace26(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 15], _0x1237b4, 530742520);
    _0x4dfbe4 = _0x4ace26(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 2], _0x4db4b1, 3299628645);
    _0x16232c = _0x581f15(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 0], _0x3995fa, 4096336452);
    _0x5041b4 = _0x581f15(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 7], _0x2578db, 1126891415);
    _0x7150f0 = _0x581f15(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 14], _0x501deb, 2878612391);
    _0x4dfbe4 = _0x581f15(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 5], _0x45731f, 4237533241);
    _0x16232c = _0x581f15(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 12], _0x3995fa, 1700485571);
    _0x5041b4 = _0x581f15(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 3], _0x2578db, 2399980690);
    _0x7150f0 = _0x581f15(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 10], _0x501deb, 4293915773);
    _0x4dfbe4 = _0x581f15(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 1], _0x45731f, 2240044497);
    _0x16232c = _0x581f15(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 8], _0x3995fa, 1873313359);
    _0x5041b4 = _0x581f15(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 15], _0x2578db, 4264355552);
    _0x7150f0 = _0x581f15(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 6], _0x501deb, 2734768916);
    _0x4dfbe4 = _0x581f15(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 13], _0x45731f, 1309151649);
    _0x16232c = _0x581f15(_0x16232c, _0x4dfbe4, _0x7150f0, _0x5041b4, _0x18ff61[_0x5421da + 4], _0x3995fa, 4149444226);
    _0x5041b4 = _0x581f15(_0x5041b4, _0x16232c, _0x4dfbe4, _0x7150f0, _0x18ff61[_0x5421da + 11], _0x2578db, 3174756917);
    _0x7150f0 = _0x581f15(_0x7150f0, _0x5041b4, _0x16232c, _0x4dfbe4, _0x18ff61[_0x5421da + 2], _0x501deb, 718787259);
    _0x4dfbe4 = _0x581f15(_0x4dfbe4, _0x7150f0, _0x5041b4, _0x16232c, _0x18ff61[_0x5421da + 9], _0x45731f, 3951481745);
    _0x16232c = _0x559acd(_0x16232c, _0x3bca21);
    _0x4dfbe4 = _0x559acd(_0x4dfbe4, _0x12aa79);
    _0x7150f0 = _0x559acd(_0x7150f0, _0x5a9cc9);
    _0x5041b4 = _0x559acd(_0x5041b4, _0x508b3a);
  }
  var _0x30d48d = _0x75ce2a(_0x16232c) + _0x75ce2a(_0x4dfbe4) + _0x75ce2a(_0x7150f0) + _0x75ce2a(_0x5041b4);
  return _0x30d48d.toLowerCase();
}