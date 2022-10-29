import classNames from "classnames/bind";
import styles from "./wareHouse.module.scss";
import TableBodyOverview from "../TableBodyOverView/TableBodyOverview";
import AdminHeader from "../AdminHeader/AdminHeader";
import AddProductContent from "../AddProductContent/AddProductContent";
import { useState, createContext } from "react";
const cx = classNames.bind(styles);

const overview = [
  {
    title: "tất cả sản phẩm",
    statistical: 50,
    subNum: 15,
    isIncrease: true,
    subTitle: "So với tháng trước",
  },
  {
    title: "số lượng sản phẩm",
    statistical: 1356,
    subNum: 89,
    isIncrease: false,
    subTitle: "So với tháng trước",
  },
  {
    title: "Đơn hàng đã bán",
    statistical: 356,
    subNum: 24,
    isIncrease: false,
    subTitle: "So với tháng trước",
  },
  {
    title: "Tỉ lệ xuất đơn",
    statistical: `${30}%`,
    subNum: `${14}%`,
    isIncrease: false,
    subTitle: "So với tháng trước",
  },
];

export const ShowComponent = createContext();

function WareHouse() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  function handleShow() {
    setShowAddProduct(!showAddProduct);
    window.scrollTo({ top: 500, behavior: "smooth" });
  }
  let values = { handleShow, showAddProduct };
  return (
    <ShowComponent.Provider value={values}>
      <div className={cx("wrap")}>
        <AdminHeader showAddBtn={true} overview={overview}></AdminHeader>
        {showAddProduct === true ? (
          <AddProductContent></AddProductContent>
        ) : (
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
        )}
      </div>
    </ShowComponent.Provider>
  );
}

export default WareHouse;
