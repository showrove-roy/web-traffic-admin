import { BlueButton } from "../../Components/BlueButton/BlueButton";

export const Error404 = () => {
  return (
    <section className='w-screen h-screen flex flex-col justify-center items-center px-3'>
      <h3 className='text-blue md:text-5xl text-xl text-center font-bold'>
        404 This page is not found
      </h3>
      <div className='mt-16'>
        <BlueButton btnText={"Back To Home"} btnLink={""} />
      </div>
    </section>
  );
};
