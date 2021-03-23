import { Link } from "gatsby"
import React from "react"
import {Nav} from 'react-bootstrap';
import logo from "../images/fjk1.jpg"
import AniLink from "gatsby-plugin-transition-link/AniLink";




const Header = () => (
 
  <header>
    <div className="container">
      <div className="inner-header">
       <div className="logo">
        <AniLink paintDrip to="/" color="black"><img src={logo} alt="logo"></img></AniLink>
      </div>
      <div className="navigation">
      <Nav>
        <nav>
          <AniLink fade to="/"
          // bg="url(https://www.fahadkiani.com/static/dcc2ad611c4c991f1c6e06b4f78d9afa/69585/fahad2.png)
          // "
          >Home</AniLink>
          <AniLink fade to="/fjk" 
          >FJK</AniLink>
          {/* <AniLink fade to="/djkiani" color="black" >DJK </AniLink> */}
          <AniLink  fade to="/work" >Work </AniLink>
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





