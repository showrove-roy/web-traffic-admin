/* eslint-disable react/prop-types */
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export const FAQTable = ({ faqs, refetch }) => {
  // FAQ delete system
  const handelDeleteFAQ = (id) => {
    const conformation = window.confirm("Want to Delete?");
    if (conformation) {
      axios
        .delete(`/deleted-FAQ/${id}`)
        .then((response) => {
          if (response?.data?.success) {
            toast.success("Delete successfully");
            refetch();
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {});
    }
  };

  return (
    <div className='overflow-x-auto'>
      <table className='table lg:text-base text-black-100'>
        {/* head */}
        <thead>
          <tr className='text-[#00000099] lg:text-base font-medium'>
            <th className='font-semibold'>No.</th>
            <th className='font-semibold'>FAQ</th>
            <th className='font-semibold'>Answer</th>
            <th className='font-semibold'>Action</th>
          </tr>
        </thead>
        <tbody>
          {faqs.map((faq, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{faq?.Question}</td>
              <td>{faq?.Answer.slice(0, 30)}....</td>
              <td className='flex gap-2'>
                <Link
                  to='/'
                  className='px-6 py-1 bg-[#CCFBF1]  text-[#4ea094] font-medium border border-[#CCFBF1] hover:border-[#4ea094]'>
                  Edit
                </Link>
                <button
                  onClick={() => handelDeleteFAQ(faq?.id)}
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
