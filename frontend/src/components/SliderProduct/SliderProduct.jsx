import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import axios from "axios";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import ProductItem from "../ProductItem/ProductItem";
import { useEffect, useState } from "react";

function SliderProduct({ gender, category, initMen, initWomen }) {
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

export default SliderProduct;
