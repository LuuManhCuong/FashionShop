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

function Menu({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {!isLogin && (
        <a href="/login" className="login-btn">
          Login
        </a>
      )}
      {isLogin && (
        <div className="d-flex p-5">
          <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
            <DropdownToggle caret>
              <img
                className="avatar"
                src="https://thumbs.dreamstime.com/b/business-man-icon-illustration-business-man-icon-white-background-107722188.jpg"
                alt="avata"
              />
              Mạnh Cường
            </DropdownToggle>
            <DropdownMenu {...args}>
              <DropdownItem>
                <Link to="/profile">Profile</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/">My post</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/">Purchase history</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/login">Logout</Link>{" "}
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
