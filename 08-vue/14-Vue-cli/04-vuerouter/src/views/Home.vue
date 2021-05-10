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
    };
  },
  created() {
    console.log('当被创建组件的时候');
  },
};
</script>
