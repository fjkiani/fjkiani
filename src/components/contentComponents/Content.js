import React from 'react'
import Image from 'gatsby-image'
import styles from '../../styles/content.css'
import { useStaticQuery, graphql} from "gatsby"



// accessing the items as props from Contents through destructuring 

const Content = ({title, url, image, info}) => {
  
   
    //pass the fluid prop to image
    const mainImage = image.childImageSharp.fluid
    
    return (
      <div className="latestWork aboutDev">
      <div className = "container">
         <div className = "latestAbout inner-About">
         <div className="images">
             <div className="devPic"> 
             <a href={url} target="_blank"> 
          
             <Image fluid = {mainImage} alt={title}      />
               </a>
              <hr /> <br />
             </div>
             
             </div>
           <div class = "content">
              <h3>{title}</h3>
              <p>{info} </p>
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

export default Content
