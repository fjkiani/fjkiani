import React from "react"
import logo from "../images/fjk1.jpg"
import styles from "../styles/footer.css"
import icons from "./SocialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
        {icons.map(item => {
          return (
            <a key={item.id} href={item.url} className={styles.icon}>
              {item.image}
            </a>
          )
        })}
      </div>
      <div className="info">
        © {new Date().getFullYear()} Fahad J. Kiani All rights reserved. Built
        with
        <a href="https://www.gatsbyjs.org/" className="link">
          Gatsby
        </a>
      </div>
    </footer>
  )
}

export default Footer
