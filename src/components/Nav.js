import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const BlogPosts = {
    "first-blog-post": {
      title: "First Blog Post",
      description: "Lorem ipsum dolor sit amet, consectetur adip.",
    },
    "second-blog-post": {
      title: "Second Blog Post",
      description: "Hello React Router v6",
    },
  };
  console.log(Object.entries(BlogPosts));
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/"
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/contact"
          >
            Contact us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/about"
          >
            abouts us{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/blogs"
          >
            blogs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
