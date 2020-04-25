import React from "react"
import '../styles/styles.scss'
import Header from "../components/header"
// import Navbar from "../components/Nav.js/index.js.js.js"
import Banner from "../components/banner"
import AboutWeb from "../components/aboutWeb"
import AboutTrain from "../components/aboutTrain"
import AboutDj from "../components/aboutDj"
import VideoSection from "../components/videoSection"
import Footer from "../components/footer"
import MyWork from "../components/myWork";
import LatestWork from "../components/contentComponents/LatestWork"


// import Contact from "./contact"



const IndexPage = () => (
  <div>
    <Header/>
    <Banner />
    <AboutWeb />
    <AboutTrain/>
    <AboutDj />
    <hr></hr>
     <MyWork/>
    <LatestWork/>
    <Footer/>
    

  </div>
  
)

export default IndexPage
