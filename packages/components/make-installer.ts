import type { App, Plugin } from 'vue';

// const INSTALLED_KEY = Symbol('INSTALLED_KEY');

export function makeInstaller(components: Plugin[] = []) {
  const install = (app: App) => {
    components.forEach(comp => app.use(comp));
  };
  return {
    install
  };
}
