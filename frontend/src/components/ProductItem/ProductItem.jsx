import React, { useState, useRef, useEffect } from "react";
import "./productItem.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  FavoriteBorder,
  ShoppingCartOutlined,
  HeartBroken,
  Favorite,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { reloadApiSlector, userSelector } from "../../redux/selectors";
import { reloadApi } from "../../redux/reducer/adminSlice";
import { HOT_URL } from "../../api/api";
function ProductItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkUser = useSelector(userSelector);
  const user = checkUser.login?.currentUser;
  const reload = useSelector(reloadApiSlector);

  const [isLike, setIsLike] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get(`${HOT_URL}/like/product/${user.idUser}`, {
          headers: {
            token: `Bearer ${user.accessToken}`,
          },
        })
        .then((res) => {
          // console.log("sp đã like: ", res.data);
          setIsLike(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [reload]);

  const handleAddProduct = (id, name) => {
    if (!user) {
      navigate("/login");
    } else {
      axios
        .get(`${HOT_URL}/cart/${user.idUser}`, {
          headers: {
            token: `Bearer ${user.accessToken}`,
          },
        })
        .then((res) => {
          // console.log("carL: ", res.data);

          const date = new Date();
          let getTime = `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

          let count;
          let checkInclude = res.data.some((item, i) => {
            count = item.inCart;
            return item.idProduct.includes(id);
          });
          if (checkInclude) {
            axios
              .patch(
                `${HOT_URL}/cart/update/incart/${id}`,
                {
                  inCart: (count += 1),
                },
                {
                  headers: {
                    token: `Bearer ${user.accessToken}`,
                  },
                }
              )
              .then((res) => {
                toast.success(`+1 sản phẩm: ${name} vào giỏ hàng`, {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                dispatch(reloadApi.actions.setReload());
              })
              .catch((err) => console.log(err));
          } else {
            axios
              .post(
                `${HOT_URL}/cart/add`,
                {
                  idProduct: id,
                  idUser: user.idUser,
                  time: getTime,
                },
                {
                  headers: {
                    token: `Bearer ${user.accessToken}`,
                  },
                }
              )
              .then((res) => {
                toast.success(
                  `Thêm sản phẩm: ${name} vào giỏ hàng thành công`,
                  {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  }
                );
                dispatch(reloadApi.actions.setReload());
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleLike = (id) => {
    if (!user) {
      navigate("/login");
    } else {
      axios
        .get(`${HOT_URL}/like/${id}`, {
          headers: {
            token: `Bearer ${user.accessToken}`,
          },
        })
        .then((res) => {
          let checkInclude = res.data.some((item, i) => {
            return item.idUser.includes(user.idUser);
          });

          if (checkInclude) {
            // console.log("đã tồn tại => xóa");
            let dislike = axios.delete(
              `${HOT_URL}/dislike?idProduct=${id}&idUser=${user.idUser}`,
              {
                headers: {
                  token: `Bearer ${user.accessToken}`,
                },
              }
            );

            let setlike = axios.patch(
              `${HOT_URL}/setlike/${id}`,
              {
                like: (product.like -= 1),
              },
              {
                headers: {
                  token: `Bearer ${user.accessToken}`,
                },
              }
            );

            Promise.all([dislike, setlike])
              .then((res) => {
                dispatch(reloadApi.actions.setReload());
              })
              .catch((err) => console.log(err));
          } else {
            // console.log("chưa tồn tại  => like");
            let like = axios.post(
              `${HOT_URL}/like`,
              {
                idUser: user.idUser,
                idProduct: id,
              },
              {
                headers: {
                  token: `Bearer ${user.accessToken}`,
                },
              }
            );

            let setlike = axios.patch(
              `${HOT_URL}/setlike/${id}`,
              {
                like: (product.like += 1),
              },
              {
                headers: {
                  token: `Bearer ${user.accessToken}`,
                },
              }
            );

            Promise.all([like, setlike])
              .then((res) => {
                // console.log("like: ", res[0].data);

                dispatch(reloadApi.actions.setReload());
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="product-item-wraper">
      <div className="product-item">
        <div className="product-content">
          <Link to={`/shop/detail/${product.idProduct}`}>
            <img src={product.avatar} alt="product" />
            <div className="label">
              <h4>SALE {product.sale}%</h4>
              <h4>{product.gender}</h4>
              <h4>{product.category}</h4>
              <h4>{product.size}</h4>
            </div>
          </Link>
          <div
            className={`heart-wrap`}
            id={product.idProduct}
            onClick={() => handleLike(product.idProduct)}
          >
            ( {product.like || 0} )
            {isLike.some((e) => e.idPost === product.idProduct) ? (
              <Favorite className="heart heart-fill"></Favorite>
            ) : (
              <FavoriteBorder className="heart heart-outline"></FavoriteBorder>
            )}
          </div>
          <ul className="view">
            <li className="icon-wrap">
              <HeartBroken className="icon"></HeartBroken>
            </li>
            <li className="text">
              <Link to="/shop/detail/1">+ Quick view</Link>
            </li>
            <li className="icon-wrap">
              <button
                onClick={() =>
                  handleAddProduct(product.idProduct, product.name)
                }
              >
                <ShoppingCartOutlined className="icon"></ShoppingCartOutlined>
              </button>
            </li>
          </ul>
        </div>
        <div className="product-price">
          <p>{product.category}</p>
          <h4 className="name">{product.name}</h4>
          <h3 className="price">
            ${product.price}
            <span>$35.00</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProductItem);
