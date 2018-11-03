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
    // phoneapi.brand({}, (brand) => {
    //   this.Base.setMyData({ brand });
    // });
    phoneapi.model({}, (model) => {
      this.Base.setMyData({ model });
    });
  }
  onMyShow() {
    var that = this;
    wx.setNavigationBarTitle({
      title: "一键下单",
    });

    if (this.Base.getMyData().model_id != undefined) {
      var phoneapi = new PhoneApi();
      phoneapi.modelinfo({ id: this.Base.getMyData().model_id }, (info) => {
        this.Base.setMyData({ modelinfo: info });
      });
    }
  }
  bindbrand(e) {
    var phoneapi = new PhoneApi();
    phoneapi.brand({}, (brand) => {
      this.Base.setMyData({ brand });
    });
  }
  confirm(e) {
    console.log(e);
    var data = e.detail.value;
    // if (data.brand == "") {
    //   this.Base.info("请选择品牌");
    //   return;
    // }
    // if (data.model == "") {
    //   this.Base.info("请选择型号");
    //   return;
    // }
    data.model_id=this.Base.getMyData().model_id;
    if(data.model_id==undefined){
      this.Base.info("请选择品牌型号");
      return;
    }
    if (data.phonecolor == "") {
      this.Base.info("请输入颜色");
      return;
    }
    if (data.memory == "") {
      this.Base.info("请输入内存");
      return;
    }
    var url ="/pages/evaluation/evaluation?";
    url += "id=" + data.model_id;
    var anwser=[];
    if (data.phonecolor != "") {
      anwser.push("颜色：" + data.phonecolor);
    }
    if (data.memory != "") {
      anwser.push("内存：" + data.memory);
    }
    if(data.checkbox.length>0){

      anwser.push("机型成色：" + data.checkbox.join(" "));
    }
    

    url += "&anwser=" + anwser.join(",");
    url += "&chuanhao=" + data.chuanhao;
    url += "&describe=" + data.describe;
    url += "&price=" + data.price;
    url += "&recoverynum=" + data.recoverynum;
    console.log(e);
    wx.navigateTo({
      url: url,
    })

    // if (data.price == "") {
    //   this.Base.info("请输入自估价");
    //   return;
    // }
    // if (data.recoverynum == "") {
    //   this.Base.info("请输入回收数量");
    //   return;
    // }
    // if (data.describe == "") {
    //   this.Base.info("请输入其他问题描述");
    //   return;
    // }
    if (data.chuanhao == "") {
      this.Base.info("请输入串号");
      return;
    }
    // if (data.checkbox == "") {
    //   this.Base.info("请选择机型成色");
    //   return;
    // }
    
    // var myaddress = this.Base.getMyData().myaddress;
    // var citys = this.Base.getMyData().citys;
    // var country = this.Base.getMyData().country;
    // var mobile = this.Base.getMyData().mobile;
    // var modelinfo = this.Base.getMyData().modelinfo;
    // var name = this.Base.getMyData().name;
    // var address = this.Base.getMyData().address;
    // var waybillnum = this.Base.getMyData().waybillnum;
    // var price = this.Base.getMyData().price;
    // var anwser = this.Base.getMyData().anwser;
    // var that = this;
    // var phoneapi = new PhoneApi();
    // phoneapi.order({
    //   city: citys,
    //   transactionmode: "X",
    //   brand_model_name: modelinfo.model_name,
    //   country: country,
    //   mobile: mobile,
    //   address: address,
    //   price: price,
    //   answer: anwser,
    //   status: "A",
    //   username: name,
    //   waybillnum: waybillnum
    // }, (order) => {
    //   wx.reLaunch({
    //     url: '/pages/subsuccess/subsuccess?price=' + this.Base.options.price,
    //   });
    // });
  }
  brand_input(e) {
    var brand = e.detail.value;
    console.log(brand);
    this.Base.setMyData({
      brand: e.detail.value
    })
  }
  model_input(e) {
    var model = e.detail.value;
    console.log(model);
    this.Base.setMyData({
      model: e.detail.value
    })
  }
  chuanhao_input(e) {
    var chuanhao = e.detail.value;
    console.log(chuanhao);
    this.Base.setMyData({
      chuanhao: e.detail.value
    })
  }
  color_input(e) {
    var color = e.detail.value;
    console.log(color);
    this.Base.setMyData({
      color: e.detail.value
    })
  }
  memory_input(e) {
    var memory = e.detail.value;
    console.log(memory);
    this.Base.setMyData({
      memory: e.detail.value
    })
  }
  recoverynum_input(e) {
    var recoverynum = e.detail.value;
    console.log(recoverynum);
    this.Base.setMyData({
      recoverynum: e.detail.value
    })
  }
  describe_input(e) {
    var describe = e.detail.value;
    console.log(describe);
    this.Base.setMyData({
      describe: e.detail.value
    })
  }
  price_input(e) {
    var ziguprice = e.detail.value;
    console.log(ziguprice);
    this.Base.setMyData({
      ziguprice: e.detail.value
    })
  }
  
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.bindFocus = content.bindFocus;
body.bindbrand = content.bindbrand;
body.confirm = content.confirm;
body.price_input = content.price_input;
body.describe_input = content.describe_input;
body.recoverynum_input = content.recoverynum_input;
body.memory_input = content.memory_input;
body.color_input = content.color_input;
body.chuanhao_input = content.chuanhao_input;
body.model_input = content.model_input;
body.brand_input = content.brand_input;
Page(body)