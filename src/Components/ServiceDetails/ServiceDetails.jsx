import { useLoaderData, useParams } from "react-router-dom";
import { BlogSection } from "../BlogSection/BlogSection";
import { FAQSection } from "../FAQSection/FAQSection";
import { SubServices } from "../SubServices/SubServices";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { HeroSection } from "../HeroSection/HeroSection";

export const ServiceDetails = () => {
  const serviceData = useLoaderData();
  const { id } = useParams();
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["singleServiceDetails"],
    queryFn: () => axios.get(`/single-category/${id}`, {}),
  });

  // store blog data
  let service;
  if (serviceData?.data?.success) {
    service = serviceData?.data?.data;
  } else {
    service = data?.data?.data;
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className=''>
      <ScrollToTop />
      <div className='mb-10'>
        <h2 className='text-center text-4xl font-medium text-blue'>
          {service?.name}
        </h2>
      </div>

      <HeroSection service={service} isLoading={isLoading}></HeroSection>

      <div className='my-10'></div>
      <SubServices
        id={service?.id}
        subService={service?.SubCatagory}
        refetch={refetch}
        isLoading={isLoading}></SubServices>
      <div className='my-10'></div>
      <FAQSection
        id={service?.id}
        faqs={service?.CatagoryFaq}
        refetch={refetch}></FAQSection>
      <div className='my-10'></div>
      <BlogSection
        id={service?.id}
        CatagoryBlogs={service?.CatagoryBlogs}
        refetch={refetch}
        isLoading={isLoading}></BlogSection>
    </section>
  );
};
