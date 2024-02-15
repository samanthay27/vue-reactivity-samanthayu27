import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from "../views/IndexPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPage
    },
    {
      path: '/wish',
      name: 'wish',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/wishingpage.vue')
    }
  ]
})

export default router