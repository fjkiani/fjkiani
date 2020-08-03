import React, {useEffect} from 'react'
import { useStaticQuery, graphql} from "gatsby"
import { Link } from "gatsby"
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
                  <h3>I like to Inspire with Innovation </h3>
                  <p>Through creating beautiful and meaningful work</p>
                  <Link to="/fjk">About FJK</Link>

                </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default AboutTrain