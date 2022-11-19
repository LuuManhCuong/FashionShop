import "./categories.scss";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <Link to="/shop" className="containers">
      <div className="banner">
        <img
          className="banner-img"
          src="https://preview.colorlib.com/theme/fashi/img/banner-1.jpg"
          alt="banner"
        />

        <h3 className="banner-text">MEN'S</h3>
      </div>
      <div className="banner">
        <img
          className="banner-img"
          src="https://preview.colorlib.com/theme/fashi/img/blog/blog-5.jpg"
          alt="banner"
        />
        <h3 className="banner-text">WOMEN'S</h3>
      </div>
      <div className="banner">
        <img
          className="banner-img"
          src="https://preview.colorlib.com/theme/fashi/img/banner-3.jpg"
          alt="banner"
        />
        <h3 className="banner-text">KID'S</h3>
      </div>
    </Link>
  );
}

export default Categories;
