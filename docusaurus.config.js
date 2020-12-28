module.exports = {
  title: "Basis Dollar",
  tagline: "",
  url: "https://docs.basisdollar.fi",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
  organizationName: "BasisDollar", // Usually your GitHub org/user name.
  projectName: "Basis Dollar", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: "Basis Dollar",
      logo: {
        alt: "BasisDollar.Fi",
        src: "img/logo.png",
      },
      items: [],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Official Links",
          items: [
            {
              label: "Home",
              to: "https://basisdollar.fi",
            },
            {
              label: "Buy BSD",
              to:
                "https://valueliquid.io/#/swap?inputCurrency=0x6B175474E89094C44Da98b954EedeAC495271d0F&outputCurrency=0x003e0af2916e598Fa5eA5Cb2Da4EDfdA9aEd9Fde",
            },
            {
              label: "Buy BSDS",
              to:
                "https://valueliquid.io/#/swap?inputCurrency=0x6B175474E89094C44Da98b954EedeAC495271d0F&outputCurrency=0xE7C9C188138f7D70945D420d75F8Ca7d8ab9c700",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/BasisDollar_Fi",
            },
            {
              label: "Discord",
              href: "https://discord.gg/UTa6bVVHVx",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/BasisDollar",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Medium",
              to: "https://basisdollar-fi.medium.com/",
            },
            {
              label: "GitHub",
              href: "https://github.com/basisdollar/basisdollar-protocol",
            },
            {
              label: "Audits",
              href: "https://github.com/basisdollar/basisdollar-protocol#audit",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BasisDollar.Fi`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/basisdollar/basisdollar-docs/tree/main",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "#",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
