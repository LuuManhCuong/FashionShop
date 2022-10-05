import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import ProductItem from "../ProductItem/ProductItem";
function SliderProduct({ slug }) {
  // console.log(slug)
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
    <Slider {...settings}>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
      <ProductItem></ProductItem>
    </Slider>
  );
}

export default SliderProduct;
