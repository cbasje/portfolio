<template>
	<Header>
		{{ project.title }}
	</Header>

	<div class="container mx-auto px-2"></div>

    <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Project } from '@/types/project';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

export default defineComponent({
	components: { Footer, Header },
	data() {
		return {
			project: {} as Project
		}
	},
	mounted() {
		console.log(this.$route.params.category);
		// this.loadProjects();
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
	},
});
</script>
