//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    expressNu: null,
    expressInfo: null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  //点击查询事件
  btnClick: function(){
    //console.log(this.data.expressNu);
    var thispage = this;
    app.getExpressInfo(this.data.expressNu, function(data){
      thispage.setData({expressInfo: data});
    });
  },
  //输入框事件
  input: function(e){
    //console.log(e);
    this.setData({expressNu: e.detail.value});
  }
})
