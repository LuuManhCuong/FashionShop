import "./categories.scss";

function Categories() {
  return (
    <div className="containers">
      <div className="banner">
        <img
          className="banner-img"
          src="https://preview.colorlib.com/theme/fashi/img/xbanner-1.jpg.pagespeed.ic.WtoTbL-e6z.webp"
          alt="banner"
        />
        <h3 className="banner-text">MEN'S</h3>
      </div>
      <div className="banner">
        <img
          className="banner-img"
          src="https://preview.colorlib.com/theme/fashi/img/xbanner-2.jpg.pagespeed.ic.N15HuVVX4r.webp"
          alt="banner"
        />
        <h3 className="banner-text">WOMEN'S</h3>
      </div>
      <div className="banner">
        <img
          className="banner-img"
          src="https://preview.colorlib.com/theme/fashi/img/xbanner-3.jpg.pagespeed.ic.BQA2S7WT5H.webp"
          alt="banner"
        />
        <h3 className="banner-text">KID'S</h3>
      </div>
    </div>
  );
}

export default Categories;
