import React, { useEffect } from "react";
import Slider from "react-slick";
import "./productImage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import ProductItem from "../ProductItem/ProductItem";
import { useEffect, useState } from "react";

function productImage({ gender, category, initMen, initWomen }) {
  const [dataWomen, setDataWomen] = useState(initWomen);
  const [dataMen, setDataMen] = useState(initMen);

  useEffect(() => {
    fetch(`http://localhost:5000/bestSale/?gender=women&category=${category}`)
      .then((res) => res.json())
      .then((data) => setDataWomen(data));
  }, [category]);

  useEffect(() => {
    fetch(`http://localhost:5000/bestSale/?gender=men&category=${category}`)
      .then((res) => res.json())
      .then((data) => setDataMen(data));
  }, [category]);

  const settings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    nextArrow: <ArrowForwardIosOutlined />,
    prevArrow: <ArrowBackIosNewOutlined />,
    // cssEase: "linear"
  };

  return (
    <>
      {gender === "men" ? (
        <Slider {...settings}>
          {dataMen.map((product) => (
            <ProductItem
              key={product.idProduct}
              product={product}
            ></ProductItem>
          ))}
        </Slider>
      ) : (
        <Slider {...settings}>
          {dataWomen.map((product) => (
            <ProductItem
              key={product.idProduct}
              product={product}
            ></ProductItem>
          ))}
        </Slider>
      )}
    </>
  );
}

export default productImage;


    
    // <div className="product-image">
    //   <div className="img-sp">
    //   <img src="https://i.pinimg.com/236x/e6/4e/98/e64e9814f84644b27316d0d317afb1c8.jpg" alt="img"></img>
    //   </div>
    //   <div className="alt">
    //   <img src="https://i.pinimg.com/236x/e6/4e/98/e64e9814f84644b27316d0d317afb1c8.jpg" alt="img"></img>
    //   <img src="https://i.pinimg.com/236x/e6/4e/98/e64e9814f84644b27316d0d317afb1c8.jpg" alt="img"></img>
    //   <img src="https://i.pinimg.com/236x/e6/4e/98/e64e9814f84644b27316d0d317afb1c8.jpg" alt="img"></img>
    //   <img src="https://i.pinimg.com/236x/e6/4e/98/e64e9814f84644b27316d0d317afb1c8.jpg" alt="img"></img>
    //   </div>
    // </div>



