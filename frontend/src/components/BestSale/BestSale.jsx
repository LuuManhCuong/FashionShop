import classNames from "classnames/bind";
import SliderProduct from "../SliderProduct/SliderProduct";
import styles from "./bestsale.module.scss";
const cx = classNames.bind(styles);

function BestSale(props) {
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
          <a href="/">Discover More</a>
        </div>
      </div>
      <div className={cx("best-sale-wrap")}>
        <div className={cx("nav")}>
          <ul>
            <li>
              <a href="/">Clothings</a>
            </li>
            <li>
              <a href="/">HandBag</a>
            </li>
            <li>
              <a href="/">Shoes</a>
            </li>
            <li>
              <a href="/">Accessories</a>
            </li>
          </ul>
        </div>
        <SliderProduct className={cx("slider-wrap")}></SliderProduct>
      </div>
    </div>
  );
}

export default BestSale;
