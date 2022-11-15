import React from "react";
import { useParams } from "react-router-dom";

import DetailBlogContent from "../components/DetailBlogContent/DetailBlogContent";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CommentBlock from "../components/CommentBlock/CommentBlock";

function BlogDetail() {
  let { id } = useParams();
  return (
    <div>
      <Header />
      <div className="detailBlogContainer">
        <DetailBlogContent id={id} />
        <CommentBlock id={id}></CommentBlock>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetail;
