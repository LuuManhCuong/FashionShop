import classNames from "classnames/bind";
import * as React from "react";
import styles from "./blogContent.module.scss";
import BlogItem from "../BlogItems/BlogItem";
// import LoadingPage from "../LoadingPage/LoadingPage";
import { useSelector } from "react-redux";
import { blogDataSelector, reloadApiSlector } from "../../redux/selectors";
import Doremon from "../Doremon/Doremon";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { HOT_URL } from "../../api/api";
const cx = classNames.bind(styles);
function BlogContent({ slug }) {
  const blogData = useSelector(blogDataSelector);
  const reloadApi = useSelector(reloadApiSlector);
  // const tagData = useSelector(blogFilterTagSelector);
  const [listBlog, setListBlog] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // count page
  useEffect(() => {
    fetch(`${HOT_URL}/blog/count?category=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(Math.ceil(Number(data[0].total) / 4));
      });
  }, [slug, reloadApi.reload]);

  useEffect(() => {
    let offset;
    page === 0 ? (offset = 0) : (offset = (page - 1) * 4);
    fetch(`${HOT_URL}/blog?category=${slug}&page=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        setListBlog(data[0]);
      });
  }, [page, slug, reloadApi.reload]);

  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
    window.scrollTo({ top: 110, behavior: "smooth" });
  }

  return (
    <div className={cx("wrap")}>
      <h1>{slug}</h1>
      <div className={cx("product")}>
        {blogData.isLoading ? (
          <Doremon></Doremon>
        ) : (
          <>
            {listBlog.map((blog, i) => (
              <BlogItem key={i} blogItem={blog}></BlogItem>
            ))}
          </>
        )}
      </div>
      <Stack spacing={2}>
        <Typography className="page">
          Page: {page || 1} / {totalPages} Of {slug}
        </Typography>
        <Pagination
          className="pagination"
          count={totalPages}
          color="primary"
          page={page || 1}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}

export default BlogContent;
