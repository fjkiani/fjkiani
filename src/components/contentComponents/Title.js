import React from "react"
import styles from "../../styles/title.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Title = ({ title, subtitle }) => {

  AOS.init({
    duration : 2000
  })

  return (
    <div class="fade-in">   
    <div className={styles.banner}>   
       <h2>{title}</h2>
        <div className={styles.underline}></div>
      </div>
    </div>
  )
}

export default Title