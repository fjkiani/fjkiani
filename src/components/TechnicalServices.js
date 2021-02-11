import React, {useEffect} from 'react'
import Title from "../components/Title"
import styles from "../styles/services.module.css"
import technicalServices from "../components/constants/technicalServices"
import AOS from 'aos'
import 'aos/dist/aos.css'

const TechnicalServices = () => {

  useEffect(() => {
    AOS.init({
    duration : 2000})
}, [])


  return (
    <section className={styles.services}>
    
      <Title title="My Technical Stack" subtitle="services" />
      <div className={styles.center} data-aos="fade-in">
        {technicalServices.map((item, index, id) => {
          return (
            <article key={index} className={styles.service}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p className="technicalServicesText">{item.text}</p>
            </article>

          )
        })}
      </div>
    </section>
  )
}

export default TechnicalServices
