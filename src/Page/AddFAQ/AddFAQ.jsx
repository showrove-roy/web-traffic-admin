import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData} from "react-router-dom";
import { Loading } from "../../Components/Loading/Loading";
import axios from "axios";
import toast from "react-hot-toast";

export const AddFAQ = () => {

  // Loading statement
  const [isUpdate, setIsUpdate] = useState(false);

  const data = useLoaderData();

  let service = {
    id: data?.data?.data?.id,
    name: data?.data?.data?.name,
  };
  // form Hook
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Handel add FAQ
  const handelAddFAQ = (data) => {
    const faQ = {
      Question:data?.question,
      Answer: data?.answer,
      catagoryId: service.id,
    };
    axios
      .post("/crete-FAQ", faQ)
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

  // handel form reset
  const formReset = () => {
    const conformation = window.confirm("Want to Reset?");
    if (conformation) {
      reset();
    }
  };

    // loading statement
    if (isUpdate) {
      return <Loading></Loading>;
    }
  return (
    <div className='FormCardBG'>
      <h5 className='fromTitle'>Add FAQ for {service?.name}</h5>

      <div className=''>
        <form onSubmit={handleSubmit(handelAddFAQ)}>
          {/* Question */}
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Question</span>
            </div>
            <input
              type='text'
              placeholder='Enter Your Question'
              className='input w-full formInputBox focus:outline-none focus:border-blue'
              {...register("question", {
                required: "Must Need A Question",
              })}
            />
            {errors.question && (
              <p className='text-red mt-1' role='alert'>
                {errors.question?.message}
              </p>
            )}
          </label>

          {/*  Answer */}
          <label className='form-control mt-5'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Answer</span>
            </div>
            <textarea
              className='textarea min-h-20 formInputBox focus:outline-none focus:border-blue'
              placeholder='Enter Your Answer'
              {...register("answer", {
                required: "Must Need Answer",
              })}></textarea>
            {errors.answer && (
              <p className='text-red mt-1' role='alert'>
                {errors.answer?.message}
              </p>
            )}
          </label>

          <div className='mt-5 flex gap-5'>
            <button type='submit' className='btnFill'>
              SAVE
            </button>
            <button onClick={() => formReset()} className='btnOutline'>
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
