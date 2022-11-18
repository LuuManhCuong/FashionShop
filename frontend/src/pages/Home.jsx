import BestSale from "../components/BestSale/BestSale";
import Categories from "../components/Categories/Categories";
import CountDown from "../components/CountDown/CountDown";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import HomeBlog from "../components/HomeBlog/HomeBlog";
import { useDispatch } from "react-redux";
import { getHomeRequest } from "../redux/reducer/homeSlice";

// chứa các component của home
function Home() {
  console.log("re-render Home");
  const dispatch = useDispatch();
  dispatch(getHomeRequest());
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <Categories></Categories>
      <BestSale gender={"women"}></BestSale>
      <CountDown></CountDown>
      <BestSale gender={"men"}></BestSale>
      <HomeBlog></HomeBlog>
      <Footer></Footer>
    </>
  );
}

export default Home;
