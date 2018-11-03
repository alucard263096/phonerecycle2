// pages/mine/mine.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({
      open: 2
    })
  }
  onMyShow() {
    var that = this;
    wx.setNavigationBarTitle({
      title: "个人中心",
    })
  }

  // bindclosedetails(e) {
  //   this.Base.setMyData({
  //     open: 2
  //   })
  // }

  btnopendetails() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.btnopendetails = content.btnopendetails;
body.bindclosedetails = content.bindclosedetails;
Page(body)