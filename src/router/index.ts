import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DailyView from '../views/DailyView.vue'
import WeeklyView from '../views/WeeklyView.vue'
import MonthlyView from '../views/MonthlyView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'daily',
    component: DailyView
  },
  {
    path: '/weekly',
    name: 'weekly',
    component: WeeklyView
  },
  {
    path: '/monthly',
    name: 'monthly',
    component: MonthlyView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
