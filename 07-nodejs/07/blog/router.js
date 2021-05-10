const md5 = require('blueimp-md5')
const express = require('express')
const User = require('./models/user')
let router = express.Router()

router
    .get('/', (req, res) => {
        console.log(req.session.user);
        res.render('index.html', {
            user: req.session.user
        })

    })

    .get('/login', (req, res) => {
        res.render('login.html')
    })
    .post('/login', (req, res, next) => {
        // 1 获取表单数据
        // 2 查询数据库用户密码是否正确
        // 3 发送响应数据
        let body = req.body
        User.findOne({
            email: body.email,
            password: md5(md5(body.password))
        }, (err, user) => {
            if (err) {
                // return res.status(500).json({
                //     err_code: 500,
                //     // err 自带的属性 错误信息
                //     message: err.message
                // })
                return next(err)
            }

            if (!user) {
                // !user 优先处理错误
                return res.status(200).json({
                    err_code: 1,
                    // err 自带的属性 错误信息
                    // message: '邮箱或者密码错误'
                    message: 'Email or password is invalid'
                })
            }


            // 用户存在 登录成功  通过 session 记录登录状态
            req.session.user = user

            res.status(200).json({
                err_code: 0,
                message: 'OK'
            })

        })
    })

    .get('/register', (req, res) => {
        res.render('register.html')
    })
    .post('/register', async (req, res, next) => {
        let body = req.body
        // console.log(body)
        try {
            if (await User.findOne({ email: body.email })) {
                return res.status(200).json({
                    err_code: 1,
                    message: '邮箱已存在'
                })
            }
            if (await User.findOne({ nickname: body.nickname })) {
                // return res.render('register.html', {
                //     err_message: '用户或者密码已存在',
                //     form: body
                // })
                return res.status(200).json({
                    err_code: 2,
                    message: '用户名已存在'
                })
            }


            // 对密码进行 md5 重复加密
            // npm i blueimp-md5
            body.password = md5(md5(body.password))

            // 创建用户 执行注册
            await new User(body).save().then(user => {

                // 注册成功 通过使用 session 记录用户的登录状态
                req.session.user = user
                // express 提供了一个相应方法: json
                // 该方法提供了一个对象作为与参数,他会自动帮你把字符串再次发送给浏览器
                res.status(200).json({
                    err_code: 0,
                    message: 'OK'
                })


                // 服务端冲向只针对同步请求才有效 异步请求无效
                // res.redirect('/')
            })



        } catch (err) {
            // res.status(500).json({
            //     err_code: 500,
            //     message: '服务端异常'
            // })
            console.log(err);
            next(err)
        }

    })
    .get('/logout', (req, res) => {
        // 清楚登录状态
        req.session.user = null

        // 重定向到登录页面
        res.redirect('/login')
    })


// .post('/register', function (req, res) {
//     // 1. 获取表单提交的数据
//     //    req.body
//     // 2. 操作数据库
//     //    判断改用户是否存在
//     //    如果已存在，不允许注册
//     //    如果不存在，注册新建用户
//     // 3. 发送响应
//     // console.log(req.body);
//     let body = req.body
//     User.findOne({
//         $or: [{
//             email: body.email
//         }, {
//             nickname: body.nickname
//         }]
//     }, function (err, data) {
//         if (err) {
//             return res.status(500).json({
//                 err_code: 500,
//                 message: '服务端错误'
//             })
//         }
//         // console.log(data);
//         if (data) {
//             return res.status(200).json({
//                 // success: true,
//                 // 错误码
//                 err_code: 1,
//                 // 最好使用中文
//                 message: 'email or nickname already exists'
//                 // message: '邮箱或者账号重复'
//             })
//         }

//         // 对密码进行 md5 重复加密
//         body.password = md5(md5(body.password))
//         new User(body).save((err, data) => {
//             if (err) {
//                 return res.status(500).json({
//                     err_code: 500,
//                     message: '服务端错误'
//                 })
//                 return res.status(200).json({
//                     err_code: 1,
//                     message: 'Internal error'
//                     // message: '邮箱或者账号重复'
//                 })
//             }
//         })


//         // console.log('ok');
//         // 接收的是 json文件字符串
//         // res.status(200).send('{"err_code":true}')
//         // res.status(200).send(JSON.stringify({
//         //     err_code: true,
//         //     foo: 'bar'
//         // }))


// // express 提供了一个相应方法: json
// // 该方法提供了一个对象作为与参数,他会自动帮你把字符串再次发送给浏览器
// res.status(200).json({
//             err_code: 0,
//             message: 'OK'
//         })
//     })
// })

module.exports = router

