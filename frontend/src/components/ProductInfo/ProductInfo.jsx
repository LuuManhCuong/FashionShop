import "./productInfo.scss";
import { useState } from "react";

const sizes = [
  {id: 1, name: 'M'}, {id: 2, name: 'L'}, { id: 3, name: 'S'}
]

const colors = [
  {id: 1, name: 'red'}, {id: 2, name: 'green'}, {id: 3, name: 'black'},
]

function ProductInfo() {

  // color
  const [color, setColor] = useState(2)

  const handleColor = () => {
    setColor(color)
    // console.log(color)
  }

  // size 

  const [size, setSize] = useState(1)

  const handleSize = () => {
    setSize (size)
    // console.log(size)
  }


// so luong
  const [add, setAdd] = useState(1)

  const handleAdd = () => {
    setAdd(add + 1)
  } 
  const handleDelete = () => {
    setAdd(add - 1)
  }



  return (
    <div className="product-info">

      <div className="line"></div>

      <div className="info">
        <p>Thương hiệu: <span>DoKo</span></p>

        <h1>Áo hoodie nam vãi nhung thu đông 3 màu</h1>

        <div className="feedback">

          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>

          <span style={{ marginLeft: "10px" }}>(xem 13 đánh giá)</span>
          <span> | đã bán 21 sản phẩm</span>

        </div>

        <div className="color">

          <p>Colors: </p>

          {colors.map(color => (
            <div className="cls" key={color.id}>
              <input 
                type="radio"
                checked={color === color.id}
                onChange={() => setColor(color.id)}
                onClick={handleColor}
              ></input>
              <div className="cln">{color.name}</div>
            </div>

          ))}

          {/* <div className="cls">
            <div className="red"></div>
            <div className="green"></div>
            <div className="black"></div>
          </div> */}


        </div>

        <h1 className="price">165 000 đ</h1>

        <div className="ship">
          <p>Giao đến 
            <span style={{paddingLeft: "5px"}}><a href="tiki.vn">33  Xô Viết Nghệ Tĩnh</a></span>
            <span style={{paddingLeft: "20px"}}>Đổi địa chỉ</span>
          </p>
        </div>

        <div className="size">
          <p>Kích thước: <span>M</span> </p>

          {sizes.map(size => (

            <div key={size.id} className="size-detail">
                <button
                  onClick={handleSize}
                  onChange={ () => setSize(size.id)}
                >{size.name}</button>
          </div>

          ))}
          
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
