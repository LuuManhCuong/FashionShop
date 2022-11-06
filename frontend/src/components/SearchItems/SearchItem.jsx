import React from 'react'
import classNames from "classnames/bind";
import styles from "./searchItem.module.scss";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function SearchItems({items}) {
  return (
    <div className={cx('wrap')}>
      <Link to={items.to} className={cx('item')}> 
        {items.name}
       </Link>
    </div>
  )
}

export default SearchItems