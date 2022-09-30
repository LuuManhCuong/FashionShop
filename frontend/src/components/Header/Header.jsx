import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import Typewriter from "typewriter-effect";
import {
  Email,
  LocalPhone,
  FacebookOutlined,
  YouTube,
  Twitter,
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
} from "@mui/icons-material";
import CartNoti from "../CartNoti/CartNoti";

function Header() {
  const [keyWord, setKeyWord] = useState("");
  const [showWiter, setShowWriter] = useState(false);

  useEffect(() => {
    keyWord.length === 0 ? setShowWriter(true) : setShowWriter(false);
  }, [keyWord]);

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

      <div className={"header-search"}>
        <div className={"logo"}>
          <h1>Fashion.</h1>
        </div>
        <div className={"search-wrap"}>
          <input
            id="search-input"
            className={"search-input"}
            type="text"
            value={keyWord}
            onFocus={() => setShowWriter(false)}
            onBlur={(e) => {
              let lengValue = e.currentTarget.value.length;
              lengValue > 0 ? setShowWriter(false) : setShowWriter(true);
            }}
            onChange={(e) => setKeyWord(e.target.value)}
          />
          {showWiter && (
            <Typewriter
              options={{
                strings: [
                  "What do you need?",
                  "Men's Fashion...",
                  "Women's Fashion...",
                ],
                autoStart: true,
                pauseFor: 2000,
                loop: true,
              }}
            />
          )}
          <button className={"search-btn"}>
            <SearchOutlined
              style={{ color: "white", width: "2rem", height: "2rem" }}
            ></SearchOutlined>
          </button>
        </div>
        <div className={"action-btn"}>
          <ul>
            <li>
              <FavoriteBorderOutlined
                style={{ width: "2rem", height: "2rem" }}
              ></FavoriteBorderOutlined>
              <span>10</span>
            </li>
            <li className="cart">
              <ShoppingCartOutlined
                style={{ width: "2rem", height: "2rem" }}
              ></ShoppingCartOutlined>
              <span>10</span>

              <CartNoti className="cart-noti"></CartNoti>
            </li>
            <li>
            <NavLink
              end
              className={(navData) => (navData.isActive ? "active-item" : " ")}
              to="/login"
            >
              <LoginOutlined style={{width: "2rem", height: "2rem"}} ></LoginOutlined>
            </NavLink>
              
            </li>
          </ul>
        </div>
      </div>

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
              to="/Pages"
            >
              Pages
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
