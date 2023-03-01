import { useCallback } from "react";

//format a string of price like 12000 to  12.000
const useFixUrl = () => {
  const fix = useCallback((url) => {
    if (url && !url.includes("https://")) url = `http://localhost:5000/${url}`;
    return url;
  }, []);
  return { fix };
};
export default useFixUrl;
