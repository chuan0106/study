
const { write } = require('fs');
var http = require('http');


var server = http.createServer();
// request 请求事件处理函数 需要接受两个参数
//    Require 请求对象 可以用来获取客户端的一些请求信息 例如请求路径
//    Response 响应对象 可以用来给客户端发送相应消息
server.on('request', function (request, response) {
    console.log('收到客户端的请求了,请求路径是:' + request.url);

    // response 对象有一个方法 write 可以用来给客户端发送相应数据

    // write 可以使用多次 但是最后一次一定要使用end  来结束相应 否则客户端会一直等待
    response.write('hello');
    response.write(' nodejs ')
    // 告诉客户端 我的话说完了 捏可以呈现给用户了
    response.end();

    // 由于现在我们的服务器的能力还非常的弱 无论什么请求 都只能相应 hello nodejs 
    // 思考
    // 我希望当请求不同的路径的时候 相应不同的结果
    // 例如
    // index
    // login 登录
    // register 注册
    // hah  哈哈哈
})

server.listen(3000, function () {
    // http://127.0.0.1:3000/
    console.log('服务器启动成功了 可以通过http://127.0.0.1:3000/');
});



