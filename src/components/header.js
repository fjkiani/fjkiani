import { Link } from "gatsby"
import React from "react"
import {Nav} from 'react-bootstrap';
import logo from "../images/fjk3.png"
import AniLink from "gatsby-plugin-transition-link/AniLink";




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
          <AniLink paintDrip to="/" color="black" >Home</AniLink>
          <AniLink paintDrip to="/fjk" color="black">FJK</AniLink>
          <AniLink paintDrip to="/djkiani" color="black" >DJK </AniLink>
          <AniLink paintDrip to="/work" color="black" >Work </AniLink>
          {/* <Link to="/milehighfightclub">Train</Link> */}

          <Nav.Link href="https://our-stories.us/" target="_blank">Blog</Nav.Link>

          <AniLink paintDrip to="/contact" color="black">Contact</AniLink>
         </nav> 
         </Nav>    
       </div>
      </div>
     </div>
  </header>

  )

export default Header





