import { MetadataRoute } from 'next';
import { getPosts } from '~/lib/api';

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date().toISOString().split('T')[0];

  const posts = getPosts().map((post) => ({
    url: `https://chaeng.dev/posts/${post.slug}`,
    lastModified,
  }));

  return [
    {
      url: 'https://chaeng.dev',
      lastModified,
    },
    ...posts,
  ];
};

export default sitemap;
