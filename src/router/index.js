import { createRouter, createWebHashHistory } from 'vue-router';
import HomeWrapper from '../views/HomeWrapper.vue';
import LoginWrapper from '../views/LoginWrapper.vue';
import ContainingDomHeight from '../views/ContainingDomHeight.vue';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeWrapper,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginWrapper,
    },
    {
      path: '/containing-dom-height',
      name: 'ContainingDomHeight',
      component: ContainingDomHeight,
    },
  ],
});

export default router;
