import { FC } from 'react';
import { remark } from 'remark';
import remarkBreaks from 'remark-breaks';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeFormat from 'rehype-format';
import remarkGfm from 'remark-gfm';
import '../styles/markdownStyle.css';
import { css } from '@/styled-system/css';

const MarkdownRenderer: FC<{ children: string }> = ({ children }) => {
  const filter = (html: string) => {
    return remark()
      .use(remarkBreaks)
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeFormat)
      .use(rehypeStringify)
      .processSync(html)
      .toString();
  };

  return (
    <div
      className={[
        css({
          flex: 1,
        }),
        'markdown-body',
      ].join(' ')}
      dangerouslySetInnerHTML={{ __html: filter(children) }}
    />
  );
};

export { MarkdownRenderer };
