import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
Vue.config.productionTip = false
Vue.use(VueRouter)

//封装全局指令 focus
Vue.directive('focus',{
  //指令所在dom元素，被插入到页面中时触发
  inserted (el){
    el.focus()
  }
})

const router=new VueRouter(routes)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
