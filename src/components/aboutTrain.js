import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import {Nav} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutTrain = () => {
  AOS.init({
    duration : 2000
  })
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
                  <h3>I Help Change lives </h3>
                  <p>Through mindfulness and well-being</p>
              <div className="btn-row">
              <Nav.Link href="https://our-stories.us/" target="_blank">Learn</Nav.Link>
                  </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTrain