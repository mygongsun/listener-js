# listener-js
JS Listener DEMO

Console log:

// start处理函数
设置事件监听 start ƒ (message) {
    console.log("onStart", message);
}

// doing处理函数
设置事件监听 doing ƒ (message) {
    console.log("onDoing", message);
}

// ended处理函数
设置事件监听 ended ƒ (message) {
    console.log("onEnded", message);
}

触发事件 start
事件调用 start start 回调传参
onStart start 回调传参
触发事件 ended
事件调用 ended ended 回调传参
onEnded ended 回调传参
触发事件 doing
事件调用 doing doing 回调传参
onDoing doing 回调传参