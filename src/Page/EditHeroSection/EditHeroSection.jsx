/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loading } from "../../Components/Loading/Loading";
import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const EditHeroSection = () => {
  const heroData = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

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

  // define Hero data store
  let bannerData;

  // Hero data load
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["singleSubServiceDetails"],
    queryFn: () => axios.get(`/single-category/${id}`, {}),
  });

  // store sub service data
  if (heroData?.data?.success) {
    bannerData = heroData?.data?.data;
  } else {
    bannerData = data?.data?.data;
  }


  // handel Add Banner
  const handelAddBanner = (data) => {
    setIsUpdate(true);
    formData.current = data;
    if (image) {
      saveImage();
    } else {
      url.current = bannerData?.Header[0]?.picture;
      handelAddBannerDB();
    }
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
      catagoryId: bannerData?.id,
    };

    axios
      .put(`update-header/${bannerData?.Header[0]?.id}`, banner)
      .then((response) => {
        console.log(response);
        if (response?.data?.success) {
          toast.success("Done");
          reset();
          refetch();
          setIsUpdate(false);
          navigate(`/service/${id}`);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsUpdate(false);
      });
  };

  // handel cancel

  const handelCancel = () => {
    const conformation = window.confirm("Want to Cancel?");
    if (conformation) {
      navigate(`/service/${id}`);
    }
  };

  // loading statement
  if (isUpdate || isLoading) {
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
              defaultValue={bannerData?.Header[0]?.title}
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
              className='textarea h-40 formInputBox focus:outline-none focus:border-blue'
              defaultValue={bannerData?.Header[0]?.descripton}
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
              <img
                src={bannerData?.Header[0]?.picture}
                alt=''
                className='w-full'
              />
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
            <div onClick={() => handelCancel()} className='btnOutline'>
              CANCEL
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
