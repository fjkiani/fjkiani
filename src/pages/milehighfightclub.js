import React, {useEffect} from 'react'
import { useStaticQuery, graphql, Link} from "gatsby"
import Image from "gatsby-image"
import SEO from '../components/seo'
import Header from "../components/header"
import Layout from '../components/layout'
import '../styles/styles2.scss'
import DjkContents from "../components/djkComponents/DjkContents"
import AOS from 'aos'
import 'aos/dist/aos.css'





const getImages = graphql `
{
  fluid1: file(relativePath: {eq: "fightClub.jpg" }) {
    childImageSharp {
        fluid (maxWidth: 1000)  {
        ...GatsbyImageSharpFluid

      }
    }
  }
  }
  `
const Images = ({dat}) => {
  const data = useStaticQuery(getImages)
  console.log(data)

  useEffect(() => {
    AOS.init({
    duration : 2000})
}, [])
  
     return (
       <div>
            <Header />
            <div className="banner">       
            <div className = "container">
           
            <div className="pictures">
                <div className = "row">
                    <div className="imageTwo" >
                      <Image fluid={data.fluid1.childImageSharp.fluid}>
                      </Image>
                    </div>
                    <hr></hr>
                    </div>
                </div>
            </div>
        </div>
      <Layout>
      <div className="about">
        <div className="inner">
          <div className="heading" data-aos="fade-in">
          <h3>About</h3>
          <span className="block" />
          <p>
           Mile High Fight Club welcomes all. We are a virtual fight club that promotes health and wellness through equipment free self-defence workouts <br/> <br/>
          </p>

          <hr></hr>
          
          <h3>How it works</h3>
          <span className="block" />
          <p>
           Our meetups are invite only <br/> <br/>
          </p>

          <hr></hr>
          
          <h3>Cost</h3>
          <span className="block" />
          <p>
           $0 <br/><br/>
          <hr/>To help people achieve their health and wellness goals during the pandemic of COVID-19, our services are free to all members   <br/> <br/>
          </p>  

          <h3>Types of classes</h3>
          <span className="block" />
          <p>
           Boxing, Kickboxing and HIIT <br/> <br/>
          </p>  


          <h3>Ready to see what the hype is?</h3>
          <span className="block" />
       

            </div>
           </div>
        </div>  

        <section className="items">
         <div className="center">
            <Link to="/contact" className="btn">Sign Up (it's free) </Link>
        </div>
    </section>
    </Layout>
        </div>
        
    )
}

export default Images