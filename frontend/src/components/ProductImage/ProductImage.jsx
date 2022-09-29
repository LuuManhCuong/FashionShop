import React from "react";
import Slider from "react-slick";
import "./productImage.scss";

function ProductImage() {
  let baseUrl = "https://s3.amazonaws.com/static.neostack.com/img/react-slick/";
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          {/* abstract02.jpg */}
          <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="product-image">
      <h2>Hình ảnh sản phẩm</h2>
      <Slider {...settings}>
        <div>
          <img src="https://preview.colorlib.com/theme/fashi/img/xlatest-1.jpg.pagespeed.ic.NWH-yJ0uMS.webp" />
        </div>
        <div>
          <img src="https://preview.colorlib.com/theme/fashi/img/xlatest-2.jpg.pagespeed.ic.BHI3A1KcBK.webp" />
        </div>
        <div>
          <img src="https://preview.colorlib.com/theme/fashi/img/xlatest-3.jpg.pagespeed.ic.oSrw_eGSen.webp" />
        </div>
      </Slider>
    </div>
  );
}

export default ProductImage;
