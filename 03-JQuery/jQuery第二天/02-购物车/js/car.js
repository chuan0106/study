$(function () {
    // 1 全选 全不选功能模块
    // 就是把全选按钮(checkall)的状态赋值给 三个小按钮(j-checkbox)就可以了
    // 事件可以使用change
    $('.checkall').change(function () {
        // console.log($(this).prop("checked"));
        $('.j-checkbox,.checkall').prop('checked', $(this).prop("checked"));
        if ($(this).prop('checked')) {
            // 让所有的商品添加 check-cart-item 类名
            $('.cart-item').addClass('check-cart-item ');
        } else {
            // 移除
            $('.cart-item').removeClass('check-cart-item ');
        }
        getSum();
    });
    // 2 如果小复选框被选中的个数等于3 就应该把全选按钮悬赏 否则全选按钮不选
    $('.j-checkbox').change(function () {
        // if (被选中的小的复选框个数 === 3) {
        //     就要选中全选按钮
        // } else {
        //     不要选中安选按钮
        // }
        // console.log($('.j-checkbox:checked').length);
        if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
        if ($(this).prop('checked')) {
            // 让当前的商品添加 check-cart-item 类名
            $(this).parents('.cart-item').addClass('check-cart-item ');
        } else {
            // 移除
            $(this).parents('.cart-item').removeClass('check-cart-item ');
        }
        getSum();
    });
    // 3 增减商品模块 首先声明一个变量 当我们点击+号(increment),就让这个值++ 然后赋值给文本框
    $('.increment').click(function () {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);
        // 3 计算小计模块 根据文本框的值 当前商品的价格 就是商品的小计
        // 当前商品的价格 p
        // var p = $(this).parent().parent().siblings('.p-price').html();
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        // console.log(p);
        p = p.substr(1);
        // console.log(p);
        var price = (p * n).toFixed(2);   // toFixed(2)  是保留几位小数
        // 小计模块
        $(this).parents('.p-num').siblings('.p-sum').html("￥" + price);
        getSum();
    });
    $('.decrement').click(function () {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings('.itxt').val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings('.itxt').val(n);
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        // console.log(p);
        p = p.substr(1);
        // console.log(p);
        // 小计模块
        $(this).parents('.p-num').siblings('.p-sum').html("￥" + (p * n).toFixed(2));
        getSum();
    });
    // 4 用户修改文本框的值 计算 小计模块
    $('.itxt').change(function () {
        // 先得到文本框的值 乘以 当前商品的单价
        var n = $(this).val();
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        // console.log(p);
        p = p.substr(1);
        $(this).parents('.p-num').siblings('.p-sum').html("￥" + (p * n).toFixed(2));
        getSum();

    })
    // 5 计算总计和总额模块
    getSum();
    function getSum() {
        var count = 0;  //  计算总件数
        var money = 0; // 计算总额
        // console.log($('.j-checkbox:checked').parent(".p-checkbox").siblings().find('.itxt'));
        // console.log($('.itxt'));
        // $('.itxt').each(function (i, e) {
        $('.j-checkbox:checked').parent(".p-checkbox").siblings().find('.itxt').each(function (i, e) {
            count += parseInt($(e).val());  //  parseInt 转换数值型 整数

        });
        $('.amount-sum em').text(count);
        // console.log($('.j-checkbox:checked').parent().siblings('.p-sum'));
        // console.log($('.p-sum'));
        // $('.p-sum').each(function (i, e) {
        $('.j-checkbox:checked').parent().siblings('.p-sum').each(function (i, e) {
            money += parseFloat($(e).text().substr(1))   //   parseFloat 转换小数
        })
        $('.price-sum em').text("￥" + money.toFixed(2));
    }
    // 6 删除商品模块
    $('.p-action').click(function () {
        // (1) 商品后面的删除按钮
        // 删除的是当前的商品
        $(this).parents('.cart-item').remove();
        getSum();
    });
    $('.remove-batch').click(function () {
        // (2) 删除选中的商品
        // 删除的是小的复选框选中的商品
        $('.j-checkbox:checked').parents('.cart-item').remove();
        getSum();
    })

    // (3) 清理购物车 删除全部商品
    $('.clear-all').click(function () {
        $('.cart-item').remove();
        getSum();
    })
}) 