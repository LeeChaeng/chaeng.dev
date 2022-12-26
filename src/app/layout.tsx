import { FC, ReactNode } from "react";
import "../styles/globalStyle.css";

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html>
      <head>
        <meta name={"viewport"} content={"width=device-width"} />
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
      <body className={"flex flex-col min-h-full relative"}>
        <div
          className={
            "absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-topColor to-white"
          }
        />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
