// 入口文件

// 1.commonjs模块化规范
const mathUtils = require('./js/mathUtils')
console.log(mathUtils.add(10, 28));


// 2.es6模块化规范
import { name, age, height } from "./js/info.js";
console.log(name);
console.log(age);
console.log(height);

// 3.依赖 css 文件
require('./css/normal.css')


// 4.依赖 less 文件
require('./css/special.less')


document.writeln('<h2>你好啊</h2>')