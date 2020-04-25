import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AboutWeb = () => {
    const data = useStaticQuery(graphql`
    query {
        picOne: file(relativePath: { eq: "fahad4.5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

 
    return (
        <div className="aboutDev">
          <div className = "container">
             <div className = "inner-About">
               <div class = "content">
                  <h3>I bring ideas to life</h3>
                  <p>Hi there, My name is Fahad J. Kiani and I bring ideas to life. </p>
              <div className="btn-row">
                <Link to="/about">About Me</Link>    
                  </div>
                </div>
                <div className="images">
                 <div className="devPic"> 
                   <Img fluid={data.picOne.childImageSharp.fluid}
                   imgStyle = {{
                   height: "115",
                   objectFit: "none" 
                   }}
                 />
                 </div>
                 </div>
                </div>
            </div>
            <div className="black-box"><h2></h2></div>
            <div className="black-box overlay"></div>
        </div>
    )
}

export default AboutWeb