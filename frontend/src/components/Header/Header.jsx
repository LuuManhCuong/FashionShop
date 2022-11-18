import { NavLink } from "react-router-dom";
import "./header.scss";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
import {
  Email,
  LocalPhone,
  FacebookOutlined,
  YouTube,
  Twitter,
} from "@mui/icons-material";
import HeaderSearch from "../HeaderSearch/HeaderSearch";

function Header() {
  const checkUser = useSelector(userSelector);
  const user = checkUser.login?.currentUser;
  // console.log("user :", user?.accessToken);
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

      <HeaderSearch />

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
              to="/postblog"
            >
              Create Blog
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
          {user?.isAdmin ? (
            <li>
              <NavLink
                end
                className={(navData) =>
                  navData.isActive ? "active-item" : " "
                }
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}

export default Header;
