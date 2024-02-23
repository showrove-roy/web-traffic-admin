/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-empty */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loading } from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

export const GrowYour = () => {
  // Loading statement
  const [isUpdate, setIsUpdate] = useState(false);
  // image store state
  const [image, setImage] = useState(null);
  const url = useRef("");
  const formData = useRef("");
  const navigate = useNavigate();
  // form Hook
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  // Hero data load
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["whyWeb"],
    queryFn: () => axios.get("single-grow/1", {}),
  });

  let bannerData = data?.data?.data;

  // handel Add Banner
  const handelAddBanner = (data) => {
    //
    setIsUpdate(true);
    formData.current = data;
    if (image) {
      saveImage();
    } else {
      url.current = bannerData?.image;
      handelAddBannerDB();
    }
  };

  // image upload system
  const saveImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "web-traffic");
    data.append("cloud_name", "dyxl0lsly");

    try {
      if (image === null) {
        return toast.error("Please Upload image");
      }

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dyxl0lsly/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const cloudData = await res.json();
      url.current = cloudData.url;
      handelAddBannerDB();
    } catch (error) {}
  };

  // update to database
  const handelAddBannerDB = () => {
    const banner = {
      titel: formData.current.banner_description,
      image: url.current,
    };

    axios
      .put("update-grow/1", banner)
      .then((response) => {
        if (response?.data?.success) {
          toast.success("Done");
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
      <h5 className='fromTitle'>Edit 'Grow Your' section</h5>

      <div className=''>
        <form onSubmit={handleSubmit(handelAddBanner)}>
          {/*Description */}
          <label className='form-control mt-5'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>
                Description
              </span>
            </div>
            <textarea
              className='textarea min-h-48 formInputBox focus:outline-none focus:border-blue'
              defaultValue={bannerData?.titel}
              placeholder='Enter Description'
              {...register("banner_description", {
                required: "Must Need Description",
              })}></textarea>
            {errors.banner_description && (
              <p className='text-red mt-1' role='alert'>
                {errors.banner_description?.message}
              </p>
            )}
          </label>
          {/* Image */}
          <div className='form-control w-full mt-5'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Image</span>
            </div>
            <div className='mb-5 max-w-60'>
              <img src={bannerData?.image} alt='' className='w-full' />
            </div>
            <input
              id='file-upload'
              type='file'
              accept='image/*'
              className='w-full formInputBox focus:outline-none focus:border-blue cursor-pointer'
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className='mt-5 flex gap-5'>
            <button type='submit' className='btnFill'>
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
