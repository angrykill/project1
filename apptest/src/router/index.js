import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Fine from '@/components/Fine'
import More from '@/components/More'
import Mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/fine',
      name: 'Fine',
      component: Fine
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
