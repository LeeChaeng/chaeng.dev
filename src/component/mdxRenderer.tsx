import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeFormat from 'rehype-format';
import remarkBreaks from 'remark-breaks';
import { mdxComponents } from '@/src/component/mdxComponents';

const MDXRenderer = ({ children }: { children: string }) => {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkBreaks, remarkGfm],
          rehypePlugins: [rehypeFormat],
        },
      }}
      components={mdxComponents}
    />
  );
};

export { MDXRenderer };
