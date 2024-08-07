import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: {path: '/login'},
  }, {
    path: '/home',
    component: () => import('../pages/Home.vue'),
  }, {
    path: '/post',
    component: () => import('../pages/Post.vue'),
  }, {
    path: '/post:seekHelpId',
    component: () => import('../pages/Post.vue'),
  }, {
    path: '/post:seekHelpId/help',
    component: () => import('../pages/Post.vue'),
  }, {
    path: '/post:seekHelpId/help/lendHandId',
    component: () => import('../pages/Post.vue'),
  }, {
    path: '/middle-route',
    component: () => import('../pages/MiddleRoute.vue'),
  }, {
    path: '/error',
    component: () => import('../pages/Error.vue'),
  }, {
    path: '/edit',
    component: () => import('../pages/Edit.vue'),
  }, {
    path: '/edit/:seekHelpId',
    component: () => import('../pages/Edit.vue'),
  }, {
    path: '/edit/:seekHelpId/help',
    component: () => import('../pages/Edit.vue'),
  }, {
    path: '/edit/:seekHelpId/help/:lendHandId',
    component: () => import('../pages/Edit.vue'),
  }, {
    path: '/login',
    component: () => import('../pages/Login.vue'),
  }, {
    path: '/register',
    component: () => import('../pages/Register.vue'),
  }, {
    path: '/find-password',
    component: () => import('../pages/FindPassword.vue'),
  }, {
    path: '/:pathMatch(.*)*',
    component: () => import('../pages/MiddleRoute.vue'),
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes//问题不大
})
