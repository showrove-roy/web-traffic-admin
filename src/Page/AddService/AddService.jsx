

export const AddService = () => {
  return (
    <div className='FormCardBG'>
      <h5 className='fromTitle'>Add Service</h5>

      <div className=''>
        <form>
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
            />
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
              placeholder='Enter Service Description'></textarea>
          </label>
          {/* Icon */}
          <div className='form-control w-full mt-5'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Icon</span>
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
