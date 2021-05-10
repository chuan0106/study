let http = require('http')
let url = require('url')

let session = require('./middlewares/session')
let cookie = require('./middlewares/cookie')
let postBody = require('./middlewares/post-body')
let query = require('./middlewares/query')

let server = http.createServer((req, res) => {
    // 解析表单 get 请求体
    // 解析表单 post 请求体
    // 解析 cookie 请求体
    // 处理 session 
    // 使用模板引擎
    // console.log(req.query);
    // console.log(req.body);
    // console.log(req.cookies);

    // 解析请求地址中的 get 参数
    // let urlObj = url.parse(req.url, true)
    // req.query = urlObj.query
    query(req, res)

    // 解析请求地址中的 post 参数
    // req.body = {
    //     foo: 'bar'
    // }
    postBody(req, res)


    //  解析cookie
    // req.cookie = {
    //     isLogin: true
    // }
    cookie(req, res)

    // 配置 session 
    // req.session = {}
    session(req, res)

    // 配置模板引擎
    req.render = function () {

    }

    if (req.url === 'xxx') {
        // 处理
        // query body cookies session render
    } else if (url === 'xx') {
        // 处理
    }




    // 上面的过程都是为了在后面做具体业务操作处理的时候更方便
})

server.listen(3000, () => {
    console.log('3000,running...');
})
