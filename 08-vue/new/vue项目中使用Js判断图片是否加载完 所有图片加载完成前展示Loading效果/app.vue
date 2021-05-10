<template>
  <div></div>
</template>

<script>
import { loadImgEnd } from './utils';
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    //选择皮肤的事件
    clickHandle(id) {
      let imgArr = []; //当前皮肤中所有的图片路径

      loadImgEnd(imgArr, () => {
        this.isLoading = false;
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
