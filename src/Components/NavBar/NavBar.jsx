import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const Menu = (
    <>
      <li className='px-4'>
        <Link to='/' className='text-black-10 font-semibold'>
          <form method='dialog'>
            <button>Home</button>
          </form>
        </Link>
      </li>
      <li className='px-4'>
        <Link to='/about' className='text-black-10 font-semibold'>
          About
        </Link>
      </li>
      <li className='px-4'>
        <Link to='/service' className='text-black-10 font-semibold'>
          Services
        </Link>
      </li>
      <li className='px-4'>
        <Link to='/blog' className='text-black-10 font-semibold'>
          Blog
        </Link>
      </li>
      <li className=''>
        <Link to='/contact' className='text-white font-semibold bg-blue py-[15px] px-[50px] rounded-full cursor-pointer btnShadow'>
          Contacts
        </Link>
      </li>
    </>
  );
  return (
    <nav className={` bg-[rgba(0,0,0,0.04)] bg-opacity-30 flex items-center `}>
      <div className='maxW1280'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <div className='w-40'>
              <Link>
                <img src={`${Logo}`} className='md:w-full w-2/3' alt='logo' />
              </Link>
            </div>
          </div>
          <div className=''>
            <div className='md:hidden block'>
              <div className='flex items-center justify-end'>
                <FiMenu
                  className='text-3xl text-blue cursor-pointer z-50'
                  onClick={() => setShowNav(true)}
                  size={32}
                />
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='flex items-center h-full justify-end'>
                <div className=''>
                  <ul className='flex justify-between items-center'>{Menu}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar menu models */}
      <div
        id=''
        className={`  fixed w-full h-screen z-50 left-0 md:hidden overflow-auto  ${
          showNav ? "top-0 left-0 " : "-top-[1000px] left-0"
        }`}>
        <div className=' bg-white h-screen p-3 rounded-none overflow-scroll'>
          <div className='flex items-end justify-end'>
            <IoClose
              className='   text-3xl text-blue cursor-pointer'
              size={32}
              onClick={() => setShowNav(!true)}
            />
          </div>
          <div className='my-10'>
            <ul className='flex justify-between items-center flex-col gap-y-3'>
              <li className='px-4'>
                <Link
                  to='/'
                  className='text-black-10 font-semibold'
                  onClick={() => setShowNav(!true)}>
                  Home
                </Link>
              </li>
              <li className='px-4'>
                <Link
                  to='/about'
                  className='text-black-10 font-semibold'
                  onClick={() => setShowNav(!true)}>
                  About
                </Link>
              </li>
              <li className='px-4'>
                <Link
                  to='/service'
                  className='text-black-10 font-semibold'
                  onClick={() => setShowNav(!true)}>
                  Services
                </Link>
              </li>
              <li className='px-4' onClick={() => setShowNav(!true)}>
                <Link to='/blog' className='text-black-10 font-semibold'>
                  Blog
                </Link>
              </li>
              <li className='bg-blue py-[15px] px-[50px] rounded-full cursor-pointer btnShadow'>
                <Link
                  to='/contact'
                  className='text-white font-semibold'
                  onClick={() => setShowNav(!true)}>
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
