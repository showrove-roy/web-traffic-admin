/* eslint-disable react/prop-types */
import { FAQTable } from "../FAQTable/FAQTable";
import { OutlineBtn } from "../OutlineBtn/OutlineBtn";
import { TitleSection } from "../TitleSection/TitleSection";

export const FAQSection = ({id}) => {
  return (
    <div className='CMNCardBG'>
      <TitleSection title={"Add FAQ"} link={`add-faq/${id}`} />

      {/* data Table */}
      <FAQTable />

      <div className='mt-5 flex justify-center'>
        <OutlineBtn btnLink={"hello"} btnText={"Load More"} />
      </div>
    </div>
  );
};
