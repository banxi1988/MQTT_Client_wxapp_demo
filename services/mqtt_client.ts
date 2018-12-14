import MQTT = require("../vendors/paho-mqtt");
//  "paho-mqtt": "https://github.com/tennessine/paho.mqtt.wxapp.git"
interface SimpleMsg {
  topic: string;
  message: string;
}

class MQTTClient {
  client: MQTT.Client;
  messages: SimpleMsg[] = [];
  onMessageChanged: ((messages: SimpleMsg[]) => void) | null = null;
  constructor(serverAddr: string) {
    const hostUrl = `wss://${serverAddr}/mqtt`;
    const clientId =
      "clientId_" +
      Math.random()
        .toString(36)
        .substr(2);
    const client = new MQTT.Client(hostUrl, clientId);
    this.client = client;

    client.onMessageArrived = this.onMessageArrived.bind(this);
    client.onConnectionLost = this.onConnectionLost.bind(this);
  }

  protected onMessageArrived(msg: MQTT.Message) {
    const message = { topic: (msg as any).topic, message: msg.payloadString };
    this.messages.push(message);
    if (this.onMessageChanged) {
      this.onMessageChanged(this.messages);
    }
    wx.showToast({ title: "收到新消息", duration: 200 });
    wx.switchTab({
      url: "../message/message"
    });
  }

  protected onConnectionLost(err: MQTT.MQTTError) {
    console.error("onConnectionLost:", err);
  }

  connect(options: { userName: string; password: string }) {
    return new Promise((resolve, reject) => {
      const connectOptions = Object.assign(options, {
        timeout: 10,
        useSSL: true,
        cleanSession: true,
        keepAliveInterval: 30,
        reconnect: true,
        onSuccess: resolve,
        onFailure: reject
      });
      this.client.connect(connectOptions);
    });
  }
}

export default new MQTTClient("wxapp.mqtt.iot.gz.baidubce.com");
