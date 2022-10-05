import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import SliderProduct from "../SliderProduct/SliderProduct";
import styles from "./bestsale.module.scss";
const cx = classNames.bind(styles);
const categories = ["Clothings", "HandBag", "Shoes", "Accessories"];

function BestSale(props) {
  const [active, setActive] = useState(categories[0]);
  return (
    <div className={cx("container")}>
      {/* men: thêm class "men" vào */}
      <div className={cx(`banner`, props.classname)}>
        <img
          src="	https://preview.colorlib.com/theme/fashi/img/products/women-large.jpg"
          alt="banner"
          className={cx("banner-img")}
        />
        <div className={cx("banner-text")}>
          <h4>Women's</h4>
          <Link to="/shop">Discover More</Link>
        </div>
      </div>
      <div className={cx("best-sale-wrap")}>
        <div className={cx("nav")}>
          <ul>
            {categories.map((category, i) => (
              <li key={i}>
                <h3
                  className={cx(active === category ? "active" : "")}
                  onClick={() => setActive(category)}
                >
                  {category}
                </h3>
              </li>
            ))}
          </ul>
        </div>
        <SliderProduct
          slug={`${props.gender}/${active}`}
          className={cx("slider-wrap")}
        ></SliderProduct>
      </div>
    </div>
  );
}

export default BestSale;
