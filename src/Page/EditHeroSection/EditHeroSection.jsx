/* eslint-disable no-empty */
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loading } from "../../Components/Loading/Loading";
import axios from "axios";

export const EditHeroSection = () => {
  // Loading statement
  const [isUpdate, setIsUpdate] = useState(false);
  // image store state
  const [image, setImage] = useState(null);
  const url = useRef("");
  const formData = useRef("");
  // form Hook
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // handel Add Banner
  const handelAddBanner = (data) => {
    setIsUpdate(true);
    formData.current = data;
    saveImage();
  };

  // image upload system
  const saveImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "myCloud");
    data.append("cloud_name", "dldccdcyb");

    try {
      if (image === null) {
        return toast.error("Please Upload image");
      }

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dldccdcyb/image/upload",
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
      title: formData.current.title,
      descripton: formData.current.banner_description,
      picture: url.current,
    };

    axios
      .post("/create-header", banner)
      .then((response) => {
        if (response?.data?.success) {
          toast.success("Added Done");
          reset();
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsUpdate(false);
      });
  };
  // loading statement
  if (isUpdate) {
    return <Loading></Loading>;
  }
  return (
    <div className='FormCardBG'>
      <h5 className='fromTitle'>Edit Hero Section</h5>

      <div className=''>
        <form onSubmit={handleSubmit(handelAddBanner)}>
          {/* Title */}
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Title</span>
            </div>
            <input
              type='text'
              placeholder='Enter Title'
              className='input w-full formInputBox focus:outline-none focus:border-blue'
              {...register("title", {
                required: "Must Need Title",
              })}
            />
            {errors.title && (
              <p className='text-red mt-1' role='alert'>
                {errors.title?.message}
              </p>
            )}
          </label>

          {/*Description */}
          <label className='form-control mt-5'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>
                Description
              </span>
            </div>
            <textarea
              className='textarea min-h-28 formInputBox focus:outline-none focus:border-blue'
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
            <input
              id='file-upload'
              type='file'
              accept='image/*'
              className='w-full formInputBox focus:outline-none focus:border-blue cursor-pointer'
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          <div className='mt-5 flex gap-5'>
            <button type='submit' className='btnFill'>
              SAVE
            </button>
            <button type='reset' className='btnOutline'>
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
