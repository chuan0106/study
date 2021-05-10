const { promises } = require('fs');
const mongoose = require('mongoose');
// 1.连接数据库
mongoose.connect('mongodb://localhost/ys', { useNewUrlParser: true, useUnifiedTopology: true });

// 2.设计文档结构
const kittySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true // 必须有y
        
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
});
// 3 将文档结构发布为模型  
// 第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//                 mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
//                 例如这里的 User 最终会变为 users 集合名称
//    第二个参数：架构 Schema
const Kitten = mongoose.model('Kitten', kittySchema);

let admin = new Kitten({
    username: 'zs',
    password: '123456',
    email: 'admin@admin.com'
})
// 4. 当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据为所欲为了（增删改查）

// 增

// admin.save((err, data) => {
//     if (err) {
//         console.log('错误');
//     } else {
//         console.log(data);
//     }
// })


// 查

Kitten.find((err, data) => {
    if (err) {
        console.log('查询失败');
    } else {
        console.log(data);
    }
})

Kitten.findOne({
    username: '456'
}).then(data => {
    console.log(data);
    if (data) {
        // 表示用户已存在 不能注册
        console.log('用户已存在');
    }
    // 用户不存在可以注册
    else {
        console.log('用户可以注册');
        return new Kitten({
            username: 'ys',
            password: '3838438',
            email: 'admin@admin.com'
        }).save()

    }

}).then(ret => {

})

Promise.all([
    Kitten.findOne({ username: 'zs' }),
    Kitten.findOne(({ username: 'ys', }))
]).then(
    arr => {
        console.log('全部都成功了');
        let [res1, res2] = arr;
        console.log(res1, res2);
    }, err => {
        console.log('至少有一个失败了');
    }
)

// Kitten.find({
//     username: 'zs'
// }, (err, data) => {
//     if (err) {
//         console.log('查询失败');
//     } else {
//         console.log(data);
//     }
// })

// Kitten.findOne({
//     username: 'zs'
// }, (err, data) => {
//     if (err) {
//         console.log('查询失败');
//     } else {
//         console.log(data);
//     }
// })


// 删除

// Kitten.remove({
//     password: '123456'
// }, (err, data) => {
//     if (err) {
//         console.log('查询失败');
//     } else {
//         console.log(data);
//     }
// })

// Kitten.deleteMany(({
//     password: '123456'
// }, (err, data) => {
//     if (err) {
//         console.log('查询失败');
//     } else {
//         console.log(data);
//     }
// }))


/* 改


 {
_id: 6007ce94db48af1f5483e520,
    username: 'zs',
    password: '123456',
    email: 'admin@admin.com',
                __v: 0
}

*/
// Kitten.findByIdAndUpdate('6007ce94db48af1f5483e520', {
//     password: '456789'

// }, (err, data) => {
//     if (err) {
//         console.log('更新失败');
//     } else {
//         console.log('更新成功');
//         console.log(data);
//     }
// })