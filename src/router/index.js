import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorlds from '@/components/HelloWorlds'
import blog from '@/components/blog'
import contact from '@/components/contact'
import career from '@/components/career'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld 
    },
    {
      path: '/blog/:teamId',
      name: 'blog',
      component: blog
    },
    {
      path: '/user',
      name: 'HelloWorlds',
      component: HelloWorlds
    },
    {
      path:'/contact',
      name: 'contact',
      component:contact
    },
    {
      path:'/about',
      name: 'about',
      component:about
    },
    {
      path:'/career',
      name: 'career',
      component:career
    }
  ]
})
