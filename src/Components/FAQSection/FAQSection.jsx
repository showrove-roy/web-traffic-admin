/* eslint-disable react/prop-types */
import { FAQTable } from "../FAQTable/FAQTable";
import { OutlineBtn } from "../OutlineBtn/OutlineBtn";
import { TitleSection } from "../TitleSection/TitleSection";

export const FAQSection = ({id,faqs,refetch}) => {
  
  return (
    <div className='CMNCardBG'>
      <TitleSection title={"Add FAQ"} link={`add-faq/${id}`} />

      {/* data Table */}
      <FAQTable faqs={faqs} refetch={refetch}/>

      <div className='mt-5 flex justify-center'>
        <OutlineBtn btnLink={"hello"} btnText={"Load More"} />
      </div>
    </div>
  );
};
