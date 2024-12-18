/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			'white': '#ffffff',
			'blue': '#1fb6ff',
			'purple': '#7e5bef',
			'pink': '#ff49db',
			'orange': '#ff7849',
			'yellow': '#ffc82c',
			'gray': {
				light: '#d3dce6',
				DEFAULT:'#8492a6',
				dark: '#273444',
			},
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			colors: {
				'green': {
					DEFAULT: '#13be66',
					light: '#53fe86'
				},
				'red': {
					DEFAULT: '#FF5A5A',
					light: '#FF8888'
				},
			},
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			borderRadius: {
				'4xl': '2rem',
			}
		}
	},
}