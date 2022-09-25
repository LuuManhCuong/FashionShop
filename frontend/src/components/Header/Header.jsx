import classNames from "classnames/bind";
import styles from "./header.module.scss";
import Typewriter from "typewriter-effect";
import "./header.css";
import {
  Email,
  LocalPhone,
  FacebookOutlined,
  YouTube,
  Twitter,
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
const cx = classNames.bind(styles);

function Header() {
  const [keyWord, setKeyWord] = useState("");
  const [showWiter, setShowWriter] = useState(false);

  useEffect(() => {
    keyWord.length === 0 ? setShowWriter(true) : setShowWriter(false);
  }, [keyWord]);

  return (
    <div className={cx("header")}>
      <div className={cx("header-contact")}>
        <ul className={cx("contact-list")}>
          <li>
            <Email style={{ marginRight: "4px" }}></Email>
            hello.colorlib@gmail.com
          </li>
          <li>
            <LocalPhone style={{ marginRight: "4px" }}></LocalPhone>
            +0916074130
          </li>
        </ul>
        <ul className={cx("contact-list")}>
          <li>
            <FacebookOutlined></FacebookOutlined>
          </li>
          <li>
            <YouTube></YouTube>
          </li>
          <li>
            <Twitter></Twitter>
          </li>
        </ul>
      </div>

      <div className={cx("header-search")}>
        <div className={cx("logo")}>
          <h1>Fashion.</h1>
        </div>
        <div className={cx("search-wrap")}>
          <input
            id="search-input"
            className={cx("search-input")}
            type="text"
            value={keyWord}
            onFocus={() => setShowWriter(false)}
            onBlur={(e) => {
              var lengValue = e.currentTarget.value.length;
              lengValue > 0 ? setShowWriter(false) : setShowWriter(true);
            }}
            onChange={(e) => setKeyWord(e.target.value)}
          />
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
        <div className={cx("action-btn")}>
          <ul>
            <li>
              <FavoriteBorderOutlined
                style={{ width: "2rem", height: "2rem" }}
              ></FavoriteBorderOutlined>
              <span>10</span>
            </li>
            <li>
              <ShoppingCartOutlined
                style={{ width: "2rem", height: "2rem" }}
              ></ShoppingCartOutlined>
              <span>10</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={cx("header-nav")}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/home">Shop</a>
          </li>
          <li>
            <a href="/home">Collection</a>
          </li>
          <li>
            <a href="/home">Blog</a>
          </li>
          <li>
            <a href="/home">Contact</a>
          </li>
          <li>
            <a href="/home">Page</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
