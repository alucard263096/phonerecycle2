import { ApiConfig } from 'apiconfig';
export class PhoneApi {
  //获取所有的资源
  tuijian(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();
    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'phone/tuijian',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  }
  brand(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();
    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'phone/brand',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  }
  brandinfo(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();
    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'phone/brandinfo',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  }
  model(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();
    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'phone/model',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  }
  modelinfo(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();
    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'phone/modelinfo',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  }
  timu(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();
    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'phone/timu',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  }
  order(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();
    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'phone/order',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  }
  orderlist(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();
    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'phone/orderlist',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  }
  orderinfo(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();
    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'phone/orderinfo',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  }
  subway(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();
    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'phone/subway',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  }
  cancleorder(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();
    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'phone/cancleorder',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  }
  addsuccess(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();
    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'phone/addsuccess',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  } 
  cdtoptionlist(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();
    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'phone/cdtoptionlist',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  }
}