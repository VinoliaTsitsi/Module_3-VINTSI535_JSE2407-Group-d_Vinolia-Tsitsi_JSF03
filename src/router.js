// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Layout from './components/Layout.vue';

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
  }
];

const router = createRouter({
  history: createWebHistory(''), // Use an empty string if you don't have a base URL
  routes,
});

export default router;
