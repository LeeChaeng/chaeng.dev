import Content from "../posts/content.mdx";
import { mdxContent } from "~/component/mdxContent";
import { getAllPosts } from "~/lib/api";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const posts = getAllPosts([
    "slug",
    "coverImg",
    "title",
    "createdAt",
    "summary",
  ]);

  return (
    <main
      className={
        "flex flex-1 relative flex-col items-center px-16px tablet:px-36px"
      }
    >
      <div
        className={
          "flex mobile:flex-col mobile:gap-[16px] tablet:flex-row tablet:gap-[32px] mx-[16px] mobile:mt-[40px] mobile:mb-[180px] tablet:mt-[60px] tablet:mb-[140px]"
        }
      >
        <div
          className={"flex flex-col items-center gap-[4px] mobile:self-center"}
        >
          <Image
            alt="profile"
            width={72}
            height={72}
            src={"/profile.jpeg"}
            className={"rounded-full"}
          />
          <div className={"flex flex-col items-center"}>
            <span className={"text-[16px] font-bold text-title"}>
              이채영 (Luna Lee)
            </span>
            <span className={"text-[12px] font-normal text-text"}>
              Frontend Engineer
            </span>
          </div>
        </div>

        <div className={"tablet:min-w-[400] mobile:min-w-[300]"}>
          <h1 className={"text-[24px] font-bold text-title pb-[8px]"}>
            <Link href={"/"} passHref>
              chaeng.dev
            </Link>
          </h1>
          <span className={"text-[14px] font-normal text-text"}>
            우당탕탕 프론트엔드 개발자 루나의 블로그
          </span>

          <div className={"flex gap-[8px] pt-[8px] pb-[8px]"}>
            <Link href={"https://github.com/leechaeng"} passHref>
              {/*<GitHub title="github" width={24} height={24} />*/}
              Github
            </Link>
            <Link href={"https://www.linkedin.com/in/leechaeng/"} passHref>
              {/*<LinkedIn title="linkedin" width={24} height={24} />*/}
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      {posts.map((post) => {
        return (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <article>
              <h2 className={"text-sky-500"}>{post.title}</h2>
            </article>
          </Link>
        );
      })}
    </main>
  );
};

export default Page;
