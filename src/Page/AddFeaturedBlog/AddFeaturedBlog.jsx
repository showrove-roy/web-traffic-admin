/* eslint-disable no-empty */
import { useForm } from "react-hook-form";
import { BlogDescription } from "../../Components/BlogDescription/BlogDescription";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Loading } from "../../Components/Loading/Loading";
import { useLoaderData } from "react-router-dom";

export const AddFeaturedBlog = () => {
  const { data } = useLoaderData();
  // set Description
  const [value, setValue] = useState("");
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

  // handel Add Blog
  const handelAddBlog = (data) => {
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
      handelAddBlogDB();
    } catch (error) {}
  };

  // update to database
  const handelAddBlogDB = () => {
    const blog = {
      title: formData.current.title,
      descripton: value,
      picture: url.current,
      catagoryId: data.data.id,
    };

    axios
      .post("/crete-blogs", blog)
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
    <>
      <div className='FormCardBG'>
        <h5 className='fromTitle'>Add Feature Blog For {data?.data?.name} </h5>

        <div className=''>
          <form onSubmit={handleSubmit(handelAddBlog)}>
            {/* Title */}
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text text-lg font-medium'>Title</span>
              </div>
              <input
                type='text'
                placeholder='Enter Blog Title'
                className='input w-full formInputBox focus:outline-none focus:border-blue'
                {...register("title", {
                  required: "Must Need A Title",
                })}
              />
              {errors.title && (
                <p className='text-red mt-1' role='alert'>
                  {errors.title?.message}
                </p>
              )}
            </label>

            {/* Featured Image */}
            <div className='form-control w-full mt-5'>
              <div className='label'>
                <span className='label-text text-lg font-medium'>
                  Featured Image
                </span>
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

            <BlogDescription value={value} setValue={setValue} />

            <div className='mt-5 flex gap-5'>
              <button type='submit' className='btnFill'>
                SAVE
              </button>
              <button className='btnOutline'>CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
