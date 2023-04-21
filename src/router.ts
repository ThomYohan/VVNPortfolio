// import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

// const routes = [
//     { path: '/', component: Home },
//     // { path: '/about', component: About },
//   ]
  
//   // 3. Create the router instance and pass the `routes` option
//   // You can pass in additional options here, but let's
//   // keep it simple for now.
//   const router = VueRouter.createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
//   })
  
//   // 5. Create and mount the root instance.
//   const app = Vue.createApp({})
//   // Make sure to _use_ the router instance to make the
//   // whole app router-aware.
//   app.use(router)
  
//   app.mount('#app')

//   export default router

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