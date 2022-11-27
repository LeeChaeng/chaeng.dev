import path from "path";
import { getAllPosts, POSTS_PATH } from "~/lib/api";
import * as fs from "fs";
import matter from "gray-matter";

const getPost = (slug: string) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  return { content, data };
};

const PostPage = ({ params }: { params?: { slug?: string } }) => {
  const { content, data } = getPost(params?.slug ?? "");

  return <div>{content}</div>;
};

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default PostPage;
