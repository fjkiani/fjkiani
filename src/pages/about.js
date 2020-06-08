import React, {useEffect} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {Nav} from 'react-bootstrap';
import Image from "gatsby-image"
import SEO from '../components/seo'
import LatestWork from "../components/contentComponents/LatestWork"
import Achievements from "../components/achievementsComponents/Achievements"
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
          <div className="heading" data-aos="fade-in" ><h3>
           About FJK</h3>
          </div>
          <span className="block" />
          <div data-aos="fade-up">
          <p>
            Hi there, My name is Fahad J. Kiani.
          <br/><br/><hr/>
              <b> I help businesses, content creaters and entrepreneurs bring their vision to life  </b> </p>
          <hr></hr>
              </div>
             <span className="block" />
          </div>     

        <div className="innerContent">
          <div className="heading" data-aos="fade-up">
            <h3>My Specialization</h3>
              <span className="block" />
                 <p>I build websites and applications that are fast, realiable and SEO optimized using tech-stacks that make things easy
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
               <p>Software Engineering cohort grauduate from per scholas new york 
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
             <p>My mission is to deliver products that don't age or break
             <hr/>
              </p>
              <p>Under the hood:</p>
          </div>

          <div className="skillList" data-aos="fade-up" >
            <ul className="listItems">
              <b> Languages</b>
              <li>JavaScript</li>
              <li>Java</li>
              <li>C++</li>
            </ul>
            <ul className="listItems">
              <b>Frameworks</b>
              <li>React</li>
              <li>Gatsby.js</li>
            </ul>
            <ul className="listItems">
              <b>Backend</b>
              <li>Node.js</li>
              <li>Express</li>
            </ul>

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
          Help you build you a product that you can scale to customers globally     
          <br/><br/>
          Develop you an E-commerce application 
          <br/><br/>
          Create you a platform where you share your stories such as a blog site    
          <br/><br/> 
          Help you launch your business site
          <br/><br/> 
          </p>
          <div className="current" data-aos="fade-up">
              <p>My Expertise:</p>
          </div>

          <div className="skillList" data-aos="fade-up" >
            <ul className="listItems">
              <b>Web Development</b>
            </ul>
            <ul className="listItems">
              <b>Product Management</b>
            </ul>
            <ul className="listItems">
              <b>Sales Engineering</b>
            </ul>
                </div>
              <br></br>
                <hr/>
              </div>
            </div>
          </div> 
        </div>
        <br></br>
        <br></br>
        <br></br>
        <LatestWork/>
        <hr/>
        <Achievements/>

        <section className="items">
         <div className="btn" data-aos="fade-up">
         <Nav.Link href="https://drive.google.com/file/d/1iGhdet8NKmOWwYX0Uz62gw4fPHQP_Mc2/view?usp=sharing" target="_blank">My Resume</Nav.Link>

       </div>
    </section>
      </Layout>
        </div>
        
    )
}

export default Images