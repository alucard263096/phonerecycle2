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
    phoneapi.orderlist({ status: "A", orderby:" r_main.id desc"  }, (orderlist) => {
      this.Base.setMyData({ orderlist });
    });
    phoneapi.orderlist({ status: "B", orderby: " r_main.id desc" }, (orderlistB) => {
      this.Base.setMyData({ orderlistB });
    });
    phoneapi.orderlist({ status: "C", orderby: " r_main.id desc"}, (orderlistC) => {
      this.Base.setMyData({ orderlistC });
    });
    phoneapi.orderlist({ status: "W", orderby: " r_main.id desc" }, (orderlistW) => {
      this.Base.setMyData({ orderlistW });
    });
  }
  bindsuccess(e){
   this.Base.setMyData({
     s1:1,s2:1,s3:1,s4:1
   })
  }
  bindwaitfirm(e) {
    this.Base.setMyData({
      s1: 4, s2: 4, s3: 4, s4: 4
    })
  }
  bindwait(e) {
    this.Base.setMyData({
      s1: 2, s2: 2, s3: 2, s4: 2
    })
  }
  bindcancel(e) {
    this.Base.setMyData({
      s1: 3, s2: 3, s3: 3, s4: 3
    })
  }
  
  cancleorder(e){
    var that =this;
    console.log(e);
    var phoneapi = new PhoneApi();
    var id =e.currentTarget.id;
    phoneapi.cancleorder({id:id}, (cancleorder) => {
      this.Base.setMyData({
        status:"C"
       });
      wx.reLaunch({
        url: '/pages/myorder/myorder',
      })
    });
    
  }
   bindclosewait(e){
     var that = this;
     console.log(e);
     var phoneapi = new PhoneApi();
     var id = e.currentTarget.id;
     phoneapi.cancleorder({ id: id }, (cancleorder) => {
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
body.bindsuccess = content.bindsuccess;
body.bindwait = content.bindwait;
body.bindcancel = content.bindcancel; 
body.cancleorder = content.cancleorder; 
body.bindwaitfirm = content.bindwaitfirm; 
body.bindclosewait = content.bindclosewait; 
Page(body)