$(function () {
  // 当我们点击了小li  此时不需要执行 页面滚动事件的 li 的页面背景选择 添加curr
  var flag = true;  // 节流阀 互斥锁
  // 1 显示隐藏电梯导航
  var toolTop = $('.recommend').offset().top;
  toggleTool(); // 刷新不显示 索引调用一下
  function toggleTool() {   // 封装成函数 
    if ($(window).scrollTop() >= toolTop) {
      $('.fixedtool').fadeIn();
    } else {
      $('.fixedtool').fadeOut();
    }
  }
  $(window).scroll(function () {
    toggleTool();  //  滚动调用
    // 3 页面滚动到某个区域 左侧电梯导航小li相应添加和阐述current类名
    if (flag) {
      $('.floor .w').each(function (i, e) {
        if ($(document).scrollTop() >= $(e).offset().top) {
          $('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
        }
      })
    }
  });
  // 2 点击电梯导航页面可以滚动到相应内容区域
  $('.fixedtool li').click(function () {
    flag = false; //  关闭节流阀
    var index = $(this).index();
    // console.log(index);
    // 当我们每次点击小li 就需要计算出页面要去往的位置
    // 选出对应索引号的内容区的盒子 计算出他的.offset().top
    var current = $('.floor .w').eq(index).offset().top;
    console.log(current);
    $('body,html').stop().animate({
      scrollTop: current
    }, function () {
      flag = true;   //  回调函数 打开节流阀
    });
    // 3 点击之后 让当前小li 添加current 类名 佳美移除类名
    $(this).addClass('current').siblings().removeClass();
  })

})