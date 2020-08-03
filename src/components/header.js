import { Link } from "gatsby"
import React from "react"
import {Nav} from 'react-bootstrap';
import logo from "../images/fjk3.png"



const Header = () => (
 
  <header>
    <div className="container">
      <div className="inner-header">
       <div className="logo">
        <Link to="/"><img src={logo} alt="logo"></img></Link>
      </div>
      <div className="navigation">
      <Nav>
        <nav>
          <Link to="/fjk">FJK</Link>
          <Link to="/djk">DJK</Link>
          <Link to="/work">Work</Link>
          <Link to="/milehighfightclub">Train</Link>

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





