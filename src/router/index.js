import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: true,
          isIframe: false,
          roles: ['admin', 'common'],
          icon: 'iconfont icon-shouye'
        }
      },
      {
        path: '/system',
        name: 'system',
        meta: {
          title: '系统设置',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'iconfont icon-xitongshezhi'
        },
        children: [
          {
            path: '/system/user',
            name: 'User',
            component: () => import('@/views/system/user/index.vue'),
            meta: {
              title: '用户列表',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: true,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-shouye'
            }
          }
        ]
      },
      {
        path: '/about',
        name: 'about',
        meta: {
          title: '关于',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'iconfont icon-xitongshezhi'
        },
        children: [
          {
            path: '/about1',
            name: 'About1',
            component: () => import('@/views/about/index.vue'),
            meta: {
              title: '关于我们',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: true,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-shouye'
            }
          }
        ]
      }
    ]
  }
]
const staticRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      isHide: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: [...staticRoutes, ...routes]
})

export default router
