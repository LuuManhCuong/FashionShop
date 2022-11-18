import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./addProductContent.module.scss";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

function AddProductContent() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("men");
  const [category, setCategory] = useState("Clothings");
  const [color, setColor] = useState("Black");
  const [size, setSize] = useState("M");
  const [price, setPrice] = useState();
  const [sale, setSale] = useState(0);
  const [quantity, setQuantity] = useState();
  const [avatar, setAvatar] = useState([]);
  const [images, setImages] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCheckData = () => {
    if (
      (!name, !quantity, !price, !description) ||
      avatar.length <= 0 ||
      images.length <= 0
    ) {
      toast.error(` M nhập thiếu thông tin rồi kìa !!! `, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const onSubmit = (data) => console.log(data);
  return (
    <div className={cx("add-product-container")}>
      <div className={cx("wrap")}>
        <h2 className={cx("name")}>Tạo Sản Phẩm Mới</h2>
        {/* <ul className={cx("add-button")}>
          <li>
            <span>
              <BusinessCenter />
            </span>
            <h2>Thêm Nhà Cung Cấp</h2>
          </li>
          <li>
            <span>
              <BusinessCenter />
            </span>
            <h2>Thêm Nhà Cung Cấp</h2>
          </li>
          <li>
            <span>
              <BusinessCenter />
            </span>
            <h2>Thêm Nhà Cung Cấp</h2>
          </li>
        </ul> */}
        <form
          onSubmit={handleSubmit((data) => {
            let setData = {
              ...data,
              price,
              gender,
              category,
              color,
              size,
            };
            onSubmit(setData);
          })}
        >
          <div className={cx("input-container")}>
            <div className={cx("input-info-product")}>
              <label htmlFor="">Tên Sản Phẩm </label>
              <input
                {...register("name", { required: true })}
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {errors?.name?.type === "required" && (
                <p
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    marginTop: "5px",
                  }}
                >
                  Vui lòng nhập trường này{" "}
                </p>
              )}
            </div>

            <div className={cx("input-info-product")}>
              <label htmlFor="">Giới tính</label>
              <select
                name="gender"
                id=""
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
            </div>

            <div className={cx("input-info-product")}>
              <label htmlFor="">Danh mục</label>
              <select
                name="category"
                id=""
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="Clothings">Clothings</option>
                <option value="Handbag">Handbag</option>
                <option value="Shoes">Shoes</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
            <div className={cx("input-info-product")}>
              <label htmlFor="">Màu sắc</label>
              <select
                name="color"
                id=""
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              >
                <option value="black">Black</option>
                <option value="purple">Purple</option>
                <option value="White">White</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="Violet">Violet</option>
              </select>
            </div>
            <div className={cx("input-info-product")}>
              <label htmlFor="">Size</label>
              <select
                name="size"
                id=""
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="SX">SX</option>
              </select>
            </div>
            <div className={cx("input-info-product")}>
              <label htmlFor="">Giá bán ( $ )</label>
              <input
                {...register("price", { required: true })}
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              {errors?.price?.type === "required" && (
                <p
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    marginTop: "5px",
                  }}
                >
                  Vui lòng nhập trường này{" "}
                </p>
              )}
            </div>

            <div className={cx("input-info-product")}>
              <label htmlFor="">Khuyến mãi ( % )</label>
              <input
                {...register("sale", { required: true })}
                type="number"
                value={sale}
                onChange={(e) => setSale(e.target.value)}
              />
            </div>

            <div className={cx("input-info-product")}>
              <label htmlFor="">Số lượng</label>
              <input
                {...register("quantity", { required: true })}
                type="number"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
              {errors?.quantity?.type === "required" && (
                <p
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    marginTop: "5px",
                  }}
                >
                  Vui lòng nhập trường này{" "}
                </p>
              )}
            </div>

            <div className={cx("input-info-product")}>
              <label htmlFor="">Ảnh đại diện</label>
              <input
                {...register("avatar", { required: true })}
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => setAvatar([e.target.files[0]])}
              />
              {errors?.avatar?.type === "required" && (
                <p
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    marginTop: "5px",
                  }}
                >
                  Vui lòng chọn ảnh đại diện
                </p>
              )}
              <div className={cx("preview-imgs")}>
                {avatar.length > 0
                  ? avatar.map((img, i) => (
                      <img
                        key={i}
                        style={{
                          width: "50px",
                          height: "60px",
                          objectFit: "contain",
                        }}
                        src={URL.createObjectURL(img)}
                        alt="img"
                      />
                    ))
                  : null}
              </div>
            </div>

            <div className={cx("input-info-product")}>
              <label htmlFor="">Ảnh sản phẩm</label>
              <input
                {...register("images", { required: true })}
                type="file"
                multiple
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  setImages(() => {
                    let image = [];
                    for (let i = 0; i < e.target.files.length; i++) {
                      image.push(e.target.files[i]);
                    }
                    return image;
                  });
                }}
              />
              {errors?.images?.type === "required" && (
                <p
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    marginTop: "5px",
                  }}
                >
                  Vui lòng chọn ảnh mô tả sản phẩm
                </p>
              )}

              <div className={cx("preview-imgs")}>
                {images.length > 0
                  ? images.map((img, i) => (
                      <img
                        key={i}
                        style={{
                          width: "50px",
                          height: "60px",
                          objectFit: "contain",
                        }}
                        src={URL.createObjectURL(img)}
                        alt="img"
                      />
                    ))
                  : null}
              </div>
            </div>
            <div className={cx("input-info-product")}>
              <label htmlFor="">Mô Tả Sản Phẩm</label>
              <input
                {...register("description", { required: true })}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
              {errors?.description?.type === "required" && (
                <p
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    marginTop: "5px",
                  }}
                >
                  Vui lòng nhập trường này
                </p>
              )}
            </div>

            <div className={cx("input-info-product")}>
              <label htmlFor="">Thành tiền</label>
              <h3>400$</h3>
            </div>
          </div>

          <div className={cx("submit")}>
            <input type="submit" onClick={() => handleCheckData()}></input>
          </div>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default AddProductContent;
