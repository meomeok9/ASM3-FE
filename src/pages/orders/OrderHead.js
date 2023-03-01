import CartOrder from "./CardOrder";
import "./OrderHead.css";
const OrderHead = () => {
  return (
    <div className="orderHead_container">
      <CartOrder isHead={true} title="Name" width="15%" />
      <CartOrder isHead={true} title="Phone" width="10%" />
      <CartOrder isHead={true} title="Address" width="12%" />
      <CartOrder isHead={true} title="Total" width="10%" />
      <CartOrder isHead={true} title="Delivery" width="10%" />
      <CartOrder isHead={true} title="Status" width="10%" />
      <CartOrder isHead={true} title="Detail" width="10%" />
    </div>
  );
};
export default OrderHead;
