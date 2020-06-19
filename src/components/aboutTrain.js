import React, {useEffect} from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import {Nav} from 'react-bootstrap';
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
             {/* <div className="images">
                 <div className="devPic" data-aos="fade-in"> 
                   <Img fluid={data.picOne.childImageSharp.fluid}
                   imgStyle = {{
                   height: "115",
                   objectFit: "none" 
                   }}
                 />
                 </div>
                 </div> */}
               <div class = "content" data-aos="fade-in">
                  <h3>I like to Inspire with Innovation </h3>
                  <p>Through creating beautiful and and meaningful work</p>
                  <Link to="/fjk">About FJK</Link>
              {/* <div className="btn-row">
              <Nav.Link href="https://our-stories.us/" target="_blank">Learn</Nav.Link>
                  </div> */}

                </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default AboutTrain