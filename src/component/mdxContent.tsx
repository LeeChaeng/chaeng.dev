import Link from "next/link";
import { MDXComponents } from "mdx/types";

const mdxContent: MDXComponents = {
  a: ({ href, ...props }) => (
    <Link href={href!}>
      <a {...props} />
    </Link>
  ),
};

export { mdxContent };
