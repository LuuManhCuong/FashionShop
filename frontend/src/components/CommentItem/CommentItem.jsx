import React from "react";
import "./commentItem.scss";

function CommentItem() {
  return (
    <div className="comment">
      <div className="res-wrap">
        <img
          src="https://res.cloudinary.com/djcamu6kz/image/upload/v1669094080/imageProduct/apifyvr4mwaxxyvmnqor.png"
          alt="avatar"
          className="avatar-us"
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
