import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/Login.vue'),
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
