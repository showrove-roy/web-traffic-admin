/* eslint-disable no-empty */
import { useState } from "react";
import toast from "react-hot-toast";

export const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
  
    const saveImage = async (event) => {
      event.preventDefault();
  
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
        setUrl(cloudData.url);
        toast.success("Image Upload Successfully");
      } catch (error) {}
    };
  
    console.log(url);
  
    return (
      <>
  
  
        <form action=''>
          <div className='form-control w-full mt-5'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>
                Featured Image
              </span>
            </div>
  
            {url ? (
               <img src={`${url}`} className='w-fit h-96' alt='' />
            ) : (
              <input
                id='file-upload'
                type='file'
                accept="image/*"
                className='w-full formInputBox focus:outline-none focus:border-blue cursor-pointer'
                onChange={(e) => setImage(e.target.files[0])}
              />
            )}
          </div>
          <div className='mt-5 flex gap-5'>
            <button className='btnFill' onClick={saveImage}>
              SAVE
            </button>
            <button type='reset' onClick={()=>setUrl('')} className='btnOutline'>
              CANCEL
            </button>
          </div>
        </form>
      </>
    );
  };