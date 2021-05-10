(function flexible(window, document) {

    var docEl = document.documentElement//获取html的根元素
    var dpr = window.devicePixelRatio || 1//物理像素比(屏幕)，如果没有就 当成1来用
    //创建一个设置body的fontsize的函数
    function setBodyFontSize() {
        if (document.body) {//如果页面中有body，
            document.body.style.fontSize = (12 * dpr) + 'px'//将body的fontsize设置为12乘物理像素比
        }
        else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize)//等页面的元素加载完之后再调用一下这个函数。因为浏览器执行代码是从上到下，当解析到script标签的时候，可能body还没构建好。所以需要考虑全面。
        }
    }
    setBodyFontSize();//调用一下设置body的fontsize的函数


    // 设置html元素的文字大小，因为rem 是相对于根节点而定的
    function setRemUnit() {
        var rem = docEl.clientWidth / 10//将整个屏幕划分为10等分
        docEl.style.fontSize = rem + 'px'//将html元素的fontsize设置为10分之1像素
    }

    setRemUnit()//调用设置html的fontsize的函数


    window.addEventListener('resize', setRemUnit)//resize事件是 当页面尺寸大小发生变化的时候,要重新设置rem的大小
    window.addEventListener('pageshow', function (e) {//pageshow事件是 重新加载页面触发的事件
        if (e.persisted) {//如果是从缓存取过来的页面也重新设置一下rem的大小(主要是火狐浏览器有往返缓存机制，这个缓存保存了DOM和JS的状态)
            setRemUnit()
        }
    })

    // 有些移动端的浏览器不支持0.5像素的写法
    if (dpr >= 2) {//如果物理像素比>=2
        var fakeBody = document.createElement('body')//创建一个body节点
        var testElement = document.createElement('div')//创建一个div节点
        testElement.style.border = '.5px solid transparent'//将创建的div的border设置为0.5px
        fakeBody.appendChild(testElement)//将创建div添加到创建的body中
        docEl.appendChild(fakeBody)//将创建的body添加到html根节点中
        if (testElement.offsetHeight === 1) {//如果div的高度等于1(包括了边框)
            docEl.classList.add('hairlines')//就添加一个类名hairlines
        }
        docEl.removeChild(fakeBody)//将创建的body从html根节点中移出掉
    }
}(window, document))
