/* eslint-disable react/prop-types */
import axios from "axios";
import { Link } from "react-router-dom";
import { Loading } from "../Loading/Loading";

export const DemoTable = ({ currentPosts, refetch, isLoading}) => {
  // Sub Service delete system

  const handelDelete = (id) => {
    const conformation = window.confirm("Want to Delete?");
    if (conformation) {
      axios
        .delete(`deleted-service/${id}`)
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
    <>
    <div className='overflow-x-auto'>
      <table className='table lg:text-base text-black-100'>
        {/* head */}
        <thead>
          <tr className='text-[#00000099] lg:text-base font-medium'>
            <th className='font-semibold'>No.</th>
            <th className='font-semibold'>Service Name</th>
         
            <th className='font-semibold'>Icon</th>
            <th className='font-semibold'>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row  */}

          {currentPosts?.map((sub, i) => (
            <tr key={sub?.id}>
              <th>{i + 1}</th>
              <td>{sub?.subCatagory
.name}</td>
               {/* <td>{sub?.descripton.slice(0, 30)}....</td> */}
               <td>
                <img src={`${sub?. image}`} alt='' className='w-10' />
              </td> 

              <td className='flex gap-2'>
                <Link
                  to={`/update-service/${sub?.id}`}
                  className='px-6 py-1 bg-[#CCFBF1]  text-[#4ea094] font-medium border border-[#CCFBF1] hover:border-[#4ea094]'>
                  Edit
                </Link>
                <button
                  onClick={() => handelDelete(sub?.id)}
                  className='px-6 py-1 bg-[#FFE4E6]  text-[#E36A98] font-medium border border-[#FFE4E6] hover:border-[#E36A98]'>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* pagination */}

   
    
    </>
  );
};
