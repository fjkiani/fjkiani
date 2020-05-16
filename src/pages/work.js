import React from "react"
import Layout from "../components/layout"
import MyWork from "../components/myWork"
import Header from "../components/header"
import {Link} from 'gatsby'
import Contents from "../components/contentComponents/Contents"
import SEO from "../components/seo"




const Courses = () => {
  return (

    <Layout>
    <SEO title="Work" keywords={[`Web Developer in New York`, `Web Developer in New Jersey`, `Web Design`, `How to build a website`, `web devlopers near me`,  `Javascript Developer`, `UI UX Designer`, `Fahad Kiani`, `Fahad J Kiani`, `Fjkiani`, `Build a website`, `Hire someone to build a website`, `Software Engineer`,`Visit Pakistan`, `Covid-19 Tracker`, `Covid-19 stats`, `Hire A Product Manager`, `DJ Kiani`, `DJK`, `#Fjkiani`, 
    `#DJK`, `Hire A DJ`,
    //list projects 
    `covid-19 tracker`, `f covid-19`, `ftocovid.us`, `joybeats`, `ikpakistantours`, `is pakistan safe to travel`, 
  ]} 
    />
    <Header/>
    <MyWork/>
    <Contents/>
    <section className="items">
    <div className="center">
    <Link to="/about" className="btn"> About FJK </Link>
    </div>
    </section>
    </Layout>
  )
}

export default Courses