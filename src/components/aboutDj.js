import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutDj = () => {
    const data = useStaticQuery(graphql`
    query {
        picOne: file(relativePath: { eq: "djFahad.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

 
    return (
        <div className="aboutTrain aboutDev">
          <div className = "container">
             <div className = "inner-About">
                <div className="images">
                 <div className="devPic" data-aos="fade-in"> 
                   <Img fluid={data.picOne.childImageSharp.fluid}
                   imgStyle = {{
                   height: "115",
                   objectFit: "none" 
                   }}
                 />
                 </div>
                 </div>
                 <div class = "content" data-aos="fade-up">
                  <h3>I Play good music</h3>
                  <p>By DJ'ing. </p>
              <div className="btn-row">
              <Link to="/dj"> DJK</Link>
                  </div>
                </div>
                </div>
            </div>
    
        </div>
    )
}

export default AboutDj