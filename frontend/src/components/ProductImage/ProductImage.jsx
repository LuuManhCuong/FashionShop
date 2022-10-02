import React, { useEffect } from "react";
import Slider from "react-slick";
import "./productImage.scss";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
function ProductImage() {
  let slickCurrent;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    slickCurrent = document.querySelector(".slick-current div div img").src;
  }, []);
  const settings = {
    customPaging: function (i) {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a>
          <img className="imgPrev" src={slickCurrent} alt="img" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIosOutlined />,
    prevArrow: <ArrowBackIosNewOutlined />,
  };
  return (
    <div className="product-image">
      <h2>Hình ảnh sản phẩm</h2>
      <Slider {...settings}>
        <div>
          <img
            src="https://preview.colorlib.com/theme/fashi/img/xlatest-1.jpg.pagespeed.ic.NWH-yJ0uMS.webp"
            alt="img"
          />
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/fashi/img/xlatest-2.jpg.pagespeed.ic.BHI3A1KcBK.webp"
            alt="img"
          />
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/fashi/img/xlatest-3.jpg.pagespeed.ic.oSrw_eGSen.webp"
            alt="img"
          />
        </div>
        <div>
          <img
            src="https://preview.colorlib.com/theme/fashi/img/xlatest-3.jpg.pagespeed.ic.oSrw_eGSen.webp"
            alt="img"
          />
        </div>
      </Slider>
    </div>
  );
}

export default ProductImage;
