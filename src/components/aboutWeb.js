import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";


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
                  <p>My name is Fahad J. Kiani.</p>
              <div className="btn-row">    
                  </div>
                  <AniLink fade to="/fjk">About FJK</AniLink>
                </div>
    
                </div>
            </div>
        </div>

    )
}

export default AboutWeb