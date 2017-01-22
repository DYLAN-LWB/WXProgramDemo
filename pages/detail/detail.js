
var common = require("../../common/common.js")
var app = getApp()

Page({
  data:{
    
  },

  onLoad:function(options){    
    common.sayHello(app.globalData.userInfo.nickName);
    common.sayGoodbye(app.globalData.newpwd);
  },

  back:function(){
    wx.navigateBack({
      delta: 1 // 回退前 delta(默认为1) 页面
     })
  },




  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },

  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
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