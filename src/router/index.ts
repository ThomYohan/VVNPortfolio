import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/views/Home.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/projects',
      component: Projects,
    },
    {
      path: '/about',
      component: About
      // component: () => import('@/views/About.vue'),
    },
    {
      path: '/resume',
      component: About
      // component: () => import('@/views/resume.vue'),
    },
    // {
    //   path: '/contact',
    //   component: () => import('@/views/Contact.vue'),
    // },
  ],
})