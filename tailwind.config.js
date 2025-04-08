/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'icon': '#fff',
				'white-03': 'rgba(255,255,255,0.3)',
			},
			textColor: {
				'normal': '#010514',
				'light': '#fff',
				'highlight-1': '#00CBB8',
				'highlight-2': '#F48C06',
				'title': '#2F327D',
				'paragraph': '#696984',
			},
			backgroundColor: {
				'normal': '#fff',
				'highlight-1': '#49BBBD',
				'highlight-2': '#252641',
				'highlight-3': '#29B9E7',
				'highlight-4': '#33EFA0',
			},
			borderColor: {
				'highlight-1': '#49BBBD',
				'highlight-2': '#252641',
				'highlight-3': '#29B9E7',
			},
		},
	},
	plugins: [],
}

