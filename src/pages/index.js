import React from "react"
import '../styles/styles.scss'
import Header from "../components/header"
import {Link} from 'gatsby'
import Banner from "../components/banner"
import AboutWeb from "../components/aboutWeb"
import AboutTrain from "../components/aboutTrain"
import AboutDj from "../components/aboutDj"
import Footer from "../components/footer"
// import Services from "../components/services"
import MyWork from "../components/myWork";
import LatestWork from "../components/contentComponents/LatestWork"
import Reviews from "../components/reviewsComponents/Reviews"
import SEO from "../components/seo"
import Services from "../components/Services"
import Jobs from "../components/jobComponents/Jobs"
import TechnicalServices from "../components/TechnicalServices"




const IndexPage = ({data}) => (


  <div>

    <SEO title="Home" keywords={[`fahadkiani`, `fahad`, `dj fahad`,`Freelance Web Developer in New York`, `Freelance Web Developer in New Jersey`, `Web Design`, `Get help building a website`, `Javascript Developer`, `UI UX Designer`, `Fahad Kiani`, `Fahad J Kiani`, `Fjkiani`, `Build a website`, `Hire someone to build a website`, `Software Engineer`,`ik pakistan tours`, `Hire A Product Manager`, `DJ Kiani`, `DJK`, `#Fjkiani`, `#DJK`, `Hire A DJ`]} 
    />
    <Header/>
    <Banner />
    <AboutWeb />
     {/* <AboutTrain/> */}
    {/* <AboutDj />  */}
    <Services/>
    <hr></hr>
    <MyWork/>
    <LatestWork/>
    <TechnicalServices/>



  <section className="items">
    <div className="center">
    <Link to="/fjk" className="btn" data-aos="fade-in"> Learn More </Link>
    </div>
  </section>

  {/* <Reviews/> */}

    <Footer/>
    

  </div>
  
)

export default IndexPage
