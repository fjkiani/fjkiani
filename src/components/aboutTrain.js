import React, {useEffect} from 'react'
import { useStaticQuery, graphql} from "gatsby"
import AOS from 'aos'
import 'aos/dist/aos.css'



const AboutTrain = () => {

    const data = useStaticQuery(graphql`
    query {
        picOne: file(relativePath: { eq: "fahad3.5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    AOS.init({
    duration : 2000})
}, [])

 
    return (
        <div className="aboutTrain aboutDev">
          <div className = "container">
             <div className = "inner-About">
               <div class = "content" data-aos="fade-in">
                  <h3>I build optimized web applications </h3>
                  <p>Using tech-stacks that are scalable, require little maintenance and fully optimized. They are designed to be scalable to your needs. </p>

                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTrain