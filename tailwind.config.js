module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'media',
	theme: {
		fontFamily: {
			display: ['Poppins', 'sans-serif'],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
