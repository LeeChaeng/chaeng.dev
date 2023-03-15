import { FC } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";

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
    <Link href={`/posts/${slug}`} className={"max-w-[704px]"}>
      <time dateTime={createdAt} className={"text-[14px] text-text"}>
        {dayjs(createdAt).format("MMMM DD, YYYY")}
      </time>

      <h2 className={"mb-[16px] break-words text-title"}>{title}</h2>

      <div className={"flex flex-col tablet:flex-row gap-[24px]"}>
        <p className={"flex-1 flex flex-col order-2 tablet:order-1 text-text"}>
          {summary}
          <span className={"text-[15px] text-accent mt-[4px]"}>Read More</span>
        </p>

        {/*TODO: alt*/}
        {thumbnail && (
          <div
            className={
              "flex-1 relative aspect-[5/3] rounded-lg drop-shadow-lg order-1 tablet:order-2"
            }
          >
            <Image
              src={`https://images.chaeng.dev/${thumbnail}`}
              alt={"post example"}
              fill={true}
              className={"object-cover rounded-lg"}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export { Post };
