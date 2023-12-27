/* eslint-disable react/prop-types */

import { FeaturedBlogCard } from "../FeaturedBlogCard/FeaturedBlogCard";
import { OutlineBtn } from "../OutlineBtn/OutlineBtn";
import { TitleSection } from "../TitleSection/TitleSection";

export const BlogSection = ({ id, CatagoryBlogs, refetch, isLoading }) => {
  return (
    <div className='CMNCardBG'>
      <TitleSection title={"Featured Blogs"} link={`add-featured-blog/${id}`} />

      {CatagoryBlogs.map((blog) => (
        <FeaturedBlogCard
          key={blog.id}
          blog={blog}
          refetch={refetch}
          isLoading={isLoading}
        />
      ))}

      <div className='mt-5 flex justify-center'>
        <OutlineBtn btnLink={"hello"} btnText={"Load More"} />
      </div>
    </div>
  );
};
