<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.state.info }}</h2>

    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20stu }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  data() {
    return {
      message: '你好啊 小帅哥',
    };
  },
};
</script>

<style lang="less" scoped></style>
