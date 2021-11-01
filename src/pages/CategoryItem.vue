<template>
	<Header class="text-center">
		{{ project ? project.title : 'Title' }}
	</Header>

	<div v-if="project">
		<p>{{ project.text ? project.text : '' }}</p>
		<img :src="project.url" :alt="project.title" class="w-full" />
	</div>

	<Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { mapActions, mapGetters, mapMutations } from 'vuex';

import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

export default defineComponent({
	components: { Footer, Header },
	setup() {
		const route = useRoute();
		const { projectId } = route.params;

		return {
			projectId,
		};
	},
	async mounted() {
		await this.selectProject(this.projectId);
		await this.loadSelectedProject();
	},
	methods: {
		...mapMutations('projects', {
			selectProject: 'selectProject',
		}),
		...mapActions('projects', {
			loadSelectedProject: 'loadSelectedProject',
		}),
	},
	computed: {
		headerText() {
			switch (this.$route.params.item) {
				case 'fun':
					return 'Welcome to my Fun Page! This is where I share challenges and other projects';
				default:
					return "Hey, I'm Sebastiaan Benjamins, a designer from The Netherlands";
			}
		},
		...mapGetters('projects', {
			project: 'getSelectedProject',
		}),
	},
});
</script>
