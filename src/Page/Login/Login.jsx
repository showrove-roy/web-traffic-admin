import { useForm } from "react-hook-form";
import LoginPic from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthProvider";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export const Login = () => {
  let navigate = useNavigate();

  // error message storage
  const [loginError, setLoginError] = useState("");
  //get Authentication function
  const { logIN, setLoading } = useAuth();

  // password hide show state
  const [isShow, setIsShow] = useState(false);

  // get From-hook function
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Login From submit or user Login handel
  const handleLogin = (data) => {
    setLoginError("");
    logIN(data.email, data.password)
      .then(() => {
        navigate("/");
        reset();
      })
      .catch((error) => {
        const errorMessage = error.message.split("/")[1].split(")");
        setLoginError(errorMessage[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <section className='maxW1280 mb-10'>
        <h2 className='md:text-5xl text-3xl font-semibold text-[#263238] text-center mt-5 '>
          <span className='text-blue'>Login </span> Dashboard
        </h2>

        <div className=''>
          {loginError && (
            <p className='text-error my-5 capitalize text-center font-semibold'>
              {loginError}
            </p>
          )}
        </div>

        <div className='mt-5 flex justify-between items-center flex-col-reverse sm:flex-row gap-10'>
          <div className='sm:w-1/2 w-full'>
            <div className='max-h-[30rem] max-w-[30rem] px-5 md:px-0 mx-auto'>
              <div className='w-full h-full getInTouchBg md:px-12 px-5 md:py-20 py-10'>
                <form onSubmit={handleSubmit(handleLogin)}>
                  <input
                    type='email'
                    placeholder='Enter Your Email'
                    className='input w-full formInputBox focus:outline-none focus:border-blue'
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                  />
                  {errors.email && (
                    <p className='text-red mt-1' role='alert'>
                      {errors.email?.message}
                    </p>
                  )}
                  <div className='my-3 md:my-8'>
                    <div className='flex items-center relative'>
                      <input
                        type={isShow ? "text" : "password"}
                        placeholder='Enter Your Password'
                        className='input w-full formInputBox focus:outline-none focus:border-blue '
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password Length Must be 6 Characters",
                          },
                        })}
                      />
                      <div className='absolute right-3 cursor-pointer text-3xl text-[#878787]'>
                        {isShow ? (
                          <IoIosEyeOff onClick={() => setIsShow(!isShow)} />
                        ) : (
                          <IoIosEye onClick={() => setIsShow(!isShow)} />
                        )}
                      </div>
                    </div>
                    {errors.password && (
                      <p className='text-red mt-1' role='alert'>
                        {errors.password?.message}
                      </p>
                    )}
                  </div>

                  <div className=''>
                    <input
                      type='submit'
                      value='Login'
                      className='bg-blue text-white text-center py-4 px-12 rounded-full btnShadow hover:shadow-none w-full cursor-pointer'
                    />
                  </div>
                  <div className='flex justify-center mt-6'>
                    <Link to='/forget-password' className='hover:text-blue'>
                      Forget Password
                    </Link>
                  </div>
                </form>
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
