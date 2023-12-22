
import { OutlineBtn } from "../OutlineBtn/OutlineBtn";
import { ServiceTable } from "../ServiceTable/ServiceTable";
import { TitleSection } from "../TitleSection/TitleSection";


export const ServiceSection = () => {
  return (
    <div className='CMNCardBG'>
      <TitleSection title={"Add Service"} link={"add-service"}/>

      {/* Data table */}
      <ServiceTable/>

      <div className="mt-5 flex justify-center">
      <OutlineBtn btnLink={"hello"} btnText={"Load More"} />
      </div>
    </div>
  );
};
