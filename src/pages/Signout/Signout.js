import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import Layout from "../../Layout/Layout";
import { cartActions } from "../../store/cart-actions";
import { loginActions } from "../../store/login-action";

const Signout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { sendGetRequest } = useFetch();
  useEffect(() => {
    dispatch(loginActions.onLogout());
    //localStorage.removeItem("Login_user_email");
    //reset cart
    dispatch(cartActions.reset());
    sendGetRequest("/signout", () => {});
    navigate("/home");
  }, [dispatch, navigate, sendGetRequest]);

  return <Layout></Layout>;
};
export default Signout;
