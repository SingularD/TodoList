import Vue from 'vue'
import Router from 'vue-router'
import todoInput from '@/components/todoInput'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todoInput',
      component: todoInput
    }
  ]
})
