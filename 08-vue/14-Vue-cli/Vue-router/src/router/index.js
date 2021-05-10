// 配置路由相关的信息
// 导入
import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载的写法
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const Profile = () => import('../components/Profile.vue')
const HomeNews = () => import('../components/HomeNews.vue')

// 1.通过 Vue.use(插件),安装插件
Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/home'  // 重定向
  },
  {
    path: '/home',
    name: 'Home',
    meta: {  // 元数据
      title: '首页'
    },
    component: Home,
    children: [
      {
        path: '/home',
        redirect: '/home/news',
      },


      {
        path: 'news',   // 子路由不需要加 /news
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    // 路由独享的守卫
    beforeEnter: (to, from, next) => {
      // console.log('About beforeEnter');
      next()
    },
    meta: {  // 元数据
      title: '关羽'
    },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/user/:userId',  // 动态路由
    component: User,
    meta: {  // 元数据
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {  // 元数据
      title: '档案'
    }
  }
]
// 全局前置守卫（钩子）
const router = new VueRouter({
  // 配置路径和组件之间的关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'  // class 属性

})
// 前置守卫(guard)
router.beforeEach((to, from, next) => {
  // 从from 挑战到to
  // 从一个路由 跳到另一个路由
  // console.log(to);
  // console.log('+++++');
  document.title = to.matched[0].meta.title
  next()  //一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
})
// 后置钩子(hook)
router.afterEach((to, from) => {
  // console.log('---');

})
// 3 将router 对象窜入 到Vue实例对象中

export default router