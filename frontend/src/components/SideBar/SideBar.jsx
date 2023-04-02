import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./sideBar.module.scss";
// import Tag from "../Tags/Tag";
import { SearchOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { blogFilterTag } from "../../redux/reducer/blogSlice";
import {blogDataSelector,shopFilterSelector,shopFilterSizeSelector, } from "../../redux/selectors";
import {shopFilter, shopFilterPrice, shopFilterSize,} from "../../redux/reducer/shopSlice";
import { HOT_URL } from "../../api/api";
const cx = classNames.bind(styles);
const categories = ["Clothings", "Handbag", "Shoes", "Accessories"];
const sizeArr = ["S", "M", "L", "SX"];
const tagArr = ["style", "relax", "enjoy", "scenery", "beautiful"];

function SideBar(props) {
  const dispatch = useDispatch();
  // lấy dữ liệu từ store
  const blogData = useSelector(blogDataSelector);
  const checked = useSelector(shopFilterSelector);
  const sizes = useSelector(shopFilterSizeSelector);
  // const tags = useSelector(blogFilterTagSelector);
  const [active, setActive] = useState(props.data[0].category);
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(1100);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  useEffect(() => {
    fetch(`${HOT_URL}/shop/getPrice`)
      .then((res) => res.json())
      .then((data) => {
        setMin(data[0].minPrice);
        setMax(data[0].maxPrice);
        setStartPrice(data[0].minPrice);
        setEndPrice(data[0].maxPrice);
      });
  }, []);
  const handleCheck = (item) => {
    dispatch(shopFilter.actions.SetFilter(item));
  };

  const handleSize = (size) => {
    dispatch(shopFilterSize.actions.SetSize(size));
  };

  // const handleTag = (tag) => {
  //   dispatch(blogFilterTag.actions.SetTag(tag));
  // };

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
                  <p className={cx("author")}>
                    <span style={{ color: "black" }}>Author: </span>
                    {blog.author}
                  </p>
                  <p className={cx("fashion")}>
                    {blog.category}{" "}
                    <span className={cx("day")}>20{blog.timeCreate}</span>
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
                {categories.map((category, i) => (
                  <li key={i}>
                    <input
                      name="filter"
                      id={category}
                      type="checkbox"
                      checked={checked.filter.includes(category)}
                      onChange={() => handleCheck(category)}
                    />
                    <label htmlFor={category}>{category}</label>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("price")}>
              <h2> Price</h2>
              <div className={cx("price-current")}>
                <h3 className={cx("price-current-input")}>{startPrice} $</h3>
                <span>{/* gach ngang */}</span>
                <h3
                  style={{ color: "var(--primary-color)" }}
                  className={cx("price-current-input")}
                >
                  {endPrice} $
                </h3>
              </div>
              <input
                className={cx("input-range")}
                type="range"
                min={min}
                max={max}
                step={1}
                value={endPrice}
                onChange={(e) => {
                  setEndPrice(e.target.value);
                  dispatch(shopFilterPrice.actions.SetPrice(e.target.value));
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
                {sizeArr.map((size, i) => (
                  <li key={i}>
                    <input
                      id={size}
                      type="checkbox"
                      hidden
                      name="size"
                      onChange={() => handleSize(size)}
                    />
                    <label
                      className={cx(sizes.sizes.includes(size) ? "active" : "")}
                      htmlFor={size}
                    >
                      {size}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {props.showTag ? (
          <div className={cx("product-tag")}>
            <h4>Tags</h4>
            <ul>
              {tagArr.map((e, i) => (
                <li key={i}>
                  <input
                    type={"checkbox"}
                    hidden
                    id={i}
                    name="tag"
                    // onChange={() => handleTag(e)}
                  />
                  <label className={cx("")} htmlFor={i}>
                    #{e}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {props.data.map((item, i) => active === item.category && item.component)}
    </div>
  );
}

export default SideBar;
