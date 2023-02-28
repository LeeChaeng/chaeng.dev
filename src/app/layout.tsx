import { FC, ReactNode } from "react";
import "../styles/globalStyle.css";
import Script from "next/script";
import type { Metadata } from "next";

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html>
      <head>
        <meta
          name={"viewport"}
          content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin=""
          href={"/font/SpoqaHanSansNeo-Bold.woff2"}
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin=""
          href={"/font/SpoqaHanSansNeo-Regular.woff2"}
        />
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
      <body className={"flex flex-col min-h-full relative"}>
        <div
          className={
            "absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-topColor to-white"
          }
        />
        {children}
        <footer
          className={
            "text-[12px] text-center w-full py-[56px] bg-gradient-to-b from-white to-bottomColor color-text"
          }
        >
          © Luna Lee
        </footer>
      </body>
    </html>
  );
};

const metadata: Metadata = {
  title: "우당탕탕 개발 블로그",
  description: "프론트엔드 개발자 루나의 개발 블로그입니다.",
  openGraph: {
    title: "chaeng.dev",
    description: "프론트엔드 개발자 루나의 개발 블로그입니다.",
  },
  twitter: {
    title: "chaeng.dev",
    description: "프론트엔드 개발자 루나의 개발 블로그입니다.",
  },
};

export default RootLayout;
export { metadata };
