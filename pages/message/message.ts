import mqtt_client from "../../services/mqtt_client";

Page({
  data: {
    message_objects: []
  },
  onLoad: function(options) {
    mqtt_client.onMessageChanged = msgs => {
      this.setData!({ message_objects: msgs });
    };
  }
});
