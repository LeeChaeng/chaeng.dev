import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://chaeng.dev/sitemap.xml',
  };
};

export default robots;
