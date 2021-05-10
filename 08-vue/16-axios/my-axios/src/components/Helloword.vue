<template>
  <div>
    <h2>我是hello</h2>

    <h2>{{ categories }}</h2>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Helloword',
  data() {
    return {
      categories: '',
    };
  },
  created() {
    axios({
      url: 'http://152.136.185.210:7878/api/m5/home/multidata',
    }).then((data) => {
      this.categories = data;
    });
  },
};
</script>

<style lang="less" scoped></style>
