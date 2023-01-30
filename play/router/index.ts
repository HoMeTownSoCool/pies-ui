import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../view/home/index.vue';
import Guide from '../view/guide/index.vue';
import Components from '../view/components/index.vue';
const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  { path: '/guide', name: 'guide', component: Guide },
  {
    path: '/components',
    name: 'components',
    component: Components
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
