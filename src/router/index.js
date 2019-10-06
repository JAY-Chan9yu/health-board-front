import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import TodoPage from '@/components/TodoPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/todos',
      name: 'TodoPage',
      component: TodoPage
    }
  ]
})
