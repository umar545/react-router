import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

function Blog() {
  const {id} = useParams();
  const blogs = useOutletContext();
  const blog = blogs[id-1];
  console.log(blog)
  return (
    <div key={id} className="blog container">
      <h1>blog no {id} and blog id {blog.id}</h1>
      <h3>{blog.title}</h3>
      <p>{blog.body}</p>
    </div>
  );
}

export default Blog;
