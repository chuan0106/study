const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
let comments = [
    {
        name: '张三',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
]

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app
    .use('/public/', express.static('./public'))

    // 配置艺术模板
    // 第一个参数 表示 当渲染以 art 结尾的文件的时候 使用 art-template 模板引擎
    // express-art-template 是专门用来 express 中吧 art-template 整合到 express 中
    // 虽然外面这里不需要记载 art-template 但是也必须安装
    // 原因就在于 express-art-template 依赖了 art-template
    .engine('html', require('express-art-template'))

    // express 为 response 相应对象提供了一个方法 ： render
    // render 方法默认是不可以使用 但是如果配置了模板引擎就可以使用了  
    // res.render('html模板名',{模板数据})
    // 第一个参数不能写路径 默认回去项目中的 views 目录查找该模板文件
    // 也就是说 express 有一个约定: 开发人员把所有的视图文件都放到 views 目录中
    // 如果想要修改默认的 views 目录 则可以
    // .set('views', render 函数的默认路径)

    .get('/', (req, res) => res.render('index.html', {
        comments: comments
    }))

    // 当以 POST 请求 /post 的时候 执行指定的处理函数 
    // 这样的话 我们就可以利用不同的请求方法让一个请求路径使用多次
    .post('/post', (req, res) => {
        // console.log('收到表单 post 请求了');

        // 1 获取表单 post 请求数据
        // 2 处理
        // 3 发送响应

        // req.query 只能拿 get 请求参数
        // console.log(req.body);

        let comment = req.body
        comment.dateTime = '2021-01-12'
        comments.unshift(comment)

        // res.writeHead(302, { 'Location': '/' });
        // res.end();
        res.redirect('/')
    })

    // .get('/pinglun', (req, res) => {
    //     let comment = req.query
    //     comment.dateTime = '2021-01-12'
    //     comments.unshift(comment)

    //     // res.writeHead(302, { 'Location': '/' });
    //     // res.end();
    //     res.redirect('/')
    // })
    .get('/post', (req, res) => res.render('post.html'))
app.listen(port, () => console.log(`Example app listening on port port!`))