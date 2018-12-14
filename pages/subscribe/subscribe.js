"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mqtt_client_1 = require("../../services/mqtt_client");
var ui_service_1 = require("../../services/ui_service");
Page({
    data: {
        current_tab: 0,
        qos_array: [0, 1, 2],
        sub_topic: "",
        unsub_topic: "",
        index: 0
    },
    switch_tab: function (e) {
        console.log(e);
        this.setData({
            current_tab: e.target.dataset.current
        });
    },
    swiper_change: function (e) {
        console.log(e);
        this.setData({
            current_tab: e.detail.current
        });
    },
    picker_change: function (e) {
        console.log(e);
        this.setData({
            index: e.detail.value
        });
    },
    btn_subscribe: function () {
        if (!this.data.sub_topic) {
            ui_service_1.showWarn("input topic");
            return;
        }
        var client = mqtt_client_1.default.client;
        if (client.isConnected()) {
            client.subscribe(this.data.sub_topic, {
                qos: this.data.qos_array[this.data.index],
                onSuccess: function () {
                    ui_service_1.showSuccess("success");
                },
                onFailure: function () {
                    ui_service_1.showWarn("Failure");
                }
            });
        }
    },
    sub_input: function (e) {
        console.log(e);
        this.setData({
            sub_topic: e.detail.value
        });
    },
    unsub_input: function (e) {
        console.log(e);
        this.setData({
            unsub_topic: e.detail.value
        });
    },
    btn_unsubscribe: function (e) {
        if (!this.data.unsub_topic) {
            ui_service_1.showWarn("input topic");
            return;
        }
        var client = mqtt_client_1.default.client;
        if (client.isConnected()) {
            client.unsubscribe(this.data.unsub_topic, {
                onSuccess: function () {
                    ui_service_1.showSuccess("success");
                },
                onFailure: function () {
                    ui_service_1.showWarn("Failure");
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaWJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3Vic2NyaWJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMERBQXFEO0FBQ3JELHdEQUFrRTtBQUVsRSxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixXQUFXLEVBQUUsQ0FBQztRQUNkLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsV0FBVyxFQUFFLEVBQUU7UUFDZixLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0QsVUFBVSxFQUFFLFVBQVMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxhQUFhLEVBQUUsVUFBUyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTztTQUM5QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsYUFBYSxFQUFFLFVBQVMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGFBQWEsRUFBRTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN4QixxQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hCLE9BQU87U0FDUjtRQUNELElBQU0sTUFBTSxHQUFHLHFCQUFXLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3BDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBUTtnQkFDaEQsU0FBUyxFQUFFO29CQUNULHdCQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULHFCQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7YUFDRixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDRCxTQUFTLEVBQUUsVUFBUyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsV0FBVyxFQUFFLFVBQVMsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGVBQWUsRUFBRSxVQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzFCLHFCQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEIsT0FBTztTQUNSO1FBQ0QsSUFBTSxNQUFNLEdBQUcscUJBQVcsQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDeEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDeEMsU0FBUyxFQUFFO29CQUNULHdCQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULHFCQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7YUFDRixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXF0dF9jbGllbnQgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL21xdHRfY2xpZW50XCI7XG5pbXBvcnQgeyBzaG93U3VjY2Vzcywgc2hvd1dhcm4gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdWlfc2VydmljZVwiO1xuXG5QYWdlKHtcbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGN1cnJlbnRfdGFiOiAwLFxuICAgIHFvc19hcnJheTogWzAsIDEsIDJdLFxuICAgIHN1Yl90b3BpYzogXCJcIixcbiAgICB1bnN1Yl90b3BpYzogXCJcIixcbiAgICBpbmRleDogMFxuICB9LFxuICBzd2l0Y2hfdGFiOiBmdW5jdGlvbihlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBjdXJyZW50X3RhYjogZS50YXJnZXQuZGF0YXNldC5jdXJyZW50XG4gICAgfSk7XG4gIH0sXG4gIHN3aXBlcl9jaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGN1cnJlbnRfdGFiOiBlLmRldGFpbC5jdXJyZW50XG4gICAgfSk7XG4gIH0sXG4gIHBpY2tlcl9jaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGluZGV4OiBlLmRldGFpbC52YWx1ZVxuICAgIH0pO1xuICB9LFxuICBidG5fc3Vic2NyaWJlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuZGF0YS5zdWJfdG9waWMpIHtcbiAgICAgIHNob3dXYXJuKFwiaW5wdXQgdG9waWNcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNsaWVudCA9IG1xdHRfY2xpZW50LmNsaWVudDtcbiAgICBpZiAoY2xpZW50LmlzQ29ubmVjdGVkKCkpIHtcbiAgICAgIGNsaWVudC5zdWJzY3JpYmUodGhpcy5kYXRhLnN1Yl90b3BpYywge1xuICAgICAgICBxb3M6IHRoaXMuZGF0YS5xb3NfYXJyYXlbdGhpcy5kYXRhLmluZGV4XSBhcyBhbnksXG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2hvd1N1Y2Nlc3MoXCJzdWNjZXNzXCIpO1xuICAgICAgICB9LFxuICAgICAgICBvbkZhaWx1cmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNob3dXYXJuKFwiRmFpbHVyZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBzdWJfaW5wdXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHN1Yl90b3BpYzogZS5kZXRhaWwudmFsdWVcbiAgICB9KTtcbiAgfSxcbiAgdW5zdWJfaW5wdXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVuc3ViX3RvcGljOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pO1xuICB9LFxuICBidG5fdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoIXRoaXMuZGF0YS51bnN1Yl90b3BpYykge1xuICAgICAgc2hvd1dhcm4oXCJpbnB1dCB0b3BpY1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2xpZW50ID0gbXF0dF9jbGllbnQuY2xpZW50O1xuICAgIGlmIChjbGllbnQuaXNDb25uZWN0ZWQoKSkge1xuICAgICAgY2xpZW50LnVuc3Vic2NyaWJlKHRoaXMuZGF0YS51bnN1Yl90b3BpYywge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNob3dTdWNjZXNzKFwic3VjY2Vzc1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25GYWlsdXJlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzaG93V2FybihcIkZhaWx1cmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG4iXX0=