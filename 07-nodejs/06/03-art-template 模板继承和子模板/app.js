const express = require('express')
const path = require('path');
const app = express()
let template = require('art-template');

let fs = require('fs');
const port = 3000

app
    .engine('html', require('express-art-template'))
    .use('./public', express.static(path.join(__dirname, './public')))
    .use('/node_modules/', express.static(path.join(__dirname, './node_modules')))

    .get('/', (req, res) => {
        res.render('index.html', {
            name: '张三'
        })
    })

app.listen(port, () => console.log(`Example app listening on port port!`))