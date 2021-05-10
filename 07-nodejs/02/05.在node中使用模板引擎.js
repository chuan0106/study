// art-template
// art-template 不仅可以在浏览器使用 也可以在node中使用
// 安装
//  npm install art-template
// 该命令在哪执行就会把包下载到哪里  默认会下载到node-modules目录中

// 在 nodejs 中也可已使用 模板引擎 template
// 最早就是诞生于服务器领域 后来才发展到了前端

// 1 安装 npm install art-template
// 2 在需要使用的文件模块中加载 art-template、
//   只需要使用require 方法加载就可以了:require('art-template)
//    参数中 atr-template 就是你下载的包的名字
//    也就是你  isntall 的名字是什么 则你 require 中就是什么
// 3 查文档 使用模板引擎 API
let fs = require('fs');
const { prototype } = require('stream');
fs.readFile('./5.tpl.html', (err, data) => {
    if (err) {
        console.log('读取失败爱了');
    }
    // data 默认读取到的是二进制数据
    // 而模板引擎 render 方法需要接受的是字符串
    // 所以我们这里需要把data 二进制数据转为字符串 才可以给模板引擎使用
    let template = require('art-template');
    // template('script 标签 id', { 对象 })
    let ret = template.render(data.toString(), {
        name: 'jack',
        age: 18,
        province: '北京',
        hobbies: [
            '吃饭',
            '睡觉',
            '打豆豆'
        ],
        title: '个人信息'
    })
    console.log(ret);
})


