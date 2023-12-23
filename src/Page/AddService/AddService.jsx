import { useForm } from "react-hook-form"


export const AddService = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // handel Add Service
  const handelAddService=(data)=>{
    console.log(data);
  }
  return (
    <div className='FormCardBG'>
      <h5 className='fromTitle'>Add Service</h5>

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
              placeholder='Enter Service Description' {...register("service_description", {
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
            <input
              type='file'
              className='w-full formInputBox focus:outline-none focus:border-blue cursor-pointer'
            />
          </div>

          <div className='mt-5 flex gap-5'>
            <button type="submit" className='btnFill'>SAVE</button>
            <button onClick={()=>reset()} className='btnOutline'>CANCEL</button>
          </div>
        </form>
      </div>
    </div>
  );
};
