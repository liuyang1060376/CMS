import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login/Login'
import Home from '@/pages/Home/Home'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/index', component: Home }
]

const router = new VueRouter({
  routes
})
// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
  // to表示将要访问的路径
  // from表示从哪个路径跳转而来
  // next是一个函数,表示放行
  // next() 放行 next("/login") 强制跳转到登录页面
  if (to.path === '/login') {
    return next()
  } else {
    const tokenStr = window.sessionStorage.getItem('user')
    if (tokenStr) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
