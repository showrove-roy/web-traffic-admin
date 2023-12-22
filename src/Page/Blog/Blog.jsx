import { BlogCard } from "../../Components/BlogCard/BlogCard";
import { TitleSection } from "../../Components/TitleSection/TitleSection";

export const Blog = () => {
  return (
    <div>
      <TitleSection title={"Add Blogs"} link={"add-blog"} />

      <div className='mt-5'>
        <BlogCard />
      </div>
    </div>
  );
};
