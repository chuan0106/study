var that;
class Tab {
    constructor(id) {
        that = this;
        // 获取元素
        this.main = document.querySelector(id);
        // this.lis = this.main.querySelectorAll('li');
        // this.sections = this.main.querySelectorAll('section');
        this.add = this.main.querySelector('.tabadd');
        // li 的父元素
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        // section 的父元素
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {
        this.updateNode();
        // init 初始化操作让相关元素绑定事件
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.goggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }

    }
    // 因为我们动态添加元素 需要重新获取对应的元素
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
        console.log(this.spans);
    }
    // 1 切换功能
    goggleTab() {
        that.clearClass();
        // console.log(this.index);
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';

    }
    // 清除 所li 个section 的类
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 2 添加功能
    addTab() {
        that.clearClass();
        // (1) 创建li元素和section元素
        // insertAdjacentHTML  可以直接把字符串格式元素添加到父元素中
        // beforebegin 元素自身的前面插入
        // afterbegin  茶园元素内部的第一个子节点之前
        // beforeend 在元素内部的最后一个子节点之后
        // afterend 元素自身的后面
        var random = Math.random();  // 随机小数
        var li = '  <li class="liactive"><span>测试测试</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '  <section class="conactive">测试' + random + '</section>';
        // (2) 把这两个元素追加到相应的父元素里面
        that.ul.insertAdjacentHTML('beforeend', li);  //  lli 追加到ul 里面
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    // 3 删除功能
    removeTab(e) {
        e.stopPropagation(); // 阻止冒泡 防止触发li 的切换点击事件
        var index = this.parentNode.index;
        console.log(index);
        // 根据索引号删除对应的li 和 section  remove() 方法可以直接删除指定的元素
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当我们删除的不是选中状态的li 的时候 原来的选中状态li 保持不变
        if (document.querySelector('.liactive')) return;
        // 当我们删除了选中状态的这个li 的时候 让他的前一个li 处于选中状态
        index--;
        that.lis[index] && that.lis[index].onclick();  // 手动调用我们的点击事件 不需要我们触发
    }
    // 4 修改功能
    editTab() {
        var str = this.innerHTML;
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text"/>';
        var input = this.children[0];
        input.value = str;
        input.select(); // 文本框里的文字 处于选中状态
        // 当我们离开文本框  就把文本框里面的值给span
        input.onblur = function () {
            this.parentNode.innerHTML = input.value;  // 离开表单之后 文字等于 html
        }
    }
}
new Tab('#tab');