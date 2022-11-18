import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css"; // optional
import classNames from "classnames/bind";
import styles from "./headerSearch.module.scss";
import Typewriter from "typewriter-effect";
import Menu from "../Menu/Menu";
import CartNoti from "../CartNoti/CartNoti";
import Noti from "../Noti/Noti";
import { fetchSearchApi } from "../../api/api";
import {
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  TipsAndUpdates,
  TipsAndUpdatesOutlined,
  HighlightOff,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { shopFilter } from "../../redux/reducer/shopSlice";

const cx = classNames.bind(styles);
function HeaderSearch() {
  const dispatch = useDispatch();

  const [keyWord, setKeyWord] = useState("");
  const [listSearch, setListSearch] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [showWiter, setShowWriter] = useState(false);
  const [showTippy, setShowTippy] = useState(false);

  useEffect(() => {
    keyWord.length === 0 ? setShowWriter(true) : setShowWriter(false);
    fetchSearchApi(keyWord).then((res) => {
      setListSearch(res.data[0]);
      setListProduct(res.data[1]);
    });
  }, [keyWord]);

  return (
    <div className={cx("header-search")}>
      <div className={cx("div logo")}>
        <Link to="/">
          <img 
          style={{
            width:"150px",
            height:"70px"
          }}
           src="/fslogo.png" alt="logo" />
        </Link>
      </div>
      {/* search */}
      <div
        className={cx("div search-wrap")}
        onBlur={(e) => {
          // e.preventDefault();
          let lengValue = e.target.value.length;

          // trường hợp blur ra ngoài chưa xử lý dc
          // setShowTippy(false);
          lengValue > 0 ? setShowWriter(false) : setShowWriter(true);
        }}
      >
        <input
          id="search-input"
          className={cx("search-input")}
          type="text"
          value={keyWord}
          onClick={() => {
            setShowTippy(true);
          }}
          onFocus={() => {
            setShowWriter(false);
          }}
          onChange={(e) => {
            let lengValue = e.currentTarget.value.length;
            lengValue > 0 ? setShowTippy(true) : setShowTippy(false);
            setKeyWord(e.target.value);
          }}
        />

        {showTippy && (
          <div className={cx("popover")} style={{ padding: "10px 5px" }}>
            {listSearch.length === 0 && listProduct.length === 0 ? (
              <h4 style={{ color: "red" }}>
                T tìm ko thấy thứ m muốn, m tìm lại đi!!!
              </h4>
            ) : (
              ""
            )}

            {listSearch.length !== 0 ? (
              <>
                <h4 className={cx("cate")} style={{ fontSize: "20px" }}>
                  Danh mục
                </h4>
              </>
            ) : (
              ""
            )}
            {listSearch.map(function (value, i) {
              return (
                <Link
                  key={i}
                  className={cx("item")}
                  to="/shop"
                  onClick={() => {
                    dispatch(
                      shopFilter.actions.SetFilter({
                        payload: value.category,
                        isSearch: "true",
                      })
                    );
                    setShowTippy(false);
                  }}
                >
                  {value.category}
                </Link>
              );
            })}
            {listProduct.length !== 0 ? (
              <h4 className={cx("cate")} style={{ fontSize: "20px" }}>
                Sản phẩm{" "}
              </h4>
            ) : (
              ""
            )}
            {listProduct.map((item, i) => {
              return (
                <div key={i} className={cx("wrap")}>
                  <Link
                    to={`/shop/detail/${item.idProduct}`}
                    className={cx("item")}
                  >
                    <img
                      src={item.avatar}
                      className={cx("img-product")}
                      alt=""
                    />
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {showWiter && (
          <Typewriter
            options={{
              strings: [
                "What do you need?",
                "Men's Fashion...",
                "Women's Fashion...",
              ],
              autoStart: true,
              pauseFor: 2000,
              loop: true,
            }}
          />
        )}
        <button
          className={cx("clear")}
          onClick={() => {
            setKeyWord("");
            setShowTippy(false);
          }}
        >
          <HighlightOff
            style={{ color: "black", width: "2rem", height: "2rem" }}
          ></HighlightOff>
        </button>

        <button className={cx("search-btn")}>
          <SearchOutlined style={{ color: "white" }}></SearchOutlined>
        </button>
      </div>

      {/* action */}
      <div className={cx("div action-btn")}>
        <ul>
          <li className={cx("cart")}>
            <TipsAndUpdates
              className={cx("dark-active")}
              style={{ width: "2rem", height: "2rem" }}
              onClick={() => {
                document.querySelector(".global").classList.toggle("darkmode");
              }}
            ></TipsAndUpdates>
            <TipsAndUpdatesOutlined
              className={cx("light-active")}
              style={{ width: "2rem", height: "2rem" }}
              onClick={() => {
                document.querySelector(".global").classList.toggle("darkmode");
              }}
            ></TipsAndUpdatesOutlined>
          </li>

          <li className={cx("cart")}>
            <FavoriteBorderOutlined
              style={{ width: "2rem", height: "2rem" }}
            ></FavoriteBorderOutlined>
            <span>10</span>
            <Noti />
          </li>
          <li className={cx("cart")}>
            <ShoppingCartOutlined
              style={{ width: "2rem", height: "2rem" }}
            ></ShoppingCartOutlined>
            <span>10</span>

            <CartNoti className={cx("cart-noti")}></CartNoti>
          </li>
          <li>
            <Menu />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderSearch;
