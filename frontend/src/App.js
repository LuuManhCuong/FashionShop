import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import LoginPage from "./pages/LoginPage";
import Register from "./components/AuththenComponent/Register";
// chứa các trang
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
  );
}

export default App;
