import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./sideBar.module.scss";
import Tag from "../Tags/Tag";
import { SearchOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { blogDataSelector } from "../../redux/selectors";
const cx = classNames.bind(styles);

function SideBar(props) {
  const blogData = useSelector(blogDataSelector);
  const [active, setActive] = useState(props.data[0].category);
  const [startPrice, setStartPrice] = useState(0 + " $");
  const [endPrice, setEndPrice] = useState(50 + " $");
  return (
    <div className={cx("sidebar-wrap")}>
      <div className={cx("container")}>
        {props.showSearch && (
          <form className={cx("search")}>
            <h1>Search</h1>
            <div>
              <input type="text" placeholder="Search..." />
              <button className={cx("submit")}>
                <SearchOutlined className={cx("submit-icon")}></SearchOutlined>
              </button>
            </div>
          </form>
        )}

        <div className={cx("category")}>
          <h2>Categories</h2>
          <ul>
            {props.data.map(function (item, index) {
              return (
                <li key={index}>
                  <h3
                    className={cx(active === item.category && "active")}
                    onClick={() => setActive(item.category)}
                  >
                    {item.category}
                  </h3>
                </li>
              );
            })}
          </ul>
        </div>

        {props.showPost && !blogData.isLoading && (
          <div className={cx("recent-post")}>
            <h2>Recent Post</h2>
            {blogData.data[1].map((blog, i) => (
              <Link
                to={`/blog/detail/${blog.idblog}`}
                key={i}
                className={cx("items")}
              >
                <img className={cx("img")} src={blog.image} alt="img" />
                <div className={cx("infos")}>
                  <h4 className={cx("name")}>{blog.title}</h4>
                  <p className={cx("fashion")}>
                    {blog.category}{" "}
                    <span className={cx("day")}>{blog.timeCreate}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {props.showFilter && (
          <div className="shop-filter">
            <div className={cx("brand")}>
              <h2>Fillter</h2>
              <ul>
                <li>
                  <input id="clothings" type="checkbox" />
                  <label htmlFor="clothings">Clothings</label>
                </li>
                <li>
                  <input id="handbag" type="checkbox" />
                  <label htmlFor="handbag">HandBag</label>
                </li>
                <li>
                  <input id="shoes" type="checkbox" />
                  <label htmlFor="shoes">Shoes</label>
                </li>
                <li>
                  <input id="accessories" type="checkbox" />
                  <label htmlFor="accessories">Accessories</label>
                </li>
              </ul>
            </div>
            <div className={cx("price")}>
              <h2> Price</h2>
              <div className={cx("price-current")}>
                <input
                  type="text"
                  value={startPrice}
                  className={cx("price-current-input")}
                />
                <input
                  type="text"
                  value={endPrice}
                  className={cx("price-current-input")}
                  onChange={(e) => {
                    setStartPrice(e.target.value + " $");
                  }}
                />
                <span>{/* gach ngang */}</span>
              </div>
              <input
                className={cx("input-range")}
                type="range"
                min={0}
                max={100}
                step={1}
                onChange={(e) => {
                  setEndPrice(e.target.value + " $");
                }}
              />
            </div>
            <div className={cx("container-color")}>
              <h2>Color</h2>
              <ul>
                <li>
                  <span className={cx(["color", "color-purple"])}></span>
                  <span className={cx("color-name")}>purple</span>
                </li>
                <li>
                  <span className={cx(["color", "color-red"])}></span>
                  <span className={cx("color-name")}>Red</span>
                </li>
                <li>
                  <span className={cx(["color", "color-black"])}></span>
                  <span className={cx("color-name")}>black</span>
                </li>
                <li>
                  <span className={cx(["color", "color-violet"])}></span>
                  <span className={cx("color-name")}>violet</span>
                </li>
                <li>
                  <span className={cx(["color", "color-green"])}></span>
                  <span className={cx("color-name")}>green</span>
                </li>
                <li>
                  <span className={cx(["color", "color-yellow"])}></span>
                  <span className={cx("color-name")}>yellow</span>
                </li>
              </ul>
            </div>
            <div className={cx("size")}>
              <h2>Size</h2>
              <ul>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XS</li>
              </ul>
            </div>
          </div>
        )}

        <Tag />
      </div>

      {props.data.map((item, i) => active === item.category && item.component)}
    </div>
  );
}

export default SideBar;
