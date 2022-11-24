import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { homeDataSelector } from "../../redux/selectors";
import "./countdown.scss";
import Doremon from "../Doremon/Doremon";

function CountDown() {
  const eventData = useSelector(homeDataSelector);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [event, setEvent] = useState(true);

  if (!eventData.isLoading) {
    setInterval(() => {
      let fill = eventData.data[1];
      let timeCount = fill[0].dateEvent.replaceAll("/", " ");
      let futureDay = new Date(`20${timeCount} 00:00:00`).getTime();
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
  }

  return (
    <>
      {eventData.isLoading ? (
        <Doremon></Doremon>
      ) : (
        <>
          {eventData.data[1].map((e) => (
            <div key={e.idProduct} className="countdown">
              <div className="product">
                <img src={e.avatar} alt="product" />
              </div>
              <div className="countdown-timer">
                <div className="context">
                  <h3 className="title">Deal Of The Week</h3>
                  <p className="desc">{e.description}</p>
                  <h3 className="price">
                    ${e.price} <span>/ {e.category}</span>
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
                  <Link to={`/shop/detail/${e.idProduct}`}>
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
          ))}
        </>
      )}
    </>
  );
}

export default memo(CountDown);
