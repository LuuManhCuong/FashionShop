import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import BlogDetail from './pages/BlogDetail'
// chứa các trang
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/blog/:id" element={<BlogDetail/>}/>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/blog/detail" element={<BlogDetail/>}></Route>
    </Routes>
  );
}

export default App;
