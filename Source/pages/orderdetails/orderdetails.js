// pages/orderdetails/orderdetails.js
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
    //options.id=3;
    super.onLoad(options);
    this.Base.setMyData({
      open:2
    })
  }
  onMyShow() {
    var that = this;
    wx.setNavigationBarTitle({
      title: "订单详情",
    })
    console.log(this.options.id);
    var phoneapi = new PhoneApi();
    phoneapi.orderinfo({ id: this.options.id}, (orderinfo) => {
      this.Base.setMyData( {orderinfo} );
    });
    
  }
  bindclosedetails(e){
    this.Base.setMyData({
      open:2
    })
    }

  btnopendetails(){
    this.Base.setMyData({
      open:1
    })
  }
  bindsuccess(e) {
    var that = this;
    var phoneapi = new PhoneApi();
    phoneapi.addsuccess({ id: this.options.id }, (addsuccess) => {
      this.Base.setMyData({
        status: "S"
      });
      wx.reLaunch({
        url: '/pages/myorder/myorder',
      })
    });
  }
  cancleorder(e){
    var that = this;
    var phoneapi = new PhoneApi();
    phoneapi.cancleorder({ id: this.options.id }, (cancleorder) => {
      this.Base.setMyData({
        status: "C"
      });
      wx.reLaunch({
        url: '/pages/myorder/myorder',
      })
    });
  
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.btnopendetails = content.btnopendetails;
body.bindclosedetails = content.bindclosedetails;
body.cancleorder = content.cancleorder; 
body.bindsuccess = content.bindsuccess; 
Page(body)