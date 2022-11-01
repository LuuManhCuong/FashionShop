import classNames from "classnames/bind";
import { useState} from "react";
import { Link } from "react-router-dom";
import SliderProduct from "../SliderProduct/SliderProduct";
import Doremon from "../Doremon/Doremon";
import styles from "./bestsale.module.scss";
import { useSelector } from "react-redux";
import { homeDataSelector } from "../../redux/selectors";

const cx = classNames.bind(styles);
const categories = ["Clothings", "HandBag", "Shoes", "Accessories"];

function BestSale(props) {
  const [active, setActive] = useState(categories[0]);
  const data = useSelector(homeDataSelector);
  return (
    <div className={cx("container")}>
      {/* men: thêm class "men" vào */}
      <div className={cx(`banner`, props.gender)}>
        {props.gender === "women" ? (
          <img
            src="	https://preview.colorlib.com/theme/fashi/img/products/women-large.jpg"
            alt="banner"
            className={cx("banner-img")}
          />
        ) : (
          <img
            src="	https://preview.colorlib.com/theme/fashi/img/products/man-large.jpg.webp"
            alt="banner"
            className={cx("banner-img")}
          />
        )}
        <div className={cx("banner-text")}>
          <h4>{props.gender}</h4>
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
        {data.isLoading ? (
          <Doremon></Doremon>
        ) : (
          <SliderProduct
            initMen={data.data[4]}
            initWomen={data.data[3]}
            gender={props.gender}
            category={active}
            className={cx("slider-wrap")}
          ></SliderProduct>
        )}
      </div>
    </div>
  );
}

export default BestSale;
