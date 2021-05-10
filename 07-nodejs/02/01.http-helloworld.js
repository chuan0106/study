let http = require('http');
let fs = require('fs');
// 1 创建Server
let server = http.createServer();
// 2 监听server 的 request 的请求事件，设置请求处理函数
// 请求
// 处理
// 响应
// 一个请求对应一个相应 如果在一个氢气逇过程中 已经结束相应了 则不能重复发送响应
// 没有请求就没有相应

// 咱们以前使用过服务器软件 有一个默认的  www 目录 所有存在www 目录中的资源都可以通过网址来浏览
server.on('request', function (req, res) {
    var url = req.url;
    if (url === '/') {
        fs.readFile('./www/index.html', function (err, data) {
            if (err) {
                // return 有两个作用:
                // 1 方法返回值
                // 2 组织代码继续往后执行
                console.log(err);
                return res.end('404');
            }
            console.log(data.toString());
            res.end(data);

        })
    } else if (url === '/a') {
        fs.readFile('./www/a.txt', function (err, data) {
            if (err) {
                return res.end('404');
            }
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end(data);
        })

    } else {

        res.end('没找到该路径哦');
    }
})
// 3 绑定端口号 启动服务
server.listen(3000, function () {
    console.log('running.....');
})