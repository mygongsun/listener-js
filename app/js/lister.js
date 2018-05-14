/**
 * Created by HONOR on 17/11/28.
 */

// 实例化对象（单例模式）
var listerObject = new ListerClass();

// onStart事件监听
listerObject.on("start", function(message) {
    console.log("onStart", message);
});

// onDoing事件监听
listerObject.on("doing", function(message) {
    console.log("onDoing", message);
});

// onEnded事件监听
listerObject.on("ended", function(message) {
    console.log("onEnded", message);
});

listerObject.do();

console.log(listerObject.getHandlers());