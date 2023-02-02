import type { App } from 'vue';
import * as components from '@pies-ui/components';
const install: any = function (Vue: App): void {
  if (install.installed) return;
  const _components = Object.keys(components).map(key => components[key as keyof typeof components]);
  _components.forEach((component: any) => {
    if (component.hasOwnProperty('name') || component.hasOwnProperty('__name')) {
      Vue.component(component.name || component.__name, component);
    }
  });
};
const installer = {
  install
};
export default installer;
