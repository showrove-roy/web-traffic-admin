/* eslint-disable no-empty */
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loading } from "../../Components/Loading/Loading";
import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
export const EditDemo = () => {
  const subServiceData = useLoaderData();
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

  // define subservice store
  let subService;
  

  // subservice data load
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["singleServiceDetails"],
    queryFn: () => axios.get(`/single-service/${id}`, {}),
  });

  // store sub service data
  if (subServiceData?.data?.success) {
    subService = subServiceData?.data?.data;
  } else {
    subService = data?.data?.data;
  }

  // handel Add subService
  const handelAddSubService = (data) => {
    setIsUpdate(true);
    formData.current = data;
    if (image) {
      saveImage();
    } else {
      url.current = subService?.picture;
      handelAddSubServiceDB();
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
      handelAddSubServiceDB();
    } catch (error) {}
  };

  // update to database
  const handelAddSubServiceDB = () => {
    const subServiceData = {
      image: url.current || subService?.image ,
      link: formData.current.subService_description || subService?.link,
      price: formData.current.subService_name || subService?.
      price,
      subCatagoryId: subService?.subCatagoryId,
    };

    axios
      .put(`/update-service/${id}`, subServiceData)
      .then((response) => {
        if (response?.data?.success) {
          toast.success("Done");
          reset();
          refetch();
          setIsUpdate(false);
           navigate('/');
        }
      })
      .catch((err) => console.log(err))
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
      <h5 className='fromTitle'>Edit Demo</h5>

      <div className=''>
        <form onSubmit={handleSubmit(handelAddSubService)}>
          {/* Service Name */}
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>
               demo price
              </span>
            </div>
            <input
              type='number'
              defaultValue={subService?.price}
              placeholder='Enter Service Name'
              className='input w-full formInputBox focus:outline-none focus:border-blue'
              {...register("subService_name", {
                required: "Must Need Service Name",
              })}
            />
            {errors.subService_name && (
              <p className='text-red mt-1' role='alert'>
                {errors.subService_name?.message}
              </p>
            )}
          </label>

          {/*Description */}
          <label className='form-control mt-5'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>
                Link
              </span>
            </div>
            <textarea
              className='textarea min-h-28 formInputBox focus:outline-none focus:border-blue'
              defaultValue={subService?.link}
              placeholder='Enter Service Description'
              {...register("subService_description", {
                required: "Must Need Sub-Service Description",
              })}></textarea>
            {errors.subService_description && (
              <p className='text-red mt-1' role='alert'>
                {errors.subService_description?.message}
              </p>
            )}
          </label>
          {/* Icon */}
          <div className='form-control w-full mt-5'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Icon</span>
            </div>
            <div className='m-5'>
              <img src={subService?.
image
} alt='' />
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
