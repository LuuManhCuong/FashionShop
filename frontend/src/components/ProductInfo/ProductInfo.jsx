import "./productInfo.scss";
import { Remove, Add } from "@mui/icons-material";
import { useState } from "react";

function ProductInfo() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product-info">
      <h3 className="product-name">Áo khoác thu đông nam nữ</h3>
      <ul>
        <li>
          <h4>
            105
            <p>Đánh giá</p>
          </h4>
        </li>
        <li>
          <h4>
            2305
            <p>Đã bán</p>
          </h4>
        </li>
      </ul>
      <p className="desciption">
        Quý Khách vui lòng đọc kỹ Thông Tin Sản Phẩm trước khi đặt hàng, tránh
        đặt rồi hủy hàng nhé, hoặc có hủy thì hủy sớm trước khi đơn hàng đưa vận
        chuyển nhé. Vì sau khi đặt hàng, hàng sẽ được Shop gói và gửi đi liền
        trong ngày hoặc ngày hôm sau. Vì thế việc hủy hàng sẽ gây nhiều khó khăn
        cho Shop. Rất mong Quý Khách cảm thông và đắn đo giúp Shop!!!
      </p>
      <div className="choose-color">
        <h4>Color</h4>
        <div className="color-item">
          <button>Black</button>
          <button>White</button>
          <button>Red</button>
        </div>
      </div>

      <div className="choose-size">
        <h4>Size</h4>
        <div className="size-item">
          <button>S 45-50kg</button>
          <button>M 50-60kg</button>
          <button>L 60-70kg</button>
        </div>
      </div>

      <div className="choose-quantity">
        <h4>quantity</h4>
        <div className="quantity-item">
          <button
            className="reduce"
            onClick={() => {
              quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1);
            }}
          >
            <Remove></Remove>
          </button>
          <input type="text" value={quantity} />
          <button className="increse" onClick={() => setQuantity(quantity + 1)}>
            <Add></Add>
          </button>
        </div>{" "}
        <h4>2022 sản phẩm có sẵn</h4>
      </div>

      <div className="button">
        <button>Thêm vào giỏ hàng</button>
        <button>Mua ngay</button>
      </div>
    </div>
  );
}

export default ProductInfo;
