// 抽取公共的
// 不确定的额作为参数
// 结果 返回给用户

// 使用while 循环优化
// 数据
function my_template(id, data) {

  // 字符串
  var str = document.querySelector('#' + id).innerHTML;
  // 定义正则
  var reg = /{{(\w+)}}/;

  var result = reg.exec(str);
  // 循环替换 知道为null 替换
  while (result) {
    //   {{name}}   data{name}
    str = str.replace(result[0], data[result[1]]);
    // 再次检索
    result = reg.exec(str);
  }
  // 获取结果
  return str
}
/*
               封装的目的
               模板引擎总结
               让大伙了解模板引擎的 核心原理
               使用正则表达式 检索字符串 知道检索不到为止
               总结
                    面试官问道
                    模板引擎  用过 说原理
                    ajax
                    用过ajax吗
                    用在不刷新页面获取数据
                    用法是 创建异步对象 请求行 请求头 回调函数 请求主体
                    请求响应回来之后 会触发 回调函数 而我们渲染页面的操作就是卸载回调函数中
                    在我写的项目里 结合ajax 基本是这么用的
                    发送之前 修改页面结构
                    数据回来之后 修改页面结构
                    我从后台拿到的数据一般是 json 曾经碰到过 用xml的不知道 贵公司用的是那种方式交互数据
                    每次都自己写  好烦
                    试着自己封装了ajax
                    可以设置 get post data url success
                    后来发现 jQuery 有ajax  开始使用jQuery的ajax
                    Query 的ajax 中帮我们实现了 自动转化数据的操作 就试着 修改了一下 自己封装的 ajax 工具函数 也实现了  自动转化数据的功能
                    原理就是  获取 返回的content-type 做判断
                    所以我在项目中 如果用了  jQuery的ajax 如果不用 我就用自己封装的

                    随着数据的复杂程度变高 我发现 修改dom元素很讨厌
                    我就找到了 模板引擎这个东西 对比一下  用 art-template
                    用了一段时间之后 感觉不错  就去自己实现了一下
                    原理是 正则 替换 文本
*/