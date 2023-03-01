import { useNavigate } from "react-router-dom";
import useFixUrl from "../../hook/useFixUrl";
import "./RelatedProduct.css";

const RelatedProduct = (props) => {
  const { fix } = useFixUrl();
  const navigate = useNavigate();
  const data = props.data; // a array product may be empty

  const isNotEmpty = data.length > 0;

  const clickHandler = (e) => {
    navigate(`/shop/${e.target.id}`);
  };

  const format = (srt) => {
    let index = srt.length;
    const arrSplit = srt.split("");
    arrSplit.reverse();
    for (let i = 0; i <= index; i++) {
      if ((i + 1) % 4 === 0) {
        arrSplit.splice(i, 0, ".");
        index++;
      }
    }
    arrSplit.reverse();

    return arrSplit.join("");
  };

  return (
    <div className="related_products">
      <div>
        <h3>Related Products</h3>
      </div>
      <div className="related_product_img_container">
        {isNotEmpty &&
          data.map((prd, i) => (
            <div
              id={prd._id}
              key={prd._id}
              className="related_item"
              onClick={clickHandler}
            >
              <img
                id={prd._id}
                className="related_img"
                src={fix(prd.img1)}
                alt={prd.name}
                onClick={clickHandler}
              />
              <p id={prd._id} onClick={clickHandler}>
                {prd.name}
              </p>
              <p id={prd._id} onClick={clickHandler}>{`${format(
                prd.price + ""
              )} VND`}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
export default RelatedProduct;
