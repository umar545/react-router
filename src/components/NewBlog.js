import React from 'react'
import { Outlet , NavLink
} from 'react-router-dom'
function NewBlog() {
  const links = ['posts', 'users', 'todos', 'albums']
    
  return (
    <div>
      <h1>select one of them</h1>
        <nav>
      <ul>
        {links.map((link) => (
          <li key={link}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to={`/blogs/${link}`}
          >
            {link}
          </NavLink>
        </li>
        ))}
        {/* <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to={`/blogs/posts`}
          >
            posts
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/blogs/users"
          >
            users
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/blogs/about"
          >
            todos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/blogs/albums"
          >
            albums
          </NavLink>
        </li> */}
      </ul>
    </nav>
        <Outlet context={links} />
    </div>
  )
}

export default NewBlog
