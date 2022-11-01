import "./productBlock.scss";
import ProductItem from "../ProductItem/ProductItem";
import Doremon from "../Doremon/Doremon";
import { useSelector } from "react-redux";
import { shopDataSelector } from "../../redux/selectors";

function ProductBlock({ slug }) {
  const products = useSelector(shopDataSelector);
  console.log("prodcuts: ", products);
  return (
    <div className="product-block-wrap">
      <h1 className="slug">{slug}</h1>
      {products.isLoading ? (
        <Doremon></Doremon>
      ) : (
        <div className="product-block">
          {products.data.map((product, i) => (
            <ProductItem
              product={product}
              key={product.idProduct || i}
            ></ProductItem>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductBlock;
