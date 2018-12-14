import { MQTTError } from "paho-mqtt";
import { goSubscribeTab } from "../../services/nav_service";
import mqtt_client from "../../services/mqtt_client";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    user_name: "1mvy4n5/visoar",
    user_psw: "3LgAQr5FdTi2KyH0",
    switch_checked: true,
    btn_loading: false,
    server_addr: ""
  },

  server_addr_input: function(e) {
    console.log(e);
    this.setData!({
      server_addr: e.detail.value
    });
  },
  user_name_input: function(e) {
    console.log(e);
    this.setData!({
      user_name: e.detail.value
    });
  },
  user_psw_input: function(e) {
    console.log(e);
    this.setData!({
      user_psw: e.detail.value
    });
  },
  switch_change: function(e) {
    console.log(e);
    this.setData!({
      switch_checked: e.detail.value
    });
  },
  /*** 封装的数据操作方法 */
  showErrorMessage: function(msg: string) {
    this.setData!({
      error_message: msg
    });
  },
  showBtnLoading: function(show = true) {
    //在按钮上显示加载标志
    this.setData!({ btn_loading: show });
  },

  btn_connect: function() {
    //查看输入是否为空，设置错误信息
    // if (!this.data.server_addr) {
    //   this.showErrorMessage("server address can not be empty!");
    //   return;
    // }
    if (this.data.switch_checked) {
      if (!this.data.user_name) {
        this.showErrorMessage("user name can not be empty!");
        return;
      }
      if (!this.data.user_psw) {
        this.showErrorMessage("user password can not be empty!");
        return;
      }
    }
    this.showErrorMessage("");
    this.showBtnLoading(true);
    mqtt_client
      .connect({
        userName: this.data.user_name,
        password: this.data.user_psw
      })
      .then(() => {
        goSubscribeTab();
        this.showBtnLoading(false);
      })
      .catch(error => {
        const err = error as MQTTError;
        console.error(error);
        wx.showModal({ title: "出错啦", content: err.errorMessage });
        this.showBtnLoading(false);
      });
  }
});
