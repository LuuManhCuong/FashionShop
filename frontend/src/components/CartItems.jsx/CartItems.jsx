import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./cartItems.module.scss";
import axios from "axios";
import { reloadApi } from "../../redux/reducer/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../redux/selectors";
// import { Link } from "react-router-dom";
import { Clear } from "@mui/icons-material";

const cx = classNames.bind(styles);

// nhận lại dữ liệu productItem từ component cha
function CardItems({ productItem }) {
  const dispatch = useDispatch();
  const checkUser = useSelector(userSelector);
  const user = checkUser.login?.currentUser;
  const [quantity, setQuantity] = useState(productItem.inCart);

  useEffect(() => {
    axios
      .patch(
        `https://fashionshop.onrender.com/cart/update/incart/${productItem.idProduct}`,
        {
          inCart: quantity,
        },
        {
          headers: {
            token: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((res) => {
        dispatch(reloadApi.actions.setReload());
      })
      .catch((err) => console.log(err));
  }, [dispatch, productItem.idProduct, quantity, user.accessToken]);

  const handleDeleteProduct = (id, idProduct) => {
    // console.log(id);
    let resetCart = axios.patch(
      `https://fashionshop.onrender.com/cart/update/incart/${idProduct}`,
      {
        inCart: 1,
      },
      {
        headers: {
          token: `Bearer ${user.accessToken}`,
        },
      }
    );

    let deleteCart = axios.delete(`https://fashionshop.onrender.com/cart/delete/${id}`, {
      headers: {
        token: `Bearer ${user.accessToken}`,
      },
    });

    Promise.all([resetCart, deleteCart])
      .then((res) => {
        dispatch(reloadApi.actions.setReload());
      })
      .catch((err) => console.log(err));
  };

  return (
    <tbody>
      <tr>
        <td>
          <img className={cx("img-table")} src={productItem.avatar} alt="img" />
        </td>
        <td>
          <h5 className={cx("product-name")}>{productItem.productName}</h5>
        </td>
        <td>{productItem.price} $</td>
        <td>
          <div className={cx("quatity")}>
            <span
              onClick={() =>
                setQuantity((pre) => {
                  if (pre === 1) {
                    return 1;
                  }
                  return pre - 1;
                })
              }
              className={cx("subtraction")}
            >
              -
            </span>

            <span>{quantity}</span>

            <span
              onClick={() => setQuantity((pre) => pre + 1)}
              className={cx("sumation")}
            >
              +
            </span>
          </div>
        </td>

        {/* total price */}
        <td>{productItem.price * productItem.inCart} $</td>

        <td className={cx("delete")}>
          {/* nuts  */}
          <button
            onClick={() =>
              handleDeleteProduct(productItem.idCart, productItem.idProduct)
            }
          >
            <Clear className={cx("delete-btn")}></Clear>
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default CardItems;
