import React from 'react'
import Image from 'gatsby-image'
import styles from './content.css'


// accessing the items as props from Contents through destructuring 

const Content = ({url,title,image}) => {
    // console.log(url)
   
    //pass the fluid prop to image
    const mainImage = image.childImageSharp.fluid
    
    return (
        <article className="content2">
           <div className="imgContainer">
           <Image fluid = {mainImage} alt={title} className={styles.img}>
           </Image>
           <a href={url} className="link" target="_blank" rel="noopener noreferrer"></a>
           </div>
           <div className="footer">
             <div className="text">
             <a href={url} target="_blank">
                <h3>{title}</h3>   
                </a>
             </div>
           
           </div>
        
        
        </article>

    )
}

export default Content
