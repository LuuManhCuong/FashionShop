import "./cartItem.scss";
import { ClearOutlined } from "@mui/icons-material";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../redux/selectors";
import { reloadApi } from "../../redux/reducer/adminSlice";
import { HOT_URL } from "../../api/api";

function CartItem({ productItem }) {
  const dispatch = useDispatch();
  const checkUser = useSelector(userSelector);
  const user = checkUser.login?.currentUser;

  const handleDeleteProduct = (id, idProduct) => {
    // console.log(id);
    let resetCart = axios.patch(
      `${HOT_URL}/cart/update/incart/${idProduct}`,
      {
        inCart: 1,
      },
      {
        headers: {
          token: `Bearer ${user.accessToken}`,
        },
      }
    );

    let deleteCart = axios.delete(`${HOT_URL}/cart/delete/${id}`, {
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
    <div className="cart-item">
      <img src={productItem.avatar} alt="product" className="product-img" />
      <div className="context">
        <h3 className="price">
          {productItem.price}$ <p>x {productItem.inCart}</p>
        </h3>
        <h3 className="product-name">{productItem.productName}</h3>
      </div>
      <button
        onClick={() =>
          handleDeleteProduct(productItem.idCart, productItem.idProduct)
        }
      >
        <ClearOutlined className="delete-btn"></ClearOutlined>
      </button>
    </div>
  );
}

export default CartItem;
