import { Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect } from "react";

import "./App.css";
import useFetch from "./hook/useFetch";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

import Chat from "./components/modal/Chat";
import ChatButton from "./components/modal/ChatButton";
import SaveToCart from "./pages/Detail/SaveToCart";


const SignUp = React.lazy(() => import("./pages/SignUp/SignUp"));
const ShopPage = React.lazy(() => import("./pages/Shop/ShopPage"));
const SignIn = React.lazy(() => import("./pages/SignIn/SignIn"));
const Detail = React.lazy(() => import("./pages/Detail/Detail"));
const Signout = React.lazy(() => import("./pages/Signout/Signout"));
const Cart = React.lazy(() => import("./pages/Cart/Cart"));
const CheckOut = React.lazy(() => import("./pages/Checkout/Checkout"));
const Order = React.lazy(() => import("./pages/orders/Order"));
const OrderDetail = React.lazy(() => import("./pages/orders/OrderDetail"));
function App() {
  const { sendRequest } = useFetch();

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <div className="App">
      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}>
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/saveCart" element={<SaveToCart />} />
          <Route path="/shop/:_id" element={<Detail />}></Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="signout" element={<Signout />}></Route>
          <Route path="/detail" element={<Detail />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/order" element={<Order />}></Route>
          <Route path="orderDetail/:orderId" element={<OrderDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chat />
        <ChatButton />
      </Suspense>
    </div>
  );
}
export default App;
