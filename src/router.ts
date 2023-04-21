import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/views/Home.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About
      // component: () => import('@/views/About.vue'),
    },
    // {
    //   path: '/contact',
    //   component: () => import('@/views/Contact.vue'),
    // },
  ],
})