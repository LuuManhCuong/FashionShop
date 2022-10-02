import React from "react";
import Header from "../components/Header/Header";
import BlogContent from "../components/BlogContent/BlogContent";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";

function Blog() {
  const categories = ["Fashion", "Travel", "Picnic", "Modle"];

  return (
    <div>
      <Header />
      <div className="blogContainer">
        <SideBar
          showPost={true}
          showSearch={true}
          showFilter={false}
          categories={categories}
        ></SideBar>
        <BlogContent />
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
