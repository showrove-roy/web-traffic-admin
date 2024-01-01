import { useQuery } from "@tanstack/react-query";
import { BlogCard } from "../../Components/BlogCard/BlogCard";
import { TitleSection } from "../../Components/TitleSection/TitleSection";
import axios from "axios";
import { Loading } from "../../Components/Loading/Loading";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import { useState } from "react";

export const Blog = () => {
  const [numOfData, setNumOfData] = useState(5);
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["allBlog"],
    queryFn: () => axios.get("/all-blog", {}),
  });

  if (isLoading) {
    return <Loading />;
  }

  // store blog data
  let allBlogs = data.data.data;
  return (
    <div>
      <ScrollToTop />
      <TitleSection title={"Add Blogs"} link={"add-blog"} />

      <div className='mt-5'>
        {allBlogs?.slice(0, numOfData)?.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            refetch={refetch}
            isLoading={isLoading}
          />
        ))}
      </div>

      {allBlogs.length >= 5 && (
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
