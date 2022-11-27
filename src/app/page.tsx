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
    <div>
      {posts.map((post) => {
        return (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <article>
              <h2>{post.title}</h2>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
