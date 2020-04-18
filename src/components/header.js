import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
       <div className="logo">
        <Link to="/">FJK</Link>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">FJK</Link>
          <Link to="/dj">DJK</Link>
          <Link to="/work">Work
          </Link>
          <Link to="/">Blog</Link>
          <Link to="/contact">Contact</Link>
         </nav>     
       </div>
      </div>
     </div>
  </header>
)



export default Header
