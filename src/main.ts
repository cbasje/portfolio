import { createApp } from 'vue';
import App from './App.vue';

import './index.css';
import VueKinesis from 'vue-kinesis';

import router from './router';

const app = createApp(App).use(VueKinesis).use(router);

app.mount('#app');
