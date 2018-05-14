/**
 * Created by HONOR on 17/11/28.
 */

var ListerClass = (function() {

    'use strict';

    var instance;

    var ListerClass = function() {
        if(instance) {
            return instance;
        }

        // 事件处理函数数组
        this.handlers = {};

        return instance = this;
    };

    // 事件监听触发
    function _emit(eventType, message) {

        console.log("触发事件", eventType);

        if(typeof instance.handlers[eventType] == "object" && typeof instance.handlers[eventType][0] == "function") {

            console.log("事件调用", eventType, message);

            instance.handlers[eventType][0](message);
        }
    }

    /**
     * 事件监听设置
     * @param eventType
     * @param handler
     */
    ListerClass.prototype.on = function(eventType, handler) {

        console.log("设置事件监听", eventType, handler);

        if(typeof this.handlers[eventType] == "undefined") {
            this.handlers[eventType] = [];
        }

        this.handlers[eventType].push(handler);
    };

    /**
     * start事件
     */
    ListerClass.prototype.start = function() {
        _emit("start", "start 回调传参");
    };

    /**
     * doing事件
     */
    ListerClass.prototype.doing = function() {
        window.setTimeout(function() {
            _emit("doing", "doing 回调传参");
        }, 5000);
    };

    /**
     * ended事件
     */
    ListerClass.prototype.ended = function() {
        _emit("ended", "ended 回调传参");
    };

    /**
     * do开始执行函数
     */
    ListerClass.prototype.do = function() {

        this.start();

        this.doing();

        this.ended();
    };

    /**
     * 获取设置事件数组
     * @returns {{}|*}
     */
    ListerClass.prototype.getHandlers = function() {
        return this.handlers;
    };

    return ListerClass;
})();