import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./countdown.scss";

function CountDown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [event, setEvent] = useState(true);

  useEffect(() => {
    let timeCount = "october 10 2022";

    setInterval(() => {
      let futureDay = new Date(`${timeCount} 00:00:00`).getTime();
      let now = new Date().getTime();
      const gap = futureDay - now;
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      if (gap > 0) {
        // tính ra thời gian cụ thể
        // floor(x): trả về kiểu double = một số nguyên và không lớn hơn đối số (vd: 3.14 -> 3.0)
        // chia số dư %: lấy phần dư thời gian còn lại
        setDays(Math.floor(gap / day));
        setHours(Math.floor((gap % day) / hour));
        setMinutes(Math.floor((gap % hour) / minute));
        setSeconds(Math.floor((gap % minute) / second));
      } else {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setEvent(false);
      }
    }, 1000);
  }, []);

  return (
    <div className="countdown">
      <div className="product">
        <img
          src="	https://preview.colorlib.com/theme/malefashion/img/xproduct-sale.png.pagespeed.ic.n2J8U5DKGJ.webp"
          alt="product"
        />
      </div>
      <div className="countdown-timer">
        <div className="context">
          <h3 className="title">Deal Of The Week</h3>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            ipsum dolor sit amet, consectetur adipisicing elit
          </p>
          <h3 className="price">
            $35.00 <span>/HanBag</span>
          </h3>
        </div>
        <div className="timer">
          <h3 className="timer-item">
            {days}
            <p>Days</p>
          </h3>
          <h3 className="timer-item">
            {hours}
            <p>Hours</p>
          </h3>
          <h3 className="timer-item">
            {minutes}
            <p>Minutes</p>
          </h3>
          <h3 className="timer-item">
            {seconds}
            <p>Seconds</p>
          </h3>
        </div>
        {event ? (
          <Link to="/shop/detail/42">
            <button className="btn-event">Buy Now</button>
          </Link>
        ) : (
          <Link to="/shop">
            <button disabled className="btn-event timeout">
              Time Out
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CountDown;
