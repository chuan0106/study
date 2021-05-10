const express = require('express')
const app = express()
const port = 3000

// 中间件： 处理请求的 本质就是函数

// 在 express 中 对中间件有几种分类

// 当请求进来 会从第一个中间件开始进行匹配 如果匹配 则进来 如果不匹配 则继续匹配下一个中间件
// 不关心请求路径和请求方法的中间件
// 也就是说任何请求都会进入这个中间件
// 中间件本身是个方法 该方法接受三个参数
// request 请求对象
// response 响应对象
// next 下一个中间件
// 当一个请求进入一个中间件之后 如果不调用 next 则会停留当前中间件
// 所以 next 是一个方法 用来调用下一个中间件的
// 调用 next 方法也是要匹配的 (不是调用紧挨着的下一个) 

// app.use((req, res, next) => {
//     console.log('请求进来了,1');
//     next()
// })

// app.use((req, res, next) => {
//     console.log('请求进来了,2');
//     next()
// })

// app.use((req, res, next) => {
//     console.log('请求进来了,3');
//     res.send('33 end')
// })

// app.use((req, res, next) => {
//     console.log(1);
//     next()
// })

// app.use('/b', (req, res, next) => {
//     console.log('n');
// })
// 以 /xxx 开头的路径中间件


// app.use('/a', (req, res, next) => {
//     console.log('a');
//     // console.log(req.url);
//     next()
// })

// app.use((req, res, next) => {
//     console.log(2);
//     next()
// })

// app.use('/a', (req, res, next) => {
//     console.log('a 2');

// })

// 除了以上中间件之外 还有一种最常用的
// 严格匹配请求方法和请求路径的中间件
// app.get
// app.post
app.use((req, res, next) => {
    console.log(1);
    next()
})

app.get('/', (req, res, next) => {
    console.log('/');
})

app.use((req, res, next) => {
    console.log(2);
})

app.get('/', (req, res, next) => {
    console.log('/2');
    // res.send('11')
})

app.get('/a', (req, res, next) => {
    console.log('/a');
    // res.send('11')
})

// 如果没有能匹配的中间件 则 express 会默认输出 Cannot GET / 路径





app.listen(port, () => console.log(`Example app listening on port port!`))