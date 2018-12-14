export function showWarn(title: string, duration = 2000) {
  wx.showToast({
    title,
    icon: "loading",
    duration
  });
}
export function showSuccess(title: string, duration = 2000) {
  wx.showToast({
    title,
    icon: "success",
    duration
  });
}
