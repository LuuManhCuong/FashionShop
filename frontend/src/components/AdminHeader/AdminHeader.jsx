import classNames from "classnames/bind";
import styles from "./adminHeader.module.scss";

const cx = classNames.bind(styles);

function AdminHeader({ showAddBtn, overview }) {
  console.log(overview);
  return (
    <div className={cx("header")}>
      <div className={cx("header-between")}>
        <h5>Overview</h5>
        {showAddBtn && <a href="/">Thêm Sản Phẩm Mới</a>}
      </div>
      <ul>
        {overview.map((field, i) => (
          <li key={i}>
            <div className={cx("header-items")}>
              <h4>{field.title}</h4>
              <p>icon</p>
            </div>
            <h1>
              {field.statistical} <span>icon {field.subNum}</span>
            </h1>
            <p className={cx("content-items")}>{field.subTitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminHeader;
