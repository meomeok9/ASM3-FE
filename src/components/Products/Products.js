import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "../../hook/useFetch";
import Item from "./Item";
import "./Products.css";
const Products = (props) => {
  //if category props is not undifined then data will be all product that has same category
  const data = useSelector((state) => state.data.data);
  const { sendGetRequest } = useFetch();
  const [dataArr, setDataArr] = useState();
  const cat = props.category || "all";
  let displayLength = 8;
  useEffect(() => {
    const getData = (d) => {
      setDataArr(d);
    };
    sendGetRequest(`/getProductByCategory/${cat}`, getData);
  }, [cat, sendGetRequest]);

  // Khi hiển thị danh sách các sản phẩm, bạn sẽ cần chú ý các điều sau:

  // -Chỉ hiển thị tối đa 8 phần tử đầu tiên của danh sách trả về từ API.
  if (dataArr) displayLength = dataArr.length >= 8 ? 8 : dataArr.length;
  // -Hình ảnh để hiển thị ở danh sách sẽ là thuộc tính img1.
  // -price sẽ ở kiểu số, bạn sẽ cần chuyển đổi thành dạng chuỗi vào bổ
  // sung các dấu chấm ngăn cách giữa các đơn vị. Ví dụ "10999000" sẽ

  // thành "10.999.000".
  const classes = `shoppage_container ${props.className}`;
  return (
    <div className={classes}>
      {dataArr &&
        dataArr.length > 0 &&
        dataArr.map(
          (product, i) =>
            i < displayLength && <Item data={product} key={product._id} />
        )}
    </div>
  );
};
export default Products;
