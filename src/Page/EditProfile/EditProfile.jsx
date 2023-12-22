export const EditProfile = () => {
  return (
    <div className='FormCardBG'>
      <h5 className='fromTitle'>Edit Profile</h5>

      <div className=''>
        <form>
          {/* Profile Name */}
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Profile Name</span>
            </div>
            <input
              type='text'
              placeholder='Enter Profile Name'
              className='input w-full formInputBox focus:outline-none focus:border-blue'
            />
          </label>

          {/*Description */}
          <label className='form-control mt-5'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>
              Profile Description
              </span>
            </div>
            <textarea
              className='textarea min-h-20 formInputBox focus:outline-none focus:border-blue'
              placeholder='Enter Profile Description'></textarea>
          </label>
          {/* Image */}
          <div className='form-control w-full mt-5'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Profile Image</span>
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
  );
};
