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
    this.Base.setMyData({ s: 0 });
  }
  onMyShow() {
    var that = this;
    var phoneapi = new PhoneApi();
    phoneapi.brand({}, (brand) => {
      this.Base.setMyData({ brand });
    });
    phoneapi.model({}, (model) => {
      this.Base.setMyData({ model });
    });
    wx.setNavigationBarTitle({
      title: "新机回收",
    })
  }
  brandtap(e) {
    //console.log(currentTarget);
    var id = e.currentTarget.id;
    console.log(id);
    this.Base.setMyData({ s: id })
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.brandtap = content.brandtap;
Page(body)