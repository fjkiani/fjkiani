import React from "react"
import Layout from "../components/layout"
import MyWork from "../components/myWork"
import Header from "../components/header"
import {Link} from 'gatsby'
import Contents from "../components/contentComponents/Contents"




const Courses = () => {
  return (
    <Layout>
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