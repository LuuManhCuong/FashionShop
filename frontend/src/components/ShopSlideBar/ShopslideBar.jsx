import React from 'react'
import classNames from "classnames/bind";
import styles from "./shopSlideBar.module.scss";
import Tag from '../Tags/Tag';

import SlideBarCategory from '../SlideBarCategory/SlideBarCategory';
import { getValue } from '@mui/system';
import { useState } from 'react';
const cx = classNames.bind(styles);
const categories = ['men', 'women', 'kids']

function ShopslideBar() {
    const [startPrice, setStartPrice] = useState(0 + " $")
    const [endPrice, setEndPrice] = useState(50 + " $")
    return (
        <div className={cx('container')}>
            <SlideBarCategory categories={categories} />
            <div className={cx('brand')}>
                <h2>brand</h2>
                <ul>
                    <li>
                        <input type="checkbox" />
                        <span>Calvin Klein</span>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span>Diesel</span>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span>Polo </span>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span>Tommy Hilfiger</span>
                    </li>
                </ul>
            </div>
            <div className={cx('price')}>
                <h2> Price</h2>
                <div className={cx('price-current')}>
                    <input type="text" value={startPrice} className={cx('price-current-input')} />
                    <input type="text" value={endPrice} className={cx('price-current-input')} />
                    <span >
                        {/* gach ngang */}
                    </span>
                </div>
                <input className={cx('input-range')} type="range" min={0} max={100} step={1} onChange={(e) => {
                    setEndPrice(e.target.value + " $")
                }} />
            </div>
            <div className={cx('container-color')}>
                <h2>Color</h2>
                <ul>
                    <li>
                        <span className={cx(['color','color-purple'])}></span>
                        <span className={cx('color-name')}>purple</span>
                    </li>
                    <li>
                        <span className={cx(['color','color-red'])}></span>
                        <span className={cx('color-name')}>Red</span>
                    </li>
                    <li>
                        <span className={cx(['color','color-black'])}></span>
                        <span className={cx('color-name')}>black</span>
                    </li>
                    <li>
                        <span className={cx(['color','color-violet'])}></span>
                        <span className={cx('color-name')}>violet</span>
                    </li>
                    <li>
                        <span className={cx(['color','color-green'])}></span>
                        <span className={cx('color-name')}>green</span>
                    </li>
                    <li>
                        <span className={cx(['color','color-yellow'])}></span>
                        <span className={cx('color-name')}>yellow</span>
                    </li>
                </ul>
            </div>
            <div className={cx('size')}>
                <h2>Size</h2>
                <ul>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XS</li>
                </ul>
            </div>
            <Tag/>
        </div>
    )
}

export default ShopslideBar