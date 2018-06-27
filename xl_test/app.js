//app.js
App({
  onLaunch: function () {

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      //   wx.request({
      //     url: 'https://295u.cn/api/XcxGetTest.html',
      //     data: {
      //       appid: 'wx420114dccb0bdebc',
      //       secret: 'b0b097e746acbbefbf2d43dec768fb44',
      //       js_code: res.code,
      //       grant_type: 'authorization_code'
      //     },
      //     header: {
      //       'content-type': 'application/json' // 默认值
      //     },
      //     success: function (res) {
      //       console.log(res.data.openid, "12212");
      //       wx.setStorageSync('openid', res.data.openid);
      //       // console.log(wx.getStorageSync('openid'));
      //     }
      //   })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  globalData: {
    userInfo: null,
    question: [
      {
        "question": "当你觉得累了，哪种活动能让你放松",
        "option": {
          "A": "与别人说话或听音乐、听故事", "B": "看书、看电视或录像", "C": "出去玩或者做游戏，做运动"
        }
      },
      {
        "question": "假设你喜欢或者正使用脚踏车，你觉得它会是下面哪一款？",
        "option": { "A": "电动脚踏车", "B": "变速越野车", "C": "外观很有复古味道的文艺普通自行车" }
      },
      {
        "question": "当你正在做事时，你觉得什么最容易干扰你的注意力", "option": { "A": "噪音", "B": "你觉得新鲜好好玩的东西", "C": "你周围正在动的人或东西" }
      },
      {
        "question": "当你一个人呆着时喜欢做干什么",
        "option": { "A": "给别人打电话或听收音机", "B": "看电视、录像或看书", "C": "自己玩游戏或者做自己喜欢做的事" }
      },
      {
        "question": "当你遇到难题时，你觉得用什么方法解决问题最好",
        "option": { "A": "把所有你会的方法都说出来，选一个最好的", "B": "回想以前是怎么解决类似问题的", "C": "想出几种解决方法，选一个最好的" }
      },
      {
        "question": "排队时你通常做什么",
        "option": { "A": "自己小声嘟囔或与别人说话", "B": "看过往的人或周围的景色", "C": "总是来回晃动、坐不住、手脚不停" }
      },
      {
        "question": "如果你很关心一个人，通常你会",
        "option": { "A": "给他打电话", "B": "给他寄一张卡片或发邮件", "C": "亲自去找他拜访他" }
      },
      {
        "question": "遇到你认为很难写的字，你通常会",
        "option": { "A": "重复几遍这个字的读音，听起来觉得对就可以了", "B": "先写出来这个字，再看看是否对", "C": "反复写几遍这个字，感觉一下怎么写才对" }
      },
      {
        "question": "你自己做的事情，怎样就满意了",
        "option": { "A": "听起来是对的就满意了", "B": "看起来是对的就满意了", "C": "感觉是对的就满意了" }
      },
      {
        "question": "在课堂上你喜欢什么活动",
        "option": { "A": "听讲并且和别人说话", "B": "看图表、图画和录像", "C": "做实验和搞活动" }
      },
      {
        "question": "教完别人做事之后，你通常问什么问题才知道他会了",
        "option": { "A": "你听明白了吗", "B": "你看懂了吗", "C": "你知道了吗" }
      },
      {
        "question": "你闺蜜/好基友的生日要到了，你会给ta送一个礼物，直觉你会选择以下的哪一个？",
        "option": { "A": "结合ta的需求，ta最缺的", "B": "给ta包一个微信红包", "C": "请ta吃一顿饭" }
      },
      {
        "question": "你怎么知道别人高兴或者难过",
        "option": { "A": "听别人的声音", "B": "看别人的脸", "C": "注意别人的动作" }
      },
      {
        "question": "你喜欢什么样的幽默",
        "option": { "A": "喜欢滑稽搞笑的语言", "B": "喜欢色彩丰富的戏剧和动画片", "C": "喜欢滑稽搞笑的动作" }
      },
      {
        "question": "在有许多人的聚会上，你喜欢",
        "option": { "A": "和别人说话或者听别人说话", "B": "看别人正在干什么", "C": "到处转悠或者闲逛" }
      },
      {
        "question": "别人怎样解释问题你更容易明白",
        "option": { "A": "听讲、互相交流、讨论", "B": "用图表、图画、地图等形式", "C": "亲自做一做" }
      },
      {
        "question": "如果你的假日很有趣，你通常怎样和朋友讲述",
        "option": { "A": "打电话讲给他听", "B": "给他们看你的照片", "C": "去找他们，给他们讲讲你的经历" }
      },
      {
        "question": "买衣服时",
        "option": { "A": "别人说好看我就觉得好，别人说不好我也觉得不好", "B": "选择喜欢的颜色和样式", "C": "选择穿起来舒服的衣服" }
      },
      {
        "question": "什么情况下你听人说话最清楚",
        "option": { "A": "你闭上眼睛，不看说话的人，听得更清楚", "B": "必须清清楚楚地看见说话的人，才能听得清楚", "C": "你边走边听别人讲" }
      },
      {
        "question": "你最容易记住别人的",
        "option": { "A": "别人说过的话", "B": "别人的相貌", "C": "别人做过的" }
      }]
  }
})