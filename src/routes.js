import Brawlers from './components/Brawlers.vue'
import BrawlersIndex from './components/BrawlersIndex.vue'
import Compare from './components/Compare.vue'
import Clans from './components/Clans.vue'
import BrawlerProfile from './components/BrawlerProfile.vue'

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
        component: BrawlerProfile,
        name: 'brawlerProfile'
      }
    ]
  },
  {
    path: '/compare',
    component: Compare,
    name: 'compareHome'
  },
  {
    path: '/clans',
    component: Clans,
    name: 'clansHome'
  },
];

export default routes;