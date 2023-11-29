import Link from 'next/link';
import { css } from '@/styled-system/css';
import { GitHubIcon } from '@/src/asset/gitHubIcon';
import { LinkedInIcon } from '@/src/asset/linkedInIcon';

const Profile = () => {
  return (
    <div>
      <Link
        href="/"
        className={css({
          fontSize: '24px',
          color: 'title',
          paddingBottom: '8px',
          fontWeight: 'bold',
          display: 'block',
        })}
      >
        chaeng.dev
      </Link>
      <span
        className={css({
          fontSize: '14px',
          fontWeight: '400',
          color: 'text',
          overflowWrap: 'break-word',
        })}
      >
        주석은 빼는 편이야 코드에서 질리는 맛이기에
      </span>

      <div
        className={css({
          display: 'flex',
          gap: '8px',
          paddingY: '8px',
        })}
      >
        <Link href="https://github.com/leechaeng">
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/leechaeng/">
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  );
};

export { Profile };
