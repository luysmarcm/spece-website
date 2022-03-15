module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#D0D6F9",
				secundary: "#FFFFFF",
			},
			fontFamily: {
				bellefair: ["Bellefair"],
				barlow: ["Barlow Condensed"],
			},
			backgroundImage: (theme) => ({
				banner: "url('/image/background-home-desktop.jpg')",
				destination: "url('/image/background-destination-desktop.jpg')",
			}),
			maxWidth: {
				max: "1920px",
			},
			minWidth: {
				min: "280px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
