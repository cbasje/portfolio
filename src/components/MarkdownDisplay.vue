<template>
	<article
		class="
			prose prose-sm
			sm:prose
			lg:prose-lg
			xl:prose-xl
			dark:text-white
            mx-auto
		"
		v-html="compiledMarkdown"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import sanitizeHtml from 'sanitize-html';
import marked from 'marked';

export default defineComponent({
	props: {
		markdown: {
			type: String,
			required: true,
		},
	},
	computed: {
		
		compiledMarkdown() {
			const defaultOptions = {
				allowedTags: ['a'],
				allowedAttributes: {
					a: ['href'],
				},
			};

			const html = marked(this.markdown);
			return sanitizeHtml(html, defaultOptions);
		},
	},
});
</script>

<style>
.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
	@apply dark:text-gray-100;
}
.prose p,
.prose li {
	@apply dark:text-gray-300;
}
.prose a {
    @apply text-amber-600 dark:text-amber-500
}
</style>
