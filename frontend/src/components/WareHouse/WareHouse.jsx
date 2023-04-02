import classNames from "classnames/bind";
import styles from "./wareHouse.module.scss";
import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TableBodyOverview from "../TableBodyOverView/TableBodyOverview";
import AdminHeader from "../AdminHeader/AdminHeader";
import AddProductContent from "../AddProductContent/AddProductContent";
import { useState, createContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
import { reloadApiSlector } from "../../redux/selectors";
import { useNavigate, Link } from "react-router-dom";
import { HOT_URL } from "../../api/api";
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
  const navigate = useNavigate();
  const checkUser = useSelector(userSelector);
  const user = checkUser.login?.currentUser;
  // console.log("user: ", user.accessToken);
  const reloadApi = useSelector(reloadApiSlector);

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [listProducts, setListProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  // count page
  useEffect(() => {
    fetch(`${HOT_URL}/admin/count/product`, {
      headers: {
        token: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(Math.ceil(Number(data[0].total) / 10));
      })
      .catch((err) => {
        navigate("/login");
      });
  }, [reloadApi.reload, user.accessToken]);

  // call api
  useEffect(() => {
    let offset;
    page === 0 ? (offset = 0) : (offset = (page - 1) * 10);
    fetch(`${HOT_URL}/admin/warehouse?page=${offset}`, {
      headers: {
        token: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length <= 0) {
          setPage(page - 1);
        }
        setListProducts(data);
      })
      .catch((err) => {
        navigate("/login");
      });
  }, [page, reloadApi.reload, user.accessToken]);

  function handleShow() {
    setShowAddProduct(!showAddProduct);
    window.scrollTo({ top: 500, behavior: "smooth" });
  }

  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
    window.scrollTo({ top: 300, behavior: "smooth" });
  }

  let values = { handleShow, showAddProduct };
  return (
    <>
      {user.isAdmin ? (
        <ShowComponent.Provider value={values}>
          <div className={cx("wrap")}>
            <AdminHeader showAddBtn={true} overview={overview}></AdminHeader>
            {showAddProduct === true ? (
              <AddProductContent></AddProductContent>
            ) : (
              <div className={cx("body")}>
                <h5 className={cx("body-header")}>
                  Sản Phẩm Trong Cửa Hàng
                  <Typography className={cx("num-page")}>
                    Page: {page || 1} / {totalPages}
                  </Typography>
                </h5>
                <table>
                  <thead>
                    <th>Stt</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Danh mục</th>
                    <th>Size</th>
                    <th>Số Lượng</th>
                    <th>Giá gốc</th>
                    <th>Khuyến mãi</th>
                    <th>Giá bán</th>
                    <th>Đã bán</th>
                    <th>tỉ lệ</th>
                    <th>Action</th>
                  </thead>
                  <tbody className={cx("table-body")}>
                    {typeof listProducts == "object" ? (
                      listProducts?.map((product, i) => (
                        <TableBodyOverview
                          stt={i}
                          product={product}
                          key={product.idProduct}
                        />
                      ))
                    ) : (
                      <Link style={{ color: "blue" }} to={"/login"}>
                        Hết phiên, vui lòng đăng nhập lại
                      </Link>
                    )}
                  </tbody>
                </table>
                <Stack spacing={2}>
                  <Pagination
                    className="pagination"
                    count={totalPages}
                    color="primary"
                    page={page || 1}
                    onChange={handleChange}
                  />
                </Stack>
              </div>
            )}
          </div>
        </ShowComponent.Provider>
      ) : (
        <h3>m ko phải admin</h3>
      )}
    </>
  );
}

export default WareHouse;
