import classNames from "classnames/bind";
import styles from "./blogContent.module.scss";
import BlogItem from "../BlogItems/BlogItem";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useSelector } from "react-redux";
import { blogDataSelector } from "../../redux/selectors";
import Doremon from "../Doremon/Doremon";

const cx = classNames.bind(styles);
function BlogContent({ slug }) {
  const blogData = useSelector(blogDataSelector);
  // console.log("blogData: ", blogData);
  return (
    <div className={cx("wrap")}>
      <h1>{slug}</h1>
      <div className={cx("product")}>
        {blogData.isLoading ? (
          <Doremon></Doremon>
        ) : (
          <>
            {blogData.data[0].map((blog, i) => (
              <BlogItem key={i} blogItem={blog}></BlogItem>
            ))}
          </>
        )}
      </div>
      <LoadingPage />
    </div>
  );
}

export default BlogContent;
