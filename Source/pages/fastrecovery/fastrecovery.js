// pages/fastrecovery/fastrecovery.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { PhoneApi } from "../../apis/phone.api";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    var phoneapi = new PhoneApi();
    phoneapi.brand({}, (brand) => {
      this.Base.setMyData({ brand });
    });
    phoneapi.model({}, (model) => {
      this.Base.setMyData({ model });
    });
  }
  onMyShow() {
    var that = this;
    
    wx.setNavigationBarTitle({
      title: "一键下单",
    })
  }
  bindbrand(e) {
    
    var phoneapi = new PhoneApi();
    phoneapi.brand({}, (brand) => {
      this.Base.setMyData({ brand });
    });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.bindFocus = content.bindFocus;
body.bindbrand = content.bindbrand;
Page(body)