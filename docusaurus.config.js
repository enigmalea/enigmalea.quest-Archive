// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "enigmalea",
	tagline: "Where Shit Gets Weird",
	url: "https://www.enigmalea.quest",
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
						"See updates to the site; changes in design, tech specs, and more. For all your tech babbling needs.",
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
						label: "\u200B Home",
						className: "home",
					},
					{
						type: "dropdown",
						label: "\u200B Sections",
						position: "left",
						className: "sections",
						items: [
							{
								type: "doc",
								docId: "Vault/intro",
								label: "Vault",
							},
							{
								type: "doc",
								docId: "DA/intro",
								label: "Dragon Age Resources",
							},
							{
								label: "Dragon Age OCs",
								href: "https://toyhou.se/enigmalea/characters",
							},
						],
					},
					{
						type: "dropdown",
						label: "\u200B Pages",
						position: "left",
						className: "pages",
						items: [
							{
								label: "Exchange Letter",
								href: "/letter",
							},
							{
								label: "Owned Ships",
								href: "/ships",
							},
						],
					},
					{
						type: "dropdown",
						label: "\u200B Info",
						position: "left",
						className: "info",
						items: [
							{
								label: "Credits",
								href: "/credits",
							},
							{
								label: "Update Log",
								href: "/blog",
							},
						],
					},
					{
						type: "dropdown",
						label: "\u200B",
						position: "right",
						className: "social",
						items: [
							{
								href: "https://archiveofourown.org/users/enigmalea",
								label: "\u200B AO3",
								rel: "me",
								className: "ao3",
							},
							{
								href: "https://enigmalea.tumblr.com",
								label: "\u200B Tumblr",
								rel: "me",
								className: "tumblr",
							},
							{
								href: "https://twitter.com/enigmaleaDA",
								label: "\u200B Twitter",
								rel: "me",
								className: "twitter",
							},
							{
								href: "https://github.com/enigmalea",
								label: "\u200B Github",
								rel: "me",
								className: "github",
							},
							{
								href: "https://indiepocalypse.social/@enigmalea",
								label: "\u200B Mastodon",
								rel: "me",
								className: "mastodon",
							},
						],
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
