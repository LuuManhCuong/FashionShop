import React from 'react'
import classNames from "classnames/bind";
import styles from "./detailBlogContent.module.scss";
import {FacebookOutlined} from '@mui/icons-material'
const cx = classNames.bind(styles);


function DetailBlogContent() {
    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <h1 className={cx('name')}>Are you one of the thousands of Iphone owners who has no idea</h1>
                <ul>
                    <li> by author</li>
                    <li> 10/12/2002</li>
                    <li> 8 comments</li>
                </ul>
            </div>
            <img  src="https://preview.colorlib.com/theme/malefashion/img/blog/details/xblog-details.jpg.pagespeed.ic.ZSo1XSfOSP.webp" alt="" />
            <div className={cx('info-content')}>
                <div className={cx('share')}>
                    <p>share</p>
                    <ul>
                        <li><a href=""><FacebookOutlined/></a></li>
                    </ul>
                </div>
                <p className={cx('info')}>
                    Hydroderm is the highly desired anti-aging cream on the block. This serum restricts the occurrence of early aging sings on the skin and keeps the skin younger, tighter and healthier. It reduces the wrinkles and loosening of skin. This cream nourishes the skin and brings back the glow that had lost in the run of hectic years.
                </p>
            </div>
        </div>
    )
}

export default DetailBlogContent