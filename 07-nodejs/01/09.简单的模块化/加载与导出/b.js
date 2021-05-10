
// export.foo = 'hello';
console.log(exports);
exports.foo = 'hello';
exports.add = (a, b) => a + b;
let age = 'age';
exports.age = 'age';
var let = 18;

add = (x, y) => x - y;
exports.readFile = (path, callback) => console.log('文件路径', path);