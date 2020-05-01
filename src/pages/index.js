import React from "react"
import '../styles/styles.scss'
import Header from "../components/header"
import {Link} from 'gatsby'
import Banner from "../components/banner"
import AboutWeb from "../components/aboutWeb"
import AboutTrain from "../components/aboutTrain"
import AboutDj from "../components/aboutDj"
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

  <section className="items">
    <div className="center">
    <Link to="/work" className="btn"> View All Work </Link>
    </div>
  </section>

    <Footer/>
    

  </div>
  
)

export default IndexPage
