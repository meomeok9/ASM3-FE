import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "../../hook/useFetch";
import useFormat from "../../hook/useFormat";
import "./CheckOutItem.css";

const CheckOutItem = (props) => {
  const { sendGetRequest } = useFetch();
  const [name, setName] = useState();
  const { format } = useFormat();
  const item = props.item;
  const { productId, quan, price } = item;
  const data = useSelector((state) => state.data.data);
  const product = data.find((prd) => prd._id === productId);
  useEffect(() => {
    const getData = (d) => {
      setName(d.name);
    };
    sendGetRequest(`/detail/${productId}`, getData);
  }, [productId]);

  const formatPrice = format(price);

  return (
    <div className="chkoutitem">
      <h6>{name}</h6>
      <p>{`${formatPrice} VND`}</p>
      <p>{`x${quan}`}</p>
    </div>
  );
};
export default CheckOutItem;
