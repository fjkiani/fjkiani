import React from "react"
import styles from "../styles/footer.css"
import icons from "./SocialLinks"
import { Link } from "gatsby"
import {Nav} from 'react-bootstrap';
import { OutboundLink } from "gatsby-plugin-google-analytics"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
        {icons.map(item => {
          return (
            <OutboundLink target="_blank" rel="noopener noreferrer" key={item.id} href={item.url} className={styles.icon}>
              {item.image}
            </OutboundLink>
          )
        })}

      </div>
      
      <div className="info">
        <br/>
        © {new Date().getFullYear()} Built by Fahad J. Kiani. 
        <br />
        <p>#SupportOpenSource.</p>
        <a href="https://www.gatsbyjs.org/" className="link">
          Gatsby
        </a>
        
     <div className="inner-nav">
      <div className="footerNav">
      <Nav>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/fjk">FJK</Link>
          <Link to="/djkiani">DJK</Link>
          <Link to="/work">Work</Link>

          <Nav.Link href="https://our-stories.us/" target="_blank">Blog</Nav.Link>

          <Link to="/contact">Contact</Link>
          {/* <Nav.Link href="https://drive.google.com/file/d/1iGhdet8NKmOWwYX0Uz62gw4fPHQP_Mc2/view?usp=sharing" target="_blank">Resume</Nav.Link> */}
         </nav> 
         </Nav>    
       </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
