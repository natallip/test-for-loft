import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Basket from '../pages/Basket.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Главная', component: Home},
    {path: '/basket', name: 'Корзина', component: Basket}
  ]
})
