/* eslint-disable no-empty */
import { useState } from "react";
import toast from "react-hot-toast";

export const Video = () => {
  // image store state
  const [image, setImage] = useState(null);
 

  const handelVideoUpdate = () => {
    console.log(image);
    saveImage()
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
      console.log(cloudData.url);
    } catch (error) {}
  };
  return (
    <div className='FormCardBG'>
      <h5 className='fromTitle'>Hero Video</h5>
      <div className=''>
        <input
          id='file-upload'
          type='file'
          accept='video/*'
          className='w-full formInputBox focus:outline-none focus:border-blue cursor-pointer'
          onChange={(e) => setImage(e.target.files[0])}
        />
        <div className='mt-5 flex gap-5'>
          <button onClick={() => handelVideoUpdate()} className='btnFill'>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};
