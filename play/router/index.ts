import type { RouteRecordRaw, RouteComponent } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../view/home/index.vue';
import Guide from '../view/guide/index.vue';
import Components from '../view/components/index.vue';

const guideRoutes = [...buildRoutes((import.meta as Record<string, any>).glob('../view/guide/*'))];
const componentsRoutes = [...buildRoutes((import.meta as Record<string, any>).glob('../view/components/*'))];
const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/guide',
    name: 'guide',
    component: Guide,
    redirect: '/guide/piesui',
    children: guideRoutes
  },
  {
    path: '/components',
    name: 'components',
    component: Components,
    children: componentsRoutes
  },
  {
    path: '/fun',
    name: 'fun',
    component: () => import('../view/fun/index.vue')
  }
];

function buildRoutes(modules) {
  const routes: RouteRecordRaw[] = [];
  for (const [path, module] of Object.entries(modules)) {
    if (!path.includes('index')) {
      const tempPath = path.replace('../view', '').replace('.vue', '');
      routes.push({
        path: tempPath,
        name: tempPath.split('/').filter(Boolean).join('-'),
        component: module as RouteComponent
      });
    }
  }
  return routes;
}
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
