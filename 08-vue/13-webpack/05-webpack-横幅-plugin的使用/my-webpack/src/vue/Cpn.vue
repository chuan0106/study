<template>
  <div>
    <h2>我是cpn组件的标题</h2>
    <p>我是cpn组件的内容</p>
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Cpn',
  data() {
    return {
      name: 'Cpn组件的name',
    };
  },
};
</script>

<style lang="scss" scoped></style>
