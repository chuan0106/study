const express = require('express')
let fs = require('fs')
const app = express()
const port = 3000



// app.get('/abc', (req, res, next) => {
//     console.log('/abc');
//     req.foo = {}
//     next()
// })

// app.use((req, res, next) => {
//     console.log(req.foo);
//     console.log(2);
// })

// app.get('/abc', (req, res, next) => {
//     console.log('/abc 2');
//     // res.send('11')
// })


// app.get('/a', (req, res, next) => {
//     console.log('/a');
//     // res.send('11')
// })

// 如果没有能匹配的中间件 则 express 会默认输出 Cannot GET / 路径

app.get('/', (req, res, next) => {
    fs.readFile('./a/dsada/fgf/gg', (err, data) => {
        if (err) {
            // return res.status(500).send('server error')
            // 当调用 next 的时候 如果传递了参数 则直接往后找到带有 四个参数的应用程序界别的中间件
            // 当发生错误的时候 我们可以调用 next 传递错误对象
            // 然后就会被全局错误处理中间件匹配到并处理之
            next(err)
        }
    })
})

app.get('/', (req, res, next) => {
    console.log('./2');
})

app.get('/a', (req, res, next) => {
    fs.readFile('./a/dsada/fgf/gg', (err, data) => {
        if (err) {
            next(err)
        }
    })
})

// 配置错误处理中间件
app.use((err, req, res, next) => {
    res.status(500).json({
        // err 自带的属性 错误信息
        message: err.message
    })
})



app.listen(port, () => console.log(`Example app listening on port port!`))