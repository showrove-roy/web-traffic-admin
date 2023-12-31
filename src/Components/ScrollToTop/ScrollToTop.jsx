import { useEffect } from "react";


const ScrollToTop = () => {
  
  const location=window.location.pathname
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
export default ScrollToTop
