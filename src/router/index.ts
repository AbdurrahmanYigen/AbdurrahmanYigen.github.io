import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '@/views/AboutMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about.me',
      component: AboutMe,
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BlogView.vue'),
    },
  ],
})

export default router
