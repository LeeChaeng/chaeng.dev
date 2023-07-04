import { join } from 'path';
import * as fs from 'fs';
import matter from 'gray-matter';
import { isNotNull } from '@/src/utils/isNotNull';
import { cache } from 'react';

const POSTS_PATH = join(process.cwd(), 'src/posts');

type PostItems = {
  [key: string]: string;
};

const getPosts = cache(() => {
  const posts = fs.readdirSync(POSTS_PATH);

  return posts
    .map((slug) => {
      const realSlug = slug.replace(/\.md$/, '');
      const fullPath = join(POSTS_PATH, `${realSlug}.md`);

      if (!fs.existsSync(fullPath)) {
        return null;
      }

      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return { ...data, content, slug: realSlug } as PostItems;
    })
    .filter(isNotNull)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
});

const getPostBySlug = (slug: string) => {
  return getPosts().find((post) => post.slug === slug);
};

export { getPosts, POSTS_PATH, getPostBySlug };
