import "./CartOrder.css";
const CartOrder = (props) => {
  const isHead = props.isHead;
  const margin_left = props.margin_left ? "1px" : "0px";
  return (
    <div
      className={`${isHead ? "head_order" : "detail_order"} order_container`}
      style={{ width: props.width, marginLeft: margin_left }}
    >
      <p>{props.title}</p>
    </div>
  );
};
export default CartOrder;
