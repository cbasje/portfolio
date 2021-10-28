<template>
	<div
		class="
			w-full
			h-full
			transition
			duration-500
			ease-in-out
			transform
			group-hover:scale-105
			motion-reduce:transform-none
			bg-gray-100
			dark:bg-gray-900
		"
	>
		<img
			alt="Vue logo"
			:src="project.url"
			class="
				w-full
				h-full
				object-cover
				transition
				duration-500
				ease-in-out
				group-hover:opacity-20
			"
		/>
	</div>
	<div
		class="
			flex
			justify-center
			items-center
			w-full
			h-full
			absolute
			top-0
			p-3
			opacity-0
			group-hover:opacity-100
			transition
			duration-500
			ease-in-out
		"
	>
		<p class="text-gray-900 dark:text-gray-100">
			{{ project.title }}
		</p>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { Project } from '@/types/project';

export default defineComponent({
	props: {
		project: {
			type: Object as PropType<Project>,
			default: {},
		},
	},
});
</script>