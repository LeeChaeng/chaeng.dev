import { getPosts } from '@/src/lib/api';
import { css } from '@/styled-system/css';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/src/component/post';
import { GitHubIcon } from '@/src/asset/gitHubIcon';
import { LinkedInIcon } from '@/src/asset/linkedInIcon';

const Page = () => {
  const posts = getPosts();

  return (
    <main
      className={css({
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        flex: '1',
        alignItems: 'center',
        paddingX: {
          base: '16px',
          sm: '36px',
        },
      })}
    >
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
          marginBottom: {
            base: '180px',
            sm: '140px',
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
            className={css({
              borderRadius: '9999px',
            })}
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
                fontWeight: '400',
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
              fontWeight: '400',
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
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '120px',
          marginX: {
            base: '16px',
            sm: '32px',
          },
        })}
      >
        {posts.map((post) => {
          return (
            <Post
              key={post.slug}
              summary={post.summary}
              createdAt={post.createdAt}
              slug={post.slug}
              title={post.title}
              thumbnail={post.coverImg}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Page;
