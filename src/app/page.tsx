import { getPosts } from '@/src/lib/api';
import { css } from '@/styled-system/css';
import Image from 'next/image';
import { Post } from '@/src/component/post';
import { Profile } from '@/src/component/profile';

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

        <Profile />
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
