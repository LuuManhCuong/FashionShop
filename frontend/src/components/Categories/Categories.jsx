import "./categories.scss";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <Link to="/shop" className="containers">
      <div className="banner">
        <img
          className="banner-img"
          src="https://i.pinimg.com/236x/8b/01/20/8b0120082b57556240e88c617fe3f13d.jpg"
          alt="banner"
        />

        <h3 className="banner-text">MEN'S</h3>
      </div>
      <div className="banner">
        <img
          className="banner-img"
          src="https://i.pinimg.com/236x/f0/9d/08/f09d0885851ae71f8791c571185adca2.jpg"
          alt="banner"
        />
        <h3 className="banner-text">WOMEN'S</h3>
      </div>
      <div className="banner">
        <img
          className="banner-img"
          src="https://i.pinimg.com/564x/61/7a/f5/617af54ef2468181f631f032e71d5891.jpg"
          alt="banner"
        />
        <h3 className="banner-text">KID'S</h3>
      </div>
    </Link>
  );
}

export default Categories;
