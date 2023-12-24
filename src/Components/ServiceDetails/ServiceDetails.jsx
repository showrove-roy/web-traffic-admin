import { EditHeroSection } from "../../Page/EditHeroSection/EditHeroSection";
import { BlogSection } from "../BlogSection/BlogSection";
import { FAQSection } from "../FAQSection/FAQSection";
import { SubServices } from "../SubServices/SubServices";

export const ServiceDetails = () => {
  return (
    <section className=''>
      <EditHeroSection></EditHeroSection>
      <div className='my-10'></div>
      <SubServices></SubServices>
      <div className='my-10'></div>
      <FAQSection></FAQSection>
      <div className='my-10'></div>
      <BlogSection></BlogSection>
    </section>
  );
};
