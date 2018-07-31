import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
=======
import demo from '@/components/demo.vue'
>>>>>>> 60e3b0e6976b5016601e4e028a98cf1db1b1802d

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'HelloWorld',
      component: HelloWorld
=======
      name: 'demo',
      component: demo
>>>>>>> 60e3b0e6976b5016601e4e028a98cf1db1b1802d
    }
  ]
})
