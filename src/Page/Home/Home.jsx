import { Link } from "react-router-dom";
import { ServiceSection } from "../../Components/NavBar/ServiceSection/ServiceSection";
import BlogThum from '../../assets/blog thum.svg';

export const Home = () => {
  return (
    <>
      <ServiceSection></ServiceSection>

      <div className="mt-10">
      <div className='w-full  bg-gray rounded-2xl p-5 flex justify-between items-center'>
        <div className="flex gap-5 items-center">
            <img src={`${BlogThum}`} className="max-w-[150px] max-h-[100px] w-full h-full" alt="" />
        <div className="">
            <div className="text-black-100 text-lg ">
                <p className="font-medium">JCI Dhaka Founders Elects Nahid Hasan as 2024 ...</p>
                <p>Dec 09, 2023</p>
            </div>
        </div>
        </div>
       <div className="">
       <div className="flex gap-5 ">
        <Link
                  to='/'
                  className='px-6 py-1 bg-[#CCFBF1]  text-[#4ea094] font-medium border border-[#CCFBF1] hover:border-[#4ea094]'>
                  Edit
                </Link>
                <button className='px-6 py-1 bg-[#FFE4E6]  text-[#E36A98] font-medium border border-[#FFE4E6] hover:border-[#E36A98]'>
                  Delete
                </button>
        </div>
       </div>
      </div>
      </div>
    </>
  );
};
