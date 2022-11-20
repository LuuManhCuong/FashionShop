import React from "react";
import "./dataCustomerItem.scss";
import Action from "../Action/Action";

function DataCustomerItem({ userItem, stt }) {
  return (
    <tr>
      <th scope="row">{stt + 1}</th>
      {/* <td>{userItem.idUser}</td> */}
      <td>
        <div className="wrap-us">
          <img
            className="avt"
            src={
              userItem.avatar ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRacaWP2ETOX67Phc2qsXr_6RuLYo9el7vhI9Zh7RTO3Cv5vF-tvvV_zCrZOcEkoILYng&usqp=CAU"
            }
            alt="avt"
          />
          {userItem.username}
        </div>
      </td>
      <td>{userItem.email}</td>
      <td>{userItem.phone}</td>
      <td>{userItem.address}</td>
      <td>{userItem.createAt}</td>
      <td>
        <Action item={userItem} showInfoUser={true} />
      </td>
    </tr>
  );
}

export default DataCustomerItem;
