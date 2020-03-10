import React from "react"
import '../styles/styles.scss'
import Header from "../components/header"
import Banner from "../components/banner"
import AboutWeb from "../components/aboutWeb"
import AboutTrain from "../components/aboutTrain"
import AboutDj from "../components/aboutDj"
import VideoSection from "../components/videoSection";



const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutWeb />
    <AboutTrain/>
    <AboutDj />
    <VideoSection/>

  </div>
  
)

export default IndexPage
