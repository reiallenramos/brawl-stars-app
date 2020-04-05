import Home from './components/Home.vue'
import Brawlers from './components/Brawlers.vue'
import Players from './components/Players.vue'
import Clans from './components/Clans.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/brawlers', component: Brawlers },
  { path: '/players', component: Players },
  { path: '/clans', component: Clans },
];

export default routes;