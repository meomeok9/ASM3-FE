import "./Detail.css";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layout/Layout";
import { modalActions } from "../../store/modal-actions";
import DetailImg from "../../components/DetailImg/DetailImg";
import useFormat from "../../hook/useFormat";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import RelatedProduct from "../../components/RelatedProduct/RelatedProduct";
import { cartActions } from "../../store/cart-actions";
import useFetch from "../../hook/useFetch";

const Detail = () => {
  const { sendGetRequest } = useFetch();
  const { format } = useFormat();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [related, setRelated] = useState();

  // set display on redux state modal = false !!!!!
  dispatch(modalActions.hidePopup());

  const userId = useSelector((state) => state.login.userId);
  const isLogin = useSelector((state) => state.login.isLogin);
  const items = useSelector((state) => state.cart.items);
  const [value, setValue] = useState(0);
  const fakeItems = [...items];
  const params = useParams();
  let id = params._id;
  useEffect(() => {
    const getDetail = (d) => {
      setData(d);
      console.log(d);
    };
    const getRelated = (d) => {
      setRelated(d);
    };
    sendGetRequest(`/detail/${id}`, getDetail);
    sendGetRequest(`/related/${id}`, getRelated);
  }, [sendGetRequest, id]);

  const getNumber = (num) => {
    setValue(num);
  };

  const addToCardHandler = () => {
    if (!isLogin) {
      alert("You must LOGIN!!");
      return;
    }
    const item = { productId: data._id, price: data.price, quan: value };

    //update store redux
    dispatch(cartActions.addCart(item));
    //save cart to mongoose

    navigate("/saveCart");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Layout>
      <div className="this_is_other_way">
        {data && (
          <DetailImg imgArr={[data.img1, data.img2, data.img3, data.img4]} />
        )}
        <div className="text-right-detail">
          {data && <h2>{data.name}</h2>}

          {data && <p>{`${format(data?.price)} VND`}</p>}

          {data && <p>{data.short_desc}</p>}
          <div className="category-detail">
            <p className="lg-text-detail">Category: </p>
            {data && <p>{data.category}</p>}
          </div>
          <div className="category-detail">
            <p className="lg-text-detail">Inventory: </p>
            {data && <p>{data.inventory}</p>}
          </div>

          <div className="add-to-cart-container">
            <p>Quantity</p>
            <CustomInput getNumber={getNumber} />
            <button
              className="add-to-cart-btn"
              onClick={addToCardHandler}
              disabled={value === 0}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div className="other_div">
        <button className="sh">Description</button>
        <h4>Product Description</h4>
        {data && <p>{data.long_desc}</p>}
      </div>
      {related && <RelatedProduct data={related} />}
    </Layout>
  );
};
export default Detail;
