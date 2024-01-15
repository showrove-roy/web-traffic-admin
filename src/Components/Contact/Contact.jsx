import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

export const Contact = () => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  // Loading statement
  const [isUpdate, setIsUpdate] = useState(false);
  // form Hook
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // load data
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["contact"],
    queryFn: () => axios.get("/all-contact", {}),
  });

  if (isLoading) {
    return <Loading />;
  }

  // store contact data
  let contact = data.data.data;
  // console.log(contact[0]);

  // handel edit contact
  const handelEditContact = (data) => {
    setIsUpdate(true);
    const contact = {
      email: data?.email,
      hours: data?.hours,
      location: data?.location,
      phone: data?.phone,
    };
    console.log(contact);

    axios
      .put("/update-contact/2", contact)
      .then((response) => {
        console.log(response);
        if (response?.data?.success) {
          toast.success("Update Done");
          reset();
          refetch();
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsUpdate(false);
      });
  };

  return (
    <div className='FormCardBG'>
      <h5 className='fromTitle'>Contact Info</h5>

      <div className=''>
        <form onSubmit={handleSubmit(handelEditContact)}>
          {/* Location */}
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Location</span>
            </div>
            <input
              type='text'
              defaultValue={contact[0]?.location}
              placeholder='Enter Location'
              onInputCapture={() => setBtnDisabled(false)}
              className='input w-full formInputBox focus:outline-none focus:border-blue'
              {...register("location", {
                required: "Must Need A Location",
              })}
            />
            {errors.location && (
              <p className='text-red mt-1' role='alert'>
                {errors.location?.message}
              </p>
            )}
          </label>

          {/* Phone */}
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Phone</span>
            </div>
            <input
              type='number'
              defaultValue={contact[0]?.phone}
              placeholder='Enter Phone'
              onInputCapture={() => setBtnDisabled(false)}
              className='input w-full formInputBox focus:outline-none focus:border-blue'
              {...register("phone", {
                required: "Must Need A Phone",
              })}
            />
            {errors.phone && (
              <p className='text-red mt-1' role='alert'>
                {errors.phone?.message}
              </p>
            )}
          </label>
          {/* Email */}
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Email</span>
            </div>
            <input
              type='email'
              defaultValue={contact[0]?.email}
              placeholder='Enter Email'
              onInputCapture={() => setBtnDisabled(false)}
              className='input w-full formInputBox focus:outline-none focus:border-blue'
              {...register("email", {
                required: "Must Need A Email",
              })}
            />
            {errors.email && (
              <p className='text-red mt-1' role='alert'>
                {errors.email?.message}
              </p>
            )}
          </label>
          {/* Our Hours */}
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Our Hours</span>
            </div>
            <input
              type='text'
              defaultValue={contact[0]?.hours}
              placeholder='Enter Our Hours'
              onInputCapture={() => setBtnDisabled(false)}
              className='input w-full formInputBox focus:outline-none focus:border-blue'
              {...register("hours", {
                required: "Must Need A Our Hours",
              })}
            />
            {errors.hours && (
              <p className='text-red mt-1' role='alert'>
                {errors.email?.hours}
              </p>
            )}
          </label>

          <div className='mt-5 flex gap-5'>
            <button
              disabled={btnDisabled}
              type='submit'
              className='btnFill disabled:bg-[#464646] disabled:text-[#c5c2c2]'>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
