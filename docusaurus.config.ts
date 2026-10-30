import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Cặp version Diro (web + backend) mà nội dung docs đang khớp. Cập nhật khi viết lại
// docs theo bản mới — xem trang "Phiên bản tài liệu".
import docsVersion from './docs-version.json';

const versionLabel = `Diro web ${docsVersion.web} · backend ${docsVersion.backend}`;

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
          editUrl: 'https://github.com/diro-ai/diro-docs/tree/main/',
        },
        // Chưa dùng blog — bật lại khi có bài thật để đăng.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Đường dẫn của bộ tài liệu cũ (trước bản viết lại theo web 1.11.2 · backend 1.94.1)
        // đã được chia sẻ ra ngoài, giữ cho chúng không 404.
        redirects: [
          { from: '/docs/huong-dan', to: '/docs/bat-dau' },
          { from: '/docs/huong-dan/chat-thu', to: '/docs/ai-agent/chat-thu' },
          { from: '/docs/huong-dan/gop-trang', to: '/docs/tin-nhan/gop-chat' },
          { from: '/docs/huong-dan/keo-tuong-tac', to: '/docs/ai-agent/tin-nhan-tu-dong' },
          { from: '/docs/huong-dan/kich-hoat', to: '/docs/bat-dau/kich-hoat-ai' },
          { from: '/docs/huong-dan/quan-ly-don-hang', to: '/docs/don-hang/danh-sach-don' },
          { from: '/docs/huong-dan/quan-ly-tin-nhan', to: '/docs/tin-nhan/man-hinh-hoi-thoai' },
          { from: '/docs/huong-dan/tao-san-pham', to: '/docs/san-pham-kho/tao-san-pham' },
          { from: '/docs/huong-dan/them-page', to: '/docs/bat-dau/them-trang' },
          { from: '/docs/huong-dan/thiet-lap', to: '/docs/bat-dau/kich-hoat-ai' },
          { from: '/docs/huong-dan/tinh-nang', to: '/docs/ai-agent/thiet-lap-chung' },
          { from: '/docs/main-features', to: '/docs/intro' },
          { from: '/docs/diro-prompt-instructions', to: '/docs/ai-agent/cach-viet-lenh' },
        ],
      },
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
        {
          type: 'html',
          position: 'right',
          value: `<a class="docs-version-badge" href="/docs/phien-ban-tai-lieu" title="Tài liệu khớp với phiên bản này">${versionLabel}</a>`,
        },
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
      copyright: `Tài liệu khớp ${versionLabel} (cập nhật ${docsVersion.updated}).<br/>Copyright © ${new Date().getFullYear()} Diro, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
