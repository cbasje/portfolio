<template>
	<nav
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
		<div class="flex justify-between">
			<div>
				<router-link
					v-for="tab in tabs"
                    :key="tab.id"
					class="text-black dark:text-white"
					:to="tab.link"
				>
					{{ tab.title }}
				</router-link>
			</div>
			<router-link class="text-black dark:text-white" to="/">
				<p>benjamiin.</p>
			</router-link>
			<Sun class="text-black dark:text-white w-6 h-6" />
		</div>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return {
			tabs: [
				{ id: 1, title: 'Fun', link: '/fun' },
				{ id: 2, title: 'Work', link: '/work' },
			],
		};
	},
});
</script>
