import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '@/views/AboutMe.vue'
import BlogDetailView from '@/views/BlogDetailView.vue'

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
      component: () => import('../views/BlogListView.vue'),
    },
    {
      path: '/blog/:technicalName',
      name: 'blog-detail',
      component: BlogDetailView,
      props: true,
    },
  ],
})

export default router
