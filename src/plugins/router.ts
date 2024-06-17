import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: {path: '/login'},
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue'),
  },
  {
    path: '/register',
    component: () => import('../pages/Register.vue'),
  }, {
    path: '/find-password',
    component: () => import('../pages/FindPassword.vue'),
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes//问题不大
})
