import Vue from 'vue'
import VueRouter from 'vue-router'
//import AddTodo from '../views/AddTodo.vue'
import List from '../views/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('../views/Todo.vue'),
    chidren: [
      { path: 'list', component: List }
    ]
    //component: AddTodo
  },
  // {
  //   path: '/listTodo',
  //   name: 'ListTodo',
  //   //component: About
  //   component: () => import('../views/ListTodo.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//router.beforeEach(function (to, from, next) {
//  next()
//})

export default router
