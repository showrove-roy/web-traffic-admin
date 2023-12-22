import { Link } from "react-router-dom";

export const SubServiceTable = () => {
  return (
    <div className='overflow-x-auto'>
      <table className='table lg:text-base text-black-100'>
        {/* head */}
        <thead>
          <tr className='text-[#00000099] lg:text-base font-medium'>
            <th className='font-semibold'>No.</th>
            <th className='font-semibold'>Title</th>
            <th className='font-semibold'>URL</th>
            <th className='font-semibold'>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Digital Marketing</td>
            <td>wtm.com/digital_marketing</td>
            
            <td className='flex gap-2'>
              <Link
                to='/'
                className='px-6 py-1 bg-[#CCFBF1]  text-[#4ea094] font-medium border border-[#CCFBF1] hover:border-[#4ea094]'>
                Edit
              </Link>
              <button className='px-6 py-1 bg-[#FFE4E6]  text-[#E36A98] font-medium border border-[#FFE4E6] hover:border-[#E36A98]'>
                Delete
              </button>
            </td>
          </tr>
          {/* row 2 */}
          
        </tbody>
      </table>
    </div>
  );
};
