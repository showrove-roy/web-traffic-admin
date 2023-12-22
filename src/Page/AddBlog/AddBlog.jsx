import { BlogDescription } from "../../Components/BlogDescription/BlogDescription";

export const AddBlog = () => {
  return (
    <>
      <div className='FormCardBG'>
        <h5 className='fromTitle'>Blog Info</h5>

        <div className=''>
          <form>
            {/* Title */}
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text text-lg font-medium'>Title</span>
              </div>
              <input
                type='text'
                placeholder='Enter Blog Title'
                className='input w-full formInputBox focus:outline-none focus:border-blue'
              />
            </label>

            {/* URL */}
            <label className='form-control w-full mt-5'>
              <div className='label'>
                <span className='label-text text-lg font-medium'>URL</span>
              </div>
              <input
                type='url'
                placeholder='Enter Blog URL'
                className='input w-full formInputBox focus:outline-none focus:border-blue'
              />
            </label>

            {/* Featured Image */}
            <div className='form-control w-full mt-5'>
              <div className='label'>
                <span className='label-text text-lg font-medium'>
                  Featured Image
                </span>
              </div>
              <input
                type='file'
                className='w-full formInputBox focus:outline-none focus:border-blue cursor-pointer'
              />
            </div>

            <div className='mt-5 flex gap-5'>
              <button className='btnFill'>SAVE</button>
              <button className='btnOutline'>CANCEL</button>
            </div>
          </form>
        </div>
      </div>

      <BlogDescription />
    </>
  );
};
