import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import privateHome from '@/components/private/home'
import writesay from '@/components/private/saysay/writeSay'
import petimg from '@/components/private/petimg'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/private/home',
      name: 'privateHome',
      component: privateHome
    },
    {
      path: '/private/writesay',
      name: 'writesay',
      component: writesay
    },
    {
      path: '/private/petimg',
      name: 'petimg',
      component: petimg
    }

  ]
})
