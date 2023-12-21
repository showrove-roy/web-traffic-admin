import { Link, Outlet } from "react-router-dom";
import logo from "../assets/Logo.png";
import { FaRegCircleUser } from "react-icons/fa6";


export const Main = () => {
  return (
    <>

    
      <div className='drawer lg:drawer-open'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col items-center justify-center'>
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
            <div className='divider m-0 before:bg-[#D9D9D9] after:bg-[#D9D9D9] '></div>

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
                      <li>
                        <Link to='/' className='hover:text-blue'>
                          Digital Marketing
                        </Link>
                      </li>
                      <li>
                        <Link to='/' className='hover:text-blue'>
                          Graphics Design
                        </Link>
                      </li>
                      <li>
                        <Link to='/' className='hover:text-blue'>
                          Content Marketing
                        </Link>
                      </li>
                      <li>
                        <Link to='/' className='hover:text-blue'>
                          Search Engine Opt...
                        </Link>
                      </li>
                      <li>
                        <Link to='/' className='hover:text-blue'>
                          Social Media Mark...
                        </Link>
                      </li>
                      <li>
                        <Link to='/' className='hover:text-blue'>
                          Web Design & Dev...
                        </Link>
                      </li>
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
              <Link to='' className=''>
                <FaRegCircleUser  className="text-blue text-5xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
