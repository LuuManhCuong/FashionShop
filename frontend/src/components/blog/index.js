import classNames from "classnames/bind";
import styles from "./blog.module.scss";
const cx = classNames.bind(styles);
function Blog() {
    return (  
        <div className={cx('wrap')}>
            <div className={cx('category')}>
                category
            </div>
            <div className={cx('product')}>
                product
            </div>
        </div>
    );
}

export default Blog;