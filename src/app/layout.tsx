import { FC, ReactNode } from "react";
import "../styles/globalStyle.css";
import Script from "next/script";

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

export default RootLayout;
