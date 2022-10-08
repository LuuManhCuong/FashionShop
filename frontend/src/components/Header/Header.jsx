import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

import {
  Email,
  LocalPhone,
  FacebookOutlined,
  YouTube,
  Twitter,
} from "@mui/icons-material";
import Noti from "../Noti/Noti";
import SearchItems from "../SearchItems/SearchItem";
import HeaderSearch from "../HeaderSearch/HeaderSearch";

function Header() {
  

  return (
    <div className={"header"}>
      <div className={"header-contact"}>
        <ul className={"contact-list"}>
          <li>
            <Email style={{ marginRight: "4px" }}></Email>
            hello.colorlib@gmail.com
          </li>
          <li>
            <LocalPhone style={{ marginRight: "4px" }}></LocalPhone>
            +0916074130
          </li>
        </ul>
        <ul className={"contact-list"}>
          <li>
            <FacebookOutlined></FacebookOutlined>
          </li>
          <li>
            <YouTube></YouTube>
          </li>
          <li>
            <Twitter></Twitter>
          </li>
        </ul>
      </div>

      <HeaderSearch/>

      <div className={"header-nav"}>
        <ul>
          <li>
            <NavLink
              end
              className={(navData) => (navData.isActive ? "active-item" : " ")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              className={(navData) => (navData.isActive ? "active-item" : " ")}
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              end
              className={(navData) => (navData.isActive ? "active-item" : " ")}
              to="/register"
            >
              register
            </NavLink> */}
          </li>
          <li>
            <NavLink
              end
              className={(navData) => (navData.isActive ? "active-item" : " ")}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              className={(navData) => (navData.isActive ? "active-item" : " ")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              className={(navData) => (navData.isActive ? "active-item" : " ")}
              to="/admin"
            >
              Admin
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              end
              className={(navData) => (navData.isActive ? "active-item" : " ")}
              to="/Pages"
            >
              Pages
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Header;
