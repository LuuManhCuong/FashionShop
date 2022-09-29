import React from "react";

import DetailBlogContent from "../components/DetailBlogContent/DetailBlogContent";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CommentBlock from "../components/CommentBlock/CommentBlock";

function BlogDetail() {
  return (
    <div>
      <Header />
      <div className="detailBlogContainer">
        <DetailBlogContent />
        <CommentBlock></CommentBlock>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetail;
