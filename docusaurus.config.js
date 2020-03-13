const { resolve } = require("path");

module.exports = {
  title: "My Site",
  tagline: "The tagline of my site",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: "Conflux Developer",
      logo: {
        alt: "Conflux Logo",
        src: "img/logo.svg"
      },
      links: [
        {
          to: "docs/introduction/en/what_is_conflux",
          label: "Docs",
          position: "left"
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/doc1"
            },
            {
              label: "Second Doc",
              to: "docs/doc2"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/Conflux-Chain"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/confluxchain"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Conflux Chain, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: resolve(__dirname, "sidebars.en.js" ),
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
