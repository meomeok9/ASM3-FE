import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modal-actions";
import "./Overlay.css";
const Overlay = () => {
  const display = useSelector((state) => state.modal.display);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(modalActions.hidePopup());
  };
  return (
    <div
      className={`overlay ${display ? "on" : "off"}`}
      onClick={clickHandler}
    ></div>
  );
};
export default Overlay;
