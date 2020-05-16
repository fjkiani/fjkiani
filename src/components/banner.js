import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"



const Banner = () => {

    const data = useStaticQuery(graphql`
    query {
        picOne: file(relativePath: { eq: "fahad2.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

 
    return (
        <div className="banner">
              <hr></hr>
            <div className = "container">
                <div className = "row">
                    {/* <div className="main-text"> I Am <br></br>Fahad J. Kiani</div> */}
                    <div className="imageOne">
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