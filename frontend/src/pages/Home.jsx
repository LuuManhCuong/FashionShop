import BestSale from "../components/BestSale/BestSale";
import Categories from "../components/Categories/Categories";
import CountDown from "../components/CountDown/CountDown";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import HomeBlog from "../components/HomeBlog/HomeBlog";
import { useDispatch } from "react-redux";
import { getHomeRequest } from "../redux/reducer/homeSlice";
import { ToastContainer } from "react-toastify";

// chứa các component của home
function Home() {
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Home;
