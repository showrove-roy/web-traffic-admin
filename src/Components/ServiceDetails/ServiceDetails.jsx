import { useParams } from "react-router-dom";
import { EditHeroSection } from "../../Page/EditHeroSection/EditHeroSection";
import { BlogSection } from "../BlogSection/BlogSection";
import { FAQSection } from "../FAQSection/FAQSection";
import { SubServices } from "../SubServices/SubServices";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loading } from "../Loading/Loading";

export const ServiceDetails = () => {
  const { id } = useParams();
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["singleServiceDetails"],
    queryFn: () => axios.get(`/single-category/${id}`, {}),
  });
  let service = data?.data?.data;
  console.log("🚀 ~:", service);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className=''>
      <div className='mb-10'>
        <h2 className='text-center text-4xl font-medium'>{service?.name}</h2>
      </div>
      <EditHeroSection></EditHeroSection>
      <div className='my-10'></div>
      <SubServices  id={service?.id}
        subService={service?.SubCatagory}
        refetch={refetch}></SubServices>
      <div className='my-10'></div>
      <FAQSection
        id={service?.id}
        faqs={service?.CatagoryFaq}
        refetch={refetch}></FAQSection>
      <div className='my-10'></div>
      <BlogSection></BlogSection>
    </section>
  );
};
