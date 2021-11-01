import { createApp } from 'vue';
import App from './App.vue';

import './index.css';
import VueKinesis from 'vue-kinesis';

import router from './router';
import store from './store';

const app = createApp(App)
    .use(VueKinesis)
    .use(router)
    .use(store);

app.mount('#app');
