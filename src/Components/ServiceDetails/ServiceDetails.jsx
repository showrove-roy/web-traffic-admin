import { useLoaderData } from "react-router-dom";
import { EditHeroSection } from "../../Page/EditHeroSection/EditHeroSection";
import { BlogSection } from "../BlogSection/BlogSection";
import { FAQSection } from "../FAQSection/FAQSection";
import { SubServices } from "../SubServices/SubServices";

export const ServiceDetails = () => {
  const data = useLoaderData();
  console.log("🚀 ~ file: ServiceDetails.jsx:9 ~ ServiceDetails ~ data:", data)


  let service = {
    id: data?.data?.data?.id,
    name: data?.data?.data?.name,
  };

  return (
    <section className=''>
      <div className='mb-10'>
        <h2 className='text-center text-4xl font-medium'>{service?.name}</h2>
      </div>
      <EditHeroSection></EditHeroSection>
      <div className='my-10'></div>
      <SubServices></SubServices>
      <div className='my-10'></div>
      <FAQSection id={service?.id}></FAQSection>
      <div className='my-10'></div>
      <BlogSection></BlogSection>
    </section>
  );
};
