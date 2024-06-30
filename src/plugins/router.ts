import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: {path: '/edit'},
  }, {
    path: '/home',
    component: () => import('../pages/Home.vue'),
  }, {
    path: '/middle-route',
    component: () => import('../pages/MiddleRoute.vue'),
  }, {
    path: '/edit',
    component: () => import('../pages/edit/AddSeekHelp.vue'),
  }, {
    path: '/edit/:seekHelpId',
    component: () => import('../pages/edit/ModifySeekHelp.vue'),
  }, {
    path: '/edit/:seekHelpId/help',
    component: () => import('../pages/edit/AddLendHand.vue'),
  }, {
    path: '/edit/:seekHelpId/help/:lendHandId',
    component: () => import('../pages/edit/ModifyLendHand.vue'),
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
