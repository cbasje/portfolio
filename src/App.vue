<script setup lang="ts">
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { useSupabase } from 'vue-supabase';
import { Project } from './types/project';

const supabase = useSupabase();

let projects = [];
let imageUrl = ref('');

loadProjects();

async function loadProjects() {
	const { body, error } = await supabase
		.from<Project>('projects')
		.select('*');

	if (body == null) return;

	projects = body;
	for (let n = 0; n < body.length; n++) {
    const project = body[n];

		const url = await loadImage(project.image);
    console.log(url);
		projects[n].url = url;
	}
}
async function loadImage(url: string): Promise<string> {
	const { data, error } = await supabase.storage
		.from('images')
		.getPublicUrl(url);

	// https://mbuotpbzdawadndksqaw.supabase.in/storage/v1/object/public/images/yellow.png
	// https://mbuotpbzdawadndksqaw.supabase.in/storage/v1/object/public/images/yellow.png
	// https://mbuotpbzdawadndksqaw.supabase.co/storage/v1/object/images/yellow.png
	// imageUrl = URL.createObjectURL(data);
	imageUrl.value = data ? data?.publicURL : '';
	console.log(data, imageUrl);
	return data ? data?.publicURL : '';
}

// return {
// 	events: body,
// 	image: imageUrl,
// };
</script>

<template>
	<div>
		<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
		<kinesis-container v-for="project in projects" :key="project.id">
			<kinesis-element :strength="10" type="depth">
				<img alt="Vue logo" :src="project.url" />
			</kinesis-element>
		</kinesis-container>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
