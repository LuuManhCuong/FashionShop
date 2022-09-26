import classNames from "classnames/bind";
import styles from "./blogContent.module.scss";
import BlogItem from "../BlogItems/BlogItem";

import LoadingPage from "../LoadingPage/LoadingPage";
const cx = classNames.bind(styles);
function BlogContent() {
    return (  
        <div className={cx('wrap')}>
            <div className={cx('product')}>

                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
            </div>
        <LoadingPage/>
        </div>
    );
}

export default BlogContent;