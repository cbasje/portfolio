<template>
	<div class="bg-gray-100 dark:bg-gray-900">
		<navigation />

		<div class="container mx-auto pt-16">
			<router-view />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Navigation from './components/Navigation.vue';

export default defineComponent({
	components: { Navigation },
});
</script>
