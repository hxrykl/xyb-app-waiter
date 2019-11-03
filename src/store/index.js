import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import user from './modules/user'
import login from './modules/login'
import order from './modules/order'
 // 作为全局访问
export default new Vuex.Store({
 modules:{
   user,
   login,
   order
 }
})
