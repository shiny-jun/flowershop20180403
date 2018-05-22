import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/page/main'
import allList from '@/components/page/allList'
import floMean from '@/components/page/floMean'
import Cart from '@/components/page/Cart'
import My from '@/components/page/My'
import login from '@/components/page/login'
import register from '@/components/page/register'
import goods from '@/components/page/goods'
import order from '@/components/page/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/allList',
      name: 'allList',
      component: allList
    },
    {
      path: '/flowerMean',
      name: 'flowerMean',
      component: floMean
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/goods/:goodsListId',
      name: 'goods',
      component: goods
    },
    {
      path: '/order/:goodsListId',
      name: 'order',
      component: order
    }
  ]
})
