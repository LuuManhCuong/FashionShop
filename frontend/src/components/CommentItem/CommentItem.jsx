import React from "react";
import "./commentItem.scss";

function CommentItem({data}) {
  return (
    <div className="comment">
      <div className="res-wrap">
        <img
          src={data.avatar}
          alt="avatar"
          className="avatar-us"
        />
        <div className="user-info">
          <h3 className="username">
            {data.username}
          <span>{data.createAt || "00/00/0000"}</span>
          </h3>
          <p className="text-comment">
           {data.comment}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
