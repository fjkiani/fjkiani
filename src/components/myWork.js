import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const MyWork = () => {
    const data = useStaticQuery(graphql`
    query {
        picOne: file(relativePath: { eq: "myWork.png" }) {
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
            <div className = "container">
                <div className = "row">
                    <div className="imageOne">
                      <Img fluid={data.picOne.childImageSharp.fluid}>
                      </Img>
                    </div>
                    <hr></hr>
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

export default MyWork