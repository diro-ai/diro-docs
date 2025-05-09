import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Diro docs',
  tagline: 'Diro documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.diro.ai',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'diro-ai', // Usually your GitHub org/user name.
  projectName: 'diro-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap&subset=vietnamese',
      rel: 'stylesheet',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/logo.svg',
    navbar: {
      title: 'Diro docs',
      logo: {
        alt: 'Diro Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Hướng dẫn',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://diro.ai',
          label: 'Đăng nhập',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Hướng dẫn',
              to: '/docs/intro',
            },
            {
              label: 'Cách tạo chatbot',
              to: 'https://diro.ai/how-to-create-chatbot',
            },
            {
              label: 'Điều khoản sử dụng',
              to: 'https://diro.ai/terms-of-use',
            },
            {
              label: 'Chính sách bảo mật',
              to: 'https://diro.ai/privacy-policy',
            },
          ],
        },
        {
          title: 'Cộng đồng',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/diro.ai.chatbot',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/diro-ai',
            },
          ],
        },
        {
          title: 'Liên hệ',
          items: [
            {
              label: 'Email',
              href: 'mailto:cskh@diro.ai',
            },
            {
              label: 'Zalo',
              href: 'https://zalo.me/0333263400',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Diro, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
