//index.js
//获取应用实例
var app = getApp()
var url = "http://www.beisu100.com/beisuapp/course/courselist2";
var page = 1;
var page_size = 20;

Page({
  data: {
    userInfo: {},
    list: [],
    loadingHidden : true
  },

 onLoad:function(){
  var that = this;

  that.setData({
      loadingHidden : false
    });
 },

 onShow:function(){
  var that = this;

   wx.request({
      url: url, 
      data: {
      uid: "94" ,
      key: "0472a2f78bc70fe1f4b1e9e624023ddf",
      tid: "999",
      p: page
    },
      header: {
        "content-type": "application/json"
    },
      success: function(res) {
        console.log(res.data.data)

        that.setData({
          list : res.data.data,
          loadingHidden : true
        });
     }
    })
 },

upper:function(){
  console.log("滚动到顶部了");
},

lower: function() {
  console.log("滚动到底部了");
},

scroll: function() {
  console.log("滚动");
},

 itemTap:function(){
   wx.navigateTo({
     url: '../detail/detail',
   })
 }

})
