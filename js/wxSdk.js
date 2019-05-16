$('head').append('<script src="https://res.wx.qq.com/open/js/jweixin-1.4.0.js"></script>>');

// 配置js skd
$.ajax({
    url: 'https://social-crm.pernod-ricard-china.com/api/jsApiSign',
    type: 'POST',
    data: {
        brand: '101',
        url: window.location.href
    },
    dataType: 'json',
    success(res) {
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res.data.appId, // 必填，公众号的唯一标识
            timestamp: res.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
            signature: res.data.signature,// 必填，签名
            jsApiList: res.data.jsApiList // 必填，需要使用的JS接口列表
        });

        wx.ready(function () {
          //  wx.onMenuShareAppMessage({
          //      title: '看看你的界限在哪里', // 分享标题
          //      desc: '绝对鲜造专属风味瓶', // 分享描述
          //      link: 'https://absolutsyrup.pernod-ricard-china.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          //      imgUrl: 'https://absolutsyrup.pernod-ricard-china.com/img/share.jpg', // 分享图标
          //      type: '', // 分享类型,music、video或link，不填默认为link
          //      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          //      success: function () {
          //          // 用户点击了分享后执行的回调函数
          //      }
          //  });
        })

    }
})
