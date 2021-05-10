<template>
  <div>
    <h2>我是profile组件</h2>
    {{ $route.query.name }}
    {{ $route.query.age }}
    {{ $route.query.height }}

    <!-- {{ $route.query }} -->
  </div>
</template>

<script>
export default {
  created() {
    console.log('当被创建组件的时候');
  },
};
</script>
