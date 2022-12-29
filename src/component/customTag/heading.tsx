import { FC, ReactNode } from "react";

const headingSize = {
  1: 40,
  2: 36,
  3: 32,
  4: 28,
  5: 24,
  6: 20,
};

const Heading: FC<{ children: ReactNode; order: keyof typeof headingSize }> = ({
  children,
  order,
}) => {
  return (
    <h1 className={`text-[${headingSize[order]}px] font-bold text-title`}>
      {children}
    </h1>
  );
};

export { Heading };
