<template>
  <div id="app">
    {{ result }}
    <h2>========================</h2>
    <helloword></helloword>
  </div>
</template>

<script>
import axios from 'axios';
import Helloword from './components/Helloword.vue';
// axios
export default {
  name: 'App',
  components: { Helloword },
  data() {
    return {
      result: '',
    };
  },
  created() {
    // 组件创建完成生命周期
    axios({
      url: 'http://152.136.185.210:7878/api/m5/home/multidata',
    }).then((res) => {
      console.log(res);
      this.result = res;
    });
  },
};
</script>

<style></style>
