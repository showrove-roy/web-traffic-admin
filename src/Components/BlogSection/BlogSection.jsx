/* eslint-disable react/prop-types */
import { useState } from "react";
import { FeaturedBlogCard } from "../FeaturedBlogCard/FeaturedBlogCard";
import { TitleSection } from "../TitleSection/TitleSection";

export const BlogSection = ({ id, CatagoryBlogs, refetch, isLoading }) => {
  const [numOfData, setNumOfData] = useState(5);
  return (
    <div className='CMNCardBG'>
      <TitleSection title={"Featured Blogs"} link={`add-featured-blog/${id}`} />

      {CatagoryBlogs?.slice(0, numOfData)?.map((blog) => (
        <FeaturedBlogCard
          key={blog.id}
          blog={blog}
          refetch={refetch}
          isLoading={isLoading}
        />
      ))}

      {CatagoryBlogs.length >= numOfData && (
        <div className='flex justify-center mb-20 mt-20'>
          <button
            onClick={() => setNumOfData(numOfData + 5)}
            className='py-3 px-8 text-blue border-2 font-medium border-blue rounded-full hover:btnShadow w-fit text-sm'>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
