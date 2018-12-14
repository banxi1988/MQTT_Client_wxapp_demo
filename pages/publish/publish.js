"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mqtt_client_1 = require("../../services/mqtt_client");
var ui_service_1 = require("../../services/ui_service");
Page({
    data: {
        pub_topic: "",
        pub_message: "",
        qos_array: [0, 1],
        retained_array: [false, true],
        qos_index: 0,
        retained_index: 0
    },
    pub_topic_input: function (e) {
        console.log(e);
        this.setData({
            pub_topic: e.detail.value
        });
    },
    qos_picker_change: function (e) {
        console.log(e);
        this.setData({
            qos_index: e.detail.value
        });
    },
    retained_picker_change: function (e) {
        console.log(e);
        this.setData({
            retained_index: e.detail.value
        });
    },
    message_input: function (e) {
        console.log(e);
        this.setData({
            pub_message: e.detail.value
        });
    },
    btn_publish: function () {
        if (!this.data.pub_topic) {
            ui_service_1.showWarn("input topic");
            return;
        }
        if (!this.data.pub_message) {
            ui_service_1.showWarn("input message");
            return;
        }
        var client = mqtt_client_1.default.client;
        if (client.isConnected()) {
            client.publish(this.data.pub_topic, this.data.pub_message, this.data.qos_array[this.data.qos_index], this.data.retained_array[this.data.retained_index]);
            ui_service_1.showSuccess("publish success");
        }
        else {
            ui_service_1.showWarn("client invalid");
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB1Ymxpc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBcUQ7QUFDckQsd0RBQWtFO0FBQ2xFLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxFQUFFO1FBQ2IsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7UUFDN0IsU0FBUyxFQUFFLENBQUM7UUFDWixjQUFjLEVBQUUsQ0FBQztLQUNsQjtJQUNELGVBQWUsRUFBRSxVQUFTLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxpQkFBaUIsRUFBRSxVQUFTLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxzQkFBc0IsRUFBRSxVQUFTLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixjQUFjLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxhQUFhLEVBQUUsVUFBUyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3hCLHFCQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzFCLHFCQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDMUIsT0FBTztTQUNSO1FBQ0QsSUFBTSxNQUFNLEdBQUcscUJBQVcsQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdkIsTUFBYyxDQUFDLE9BQU8sQ0FDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUNuRCxDQUFDO1lBQ0Ysd0JBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxxQkFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1xdHRfY2xpZW50IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9tcXR0X2NsaWVudFwiO1xuaW1wb3J0IHsgc2hvd1dhcm4sIHNob3dTdWNjZXNzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VpX3NlcnZpY2VcIjtcblBhZ2Uoe1xuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgcHViX3RvcGljOiBcIlwiLFxuICAgIHB1Yl9tZXNzYWdlOiBcIlwiLFxuICAgIHFvc19hcnJheTogWzAsIDFdLFxuICAgIHJldGFpbmVkX2FycmF5OiBbZmFsc2UsIHRydWVdLFxuICAgIHFvc19pbmRleDogMCxcbiAgICByZXRhaW5lZF9pbmRleDogMFxuICB9LFxuICBwdWJfdG9waWNfaW5wdXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHB1Yl90b3BpYzogZS5kZXRhaWwudmFsdWVcbiAgICB9KTtcbiAgfSxcbiAgcW9zX3BpY2tlcl9jaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHFvc19pbmRleDogZS5kZXRhaWwudmFsdWVcbiAgICB9KTtcbiAgfSxcbiAgcmV0YWluZWRfcGlja2VyX2NoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgcmV0YWluZWRfaW5kZXg6IGUuZGV0YWlsLnZhbHVlXG4gICAgfSk7XG4gIH0sXG4gIG1lc3NhZ2VfaW5wdXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHB1Yl9tZXNzYWdlOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pO1xuICB9LFxuICBidG5fcHVibGlzaDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEucHViX3RvcGljKSB7XG4gICAgICBzaG93V2FybihcImlucHV0IHRvcGljXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZGF0YS5wdWJfbWVzc2FnZSkge1xuICAgICAgc2hvd1dhcm4oXCJpbnB1dCBtZXNzYWdlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjbGllbnQgPSBtcXR0X2NsaWVudC5jbGllbnQ7XG4gICAgaWYgKGNsaWVudC5pc0Nvbm5lY3RlZCgpKSB7XG4gICAgICAoY2xpZW50IGFzIGFueSkucHVibGlzaChcbiAgICAgICAgdGhpcy5kYXRhLnB1Yl90b3BpYyxcbiAgICAgICAgdGhpcy5kYXRhLnB1Yl9tZXNzYWdlLFxuICAgICAgICB0aGlzLmRhdGEucW9zX2FycmF5W3RoaXMuZGF0YS5xb3NfaW5kZXhdLFxuICAgICAgICB0aGlzLmRhdGEucmV0YWluZWRfYXJyYXlbdGhpcy5kYXRhLnJldGFpbmVkX2luZGV4XVxuICAgICAgKTtcbiAgICAgIHNob3dTdWNjZXNzKFwicHVibGlzaCBzdWNjZXNzXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93V2FybihcImNsaWVudCBpbnZhbGlkXCIpO1xuICAgIH1cbiAgfVxufSk7XG4iXX0=