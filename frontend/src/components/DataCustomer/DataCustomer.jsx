import { Table } from "reactstrap";
import "./dataCustomer.scss";
import axios from "axios";
import jwtDecode from "jwt-decode";
import * as React from "react";
import DataCustomerItem from "../DataCustomerItem/DataCustomerItem";
import AdminHeader from "../AdminHeader/AdminHeader";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reloadApiSlector } from "../../redux/selectors";
import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import { userSelector } from "../../redux/selectors";
import { useNavigate, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { userSlice } from "../../redux/reducer/userSlice";
// import { checkToken } from "../../api/api";

const overview = [
  {
    title: "Tất cả khách hàng",
    statistical: 3782,
    subNum: 232,
    isIncrease: true,
    subTitle: "So với tháng trước",
  },
  {
    title: "Số lượt truy cập",
    statistical: 4633,
    subNum: 424,
    isIncrease: false,
    subTitle: "So với tháng trước",
  },
  {
    title: "Tỉ lệ mua hàng",
    statistical: `${50}%`,
    subNum: `${3}%`,
    isIncrease: false,
    subTitle: "So với tháng trước",
  },
];
function DataCustomer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const axiosJwt = axios.create({ withCredentials: true });

  const checkUser = useSelector(userSelector);
  const user = checkUser.login?.currentUser;
  const reloadApis = useSelector(reloadApiSlector);

  const [ListUser, setListUser] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // checkToken(user, dispatch);

  const newToken = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/refresh`, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  // kiểm tra xem token đã hết hạn hay chưa
  axiosJwt.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodedToken = jwtDecode(user?.accessToken);

      if (decodedToken.exp < date.getTime() / 1000) {
        console.log("token hết hạn");
        const data = await newToken();
        console.log("token mới", data);
        // refresh user khi token hết hạn
        const refreshUser = {
          ...user,
          accessToken: data.accessToken,
        };
        dispatch(userSlice.actions.loginSuccess(refreshUser));
        config.headers["token"] = `Bearer ${data.accessToken}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  // count page
  useEffect(() => {
    axiosJwt
      .get(`http://localhost:5000/admin/count/user`, {
        withCredentials: true,
        headers: {
          token: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setTotalPages(Math.ceil(Number(data[0].total) / 10));
      })
      .catch((err) => {
        navigate("/login");
      });
  }, [navigate, reloadApis.reload, user.accessToken]);

  // call api
  useEffect(() => {
    let offset;
    page === 0 ? (offset = 0) : (offset = (page - 1) * 10);
    axiosJwt
      .get(`http://localhost:5000/admin/?page=${offset}`, {
        withCredentials: true,
        headers: {
          token: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        if (data.length <= 0) {
          setPage(page - 1);
        }
        setListUser(data);
      })
      .catch((err) => {
        navigate("/login");
      });
  }, [navigate, page, reloadApis.reload, totalPages, user.accessToken]);

  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
    window.scrollTo({ top: 300, behavior: "smooth" });
  }
  return (
    <div className="data-customer">
      <AdminHeader overview={overview}></AdminHeader>
      <h3>
        Dữ liệu khách hàng{" "}
        <Typography className="page">
          Page: {page || 1} / {totalPages}
        </Typography>
      </h3>
      <Table bordered>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>CreatAt</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {typeof ListUser == "object" ? (
            ListUser.map((user, i) => (
              <DataCustomerItem userItem={user} stt={i} key={i} />
            ))
          ) : (
            <Link style={{ color: "blue" }} to={"/login"}>
              Hết phiên, vui lòng đăng nhập lại
            </Link>
          )}
        </tbody>
      </Table>
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
  );
}

export default DataCustomer;
