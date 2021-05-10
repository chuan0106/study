<template>
  <div>
    <h2>------App内容:modules 内容--------</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updateName">修改信息</button>
    <h2>{{ $store.getters.fullName }}</h2>
    <h2>{{ $store.getters.fullName2 }}</h2>
    <h2>{{ $store.getters.fullName3 }}</h2>
    <button @click="asyncUpdate">异步修改</button>
    <h2>------App内容:info对象的内容是否是响应式---------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updatainfo">修改信息</button>
    <h2>-------App内容-------</h2>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-----------App内容 getters 相关信息--------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>
    <h2>{{ $store.getters.moreAgeStu(25) }}</h2>
    <h2>-------Vuex内容-------</h2>

    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex';
import { INCREMENT } from './store/mutations-types';
export default {
  data() {
    return {
      message: '我是app组件',
    };
  },
  name: 'App',
  components: {
    HelloVuex,
  },
  // computed: {
  //   more20stu() {
  //     console.log(this.$store.state.students);
  //     return this.$store.state.students.filter((item) => item.age > 20); // 大于二十岁的学生
  //   },
  // },
  methods: {
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit('decrement');
    },
    addCount(count) {
      // payload:负载
      // 1 普通提交风格
      // this.$store.commit('incrementCount', count); // 第二个参数给 incrementCount 传的值

      // 2 特殊提交风格
      this.$store.commit({
        type: 'incrementCount',
        count: count,
      });
    },
    addStudent() {
      let stu = { id: 5, name: '丁丁', age: 38 };
      this.$store.commit('addStudent', stu);
    },
    updatainfo() {
      // this.$store.commit('updatainfo');

      // actions
      // this.$store.dispatch('aUpDataInfo', {
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('信息已经完成');
      //   },
      // }); // 派遣

      // 传递完之后 让内部告诉你一些事情
      this.$store.dispatch('aUpDataInfo', '我是携带的信息').then((err) => {
        console.log('里面完成了提交');
        console.log(err);
      });
    },
    updateName() {
      this.$store.commit('updateName', '李四');
    },
    asyncUpdate() {
      this.$store.dispatch('aUpdateName');
    },
  },
};
</script>

<style lang="less" scoped></style>
