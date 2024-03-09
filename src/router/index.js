import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hello',
    name: 'Hello',
    component: () => import(/* webpackChunkName: "about" */ '../views/HelloView.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductListView.vue')
  },
  {
    path: '/nestedComponent',
    name: 'NestedComponent',
    component: () => import(/* webpackChunkName: "about" */ '../views/NestedComponentView.vue')
  },
  {
    path: '/providerInject',
    name: 'ProviderInject',
    component: () => import(/* webpackChunkName: "about" */ '../components/ProviderInject.vue')
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import(/* webpackChunkName: "about" */ '../components/CompositionAPI.vue')
  },
  {
    path: '/kakaoLogin',
    name: 'kakaoLogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/KakaoLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
