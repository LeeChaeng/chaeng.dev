import { FC, ReactNode } from "react";

const Heading1: FC<{ children: ReactNode }> = ({ children }) => {
  return <h1 className={`text-[40px] font-bold text-title`}>{children}</h1>;
};

const Heading2: FC<{ children: ReactNode }> = ({ children }) => {
  return <h2 className={`text-[36px] font-bold text-title`}>{children}</h2>;
};

const Heading3: FC<{ children: ReactNode }> = ({ children }) => {
  return <h3 className={`text-[32px] font-bold text-title`}>{children}</h3>;
};

const Heading4: FC<{ children: ReactNode }> = ({ children }) => {
  return <h4 className={`text-[28px] font-bold text-title`}>{children}</h4>;
};

const Heading5: FC<{ children: ReactNode }> = ({ children }) => {
  return <h5 className={`text-[24px] font-bold text-title`}>{children}</h5>;
};

const Heading6: FC<{ children: ReactNode }> = ({ children }) => {
  return <h6 className={`text-[20px] font-bold text-title`}>{children}</h6>;
};

export { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 };
