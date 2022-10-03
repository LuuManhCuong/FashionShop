import React from "react";
import { Table } from "reactstrap";
import "./dataCustomer.scss";
import DataCustomerItem from "../DataCustomerItem/DataCustomerItem";
import AdminHeader from "../AdminHeader/AdminHeader";

function DataCustomer() {
  const categories = ["all customer", "total visits"];
  return (
    <div className="data-customer">
      <AdminHeader></AdminHeader>
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
          <DataCustomerItem />
          <DataCustomerItem />
          <DataCustomerItem />
          <DataCustomerItem />
          <DataCustomerItem />
        </tbody>
      </Table>
    </div>
  );
}

export default DataCustomer;
