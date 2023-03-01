import Layout from "../../Layout/Layout";
import Banner from "../../components/banner/Banner";
import List from "../../components/List/List";
import ProductList from "../../components/Products/ProductList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { activeActions } from "../../store/active-action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeActions.active("home"));
  }, []);
  return (
    <Layout>
      <Banner />
      <List />
      <ProductList />
    </Layout>
  );
};
export default Home;
