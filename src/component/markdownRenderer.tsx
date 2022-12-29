import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Heading } from "~/component/customTag/heading";

const MarkdownRenderer: FC<{ children: string }> = ({ children }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => <Heading order={1}>{children}</Heading>,
        h2: ({ children }) => <Heading order={2}>{children}</Heading>,
        h3: ({ children }) => <Heading order={3}>{children}</Heading>,
        h4: ({ children }) => <Heading order={4}>{children}</Heading>,
        h5: ({ children }) => <Heading order={5}>{children}</Heading>,
        h6: ({ children }) => <Heading order={6}>{children}</Heading>,
        p: ({ children }) => <p>{children}</p>,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export { MarkdownRenderer };
