import {createRouter, createWebHistory} from 'vue-router'
import {createApp} from "vue";

const routes = [
  {
    path: '/',
    redirect: {path: '/middle-route'},
  },
  {
    path: '/home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/middle-route',
    component: () => import('../pages/MiddleRoute.vue'),
  },
  {
    path:'/edit',
    component: () => import('../pages/Edit.vue'),
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue'),
  },
  {
    path: '/register',
    component: () => import('../pages/Register.vue'),
  },
  {
    path: '/find-password',
    component: () => import('../pages/FindPassword.vue'),
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes//问题不大
})
