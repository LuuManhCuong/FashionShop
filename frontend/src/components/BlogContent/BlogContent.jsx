import classNames from "classnames/bind";
import styles from "./blogContent.module.scss";
import BlogItem from "../BlogItems/BlogItem";

import LoadingPage from "../LoadingPage/LoadingPage";
const cx = classNames.bind(styles);
function BlogContent({slug}) {
  return (
    <div className={cx("wrap")}>
      <h1>{slug}</h1>
      <div className={cx("product")}>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <LoadingPage />
    </div>
  );
}

export default BlogContent;
