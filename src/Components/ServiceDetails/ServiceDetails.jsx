import { useLoaderData } from "react-router-dom";
import { EditHeroSection } from "../../Page/EditHeroSection/EditHeroSection";
import { BlogSection } from "../BlogSection/BlogSection";
import { FAQSection } from "../FAQSection/FAQSection";
import { SubServices } from "../SubServices/SubServices";

export const ServiceDetails = () => {
  const data = useLoaderData();

  let service = data?.data?.data;
  console.log(service);

  return (
    <section className=''>
      <div className='mb-10'>
        <h2 className='text-center text-4xl font-medium'>{service?.name}</h2>
      </div>
      <EditHeroSection></EditHeroSection>
      <div className='my-10'></div>
      <SubServices></SubServices>
      <div className='my-10'></div>
      <FAQSection id={service?.id} faqs={service?.CatagoryFaq}></FAQSection>
      <div className='my-10'></div>
      <BlogSection></BlogSection>
    </section>
  );
};
