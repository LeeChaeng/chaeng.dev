import { FC, ReactNode } from "react";

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default RootLayout;
