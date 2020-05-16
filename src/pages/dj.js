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
  fluid1: file(relativePath: {eq: "djk2.jpg" }) {
    childImageSharp {
        fluid (maxWidth: 1000)  {
        ...GatsbyImageSharpFluid

      }
    }
  }
    fluid: file(relativePath: {eq: "thisDjk.jpg"}) {
      childImageSharp {
        fluid {
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
               <SEO
        title="DJ"
        keywords={[`Hire a Dj`, `hire dj`, `hire a dj near me`, `hire dj for wedding`, `hire a dj for wedding`, `Dj's in New York`, `Dj's in New Jersey`, `Hire a good dj`, `good dj's near me`, `edm dj's`, `hire a dj for corporate event`, `corporate event dj's`, `dj kiani`, `fahad kiani`, `#DJK`, `DJ K`, `wedding dj's near me`, `wedding dj`, `wedding dj's`, `Hire a dj for a party`, `DJ's near me`, `virtual dj`, `covid-19 dj`, `hire a virtual dj`, `affordable dj`]}
        />
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
                    <div className="imageTwo" data-aos="fade-in">
                      <Image fluid={data.fluid.childImageSharp.fluid}>
                      </Image>
                    </div>
                  
                    </div>
                </div>
                {/* <div className="scroll">
                    <span>Learn More </span>
                </div> */}
                  <div className="fixed-misc"> Web Developer || Engineer || Coach  || DJ  
                </div>
            </div>
        </div>
      <Layout>
      <div className="about">
        <div className="inner">
          <div className="heading" data-aos="fade-in"><h3>
           About DJK</h3>
         
          <span className="block" />
          <p>
            Hi there, My name is DJ Kiani. I take pride in creating special moments with Music <br/> <br/>
          </p>
          </div>

          <div className="heading" data-aos="fade-in" ><h3>
           My Approach </h3>
          </div>
          <span className="block" />
          <div data-aos="fade-in"><p>
           Play music that causes euphoria </p>
          </div>
          <span className="block" />
          <div className="heading" data-aos="fade-in" ><h3>
           logic </h3>
          
          <span className="block" />
          <p>
          Music is known to cause happiness. It triggers dopamine neurotransmitters that make you feel happy. </p>
          
         <p> Beyond happiness, there is evidence that music can be good for your health and also drive productivity, reduce anxiety, energize your limbs, and even boost your immune system.


                </p>
              </div>
           </div>
        </div>  
        <DjkContents/>

        <section className="items">
         <div className="center">
            <Link to="/about" className="btn"> Learn About FJK </Link>
        </div>
    </section>
    </Layout>
        </div>
        
    )
}

export default Images