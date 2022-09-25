import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";

// chứa các component của home
function Home() {
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <Categories></Categories>
      <Footer></Footer>
    </>
  );
}

export default Home;
