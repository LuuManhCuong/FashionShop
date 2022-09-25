import classNames from "classnames/bind";
import styles from "./blogContent.module.scss";
const cx = classNames.bind(styles);
function BlogContent() {
    return (  
        <div className={cx('wrap')}>
            <div className={cx('product')}>
                product
            </div>
        </div>
    );
}

export default BlogContent;