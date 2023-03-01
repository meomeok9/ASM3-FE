import { useCallback } from "react";

//format a string of price like 12000 to  12.000
const useFormat = () => {
  const format = useCallback((price) => {
    const srt = price + "";
    let index = srt.length;
    const arrSplit = srt.split("");
    arrSplit.reverse();
    for (let i = 0; i <= index; i++) {
      if ((i + 1) % 4 === 0) {
        arrSplit.splice(i, 0, ".");
        //while insert '.' the length of srt is increase then need increase index
        index++;
      }
    }
    arrSplit.reverse();
    if (srt.length % 3 === 0) arrSplit.shift();
    return arrSplit.join("");
  }, []);
  return { format };
};
export default useFormat;
