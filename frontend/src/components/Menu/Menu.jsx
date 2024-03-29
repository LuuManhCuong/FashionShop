import React, { useState } from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
import axios from "axios";
import { HOT_URL } from "../../api/api";
function Menu({ direction, ...args }) {
  const checkUser = useSelector(userSelector);
  const user = checkUser.login?.currentUser;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleLogout = () => {
    console.log("logour");
    axios
      .post(`${HOT_URL}/logout`, {
        withCredentials: true,
        headers: {
          token: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => console.log("logout thành công:", res))
      .catch((err) => console.log("thất bại"));
  };
  return (
    <>
      {!user ? (
        <Link to={"/login"} className="login-btn">
          Login
        </Link>
      ) : (
        <div className="d-flex p-5">
          <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
            <DropdownToggle caret>
              <img
                className="avatar"
                src={
                  user.avatar ||
                  "https://live.staticflickr.com/491/31818797506_41e52a8b36.jpg"
                }
                alt="avata"
              />
              {user.username}
            </DropdownToggle>
            <DropdownMenu {...args}>
              {/* <DropdownItem>
                <Link to="/profile">Profile</Link>
              </DropdownItem> */}
              <DropdownItem>
                <Link to="/">My post</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/">Purchase history</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/login">Logout</Link>
                {/* <h3 onClick={() => handleLogout()}>Logout</h3>{" "} */}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
    </>
  );
}


Menu.propTypes = {
  direction: PropTypes.string,
};

export default Menu;
