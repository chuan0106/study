/*
router.js 路由模块
职责:
    处理路由
    根据不同的请求方法+请求路径设置具体的处理函数
    模块职责要单一 不要乱写
    我们划分模块的目的就是为了增强项目的可维护性
    提升开发效率
    
*/
let fs = require('fs')
let Student = require('./student')
// express 提供了一个更好的方式
// 专门用来包装路由的
const express = require('express')
const { isRegExp } = require('util')

// 1 创建一个路由
let router = express.Router()


// 2 把路由都挂载到 router 路由容器中

// 渲染学生列表页面
router.get('/students', (req, res) => {
    // readFile 第二个参数是可选的,传入 utf8 就是告诉他把读取的文件按照 utf8 编码 转成我们认识的字符
    // 撤了这样的转寒只为 也可以通过 data.toString() 的方式
    Student.find((err, students) => {
        if (err) {
            return res.status(500).send('not 404')
        }
        res.render('index.html', {
            students: students
        })
    })
})
    .get('/students/new', (req, res) => {
        res.render('new.html')
    })
    .post('/students/new', (req, res) => {
        // 1. 获取表单数据
        // 2 处理
        // 将数据保存到 db.json 文件中用以持久化
        // 3 发送响应
        // console.log(req.body)
        // 先读取出来 转成对象
        // 然后往对象中 push 数据
        // 然后把对象转为字符串 
        // 然后把字符串在此写入文件
        // console.log(req.body);
        Student.save(req.body, err => {
            if (err) {
                return res.status(500).send('not 404')
            }
            res.redirect('/students')
        })
    })

    // 渲染编辑学生页面
    .get('/students/edit', (req, res) => {
        // 1 在客户端的列表页中处理链接问题(需要有 id 参数)
        // 2 获取要编辑的学生 id
        // 3 渲染编辑页面
        //    根据 id 把学生信息查出来
        //    使用模板引擎渲染页面
        // console.log(req.query);

        // parseInt 转成数字
        Student.findById(parseInt(req.query.id), (err, student) => {
            if (err) {
                return res.status(500).send('not 404')
            }
            // console.log(student);
            res.render('edit.html', {
                student: student
            })
        })
    })

    // 处理编辑学生
    .post('/students/edit', (req, res) => {
        //    1 获取表单数据
        //         req.body
        //    2 更新
        //         Student.updateById()
        //    3 发送响应
        // console.log(req.body);

        Student.updateById(req.body.id, err => {
            if (err) {
                return res.status(500).send('not 404')
            }
            res.redirect('/students')
        })
    })

    // 处理删除学生
    .get('/students/delete', (req, res) => {
        //   1 获取要删除的id
        // 2 根据 id 执行删除操作
        // 3 根据操作结果发送响应数据
        console.log(req.query);

        Student.deleteById(req.query, err => {
            if (err) {
                return res.status(500).send('not 404')
            }
            res.redirect('/students')
        })

    })
// 3 把router 导出
module.exports = router

// 这样也不方便

// module.exports = app => {
//     // console.log(app);
//     app
//         .get('/', (req, res) => {
//             // readFile 第二个参数是可选的,传入 utf8 就是告诉他把读取的文件按照 utf8 编码 转成我们认识的字符
//             // 撤了这样的转寒只为 也可以通过 data.toString() 的方式
//             fs.readFile('./db.json', 'utf8', (err, data) => {
//                 if (err) {
//                     return res.status(500).send('not 404')
//                 }
//                 // 字符串
//                 console.log(typeof data)
//                 res.render('index.html', {

//                     // 从文件中读取到的数据一定是字符串、
//                     // 所以这里一定要收到转成对象
//                     students: JSON.parse(data).students
//                 })
//             })
//             // res.render('index.html')
//         })

// }
