// app application 应用程序
// 把当前模块所有的依赖项都声明在文件模块最上面
// 为了让目录结构保持统一清晰 所以我们约定 把所有的html 文件 都放到 views(视图) 目录中
// 那些资源能够被用户访问 那些资源不能够被用户访问 我现在可以通过代码来进行非常灵活的控制
// npm install art-template
let http = require('http');
let fs = require('fs');
let template = require('art-template');
let url = require('url');
let comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

http.createServer(function (request, response) {

  let parseObj = url.parse(request.url, true);
  let pathname = parseObj.pathname;
  if (pathname === '/') {
    fs.readFile('./views/index.html', (err, data) => {
      if (err) {
        return response.end('404 not');
      }
      var htmlStr = template.render(data.toString(), {
        comments: comments
      })
      response.end(htmlStr);

    })
  } else if (pathname.indexOf('/public/') === 0) {
    // 统一处理 ：
    // 如果请求路径是一 / public/开头的 则我认为你要获取 public 中某个资源
    // 所以我们就直接可以吧请求路径当做文件路径来直接进行读取
    fs.readFile('.' + pathname, (err, data) => {
      if (err) {
        return response.end('404 not')
      } else {
        response.end(data);
      }
    });

  } else if (pathname === '/post') {
    fs.readFile('./views/post.html', (err, data) => {
      if (err) {
        return response.end('404 not');
      }
      response.end(data);
    })
  } else if (pathname === '/pinglun') {
    let comment = parseObj.query;
    comment.dateTime = '2021-1-6';
    // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
    comments.unshift(comment);
    // 如何通过服务器让客服端重定向?
    // 1 状态码设置为 302 临时重定向
    // statusCode
    // 2 在响应头中通过localhost 告诉客户端往哪重定向
    // setHeader
    // 如果客户端发现收到服务器的相应的状态码是 302 就会自动去响应头中找 localhost 然后对改地址发起新的请求
    // 所以你就能看到客户端自动跳转了

    response.writeHead(302, { 'Location': '/' });
    response.end();

  }
  else {
    // 其他的都写成404
    fs.readFile('./views/404.html', (err, data) => {
      if (err) {
        return response.end('404 not');
      }
      response.end(data);
    })
  }
}).listen(8081);

