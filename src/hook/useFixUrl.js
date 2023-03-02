import { useCallback } from "react";

//format a string of price like 12000 to  12.000
const useFixUrl = () => {
  const fix = useCallback((url) => {
    if (url && !url.includes("https://")) url = `https://asm3be17428.onrender.com/${url}`;
    return url;
  }, []);
  return { fix };
};
export default useFixUrl;
