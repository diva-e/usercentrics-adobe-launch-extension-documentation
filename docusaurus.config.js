// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Usercentrics Adobe Launch Extension',
  tagline: 'for Adobe Experience Platform Data Collection',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://diva-e.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/usercentrics-adobe-launch-extension-documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'diva-e',
  projectName: 'usercentrics-adobe-launch-extension-documentation', // Usually your repo name.
  trailingSlash: false,

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/diva-e/usercentrics-adobe-launch-extension-documentation/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/diva-e/usercentrics-adobe-launch-extension-documentation/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Usercentrics Adobe Launch Extension',
        logo: {
          alt: 'diva-e logo',
          src: 'img/diva-e/logo_DeepBlue_RGB.svg',
          srcDark: 'img/diva-e/logo_BluishWhite_RGB.svg',
          className: 'navbar__logo'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://exchange.adobe.com/apps/ec/107037/consent-management-by-usercentrics-cmp-v2',
            label: 'Adobe Exchange',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs Quicklinks',
            items: [
              {
                label: 'Events',
                to: '/docs/category/events',
              },
              {
                label: 'Conditions',
                to: '/docs/category/conditions',
              },
              {
                label: 'Actions',
                to: '/docs/category/actions',
              },
            ],
          },
          {
            title: 'Usercentrics',
            items: [
              {
                label: 'Homepage',
                href: 'https://usercentrics.com/pricing/?partnerid=15493',
              },
              {
                label: 'diva-e in partner listing',
                href: 'https://usercentrics.com/partner-network/diva-e-integration/?partnerid=15493',
              },
              {
                label: 'Blog article',
                href: 'https://usercentrics.com/press/integrating-usercentrics-via-adobe-launch/?partnerid=15493',
              },
              {
                label: 'Integration overview',
                href: 'https://usercentrics.com/partner-integrations/adobe/?partnerid=15493',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'diva-e',
                href: 'https://www.diva-e.com/',
              },
              {
                label: 'Extension in Adobe Exchange',
                href: 'https://exchange.adobe.com/apps/ec/107037/consent-management-by-usercentrics-cmp-v2',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/diva-e/usercentrics-adobe-launch-extension-documentation',
              },
            ],
          },
        ],
        copyright: `diva-e © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
    }),

  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
  ],

};

module.exports = config;
