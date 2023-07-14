import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h1>some thing went wrong </h1>
      <Link to="/blogs">Go to blogs  </Link>
    </div>
  )
}

export default NotFound
