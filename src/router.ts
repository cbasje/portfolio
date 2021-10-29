import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Work from './pages/Work.vue';
import Contact from './pages/Contact.vue';
import Fun from './pages/Fun.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: 'work',
	},
	{
		path: '/fun',
		component: Fun,
	},
	{
		path: '/work',
		component: Work,
	},
	{
		path: '/contact',
		component: Contact,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	// history: createWebHistory(),
	routes,
});

export default router;
