import mqtt_client from "../../services/mqtt_client";
import { showSuccess, showWarn } from "../../services/ui_service";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    current_tab: 0,
    qos_array: [0, 1, 2],
    sub_topic: "",
    unsub_topic: "",
    index: 0
  },
  switch_tab: function(e) {
    console.log(e);
    this.setData!({
      current_tab: e.target.dataset.current
    });
  },
  swiper_change: function(e) {
    console.log(e);
    this.setData!({
      current_tab: e.detail.current
    });
  },
  picker_change: function(e) {
    console.log(e);
    this.setData!({
      index: e.detail.value
    });
  },
  btn_subscribe: function() {
    if (!this.data.sub_topic) {
      showWarn("input topic");
      return;
    }
    const client = mqtt_client.client;
    if (client.isConnected()) {
      client.subscribe(this.data.sub_topic, {
        qos: this.data.qos_array[this.data.index] as any,
        onSuccess: function() {
          showSuccess("success");
        },
        onFailure: function() {
          showWarn("Failure");
        }
      });
    }
  },
  sub_input: function(e) {
    console.log(e);
    this.setData!({
      sub_topic: e.detail.value
    });
  },
  unsub_input: function(e) {
    console.log(e);
    this.setData!({
      unsub_topic: e.detail.value
    });
  },
  btn_unsubscribe: function(e) {
    if (!this.data.unsub_topic) {
      showWarn("input topic");
      return;
    }
    const client = mqtt_client.client;
    if (client.isConnected()) {
      client.unsubscribe(this.data.unsub_topic, {
        onSuccess: function() {
          showSuccess("success");
        },
        onFailure: function() {
          showWarn("Failure");
        }
      });
    }
  }
});
