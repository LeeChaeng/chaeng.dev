import { FC } from "react";
import ReactMarkdown from "react-markdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "~/component/customTag/heading";

const MarkdownRenderer: FC<{ children: string }> = ({ children }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => <Heading1>{children}</Heading1>,
        h2: ({ children }) => <Heading2>{children}</Heading2>,
        h3: ({ children }) => <Heading3>{children}</Heading3>,
        h4: ({ children }) => <Heading4>{children}</Heading4>,
        h5: ({ children }) => <Heading5>{children}</Heading5>,
        h6: ({ children }) => <Heading6>{children}</Heading6>,
        p: ({ children }) => <p>{children}</p>,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export { MarkdownRenderer };
