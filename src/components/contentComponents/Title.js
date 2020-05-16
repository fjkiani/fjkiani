import React, {useEffect} from 'react'
import styles from "../../styles/title.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Title = ({ title, subtitle }) => {
  useEffect(() => {
    AOS.init({
    duration : 2000})
}, [])
  

  return (
    <div data-aos="fade-in">   
    <div className={styles.banner}>   
       <h2>{title}</h2>
        <div className={styles.underline}></div>
      </div>
    </div>
  )
}

export default Title