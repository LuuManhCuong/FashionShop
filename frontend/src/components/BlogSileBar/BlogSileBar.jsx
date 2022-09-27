import classNames from "classnames/bind";
import styles from "./blogSileBar.module.scss";
import Tag from "../Tags/Tag";
import SlideBarCategory from "../SlideBarCategory/SlideBarCategory";
const cx = classNames.bind(styles);

const categories =[
  'Fashion','Travel','Picnic','Modle'
]

function BlogSileBar() {
  return (
    <div className={cx("container")}>
      <h1>Search</h1>
      <form className={cx("search")}>
        <input type="text" placeholder="Search..." />
        <button className={cx("submit")}>tk</button>
      </form>
     <SlideBarCategory categories={categories} />
      <div className={cx("recent-post")}>
        <h2>Recent Post</h2>
        <a href="/" className={cx("items")}>
          <img
            src="https://didongviet.vn/dchannel/wp-content/uploads/2022/01/duong-cong-didongviet.jpg"
            alt=""
          />
          <div className={cx("infos")}>
            <h4 className={cx("name")}>The Personality Trait That Makes...</h4>
            <p className={cx("fashion")}>
              Fashion <span className={cx("day")}>mon 19/12/2022</span>
            </p>
          </div>
        </a>
        <a href="/" className={cx("items")}>
          <img
            src="https://didongviet.vn/dchannel/wp-content/uploads/2022/01/duong-cong-didongviet.jpg"
            alt=""
          />
          <div className={cx("infos")}>
            <h4 className={cx("name")}>The Personality Trait That Makes...</h4>
            <p className={cx("fashion")}>
              Fashion <span className={cx("day")}>mon 19/12/2022</span>
            </p>
          </div>
        </a>
        <a href="/" className={cx("items")}>
          <img
            src="https://didongviet.vn/dchannel/wp-content/uploads/2022/01/duong-cong-didongviet.jpg"
            alt=""
          />
          <div className={cx("infos")}>
            <h4 className={cx("name")}>The Personality Trait That Makes...</h4>
            <p className={cx("fashion")}>
              Fashion <span className={cx("day")}>mon 19/12/2022</span>
            </p>
          </div>
        </a>
      </div>
      <Tag/>
    </div>
  );
}

export default BlogSileBar;
