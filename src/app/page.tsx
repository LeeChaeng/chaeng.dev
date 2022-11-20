import Content from "../posts/content.mdx";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Content
        components={{
          a: ({ href, ...props }) => (
            <Link href={href!}>
              <a {...props} />
            </Link>
          ),
        }}
      />
    </div>
  );
};

export default Page;
