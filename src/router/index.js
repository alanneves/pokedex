import Vue from 'vue';
import VueRouter from 'vue-router';
import { Home, PokemonView } from '@/views/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pokemon/:name',
    name: 'Pokemon',
    component: PokemonView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
