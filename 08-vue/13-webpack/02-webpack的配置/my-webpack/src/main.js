// 1.commonjs模块化规范
const mathUtils = require('./js/mathUtils')
console.log(mathUtils.add(10, 28));


// 2.es6模块化规范
import { name, age, height } from "./js/info.js";
console.log(name);
console.log(age);
console.log(height);