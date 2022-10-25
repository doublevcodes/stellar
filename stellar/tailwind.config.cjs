const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				"gh-gradient": "url(#gh-gradient)"
			},
			animation: {
				blob: "blob 7s infinite"
			},
			keyframes: {
				blob: {
					'0%': {
						transform: "translate(0px, 0px) scale(1)"
					},
					'33%': {
						transform: "translate(30px -50px) scale(1.1)"
					},
					'66%': {
						transform: "translate(-20px, 20px) scale(0.9)"
					},
					'100%': {
						transform: "translate(0px, 0px) scale(1)"
					}
				}
			}
		}
	},

	plugins: [typography, daisyui]
};

module.exports = config;
