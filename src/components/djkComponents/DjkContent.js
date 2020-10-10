import React from 'react'
import Image from 'gatsby-image'




// accessing the items as props from Contents through destructuring 

const DjkContent = ({title, url, image, info}) => {
 
   
    //pass the fluid prop to image
    const mainImage = image.childImageSharp.fluid

    return (
      <div className="latestWork aboutDev">
      <div className = "container">
         <div className = "latestAbout inner-About">
         <div className="images">
             <div className="devPic"> 

             <div className="anchors">
             <a href={url} target="_blank"  rel="noopener noreferrer"> 
          
             <Image fluid = {mainImage} alt={title}/>
               </a>
               </div>
              <hr /> <br />
             </div>
             
             </div>
           <div class = "content">
           <a href={url} target="_blank"  rel="noopener noreferrer"> 
              <h3>{title}</h3>
              </a>
              <p>{info} </p>
          <div className="btn-row">
            {/* <Link to="/work">View Work</Link>     */}
              </div>
            </div>
            </div>
        </div>
    </div>

    )
}

export default DjkContent
