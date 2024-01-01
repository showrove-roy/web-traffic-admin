/* eslint-disable no-empty */
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loading } from "../../Components/Loading/Loading";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

export const EditService = () => {
  const serviceData = useLoaderData();
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

  // service data load
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["singleServiceDetails"],
    queryFn: () => axios.get(`/single-category/${id}`, {}),
  });

  // store blog data
  let service;
  if (serviceData?.data?.success) {
    service = serviceData?.data?.data;
  } else {
    service = data?.data?.data;
  }

  // handel Add Service
  const handelAddService = (data) => {
    setIsUpdate(true);
    formData.current = data;
    // console.log(image);
    if (image) {
      saveImage();
    } else {
      url.current = service?.picture;
      handelAddServiceDB();
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
      handelAddServiceDB();
    } catch (error) {}
  };

  // update to database
  const handelAddServiceDB = () => {
    const service = {
      name: formData.current.service_name,
      descripton: formData.current.service_description,
      picture: url.current,
    };
    
    axios
      .put(`/update-category/${id}`, service)
      .then((response) => {
        if (response?.data?.success) {
          toast.success("Done");
          reset();
          refetch();
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

  //   console.log(url.current);
  return (
    <div className='FormCardBG'>
    <ScrollToTop/>
      <h5 className='fromTitle'>Edit Service</h5>

      <div className=''>
        <form onSubmit={handleSubmit(handelAddService)}>
          {/* Service Name */}
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>
                Service Name
              </span>
            </div>
            <input
              type='text'
              defaultValue={service?.name}
              placeholder='Enter Service Name'
              className='input w-full formInputBox focus:outline-none focus:border-blue'
              {...register("service_name", {
                required: "Must Need Service Name",
              })}
            />
            {errors.service_name && (
              <p className='text-red mt-1' role='alert'>
                {errors.service_name?.message}
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
              defaultValue={service?.descripton}
              placeholder='Enter Service Description'
              {...register("service_description", {
                required: "Must Need Service Description",
              })}></textarea>
            {errors.service_description && (
              <p className='text-red mt-1' role='alert'>
                {errors.service_description?.message}
              </p>
            )}
          </label>
          {/* Icon */}
          <div className='form-control w-full mt-5'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Icon</span>
            </div>

            <div className='m-5'>
              <img src={service?.picture} alt='' />
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
            <button type='reset' className='btnOutline'>
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
