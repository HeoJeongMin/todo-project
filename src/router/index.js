import Vue from 'vue'
import VueRouter from 'vue-router'

// 각 페이지를 불러온다.
import views from '../views/index.js'

Vue.use(VueRouter)

/**
 * 각 페이지를 삽입하여 로드한다.
 * 각 페이지를 로드하면 return 되는 값은 component: TodoComponent 와 동일한 형태가 된다.
 *
 * @param view
 * @returns {function(): Promise<*>}
 */
function loadPageComponent (view) {
  return () => import(`../views/pages/${view}.vue`)
}

/**
 * router를 동적으로 생성한다.
 *
 * @param path
 * @returns {{path: string, component: (function(): Promise<*>)}}
 */
function generateRoute (path) {
  const name = path.slice(0, path.length - 4)

  return {
    name: name.toLowerCase(),
    path: `/${name}`, // ES6 문법 (템플릿 리터럴)
    component: () => import(`../views/pages/${path}`)
  }
}

// root 페이지를 지정
// 동적으로 생성되는 라우터는 이 routes에 추가된다.
// e.g) { path: '/Todo', component: Todo }
const routes = [
  { name: 'rootTodo', path: '/', component: loadPageComponent('Todo') }
]

views.forEach(view => routes.push(generateRoute(view)))

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
