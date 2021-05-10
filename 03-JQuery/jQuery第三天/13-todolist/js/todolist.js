$(function () {
    load(); // 刷新页面加载
    // 1 按下回车 把完整数据 存储到本地存储里面
    // 存储的数据格式 var toDoList=[{title:"xxx",done:false}]
    $('#title').on('keydown', function (e) {  // 'keydown' 鼠标按下
        if (e.keyCode === 13) {
            if ($(this).val() === '') {
                alert('请输入您要输入的内容');
            } else {
                //   先读取本地存储原来的数据
                var local = getDate();
                // console.log(local);
                // 把local数组进行更新数据 把最新的数据追加给local数组
                local.push({ title: $(this).val(), done: false });
                // 把这个local 数组 存储给本地存储里面
                saveDate(local);
                // 2 toDoList 本地存储数据渲染加载页面
                load();
                $(this).val('');
            }
        }

    });

    // 3  toDoList 删除操作
    $('ol,ul').on('click', 'a', function () {
        // alert(11);
        // 先获取本地存储
        var data = getDate();
        console.log(data);
        // 修改数据
        var index = $(this).attr('id');  // attr 获取自定义属性
        console.log(index);
        data.splice(index, 1);
        // 保存到本地存储
        saveDate(data);
        // 重新渲染页面
        load();
    });
    // 4 toDoList 正在进行和已经完成选项操作
    $('ol,ul').on('click', 'input', function () {
        // alert(11);
        // 先获取本地存储的树木
        var data = getDate();
        // 修改数据
        var index = $(this).siblings('a').attr('id');
        // console.log(index);
        // data[?].done=?
        data[index].done = $(this).prop("checked");
        // console.log(data);
        // 保存到本地存储
        saveDate(data);
        // 重新渲染页面
        load();
    })
    // 读取本地存储的数据  // 封装成函数
    function getDate() {
        var data = localStorage.getItem('toDoList');
        if (data !== null) {
            // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
            return JSON.parse(data);  //  返回对象格式的data
        } else {
            return [];
        }
    }
    // 保存本地存储数据
    function saveDate(data) {
        localStorage.setItem('toDoList', JSON.stringify(data));
    }
    // 渲染加载数据
    function load() {
        // 读取本地存储的数据
        var data = getDate();
        // console.log(data);
        // 遍历之前要先清空ol里面的元素内容
        $('ol, ul').empty();  // 清空里面的元素
        var todoCount = 0;  // 正在进行的个数
        var doneCount = 0;  // 已经完成的个数
        // 遍历这个数组
        $.each(data, function (i, e) {
            // console.log(e);
            if (e.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + e.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox' > <p>" + e.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>"); //prepend 追加的意思
                todoCount++;
            }
        });
        $('#todocount').text(todoCount);
        $('#donecount').text(doneCount);
    }

})