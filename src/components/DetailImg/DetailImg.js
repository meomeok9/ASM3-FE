import { useEffect } from "react";
import { useState } from "react";
import useFixUrl from "../../hook/useFixUrl";
import "./DetailImg.css";
const DetailImg = (prosp) => {
  const { fix } = useFixUrl();
  const imgArr = prosp.imgArr;
  const [mainImg, setMainImg] = useState();
  const  fiximgs = imgArr.map((img) => fix(img));
  useEffect(() => {
    setMainImg(fiximgs[0]);
  }, [imgArr]);
  const changeMainImgHandler = (e) => {
    const main = mainImg;
    setMainImg(e.target.src);
    e.target.src = main;
  };

  return (
    <div className="detailimg_container">
      <div className="sm-left">
        <img src={fiximgs[1]} alt="img2" onClick={changeMainImgHandler}></img>
        <img src={fiximgs[2]} alt="img3" onClick={changeMainImgHandler}></img>
        <img src={fiximgs[3]} alt="img4" onClick={changeMainImgHandler}></img>
      </div>
      <img className="lg-right" src={mainImg} alt="img"></img>
    </div>
  );
};
export default DetailImg;
