import "./productBlock.scss";
import ProductItem from "../ProductItem/ProductItem";

function ProductBlock({ slug }) {
  return (
    <div className="product-block-wrap">
      <h1 className="slug">{slug}</h1>
      <div className="product-block">
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </div>
    </div>
  );
}

export default ProductBlock;
