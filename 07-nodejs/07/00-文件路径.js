let fs = require('fs')
let path = require('path')

// __dirname 和 __filename 这俩哥们是动态获取文件以及文件所属目录的绝对路劲
fs.readFile(path.join(__dirname, './00-文件路径.js'), (err, data) => {
    if (err) {
        throw err
    }
    // console.log(data.toString());
    console.log(data.toString());
})