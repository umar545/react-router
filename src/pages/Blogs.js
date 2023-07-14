import React, { useEffect, useState } from "react";
// import Blog from "../components/Blog";
import { Link, useOutletContext } from "react-router-dom";

function Blogs() {
    const blogs = useOutletContext();
    console.log(blogs)
  return (
    <div className="blogs-container container">
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} >
          <h1>blog title {blog.id}</h1>
        </Link>
      ))}
    </div>
  );
}

export default Blogs;
