/* eslint-disable react/prop-types */
import axios from "axios";
import { Link } from "react-router-dom";
import { Loading } from "../Loading/Loading";
export const ServiceTable = ({ services, refetch, isLoading }) => {
  // Service delete system
  const handelDelete = (id) => {
    const conformation = window.confirm("Want to Delete?");
    if (conformation) {
      axios
        .delete(`deleted-category/${id}`)
        .then(() => {
         
        })
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
    <div className='overflow-x-auto'>
      <table className='table lg:text-base text-black-100'>
        {/* head */}
        <thead>
          <tr className='text-[#00000099] lg:text-base font-medium'>
            <th className='font-semibold'>No.</th>
            <th className='font-semibold'>Title</th>
            <th className='font-semibold'>Description</th>
            <th className='font-semibold'>Icon</th>
            <th className='font-semibold'>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, i) => (
            <tr key={service?.id}>
              <th>{i + 1}</th>
              <td>{service?.name}</td>
              <td>{service?.descripton.slice(0,30)}....</td>
              <td>
                <img src={`${service?.picture}`} alt='' className='w-10' />
              </td>
              <td className='flex gap-2'>
                <Link
                  to={`/edit-service/${service?.id}`}
                  className='px-6 py-1 bg-[#CCFBF1]  text-[#4ea094] font-medium border border-[#CCFBF1] hover:border-[#4ea094]'>
                  Edit
                </Link>
                <button
                  onClick={() => handelDelete(service?.id)}
                  className='px-6 py-1 bg-[#FFE4E6]  text-[#E36A98] font-medium border border-[#FFE4E6] hover:border-[#E36A98]'>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
