import Vue from 'vue'
import Router from 'vue-router'
import HelloMM from '@/components/HelloWorld'
import Mini from '@/components/mini'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello+mini',
      component: Mini
    }
  ],
  // routes: [
  //   {
  //     path: '/',
  //     name: 'Hello',
  //     component:HelloMM,
  //   }
  // ]
})
