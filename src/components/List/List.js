import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { activeActions } from "../../store/active-action";
import { activeTypeActions } from "../../store/active-type-action";
import { categoryActions } from "../../store/category-action";
import img1 from "./img/product_1.png";
import img2 from "./img/product_2.png";
import img3 from "./img/product_3.png";
import img4 from "./img/product_4.png";
import img5 from "./img/product_5.png";

import "./List.css";
const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = (e) => {
    dispatch(activeActions.active("shop"));
    dispatch(categoryActions.setCategory(e.target.id));
    dispatch(activeTypeActions.activeType(e.target.id));
    navigate("/shop");
  };
  return (
    <div className="list_container">
      <div className="list_head row">
        <p>CAREFULLY CREATED COLLECTION</p>
        <h2>BROWSE OUR CATEGORIES</h2>
      </div>
      <div className="row">
        <img id="iphone" src={img1} alt="apple" onClick={clickHandler} />
        <img id="mac" src={img2} alt="mac" onClick={clickHandler} />
      </div>
      <div className="row">
        <img id="ipad" src={img3} alt="ipad" onClick={clickHandler} />
        <img id="watch" src={img4} alt="watch" onClick={clickHandler} />
        <img id="airpod" src={img5} alt="airpod" onClick={clickHandler} />
      </div>
    </div>
  );
};

export default List;
