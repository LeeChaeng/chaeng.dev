import { MDXComponents } from 'mdx/types';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Code } from 'bright';
import { css } from '@/styled-system/css';

const HEADING_SHARED_STYLE = { marginTop: '1.5', marginBottom: '1' };

const mdxComponents: MDXComponents = {
  pre: ({
    children,
    ...props
  }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLPreElement>) => (
    <Code {...props} theme="material-lighter">
      {children}
    </Code>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      {...props}
      className={css({
        paddingX: '4',
        borderLeftWidth: '1',
        borderLeftStyle: 'solid',
        borderColor: '#d0d7de',
        marginBottom: '16px',
      })}
    >
      {children}
    </blockquote>
  ),
  a: ({ children, ...props }) => (
    <a {...props} className={css({ color: '#635bff' })}>
      {children}
    </a>
  ),
  p: ({ children, ...props }) => (
    <p {...props} className={css({ marginBottom: '16px' })}>
      {children}
    </p>
  ),
  h1: ({ children, ...props }) => (
    <h1 {...props} className={css(HEADING_SHARED_STYLE)}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 {...props} className={css(HEADING_SHARED_STYLE)}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 {...props} className={css(HEADING_SHARED_STYLE)}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 {...props} className={css(HEADING_SHARED_STYLE)}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 {...props} className={css(HEADING_SHARED_STYLE)}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => (
    <h6 {...props} className={css(HEADING_SHARED_STYLE)}>
      {children}
    </h6>
  ),
  hr: () => (
    <hr
      className={css({
        height: '1',
        backgroundColor: '#d0d7de',
        marginY: '24px',
      })}
    />
  ),
};

export { mdxComponents };
