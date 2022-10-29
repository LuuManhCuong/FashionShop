import React from "react";
import "./gg.scss";

function Doremon() {
  return (
    <div className="gg">
      {/* <h3>Đang tìm dữ liệu</h3> */}
      <div className="wrap"></div>
      <div className="bell"></div>
      <div className="eyes-left">
        <div className="close"></div>
      </div>
      <div className="eyes-right">
        <div className="close"></div>
      </div>
      <div className="nose"></div>
      <div className="mouth"></div>
      <ul className="beard-left">
        <li className="li_1"></li>
        <li className="li_2"></li>
        <li className="li_3"></li>
      </ul>
      <ul className="beard-right">
        <li className="li_1"></li>
        <li className="li_2"></li>
        <li className="li_3"></li>
      </ul>
      <div className="lip1"></div>
      <div className="lip2"></div>
    </div>
  );
}

export default Doremon;
