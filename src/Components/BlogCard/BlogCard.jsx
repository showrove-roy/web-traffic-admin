/* eslint-disable react/prop-types */
import axios from "axios";
import { Link } from "react-router-dom";
import { Loading } from "../Loading/Loading";

export const BlogCard = ({ blog, isLoading, refetch }) => {
  const originalTimestamp = `${blog?.createdAt}`;
  const formattedDate = new Date(originalTimestamp).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }
  );

  // Blog delete system
  const handelDelete = (id) => {
    const conformation = window.confirm("Want to Delete?");
    if (conformation) {
      axios
        .delete(`deleted-blog/${id}`)
        .then(() => {})
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          refetch();
        });
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='w-full bg-gray rounded-2xl p-5 flex justify-between items-center mb-5 lg:mb-10'>
      <div className='flex gap-5 items-center'>
        <img src={`${blog?.picture}`} className='max-h-[100px]' alt='' />
        <div className=''>
          <div className='text-black-100 text-lg '>
            <div className='font-medium'>
              <p className='font-medium'>{blog?.title}</p>
            </div>
            <p>{formattedDate}</p>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='flex gap-5 '>
          <Link
            to='/'
            className='px-6 py-1 bg-[#CCFBF1]  text-[#4ea094] font-medium border border-[#CCFBF1] hover:border-[#4ea094]'>
            Edit
          </Link>
          <button
            onClick={() => handelDelete(blog?.id)}
            className='px-6 py-1 bg-[#FFE4E6]  text-[#E36A98] font-medium border border-[#FFE4E6] hover:border-[#E36A98]'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

{
  /* {blog?.descripton
                ?.replace(/<[^>]*>?/gm, "")
                ?.split(" ")
                ?.slice(0, 112)
                ?.join(" ")} */
}
