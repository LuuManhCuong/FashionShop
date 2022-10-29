import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import BlogDetail from "./pages/BlogDetail";
import LoginPage from "./pages/LoginPage";
import Admin from "./pages/Admin";
import Register from "./components/AuththenComponent/Register";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";
import BlogPostPage from "./pages/BlogPostPage";
import { useDispatch } from "react-redux";
import { getHomeRequest } from "./redux/reducer/homeSlice";
import { getBlogRequest } from "./redux/reducer/blogSlice";
// chứa các trang
function App() {
  const dispatch = useDispatch();
  dispatch(getHomeRequest());
  dispatch(getBlogRequest());
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/shop/detail/:id" element={<Product></Product>}></Route>
      <Route path="/blog/detail/:id" element={<BlogDetail />} />
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/postblog" element={<BlogPostPage />}></Route>
    </Routes>
  );
}

export default App;
