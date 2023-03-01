import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hook/useFetch";
import useFormat from "../../hook/useFormat";
import { cartActions } from "../../store/cart-actions";

import CustomInput from "../CustomInput/CustomInput";

import "./CartItem.css";

const CartItem = (props) => {
  const { sendPostRequest, sendGetRequest } = useFetch();
  const dispatch = useDispatch();
  const [product, setProduct] = useState();

  const userId = useSelector((state) => state.login.userId);
  const items = useSelector((state) => state.cart.items);

  const fakeItems = items.map((item) => ({ ...item }));
  const { format } = useFormat();
 // console.log("fakeitems :", fakeItems);
  const { productId, quan } = props.data;

  // find number to render input < number >
  //console.log(productId, "---------", quan);
  const getData = (d) => {
    setProduct(d);
  };
  useEffect(() => {
    sendGetRequest(`/detail/${productId}`, getData);
  }, [productId, sendGetRequest, items]);

  const updateQuan = (num) => {
    //update items on redux store
    dispatch(cartActions.updateCart({ productId: productId, quan: num }));
    //update mongose database
    const index = items.findIndex((i) => i.productId === productId);
    fakeItems[index].quan = num;
    //update items on database on web
    sendPostRequest("/saveCart", { items: fakeItems, userId }, () => {});
  };

  const removeHandler = () => {
    if (window.confirm("❌❌❌  DELETE  ❓❓❓")) {
      dispatch(cartActions.deleteCart(productId));
      const index = items.findIndex((i) => i.productId === productId);
      fakeItems.splice(index, 1);
      sendPostRequest("/saveCart", { items: fakeItems, userId }, () => {});
    }
  };

  //   console.log(product);
  const money = format(product?.price);

  const total = format((+quan * +product?.price).toString());

  return (
    <Fragment>
      {product && (
        <div className="cartitem_container">
          <img className="cart_im_img" src={product.img1} alt={product.name} />
          <p className="cartitem_name">{product.name}</p>
          <p className="cartitem_container_p wrap">{`${money} VND`}</p>
          <CustomInput
            value={quan}
            min={1}
            className="cartitem_container_p"
            getNumber={updateQuan}
          />
          <p className="cartitem_container_p wrap">{`${total} VND`}</p>
          <p
            className="cartitem_container_p unselected"
            onClick={removeHandler}
          >
            ❌
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default CartItem;
