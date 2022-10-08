import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import classNames from "classnames/bind";
import styles from "./headerSearch.module.scss";
import Typewriter from "typewriter-effect";
import Menu from "../Menu/Menu";
import CartNoti from "../CartNoti/CartNoti";
import Noti from "../Noti/Noti";
import SearchItems from "../SearchItems/SearchItem";

import {
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const cx = classNames.bind(styles);
function HeaderSearch() {
  const [keyWord, setKeyWord] = useState("");
  const [showWiter, setShowWriter] = useState(false);
  const [showTippy, setShowTippy] = useState(false);

  useEffect(() => {
    keyWord.length === 0 ? setShowWriter(true) : setShowWriter(false);
  }, [keyWord]);
  return (
    <div className={cx("header-search")}>
      <div className={cx("div logo")}>
        <Link to="/">
          <h1>Fashion.</h1>
        </Link>
      </div>
      <div className={cx("div search-wrap")}>
        <Tippy
          placement={"left-end"}
          // onClickOutside={'callback'}
          visible={true}
          interactive={true}
          appendTo={document.body}
          render={(attrs) =>
            showTippy && (
              <div className="search-result" tabIndex="-1" {...attrs}>
                <div className="popover">
                  <h4>result</h4>
                  <SearchItems items={{ to: "/login", name: "ao so mi nam" }} />
                  <SearchItems items={{ to: "a", name: "ao so mi nam" }} />
                  <SearchItems items={{ to: "a", name: "ao so mi nam" }} />
                </div>
              </div>
            )
          }
        >
          <input
            id="search-input"
            className={cx("search-input")}
            type="text"
            value={keyWord}
            onFocus={() => {
              setShowWriter(false)
            }}
          
            onBlur={(e) => {
              let lengValue = e.currentTarget.value.length;
              setShowTippy(false)
              lengValue > 0 ? setShowWriter(false) : setShowWriter(true);
            }}
            onChange={(e) => {
              let lengValue = e.currentTarget.value.length;
              lengValue > 0 ? setShowTippy(true) : setShowTippy(false);
              setKeyWord(e.target.value);
            }}
          />
        </Tippy>

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
        <button className={cx("search-btn")}>
          <SearchOutlined
            style={{ color: "white", width: "2rem", height: "2rem" }}
          ></SearchOutlined>
        </button>
      </div>
      <div className={cx("div action-btn")}>
        <ul>
          <li className={cx("cart")}>
            <FavoriteBorderOutlined
              style={{ width: "2rem", height: "2rem" }}
            ></FavoriteBorderOutlined>
            <span>10</span>
            <Noti />
            {/* <CartNoti className={cx("cart-)}noti"></CartNoti> */}
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
