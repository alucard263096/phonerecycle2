// pages/problem/problem.js
import {
  AppBase
} from "../../appbase";
import {
  ApiConfig
} from "../../apis/apiconfig";
import {
  InstApi
} from "../../apis/inst.api.js";
import {
  PhoneApi
} from "../../apis/phone.api";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id = 12;
    //options.new = "Y";
    super.onLoad(options);
    console.log(options.id);
    this.Base.setMyData({ price: 0, minusprice: 0, totalprice: 0, answer: "", blockseq:-1});
    var phoneapi = new PhoneApi();
    phoneapi.timu({
      model_id: this.Base.options.id,
    }, (timu) => {
      var ntimu = [];
      for (var i = 0; i < timu.length; i++) {
        if (timu[i].type == 'A' ||
          (this.Base.options.new == 'Y' && timu[i].type == 'N') ||
          (this.Base.options.new != 'Y' && timu[i].type == 'O')) {

          timu[i].options = timu[i].xuanxiang.split("\n");
          timu[i].priceopt = timu[i].priceopt.split("\n");
          for (var j = 0; j < timu[i].priceopt.length;j++){
            timu[i].priceopt[j] = parseInt(timu[i].priceopt[j]);
          }
          timu[i].xuanle = "";
          ntimu.push(timu[i]);
        }
      }
      this.Base.setMyData({
        timu: ntimu,
        da: 0
      })
    });
    phoneapi.modelinfo({id:this.options.id},(modelinfo)=>{
      this.Base.setMyData({ modelinfo})
    })

    phoneapi.modelinfo({id:this.Base.options.id},(info)=>{
      var price=0;
      
      if(this.Base.options.new=='Y'){
        price = parseInt(info.pricenew);
        
      }else{
        price = parseInt(info.priceold);
      }
      this.Base.setMyData({ price: price});
      
    });

  }
  onMyShow() {
    var that = this;
    // wx.setNavigationBarTitle({
    //   title: "苹果1",
    // })
  }
  bindtitle() {
    wx.showToast({
      title: '查看型号引导',
      icon: "none",
      duration: 2000
    });
  }
  bindradio(e) {
    console.log(e);
    var timu = this.Base.getMyData().timu;
    var da = this.Base.getMyData().da;
    var seq = parseInt(e.currentTarget.id);
    if (seq >= da) {
      da = seq + 1;
    }
    timu[seq].xuanle = e.detail.value;
    this.Base.setMyData({
      timu,
      da
    })
    this.updateprice();
  }
  updateprice() {
    var timu = this.Base.getMyData().timu;
    var price = this.Base.getMyData().price;
    var anwser = [];
    var minusprice = 0;
    for (var i = 0; i < timu.length; i++) {
      if (timu[i].xuanle != "") {
        var xuanle = timu[i].xuanle;
        console.log(xuanle);
        for (var j = 0; j < timu[i].options.length; j++) {
          console.log(timu[i].options[j]);
          if (xuanle == timu[i].options[j]) {
            anwser.push(xuanle);
            
            var vpri = parseInt(timu[i].priceopt[j]);
            console.log(vpri);
            if (vpri > 0) {
              
              if (timu[i].baseprice_value == 'Y') {
                price =  vpri;
              } else {

                minusprice = minusprice + vpri;
              }
            } else if (vpri < 0) {
              this.Base.setMyData({totalprice:-1,blockseq:i});
              return;
            }
            break;
          }
        }
      }
    }
    var totalprice=price-minusprice;
    this.Base.setMyData({ price: price, minusprice: minusprice, totalprice: totalprice, anwser: anwser.join(","), blockseq:-1 });
  }
  Neicun(e){
    var neicun = e.detail.value;
    console.log(neicun);
    this.Base.setMyData({
      neicun: e.detail.value
    })
  }
  Color(e) {
    var color = e.detail.value;
    console.log(color);
    this.Base.setMyData({
      color: e.detail.value
    })
  }
  // confirm(e){
  //   var data = e.detail.value;
  //   if (data.chuanhao == "") {
  //     this.Base.info("请输入串号");
  //     return;
  //   }
  // }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.bindtitle = content.bindtitle;
body.bindradio = content.bindradio;
body.updateprice=content.updateprice;
body.Neicun = content.Neicun; 
body.Color = content.Color; 
Page(body)