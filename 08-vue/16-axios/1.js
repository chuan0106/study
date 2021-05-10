let count = 1
const callback = 'jsonp' + count++
console.log(callback);
let arr = [1, 3, 'pink']
console.log(arr);
arr[callback] = () => {
  console.log('111');
}
console.log(arr);