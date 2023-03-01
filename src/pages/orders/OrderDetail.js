import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import useFetch from "../../hook/useFetch";
import useFormat from "../../hook/useFormat";
import Layout from "../../Layout/Layout";
import "./OrderDetail.css";
import OrderItemDetail from "./OrderItemDetail";

const OrderDetail = () => {
  const params = useParams();
  const [data, setData] = useState();
  const orderId = params.orderId;
  const isLogin = useSelector((s) => s.login.isLogin);
  const userName = useSelector((s) => s.login.userName);
  const phoneNumber = useSelector((s) => s.login.phoneNumber);
  const { sendPostRequest } = useFetch();
  const { format } = useFormat();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) navigate("/");
    const getData = (d) => {
      setData(d);
      console.log("data items", d.items);
    };
    sendPostRequest(
      "/orderDetail",
      { orderId: orderId },
      (res) => {
        console.log(res);
      },
      getData
    );
  }, [orderId, sendPostRequest]);

  return (
    <Layout>
      <div className="main_order_container">
        <h2>Infomation Order</h2>
        <p>Full Name :{userName}</p>
        <p>Phone: {phoneNumber}</p>
        {data && <p>Address: {data.address}</p>}
        {data && <p>Total: {format(data.total)} VND</p>}
      </div>
      <div className="order_detail_table">
        <div className="order_title">
          <h5 className="h5_14">PRODUCT ID</h5>
          <h5 className="h5_14">IMAGE</h5>
          <h5 className="longger_h5">Name</h5>
          <h5 className="h5_14">PRICE</h5>
          <h5 className="h5_14">QUANTITY</h5>
        </div>
        {data &&
          data.items.map((item) => {
            return <OrderItemDetail prodId={item.productId} quan={item.quan} key={item._id} />;
          })}
      </div>
    </Layout>
  );
};
export default OrderDetail;
