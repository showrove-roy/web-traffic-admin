export const AddFAQ = () => {
  return (
    <div className='FormCardBG'>
      <h5 className='fromTitle'>
        Add FAQ
      </h5>

      <div className=''>
        <form>
          {/* Question */}
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Question</span>
            </div>
            <input
              type='text'
              placeholder='Enter Your Question'
              className='input w-full formInputBox focus:outline-none focus:border-blue'
            />
          </label>

          {/* Message box */}
          <label className='form-control mt-5'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Answer</span>
            </div>
            <textarea
              className='textarea min-h-20 formInputBox focus:outline-none focus:border-blue'
              placeholder='Enter Your Answer'></textarea>
          </label>

          <div className='mt-5 flex gap-5'>
            <button className='btnFill'>SAVE</button>
            <button className='btnOutline'>CANCEL</button>
          </div>
        </form>
      </div>
    </div>
  );
};
