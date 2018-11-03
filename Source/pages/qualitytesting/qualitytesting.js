// pages/qualitytesting/qualitytesting.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { HelpcenterApi } from "../../apis/helpcenter.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);

  }
  onMyShow() {
    var that = this;
    wx.setNavigationBarTitle({
      title: "质检说明",
    })
    var helpcenterapi = new HelpcenterApi();
    helpcenterapi.qualitytesting({ orderby:"r_main.id"}, (qualitytesting) => {
      this.Base.setMyData({ qualitytesting });
    });
  }

}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
Page(body)