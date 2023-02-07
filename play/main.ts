import { createApp } from 'vue';
import App from './app.vue';
import router from './router/index';
import 'uno.css';
import './style/index.scss';
import AppMain from './layout/AppMain/index.vue';

import PiesUI from '@pies-ui/components';
const app = createApp(App);
app.use(PiesUI);

app.component('AppMain', AppMain);

// 自定义一个代码高亮指令
app.directive('highlight', {
  mounted(el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: unknown) => {
      hljs.highlightBlock(block);
    });
  }
});

app.use(router).mount('#play');
