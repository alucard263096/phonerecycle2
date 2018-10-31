// pages/problem/problem.js
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
    phoneapi.timu({model_id:this.options.id}, (timu) => {
      for (var i = 0; i < timu.length; i++) {
        timu[i].options = timu[i].xuanxiang.split("\n");
        timu[i].xuanle = "";
      }
      this.Base.setMyData({
        timu,da:0
      })
    })
    


  }
  onMyShow() {
    var that = this;
    // wx.setNavigationBarTitle({
    //   title: "苹果1",
    // })
  }
  bindtitle(){
    wx.showToast({
      title: '查看型号引导',
      icon: "none",
      duration: 2000
    });
  }
  bindradio(e){
    console.log(e);
    var timu = this.Base.getMyData().timu;
    var da = this.Base.getMyData().da;
    var seq = parseInt(e.currentTarget.id);
    if(seq>=da){
      da=seq+1;
    }
    timu[seq].xuanle = e.detail.value;
    this.Base.setMyData({
      timu,da
    })
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.bindtitle = content.bindtitle;
body.bindradio = content.bindradio;
Page(body)