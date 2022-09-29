import React from "react";
import "./commentItem.scss";

function CommentItem() {
  return (
    <div className="comment">
      <div className="res-wrap">
        <img
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/246777313_646898092967006_5392741154271700519_n.jpg?stp=dst-jpg_s100x100&_nc_cat=104&ccb=1-7&_nc_sid=4de414&_nc_ohc=Eco12mm4IO4AX-Cw1IP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLb-_U3JJK-fOe2gNkPYINmj_BxW_HowkNa5JzTpzJfiQ&oe=63584139"
          alt="avatar"
          className="avatar"
        />
        <div className="user-info">
          <h3 className="username">
            Mai Trinh
            <span> 01/10/2022</span>
          </h3>
          <p className="text-comment">
            Mua cái quần ở đây mặc 10 năm chưa rách, sản phẩm quá xịn xò. Lần
            sau sẽ mua 100 cái:D
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
