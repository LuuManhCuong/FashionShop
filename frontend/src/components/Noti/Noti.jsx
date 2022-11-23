import React from "react";
import "./noti.scss";
function Noti() {
  return (
    <div className="noti-container-wrap">
      <h3>thông báo</h3>
      <div className="noti-item">
        <div className="noti-item-wrap">
          <img
            src="https://res.cloudinary.com/djcamu6kz/image/upload/v1669094566/imageProduct/zc5ct57exve8drokukjr.png"
            alt="img"
          />
          <div className="noti-context">
            <h4>
              Nguyễn Văn Hà
              <p className="span">Da thich bai viet cua ban.</p>
            </h4>
            <p>12 ngay truoc</p>
          </div>
        </div>
      </div>

      <div className="noti-item">
        <div className="noti-item-wrap">
          <img
            src="https://res.cloudinary.com/djcamu6kz/image/upload/v1669094566/imageProduct/zc5ct57exve8drokukjr.png"
            alt="img"
          />
          <div className="noti-context">
            <h4>
              Nguyễn Văn Hà
              <p className="span">Da thich bai viet cua ban.</p>
            </h4>
            <p>12 ngay truoc</p>
          </div>
        </div>
      </div>

      <div className="noti-item">
        <div className="noti-item-wrap">
          <img
            src="https://res.cloudinary.com/djcamu6kz/image/upload/v1669094566/imageProduct/zc5ct57exve8drokukjr.png"
            alt="img"
          />
          <div className="noti-context">
            <h4>
              Nguyễn Văn Hà
              <p className="span">Da thich bai viet cua ban.</p>
            </h4>
            <p>12 ngay truoc</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noti;
