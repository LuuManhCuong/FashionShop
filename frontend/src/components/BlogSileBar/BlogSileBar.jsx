import classNames from "classnames/bind";
import styles from "./blogSileBar.module.scss";
const cx = classNames.bind(styles);

function BlogSileBar() {
    return (<div className={cx('container')}>
        <h1>Search</h1>
        <form className={cx('search')}>
            <input type="text" placeholder="Search..." />
            <button className={cx('submit')}>tk</button>
        </form>
        <div className={cx('category')}>
            <h2>Categories</h2>
            <ul>
                <li>
                    <a>
                        Fashion
                    </a>
                </li>
                <li>
                    <a>
                        Travel
                    </a>
                </li>
                <li>
                    <a>
                        Picnic
                    </a>
                </li>
                <li>
                    <a>
                        Modle
                    </a>
                </li>
            </ul>
        </div>
        <div className={cx('recent-post')}>
            <h2>Recent Post</h2>
            <a href="/" className={cx('items')}>
                <img src="https://didongviet.vn/dchannel/wp-content/uploads/2022/01/duong-cong-didongviet.jpg" alt="" />
                <div className={cx('infos')}>
                    <h4 className={cx('name')}>The Personality Trait That Makes...</h4>
                    <p className={cx('fashion')}>Fashion  <span className={cx('day')}>mon 19/12/2022</span></p>
                </div>
            </a>
            <a href="/" className={cx('items')}>
                <img src="https://didongviet.vn/dchannel/wp-content/uploads/2022/01/duong-cong-didongviet.jpg" alt="" />
                <div className={cx('infos')}>
                    <h4 className={cx('name')}>The Personality Trait That Makes...</h4>
                    <p className={cx('fashion')}>Fashion  <span className={cx('day')}>mon 19/12/2022</span></p>
                </div>
            </a> 
            <a href="/" className={cx('items')}>
                <img src="https://didongviet.vn/dchannel/wp-content/uploads/2022/01/duong-cong-didongviet.jpg" alt="" />
                <div className={cx('infos')}>
                    <h4 className={cx('name')}>The Personality Trait That Makes...</h4>
                    <p className={cx('fashion')}>Fashion  <span className={cx('day')}>mon 19/12/2022</span></p>
                </div>
            </a>
        </div>
        <div className={cx('product-tag')}>
            <h4>product tags</h4>
            <ul>
                <li>
                    <a href="">dress</a>
                </li>
                <li>
                    <a href="">t-shish</a>
                </li> 
                <li>
                    <a href="">short</a>
                </li> 
                <li>
                    <a href="">shoes</a>
                </li> 
                <li>
                    <a href="">dress</a>
                </li>  
            </ul>
        </div>
    </div>
    );
}

export default BlogSileBar;