import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckOutItem from "../../components/CheckOutItem/CheckOutItem";
import CustomCheckOutInput from "../../components/CustomCheckOutInput/CustomCheckOutInput";
import useFetch from "../../hook/useFetch";
import useFormat from "../../hook/useFormat";
import Layout from "../../Layout/Layout";
import { cartActions } from "../../store/cart-actions";
import "./Checkout.css";
const CheckOut = () => {
  const dispatch = useDispatch();
  const { format } = useFormat();
  const navigate = useNavigate();
  const { sendPostRequest, sendGetRequest } = useFetch();

  const items = useSelector((state) => state.cart.items);
  const isLogin = useSelector((state) => state.login.isLogin);
  const data = useSelector((state) => state.data.data);
  const fullName = useSelector((state) => state.login.userName);
  const email = useSelector((state) => state.login.email);
  const phoneNumber = useSelector((state) => state.login.phoneNumber);
  const userId = useSelector((state) => state.login.userId);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputAddress, setInputAddress] = useState("");

  useEffect(() => {
    if (!isLogin) navigate("/");
    setInputName(fullName);
    setInputEmail(email);
    setInputPhone(phoneNumber);
    setInputAddress("");
  }, [fullName, email, phoneNumber, isLogin]);

  const subtotal = items.reduce(
    (total, item) => item.quan * item.price + total,
    0
  );
  const checkoutHandler = (e) => {
    e.preventDefault();

    const req = {
      fullName: inputName,
      email: inputEmail,
      phoneNumber: inputPhone,
      address: inputAddress,
      userId,
      items,
      total: subtotal,
      delivery: "Waiting for Progressing",
      state: "Waiting for Pay",
    };

    try {
      const getRes = (res) => {
        alert(res);
      };
      const getStatus = (status) => {
        if (status === 200) {
          dispatch(cartActions.removeCart());
          navigate("/order");
        } else {
          throw new Error("some thing wrong!");
        }
      };
      sendPostRequest("/checkOut", req, getRes, () => {}, getStatus);
    } catch (err) {
      console.log({ err });
      alert(err.response);
    }
  };

  const nameChangeHandler = (name) => {
    setInputName(name);
  };
  const emailChangeHandler = (email) => {
    setInputEmail(email);
  };
  const phoneChangeHandler = (phone) => {
    setInputPhone(phone);
  };
  const addressChangeHandler = (address) => {
    setInputAddress(address);
  };

  return (
    <Layout>
      <div className="chkout_container">
        <form className="chkout_left" onSubmit={checkoutHandler}>
          <h1>CHECK OUT</h1>
          <h3>BILLING DETAILS</h3>
          <CustomCheckOutInput
            title="Full Name"
            value={inputName}
            change={nameChangeHandler}
          />
          <CustomCheckOutInput
            title="Email"
            value={inputEmail}
            change={emailChangeHandler}
            disable={true}
          />
          <CustomCheckOutInput
            title="Phone Number"
            value={inputPhone}
            change={phoneChangeHandler}
          />
          <CustomCheckOutInput
            title="Address"
            value={inputAddress}
            change={addressChangeHandler}
          />
          <button
            className="chkout_btn"
            type="submit"
            disabled={
              inputAddress.length === 0 ||
              inputName.length === 0 ||
              inputPhone.length === 0
            }
          >
            Place Order
          </button>
        </form>
        <div className="chkout_right">
          <div className="chkout_nav">
            <button type="button" onClick={() => {}}>
              HOME
            </button>
            /
            <button type="button" onClick={() => {}}>
              CART
            </button>
            /
            <button type="button" onClick={() => {}}>
              CHECKOUT
            </button>
          </div>
          <div className="chkout_order">
            <h3>YOUR ORDER</h3>
            {data.length > 0 &&
              items.map((item) => (
                <CheckOutItem item={item} key={item.productId} />
              ))}
            <div className="chkout_subtotal">
              <h4>TOTAL</h4>
              <p>{`${format(subtotal + "")} VND`}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default CheckOut;
