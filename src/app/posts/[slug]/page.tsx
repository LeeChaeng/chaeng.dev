import path from "path";
import { POSTS_PATH } from "~/lib/api";
import * as fs from "fs";
import matter from "gray-matter";

const getPost = (slug: string) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  return { content, data };
};

const PostPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const { content, data } = getPost(slug);

  return <div>{content}</div>;
};

export default PostPage;
