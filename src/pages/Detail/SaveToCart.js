import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hook/useFetch";

const SaveToCart = () => {
  const navigate = useNavigate();
  const { sendPostRequest } = useFetch();
  const items = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.login.userId);
  //console.log("item for save cart:", items);
  useEffect(() => {
    sendPostRequest("/saveCart", { items, userId }, (res) => {
      alert(res);
      // clear cart
    });
    navigate("/shop");
  }, [items, userId, sendPostRequest]);
};
export default SaveToCart;
