import { createApp } from 'vue';
import App from './app.vue';
import '@pies-ui/theme-chalk/src/index.scss';
import PiesButton from '@pies-ui/components/button';
import PiesButtonGroup from '@pies-ui/components/button-group';

const app = createApp(App);
app.use(PiesButton);
app.use(PiesButtonGroup);

app.mount('#play');
