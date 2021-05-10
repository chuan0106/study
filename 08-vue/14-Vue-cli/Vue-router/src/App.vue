<template>
  <div id="nav">
    <h2>Hello</h2>

    <router-link to="/home" replace="" active-class="active">首页</router-link>
    <button @click="btnClick">关羽</button>
    <router-link v-bind:to="/user/ + userId">用户</router-link>

    <!-- router 参数传递 -->
    <!-- <router-link to="/profile">档案</router-link> -->
    <!-- <router-link
      :to="{ path: '/profile', query: { name: xc, age: 18, height: 178 } }"
      >档案</router-link
    > -->
    <button @click="profileClick">档案</button>
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: '李四'
    }
  },
  methods: {
    btnClick() {
      console.log('btnClick')
      // 通过代码的方式修改路径
      // this.$router.push('/about')
      this.$router.replace('/about').catch(err => err)
      // window.location.hash = '/about';
    },
    profileClick() {
      this.$router
        .push({
          path: '/profile',
          query: {
            name: 'xc',
            age: 18,
            height: 178
          }
        })
        .catch(err => err)
    }
  }
}
</script>

<style>
.router-link-exact-active {
  color: pink;
}
.active {
  color: red;
}
</style>
