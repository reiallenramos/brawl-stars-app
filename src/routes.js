import Home from './components/Home.vue'
import Brawlers from './components/Brawlers.vue'
import BrawlersIndex from './components/BrawlersIndex.vue'
import Compare from './components/Compare.vue'
import Clans from './components/Clans.vue'
import BrawlerProfile from './components/BrawlerProfile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/brawlers', component: Brawlers,
    children: [
      { path: '', component: BrawlersIndex },
      {
        path: ':name',
        component: BrawlerProfile,
        name: 'brawlerProfile'
      }
    ]
  },
  { path: '/compare', component: Compare },
  { path: '/clans', component: Clans },
];

export default routes;