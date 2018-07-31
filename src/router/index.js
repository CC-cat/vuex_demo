import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import demo from '@/components/demo.vue'
=======
import HelloWorld from '@/components/HelloWorld'
>>>>>>> dev

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'demo',
      component: demo
=======
      name: 'HelloWorld',
      component: HelloWorld
>>>>>>> dev
    }
  ]
})
