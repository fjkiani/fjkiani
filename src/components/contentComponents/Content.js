import React from 'react'
import Image from 'gatsby-image'
import content from './content.css'
import { useStaticQuery, graphql} from "gatsby"



// accessing the items as props from Contents through destructuring 

const Content = ({title, url, image}) => {
  
   
    //pass the fluid prop to image
    const mainImage = image.childImageSharp.fluid
    
    return (
      <div>
      <a href= {url}
      target="_blank"
      rel="noopener noreferrer"
      className="course-link">

          <article className="course">
           <div className="imgContainer">
            <Image fluid = {mainImage} alt={title}
           
           className="img"
           >
           </Image>

           

           </div>

           <div className="footer">
             {/* <h3>{title}</h3> */}
             <p>
          </p>

           
           </div>
        
        
        </article>

      </a>

</div>

    )
}

export default Content
