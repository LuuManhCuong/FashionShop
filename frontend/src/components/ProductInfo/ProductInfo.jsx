import "./productInfo.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Favorite } from "@mui/icons-material";

function ProductInfo() {
  // so luong
  const [add, setAdd] = useState(1);
  //info
  const [info, setInfo] = useState({});
  let userId = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/shop/detail/info/${userId.id}`)
      .then((res) => {
        setInfo(res.data[0]);
        // console.log(res.data[0])
      });
  }, [userId.id]);
  const handleAdd = () => {
    setAdd(add + 1);
  };
  const handleDelete = () => {
    setAdd(add - 1);
  };

  return (
    <div className="product-info">
      <div className="line"></div>

      <div className="info">
        <p>
          Danh mục: <span>{info.category}</span>
        </p>
        <p>
          Dành cho: <span>{info.gender}</span>
        </p>


        <div className={`heart-wrap-if`}>
          ( {info.like || 0} )<Favorite className="heart heart-fill"></Favorite>
        </div>

        <h1>{info.name}</h1>

        <div className="feedback">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>

          <span style={{ marginLeft: "10px" }}>(xem 13 đánh giá)</span>
          <span> | đã bán {info.sold || 0} sản phẩm</span>
        </div>

        <div className="color">
          <p>Colors: {info.color} </p>
        </div>

        <h1 className="price">{info.price}đ</h1>

        <div className="ship">
          <p>
            Giao đến
            <span style={{ paddingLeft: "5px" }}>
              <a href="tiki.vn">33 Xô Viết Nghệ Tĩnh</a>
            </span>
            <span style={{ paddingLeft: "20px" }}>Đổi địa chỉ</span>
          </p>
        </div>

        <div className="size">
          <p>
            Kích thước: <span>{info.size}</span>{" "}
          </p>
        </div>

        <div className="soluong">
          <p className="sl">Số lượng: </p>
          <button onClick={handleDelete}>-</button>
          <h4>{add}</h4>
          <button onClick={handleAdd}>+</button>
        </div>

        <div className="but-add">
          <button className="add">Thêm vào giỏ hàng</button>
          <button className="buy">Mua ngay</button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
