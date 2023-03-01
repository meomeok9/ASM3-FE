import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modal-actions";
import "./Item.css";

import useFormat from "../../hook/useFormat";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const Item = (props) => {
  const { format } = useFormat();

  const dispatch = useDispatch();
  const product = props.data;
  //---------- custom format string price --------------
  const price = format(product.price);
  // ---------------- dispatch acytion to the redux store ------------------
  const clickHandler = () => {
    dispatch(modalActions.showPopup(product));
  };

  return (
    <Fragment>
      <Link to={product._id} className="item_link">
        <div className="item_container" onClick={clickHandler}>
          <img src={product.img1} alt={product.name} className="item_img" />
          <p>{product.name}</p>
          <p className="item_price">{`${price} VND`}</p>
        </div>
      </Link>
    </Fragment>
  );
};
export default Item;
