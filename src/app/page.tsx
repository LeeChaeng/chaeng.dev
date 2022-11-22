import Content from "../posts/content.mdx";
import { mdxContent } from "../component/mdxContent";

const Page = () => {
  return (
    <div>
      <Content components={mdxContent} />
    </div>
  );
};

export default Page;
