<template>
	<Header />

	<kinesis-container class="kinesis-container">
		<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
			<kinesis-element
				v-for="project in projects"
				:key="project.id"
				:strength="3"
				type="depth"
				class="group w-full"
			>
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
			</kinesis-element>
		</div>
	</kinesis-container>

	<Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { supabase } from '../supabase';

import { Project } from '../types/project';
import Sun from '../components/icons/sun.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

export default defineComponent({
	components: { Sun, Footer, Header },
	data() {
		return {
			projects: [] as Project[],
			imageUrl: '',
			positions: [
				{ top: 130, right: 250, circle: 'yellow' },
				{ top: 270, right: -330, circle: 'purple' },
			],
		};
	},
	mounted() {
		this.loadProjects();
	},
	methods: {
		async loadProjects() {
			const { body, error } = await supabase
				.from<Project>('projects')
				.select('*');

			if (body == null) return;

			this.projects = body;
			for (let n = 0; n < body.length; n++) {
				const project = body[n];

				const url = await this.loadImage(project.image);
				console.log(url);
				this.projects[n].url = url;
			}
		},
		async loadImage(url: string): Promise<string> {
			const { data, error } = await supabase.storage
				.from('images')
				.getPublicUrl(url);

			this.imageUrl = data ? data?.publicURL : '';
			console.log(data, this.imageUrl);
			return data ? data?.publicURL : '';
		},
	},
});
</script>

<style>
.kinesis-container {
	@apply relative flex flex-col items-center min-h-screen pb-3;
}

.project {
	@apply w-full;
}
</style>
