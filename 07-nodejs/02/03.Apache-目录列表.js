let http = require('http');
let fs = require('fs');
let wwwDir = 'D:/www';
// 1 创建Server
let server = http.createServer();
server.on('request', (req, res) => {
    var url = req.url;
    fs.readFile('./3.template.html', (err, data) => {
        if (err) {
            return res.end('404');
        }
        // 1 何如得到wwwDir 目录列表的文件名和目录名
        // fs.readdir
        // 2 如何将得到的文件名和目录名替换到 template.html 中
        // 2.1 在template.html中 需要替换的位置预留一个特殊的标记(就像以前使用模板引擎的标记一样)
        // 2.2 根据 files 生成的需要的 html 内容
        // 只要你做了这两件事 那这个问题就解决了
        fs.readdir(wwwDir, (err, files) => {
            if (err) {
                return res.end('Can not find www dir');
            }
            let content = '';
            files.forEach(item => {
                content += `  <tr>
                <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
                <td class="detailsColumn" data-value="0"></td>
                <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
              </tr>`;

            });
            data = data.toString();
            data = data.replace('^_^', content);
            res.end(data);
        });


    })
})
server.listen(80, () => {
    console.log('running....');
})