<template>
  <div>
    <h2 class="red">{{ message }}</h2>
    <button @click="btnClick">点击</button>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
import cpn from './Cpn';

export default {
  template: '<Cpn></Cpn>',
  components: {
    cpn,
  },
  name: 'App',
  data() {
    return {
      message: ' 你好啊 小帅哥',
      name: '雨神',
    };
  },
  methods: {
    btnClick() {
      console.log('btnClick');
    },
  },
};
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
</style>
