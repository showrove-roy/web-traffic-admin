/* eslint-disable react/prop-types */
import { OutlineBtn } from "../OutlineBtn/OutlineBtn";
import { SubServiceTable } from "../SubServiceTable/SubServiceTable";
import { TitleSection } from "../TitleSection/TitleSection";

export const SubServices = ({ id, subService, refetch }) => {
  return (
    <div className='CMNCardBG'>
      <TitleSection title={"Sub Service"} link={`add-sub-service/${id}`} />

      {/* data Table */}
      <SubServiceTable subService={subService} refetch={refetch} />

      <div className='mt-5 flex justify-center'>
        <OutlineBtn btnLink={"hello"} btnText={"Load More"} />
      </div>
    </div>
  );
};
