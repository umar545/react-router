import React from "react";
import Blog from "../components/Blog";

function Blogs() {
  const blogs = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="blogs-container container">
      {blogs.map((blog) => (
        <Blog key={blog} />
      ))}
    </div>
  );
}

export default Blogs;
