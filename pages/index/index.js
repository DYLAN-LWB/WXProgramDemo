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

 onShow:function(){
  var that = this;

  that.setData({
      loadingHidden : false
    });

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

//  bindDownLoad:function(){
//   //  该方法绑定了页面滑动到底部的事件
//    var that = this;
//   //  getDataList(that);
//  },

//  scroll:function(event){
//   //  该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
//    this.setData({
//      scrollTop : event.detail.scrollTop
//    });
//  },

//  refresh:function(event){
//   //  该方法绑定了页面滑动到顶部的事件，然后做上拉刷新
//    page = 1;
//    this.setData({
//      list : [],
//      scrollTop : 0
//    });
//   //  getDataList(this)
//   },

//   var getDataList = function(that){

//   that.setData({
//     hidden:false
//   });
//    wx.request({
//       url: url, 
//       data: {
//       uid: "94" ,
//       key: "0472a2f78bc70fe1f4b1e9e624023ddf",
//       tid: "999",
//       p: page
//     },
//       header: {
//         "content-type": "application/json"
//     },
//       success: function(res) {
//         console.log(res.data)

//       var list = that.data;
//       for(var i = 0; i < res.data.length; i++){
//         list.push(res.data.list[i]);
//       }
//       that.setData({
//         list : list
//       });
//       page ++;
//       that.setData({
//         hidden:true
//       });
//      }
//     })
// },

//  onPullDownRefresh: function() {
//     // 页面相关事件处理函数--监听用户下拉动作
//     Console.log("onPullDownRefresh");
//   },
//   onReachBottom: function() {
//     // 页面上拉触底事件的处理函数
//         Console.log("onReachBottom");

//   },


  // changeButtonClick:function (){
  //   this.setData({
  //     changeText:"改了改了"
  //   })

  // },
  // detailButtonClick:function (){
  //   wx.navigateTo({
  //     url: '../detail/detail',
  //     success:function(){
  //       console.log("跳转成功");
  //     }
  //   })
  // }
 





})
