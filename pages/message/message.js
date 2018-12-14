"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mqtt_client_1 = require("../../services/mqtt_client");
Page({
    data: {
        message_objects: []
    },
    onLoad: function (options) {
        var _this = this;
        mqtt_client_1.default.onMessageChanged = function (msgs) {
            _this.setData({ message_objects: msgs });
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBcUQ7QUFFckQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osZUFBZSxFQUFFLEVBQUU7S0FDcEI7SUFDRCxNQUFNLEVBQUUsVUFBUyxPQUFPO1FBQWhCLGlCQUlQO1FBSEMscUJBQVcsQ0FBQyxnQkFBZ0IsR0FBRyxVQUFBLElBQUk7WUFDakMsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXF0dF9jbGllbnQgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL21xdHRfY2xpZW50XCI7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbWVzc2FnZV9vYmplY3RzOiBbXVxuICB9LFxuICBvbkxvYWQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBtcXR0X2NsaWVudC5vbk1lc3NhZ2VDaGFuZ2VkID0gbXNncyA9PiB7XG4gICAgICB0aGlzLnNldERhdGEhKHsgbWVzc2FnZV9vYmplY3RzOiBtc2dzIH0pO1xuICAgIH07XG4gIH1cbn0pO1xuIl19