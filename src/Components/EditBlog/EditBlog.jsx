/* eslint-disable no-empty */
import { useForm } from "react-hook-form";
import { BlogDescription } from "../../Components/BlogDescription/BlogDescription";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Loading } from "../../Components/Loading/Loading";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const EditBlog = () => {
  const blogData = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  // Loading statement
  const [isUpdate, setIsUpdate] = useState(false);

  // set Description
  const [value, setValue] = useState("");
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

  // define sBlog store
  let sBlog;

  // Blog data load
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["singleBogDetails"],
    queryFn: () => axios.get(`/single-blog/${id}`, {}),
  });
  // store Blog data
  if (blogData?.data?.success) {
    sBlog = blogData?.data?.data;
  } else {
    sBlog = data?.data?.data;
  }

  // handel Add Blog
  const handelAddBlog = (data) => {
    setIsUpdate(true);
    formData.current = data;
    if (image) {
      saveImage();
    } else {
      url.current = sBlog?.picture;
      handelAddBlogDB();
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
      handelAddBlogDB();
    } catch (error) {}
  };

  // update to database
  const handelAddBlogDB = () => {
    const blog = {
      title: formData.current.title,
      descripton: value,
      picture: url.current,
    };
    axios
      .put("/update-blog", blog)
      .then((response) => {
        if (response?.data?.success) {
          toast.success("Added Done");
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

  return (
    <>
      <div className='FormCardBG'>
        <h5 className='fromTitle'>Edit Blog Info</h5>

        <div className=''>
          <form onSubmit={handleSubmit(handelAddBlog)}>
            {/* Title */}
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text text-lg font-medium'>Title</span>
              </div>
              <input
                type='text'
                defaultValue={sBlog?.title}
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
             
              <div className='mb-5 max-w-40'>
                <img src={sBlog?.picture} alt='' className='w-full' />
              </div>
              <input
                id='file-upload'
                type='file'
                accept='image/*'
                className='w-full formInputBox focus:outline-none focus:border-blue cursor-pointer'
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <BlogDescription
              value={value}
              insData={sBlog?.descripton}
              setValue={setValue}
            />

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
