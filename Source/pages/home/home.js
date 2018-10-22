// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api";

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

  }

  changeCurrentTab(e) {
    console.log(e);
    this.Base.setMyData({ currenttab: e.detail.current });
  }

  changeTab(e) {
    console.log(e);
    this.Base.setMyData({ currenttab: e.currentTarget.id });
  }
} 
var markers=[];
var mapCtx = null;
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad; 
body.onMyShow = content.onMyShow;
body.changeCurrentTab = content.changeCurrentTab; 
body.changeTab = content.changeTab;
body.gotoCompany = content.gotoCompany;

Page(body)