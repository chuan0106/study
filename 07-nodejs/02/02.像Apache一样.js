let http = require('http');
let fs = require('fs');
let server = http.createServer();
let wwwDir = 'D:/www';
server.on('request', function (req, res) {
    var url = req.url;
    console.log(url);
    var filePath = '/index.html';
    // index.html
    // /a.txt wwwDir + /a.txt
    // /apple/login.html wwwDir + /apple/login.html
    // /img/ab1/jpg wwwDir + /img/ab1.jpg
    if (url !== '/') {
        filePath = url;
    }
    fs.readFile(wwwDir + filePath, (err, data) => {
        if (err) {
            return res.end('404');
        }
        res.end(data);
    })
    console.log(wwwDir + filePath);
})
server.listen(3000, function () {
    console.log('running.....');
})