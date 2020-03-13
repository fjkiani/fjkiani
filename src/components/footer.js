import React from "react"

//

// Socials
// import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="inner">
          <span>© 2019 Fahad J. Kiani</span>
          <div className="socials">
            <a href="/">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
          <span>fahad@me.com</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
