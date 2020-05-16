import React, {useEffect} from 'react'
import Image from 'gatsby-image'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Achievement = ({title, url, image}) => {
  
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
             <a href={url} target="_blank"  rel="noopener noreferrer"> 
          
             <Image fluid = {mainImage} alt={title}      />
               </a>
              <hr /> <br />
             </div>
             
             </div>
           <div class = "content">
              <p>{title}</p>

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

export default Achievement
