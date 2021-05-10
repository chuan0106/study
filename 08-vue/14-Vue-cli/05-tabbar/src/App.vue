<template>
  <div id="app">
    <router-view></router-view>
    <main-tba-bar></main-tba-bar>
  </div>
</template>

<script>
import MainTbaBar from 'components/mainTabbar/MainTabBar';
export default {
  name: 'App',
  components: {
    MainTbaBar,
  },
};
</script>
<style lang="less">
// style中的@import是stylus的语法，是在css中引用css文件
@import './assets/css/base.less';
</style>
