import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutWeb = () => {
    const data = useStaticQuery(graphql`
    query {
        picOne: file(relativePath: { eq: "fahad4.5.jpg" }) {
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
               <div class = "content" data-aos="fade-in">
                  <h3>Hello World</h3>
                  <p>My name is Fahad J. Kiani. I am a Software Engineer and I like to bring ideas to life</p>
              <div className="btn-row">    
                  </div>
                  {/* <Link to="/about">About FJK</Link> */}
                </div>
                <br/>
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
                </div>
            </div>
            <hr></hr>
        </div>

    )
}

export default AboutWeb