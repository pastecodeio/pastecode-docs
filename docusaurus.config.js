// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PasteCode.io Docs',
  tagline: 'Paste and Share Code Online',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.pastecode.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pastecodeio', // Usually your GitHub org/user name.
  projectName: 'pastecode-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/pastecodeio/pastecode-docs/tree/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-4M26BJXTP4',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'PasteCode.io Docs',
          src: 'img/logo2.svg',
          srcDark: 'img/logo1.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs Home',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://pastecode.io',
            label: 'Return to Main Site',
            position: 'left',
          },
        ],
      },
    
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Stay in touch',
            items: [
              {
                label: 'Contact',
                href: "https://pastecode.io/contact"
              },
              {
                label: 'GitHub',
                href: "https://github.com/pastecodeio"
              },
            ],
          },
          {
            title: 'Support Us',
            items: [
              {
                label: 'Donate',
                href: "https://buymeacoffee.com/pastecode_io"
              },
              {
                label: 'Vote on Product Hunt',
                href: "https://www.producthunt.com/posts/pastecode-io"
              }
            ],
          },
          {
            title: 'Useful',
            items: [
              {
                label: 'WebUtils.dev',
                href: "https://webutils.dev",
              }
            ],
          },
          {
            title: 'Policies',
            items: [
              {
                label: 'Privacy Policy',
                href: 'http://pastecode.io/privacy-policy',
              },
              {
                label: 'Terms of Service',
                href: 'http://pastecode.io/terms-of-service',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PasteCode.io.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'LNPYEJ9DQP',
  
        // Public API key: it is safe to commit it
        apiKey: '535257a1a4d195a8f3a3815dcfaebeae',
  
        indexName: 'pastecode',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: false,
  
        //... other Algolia params
      },
    }),
};

module.exports = config;
