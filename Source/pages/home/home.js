// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api";
import { PhoneApi } from "../../apis/phone.api";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({ catlist: [], currenttab:0});
  }
  onMyShow() {
    var that=this;
    var instapi = new InstApi();
    instapi.indexbanner({ position:"home" }, (indexbanner)=>{
      this.Base.setMyData({ indexbanner });
    });
    var phoneapi = new PhoneApi();
    phoneapi.tuijian({ orderby: " r_main.seq"}, (tuijian) => {
      this.Base.setMyData({ tuijian });
    });
  }
  stopTouchMove() {
  return false;
}
  bindtipsnew(e) {
    console.log(e)
      wx.showModal({
        content: '新机说明：未激活未使用且带有全套包装并且包装未拆封的手机（部分品牌可以接受包装拆封，但全套包装要新，保存完整）',
        icon: "none",
        duration: 2000,
        showCancel: false,
        confirmColor: "#2699EC"
      });
  }
  bindtipsold(e) {
    console.log(e)
    wx.showModal({
      content: '旧机说明：可再循环利用 可再次回收',
      icon: "none",
      duration: 2000,
      showCancel: false,
      confirmColor: "#2699EC"
    });
  }
   bindtoproblem(e){
     var id = e.currentTarget.id;
     console.log(id)
     wx.navigateTo({
       url: '/pages/problem/problem?id=' + id,
     })
  }

} 
var markers=[];
var mapCtx = null;
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad; 
body.onMyShow = content.onMyShow;
body.stopTouchMove = content.stopTouchMove; 
body.bindtipsnew = content.bindtipsnew;
body.bindtipsold = content.bindtipsold;
body.bindtoproblem = content.bindtoproblem;
Page(body)