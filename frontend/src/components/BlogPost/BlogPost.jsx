import React from 'react'
import classNames from 'classnames/bind';
import styles from "./BlogPost.scss";



const cx = classNames.bind(styles);

function BlogPost() {
  return (
    <div className={cx("blogPost")}>

    <div className={cx("title")}>
      <h2>What do you think?</h2>
    </div>

      <div className={cx("wrap")}>

        

        <div className={cx("wrap-image")}>
          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupFile01">Image</label>
            <input type="file" class="form-control" id="inputGroupFile01"></input>
          </div>
        </div>

        <div className={cx("wrap-field")}>
          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Field</label>
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">Fashion</option>
              <option value="2">Love</option>
              <option value="3">Sport</option>
            </select>
          </div>
        </div>

        <div className={cx("wrap-title")}>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Title</span>
            <input type="text" class="form-control" placeholder="title" aria-label="title" aria-describedby="addon-wrapping"></input>
          </div>
        </div>

        <div className={cx("wrap-content")}>
          <div class="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">Content</span>
            <input type="text" class="form-control" aria-label="Content" aria-describedby="addon-wrapping"></input>
          </div>
        </div>

        <div className={cx("submit")}>
          <button className={cx("submit-btn")} type='submit'>POST</button>
        </div>

      </div>

    </div>
  )
}

export default BlogPost