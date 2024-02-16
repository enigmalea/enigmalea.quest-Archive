// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/palenight");

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
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
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
                docId: "Garden/index",
                label: "Digital Garden",
              },
              {
                type: "doc",
                docId: "DA/index",
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
                label: "Projects",
                href: "/projects",
              },
              {
                label: "Exchange Letter",
                href: "/letter",
              },
              {
                label: "Owned Ships",
                href: "/ships",
              },
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
            label: "\u200B Follow Me",
            position: "left",
            className: "social",
            items: [
							{
                href: "https://zapier.com/engine/rss/4727282/enig",
                label: "\u200B RSS",
                rel: "me",
                className: "rss",
              },
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
                href: "https://easymode.im/@enigmalea",
                label: "\u200B FireFish",
                rel: "me",
                className: "firefish",
              },
              {
                href: "https://github.com/enigmalea",
                label: "\u200B Github",
                rel: "me",
                className: "github",
              },
							{
                href: "https://retrospring.net/@enigmalea",
                label: "\u200B Retrospring",
                rel: "me",
                className: "retrospring",
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
      zoom: {
        selector: ".markdown img",
        background: {
          light: "rgba(239, 241, 245, 0.75)",
          dark: "rgba(36, 39, 58, 0.75)",
        },
      },
    }),
};

module.exports = config;
