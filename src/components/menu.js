import React from "react"
import { Link } from "gatsby"

function Menu() {
  return (
    <div
      style={{
        background: "#44ee11",
        paddingTop: "10px",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
