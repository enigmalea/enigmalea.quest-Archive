// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "enigmalea",
	tagline: "Where Shit Gets Weird",
	url: "https://enigmalea.neocities.org",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.png",
	titleDelimiter: "☆",

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					breadcrumbs: true,
					sidebarPath: require.resolve("./sidebars.js"),
				},
				blog: {
					blogTitle: "Update Log",
					blogDescription:
						"See the updates to enigmalea's website, random project updates, and various blatherings that don't fit on other social media.",
					showReadingTime: true,
					feedOptions: {
						type: "all",
						copyright: `Copyright © ${new Date().getFullYear()} enigmalea`,
					},
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			docs: {
				sidebar: {
					hideable: true,
				},
			},
			navbar: {
				items: [
					{
						to: "/",
						position: "left",
						label: "\u200B",
						className: "home",
					},
					{
						to: "/blog",
						position: "left",
						label: "\u200B",
						className: "blog",
					},
					{
						href: "https://archiveofourown.org/users/enigmalea",
						position: "left",
						label: "\u200B",
						className: "ao3",
					},
					{
						href: "https://enigmalea.tumblr.com",
						position: "left",
						label: "\u200B",
						className: "tumblr",
					},
					{
						href: "https://twitter.com/enigmaleaDA",
						position: "left",
						label: "\u200B",
						className: "twitter",
					},
					{
						href: "https://github.com/enigmalea",
						position: "left",
						label: "\u200B",
						className: "github",
					},
				],
			},
			footer: {
				links: [
					{
						title: " ",
						items: [
							{
								html: `
									<img class="pagedoll" title="art by @KiingFluffybuns" src="/img/pagedoll.png"></img>
									`,
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} enigmalea. Built with Docusaurus.`,
			},
			colorMode: {
				defaultMode: "dark",
				disableSwitch: false,
				respectPrefersColorScheme: true,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			metadata: [
				{ name: "theme-color", content: "#2F3136" },
				{ name: "twitter:card", content: "summary" },
				{ name: "twitter:creator", content: "enigmaleaDA" },
				{ name: "og:image", content: "/img/favicon.png" },
			],
		}),
};

module.exports = config;
