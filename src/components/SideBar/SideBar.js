import "./SideBar.css";
import { useDispatch, useSelector } from "react-redux";
import { activeTypeActions } from "../../store/active-type-action";
import { categoryActions } from "../../store/category-action";
const SideBar = (props) => {
  const pActiveArr = useSelector((state) => state.activeType.arr);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    dispatch(categoryActions.setCategory(e.target.id));
    dispatch(activeTypeActions.activeType(e.target.id));
  };
  const classes = `sidebar_container ${props.className}`;

  return (
    <div className={classes}>
      <div className="sib_t">
        <h2>Shop</h2>
      </div>

      <div className="sib_b">
        <h3>Categories</h3>
        <span>Apple</span>
        <p
          id="all"
          onClick={clickHandler}
          className={`${pActiveArr[0].at ? "activetype" : ""}`}
        >
          All
        </p>
        <h4>IPHONE & MAC</h4>
        <p
          id="iphone"
          onClick={clickHandler}
          className={`${pActiveArr[1].at ? "activetype" : ""}`}
        >
          Iphone
        </p>
        <p
          id="ipad"
          onClick={clickHandler}
          className={`${pActiveArr[2].at ? "activetype" : ""}`}
        >
          Ipad
        </p>
        <p
          id="mac"
          onClick={clickHandler}
          className={`${pActiveArr[3].at ? "activetype" : ""}`}
        >
          Macbook
        </p>
        <h4>WIRELESS</h4>
        <p
          id="airpod"
          onClick={clickHandler}
          className={`${pActiveArr[4].at ? "activetype" : ""}`}
        >
          Airpod
        </p>
        <p
          id="watch"
          onClick={clickHandler}
          className={`${pActiveArr[5].at ? "activetype" : ""}`}
        >
          Watch
        </p>
        <h4>Other</h4>
        <p
          id="mouse"
          onClick={clickHandler}
          className={`${pActiveArr[6].at ? "activetype" : ""}`}
        >
          Mouse
        </p>
        <p
          id="keybroad"
          onClick={clickHandler}
          className={`${pActiveArr[7].at ? "activetype" : ""}`}
        >
          Keybroad
        </p>
        <p
          id="other"
          onClick={clickHandler}
          className={`${pActiveArr[8].at ? "activetype" : ""}`}
        >
          Other
        </p>
      </div>
    </div>
  );
};
export default SideBar;
