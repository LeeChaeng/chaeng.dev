import { getPostBySlug, getPosts } from '@/src/lib/api';
import Link from 'next/link';
import dayjs from 'dayjs';
import Image from 'next/image';
import { MarkdownRenderer } from '@/src/component/markdownRenderer';
import { GitHubIcon } from '@/src/asset/gitHubIcon';
import { LinkedInIcon } from '@/src/asset/linkedInIcon';
import { notFound } from 'next/navigation';
import { css } from '@/styled-system/css';

interface Param {
  slug: string;
}

const PostPage = ({ params }: { params: Param }) => {
  const data = getPostBySlug(params.slug);

  if (!data) {
    notFound();
  }

  const { title, createdAt, content } = data;

  return (
    <main
      className={css({
        display: 'flex',
        flex: '1',
        position: 'relative',
        flexDirection: 'column',
        paddingX: '32px',
        paddingTop: '74px',
        maxWidth: '904px',
        alignSelf: 'center',
        width: '100%',
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          marginBottom: '32px',
        })}
      >
        <Link
          href="/"
          className={css({
            display: 'inline-block',
            color: 'accent',
            marginTop: '8px',
          })}
        >
          HOME
        </Link>
        <h1 className={css({ overflowWrap: 'break-word' })}>{title}</h1>
        <span className={css({ color: 'text', fontWeight: '300' })}>
          {dayjs(createdAt).format('MMMM DD, YYYY')}
        </span>
      </div>

      {/*TODO: temporally css*/}
      {/*<div className={"break-all"}>{content}</div>*/}
      <MarkdownRenderer>{content}</MarkdownRenderer>

      <div
        className={css({
          display: 'flex',
          flexDirection: {
            base: 'column',
            sm: 'row',
          },
          gap: {
            base: '16px',
            sm: '32px',
          },
          marginX: '16px',
          marginTop: {
            base: '40px',
            sm: '60px',
          },
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            alignSelf: 'center',
          })}
        >
          <Image
            alt="profile"
            width={72}
            height={72}
            src="/profile.jpeg"
            className={css({ borderRadius: '9999px' })}
          />
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            })}
          >
            <span
              className={css({
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'title',
              })}
            >
              이채영 (Luna Lee)
            </span>
            <span
              className={css({
                fontSize: '12px',
                fontWeight: '500',
                color: 'text',
              })}
            >
              Frontend Engineer
            </span>
          </div>
        </div>

        <div>
          <h1
            className={css({
              fontSize: '24px',
              color: 'title',
              paddingBottom: '8px',
            })}
          >
            <Link href="/" passHref>
              chaeng.dev
            </Link>
          </h1>
          <span
            className={css({
              fontSize: '14px',
              fontWeight: '500',
              color: 'text',
              overflowWrap: 'break-word',
            })}
          >
            우당탕탕 프론트엔드 개발자 루나의 블로그
          </span>

          <div
            className={css({
              display: 'flex',
              gap: '8px',
              paddingY: '8px',
            })}
          >
            <Link href="https://github.com/leechaeng" passHref>
              <GitHubIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/leechaeng/" passHref>
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

const generateStaticParams = async (): Promise<Param[]> => {
  const posts = getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const generateMetadata = ({ params }: { params: Param }) => {
  const data = getPostBySlug(params.slug);

  if (!data) {
    return;
  }

  const { title, summary, createdAt, coverImg } = data;

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      publishedTime: createdAt,
      images: `https://images.chaeng.dev/post/${coverImg ?? 'default.webp'}`,
    },
    twitter: {
      title,
      description: summary,
      images: `https://images.chaeng.dev/post/${coverImg ?? 'default.webp'}`,
      card: 'summary',
    },
  };
};

export default PostPage;
export { generateMetadata, generateStaticParams };
