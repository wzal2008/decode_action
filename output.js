//Sat Feb 22 2025 08:11:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "快手极速版";
VALY = ["ksjsbck"];
CK = "";
LOGS = 0;
usid = 0;
nowhour = Math.round(new Date().getHours()).toString();
Notify = 0;
class Bar {
  constructor(_0x55a327) {
    this._ = ++usid;
    this.f = "小主 [" + this._ + "] ";
    this.cookie = _0x55a327.split("#")[0];
    this.salt = _0x55a327.split("#")[1];
    this.api_st = this.cookie.match(/kuaishou.api_st=([\w\-]+)/)[1];
    this.token = this.cookie.match(/token=([\w\-]+)/)[1];
    this.uid = this.cookie.match(/userId=([\w\-]+)/)[1];
    this.did = this.cookie.match(/did=([\w\-]+)/)[1];
    this.c = this.cookie.match(/c=([\w\-]+)/)[1];
    this.c2 = this.cookie.match(/c=([^;]+)/)[1];
    this.odid = this.cookie.match(/oDid=([\w\-]+)/)[1];
    this.mod = this.cookie.match(/mod=([^;]+)/)[1];
    this.egid = this.cookie.match(/egid=([\w\-]+)/)[1];
    this.rdid = this.cookie.match(/rdid=([\w\-]+)/)[1];
    this.didgt = this.cookie.match(/did_gt=([\w\-]+)/)[1];
    this.socName = this.cookie.match(/socName=([^;]+)/)[1];
    this.appver = this.cookie.match(/appver=([^;]+)/)[1];
    this.abi = this.cookie.match(/abi=([\w\-]+)/)[1];
    this.dabi = this.cookie.match(/device_abi=([\w\-]+)/)[1];
    this.androidApiLevel = this.cookie.match(/androidApiLevel=([\w\-]+)/)[1];
    this.message = "";
    this.logs = true;
  }
  async ["getsign"](_0x42e576, _0x4f8e20) {
    let _0xf66a1a = {
        "method": "post",
        "url": "http://108.166.212.10:5706/ksjsb/sign",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "form": {
          "str": _0x42e576,
          "path": _0x4f8e20,
          "salt": this.salt
        }
      },
      _0x29f9db = await $.httpRequest(_0xf66a1a),
      _0x4bd0e8 = JSON.parse(_0x29f9db);
    this.sig3 = _0x4bd0e8.__NS_sig3;
    this.tokensig = _0x4bd0e8.__NStokensig;
    this.sig = _0x4bd0e8.sig;
  }
  async ["getencData"](_0xe9485c) {
    let _0xb225a = {
        "method": "post",
        "url": "http://108.166.212.10:5706/ksjsb/reward/ad",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "form": {
          "str": _0xe9485c
        }
      },
      _0x3aacef = await $.httpRequest(_0xb225a),
      _0x47fe64 = JSON.parse(_0x3aacef);
    this.encdata = _0x47fe64.encData;
    this.sign = _0x47fe64.sign;
  }
  async ["getwebsig3"](_0x133ca5) {
    let _0x5aefe9 = {
        "method": "post",
        "url": "http://108.166.212.10:5706/ksjsb/web/sign",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "form": {
          "str": _0x133ca5
        }
      },
      _0x4d11de = await $.httpRequest(_0x5aefe9),
      _0x3230f2 = JSON.parse(_0x4d11de);
    this.cfsign = _0x3230f2.__NS_sig3;
  }
  async ["getadid"]() {
    let _0x2f23f5 = $.time(13),
      _0x6b81b8 = $.SJS(5, 2),
      _0x11e8f3 = "{\"appInfo\":{\"appId\":\"kuaishou_nebula\",\"name\":\"快手极速版\",\"packageName\":\"com.kuaishou.nebula\",\"version\":\"11.4.20.5583\",\"versionCode\":-1},\"deviceInfo\":{\"oaid\":\"77af036e6114fd65\",\"osType\":1,\"osVersion\":\"11\",\"language\":\"zh\",\"deviceId\":\"" + this.did + "\",\"screenSize\":{\"width\":1440,\"height\":3007},\"ftt\":\"\"},\"networkInfo\":{\"ip\":\"192.168.0.101\",\"connectionType\":100},\"geoInfo\":{\"latitude\":0,\"longitude\":0},\"userInfo\":{\"userId\":\"" + this.uid + "\",\"age\":0,\"gender\":\"\"},\"impInfo\":[{\"pageId\":11101,\"subPageId\":11101001,\"action\":0,\"width\":0,\"height\":0,\"browseType\":3,\"impExtData\":\"{\\\"openH5AdCount\\\":2}\",\"mediaExtData\":\"{}\"}]}";
    await this.getencData(_0x11e8f3);
    let _0x3f8c87 = encodeURIComponent(this.encdata),
      _0xc7fb8f = "abi=" + this.abi + "androidApiLevel=" + this.androidApiLevel + "android_os=0app=0apptype=22appver=" + this.appver + "boardPlatform=lahainabottom_navigation=truebrowseType=3c=" + this.c + "cdid_tag=2client_key=2ac2a76dcold_launch_time_ms=1685370402329country_code=cncs=falsedarkMode=falseddpi=560deviceBit=0device_abi=" + this.abi + "did=" + this.did + "did_gt=" + this.didgt + "did_tag=0earphoneMode=1egid=" + this.egid + "encData=" + this.encdata + "ftt=grant_browse_type=AUTHORIZEDhotfix_ver=is_background=0isp=iuid=kcv=1506keyconfig_state=2kpf=ANDROID_PHONEkpn=NEBULAkuaishou.api_st=" + this.api_st + "language=zh-cnmax_memory=256mod=Xiaomi(M2011K2C)nbh=56net=WIFInewOc=" + this.c + "oDid=" + this.odid + "oc=" + this.c + "os=androidrdid=" + this.rdid + "sbh=137sh=3200sign=" + this.sign + "slh=0socName=Qualcomm Snapdragon 8350sw=1440sys=ANDROID_11thermal=10000token=" + this.token + "totalMemory=7298uQaTag=0#ud=" + this.uid + "userRecoBit=0ver=11.4videoModelCrowdTag=1_100",
      _0x587d07 = "/rest/e/v1/reward/ad";
    await this.getsign(_0xc7fb8f, _0x587d07);
    let _0x1eb3f5 = {
        "User-Agent": "kwai-android aegon/3.31.0",
        "Accept-Language": "zh-cn",
        "X-REQUESTID": _0x2f23f5 + _0x6b81b8,
        "Cookie": "kuaishou.api_st=" + this.api_st + ";token=" + this.token + ";region_ticket=RT_B1D6AE25EE067E96DCAA0AAB6E1887336DC330681C8F3527F77C63822878695B4EF84D809",
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Client-Info": "model=M2011K2C;os=Android;nqe-score=40;network=WIFI;signal-strength=4;"
      },
      _0x16c18a = "encData=" + _0x3f8c87 + "&sign=" + this.sign + "&cs=false&client_key=2ac2a76d&videoModelCrowdTag=1_100&os=android&kuaishou.api_st=" + this.api_st + "&uQaTag=0%23&token=" + this.token,
      _0x1f9967 = await $.task("post", "https://api.e.kuaishou.com/rest/e/v1/reward/ad?earphoneMode=1&mod=Xiaomi(M2011K2C)&appver=" + this.appver + "&isp=&language=zh-cn&ud=" + this.uid + "&did_tag=0&egid=" + this.egid + "&thermal=10000&net=WIFI&kcv=1506&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=11.4&oDid=" + this.odid + "&android_os=0&boardPlatform=lahaina&kpn=NEBULA&newOc=" + this.c + "&androidApiLevel=" + this.androidApiLevel + "&slh=0&country_code=cn&nbh=56&hotfix_ver=&did_gt=" + this.didgt + "&keyconfig_state=2&cdid_tag=2&sys=ANDROID_11&max_memory=256&cold_launch_time_ms=1685370402329&oc=" + this.c + "&sh=3200&deviceBit=0&browseType=3&ddpi=560&socName=Qualcomm%20Snapdragon%208350&is_background=0&c=" + this.c + "&sw=1440&ftt=&apptype=22&abi=" + this.abi + "&userRecoBit=0&device_abi=" + this.abi + "&totalMemory=7298&grant_browse_type=AUTHORIZED&iuid=&rdid=" + this.rdid + "&sbh=137&darkMode=false&did=" + this.did + "&sig=" + this.sig + "&__NS_sig3=" + this.sig3 + "&__NStokensig=" + this.tokensig, _0x1eb3f5, _0x16c18a);
    _0x1f9967.llsid && (this.llsid = _0x1f9967.llsid, this.cadid = _0x1f9967.feeds[0].ad.creativeId, await $.wait($.RT(30000, 35000)));
  }
  async ["videotask"]() {
    this.taskid = 0;
    this.taskname = "看广告视频";
    await this.getadid();
    await this.advideo(this.taskid, this.taskname);
  }
  async ["advideo"](_0x5e312f, _0x3f5b55) {
    let _0x438e72 = $.time(13),
      _0x581373 = $.SJS(5, 2),
      _0x53d4ef = "abi=" + this.abi + "androidApiLevel=" + this.androidApiLevel + "android_os=0app=0apptype=22appver=" + this.appver + "bizStr={\"endTime\":" + _0x438e72 + ",\"eventValue\":-1,\"rewardList\":[{\"creativeId\":" + this.cadid + ",\"extInfo\":\"\",\"llsid\":" + this.llsid + ",\"taskType\":1}],\"startTime\":" + (_0x438e72 - 55081) + ",\"taskId\":" + _0x5e312f + "}boardPlatform=lahainabottom_navigation=truebrowseType=3c=" + this.c + "cdid_tag=2client_key=2ac2a76dcold_launch_time_ms=" + (_0x438e72 - 84911) + "country_code=cncs=falsedarkMode=falseddpi=560deviceBit=0device_abi=" + this.abi + "did=" + this.did + "did_gt=" + this.didgt + "did_tag=0earphoneMode=1egid=" + this.egid + "ftt=grant_browse_type=AUTHORIZEDhotfix_ver=is_background=0isp=iuid=kcv=1506keyconfig_state=2kpf=ANDROID_PHONEkpn=NEBULAkuaishou.api_st=" + this.api_st + "language=zh-cnmax_memory=256mod=Xiaomi(M2011K2C)nbh=56net=WIFInewOc=" + this.c + "oDid=" + this.odid + "oc=" + this.c + "os=androidrdid=" + this.rdid + "sbh=137sh=3200slh=0socName=Qualcomm Snapdragon 8350sw=1440sys=ANDROID_11thermal=10000token=" + this.token + "totalMemory=7298uQaTag=0#ud=" + this.uid + "userRecoBit=0ver=11.4videoModelCrowdTag=1_5",
      _0x92cb61 = "/rest/r/ad/nebula/reward";
    await this.getsign(_0x53d4ef, _0x92cb61);
    let _0x5e3166 = {
        "User-Agent": "kwai-android aegon/3.31.0",
        "Accept-Language": "zh-cn",
        "X-REQUESTID": _0x438e72 + _0x581373,
        "Cookie": "kuaishou.api_st=" + this.api_st + ";token=" + this.token + ";region_ticket=RT_B1D6AE25EE067E96DCAA0AAB6E1887336DC330681C8F3527F77C63822878695B4EF84D809",
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Client-Info": "model=M2011K2C;os=Android;nqe-score=40;network=WIFI;signal-strength=4;"
      },
      _0x2c1ae8 = "bizStr=%7B%22endTime%22%3A" + _0x438e72 + "%2C%22eventValue%22%3A-1%2C%22rewardList%22%3A%5B%7B%22creativeId%22%3A" + this.cadid + "%2C%22extInfo%22%3A%22%22%2C%22llsid%22%3A" + this.llsid + "%2C%22taskType%22%3A1%7D%5D%2C%22startTime%22%3A" + (_0x438e72 - 55081) + "%2C%22taskId%22%3A" + _0x5e312f + "%7D&cs=false&client_key=2ac2a76d&videoModelCrowdTag=1_5&os=android&kuaishou.api_st=" + this.api_st + "&uQaTag=0%23&token=" + this.token,
      _0x32f6c3 = await $.task("post", "https://api.e.kuaishou.com/rest/r/ad/nebula/reward?earphoneMode=1&mod=Xiaomi(M2011K2C)&appver=" + this.appver + "&isp=&language=zh-cn&ud=" + this.uid + "&did_tag=0&egid=" + this.egid + "&thermal=10000&net=WIFI&kcv=1506&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=11.4&oDid=" + this.odid + "&android_os=0&boardPlatform=lahaina&kpn=NEBULA&newOc=" + this.c + "&androidApiLevel=" + this.androidApiLevel + "&slh=0&country_code=cn&nbh=56&hotfix_ver=&did_gt=" + this.didgt + "&keyconfig_state=2&cdid_tag=2&sys=ANDROID_11&max_memory=256&cold_launch_time_ms=" + (_0x438e72 - 84911) + "&oc=" + this.c + "&sh=3200&deviceBit=0&browseType=3&ddpi=560&socName=Qualcomm%20Snapdragon%208350&is_background=0&c=" + this.c + "&sw=1440&ftt=&apptype=22&abi=" + this.abi + "&userRecoBit=0&device_abi=" + this.abi + "&totalMemory=7298&grant_browse_type=AUTHORIZED&iuid=&rdid=" + this.rdid + "&sbh=137&darkMode=false&did=" + this.did + "&sig=" + this.sig + "&__NS_sig3=" + this.sig3 + "&__NStokensig=" + this.tokensig, _0x5e3166, _0x2c1ae8);
    if (_0x32f6c3.result == 1) console.log(this.f + "完成" + _0x3f5b55 + "成功，获得" + _0x32f6c3.data.awardAmount + "金币");else {
      console.log(this.f + "完成" + _0x3f5b55 + "失败，" + _0x32f6c3.error_msg);
    }
  }
  async ["shopping"]() {
    let _0x2b80f0 = $.time(13),
      _0x42ad61 = $.SJS(5, 2),
      _0x4a4891 = "abi=" + this.abi + "activityId=148androidApiLevel=" + this.androidApiLevel + "android_os=0app=0apptype=22appver=" + this.appver + "boardPlatform=lahainabottom_navigation=truebrowseType=3c=" + this.c + "cdid_tag=2client_key=2ac2a76dcold_launch_time_ms=" + (_0x2b80f0 - 154831) + "country_code=cncs=falsedarkMode=falseddpi=560deviceBit=0device_abi=" + this.abi + "did=" + this.did + "did_gt=" + this.didgt + "did_tag=0earphoneMode=1egid=" + this.egid + "ftt=grant_browse_type=AUTHORIZEDhotfix_ver=is_background=0isp=iuid=kcv=1506keyconfig_state=2kpf=ANDROID_PHONEkpn=NEBULAkuaishou.api_st=" + this.api_st + "language=zh-cnmax_memory=256mod=Xiaomi(M2011K2C)nbh=56net=WIFInewOc=" + this.c + "oDid=" + this.odid + "oc=" + this.c + "os=androidrdid=" + this.rdid + "sbh=137sh=3200slh=0socName=Qualcomm Snapdragon 8350sw=1440sys=ANDROID_11thermal=10000token=" + this.token + "totalMemory=7298uQaTag=0#ud=" + this.uid + "userRecoBit=0ver=11.4videoModelCrowdTag=1_100",
      _0x1cdd78 = "/rest/r/reward/task/getActivityReward";
    await this.getsign(_0x4a4891, _0x1cdd78);
    let _0x598eed = {
        "Connection": "keep-alive",
        "User-Agent": "kwai-android aegon/3.31.0",
        "Accept-Language": "zh-cn",
        "X-REQUESTID": _0x2b80f0 + _0x42ad61,
        "Cookie": "kuaishou.api_st=" + this.api_st + ";token=" + this.token + ";region_ticket=RT_B1D6AE25EE067E96DCAA0AAB6E1887336DC330681C8F3527F77C63822878695B4EF84D809",
        "X-Client-Info": "model=M2011K2C;os=Android;nqe-score=54;network=WIFI;signal-strength=4;"
      },
      _0x4435cc = "activityId=148&cs=false&client_key=2ac2a76d&videoModelCrowdTag=1_100&os=android&kuaishou.api_st=" + this.api_st + "&uQaTag=0%23&token=" + this.token,
      _0x1d5b31 = await $.task("post", "https://api.e.kuaishou.com/rest/r/reward/task/getActivityReward?earphoneMode=1&mod=Xiaomi(M2011K2C)&appver=" + this.appver + "&isp=&language=zh-cn&ud=" + this.uid + "&did_tag=0&egid=" + this.egid + "&thermal=10000&net=WIFI&kcv=1506&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=11.4&oDid=" + this.odid + "&android_os=0&boardPlatform=lahaina&kpn=NEBULA&newOc=" + this.c + "&androidApiLevel=" + this.androidApiLevel + "&slh=0&country_code=cn&nbh=56&hotfix_ver=&did_gt=" + this.didgt + "&keyconfig_state=2&cdid_tag=2&sys=ANDROID_11&max_memory=256&cold_launch_time_ms=" + (_0x2b80f0 - 154831) + "&oc=" + this.c + "&sh=3200&deviceBit=0&browseType=3&ddpi=560&socName=Qualcomm%20Snapdragon%208350&is_background=0&c=" + this.c + "&sw=1440&ftt=&apptype=22&abi=" + this.abi + "&userRecoBit=0&device_abi=" + this.abi + "&totalMemory=7298&grant_browse_type=AUTHORIZED&iuid=&rdid=" + this.rdid + "&sbh=137&darkMode=false&did=" + this.did + "&sig=" + this.sig + "&__NS_sig3=" + this.sig3 + "&__NStokensig=" + this.tokensig, _0x598eed, _0x4435cc);
    _0x1d5b31.result == 1 ? console.log(this.f + "完成逛街任务成功，获得" + _0x1d5b31.data.amount + "金币") : console.log(this.f + "完成逛街任务失败，" + _0x1d5b31.error_msg);
  }
  async ["signin"]() {
    let _0x1589bf = {
        "Accept": "*/*",
        "X-Requested-With": "com.kuaishou.nebula",
        "Referer": "https://nebula.kuaishou.com/nebula/task/earning?layoutType=4&hyId=nebula_earning&source=bottom_guide_first",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cookie": this.cookie
      },
      _0x4ff9ec = "abi=" + this.abi + "androidApiLevel=" + this.androidApiLevel + "appver=" + this.appver + "browseType=3c=" + this.c + "device_abi=" + this.abi + "did=" + this.did + "did_tag=0egid=" + this.egid + "grant_browse_type=AUTHORIZEDkpf=ANDROID_PHONEkpn=NEBULAlanguage=zh-cnmod=" + this.mod + "newOc=" + this.c + "oDid=" + this.odid + "rdid=" + this.rdid + "sigCatVer=1socName=" + this.socName + "source=popupuserId=" + this.uid + "userRecoBit=0";
    await this.getwebsig3(_0x4ff9ec);
    let _0x451225 = await $.task("get", "https://nebula.kuaishou.com/rest/n/nebula/sign/sign?__NS_sig3=" + this.cfsign + "&sigCatVer=1&source=popup", _0x1589bf);
    _0x451225.result == 1 ? console.log(this.f + " 签到成功，获得" + _0x451225.data.toast) : console.log(this.f + "签到失败,可能：今天已经签到过了");
  }
  async ["openbox"]() {
    let _0x4748f7 = {
        "Referer": "https://nebula.kuaishou.com/nebula/task/earning?layoutType=4&hyId=nebula_earning&source=bottom_guide_first",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cookie": this.cookie
      },
      _0x52c38e = "abi=" + this.abi + "androidApiLevel=" + this.androidApiLevel + "appver=" + this.appver + "browseType=3c=" + this.c2 + "device_abi=" + this.abi + "did=" + this.did + "did_tag=0egid=" + this.egid + "grant_browse_type=AUTHORIZEDisOpen=trueisReadyOfAdPlay=truekpf=ANDROID_PHONEkpn=NEBULAlanguage=zh-cnmod=" + this.mod + "newOc=" + this.c2 + "oDid=" + this.odid + "rdid=" + this.rdid + "sigCatVer=1socName=" + this.socName + "userId=" + this.uid + "userRecoBit=0";
    await this.getwebsig3(_0x52c38e);
    let _0x571e78 = await $.task("get", "https://nebula.kuaishou.com/rest/n/nebula/box/explore?__NS_sig3=" + this.cfsign + "&sigCatVer=1&isOpen=true&isReadyOfAdPlay=true", _0x4748f7);
    if (_0x571e78.data.commonAwardPopup != null) console.log(this.f + " 开宝箱成功，获得" + _0x571e78.data.commonAwardPopup.awardAmount + "金币"), await this.boxvideotask();else {
      if (_0x571e78.data.openedCount == 10) console.log(this.f + "开宝箱失败,今日宝箱已开完");else {
        console.log(this.f + "开宝箱失败,宝箱未到时间，别急嘛，死鬼");
      }
    }
  }
  async ["boxvideotask"]() {
    this.taskid = 77;
    this.taskname = "看宝箱视频";
    await this.getboxadid();
    await this.boxvideos();
  }
  async ["getboxadid"]() {
    let _0x37143e = $.time(13),
      _0x4fdd2e = $.SJS(5, 2),
      _0x4ffac9 = "{\"appInfo\":{\"appId\":\"kuaishou_nebula\",\"name\":\"快手极速版\",\"packageName\":\"com.kuaishou.nebula\",\"version\":\"11.4.20.5583\",\"versionCode\":-1},\"deviceInfo\":{\"oaid\":\"77af036e6114fd65\",\"osType\":1,\"osVersion\":\"11\",\"language\":\"zh\",\"deviceId\":\"" + this.did + "\",\"screenSize\":{\"width\":1440,\"height\":3007},\"ftt\":\"\"},\"networkInfo\":{\"ip\":\"192.168.0.101\",\"connectionType\":100},\"geoInfo\":{\"latitude\":0,\"longitude\":0},\"userInfo\":{\"userId\":\"" + this.uid + "\",\"age\":0,\"gender\":\"\"},\"impInfo\":[{\"pageId\":11101,\"subPageId\":11101003,\"action\":0,\"width\":0,\"height\":0,\"browseType\":3,\"impExtData\":\"{\\\"openH5AdCount\\\":3}\",\"mediaExtData\":\"{}\"}]}";
    await this.getencData(_0x4ffac9);
    let _0x15e9fc = encodeURIComponent(this.encdata),
      _0x1be690 = "abi=" + this.abi + "androidApiLevel=" + this.androidApiLevel + "android_os=0app=0apptype=22appver=" + this.appver + "boardPlatform=lahainabottom_navigation=truebrowseType=3c=" + this.c + "cdid_tag=2client_key=2ac2a76dcold_launch_time_ms=1685426261616country_code=cncs=falsedarkMode=falseddpi=560deviceBit=0device_abi=" + this.abi + "did=" + this.did + "did_gt=" + this.didgt + "did_tag=0earphoneMode=1egid=" + this.egid + "encData=" + this.encdata + "ftt=grant_browse_type=AUTHORIZEDhotfix_ver=is_background=0isp=iuid=kcv=1506keyconfig_state=2kpf=ANDROID_PHONEkpn=NEBULAkuaishou.api_st=" + this.api_st + "language=zh-cnmax_memory=256mod=Xiaomi(M2011K2C)nbh=56net=WIFInewOc=" + this.c + "oDid=" + this.odid + "oc=" + this.c + "os=androidrdid=" + this.rdid + "sbh=137sh=3200sign=" + this.sign + "slh=0socName=Qualcomm Snapdragon 8350sw=1440sys=ANDROID_11thermal=10000token=" + this.token + "totalMemory=7298uQaTag=0#ud=" + this.uid + "userRecoBit=0ver=11.4videoModelCrowdTag=1_5",
      _0x56d0fc = "/rest/e/v1/reward/ad";
    await this.getsign(_0x1be690, _0x56d0fc);
    let _0xea4256 = {
        "User-Agent": "kwai-android aegon/3.31.0",
        "Accept-Language": "zh-cn",
        "X-REQUESTID": _0x37143e + _0x4fdd2e,
        "Cookie": "kuaishou.api_st=" + this.api_st + ";token=" + this.token + ";region_ticket=RT_B1D6AE25EE067E96DCAA0AAB6E1887336DC330681C8F3527F77C63822878695B4EF84D809",
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Client-Info": "model=M2011K2C;os=Android;nqe-score=40;network=WIFI;signal-strength=4;"
      },
      _0x5c1e39 = "encData=" + _0x15e9fc + "&sign=" + this.sign + "&cs=false&client_key=2ac2a76d&videoModelCrowdTag=1_5&os=android&kuaishou.api_st=" + this.api_st + "&uQaTag=0%23&token=" + this.token,
      _0x58b027 = await $.task("post", "https://api.e.kuaishou.com/rest/e/v1/reward/ad?earphoneMode=1&mod=Xiaomi(M2011K2C)&appver=" + this.appver + "&isp=&language=zh-cn&ud=" + this.uid + "&did_tag=0&egid=" + this.egid + "&thermal=10000&net=WIFI&kcv=1506&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=11.4&oDid=" + this.odid + "&android_os=0&boardPlatform=lahaina&kpn=NEBULA&newOc=" + this.c + "&androidApiLevel=" + this.androidApiLevel + "&slh=0&country_code=cn&nbh=56&hotfix_ver=&did_gt=" + this.didgt + "&keyconfig_state=2&cdid_tag=2&sys=ANDROID_11&max_memory=256&cold_launch_time_ms=1685426261616&oc=" + this.c + "&sh=3200&deviceBit=0&browseType=3&ddpi=560&socName=Qualcomm%20Snapdragon%208350&is_background=0&c=" + this.c + "&sw=1440&ftt=&apptype=22&abi=" + this.abi + "&userRecoBit=0&device_abi=" + this.abi + "&totalMemory=7298&grant_browse_type=AUTHORIZED&iuid=&rdid=" + this.rdid + "&sbh=137&darkMode=false&did=" + this.did + "&sig=" + this.sig + "&__NS_sig3=" + this.sig3 + "&__NStokensig=" + this.tokensig, _0xea4256, _0x5c1e39);
    _0x58b027.llsid && (this.llsid = _0x58b027.llsid, this.cadid = _0x58b027.feeds[0].ad.creativeId, await $.wait($.RT(30000, 35000)));
  }
  async ["boxvideos"]() {
    let _0x577327 = $.time(13),
      _0x407f92 = $.SJS(5, 2),
      _0x2b164e = "abi=" + this.abi + "androidApiLevel=" + this.androidApiLevel + "android_os=0app=0apptype=22appver=" + this.appver + "bizStr={\"endTime\":" + _0x577327 + ",\"eventValue\":-1,\"rewardList\":[{\"creativeId\":" + this.cadid + ",\"extInfo\":\"\",\"llsid\":" + this.llsid + ",\"taskType\":1}],\"startTime\":" + (_0x577327 - 55081) + ",\"taskId\":77}boardPlatform=lahainabottom_navigation=truebrowseType=3c=" + this.c + "cdid_tag=2client_key=2ac2a76dcold_launch_time_ms=" + (_0x577327 - 84911) + "country_code=cncs=falsedarkMode=falseddpi=560deviceBit=0device_abi=" + this.abi + "did=" + this.did + "did_gt=" + this.didgt + "did_tag=0earphoneMode=1egid=" + this.egid + "ftt=grant_browse_type=AUTHORIZEDhotfix_ver=is_background=0isp=iuid=kcv=1506keyconfig_state=2kpf=ANDROID_PHONEkpn=NEBULAkuaishou.api_st=" + this.api_st + "language=zh-cnmax_memory=256mod=Xiaomi(M2011K2C)nbh=56net=WIFInewOc=" + this.c + "oDid=" + this.odid + "oc=" + this.c + "os=androidrdid=" + this.rdid + "sbh=137sh=3200slh=0socName=Qualcomm Snapdragon 8350sw=1440sys=ANDROID_11thermal=10000token=" + this.token + "totalMemory=7298uQaTag=0#ud=" + this.uid + "userRecoBit=0ver=11.4videoModelCrowdTag=1_5",
      _0x365f50 = "/rest/r/ad/nebula/reward";
    await this.getsign(_0x2b164e, _0x365f50);
    let _0x396ed5 = {
        "User-Agent": "kwai-android aegon/3.31.0",
        "Accept-Language": "zh-cn",
        "X-REQUESTID": _0x577327 + _0x407f92,
        "Cookie": "kuaishou.api_st=" + this.api_st + ";token=" + this.token + ";region_ticket=RT_B1D6AE25EE067E96DCAA0AAB6E1887336DC330681C8F3527F77C63822878695B4EF84D809",
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Client-Info": "model=M2011K2C;os=Android;nqe-score=40;network=WIFI;signal-strength=4;"
      },
      _0x3abb4a = "bizStr=%7B%22endTime%22%3A" + _0x577327 + "%2C%22eventValue%22%3A-1%2C%22rewardList%22%3A%5B%7B%22creativeId%22%3A" + this.cadid + "%2C%22extInfo%22%3A%22%22%2C%22llsid%22%3A" + this.llsid + "%2C%22taskType%22%3A1%7D%5D%2C%22startTime%22%3A" + (_0x577327 - 55081) + "%2C%22taskId%22%3A77%7D&cs=false&client_key=2ac2a76d&videoModelCrowdTag=1_5&os=android&kuaishou.api_st=" + this.api_st + "&uQaTag=0%23&token=" + this.token,
      _0x2f1aa8 = await $.task("post", "https://api.e.kuaishou.com/rest/r/ad/nebula/reward?earphoneMode=1&mod=Xiaomi(M2011K2C)&appver=" + this.appver + "&isp=&language=zh-cn&ud=" + this.uid + "&did_tag=0&egid=" + this.egid + "&thermal=10000&net=WIFI&kcv=1506&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=11.4&oDid=" + this.odid + "&android_os=0&boardPlatform=lahaina&kpn=NEBULA&newOc=" + this.c + "&androidApiLevel=" + this.androidApiLevel + "&slh=0&country_code=cn&nbh=56&hotfix_ver=&did_gt=" + this.didgt + "&keyconfig_state=2&cdid_tag=2&sys=ANDROID_11&max_memory=256&cold_launch_time_ms=" + (_0x577327 - 84911) + "&oc=" + this.c + "&sh=3200&deviceBit=0&browseType=3&ddpi=560&socName=Qualcomm%20Snapdragon%208350&is_background=0&c=" + this.c + "&sw=1440&ftt=&apptype=22&abi=" + this.abi + "&userRecoBit=0&device_abi=" + this.abi + "&totalMemory=7298&grant_browse_type=AUTHORIZED&iuid=&rdid=" + this.rdid + "&sbh=137&darkMode=false&did=" + this.did + "&sig=" + this.sig + "&__NS_sig3=" + this.sig3 + "&__NStokensig=" + this.tokensig, _0x396ed5, _0x3abb4a);
    _0x2f1aa8.result == 1 ? console.log(this.f + "完成看宝箱视频成功，获得" + _0x2f1aa8.data.awardAmount + "金币") : console.log(this.f + "完成看宝箱视频失败，" + _0x2f1aa8.error_msg);
  }
  async ["meal"]() {
    let _0x540e3f = $.time(13),
      _0x1754f5 = $.SJS(5, 2),
      _0x30ba79 = {
        "Connection": "keep-alive",
        "User-Agent": "kwai-android aegon/3.31.0",
        "Accept-Language": "zh-cn",
        "X-REQUESTID": _0x540e3f + _0x1754f5,
        "Cookie": this.cookie,
        "X-Client-Info": "model=M2011K2C;os=Android;nqe-score=54;network=WIFI;signal-strength=4;"
      },
      _0x2e01c3 = "abi=" + this.abi + "androidApiLevel=" + this.androidApiLevel + "appver=" + this.appver + "browseType=3c=" + this.c2 + "device_abi=" + this.dabi + "did=" + this.did + "did_tag=0egid=" + this.egid + "grant_browse_type=AUTHORIZEDkpf=ANDROID_PHONEkpn=NEBULAlanguage=zh-cnmod=" + this.mod + "newOc=" + this.c2 + "oDid=" + this.odid + "rdid=" + this.rdid + "sigCatVer=1socName=" + this.socName + "userId=" + this.uid + "userRecoBit=0{}";
    await this.getwebsig3(_0x2e01c3);
    let _0x1f3dce = await $.task("post", "https://encourage.kuaishou.com/rest/wd/encourage/unionTask/dish/report?__NS_sig3=" + this.cfsign + "&sigCatVer=1", _0x30ba79, "{}");
    if (_0x1f3dce.result == 1) {
      {
        let _0x370f29 = _0x1f3dce.data.inspireVideoParams,
          _0x41c0d3 = JSON.parse(Buffer.from(_0x370f29, "base64").toString("utf8"));
        this.ext = _0x41c0d3.extParams;
        console.log(this.f + "完成吃饭任务成功，获得" + _0x1f3dce.data.amount + "金币");
      }
    } else console.log(this.f + "完成吃饭任务失败，" + _0x1f3dce.error_msg);
  }
  async ["jbgrw"]() {
    let _0x13906f = $.time(13),
      _0x2fb12b = $.SJS(5, 2),
      _0x171cbc = {
        "Connection": "keep-alive",
        "User-Agent": "kwai-android aegon/3.31.0",
        "Accept-Language": "zh-cn",
        "X-REQUESTID": _0x13906f + _0x2fb12b,
        "Cookie": this.cookie,
        "X-Client-Info": "model=M2011K2C;os=Android;nqe-score=54;network=WIFI;signal-strength=4;"
      },
      _0x14eca8 = "abi=" + this.abi + "androidApiLevel=" + this.androidApiLevel + "appver=" + this.appver + "browseType=3c=" + this.c2 + "device_abi=" + this.dabi + "did=" + this.did + "did_tag=0egid=" + this.egid + "grant_browse_type=AUTHORIZEDkpf=ANDROID_PHONEkpn=NEBULAlanguage=zh-cnmod=" + this.mod + "newOc=" + this.c2 + "oDid=" + this.odid + "rdid=" + this.rdid + "sigCatVer=1socName=" + this.socName + "userId=" + this.uid + "userRecoBit=0";
    await this.getwebsig3(_0x14eca8);
    let _0x15c347 = await $.task("get", "https://encourage.kuaishou.com/rest/n/encourage/game/shoppingWindow/task/bubble?__NS_sig3=" + this.cfsign + "&sigCatVer=1", _0x171cbc);
    for (let _0x58378b of _0x15c347.data) {
      if (_0x58378b.bubbleText == "今日签到") {
        this.jbgqdtoken = _0x58378b.taskToken;
        await this.jbgqd(this.jbgqdtoken);
      }
    }
  }
  async ["jbgqd"](_0x544523) {
    let _0x38b1d1 = {
        "Referer": "https://encourage.kuaishou.com/activity/coin-credit?layoutType=4&source=ICON",
        "Cookie": this.cookie
      },
      _0x2e15b6 = "{\"taskToken\":\"" + _0x544523 + "\",\"taskId\":1}",
      _0xa3adee = "abi=" + this.abi + "androidApiLevel=" + this.androidApiLevel + "appver=" + this.appver + "browseType=3c=" + this.c2 + "device_abi=" + this.dabi + "did=" + this.did + "did_tag=0egid=" + this.egid + "grant_browse_type=AUTHORIZEDkpf=ANDROID_PHONEkpn=NEBULAlanguage=zh-cnmod=" + this.mod + "newOc=" + this.c2 + "oDid=" + this.odid + "rdid=" + this.rdid + "sigCatVer=1socName=" + this.socName + "userId=" + this.uid + "userRecoBit=0" + _0x2e15b6;
    await this.getwebsig3(_0xa3adee);
    let _0x13ca89 = await $.task("post", "https://encourage.kuaishou.com/rest/n/encourage/game/shoppingWindow/task/report?__NS_sig3=" + this.cfsign + "&sigCatVer=1", _0x38b1d1, _0x2e15b6);
    _0x13ca89.result == 1 ? console.log(this.f + "完成金币购签到任务成功，获得签到金币") : console.log(this.f + "完成金币购签到任务失败，" + _0x13ca89.error_msg);
  }
}
$ = DD();
!(async () => {
  console.log(NAME);
  await $.ExamineCookie();
  nowhour == 8 && (await $.Multithreading("signin"), await $.Multithreading("jbgrw"));
  await $.Multithreading("openbox");
  await $.Multithreading("videotask");
  await $.Multithreading("shopping");
  (nowhour == 8 || nowhour == 11 || nowhour == 18 || nowhour == 22) && (await $.Multithreading("meal"));
  let _0x2f23d0 = [];
  for (let _0x5e5cc2 of $.cookie_list) {
    {
      if (_0x5e5cc2.message) _0x2f23d0.push(_0x5e5cc2.message);
    }
  }
  if (_0x2f23d0.length > 0) await $.SendMsg(_0x2f23d0.join("\n"));
})().catch(_0x58935a => {
  console.log(_0x58935a);
}).finally(() => {});
function DD() {
  return new class {
    constructor() {
      {
        this.cookie_list = [];
        this.message = "";
        this.CryptoJS = require("crypto-js");
        this.NodeRSA = require("node-rsa");
        this.request = require("request");
        this.Sha_Rsa = require("jsrsasign");
      }
    }
    async ["Multithreading"](_0x27540c, _0x34c5c4, _0x100811) {
      let _0x437279 = [];
      !_0x100811 && (_0x100811 = 1);
      while (_0x100811--) {
        for (let _0x4f1f9a of $.cookie_list) {
          _0x437279.push(_0x4f1f9a[_0x27540c](_0x34c5c4));
        }
      }
      await Promise.allSettled(_0x437279);
    }
    ["ExamineCookie"]() {
      {
        let _0x54c8b1 = process.env[VALY] || CK,
          _0x48bdab = 0;
        if (_0x54c8b1) {
          {
            for (let _0x532222 of _0x54c8b1.split("\n").filter(_0x12d213 => !!_0x12d213)) {
              $.cookie_list.push(new Bar(_0x532222));
            }
            _0x48bdab = $.cookie_list.length;
          }
        } else {
          console.log("\n【" + NAME + "】：未填写变量: " + VALY);
        }
        console.log("共找到" + _0x48bdab + "个账号");
        return $.cookie_list;
      }
    }
    ["task"](_0x56b223, _0x5c694f, _0x169a0f, _0x52d58f, _0x1aa3ef) {
      _0x56b223 == "delete" ? _0x56b223 = _0x56b223.toUpperCase() : _0x56b223 = _0x56b223;
      if (_0x56b223 == "post") {
        delete _0x169a0f["content-type"];
        delete _0x169a0f["Content-type"];
        delete _0x169a0f["content-Type"];
        $.safeGet(_0x52d58f) ? _0x169a0f["Content-Type"] = "application/json;charset=UTF-8" : _0x169a0f["Content-Type"] = "application/x-www-form-urlencoded";
        _0x52d58f && (_0x169a0f["Content-Length"] = $.lengthInUtf8Bytes(_0x52d58f));
      }
      if (_0x56b223 == "get") {
        delete _0x169a0f["content-type"];
        delete _0x169a0f["Content-type"];
        delete _0x169a0f["content-Type"];
        delete _0x169a0f["Content-Length"];
      }
      _0x169a0f.Host = _0x5c694f.replace("//", "/").split("/")[1];
      return new Promise(async _0x4397c4 => {
        {
          if (_0x56b223.indexOf("T") < 0) {
            var _0x129b02 = {
              "url": _0x5c694f,
              "headers": _0x169a0f,
              "body": _0x52d58f,
              "proxy": "http://" + _0x1aa3ef
            };
          } else var _0x129b02 = {
            "url": _0x5c694f,
            "headers": _0x169a0f,
            "form": JSON.parse(_0x52d58f),
            "proxy": "http://" + _0x1aa3ef
          };
          !_0x1aa3ef && delete _0x129b02.proxy;
          this.request[_0x56b223.toLowerCase()](_0x129b02, (_0x808a82, _0x3b8991, _0x7f96a9) => {
            try {
              {
                if (_0x7f96a9) {
                  {
                    if (LOGS == 1) {
                      console.log("================ 请求 ================");
                      console.log(_0x129b02);
                      console.log("================ 返回 ================");
                      $.safeGet(_0x7f96a9) ? console.log(JSON.parse(_0x7f96a9)) : console.log(_0x7f96a9);
                    }
                  }
                }
              }
            } catch (_0xda7f96) {
              console.log(_0xda7f96, _0x5c694f + "\n" + _0x169a0f);
            } finally {
              let _0x5c73cc = "";
              if (!_0x808a82) {
                {
                  if ($.safeGet(_0x7f96a9)) _0x5c73cc = JSON.parse(_0x7f96a9);else {
                    if (_0x7f96a9.indexOf("/") != -1 && _0x7f96a9.indexOf("+") != -1) {
                      _0x5c73cc = _0x7f96a9;
                    } else _0x5c73cc = _0x7f96a9;
                  }
                }
              } else _0x5c73cc = _0x5c694f + "   API请求失败，请检查网络重试\n" + _0x808a82;
              return _0x4397c4(_0x5c73cc);
            }
          });
        }
      });
    }
    async ["httpRequest"](_0x576e58) {
      {
        delete _0x576e58.fn;
        var _0x28348f = require("request");
        return new Promise(_0x4dd43f => {
          _0x28348f(_0x576e58, function (_0xa9a9c3, _0x4b21eb) {
            if (_0xa9a9c3) throw new Error(_0xa9a9c3);
            let _0xd8e3c0 = _0x4b21eb.body;
            _0x4dd43f(_0xd8e3c0);
          });
        });
      }
    }
    async ["SendMsg"](_0x35dddd) {
      {
        if (!_0x35dddd) return;
        if (Notify == 1) {
          var _0x4eea34 = require("./sendNotify");
          await _0x4eea34.sendNotify(NAME, _0x35dddd);
        } else {}
      }
    }
    ["lengthInUtf8Bytes"](_0x398334) {
      let _0x55b1eb = encodeURIComponent(_0x398334).match(/%[89ABab]/g);
      return _0x398334.length + (_0x55b1eb ? _0x55b1eb.length : 0);
    }
    ["randomArr"](_0x3cc959) {
      return _0x3cc959[parseInt(Math.random() * _0x3cc959.length, 10)];
    }
    ["wait"](_0x19542f) {
      return new Promise(_0x18e475 => setTimeout(_0x18e475, _0x19542f));
    }
    ["time"](_0x54137a) {
      {
        if (_0x54137a == 10) return Math.round(+new Date() / 1000);else {
          return +new Date();
        }
      }
    }
    ["timenow"](_0x4fe573) {
      let _0x3d0934 = new Date();
      if (_0x4fe573 == undefined) {
        let _0x125383 = new Date(),
          _0x1a09aa = _0x125383.getFullYear() + "-",
          _0x5bc8c4 = (_0x125383.getMonth() + 1 < 10 ? "0" + (_0x125383.getMonth() + 1) : _0x125383.getMonth() + 1) + "-",
          _0x429f28 = _0x125383.getDate() + " ",
          _0x460bf6 = _0x125383.getHours() + ":",
          _0x2ae8d0 = _0x125383.getMinutes() + ":",
          _0x45ebac = _0x125383.getSeconds() + 1 < 10 ? "0" + _0x125383.getSeconds() : _0x125383.getSeconds();
        return _0x1a09aa + _0x5bc8c4 + _0x429f28 + _0x460bf6 + _0x2ae8d0 + _0x45ebac;
      } else {
        if (_0x4fe573 == 0) return _0x3d0934.getFullYear();else {
          if (_0x4fe573 == 1) return _0x3d0934.getMonth() + 1 < 10 ? "0" + (_0x3d0934.getMonth() + 1) : _0x3d0934.getMonth() + 1;else {
            if (_0x4fe573 == 2) {
              return _0x3d0934.getDate();
            } else {
              if (_0x4fe573 == 3) return _0x3d0934.getHours();else {
                if (_0x4fe573 == 4) {
                  return _0x3d0934.getMinutes();
                } else {
                  if (_0x4fe573 == 5) {
                    return _0x3d0934.getSeconds() + 1 < 10 ? "0" + _0x3d0934.getSeconds() : _0x3d0934.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x38b8d1) {
      try {
        if (typeof JSON.parse(_0x38b8d1) == "object") {
          return true;
        }
      } catch (_0x52aa0b) {
        return false;
      }
    }
    ["SJS"](_0x3ca619, _0x3fa754) {
      if (_0x3fa754 == 0) {
        let _0x1120f2 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x9a136 = _0x1120f2.length,
          _0x426d0a = "";
        for (let _0x55e9ce = 0; _0x55e9ce < _0x3ca619; _0x55e9ce++) {
          _0x426d0a += _0x1120f2.charAt(Math.floor(Math.random() * _0x9a136));
        }
        return _0x426d0a;
      } else {
        if (_0x3fa754 == 1) {
          let _0x4e2d8d = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x243bde = _0x4e2d8d.length,
            _0x558120 = "";
          for (let _0x2c2d64 = 0; _0x2c2d64 < _0x3ca619; _0x2c2d64++) {
            _0x558120 += _0x4e2d8d.charAt(Math.floor(Math.random() * _0x243bde));
          }
          return _0x558120;
        } else {
          {
            let _0x169f1f = "0123456789",
              _0x1b4acf = _0x169f1f.length,
              _0x1d2e0d = "";
            for (let _0x18fa20 = 0; _0x18fa20 < _0x3ca619; _0x18fa20++) {
              _0x1d2e0d += _0x169f1f.charAt(Math.floor(Math.random() * _0x1b4acf));
            }
            return _0x1d2e0d;
          }
        }
      }
    }
    ["udid"](_0x5af538) {
      function _0x40424f() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x1f50d8 = _0x40424f() + _0x40424f() + "-" + _0x40424f() + "-" + _0x40424f() + "-" + _0x40424f() + "-" + _0x40424f() + _0x40424f() + _0x40424f();
      if (_0x5af538 == 0) return _0x1f50d8.toUpperCase();else {
        return _0x1f50d8.toLowerCase();
      }
    }
    ["encodeUnicode"](_0x18254) {
      var _0x3ad502 = [];
      for (var _0x309a3c = 0; _0x309a3c < _0x18254.length; _0x309a3c++) {
        _0x3ad502[_0x309a3c] = ("00" + _0x18254.charCodeAt(_0x309a3c).toString(16)).slice(-4);
      }
      return "\\u" + _0x3ad502.join("\\u");
    }
    ["decodeUnicode"](_0x4f81bc) {
      _0x4f81bc = _0x4f81bc.replace(/\\u/g, "%u");
      return unescape(unescape(_0x4f81bc));
    }
    ["RT"](_0x1c362d, _0x4c981a) {
      return Math.round(Math.random() * (_0x4c981a - _0x1c362d) + _0x1c362d);
    }
    ["arrNull"](_0x3bc971) {
      {
        var _0x48e9cf = _0x3bc971.filter(_0x298172 => {
          return _0x298172 && _0x298172.trim();
        });
        return _0x48e9cf;
      }
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000);
    }
    ["timecs"]() {
      let _0x43f098 = $.nowtime();
      JSON.stringify(_0x43f098).indexOf(" ") >= 0 && (_0x43f098 = _0x43f098.replace(" ", "T"));
      return new Date(_0x43f098).getTime() - 28800000;
    }
    ["rtjson"](_0x30f8b9, _0x8e55f6, _0x474190, _0x4788eb) {
      return _0x4788eb == 0 ? JSON.stringify(_0x30f8b9.split(_0x8e55f6).reduce((_0x1b5a69, _0x56e381) => {
        {
          let _0xa6c789 = _0x56e381.split(_0x474190);
          _0x1b5a69[_0xa6c789[0].trim()] = _0xa6c789[1].trim();
          return _0x1b5a69;
        }
      }, {})) : _0x30f8b9.split(_0x8e55f6).reduce((_0x32e6c5, _0x23ef6f) => {
        {
          let _0x5bb672 = _0x23ef6f.split(_0x474190);
          _0x32e6c5[_0x5bb672[0].trim()] = _0x5bb672[1].trim();
          return _0x32e6c5;
        }
      }, {});
    }
    ["MD5Encrypt"](_0x23ad19, _0x4029b5) {
      if (_0x23ad19 == 0) {
        return this.CryptoJS.MD5(_0x4029b5).toString().toLowerCase();
      } else {
        if (_0x23ad19 == 1) {
          return this.CryptoJS.MD5(_0x4029b5).toString().toUpperCase();
        } else {
          if (_0x23ad19 == 2) return this.CryptoJS.MD5(_0x4029b5).toString().substring(8, 24).toLowerCase();else {
            if (_0x23ad19 == 3) {
              return this.CryptoJS.MD5(_0x4029b5).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x10d2d2, _0x41dc5b, _0x315a17) {
      {
        if (_0x10d2d2 == 0) {
          return this.CryptoJS[_0x41dc5b](_0x315a17).toString(this.CryptoJS.enc.Base64);
        } else return this.CryptoJS[_0x41dc5b](_0x315a17).toString();
      }
    }
    ["HmacSHA_Encrypt"](_0x25110c, _0x47b933, _0x55b23a, _0x2c457d) {
      return _0x25110c == 0 ? this.CryptoJS[_0x47b933](_0x55b23a, _0x2c457d).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x47b933](_0x55b23a, _0x2c457d).toString();
    }
    ["Base64"](_0x30b7ca, _0x51fa2e) {
      return _0x30b7ca == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x51fa2e)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x51fa2e));
    }
    ["DecryptCrypto"](_0x382a7f, _0x2f0d30, _0x933307, _0x48a810, _0x4541e8, _0x1b67ac, _0x22a5c6) {
      if (_0x382a7f == 0) {
        const _0xcb3e64 = this.CryptoJS[_0x2f0d30].encrypt(this.CryptoJS.enc.Utf8.parse(_0x4541e8), this.CryptoJS.enc.Utf8.parse(_0x1b67ac), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x22a5c6),
          "mode": this.CryptoJS.mode[_0x933307],
          "padding": this.CryptoJS.pad[_0x48a810]
        });
        return _0xcb3e64.toString();
      } else {
        {
          const _0x4d1e8f = this.CryptoJS[_0x2f0d30].decrypt(_0x4541e8, this.CryptoJS.enc.Utf8.parse(_0x1b67ac), {
            "iv": this.CryptoJS.enc.Utf8.parse(_0x22a5c6),
            "mode": this.CryptoJS.mode[_0x933307],
            "padding": this.CryptoJS.pad[_0x48a810]
          });
          return _0x4d1e8f.toString(this.CryptoJS.enc.Utf8);
        }
      }
    }
    ["RSA"](_0x33c962, _0x56091b) {
      const _0x4dc16a = require("node-rsa");
      let _0x3055f1 = new _0x4dc16a("-----BEGIN PUBLIC KEY-----\n" + _0x56091b + "\n-----END PUBLIC KEY-----");
      _0x3055f1.setOptions({
        "encryptionScheme": "pkcs1"
      });
      return _0x3055f1.encrypt(_0x33c962, "base64", "utf8");
    }
    ["SHA_RSA"](_0x58f388, _0x113993) {
      {
        let _0x5c2ca7 = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x113993, 76) + "\n-----END PRIVATE KEY-----"),
          _0x56f8c4 = new this.Sha_Rsa.KJUR.crypto.Signature({
            "alg": "SHA256withRSA"
          });
        _0x56f8c4.init(_0x5c2ca7);
        _0x56f8c4.updateString(_0x58f388);
        let _0x4e2b3f = _0x56f8c4.sign(),
          _0x382fd5 = this.Sha_Rsa.hextob64u(_0x4e2b3f);
        return _0x382fd5;
      }
    }
  }();
}