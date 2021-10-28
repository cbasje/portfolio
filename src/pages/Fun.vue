<template>
    <Header>
        Welcome to my Fun Page! This is where I share challenges and other projects
    </Header>

	<kinesis-container class="kinesis-container">
		<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
			<kinesis-element
				v-for="project in projects"
				:key="project.id"
				:strength="2"
				type="depth"
				class="group project"
			>
				<ProjectItem :project="project" />
			</kinesis-element>
		</div>
	</kinesis-container>

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
})
</script>
