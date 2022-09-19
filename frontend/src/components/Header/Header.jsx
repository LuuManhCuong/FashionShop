import classNames from "classnames/bind";
import styles from "./header.module.scss";
import {
  Email,
  LocalPhone,
  FacebookOutlined,
  YouTube,
  Twitter,
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
          
        </div>
        <div className={cx("action-btn")}></div>
      </div>
      <div className={cx("header-nav")}></div>
    </div>
  );
}

export default Header;
