import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFormat from "../../hook/useFormat";
import CartOrder from "./CardOrder";

const OrderItem = (props) => {
  const { format } = useFormat();
  const data = props.data;
  const userName = useSelector((state) => state.login.userName);
  const fone = useSelector((state) => state.login.phoneNumber);
  const navigate = useNavigate();
  const viewDetail = (e) => {
    navigate(`/orderDetail/${data._id}`);
  };
  return (
    <div className="orderHead_container">
      <CartOrder isHead={false} title={userName} width="15%" />
      <CartOrder isHead={false} title={fone} width="10%" />
      <CartOrder isHead={false} title={data.address} width="12%" />
      <CartOrder
        isHead={false}
        title={`${format(data.total)} VND`}
        width="10%"
      />
      <CartOrder isHead={false} title={data.delivery} width="10%" />
      <CartOrder isHead={false} title={data.state} width="10%" />
      <div className="detail_order order_container">
        <button type="button" onClick={viewDetail}>
          View➡
        </button>
      </div>
    </div>
  );
};
export default OrderItem;
