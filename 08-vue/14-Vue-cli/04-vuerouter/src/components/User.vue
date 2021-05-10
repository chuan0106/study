<template>
  <div>
    <h2>我是用户相关嘿嘿嘿</h2>
    {{ userId }}
    {{ $route.params.userId }}
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$route.params.userId; // $route 拿到处于活跃状态的对象
    },
  },
  methods: {
    btnClick() {
      // 所有的组件都继承自Vue的原型
      console.log(this.$router);
      console.log(this.$route);
    },
  },
  // created() {
  //   console.log('当被创建组件的时候');
  //   document.title = '用户';
  // },
  name: 'user',
};
</script>

<style></style>
