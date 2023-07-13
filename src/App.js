import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUS from "./pages/ContactUS";
import Blogs from "./pages/Blogs";
function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
