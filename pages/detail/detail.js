
var common = require("../../common/common.js")
var app = getApp()

Page({
  data:{
    
  },

  onLoad:function(options){    
    common.sayGoodbye(app.globalData.newpwd);
  },

  back:function(){
    wx.navigateBack({
      delta: 1 // 回退前 delta(默认为1) 页面
     })
  },

  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})