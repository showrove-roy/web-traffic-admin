
import { ServiceSection } from "../../Components/ServiceSection/ServiceSection";
import { Blog } from "../Blog/Blog";


export const Home = () => {
  return (
    <>
      <ServiceSection />
      <div className='my-10'></div>
      <Blog/>
    </>
  );
};
