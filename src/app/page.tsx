import { getAllPosts } from '~/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '~/component/post';
import { GithubIcon } from '~/asset/githubIcon';
import { LinkedInIcon } from '~/asset/linkedInIcon';

const Page = () => {
  const posts = getAllPosts([
    'slug',
    'coverImg',
    'title',
    'createdAt',
    'summary',
  ]);

  return (
    <main className="flex flex-1 relative flex-col items-center px-16px tablet:px-36px">
      <div className="flex flex-col gap-[16px] tablet:flex-row tablet:gap-[32px] mx-[16px] mt-[40px] mb-[180px] tablet:mt-[60px] tablet:mb-[140px]">
        <div className="flex flex-col items-center gap-[4px] self-center">
          <Image
            alt="profile"
            width={72}
            height={72}
            src="/profile.jpeg"
            className="rounded-full"
          />
          <div className="flex flex-col items-center">
            <span className="text-[16px] font-bold text-title">
              이채영 (Luna Lee)
            </span>
            <span className="text-[12px] font-normal text-text">
              Frontend Engineer
            </span>
          </div>
        </div>

        <div className="tablet:min-w-[400]">
          <h1 className="text-[24px] text-title pb-[8px]">
            <Link href="/" passHref>
              chaeng.dev
            </Link>
          </h1>
          <span className="text-[14px] font-normal text-text break-words">
            우당탕탕 프론트엔드 개발자 루나의 블로그
          </span>

          <div className="flex gap-[8px] pt-[8px] pb-[8px]">
            <Link href="https://github.com/leechaeng" passHref>
              <GithubIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/leechaeng/" passHref>
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[120px] mx-[16px] tablet:mx-[32px]">
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
