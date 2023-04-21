import { join } from 'path';
import * as fs from 'fs';
import matter from 'gray-matter';

const POSTS_PATH = join(process.cwd(), 'src/posts');

const getPostBySlugs = (): string[] => {
  return fs.readdirSync(POSTS_PATH);
};

type PostItems = {
  [key: string]: string;
};

const getPostBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(POSTS_PATH, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: PostItems = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
};

const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostBySlugs();

  return slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
};

export { getAllPosts, POSTS_PATH, getPostBySlug };
