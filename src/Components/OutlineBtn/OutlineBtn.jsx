/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const OutlineBtn = ({ btnLink, btnText }) => {
  return (
    <Link
      to={`/${btnLink}`}
      className='py-3 px-8 text-blue border-2 font-medium border-blue rounded-full hover:btnShadow w-fit text-sm'>
      {btnText}
    </Link>
  );
};
