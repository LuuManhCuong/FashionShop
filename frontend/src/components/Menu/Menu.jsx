import React, { useState } from "react";
import "./menu.scss";
import {Link} from 'react-router-dom'
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
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/246777313_646898092967006_5392741154271700519_n.jpg?stp=dst-jpg_s100x100&_nc_cat=104&ccb=1-7&_nc_sid=4de414&_nc_ohc=Eco12mm4IO4AX-Cw1IP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLb-_U3JJK-fOe2gNkPYINmj_BxW_HowkNa5JzTpzJfiQ&oe=63584139"
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
