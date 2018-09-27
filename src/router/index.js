import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers = [
  {
    path: '/',
    name: 'login',
    component: resolve => require(['views/login'], resolve)
  },
  {
    path: '/frame/index',
    name: 'index',
    component: resolve => require(['views/index'], resolve),
    children: [
      {
        path: '/masterData/patient',
        component: resolve => require(['views/login'], resolve)
      }
    ]
  }
]

export default new Router({
  routes: routers
})
