import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
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
