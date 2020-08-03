import React, {useEffect} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {Nav} from 'react-bootstrap';
import { Link } from "gatsby"
import Image from "gatsby-image"
import SEO from '../components/seo'
import LatestWork from "../components/contentComponents/LatestWork"
// import Achievements from "../components/achievementsComponents/Achievements"
import Layout from '../components/layout'
import '../styles/styles2.scss'
import Header from "../components/header"
import AOS from 'aos';
import 'aos/dist/aos.css';





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
                      <Image fixed={data.fixed.childImageSharp.fixed}>
                      </Image>
                    </div>
                    <hr></hr>
                    <div className="imageTwo" data-aos="fade-up" >
                      <Image fluid={data.fluid.childImageSharp.fluid}>
                      </Image>
                    </div>
                    </div>
                </div>
                {/* <div className="scroll">
                    <span>Learn More </span>
                </div> */}
                  {/* <div className="fixed-misc"> Web Developer || Engineer || Coach  || DJ 
                </div> */}
            </div>
        </div>
        </section>


      <Layout>
      <SEO
        title="About"
        keywords={[`hire a web expert`, `fahad`, `dj fahad`,`Freelance Web Developer in New York`, `Freelance Web Developer in New Jersey`, `Web Design`, `Get help building a website`, `Javascript Developer`, `UI UX Designer`, `Fahad Kiani`, `Fahad J Kiani`, `Fjkiani`, `Build a website`, `Hire someone to build a website`, `Software Engineer`,`Visit Pakistan`, `Hire A Product Manager`, `DJ Kiani`, `DJK`, `#Fjkiani`, `#DJK`, `Hire A DJ`]} 
      />
      <div className="about">
        <div className="inner">
        <div className="innerContent">
          {/* <div className="heading" data-aos="fade-in" ><h3>
           About FJK</h3>
          </div> */}
          <span className="block" />
          <div data-aos="fade-up">
          <p>
            Hello World My name is Fahad J. Kiani.
          <br/><br/><hr/>
              I architect solutions that scale through software and businesses </p>
          <hr></hr>
              </div>
             <span className="block" />
          </div>     

        <div className="innerContent">
          <div className="heading" data-aos="fade-up">
            <h3>My Specialization</h3>
              <span className="block" />
                 <p>Delivering customer success through modern web applications 
               </p>
               <hr></hr>
          </div>
        <span className="block" />
        </div>

        <div className="innerContent">
          <div className="heading" data-aos="fade-up">
            <h3>Clients I work with</h3>
              <span className="block" />
                 <p>small business owners, fitness trainers, influencers and content creators   
               </p>
               <hr></hr>
          </div>
        <span className="block" />
        </div>

        <div className="innerContent">
          <div className="heading" data-aos="fade-up">
            <h3>My Education</h3>
             <span className="block" />
               <p>City university of new york, john jay college</p>
               <p>Bachelors Of Science in Computer Science with a Minor in biology</p>
               <p>Software Engineering cohort graduate from per scholas new york 
               </p>
               <hr></hr>
            </div>
          </div>
        <span className="block" />  

        <div className="innerContent">
          <div className="heading" data-aos="fade-up">
             <h3> My Stack</h3>
              <span className="block" />
               <p> unique frameworks that deliver exceptional user-experiences 
              </p>
            </div>

          <div className="current" data-aos="fade-up">
             <p>My mission is to deliver customer success through technical innovation
             <hr/>
              </p>
              <p>Under the hood:</p>
          </div>

          <div className="skillList" data-aos="fade-up" >
            <ul className="listItems">
              <li>JavaScript</li>
              <li>Java</li>
              <li>C++</li>
              <li>SQL</li>
              <li>APIs </li>
      



            </ul>
            {/* <ul className="listItems">
              <b>Programing Frameworks</b>
              <li>React</li>
              <li>Gatsby.js</li>
              <li>JQuery</li>
              <li>Bootstrap</li>
            </ul>
            <ul className="listItems">
              <b>API Frameworks</b>
              <li>REST</li>
              <li>SOAP</li>
              <li>GraphQL</li>
            </ul> */}

            </div>
          </div>
          <hr/>
          <span className="block" />  


         <div className="innerContent">
          <div className="heading" data-aos="fade-up"><h3>
           What can I help you with?</h3>
          </div>
          <span className="block" />
          <div data-aos="fade-in">
          <p>
          Help scale customer success through technical architects    
          <br/><br/>
          Build software solutions 
          <br/><br/>
          SEO optimization   
          <br/><br/> 
          Build solutions with external APIs
          <br/><br/> 
          Deploy cloud data infastructures 
          <br/><br/> 
          </p>
    
                <hr/>
              </div>
            </div>
          </div> 
        </div>
        <section className="items">
         <div className="center">
            <Link to="/work" className="btn"> View my work </Link>
        </div>
    </section>
        <hr/>
      </Layout>
        </div>
        
    )
}

export default Images