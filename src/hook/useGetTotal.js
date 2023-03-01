import { useCallback } from "react";
import { useSelector } from "react-redux";

const useGetTotal = () => {
  const items = useSelector((state) => state.cart.items); // = cart
  const data = useSelector((state) => state.data.data);

  const getPrice = (id) => {
    const resulst = data.find((item) => item._id.$oid === id)?.price;
    return +resulst;
  };

  const total = useCallback(() => {
    const result = items.reduce(
      (total, item) => item.quan * getPrice(item.id) + total,
      0
    );

    return result;
  }, []);

  return { total };
};
export default useGetTotal;
