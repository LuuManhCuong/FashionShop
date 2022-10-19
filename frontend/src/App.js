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
import Doremon from "./components/Doremon/Doremon";
// chứa các trang
function App() {
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
      <Route path="/blogpost" element={<BlogPostPage />}></Route>
      <Route path="/gfu" element={<Doremon />}></Route>
    </Routes>
  );
}

export default App;
