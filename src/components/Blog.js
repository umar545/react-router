import React from "react";
import {  useOutletContext, useParams } from "react-router-dom";
import { useState , useEffect } from 'react'
import Blogs from '../pages/Blogs';

function Blog() {
  const {name} = useParams();
  const lists = useOutletContext()
  console.log(lists , name)
  const desired =  name ? lists.filter(list => list == name) : 'posts'
  console.log(desired)
  const [blogs , setBlogs] = useState([])
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${desired}`)
      .then(res => res.json())
      .then(data => {
        setBlogs(data)})
    },[name])
   
  return (
    <div key={name} className="blog container">
      <h1>{desired}</h1>
      { blogs.map(blog => (
        <div key={blog.id}>
          <h1>{blog.id}:{blog.name}{blog.title}</h1>
          <p>{blog.title} {blog.email}{blog.body}</p>
        </div>
      )) }

      
    </div>
  );
}

export default Blog;
