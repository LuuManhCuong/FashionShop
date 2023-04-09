import "./productImage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HOT_URL } from "../../api/api";
function ProductImage() {
  let userId = useParams(); // lấy id của sản phẩm trên đường link
  // console.log("id: ", userId.id);
  const [active, setActive] = useState("");
  const [classActive, setAclassActive] = useState(0);
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get(`${HOT_URL}/shop/detail/${userId.id}`).then((res) => {
      setImages(res.data);
      setActive(() =>
        res.data[0]
          ? res.data[0].url
          : "https://trungcapktktbinhdinh.edu.vn/phan-mem-diet-virus-clean-master/imager_4072.jpg"
      );
    });
  }, [userId.id]);
  return (
    <div className="product-image">
      <div className="img-sp">
        {/* ảnh đc active */}
        <img src={active} alt="img"></img>
      </div>
      {
        // ktr xem images có ảnh hay k
        images.length > 0 ? (
          <div className="wrapimg">
            {/* hiển thị tất cả các ảnh */}
            {images.map((image, index) => (
              <div className="alt" key={index}>
                <img
                  src={image.url}
                  style={
                    classActive === index ? { border: "2px solid red" } : null
                  }
                  alt="img"
                  className={`img-ac ${classActive}`}
                  onClick={(e) => {
                    setActive(image.url);
                    setAclassActive(index);
                  }}
                ></img>
              </div>
            ))}
          </div>
        ) : (
          <h3>Sản phẩm này chưa có ảnh</h3>
        )
      }
    </div>
  );
}

export default ProductImage;
