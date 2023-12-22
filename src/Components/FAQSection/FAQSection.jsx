import { FAQTable } from "../FAQTable/FAQTable";
import { OutlineBtn } from "../OutlineBtn/OutlineBtn";
import { TitleSection } from "../TitleSection/TitleSection";

export const FAQSection = () => {
  return (
    <div className='CMNCardBG'>
      <TitleSection title={"Add FAQ"} link={"add-faq"} />

      {/* data Table */}
      <FAQTable />

      <div className='mt-5 flex justify-center'>
        <OutlineBtn btnLink={"hello"} btnText={"Load More"} />
      </div>
    </div>
  );
};
