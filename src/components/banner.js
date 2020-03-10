import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import Typical from 'react-typical'

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
        picOne: file(relativePath: { eq: "fahad2.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
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
                      height = "111%"
                      object-fit = "none"/>
                    </div>
                    <br></br>
                </div>
                {/* <div className="scroll">
                    <span>Learn More </span>
                </div> */}
                  <div className="fixed-misc">Web Developer || Vlogger || Coach || DJ 
                </div>

                
              
            </div>
        </div>
    )
}

export default Banner