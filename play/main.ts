import { createApp } from 'vue';
import App from './app.vue';
import router from './router/index';
import '@pies-ui/theme-chalk/src/index.scss';
import PiesButton from '@pies-ui/components/button';
import PiesButtonGroup from '@pies-ui/components/button-group';
import 'uno.css';
import './style/index.scss';

const app = createApp(App);
app.use(PiesButton);
app.use(PiesButtonGroup);

app.use(router).mount('#play');
