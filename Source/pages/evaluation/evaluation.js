// pages/content/content.js
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
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({
      show: false,
      hide: true
    });
    this.Base.setMyData({
      s3: 4
    });
    this.Base.setMyData({
      s4: 3
    });
    this.Base.setMyData({
      price: this.Base.options.price,
      anwser: this.Base.options.anwser,
      today: this.Base.util.FormatDate(new Date())
    });
    console.log(options.id);
  }
  onMyShow() {
    var that = this;
    // var phoneapi = new PhoneApi();
    // phoneapi.order({}, (order) => {
    //   this.Base.setMyData({ order });
    // });
    this.Base.getAddress((address) => {
      console.log(address);
      this.Base.setMyData({
        myaddress: address.address_component
      });
      var phoneapi = new PhoneApi();
      phoneapi.subway({
        shi: address.address_component.city
      }, (res) => {
        var subwayarr = [[],[]];
        for (var i=0;i<res.length;i++) {
          subwayarr[0].push(res[i].xianlu);
          for (var j = 0; j < res[i].stationlist.length; j++) {
            subwayarr[1].push(res[i].stationlist[j].zhandian);
          }
        }
        this.Base.setMyData({
          zhandian: res[0].xianlu + res[0].stationlist[0].zhandian,
          subway: res,
          subwayarr: subwayarr,
          subwayindex: [0, 0]
        });
      });
    });

    var phoneapi = new PhoneApi();
    phoneapi.modelinfo({
      id: this.options.id
    }, (modelinfo) => {
      this.Base.setMyData({
        modelinfo
      });
    });
  }
  bindelt() {
    wx.navigateBack({
      delta: -1
    });
  }
  binddobut() {
    var yijianfuzhi = this.Base.getMyData().instinfo.yijianfuzhi;
    wx.setClipboardData({
      data: yijianfuzhi,
    })
  }
  selectleft() {
    this.Base.setMyData({
      show: true,
      hide: false
    });
  }
  selectright() {
    this.Base.setMyData({
      show: false,
      hide: true
    });
  }
  bindexpressto() {
    this.Base.setMyData({
      s1: 1,
      s2: 2
    });
  }
  bindowncontact() {
    this.Base.setMyData({
      s1: 2,
      s2: 1
    });
  }
  bindtradingto() {
    this.Base.setMyData({
      s3: 3,
      s4: 4
    });
  }
  bindsubwaytrading() {
    this.Base.setMyData({
      s3: 4,
      s4: 3
    });
  }
  dataReturnCallback(callbackid, data) {
    console.log(data);
    this.Base.setMyData({
      sfaddress: data.title
    });
    this.Base.setMyData({
      city: data.city
    });
    this.Base.setMyData({
      title: data.title
    });
    this.Base.setMyData({
      province: data.province
    });
    this.Base.setMyData({
      country: data.district
    });
  }
  addAddress() {
    var that = this;
    var route = that.Base.getMyData().route;
    wx.navigateTo({
      url: '/pages/addressselect/addressselect?callbackid=aa&cityname=中国',
    });
  }
  addaddressexpressto() {
    var that = this;
    var route = that.Base.getMyData().route;
    wx.navigateTo({
      url: '/pages/addressselect/addressselect?callbackid=aa&cityname=深圳市',
    });
  }
  confirm(e) {
    var data = e.detail.value;
    if (data.city_name == "") {
      this.Base.info("请输入城市");
      return;
    }
    if (data.address_name == "") {
      this.Base.info("请输入详细地址");
      return;
    }
    if (data.username == "") {
      this.Base.info("请输入寄件人真实姓名");
      return;
    }
    if (data.userphone == "") {
      this.Base.info("请输入联系电话");
      return;
    }
    if (data.couriernumber == "") {
      this.Base.info("请输入快递单号");
      return;
    }
  }
  bindsubmit(e) {
    console.log(e);
    var myaddress = this.Base.getMyData().myaddress;
    var citys = this.Base.getMyData().citys;
    var country = this.Base.getMyData().country;
    var mobile = this.Base.getMyData().mobile;
    var modelinfo = this.Base.getMyData().modelinfo;
    var name = this.Base.getMyData().name;
    var address = this.Base.getMyData().address;
    var waybillnum = this.Base.getMyData().waybillnum;
    var price = this.Base.getMyData().price;
    var anwser = this.Base.getMyData().anwser;
    var that = this;
    var phoneapi = new PhoneApi();
    phoneapi.order({
      city: citys,
      transactionmode: "自行邮寄",
      brand_model_name: modelinfo.model_name,
      country: country,
      mobile: mobile,
      address: address,
      price: price,
      status: "A",
      answer: anwser,
      username: name,
      waybillnum: waybillnum
    }, (order) => {

      wx.navigateTo({
        url: '/pages/subsuccess/subseccess',
      })

    });
  }
  expresstosubmit(e) {
    console.log(e);
    var myaddress = this.Base.getMyData().myaddress;
    var city = myaddress.city;
    var district = myaddress.district;
    //var city = this.Base.getMyData().city;
    //var country = this.Base.getMyData().country;
    var mobile = this.Base.getMyData().mobile;
    var address = this.Base.getMyData().address;
    var price = this.Base.getMyData().price;
    var anwser = this.Base.getMyData().anwser;
    var date = this.Base.getMyData().date;
    var that = this;
    var phoneapi = new PhoneApi();
    phoneapi.order({
      city: city,
      transactionmode: "上门回收",
      country: district,
      mobile: mobile,
      address: address,
      price: price,
      status: "A",
      answer: anwser,
      orderdate: date
    }, (order) => {
      this.Base.setMyData({
        order
      });
    });
  }
  owncontactsubmit(e) {
    console.log(e);
    var myaddress = this.Base.getMyData().myaddress;
    var city = myaddress.city;
    var mobile = this.Base.getMyData().mobile;
    var date = this.Base.getMyData().date;
    var price = this.Base.getMyData().price; 
    var anwser = this.Base.getMyData().anwser;
    var zhandian = this.Base.getMyData().zhandian;
    console.log(zhandian);

    var that = this;
    var phoneapi = new PhoneApi();
    phoneapi.order({
      city: city,
      transactionmode: "地铁取货",
      mobile: mobile,
      price: price,
      status: "A",
      answer: anwser,
      orderdate: date,
      zhandian: zhandian
    }, (order) => {
      this.Base.setMyData({
        order
      });
    });
  }
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  }
  bindmobile(e) {
    var mobile = e.detail.value;
    console.log(mobile);
    this.Base.setMyData({
      mobile: e.detail.value
    })
  }
  bindaddress(e) {
    var address = e.detail.value;
    console.log(address);
    this.Base.setMyData({
      address: e.detail.value
    })
  }
  waybillnum(e) {
    var waybillnum = e.detail.value;
    console.log(waybillnum);
    this.Base.setMyData({
      waybillnum: e.detail.value
    })
  }
  bindname(e) {
    var name = e.detail.value;
    console.log(name);
    this.Base.setMyData({
      name: e.detail.value
    })
  }
  bindcity(e) {
    var citys = e.detail.value;
    console.log(citys);
    this.Base.setMyData({
      citys: e.detail.value
    })
  }
  bindcountry(e) {
    var country = e.detail.value;
    console.log(country);
    this.Base.setMyData({
      country: e.detail.value
    })
  }
  expresstocity(e) {
    var city = e.detail.value;
    console.log(city);
    this.Base.setMyData({
      city: e.detail.value
    })
  }
  expresstocountry(e) {
    var country = e.detail.value;
    console.log(country);
    this.Base.setMyData({
      country: e.detail.value
    })
  }
  expressto(e) {
    var address = e.detail.value;
    console.log(address);
    this.Base.setMyData({
      address: e.detail.value
    })
  }
  expresstomobile(e) {
    var mobile = e.detail.value;
    console.log(mobile);
    this.Base.setMyData({
      mobile: e.detail.value
    })
  }
  expresstodate(e) {
    var date = e.detail.value;
    console.log(date);
    this.Base.setMyData({
      date: e.detail.value
    })
  }
  subwaytradedate(e) {
    var date = e.detail.value;
    console.log(date);
    this.Base.setMyData({
      date: e.detail.value
    })
  }
  bindMultiPickerChange(e){
    var i = e.detail.value[0];
    var j = e.detail.value[1];
    var subway = this.Base.getMyData().subway;
    this.Base.setMyData({ zhandian: subway[i].xianlu + subway[i].stationlist[j].zhandian});
  }
  bindMultiPickerColumnChange(e) {
    console.log(e);
    if (e.detail.column==0){
      var i = e.detail.value;
      //console.log(i);
      var subwayarr = this.Base.getMyData().subwayarr;
      var subway = this.Base.getMyData().subway;
      subwayarr[1]=[];
      for (var j = 0; j < subway[i].stationlist.length; j++) {
        //console.log(subway[i].stationlist[j].zhandian);
        subwayarr[1].push(subway[i].stationlist[j].zhandian);
      }
      this.Base.setMyData({ subwayarr});
    }
  } 
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.bindelt = content.bindelt;
body.binddobut = content.binddobut;
body.selectleft = content.selectleft;
body.selectright = content.selectright;
body.bindexpressto = content.bindexpressto;
body.bindowncontact = content.bindowncontact;
body.bindtradingto = content.bindtradingto;
body.bindsubwaytrading = content.bindsubwaytrading;
body.addAddress = content.addAddress;
body.dataReturnCallback = content.dataReturnCallback;
body.bindsubmit = content.bindsubmit;
body.bindcity = content.bindcity;
body.bindmobile = content.bindmobile;
body.bindaddress = content.bindaddress;
body.ordersubmit = content.ordersubmit;
body.bindname = content.bindname;
body.bindcity = content.bindcity;
body.bindcountry = content.bindcountry;
body.expresstosubmit = content.expresstosubmit;
body.owncontactsubmit = content.owncontactsubmit;
body.addaddressexpressto = content.addaddressexpressto;
body.expresstocity = content.expresstocity;
body.expressto = content.expressto;
body.expresstomobile = content.expresstomobile;
body.bindDateChange = content.bindDateChange;
body.expresstodate = content.expresstodate;
body.waybillnum = content.waybillnum;
body.subwaytradedate = content.subwaytradedate; 
body.confirm = content.confirm;
body.bindMultiPickerChange = content.bindMultiPickerChange;
body.bindMultiPickerColumnChange = content.bindMultiPickerColumnChange;
Page(body)