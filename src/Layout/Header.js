import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { activeActions } from "../store/active-action";
import { useNavigate } from "react-router-dom";
import { boutiqueActions } from "../store/boutique-action";

const Header = () => {
  const activeArr = useSelector((state) => state.activeBtn.arr);
  const user = useSelector((state) => state.login.userName);
  const isActiveBoutique = useSelector(
    (state) => state.boutique.boutiqueActive
  );
  const isLogin = useSelector((state) => state.login.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    if (e.target.name !== "signout") {
      navigate(`/${e.target.name}`);
      dispatch(activeActions.active(e.target.name));
    } else if (window.confirm("👁‍🗨 Sign out 👁‍🗨")) {
      navigate(`/${e.target.name}`);
      dispatch(activeActions.active(e.target.name));
    }
  };

  const clickBOUTIQUEHandler = (e) => {
    if (isActiveBoutique === false) {
      console.log("????");
      e.target.innerText = "login";
      dispatch(boutiqueActions.activeBoutique());
    } else {
      e.target.innerText = "BOUTIQUE";
      dispatch(boutiqueActions.deactiveBoutique());
    }
  };
  return (
    <div className="layout_header">
      <div>
        <button
          name="home"
          type="button"
          className={`layout_button ${activeArr[0].active ? "active" : ""}`}
          onClick={clickHandler}
        >
          Home
        </button>
        <button
          type="button"
          name="shop"
          className={`layout_button ${activeArr[1].active ? "active" : ""}`}
          onClick={clickHandler}
        >
          Shop
        </button>
      </div>
      <div>
        <button
          type="button"
          name="BOUTIQUE"
          className={`layout_button BOUTIQUE  
           ${isActiveBoutique ? "active" : ""}`}
          onClick={clickBOUTIQUEHandler}
        >
          {!isActiveBoutique ? "BOUTIQUE" : "Use redux display detail"}
        </button>
      </div>
      <div>
        {isLogin && (
          <button
            type="button"
            name="order"
            className={`layout_button ${activeArr[5].active ? "active" : ""}`}
            onClick={clickHandler}
          >
            🧾Order
          </button>
        )}
        <button
          type="button"
          name="cart"
          className={`layout_button ${activeArr[2].active ? "active" : ""}`}
          onClick={clickHandler}
        >
          🛒Cart
        </button>{" "}
        {isLogin && <p>{`💘${user}🔻`}</p>}
        {isLogin && (
          <button
            type="button"
            name="signout"
            className={`layout_button`}
            onClick={clickHandler}
          >
            (Logout)
          </button>
        )}
        {!isLogin && (
          <button
            type="button"
            name="signin"
            className={`layout_button ${activeArr[3].active ? "active" : ""}`}
            onClick={clickHandler}
          >
            👤Login
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
