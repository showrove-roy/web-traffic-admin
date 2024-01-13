import { useForm } from "react-hook-form";
import { useAuth } from "../../Contexts/AuthProvider";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ForgetPassword = () => {
  // error message storage
  const [loginError, setLoginError] = useState("");
  //get Authentication function
  const { resetPassword, setLoading } = useAuth();

  //  show email sent message
  const [showMess, setShowMess] = useState(false);
  // get From-hook function
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // ForgetPassword From submit or user ForgetPassword handel
  const handleForgetPassword = (data) => {
    setLoginError("");
    resetPassword(data.email)
      .then(() => {
        reset();
        setShowMess(true)
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
    <section className='flex justify-center items-center h-screen'>
      {showMess ? (
        <div className=''>
          <p className='md:text-2xl text-xl text-blue text-center'>
            Email Sent Successfully,
            <br /> Check your email!
          </p>

          <div className="mt-5 flex justify-center">
          <Link to='/login' className="btn" >Login</Link>
          </div>
        </div>
      ) : (
        <div className=''>
          <h5 className='lg:text-3xl md:text-2xl text-xl font-bold text-blue mb-10'>
            Forget Password
          </h5>
          <div className=''>
            {loginError && (
              <p className='text-error my-5 capitalize text-center font-semibold'>
                {loginError}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit(handleForgetPassword)}>
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
            <div className='mt-5 flex justify-center'>
              <input
                type='submit'
                value='Send Email'
                className='bg-blue text-white text-center py-3 px-8 rounded-full btnShadow hover:shadow-none cursor-pointer'
              />
            </div>
          </form>
        </div>
      )}
    </section>
  );
};
