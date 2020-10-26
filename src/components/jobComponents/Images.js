// import React, {useEffect} from 'react'
// import {graphql, useStaticQuery} from 'gatsby'
// import { Link } from "gatsby"
// import Image from "gatsby-image"
// import SEO from '../components/seo'
// // import Achievements from "../components/achievementsComponents/Achievements"
// import Layout from '../components/layout'
// import '../styles/styles2.scss'
// import Header from "../components/header"
// import AOS from 'aos';
// import 'aos/dist/aos.css';


// const getImages = graphql `
// {
  
//     fluid: file(relativePath: {eq: "fahad2.png"}) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_withWebp
            
//         }
//       }
//     }
//        fluid2: file(relativePath: {eq: "thisFjk.jpg" }) {
//       childImageSharp {
//         fluid {
//          ...GatsbyImageSharpFluid          }
//       }
//     }
//   }
//   `
// const Images = ({dat}) => {

//   useEffect(() => {
//     AOS.init({
//     duration : 2000})
// }, [])

//   const data = useStaticQuery(getImages)
//   // console.log(data)
  
//      return (
//        <div>
//     <section>
//          <Header/>
//             <div className="banner">       
//             <div className = "container">
      
//             <div className="pictures">
//                 <div className = "row">
//                     <div className="imageTwo" >
//                       <Image fluid={data.fluid.childImageSharp.fluid}>
//                       </Image>
//                     </div>
//                     <div className="imageTwo" data-aos="fade-up" >
//                       <Image fluid={data.fluid2.childImageSharp.fluid}>
//                       </Image>
//                     </div>
//                     </div>
//                 </div>
//              </div>
//             </div>
//         </section>
//         </div>
        
//     )
// }

// export default Images