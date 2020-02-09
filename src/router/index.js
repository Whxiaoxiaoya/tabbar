import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/Home.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cartgrate',
    component: () => import('../views/cartgrate/Cartgrate.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/cart/Cart.vue')
  },
  {
    path: '/my',
    component: () => import('../views/my/My.vue')
  }
];
const router = new VueRouter({
  routes
});

export default router;
