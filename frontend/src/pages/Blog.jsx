import React from "react";
import Header from "../components/Header/Header";
import BlogContent from "../components/BlogContent/BlogContent";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";

function Blog() {
  const data = [
    {
      category: "Fashion",
      component: <BlogContent slug="fashion" />,
    },

    {
      category: "Travel",
      component: <BlogContent slug="travel" />,
    },

    {
      category: "Modle",
      component: <BlogContent slug="modle" />,
    },
  ];
  return (
    <div>
      <Header />
      <div className="blogContainer">
        <SideBar
          showPost={true}
          showSearch={true}
          showFilter={false}
          data={data}
        ></SideBar>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
