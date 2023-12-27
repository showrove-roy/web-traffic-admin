import { useQuery } from "@tanstack/react-query";
import { OutlineBtn } from "../OutlineBtn/OutlineBtn";
import { ServiceTable } from "../ServiceTable/ServiceTable";
import { TitleSection } from "../TitleSection/TitleSection";
import axios from "axios";
import { Loading } from "../Loading/Loading";

export const ServiceSection = () => {
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["allServices"],
    queryFn: () => axios.get("/all-category", {}),
  });

  if (isLoading) {
    return <Loading />;
  }

  let services = data.data.data;

  return (
    <div className='CMNCardBG'>
      <TitleSection title={"Services"} link={"add-service"} />

      {/* Data table */}
      <ServiceTable
        services={services}
        refetch={refetch}
        isLoading={isLoading}
      />

      <div className='mt-5 flex justify-center'>
        <OutlineBtn btnLink={"hello"} btnText={"Load More"} />
      </div>
    </div>
  );
};
