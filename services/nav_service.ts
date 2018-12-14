const enum PageToPageUrls {
  subscribe = "../subscribe/subscribe",
  message = "../message/message",
  publish = "../message/message"
}

export function goSubscribeTab() {
  wx.switchTab({ url: PageToPageUrls.subscribe });
}
export function goMessageTab() {
  wx.switchTab({ url: PageToPageUrls.message });
}
export function goPublishTab() {
  wx.switchTab({ url: PageToPageUrls.publish });
}
