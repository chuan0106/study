const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
let Schema = mongoose.Schema
let UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  },
  // 创建时间
  created_time: {
    type: Date,
    // 注意: 这里不要写 Date.now() 会即可调用
    // 这里直接给了一个方法: Date.now
    // 当你去 new Model 的时候 如果你没有传递 create_time , 则 mongoose 就会调用 deFault 指定的 data.now 方法 然后使用其返回值作为默认值
    default: Date.now
  },
  // 修改时间
  last_modify_time: {
    type: Date,
    default: Date.now
  },
  // 头像
  avatar: {
    type: String,
    default: '/public/img/avatar-default.png'
  },
  // 介绍
  bio: {
    type: String,
    default: ''
  },
  // 爱好
  gender: {
    type: Number,
    enum: [-1, 0, 1],
    default: -1
  },
  // 生日
  birthday: {
    type: Date
  },
  // 状态
  status: {
    type: Number,
    // 0 没有权限设置
    // 1 不可以评论
    // 2 不可以登录使用
    enum: [0, 1, 2],
    default: 0
  }

})
module.exports = mongoose.model('User', UserSchema)

// let admin = new User({
//   email: 'xiaochuan199916@sina.com',
//   nickname: 'jack',
//   password: '123456'
// })


// 删除所有
// Cat.deleteMany({}, function (err) {
//   console.log("success");
// });

