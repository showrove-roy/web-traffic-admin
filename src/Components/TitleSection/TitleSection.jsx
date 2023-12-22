/* eslint-disable react/prop-types */
import { BlueButton } from "../BlueButton/BlueButton";

export const TitleSection = ({ title, link }) => {
  return (
    <>
      <div className='flex justify-between px-10 pb-5 items-center'>
        <h5 className='lg:text-3xl text-lg font-medium text-black-100'>
          {title}
        </h5>
        <BlueButton btnLink={link} btnText={"Add More"} />
      </div>
      {/* Divider */}
      <div className='divider m-0 before:bg-[#D9D9D9] after:bg-[#D9D9D9] '></div>
    </>
  );
};
