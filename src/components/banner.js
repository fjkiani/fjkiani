import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"



const Banner = () => {

    const data = useStaticQuery(graphql`
    query {
        picOne: file(relativePath: { eq: "fahad-code.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

 
    return (
        <div className="banner mainPic">
              <hr></hr>
            <div className = "container">
                <div className = "row">
                    {/* <div className="main-text"> I Am <br></br>Fahad J. Kiani</div> */}
                    <div className="imageThree">
                      <Img fluid={data.picOne.childImageSharp.fluid} 
                     
                      />
                    </div>
                    <hr></hr>
                </div>
             

                
              
            </div>
        </div>
    )
}

export default Banner