import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const BlueButton = ({ btnLink, btnText }) => {
  return (
    <Link
      to={`/${btnLink}`}
      className='bg-blue text-white text-center py-3 px-10 rounded-full btnShadow hover:shadow-none'>
      {btnText}
    </Link>
  );
};
