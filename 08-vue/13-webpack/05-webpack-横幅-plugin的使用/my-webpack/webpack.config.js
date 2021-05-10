const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: './src/main.js',  // 入口
  output: {  // 出口
    path: path.resolve(__dirname, 'dist'), //文件放在当前目录下的dist文件下
    filename: 'bundle.js',  //由webpack打包后生成的文件名称
    // publicPath: 'dist/' // 以后涉及任何 Url 的东西都会在前面自动拼接 dist/
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
      // }，


      // 配置 Vue loader 
      {
        test: /\.vue$/i,
        use: ['vue-loader']
      }
    ],


  },
  resolve: {
    // alias别名
    // 配置 vue 使用文件
    // extensions: ['js', 'css', 'vue'],   // 可以省略文件扩展名
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  },
  plugins: [  // webpack 横幅 plugin 的使用
    new webpack.BannerPlugin('版权归属于小川所有'),


    // 这将会自动在 dist 目录中生成一个名为 index.html 的文件，并且 copy 根目录下index 的模板
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),

    // js 压缩的plugin
    new uglifyJsPlugin()
  ],
  devServer: {
    contentBase: './dist',
    inline: true, // 是否实时进行监听
    port: 8080,  // 默认8080
    // historyApiFallback:  // 在SPA页面中 依赖html5 的history 模式 暂时不知道干嘛的 
  }
}
