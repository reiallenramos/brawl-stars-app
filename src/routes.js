import Brawlers from './components/Brawlers.vue'
import BrawlersIndex from './components/BrawlersIndex.vue'

const routes = [
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
];

export default routes;