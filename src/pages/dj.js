import React from 'react'
import { useStaticQuery, graphql, Link} from "gatsby"
import Image from "gatsby-image"
import SEO from '../components/seo'
import Header from "../components/header"
import Layout from '../components/layout'
import '../styles/styles2.scss'
import DjkContents from "../components/djkComponents/DjkContents"





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
  
     return (
       <div>
               <Header />
            <div className="banner">       
            <div className = "container">
           
            <div className="pictures">
                <div className = "row">
                    <div className="imageTwo">
                      <Image fluid={data.fluid1.childImageSharp.fluid}>
                      </Image>
                    </div>
                    <hr></hr>
                    <div className="imageTwo">
                      <Image fluid={data.fluid.childImageSharp.fluid}>
                      </Image>
                    </div>
                  
                    </div>
                </div>
                {/* <div className="scroll">
                    <span>Learn More </span>
                </div> */}
                  <div className="fixed-misc">Engineer || Blogger || Coach || DJ 
                </div>
            </div>
        </div>
      <Layout>
      <SEO
        title="About"
        keywords={[`Hire Developer`, `Hire Designer`, `React Developer`]}
      />
      <div className="about">
        <div className="inner">
          <div className="heading"><h3>
           About DJK</h3>
          </div>
          <span className="block" />
          <p>
            Hi there, My name is DJ Kiani. I take pride in creating special moments with Music <br/> <br/>
            
          </p>
          <div className="heading"><h3>
           My Approach </h3>
          </div>
          <span className="block" />
          <p style={{ margin: '0px 0px 40px 0' }}>
           Play music that causes euphoria   
          </p>
          {/* <div className="heading"><h3>
           projects</h3>
          </div> */}
          <span className="block" />
          <div className="heading"><h3>
           logic </h3>
          </div>
          <span className="block" />
          <p style={{ margin: '0px 0px 40px 0' }}>
          Music is known to cause happiness. It triggers dopamine neurotransmitters that make you feel happy. </p>
          
         <p> Beyond happiness, there is evidence that music can be good for your health and also drive productivity, reduce anxiety, energize your limbs, and even boost your immune system.


              </p>
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