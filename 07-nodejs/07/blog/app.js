let path = require('path')
const express = require('express')
const app = express()
const port = 3001
let router = require('./router');
let bodyParser = require('body-parser')
var session = require('express-session');

app

    .engine('html', require('express-art-template'))
    .set('views', path.join(__dirname, './views'))   // 默认就是 ./views'
    .use('/public', express.static(path.join(__dirname, './public')))
    .use('/node_modules/', express.static(path.join(__dirname, './node_modules')))

    // 配置 解析 post 表单 body 中间件
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    // 在 express 这个框架中 默认不支持 session 和 cookie  
    // 但是我们可以使用第三方中间件 express-session 来解决
    // 1 npm install express-session
    // 2 配置 
    // 3 使用
    //      当把这个插件配置好之后 我们就可以通过 req.session 来访问和设置 session 成员
    //       添加 session 数据   req.session.foo='bar'
    //        访问 session 数据    req.session.foo

    .use(session({
        // 配置加密字符串 他会在原有加密的基础上在和这个字符串拼起来去加密
        // 目的是为了增加安全性 防止客户端恶意伪造
        secret: 'keyboard cat',

        resave: false,

        // 无论你是否使用 session 我都默认直接给你分配一把钥匙
        saveUninitialized: true
    }))

    // 把路由挂载到 app 中
    .use(router)

    // 配置一个处理 404 的中间件
    .use((req, res) => {
        res.render('404.html')
    })

    // 配置一个全局错误处理中间件
    .use((err, req, res, next) => {
        res.status(500).json({
            err_code: 500,
            // err 自带的属性 错误信息
            message: err.message
        })
    })
app.listen(port, () => console.log(`Example app listening on port port!`))