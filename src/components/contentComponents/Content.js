import React, {useEffect} from 'react'
import Image from 'gatsby-image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from "../../styles/content.css"




// accessing the items as props from Contents through destructuring 

const Content = ({title, url, image, info}) => {
  
  useEffect(() => {
    AOS.init({
    duration : 2000})
}, [])

   
    //pass the fluid prop to image
    const mainImage = image.childImageSharp.fluid
    
    return (
      <div className="latestWork aboutDev">
      <div className = "container">
         <div className = "latestAbout inner-About">
         <div className="images" data-aos="fade-up">
             <div className="devPic">
             <a href={url} target="_blank" rel="noopener noreferrer" > 
          
             <Image fluid = {mainImage} alt={title}      />
               </a>
              <hr /> <br />
             </div>
             
             </div>
           <div class = "content">
              <h4 className="contentParagraph">{title}</h4>
              <p>{info}</p>
 
        
            </div>
            </div>
        </div>
    </div>

    )
}

export default Content
