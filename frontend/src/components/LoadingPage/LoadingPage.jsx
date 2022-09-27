import React from 'react'
import RotateRightIcon from '@mui/icons-material/RotateRight';
import classNames from "classnames/bind";
import styles from "./loading.module.scss";
const cx = classNames.bind(styles);

function LoadingPage() {
    return (
        <div className={cx('loading')}>
            <i><RotateRightIcon className={cx('icon')} /></i>
            <a href="/"> loading more</a></div>
    )
}

export default LoadingPage