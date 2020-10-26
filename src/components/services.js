import React, {useEffect} from 'react'
import Title from "../components/Title"
import styles from "../styles/services.module.css"
import services from "../components/constants/services"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {

  useEffect(() => {
    AOS.init({
    duration : 2000})
}, [])


  return (
    <section className={styles.services}>
    
      <Title title="My Services" subtitle="services" />
      <div className={styles.center} data-aos="fade-in">
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>

          )
        })}
      </div>
    </section>
  )
}

export default Services
