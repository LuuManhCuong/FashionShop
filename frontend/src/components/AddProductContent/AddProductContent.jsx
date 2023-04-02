import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./addProductContent.module.scss";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { HOT_URL } from "../../api/api";

const cx = classNames.bind(styles);

function AddProductContent() {
  const navigate = useNavigate();
  const checkUser = useSelector(userSelector);
  const user = checkUser.login?.currentUser;

  const [showLoader, setShowLoader] = useState(false);
  const [onSend, setOnSend] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("men");
  const [category, setCategory] = useState("Clothings");
  const [color, setColor] = useState("Black");
  const [size, setSize] = useState("M");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState(0);
  const [quantity, setQuantity] = useState("");
  const [avatar, setAvatar] = useState([]);
  const [images, setImages] = useState([]);

  // base64 Url
  const [picture, setPicture] = useState([]);
  const [avt, setAvt] = useState([]);

  const [textButton, setTextButton] = useState("next");

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
      setOnSend(false);
      toast.error(` M nhập thiếu thông tin rồi kìa !!! `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleConverImg = (arr, cb) => {
    arr.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        cb((prev) => [...prev, reader.result]);
      };
    });
  };

  const onSubmit = (data) => {
    if (
      (!name, !quantity, !price, !description) ||
      avatar.length <= 0 ||
      images.length <= 0
    ) {
      setOnSend(false);
    } else {
      if (!onSend) {
        handleConverImg(images, setPicture);
        handleConverImg(avatar, setAvt);

        // console.log("imgBs64: ", picture);
        // console.log("avtBs64: ", avt);

        if (picture.length <= 0) {
          setTextButton("Hoàn tất");
          setOnSend(false);
        } else {
          setShowLoader(true);
          setOnSend(true);

          axios
            .post(`/cloudinary-upload`, {
              picture,
              avatar: avt,
            })
            .then((resCloud) => {
              let setData = {
                ...data,
                avatar: resCloud.data.avatarUrl.secure_url,
                images: resCloud.data.imgPusher,
                price,
                gender,
                category,
                color,
                size,
              };

              // console.log("send: ", setData);

              axios
                .post(`${HOT_URL}/admin/add/product`, setData, {
                  headers: {
                    token: `Bearer ${user.accessToken}`,
                  },
                })
                .then((res) => {
                  setOnSend(false);
                  setShowLoader(false);
                  setAvatar([]);
                  setImages([]);
                  setName("");
                  setPrice("");
                  setSale("");
                  setDescription("");
                  setQuantity("");
                  toast.success(` Thêm sản phẩm thành công !!! `, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });

                  // navigate(`/shop/detail/${res.data}`);
                })
                .catch((err) => {
                  setOnSend(true);
                  setShowLoader(false);
                  setAvatar([]);
                  setImages([]);
                  setName("");
                  setPrice("");
                  setSale("");
                  setDescription("");
                  setQuantity("");
                  toast.error(` Thông tin chưa hợp lệ, thử lại đi !!! `, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                });
            });
        }
      }
    }
  };

  return (
    <>
      <div className={cx("add-product-container")}>
        <div className={cx("wrap")}>
          <h2 className={cx("name")}>Tạo Sản Phẩm Mới</h2>

          <form
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
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
                  min={1}
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
                  max={100}
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
                  min={1}
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
                  {avatar && avatar.length > 0 ? (
                    avatar.map((img, i) => (
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
                  ) : (
                    <p>M chưa chọn ảnh kìa!!!</p>
                  )}
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
                  {images && images.length > 0 ? (
                    images.map((img, i) => (
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
                  ) : (
                    <p>M chưa chọn ảnh kìa!!!</p>
                  )}
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
                <h3>{price - (price / 100) * sale}$</h3>
              </div>
            </div>

            <div className={cx("submit", textButton)}>
              <button type="submit" onClick={() => handleCheckData()}>
                {textButton}
              </button>
              {showLoader ? (
                <Box sx={{ width: "100%" }}>
                  <LinearProgress />
                </Box>
              ) : null}
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
    </>
  );
}

export default AddProductContent;
