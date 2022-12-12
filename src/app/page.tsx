import Content from "../posts/content.mdx";
import { mdxContent } from "~/component/mdxContent";
import { getAllPosts } from "~/lib/api";
import Link from "next/link";

const Page = () => {
  const posts = getAllPosts([
    "slug",
    "coverImg",
    "title",
    "createdAt",
    "summary",
  ]);

  return (
    <main
      className={
        "flex flex-1 relative flex-col items-center px-16px tablet:px-36px"
      }
    >
      {posts.map((post) => {
        return (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <article>
              <h2 className={"text-sky-500"}>{post.title}</h2>
            </article>
          </Link>
        );
      })}
    </main>
  );
};

export default Page;
