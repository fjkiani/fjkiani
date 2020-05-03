import React from "react"
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

        <br/>
        © {new Date().getFullYear()} Built by Fahad J. Kiani. 
        <br />
        <p>#SupportOpenSource.</p>
        <a href="https://www.gatsbyjs.org/" className="link">
          Gatsby
        </a>
      </div>
    </footer>
  )
}

export default Footer
