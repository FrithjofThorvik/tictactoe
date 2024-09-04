import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"beige-1": "#EEDECC",
				"beige-2": "#F5E8D9",
				"beige-3": "#FFF5EA",
				"purple-5": "#7528B2",
				"green-3": "#2CE88F",
			},
			fontFamily: {
				sans: "inter",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
