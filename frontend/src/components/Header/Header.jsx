import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import "./header.scss";
import Typewriter from "typewriter-effect";
import Menu from "../Menu/Menu";

import {
  Email,
  LocalPhone,
  FacebookOutlined,
  YouTube,
  Twitter,
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import CartNoti from "../CartNoti/CartNoti";
import Noti from "../Noti/Noti";
import SearchItems from "../SearchItems/SearchItem";

function Header() {
  const [keyWord, setKeyWord] = useState("");
  const [Show, setShow] = useState(true);
  const [showWiter, setShowWriter] = useState(false);

  function handleShowPopover (){
    return (Show && keyWord.length>0)
  }
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
        <div className={"div logo"}>
          <Link to='/'><h1>Fashion.</h1></Link>
        </div>
        <div className={"div search-wrap"}>
          <Tippy
            placement={'left-end'}
            content='minh duy'
            onClickOutside={()=>{setShow(false)}}
            visible={handleShowPopover()}
            interactive={true}
            appendTo={document.body}
            render={attrs => (
              <div className="search-result" tabIndex="-1" {...attrs}>
                <div className="popover">
                  <h4 >result</h4>
                  <SearchItems items={{ to: 'a', name: 'ao so mi nam' }} />
                  <SearchItems items={{ to: 'a', name: 'ao so mi nam' }} />
                  <SearchItems items={{ to: 'a', name: 'ao so mi nam' }} />
                </div>
              </div>
            )}
          >
            <input
              id="search-input"
              className={"search-input"}
              type="text"
              value={keyWord}
              onFocus={() => setShowWriter(false)}
              onClick={()=>setShow(true)}
              onBlur={(e) => {
                let lengValue = e.currentTarget.value.length;
                lengValue > 0 ? setShowWriter(false) : setShowWriter(true);
              }}
              onChange={(e) => setKeyWord(e.target.value)}
            />

          </Tippy>

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
        <div className={"div action-btn"}>
          <ul>
            <li className="cart">
              <FavoriteBorderOutlined
                style={{ width: "2rem", height: "2rem" }}
              ></FavoriteBorderOutlined>
              <span>10</span>
              <Noti />
              {/* <CartNoti className="cart-noti"></CartNoti> */}
            </li>
            <li className="cart">
              <ShoppingCartOutlined
                style={{ width: "2rem", height: "2rem" }}
              ></ShoppingCartOutlined>
              <span>10</span>

              <CartNoti className="cart-noti"></CartNoti>
            </li>
            <li>
              <Menu />
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