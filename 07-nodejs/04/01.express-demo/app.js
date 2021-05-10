const express = require('express')
const app = express()
const port = 3000
// app.use('/public/', express.static('./public'))

// 当省略第一个参数的时候 则可以通过省略  /public/ 的方式来写
app.use(express.static('./public'))
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/login/', (req, res) => res.send('login page'))
app.listen(port, () => console.log(`Example app listening on port port!`))
