import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RestrauntView from '@/views/RestrauntView.vue'
import SalesView from '@/views/SalesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/restraunt/:name',
    name: 'restraunt',
    component: RestrauntView
  },
  {
    path: '/sales',
    name: 'sales',
    component: SalesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
