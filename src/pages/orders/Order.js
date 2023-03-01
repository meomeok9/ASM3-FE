import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import Layout from "../../Layout/Layout";
import { activeActions } from "../../store/active-action";

import "./Order.css";
import OrderHead from "./OrderHead";
import OrderItem from "./OrderItem";
const Order = () => {
  const [data, setData] = useState();
  const userId = useSelector((state) => state.login.userId);
  const isLogin = useSelector((state) => state.login.isLogin);
  const { sendPostRequest } = useFetch();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
    dispatch(activeActions.active("order"));
    window.scrollTo(0, 0);
    const getData = (d) => {
      console.log("data: ", d);
      setData(d);
    };
    sendPostRequest("/getAllOrder", { userId: userId }, () => {}, getData);
  }, [isLogin, dispatch, navigate, userId, sendPostRequest]);
  return (
    <div>
      <Layout className="main_order_container">
        <h1>History</h1>
        <OrderHead />
        {data &&
          data.length > 0 &&
          data.map((d) => {
            return <OrderItem data={d} key={d._id} />;
          })}
      </Layout>
    </div>
  );
};

export default Order;
