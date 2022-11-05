import { FC, ReactNode } from "react";
import "../styles/globalStyle.css";

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html>
      <head>
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
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
