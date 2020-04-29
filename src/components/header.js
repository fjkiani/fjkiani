import { Link } from "gatsby"
import React, {Component} from "react"
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from "../images/fjk2.png"
import { FaCartArrowDown } from "react-icons/fa";



const Header = () => (
 
  <header>
    <div className="container">
      <div className="inner-header">
       <div className="logo">
        <Link to="/"><img src={logo}></img></Link>
      </div>
      <div className="navigation">
      <Nav>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">FJK</Link>
          <Link to="/dj">DJK</Link>
          <Link to="/work">Work</Link>

          <Nav.Link href="https://our-stories.us/" target="_blank">Blog</Nav.Link>

          <Link to="/contact">Contact</Link>
         </nav> 
         </Nav>    
       </div>
      </div>
     </div>
  </header>

  )

export default Header





