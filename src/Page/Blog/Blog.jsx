import { useQuery } from "@tanstack/react-query";
import { BlogCard } from "../../Components/BlogCard/BlogCard";
import { TitleSection } from "../../Components/TitleSection/TitleSection";
import axios from "axios";
import { Loading } from "../../Components/Loading/Loading";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

export const Blog = () => {
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["allBlog"],
    queryFn: () => axios.get("/all-blog", {}),
  });

  if (isLoading) {
    return <Loading />;
  }

  let allBlogs = data.data.data;

  return (
    <div>
      <ScrollToTop/>
      <TitleSection title={"Add Blogs"} link={"add-blog"} />

      <div className='mt-5'>
        {allBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            refetch={refetch}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  );
};
