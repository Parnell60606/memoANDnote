/* 網頁連結 頁面切換 */

// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import FrontLayout from '../views/FrontLayout.vue'
import AdminLayout from '../views/AdminLayout.vue'
import MenberLayout from '../views/MenberLayout.vue'
import { useUserStore } from '@/stores/user'


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
          component: () => import('../views/front/HomeView.vue'),
          meta: {
            // 還沒訂商店名稱
            title: '山上的咖啡',
            login: false,
            admin: false
          }
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/front/AboutView.vue'),
          meta: {
            title: '關於我們',
            login: false,
            admin: false
          }
        },
        {
          path: '/menu',
          name: 'menu',
          component: () => import('../views/front/MenuView.vue'),
          meta: {
            title: '精緻菜單',
            login: false,
            admin: false
          }
        },
        {
          path: '/location',
          name: 'location',
          component: () => import('../views/front/LocationView.vue'),
          meta: {
            title: '位置',
            login: false,
            admin: false
          }
        },
        {
          path: '/booking',
          name: 'booking',
          component: () => import('../views/front/BookingView.vue'),
          meta: {
            title: '線上訂位',
            login: false,
            admin: false
          }
        },
        {
          path: '/contactus',
          name: 'contactus',
          component: () => import('../views/front/ContactUsView.vue'),
          meta: {
            title: '聯絡我們',
            login: false,
            admin: false
          }
        },
        {
          //  刪 login功能放到 register 了
          path: '/login',
          name: 'login',
          component: () => import('../views/front/LoginView.vue'),
        },
        {
          // 註冊或登入
          path: '/register',
          name: 'register',
          component: () => import('../views/front/RegisterView.vue'),
          meta: {
            title: '關於我們',
            login: false,
            admin: false
          }
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
          component: () => import('../views/admin/AdminHome.vue'),
          meta: {
            title: '管理者後台_首頁',
            login: true,
            admin: true
          }
        },
        {
          path: '/todaysorder',
          name: 'todaysorder',
          component: () => import('../views/admin/TodaysOrder.vue'),
          meta: {
            title: '今日訂單',
            login: true,
            admin: true
          }
        },
        {
          path: '/ordersview',
          name: 'ordersview',
          component: () => import('../views/admin/OrdersView.vue'),
          meta: {
            title: '訂單',
            login: true,
            admin: true
          }
        },
        {
          path: '/backgrounddata',
          name: 'backgrounddata',
          component: () => import('../views/admin/BackgroundData.vue'),
          meta: {
            title: '統計數字',
            login: true,
            admin: true
          }
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
          component: () => import('../views/menberBack/LastOrder.vue'),
          meta: {
            title: '目前訂單',
            login: true,
            admin: false
          }
        },
        {
          path: '/pastorders',
          name: 'pastorders',
          component: () => import('../views/menberBack/PastOrders.vue'),
          meta: {
            title: '過去的訂單',
            login: true,
            admin: false
          }
        },
        {
          path: '/canceledorders',
          name: 'canceledorders',
          component: () => import('../views/menberBack/CanceledOrders.vue'),
          meta: {
            title: '取消的訂單',
            login: true,
            admin: false
          }
        },
        {
          path: '/myinfo',
          name: 'myinfo',
          component: () => import('../views/menberBack/MyInformation.vue'),
          meta: {
            title: '取消的訂單',
            login: true,
            admin: false
          }
        }
      ]
    }

  ]
})

// 路由守衛
// router.afterEach((to, from) => {
//   document.title = to.meta.title
// })

// router.beforeEach((to, from, next) => {
//   const user = useUserStore()
//   if (user.isLogin && (to.path === '/register' || to.path === '/login')) {
//     next('/')
//   } else if (to.meta.login && !user.isLogin) {
//     next('/login')
//   } else if (to.meta.admin && !user.isAdmin) {
//     next('/')
//   } else {
//     next()
//   }
// })


export default router
