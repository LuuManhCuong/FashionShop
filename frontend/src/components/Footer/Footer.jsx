import classNames from "classnames/bind";
import styles from "./footer.module.scss";
const cx = classNames.bind(styles);


function Footer() {
  return (
    <div className={cx("footer")}>
      <div>
        <h1>FASHION.</h1>
      </div>
      <div>
        <p>copy right @2022</p>
      </div>
      <div>
        <button>Contact</button>
      </div>
    </div>
  )
}

export default Footer