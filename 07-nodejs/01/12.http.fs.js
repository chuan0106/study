// 1 结合fs 发送文件中的数据
// 2 Content-Type
// 不同的资源对用的 Content-Type 是不一样的
// 图片不需要指定编码
// 一般只为字符数据才指定编码
var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (req, res) {

    var url = req.url;
    // 肯定不这么干
    //     res.end('<!DOCTYPE html>  < html lang = "en" > <head>   <meta charset="UTF-8">     <meta name="viewport" content="width=device-width, initial-scale=1.0">   <title>Document</title></head ><body></body> <h1> 首页</h1>     </body><html>')
    // }

    // 我们要发送的还是文件中的内容
    if (url == '/') {
        fs.readFile('./resource/index.html', (err, data) => {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('文件读取失败 请稍后再试');
            } else {
                // data 默认是二进制数据 可以通过 toString转为咱们能识别的字符串
                // res.end() 支持两种数据类型 一种是二进制 一种是字符串
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                console.log(data.toString());
                res.end(data);
            }
        })
    } else if (url == '/tupian') {
        // url：统一资源定位符
        // 一个url 最终其实就要对应到一个资源的
        fs.readFile('./resource/1608283506(1).jpg', (err, data) => {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('文件读取失败 请稍后再试');
            } else {
                // data 默认是二进制数据 可以通过 toString转为咱们能识别的字符串
                // res.end() 支持两种数据类型 一种是二进制 一种是字符串
                // 图片就不需要指定编码了 因为我们常说的编码一般指的是：字符编码
                res.setHeader('Content-Type', 'image/jpeg;');
                res.end(data);
            }
        })
    }

})

server.listen(80, function () {
    console.log('服务器启动成功 可以访问啦');
})

