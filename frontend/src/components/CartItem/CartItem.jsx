import "./cartItem.scss";
import { ClearOutlined } from "@mui/icons-material";
function CartItem() {
  return (
    <div className="cart-item">
      <img
        src="data:image/webp;base64,UklGRvABAABXRUJQVlA4IOQBAABwDACdASpGAEYAPm0ylkckIyIhqlQKWIANiWcA1WGLg72RTlG9GjOvoizGSSN+36xyU/QF8a+os7ZJl6KvZmgfSQR3wWzyvkGUg3tuYZWJRVVG69yP7mbdiW0zUo1ek4m4/ruMa8+jXfpPAwAA/vsNFaChzMEk1xhyOA+1fI7xPdgjri8iBhHMyY4ZV/4wFnSzpBDIm6yy+jLMsuhCcFexgVBv4AIoqE5gIOcD8A6hMsGruOzWGaQFFg47OqZS/AlsbLGS0Qtx3jWnANWHRF9cg4uIW+O4H4/dz+NejgEYbZwNZ7ClvsSqnEKiTJ5iL9IMtY72Ie5RoXnKiB3zL3ZEBi7JyPqE0ZfNLxwCKBxcNcRGvPHotGMLhdqhP7mfLftB5zV8Kajftr99adPh7Cdiznjnj22LIpTHXOLFCDSoEgEX+lVO06nJ9gSZuVRzXnkjSVLeVUk9BYWG7eLVUcCU90FSpvqIPp2eTxh8opmmGmraWzr39KAEomEGvOZ9ahfHYR5n0zKh+u9BFze2VfX9jrTjA6+sIAMNwYc3rSJjrFy+XHjvLFeU251btGRtxFZ6iU9aIndcMwM6l5xddY9Vk+N1OCgj9YpM8NmlzcBCwnfSEf4pXa8LrvK+YZRBweAamEAA"
        alt="product"
        className="product-img"
      />
      <div className="context">
        <h3 className="price">
          $60.00
          <p>x 2</p>
        </h3>
        <h3 className="product-name">Kabino Bedside Table</h3>
      </div>
      <ClearOutlined className="delete-btn"></ClearOutlined>
    </div>
  );
}

export default CartItem;
