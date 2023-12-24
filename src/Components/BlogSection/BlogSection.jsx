import { BlogCard } from "../BlogCard/BlogCard";
import { OutlineBtn } from "../OutlineBtn/OutlineBtn";
import { TitleSection } from "../TitleSection/TitleSection";

export const BlogSection = () => {
  return (
    <div className='CMNCardBG'>
      <TitleSection title={"Featured Blogs"} link={"add-bog"} />

      <BlogCard />

      <div className='mt-5 flex justify-center'>
        <OutlineBtn btnLink={"hello"} btnText={"Load More"} />
      </div>
    </div>
  );
};
