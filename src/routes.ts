import { RouteRecordRaw } from 'vue-router';
import PageA from './PageA.vue';
import PageB from './PageB.vue';

export const routes: RouteRecordRaw[] = [
  // { path: '/', component: PageA },
  { path: '/a/A', component: PageA },
  { path: '/a/:userId', component: PageA },
  { path: '/a/:age(\\d+)', component: PageA },
  { path: '/b', component: PageB },
  { path: '/:notfound(.*)', component: PageB },
];
