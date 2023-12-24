import { Link, Outlet } from "react-router-dom";
import logo from "../assets/Logo.png";
import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loading } from "../Components/Loading/Loading";

export const Main = () => {
  const [showNav, setShowNav] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ["allServices"],
    queryFn: () => axios.get("/all-category", {}),
  });

  if (isLoading) {
    return <Loading />;
  }

  let services = data.data.data;
  const Menu = (
    <>
      <div className='px-8 py-5'>
        <ul className='menu p-0 m-0 text-xl font-medium text-black-100 '>
          <li>
            <Link to='/' className='hover:text-blue'>
              Home
            </Link>
          </li>
          <li>
            <details>
              <summary className='hover:text-blue'>Services</summary>
              <ul className='text-base p-0'>
                {services.map((service, i) => (
                  <li key={i}>
                    <Link to={`/service/${service?.id}`} className='hover:text-blue'>
                      {service?.name.slice(0, 18)}
                      {service?.name?.length >= 18 && "..."}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <Link to='/blog' className='hover:text-blue'>
              Blog
            </Link>
          </li>
        </ul>
      </div>

      <div className='flex items-center flex-col gap-5 mt-20'>
        <Link
          to=''
          className='py-[14px] px-12 text-blue border-2 font-medium border-blue rounded-full hover:btnShadow w-fit text-sm'>
          Log Out
        </Link>
        <Link to='/edit-profile' className=''>
          <FaRegCircleUser className='text-blue text-5xl' />
        </Link>
      </div>
    </>
  );

  return (
    <>
      <nav className='bg-[rgba(0,0,0,0.04)] bg-opacity-30 flex items-center lg:hidden'>
        <div className='maxW1280'>
          <div className='flex justify-between items-center'>
            <div className=''>
              <div className='w-40'>
                <Link>
                  <img src={`${logo}`} className='md:w-full w-2/3' alt='logo' />
                </Link>
              </div>
            </div>
            <div className=''>
              <div className='lg:hidden block'>
                <div className='flex items-center justify-end'>
                  <FiMenu
                    className='text-3xl text-blue cursor-pointer z-50'
                    onClick={() => setShowNav(true)}
                    size={32}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar menu models */}
        <div
          id=''
          className={`  fixed w-full h-screen z-50 left-0 lg:hidden overflow-auto  ${
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
              <div className='max-w-sm mx-auto'>
                <div className='px-8 py-5'>
                  <ul className='menu p-0 m-0 text-lg font-medium text-black-100 '>
                    <li>
                      <Link
                        to='/'
                        className='hover:text-blue'
                        onClick={() => setShowNav(!true)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <details>
                        <summary className='hover:text-blue'>Services</summary>
                        <ul className='text-base p-0'>
                          {services.map((service, i) => (
                            <li key={i}>
                              <Link
                                to='/digital-marketing'
                                className='hover:text-blue'
                                onClick={() => setShowNav(!true)}>
                                {service?.name.slice(0, 18)}
                                {service?.name?.length >= 18 && "..."}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        className='hover:text-blue'
                        onClick={() => setShowNav(!true)}>
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className='flex items-center flex-col gap-5 '>
                  <Link
                    to=''
                    className='py-[14px] px-12 text-blue border-2 font-medium border-blue rounded-full hover:btnShadow w-fit text-sm'
                    onClick={() => setShowNav(!true)}>
                    Log Out
                  </Link>
                  <Link to='/edit-profile' className=''>
                    <FaRegCircleUser
                      className='text-blue text-5xl'
                      onClick={() => setShowNav(!true)}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar end */}

      {/* sidebar and page */}
      <div className='drawer lg:drawer-open'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content xl:p-10 md:p-8 p-5 bg-[#F2F2F2]'>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className='drawer-side'>
          <div className='xl:w-80 w-72 min-h-full bg-gray '>
            {/* Sidebar content here */}
            <div className='px-12 pb-8 pt-10'>
              <Link to='/'>
                <img src={`${logo}`} alt='' />
              </Link>
            </div>
            {/* Divider */}
            <div className='divider m-0 before:bg-[#D9D9D9] after:bg-[#D9D9D9] '></div>
            {/* Menu */}
            {Menu}
          </div>
        </div>
      </div>
      {/* Notification toaster */}
      <Toaster
        toastOptions={{
          duration: 5000,
        }}
      />
    </>
  );
};
