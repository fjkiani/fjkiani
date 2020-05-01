import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AboutTrain = () => {
    const data = useStaticQuery(graphql`
    query {
        picOne: file(relativePath: { eq: "fahad3.5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
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
                 <div className="devPic"> 
                   <Img fluid={data.picOne.childImageSharp.fluid}
                   imgStyle = {{
                   height: "115",
                   objectFit: "none" 
                   }}
                 />
                 </div>
                 </div>
               <div class = "content">
                  <h3>I Help Change lives </h3>
                  <p>Through fitness and wellbeing </p>
              <div className="btn-row">
                <Link to="/work">Learn</Link>    
                  </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTrain