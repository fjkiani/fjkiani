import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const AboutTrain = () => {
    const data = useStaticQuery(graphql`
    query {
        picOne: file(relativePath: { eq: "fahad5.png" }) {
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
                  <h3>Help Change lives </h3>
                  <p>It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for ‘lorem ipsum’ will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). </p>
              <div className="btn-row">
                {/* <Link to="/work">View Work</Link>     */}
                  </div>
                </div>
                </div>
            </div>
            <div className="black-box"><h2></h2></div>
            <div className="black-box overlay"></div>
        </div>
    )
}

export default AboutTrain