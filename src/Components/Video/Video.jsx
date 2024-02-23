/* eslint-disable no-empty */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Loading } from "../Loading/Loading";

export const Video = () => {
  const navigate = useNavigate();

  // Loading statement
  const [isUpdate, setIsUpdate] = useState(false);
  // form Hook
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // video data load
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["singleSubServiceDetails"],
    queryFn: () => axios.get("single-video/1", {}),
  });

  const videoData = data?.data?.data;

  const handelVideoUpdate = (data) => {
    const video = {
      video: data?.videoURL,
    };

    axios
      .put("/update-video/1", video)
      .then((response) => {
        if (response?.data?.success) {
          toast.success("Update Video Done ");
          reset();
          refetch();
          setIsUpdate(false);
          navigate("/");
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsUpdate(false);
      });
  };
  // loading statement
  if (isUpdate || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className='FormCardBG'>
      <h5 className='fromTitle'>Hero Video</h5>
      <div className='flex justify-center'>
        <video width='320' height='240' controls>
          <source src={videoData?.video} />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=''>
        <form onSubmit={handleSubmit(handelVideoUpdate)}>
          {/* Title */}
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Video link</span>
            </div>
            <input
              type='url'
              placeholder='Enter video URL'
              className='input w-full formInputBox focus:outline-none focus:border-blue'
              {...register("videoURL", {
                required: "Must Need video URL",
              })}
            />
            {errors.videoURL && (
              <p className='text-red mt-1' role='alert'>
                {errors.videoURL?.message}
              </p>
            )}
          </label>
          <div className='mt-5 flex gap-5'>
            <button onClick={() => handelVideoUpdate()} className='btnFill'>
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
