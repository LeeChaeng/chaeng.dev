import { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: 'https://chaeng.dev',
      lastModified: new Date(),
    },
    {
      url: 'https://chaeng.dev/posts/first-content',
      lastModified: new Date(),
    },
    {
      url: 'https://chaeng.dev/posts/blog-production-review',
      lastModified: new Date(),
    },
    {
      url: 'https://chaeng.dev/posts/dont-use-react-query-callback',
      lastModified: new Date(),
    },
  ];
};

export default sitemap;
