import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState , useEffect } from 'react'
function NewBlog() {
    const [blogs , setBlogs] = useState([])
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
       const shortData = data.slice(0, 10);
        setBlogs(shortData)
      })
    },[])
   
  return (
    <div>
      <h1> New Blog </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quia, quod nulla consectetur labore rem perspiciatis unde porro voluptatum beatae id veniam maiores. Aspernatur maiores ducimus impedit distinctio, consequatur expedita.</p>
        <Outlet context={blogs} />
    </div>
  )
}

export default NewBlog
