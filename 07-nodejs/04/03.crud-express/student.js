/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 *
 * 这里才是我们学习 Node 的精华部分：奥义之所在
 * 封装异步 API
 */

var fs = require('fs')

var dbPath = './db.json'

/**
 * 获取学生列表
 * @param  {Function} callback 回调函数
 */
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

/**
 * 根据 id 获取学生信息对象
 * @param  {Number}   id       学生 id
 * @param  {Function} callback 回调函数
 */
exports.findById = (id, callback) => {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students
        let ret = students.find(item => item.id === parseInt(id))
        callback(null, ret)
    })
}
/**
 * 添加保存学生
 * @param  {Object}   student  学生对象
 * @param  {Function} callback 回调函数
 */
// student 是数组 db.json 要传入的数据   callback 回调函数
exports.save = (student, callback) => {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students

        // 处理 id 唯一的 不重复
        student.id = students[students.length - 1].id + 1

        // 把用户传递的独享保存到数组中
        students.push(student)

        // 把对象数据转化为字符胡灿
        let fileDat = JSON.stringify({
            students: students
        })


        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileDat, (err) => {
            if (err) {
                // 错误就是把错误对象传给他
                return callback(err)
            }
            // 成功就没错 所以错误对象是 null
            callback(null)
        })
    })
}

/**
 * 更新学生
 */
exports.updateById = (student, callback) => {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students

        // 修改成数字  不然二次修改  字符串会报错  这里记得把id 统一转为数字类型
        student.id = parseInt(student.id)

        // 要修改谁 就需要把谁找出来
        // ES6 中的一个数组方法 find
        // 需要接受一个函数作为参数
        // 当某个遍历项符合   return item.id === students.id 条件的时候,find 会终止遍历,同时会放回遍历项
        let stu = students.find(item => {
            return item.id === student.id
        })
        // 这种方式写死了 不能一百个写一百次
        // stu.name = student.name
        // stu.age = student.age

        // 遍历拷贝对象
        for (var key in student) {
            stu[key] = student[key]
        }
        // 把对象数据转化为字符胡灿
        let fileDat = JSON.stringify({
            students: students
        })


        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileDat, (err) => {
            if (err) {
                // 错误就是把错误对象传给他
                return callback(err)
            }
            // 成功就没错 所以错误对象是 null
            callback(null)
        })
    })
}
/**
 * 删除学生
 */
exports.deleteById = ((id, callback) => {

    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students


        // findIndex 方法专门用来根据条件查找元素的下标
        let deleteId = students.findIndex(item => {
            return item.id === parseInt(id)
        })

        // 根据下标从数组中删除对象的学生对象
        students.splice(deleteId, 1)

        // 把对象数据转化为字符胡灿
        let fileDat = JSON.stringify({
            students: students
        })


        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileDat, (err) => {
            if (err) {
                // 错误就是把错误对象传给他
                return callback(err)
            }
            // 成功就没错 所以错误对象是 null
            callback(null)
        })
    })
})