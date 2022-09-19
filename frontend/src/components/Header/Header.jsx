import classNames from "classnames/bind";
import styles from "./header.module.scss";
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
const cx = classNames.bind(styles);

function Header() {
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
            +65 11.188.888
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
          <input className={cx("search-input")} type="text" placeholder="What do you need?" />
          <button className={cx("search-btn")}>
            <SearchOutlined style={{color: "white", width: "2rem", height: "2rem"}}></SearchOutlined>
          </button>
        </div>
        <div className={cx("action-btn")}>
          <ul>
            <li>
              <FavoriteBorderOutlined style={{width: "2rem", height: "2rem"}}></FavoriteBorderOutlined>
              <span>10</span>
            </li>
            <li>
              <ShoppingCartOutlined style={{width: "2rem", height: "2rem"}}></ShoppingCartOutlined>
              <span>10</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={cx("header-nav")}>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/home">Shop</a></li>
          <li><a href="/home">Collection</a></li>
          <li><a href="/home">Blog</a></li>
          <li><a href="/home">Contact</a></li>
          <li><a href="/home">Page</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
