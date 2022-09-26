import classNames from "classnames/bind";
import styles from "./blogContent.module.scss";
import BlogItem from "../BlogItems/BlogItem";

import RotateRightIcon from '@mui/icons-material/RotateRight';
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
            <div className={cx('loading')}>
                 <i><RotateRightIcon className={cx('icon')} /></i>
                  <a href="/"> loading more</a></div>
        </div>
    );
}

export default BlogContent;