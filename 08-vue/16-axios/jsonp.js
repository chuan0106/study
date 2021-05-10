let count = 1
export default function originPJSIONP(option) {
  // 1. 从传入的option 中提取 url
  const url = option.url
  // 2 在body 中添加 script 标签
  const body = document.querySelector('body')
  const script = document.createElement('script')

  // 3 内部产生一个不重复的callback
  const callback = 'jsonp' + count++

  // 4 监听window上的jsonp 的调用
  return new Promise((resolve, reject) => {
    try {
      window[callback] = function (result) {
        body.removeChild(script)
        resolve(result)
      }
      const params = handleParam(option.data)
      script.src = url + '?callback=' + callback + params
      body.appendChild(script)
    } catch (e) {
      body.removeChild(script)
      reject(e)
    }
  })
}