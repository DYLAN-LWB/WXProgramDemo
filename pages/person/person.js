
//获取全局变应用实例
var app = getApp();

Page({
  data:{
    name:"李伟宾",
    pwd:"123",
    id: 3,
    bol:false,
    array:[1,2,3,4,5]
  },

  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.setData({
        pwd:app.globalData.newpwd
    });
  },

  hideButtonClick:function(){
    this.setData({
      bol: !this.data.bol 
    });
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