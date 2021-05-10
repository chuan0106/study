var that;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        // this.lis = this.main.querySelectorAll('li')
        // this.sections = this.main.querySelectorAll('section');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
        this.tabadd = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        // li 的父亲
        this.tab = this.main.querySelector('.tabscon');
        // sections 的父亲
        console.log(this.tab);
        this.init();
    }
    init() {
        that.updateNode();
        // init 初始化操作让相关元素绑定事件
        this.tabadd.onclick = this.tj;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.gog;
            this.gb[i].onclick = this.rmv;
            this.spans[i].ondblclick = this.xg;
            this.sections[i].ondblclick = this.xg;
        }

    }
    updateNode() {
        // 因为我们动态添加元素 需要重新获取对应的元素//
        this.gb = this.main.querySelectorAll('.icon-guanbi');
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section');

        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }
    gog() { // 切换
        that.clr();
        this.className = ('liactive');
        that.sections[this.index].className = 'conactive';

        // console.log(this.index);
    }
    clr() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    tj() { // 添加
        that.clr();
        var random = Math.random();
        var li = '   <li class="liactive"><span>测试</span><span class="iconfont icon-guanbi"></span></li>';
        var section = ' <section class="conactive">测试' + random + '</section>';
        that.ul.insertAdjacentHTML('beforeend', li);
        that.tab.insertAdjacentHTML('beforeend', section);
        that.init();

    }
    rmv(e) {// 删除
        e.stopPropagation(); // 阻止冒泡 防止触发li 的切换点击事件
        var index = this.parentNode.index;
        console.log(index);
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if (document.querySelector('.liactive')) return;
        index--;
        that.lis[index] && that.lis[index].onclick();

    }
    xg() {// 修改
        var str = this.innerHTML; // 先获取 小li 的文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        console.log(str);
        this.innerHTML = '  <input type="text">';  // 文字转换为input 表单
        var input = this.children[0];  //  li 的第一个孩子 span 
        input.value = str;  // 表单的value = str 
        input.select(); // 文本框里的文字 处于选中状态  // 选中状态
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;  //  表单离开之后 等于
        }
    }
}

new Tab('#tab');