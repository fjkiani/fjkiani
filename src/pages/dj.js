import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import Image from "gatsby-image"
import SEO from '../components/seo'
import Header from "../components/header"
import styled from 'styled-components'
import Layout from '../components/layout'
import '../styles/styles2.scss'





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
            <div className="banner">       
            <div className = "container">
            <Header/>
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
      <Header />
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
          Music is known to cause happiness. It triggers dopamine neurotransmitters that make you feel happy. Beyond happiness, there is evidence that music can be good for your health and also drive productivity. Research shows the right tune can temper your feelings of anxiety, energize your limbs, and even boost your immune system.


              </p>
           </div>
        </div>  
    </Layout>
        </div>
        
    )
}

export default Images