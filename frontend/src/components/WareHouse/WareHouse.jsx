import classNames from "classnames/bind";
import styles from "./wareHouse.module.scss";

import TableBodyOverview from "../TableBodyOverView/TableBodyOverview";
import AdminHeader from "../AdminHeader/AdminHeader";
import Action from "../Action/Action";
const cx = classNames.bind(styles);

function WareHouse() {
  const fields = ["all products", "Sold", "something"];
  const arr = [
    {
      title: "all products",
      number: "1323",
    },
    {
      title: "all products",
      number: "1323",
    },

  ];
  return (
    <div className={cx("wrap")}>
      <AdminHeader fields={fields}></AdminHeader>

      <div className={cx("body")}>
        <h5 className={cx("body-header")}>Sản Phẩm Trong Cửa Hàng</h5>
        <table>
          <thead>
            <th>Tên Sản Phẩm</th>
            <th>Giá</th>
            <th>Số Lượng</th>
            <th>Số lượng bán</th>
            <th>tỉ lệ</th>
            <th>Action</th>
          </thead>
          <tbody className={cx("table-body")}>
            <TableBodyOverview />
            <TableBodyOverview />
            <TableBodyOverview />
            <TableBodyOverview />
            <TableBodyOverview />
            {/* tao khoang cach */}
          </tbody>
          <tfoot className={cx("table-footer")}>
            <tr>
              <td
                style={{
                  textAlign: "center",
                  padding: "10px 0",
                  color: "#637381",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                colSpan={5}
                rowSpan="5"
              >
                {" "}
                xem thêm ---{">"}{" "}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default WareHouse;
