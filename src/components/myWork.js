import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import AOS from 'aos';
import 'aos/dist/aos.css';

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
                    <div className="imageOne" data-aos="fade-in">
                      <Img fluid={data.picOne.childImageSharp.fluid}>
                      </Img>
                    </div>
                    <hr></hr>
                </div>
                {/* <div className="scroll">
                    <span>Learn More </span>
                </div> */}
                  <div className="fixed-misc">Web Developer || Engineer || Coach || DJ 
                </div>
            </div>
        </div>
    )
}

export default MyWork