// pages/content/content.js
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
    this.Base.setMyData({ s:0 });
  }
  onMyShow() {
    var that = this;
    var phoneapi = new PhoneApi();
    var json={};
    if(this.Base.options.newphone!=undefined){
      json.newphone="Y";
    }
    phoneapi.brand({ json, orderby: " r_main.seq"}, (brand) => {
      this.Base.setMyData({ brand });
    });
    phoneapi.model({ json,orderby: " r_main.seq"}, (model) => {
      this.Base.setMyData({ model });
    });
    
  }
  setPageTitle(instinfo) {
    var title = "旧机回收";
    if (this.options.newphone != undefined) {
      title= "新机回收";
    }
    wx.setNavigationBarTitle({
      title: title,
    })
  }
  brandtap(e){
    //console.log(currentTarget);
     var id= e.currentTarget.id;
     console.log(id);
     this.Base.setMyData({s:id})
   }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.brandtap = content.brandtap;
Page(body)