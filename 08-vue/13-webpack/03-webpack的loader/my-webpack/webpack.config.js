const path = require('path')
console.log(path.resolve(__dirname, 'dist'));

module.exports = {
  entry: './src/main.js',  // 入口
  output: {  // 出口
    path: path.resolve(__dirname, 'dist'),  // 路径 需要时绝对路径  找到的是 dist 路径
    filename: 'bundle.js',  // 文件名字
    publicPath: 'dist/' // 以后涉及任何 Url 的东西都会在前面自动拼接 dist/
  },
  // 配置 css 可以去 webpack 官网
  module: {
    rules: [
      {
        test: /\.css$/i,
        // css-loader 只负责将css文件进行加载
        // style-loader 负责将样式添加到 dom 中
        //  使用多个 loader 是从右向左!!!
        use: ['style-loader', 'css-loader'],
      },
      // 配置 less
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      // 配置图片

      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片 小于 limit 时  会将图片编译成 base64字符串形式
              // 如果图片大于 limit 时 则需要安装 file-loader 模块进行加载
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]' // webpack 给打包过的文件取名字  hash 默认是32 位 这是限制了8位 [ext] 是原来的扩展名
            },
          },
        ],
      },
      // 配置 babel 没使用成功 也不知道为啥
      // {
      //   test: /\.js$/,
      //   // exclude 排除
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['es2015']
      //     }
      //   }
      // }
    ],
  },

}
