/* eslint-disable react/prop-types */
import { SubServiceTable } from "../SubServiceTable/SubServiceTable";
import { TitleSection } from "../TitleSection/TitleSection";

export const SubServices = ({ id, subService, refetch, isLoading }) => {
  return (
    <div className='CMNCardBG'>
      <TitleSection title={"Sub Service"} link={`add-sub-service/${id}`} />

      {/* data Table */}
      <SubServiceTable
        subService={subService}
        refetch={refetch}
        isLoading={isLoading}
      />
    </div>
  );
};
