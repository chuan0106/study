window.onload = function () {
    var regtel = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;   // 手机号码的正则表达式
    var regqq = /^[1-9][0-9]{4,}$/;  // 10000 
    var regnc = /^([a-zA-Z0-9_\u4e00-\u9fa5]){2,8}$/;
    var regmsg = /^\d{6}$/;
    var regpwd =/^[a-zA-z0-9_-]{6,16}$/;
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var meg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    // 表单验证的函数
    regxp(tel, regtel); // 手机号码
    regxp(qq, regqq); // qq 号码
    regxp(nc, regnc); // 昵称
    regxp(msg, regmsg); // 手机验证码
    regxp(pwd, regpwd); // 密码框
    function regxp(ele,reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                console.log('正确的');
                this.nextElementSibling.className = 'success';  //  nextElementSibling 下一个兄弟
                this.nextElementSibling.innerHTML = '<i class="success-icon"></i> 恭喜您输入正确';
                
            } else {
                console.log('不正确');
                this.nextElementSibling.className = 'error ';
                this.nextElementSibling.innerHTML = '<i class="error-icon"></i> 格式输入不正确，请重新输入';
            }
        }
       
    };
    surepwd.onblur = function () {
        if (this.value == pwd.value) {
            console.log('正确的');
            this.nextElementSibling.className = 'success';  //  nextElementSibling 下一个兄弟
            this.nextElementSibling.innerHTML = '<i class="success-icon"></i> 恭喜您输入正确';
        } else {
            console.log('不正确');
            this.nextElementSibling.className = 'error ';
            this.nextElementSibling.innerHTML = '<i class="error-icon"></i> 两次输入一致，请重新输入';
        }
    }
}