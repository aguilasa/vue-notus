import { createRouter, createWebHistory } from 'vue-router'

// layouts

import Admin from '@/layouts/Admin.vue'
import Auth from '@/layouts/Auth.vue'

// views for Admin layout

import Dashboard from '@/views/admin/Dashboard.vue'
import Settings from '@/views/admin/Settings.vue'
import Tables from '@/views/admin/Tables.vue'
import Maps from '@/views/admin/Maps.vue'

// views for Auth layout

import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'

// views without layouts

import Landing from '@/views/Landing.vue'
import Profile from '@/views/Profile.vue'
import Index from '@/views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/admin',
      redirect: '/admin/dashboard',
      component: Admin,
      children: [
        {
          path: '/admin/dashboard',
          component: Dashboard,
        },
        {
          path: '/admin/settings',
          component: Settings,
        },
        {
          path: '/admin/tables',
          component: Tables,
        },
        {
          path: '/admin/maps',
          component: Maps,
        },
      ],
    },
    {
      path: '/auth',
      redirect: '/auth/login',
      component: Auth,
      children: [
        {
          path: '/auth/login',
          component: Login,
        },
        {
          path: '/auth/register',
          component: Register,
        },
      ],
    },
    {
      path: '/landing',
      component: Landing,
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/',
      component: Index,
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
