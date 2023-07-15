import React, { useEffect, useState } from "react";
// import Blog from "../components/Blog";
import { Link, useOutletContext } from "react-router-dom";

function Blogs() {
    // const blogs = useOutletContext();
  return (
    <div className="blogs-container container">
      <h1>
        welcome to our fake api you can browse it as you want
      </h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aspernatur blanditiis nostrum facere amet. Quidem, assumenda magnam. Eveniet quisquam aut blanditiis voluptatibus voluptatem a aliquid, molestiae laboriosam autem deleniti reiciendis?</p>
    </div>
  );
}

export default Blogs;
