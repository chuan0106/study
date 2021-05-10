/*
app.js 入门模块
职责:
创建服务
做一些服务相关配置
   模板引擎
   body-parser 解析表单 post 请求体
   提供静态资源服务
   挂载路由
   监听端口启动服务
*/
const express = require('express')
const app = express()
const port = 3003
let router = require('./router')
// 解析post 请求中间件
let bodyParser = require('body-parser')
app.
    // 开放资源
    use('/node_modules/', express.static('./node_modules/'))
    .use('/public/', express.static('./public'))
    // 挂载艺术模板
    .engine('html', require('express-art-template'))
    // 配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())



    // 把路由容器挂载到 app 服务中
    .use(router)

app.listen(port, () => console.log(`Example app listening on port port!`))

// module.exports = app
