import Vue from 'vue'
import VueRouter from 'vue-router'
//管理页面
import Manager from '../pages/manager/Layout'
import Home from '../pages/manager/Home'
import Order from '../pages/manager/Order'
import User from '../pages/manager/User'
import MyIncom from '../pages/manager/MyIncom'
// 登录页面
import Login from '../pages/Login'
import { getToken } from '../utils/auth'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/manager/home"
  },
  {
    path: '/manager',
    name: 'manager',
    component: Manager,
    
    children:[{
      path: 'home',
      component: Home,
    },
    {
      path: 'order',
      component: Order,
    },
    {
      path: 'user',
      component: User,
    },
    {
      path:'myincom',
      component:MyIncom
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
