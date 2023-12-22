import { Link } from "react-router-dom";
import DigitalMarketing from "../../assets/Service Icon/Frame.svg";
export const ServiceTable = () => {
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
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Digital Marketing</td>
            <td>Digital marketing creates...</td>
            <td>
              <img src={`${DigitalMarketing}`} alt='' />
            </td>
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
          <tr>
            <th>2</th>
            <td>Graphics Design</td>
            <td>Digital marketing creates...</td>
            <td>
              <img src={`${DigitalMarketing}`} alt='' />
            </td>
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
        </tbody>
      </table>
    </div>
  );
};
