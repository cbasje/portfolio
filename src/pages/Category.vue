<template>
	<Header>
		{{ headerText }}
	</Header>

	<div class="kinesis-container">
		<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
			<template v-for="project in projects" :key="project.id">
				<router-link :to="`/${$route.params.category}/${project.id}`">
					<kinesis-container class="z-0 hover:z-40">
						<kinesis-element
							:strength="3"
							type="depth"
							class="group project"
						>
							<ProjectItem :project="project" />
						</kinesis-element>
					</kinesis-container>
				</router-link>
			</template>
		</div>
	</div>

	<Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { supabase } from '../supabase';

import { Project } from '../types/project';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import ProjectItem from '@/components/ProjectItem.vue';

export default defineComponent({
	components: { Footer, Header, ProjectItem },
	data() {
		return {
			projects: [] as Project[],
			imageUrl: '',
		};
	},
	mounted() {
		console.log(this.$route.params.category);
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
				this.projects[n].url = url;
			}
		},
		async loadImage(url: string): Promise<string> {
			const { data, error } = await supabase.storage
				.from('images')
				.getPublicUrl(url);

			this.imageUrl = data ? data?.publicURL : '';
			return data ? data?.publicURL : '';
		},
	},
	computed: {
		headerText() {
			switch (this.$route.params.category) {
				case 'fun':
					return 'Welcome to my Fun Page! This is where I share challenges and other projects';
				default:
					return "Hey, I'm Sebastiaan Benjamins, a designer from The Netherlands";
			}
		},
	},
});
</script>

<style>
.kinesis-container {
	@apply relative flex flex-col items-center min-h-screen pb-3;
}

.project {
	@apply w-full aspect-w-3 aspect-h-4;
}
</style>
