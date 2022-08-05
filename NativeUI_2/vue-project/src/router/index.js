import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    /* 前台 --------------------------------------------------------------------------- */
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/front/AboutView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/front/MenuView.vue')
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('../views/front/LocationView.vue')
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('../views/front/BookingView.vue')
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: () => import('../views/front/ContactUsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/front/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/front/RegisterView.vue')
    },
    /* 管理者後台--------------------------------------------------------------------------- */
    {
      path: '/adminlayout',
      name: 'adminlayout',
      component: () => import('../views/AdminLayout.vue')
    },
    {
      path: '/todaysorder',
      name: 'todaysorder',
      component: () => import('../views/admin/TodaysOrder.vue')
    },
    {
      path: '/ordersview',
      name: 'ordersview',
      component: () => import('../views/admin/OrdersView.vue')
    },
    {
      path: '/backgrounddata',
      name: 'backgrounddata',
      component: () => import('../views/admin/BackgroundData.vue')
    }
  ]
})

export default router
