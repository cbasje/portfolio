import { createApp } from 'vue';
import App from './App.vue';

import './index.css';
import VueKinesis from 'vue-kinesis';
import VueSupabase from 'vue-supabase';

const app = createApp(App);

app.use(VueSupabase, {
	supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
	supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
	supabaseOptions: {},
});
app.use(VueKinesis);

app.mount('#app');
