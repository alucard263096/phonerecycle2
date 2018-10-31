// pages/subsuccess/subsuccess.js
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
  }
  onMyShow() {
    var that = this;
    
  }
  bindphone(){
    wx.showModal({
      content: '如果订单的号码不是您的常用号码，请返回重新提交订单',
      icon: "none",
      duration: 2000,
      showCancel:false,
      confirmColor: "#2699EC"
    });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.bindphone = content.bindphone;
Page(body)