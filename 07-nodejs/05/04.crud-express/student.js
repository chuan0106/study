const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/xs', { useNewUrlParser: true, useUnifiedTopology: true });

let Schema = mongoose.Schema
let studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        // 枚举 要么1 要么2
        enum: [0, 1],
        // 默认
        default: 0
    },
    age: {
        type: Number
    },
    hobbies: {
        type: String,
    },
})

// 直接导出模型构造函数
module.exports = mongoose.model('Student', studentSchema);



