import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import Image from "gatsby-image"
import SEO from '../components/seo'
import Contents from "../components/contentComponents/Contents"
import LatestWork from "../components/contentComponents/Contents"
import styled from 'styled-components'
import Layout from '../components/layout'
import '../styles/styles2.scss'
import Header from "../components/header"



const getImages = graphql `
{
    fixed: file(relativePath: {eq: "fahad3.5.jpg" }) {
      childImageSharp {
        fixed (height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "thisFjk.jpg"}) {
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
  // console.log(data)
  
     return (
       <div>
         <Header/>
            <div className="banner">       
            <div className = "container">
      
            <div className="pictures">
                <div className = "row">
                    <div className="imageTwo">
                      <Image fixed={data.fixed.childImageSharp.fixed}>
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
                  <div className="fixed-misc">Web Developer || Engineer || Coach || DJ 
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
           About FJK</h3>
          </div>
          <span className="block" />
          <p style={{ margin: '0px 0px 40px 0' }}>
            Hello there, My name is Fahad J. Kiani. I pride myself on being
            able to turn an idea into a product and bring it to life.
          </p>
          <div className="heading"><h3>
           Experience</h3>
          </div>
          <span className="block" />
          <p style={{ margin: '0px 0px 40px 0' }}>
          A well-rounded solution-oriented Engineer experienced in delivering measurable results in product, marketing, support, business and Software development
          </p>
          {/* <div className="heading"><h3>
           projects</h3>
          </div> */}
          <span className="block" />
          <div className="heading"><h3>
           Education</h3>
          </div>
          <span className="block" />
          <p style={{ margin: '0px 0px 40px 0' }}>
           City university of new york, john jay college 
          </p>
          <p style={{ margin: '0px 0px 40px 0' }}>
          Bachelors Of Science with a double Major in Information Technology and Network Security. Minor in biology 
          </p>
          <p style={{ margin: '0px 0px 40px 0' }}>
           Software Engineering cohort grauduate from per scholas new york.
          </p>
          <div className="heading"><h3>
           My Stack</h3>
          </div>
          <span className="block" />
          <p style={{ margin: '0px 0px 40px 0' }}>
           unique frameworks that deliver exceptional user-experiences 
          </p>
          <p
            style={{
              textAlign: 'center',
              margin: '0px 0px 40px 0',
              fontWeight: 700,
            }}
          >
            Currently working with Gatsby.js
          </p>
          <p style={{ textAlign: 'center' }}>Under the hood:</p>
          <div className="skillList">
            <ul>
              <b>Programming Languages</b>
              <li>JavaScript</li>
              <li>Java (OOP)</li>
              <li>C++</li>
            </ul>
            <ul>
              <b>Frameworks</b>
              <li>React</li>
              <li>Node.js</li>
              <li>Gatsby.js</li>
              <li>Express</li>
            </ul>
            <ul>
              <b>Data Analysis</b>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
            <ul>
              <b> Creativity </b>
              <li>Photoshop</li>
              <li>Figma</li>
              <li>Virtual DJ</li>
            </ul>
          </div>
          <div className="heading"><h3>
           What I can help you with?</h3>
          </div>
          <span className="block" />
          <p styleName="paragraps">
          building a product that you want to scale to customers globally     
          <br/><br/>
          An enabler for keeping the team feeling positioned for success
          <br/><br/>
          grow and retain acquisition for customers      
          <br/><br/> 
          guide vision of the product
          <br/><br/> 
          web and software developement
          <br/><br/>
          </p>
        </div>
        </div>
        <Contents />
    </Layout>
        </div>
        
    )
}

export default Images