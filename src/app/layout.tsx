import { FC, ReactNode } from 'react';
import '../styles/globalStyle.css';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Spoqa } from '@/src/app/font/font';
import { Analytics } from '@vercel/analytics/react';
import { css } from '@/styled-system/css';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="ko" className={Spoqa.className}>
      <head>
        <meta name="viewport" content="width=device-width" />
        {/*Google tag (gtag.js)*/}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RREC2KXJJT"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RREC2KXJJT');`}
        </Script>
      </head>
      <body
        className={css({
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          position: 'relative',
        })}
      >
        <div
          className={css({
            position: 'absolute',
            top: '0',
            left: '0',
            backgroundImage: 'background-image',
            backgroundColor: 'white',
            width: '100%',
            height: '300px',
            bgGradient: 'to-b',
            gradientFrom: 'topColor',
            gradientTo: 'white',
          })}
        />
        {children}
        <footer
          className={css({
            fontSize: '12px',
            textAlign: 'center',
            width: '100%',
            paddingY: '56px',
            bgGradient: 'to-b',
            gradientFrom: 'white',
            gradientTo: 'bottomColor',
          })}
        >
          © Luna Lee
        </footer>
        <Analytics />
      </body>
    </html>
  );
};

const metadata: Metadata = {
  title: {
    template: '%s | chaeng.dev',
    default: 'chaeng.dev',
  },
  description: '프론트엔드 개발자 루나의 개발 블로그입니다.',
  openGraph: {
    title: 'chaeng.dev',
    description: '프론트엔드 개발자 루나의 개발 블로그입니다.',
  },
  twitter: {
    title: 'chaeng.dev',
    description: '프론트엔드 개발자 루나의 개발 블로그입니다.',
  },
};

export default RootLayout;
export { metadata };
