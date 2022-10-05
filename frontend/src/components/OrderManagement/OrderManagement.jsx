import { NavLink } from "react-router-dom";

function OrderManagement() {
  return (
    <div>
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
export default OrderManagement;
