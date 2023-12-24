import { OutlineBtn } from "../OutlineBtn/OutlineBtn";
import { SubServiceTable } from "../SubServiceTable/SubServiceTable";
import { TitleSection } from "../TitleSection/TitleSection";

export const SubServices = () => {
  return (
    <div className='CMNCardBG'>
      <TitleSection title={"Sub Service"} link={"add-sub-service"} />

      {/* data Table */}
      <SubServiceTable />

      <div className='mt-5 flex justify-center'>
        <OutlineBtn btnLink={"hello"} btnText={"Load More"} />
      </div>
    </div>
  );
};
