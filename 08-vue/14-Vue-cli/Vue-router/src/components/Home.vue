<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容 套你猴子</p>
    <!-- 这里需要完整路径 -->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <!-- 因为Home 有两个孩子 所以需要在这里也 router-view 渲染一下 -->
    <router-view></router-view>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: '你好啊 小帅哥',
      path: '/home/news'
    }
  },
  created() {
    console.log('当被创建组件的时候')
  },
  destroyed() {
    console.log('被销毁的时候')
  },

  // 这两个函数 只有该组件保持了keep-alive 时 才是有效的
  activated() {
    this.$router.push(this.path).catch(err => err)
    console.log(this.$route.path)
  },
  deactivated() {
    console.log(this.$route.path)
    console.log('不活跃')
    // this.path = this.$route.path
  },

  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(this.$route.path)
    this.path = this.$route.path
    next()
  }
}
</script>
