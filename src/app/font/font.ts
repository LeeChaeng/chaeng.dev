import localFont from 'next/font/local';

const Spoqa = localFont({
  src: [
    {
      path: './SpoqaHanSansNeo-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SpoqaHanSansNeo-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export { Spoqa };
