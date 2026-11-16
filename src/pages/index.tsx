import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import { Redirect } from '@docusaurus/router';

// Không có trang chủ riêng: vào docs.diro.ai là thẳng tới tài liệu (có menu trái).
// meta refresh cho lần tải trang đầu (HTML tĩnh), <Redirect> cho điều hướng trong app
// (bấm logo, breadcrumb trang chủ).
export default function Home(): ReactNode {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/docs/intro" />
        <link rel="canonical" href="https://docs.diro.ai/docs/intro" />
      </Head>
      <Redirect to="/docs/intro" />
    </>
  );
}
