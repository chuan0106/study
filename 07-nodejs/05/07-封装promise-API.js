const { promises } = require('dns')
var fs = require('fs')
const { url } = require('inspector')


let pReadFile = url => {
    return new Promise(function (resolve, reject) {
        fs.readFile(url, 'utf8', function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })

}
pReadFile('./00-js中的一等公民函数.js').then((data) => {
    console.log(data);
    return pReadFile('./01.json')
}, err => {
    console.log(err);
}).then(data => {
    console.log(data);
})