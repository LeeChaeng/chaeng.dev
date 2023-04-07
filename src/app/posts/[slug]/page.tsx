import path from 'path';
import { getAllPosts, POSTS_PATH } from '~/lib/api';
import * as fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import dayjs from 'dayjs';
import Image from 'next/image';
import { MarkdownRenderer } from '~/component/markdownRenderer';
import { GithubIcon } from '~/asset/githubIcon';
import { LinkedInIcon } from '~/asset/linkedInIcon';

const getPost = (slug: string) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.md`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  return { content, data };
};

const PostPage = ({ params }: { params?: { slug?: string } }) => {
  const { content, data } = getPost(params?.slug ?? '');

  return (
    <main className="flex flex-1 relative flex-col px-[32px] pt-[74px] max-w-[904px] self-center w-full">
      <div className="flex flex-1 flex-col gap-[4px] mb-[32px]">
        <Link href="/" className="inline-block text-accent mt-[8px]">
          HOME
        </Link>
        <h1 className="break-words">{data.title}</h1>
        <span className="text-text font-light">
          {dayjs(data.createdAt).format('MMMM DD, YYYY')}
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
              <GithubIcon title="github" />
            </Link>
            <Link href="https://www.linkedin.com/in/leechaeng/" passHref>
              <LinkedInIcon title="linkedin" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default PostPage;
