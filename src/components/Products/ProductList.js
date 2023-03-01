
import Modal from "../modal/Modal";
import Service from "../services/Service";
import Subscribe from "../services/Subscribe";
import "./ProductList.css";
import Products from "./Products";
const ProductList = () => {
    const DUMMY_DATA_SERVICES = [
        { h4: "FREE SHIPPING", p: "Free shipping worldlwide" },
        { h4: "24 X 7 SERVICE", p: "Free shipping worldlwide" },
        { h4: "FESTIVAL OFFER", p: "Free shipping worldlwide" },
      ];
  return (
    
    <div className ='productlist_container'>
      <div className="productlist_head">
        <p>MADE THE HARD WAY</p>
        <h4>TOP TRENDING PRODUCTS</h4>
      </div>

      <Products />
      <div className="productlist_services">
        <Service data={DUMMY_DATA_SERVICES[0]} />
        <Service data={DUMMY_DATA_SERVICES[1]} />
        <Service data={DUMMY_DATA_SERVICES[2]} />
      </div>
      <Subscribe />
      <Modal />
    </div>
  );
};
export default ProductList;
