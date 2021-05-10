// 1.导入的{} 定义的变量
import { flag, sum } from "./aaa.js";

if (flag) {
  console.log('小明是天才,哈哈哈');
  console.log(sum(10, 50));
}

// 2.直接导入 export 定义的变量
import { num1, height } from "./aaa.js";
console.log(num1, height);

// 3. 导入 export 的function/class
import { mul, Person } from "./aaa.js";
console.log(mul(20, 50));

const p = new Person('雨神')   // person 是 class 所以需要 new 出来一个对象
p.run(18)

// 4.导入 export 的 default
import addr from "./aaa.js";
addr('我套你猴子')

// 5.统一全部导入
import * as aaa from './aaa.js'
console.log(aaa.flag);
console.log(aaa.height);