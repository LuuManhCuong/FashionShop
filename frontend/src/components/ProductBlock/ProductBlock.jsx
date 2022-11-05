import "./productBlock.scss";
import * as React from "react";
import { useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import Doremon from "../Doremon/Doremon";
import { useSelector, useDispatch } from "react-redux";
import {
  shopDataSelector,
  shopFilterPriceSelector,
  shopFilterSelector,
  shopFilterSizeSelector,
} from "../../redux/selectors";
import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function ProductBlock({ slug }) {
  const products = useSelector(shopDataSelector);
  const filterCategory = useSelector(shopFilterSelector);
  const filterPrice = useSelector(shopFilterPriceSelector);
  const filterSize = useSelector(shopFilterSizeSelector);
  const [dataProduct, setDataProduct] = useState(products.data);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  // count page
  React.useEffect(() => {
    fetch(
      `http://localhost:5000/shop/count?gender=${slug}&filter=${filterCategory.filter}&price=${filterPrice.maxPrice}&size=${filterSize.sizes}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(Math.ceil(Number(data[0].total) / 6));
      });
  }, [slug, filterCategory.filter, filterPrice.maxPrice, filterSize.sizes]);

  // call api
  React.useEffect(() => {
    let offset;
    page === 0 ? (offset = 0) : (offset = (page - 1) * 6);
    fetch(
      `http://localhost:5000/shop?page=${offset}&gender=${slug}&filter=${filterCategory.filter}&price=${filterPrice.maxPrice}&size=${filterSize.sizes}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDataProduct(data);
      });
  }, [
    page,
    slug,
    filterCategory.filter,
    filterPrice.maxPrice,
    filterSize.sizes,
  ]);

  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
    window.scrollTo({ top: 110, behavior: "smooth" });
  }

  return (
    <div className="product-block-wrap">
      <h1 className="slug">{slug}</h1>
      {products.isLoading ? (
        <Doremon></Doremon>
      ) : (
        <>
          {dataProduct.length > 0 ? (
            <div className="product-block">
              {dataProduct.map((product, i) => (
                <ProductItem
                  product={product}
                  key={product.idProduct || i}
                ></ProductItem>
              ))}
              <Stack spacing={2}>
                <Typography className="page">
                  Page: {page || 1} / {totalPages} Of {slug}
                </Typography>
                <Pagination
                  className="pagination"
                  count={totalPages}
                  color="primary"
                  page={page || 1}
                  onChange={handleChange}
                />
              </Stack>
            </div>
          ) : (
            <h3>Không tìm thấy sản phẩm nào!!!</h3>
          )}
        </>
      )}
    </div>
  );
}

export default ProductBlock;
