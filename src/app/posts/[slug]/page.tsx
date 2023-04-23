import { getAllPosts, getPostBySlug } from '~/lib/api';
import Link from 'next/link';
import dayjs from 'dayjs';
import Image from 'next/image';
import { MarkdownRenderer } from '~/component/markdownRenderer';
import { GithubIcon } from '~/asset/githubIcon';
import { LinkedInIcon } from '~/asset/linkedInIcon';
import { notFound } from 'next/navigation';

interface Param {
  slug: string;
}

const PostPage = ({ params }: { params: Param }) => {
  const data = getPostBySlug(params.slug, [
    'title',
    'createdAt',
    'content',
    'coverImg',
  ]);

  if (!data) {
    notFound();
  }

  const { title, createdAt, content } = data;

  return (
    <main className="flex flex-1 relative flex-col px-[32px] pt-[74px] max-w-[904px] self-center w-full">
      <div className="flex flex-1 flex-col gap-[4px] mb-[32px]">
        <Link href="/" className="inline-block text-accent mt-[8px]">
          HOME
        </Link>
        <h1 className="break-words">{title}</h1>
        <span className="text-text font-light">
          {dayjs(createdAt).format('MMMM DD, YYYY')}
        </span>
      </div>

      {/*TODO: temporally css*/}
      {/*<div className={"break-all"}>{content}</div>*/}
      <MarkdownRenderer>{content}</MarkdownRenderer>

      <div className="flex flex-col gap-[16px] tablet:flex-row tablet:gap-[32px] mx-[16px] mt-[40px] tablet:mt-[60px]">
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
    </main>
  );
};

const generateStaticParams = async (): Promise<Param[]> => {
  const posts = getAllPosts(['slug']);

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const generateMetadata = ({ params }: { params: Param }) => {
  const data = getPostBySlug(params.slug, ['title', 'summary']);

  if (!data) {
    return;
  }

  const { title, summary } = data;

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
    },
    twitter: {
      title,
      description: summary,
    },
  };
};

export default PostPage;
export { generateMetadata, generateStaticParams };
