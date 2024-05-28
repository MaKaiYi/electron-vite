import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Layout from '../components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
    //路由初始指向
    path: '/',
    redirect: '/home'
  },
  {
    //路由初始指向
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    //路由初始指向
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/details/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
