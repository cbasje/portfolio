import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Category from '@/pages/Category.vue';
import CategoryItem from '@/pages/CategoryItem.vue';
import Contact from '@/pages/Contact.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: 'work',
	},
	{
		path: '/:categoryId',
		component: Category
	},
	{
		path: '/:categoryId/:projectId',
		component: CategoryItem
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
