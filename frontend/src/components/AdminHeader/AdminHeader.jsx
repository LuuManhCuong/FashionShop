import classNames from "classnames/bind";
import styles from "./adminHeader.module.scss";

const cx = classNames.bind(styles);

function AdminHeader() {
  return (
    <div className={cx("header")}>
      <div className={cx("header-between")}>
        <h5>Overview</h5>
        <a href="/">Thêm Sản Phẩm Mới</a>
      </div>
      <ul>
        <li>
          <div className={cx("header-items")}>
            <h4>Số lượng</h4>
            <p>icon</p>
          </div>
          <h1>$200.00 <span>icon $20,00</span></h1>
          <p className={cx("content-items")}>
            {/* <span>2</span> */}
            Compared to last month
          </p>
        </li>
        <li>
          <div className={cx("header-items")}>
            <h4>Số lượng</h4>
            <p>icon</p>
          </div>
          <h1>18 <span>icon 4</span></h1>
          <p className={cx("content-items")}>
            {/* <span>2</span> */}
            Compared to last month
          </p>
        </li>
        <li>
          <div className={cx("header-items")}>
            <h4>Số lượng</h4>
            <p>icon</p>
          </div>
          <h1>18 <span>icon 10</span></h1>
          <p className={cx("content-items")}>
            {/* <span>2</span> */}
            Compared to last month
          </p>
        </li>
      </ul>
    </div>
  );
}

export default AdminHeader;
