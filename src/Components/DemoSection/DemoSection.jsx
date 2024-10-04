import { useQuery } from "@tanstack/react-query";

import { TitleSection } from "../TitleSection/TitleSection";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { DemoTable } from "../DemoTable/DemoTable";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import"../Pagination/Pagination.css"
export const DemoSection = () => {
  const [count, setCount] = useState(''); // total count of services
  const [page, setPage] = useState(1);    // current page
 const lastIndex= Math.ceil(count  / 10)


  // Fetch data using useQuery (React Query)
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["allServices", page], // Include 'page' in queryKey to refetch when it changes
    queryFn: () => axios.get(`/all-service?limit=10&page=${page}`),
    onSuccess: (response) => {
      setCount(response?.data?.data?.totalCount || 0); // Update the total count from API
    },
    keepPreviousData: true, // This keeps the previous data during loading new page
  });

  if (isLoading) {
    return <Loading />; // Show loading spinner
  }

  let services = data?.data?.data?.result || []; // Fetched services

  // Calculate the total number of pages
  const pageCount = Math.ceil((count || 10) / 10);
 
  return (
    <>
    <div className='CMNCardBG'>
      <TitleSection title={"Demo"} link={"AddDemo"} />

      {/* Data table */}
      <DemoTable
       currentPosts={services}
          refetch={refetch}
          isLoading={isLoading}
        
      />


    </div>
    {/* {pagination?.map((page, index) => { */}
        
        {/* <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    1
                </a>         */}
           
      {/* // })} 
    */}
   <div className="flex items-center justify-center  ">
  <button
  onClick={() => setPage(page - 1)} 
  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
    Prev
  </button>
  <button onClick={() => setPage(page + 1)} disabled={page === lastIndex} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
    Next
  </button>  
</div>


   </>
  );
};
