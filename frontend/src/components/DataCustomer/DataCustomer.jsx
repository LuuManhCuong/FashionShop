import { Table } from "reactstrap";
import "./dataCustomer.scss";
import * as React from "react";
import DataCustomerItem from "../DataCustomerItem/DataCustomerItem";
import AdminHeader from "../AdminHeader/AdminHeader";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { adminDataSelector } from "../../redux/selectors";
import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
  const adminData = useSelector(adminDataSelector);
  let customerData = adminData.data[0];
  const [ListUser, setListUser] = useState(customerData)
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let offset;
    page === 0 ? (offset = 0) : (offset = (page - 1) * 4);
    fetch(`http://localhost:5000/admin?page=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        setListUser(data[0]);
      });
  }, [page]);

  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
    window.scrollTo({ top: 110, behavior: "smooth" });
  }
  return (
    <div className="data-customer">
      <AdminHeader overview={overview}></AdminHeader>
      <h3>Dữ liệu khách hàng</h3>
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
          {customerData.map((user, i) => (
            <DataCustomerItem userItem={user} stt={i} key={i} />
          ))}
        </tbody>
      </Table>
      <Stack spacing={2}>
        <Typography className="page">
          Page: {page || 1} / {totalPages} Of Customers
        </Typography>
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
