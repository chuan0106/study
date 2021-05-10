var http = require('http');
// 1 创建 Server
var server = http.createServer();
// 2 监听 request 请求事件 设置请求处理函数
server.on('request', function (req, res) {
    console.log('请求我的客户端的端口号是:', req.socket.remoteAddress, req.socket.remotePort);
    console.log('收到请求啦,请求路径是:' + req.url);
    // res.write('hello');
    // res.write('nodejs')
    // res.end();
    // 上面的方式比较麻烦 推荐使用更简单的方式 直接 end 的同时发送响应数据
    // res.end('hello nodejs')

    // 根据不同的请求路径发送不同的响应结果
    // 1 获取请求路径
    // req.url 获取的是端口号之后的那一部分路路径
    // 也就是说所有的url 都是以/ 开头的
    // 2 判断路径处理相应
    var url = req.url
    if (url == '/') {
        res.end('index')
    } else if (url == '/login') {
        res.end('login')
    } else if (url == '/yus') {


        var Yus = [
            {
                name: '雨神',
                age: 18
            },
            {
                name: '少主',
                age: 28
            }
        ]
        res.end(JSON.stringify(Yus));
    } else {
        res.end('404')
    }

    // 相应内容只能是二进制数据或者字符串 json
    // 数字
    // 对象
    // 数组
    // 布尔值
})
// 3  绑定端口号 启动服务
server.listen(80, function () {
    console.log('服务器启动成功 可以访问啦');
})