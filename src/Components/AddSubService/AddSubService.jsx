/* eslint-disable no-empty */
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loading } from "../../Components/Loading/Loading";
import axios from "axios";
import { useLoaderData} from "react-router-dom";
export const AddSubService = () => {
  const data = useLoaderData();

  let service = {
    id: data?.data?.data?.id,
    name: data?.data?.data?.name,
  };
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

  // handel Add Service
  const handelAddSubService = (data) => {
    console.log("🚀 ~ file: AddSubService.jsx:31 ~ handelAddSubService ~ data:", data)
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
      handelAddSubServiceDB();
    } catch (error) {}
  };

  // update to database
  const handelAddSubServiceDB = () => {
    const subService = {
      name: formData.current.subService_name,
      descripton: formData.current.subService_description,
      picture: url.current,
      catagoryId: service.id,
    };

    console.log(subService);

    axios
      .post("/crete-subcategory", subService)
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
      <h5 className='fromTitle'>Add Sub Service for {service?.name}</h5>

      <div className=''>
        <form onSubmit={handleSubmit(handelAddSubService)}>
          {/* Service Name */}
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>
                Service Name
              </span>
            </div>
            <input
              type='text'
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
                Description
              </span>
            </div>
            <textarea
              className='textarea min-h-28 formInputBox focus:outline-none focus:border-blue'
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
