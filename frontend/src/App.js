import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
// chứa các trang
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
    </Routes>
  );
}

export default App;
