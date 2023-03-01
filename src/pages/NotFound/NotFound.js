import useScrollToTop from "../../hook/useScrollToTop";
import Layout from "../../Layout/Layout";
import "./NotFound.css";
const NotFound = () => {
  useScrollToTop();
  return (
    <Layout>
      <div className="notfound">
        <h1> NOT FOUND !</h1>
      </div>
    </Layout>
  );
};
export default NotFound;
