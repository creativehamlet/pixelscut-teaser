import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';
import NoLayout from '../layout/NoLayout.vue';

Vue.use(Router)

const router=  new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "default" */ '../views/Home.vue'),
      meta: { layout: NoLayout }
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      meta: { layout: NoLayout }
    }
  ],
});

router.beforeEach((to, from, next) => {
  if(to.meta.layout !== from.meta.layout) {
    store.dispatch('setLayout', to.meta.layout);
  }
  next();
});

export default router
