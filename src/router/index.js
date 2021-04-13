import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoComponent from '../views/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/todo',
    name: 'Todo',
    component: TodoComponent
  },
  {
    path: '/list',
    name: 'List',
    component: TodoComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach(function (to, from, next) {
//   console.log(to)
//   console.log(from)
//   next(to.path)
// })

export default router
