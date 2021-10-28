<template>
	<header
		class="
			w-screen
			fixed
			z-50
			p-5
			bg-gradient-to-b
			from-gray-100
			dark:from-gray-900
		"
	>
		<div class="flex">
			<nav class="flex-1 flex justify-start">
				<router-link
					v-for="tab in tabs"
					:key="tab.id"
					class="
						text-black
						dark:text-white
						active:font-bold
						uppercase
						font-display
						pr-3
					"
					:to="tab.link"
					active-class="font-bold"
				>
					{{ tab.title }}
				</router-link>
			</nav>

			<router-link
				class="text-black dark:text-white font-display flex-none"
				to="/"
			>
				<p>benjamiin.</p>
			</router-link>

			<div class="flex-1 flex justify-end">
				<Sun class="text-black dark:text-white w-6 h-6" />
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Sun from '../components/icons/sun.vue';

export default defineComponent({
	components: { Sun },
	data() {
		return {
			tabs: [
				{ id: 1, title: 'Work', link: '/work' },
				{ id: 2, title: 'Fun', link: '/fun' },
				{ id: 3, title: 'Contact', link: '/contact' },
			],
		};
	},
});
</script>
