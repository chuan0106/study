function animate(obj, target, callback) {
    // console.log(callback); callback = function () { }  调用的时候callback()

    // 当我们不断的点击按钮 这个元素的速度越来越快 因为开启了太多的定时器
    // 解决方案 让给我们的元素只有一个定时器执行
    // 先清除以前的定时器 只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值 步长公式：(目标值-现在的值)/10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}