import type { NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/modules/auth/stores/authStore'
import { ERouteNames } from '@/router/ERouteNames'
import { userIdFromStorage } from '@/modules/auth/composables/userIdFromStorage'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const checkAuth = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuthStore()

  if (userIdFromStorage()) {
    onAuthStateChanged(getAuth(), (user) => {
      console.log('гетАус',getAuth())
      if (user) {
        console.log(user)
        authStore.isAuth = true
        authStore.userId = user.uid
      }
    })
    next()
    return
  }

  next({ name: ERouteNames.AUTH_LOGIN })
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: ERouteNames.MAIN,
    beforeEnter: checkAuth,
    redirect: { name: ERouteNames.INTERVIEW_LIST },
    children: [
      {
        path: 'interview/create',
        name: ERouteNames.INTERVIEW_CREATE,
        component: () => import('@/views/AddInterviewPage.vue')
      },
      {
        path: 'interview/:id',
        name: ERouteNames.INTERVIEW_ID,
        component: () => import('@/views/EditInterviewPage.vue')
      },
      {
        path: 'list',
        name: ERouteNames.INTERVIEW_LIST,
        component: () => import('@/views/PageListInterviews.vue')
      },
      {
        path: 'statistic',
        name: ERouteNames.STATISTIC,
        component: () => import('@/views/PageStatistic.vue')
      }
    ]
  },
  {
    path: '/auth',
    name: ERouteNames.AUTH,
    redirect: { name: ERouteNames.AUTH_LOGIN },
    children: [
      {
        path: 'login',
        name: ERouteNames.AUTH_LOGIN,
        component: () => import('@/views/AuthLogin.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
