/* 網頁連結 頁面切換 */

// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import FrontLayout from '../views/FrontLayout.vue'
import AdminLayout from '../views/AdminLayout.vue'
import MenberLayout from '../views/MenberLayout.vue'


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL), // HTML5 History API (要寫後端路由不然重新整理會404)
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    /* 首頁(第一頁)--------------------------------------------------------------------------- */
    {
      path: '/',
      name: 'firstPage',
      component: () => import('../views/FirstPagetest.vue')
    },
    /* 前台--------------------------------------------------------------------------- */
    {
      // 前台Layout
      path: '/home',
      name: 'frontlayout',
      component: FrontLayout,
      children: [
        {
          // 首頁   最新消息基本資料等  因為直接連到about怪怪的
          path: '',
          name: 'home',
          component: () => import('../views/front/HomeView.vue')
        },
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
      ]
    },

    /* 管理者後台 --------------------------------------------------------------------------- */
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {
          path: '',
          name: 'AdminHome',
          component: () => import('../views/admin/AdminHome.vue')
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
    },
    /* 會員後台 --------------------------------------------------------------------------- */
    {
      path: '/menber',
      component: MenberLayout,
      children: [
        {
          path: '',
          name: 'lastorder',
          component: () => import('../views/menberBack/LastOrder.vue')
        },
        {
          path: '/pastorders',
          name: 'pastorders',
          component: () => import('../views/menberBack/PastOrders.vue')
        },
        {
          path: '/canceledorders',
          name: 'canceledorders',
          component: () => import('../views/menberBack/CanceledOrders.vue')
        }
      ]
    }

  ]
})

export default router
