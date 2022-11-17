import React from "react";
import "./productItem.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  FavoriteBorder,
  ShoppingCartOutlined,
  HeartBroken,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../redux/selectors";
import { reloadApi } from "../../redux/reducer/adminSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkUser = useSelector(userSelector);
  const user = checkUser.login?.currentUser;

  const handleAddProduct = (id, name) => {
    if (!user) {
      navigate("/login");
    } else {
      axios
        .get(`http://localhost:5000/cart/${user.idUser}`, {
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
                `http://localhost:5000/cart/update/incart/${id}`,
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
                `http://localhost:5000/cart/add`,
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
  return (
    <div className="product-item-wraper">
      <div className="product-item">
        <div className="product-content">
          <Link to="/shop/detail/1">
            <img src={product.avatar} alt="product" />
            <div className="label">
              <h4>
                SALE {product.sale}% ({product.gender}/{product.category}) /{" "}
                {product.size}
              </h4>
            </div>
            <FavoriteBorder className="heart"></FavoriteBorder>
          </Link>

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
