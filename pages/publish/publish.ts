import mqtt_client from "../../services/mqtt_client";
import { showWarn, showSuccess } from "../../services/ui_service";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    pub_topic: "",
    pub_message: "",
    qos_array: [0, 1],
    retained_array: [false, true],
    qos_index: 0,
    retained_index: 0
  },
  pub_topic_input: function(e) {
    console.log(e);
    this.setData!({
      pub_topic: e.detail.value
    });
  },
  qos_picker_change: function(e) {
    console.log(e);
    this.setData!({
      qos_index: e.detail.value
    });
  },
  retained_picker_change: function(e) {
    console.log(e);
    this.setData!({
      retained_index: e.detail.value
    });
  },
  message_input: function(e) {
    console.log(e);
    this.setData!({
      pub_message: e.detail.value
    });
  },
  btn_publish: function() {
    if (!this.data.pub_topic) {
      showWarn("input topic");
      return;
    }
    if (!this.data.pub_message) {
      showWarn("input message");
      return;
    }
    const client = mqtt_client.client;
    if (client.isConnected()) {
      (client as any).publish(
        this.data.pub_topic,
        this.data.pub_message,
        this.data.qos_array[this.data.qos_index],
        this.data.retained_array[this.data.retained_index]
      );
      showSuccess("publish success");
    } else {
      showWarn("client invalid");
    }
  }
});
