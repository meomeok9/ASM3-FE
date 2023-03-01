import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../../hook/useFetch";
import "./OrderImageLoad.css";
const OrderImageLoad = (props) => {
  const prodId = props.prodId;
  const [data, setData] = useState();
  const { sendPostRequest } = useFetch();
  useEffect(() => {
    const getData = (url) => {
      setData(url);
    };
    sendPostRequest("/getImgUrl", { prodId }, () => {}, getData);
  }, [prodId]);

  return <div>{data && <img className="image" src={data} alt="k" />} </div>;
};

export default OrderImageLoad;
