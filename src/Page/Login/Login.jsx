import { Link } from "react-router-dom";
import { NavBar } from "../../Components/NavBar/NavBar";
import LoginPic from "../../assets/login.svg";

export const Login = () => {
  return (
    <>
      <NavBar></NavBar>
      <section className='maxW1280 mb-10'>
        <h2 className='md:text-5xl text-3xl font-semibold text-[#263238] text-center mt-5 '>
          <span className='text-blue'>Login </span> Dashboard
        </h2>

        <div className='mt-5 flex justify-between items-center flex-col-reverse sm:flex-row gap-10'>
          <div className='sm:w-1/2 w-full'>
            <div className='max-h-[30rem] max-w-[30rem] px-5 md:px-0 mx-auto'>
              <div className='w-full h-full getInTouchBg md:px-12 px-5 md:py-20 py-10'>
                <form action=''>
                  <input
                    type='email'
                    placeholder='Enter Your Email'
                    className='input w-full formInputBox focus:outline-none focus:border-blue'
                  />
                  <input
                    type='password'
                    placeholder='Enter Your Password'
                    className='input w-full formInputBox focus:outline-none focus:border-blue my-3 md:my-8'
                  />
                  <div className=''>
                    <input
                      type='button'
                      value='Login'
                      className='bg-blue text-white text-center py-4 px-12 rounded-full btnShadow hover:shadow-none w-full cursor-pointer'
                    />
                  </div>
                </form>
                <div className='mt-3 flex justify-center'>
                  <Link to='/' className=''>
                    Forget Password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:w-1/2 w-full '>
            <div className='max-h-[30rem] max-w-[30rem] mx-auto'>
              <img
                src={`${LoginPic}`}
                alt=''
                className='object-cover h-full w-full'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
