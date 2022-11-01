import "./slider.css";

import { NavLink } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { useSelector } from "react-redux";
import { homeDataSelector } from "../../redux/selectors";
import Doremon from "../Doremon/Doremon";

export default function App() {
  const sliderData = useSelector(homeDataSelector);
  console.log("re-render");
  return (
    <>
      {sliderData.isLoading ? (
        <Doremon></Doremon>
      ) : (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sliderData.data[0].map((slider) => (
            <SwiperSlide key={slider.id} className="slider-wrap">
              <img className="slider-img" src={slider.src} alt="slider" />
              <div className="slider-context">
                <h2>{slider.title}</h2>
                <p>{slider.description}</p>
                <NavLink to={"/shop"}>
                  <button>Shop now</button>
                </NavLink>
              </div>

              <div className="slider-sale">
                <h2>Sale</h2>
                <p>{slider.sale}%</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
