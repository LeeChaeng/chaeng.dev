import { FC } from "react";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeFormat from "rehype-format";

const MarkdownRenderer: FC<{ children: string }> = ({ children }) => {
  const filter = (html: string) => {
    return remark()
      .use(remarkBreaks)
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeFormat)
      .use(rehypeStringify)
      .processSync(html)
      .toString();
  };

  return <div dangerouslySetInnerHTML={{ __html: filter(children) }} />;
};

export { MarkdownRenderer };
