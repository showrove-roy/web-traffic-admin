import { FAQSection } from "../../Components/FAQSection/FAQSection";
import { ServiceSection } from "../../Components/ServiceSection/ServiceSection";
import { SubServices } from "../../Components/SubServices/SubServices";

export const Home = () => {
  return (
    <>
      <ServiceSection />
      <div className='my-10'></div>
      <FAQSection />
      <div className='my-10'></div>
      <SubServices />
    </>
  );
};
