const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '雨神的自我修养',
        data: '2021-3',
        price: 38.36,
        count: 1
      },
      {
        id: 2,
        name: '雨神的王者之路',
        data: '2021-3',
        price: 2.48,
        count: 1
      },
      {
        id: 3,
        name: '雨神的郑州漂流记',
        data: '2021-3',
        price: 250.38,
        count: 1
      },
      {
        id: 4,
        name: '雨神是什么炼成的',
        data: '2021-3',
        price: 138.36,
        count: 1
      }
    ]
  },
  methods: {
    // getFinalPrice(price) {
    //   return '$' + price.toFixed(2)
    // }
    decrement(index) {
      console.log('de', index);
      this.books[index].count--
    },
    increment(index) {
      console.log('in', index);
      this.books[index].count++

    },
    removeHandler(index) {
      this.books.splice(index, 1)
    }
  },
  filters: {
    showPrice(price) {
      return '$' + price.toFixed(2)
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      // for (const i in this.books) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      // for (const item of this.books) {
      //   totalPrice += item.price * item.count
      // }
      // return totalPrice

      // reduce 
      return this.books.reduce((preValue, books) => {
        return preValue + books.price * books.count
      }, 0)  // 0是第一个初始化的值 需要有

    }

  }
})

// 编程范式: 命令式编程/声明式编程
// 编程范式: 面向对象编程(第一公民: 对象)/函数式编程(第一公民: 函数)

const num = [10, 20, 30, 50, 68, 6, 78, 544, 22, 3]

let num1 = num.filter(item => item < 50).map(item => item * 2).reduce((tpm, index) => {
  return tpm + index
})
console.log(num1);

// let num1 = num.filter(item => item < 50)
// console.log(num1);
// let num2 = num1.map(item => item * 2)
// console.log(num2);
// let num3 = num2.reduce((tmp, item) => {
//   return tmp + item
// })
// console.log(num3);

// // 1 需求: 去除所有小于100的数字
// let newNum = []
// for (let n of num) {
//   if (n < 100) {
//     newNum.push(n)
//   }

// }
// console.log(newNum);

// // 2 将所有小于100的数字进行转化: 全部 * 2
// let new2Num = []
// for (let n of newNum) {
//   new2Num.push(n * 2)
// }
// console.log(new2Num);

// // 3 将所有new2Num数字相加 得到最终的结果
// let total = 0
// for (let n of new2Num) {
//   total += n
// }
// console.log(total);