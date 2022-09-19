import classNames from "classnames/bind";
import styles from "./slider.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const cx = classNames.bind(styles);

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 250000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className={cx("slider-wrap")}>
          <img
            className={cx("slider-img")}
            src="	https://preview.colorlib.com/theme/fashi/img/hero-1.jpg"
            alt="slider"
          />
          <div className={cx("slider-context")}>
            <h2>Black friday</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <button>Shop now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className={cx("slider-wrap")}>
          <img
            className={cx("slider-img")}
            src="	https://preview.colorlib.com/theme/fashi/img/hero-2.jpg"
            alt="slider "
          />
          <div className={cx("slider-context")}>
            <h2>Black friday</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <button>Shop now</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className={cx("slider-wrap")}>
          <img
            className={cx("slider-img")}
            src="https://preview.colorlib.com/theme/fashi/img/time-bg.jpg"
            alt="slider "
          />
          <div className={cx("slider-context")}>
            <h2>Black friday</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <button>Shop now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
