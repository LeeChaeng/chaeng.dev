import { FC } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import Image from 'next/image';
import { css } from '@/styled-system/css';

interface PostProps {
  slug: string;
  createdAt: string;
  title: string;
  thumbnail?: string;
  summary: string;
}

const Post: FC<PostProps> = ({
  summary,
  createdAt,
  thumbnail,
  title,
  slug,
}) => {
  return (
    <Link
      href={`/posts/${slug}`}
      className={css({
        maxWidth: '704px',
      })}
    >
      <time
        dateTime={createdAt}
        className={css({
          fontSize: '14px',
          color: 'text',
        })}
      >
        {dayjs(createdAt).format('MMMM DD, YYYY')}
      </time>

      <h2
        className={css({
          marginBottom: '16px',
          overflowWrap: 'break-word',
          color: 'title',
        })}
      >
        {title}
      </h2>

      <div
        className={css({
          display: 'flex',
          flexDirection: {
            base: 'column',
            sm: 'row',
          },
          gap: '24px',
        })}
      >
        <p
          className={css({
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 0%',
            order: {
              base: '2',
              sm: '1',
            },
            color: 'text',
          })}
        >
          {summary}
          <span
            className={css({
              fontSize: '15px',
              color: 'accent',
              marginTop: '4px',
            })}
          >
            Read More
          </span>
        </p>

        {/*TODO: alt*/}
        {thumbnail && (
          <div
            className={css({
              position: 'relative',
              flex: '1 1 0%',
              order: {
                base: '1',
                sm: '2',
              },
              borderRadius: '0.5rem',
              filter:
                'drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))',
              aspectRatio: '5/3',
            })}
          >
            <Image
              src={`https://images.chaeng.dev/post/${thumbnail}`}
              alt="post example"
              fill={true}
              className={css({
                objectFit: 'cover',
                borderRadius: '0.5rem',
              })}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export { Post };
