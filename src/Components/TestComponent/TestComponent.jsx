import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const TestComponent = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["jsproducts"],
    queryFn: () => axios.get("/all-category", {}),
  });
 
  if(isLoading){
      return <div>Loading</div>
  }
  console.log(data.data);
  return <div>Hello World</div>;
};
