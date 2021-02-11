import React, {useEffect} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { Link } from "gatsby"
import Image from "gatsby-image"
import SEO from '../components/seo'
// import Achievements from "../components/achievementsComponents/Achievements"
import Layout from '../components/layout'
import '../styles/styles2.scss'
import Header from "../components/header"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Jobs from "../components/jobComponents/Jobs"
// import BackgroundImage from 'gatsby-background-image'






const getImages = graphql `
{
  
    fluid: file(relativePath: {eq: "fahad2.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
            
        }
      }
    }
       fluid2: file(relativePath: {eq: "thisFjk.jpg" }) {
      childImageSharp {
        fluid {
         ...GatsbyImageSharpFluid          }
      }
    }
  }
  `
const Images = ({dat}) => {

  useEffect(() => {
    AOS.init({
    duration : 2000})
}, [])

  const data = useStaticQuery(getImages)
  // console.log(data)
  
     return (
       <div>
    <section>
         <Header/>
            <div className="banner">       
            <div className = "container">
      
            <div className="pictures">
                <div className = "row">
                    <div className="imageTwo" >
                      <Image fluid={data.fluid.childImageSharp.fluid}>
                      </Image>
                    </div>
                    <div className="imageTwo" data-aos="fade-in" >
                      <Image fluid={data.fluid2.childImageSharp.fluid}>
                      </Image>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>


      <Layout>
      <SEO
        title="About"
        keywords={[`hire a web expert`, `fahad`, `dj fahad`, `dj kiani`, `hire a Web Developer in New York`, `Freelance Web Developer in New Jersey`, `Web Design`, `Get help building a website`, `Javascript Developer`, `UI UX Designer`, `Fahad Kiani`, `Fahad J Kiani`, `Fjkiani`, `Build a website`, `Hire someone to build a website`, `Software Engineer`,`Visit Pakistan`, `Hire A Product Manager`, `DJ Kiani`, `DJK`, `#Fjkiani`, `#DJK`, `Hire A DJ`]} 
      />
      <div className="about">
        <div className="inner">
        <div className="innerContent">
          {/* <div className="heading" data-aos="fade-in" ><h3>
           About FJK</h3>
          </div> */}
          <span className="block" />
          <div data-aos="fade-in">
       <div className="innerContent">
          <div className="heading" data-aos="fade-in">
            <h3>Welcome!</h3>
          <p>
            Hello World My name is Fahad J. Kiani.
          <br/><br/><hr/></p>
                  </div>
                </div>
              </div>
             <span className="block" />
          </div>     

      


        <div className="heading" data-aos="fade-in">
            <h3>My Experience</h3>
       </div>   
   </div> 
        </div>
        <Jobs/>
        <section className="items">
         <div className="center">
            <Link to="/contact" className="btn"> Learn More </Link>
        </div>
    </section>
        <hr/>
      </Layout>
        </div>
        
    )
}

export default Images