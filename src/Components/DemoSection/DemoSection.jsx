import { useQuery } from "@tanstack/react-query";

import { TitleSection } from "../TitleSection/TitleSection";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { DemoTable } from "../DemoTable/DemoTable";

export const DemoSection = () => {
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["allServices"],
    queryFn: () => axios.get("/all-catagory", {}),
  });

  if (isLoading) {
    return <Loading />;
  }

  let services = data?.data?.data
  ;

  console.log(services,"fer")

  return (
    <div className='CMNCardBG'>
      <TitleSection title={"Demo"} link={"AddDemo"} />

      {/* Data table */}
      <DemoTable
        services={services}
        refetch={refetch}
        isLoading={isLoading}
      />

      
    </div>
  );
};
