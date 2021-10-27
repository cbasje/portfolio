<template>
    <Header>
        Welcome to my Fun Page! This is where I share challenges and other projects
    </Header>

	<kinesis-container class="kinesis-container">
		<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
			<p>Hey</p>
		</div>
	</kinesis-container>

	<Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

export default defineComponent({
	components: { Footer, Header },
})
</script>
