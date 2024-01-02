import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../Components/Loading/Loading";
import axios from "axios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

export const EditFaq = () => {
  const faqData = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  // Loading statement
  const [isUpdate, setIsUpdate] = useState(false);

  // form Hook
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // define faq data
  let fAq;

  // faq data load
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["singleFAQDetails"],
    queryFn: () => axios.get(`/single-FAQ/${id}`, {}),
  });

  // store FAQ data
  if (faqData?.data?.success) {
    fAq = faqData?.data?.data;
  } else {
    fAq = data?.data?.data;
  }

  // Handel add FAQ
  const handelAddFAQ = (data) => {
    const faQ = {
      Question: data?.question,
      Answer: data?.answer,
      catagoryId: fAq?.catagoryId,
    };
    axios
      .put(`/update-FAQ/${id}`, faQ)
      .then((response) => {
        if (response?.data?.success) {
          toast.success("Done");
          reset();
          refetch();
          setIsUpdate(false);
          navigate(`/service/${fAq?.catagoryId}`);
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
  if (isUpdate || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className='FormCardBG'>
      <h5 className='fromTitle'>Edit FAQ </h5>

      <div className=''>
        <form onSubmit={handleSubmit(handelAddFAQ)}>
          {/* Question */}
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text text-lg font-medium'>Question</span>
            </div>
            <input
              type='text'
              defaultValue={fAq?.Question}
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
              defaultValue={fAq?.Answer}
              className='textarea h-40 formInputBox focus:outline-none focus:border-blue'
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
            <div onClick={() => formReset()} className='btnOutline'>
              CANCEL
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
