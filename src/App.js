import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUS from "./pages/ContactUS";
import Blogs from "./pages/Blogs";
import Blog from "./components/Blog";
import NotFound from "./pages/NotFound";
import NewBlog from "./components/NewBlog";
function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/blogs" element={<NewBlog />} >
          <Route index element={<Blogs />} />
          <Route path=":id" element={<Blog />} />
          <Route path="new" element={<NewBlog />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
