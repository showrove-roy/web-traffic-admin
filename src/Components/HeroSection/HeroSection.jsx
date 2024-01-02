/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loading } from "../../Components/Loading/Loading";
import axios from "axios";
import { BlueButton } from "../BlueButton/BlueButton";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const HeroSection = () => {
  const { id } = useParams();
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

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["singleServiceDetails"],
    queryFn: () => axios.get(`/single-category/${id}`, {}),
  });

  let service = data?.data?.data;

  if (service.id != id) {
    refetch();
  }
  const [inputData, setInputData] = useState(service?.name);

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
      title: formData.current.title,
      descripton: formData.current.banner_description,
      picture: url.current,
      catagoryId: service?.id,
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
  if (isUpdate || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className='FormCardBG'>
      <div className='flex justify-between  pb-5 items-center'>
        <h5 className='lg:text-3xl text-lg font-medium text-black-100'>
          Hero Section
        </h5>
        {service?.Header[0]?.title && (
        <BlueButton
          btnLink={`edit-hero-section/${service?.id}`}
          btnText={"Edit"}
        />)}
      </div>

      <div className=''>
        <form onSubmit={handleSubmit(handelAddBanner)}>
          {/* Title */}
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Title</span>
            </div>
            {service?.Header[0]?.title && (
              <div className='ps-5'>
                <p className='font-medium'>{service?.Header[0]?.title}</p>
              </div>
            )}

            {!service?.Header[0]?.title && (
              <input
                type='text'
                placeholder='Enter Title'
                value={inputData}
                onInput={(e) => setInputData(e.target.value)}
                className='input w-full formInputBox focus:outline-none focus:border-blue'
                {...register("title", {
                  required: "Must Need Title",
                })}
              />
            )}
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

            {service?.Header[0]?.descripton && (
              <div className='ps-5'>
                <p>{service?.Header[0]?.descripton}</p>
              </div>
            )}
            {!service?.Header[0]?.descripton && (
              <textarea
                className='textarea min-h-28 formInputBox focus:outline-none focus:border-blue'
                placeholder='Enter Description'
                {...register("banner_description", {
                  required: "Must Need Description",
                })}></textarea>
            )}
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
            {service?.Header[0]?.picture && (
              <div className='ps-5 mb-5 max-w-96'>
                <img
                  src={service?.Header[0]?.picture}
                  alt=''
                  className='w-full'
                />
              </div>
            )}
            {!service?.Header[0]?.picture && (
              <input
                id='file-upload'
                type='file'
                accept='image/*'
                className='w-full formInputBox focus:outline-none focus:border-blue cursor-pointer'
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            )}
          </div>

          {!service?.Header[0]?.picture && (
            <div className='mt-5 flex gap-5'>
              <button type='submit' className='btnFill'>
                SAVE
              </button>
              <button type='reset' className='btnOutline'>
                CANCEL
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
