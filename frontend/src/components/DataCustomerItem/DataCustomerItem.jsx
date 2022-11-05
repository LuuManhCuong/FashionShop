import React from "react";
import "./dataCustomerItem.scss";
import Action from "../Action/Action";

function DataCustomerItem({ userItem, stt }) {
  return (
    <tr>
      <th scope="row">{stt + 1}</th>
      <td>{userItem.idUser}</td>
      <td>{userItem.username}</td>
      <td>{userItem.email}</td>
      <td>{userItem.phone}</td>
      <td>{userItem.address}</td>
      <td>{userItem.dateOfBirth}</td>
      <td>
        <Action />
      </td>
    </tr>

  
  );
}

export default DataCustomerItem;
