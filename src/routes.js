import Home from './components/Home.vue'
import Brawlers from './components/Brawlers.vue'
import BrawlersIndex from './components/BrawlersIndex.vue'
import Players from './components/Players.vue'
import Clans from './components/Clans.vue'
import BrawlerProfile from './components/BrawlerProfile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/brawlers', component: Brawlers,
    children: [
      { path: '', component: BrawlersIndex },
      {
        path: ':id',
        component: BrawlerProfile,
        name: 'brawlerProfile',
        props: true
      }
    ]
  },
  { path: '/players', component: Players },
  { path: '/clans', component: Clans },
];

export default routes;