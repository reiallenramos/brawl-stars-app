import Vue from 'vue'
import VueRouter from 'vue-router'
import Brawlers from './components/Brawlers.vue'
import BrawlersIndex from './components/BrawlersIndex.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/brawlers'},
    { path: '/brawlers', component: Brawlers,
      children: [
        {
          path: '',
          component: BrawlersIndex,
          name: 'brawlersIndex'
        },
        {
          path: ':name',
          component: () => import( /* webpackChunkName: "brawlerProfile" */ "./components/BrawlerProfile" ),
          name: 'brawlerProfile'
        }
      ]
    },
    {
      path: '/compare',
      component: () => import( /* webpackChunkName: "compareHome" */ "./components/Compare" ),
      name: 'compareHome'
    },
    {
      path: '/clans',
      component: () => import( /* webpackChunkName: "clansHome" */ "./components/Clans" ),
      name: 'clansHome'
    },
  ]
})