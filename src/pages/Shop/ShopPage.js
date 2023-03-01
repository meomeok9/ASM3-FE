import { useSelector } from "react-redux";
import "./ShopPage.css";
import Modal from "../../components/modal/Modal";
import Products from "../../components/Products/Products";
import SideBar from "../../components/SideBar/SideBar";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useScrollToTop from "../../hook/useScrollToTop";

const ShopPage = () => {
  useScrollToTop();
  const navigator = useNavigate();
  const pCategory = useSelector((state) => state.category.catgr);
  const isRequestDetail = useSelector((state) => state.modal.display); //true if click in item on products
  const isActiveBoutique = useSelector(
    (state) => state.boutique.boutiqueActive
  );
  useEffect(() => {
    if (isRequestDetail && isActiveBoutique) navigator("/detail");
  }, [isRequestDetail, isActiveBoutique, navigator]);

  return (
    <Layout className="shoppage_container">
      <SideBar className="shoppage_sidebar" />
      <Products className="shoppage_product" category={pCategory} />
    </Layout>
  );
};
export default ShopPage;
