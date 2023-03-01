import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFormat from "../../hook/useFormat";
import { modalActions } from "../../store/modal-actions";
import "./ModalDetail.css";
const ModalDetail = () => {
  const data = useSelector((state) => state.modal.product);
  const display = useSelector((state) => state.modal.display);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const price = useFormat(data.price + "");
  const clickHandler = () => {
    dispatch(modalActions.hidePopup());
    navigate(-1);
  };
  const viewProductDetail = () => {
    navigate(`/shop/${data._id}`);
  };
  return (
    <div className={`modaldetail_container ${display ? "on" : "off"}`}>
      {/* close button */}
      <div className="modaldetail_close">
        {" "}
        <span onClick={clickHandler}>X</span>
      </div>
      {/* image */}
      <div className="modaldetail_detail">
        <div className="modaldetail_img">
          <img src={data.img1} alt={data.name} />
        </div>

        {/* detail */}
        <div className="modaldetail_info">
          <div>
            <h2>{data.name}</h2>
            <p>{`${price} VND`}</p>
            <p>{data.long_desc}</p>
            <button type="button" onClick={viewProductDetail}>
              🛒 View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalDetail;
