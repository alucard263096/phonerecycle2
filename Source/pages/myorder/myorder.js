// pages/myorder/myorder.js
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
    this.Base.setMyData({s1:1});
  }
  onMyShow() {
    var that = this;
    wx.setNavigationBarTitle({
      title: "我的订单",
    })
    var phoneapi = new PhoneApi();
    phoneapi.orderlist({ status: "A", orderby:" r_main.id "  }, (orderlist) => {
      this.Base.setMyData({ orderlist });
    });
    phoneapi.orderlist({ status: "B", orderby: " r_main.id " }, (orderlistB) => {
      this.Base.setMyData({ orderlistB });
    });
    phoneapi.orderlist({ status: "C", orderby: " r_main.id "}, (orderlistC) => {
      this.Base.setMyData({ orderlistC });
    });
  }
  bindsuccess(e){
   this.Base.setMyData({
     s1:1,s2:1,s3:1
   })
  }
  bindwait(e) {
    this.Base.setMyData({
      s1:2,s2:2,s3:2
    })
  }
  bindcancel(e) {
    this.Base.setMyData({
      s1: 3, s2: 3, s3: 3
    })
  }
  cancelorder(e){
    var that =this;
    var phoneapi = new PhoneApi();
    phoneapi.cancleorder("id", (cancleorder) => {
      this.Base.setMyData({ 
        status: "C"
       });
    });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.bindsuccess = content.bindsuccess;
body.bindwait = content.bindwait;
body.bindcancel = content.bindcancel; 
body.cancelorder = content.cancelorder;
Page(body)