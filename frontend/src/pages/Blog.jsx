import Header from "../components/Header/Header";
import BlogContent from "../components/BlogContent/BlogContent";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";
import { getBlogRequest } from "../redux/reducer/blogSlice";
import { useDispatch } from "react-redux";

function Blog() {
  const dispatch = useDispatch();
  dispatch(getBlogRequest());
  const data = [
    {
      category: "Fashion",
      component: <BlogContent key={1} slug="fashion" />,
    },
    {
      category: "Life",
      component: <BlogContent key={0} slug="Life" />,
    },

    {
      category: "Travel",
      component: <BlogContent key={2} slug="travel" />,
    },

    {
      category: "Modle",
      component: <BlogContent key={3} slug="modle" />,
    },
    {
      category: "Music",
      component: <BlogContent key={4} slug="music" />,
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
          showTag={true}
          data={data}
        ></SideBar>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
