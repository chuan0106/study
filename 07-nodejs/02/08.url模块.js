let url = require('url');
let obj = url.parse('pinglun?name=雨神&message=哈哈哈打算', true);
console.log(obj);
console.log(obj.query);
