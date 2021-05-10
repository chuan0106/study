<template>
  <div> 

  </div> 
</template>

<script>
// mixins，用来更高效的实现组件内容的复用。
// 全局mixin就是给全部Vue文件添加一些公用的实例（方法，过滤器and so on）
// 使用场景：请求方式，时间格式。这些如果在用到的页面使用的话代码会重复的很多，所以在全局混入这些实例会减少代码量，可维护性也比较高。

// 备注的不多 用到可以去查一查
export default {
  data() {
    return {
      name: 'mixin'
    }
  },
  created() {
    console.log('mixin...', this.name);
  },
  mounted() { },
  methods: {}
}

</script>

<style lang="less" scoped>

</style>