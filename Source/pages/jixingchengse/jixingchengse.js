// pages/jixingchengse/jixingchengse.js
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
      title: "机型成色",
    })
    var helpcenterapi = new HelpcenterApi();
    helpcenterapi.modelcondition({}, (modelcondition) => {
      this.Base.setMyData({ modelcondition });
    });
  }

}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
Page(body)