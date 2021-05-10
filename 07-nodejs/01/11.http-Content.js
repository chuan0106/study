
var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {
    // 在服务端默认发送的数据 其实是utf8 编码的内容
    // 但是浏览器不知道你是utf8 编码内容
    // 浏览器在不知道服务器相应内容的编码的情况下 会按照当前操作系统默认编码去解析
    // 中文操作系统默认是 gbk
    // 解决方法就是正确的告诉浏览器 我给你发送的内容是什么编码的
    // 在http协议中，Content-Type就是告诉对方我给你发送的数据是什么类型


    var url = req.url
    if (url == '/') {
        // text/plain 就是普通文本
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('hello 世界')
    } else {
        // 如果你发送的是html 格式的字符串 则也要告诉浏览器我给你发 的是html格式的文本
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<p>hello html   </p><a href="#">点我启动</a>')
    }


})

server.listen(80, function () {
    console.log('服务器启动成功 可以访问啦');
})

